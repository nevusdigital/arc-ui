function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { BranchGraphDemo: () => Y, default: () => K });
  var r = t(95155), s = t(12115), n = t(15480), i = t(81290), l = t(4214), d = t(19266), o = t.n(d);
  let h = (e2) => `media/people/portrait/${e2}.svg`, c = { name: "Chloe Nguyen", avatar: h("chloe-nguyen") }, u = { name: "Daniel Kim", avatar: h("daniel-kim") }, f = { name: "Sofia Ramirez", avatar: h("sofia-ramirez") }, p = { name: "Marcus Johnson", avatar: h("marcus-johnson") }, m = [{ name: "main" }, { name: "feat/checkout" }, { name: "fix/rounding" }], g = [
    {
      id: "f3",
      hash: "9f2c1ab",
      message: "Save cards for returning customers",
      body: "Stores a customer id on the first purchase and offers saved cards on the next visit.",
      branch: "feat/checkout",
      parents: ["f2"],
      author: c,
      date: "2 hours ago",
      additions: 184,
      deletions: 32,
      files: 6
    },
    {
      id: "m4",
      hash: "4e81d07",
      message: "Bump stripe-js to 4.2",
      body: "Picks up the new payment element and drops a deprecated option.",
      branch: "main",
      parents: ["m3"],
      author: u,
      date: "5 hours ago",
      additions: 12,
      deletions: 12,
      files: 2
    },
    {
      id: "f2",
      hash: "c7a3e52",
      message: "Add Apple Pay button",
      body: "Shows the Apple Pay sheet when the browser supports it and falls back to the card form.",
      branch: "feat/checkout",
      parents: ["f1"],
      author: c,
      date: "Yesterday",
      additions: 96,
      deletions: 8,
      files: 4
    },
    {
      id: "m3",
      hash: "2d9b6f4",
      message: "Merge branch fix/rounding",
      branch: "main",
      parents: ["m2", "x1"],
      author: f,
      date: "Yesterday",
      additions: 18,
      deletions: 6,
      files: 3
    },
    {
      id: "x1",
      hash: "a15e3c9",
      message: "Round tax per line item",
      body: "Totals now match the invoice when a cart mixes tax rates.",
      branch: "fix/rounding",
      parents: ["m2"],
      author: f,
      date: "2 days ago",
      additions: 18,
      deletions: 6,
      files: 3
    },
    {
      id: "f1",
      hash: "6b04d8e",
      message: "Move payment into its own step",
      body: "Splits the single checkout page into address, payment, and review steps.",
      branch: "feat/checkout",
      parents: ["m2"],
      author: c,
      date: "2 days ago",
      additions: 241,
      deletions: 117,
      files: 9
    },
    {
      id: "m2",
      hash: "e3c72a0",
      message: "Add order summary",
      branch: "main",
      parents: ["m1"],
      author: p,
      date: "3 days ago",
      additions: 132,
      deletions: 14,
      files: 5
    },
    {
      id: "m1",
      hash: "0f5d9b3",
      message: "Ship checkout v1",
      branch: "main",
      parents: [],
      author: p,
      date: "4 days ago",
      additions: 410,
      deletions: 0,
      files: 12
    }
  ], b = { number: 482, title: "Checkout redesign", branch: "feat/checkout" }, y = ["open", "merge", "rebase", "squash"], v = { open: "Before", merge: "Merge", rebase: "Rebase", squash: "Squash" }, _ = ["open", "rebase", "merge", "squash"], x = "__merge", k = "__squash", w = [
    "var(--bg-base)",
    "var(--series-2)",
    "var(--series-4)",
    "var(--series-3)"
  ], j = "(prefers-reduced-motion: reduce)", $ = (e2) => {
    let a2 = window.matchMedia(j);
    return a2.addEventListener("change", e2), () => a2.removeEventListener("change", e2);
  };
  function A(e2, a2, t2, r2) {
    let s2 = 3 * e2, n2 = 3 * (t2 - e2) - s2, i2 = 1 - s2 - n2, l2 = 3 * a2, d2 = 3 * (r2 - a2) - l2, o2 = 1 - l2 - d2;
    return (e3) => {
      if (e3 <= 0) return 0;
      if (e3 >= 1) return 1;
      let a3 = e3;
      for (let t3 = 0; t3 < 6; t3++) {
        let t4 = ((i2 * a3 + n2) * a3 + s2) * a3 - e3, r3 = (3 * i2 * a3 + 2 * n2) * a3 + s2;
        if (1e-5 > Math.abs(t4) || 1e-6 > Math.abs(r3)) break;
        a3 -= t4 / r3;
      }
      return ((o2 * a3 + d2) * a3 + l2) * a3;
    };
  }
  let N = A(0.45, 0, 0.15, 1), M = A(0.16, 1, 0.3, 1), R = (e2) => e2 < 0 ? 0 : e2 > 1 ? 1 : e2, E = (e2, a2, t2) => e2 + (a2 - e2) * t2, O = (e2, a2, t2) => {
    let r2 = R((t2 - e2) / (a2 - e2));
    return r2 * r2 * (3 - 2 * r2);
  }, L = (e2) => e2 < 0.5 ? 4 * e2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 3) / 2, q = (e2) => e2 * e2 * e2 * (e2 * (6 * e2 - 15) + 10), S = (e2) => Math.round(100 * e2) / 100, C = (e2, a2, t2 = `${a2}s`) => `${e2} ${1 === e2 ? a2 : t2}`;
  function W(e2, a2) {
    let t2 = "0123456789abcdef", r2 = "";
    for (let s2 = 0; s2 < e2.length; s2++) {
      let n2 = t2.indexOf(e2[e2.length - 1 - s2].toLowerCase());
      r2 += t2[(n2 < 0 ? s2 : n2) * 7 + a2 + 5 * s2 & 15];
    }
    return r2;
  }
  function B(e2, a2) {
    let t2 = e2.dur <= 0 ? 1 : R((a2 - e2.t0) / e2.dur), r2, s2, n2, i2 = 1, l2 = 0, d2 = -1;
    if ("flight" === e2.kind || "absorb" === e2.kind || "emit" === e2.kind) {
      l2 = O(0, 0.12, t2) * (1 - O(0.88, 1, t2));
      let a3 = R((t2 - 0.1) / 0.8);
      s2 = E(e2.fy, e2.ty, q(a3)), r2 = E(e2.fx, e2.tx, q(R((a3 - 0.12) / 0.76))), "absorb" === e2.kind ? (n2 = e2.fa * (1 - O(0.7, 0.95, t2)), i2 = 1 - 0.45 * O(0.7, 0.95, t2), d2 = e2.fa * (1 - O(0.3, 0.62, t2))) : "emit" === e2.kind ? (n2 = e2.ta * O(0.02, 0.22, t2), i2 = 0.55 + 0.45 * O(0.02, 0.3, t2), d2 = e2.ta * O(0.35, 0.7, t2)) : n2 = E(e2.fa, e2.ta, O(0, 0.3, t2));
    } else if ("appear" === e2.kind) {
      let a3 = M(t2);
      r2 = E(e2.fx, e2.tx, a3), s2 = E(e2.fy, e2.ty, a3), n2 = E(e2.fa, e2.ta, R(1.6 * t2)), i2 = E(e2.fs, 1, a3);
    } else if ("fade" === e2.kind) {
      let a3 = R(t2);
      r2 = e2.fx, s2 = e2.fy, n2 = E(e2.fa, e2.ta, a3), i2 = E(e2.fs, 0.6, a3);
    } else {
      let a3 = N(t2);
      r2 = E(e2.fx, e2.tx, a3), s2 = E(e2.fy, e2.ty, a3), n2 = E(e2.fa, e2.ta, a3), i2 = E(e2.fs, 1, a3);
    }
    e2.x = r2, e2.y = s2, e2.a = n2, e2.s = i2, e2.lift = l2, e2.ra = d2 < 0 ? n2 : d2;
  }
  let z = (e2) => e2.t0 + e2.dur;
  function I(e2, a2) {
    let t2 = e2.dur <= 0 ? 1 : R((a2 - e2.t0) / e2.dur);
    return e2.p = E(e2.fp, e2.tp, e2.linear ? t2 : L(t2)), e2.p;
  }
  let D = (e2) => 22 + 18 * e2, T = (e2) => 6 + (e2 + 0.5) * 44, U = (e2) => e2.split(/\s+/).filter(Boolean).slice(0, 2).map((e3) => e3[0]).join("").toUpperCase();
  function F({ add: e2, del: a2 }) {
    let t2 = e2 + a2, s2 = t2 ? Math.round(e2 / t2 * 5) : 0, n2 = t2 ? Math.min(5 - s2, Math.round(a2 / t2 * 5)) : 0;
    return (0, r.jsx)("span", {
      className: o().blocks,
      "aria-hidden": "true",
      children: [0, 1, 2, 3, 4].map(
        (e3) => (0, r.jsx)(
          "span",
          { "data-kind": e3 < s2 ? "add" : e3 < s2 + n2 ? "del" : void 0 },
          e3
        )
      )
    });
  }
  function P({
    commits: e2 = g,
    branches: a2 = m,
    pullRequest: t2 = b,
    strategy: d2,
    defaultStrategy: h2 = "open",
    onStrategyChange: c2,
    strategies: u2 = y,
    title: f2,
    autoplay: p2 = true,
    speed: A2 = 1,
    paused: N2 = false,
    accent: O2,
    label: q2,
    className: Z2,
    style: H2
  }) {
    let Y2 = (0, s.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), K2 = (0, s.useSyncExternalStore)(
      $,
      () => window.matchMedia(j).matches,
      () => false
    ), X = (0, s.useMemo)(
      () => (function(e3, a3, t3) {
        let r2 = a3[0]?.name ?? "main", s2 = {}, n2 = {};
        a3.forEach((e4, a4) => {
          s2[e4.name] = a4, n2[e4.name] = e4.color ?? w[a4 % w.length];
        });
        let i2 = (e4) => n2[e4] ?? w[0], l2 = (e4) => s2[e4] ?? 0, d3 = {};
        for (let a4 of e3) d3[a4.id] = a4;
        let o2 = e3.filter((e4) => e4.branch === t3.branch && e4.branch !== r2), h3 = new Set(o2.map((e4) => e4.id)), c3 = e3.filter((e4) => !h3.has(e4.id)), u3 = c3.find((e4) => e4.branch === r2) ?? c3[0], f3 = o2[0], p3 = o2[o2.length - 1], m2 = (e4) => o2.reduce((a4, t4) => a4 + (t4[e4] ?? 0), 0);
        f3 && (d3[x] = {
          id: x,
          hash: W(f3.hash, 3),
          message: `Merge pull request #${t3.number} from ${t3.branch}`,
          body: `Brings ${C(o2.length, "commit")} from ${t3.branch} into ${r2} and keeps them as they are.`,
          branch: r2,
          parents: [u3?.id ?? "", f3.id].filter(Boolean),
          author: f3.author,
          date: "Just now",
          additions: m2("additions"),
          deletions: m2("deletions"),
          files: m2("files")
        }, d3[k] = {
          id: k,
          hash: W(f3.hash, 11),
          message: `${t3.title} (#${t3.number})`,
          body: o2.slice().reverse().map((e4) => e4.message).join(". ") + ".",
          branch: t3.branch,
          parents: u3 ? [u3.id] : [],
          author: f3.author,
          date: "Just now",
          additions: m2("additions"),
          deletions: m2("deletions"),
          files: m2("files")
        });
        let g2 = [...e3.map((e4) => e4.id), ...f3 ? [x, k] : []], b2 = {};
        for (let e4 of g2) b2[e4] = i2(d3[e4].branch);
        let v2 = /* @__PURE__ */ new Map(), _2 = (e4) => {
          let a4 = /* @__PURE__ */ new Set(), t4 = e4 ? [e4] : [];
          for (; t4.length; ) {
            let e5 = t4.pop();
            if (!a4.has(e5) && d3[e5])
              for (let r3 of (a4.add(e5), d3[e5].parents ?? [])) t4.push(r3);
          }
          return a4;
        }, j2 = (a4) => {
          let s3, n3 = {}, h4 = {}, m3 = {};
          for (let e4 of g2)
            n3[e4] = d3[e4].parents ?? [], h4[e4] = d3[e4].hash, m3[e4] = l2(d3[e4].branch);
          m3[x] = 0, m3[k] = 0;
          let y2 = {}, w2 = (e4, a5) => {
            e4 && (y2[e4] ?? (y2[e4] = [])).push({ name: a5, color: i2(a5) });
          }, j3 = o2.length, $3 = "";
          if ("merge" === a4 && f3)
            s3 = [x, ...e3.map((e4) => e4.id)], w2(x, r2), w2(f3.id, t3.branch), $3 = `A merge commit brings ${C(j3, "commit")} into ${r2} and keeps both lines of history.`;
          else if ("rebase" === a4 && f3)
            s3 = [...o2.map((e4) => e4.id), ...c3.map((e4) => e4.id)], o2.forEach((e4, a5) => {
              m3[e4.id] = 0, h4[e4.id] = W(e4.hash, 5 + a5);
            }), p3 && u3 && (n3[p3.id] = [u3.id]), w2(f3.id, r2), w2(f3.id, t3.branch), $3 = `${C(j3, "commit")} replayed on top of ${r2} with new hashes. History stays in one line.`;
          else if ("squash" === a4 && f3)
            s3 = [k, ...c3.map((e4) => e4.id)], w2(k, r2), $3 = `${C(j3, "commit")} squashed into one commit on ${r2}.`;
          else if (s3 = e3.map((e4) => e4.id), w2(u3?.id, r2), f3) {
            w2(f3.id, t3.branch);
            let e4 = _2(u3?.id), a5 = _2(f3.id), s4 = 0;
            e4.forEach((e5) => {
              !a5.has(e5) && s4++;
            }), $3 = `${t3.branch} is ${C(j3, "commit")} ahead of ${r2} and ${s4} behind.`;
          } else $3 = `${C(e3.length, "commit")} on ${r2}.`;
          let A3 = {}, N3 = new Map(s3.map((e4, a5) => [e4, a5]));
          for (let e4 of g2) {
            let a5 = N3.get(e4);
            A3[e4] = void 0 === a5 ? { row: 0, lane: 0, vis: false } : { row: a5, lane: m3[e4], vis: true };
          }
          let M2 = /* @__PURE__ */ new Set();
          for (let e4 of s3)
            n3[e4].forEach((a5, t4) => {
              if (!N3.has(a5)) return;
              let r3 = `${e4}>${a5}`;
              M2.add(r3), v2.has(r3) || v2.set(r3, {
                key: r3,
                child: e4,
                parent: a5,
                merge: t4 > 0,
                color: t4 > 0 ? b2[a5] : b2[e4]
              });
            });
          return {
            order: s3,
            place: A3,
            hash: h4,
            tags: y2,
            edges: M2,
            summary: $3
          };
        }, $2 = {
          open: j2("open"),
          merge: j2("merge"),
          rebase: j2("rebase"),
          squash: j2("squash")
        };
        return {
          commits: d3,
          ids: g2,
          heads: h3,
          lanes: Math.max(1, a3.length),
          colorOf: b2,
          layouts: $2,
          edges: [...v2.values()],
          available: f3 ? [...y] : ["open"],
          base: r2,
          head: t3.branch,
          initial: e3.map((e4) => e4.id)
        };
      })(e2, a2, t2),
      [e2, a2, t2]
    ), J = (0, s.useMemo)(
      () => u2.filter((e3) => X.available.includes(e3)),
      [u2, X]
    ), [V, G] = (0, s.useState)(h2), Q = void 0 !== d2, ee = Q ? d2 : V, ea = X.available.includes(ee) ? ee : "open", et = X.layouts[ea], [er, es] = (0, s.useState)(null), [en, ei] = (0, s.useState)(""), [el, ed] = (0, s.useState)(false), eo = er && et.place[er]?.vis ? er : null, eh = (0, s.useRef)(null), ec = (0, s.useRef)(null), eu = (0, s.useRef)(null), ef = (0, s.useRef)(null), ep = (0, s.useRef)(null), em = (0, s.useRef)(/* @__PURE__ */ new Map()), eg = (0, s.useRef)(/* @__PURE__ */ new Map()), eb = (0, s.useRef)(/* @__PURE__ */ new Map()), ey = (0, s.useRef)(/* @__PURE__ */ new Map()), ev = (0, s.useRef)(/* @__PURE__ */ new Map()), e_ = (0, s.useRef)(/* @__PURE__ */ new WeakMap()), ex = (0, s.useRef)({
      clock: 0,
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map(),
      height: { from: 0, to: 0, t0: 0, dur: 0, v: 0 },
      busyUntil: 0,
      introduced: false,
      shown: null,
      model: null,
      visible: false,
      raf: 0,
      last: 0,
      hovering: false,
      touched: false,
      card: { y: 0, open: false, h: 0 },
      active: null
    }), ek = (0, s.useRef)(() => {
    }), ew = (0, s.useRef)({
      speed: A2,
      reduced: K2,
      paused: N2,
      autoplay: p2,
      controlled: Q,
      strategy: ea,
      offered: J
    });
    (0, s.useLayoutEffect)(() => {
      ew.current = {
        speed: A2,
        reduced: K2,
        paused: N2,
        autoplay: p2,
        controlled: Q,
        strategy: ea,
        offered: J
      };
    });
    let ej = (0, s.useCallback)((e3, a3, t3, r2 = true) => {
      let s2 = e_.current.get(e3);
      s2 || e_.current.set(e3, s2 = {}), s2[a3] !== t3 && (s2[a3] = t3, r2 ? e3.setAttribute(a3, t3) : e3.style.setProperty(a3, t3));
    }, []), e$ = (0, s.useCallback)((e3) => {
      let a3 = ex.current;
      if (a3.model === e3) return;
      a3.model = e3, a3.nodes.clear(), a3.edges.clear();
      let t3 = e3.layouts.open;
      for (let r2 of e3.ids) {
        let e4 = t3.place[r2], s2 = e4.lane, n2 = e4.row;
        a3.nodes.set(r2, {
          fx: s2,
          fy: n2,
          fa: 0,
          fs: 0.35,
          tx: s2,
          ty: n2,
          ta: 0,
          t0: 0,
          dur: 0,
          kind: "shift",
          land: 0,
          pulseAt: -9,
          hashAt: 0,
          hash: t3.hash[r2],
          shown: "",
          hv: 0,
          x: s2,
          y: n2,
          a: 0,
          s: 0.35,
          lift: 0,
          ra: 0
        });
      }
      for (let t4 of e3.edges)
        a3.edges.set(t4.key, { fp: 0, tp: 0, t0: 0, dur: 0, linear: false, p: 0 });
      a3.height = {
        from: t3.order.length,
        to: t3.order.length,
        t0: 0,
        dur: 0,
        v: t3.order.length
      }, a3.introduced = false, a3.shown = null;
    }, []), eA = (0, s.useCallback)((e3, a3, t3) => {
      let r2 = ex.current, s2 = r2.clock, n2 = e3.layouts[a3], i2 = r2.shown, l2 = !r2.introduced;
      for (let e4 of r2.nodes.values()) B(e4, s2);
      for (let e4 of r2.edges.values()) I(e4, s2);
      if (t3) {
        for (let a4 of e3.ids) {
          let e4 = r2.nodes.get(a4), t4 = n2.place[a4];
          Object.assign(e4, {
            fx: t4.lane,
            fy: t4.row,
            fa: +!!t4.vis,
            fs: 1,
            tx: t4.lane,
            ty: t4.row,
            ta: +!!t4.vis,
            t0: s2,
            dur: 0,
            kind: "shift",
            land: s2,
            pulseAt: -9,
            hashAt: s2,
            hash: n2.hash[a4]
          });
        }
        for (let [e4, a4] of r2.edges)
          Object.assign(a4, {
            fp: +!!n2.edges.has(e4),
            tp: +!!n2.edges.has(e4),
            t0: s2,
            dur: 0
          });
        r2.height = {
          from: n2.order.length,
          to: n2.order.length,
          t0: s2,
          dur: 0,
          v: n2.order.length
        }, r2.busyUntil = s2, r2.introduced = true;
      } else if (l2 || null === i2) {
        let a4 = n2.order.length, t4 = (e4) => s2 + (a4 - 1 - e4) * 0.085;
        for (let a5 of e3.ids) {
          let e4 = r2.nodes.get(a5), i3 = n2.place[a5];
          Object.assign(e4, {
            fx: i3.lane,
            fy: i3.row,
            fa: 0,
            fs: 0.35,
            tx: i3.lane,
            ty: i3.row,
            ta: +!!i3.vis,
            t0: t4(i3.row),
            dur: 0.5,
            kind: "appear",
            land: t4(i3.row),
            pulseAt: -9,
            hashAt: s2,
            hash: n2.hash[a5]
          });
        }
        for (let a5 of e3.edges) {
          let e4 = r2.edges.get(a5.key);
          if (!n2.edges.has(a5.key)) {
            Object.assign(e4, { fp: 0, tp: 0, t0: s2, dur: 0 });
            continue;
          }
          let i3 = n2.place[a5.parent].row, l3 = n2.place[a5.child].row;
          Object.assign(e4, {
            fp: 0,
            tp: 1,
            t0: t4(i3) + 0.04,
            dur: Math.max(0.05, (i3 - l3) * 0.085),
            linear: true
          });
        }
        r2.height = { from: a4, to: a4, t0: s2, dur: 0, v: a4 }, r2.busyUntil = s2 + 0.085 * a4 + 0.5, r2.introduced = true;
      } else {
        let t4 = e3.layouts[i2], l3 = [];
        for (let r3 of e3.ids) {
          let s3 = t4.place[r3], d4 = n2.place[r3];
          s3.vis && d4.vis && s3.lane !== d4.lane ? l3.push({ id: r3, kind: "flight", sortRow: s3.row }) : s3.vis && !d4.vis && e3.heads.has(r3) && "squash" === a3 ? l3.push({ id: r3, kind: "absorb", sortRow: s3.row }) : !s3.vis && d4.vis && e3.heads.has(r3) && "squash" === i2 && l3.push({ id: r3, kind: "emit", sortRow: d4.row + 100 });
        }
        l3.sort((e4, a4) => a4.sortRow - e4.sortRow);
        let d3 = new Map(l3.map((e4, a4) => [e4.id, { kind: e4.kind, k: a4 }])), o2 = l3.length ? s2 + (l3.length - 1) * 0.15 + 1.1 : s2;
        for (let a4 of e3.ids) {
          let e4 = r2.nodes.get(a4), i3 = t4.place[a4], h4 = n2.place[a4], c4 = {
            fx: e4.x,
            fy: e4.y,
            fa: e4.a,
            fs: e4.s,
            tx: h4.lane,
            ty: h4.row,
            ta: +!!h4.vis,
            hash: n2.hash[a4]
          }, u3 = d3.get(a4);
          if (u3) {
            let a5 = s2 + 0.15 * u3.k;
            Object.assign(e4, c4, {
              t0: a5,
              dur: 1.1,
              kind: u3.kind,
              land: a5 + 0.9460000000000001,
              pulseAt: "absorb" === u3.kind ? -9 : a5 + 0.9460000000000001,
              hashAt: a5 + 0.8800000000000001
            }), "emit" === u3.kind && (e4.fa = 0);
          } else if (!i3.vis && h4.vis) {
            let a5 = l3.length ? o2 - 0.26 : s2 + 0.16;
            Object.assign(e4, c4, {
              fx: h4.lane,
              fy: h4.row,
              fa: 0,
              fs: 0.35,
              t0: a5,
              dur: 0.5,
              kind: "appear",
              land: a5 + 0.22,
              pulseAt: a5 + 0.2,
              hashAt: a5
            });
          } else if (i3.vis && !h4.vis)
            Object.assign(e4, c4, {
              tx: e4.x,
              ty: e4.y,
              t0: s2,
              dur: 0.24,
              kind: "fade",
              land: s2,
              pulseAt: -9,
              hashAt: s2
            });
          else if (i3.vis || h4.vis) {
            let a5 = s2 + 0.08 * !!l3.length, t5 = 0.6 + 0.1 * Math.min(3, Math.abs(h4.row - e4.y));
            Object.assign(e4, c4, {
              t0: a5,
              dur: t5,
              kind: "shift",
              land: a5 + 0.6 * t5,
              hashAt: a5
            });
          } else
            Object.assign(e4, c4, {
              fx: h4.lane,
              fy: h4.row,
              fa: 0,
              t0: s2,
              dur: 0,
              kind: "shift",
              land: s2,
              pulseAt: -9,
              hashAt: s2
            });
        }
        let h3 = o2;
        for (let a4 of e3.edges) {
          let e4 = r2.edges.get(a4.key), i3 = t4.edges.has(a4.key);
          if (n2.edges.has(a4.key)) {
            if (i3 && e4.p > 0.999) {
              Object.assign(e4, { fp: 1, tp: 1, t0: s2, dur: 0, linear: false });
              continue;
            }
            let t5 = i3 ? s2 : Math.max(
              r2.nodes.get(a4.child).land,
              r2.nodes.get(a4.parent).land
            );
            Object.assign(e4, {
              fp: e4.p,
              tp: 1,
              t0: t5,
              dur: 0.36,
              linear: false
            }), h3 = Math.max(h3, t5 + 0.36);
          } else
            Object.assign(e4, {
              fp: e4.p,
              tp: 0,
              t0: s2,
              dur: 0.22,
              linear: false
            });
        }
        for (let e4 of r2.nodes.values())
          h3 = Math.max(h3, z(e4), e4.pulseAt + 0.6);
        let c3 = n2.order.length >= r2.height.v;
        r2.height = {
          from: r2.height.v,
          to: n2.order.length,
          t0: c3 ? s2 : Math.max(s2, o2 - 0.45),
          dur: 0.55,
          v: r2.height.v
        }, r2.busyUntil = Math.max(h3, r2.height.t0 + 0.55);
      }
      r2.shown = a3;
    }, []);
    (0, s.useLayoutEffect)(() => {
      ek.current = (e3) => {
        let a3 = ex.current;
        a3.raf = 0;
        let t3 = a3.model;
        if (!t3 || !a3.visible || document.hidden) return;
        let r2 = ew.current, s2 = Math.min(0.05, a3.last ? (e3 - a3.last) / 1e3 : 0);
        a3.last = e3, a3.clock += s2 * Math.max(0, r2.speed);
        let n2 = a3.clock, i2 = a3.height, l2 = i2.dur <= 0 ? 1 : R((n2 - i2.t0) / i2.dur);
        i2.v = E(i2.from, i2.to, L(l2));
        let d3 = ec.current;
        d3 && ej(d3, "height", `${S(44 * i2.v + 12)}px`, false);
        let o2 = n2 < a3.busyUntil;
        for (let [e4, t4] of a3.nodes) {
          B(t4, n2);
          let r3 = +(a3.active === e4), i3 = 1 - Math.exp(-(20 * s2));
          t4.hv += (r3 - t4.hv) * i3, 2e-3 > Math.abs(r3 - t4.hv) ? t4.hv = r3 : o2 = true;
          let l3 = D(t4.x), d4 = T(t4.y), h4 = eb.current.get(e4);
          if (h4) {
            let e5 = t4.s * (1 + 0.38 * t4.lift + 0.28 * t4.hv);
            ej(h4, "transform", `translate(${S(l3)} ${S(d4)}) scale(${S(e5)})`), ej(h4, "opacity", `${S(t4.a)}`);
          }
          let c3 = ey.current.get(e4);
          if (c3) {
            let e5 = (n2 - t4.pulseAt) / 0.6, a4 = e5 >= 0 && e5 < 1, r4 = a4 ? M(e5) : 0;
            ej(c3, "cx", `${S(l3)}`), ej(c3, "cy", `${S(d4)}`), ej(c3, "r", `${S(5 + 10 * r4)}`), ej(c3, "opacity", a4 ? `${S(0.5 * (1 - e5))}` : "0");
          }
          let u3 = em.current.get(e4);
          u3 && (ej(
            u3,
            "transform",
            `translate3d(0, ${S(44 * t4.y)}px, 0) scale(${(1 + 8e-3 * t4.lift).toFixed(4)})`,
            false
          ), ej(u3, "opacity", `${S(t4.ra)}`, false), ej(u3, "--lift", `${S(t4.lift)}`, false), ej(u3, "visibility", t4.ra < 0.01 ? "hidden" : "visible", false), ej(u3, "z-index", t4.lift > 0.01 ? "3" : "1", false));
          let f3 = eg.current.get(e4), p3 = n2 >= t4.hashAt ? t4.hash : t4.shown || t4.hash;
          if (f3 && p3 !== t4.shown) {
            let e5 = "" !== t4.shown;
            t4.shown = p3, f3.textContent = p3, e5 && (f3.removeAttribute("data-flash"), f3.offsetWidth, f3.setAttribute("data-flash", ""));
          }
        }
        for (let e4 of t3.edges) {
          let t4 = I(a3.edges.get(e4.key), n2), r3 = ev.current.get(e4.key);
          if (!r3) continue;
          if (t4 <= 1e-3) {
            ej(r3, "opacity", "0");
            continue;
          }
          let s3 = a3.nodes.get(e4.child), i3 = a3.nodes.get(e4.parent);
          ej(
            r3,
            "d",
            (function(e5, a4, t5, r4, s4) {
              let n3 = a4 - r4, i4 = Math.max(
                0,
                Math.min(44 * (0.56 + 0.26 * R(Math.abs(t5 - e5) / 18 - 1)), n3)
              ), l3 = 0.56 * i4;
              return s4 ? `M${S(e5)} ${S(a4)}L${S(e5)} ${S(r4 + i4)}C${S(e5)} ${S(r4 + i4 - l3)} ${S(t5)} ${S(r4 + l3)} ${S(t5)} ${S(r4)}` : `M${S(e5)} ${S(a4)}C${S(e5)} ${S(a4 - l3)} ${S(t5)} ${S(a4 - i4 + l3)} ${S(t5)} ${S(a4 - i4)}L${S(t5)} ${S(r4)}`;
            })(D(i3.x), T(i3.y), D(s3.x), T(s3.y), e4.merge)
          ), ej(r3, "opacity", "1"), ej(r3, "stroke-dasharray", t4 >= 0.999 ? "none" : `${S(t4)} 2`);
        }
        let h3 = ef.current;
        if (h3 && a3.active) {
          let e4 = a3.nodes.get(a3.active);
          if (e4) {
            let t4 = 44 * i2.v + 12, r3 = 6 + (e4.y + 1) * 44 + 4, n3 = 6 + 44 * e4.y - a3.card.h - 4, l3 = r3 + a3.card.h > t4 + 24 && n3 > -24 ? n3 : r3;
            a3.card.open || (a3.card.y = l3, a3.card.open = true);
            let d4 = 1 - Math.exp(-(22 * s2));
            a3.card.y += (l3 - a3.card.y) * d4, 0.3 > Math.abs(l3 - a3.card.y) ? a3.card.y = l3 : o2 = true, ej(h3, "transform", `translate3d(0, ${S(a3.card.y)}px, 0)`, false);
          }
        } else a3.card.open = false;
        if (r2.autoplay && !r2.controlled && !r2.paused && !r2.reduced && r2.speed > 0 && !a3.touched && !a3.hovering && a3.introduced && r2.offered.length > 1 && (o2 = true, n2 > a3.busyUntil + 2.6)) {
          let e4 = _.filter((e5) => r2.offered.includes(e5)), t4 = e4[(e4.indexOf(r2.strategy) + 1) % e4.length];
          a3.busyUntil = n2 + 99, G(t4);
        }
        o2 && (a3.raf = requestAnimationFrame(ek.current));
      };
    }, [ej]);
    let eN = (0, s.useCallback)(() => {
      let e3 = ex.current;
      e3.raf || !e3.visible || document.hidden || (e3.last = 0, e3.raf = requestAnimationFrame(ek.current));
    }, []);
    (0, s.useLayoutEffect)(() => {
      let e3 = ex.current;
      if (e$(X), e3.shown === ea && e3.introduced) return;
      let a3 = K2 || A2 <= 0;
      if (e3.introduced || a3) eA(X, ea, a3);
      else {
        if (!e3.visible) return;
        eA(X, ea, false);
      }
      if (eN(), a3) {
        e3.last = 0;
        let a4 = e3.visible;
        e3.visible = true, ek.current(performance.now()), e3.visible = a4, e3.raf && !a4 && (cancelAnimationFrame(e3.raf), e3.raf = 0);
      }
    }, [X, ea, K2, A2, eA, e$, eN]), (0, s.useEffect)(() => {
      let e3 = eh.current;
      if (!e3) return;
      let a3 = ex.current, t3 = new IntersectionObserver(
        (e4) => {
          a3.visible = e4.some((e5) => e5.isIntersecting), a3.visible && (() => {
            if (!a3.introduced && a3.model) {
              let e5 = ew.current.reduced || ew.current.speed <= 0;
              eA(a3.model, ew.current.strategy, e5);
            }
            eN();
          })();
        },
        { threshold: 0.15 }
      );
      t3.observe(e3);
      let r2 = () => {
        document.hidden || eN();
      };
      return document.addEventListener("visibilitychange", r2), () => {
        t3.disconnect(), document.removeEventListener("visibilitychange", r2), a3.raf && cancelAnimationFrame(a3.raf), a3.raf = 0;
      };
    }, [eN, eA]), (0, s.useEffect)(() => {
      eN();
    }, [N2, p2, A2, eN]), (0, s.useLayoutEffect)(() => {
      let e3 = ex.current;
      e3.active = eo;
      let a3 = ef.current;
      if (a3 && eo) {
        e3.card.h = a3.offsetHeight;
        let t3 = e3.nodes.get(eo), r2 = 44 * e3.height.v + 12;
        t3 && ed(6 + (t3.y + 1) * 44 + 4 + e3.card.h > r2 + 24);
      }
      eN();
    }, [eo, eN]);
    let eM = (0, s.useCallback)(
      (e3, a3 = true) => {
        a3 && (ex.current.touched = true), Q || G(e3), c2?.(e3), a3 && ei(X.layouts[e3].summary);
      },
      [Q, c2, X]
    ), [eR, eE] = (0, s.useState)(null);
    (0, s.useLayoutEffect)(() => {
      let e3 = ep.current;
      if (!e3) return;
      let a3 = () => {
        let a4 = e3.querySelector(`[data-value="${ea}"]`);
        a4 && eE(
          (e4) => e4 && e4.x === a4.offsetLeft && e4.w === a4.offsetWidth ? e4 : { x: a4.offsetLeft, w: a4.offsetWidth }
        );
      };
      a3();
      let t3 = new ResizeObserver(a3);
      return t3.observe(e3), () => t3.disconnect();
    }, [ea, J]), (0, s.useEffect)(() => {
      if (!eo) return;
      let e3 = (e4) => {
        "mouse" !== e4.pointerType && (ec.current?.contains(e4.target) || es(null));
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [eo]);
    let eO = f2 ?? t2.title, eL = 44 + (X.lanes - 1) * 18, eq = eo ? X.commits[eo] : null, [eS, eC] = (0, s.useState)({ id: null, session: 0, open: false });
    eo && (eS.id !== eo || !eS.open) ? eC({ id: eo, session: eS.open ? eS.session : eS.session + 1, open: true }) : !eo && eS.open && eC({ ...eS, open: false });
    let eW = eq ?? (eS.id ? X.commits[eS.id] ?? null : null), eB = eq?.branch, ez = [...et.order, ...X.ids.filter((e3) => !et.place[e3].vis)], eI = (e3) => `${Y2}-c-${e3.replace(/[^a-zA-Z0-9_-]/g, "")}`, eD = {
      ...H2,
      "--bg-gutter": `${eL}px`,
      ...O2 ? { "--bg-base": O2 } : null
    };
    return (0, r.jsxs)("section", {
      ref: eh,
      className: [o().root, Z2].filter(Boolean).join(" "),
      style: eD,
      "aria-label": q2 ?? `${eO}, commit graph of ${X.head} and ${X.base}`,
      onPointerEnter: (e3) => {
        "mouse" === e3.pointerType && (ex.current.hovering = true);
      },
      onPointerLeave: () => {
        ex.current.hovering = false, eN();
      },
      children: [
        (0, r.jsxs)("div", {
          className: o().header,
          children: [
            eO ? (0, r.jsxs)("div", {
              className: o().heading,
              children: [
                (0, r.jsx)(n.A, {
                  className: o().headIcon,
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, r.jsx)("span", { className: o().title, children: eO }),
                (0, r.jsxs)("span", {
                  className: o().number,
                  children: ["#", t2.number]
                })
              ]
            }) : null,
            J.length > 1 ? (0, r.jsxs)("div", {
              ref: ep,
              className: o().seg,
              role: "radiogroup",
              "aria-label": "Merge strategy preview",
              onKeyDown: (e3) => {
                let a3 = J.indexOf(ea), t3 = -1;
                "ArrowRight" === e3.key || "ArrowDown" === e3.key ? t3 = (a3 + 1) % J.length : "ArrowLeft" === e3.key || "ArrowUp" === e3.key ? t3 = (a3 - 1 + J.length) % J.length : "Home" === e3.key ? t3 = 0 : "End" === e3.key && (t3 = J.length - 1), t3 < 0 || (e3.preventDefault(), eM(J[t3]), ep.current?.querySelector(`[data-value="${J[t3]}"]`)?.focus());
              },
              children: [
                (0, r.jsx)("span", {
                  className: o().thumb,
                  "aria-hidden": "true",
                  "data-ready": eR ? "" : void 0,
                  style: eR ? { transform: `translateX(${eR.x}px)`, width: eR.w } : void 0
                }),
                J.map(
                  (e3) => (0, r.jsx)(
                    "button",
                    {
                      type: "button",
                      role: "radio",
                      "data-value": e3,
                      "aria-checked": ea === e3,
                      tabIndex: ea === e3 ? 0 : -1,
                      className: o().segButton,
                      onClick: () => {
                        e3 !== ea && eM(e3);
                      },
                      children: v[e3]
                    },
                    e3
                  )
                )
              ]
            }) : null
          ]
        }),
        (0, r.jsxs)("div", {
          ref: ec,
          className: o().stage,
          style: { height: 44 * X.initial.length + 12 },
          onPointerLeave: (e3) => {
            "mouse" === e3.pointerType && document.activeElement !== e3.currentTarget.querySelector("[role=listbox]") && es(null);
          },
          children: [
            (0, r.jsx)("div", {
              className: o().list,
              role: "listbox",
              tabIndex: 0,
              "aria-label": `Commits, newest first. ${et.summary}`,
              "aria-activedescendant": eo ? eI(eo) : void 0,
              onKeyDown: (e3) => {
                let a3 = et.order, t3 = eo ? a3.indexOf(eo) : -1, r2 = -2;
                if ("ArrowDown" === e3.key) r2 = Math.min(a3.length - 1, t3 + 1);
                else if ("ArrowUp" === e3.key)
                  r2 = t3 < 0 ? 0 : Math.max(0, t3 - 1);
                else if ("Home" === e3.key) r2 = 0;
                else if ("End" === e3.key) r2 = a3.length - 1;
                else if ("Escape" === e3.key && eo) {
                  e3.preventDefault(), es(null);
                  return;
                }
                -2 !== r2 && (e3.preventDefault(), ex.current.touched = true, es(a3[r2]));
              },
              onFocus: () => {
                !eo && et.order.length && es(et.order[0]);
              },
              onBlur: () => es(null),
              children: ez.map((e3) => {
                let a3, t3 = X.commits[e3], s2 = et.place[e3].vis, n2 = et.tags[e3] ?? [], l2 = e3 === x || (t3.parents?.length ?? 0) > 1;
                return (0, r.jsxs)(
                  "div",
                  {
                    ref: (a4) => {
                      a4 ? em.current.set(e3, a4) : em.current.delete(e3);
                    },
                    id: s2 ? eI(e3) : void 0,
                    role: s2 ? "option" : void 0,
                    "aria-selected": s2 ? eo === e3 : void 0,
                    "aria-hidden": !s2 || void 0,
                    "aria-label": s2 ? `${t3.message}. ${et.hash[e3]} by ${t3.author.name}, ${t3.date}. ${a3 = [], void 0 !== t3.additions && a3.push(C(t3.additions, "addition")), void 0 !== t3.deletions && a3.push(C(t3.deletions, "deletion")), void 0 !== t3.files && a3.push(C(t3.files, "file")), a3.join(", ")}${n2.length ? `. ${n2.map((e4) => e4.name).join(" and ")} points here` : ""}.` : void 0,
                    className: o().row,
                    "data-active": eo === e3 ? "" : void 0,
                    "data-dim": eB && t3.branch !== eB ? "" : void 0,
                    onPointerEnter: (a4) => {
                      "mouse" === a4.pointerType && es(e3);
                    },
                    onPointerDown: (a4) => {
                      ex.current.touched = true, "mouse" !== a4.pointerType && es((a5) => a5 === e3 ? null : e3);
                    },
                    style: {
                      transform: `translate3d(0, ${44 * X.layouts.open.place[e3].row}px, 0)`,
                      opacity: 0
                    },
                    children: [
                      (0, r.jsxs)("span", {
                        className: o().message,
                        children: [
                          l2 ? (0, r.jsx)(i.A, {
                            className: o().kindIcon,
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }) : null,
                          (0, r.jsx)("span", {
                            className: o().messageText,
                            children: t3.message
                          }),
                          n2.length ? (0, r.jsx)(
                            "span",
                            {
                              className: o().tags,
                              children: n2.map(
                                (e4) => (0, r.jsx)(
                                  "span",
                                  {
                                    className: o().tag,
                                    style: { "--tag": e4.color },
                                    children: (0, r.jsx)("span", {
                                      className: o().tagName,
                                      children: e4.name
                                    })
                                  },
                                  e4.name
                                )
                              )
                            },
                            `${ea}-${n2.map((e4) => e4.name).join()}`
                          ) : null
                        ]
                      }),
                      (0, r.jsx)("span", {
                        className: o().author,
                        children: t3.author.avatar ? (0, r.jsx)("img", {
                          src: t3.author.avatar,
                          alt: "",
                          width: 20,
                          height: 20,
                          decoding: "async",
                          draggable: false
                        }) : (0, r.jsx)("span", {
                          className: o().initials,
                          children: U(t3.author.name)
                        })
                      }),
                      (0, r.jsx)("span", {
                        className: o().hash,
                        ref: (a4) => {
                          a4 ? eg.current.set(e3, a4) : eg.current.delete(e3);
                        }
                      }),
                      (0, r.jsx)("span", {
                        className: o().date,
                        children: t3.date
                      })
                    ]
                  },
                  e3
                );
              })
            }),
            (0, r.jsxs)("svg", {
              ref: eu,
              className: o().svg,
              width: eL,
              "aria-hidden": "true",
              focusable: "false",
              children: [
                (0, r.jsx)("g", {
                  className: o().edges,
                  children: X.edges.map(
                    (e3) => (0, r.jsx)(
                      "path",
                      {
                        ref: (a3) => {
                          a3 ? ev.current.set(e3.key, a3) : ev.current.delete(e3.key);
                        },
                        className: o().edge,
                        "data-dim": eB && X.commits[e3.child].branch !== eB && X.commits[e3.parent].branch !== eB ? "" : void 0,
                        style: { stroke: e3.color },
                        pathLength: 1,
                        opacity: 0
                      },
                      e3.key
                    )
                  )
                }),
                (0, r.jsx)("g", {
                  children: X.ids.map(
                    (e3) => (0, r.jsx)(
                      "circle",
                      {
                        ref: (a3) => {
                          a3 ? ey.current.set(e3, a3) : ey.current.delete(e3);
                        },
                        className: o().ring,
                        style: { stroke: X.colorOf[e3] },
                        r: 5,
                        opacity: 0
                      },
                      e3
                    )
                  )
                }),
                (0, r.jsx)("g", {
                  children: X.ids.map((e3) => {
                    let a3 = X.commits[e3], t3 = e3 === x || (a3.parents?.length ?? 0) > 1;
                    return (0, r.jsx)(
                      "g",
                      {
                        className: o().nodeWrap,
                        "data-dim": eB && a3.branch !== eB ? "" : void 0,
                        children: (0, r.jsxs)("g", {
                          ref: (a4) => {
                            a4 ? eb.current.set(e3, a4) : eb.current.delete(e3);
                          },
                          opacity: 0,
                          children: [
                            (0, r.jsx)("circle", { className: o().moat, r: 8 }),
                            (0, r.jsx)("circle", {
                              className: o().dot,
                              r: t3 ? 4.25 : 5,
                              strokeWidth: 2 * !!t3,
                              style: {
                                fill: t3 ? "var(--surface)" : X.colorOf[e3],
                                stroke: X.colorOf[e3]
                              }
                            })
                          ]
                        })
                      },
                      e3
                    );
                  })
                })
              ]
            }),
            (0, r.jsx)("div", {
              ref: ef,
              className: o().cardWrap,
              "data-open": eq ? "" : void 0,
              "data-above": el ? "" : void 0,
              "aria-hidden": "true",
              children: eW ? (0, r.jsxs)(
                "div",
                {
                  className: o().card,
                  children: [
                    (0, r.jsx)("div", {
                      className: o().cardTitle,
                      children: eW.message
                    }),
                    eW.body ? (0, r.jsx)("p", {
                      className: o().cardBody,
                      children: eW.body
                    }) : null,
                    (0, r.jsxs)("div", {
                      className: o().cardMeta,
                      children: [
                        eW.author.avatar ? (0, r.jsx)("img", {
                          className: o().cardAvatar,
                          src: eW.author.avatar,
                          alt: "",
                          width: 20,
                          height: 20,
                          decoding: "async",
                          draggable: false
                        }) : (0, r.jsx)("span", {
                          className: `${o().initials} ${o().cardAvatar}`,
                          children: U(eW.author.name)
                        }),
                        (0, r.jsx)("span", {
                          className: o().cardAuthor,
                          children: eW.author.name
                        }),
                        (0, r.jsx)("span", {
                          className: o().cardDate,
                          children: eW.date
                        })
                      ]
                    }),
                    (0, r.jsxs)("div", {
                      className: o().cardFoot,
                      children: [
                        (0, r.jsxs)("span", {
                          className: o().cardHash,
                          children: [
                            (0, r.jsx)(l.A, {
                              size: 14,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            et.hash[eW.id]
                          ]
                        }),
                        (0, r.jsxs)("span", {
                          className: o().stats,
                          children: [
                            void 0 !== eW.additions ? (0, r.jsxs)("span", {
                              className: o().add,
                              children: ["+", eW.additions]
                            }) : null,
                            void 0 !== eW.deletions ? (0, r.jsxs)("span", {
                              className: o().del,
                              children: ["\u2212", eW.deletions]
                            }) : null,
                            (0, r.jsx)(F, {
                              add: eW.additions ?? 0,
                              del: eW.deletions ?? 0
                            })
                          ]
                        }),
                        void 0 !== eW.files ? (0, r.jsx)("span", {
                          className: o().files,
                          children: C(eW.files, "file")
                        }) : null
                      ]
                    })
                  ]
                },
                eS.session
              ) : null
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: o().footer,
          children: (0, r.jsx)("span", {
            className: o().summary,
            children: et.summary
          })
        }),
        (0, r.jsx)("div", {
          className: o().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: en
        })
      ]
    });
  }
  var Z = t(93257), H = t.n(Z);
  function Y() {
    return (0, r.jsx)("div", {
      className: H().demo,
      "data-canvas": "wide",
      children: (0, r.jsx)(P, {})
    });
  }
  let K = Y;
}

__m(__module,__exports,__require);
}