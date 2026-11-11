/* seat-manager (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(12272, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => i });
  var n = t(51811);
  let s = {
    name: "circle-plus",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }],
      ["path", { d: "M12 8v8", key: "napkw2" }]
    ],
    aliases: ["plus-circle"]
  };
  s.node;
  let i = (0, n.A)(s);
}

__m(__module,__exports,__require);
});
A.reg(14577, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "info",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(40486, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { SeatManager: () => X, buildQuote: () => N, default: () => H });
  var n = t(95155), s = t(12115), i = t(18310), r = t(61792), l = t(80642), o = t(25354), d = t(14577), c = t(12272), u = t(79530), m = t(11012), p = t(64962), h = t(35484), g = t(36565), f = t(2125), v = t(75796), _ = t(92218), x = t(51288), y = t(52898);
  let j = (e2, a2, t2) => new Date(Date.UTC(e2, a2 - 1, t2)), b = (e2) => e2 instanceof Date ? e2 : new Date(e2);
  function N(e2, a2, t2, n2, s2) {
    let i2 = b(n2.start), r2 = b(n2.end), l2 = Math.max(1, Math.round((r2.getTime() - i2.getTime()) / 864e5)), o2 = Math.min(
      l2,
      Math.max(0, Math.ceil((r2.getTime() - s2.getTime()) / 864e5))
    ), d2 = a2 - e2, c2 = d2 > 0 ? Math.round(d2 * t2.pricePerSeat * (o2 / l2) * 100) / 100 : 0;
    return {
      current: e2,
      target: a2,
      delta: d2,
      dueToday: c2,
      nextTotal: Math.round(a2 * t2.pricePerSeat * 100) / 100,
      daysLeft: o2,
      periodDays: l2,
      renewsOn: r2
    };
  }
  let k = (e2, a2) => new Promise((t2, n2) => {
    let s2 = setTimeout(t2, e2);
    a2?.addEventListener(
      "abort",
      () => {
        clearTimeout(s2), n2(new DOMException("Aborted", "AbortError"));
      },
      { once: true }
    );
  }), w = (e2) => e2 instanceof DOMException && "AbortError" === e2.name, T = {
    name: "Pro",
    pricePerSeat: 16,
    interval: "month",
    currency: "USD",
    maxSeats: 25
  }, $ = { start: j(2026, 10, 18), end: j(2026, 11, 18) }, S = j(2026, 10, 27), R = { brand: "Visa", last4: "4242" }, A = [
    {
      id: "emma-collins",
      name: "Emma Collins",
      avatar: "media/people/emma-collins.svg"
    },
    {
      id: "nathan-cole",
      name: "Nathan Cole",
      avatar: "media/people/nathan-cole.svg"
    },
    {
      id: "jasmine-brooks",
      name: "Jasmine Brooks",
      avatar: "media/people/jasmine-brooks.svg"
    },
    {
      id: "daniel-kim",
      name: "Daniel Kim",
      avatar: "media/people/daniel-kim.svg"
    },
    {
      id: "olivia-bennett",
      name: "Olivia Bennett",
      avatar: "media/people/olivia-bennett.svg"
    },
    {
      id: "marcus-johnson",
      name: "Marcus Johnson",
      avatar: "media/people/marcus-johnson.svg"
    },
    {
      id: "chloe-nguyen",
      name: "Chloe Nguyen",
      avatar: "media/people/chloe-nguyen.svg"
    },
    {
      id: "sofia-ramirez",
      name: "Sofia Ramirez",
      avatar: "media/people/sofia-ramirez.svg"
    },
    {
      id: "mateo-alvarez",
      name: "Mateo Alvarez",
      avatar: "media/people/mateo-alvarez.svg"
    },
    {
      id: "hannah-walsh",
      name: "Hannah Walsh",
      avatar: "media/people/hannah-walsh.svg"
    }
  ], E = [
    {
      id: "inv-kai",
      email: "kai.tanaka@halcyon.so",
      invitedBy: "Emma Collins",
      note: "2 days ago"
    },
    {
      id: "inv-priya",
      email: "priya.raman@halcyon.so",
      invitedBy: "Nathan Cole",
      note: "expires Oct 29"
    }
  ];
  var C = t(46972), M = t.n(C);
  let I = [0.22, 1, 0.36, 1], z = { duration: 0.16, ease: I }, P = { duration: 0.1, ease: I }, L = { duration: 0 }, B = { type: "spring", visualDuration: 0.24, bounce: 0 };
  function D({ id: e2, children: a2, className: t2, reduced: s2 }) {
    return (0, n.jsx)("span", {
      className: [M().swap, t2].filter(Boolean).join(" "),
      children: (0, n.jsx)(l.N, {
        initial: false,
        children: (0, n.jsx)(
          o.PY1.span,
          {
            className: M().swapItem,
            initial: s2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: s2 ? L : P },
            transition: s2 ? L : z,
            children: a2
          },
          e2
        )
      })
    });
  }
  let O = "0123456789".split("");
  function U({ value: e2, className: a2 }) {
    let t2 = [...e2], i2 = t2.map((e3, a3) => `${/\d/.test(e3) ? "d" : `c${e3}`}${t2.length - a3}`), [r2, l2] = (0, s.useState)({ value: e2, prev: null, keys: i2 });
    r2.value !== e2 && l2({ value: e2, prev: r2.keys, keys: i2 });
    let o2 = r2.value !== e2 ? new Set(r2.keys) : r2.prev ? new Set(r2.prev) : null;
    return (0, n.jsxs)("span", {
      className: [M().roll, a2].filter(Boolean).join(" "),
      children: [
        (0, n.jsx)("span", { className: M().srOnly, children: e2 }),
        (0, n.jsx)("span", {
          className: M().rollTrack,
          "aria-hidden": "true",
          children: t2.map((e3, a3) => {
            let t3 = i2[a3], s2 = null !== o2 && !o2.has(t3);
            return /\d/.test(e3) ? (0, n.jsx)(
              "span",
              {
                className: M().digit,
                "data-fresh": s2 || void 0,
                children: (0, n.jsx)("span", {
                  className: M().strip,
                  style: { transform: `translateY(${-(10 * Number(e3))}%)` },
                  children: O.map(
                    (e4) => (0, n.jsx)("span", { children: e4 }, e4)
                  )
                })
              },
              t3
            ) : (0, n.jsx)(
              "span",
              {
                className: M().rollChar,
                "data-fresh": s2 || void 0,
                children: e3
              },
              t3
            );
          })
        })
      ]
    });
  }
  function q({ cells: e2, reduced: a2, label: t2 }) {
    let s2 = e2.length > 40, i2 = a2 ? L : B, r2 = s2 ? ["member", "invited", "open", "adding", "removing"].map((a3) => ({
      key: a3,
      kind: a3,
      grow: e2.filter((e3) => e3 === a3).length
    })).filter((e3) => e3.grow > 0) : e2.map((e3, a3) => ({ key: String(a3), kind: e3, grow: 1 }));
    return (0, n.jsx)("div", {
      className: M().meter,
      role: "img",
      "aria-label": t2,
      "data-grouped": s2 || void 0,
      children: (0, n.jsx)(l.N, {
        initial: false,
        children: r2.map(
          (e3) => (0, n.jsx)(
            o.PY1.span,
            {
              className: M().cell,
              "data-kind": e3.kind,
              initial: { flexGrow: 0, paddingLeft: 0, paddingRight: 0 },
              animate: {
                flexGrow: e3.grow,
                paddingLeft: 1.5,
                paddingRight: 1.5
              },
              exit: { flexGrow: 0, paddingLeft: 0, paddingRight: 0 },
              transition: i2,
              children: (0, n.jsx)("span", { className: M().cellFill })
            },
            e3.key
          )
        )
      })
    });
  }
  function F({ size: e2 = 14 }) {
    return (0, n.jsx)("svg", {
      width: e2,
      height: e2,
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: (0, n.jsx)("path", {
        fill: "#635BFF",
        d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
      })
    });
  }
  let W = (e2, a2) => `${e2} ${a2}${1 === e2 ? "" : "s"}`, G = { size: 16, strokeWidth: 1.75, "aria-hidden": true }, Y = { duration: 0.16, ease: [0.22, 1, 0.36, 1] };
  function Q(e2) {
    let a2 = (0, s.useRef)(void 0), t2 = (0, s.useRef)(e2);
    (0, s.useLayoutEffect)(() => {
      t2.current = e2;
    });
    let n2 = (0, s.useCallback)(() => clearTimeout(a2.current), []);
    return (0, s.useEffect)(() => n2, [n2]), {
      onPointerDown: (e3) => {
        if (0 !== e3.button) return;
        t2.current();
        let n3 = (e4) => {
          a2.current = setTimeout(() => {
            t2.current(), n3(70);
          }, e4);
        };
        n3(380);
      },
      onPointerUp: n2,
      onPointerLeave: n2,
      onPointerCancel: n2,
      onClick: (e3) => {
        0 === e3.detail && t2.current();
      }
    };
  }
  function X({
    workspace: e2 = "Halcyon",
    plan: a2 = T,
    purchased: t2 = 12,
    members: j2 = A,
    memberCount: b2,
    invites: C2 = E,
    period: I2 = $,
    now: z2,
    paymentMethod: P2 = R,
    receiptEmail: L2 = "billing@halcyon.so",
    updateSeats: O2,
    resendInvite: H2,
    revokeInvite: Z,
    undoSeconds: J = 3,
    onQuoteChange: K,
    onSeatsChange: V,
    onPhaseChange: ee,
    autoPlay: ea,
    className: et
  }) {
    let en, es, ei, er, el, eo = !!(0, i.I)(), ed = (0, s.useId)(), ec = (0, s.useRef)(null), eu = (0, r.W)(ec, { amount: 0.3 }), em = !O2 && !H2 && !Z, [ep, eh] = (0, s.useState)(false), eg = (ea ?? em) && !ep && eu, ef = (0, s.useMemo)(() => z2 ?? (em ? S : /* @__PURE__ */ new Date()), [z2, em]), [ev, e_] = (0, s.useState)(t2), [ex, ey] = (0, s.useState)(t2), [ej, eb] = (0, s.useState)(C2), [eN, ek] = (0, s.useState)({}), [ew, eT] = (0, s.useState)("idle"), [e$, eS] = (0, s.useState)(""), [eR, eA] = (0, s.useState)(null), [eE, eC] = (0, s.useState)(""), [eM, eI] = (0, s.useState)(null), ez = b2 ?? j2.length, eP = ej.filter((e10) => "revoked" !== eN[e10.id]).length, eL = ez + eP, eB = Math.max(1, eL), eD = a2.maxSeats ?? 9999, eO = (0, s.useMemo)(() => N(ev, ex, a2, I2, ef), [ev, ex, a2, I2, ef]), eU = (0, s.useMemo)(
      () => new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: a2.currency ?? "USD"
      }),
      [a2.currency]
    ), eq = "year" === a2.interval ? "/yr" : "/mo", eF = eO.renewsOn.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: "UTC"
    }), eW = P2 ? `${P2.brand} ending ${P2.last4}` : "your card", eG = 0 !== eO.delta, eY = "confirm" === ew || "saving" === ew, eQ = (e10) => em ? ` Simulated, ${e10}.` : "", eX = (0, s.useRef)(eg);
    (0, s.useLayoutEffect)(() => {
      eX.current = eg;
    });
    let eH = (e10) => {
      eX.current || eC(e10);
    }, eZ = (0, s.useRef)(ex), eJ = (0, s.useRef)({ minSeats: eB, maxSeats: eD });
    (0, s.useLayoutEffect)(() => {
      eJ.current = { minSeats: eB, maxSeats: eD };
    });
    let eK = (0, s.useRef)(/* @__PURE__ */ new Set()), eV = (0, s.useCallback)((e10, a3) => {
      let t3 = setTimeout(() => {
        eK.current.delete(t3), a3();
      }, e10);
      return eK.current.add(t3), t3;
    }, []), e0 = (0, s.useRef)(void 0), e1 = (0, s.useRef)(void 0), e22 = (0, s.useRef)(/* @__PURE__ */ new Map()), e5 = (0, s.useRef)(/* @__PURE__ */ new Set()), e4 = (0, s.useRef)(null), e8 = (0, s.useRef)(null), e9 = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      let e10 = eK.current, a3 = e22.current, t3 = e5.current;
      return () => {
        e10.forEach(clearTimeout), a3.forEach(clearTimeout), t3.forEach((e11) => e11.abort()), clearTimeout(e0.current), clearTimeout(e1.current);
      };
    }, []);
    let e6 = () => {
      let e10 = new AbortController();
      return e5.current.add(e10), e10;
    }, e3 = (e10) => {
      eT(e10), ee?.(e10);
    }, e7 = (e10) => {
      eZ.current = e10, ey(e10);
    };
    (0, s.useEffect)(() => {
      K?.(eO);
    }, [eO]), (0, s.useEffect)(() => {
      let e10 = e9.current;
      e9.current = null, ec.current?.contains(document.activeElement) && ("confirm" === e10 && e4.current?.focus(), "update" === e10 && e8.current?.focus());
    }, [ew]);
    let ae = (e10) => {
      clearTimeout(e0.current), eA(e10), e0.current = setTimeout(() => eA(null), 2600);
    }, aa = (e10) => {
      if (eY) return;
      let { minSeats: a3, maxSeats: t3 } = eJ.current, n2 = eZ.current + e10, s2 = Math.min(t3, Math.max(a3, n2));
      n2 < a3 ? ae("min") : n2 > t3 ? ae("max") : eR && (clearTimeout(e0.current), eA(null)), s2 !== eZ.current && (e7(s2), ("done" === ew || "error" === ew) && (clearTimeout(e1.current), e3("idle")));
    }, at = Q(() => aa(-1)), an = Q(() => aa(1)), as = () => {
      if (eG && !eY) {
        let e10;
        e9.current = "confirm", e3("confirm"), eH(
          eO.delta > 0 ? `Review: ${W(eO.delta, "seat")} added, ${e10 = eO.dueToday, eU.format(e10)} due today.` : `Review: ${W(-eO.delta, "seat")} removed on ${eF}.`
        );
      }
    }, ai = async () => {
      if ("confirm" !== ew && "error" !== ew) return;
      e3("saving"), eS("");
      let e10 = e6();
      try {
        let a3;
        O2 ? await O2(eO, e10.signal) : await k(900, e10.signal), e_(eO.target), e9.current = "update", e3("done"), eH(
          `Updated to ${W(eO.target, "seat")}.${eO.delta > 0 ? ` ${a3 = eO.dueToday, eU.format(a3)} charged.` : ""}${eQ("nothing was charged")}`
        ), V?.(eO.target, eO), clearTimeout(e1.current), e1.current = setTimeout(() => e3("idle"), 2800);
      } catch (a3) {
        if (w(a3)) return;
        let e11 = a3 instanceof Error && a3.message ? a3.message : "Payment failed. Nothing was charged.";
        eS(e11), e3("error"), eH(e11);
      } finally {
        e5.current.delete(e10);
      }
    }, ar = async (e10) => {
      if (eN[e10.id]) return;
      ek((a4) => ({ ...a4, [e10.id]: "sending" }));
      let a3 = e6();
      try {
        H2 ? await H2(e10, a3.signal) : await k(650, a3.signal), ek((a4) => ({ ...a4, [e10.id]: "sent" })), eH(`Invite sent again to ${e10.email}.${eQ("no email was sent")}`);
      } catch (a4) {
        if (w(a4)) return;
        ek((a5) => {
          let t3 = { ...a5 };
          return delete t3[e10.id], t3;
        }), eH(`Could not resend the invite to ${e10.email}.`);
      } finally {
        e5.current.delete(a3);
      }
    }, al = (e10) => {
      ek((a4) => ({ ...a4, [e10.id]: "revoked" })), eH(
        `Invite to ${e10.email} revoked, 1 seat freed. Undo is available for ${J} seconds.`
      );
      let a3 = setTimeout(async () => {
        e22.current.delete(e10.id);
        let a4 = e6();
        try {
          Z && await Z(e10, a4.signal), eb((a5) => a5.filter((a6) => a6.id !== e10.id)), ek((a5) => {
            let t3 = { ...a5 };
            return delete t3[e10.id], t3;
          }), em && eH(`Invite to ${e10.email} removed.${eQ("nothing was sent")}`);
        } catch (a5) {
          if (w(a5)) return;
          ao(e10), eH(
            `Could not revoke the invite to ${e10.email}. It is still pending.`
          );
        } finally {
          e5.current.delete(a4);
        }
      }, 1e3 * J);
      e22.current.set(e10.id, a3);
    }, ao = (e10) => {
      clearTimeout(e22.current.get(e10.id)), e22.current.delete(e10.id), ek((a4) => {
        let t3 = { ...a4 };
        return delete t3[e10.id], t3;
      });
      let a3 = eJ.current.minSeats + 1;
      eZ.current < a3 && e7(Math.min(a3, eJ.current.maxSeats)), eH(`Invite to ${e10.email} restored.`);
    }, ad = () => {
      e22.current.forEach(clearTimeout), e22.current.clear(), clearTimeout(e1.current), e_(t2), e7(t2), eb(C2), ek({}), eA(null), eS(""), eT("idle");
    }, ac = (0, s.useRef)({
      stepBy: aa,
      review: as,
      confirm: ai,
      resend: ar,
      revoke: al,
      reset: ad,
      invites: ej
    });
    (0, s.useLayoutEffect)(() => {
      ac.current = {
        stepBy: aa,
        review: as,
        confirm: ai,
        resend: ar,
        revoke: al,
        reset: ad,
        invites: ej
      };
    });
    let [au, am] = (0, s.useState)(0);
    (0, s.useEffect)(() => {
      if (!eg) return;
      let e10 = (e11) => {
        eI(e11), eV(140, () => eI((a4) => a4 === e11 ? null : a4));
      }, a3 = [
        [
          1300,
          () => {
            e10("plus"), ac.current.stepBy(1);
          }
        ],
        [
          280,
          () => {
            e10("plus"), ac.current.stepBy(1);
          }
        ],
        [
          280,
          () => {
            e10("plus"), ac.current.stepBy(1);
          }
        ],
        [
          1100,
          () => {
            e10("update"), ac.current.review();
          }
        ],
        [
          1300,
          () => {
            e10("confirm"), ac.current.confirm();
          }
        ],
        [
          2300,
          () => {
            let a4 = ac.current.invites[0];
            a4 && (e10(`resend:${a4.id}`), ac.current.resend(a4));
          }
        ],
        [
          1500,
          () => {
            let a4 = ac.current.invites[ac.current.invites.length - 1];
            a4 && (e10(`revoke:${a4.id}`), ac.current.revoke(a4));
          }
        ],
        [1e3 * J + 1600, () => ac.current.reset()]
      ], [t3, n2] = a3[au % a3.length], s2 = eV(t3, () => {
        n2(), am((e11) => (e11 + 1) % a3.length);
      }), i2 = eK.current;
      return () => {
        clearTimeout(s2), i2.delete(s2);
      };
    }, [eg, au, eV, J]);
    let ap = () => {
      !ep && (ea ?? em) && eh(true);
    }, ah = (0, s.useMemo)(
      () => Array.from(
        { length: Math.max(ev, ex, eL) },
        (e10, a3) => a3 < ez ? "member" : a3 < eL ? "invited" : a3 < Math.min(ev, ex) ? "open" : ex > ev ? "adding" : "removing"
      ),
      [ev, ex, eL, ez]
    ), ag = Math.max(0, ev - eL), af = eL >= ev, av = "min" === eR ? {
      id: "min",
      tone: "info",
      icon: (0, n.jsx)(d.A, { ...G }),
      text: eP > 0 ? `${W(eL, "seat")} are taken. Revoke an invite to go lower.` : `${W(eL, "seat")} are taken. Remove a member to go lower.`
    } : "max" === eR ? {
      id: "max",
      tone: "info",
      icon: (0, n.jsx)(d.A, { ...G }),
      text: `${a2.name} includes up to ${eD} seats. Contact sales for more.`
    } : eO.delta > 0 ? {
      id: "add",
      tone: "accent",
      icon: (0, n.jsx)(c.A, { ...G }),
      text: `${W(eO.delta, "new seat")} open after you update.`
    } : eO.delta < 0 ? {
      id: "remove",
      tone: "muted",
      icon: (0, n.jsx)(u.A, { ...G }),
      text: `${W(-eO.delta, "open seat")} removed on ${eF}.`
    } : af ? {
      id: "limit",
      tone: "warning",
      icon: (0, n.jsx)(m.A, { ...G }),
      text: "Seat limit reached. New invites need a seat.",
      action: true
    } : {
      id: "open",
      tone: "success",
      icon: (0, n.jsx)(p.A, { ...G }),
      text: `${W(ag, "seat")} open for new invites.`
    }, a_ = (() => {
      if ("saving" === ew)
        return {
          id: "saving",
          node: (0, n.jsx)(y.n, {
            className: M().ellipsis,
            children: eO.delta > 0 ? `Charging ${eW}` : "Updating seats"
          })
        };
      if ("done" === ew)
        return {
          id: "done",
          node: (0, n.jsxs)("span", {
            className: M().footLine,
            "data-tone": "success",
            children: [
              (0, n.jsx)(p.A, { ...G }),
              (0, n.jsxs)("span", {
                className: M().ellipsis,
                children: [
                  "Now on ",
                  W(ev, "seat"),
                  ". Receipt sent to ",
                  L2,
                  "."
                ]
              })
            ]
          })
        };
      if ("error" === ew)
        return {
          id: "error",
          node: (0, n.jsxs)("span", {
            className: M().footLine,
            "data-tone": "danger",
            children: [
              (0, n.jsx)(h.A, { ...G }),
              (0, n.jsx)("span", { className: M().ellipsis, children: e$ })
            ]
          })
        };
      if ("confirm" === ew) {
        let e10;
        return {
          id: `confirm${Math.sign(eO.delta)}`,
          node: (0, n.jsx)("span", {
            className: M().ellipsis,
            children: eO.delta > 0 ? (0, n.jsxs)(n.Fragment, {
              children: [
                "Charge ",
                (0, n.jsx)("span", {
                  className: M().strong,
                  children: (e10 = eO.dueToday, eU.format(e10))
                }),
                " to ",
                eW,
                " now?"
              ]
            }) : (0, n.jsxs)(n.Fragment, {
              children: [
                "Remove ",
                W(-eO.delta, "seat"),
                " on ",
                eF,
                "?"
              ]
            })
          })
        };
      }
      if (eG) {
        let e10;
        return {
          id: `dirty${Math.sign(eO.delta)}`,
          node: (0, n.jsx)("span", {
            className: M().ellipsis,
            children: eO.delta > 0 ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("span", {
                  className: M().strong,
                  children: [
                    "+",
                    (0, n.jsx)(U, { value: String(eO.delta) }),
                    " ",
                    1 === eO.delta ? "seat" : "seats"
                  ]
                }),
                ", ",
                (0, n.jsx)(U, {
                  value: (e10 = eO.dueToday, eU.format(e10))
                }),
                " due today"
              ]
            }) : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("span", {
                  className: M().strong,
                  children: [
                    "\u2212",
                    (0, n.jsx)(U, { value: String(-eO.delta) }),
                    " ",
                    -1 === eO.delta ? "seat" : "seats"
                  ]
                }),
                " from ",
                eF,
                ", nothing due today"
              ]
            })
          })
        };
      }
      return {
        id: "idle",
        node: P2 ? (0, n.jsxs)("span", {
          className: M().footLine,
          children: [
            (0, n.jsx)(F, {}),
            (0, n.jsxs)("span", {
              className: M().ellipsis,
              title: "Billed via Stripe",
              children: [
                (0, n.jsx)("span", {
                  className: M().srOnly,
                  children: "Billed via Stripe, "
                }),
                eW
              ]
            })
          ]
        }) : (0, n.jsx)("span", {
          className: M().ellipsis,
          children: "No changes"
        })
      };
    })(), ax = j2.slice(0, 4), ay = ez - ax.length;
    return (0, n.jsxs)("section", {
      ref: ec,
      className: [M().root, et].filter(Boolean).join(" "),
      "aria-labelledby": ed,
      onPointerDown: ap,
      onKeyDown: ap,
      children: [
        (0, n.jsxs)("div", {
          className: M().block,
          children: [
            (0, n.jsxs)("header", {
              className: M().header,
              children: [
                (0, n.jsxs)("div", {
                  className: M().titleRow,
                  children: [
                    (0, n.jsx)("h3", {
                      id: ed,
                      className: M().title,
                      children: "Seats"
                    }),
                    (0, n.jsx)("span", {
                      className: M().badge,
                      children: a2.name
                    })
                  ]
                }),
                (0, n.jsxs)("p", {
                  className: M().description,
                  children: [
                    e2,
                    " \xB7 ",
                    (en = a2.pricePerSeat, eU.format(en)).replace(/\.00$/, ""),
                    " per seat",
                    eq,
                    " \xB7 Renews ",
                    eF
                  ]
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: M().usage,
              children: [
                (0, n.jsxs)("div", {
                  className: M().usageRow,
                  children: [
                    (0, n.jsxs)("div", {
                      className: M().avatars,
                      "aria-label": `${W(ez, "member")}`,
                      role: "group",
                      children: [
                        ax.map(
                          (e10) => (0, n.jsx)(
                            _.e,
                            {
                              name: e10.name,
                              src: e10.avatar,
                              size: "sm",
                              className: M().avatar,
                              title: e10.name
                            },
                            e10.id
                          )
                        ),
                        ay > 0 && (0, n.jsxs)("span", {
                          className: M().more,
                          "aria-hidden": "true",
                          children: ["+", ay]
                        })
                      ]
                    }),
                    (0, n.jsxs)("span", {
                      className: M().used,
                      children: [
                        (0, n.jsx)(U, { value: String(eL) }),
                        " of ",
                        (0, n.jsx)(U, { value: String(ev) }),
                        " seats used"
                      ]
                    })
                  ]
                }),
                (0, n.jsx)(q, {
                  cells: ah,
                  reduced: eo,
                  label: `${eL} of ${ev} seats used: ${W(ez, "member")}, ${eP} invited, ${ag} open${eO.delta > 0 ? `, ${eO.delta} being added` : eO.delta < 0 ? `, ${-eO.delta} being removed` : ""}`
                }),
                (0, n.jsxs)("ul", {
                  className: M().legend,
                  "aria-hidden": "true",
                  children: [
                    (0, n.jsxs)("li", {
                      children: [
                        (0, n.jsx)("i", { "data-kind": "member" }),
                        (0, n.jsxs)("span", {
                          children: [
                            (0, n.jsx)(U, { value: String(ez) }),
                            " members"
                          ]
                        })
                      ]
                    }),
                    (0, n.jsxs)("li", {
                      children: [
                        (0, n.jsx)("i", { "data-kind": "invited" }),
                        (0, n.jsxs)("span", {
                          children: [
                            (0, n.jsx)(U, { value: String(eP) }),
                            " invited"
                          ]
                        })
                      ]
                    }),
                    (0, n.jsxs)("li", {
                      children: [
                        (0, n.jsx)("i", { "data-kind": "open" }),
                        (0, n.jsxs)("span", {
                          children: [
                            (0, n.jsx)(U, { value: String(ag) }),
                            " open"
                          ]
                        })
                      ]
                    }),
                    (0, n.jsx)(l.N, {
                      initial: false,
                      children: 0 !== eO.delta && (0, n.jsxs)(
                        o.PY1.li,
                        {
                          className: M().legendDelta,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0, transition: { duration: 0.1 } },
                          transition: eo ? { duration: 0 } : Y,
                          children: [
                            (0, n.jsx)("i", {
                              "data-kind": eO.delta > 0 ? "adding" : "removing"
                            }),
                            (0, n.jsxs)("span", {
                              children: [
                                (0, n.jsx)(U, {
                                  value: String(Math.abs(eO.delta))
                                }),
                                " ",
                                eO.delta > 0 ? "new" : "removed"
                              ]
                            })
                          ]
                        },
                        "delta"
                      )
                    })
                  ]
                }),
                (0, n.jsx)(D, {
                  id: av.id,
                  reduced: eo,
                  className: M().notice,
                  children: (0, n.jsxs)("span", {
                    className: M().noticeLine,
                    "data-tone": av.tone,
                    children: [
                      av.icon,
                      (0, n.jsx)("span", {
                        className: M().ellipsis,
                        children: av.text
                      }),
                      av.action && (0, n.jsx)("button", {
                        type: "button",
                        className: M().link,
                        onClick: () => aa(1),
                        disabled: eY,
                        children: "Add a seat"
                      })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: M().block,
          children: [
            (0, n.jsxs)("div", {
              className: M().seatsRow,
              children: [
                (0, n.jsxs)("div", {
                  className: M().label,
                  children: [
                    (0, n.jsx)("span", {
                      className: M().name,
                      children: "Seats"
                    }),
                    (0, n.jsxs)("span", {
                      className: M().meta,
                      children: [
                        (0, n.jsx)(U, { value: String(ev) }),
                        " purchased"
                      ]
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  className: M().stepper,
                  "data-locked": eY || void 0,
                  children: [
                    (0, n.jsx)(x.$, {
                      variant: "ghost",
                      size: "sm",
                      className: M().stepBtn,
                      "aria-label": "Remove a seat",
                      "aria-controls": `${ed}-seats`,
                      "aria-disabled": ex <= eB || eY || void 0,
                      "data-pressed": "minus" === eM || void 0,
                      ...at,
                      children: (0, n.jsx)(g.A, { ...G })
                    }),
                    (0, n.jsx)("span", {
                      id: `${ed}-seats`,
                      className: M().count,
                      role: "spinbutton",
                      tabIndex: eY ? -1 : 0,
                      "aria-label": "Seats",
                      "aria-valuemin": eB,
                      "aria-valuemax": eD,
                      "aria-valuenow": ex,
                      "aria-valuetext": W(ex, "seat"),
                      "aria-disabled": eY || void 0,
                      onKeyDown: (e10) => {
                        let a3 = {
                          ArrowUp: 1,
                          ArrowRight: 1,
                          ArrowDown: -1,
                          ArrowLeft: -1,
                          PageUp: 5,
                          PageDown: -5,
                          Home: -9999,
                          End: 9999
                        }[e10.key];
                        void 0 !== a3 && (e10.preventDefault(), "Home" === e10.key ? aa(eJ.current.minSeats - eZ.current) : "End" === e10.key ? aa(
                          Math.min(eJ.current.maxSeats, 9999) - eZ.current
                        ) : aa(a3));
                      },
                      children: (0, n.jsx)(U, { value: String(ex) })
                    }),
                    (0, n.jsx)(x.$, {
                      variant: "ghost",
                      size: "sm",
                      className: M().stepBtn,
                      "aria-label": "Add a seat",
                      "aria-controls": `${ed}-seats`,
                      "aria-disabled": ex >= eD || eY || void 0,
                      "data-pressed": "plus" === eM || void 0,
                      ...an,
                      children: (0, n.jsx)(f.A, { ...G })
                    })
                  ]
                })
              ]
            }),
            (0, n.jsxs)("dl", {
              className: M().quote,
              children: [
                (0, n.jsxs)("div", {
                  className: M().quoteRow,
                  children: [
                    (0, n.jsxs)("dt", {
                      children: [
                        (0, n.jsx)("span", { children: "Due today" }),
                        (0, n.jsx)(D, {
                          id: eO.delta > 0 ? "pro" : eO.delta < 0 ? "renewal" : "none",
                          reduced: eo,
                          className: M().quoteMeta,
                          children: (0, n.jsx)("span", {
                            className: M().ellipsis,
                            children: eO.delta > 0 ? `Prorated for ${W(eO.daysLeft, "day")}` : eO.delta < 0 ? `Removals apply on ${eF}` : "No change"
                          })
                        })
                      ]
                    }),
                    (0, n.jsx)("dd", {
                      className: M().amount,
                      "data-strong": eO.dueToday > 0 || void 0,
                      children: (0, n.jsx)(U, {
                        value: (es = eO.dueToday, eU.format(es))
                      })
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  className: M().quoteRow,
                  children: [
                    (0, n.jsxs)("dt", {
                      children: [
                        (0, n.jsxs)("span", { children: ["From ", eF] }),
                        (0, n.jsx)(D, {
                          id: eG ? "was" : "same",
                          reduced: eo,
                          className: M().quoteMeta,
                          children: (0, n.jsx)("span", {
                            className: M().ellipsis,
                            children: eG ? `Was ${ei = ev * a2.pricePerSeat, eU.format(ei)}` : "Current total"
                          })
                        })
                      ]
                    }),
                    (0, n.jsx)("dd", {
                      className: M().amount,
                      children: (0, n.jsx)(U, {
                        value: `${er = eO.nextTotal, eU.format(er)}${eq}`
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: M().block,
          children: [
            (0, n.jsxs)("div", {
              className: M().sectionHead,
              children: [
                (0, n.jsx)("span", {
                  className: M().name,
                  children: "Pending invites"
                }),
                (0, n.jsx)("span", {
                  className: M().meta,
                  children: (0, n.jsx)(U, { value: String(eP) })
                })
              ]
            }),
            (0, n.jsxs)("ul", {
              className: M().invites,
              "aria-label": "Pending invites",
              children: [
                (0, n.jsx)(l.N, {
                  initial: false,
                  children: ej.map((e10) => {
                    let a3 = eN[e10.id] ?? "idle";
                    return (0, n.jsx)(
                      o.PY1.li,
                      {
                        className: M().invite,
                        initial: { height: 0, opacity: 0 },
                        animate: { height: 56, opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: eo ? { duration: 0 } : { height: B, opacity: Y },
                        children: (0, n.jsx)(D, {
                          id: "revoked" === a3 ? "revoked" : "active",
                          reduced: eo,
                          className: M().inviteSwap,
                          children: "revoked" === a3 ? (0, n.jsxs)("span", {
                            className: M().inviteInner,
                            children: [
                              (0, n.jsx)(v.A, {
                                ...G,
                                className: M().inviteIcon
                              }),
                              (0, n.jsxs)("span", {
                                className: M().inviteText,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: [
                                      M().email,
                                      M().struck
                                    ].join(" "),
                                    children: e10.email
                                  }),
                                  (0, n.jsx)("span", {
                                    className: M().meta,
                                    children: "Invite revoked, 1 seat freed"
                                  })
                                ]
                              }),
                              (0, n.jsx)("span", {
                                className: M().actions,
                                children: (0, n.jsx)(x.$, {
                                  variant: "ghost",
                                  size: "sm",
                                  onClick: () => ao(e10),
                                  children: "Undo"
                                })
                              })
                            ]
                          }) : (0, n.jsxs)("span", {
                            className: M().inviteInner,
                            children: [
                              (0, n.jsx)(v.A, {
                                ...G,
                                className: M().inviteIcon
                              }),
                              (0, n.jsxs)("span", {
                                className: M().inviteText,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: M().email,
                                    title: e10.email,
                                    children: e10.email
                                  }),
                                  (0, n.jsx)("span", {
                                    className: [
                                      M().meta,
                                      M().ellipsis
                                    ].join(" "),
                                    children: [
                                      e10.invitedBy && `Invited by ${e10.invitedBy}`,
                                      e10.note
                                    ].filter(Boolean).join(", ")
                                  })
                                ]
                              }),
                              (0, n.jsxs)("span", {
                                className: M().actions,
                                children: [
                                  (0, n.jsx)(x.$, {
                                    variant: "ghost",
                                    size: "sm",
                                    loading: "sending" === a3,
                                    disabled: "sent" === a3,
                                    onClick: () => void ar(e10),
                                    "data-pressed": eM === `resend:${e10.id}` || void 0,
                                    "aria-label": "sent" === a3 ? `Invite sent to ${e10.email}` : `Resend invite to ${e10.email}`,
                                    children: "sent" === a3 ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsx)(p.A, {
                                          ...G,
                                          className: M().sentIcon
                                        }),
                                        "Sent"
                                      ]
                                    }) : "Resend"
                                  }),
                                  (0, n.jsx)(x.$, {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: () => al(e10),
                                    disabled: "sending" === a3,
                                    "data-pressed": eM === `revoke:${e10.id}` || void 0,
                                    "aria-label": `Revoke invite to ${e10.email}`,
                                    children: "Revoke"
                                  })
                                ]
                              })
                            ]
                          })
                        })
                      },
                      e10.id
                    );
                  })
                }),
                (0, n.jsx)(l.N, {
                  children: 0 === ej.length && (0, n.jsxs)(
                    o.PY1.li,
                    {
                      className: M().empty,
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: eo ? { duration: 0 } : { ...Y, delay: 0.12 },
                      children: [
                        (0, n.jsx)(v.A, { ...G, className: M().inviteIcon }),
                        "No pending invites"
                      ]
                    },
                    "empty"
                  )
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("footer", {
          className: M().footer,
          children: [
            (0, n.jsx)(D, {
              id: a_.id,
              reduced: eo,
              className: M().footText,
              children: a_.node
            }),
            (0, n.jsx)(D, {
              id: "confirm" === ew || "saving" === ew || "error" === ew ? "confirm" : "main",
              reduced: eo,
              className: M().footActions,
              children: "confirm" === ew || "saving" === ew || "error" === ew ? (0, n.jsxs)("span", {
                className: M().buttons,
                children: [
                  (0, n.jsx)(x.$, {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => {
                      e9.current = "update", eS(""), e3("idle");
                    },
                    disabled: "saving" === ew,
                    children: "Back"
                  }),
                  (0, n.jsx)(x.$, {
                    ref: e4,
                    size: "sm",
                    loading: "saving" === ew,
                    onClick: () => void ai(),
                    "data-pressed": "confirm" === eM || void 0,
                    children: "error" === ew ? "Try again" : eO.delta > 0 ? `Pay ${el = eO.dueToday, eU.format(el)}` : "Confirm"
                  })
                ]
              }) : (0, n.jsx)("span", {
                className: M().buttons,
                children: (0, n.jsx)(x.$, {
                  ref: e8,
                  size: "sm",
                  onClick: as,
                  disabled: !eG,
                  "data-pressed": "update" === eM || void 0,
                  children: "Update seats"
                })
              })
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: M().srOnly,
          "aria-live": "polite",
          role: "status",
          children: eE
        })
      ]
    });
  }
  let H = X;
}

__m(__module,__exports,__require);
});
A.regCss(46972, ".root{container-type:inline-size;position:relative;width:100%;max-width:560px;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);line-height:20px;letter-spacing:var(--tracking-body)}\n.block{display:grid;gap:var(--space-4);padding:var(--space-6)}\n.block+.block{border-top:1px solid var(--border)}\n@container (max-width: 459px){.block{padding:var(--space-5)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.ellipsis{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.strong{color:var(--foreground);font-weight:500}\n.header{display:grid;gap:var(--space-1)}\n.titleRow{display:flex;align-items:center;gap:var(--space-2)}\n.title{margin:0;font-size:var(--text-base);font-weight:500;line-height:24px}\n.badge{display:inline-flex;height:20px;align-items:center;padding:0 var(--space-2);border-radius:var(--radius-pill);background:var(--accent-subtle);color:var(--accent);font-size:.8125rem;font-weight:500;line-height:1}\n.description{overflow:hidden;margin:0;color:var(--text-secondary);font-size:.8125rem;text-overflow:ellipsis;white-space:nowrap}\n.usage{display:grid;gap:var(--space-3)}\n.usageRow{display:flex;min-width:0;align-items:center;justify-content:space-between;gap:var(--space-3)}\n.avatars{display:flex;align-items:center;padding-left:2px}\n.avatar,.more{box-shadow:0 0 0 2px var(--surface)}\n.avatar+.avatar,.avatar+.more{margin-left:-6px}\n.more{display:inline-grid;width:28px;height:28px;place-items:center;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);font-size:.8125rem;font-variant-numeric:tabular-nums;letter-spacing:-.01em}\n.used{flex:none;color:var(--text-secondary);white-space:nowrap}\n.used .roll{color:var(--foreground);font-weight:500}\n.roll{display:inline-flex;font-variant-numeric:tabular-nums;vertical-align:top}\n.amount .roll{justify-content:flex-end}\n.meter{display:flex;height:24px;margin-inline:-1.5px}\n.meter[data-grouped] .cellFill{border-radius:6px}\n.cell{display:flex;flex:1 1 0;min-width:0}\n.cell[data-kind=member] .cellFill,.legend i[data-kind=member]{background:var(--accent);box-shadow:none}\n.cell[data-kind=invited] .cellFill,.legend i[data-kind=invited]{background:color-mix(in oklab,var(--accent) 38%,var(--surface));box-shadow:none}\n.cell[data-kind=adding] .cellFill,.legend i[data-kind=adding]{background:color-mix(in oklab,var(--accent) 10%,var(--surface));box-shadow:inset 0 0 0 1px var(--accent)}\n.cell[data-kind=removing] .cellFill,.legend i[data-kind=removing]{background:transparent;box-shadow:inset 0 0 0 1px var(--border);opacity:.5}\n.cellFill{flex:1;min-width:0;border-radius:5px;background:var(--surface-muted);box-shadow:inset 0 0 0 1px var(--border-strong);transition:background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.legend{display:flex;flex-wrap:nowrap;gap:var(--space-4);margin:0;padding:0;color:var(--text-secondary);font-size:.8125rem;list-style:none;white-space:nowrap}\n.legend li{display:inline-flex;align-items:center;gap:6px}\n.legend i{flex:none;width:8px;height:8px;border-radius:2px;background:var(--surface-muted);box-shadow:inset 0 0 0 1px var(--border-strong)}\n.legend{gap:var(--space-3)}\n@container (max-width: 339px){.legend .legendDelta{display:none}\n.legendDelta{margin-left:auto}\n.notice{min-height:20px;font-size:.8125rem}\n.noticeLine{display:flex;width:100%;min-width:0;align-items:center;gap:var(--space-2);color:var(--text-secondary)}\n.noticeLine>svg{flex:none;color:var(--text-muted)}\n.noticeLine[data-tone=warning]{color:var(--foreground)}\n.noticeLine[data-tone=warning]>svg{color:var(--warning)}\n.noticeLine[data-tone=success]>svg{color:var(--success)}\n.noticeLine[data-tone=accent]>svg{color:var(--accent)}\n.link{flex:none;margin:-2px 0 -2px auto;padding:2px 0;border:0;background:none;color:var(--accent);font:inherit;font-weight:500;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.link:hover:not(:disabled){color:color-mix(in oklab,var(--accent) 80%,var(--foreground))}\n.link:disabled{color:var(--text-muted);cursor:default}\n.swap{display:grid;min-width:0}\n.swapItem{display:flex;min-width:0;align-items:center;grid-area:1/1}\n.inviteSwap,.inviteSwap>.swapItem{height:56px}\n.footText>.swapItem{min-width:0}\n.footActions>.swapItem{justify-content:flex-end}\n.rollTrack{display:inline-flex}\n.digit{display:inline-block;height:20px;overflow:hidden}\n.digit[data-fresh],.rollChar[data-fresh]{animation:fresh .16s cubic-bezier(.22,1,.36,1) both}\n.digit[data-fresh],.rollChar[data-fresh]{animation:none}\n.strip{display:flex;flex-direction:column;transition:transform .24s cubic-bezier(.22,1,.36,1);will-change:transform}\n.strip>span{display:block;height:20px;line-height:20px;text-align:center}\n@media (prefers-reduced-motion:reduce){.strip{transition:none}\n.rollChar{display:inline-block}\n.seatsRow{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3)}\n.label{display:grid;min-width:0}\n.label .meta{color:var(--text-secondary)}\n.name{font-weight:500}\n.meta{color:var(--text-muted);font-size:.8125rem}\n.stepper{display:inline-flex;flex:none;align-items:center;gap:2px;height:40px;padding:3px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--background);transition:border-color var(--duration-fast) var(--ease-standard)}\n.stepper:hover{border-color:var(--border-strong)}\n.stepper .stepBtn{width:32px;min-height:32px;height:32px;padding:0;border-radius:calc(var(--radius-control) - 4px);color:var(--text-secondary)}\n.stepper .stepBtn[aria-disabled=true]{color:var(--text-muted);opacity:.5}\n.actions [data-pressed],.stepper .stepBtn[data-pressed]{background:var(--surface-muted);color:var(--foreground)}\n.stepper[data-locked] .count{color:var(--text-secondary)}\n.actions{display:flex;flex:none;align-items:center;gap:2px;margin-right:-12px}\n.actions{margin-right:-8px}\n.actions button{padding-inline:var(--space-2)}\n.buttons [data-pressed]{filter:brightness(.9)}\n.buttons{display:flex;align-items:center;gap:var(--space-2)}\n.count{display:inline-flex;width:44px;height:32px;align-items:center;justify-content:center;border-radius:8px;font-size:var(--text-base);font-weight:500;cursor:default}\n.quote{display:grid;gap:var(--space-2);margin:0}\n.quoteRow{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);min-height:20px}\n.quoteRow dt{display:flex;min-width:0;align-items:center;gap:var(--space-2);color:var(--text-secondary);white-space:nowrap}\n.quoteMeta{min-width:0;color:var(--text-muted);font-size:.8125rem}\n.quoteMeta{display:none}\n.amount{flex:none;margin:0;min-width:10ch;color:var(--foreground);text-align:right}\n.amount[data-strong]{font-weight:500}\n.sectionHead{display:flex;align-items:center;gap:var(--space-2)}\n.invites{position:relative;min-height:56px;margin:-8px 0 -16px;padding:0;list-style:none}\n.invite{overflow:hidden}\n.invite+.invite{border-top:1px solid var(--border-subtle)}\n.inviteInner{display:flex;width:100%;min-width:0;height:56px;align-items:center;gap:var(--space-3)}\n.inviteIcon{flex:none;color:var(--text-muted)}\n.inviteText{display:grid;min-width:0;flex:1}\n.email{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.struck{color:var(--text-muted);text-decoration:line-through;text-decoration-color:var(--border-strong)}\n.sentIcon{color:var(--success);margin-right:6px}\n.empty{position:absolute;inset:0;display:flex;height:56px;align-items:center;gap:var(--space-3);color:var(--text-muted)}\n.footer{display:flex;height:64px;align-items:center;justify-content:space-between;gap:var(--space-3);padding:0 var(--space-6);border-top:1px solid var(--border);color:var(--text-secondary)}\n.footer{padding-inline:var(--space-5)}\n.footText{flex:1;min-width:0}\n.footLine{display:flex;min-width:0;align-items:center;gap:var(--space-2)}\n.footLine>svg{flex:none}\n.footLine[data-tone=success]>svg{color:var(--success)}\n.footLine[data-tone=danger]{color:var(--foreground)}\n.footLine[data-tone=danger]>svg{color:var(--danger)}\n.footActions{flex:none;justify-items:end}", {"root":"root","block":"block","srOnly":"srOnly","ellipsis":"ellipsis","strong":"strong","header":"header","titleRow":"titleRow","title":"title","badge":"badge","description":"description","usage":"usage","usageRow":"usageRow","avatars":"avatars","avatar":"avatar","more":"more","used":"used","roll":"roll","amount":"amount","meter":"meter","cellFill":"cellFill","cell":"cell","legend":"legend","legendDelta":"legendDelta","notice":"notice","noticeLine":"noticeLine","link":"link","swap":"swap","swapItem":"swapItem","inviteSwap":"inviteSwap","footText":"footText","footActions":"footActions","rollTrack":"rollTrack","digit":"digit","rollChar":"rollChar","strip":"strip","seatsRow":"seatsRow","label":"label","meta":"meta","name":"name","stepper":"stepper","stepBtn":"stepBtn","actions":"actions","count":"count","buttons":"buttons","quote":"quote","quoteRow":"quoteRow","quoteMeta":"quoteMeta","sectionHead":"sectionHead","invites":"invites","invite":"invite","inviteInner":"inviteInner","inviteIcon":"inviteIcon","inviteText":"inviteText","email":"email","struck":"struck","sentIcon":"sentIcon","empty":"empty","footer":"footer","footLine":"footLine"});
A.reg(75796, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "mail",
    size: 24,
    node: [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(79530, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => a });
  var n = r(51811);
  let o = {
    name: "circle-minus",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M8 12h8", key: "1wcyev" }]
    ],
    aliases: ["minus-circle"]
  };
  o.node;
  let a = (0, n.A)(o);
}

__m(__module,__exports,__require);
});
A.cssFor("seat-manager", [46972]);
A.item("seat-manager", {entry:40486, export:"SeatManager", kind:"block", tier:"pro", unresolved:[]});
})();