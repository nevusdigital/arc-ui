/* orbit-menu (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(5937, function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.d(a, { A: () => n });
  var s = i(51811);
  let t = {
    name: "share-2",
    size: 24,
    node: [
      ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
      ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
      ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
      [
        "line",
        { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }
      ],
      [
        "line",
        { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }
      ]
    ]
  };
  t.node;
  let n = (0, s.A)(t);
}

__m(__module,__exports,__require);
});
A.regCss(6980, ".demo{container-type:inline-size;display:grid;gap:14px;width:min(100%,640px);font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.stage{position:relative;overflow:hidden;height:440px;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface-muted);isolation:isolate}\n@container (max-width: 520px){.stage{height:420px}\n.cardArea{position:absolute;top:24px;right:16px;left:16px;display:grid;justify-items:center;transform-origin:50% 30%}\n.cardArea{top:16px}\n.card{width:min(100%,360px);overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);box-shadow:var(--shadow-raised)}\n.photo{position:relative;height:200px;background:var(--surface-muted)}\n.photo img{object-fit:cover;object-position:50% 60%}\n.photo{height:170px}\n.body{display:grid;gap:12px;padding:14px 16px 16px}\n.byline{display:flex;align-items:center;gap:10px}\n.avatar{flex:none;border-radius:50%;object-fit:cover}\n.names{display:grid;min-width:0;gap:1px}\n.title{color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:1.3}\n.meta,.title{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.meta{color:var(--text-secondary);font-size:var(--text-xs);line-height:1.4}\n.chips{display:flex;min-height:26px;flex-wrap:wrap;align-items:center;gap:6px}\n.placeholder{color:var(--text-muted);font-size:var(--text-xs)}\n.chip{display:inline-flex;height:26px;align-items:center;gap:5px;padding:0 10px;border:1px solid var(--border-subtle);border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;white-space:nowrap}\n.chip:has(.chipAvatar){padding-left:4px}\n.chipAvatar{border-radius:50%;object-fit:cover}\n.chipText{display:block;font-variant-numeric:tabular-nums}\n.empty{display:grid;width:min(100%,360px);justify-items:center;gap:6px;padding:40px 20px 32px;border:1px dashed var(--border-strong);border-radius:var(--radius-panel);text-align:center}\n.emptyTitle{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500}\n.emptyBody{margin:0 0 10px;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.orbit{position:absolute;bottom:30px;left:50%;translate:-50% 0}\n.footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 16px}\n.status{position:relative;flex:1 1 16rem;min-width:0;margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.status{min-height:calc(2em * var(--leading-body))}\n.statusText{display:block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"demo":"demo","stage":"stage","cardArea":"cardArea","card":"card","photo":"photo","body":"body","byline":"byline","avatar":"avatar","names":"names","title":"title","meta":"meta","chips":"chips","placeholder":"placeholder","chip":"chip","chipAvatar":"chipAvatar","chipText":"chipText","empty":"empty","emptyTitle":"emptyTitle","emptyBody":"emptyBody","orbit":"orbit","footer":"footer","status":"status","statusText":"statusText","srOnly":"srOnly"});
A.reg(30600, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => s });
  var i = t(51811);
  let n = {
    name: "folder-plus",
    size: 24,
    node: [
      ["path", { d: "M12 10v6", key: "1bos4e" }],
      ["path", { d: "M9 13h6", key: "1uhe8q" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ]
    ]
  };
  n.node;
  let s = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(49551, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { OrbitMenuDemo: () => eu, default: () => ec });
  var a = n(95155), i = n(12115), r = n(5772), o = n(80642), l = n(25354), s = n(18310), d = n(54757), u = n(30600), c = n(5937), p = n(50825), m = n(25879), h = n(92298), y = n(51288), x = n(28245), f = n(92171), b = n(55809), _ = n(64577), v = n(7770), g = n(96588), k = n.n(g);
  let { spring: j, duration: w, ease: A, blur: M, stagger: P } = v.T, N = [...A.enter], R = [...A.standard], S = ({ visualDuration: e2, bounce: t2 }) => {
    let n2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: n2 * n2,
      damping: 2 * (1 - t2) * n2,
      mass: 1
    };
  }, I = S(j.snappy), $ = S(j.morph), Y = S({ visualDuration: 0.5, bounce: 0 }), L = S({ visualDuration: 0.32, bounce: 0 }), E = S({ visualDuration: 0.34, bounce: 0 }), z = { duration: 0 }, T = (e2) => e2 * Math.PI / 180, D = (e2) => Math.min(1, Math.max(0, e2)), G = (e2, t2, n2 = 0.55) => e2 * t2 * n2 / (t2 + n2 * e2), C = (e2, t2) => [Math.cos(t2) * e2, Math.sin(t2) * e2], F = (e2, t2, n2) => {
    if (e2 < 0.5) return "M0 0";
    let [a2, i2] = C(e2, t2), [r2, o2] = C(e2, n2);
    return `M${a2.toFixed(2)} ${i2.toFixed(2)} A${e2.toFixed(2)} ${e2.toFixed(2)} 0 ${+(Math.abs(n2 - t2) > Math.PI)} ${+(n2 > t2)} ${r2.toFixed(2)} ${o2.toFixed(2)}`;
  };
  function O(e2, t2, n2, a2) {
    let i2 = e2 - n2, r2 = t2 - a2, o2 = Math.hypot(i2, r2), l2 = D(1 - o2 / 92);
    return { strength: l2 * l2 * (3 - 2 * l2), dx: i2, dy: r2, distance: o2 };
  }
  function B({ strength: e2, dx: t2, dy: n2, distance: a2 }, i2) {
    if (a2 < 0.01) return [0, 0];
    let r2 = Math.min(0.2 * a2, 14) * e2 * i2;
    return [t2 / a2 * r2, n2 / a2 * r2];
  }
  let W = () => () => {
  }, X = {
    more: {
      a: [6, 12, 6.01, 12],
      b: [18, 12, 18.01, 12],
      c: [12, 12, 12.01, 12],
      width: 3.2,
      rotate: 0
    },
    close: {
      a: [7, 7, 17, 17],
      b: [17, 7, 7, 17],
      c: [12, 12, 12.01, 12],
      width: 2,
      rotate: 90
    },
    done: {
      a: [5.5, 12.5, 10, 17],
      b: [18.5, 7, 10, 17],
      c: [10, 17, 10.01, 17],
      width: 2.2,
      rotate: 0
    }
  };
  function H({ glyph: e2, reduced: t2 }) {
    let n2 = X[e2], i2 = t2 ? z : $, r2 = ([e3, t3, a2, i3]) => ({
      x1: e3,
      y1: t3,
      x2: a2,
      y2: i3,
      strokeWidth: n2.width
    });
    return (0, a.jsxs)(l.PY1.svg, {
      className: k().glyph,
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      initial: false,
      animate: { rotate: n2.rotate },
      transition: i2,
      children: [
        (0, a.jsx)(l.PY1.line, { initial: false, animate: r2(n2.a), transition: i2 }),
        (0, a.jsx)(l.PY1.line, { initial: false, animate: r2(n2.b), transition: i2 }),
        (0, a.jsx)(l.PY1.line, { initial: false, animate: r2(n2.c), transition: i2 })
      ]
    });
  }
  function q({
    action: e2,
    index: t2,
    count: n2,
    angle: r2,
    radius: o2,
    open: s2,
    active: d2,
    fired: u2,
    focusable: c2,
    reduced: p2,
    pointer: m2,
    setRef: h2,
    onFire: y2,
    onFocus: _2,
    onKey: v2
  }) {
    let g2 = (0, x.d)(0), j2 = (0, x.d)(0), A2 = (0, x.d)(0), S2 = (0, x.d)(1), [$2, E2] = C(o2, r2);
    (0, i.useEffect)(() => {
      if (p2) {
        if (s2) {
          g2.jump(1);
          let e5 = (0, f.i)(j2, 1, { duration: w.fast, ease: N });
          return () => e5.stop();
        }
        let e4 = (0, f.i)(j2, 0, {
          duration: w.instant,
          ease: R,
          delay: 0.08 * !!u2,
          onComplete: () => g2.jump(0)
        });
        return () => e4.stop();
      }
      let e3 = s2 ? t2 * P.item : u2 ? 0.1 : (n2 - 1 - t2) * 0.018, a2 = (0, f.i)(g2, +!!s2, { ...s2 ? Y : L, delay: e3 }), i2 = (0, f.i)(
        j2,
        +!!s2,
        s2 ? { duration: 0.2, ease: N, delay: e3 } : { duration: w.fast, ease: R, delay: e3 + 0.06 }
      );
      return () => {
        a2.stop(), i2.stop();
      };
    }, [n2, u2, t2, s2, p2, j2, g2]), (0, i.useEffect)(() => {
      let e3 = (0, f.i)(A2, +!!d2, p2 ? z : I);
      return () => e3.stop();
    }, [d2, A2, p2]), (0, i.useEffect)(() => {
      if (!u2 || p2) return;
      let e3 = (0, f.i)(S2, 1, {
        type: "spring",
        stiffness: 700,
        damping: 51,
        velocity: 7
      });
      return () => e3.stop();
    }, [u2, S2, p2]);
    let T2 = (0, b.G)([g2, m2.x, m2.y, m2.engaged, m2.allow], ([e3, t3, n3, a2, i2]) => {
      let l2 = Math.max(0, e3);
      return Math.cos(r2 - (1 - l2) * 0.75 * i2) * o2 * l2 + B(O(t3, n3, $2, E2), a2 * i2 * D(l2))[0];
    }), G2 = (0, b.G)([g2, m2.x, m2.y, m2.engaged, m2.allow], ([e3, t3, n3, a2, i2]) => {
      let l2 = Math.max(0, e3);
      return Math.sin(r2 - (1 - l2) * 0.75 * i2) * o2 * l2 + B(O(t3, n3, $2, E2), a2 * i2 * D(l2))[1];
    }), F2 = (0, b.G)(
      [g2, m2.x, m2.y, m2.engaged, A2, S2],
      ([e3, t3, n3, a2, i2, r3]) => (0.4 + 0.6 * Math.max(0, e3)) * (1 + 0.32 * O(t3, n3, $2, E2).strength * a2 + 0.1 * i2) * r3
    ), W2 = (0, b.G)([g2, m2.allow], ([e3, t3]) => {
      let n3, a2;
      return n3 = (1 - D(e3 / 0.6)) * t3, a2 = M.soft, n3 < 0.01 ? "none" : `blur(${(n3 * a2).toFixed(2)}px)`;
    }), X2 = (0, b.G)(g2, [0.35, 0.85], [0, 1]), H2 = (0, b.G)(g2, [0.3, 1], [0.5, 1]);
    return (0, a.jsx)(l.PY1.button, {
      ref: (e3) => h2(t2, e3),
      type: "button",
      role: "menuitem",
      "aria-label": e2.label,
      tabIndex: c2 ? 0 : -1,
      className: k().item,
      "data-active": d2 || void 0,
      "data-fired": u2 || void 0,
      "data-danger": "danger" === e2.tone || void 0,
      style: { x: T2, y: G2, scale: F2, opacity: j2, filter: W2 },
      onClick: () => y2(t2),
      onFocus: () => _2(t2),
      onKeyDown: (e3) => v2(e3, t2),
      children: (0, a.jsx)(l.PY1.span, {
        className: k().icon,
        style: { opacity: X2, scale: H2 },
        children: e2.icon
      })
    });
  }
  function U({
    angle: e2,
    visible: t2,
    danger: n2,
    radius: r2,
    track: o2,
    pointer: s2,
    reduced: d2
  }) {
    let u2 = (0, x.d)(e2), c2 = (0, x.d)(0);
    (0, i.useEffect)(() => {
      if (!t2) {
        let e3 = (0, f.i)(
          c2,
          0,
          d2 ? { duration: 0.1 } : S({ visualDuration: 0.2, bounce: 0 })
        );
        return () => e3.stop();
      }
      let n3 = d2 || 0.08 > c2.get();
      n3 && u2.jump(e2);
      let a2 = n3 ? null : (0, f.i)(u2, e2, I), i2 = (0, f.i)(c2, 1, d2 ? { duration: w.instant, ease: N } : I);
      return () => {
        a2?.stop(), i2.stop();
      };
    }, [e2, c2, d2, u2, t2]);
    let p2 = (0, b.G)(
      [u2, o2, s2.x, s2.y, s2.engaged, s2.allow],
      ([e3, t3, n3, a2, i2, o3]) => {
        let [l2, s3] = C(r2, e3);
        return Math.cos(e3) * r2 * (0.55 + 0.45 * t3) + B(O(n3, a2, l2, s3), i2 * o3)[0];
      }
    ), m2 = (0, b.G)(
      [u2, o2, s2.x, s2.y, s2.engaged, s2.allow],
      ([e3, t3, n3, a2, i2, o3]) => {
        let [l2, s3] = C(r2, e3);
        return Math.sin(e3) * r2 * (0.55 + 0.45 * t3) + B(O(n3, a2, l2, s3), i2 * o3)[1];
      }
    ), h2 = (0, b.G)(
      [c2, u2, s2.x, s2.y, s2.engaged, s2.allow],
      ([e3, t3, n3, a2, i2, o3]) => {
        let [l2, s3] = C(r2, t3);
        return (1 - o3 * (1 - e3)) * (1 + 0.32 * O(n3, a2, l2, s3).strength * i2 + 0.1);
      }
    ), y2 = (0, b.G)([c2, s2.allow], ([e3, t3]) => D(e3 * (1 + 3 * t3)));
    return (0, a.jsx)(l.PY1.span, {
      className: k().lens,
      "data-danger": n2 || void 0,
      style: { x: p2, y: m2, scale: h2, opacity: y2 },
      "aria-hidden": "true"
    });
  }
  let K = { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }, V = { opacity: 0, scale: 0.82, y: 12, filter: `blur(${M.soft}px)` };
  function Z({
    actions: e2,
    onAction: t2,
    label: n2 = "Actions",
    radius: r2 = 104,
    spread: d2 = 150,
    direction: u2 = -90,
    disabled: c2 = false,
    announce: p2 = true,
    onOpenChange: m2,
    className: h2
  }) {
    let y2, v2 = (y2 = (0, i.useSyncExternalStore)(
      W,
      () => true,
      () => false
    ), !!(0, s.I)() && y2), g2 = `orbit-${(0, i.useId)().replace(/[^a-zA-Z0-9-]/g, "")}`, j2 = (0, i.useRef)(null), A2 = (0, i.useRef)(null), P2 = (0, i.useRef)(null), S2 = (0, i.useRef)([]), Y2 = (0, i.useRef)(null), O2 = (0, i.useRef)(null), B2 = (0, i.useRef)(false), X2 = (0, i.useRef)(null), J2 = (0, i.useRef)(0), Q2 = (0, i.useRef)(false), [ee2, et2] = (0, i.useState)(false);
    c2 && ee2 && et2(false);
    let en2 = ee2 && !c2, [ea2, ei2] = (0, i.useState)(null), [er2, eo2] = (0, i.useState)(0);
    null !== ea2 && ea2 !== er2 && eo2(ea2);
    let [el2, es2] = (0, i.useState)(false), [ed2, eu2] = (0, i.useState)(false), [ec2, ep] = (0, i.useState)(null), [em, eh] = (0, i.useState)(0), ey = (0, x.d)(0), ex = (0, x.d)(0), ef = (0, x.d)(0), eb = (0, x.d)(1), e_ = (0, x.d)(0), ev = (0, x.d)(0), eg = (0, x.d)(0), ek = (0, x.d)(0), ej = (0, i.useMemo)(
      () => ({ x: ey, y: ex, engaged: ef, allow: eb }),
      [eb, ef, ey, ex]
    ), ew = e2.length, eA = (0, i.useMemo)(
      () => Array.from(
        { length: ew },
        (e3, t3) => T(ew < 2 ? u2 : u2 - d2 / 2 + d2 * t3 / (ew - 1))
      ),
      [ew, u2, d2]
    ), eM = ew < 2 ? Math.PI : T(d2) / (ew - 1), eP = T(u2);
    function eN(e3) {
      e3 !== ee2 && (et2(e3), m2?.(e3));
    }
    function eR(e3) {
      O2.current !== e3 && (O2.current = e3, ei2(e3));
    }
    function eS(e3) {
      (0, f.i)(ef, +!!e3, v2 ? z : e3 ? I : E);
    }
    function eI(e3 = true) {
      let t3 = document.activeElement;
      e3 && t3 !== A2.current && j2.current?.contains(t3) && A2.current?.focus({ preventScroll: true }), B2.current = false, eS(false), eR(null), eu2(false), eN(false);
    }
    function e$(n3) {
      let a2 = e2[n3];
      a2 && (J2.current += 1, ep({ index: n3, key: J2.current, text: a2.done ?? a2.label }), eI(), t2(a2.id));
    }
    function eY(e3) {
      ep(null), eN(true), eR(e3), X2.current = e3, eh((e4) => e4 + 1);
    }
    function eL(e3, t3) {
      let n3 = Math.hypot(e3, t3);
      if (n3 < 34 || n3 > r2 + 76) return null;
      let a2 = Math.atan2(t3, e3), i2 = 0, o2 = 1 / 0;
      for (let e4 = 0; e4 < eA.length; e4++) {
        let t4 = Math.abs(Math.atan2(Math.sin(a2 - eA[e4]), Math.cos(a2 - eA[e4])));
        t4 < o2 && (o2 = t4, i2 = e4);
      }
      return o2 <= eM / 2 + 0.2 ? i2 : null;
    }
    function eE() {
      let e3 = j2.current.getBoundingClientRect();
      return { x: e3.left + e3.width / 2, y: e3.top + e3.height / 2 };
    }
    (0, i.useEffect)(() => {
      eb.set(+!v2);
    }, [eb, v2]), (0, i.useEffect)(() => {
      let e3 = (0, f.i)(eg, +!!en2, v2 ? z : en2 ? $ : L);
      return () => e3.stop();
    }, [en2, v2, eg]), (0, i.useEffect)(() => {
      if (!ec2) return;
      let e3 = window.setTimeout(() => ep(null), 1400);
      return () => window.clearTimeout(e3);
    }, [ec2]), (0, i.useEffect)(() => {
      let e3 = X2.current;
      en2 && null !== e3 && (X2.current = null, S2.current[e3]?.focus({ preventScroll: true }));
    }, [em, en2]);
    let ez = (0, i.useEffectEvent)((e3) => {
      if (e3 instanceof KeyboardEvent) {
        "Escape" === e3.key && eI();
        return;
      }
      Y2.current || j2.current?.contains(e3.target) || eI(false);
    });
    function eT(e3, t3) {
      let n3 = Y2.current;
      if (!n3 || n3.id !== e3.pointerId) return;
      if (Y2.current = null, e3.currentTarget.hasPointerCapture(e3.pointerId) && e3.currentTarget.releasePointerCapture(e3.pointerId), es2(false), eu2(false), (0, f.i)(ev, 0, v2 ? z : I), (0, f.i)(e_, 0, v2 ? z : E), eS(false), t3)
        return void eI(false);
      let a2 = n3.moved ? eL(e3.clientX - n3.cx, e3.clientY - n3.cy) : null;
      null !== a2 ? e$(a2) : n3.moved || !(e3.timeStamp - n3.at < 350) || n3.wasOpen ? eI(false) : eR(null);
    }
    function eD(e3, t3) {
      let n3, a2 = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (e3.key in a2) n3 = (t3 + a2[e3.key] + ew) % ew;
      else if ("Home" === e3.key) n3 = 0;
      else if ("End" === e3.key) n3 = ew - 1;
      else {
        "Tab" === e3.key && eI(false);
        return;
      }
      e3.preventDefault(), eR(n3), S2.current[n3]?.focus({ preventScroll: true });
    }
    (0, i.useEffect)(() => {
      if (!en2) return;
      let e3 = (e4) => ez(e4);
      return document.addEventListener("pointerdown", e3, true), document.addEventListener("keydown", e3), () => {
        document.removeEventListener("pointerdown", e3, true), document.removeEventListener("keydown", e3);
      };
    }, [en2]);
    let eG = ec2 ? { key: `done-${ec2.key}`, text: ec2.text, check: true } : en2 ? null !== ea2 && e2[ea2] ? { key: `target-${ea2}-${e2[ea2].label}`, text: e2[ea2].label } : el2 && ed2 ? { key: "cancel", text: "Release to cancel" } : { key: "label", text: n2 } : null, [eC, eF] = (0, i.useState)({ key: "label", text: n2 });
    eG && (eG.key !== eC.key || eG.text !== eC.text) && eF(eG);
    let eO = null !== eG;
    (0, i.useLayoutEffect)(() => {
      let e3 = P2.current;
      if (!e3) return;
      let t3 = e3.offsetWidth + 2, n3 = Q2.current;
      if (Q2.current = eO, !n3 || !eO || v2) return void ek.jump(t3);
      let a2 = (0, f.i)(ek, t3, $);
      return () => a2.stop();
    }, [eO, v2, eC.key, eC.text, ek]);
    let eB = (0, b.G)([ey, ex, e_, eb], ([e3, t3, n3, a2]) => {
      let i2 = Math.hypot(e3, t3);
      return i2 < 0.01 ? 0 : e3 / i2 * G(i2, 26) * n3 * a2;
    }), eW = (0, b.G)([ey, ex, e_, eb], ([e3, t3, n3, a2]) => {
      let i2 = Math.hypot(e3, t3);
      return i2 < 0.01 ? 0 : t3 / i2 * G(i2, 26) * n3 * a2;
    }), eX = (0, b.G)([ev, eg], ([e3, t3]) => (1 - 0.08 * e3) * (1 - 0.06 * D(t3))), eH = (0, b.G)(eg, (e3) => D(e3)), eq = (0, b.G)(eg, (e3) => D(1.6 * e3)), eU = (0, b.G)(
      eg,
      (e3) => F(r2 * (0.5 + 0.5 * Math.max(0, e3)), eP, eA[0] ?? eP)
    ), eK = (0, b.G)(
      eg,
      (e3) => F(r2 * (0.5 + 0.5 * Math.max(0, e3)), eP, eA[ew - 1] ?? eP)
    ), [eV, eZ] = C(0.5 * r2, eP), eJ = e2[er2], eQ = (e3) => (0, a.jsxs)(a.Fragment, {
      children: [
        e3.check && (0, a.jsx)(_.A, {
          size: 15,
          strokeWidth: 2.25,
          "aria-hidden": "true"
        }),
        (0, a.jsx)("span", { children: e3.text })
      ]
    }), e0 = v2 ? { opacity: 0 } : { opacity: 0, y: "0.4em", filter: `blur(${M.soft}px)` };
    return (0, a.jsxs)("div", {
      ref: j2,
      className: [k().root, h2].filter(Boolean).join(" "),
      "data-open": en2 || void 0,
      style: { "--orbit-reach": `${r2 + 60}px` },
      onPointerMove: function(e3) {
        let t3 = Y2.current;
        if (t3 && t3.id === e3.pointerId) {
          let n4 = e3.clientX - t3.cx, a3 = e3.clientY - t3.cy;
          ey.set(n4), ex.set(a3), !t3.moved && Math.hypot(e3.clientX - t3.sx, e3.clientY - t3.sy) > 8 && (t3.moved = true);
          let i2 = eL(n4, a3);
          eR(i2);
          let r3 = t3.moved && null === i2;
          r3 !== ed2 && eu2(r3);
          return;
        }
        if (!en2 || t3 || "touch" === e3.pointerType) return;
        let { x: n3, y: a2 } = eE();
        ey.set(e3.clientX - n3), ex.set(e3.clientY - a2), B2.current || (B2.current = true, eS(true)), eR(eL(e3.clientX - n3, e3.clientY - a2));
      },
      onPointerLeave: function() {
        if (Y2.current || !B2.current) return;
        B2.current = false, eS(false);
        let e3 = S2.current.findIndex((e4) => e4 && e4 === document.activeElement);
        eR(e3 >= 0 ? e3 : null);
      },
      children: [
        (0, a.jsx)("div", {
          className: k().field,
          "aria-hidden": "true",
          onPointerDown: () => eI(false)
        }),
        ew > 1 && (0, a.jsxs)("svg", {
          className: k().track,
          width: "1",
          height: "1",
          "aria-hidden": "true",
          children: [
            (0, a.jsx)(l.PY1.path, {
              d: eU,
              style: { pathLength: eH, opacity: eq }
            }),
            (0, a.jsx)(l.PY1.path, {
              d: eK,
              style: { pathLength: eH, opacity: eq }
            })
          ]
        }),
        (0, a.jsx)(U, {
          angle: eA[er2] ?? eP,
          visible: en2 && null !== ea2,
          danger: eJ?.tone === "danger",
          radius: r2,
          track: eg,
          pointer: ej,
          reduced: v2
        }),
        (0, a.jsx)(l.PY1.button, {
          ref: A2,
          type: "button",
          className: k().trigger,
          "aria-label": n2,
          "aria-haspopup": "menu",
          "aria-expanded": en2,
          "aria-controls": g2,
          "data-open": en2 || void 0,
          disabled: c2,
          style: { x: eB, y: eW, scale: eX },
          onPointerDown: function(e3) {
            if (c2 || 0 !== e3.button || Y2.current) return;
            let { x: t3, y: n3 } = eE();
            e3.currentTarget.setPointerCapture(e3.pointerId), Y2.current = {
              id: e3.pointerId,
              cx: t3,
              cy: n3,
              sx: e3.clientX,
              sy: e3.clientY,
              at: e3.timeStamp,
              wasOpen: en2,
              moved: false
            }, ey.set(e3.clientX - t3), ex.set(e3.clientY - n3), (0, f.i)(ev, 1, v2 ? z : I), (0, f.i)(e_, 1, v2 ? z : I), eS(true), B2.current = false, es2(true), eR(null), en2 || (ep(null), eN(true));
          },
          onPointerUp: (e3) => eT(e3, false),
          onPointerCancel: (e3) => eT(e3, true),
          onKeyDown: function(e3) {
            e3.key.startsWith("Arrow") && 0 !== ew && (e3.preventDefault(), eY("ArrowUp" === e3.key ? ew - 1 : 0));
          },
          onContextMenu: (e3) => e3.preventDefault(),
          onClick: (e3) => {
            0 === e3.detail && (en2 ? eI() : ew && eY(0));
          },
          children: (0, a.jsx)(H, {
            glyph: ec2 ? "done" : en2 ? "close" : "more",
            reduced: v2
          })
        }),
        (0, a.jsx)("div", {
          id: g2,
          role: "menu",
          "aria-label": n2,
          "aria-orientation": "horizontal",
          className: k().menu,
          inert: !en2,
          children: e2.map(
            (e3, t3) => (0, a.jsx)(
              q,
              {
                action: e3,
                index: t3,
                count: ew,
                angle: eA[t3],
                radius: r2,
                open: en2,
                active: en2 && ea2 === t3,
                fired: ec2?.index === t3,
                focusable: t3 === (ea2 ?? 0),
                reduced: v2,
                pointer: ej,
                setRef: (e4, t4) => {
                  S2.current[e4] = t4;
                },
                onFire: e$,
                onFocus: eR,
                onKey: eD
              },
              e3.id
            )
          )
        }),
        (0, a.jsxs)("div", {
          className: k().pillAnchor,
          style: {
            left: `calc(50% + ${eV.toFixed(2)}px)`,
            top: `calc(50% + ${eZ.toFixed(2)}px)`
          },
          "aria-hidden": "true",
          children: [
            (0, a.jsx)("span", {
              ref: P2,
              className: `${k().pillRow} ${k().measure}`,
              children: eQ(eC)
            }),
            (0, a.jsx)(l.PY1.div, {
              className: k().pill,
              style: { width: ek },
              initial: false,
              animate: eO ? K : V,
              transition: eO ? {
                default: v2 ? z : I,
                opacity: { duration: v2 ? 0.15 : 0.2, ease: N },
                filter: v2 ? z : { duration: 0.22, ease: N }
              } : {
                default: v2 ? z : { duration: w.exit, ease: R },
                opacity: { duration: v2 ? 0.12 : w.exit, ease: R }
              },
              children: (0, a.jsx)(o.N, {
                mode: "popLayout",
                initial: false,
                children: (0, a.jsx)(
                  l.PY1.span,
                  {
                    className: k().pillRow,
                    initial: e0,
                    animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
                    exit: v2 ? { opacity: 0, transition: { duration: 0.1 } } : {
                      opacity: 0,
                      y: "-0.4em",
                      filter: `blur(${M.subtle}px)`,
                      transition: { duration: 0.14, ease: R }
                    },
                    transition: { duration: v2 ? 0.15 : 0.22, ease: N },
                    children: eQ(eC)
                  },
                  eC.key
                )
              })
            })
          ]
        }),
        p2 && (0, a.jsx)("span", {
          role: "status",
          className: k().srOnly,
          children: ec2?.text ?? ""
        })
      ]
    });
  }
  var J = n(6980), Q = n.n(J);
  let { spring: ee, duration: et, ease: en, blur: ea } = v.T, ei = [...en.enter], er = { size: 20, strokeWidth: 1.75, "aria-hidden": true }, eo = { size: 13, strokeWidth: 2, "aria-hidden": true }, el = "media/specials/orbit-menu-", es = { liked: false, album: false, shared: false, downloads: 0, deleted: false };
  function ed({ text: e2, reduced: t2, className: n2 }) {
    let i2 = t2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${ea.soft}px)` };
    return (0, a.jsx)(o.N, {
      mode: "popLayout",
      initial: false,
      children: (0, a.jsx)(
        l.PY1.span,
        {
          className: n2,
          initial: i2,
          animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
          exit: { ...i2, transition: { duration: t2 ? 0.1 : et.instant } },
          transition: { duration: t2 ? 0.15 : 0.22, ease: ei },
          children: e2
        },
        e2
      )
    });
  }
  function eu() {
    let e2 = !!(0, s.I)(), [t2, n2] = (0, i.useState)(es), [x2, f2] = (0, i.useState)(false), [b2, _2] = (0, i.useState)(
      "Press the button and drag to an action, or click it to keep the actions open."
    ), v2 = !t2.liked && !t2.album && !t2.shared && 0 === t2.downloads && !t2.deleted, g2 = [
      {
        id: "like",
        label: t2.liked ? "Unlike" : "Like",
        done: t2.liked ? "Unliked" : "Liked",
        icon: (0, a.jsx)(d.A, { ...er })
      },
      {
        id: "album",
        label: t2.album ? "Remove from album" : "Add to album",
        done: t2.album ? "Removed" : "Added to Fall trips",
        icon: (0, a.jsx)(u.A, { ...er })
      },
      {
        id: "share",
        label: t2.shared ? "Stop sharing" : "Share with Ryan",
        done: t2.shared ? "Not shared" : "Shared",
        icon: (0, a.jsx)(c.A, { ...er })
      },
      {
        id: "download",
        label: "Download",
        done: "Downloaded",
        icon: (0, a.jsx)(p.A, { ...er })
      },
      {
        id: "delete",
        label: "Delete",
        done: "Deleted",
        tone: "danger",
        icon: (0, a.jsx)(m.A, { ...er })
      }
    ], k2 = [
      t2.liked && {
        id: "like",
        icon: (0, a.jsx)(d.A, { ...eo }),
        text: "129 likes"
      },
      t2.album && {
        id: "album",
        icon: (0, a.jsx)(u.A, { ...eo }),
        text: "Fall trips"
      },
      t2.shared && {
        id: "share",
        icon: (0, a.jsx)(r.default, {
          src: `${el}ryan-torres.svg`,
          alt: "",
          width: 16,
          height: 16,
          className: Q().chipAvatar
        }),
        text: "Ryan Torres"
      },
      t2.downloads > 0 && {
        id: "download",
        icon: (0, a.jsx)(p.A, { ...eo }),
        text: 1 === t2.downloads ? "Downloaded" : `Downloaded ${t2.downloads} times`
      }
    ].filter((e3) => !!e3), j2 = e2 ? { opacity: 0 } : { opacity: 0, scale: 0.8, filter: `blur(${ea.subtle}px)` };
    return (0, a.jsxs)("div", {
      className: Q().demo,
      children: [
        (0, a.jsxs)("div", {
          className: Q().stage,
          children: [
            (0, a.jsx)(l.PY1.div, {
              className: Q().cardArea,
              initial: false,
              animate: { scale: x2 ? 0.97 : 1, opacity: x2 ? 0.55 : 1 },
              transition: e2 ? { duration: 0.15 } : {
                scale: ee.smooth,
                opacity: { duration: et.standard, ease: ei }
              },
              children: (0, a.jsx)(o.N, {
                mode: "popLayout",
                initial: false,
                children: t2.deleted ? (0, a.jsxs)(
                  l.PY1.div,
                  {
                    className: Q().empty,
                    initial: { opacity: 0, scale: 0.96 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, transition: { duration: et.exit } },
                    transition: e2 ? { duration: 0.15 } : {
                      scale: ee.smooth,
                      opacity: { duration: et.standard, ease: ei }
                    },
                    children: [
                      (0, a.jsx)("p", {
                        className: Q().emptyTitle,
                        children: "Photo deleted"
                      }),
                      (0, a.jsx)("p", {
                        className: Q().emptyBody,
                        children: "Hut below \u015Anie\u017Cka stays in Recently deleted for 30 days."
                      }),
                      (0, a.jsxs)(y.A, {
                        variant: "secondary",
                        size: "sm",
                        onClick: function() {
                          n2((e3) => ({ ...e3, deleted: false })), _2("Restored the photo");
                        },
                        children: [
                          (0, a.jsx)(h.A, {
                            size: 15,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          "Restore photo"
                        ]
                      })
                    ]
                  },
                  "empty"
                ) : (0, a.jsxs)(
                  l.PY1.article,
                  {
                    className: Q().card,
                    "aria-label": "Hut below \u015Anie\u017Cka",
                    initial: { opacity: 0, scale: 0.96 },
                    animate: { opacity: 1, scale: 1 },
                    exit: e2 ? { opacity: 0, transition: { duration: 0.12 } } : {
                      opacity: 0,
                      scale: 0.9,
                      y: 16,
                      filter: `blur(${ea.soft}px)`,
                      transition: {
                        duration: et.exit,
                        ease: [...en.exit]
                      }
                    },
                    transition: e2 ? { duration: 0.15 } : {
                      scale: ee.smooth,
                      opacity: { duration: et.standard, ease: ei }
                    },
                    children: [
                      (0, a.jsx)("div", {
                        className: Q().photo,
                        children: (0, a.jsx)(r.default, {
                          src: `${el}cabin.jpg`,
                          alt: "A dark wooden hut in fog on a rocky mountainside",
                          fill: true,
                          sizes: "(max-width: 520px) 90vw, 400px",
                          priority: true,
                          draggable: false
                        })
                      }),
                      (0, a.jsxs)("div", {
                        className: Q().body,
                        children: [
                          (0, a.jsxs)("div", {
                            className: Q().byline,
                            children: [
                              (0, a.jsx)(r.default, {
                                src: `${el}olivia-bennett.svg`,
                                alt: "",
                                width: 28,
                                height: 28,
                                className: Q().avatar
                              }),
                              (0, a.jsxs)("div", {
                                className: Q().names,
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: Q().title,
                                    children: "Hut below \u015Anie\u017Cka"
                                  }),
                                  (0, a.jsx)("p", {
                                    className: Q().meta,
                                    children: "Olivia Bennett, Karkonosze, Poland"
                                  })
                                ]
                              })
                            ]
                          }),
                          (0, a.jsx)("div", {
                            className: Q().chips,
                            children: (0, a.jsxs)(o.N, {
                              mode: "popLayout",
                              initial: false,
                              children: [
                                0 === k2.length && (0, a.jsx)(
                                  l.PY1.span,
                                  {
                                    className: Q().placeholder,
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: {
                                      opacity: 0,
                                      transition: { duration: 0.1 }
                                    },
                                    children: "128 likes, not in an album"
                                  },
                                  "none"
                                ),
                                k2.map(
                                  (t3) => (0, a.jsxs)(
                                    l.PY1.span,
                                    {
                                      layout: !e2,
                                      className: Q().chip,
                                      initial: j2,
                                      animate: {
                                        opacity: 1,
                                        scale: 1,
                                        filter: "blur(0px)"
                                      },
                                      exit: {
                                        ...j2,
                                        transition: {
                                          duration: et.instant
                                        }
                                      },
                                      transition: e2 ? { duration: 0.15 } : {
                                        ...ee.snappy,
                                        opacity: { duration: et.fast },
                                        filter: { duration: et.fast }
                                      },
                                      children: [
                                        t3.icon,
                                        (0, a.jsx)(ed, {
                                          text: t3.text,
                                          reduced: e2,
                                          className: Q().chipText
                                        })
                                      ]
                                    },
                                    t3.id
                                  )
                                )
                              ]
                            })
                          })
                        ]
                      })
                    ]
                  },
                  "photo"
                )
              })
            }),
            (0, a.jsx)("div", {
              className: Q().orbit,
              children: (0, a.jsx)(Z, {
                actions: g2,
                onAction: function(e3) {
                  "like" === e3 && _2(
                    t2.liked ? "Removed your like" : "Liked the photo, 129 likes now"
                  ), "album" === e3 && _2(
                    t2.album ? "Removed from the Fall trips album" : "Added to the Fall trips album"
                  ), "share" === e3 && _2(
                    t2.shared ? "Stopped sharing with Ryan Torres" : "Shared with Ryan Torres"
                  ), "download" === e3 && _2("Saved hut-below-snezka.jpg, 4.2 MB"), "delete" === e3 && _2("Deleted the photo"), n2((t3) => ({
                    ...t3,
                    liked: "like" === e3 ? !t3.liked : t3.liked,
                    album: "album" === e3 ? !t3.album : t3.album,
                    shared: "share" === e3 ? !t3.shared : t3.shared,
                    downloads: "download" === e3 ? t3.downloads + 1 : t3.downloads,
                    deleted: "delete" === e3 || t3.deleted
                  }));
                },
                label: "Photo actions",
                disabled: t2.deleted,
                announce: false,
                onOpenChange: f2
              })
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: Q().footer,
          children: [
            (0, a.jsx)("p", {
              className: Q().srOnly,
              role: "status",
              "aria-live": "polite",
              children: (0, a.jsx)(ed, {
                text: b2,
                reduced: e2,
                className: Q().statusText
              })
            }),
            (0, a.jsxs)(y.A, {
              variant: "secondary",
              size: "sm",
              onClick: function() {
                n2(es), _2("Photo reset");
              },
              disabled: v2,
              children: [
                (0, a.jsx)(h.A, {
                  size: 15,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Reset photo"
              ]
            })
          ]
        })
      ]
    });
  }
  let ec = eu;
}

__m(__module,__exports,__require);
});
A.reg(54757, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => s });
  var i = t(51811);
  let n = {
    name: "heart",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
          key: "mvr1a0"
        }
      ]
    ]
  };
  n.node;
  let s = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(96588, ".root{--orbit-button:56px;--orbit-item:46px;--orbit-material:color-mix(in oklab,var(--surface-raised) 76%,transparent);--orbit-edge:color-mix(in oklab,var(--border-strong) 55%,transparent);--orbit-item-material:color-mix(in oklab,var(--surface-raised) 94%,transparent);--orbit-danger-tint:color-mix(in oklab,var(--danger) 14%,var(--surface-raised));--orbit-danger-edge:color-mix(in oklab,var(--danger) 36%,transparent);position:relative;width:var(--orbit-button);height:var(--orbit-button);flex:none;font-family:var(--font-body);letter-spacing:var(--tracking-body);isolation:isolate;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}\n.root[data-open] .field{pointer-events:auto}\n@media (prefers-reduced-transparency:reduce){.root{--orbit-material:var(--surface-raised);--orbit-item-material:var(--surface-raised)}\n.field{position:absolute;z-index:0;top:50%;left:50%;width:calc(var(--orbit-reach) * 2);height:calc(var(--orbit-reach) * 2);margin:calc(var(--orbit-reach) * -1) 0 0 calc(var(--orbit-reach) * -1);border-radius:50%;pointer-events:none}\n.track{position:absolute;z-index:1;top:50%;left:50%;overflow:visible;pointer-events:none}\n.track path{fill:none;stroke:var(--border-strong);stroke-width:1.5;stroke-linecap:round}\n.trigger{position:absolute;z-index:3;inset:0;display:grid;place-items:center;padding:0;border:1px solid transparent;border-radius:50%;background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);cursor:pointer;touch-action:none;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.trigger[data-open]{border-color:var(--orbit-edge);background:var(--orbit-material);color:var(--foreground);-webkit-backdrop-filter:blur(18px) saturate(1.6);backdrop-filter:blur(18px) saturate(1.6)}\n.trigger:disabled{cursor:not-allowed;opacity:.45}\n@media (hover:hover) and (pointer:fine){.trigger:not(:disabled):not([data-open]):hover{background:color-mix(in oklab,var(--foreground) 86%,var(--background))}\n@media (prefers-reduced-motion:reduce){.item,.lens,.trigger{transition:none}\n.pill,.trigger[data-open]{-webkit-backdrop-filter:none;backdrop-filter:none}\n.glyph{width:24px;height:24px;fill:none;stroke:currentColor;stroke-linecap:round;overflow:visible}\n.menu{position:absolute;z-index:2;inset:0;pointer-events:none}\n.menu[inert] .item{pointer-events:none}\n.item,.lens{position:absolute;top:50%;left:50%;width:var(--orbit-item);height:var(--orbit-item);margin:calc(var(--orbit-item) / -2) 0 0 calc(var(--orbit-item) / -2);border-radius:50%}\n.item{display:grid;place-items:center;padding:0;border:1px solid var(--orbit-edge);background:var(--orbit-item-material);color:var(--foreground);box-shadow:var(--shadow-raised);cursor:pointer;pointer-events:auto;touch-action:none;-webkit-tap-highlight-color:transparent;will-change:transform,opacity;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}\n.item[data-danger]{color:var(--danger)}\n.item[data-active]{border-color:transparent;background:transparent;color:var(--background);box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none}\n.item[data-fired]{border-color:transparent;background:var(--foreground);color:var(--background)}\n.item[data-active][data-danger],.item[data-fired][data-danger]{color:var(--danger)}\n.item[data-fired][data-danger]{background:var(--orbit-danger-tint);box-shadow:inset 0 0 0 1px var(--orbit-danger-edge)}\n.item:not([data-active]):not([data-fired]):hover{background:color-mix(in oklab,var(--surface-muted) 88%,transparent)}\n.lens{z-index:1;background:var(--foreground);box-shadow:var(--shadow-raised);pointer-events:none;will-change:transform,opacity;transition:background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}\n.lens[data-danger]{background:var(--orbit-danger-tint);box-shadow:var(--shadow-raised),inset 0 0 0 1px var(--orbit-danger-edge)}\n.icon{display:grid;place-items:center;pointer-events:none}\n.icon svg{width:20px;height:20px}\n.pillAnchor{position:absolute;z-index:4;width:0;height:0;pointer-events:none}\n.pillAnchor,.pill{display:flex;align-items:center;justify-content:center}\n.pill{position:relative;height:32px;flex:none;overflow:hidden;border:1px solid var(--orbit-edge);border-radius:var(--radius-pill);background:var(--orbit-material);box-shadow:var(--shadow-raised);-webkit-backdrop-filter:blur(18px) saturate(1.6);backdrop-filter:blur(18px) saturate(1.6);color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:1}\n.pillRow{display:inline-flex;flex:none;align-items:center;gap:6px;padding:0 14px;white-space:nowrap}\n.pillRow svg{flex:none;color:var(--success)}\n.measure{position:absolute;top:0;left:0;visibility:hidden;font-size:var(--text-sm);font-weight:500;line-height:1}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}", {"root":"root","field":"field","track":"track","trigger":"trigger","item":"item","lens":"lens","pill":"pill","glyph":"glyph","menu":"menu","icon":"icon","pillAnchor":"pillAnchor","pillRow":"pillRow","measure":"measure","srOnly":"srOnly"});
A.cssFor("orbit-menu", [6980,96588]);
A.item("orbit-menu", {entry:49551, export:"OrbitMenuDemo", kind:"component", tier:"pro", unresolved:[]});
})();