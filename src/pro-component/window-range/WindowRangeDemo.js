function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { WindowRangeDemo: () => Y, default: () => q });
  var n = a(95155), r = a(12115), s = a(18310), i = a(22535), l = a(55809), o = a(25354), d = a(57700), u = a(93954), c = a(6073), m = a(80642), p = a(18012), f = a.n(p);
  let h = 1 / 240, g = 18, x = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), w = (e2) => (String(e2).split(".")[1] ?? "").length, v = (e2, t2 = g) => Math.sign(e2) * (1 - 1 / (0.55 * Math.abs(e2) / t2 + 1)) * t2, _ = (e2, t2, a2, n2, r2) => {
    e2.v += (-a2 * (e2.x - t2) - n2 * e2.v) * r2, e2.x += e2.v * r2;
  }, b = (e2, t2, a2) => Math.abs(e2.x - t2) < a2 && Math.abs(e2.v) < 20 * a2, y = "(prefers-reduced-motion: reduce)", M = (e2) => {
    let t2 = window.matchMedia(y);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  }, N = /* @__PURE__ */ new WeakMap();
  function S(e2, t2, a2) {
    if (!e2) return;
    let n2 = N.get(e2);
    n2 || (n2 = {}, N.set(e2, n2)), n2[t2] !== a2 && (n2[t2] = a2, "transform" === t2 || "opacity" === t2 ? e2.style.setProperty(t2, a2) : e2.setAttribute(t2, a2));
  }
  let j = {
    enter: (e2) => ({ y: e2 >= 0 ? "72%" : "-72%", opacity: 0 }),
    center: { y: "0%", opacity: 1 },
    exit: (e2) => ({ y: e2 >= 0 ? "-72%" : "72%", opacity: 0 })
  }, F = { type: "spring", visualDuration: 0.32, bounce: 0.1 };
  function E({ text: e2, dir: t2, still: a2, className: r2 }) {
    let s2, i2, l2, d2 = [f().roll, r2].filter(Boolean).join(" ");
    return a2 ? (0, n.jsx)("span", { className: d2, children: e2 }) : (0, n.jsx)("span", {
      className: d2,
      children: (s2 = e2.match(/\d|\D+/g) ?? [], i2 = 0, l2 = 0, s2.reverse().map((e3) => ({
        part: e3,
        key: /\d/.test(e3) ? `d${i2++}` : `w${l2++}`
      })).reverse()).map(
        ({ part: e3, key: a3 }) => (0, n.jsx)(
          "span",
          {
            className: f().slot,
            children: (0, n.jsx)(m.N, {
              initial: false,
              mode: "popLayout",
              custom: t2,
              children: (0, n.jsx)(
                o.PY1.span,
                {
                  className: f().char,
                  custom: t2,
                  variants: j,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: F,
                  children: e3.replace(/ /g, "\xA0")
                },
                e3
              )
            })
          },
          a3
        )
      )
    });
  }
  function $({
    data: e2,
    value: t2,
    defaultValue: a2,
    onValueChange: s2,
    onValueCommit: i2,
    min: l2 = 0,
    max: o2,
    step: d2 = 1,
    largeStep: u2,
    minSpan: c2,
    maxSpan: m2,
    format: p2,
    formatSpan: g2,
    ticks: N2,
    label: j2 = "Date range",
    live: F2 = false,
    accent: k2,
    height: D2 = 112,
    disabled: R2 = false,
    className: C2,
    style: I2
  }) {
    let A2 = (0, r.useSyncExternalStore)(
      M,
      () => window.matchMedia(y).matches,
      () => false
    ), L2 = o2 ?? Math.max(l2 + 1, l2 + e2.length - 1), P2 = d2 > 0 ? d2 : 1, T2 = Math.max(w(P2), w(l2)), U2 = L2 - l2 || 1, V2 = u2 ?? Math.max(P2, Math.round(U2 / 10 / P2) * P2), W2 = x(c2 ?? P2, P2, U2), Q2 = x(m2 ?? U2, W2, U2), X2 = (e3) => {
      let t3 = x(Math.min(e3[0], e3[1]), l2, L2), a3 = x(Math.max(e3[0], e3[1]), l2, L2);
      return a3 - t3 < W2 && (t3 = (a3 = Math.min(L2, t3 + W2)) - W2), a3 - t3 > Q2 && (t3 = a3 - Q2), [t3, a3];
    }, [B2, G2] = (0, r.useState)(
      () => X2(a2 ?? [L2 - Math.round(U2 / 4 / P2) * P2, L2])
    ), Y2 = t2 ? X2(t2) : B2, [q2, z] = (0, r.useState)("idle"), J = p2 ?? ((e3) => e3.toLocaleString("en-US", {
      minimumFractionDigits: T2,
      maximumFractionDigits: T2
    })), K = Number((Y2[1] - Y2[0]).toFixed(T2)), H = null === g2 ? null : g2 ? g2(K) : `${J(K)} wide`, [O, Z] = (0, r.useState)({ values: Y2, d: [1, 1, 1] });
    if (O.values[0] !== Y2[0] || O.values[1] !== Y2[1]) {
      let e3 = Math.sign(Y2[0] - O.values[0]) || O.d[0], t3 = Math.sign(Y2[1] - O.values[1]) || O.d[1], a3 = Math.sign(Y2[1] - Y2[0] - (O.values[1] - O.values[0])) || O.d[2];
      Z({ values: Y2, d: [e3, t3, a3] });
    }
    let ee = (0, r.useRef)(Y2), et = (0, r.useRef)(null), ea = (0, r.useRef)(i2), en = (0, r.useRef)(s2), er = void 0 !== t2, es = (0, r.useRef)(er), [ei] = (0, r.useState)(() => (e3) => {
      let t3 = ee.current;
      (t3[0] !== e3[0] || t3[1] !== e3[1]) && (ee.current = e3, et.current && (et.current.values = e3), es.current || G2(e3), en.current?.(e3));
    }), [el] = (0, r.useState)(() => () => ea.current?.(ee.current)), eo = (0, r.useRef)(null), ed = (0, r.useRef)(null), eu = (0, r.useRef)(null), ec = (0, r.useRef)([]), em = (0, r.useRef)(null), ep = (0, r.useRef)(null), ef = (0, r.useRef)([]), eh = (0, r.useRef)([]), eg = (0, r.useRef)(null), ex = (0, r.useRef)(null);
    (0, r.useLayoutEffect)(() => {
      ee.current = Y2, ea.current = i2, en.current = s2, es.current = er, et.current = {
        min: l2,
        max: L2,
        step: P2,
        large: V2,
        decimals: T2,
        minSpan: W2,
        maxSpan: Q2,
        values: Y2,
        reduced: A2,
        disabled: R2,
        emit: ei,
        commit: el
      }, ex.current?.sync();
    }), (0, r.useLayoutEffect)(() => {
      let e3 = /* @__PURE__ */ (function(e4, t4, a4) {
        let n3 = {
          w: 1,
          pw: 1,
          ph: 1,
          left: 0,
          edges: [
            { x: 0, v: 0 },
            { x: 0, v: 0 }
          ],
          goals: [0, 0],
          glide: false,
          press: [
            { x: 0, v: 0 },
            { x: 0, v: 0 },
            { x: 0, v: 0 }
          ],
          drag: null,
          ys: [],
          from: [],
          to: [],
          morph: { x: 1, v: 0 },
          emitted: null,
          coastSpan: null,
          settling: false,
          running: false,
          frame: 0,
          last: 0,
          visible: true,
          disposed: false,
          measured: false
        }, r3 = (t5) => (t5 - e4.current.min) / (e4.current.max - e4.current.min || 1) * n3.w, s4 = (t5) => e4.current.min + t5 / n3.w * (e4.current.max - e4.current.min), i3 = (t5) => {
          let a5 = e4.current;
          return Number(
            (a5.min + Math.round((t5 - a5.min) / a5.step) * a5.step).toFixed(
              a5.decimals
            )
          );
        }, l3 = (t5) => Number(t5.toFixed(e4.current.decimals)), o3 = (t5) => t5 / (e4.current.max - e4.current.min || 1) * n3.w, d3 = (e5) => {
          let t5 = n3.drag?.mode;
          return +(0 === e5 && "start" === t5 || 1 === e5 && "end" === t5 || 2 === e5 && "pan" === t5);
        }, u3 = () => !n3.drag || n3.drag.follow;
        function c3() {
          if (!n3.disposed && !n3.running) {
            if (!n3.visible) {
              m3(), w2(), y2();
              return;
            }
            n3.running = true, n3.last = 0, n3.frame = requestAnimationFrame(p3);
          }
        }
        function m3() {
          u3() && n3.edges.forEach((e5, t5) => {
            e5.x = n3.goals[t5], e5.v = 0;
          }), n3.morph.x = 1, n3.morph.v = 0, n3.ys = n3.to.slice(), n3.press.forEach((e5, t5) => {
            e5.x = d3(t5), e5.v = 0;
          }), n3.settling && !n3.drag && f2();
        }
        function p3(t5) {
          let a5 = n3.last ? Math.min(0.05, (t5 - n3.last) / 1e3) : 1 / 60;
          n3.last = t5;
          let r4 = (function(t6) {
            let a6 = e4.current.reduced, r5 = Math.min(24, Math.max(1, Math.ceil(t6 / h - 1e-6))), o4 = t6 / r5, c4 = n3.glide ? 260 : 520, m4 = n3.glide ? 29 : 40, p4 = u3();
            for (let e5 = 0; e5 < r5; e5++)
              p4 && n3.edges.forEach((e6, t7) => {
                a6 ? (e6.x = n3.goals[t7], e6.v = 0) : _(e6, n3.goals[t7], c4, m4, o4);
              }), n3.press.forEach((e6, t7) => {
                a6 ? (e6.x = d3(t7), e6.v = 0) : _(e6, d3(t7), 700, 40, o4);
              }), 1 !== n3.morph.x && (a6 ? (n3.morph.x = 1, n3.morph.v = 0) : _(n3.morph, 1, 180, 24, o4));
            if (null !== n3.coastSpan && !n3.drag) {
              let t7 = e4.current, a7 = x(i3(s4(n3.edges[0].x)), t7.min, l3(t7.max - n3.coastSpan));
              g3([a7, l3(a7 + n3.coastSpan)]);
            }
            let v2 = !!n3.drag;
            return p4 && n3.edges.forEach((e5, t7) => {
              b(e5, n3.goals[t7], 0.05) || (v2 = true);
            }), n3.press.forEach((e5, t7) => {
              b(e5, d3(t7), 2e-3) || (v2 = true);
            }), 1 !== n3.morph.x && (b(n3.morph, 1, 5e-4) ? (n3.morph.x = 1, n3.morph.v = 0) : v2 = true, n3.ys = n3.to.map(
              (e5, t7) => (n3.from[t7] ?? e5) + (e5 - (n3.from[t7] ?? e5)) * n3.morph.x
            ), w2()), !v2 && (n3.edges.forEach((e5, t7) => {
              e5.x = n3.goals[t7], e5.v = 0;
            }), n3.settling && f2()), v2;
          })(a5);
          y2(), r4 && n3.visible && !n3.disposed ? n3.frame = requestAnimationFrame(p3) : (n3.running = false, n3.last = 0);
        }
        function f2() {
          null !== n3.coastSpan && a4("idle"), n3.settling = false, n3.glide = false, n3.coastSpan = null, e4.current.commit();
        }
        function g3(t5) {
          n3.emitted && n3.emitted[0] === t5[0] && n3.emitted[1] === t5[1] || (n3.emitted = t5, e4.current.emit(t5));
        }
        function w2() {
          let e5 = n3.ys, a5 = e5.length;
          if (!a5 || !n3.measured) return;
          let r4 = (function(e6, t5) {
            let a6 = e6.length;
            if (!a6) return "";
            if (1 === a6) return `M${e6[0]},${t5[0]}`;
            let n4 = [], r5 = [];
            for (let r6 = 0; r6 < a6 - 1; r6++)
              n4.push((t5[r6 + 1] - t5[r6]) / (e6[r6 + 1] - e6[r6] || 1));
            r5.push(n4[0]);
            for (let e7 = 1; e7 < a6 - 1; e7++)
              r5.push(n4[e7 - 1] * n4[e7] <= 0 ? 0 : (n4[e7 - 1] + n4[e7]) / 2);
            r5.push(n4[a6 - 2]);
            for (let e7 = 0; e7 < a6 - 1; e7++) {
              if (0 === n4[e7]) {
                r5[e7] = 0, r5[e7 + 1] = 0;
                continue;
              }
              let t6 = r5[e7] / n4[e7], a7 = r5[e7 + 1] / n4[e7], s7 = t6 * t6 + a7 * a7;
              if (s7 > 9) {
                let i5 = 3 / Math.sqrt(s7);
                r5[e7] = i5 * t6 * n4[e7], r5[e7 + 1] = i5 * a7 * n4[e7];
              }
            }
            let s6 = `M${e6[0].toFixed(2)},${t5[0].toFixed(2)}`;
            for (let n5 = 0; n5 < a6 - 1; n5++) {
              let a7 = (e6[n5 + 1] - e6[n5]) / 3;
              s6 += `C${(e6[n5] + a7).toFixed(2)},${(t5[n5] + r5[n5] * a7).toFixed(2)} ${(e6[n5 + 1] - a7).toFixed(2)},${(t5[n5 + 1] - r5[n5 + 1] * a7).toFixed(2)} ${e6[n5 + 1].toFixed(2)},${t5[n5 + 1].toFixed(2)}`;
            }
            return s6;
          })(
            e5.map((e6, t5) => (1 === a5 ? 0.5 : t5 / (a5 - 1)) * 1e3),
            e5
          ), s5 = `${r4}L1000,100L0,100Z`;
          t4.lines.current.forEach((e6) => S(e6, "d", r4)), t4.areas.current.forEach((e6) => S(e6, "d", s5));
          let i4 = 10 + e5[a5 - 1] / 100 * (n3.ph - 10 - 2);
          S(
            t4.dot.current,
            "transform",
            `translate3d(${(12 + n3.w).toFixed(2)}px,${i4.toFixed(2)}px,0)`
          );
        }
        function y2() {
          if (!n3.measured) return;
          let a5 = e4.current, r4 = n3.edges[0].x, s5 = n3.edges[1].x;
          if (a5.reduced) r4 = x(r4, 0, n3.w), s5 = x(s5, 0, n3.w);
          else {
            if (r4 < 0) {
              let e5 = s5 - r4;
              s5 = (r4 = v(r4)) + e5;
            }
            if (s5 > n3.w) {
              let e5 = s5 - r4;
              r4 = (s5 = n3.w + v(s5 - n3.w)) - e5;
            }
          }
          let i4 = Math.min(r4, s5), l4 = Math.max(r4, s5), [o4, d4, u4] = n3.press.map((e5) => e5.x), c4 = Math.max(0.5, l4 - i4) / n3.w;
          S(
            t4.clip.current,
            "transform",
            `translate3d(${i4.toFixed(2)}px,0,0) scaleX(${c4.toFixed(6)})`
          ), S(
            t4.clipInner.current,
            "transform",
            `scaleX(${(1 / c4).toFixed(6)}) translate3d(${(-i4).toFixed(2)}px,0,0)`
          ), S(
            t4.edges.current[0],
            "transform",
            `translate3d(${i4.toFixed(2)}px,0,0)`
          ), S(
            t4.edges.current[1],
            "transform",
            `translate3d(${(l4 + 12).toFixed(2)}px,0,0)`
          ), S(
            t4.edges.current[0]?.firstElementChild,
            "transform",
            `scaleY(${(1 + 0.4 * o4 + 0.12 * u4).toFixed(4)})`
          ), S(
            t4.edges.current[1]?.firstElementChild,
            "transform",
            `scaleY(${(1 + 0.4 * d4 + 0.12 * u4).toFixed(4)})`
          );
          let m4 = `translate3d(${(i4 + 12).toFixed(2)}px,0,0) scaleX(${(Math.max(0, l4 - i4) / 100).toFixed(5)})`;
          S(t4.band.current, "transform", m4), S(t4.body.current, "transform", m4), S(
            t4.band.current?.firstElementChild,
            "opacity",
            (0.06 * u4).toFixed(3)
          );
        }
        function M2() {
          let a5 = t4.plot.current;
          if (!a5) return;
          let s5 = a5.getBoundingClientRect();
          n3.pw = Math.max(1, s5.width), n3.ph = Math.max(1, s5.height), n3.w = Math.max(1, s5.width - 24), n3.left = s5.left + 12;
          let i4 = !n3.measured;
          n3.measured = true;
          let l4 = e4.current;
          i4 && (n3.emitted = l4.values), n3.drag || null !== n3.coastSpan || (n3.goals = [r3(l4.values[0]), r3(l4.values[1])], (i4 || !n3.running) && n3.edges.forEach((e5, t5) => {
            e5.x = n3.goals[t5], e5.v = 0;
          })), w2(), y2();
        }
        function N3(e5) {
          n3.goals = [r3(e5[0]), r3(e5[1])], n3.glide = true, n3.settling = false, c3();
        }
        function j3(e5, t5, r4, s5) {
          n3.drag = {
            id: e5,
            mode: r4,
            grab: t5,
            from: [n3.edges[0].x, n3.edges[1].x],
            follow: s5,
            samples: [{ t: performance.now(), x: t5 }]
          }, n3.settling = false, n3.coastSpan = null, n3.glide = false, s5 || n3.edges.forEach((e6) => {
            e6.v = 0;
          }), a4(r4);
        }
        return {
          measure: M2,
          sync: function() {
            let t5 = e4.current.values;
            n3.emitted && n3.emitted[0] === t5[0] && n3.emitted[1] === t5[1] || (n3.emitted = t5, (n3.drag || null !== n3.coastSpan) && a4("idle"), n3.drag = null, n3.coastSpan = null, N3(t5));
          },
          kick: c3,
          down: function(a5) {
            let r4 = e4.current;
            if (r4.disabled || 0 !== a5.button || !a5.isPrimary || n3.drag)
              return;
            M2();
            let o4 = a5.target.closest("[data-part]"), d4 = o4?.dataset.part;
            try {
              a5.currentTarget.setPointerCapture(a5.pointerId);
            } catch {
            }
            let u4 = a5.clientX - n3.left;
            if ("start" === d4 || "end" === d4 || "pan" === d4)
              j3(a5.pointerId, u4, d4, false), o4?.focus({ preventScroll: true });
            else {
              let e5 = n3.goals[1] - n3.goals[0], o5 = x(u4 - e5 / 2, 0, n3.w - e5);
              n3.goals = [o5, o5 + e5], j3(a5.pointerId, u4, "pan", true), n3.drag.from = [o5, o5 + e5];
              let d5 = r4.values[1] - r4.values[0], c4 = x(i3(s4(o5)), r4.min, l3(r4.max - d5));
              g3([c4, l3(c4 + d5)]), t4.body.current?.focus({ preventScroll: true });
            }
            a5.preventDefault(), c3();
          },
          move: function(t5) {
            let a5 = n3.drag;
            if (!a5 || a5.id !== t5.pointerId) return;
            let r4 = e4.current, d4 = t5.clientX - n3.left, u4 = t5.nativeEvent.getCoalescedEvents?.() ?? [];
            if (u4.length > 1)
              for (let e5 of u4)
                a5.samples.push({ t: e5.timeStamp, x: e5.clientX - n3.left });
            else
              a5.samples.push({ t: t5.timeStamp || performance.now(), x: d4 });
            for (; a5.samples.length > 16; ) a5.samples.shift();
            let m4 = d4 - a5.grab;
            if ("pan" === a5.mode) {
              let e5 = a5.from[1] - a5.from[0], t6 = a5.from[0] + m4;
              a5.follow ? n3.goals = [t6, t6 + e5] : (n3.edges[0].x = t6, n3.edges[1].x = t6 + e5);
              let o4 = r4.values[1] - r4.values[0], d5 = x(i3(s4(t6)), r4.min, l3(r4.max - o4));
              g3([d5, l3(d5 + o4)]);
            } else {
              let e5 = +("start" !== a5.mode), t6 = n3.edges[1 - e5].x, d5 = o3(r4.minSpan), u5 = o3(r4.maxSpan), c4 = 0 === e5 ? Math.max(0, t6 - u5) : t6 + d5, p4 = 0 === e5 ? t6 - d5 : Math.min(n3.w, t6 + u5), f3 = a5.from[e5] + m4, h2 = x(f3, c4, p4);
              n3.edges[e5].x = r4.reduced ? h2 : h2 + v(f3 - h2, 10);
              let [w3, _2] = r4.values, b2 = 0 === e5 ? x(
                i3(s4(f3)),
                Math.max(r4.min, l3(_2 - r4.maxSpan)),
                l3(_2 - r4.minSpan)
              ) : x(
                i3(s4(f3)),
                l3(w3 + r4.minSpan),
                Math.min(r4.max, l3(w3 + r4.maxSpan))
              );
              g3(0 === e5 ? [b2, _2] : [w3, b2]);
            }
            c3();
          },
          up: function(t5) {
            let o4 = n3.drag;
            if (!o4 || o4.id !== t5.pointerId) return;
            n3.drag = null;
            let d4 = e4.current;
            if (a4("idle"), "pan" === o4.mode) {
              let e5 = d4.values[1] - d4.values[0], u4 = "pointerup" !== t5.type || d4.reduced ? 0 : x(
                (function(e6) {
                  let t6 = e6.samples, a5 = t6[t6.length - 1];
                  if (!a5 || t6.length < 2 || performance.now() - a5.t > 90)
                    return 0;
                  let n4 = t6[0];
                  for (let e7 of t6)
                    if (a5.t - e7.t <= 90) {
                      n4 = e7;
                      break;
                    }
                  let r4 = (a5.t - n4.t) / 1e3;
                  return r4 > 8e-3 ? (a5.x - n4.x) / r4 : 0;
                })(o4),
                -6e3,
                6e3
              ), c4 = x(
                i3(s4((o4.follow ? n3.goals[0] : n3.edges[0].x) + 0.2 * u4)),
                d4.min,
                l3(d4.max - e5)
              );
              n3.goals = [r3(c4), r3(l3(c4 + e5))], o4.follow || n3.edges.forEach((e6) => {
                e6.v = u4;
              }), n3.glide = true, n3.coastSpan = e5, a4("coast");
            } else
              n3.goals = [r3(d4.values[0]), r3(d4.values[1])], n3.glide = false;
            n3.settling = true, c3();
          },
          key: function(t5, a5) {
            let r4 = e4.current;
            if (r4.disabled) return;
            let [s5, o4] = r4.values, d4 = o4 - s5, u4 = a5.shiftKey ? r4.large : r4.step, m4 = 0, p4 = null;
            if ("ArrowRight" === a5.key || "ArrowUp" === a5.key) m4 = u4;
            else if ("ArrowLeft" === a5.key || "ArrowDown" === a5.key) m4 = -u4;
            else if ("PageUp" === a5.key) m4 = r4.large;
            else if ("PageDown" === a5.key) m4 = -r4.large;
            else if ("Home" === a5.key)
              p4 = "start" === t5 ? [Math.max(r4.min, o4 - r4.maxSpan), o4] : "end" === t5 ? [s5, s5 + r4.minSpan] : [r4.min, r4.min + d4];
            else {
              if ("End" !== a5.key) return;
              p4 = "start" === t5 ? [o4 - r4.minSpan, o4] : "end" === t5 ? [s5, Math.min(r4.max, s5 + r4.maxSpan)] : [r4.max - d4, r4.max];
            }
            if (a5.preventDefault(), !p4)
              if ("pan" === t5) {
                let e5 = x(s5 + m4, r4.min, r4.max - d4);
                p4 = [e5, e5 + d4];
              } else
                p4 = "start" === t5 ? [
                  x(
                    s5 + m4,
                    Math.max(r4.min, o4 - r4.maxSpan),
                    o4 - r4.minSpan
                  ),
                  o4
                ] : [
                  s5,
                  x(
                    o4 + m4,
                    s5 + r4.minSpan,
                    Math.min(r4.max, s5 + r4.maxSpan)
                  )
                ];
            let f3 = "pan" === t5 ? [i3(p4[0]), l3(i3(p4[0]) + d4)] : [i3(p4[0]), i3(p4[1])];
            if (f3[0] === s5 && f3[1] === o4) {
              if (!r4.reduced) {
                let e5 = 260 * Math.sign(m4 || ("Home" === a5.key ? -1 : 1));
                "end" !== t5 && (n3.edges[0].v += e5), "start" !== t5 && (n3.edges[1].v += e5), n3.glide = false, c3();
              }
              return;
            }
            n3.emitted = f3, r4.emit(f3), N3(f3), n3.glide = "pan" === t5 || Math.abs(m4) > r4.step || !m4, r4.commit();
          },
          setData: function(t5) {
            let a5 = (function(e5) {
              let t6 = -1 / 0, a6 = 1 / 0;
              for (let n5 of e5) n5 > t6 && (t6 = n5), n5 < a6 && (a6 = n5);
              if (!Number.isFinite(t6)) return [];
              let n4 = Math.min(0, a6), r4 = t6 + (t6 - n4) * 0.12 || 1;
              return e5.map((e6) => 100 - (e6 - n4) / (r4 - n4 || 1) * 100);
            })(t5);
            if (!n3.ys.length || e4.current.reduced || a5.length !== n3.ys.length || !n3.visible) {
              n3.from = a5.slice(), n3.to = a5, n3.ys = a5.slice(), n3.morph.x = 1, n3.morph.v = 0, w2();
              return;
            }
            n3.from = n3.ys.slice(), n3.to = a5, n3.morph.x = 0, n3.morph.v = 0, c3();
          },
          setVisible: function(e5) {
            if (e5 !== n3.visible) {
              if (n3.visible = e5, !e5) {
                cancelAnimationFrame(n3.frame), n3.running = false, n3.last = 0, m3(), w2(), y2();
                return;
              }
              c3();
            }
          },
          dispose: function() {
            n3.disposed = true, cancelAnimationFrame(n3.frame);
          }
        };
      })(
        et,
        {
          plot: eo,
          clip: ed,
          clipInner: eu,
          edges: ec,
          band: em,
          body: ep,
          lines: ef,
          areas: eh,
          dot: eg
        },
        z
      );
      ex.current = e3, e3.measure();
      let t3 = eo.current, a3 = new ResizeObserver(() => e3.measure());
      t3 && a3.observe(t3);
      let n2 = true, r2 = () => e3.setVisible(n2 && "visible" === document.visibilityState), s3 = new IntersectionObserver(([e4]) => {
        n2 = e4.isIntersecting, r2();
      });
      return t3 && s3.observe(t3), document.addEventListener("visibilitychange", r2), () => {
        a3.disconnect(), s3.disconnect(), document.removeEventListener("visibilitychange", r2), e3.dispose(), ex.current = null;
      };
    }, []), (0, r.useLayoutEffect)(() => {
      ex.current?.setData(e2);
    }, [e2]), (0, r.useEffect)(() => {
      ex.current?.measure();
    }, [l2, L2, D2]);
    let ew = x(D2, 64, 240), ev = {
      ...k2 ? { "--wr-accent": k2, "--wr-line": k2 } : null,
      "--wr-height": `${ew}px`,
      ...I2
    }, e_ = J(Y2[0]), eb = J(Y2[1]), ey = A2 || "idle" !== q2, eM = (0, r.useMemo)(
      () => (N2 ?? []).filter((e3) => e3.value >= l2 && e3.value <= L2),
      [N2, l2, L2]
    ), eN = {
      role: "slider",
      tabIndex: R2 ? -1 : 0,
      "aria-orientation": "horizontal",
      "aria-disabled": R2 || void 0
    };
    return (0, n.jsxs)("div", {
      className: [f().root, C2].filter(Boolean).join(" "),
      style: ev,
      role: "group",
      "aria-label": j2,
      "data-disabled": R2 || void 0,
      "data-mode": q2,
      children: [
        (0, n.jsxs)("div", {
          className: f().readouts,
          "aria-hidden": "true",
          children: [
            (0, n.jsx)(E, {
              text: e_,
              dir: O.d[0],
              still: ey,
              className: f().start
            }),
            H ? (0, n.jsx)(E, {
              text: H,
              dir: O.d[2],
              still: ey,
              className: f().span
            }) : (0, n.jsx)("span", {}),
            (0, n.jsx)(E, {
              text: eb,
              dir: O.d[1],
              still: ey,
              className: f().end
            })
          ]
        }),
        (0, n.jsxs)("div", {
          ref: eo,
          className: f().plot,
          onPointerDown: (e3) => ex.current?.down(e3),
          onPointerMove: (e3) => ex.current?.move(e3),
          onPointerUp: (e3) => ex.current?.up(e3),
          onPointerCancel: (e3) => ex.current?.up(e3),
          onLostPointerCapture: (e3) => ex.current?.up(e3),
          children: [
            [0, 1].map((e3) => {
              let t3 = (0, n.jsxs)("svg", {
                className: f().chart,
                "data-muted": 0 === e3 || void 0,
                viewBox: "0 0 1000 100",
                preserveAspectRatio: "none",
                "aria-hidden": "true",
                focusable: "false",
                children: [
                  (0, n.jsx)("path", {
                    ref: (t4) => {
                      eh.current[e3] = t4;
                    },
                    className: f().area
                  }),
                  (0, n.jsx)("path", {
                    ref: (t4) => {
                      ef.current[e3] = t4;
                    },
                    className: f().line,
                    vectorEffect: "non-scaling-stroke"
                  })
                ]
              });
              return 0 === e3 ? (0, n.jsx)("div", { className: f().base, children: t3 }, e3) : (0, n.jsx)(
                "div",
                {
                  ref: ed,
                  className: f().clip,
                  "aria-hidden": "true",
                  children: (0, n.jsx)("div", {
                    ref: eu,
                    className: f().clipInner,
                    children: t3
                  })
                },
                e3
              );
            }),
            F2 ? (0, n.jsx)("span", {
              ref: eg,
              className: f().dot,
              "aria-hidden": "true",
              children: (0, n.jsx)("span", { className: f().pulse })
            }) : null,
            (0, n.jsx)("div", {
              ref: em,
              className: f().band,
              "aria-hidden": "true",
              children: (0, n.jsx)("span", { className: f().tint })
            }),
            (0, n.jsx)("div", {
              ref: (e3) => {
                ec.current[0] = e3;
              },
              className: f().edge,
              "data-side": "start",
              ...eN,
              "data-part": "start",
              onKeyDown: (e3) => ex.current?.key("start", e3),
              "aria-label": `${j2}, start`,
              "aria-valuemin": Math.max(l2, Number((Y2[1] - Q2).toFixed(T2))),
              "aria-valuemax": Number((Y2[1] - W2).toFixed(T2)),
              "aria-valuenow": Y2[0],
              "aria-valuetext": e_,
              children: (0, n.jsx)("span", { className: f().grip })
            }),
            (0, n.jsx)("div", {
              ref: ep,
              className: f().body,
              ...eN,
              "data-part": "pan",
              onKeyDown: (e3) => ex.current?.key("pan", e3),
              "aria-label": `${j2}, window`,
              "aria-valuemin": l2,
              "aria-valuemax": Number((L2 - (Y2[1] - Y2[0])).toFixed(T2)),
              "aria-valuenow": Y2[0],
              "aria-valuetext": `${e_} to ${eb}`
            }),
            (0, n.jsx)("div", {
              ref: (e3) => {
                ec.current[1] = e3;
              },
              className: f().edge,
              "data-side": "end",
              ...eN,
              "data-part": "end",
              onKeyDown: (e3) => ex.current?.key("end", e3),
              "aria-label": `${j2}, end`,
              "aria-valuemin": Number((Y2[0] + W2).toFixed(T2)),
              "aria-valuemax": Math.min(L2, Number((Y2[0] + Q2).toFixed(T2))),
              "aria-valuenow": Y2[1],
              "aria-valuetext": eb,
              children: (0, n.jsx)("span", { className: f().grip })
            })
          ]
        }),
        eM.length ? (0, n.jsx)("div", {
          className: f().axis,
          "aria-hidden": "true",
          children: eM.map(
            (e3) => (0, n.jsx)(
              "span",
              {
                className: f().tick,
                style: {
                  left: `calc(12px + (100% - 24px) * ${((e3.value - l2) / U2).toFixed(5)})`
                },
                children: e3.label
              },
              `${e3.value}-${e3.label}`
            )
          )
        }) : null
      ]
    });
  }
  var k = a(7770), D = a(76892), R = a.n(D);
  let C = Date.UTC(2026, 3, 1), I = (e2) => new Date(C + 864e5 * e2), A = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), L = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" }), P = (e2) => A.format(I(e2)), T = (e2) => `${e2 + 1} days`, U = new Intl.NumberFormat("en-US");
  function V() {
    let e2 = 7;
    return Array.from({ length: 182 }, (t2, a2) => {
      let n2 = I(a2).getUTCDay(), r2 = Math.round(
        (1800 + 9 * a2 + (a2 >= 104 ? 2600 * Math.exp(-(a2 - 104) / 6) + 420 : 0)) * (0 === n2 || 6 === n2 ? 0.8 : 1) * (0.94 + 0.12 * ((e2 = 16807 * e2 % 2147483647) / 2147483647))
      );
      return 181 === a2 ? Math.round(0.42 * r2) : r2;
    });
  }
  let W = Array.from({ length: 6 }, (e2, t2) => Date.UTC(2026, 4 + t2, 1)).map((e2) => ({
    value: Math.round((e2 - C) / 864e5),
    label: L.format(new Date(e2))
  })).filter((e2) => e2.value < 175), Q = [7, 30, 90], X = (e2) => [181 - e2 + 1, 181], B = () => () => {
  };
  function G({ value: e2, reduced: t2 }) {
    let a2 = (0, i.z)(e2, { visualDuration: 0.5, bounce: 0 }), s2 = (0, l.G)(a2, (e3) => U.format(Math.round(e3)));
    return (0, r.useEffect)(() => {
      t2 ? a2.jump(e2) : a2.set(e2);
    }, [a2, e2, t2]), (0, n.jsx)(o.PY1.span, { className: R().total, children: s2 });
  }
  function Y() {
    let e2, t2 = (e2 = (0, r.useSyncExternalStore)(
      B,
      () => true,
      () => false
    ), !!(0, s.I)() && e2), a2 = (0, r.useId)(), [i2, l2] = (0, r.useState)(V), [m2, p2] = (0, r.useState)(X(30));
    (0, r.useEffect)(() => {
      let e3 = window.setInterval(() => {
        "visible" === document.visibilityState && l2((e4) => {
          let t3 = e4.slice();
          return t3[181] += 18 + Math.round(46 * Math.random()), t3;
        });
      }, 2200);
      return () => window.clearInterval(e3);
    }, []);
    let { total: f2, change: h2 } = (0, r.useMemo)(() => {
      let e3 = (e4, t4) => {
        let a4 = 0;
        for (let n3 = Math.max(0, e4); n3 <= t4; n3++) a4 += i2[n3];
        return a4;
      }, t3 = m2[1] - m2[0] + 1, a3 = e3(m2[0], m2[1]), n2 = m2[0] - t3 >= 0 ? e3(m2[0] - t3, m2[0] - 1) : 0;
      return { total: a3, change: n2 ? (a3 - n2) / n2 : null };
    }, [i2, m2]), g2 = m2[1] - m2[0] + 1, x2 = 181 === m2[1] ? Q.find((e3) => e3 === g2) : void 0, w2 = (h2 ?? 0) >= 0;
    return (0, n.jsx)("div", {
      className: R().demo,
      children: (0, n.jsxs)("div", {
        className: R().card,
        children: [
          (0, n.jsxs)("div", {
            className: R().head,
            children: [
              (0, n.jsxs)("div", {
                className: R().metric,
                children: [
                  (0, n.jsx)("span", {
                    className: R().label,
                    children: "Visitors"
                  }),
                  (0, n.jsx)(G, { value: f2, reduced: t2 }),
                  (0, n.jsx)("span", {
                    className: R().change,
                    "data-trend": null === h2 ? void 0 : w2 ? "up" : "down",
                    children: null === h2 ? "No earlier period to compare" : (0, n.jsxs)(n.Fragment, {
                      children: [
                        w2 ? (0, n.jsx)(u.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }) : (0, n.jsx)(c.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        (0, n.jsx)("span", {
                          className: R().changeValue,
                          children: `${w2 ? "+" : "\u2212"}${Math.abs(100 * h2).toFixed(1)}%`
                        }),
                        (0, n.jsxs)("span", {
                          className: R().changeLabel,
                          children: ["vs previous ", g2, " days"]
                        })
                      ]
                    })
                  })
                ]
              }),
              (0, n.jsx)(d.o, {
                id: a2,
                children: (0, n.jsx)("div", {
                  className: R().presets,
                  role: "group",
                  "aria-label": "Quick ranges",
                  children: Q.map(
                    (e3) => (0, n.jsxs)(
                      "button",
                      {
                        type: "button",
                        className: R().preset,
                        "aria-pressed": x2 === e3,
                        onClick: () => p2(X(e3)),
                        children: [
                          x2 === e3 ? (0, n.jsx)(o.PY1.span, {
                            layoutId: "window-range-preset",
                            className: R().presetActive,
                            transition: t2 ? { duration: 0 } : k.T.spring.snappy
                          }) : null,
                          (0, n.jsxs)("span", {
                            className: R().presetText,
                            children: [e3, "d"]
                          })
                        ]
                      },
                      e3
                    )
                  )
                })
              })
            ]
          }),
          (0, n.jsx)($, {
            label: "Report dates",
            data: i2,
            value: m2,
            onValueChange: p2,
            min: 0,
            max: 181,
            minSpan: 6,
            format: P,
            formatSpan: T,
            ticks: W,
            height: 144,
            live: true
          })
        ]
      })
    });
  }
  let q = Y;
}

__m(__module,__exports,__require);
}