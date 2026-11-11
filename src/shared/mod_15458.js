function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { W: () => A });
  var r = a(95155), i = a(12115), l = a(18310), n = a(28245), o = a(79196), s = a(55809), d = a(42922), c = a(92171), h = a(25354), u = a(80642), p = a(71330), m = a.n(p);
  let g = "0123456789", f = "abcdefghijklmnopqrstuvwxyz", w = f.toUpperCase(), b = [0.12, 0.8, 0.16, 1], v = () => () => {
  }, x = (e2) => g.includes(e2) ? g : f.includes(e2) ? f : w.includes(e2) ? w : null;
  function y(e2, t2, a2, r2, i2) {
    let l2;
    if (e2 === t2) return [t2];
    let n2 = x(t2);
    if (!n2) return [e2, t2];
    if (n2 === g && x(e2) === g) {
      let i3 = Number(e2), l3 = Number(t2);
      return Array.from({ length: 10 * a2 + (r2 ? (l3 - i3 + 10) % 10 : (i3 - l3 + 10) % 10) + 1 }, (e3, t3) => String((i3 + (r2 ? t3 : -t3) + 100) % 10));
    }
    let o2 = (l2 = i2 >>> 0 || 1, () => (l2 = 1664525 * l2 + 1013904223 >>> 0) / 4294967296);
    return [e2, ...Array.from({ length: Math.max(2, 5 * a2 + 2) }, () => n2[Math.floor(o2() * n2.length)]), t2];
  }
  function j({ char: e2, order: t2, entering: a2, rising: l2, duration: u2, stagger: p2, spins: g2, reduced: f2 }) {
    let w2 = (0, n.d)(0), v2 = (0, n.d)("auto"), x2 = (0, i.useRef)(null), [A2, _] = (0, o.xQ)(), [k, M] = (0, i.useState)(() => ({ char: e2, strip: a2 && !f2 ? y("", e2, g2, l2, e2.charCodeAt(0) + t2) : [e2], from: 0, grow: a2, time: u2 + t2 * p2 }));
    if (k.char !== e2) {
      let a3 = w2.get(), r2 = Math.max(0, Math.min(k.strip.length - 1, Math.round(a3))), i2 = k.strip[r2];
      M({ char: e2, strip: f2 ? [e2] : y(i2, e2, g2, l2, 31 * e2.charCodeAt(0) + 7 * i2.charCodeAt(0) + t2 + k.strip.length), from: f2 ? 0 : a3 - r2, grow: false, time: u2 + t2 * p2 });
    }
    let N = (0, s.G)((0, d.V)(w2), (e3) => {
      let t3 = Math.min(0.05 * Math.abs(e3), 2.4);
      return t3 < 0.15 ? "none" : `blur(${t3.toFixed(2)}px)`;
    }), C = (0, s.G)(w2, (e3) => `translate3d(0, ${(-(1.6 * e3)).toFixed(4)}em, 0)`);
    return (0, i.useLayoutEffect)(() => {
      let e3 = x2.current?.getBoundingClientRect().width ?? 0, t3 = k.strip.length - 1;
      if (f2) {
        w2.jump(t3), v2.jump(e3);
        return;
      }
      w2.jump(k.from);
      let a3 = (0, c.i)(w2, t3, { duration: 0 === t3 ? 0.2 : k.time, ease: [...b] });
      if (k.grow && v2.jump(0), "auto" === v2.get()) return v2.jump(e3), () => a3.stop();
      let r2 = (0, c.i)(v2, e3, { type: "spring", visualDuration: Math.min(k.time, 0.6), bounce: 0 });
      return () => {
        a3.stop(), r2.stop();
      };
    }, [k, w2, v2, f2]), (0, i.useLayoutEffect)(() => {
      if (A2) return;
      if (f2) return void _();
      let e3 = (0, c.i)(v2, 0, { type: "spring", visualDuration: 0.35, bounce: 0, onComplete: _ });
      return () => e3.stop();
    }, [A2, _, v2, f2]), (0, r.jsxs)(h.PY1.span, { className: m().slot, style: { width: v2 }, "data-exiting": A2 ? void 0 : "", children: [(0, r.jsx)("span", { ref: x2, className: m().sizer, children: " " === e2 ? "\xA0" : e2 }), (0, r.jsx)("span", { className: m().window, children: (0, r.jsx)(h.PY1.span, { className: m().strip, style: { transform: C, filter: N }, children: k.strip.map((e3, t3) => (0, r.jsx)("span", { className: m().cell, children: " " === e3 ? "\xA0" : e3 }, t3)) }) })] });
  }
  function A({ value: e2, format: t2, duration: a2 = 0.9, stagger: n2 = 0.07, spins: o2 = 1, align: s2, announce: d2 = false, className: c2, style: h2 }) {
    let p2, g2 = (p2 = (0, i.useSyncExternalStore)(v, () => true, () => false), !!(0, l.I)() && p2), f2 = "number" == typeof e2 ? t2 ? t2(e2) : e2.toLocaleString("en-US") : e2, w2 = (s2 ?? ("number" == typeof e2 ? "end" : "start")) === "end", b2 = Array.from(f2), x2 = w2 ? b2.findIndex((e3) => /[\p{L}\p{N}]/u.test(e3)) : 0, y2 = x2 < 0 ? b2.length : x2, _ = (e3) => e3 < y2 ? `p${e3}` : w2 ? `e${b2.length - 1 - e3}` : `s${e3}`, [k] = (0, i.useState)(() => new Set(b2.map((e3, t3) => _(t3)))), [M, N] = (0, i.useState)({ value: e2, rising: true });
    return M.value !== e2 && N({ value: e2, rising: "number" != typeof e2 || "number" != typeof M.value || e2 >= M.value }), (0, r.jsxs)("span", { className: [m().root, c2].filter(Boolean).join(" "), style: h2, children: [(0, r.jsx)("span", { className: m().srOnly, "aria-live": d2 ? "polite" : void 0, children: f2 }), (0, r.jsx)("span", { className: m().reels, "aria-hidden": "true", children: (0, r.jsx)(u.N, { initial: false, children: b2.map((e3, t3) => (0, r.jsx)(j, { char: e3, order: t3, entering: !k.has(_(t3)), rising: M.rising, duration: a2, stagger: n2, spins: o2, reduced: g2 }, _(t3))) }) })] });
  }
}

__m(__module,__exports,__require);
}