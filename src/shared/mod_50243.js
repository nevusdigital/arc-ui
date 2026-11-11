function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { FloatingButtonGroupDemo: () => $, default: () => J });
  var n = i(95155), a = i(12115), r = i(15330), o = i(60976), s = i(24551), l = i(64577), d = i(51128), u = i(40852), c = i(36619), p = i(99314), h = i(62700), y = i(32159), m = i(25879), f = i(55766), x = i(89959), g = i(18938), b = i(5736), v = i(89034), _ = i(25182), j = i(40623), k = i(79196), A = i(25354), w = i(80642), S = i(18310), z = i(28245), T = i(92171), M = i(7770), N = i(36690), C = i(78962), E = i.n(C);
  let O = (e2) => "separator" !== e2.type, P = [...M.T.ease.standard], D = [...M.T.ease.enter], L = { opacity: 1, y: 0, filter: "blur(0px)" }, R = { opacity: 0, y: 4, filter: `blur(${M.T.blur.soft}px)` }, Z = { opacity: 0, y: -3, filter: `blur(${M.T.blur.soft}px)`, transition: { duration: M.T.duration.fast, ease: P } }, H = { opacity: 0 }, F = { opacity: 0, transition: { duration: M.T.duration.instant } };
  function V({ children: e2, reduced: t2 }) {
    let i2 = (0, k.tF)();
    return (0, n.jsx)(A.PY1.span, { className: E().phase, "aria-hidden": !i2 || void 0, initial: t2 ? H : R, animate: L, exit: t2 ? F : Z, transition: { duration: t2 ? M.T.duration.instant : M.T.duration.standard, ease: D }, children: e2 });
  }
  function q({ label: e2, icon: t2, iconOnly: i2, reserve: a2, reduced: r2 }) {
    let o2 = i2 ? [] : Array.from(/* @__PURE__ */ new Set([e2, ...a2]));
    return (0, n.jsxs)("span", { className: E().slot, children: [o2.map((e3) => (0, n.jsxs)("span", { className: E().ghost, "aria-hidden": "true", children: [t2 ? (0, n.jsx)("span", { className: E().iconSpace }) : null, (0, n.jsx)("span", { className: E().text, children: e3 })] }, e3)), (0, n.jsx)(w.N, { initial: false, children: (0, n.jsxs)(V, { reduced: r2, children: [t2 ? (0, n.jsx)("span", { className: E().icon, "aria-hidden": "true", children: t2 }) : null, i2 ? null : (0, n.jsx)("span", { className: E().text, children: e2 })] }, e2) })] });
  }
  function U({ label: e2, shortcut: t2 }) {
    return (0, n.jsxs)("span", { className: E().tip, children: [e2, t2 ? (0, n.jsx)("kbd", { className: E().kbd, children: t2 }) : null] });
  }
  function I({ side: e2, content: t2, children: i2 }) {
    return (0, n.jsxs)(j.bL, { children: [(0, n.jsx)(j.l9, { asChild: true, children: i2 }), (0, n.jsx)(j.ZL, { children: (0, n.jsx)(j.UC, { className: E().sideTip, side: e2, sideOffset: 10, collisionPadding: 12, children: t2 }) })] });
  }
  function B({ items: e2, label: t2, variant: i2 = "muted", size: r2 = "md", orientation: o2 = "horizontal", iconOnly: s2 = false, tooltipSide: l2, onAction: d2, className: u2, style: c2 }) {
    let p2 = (0, S.I)() ?? false, h2 = (0, a.useRef)(null), y2 = (0, a.useRef)(/* @__PURE__ */ new Map()), [m2, f2] = (0, a.useState)(null), [x2, g2] = (0, a.useState)(null), [b2, v2] = (0, a.useState)(false), [_2, k2] = (0, a.useState)(null), w2 = e2.filter(O), C2 = new Map(w2.map((e3) => [e3.id, e3])), D2 = (e3) => !!e3 && !!C2.get(e3) && !C2.get(e3)?.disabled, L2 = D2(m2) ? m2 : x2 && C2.has(x2) ? x2 : null, R2 = D2(_2) ? _2 : w2.find((e3) => !e3.disabled)?.id ?? null, Z2 = "vertical" === o2, H2 = l2 ?? (Z2 ? "right" : "top"), F2 = w2.map((e3) => e3.id).join("\0"), V2 = (0, z.d)(0), K2 = (0, z.d)(0), Y2 = (0, z.d)(0), Q2 = (0, z.d)(0), $2 = (0, z.d)(0), J2 = (0, z.d)(1), G = (0, a.useRef)(false), W = (0, a.useRef)(L2), X = (0, a.useRef)(b2), ee = (0, a.useCallback)((e3) => {
      let t3 = h2.current;
      if (!t3) return null;
      let i3 = t3.getBoundingClientRect(), n2 = e3.getBoundingClientRect(), a2 = i3.width ? t3.offsetWidth / i3.width : 1, r3 = window.devicePixelRatio || 1, o3 = (e4) => Math.round(e4 * a2 * r3) / r3;
      return { x: o3(n2.left - i3.left) - t3.clientLeft, y: o3(n2.top - i3.top) - t3.clientTop, width: o3(n2.width), height: o3(n2.height) };
    }, []), et = (0, a.useCallback)((e3, t3) => {
      let i3 = e3 ? y2.current.get(e3) : void 0;
      if (!i3) return void (0, T.i)($2, 0, { duration: p2 ? M.T.duration.instant : M.T.duration.standard, ease: P });
      let n2 = ee(i3);
      if (!n2) return;
      let a2 = $2.get() > 0.15;
      !p2 && a2 && ("move" === t3 || G.current) ? (G.current = true, (0, T.i)(V2, n2.x, M.T.spring.morph), (0, T.i)(K2, n2.y, M.T.spring.morph), (0, T.i)(Y2, n2.width, M.T.spring.morph), (0, T.i)(Q2, n2.height, { ...M.T.spring.morph, onComplete: () => {
        G.current = false;
      } })) : (G.current = false, V2.jump(n2.x), K2.jump(n2.y), Y2.jump(n2.width), Q2.jump(n2.height), a2 || p2 || (J2.jump(0.94), (0, T.i)(J2, X.current ? 0.965 : 1, M.T.spring.snappy))), 1 !== $2.get() && (0, T.i)($2, 1, { duration: p2 ? M.T.duration.instant : M.T.duration.fast, ease: P });
    }, [Q2, ee, $2, p2, J2, Y2, V2, K2]);
    (0, a.useLayoutEffect)(() => {
      W.current = L2, et(L2, "move");
    }, [L2, et]), (0, a.useEffect)(() => {
      X.current = b2, (0, T.i)(J2, b2 && L2 ? 0.965 : 1, p2 ? { duration: 0 } : M.T.spring.snappy);
    }, [L2, b2, p2, J2]), (0, a.useEffect)(() => {
      let e3 = h2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        W.current && et(W.current, "follow");
      });
      return t3.observe(e3), y2.current.forEach((e4) => t3.observe(e4)), () => t3.disconnect();
    }, [F2, et]), (0, a.useEffect)(() => {
      let e3 = h2.current;
      if (!e3) return;
      let t3 = () => {
        f2(null), v2(false);
      };
      return e3.addEventListener("pointerleave", t3), () => e3.removeEventListener("pointerleave", t3);
    }, []);
    let ei = [E().group, E()[i2], E()[r2], Z2 ? E().vertical : "", u2].filter(Boolean).join(" "), en = (0, n.jsxs)("div", { ref: h2, className: ei, style: c2, role: "toolbar", "aria-label": t2, "aria-orientation": o2, "data-variant": i2, onKeyDown: (e3) => {
      let t3, i3 = Array.from(h2.current?.querySelectorAll("[data-fbg-item]") ?? []), n2 = i3.findIndex((e4) => e4 === document.activeElement);
      if (n2 < 0) return;
      let a2 = Z2 ? "ArrowDown" : "ArrowRight", r3 = (e4) => "true" !== e4.getAttribute("aria-disabled");
      if ("Home" === e3.key) t3 = i3.find(r3);
      else if ("End" === e3.key) t3 = [...i3].reverse().find(r3);
      else {
        if (e3.key !== a2 && e3.key !== (Z2 ? "ArrowUp" : "ArrowLeft")) return;
        let o3 = e3.key === a2 ? 1 : -1;
        for (let e4 = 1; e4 <= i3.length; e4 += 1) {
          let a3 = i3[(n2 + o3 * e4 + i3.length * e4) % i3.length];
          if (r3(a3)) {
            t3 = a3;
            break;
          }
        }
      }
      e3.preventDefault(), t3 && (f2(null), t3.focus());
    }, onBlur: (e3) => {
      h2.current?.contains(e3.relatedTarget) || (g2(null), v2(false));
    }, children: [(0, n.jsx)(A.PY1.span, { className: E().highlight, "data-pressing": b2 && L2 ? "" : void 0, style: { x: V2, y: K2, width: Y2, height: Q2, opacity: $2, scale: J2 }, "aria-hidden": "true" }), e2.map((e3, t3) => {
      if (!O(e3)) return (0, n.jsx)("span", { className: E().separator, role: "separator", "aria-orientation": Z2 ? "horizontal" : "vertical" }, e3.id ?? `separator-${t3}`);
      let { id: i3, label: r3, icon: o3, onSelect: l3, disabled: u3 = false, pressed: c3, shortcut: h3, reserveLabels: m3 = [] } = e3, x3 = !!o3 && (e3.iconOnly ?? s2), b3 = (0, n.jsx)("button", { ref: (e4) => {
        e4 ? y2.current.set(i3, e4) : y2.current.delete(i3);
      }, type: "button", className: E().item, "data-fbg-item": "", "data-active": L2 === i3 ? "" : void 0, "data-icon": o3 ? "" : void 0, "data-icon-only": x3 ? "" : void 0, "aria-label": r3, "aria-pressed": void 0 === c3 ? void 0 : c3, "aria-disabled": u3 || void 0, tabIndex: R2 === i3 ? 0 : -1, onPointerMove: (e4) => {
        ("mouse" === e4.pointerType || "pen" === e4.pointerType) && f2(i3);
      }, onPointerDown: (e4) => {
        u3 || 0 !== e4.button || (f2(i3), v2(true));
      }, onPointerUp: () => v2(false), onPointerCancel: () => v2(false), onPointerLeave: () => v2(false), onKeyDown: (e4) => {
        "Enter" !== e4.key && " " !== e4.key || e4.repeat || u3 || v2(true);
      }, onKeyUp: (e4) => {
        ("Enter" === e4.key || " " === e4.key) && v2(false);
      }, onFocus: (e4) => {
        k2(i3);
        let t4 = false;
        try {
          t4 = e4.currentTarget.matches(":focus-visible");
        } catch {
          t4 = false;
        }
        g2(t4 ? i3 : null);
      }, onClick: () => {
        u3 || (l3?.(), d2?.(i3));
      }, children: (0, n.jsx)(q, { label: r3, icon: o3, iconOnly: x3, reserve: m3, reduced: p2 }) });
      if (!x3 && !h3) return (0, n.jsx)(a.Fragment, { children: b3 }, i3);
      let _3 = (0, n.jsx)(U, { label: r3, shortcut: h3 });
      return "top" === H2 || "bottom" === H2 ? (0, n.jsx)(N.m, { side: H2, content: _3, children: b3 }, i3) : (0, n.jsx)(I, { side: H2, content: _3, children: b3 }, i3);
    })] });
    return "left" === H2 || "right" === H2 ? (0, n.jsx)(j.Kq, { delayDuration: 250, skipDelayDuration: 300, disableHoverableContent: true, children: en }) : en;
  }
  var K = i(44222), Y = i.n(K);
  function Q(e2 = 1600) {
    let [t2, i2] = (0, a.useState)(false), n2 = (0, a.useRef)(0);
    return (0, a.useEffect)(() => () => window.clearTimeout(n2.current), []), [t2, () => {
      window.clearTimeout(n2.current), i2(true), n2.current = window.setTimeout(() => i2(false), e2);
    }];
  }
  function $() {
    let [e2, t2] = (0, a.useState)(3), [i2, j2] = (0, a.useState)(0), [k2, A2] = (0, a.useState)(false), [w2, S2] = Q(), [z2, T2] = (0, a.useState)(false), M2 = [{ id: "undo", label: "Undo", icon: (0, n.jsx)(r.A, {}), iconOnly: true, shortcut: "\u2318Z", disabled: !e2, onSelect: () => {
      t2(e2 - 1), j2(i2 + 1);
    } }, { id: "redo", label: "Redo", icon: (0, n.jsx)(o.A, {}), iconOnly: true, shortcut: "\u21E7\u2318Z", disabled: !i2, onSelect: () => {
      j2(i2 - 1), t2(e2 + 1);
    } }, { type: "separator" }, { id: "comment", label: "Comment", icon: (0, n.jsx)(s.A, {}), iconOnly: true, shortcut: "C", pressed: k2, onSelect: () => A2(!k2) }, { id: "share", label: w2 ? "Copied" : "Share", reserveLabels: ["Share", "Copied"], icon: w2 ? (0, n.jsx)(l.A, {}) : (0, n.jsx)(d.A, {}), onSelect: S2 }, { type: "separator" }, { id: "present", label: z2 ? "Stop" : "Present", reserveLabels: ["Present", "Stop"], icon: z2 ? (0, n.jsx)(u.A, {}) : (0, n.jsx)(c.A, {}), pressed: z2, onSelect: () => T2(!z2) }], [N2, C2] = Q(), [E2, O2] = Q(), [P2, D2] = (0, a.useState)(false), L2 = [{ id: "copy", label: N2 ? "Copied" : "Copy text", icon: N2 ? (0, n.jsx)(l.A, {}) : (0, n.jsx)(p.A, {}) }, { id: "pin", label: "Pin message", icon: (0, n.jsx)(h.A, {}), pressed: P2 }, { id: "archive", label: E2 ? "Archived" : "Archive", icon: E2 ? (0, n.jsx)(l.A, {}) : (0, n.jsx)(y.A, {}) }, { type: "separator" }, { id: "delete", label: "Delete", icon: (0, n.jsx)(m.A, {}), disabled: true }], [R2, Z2] = (0, a.useState)(2), [H2, F2] = (0, a.useState)(false), [V2, q2] = (0, a.useState)(false), U2 = [{ id: "zoom-in", label: "Zoom in", icon: (0, n.jsx)(f.A, {}), disabled: 4 === R2, onSelect: () => Z2(R2 + 1) }, { id: "zoom-out", label: "Zoom out", icon: (0, n.jsx)(x.A, {}), disabled: 0 === R2, onSelect: () => Z2(R2 - 1) }, { id: "fit", label: "Zoom to fit", icon: (0, n.jsx)(g.A, {}), disabled: 2 === R2, onSelect: () => Z2(2) }, { type: "separator" }, { id: "lock", label: "Lock layer", icon: (0, n.jsx)(b.A, {}), pressed: H2, onSelect: () => F2(!H2) }, { id: "hide", label: "Hide layer", icon: V2 ? (0, n.jsx)(v.A, {}) : (0, n.jsx)(_.A, {}), pressed: V2, onSelect: () => q2(!V2) }];
    return (0, n.jsxs)("div", { className: Y().demo, children: [(0, n.jsx)("div", { className: Y().wide, children: (0, n.jsx)(B, { label: "Editor actions", items: M2 }) }), (0, n.jsx)("div", { className: Y().compact, children: (0, n.jsx)(B, { label: "Editor actions", iconOnly: true, items: M2 }) }), (0, n.jsxs)("div", { className: Y().row, children: [(0, n.jsx)(B, { label: "Canvas tools", orientation: "vertical", iconOnly: true, items: U2 }), (0, n.jsx)(B, { label: "Message actions", variant: "floating", size: "sm", iconOnly: true, tooltipSide: "bottom", items: L2, onAction: (e3) => {
      "copy" === e3 && C2(), "pin" === e3 && D2(!P2), "archive" === e3 && O2();
    } })] })] });
  }
  let J = $;
}

__m(__module,__exports,__require);
}