/* hold-to-confirm (free component, cross-ref module 33983, closure 150) */
(function(){var A=globalThis.__ARC__;
A.reg(70614, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { j: () => C });
  var a = i(95155), r = i(12115), n = i(25354), s = i(80642), o = i(28245), l = i(92171), c = i(18310), d = i(55809), u = i(25879), p = i(7770), h = i(88542), A = i.n(h);
  let m = [...p.T.ease.enter], f = [...p.T.ease.standard], y = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, _ = { opacity: 0, y: "0.3em", filter: `blur(${p.T.blur.soft}px)` }, x = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${p.T.blur.subtle}px)`,
    transition: { duration: p.T.duration.fast, ease: f }
  }, g = { opacity: 0, scale: 0.6, filter: `blur(${p.T.blur.subtle}px)` }, b = { ...g, transition: { duration: p.T.duration.fast, ease: f } }, j = { opacity: 0 }, v = { opacity: 0, transition: { duration: p.T.duration.instant } }, k = {
    ...p.T.spring.snappy,
    opacity: { duration: p.T.duration.fast, ease: m },
    filter: { duration: p.T.duration.fast, ease: m }
  };
  function w({ reduced: e2 }) {
    return (0, a.jsx)("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, a.jsx)(n.PY1.path, {
        d: "M4 12.5l5 5L20 6.5",
        initial: !e2 && { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: {
          pathLength: { duration: 0.32, ease: m, delay: 0.08 },
          opacity: { duration: 0.05, delay: 0.08 }
        }
      })
    });
  }
  function N({ icon: e2, text: t2, done: i2, width: r2, reduced: o2, measure: l2 }) {
    return (0, a.jsxs)("span", {
      className: A().face,
      children: [
        (0, a.jsx)("span", {
          className: A().iconSlot,
          children: (0, a.jsx)(s.N, {
            initial: false,
            children: (0, a.jsx)(
              n.PY1.span,
              {
                className: A().iconPhase,
                initial: o2 ? j : g,
                animate: y,
                exit: o2 ? v : b,
                transition: o2 ? { duration: p.T.duration.fast } : k,
                children: i2 ? (0, a.jsx)(w, { reduced: o2 }) : e2
              },
              i2 ? "done" : "idle"
            )
          })
        }),
        (0, a.jsxs)(n.PY1.span, {
          className: A().labelFrame,
          style: { width: r2 },
          children: [
            l2 && (0, a.jsx)("span", {
              ref: l2,
              className: A().measure,
              children: t2
            }),
            (0, a.jsx)(s.N, {
              mode: "popLayout",
              initial: false,
              children: (0, a.jsx)(
                n.PY1.span,
                {
                  className: A().label,
                  initial: o2 ? j : _,
                  animate: y,
                  exit: o2 ? v : x,
                  transition: {
                    duration: o2 ? p.T.duration.fast : p.T.duration.standard,
                    ease: m
                  },
                  children: t2
                },
                t2
              )
            })
          ]
        })
      ]
    });
  }
  function C({
    label: e2,
    confirmedLabel: t2 = "Done",
    onConfirm: i2,
    duration: s2 = 1200,
    icon: h2 = (0, a.jsx)(u.A, { strokeWidth: 1.75 }),
    tone: m2 = "accent",
    confirmed: f2,
    onHoldChange: y2,
    className: _2,
    disabled: x2,
    ...g2
  }) {
    let b2 = (0, c.I)() ?? false, j2 = (0, r.useId)(), [v2, k2] = (0, r.useState)(false), [w2, T] = (0, r.useState)(0), P = f2 ?? v2, [I, E] = (0, r.useState)(false), M = (0, o.d)(0), B = (0, o.d)(1), R = (0, d.G)(
      M,
      (e3) => `inset(0 ${((1 - Math.min(1, Math.max(0, e3))) * 100).toFixed(3)}% 0 0)`
    ), [F, S] = (function(e3) {
      let t3 = (0, o.d)("auto"), [i3, a2] = (0, r.useState)(null);
      return (0, r.useEffect)(() => {
        if (!i3 || "u" < typeof ResizeObserver) return;
        let a3 = null, r2 = null, n2 = new ResizeObserver(([n3]) => {
          let s3 = n3?.borderBoxSize?.[0]?.inlineSize ?? i3.offsetWidth, o2 = i3.textContent, c2 = null !== a3 && a3 !== o2 && !e3 && "number" == typeof t3.get();
          a3 = o2, r2?.stop(), c2 ? r2 = (0, l.i)(t3, s3, p.T.spring.morph) : t3.jump(s3);
        });
        return n2.observe(i3), () => {
          n2.disconnect(), r2?.stop();
        };
      }, [i3, e3, t3]), [t3, a2];
    })(b2), D = (0, r.useRef)(null), Y = (0, r.useRef)("mouse"), Q = (0, r.useRef)(null), L = (0, r.useRef)(null), $ = (0, r.useRef)(null), O = P ? t2 : e2, z = (s2 / 1e3).toLocaleString("en-US", { maximumFractionDigits: 1 });
    function H(e3) {
      if (L.current?.stop(), b2) return void B.jump(1);
      let t3 = ($.current?.offsetWidth ?? 0) > 220 ? 0.985 : 0.97;
      L.current = (0, l.i)(B, e3 ? t3 : 1, p.T.spring.snappy);
    }
    function U() {
      Q.current?.stop(), b2 ? M.jump(0) : Q.current = (0, l.i)(M, 0, {
        ...p.T.spring.smooth,
        velocity: 0
      });
    }
    function W() {
      D.current = null, E(false), y2?.(false), H(false);
    }
    function G() {
      D.current && (W(), "touch" === Y.current && navigator.vibrate?.(12), k2(true), T((e3) => e3 + 1), i2());
    }
    function V(e3) {
      P || x2 || D.current || (D.current = e3, E(true), y2?.(true), H(true), Q.current?.stop(), Q.current = (0, l.i)(M, 1, {
        duration: (1 - M.get()) * s2 / 1e3,
        ease: "linear",
        onComplete: G
      }));
    }
    function q() {
      D.current && (W(), U());
    }
    let X = (0, r.useEffectEvent)(() => {
      P && 1 > M.get() && !D.current && (Q.current?.stop(), b2 ? M.jump(1) : Q.current = (0, l.i)(M, 1, p.T.spring.smooth)), !P && M.get() > 0 && !D.current && U();
    });
    return (0, r.useEffect)(() => {
      X();
    }, [P, w2]), (0, r.useEffect)(
      () => () => {
        Q.current?.stop(), L.current?.stop();
      },
      []
    ), (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsxs)(n.PY1.button, {
          ...g2,
          ref: $,
          type: "button",
          className: [A().button, _2].filter(Boolean).join(" "),
          "data-tone": m2,
          "data-state": P ? "done" : I ? "holding" : "idle",
          disabled: x2,
          "aria-disabled": P || void 0,
          "aria-label": O,
          "aria-describedby": P ? void 0 : j2,
          style: { scale: B },
          onPointerDown: function(e3) {
            e3.isPrimary && 0 === e3.button && (Y.current = e3.pointerType, e3.currentTarget.setPointerCapture(e3.pointerId), V("pointer"));
          },
          onPointerMove: function(e3) {
            if ("pointer" !== D.current) return;
            let t3 = e3.currentTarget.getBoundingClientRect();
            (e3.clientX < t3.left - 24 || e3.clientX > t3.right + 24 || e3.clientY < t3.top - 24 || e3.clientY > t3.bottom + 24) && q();
          },
          onPointerUp: q,
          onPointerCancel: q,
          onLostPointerCapture: q,
          onKeyDown: function(e3) {
            (" " === e3.key || "Enter" === e3.key) && (e3.preventDefault(), e3.repeat || V("key"));
          },
          onKeyUp: function(e3) {
            (" " === e3.key || "Enter" === e3.key) && (e3.preventDefault(), "key" === D.current && q());
          },
          onBlur: q,
          onContextMenu: (e3) => e3.preventDefault(),
          children: [
            (0, a.jsx)(N, {
              icon: h2,
              text: O,
              done: P,
              width: F,
              reduced: b2,
              measure: S
            }),
            (0, a.jsx)(n.PY1.span, {
              className: A().fill,
              style: { clipPath: R },
              "aria-hidden": "true",
              children: (0, a.jsx)(N, {
                icon: h2,
                text: O,
                done: P,
                width: F,
                reduced: b2
              })
            })
          ]
        }),
        (0, a.jsx)("span", {
          id: j2,
          className: A().srOnly,
          children: `Press and hold for ${z} seconds to confirm. With a keyboard, hold Space or Enter.`
        }),
        (0, a.jsx)("span", {
          className: A().srOnly,
          role: "status",
          children: P ? t2 : ""
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(88542, ".button{--hold-ink:var(--foreground);--hold-fill:var(--accent);--hold-on-fill:var(--accent-foreground);--hold-border:var(--border-strong);position:relative;display:inline-flex;min-height:var(--control-height-md);align-items:center;justify-content:center;padding:0 var(--space-5);border:1px solid var(--hold-border);border-radius:var(--radius-control);background:var(--surface);color:var(--hold-ink);font:inherit;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);cursor:pointer;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.button[data-tone=danger]{--hold-ink:var(--danger);--hold-fill:var(--danger);--hold-on-fill:var(--background);--hold-border:color-mix(in oklab,var(--danger) 32%,var(--border))}\n.button[data-tone=neutral]{--hold-ink:var(--foreground);--hold-fill:var(--foreground);--hold-on-fill:var(--background);--hold-border:var(--border-strong)}\n@media (hover:hover) and (pointer:fine){.button:not(:disabled):not([aria-disabled=true]):hover{background:color-mix(in oklab,var(--hold-fill) 6%,var(--surface))}\n.button[aria-disabled=true]{cursor:default}\n.button:disabled{cursor:not-allowed;opacity:.5}\n@media (prefers-reduced-motion:reduce){.button{transition:none}\n.face{display:inline-flex;align-items:center;gap:var(--space-2);white-space:nowrap}\n.fill{position:absolute;inset:-1px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-control);background:var(--hold-fill);color:var(--hold-on-fill);pointer-events:none}\n.iconSlot{display:grid;width:18px;height:18px;flex:none;place-items:center}\n.iconPhase{display:grid;grid-area:1/1;place-items:center}\n.iconPhase svg{width:18px;height:18px}\n.labelFrame{position:relative;display:inline-flex;min-width:0;clip-path:inset(-.6em -3px)}\n.label{display:block;white-space:nowrap}\n.measure{position:absolute;top:0;left:0;visibility:hidden;white-space:nowrap;pointer-events:none}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}", {"button":"button","face":"face","fill":"fill","iconSlot":"iconSlot","iconPhase":"iconPhase","labelFrame":"labelFrame","label":"label","measure":"measure","srOnly":"srOnly"});
A.cssFor("hold-to-confirm", [88542]);
A.item("hold-to-confirm", {entry:33983, export:"HoldToConfirmDemo", kind:"component", tier:"free", unresolved:[], xref:true});
})();