function(__module,__exports,__require){
"use strict";
function __m(e, n, r) {
  r.d(n, {
    H_: () => nn,
    UC: () => e4,
    YJ: () => e8,
    q7: () => ne,
    VF: () => no,
    JU: () => e6,
    ZL: () => e3,
    z6: () => nr,
    hN: () => nt,
    bL: () => e7,
    wv: () => nu,
    Pb: () => na,
    G5: () => nc,
    ZP: () => ni,
    l9: () => e2
  });
  var t = r(12115), o = r(70379), u = r(47527), a = r(68599), i = r(59322), c = r(55897), l = r(76094), s = r(1933), d = r(19416), f = r(32007), p = r(69885), g = r(89971), h = r(80878), m = r(19040), w = r(83935), v = r(69245), x = r(42442), b = r(17347), M = r(22954), C = r(5174), y = r(95155), R = Object.defineProperty, j = (e10, n2) => R(e10, "name", { value: n2, configurable: true }), D = ["Enter", " "], I = ["ArrowUp", "PageDown", "End"], K = ["ArrowDown", "PageUp", "Home", ...I], _ = { ltr: [...D, "ArrowRight"], rtl: [...D, "ArrowLeft"] }, k = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] }, P = "Menu", [S, E, T] = (0, l.N)(P), [F, O] = (0, a.A)(P, [T, h.Bk, v.RG]), L = (0, h.Bk)(), A = (0, v.RG)(), [G, B] = F(P), [U, V] = F(P), N = j((e10) => {
    let {
      __scopeMenu: n2,
      open: r2 = false,
      children: o2,
      dir: u2,
      onOpenChange: a2,
      modal: i2 = true
    } = e10, c2 = L(n2), [l2, d2] = t.useState(null), f2 = t.useRef(false), p2 = (0, b.c)(a2), g2 = (0, s.jH)(u2);
    return t.useEffect(() => {
      let e11 = j(() => {
        f2.current = true, document.addEventListener("pointerdown", n3, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", n3, {
          capture: true,
          once: true
        });
      }, "handleKeyDown"), n3 = j(() => f2.current = false, "handlePointer");
      return document.addEventListener("keydown", e11, { capture: true }), () => {
        document.removeEventListener("keydown", e11, { capture: true }), document.removeEventListener("pointerdown", n3, { capture: true }), document.removeEventListener("pointermove", n3, {
          capture: true
        });
      };
    }, []), t.useEffect(() => {
      if (!r2) return;
      let e11 = j(() => p2(false), "handleBlur");
      return window.addEventListener("blur", e11), () => window.removeEventListener("blur", e11);
    }, [r2, p2]), (0, y.jsx)(h.bL, {
      ...c2,
      children: (0, y.jsx)(G, {
        scope: n2,
        open: r2,
        onOpenChange: p2,
        content: l2,
        onContentChange: d2,
        children: (0, y.jsx)(U, {
          scope: n2,
          onClose: t.useCallback(() => p2(false), [p2]),
          isUsingKeyboardRef: f2,
          dir: g2,
          modal: i2,
          children: o2
        })
      })
    });
  }, "Menu"), H = t.forwardRef(
    j(function(e10, n2) {
      let { __scopeMenu: r2, ...t2 } = e10, o2 = L(r2);
      return (0, y.jsx)(h.Mz, { ...o2, ...t2, ref: n2 });
    }, "MenuAnchor")
  ), q = "MenuPortal", [X, z] = F(q, { forceMount: void 0 }), Z = j((e10) => {
    let { __scopeMenu: n2, forceMount: r2, children: t2, container: o2 } = e10, u2 = B(q, n2);
    return (0, y.jsx)(X, {
      scope: n2,
      forceMount: r2,
      children: (0, y.jsx)(w.C, {
        present: r2 || u2.open,
        children: (0, y.jsx)(m.Z, { asChild: true, container: o2, children: t2 })
      })
    });
  }, "MenuPortal"), Y = "MenuContent", [J, W] = F(Y), Q = t.forwardRef(
    j(function(e10, n2) {
      let r2 = z(Y, e10.__scopeMenu), { forceMount: t2 = r2.forceMount, ...o2 } = e10, u2 = B(Y, e10.__scopeMenu), a2 = V(Y, e10.__scopeMenu);
      return (0, y.jsx)(S.Provider, {
        scope: e10.__scopeMenu,
        children: (0, y.jsx)(w.C, {
          present: t2 || u2.open,
          children: (0, y.jsx)(S.Slot, {
            scope: e10.__scopeMenu,
            children: a2.modal ? (0, y.jsx)($, { ...o2, ref: n2 }) : (0, y.jsx)(ee, { ...o2, ref: n2 })
          })
        })
      });
    }, "MenuContent")
  ), $ = t.forwardRef(
    j(function(e10, n2) {
      let r2 = B(Y, e10.__scopeMenu), a2 = t.useRef(null), i2 = (0, u.s)(n2, a2);
      return t.useEffect(() => {
        let e11 = a2.current;
        if (e11) return (0, M.Eq)(e11);
      }, []), (0, y.jsx)(er, {
        ...e10,
        ref: i2,
        trapFocus: r2.open,
        disableOutsidePointerEvents: r2.open,
        disableOutsideScroll: true,
        onFocusOutside: (0, o.mK)(
          e10.onFocusOutside,
          (e11) => e11.preventDefault(),
          { checkForDefaultPrevented: false }
        ),
        onDismiss: () => r2.onOpenChange(false)
      });
    }, "MenuRootContentModal")
  ), ee = t.forwardRef(
    j(function(e10, n2) {
      let r2 = B(Y, e10.__scopeMenu);
      return (0, y.jsx)(er, {
        ...e10,
        ref: n2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        onDismiss: () => r2.onOpenChange(false)
      });
    }, "MenuRootContentNonModal")
  ), en = (0, x.TL)("MenuContent.ScrollLock"), er = t.forwardRef(
    j(function(e10, n2) {
      let {
        __scopeMenu: r2,
        loop: a2 = false,
        trapFocus: i2,
        onOpenAutoFocus: c2,
        onCloseAutoFocus: l2,
        disableOutsidePointerEvents: s2,
        onEntryFocus: g2,
        onEscapeKeyDown: m2,
        onPointerDownOutside: w2,
        onFocusOutside: x2,
        onInteractOutside: b2,
        onDismiss: M2,
        disableOutsideScroll: R2,
        ...D2
      } = e10, _2 = B(Y, r2), k2 = V(Y, r2), P2 = L(r2), S2 = A(r2), T2 = E(r2), [F2, O2] = t.useState(null), G2 = t.useRef(null), U2 = (0, u.s)(n2, G2, _2.onContentChange), N2 = t.useRef(0), H2 = t.useRef(""), q2 = t.useRef(0), X2 = t.useRef(null), z2 = t.useRef("right"), Z2 = t.useRef(0), W2 = R2 ? C.A : t.Fragment, Q2 = j((e11) => {
        let n3 = H2.current + e11, r3 = T2().filter((e12) => !e12.disabled), t2 = document.activeElement, o2 = r3.find((e12) => e12.ref.current === t2)?.textValue, u2 = eP(
          r3.map((e12) => e12.textValue),
          n3,
          o2
        ), a3 = r3.find((e12) => e12.textValue === u2)?.ref.current;
        a3 && setTimeout(() => a3.focus());
      }, "handleTypeaheadSearch");
      t.useEffect(() => () => window.clearTimeout(N2.current), []), (0, f.Oh)();
      let $2 = t.useCallback(
        (e11) => z2.current === X2.current?.side && eE(e11, X2.current?.area),
        []
      );
      return (0, y.jsx)(J, {
        scope: r2,
        searchRef: H2,
        onItemEnter: t.useCallback(
          (e11) => {
            $2(e11) && e11.preventDefault();
          },
          [$2]
        ),
        onItemLeave: t.useCallback(
          (e11) => {
            $2(e11) || (G2.current?.focus(), O2(null));
          },
          [$2]
        ),
        onTriggerLeave: t.useCallback(
          (e11) => {
            $2(e11) && e11.preventDefault();
          },
          [$2]
        ),
        pointerGraceTimerRef: q2,
        onPointerGraceIntentChange: t.useCallback((e11) => {
          X2.current = e11;
        }, []),
        children: (0, y.jsx)(W2, {
          ...R2 ? { as: en, allowPinchZoom: true } : void 0,
          children: (0, y.jsx)(p.n, {
            asChild: true,
            trapped: i2,
            onMountAutoFocus: (0, o.mK)(c2, (e11) => {
              e11.preventDefault(), G2.current?.focus({ preventScroll: true });
            }),
            onUnmountAutoFocus: l2,
            children: (0, y.jsx)(d.qW, {
              asChild: true,
              disableOutsidePointerEvents: s2,
              onEscapeKeyDown: m2,
              onPointerDownOutside: w2,
              onFocusOutside: x2,
              onInteractOutside: b2,
              onDismiss: M2,
              children: (0, y.jsx)(v.bL, {
                asChild: true,
                ...S2,
                dir: k2.dir,
                orientation: "vertical",
                loop: a2,
                currentTabStopId: F2,
                onCurrentTabStopIdChange: O2,
                onEntryFocus: (0, o.mK)(g2, (e11) => {
                  k2.isUsingKeyboardRef.current || e11.preventDefault();
                }),
                preventScrollOnEntryFocus: true,
                children: (0, y.jsx)(h.UC, {
                  role: "menu",
                  "aria-orientation": "vertical",
                  "data-state": eD(_2.open),
                  "data-radix-menu-content": "",
                  dir: k2.dir,
                  ...P2,
                  ...D2,
                  ref: U2,
                  style: { outline: "none", ...D2.style },
                  onKeyDown: (0, o.mK)(D2.onKeyDown, (e11) => {
                    let n3 = e11.target.closest("[data-radix-menu-content]") === e11.currentTarget, r3 = e11.ctrlKey || e11.altKey || e11.metaKey, t2 = 1 === e11.key.length;
                    n3 && ("Tab" === e11.key && e11.preventDefault(), !r3 && t2 && Q2(e11.key));
                    let o2 = G2.current;
                    if (e11.target !== o2 || !K.includes(e11.key)) return;
                    e11.preventDefault();
                    let u2 = T2().filter((e12) => !e12.disabled).map((e12) => e12.ref.current);
                    I.includes(e11.key) && u2.reverse(), e_(u2);
                  }),
                  onBlur: (0, o.mK)(e10.onBlur, (e11) => {
                    e11.currentTarget.contains(e11.target) || (window.clearTimeout(N2.current), H2.current = "");
                  }),
                  onPointerMove: (0, o.mK)(
                    e10.onPointerMove,
                    eT((e11) => {
                      let n3 = e11.target, r3 = Z2.current !== e11.clientX;
                      e11.currentTarget.contains(n3) && r3 && (z2.current = e11.clientX > Z2.current ? "right" : "left", Z2.current = e11.clientX);
                    })
                  )
                })
              })
            })
          })
        })
      });
    }, "MenuContentImpl")
  ), et = t.forwardRef(
    j(function(e10, n2) {
      let { __scopeMenu: r2, ...t2 } = e10;
      return (0, y.jsx)(c.sG.div, { role: "group", ...t2, ref: n2 });
    }, "MenuGroup")
  ), eo = t.forwardRef(
    j(function(e10, n2) {
      let { __scopeMenu: r2, ...t2 } = e10;
      return (0, y.jsx)(c.sG.div, { ...t2, ref: n2 });
    }, "MenuLabel")
  ), eu = "MenuItem", ea = "menu.itemSelect", ei = t.forwardRef(
    j(function(e10, n2) {
      let { disabled: r2 = false, onSelect: a2, ...i2 } = e10, l2 = t.useRef(null), s2 = V(eu, e10.__scopeMenu), d2 = W(eu, e10.__scopeMenu), f2 = (0, u.s)(n2, l2), p2 = t.useRef(false), g2 = j(() => {
        let e11 = l2.current;
        if (!r2 && e11) {
          let n3 = new CustomEvent(ea, { bubbles: true, cancelable: true });
          e11.addEventListener(ea, (e12) => a2?.(e12), { once: true }), (0, c.hO)(e11, n3), n3.defaultPrevented ? p2.current = false : s2.onClose();
        }
      }, "handleSelect");
      return (0, y.jsx)(ec, {
        ...i2,
        ref: f2,
        disabled: r2,
        onClick: (0, o.mK)(e10.onClick, g2),
        onPointerDown: (n3) => {
          e10.onPointerDown?.(n3), p2.current = true;
        },
        onPointerUp: (0, o.mK)(e10.onPointerUp, (e11) => {
          p2.current || e11.currentTarget?.click();
        }),
        onKeyDown: (0, o.mK)(e10.onKeyDown, (e11) => {
          r2 || e11.target !== e11.currentTarget || ("" === d2.searchRef.current || " " !== e11.key) && D.includes(e11.key) && (e11.currentTarget.click(), e11.preventDefault());
        })
      });
    }, "MenuItem")
  ), ec = t.forwardRef(
    j(function(e10, n2) {
      let { __scopeMenu: r2, disabled: a2 = false, textValue: i2, ...l2 } = e10, s2 = W(eu, r2), d2 = A(r2), f2 = t.useRef(null), p2 = (0, u.s)(n2, f2), [g2, h2] = t.useState(false), [m2, w2] = t.useState("");
      return t.useEffect(() => {
        let e11 = f2.current;
        e11 && w2((e11.textContent ?? "").trim());
      }, [l2.children]), (0, y.jsx)(S.ItemSlot, {
        scope: r2,
        disabled: a2,
        textValue: i2 ?? m2,
        children: (0, y.jsx)(v.q7, {
          asChild: true,
          ...d2,
          focusable: !a2,
          children: (0, y.jsx)(c.sG.div, {
            role: "menuitem",
            "data-highlighted": g2 ? "" : void 0,
            "aria-disabled": a2 || void 0,
            "data-disabled": a2 ? "" : void 0,
            ...l2,
            ref: p2,
            onPointerMove: (0, o.mK)(
              e10.onPointerMove,
              eT((e11) => {
                a2 ? s2.onItemLeave(e11) : (s2.onItemEnter(e11), e11.defaultPrevented || e11.currentTarget.focus({ preventScroll: true }));
              })
            ),
            onPointerLeave: (0, o.mK)(
              e10.onPointerLeave,
              eT((e11) => s2.onItemLeave(e11))
            ),
            onFocus: (0, o.mK)(e10.onFocus, () => h2(true)),
            onBlur: (0, o.mK)(e10.onBlur, () => h2(false))
          })
        })
      });
    }, "MenuItemImpl")
  ), el = t.forwardRef(
    j(function(e10, n2) {
      let { checked: r2 = false, onCheckedChange: t2, ...u2 } = e10;
      return (0, y.jsx)(eh, {
        scope: e10.__scopeMenu,
        checked: r2,
        children: (0, y.jsx)(ei, {
          role: "menuitemcheckbox",
          "aria-checked": eI(r2) ? "mixed" : r2,
          ...u2,
          ref: n2,
          "data-state": eK(r2),
          onSelect: (0, o.mK)(u2.onSelect, () => t2?.(!!eI(r2) || !r2), {
            checkForDefaultPrevented: false
          })
        })
      });
    }, "MenuCheckboxItem")
  ), [es, ed] = F("MenuRadioGroup", {
    value: void 0,
    onValueChange: j(() => {
    }, "onValueChange")
  }), ef = t.forwardRef(
    j(function(e10, n2) {
      let { value: r2, onValueChange: t2, ...o2 } = e10, u2 = (0, b.c)(t2);
      return (0, y.jsx)(es, {
        scope: e10.__scopeMenu,
        value: r2,
        onValueChange: u2,
        children: (0, y.jsx)(et, { ...o2, ref: n2 })
      });
    }, "MenuRadioGroup")
  ), ep = t.forwardRef(
    j(function(e10, n2) {
      let { value: r2, ...t2 } = e10, u2 = ed("MenuRadioItem", e10.__scopeMenu), a2 = r2 === u2.value;
      return (0, y.jsx)(eh, {
        scope: e10.__scopeMenu,
        checked: a2,
        children: (0, y.jsx)(ei, {
          role: "menuitemradio",
          "aria-checked": a2,
          ...t2,
          ref: n2,
          "data-state": eK(a2),
          onSelect: (0, o.mK)(t2.onSelect, () => u2.onValueChange?.(r2), {
            checkForDefaultPrevented: false
          })
        })
      });
    }, "MenuRadioItem")
  ), eg = "MenuItemIndicator", [eh, em] = F(eg, { checked: false }), ew = t.forwardRef(
    j(function(e10, n2) {
      let { __scopeMenu: r2, forceMount: t2, ...o2 } = e10, u2 = em(eg, r2);
      return (0, y.jsx)(w.C, {
        present: t2 || eI(u2.checked) || true === u2.checked,
        children: (0, y.jsx)(c.sG.span, {
          ...o2,
          ref: n2,
          "data-state": eK(u2.checked)
        })
      });
    }, "MenuItemIndicator")
  ), ev = t.forwardRef(
    j(function(e10, n2) {
      let { __scopeMenu: r2, ...t2 } = e10;
      return (0, y.jsx)(c.sG.div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...t2,
        ref: n2
      });
    }, "MenuSeparator")
  ), ex = "MenuSub", [eb, eM] = F(ex), eC = j((e10) => {
    let { __scopeMenu: n2, children: r2, open: o2 = false, onOpenChange: u2 } = e10, a2 = B(ex, n2), i2 = L(n2), [c2, l2] = t.useState(null), [s2, d2] = t.useState(null), f2 = (0, b.c)(u2);
    return t.useEffect(() => (false === a2.open && f2(false), () => f2(false)), [a2.open, f2]), (0, y.jsx)(h.bL, {
      ...i2,
      children: (0, y.jsx)(G, {
        scope: n2,
        open: o2,
        onOpenChange: f2,
        content: s2,
        onContentChange: d2,
        children: (0, y.jsx)(eb, {
          scope: n2,
          contentId: (0, g.B)(),
          triggerId: (0, g.B)(),
          trigger: c2,
          onTriggerChange: l2,
          children: r2
        })
      })
    });
  }, "MenuSub"), ey = "MenuSubTrigger", eR = t.forwardRef(
    j(function(e10, n2) {
      let r2 = B(ey, e10.__scopeMenu), a2 = V(ey, e10.__scopeMenu), i2 = eM(ey, e10.__scopeMenu), c2 = W(ey, e10.__scopeMenu), l2 = t.useRef(null), { pointerGraceTimerRef: s2, onPointerGraceIntentChange: d2 } = c2, f2 = { __scopeMenu: e10.__scopeMenu }, p2 = t.useCallback(() => {
        l2.current && window.clearTimeout(l2.current), l2.current = null;
      }, []);
      t.useEffect(() => p2, [p2]), t.useEffect(() => {
        let e11 = s2.current;
        return () => {
          window.clearTimeout(e11), d2(null);
        };
      }, [s2, d2]);
      let g2 = (0, u.s)(n2, i2.onTriggerChange);
      return (0, y.jsx)(H, {
        asChild: true,
        ...f2,
        children: (0, y.jsx)(ec, {
          id: i2.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": r2.open,
          "aria-controls": r2.open ? i2.contentId : void 0,
          "data-state": eD(r2.open),
          ...e10,
          ref: g2,
          onClick: (n3) => {
            e10.onClick?.(n3), e10.disabled || n3.defaultPrevented || (n3.currentTarget.focus(), r2.open || r2.onOpenChange(true));
          },
          onPointerMove: (0, o.mK)(
            e10.onPointerMove,
            eT((n3) => {
              c2.onItemEnter(n3), !n3.defaultPrevented && (e10.disabled || r2.open || l2.current || (c2.onPointerGraceIntentChange(null), l2.current = window.setTimeout(() => {
                r2.onOpenChange(true), p2();
              }, 100)));
            })
          ),
          onPointerLeave: (0, o.mK)(
            e10.onPointerLeave,
            eT((e11) => {
              p2();
              let n3 = r2.content?.getBoundingClientRect();
              if (n3) {
                let t2 = r2.content?.dataset.side, o2 = "right" === t2, u2 = n3[o2 ? "left" : "right"], a3 = n3[o2 ? "right" : "left"];
                c2.onPointerGraceIntentChange({
                  area: [
                    { x: e11.clientX + (o2 ? -5 : 5), y: e11.clientY },
                    { x: u2, y: n3.top },
                    { x: a3, y: n3.top },
                    { x: a3, y: n3.bottom },
                    { x: u2, y: n3.bottom }
                  ],
                  side: t2
                }), window.clearTimeout(s2.current), s2.current = window.setTimeout(
                  () => c2.onPointerGraceIntentChange(null),
                  300
                );
              } else {
                if (c2.onTriggerLeave(e11), e11.defaultPrevented) return;
                c2.onPointerGraceIntentChange(null);
              }
            })
          ),
          onKeyDown: (0, o.mK)(e10.onKeyDown, (n3) => {
            e10.disabled || n3.target !== n3.currentTarget || ("" === c2.searchRef.current || " " !== n3.key) && _[a2.dir].includes(n3.key) && (r2.onOpenChange(true), r2.content?.focus(), n3.preventDefault());
          })
        })
      });
    }, "MenuSubTrigger")
  ), ej = t.forwardRef(
    j(function(e10, n2) {
      let r2 = z(Y, e10.__scopeMenu), { forceMount: a2 = r2.forceMount, align: i2 = "start", ...c2 } = e10, l2 = B(Y, e10.__scopeMenu), s2 = V(Y, e10.__scopeMenu), d2 = eM("MenuSubContent", e10.__scopeMenu), f2 = t.useRef(null), p2 = (0, u.s)(n2, f2);
      return (0, y.jsx)(S.Provider, {
        scope: e10.__scopeMenu,
        children: (0, y.jsx)(w.C, {
          present: a2 || l2.open,
          children: (0, y.jsx)(S.Slot, {
            scope: e10.__scopeMenu,
            children: (0, y.jsx)(er, {
              id: d2.contentId,
              "aria-labelledby": d2.triggerId,
              ...c2,
              ref: p2,
              align: i2,
              side: "rtl" === s2.dir ? "left" : "right",
              disableOutsidePointerEvents: false,
              disableOutsideScroll: false,
              trapFocus: false,
              onOpenAutoFocus: (e11) => {
                s2.isUsingKeyboardRef.current && f2.current?.focus(), e11.preventDefault();
              },
              onCloseAutoFocus: (e11) => e11.preventDefault(),
              onFocusOutside: (0, o.mK)(e10.onFocusOutside, (e11) => {
                e11.target !== d2.trigger && l2.onOpenChange(false);
              }),
              onEscapeKeyDown: (0, o.mK)(e10.onEscapeKeyDown, (e11) => {
                s2.onClose(), e11.preventDefault();
              }),
              onKeyDown: (0, o.mK)(e10.onKeyDown, (e11) => {
                let n3 = e11.currentTarget.contains(e11.target), r3 = k[s2.dir].includes(e11.key);
                n3 && r3 && (l2.onOpenChange(false), d2.trigger?.focus(), e11.preventDefault());
              })
            })
          })
        })
      });
    }, "MenuSubContent")
  );
  function eD(e10) {
    return e10 ? "open" : "closed";
  }
  function eI(e10) {
    return "indeterminate" === e10;
  }
  function eK(e10) {
    return eI(e10) ? "indeterminate" : e10 ? "checked" : "unchecked";
  }
  function e_(e10) {
    let n2 = document.activeElement;
    for (let r2 of e10)
      if (r2 === n2 || (r2.focus(), document.activeElement !== n2)) return;
  }
  function ek(e10, n2) {
    return e10.map((r2, t2) => e10[(n2 + t2) % e10.length]);
  }
  function eP(e10, n2, r2) {
    let t2 = n2.length > 1 && Array.from(n2).every((e11) => e11 === n2[0]) ? n2[0] : n2, o2 = r2 ? e10.indexOf(r2) : -1, u2 = ek(e10, Math.max(o2, 0));
    1 === t2.length && (u2 = u2.filter((e11) => e11 !== r2));
    let a2 = u2.find((e11) => e11.toLowerCase().startsWith(t2.toLowerCase()));
    return a2 !== r2 ? a2 : void 0;
  }
  function eS(e10, n2) {
    let { x: r2, y: t2 } = e10, o2 = false;
    for (let e11 = 0, u2 = n2.length - 1; e11 < n2.length; u2 = e11++) {
      let a2 = n2[e11], i2 = n2[u2], c2 = a2.x, l2 = a2.y, s2 = i2.x, d2 = i2.y;
      l2 > t2 != d2 > t2 && r2 < (s2 - c2) * (t2 - l2) / (d2 - l2) + c2 && (o2 = !o2);
    }
    return o2;
  }
  function eE(e10, n2) {
    return !!n2 && eS({ x: e10.clientX, y: e10.clientY }, n2);
  }
  function eT(e10) {
    return (n2) => "mouse" === n2.pointerType ? e10(n2) : void 0;
  }
  j(eD, "getOpenState"), j(eI, "isIndeterminate"), j(eK, "getCheckedState"), j(e_, "focusFirst"), j(ek, "wrapArray"), j(eP, "getNextMatch"), j(eS, "isPointInPolygon"), j(eE, "isPointerInGraceArea"), j(eT, "whenMouse");
  var eF = Object.defineProperty, eO = (e10, n2) => eF(e10, "name", { value: n2, configurable: true }), eL = "DropdownMenu", [eA, eG] = (0, a.A)(eL, [O]), eB = O(), [eU, eV] = eA(eL), eN = eO((e10) => {
    let {
      __scopeDropdownMenu: n2,
      children: r2,
      dir: o2,
      open: u2,
      defaultOpen: a2,
      onOpenChange: c2,
      modal: l2 = true
    } = e10, s2 = eB(n2), d2 = t.useRef(null), [f2, p2] = (0, i.i)({
      prop: u2,
      defaultProp: a2 ?? false,
      onChange: c2,
      caller: eL
    });
    return (0, y.jsx)(eU, {
      scope: n2,
      triggerId: (0, g.B)(),
      triggerRef: d2,
      contentId: (0, g.B)(),
      open: f2,
      onOpenChange: p2,
      onOpenToggle: t.useCallback(() => p2((e11) => !e11), [p2]),
      modal: l2,
      children: (0, y.jsx)(N, {
        ...s2,
        open: f2,
        onOpenChange: p2,
        dir: o2,
        modal: l2,
        children: r2
      })
    });
  }, "DropdownMenu"), eH = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, disabled: t2 = false, ...a2 } = e10, i2 = eV("DropdownMenuTrigger", r2), l2 = eB(r2), s2 = (0, u.s)(n2, i2.triggerRef);
      return (0, y.jsx)(H, {
        asChild: true,
        ...l2,
        children: (0, y.jsx)(c.sG.button, {
          type: "button",
          id: i2.triggerId,
          "aria-haspopup": "menu",
          "aria-expanded": i2.open,
          "aria-controls": i2.open ? i2.contentId : void 0,
          "data-state": i2.open ? "open" : "closed",
          "data-disabled": t2 ? "" : void 0,
          disabled: t2,
          ...a2,
          ref: s2,
          onPointerDown: (0, o.mK)(e10.onPointerDown, (e11) => {
            !t2 && 0 === e11.button && false === e11.ctrlKey && (i2.onOpenToggle(), i2.open || e11.preventDefault());
          }),
          onKeyDown: (0, o.mK)(e10.onKeyDown, (e11) => {
            !t2 && (["Enter", " "].includes(e11.key) && i2.onOpenToggle(), "ArrowDown" === e11.key && i2.onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(e11.key) && e11.preventDefault());
          })
        })
      });
    }, "DropdownMenuTrigger")
  ), eq = eO((e10) => {
    let { __scopeDropdownMenu: n2, ...r2 } = e10, t2 = eB(n2);
    return (0, y.jsx)(Z, { ...t2, ...r2 });
  }, "DropdownMenuPortal"), eX = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, ...u2 } = e10, a2 = eV("DropdownMenuContent", r2), i2 = eB(r2), c2 = t.useRef(false);
      return (0, y.jsx)(Q, {
        id: a2.contentId,
        "aria-labelledby": a2.triggerId,
        ...i2,
        ...u2,
        ref: n2,
        onCloseAutoFocus: (0, o.mK)(e10.onCloseAutoFocus, (e11) => {
          c2.current || a2.triggerRef.current?.focus(), c2.current = false, e11.preventDefault();
        }),
        onInteractOutside: (0, o.mK)(e10.onInteractOutside, (e11) => {
          let n3 = e11.detail.originalEvent, r3 = 0 === n3.button && true === n3.ctrlKey, t2 = 2 === n3.button || r3;
          (!a2.modal || t2) && (c2.current = true);
        }),
        style: {
          ...e10.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      });
    }, "DropdownMenuContent")
  ), ez = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, ...t2 } = e10, o2 = eB(r2);
      return (0, y.jsx)(et, { ...o2, ...t2, ref: n2 });
    }, "DropdownMenuGroup")
  ), eZ = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, ...t2 } = e10, o2 = eB(r2);
      return (0, y.jsx)(eo, { ...o2, ...t2, ref: n2 });
    }, "DropdownMenuLabel")
  ), eY = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, ...t2 } = e10, o2 = eB(r2);
      return (0, y.jsx)(ei, { ...o2, ...t2, ref: n2 });
    }, "DropdownMenuItem")
  ), eJ = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, ...t2 } = e10, o2 = eB(r2);
      return (0, y.jsx)(el, { ...o2, ...t2, ref: n2 });
    }, "DropdownMenuCheckboxItem")
  ), eW = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, ...t2 } = e10, o2 = eB(r2);
      return (0, y.jsx)(ef, { ...o2, ...t2, ref: n2 });
    }, "DropdownMenuRadioGroup")
  ), eQ = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, ...t2 } = e10, o2 = eB(r2);
      return (0, y.jsx)(ep, { ...o2, ...t2, ref: n2 });
    }, "DropdownMenuRadioItem")
  ), e$ = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, ...t2 } = e10, o2 = eB(r2);
      return (0, y.jsx)(ew, { ...o2, ...t2, ref: n2 });
    }, "DropdownMenuItemIndicator")
  ), e0 = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, ...t2 } = e10, o2 = eB(r2);
      return (0, y.jsx)(ev, { ...o2, ...t2, ref: n2 });
    }, "DropdownMenuSeparator")
  ), e1 = eO((e10) => {
    let {
      __scopeDropdownMenu: n2,
      children: r2,
      open: t2,
      onOpenChange: o2,
      defaultOpen: u2
    } = e10, a2 = eB(n2), [c2, l2] = (0, i.i)({
      prop: t2,
      defaultProp: u2 ?? false,
      onChange: o2,
      caller: "DropdownMenuSub"
    });
    return (0, y.jsx)(eC, { ...a2, open: c2, onOpenChange: l2, children: r2 });
  }, "DropdownMenuSub"), e9 = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, ...t2 } = e10, o2 = eB(r2);
      return (0, y.jsx)(eR, { ...o2, ...t2, ref: n2 });
    }, "DropdownMenuSubTrigger")
  ), e5 = t.forwardRef(
    eO(function(e10, n2) {
      let { __scopeDropdownMenu: r2, ...t2 } = e10, o2 = eB(r2);
      return (0, y.jsx)(ej, {
        ...o2,
        ...t2,
        ref: n2,
        style: {
          ...e10.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      });
    }, "DropdownMenuSubContent")
  ), e7 = eN, e2 = eH, e3 = eq, e4 = eX, e8 = ez, e6 = eZ, ne = eY, nn = eJ, nr = eW, nt = eQ, no = e$, nu = e0, na = e1, ni = e9, nc = e5;
}

__m(__module,__exports,__require);
}