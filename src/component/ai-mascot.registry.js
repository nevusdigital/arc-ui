/* ai-mascot (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(7226, ".demo{display:grid;place-items:center;width:100%;padding:24px 16px;box-sizing:border-box}\n.card{width:100%;max-width:560px;box-sizing:border-box;display:grid;gap:4px;border:1px solid var(--border);border-radius:var(--radius-panel,26px);background:var(--surface);padding:8px;container-type:inline-size}\n.stage{display:grid;place-items:center;height:208px}\n.inline{display:flex;align-items:center;justify-content:center;gap:8px;min-height:32px;padding:0 12px 12px;color:var(--text-secondary);font-size:14px;line-height:20px}\n.inline>:first-child{flex:none}\n.line{display:grid;min-width:0}\n.line>*{grid-area:1/1;min-width:0}\n.lineSizer{visibility:hidden;white-space:nowrap;overflow:hidden}\n.lineText{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.controls{display:flex;align-items:center;justify-content:space-between;gap:8px;border-top:1px solid var(--border-subtle);padding:8px 4px 0;min-width:0}\n.controls>:first-child{min-width:0;flex:0 1 auto}\n@container (max-width: 460px){.playText{display:none}", {"demo":"demo","card":"card","stage":"stage","inline":"inline","line":"line","lineSizer":"lineSizer","lineText":"lineText","controls":"controls","playText":"playText"});
A.reg(30508, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { AiMascotDemo: () => T, default: () => F });
  var a = r(95155), n = r(12115), i = r(18310), s = r(80642), o = r(25354), l = r(79267), c = r(36619);
  let u = ["idle", "listening", "thinking", "writing", "done", "error"], d = {
    idle: "Ready",
    listening: "Listening",
    thinking: "Thinking",
    writing: "Writing",
    done: "Done",
    error: "Something went wrong"
  }, y = {
    compact: false,
    view: "4 8 112 112",
    eyeW: 8,
    eyeL: 8,
    gazeX: 8,
    gazeY: 6,
    dotR: 4.5,
    starS: 1,
    orbit: { cx: 60, cy: 25, rx: 46, ry: 9 },
    home: [94, 24],
    listen: [91, 20],
    done: [95, 23],
    err: [93, 32],
    x0: 36,
    x1: 84,
    ly: 115
  }, h = {
    compact: true,
    view: "18 16 84 84",
    eyeW: 10.5,
    eyeL: 6.5,
    gazeX: 6.5,
    gazeY: 4.5,
    dotR: 7,
    starS: 1.4,
    orbit: { cx: 60, cy: 26, rx: 35, ry: 6.5 },
    home: [92, 26],
    listen: [90, 24],
    done: [90, 27],
    err: [91, 31],
    x0: 38,
    x1: 82,
    ly: 111
  }, m = 2 * Math.PI, p = (e2, t2 = 0, r2 = 1) => Math.min(r2, Math.max(t2, e2)), g = (e2) => e2 < 0.5 ? 4 * e2 * e2 * e2 : 1 - Math.pow(-2 * e2 + 2, 3) / 2;
  function f(e2, { t: t2, te: r2, geo: a2, glance: n2, still: i2 }) {
    let s2 = i2 ? 0 : Math.sin(m * t2 / 3.6), o2 = i2 ? 0 : Math.sin(m * t2 / 7.2), l2 = i2 ? 0 : Math.sin(m * t2 / 4.8), c2 = {
      bx: 0,
      by: -1.3 * s2,
      brot: 0.8 * o2,
      bsx: 1 - 0.012 * s2,
      bsy: 1 + 0.018 * s2,
      gx: 0,
      gy: 0,
      gk: 260,
      pointer: 1,
      eyeS: 1,
      happy: 0,
      worry: 0,
      blinkable: 1,
      dx: a2.home[0] + 1.2 * l2,
      dy: a2.home[1] + 1.8 * Math.sin(m * t2 / 3.6 + 1.1) * !i2,
      dr: 1,
      dop: 1,
      back: 0,
      star: 0,
      srot: 0,
      star2: 0,
      lx: a2.x0,
      lop: 0
    };
    switch (e2) {
      case "idle":
        return { ...c2, gx: n2[0] * a2.gazeX, gy: n2[1] * a2.gazeY, gk: 900 };
      case "listening": {
        let e3 = i2 ? 0.4 : 0.5 + 0.5 * (0.55 * Math.sin(7.1 * t2) + 0.3 * Math.sin(11.3 * t2 + 1.3) + 0.15 * Math.sin(3.7 * t2));
        return {
          ...c2,
          by: -1 - (i2 ? 0 : 0.55 * Math.sin(m * t2 / 1.7)),
          brot: 0,
          bsx: 1.03 - 8e-3 * s2,
          bsy: 1.04 + 0.012 * s2,
          gx: 0,
          gy: 0.08 * a2.gazeY,
          gk: 220,
          eyeS: 1.16,
          dx: a2.listen[0],
          dy: a2.listen[1],
          dr: 0.92 + 0.3 * e3
        };
      }
      case "thinking": {
        let { cx: e3, cy: n3, rx: o3, ry: l3 } = a2.orbit, u2 = i2 ? 0.7 * Math.PI : -0.5 + m / 2.4 * r2, d2 = Math.sin(u2), y2 = e3 + o3 * Math.cos(u2);
        return {
          ...c2,
          by: -1 - 0.8 * s2,
          brot: 3 + (i2 ? 0 : 0.6 * Math.sin(m * t2 / 4)),
          gx: (y2 - e3) / o3 * a2.gazeX * 0.55,
          gy: -a2.gazeY + 0.8 * d2,
          gk: 70,
          pointer: 0,
          dx: y2,
          dy: n3 + l3 * d2,
          dr: 0.84 + 0.16 * d2,
          dop: 0.8 + 0.2 * (d2 + 1) / 2,
          back: p(0.5 - 4 * d2)
        };
      }
      case "writing": {
        let e3, t3, n3, o3, l3 = i2 ? 0.804 : r2 % 1.75;
        if (l3 < 1.34) {
          let r3 = l3 / 1.34, i3 = -(Math.cos(Math.PI * r3) - 1) / 2 + 0.012 * Math.sin(4 * m * r3);
          e3 = a2.x0 + (a2.x1 - a2.x0) * i3, t3 = a2.ly + 0.5 * Math.sin(7 * m * r3), n3 = e3, o3 = p((e3 - a2.x0) / 4);
        } else {
          let r3 = (l3 - 1.34) / (1.75 - 1.34);
          e3 = a2.x1 + (a2.x0 - a2.x1) * g(r3), t3 = a2.ly - 7 * Math.sin(Math.PI * r3), n3 = a2.x1, o3 = 1 - (1 - (1 - r3) * (1 - r3));
        }
        let u2 = a2.compact;
        return {
          ...c2,
          by: -0.6 * s2 + (i2 ? 0 : 0.7 * Math.sin(m * r2 / 0.875)),
          brot: (e3 - 60) * 0.045,
          gx: (e3 - 60) / ((a2.x1 - a2.x0) / 2) * a2.gazeX * 0.5,
          gy: 0.75 * a2.gazeY,
          gk: 520,
          pointer: 0,
          dx: e3,
          dy: t3,
          dop: +!u2,
          dr: u2 ? 0.6 : 1,
          lx: u2 ? a2.x0 : n3,
          lop: u2 ? 0 : o3
        };
      }
      case "done":
        return {
          ...c2,
          by: -1.5 - 1.1 * s2,
          bsy: 1.015 + 0.016 * s2,
          gx: 0,
          gy: -0.25 * a2.gazeY,
          gk: 160,
          eyeS: 1.04,
          happy: 1,
          blinkable: 0,
          dx: a2.done[0],
          dy: a2.done[1],
          dr: 1 + (i2 ? 0 : 0.07 * Math.sin(m * t2 / 2.2)),
          star: 1,
          srot: i2 ? 0 : 10 * Math.sin(m * t2 / 3.2),
          star2: +!a2.compact
        };
      case "error":
        return {
          ...c2,
          by: 1 - 0.5 * s2,
          brot: 0,
          bsx: 1.01 - 6e-3 * s2,
          bsy: 0.985 + 0.01 * s2,
          gx: 0,
          gy: 0.42 * a2.gazeY,
          gk: 220,
          pointer: 0.6,
          eyeS: 0.86,
          worry: 1,
          dx: a2.err[0],
          dy: a2.err[1],
          dop: 0.55,
          dr: 0.85
        };
    }
  }
  let x = "M60 28C84 28 96 44 96 64C96 84 82 96 60 96C38 96 24 84 24 64C24 44 36 28 60 28Z", b = "M0 -7C.9 -1.6 1.6 -.9 7 0C1.6 .9 .9 1.6 0 7C-.9 1.6 -1.6 .9 -7 0C-1.6 -.9 -.9 -1.6 0 -7Z", v = (e2) => (Math.round(100 * e2) / 100).toString();
  function _(e2, t2, r2, a2) {
    var n2;
    let { bx: i2, by: s2, brot: o2, bsx: l2, bsy: c2 } = e2, u2 = `translate(${v(i2)} ${v(s2)}) translate(60 96) rotate(${v(o2)}) scale(${v(l2)} ${v(c2)}) translate(-60 -96)`, d2 = p(e2.happy), y2 = Math.max(0.06, r2 * p(1 - 2 * d2)) * e2.eyeS, h2 = p(2 * d2 - 1), m2 = [0, 1].map((r3) => {
      let a3 = 47 + 26 * r3 + t2[0] + (0 === r3 ? -1 : 1) * (e2.eyeS - 1) * 3, n3 = 60 + t2[1];
      return `translate(${v(a3)} ${v(n3)}) scale(${v(e2.eyeS)} ${v(y2)})`;
    }), g2 = [0, 1].map((r3) => {
      let a3 = 47 + 26 * r3 + 0.4 * t2[0], n3 = 59 + 0.4 * t2[1];
      return `translate(${v(a3)} ${v(n3)}) scale(${v(e2.eyeS)} ${v(Math.max(0.06, h2))})`;
    }), f2 = p(e2.worry), x2 = `translate(${v(0.5 * t2[0])} ${v(0.4 * t2[1] + (1 - f2) * 3)})`, b2 = a2.dotR * e2.dr * p(1 - e2.star), _2 = p(e2.back), k2 = p(e2.dop), w2 = (n2 = e2.dx, p((1.1 - (((n2 - 60) / 36) ** 2 + ((e2.dy - 62 - s2) / 34) ** 2)) / 0.3)), M2 = a2.starS * e2.dr * p(e2.star), A2 = `translate(${v(e2.dx)} ${v(e2.dy)}) rotate(${v(e2.srot)}) scale(${v(Math.max(1e-3, M2))})`, j2 = p(e2.star2), E2 = `translate(${v(e2.dx + 11)} ${v(e2.dy + 15)}) rotate(${v(-(1.4 * e2.srot))}) scale(${v(Math.max(1e-3, 0.5 * j2 * (2 - e2.dr)))})`, $2 = -s2, R2 = `translate(60 104) scale(${v((1 - 0.018 * $2) * l2)} 1)`;
    return {
      body: u2,
      pill: m2,
      arc: g2,
      arcOpacity: v(p((d2 - 0.45) / 0.15)),
      brows: x2,
      browOpacity: v(f2),
      dotFront: {
        cx: v(e2.dx),
        cy: v(e2.dy),
        r: v(b2),
        opacity: v(k2 * (1 - _2)),
        on: v(w2 * k2 * (1 - _2))
      },
      dotBack: { cx: v(e2.dx), cy: v(e2.dy), r: v(b2), opacity: v(k2 * _2) },
      star: A2,
      starOpacity: v(p(4 * e2.star) * k2),
      star2: E2,
      star2Opacity: v(p(3 * j2)),
      line: {
        x2: v(Math.max(a2.x0, e2.lx)),
        opacity: v(p(e2.lop) * p((e2.lx - a2.x0) / 4))
      },
      shadow: R2
    };
  }
  var k = r(40670), w = r.n(k);
  let M = [
    ["idle", 2.6],
    ["listening", 2.3],
    ["thinking", 2.6],
    ["writing", 3.5],
    ["done", 2.3],
    ["idle", 1.8],
    ["thinking", 1.7],
    ["error", 2],
    ["idle", 1.4]
  ], A = (e2, t2) => e2 + Math.random() * (t2 - e2), j = (e2, t2 = 0, r2 = 1) => Math.min(r2, Math.max(t2, e2));
  function E({
    status: e2,
    size: t2 = 96,
    tone: r2 = "accent",
    color: i2,
    eyeColor: s2,
    followPointer: o2 = true,
    companion: l2 = true,
    ground: c2 = true,
    paused: u2 = false,
    name: p2 = "Assistant",
    label: v2,
    announce: k2 = false,
    onStatusChange: $2,
    className: R2,
    style: S2
  }) {
    let z2 = `mascot-${(0, n.useId)().replace(/:/g, "")}`, L2 = t2 < 56 ? h : y, N2 = c2 && !L2.compact, [C2, I2] = (0, n.useState)(M[0][0]), T2 = e2 ?? C2, F2 = (0, n.useRef)(null), W = (0, n.useRef)(null), O = (0, n.useRef)(null), P = [(0, n.useRef)(null), (0, n.useRef)(null)], B = [(0, n.useRef)(null), (0, n.useRef)(null)], Y = (0, n.useRef)(null), D = (0, n.useRef)(null), q = (0, n.useRef)(null), G = (0, n.useRef)(null), X = (0, n.useRef)(null), K = (0, n.useRef)(null), U = (0, n.useRef)(null), Z = (0, n.useRef)(null), V = f(T2, { t: 0, te: 10, geo: L2, glance: [0, 0], still: true }), Q = _(V, [V.gx, V.gy], 1, L2), H = (0, n.useRef)({
      status: e2,
      geo: L2,
      paused: u2,
      onStatusChange: $2,
      followPointer: o2
    });
    (0, n.useLayoutEffect)(() => {
      H.current = {
        status: e2,
        geo: L2,
        paused: u2,
        onStatusChange: $2,
        followPointer: o2
      };
    });
    let J = (0, n.useRef)(() => {
    }), ee = (0, n.useRef)({
      clock: 0,
      current: { status: T2, start: -10 },
      from: { kind: "snap", pose: V },
      transStart: 0,
      pose: V,
      gaze: [V.gx, V.gy],
      velocity: [0, 0],
      blinkAt: 2.2,
      blinkStart: -1,
      glance: [0, 0],
      glanceAt: 1.4,
      autoIndex: 0,
      autoAt: M[0][1],
      pointer: { active: false, gx: 0, gy: 0, weight: 0 },
      dirty: true
    }), et = (e3) => {
      O.current?.setAttribute("transform", e3.body), P.forEach((t4, r4) => t4.current?.setAttribute("transform", e3.pill[r4])), B.forEach((t4, r4) => {
        t4.current?.setAttribute("transform", e3.arc[r4]), t4.current?.setAttribute("opacity", e3.arcOpacity);
      }), Y.current?.setAttribute("transform", e3.brows), Y.current?.setAttribute("opacity", e3.browOpacity);
      let t3 = D.current;
      t3 && (t3.setAttribute("cx", e3.dotFront.cx), t3.setAttribute("cy", e3.dotFront.cy), t3.setAttribute("r", e3.dotFront.r), t3.setAttribute("opacity", e3.dotFront.opacity));
      let r3 = G.current;
      r3 && (r3.setAttribute("cx", e3.dotFront.cx), r3.setAttribute("cy", e3.dotFront.cy), r3.setAttribute("r", e3.dotFront.r), r3.setAttribute("opacity", e3.dotFront.on));
      let a2 = q.current;
      a2 && (a2.setAttribute("cx", e3.dotBack.cx), a2.setAttribute("cy", e3.dotBack.cy), a2.setAttribute("r", e3.dotBack.r), a2.setAttribute("opacity", e3.dotBack.opacity)), X.current?.setAttribute("transform", e3.star), X.current?.setAttribute("opacity", e3.starOpacity), K.current?.setAttribute("transform", e3.star2), K.current?.setAttribute("opacity", e3.star2Opacity), U.current?.setAttribute("x2", e3.line.x2), U.current?.setAttribute("opacity", e3.line.opacity), Z.current?.setAttribute("transform", e3.shadow);
    }, er = (0, n.useRef)(et);
    (0, n.useLayoutEffect)(() => {
      er.current = et;
    });
    let [ea, en] = (0, n.useState)(false);
    (0, n.useEffect)(() => {
      let e3 = window.matchMedia("(prefers-reduced-motion: reduce)"), t3 = () => en(e3.matches);
      return t3(), e3.addEventListener("change", t3), () => e3.removeEventListener("change", t3);
    }, []), (0, n.useLayoutEffect)(() => {
      ee.current.dirty = true;
    }, [L2]), (0, n.useEffect)(() => {
      let e3 = F2.current;
      if (!e3) return;
      let t3 = ee.current, r3 = 0, a2 = 0, n2 = true, i3 = (e4) => {
        r3 = requestAnimationFrame(i3);
        let n3 = a2 ? Math.min(e4 - a2, 50) / 1e3 : 0;
        a2 = e4, t3.clock += n3;
        let s4 = t3.clock, { geo: o4, status: l3 } = H.current;
        if (void 0 === l3 && s4 >= t3.autoAt) {
          t3.autoIndex = (t3.autoIndex + 1) % M.length;
          let [e5, r4] = M[t3.autoIndex];
          t3.autoAt = s4 + r4, I2(e5), H.current.onStatusChange?.(e5);
        }
        let c3 = l3 ?? M[t3.autoIndex][0];
        if (c3 !== t3.current.status) {
          let e5 = null !== t3.from && s4 - t3.transStart < 0.42;
          t3.from = ea ? null : e5 && t3.pose ? { kind: "snap", pose: t3.pose } : {
            kind: "live",
            status: t3.current.status,
            start: t3.current.start
          }, t3.transStart = s4, t3.current = { status: c3, start: s4 }, t3.dirty = true;
        }
        if (ea) {
          if (!t3.dirty) return;
          t3.dirty = false;
          let e5 = f(t3.current.status, {
            t: s4,
            te: 10,
            geo: o4,
            glance: [0, 0],
            still: true
          });
          t3.pose = e5, t3.gaze = [e5.gx, e5.gy], er.current(_(e5, t3.gaze, 1, o4));
          return;
        }
        s4 >= t3.glanceAt && (t3.glance = 0.35 > Math.random() ? [0, 0] : [A(-0.9, 0.9), A(-0.75, 0.55)], t3.glanceAt = s4 + A(1.1, 3.2)), s4 >= t3.blinkAt && (t3.blinkStart = s4, t3.blinkAt = s4 + (0.2 > Math.random() ? 0.3 : A(2.4, 5.2)));
        let u3 = {
          t: s4,
          te: s4 - t3.current.start,
          geo: o4,
          glance: t3.glance,
          still: false
        }, d2 = f(t3.current.status, u3);
        if (t3.from) {
          let e5 = g(j((s4 - t3.transStart) / 0.42));
          e5 >= 1 ? t3.from = null : d2 = (function(e6, t4, r4) {
            let a3 = {};
            for (let n4 in e6) a3[n4] = e6[n4] + (t4[n4] - e6[n4]) * r4;
            return a3;
          })(
            "live" === t3.from.kind ? f(t3.from.status, { ...u3, te: s4 - t3.from.start }) : t3.from.pose,
            d2,
            e5
          );
        }
        if ("error" === t3.current.status) {
          let e5, r4 = (e5 = s4 - t3.current.start - 0.06) <= 0 || e5 > 1 ? 0 : 3.2 * Math.exp(-(6 * e5)) * Math.sin(e5 * m * 5.5);
          d2 = { ...d2, bx: d2.bx + r4, brot: d2.brot + 0.5 * r4 };
        }
        t3.pose = d2;
        let y2 = t3.pointer;
        y2.weight += (!!y2.active - y2.weight) * (1 - Math.exp(-(10 * n3)));
        let h2 = y2.weight * j(d2.pointer), p3 = d2.gx + (y2.gx * o4.gazeX - d2.gx) * h2, x2 = d2.gy + (y2.gy * o4.gazeY - d2.gy) * h2, b2 = d2.gk, v3 = 2 * Math.sqrt(b2), k3 = Math.max(1, Math.ceil(n3 / (1 / 240))), w2 = n3 / k3;
        for (let e5 = 0; e5 < k3; e5++)
          t3.velocity[0] += (b2 * (p3 - t3.gaze[0]) - v3 * t3.velocity[0]) * w2, t3.velocity[1] += (b2 * (x2 - t3.gaze[1]) - v3 * t3.velocity[1]) * w2, t3.gaze[0] += t3.velocity[0] * w2, t3.gaze[1] += t3.velocity[1] * w2;
        let E2 = s4 - t3.blinkStart, $3 = 0;
        E2 >= 0 && E2 < 0.16 && ($3 = E2 < 0.06 ? Math.sin(E2 / 0.06 * Math.PI / 2) : Math.cos((E2 - 0.06) / 0.1 * Math.PI / 2));
        let R3 = 1 - $3 * j(d2.blinkable);
        er.current(_(d2, t3.gaze, R3, o4));
      }, s3 = () => {
        let e4 = n2 && !H.current.paused && "visible" === document.visibilityState;
        e4 && !r3 && (a2 = 0, r3 = requestAnimationFrame(i3)), !e4 && r3 && (cancelAnimationFrame(r3), r3 = 0);
      }, o3 = new IntersectionObserver(
        ([e4]) => {
          n2 = e4.isIntersecting, s3();
        },
        { rootMargin: "48px" }
      );
      return o3.observe(e3), document.addEventListener("visibilitychange", s3), J.current = s3, s3(), () => {
        o3.disconnect(), document.removeEventListener("visibilitychange", s3), cancelAnimationFrame(r3), r3 = 0, J.current = () => {
        };
      };
    }, [ea]), (0, n.useEffect)(() => {
      J.current();
    }, [u2]);
    let [ei, es] = (0, n.useState)(e2);
    e2 !== ei && (es(e2), void 0 !== e2 && M.some(([t3]) => t3 === e2) && I2(e2));
    let eo = (0, n.useRef)(void 0 !== e2);
    (0, n.useEffect)(() => {
      let t3 = ee.current, r3 = void 0 === e2 && eo.current;
      if (eo.current = void 0 !== e2, void 0 === e2) {
        r3 && (t3.autoAt = t3.clock + Math.min(1.2, M[t3.autoIndex][1]));
        return;
      }
      let a2 = M.findIndex(([t4]) => t4 === e2);
      a2 >= 0 && (t3.autoIndex = a2, t3.autoAt = t3.clock + M[a2][1]);
    }, [e2]);
    let el = (e3, t3) => {
      let r3 = W.current;
      if (!r3) return;
      let a2 = r3.getBoundingClientRect(), [n2, i3, s3] = H.current.geo.view.split(" ").map(Number), o3 = a2.left + (60 - n2) / s3 * a2.width, l3 = a2.top + (62 - i3) / s3 * a2.height, c3 = 0.7 * Math.max(a2.width, 40), u3 = (e3 - o3) / c3, d2 = (t3 - l3) / c3, y2 = ee.current.pointer;
      y2.gx = j(u3 / Math.sqrt(1 + u3 * u3) * 1.3, -1, 1), y2.gy = j(d2 / Math.sqrt(1 + d2 * d2) * 1.3, -1, 1), y2.active = true;
    };
    (0, n.useEffect)(() => {
      if ("page" !== o2 || ea) return;
      let e3 = ee.current.pointer, t3 = (e4) => {
        "touch" !== e4.pointerType && el(e4.clientX, e4.clientY);
      }, r3 = () => {
        e3.active = false;
      };
      return window.addEventListener("pointermove", t3, { passive: true }), document.documentElement.addEventListener("pointerleave", r3), () => {
        window.removeEventListener("pointermove", t3), document.documentElement.removeEventListener("pointerleave", r3), e3.active = false;
      };
    }, [o2, ea]);
    let ec = true === o2 && !ea, eu = v2 ?? `${p2}, ${d[T2].toLowerCase()}`, ed = {
      width: t2,
      height: t2,
      ...i2 ? { "--mascot-body": i2 } : null,
      ...s2 ? { "--mascot-eye": s2 } : null,
      ...S2
    }, ey = L2.eyeW, eh = L2.compact ? 5.4 : 4, em = L2.compact ? 4.4 : 3.2;
    return (0, a.jsxs)("span", {
      ref: F2,
      className: [w().root, R2].filter(Boolean).join(" "),
      "data-tone": i2 ? "custom" : r2,
      "data-status": T2,
      style: ed,
      onPointerMove: (e3) => {
        ec && "touch" !== e3.pointerType && el(e3.clientX, e3.clientY);
      },
      onPointerLeave: () => {
        "page" !== o2 && (ee.current.pointer.active = false);
      },
      children: [
        (0, a.jsxs)("svg", {
          ref: W,
          className: w().svg,
          viewBox: L2.view,
          width: t2,
          height: t2,
          role: "img",
          "aria-label": eu,
          focusable: "false",
          children: [
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: z2,
                children: (0, a.jsx)("path", { d: x })
              })
            }),
            N2 && (0, a.jsx)("ellipse", {
              ref: Z,
              className: w().ground,
              cx: 0,
              cy: 0,
              rx: 29,
              ry: 3.2,
              transform: Q.shadow
            }),
            N2 && l2 && (0, a.jsx)("line", {
              ref: U,
              className: w().line,
              x1: L2.x0,
              y1: L2.ly,
              x2: Q.line.x2,
              y2: L2.ly,
              strokeWidth: 2.6,
              strokeDasharray: "9 5.5 4.5 5.5 12 5.5 6 5.5 10 5.5",
              opacity: Q.line.opacity
            }),
            l2 && (0, a.jsx)("circle", {
              ref: q,
              className: w().dot,
              cx: Q.dotBack.cx,
              cy: Q.dotBack.cy,
              r: Q.dotBack.r,
              opacity: Q.dotBack.opacity
            }),
            (0, a.jsxs)("g", {
              ref: O,
              transform: Q.body,
              children: [
                (0, a.jsxs)("g", {
                  clipPath: `url(#${z2})`,
                  children: [
                    (0, a.jsx)("path", { className: w().shade, d: x }),
                    (0, a.jsx)("path", {
                      className: w().body,
                      d: x,
                      transform: "translate(-2.5 -4)"
                    })
                  ]
                }),
                "soft" === r2 && !i2 && (0, a.jsx)("path", { className: w().outline, d: x }),
                (0, a.jsxs)("g", {
                  className: w().eyes,
                  children: [
                    [0, 1].map(
                      (e3) => (0, a.jsx)(
                        "g",
                        {
                          ref: P[e3],
                          transform: Q.pill[e3],
                          children: (0, a.jsx)("line", {
                            x1: 0,
                            y1: -L2.eyeL / 2,
                            x2: 0,
                            y2: L2.eyeL / 2,
                            strokeWidth: ey
                          })
                        },
                        `pill-${e3}`
                      )
                    ),
                    [0, 1].map(
                      (e3) => (0, a.jsx)(
                        "g",
                        {
                          ref: B[e3],
                          transform: Q.arc[e3],
                          opacity: Q.arcOpacity,
                          children: (0, a.jsx)("path", {
                            d: "M-6.5 2.5Q0 -5.5 6.5 2.5",
                            strokeWidth: eh,
                            fill: "none"
                          })
                        },
                        `arc-${e3}`
                      )
                    ),
                    (0, a.jsxs)("g", {
                      ref: Y,
                      transform: Q.brows,
                      opacity: Q.browOpacity,
                      children: [
                        (0, a.jsx)("line", {
                          x1: 40.5,
                          y1: 46.5,
                          x2: 52,
                          y2: 43,
                          strokeWidth: em
                        }),
                        (0, a.jsx)("line", {
                          x1: 68,
                          y1: 43,
                          x2: 79.5,
                          y2: 46.5,
                          strokeWidth: em
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            l2 && (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("g", {
                  opacity: 1,
                  children: [
                    (0, a.jsx)("circle", {
                      ref: D,
                      className: w().dot,
                      cx: Q.dotFront.cx,
                      cy: Q.dotFront.cy,
                      r: Q.dotFront.r,
                      opacity: Q.dotFront.opacity
                    }),
                    (0, a.jsx)("circle", {
                      ref: G,
                      className: w().glint,
                      cx: Q.dotFront.cx,
                      cy: Q.dotFront.cy,
                      r: Q.dotFront.r,
                      opacity: Q.dotFront.on
                    })
                  ]
                }),
                (0, a.jsx)("path", {
                  ref: X,
                  className: w().dot,
                  d: b,
                  transform: Q.star,
                  opacity: Q.starOpacity
                }),
                !L2.compact && (0, a.jsx)("path", {
                  ref: K,
                  className: w().dot,
                  d: b,
                  transform: Q.star2,
                  opacity: Q.star2Opacity
                })
              ]
            })
          ]
        }),
        k2 && (0, a.jsx)("span", {
          className: w().srOnly,
          "aria-live": "polite",
          children: eu
        })
      ]
    });
  }
  var $ = r(66558), R = r(51288), S = r(52898), z = r(7226), L = r.n(z);
  let N = {
    idle: "Idle",
    listening: "Listening",
    thinking: "Thinking",
    writing: "Writing",
    done: "Done",
    error: "Error"
  }, C = {
    idle: "Atlas is ready when you are",
    listening: "Listening",
    thinking: "Thinking",
    writing: "Writing a reply",
    done: "Reply ready, 214 words",
    error: "Could not finish the reply"
  }, I = u.map((e2) => ({ value: e2, label: N[e2] }));
  function T() {
    let e2 = (0, i.I)(), [t2, r2] = (0, n.useState)(true), [d2, y2] = (0, n.useState)("idle"), h2 = "thinking" === d2 || "writing" === d2 || "listening" === d2;
    return (0, a.jsx)("div", {
      className: L().demo,
      children: (0, a.jsxs)("div", {
        className: L().card,
        children: [
          (0, a.jsx)("div", {
            className: L().stage,
            children: (0, a.jsx)(E, {
              status: t2 ? void 0 : d2,
              onStatusChange: y2,
              size: 148,
              name: "Atlas",
              announce: true
            })
          }),
          (0, a.jsxs)("div", {
            className: L().inline,
            children: [
              (0, a.jsx)(E, {
                status: d2,
                size: 24,
                name: "Atlas",
                followPointer: false
              }),
              (0, a.jsxs)("span", {
                className: L().line,
                children: [
                  u.map(
                    (e3) => (0, a.jsx)(
                      "span",
                      {
                        className: L().lineSizer,
                        "aria-hidden": true,
                        children: C[e3]
                      },
                      e3
                    )
                  ),
                  (0, a.jsx)(s.N, {
                    initial: false,
                    children: (0, a.jsx)(
                      o.PY1.span,
                      {
                        className: L().lineText,
                        initial: e2 ? { opacity: 0 } : { opacity: 0, y: 2 },
                        animate: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.16,
                            ease: [0.23, 1, 0.32, 1]
                          }
                        },
                        exit: {
                          opacity: 0,
                          y: 0,
                          transition: { duration: 0.1, ease: [0.4, 0, 1, 1] }
                        },
                        children: h2 ? (0, a.jsx)(S.n, { children: C[d2] }) : C[d2]
                      },
                      d2
                    )
                  })
                ]
              })
            ]
          }),
          (0, a.jsxs)("div", {
            className: L().controls,
            children: [
              (0, a.jsx)($.A, {
                options: I,
                value: d2,
                onValueChange: (e3) => {
                  r2(false), y2(e3);
                },
                label: "Mascot state"
              }),
              (0, a.jsxs)(R.$, {
                variant: "ghost",
                size: "sm",
                onClick: () => r2((e3) => !e3),
                "aria-label": t2 ? "Pause" : "Play",
                children: [
                  t2 ? (0, a.jsx)(l.A, { size: 14, "aria-hidden": true }) : (0, a.jsx)(c.A, { size: 14, "aria-hidden": true }),
                  (0, a.jsx)("span", {
                    className: L().playText,
                    children: t2 ? "Pause" : "Play"
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  let F = T;
}

__m(__module,__exports,__require);
});
A.regCss(40670, ".root{--mascot-body:var(--accent);--mascot-eye:var(--accent-foreground,var(--background));--mascot-dot:var(--mascot-body);--mascot-shade:color-mix(in oklab,var(--mascot-body) 85%,black);--mascot-ground:color-mix(in oklab,var(--foreground) 9%,transparent);position:relative;display:inline-flex;flex:none;vertical-align:middle;-webkit-tap-highlight-color:transparent}\n.root[data-tone=ink]{--mascot-body:var(--foreground);--mascot-eye:var(--background)}\n.root[data-tone=soft]{--mascot-body:var(--surface-muted);--mascot-eye:var(--foreground);--mascot-dot:var(--text-muted);--mascot-shade:color-mix(in oklab,var(--surface-muted) 90%,var(--foreground))}\n.root[data-tone=custom]{--mascot-eye:color-mix(in oklab,var(--mascot-body) 20%,black)}\n.svg{display:block;overflow:visible}\n.body{fill:var(--mascot-body)}\n.shade{fill:var(--mascot-shade)}\n.outline{fill:none;stroke:var(--border);stroke-width:1px;vector-effect:non-scaling-stroke}\n.eyes{stroke:var(--mascot-eye);stroke-linecap:round;fill:none}\n.dot{fill:var(--mascot-dot)}\n.glint{fill:var(--mascot-eye)}\n.line{stroke:var(--mascot-dot);stroke-opacity:.45;stroke-linecap:round;fill:none}\n.ground{fill:var(--mascot-ground)}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}", {"root":"root","svg":"svg","body":"body","shade":"shade","outline":"outline","eyes":"eyes","dot":"dot","glint":"glint","line":"line","ground":"ground","srOnly":"srOnly"});
A.cssFor("ai-mascot", [7226,40670]);
A.item("ai-mascot", {entry:30508, export:"AiMascotDemo", kind:"component", tier:"pro", unresolved:[]});
})();