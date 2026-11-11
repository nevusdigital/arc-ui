function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { InboxSidebar: () => em, default: () => eb });
  var i = a(95155), n = a(12115), r = a(28245), s = a(55809), o = a(92171), l = a(25354), d = a(18310), c = a(80642), u = a(57700), p = a(57793), m = a(40623), b = a(61665), h = a(95697), x = a(59103), f = a(9383), _ = a(36483), y = a(32159), g = a(75796), v = a(69203), j = a(25879), N = a(76721), w = a(11414), T = a(64577), k = a(36145), S = a(69618), C = a(59680), P = a(15330), $ = a(9005), M = a(65024), R = a(92218), L = a(51288), z = a(36690), A = a(7770), E = a(1568), D = a.n(E);
  let I = { name: "Emma Collins", photo: "media/people/emma-collins.svg" }, Y = { name: "Marcus Johnson", photo: "media/people/marcus-johnson.svg" }, O = { name: "Ava Mitchell", photo: "media/people/ava-mitchell.svg" }, W = { name: "Jasmine Brooks", photo: "media/people/jasmine-brooks.svg" }, B = [I, Y, O, W], F = (e2, t2, a2, i2, n2, r2, s2 = {}) => ({
    id: e2,
    ...t2,
    subject: a2,
    preview: i2,
    time: n2,
    box: r2,
    unread: false,
    starred: false,
    labels: [],
    ...s2
  }), q = [
    F(
      "m1",
      I,
      "Onboarding prototype, round two",
      "I tightened the handoff between steps two and three and left notes on the empty states.",
      "9:42 AM",
      "inbox",
      { unread: true, labels: ["design"] }
    ),
    F(
      "m2",
      O,
      "Launch checklist: four items left",
      "Pricing copy and the status page are the last blockers before Tuesday.",
      "9:10 AM",
      "inbox",
      { unread: true, starred: true, labels: ["launch"] }
    ),
    F(
      "m3",
      Y,
      "Menu and table states for Thursday",
      "Two interaction questions before the review, plus what already feels right.",
      "8:18 AM",
      "inbox",
      { unread: true, labels: ["design"] }
    ),
    F(
      "m4",
      W,
      "Preview build 412 is live",
      "Keyboard fixes and the reduced motion pass are in. The link is in the thread.",
      "Yesterday",
      "inbox",
      { labels: ["launch"] }
    ),
    F(
      "m5",
      I,
      "Interview notes from the Lisbon sessions",
      "Six sessions, three strong patterns. The export flow came up in every one.",
      "Yesterday",
      "inbox",
      { labels: ["research"] }
    ),
    F(
      "m6",
      Y,
      "Portfolio review for the senior role",
      "Two candidates stood out. Could you take the second review on Friday?",
      "Sun",
      "inbox",
      { unread: true, labels: ["hiring"] }
    ),
    F(
      "m7",
      O,
      "Status page copy, final pass",
      "I shortened the incident states and matched the tone of the docs.",
      "Sat",
      "inbox",
      { labels: ["launch"] }
    ),
    F(
      "m8",
      W,
      "Quarterly research readout",
      "Back on Thursday, once the survey numbers are in.",
      "Until Thu",
      "snoozed",
      { labels: ["research"] }
    ),
    F(
      "m9",
      I,
      "Icon set licensing",
      "The vendor replied. We can pick this up when legal has the terms.",
      "Until Fri",
      "snoozed"
    ),
    F(
      "m10",
      Y,
      "Re: Menu and table states",
      "Thursday at two works. I will bring the focus order notes.",
      "8:31 AM",
      "sent",
      { labels: ["design"] }
    ),
    F(
      "m11",
      O,
      "Pricing page review",
      "Left comments on the plan table and the order of the questions.",
      "Yesterday",
      "sent",
      { labels: ["launch"] }
    ),
    F(
      "m12",
      W,
      "Re: Preview build 412",
      "Two small things on the settings page before we share it wider.",
      "Yesterday",
      "drafts"
    ),
    F(
      "m13",
      W,
      "Radius scale merged",
      "The new radius tokens are live on main. Nothing to migrate.",
      "Sep 15",
      "archive",
      { starred: true, labels: ["design"] }
    ),
    F(
      "m14",
      O,
      "Offsite agenda",
      "The room is booked for the 30th. The draft agenda is attached.",
      "Sep 14",
      "archive"
    ),
    F(
      "m15",
      { name: "Design Awards Guild" },
      "Your studio has been shortlisted",
      "Confirm your entry fee today to secure a jury review.",
      "Sun",
      "spam",
      { unread: true }
    )
  ], U = [
    { id: "inbox", label: "Inbox", icon: b.A },
    { id: "starred", label: "Starred", icon: h.A },
    { id: "snoozed", label: "Snoozed", icon: x.A },
    { id: "sent", label: "Sent", icon: f.A },
    { id: "drafts", label: "Drafts", icon: _.A },
    { id: "archive", label: "Archive", icon: y.A }
  ], K = [
    { id: "label-design", label: "Design review", tone: "design" },
    { id: "label-launch", label: "Launch", tone: "launch" },
    { id: "label-research", label: "Research", tone: "research" },
    { id: "label-hiring", label: "Hiring", tone: "hiring" }
  ], G = [
    { id: "all", label: "All mail", icon: g.A },
    { id: "spam", label: "Spam", icon: v.A },
    { id: "trash", label: "Trash", icon: j.A }
  ], X = [...U, ...K, ...G], J = X.map((e2) => e2.id), V = ["inbox", "starred", "snoozed", "archive", "spam", "trash"], H = {
    inbox: ["Inbox zero", "Everything is filed. New mail will land here."],
    starred: [
      "No starred messages",
      "Star a message or drag it here to keep it close."
    ],
    snoozed: [
      "Nothing snoozed",
      "Snoozed messages return to your inbox on time."
    ],
    sent: ["Nothing sent yet", "Messages you send will appear here."],
    drafts: ["No drafts", "Close a message while writing and it waits here."],
    archive: [
      "Archive is empty",
      "Archived messages stay out of the way here."
    ],
    all: ["No mail", "Messages from every folder appear here."],
    spam: ["No spam", "Messages marked as spam are kept for 30 days."],
    trash: ["Trash is empty", "Deleted messages are kept here for 30 days."],
    label: [
      "Nothing with this label",
      "Drag a message onto the label to add it."
    ]
  }, Q = { to: "", subject: "", body: "" }, Z = (e2) => X.find((t2) => t2.id === e2)?.label ?? "", ee = (e2) => e2.startsWith("label-") ? e2.slice(6) : null, et = (e2) => "inbox" === e2 || "spam" === e2;
  function ea(e2, t2) {
    let a2 = ee(t2), i2 = "spam" !== e2.box && "trash" !== e2.box;
    return a2 ? i2 && e2.labels.includes(a2) : "starred" === t2 ? i2 && e2.starred : "all" === t2 ? i2 && "drafts" !== e2.box : e2.box === t2;
  }
  function ei(e2, t2) {
    let a2 = ee(t2);
    return a2 ? "drafts" !== e2.box && !e2.labels.includes(a2) : "starred" === t2 ? "drafts" !== e2.box && !e2.starred : "sent" !== t2 && "drafts" !== t2 && "all" !== t2 && ("drafts" === e2.box ? "trash" === t2 : e2.box !== t2);
  }
  function en(e2) {
    return "drafts" === e2.box ? { to: "trash", label: "Delete draft", icon: j.A } : "archive" === e2.box || "spam" === e2.box || "trash" === e2.box ? { to: "inbox", label: "Move to Inbox", icon: b.A } : { to: "archive", label: "Archive", icon: y.A };
  }
  function er(e2, t2) {
    let a2 = t2?.querySelector("[data-avatar]");
    if (!e2 || !a2) return null;
    let i2 = e2.getBoundingClientRect(), n2 = a2.getBoundingClientRect();
    return {
      x: n2.left - i2.left - e2.clientLeft - 6,
      y: n2.top - i2.top - e2.clientTop + n2.height / 2 - 20
    };
  }
  let es = {
    enter: (e2) => ({
      opacity: 0,
      y: 14 * e2,
      filter: `blur(${A.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        y: A.T.spring.smooth,
        default: {
          duration: A.T.duration.standard,
          ease: [...A.T.ease.enter]
        }
      }
    },
    exit: (e2) => ({
      opacity: 0,
      y: -10 * e2,
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: {
        duration: A.T.duration.exit,
        ease: [...A.T.ease.standard]
      }
    })
  }, eo = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: A.T.duration.instant } },
    exit: { opacity: 0, transition: { duration: A.T.duration.instant } }
  }, el = {
    initial: { opacity: 0, y: "0.3em", filter: `blur(${A.T.blur.soft}px)` },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: A.T.duration.standard,
        ease: [...A.T.ease.enter]
      }
    },
    exit: {
      opacity: 0,
      y: "-0.3em",
      filter: `blur(${A.T.blur.subtle}px)`,
      transition: {
        duration: A.T.duration.fast,
        ease: [...A.T.ease.standard]
      }
    }
  }, ed = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }, ec = { duration: 0 };
  function eu({
    enabled: e2 = true,
    label: t2,
    note: a2,
    shortcut: r2,
    side: s2 = "right",
    children: o2
  }) {
    let [l2, d2] = (0, n.useState)(false);
    return !e2 && l2 && d2(false), (0, i.jsxs)(m.bL, {
      open: e2 && l2,
      onOpenChange: (t3) => d2(t3 && e2),
      children: [
        (0, i.jsx)(m.l9, { asChild: true, children: o2 }),
        (0, i.jsx)(m.ZL, {
          children: (0, i.jsxs)(m.UC, {
            className: D().tip,
            side: s2,
            sideOffset: "right" === s2 ? 14 : 8,
            collisionPadding: 8,
            children: [
              t2,
              a2 && (0, i.jsx)("span", { className: D().tipNote, children: a2 }),
              r2 && (0, i.jsx)("kbd", { children: r2 })
            ]
          })
        })
      ]
    });
  }
  function ep({ collapsed: e2, reduce: t2 }) {
    return (0, i.jsxs)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      "aria-hidden": "true",
      children: [
        (0, i.jsx)("rect", {
          x: "2.75",
          y: "3.75",
          width: "14.5",
          height: "12.5",
          rx: "3.5"
        }),
        (0, i.jsx)(l.PY1.path, {
          d: "M8.25 4.25v11.5",
          initial: false,
          animate: { x: e2 ? -2.5 : 0 },
          transition: t2 ? ec : A.T.spring.smooth
        })
      ]
    });
  }
  function em({ defaultCollapsed: e2 = false, onCollapsedChange: t2 }) {
    var a2;
    let b2, x2, _2, y2 = (0, n.useId)(), v2 = (0, d.I)(), [j2, E2] = (0, n.useState)(!!e2 || null), [I2, Y2] = (0, n.useState)({ compact: false, narrow: false, ready: false }), { compact: O2, narrow: W2 } = I2, F2 = j2 ?? W2, ec2 = !O2 && F2, [eb2, eh] = (0, n.useState)(false), ex = O2 && eb2, ef = (0, n.useRef)(false), e_ = (a2 = !!v2, b2 = (0, r.d)(+!ec2), x2 = (0, s.G)(b2, (e10) => `calc(64px + (var(--full) - 64px) * ${e10})`), (0, n.useEffect)(() => {
      let e10 = +!ec2;
      if (a2 || !ef.current) return void b2.jump(e10);
      let t3 = (0, o.i)(b2, e10, A.T.spring.smooth);
      return () => t3.stop();
    }, [ec2, a2, b2, ef]), x2), ey = (0, r.d)(0), [eg, ev] = (0, n.useState)(q), [ej, eN] = (0, n.useState)("inbox"), [ew, eT] = (0, n.useState)(1), [ek, eS] = (0, n.useState)(null), [eC, eP] = (0, n.useState)(true), [e$, eM] = (0, n.useState)(false), [eR, eL] = (0, n.useState)(false), [ez, eA] = (0, n.useState)(Q), [eE, eD] = (0, n.useState)(false), [eI, eY] = (0, n.useState)({
      key: 0,
      text: "Drag a message onto a folder, or use Move to"
    }), [eO, eW] = (0, n.useState)(null), [eB, eF] = (0, n.useState)(null), [eq, eU] = (0, n.useState)(null), [eK, eG] = (0, n.useState)(null), [eX, eJ] = (0, n.useState)(null), [eV, eH] = (0, n.useState)(null), eQ = (0, n.useRef)(null), eZ = (0, n.useRef)(null), e0 = (0, n.useRef)(null), e1 = (0, n.useRef)(null), e5 = (0, n.useRef)(null), e22 = (0, n.useRef)(null), e6 = (0, n.useRef)(null), e7 = (0, n.useRef)(null), e8 = (0, n.useRef)(null), e4 = (0, n.useRef)(/* @__PURE__ */ new Map()), e3 = (0, n.useRef)(/* @__PURE__ */ new Map()), e9 = (0, n.useRef)(null), te = (0, n.useRef)(false), tt = (0, n.useRef)(null), ta = (0, n.useRef)(false), ti = (0, n.useRef)(0), tn = (0, n.useRef)(0), tr = (0, n.useRef)(0), ts = (0, n.useRef)(0), to = (0, n.useRef)(false), tl = (0, r.d)(0), td = (0, r.d)(0), tc = (0, r.d)(1), tu = (0, r.d)(0), tp = eg.filter((e10) => ea(e10, ej)), tm = tp.filter((e10) => e10.unread).length, tb = eX ? eg.find((e10) => e10.id === eX) : void 0, th = (function(e10) {
      let t3 = e10.trim().toLowerCase();
      if (!(t3.length < 3))
        return B.find(
          (e11) => e11.name.toLowerCase().startsWith(t3) || t3.startsWith(e11.name.split(" ")[0].toLowerCase())
        );
    })(ez.to), tx = { duration: 0 }, tf = v2 ? tx : A.T.spring.snappy, t_ = v2 ? tx : A.T.spring.smooth, ty = v2 ? tx : A.T.spring.morph, tg = H[ee(ej) ? "label" : ej], tv = (e10, t3) => (a3) => {
      a3 ? e10.current.set(t3, a3) : e10.current.delete(t3);
    };
    (0, n.useLayoutEffect)(() => {
      let e10 = eQ.current;
      if (!e10) return;
      let t3 = (e11) => Y2((t4) => {
        let a4 = { compact: e11 < 600, narrow: e11 >= 600 && e11 <= 720, ready: true };
        return t4.compact === a4.compact && t4.narrow === a4.narrow && t4.ready ? t4 : a4;
      });
      t3(e10.getBoundingClientRect().width);
      let a3 = requestAnimationFrame(() => {
        ef.current = true;
      }), i2 = new ResizeObserver(([e11]) => t3(e11.contentRect.width));
      return i2.observe(e10), () => {
        i2.disconnect(), cancelAnimationFrame(a3);
      };
    }, []), !O2 && eb2 && eh(false), (0, n.useEffect)(() => {
      let e10 = +!!ex;
      if (v2 || !ef.current) return void ey.jump(e10);
      let t3 = (0, o.i)(ey, e10, A.T.spring.smooth);
      return () => t3.stop();
    }, [ex, v2, ey]);
    let tj = (0, n.useRef)(false);
    function tN(e10) {
      e10 !== F2 && (E2(e10), tP(e10 ? "Sidebar collapsed" : "Sidebar expanded"), t2?.(e10));
    }
    (0, n.useEffect)(() => {
      if (ex) {
        tj.current = true;
        let e10 = e7.current?.querySelector('[aria-current="page"]') ?? e7.current?.querySelector("button");
        e10?.focus({ preventScroll: true });
      } else
        tj.current && (tj.current = false, e6.current?.focus({ preventScroll: true }));
    }, [ex]), _2 = (0, n.useEffectEvent)((e10) => {
      if ("[" !== e10.key || e10.repeat || e10.metaKey || e10.ctrlKey || e10.altKey || e10.defaultPrevented)
        return;
      let t3 = eQ.current, a3 = e10.target instanceof HTMLElement ? e10.target : null;
      if (!t3 || a3 && (a3.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(a3.tagName) || a3.closest('[role="menu"], [role="dialog"]')))
        return;
      let i2 = t3.getBoundingClientRect();
      !i2.width || i2.bottom < 0 || i2.top > window.innerHeight || (e10.preventDefault(), (() => {
        eR || eX || (O2 ? eh(!eb2) : tN(!F2));
      })());
    }), (0, n.useEffect)(() => {
      let e10 = (e11) => _2(e11);
      return window.addEventListener("keydown", e10), () => window.removeEventListener("keydown", e10);
    }, []), (0, n.useEffect)(() => {
      eR ? e8.current?.focus({ preventScroll: true }) : ta.current && (ta.current = false, e5.current?.focus({ preventScroll: true }));
    }, [eR]);
    let tw = (0, n.useEffectEvent)((e10) => {
      let t3 = e9.current;
      "Escape" === e10.key && t3?.dragging && !t3.cancelled && (t3.cancelled = true, tI(), tY(t3.id), tP("Move cancelled"));
    });
    (0, n.useEffect)(() => {
      if (!eX) return;
      let e10 = (e11) => tw(e11);
      return window.addEventListener("keydown", e10), () => window.removeEventListener("keydown", e10);
    }, [eX]);
    let tT = (0, n.useRef)(null), [tk, tS] = (0, n.useState)(false);
    function tC(e10) {
      let t3 = tT.current;
      if (t3 && t3.id === e10.pointerId && (tT.current = null, t3.active)) {
        if (tS(false), "pointercancel" !== e10.type && (0.55 > ey.get() || t3.velocity < -0.4))
          return void eh(false);
        v2 ? ey.jump(1) : (0, o.i)(ey, 1, A.T.spring.smooth);
      }
    }
    function tP(e10) {
      eY((t3) => ({ key: t3.key + 1, text: e10 }));
    }
    function t$(e10) {
      let t3 = eZ.current, a3 = t3?.getBoundingClientRect(), i2 = e10.getBoundingClientRect();
      return {
        x: i2.left - (a3?.left ?? 0) - (t3?.clientLeft ?? 0),
        y: i2.top - (a3?.top ?? 0) - (t3?.clientTop ?? 0),
        height: i2.height
      };
    }
    function tM(e10) {
      let t3 = ee(e10) ? "toggle-labels" : "spam" === e10 || "trash" === e10 || "all" === e10 ? "toggle-more" : "";
      return O2 && !eb2 ? e6.current ?? void 0 : e4.current.get(e10) ?? e4.current.get(t3);
    }
    function tR(e10, t3) {
      tn.current === t3 && (eF(null), eU(null), eG({ view: e10, key: ++tr.current }));
    }
    function tL(e10, t3) {
      let a3 = tM(e10);
      if (!a3 || v2) return void tR(e10, t3);
      let i2 = t$(a3), n2 = A.T.duration.considered + 0.06;
      (0, o.i)(tl, i2.x + 6, { duration: n2, ease: [...A.T.ease.inOut] }), (0, o.i)(td, i2.y + i2.height / 2 - 20, {
        duration: n2,
        ease: [...A.T.ease.standard]
      }), (0, o.i)(tc, 0.34, { duration: n2, ease: [...A.T.ease.inOut] }), (0, o.i)(tu, [1, 1, 0], { duration: n2, times: [0, 0.7, 1] }).then(
        () => tR(e10, t3)
      );
    }
    function tz(e10, t3, a3, i2) {
      let n2 = ++tn.current;
      (eU({ id: a3, to: t3 }), e10 && !v2 && tM(t3)) ? (eF({ key: n2, name: i2.name, photo: i2.photo, subject: i2.subject }), tl.jump(e10.x), td.jump(e10.y), tc.jump(1), tu.jump(1), tL(t3, n2)) : tR(t3, n2);
    }
    function tA(e10, t3, a3, i2, n2) {
      if (ea(e10, ej) && !ea(t3, ej)) {
        let t4 = tp.map((e11) => e11.id), a4 = t4.indexOf(e10.id), i3 = t4[a4 + 1] ?? t4[a4 - 1], r3 = (i3 ? e3.current.get(i3) : void 0) ?? e1.current;
        "menu" === n2 ? tt.current = r3 : e3.current.get(e10.id)?.parentElement?.contains(document.activeElement) && requestAnimationFrame(() => r3?.focus({ preventScroll: true })), ek === e10.id && eS(null);
      }
      let r2 = i2 && "drag" !== n2 ? er(eZ.current, e3.current.get(e10.id)) : null;
      ev((a4) => a4.map((a5) => a5.id === e10.id ? t3 : a5)), tP(a3), i2 && (eW(e10), "drag" === n2 ? (eU({ id: e10.id, to: i2 }), tL(i2, tn.current)) : tz(r2, i2, e10.id, e10));
    }
    function tE(e10, t3, a3) {
      let i2, n2;
      ei(e10, t3) && tA(
        e10,
        (i2 = ee(t3)) ? { ...e10, labels: [...e10.labels, i2] } : "starred" === t3 ? { ...e10, starred: true } : { ...e10, box: t3, unread: !!et(t3) && e10.unread },
        (n2 = `\u201C${e10.subject}\u201D`, ee(t3) ? `Labeled ${n2} ${Z(t3)}` : "starred" === t3 ? `Starred ${n2}` : "archive" === t3 ? `Archived ${n2}` : `Moved ${n2} to ${Z(t3)}`),
        t3,
        a3
      );
    }
    function tD(e10) {
      tA(
        e10,
        { ...e10, starred: !e10.starred },
        e10.starred ? `Removed the star from \u201C${e10.subject}\u201D` : `Starred \u201C${e10.subject}\u201D`,
        null,
        "row"
      ), e10.starred || eG({ view: "starred", key: ++tr.current });
    }
    function tI() {
      window.clearTimeout(ti.current), eJ(null), eH(null);
    }
    function tY(e10) {
      let t3 = er(eZ.current, e3.current.get(e10)), a3 = tn.current;
      v2 || !t3 ? eF(null) : ((0, o.i)(tl, t3.x, A.T.spring.smooth), (0, o.i)(td, t3.y, A.T.spring.smooth), (0, o.i)(tu, 0, { duration: A.T.duration.exit, delay: 0.14 }).then(
        () => {
          tn.current === a3 && eF(null);
        }
      ));
    }
    function tO() {
      let e10 = e9.current;
      e9.current = null, e10?.dragging && !e10.cancelled && (tI(), tY(e10.id));
    }
    function tW(e10) {
      return {
        id: `new-${++ts.current}`,
        name: th?.name ?? (ez.to.trim() || "No recipient"),
        photo: th?.photo,
        subject: ez.subject.trim() || "No subject",
        preview: ez.body.trim() || "No message",
        time: "Now",
        box: e10,
        unread: false,
        starred: false,
        labels: []
      };
    }
    function tB() {
      let e10 = e22.current;
      if (!e10) return null;
      let t3 = t$(e10);
      return { x: t3.x + 12, y: t3.y + 8 };
    }
    function tF(e10) {
      let t3 = !!(ez.to.trim() || ez.subject.trim() || ez.body.trim()), a3 = tB();
      if (ta.current = true, eL(false), eD(false), eA(Q), !t3) return;
      if ("discard" === e10) return void tP("Draft discarded");
      let i2 = tW("drafts");
      ev((e11) => [i2, ...e11]), tP(`Saved \u201C${i2.subject}\u201D to Drafts.`), tz(a3, "drafts", i2.id, i2);
    }
    function tq(e10) {
      if (e10?.preventDefault(), !ez.to.trim()) {
        eD(true), e8.current?.focus();
        return;
      }
      let t3 = tB(), a3 = tW("sent");
      ta.current = true, eL(false), eA(Q), ev((e11) => [a3, ...e11]), tP(`Sent \u201C${a3.subject}\u201D to ${a3.name}.`), tz(t3, "sent", a3.id, a3);
    }
    function tU(e10) {
      var t3, a3;
      let n2 = e10.icon, r2 = (t3 = e10.id, a3 = eq?.to === t3 ? eg.filter((e11) => e11.id !== eq.id) : eg, et(t3) ? a3.filter((e11) => e11.box === t3 && e11.unread).length : "sent" === t3 || "archive" === t3 || "all" === t3 || "trash" === t3 ? 0 : a3.filter((e11) => ea(e11, t3)).length), s2 = et(e10.id), o2 = eK && eK.view === e10.id ? eK.key : 0, d2 = tb ? ei(tb, e10.id) ? eV === e10.id ? "over" : "ready" : "off" : void 0, u2 = `${r2} ${s2 ? "unread" : 1 === r2 ? "message" : "messages"}`;
      return (0, i.jsx)(
        "li",
        {
          children: (0, i.jsx)(eu, {
            enabled: ec2 && !tb,
            label: e10.label,
            note: r2 > 0 ? u2 : void 0,
            children: (0, i.jsxs)("button", {
              ref: tv(e4, e10.id),
              type: "button",
              className: D().navItem,
              "aria-current": ej === e10.id ? "page" : void 0,
              "data-drop": d2,
              onClick: () => {
                var t4;
                (t4 = e10.id) !== ej && (eT(J.indexOf(t4) > J.indexOf(ej) ? 1 : -1), eN(t4), eS(null), e0.current?.scrollTo({ top: 0 })), ex && eh(false);
              },
              children: [
                ej === e10.id && (0, i.jsx)(l.PY1.span, {
                  layoutId: "nav-active",
                  className: D().navActive,
                  transition: ty
                }),
                (0, i.jsx)(
                  l.PY1.span,
                  {
                    className: D().navIcon,
                    initial: !!o2 && !v2 && { scale: 1.35 },
                    animate: { scale: 1 },
                    transition: A.T.spring.snappy,
                    "aria-hidden": "true",
                    children: n2 ? (0, i.jsx)(n2, { size: 16, strokeWidth: 1.75 }) : (0, i.jsx)("i", {
                      className: D().swatch,
                      "data-tone": e10.tone
                    })
                  },
                  o2
                ),
                (0, i.jsx)("span", {
                  className: D().navLabel,
                  children: e10.label
                }),
                (0, i.jsx)("span", {
                  className: D().navTrail,
                  children: (0, i.jsx)(c.N, {
                    initial: false,
                    children: r2 > 0 && (0, i.jsx)(
                      l.PY1.span,
                      {
                        className: D().navCount,
                        "data-strong": s2 || void 0,
                        "aria-hidden": "true",
                        initial: { opacity: 0, scale: 0.6 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.6 },
                        transition: tf,
                        children: (0, i.jsx)(M.q, { value: r2 })
                      },
                      "count"
                    )
                  })
                }),
                s2 && (0, i.jsx)("span", {
                  className: D().navDot,
                  "aria-hidden": "true",
                  children: (0, i.jsx)(c.N, {
                    initial: false,
                    children: r2 > 0 && (0, i.jsx)(
                      l.PY1.span,
                      {
                        className: D().navDotFace,
                        initial: { scale: 0 },
                        animate: { scale: 1 },
                        exit: { scale: 0 },
                        transition: tf
                      },
                      "dot"
                    )
                  })
                }),
                r2 > 0 && (0, i.jsxs)("span", {
                  className: D().srOnly,
                  children: [", ", u2]
                })
              ]
            })
          })
        },
        e10.id
      );
    }
    function tK(e10, t3, a3, n2, r2, s2) {
      let o2 = `${y2}-${e10}`, d2 = `toggle-${e10}`;
      return (0, i.jsxs)("div", {
        className: D().section,
        children: [
          (0, i.jsx)("span", {
            className: D().sectionRule,
            "aria-hidden": "true"
          }),
          (0, i.jsx)(eu, {
            enabled: ec2 && !tb,
            label: t3,
            children: (0, i.jsxs)("button", {
              ref: tv(e4, d2),
              type: "button",
              className: D().sectionToggle,
              "aria-expanded": n2,
              "aria-controls": n2 ? o2 : void 0,
              "data-active": !n2 && s2.some((e11) => e11.id === ej) || void 0,
              "data-drop": tb && !n2 && eV === d2 ? "over" : void 0,
              onClick: () => r2(!n2),
              children: [
                (0, i.jsx)(a3, {
                  className: D().sectionIcon,
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, i.jsx)("span", {
                  className: D().sectionTitle,
                  children: t3
                }),
                (0, i.jsx)(N.A, {
                  className: D().chevron,
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              ]
            })
          }),
          (0, i.jsx)(c.N, {
            initial: false,
            children: n2 && (0, i.jsx)(
              l.PY1.div,
              {
                id: o2,
                className: D().sectionBody,
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: t_,
                children: (0, i.jsx)("ul", {
                  className: D().navList,
                  children: s2.map(tU)
                })
              },
              "body"
            )
          })
        ]
      });
    }
    let tG = X.find((e10) => e10.id === ej)?.icon ?? k.A, tX = (0, i.jsx)(c.N, {
      initial: false,
      children: !eR && (0, i.jsx)(
        eu,
        {
          enabled: ec2 || O2,
          label: "Compose",
          children: (0, i.jsx)(l.PY1.button, {
            ref: e5,
            layoutId: "compose",
            type: "button",
            className: D().compose,
            style: { borderRadius: 10 },
            transition: ty,
            "aria-haspopup": "dialog",
            "aria-label": O2 ? "Compose" : void 0,
            onClick: () => {
              to.current = true, eL(true), eD(false);
            },
            children: (0, i.jsxs)(l.PY1.span, {
              layout: "position",
              className: D().composeInner,
              initial: !!to.current && { opacity: 0 },
              animate: eR ? { opacity: 0, transition: { duration: 0.06 } } : {
                opacity: 1,
                transition: {
                  duration: A.T.duration.fast,
                  delay: 0.14 * !v2
                }
              },
              children: [
                (0, i.jsx)(S.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, i.jsx)("span", {
                  className: D().composeText,
                  children: "Compose"
                })
              ]
            })
          })
        },
        "compose"
      )
    }), tJ = O2 ? ex ? "Close mailboxes" : "Open mailboxes" : F2 ? "Expand sidebar" : "Collapse sidebar";
    return (0, i.jsx)("div", {
      ref: eQ,
      className: `${D().root} ${D().tones}`,
      onKeyDown: function(e10) {
        if (!ex || e10.defaultPrevented) return;
        if ("Escape" === e10.key) {
          e10.preventDefault(), eh(false);
          return;
        }
        if ("Tab" !== e10.key) return;
        let t3 = [
          ...e7.current?.querySelectorAll("button:not([disabled])") ?? []
        ], a3 = t3[0], i2 = t3[t3.length - 1];
        a3 && i2 && (e10.shiftKey && document.activeElement === a3 ? (e10.preventDefault(), i2.focus()) : (e10.shiftKey || document.activeElement !== i2) && e7.current?.contains(document.activeElement) || (e10.preventDefault(), a3.focus()));
      },
      children: (0, i.jsx)(m.Kq, {
        delayDuration: 250,
        skipDelayDuration: 300,
        children: (0, i.jsx)(u.o, {
          id: y2,
          children: (0, i.jsxs)(l.PY1.section, {
            ref: eZ,
            className: D().shell,
            "aria-label": "Mail",
            style: { "--drawer": ey },
            "data-dragging": eX ? "" : void 0,
            "data-ready": I2.ready || void 0,
            "data-drawer": ex || void 0,
            children: [
              (0, i.jsxs)(l.PY1.div, {
                ref: e7,
                id: `${y2}-sidebar`,
                className: D().sidebar,
                style: { width: e_ },
                "data-rail": ec2 || void 0,
                "data-swiping": tk || void 0,
                inert: O2 && !eb2,
                onPointerDown: function(e10) {
                  ex && "mouse" !== e10.pointerType && e10.isPrimary && (tT.current = {
                    id: e10.pointerId,
                    x: e10.clientX,
                    y: e10.clientY,
                    width: e10.currentTarget.offsetWidth + 64,
                    active: false,
                    last: e10.clientX,
                    time: e10.timeStamp,
                    velocity: 0
                  });
                },
                onPointerMove: function(e10) {
                  let t3 = tT.current;
                  if (!t3 || t3.id !== e10.pointerId) return;
                  let a3 = e10.clientX - t3.x, i2 = e10.clientY - t3.y;
                  if (!t3.active) {
                    if (8 > Math.hypot(a3, i2)) return;
                    if (a3 > 0 || Math.abs(i2) > Math.abs(a3)) {
                      tT.current = null;
                      return;
                    }
                    t3.active = true, e10.currentTarget.setPointerCapture(e10.pointerId), ey.stop(), tS(true);
                  }
                  let n2 = e10.timeStamp - t3.time;
                  n2 > 0 && (t3.velocity = (e10.clientX - t3.last) / n2), t3.last = e10.clientX, t3.time = e10.timeStamp, ey.set(Math.min(1, Math.max(0, 1 + a3 / t3.width)));
                },
                onPointerUp: tC,
                onPointerCancel: tC,
                "aria-label": O2 ? "Mailboxes" : void 0,
                role: O2 ? "dialog" : void 0,
                "aria-modal": ex || void 0,
                children: [
                  !O2 && (0, i.jsx)("div", {
                    className: D().composeSlot,
                    children: tX
                  }),
                  (0, i.jsxs)(l.PY1.nav, {
                    layoutScroll: true,
                    className: D().nav,
                    "aria-label": "Mailboxes",
                    children: [
                      (0, i.jsx)("ul", {
                        className: D().navList,
                        children: U.map(tU)
                      }),
                      tK("labels", "Labels", k.A, eC, eP, K),
                      tK("more", "More", C.A, e$, eM, G)
                    ]
                  }),
                  (0, i.jsx)(eu, {
                    enabled: ec2,
                    label: "Sofia Ramirez",
                    note: "sofia@fieldnote.studio",
                    children: (0, i.jsxs)("div", {
                      className: D().account,
                      children: [
                        (0, i.jsx)(R.e, {
                          name: "Sofia Ramirez",
                          src: "media/people/sofia-ramirez.svg",
                          size: "sm",
                          status: "online"
                        }),
                        (0, i.jsxs)("span", {
                          className: D().accountText,
                          children: [
                            (0, i.jsx)("span", { children: "Sofia Ramirez" }),
                            (0, i.jsx)("span", {
                              children: "sofia@fieldnote.studio"
                            })
                          ]
                        })
                      ]
                    })
                  })
                ]
              }),
              (0, i.jsx)("div", {
                className: D().backdrop,
                "aria-hidden": "true",
                onClick: () => {
                  eh(false);
                }
              }),
              (0, i.jsxs)("div", {
                className: D().pane,
                inert: ex,
                children: [
                  (0, i.jsxs)("header", {
                    className: D().paneHeader,
                    children: [
                      (0, i.jsxs)("div", {
                        className: D().paneTitle,
                        children: [
                          (0, i.jsx)(eu, {
                            label: tJ,
                            shortcut: "[",
                            side: "bottom",
                            children: (0, i.jsx)("button", {
                              ref: e6,
                              type: "button",
                              className: D().paneToggle,
                              "aria-label": tJ,
                              "aria-expanded": O2 ? ex : !F2,
                              "aria-controls": `${y2}-sidebar`,
                              "aria-keyshortcuts": "[",
                              onClick: () => O2 ? void eh(!eb2) : tN(!F2),
                              children: (0, i.jsx)(ep, {
                                collapsed: O2 ? !ex : F2,
                                reduce: !!v2
                              })
                            })
                          }),
                          (0, i.jsx)("h2", {
                            ref: e1,
                            id: `${y2}-title`,
                            className: D().title,
                            tabIndex: -1,
                            children: (0, i.jsx)(c.N, {
                              mode: "popLayout",
                              initial: false,
                              children: (0, i.jsx)(
                                l.PY1.span,
                                {
                                  className: D().titleText,
                                  ...v2 ? ed : el,
                                  children: Z(ej)
                                },
                                ej
                              )
                            })
                          })
                        ]
                      }),
                      (0, i.jsxs)("p", {
                        className: D().summary,
                        children: [
                          (0, i.jsx)("span", {
                            className: D().num,
                            children: (0, i.jsx)(M.q, { value: tp.length })
                          }),
                          1 === tp.length ? " message" : " messages",
                          (0, i.jsx)(c.N, {
                            initial: false,
                            children: tm > 0 && (0, i.jsx)(
                              l.PY1.span,
                              {
                                className: D().unreadClause,
                                initial: { opacity: 0, width: 0 },
                                animate: { opacity: 1, width: "auto" },
                                exit: { opacity: 0, width: 0 },
                                transition: ty,
                                children: (0, i.jsxs)("span", {
                                  children: [
                                    ", ",
                                    (0, i.jsx)("span", {
                                      className: D().num,
                                      children: (0, i.jsx)(M.q, {
                                        value: tm
                                      })
                                    }),
                                    " unread"
                                  ]
                                })
                              },
                              "unread"
                            )
                          })
                        ]
                      }),
                      O2 && (0, i.jsx)("div", {
                        className: D().headerCompose,
                        children: tX
                      })
                    ]
                  }),
                  (0, i.jsx)("div", {
                    ref: e0,
                    className: D().viewport,
                    children: (0, i.jsx)(c.N, {
                      mode: "popLayout",
                      initial: false,
                      custom: ew,
                      children: (0, i.jsxs)(
                        l.PY1.div,
                        {
                          className: D().page,
                          custom: ew,
                          variants: v2 ? eo : es,
                          initial: "enter",
                          animate: "center",
                          exit: "exit",
                          children: [
                            (0, i.jsx)("ul", {
                              className: D().list,
                              "aria-labelledby": `${y2}-title`,
                              children: (0, i.jsx)(c.N, {
                                initial: false,
                                children: tp.map((e10) => {
                                  let t3, a3, n2, r2;
                                  return a3 = (t3 = en(e10)).icon, n2 = "sent" === e10.box ? "To " : "drafts" === e10.box ? "Draft to " : "", r2 = [
                                    e10.unread && "unread",
                                    e10.starred && "starred",
                                    ...e10.labels.map(
                                      (e11) => `labeled ${Z(`label-${e11}`)}`
                                    )
                                  ].filter(Boolean).join(", "), (0, i.jsxs)(
                                    l.PY1.li,
                                    {
                                      className: D().row,
                                      "data-unread": e10.unread || void 0,
                                      "data-selected": ek === e10.id || void 0,
                                      "data-dragging": eX === e10.id || void 0,
                                      initial: { height: 0, opacity: 0 },
                                      animate: { height: "auto", opacity: 1 },
                                      exit: { height: 0, opacity: 0 },
                                      transition: t_,
                                      children: [
                                        (0, i.jsxs)("button", {
                                          ref: tv(e3, e10.id),
                                          type: "button",
                                          className: D().rowMain,
                                          "aria-keyshortcuts": "E S",
                                          onClick: () => {
                                            te.current || (eS(e10.id), e10.unread && (ev(
                                              (t4) => t4.map(
                                                (t5) => t5.id === e10.id ? { ...t5, unread: false } : t5
                                              )
                                            ), tP(
                                              `Marked \u201C${e10.subject}\u201D as read`
                                            )));
                                          },
                                          onKeyDown: (t4) => (function(e11, t5) {
                                            if (e11.metaKey || e11.ctrlKey || e11.altKey)
                                              return;
                                            let a4 = e11.key.toLowerCase();
                                            "e" === a4 && (e11.preventDefault(), tE(t5, en(t5).to, "row")), "s" === a4 && (e11.preventDefault(), tD(t5));
                                          })(t4, e10),
                                          onPointerDown: (t4) => {
                                            "touch" !== t4.pointerType && 0 === t4.button && !eR && (e9.current = {
                                              id: e10.id,
                                              x: t4.clientX,
                                              y: t4.clientY,
                                              dragging: false,
                                              cancelled: false,
                                              over: null
                                            }, t4.currentTarget.setPointerCapture(
                                              t4.pointerId
                                            ));
                                          },
                                          onPointerMove: (t4) => (function(e11, t5) {
                                            let a4 = e9.current, i2 = eZ.current;
                                            if (!a4 || a4.id !== t5.id || a4.cancelled || !i2)
                                              return;
                                            if (!a4.dragging) {
                                              if (6 > Math.hypot(
                                                e11.clientX - a4.x,
                                                e11.clientY - a4.y
                                              ))
                                                return;
                                              let n4 = er(
                                                i2,
                                                e3.current.get(t5.id)
                                              );
                                              if (!n4) return;
                                              a4.dragging = true, eF({
                                                key: ++tn.current,
                                                name: t5.name,
                                                photo: t5.photo,
                                                subject: t5.subject
                                              }), eJ(t5.id), tl.jump(n4.x), td.jump(n4.y), tc.jump(1), tu.jump(0), (0, o.i)(tu, 1, {
                                                duration: A.T.duration.instant
                                              });
                                            }
                                            let n3 = i2.getBoundingClientRect(), r3 = e11.clientX - n3.left - i2.clientLeft - 20, s2 = e11.clientY - n3.top - i2.clientTop - 20;
                                            v2 ? (tl.jump(r3), td.jump(s2)) : ((0, o.i)(
                                              tl,
                                              r3,
                                              A.T.spring.responsive
                                            ), (0, o.i)(
                                              td,
                                              s2,
                                              A.T.spring.responsive
                                            ));
                                            let l2 = null;
                                            for (let [t6, a5] of e4.current) {
                                              let i3 = a5.getBoundingClientRect();
                                              if (e11.clientX >= i3.left && e11.clientX <= i3.right && e11.clientY >= i3.top && e11.clientY <= i3.bottom) {
                                                l2 = t6;
                                                break;
                                              }
                                            }
                                            l2 !== a4.over && (a4.over = l2, eH(l2), window.clearTimeout(
                                              ti.current
                                            ), ("toggle-labels" === l2 || "toggle-more" === l2) && (ti.current = window.setTimeout(
                                              () => ("toggle-labels" === l2 ? eP : eM)(true),
                                              600
                                            )));
                                          })(t4, e10),
                                          onPointerUp: () => (function(e11) {
                                            let t4 = e9.current;
                                            if ((e9.current = null, t4?.dragging) && (te.current = true, window.setTimeout(() => {
                                              te.current = false;
                                            }, 0), !t4.cancelled)) {
                                              let a4;
                                              tI(), null !== (a4 = t4.over) && J.includes(a4) && ei(e11, t4.over) ? tE(e11, t4.over, "drag") : tY(e11.id);
                                            }
                                          })(e10),
                                          onPointerCancel: tO,
                                          onDragStart: (e11) => e11.preventDefault(),
                                          children: [
                                            (0, i.jsx)(c.N, {
                                              initial: false,
                                              children: e10.unread && (0, i.jsx)(
                                                l.PY1.span,
                                                {
                                                  className: D().dot,
                                                  initial: { scale: 0 },
                                                  animate: { scale: 1 },
                                                  exit: { scale: 0 },
                                                  transition: tf
                                                },
                                                "dot"
                                              )
                                            }),
                                            (0, i.jsx)(R.e, {
                                              name: e10.name,
                                              src: e10.photo,
                                              size: "md",
                                              "data-avatar": ""
                                            }),
                                            (0, i.jsxs)("span", {
                                              className: D().rowText,
                                              children: [
                                                (0, i.jsxs)("span", {
                                                  className: D().rowTop,
                                                  children: [
                                                    (0, i.jsxs)("span", {
                                                      className: D().sender,
                                                      children: [n2, e10.name]
                                                    }),
                                                    (0, i.jsx)("span", {
                                                      className: D().rowLabels,
                                                      "aria-hidden": "true",
                                                      children: (0, i.jsx)(
                                                        c.N,
                                                        {
                                                          initial: false,
                                                          children: e10.labels.map(
                                                            (e11) => (0, i.jsx)(
                                                              l.PY1.i,
                                                              {
                                                                className: D().swatch,
                                                                "data-tone": e11,
                                                                initial: {
                                                                  scale: 0
                                                                },
                                                                animate: {
                                                                  scale: 1
                                                                },
                                                                exit: {
                                                                  scale: 0
                                                                },
                                                                transition: tf
                                                              },
                                                              e11
                                                            )
                                                          )
                                                        }
                                                      )
                                                    }),
                                                    (0, i.jsxs)("span", {
                                                      className: D().meta,
                                                      children: [
                                                        (0, i.jsx)(c.N, {
                                                          initial: false,
                                                          children: e10.starred && (0, i.jsx)(
                                                            l.PY1.span,
                                                            {
                                                              className: D().starMark,
                                                              "aria-hidden": "true",
                                                              initial: {
                                                                scale: 0
                                                              },
                                                              animate: {
                                                                scale: 1
                                                              },
                                                              exit: {
                                                                scale: 0
                                                              },
                                                              transition: tf,
                                                              children: (0, i.jsx)(h.A, {
                                                                size: 12,
                                                                strokeWidth: 1.75
                                                              })
                                                            },
                                                            "star"
                                                          )
                                                        }),
                                                        (0, i.jsx)("time", {
                                                          children: e10.time
                                                        })
                                                      ]
                                                    })
                                                  ]
                                                }),
                                                (0, i.jsxs)("span", {
                                                  className: D().line,
                                                  children: [
                                                    (0, i.jsx)("span", {
                                                      className: D().subject,
                                                      children: e10.subject
                                                    }),
                                                    (0, i.jsx)("span", {
                                                      className: D().preview,
                                                      children: e10.preview
                                                    })
                                                  ]
                                                })
                                              ]
                                            }),
                                            r2 && (0, i.jsxs)("span", {
                                              className: D().srOnly,
                                              children: [", ", r2]
                                            })
                                          ]
                                        }),
                                        (0, i.jsxs)("div", {
                                          className: D().actions,
                                          children: [
                                            (0, i.jsx)(z.m, {
                                              content: e10.starred ? "Unstar" : "Star",
                                              children: (0, i.jsx)("button", {
                                                type: "button",
                                                className: D().action,
                                                "aria-label": `Star \u201C${e10.subject}\u201D`,
                                                "aria-pressed": e10.starred,
                                                onClick: () => tD(e10),
                                                children: (0, i.jsx)(h.A, {
                                                  size: 16,
                                                  strokeWidth: 1.75,
                                                  "aria-hidden": "true"
                                                })
                                              })
                                            }),
                                            (0, i.jsx)(z.m, {
                                              content: t3.label,
                                              children: (0, i.jsx)("button", {
                                                type: "button",
                                                className: D().action,
                                                "aria-label": `${t3.label}: \u201C${e10.subject}\u201D`,
                                                onClick: () => tE(e10, t3.to, "row"),
                                                children: (0, i.jsx)(a3, {
                                                  size: 16,
                                                  strokeWidth: 1.75,
                                                  "aria-hidden": "true"
                                                })
                                              })
                                            }),
                                            (0, i.jsxs)(p.bL, {
                                              children: [
                                                (0, i.jsx)(z.m, {
                                                  content: "Move to",
                                                  children: (0, i.jsx)(p.l9, {
                                                    asChild: true,
                                                    children: (0, i.jsx)(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        className: D().action,
                                                        "aria-label": `Move \u201C${e10.subject}\u201D`,
                                                        children: (0, i.jsx)(
                                                          w.A,
                                                          {
                                                            size: 16,
                                                            strokeWidth: 1.75,
                                                            "aria-hidden": "true"
                                                          }
                                                        )
                                                      }
                                                    )
                                                  })
                                                }),
                                                (0, i.jsx)(p.ZL, {
                                                  children: (0, i.jsxs)(
                                                    p.UC,
                                                    {
                                                      className: `${D().menu} ${D().tones}`,
                                                      align: "end",
                                                      sideOffset: 6,
                                                      collisionPadding: 12,
                                                      loop: true,
                                                      onCloseAutoFocus: (e11) => {
                                                        let t4 = tt.current;
                                                        t4 && (e11.preventDefault(), tt.current = null, t4.focus({
                                                          preventScroll: true
                                                        }));
                                                      },
                                                      children: [
                                                        (0, i.jsx)(p.JU, {
                                                          className: D().menuLabel,
                                                          children: "Move to"
                                                        }),
                                                        V.filter(
                                                          (t4) => t4 !== e10.box
                                                        ).map((t4) => {
                                                          let a4 = X.find(
                                                            (e11) => e11.id === t4
                                                          )?.icon ?? g.A;
                                                          return (0, i.jsxs)(
                                                            p.q7,
                                                            {
                                                              className: D().menuItem,
                                                              disabled: !ei(
                                                                e10,
                                                                t4
                                                              ),
                                                              onSelect: () => tE(
                                                                e10,
                                                                t4,
                                                                "menu"
                                                              ),
                                                              children: [
                                                                (0, i.jsx)(
                                                                  a4,
                                                                  {
                                                                    size: 16,
                                                                    strokeWidth: 1.75,
                                                                    "aria-hidden": "true"
                                                                  }
                                                                ),
                                                                (0, i.jsx)(
                                                                  "span",
                                                                  {
                                                                    children: Z(t4)
                                                                  }
                                                                ),
                                                                "starred" === t4 && e10.starred && (0, i.jsx)(
                                                                  T.A,
                                                                  {
                                                                    className: D().menuCheck,
                                                                    size: 15,
                                                                    strokeWidth: 1.75,
                                                                    "aria-hidden": "true"
                                                                  }
                                                                )
                                                              ]
                                                            },
                                                            t4
                                                          );
                                                        }),
                                                        (0, i.jsx)(p.wv, {
                                                          className: D().menuSeparator
                                                        }),
                                                        (0, i.jsx)(p.JU, {
                                                          className: D().menuLabel,
                                                          children: "Label as"
                                                        }),
                                                        K.map(
                                                          (t4) => (0, i.jsxs)(
                                                            p.q7,
                                                            {
                                                              className: D().menuItem,
                                                              disabled: !ei(
                                                                e10,
                                                                t4.id
                                                              ),
                                                              onSelect: () => tE(
                                                                e10,
                                                                t4.id,
                                                                "menu"
                                                              ),
                                                              children: [
                                                                (0, i.jsx)(
                                                                  "i",
                                                                  {
                                                                    className: D().swatch,
                                                                    "data-tone": t4.tone,
                                                                    "aria-hidden": "true"
                                                                  }
                                                                ),
                                                                (0, i.jsx)(
                                                                  "span",
                                                                  {
                                                                    children: t4.label
                                                                  }
                                                                ),
                                                                t4.tone && e10.labels.includes(
                                                                  t4.tone
                                                                ) && (0, i.jsx)(
                                                                  T.A,
                                                                  {
                                                                    className: D().menuCheck,
                                                                    size: 15,
                                                                    strokeWidth: 1.75,
                                                                    "aria-hidden": "true"
                                                                  }
                                                                )
                                                              ]
                                                            },
                                                            t4.id
                                                          )
                                                        )
                                                      ]
                                                    }
                                                  )
                                                })
                                              ]
                                            })
                                          ]
                                        })
                                      ]
                                    },
                                    e10.id
                                  );
                                })
                              })
                            }),
                            (0, i.jsx)(c.N, {
                              initial: false,
                              children: 0 === tp.length && (0, i.jsxs)(
                                l.PY1.div,
                                {
                                  className: D().empty,
                                  initial: { opacity: 0, y: 8 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0 },
                                  transition: v2 ? tx : { ...A.T.spring.smooth, delay: 0.12 },
                                  children: [
                                    (0, i.jsx)(tG, {
                                      size: 24,
                                      strokeWidth: 1.5,
                                      "aria-hidden": "true"
                                    }),
                                    (0, i.jsx)("p", { children: tg[0] }),
                                    (0, i.jsx)("span", { children: tg[1] })
                                  ]
                                },
                                "empty"
                              )
                            })
                          ]
                        },
                        ej
                      )
                    })
                  }),
                  (0, i.jsxs)("div", {
                    className: D().statusBar,
                    children: [
                      (0, i.jsx)("p", {
                        className: D().srOnly,
                        role: "status",
                        "aria-live": "polite",
                        children: eI.text
                      }),
                      (0, i.jsx)("p", {
                        className: D().statusText,
                        "aria-hidden": "true",
                        children: (0, i.jsx)(c.N, {
                          mode: "popLayout",
                          initial: false,
                          children: (0, i.jsx)(
                            l.PY1.span,
                            { ...v2 ? ed : el, children: eI.text },
                            eI.key
                          )
                        })
                      }),
                      (0, i.jsx)(c.N, {
                        initial: false,
                        children: eO && (0, i.jsx)(
                          l.PY1.div,
                          {
                            ...ed,
                            transition: { duration: A.T.duration.fast },
                            children: (0, i.jsxs)(L.$, {
                              type: "button",
                              variant: "ghost",
                              size: "sm",
                              onClick: function() {
                                eO && (ev(
                                  (e10) => e10.map((e11) => e11.id === eO.id ? eO : e11)
                                ), eW(null), tP(`Restored \u201C${eO.subject}\u201D`), requestAnimationFrame(
                                  () => (e3.current.get(eO.id) ?? e1.current)?.focus({ preventScroll: true })
                                ));
                              },
                              children: [
                                (0, i.jsx)(P.A, {
                                  size: 15,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                "Undo"
                              ]
                            })
                          },
                          "undo"
                        )
                      })
                    ]
                  })
                ]
              }),
              (0, i.jsx)(c.N, {
                children: eR && (0, i.jsx)(
                  l.PY1.div,
                  {
                    ref: e22,
                    layoutId: "compose",
                    className: D().composer,
                    style: { borderRadius: 16 },
                    transition: ty,
                    role: "dialog",
                    "aria-labelledby": `${y2}-compose-title`,
                    onKeyDown: function(e10) {
                      "Escape" === e10.key ? (e10.preventDefault(), tF("save")) : "Enter" === e10.key && (e10.metaKey || e10.ctrlKey) && (e10.preventDefault(), tq());
                    },
                    children: (0, i.jsxs)(l.PY1.form, {
                      layout: "position",
                      className: D().composerForm,
                      noValidate: true,
                      onSubmit: tq,
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { duration: 0.2, delay: 0.1 * !v2 }
                      },
                      exit: { opacity: 0, transition: { duration: 0.08 } },
                      children: [
                        (0, i.jsxs)("header", {
                          className: D().composerHeader,
                          children: [
                            (0, i.jsx)("h3", {
                              id: `${y2}-compose-title`,
                              children: "New message"
                            }),
                            (0, i.jsx)(z.m, {
                              content: "Save draft and close",
                              children: (0, i.jsx)("button", {
                                type: "button",
                                className: D().action,
                                "aria-label": "Save draft and close",
                                onClick: () => tF("save"),
                                children: (0, i.jsx)($.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              })
                            })
                          ]
                        }),
                        (0, i.jsxs)("div", {
                          className: D().field,
                          "data-invalid": eE || void 0,
                          children: [
                            (0, i.jsx)("label", {
                              htmlFor: `${y2}-to`,
                              children: "To"
                            }),
                            (0, i.jsx)("input", {
                              ref: e8,
                              id: `${y2}-to`,
                              value: ez.to,
                              autoComplete: "off",
                              placeholder: "Name or email",
                              "aria-invalid": eE || void 0,
                              "aria-describedby": eE ? `${y2}-to-error` : void 0,
                              onChange: (e10) => {
                                let t3 = e10.target.value;
                                eA((e11) => ({ ...e11, to: t3 })), eD(false);
                              }
                            }),
                            (0, i.jsx)(c.N, {
                              initial: false,
                              children: th && (0, i.jsx)(
                                l.PY1.span,
                                {
                                  className: D().recipient,
                                  initial: { opacity: 0, scale: 0.6 },
                                  animate: { opacity: 1, scale: 1 },
                                  exit: { opacity: 0, scale: 0.6 },
                                  transition: tf,
                                  children: (0, i.jsx)(R.e, {
                                    name: th.name,
                                    src: th.photo,
                                    size: "sm"
                                  })
                                },
                                th.name
                              )
                            })
                          ]
                        }),
                        (0, i.jsx)(c.N, {
                          initial: false,
                          children: eE && (0, i.jsx)(
                            l.PY1.p,
                            {
                              id: `${y2}-to-error`,
                              className: D().error,
                              initial: { height: 0, opacity: 0 },
                              animate: { height: "auto", opacity: 1 },
                              exit: { height: 0, opacity: 0 },
                              transition: t_,
                              children: "Add a recipient before sending"
                            },
                            "error"
                          )
                        }),
                        (0, i.jsxs)("div", {
                          className: D().field,
                          children: [
                            (0, i.jsx)("label", {
                              htmlFor: `${y2}-subject`,
                              children: "Subject"
                            }),
                            (0, i.jsx)("input", {
                              id: `${y2}-subject`,
                              value: ez.subject,
                              autoComplete: "off",
                              onChange: (e10) => {
                                let t3 = e10.target.value;
                                eA((e11) => ({ ...e11, subject: t3 }));
                              }
                            })
                          ]
                        }),
                        (0, i.jsx)("textarea", {
                          className: D().body,
                          "aria-label": "Message",
                          placeholder: "Write a message",
                          rows: 6,
                          value: ez.body,
                          onChange: (e10) => {
                            let t3 = e10.target.value;
                            eA((e11) => ({ ...e11, body: t3 }));
                          }
                        }),
                        (0, i.jsxs)("footer", {
                          className: D().composerFooter,
                          children: [
                            (0, i.jsxs)(L.$, {
                              type: "submit",
                              size: "sm",
                              children: [
                                (0, i.jsx)(f.A, {
                                  size: 15,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                "Send"
                              ]
                            }),
                            (0, i.jsx)(L.$, {
                              type: "button",
                              variant: "ghost",
                              size: "sm",
                              onClick: () => tF("discard"),
                              children: "Discard"
                            })
                          ]
                        })
                      ]
                    })
                  },
                  "composer"
                )
              }),
              eB && (0, i.jsxs)(
                l.PY1.div,
                {
                  className: D().ghost,
                  style: {
                    x: tl,
                    y: td,
                    scale: tc,
                    opacity: tu,
                    originX: 0,
                    originY: 0.5
                  },
                  "aria-hidden": "true",
                  children: [
                    (0, i.jsx)(R.e, {
                      name: eB.name,
                      src: eB.photo,
                      size: "sm"
                    }),
                    (0, i.jsx)("span", { children: eB.subject })
                  ]
                },
                eB.key
              )
            ]
          })
        })
      })
    });
  }
  let eb = em;
}

__m(__module,__exports,__require);
}