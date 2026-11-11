function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { PageHeader: () => ep, default: () => eh });
  var i = t(95155), s = t(12115), n = t(57793), r = t(57518), l = t(25354), o = t(80642), d = t(18310), c = t(57700), u = t(72809), p = t(62360), h = t(36483), m = t(8117), _ = t(31458), g = t(64962), x = t(23723), f = t(67401), b = t(59680), y = t(64526), j = t(15298), v = t(80167), w = t(51128), N = t(37218), T = t(32159), k = t(76721), S = t(46395), C = t(64577), P = t(2125), z = t(52427), A = t(35484), R = t(65024), $ = t(92218), I = t(71914), M = t(90034), L = t(51288), Y = t(46262), B = t(7770), E = t(83920), O = t.n(E), D = t(55665);
  let F = { emma: { name: "Emma Collins", src: "media/people/emma-collins.svg" }, marcus: { name: "Marcus Johnson", src: "media/people/marcus-johnson.svg" }, ava: { name: "Ava Mitchell", src: "media/people/ava-mitchell.svg" }, sofia: { name: "Sofia Ramirez", src: "media/people/sofia-ramirez.svg" }, jasmine: { name: "Jasmine Brooks", src: "media/people/jasmine-brooks.svg" } }, W = ["emma", "marcus", "ava", "sofia", "jasmine"].map((e2) => F[e2]), K = [{ value: "overview", label: "Overview" }, { value: "issues", label: "Issues" }, { value: "updates", label: "Updates" }, { value: "files", label: "Files" }], H = (e2) => K.findIndex((a2) => a2.value === e2), G = [{ id: "CHK-138", title: "Saved card list clips the expiry date on small screens", owner: "sofia", label: "Bug" }, { id: "CHK-136", title: "Add an edit link beside each section of the review step", owner: "emma", label: "Design" }, { id: "CHK-135", title: "Wallet sheet opens twice after a failed card check", owner: "marcus", label: "Bug" }, { id: "CHK-133", title: "Show the delivery estimate before payment", owner: "ava", label: "Research" }, { id: "CHK-131", title: "Promo code field loses focus after an invalid code", owner: "sofia", label: "Bug" }, { id: "CHK-129", title: "Track drop-off between review and pay", owner: "ava", label: "Analytics" }, { id: "CHK-127", title: "Preselect the last used card for returning customers", owner: "marcus", label: "Feature" }, { id: "CHK-124", title: "Write clearer copy for declined cards", owner: "emma", label: "Content" }, { id: "CHK-122", title: "Address autocomplete drops apartment numbers", owner: "sofia", label: "Bug" }], U = ["Keyboard focus skips the save card checkbox", "Recalculate tax when the shipping country changes", "Pay button needs a pressed and loading state", "Review totals wrap awkwardly at large text sizes"], V = [{ id: "u4", author: "emma", date: "Sep 19", tone: "success", status: "On track", body: "Saved payment methods reached every iOS customer on Thursday. Returning customers now finish checkout 3.1 points more often. The review step is next." }, { id: "u3", author: "ava", date: "Sep 12", tone: "success", status: "On track", body: "Five usability sessions are done. People trust a single review step as long as the total stays visible while they edit." }, { id: "u2", author: "marcus", date: "Sep 5", tone: "warning", status: "At risk", body: "Card tokenization is waiting on the payments team. We moved the review step ahead so the October date can hold." }, { id: "u1", author: "emma", date: "Aug 29", tone: "success", status: "On track", body: "Kickoff. Scope is saved cards, one review step, and a staged rollout starting October 14." }], X = ["The review step is in staging behind a flag. If error rates hold through Friday, we open it to 10% of traffic on Monday.", "Declined card copy is final and with support for review. No change to the October 14 rollout."], q = [{ name: "Checkout flows v3", kind: "Design file", size: "18.4 MB", owner: "emma", date: "Sep 20", icon: u.A }, { name: "Review step walkthrough", kind: "Video", size: "46 MB", owner: "emma", date: "Sep 18", icon: p.A }, { name: "Payments API notes", kind: "Document", size: "96 KB", owner: "marcus", date: "Sep 16", icon: h.A }, { name: "Usability findings, round two", kind: "PDF", size: "2.1 MB", owner: "ava", date: "Sep 13", icon: h.A }, { name: "Rollout plan", kind: "Slides", size: "4.8 MB", owner: "sofia", date: "Sep 11", icon: m.A }, { name: "Conversion baseline", kind: "Spreadsheet", size: "640 KB", owner: "ava", date: "Sep 9", icon: _.A }, { name: "Empty and error states", kind: "Design file", size: "9.2 MB", owner: "emma", date: "Sep 6", icon: u.A }, { name: "Launch checklist", kind: "Document", size: "54 KB", owner: "sofia", date: "Sep 2", icon: h.A }], J = { done: g.A, active: x.A, planned: f.A }, Z = [{ name: "Saved payment methods", note: "Shipped Sep 18", state: "done" }, { name: "Single review step", note: "In progress, due Oct 1", state: "active" }, { name: "Staged rollout", note: "Planned for Oct 14", state: "planned" }], Q = [{ who: "ava", text: "moved CHK-131 to review", time: "1h ago" }, { who: "marcus", text: "merged the saved cards endpoint", time: "3h ago" }, { who: "emma", text: "shared Checkout flows v3", time: "Yesterday" }, { who: "sofia", text: "closed CHK-119, a double charge on retry", time: "Yesterday" }, { who: "jasmine", text: "set the rollout date to October 14", time: "Sep 17" }], ee = { duration: 0 }, ea = { duration: B.T.duration.fast, ease: [...B.T.ease.standard] }, et = (e2) => `blur(${e2}px)`, ei = { size: 16, strokeWidth: 1.75, "aria-hidden": true }, es = { enter: (e2) => ({ opacity: 0, x: 12 * e2 }), center: { opacity: 1, x: 0, transition: { x: B.T.spring.smooth, opacity: { duration: B.T.duration.standard, ease: [...B.T.ease.enter] } } }, exit: (e2) => ({ opacity: 0, x: -8 * e2, transition: { duration: B.T.duration.instant, ease: [...B.T.ease.standard] } }) }, en = { enter: { opacity: 0, x: 0 }, center: { opacity: 1, x: 0, transition: { duration: B.T.duration.instant } }, exit: { opacity: 0, x: 0, transition: { duration: B.T.duration.instant } } };
  function er(e2) {
    return e2 ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: B.T.duration.instant } } : { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { height: B.T.spring.smooth, opacity: { duration: B.T.duration.standard, ease: [...B.T.ease.standard] } } };
  }
  function el({ actions: e2, reduce: a2 }) {
    let [t2, r2] = (0, s.useState)(null), o2 = (0, s.useRef)(false), d2 = (0, s.useRef)(0);
    return (0, s.useEffect)(() => () => window.clearTimeout(d2.current), []), (0, i.jsxs)(n.bL, { onOpenChange: (e3) => {
      e3 && (window.clearTimeout(d2.current), r2(null));
    }, children: [(0, i.jsx)(n.l9, { asChild: true, children: (0, i.jsx)(L.$, { variant: "secondary", size: "sm", className: O().iconButton, "aria-label": "More actions", children: (0, i.jsx)(b.A, { size: 17, strokeWidth: 1.75, "aria-hidden": "true" }) }) }), (0, i.jsx)(n.ZL, { children: (0, i.jsxs)(n.UC, { className: O().menu, align: "end", sideOffset: 6, collisionPadding: 12, loop: true, onFocus: function(e3) {
      let a3 = e3.target instanceof HTMLElement ? e3.target.closest('[role="menuitem"]') : null;
      if (window.clearTimeout(d2.current), !a3) {
        d2.current = window.setTimeout(() => r2(null), 70 * !!o2.current);
        return;
      }
      let t3 = o2.current;
      r2((e4) => ({ top: a3.offsetTop, height: a3.offsetHeight, glide: t3 && null !== e4 }));
    }, onPointerMoveCapture: () => {
      o2.current = true;
    }, onKeyDownCapture: () => {
      o2.current = false;
    }, children: [(0, i.jsx)(l.PY1.span, { className: O().highlight, "aria-hidden": "true", initial: false, animate: t2 ? { y: t2.top, height: t2.height, opacity: 1 } : { opacity: 0 }, transition: { default: t2?.glide && !a2 ? B.T.spring.snappy : ee, opacity: { duration: 0.08 * !a2 } } }), e2.map((e3) => (0, i.jsxs)(s.Fragment, { children: [e3.separatorBefore && (0, i.jsx)(n.wv, { className: O().separator }), (0, i.jsxs)(n.q7, { className: O().item, disabled: e3.disabled, onSelect: e3.onSelect, children: [e3.icon, e3.label] })] }, e3.key))] }) })] });
  }
  function eo({ done: e2, open: a2 }) {
    let t2 = e2 + a2;
    return (0, i.jsxs)("div", { className: O().overview, children: [(0, i.jsx)("div", { className: O().progress, children: (0, i.jsx)(Y.k, { value: e2, max: t2, label: `${e2} of ${t2} issues done`, showValue: true }) }), (0, i.jsxs)("div", { children: [(0, i.jsx)("h3", { className: O().sectionTitle, children: "Milestones" }), (0, i.jsx)("ol", { className: O().milestones, children: Z.map((e3) => {
      let a3 = J[e3.state];
      return (0, i.jsxs)("li", { "data-state": e3.state, children: [(0, i.jsx)(a3, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), (0, i.jsx)("span", { className: O().milestoneName, children: e3.name }), (0, i.jsx)("span", { className: O().note, children: e3.note })] }, e3.name);
    }) })] }), (0, i.jsxs)("div", { children: [(0, i.jsx)("h3", { className: O().sectionTitle, children: "Recent activity" }), (0, i.jsx)("ul", { className: O().activity, children: Q.map((e3) => (0, i.jsxs)("li", { children: [(0, i.jsx)($.e, { name: F[e3.who].name, src: F[e3.who].src, size: "sm" }), (0, i.jsxs)("p", { children: [(0, i.jsx)("strong", { children: F[e3.who].name }), " ", e3.text] }), (0, i.jsx)("span", { className: O().note, children: e3.time })] }, `${e3.who}-${e3.text}`)) })] })] });
  }
  function ed({ issues: e2, closing: a2, reduce: t2, onComplete: s2, onReset: n2, register: r2 }) {
    let d2 = er(t2);
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("ul", { className: O().issues, "aria-label": "Open issues", children: (0, i.jsx)(o.N, { initial: false, children: e2.map((e3) => {
      let n3 = a2.includes(e3.id), c2 = F[e3.owner];
      return (0, i.jsx)(l.PY1.li, { className: O().issue, "data-fresh": e3.fresh || void 0, "data-closing": n3 || void 0, ...d2, children: (0, i.jsxs)("div", { className: O().issueInner, children: [(0, i.jsx)("button", { ref: (a3) => r2(e3.id, a3), type: "button", className: O().check, "aria-label": `Mark ${e3.id} done`, "aria-disabled": n3 || void 0, onClick: () => s2(e3), children: (0, i.jsx)(o.N, { initial: false, mode: "popLayout", children: (0, i.jsx)(l.PY1.span, { className: O().checkGlyph, initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: t2 ? 1 : 0.5, transition: ea }, transition: t2 ? ee : B.T.spring.snappy, children: n3 ? (0, i.jsx)(g.A, { size: 18, strokeWidth: 1.75, "aria-hidden": "true" }) : (0, i.jsx)(f.A, { size: 18, strokeWidth: 1.75, "aria-hidden": "true" }) }, n3 ? "done" : "open") }) }), (0, i.jsxs)("span", { className: O().issueText, children: [(0, i.jsx)("span", { className: O().issueId, children: e3.id }), (0, i.jsx)("span", { className: O().issueTitle, children: e3.title })] }), (0, i.jsx)("span", { className: O().issueLabel, children: e3.label }), (0, i.jsx)($.e, { name: c2.name, src: c2.src, size: "sm" })] }) }, e3.id);
    }) }) }), 0 === e2.length && (0, i.jsxs)(l.PY1.div, { className: O().empty, initial: { opacity: 0, y: 6 * !t2 }, animate: { opacity: 1, y: 0 }, transition: t2 ? { duration: B.T.duration.instant } : B.T.spring.smooth, children: [(0, i.jsx)(g.A, { size: 24, strokeWidth: 1.75, "aria-hidden": "true" }), (0, i.jsx)("p", { children: "No open issues" }), (0, i.jsx)("span", { children: "Everything in this project is done." }), (0, i.jsx)(L.$, { variant: "secondary", size: "sm", onClick: n2, children: "Restore sample issues" })] })] });
  }
  function ec({ updates: e2, reduce: a2 }) {
    let t2 = er(a2);
    return (0, i.jsx)("ol", { className: O().updates, "aria-label": "Project updates", children: (0, i.jsx)(o.N, { initial: false, children: e2.map((e3) => {
      let a3 = F[e3.author];
      return (0, i.jsx)(l.PY1.li, { className: O().update, "data-fresh": e3.fresh || void 0, ...t2, children: (0, i.jsxs)("article", { className: O().updateInner, children: [(0, i.jsx)($.e, { name: a3.name, src: a3.src, size: "md" }), (0, i.jsxs)("div", { children: [(0, i.jsxs)("div", { className: O().updateHead, children: [(0, i.jsx)("span", { className: O().author, children: a3.name }), (0, i.jsx)("span", { className: O().note, children: e3.date }), (0, i.jsx)(M.E, { size: "sm", tone: e3.tone, dot: true, children: e3.status })] }), (0, i.jsx)("p", { children: e3.body })] })] }) }, e3.id);
    }) }) });
  }
  function eu() {
    return (0, i.jsx)("ul", { className: O().files, "aria-label": "Project files", children: q.map((e2) => {
      let a2 = e2.icon, t2 = F[e2.owner];
      return (0, i.jsxs)("li", { children: [(0, i.jsx)(a2, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), (0, i.jsxs)("span", { className: O().fileName, children: [(0, i.jsx)("span", { children: e2.name }), (0, i.jsxs)("span", { className: O().note, children: [e2.kind, ", ", e2.size] })] }), (0, i.jsx)($.e, { name: t2.name, src: t2.src, size: "sm" }), (0, i.jsx)("span", { className: O().fileDate, children: e2.date })] }, e2.name);
    }) });
  }
  function ep() {
    let e2 = (0, s.useId)(), a2 = (0, d.I)() ?? false, t2 = (0, s.useRef)(null), n2 = (0, s.useRef)(null), u2 = (0, s.useRef)(null), p2 = (0, s.useRef)(null), h2 = (0, s.useRef)(null), m2 = (0, s.useRef)(null), _2 = (0, s.useRef)(/* @__PURE__ */ new Map()), g2 = (0, s.useRef)(/* @__PURE__ */ new Set()), x2 = (0, s.useRef)({ issue: 0, update: 0, notice: 0 }), [f2, b2] = (0, s.useState)({ section: "overview", direction: 1 }), [$2, Y2] = (0, s.useState)(false), [E2, F2] = (0, s.useState)({ measured: false, collapsed: false, animate: false }), [J2, Z2] = (0, s.useState)(false), [Q2, er2] = (0, s.useState)(false), [ep2, eh2] = (0, s.useState)("idle"), [em, e_] = (0, s.useState)(G), [eg, ex] = (0, s.useState)([]), [ef, eb] = (0, s.useState)(31), [ey, ej] = (0, s.useState)(V), [ev, ew] = (0, s.useState)(null);
    function eN(e3, a3) {
      let t3 = window.setTimeout(() => {
        g2.current.delete(t3), e3();
      }, a3);
      g2.current.add(t3);
    }
    function eT(e3, a3 = "success") {
      x2.current.notice += 1, ew({ key: x2.current.notice, text: e3, tone: a3 });
    }
    function ek(e3, a3 = false) {
      b2((a4) => a4.section === e3 ? a4 : { section: e3, direction: H(e3) > H(a4.section) ? 1 : -1 });
      let t3 = p2.current;
      t3 && (a3 || e3 !== f2.section) && t3.scrollTop > 17 && (t3.scrollTop = 17);
    }
    function eS() {
      let e3 = !J2;
      Z2(e3), eT(e3 ? "Following Checkout redesign" : "Stopped following Checkout redesign", e3 ? "success" : "neutral");
    }
    function eC() {
      Q2 || "idle" !== ep2 || (eh2("sending"), eN(() => {
        let e3 = x2.current.update++, a3 = `draft-${e3}`;
        ej((t3) => [{ id: a3, author: "jasmine", date: "Just now", tone: "success", status: "On track", body: X[e3 % X.length], fresh: true }, ...t3]), eh2("sent"), ek("updates", true), eT("Update shared with the project team"), eN(() => eh2("idle"), 1800), eN(() => ej((e4) => e4.map((e5) => e5.id === a3 ? { ...e5, fresh: false } : e5)), 1800);
      }, 700));
    }
    async function eP() {
      try {
        await (0, D.a)("https://northline.example/projects/checkout-redesign"), eT("Link copied");
      } catch {
        eT("Couldn't copy the link. Try again from the address bar.", "error");
      }
    }
    function ez(e3) {
      eT(`${e3} would open here.`, "neutral");
    }
    (0, s.useEffect)(() => {
      let e3 = t2.current, a3 = n2.current, i2 = u2.current;
      if (!e3 || !a3 || !i2 || "u" < typeof ResizeObserver) return;
      let s2 = new ResizeObserver(() => {
        let t3 = e3.clientWidth - a3.offsetWidth - i2.offsetWidth - 16;
        F2((e4) => {
          let a4 = e4.measured && e4.collapsed ? t3 < 272 : t3 < 240;
          return e4.measured && e4.collapsed === a4 ? e4 : { measured: true, collapsed: a4, animate: e4.measured };
        });
      });
      return s2.observe(e3), () => s2.disconnect();
    }, []), (0, s.useEffect)(() => {
      let e3 = g2.current;
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, []), (0, s.useEffect)(() => {
      if (!ev) return;
      let e3 = window.setTimeout(() => ew(null), 3200);
      return () => window.clearTimeout(e3);
    }, [ev]), (0, s.useEffect)(() => {
      let e3 = h2.current, t3 = e3?.querySelector('[role="tab"][data-state="active"]');
      if (!e3 || !t3) return;
      let i2 = t3.offsetLeft - 12, s2 = t3.offsetLeft + t3.offsetWidth + 12 - e3.clientWidth, n3 = a2 ? "auto" : "smooth";
      e3.scrollLeft > i2 ? e3.scrollTo({ left: i2, behavior: n3 }) : e3.scrollLeft < s2 && e3.scrollTo({ left: s2, behavior: n3 });
    }, [f2.section, a2]);
    let eA = Q2 ? { tone: "neutral", label: "Archived" } : { tone: "success", label: "On track" }, eR = [...E2.collapsed ? [{ key: "follow", label: J2 ? "Unfollow" : "Follow", icon: J2 ? (0, i.jsx)(y.A, { ...ei }) : (0, i.jsx)(j.A, { ...ei }), onSelect: eS }, { key: "share", label: "Share update", icon: (0, i.jsx)(v.A, { ...ei }), onSelect: eC, disabled: Q2 || "idle" !== ep2 }] : [], { key: "copy", label: "Copy link", icon: (0, i.jsx)(w.A, { ...ei }), onSelect: eP, separatorBefore: E2.collapsed }, { key: "archive", label: Q2 ? "Restore project" : "Archive project", icon: Q2 ? (0, i.jsx)(N.A, { ...ei }) : (0, i.jsx)(T.A, { ...ei }), onSelect: function() {
      let e3 = !Q2;
      er2(e3), eT(e3 ? "Project archived. New issues and updates are paused." : "Project restored", "neutral");
    } }], e$ = (e3) => a2 ? ee : { ...B.T.spring.smooth, opacity: { duration: e3 ? B.T.duration.standard : B.T.duration.fast, ease: [...B.T.ease.standard], delay: 0.05 * !!e3 }, filter: { duration: e3 ? B.T.duration.standard : B.T.duration.fast, ease: [...B.T.ease.standard] } }, eI = { opacity: 1, y: 0, scale: 1, filter: et(0) };
    return (0, i.jsx)(r.bL, { asChild: true, value: f2.section, onValueChange: (e3) => ek(e3), children: (0, i.jsxs)("section", { className: O().frame, "aria-labelledby": `${e2}-title`, "data-measured": E2.measured || void 0, children: [(0, i.jsxs)("header", { className: O().header, children: [(0, i.jsxs)("div", { ref: t2, className: O().bar, children: [(0, i.jsxs)("div", { className: O().lead, children: [(0, i.jsx)(l.PY1.nav, { className: O().crumbs, "aria-label": "Breadcrumb", inert: $2, initial: false, animate: $2 ? { opacity: 0, y: -8, filter: et(B.T.blur.subtle) } : eI, transition: e$(!$2), children: (0, i.jsxs)("ol", { children: [(0, i.jsxs)("li", { className: O().rootCrumb, children: [(0, i.jsx)("button", { type: "button", className: O().crumb, onClick: () => ez("Northline"), children: "Northline" }), (0, i.jsx)(k.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" })] }), (0, i.jsxs)("li", { children: [(0, i.jsx)("button", { type: "button", className: O().crumb, onClick: () => ez("Projects"), children: "Projects" }), (0, i.jsx)(k.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" })] }), (0, i.jsx)("li", { children: (0, i.jsx)("span", { className: O().current, "aria-current": "page", children: "Checkout redesign" }) })] }) }), (0, i.jsxs)(l.PY1.button, { type: "button", className: O().compact, inert: !$2, "aria-label": "Checkout redesign, back to top", onClick: function() {
      p2.current?.scrollTo({ top: 0, behavior: a2 ? "auto" : "smooth" }), m2.current?.focus({ preventScroll: true });
    }, initial: false, animate: $2 ? eI : { opacity: 0, y: 14, filter: et(B.T.blur.soft) }, transition: e$($2), children: [(0, i.jsx)("span", { className: O().compactTitle, children: "Checkout redesign" }), (0, i.jsx)(M.E, { className: O().compactBadge, size: "sm", tone: eA.tone, dot: true, children: eA.label })] })] }), (0, i.jsxs)("div", { className: O().actions, children: [(0, i.jsx)(l.PY1.div, { className: O().secondary, inert: E2.collapsed, initial: false, animate: E2.collapsed ? { width: 0, opacity: 0 } : { width: "auto", opacity: 1 }, transition: E2.animate && !a2 ? { width: B.T.spring.smooth, opacity: { duration: E2.collapsed ? B.T.duration.fast : B.T.duration.standard, ease: [...B.T.ease.standard], delay: E2.collapsed ? 0.04 : 0.08 } } : ee, children: (0, i.jsxs)("div", { ref: n2, className: O().secondaryInner, children: [(0, i.jsx)(L.$, { variant: "secondary", size: "sm", onClick: eS, children: J2 ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(S.A, { ...ei }), " Following"] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(j.A, { ...ei }), " Follow"] }) }), (0, i.jsx)(L.$, { variant: "secondary", size: "sm", loading: "sending" === ep2, disabled: Q2, onClick: eC, children: "sent" === ep2 ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(C.A, { ...ei }), " Shared"] }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(v.A, { ...ei }), " Share update"] }) })] }) }), (0, i.jsxs)("div", { ref: u2, className: O().trailing, children: [(0, i.jsx)(el, { actions: eR, reduce: a2 }), (0, i.jsxs)(L.$, { className: O().create, size: "sm", "aria-label": "New issue", disabled: Q2, onClick: function() {
      if (Q2) return;
      let e3 = x2.current.issue++, a3 = { id: `CHK-${139 + e3}`, title: U[e3 % U.length], owner: "jasmine", label: "Triage", fresh: true };
      e_((e4) => [a3, ...e4]), ek("issues", true), eT(`${a3.id} created and assigned to you`), eN(() => e_((e4) => e4.map((e5) => e5.id === a3.id ? { ...e5, fresh: false } : e5)), 1800);
    }, children: [(0, i.jsx)(P.A, { ...ei }), (0, i.jsx)("span", { className: O().createText, children: "New issue" })] })] })] })] }), (0, i.jsx)(l.PY1.div, { className: O().intro, initial: false, animate: { height: $2 ? 0 : "auto" }, transition: a2 ? ee : B.T.spring.smooth, children: (0, i.jsxs)("div", { className: O().introInner, children: [(0, i.jsxs)(l.PY1.div, { className: O().titleRow, initial: false, animate: $2 ? { opacity: 0, y: -10, scale: 0.62, filter: et(B.T.blur.subtle) } : eI, transition: e$(!$2), children: [(0, i.jsx)("h2", { ref: m2, id: `${e2}-title`, className: O().title, tabIndex: -1, children: "Checkout redesign" }), (0, i.jsx)(M.E, { tone: eA.tone, dot: true, children: eA.label })] }), (0, i.jsxs)(l.PY1.div, { className: O().details, initial: false, animate: $2 ? { opacity: 0, y: -6 } : { opacity: 1, y: 0 }, transition: e$(!$2), children: [(0, i.jsx)("p", { className: O().description, children: "Rebuilding mobile checkout around saved payment methods and a single review step, then rolling it out in stages from October 14." }), (0, i.jsxs)("div", { className: O().meta, children: [(0, i.jsx)(I.Z, { members: W, max: 4, size: "sm", label: "Project members" }), (0, i.jsxs)("span", { children: ["Led by ", (0, i.jsx)("strong", { children: "Emma Collins" })] }), (0, i.jsxs)("span", { className: O().metaIcon, children: [(0, i.jsx)(z.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), "Target Oct 14"] })] })] })] }) }), (0, i.jsx)(c.o, { id: e2, children: (0, i.jsx)(r.B8, { asChild: true, "aria-label": "Project sections", children: (0, i.jsx)(l.PY1.div, { ref: h2, layoutScroll: true, className: O().tabs, children: K.map((e3) => {
      let t3 = "issues" === e3.value ? em.length : "updates" === e3.value ? ey.length : "files" === e3.value ? q.length : null;
      return (0, i.jsxs)(r.l9, { value: e3.value, className: O().tab, children: [(0, i.jsx)("span", { className: O().tabLabel, children: e3.label }), null !== t3 && (0, i.jsx)("span", { className: O().count, children: (0, i.jsx)(R.q, { value: t3 }) }), f2.section === e3.value && (0, i.jsx)(l.PY1.span, { className: O().indicator, layoutId: "indicator", layoutDependency: f2.section, transition: a2 ? ee : B.T.spring.morph, "aria-hidden": "true" })] }, e3.value);
    }) }) }) })] }), (0, i.jsx)("div", { ref: p2, className: O().scroller, onScroll: function(e3) {
      let a3 = e3.currentTarget.scrollTop;
      Y2((e4) => e4 ? a3 > 4 : a3 > 16);
    }, children: (0, i.jsx)(o.N, { initial: false, mode: "popLayout", custom: f2.direction, children: (0, i.jsx)(r.UC, { value: f2.section, forceMount: true, asChild: true, children: (0, i.jsxs)(l.PY1.div, { className: O().panel, custom: f2.direction, variants: a2 ? en : es, initial: "enter", animate: "center", exit: "exit", children: ["overview" === f2.section && (0, i.jsx)(eo, { done: ef, open: em.length }), "issues" === f2.section && (0, i.jsx)(ed, { issues: em, closing: eg, reduce: a2, onComplete: function(e3) {
      if (eg.includes(e3.id)) return;
      let a3 = em.findIndex((a4) => a4.id === e3.id), t3 = em.filter((a4) => a4.id !== e3.id && !eg.includes(a4.id)), i2 = t3[Math.min(a3, t3.length - 1)];
      ex((a4) => [...a4, e3.id]), eN(() => {
        let a4 = document.activeElement === _2.current.get(e3.id);
        e_((a5) => a5.filter((a6) => a6.id !== e3.id)), ex((a5) => a5.filter((a6) => a6 !== e3.id)), eb((e4) => e4 + 1), eT(`${e3.id} marked done`), a4 && (i2 ? _2.current.get(i2.id) : p2.current?.querySelector('[role="tabpanel"][data-state="active"]'))?.focus();
      }, 380);
    }, onReset: function() {
      e_(G), eb(31), eT("Sample issues restored", "neutral");
    }, register: (e3, a3) => {
      a3 ? _2.current.set(e3, a3) : _2.current.delete(e3);
    } }), "updates" === f2.section && (0, i.jsx)(ec, { updates: ey, reduce: a2 }), "files" === f2.section && (0, i.jsx)(eu, {})] }) }, f2.section) }) }), (0, i.jsx)("div", { className: O().toastLayer, "aria-hidden": "true", children: (0, i.jsx)(o.N, { initial: false, mode: "popLayout", children: ev && (0, i.jsxs)(l.PY1.div, { className: O().toast, "data-tone": ev.tone, initial: a2 ? { opacity: 0 } : { opacity: 0, y: 14, filter: et(B.T.blur.soft) }, animate: { opacity: 1, y: 0, filter: et(0) }, exit: a2 ? { opacity: 0, transition: ee } : { opacity: 0, y: 8, filter: et(B.T.blur.subtle), transition: ea }, transition: a2 ? { duration: B.T.duration.instant } : { ...B.T.spring.snappy, opacity: { duration: B.T.duration.fast, ease: [...B.T.ease.standard] }, filter: { duration: B.T.duration.fast, ease: [...B.T.ease.standard] } }, children: ["success" === ev.tone ? (0, i.jsx)(C.A, { ...ei }) : "error" === ev.tone ? (0, i.jsx)(A.A, { ...ei }) : null, (0, i.jsx)("span", { children: ev.text })] }, ev.key) }) }), (0, i.jsx)("p", { className: O().srOnly, role: "status", "aria-live": "polite", children: ev?.text })] }) });
  }
  let eh = ep;
}

__m(__module,__exports,__require);
}