/* task-breakdown (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(149, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    TaskBreakdown: () => V,
    default: () => G,
    demoGoal: () => N,
    demoOwners: () => v,
    demoTasks: () => $
  });
  var n = a(95155), s = a(12115), i = a(80642), r = a(25354), l = a(44952), o = a(56255), d = a(18310), c = a(29298), u = a(35484), m = a(64577), p = a(9005), h = a(92298), _ = a(18986), g = a(58274), b = a(38158), k = a(64962), f = a(86272), w = a(40852), x = a(16420), y = a(51288), j = a(52898);
  let v = [
    {
      id: "andre",
      name: "Andre Williams",
      avatar: "media/people/andre-williams.svg"
    },
    {
      id: "daniel",
      name: "Daniel Kim",
      avatar: "media/people/daniel-kim.svg"
    },
    {
      id: "olivia",
      name: "Olivia Bennett",
      avatar: "media/people/olivia-bennett.svg"
    },
    {
      id: "marcus",
      name: "Marcus Johnson",
      avatar: "media/people/marcus-johnson.svg"
    },
    {
      id: "chloe",
      name: "Chloe Nguyen",
      avatar: "media/people/chloe-nguyen.svg"
    },
    {
      id: "ava",
      name: "Ava Mitchell",
      avatar: "media/people/ava-mitchell.svg"
    },
    {
      id: "sofia",
      name: "Sofia Ramirez",
      avatar: "media/people/sofia-ramirez.svg"
    }
  ], N = "Launch usage-based billing by Dec 1", $ = [
    {
      id: "t1",
      title: "Define billable metrics and price tiers with finance",
      estimate: 2,
      ownerId: "andre"
    },
    {
      id: "t2",
      title: "Emit usage events from the API gateway",
      estimate: 5,
      ownerId: "daniel",
      dependsOn: ["t1"]
    },
    {
      id: "t3",
      title: "Create Stripe meters and metered prices",
      estimate: 3,
      ownerId: "olivia",
      dependsOn: ["t1"]
    },
    {
      id: "t4",
      title: "Build the usage page in billing settings",
      estimate: 6,
      ownerId: "marcus",
      dependsOn: ["t2"]
    },
    {
      id: "t5",
      title: "Backfill October usage and reconcile invoices",
      estimate: 3,
      ownerId: "chloe",
      dependsOn: ["t2", "t3"]
    },
    {
      id: "t6",
      title: "Update the pricing page and customer emails",
      estimate: 2,
      ownerId: "ava",
      dependsOn: ["t1"]
    },
    {
      id: "t7",
      title: "Dry-run a billing cycle on 20 accounts",
      estimate: 3,
      ownerId: "sofia",
      dependsOn: ["t4", "t5"]
    }
  ], I = {
    t1: [
      {
        title: "Agree on metered units and overage pricing",
        estimate: 1.5,
        ownerId: "andre"
      }
    ],
    t2: [
      {
        title: "Stream metered API calls to the usage pipeline",
        estimate: 4,
        ownerId: "daniel"
      }
    ],
    t3: [
      {
        title: "Map plans to Stripe meters with a sandbox test",
        estimate: 2.5,
        ownerId: "olivia"
      }
    ],
    t4: [
      {
        title: "Ship a live usage chart with spend alerts",
        estimate: 5,
        ownerId: "marcus"
      }
    ],
    t5: [
      {
        title: "Replay October events and diff against invoices",
        estimate: 4,
        ownerId: "chloe"
      }
    ],
    t6: [
      {
        title: "Announce the new pricing to existing workspaces",
        estimate: 1.5,
        ownerId: "ava"
      }
    ],
    t7: [
      {
        title: "Shadow-bill 20 accounts and review every invoice",
        estimate: 2,
        ownerId: "sofia"
      }
    ]
  }, T = {
    linear: {
      prefix: "BIL",
      first: 241,
      url: (e2) => `https://linear.app/northwind/issue/${e2}`
    },
    jira: {
      prefix: "PAY",
      first: 318,
      url: (e2) => `https://northwind.atlassian.net/browse/${e2}`
    }
  }, S = (e2) => 0 !== e2.getUTCDay() && 6 !== e2.getUTCDay(), A = (e2) => {
    let t2 = new Date(e2);
    return new Date(Date.UTC(t2.getFullYear(), t2.getMonth(), t2.getDate()));
  };
  function C(e2, t2) {
    let a2 = A(e2), n2 = Math.max(1, Math.ceil(t2));
    for (; ; ) {
      if (S(a2) && n2--, n2 <= 0) return a2;
      a2 = new Date(a2.getTime() + 864e5);
    }
  }
  let M = (e2) => e2.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), D = (e2) => `${Number.isInteger(e2) ? e2 : e2.toFixed(1)}d`;
  function O({ title: e2 = "Claude", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  function E({ title: e2 = "Linear", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        fill: "#5E6AD2",
        d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
      })
    });
  }
  function R({ title: e2 = "Jira", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        fill: "var(--tb-jira, #0052CC)",
        d: "M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z"
      })
    });
  }
  var L = a(89204), B = a.n(L);
  let P = (...e2) => e2.filter(Boolean).join(" "), F = [0.22, 1, 0.36, 1], K = { type: "spring", visualDuration: 0.24, bounce: 0 }, z = { linear: "Linear", jira: "Jira" }, U = [72, 54, 64, 48, 68, 58, 44], Y = (e2, t2) => new Promise((a2, n2) => {
    if (t2.aborted) return void n2(new DOMException("Aborted", "AbortError"));
    let s2 = setTimeout(a2, e2);
    t2.addEventListener(
      "abort",
      () => {
        clearTimeout(s2), n2(new DOMException("Aborted", "AbortError"));
      },
      { once: true }
    );
  }), H = (e2) => e2 instanceof DOMException && "AbortError" === e2.name, W = (e2) => e2.split(/\s+/).filter(Boolean);
  function Z({ target: e2 }) {
    return "linear" === e2 ? (0, n.jsx)(E, { className: B().mark, "aria-hidden": "true" }) : (0, n.jsx)(R, { className: B().mark, "aria-hidden": "true" });
  }
  function q({ swapKey: e2, children: t2, className: a2, reduced: s2 }) {
    return (0, n.jsx)("span", {
      className: P(B().swap, a2),
      children: (0, n.jsx)(i.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsx)(
          r.PY1.span,
          {
            className: B().swapItem,
            initial: { opacity: 0, y: 2 * !s2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.16, ease: F }
            },
            exit: { opacity: 0, y: 0, transition: { duration: 0.1, ease: F } },
            children: t2
          },
          e2
        )
      })
    });
  }
  function J({ owner: e2 }) {
    if (!e2)
      return (0, n.jsx)("span", {
        className: P(B().avatar, B().avatarEmpty),
        title: "Unassigned",
        children: (0, n.jsx)("span", {
          className: B().srOnly,
          children: "Unassigned"
        })
      });
    let t2 = e2.name.split(" ").map((e3) => e3[0]).slice(0, 2).join("");
    return (0, n.jsxs)("span", {
      className: B().avatar,
      title: e2.name,
      children: [
        e2.avatar ? (0, n.jsx)("img", { src: e2.avatar, alt: "", draggable: false }) : (0, n.jsx)("span", { "aria-hidden": "true", children: t2 }),
        (0, n.jsxs)("span", {
          className: B().srOnly,
          children: ["Owner ", e2.name]
        })
      ]
    });
  }
  function Q({
    task: e2,
    index: t2,
    count: a2,
    owner: d2,
    dep: c2,
    revealed: k2,
    streaming: f2,
    busy: w2,
    locked: x2,
    editing: y2,
    issue: v2,
    simulated: N2,
    reduced: $2,
    onEdit: I2,
    onSave: T2,
    onCancel: S2,
    onRegenerate: A2,
    onMove: C2,
    onHover: M2,
    onRetry: O2,
    onIssueClick: E2
  }) {
    let R2, L2, z2, Y2 = (0, l.m)(), [H2, Z2] = (0, s.useState)({
      title: e2.title,
      estimate: String(e2.estimate)
    }), V2 = (0, s.useRef)(null), G2 = k2 === 1 / 0, X = 0 === k2, ee = !x2 && !y2 && G2;
    (0, s.useEffect)(() => {
      if (!y2) return;
      let e3 = requestAnimationFrame(() => {
        V2.current?.focus(), V2.current?.select();
      });
      return () => cancelAnimationFrame(e3);
    }, [y2]);
    let et = () => {
      Z2({ title: e2.title, estimate: String(e2.estimate) }), I2();
    }, ea = () => {
      let t3 = Math.min(
        60,
        Math.max(0.5, Math.round(2 * (Number(H2.estimate) || e2.estimate)) / 2)
      );
      T2({ title: H2.title.trim() || e2.title, estimate: t3 });
    }, en = (e3) => {
      "Enter" === e3.key && (e3.preventDefault(), ea()), "Escape" === e3.key && (e3.preventDefault(), S2());
    }, es = W(e2.title), ei = [];
    if (!G2 && !X)
      for (let e3 = 0; e3 < Math.min(k2, es.length); e3 += 3)
        ei.push(es.slice(e3, e3 + 3).join(" "));
    R2 = X ? (0, n.jsx)("span", {
      className: B().skeleton,
      style: { width: `${U[t2 % U.length]}%` },
      "aria-hidden": "true"
    }) : y2 ? (0, n.jsx)("input", {
      ref: V2,
      className: B().titleInput,
      value: H2.title,
      "aria-label": `Task ${t2 + 1} title`,
      onChange: (e3) => Z2((t3) => ({ ...t3, title: e3.target.value })),
      onKeyDown: en
    }) : G2 ? w2 ? (0, n.jsx)("span", {
      className: B().titleText,
      children: (0, n.jsx)(j.n, { children: e2.title })
    }) : (0, n.jsx)(q, {
      swapKey: e2.title,
      reduced: $2,
      className: B().titleSwap,
      children: (0, n.jsx)("span", {
        className: B().titleText,
        onDoubleClick: x2 ? void 0 : et,
        children: e2.title
      })
    }) : (0, n.jsx)("span", {
      className: B().titleText,
      children: ei.map(
        (e3, t3) => (0, n.jsxs)(
          "span",
          { className: B().chunk, children: [t3 ? " " : "", e3] },
          t3
        )
      )
    }), "creating" === v2 ? (z2 = "creating", L2 = (0, n.jsxs)("span", {
      className: B().slotStatus,
      children: [
        (0, n.jsx)("span", {
          className: B().spinner,
          "aria-hidden": "true"
        }),
        (0, n.jsx)("span", {
          className: B().srOnly,
          children: "Creating"
        })
      ]
    })) : "failed" === v2 ? (z2 = "failed", L2 = (0, n.jsx)("button", {
      type: "button",
      className: P(B().iconButton, B().failed),
      onClick: O2,
      "aria-label": `Retry creating task ${t2 + 1}`,
      title: "Failed, retry",
      children: (0, n.jsx)(u.A, { "aria-hidden": "true" })
    })) : v2 ? (z2 = v2.key, L2 = (0, n.jsx)("a", {
      className: B().issueKey,
      href: v2.url,
      target: "_blank",
      rel: "noreferrer",
      onClick: N2 ? (e3) => {
        e3.preventDefault(), E2(v2.key);
      } : void 0,
      children: v2.key
    })) : y2 ? (z2 = "editing", L2 = (0, n.jsxs)("span", {
      className: B().actions,
      "data-visible": "true",
      children: [
        (0, n.jsx)("button", {
          type: "button",
          className: B().iconButton,
          onMouseDown: (e3) => e3.preventDefault(),
          onClick: ea,
          "aria-label": "Save task",
          children: (0, n.jsx)(m.A, { "aria-hidden": "true" })
        }),
        (0, n.jsx)("button", {
          type: "button",
          className: B().iconButton,
          onMouseDown: (e3) => e3.preventDefault(),
          onClick: S2,
          "aria-label": "Cancel editing",
          children: (0, n.jsx)(p.A, { "aria-hidden": "true" })
        })
      ]
    })) : (z2 = "actions", L2 = (0, n.jsxs)("span", {
      className: B().actions,
      "data-visible": w2 || void 0,
      children: [
        (0, n.jsx)("button", {
          type: "button",
          className: B().iconButton,
          disabled: x2 || w2 || !G2,
          onClick: A2,
          "aria-label": `Regenerate task ${t2 + 1}`,
          title: "Regenerate",
          children: (0, n.jsx)(h.A, { "aria-hidden": "true" })
        }),
        (0, n.jsx)("button", {
          type: "button",
          className: B().iconButton,
          disabled: x2 || w2 || !G2,
          onClick: et,
          "aria-label": `Edit task ${t2 + 1}`,
          title: "Edit",
          children: (0, n.jsx)(_.A, { "aria-hidden": "true" })
        })
      ]
    }));
    let er = G2 || !X && k2 >= es.length;
    return (0, n.jsxs)(o.N, {
      as: "li",
      value: e2,
      dragListener: false,
      dragControls: Y2,
      drag: !!ee && "y",
      layout: "position",
      className: P(B().row, y2 && B().editing, w2 && B().busy),
      transition: $2 ? { duration: 0 } : K,
      dragTransition: { bounceStiffness: 700, bounceDamping: 60 },
      whileDrag: {
        zIndex: 2,
        boxShadow: "var(--shadow-floating)",
        backgroundColor: "var(--surface-raised)"
      },
      onPointerEnter: () => M2(true),
      onPointerLeave: () => M2(false),
      "aria-busy": w2 || !G2 && f2 || void 0,
      children: [
        (0, n.jsx)("button", {
          type: "button",
          className: B().grip,
          "data-grip": e2.id,
          disabled: !ee,
          tabIndex: ee ? 0 : -1,
          "aria-label": `Reorder ${e2.title}, position ${t2 + 1} of ${a2}. Use the up and down arrow keys.`,
          onPointerDown: (e3) => {
            ee && (e3.preventDefault(), Y2.start(e3));
          },
          onKeyDown: (e3) => {
            ("ArrowUp" === e3.key || "ArrowDown" === e3.key) && (e3.preventDefault(), C2("ArrowUp" === e3.key ? -1 : 1));
          },
          children: (0, n.jsx)(g.A, { "aria-hidden": "true" })
        }),
        (0, n.jsx)("span", {
          className: B().index,
          "aria-hidden": "true",
          children: t2 + 1
        }),
        (0, n.jsx)("span", { className: B().title, children: R2 }),
        (0, n.jsxs)(r.PY1.span, {
          className: B().meta,
          initial: false,
          animate: { opacity: +!!er },
          transition: { duration: 0.16 * !$2, ease: F },
          children: [
            (0, n.jsx)("span", {
              className: P(B().dep, c2?.blocked && B().blocked),
              children: c2 && (0, n.jsxs)(q, {
                swapKey: c2.text,
                reduced: $2,
                children: [
                  c2.blocked ? (0, n.jsx)(u.A, {
                    className: B().depIcon,
                    "aria-hidden": "true"
                  }) : (0, n.jsx)(b.A, {
                    className: B().depIcon,
                    "aria-hidden": "true"
                  }),
                  (0, n.jsx)("span", {
                    className: B().depText,
                    children: c2.text
                  })
                ]
              })
            }),
            (0, n.jsx)("span", {
              className: B().estimate,
              children: y2 ? (0, n.jsx)("input", {
                className: B().estimateInput,
                inputMode: "decimal",
                value: H2.estimate,
                "aria-label": `Task ${t2 + 1} estimate in days`,
                onChange: (e3) => Z2((t3) => ({
                  ...t3,
                  estimate: e3.target.value.replace(/[^0-9.]/g, "")
                })),
                onKeyDown: en
              }) : (0, n.jsx)(q, {
                swapKey: e2.estimate,
                reduced: $2,
                children: D(e2.estimate)
              })
            }),
            (0, n.jsx)(q, {
              swapKey: d2?.id ?? "none",
              reduced: $2,
              className: B().owner,
              children: (0, n.jsx)(J, { owner: d2 })
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: B().slot,
          children: (0, n.jsx)(i.N, {
            mode: "popLayout",
            initial: false,
            children: (0, n.jsx)(
              r.PY1.span,
              {
                className: B().slotItem,
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: { duration: 0.16, ease: F }
                },
                exit: { opacity: 0, transition: { duration: 0.1, ease: F } },
                children: L2
              },
              z2
            )
          })
        })
      ]
    });
  }
  function V({
    defaultGoal: e2 = N,
    defaultTasks: t2,
    owners: a2 = v,
    generate: l2,
    regenerate: o2,
    createIssue: m2,
    targets: p2 = ["linear", "jira"],
    startDate: _2 = "2026-10-27T12:00:00",
    deadline: g2 = "2026-12-01T12:00:00",
    model: b2 = "Claude Sonnet 5.5",
    autoStart: E2,
    onTasksChange: R2,
    onSent: L2,
    className: J2
  }) {
    let G2, X, ee, et, ea = !!(0, d.I)(), en = (0, s.useId)(), es = (0, s.useRef)(null), [ei, er] = (0, s.useState)(e2), [el, eo] = (0, s.useState)(t2 ?? []), [ed, ec] = (0, s.useState)(t2?.length ? "ready" : "idle"), [eu, em] = (0, s.useState)({ row: 0, words: 0 }), [ep, eh] = (0, s.useState)({}), [e_, eg] = (0, s.useState)(null), [eb, ek] = (0, s.useState)({}), [ef, ew] = (0, s.useState)(null), [ex, ey] = (0, s.useState)(null), [ej, ev] = (0, s.useState)(""), eN = (0, s.useRef)(null), e$ = (0, s.useRef)(null), eI = (0, s.useRef)(/* @__PURE__ */ new Map()), eT = (0, s.useRef)(/* @__PURE__ */ new Map()), eS = (0, s.useRef)(/* @__PURE__ */ new Map()), eA = (0, s.useRef)(false), eC = !l2, eM = !m2, eD = (0, s.useMemo)(() => new Map(a2.map((e3) => [e3.id, e3])), [a2]), eO = (0, s.useCallback)(async () => {
      let e3 = ei.trim();
      if (!e3) return;
      eN.current?.abort(), eI.current.forEach((e4) => e4.abort()), eI.current.clear();
      let t3 = new AbortController();
      eN.current = t3, eg(null), eh({}), ek({}), ew(null), eo([]), ec("thinking"), ev("Planning tasks");
      try {
        let a3 = l2 ? await l2(e3, t3.signal) : await Y(900, t3.signal).then(() => $);
        if (t3.signal.aborted) return;
        eS.current = new Map(
          a3.map((e4) => [
            e4.id,
            { title: e4.title, estimate: e4.estimate, ownerId: e4.ownerId }
          ])
        ), eT.current.clear(), eo(a3), ea || !a3.length ? (em({ row: a3.length, words: 0 }), ec(a3.length ? "ready" : "idle"), ev(
          `${a3.length} tasks drafted${eC ? ". Simulated sample plan" : ""}`
        )) : (em({ row: 0, words: 0 }), ec("streaming"));
      } catch (e4) {
        if (H(e4)) return;
        ec("error"), ev("Could not draft tasks. Try again.");
      }
    }, [l2, ei, ea, eC]);
    (0, s.useEffect)(() => {
      if ("streaming" !== ed) return;
      let e3 = { row: 0, words: 0 }, t3 = setInterval(() => {
        let a3 = el[e3.row], n2 = e3.words + 3, s2 = !a3 || n2 >= W(a3.title).length + 3 ? { row: e3.row + 1, words: 0 } : { row: e3.row, words: n2 };
        e3 = s2, em(s2), s2.row >= el.length && (clearInterval(t3), ec("ready"), ev(
          `${el.length} tasks drafted${eC ? ". Simulated sample plan" : ""}`
        ));
      }, 36);
      return () => clearInterval(t3);
    }, [ed, el, eC]);
    let eE = E2 ?? !t2?.length;
    (0, s.useEffect)(() => {
      let e3, t3 = es.current;
      if (!eE || eA.current || !t3 || "u" < typeof IntersectionObserver) return;
      let a3 = new IntersectionObserver(
        ([t4]) => {
          t4?.isIntersecting && !eA.current && (eA.current = true, a3.disconnect(), e3 = setTimeout(() => {
            eO();
          }, 500));
        },
        { threshold: 0.4 }
      );
      return a3.observe(t3), () => {
        a3.disconnect(), e3 && clearTimeout(e3);
      };
    }, [eE, eO]), (0, s.useEffect)(
      () => () => {
        eN.current?.abort(), e$.current?.abort(), eI.current.forEach((e3) => e3.abort());
      },
      []
    );
    let eR = (0, s.useRef)(true);
    (0, s.useEffect)(() => {
      if (eR.current) {
        eR.current = false;
        return;
      }
      "ready" === ed && R2?.(el);
    }, [el]);
    let eL = (e3) => el.findIndex((t3) => t3.id === e3), eB = async (e3) => {
      let t3 = el.find((t4) => t4.id === e3);
      if (!t3) return;
      let a3 = new AbortController();
      eI.current.get(e3)?.abort(), eI.current.set(e3, a3), eh((t4) => ({ ...t4, [e3]: true })), ev(`Regenerating task ${eL(e3) + 1}`);
      try {
        let n2;
        if (o2) n2 = await o2(t3, { goal: ei, tasks: el }, a3.signal);
        else {
          await Y(760, a3.signal);
          let t4 = [eS.current.get(e3), ...I[e3] ?? []].filter(Boolean), s3 = ((eT.current.get(e3) ?? 0) + 1) % Math.max(1, t4.length);
          eT.current.set(e3, s3), n2 = t4[s3] ?? {};
        }
        let { id: s2, ...i2 } = n2;
        eo(
          (t4) => t4.map(
            (t5) => t5.id === e3 ? { ...t5, ...i2, dependsOn: i2.dependsOn ?? t5.dependsOn } : t5
          )
        ), ev(`Task ${eL(e3) + 1} rewritten${o2 ? "" : ". Simulated"}`);
      } catch (t4) {
        H(t4) || ev(`Could not regenerate task ${eL(e3) + 1}`);
      } finally {
        eI.current.get(e3) === a3 && eI.current.delete(e3), eh((t4) => {
          let a4 = { ...t4 };
          return delete a4[e3], a4;
        });
      }
    }, eP = async (e3, t3, a3, n2) => {
      if (m2) return m2(e3, t3, n2);
      await Y(220, n2);
      let s2 = T[e3], i2 = `${s2.prefix}-${s2.first + a3}`;
      return { key: i2, url: s2.url(i2) };
    }, eF = async (e3, t3) => {
      e$.current?.abort();
      let a3 = new AbortController();
      e$.current = a3, eg(null), ew(e3), ec("sending");
      let n2 = t3 ? { ...eb } : {};
      for (let [s3, i3] of (t3 || ek({}), ev(`Creating ${el.length} issues in ${z[e3]}`), el.entries()))
        if (!t3 || t3.includes(i3.id)) {
          n2[i3.id] = "creating", ek({ ...n2 });
          try {
            n2[i3.id] = await eP(e3, i3, s3, a3.signal);
          } catch (e4) {
            if (H(e4)) return;
            n2[i3.id] = "failed";
          }
          ek({ ...n2 });
        }
      let s2 = Object.fromEntries(
        Object.entries(n2).filter((e4) => "object" == typeof e4[1])
      ), i2 = Object.keys(s2).length;
      ec("sent"), ev(
        i2 === el.length ? `${i2} issues created in ${z[e3]}${eM ? ". Simulated, nothing was sent" : ""}` : `${i2} of ${el.length} issues created. ${el.length - i2} failed`
      ), i2 === el.length && L2?.(e3, s2);
    }, eK = "streaming" === ed ? el.slice(0, eu.row) : el, ez = (0, s.useMemo)(
      () => (function(e3) {
        let t3 = new Map(e3.map((e4) => [e4.id, e4])), a3 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map(), s2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), r2 = (e4) => {
          let l4 = n2.get(e4);
          if (void 0 !== l4) return l4;
          let o4 = t3.get(e4);
          if (!o4 || i2.has(e4)) return 0;
          i2.add(e4);
          let d3 = 0, c2;
          for (let e6 of o4.dependsOn ?? []) {
            if (!t3.has(e6)) continue;
            let a4 = r2(e6);
            a4 > d3 && (d3 = a4, c2 = e6);
          }
          return i2.delete(e4), a3.set(e4, d3), n2.set(e4, d3 + o4.estimate), s2.set(e4, c2), d3 + o4.estimate;
        };
        e3.forEach((e4) => r2(e4.id));
        let l3, o3 = 0;
        for (let t4 of e3) {
          let e4 = n2.get(t4.id) ?? 0;
          e4 > o3 && (o3 = e4, l3 = t4.id);
        }
        let d2 = [];
        for (let e4 = l3; e4; e4 = s2.get(e4)) d2.unshift(e4);
        return {
          span: o3,
          effort: e3.reduce((e4, t4) => e4 + t4.estimate, 0),
          start: a3,
          finish: n2,
          critical: d2
        };
      })(eK),
      [eK]
    ), eU = (0, s.useMemo)(() => new Date(_2), [_2]), eY = (0, s.useMemo)(
      () => (function(e3, t3) {
        let a3 = 0;
        for (let n2 = A(e3).getTime(); n2 <= A(t3).getTime(); n2 += 864e5)
          S(new Date(n2)) && a3++;
        return a3;
      })(_2, g2),
      [_2, g2]
    ), eH = Math.max(eY + 4, ez.span), eW = ez.span ? C(eU, ez.span) : null, eZ = eY - Math.ceil(ez.span), eq = ez.span > 0 && eZ < 0, eJ = Object.values(eb).filter((e3) => "object" == typeof e3).length, eQ = Object.entries(eb).filter(([, e3]) => "failed" === e3).map(([e3]) => e3), eV = "thinking" === ed || "streaming" === ed, eG = "sending" === ed || "sent" === ed || eV, eX = "ready" === ed && el.length > 0 && !e_ && !Object.keys(ep).length, e0 = Math.max(7, el.length), e1 = ex && ez.critical.includes(ex) ? ex : null, e22 = "thinking" === ed ? (0, n.jsx)(j.n, { children: "Planning tasks" }) : eK.length ? (0, n.jsxs)("span", {
      className: B().totals,
      children: [
        (0, n.jsxs)("span", {
          className: B().total,
          children: [
            (0, n.jsx)(q, {
              swapKey: eK.length,
              reduced: ea,
              className: B().num,
              children: eK.length
            }),
            " ",
            1 === eK.length ? "task" : "tasks"
          ]
        }),
        (0, n.jsx)("span", {
          className: B().dot,
          "aria-hidden": "true"
        }),
        (0, n.jsxs)("span", {
          className: B().total,
          children: [
            (0, n.jsx)(q, {
              swapKey: ez.effort,
              reduced: ea,
              className: B().num,
              children: D(ez.effort)
            }),
            " effort"
          ]
        })
      ]
    }) : (0, n.jsx)("span", {
      className: B().muted,
      children: "No tasks yet"
    }), e5 = eW ? eq ? {
      key: `late-${M(eW)}`,
      icon: (0, n.jsx)(u.A, { "aria-hidden": "true" }),
      text: `Ships ${M(eW)}, ${-eZ}d late`,
      tone: B().warning
    } : {
      key: `ok-${M(eW)}-${eZ}`,
      icon: (0, n.jsx)(k.A, { "aria-hidden": "true" }),
      text: `Ships ${M(eW)}, ${eZ}d early`,
      tone: B().success
    } : {
      key: "none",
      icon: null,
      text: `Due ${M(new Date(g2))}`,
      tone: B().muted
    };
    if ("sending" === ed && ef)
      G2 = "sending", X = (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(Z, { target: ef }),
          (0, n.jsxs)("span", {
            className: B().footerText,
            children: [
              "Creating ",
              (0, n.jsx)(q, {
                swapKey: Math.min(eJ + 1, el.length),
                reduced: ea,
                className: B().num,
                children: Math.min(eJ + 1, el.length)
              }),
              " of ",
              el.length,
              " in ",
              z[ef]
            ]
          })
        ]
      });
    else if ("sent" === ed && ef) {
      let e3 = !eQ.length;
      G2 = e3 ? "sent" : "partial", X = (0, n.jsxs)(n.Fragment, {
        children: [
          e3 ? (0, n.jsx)(k.A, {
            className: P(B().statusIcon, B().success),
            "aria-hidden": "true"
          }) : (0, n.jsx)(u.A, {
            className: P(B().statusIcon, B().warning),
            "aria-hidden": "true"
          }),
          (0, n.jsx)("span", {
            className: B().footerText,
            children: e3 ? `${eJ} issues created in ${z[ef]}` : `${eJ} of ${el.length} created`
          })
        ]
      });
    } else
      G2 = "model", X = (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(O, {
            className: P(B().mark, B().claude),
            "aria-hidden": "true"
          }),
          (0, n.jsx)("span", { className: B().footerText, children: b2 })
        ]
      });
    return "sent" === ed && ef ? (ee = eQ.length ? "retry" : "done", et = (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(y.$, {
          size: "sm",
          variant: "ghost",
          onClick: () => {
            e$.current?.abort(), ek({}), ew(null), ec(el.length ? "ready" : "idle"), ev("Plan unlocked for editing");
          },
          children: "Start over"
        }),
        eQ.length ? (0, n.jsxs)(y.$, {
          size: "sm",
          variant: "primary",
          onClick: () => void eF(ef, eQ),
          children: [
            (0, n.jsx)(h.A, { "aria-hidden": "true" }),
            "Retry failed"
          ]
        }) : (0, n.jsxs)(y.$, {
          size: "sm",
          variant: "secondary",
          onClick: () => ev(
            eM ? `Simulated, the ${z[ef]} project was not opened` : `Open the project in ${z[ef]}`
          ),
          children: [
            (0, n.jsx)(Z, { target: ef }),
            (0, n.jsxs)("span", {
              children: [
                (0, n.jsx)("span", {
                  className: B().long,
                  children: "Open in "
                }),
                z[ef]
              ]
            })
          ]
        })
      ]
    })) : (ee = "send", et = p2.map(
      (e3, t3) => (0, n.jsxs)(
        y.$,
        {
          size: "sm",
          variant: 0 === t3 ? "primary" : "secondary",
          disabled: !eX && ("sending" !== ed || ef !== e3),
          loading: "sending" === ed && ef === e3,
          onClick: () => void eF(e3),
          "aria-label": `Send to ${z[e3]}`,
          children: [
            (0, n.jsx)(Z, { target: e3 }),
            (0, n.jsxs)("span", {
              children: [
                (0, n.jsx)("span", {
                  className: B().long,
                  children: "Send to "
                }),
                z[e3]
              ]
            })
          ]
        },
        e3
      )
    )), (0, n.jsxs)("section", {
      ref: es,
      className: P(B().root, J2),
      "aria-labelledby": `${en}-goal-label`,
      children: [
        (0, n.jsxs)("form", {
          className: B().goal,
          onSubmit: (e3) => {
            if (e3.preventDefault(), eV)
              if (eN.current?.abort(), "streaming" === ed) {
                let e4 = el.slice(0, eu.row);
                eo(e4), em({ row: e4.length, words: 0 }), ec(e4.length ? "ready" : "idle"), ev(`Stopped with ${e4.length} tasks`);
              } else ec("idle"), ev("Stopped");
            else eO();
          },
          children: [
            (0, n.jsx)("label", {
              id: `${en}-goal-label`,
              htmlFor: `${en}-goal`,
              className: B().srOnly,
              children: "Goal"
            }),
            (0, n.jsx)(f.A, {
              className: B().goalIcon,
              "aria-hidden": "true"
            }),
            (0, n.jsx)("input", {
              id: `${en}-goal`,
              className: B().goalInput,
              value: ei,
              placeholder: "Paste a goal, like Launch usage-based billing by Dec 1",
              autoComplete: "off",
              spellCheck: false,
              disabled: "sending" === ed,
              onChange: (e3) => er(e3.target.value)
            }),
            (0, n.jsx)(y.$, {
              type: "submit",
              size: "sm",
              variant: eV ? "secondary" : "primary",
              disabled: "sending" === ed || !eV && !ei.trim(),
              children: eV ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(w.A, {
                    className: B().stopIcon,
                    "aria-hidden": "true"
                  }),
                  "Stop"
                ]
              }) : (0, n.jsx)(n.Fragment, { children: "Break down" })
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: B().summary,
          children: [
            (0, n.jsxs)("div", {
              className: B().summaryRow,
              children: [
                (0, n.jsx)("span", {
                  className: B().summaryLeft,
                  children: e22
                }),
                (0, n.jsxs)(q, {
                  swapKey: e5.key,
                  reduced: ea,
                  className: P(B().ship, e5.tone),
                  children: [
                    e5.icon,
                    (0, n.jsx)("span", {
                      className: B().shipText,
                      children: e5.text
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: B().track,
              role: "img",
              "aria-label": eW ? `Critical path of ${D(ez.span)} ships ${M(eW)}, deadline ${M(new Date(g2))}` : "Timeline empty",
              children: [
                (0, n.jsxs)("div", {
                  className: B().rail,
                  children: [
                    (0, n.jsx)(i.N, {
                      initial: false,
                      children: ez.critical.map((e3) => {
                        let t3 = (ez.start.get(e3) ?? 0) / eH * 100, a3 = ((ez.finish.get(e3) ?? 0) - (ez.start.get(e3) ?? 0)) / eH * 100;
                        return (0, n.jsx)(
                          r.PY1.span,
                          {
                            className: P(
                              B().segment,
                              eq && B().segmentLate,
                              e1 && e1 !== e3 && B().segmentDim
                            ),
                            initial: {
                              left: `${t3}%`,
                              width: "0%",
                              opacity: 1
                            },
                            animate: {
                              left: `${t3}%`,
                              width: `${a3}%`,
                              opacity: 1
                            },
                            exit: {
                              opacity: 0,
                              transition: { duration: 0.12 }
                            },
                            transition: ea ? { duration: 0 } : K
                          },
                          e3
                        );
                      })
                    }),
                    (0, n.jsx)("span", {
                      className: B().deadline,
                      style: { left: `${eY / eH * 100}%` },
                      "aria-hidden": "true"
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  className: B().axis,
                  "aria-hidden": "true",
                  children: [
                    (0, n.jsx)("span", { children: M(C(eU, 1)) }),
                    (0, n.jsx)("span", {
                      className: B().deadlineLabel,
                      style: { left: `${eY / eH * 100}%` },
                      children: M(new Date(g2))
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)(r.PY1.div, {
          className: B().listArea,
          initial: false,
          animate: { height: 44 * e0 + 8 },
          transition: ea ? { duration: 0 } : K,
          children: [
            (0, n.jsx)(i.N, {
              initial: false,
              children: ("idle" === ed || "error" === ed) && !el.length && (0, n.jsx)(
                r.PY1.div,
                {
                  className: B().empty,
                  initial: { opacity: 0 },
                  animate: { opacity: 1, transition: { duration: 0.16 } },
                  exit: { opacity: 0, transition: { duration: 0.1 } },
                  children: "error" === ed ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(u.A, {
                        className: P(B().emptyIcon, B().warning),
                        "aria-hidden": "true"
                      }),
                      (0, n.jsx)("span", {
                        children: "Could not draft tasks"
                      }),
                      (0, n.jsxs)(y.$, {
                        size: "sm",
                        variant: "secondary",
                        onClick: () => void eO(),
                        children: [
                          (0, n.jsx)(h.A, { "aria-hidden": "true" }),
                          "Try again"
                        ]
                      })
                    ]
                  }) : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(x.A, {
                        className: B().emptyIcon,
                        "aria-hidden": "true"
                      }),
                      (0, n.jsx)("span", {
                        children: "Tasks, estimates and owners appear here"
                      }),
                      (0, n.jsx)("span", {
                        className: B().muted,
                        children: "Paste a goal and press Break down"
                      })
                    ]
                  })
                },
                ed
              )
            }),
            "thinking" === ed && (0, n.jsx)("ol", {
              className: B().list,
              "aria-hidden": "true",
              children: Array.from(
                { length: 7 },
                (e3, t3) => (0, n.jsxs)(
                  "li",
                  {
                    className: P(B().row, B().skeletonRow),
                    children: [
                      (0, n.jsx)("span", { className: B().grip }),
                      (0, n.jsx)("span", {
                        className: B().index,
                        children: t3 + 1
                      }),
                      (0, n.jsx)("span", {
                        className: B().title,
                        children: (0, n.jsx)("span", {
                          className: B().skeleton,
                          style: { width: `${U[t3]}%` }
                        })
                      })
                    ]
                  },
                  t3
                )
              )
            }),
            el.length > 0 && (0, n.jsx)(c.x, {
              as: "ol",
              axis: "y",
              values: el,
              onReorder: (e3) => {
                eG || eo(e3);
              },
              className: B().list,
              "aria-label": "Tasks",
              children: el.map(
                (e3, t3) => (0, n.jsx)(
                  Q,
                  {
                    task: e3,
                    index: t3,
                    count: el.length,
                    owner: e3.ownerId ? eD.get(e3.ownerId) : void 0,
                    dep: ((e4, t4) => {
                      let a3 = (e4.dependsOn ?? []).map((e6) => el.findIndex((t5) => t5.id === e6)).filter((e6) => e6 >= 0).sort((e6, t5) => e6 - t5);
                      if (!a3.length) return;
                      let n2 = a3.some((e6) => e6 > t4);
                      return {
                        text: `${n2 ? "Waits on" : "After"} ${a3.map((e6) => e6 + 1).join(", ")}`,
                        blocked: n2
                      };
                    })(e3, t3),
                    revealed: "streaming" !== ed || t3 < eu.row ? 1 / 0 : t3 === eu.row ? eu.words : 0,
                    streaming: "streaming" === ed,
                    busy: !!ep[e3.id],
                    locked: eG,
                    editing: e_ === e3.id,
                    issue: eb[e3.id],
                    simulated: eM,
                    reduced: ea,
                    onEdit: () => eg(e3.id),
                    onSave: (t4) => {
                      var a3;
                      return a3 = e3.id, void (eo(
                        (e4) => e4.map((e6) => e6.id === a3 ? { ...e6, ...t4 } : e6)
                      ), eg(null), ev(`Task ${eL(a3) + 1} saved`));
                    },
                    onCancel: () => eg(null),
                    onRegenerate: () => void eB(e3.id),
                    onMove: (t4) => ((e4, t5) => {
                      let a3 = eL(e4), n2 = a3 + t5;
                      if (a3 < 0 || n2 < 0 || n2 >= el.length) return;
                      let s2 = [...el], [i2] = s2.splice(a3, 1);
                      s2.splice(n2, 0, i2), eo(s2), ev(`Moved to position ${n2 + 1} of ${el.length}`), requestAnimationFrame(
                        () => es.current?.querySelector(
                          `[data-grip="${CSS.escape(e4)}"]`
                        )?.focus()
                      );
                    })(e3.id, t4),
                    onHover: (t4) => ey((a3) => t4 ? e3.id : a3 === e3.id ? null : a3),
                    onRetry: () => ef && void eF(ef, [e3.id]),
                    onIssueClick: (e4) => ev(
                      `Simulated, ${e4} does not exist in ${ef ? z[ef] : "the tracker"}`
                    )
                  },
                  e3.id
                )
              )
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: B().footer,
          children: [
            (0, n.jsx)(q, {
              swapKey: G2,
              reduced: ea,
              className: B().footerStatus,
              children: X
            }),
            (0, n.jsx)("span", {
              className: B().footerActions,
              children: (0, n.jsx)(i.N, {
                mode: "popLayout",
                initial: false,
                children: (0, n.jsx)(
                  r.PY1.span,
                  {
                    className: B().footerActionsInner,
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: { duration: 0.16, ease: F }
                    },
                    exit: {
                      opacity: 0,
                      transition: { duration: 0.1, ease: F }
                    },
                    children: et
                  },
                  ee
                )
              })
            })
          ]
        }),
        (0, n.jsxs)("p", {
          className: B().srOnly,
          role: "status",
          "aria-live": "polite",
          children: [ej, eC && "thinking" === ed ? ". Simulated" : ""]
        })
      ]
    });
  }
  let G = V;
}

__m(__module,__exports,__require);
});
A.reg(16420, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let l = {
    name: "list-todo",
    size: 24,
    node: [
      ["path", { d: "M13 5h8", key: "a7qcls" }],
      ["path", { d: "M13 12h8", key: "h98zly" }],
      ["path", { d: "M13 19h8", key: "c3s6r1" }],
      ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
      [
        "rect",
        { x: "3", y: "4", width: "6", height: "6", rx: "1", key: "cif1o7" }
      ]
    ]
  };
  l.node;
  let o = (0, n.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(18986, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "pencil",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu"
        }
      ],
      ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
    ]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(29298, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { x: () => y });
  var r = n(95155), o = n(5556), l = n(12115), a = n(41369), i = n(24857), d = n(28819), u = n(56260), c = n(78170);
  function s(e2, t2) {
    return e2 < t2.min ? t2.min - e2 : e2 > t2.max ? e2 - t2.max : 0;
  }
  function f(e2, t2) {
    let n2 = Math.max(t2.x.min - e2.x, 0, e2.x - t2.x.max), r2 = Math.max(t2.y.min - e2.y, 0, e2.y - t2.y.max);
    return n2 * n2 + r2 * r2;
  }
  let p = (e2, t2) => e2.max <= t2.min || t2.max <= e2.min, y = (0, l.forwardRef)(function({ children: e2, as: t2 = "ul", axis: n2, onReorder: y2, values: h, ...m }, g) {
    let x = (0, d.M)(() => i.P[t2]), v = (0, l.useRef)(/* @__PURE__ */ new Map()), [k, M] = (0, l.useState)("y"), A = (0, l.useRef)(false), w = (0, l.useRef)(null), b = n2 || k;
    (0, o.V)(
      !!h,
      "Reorder.Group must be provided a values prop",
      "reorder-values"
    );
    let j = new Set(h);
    v.current.forEach((e3, t3) => {
      j.has(t3) || v.current.delete(t3);
    }), (0, l.useEffect)(() => {
      A.current = false;
    });
    let C = { overflowAnchor: "none", ...m.style };
    return (0, r.jsx)(x, {
      ...m,
      style: C,
      ref: (e3) => {
        w.current = e3, "function" == typeof g ? g(e3) : g && (g.current = e3);
      },
      ignoreStrict: true,
      children: (0, r.jsx)(a.T.Provider, {
        value: {
          axis: b,
          groupRef: w,
          registerItem: (e3, t3) => {
            if (v.current.set(e3, t3), !n2) {
              let e4 = (function(e5) {
                let t4 = false, n3 = false;
                for (let r2 = 0; r2 < e5.length; r2++)
                  for (let o2 = r2 + 1; o2 < e5.length; o2++)
                    if (t4 || (t4 = p(e5[r2].x, e5[o2].x)), n3 || (n3 = p(e5[r2].y, e5[o2].y)), t4 && n3)
                      return "xy";
                return t4 ? "x" : "y";
              })(
                h.flatMap((e5) => {
                  let t4 = v.current.get(e5);
                  return t4 ? [t4] : [];
                })
              );
              e4 !== k && M(e4);
            }
          },
          updateOrder: (e3, t3, n3) => {
            if (A.current) return;
            let r2 = h.flatMap((e4) => {
              let t4 = v.current.get(e4);
              return t4 ? [{ value: e4, layout: t4 }] : [];
            }), o2 = (function(e4, t4, n4, r3, o3, l2 = "ltr") {
              let a2 = e4.findIndex((e5) => e5.value === t4);
              if (-1 === a2) return e4;
              if ("xy" === o3) {
                let t5, { layout: r4 } = e4[a2], o4 = {
                  x: (0, u.k)(r4.x.min, r4.x.max, 0.5) + n4.x,
                  y: (0, u.k)(r4.y.min, r4.y.max, 0.5) + n4.y
                }, m3 = (t5 = [], e4.forEach((e5) => {
                  let { min: n5, max: r5 } = e5.layout.y, o5 = t5[t5.length - 1];
                  !o5 || n5 >= o5.max || r5 <= o5.min ? t5.push({ items: [e5], min: n5, max: r5 }) : (o5.items.push(e5), o5.min = Math.min(o5.min, n5), o5.max = Math.max(o5.max, r5));
                }), t5), g3 = m3.find((t6) => t6.items.includes(e4[a2])), x3 = m3.reduce((e5, t6) => s(o4.y, t6) < s(o4.y, e5) ? t6 : e5);
                if (x3 !== g3) {
                  var i2, d2, p2, y3, h2;
                  let t6, n5, r5, c2;
                  return i2 = e4, d2 = a2, p2 = o4.x, y3 = x3, h2 = l2, t6 = i2.filter((e5, t7) => t7 !== d2), r5 = (n5 = y3.items.find((e5) => {
                    let t7 = (0, u.k)(e5.layout.x.min, e5.layout.x.max, 0.5);
                    return "ltr" === h2 ? p2 < t7 : p2 > t7;
                  })) ? t6.indexOf(n5) : t6.indexOf(y3.items[y3.items.length - 1]) + 1, (c2 = [...t6]).splice(r5, 0, i2[d2]), c2.every((e5, t7) => e5 === i2[t7]) ? i2 : c2;
                }
                let v3 = f(o4, r4), k3 = -1, M2 = v3;
                return e4.forEach((e5, t6) => {
                  if (t6 === a2) return;
                  let n5 = f(o4, e5.layout);
                  n5 < M2 && (k3 = t6, M2 = n5);
                }), -1 === k3 ? e4 : (0, c.Pe)(e4, a2, a2 + Math.sign(k3 - a2));
              }
              if (!r3[o3]) return e4;
              let m2 = r3[o3] > 0 ? 1 : -1, g2 = e4[a2 + m2];
              if (!g2) return e4;
              let x2 = e4[a2].layout[o3], v2 = g2.layout[o3], k2 = (0, u.k)(v2.min, v2.max, 0.5);
              return 1 === m2 && x2.max + n4[o3] > k2 || -1 === m2 && x2.min + n4[o3] < k2 ? (0, c.Pe)(e4, a2, a2 + m2) : e4;
            })(
              r2,
              e3,
              t3,
              n3,
              b,
              w.current?.ownerDocument.defaultView?.getComputedStyle(
                w.current
              ).direction === "rtl" ? "rtl" : "ltr"
            );
            if (r2 !== o2) {
              A.current = true;
              let e4 = [...h], t4 = r2.map(({ value: e5 }) => h.indexOf(e5));
              o2.forEach(({ value: n4 }, r3) => {
                e4[t4[r3]] = n4;
              }), y2(e4);
            }
          }
        },
        children: e2
      })
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(41369, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { T: () => r });
  let r = (0, n(12115).createContext)(null);
}

__m(__module,__exports,__require);
});
A.reg(44952, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { m: () => a });
  var r = n(28819);
  class o {
    constructor() {
      this.componentControls = /* @__PURE__ */ new Set();
    }
    subscribe(e2) {
      return this.componentControls.add(e2), () => this.componentControls.delete(e2);
    }
    start(e2, t2) {
      this.componentControls.forEach((n2) => {
        n2.start(e2.nativeEvent || e2, t2);
      });
    }
    cancel() {
      this.componentControls.forEach((e2) => {
        e2.cancel();
      });
    }
    stop() {
      this.componentControls.forEach((e2) => {
        e2.stop();
      });
    }
  }
  let l = () => new o();
  function a() {
    return (0, r.M)(l);
  }
}

__m(__module,__exports,__require);
});
A.reg(56255, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { N: () => x });
  var r = n(95155), o = n(51469), l = n(5556), a = n(12115), i = n(41369), d = n(24857), u = n(28819), c = n(28245), s = n(55809);
  let f = /* @__PURE__ */ new Set(["auto", "scroll"]), p = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), h = null;
  function m(e2, t2) {
    let n2 = e2?.parentElement;
    for (; n2; ) {
      if ((function(e3, t3) {
        let n3 = getComputedStyle(e3), r2 = "x" === t3 ? n3.overflowX : n3.overflowY, o2 = e3 === document.body || e3 === document.documentElement;
        return f.has(r2) || o2;
      })(n2, t2))
        return n2;
      n2 = n2.parentElement;
    }
    return null;
  }
  function g(e2, t2 = 0) {
    return (0, o.S)(e2) ? e2 : (0, c.d)(t2);
  }
  let x = (0, a.forwardRef)(function({
    children: e2,
    style: t2 = {},
    value: n2,
    as: o2 = "li",
    onDrag: c2,
    onDragEnd: f2,
    layout: x2 = true,
    ...v
  }, k) {
    let M = (0, u.M)(() => d.P[o2]), A = (0, a.useContext)(i.T), w = { x: g(t2.x), y: g(t2.y) }, b = (0, s.G)([w.x, w.y], ([e3, t3]) => e3 || t3 ? 1 : "unset");
    (0, l.V)(
      !!A,
      "Reorder.Item must be a child of Reorder.Group",
      "reorder-item-child"
    );
    let { axis: j, registerItem: C, updateOrder: D, groupRef: z } = A, R = "xy" === j || j;
    return (0, r.jsx)(M, {
      drag: R,
      ...v,
      dragSnapToOrigin: true,
      style: { ...t2, x: w.x, y: w.y, zIndex: b },
      layout: x2,
      onDrag: (e3, t3) => {
        let { velocity: r2, point: o3 } = t3;
        D(n2, { x: w.x.get(), y: w.y.get() }, r2);
        let l2 = "xy" === j ? Math.abs(r2.x) > Math.abs(r2.y) ? "x" : "y" : j;
        !(function(e4, t4, n3, r3) {
          if (!e4) return;
          h = e4;
          let o4 = m(e4, n3);
          if (!o4) return;
          let { amount: l3, edge: a2 } = (function(e5, t5, n4) {
            let r4 = t5.getBoundingClientRect(), o5 = "x" === n4 ? Math.max(0, r4.left) : Math.max(0, r4.top), l4 = "x" === n4 ? Math.min(window.innerWidth, r4.right) : Math.min(window.innerHeight, r4.bottom), a3 = e5 - o5, i3 = l4 - e5;
            if (a3 < 50) {
              let e6 = 1 - a3 / 50;
              return { amount: -25 * e6 * e6, edge: "start" };
            }
            if (i3 < 50) {
              let e6 = 1 - i3 / 50;
              return { amount: 25 * e6 * e6, edge: "end" };
            }
            return { amount: 0, edge: null };
          })(t4 - ("x" === n3 ? window.scrollX : window.scrollY), o4, n3);
          if (null === a2) {
            y.delete(o4), p.delete(o4);
            return;
          }
          let i2 = y.get(o4), d2 = o4 === document.body || o4 === document.documentElement;
          if (i2 !== a2) {
            if (!("start" === a2 && r3 < 0 || "end" === a2 && r3 > 0)) return;
            y.set(o4, a2);
            let e5 = "x" === n3 ? o4.scrollWidth - (d2 ? window.innerWidth : o4.clientWidth) : o4.scrollHeight - (d2 ? window.innerHeight : o4.clientHeight);
            p.set(o4, e5);
          }
          if (l3 > 0) {
            let e5 = p.get(o4);
            if (("x" === n3 ? d2 ? window.scrollX : o4.scrollLeft : d2 ? window.scrollY : o4.scrollTop) >= e5)
              return;
          }
          "x" === n3 ? d2 ? window.scrollBy({ left: l3 }) : o4.scrollLeft += l3 : d2 ? window.scrollBy({ top: l3 }) : o4.scrollTop += l3;
        })(z.current, o3[l2], l2, r2[l2]), c2 && c2(e3, t3);
      },
      onDragEnd: (e3, t3) => {
        if (h) {
          let e4 = m(h, "y");
          e4 && (y.delete(e4), p.delete(e4));
          let t4 = m(h, "x");
          t4 && t4 !== e4 && (y.delete(t4), p.delete(t4)), h = null;
        }
        f2 && f2(e3, t3);
      },
      onLayoutMeasure: (e3) => {
        C(n2, e3);
      },
      ref: k,
      ignoreStrict: true,
      children: e2
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(58274, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "grip-vertical",
    size: 24,
    node: [
      ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
      ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
      ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
      ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
      ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
      ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(86272, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "sparkles",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
          key: "1s2grr"
        }
      ],
      ["path", { d: "M20 2v4", key: "1rf3ol" }],
      ["path", { d: "M22 4h-4", key: "gwowj6" }],
      ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
    ],
    aliases: ["stars"]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(89204, ".root{--tb-jira:#0052cc;--tb-row:44px;--tb-hover:color-mix(in oklab,var(--surface-muted) 72%,transparent);position:relative;width:100%;max-width:640px;container-type:inline-size;display:flex;flex-direction:column;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);line-height:20px;font-weight:400}\n:root[data-theme=dark] .root{--tb-jira:#2684ff}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}\n.muted{color:var(--text-muted)}\n.success{color:var(--success)}\n.warning{color:var(--warning)}\n.num{font-variant-numeric:tabular-nums}\n.total .num{color:var(--foreground);font-weight:500}\n.mark{width:14px;height:14px;flex:none;display:block}\n.claude{color:#d97757}\n.swap{position:relative;display:inline-flex;align-items:center;min-width:0}\n.dep .swap{min-width:0;max-width:100%}\n.swapItem{display:inline-flex;align-items:center;gap:6px;min-width:0;white-space:nowrap}\n.titleSwap .swapItem{display:block;width:100%}\n.dep .swapItem{gap:4px}\n.footerStatus .swapItem{gap:8px;max-width:100%}\n.goal{display:flex;align-items:center;gap:8px;height:48px;margin:8px;padding:6px 6px 6px 14px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--background);transition:border-color var(--duration-fast) ease-out}\n.goal:focus-within{border-color:color-mix(in oklab,var(--foreground) 28%,var(--border))}\n.goal button{border-radius:calc(var(--radius-control) - 6px);flex:none}\n.goal .stopIcon{width:10px;height:10px;fill:currentColor;stroke-width:0;border-radius:2px}\n.goal{padding-left:12px}\n.goalIcon{width:16px;height:16px;flex:none;color:var(--text-muted)}\n.goalInput{flex:1;min-width:0;height:100%;border:0;padding:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);text-overflow:ellipsis}\n.goalInput::placeholder{color:var(--text-muted)}\n.goalInput:focus{outline:none}\n.goalInput:disabled{color:var(--text-secondary)}\n.summary{padding:8px 16px 12px}\n.summary{padding-inline:12px}\n.summaryRow{display:flex;align-items:center;justify-content:space-between;gap:12px;height:20px}\n.summaryLeft{display:inline-flex;align-items:center;min-width:0;color:var(--text-secondary)}\n.totals{display:inline-flex;align-items:center;gap:8px;white-space:nowrap}\n.total{display:inline-flex;align-items:center;gap:4px}\n.dot{width:3px;height:3px;border-radius:50%;background:var(--text-muted)}\n.ship{flex:none;font-size:var(--text-xs)}\n.ship svg{width:14px;height:14px;flex:none}\n.shipText{color:var(--text-secondary)}\n.track{margin-top:12px}\n.rail{position:relative;height:6px;border-radius:3px;background:color-mix(in oklab,var(--foreground) 7%,transparent)}\n.segment{position:absolute;top:0;bottom:0;padding-right:2px;background:var(--accent);background-clip:content-box;border-radius:3px;transition:opacity var(--duration-fast) ease-out,background-color var(--duration-fast) ease-out}\n.segment:first-child{border-top-left-radius:3px;border-bottom-left-radius:3px}\n.segmentLate{background-color:var(--warning)}\n.segmentLate.segmentDim{background-color:color-mix(in oklab,var(--warning) 38%,transparent)}\n.segmentDim{background-color:color-mix(in oklab,var(--accent) 38%,transparent)}\n.deadline{position:absolute;top:-3px;bottom:-3px;width:1px;margin-left:-1px;background:var(--text-muted)}\n.axis{position:relative;height:16px;margin-top:6px;color:var(--text-muted);font-size:var(--text-xs);line-height:16px}\n.deadlineLabel{position:absolute;top:0;transform:translateX(-50%);white-space:nowrap}\n.listArea{position:relative;border-top:1px solid var(--border-subtle);overflow:hidden}\n.list{position:relative;margin:0;padding:4px 8px;list-style:none}\n.row{position:relative;display:grid;grid-template-columns:16px 16px minmax(0,1fr) auto 52px;align-items:center;gap:8px;height:var(--tb-row);padding:0 8px 0 4px;border-radius:calc(var(--radius-panel) - 8px);background:var(--surface);transition:background-color var(--duration-fast) ease-out,box-shadow var(--duration-fast) ease-out;user-select:none}\n@media (hover:hover){.row:hover{background:var(--tb-hover)}\n.row:focus-within{background:var(--tb-hover)}\n.grip:focus-visible,.row:hover .grip:not(:disabled){opacity:1;color:var(--text-secondary)}\n.actions[data-visible],.row:focus-within .actions,.row:hover .actions{opacity:1}\n.editing,.editing:focus-within{background:var(--background);box-shadow:inset 0 0 0 1px var(--border)}\n.grip{display:grid;place-items:center;width:16px;height:24px;padding:0;border:0;border-radius:6px;background:transparent;color:var(--text-muted);opacity:.5;cursor:grab;touch-action:none;transition:opacity var(--duration-fast) ease-out,color var(--duration-fast) ease-out}\n.grip svg{width:14px;height:14px}\n.grip:disabled{cursor:default;opacity:.25}\n.grip:active:not(:disabled){cursor:grabbing}\n.skeletonRow .grip{opacity:0}\n.grip:not(:disabled){opacity:.8}\n.index{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-align:right}\n.title{position:relative;display:flex;align-items:center;min-width:0;height:100%}\n.titleSwap{width:100%}\n.titleText{display:block;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.busy .titleText{color:var(--text-secondary)}\n.chunk{animation:tbFade .14s ease-out both}\n@media (prefers-reduced-motion:reduce){.chunk,.skeleton{animation:none}\n.titleInput{width:100%;height:28px;margin-left:-6px;padding:0 6px;border:0;border-radius:8px;background:transparent;color:var(--foreground);font:inherit}\n.titleInput:focus{outline:none;background:var(--tb-hover)}\n.skeleton{display:block;height:8px;border-radius:4px;background:var(--surface-muted);animation:tbPulse 1.2s ease-in-out infinite alternate}\n.meta{display:grid;grid-template-columns:88px 36px 20px;align-items:center;gap:8px}\n@container (max-width: 520px){.meta{grid-template-columns:36px 20px}\n.dep{display:flex;min-width:0;color:var(--text-muted);font-size:var(--text-xs)}\n.dep{display:none}\n.depIcon{width:12px;height:12px;flex:none}\n.depText{overflow:hidden;text-overflow:ellipsis}\n.blocked{color:var(--warning)}\n.estimate{display:flex;justify-content:flex-end;color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.estimateInput{width:36px;height:24px;padding:0 6px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-xs);text-align:right;font-variant-numeric:tabular-nums}\n.estimateInput:focus{outline:none;border-color:color-mix(in oklab,var(--foreground) 28%,var(--border))}\n.owner{width:20px;height:20px}\n.avatar{position:relative;display:grid;place-items:center;width:20px;height:20px;border-radius:50%;overflow:hidden;background:var(--surface-muted);color:var(--text-secondary);font-size:9px;font-weight:500;box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--foreground) 8%,transparent)}\n.avatar img{width:100%;height:100%;object-fit:cover;display:block}\n.avatarEmpty{background:transparent;box-shadow:inset 0 0 0 1px var(--border)}\n.slot{position:relative;display:flex;justify-content:flex-end;align-items:center;width:52px;height:100%}\n.slotItem{display:inline-flex;align-items:center;justify-content:flex-end}\n.actions{display:inline-flex;gap:4px;opacity:0;transition:opacity var(--duration-fast) ease-out}\n@media (hover:none){.actions{opacity:1}\n.iconButton{display:grid;place-items:center;width:24px;height:24px;padding:0;border:0;border-radius:8px;background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color var(--duration-fast) ease-out,color var(--duration-fast) ease-out,transform .12s ease-out}\n.iconButton svg{width:14px;height:14px}\n.iconButton:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}\n.iconButton:active:not(:disabled){transform:scale(.94)}\n.iconButton:disabled{cursor:default;opacity:.4}\n.failed,.failed:hover:not(:disabled){color:var(--warning)}\n.slotStatus{display:grid;place-items:center;width:24px;height:24px;color:var(--text-muted)}\n.spinner{width:12px;height:12px;border:1.5px solid;border-right:1.5px solid transparent;border-radius:50%;animation:tbSpin .7s linear infinite}\n.spinner{animation-duration:1.4s}\n.issueKey{color:var(--text-secondary);font-size:var(--text-xs);text-decoration:none;white-space:nowrap;border-radius:6px;transition:color var(--duration-fast) ease-out}\n.issueKey:hover{color:var(--foreground);text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--border)}\n.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:16px;text-align:center;color:var(--text-secondary)}\n.empty button{margin-top:8px}\n.emptyIcon{width:16px;height:16px;margin-bottom:4px;color:var(--text-muted)}\n.footer{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:52px;padding:8px 8px 8px 16px;border-top:1px solid var(--border-subtle)}\n.footer{padding-left:12px}\n.footerStatus{flex:1;min-width:0;color:var(--text-secondary)}\n.footerText{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.statusIcon{width:14px;height:14px;flex:none}\n.footerActions{position:relative;display:flex;justify-content:flex-end;flex:none}\n.footerActionsInner{display:inline-flex;gap:8px}\n@container (max-width: 440px){.long{display:none}", {"root":"root","srOnly":"srOnly","muted":"muted","success":"success","warning":"warning","num":"num","total":"total","mark":"mark","claude":"claude","swap":"swap","dep":"dep","swapItem":"swapItem","titleSwap":"titleSwap","footerStatus":"footerStatus","goal":"goal","stopIcon":"stopIcon","goalIcon":"goalIcon","goalInput":"goalInput","summary":"summary","summaryRow":"summaryRow","summaryLeft":"summaryLeft","totals":"totals","dot":"dot","ship":"ship","shipText":"shipText","track":"track","rail":"rail","segment":"segment","segmentLate":"segmentLate","segmentDim":"segmentDim","deadline":"deadline","axis":"axis","deadlineLabel":"deadlineLabel","listArea":"listArea","list":"list","row":"row","grip":"grip","actions":"actions","editing":"editing","skeletonRow":"skeletonRow","index":"index","title":"title","titleText":"titleText","busy":"busy","chunk":"chunk","skeleton":"skeleton","titleInput":"titleInput","meta":"meta","depIcon":"depIcon","depText":"depText","blocked":"blocked","estimate":"estimate","estimateInput":"estimateInput","owner":"owner","avatar":"avatar","avatarEmpty":"avatarEmpty","slot":"slot","slotItem":"slotItem","iconButton":"iconButton","failed":"failed","slotStatus":"slotStatus","spinner":"spinner","issueKey":"issueKey","empty":"empty","emptyIcon":"emptyIcon","footer":"footer","footerText":"footerText","statusIcon":"statusIcon","footerActions":"footerActions","footerActionsInner":"footerActionsInner","long":"long"});
A.cssFor("task-breakdown", [89204]);
A.item("task-breakdown", {entry:149, export:"TaskBreakdown", kind:"block", tier:"pro", unresolved:[]});
})();