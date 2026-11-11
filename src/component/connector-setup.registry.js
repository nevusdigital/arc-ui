/* connector-setup (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(5736, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "lock",
    size: 24,
    node: [
      [
        "rect",
        {
          width: "18",
          height: "11",
          x: "3",
          y: "11",
          rx: "2",
          ry: "2",
          key: "1w4ew1"
        }
      ],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(25440, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { ConnectorSetupDemo: () => T, default: () => R });
  var s = n(95155), a = n(12115), c = n(80642), r = n(79196), i = n(25354), o = n(18310), l = n(5736), d = n(65377), u = n(9005), p = n(35484), h = n(64577), m = n(12363), _ = n(51288), y = n(52898);
  let f = [
    {
      id: "slack",
      name: "Slack",
      mark: "slack",
      host: "slack.com",
      account: "northwind.slack.com",
      description: "Search channels and threads, post replies",
      scopes: [
        "Read messages in public channels",
        "Search message history",
        "Post replies as Claude"
      ],
      sync: { count: 1204, noun: "messages" },
      keywords: ["chat", "messages"]
    },
    {
      id: "github",
      name: "GitHub",
      mark: "github",
      host: "github.com",
      account: "northwind-labs",
      description: "Read code, issues and pull requests",
      scopes: [
        "Read code in 12 repositories",
        "Read and write issues",
        "Comment on pull requests"
      ],
      sync: { count: 342, noun: "pull requests" },
      keywords: ["code", "git", "repos"]
    },
    {
      id: "notion",
      name: "Notion",
      mark: "notion",
      host: "notion.so",
      account: "Northwind HQ",
      description: "Search pages, docs and databases",
      scopes: [
        "Read pages shared with Claude",
        "Search workspace content",
        "Create pages in Drafts"
      ],
      sync: { count: 2318, noun: "pages" },
      keywords: ["docs", "wiki"]
    },
    {
      id: "google-drive",
      name: "Google Drive",
      mark: "google-drive",
      host: "accounts.google.com",
      account: "maya@northwind.co",
      description: "Find docs, sheets and slides",
      scopes: [
        "View files you open or share",
        "Search file names and content",
        "Export files to PDF"
      ],
      sync: { count: 5612, noun: "files" },
      keywords: ["docs", "sheets", "files", "google"]
    },
    {
      id: "linear",
      name: "Linear",
      mark: "linear",
      host: "linear.app",
      account: "Northwind \xB7 NOR",
      description: "Create, triage and update issues",
      scopes: [
        "Read issues and projects",
        "Create and update issues",
        "Comment on issues"
      ],
      sync: { count: 864, noun: "issues" },
      keywords: ["issues", "tickets", "projects"]
    },
    {
      id: "jira",
      name: "Jira",
      mark: "jira",
      host: "id.atlassian.com",
      account: "northwind.atlassian.net",
      description: "Track tickets across Atlassian projects",
      scopes: [
        "Read issues in 4 projects",
        "Transition issue status",
        "Add comments and worklogs"
      ],
      sync: { count: 1977, noun: "issues" },
      keywords: ["atlassian", "tickets"]
    },
    {
      id: "salesforce",
      name: "Salesforce",
      mark: "salesforce",
      host: "login.salesforce.com",
      account: "Northwind Traders",
      description: "Look up accounts and opportunities",
      scopes: [
        "Read accounts and contacts",
        "Read opportunities",
        "Log activity on records"
      ],
      sync: { count: 428, noun: "opportunities" },
      keywords: ["crm", "sales"]
    },
    {
      id: "hubspot",
      name: "HubSpot",
      mark: "hubspot",
      host: "app.hubspot.com",
      account: "Portal 24019837",
      description: "Read contacts, deals and notes",
      scopes: [
        "Read contacts and companies",
        "Read deals and pipelines",
        "Create notes on records"
      ],
      sync: { count: 3140, noun: "contacts" },
      keywords: ["crm", "marketing"]
    }
  ], g = { salesforce: "Needs admin approval" }, x = (e2, t2) => function({ size: n2 = 20, ...a2 }) {
    return (0, s.jsx)("svg", {
      width: n2,
      height: n2,
      viewBox: e2,
      "aria-hidden": "true",
      focusable: "false",
      ...a2,
      children: t2
    });
  }, v = {
    slack: x(
      "0 0 24 24",
      (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)("path", {
            fill: "#E01E5A",
            d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
          }),
          (0, s.jsx)("path", {
            fill: "#36C5F0",
            d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
          }),
          (0, s.jsx)("path", {
            fill: "#2EB67D",
            d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
          }),
          (0, s.jsx)("path", {
            fill: "#ECB22E",
            d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
          })
        ]
      })
    ),
    github: x(
      "0 0 24 24",
      (0, s.jsx)("path", {
        fill: "currentColor",
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      })
    ),
    notion: x(
      "0 0 24 24",
      (0, s.jsx)("path", {
        fill: "currentColor",
        d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
      })
    ),
    "google-drive": x(
      "0 -4.65 87.3 87.3",
      (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)("path", {
            fill: "#0066DA",
            d: "m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
          }),
          (0, s.jsx)("path", {
            fill: "#00AC47",
            d: "m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
          }),
          (0, s.jsx)("path", {
            fill: "#EA4335",
            d: "m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
          }),
          (0, s.jsx)("path", {
            fill: "#00832D",
            d: "m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
          }),
          (0, s.jsx)("path", {
            fill: "#2684FC",
            d: "m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
          }),
          (0, s.jsx)("path", {
            fill: "#FFBA00",
            d: "m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
          })
        ]
      })
    ),
    linear: x(
      "0 0 24 24",
      (0, s.jsx)("path", {
        fill: "currentColor",
        d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
      })
    ),
    jira: x(
      "0 0 24 24",
      (0, s.jsx)("path", {
        fill: "#1868DB",
        d: "M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z"
      })
    ),
    salesforce: x(
      "0 0 24 24",
      (0, s.jsx)("path", {
        fill: "#00A1E0",
        d: "M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 01-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.314 4.314 0 018.88 20.4a4.302 4.302 0 01-4.05-2.82c-.27.062-.54.076-.825.076-2.204 0-4.005-1.8-4.005-4.05 0-1.5.811-2.805 2.01-3.51-.255-.57-.39-1.2-.39-1.846 0-2.58 2.1-4.65 4.65-4.65 1.53 0 2.85.705 3.72 1.8"
      })
    ),
    hubspot: x(
      "0 0 24 24",
      (0, s.jsx)("path", {
        fill: "#FF7A59",
        d: "M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"
      })
    )
  };
  function j({ mark: e2, size: t2 = 20 }) {
    if ("string" == typeof e2 && e2 in v) {
      let n2 = v[e2];
      return (0, s.jsx)(n2, { size: t2 });
    }
    return (0, s.jsx)(s.Fragment, { children: e2 });
  }
  var w = n(94674), k = n.n(w);
  let b = (...e2) => e2.filter(Boolean).join(" "), N = (e2) => Math.round(e2).toLocaleString("en-US"), A = [0.22, 1, 0.36, 1];
  function C(e2, t2) {
    return new Promise((n2, s2) => {
      if (t2.aborted) return s2(new DOMException("Aborted", "AbortError"));
      let a2 = window.setTimeout(n2, e2);
      t2.addEventListener(
        "abort",
        () => {
          window.clearTimeout(a2), s2(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    });
  }
  function z({ swapKey: e2, children: t2, className: n2, reduced: a2 }) {
    return (0, s.jsx)("span", {
      className: b(k().swap, n2),
      children: (0, s.jsx)(c.N, {
        initial: false,
        children: (0, s.jsx)(E, { reduced: a2, children: t2 }, e2)
      })
    });
  }
  function E({ children: e2, reduced: t2 }) {
    let n2 = (0, r.tF)();
    return (0, s.jsx)(i.PY1.span, {
      className: k().swapItem,
      "data-leaving": n2 ? void 0 : "",
      "aria-hidden": !n2 || void 0,
      initial: t2 ? { opacity: 0 } : { opacity: 0, y: 2 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.16 * !t2, ease: A }
      },
      exit: { opacity: 0, y: 0, transition: { duration: 0.1 * !t2, ease: A } },
      children: e2
    });
  }
  function $({ value: e2, final: t2 }) {
    return (0, s.jsxs)("span", {
      className: k().num,
      children: [
        (0, s.jsx)("span", {
          className: k().numGhost,
          "aria-hidden": "true",
          children: N(t2)
        }),
        (0, s.jsx)("span", { className: k().numLive, children: N(e2) })
      ]
    });
  }
  function M({
    connectors: e2,
    connected: t2,
    defaultConnected: n2,
    onConnectedChange: r2,
    connect: x2,
    disconnect: v2,
    onConnect: w2,
    onDisconnect: E2,
    assistantName: S2 = "Claude",
    title: L2 = "Connect your tools",
    description: T2,
    searchable: R2 = true,
    searchPlaceholder: D = "Search apps",
    autoPlay: F,
    footer: I,
    className: V
  }) {
    let W = void 0 === e2, B = e2 ?? f, O = !!(0, o.I)(), K = (0, a.useId)(), [P, H] = (0, a.useState)(
      () => n2 ?? (W ? ["github", "google-drive"] : [])
    ), Y = t2 ?? P, G = (0, a.useRef)(Y);
    (0, a.useEffect)(() => {
      G.current = Y;
    }, [Y]);
    let [q, Z] = (0, a.useState)({}), [J, U] = (0, a.useState)({}), [X, Q] = (0, a.useState)(null), [ee, et] = (0, a.useState)(null), [en, es] = (0, a.useState)(null), [ea, ec] = (0, a.useState)(""), [er, ei] = (0, a.useState)(""), eo = (0, a.useRef)(/* @__PURE__ */ new Map()), el = (0, a.useRef)(/* @__PURE__ */ new Map()), ed = (0, a.useRef)(null), eu = (0, a.useRef)(null);
    (0, a.useEffect)(
      () => () => {
        eo.current.forEach((e3) => e3.abort());
      },
      []
    );
    let ep = (0, a.useCallback)(
      (e3) => {
        G.current = e3, void 0 === t2 && H(e3), r2?.(e3);
      },
      [t2, r2]
    ), eh = (0, a.useCallback)((e3, t3) => Z((n3) => ({ ...n3, [e3]: t3 })), []), em = (0, a.useCallback)(
      (e3, t3) => ei(t3 ? `${e3} Simulated, nothing was sent.` : e3),
      []
    ), e_ = (0, a.useCallback)(
      async (e3, { signal: t3, report: n3 }) => {
        let s2 = el.current.get(e3.id) ?? 1;
        await C(560, t3), n3({ phase: "authorizing" }), await C(680, t3);
        let a2 = W ? g[e3.id] : void 0;
        if (a2 && 1 === s2) throw Error(a2);
        n3({ phase: "syncing", synced: 0 });
        let c2 = e3.sync?.count ?? 0;
        if (c2 > 0)
          await new Promise((e4, s3) => {
            let a3 = performance.now(), r3 = 0, i2 = (o2) => {
              if (t3.aborted)
                return s3(new DOMException("Aborted", "AbortError"));
              let l2 = Math.min(1, (o2 - a3) / 960);
              n3({ synced: Math.round(c2 * (1 - Math.pow(1 - l2, 3))) }), l2 < 1 ? r3 = requestAnimationFrame(i2) : e4();
            };
            r3 = requestAnimationFrame(i2), t3.addEventListener(
              "abort",
              () => {
                cancelAnimationFrame(r3), s3(new DOMException("Aborted", "AbortError"));
              },
              { once: true }
            );
          });
        else await C(640, t3);
        return await C(180, t3), { account: e3.account, scopes: e3.scopes, synced: c2 };
      },
      [W]
    ), ey = (0, a.useCallback)(
      async (e3) => {
        eo.current.get(e3.id)?.abort();
        let t3 = new AbortController();
        eo.current.set(e3.id, t3), el.current.set(e3.id, (el.current.get(e3.id) ?? 0) + 1);
        let n3 = !x2;
        eh(e3.id, { status: "connecting", phase: "redirecting", synced: 0 }), em(`Connecting ${e3.name}.`, n3);
        try {
          let s2 = await (x2 ?? e_)(e3, {
            signal: t3.signal,
            report: (n4) => {
              t3.signal.aborted || Z((t4) => {
                let s3 = t4[e3.id];
                return s3 && "connecting" === s3.status ? {
                  ...t4,
                  [e3.id]: {
                    status: "connecting",
                    phase: n4.phase ?? s3.phase,
                    synced: n4.synced ?? s3.synced
                  }
                } : t4;
              });
            }
          }) ?? {};
          if (t3.signal.aborted) return;
          let a2 = {
            account: s2.account ?? e3.account,
            scopes: s2.scopes ?? e3.scopes,
            synced: s2.synced ?? e3.sync?.count
          };
          U((t4) => ({ ...t4, [e3.id]: a2 })), eh(e3.id, void 0), G.current.includes(e3.id) || ep([...G.current, e3.id]), et(null), Q(e3.id), w2?.(e3, a2);
          let c2 = a2.synced && e3.sync ? ` ${N(a2.synced)} ${e3.sync.noun} synced.` : "";
          em(`${e3.name} connected.${c2}`, n3);
        } catch (a2) {
          if (t3.signal.aborted) {
            eh(e3.id, void 0), em(`${e3.name} connection cancelled.`, false);
            return;
          }
          let s2 = a2 instanceof Error && a2.message ? a2.message : `Could not connect ${e3.name}`;
          eh(e3.id, { status: "error", message: s2 }), em(`${e3.name} failed to connect: ${s2}.`, n3);
        } finally {
          eo.current.get(e3.id) === t3 && eo.current.delete(e3.id);
        }
      },
      [em, x2, w2, eh, ep, e_]
    ), ef = (0, a.useCallback)((e3) => {
      eo.current.get(e3.id)?.abort();
    }, []), eg = (0, a.useCallback)(
      async (e3) => {
        let t3 = new AbortController();
        eo.current.set(e3.id, t3), es(e3.id);
        try {
          v2 ? await v2(e3, { signal: t3.signal }) : await C(420, t3.signal), ep(G.current.filter((t4) => t4 !== e3.id)), U((t4) => {
            let n3 = { ...t4 };
            return delete n3[e3.id], n3;
          }), Q((t4) => t4 === e3.id ? null : t4), et(null), E2?.(e3), em(`${e3.name} disconnected. ${S2} no longer has access.`, !v2);
        } catch (n3) {
          t3.signal.aborted || em(
            `Could not disconnect ${e3.name}. ${n3 instanceof Error ? n3.message : ""}`.trim(),
            !v2
          );
        } finally {
          es(null), eo.current.get(e3.id) === t3 && eo.current.delete(e3.id);
        }
      },
      [em, S2, v2, E2, ep]
    ), ex = F ?? (W && !x2), ev = (0, a.useRef)({ stopped: false });
    (0, a.useEffect)(() => {
      let e3 = ed.current;
      if (!ex || !e3) return;
      let t3 = ev.current;
      t3.stopped = false;
      let n3 = () => {
        t3.stopped = true;
      };
      e3.addEventListener("pointerdown", n3), e3.addEventListener("keydown", n3);
      let s2 = new AbortController(), a2 = (e4) => B.find((t4) => t4.id === e4), c2 = false, r3 = async () => {
        let e4 = a2("slack"), n4 = a2("salesforce");
        try {
          if (await C(600, s2.signal), t3.stopped || !e4 || G.current.includes("slack") || (await ey(e4), await C(2600, s2.signal), t3.stopped || !n4 || G.current.includes("salesforce")) || (Q(null), await C(240, s2.signal), t3.stopped) || (await ey(n4), await C(1500, s2.signal), t3.stopped))
            return;
          await ey(n4);
        } catch {
        }
      }, i2 = new IntersectionObserver(
        (e4) => {
          !c2 && e4.some((e5) => e5.isIntersecting) && (c2 = true, i2.disconnect(), r3());
        },
        { threshold: 0.35 }
      );
      return i2.observe(e3), () => {
        i2.disconnect(), s2.abort(), e3.removeEventListener("pointerdown", n3), e3.removeEventListener("keydown", n3);
      };
    }, [ex]);
    let ej = ea.trim().toLowerCase(), ew = (0, a.useMemo)(
      () => ej ? B.filter(
        (e3) => [
          e3.name,
          e3.description,
          e3.account ?? "",
          ...e3.keywords ?? []
        ].some((e4) => e4.toLowerCase().includes(ej))
      ) : B,
      [B, ej]
    ), ek = B.filter((e3) => Y.includes(e3.id)).length, eb = O ? { duration: 0 } : {
      height: { type: "spring", visualDuration: 0.24, bounce: 0 },
      opacity: { duration: 0.16, ease: A }
    }, eN = void 0 === I ? (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(l.A, {
          size: 14,
          strokeWidth: 1.75,
          "aria-hidden": "true"
        }),
        (0, s.jsxs)("span", {
          children: [S2, " only sees what you grant."]
        })
      ]
    }) : I;
    return (0, s.jsxs)("div", {
      ref: ed,
      className: b(k().root, V),
      role: "group",
      "aria-labelledby": `${K}-title`,
      children: [
        (0, s.jsxs)("div", {
          className: k().header,
          children: [
            (0, s.jsxs)("div", {
              className: k().headText,
              children: [
                (0, s.jsx)("h3", {
                  id: `${K}-title`,
                  className: k().title,
                  children: L2
                }),
                (0, s.jsx)("p", {
                  className: k().description,
                  children: T2 ?? `Let ${S2} search and act in the apps your team uses.`
                })
              ]
            }),
            (0, s.jsxs)("span", {
              className: k().count,
              children: [
                (0, s.jsxs)("span", {
                  className: k().srOnly,
                  children: [ek, " of ", B.length, " connected"]
                }),
                (0, s.jsxs)("span", {
                  className: k().countVisual,
                  "aria-hidden": "true",
                  children: [
                    (0, s.jsx)(z, {
                      swapKey: String(ek),
                      reduced: O,
                      className: k().countNum,
                      children: ek
                    }),
                    (0, s.jsxs)("span", {
                      children: ["of ", B.length, " connected"]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        R2 ? (0, s.jsxs)("div", {
          className: k().search,
          children: [
            (0, s.jsx)(d.A, {
              className: k().searchIcon,
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, s.jsx)("input", {
              ref: eu,
              className: k().searchInput,
              type: "search",
              value: ea,
              placeholder: D,
              "aria-label": "Search apps",
              "aria-controls": `${K}-list`,
              autoComplete: "off",
              spellCheck: false,
              onChange: (e3) => ec(e3.target.value),
              onKeyDown: (e3) => {
                "Escape" === e3.key && ea && (e3.preventDefault(), ec(""));
              }
            }),
            (0, s.jsx)(c.N, {
              initial: false,
              children: ea ? (0, s.jsx)(
                i.PY1.button,
                {
                  type: "button",
                  className: k().clear,
                  "aria-label": "Clear search",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.12 * !O },
                  onClick: () => {
                    ec(""), eu.current?.focus();
                  },
                  children: (0, s.jsx)(u.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                },
                "clear"
              ) : null
            })
          ]
        }) : null,
        ew.length ? (0, s.jsx)("ul", {
          id: `${K}-list`,
          className: k().list,
          "aria-label": "Apps",
          children: ew.map((e3) => {
            var t3, n3, a2;
            let r3, o2 = (r3 = q[t3 = e3.id]) ? r3.status : Y.includes(t3) ? "connected" : "available", l2 = q[e3.id], d2 = J[e3.id], u2 = "connected" === o2 && X === e3.id, f2 = e3.sync?.count ?? 0, g2 = `${K}-${e3.id}-details`, x3 = d2?.account ?? e3.account, v3 = d2?.synced ?? f2, w3 = o2, C2 = e3.description;
            l2?.status === "connecting" ? (w3 = l2.phase, C2 = "redirecting" === l2.phase ? (0, s.jsx)(y.n, {
              children: `Redirecting to ${e3.host ?? e3.name}`
            }) : "authorizing" === l2.phase ? (0, s.jsx)(y.n, {
              children: `Authorizing ${x3 ?? e3.name}`
            }) : e3.sync ? (0, s.jsxs)("span", {
              className: k().syncLine,
              children: [
                "Syncing ",
                (0, s.jsx)($, { value: l2.synced, final: f2 }),
                " ",
                e3.sync.noun
              ]
            }) : (0, s.jsx)(y.n, { children: "Syncing" })) : l2?.status === "error" ? (w3 = `error-${l2.message}`, C2 = (0, s.jsxs)("span", {
              className: k().errorLine,
              children: [
                (0, s.jsx)(p.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, s.jsx)("span", {
                  className: k().ellipsis,
                  children: l2.message
                })
              ]
            })) : "connected" === o2 && (C2 = [x3, e3.sync && v3 ? `${N(v3)} ${e3.sync.noun}` : null].filter(Boolean).join(" \xB7 ") || e3.description);
            let E3 = "available" === o2 ? (0, s.jsx)(_.$, {
              size: "sm",
              variant: "secondary",
              className: b(k().action, k().connect),
              onClick: () => void ey(e3),
              "aria-label": `Connect ${e3.name}`,
              children: "Connect"
            }) : "connecting" === o2 ? (0, s.jsx)(_.$, {
              size: "sm",
              variant: "ghost",
              className: k().action,
              onClick: () => ef(e3),
              "aria-label": `Cancel connecting ${e3.name}`,
              children: "Cancel"
            }) : "error" === o2 ? (0, s.jsx)(_.$, {
              size: "sm",
              variant: "secondary",
              className: b(k().action, k().connect),
              onClick: () => void ey(e3),
              "aria-label": `Retry connecting ${e3.name}`,
              children: "Retry"
            }) : (0, s.jsxs)(_.$, {
              size: "sm",
              variant: "ghost",
              className: b(k().action, k().connectedBtn),
              "aria-expanded": u2,
              "aria-controls": g2,
              "aria-label": `${e3.name} connected. ${u2 ? "Hide" : "Show"} access details`,
              onClick: () => {
                et(null), Q(u2 ? null : e3.id);
              },
              children: [
                (0, s.jsx)(h.A, {
                  className: k().ok,
                  size: 16,
                  strokeWidth: 2,
                  "aria-hidden": "true"
                }),
                (0, s.jsx)("span", {
                  className: k().connectedLabel,
                  children: "Connected"
                }),
                (0, s.jsx)(m.A, {
                  className: k().chevron,
                  "data-open": u2 || void 0,
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              ]
            }), M2 = ee === e3.id;
            return (0, s.jsxs)(
              "li",
              {
                className: k().row,
                "data-status": o2,
                "data-active": "connecting" === o2 || u2 || void 0,
                children: [
                  (0, s.jsxs)("div", {
                    className: k().rowMain,
                    children: [
                      (0, s.jsx)("span", {
                        className: k().mark,
                        "data-mark": "string" == typeof e3.mark ? e3.mark : void 0,
                        children: (0, s.jsx)(j, { mark: e3.mark })
                      }),
                      (0, s.jsxs)("span", {
                        className: k().text,
                        children: [
                          (0, s.jsx)("span", {
                            className: k().name,
                            children: e3.name
                          }),
                          (0, s.jsx)(z, {
                            swapKey: w3,
                            reduced: O,
                            className: b(
                              k().line,
                              "connecting" === o2 && k().lineLive,
                              "error" === o2 && k().lineError
                            ),
                            children: "string" == typeof C2 ? (0, s.jsx)("span", {
                              className: k().ellipsis,
                              children: C2
                            }) : C2
                          })
                        ]
                      }),
                      (0, s.jsx)("span", {
                        className: k().actionSlot,
                        children: (0, s.jsx)(z, {
                          swapKey: o2,
                          reduced: O,
                          className: k().actionSwap,
                          children: E3
                        })
                      })
                    ]
                  }),
                  (0, s.jsx)(c.N, {
                    initial: false,
                    children: l2?.status === "connecting" ? (0, s.jsx)(
                      i.PY1.span,
                      {
                        className: k().track,
                        "aria-hidden": "true",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: {
                          opacity: 0,
                          transition: {
                            duration: 0.2 * !O,
                            delay: 0.08 * !O
                          }
                        },
                        transition: { duration: 0.16 * !O },
                        children: (0, s.jsx)(i.PY1.span, {
                          className: k().fill,
                          initial: { scaleX: 0 },
                          animate: {
                            scaleX: (n3 = l2.phase, a2 = l2.synced, "redirecting" === n3 ? 0.16 : "authorizing" === n3 ? 0.4 : 0.4 + 0.6 * (f2 > 0 ? Math.min(1, a2 / f2) : 0.5))
                          },
                          transition: O ? { duration: 0 } : "syncing" === l2.phase ? { duration: 0.12, ease: "linear" } : { duration: 0.24, ease: A }
                        })
                      },
                      "progress"
                    ) : null
                  }),
                  (0, s.jsx)(c.N, {
                    initial: false,
                    children: u2 ? (0, s.jsx)(
                      i.PY1.div,
                      {
                        id: g2,
                        className: k().detailsClip,
                        role: "region",
                        "aria-label": `${e3.name} access`,
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: eb,
                        children: (0, s.jsxs)("div", {
                          className: k().details,
                          children: [
                            (0, s.jsxs)("span", {
                              className: k().detailsLabel,
                              children: [S2, " can"]
                            }),
                            (0, s.jsx)("ul", {
                              className: k().scopes,
                              children: (d2?.scopes ?? e3.scopes ?? []).map(
                                (e4) => (0, s.jsxs)(
                                  "li",
                                  {
                                    className: k().scope,
                                    children: [
                                      (0, s.jsx)(h.A, {
                                        size: 16,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                      }),
                                      (0, s.jsx)("span", {
                                        className: k().scopeText,
                                        children: e4
                                      })
                                    ]
                                  },
                                  e4
                                )
                              )
                            }),
                            (0, s.jsx)("div", {
                              className: k().detailsFoot,
                              children: (0, s.jsx)(z, {
                                swapKey: M2 ? "confirm" : "idle",
                                reduced: O,
                                className: k().footSwap,
                                children: M2 ? (0, s.jsxs)("span", {
                                  className: k().footRow,
                                  onKeyDown: (e4) => {
                                    "Escape" === e4.key && (e4.stopPropagation(), et(null));
                                  },
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: b(
                                        k().footText,
                                        k().confirmText,
                                        k().ellipsis
                                      ),
                                      children: "Remove access?"
                                    }),
                                    (0, s.jsxs)("span", {
                                      className: k().footActions,
                                      children: [
                                        (0, s.jsx)(_.$, {
                                          size: "sm",
                                          variant: "ghost",
                                          className: b(
                                            k().action,
                                            k().keep
                                          ),
                                          onClick: () => et(null),
                                          disabled: en === e3.id,
                                          children: "Keep"
                                        }),
                                        (0, s.jsx)(_.$, {
                                          size: "sm",
                                          variant: "danger",
                                          className: k().action,
                                          "aria-label": `Disconnect ${e3.name} and remove ${S2}'s access`,
                                          loading: en === e3.id,
                                          onClick: () => void eg(e3),
                                          autoFocus: true,
                                          children: "Disconnect"
                                        })
                                      ]
                                    })
                                  ]
                                }) : (0, s.jsxs)("span", {
                                  className: k().footRow,
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: b(
                                        k().footText,
                                        k().ellipsis
                                      ),
                                      children: d2 ? "Synced just now" : "Synced 12 min ago"
                                    }),
                                    (0, s.jsx)("span", {
                                      className: k().footActions,
                                      children: (0, s.jsx)(_.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        className: k().action,
                                        onClick: () => et(e3.id),
                                        children: "Disconnect"
                                      })
                                    })
                                  ]
                                })
                              })
                            })
                          ]
                        })
                      },
                      "details"
                    ) : null
                  })
                ]
              },
              e3.id
            );
          })
        }) : (0, s.jsxs)("div", {
          id: `${K}-list`,
          className: k().empty,
          children: [
            (0, s.jsxs)("p", {
              className: k().emptyTitle,
              children: ["No apps match \u201C", ea.trim(), "\u201D"]
            }),
            (0, s.jsx)("p", {
              className: k().emptyCopy,
              children: "Try a product name or a category like crm or docs."
            }),
            (0, s.jsx)(_.$, {
              size: "sm",
              variant: "secondary",
              className: k().action,
              onClick: () => {
                ec(""), eu.current?.focus();
              },
              children: "Clear search"
            })
          ]
        }),
        eN ? (0, s.jsx)("div", { className: k().footer, children: eN }) : null,
        (0, s.jsx)("span", {
          className: k().srOnly,
          role: "status",
          "aria-live": "polite",
          children: er
        })
      ]
    });
  }
  var S = n(94643), L = n.n(S);
  function T() {
    return (0, s.jsx)("div", {
      className: L().demo,
      children: (0, s.jsx)(M, {})
    });
  }
  let R = T;
}

__m(__module,__exports,__require);
});
A.regCss(94643, ".demo{display:flex;justify-content:center;width:100%}", {"demo":"demo"});
A.regCss(94674, ".root{container-type:inline-size;box-sizing:border-box;width:100%;max-width:520px;padding:8px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);line-height:20px;letter-spacing:var(--tracking-body,normal)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}\n.ellipsis{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.header{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:12px 12px 16px}\n@container (max-width: 440px){.header{flex-direction:column;gap:4px}\n.headText{min-width:0}\n.title{margin:0;font-size:var(--text-base);font-weight:500;line-height:24px;letter-spacing:-.01em}\n.description{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:20px;text-wrap:pretty}\n.count{flex:none;color:var(--text-muted);font-size:var(--text-xs);line-height:24px;white-space:nowrap}\n.countVisual,.count{display:inline-flex;align-items:center;gap:4px}\n.count{line-height:18px}\n.countNum{color:var(--text-secondary);font-variant-numeric:tabular-nums}\n.search{position:relative;margin-bottom:8px}\n.searchIcon{position:absolute;top:50%;left:14px;color:var(--text-muted);pointer-events:none;transform:translateY(-50%)}\n.searchInput{width:100%;height:40px;margin:0;padding:0 44px 0 43px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:20px;appearance:none;transition:border-color var(--duration-fast,.16s) var(--ease-standard,ease-out),background-color var(--duration-fast,.16s) var(--ease-standard,ease-out)}\n.searchInput::placeholder{color:var(--text-muted);opacity:1}\n.searchInput::-webkit-search-cancel-button,.searchInput::-webkit-search-decoration{appearance:none}\n.searchInput:focus{border-color:color-mix(in oklab,var(--foreground) 28%,var(--border))}\n@media (hover:hover) and (pointer:fine){.searchInput:hover:not(:focus){border-color:color-mix(in oklab,var(--foreground) 16%,var(--border))}\n@media (prefers-reduced-motion:reduce){.chevron,.clear,.row,.searchInput{transition:none}\n.clear{position:absolute;top:50%;right:6px;display:grid;width:28px;height:28px;margin:-14px 0 0;padding:0;place-items:center;border:0;border-radius:14px;background:transparent;color:var(--text-muted);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color .12s ease-out,color .12s ease-out}\n.clear:active{background:var(--surface-muted);color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.clear:hover{background:var(--surface-muted);color:var(--foreground)}\n.list{display:flex;margin:0;padding:0;flex-direction:column;gap:2px;list-style:none}\n.row{position:relative;border-radius:var(--radius-control);transition:background-color .16s var(--ease-standard,ease-out)}\n.row[data-active]{background:color-mix(in oklab,var(--surface-muted) 72%,transparent)}\n.rowMain{display:grid;min-height:60px;grid-template-columns:20px minmax(0,1fr) auto;align-items:center;column-gap:12px;padding:10px 12px}\n.mark{display:grid;width:20px;height:20px;place-items:center;color:var(--foreground)}\n.mark svg{display:block}\n.text{display:flex;min-width:0;flex-direction:column}\n.name{overflow:hidden;font-weight:500;line-height:20px;text-overflow:ellipsis;white-space:nowrap}\n.line{min-height:18px;color:var(--text-muted);font-size:var(--text-xs);line-height:18px}\n.line .swapItem>*{min-width:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.lineLive{color:var(--text-secondary)}\n.lineError{color:var(--danger)}\n.syncLine{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.num{display:inline-grid;justify-items:end;font-variant-numeric:tabular-nums}\n.num>*{grid-area:1/1}\n.numGhost{visibility:hidden}\n.errorLine{display:inline-flex;min-width:0;align-items:center;gap:4px}\n.errorLine svg{flex:none}\n.swap{display:grid;min-width:0}\n.swapItem{display:flex;min-width:0;align-items:center;overflow:hidden;grid-area:1/1}\n.swapItem[data-leaving]{pointer-events:none}\n.actionSwap .swapItem{overflow:visible}\n.actionSlot{display:flex;min-width:0;justify-content:flex-end}\n.actionSwap{justify-items:end}\n.action.action{min-height:32px;padding-inline:12px;font-size:var(--text-sm)}\n.connect.connect{border-color:transparent;background:var(--accent-subtle);color:var(--accent)}\n.connect.connect:active:not(:disabled){background:color-mix(in oklab,var(--accent) 22%,transparent);color:var(--accent)}\n@media (hover:hover) and (pointer:fine){.connect.connect:hover:not(:disabled){background:color-mix(in oklab,var(--accent) 17%,transparent);box-shadow:none}\n.connectedBtn.connectedBtn{gap:6px;padding-inline:10px 8px;color:var(--text-secondary)}\n.connectedBtn.connectedBtn{padding-inline:8px}\n.ok{color:var(--success)}\n.chevron{color:var(--text-muted);transition:transform .2s var(--ease-standard,ease-out)}\n.chevron[data-open]{transform:rotate(180deg)}\n.track{position:absolute;right:12px;bottom:5px;left:44px;height:2px;overflow:hidden;border-radius:1px;background:var(--border-subtle,var(--border));pointer-events:none}\n.fill{display:block;width:100%;height:100%;border-radius:inherit;background:var(--accent);transform-origin:left center}\n.detailsClip{overflow:hidden}\n.details{padding:0 12px 12px 44px}\n.detailsLabel{display:block;margin-bottom:4px;color:var(--text-muted);font-size:var(--text-xs);line-height:18px}\n.scopes{display:grid;margin:0;padding:0;gap:4px;list-style:none}\n.scope{display:flex;min-width:0;align-items:flex-start;gap:8px;color:var(--text-secondary);line-height:20px}\n.scope svg{flex:none;margin-top:2px;color:var(--success)}\n.scopeText{min-width:0;text-wrap:pretty}\n.detailsFoot{margin-top:12px;padding-top:12px;border-top:1px solid var(--border-subtle,var(--border))}\n.footSwap{width:100%}\n.footRow{display:flex;width:100%;min-height:32px;align-items:center;justify-content:space-between;gap:8px}\n.footText{color:var(--text-muted);font-size:var(--text-xs);line-height:18px}\n.footActions{display:flex;flex:none;align-items:center;gap:4px}\n.keep.keep{padding-inline:10px}\n.empty{display:grid;min-height:184px;padding:24px 16px;place-content:center;justify-items:center;gap:4px;text-align:center}\n.emptyTitle{margin:0;font-weight:500;line-height:20px;overflow-wrap:anywhere}\n.emptyCopy{margin:0 0 12px}\n.emptyCopy,.footer{color:var(--text-muted);font-size:var(--text-xs);line-height:18px}\n.footer{display:flex;align-items:center;gap:8px;margin-top:8px;padding:12px 12px 6px;border-top:1px solid var(--border-subtle,var(--border))}\n.footer svg{flex:none}\n.connectedLabel{display:none}\n.confirmText{visibility:hidden}", {"root":"root","srOnly":"srOnly","ellipsis":"ellipsis","header":"header","headText":"headText","title":"title","description":"description","count":"count","countVisual":"countVisual","countNum":"countNum","search":"search","searchIcon":"searchIcon","searchInput":"searchInput","chevron":"chevron","clear":"clear","row":"row","list":"list","rowMain":"rowMain","mark":"mark","text":"text","name":"name","line":"line","swapItem":"swapItem","lineLive":"lineLive","lineError":"lineError","syncLine":"syncLine","num":"num","numGhost":"numGhost","errorLine":"errorLine","swap":"swap","actionSwap":"actionSwap","actionSlot":"actionSlot","action":"action","connect":"connect","connectedBtn":"connectedBtn","ok":"ok","track":"track","fill":"fill","detailsClip":"detailsClip","details":"details","detailsLabel":"detailsLabel","scopes":"scopes","scope":"scope","scopeText":"scopeText","detailsFoot":"detailsFoot","footSwap":"footSwap","footRow":"footRow","footText":"footText","footActions":"footActions","keep":"keep","empty":"empty","emptyTitle":"emptyTitle","emptyCopy":"emptyCopy","footer":"footer","connectedLabel":"connectedLabel","confirmText":"confirmText"});
A.cssFor("connector-setup", [94643,94674]);
A.item("connector-setup", {entry:25440, export:"ConnectorSetupDemo", kind:"component", tier:"pro", unresolved:[]});
})();