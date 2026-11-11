function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { ArcMark: () => O, SiteHeader: () => q, SiteHeaderBlock: () => B, default: () => G, siteHeaderExampleItems: () => $ });
  var i = t(95155), r = t(12115), n = t(5772), s = t(79196), l = t(25354), o = t(18310), d = t(57700), c = t(80642), h = t(17082), u = t(24918), p = t(21748), m = t(52920), g = t(40557), f = t(94910), v = t(61663), y = t(63769), w = t(12363), k = t(9005), _ = t(96304), b = t(90467), x = t(66558), j = t(7770), A = t(67752), N = t(6912), C = t.n(N);
  let T = [...j.T.ease.enter], M = [...j.T.ease.standard], L = (e2, a2) => {
    let t2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: t2 * t2, damping: 2 * (1 - a2) * t2, mass: 1 };
  }, z = L(0.44, 0), R = L(0.34, 0), I = L(0.3, 0), P = L(0.4, 0), S = { hidden: (e2) => ({ opacity: 0, x: 36 * e2, y: e2 ? 0 : -6, filter: `blur(${j.T.blur.subtle}px)` }), shown: { opacity: 1, x: 0, y: 0, filter: "blur(0px)", transition: { x: P, y: P, opacity: { duration: j.T.duration.fast, ease: T, delay: 0.02 }, filter: { duration: j.T.duration.standard, ease: T } } }, gone: (e2) => ({ opacity: 0, x: -(36 * e2 * 0.6), filter: `blur(${j.T.blur.subtle}px)`, transition: { x: P, opacity: { duration: j.T.duration.instant, ease: M }, filter: { duration: j.T.duration.instant, ease: M } } }) }, E = { hidden: { opacity: 0 }, shown: { opacity: 1, transition: { duration: j.T.duration.fast } }, gone: { opacity: 0, transition: { duration: j.T.duration.instant } } };
  function O(e2) {
    return (0, i.jsxs)("svg", { className: e2.className, viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "5.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [(0, i.jsx)("path", { d: "M9 48V29C9 15 19 7 32 7s23 8 23 22v19" }), (0, i.jsx)("path", { d: "M20 48V31c0-8 5-13 12-13s12 5 12 13v17" }), (0, i.jsx)("path", { d: "M32 38v10" })] });
  }
  let H = { size: 16, strokeWidth: 1.75, "aria-hidden": true }, D = (0, A.jW)("curved-facade"), $ = [{ value: "product", label: "Product", links: [{ label: "Components", description: "140 interactive React components", icon: (0, i.jsx)(h.A, { ...H }) }, { label: "Blocks", description: "Complete sections, ready to ship", icon: (0, i.jsx)(u.A, { ...H }) }, { label: "Templates", description: "Starter sites with every page", icon: (0, i.jsx)(p.A, { ...H }) }, { label: "Themes", description: "Tune color, radius, and motion", icon: (0, i.jsx)(m.A, { ...H }) }], feature: { title: "What's new in 2.4", description: "Site headers, footers, and hero sections.", image: { src: D.src, alt: D.alt } } }, { value: "resources", label: "Resources", links: [{ label: "Documentation", description: "Install, theme, and compose", icon: (0, i.jsx)(g.A, { ...H }) }, { label: "Guides", description: "Patterns for real product work", icon: (0, i.jsx)(f.A, { ...H }) }, { label: "Changelog", description: "Every release, week by week", icon: (0, i.jsx)(v.A, { ...H }) }, { label: "Community", description: "Questions, answers, and showcases", icon: (0, i.jsx)(y.A, { ...H }) }] }, { value: "pricing", label: "Pricing" }, { value: "customers", label: "Customers" }];
  function V({ direction: e2, reduced: a2, onHeight: t2, children: n2 }) {
    let o2 = (0, r.useRef)(null), d2 = (0, s.tF)();
    return (0, r.useLayoutEffect)(() => {
      let e3 = o2.current;
      if (!e3 || !d2 || (t2(e3.offsetHeight), "u" < typeof ResizeObserver)) return;
      let a3 = new ResizeObserver(() => t2(e3.offsetHeight));
      return a3.observe(e3), () => a3.disconnect();
    }, [d2, t2]), (0, i.jsx)(l.PY1.div, { ref: o2, className: C().face, "data-face": "", "data-leaving": d2 ? void 0 : "", inert: !d2, custom: e2, variants: a2 ? E : S, initial: "hidden", animate: "shown", exit: "gone", children: n2 });
  }
  function W({ link: e2, onChoose: a2, children: t2, ...r2 }) {
    return e2.href ? (0, i.jsx)("a", { ...r2, href: e2.href, onClick: a2, children: t2 }) : (0, i.jsx)("button", { ...r2, type: "button", onClick: a2, children: t2 });
  }
  let q = (0, r.forwardRef)(function({ variant: e2 = "mega", brand: a2 = { name: "Arc" }, items: t2 = $, current: s2, defaultCurrent: h2, onCurrentChange: u2, onNavigate: p2, secondaryAction: m2 = { label: "Sign in" }, primaryAction: g2 = { label: "Get Arc" }, sticky: f2 = true, scrollContainer: v2, scrollThreshold: y2 = 8, label: x2 = "Main", className: A2 }, N2) {
    let L2 = (0, r.useId)(), P2 = !!(0, o.I)(), S2 = (function(e3, a3) {
      let [t3, i2] = (0, r.useState)(false);
      return (0, r.useEffect)(() => {
        let t4 = a3?.current ?? null, r2 = t4 ?? window, n2 = () => {
          let a4 = t4 ? t4.scrollTop : window.scrollY;
          i2((t5) => t5 ? a4 > e3 / 2 : a4 > e3);
        };
        return n2(), r2.addEventListener("scroll", n2, { passive: true }), () => r2.removeEventListener("scroll", n2);
      }, [e3, a3]), t3;
    })(y2, v2), [E2, H2] = (0, r.useState)(h2), D2 = s2 ?? E2, [q2, F2] = (0, r.useState)(null), [Y2, B2] = (0, r.useState)(null), [G2, U] = (0, r.useState)({ height: null, grow: true }), [Z, J] = (0, r.useState)(false), [K, Q] = (0, r.useState)(null), X = (0, r.useRef)(null), ee = (0, r.useRef)(null), ea = (0, r.useRef)(/* @__PURE__ */ new Map()), et = (0, r.useRef)(null), ei = (0, r.useRef)(void 0), er = (0, r.useRef)(void 0), en = (0, r.useRef)(false), es = "mega" === e2, el = Y2 ? t2.find((e3) => e3.value === Y2.value) : void 0, eo = (0, r.useCallback)((e3) => {
      X.current = e3, "function" == typeof N2 ? N2(e3) : N2 && (N2.current = e3);
    }, [N2]), ed = (0, r.useCallback)(() => {
      window.clearTimeout(ei.current), window.clearTimeout(er.current);
    }, []);
    (0, r.useEffect)(() => ed, [ed]);
    let ec = (0, r.useCallback)((e3) => {
      B2((a3) => {
        if (!e3) return null;
        if (a3?.value === e3) return a3;
        let i2 = a3 ? t2.findIndex((e4) => e4.value === a3.value) : -1, r2 = t2.findIndex((a4) => a4.value === e3);
        return { value: e3, direction: i2 < 0 ? 0 : Math.sign(r2 - i2) };
      }), e3 || U({ height: null, grow: true });
    }, [t2]), eh = (0, r.useCallback)((e3 = false) => {
      ed();
      let a3 = Y2?.value;
      ec(null), e3 && a3 && ea.current.get(a3)?.focus();
    }, [Y2, ec, ed]), eu = (0, r.useCallback)((e3 = false) => {
      J(false), Q(null), e3 && ee.current?.focus();
    }, []), ep = (0, r.useCallback)((e3, a3) => {
      a3 && (void 0 === s2 && H2(a3), u2?.(a3)), p2?.(e3), eh(), eu();
    }, [eh, eu, s2, u2, p2]);
    (0, r.useEffect)(() => {
      if (!Y2 && !Z) return;
      let e3 = (e4) => {
        X.current?.contains(e4.target) || (eh(), eu());
      }, a3 = (e4) => {
        "Escape" === e4.key && (Y2 ? eh(true) : eu(true));
      };
      return document.addEventListener("pointerdown", e3), document.addEventListener("keydown", a3), () => {
        document.removeEventListener("pointerdown", e3), document.removeEventListener("keydown", a3);
      };
    }, [Y2, Z, eh, eu]), (0, r.useEffect)(() => {
      let e3 = X.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(([e4]) => {
        e4 && (e4.contentRect.width >= 760 ? (J(false), Q(null)) : B2(null));
      });
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, r.useEffect)(() => {
      if (!Z) return;
      let e3 = v2?.current ?? document.documentElement, a3 = e3.style.getPropertyValue("overflow");
      return e3.style.setProperty("overflow", "hidden"), () => {
        a3 ? e3.style.setProperty("overflow", a3) : e3.style.removeProperty("overflow");
      };
    }, [Z, v2]), (0, r.useEffect)(() => {
      if (!Y2 || !en.current) return;
      en.current = false;
      let e3 = requestAnimationFrame(() => et.current?.querySelector("[data-panel-link]")?.focus());
      return () => cancelAnimationFrame(e3);
    }, [Y2]);
    let em = (0, r.useCallback)((e3) => U((a3) => a3.height === e3 ? a3 : { height: e3, grow: null === a3.height || e3 > a3.height }), []), eg = (e3, a3, t3 = "") => {
      let r2 = () => {
        e3.onClick?.(), e3.href && p2?.({ label: e3.label, href: e3.href }), eu();
      }, n2 = `${C().action} ${C()[a3]} ${t3}`;
      return e3.href ? (0, i.jsx)("a", { className: n2, href: e3.href, onClick: r2, children: e3.label }) : (0, i.jsx)("button", { type: "button", className: n2, onClick: r2, children: e3.label });
    }, ef = (0, i.jsxs)(W, { link: { label: a2.name, href: a2.href }, className: C().brand, onChoose: () => {
      p2?.({ label: a2.name, href: a2.href }), eh(), eu();
    }, children: [a2.mark ?? (0, i.jsx)(O, { className: C().brandMark }), (0, i.jsx)("span", { children: a2.name })] });
    return (0, i.jsxs)("header", { ref: eo, className: [C().header, f2 ? C().sticky : "", A2].filter(Boolean).join(" "), "data-variant": e2, "data-scrolled": S2 || Z || Y2 ? "" : void 0, children: [(0, i.jsxs)("div", { className: C().inner, onPointerLeave: function(e3) {
      "mouse" === e3.pointerType && (window.clearTimeout(ei.current), er.current = window.setTimeout(() => ec(null), 180));
    }, onPointerEnter: function(e3) {
      "mouse" === e3.pointerType && window.clearTimeout(er.current);
    }, children: [(0, i.jsxs)("div", { className: C().bar, children: [(0, i.jsx)("div", { className: C().brandSlot, children: ef }), (0, i.jsx)(d.o, { id: L2, children: (0, i.jsx)("nav", { className: C().nav, "aria-label": x2, onKeyDown: function(e3) {
      if ("ArrowLeft" !== e3.key && "ArrowRight" !== e3.key) return;
      let a3 = Array.from(e3.currentTarget.querySelectorAll("[data-nav-item]")), i2 = a3.indexOf(document.activeElement);
      if (i2 < 0) return;
      e3.preventDefault();
      let r2 = (i2 + ("ArrowRight" === e3.key ? 1 : -1) + a3.length) % a3.length;
      if (a3[r2].focus(), Y2) {
        let e4 = t2[r2];
        ec(e4 && es && e4.links?.length ? e4.value : null);
      }
    }, onPointerLeave: () => F2(null), children: (0, i.jsx)("ul", { className: C().navList, children: t2.map((a3) => {
      let t3 = D2 === a3.value, r2 = es && !!a3.links?.length, n2 = Y2?.value === a3.value, s3 = `${L2}-panel`, o2 = { className: C().navItem, "data-nav-item": "", "data-current": t3 ? "" : void 0, "data-open": n2 ? "" : void 0, onPointerEnter: (e3) => {
        if ("mouse" === e3.pointerType && F2(a3.value), r2) {
          var t4;
          t4 = a3.value, "mouse" === e3.pointerType && (window.clearTimeout(er.current), window.clearTimeout(ei.current), Y2 ? ec(t4) : ei.current = window.setTimeout(() => ec(t4), 70));
        } else "mouse" === e3.pointerType && Y2 && (er.current = window.setTimeout(() => ec(null), 180));
      }, onFocus: () => F2(null) }, d2 = (0, i.jsxs)(i.Fragment, { children: [q2 === a3.value && "centered" !== e2 && (0, i.jsx)(l.PY1.span, { layoutId: `hover-${e2}`, className: C().hover, transition: P2 ? { duration: 0 } : I, "aria-hidden": "true" }, `hover-${e2}`), t3 && (0, i.jsx)(l.PY1.span, { layoutId: `current-${e2}`, className: C().indicator, transition: P2 ? { duration: 0 } : j.T.spring.morph, "aria-hidden": "true" }, `current-${e2}`)] });
      return (0, i.jsx)("li", { className: C().navCell, children: r2 ? (0, i.jsxs)("button", { ...o2, ref: (e3) => {
        e3 ? ea.current.set(a3.value, e3) : ea.current.delete(a3.value);
      }, type: "button", "aria-expanded": n2, "aria-controls": n2 ? s3 : void 0, onClick: () => {
        ed(), ec(n2 ? null : a3.value);
      }, onKeyDown: (e3) => {
        var t4;
        return t4 = a3.value, void ("ArrowDown" === e3.key && (e3.preventDefault(), en.current = true, ec(t4), Y2?.value === t4 && et.current?.querySelector("[data-panel-link]")?.focus()));
      }, children: [d2, (0, i.jsx)("span", { className: C().navLabel, children: a3.label }), (0, i.jsx)(w.A, { className: C().chevron, size: 14, strokeWidth: 2, "aria-hidden": "true" })] }) : (0, i.jsxs)(W, { link: a3, ...o2, "aria-current": t3 ? "page" : void 0, onChoose: () => ep({ label: a3.label, href: a3.href, section: a3.value }, a3.value), children: [d2, (0, i.jsx)("span", { className: C().navLabel, children: a3.label })] }) }, a3.value);
    }) }) }) }), (0, i.jsxs)("div", { className: C().actions, children: [m2 && eg(m2, "secondary", C().wideOnly), g2 && eg(g2, "primary"), (0, i.jsx)("button", { ref: ee, type: "button", className: C().menuButton, "aria-expanded": Z, "aria-controls": `${L2}-sheet`, "aria-label": Z ? "Close menu" : "Open menu", onClick: () => {
      Z ? eu() : J(true);
    }, children: (0, i.jsx)(c.N, { initial: false, mode: "popLayout", children: (0, i.jsx)(l.PY1.span, { className: C().menuIcon, initial: P2 ? { opacity: 0 } : { opacity: 0, rotate: Z ? -45 : 45, scale: 0.8 }, animate: { opacity: 1, rotate: 0, scale: 1 }, exit: P2 ? { opacity: 0 } : { opacity: 0, rotate: Z ? 45 : -45, scale: 0.8 }, transition: P2 ? { duration: 0 } : { ...j.T.spring.snappy, opacity: { duration: j.T.duration.instant } }, children: Z ? (0, i.jsx)(k.A, { size: 20, strokeWidth: 1.75, "aria-hidden": "true" }) : (0, i.jsx)(_.A, { size: 20, strokeWidth: 1.75, "aria-hidden": "true" }) }, Z ? "close" : "open") }) })] })] }), es && (0, i.jsx)(c.N, { children: el?.links && (0, i.jsx)(l.PY1.div, { id: `${L2}-panel`, ref: et, className: C().panel, role: "region", "aria-label": el.label, onKeyDown: function(e3) {
      if ("ArrowDown" !== e3.key && "ArrowUp" !== e3.key && "Home" !== e3.key && "End" !== e3.key) return;
      let a3 = Array.from(e3.currentTarget.querySelectorAll("[data-face]:not([data-leaving]) [data-panel-link]"));
      if (!a3.length) return;
      e3.preventDefault();
      let t3 = a3.indexOf(document.activeElement), i2 = "Home" === e3.key ? 0 : "End" === e3.key ? a3.length - 1 : "ArrowDown" === e3.key ? Math.min(t3 + 1, a3.length - 1) : t3 - 1;
      i2 < 0 ? eh(true) : a3[i2]?.focus();
    }, initial: P2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.985 }, animate: { opacity: 1, y: 0, scale: 1, height: G2.height ?? "auto" }, exit: P2 ? { opacity: 0, transition: { duration: j.T.duration.instant } } : { opacity: 0, y: -4, scale: 0.99, transition: { duration: j.T.duration.exit, ease: M } }, transition: P2 ? { duration: 0 } : { height: G2.grow ? z : R, y: z, scale: z, opacity: { duration: j.T.duration.fast, ease: T } }, children: (0, i.jsx)(c.N, { initial: false, custom: Y2?.direction ?? 0, children: (0, i.jsx)(V, { direction: Y2?.direction ?? 0, reduced: P2, onHeight: em, children: (0, i.jsxs)("div", { className: C().faceGrid, "data-featured": el.feature ? "" : void 0, children: [(0, i.jsx)("ul", { className: C().panelLinks, children: el.links.map((e3) => (0, i.jsx)("li", { children: (0, i.jsxs)(W, { link: e3, className: C().panelLink, "data-panel-link": "", onChoose: () => ep({ label: e3.label, href: e3.href, section: el.value }, el.value), children: [e3.icon && (0, i.jsx)("span", { className: C().panelIcon, children: e3.icon }), (0, i.jsxs)("span", { className: C().panelText, children: [(0, i.jsx)("span", { children: e3.label }), e3.description && (0, i.jsx)("span", { children: e3.description })] })] }) }, e3.label)) }), el.feature && (0, i.jsxs)(W, { link: { label: el.feature.title, href: el.feature.href }, className: C().feature, "data-panel-link": "", onChoose: () => ep({ label: el.feature.title, href: el.feature.href, section: el.value }, el.value), children: [el.feature.image && (0, i.jsx)("span", { className: C().featureImage, children: (0, i.jsx)(n.default, { src: el.feature.image.src, alt: el.feature.image.alt, fill: true, sizes: "260px" }) }), (0, i.jsxs)("span", { className: C().featureTitle, children: [el.feature.title, (0, i.jsx)(b.A, { size: 14, strokeWidth: 2, "aria-hidden": "true" })] }), el.feature.description && (0, i.jsx)("span", { className: C().featureText, children: el.feature.description })] })] }) }, el.value) }) }, "panel") })] }), (0, i.jsx)(c.N, { children: Z && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(l.PY1.div, { className: C().scrim, onClick: () => eu(), initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: P2 ? 0 : j.T.duration.standard, ease: M }, "aria-hidden": "true" }, "scrim"), (0, i.jsx)(l.PY1.div, { id: `${L2}-sheet`, className: C().sheet, initial: P2 ? { opacity: 0 } : { height: 0 }, animate: P2 ? { opacity: 1 } : { height: "auto" }, exit: P2 ? { opacity: 0 } : { height: 0, transition: R }, transition: P2 ? { duration: 0 } : z, children: (0, i.jsxs)("nav", { className: C().sheetInner, "aria-label": x2, children: [(0, i.jsx)("ul", { className: C().sheetList, children: t2.map((a3, t3) => {
      let r2 = D2 === a3.value, n2 = !!a3.links?.length && "mega" === e2, s3 = K === a3.value, o2 = { initial: !P2 && { opacity: 0, y: -6 }, animate: { opacity: 1, y: 0 }, transition: { duration: j.T.duration.standard, ease: T, delay: P2 ? 0 : 0.04 + t3 * j.T.stagger.item } };
      return (0, i.jsx)(l.PY1.li, { className: C().sheetItem, ...o2, children: n2 ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsxs)("button", { type: "button", className: C().sheetRow, "data-current": r2 ? "" : void 0, "aria-expanded": s3, "aria-controls": `${L2}-group-${a3.value}`, onClick: () => Q(s3 ? null : a3.value), children: [(0, i.jsx)("span", { children: a3.label }), (0, i.jsx)(w.A, { className: C().sheetChevron, size: 18, strokeWidth: 1.75, "aria-hidden": "true" })] }), (0, i.jsx)(c.N, { initial: false, children: s3 && (0, i.jsx)(l.PY1.div, { id: `${L2}-group-${a3.value}`, className: C().sheetGroup, initial: P2 ? { opacity: 0 } : { height: 0, opacity: 0 }, animate: P2 ? { opacity: 1 } : { height: "auto", opacity: 1 }, exit: P2 ? { opacity: 0 } : { height: 0, opacity: 0 }, transition: P2 ? { duration: 0 } : { height: j.T.spring.smooth, opacity: { duration: j.T.duration.fast } }, children: (0, i.jsx)("ul", { children: a3.links.map((e3) => (0, i.jsx)("li", { children: (0, i.jsxs)(W, { link: e3, className: C().sheetLink, onChoose: () => ep({ label: e3.label, href: e3.href, section: a3.value }, a3.value), children: [e3.icon, (0, i.jsx)("span", { children: e3.label })] }) }, e3.label)) }) }, "group") })] }) : (0, i.jsxs)(W, { link: a3, className: C().sheetRow, "data-current": r2 ? "" : void 0, "aria-current": r2 ? "page" : void 0, onChoose: () => ep({ label: a3.label, href: a3.href, section: a3.value }, a3.value), children: [(0, i.jsx)("span", { children: a3.label }), r2 && (0, i.jsx)("span", { className: C().sheetDot, "aria-hidden": "true" })] }) }, a3.value);
    }) }), (m2 || g2) && (0, i.jsxs)(l.PY1.div, { className: C().sheetActions, initial: !P2 && { opacity: 0, y: -6 }, animate: { opacity: 1, y: 0 }, transition: { duration: j.T.duration.standard, ease: T, delay: P2 ? 0 : 0.04 + t2.length * j.T.stagger.item }, children: [m2 && eg(m2, "secondary"), g2 && eg(g2, "primary")] })] }) }, "sheet")] }) })] });
  });
  q.displayName = "SiteHeader";
  let F = [{ value: "mega", label: "Mega menu" }, { value: "simple", label: "Simple" }, { value: "centered", label: "Centered" }], Y = { product: "Product", resources: "Resources", pricing: "Pricing", customers: "Customers" };
  function B({ variant: e2 = "mega" }) {
    let [a2, t2] = (0, r.useState)(e2), [n2, s2] = (0, r.useState)("product"), [l2, o2] = (0, r.useState)(null), d2 = (0, r.useRef)(null);
    return (0, i.jsxs)("div", { className: C().preview, children: [(0, i.jsx)(x.A, { label: "Header layout", options: F, value: a2, onValueChange: (e3) => t2(e3) }), (0, i.jsxs)("div", { className: C().frame, ref: d2, children: [(0, i.jsx)(q, { variant: a2, current: n2, onCurrentChange: s2, onNavigate: (e3) => o2(e3.label), scrollContainer: d2, secondaryAction: { label: "Sign in", onClick: () => o2("Sign in") }, primaryAction: { label: "Get Arc", onClick: () => o2("Get Arc") } }), (0, i.jsxs)("div", { className: C().page, children: [(0, i.jsxs)("div", { className: C().pageHero, children: [(0, i.jsx)("h2", { children: Y[n2] ?? "Arc" }), (0, i.jsx)("p", { className: C().srOnly, "aria-live": "polite", children: l2 ? `Opened ${l2}` : "" })] }), (0, i.jsx)("div", { className: C().pageRows, "aria-hidden": "true", children: Array.from({ length: 6 }, (e3, a3) => (0, i.jsxs)("div", { className: C().pageRow, children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})] }, a3)) })] })] })] });
  }
  let G = B;
}

__m(__module,__exports,__require);
}