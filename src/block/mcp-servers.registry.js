/* mcp-servers (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"field":"field","label":"label","input":"input","messageSlot":"messageSlot","description":"description","error":"error","words":"words","word":"word","column":"column","srOnly":"srOnly"});
A.reg(14577, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "info",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(15330, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => a });
  var n = r(51811);
  let i = {
    name: "undo-2",
    size: 24,
    node: [
      ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
      [
        "path",
        {
          d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
          key: "f3b9sd"
        }
      ]
    ]
  };
  i.node;
  let a = (0, n.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(25182, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "eye",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
          key: "1nclc0"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(35978, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { p: () => x });
  var a = i(95155), r = i(12115), n = i(18310), s = i(80642), o = i(25354), l = i(7770), d = i(14290), u = i.n(d);
  let c = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    })
  };
  function p({ word: e2 }) {
    let t2 = (0, n.I)(), [i2, d2] = (0, r.useState)({ word: e2, direction: 1 });
    i2.word !== e2 && d2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(i2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), h2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, a.jsx)(s.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, a.jsx)(
          o.PY1.span,
          {
            className: u().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: h2,
            children: (0, a.jsx)(s.N, {
              initial: false,
              mode: "popLayout",
              custom: i2.direction,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  custom: i2.direction,
                  variants: c,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: h2,
                  children: e3
                },
                e3
              )
            })
          },
          m2.length - t3
        )
      )
    });
  }
  function m({ text: e2 }) {
    let t2 = (0, n.I)(), i2 = e2.split(" ");
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, a.jsx)("span", {
          className: u().words,
          "aria-hidden": "true",
          children: (0, a.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, r2) => (0, a.jsxs)(
                o.PY1.span,
                {
                  className: u().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${l.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${l.T.blur.subtle}px)`,
                    transition: {
                      duration: l.T.duration.exit,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, a.jsx)(p, { word: e3 }) : e3,
                    r2 < i2.length - 1 ? " " : null
                  ]
                },
                `${r2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: r2 }) {
    return (0, a.jsx)(s.N, {
      initial: false,
      children: t2 ? (0, a.jsx)(f, { id: e2, text: t2, className: i2, alert: r2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: s2 }) {
    let d2 = (0, n.I)(), c2 = (0, r.useRef)(null), [p2, h2] = (0, r.useState)("auto");
    return (0, r.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && h2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(o.PY1.span, {
      className: u().messageSlot,
      initial: !d2 && { height: 0, opacity: 0 },
      animate: { height: p2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: d2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: d2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, a.jsx)(o.PY1.span, {
        ref: c2,
        id: e2,
        className: i2,
        role: s2 ? "alert" : void 0,
        initial: !d2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: d2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, a.jsx)(m, { text: t2 })
      })
    });
  }
  let x = (0, r.forwardRef)(function({ label: e2, description: t2, error: i2, id: n2, className: s2, ...o2 }, l2) {
    let d2 = (0, r.useId)(), c2 = n2 ?? d2, p2 = t2 ? `${c2}-description` : void 0, m2 = i2 ? `${c2}-error` : void 0, f2 = [o2["aria-describedby"], p2, m2].filter(Boolean).join(" ") || void 0;
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)("label", { className: u().label, htmlFor: c2, children: e2 }),
        (0, a.jsx)("input", {
          ...o2,
          id: c2,
          ref: l2,
          className: [u().input, s2].filter(Boolean).join(" "),
          "aria-invalid": !!i2 || o2["aria-invalid"],
          "aria-describedby": f2
        }),
        (0, a.jsx)(h, { id: p2, text: t2, className: u().description }),
        (0, a.jsx)(h, { id: m2, text: i2, className: u().error, alert: true })
      ]
    });
  });
  x.displayName = "Input";
}

__m(__module,__exports,__require);
});
A.reg(43298, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { L: () => h });
  var s = a(95155), r = a(12115), i = a(18310), n = a(80642), o = a(25354), l = a(65377), d = a(9005), c = a(7770), u = a(79698), p = a.n(u);
  let h = (0, r.forwardRef)(function({ label: e2, value: t2, onValueChange: a2, id: u2, className: h2, ...m }, y) {
    let g = (0, r.useId)(), w = u2 ?? g, x = (0, i.I)(), f = (0, r.useRef)(null);
    return (0, s.jsxs)("div", {
      className: p().field,
      children: [
        (0, s.jsx)("label", { htmlFor: w, children: e2 }),
        (0, s.jsxs)("div", {
          className: p().shell,
          "data-filled": t2 ? "true" : void 0,
          children: [
            (0, s.jsx)(l.A, { width: 18, height: 18, "aria-hidden": "true" }),
            (0, s.jsx)("input", {
              ...m,
              ref: (e3) => {
                f.current = e3, "function" == typeof y ? y(e3) : y && (y.current = e3);
              },
              id: w,
              type: "search",
              value: t2,
              onChange: (e3) => a2(e3.target.value),
              className: [p().input, h2].filter(Boolean).join(" ")
            }),
            (0, s.jsx)("span", {
              className: p().clearSlot,
              children: (0, s.jsx)(n.N, {
                initial: false,
                children: t2 ? (0, s.jsx)(
                  o.PY1.button,
                  {
                    type: "button",
                    tabIndex: 0,
                    onClick: function() {
                      a2(""), f.current?.focus();
                    },
                    "aria-label": "Clear search",
                    initial: x ? { opacity: 0 } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    whileTap: x ? void 0 : {
                      scale: 0.96,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    transition: x ? { duration: c.T.duration.instant } : {
                      ...c.T.spring.snappy,
                      opacity: { duration: c.T.duration.fast },
                      filter: { duration: c.T.duration.fast }
                    },
                    children: (0, s.jsx)(d.A, {
                      width: 16,
                      height: 16,
                      "aria-hidden": "true"
                    })
                  },
                  "clear"
                ) : null
              })
            })
          ]
        })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(77031, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let a = {
    name: "arrow-left-right",
    size: 24,
    node: [
      ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
      ["path", { d: "M4 7h16", key: "6tx8e3" }],
      ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
      ["path", { d: "M20 17H4", key: "h6l3hr" }]
    ]
  };
  a.node;
  let o = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.regCss(79698, ".field{display:grid;gap:var(--space-2);min-width:0}\n.field label{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.shell{display:flex;min-height:var(--control-height-md);align-items:center;gap:var(--space-2);border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell:hover:not(:focus-within){border-color:var(--foreground)}\n.shell:focus-within{border-color:var(--foreground)}\n.shell>svg{flex:0 0 auto;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.shell:focus-within>svg,.shell[data-filled=true]>svg{color:var(--foreground)}\n.clearSlot,.shell button{display:grid;width:24px;height:24px;flex:0 0 auto;place-items:center}\n.shell button{border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell button:hover{background:var(--surface-muted);color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.shell,.shell button,.shell>svg{transition:none}\n.input{width:100%;min-width:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:0}\n.input:focus-visible{outline:0}\n.input::placeholder{color:var(--text-muted)}\n.input::-webkit-search-cancel-button{display:none}", {"field":"field","shell":"shell","clearSlot":"clearSlot","input":"input"});
A.reg(81499, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "key-round",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
          key: "1s6t7t"
        }
      ],
      [
        "circle",
        { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(87979, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "pencil-line",
    size: 24,
    node: [
      ["path", { d: "M13 21h8", key: "1jsn5i" }],
      ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(94637, function(__module,__exports,__require){
"use strict";
const __m = (e, a, t) => {
  "use strict";
  t.r(a), t.d(a, { McpServers: () => ep, default: () => eh });
  var s = t(95155), r = t(12115), n = t(18310), i = t(25354), o = t(80642), l = t(2125), c = t(15330), d = t(51288), u = t(67752), m = t(31966), p = t(9005), h = t(64577), _ = t(76721), g = t(14577), v = t(77031), x = t(64962), f = t(35484), b = t(92218), y = t(35978), j = t(43298), w = t(50680), k = t(52898);
  let N = (e2, a2, t2, s2 = "read" === a2) => ({
    id: e2,
    name: e2,
    access: a2,
    tokens: t2,
    enabled: s2
  }), T = [
    {
      id: "github",
      name: "GitHub",
      brand: "github",
      transport: "remote",
      endpoint: "https://api.githubcopilot.com/mcp/",
      status: "connected",
      permission: "allow-reads",
      tools: [
        N("search_code", "read", 420),
        N("get_pull_request", "read", 290),
        N("list_issues", "read", 400),
        N("create_issue", "write", 420, true),
        N("create_pull_request", "write", 640, true),
        N("merge_pull_request", "write", 360, false)
      ]
    },
    {
      id: "linear",
      name: "Linear",
      brand: "linear",
      transport: "remote",
      endpoint: "https://mcp.linear.app/mcp",
      status: "connected",
      permission: "allow-reads",
      tools: [
        N("list_issues", "read", 310),
        N("get_issue", "read", 260),
        N("create_issue", "write", 450, true),
        N("update_issue", "write", 480, false),
        N("list_projects", "read", 260, false)
      ]
    },
    {
      id: "notion",
      name: "Notion",
      brand: "notion",
      transport: "remote",
      endpoint: "https://mcp.notion.com/mcp",
      status: "needs-auth",
      permission: "ask",
      scopes: [
        "Search and read pages you share with it",
        "Create pages and add comments"
      ],
      tools: [
        N("search", "read", 380),
        N("fetch", "read", 300),
        N("create_pages", "write", 520, false),
        N("update_page", "write", 460, false)
      ]
    },
    {
      id: "slack",
      name: "Slack",
      brand: "slack",
      transport: "remote",
      endpoint: "https://mcp.slack.com/mcp",
      status: "connected",
      permission: "ask",
      tools: [
        N("search_messages", "read", 360),
        N("get_thread", "read", 280, false),
        N("list_channels", "read", 240),
        N("post_message", "write", 420, true)
      ]
    },
    {
      id: "sentry",
      name: "Sentry",
      brand: "sentry",
      transport: "remote",
      endpoint: "https://mcp.sentry.dev/mcp",
      status: "error",
      permission: "allow-reads",
      error: "tools/list timed out after 30 seconds",
      tools: [
        N("search_issues", "read", 330),
        N("get_issue_details", "read", 410),
        N("update_issue_status", "write", 300, false)
      ]
    },
    {
      id: "stripe",
      name: "Stripe",
      brand: "stripe",
      transport: "remote",
      endpoint: "https://mcp.stripe.com",
      status: "connected",
      permission: "ask",
      tools: [
        N("list_customers", "read", 320),
        N("list_invoices", "read", 290),
        N("create_refund", "write", 350, false),
        N("create_payment_link", "write", 420, false)
      ]
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      brand: "postgresql",
      transport: "local",
      endpoint: "npx @northwind/mcp-postgres postgres://localhost/analytics",
      status: "connected",
      permission: "allow-reads",
      tools: [
        N("query", "read", 290),
        N("list_tables", "read", 180),
        N("describe_table", "read", 260)
      ]
    },
    {
      id: "figma",
      name: "Figma",
      brand: "figma",
      transport: "local",
      endpoint: "http://127.0.0.1:3845/mcp",
      status: "connected",
      permission: "allow-reads",
      tools: [
        N("get_design_context", "read", 610),
        N("get_screenshot", "read", 240),
        N("get_variable_defs", "read", 300, false)
      ]
    }
  ], C = (e2, a2, t2) => ({ id: e2, name: e2, access: a2, tokens: t2 }), z = [
    {
      id: "vercel",
      name: "Vercel",
      brand: "vercel",
      description: "Deployments, build logs and project settings",
      transport: "remote",
      endpoint: "https://mcp.vercel.com",
      auth: "oauth",
      scopes: [
        "Read projects, deployments and build logs",
        "Create preview deployments"
      ],
      tools: [
        C("list_projects", "read", 240),
        C("list_deployments", "read", 310),
        C("get_build_logs", "read", 380),
        C("create_deployment", "write", 460),
        C("promote_deployment", "write", 330)
      ]
    },
    {
      id: "supabase",
      name: "Supabase",
      brand: "supabase",
      description: "Tables, SQL and edge functions",
      transport: "remote",
      endpoint: "https://mcp.supabase.com/mcp",
      auth: "oauth",
      scopes: [
        "Read tables and run read only SQL",
        "Apply migrations and deploy functions"
      ],
      tools: [
        C("list_tables", "read", 220),
        C("execute_sql", "read", 360),
        C("apply_migration", "write", 420),
        C("deploy_edge_function", "write", 480)
      ]
    },
    {
      id: "datadog",
      name: "Datadog",
      brand: "datadog",
      description: "Metrics, monitors and logs",
      transport: "remote",
      endpoint: "https://mcp.datadoghq.com/mcp",
      auth: "oauth",
      scopes: ["Read metrics, monitors and logs", "Mute and unmute monitors"],
      tools: [
        C("query_metrics", "read", 420),
        C("search_logs", "read", 390),
        C("list_monitors", "read", 260),
        C("mute_monitor", "write", 280)
      ]
    },
    {
      id: "cloudflare",
      name: "Cloudflare",
      brand: "cloudflare",
      description: "Workers, KV namespaces and DNS records",
      transport: "remote",
      endpoint: "https://bindings.mcp.cloudflare.com/mcp",
      auth: "oauth",
      scopes: ["Read Workers, KV and DNS", "Edit DNS records"],
      tools: [
        C("workers_list", "read", 230),
        C("kv_get", "read", 210),
        C("dns_records_list", "read", 280),
        C("dns_record_update", "write", 390)
      ]
    },
    {
      id: "googledrive",
      name: "Google Drive",
      brand: "googledrive",
      description: "Search and read files in shared drives",
      transport: "remote",
      endpoint: "https://drivemcp.googleapis.com/mcp",
      auth: "oauth",
      scopes: ["See and download files in your Drive"],
      tools: [C("search_files", "read", 340), C("read_file", "read", 260)]
    },
    {
      id: "atlassian",
      name: "Atlassian",
      brand: "atlassian",
      description: "Jira issues and Confluence pages",
      transport: "remote",
      endpoint: "https://mcp.atlassian.com/v1/sse",
      auth: "oauth",
      scopes: [
        "Read Jira issues and Confluence pages",
        "Create and edit issues"
      ],
      tools: [
        C("search_jira", "read", 380),
        C("get_confluence_page", "read", 290),
        C("create_jira_issue", "write", 470),
        C("add_comment", "write", 260)
      ]
    },
    {
      id: "hubspot",
      name: "HubSpot",
      brand: "hubspot",
      description: "Contacts, companies and deals",
      transport: "remote",
      endpoint: "https://mcp.hubspot.com",
      auth: "oauth",
      scopes: ["Read contacts, companies and deals", "Add notes to records"],
      tools: [
        C("search_contacts", "read", 330),
        C("get_deal", "read", 270),
        C("create_note", "write", 300)
      ]
    },
    {
      id: "posthog",
      name: "PostHog",
      brand: "posthog",
      description: "Product analytics, insights and feature flags",
      transport: "remote",
      endpoint: "https://mcp.posthog.com/mcp",
      auth: "oauth",
      scopes: [
        "Read insights and feature flags",
        "Update feature flag rollouts"
      ],
      tools: [
        C("query_insight", "read", 410),
        C("list_feature_flags", "read", 230),
        C("update_feature_flag", "write", 360)
      ]
    },
    {
      id: "asana",
      name: "Asana",
      brand: "asana",
      description: "Tasks, projects and comments",
      transport: "remote",
      endpoint: "https://mcp.asana.com/sse",
      auth: "oauth",
      scopes: ["Read tasks and projects", "Create tasks and comments"],
      tools: [
        C("search_tasks", "read", 300),
        C("get_project", "read", 240),
        C("create_task", "write", 380)
      ]
    },
    {
      id: "airtable",
      name: "Airtable",
      brand: "airtable",
      description: "Bases, tables and records",
      transport: "remote",
      endpoint: "https://mcp.airtable.com/mcp",
      auth: "oauth",
      scopes: ["Read bases and records", "Create and update records"],
      tools: [
        C("list_bases", "read", 200),
        C("search_records", "read", 310),
        C("update_records", "write", 400)
      ]
    },
    {
      id: "docker",
      name: "Docker",
      brand: "docker",
      description: "Containers and images on this machine",
      transport: "local",
      endpoint: "docker mcp gateway run",
      auth: "none",
      tools: [
        C("list_containers", "read", 210),
        C("container_logs", "read", 260),
        C("restart_container", "write", 240)
      ]
    }
  ], S = /* @__PURE__ */ new Set(["datadog"]), $ = [C("search", "read", 280), C("fetch", "read", 240)], M = (e2) => "connected" === e2.status ? e2.tools.reduce((e3, a2) => e3 + (a2.enabled ? a2.tokens : 0), 0) : 0;
  function A(e2) {
    if (e2 < 1e3) return `${Math.round(e2)}`;
    let a2 = Math.round(e2 / 100) / 10;
    return `${Number.isInteger(a2) ? a2.toFixed(0) : a2.toFixed(1)}k`;
  }
  function R(e2, a2) {
    let t2 = e2.filter((e3) => "read" === e3.access).length, s2 = e2.length - t2;
    return [
      t2 ? `Read data in ${a2}` : null,
      s2 ? `Make changes in ${a2} when you allow it` : null
    ].filter((e3) => !!e3);
  }
  var L = t(81499), B = t(25182), F = t(87979), V = t(65024), P = t(7770);
  function D({ title: e2 = "Model Context Protocol", ...a2 }) {
    return (0, s.jsxs)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      fillRule: "evenodd",
      role: "img",
      "aria-label": e2,
      ...a2,
      children: [
        (0, s.jsx)("path", {
          d: "M15.688 2.343a2.588 2.588 0 00-3.61 0l-9.626 9.44a.863.863 0 01-1.203 0 .823.823 0 010-1.18l9.626-9.44a4.313 4.313 0 016.016 0 4.116 4.116 0 011.204 3.54 4.3 4.3 0 013.609 1.18l.05.05a4.115 4.115 0 010 5.9l-8.706 8.537a.274.274 0 000 .393l1.788 1.754a.823.823 0 010 1.18.863.863 0 01-1.203 0l-1.788-1.753a1.92 1.92 0 010-2.754l8.706-8.538a2.47 2.47 0 000-3.54l-.05-.049a2.588 2.588 0 00-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 01-1.204 0 .823.823 0 010-1.18l7.273-7.133a2.47 2.47 0 00-.003-3.537z"
        }),
        (0, s.jsx)("path", {
          d: "M14.485 4.703a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a4.115 4.115 0 000 5.9 4.314 4.314 0 006.016 0l7.12-6.982a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a2.588 2.588 0 01-3.61 0 2.47 2.47 0 010-3.54l7.12-6.982z"
        })
      ]
    });
  }
  function E({ title: e2 = "Northwind", ...a2 }) {
    let t2 = (0, r.useId)().replace(/:/g, "");
    return (0, s.jsxs)("svg", {
      viewBox: "0 0 24 24",
      width: 16,
      height: 16,
      role: "img",
      "aria-label": e2,
      ...a2,
      children: [
        (0, s.jsxs)("defs", {
          children: [
            (0, s.jsxs)("linearGradient", {
              id: `${t2}-light`,
              x1: "8",
              y1: "3",
              x2: "8",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, s.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".42"
                }),
                (0, s.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: ".72"
                })
              ]
            }),
            (0, s.jsxs)("linearGradient", {
              id: `${t2}-dark`,
              x1: "16",
              y1: "3",
              x2: "16",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, s.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".88"
                }),
                (0, s.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: "1"
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("path", {
          d: "M12 2.5 4.75 20.75 12 16.9Z",
          fill: `url(#${t2}-light)`
        }),
        (0, s.jsx)("path", {
          d: "M12 2.5 19.25 20.75 12 16.9Z",
          fill: `url(#${t2}-dark)`
        })
      ]
    });
  }
  var H = t(94848), W = t.n(H);
  let I = [...P.T.ease.enter], O = { type: "spring", visualDuration: 0.3, bounce: 0 }, Y = { duration: P.T.duration.fast, ease: I }, q = { duration: 0.1, ease: [...P.T.ease.standard] }, U = (...e2) => e2.filter(Boolean).join(" "), K = {
    github: function({ title: e2 = "GitHub", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        })
      });
    },
    linear: function({ title: e2 = "Linear", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
        })
      });
    },
    notion: function({ title: e2 = "Notion", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
        })
      });
    },
    slack: function({ title: e2 = "Slack", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
        })
      });
    },
    sentry: function({ title: e2 = "Sentry", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 0 1 8.53 12.811h-2.221A13.301 13.301 0 0 0 5.784 9.814l-2.926 5.06a7.65 7.65 0 0 1 4.435 5.848H2.194a.365.365 0 0 1-.298-.534l1.413-2.402a5.16 5.16 0 0 0-1.614-.913L.296 19.275a2.182 2.182 0 0 0 .812 2.999 2.24 2.24 0 0 0 1.086.288h6.983a9.322 9.322 0 0 0-3.845-8.318l1.11-1.922a11.47 11.47 0 0 1 4.95 10.24h5.915a17.242 17.242 0 0 0-7.885-15.28l2.244-3.845a.37.37 0 0 1 .504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 0 1-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 0 0 1.922-3.31z"
        })
      });
    },
    stripe: function({ title: e2 = "Stripe", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
        })
      });
    },
    postgresql: function({ title: e2 = "PostgreSQL", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"
        })
      });
    },
    figma: function({ title: e2 = "Figma", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"
        })
      });
    },
    vercel: function({ title: e2 = "Vercel", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", { d: "m12 1.608 12 20.784H0Z" })
      });
    },
    supabase: function({ title: e2 = "Supabase", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"
        })
      });
    },
    cloudflare: function({ title: e2 = "Cloudflare", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727"
        })
      });
    },
    googledrive: function({ title: e2 = "Google Drive", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z"
        })
      });
    },
    atlassian: function({ title: e2 = "Atlassian", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M7.12 11.084a.683.683 0 00-1.16.126L.075 22.974a.703.703 0 00.63 1.018h8.19a.678.678 0 00.63-.39c1.767-3.65.696-9.203-2.406-12.52zM11.434.386a15.515 15.515 0 00-.906 15.317l3.95 7.9a.703.703 0 00.628.388h8.19a.703.703 0 00.63-1.017L12.63.38a.664.664 0 00-1.196.006z"
        })
      });
    },
    datadog: function({ title: e2 = "Datadog", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M19.57 17.04l-1.997-1.316-1.665 2.782-1.937-.567-1.706 2.604.087.82 9.274-1.71-.538-5.794zm-8.649-2.498l1.488-.204c.241.108.409.15.697.223.45.117.97.23 1.741-.16.18-.088.553-.43.704-.625l6.096-1.106.622 7.527-10.444 1.882zm11.325-2.712l-.602.115L20.488 0 .789 2.285l2.427 19.693 2.306-.334c-.184-.263-.471-.581-.96-.989-.68-.564-.44-1.522-.039-2.127.53-1.022 3.26-2.322 3.106-3.956-.056-.594-.15-1.368-.702-1.898-.02.22.017.432.017.432s-.227-.289-.34-.683c-.112-.15-.2-.199-.319-.4-.085.233-.073.503-.073.503s-.186-.437-.216-.807c-.11.166-.137.48-.137.48s-.241-.69-.186-1.062c-.11-.323-.436-.965-.343-2.424.6.421 1.924.321 2.44-.439.171-.251.288-.939-.086-2.293-.24-.868-.835-2.16-1.066-2.651l-.028.02c.122.395.374 1.223.47 1.625.293 1.218.372 1.642.234 2.204-.116.488-.397.808-1.107 1.165-.71.358-1.653-.514-1.713-.562-.69-.55-1.224-1.447-1.284-1.883-.062-.477.275-.763.445-1.153-.243.07-.514.192-.514.192s.323-.334.722-.624c.165-.109.262-.178.436-.323a9.762 9.762 0 0 0-.456.003s.42-.227.855-.392c-.318-.014-.623-.003-.623-.003s.937-.419 1.678-.727c.509-.208 1.006-.147 1.286.257.367.53.752.817 1.569.996.501-.223.653-.337 1.284-.509.554-.61.99-.688.99-.688s-.216.198-.274.51c.314-.249.66-.455.66-.455s-.134.164-.259.426l.03.043c.366-.22.797-.394.797-.394s-.123.156-.268.358c.277-.002.838.012 1.056.037 1.285.028 1.552-1.374 2.045-1.55.618-.22.894-.353 1.947.68.903.888 1.609 2.477 1.259 2.833-.294.295-.874-.115-1.516-.916a3.466 3.466 0 0 1-.716-1.562 1.533 1.533 0 0 0-.497-.85s.23.51.23.96c0 .246.03 1.165.424 1.68-.039.076-.057.374-.1.43-.458-.554-1.443-.95-1.604-1.067.544.445 1.793 1.468 2.273 2.449.453.927.186 1.777.416 1.997.065.063.976 1.197 1.15 1.767.306.994.019 2.038-.381 2.685l-1.117.174c-.163-.045-.273-.068-.42-.153.08-.143.241-.5.243-.572l-.063-.111c-.348.492-.93.97-1.414 1.245-.633.359-1.363.304-1.838.156-1.348-.415-2.623-1.327-2.93-1.566 0 0-.01.191.048.234.34.383 1.119 1.077 1.872 1.56l-1.605.177.759 5.908c-.337.048-.39.071-.757.124-.325-1.147-.946-1.895-1.624-2.332-.599-.384-1.424-.47-2.214-.314l-.05.059a2.851 2.851 0 0 1 1.863.444c.654.413 1.181 1.481 1.375 2.124.248.822.42 1.7-.248 2.632-.476.662-1.864 1.028-2.986.237.3.481.705.876 1.25.95.809.11 1.577-.03 2.106-.574.452-.464.69-1.434.628-2.456l.714-.104.258 1.834 11.827-1.424zM15.05 6.848c-.034.075-.085.125-.007.37l.004.014.013.032.032.073c.14.287.295.558.552.696.067-.011.136-.019.207-.023.242-.01.395.028.492.08.009-.048.01-.119.005-.222-.018-.364.072-.982-.626-1.308-.264-.122-.634-.084-.757.068a.302.302 0 0 1 .058.013c.186.066.06.13.027.207m1.958 3.392c-.092-.05-.52-.03-.821.005-.574.068-1.193.267-1.328.372-.247.191-.135.523.047.66.511.382.96.638 1.432.575.29-.038.546-.497.728-.914.124-.288.124-.598-.058-.698m-5.077-2.942c.162-.154-.805-.355-1.556.156-.554.378-.571 1.187-.041 1.646.053.046.096.078.137.104a4.77 4.77 0 0 1 1.396-.412c.113-.125.243-.345.21-.745-.044-.542-.455-.456-.146-.749"
        })
      });
    },
    hubspot: function({ title: e2 = "HubSpot", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z"
        })
      });
    },
    asana: function({ title: e2 = "Asana", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M18.78 12.653c-2.882 0-5.22 2.336-5.22 5.22s2.338 5.22 5.22 5.22 5.22-2.34 5.22-5.22-2.336-5.22-5.22-5.22zm-13.56 0c-2.88 0-5.22 2.337-5.22 5.22s2.338 5.22 5.22 5.22 5.22-2.338 5.22-5.22-2.336-5.22-5.22-5.22zm12-6.525c0 2.883-2.337 5.22-5.22 5.22-2.882 0-5.22-2.337-5.22-5.22 0-2.88 2.338-5.22 5.22-5.22 2.883 0 5.22 2.34 5.22 5.22z"
        })
      });
    },
    posthog: function({ title: e2 = "PostHog", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M9.854 14.5 5 9.647.854 5.5A.5.5 0 0 0 0 5.854V8.44a.5.5 0 0 0 .146.353L5 13.647l.147.146L9.854 18.5l.146.147v-.049c.065.03.134.049.207.049h2.586a.5.5 0 0 0 .353-.854L9.854 14.5zm0-5-4-4a.487.487 0 0 0-.409-.144.515.515 0 0 0-.356.21.493.493 0 0 0-.089.288V8.44a.5.5 0 0 0 .147.353l9 9a.5.5 0 0 0 .853-.354v-2.585a.5.5 0 0 0-.146-.354l-5-5zm1-4a.5.5 0 0 0-.854.354V8.44a.5.5 0 0 0 .147.353l4 4a.5.5 0 0 0 .853-.354V9.854a.5.5 0 0 0-.146-.354l-4-4zm12.647 11.515a3.863 3.863 0 0 1-2.232-1.1l-4.708-4.707a.5.5 0 0 0-.854.354v6.585a.5.5 0 0 0 .5.5H23.5a.5.5 0 0 0 .5-.5v-.6c0-.276-.225-.497-.499-.532zm-5.394.032a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM.854 15.5a.5.5 0 0 0-.854.354v2.293a.5.5 0 0 0 .5.5h2.293c.222 0 .39-.135.462-.309a.493.493 0 0 0-.109-.545L.854 15.501zM5 14.647.854 10.5a.5.5 0 0 0-.854.353v2.586a.5.5 0 0 0 .146.353L4.854 18.5l.146.147h2.793a.5.5 0 0 0 .353-.854L5 14.647z"
        })
      });
    },
    airtable: function({ title: e2 = "Airtable", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.266 3.266 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.255 3.255 0 0 0-1.272-.257zM23.4 8.056a.589.589 0 0 0-.222.045l-10.012 3.877a.612.612 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.583.583 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.644.644 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006.307-.147 2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.57.57 0 0 0-.207-.044z"
        })
      });
    },
    docker: function({ title: e2 = "Docker", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"
        })
      });
    },
    zendesk: function({ title: e2 = "Zendesk", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"
        })
      });
    },
    intercom: function({ title: e2 = "Intercom", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M21 0H3C1.343 0 0 1.343 0 3v18c0 1.658 1.343 3 3 3h18c1.658 0 3-1.342 3-3V3c0-1.657-1.342-3-3-3zm-5.801 4.399c0-.44.36-.8.802-.8.44 0 .8.36.8.8v10.688c0 .442-.36.801-.8.801-.443 0-.802-.359-.802-.801V4.399zM11.2 3.994c0-.44.357-.799.8-.799s.8.359.8.799v11.602c0 .44-.357.8-.8.8s-.8-.36-.8-.8V3.994zm-4 .405c0-.44.359-.8.799-.8.443 0 .802.36.802.8v10.688c0 .442-.36.801-.802.801-.44 0-.799-.359-.799-.801V4.399zM3.199 6c0-.442.36-.8.802-.8.44 0 .799.358.799.8v7.195c0 .441-.359.8-.799.8-.443 0-.802-.36-.802-.8V6zM20.52 18.202c-.123.105-3.086 2.593-8.52 2.593-5.433 0-8.397-2.486-8.521-2.593-.335-.288-.375-.792-.086-1.128.285-.334.79-.375 1.125-.09.047.041 2.693 2.211 7.481 2.211 4.848 0 7.456-2.186 7.479-2.207.334-.289.839-.25 1.128.086.289.336.25.84-.086 1.128zm.281-5.007c0 .441-.36.8-.801.8-.441 0-.801-.36-.801-.8V6c0-.442.361-.8.801-.8.441 0 .801.357.801.8v7.195z"
        })
      });
    },
    gmail: function({ title: e2 = "Gmail", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        })
      });
    },
    googlecalendar: function({ title: e2 = "Google Calendar", ...a2 }) {
      return (0, s.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...a2,
        children: (0, s.jsx)("path", {
          d: "M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"
        })
      });
    }
  };
  function G({ brand: e2, className: a2 }) {
    let t2 = e2 ? K[e2] : D;
    return (0, s.jsx)(t2, {
      className: U(W().mark, a2),
      "data-brand": e2,
      "aria-hidden": true
    });
  }
  let Z = { connected: x.A, "needs-auth": L.A, error: f.A }, J = {
    connected: "Connected",
    "needs-auth": "Needs sign in",
    error: "Error"
  };
  function Q({ status: e2, working: a2, reduced: t2 }) {
    let r2 = Z[e2];
    return (0, s.jsx)(et, {
      id: a2 ? `working-${a2}` : e2,
      reduced: t2,
      children: a2 ? (0, s.jsx)("span", {
        className: W().status,
        "data-status": "working",
        children: (0, s.jsx)(k.n, { children: a2 })
      }) : (0, s.jsxs)("span", {
        className: W().status,
        "data-status": e2,
        children: [
          (0, s.jsx)(r2, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          J[e2]
        ]
      })
    });
  }
  function X({ access: e2 }) {
    let a2 = "read" === e2 ? B.A : F.A;
    return (0, s.jsxs)("span", {
      className: W().access,
      "data-access": e2,
      children: [
        (0, s.jsx)(a2, { size: 13, strokeWidth: 1.75, "aria-hidden": "true" }),
        (0, s.jsx)("span", {
          className: W().accessText,
          children: "read" === e2 ? "Read" : "Write"
        })
      ]
    });
  }
  function ee({ value: e2 }) {
    let a2 = e2 < 1e3 ? { value: Math.round(e2), decimals: 0, suffix: "" } : { value: Math.round(e2 / 100) / 10, decimals: 1, suffix: "k" };
    return (0, s.jsx)("span", {
      className: W().counter,
      children: (0, s.jsx)(V.q, {
        value: a2.value,
        decimals: a2.decimals,
        suffix: a2.suffix
      })
    });
  }
  function ea({ value: e2 }) {
    return (0, s.jsx)("span", {
      className: W().counter,
      children: (0, s.jsx)(V.q, { value: e2 })
    });
  }
  function et({ id: e2, children: a2, reduced: t2, className: r2 }) {
    return (0, s.jsx)("span", {
      className: U(W().swap, r2),
      children: (0, s.jsx)(o.N, {
        initial: false,
        mode: "popLayout",
        children: (0, s.jsx)(
          i.PY1.span,
          {
            className: W().swapItem,
            initial: { opacity: 0, y: 2 * !t2 },
            animate: { opacity: 1, y: 0, transition: t2 ? { duration: 0 } : Y },
            exit: { opacity: 0, transition: t2 ? { duration: 0 } : q },
            children: a2
          },
          e2
        )
      })
    });
  }
  function es({
    mode: e2,
    directory: a2,
    connectedIds: t2,
    clientName: n2,
    clientMark: l2,
    account: c2,
    reduced: u2,
    connect: N2,
    onClose: T2,
    onDone: C2,
    announce: z2
  }) {
    let S2, M2 = (0, r.useId)(), L2 = `${M2}-title`, B2 = "reconnect" === e2.kind, [F2, V2] = (0, r.useState)(() => {
      let a3;
      return "reconnect" === e2.kind ? {
        name: "authorize",
        target: {
          kind: "reconnect",
          id: (a3 = e2.server).id,
          name: a3.name,
          brand: a3.brand,
          transport: a3.transport,
          endpoint: a3.endpoint,
          auth: "oauth",
          scopes: a3.scopes ?? R(a3.tools, a3.name),
          tools: a3.tools,
          permission: a3.permission
        }
      } : { name: "directory" };
    }), [P2, D2] = (0, r.useState)(1), [E2, H2] = (0, r.useState)(""), [O2, Y2] = (0, r.useState)(""), [q2, U2] = (0, r.useState)(), [K2, Z2] = (0, r.useState)(false), [J2, Q2] = (0, r.useState)("working"), [er2, en2] = (0, r.useState)([]), [ei2, eo2] = (0, r.useState)({}), [el2, ec2] = (0, r.useState)(null), ed2 = (0, r.useRef)(null), eu2 = (0, r.useRef)(null), em2 = (0, r.useRef)(null), ep2 = (0, r.useRef)(null), eh2 = (0, r.useRef)(0), e_ = (0, r.useRef)(/* @__PURE__ */ new Set());
    (0, r.useEffect)(() => {
      let e3 = e_.current;
      return () => {
        eh2.current++, e3.forEach(window.clearTimeout), e3.clear();
      };
    }, []);
    let eg = (0, r.useCallback)((e3, a3) => {
      let t3 = window.setTimeout(() => {
        e_.current.delete(t3), e3();
      }, a3);
      e_.current.add(t3);
    }, []), ev = (0, r.useCallback)((e3, a3) => {
      D2(a3), V2(e3);
    }, []), ex = (0, r.useCallback)(
      (e3) => {
        let a3 = ++eh2.current;
        ev({ name: "discover", target: e3 }, 1), Q2("working"), en2([]), eo2({}), ec2(null), z2(`Discovering tools on ${e3.name}.`), N2(
          {
            kind: e3.kind,
            serverId: e3.id,
            name: e3.name,
            transport: e3.transport,
            endpoint: e3.endpoint
          },
          e3.tools
        ).then((t3) => {
          if (eh2.current !== a3) return;
          let s2 = new Map(e3.tools.map((e4) => [e4.id, e4]));
          t3.forEach(
            (e4, t4) => eg(
              () => {
                if (eh2.current !== a3) return;
                let t5 = s2.get(e4.id), r2 = e4.enabled ?? t5?.enabled ?? "read" === e4.access;
                en2((a4) => [...a4, e4]), eo2((a4) => ({ ...a4, [e4.id]: r2 }));
              },
              40 + 95 * t4
            )
          ), eg(
            () => {
              eh2.current === a3 && (Q2("done"), z2(
                t3.length ? `Found ${t3.length} ${1 === t3.length ? "tool" : "tools"} on ${e3.name}. Reads are on, writes are off.` : `${e3.name} reported no tools.`
              ));
            },
            120 + 95 * t3.length
          );
        }).catch((t3) => {
          if (eh2.current !== a3) return;
          let s2 = t3 instanceof Error && t3.message ? t3.message : `${e3.name} did not answer.`;
          Q2("error"), ec2(s2), z2(`Discovery failed. ${s2}`);
        });
      },
      [z2, N2, ev, eg]
    ), ef = (0, r.useCallback)(
      (e3) => {
        let a3 = {
          kind: "directory",
          id: e3.id,
          name: e3.name,
          brand: e3.brand,
          transport: e3.transport,
          endpoint: e3.endpoint,
          auth: e3.auth,
          scopes: e3.scopes ?? R(e3.tools, e3.name),
          tools: e3.tools
        };
        "oauth" === a3.auth ? ev({ name: "authorize", target: a3 }, 1) : ex(a3);
      },
      [ex, ev]
    ), eb = () => {
      eh2.current++, Z2(false), ev({ name: "directory" }, -1);
    }, ey = "directory" === F2.name ? "directory" : `${F2.name}-${F2.target.id}`;
    (0, r.useEffect)(() => {
      let e3 = requestAnimationFrame(() => {
        "directory" === F2.name ? eu2.current?.focus() : "authorize" === F2.name ? ep2.current?.focus() : em2.current?.focus();
      });
      return () => cancelAnimationFrame(e3);
    }, [ey]), (0, r.useEffect)(() => {
      "done" === J2 && "discover" === F2.name && document.activeElement === em2.current && ep2.current?.focus();
    }, [J2, F2.name]);
    let ej = (0, r.useMemo)(() => {
      let e3 = E2.trim().toLowerCase();
      return e3 ? a2.filter(
        (a3) => `${a3.name} ${a3.description}`.toLowerCase().includes(e3)
      ) : a2;
    }, [a2, E2]), ew = "directory" === F2.name ? "Add a server" : "authorize" === F2.name ? `Sign in to ${F2.target.name}` : F2.target.name, ek = "directory" !== F2.name && "reconnect" !== F2.target.kind && "retry" !== F2.target.kind, eN = er2.filter((e3) => ei2[e3.id]), eT = eN.reduce((e3, a3) => e3 + a3.tokens, 0);
    return (0, s.jsxs)(i.PY1.div, {
      ref: ed2,
      className: W().sheet,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": L2,
      onKeyDown: (e3) => {
        if ("Escape" === e3.key) {
          e3.stopPropagation(), T2();
          return;
        }
        if ("Tab" !== e3.key || !ed2.current) return;
        let a3 = [
          ...ed2.current.querySelectorAll(
            "button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex='-1'])"
          )
        ].filter(
          (e4) => null !== e4.offsetParent && !e4.closest("[data-leaving]")
        );
        if (!a3.length) return;
        let t3 = a3[0], s2 = a3[a3.length - 1];
        e3.shiftKey && document.activeElement === t3 ? (e3.preventDefault(), s2.focus()) : e3.shiftKey || document.activeElement !== s2 || (e3.preventDefault(), t3.focus());
      },
      initial: u2 ? { opacity: 0 } : { y: "100%" },
      animate: u2 ? { opacity: 1 } : { y: 0 },
      exit: u2 ? { opacity: 0, transition: { duration: 0.12 } } : {
        y: "100%",
        transition: { type: "spring", visualDuration: 0.26, bounce: 0 }
      },
      transition: u2 ? { duration: 0.12 } : { type: "spring", visualDuration: 0.34, bounce: 0 },
      children: [
        (0, s.jsxs)("div", {
          className: W().sheetHead,
          children: [
            (0, s.jsx)("span", {
              className: W().sheetSide,
              children: (0, s.jsx)(o.N, {
                initial: false,
                children: ek ? (0, s.jsx)(
                  i.PY1.span,
                  {
                    className: W().sheetSideItem,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.14 * !u2 },
                    children: (0, s.jsx)(d.$, {
                      variant: "ghost",
                      size: "sm",
                      className: W().iconButton,
                      onClick: eb,
                      "aria-label": "Back to the directory",
                      children: (0, s.jsx)(m.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    })
                  },
                  "back"
                ) : null
              })
            }),
            (0, s.jsx)("h3", {
              id: L2,
              className: W().sheetTitle,
              children: (0, s.jsx)(et, { id: ew, reduced: u2, children: ew })
            }),
            (0, s.jsx)("span", {
              className: W().sheetSide,
              "data-end": "",
              children: (0, s.jsx)(d.$, {
                variant: "ghost",
                size: "sm",
                className: W().iconButton,
                onClick: T2,
                "aria-label": "Close",
                children: (0, s.jsx)(p.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            })
          ]
        }),
        (0, s.jsx)("div", {
          className: W().sheetBody,
          children: (0, s.jsx)(o.N, {
            initial: false,
            custom: P2,
            children: (0, s.jsxs)(
              i.PY1.div,
              {
                className: W().step,
                custom: P2,
                variants: {
                  enter: (e3) => ({ opacity: 0, x: S2 ? 0 : 18 * e3 }),
                  center: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.22 * !(S2 = u2), ease: I }
                  },
                  exit: (e3) => ({
                    opacity: 0,
                    x: S2 ? 0 : -18 * e3,
                    transition: { duration: 0.12 * !S2, ease: I }
                  })
                },
                initial: "enter",
                animate: "center",
                exit: "exit",
                children: [
                  "directory" === F2.name ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("div", {
                        className: W().stepScroll,
                        onKeyDown: (e3) => {
                          if ("ArrowDown" !== e3.key && "ArrowUp" !== e3.key)
                            return;
                          let a3 = [
                            ...ed2.current?.querySelectorAll(
                              "[data-entry]:not([disabled])"
                            ) ?? []
                          ];
                          if (!a3.length) return;
                          let t3 = a3.indexOf(document.activeElement);
                          e3.preventDefault(), "ArrowDown" === e3.key ? a3[t3 < 0 ? 0 : Math.min(a3.length - 1, t3 + 1)]?.focus() : t3 <= 0 ? eu2.current?.focus() : a3[t3 - 1]?.focus();
                        },
                        children: [
                          (0, s.jsx)("div", {
                            className: W().searchWrap,
                            children: (0, s.jsx)(j.L, {
                              ref: eu2,
                              label: "Search servers",
                              placeholder: "Search servers",
                              value: E2,
                              onValueChange: H2,
                              autoComplete: "off"
                            })
                          }),
                          ej.length ? (0, s.jsx)("ul", {
                            className: W().directory,
                            "aria-label": "Servers",
                            children: ej.map((e3) => {
                              let a3 = t2.includes(e3.id);
                              return (0, s.jsx)(
                                "li",
                                {
                                  children: (0, s.jsxs)("button", {
                                    type: "button",
                                    "data-entry": "",
                                    className: W().entry,
                                    disabled: a3,
                                    onClick: () => ef(e3),
                                    "aria-label": `${e3.name}, ${e3.description}${a3 ? ", already added" : ""}`,
                                    children: [
                                      (0, s.jsx)(G, {
                                        brand: e3.brand,
                                        className: W().entryMark
                                      }),
                                      (0, s.jsxs)("span", {
                                        className: W().entryText,
                                        children: [
                                          (0, s.jsx)("span", {
                                            className: W().entryName,
                                            children: e3.name
                                          }),
                                          (0, s.jsx)("span", {
                                            className: W().entryDesc,
                                            children: e3.description
                                          })
                                        ]
                                      }),
                                      (0, s.jsx)("span", {
                                        className: W().entryMeta,
                                        children: a3 ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                            (0, s.jsx)(h.A, {
                                              size: 14,
                                              strokeWidth: 1.75,
                                              "aria-hidden": "true"
                                            }),
                                            "Added"
                                          ]
                                        }) : (0, s.jsxs)(s.Fragment, {
                                          children: [
                                            "local" === e3.transport ? "Local" : "Remote",
                                            (0, s.jsx)(_.A, {
                                              size: 16,
                                              strokeWidth: 1.75,
                                              "aria-hidden": "true"
                                            })
                                          ]
                                        })
                                      })
                                    ]
                                  })
                                },
                                e3.id
                              );
                            })
                          }) : (0, s.jsxs)("div", {
                            className: W().noResults,
                            role: "status",
                            children: [
                              (0, s.jsxs)("p", {
                                className: W().noResultsTitle,
                                children: [
                                  "No servers match \u201C",
                                  E2.trim(),
                                  "\u201D"
                                ]
                              }),
                              (0, s.jsx)("p", {
                                children: "Paste the server's URL below to connect it directly."
                              })
                            ]
                          })
                        ]
                      }),
                      (0, s.jsxs)("form", {
                        className: W().urlForm,
                        onSubmit: (e3) => {
                          e3.preventDefault();
                          let a3 = (function(e4) {
                            let a4 = e4.trim();
                            if (!a4) return null;
                            try {
                              let e5 = new URL(
                                /^[a-z]+:\/\//i.test(a4) ? a4 : `https://${a4}`
                              );
                              if ("https:" !== e5.protocol && "http:" !== e5.protocol || !e5.hostname.includes(".") && "localhost" !== e5.hostname)
                                return null;
                              return e5;
                            } catch {
                              return null;
                            }
                          })(O2);
                          if (!a3)
                            return void U2(
                              "Enter a server URL, like https://mcp.example.com/mcp"
                            );
                          U2(void 0);
                          let t3 = a3.hostname.replace(/^(www|mcp|api)\./, "") || a3.hostname;
                          ex({
                            kind: "url",
                            id: `url-${(a3.host + a3.pathname).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "server"}`,
                            name: t3,
                            transport: "remote",
                            endpoint: a3.href,
                            auth: "none",
                            scopes: [],
                            tools: $
                          });
                        },
                        noValidate: true,
                        children: [
                          (0, s.jsx)("p", {
                            className: W().urlTitle,
                            id: `${M2}-url`,
                            children: "Or connect by URL"
                          }),
                          (0, s.jsxs)("div", {
                            className: W().urlRow,
                            children: [
                              (0, s.jsx)(y.p, {
                                label: "Server URL",
                                placeholder: "https://mcp.example.com/mcp",
                                value: O2,
                                onChange: (e3) => {
                                  Y2(e3.target.value), q2 && U2(void 0);
                                },
                                error: q2,
                                inputMode: "url",
                                autoComplete: "off",
                                spellCheck: false,
                                "aria-describedby": `${M2}-url`
                              }),
                              (0, s.jsx)(d.$, {
                                type: "submit",
                                variant: "secondary",
                                className: W().urlButton,
                                children: "Connect"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }) : null,
                  "authorize" === F2.name ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("div", {
                        className: W().stepScroll,
                        children: (0, s.jsxs)("div", {
                          className: W().auth,
                          children: [
                            (0, s.jsxs)("p", {
                              className: W().simTag,
                              children: [
                                (0, s.jsx)(g.A, {
                                  size: 14,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                "Simulated sign in"
                              ]
                            }),
                            (0, s.jsxs)("div", {
                              className: W().handshake,
                              "aria-hidden": "true",
                              children: [
                                (0, s.jsx)(G, {
                                  brand: F2.target.brand,
                                  className: W().handshakeMark
                                }),
                                (0, s.jsx)("span", {
                                  className: W().handshakeLine,
                                  children: (0, s.jsx)(v.A, {
                                    size: 14,
                                    strokeWidth: 1.75
                                  })
                                }),
                                (0, s.jsx)("span", {
                                  className: W().handshakeClient,
                                  children: l2
                                })
                              ]
                            }),
                            (0, s.jsxs)("p", {
                              className: W().authTitle,
                              children: [
                                n2,
                                " wants to use your ",
                                F2.target.name,
                                " account"
                              ]
                            }),
                            (0, s.jsxs)("div", {
                              className: W().account,
                              children: [
                                (0, s.jsx)(b.e, {
                                  name: c2.name,
                                  src: c2.avatar,
                                  size: "sm",
                                  className: W().accountAvatar,
                                  "aria-hidden": "true"
                                }),
                                (0, s.jsx)("span", {
                                  className: W().accountName,
                                  children: c2.name
                                }),
                                (0, s.jsx)("span", {
                                  className: W().accountEmail,
                                  children: c2.email
                                })
                              ]
                            }),
                            (0, s.jsxs)("div", {
                              className: W().scopes,
                              children: [
                                (0, s.jsx)("p", {
                                  className: W().scopesTitle,
                                  children: "This lets the agent"
                                }),
                                (0, s.jsx)("ul", {
                                  children: F2.target.scopes.map(
                                    (e3) => (0, s.jsxs)(
                                      "li",
                                      {
                                        children: [
                                          (0, s.jsx)(h.A, {
                                            size: 15,
                                            strokeWidth: 1.75,
                                            "aria-hidden": "true"
                                          }),
                                          e3
                                        ]
                                      },
                                      e3
                                    )
                                  )
                                })
                              ]
                            })
                          ]
                        })
                      }),
                      (0, s.jsxs)("div", {
                        className: W().stepFoot,
                        children: [
                          (0, s.jsxs)("p", {
                            className: W().footNote,
                            children: [
                              "No ",
                              F2.target.name,
                              " account is contacted."
                            ]
                          }),
                          (0, s.jsxs)("div", {
                            className: W().footActions,
                            children: [
                              (0, s.jsx)(d.$, {
                                variant: "ghost",
                                onClick: B2 ? T2 : eb,
                                children: "Cancel"
                              }),
                              (0, s.jsx)(d.$, {
                                ref: ep2,
                                className: W().accentButton,
                                loading: K2,
                                onClick: () => {
                                  var e3;
                                  return e3 = F2.target, void (!K2 && (Z2(true), z2(
                                    `Authorizing ${e3.name}. Simulated, no account is contacted.`
                                  ), eg(
                                    () => {
                                      Z2(false), ex(e3);
                                    },
                                    u2 ? 200 : 620
                                  )));
                                },
                                children: "Authorize"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }) : null,
                  "discover" === F2.name ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)("div", {
                        className: W().stepScroll,
                        children: [
                          (0, s.jsxs)("div", {
                            className: W().discoverHead,
                            children: [
                              (0, s.jsx)(G, {
                                brand: F2.target.brand,
                                className: W().discoverMark
                              }),
                              (0, s.jsxs)("div", {
                                className: W().discoverText,
                                children: [
                                  (0, s.jsx)("h4", {
                                    ref: em2,
                                    tabIndex: -1,
                                    className: W().discoverTitle,
                                    children: (0, s.jsx)(et, {
                                      id: J2,
                                      reduced: u2,
                                      children: "working" === J2 ? (0, s.jsx)(k.n, {
                                        children: "Discovering tools"
                                      }) : "done" === J2 ? (0, s.jsxs)("span", {
                                        className: W().phaseDone,
                                        children: [
                                          (0, s.jsx)(x.A, {
                                            size: 16,
                                            strokeWidth: 1.75,
                                            "aria-hidden": "true"
                                          }),
                                          "Found ",
                                          er2.length,
                                          " ",
                                          1 === er2.length ? "tool" : "tools"
                                        ]
                                      }) : (0, s.jsxs)("span", {
                                        className: W().phaseError,
                                        children: [
                                          (0, s.jsx)(f.A, {
                                            size: 16,
                                            strokeWidth: 1.75,
                                            "aria-hidden": "true"
                                          }),
                                          "Discovery failed"
                                        ]
                                      })
                                    })
                                  }),
                                  (0, s.jsx)("p", {
                                    className: W().discoverSub,
                                    children: F2.target.endpoint ?? ("local" === F2.target.transport ? "Local server" : "Remote server")
                                  })
                                ]
                              })
                            ]
                          }),
                          "error" === J2 ? (0, s.jsxs)("div", {
                            className: W().discoverError,
                            role: "alert",
                            children: [
                              (0, s.jsx)("p", { children: el2 }),
                              (0, s.jsx)(d.$, {
                                variant: "secondary",
                                size: "sm",
                                onClick: () => ex(F2.target),
                                children: "Try again"
                              })
                            ]
                          }) : (0, s.jsxs)("ul", {
                            className: W().found,
                            "aria-label": `${F2.target.name} tools`,
                            "aria-busy": "working" === J2,
                            children: [
                              (0, s.jsx)(o.N, {
                                initial: false,
                                children: er2.map((e3) => {
                                  let a3 = `${M2}-found-${e3.id}`;
                                  return (0, s.jsxs)(
                                    i.PY1.li,
                                    {
                                      className: W().tool,
                                      "data-off": !ei2[e3.id] || void 0,
                                      initial: {
                                        opacity: 0,
                                        y: 4 * !u2
                                      },
                                      animate: { opacity: 1, y: 0 },
                                      transition: {
                                        duration: 0.18 * !u2,
                                        ease: I
                                      },
                                      children: [
                                        (0, s.jsx)("label", {
                                          htmlFor: a3,
                                          className: W().toolName,
                                          children: e3.name
                                        }),
                                        (0, s.jsx)(X, {
                                          access: e3.access
                                        }),
                                        (0, s.jsx)("span", {
                                          className: W().toolTokens,
                                          children: A(e3.tokens)
                                        }),
                                        (0, s.jsx)(w.d, {
                                          id: a3,
                                          className: W().toolSwitch,
                                          checked: !!ei2[e3.id],
                                          onCheckedChange: (a4) => eo2((t3) => ({
                                            ...t3,
                                            [e3.id]: a4
                                          })),
                                          "aria-label": `${e3.name}, ${e3.access} tool, ${e3.tokens} tokens`
                                        })
                                      ]
                                    },
                                    e3.id
                                  );
                                })
                              }),
                              "working" !== J2 || u2 ? null : (0, s.jsxs)("li", {
                                className: W().foundPending,
                                "aria-hidden": "true",
                                children: [
                                  (0, s.jsx)("span", {}),
                                  (0, s.jsx)("span", {})
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      (0, s.jsxs)("div", {
                        className: W().stepFoot,
                        children: [
                          (0, s.jsx)("p", {
                            className: W().footNote,
                            children: "error" === J2 ? "Nothing was added." : (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)("span", {
                                  className: W().footValue,
                                  children: (0, s.jsx)(ea, {
                                    value: eN.length
                                  })
                                }),
                                "\xA0on",
                                (0, s.jsx)("span", {
                                  "aria-hidden": "true",
                                  children: "\xA0\xB7\xA0"
                                }),
                                (0, s.jsx)("span", {
                                  className: W().footValue,
                                  children: (0, s.jsx)(ee, {
                                    value: eT
                                  })
                                }),
                                "\xA0tokens"
                              ]
                            })
                          }),
                          (0, s.jsx)("div", {
                            className: W().footActions,
                            children: (0, s.jsx)(d.$, {
                              ref: ep2,
                              className: W().accentButton,
                              disabled: "done" !== J2,
                              onClick: () => {
                                if ("discover" !== F2.name || "done" !== J2)
                                  return;
                                let { target: e3 } = F2;
                                C2(
                                  {
                                    id: e3.id,
                                    name: e3.name,
                                    brand: e3.brand,
                                    transport: e3.transport,
                                    endpoint: e3.endpoint,
                                    status: "connected",
                                    permission: e3.permission ?? "ask",
                                    scopes: "oauth" === e3.auth ? e3.scopes : void 0,
                                    tools: er2.map((e4) => ({
                                      id: e4.id,
                                      name: e4.name,
                                      access: e4.access,
                                      tokens: e4.tokens,
                                      enabled: !!ei2[e4.id]
                                    }))
                                  },
                                  e3.kind
                                );
                              },
                              children: "reconnect" === F2.target.kind ? "Done" : "Add server"
                            })
                          })
                        ]
                      })
                    ]
                  }) : null
                ]
              },
              ey
            )
          })
        })
      ]
    });
  }
  var er = t(11012);
  function en({ servers: e2, budget: a2, hotId: t2, reduced: r2 }) {
    let n2 = e2.map((e3) => ({ id: e3.id, name: e3.name, tokens: M(e3) })).filter((e3) => e3.tokens > 0), l2 = n2.reduce((e3, a3) => e3 + a3.tokens, 0), c2 = e2.reduce((e3, a3) => {
      let t3;
      return e3 + ("connected" === (t3 = a3).status ? t3.tools.filter((e4) => e4.enabled).length : 0);
    }, 0), d2 = Math.max(a2, l2, 1), u2 = l2 - a2, m2 = !!t2 && n2.some((e3) => e3.id === t2);
    return (0, s.jsxs)("div", {
      className: W().meter,
      children: [
        (0, s.jsxs)("div", {
          className: W().meterLine,
          children: [
            (0, s.jsxs)("p", {
              className: W().meterText,
              children: [
                (0, s.jsx)("span", {
                  className: W().meterValue,
                  children: (0, s.jsx)(ea, { value: c2 })
                }),
                (0, s.jsx)(et, {
                  id: 1 === c2 ? "one" : "many",
                  reduced: r2,
                  children: 1 === c2 ? "tool" : "tools"
                }),
                (0, s.jsx)("span", {
                  className: W().meterDot,
                  "aria-hidden": "true",
                  children: "\xB7"
                }),
                (0, s.jsx)("span", {
                  className: W().meterValue,
                  children: (0, s.jsx)(ee, { value: l2 })
                }),
                (0, s.jsx)("span", { children: "tokens of context" })
              ]
            }),
            (0, s.jsx)(et, {
              id: u2 > 0 ? "over" : "under",
              reduced: r2,
              className: W().budgetSlot,
              children: u2 > 0 ? (0, s.jsxs)("span", {
                className: W().budget,
                "data-over": "",
                children: [
                  (0, s.jsx)(er.A, {
                    size: 14,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  A(u2),
                  " over the ",
                  A(a2),
                  " budget"
                ]
              }) : (0, s.jsxs)("span", {
                className: W().budget,
                children: [A(a2), " budget"]
              })
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: W().track,
          "data-focus": m2 || void 0,
          role: "meter",
          "aria-label": "Context used by tool definitions",
          "aria-valuemin": 0,
          "aria-valuemax": d2,
          "aria-valuenow": l2,
          "aria-valuetext": `${l2.toLocaleString("en-US")} of ${a2.toLocaleString("en-US")} budgeted tokens${u2 > 0 ? `, ${u2.toLocaleString("en-US")} over` : ""}`,
          children: [
            (0, s.jsx)(o.N, {
              initial: false,
              children: n2.map(
                (e3) => (0, s.jsx)(
                  i.PY1.span,
                  {
                    className: W().segment,
                    "data-hot": t2 === e3.id || void 0,
                    title: `${e3.name}: ${A(e3.tokens)} tokens`,
                    initial: { width: "0%" },
                    animate: { width: `${e3.tokens / d2 * 100}%` },
                    exit: { width: "0%" },
                    transition: r2 ? { duration: 0 } : O,
                    children: (0, s.jsx)("span", {
                      className: W().segmentFill
                    })
                  },
                  e3.id
                )
              )
            }),
            (0, s.jsx)(i.PY1.span, {
              className: W().overflow,
              "aria-hidden": "true",
              initial: false,
              animate: { left: `${a2 / d2 * 100}%`, opacity: +(u2 > 0) },
              transition: r2 ? { duration: 0 } : { left: O, opacity: { duration: 0.2 } }
            })
          ]
        })
      ]
    });
  }
  var ei = t(12363), eo = t(25879), el = t(66558);
  let ec = [
    { value: "ask", label: "Ask every time" },
    { value: "allow-reads", label: "Always allow reads" }
  ];
  function ed({
    server: e2,
    open: a2,
    fresh: t2,
    working: n2,
    reduced: l2,
    onToggleOpen: c2,
    onToggleTool: u2,
    onPermission: m2,
    onSignIn: p2,
    onRetry: h2,
    onRemove: _2,
    onHot: g2,
    onHeadKey: v2
  }) {
    let x2 = (0, r.useId)(), b2 = `${x2}-panel`, y2 = "connected" === e2.status && !n2, j2 = e2.tools.filter((e3) => e3.enabled).length, w2 = M(e2), k2 = "remote" === e2.transport ? "Remote" : "Local", N2 = n2 || "connected" === e2.status ? null : "needs-auth" === e2.status ? "Sign in" : "Retry";
    return (0, s.jsxs)("div", {
      className: W().row,
      "data-open": a2 || void 0,
      "data-fresh": t2 || void 0,
      onPointerEnter: () => g2(e2.id),
      onPointerLeave: () => g2(null),
      children: [
        (0, s.jsxs)("div", {
          className: W().head,
          children: [
            (0, s.jsxs)("button", {
              type: "button",
              className: W().headButton,
              "data-head": e2.id,
              "aria-expanded": a2,
              "aria-controls": b2,
              "aria-label": `${e2.name}, ${n2 ?? J[e2.status]}, ${k2}${y2 ? `, ${j2} of ${e2.tools.length} tools on, ${A(w2)} tokens` : ""}`,
              onClick: () => c2(e2.id),
              onKeyDown: (a3) => v2(a3, e2.id),
              onFocus: () => g2(e2.id),
              onBlur: () => g2(null),
              children: [
                (0, s.jsx)(G, { brand: e2.brand, className: W().rowMark }),
                (0, s.jsxs)("span", {
                  className: W().headText,
                  children: [
                    (0, s.jsx)("span", {
                      className: W().name,
                      children: e2.name
                    }),
                    (0, s.jsxs)("span", {
                      className: W().sub,
                      children: [
                        (0, s.jsx)(Q, {
                          status: e2.status,
                          working: n2,
                          reduced: l2
                        }),
                        (0, s.jsx)("span", {
                          className: W().subDot,
                          "aria-hidden": "true",
                          children: "\xB7"
                        }),
                        (0, s.jsx)("span", {
                          className: W().transport,
                          children: k2
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsx)(et, {
                  id: y2 ? "meta" : "spacer",
                  reduced: l2,
                  className: W().metaSlot,
                  children: y2 ? (0, s.jsxs)("span", {
                    className: W().meta,
                    children: [
                      (0, s.jsxs)("span", {
                        className: W().toolCount,
                        children: [
                          (0, s.jsx)(ea, { value: j2 }),
                          " of ",
                          e2.tools.length,
                          (0, s.jsx)("span", {
                            className: W().wideOnly,
                            children: "\xA0tools"
                          })
                        ]
                      }),
                      (0, s.jsxs)("span", {
                        className: W().tokens,
                        children: [
                          (0, s.jsx)(ee, { value: w2 }),
                          (0, s.jsx)("span", {
                            className: W().srOnly,
                            children: " tokens"
                          })
                        ]
                      })
                    ]
                  }) : (0, s.jsx)("span", {
                    className: W().actionSpacer,
                    "data-action": e2.status,
                    "aria-hidden": "true"
                  })
                }),
                (0, s.jsx)(ei.A, {
                  className: W().chevron,
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              ]
            }),
            (0, s.jsx)(o.N, {
              initial: false,
              children: N2 ? (0, s.jsx)(
                i.PY1.span,
                {
                  className: W().headAction,
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: l2 ? { duration: 0 } : Y
                  },
                  exit: { opacity: 0, transition: l2 ? { duration: 0 } : q },
                  children: (0, s.jsxs)(d.$, {
                    size: "sm",
                    variant: "secondary",
                    className: W().rowAction,
                    onClick: () => ("needs-auth" === e2.status ? p2 : h2)(e2.id),
                    "aria-label": `${N2}: ${e2.name}`,
                    children: [
                      "needs-auth" === e2.status ? (0, s.jsx)(L.A, {
                        size: 15,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }) : null,
                      N2
                    ]
                  })
                },
                N2
              ) : null
            })
          ]
        }),
        (0, s.jsx)(o.N, {
          initial: false,
          children: a2 ? (0, s.jsx)(
            i.PY1.div,
            {
              id: b2,
              role: "region",
              "aria-label": `${e2.name} settings`,
              className: W().panelClip,
              initial: l2 ? { opacity: 0 } : { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: l2 ? { opacity: 0, transition: { duration: 0 } } : {
                height: 0,
                opacity: 0,
                transition: { height: O, opacity: { duration: 0.12 } }
              },
              transition: l2 ? { duration: 0 } : { height: O, opacity: Y },
              children: (0, s.jsxs)("div", {
                className: W().panel,
                children: [
                  "connected" !== e2.status || n2 ? (0, s.jsxs)("p", {
                    className: W().notice,
                    "data-tone": "error" === e2.status ? "error" : "auth",
                    children: [
                      "error" === e2.status ? (0, s.jsx)(f.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }) : (0, s.jsx)(L.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, s.jsx)("span", {
                        children: "error" === e2.status ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("span", {
                              className: W().noticeTitle,
                              children: "Could not load tools."
                            }),
                            " ",
                            e2.error ?? "The server did not answer."
                          ]
                        }) : (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)("span", {
                              className: W().noticeTitle,
                              children: "Signed out."
                            }),
                            " Sign in to ",
                            e2.name,
                            " again to load its ",
                            e2.tools.length || "",
                            " tools."
                          ]
                        })
                      })
                    ]
                  }) : (0, s.jsx)(eu, { server: e2, onToggleTool: u2 }),
                  (0, s.jsxs)("div", {
                    className: W().setting,
                    children: [
                      (0, s.jsx)("span", {
                        className: W().settingLabel,
                        id: `${x2}-perm`,
                        children: "Before a tool runs"
                      }),
                      (0, s.jsx)(el.A, {
                        label: "Before a tool runs",
                        options: ec,
                        value: e2.permission ?? "ask",
                        onValueChange: (a3) => m2(e2.id, a3),
                        className: W().segmented
                      })
                    ]
                  }),
                  (0, s.jsxs)("div", {
                    className: W().panelFoot,
                    children: [
                      e2.endpoint ? (0, s.jsx)("code", {
                        className: W().endpoint,
                        title: e2.endpoint,
                        children: e2.endpoint
                      }) : (0, s.jsx)("span", {}),
                      (0, s.jsxs)(d.$, {
                        size: "sm",
                        variant: "ghost",
                        className: W().remove,
                        onClick: () => _2(e2.id),
                        "aria-label": `Remove ${e2.name}`,
                        children: [
                          (0, s.jsx)(eo.A, {
                            size: 15,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          "Remove"
                        ]
                      })
                    ]
                  })
                ]
              })
            },
            "panel"
          ) : null
        })
      ]
    });
  }
  function eu({ server: e2, onToggleTool: a2 }) {
    let t2 = (0, r.useId)();
    return (0, s.jsx)("ul", {
      className: W().tools,
      "aria-label": `${e2.name} tools`,
      children: e2.tools.map((r2) => {
        let n2 = `${t2}-${r2.id}`;
        return (0, s.jsxs)(
          "li",
          {
            className: U(W().tool),
            "data-off": !r2.enabled || void 0,
            children: [
              (0, s.jsx)("label", {
                htmlFor: n2,
                className: W().toolName,
                children: r2.name
              }),
              (0, s.jsx)(X, { access: r2.access }),
              (0, s.jsx)("span", {
                className: W().toolTokens,
                children: A(r2.tokens)
              }),
              (0, s.jsx)(w.d, {
                id: n2,
                className: W().toolSwitch,
                checked: r2.enabled,
                onCheckedChange: (t3) => a2(e2.id, r2.id, t3),
                "aria-label": `${r2.name}, ${"read" === r2.access ? "read" : "write"} tool, ${r2.tokens} tokens`
              })
            ]
          },
          r2.id
        );
      })
    });
  }
  let em = {
    name: "Emma Collins",
    email: "emma@northwind.dev",
    avatar: (0, u.my)("emma-collins")
  };
  function ep({
    servers: e2,
    directory: a2 = z,
    budget: t2 = 8e3,
    title: u2 = "MCP servers",
    clientName: m2 = "Northwind agent",
    clientMark: p2 = (0, s.jsx)(E, { "aria-hidden": "true" }),
    account: h2 = em,
    onToggleTool: _2,
    onConnect: g2,
    onRemove: v2,
    onPermissionChange: x2,
    className: f2
  }) {
    let b2 = void 0 === e2, y2 = !!(0, n.I)(), j2 = (0, r.useId)(), w2 = `${j2}-title`, [k2, N2] = (0, r.useState)(() => e2 ?? T), [C2, $2] = (0, r.useState)(e2);
    e2 !== C2 && ($2(e2), e2 && N2(e2));
    let [R2, L2] = (0, r.useState)(null), [B2, F2] = (0, r.useState)(null), [V2, P2] = (0, r.useState)({}), [H2, I2] = (0, r.useState)(null), [K2, Z2] = (0, r.useState)(false), [J2, Q2] = (0, r.useState)(null), [X2, ee2] = (0, r.useState)(null), [ea2, et2] = (0, r.useState)(""), er2 = (0, r.useRef)(null), ei2 = (0, r.useRef)(null), eo2 = (0, r.useRef)(null), el2 = (0, r.useRef)(/* @__PURE__ */ new Set()), ec2 = (0, r.useRef)({ servers: k2, pending: H2, onConnect: g2, onRemove: v2 });
    (0, r.useLayoutEffect)(() => {
      ec2.current = { servers: k2, pending: H2, onConnect: g2, onRemove: v2 };
    });
    let eu2 = (0, r.useRef)(/* @__PURE__ */ new Set());
    (0, r.useEffect)(() => {
      let e3 = eu2.current;
      return () => {
        e3.forEach(window.clearTimeout), e3.clear();
      };
    }, []);
    let eh2 = (0, r.useCallback)((e3, a3) => {
      let t3 = window.setTimeout(() => {
        eu2.current.delete(t3), e3();
      }, a3);
      eu2.current.add(t3);
    }, []), e_ = (0, r.useCallback)((e3) => et2((a3) => a3 === e3 ? `${e3} ` : e3), []), eg = (0, r.useCallback)((e3) => {
      requestAnimationFrame(() => {
        let a3 = e3 ? er2.current?.querySelector(`[data-head="${CSS.escape(e3)}"]`) : null;
        (a3 ?? ei2.current)?.focus();
      });
    }, []), ev = (0, r.useCallback)(
      (e3) => {
        ee2(e3), eh2(() => ee2((a3) => a3 === e3 ? null : a3), 1700);
      },
      [eh2]
    ), ex = (0, r.useCallback)(
      (e3, a3) => {
        let t3 = ec2.current.onConnect;
        return t3 ? Promise.resolve().then(() => t3(e3)).then((e4) => Array.isArray(e4) ? e4 : a3) : new Promise((t4, s2) => {
          eh2(
            () => {
              b2 && S.has(e3.serverId) && !el2.current.has(e3.serverId) ? (el2.current.add(e3.serverId), s2(
                Error(
                  `${e3.name} closed the connection during tools/list. Simulated failure, try again.`
                )
              )) : t4(a3);
            },
            "retry" === e3.kind ? 1100 : 760
          );
        });
      },
      [b2, eh2]
    ), ef = k2.reduce((e3, a3) => e3 + M(a3), 0), eb = (e3, a3, t3) => {
      let s2 = k2.find((a4) => a4.id === e3), r2 = s2?.tools.find((e4) => e4.id === a3);
      s2 && r2 && r2.enabled !== t3 && (N2(
        (s3) => s3.map(
          (s4) => s4.id !== e3 ? s4 : {
            ...s4,
            tools: s4.tools.map(
              (e4) => e4.id === a3 ? { ...e4, enabled: t3 } : e4
            )
          }
        )
      ), _2?.(e3, a3, t3), e_(
        `${r2.name} ${t3 ? "on" : "off"}. ${A(ef + (t3 ? r2.tokens : -r2.tokens))} tokens of context.`
      ));
    }, ey = (e3, a3) => {
      let t3 = k2.find((a4) => a4.id === e3);
      t3 && t3.permission !== a3 && (N2((t4) => t4.map((t5) => t5.id === e3 ? { ...t5, permission: a3 } : t5)), x2?.(e3, a3), e_(
        `${t3.name}: ${"ask" === a3 ? "ask before every tool call" : "read tools run without asking"}.`
      ));
    }, ej = (0, r.useCallback)(() => {
      let e3 = ec2.current.pending;
      e3 && (ec2.current.onRemove?.(e3.server.id), I2(null), Z2(false));
    }, []), ew = (e3) => {
      let a3 = k2.findIndex((a4) => a4.id === e3);
      if (a3 < 0) return;
      let t3 = k2[a3];
      ej();
      let s2 = k2[a3 + 1] ?? k2[a3 - 1] ?? null;
      N2((a4) => a4.filter((a5) => a5.id !== e3)), L2((a4) => a4 === e3 ? null : a4), P2((a4) => {
        let t4 = { ...a4 };
        return delete t4[e3], t4;
      }), I2({ server: t3, index: a3, key: Date.now() }), e_(`Removed ${t3.name}. Undo is available for a few seconds.`), eg(s2?.id ?? null);
    }, ek = (0, r.useCallback)(() => {
      let e3 = ec2.current.pending;
      e3 && (I2(null), Z2(false), N2((a3) => {
        if (a3.some((a4) => a4.id === e3.server.id)) return a3;
        let t3 = [...a3];
        return t3.splice(Math.min(e3.index, t3.length), 0, e3.server), t3;
      }), ev(e3.server.id), e_(`Restored ${e3.server.name}.`), eg(e3.server.id));
    }, [e_, ev, eg]);
    (0, r.useEffect)(() => {
      if (!H2 || K2) return;
      let e3 = window.setTimeout(ej, 6e3);
      return () => window.clearTimeout(e3);
    }, [H2, K2, ej]);
    let eN = (e3) => {
      let a3 = k2.find((a4) => a4.id === e3);
      a3 && !V2[e3] && (eg(e3), P2((a4) => ({ ...a4, [e3]: "Connecting" })), e_(`Reconnecting to ${a3.name}.`), ex(
        {
          kind: "retry",
          serverId: e3,
          name: a3.name,
          transport: a3.transport,
          endpoint: a3.endpoint
        },
        a3.tools
      ).then((t3) => {
        var s2, r2;
        let n2, i2 = (s2 = a3.tools, r2 = t3, n2 = new Map(s2.map((e4) => [e4.id, e4])), r2.map((e4) => ({
          ...e4,
          enabled: e4.enabled ?? n2.get(e4.id)?.enabled ?? "read" === e4.access
        })));
        N2(
          (a4) => a4.map(
            (a5) => a5.id === e3 ? { ...a5, status: "connected", error: void 0, tools: i2 } : a5
          )
        ), ev(e3), e_(
          `${a3.name} connected. ${i2.filter((e4) => e4.enabled).length} tools on.`
        );
      }).catch((t3) => {
        let s2 = t3 instanceof Error && t3.message ? t3.message : "The server did not answer.";
        N2(
          (a4) => a4.map(
            (a5) => a5.id === e3 ? { ...a5, status: "error", error: s2 } : a5
          )
        ), e_(`${a3.name} is still not answering. ${s2}`);
      }).finally(() => {
        P2((a4) => {
          let t3 = { ...a4 };
          return delete t3[e3], t3;
        });
      }));
    }, eT = (e3, a3) => {
      eo2.current = a3, F2(null), Q2(e3), requestAnimationFrame(() => {
        let e4 = er2.current;
        e4 && e4.getBoundingClientRect().bottom > window.innerHeight && e4.scrollIntoView({
          block: "end",
          behavior: y2 ? "auto" : "smooth"
        });
      });
    }, eC = () => {
      Q2(null), eg(eo2.current);
    }, ez = (e3, a3) => {
      let t3 = [...er2.current?.querySelectorAll("[data-head]") ?? []], s2 = t3.findIndex((e4) => e4.dataset.head === a3), r2 = "ArrowDown" === e3.key ? t3[s2 + 1] : "ArrowUp" === e3.key ? t3[s2 - 1] : "Home" === e3.key ? t3[0] : "End" === e3.key ? t3[t3.length - 1] : void 0;
      r2 && (e3.preventDefault(), r2.focus());
    };
    return (0, s.jsxs)(i.PY1.section, {
      ref: er2,
      className: U(W().root, f2),
      "aria-labelledby": w2,
      onKeyDown: (e3) => {
        !H2 || J2 || !(e3.metaKey || e3.ctrlKey) || "z" !== e3.key.toLowerCase() || e3.shiftKey || e3.target.closest("input, textarea, [contenteditable='true']") || (e3.preventDefault(), ek());
      },
      initial: false,
      animate: { minHeight: 600 * !!J2 },
      transition: y2 ? { duration: 0 } : O,
      children: [
        (0, s.jsxs)("div", {
          className: W().main,
          inert: !!J2,
          children: [
            (0, s.jsxs)("header", {
              className: W().header,
              children: [
                (0, s.jsxs)("div", {
                  className: W().titleRow,
                  children: [
                    (0, s.jsxs)("h2", {
                      id: w2,
                      className: W().title,
                      children: [
                        (0, s.jsx)(D, {
                          className: W().titleMark,
                          "aria-hidden": true
                        }),
                        u2
                      ]
                    }),
                    (0, s.jsxs)(d.$, {
                      ref: ei2,
                      variant: "secondary",
                      size: "sm",
                      className: W().addButton,
                      onClick: () => eT({ kind: "add" }, null),
                      "aria-haspopup": "dialog",
                      children: [
                        (0, s.jsx)(l.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Add server"
                      ]
                    })
                  ]
                }),
                (0, s.jsx)(en, { servers: k2, budget: t2, hotId: B2, reduced: y2 })
              ]
            }),
            (0, s.jsx)("ul", {
              className: W().list,
              "aria-label": "Connected servers",
              children: (0, s.jsx)(o.N, {
                initial: false,
                children: k2.map(
                  (e3) => (0, s.jsx)(
                    i.PY1.li,
                    {
                      className: W().item,
                      initial: y2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: y2 ? { opacity: 0, transition: { duration: 0 } } : {
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: O,
                          opacity: { duration: 0.14 }
                        }
                      },
                      transition: y2 ? { duration: 0 } : { height: O, opacity: { ...Y, delay: 0.04 } },
                      children: (0, s.jsx)(ed, {
                        server: e3,
                        open: R2 === e3.id,
                        fresh: X2 === e3.id,
                        working: V2[e3.id] ?? null,
                        reduced: y2,
                        onToggleOpen: (e4) => L2((a3) => a3 === e4 ? null : e4),
                        onToggleTool: eb,
                        onPermission: ey,
                        onSignIn: (e4) => {
                          let a3 = k2.find((a4) => a4.id === e4);
                          a3 && eT({ kind: "reconnect", server: a3 }, e4);
                        },
                        onRetry: eN,
                        onRemove: ew,
                        onHot: F2,
                        onHeadKey: ez
                      })
                    },
                    e3.id
                  )
                )
              })
            }),
            (0, s.jsx)(o.N, {
              initial: false,
              children: 0 === k2.length ? (0, s.jsxs)(
                i.PY1.div,
                {
                  className: W().empty,
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: y2 ? { duration: 0 } : { ...Y, delay: 0.18 }
                  },
                  exit: {
                    opacity: 0,
                    transition: y2 ? { duration: 0 } : q
                  },
                  children: [
                    (0, s.jsx)(D, {
                      className: W().emptyMark,
                      "aria-hidden": true
                    }),
                    (0, s.jsx)("p", {
                      className: W().emptyTitle,
                      children: "No servers connected"
                    }),
                    (0, s.jsx)("p", {
                      className: W().emptyText,
                      children: "Connect a server to give the agent tools. Each tool you turn on adds its definition to the context."
                    }),
                    (0, s.jsxs)(d.$, {
                      variant: "secondary",
                      size: "sm",
                      onClick: () => eT({ kind: "add" }, null),
                      "aria-haspopup": "dialog",
                      children: [
                        (0, s.jsx)(l.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Add server"
                      ]
                    })
                  ]
                },
                "empty"
              ) : null
            }),
            (0, s.jsx)(o.N, {
              initial: false,
              children: H2 ? (0, s.jsx)(
                i.PY1.div,
                {
                  className: W().undoClip,
                  initial: y2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: y2 ? { opacity: 0, transition: { duration: 0 } } : {
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: O,
                      opacity: { duration: 0.12 }
                    }
                  },
                  transition: y2 ? { duration: 0 } : { height: O, opacity: Y },
                  children: (0, s.jsxs)("div", {
                    className: W().undo,
                    onPointerEnter: () => Z2(true),
                    onPointerLeave: () => Z2(false),
                    onFocus: () => Z2(true),
                    onBlur: () => Z2(false),
                    children: [
                      (0, s.jsx)(G, {
                        brand: H2.server.brand,
                        className: W().undoMark
                      }),
                      (0, s.jsxs)("p", {
                        className: W().undoText,
                        children: ["Removed ", H2.server.name]
                      }),
                      (0, s.jsxs)(
                        d.$,
                        {
                          variant: "ghost",
                          size: "sm",
                          className: W().undoButton,
                          onClick: ek,
                          children: [
                            (0, s.jsx)(c.A, {
                              size: 15,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            "Undo"
                          ]
                        },
                        H2.key
                      )
                    ]
                  })
                },
                "undo"
              ) : null
            })
          ]
        }),
        (0, s.jsx)(o.N, {
          children: J2 ? (0, s.jsxs)(
            i.PY1.div,
            {
              className: W().layer,
              initial: { opacity: 1 },
              exit: {
                opacity: 1,
                transition: { duration: y2 ? 0.12 : 0.28 }
              },
              children: [
                (0, s.jsx)(i.PY1.div, {
                  className: W().scrim,
                  "aria-hidden": "true",
                  onClick: eC,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.2 * !y2, ease: [...Y.ease] }
                }),
                (0, s.jsx)(
                  es,
                  {
                    mode: J2,
                    directory: a2,
                    connectedIds: k2.map((e3) => e3.id),
                    clientName: m2,
                    clientMark: p2,
                    account: h2,
                    reduced: y2,
                    connect: ex,
                    onClose: eC,
                    onDone: (e3, a3) => {
                      Q2(null);
                      let t3 = e3.tools.filter((e4) => e4.enabled).length;
                      if ("reconnect" === a3) {
                        N2(
                          (a4) => a4.map(
                            (a5) => a5.id === e3.id ? {
                              ...a5,
                              status: "connected",
                              error: void 0,
                              tools: e3.tools
                            } : a5
                          )
                        ), ev(e3.id), e_(
                          `${e3.name} signed in. ${t3} of ${e3.tools.length} tools on.`
                        ), eg(e3.id);
                        return;
                      }
                      e_(
                        `${e3.name} added with ${t3} of ${e3.tools.length} tools on.${g2 ? "" : " Simulated, nothing was connected."}`
                      ), eh2(() => {
                        N2((a4) => [e3, ...a4.filter((a5) => a5.id !== e3.id)]), ev(e3.id), eg(e3.id);
                      }, 180 * !y2);
                    },
                    announce: e_
                  },
                  "reconnect" === J2.kind ? `reconnect-${J2.server.id}` : "add"
                )
              ]
            },
            "layer"
          ) : null
        }),
        (0, s.jsx)("p", {
          className: W().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ea2
        })
      ]
    });
  }
  let eh = ep;
};

__m(__module,__exports,__require);
});
A.regCss(94848, ".root{--mono:ui-monospace,\"SF Mono\",Menlo,monospace;--hover:color-mix(in oklab,var(--foreground) 3%,var(--surface));--pad:20px;--mark:20px;--indent:calc(var(--pad) + var(--mark) + 12px);--scrim:color-mix(in oklab,var(--foreground) 14%,transparent);position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:720px;min-width:0;margin-inline:auto;overflow:clip;border:1px solid var(--border);border-radius:24px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);container:mcp/inline-size}\n:root[data-theme=dark] .root{--scrim:color-mix(in oklab,var(--background) 62%,transparent)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.root .counter>span{font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;color:inherit}\n.root [data-brand=linear]{color:#5e6ad2}\n.root [data-brand=stripe]{color:#635bff}\n.root [data-brand=postgresql]{color:#4169e1}\n.root [data-brand=figma]{color:#f24e1e}\n.root [data-brand=supabase]{color:#3ecf8e}\n.root [data-brand=cloudflare]{color:#f38020}\n.root [data-brand=googledrive]{color:#4285f4}\n.root [data-brand=atlassian]{color:#0052cc}\n.root [data-brand=datadog]{color:#632ca6}\n.root [data-brand=hubspot]{color:#ff7a59}\n.root [data-brand=asana]{color:#f06a6a}\n.root [data-brand=airtable]{color:#18bfff}\n.root [data-brand=docker]{color:#2496ed}\n.root [data-brand=gmail]{color:#ea4335}\n.root [data-brand=googlecalendar]{color:#4285f4}\n:root[data-theme=dark] .root [data-brand=linear]{color:#8f98e6}\n:root[data-theme=dark] .root [data-brand=stripe]{color:#8f89ff}\n:root[data-theme=dark] .root [data-brand=postgresql]{color:#7d9cf0}\n:root[data-theme=dark] .root [data-brand=atlassian]{color:#5b8def}\n:root[data-theme=dark] .root [data-brand=datadog]{color:#a682d8}\n.root .addButton{flex:none;gap:6px;padding-inline:12px 14px}\n.root .rowAction{gap:6px;min-height:32px;padding-inline:12px}\n.root .toolSwitch{min-height:40px}\n.root .segmented button{min-height:30px;padding-inline:11px;font-size:var(--text-xs)}\n.root .remove{flex:none;gap:6px;margin-right:-10px;padding-inline:10px;color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.root .remove:hover{color:var(--danger)}\n.root .undoMark{width:16px;height:16px}\n.root .undoButton{flex:none;gap:6px;color:var(--foreground)}\n.root .iconButton{width:36px;min-width:36px;padding:0;color:var(--text-secondary)}\n.root .accentButton{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}\n.root .handshakeMark{width:30px;height:30px}\n.root .accountAvatar{width:24px;height:24px}\n.root .discoverMark{width:24px;height:24px;margin-top:1px}\n@container mcp (max-width: 520px){.root{--pad:16px}\n.root .rowAction svg{display:none}\n.root .rowAction{padding-inline:11px}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.main{display:flex;flex:1;flex-direction:column;min-width:0}\n.swap{position:relative;display:inline-grid}\n.swapItem{display:inline-flex;grid-area:1/1;align-items:center;white-space:nowrap}\n.metaSlot>.swapItem{justify-content:flex-end}\n.sheetTitle .swapItem{overflow:hidden;text-overflow:ellipsis}\n.counter{display:inline-flex}\n.mark{flex:none;width:var(--mark);height:var(--mark);color:var(--foreground)}\n.header{padding:18px var(--pad) 18px;border-bottom:1px solid var(--border-subtle)}\n.titleRow{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0}\n.title{display:flex;align-items:center;gap:10px;min-width:0;margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.title{font-size:var(--text-sm)}\n.titleMark{flex:none;width:18px;height:18px}\n.meter{display:grid;gap:10px;margin-top:16px}\n.meterLine{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:4px 16px;min-width:0}\n.meterText{display:inline-flex;flex-wrap:wrap;align-items:baseline;gap:0 .3em;margin:0;color:var(--text-secondary);font-variant-numeric:tabular-nums}\n.meterValue{color:var(--foreground);font-weight:500}\n.meterDot{padding-inline:.1em;color:var(--text-muted)}\n.budgetSlot{justify-items:end}\n.budget{display:inline-flex;align-items:center;gap:6px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.budget[data-over]{color:var(--foreground)}\n.budget[data-over]>svg{color:var(--warning)}\n.track{position:relative;display:flex;height:8px;overflow:hidden;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 6%,var(--surface))}\n.track[data-focus] .segment:not([data-hot]) .segmentFill{opacity:.55}\n.segment{position:relative;flex:none;height:100%;min-width:0}\n.segment[data-hot] .segmentFill{background:var(--series-1)}\n.segmentFill{position:absolute;inset:0 2px 0 0;border-radius:1.5px;background:color-mix(in oklab,var(--foreground) 44%,var(--surface));transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.chevron,.entry,.headButton,.row,.segmentFill,.toolName{transition:none}\n.overflow{position:absolute;top:0;right:0;bottom:0;border-left:2px solid var(--surface);background:var(--warning);pointer-events:none}\n.list{display:grid;margin:0;padding:0;list-style:none}\n.item{overflow:hidden}\n.item+.item>.row{border-top:1px solid var(--border-subtle)}\n.row{position:relative;transition:background-color var(--duration-standard) var(--ease-standard)}\n.row[data-fresh]{animation:fresh 1.6s var(--ease-standard) both}\n.row[data-open] .chevron{color:var(--foreground);transform:rotate(180deg)}\n.head{position:relative}\n.headButton{--focus-outline-offset:-3px;display:grid;grid-template-columns:var(--mark) minmax(0,1fr) auto 16px;align-items:center;gap:12px;width:100%;min-height:64px;margin:0;padding:11px var(--pad);border:0;border-radius:14px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.headButton:hover{background:var(--hover)}\n.headText{display:grid;gap:2px;min-width:0}\n.name{overflow:hidden;color:var(--foreground);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.sub{display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}\n.subDot{flex:none}\n.transport{overflow:hidden;text-overflow:ellipsis}\n.status{display:inline-flex;align-items:center;gap:5px;color:var(--text-secondary)}\n.status>svg{flex:none}\n.status[data-status=connected]>svg{color:var(--success)}\n.status[data-status=needs-auth]>svg{color:var(--warning)}\n.status[data-status=error]>svg{color:var(--danger)}\n.metaSlot{justify-items:end}\n.meta{display:inline-flex;align-items:baseline;gap:16px;font-variant-numeric:tabular-nums}\n.meta{gap:12px}\n.toolCount{display:inline-flex;align-items:baseline;gap:.3em;color:var(--text-muted)}\n@container mcp (max-width: 400px){.toolCount{display:none}\n.wideOnly{display:inline;margin-left:-.3em}\n.wideOnly{display:none}\n.tokens{display:inline-flex;justify-content:flex-end;min-width:38px;color:var(--foreground);font-weight:500}\n.actionSpacer{display:block;width:92px;height:1px}\n.actionSpacer[data-action=error]{width:62px}\n.actionSpacer{width:70px}\n.actionSpacer[data-action=error]{width:58px}\n.chevron{color:var(--text-muted);transition:transform var(--duration-standard) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.headAction{position:absolute;top:0;right:calc(var(--pad) + 16px + 12px);bottom:0;display:flex;align-items:center}\n.panelClip{overflow:hidden}\n.panel{display:grid;gap:0;padding:0 var(--pad) 14px var(--indent)}\n.panel{padding-left:var(--pad)}\n.tools{display:grid;margin:0;padding:0;list-style:none}\n.tool{display:grid;grid-template-columns:minmax(0,1fr) 58px 40px auto;align-items:center;gap:12px;min-height:44px;border-top:1px solid var(--border-subtle)}\n.tool[data-off] .toolName{color:var(--text-muted)}\n.tool{grid-template-columns:minmax(0,1fr) auto 36px auto;gap:10px}\n.toolName{overflow:hidden;color:var(--foreground);font-family:var(--mono);font-size:.8125rem;letter-spacing:0;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.access{display:inline-flex;align-items:center;gap:5px;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}\n.access>svg{flex:none}\n.access[data-access=write]{color:var(--text-secondary)}\n.access[data-access=write]>svg{color:var(--warning)}\n.toolTokens{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-align:right}\n.notice{display:flex;align-items:flex-start;gap:10px;margin:0;padding:12px 0 14px;border-top:1px solid var(--border-subtle);color:var(--text-secondary)}\n.notice>svg{flex:none;margin-top:2px}\n.notice[data-tone=auth]>svg{color:var(--warning)}\n.notice[data-tone=error]>svg{color:var(--danger)}\n.noticeTitle{color:var(--foreground);font-weight:500}\n.setting{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 16px;padding-top:12px;border-top:1px solid var(--border-subtle)}\n.settingLabel{color:var(--text-secondary)}\n.panelFoot{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0;padding-top:10px}\n.endpoint{min-width:0;overflow:hidden;color:var(--text-muted);font-family:var(--mono);font-size:.75rem;letter-spacing:0;text-overflow:ellipsis;white-space:nowrap}\n.empty{display:grid;justify-items:center;gap:6px;padding:44px 24px 48px;text-align:center}\n.emptyMark{width:28px;height:28px;margin-bottom:6px;color:var(--text-muted)}\n.emptyTitle{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500}\n.emptyText{max-width:340px;margin:0 0 10px;color:var(--text-secondary)}\n.undoClip{overflow:hidden;margin-top:auto}\n.undo{display:flex;align-items:center;gap:10px;min-height:52px;padding:8px 12px 8px var(--pad);border-top:1px solid var(--border-subtle);background:color-mix(in oklab,var(--foreground) 2.5%,var(--surface))}\n.undoText{flex:1;min-width:0;margin:0;overflow:hidden;color:var(--text-secondary);text-overflow:ellipsis;white-space:nowrap}\n.layer{position:absolute;inset:0;z-index:10;overflow:hidden;border-radius:inherit}\n.scrim{position:absolute;inset:0;background:var(--scrim)}\n.sheet{position:absolute;inset:auto 0 0;display:flex;height:calc(100% - 40px);max-height:640px;flex-direction:column;overflow:hidden;border-top:1px solid var(--border);border-radius:20px 20px 0 0;background:var(--surface-raised);box-shadow:var(--shadow-floating)}\n.sheet{height:calc(100% - 20px)}\n.sheetHead{display:grid;grid-template-columns:36px minmax(0,1fr) 36px;align-items:center;gap:8px;min-height:56px;padding:10px 12px;border-bottom:1px solid var(--border-subtle)}\n.sheetSide{display:flex;width:36px}\n.sheetSide[data-end]{justify-content:flex-end}\n.sheetSideItem{display:flex}\n.sheetTitle{display:flex;justify-content:center;min-width:0;margin:0;overflow:hidden;color:var(--foreground);font-size:var(--text-base);font-weight:500}\n.sheetBody{position:relative;flex:1;min-height:0}\n.step{position:absolute;inset:0;display:flex;flex-direction:column;min-height:0}\n.stepScroll{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:14px 16px 16px}\n.stepFoot,.stepScroll,.urlForm{padding-inline:12px}\n.stepFoot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 12px;padding:12px 16px;border-top:1px solid var(--border-subtle)}\n.footNote{display:inline-flex;align-items:baseline;margin:0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.footValue{color:var(--foreground);font-weight:500}\n.footActions{display:flex;gap:8px;margin-left:auto}\n.searchWrap label{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.directory{display:grid;gap:2px;margin:10px -6px 0;padding:0;list-style:none}\n.entry{--focus-outline-offset:-2px;display:grid;grid-template-columns:var(--mark) minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;min-height:56px;margin:0;padding:8px 10px;border:0;border-radius:14px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.entry:hover:not(:disabled){background:color-mix(in oklab,var(--foreground) 4%,var(--surface-raised))}\n.entry:active:not(:disabled){background:color-mix(in oklab,var(--foreground) 6%,var(--surface-raised))}\n.entry:disabled{cursor:default}\n.entry:disabled .entryMark,.entry:disabled .entryText{opacity:.5}\n.entry:disabled .entryMeta{color:var(--text-secondary)}\n.entry:disabled .entryMeta>svg{color:var(--success)}\n.entryText{display:grid;gap:1px;min-width:0}\n.entryName{color:var(--foreground);font-weight:500}\n.entryDesc{overflow:hidden;text-overflow:ellipsis}\n.entryDesc,.entryMeta{color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}\n.entryMeta{display:inline-flex;align-items:center;gap:4px}\n.noResults{display:grid;gap:4px;padding:28px 8px;color:var(--text-secondary);text-align:center}\n.noResults p{margin:0}\n.noResultsTitle{color:var(--foreground);font-weight:500;overflow-wrap:anywhere}\n.urlForm{padding:12px 16px 14px;border-top:1px solid var(--border-subtle)}\n.urlTitle{margin:0 0 8px;color:var(--text-secondary)}\n.urlRow{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:start;gap:8px}\n.urlRow label{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.auth{display:grid;justify-items:center;gap:14px;width:100%;max-width:400px;margin:0 auto;padding:4px 0;text-align:center}\n.simTag{display:inline-flex;align-items:center;gap:6px;margin:0;padding:3px 10px;border:1px dashed var(--border-strong);border-radius:var(--radius-pill);color:var(--text-secondary);font-size:var(--text-xs)}\n.handshake{display:flex;align-items:center;gap:10px;margin-top:4px}\n.handshakeClient{display:grid;flex:none;place-items:center;width:30px;height:30px;color:var(--foreground)}\n.handshakeClient svg{display:block;width:28px;height:28px}\n.handshakeLine{display:flex;align-items:center;gap:6px;width:84px;color:var(--text-muted)}\n.handshakeLine:after,.handshakeLine:before{content:\"\";flex:1;border-top:1px dashed var(--border-strong)}\n.authTitle{max-width:320px;margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500;text-wrap:balance}\n.account{display:inline-flex;align-items:center;gap:8px;max-width:100%;min-width:0;padding:4px 12px 4px 4px;border:1px solid var(--border);border-radius:var(--radius-pill)}\n.accountName{flex:none;color:var(--foreground);font-weight:500}\n.accountEmail{min-width:0;overflow:hidden;color:var(--text-muted);text-overflow:ellipsis;white-space:nowrap}\n.scopes{width:100%;padding-top:14px;border-top:1px solid var(--border-subtle);text-align:left}\n.scopes ul{display:grid;gap:8px;margin:0;padding:0;list-style:none}\n.scopes li{display:flex;align-items:flex-start;gap:8px;color:var(--text-secondary)}\n.scopes li>svg{flex:none;margin-top:2px;color:var(--success)}\n.scopesTitle{margin:0 0 8px;color:var(--text-muted);font-size:var(--text-xs)}\n.discoverHead{display:flex;align-items:flex-start;gap:12px;min-width:0}\n.discoverText{display:grid;gap:2px;min-width:0}\n.discoverTitle{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.discoverTitle:focus{outline:none}\n.discoverSub{margin:0;overflow:hidden;color:var(--text-muted);font-family:var(--mono);font-size:.75rem;letter-spacing:0;text-overflow:ellipsis;white-space:nowrap}\n.phaseDone,.phaseError{display:inline-flex;align-items:center;gap:6px}\n.phaseDone>svg{color:var(--success)}\n.phaseError>svg{color:var(--danger)}\n.found{display:grid;margin:14px 0 0;padding:0;list-style:none}\n.foundPending{display:flex;align-items:center;gap:12px;min-height:44px;border-top:1px solid var(--border-subtle);animation:pending 1.2s var(--ease-in-out) infinite alternate}\n.foundPending>span{display:block;background:color-mix(in oklab,var(--foreground) 7%,var(--surface-raised))}\n.foundPending>span:first-child{width:min(160px,38%);height:10px;border-radius:5px}\n.foundPending>span:last-child{width:42px;height:24px;margin-left:auto;border-radius:var(--radius-pill)}\n.foundPending{animation:none}\n.discoverError{display:grid;justify-items:start;gap:10px;margin-top:14px;padding-top:14px;border-top:1px solid var(--border-subtle)}\n.discoverError p{margin:0;color:var(--text-secondary)}\n.accessText{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","counter":"counter","addButton":"addButton","rowAction":"rowAction","toolSwitch":"toolSwitch","segmented":"segmented","remove":"remove","undoMark":"undoMark","undoButton":"undoButton","iconButton":"iconButton","accentButton":"accentButton","handshakeMark":"handshakeMark","accountAvatar":"accountAvatar","discoverMark":"discoverMark","srOnly":"srOnly","main":"main","swap":"swap","swapItem":"swapItem","metaSlot":"metaSlot","sheetTitle":"sheetTitle","mark":"mark","header":"header","titleRow":"titleRow","title":"title","titleMark":"titleMark","meter":"meter","meterLine":"meterLine","meterText":"meterText","meterValue":"meterValue","meterDot":"meterDot","budgetSlot":"budgetSlot","budget":"budget","track":"track","segment":"segment","segmentFill":"segmentFill","chevron":"chevron","entry":"entry","headButton":"headButton","row":"row","toolName":"toolName","overflow":"overflow","list":"list","item":"item","head":"head","headText":"headText","name":"name","sub":"sub","subDot":"subDot","transport":"transport","status":"status","meta":"meta","toolCount":"toolCount","wideOnly":"wideOnly","tokens":"tokens","actionSpacer":"actionSpacer","headAction":"headAction","panelClip":"panelClip","panel":"panel","tools":"tools","tool":"tool","access":"access","toolTokens":"toolTokens","notice":"notice","noticeTitle":"noticeTitle","setting":"setting","settingLabel":"settingLabel","panelFoot":"panelFoot","endpoint":"endpoint","empty":"empty","emptyMark":"emptyMark","emptyTitle":"emptyTitle","emptyText":"emptyText","undoClip":"undoClip","undo":"undo","undoText":"undoText","layer":"layer","scrim":"scrim","sheet":"sheet","sheetHead":"sheetHead","sheetSide":"sheetSide","sheetSideItem":"sheetSideItem","sheetBody":"sheetBody","step":"step","stepScroll":"stepScroll","stepFoot":"stepFoot","urlForm":"urlForm","footNote":"footNote","footValue":"footValue","footActions":"footActions","searchWrap":"searchWrap","directory":"directory","entryMark":"entryMark","entryText":"entryText","entryMeta":"entryMeta","entryName":"entryName","entryDesc":"entryDesc","noResults":"noResults","noResultsTitle":"noResultsTitle","urlTitle":"urlTitle","urlRow":"urlRow","auth":"auth","simTag":"simTag","handshake":"handshake","handshakeClient":"handshakeClient","handshakeLine":"handshakeLine","authTitle":"authTitle","account":"account","accountName":"accountName","accountEmail":"accountEmail","scopes":"scopes","scopesTitle":"scopesTitle","discoverHead":"discoverHead","discoverText":"discoverText","discoverTitle":"discoverTitle","discoverSub":"discoverSub","phaseDone":"phaseDone","phaseError":"phaseError","found":"found","foundPending":"foundPending","discoverError":"discoverError","accessText":"accessText"});
A.cssFor("mcp-servers", [14290,79698,94848]);
A.item("mcp-servers", {entry:94637, export:"McpServers", kind:"block", tier:"pro", unresolved:[]});
})();