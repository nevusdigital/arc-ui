/* response-feedback (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(17648, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { ResponseFeedbackDemo: () => z, default: () => B });
  var r = n(95155), a = n(12115), s = n(92171), i = n(25354), o = n(80642), l = n(18310), c = n(62818), d = n(70105), u = n(35484), h = n(9005), p = n(92298), f = n(51288), m = n(73474), b = n(36690), _ = n(7770);
  function x({ title: e2 = "Claude", ...t2 }) {
    return (0, r.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "#D97757",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, r.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  var y = n(26974), k = n.n(y);
  let g = ["Inaccurate", "Not helpful", "Too long", "Unsafe", "Other"], w = ["Accurate", "Easy to follow", "Good examples", "Saved me time"], v = (...e2) => e2.filter(Boolean).join(" "), j = { type: "spring", visualDuration: 0.24, bounce: 0 }, N = [..._.T.ease.standard];
  function R({ reduced: e2 }) {
    return (0, r.jsx)("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, r.jsx)(i.PY1.path, {
        d: "M3.25 8.5 6.5 11.75 12.75 4.75",
        initial: !e2 && { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 0.28, ease: N, delay: 0.06 }
      })
    });
  }
  function S({
    kind: e2,
    active: t2,
    expanded: n2,
    controls: a2,
    disabled: s2,
    buttonRef: i2,
    onPress: o2
  }) {
    let l2 = "up" === e2 ? c.A : d.A, u2 = "up" === e2 ? "Good response" : "Bad response";
    return (0, r.jsx)(b.m, {
      content: u2,
      children: (0, r.jsx)("button", {
        ref: i2,
        type: "button",
        className: k().iconButton,
        "data-active": t2 || void 0,
        "aria-pressed": t2,
        "aria-label": u2,
        "aria-expanded": n2,
        "aria-controls": n2 ? a2 : void 0,
        disabled: s2,
        onClick: o2,
        children: (0, r.jsxs)("span", {
          className: k().thumb,
          "aria-hidden": "true",
          children: [
            (0, r.jsx)(l2, {
              className: k().thumbOutline,
              size: 16,
              strokeWidth: 1.75
            }),
            (0, r.jsx)(l2, {
              className: k().thumbFill,
              size: 16,
              strokeWidth: 1.75,
              fill: "currentColor"
            })
          ]
        })
      })
    });
  }
  function C({ id: e2, children: t2, className: n2, reduced: a2 }) {
    return (0, r.jsx)("div", {
      className: v(k().swap, n2),
      children: (0, r.jsx)(o.N, {
        initial: false,
        mode: "popLayout",
        children: (0, r.jsx)(
          i.PY1.div,
          {
            className: k().swapItem,
            initial: { opacity: 0, y: 2 * !a2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: { duration: 0.1 } },
            transition: { duration: 0.16, ease: N },
            children: t2
          },
          e2
        )
      })
    });
  }
  function T({
    messageId: e2,
    rating: t2,
    defaultRating: n2 = null,
    onRatingChange: c2,
    onFeedback: d2,
    negativeReasons: p2 = g,
    positiveReasons: m2 = w,
    allowComment: b2 = true,
    commentPlaceholder: _2 = "Add details (optional)",
    commentMaxLength: x2 = 1e3,
    privacyNote: y2 = "Shares this reply for review",
    thanksMessage: A2,
    thanksDuration: E2 = 1600,
    leading: L2,
    trailing: P2,
    disabled: O2 = false,
    className: I2
  }) {
    let z2, B2, M = (0, l.I)() ?? false, F = (0, a.useId)(), D = `${F}-panel`, W = `${F}-heading`, [Y, H] = (0, a.useState)(n2), $ = void 0 !== t2 ? t2 : Y, [K, q] = (0, a.useState)(false), [X, Z] = (0, a.useState)("down"), [G, U] = (0, a.useState)("idle"), [V, J] = (0, a.useState)([]), [Q, ee] = (0, a.useState)(""), [et, en] = (0, a.useState)(""), er = (0, a.useRef)(null), ea = (0, a.useRef)(null), es = (0, a.useRef)(null), ei = (0, a.useRef)(null), eo = (0, a.useRef)(null), el = (0, a.useRef)(null), ec = (0, a.useRef)(null), ed = (0, a.useRef)(null), eu = (0, a.useRef)(void 0), eh = (0, a.useRef)(false), ep = (0, a.useRef)(false), { outer: ef, inner: em } = (z2 = (0, a.useRef)(null), B2 = (0, a.useRef)(null), (0, a.useEffect)(() => {
      let e3, t3 = z2.current, n3 = B2.current;
      if (!t3 || !n3 || "u" < typeof ResizeObserver) return;
      let r2 = n3.offsetHeight, a2 = n3.offsetWidth, i2 = () => {
        t3.style.height = "", e3 = void 0;
      }, o2 = new ResizeObserver(() => {
        let o3 = n3.offsetHeight, l2 = n3.offsetWidth, c3 = l2 !== a2;
        if (a2 = l2, o3 === r2) return;
        let d3 = e3 ? t3.getBoundingClientRect().height : r2;
        (r2 = o3, e3?.stop(), M || c3) ? i2() : e3 = (0, s.i)(
          t3,
          { height: [d3, o3] },
          { ...j, onComplete: i2 }
        );
      });
      return o2.observe(n3), () => {
        o2.disconnect(), e3?.stop();
      };
    }, [M]), { outer: z2, inner: B2 }), eb = !d2, e_ = A2 ?? (eb ? "Simulated, nothing was sent." : "It helps improve future replies."), ex = "down" === X ? p2 : m2;
    (0, a.useEffect)(
      () => () => {
        ec.current?.abort(), ed.current?.abort(), window.clearTimeout(eu.current);
      },
      []
    ), (0, a.useEffect)(() => {
      K && eh.current && (eh.current = false, (es.current ?? ei.current)?.focus({ preventScroll: true }));
    }, [K, X]), (0, a.useEffect)(() => {
      "thanks" === G && ep.current && (ep.current = false, eo.current?.focus({ preventScroll: true }));
    }, [G]);
    let ey = (e3) => "up" === e3 ? er : ea, ek = (t3) => {
      if (H(t3), c2?.(t3), ec.current?.abort(), !d2) return;
      let n3 = new AbortController();
      ec.current = n3, Promise.resolve().then(
        () => d2(
          {
            stage: "rating",
            rating: t3,
            reasons: [],
            comment: "",
            messageId: e2
          },
          { signal: n3.signal }
        )
      ).catch(() => {
        n3.signal.aborted || (H($), c2?.($), en("Couldn't save your rating. Try again."));
      });
    }, eg = (e3) => {
      ed.current?.abort(), window.clearTimeout(eu.current), q(false), e3 && ey(X).current?.focus({ preventScroll: true });
    }, ew = (e3, t3) => {
      if (ed.current?.abort(), window.clearTimeout(eu.current), $ === e3) {
        ek(null), q(false), en(
          eb ? "Rating removed. Simulated, nothing was sent." : "Rating removed."
        );
        return;
      }
      ek(e3);
      let n3 = "down" === e3 ? p2.length > 0 || b2 : m2.length > 0;
      Z(e3), J([]), ee(""), U("idle"), q(n3), eh.current = n3 && "down" === e3 && 0 === t3.detail;
      let r2 = "up" === e3 ? "Marked as a good response." : "Marked as a bad response.";
      en(
        `${r2}${n3 ? "down" === e3 ? " Tell us what went wrong." : " Tell us what was good, or skip." : ""}${eb ? " Simulated, nothing was sent." : ""}`
      );
    }, ev = V.length > 0 || Q.trim().length > 0, ej = (t3) => {
      var n3;
      if ("sending" === G || !ev) return;
      window.clearTimeout(eu.current), ed.current?.abort();
      let r2 = new AbortController();
      ed.current = r2;
      let a2 = {
        stage: "details",
        rating: X,
        reasons: V,
        comment: Q.trim(),
        messageId: e2
      };
      U("sending"), en("Sending feedback."), (d2 ? Promise.resolve().then(() => d2(a2, { signal: r2.signal })) : (n3 = r2.signal, new Promise((e3, t4) => {
        let r3 = window.setTimeout(e3, 700);
        n3.addEventListener(
          "abort",
          () => {
            window.clearTimeout(r3), t4(new DOMException("Aborted", "AbortError"));
          },
          { once: true }
        );
      }))).then(
        () => {
          r2.signal.aborted || (ep.current = t3 || !!el.current?.contains(document.activeElement), U("thanks"), en(
            `Thanks for the feedback. ${"string" == typeof e_ ? e_ : ""}`.trim()
          ), eu.current = window.setTimeout(() => {
            let e3 = !!el.current?.contains(document.activeElement);
            q(false), e3 && ey(X).current?.focus({ preventScroll: true });
          }, E2));
        },
        () => {
          r2.signal.aborted || (U("error"), en("Couldn't send your feedback. Try again."));
        }
      );
    }, eN = ex.length ? (0, r.jsx)("div", {
      className: k().chips,
      role: "group",
      "aria-label": "down" === X ? "Reasons" : "What was good",
      children: ex.map(
        (e3, t3) => (0, r.jsx)(
          "button",
          {
            ref: 0 === t3 ? es : void 0,
            type: "button",
            className: k().chip,
            "aria-pressed": V.includes(e3),
            disabled: "sending" === G,
            onClick: (t4) => {
              let n3 = !V.includes(e3);
              "sending" !== G && ("error" === G && U("idle"), J(
                (t5) => t5.includes(e3) ? t5.filter((t6) => t6 !== e3) : ex.filter((n4) => n4 === e3 || t5.includes(n4))
              )), n3 && "Other" === e3 && t4.detail > 0 && ei.current?.focus({ preventScroll: true });
            },
            children: e3
          },
          e3
        )
      )
    }) : null, eR = (0, r.jsxs)("span", {
      className: k().error,
      children: [
        (0, r.jsx)(u.A, {
          size: 14,
          strokeWidth: 1.75,
          "aria-hidden": "true"
        }),
        (0, r.jsx)("span", {
          className: k().errorText,
          children: "Couldn't send"
        })
      ]
    }), eS = (0, r.jsxs)("div", {
      className: k().form,
      role: "group",
      "aria-labelledby": W,
      children: [
        (0, r.jsxs)("div", {
          className: k().head,
          children: [
            (0, r.jsx)("span", {
              id: W,
              className: k().heading,
              children: "What went wrong?"
            }),
            (0, r.jsx)("button", {
              type: "button",
              className: k().close,
              "aria-label": "Close feedback",
              onClick: (e3) => eg(0 === e3.detail),
              children: (0, r.jsx)(h.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        eN,
        b2 ? (0, r.jsx)("textarea", {
          ref: ei,
          className: k().comment,
          value: Q,
          maxLength: x2,
          rows: 2,
          "aria-label": "Feedback details",
          placeholder: V.includes("Other") ? "Tell us what went wrong" : _2,
          onChange: (e3) => {
            ee(e3.target.value), "error" === G && U("idle");
          },
          onKeyDown: (e3) => {
            "Enter" === e3.key && (e3.metaKey || e3.ctrlKey) && (e3.preventDefault(), ej(true));
          }
        }) : null,
        (0, r.jsxs)("div", {
          className: k().footer,
          children: [
            (0, r.jsx)(C, {
              id: "error" === G ? "error" : "note",
              reduced: M,
              className: "error" === G ? void 0 : k().noteCell,
              children: "error" === G ? eR : (0, r.jsx)("span", { className: k().note, children: y2 })
            }),
            (0, r.jsxs)("div", {
              className: k().footActions,
              children: [
                (0, r.jsx)(f.$, {
                  variant: "ghost",
                  size: "sm",
                  className: v(k().action, k().cancel),
                  onClick: (e3) => eg(0 === e3.detail),
                  children: "Cancel"
                }),
                (0, r.jsx)(f.$, {
                  variant: "primary",
                  size: "sm",
                  className: v(k().action, k().submit),
                  loading: "sending" === G,
                  disabled: !ev && "sending" !== G,
                  onClick: (e3) => ej(0 === e3.detail),
                  children: "error" === G ? "Try again" : "Submit"
                })
              ]
            })
          ]
        })
      ]
    }), eC = (0, r.jsxs)("div", {
      className: k().form,
      role: "group",
      "aria-label": "What was good?",
      children: [
        (0, r.jsxs)("div", {
          className: k().head,
          children: [
            (0, r.jsx)(C, {
              id: "error" === G ? "error" : "label",
              reduced: M,
              children: "error" === G ? eR : (0, r.jsx)("span", {
                className: k().heading,
                "aria-hidden": "true",
                children: "What was good?"
              })
            }),
            (0, r.jsx)(f.$, {
              variant: V.length ? "primary" : "ghost",
              size: "sm",
              className: v(
                k().action,
                k().headAction,
                V.length > 0 && k().submit
              ),
              loading: "sending" === G,
              onClick: (e3) => V.length ? ej(0 === e3.detail) : eg(0 === e3.detail),
              children: "error" === G ? "Try again" : V.length ? "Send" : "Skip"
            })
          ]
        }),
        eN
      ]
    }), eT = (0, r.jsxs)("div", {
      ref: eo,
      className: k().thanks,
      tabIndex: -1,
      children: [
        (0, r.jsx)("span", {
          className: k().thanksIcon,
          children: (0, r.jsx)(R, { reduced: M })
        }),
        (0, r.jsx)("span", {
          className: k().thanksTitle,
          children: "Thanks for the feedback"
        }),
        (0, r.jsx)("span", { className: k().muted, children: e_ })
      ]
    }), eA = "thanks" === G ? "thanks" : X;
    return (0, r.jsxs)("div", {
      className: v(k().feedback, I2),
      "data-rating": $ ?? void 0,
      children: [
        (0, r.jsxs)("div", {
          className: k().row,
          children: [
            (0, r.jsxs)("div", {
              className: k().actions,
              children: [
                L2,
                (0, r.jsx)(S, {
                  kind: "up",
                  active: "up" === $,
                  expanded: K && "up" === X,
                  controls: D,
                  disabled: O2,
                  buttonRef: er,
                  onPress: (e3) => ew("up", e3)
                }),
                (0, r.jsx)(S, {
                  kind: "down",
                  active: "down" === $,
                  expanded: K && "down" === X,
                  controls: D,
                  disabled: O2,
                  buttonRef: ea,
                  onPress: (e3) => ew("down", e3)
                })
              ]
            }),
            P2 ? (0, r.jsx)("div", { className: k().trailing, children: P2 }) : null
          ]
        }),
        (0, r.jsx)(o.N, {
          initial: false,
          children: K ? (0, r.jsx)(
            i.PY1.div,
            {
              id: D,
              ref: el,
              className: k().panelClip,
              onKeyDown: (e3) => {
                "Escape" === e3.key && (e3.stopPropagation(), eg(true));
              },
              initial: { height: M ? "auto" : 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: M ? "auto" : 0, opacity: 0 },
              transition: M ? { duration: 0.12 } : { height: j, opacity: { duration: 0.16, ease: N } },
              children: (0, r.jsx)("div", {
                className: k().panelPad,
                children: (0, r.jsx)("div", {
                  ref: ef,
                  className: k().panel,
                  children: (0, r.jsx)("div", {
                    ref: em,
                    className: k().panelInner,
                    children: (0, r.jsx)(o.N, {
                      initial: false,
                      mode: "popLayout",
                      children: (0, r.jsx)(
                        i.PY1.div,
                        {
                          className: k().panelContent,
                          initial: { opacity: 0, y: 2 * !M },
                          animate: { opacity: 1, y: 0 },
                          exit: {
                            opacity: 0,
                            transition: { duration: 0.1 }
                          },
                          transition: {
                            duration: 0.16,
                            ease: N,
                            delay: 0.04
                          },
                          children: "thanks" === G ? eT : "down" === X ? eS : eC
                        },
                        eA
                      )
                    })
                  })
                })
              })
            },
            "panel"
          ) : null
        }),
        (0, r.jsx)("span", {
          className: k().srOnly,
          role: "status",
          "aria-live": "polite",
          children: et
        })
      ]
    });
  }
  let A = `Most likely the planner now prefers the new index for ORDER BY created_at, then filters status = 'paid' row by row. With 4.2M orders and only 3% paid, that walks most of the table.

- Run EXPLAIN (ANALYZE, BUFFERS) and look for an Index Scan on orders_created_at_idx with a large Rows Removed by Filter.
- Replace it with a composite index on (status, created_at), so the filter and the sort use one index.
- Run ANALYZE orders afterwards, so the planner sees fresh statistics.`;
  function E() {
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsxs)("p", {
          children: [
            "Most likely the planner now prefers the new index for ",
            (0, r.jsx)("code", { children: "ORDER BY created_at" }),
            ", then filters ",
            (0, r.jsx)("code", { children: "status = 'paid'" }),
            " row by row. With 4.2M orders and only 3% paid, that walks most of the table."
          ]
        }),
        (0, r.jsxs)("ul", {
          children: [
            (0, r.jsxs)("li", {
              children: [
                "Run ",
                (0, r.jsx)("code", { children: "EXPLAIN (ANALYZE, BUFFERS)" }),
                " and look for an Index Scan on ",
                (0, r.jsx)("code", { children: "orders_created_at_idx" }),
                " with a large Rows Removed by Filter."
              ]
            }),
            (0, r.jsxs)("li", {
              children: [
                "Replace it with a composite index on ",
                (0, r.jsx)("code", { children: "(status, created_at)" }),
                ", so the filter and the sort use one index."
              ]
            }),
            (0, r.jsxs)("li", {
              children: [
                "Run ",
                (0, r.jsx)("code", { children: "ANALYZE orders" }),
                " afterwards, so the planner sees fresh statistics."
              ]
            })
          ]
        })
      ]
    });
  }
  function L({
    model: e2 = { name: "Claude Sonnet 5.5" },
    prompt: t2,
    children: n2,
    copyText: a2,
    onRegenerate: s2,
    className: i2,
    ...o2
  }) {
    let l2 = void 0 === a2 ? void 0 === n2 ? A : void 0 : a2 ?? void 0, c2 = (0, r.jsxs)(r.Fragment, {
      children: [
        l2 ? (0, r.jsx)(m.CopyButton, {
          value: l2,
          label: "Copy reply",
          iconOnly: true,
          variant: "plain",
          className: k().copy
        }) : null,
        s2 ? (0, r.jsx)(b.m, {
          content: "Regenerate",
          children: (0, r.jsx)("button", {
            type: "button",
            className: k().iconButton,
            "aria-label": "Regenerate reply",
            onClick: s2,
            disabled: o2.disabled,
            children: (0, r.jsx)(p.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            })
          })
        }) : null
      ]
    });
    return (0, r.jsxs)("article", {
      className: v(k().card, i2),
      "aria-label": `Reply from ${e2.name}`,
      children: [
        null !== t2 ? (0, r.jsx)("div", {
          className: k().prompt,
          children: (0, r.jsx)("p", {
            className: k().bubble,
            children: t2 ?? "Why did our orders query get slower after we added an index on created_at?"
          })
        }) : null,
        (0, r.jsxs)("div", {
          className: k().reply,
          children: [
            (0, r.jsxs)("div", {
              className: k().author,
              children: [
                (0, r.jsx)("span", {
                  className: k().mark,
                  "aria-hidden": "true",
                  children: e2.mark ?? (0, r.jsx)(x, { width: 16, height: 16 })
                }),
                (0, r.jsx)("span", {
                  className: k().modelName,
                  children: e2.name
                })
              ]
            }),
            (0, r.jsx)("div", {
              className: k().body,
              children: n2 ?? (0, r.jsx)(E, {})
            }),
            (0, r.jsx)(T, { ...o2, leading: c2 })
          ]
        })
      ]
    });
  }
  var P = n(50680), O = n(72745), I = n.n(O);
  function z() {
    let [e2, t2] = (0, a.useState)(false), n2 = (0, a.useRef)(false), s2 = (e3) => {
      n2.current = e3, t2(e3);
    }, i2 = async (e3, { signal: t3 }) => {
      if ("rating" !== e3.stage && (await new Promise((e4, n3) => {
        let r2 = window.setTimeout(e4, 700);
        t3.addEventListener(
          "abort",
          () => {
            window.clearTimeout(r2), n3(new DOMException("Aborted", "AbortError"));
          },
          { once: true }
        );
      }), n2.current))
        throw s2(false), Error("Simulated failure");
    };
    return (0, r.jsxs)("div", {
      className: I().demo,
      children: [
        (0, r.jsx)(L, {
          onFeedback: i2,
          thanksMessage: "Simulated, nothing was sent."
        }),
        (0, r.jsx)("div", {
          className: I().controls,
          children: (0, r.jsx)(P.d, {
            label: "Fail the next send",
            checked: e2,
            onCheckedChange: s2
          })
        })
      ]
    });
  }
  let B = z;
}

__m(__module,__exports,__require);
});
A.regCss(26974, ".card{--rf-mono:ui-monospace,\"SFMono-Regular\",Menlo,Consolas,\"Liberation Mono\",monospace;container-type:inline-size;display:grid;width:100%;max-width:600px;min-width:0;gap:var(--space-4,16px);border:1px solid var(--border);border-radius:var(--radius-panel);padding:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n@container (min-width: 480px){.card{padding:24px}\n@supports not (container-type:inline-size){.card{padding:20px}\n.card .feedback{margin-top:4px}\n.card .panel{background:color-mix(in oklab,var(--surface-muted) 40%,var(--surface))}\n.prompt{display:flex;justify-content:flex-end}\n.bubble{max-width:min(85%,440px);margin:0;border-radius:var(--radius-control);padding:8px 12px;background:var(--surface-muted);color:var(--foreground);line-height:20px;overflow-wrap:anywhere}\n.reply{display:grid;min-width:0;gap:8px}\n.author{display:flex;min-width:0;align-items:center;gap:8px;height:20px}\n.mark{display:grid;flex:none;width:16px;height:16px;place-items:center}\n.mark svg{display:block;width:16px;height:16px}\n.modelName{overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.body{display:grid;min-width:0;gap:8px;color:var(--foreground);line-height:22px;overflow-wrap:anywhere}\n.body ol,.body p,.body ul{margin:0}\n.body ol,.body ul{display:grid;gap:4px;padding-left:20px}\n.body ul{list-style:disc}\n.body ol{list-style:decimal}\n.body li::marker{color:var(--text-muted)}\n.body code{border-radius:6px;padding:1px 5px;background:var(--surface-muted);font-family:var(--rf-mono);font-size:.86em}\n.feedback{container-type:inline-size;min-width:0}\n.row{display:flex;min-height:var(--control-height-sm);align-items:center;justify-content:space-between;gap:8px}\n.actions{display:flex;align-items:center;gap:2px;margin-left:calc((16px - var(--control-height-sm)) / 2)}\n.trailing{min-width:0;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.close,.iconButton{position:relative;display:inline-grid;flex:none;width:var(--control-height-sm);height:var(--control-height-sm);place-items:center;border:0;border-radius:var(--radius-control);padding:0;background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.close:active,.iconButton:active:not(:disabled){transform:scale(.94);transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-instant);transition-timing-function:var(--ease-standard)}\n.iconButton:disabled{color:var(--text-muted);cursor:default;opacity:.6}\n.iconButton[data-active]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.close:hover,.iconButton:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}\n.iconButton[data-active] .thumbFill{opacity:1}\n@media (prefers-reduced-motion:reduce){.chip,.close,.iconButton{transition-property:background-color,border-color,color}\n.chip:active:not(:disabled),.close:active,.iconButton:active:not(:disabled){transform:none}\n.close{width:28px;height:28px;margin:-4px -6px -4px 0;border-radius:10px;color:var(--text-muted)}\n.copy.copy{flex:none}\n.thumb{display:grid;width:16px;height:16px}\n.thumb>svg{display:block;grid-area:1/1}\n.thumbFill{opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.panelClip{overflow:hidden}\n.panelPad{padding-top:8px}\n.panel{overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface)}\n.panelInner{position:relative;padding:12px}\n.panelContent{min-width:0}\n.form{display:grid;gap:12px}\n.head{display:flex;align-items:center;justify-content:space-between;gap:8px;height:20px}\n.heading{font-weight:500;line-height:20px}\n.chips{display:flex;flex-wrap:wrap;gap:8px}\n.chip{display:inline-flex;height:28px;align-items:center;border:1px solid var(--border);border-radius:999px;padding:0 12px;background:var(--surface);color:var(--text-secondary);font:inherit;font-size:var(--text-xs);line-height:1;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.chip:active:not(:disabled){transform:scale(.96);transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-fast),var(--duration-instant)}\n.chip[aria-pressed=true]{border-color:var(--foreground);background:var(--foreground);color:var(--background)}\n.chip:disabled{cursor:default}\n@media (hover:hover) and (pointer:fine){.chip:hover:not(:disabled):not([aria-pressed=true]){border-color:var(--border-strong,var(--border));background:var(--surface-muted);color:var(--foreground)}\n@media (pointer:coarse){.chip{height:32px}\n.comment{display:block;width:100%;height:72px;min-height:72px;box-sizing:border-box;resize:none;border:1px solid var(--border);border-radius:12px;padding:8px 12px;background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:20px;transition:border-color var(--duration-fast) var(--ease-standard)}\n.comment::placeholder{color:var(--text-muted)}\n.comment:focus{border-color:var(--border-strong,var(--border))}\n.footer{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:8px}\n.footActions{display:flex;align-items:center;gap:8px}\n.action.action{min-height:32px;font-size:var(--text-sm)}\n.submit.submit{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}\n.submit.submit:disabled{border-color:transparent;background:var(--surface-muted);color:var(--text-muted);opacity:1}\n.swap{position:relative;display:grid;min-width:0;min-height:20px;align-items:center}\n.swapItem{display:flex;min-width:0;align-items:center;overflow:hidden}\n.note{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.error{display:inline-flex;min-width:0;max-width:100%;align-items:center;gap:6px;color:var(--danger);font-size:var(--text-xs);white-space:nowrap}\n.error svg{flex:none}\n.errorText{min-width:0;overflow:hidden;text-overflow:ellipsis}\n@container (max-width: 400px){.noteCell{visibility:hidden}\n.cancel.cancel{display:none}\n.headAction.headAction{margin-block:-6px}\n.muted{color:var(--text-muted);font-size:var(--text-xs)}\n.thanks{display:flex;flex-wrap:wrap;min-height:32px;align-items:center;column-gap:8px;row-gap:2px;padding-left:24px;position:relative}\n.thanks:focus{outline:none}\n.thanksIcon{position:absolute;top:8px;left:0;display:grid;width:16px;height:16px;place-items:center;color:var(--success)}\n.thanksTitle{font-weight:500;line-height:20px}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}", {"card":"card","feedback":"feedback","panel":"panel","prompt":"prompt","bubble":"bubble","reply":"reply","author":"author","mark":"mark","modelName":"modelName","body":"body","row":"row","actions":"actions","trailing":"trailing","close":"close","iconButton":"iconButton","thumbFill":"thumbFill","chip":"chip","copy":"copy","thumb":"thumb","panelClip":"panelClip","panelPad":"panelPad","panelInner":"panelInner","panelContent":"panelContent","form":"form","head":"head","heading":"heading","chips":"chips","comment":"comment","footer":"footer","footActions":"footActions","action":"action","submit":"submit","swap":"swap","swapItem":"swapItem","note":"note","error":"error","errorText":"errorText","noteCell":"noteCell","cancel":"cancel","headAction":"headAction","muted":"muted","thanks":"thanks","thanksIcon":"thanksIcon","thanksTitle":"thanksTitle","srOnly":"srOnly"});
A.reg(62818, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "thumbs-up",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
          key: "emmmcr"
        }
      ],
      ["path", { d: "M7 10v12", key: "1qc93n" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(70105, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "thumbs-down",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
          key: "m61m77"
        }
      ],
      ["path", { d: "M17 14V2", key: "8ymqnk" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(72745, ".demo{display:flex;flex-direction:column;align-items:center;gap:16px;width:100%}\n.controls{display:flex;justify-content:center;color:var(--text-secondary);font-size:var(--text-sm)}", {"demo":"demo","controls":"controls"});
A.cssFor("response-feedback", [26974,72745]);
A.item("response-feedback", {entry:17648, export:"ResponseFeedbackDemo", kind:"component", tier:"pro", unresolved:[]});
})();