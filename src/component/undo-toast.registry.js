/* undo-toast (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(13304, ".undo-toast_root__yVqgX{position:relative;display:grid;min-width:0;align-content:start;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);-webkit-tap-highlight-color:transparent}.undo-toast_list__NLRiw{display:grid;min-width:0;margin:0;padding:0;list-style:none}.undo-toast_row__f80q_{position:relative;min-width:0;overflow:clip}.undo-toast_rowInner__PFsi8{position:relative;min-width:0;transform-origin:50% 50%;will-change:transform,opacity}.undo-toast_flash__vFfYS{position:absolute;inset:1px 0;border-radius:14px;background:color-mix(in oklab,var(--accent) 11%,transparent);opacity:0;pointer-events:none;animation:undo-toast_undo-toast-flash__9bZ3B 1.8s var(--ease-standard) .12s both}@keyframes undo-toast_undo-toast-flash__9bZ3B{0%{opacity:0}18%{opacity:1}to{opacity:0}}.undo-toast_empty__t0c7V{display:grid;min-width:0}.undo-toast_toastLayer__53oM3{position:absolute;z-index:3;right:0;bottom:12px;left:0;display:flex;justify-content:center;padding-inline:12px;pointer-events:none;container-type:inline-size}.undo-toast_toastLayer__53oM3[data-placement=viewport]{position:fixed;z-index:60;bottom:max(20px,env(safe-area-inset-bottom))}.undo-toast_toastShell__KVnNA{width:min(100%,372px);pointer-events:auto;transform-origin:50% 100%;will-change:transform,opacity}.undo-toast_toast__H1u25{position:relative;display:flex;min-height:54px;align-items:center;gap:12px;padding:8px 8px 8px 12px;border:1px solid var(--border);border-radius:20px;background:var(--surface-raised);box-shadow:var(--shadow-floating);transform-origin:50% 100%}.undo-toast_lead__pim9S{position:relative;flex:none}.undo-toast_leadFace__MW0kQ,.undo-toast_lead__pim9S{display:grid;width:24px;height:24px;place-items:center}.undo-toast_leadFace__MW0kQ{grid-area:1/1}.undo-toast_leadFace__MW0kQ[data-lead=done]{color:var(--success)}.undo-toast_leadFace__MW0kQ[data-lead=error]{color:var(--danger)}.undo-toast_countdown__w7KTf{position:relative;display:grid;width:24px;height:24px;place-items:center}.undo-toast_ring__3EqUa{position:absolute;inset:0;width:100%;height:100%;rotate:-90deg;overflow:visible}.undo-toast_ringTrack__rH4pX{fill:none;stroke:var(--border);stroke-width:2}.undo-toast_ringFill__zwCP2{fill:none;stroke:var(--accent);stroke-linecap:round;stroke-width:2}.undo-toast_seconds__t_bwM{position:relative;font-size:var(--text-xs);font-variant-numeric:tabular-nums;font-weight:500;line-height:1}.undo-toast_spinner__1RKKW{width:18px;height:18px;border:2px solid var(--border);border-top-color:var(--foreground);border-radius:50%;animation:undo-toast_undo-toast-spin__cuAGl .7s linear infinite}@keyframes undo-toast_undo-toast-spin__cuAGl{to{rotate:1turn}}.undo-toast_message__ELqQb{position:relative;display:grid;min-width:0;flex:1;overflow:hidden}.undo-toast_messageFace__iUwcK{grid-area:1/1;min-width:0;overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}.undo-toast_roll__xT5Xs{position:relative;display:inline-grid;vertical-align:bottom;font-variant-numeric:tabular-nums}.undo-toast_rollDigit__ZeoJS{display:inline-block;grid-area:1/1}.undo-toast_undo__CwnWo{display:inline-flex;height:36px;flex:none;align-items:center;gap:8px;padding:0 12px 0 14px;border:0;border-radius:12px;background:var(--surface-muted);color:var(--foreground);cursor:pointer;font:inherit;font-weight:500;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.undo-toast_undo__CwnWo:hover{background:color-mix(in oklab,var(--foreground) 9%,var(--surface-muted))}.undo-toast_undo__CwnWo:focus-visible{background:color-mix(in oklab,var(--foreground) 12%,var(--surface-muted))}.undo-toast_undo__CwnWo:active{background:color-mix(in oklab,var(--foreground) 14%,var(--surface-muted))}.undo-toast_undo__CwnWo:disabled{color:var(--text-muted);cursor:default}.undo-toast_kbd__CnlU5{color:var(--text-muted);font:inherit;font-size:var(--text-xs);font-weight:400;letter-spacing:0}@media (hover:none){.undo-toast_kbd__CnlU5{display:none}}.undo-toast_srOnly__otM7_{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.undo-toast_item__l6pnR{position:relative;display:grid;min-width:0;align-items:center;gap:12px;grid-template-columns:auto minmax(0,1fr) auto;padding:10px 12px;border-radius:14px;cursor:default;transition:background-color var(--duration-fast) var(--ease-standard)}.undo-toast_item__l6pnR:focus-visible,.undo-toast_item__l6pnR:focus-within,.undo-toast_item__l6pnR:hover{background:var(--surface-muted)}.undo-toast_leading__3_3DW{display:grid;flex:none;place-items:center}.undo-toast_body__OQHx9{display:grid;min-width:0;gap:1px}.undo-toast_description__V7WVQ,.undo-toast_title__EK0hE{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.undo-toast_title__EK0hE{color:var(--foreground)}.undo-toast_description__V7WVQ{color:var(--text-secondary)}.undo-toast_item__l6pnR[data-unread] .undo-toast_title__EK0hE{font-weight:500}.undo-toast_trailing__hMA9B{display:grid;align-items:center;justify-items:end}.undo-toast_actions__q3UmR,.undo-toast_meta__nMa2D{grid-area:1/1}.undo-toast_meta__nMa2D{pointer-events:none;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap;transition:opacity var(--duration-fast) var(--ease-standard)}.undo-toast_actions__q3UmR{position:relative;z-index:1;display:flex;gap:2px;opacity:0;transform:translateX(6px);pointer-events:none;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-standard) var(--ease-standard)}.undo-toast_item__l6pnR:is(:hover,:focus-within) .undo-toast_actions__q3UmR{opacity:1;transform:none;pointer-events:auto}.undo-toast_item__l6pnR:is(:hover,:focus-within) .undo-toast_meta__nMa2D{opacity:0}@media (hover:none){.undo-toast_actions__q3UmR{opacity:1;transform:none;pointer-events:auto}}@media (hover:none){.undo-toast_meta__nMa2D{opacity:0}}.undo-toast_rowAction__3zpI7{display:grid;width:32px;height:32px;place-items:center;border:0;border-radius:50%;background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.undo-toast_rowAction__3zpI7:focus-visible,.undo-toast_rowAction__3zpI7:hover{background:color-mix(in oklab,var(--foreground) 7%,transparent);color:var(--foreground)}.undo-toast_rowAction__3zpI7:active{background:color-mix(in oklab,var(--foreground) 11%,transparent)}@media (prefers-reduced-motion:reduce){.undo-toast_flash__vFfYS{animation-duration:.9s}}@media (prefers-reduced-motion:reduce){.undo-toast_spinner__1RKKW{animation-duration:1.4s}}@media (prefers-reduced-motion:reduce){.undo-toast_actions__q3UmR{transform:none}}", {"root":"undo-toast_root__yVqgX","list":"undo-toast_list__NLRiw","row":"undo-toast_row__f80q_","rowInner":"undo-toast_rowInner__PFsi8","flash":"undo-toast_flash__vFfYS","undo-toast-flash":"undo-toast_undo-toast-flash__9bZ3B","empty":"undo-toast_empty__t0c7V","toastLayer":"undo-toast_toastLayer__53oM3","toastShell":"undo-toast_toastShell__KVnNA","toast":"undo-toast_toast__H1u25","lead":"undo-toast_lead__pim9S","leadFace":"undo-toast_leadFace__MW0kQ","countdown":"undo-toast_countdown__w7KTf","ring":"undo-toast_ring__3EqUa","ringTrack":"undo-toast_ringTrack__rH4pX","ringFill":"undo-toast_ringFill__zwCP2","seconds":"undo-toast_seconds__t_bwM","spinner":"undo-toast_spinner__1RKKW","undo-toast-spin":"undo-toast_undo-toast-spin__cuAGl","message":"undo-toast_message__ELqQb","messageFace":"undo-toast_messageFace__iUwcK","roll":"undo-toast_roll__xT5Xs","rollDigit":"undo-toast_rollDigit__ZeoJS","undo":"undo-toast_undo__CwnWo","kbd":"undo-toast_kbd__CnlU5","srOnly":"undo-toast_srOnly__otM7_","item":"undo-toast_item__l6pnR","leading":"undo-toast_leading__3_3DW","body":"undo-toast_body__OQHx9","title":"undo-toast_title__EK0hE","description":"undo-toast_description__V7WVQ","trailing":"undo-toast_trailing__hMA9B","meta":"undo-toast_meta__nMa2D","actions":"undo-toast_actions__q3UmR","rowAction":"undo-toast_rowAction__3zpI7"});
A.reg(32159, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var s = a(51811);
  let n = {
    name: "archive",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }
      ],
      [
        "path",
        { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }
      ],
      ["path", { d: "M10 12h4", key: "a56b0p" }]
    ]
  };
  n.node;
  let i = (0, s.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(45044, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { UndoToastDemo: () => R, default: () => K });
  var n = a(95155), r = a(12115), i = a(92298), s = a(61665), o = a(32159), l = a(25879), d = a(80642), c = a(25354), u = a(18310), p = a(28245), m = a(7890), h = a(92171), y = a(64577), x = a(35484), _ = a(7770), f = a(13304), g = a.n(f);
  let b = {
    archive: {
      label: "Archive",
      done: "archived",
      icon: (0, n.jsx)(o.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": true
      })
    },
    delete: {
      label: "Delete",
      done: "deleted",
      icon: (0, n.jsx)(l.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": true
      })
    }
  }, v = ["item", "items"], j = "button:not([disabled]), a[href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex='-1'])", k = (e2) => e2.charAt(0).toUpperCase() + e2.slice(1), w = () => () => {
  }, N = () => /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent) ? "mac" : "other";
  function C({ value: e2, reduced: t2 }) {
    return (0, n.jsx)("span", {
      className: g().roll,
      children: (0, n.jsx)(d.N, {
        initial: false,
        mode: "popLayout",
        children: (0, n.jsx)(
          c.PY1.span,
          {
            className: g().rollDigit,
            initial: t2 ? { opacity: 0 } : { y: "80%", opacity: 0, filter: `blur(${_.T.blur.subtle}px)` },
            animate: { y: 0, opacity: 1, filter: "blur(0px)" },
            exit: t2 ? { opacity: 0 } : { y: "-80%", opacity: 0, filter: `blur(${_.T.blur.subtle}px)` },
            transition: t2 ? { duration: 0 } : _.T.spring.snappy,
            children: e2
          },
          e2
        )
      })
    });
  }
  function A({
    items: e2,
    defaultItems: t2,
    onItemsChange: a2,
    getKey: i2,
    renderItem: s2,
    actions: o2 = b,
    noun: l2 = v,
    duration: f2 = 6e3,
    onRemove: $2,
    onUndo: M2,
    onCommit: E2,
    undoShortcut: L2 = true,
    pauseOnHover: z2 = true,
    empty: R2,
    label: K2,
    toastPlacement: P = "container",
    className: q,
    style: I,
    ref: D
  }) {
    let F, U = (0, u.I)() ?? false, W = (0, r.useSyncExternalStore)(w, N, () => ""), Y = L2 && W ? "mac" === W ? "\u2318Z" : "Ctrl Z" : "", B = L2 && W ? "mac" === W ? "Command Z" : "Control Z" : "", V = (0, r.useId)(), [O, Z] = (0, r.useState)(() => t2 ?? []), H = void 0 !== e2, J = H ? e2 : O, [Q, G] = (0, r.useState)({}), [X, ee] = (0, r.useState)({}), [et, ea] = (0, r.useState)(null), [en, er] = (0, r.useState)(Math.ceil(f2 / 1e3)), ei = (0, r.useRef)(J), es = (0, r.useRef)(Q), eo = (0, r.useRef)(et), el = (0, r.useRef)(null), ed = (0, r.useRef)(null), ec = (0, r.useRef)(null), eu = (0, r.useRef)(void 0), ep = (0, r.useRef)(/* @__PURE__ */ new Set()), em = (0, r.useRef)(0), eh = (0, r.useRef)(0), ey = {
      onItemsChange: a2,
      getKey: i2,
      actions: o2,
      duration: f2,
      onRemove: $2,
      onUndo: M2,
      onCommit: E2,
      controlled: H,
      reduced: U
    }, ex = (0, r.useRef)(ey);
    (0, r.useLayoutEffect)(() => {
      ex.current = ey, ei.current = J;
    });
    let e_ = (0, p.d)(1), ef = (0, p.d)(1);
    (0, m.L)(
      e_,
      "change",
      (e3) => er(Math.max(1, Math.ceil(e3 * ex.current.duration / 1e3 - 1e-3)))
    );
    let eg = (0, r.useCallback)((e3) => {
      es.current = e3(es.current), G(es.current);
    }, []), eb = (0, r.useCallback)((e3, t3 = 0) => {
      window.clearTimeout(eu.current), eo.current = e3, ea(e3), e3 && t3 && (eu.current = window.setTimeout(() => {
        eo.current?.id === e3.id && (eo.current = null, ea(null));
      }, t3));
    }, []);
    (0, r.useEffect)(() => {
      let e3 = new Set(J.map((e4) => i2(e4))), t3 = Object.keys(es.current).filter((t4) => !e3.has(t4));
      t3.length && eg((e4) => {
        let a3 = { ...e4 };
        for (let e5 of t3) delete a3[e5];
        return a3;
      });
    }, [J, i2, eg]);
    let ev = (0, r.useCallback)(() => {
      ec.current?.stop(), ec.current = null;
    }, []), ej = (0, r.useCallback)(
      (e3) => {
        let t3 = new Set(e3.map((e4) => e4.key)), a3 = ex.current;
        eg((e4) => {
          let a4 = { ...e4 };
          for (let e5 of t3) a4[e5] = "gone";
          return a4;
        });
        let n2 = ei.current.filter((e4) => !t3.has(a3.getKey(e4)));
        a3.controlled || Z(n2), a3.onItemsChange?.(n2);
      },
      [eg]
    ), ek = (0, r.useCallback)(
      (e3) => {
        let t3 = e3.map((e4) => e4.key), a3 = ++eh.current;
        eg((e4) => {
          let a4 = { ...e4 };
          for (let e5 of t3) delete a4[e5];
          return a4;
        }), ee((e4) => {
          let n2 = { ...e4 };
          for (let e5 of t3) n2[e5] = a3;
          return n2;
        });
      },
      [eg]
    ), ew = (0, r.useCallback)(
      async (e3) => {
        ev();
        let { entries: t3 } = e3;
        eo.current?.id === e3.id && eb(null), eg((e4) => {
          let a3 = { ...e4 };
          for (let e5 of t3) a3[e5.key] = "committing";
          return a3;
        });
        try {
          await ex.current.onCommit?.(t3), ej(t3);
        } catch {
          ek(t3), eo.current && "pending" === eo.current.phase || eb({ id: ++em.current, phase: "error", entries: t3 }, 4200);
        }
      },
      [ej, ek, eg, eb, ev]
    ), eN = (0, r.useCallback)(
      (e3) => {
        ev();
        let t3 = eo.current;
        if (!t3) return;
        let a3 = ex.current.duration / 1e3, n2 = () => {
          let e4 = (0, h.i)(e_, 0, {
            duration: Math.max(0.01, a3 * e_.get()),
            ease: "linear",
            onComplete: () => {
              eo.current?.id === t3.id && ew(eo.current);
            }
          });
          ec.current = e4, ep.current.size && e4.pause();
        };
        if (e3 && !ex.current.reduced && 0.98 > e_.get()) {
          let e4 = (0, h.i)(e_, 1, {
            ..._.T.spring.smooth,
            visualDuration: 0.36,
            onComplete: n2
          });
          ec.current = e4, ep.current.size && e4.pause();
        } else e_.set(1), n2();
      },
      [ew, e_, ev]
    ), eC = (0, r.useCallback)((e3) => {
      ep.current.add(e3), ec.current?.pause();
    }, []), eA = (0, r.useCallback)((e3) => {
      ep.current.delete(e3), ep.current.size || eo.current?.phase !== "pending" || ec.current?.play();
    }, []);
    (0, r.useEffect)(() => {
      let e3 = () => document.hidden ? eC("tab") : eA("tab");
      return document.addEventListener("visibilitychange", e3), () => document.removeEventListener("visibilitychange", e3);
    }, [eC, eA]), (0, r.useEffect)(
      () => () => {
        ec.current?.stop(), window.clearTimeout(eu.current);
      },
      []
    );
    let eT = (0, r.useCallback)((e3) => {
      let t3 = el.current, a3 = document.activeElement;
      if (!t3 || !(a3 instanceof HTMLElement)) return;
      let n2 = [...t3.querySelectorAll(":scope > li")], r2 = n2.findIndex((t4) => t4.dataset.key === e3), i3 = n2[r2];
      if (!i3 || !i3.contains(a3)) return;
      let s3 = [...i3.querySelectorAll(j)].indexOf(a3), o3 = (t4) => t4.dataset.key !== e3 && !es.current[t4.dataset.key ?? ""], l3 = n2.slice(r2 + 1).find(o3) ?? n2.slice(0, r2).reverse().find(o3);
      if (l3) {
        let e4 = [...l3.querySelectorAll(j)];
        (e4[s3] ?? e4[0])?.focus({ preventScroll: true });
      } else
        requestAnimationFrame(
          () => ed.current?.querySelector("button")?.focus({ preventScroll: true })
        );
    }, []), eS = (0, r.useCallback)(
      (e3, t3) => {
        let a3 = ex.current;
        if (es.current[e3]) return;
        let n2 = ei.current.findIndex((t4) => a3.getKey(t4) === e3);
        if (n2 < 0) return;
        let r2 = {
          key: e3,
          kind: t3 ?? Object.keys(a3.actions)[0] ?? "remove",
          item: ei.current[n2],
          index: n2
        };
        eT(e3), eg((t4) => ({ ...t4, [e3]: "pending" })), a3.onRemove?.([r2]);
        let i3 = eo.current;
        i3?.phase === "pending" ? (eb({ ...i3, retry: false, entries: [...i3.entries, r2] }), a3.reduced || (0, h.i)(ef, 1, {
          type: "spring",
          stiffness: 700,
          damping: 51,
          velocity: 0.9
        }), eN(true)) : (eb({ id: ++em.current, phase: "pending", entries: [r2] }), eN(false));
      },
      [ef, eT, eg, eb, eN]
    ), e$ = (0, r.useCallback)(async () => {
      let e3 = eo.current;
      if (!e3 || "pending" !== e3.phase) return;
      ev();
      let t3 = !!ed.current?.contains(document.activeElement) || document.activeElement === document.body;
      if (ex.current.onUndo) {
        eb({ ...e3, phase: "undoing" });
        try {
          await ex.current.onUndo(e3.entries);
        } catch {
          eo.current?.id === e3.id && (eb({ ...e3, phase: "pending", retry: true }), eN(false));
          return;
        }
      }
      if (ek(e3.entries), eo.current?.id !== e3.id && eo.current || eb({ ...e3, phase: "restored", retry: false }, 2e3), t3) {
        let t4 = [...e3.entries].sort((e4, t5) => e4.index - t5.index)[0];
        requestAnimationFrame(() => {
          let e4 = el.current?.querySelector(
            `:scope > li[data-key="${CSS.escape(t4.key)}"]`
          );
          e4?.querySelector(j)?.focus({ preventScroll: true });
        });
      }
    }, [ek, eb, eN, ev]), eM = (0, r.useCallback)(() => {
      let e3 = eo.current;
      e3?.phase === "pending" && ew(e3);
    }, [ew]);
    (0, r.useImperativeHandle)(
      D,
      () => ({ remove: eS, undo: () => void e$(), commit: eM }),
      [eS, e$, eM]
    );
    let eE = et?.phase === "pending";
    (0, r.useEffect)(() => {
      if (!L2 || !eE) return;
      let e3 = (e4) => {
        "z" !== e4.key.toLowerCase() || e4.shiftKey || e4.altKey || !(e4.metaKey || e4.ctrlKey) || e4.target instanceof Element && e4.target.closest(
          "input, textarea, select, [contenteditable]:not([contenteditable='false'])"
        ) || (e4.preventDefault(), e$());
      };
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, [eE, e$, L2]);
    let eL = et ? (function(e3, t3, a3) {
      let n2 = e3.entries.length, r2 = (function(e4) {
        let t4 = /* @__PURE__ */ new Map();
        for (let a4 of e4) t4.set(a4.kind, (t4.get(a4.kind) ?? 0) + 1);
        return [...t4];
      })(e3.entries), i3 = 1 === n2, s3 = (e4) => t3[e4] ?? { label: k(e4), done: e4 };
      if ("undoing" === e3.phase)
        return { key: "undoing", text: "Restoring\u2026" };
      if ("restored" === e3.phase)
        return i3 ? { key: "restored-1", text: `${k(a3[0])} restored` } : { key: "restored-n", count: n2, text: `${a3[1]} restored` };
      if ("error" === e3.phase) {
        let e4 = 1 === r2.length ? s3(r2[0][0]).label.toLowerCase() : "update";
        return i3 ? { key: "error-1", text: `Couldn't ${e4} ${a3[0]}` } : { key: "error-n", text: `Couldn't ${e4} ${n2} ${a3[1]}` };
      }
      if (e3.retry)
        return { key: "retry", text: "Couldn't undo, try again" };
      if (r2.length > 1)
        return {
          key: "mixed",
          text: r2.map(([e4, t4]) => `${t4} ${s3(e4).done}`).join(", ")
        };
      let o3 = s3(r2[0][0]).done;
      return i3 ? { key: `one-${r2[0][0]}`, text: `${k(a3[0])} ${o3}` } : { key: `many-${r2[0][0]}`, count: n2, text: `${a3[1]} ${o3}` };
    })(et, o2, l2) : null, ez = J.filter((e3) => !Q[i2(e3)]).length, eR = /* @__PURE__ */ new Map();
    et?.phase === "restored" && [...et.entries].sort((e3, t3) => e3.index - t3.index).forEach((e3, t3) => eR.set(e3.key, t3));
    let eK = U ? { duration: 0 } : _.T.spring.smooth, eP = et ? "restored" === et.phase ? "done" : "error" === et.phase ? "error" : "undoing" === et.phase ? "busy" : "ring" : null;
    return (0, n.jsxs)("div", {
      className: [g().root, q].filter(Boolean).join(" "),
      style: I,
      children: [
        (0, n.jsx)("ul", {
          ref: el,
          className: g().list,
          "aria-label": K2,
          children: (0, n.jsx)(d.N, {
            initial: false,
            children: J.map((e3) => {
              let t3 = i2(e3), a3 = !!Q[t3], r2 = (eR.get(t3) ?? 0) * _.T.stagger.item, o3 = X[t3] ?? 0;
              return (0, n.jsx)(
                c.PY1.li,
                {
                  "data-key": t3,
                  className: g().row,
                  initial: { height: 0 },
                  animate: a3 ? { height: 0 } : { height: "auto" },
                  exit: { height: 0, transition: eK },
                  transition: a3 ? { ...eK, delay: 0.05 * !U } : { ...eK, delay: U ? 0 : r2 },
                  "aria-hidden": a3 || void 0,
                  inert: a3,
                  children: (0, n.jsxs)(c.PY1.div, {
                    className: g().rowInner,
                    initial: { opacity: 0, x: 28 * !U },
                    animate: a3 ? {
                      opacity: 0,
                      x: 28 * !U,
                      scale: U ? 1 : 0.985,
                      filter: U ? "blur(0px)" : `blur(${_.T.blur.subtle}px)`
                    } : { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
                    transition: U ? { duration: 0 } : a3 ? {
                      duration: _.T.duration.exit,
                      ease: _.T.ease.standard
                    } : {
                      ..._.T.spring.snappy,
                      delay: 0.06 + r2,
                      filter: { duration: 0.2, delay: 0.06 + r2 }
                    },
                    children: [
                      o3 ? (0, n.jsx)(
                        "span",
                        { className: g().flash, "aria-hidden": true },
                        o3
                      ) : null,
                      (0, n.jsx)(T, {
                        item: e3,
                        rowKey: t3,
                        removed: a3,
                        restoredAt: o3,
                        onRemove: eS,
                        render: s2
                      })
                    ]
                  })
                },
                t3
              );
            })
          })
        }),
        (0, n.jsx)(d.N, {
          initial: false,
          children: 0 === ez && R2 ? (0, n.jsx)(
            c.PY1.div,
            {
              className: g().empty,
              initial: U ? { opacity: 0 } : { opacity: 0, y: 6 },
              animate: { opacity: 1, y: 0 },
              exit: {
                opacity: 0,
                transition: { duration: _.T.duration.instant }
              },
              transition: U ? { duration: 0 } : { ..._.T.spring.smooth, delay: 0.18 },
              children: R2
            },
            "empty"
          ) : null
        }),
        (0, n.jsx)("div", {
          id: V,
          className: g().srOnly,
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: et && eL ? (F = eL.count ? `${eL.count} ${eL.text}` : eL.text, "pending" === et.phase ? `${F}. ${B ? `Press ${B} or the Undo button` : "Use the Undo button"} to undo.` : F) : ""
        }),
        (0, n.jsx)("div", {
          className: g().toastLayer,
          "data-placement": P,
          children: (0, n.jsx)(d.N, {
            children: et && eL ? (0, n.jsx)(
              c.PY1.div,
              {
                className: g().toastShell,
                initial: U ? { opacity: 0 } : {
                  opacity: 0,
                  y: 18,
                  scale: 0.94,
                  filter: `blur(${_.T.blur.soft}px)`
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)"
                },
                exit: U ? { opacity: 0 } : {
                  opacity: 0,
                  y: 12,
                  scale: 0.96,
                  filter: `blur(${_.T.blur.subtle}px)`,
                  transition: {
                    duration: _.T.duration.exit,
                    ease: _.T.ease.exit
                  }
                },
                transition: U ? { duration: _.T.duration.fast } : { ..._.T.spring.morph, filter: { duration: 0.24 } },
                children: (0, n.jsxs)(c.PY1.div, {
                  ref: ed,
                  className: g().toast,
                  "data-phase": et.phase,
                  style: { scale: ef },
                  role: "group",
                  "aria-label": "Undo",
                  "aria-describedby": V,
                  onPointerEnter: () => z2 && eC("hover"),
                  onPointerLeave: () => eA("hover"),
                  onFocus: () => z2 && eC("focus"),
                  onBlur: (e3) => {
                    e3.currentTarget.contains(e3.relatedTarget) || eA("focus");
                  },
                  onKeyDown: (e3) => {
                    "Escape" === e3.key && eo.current?.phase === "pending" && (e3.stopPropagation(), eM());
                  },
                  children: [
                    (0, n.jsx)("span", {
                      className: g().lead,
                      "aria-hidden": true,
                      children: (0, n.jsx)(d.N, {
                        initial: false,
                        mode: "popLayout",
                        children: (0, n.jsx)(
                          c.PY1.span,
                          {
                            className: g().leadFace,
                            "data-lead": eP,
                            initial: U ? { opacity: 0 } : {
                              opacity: 0,
                              scale: 0.5,
                              rotate: "done" === eP ? -45 : 0
                            },
                            animate: { opacity: 1, scale: 1, rotate: 0 },
                            exit: U ? { opacity: 0 } : { opacity: 0, scale: 0.5 },
                            transition: U ? { duration: 0 } : _.T.spring.snappy,
                            children: "ring" === eP ? (0, n.jsx)(S, {
                              progress: e_,
                              seconds: en,
                              reduced: U
                            }) : "busy" === eP ? (0, n.jsx)("span", {
                              className: g().spinner
                            }) : "done" === eP ? (0, n.jsx)(y.A, {
                              size: 16,
                              strokeWidth: 2
                            }) : (0, n.jsx)(x.A, {
                              size: 16,
                              strokeWidth: 1.75
                            })
                          },
                          eP
                        )
                      })
                    }),
                    (0, n.jsx)("span", {
                      className: g().message,
                      children: (0, n.jsx)(d.N, {
                        initial: false,
                        mode: "popLayout",
                        children: (0, n.jsxs)(
                          c.PY1.span,
                          {
                            className: g().messageFace,
                            initial: U ? { opacity: 0 } : {
                              opacity: 0,
                              y: 8,
                              filter: `blur(${_.T.blur.subtle}px)`
                            },
                            animate: {
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)"
                            },
                            exit: U ? { opacity: 0 } : {
                              opacity: 0,
                              y: -8,
                              filter: `blur(${_.T.blur.subtle}px)`
                            },
                            transition: U ? { duration: 0 } : {
                              ..._.T.spring.snappy,
                              filter: { duration: 0.18 }
                            },
                            children: [
                              eL.count ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(C, {
                                    value: eL.count,
                                    reduced: U
                                  }),
                                  " "
                                ]
                              }) : null,
                              eL.text
                            ]
                          },
                          eL.key
                        )
                      })
                    }),
                    (0, n.jsx)(d.N, {
                      initial: false,
                      children: "pending" === et.phase || "undoing" === et.phase ? (0, n.jsxs)(
                        c.PY1.button,
                        {
                          type: "button",
                          className: g().undo,
                          disabled: "undoing" === et.phase,
                          onClick: () => void e$(),
                          initial: U ? { opacity: 0 } : { opacity: 0, scale: 0.9 },
                          animate: { opacity: 1, scale: 1 },
                          exit: U ? { opacity: 0 } : {
                            opacity: 0,
                            scale: 0.9,
                            filter: `blur(${_.T.blur.subtle}px)`
                          },
                          transition: U ? { duration: 0 } : _.T.spring.snappy,
                          "aria-keyshortcuts": L2 ? "Meta+Z Control+Z" : void 0,
                          children: [
                            "Undo",
                            Y ? (0, n.jsx)("kbd", {
                              className: g().kbd,
                              "aria-hidden": true,
                              children: Y
                            }) : null
                          ]
                        },
                        "undo"
                      ) : null
                    })
                  ]
                })
              },
              "toast"
            ) : null
          })
        })
      ]
    });
  }
  function T({
    item: e2,
    rowKey: t2,
    removed: a2,
    restoredAt: n2,
    onRemove: r2,
    render: i2
  }) {
    return i2(e2, { remove: (e3) => r2(t2, e3), removed: a2, restoredAt: n2 });
  }
  function S({ progress: e2, seconds: t2, reduced: a2 }) {
    return (0, n.jsxs)("span", {
      className: g().countdown,
      children: [
        (0, n.jsxs)("svg", {
          viewBox: "0 0 24 24",
          className: g().ring,
          children: [
            (0, n.jsx)("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              className: g().ringTrack
            }),
            (0, n.jsx)(c.PY1.circle, {
              cx: "12",
              cy: "12",
              r: "10",
              className: g().ringFill,
              style: { pathLength: e2 }
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: g().seconds,
          children: (0, n.jsx)(C, { value: t2, reduced: a2 })
        })
      ]
    });
  }
  function $({
    leading: e2,
    title: t2,
    description: a2,
    meta: r2,
    actions: i2,
    shortcuts: s2,
    label: o2,
    unread: l2,
    className: d2
  }) {
    return (0, n.jsxs)("div", {
      className: [g().item, d2].filter(Boolean).join(" "),
      "data-unread": l2 || void 0,
      tabIndex: 0,
      "aria-label": o2,
      onKeyDown: (e3) => {
        if (e3.target !== e3.currentTarget || !s2 || e3.metaKey || e3.ctrlKey || e3.altKey)
          return;
        let t3 = s2[e3.key] ?? s2[e3.key.toLowerCase()];
        t3 && (e3.preventDefault(), t3());
      },
      children: [
        e2 ? (0, n.jsx)("span", { className: g().leading, children: e2 }) : null,
        (0, n.jsxs)("span", {
          className: g().body,
          children: [
            (0, n.jsx)("span", { className: g().title, children: t2 }),
            a2 ? (0, n.jsx)("span", { className: g().description, children: a2 }) : null
          ]
        }),
        (0, n.jsxs)("span", {
          className: g().trailing,
          children: [
            r2 ? (0, n.jsx)("span", { className: g().meta, children: r2 }) : null,
            i2 ? (0, n.jsx)("span", { className: g().actions, children: i2 }) : null
          ]
        })
      ]
    });
  }
  function M({ label: e2, icon: t2, onClick: a2 }) {
    return (0, n.jsx)("button", {
      type: "button",
      className: g().rowAction,
      "aria-label": e2,
      title: e2,
      onClick: (e3) => {
        e3.stopPropagation(), a2();
      },
      children: t2
    });
  }
  var E = a(50560), L = a.n(E);
  let z = [
    {
      id: "c1",
      name: "Emma Collins",
      avatar: "media/people/portrait/emma-collins.svg",
      subject: "Brand review moved to Thursday",
      preview: "I pushed it to 2 pm so Daniel can join from Lisbon.",
      time: "9:41",
      unread: true
    },
    {
      id: "c2",
      name: "Daniel Kim",
      avatar: "media/people/portrait/daniel-kim.svg",
      subject: "Invoice 2041 for September",
      preview: "Updated with the corrected VAT number, same total.",
      time: "9:12",
      unread: true
    },
    {
      id: "c3",
      name: "Sofia Ramirez",
      avatar: "media/people/portrait/sofia-ramirez.svg",
      subject: "Offsite rooms are confirmed",
      preview: "All twelve rooms are held until Friday at noon.",
      time: "8:30"
    },
    {
      id: "c4",
      name: "Marcus Johnson",
      avatar: "media/people/portrait/marcus-johnson.svg",
      subject: "Notes from the checkout crit",
      preview: "Three small fixes and one bigger question about tax.",
      time: "Mon"
    },
    {
      id: "c5",
      name: "Olivia Bennett",
      avatar: "media/people/portrait/olivia-bennett.svg",
      subject: "Signed agreement attached",
      preview: "Countersigned and filed. Welcome aboard.",
      time: "Sun"
    },
    {
      id: "c6",
      name: "Nathan Cole",
      avatar: "media/people/portrait/nathan-cole.svg",
      subject: "Access to the design repo",
      preview: "Approved for read access, ping me for write.",
      time: "Sat"
    }
  ];
  function R() {
    let [e2, t2] = (0, r.useState)(z), a2 = (0, r.useRef)(null), d2 = e2.length < z.length;
    return (0, n.jsxs)("div", {
      className: L().demo,
      children: [
        (0, n.jsxs)("section", {
          className: L().card,
          "aria-labelledby": "undo-toast-demo-title",
          children: [
            (0, n.jsxs)("header", {
              className: L().header,
              children: [
                (0, n.jsx)("h3", {
                  id: "undo-toast-demo-title",
                  className: L().heading,
                  children: "Inbox"
                }),
                (0, n.jsxs)("button", {
                  type: "button",
                  className: L().reset,
                  onClick: () => t2(z),
                  disabled: !d2,
                  "aria-hidden": !d2,
                  tabIndex: d2 ? 0 : -1,
                  "data-visible": d2 || void 0,
                  children: [
                    (0, n.jsx)(i.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": true
                    }),
                    "Refill inbox"
                  ]
                })
              ]
            }),
            (0, n.jsx)(A, {
              ref: a2,
              className: L().inbox,
              label: "Conversations",
              items: e2,
              onItemsChange: t2,
              getKey: (e3) => e3.id,
              noun: ["conversation", "conversations"],
              onCommit: () => new Promise((e3) => setTimeout(e3, 420)),
              empty: (0, n.jsxs)("div", {
                className: L().empty,
                children: [
                  (0, n.jsx)(s.A, {
                    size: 20,
                    strokeWidth: 1.75,
                    "aria-hidden": true
                  }),
                  (0, n.jsx)("span", { children: "All caught up" })
                ]
              }),
              renderItem: (e3, { remove: t3 }) => (0, n.jsx)($, {
                label: `${e3.name}, ${e3.subject}`,
                unread: e3.unread,
                leading: (0, n.jsx)("img", {
                  className: L().avatar,
                  src: e3.avatar,
                  alt: "",
                  width: 36,
                  height: 36,
                  draggable: false
                }),
                title: (0, n.jsxs)("span", {
                  className: L().titleLine,
                  children: [
                    (0, n.jsx)("span", {
                      className: L().name,
                      children: e3.name
                    }),
                    (0, n.jsx)("span", {
                      className: L().subject,
                      children: e3.subject
                    })
                  ]
                }),
                description: e3.preview,
                meta: e3.time,
                shortcuts: {
                  e: () => t3("archive"),
                  Backspace: () => t3("delete"),
                  Delete: () => t3("delete")
                },
                actions: (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(M, {
                      label: "Archive",
                      icon: (0, n.jsx)(o.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": true
                      }),
                      onClick: () => t3("archive")
                    }),
                    (0, n.jsx)(M, {
                      label: "Delete",
                      icon: (0, n.jsx)(l.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": true
                      }),
                      onClick: () => t3("delete")
                    })
                  ]
                })
              })
            })
          ]
        }),
        (0, n.jsx)("p", {
          className: L().note,
          children: "Archive a few in a row, then undo with the button or \u2318Z. Nothing is sent."
        })
      ]
    });
  }
  let K = R;
}

