/* data-grid (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(1883, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { q: () => s });
  let s = (e2, t2, i2) => Math.min(i2, Math.max(t2, e2));
}

__m(__module,__exports,__require);
});
A.reg(2410, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => r });
  var a = o(51811);
  let n = {
    name: "rows-3",
    size: 24,
    node: [
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }
      ],
      ["path", { d: "M21 9H3", key: "1338ky" }],
      ["path", { d: "M21 15H3", key: "9uk58r" }]
    ],
    aliases: ["panels-top-bottom"]
  };
  n.node;
  let r = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(12767, ".stage{display:grid;gap:var(--space-3);box-sizing:border-box;width:min(100%,940px);min-width:0;margin-inline:auto}\n.header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-2) var(--space-4);padding-inline:var(--space-1)}\n.titles{display:grid;gap:2px;min-width:0}\n.title{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.hint{margin:0;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.reset{display:inline-flex;flex:none;align-items:center;gap:6px;min-height:var(--control-height-sm);padding:0 14px;border:0;border-radius:var(--radius-control);background:transparent;box-shadow:inset 0 0 0 1px var(--border);color:var(--text-secondary);font:inherit;font-size:var(--text-sm);font-weight:500;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.reset:active:not(:disabled){transform:scale(.97)}\n.reset:disabled{opacity:.45;cursor:default}\n@media (hover:hover) and (pointer:fine){.reset:not(:disabled):hover{background:var(--surface-muted);color:var(--foreground)}", {"stage":"stage","header":"header","titles":"titles","title":"title","hint":"hint","reset":"reset"});
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
A.reg(22871, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => r });
  var a = o(51811);
  let n = {
    name: "ungroup",
    size: 24,
    node: [
      [
        "rect",
        { x: "11", y: "14", width: "10", height: "7", rx: "2", key: "nfm8rk" }
      ],
      [
        "rect",
        { x: "3", y: "3", width: "10", height: "7", rx: "2", key: "1ljebb" }
      ]
    ]
  };
  n.node;
  let r = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(27076, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "pin-off",
    size: 24,
    node: [
      ["path", { d: "M12 17v5", key: "bb1du9" }],
      [
        "path",
        { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89", key: "znwnzq" }
      ],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      [
        "path",
        {
          d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",
          key: "c9qhm2"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(29311, function(__module,__exports,__require){
"use strict";
const __m = (e, t, r) => {
  "use strict";
  let a, l, n;
  r.r(t), r.d(t, { DataGridDemo: () => ti, default: () => to });
  var i = r(95155), o = r(12115), s = r(92298), d = r(18310), c = r(28245), u = r(92171), h = r(55809), m = r(25354), p = r(80642), f = r(40093), g = r(76721), y = r(9005), x = r(99314), v = r(25879), b = r(65377), w = r(15330), k = r(60976), _ = r(73534), j = r(65342), C = r(53896), $ = r(38158), N = r(89434), S = r(65024), M = r(65332), A = r(7770), L = r(55665), D = r(1883);
  let E = (e10) => "number" === e10.type || "currency" === e10.type || "percent" === e10.type, T = (e10) => "date" === e10.type, R = (e10) => E(e10) || T(e10) ? null : "";
  function I(e10) {
    let t2 = e10 + 1, r2 = "";
    for (; t2 > 0; )
      r2 = String.fromCharCode(65 + (t2 - 1) % 26) + r2, t2 = Math.floor((t2 - 1) / 26);
    return r2;
  }
  let U = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
  ], F = { month: "short", day: "numeric", year: "numeric" }, P = /* @__PURE__ */ new Map();
  function z(e10, t2, r2) {
    return !Number.isInteger(e10) || !Number.isInteger(t2) || !Number.isInteger(r2) || e10 < 1 || e10 > 9999 || t2 < 1 || t2 > 12 || r2 < 1 || r2 > new Date(Date.UTC(e10, t2, 0)).getUTCDate() ? null : `${String(e10).padStart(4, "0")}-${String(t2).padStart(2, "0")}-${String(r2).padStart(2, "0")}`;
  }
  let q = (e10) => "string" == typeof e10 && /^\d{4}-\d{2}-\d{2}$/.test(e10) && z(+e10.slice(0, 4), +e10.slice(5, 7), +e10.slice(8, 10)) === e10;
  function W(e10) {
    let t2 = e10.trim().toLowerCase().replace(/,/g, " ").replace(/\s+/g, " "), r2 = t2.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);
    if (r2) return z(+r2[1], +r2[2], +r2[3]);
    let a2 = (e11) => {
      let t3 = U.indexOf(e11.slice(0, 3));
      return t3 >= 0 && (3 === e11.length || e11.startsWith(U[t3])) ? t3 + 1 : 0;
    };
    return (r2 = t2.match(/^([a-z]+)\.? (\d{1,2}) (\d{4})$/)) ? z(+r2[3], a2(r2[1]), +r2[2]) : (r2 = t2.match(/^(\d{1,2}) ([a-z]+)\.? (\d{4})$/)) ? z(+r2[3], a2(r2[2]), +r2[1]) : null;
  }
  let O = (e10) => Date.UTC(+e10.slice(0, 4), e10.slice(5, 7) - 1, +e10.slice(8, 10)) / 864e5, B = (e10) => new Date(864e5 * e10).toISOString().slice(0, 10), H = (e10) => 12 * e10.slice(0, 4) + +e10.slice(5, 7) - 1, V = (e10, t2) => {
    let r2 = Math.floor(e10 / 12), a2 = e10 - 12 * r2 + 1;
    return z(r2, a2, Math.min(t2, new Date(Date.UTC(r2, a2, 0)).getUTCDate()));
  };
  function K(e10, t2) {
    if (null == e10 || "" === e10) return "";
    if ("string" == typeof e10 && T(t2))
      return (function(e11, t3 = F) {
        if (!q(e11)) return e11;
        let r3 = JSON.stringify(t3), a3 = P.get(r3);
        return a3 || (a3 = new Intl.DateTimeFormat("en-US", { ...t3, timeZone: "UTC" }), P.set(r3, a3)), a3.format(new Date(864e5 * O(e11)));
      })(e10, t2.dateFormat);
    if ("number" != typeof e10) return e10;
    let r2 = t2.decimals ?? 0, a2 = Math.abs(e10).toLocaleString("en-US", {
      minimumFractionDigits: r2,
      maximumFractionDigits: r2
    }), l2 = e10 < 0 ? "\u2212" : "";
    return "currency" === t2.type ? `${l2}$${a2}` : "percent" === t2.type ? `${l2}${a2}%` : `${l2}${a2}`;
  }
  let G = (e10) => e10.trim().replace(/[$,%\s]/g, "").replace(/−/g, "-").replace(/^\((.*)\)$/, "-$1");
  function Y(e10, t2, r2) {
    let a2 = e10.trim();
    if (T(t2)) {
      if ("" === a2) return { ok: true, value: null };
      let e11 = W(a2);
      return e11 ? { ok: true, value: e11 } : { ok: false };
    }
    if ("select" === t2.type) {
      if ("" === a2) return { ok: true, value: "" };
      let e11 = r2?.find((e12) => e12.toLowerCase() === a2.toLowerCase());
      return void 0 !== e11 ? { ok: true, value: e11 } : r2?.length ? { ok: false } : { ok: true, value: a2 };
    }
    if (!E(t2)) return { ok: true, value: a2 };
    let l2 = G(a2);
    if ("" === l2) return { ok: true, value: null };
    let n2 = Number(l2);
    return Number.isFinite(n2) ? { ok: true, value: n2 } : { ok: false };
  }
  function X(e10, t2, r2, a2) {
    if ("date" === a2 && e10.length > 1 && e10.every(q)) {
      let a3 = e10.every((e11) => "01" === B(O(e11) + 1).slice(8)), l3 = a3 || e10.every((t3) => t3.slice(8) === e10[0].slice(8)), n3 = l3 ? H(e10[1]) - H(e10[0]) : O(e10[1]) - O(e10[0]), i3 = (e11) => l3 ? H(e11) : O(e11);
      if (n3 && e10.every((t3, r3) => 0 === r3 || i3(t3) - i3(e10[r3 - 1]) === n3)) {
        let o2 = r2 ? e10[e10.length - 1] : e10[0], s2 = a3 ? 31 : +o2.slice(8);
        return Array.from({ length: t2 }, (e11, t3) => {
          let a4 = i3(o2) + (r2 ? 1 : -1) * n3 * (t3 + 1);
          return l3 ? V(a4, s2) : a4 >= O("0001-01-01") && a4 <= O("9999-12-31") ? B(a4) : null;
        });
      }
    }
    let l2 = e10.every((e11) => "number" == typeof e11) ? e10 : null, n2 = l2 && l2.length > 1 ? l2[1] - l2[0] : null, i2 = l2 && null !== n2 && l2.every((e11, t3) => 0 === t3 || 1e-9 > Math.abs(e11 - l2[t3 - 1] - n2));
    return Array.from(
      { length: t2 },
      (t3, a3) => i2 && l2 && null !== n2 ? Math.round(
        1e6 * (r2 ? l2[l2.length - 1] + n2 * (a3 + 1) : l2[0] - n2 * (a3 + 1))
      ) / 1e6 : r2 ? e10[a3 % e10.length] : e10[e10.length - 1 - a3 % e10.length]
    );
  }
  let Z = (e10) => e10.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  function J(e10) {
    let t2 = G(e10);
    if (!t2) return null;
    let r2 = "(-?\\d*\\.?\\d+)", a2 = t2.match(RegExp(`^${r2}(?:\\.\\.|to|\u2013|\u2014)${r2}$`));
    if (a2) {
      let [e11, t3] = [Number(a2[1]), Number(a2[2])].sort((e12, t4) => e12 - t4);
      return (r3) => r3 >= e11 && r3 <= t3;
    }
    let l2 = t2.match(RegExp(`^(>=|<=|!=|<>|>|<|=)?${r2}$`));
    if (!l2) return "invalid";
    let n2 = Number(l2[2]);
    switch (l2[1]) {
      case ">":
        return (e11) => e11 > n2;
      case ">=":
        return (e11) => e11 >= n2;
      case "<":
        return (e11) => e11 < n2;
      case "<=":
        return (e11) => e11 <= n2;
      case "!=":
      case "<>":
        return (e11) => e11 !== n2;
      default:
        return (e11) => e11 === n2;
    }
  }
  function Q(e10) {
    let t2 = e10.trim();
    if (!t2) return null;
    let r2 = (e11) => {
      let t3 = e11.trim();
      if (/^\d{4}$/.test(t3)) return [`${t3}-01-01`, `${t3}-12-31`];
      let r3 = t3.match(/^(\d{4})[-/](\d{1,2})$/);
      if (r3) {
        let e12 = z(+r3[1], +r3[2], 1);
        return e12 ? [e12, B(O(V(H(e12) + 1, 1)) - 1)] : null;
      }
      let a3 = W(t3);
      return a3 ? [a3, a3] : null;
    }, a2 = t2.split(/\s*(?:\.\.|–|—)\s*|\s+to\s+/i);
    if (2 === a2.length) {
      let e11 = r2(a2[0]), t3 = r2(a2[1]);
      if (!e11 || !t3) return "invalid";
      let [l3, n3] = e11[0] <= t3[0] ? [e11[0], t3[1]] : [t3[0], e11[1]];
      return (e12) => e12 >= l3 && e12 <= n3;
    }
    let l2 = t2.match(/^(>=|<=|!=|<>|>|<|=)?\s*(.+)$/), n2 = l2 ? r2(l2[2]) : null;
    if (!l2 || !n2) return "invalid";
    let [i2, o2] = n2;
    switch (l2[1]) {
      case ">":
        return (e11) => e11 > o2;
      case ">=":
        return (e11) => e11 >= i2;
      case "<":
        return (e11) => e11 < i2;
      case "<=":
        return (e11) => e11 <= o2;
      case "!=":
      case "<>":
        return (e11) => e11 < i2 || e11 > o2;
      default:
        return (e11) => e11 >= i2 && e11 <= o2;
    }
  }
  function ee(e10, t2) {
    return void 0 !== t2 && (!!Array.isArray(t2) || (E(e10) ? "function" == typeof J(t2) : T(e10) ? "function" == typeof Q(t2) : "" !== t2.trim()));
  }
  let et = (e10) => null == e10 || "" === e10, er = new Intl.Collator("en-US", { numeric: true, sensitivity: "base" });
  function ea(e10, t2, r2) {
    let a2 = t2.filter((e11) => r2.some((t3) => t3.key === e11.key));
    if (!a2.length) return e10;
    let l2 = new Map(
      r2.map((e11) => [
        e11.key,
        "select" === e11.type && e11.options ? new Map(e11.options.map((e12, t3) => [e12, t3])) : null
      ])
    );
    return e10.map((e11, t3) => ({ row: e11, index: t3 })).sort((e11, t3) => {
      for (let { key: r3, dir: n2 } of a2) {
        let a3 = e11.row[r3], i2 = t3.row[r3];
        if (et(a3) || et(i2)) {
          if (et(a3) && et(i2)) continue;
          return et(a3) ? 1 : -1;
        }
        let o2 = l2.get(r3), s2 = o2 && o2.has(String(a3)) && o2.has(String(i2)) ? o2.get(String(a3)) - o2.get(String(i2)) : "number" == typeof a3 && "number" == typeof i2 ? a3 - i2 : er.compare(String(a3), String(i2));
        if (s2) return "asc" === n2 ? s2 : -s2;
      }
      return e11.index - t3.index;
    }).map((e11) => e11.row);
  }
  function el(e10) {
    return e10.aggregate ? e10.aggregate : "percent" === e10.type ? "average" : E(e10) ? "sum" : "none";
  }
  function en(e10, t2, r2) {
    if ("none" === r2) return null;
    let a2 = 0, l2 = 0, n2 = 1 / 0, i2 = -1 / 0, o2 = 0;
    for (let r3 of e10) {
      let e11 = r3[t2.key];
      !et(e11) && o2++, "number" == typeof e11 && (a2 += e11, l2++, e11 < n2 && (n2 = e11), e11 > i2 && (i2 = e11));
    }
    return "count" === r2 ? o2 : l2 ? "sum" === r2 ? a2 : "average" === r2 ? a2 / l2 : "min" === r2 ? n2 : i2 : null;
  }
  function ei(e10) {
    return e10.map(
      (e11) => e11.map((e12) => /[\t\n"]/.test(e12) ? `"${e12.replace(/"/g, '""')}"` : e12).join("	")
    ).join("\n");
  }
  function eo(e10) {
    let t2 = e10.map(
      (e11) => `<tr>${e11.map((e12) => `<td>${e12.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\n/g, "<br>")}</td>`).join("")}</tr>`
    ).join("");
    return `<meta charset="utf-8"><table><tbody>${t2}</tbody></table>`;
  }
  function es(e10, t2, r2) {
    let a2 = URL.createObjectURL(new Blob([t2], { type: r2 })), l2 = document.createElement("a");
    l2.href = a2, l2.download = e10, document.body.appendChild(l2), l2.click(), l2.remove(), window.setTimeout(() => URL.revokeObjectURL(a2), 1e3);
  }
  async function ed(e10, t2) {
    try {
      if ("u" > typeof ClipboardItem && navigator.clipboard?.write)
        return await navigator.clipboard.write([
          new ClipboardItem({
            "text/plain": new Blob([e10], { type: "text/plain" }),
            "text/html": new Blob([t2], { type: "text/html" })
          })
        ]), true;
      return await (0, L.a)(e10), true;
    } catch {
      return false;
    }
  }
  let ec = (e10) => e10.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f￾￿]/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), eu = (e10) => {
    let t2 = e10 + 1, r2 = "";
    for (; t2 > 0; )
      r2 = String.fromCharCode(65 + (t2 - 1) % 26) + r2, t2 = Math.floor((t2 - 1) / 26);
    return r2;
  }, eh = { average: 1, count: 3, max: 4, min: 5, sum: 9 };
  function em(e10, t2) {
    if ("count" === t2) return "#,##0";
    if (T(e10)) return "mmm d, yyyy";
    let r2 = "percent" === e10.type && "average" === t2 ? Math.max(1, e10.decimals ?? 0) : e10.decimals ?? 0, a2 = r2 > 0 ? `.${"0".repeat(r2)}` : "";
    return "currency" === e10.type ? `"$"#,##0${a2};-"$"#,##0${a2}` : "percent" === e10.type ? `0${a2}%` : `#,##0${a2}`;
  }
  let ep = null;
  var ef = r(57793), eg = r(36565), ey = r(64577), ex = r(12363), ev = r(44114), eb = r(66189), ew = r(22871), ek = r(64304), e_ = r(27076), ej = r(62700), eC = r(89034), e$ = r(79504), eN = r(36483), eS = r(31458), eM = r(50825), eA = r(62533), eL = r(2410), eD = r(30707), eE = r(69994), eT = r.n(eE);
  let eR = { size: 16, strokeWidth: 1.75, "aria-hidden": true };
  function eI({ checked: e10, label: t2, onToggle: r2, tabbable: a2 = false }) {
    return (0, i.jsx)("button", {
      type: "button",
      role: "checkbox",
      "aria-checked": "mixed" === e10 ? "mixed" : e10,
      "aria-label": t2,
      tabIndex: a2 ? 0 : -1,
      className: eT().checkbox,
      "data-state": "mixed" === e10 ? "mixed" : e10 ? "on" : "off",
      onPointerDown: (e11) => e11.stopPropagation(),
      onClick: (e11) => {
        e11.stopPropagation(), r2(e11);
      },
      children: (0, i.jsx)("span", {
        className: eT().checkboxMark,
        "aria-hidden": "true",
        children: "mixed" === e10 ? (0, i.jsx)(eg.A, { size: 12, strokeWidth: 2.25 }) : (0, i.jsx)(ey.A, { size: 12, strokeWidth: 2.25 })
      })
    });
  }
  function eU({
    column: e10,
    sorted: t2,
    pinned: r2,
    canHide: a2,
    grouped: l2 = false,
    onSort: n2,
    onFilter: o2,
    onGroup: s2 = null,
    onPin: d2,
    onHide: c2
  }) {
    let u2 = false !== e10.sortable;
    return (0, i.jsxs)(ef.bL, {
      modal: false,
      children: [
        (0, i.jsx)(ef.l9, {
          className: eT().headMenuButton,
          "aria-label": `${e10.label} column options`,
          onPointerDown: (e11) => e11.stopPropagation(),
          children: (0, i.jsx)(ex.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        }),
        (0, i.jsx)(ef.ZL, {
          children: (0, i.jsxs)(ef.UC, {
            className: eT().menu,
            align: "end",
            sideOffset: 4,
            collisionPadding: 10,
            onCloseAutoFocus: (e11) => e11.preventDefault(),
            children: [
              u2 && (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)(ef.q7, {
                    className: eT().menuItem,
                    "data-active": "asc" === t2 || void 0,
                    onSelect: () => n2("asc"),
                    children: [(0, i.jsx)(ev.A, { ...eR }), "Sort ascending"]
                  }),
                  (0, i.jsxs)(ef.q7, {
                    className: eT().menuItem,
                    "data-active": "desc" === t2 || void 0,
                    onSelect: () => n2("desc"),
                    children: [
                      (0, i.jsx)(eb.A, { ...eR }),
                      "Sort descending"
                    ]
                  }),
                  t2 && (0, i.jsxs)(ef.q7, {
                    className: eT().menuItem,
                    onSelect: () => n2(null),
                    children: [(0, i.jsx)(y.A, { ...eR }), "Clear sort"]
                  }),
                  (0, i.jsx)(ef.wv, { className: eT().menuSeparator })
                ]
              }),
              o2 && (0, i.jsxs)(ef.q7, {
                className: eT().menuItem,
                onSelect: o2,
                children: [(0, i.jsx)(_.A, { ...eR }), "Filter"]
              }),
              s2 && (0, i.jsxs)(ef.q7, {
                className: eT().menuItem,
                onSelect: s2,
                children: [
                  l2 ? (0, i.jsx)(ew.A, { ...eR }) : (0, i.jsx)(ek.A, { ...eR }),
                  l2 ? "Stop grouping" : `Group by ${e10.label}`
                ]
              }),
              (0, i.jsxs)(ef.q7, {
                className: eT().menuItem,
                onSelect: d2,
                children: [
                  r2 ? (0, i.jsx)(e_.A, { ...eR }) : (0, i.jsx)(ej.A, { ...eR }),
                  r2 ? "Unpin column" : "Pin column"
                ]
              }),
              (0, i.jsxs)(ef.q7, {
                className: eT().menuItem,
                disabled: !a2,
                onSelect: c2,
                children: [(0, i.jsx)(eC.A, { ...eR }), "Hide column"]
              })
            ]
          })
        })
      ]
    });
  }
  function eF({ columns: e10, hidden: t2, pinned: r2, onToggle: a2, onShowAll: l2 }) {
    let n2 = e10.length - e10.filter((e11) => t2.has(e11.key)).length;
    return (0, i.jsxs)(ef.bL, {
      modal: false,
      children: [
        (0, i.jsxs)(ef.l9, {
          className: eT().toolButton,
          "aria-label": "Columns",
          children: [
            (0, i.jsx)(e$.A, { ...eR }),
            (0, i.jsx)("span", {
              className: eT().toolLabel,
              children: "Columns"
            }),
            t2.size > 0 && (0, i.jsxs)("span", {
              className: eT().toolCount,
              children: [n2, "/", e10.length]
            })
          ]
        }),
        (0, i.jsx)(ef.ZL, {
          children: (0, i.jsxs)(ef.UC, {
            className: eT().menu,
            align: "end",
            sideOffset: 6,
            collisionPadding: 10,
            children: [
              (0, i.jsx)("div", {
                className: eT().menuScroll,
                children: e10.map((e11) => {
                  let l3 = !t2.has(e11.key);
                  return (0, i.jsxs)(
                    ef.H_,
                    {
                      className: eT().menuItem,
                      checked: l3,
                      disabled: l3 && 1 === n2,
                      onSelect: (e12) => e12.preventDefault(),
                      onCheckedChange: () => a2(e11.key),
                      children: [
                        (0, i.jsx)("span", {
                          className: eT().menuCheck,
                          "data-on": l3 || void 0,
                          "aria-hidden": "true",
                          children: (0, i.jsx)(ey.A, {
                            size: 12,
                            strokeWidth: 2.25
                          })
                        }),
                        (0, i.jsx)("span", {
                          className: eT().menuText,
                          children: e11.label
                        }),
                        r2.has(e11.key) && (0, i.jsx)(ej.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          className: eT().menuMeta,
                          "aria-label": "Pinned"
                        })
                      ]
                    },
                    e11.key
                  );
                })
              }),
              (0, i.jsx)(ef.wv, { className: eT().menuSeparator }),
              (0, i.jsx)(ef.q7, {
                className: eT().menuItem,
                disabled: 0 === t2.size,
                onSelect: (e11) => {
                  e11.preventDefault(), l2();
                },
                children: "Show all columns"
              })
            ]
          })
        })
      ]
    });
  }
  let eP = {
    csv: { label: "CSV", icon: (0, i.jsx)(eN.A, { ...eR }) },
    xlsx: { label: "Excel workbook", icon: (0, i.jsx)(eS.A, { ...eR }) }
  };
  function ez({ formats: e10, disabled: t2 = false, onExport: r2 }) {
    let a2 = 1 === e10.length ? e10[0] : void 0;
    return a2 ? (0, i.jsxs)("button", {
      type: "button",
      className: eT().toolButton,
      "aria-label": `Export ${"csv" === a2 ? "CSV" : "Excel workbook"}`,
      onClick: () => r2(a2),
      disabled: t2,
      children: [
        (0, i.jsx)(eM.A, { ...eR }),
        (0, i.jsx)("span", {
          className: eT().toolLabel,
          children: "Export"
        })
      ]
    }) : (0, i.jsxs)(ef.bL, {
      modal: false,
      children: [
        (0, i.jsxs)(ef.l9, {
          className: eT().toolButton,
          "aria-label": "Export",
          disabled: t2,
          children: [
            (0, i.jsx)(eM.A, { ...eR }),
            (0, i.jsx)("span", {
              className: eT().toolLabel,
              children: "Export"
            })
          ]
        }),
        (0, i.jsx)(ef.ZL, {
          children: (0, i.jsx)(ef.UC, {
            className: eT().menu,
            align: "end",
            sideOffset: 6,
            collisionPadding: 10,
            children: e10.map(
              (e11) => (0, i.jsxs)(
                ef.q7,
                {
                  className: eT().menuItem,
                  onSelect: () => r2(e11),
                  children: [
                    eP[e11].icon,
                    (0, i.jsx)("span", {
                      className: eT().menuText,
                      children: eP[e11].label
                    }),
                    (0, i.jsxs)("span", {
                      className: eT().menuMeta,
                      children: [".", e11]
                    })
                  ]
                },
                e11
              )
            )
          })
        })
      ]
    });
  }
  let eq = [
    { value: "compact", label: "Compact", icon: (0, i.jsx)(eA.A, { ...eR }) },
    { value: "standard", label: "Standard", icon: (0, i.jsx)(eL.A, { ...eR }) },
    {
      value: "comfortable",
      label: "Comfortable",
      icon: (0, i.jsx)(eD.A, { ...eR })
    }
  ];
  function eW({ density: e10, onChange: t2 }) {
    let r2 = eq.find((t3) => t3.value === e10) ?? eq[1];
    return (0, i.jsxs)(ef.bL, {
      modal: false,
      children: [
        (0, i.jsx)(ef.l9, {
          className: eT().toolButton,
          "aria-label": `Row density, ${r2.label.toLowerCase()}`,
          children: r2.icon
        }),
        (0, i.jsx)(ef.ZL, {
          children: (0, i.jsx)(ef.UC, {
            className: eT().menu,
            align: "end",
            sideOffset: 6,
            collisionPadding: 10,
            children: (0, i.jsx)(ef.z6, {
              value: e10,
              onValueChange: (e11) => t2(e11),
              children: eq.map(
                (e11) => (0, i.jsxs)(
                  ef.hN,
                  {
                    value: e11.value,
                    className: eT().menuItem,
                    children: [
                      e11.icon,
                      (0, i.jsx)("span", {
                        className: eT().menuText,
                        children: e11.label
                      }),
                      (0, i.jsx)(ef.VF, {
                        className: eT().menuMeta,
                        children: (0, i.jsx)(ey.A, {
                          size: 14,
                          strokeWidth: 2
                        })
                      })
                    ]
                  },
                  e11.value
                )
              )
            })
          })
        })
      ]
    });
  }
  function eO({ column: e10, options: t2, value: r2, onChange: a2 }) {
    let [l2, n2] = (0, o.useState)(""), s2 = (0, o.useMemo)(() => new Set(r2 ?? t2), [r2, t2]), d2 = (0, o.useMemo)(() => {
      let e11 = l2.trim().toLowerCase();
      return e11 ? t2.filter((t3) => (t3 || "Empty").toLowerCase().includes(e11)) : t2;
    }, [t2, l2]), c2 = void 0 === r2 ? "All" : 0 === r2.length ? "None" : 1 === r2.length ? r2[0] || "Empty" : `${r2.length} of ${t2.length}`;
    return (0, i.jsxs)(f.bL, {
      onOpenChange: (e11) => {
        e11 || n2("");
      },
      children: [
        (0, i.jsxs)(f.l9, {
          className: eT().filterSelect,
          "data-filter-key": e10.key,
          "data-active": void 0 !== r2 || void 0,
          "aria-label": `Filter ${e10.label}, ${c2}`,
          children: [
            (0, i.jsx)("span", {
              className: eT().filterSelectText,
              children: c2
            }),
            (0, i.jsx)(ex.A, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, i.jsx)(f.ZL, {
          children: (0, i.jsxs)(f.UC, {
            className: eT().menu,
            align: "start",
            sideOffset: 4,
            collisionPadding: 10,
            "aria-label": `Filter ${e10.label}`,
            children: [
              t2.length > 7 && (0, i.jsxs)("label", {
                className: eT().menuSearch,
                children: [
                  (0, i.jsx)(b.A, {
                    size: 14,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  (0, i.jsx)("input", {
                    value: l2,
                    onChange: (e11) => n2(e11.target.value),
                    placeholder: "Search values",
                    "aria-label": "Search values",
                    spellCheck: false
                  })
                ]
              }),
              (0, i.jsxs)("div", {
                className: eT().menuScroll,
                role: "group",
                "aria-label": `${e10.label} values`,
                children: [
                  d2.map((e11) => {
                    let r3 = s2.has(e11);
                    return (0, i.jsxs)(
                      "button",
                      {
                        type: "button",
                        role: "checkbox",
                        "aria-checked": r3,
                        className: eT().menuItem,
                        onClick: () => {
                          let r4;
                          (r4 = new Set(s2)).has(e11) ? r4.delete(e11) : r4.add(e11), a2(
                            r4.size === t2.length ? void 0 : t2.filter((e12) => r4.has(e12))
                          );
                        },
                        children: [
                          (0, i.jsx)("span", {
                            className: eT().menuCheck,
                            "data-on": r3 || void 0,
                            "aria-hidden": "true",
                            children: (0, i.jsx)(ey.A, {
                              size: 12,
                              strokeWidth: 2.25
                            })
                          }),
                          (0, i.jsx)("span", {
                            className: eT().menuText,
                            "data-muted": !e11 || void 0,
                            children: e11 || "Empty"
                          })
                        ]
                      },
                      e11 || "\0"
                    );
                  }),
                  !d2.length && (0, i.jsx)("p", {
                    className: eT().menuEmpty,
                    children: "No matching values"
                  })
                ]
              }),
              (0, i.jsxs)("div", {
                className: eT().menuFooter,
                children: [
                  (0, i.jsx)("button", {
                    type: "button",
                    className: eT().menuLink,
                    disabled: void 0 === r2,
                    onClick: () => a2(void 0),
                    children: "Select all"
                  }),
                  (0, i.jsx)("button", {
                    type: "button",
                    className: eT().menuLink,
                    disabled: void 0 !== r2 && 0 === r2.length,
                    onClick: () => a2([]),
                    children: "Clear"
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  let { spring: eB, duration: eH, ease: eV } = A.T, eK = { compact: 32, standard: 40, comfortable: 48 }, eG = (e10, t2) => ({
    r0: Math.min(e10.r, t2.r),
    r1: Math.max(e10.r, t2.r),
    c0: Math.min(e10.c, t2.c),
    c1: Math.max(e10.c, t2.c)
  }), eY = (e10, t2) => `${e10.toLocaleString("en-US")} ${t2}${1 === e10 ? "" : "s"}`, eX = {
    sum: "Sum",
    average: "Avg",
    min: "Min",
    max: "Max",
    count: "Count",
    none: ""
  };
  function eZ(e10, t2, r2) {
    let [a2, l2] = (0, o.useState)(t2), n2 = void 0 !== e10;
    return [
      n2 ? e10 : a2,
      (0, o.useCallback)(
        (e11) => {
          n2 || l2(e11), r2?.(e11);
        },
        [n2, r2]
      )
    ];
  }
  function eJ({
    range: e10,
    geo: t2,
    rowH: r2,
    lineOf: a2,
    scrollX: l2,
    instant: n2,
    className: s2,
    children: p2,
    ...f2
  }) {
    let g2 = !!(0, d.I)(), y2 = (e11) => a2 ? a2[e11] ?? e11 : e11, x2 = {
      left: t2.lefts[e10.c0] ?? 0,
      right: (t2.lefts[e10.c1] ?? 0) + (t2.widths[e10.c1] ?? 0),
      top: y2(e10.r0) * r2,
      bottom: (y2(e10.r1) + 1) * r2
    }, v2 = (0, c.d)(x2.left), b2 = (0, c.d)(x2.right), w2 = (0, c.d)(x2.top), k2 = (0, c.d)(x2.bottom), _2 = e10.c0 < t2.pinCount, j2 = e10.c1 < t2.pinCount, C2 = (0, c.d)(+!!_2), $2 = (0, c.d)(+!!j2), N2 = (0, c.d)(t2.pinEdge), S2 = t2.pinEdge;
    (0, o.useEffect)(() => {
      C2.jump(+!!_2), $2.jump(+!!j2), N2.jump(S2);
      let e11 = [
        [v2, x2.left],
        [b2, x2.right],
        [w2, x2.top],
        [k2, x2.bottom]
      ];
      if (n2 || g2) return void e11.forEach(([e12, t4]) => e12.jump(t4));
      let t3 = e11.map(([e12, t4]) => (0, u.i)(e12, t4, eB.snappy));
      return () => t3.forEach((e12) => e12.stop());
    }, [x2.left, x2.right, x2.top, x2.bottom, _2, j2, S2, n2, g2, v2, b2, w2, k2, C2, $2, N2]);
    let M2 = (0, h.G)(
      () => Math.max(
        0,
        ($2.get() || !C2.get() ? b2.get() : Math.max(b2.get() - l2.get(), N2.get())) - v2.get()
      )
    ), A2 = (0, h.G)(() => k2.get() - w2.get()), L2 = (0, h.G)(() => {
      let e11 = C2.get() ? 0 : l2.get() + N2.get() - v2.get();
      return `inset(-8px -8px -8px ${e11 > 0 ? e11 : -8}px)`;
    });
    return (0, i.jsx)("div", {
      className: eT().rectLayer,
      "data-pinned": _2 || void 0,
      children: (0, i.jsx)(m.PY1.div, {
        className: s2,
        style: { x: v2, y: w2, width: M2, height: A2, clipPath: L2 },
        "aria-hidden": "true",
        ...f2,
        children: p2
      })
    });
  }
  function eQ(e10, t2, r2, a2 = []) {
    let l2 = [];
    for (let a3 = 0; a3 < t2.pinCount && a3 < e10.length; a3++)
      l2.push(r2(e10[a3], a3, { width: e10[a3].width, left: e10[a3].left }));
    let n2 = (e10[t2.start]?.left ?? t2.pinEdge) - t2.pinEdge;
    t2.start > t2.pinCount && n2 > 0 && l2.push(
      (0, i.jsx)(
        "div",
        {
          className: eT().spacer,
          style: { width: n2 },
          "aria-hidden": "true"
        },
        "\\u0000spacer"
      )
    );
    for (let a3 = t2.start; a3 < t2.end && a3 < e10.length; a3++)
      l2.push(r2(e10[a3], a3, { width: e10[a3].width }));
    for (let n3 of new Set(a2)) {
      let a3 = e10[n3];
      a3 && n3 >= t2.pinCount && (n3 < t2.start || n3 >= t2.end) && l2.push(
        r2(a3, n3, {
          width: a3.width,
          left: a3.left,
          position: "absolute",
          top: 0
        })
      );
    }
    return l2;
  }
  let e0 = (0, o.memo)(function({
    row: e10,
    r: t2,
    y: r2,
    slots: a2,
    win: l2,
    uid: n2,
    ariaRow: o2,
    level: s2,
    gutter: d2,
    checked: c2,
    inRows: u2,
    rangeC0: h2,
    rangeC1: m2,
    keepC: p2,
    editingC: f2,
    editor: g2,
    onToggle: y2
  }) {
    let x2 = d2 ? 2 : 1, v2 = String(a2[0] && e10[a2[0].column.key] || e10.id);
    return (0, i.jsxs)("div", {
      role: "row",
      "aria-rowindex": o2,
      "aria-level": s2,
      "aria-selected": d2 ? c2 : void 0,
      className: eT().row,
      "data-checked": c2 || void 0,
      "data-editing": f2 >= 0 || void 0,
      style: { transform: `translateY(${r2}px)` },
      children: [
        d2 && (0, i.jsxs)("div", {
          role: "gridcell",
          "aria-colindex": 1,
          className: eT().gutter,
          "data-in-range": u2 || void 0,
          children: [
            (0, i.jsx)("span", {
              className: eT().rowNumber,
              "aria-hidden": "true",
              children: (t2 + 1).toLocaleString("en-US")
            }),
            (0, i.jsx)(eI, {
              checked: c2,
              label: `Select ${v2}`,
              onToggle: (r3) => y2(e10.id, t2, r3.shiftKey)
            })
          ]
        }),
        eQ(
          a2,
          l2,
          (r3, a3, l3) => {
            let { column: o3 } = r3, s3 = f2 === a3, d3 = K(e10[o3.key], o3);
            return (0, i.jsx)(
              "div",
              {
                id: `${n2}-${t2}-${a3}`,
                role: "gridcell",
                "aria-colindex": a3 + x2,
                "aria-selected": u2 && a3 >= h2 && a3 <= m2,
                "aria-readonly": false === o3.editable || void 0,
                className: eT().cell,
                "data-num": r3.numeric || void 0,
                "data-pinned": r3.pinned || void 0,
                "data-pin-edge": r3.edge || void 0,
                "data-editing": s3 || void 0,
                style: l3,
                children: s3 ? g2 : (0, i.jsx)("span", {
                  className: eT().value,
                  title: d3.length > 18 ? d3 : void 0,
                  children: d3
                })
              },
              o3.key
            );
          },
          [p2, f2]
        )
      ]
    });
  });
  function e1({ y: e10, slots: t2, win: r2, ariaRow: a2, gutter: l2 }) {
    return (0, i.jsxs)("div", {
      role: "row",
      "aria-rowindex": a2,
      "aria-busy": "true",
      className: eT().row,
      style: { transform: `translateY(${e10}px)` },
      children: [
        l2 && (0, i.jsx)("div", {
          role: "gridcell",
          "aria-colindex": 1,
          className: eT().gutter
        }),
        eQ(
          t2,
          r2,
          (e11, t3, r3) => (0, i.jsx)(
            "div",
            {
              role: "gridcell",
              "aria-colindex": t3 + (l2 ? 2 : 1),
              className: eT().cell,
              "data-num": e11.numeric || void 0,
              "data-pinned": e11.pinned || void 0,
              "data-pin-edge": e11.edge || void 0,
              style: r3,
              children: (0, i.jsx)("span", {
                className: eT().skeleton,
                style: { width: `${40 + (7 * a2 + e11.width) % 45}%` }
              })
            },
            e11.column.key
          )
        )
      ]
    });
  }
  let e2 = (0, o.memo)(function({
    node: e10,
    rows: t2,
    y: r2,
    slots: a2,
    win: l2,
    column: n2,
    ariaRow: s2,
    gutter: d2,
    collapsed: c2,
    onToggle: u2
  }) {
    let h2 = (0, o.useMemo)(
      () => a2.map((e11) => {
        let r3 = el(e11.column);
        return { kind: r3, value: en(t2, e11.column, r3) };
      }),
      [t2, a2]
    ), m2 = n2 ? K(e10.value, n2) : String(e10.value ?? ""), p2 = m2 || "Empty";
    return (0, i.jsxs)("div", {
      role: "row",
      "aria-rowindex": s2,
      "aria-level": e10.level + 1,
      "aria-expanded": !c2,
      className: eT().row,
      "data-group-row": "",
      style: { transform: `translateY(${r2}px)` },
      children: [
        d2 && (0, i.jsx)("div", {
          role: "gridcell",
          "aria-colindex": 1,
          className: eT().gutter
        }),
        eQ(a2, l2, (r3, a3, l3) => {
          let o2 = h2[a3], s3 = a3 > 0 && o2 && null !== o2.value && "none" !== o2.kind ? "count" === o2.kind ? o2.value.toLocaleString("en-US") : K(Math.round(100 * o2.value) / 100, {
            ...r3.column,
            decimals: "percent" === r3.column.type && "average" === o2.kind ? Math.max(1, r3.column.decimals ?? 0) : r3.column.decimals
          }) : "";
          return (0, i.jsx)(
            "div",
            {
              role: "gridcell",
              "aria-colindex": a3 + (d2 ? 2 : 1),
              className: eT().cell,
              "data-group-cell": "",
              "data-num": r3.numeric || void 0,
              "data-pinned": r3.pinned || void 0,
              "data-pin-edge": r3.edge || void 0,
              style: l3,
              "aria-label": a3 > 0 && s3 ? `${p2} ${r3.column.label} ${eX[o2.kind].toLowerCase()} ${s3}` : void 0,
              children: 0 === a3 ? (0, i.jsxs)("button", {
                type: "button",
                className: eT().groupToggle,
                style: { paddingLeft: 4 + 16 * e10.level },
                "aria-expanded": !c2,
                "aria-label": `${n2?.label ?? "Group"} ${p2}, ${t2.length.toLocaleString("en-US")} ${1 === t2.length ? "row" : "rows"}. ${c2 ? "Expand" : "Collapse"}`,
                onClick: () => u2(e10.id),
                children: [
                  (0, i.jsx)(g.A, {
                    className: eT().groupChevron,
                    size: 14,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  (0, i.jsx)("span", {
                    className: eT().groupLabel,
                    "data-empty": !m2 || void 0,
                    children: p2
                  }),
                  (0, i.jsx)("span", {
                    className: eT().groupCount,
                    children: t2.length.toLocaleString("en-US")
                  })
                ]
              }) : s3 && (0, i.jsx)("span", {
                className: eT().value,
                "aria-hidden": "true",
                children: s3
              })
            },
            r3.column.key
          );
        })
      ]
    });
  }), e6 = (e10) => new Date(+e10.slice(0, 4), e10.slice(5, 7) - 1, +e10.slice(8, 10));
  function e4({
    column: e10,
    options: t2,
    editing: r2,
    label: a2,
    openUp: l2,
    onDraft: n2,
    onCommit: s2,
    onCancel: d2
  }) {
    let c2 = "select" === e10.type, u2 = "date" === e10.type, [h2, m2] = (0, o.useState)((c2 || u2) && r2.list), p2 = (e11) => t2.findIndex((t3) => t3.toLowerCase() === e11.trim().toLowerCase()), [g2, y2] = (0, o.useState)(() => Math.max(0, p2(r2.draft))), x2 = (0, o.useMemo)(() => {
      if (!c2) return [];
      let e11 = r2.draft.trim().toLowerCase();
      return !e11 || t2.some((t3) => t3.toLowerCase() === e11) ? t2 : [
        ...t2.filter((t3) => t3.toLowerCase().startsWith(e11)),
        ...t2.filter(
          (t3) => !t3.toLowerCase().startsWith(e11) && t3.toLowerCase().includes(e11)
        )
      ];
    }, [c2, r2.draft, t2]), v2 = Math.max(
      0,
      x2.findIndex((e11) => e11.toLowerCase() === r2.draft.trim().toLowerCase())
    ), b2 = (0, D.q)(g2, 0, Math.max(0, x2.length - 1)), w2 = `${a2.replace(/\W+/g, "-")}-options`, k2 = () => h2 && void 0 !== x2[b2] ? x2[b2] : void 0, _2 = (0, o.useRef)(null), j2 = (0, o.useRef)(null), C2 = u2 ? W(r2.draft) : null, [$2, N2] = (0, o.useState)(() => C2 ? e6(C2) : /* @__PURE__ */ new Date()), [S2, A2] = (0, o.useState)(C2);
    S2 !== C2 && (A2(C2), C2 && N2(e6(C2)));
    let L2 = (e11) => e11 instanceof Node && !!j2.current?.contains(e11), T2 = (0, i.jsx)("input", {
      ref: _2,
      className: eT().editor,
      value: r2.draft,
      autoFocus: true,
      "aria-label": a2,
      "aria-invalid": r2.invalid || void 0,
      inputMode: E(e10) ? "decimal" : void 0,
      spellCheck: false,
      autoComplete: "off",
      placeholder: u2 ? "YYYY-MM-DD" : void 0,
      role: c2 || u2 ? "combobox" : void 0,
      "aria-haspopup": u2 ? "dialog" : void 0,
      "aria-expanded": c2 || u2 ? h2 : void 0,
      "aria-controls": (c2 || u2) && h2 ? w2 : void 0,
      "aria-activedescendant": c2 && h2 && x2.length ? `${w2}-${b2}` : void 0,
      onFocus: (e11) => {
        let t3 = e11.currentTarget.value.length;
        e11.currentTarget.setSelectionRange(t3, t3);
      },
      onChange: (e11) => {
        n2(e11.target.value), c2 && (m2(true), y2(Math.max(0, p2(e11.target.value))));
      },
      onBlur: (e11) => {
        L2(e11.relatedTarget) || s2();
      },
      onKeyDown: (e11) => {
        e11.stopPropagation();
        let t3 = "enter" === r2.mode;
        if (c2 && e11.altKey && "ArrowDown" === e11.key) {
          e11.preventDefault(), m2(true), y2(v2);
          return;
        }
        if (u2 && (e11.altKey || h2) && "ArrowDown" === e11.key) {
          e11.preventDefault(), m2(true), requestAnimationFrame(
            () => j2.current?.querySelector('[data-present] [data-date][tabindex="0"]')?.focus({ preventScroll: true })
          );
          return;
        }
        if (c2 && h2 && ("ArrowDown" === e11.key || "ArrowUp" === e11.key)) {
          e11.preventDefault(), y2(
            (t4) => (0, D.q)(
              (0, D.q)(t4, 0, x2.length - 1) + ("ArrowDown" === e11.key ? 1 : -1),
              0,
              Math.max(0, x2.length - 1)
            )
          );
          return;
        }
        if ("Enter" === e11.key)
          e11.preventDefault(), s2({ dr: e11.shiftKey ? -1 : 1, dc: 0 }, k2());
        else if ("Tab" === e11.key)
          e11.preventDefault(), s2({ dr: 0, dc: e11.shiftKey ? -1 : 1 }, k2());
        else if ("Escape" === e11.key)
          e11.preventDefault(), (c2 || u2) && h2 ? m2(false) : d2();
        else if (t3 && e11.key.startsWith("Arrow")) {
          e11.preventDefault();
          let t4 = {
            ArrowUp: { dr: -1, dc: 0 },
            ArrowDown: { dr: 1, dc: 0 },
            ArrowLeft: { dr: 0, dc: -1 },
            ArrowRight: { dr: 0, dc: 1 }
          }[e11.key];
          t4 && s2(t4);
        }
      }
    });
    return u2 ? (0, i.jsxs)(f.bL, {
      open: h2,
      onOpenChange: (e11) => {
        e11 || m2(false);
      },
      children: [
        (0, i.jsx)(f.Mz, { asChild: true, children: T2 }),
        (0, i.jsx)(f.ZL, {
          children: (0, i.jsx)(f.UC, {
            ref: j2,
            id: w2,
            className: `${eT().menu} ${eT().datePopover}`,
            align: "start",
            side: l2 ? "top" : "bottom",
            sideOffset: 6,
            collisionPadding: 10,
            "aria-label": `${e10.label} calendar`,
            onOpenAutoFocus: (e11) => e11.preventDefault(),
            onCloseAutoFocus: (e11) => e11.preventDefault(),
            onInteractOutside: (e11) => {
              e11.target === _2.current && e11.preventDefault();
            },
            onEscapeKeyDown: (e11) => {
              e11.preventDefault(), L2(document.activeElement) && _2.current?.focus(), m2(false);
            },
            onPointerDown: (e11) => e11.stopPropagation(),
            onMouseDown: (e11) => {
              L2(document.activeElement) || e11.preventDefault();
            },
            onDoubleClick: (e11) => e11.stopPropagation(),
            onKeyDown: (e11) => e11.stopPropagation(),
            onBlur: () => requestAnimationFrame(() => {
              let e11 = document.activeElement;
              L2(e11) || e11 === _2.current || s2();
            }),
            children: (0, i.jsx)(M.Vv, {
              value: C2 ? e6(C2) : void 0,
              month: $2,
              onMonthChange: N2,
              showToday: true,
              onChange: (e11) => s2(
                { dr: 0, dc: 0 },
                `${e11.getFullYear()}-${String(e11.getMonth() + 1).padStart(2, "0")}-${String(e11.getDate()).padStart(2, "0")}`
              )
            })
          })
        })
      ]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [
        T2,
        c2 && h2 && (0, i.jsx)("div", {
          id: w2,
          role: "listbox",
          "aria-label": `${e10.label} options`,
          className: eT().options,
          "data-up": l2 || void 0,
          children: x2.length ? x2.map(
            (e11, t3) => (0, i.jsx)(
              "div",
              {
                id: `${w2}-${t3}`,
                role: "option",
                "aria-selected": t3 === b2,
                className: eT().option,
                "data-active": t3 === b2 || void 0,
                "data-current": e11 === r2.draft || void 0,
                onPointerDown: (e12) => e12.preventDefault(),
                onPointerEnter: () => y2(t3),
                onClick: () => s2({ dr: 0, dc: 0 }, e11),
                children: e11
              },
              e11
            )
          ) : (0, i.jsx)("div", {
            className: eT().optionEmpty,
            children: "No match"
          })
        })
      ]
    });
  }
  function e5(e10) {
    let {
      columns: t2,
      rows: r2,
      defaultRows: a2,
      onRowsChange: l2,
      label: n2,
      maxHeight: s2 = 400,
      rowSelection: u2 = true,
      rowNumbers: h2 = true,
      selectionStats: f2 = true,
      toolbar: g2 = true,
      totals: M2 = true,
      bulkActions: A2,
      exportFileName: L2,
      emptyMessage: U2 = "No rows yet",
      exportFormats: F2,
      dataSource: P2
    } = e10, z2 = !!P2, W2 = (e10.canDeleteRows ?? true) && !z2, O2 = !!(0, d.I)(), B2 = (0, o.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), [H2, V2] = (0, o.useState)(() => a2 ?? r2 ?? []), G2 = r2 ?? H2, [et2, er2] = eZ(e10.sort, () => e10.defaultSort ?? [], e10.onSortChange), [ef2, eg2] = eZ(e10.filters, () => e10.defaultFilters ?? {}, e10.onFiltersChange), [ey2, ex2] = eZ(
      e10.selectedRowIds,
      () => e10.defaultSelectedRowIds ?? [],
      e10.onSelectedRowIdsChange
    ), [ev2, eb2] = eZ(
      e10.hiddenColumns,
      () => e10.defaultHiddenColumns ?? t2.filter((e11) => e11.hidden).map((e11) => e11.key),
      e10.onHiddenColumnsChange
    ), [ew2, ek2] = eZ(
      e10.pinnedColumns,
      () => e10.defaultPinnedColumns ?? (t2.some((e11) => void 0 !== e11.pinned) ? t2.filter((e11) => e11.pinned).map((e11) => e11.key) : t2.slice(0, 1).map((e11) => e11.key)),
      e10.onPinnedColumnsChange
    ), [e_2, ej2] = eZ(
      e10.density,
      () => e10.defaultDensity ?? "standard",
      e10.onDensityChange
    ), [eC2, e$2] = eZ(e10.groupBy, () => e10.defaultGroupBy ?? [], e10.onGroupByChange), [eN2, eS2] = (0, o.useState)(() => /* @__PURE__ */ new Set()), [eM2, eA2] = (0, o.useState)(""), [eL2, eD2] = (0, o.useState)(
      () => Object.keys(e10.filters ?? e10.defaultFilters ?? {}).length > 0
    ), [eE2, eR2] = (0, o.useState)(
      () => Object.fromEntries(t2.map((e11) => [e11.key, e11.width ?? 140]))
    ), [eP2, eq2] = (0, o.useState)({ w: 0, h: 0 }), [e62, e52] = (0, o.useState)(0), [e72, e82] = (0, o.useState)(0), [e32, e92] = (0, o.useState)({
      anchor: { r: 0, c: 0 },
      focus: { r: 0, c: 0 }
    }), [te2, tt2] = (0, o.useState)(null), [tr2, ta2] = (0, o.useState)(null), [tl2, tn2] = (0, o.useState)(null), [ti2, to2] = (0, o.useState)(null), [ts, td] = (0, o.useState)(false), [tc, tu] = (0, o.useState)(null), [th, tm] = (0, o.useState)(""), [tp, tf] = (0, o.useState)({ past: 0, future: 0 }), tg = (0, o.useRef)(null), ty = (0, o.useRef)(null), tx = (0, o.useRef)(null), tv = (0, o.useRef)(null), tb = (0, o.useRef)(null), tw = (0, c.d)(0), tk = (0, o.useRef)([]), t_ = (0, o.useRef)([]), tj = (0, o.useRef)(null), tC = (0, o.useRef)(null), t$ = (0, o.useRef)(null), tN = (0, o.useRef)(void 0), tS = (0, o.useRef)(void 0), tM = (0, o.useRef)(false), tA = (0, o.useMemo)(() => new Set(ev2), [ev2]), tL = (0, o.useMemo)(() => new Set(ew2), [ew2]), tD = (0, o.useMemo)(() => {
      let e11 = t2.filter((e12) => !tA.has(e12.key));
      return [
        ...e11.filter((e12) => tL.has(e12.key)),
        ...e11.filter((e12) => !tL.has(e12.key))
      ];
    }, [t2, tA, tL]), tE = tD.length, tT = eK[e_2], tR = 40 + 40 * !!eL2, tI = 40 * !!M2, tU = u2 ? h2 ? 48 : 40 : 0, tF = (0, o.useMemo)(() => {
      let e11 = tD.map((e12) => eE2[e12.key] ?? e12.width ?? 140), t10 = tD.filter((e12) => tL.has(e12.key)).length, r10 = e11.slice(0, t10).reduce((e12, t11) => e12 + t11, 0), a3 = eP2.w ? Math.max(96, Math.floor(0.5 * eP2.w) - tU) : 1 / 0;
      if (r10 > a3)
        for (let l4 = 0; l4 < t10; l4++)
          e11[l4] = Math.max(
            Math.min(tD[l4].minWidth ?? 72, 96),
            Math.floor(e11[l4] * a3 / r10)
          );
      let l3 = e11.reduce((e12, t11) => e12 + t11, 0) + tU;
      eP2.w > l3 && e11.length && (e11[e11.length - 1] += eP2.w - l3);
      let n3 = [], i2 = tU;
      for (let t11 of e11) n3.push(i2), i2 += t11;
      return {
        lefts: n3,
        widths: e11,
        pinCount: t10,
        pinEdge: tU + e11.slice(0, t10).reduce((e12, t11) => e12 + t11, 0),
        lead: tU,
        total: i2
      };
    }, [tD, eE2, tL, eP2.w, tU]), tP = (0, o.useMemo)(
      () => tD.map((e11, t10) => ({
        column: e11,
        width: tF.widths[t10],
        left: tF.lefts[t10],
        pinned: t10 < tF.pinCount,
        edge: t10 === tF.pinCount - 1,
        numeric: E(e11)
      })),
      [tD, tF]
    ), tz = (0, o.useMemo)(() => {
      let e11 = /* @__PURE__ */ new Map();
      for (let r10 of t2) {
        if ("select" !== r10.type) continue;
        if (r10.options) {
          e11.set(r10.key, r10.options);
          continue;
        }
        let t10 = /* @__PURE__ */ new Set();
        for (let e12 of G2) {
          let a3 = e12[r10.key];
          if (null != a3 && "" !== a3 && t10.add(String(a3)), t10.size > 200)
            break;
        }
        e11.set(
          r10.key,
          [...t10].sort((e12, t11) => e12.localeCompare(t11))
        );
      }
      return e11;
    }, [t2, G2]), tq = (0, o.useCallback)(
      (e11) => {
        let t10 = tz.get(e11.key) ?? [];
        return G2.some(
          (t11) => "" === t11[e11.key] || null === t11[e11.key] || void 0 === t11[e11.key]
        ) ? [...t10, ""] : t10;
      },
      [tz, G2]
    ), tW = (0, o.useDeferredValue)(ef2), tO = (0, o.useDeferredValue)(eM2), tB = (0, o.useMemo)(
      () => z2 ? [] : eC2.filter((e11) => t2.some((t10) => t10.key === e11)),
      [z2, eC2, t2]
    ), tH = (0, o.useMemo)(() => G2.map((e11) => e11.id).join(""), [G2]), tV = JSON.stringify([et2, tW, tO, tD.map((e11) => e11.key), tB]), tK = () => {
      if (z2) return { ids: [], groups: null };
      let e11 = (function(e12, t10, r11, a4 = e12) {
        let l4 = [];
        for (let r12 of e12) {
          let e13 = t10[r12.key];
          if (void 0 !== e13) {
            if (Array.isArray(e13)) {
              let t11 = new Set(e13);
              l4.push((e14) => t11.has(String(e14[r12.key] ?? "")));
            } else if (E(r12)) {
              let t11 = J(e13);
              "function" == typeof t11 && l4.push((e14) => {
                let a5 = e14[r12.key];
                return "number" == typeof a5 && t11(a5);
              });
            } else if (T(r12)) {
              let t11 = Q(e13);
              "function" == typeof t11 && l4.push((e14) => {
                let a5 = e14[r12.key];
                return q(a5) && t11(a5);
              });
            } else if (e13.trim()) {
              let t11 = e13.trim(), a5 = t11.startsWith("!"), n5 = t11.startsWith("="), i2 = Z(a5 || n5 ? t11.slice(1) : t11);
              i2 && l4.push((e14) => {
                let t12 = Z(String(e14[r12.key] ?? "")), l5 = n5 ? t12 === i2 : t12.includes(i2);
                return a5 ? !l5 : l5;
              });
            }
          }
        }
        let n4 = Z(r11).split(/\s+/).filter(Boolean);
        return (n4.length && l4.push((e13) => {
          let t11 = a4.map((t12) => Z(K(e13[t12.key], t12) + " " + String(e13[t12.key] ?? ""))).join(" ");
          return n4.every((e14) => t11.includes(e14));
        }), l4.length) ? (e13) => l4.every((t11) => t11(e13)) : null;
      })(t2, tW, tO, tD), r10 = ea(e11 ? G2.filter(e11) : G2, et2, t2);
      if (!tB.length) return { ids: r10.map((e12) => e12.id), groups: null };
      let a3 = (e12, r11, l4) => {
        let n4 = tB[r11], i2 = /* @__PURE__ */ new Map();
        for (let t10 of e12) {
          let e13 = String(t10[n4] ?? ""), r12 = i2.get(e13);
          r12 ? r12.push(t10) : i2.set(e13, [t10]);
        }
        return ea(
          [...i2.values()].map((e13) => e13[0]),
          [{ key: n4, dir: et2.find((e13) => e13.key === n4)?.dir ?? "asc" }],
          t2
        ).map((e13) => {
          let t10 = String(e13[n4] ?? ""), o2 = i2.get(t10) ?? [], s3 = l4 + "" + t10;
          return {
            id: s3,
            key: n4,
            value: e13[n4] ?? null,
            level: r11,
            ids: o2.map((e14) => e14.id),
            children: r11 + 1 < tB.length ? a3(o2, r11 + 1, s3) : null
          };
        });
      }, l3 = a3(r10, 0, ""), n3 = (e12) => e12.children ? e12.children.flatMap(n3) : e12.ids;
      return { ids: l3.flatMap(n3), groups: l3 };
    }, [tG, tY] = (0, o.useState)(() => ({ idsKey: tH, spec: tV, ...tK() }));
    (tG.idsKey !== tH || tG.spec !== tV) && tY({ idsKey: tH, spec: tV, ...tK() });
    let tX = (0, o.useMemo)(() => new Map(G2.map((e11) => [e11.id, e11])), [G2]), tZ = (0, o.useMemo)(
      () => tG.ids.flatMap((e11) => {
        let t10 = tX.get(e11);
        return t10 ? [t10] : [];
      }),
      [tG.ids, tX]
    ), tJ = (0, o.useMemo)(() => {
      if (!tG.groups) return null;
      let e11 = [], t10 = [], r10 = [], a3 = /* @__PURE__ */ new Map(), l3 = (n4) => {
        if (a3.set(r10.length, {
          node: n4,
          rows: n4.ids.flatMap((e12) => {
            let t11 = tX.get(e12);
            return t11 ? [t11] : [];
          })
        }), r10.push(e11.length), !eN2.has(n4.id)) {
          if (n4.children) return void n4.children.forEach(l3);
          for (let a4 of n4.ids) {
            let l4 = tX.get(a4);
            l4 && (t10.push(r10.length), r10.push(e11.length), e11.push(l4));
          }
        }
      };
      tG.groups.forEach(l3);
      let n3 = Math.max(0, e11.length - 1);
      return {
        display: e11,
        lineOf: t10,
        lineRow: r10.map((e12) => Math.min(e12, n3)),
        groupAt: a3,
        lineCount: r10.length
      };
    }, [tG.groups, tX, eN2]), tQ = tJ?.lineOf ?? null, t0 = (e11) => tQ ? tQ[e11] ?? e11 : e11, t1 = Math.max(1, P2?.blockSize ?? 100), t22 = JSON.stringify([et2, tW, tO.trim()]), t6 = P2?.getRows, [t4, t5] = (0, o.useState)(() => ({
      key: t22,
      source: t6,
      count: null,
      blocks: /* @__PURE__ */ new Map(),
      totals: void 0,
      failed: false
    }));
    (t4.key !== t22 || t4.source !== t6) && t5({
      key: t22,
      source: t6,
      count: null,
      blocks: /* @__PURE__ */ new Map(),
      totals: void 0,
      failed: false
    });
    let t7 = (e10.loading ?? false) || z2 && null === t4.count && !t4.failed, t8 = tJ ? tJ.display : tZ, t3 = (e11) => z2 ? t4.blocks.get(Math.floor(e11 / t1))?.[e11 % t1] : t8[e11], t9 = t7 ? 0 : z2 ? t4.count ?? 0 : t8.length, re = t7 ? 0 : tJ ? tJ.lineCount : t9, rt = z2 ? t4.count ?? 0 : tZ.length, rr = (0, o.useMemo)(() => new Set(ey2), [ey2]), ra = tD.filter((e11) => ee(e11, ef2[e11.key])).length + t2.filter((e11) => tA.has(e11.key) && ee(e11, ef2[e11.key])).length, rl = ra > 0 || "" !== eM2.trim(), rn = Math.max(0, t9 - 1), ri = Math.max(0, tE - 1), ro = { r: (0, D.q)(e32.anchor.r, 0, rn), c: (0, D.q)(e32.anchor.c, 0, ri) }, rs = { r: (0, D.q)(e32.focus.r, 0, rn), c: (0, D.q)(e32.focus.c, 0, ri) }, rd = eG(ro, rs);
    (0, o.useLayoutEffect)(() => {
      let e11 = ty.current;
      if (!e11 || "u" < typeof ResizeObserver) return;
      let t10 = new ResizeObserver(
        () => eq2(
          (t11) => t11.w === e11.clientWidth && t11.h === e11.clientHeight ? t11 : { w: e11.clientWidth, h: e11.clientHeight }
        )
      );
      return t10.observe(e11), () => t10.disconnect();
    }, []);
    let rc = (0, o.useRef)(tT);
    (0, o.useLayoutEffect)(() => {
      let e11 = ty.current;
      e11 && rc.current !== tT && (e11.scrollTop = Math.round(e11.scrollTop * tT / rc.current)), rc.current = tT;
    }, [tT]), (0, o.useEffect)(
      () => () => {
        window.clearTimeout(tN.current), window.clearTimeout(tS.current);
      },
      []
    );
    let ru = (e11, t10) => {
      window.clearTimeout(tN.current), tu((r10) => ({ text: e11, n: (r10?.n ?? 0) + 1, action: t10 })), tm(e11), tN.current = window.setTimeout(() => tu(null), t10 ? 6e3 : 2400);
    }, rh = (e11) => {
      r2 || V2(e11), l2?.(e11);
    }, rm = (e11, t10) => {
      tk.current = [...tk.current.slice(-99), { rows: G2, range: t10 }], t_.current = [], tf({ past: tk.current.length, future: 0 }), rh(e11);
    }, rp = () => (z2 && ru("This grid is read only"), z2), rf = (e11, t10) => {
      if (z2) return 0;
      let r10 = /* @__PURE__ */ new Map(), a3 = 0;
      for (let { r: t11, c: l3, value: n3 } of e11) {
        let e12 = tD[l3], i2 = t8[t11];
        !(!i2 || !e12 || false === e12.editable || E(e12) && null !== n3 && "number" != typeof n3 || T(e12) && null !== n3 && !q(n3)) && (i2[e12.key] ?? null) !== n3 && ("" !== n3 || (i2[e12.key] ?? "") !== "") && (r10.set(i2.id, { ...r10.get(i2.id), [e12.key]: n3 }), a3++);
      }
      return a3 && rm(
        G2.map((e12) => r10.has(e12.id) ? { ...e12, ...r10.get(e12.id) } : e12),
        t10
      ), a3;
    }, rg = (0, o.useCallback)(
      (e11) => {
        let t10 = ty.current;
        if (!t10) return;
        let r10 = (tQ ? tQ[e11.r] ?? e11.r : e11.r) * tT, a3 = r10 + tT, l3 = t10.scrollTop, n3 = t10.scrollTop + t10.clientHeight - tR - tI;
        if (r10 < l3 ? t10.scrollTop = r10 : a3 > n3 && (t10.scrollTop = a3 - (t10.clientHeight - tR - tI)), e11.c < tF.pinCount)
          return;
        let i2 = tF.lefts[e11.c], o2 = i2 + tF.widths[e11.c];
        i2 - tF.pinEdge < t10.scrollLeft ? t10.scrollLeft = i2 - tF.pinEdge : o2 > t10.scrollLeft + t10.clientWidth && (t10.scrollLeft = o2 - t10.clientWidth);
      },
      [tF, tT, tR, tI, tQ]
    ), ry = (e11, t10 = e11, r10 = t10) => {
      e92({ anchor: e11, focus: t10 }), rg(r10);
    }, rx = () => tx.current?.focus({ preventScroll: true }), rv = (e11) => tn2((t10) => ({ range: e11, n: (t10?.n ?? 0) + 1 })), rb = (e11, t10, r10 = false) => {
      let a3 = tD[e11.c], l3 = t3(e11.r);
      if (!l3 || !a3 || rp()) return;
      if (false === a3.editable) return void ru(`${a3.label} is read only`);
      ry(e11), tM.current = false;
      let n3 = l3[a3.key];
      tt2({
        r: e11.r,
        c: e11.c,
        draft: t10 ?? (null == n3 ? "" : String(n3)),
        invalid: false,
        mode: void 0 === t10 ? "edit" : "enter",
        list: r10 || ("select" === a3.type || "date" === a3.type) && void 0 !== t10
      });
    }, rw = (e11) => {
      let t10 = [];
      if (rp()) return;
      for (let r11 = e11.r0; r11 <= e11.r1; r11++)
        for (let a3 = e11.c0; a3 <= e11.c1; a3++)
          t10.push({ r: r11, c: a3, value: R(tD[a3]) });
      let r10 = rf(t10, e11);
      ru(r10 ? `Cleared ${eY(r10, "cell")}` : "Nothing to clear");
    }, rk = () => {
      let e11 = tk.current.pop();
      e11 ? (t_.current.push({ rows: G2, range: e11.range }), tf({ past: tk.current.length, future: t_.current.length }), rh(e11.rows), e11.range && (e92({
        anchor: { r: e11.range.r0, c: e11.range.c0 },
        focus: { r: e11.range.r1, c: e11.range.c1 }
      }), rv(e11.range)), ru("Undone")) : ru("Nothing to undo");
    }, r_ = () => {
      let e11 = t_.current.pop();
      e11 ? (tk.current.push({ rows: G2, range: e11.range }), tf({ past: tk.current.length, future: t_.current.length }), rh(e11.rows), e11.range && (e92({
        anchor: { r: e11.range.r0, c: e11.range.c0 },
        focus: { r: e11.range.r1, c: e11.range.c1 }
      }), rv(e11.range)), ru("Redone")) : ru("Nothing to redo");
    }, rj = (e11) => {
      er2(e11), window.clearTimeout(tS.current), td(true), tS.current = window.setTimeout(() => td(false), 700);
      let r10 = e11.map(
        (e12) => `${t2.find((t10) => t10.key === e12.key)?.label ?? e12.key} ${"asc" === e12.dir ? "ascending" : "descending"}`
      );
      tm(
        r10.length ? `Sorted by ${r10.join(", then ")}` : "Original order restored"
      );
    }, rC = (e11, t10) => {
      let r10 = { ...ef2 };
      void 0 === t10 || "" === t10 ? delete r10[e11] : r10[e11] = t10, eg2(r10);
    }, r$ = () => {
      eg2({}), eA2(""), ru("Filters cleared");
    }, rN = (e11) => {
      (tA.has(e11) || !(tE <= 1)) && eb2(tA.has(e11) ? ev2.filter((t10) => t10 !== e11) : [...ev2, e11]);
    }, rS = (0, o.useCallback)(
      (e11) => eS2((t10) => {
        let r10 = new Set(t10);
        return r10.has(e11) ? r10.delete(e11) : r10.add(e11), r10;
      }),
      []
    ), rM = (e11, t10, r10) => {
      let a3 = !rr.has(e11), l3 = new Set(rr);
      if (r10 && null !== t$.current) {
        let [e12, r11] = [Math.min(t$.current, t10), Math.max(t$.current, t10)];
        for (let t11 = e12; t11 <= r11; t11++) {
          let e13 = t3(t11);
          e13 && (a3 ? l3.add(e13.id) : l3.delete(e13.id));
        }
      } else a3 ? l3.add(e11) : l3.delete(e11);
      t$.current = t10, rD(l3);
    }, [rA, rL] = (0, o.useState)(() => /* @__PURE__ */ new Map()), rD = (e11) => {
      if (!z2) return void ex2(G2.filter((t11) => e11.has(t11.id)).map((e12) => e12.id));
      let t10 = new Map([...rA].filter(([t11]) => e11.has(t11)));
      for (let r10 of t4.blocks.values())
        for (let a3 of r10) e11.has(a3.id) && t10.set(a3.id, a3);
      rL(t10), ex2([...e11]);
    }, [rE, rT] = (0, o.useMemo)(() => {
      if (!rr.size || !tZ.length) return [false, false];
      let e11 = tZ.every((e12) => rr.has(e12.id));
      return [e11, !e11 && tZ.some((e12) => rr.has(e12.id))];
    }, [tZ, rr]), rR = (0, o.useMemo)(
      () => z2 ? ey2.flatMap((e11) => {
        let t10 = rA.get(e11);
        return t10 ? [t10] : [];
      }) : G2.filter((e11) => rr.has(e11.id)),
      [z2, ey2, rA, G2, rr]
    ), rI = (0, o.useRef)({ toggleRow: rM, undo: rk });
    (0, o.useLayoutEffect)(() => {
      rI.current = { toggleRow: rM, undo: rk };
    });
    let rU = (0, o.useCallback)((e11, t10, r10) => rI.current.toggleRow(e11, t10, r10), []), rF = (e11, t10 = false, r10 = false) => {
      let a3 = t10 ? [tD.slice(e11.c0, e11.c1 + 1).map((e12) => e12.label)] : [];
      for (let t11 = e11.r0; t11 <= e11.r1; t11++) {
        let l3 = [];
        for (let a4 = e11.c0; a4 <= e11.c1; a4++) {
          let e12 = t3(t11)?.[tD[a4].key];
          l3.push(r10 ? K(e12, tD[a4]) : null == e12 ? "" : String(e12));
        }
        a3.push(l3);
      }
      return a3;
    }, rP = (e11, t10) => [
      tD.map((e12) => e12.label),
      ...e11.map(
        (e12) => tD.map((r10) => t10 ? K(e12[r10.key], r10) : String(e12[r10.key] ?? ""))
      )
    ], rz = async () => {
      ru(
        await ed(ei(rP(rR, false)), eo(rP(rR, true))) ? `Copied ${eY(rR.length, "row")}` : "Copy failed. Your browser blocked the clipboard"
      );
    }, rq = F2?.length ? F2 : ["csv"], rW = (e11, r10, a3 = false) => {
      let l3 = L2 ?? (n2.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "data");
      if ("xlsx" === e11) {
        let e12 = (r11) => {
          let a4 = t2.find((e13) => e13.key === r11.key), l4 = a4 ? K(r11.value, a4) : String(r11.value ?? "");
          return {
            label: `${a4?.label ?? r11.key}: ${l4 || "Empty"}`,
            children: r11.children ? r11.children.map(e12) : r11.ids.flatMap((e13) => {
              let t10 = tX.get(e13);
              return t10 ? [t10] : [];
            })
          };
        };
        es(
          `${l3}.xlsx`,
          (function(e13, t10, r11 = {}) {
            let a4, l4, n3 = (a4 = [], l4 = [
              { fmt: 0, bold: false },
              { fmt: 0, bold: true }
            ], {
              get: (e14, t11) => {
                let r12 = 0;
                if (e14) {
                  let t12 = a4.indexOf(e14);
                  t12 < 0 && (a4.push(e14), t12 = a4.length - 1), r12 = 164 + t12;
                }
                let n4 = l4.findIndex((e15) => e15.fmt === r12 && e15.bold === t11);
                return n4 < 0 && (l4.push({ fmt: r12, bold: t11 }), n4 = l4.length - 1), n4;
              },
              xml: () => `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">${a4.length ? `<numFmts count="${a4.length}">${a4.map((e14, t11) => `<numFmt numFmtId="${164 + t11}" formatCode="${ec(e14)}"/>`).join("")}</numFmts>` : ""}<fonts count="2"><font><sz val="11"/><name val="Calibri"/><family val="2"/></font><font><b/><sz val="11"/><name val="Calibri"/><family val="2"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="${l4.length}">${l4.map((e14) => `<xf numFmtId="${e14.fmt}" fontId="${+!!e14.bold}" fillId="0" borderId="0" xfId="0"${e14.fmt ? ' applyNumberFormat="1"' : ""}${e14.bold ? ' applyFont="1"' : ""}/>`).join("")}</cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`
            }), i2 = (function(e14, t11, r12, a5) {
              let l5 = [], n4 = 0, i3 = 0, o3 = e14.map((e15) => el(e15)), s4 = (e15, t12, r13 = false) => `<c r="${e15}" t="inlineStr"${r13 ? ' s="1"' : ""}><is><t xml:space="preserve">${ec(t12)}</t></is></c>`, d3 = (t12, r13, l6, i4, s5) => {
                let d4 = e14[t12], c3 = o3[t12];
                if ("none" === c3 || l6 < r13) return "";
                let u4 = en(i4, d4, c3), h4 = null === u4 ? "" : `<v>${"percent" === d4.type && "count" !== c3 ? u4 / 100 : u4}</v>`, m3 = `${eu(t12)}${r13}:${eu(t12)}${l6}`;
                return `<c r="${eu(t12)}${n4}" s="${a5.get(em(d4, c3), s5)}"><f>SUBTOTAL(${eh[c3]},${m3})</f>${h4}</c>`;
              }, c2 = (e15) => Array.isArray(e15.children) ? e15.children.flatMap(c2) : [e15], u3 = (e15, t12 = "") => `<row r="${n4}"${t12}>${e15}</row>`;
              n4 = 1, l5.push(
                u3(e14.map((e15, t12) => s4(`${eu(t12)}1`, e15.label, true)).join(""))
              );
              let h3 = (t12, r13) => {
                if (!Array.isArray(t12.children)) {
                  n4++, l5.push(
                    u3(
                      e14.map(
                        (r14, l6) => ((t13, r15) => {
                          let l7 = e14[t13], i4 = `${eu(t13)}${n4}`, o5 = r15[l7.key];
                          if (null == o5 || "" === o5) return "";
                          if ("number" == typeof o5 && Number.isFinite(o5))
                            return `<c r="${i4}" s="${a5.get(E(l7) ? em(l7) : null, false)}"><v>${"percent" === l7.type ? o5 / 100 : o5}</v></c>`;
                          if (T(l7) && q(o5))
                            return `<c r="${i4}" s="${a5.get(em(l7), false)}"><v>${Date.UTC(+o5.slice(0, 4), o5.slice(5, 7) - 1, +o5.slice(8, 10)) / 864e5 + 25569}</v></c>`;
                          return s4(i4, String(o5));
                        })(l6, t12)
                      ).join(""),
                      r13 ? ` outlineLevel="${Math.min(7, r13)}"` : ""
                    )
                  );
                  return;
                }
                i3 = Math.max(i3, r13 + 1), n4++;
                let o4 = l5.length, m3 = n4;
                l5.push(""), t12.children.forEach((e15) => h3(e15, r13 + 1));
                let p3 = n4, f4 = n4, g4 = c2(t12);
                n4 = m3;
                let y3 = e14.map(
                  (e15, r14) => 0 === r14 ? s4(`A${m3}`, t12.label, true) : d3(r14, m3 + 1, p3, g4, true)
                ).join("");
                l5[o4] = u3(
                  y3,
                  r13 ? ` outlineLevel="${Math.min(7, r13)}"` : ""
                ), n4 = f4;
              };
              t11.forEach((e15) => h3(e15, 0));
              let m2 = n4;
              if (false !== r12.totals && e14.some((e15, t12) => "none" !== o3[t12])) {
                n4++;
                let r13 = t11.flatMap(c2);
                l5.push(
                  u3(
                    e14.map(
                      (e15, t12) => 0 === t12 && "none" === o3[0] ? s4(`A${n4}`, "Total", true) : d3(t12, 2, m2, r13, true)
                    ).join("")
                  )
                );
              }
              let p2 = e14.map((e15) => r12.widths?.[e15.key] ?? e15.width ?? 140), f3 = `<cols>${p2.map((e15, t12) => `<col min="${t12 + 1}" max="${t12 + 1}" width="${Math.max(4, Math.round(e15 / 7 * 100) / 100)}" customWidth="1"/>`).join("")}</cols>`, g3 = Math.max(
                0,
                Math.min(e14.length - 1, r12.freezeColumns ?? 0)
              ), y2 = `${eu(g3)}2`, x2 = `<pane${g3 ? ` xSplit="${g3}"` : ""} ySplit="1" topLeftCell="${y2}" activePane="${g3 ? "bottomRight" : "bottomLeft"}" state="frozen"/><selection pane="${g3 ? "bottomRight" : "bottomLeft"}" activeCell="${y2}" sqref="${y2}"/>`, v2 = `A1:${eu(Math.max(0, e14.length - 1))}${Math.max(1, n4)}`;
              return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheetPr><outlinePr summaryBelow="0"/></sheetPr><dimension ref="${v2}"/><sheetViews><sheetView workbookViewId="0">${x2}</sheetView></sheetViews><sheetFormatPr defaultRowHeight="15"${i3 ? ` outlineLevelRow="${Math.min(7, i3)}"` : ""}/>${f3}<sheetData>${l5.join("")}</sheetData></worksheet>`;
            })(e13, t10, r11, n3), o2 = ec(
              (r11.sheetName ?? "Sheet1").replace(/[:\\/?*[\]]/g, " ").slice(0, 31).trim() || "Sheet1"
            ), s3 = new TextEncoder(), d2 = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
            return (function(e14) {
              let t11 = new TextEncoder(), r12 = [], a5 = [], l5 = 0;
              for (let n5 of e14) {
                let e15 = t11.encode(n5.name), i4 = (function(e16) {
                  if (!ep) {
                    ep = new Uint32Array(256);
                    for (let e17 = 0; e17 < 256; e17++) {
                      let t13 = e17;
                      for (let e18 = 0; e18 < 8; e18++)
                        t13 = 1 & t13 ? 3988292384 ^ t13 >>> 1 : t13 >>> 1;
                      ep[e17] = t13 >>> 0;
                    }
                  }
                  let t12 = 4294967295;
                  for (let r13 = 0; r13 < e16.length; r13++)
                    t12 = ep[(t12 ^ e16[r13]) & 255] ^ t12 >>> 8;
                  return (4294967295 ^ t12) >>> 0;
                })(n5.data), o4 = n5.data.length, s5 = new DataView(new ArrayBuffer(30));
                s5.setUint32(0, 67324752, true), s5.setUint16(4, 20, true), s5.setUint16(6, 2048, true), s5.setUint16(8, 0, true), s5.setUint16(10, 0, true), s5.setUint16(12, 33, true), s5.setUint32(14, i4, true), s5.setUint32(18, o4, true), s5.setUint32(22, o4, true), s5.setUint16(26, e15.length, true), s5.setUint16(28, 0, true), r12.push(new Uint8Array(s5.buffer), e15, n5.data);
                let d4 = new DataView(new ArrayBuffer(46));
                d4.setUint32(0, 33639248, true), d4.setUint16(4, 20, true), d4.setUint16(6, 20, true), d4.setUint16(8, 2048, true), d4.setUint16(10, 0, true), d4.setUint16(12, 0, true), d4.setUint16(14, 33, true), d4.setUint32(16, i4, true), d4.setUint32(20, o4, true), d4.setUint32(24, o4, true), d4.setUint16(28, e15.length, true), d4.setUint32(42, l5, true), a5.push(new Uint8Array(d4.buffer), e15), l5 += 30 + e15.length + o4;
              }
              let n4 = a5.reduce((e15, t12) => e15 + t12.length, 0), i3 = new DataView(new ArrayBuffer(22));
              i3.setUint32(0, 101010256, true), i3.setUint16(8, e14.length, true), i3.setUint16(10, e14.length, true), i3.setUint32(12, n4, true), i3.setUint32(16, l5, true);
              let o3 = [...r12, ...a5, new Uint8Array(i3.buffer)], s4 = new Uint8Array(o3.reduce((e15, t12) => e15 + t12.length, 0)), d3 = 0;
              for (let e15 of o3) s4.set(e15, d3), d3 += e15.length;
              return s4;
            })([
              {
                name: "[Content_Types].xml",
                data: s3.encode(
                  `${d2}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`
                )
              },
              {
                name: "_rels/.rels",
                data: s3.encode(
                  `${d2}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`
                )
              },
              {
                name: "xl/workbook.xml",
                data: s3.encode(
                  `${d2}<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${o2}" sheetId="1" r:id="rId1"/></sheets></workbook>`
                )
              },
              {
                name: "xl/_rels/workbook.xml.rels",
                data: s3.encode(
                  `${d2}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`
                )
              },
              { name: "xl/worksheets/sheet1.xml", data: s3.encode(i2) },
              { name: "xl/styles.xml", data: s3.encode(n3.xml()) }
            ]);
          })(tD, a3 && tG.groups ? tG.groups.map(e12) : r10, {
            sheetName: n2,
            freezeColumns: tF.pinCount,
            totals: M2,
            widths: Object.fromEntries(
              tD.map((e13, t10) => [e13.key, tF.widths[t10] ?? e13.width ?? 140])
            )
          }),
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
      } else
        es(
          `${l3}.csv`,
          (function(e12, t10) {
            let r11 = (e13) => /[",\n\r]/.test(e13) ? `"${e13.replace(/"/g, '""')}"` : e13, a4 = [e12.map((e13) => r11(e13.label)).join(",")];
            for (let l4 of t10)
              a4.push(
                e12.map((e13) => {
                  let t11 = l4[e13.key];
                  return r11(null == t11 ? "" : String(t11));
                }).join(",")
              );
            return "\uFEFF" + a4.join("\r\n");
          })(tD, r10),
          "text/csv;charset=utf-8"
        );
      ru(`Exported ${eY(r10.length, "row")}`);
    }, rO = (0, o.useRef)(null);
    (0, o.useEffect)(() => {
      let e11 = (rd.r1 - rd.r0 + 1) * (rd.c1 - rd.c0 + 1), t10 = (e12) => {
        e12.preventDefault(), e12.clipboardData?.setData("text/plain", ei(rF(rd))), e12.clipboardData?.setData("text/html", eo(rF(rd, false, true)));
      };
      rO.current = {
        copy: (r10) => {
          t9 && (t10(r10), rv(rd), ru(`Copied ${eY(e11, "cell")}`));
        },
        cut: (e12) => {
          if (t9) {
            if (z2) {
              e12.preventDefault(), rp();
              return;
            }
            t10(e12), rw(rd);
          }
        },
        paste: (e12) => {
          if (!t9) return;
          let t11 = e12.clipboardData?.getData("text/html") ?? "", r10 = e12.clipboardData?.getData("text/plain") ?? "", a3 = t11 && (function(e13) {
            if ("u" < typeof DOMParser || !/<table/i.test(e13)) return null;
            let t12 = new DOMParser().parseFromString(e13, "text/html").querySelector("table");
            if (!t12) return null;
            let r11 = [];
            return t12.querySelectorAll("tr").forEach((e14) => {
              let t13 = [];
              e14.querySelectorAll("td, th").forEach((e15) => {
                e15.querySelectorAll("br").forEach((e16) => e16.replaceWith("\n")), t13.push(
                  (e15.textContent ?? "").replace(/\u00a0/g, " ").trim()
                );
                let r12 = Number(e15.getAttribute("colspan") ?? 1);
                for (let e16 = 1; e16 < r12; e16++) t13.push("");
              }), r11.push(t13);
            }), r11.length ? r11 : null;
          })(t11) || (r10 ? (function(e13) {
            let t12 = [], r11 = [], a4 = "", l3 = false, n3 = 0, i2 = e13.replace(/\r\n?/g, "\n").replace(/\n$/, "");
            for (; n3 < i2.length; ) {
              let e14 = i2[n3];
              if (l3) {
                if ('"' === e14 && '"' === i2[n3 + 1]) {
                  a4 += '"', n3 += 2;
                  continue;
                }
                if ('"' === e14) {
                  l3 = false, n3++;
                  continue;
                }
                a4 += e14, n3++;
                continue;
              }
              if ('"' === e14 && "" === a4) {
                l3 = true, n3++;
                continue;
              }
              if ("	" === e14) {
                r11.push(a4), a4 = "", n3++;
                continue;
              }
              if ("\n" === e14) {
                r11.push(a4), t12.push(r11), r11 = [], a4 = "", n3++;
                continue;
              }
              a4 += e14, n3++;
            }
            return r11.push(a4), t12.push(r11), t12;
          })(r10) : null);
          a3?.length && (e12.preventDefault(), ((e13) => {
            if (rp()) return;
            let t12 = e13.length, r11 = Math.max(...e13.map((e14) => e14.length)), a4 = rd.r1 - rd.r0 + 1, l3 = rd.c1 - rd.c0 + 1, n3 = (a4 > t12 || l3 > r11) && a4 % t12 == 0 && l3 % r11 == 0, i2 = n3 ? a4 : Math.min(t12, t9 - rd.r0), o2 = n3 ? l3 : Math.min(r11, tE - rd.c0), s3 = [], d2 = 0;
            for (let a5 = 0; a5 < i2; a5++)
              for (let l4 = 0; l4 < o2; l4++) {
                let n4 = e13[a5 % t12]?.[l4 % r11] ?? "", i3 = tD[rd.c0 + l4], o3 = Y(n4, i3, tz.get(i3.key));
                o3.ok ? s3.push({ r: rd.r0 + a5, c: rd.c0 + l4, value: o3.value }) : d2++;
              }
            let c2 = {
              r0: rd.r0,
              c0: rd.c0,
              r1: rd.r0 + i2 - 1,
              c1: rd.c0 + o2 - 1
            }, u3 = rf(s3, c2);
            e92({
              anchor: { r: c2.r0, c: c2.c0 },
              focus: { r: c2.r1, c: c2.c1 }
            }), rv(c2), ru(
              `Pasted ${eY(u3, "cell")}${d2 ? `, skipped ${d2} that did not fit` : ""}${!n3 && (t12 > i2 || r11 > o2) ? ". Some cells fell outside the grid" : ""}`
            );
          })(a3));
        }
      };
    }), (0, o.useEffect)(() => {
      let e11 = (e12) => {
        document.activeElement === tx.current && rO.current?.copy(e12);
      }, t10 = (e12) => {
        document.activeElement === tx.current && rO.current?.cut(e12);
      }, r10 = (e12) => {
        document.activeElement === tx.current && rO.current?.paste(e12);
      };
      return document.addEventListener("copy", e11), document.addEventListener("cut", t10), document.addEventListener("paste", r10), () => {
        document.removeEventListener("copy", e11), document.removeEventListener("cut", t10), document.removeEventListener("paste", r10);
      };
    }, []);
    let rB = (e11, t10) => {
      let r10 = ty.current, a3 = tv.current;
      if (!r10 || !a3 || !t9 || !tE) return null;
      let l3 = r10.getBoundingClientRect(), n3 = a3.getBoundingClientRect(), i2 = (0, D.q)(Math.floor((t10 - n3.top) / tT), 0, Math.max(0, re - 1)), o2 = (0, D.q)(tJ ? tJ.lineRow[i2] ?? 0 : i2, 0, t9 - 1), s3 = e11 - l3.left;
      if (s3 < tF.pinEdge) {
        if (s3 < tF.lead) return { r: o2, c: 0, gutter: true };
        for (let e12 = 0; e12 < tF.pinCount; e12++)
          if (s3 < tF.lefts[e12] + tF.widths[e12])
            return { r: o2, c: e12, gutter: false };
      }
      let d2 = e11 - n3.left, c2 = tE - 1;
      for (let e12 = tF.pinCount; e12 < tE; e12++)
        if (d2 < tF.lefts[e12] + tF.widths[e12]) {
          c2 = e12;
          break;
        }
      return {
        r: o2,
        c: Math.max(Math.min(tF.pinCount, tE - 1), c2),
        gutter: false
      };
    }, rH = (e11, t10) => {
      let r10 = tj.current;
      if (!r10) return;
      let a3 = rB(e11, t10);
      if (a3)
        if ("rows" === r10.mode)
          e92(
            (e12) => e12.focus.r === a3.r ? e12 : {
              anchor: { ...e12.anchor, c: 0 },
              focus: { r: a3.r, c: tE - 1 }
            }
          );
        else if ("select" === r10.mode)
          e92(
            (e12) => e12.focus.r === a3.r && e12.focus.c === a3.c ? e12 : { ...e12, focus: { r: a3.r, c: a3.c } }
          );
        else {
          var l3;
          let e12, t11;
          ta2(
            (l3 = r10.range, e12 = a3.r > l3.r1 ? a3.r - l3.r1 : a3.r < l3.r0 ? a3.r - l3.r0 : 0, t11 = a3.c > l3.c1 ? a3.c - l3.c1 : a3.c < l3.c0 ? a3.c - l3.c0 : 0, e12 || t11 ? Math.abs(e12) >= Math.abs(t11) ? { ...l3, r0: Math.min(l3.r0, a3.r), r1: Math.max(l3.r1, a3.r) } : { ...l3, c0: Math.min(l3.c0, a3.c), c1: Math.max(l3.c1, a3.c) } : null)
          );
        }
    }, rV = () => {
      let e11 = tj.current, t10 = ty.current;
      if (!e11 || !t10) return;
      let r10 = t10.getBoundingClientRect(), { x: a3, y: l3 } = e11.pointer, n3 = (e12) => Math.sign(e12) * Math.min(28, 0.35 * Math.abs(e12)), i2 = l3 > r10.bottom - tI - 8 ? n3(l3 - r10.bottom + tI + 8) : l3 < r10.top + tR ? n3(l3 - r10.top - tR) : 0, o2 = a3 > r10.right - 8 ? n3(a3 - r10.right + 8) : a3 < r10.left + tF.pinEdge && t10.scrollLeft > 0 && "rows" !== e11.mode ? n3(a3 - r10.left - tF.pinEdge) : 0;
      (o2 || i2) && (t10.scrollTop += i2, t10.scrollLeft += o2, rH(a3, l3)), e11.frame = requestAnimationFrame(rV);
    }, rK = () => {
      tC.current = null;
      let e11 = tj.current;
      if (!e11 || (cancelAnimationFrame(e11.frame), tj.current = null, "fill" !== e11.mode) || (ta2(null), !tr2))
        return;
      let t10 = e11.range, r10 = [], a3 = (e12, t11) => t8[e12]?.[tD[t11].key] ?? null;
      if (tr2.r0 !== t10.r0 || tr2.r1 !== t10.r1) {
        let e12 = tr2.r1 > t10.r1, l4 = e12 ? tr2.r1 - t10.r1 : t10.r0 - tr2.r0;
        for (let n4 = t10.c0; n4 <= t10.c1; n4++)
          X(
            Array.from({ length: t10.r1 - t10.r0 + 1 }, (e13, r11) => a3(t10.r0 + r11, n4)),
            l4,
            e12,
            tD[n4]?.type
          ).forEach(
            (a4, l5) => r10.push({ r: e12 ? t10.r1 + 1 + l5 : t10.r0 - 1 - l5, c: n4, value: a4 })
          );
      } else {
        let e12 = tr2.c1 > t10.c1, l4 = e12 ? tr2.c1 - t10.c1 : t10.c0 - tr2.c0;
        for (let n4 = t10.r0; n4 <= t10.r1; n4++)
          X(
            Array.from({ length: t10.c1 - t10.c0 + 1 }, (e13, r11) => a3(n4, t10.c0 + r11)),
            l4,
            e12
          ).forEach(
            (a4, l5) => r10.push({ r: n4, c: e12 ? t10.c1 + 1 + l5 : t10.c0 - 1 - l5, value: a4 })
          );
      }
      let l3 = tr2.r1 > t10.r1 ? { ...tr2, r0: t10.r1 + 1 } : tr2.r0 < t10.r0 ? { ...tr2, r1: t10.r0 - 1 } : tr2.c1 > t10.c1 ? { ...tr2, c0: t10.c1 + 1 } : { ...tr2, c1: t10.c0 - 1 }, n3 = rf(r10, tr2);
      e92({ anchor: { r: tr2.r0, c: tr2.c0 }, focus: { r: tr2.r1, c: tr2.c1 } }), rv(l3), ru(n3 ? `Filled ${eY(n3, "cell")}` : "Nothing to fill");
    }, rG = Math.max(1, Math.floor(((eP2.h || s2) - tR - tI) / tT) - 1), { r0: rY, r1: rX, c0: rZ, c1: rJ } = rd, rQ = (0, o.useMemo)(() => {
      let e11 = 0, t10 = 0, r10 = 0, a3 = /* @__PURE__ */ new Set();
      for (let l4 = rY; l4 <= rX; l4++) {
        let n3 = z2 ? t4.blocks.get(Math.floor(l4 / t1))?.[l4 % t1] : t8[l4];
        if (n3)
          for (let l5 = rZ; l5 <= rJ; l5++) {
            let i2 = n3[tD[l5]?.key];
            null != i2 && "" !== i2 && r10++, "number" == typeof i2 && (e11 += i2, t10++, a3.add(tD[l5].type ?? "number"));
          }
      }
      let l3 = 1 === a3.size ? [...a3][0] : "number";
      return {
        sum: e11,
        count: t10,
        filled: r10,
        avg: t10 ? e11 / t10 : 0,
        prefix: "currency" === l3 ? "$" : "",
        suffix: "percent" === l3 ? "%" : ""
      };
    }, [rY, rX, rZ, rJ, t8, tD, z2, t4.blocks, t1]), r0 = t4.totals, r1 = (0, o.useMemo)(
      () => M2 ? tD.map((e11) => {
        let t10 = el(e11);
        return {
          kind: t10,
          value: z2 ? "none" === t10 ? null : r0?.[e11.key] ?? null : en(tZ, e11, t10)
        };
      }) : [],
      [tD, tZ, M2, z2, r0]
    ), r22 = Math.ceil((eP2.h || s2) / tT), r6 = Math.max(0, e62 - 6), r4 = Math.min(re, e62 + r22 + 6), r5 = [];
    for (let e11 = r6; e11 < r4; e11++) r5.push(e11);
    for (let e11 of [ro.r, rs.r, te2?.r ?? -1]) {
      let t10 = e11 >= 0 && e11 < t9 ? t0(e11) : -1;
      t10 >= 0 && (t10 < r6 || t10 >= r4) && !r5.includes(t10) && r5.push(t10);
    }
    let r7 = (0, o.useMemo)(() => {
      let e11 = tF.pinCount;
      if (!eP2.w)
        return { start: e11, end: tE, pinCount: e11, pinEdge: tF.pinEdge };
      let t10 = 64 * e72 + tF.pinEdge - 240, r10 = (e72 + 1) * 64 + eP2.w + 240, a3 = e11;
      for (; a3 < tE && (tF.lefts[a3] ?? 0) + (tF.widths[a3] ?? 0) < t10; ) a3++;
      let l3 = a3;
      for (; l3 < tE && (tF.lefts[l3] ?? 0) < r10; ) l3++;
      return { start: a3, end: l3, pinCount: e11, pinEdge: tF.pinEdge };
    }, [tF, eP2.w, e72, tE]), r8 = (0, o.useRef)(/* @__PURE__ */ new Map());
    (0, o.useEffect)(() => {
      let e11 = r8.current;
      return () => {
        e11.forEach((e12) => e12.abort()), e11.clear();
      };
    }, [t4.key, t4.source]);
    let r3 = Math.floor(r6 / t1), r9 = Math.floor(Math.max(r6, r4 - 1) / t1), ae = (0, o.useRef)(t4);
    (0, o.useLayoutEffect)(() => {
      ae.current = t4;
    });
    let at = (0, o.useRef)({ sort: et2, filters: tW, search: tO.trim() });
    (0, o.useLayoutEffect)(() => {
      at.current = { sort: et2, filters: tW, search: tO.trim() };
    }), (0, o.useEffect)(() => {
      if (!P2) return;
      let { key: e11, count: t10, blocks: r10 } = ae.current, a3 = [];
      if (null === t10) a3.push(0);
      else for (let e12 = r3; e12 <= r9 && e12 * t1 < t10; e12++) a3.push(e12);
      for (let t11 of a3) {
        let a4 = `${e11}${t11}`;
        if (r10.has(t11) || r8.current.has(a4)) continue;
        let l3 = new AbortController();
        r8.current.set(a4, l3), P2.getRows({
          start: t11 * t1,
          end: (t11 + 1) * t1,
          ...at.current,
          signal: l3.signal
        }).then(
          (r11) => {
            l3.signal.aborted || (r8.current.delete(a4), t5((a5) => {
              if (a5.key !== e11) return a5;
              let l4 = new Map(a5.blocks).set(t11, r11.rows);
              for (; l4.size > 40; ) {
                let e12 = t11;
                for (let r12 of l4.keys())
                  Math.abs(r12 - t11) > Math.abs(e12 - t11) && (e12 = r12);
                if (e12 === t11) break;
                l4.delete(e12);
              }
              return {
                ...a5,
                count: Math.max(0, r11.rowCount),
                blocks: l4,
                totals: r11.totals ?? a5.totals,
                failed: false
              };
            }));
          },
          () => {
            l3.signal.aborted || (r8.current.delete(a4), t5((t12) => t12.key === e11 ? { ...t12, failed: true } : t12), ru("Rows could not load"));
          }
        );
      }
    }, [P2, t4.key, t4.count, t4.blocks, r3, r9, t1]);
    let ar = eL2 ? 2 : 1, aa = null !== ti2, al = t9 ? `${B2}-${rs.r}-${rs.c}` : void 0, an = t7 ? 6 * tT : re ? re * tT : 176, ai = u2 && !h2, ao = te2 ? t3(te2.r) : void 0, as = te2 && tD[te2.c] && ao ? (0, i.jsx)(
      e4,
      {
        column: tD[te2.c],
        options: tz.get(tD[te2.c].key) ?? [],
        editing: te2,
        label: `${tD[te2.c].label} for ${String(ao[tD[0].key] ?? "")}`,
        openUp: (t0(te2.r) + 1) * tT + 220 > e62 * tT + (eP2.h || s2) - tR - tI && t0(te2.r) * tT > 220,
        onDraft: (e11) => tt2((t10) => t10 ? { ...t10, draft: e11, invalid: false } : t10),
        onCommit: (e11, t10) => {
          if (!te2 || tM.current) return;
          let r10 = tD[te2.c], a3 = t8[te2.r], l3 = Y(t10 ?? te2.draft, r10, tz.get(r10.key));
          if (!l3.ok) {
            if (e11) {
              tt2({
                ...te2,
                invalid: true,
                list: "select" === r10.type || "date" === r10.type
              }), tm(
                "select" === r10.type ? `Choose one of the ${r10.label} options` : T(r10) ? `${r10.label} needs a date like 2026-01-31` : `${r10.label} needs a number`
              );
              return;
            }
            tM.current = true, tt2(null);
            return;
          }
          tM.current = true, a3 && (a3[r10.key] ?? null) !== l3.value && (rf([{ r: te2.r, c: te2.c, value: l3.value }], {
            r0: te2.r,
            r1: te2.r,
            c0: te2.c,
            c1: te2.c
          }), tm(
            `${r10.label} for ${String(a3[tD[0].key] ?? "")} set to ${K(l3.value, r10) || "empty"}`
          )), tt2(null), e11 && (e11.dr || e11.dc) && ry({
            r: (0, D.q)(te2.r + e11.dr, 0, rn),
            c: (0, D.q)(te2.c + e11.dc, 0, ri)
          }), rx();
        },
        onCancel: () => {
          tM.current = true, tt2(null), rx();
        }
      },
      `${te2.r}-${te2.c}`
    ) : null, ad = u2 && ey2.length > 0, ac = `${rt.toLocaleString("en-US")}${rl && !z2 ? ` of ${G2.length.toLocaleString("en-US")}` : ""} ${1 === rt && !rl ? "row" : "rows"}`;
    return (0, i.jsxs)("div", {
      ref: tg,
      className: eT().root,
      "data-density": e_2,
      "data-row-numbers": ai ? "off" : void 0,
      style: { "--row-h": `${tT}px`, "--gutter-w": `${tU || 48}px` },
      children: [
        g2 && (0, i.jsx)("div", {
          className: eT().toolbar,
          children: (0, i.jsx)(p.N, {
            initial: false,
            children: ad ? (0, i.jsxs)(
              m.PY1.div,
              {
                className: eT().toolbarRow,
                "data-bulk": "",
                initial: O2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: "blur(2px)" },
                animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                exit: O2 ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(2px)" },
                transition: { duration: eH.standard, ease: eV.standard },
                children: [
                  (0, i.jsx)("button", {
                    type: "button",
                    className: eT().toolIcon,
                    "aria-label": "Clear row selection",
                    onClick: () => ex2([]),
                    children: (0, i.jsx)(y.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  }),
                  (0, i.jsxs)("span", {
                    className: eT().bulkCount,
                    children: [
                      (0, i.jsx)(S.q, { value: ey2.length }),
                      " selected"
                    ]
                  }),
                  (0, i.jsx)("span", { className: eT().toolSpacer }),
                  (0, i.jsxs)("button", {
                    type: "button",
                    className: eT().toolButton,
                    onClick: rz,
                    children: [
                      (0, i.jsx)(x.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)("span", {
                        className: eT().toolLabel,
                        children: "Copy"
                      })
                    ]
                  }),
                  (0, i.jsx)(ez, {
                    formats: rq,
                    onExport: (e11) => rW(e11, rR)
                  }),
                  A2?.map(
                    (e11) => (0, i.jsxs)(
                      "button",
                      {
                        type: "button",
                        className: eT().toolButton,
                        "data-tone": e11.tone,
                        onClick: () => e11.onAction(rR),
                        children: [
                          e11.icon,
                          (0, i.jsx)("span", {
                            className: eT().toolLabel,
                            children: e11.label
                          })
                        ]
                      },
                      e11.label
                    )
                  ),
                  W2 && (0, i.jsxs)("button", {
                    type: "button",
                    className: eT().toolButton,
                    "data-tone": "danger",
                    onClick: () => {
                      let e11 = rR.length;
                      rm(G2.filter((e12) => !rr.has(e12.id))), ex2([]), ru(`Deleted ${eY(e11, "row")}`, {
                        label: "Undo",
                        run: () => {
                          rI.current.undo(), rx();
                        }
                      });
                    },
                    children: [
                      (0, i.jsx)(v.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)("span", {
                        className: eT().toolLabel,
                        children: "Delete"
                      })
                    ]
                  })
                ]
              },
              "bulk"
            ) : (0, i.jsxs)(
              m.PY1.div,
              {
                className: eT().toolbarRow,
                initial: O2 ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(2px)" },
                animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                exit: O2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: "blur(2px)" },
                transition: { duration: eH.standard, ease: eV.standard },
                children: [
                  (0, i.jsxs)("label", {
                    className: eT().search,
                    children: [
                      (0, i.jsx)(b.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)("input", {
                        ref: tb,
                        value: eM2,
                        onChange: (e11) => eA2(e11.target.value),
                        placeholder: "Search",
                        "aria-label": `Search ${n2}`,
                        spellCheck: false,
                        onKeyDown: (e11) => {
                          "Escape" === e11.key ? eM2 ? eA2("") : rx() : ("Enter" === e11.key || "ArrowDown" === e11.key) && (e11.preventDefault(), rx());
                        }
                      }),
                      eM2 && (0, i.jsx)("button", {
                        type: "button",
                        className: eT().searchClear,
                        "aria-label": "Clear search",
                        onClick: () => {
                          eA2(""), tb.current?.focus();
                        },
                        children: (0, i.jsx)(y.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  }),
                  (0, i.jsx)("span", {
                    className: eT().rowCount,
                    "aria-live": "polite",
                    children: ac
                  }),
                  (0, i.jsx)("span", { className: eT().toolSpacer }),
                  (0, i.jsxs)("span", {
                    className: eT().toolGroup,
                    children: [
                      (0, i.jsx)("button", {
                        type: "button",
                        className: eT().toolIcon,
                        "aria-label": "Undo",
                        disabled: !tp.past,
                        onClick: () => {
                          rk(), rx();
                        },
                        children: (0, i.jsx)(w.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      }),
                      (0, i.jsx)("button", {
                        type: "button",
                        className: eT().toolIcon,
                        "aria-label": "Redo",
                        disabled: !tp.future,
                        onClick: () => {
                          r_(), rx();
                        },
                        children: (0, i.jsx)(k.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  }),
                  (0, i.jsxs)("button", {
                    type: "button",
                    className: eT().toolButton,
                    "aria-pressed": eL2,
                    "aria-label": "Filters",
                    onClick: () => eD2((e11) => !e11),
                    children: [
                      (0, i.jsx)(_.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)("span", {
                        className: eT().toolLabel,
                        children: "Filter"
                      }),
                      ra > 0 && (0, i.jsx)("span", {
                        className: eT().toolCount,
                        children: ra
                      })
                    ]
                  }),
                  (0, i.jsx)(eF, {
                    columns: t2,
                    hidden: tA,
                    pinned: tL,
                    onToggle: rN,
                    onShowAll: () => eb2([])
                  }),
                  (0, i.jsx)(eW, { density: e_2, onChange: ej2 }),
                  tB.length > 0 && (0, i.jsx)("button", {
                    type: "button",
                    className: eT().toolIcon,
                    "aria-label": eN2.size ? "Expand all groups" : "Collapse all groups",
                    onClick: () => {
                      let e11, t10, r10 = 0 === eN2.size;
                      eS2(
                        r10 ? new Set(
                          (e11 = [], t10 = (r11) => {
                            e11.push(r11.id), r11.children?.forEach(t10);
                          }, tG.groups?.forEach(t10), e11)
                        ) : /* @__PURE__ */ new Set()
                      ), tm(
                        r10 ? "Collapsed all groups" : "Expanded all groups"
                      );
                    },
                    children: eN2.size ? (0, i.jsx)(j.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }) : (0, i.jsx)(C.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  }),
                  !z2 && (0, i.jsx)(ez, {
                    formats: rq,
                    disabled: !tZ.length,
                    onExport: (e11) => rW(e11, tZ, true)
                  })
                ]
              },
              "tools"
            )
          })
        }),
        (0, i.jsx)("div", {
          ref: ty,
          className: eT().scroller,
          style: { maxHeight: s2 },
          onScroll: (e11) => {
            let t10 = e11.currentTarget;
            tw.set(t10.scrollLeft), tg.current?.toggleAttribute("data-scrolled-x", t10.scrollLeft > 0);
            let r10 = Math.max(0, Math.floor(t10.scrollTop / tT));
            r10 !== e62 && e52(r10);
            let a3 = Math.floor(t10.scrollLeft / 64);
            a3 !== e72 && e82(a3);
          },
          children: (0, i.jsxs)("div", {
            ref: tx,
            className: eT().grid,
            role: tJ ? "treegrid" : "grid",
            tabIndex: 0,
            "aria-label": n2,
            "aria-multiselectable": "true",
            "aria-busy": t7 || void 0,
            "aria-rowcount": re + ar + +!!M2,
            "aria-colcount": tE + +!!u2,
            "aria-activedescendant": te2 ? void 0 : al,
            onKeyDown: (e11) => {
              if (e11.target !== e11.currentTarget) return;
              let t10 = e11.metaKey || e11.ctrlKey, r10 = e11.key.toLowerCase();
              if (t10 && "z" === r10) {
                e11.preventDefault(), e11.shiftKey ? r_() : rk();
                return;
              }
              if (t10 && "y" === r10) {
                e11.preventDefault(), r_();
                return;
              }
              if (!t9) return;
              if (t10 && "a" === r10) {
                e11.preventDefault(), e92({
                  anchor: { r: 0, c: 0 },
                  focus: { r: t9 - 1, c: tE - 1 }
                }), tm(`Selected all ${eY(t9 * tE, "cell")}`);
                return;
              }
              if (t10 && "d" === r10) {
                if (e11.preventDefault(), rp()) return;
                if (rd.r0 === rd.r1)
                  return void ru("Select more than one row to fill down");
                let t11 = [];
                for (let e12 = rd.r0 + 1; e12 <= rd.r1; e12++)
                  for (let r12 = rd.c0; r12 <= rd.c1; r12++)
                    t11.push({
                      r: e12,
                      c: r12,
                      value: t8[rd.r0]?.[tD[r12].key] ?? null
                    });
                let r11 = rf(t11, rd);
                return rv({ ...rd, r0: rd.r0 + 1 }), void ru(
                  r11 ? `Filled down ${eY(r11, "cell")}` : "Nothing to fill"
                );
              }
              if (" " === e11.key && e11.shiftKey && u2) {
                e11.preventDefault(), ((e12, t11) => {
                  let r11 = [];
                  for (let a5 = e12; a5 <= t11; a5++) {
                    let e13 = t3(a5);
                    e13 && r11.push(e13.id);
                  }
                  let a4 = !r11.every((e13) => rr.has(e13)), l3 = new Set(rr);
                  r11.forEach((e13) => a4 ? l3.add(e13) : l3.delete(e13)), rD(l3), tm(
                    a4 ? `Checked ${eY(r11.length, "row")}` : `Unchecked ${eY(r11.length, "row")}`
                  );
                })(rd.r0, rd.r1);
                return;
              }
              if (" " === e11.key && e11.ctrlKey) {
                e11.preventDefault(), e92({
                  anchor: { r: 0, c: rd.c0 },
                  focus: { r: t9 - 1, c: rd.c1 }
                });
                return;
              }
              let a3 = {
                ArrowUp: [-1, 0],
                ArrowDown: [1, 0],
                ArrowLeft: [0, -1],
                ArrowRight: [0, 1],
                PageUp: [-rG, 0],
                PageDown: [rG, 0],
                Home: [0, -tE],
                End: [0, tE]
              };
              if (a3[e11.key]) {
                if (e11.altKey && "ArrowDown" === e11.key && tD[ro.c]?.type === "select") {
                  e11.preventDefault(), rb(ro, void 0, true);
                  return;
                }
                e11.preventDefault();
                let [r11, l3] = a3[e11.key], n3 = e11.shiftKey ? rs : ro, i2 = t10 && e11.key.startsWith("Arrow"), o2 = {
                  r: (0, D.q)(
                    i2 ? r11 < 0 ? 0 : r11 > 0 ? t9 - 1 : n3.r : n3.r + r11,
                    0,
                    t9 - 1
                  ),
                  c: (0, D.q)(
                    i2 ? l3 < 0 ? 0 : l3 > 0 ? tE - 1 : n3.c : n3.c + l3,
                    0,
                    tE - 1
                  )
                };
                t10 && ("Home" === e11.key || "End" === e11.key) && (o2.r = "Home" === e11.key ? 0 : t9 - 1), e11.shiftKey ? ry(ro, o2) : ry(o2);
                return;
              }
              if ("Enter" === e11.key || "F2" === e11.key) {
                e11.preventDefault(), rb(ro);
                return;
              }
              if ("Escape" === e11.key)
                return void (rd.r0 !== rd.r1 || rd.c0 !== rd.c1 ? (e11.preventDefault(), ry(ro)) : ey2.length && (e11.preventDefault(), ex2([]), tm("Cleared row selection")));
              if ("Delete" === e11.key || "Backspace" === e11.key) {
                e11.preventDefault(), rw(rd);
                return;
              }
              1 !== e11.key.length || t10 || e11.altKey || (e11.preventDefault(), rb(ro, e11.key));
            },
            style: { width: tF.total },
            children: [
              (0, i.jsxs)("div", {
                role: "rowgroup",
                className: eT().head,
                children: [
                  (0, i.jsxs)("div", {
                    role: "row",
                    "aria-rowindex": 1,
                    className: eT().headRow,
                    children: [
                      u2 && (0, i.jsx)("div", {
                        role: "columnheader",
                        "aria-colindex": 1,
                        className: eT().gutterHead,
                        children: !z2 && (0, i.jsx)(eI, {
                          checked: !!rE || !!rT && "mixed",
                          label: rE ? "Clear row selection" : "Select all rows",
                          onToggle: () => {
                            let e11 = new Set(rr);
                            tZ.forEach(
                              (t10) => rE ? e11.delete(t10.id) : e11.add(t10.id)
                            ), rD(e11), tm(
                              rE ? "Cleared row selection" : `Checked ${eY(tZ.length, "row")}`
                            );
                          },
                          tabbable: true
                        })
                      }),
                      eQ(tP, r7, (e11, r10, a3) => {
                        let l3, { column: n3 } = e11, o2 = et2.findIndex((e12) => e12.key === n3.key), s3 = o2 >= 0 ? et2[o2].dir : null, d2 = false !== n3.sortable;
                        return (0, i.jsxs)(
                          "div",
                          {
                            role: "columnheader",
                            "aria-colindex": r10 + (u2 ? 2 : 1),
                            "aria-sort": "asc" === s3 ? "ascending" : "desc" === s3 ? "descending" : void 0,
                            className: eT().headCell,
                            "data-pinned": e11.pinned || void 0,
                            "data-pin-edge": e11.edge || void 0,
                            "data-num": e11.numeric || void 0,
                            "data-selected": t9 > 0 && r10 >= rd.c0 && r10 <= rd.c1 || void 0,
                            "data-sorted": s3 ?? void 0,
                            style: a3,
                            children: [
                              (0, i.jsxs)("button", {
                                type: "button",
                                className: eT().sortButton,
                                disabled: !d2,
                                onClick: (e12) => {
                                  var t10, r11;
                                  let a4, l4;
                                  return t10 = n3.key, r11 = e12.shiftKey, l4 = (a4 = et2.find((e13) => e13.key === t10)) ? "asc" === a4.dir ? "desc" : null : "asc", void (r11 ? rj(
                                    a4 ? l4 ? et2.map(
                                      (e13) => e13.key === t10 ? { key: t10, dir: l4 } : e13
                                    ) : et2.filter((e13) => e13.key !== t10) : [...et2, { key: t10, dir: "asc" }]
                                  ) : rj(l4 ? [{ key: t10, dir: l4 }] : []));
                                },
                                onKeyDown: (e12) => {
                                  if (e12.altKey && ("ArrowLeft" === e12.key || "ArrowRight" === e12.key)) {
                                    let t10, a4;
                                    e12.preventDefault(), t10 = n3.key, a4 = "ArrowRight" === e12.key ? 16 : -16, eR2((e13) => ({
                                      ...e13,
                                      [t10]: (0, D.q)(
                                        (e13[t10] ?? tF.widths[r10]) + a4,
                                        tD[r10].minWidth ?? 72,
                                        560
                                      )
                                    }));
                                  }
                                },
                                "aria-label": `${n3.label}${s3 ? `, sorted ${"asc" === s3 ? "ascending" : "descending"}${et2.length > 1 ? `, priority ${o2 + 1}` : ""}` : ""}. ${d2 ? "Sort, shift to add a sort key. " : ""}Alt and arrow keys resize`,
                                children: [
                                  (0, i.jsx)("span", {
                                    className: eT().headLabel,
                                    children: n3.label
                                  }),
                                  d2 && (0, i.jsxs)("span", {
                                    className: eT().sortIcon,
                                    "data-dir": s3 ?? void 0,
                                    "aria-hidden": "true",
                                    children: [
                                      (0, i.jsx)($.A, {
                                        size: 14,
                                        strokeWidth: 1.75
                                      }),
                                      et2.length > 1 && o2 >= 0 && (0, i.jsx)("span", {
                                        className: eT().sortOrder,
                                        children: o2 + 1
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, i.jsx)(eU, {
                                column: n3,
                                sorted: s3,
                                pinned: e11.pinned,
                                canHide: tE > 1,
                                onSort: (e12) => rj(
                                  e12 ? [{ key: n3.key, dir: e12 }] : et2.filter((e13) => e13.key !== n3.key)
                                ),
                                onFilter: false === n3.filterable ? null : () => {
                                  var e12;
                                  return e12 = n3.key, void (eD2(true), requestAnimationFrame(
                                    () => tg.current?.querySelector(
                                      `[data-filter-key="${CSS.escape(e12)}"]`
                                    )?.focus()
                                  ));
                                },
                                grouped: tB.includes(n3.key),
                                onGroup: !z2 && (n3.groupable ?? !E(n3)) ? () => {
                                  var e12;
                                  let r11;
                                  return e12 = n3.key, void (e$2(
                                    (r11 = !eC2.includes(e12)) ? [...eC2, e12] : eC2.filter((t10) => t10 !== e12)
                                  ), tm(
                                    `${r11 ? "Grouped by" : "Stopped grouping by"} ${t2.find((t10) => t10.key === e12)?.label ?? e12}`
                                  ));
                                } : null,
                                onPin: () => {
                                  var e12;
                                  return e12 = n3.key, void ek2(
                                    tL.has(e12) ? ew2.filter((t10) => t10 !== e12) : [...ew2, e12]
                                  );
                                },
                                onHide: () => rN(n3.key)
                              }),
                              (0, i.jsx)("div", {
                                className: eT().resizer,
                                "aria-hidden": "true",
                                "data-active": ti2 === n3.key || void 0,
                                onPointerDown: (l3 = n3.key, (e12) => {
                                  if (0 !== e12.button) return;
                                  e12.preventDefault(), e12.stopPropagation();
                                  let t10 = e12.currentTarget, a4 = e12.clientX, n4 = tF.widths[r10], i2 = tD[r10].minWidth ?? 72;
                                  t10.setPointerCapture(e12.pointerId), to2(l3);
                                  let o3 = (e13) => eR2((t11) => ({
                                    ...t11,
                                    [l3]: (0, D.q)(
                                      Math.round(n4 + e13.clientX - a4),
                                      i2,
                                      560
                                    )
                                  })), s4 = () => {
                                    to2(null), t10.removeEventListener(
                                      "pointermove",
                                      o3
                                    ), t10.removeEventListener("pointerup", s4), t10.removeEventListener(
                                      "pointercancel",
                                      s4
                                    );
                                  };
                                  t10.addEventListener("pointermove", o3), t10.addEventListener("pointerup", s4), t10.addEventListener("pointercancel", s4);
                                }),
                                onDoubleClick: () => eR2((e12) => ({
                                  ...e12,
                                  [n3.key]: n3.width ?? 140
                                }))
                              })
                            ]
                          },
                          n3.key
                        );
                      })
                    ]
                  }),
                  (0, i.jsx)(p.N, {
                    initial: false,
                    children: eL2 && (0, i.jsxs)(
                      m.PY1.div,
                      {
                        role: "row",
                        "aria-rowindex": 2,
                        className: eT().filterRow,
                        initial: { height: 40 * !!O2, opacity: 0 },
                        animate: { height: 40, opacity: 1 },
                        exit: {
                          height: 40 * !!O2,
                          opacity: 0,
                          transition: O2 ? { duration: eH.exit, ease: eV.standard } : {
                            height: eB.smooth,
                            opacity: { duration: eH.exit, ease: eV.exit }
                          }
                        },
                        transition: O2 ? { duration: eH.fast, ease: eV.standard } : {
                          height: eB.smooth,
                          opacity: {
                            duration: eH.fast,
                            ease: eV.standard
                          }
                        },
                        children: [
                          u2 && (0, i.jsx)("div", {
                            role: "gridcell",
                            "aria-colindex": 1,
                            className: eT().gutterHead,
                            children: rl && (0, i.jsx)("button", {
                              type: "button",
                              className: eT().clearFilters,
                              "aria-label": "Clear all filters",
                              onClick: r$,
                              children: (0, i.jsx)(N.A, {
                                size: 15,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            })
                          }),
                          eQ(tP, r7, (e11, t10, r10) => {
                            let { column: a3 } = e11, l3 = ef2[a3.key], n3 = T(a3), o2 = "string" == typeof l3 && (E(a3) ? "invalid" === J(l3) : n3 && "invalid" === Q(l3));
                            return (0, i.jsx)(
                              "div",
                              {
                                role: "gridcell",
                                "aria-colindex": t10 + (u2 ? 2 : 1),
                                className: eT().filterCell,
                                "data-pinned": e11.pinned || void 0,
                                "data-pin-edge": e11.edge || void 0,
                                style: r10,
                                children: false === a3.filterable ? null : "select" === a3.type ? (0, i.jsx)(eO, {
                                  column: a3,
                                  options: tq(a3),
                                  value: Array.isArray(l3) ? l3 : void 0,
                                  onChange: (e12) => rC(a3.key, e12)
                                }) : (0, i.jsx)("input", {
                                  className: eT().filterInput,
                                  "data-filter-key": a3.key,
                                  "data-num": e11.numeric || void 0,
                                  "data-active": ee(a3, l3) || void 0,
                                  "aria-invalid": o2 || void 0,
                                  value: "string" == typeof l3 ? l3 : "",
                                  spellCheck: false,
                                  autoComplete: "off",
                                  placeholder: e11.numeric ? "> 100, 10..50" : n3 ? "> 2026-01-31" : "Contains",
                                  "aria-label": `Filter ${a3.label}${e11.numeric ? ". Use > < = or a range like 10..50" : n3 ? ". Use a day, month, or year with > < =, or a range like 2026-01-01..2026-03-31" : ""}`,
                                  onChange: (e12) => rC(a3.key, e12.target.value),
                                  onKeyDown: (e12) => {
                                    "Escape" === e12.key ? (e12.preventDefault(), l3 ? rC(a3.key, void 0) : rx()) : ("Enter" === e12.key || "ArrowDown" === e12.key) && (e12.preventDefault(), rx());
                                  }
                                })
                              },
                              a3.key
                            );
                          })
                        ]
                      },
                      "filters"
                    )
                  })
                ]
              }),
              (0, i.jsxs)("div", {
                ref: tv,
                role: "rowgroup",
                className: eT().body,
                "data-moving": ts && !O2 || void 0,
                "data-any-checked": ey2.length > 0 || void 0,
                style: { height: an },
                onPointerDown: (e11) => {
                  if (0 !== e11.button || tj.current) return;
                  let t10 = e11.target;
                  if (t10.closest("input, [role=listbox], button, [data-group-row]"))
                    return;
                  let r10 = !!t10.closest("[data-fill-handle]"), a3 = rB(e11.clientX, e11.clientY);
                  if (a3) {
                    if ("touch" === e11.pointerType && !r10) {
                      tC.current = { cell: a3, id: e11.pointerId };
                      return;
                    }
                    e11.preventDefault(), rx(), e11.currentTarget.setPointerCapture(e11.pointerId), a3.gutter ? e92(
                      (t11) => e11.shiftKey ? {
                        anchor: { r: t11.anchor.r, c: 0 },
                        focus: { r: a3.r, c: tE - 1 }
                      } : {
                        anchor: { r: a3.r, c: 0 },
                        focus: { r: a3.r, c: tE - 1 }
                      }
                    ) : r10 || e92(
                      (t11) => e11.shiftKey ? { ...t11, focus: a3 } : { anchor: a3, focus: a3 }
                    ), tj.current = {
                      mode: r10 ? "fill" : a3.gutter ? "rows" : "select",
                      range: rd,
                      pointer: { x: e11.clientX, y: e11.clientY },
                      frame: 0
                    }, tj.current.frame = requestAnimationFrame(rV);
                  }
                },
                onPointerMove: (e11) => {
                  let t10 = tj.current;
                  t10 && (t10.pointer = { x: e11.clientX, y: e11.clientY }, rH(e11.clientX, e11.clientY));
                },
                onPointerUp: (e11) => {
                  let t10 = tC.current;
                  if (t10 && t10.id === e11.pointerId) {
                    tC.current = null;
                    let { cell: e12 } = t10;
                    return e12.gutter ? void ry({ r: e12.r, c: 0 }, { r: e12.r, c: tE - 1 }) : void (ro.r !== e12.r || ro.c !== e12.c || rd.r0 !== rd.r1 || rd.c0 !== rd.c1 || te2 ? (e92({ anchor: e12, focus: e12 }), rx()) : rb(e12));
                  }
                  rK();
                },
                onPointerCancel: rK,
                onDoubleClick: (e11) => {
                  if (e11.target.closest(
                    "input, button, [role=listbox], [data-fill-handle], [data-group-row]"
                  ))
                    return;
                  let t10 = rB(e11.clientX, e11.clientY);
                  t10 && !t10.gutter && rb(t10, void 0, true);
                },
                children: [
                  t7 && Array.from(
                    { length: 6 },
                    (e11, t10) => (0, i.jsxs)(
                      "div",
                      {
                        className: eT().row,
                        "aria-hidden": "true",
                        style: {
                          transform: `translateY(${t10 * tT}px)`,
                          width: tF.total
                        },
                        children: [
                          u2 && (0, i.jsx)("div", { className: eT().gutter }),
                          eQ(
                            tP,
                            r7,
                            (e12, r10, a3) => (0, i.jsx)(
                              "div",
                              {
                                className: eT().cell,
                                "data-num": e12.numeric || void 0,
                                "data-pinned": e12.pinned || void 0,
                                "data-pin-edge": e12.edge || void 0,
                                style: a3,
                                children: (0, i.jsx)("span", {
                                  className: eT().skeleton,
                                  style: {
                                    width: `${40 + (7 * t10 + e12.width) % 45}%`
                                  }
                                })
                              },
                              e12.column.key
                            )
                          )
                        ]
                      },
                      t10
                    )
                  ),
                  !t7 && r5.map((e11) => {
                    let r10 = e11 + ar + 1, a3 = e11 * tT, l3 = tJ?.groupAt.get(e11);
                    if (l3)
                      return (0, i.jsx)(
                        e2,
                        {
                          node: l3.node,
                          rows: l3.rows,
                          y: a3,
                          slots: tP,
                          win: r7,
                          ariaRow: r10,
                          gutter: u2,
                          column: t2.find((e12) => e12.key === l3.node.key),
                          collapsed: eN2.has(l3.node.id),
                          onToggle: rS
                        },
                        l3.node.id
                      );
                    let n3 = tJ ? tJ.lineRow[e11] ?? e11 : e11, o2 = t3(n3);
                    if (!o2)
                      return (0, i.jsx)(
                        e1,
                        { y: a3, slots: tP, win: r7, ariaRow: r10, gutter: u2 },
                        `pending-${e11}`
                      );
                    let s3 = n3 >= rd.r0 && n3 <= rd.r1;
                    return (0, i.jsx)(
                      e0,
                      {
                        row: o2,
                        r: n3,
                        y: a3,
                        slots: tP,
                        win: r7,
                        uid: B2,
                        ariaRow: r10,
                        level: tJ ? tB.length + 1 : void 0,
                        gutter: u2,
                        checked: rr.has(o2.id),
                        inRows: s3,
                        rangeC0: s3 ? rd.c0 : -1,
                        rangeC1: s3 ? rd.c1 : -1,
                        keepC: rs.r === n3 ? rs.c : -1,
                        editingC: te2?.r === n3 ? te2.c : -1,
                        editor: te2?.r === n3 ? as : null,
                        onToggle: rU
                      },
                      o2.id
                    );
                  }),
                  !t7 && 0 === re && (0, i.jsxs)("div", {
                    className: eT().empty,
                    style: { left: 0, width: eP2.w || "100%" },
                    children: [
                      (0, i.jsx)("p", {
                        className: eT().emptyTitle,
                        children: rl ? "No rows match" : U2
                      }),
                      rl && (0, i.jsxs)("button", {
                        type: "button",
                        className: eT().toolButton,
                        onClick: r$,
                        children: [
                          (0, i.jsx)(N.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          "Clear filters"
                        ]
                      })
                    ]
                  }),
                  t9 > 0 && tE > 0 && (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(eJ, {
                        className: eT().selection,
                        range: rd,
                        geo: tF,
                        rowH: tT,
                        lineOf: tQ,
                        scrollX: tw,
                        instant: aa,
                        "data-editing": te2 ? "" : void 0,
                        children: !te2 && !z2 && (0, i.jsx)("span", {
                          className: eT().fillHandle,
                          "data-fill-handle": ""
                        })
                      }),
                      (0, i.jsx)(eJ, {
                        className: eT().activeCell,
                        range: eG(ro, ro),
                        geo: tF,
                        rowH: tT,
                        lineOf: tQ,
                        scrollX: tw,
                        instant: aa
                      }),
                      tr2 && (0, i.jsx)(eJ, {
                        className: eT().fillPreview,
                        range: tr2,
                        geo: tF,
                        rowH: tT,
                        lineOf: tQ,
                        scrollX: tw
                      }),
                      (0, i.jsx)(p.N, {
                        children: tl2 && (0, i.jsx)(
                          m.PY1.div,
                          {
                            className: eT().washLayer,
                            initial: { opacity: 1 },
                            animate: { opacity: 0 },
                            transition: {
                              duration: O2 ? eH.standard : 0.9,
                              ease: "easeOut"
                            },
                            onAnimationComplete: () => tn2((e11) => e11?.n === tl2.n ? null : e11),
                            children: (0, i.jsx)(eJ, {
                              className: eT().wash,
                              range: {
                                r0: (0, D.q)(tl2.range.r0, 0, rn),
                                r1: (0, D.q)(tl2.range.r1, 0, rn),
                                c0: (0, D.q)(tl2.range.c0, 0, ri),
                                c1: (0, D.q)(tl2.range.c1, 0, ri)
                              },
                              geo: tF,
                              rowH: tT,
                              lineOf: tQ,
                              scrollX: tw,
                              instant: true
                            })
                          },
                          tl2.n
                        )
                      })
                    ]
                  })
                ]
              }),
              M2 && (0, i.jsx)("div", {
                role: "rowgroup",
                className: eT().foot,
                children: (0, i.jsxs)("div", {
                  role: "row",
                  "aria-rowindex": re + ar + 1,
                  className: eT().totalsRow,
                  children: [
                    u2 && (0, i.jsx)("div", {
                      role: "gridcell",
                      "aria-colindex": 1,
                      className: eT().gutterHead
                    }),
                    eQ(tP, r7, (e11, t10, r10) => {
                      let a3, l3 = r1[t10], n3 = 0 === t10 && l3?.kind === "none", o2 = l3?.value, s3 = null != o2 ? (a3 = Math.abs(o2)) >= 1e9 ? {
                        value: Math.round(o2 / 1e8) / 10,
                        unit: "B",
                        decimals: 1
                      } : a3 >= 1e6 ? {
                        value: Math.round(o2 / 1e5) / 10,
                        unit: "M",
                        decimals: 1
                      } : a3 >= 1e5 ? {
                        value: Math.round(o2 / 1e3),
                        unit: "K",
                        decimals: 0
                      } : {
                        value: Math.round(10 * o2) / 10,
                        unit: "",
                        decimals: +!Number.isInteger(
                          Math.round(10 * o2) / 10
                        )
                      } : null, d2 = (s3?.unit ?? "") + ("percent" === e11.column.type ? "%" : "");
                      return (0, i.jsx)(
                        "div",
                        {
                          role: "gridcell",
                          "aria-colindex": t10 + (u2 ? 2 : 1),
                          className: eT().totalCell,
                          "data-num": e11.numeric || void 0,
                          "data-pinned": e11.pinned || void 0,
                          "data-pin-edge": e11.edge || void 0,
                          style: r10,
                          "aria-label": n3 ? ac : s3 ? `${e11.column.label} ${eX[l3.kind].toLowerCase()} ${K(Math.round(100 * o2) / 100, { ...e11.column, decimals: "percent" === e11.column.type ? 1 : e11.column.decimals })}` : void 0,
                          children: n3 ? (0, i.jsx)("span", {
                            className: eT().totalLabel,
                            children: t7 ? "Loading" : ac
                          }) : s3 && (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)("span", {
                                className: eT().totalLabel,
                                "aria-hidden": "true",
                                children: eX[l3.kind]
                              }),
                              (0, i.jsx)("span", {
                                className: eT().totalValue,
                                "aria-hidden": "true",
                                children: (0, i.jsx)(S.q, {
                                  value: s3.value,
                                  decimals: s3.decimals,
                                  prefix: "currency" === e11.column.type ? "$" : "",
                                  suffix: d2
                                })
                              })
                            ]
                          })
                        },
                        e11.column.key
                      );
                    })
                  ]
                })
              })
            ]
          })
        }),
        (0, i.jsxs)("div", {
          className: eT().statusBar,
          "data-stats": f2 ? void 0 : "off",
          children: [
            f2 && (0, i.jsx)("span", {
              className: eT().address,
              "aria-label": t9 ? `Selection ${I(rd.c0)}${rd.r0 + 1}` : void 0,
              children: t9 ? `${I(rd.c0)}${rd.r0 + 1}${rd.r0 === rd.r1 && rd.c0 === rd.c1 ? "" : `:${I(rd.c1)}${rd.r1 + 1}`}` : "\u2013"
            }),
            f2 && t9 > 0 && (0, i.jsxs)("span", {
              className: eT().stats,
              children: [
                rQ.count > 1 && (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)("span", {
                      className: eT().stat,
                      children: [
                        (0, i.jsx)("span", {
                          className: eT().statLabel,
                          children: "Sum"
                        }),
                        (0, i.jsx)("span", {
                          className: eT().statValue,
                          children: (0, i.jsx)(S.q, {
                            value: Math.round(100 * rQ.sum) / 100,
                            prefix: rQ.prefix,
                            suffix: rQ.suffix,
                            decimals: 2 * !Number.isInteger(
                              Math.round(100 * rQ.sum) / 100
                            )
                          })
                        })
                      ]
                    }),
                    (0, i.jsxs)("span", {
                      className: eT().stat,
                      children: [
                        (0, i.jsx)("span", {
                          className: eT().statLabel,
                          children: "Average"
                        }),
                        (0, i.jsx)("span", {
                          className: eT().statValue,
                          children: (0, i.jsx)(S.q, {
                            value: Math.round(10 * rQ.avg) / 10,
                            prefix: rQ.prefix,
                            suffix: rQ.suffix,
                            decimals: +!Number.isInteger(
                              Math.round(10 * rQ.avg) / 10
                            )
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, i.jsxs)("span", {
                  className: eT().stat,
                  children: [
                    (0, i.jsx)("span", {
                      className: eT().statLabel,
                      children: "Count"
                    }),
                    (0, i.jsx)("span", {
                      className: eT().statValue,
                      children: (0, i.jsx)(S.q, { value: rQ.filled })
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)("span", {
              className: eT().status,
              children: (0, i.jsx)(p.N, {
                initial: false,
                children: tc && (0, i.jsxs)(
                  m.PY1.span,
                  {
                    className: eT().statusText,
                    initial: O2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: "blur(2px)" },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: O2 ? { opacity: 0 } : {
                      opacity: 0,
                      y: -6,
                      filter: "blur(2px)",
                      transition: { duration: eH.fast }
                    },
                    transition: { duration: eH.standard, ease: eV.standard },
                    children: [
                      (0, i.jsx)("span", {
                        "aria-hidden": "true",
                        children: tc.text
                      }),
                      tc.action && (0, i.jsx)("button", {
                        type: "button",
                        className: eT().statusAction,
                        onClick: () => {
                          let e11 = tc.action.run;
                          tu(null), e11();
                        },
                        children: tc.action.label
                      })
                    ]
                  },
                  tc.n
                )
              })
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: eT().srOnly,
          "aria-live": "polite",
          children: th
        })
      ]
    });
  }
  var e7 = r(12767), e8 = r.n(e7);
  let e3 = [
    "Discovery",
    "Proposal",
    "Negotiation",
    "Committed",
    "Closed won",
    "Closed lost"
  ], e9 = ["North America", "Europe", "Asia Pacific", "Latin America"], te = [
    {
      key: "account",
      label: "Account",
      width: 188,
      minWidth: 112,
      pinned: true
    },
    { key: "owner", label: "Owner", width: 148 },
    {
      key: "region",
      label: "Region",
      type: "select",
      options: e9,
      width: 144
    },
    { key: "stage", label: "Stage", type: "select", options: e3, width: 132 },
    { key: "seats", label: "Seats", type: "number", width: 96 },
    { key: "arr", label: "ARR", type: "currency", width: 128 },
    {
      key: "health",
      label: "Health",
      type: "percent",
      width: 104,
      minWidth: 84
    },
    { key: "renewal", label: "Renews", type: "date", width: 132 }
  ], tt = [
    "Northwind",
    "Lumen",
    "Cedar",
    "Brightline",
    "Harbor",
    "Pinecrest",
    "Atlas",
    "Summit",
    "Fieldstone",
    "Marigold",
    "Keystone",
    "Redwood",
    "Bluebird",
    "Copper Creek",
    "Silverline",
    "Oakridge",
    "Beacon",
    "Granite",
    "Riverbend",
    "Evergreen",
    "Lighthouse",
    "Meridian",
    "Sparrow",
    "Ironwood",
    "Juniper",
    "Halcyon",
    "Willow",
    "Crescent",
    "Tidewater",
    "Aspen",
    "Sterling",
    "Foxglove",
    "Clearwater",
    "Highland",
    "Larkspur",
    "Orchard",
    "Quarry",
    "Saltmarsh",
    "Thistle",
    "Vantage",
    "Wildflower",
    "Birchwood",
    "Coastal",
    "Driftwood",
    "Emberly",
    "Fairmont",
    "Goldcrest",
    "Hollow Pine",
    "Kestrel",
    "Moorland"
  ], tr = [
    "Freight",
    "Health",
    "Labs",
    "Credit Union",
    "Schools",
    "Robotics",
    "Outdoor",
    "Bank",
    "Foods",
    "Legal",
    "Analytics",
    "Travel",
    "Energy",
    "Logistics",
    "Dental",
    "Architects",
    "Studios",
    "Insurance",
    "Clinics",
    "Hotels",
    "Motors",
    "Pharma",
    "Security",
    "Capital",
    "Media",
    "Farms",
    "Aviation",
    "Brewing",
    "Marine",
    "Software",
    "Retail",
    "Partners",
    "Biotech",
    "Construction",
    "Realty",
    "Apparel",
    "Cloud",
    "Fitness",
    "Learning",
    "Water"
  ], ta = ["", " West", " East", " Europe", " Pacific"], tl = [
    "Emma Collins",
    "Marcus Johnson",
    "Ryan Sullivan",
    "Hannah Walsh",
    "Ava Mitchell",
    "Tyler Hayes",
    "Daniel Kim",
    "Priya Raman",
    "Sofia \xC1lvarez",
    "Noah Bennett",
    "Grace Liu",
    "Owen Park"
  ], tn = (a = 20260923, l = () => {
    let e10 = Math.imul((a = a + 1831565813 | 0) ^ a >>> 15, 1 | a);
    return (((e10 = e10 + Math.imul(e10 ^ e10 >>> 7, 61 | e10) ^ e10) ^ e10 >>> 14) >>> 0) / 4294967296;
  }, n = (e10) => e10[Math.floor(l() * e10.length)], Array.from({ length: 1e4 }, (e10, t2) => {
    let r2 = t2 % tt.length, a2 = Math.floor(t2 / tt.length) % tr.length, i2 = Math.floor(t2 / (tt.length * tr.length)) % ta.length, o2 = 5 * Math.round((10 + l() ** 2.4 * 790) / 5), s2 = n([240, 300, 360, 420]), d2 = Math.floor(12 * l()), c2 = 1 + Math.floor(28 * l());
    return {
      id: `acct-${t2 + 1}`,
      account: `${tt[r2]} ${tr[a2]}${ta[i2]}`,
      owner: n(tl),
      region: n(e9),
      stage: e3[Math.min(e3.length - 1, Math.floor(l() ** 1.3 * e3.length))],
      seats: o2,
      arr: o2 * s2,
      health: Math.round(35 + 64 * l()),
      renewal: `${d2 < 8 ? 2027 : 2026}-${String(d2 + 1).padStart(2, "0")}-${String(c2).padStart(2, "0")}`
    };
  }));
  function ti() {
    let [e10, t2] = (0, o.useState)(tn), r2 = e10 !== tn;
    return (0, i.jsxs)("div", {
      className: e8().stage,
      children: [
        (0, i.jsxs)("div", {
          className: e8().header,
          children: [
            (0, i.jsx)("div", {
              className: e8().titles,
              children: (0, i.jsx)("h3", {
                className: e8().title,
                children: "Renewals"
              })
            }),
            (0, i.jsxs)("button", {
              type: "button",
              className: e8().reset,
              onClick: () => t2(tn),
              disabled: !r2,
              children: [
                (0, i.jsx)(s.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Reset"
              ]
            })
          ]
        }),
        (0, i.jsx)(e5, {
          label: "Renewals",
          columns: te,
          rows: e10,
          onRowsChange: t2,
          maxHeight: 440,
          exportFileName: "renewals",
          exportFormats: ["csv", "xlsx"]
        })
      ]
    });
  }
  let to = ti;
};

__m(__module,__exports,__require);
});
A.reg(30707, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => r });
  var a = o(51811);
  let n = {
    name: "rows-2",
    size: 24,
    node: [
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }
      ],
      ["path", { d: "M3 12h18", key: "1i2n21" }]
    ],
    aliases: ["rows"]
  };
  n.node;
  let r = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(31458, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => i });
  var s = t(51811);
  let r = {
    name: "file-spreadsheet",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
          key: "1oefj6"
        }
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      ["path", { d: "M8 13h2", key: "yr2amv" }],
      ["path", { d: "M14 13h2", key: "un5t4a" }],
      ["path", { d: "M8 17h2", key: "2yhykz" }],
      ["path", { d: "M14 17h2", key: "10kma7" }]
    ]
  };
  r.node;
  let i = (0, s.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(40093, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, {
    Mz: () => Z,
    UC: () => H,
    ZL: () => q,
    bL: () => K,
    bm: () => Q,
    i3: () => U,
    l9: () => $
  });
  var r = n(12115), o = n(70379), a = n(47527), i = n(68599), s = n(19416), l = n(32007), u = n(69885), c = n(89971), d = n(80878), p = n(19040), f = n(83935), h = n(55897), b = n(42442), y = n(59322), v = n(22954), m = n(5174), _ = n(95155), g = Object.defineProperty, x = (e2, t2) => g(e2, "name", { value: t2, configurable: true }), j = "Popover", [C, P] = (0, i.A)(j, [d.Bk]), A = (0, d.Bk)(), [O, w] = C(j), k = x((e2) => {
    let {
      __scopePopover: t2,
      children: n2,
      open: o2,
      defaultOpen: a2,
      onOpenChange: i2,
      modal: s2 = false
    } = e2, l2 = A(t2), u2 = r.useRef(null), [p2, f2] = r.useState(false), [h2, b2] = (0, y.i)({
      prop: o2,
      defaultProp: a2 ?? false,
      onChange: i2,
      caller: j
    });
    return (0, _.jsx)(d.bL, {
      ...l2,
      children: (0, _.jsx)(O, {
        scope: t2,
        contentId: (0, c.B)(),
        triggerRef: u2,
        open: h2,
        onOpenChange: b2,
        onOpenToggle: r.useCallback(() => b2((e3) => !e3), [b2]),
        hasCustomAnchor: p2,
        onCustomAnchorAdd: r.useCallback(() => f2(true), []),
        onCustomAnchorRemove: r.useCallback(() => f2(false), []),
        modal: s2,
        children: n2
      })
    });
  }, "Popover"), R = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...o2 } = e2, a2 = w("PopoverAnchor", n2), i2 = A(n2), { onCustomAnchorAdd: s2, onCustomAnchorRemove: l2 } = a2;
      return r.useEffect(() => (s2(), () => l2()), [s2, l2]), (0, _.jsx)(d.Mz, { ...i2, ...o2, ref: t2 });
    }, "PopoverAnchor")
  ), N = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, i2 = w("PopoverTrigger", n2), s2 = A(n2), l2 = (0, a.s)(t2, i2.triggerRef), u2 = (0, _.jsx)(h.sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i2.open,
        "aria-controls": i2.open ? i2.contentId : void 0,
        "data-state": Y(i2.open),
        ...r2,
        ref: l2,
        onClick: (0, o.mK)(e2.onClick, i2.onOpenToggle)
      });
      return i2.hasCustomAnchor ? u2 : (0, _.jsx)(d.Mz, { asChild: true, ...s2, children: u2 });
    }, "PopoverTrigger")
  ), E = "PopoverPortal", [T, F] = C(E, { forceMount: void 0 }), M = x((e2) => {
    let { __scopePopover: t2, forceMount: n2, children: r2, container: o2 } = e2, a2 = w(E, t2);
    return (0, _.jsx)(T, {
      scope: t2,
      forceMount: n2,
      children: (0, _.jsx)(f.C, {
        present: n2 || a2.open,
        children: (0, _.jsx)(p.Z, { asChild: true, container: o2, children: r2 })
      })
    });
  }, "PopoverPortal"), L = "PopoverContent", D = r.forwardRef(
    x(function(e2, t2) {
      let n2 = F(L, e2.__scopePopover), { forceMount: r2 = n2.forceMount, ...o2 } = e2, a2 = w(L, e2.__scopePopover);
      return (0, _.jsx)(f.C, {
        present: r2 || a2.open,
        children: a2.modal ? (0, _.jsx)(I, { ...o2, ref: t2 }) : (0, _.jsx)(z, { ...o2, ref: t2 })
      });
    }, "PopoverContent")
  ), S = (0, b.TL)("PopoverContent.RemoveScroll"), I = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), i2 = r.useRef(null), s2 = (0, a.s)(t2, i2), l2 = r.useRef(false);
      return r.useEffect(() => {
        let e3 = i2.current;
        if (e3) return (0, v.Eq)(e3);
      }, []), (0, _.jsx)(m.A, {
        as: S,
        allowPinchZoom: true,
        children: (0, _.jsx)(B, {
          ...e2,
          ref: s2,
          trapFocus: n2.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, o.mK)(e2.onCloseAutoFocus, (e3) => {
            e3.preventDefault(), l2.current || n2.triggerRef.current?.focus();
          }),
          onPointerDownOutside: (0, o.mK)(
            e2.onPointerDownOutside,
            (e3) => {
              let t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
              l2.current = 2 === t3.button || n3;
            },
            { checkForDefaultPrevented: false }
          ),
          onFocusOutside: (0, o.mK)(
            e2.onFocusOutside,
            (e3) => e3.preventDefault(),
            { checkForDefaultPrevented: false }
          )
        })
      });
    }, "PopoverContentModal")
  ), z = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), o2 = r.useRef(false), a2 = r.useRef(false);
      return (0, _.jsx)(B, {
        ...e2,
        ref: t2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (t3) => {
          e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (o2.current || n2.triggerRef.current?.focus(), t3.preventDefault()), o2.current = false, a2.current = false;
        },
        onInteractOutside: (t3) => {
          e2.onInteractOutside?.(t3), t3.defaultPrevented || (o2.current = true, "pointerdown" === t3.detail.originalEvent.type && (a2.current = true));
          let r2 = t3.target;
          n2.triggerRef.current?.contains(r2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && a2.current && t3.preventDefault();
        }
      });
    }, "PopoverContentNonModal")
  ), B = r.forwardRef(
    x(function(e2, t2) {
      let {
        __scopePopover: n2,
        trapFocus: r2,
        onOpenAutoFocus: o2,
        onCloseAutoFocus: a2,
        disableOutsidePointerEvents: i2,
        onEscapeKeyDown: c2,
        onPointerDownOutside: p2,
        onFocusOutside: f2,
        onInteractOutside: h2,
        ...b2
      } = e2, y2 = w(L, n2), v2 = A(n2);
      return (0, l.Oh)(), (0, _.jsx)(u.n, {
        asChild: true,
        loop: true,
        trapped: r2,
        onMountAutoFocus: o2,
        onUnmountAutoFocus: a2,
        children: (0, _.jsx)(s.qW, {
          asChild: true,
          disableOutsidePointerEvents: i2,
          onInteractOutside: h2,
          onEscapeKeyDown: c2,
          onPointerDownOutside: p2,
          onFocusOutside: f2,
          onDismiss: () => y2.onOpenChange(false),
          deferPointerDownOutside: true,
          children: (0, _.jsx)(d.UC, {
            "data-state": Y(y2.open),
            role: "dialog",
            id: y2.contentId,
            ...v2,
            ...b2,
            ref: t2,
            style: {
              ...b2.style,
              "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
            }
          })
        })
      });
    }, "PopoverContentImpl")
  ), W = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, a2 = w("PopoverClose", n2);
      return (0, _.jsx)(h.sG.button, {
        type: "button",
        ...r2,
        ref: t2,
        onClick: (0, o.mK)(e2.onClick, () => a2.onOpenChange(false))
      });
    }, "PopoverClose")
  ), G = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, o2 = A(n2);
      return (0, _.jsx)(d.i3, { ...o2, ...r2, ref: t2 });
    }, "PopoverArrow")
  );
  function Y(e2) {
    return e2 ? "open" : "closed";
  }
  x(Y, "getState");
  var K = k, Z = R, $ = N, q = M, H = D, Q = W, U = G;
}

__m(__module,__exports,__require);
});
A.reg(44114, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => r });
  var a = o(51811);
  let n = {
    name: "arrow-up-narrow-wide",
    size: 24,
    node: [
      ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
      ["path", { d: "M7 4v16", key: "1glfcx" }],
      ["path", { d: "M11 12h4", key: "q8tih4" }],
      ["path", { d: "M11 16h7", key: "uosisv" }],
      ["path", { d: "M11 20h10", key: "jvxblo" }]
    ],
    aliases: ["sort-asc"]
  };
  n.node;
  let r = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(53896, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "chevrons-down-up",
    size: 24,
    node: [
      ["path", { d: "m7 20 5-5 5 5", key: "13a0gw" }],
      ["path", { d: "m7 4 5 5 5-5", key: "1kwcof" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(54471, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { n: () => o });
  var r = a(12115);
  let n = (e2) => {
    let t2 = 0, a2 = () => {
      let r3 = /* @__PURE__ */ new Date(), n2 = new Date(r3.getFullYear(), r3.getMonth(), r3.getDate() + 1);
      t2 = window.setTimeout(
        () => {
          e2(), a2();
        },
        n2.getTime() - r3.getTime() + 1e3
      );
    }, r2 = () => {
      "visible" === document.visibilityState && e2();
    };
    return a2(), document.addEventListener("visibilitychange", r2), window.addEventListener("focus", e2), () => {
      window.clearTimeout(t2), document.removeEventListener("visibilitychange", r2), window.removeEventListener("focus", e2);
    };
  }, i = () => {
    let e2;
    return e2 = /* @__PURE__ */ new Date(), `${e2.getFullYear()}-${String(e2.getMonth() + 1).padStart(2, "0")}-${String(e2.getDate()).padStart(2, "0")}`;
  }, l = () => "";
  function o() {
    let e2 = (0, r.useSyncExternalStore)(n, i, l);
    return (0, r.useMemo)(
      () => e2 ? ((e3) => {
        let [t2 = 1970, a2 = 1, r2 = 1] = e3.split("-").map(Number);
        return new Date(t2, a2 - 1, r2);
      })(e2) : void 0,
      [e2]
    );
  }
}

__m(__module,__exports,__require);
});
A.reg(60976, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => a });
  var n = r(51811);
  let i = {
    name: "redo-2",
    size: 24,
    node: [
      ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
      [
        "path",
        {
          d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
          key: "6uklza"
        }
      ]
    ]
  };
  i.node;
  let a = (0, n.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(62533, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => r });
  var a = o(51811);
  let n = {
    name: "rows-4",
    size: 24,
    node: [
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }
      ],
      ["path", { d: "M21 7.5H3", key: "1hm9pq" }],
      ["path", { d: "M21 12H3", key: "2avoz0" }],
      ["path", { d: "M21 16.5H3", key: "n7jzkj" }]
    ]
  };
  n.node;
  let r = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(62700, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "pin",
    size: 24,
    node: [
      ["path", { d: "M12 17v5", key: "bb1du9" }],
      [
        "path",
        {
          d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
          key: "1nkz8b"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(64304, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => r });
  var a = o(51811);
  let n = {
    name: "group",
    size: 24,
    node: [
      ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2", key: "adw53z" }],
      ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2", key: "an4l38" }],
      ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2", key: "144t0e" }],
      ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2", key: "rtnfgi" }],
      [
        "rect",
        { width: "7", height: "5", x: "7", y: "7", rx: "1", key: "1eyiv7" }
      ],
      [
        "rect",
        { width: "7", height: "5", x: "10", y: "12", rx: "1", key: "1qlmkx" }
      ]
    ]
  };
  n.node;
  let r = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(65332, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { Vv: () => O, fi: () => D, nl: () => y.n });
  var r = a(95155), n = a(12115), i = a(78780), l = a(76721), o = a(28245), d = a(55809), s = a(92171), c = a(25354), u = a(18310), h = a(7890), m = a(80642), g = a(7770), y = a(54471), p = a(85696), _ = a.n(p);
  let f = (e2) => new Date(e2.getFullYear(), e2.getMonth(), e2.getDate()), v = (e2) => new Date(e2.getFullYear(), e2.getMonth(), 1), x = (e2, t2) => !!(e2 && t2 && e2.getFullYear() === t2.getFullYear() && e2.getMonth() === t2.getMonth() && e2.getDate() === t2.getDate()), w = (e2, t2) => !!(e2 && t2 && e2.getFullYear() === t2.getFullYear() && e2.getMonth() === t2.getMonth()), D = (e2, t2) => new Date(e2.getFullYear(), e2.getMonth(), e2.getDate() + t2), b = (e2, t2) => new Date(e2.getFullYear(), e2.getMonth() + t2, 1), M = (e2, t2) => new Date(
    e2.getFullYear(),
    e2.getMonth() + t2,
    Math.min(
      e2.getDate(),
      new Date(e2.getFullYear(), e2.getMonth() + t2 + 1, 0).getDate()
    )
  ), j = (e2, t2) => !!(t2 && f(e2).getTime() < f(t2).getTime()), N = (e2, t2) => !!(t2 && f(e2).getTime() > f(t2).getTime()), S = (e2) => `${e2.getFullYear()}-${String(e2.getMonth() + 1).padStart(2, "0")}-${String(e2.getDate()).padStart(2, "0")}`, T = (e2) => {
    let t2 = D(e2, -e2.getDay());
    return Array.from(
      { length: 6 },
      (e3, a2) => Array.from({ length: 7 }, (e4, r2) => D(t2, 7 * a2 + r2))
    );
  }, k = () => () => {
  }, F = () => true, E = () => false, { spring: A, duration: Y, ease: $ } = g.T, B = { type: "spring", visualDuration: 0.36, bounce: 0, restDelta: 2e-3 }, R = {
    enter: (e2) => ({ opacity: 0, x: 12 * e2 }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: Y.standard, ease: $.enter }
    },
    exit: (e2) => ({
      opacity: 0,
      x: -12 * e2,
      transition: { duration: 0.14, ease: $.standard }
    })
  }, C = {
    enter: { opacity: 1, x: 0 },
    center: { opacity: 1, x: 0, transition: { duration: 0 } },
    exit: { opacity: 0, transition: { duration: 0 } }
  };
  function L({ cell: e2, reduced: t2 }) {
    let a2 = e2 >= 0, i2 = (0, o.d)(a2 ? e2 % 7 : 0), l2 = (0, o.d)(a2 ? Math.floor(e2 / 7) : 0), u2 = (0, o.d)(+!!a2), h2 = (0, o.d)(a2 ? 1 : 0.6), m2 = (0, d.G)(
      () => `translate(calc(${i2.get()} * (100% + 4px)), calc(${l2.get()} * (100% + 4px))) scale(${h2.get()})`
    ), g2 = (0, n.useRef)(!a2);
    return (0, n.useLayoutEffect)(() => {
      if (!a2) {
        g2.current = true;
        let e3 = t2 ? { duration: 0 } : { duration: 0.14, ease: $.standard }, a3 = [(0, s.i)(u2, 0, e3), (0, s.i)(h2, 0.6, e3)];
        return () => a3.forEach((e4) => e4.stop());
      }
      let r2 = e2 % 7, n2 = Math.floor(e2 / 7), o2 = [];
      return g2.current || t2 ? (i2.jump(r2), l2.jump(n2)) : o2.push((0, s.i)(i2, r2, A.morph), (0, s.i)(l2, n2, A.morph)), g2.current = false, o2.push(
        (0, s.i)(
          u2,
          1,
          t2 ? { duration: 0 } : { duration: Y.fast, ease: $.enter }
        ),
        (0, s.i)(h2, 1, t2 ? { duration: 0 } : A.snappy)
      ), () => o2.forEach((e3) => e3.stop());
    }, [e2, a2, t2, i2, l2, u2, h2]), (0, r.jsx)(c.PY1.span, {
      className: _().highlight,
      style: { transform: m2, opacity: u2 },
      "aria-hidden": "true",
      children: (0, r.jsx)("span", { className: _().highlightFill })
    });
  }
  function P({ index: e2, position: t2, present: a2, children: n2 }) {
    let i2 = (0, d.G)(t2, (t3) => `calc(${(e2 - t3) * 100}% + ${(e2 - t3) * 16}px)`), l2 = (0, d.G)(t2, (t3) => 1 - 0.6 * Math.min(1, Math.abs(e2 - t3)));
    return (0, r.jsx)(c.PY1.div, {
      className: _().monthBody,
      style: { x: i2, opacity: l2 },
      "data-present": a2 || void 0,
      "aria-hidden": !a2 || void 0,
      inert: !a2,
      children: n2
    });
  }
  function O({
    value: e2,
    onChange: t2,
    month: a2,
    onMonthChange: d2,
    minDate: g2,
    maxDate: p2,
    disabledDates: A2,
    locale: Y2 = "en-US",
    className: $2,
    showToday: V = false
  }) {
    let I, K = (0, n.useId)(), U = (0, y.n)(), H = (0, n.useSyncExternalStore)(k, F, E), Q = ((0, u.I)() ?? false) && H, [W, q] = (0, n.useState)(() => e2 ? v(e2) : void 0), [z, G] = (0, n.useState)(e2), J = (0, n.useRef)(null), Z = (0, n.useRef)(null), X = e2 ?? U, ee = a2 ? v(a2) : W ?? (X && v(X));
    a2 || W || !ee || q(ee);
    let et = ee?.getTime(), ea = ee ? S(ee) : "pending", [er, en] = (0, n.useState)(et), [ei, el] = (0, n.useState)(0);
    er !== et && (en(et), el(void 0 === er || void 0 === et ? 0 : et > er ? 1 : -1));
    let eo = (0, n.useMemo)(() => void 0 === et ? [] : T(new Date(et)), [et]), ed = ee ? 12 * ee.getFullYear() + ee.getMonth() : 0, es = (0, o.d)(ed), [ec, eu] = (0, n.useState)([ed, ed]);
    (0, h.L)(es, "change", (e3) => {
      let t3 = [Math.floor(e3 + 1e-3), Math.ceil(e3 - 1e-3)];
      eu((e4) => e4[0] === t3[0] && e4[1] === t3[1] ? e4 : t3);
    });
    let eh = void 0 !== ee, em = (0, n.useRef)(eh);
    (0, n.useLayoutEffect)(() => {
      if (!eh) return;
      let e3 = es.get();
      if (e3 === ed) return;
      if (!em.current || Q) {
        em.current = true, es.jump(ed);
        return;
      }
      Math.abs(ed - e3) > 2 && es.jump(ed - Math.sign(ed - e3));
      let t3 = (0, s.i)(es, ed, B);
      return () => t3.stop();
    }, [eh, ed, Q, es]);
    let eg = Array.from(/* @__PURE__ */ new Set([ec[0], ec[1], ed])).sort((e3, t3) => e3 - t3), ey = (0, n.useMemo)(
      () => new Intl.DateTimeFormat(Y2, { month: "long", year: "numeric" }),
      [Y2]
    ), ep = (0, n.useMemo)(
      () => new Intl.DateTimeFormat(Y2, { weekday: "short" }),
      [Y2]
    ), e_ = (0, n.useMemo)(
      () => Array.from(
        { length: 7 },
        (e3, t3) => ep.format(new Date(2024, 0, 7 + t3))
      ),
      [ep]
    ), ef = ee ? ey.format(ee) : "", ev = e2 ? S(e2) : "", [ex, ew] = (0, n.useState)({ key: ev, date: e2 }), [eD, eb] = (0, n.useState)({ from: "", to: "", distance: 0 });
    if (ex.key !== ev) {
      let t3 = ex.date && e2 ? Math.round((f(e2).getTime() - f(ex.date).getTime()) / 864e5) : 0, a3 = ex.date && e2 ? e2.getDay() - ex.date.getDay() : 0;
      ew({ key: ev, date: e2 }), eb({ from: ex.key, to: ev, distance: Math.hypot(a3, (t3 - a3) / 7) });
    }
    let eM = (e3) => j(e3, g2) || N(e3, p2) || !!A2?.(e3), ej = ee && b(ee, -1), eN = ee && b(ee, 1), eS = !!(ej && g2 && ej.getTime() < v(g2).getTime()), eT = !!(eN && p2 && eN.getTime() > v(p2).getTime()), ek = !!(U && !eM(U) && t2), eF = !!(U && w(ee, U) && (!ek || x(e2, U))), eE = (I = (e3) => e3 && w(e3, ee) && !eM(e3) ? S(e3) : "")(z) || I(e2) || I(U) || S(eo.flat().find((e3) => w(e3, ee) && !eM(e3)) ?? /* @__PURE__ */ new Date(0)), eA = (e3) => {
      let t3 = v(e3);
      a2 || q(t3), d2?.(t3);
    };
    (0, n.useLayoutEffect)(() => {
      let e3 = Z.current;
      if (!e3) return;
      let t3 = J.current?.querySelector(`[data-present] [data-date="${e3}"]`);
      t3 && (Z.current = null, t3.focus({ preventScroll: true }));
    });
    let eY = (...e3) => e3.filter(Boolean).join(" ");
    return (0, r.jsxs)("section", {
      className: eY(_().calendar, $2),
      "aria-labelledby": K,
      children: [
        (0, r.jsxs)("div", {
          className: _().header,
          children: [
            (0, r.jsxs)("h2", {
              id: K,
              className: _().heading,
              children: [
                (0, r.jsx)("span", { className: _().srOnly, children: ef }),
                (0, r.jsx)("span", {
                  className: _().title,
                  "aria-hidden": "true",
                  children: (0, r.jsx)(m.N, {
                    initial: false,
                    custom: ei,
                    children: ee && (0, r.jsx)(
                      c.PY1.span,
                      {
                        className: _().titleRow,
                        custom: ei,
                        variants: Q || !ei ? C : R,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: ef
                      },
                      ea
                    )
                  })
                })
              ]
            }),
            (0, r.jsx)("span", {
              className: _().srOnly,
              "aria-live": "polite",
              children: ei ? ef : ""
            }),
            (0, r.jsxs)("div", {
              className: _().navigation,
              children: [
                V && (0, r.jsx)("button", {
                  type: "button",
                  className: _().todayButton,
                  "aria-disabled": eF || void 0,
                  "aria-label": U ? `Today, ${U.toLocaleDateString(Y2, { dateStyle: "full" })}` : "Today",
                  onClick: () => {
                    U && ee && !eF && (G(U), w(U, ee) || eA(U), ek && !x(e2, U) && t2?.(U));
                  },
                  children: "Today"
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: _().navButton,
                  "aria-label": "Previous month",
                  "aria-disabled": eS || void 0,
                  onClick: () => {
                    !eS && ej && eA(ej);
                  },
                  children: (0, r.jsx)(i.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: _().navButton,
                  "aria-label": "Next month",
                  "aria-disabled": eT || void 0,
                  onClick: () => {
                    !eT && eN && eA(eN);
                  },
                  children: (0, r.jsx)(l.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: _().weekdays,
          "aria-hidden": "true",
          children: e_.map(
            (e3, t3) => (0, r.jsx)("span", { children: e3.slice(0, 2) }, `${e3}-${t3}`)
          )
        }),
        (0, r.jsx)("div", {
          className: _().monthViewport,
          ref: J,
          children: ee ? eg.map((a3) => {
            let n2, i2;
            return (0, r.jsx)(
              P,
              {
                index: a3,
                position: es,
                present: a3 === ed,
                children: (n2 = new Date(
                  Math.floor(a3 / 12),
                  (a3 % 12 + 12) % 12,
                  1
                ), i2 = a3 === ed, (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(L, {
                      cell: ((t3) => {
                        if (!e2) return -1;
                        let a4 = D(t3, -t3.getDay()), r2 = Math.round(
                          (f(e2).getTime() - a4.getTime()) / 864e5
                        );
                        return r2 >= 0 && r2 < 42 ? r2 : -1;
                      })(n2),
                      reduced: Q
                    }),
                    (0, r.jsx)("div", {
                      className: _().grid,
                      role: "grid",
                      "aria-label": ey.format(n2),
                      children: T(n2).map(
                        (a4) => (0, r.jsx)(
                          "div",
                          {
                            className: _().week,
                            role: "row",
                            children: a4.map((a5) => {
                              let l2 = S(a5), o2 = x(a5, e2), d3 = x(a5, U);
                              return (0, r.jsx)(
                                "button",
                                {
                                  type: "button",
                                  role: "gridcell",
                                  "data-date": l2,
                                  "aria-label": a5.toLocaleDateString(Y2, {
                                    dateStyle: "full"
                                  }),
                                  "aria-selected": o2,
                                  "aria-current": d3 ? "date" : void 0,
                                  tabIndex: i2 && l2 === eE ? 0 : -1,
                                  disabled: eM(a5),
                                  style: i2 ? ((e3) => {
                                    if (!eD.distance || Q || e3 !== eD.to && e3 !== eD.from)
                                      return;
                                    let t3 = e3 === eD.to ? Math.min(
                                      260,
                                      95 + 85 * Math.log(eD.distance)
                                    ) : Math.max(
                                      20,
                                      130 / eD.distance
                                    );
                                    return {
                                      "--number-delay": `${Math.round(t3)}ms`
                                    };
                                  })(l2) : void 0,
                                  className: eY(
                                    _().day,
                                    !w(a5, n2) && _().outside,
                                    o2 && _().selected,
                                    d3 && _().today
                                  ),
                                  onFocus: () => G(a5),
                                  onKeyDown: (e3) => ((e4, a6) => {
                                    if ("Enter" === e4.key || " " === e4.key) {
                                      e4.preventDefault(), eM(a6) || t2?.(a6);
                                      return;
                                    }
                                    let r2 = {
                                      ArrowLeft: [D(a6, -1), -1],
                                      ArrowRight: [D(a6, 1), 1],
                                      ArrowUp: [D(a6, -7), -1],
                                      ArrowDown: [D(a6, 7), 1],
                                      Home: [D(a6, -a6.getDay()), 1],
                                      End: [D(a6, 6 - a6.getDay()), -1],
                                      PageUp: [
                                        M(a6, e4.shiftKey ? -12 : -1),
                                        -1
                                      ],
                                      PageDown: [
                                        M(a6, e4.shiftKey ? 12 : 1),
                                        1
                                      ]
                                    }[e4.key];
                                    r2 && (e4.preventDefault(), ((e5, t3, a7) => {
                                      let r3 = j(t3, g2) && g2 ? f(g2) : N(t3, p2) && p2 ? f(p2) : t3;
                                      for (let e6 = 0; e6 < 42 && eM(r3); e6 += 1)
                                        r3 = D(r3, a7);
                                      !(eM(r3) || x(r3, e5)) && (G(r3), Z.current = S(r3), w(r3, ee) || eA(r3));
                                    })(a6, r2[0], r2[1]));
                                  })(e3, a5),
                                  onClick: () => t2?.(a5),
                                  children: (0, r.jsx)("span", {
                                    className: _().dayNumber,
                                    children: a5.getDate()
                                  })
                                },
                                l2
                              );
                            })
                          },
                          S(a4[0])
                        )
                      )
                    })
                  ]
                }))
              },
              a3
            );
          }) : (0, r.jsx)("div", {
            className: _().monthBody,
            "aria-hidden": "true",
            children: (0, r.jsx)("div", {
              className: _().grid,
              children: Array.from(
                { length: 6 },
                (e3, t3) => (0, r.jsx)(
                  "div",
                  {
                    className: _().week,
                    children: Array.from(
                      { length: 7 },
                      (e4, t4) => (0, r.jsx)(
                        "span",
                        { className: _().placeholderDay },
                        t4
                      )
                    )
                  },
                  t3
                )
              )
            })
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(65342, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "chevrons-up-down",
    size: 24,
    node: [
      ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
      ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(66189, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => r });
  var a = o(51811);
  let n = {
    name: "arrow-down-wide-narrow",
    size: 24,
    node: [
      ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
      ["path", { d: "M7 20V4", key: "1yoxec" }],
      ["path", { d: "M11 4h10", key: "1w87gc" }],
      ["path", { d: "M11 8h7", key: "djye34" }],
      ["path", { d: "M11 12h4", key: "q8tih4" }]
    ],
    aliases: ["sort-desc"]
  };
  n.node;
  let r = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(69994, ".data-grid_root__ab5cw{--grid-line:var(--border-subtle);--grid-select:color-mix(in oklab,var(--accent) 9%,transparent);--grid-checked:color-mix(in oklab,var(--accent) 5%,var(--surface));--grid-band:color-mix(in oklab,var(--surface-muted) 70%,var(--surface));position:relative;display:grid;width:100%;min-width:0;overflow:hidden;container-type:inline-size;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.data-grid_root__ab5cw *,.data-grid_root__ab5cw :after,.data-grid_root__ab5cw :before{box-sizing:border-box}.data-grid_root__ab5cw[data-density=compact]{font-size:.8125rem}.data-grid_srOnly__cyoe7{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.data-grid_toolbar__Feviz{position:relative;display:grid;min-width:0;height:52px;padding:0 8px 0 10px;border-bottom:1px solid var(--border);overflow:hidden}.data-grid_toolbarRow__C_QMI{display:flex;grid-area:1/1;align-items:center;gap:4px;min-width:0;width:100%;height:52px}.data-grid_toolSpacer__vRyHn{flex:1;min-width:4px}.data-grid_toolGroup__UoJEQ{display:inline-flex;align-items:center;margin-right:4px;padding-right:6px;box-shadow:inset -1px 0 0 var(--border)}.data-grid_toolButton__GTNUG,.data-grid_toolIcon__VqbeX{display:inline-flex;flex:none;align-items:center;justify-content:center;gap:6px;height:32px;padding:0 10px;border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);font-weight:500;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}.data-grid_toolIcon__VqbeX{width:32px;padding:0}.data-grid_toolButton__GTNUG[aria-pressed=true],.data-grid_toolButton__GTNUG[data-state=open],.data-grid_toolIcon__VqbeX[data-state=open]{background:var(--surface-muted);color:var(--foreground)}.data-grid_toolButton__GTNUG:disabled,.data-grid_toolIcon__VqbeX:disabled{opacity:.4;cursor:default}.data-grid_toolButton__GTNUG[data-tone=danger]{color:var(--danger)}.data-grid_toolButton__GTNUG:active:not(:disabled):not([aria-haspopup]),.data-grid_toolIcon__VqbeX:active:not(:disabled):not([aria-haspopup]){transform:scale(.96)}.data-grid_toolButton__GTNUG[aria-haspopup]:active,.data-grid_toolIcon__VqbeX[aria-haspopup]:active{background:color-mix(in oklab,var(--surface-muted),var(--border) 55%)}@media (hover:hover) and (pointer:fine){.data-grid_toolButton__GTNUG:not(:disabled):hover,.data-grid_toolIcon__VqbeX:not(:disabled):hover{background:var(--surface-muted);color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.data-grid_toolButton__GTNUG[data-tone=danger]:not(:disabled):hover{background:color-mix(in oklab,var(--danger) 9%,var(--surface));color:var(--danger)}}.data-grid_toolCount__pLW47{display:inline-grid;place-items:center;min-width:18px;height:18px;padding:0 5px;border-radius:var(--radius-pill);color:var(--background);font-size:var(--text-xs);font-variant-numeric:tabular-nums;line-height:1}.data-grid_toolButton__GTNUG[aria-pressed=true] .data-grid_toolCount__pLW47,.data-grid_toolButton__GTNUG[data-state=open] .data-grid_toolCount__pLW47,.data-grid_toolCount__pLW47{background:var(--foreground)}.data-grid_bulkCount__sbFrP{display:inline-flex;align-items:baseline;gap:5px;padding-left:2px;color:var(--foreground);font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap}.data-grid_bulkCount__sbFrP>span{font:inherit;color:inherit;letter-spacing:inherit}.data-grid_search__R1q_9{display:flex;flex:0 1 240px;align-items:center;gap:8px;min-width:88px;height:32px;padding:0 6px 0 11px;border-radius:var(--radius-control);background:var(--surface-muted);color:var(--text-muted);cursor:text;transition:background-color var(--duration-fast) var(--ease-standard)}.data-grid_search__R1q_9:focus-within{background:color-mix(in oklab,var(--surface-muted),var(--border) 40%);color:var(--text-secondary)}.data-grid_search__R1q_9 input{flex:1;min-width:0;height:100%;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;letter-spacing:inherit}.data-grid_search__R1q_9 input::placeholder{color:var(--text-muted)}.data-grid_searchClear__QY13y{display:grid;flex:none;place-items:center;width:22px;height:22px;padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-muted);cursor:pointer}@media (hover:hover) and (pointer:fine){.data-grid_searchClear__QY13y:hover{background:var(--surface);color:var(--foreground)}}.data-grid_rowCount__GG6TJ{flex:none;padding-left:6px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}.data-grid_scroller__2zc6f{position:relative;min-width:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-gutter:auto}.data-grid_grid__tZN2v{position:relative;min-width:100%;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}.data-grid_head__aS6Gx{position:sticky;top:0;z-index:10;background:var(--surface)}.data-grid_filterRow__861r6,.data-grid_headRow__YuEiz,.data-grid_totalsRow__iJvre{display:flex}.data-grid_headRow__YuEiz{height:40px;border-bottom:1px solid var(--border)}.data-grid_gutterHead__n_8tE{position:sticky;left:0;z-index:3;display:grid;flex:none;place-items:center;width:var(--gutter-w,48px);height:100%;background:inherit;box-shadow:inset -1px 0 0 var(--border)}.data-grid_filterRow__861r6 .data-grid_gutterHead__n_8tE,.data-grid_headRow__YuEiz .data-grid_gutterHead__n_8tE{background:var(--surface)}.data-grid_headCell__8RL3f{position:relative;display:flex;flex:none;align-items:stretch;height:100%;background:var(--surface);box-shadow:inset -1px 0 0 var(--grid-line);transition:background-color var(--duration-fast) var(--ease-standard)}.data-grid_cell__r4Ju_[data-pinned],.data-grid_filterCell__Toc20[data-pinned],.data-grid_headCell__8RL3f[data-pinned],.data-grid_totalCell__2DyCr[data-pinned]{position:sticky;z-index:2}.data-grid_cell__r4Ju_[data-pin-edge],.data-grid_filterCell__Toc20[data-pin-edge],.data-grid_headCell__8RL3f[data-pin-edge],.data-grid_totalCell__2DyCr[data-pin-edge]{box-shadow:inset -1px 0 0 var(--border)}.data-grid_headCell__8RL3f[data-selected]{background:var(--grid-band)}.data-grid_sortButton__bCQ2u{display:flex;flex:1;align-items:center;gap:4px;min-width:0;padding:0 4px 0 12px;border:0;background:transparent;color:var(--text-secondary);font:inherit;font-weight:500;letter-spacing:inherit;text-align:left;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}.data-grid_sortButton__bCQ2u:disabled{cursor:default}.data-grid_headCell__8RL3f[data-num] .data-grid_sortButton__bCQ2u{flex-direction:row-reverse;justify-content:flex-start;text-align:right}.data-grid_headCell__8RL3f[data-selected] .data-grid_sortButton__bCQ2u,.data-grid_headCell__8RL3f[data-sorted] .data-grid_sortButton__bCQ2u{color:var(--foreground)}.data-grid_headLabel__cgKxW{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.data-grid_sortIcon__KeguI{display:inline-flex;flex:none;align-items:center;gap:1px;color:var(--foreground);opacity:0;transform:scale(.8);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}.data-grid_sortIcon__KeguI svg{transition:transform var(--duration-spring) var(--ease-spring)}.data-grid_sortIcon__KeguI[data-dir]{opacity:1;transform:none}.data-grid_sortIcon__KeguI[data-dir=desc] svg{transform:rotate(180deg)}.data-grid_sortOrder__1pIA1{min-width:1ch;color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums;line-height:1}.data-grid_sortOrder__1pIA1{transition:opacity var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.data-grid_sortButton__bCQ2u:not(:disabled):hover{color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.data-grid_sortButton__bCQ2u:not(:disabled):hover .data-grid_sortIcon__KeguI:not([data-dir]){opacity:.35;transform:none}}.data-grid_headMenuButton__QgTft{display:grid;flex:none;place-items:center;align-self:center;width:24px;height:24px;margin-right:6px;padding:0;border:0;border-radius:8px;background:transparent;color:var(--text-muted);cursor:pointer;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard),background-color var(--duration-instant) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.data-grid_headCell__8RL3f:focus-within .data-grid_headMenuButton__QgTft,.data-grid_headCell__8RL3f:hover .data-grid_headMenuButton__QgTft,.data-grid_headMenuButton__QgTft[data-state=open]{opacity:1}.data-grid_headMenuButton__QgTft[data-state=open]{background:var(--surface-muted);color:var(--foreground)}@media (hover:hover) and (pointer:fine){.data-grid_headMenuButton__QgTft:hover{background:var(--surface-muted);color:var(--foreground)}}@media (hover:none){.data-grid_headMenuButton__QgTft{opacity:1}}.data-grid_resizer__X4dVF{position:absolute;top:0;right:-6px;bottom:0;z-index:3;width:12px;cursor:col-resize;touch-action:none}.data-grid_resizer__X4dVF:after{content:\"\";position:absolute;top:9px;bottom:9px;left:5px;width:2px;border-radius:1px;background:var(--foreground);opacity:0;transform:scaleY(.5);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-standard) var(--ease-enter)}.data-grid_resizer__X4dVF[data-active]:after{opacity:1;transform:none}@media (hover:hover) and (pointer:fine){.data-grid_resizer__X4dVF:hover:after{opacity:.45;transform:none}}.data-grid_headCell__8RL3f:last-child .data-grid_resizer__X4dVF{right:0}.data-grid_filterRow__861r6{height:40px;border-bottom:1px solid var(--border);background:var(--surface);overflow:hidden}.data-grid_filterCell__Toc20{display:flex;flex:none;align-items:center;height:100%;padding:4px;background:var(--surface);box-shadow:inset -1px 0 0 var(--grid-line)}.data-grid_filterInput__Mq92N,.data-grid_filterSelect__4CcrK{width:100%;min-width:0;height:30px;padding:0 8px;border:0;border-radius:9px;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-xs);letter-spacing:inherit;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.data-grid_filterInput__Mq92N::placeholder{color:var(--text-muted);opacity:.75}.data-grid_filterInput__Mq92N[data-num]{text-align:right;font-variant-numeric:tabular-nums}.data-grid_filterInput__Mq92N:focus,.data-grid_filterSelect__4CcrK[data-state=open]{background:var(--surface-muted)}.data-grid_filterInput__Mq92N[data-active],.data-grid_filterSelect__4CcrK[data-active]{background:var(--grid-select);font-weight:500}.data-grid_filterInput__Mq92N[aria-invalid=true]{color:var(--danger)}.data-grid_filterSelect__4CcrK{display:flex;align-items:center;justify-content:space-between;gap:4px;color:var(--text-muted);text-align:left;cursor:pointer}.data-grid_filterSelect__4CcrK[data-active]{color:var(--foreground)}.data-grid_filterSelectText__FgaJF{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (hover:hover) and (pointer:fine){.data-grid_filterInput__Mq92N:hover,.data-grid_filterSelect__4CcrK:hover{background:var(--surface-muted)}}.data-grid_clearFilters__IzQFJ{display:grid;place-items:center;width:28px;height:28px;padding:0;border:0;border-radius:9px;background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}.data-grid_clearFilters__IzQFJ:active{transform:scale(.94)}@media (hover:hover) and (pointer:fine){.data-grid_clearFilters__IzQFJ:hover{background:var(--surface-muted);color:var(--foreground)}}.data-grid_body__IA1ZG{position:relative;z-index:0;isolation:isolate;cursor:cell}.data-grid_row__E89LL{position:absolute;top:0;left:0;display:flex;height:var(--row-h)}.data-grid_body__IA1ZG[data-moving] .data-grid_row__E89LL{transition:transform var(--duration-spring) var(--ease-spring),opacity var(--duration-standard) var(--ease-standard)}.data-grid_row__E89LL[data-editing]{z-index:5}.data-grid_cell__r4Ju_{position:relative;display:flex;flex:none;align-items:center;height:100%;min-width:0;padding:0 12px;border-bottom:1px solid var(--grid-line);background:var(--surface);box-shadow:inset -1px 0 0 var(--grid-line);color:var(--foreground);font-variant-numeric:tabular-nums;white-space:nowrap}.data-grid_cell__r4Ju_[data-num]{justify-content:flex-end}.data-grid_cell__r4Ju_[data-pinned]{font-weight:500}.data-grid_row__E89LL[data-checked] .data-grid_cell__r4Ju_,.data-grid_row__E89LL[data-checked] .data-grid_gutter__JIcSj{background:var(--grid-checked)}.data-grid_value___Sycd{min-width:0;overflow:hidden;text-overflow:ellipsis}.data-grid_cell__r4Ju_[aria-readonly=true] .data-grid_value___Sycd{color:var(--text-secondary)}.data-grid_cell__r4Ju_[data-editing]{background:var(--surface-raised)}.data-grid_gutter__JIcSj{position:sticky;left:0;z-index:3;display:grid;flex:none;place-items:center;width:var(--gutter-w,48px);height:100%;border-bottom:1px solid var(--grid-line);background:var(--surface);box-shadow:inset -1px 0 0 var(--border);cursor:default;transition:background-color var(--duration-fast) var(--ease-standard)}.data-grid_gutter__JIcSj>*{grid-area:1/1}.data-grid_gutter__JIcSj[data-in-range]{background:var(--grid-band)}.data-grid_rowNumber___peVY{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;transition:opacity var(--duration-instant) var(--ease-standard)}.data-grid_gutter__JIcSj[data-in-range] .data-grid_rowNumber___peVY{color:var(--foreground)}.data-grid_gutter__JIcSj .data-grid_checkbox__PUdQG{opacity:0}.data-grid_body__IA1ZG[data-any-checked] .data-grid_gutter__JIcSj .data-grid_checkbox__PUdQG,.data-grid_row__E89LL[data-checked] .data-grid_gutter__JIcSj .data-grid_checkbox__PUdQG{opacity:1}.data-grid_body__IA1ZG[data-any-checked] .data-grid_rowNumber___peVY,.data-grid_row__E89LL[data-checked] .data-grid_rowNumber___peVY{opacity:0}@media (hover:hover) and (pointer:fine){.data-grid_row__E89LL:hover .data-grid_gutter__JIcSj .data-grid_checkbox__PUdQG{opacity:1}}@media (hover:hover) and (pointer:fine){.data-grid_row__E89LL:hover .data-grid_rowNumber___peVY{opacity:0}}@media (hover:none){.data-grid_gutter__JIcSj .data-grid_checkbox__PUdQG{opacity:1}}@media (hover:none){.data-grid_rowNumber___peVY{opacity:0}}.data-grid_root__ab5cw[data-row-numbers=off] .data-grid_rowNumber___peVY{display:none}.data-grid_root__ab5cw[data-row-numbers=off] .data-grid_gutter__JIcSj .data-grid_checkbox__PUdQG{opacity:1}.data-grid_spacer__KYhnu{flex:none;height:100%}.data-grid_row__E89LL[data-group-row] .data-grid_cell__r4Ju_{background:var(--grid-band);cursor:default}.data-grid_row__E89LL[data-group-row] .data-grid_value___Sycd{color:var(--foreground);font-weight:500}.data-grid_groupToggle__6ICcC{display:flex;flex:1;align-items:center;gap:6px;min-width:0;height:100%;margin:0 -12px;padding:0 12px 0 4px;border:0;background:transparent;color:var(--foreground);font:inherit;font-weight:500;letter-spacing:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}.data-grid_groupChevron__ZpM2g{flex:none;color:var(--text-secondary);transition:transform var(--duration-spring) var(--ease-spring)}.data-grid_groupToggle__6ICcC[aria-expanded=true] .data-grid_groupChevron__ZpM2g{transform:rotate(90deg)}.data-grid_groupLabel__91Eu6{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.data-grid_groupCount__E_4PD,.data-grid_groupLabel__91Eu6[data-empty]{color:var(--text-muted);font-weight:400}.data-grid_groupCount__E_4PD{flex:none;font-size:var(--text-xs);font-variant-numeric:tabular-nums}@media (hover:hover) and (pointer:fine){.data-grid_groupToggle__6ICcC:hover .data-grid_groupChevron__ZpM2g{color:var(--foreground)}}.data-grid_checkbox__PUdQG{display:grid;place-items:center;width:30px;height:30px;padding:0;border:0;background:transparent;cursor:pointer;transition:opacity var(--duration-instant) var(--ease-standard);-webkit-tap-highlight-color:transparent}.data-grid_checkboxMark__syy_s{display:grid;place-items:center;width:16px;height:16px;border-radius:5px;background:var(--surface);box-shadow:inset 0 0 0 1px var(--border-strong);color:var(--control-glyph);transition:background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}.data-grid_checkboxMark__syy_s svg{opacity:0;transform:scale(.5);transition:opacity var(--duration-instant) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}.data-grid_checkbox__PUdQG[data-state=mixed] .data-grid_checkboxMark__syy_s,.data-grid_checkbox__PUdQG[data-state=on] .data-grid_checkboxMark__syy_s{background:var(--control-on);box-shadow:inset 0 0 0 1px var(--control-on)}.data-grid_checkbox__PUdQG[data-state=mixed] .data-grid_checkboxMark__syy_s svg,.data-grid_checkbox__PUdQG[data-state=on] .data-grid_checkboxMark__syy_s svg{opacity:1;transform:none}.data-grid_checkbox__PUdQG:active .data-grid_checkboxMark__syy_s{transform:scale(.9)}@media (hover:hover) and (pointer:fine){.data-grid_checkbox__PUdQG:hover[data-state=off] .data-grid_checkboxMark__syy_s{box-shadow:inset 0 0 0 1px var(--text-muted)}}.data-grid_editor__ZiTso{width:100%;min-width:0;height:100%;margin:0;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-variant-numeric:tabular-nums;letter-spacing:inherit;text-align:inherit;user-select:text;-webkit-user-select:text;caret-color:var(--foreground)}.data-grid_cell__r4Ju_[data-num] .data-grid_editor__ZiTso{text-align:right}.data-grid_editor__ZiTso[aria-invalid=true]{color:var(--danger);caret-color:var(--danger);animation:data-grid_shake__jlGwH .32s var(--ease-standard)}@keyframes data-grid_shake__jlGwH{20%{transform:translateX(-3px)}45%{transform:translateX(3px)}70%{transform:translateX(-2px)}90%{transform:translateX(1px)}}.data-grid_options__5LeKb{position:absolute;top:calc(100% + 4px);left:0;z-index:2;min-width:100%;max-height:224px;padding:4px;overflow-y:auto;border:1px solid var(--border);border-radius:14px;background:var(--surface-raised);box-shadow:var(--shadow-floating);font-weight:400;transform-origin:top left;transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-spring) var(--ease-spring);cursor:default}.data-grid_options__5LeKb[data-up]{top:auto;bottom:calc(100% + 4px);transform-origin:bottom left}.data-grid_option__OaTZa{display:flex;align-items:center;height:32px;padding:0 10px;border-radius:9px;color:var(--foreground);white-space:nowrap;cursor:pointer}.data-grid_option__OaTZa[data-active]{background:var(--surface-muted)}.data-grid_option__OaTZa[data-current]{font-weight:500}.data-grid_optionEmpty__qRXI8{padding:8px 10px;color:var(--text-muted);font-size:var(--text-xs)}.data-grid_datePopover__oOLwm{min-width:0;width:min(304px,calc(100vw - 20px));max-width:none;padding:12px 14px 14px}.data-grid_empty__s8jzq{position:sticky;left:0;display:grid;place-content:center;justify-items:center;gap:12px;height:100%;padding:24px;text-align:center;cursor:default}.data-grid_emptyTitle__lbD6F{margin:0;color:var(--text-secondary)}.data-grid_empty__s8jzq .data-grid_toolButton__GTNUG{box-shadow:inset 0 0 0 1px var(--border)}.data-grid_skeleton__Nyt_Q{display:block;height:10px;border-radius:5px;background:var(--surface-muted);animation:data-grid_pulse__fCrA_ 1.4s var(--ease-in-out) infinite alternate}@keyframes data-grid_pulse__fCrA_{0%{opacity:1}to{opacity:.45}}.data-grid_rectLayer__JMB9D{width:0;height:0}.data-grid_rectLayer__JMB9D[data-pinned]{position:sticky;left:0;z-index:6}.data-grid_rectLayer__JMB9D[data-pinned]:has(>.data-grid_activeCell__U6gkx,>.data-grid_fillPreview__dcnWb){z-index:7}.data-grid_activeCell__U6gkx,.data-grid_fillPreview__dcnWb,.data-grid_selection__PUOml,.data-grid_wash__UiaqX{position:absolute;top:0;left:0;z-index:6;pointer-events:none}.data-grid_selection__PUOml{border-radius:2px;background:var(--grid-select);box-shadow:inset 0 0 0 1px var(--accent);transition:background-color var(--duration-fast) var(--ease-standard)}.data-grid_selection__PUOml[data-editing]{background:transparent}.data-grid_activeCell__U6gkx{z-index:7;border-radius:2px;box-shadow:inset 0 0 0 2px var(--accent)}.data-grid_fillPreview__dcnWb{z-index:7;border-radius:2px;background:color-mix(in oklab,var(--accent) 5%,transparent);border:1.5px dashed var(--accent)}.data-grid_washLayer__EsShB{position:absolute;inset:0;z-index:6;pointer-events:none}.data-grid_wash__UiaqX{background:color-mix(in oklab,var(--accent) 20%,transparent)}.data-grid_fillHandle__IVwEp{position:absolute;right:-4px;bottom:-4px;width:8px;height:8px;border-radius:2px;background:var(--accent);box-shadow:0 0 0 2px var(--surface);pointer-events:auto;cursor:crosshair;touch-action:none;transition:transform var(--duration-fast) var(--ease-standard)}.data-grid_fillHandle__IVwEp:before{content:\"\";position:absolute;inset:-9px}@media (hover:hover) and (pointer:fine){.data-grid_fillHandle__IVwEp:hover{transform:scale(1.35)}}.data-grid_foot__AEcqE{position:sticky;bottom:0;z-index:10}.data-grid_totalsRow__iJvre{height:40px;border-top:1px solid var(--border);background:var(--surface)}.data-grid_totalsRow__iJvre .data-grid_gutterHead__n_8tE{background:var(--surface)}.data-grid_totalCell__2DyCr{display:flex;flex:none;align-items:center;justify-content:space-between;gap:8px;height:100%;min-width:0;padding:0 12px;background:var(--surface);box-shadow:inset -1px 0 0 var(--grid-line);font-variant-numeric:tabular-nums;white-space:nowrap}.data-grid_totalLabel__a5_V8{min-width:0;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis}.data-grid_totalValue__oDsep{display:inline-flex;color:var(--foreground);font-weight:500}.data-grid_totalValue__oDsep>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}.data-grid_cell__r4Ju_[data-pin-edge]:after,.data-grid_filterCell__Toc20[data-pin-edge]:after,.data-grid_headCell__8RL3f[data-pin-edge]:after,.data-grid_totalCell__2DyCr[data-pin-edge]:after{content:\"\";position:absolute;top:0;right:-10px;bottom:0;width:10px;pointer-events:none;background:linear-gradient(90deg,oklch(0 0 0/.06),transparent);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}.data-grid_root__ab5cw[data-scrolled-x] .data-grid_cell__r4Ju_[data-pin-edge]:after,.data-grid_root__ab5cw[data-scrolled-x] .data-grid_filterCell__Toc20[data-pin-edge]:after,.data-grid_root__ab5cw[data-scrolled-x] .data-grid_headCell__8RL3f[data-pin-edge]:after,.data-grid_root__ab5cw[data-scrolled-x] .data-grid_totalCell__2DyCr[data-pin-edge]:after{opacity:1}.data-grid_filterCell__Toc20[data-pin-edge]:after,.data-grid_headCell__8RL3f[data-pin-edge]:after,.data-grid_totalCell__2DyCr[data-pin-edge]:after{position:absolute}.data-grid_filterCell__Toc20[data-pin-edge],.data-grid_totalCell__2DyCr[data-pin-edge]{position:sticky}.data-grid_statusBar__SlmKM{display:flex;flex-wrap:wrap;align-items:center;gap:4px 20px;min-height:40px;padding:8px 16px;border-top:1px solid var(--border);color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums}.data-grid_address__hCV7H{min-width:4.5em;color:var(--foreground);font-weight:500}.data-grid_stats__BTV66{display:inline-flex;flex-wrap:wrap;align-items:baseline;gap:4px 16px}.data-grid_stat__V8wpO{display:inline-flex;align-items:baseline;gap:6px;white-space:nowrap}.data-grid_statLabel__uwHVK{color:var(--text-muted)}.data-grid_statValue__i0Hdp{display:inline-flex;color:var(--foreground);font-weight:500}.data-grid_statValue__i0Hdp>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}.data-grid_status___zbMV{display:inline-grid;justify-items:end;margin-left:auto;min-height:1.4em;color:var(--text-secondary)}.data-grid_statusBar__SlmKM[data-stats=off] .data-grid_status___zbMV{justify-items:start;margin-left:0}.data-grid_statusText__P41oq{display:inline-flex;grid-area:1/1;align-items:center;gap:10px;white-space:nowrap}.data-grid_statusAction__MRRgW{padding:2px 8px;border:0;border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--foreground);font:inherit;font-weight:500;cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}.data-grid_statusAction__MRRgW:active{transform:scale(.96)}@media (hover:hover) and (pointer:fine){.data-grid_statusAction__MRRgW:hover{background:color-mix(in oklab,var(--surface-muted),var(--border) 55%)}}.data-grid_menu__v0v2L{--menu-y:-4px;position:relative;z-index:60;min-width:13rem;max-width:min(20rem,calc(100vw - 20px));padding:5px;border:1px solid var(--border);border-radius:18px;background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);transform-origin:var(--radix-dropdown-menu-content-transform-origin,var(--radix-popover-content-transform-origin));transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-spring) var(--ease-spring)}.data-grid_menu__v0v2L[data-side=top]{--menu-y:4px}.data-grid_menu__v0v2L[data-state=closed]{opacity:0;transform:translateY(calc(var(--menu-y) * .5)) scale(.985);transition:opacity var(--duration-instant) var(--ease-exit),transform var(--duration-instant) var(--ease-exit);animation:data-grid_menu-exit__1VzfM var(--duration-instant) linear both;pointer-events:none}@keyframes data-grid_menu-exit__1VzfM{to{--menu-exit:1}}.data-grid_menuScroll__W3hcX{max-height:280px;overflow-y:auto}.data-grid_menuItem__7d7ul{display:flex;align-items:center;gap:10px;width:100%;min-height:34px;padding:0 10px;border:0;border-radius:12px;background:transparent;color:var(--foreground);font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;outline:none;user-select:none;transition:background-color var(--duration-instant) var(--ease-standard)}.data-grid_menuItem__7d7ul svg{flex:none;color:var(--text-secondary)}.data-grid_menuItem__7d7ul[data-highlighted]{background:var(--surface-muted)}.data-grid_menuItem__7d7ul[data-active]{font-weight:500}.data-grid_menuItem__7d7ul[data-disabled]{opacity:.45;cursor:default}@media (hover:hover) and (pointer:fine){button.data-grid_menuItem__7d7ul:hover{background:var(--surface-muted)}}.data-grid_menuText__XIIP2{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.data-grid_menuText__XIIP2[data-muted]{color:var(--text-muted)}.data-grid_menuMeta__WQkND{flex:none;margin-left:auto;color:var(--text-muted)}.data-grid_menuCheck__G4Z1j{display:grid;flex:none;place-items:center;width:16px;height:16px;border-radius:5px;box-shadow:inset 0 0 0 1px var(--border-strong);color:var(--control-glyph);transition:background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}.data-grid_menuItem__7d7ul .data-grid_menuCheck__G4Z1j svg{color:inherit;opacity:0;transform:scale(.5);transition:opacity var(--duration-instant) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}.data-grid_menuCheck__G4Z1j[data-on]{background:var(--control-on);box-shadow:inset 0 0 0 1px var(--control-on)}.data-grid_menuItem__7d7ul .data-grid_menuCheck__G4Z1j[data-on] svg{opacity:1;transform:none}.data-grid_menuSeparator__7a7iU{height:1px;margin:4px -5px;background:var(--border-subtle)}.data-grid_menuSearch__P52Yf{display:flex;align-items:center;gap:8px;height:34px;margin-bottom:4px;padding:0 10px;border-radius:12px;background:var(--surface-muted);color:var(--text-muted)}.data-grid_menuSearch__P52Yf input{flex:1;min-width:0;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;letter-spacing:inherit}.data-grid_menuEmpty__k8ZIM{margin:0;padding:10px;color:var(--text-muted);font-size:var(--text-xs)}.data-grid_menuFooter__rr_lV{display:flex;justify-content:space-between;gap:8px;margin-top:4px;padding:6px 4px 2px;border-top:1px solid var(--border-subtle)}.data-grid_menuLink__9Qgdt{padding:4px 8px;border:0;border-radius:9px;background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-xs);font-weight:500;cursor:pointer}.data-grid_menuLink__9Qgdt:disabled{opacity:.45;cursor:default}@media (hover:hover) and (pointer:fine){.data-grid_menuLink__9Qgdt:not(:disabled):hover{background:var(--surface-muted);color:var(--foreground)}}@media (prefers-reduced-motion:reduce){.data-grid_groupChevron__ZpM2g{transition:none}}@media (prefers-reduced-motion:reduce){.data-grid_checkboxMark__syy_s,.data-grid_checkboxMark__syy_s svg,.data-grid_fillHandle__IVwEp,.data-grid_menuCheck__G4Z1j svg,.data-grid_resizer__X4dVF:after,.data-grid_sortIcon__KeguI,.data-grid_sortIcon__KeguI svg{transition-property:opacity,background-color,box-shadow}}@media (prefers-reduced-motion:reduce){.data-grid_body__IA1ZG[data-moving] .data-grid_row__E89LL{transition:none}}@media (prefers-reduced-motion:reduce){.data-grid_checkbox__PUdQG:active .data-grid_checkboxMark__syy_s,.data-grid_clearFilters__IzQFJ:active,.data-grid_statusAction__MRRgW:active,.data-grid_toolButton__GTNUG:active,.data-grid_toolIcon__VqbeX:active{transform:none}}@media (prefers-reduced-motion:reduce){.data-grid_editor__ZiTso[aria-invalid=true]{animation:none}}@media (prefers-reduced-motion:reduce){.data-grid_skeleton__Nyt_Q{animation:none;opacity:.7}}@media (prefers-reduced-motion:reduce){.data-grid_menu__v0v2L,.data-grid_menu__v0v2L[data-state=closed],.data-grid_options__5LeKb{transform:none;transition:opacity var(--duration-instant) linear}}", {"root":"data-grid_root__ab5cw","srOnly":"data-grid_srOnly__cyoe7","toolbar":"data-grid_toolbar__Feviz","toolbarRow":"data-grid_toolbarRow__C_QMI","toolSpacer":"data-grid_toolSpacer__vRyHn","toolGroup":"data-grid_toolGroup__UoJEQ","toolButton":"data-grid_toolButton__GTNUG","toolIcon":"data-grid_toolIcon__VqbeX","toolCount":"data-grid_toolCount__pLW47","bulkCount":"data-grid_bulkCount__sbFrP","search":"data-grid_search__R1q_9","searchClear":"data-grid_searchClear__QY13y","rowCount":"data-grid_rowCount__GG6TJ","toolLabel":"data-grid_toolLabel__5v5G0","scroller":"data-grid_scroller__2zc6f","grid":"data-grid_grid__tZN2v","head":"data-grid_head__aS6Gx","headRow":"data-grid_headRow__YuEiz","filterRow":"data-grid_filterRow__861r6","totalsRow":"data-grid_totalsRow__iJvre","gutterHead":"data-grid_gutterHead__n_8tE","headCell":"data-grid_headCell__8RL3f","filterCell":"data-grid_filterCell__Toc20","totalCell":"data-grid_totalCell__2DyCr","cell":"data-grid_cell__r4Ju_","sortButton":"data-grid_sortButton__bCQ2u","headLabel":"data-grid_headLabel__cgKxW","sortIcon":"data-grid_sortIcon__KeguI","sortOrder":"data-grid_sortOrder__1pIA1","headMenuButton":"data-grid_headMenuButton__QgTft","resizer":"data-grid_resizer__X4dVF","filterInput":"data-grid_filterInput__Mq92N","filterSelect":"data-grid_filterSelect__4CcrK","filterSelectText":"data-grid_filterSelectText__FgaJF","clearFilters":"data-grid_clearFilters__IzQFJ","body":"data-grid_body__IA1ZG","row":"data-grid_row__E89LL","gutter":"data-grid_gutter__JIcSj","value":"data-grid_value___Sycd","rowNumber":"data-grid_rowNumber___peVY","checkbox":"data-grid_checkbox__PUdQG","spacer":"data-grid_spacer__KYhnu","groupToggle":"data-grid_groupToggle__6ICcC","groupChevron":"data-grid_groupChevron__ZpM2g","groupLabel":"data-grid_groupLabel__91Eu6","groupCount":"data-grid_groupCount__E_4PD","checkboxMark":"data-grid_checkboxMark__syy_s","editor":"data-grid_editor__ZiTso","shake":"data-grid_shake__jlGwH","options":"data-grid_options__5LeKb","option":"data-grid_option__OaTZa","optionEmpty":"data-grid_optionEmpty__qRXI8","datePopover":"data-grid_datePopover__oOLwm","empty":"data-grid_empty__s8jzq","emptyTitle":"data-grid_emptyTitle__lbD6F","skeleton":"data-grid_skeleton__Nyt_Q","pulse":"data-grid_pulse__fCrA_","rectLayer":"data-grid_rectLayer__JMB9D","activeCell":"data-grid_activeCell__U6gkx","fillPreview":"data-grid_fillPreview__dcnWb","selection":"data-grid_selection__PUOml","wash":"data-grid_wash__UiaqX","washLayer":"data-grid_washLayer__EsShB","fillHandle":"data-grid_fillHandle__IVwEp","foot":"data-grid_foot__AEcqE","totalLabel":"data-grid_totalLabel__a5_V8","totalValue":"data-grid_totalValue__oDsep","statusBar":"data-grid_statusBar__SlmKM","address":"data-grid_address__hCV7H","stats":"data-grid_stats__BTV66","stat":"data-grid_stat__V8wpO","statLabel":"data-grid_statLabel__uwHVK","statValue":"data-grid_statValue__i0Hdp","status":"data-grid_status___zbMV","statusText":"data-grid_statusText__P41oq","statusAction":"data-grid_statusAction__MRRgW","menu":"data-grid_menu__v0v2L","menu-exit":"data-grid_menu-exit__1VzfM","menuScroll":"data-grid_menuScroll__W3hcX","menuItem":"data-grid_menuItem__7d7ul","menuText":"data-grid_menuText__XIIP2","menuMeta":"data-grid_menuMeta__WQkND","menuCheck":"data-grid_menuCheck__G4Z1j","menuSeparator":"data-grid_menuSeparator__7a7iU","menuSearch":"data-grid_menuSearch__P52Yf","menuEmpty":"data-grid_menuEmpty__k8ZIM","menuFooter":"data-grid_menuFooter__rr_lV","menuLink":"data-grid_menuLink__9Qgdt"});
A.reg(73534, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "list-filter",
    size: 24,
    node: [
      ["path", { d: "M2 5h20", key: "1fs1ex" }],
      ["path", { d: "M6 12h12", key: "8npq4p" }],
      ["path", { d: "M9 19h6", key: "456am0" }]
    ]
  };
  n.node;
  let d = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(79504, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var n = r(51811);
  let s = {
    name: "columns-3",
    size: 24,
    node: [
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }
      ],
      ["path", { d: "M9 3v18", key: "fh3hqa" }],
      ["path", { d: "M15 3v18", key: "14nvp0" }]
    ],
    aliases: ["panels-left-right"]
  };
  s.node;
  let i = (0, n.A)(s);
}

__m(__module,__exports,__require);
});
A.regCss(85696, ".calendar{width:min(100%,328px);min-width:0;color:var(--foreground)}\n.header{container-type:inline-size;display:grid;min-height:34px;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:4px 12px;margin-bottom:14px}\n@container (max-width: 259px){.heading,.navigation{grid-column:1/-1}\n.heading{min-width:0;margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.navigation{justify-self:end}\n.navigation{display:inline-flex;flex:0 0 auto;align-items:center;gap:2px;margin-right:-6px}\n.title{display:grid;line-height:var(--leading-body)}\n.title>.titleRow{grid-area:1/1;justify-self:start}\n.titleRow{display:inline-block;white-space:nowrap;font-variant-numeric:tabular-nums}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n.navButton,.todayButton{display:grid;height:32px;place-items:center;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard),scale var(--duration-spring) var(--ease-spring)}\n.navButton{width:32px}\n@media (hover:hover) and (pointer:fine){.navButton:hover:not([aria-disabled]),.todayButton:hover:not([aria-disabled]){background:var(--surface-muted);color:var(--foreground)}\n.navButton:active:not([aria-disabled]),.todayButton:active:not([aria-disabled]){scale:.96;transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-fast),.1s;transition-timing-function:var(--ease-standard)}\n.navButton[aria-disabled],.todayButton[aria-disabled]{cursor:default;opacity:.36}\n@media (prefers-reduced-motion:reduce){.dayNumber,.day,.day:before,.highlightFill,.navButton,.todayButton{transition:none}\n.day:active .dayNumber,.day:active:before,.monthBody:has(.day.selected:active) .highlightFill,.navButton:active,.todayButton:active{scale:none}\n.todayButton{padding:0 11px;font-size:var(--text-sm);font-weight:500;line-height:1}\n.week,.weekdays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));column-gap:4px}\n.weekdays{margin-bottom:6px;color:var(--text-muted);font-size:var(--text-xs);font-weight:500;line-height:24px;text-align:center}\n.weekdays span{min-width:0;overflow:hidden}\n.monthViewport{position:relative;display:grid;overflow:hidden;contain:paint}\n.monthBody{position:relative;grid-area:1/1;min-width:0;will-change:transform}\n.monthBody[inert]{pointer-events:none}\n.monthBody:has(.day.selected:hover) .highlightFill{background:var(--accent-strong)}\n.day:active:not(:disabled) .dayNumber,.day:active:not(:disabled):before,.monthBody:has(.day.selected:active:not(:disabled)) .highlightFill{scale:.94;transition-duration:var(--duration-fast),.1s;transition-timing-function:var(--ease-standard)}\n.grid{display:grid;row-gap:4px}\n.placeholderDay{aspect-ratio:1}\n.day{position:relative;display:grid;width:100%;aspect-ratio:1;min-width:0;place-items:center;border:0;border-radius:50%;padding:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:400;line-height:1;font-variant-numeric:tabular-nums;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard) var(--number-delay,0s)}\n.day:before{content:\"\";position:absolute;inset:0;border-radius:inherit;background:transparent;transition:background-color var(--duration-fast) var(--ease-standard),scale var(--duration-spring) var(--ease-spring)}\n@media (hover:hover) and (pointer:fine){.day:hover:not(:disabled):not(.selected):before{background:var(--surface-muted)}\n.day.outside{color:var(--text-muted)}\n.day.outside:not(.selected) .dayNumber{opacity:.8}\n.day.today .dayNumber:after{content:\"\";position:absolute;top:calc(100% + 4px);left:50%;width:4px;height:4px;margin-left:-2px;border-radius:50%;background:currentColor}\n.day.selected,.day.today{font-weight:500}\n.day.selected{color:var(--accent-foreground)}\n.day:disabled{cursor:default;color:var(--text-muted)}\n.day:disabled .dayNumber{opacity:.42}\n.day.outside:disabled .dayNumber{opacity:.3}\n.dayNumber{position:relative;transition:opacity var(--duration-fast) var(--ease-standard) var(--number-delay,0s),scale var(--duration-spring) var(--ease-spring)}\n.highlight{position:absolute;top:0;left:0;width:calc((100% - 24px) / 7);aspect-ratio:1;pointer-events:none;will-change:transform}\n.highlightFill{position:absolute;inset:0;border-radius:50%;background:var(--accent);transition:background-color var(--duration-fast) var(--ease-standard),scale var(--duration-spring) var(--ease-spring)}", {});
A.reg(89034, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "eye-off",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
          key: "ct8e1f"
        }
      ],
      ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
      [
        "path",
        {
          d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
          key: "13bj9a"
        }
      ],
      ["path", { d: "m2 2 20 20", key: "1ooewy" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(89434, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => r });
  var a = o(51811);
  let n = {
    name: "funnel-x",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473",
          key: "ol2ft2"
        }
      ],
      ["path", { d: "m16.5 3.5 5 5", key: "15e6fa" }],
      ["path", { d: "m21.5 3.5-5 5", key: "m0lwru" }]
    ],
    aliases: ["filter-x"]
  };
  n.node;
  let r = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("data-grid", [12767,69994,85696]);
A.item("data-grid", {entry:29311, export:"DataGridDemo", kind:"component", tier:"pro", unresolved:[]});
})();