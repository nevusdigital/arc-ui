function(__module,__exports,__require){
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
}