__m(__module,__exports,__require);
});
A.regCss(50560, ".demo{display:grid;width:100%;max-width:760px;gap:12px;margin-inline:auto}\n.card{display:grid;min-width:0;min-height:540px;grid-template-rows:auto 1fr;padding:8px;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);box-shadow:var(--shadow-resting)}\n@media (max-width:480px){.card{min-height:600px;padding-inline:4px;border-radius:var(--radius-panel)}\n.header{display:flex;min-height:44px;align-items:center;justify-content:space-between;gap:12px;padding:6px 12px 6px 14px}\n.inbox{padding-bottom:76px}\n.heading{margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body)}\n.reset{display:inline-flex;height:32px;align-items:center;gap:6px;padding:0 12px;border:0;border-radius:12px;background:transparent;color:var(--text-secondary);cursor:pointer;font:inherit;font-size:var(--text-sm);opacity:0;transform:translateY(2px);pointer-events:none;transition:opacity var(--duration-standard) var(--ease-standard),transform var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.reset[data-visible]{opacity:1;transform:none;pointer-events:auto}\n.reset:focus-visible,.reset:hover{background:var(--surface-muted);color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.reset{transform:none}\n.avatar{display:block;width:36px;height:36px;border-radius:50%;object-fit:cover}\n.titleLine{display:flex;min-width:0;align-items:baseline;gap:8px}\n.titleLine{display:grid;gap:0}\n.name{flex:none}\n.subject{min-width:0;overflow:hidden;color:var(--text-secondary);font-weight:400;text-overflow:ellipsis}\n.empty{display:grid;min-height:120px;place-items:center;align-content:center;gap:8px;color:var(--text-muted)}\n.note{margin:0;color:var(--text-muted);font-size:var(--text-xs);text-align:center}", {"demo":"demo","card":"card","header":"header","inbox":"inbox","heading":"heading","reset":"reset","avatar":"avatar","titleLine":"titleLine","name":"name","subject":"subject","empty":"empty","note":"note"});
A.reg(61665, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var s = t(51811);
  let i = {
    name: "inbox",
    size: 24,
    node: [
      [
        "polyline",
        { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }
      ],
      [
        "path",
        {
          d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
          key: "oot6mr"
        }
      ]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.cssFor("undo-toast", [13304,50560]);
A.item("undo-toast", {entry:45044, export:"UndoToastDemo", kind:"component", tier:"pro", unresolved:[]});
})();