/* arc-ui mirror — app shell: hash routing (#/c/<slug>, #/b/<slug>), search,
   filters (kind/tier/category), tabs (Demo/Docs/Instalação) and live demo
   mounting. All React work goes through the site's own React instance
   (globalThis.__ARC__.dom), so registry items and route-B bundles share one
   reconciler. */
(() => {
  "use strict";

  const ARC = globalThis.__ARC__;
  const R = ARC.dom.R;
  const h = ARC.dom.createElement;
  const app = document.getElementById("app");
  const searchInput = document.getElementById("global-search");

  /* ---------------- state ---------------- */
  let CATALOG = [];
  const bySlug = new Map();
  let liveRoot = null;
  let mountSeq = 0;
  let currentDetail = null;
  let activeTab = "demo";
  const filters = { q: "", kind: "all", tier: "all", cat: "all" };

  /* ---------------- tiny dom helpers ---------------- */
  function el(tag, attrs, ...kids) {
    attrs = attrs || {};
    const n = document.createElement(tag);
    for (const k of Object.keys(attrs)) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k === "dataset") Object.assign(n.dataset, v);
      else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2).toLowerCase(), v);
      else if (v === true) n.setAttribute(k, "");
      else n.setAttribute(k, String(v));
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false) continue;
      n.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
    }
    return n;
  }

  /* ---------------- theme ---------------- */
  function currentTheme() { return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light"; }
  function applyTheme(t) {
    const root = document.documentElement;
    if (t === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    try { localStorage.setItem("arc-theme", t); } catch (e) {}
    const b = document.getElementById("theme-toggle");
    if (b) { b.textContent = t === "dark" ? "☀︎" : "☾"; b.title = t === "dark" ? "Tema claro" : "Tema escuro"; }
  }
  function initTheme() {
    let pref = null;
    try { pref = localStorage.getItem("arc-theme"); } catch (e) {}
    const dark = pref ? pref === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(dark ? "dark" : "light");
    document.getElementById("theme-toggle").addEventListener("click", () =>
      applyTheme(currentTheme() === "dark" ? "light" : "dark"));
  }

  /* ---------------- asset loaders ---------------- */
  const scriptSeen = new Set();
  function addScript(src) {
    if (scriptSeen.has(src)) return Promise.resolve();
    scriptSeen.add(src);
    return new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = res;
      s.onerror = () => rej(new Error("não consegui carregar " + src));
      document.head.append(s);
    });
  }
  const linkSeen = new Set();
  function addLink(href) {
    if (!href || linkSeen.has(href)) return;
    linkSeen.add(href);
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = href;
    document.head.append(l);
  }

  /* ---------------- live demo lifecycle ---------------- */
  class ErrorBoundary extends R.Component {
    constructor(props) { super(props); this.state = { err: null }; }
    static getDerivedStateFromError(err) { return { err }; }
    componentDidCatch(err) { console.error("[arc-ui] demo:", err); }
    render() {
      if (this.state.err) {
        return h("div", { class: "demo-error" },
          h("strong", null, "Falha ao renderizar este demo"),
          h("pre", null, String((this.state.err && this.state.err.message) || this.state.err)));
      }
      return this.props.children;
    }
  }

  function destroyLive() {
    mountSeq++;
    if (liveRoot) {
      try { if (liveRoot.unmountArc) liveRoot.unmountArc(); else liveRoot.unmount(); } catch (e) {}
      liveRoot = null;
    }
  }

  // mirrors the smoke-test resolver: default, single export, single candidate,
  // then anything named *Demo (pro modules ship their live demo as an export)
  function pickComp(ns) {
    const keys = Object.keys(ns).filter(k => k !== "__esModule" && k !== "default" && ns[k]);
    const isC = v => typeof v === "function" || (v && typeof v === "object" && ("$$typeof" in v || v.render || v.type));
    if (ns.default && isC(ns.default)) return ns.default;
    if (keys.length === 1 && isC(ns[keys[0]])) return ns[keys[0]];
    const cand = keys.filter(k => isC(ns[k]));
    if (cand.length === 1) return ns[cand[0]];
    const demo = cand.find(k => /Demo$/.test(k));
    if (demo) return ns[demo];
    return cand.length ? ns[cand[0]] : null;
  }

  async function mountDemo(host, item) {
    const seq = ++mountSeq;
    destroyLiveKeepSeq();
    function destroyLiveKeepSeq() { // unmount without bumping the sequence
      if (liveRoot) { try { if (liveRoot.unmountArc) liveRoot.unmountArc(); else liveRoot.unmount(); } catch (e) {} }
      liveRoot = null;
    }
    host.replaceChildren();
    const d = item.demo;
    try {
      if (d.type === "bundle") {
        addLink(d.css);
        // ES module specifiers must start with ./ — resolve against this module's URL
        const mod = await import(new URL(d.bundle, document.baseURI).href);
        if (seq !== mountSeq) return;
        liveRoot = mod.mount(host);
        return;
      }
      await addScript(d.registry);
      ARC.flushCss();
      if (seq !== mountSeq) return;
      let entry = d.entryModule, exp = d.entryExport;
      if ((entry == null || !ARC.has(entry)) && ARC.items[item.name]) {
        entry = ARC.items[item.name].entry;
        if (exp == null) exp = ARC.items[item.name].export || null;
      }
      const ns = ARC.get(entry);
      let node = null, tailErr = null;
      if (d.tail) {
        try {
          const make = new Function("e", "l", "return (" + d.tail + ")")(ns, ARC.dom.J);
          node = typeof make === "function" ? make(ns) : make;
          if (node == null) throw new Error("o factory de demo retornou vazio");
          if (typeof node !== "function" && typeof node !== "object") throw new Error("o factory de demo retornou um tipo inesperado");
        } catch (e) { tailErr = e; node = null; }
      }
      if (node == null) {
        const Comp = exp ? ns[exp] : pickComp(ns);
        if (!Comp) throw new Error(tailErr ? "sem export de fallback (" + tailErr.message + ")" : "nenhum componente reconhecível neste módulo");
        node = Comp;
      }
      const root = ARC.dom.createRoot(host);
      // node is either a component (function / forwardRef) or a ready-made
      // React element (some demo factories return the element itself)
      const child = ARC.dom.isValidElement(node) ? node : h(node, null);
      root.render(h(ErrorBoundary, null, child));
      root.unmountArc = () => { try { root.unmount(); } catch (e) {} };
      liveRoot = root;
    } catch (e) {
      if (seq !== mountSeq) return;
      host.append(el("div", { class: "demo-error" },
        el("strong", {}, "Não foi possível montar este demo"),
        el("pre", {}, String((e && e.message) || e))));
    }
  }

  /* ---------------- routing ---------------- */
  function parseRoute() {
    const m = (location.hash || "#/").match(/^#\/([cb])\/([\w.-]+)(?:\b|$)/);
    if (m) return { view: "detail", letter: m[1], slug: m[2] };
    return { view: "home" };
  }
  function route() {
    const r = parseRoute();
    if (r.view === "detail") {
      const item = bySlug.get(r.slug);
      if (item) {
        const want = item.kind === "component" ? "c" : "b";
        if (want !== r.letter) history.replaceState(null, "", "#" + want + "/" + r.slug);
        renderDetail(item);
      } else renderNotFound(r.slug);
    } else renderHome();
  }

  /* ---------------- home ---------------- */
  function renderHome() {
    destroyLive();
    currentDetail = null;
    app.replaceChildren();
    app.append(
      el("section", { class: "hero" },
        el("h1", {}, "Todos os itens", " ", el("span", { class: "hero-count" }, String(CATALOG.length))),
        el("p", { class: "hero-sub" },
          "Espelho navegável do ",
          el("a", { href: "https://uiarc.dev/components", target: "_blank", rel: "noreferrer" }, "uiarc.dev/components"),
          " — cada item abre com demo ao vivo, documentação e instalação. Free e Pro.")
      ),
      renderFilters()
    );
    const grid = el("div", { class: "grid", id: "grid" });
    const noRes = el("p", { class: "no-results", id: "no-results" }, "Nenhum item encontrado — limpe a busca ou os filtros.");
    noRes.style.display = "none";
    app.append(grid, noRes);
    fillGrid();
    window.scrollTo(0, 0);
  }

  function renderFilters() {
    const catsAll = [];
    const seen = new Set();
    CATALOG.forEach(i => { if (i.category && !seen.has(i.category)) { seen.add(i.category); catsAll.push(i.category); } });
    catsAll.sort((a, b) => a.localeCompare(b));
    const sel = (id, value, options, label) => {
      const s = el("select", { id: "f-" + id, "aria-label": label },
        options.map(o => el("option", { value: o.v }, o.l)));
      s.value = value;
      s.addEventListener("change", () => { filters[id] = s.value; refreshHomeList(); });
      return s;
    };
    return el("div", { class: "filters" },
      sel("kind", filters.kind, [
        { v: "all", l: "componentes + blocos" },
        { v: "component", l: "componentes" },
        { v: "block", l: "blocos" }
      ], "Tipo"),
      sel("tier", filters.tier, [
        { v: "all", l: "free + pro" },
        { v: "free", l: "free" },
        { v: "pro", l: "pro" }
      ], "Nível"),
      sel("cat", filters.cat, [{ v: "all", l: "todas as categorias" }].concat(catsAll.map(c => ({ v: c, l: c }))), "Categoria"),
      el("span", { class: "result-count", id: "result-count" }, "")
    );
  }

  function visibleItems() {
    const words = filters.q ? filters.q.split(/\s+/).filter(Boolean) : [];
    return CATALOG.filter(i => {
      if (filters.kind !== "all" && i.kind !== filters.kind) return false;
      if (filters.tier !== "all" && i.tier !== filters.tier) return false;
      if (filters.cat !== "all" && i.category !== filters.cat) return false;
      if (words.length) {
        const hay = (i.title + " " + i.name + " " + i.category + " " + (i.tags || []).join(" ") + " " + (i.keywords || []).join(" ") + " " + i.description).toLowerCase();
        for (const w of words) if (!hay.includes(w)) return false;
      }
      return true;
    });
  }

  function refreshHomeList() {
    const r = parseRoute();
    if (r.view !== "home") { location.hash = "#/"; return; } // route() re-renders home
    fillGrid();
  }

  function fillGrid() {
    const grid = document.getElementById("grid");
    if (!grid) return;
    const list = visibleItems();
    grid.replaceChildren.apply(grid, list.map(card));
    const c = document.getElementById("result-count");
    if (c) c.textContent = list.length === CATALOG.length
      ? String(list.length) + " itens"
      : list.length + " de " + CATALOG.length + " itens";
    const nr = document.getElementById("no-results");
    if (nr) nr.style.display = list.length ? "none" : "block";
  }

  function card(i) {
    const k = i.kind === "component" ? "c" : "b";
    return el("a", { class: "card", href: "#" + (k === "c" ? "/c/" : "/b/") + i.name },
      el("div", { class: "card-top" },
        el("span", { class: "badge badge-kind" }, i.kind === "component" ? "componente" : "bloco"),
        i.tier === "pro"
          ? el("span", { class: "badge badge-pro" }, "Pro")
          : el("span", { class: "badge badge-free" }, "free"),
        i.category ? el("span", { class: "card-cat" }, i.category) : null),
      el("h3", { class: "card-title" }, i.title),
      el("p", { class: "card-desc" }, i.description || ""));
  }

  /* ---------------- detail ---------------- */
  function renderDetail(item) {
    destroyLive();
    currentDetail = item;
    activeTab = "demo";
    app.replaceChildren();

    app.append(
      el("div", { class: "detail-head" },
        el("a", { class: "back", href: "#/" }, "← todos os itens"),
        el("h1", { class: "detail-title" }, item.title),
        el("div", { class: "badges" },
          el("span", { class: "badge badge-kind" }, item.kind === "component" ? "componente" : "bloco"),
          item.tier === "pro"
            ? el("span", { class: "badge badge-pro" }, "Pro")
            : el("span", { class: "badge badge-free" }, "free"),
          item.category ? el("span", { class: "badge badge-cat" }, item.category) : null),
        item.description ? el("p", { class: "detail-desc" }, item.description) : null,
        el("a", { class: "orig", href: item.docs, target: "_blank", rel: "noreferrer" }, "ver no uiarc.dev ↗"))
    );

    const tab = (id, label) => {
      const b = el("button", { class: "tab", type: "button", role: "tab", "aria-selected": id === activeTab ? "true" : "false", dataset: { tab: id } }, label);
      if (id === activeTab) b.classList.add("active");
      b.addEventListener("click", () => switchTab(id));
      return b;
    };
    app.append(el("nav", { class: "tabs", role: "tablist" }, tab("demo", "Demo"), tab("docs", "Docs"), tab("install", "Instalação")));

    const host = el("div", { id: "demo-host" });
    app.append(
      el("section", { class: "tabpane active", id: "pane-demo", role: "tabpanel" },
        el("div", { class: "demo-stage" },
          el("p", { class: "demo-loading" }, "carregando demo…"),
          host)),
      renderDocsPane(item),
      renderInstallPane(item)
    );
    window.scrollTo(0, 0);
    mountDemo(host, item).then(() => {
      const l = document.querySelector(".demo-loading");
      if (l) l.remove();
    }).catch(() => {});
  }

  function showPane(id) {
    activeTab = id;
    app.querySelectorAll(".tabpane").forEach(p => p.classList.toggle("active", p.id === "pane-" + (id === "install" ? "install" : id)));
    app.querySelectorAll(".tabs .tab").forEach(b => {
      const on = b.dataset.tab === id;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
  }

  function switchTab(id) {
    showPane(id);
    if (id === "demo" && !liveRoot && currentDetail) {
      const host = document.getElementById("demo-host");
      if (host) mountDemo(host, currentDetail).catch(() => {});
    }
  }

  function codeBlock(src) {
    return el("pre", { class: "code" }, el("code", {}, src || ""));
  }
  function strList(arr) {
    return el("ul", { class: "doc-list" },
      arr.map(x => el("li", {}, typeof x === "string" ? x : (x.text || x.label || JSON.stringify(x)))));
  }
  function textOrStr(x) { return typeof x === "string" ? x : (x && (x.text || x.label)) || ""; }

  function renderDocsPane(item) {
    const pane = el("section", { class: "tabpane", id: "pane-docs", role: "tabpanel" });
    if (item.usage) pane.append(el("h2", { class: "doc-h" }, "Uso"), codeBlock(item.usage));
    (item.examples || []).forEach(ex => {
      const t = typeof ex === "string" ? { title: "Exemplo", code: ex } : ex;
      pane.append(el("h2", { class: "doc-h" }, t.title || "Exemplo"), codeBlock(t.code || ""));
    });
    if (item.whenToUse && item.whenToUse.length) pane.append(el("h2", { class: "doc-h" }, "Quando usar"), strList(item.whenToUse));
    if (item.whenNotToUse && item.whenNotToUse.length) pane.append(el("h2", { class: "doc-h" }, "Evitar quando"), strList(item.whenNotToUse));
    if (item.dependencies && item.dependencies.length) {
      pane.append(el("h2", { class: "doc-h" }, "Dependências"),
        el("div", { class: "chips" }, item.dependencies.map(d => el("span", { class: "chip" }, textOrStr(d) || JSON.stringify(d)))));
    }
    if (item.accessibility && item.accessibility.length) pane.append(el("h2", { class: "doc-h" }, "Acessibilidade"), strList(item.accessibility));
    if (item.motion && item.motion.length) pane.append(el("h2", { class: "doc-h" }, "Movimento"), strList(item.motion));
    if (item.related && item.related.length) {
      pane.append(el("h2", { class: "doc-h" }, "Relacionados"),
        el("div", { class: "chips" }, item.related.map(slug => {
          const it = bySlug.get(slug);
          if (!it) return el("span", { class: "chip" }, slug);
          const k = it.kind === "component" ? "c" : "b";
          return el("a", { class: "chip", href: "#/" + k + "/" + slug }, it.title);
        })));
    }
    if (!pane.childNodes.length) pane.append(el("p", { class: "doc-note" }, "Sem documentação adicional para este item."));
    return pane;
  }

  function renderInstallPane(item) {
    const importLine = (item.usage || "").split("\n").find(l => l.trim().startsWith("import")) || "";
    const pane = el("section", { class: "tabpane", id: "pane-install", role: "tabpanel" },
      el("h2", { class: "doc-h" }, "Como importar"),
      codeBlock(importLine || "// veja a aba Docs para o snippet de uso"),
      el("p", { class: "doc-note" },
        "No site original os itens entram pela CLI do uiarc.dev. Neste espelho o código está embutido na página: o demo acima roda o próprio módulo publicado, sem build do usuário."),
      item.tier === "pro"
        ? el("p", { class: "doc-note" },
            el("strong", {}, "Item Pro: "),
            "conteúdo extraído dos bundles públicos do site (os mesmos artefatos que o navegador baixa ao visitar o uiarc.dev). Os termos do site se aplicam — veja ",
            el("a", { href: "NOTICE.md" }, "NOTICE.md"), ".")
        : el("p", { class: "doc-note" }, "Item free do registro público do uiarc.dev."),
      el("p", { class: "doc-note" },
        "Página original: ",
        el("a", { href: item.docs, target: "_blank", rel: "noreferrer" }, item.docs)),
      item.sourceFiles != null
        ? el("p", { class: "doc-note" }, item.sourceFiles + " arquivo(s)-fonte no pacote original.")
        : null);
    return pane;
  }

  function renderNotFound(slug) {
    destroyLive();
    currentDetail = null;
    app.replaceChildren(
      el("div", { class: "notfound" },
        el("h1", {}, "Item não encontrado"),
        el("p", {}, "Nenhum item com o slug “" + String(slug).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])) + "” no catálogo."),
        el("a", { class: "back", href: "#/" }, "← voltar ao início")));
  }

  /* ---------------- init ---------------- */
  function initSearch() {
    searchInput.addEventListener("input", () => {
      filters.q = searchInput.value.trim().toLowerCase();
      refreshHomeList();
    });
    document.addEventListener("keydown", e => {
      const t = (document.activeElement || {}).tagName || "";
      if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(t)) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  async function init() {
    initTheme();
    initSearch();
    window.addEventListener("hashchange", route);
    try {
      const r = await fetch("catalog.json", { cache: "no-cache" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      CATALOG = await r.json();
    } catch (e) {
      app.replaceChildren(
        el("div", { class: "notfound" },
          el("h1", {}, "Falha ao carregar o catálogo"),
          el("pre", {}, String((e && e.message) || e)),
          el("a", { class: "back", href: location.pathname + "#/" }, "tentar de novo")));
      return;
    }
    CATALOG.forEach(i => bySlug.set(i.name, i));
    route();
  }

  init().catch(e => console.error("[arc-ui] init:", e));
})();
