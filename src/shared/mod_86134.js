function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { ConfirmMorphDemo: () => H, default: () => U });
  var n = r(95155), a = r(12115), i = r(18310), o = r(80642), s = r(25354), c = r(51811);
  let l = { name: "folder-closed", size: 24, node: [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z", key: "1kt360" }], ["path", { d: "M2 10h20", key: "1ir3d8" }]] };
  l.node;
  let u = (0, c.A)(l);
  var d = r(25879), p = r(92298), f = r(79196), m = r(28245), h = r(92171), y = r(7890), x = r(55809), _ = r(92571), g = r(35484), v = r(7770), j = r(82818), b = r.n(j);
  let { blur: k } = v.T, N = [...v.T.ease.enter], w = [...v.T.ease.standard], L = ({ visualDuration: e2, bounce: t2 }) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: r2 * r2, damping: 2 * (1 - t2) * r2, mass: 1 };
  }, C = L(v.T.spring.morph), E = L(v.T.spring.smooth), D = () => () => {
  }, R = { hidden: { opacity: 1 }, shown: { opacity: 1, transition: { staggerChildren: v.T.stagger.item, delayChildren: 0.05 } }, gone: { opacity: 0, filter: `blur(${k.subtle}px)`, transition: { duration: v.T.duration.instant, ease: w } } }, A = { hidden: { opacity: 0, filter: `blur(${k.soft}px)` }, shown: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.26, ease: N } } }, T = { hidden: { opacity: 0 }, shown: { opacity: 1, transition: { duration: 0.14 } }, gone: { opacity: 0, transition: { duration: 0.1 } } }, S = { hidden: { opacity: 1 }, shown: { opacity: 1 } };
  function P({ id: e2, reduced: t2, onSize: r2, children: i2, labelledBy: o2 }) {
    let c2 = (0, a.useRef)(null), l2 = (0, f.tF)();
    return (0, a.useLayoutEffect)(() => {
      let t3 = c2.current;
      if (!t3 || !l2) return;
      let n2 = () => r2(e2, t3.getBoundingClientRect().width);
      if (n2(), "u" < typeof ResizeObserver) return;
      let a2 = new ResizeObserver(n2);
      return a2.observe(t3), () => a2.disconnect();
    }, [e2, r2, l2]), (0, n.jsx)(s.PY1.div, { ref: c2, className: b().face, "data-face": e2, role: o2 ? "group" : void 0, "aria-labelledby": o2, variants: t2 ? T : R, initial: "hidden", animate: "shown", exit: "gone", inert: !l2 || void 0, children: i2 });
  }
  function M({ reduced: e2, className: t2, children: r2 }) {
    return (0, n.jsx)(s.PY1.span, { className: [b().part, t2].filter(Boolean).join(" "), variants: e2 ? S : A, children: r2 });
  }
  function W({ reduced: e2 }) {
    return (0, n.jsxs)("svg", { className: b().check, viewBox: "0 0 18 18", fill: "none", "aria-hidden": "true", children: [(0, n.jsx)(s.PY1.circle, { className: b().checkDisc, cx: "9", cy: "9", r: "8", style: { transformOrigin: "9px 9px" }, initial: !e2 && { scale: 0.5, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { scale: L(v.T.spring.snappy), opacity: { duration: 0.12 } } }), (0, n.jsx)(s.PY1.path, { className: b().checkTick, d: "M5.6 9.3 7.8 11.4 12.4 6.7", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", initial: !e2 && { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.3, ease: N, delay: 0.14 } })] });
  }
  function $({ progress: e2 }) {
    return (0, n.jsxs)("svg", { className: b().ring, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [(0, n.jsx)("circle", { className: b().ringTrack, cx: "8", cy: "8", r: "6.25", strokeWidth: "1.75" }), (0, n.jsx)(s.PY1.circle, { className: b().ringFill, cx: "8", cy: "8", r: "6.25", strokeWidth: "1.75", strokeLinecap: "round", style: { pathLength: e2, rotate: -90, transformOrigin: "8px 8px" } })] });
  }
  function z({ value: e2, reduced: t2 }) {
    return (0, n.jsx)("span", { className: b().seconds, children: (0, n.jsx)(o.N, { initial: false, mode: "popLayout", children: (0, n.jsx)(s.PY1.span, { className: b().digit, initial: t2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${k.subtle}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: t2 ? { opacity: 0 } : { opacity: 0, y: -6, filter: `blur(${k.subtle}px)` }, transition: { duration: 0.22, ease: N }, children: e2 }, e2) }) });
  }
  function I({ label: e2, icon: t2, prompt: r2, confirmLabel: c2 = "Delete", cancelLabel: l2 = "Cancel", pendingLabel: u2 = "Deleting", doneLabel: d2 = "Deleted", errorLabel: p2 = "Couldn\u2019t finish", retryLabel: f2 = "Retry", undoLabel: v2 = "Undo", undoingLabel: j2 = "Restoring", tone: k2 = "danger", confirmMode: N2 = "press", holdDuration: w2 = 1e3, countdown: L2 = 3, countdownLabel: R2, onConfirm: A2, onUndo: T2, onCancel: S2, state: O2, defaultState: Y2 = "idle", onStateChange: F2, confirmTimeout: B2 = 6e3, resultTimeout: q2 = 5e3, cancelOnOutsidePress: V2 = true, disabled: H2 = false, className: U2, ref: G }) {
    let K, X = (K = (0, a.useSyncExternalStore)(D, () => true, () => false), !!(0, i.I)() && K), Q = (0, a.useId)(), Z = `${Q}-prompt`, J = `${Q}-hold`, ee = (0, a.useRef)(null);
    (0, a.useImperativeHandle)(G, () => ee.current, []);
    let [et, er] = (0, a.useState)(Y2), en = O2 ?? et, [ea, ei] = (0, a.useState)("confirm"), [eo, es] = (0, a.useState)(false), [ec, el] = (0, a.useState)(""), eu = "confirming" === en && eo ? "counting" : en, ed = (0, a.useRef)({ state: en, onStateChange: F2, controlled: void 0 !== O2 });
    (0, a.useLayoutEffect)(() => {
      ed.current = { state: en, onStateChange: F2, controlled: void 0 !== O2 };
    });
    let ep = (0, a.useRef)(false), ef = (0, a.useRef)(0), em = (0, a.useRef)(0), eh = (0, a.useCallback)(() => {
      let e3 = ee.current;
      ep.current = !!e3 && (e3.contains(document.activeElement) || document.activeElement === document.body);
    }, []), ey = (0, a.useCallback)((e3) => {
      "confirming" !== e3 && es(false), e3 !== ed.current.state && (eh(), "confirming" === e3 && (em.current = performance.now()), ed.current.controlled || er(e3), ed.current.state = e3, ed.current.onStateChange?.(e3));
    }, [eh]), [ex, e_] = (0, a.useState)(en);
    ex !== en && (e_(en), "confirming" !== en && es(false));
    let eg = (0, a.useCallback)(() => {
      ef.current++, ey("idle");
    }, [ey]), ev = (0, a.useCallback)(async (e3) => {
      let t3, r3 = "confirm" === e3 ? A2 : T2, n2 = ++ef.current;
      ei(e3), es(false);
      try {
        t3 = r3?.();
      } catch {
        ey("error"), el(p2);
        return;
      }
      if (t3 && "function" == typeof t3.then) {
        ey("pending"), el("confirm" === e3 ? u2 : j2);
        try {
          await t3;
        } catch {
          if (n2 !== ef.current) return;
          ey("error"), el(p2);
          return;
        }
        if (n2 !== ef.current) return;
      }
      if ("undo" === e3) {
        ey("idle"), el("Undone");
        return;
      }
      ey("done"), el(T2 ? `${d2}. ${v2} is available.` : d2);
    }, [d2, p2, ey, A2, T2, u2, v2, j2]), ej = (0, a.useCallback)(() => {
      S2?.(), eg(), el("Cancelled");
    }, [S2, eg]), eb = (0, a.useRef)(() => {
    });
    (0, a.useLayoutEffect)(() => {
      eb.current = () => {
        "confirming" === ed.current.state ? ej() : eg();
      };
    });
    let ek = (0, m.d)("auto"), eN = (0, a.useRef)(0), ew = (0, a.useRef)(0), eL = (0, a.useCallback)((e3, t3) => {
      if (0.25 > Math.abs(t3 - eN.current)) return;
      let r3 = eN.current;
      if (eN.current = t3, !r3 || X) {
        ew.current++, ek.jump("auto");
        return;
      }
      let n2 = ek.get();
      "auto" === n2 && ek.jump(r3);
      let a2 = ++ew.current;
      (0, h.i)(ek, t3, t3 > ("number" == typeof n2 ? n2 : r3) ? C : E).then(() => {
        a2 === ew.current && ek.jump("auto");
      });
    }, [X, ek]), eC = (0, m.d)(1), eE = (0, a.useRef)(null), eD = (0, a.useRef)({ hover: false, hidden: false }), eR = "confirming" !== en || eo ? "done" === en || "error" === en ? q2 : 0 : B2, eA = (0, a.useCallback)(() => {
      let e3 = eE.current;
      e3 && (eD.current.hover || eD.current.hidden ? e3.pause() : e3.play());
    }, []);
    (0, a.useEffect)(() => {
      if (!eR) return;
      eC.jump(1);
      let e3 = (0, h.i)(eC, 0, { duration: eR / 1e3, ease: "linear" });
      return eE.current = e3, e3.then(() => {
        eE.current === e3 && (eE.current = null, eb.current());
      }), eA(), () => {
        eE.current === e3 && (eE.current = null), e3.stop();
      };
    }, [eC, en, eA, eR]), (0, a.useEffect)(() => {
      let e3 = () => {
        eD.current.hidden = document.hidden, eA();
      };
      return document.addEventListener("visibilitychange", e3), () => document.removeEventListener("visibilitychange", e3);
    }, [eA]);
    let eT = (0, m.d)(1), [eS, eP] = (0, a.useState)(L2), eM = (0, a.useRef)(ev);
    (0, a.useLayoutEffect)(() => {
      eM.current = ev;
    }), (0, y.L)(eT, "change", (e3) => eP(Math.max(1, Math.ceil(e3 * L2)))), (0, a.useEffect)(() => {
      if (!eo) return;
      eT.jump(1);
      let e3 = (0, h.i)(eT, 0, { duration: L2, ease: "linear" });
      return e3.then(() => {
        eM.current("confirm");
      }), () => e3.stop();
    }, [eo, L2, eT]);
    let eW = (0, m.d)(0), e$ = (0, a.useRef)(null), ez = (0, x.G)(eW, (e3) => `inset(0 ${(1 - e3) * 100}% 0 0 round 999px)`), eI = () => {
      if (e$.current) return;
      let e3 = (0, h.i)(eW, 1, { duration: w2 / 1e3 * (1 - eW.get()), ease: "linear" });
      e$.current = e3, e3.then(() => {
        e$.current === e3 && (e$.current = null, ev("confirm"));
      });
    }, eO = () => {
      let e3 = e$.current;
      e3 && (e$.current = null, e3.stop(), 1 > eW.get() && ((0, h.i)(eW, 0, X ? { duration: 0 } : { type: "spring", visualDuration: 0.3, bounce: 0 }), el(`Keep holding to ${c2.toLowerCase()}`)));
    };
    (0, a.useEffect)(() => {
      "confirming" !== en && (e$.current?.stop(), e$.current = null, eW.jump(0));
    }, [eW, en]);
    let eY = () => {
      if (!(performance.now() - em.current < 280)) {
        if ("countdown" === N2) {
          eh(), es(true), el(`${R2 ?? `${u2} in`} ${L2} seconds`);
          return;
        }
        ev("confirm");
      }
    };
    (0, a.useEffect)(() => {
      if ("confirming" !== en || !V2) return;
      let e3 = (e4) => {
        ee.current?.contains(e4.target) || ej();
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [ej, V2, en]), (0, a.useLayoutEffect)(() => {
      if (!ep.current) return;
      ep.current = false;
      let e3 = ee.current;
      if (!e3) return;
      let t3 = e3.querySelector(`[data-face="${eu}"]`);
      (t3?.querySelector("[data-autofocus]:not(:disabled)") ?? e3).focus({ preventScroll: true });
    }, [eu]);
    let eF = (e3, t3) => {
      ("Enter" === e3.key || " " === e3.key) && (e3.preventDefault(), t3 ? e3.repeat || eI() : eO());
    }, eB = r2 ?? (0, n.jsxs)(n.Fragment, { children: [e2, "?"] }), eq = R2 ?? `${u2} in`, eV = "hold" === N2 ? (0, n.jsxs)("button", { type: "button", className: b().confirm, "data-autofocus": true, "aria-describedby": J, onPointerDown: (e3) => {
      0 === e3.button && (e3.currentTarget.setPointerCapture?.(e3.pointerId), eI());
    }, onPointerUp: eO, onPointerCancel: eO, onLostPointerCapture: eO, onKeyDown: (e3) => eF(e3, true), onKeyUp: (e3) => eF(e3, false), onBlur: eO, onContextMenu: (e3) => e3.preventDefault(), children: [(0, n.jsx)("span", { children: c2 }), (0, n.jsx)(s.PY1.span, { className: b().fill, style: { clipPath: ez }, "aria-hidden": "true", children: (0, n.jsx)("span", { children: c2 }) })] }) : (0, n.jsx)("button", { type: "button", className: b().confirm, "data-autofocus": true, onClick: eY, onKeyDown: (e3) => {
      e3.repeat && e3.preventDefault();
    }, children: c2 }), eH = (() => {
      switch (eu) {
        case "confirming":
          return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(M, { reduced: X, className: b().prompt, children: (0, n.jsx)("span", { id: Z, children: eB }) }), (0, n.jsx)(M, { reduced: X, children: (0, n.jsx)("button", { type: "button", className: b().secondary, onClick: ej, children: l2 }) }), (0, n.jsx)(M, { reduced: X, children: eV }), "hold" === N2 && (0, n.jsx)("span", { id: J, className: b().srOnly, children: "Press and hold" })] });
        case "counting":
          return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsxs)(M, { reduced: X, className: b().status, children: [(0, n.jsx)($, { progress: eT }), (0, n.jsxs)("span", { className: b().statusText, children: [eq, " ", (0, n.jsx)(z, { value: eS, reduced: X })] })] }), (0, n.jsx)(M, { reduced: X, children: (0, n.jsx)("button", { type: "button", className: b().secondary, onClick: ej, children: l2 }) })] });
        case "pending":
          return (0, n.jsxs)(M, { reduced: X, className: b().status, children: [(0, n.jsx)(_.A, { className: b().spinner, size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), (0, n.jsx)("span", { className: b().statusText, children: "undo" === ea ? j2 : u2 })] });
        case "done":
          return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsxs)(M, { reduced: X, className: b().status, children: [(0, n.jsx)(W, { reduced: X }), (0, n.jsx)("span", { className: b().statusText, children: d2 })] }), T2 && (0, n.jsx)(M, { reduced: X, children: (0, n.jsx)("button", { type: "button", className: b().secondary, "data-autofocus": true, onClick: () => void ev("undo"), children: v2 }) })] });
        case "error":
          return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsxs)(M, { reduced: X, className: b().status, children: [(0, n.jsx)(g.A, { className: b().alert, size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), (0, n.jsx)("span", { className: b().statusText, children: p2 })] }), (0, n.jsx)(M, { reduced: X, children: (0, n.jsx)("button", { type: "button", className: b().secondary, "data-autofocus": true, onClick: () => void ev(ea), children: f2 }) })] });
        default:
          return (0, n.jsx)(M, { reduced: X, children: (0, n.jsxs)("button", { type: "button", className: b().trigger, "data-autofocus": true, disabled: H2, onClick: () => {
            el("string" == typeof eB ? eB : ""), ey("confirming");
          }, children: [t2 && (0, n.jsx)("span", { className: b().icon, "aria-hidden": "true", children: t2 }), (0, n.jsx)("span", { children: e2 })] }) });
      }
    })();
    return (0, n.jsxs)("div", { ref: ee, className: [b().root, U2].filter(Boolean).join(" "), "data-state": en, "data-face": eu, "data-tone": k2, "data-mode": N2, "data-disabled": H2 || void 0, tabIndex: -1, onKeyDown: (e3) => {
      "Escape" === e3.key ? "confirming" === en ? (e3.preventDefault(), e3.stopPropagation(), ej()) : ("done" === en || "error" === en) && (e3.preventDefault(), e3.stopPropagation(), eg()) : "Enter" !== e3.key || "confirming" !== en || e3.repeat || e3.target instanceof HTMLButtonElement || (e3.preventDefault(), eo ? ev("confirm") : "hold" !== N2 && eY());
    }, "aria-busy": "pending" === en || void 0, onPointerEnter: () => {
      eD.current.hover = true, eA();
    }, onPointerLeave: () => {
      eD.current.hover = false, eA();
    }, onPointerCancel: () => {
      eD.current.hover = false, eA();
    }, children: [(0, n.jsx)(s.PY1.div, { className: b().surface, style: { width: ek }, children: (0, n.jsx)(o.N, { initial: false, children: (0, n.jsx)(P, { id: eu, reduced: X, onSize: eL, labelledBy: "confirming" === eu ? Z : void 0, children: eH }, eu) }) }), (0, n.jsx)("span", { className: b().srOnly, role: "status", "aria-live": "polite", children: ec })] });
  }
  var O = r(66558), Y = r(83023), F = r.n(Y);
  let B = [{ value: "press", label: "Click" }, { value: "hold", label: "Hold" }, { value: "countdown", label: "Countdown" }], q = [{ value: "succeed", label: "Succeeds" }, { value: "fail", label: "Fails" }], V = (e2) => new Promise((t2) => window.setTimeout(t2, e2));
  function H() {
    let e2 = (0, i.I)(), [t2, r2] = (0, a.useState)(true), [c2, l2] = (0, a.useState)("press"), [f2, m2] = (0, a.useState)("succeed"), h2 = async () => {
      if (await V(900), "fail" === f2) throw Error("Simulated failure");
      r2(false);
    }, y2 = async () => {
      await V(500), r2(true);
    }, x2 = e2 ? { opacity: 0 } : { opacity: 0, filter: `blur(${v.T.blur.subtle}px)` }, _2 = { duration: v.T.duration.fast, ease: [...v.T.ease.standard] };
    return (0, n.jsxs)("div", { className: F().demo, children: [(0, n.jsx)("div", { className: F().stage, children: (0, n.jsxs)("div", { className: F().row, children: [(0, n.jsx)("div", { className: F().slot, children: (0, n.jsx)(o.N, { initial: false, mode: "popLayout", children: t2 ? (0, n.jsxs)(s.PY1.span, { className: F().project, initial: x2, animate: { opacity: 1, filter: "blur(0px)" }, exit: x2, transition: _2, children: [(0, n.jsx)(u, { size: 16, strokeWidth: 1.75, "aria-hidden": "true", className: F().icon }), (0, n.jsx)("span", { className: F().name, children: "Northwind redesign" })] }, "project") : (0, n.jsx)(s.PY1.span, { className: F().empty, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: _2, children: "No projects" }, "empty") }) }), (0, n.jsx)(I, { label: "Delete project", icon: (0, n.jsx)(d.A, { strokeWidth: 1.75 }), disabled: !t2, prompt: "Delete project?", confirmLabel: "Delete", pendingLabel: "Deleting", countdownLabel: "Deleting in", doneLabel: "Deleted", errorLabel: "Couldn\u2019t delete", confirmMode: c2, onConfirm: h2, onUndo: y2 })] }) }), (0, n.jsxs)("div", { className: F().controls, children: [(0, n.jsx)(O.A, { label: "Confirm with", options: B, value: c2, onValueChange: (e3) => l2(e3) }), (0, n.jsx)(O.A, { label: "Delete outcome", options: q, value: f2, onValueChange: m2 }), !t2 && (0, n.jsxs)("button", { type: "button", className: F().reset, onClick: () => r2(true), children: [(0, n.jsx)(p.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), "Restore"] })] })] });
  }
  let U = H;
}

__m(__module,__exports,__require);
}