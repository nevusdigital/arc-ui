function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { StepperDemo: () => z, default: () => I });
  var r = a(95155), i = a(12115), s = a(28245), n = a(18310), l = a(92171), o = a(25354), c = a(80642), d = a(64577), p = a(42618), u = a(51288), m = a(35978), _ = a(92218), h = a(71914), f = a(66558), x = a(7770), v = a(42560), g = a.n(v);
  let y = [{ id: "profile", label: "Profile", description: "Your name and photo" }, { id: "workspace", label: "Workspace", description: "Name and web address" }, { id: "team", label: "Team", description: "Invite collaborators" }, { id: "review", label: "Review", description: "Confirm and finish" }], b = [{ id: "marcus", name: "Marcus Johnson", first: "Marcus", src: "media/people/marcus-johnson.svg" }, { id: "ava", name: "Ava Mitchell", first: "Ava", src: "media/people/ava-mitchell.svg" }, { id: "sofia", name: "Sofia Ramirez", first: "Sofia", src: "media/people/sofia-ramirez.svg" }, { id: "jasmine", name: "Jasmine Brooks", first: "Jasmine", src: "media/people/jasmine-brooks.svg" }], j = ["marcus", "ava"], N = [{ value: "horizontal", label: "Horizontal" }, { value: "vertical", label: "Vertical" }], w = "meridian.example/", T = { duration: 0 }, k = { duration: x.T.duration.fast, ease: [...x.T.ease.standard] }, L = { duration: x.T.duration.standard, ease: [...x.T.ease.enter] }, S = { enter: (e2) => ({ opacity: 0, y: `${0.5 * e2}em`, filter: `blur(${x.T.blur.subtle}px)` }), center: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: (e2) => ({ opacity: 0, y: `${-0.5 * e2}em`, filter: `blur(${x.T.blur.subtle}px)` }) };
  function C({ trigger: e2, className: t2, innerClassName: a2, children: c2 }) {
    let d2 = (0, i.useRef)(null), p2 = (0, i.useRef)(0), u2 = (0, s.d)("auto"), m2 = (0, n.I)() ?? false;
    return (0, i.useLayoutEffect)(() => {
      p2.current = performance.now() + 600;
    }, [e2]), (0, i.useEffect)(() => {
      let e3 = d2.current, t3 = e3?.parentElement;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = false, r2 = new ResizeObserver(() => {
        let r3 = e3.offsetHeight;
        if (!a3 || m2 || performance.now() > p2.current) {
          a3 = true, delete t3.dataset.resizing, u2.jump(r3);
          return;
        }
        t3.dataset.resizing = "", (0, l.i)(u2, r3, { ...x.T.spring.smooth, onComplete: () => {
          delete t3.dataset.resizing;
        } });
      });
      return r2.observe(e3), () => r2.disconnect();
    }, [u2, m2]), (0, r.jsx)(o.PY1.div, { className: t2, style: { height: u2 }, children: (0, r.jsx)("div", { ref: d2, className: a2, children: c2 }) });
  }
  function $({ value: e2, reduced: t2 }) {
    let [a2, s2] = (0, i.useState)({ value: e2, direction: 1 });
    return a2.value !== e2 && s2({ value: e2, direction: e2 > a2.value ? 1 : -1 }), (0, r.jsx)("span", { className: g().count, "aria-hidden": "true", children: (0, r.jsx)(c.N, { mode: "popLayout", initial: false, custom: a2.direction, children: (0, r.jsx)(o.PY1.span, { custom: a2.direction, variants: S, initial: "enter", animate: "center", exit: "exit", transition: t2 ? T : { y: x.T.spring.snappy, opacity: { duration: x.T.duration.fast }, filter: { duration: x.T.duration.fast } }, children: e2 }, e2) }) });
  }
  function P({ person: e2, invited: t2, onToggle: a2, reduced: i2 }) {
    return (0, r.jsxs)("button", { type: "button", className: g().person, "aria-pressed": t2, "aria-label": e2.name, onClick: a2, children: [(0, r.jsxs)("span", { className: g().personPhoto, children: [(0, r.jsx)(_.e, { name: e2.name, src: e2.src, size: "sm", "aria-hidden": "true" }), (0, r.jsx)(c.N, { initial: false, children: t2 ? (0, r.jsx)(o.PY1.span, { className: g().badge, initial: { opacity: 0, scale: 0.4 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.4, transition: i2 ? T : k }, transition: i2 ? T : x.T.spring.snappy, children: (0, r.jsx)(d.A, { size: 9, strokeWidth: 3.25, "aria-hidden": "true" }) }, "badge") : null })] }), (0, r.jsx)("span", { className: g().personName, children: e2.first })] });
  }
  function z() {
    let e2, t2 = (0, n.I)() ?? false, a2 = (0, i.useId)(), s2 = (0, i.useId)(), l2 = (0, i.useId)(), d2 = (0, i.useRef)(null), v2 = (0, i.useRef)(null), S2 = (0, i.useRef)(null), [z2, I2] = (0, i.useState)("horizontal"), [R, E] = (0, i.useState)(false), [Y, A] = (0, i.useState)(1), [O, M] = (0, i.useState)(1), [W, D] = (0, i.useState)("Emma Collins"), [B, F] = (0, i.useState)(""), [H, U] = (0, i.useState)(j), [V, J] = (0, i.useState)({});
    (0, i.useEffect)(() => {
      let e3 = d2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([e4]) => E(e4.contentRect.width <= 544));
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let X = (0, i.useCallback)((e3) => {
      e3 && (v2.current = e3);
    }, []), Z = (0, i.useCallback)((e3) => {
      e3 && (S2.current = e3);
    }, []), q = Y >= y.length, G = B.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""), Q = W.trim() || "Emma Collins", K = B.trim() || "Your workspace", ee = b.filter((e3) => H.includes(e3.id)), et = (e2 = ee.map((e3) => e3.first)).length < 2 ? e2.join("") : `${e2.slice(0, -1).join(", ")} and ${e2[e2.length - 1]}`, ea = y.map((e3) => ({ ...e3, error: V[e3.id] }));
    function er(e3) {
      M(e3 >= Y ? 1 : -1), A(e3);
    }
    function ei(e3) {
      V[e3] && J((t3) => ({ ...t3, [e3]: void 0 }));
    }
    return (0, r.jsxs)("section", { ref: d2, className: g().demo, "aria-labelledby": a2, children: [(0, r.jsxs)("header", { className: g().header, children: [(0, r.jsx)("h3", { id: a2, className: g().title, children: "Set up your workspace" }), (0, r.jsx)(f.A, { label: "Stepper orientation", options: N, value: z2, onValueChange: (e3) => I2("vertical" === e3 ? "vertical" : "horizontal") })] }), (0, r.jsx)(C, { trigger: z2, className: g().frame, innerClassName: g().frameInner, children: (0, r.jsx)(c.N, { mode: "popLayout", initial: false, children: (0, r.jsxs)(o.PY1.div, { className: g().body, "data-orientation": z2, initial: { opacity: 0, filter: `blur(${x.T.blur.soft}px)` }, animate: { opacity: 1, filter: "blur(0px)" }, exit: { opacity: 0, filter: `blur(${x.T.blur.subtle}px)`, transition: t2 ? T : k }, transition: t2 ? T : L, children: [(0, r.jsx)(p.C, { steps: ea, current: Y, orientation: z2, onStepSelect: er, compact: "vertical" === z2 && R, label: "Workspace setup", completeLabel: "Setup complete" }), (0, r.jsxs)("form", { className: g().panel, onSubmit: function(e3) {
      if (e3.preventDefault(), q) {
        D("Emma Collins"), F(""), U(j), J({}), er(0);
        return;
      }
      let t3 = y[Y].id, a3 = "profile" !== t3 || W.trim() ? "workspace" !== t3 || B.trim() ? "workspace" === t3 && G.length < 3 ? "Use 3 or more letters" : void 0 : "Add a workspace name" : "Add your name";
      (J((e4) => ({ ...e4, [t3]: a3 })), a3) ? v2.current?.focus() : er(Y + 1);
    }, noValidate: true, children: [(0, r.jsx)(C, { trigger: String(Y), className: g().stage, innerClassName: g().stageInner, children: (0, r.jsx)(c.N, { mode: "popLayout", initial: false, custom: O, children: (0, r.jsx)(o.PY1.div, { className: g().pane, custom: O, variants: { enter: (e3) => ({ opacity: 0, x: t2 ? 0 : 16 * e3 }), center: { opacity: 1, x: 0 }, exit: (e3) => ({ opacity: 0, x: t2 ? 0 : -16 * e3, transition: t2 ? T : { x: x.T.spring.smooth, opacity: k } }) }, initial: "enter", animate: "center", exit: "exit", transition: t2 ? T : { x: x.T.spring.smooth, opacity: L }, children: (function() {
      if (q) return (0, r.jsxs)("div", { className: g().done, children: [(0, r.jsxs)("p", { className: g().doneTitle, children: [(0, r.jsx)("svg", { className: g().doneIcon, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: (0, r.jsx)(o.PY1.path, { d: "M5 12.5l4.5 4.5L19 7.5", initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: t2 ? T : { duration: x.T.duration.considered, ease: [...x.T.ease.enter], delay: 0.12 } }) }), K, " is ready"] }), (0, r.jsx)("p", { className: g().doneCopy, children: ee.length ? `Invites are queued for ${et}.` : "You can invite your team at any time." })] });
      switch (y[Y].id) {
        case "profile":
          return (0, r.jsxs)("div", { className: g().profile, children: [(0, r.jsx)(_.e, { className: g().photo, name: Q, src: "media/people/emma-collins.svg", size: "lg" }), (0, r.jsx)("div", { className: g().grow, children: (0, r.jsx)(m.p, { ref: X, label: "Full name", value: W, placeholder: "Your full name", autoComplete: "name", error: V.profile, onChange: (e3) => {
            D(e3.target.value), ei("profile");
          } }) })] });
        case "workspace":
          return (0, r.jsxs)("div", { children: [(0, r.jsx)(m.p, { ref: X, label: "Workspace name", value: B, placeholder: "Northwind Studio", autoComplete: "organization", "aria-describedby": l2, error: V.workspace, onChange: (e3) => {
            F(e3.target.value), ei("workspace");
          } }), (0, r.jsxs)("p", { id: l2, className: g().url, children: [(0, r.jsx)("span", { className: g().urlBase, children: w }), G || "your-workspace"] })] });
        case "team":
          return (0, r.jsxs)("div", { children: [(0, r.jsx)("p", { id: s2, className: g().fieldLabel, children: "Invite teammates" }), (0, r.jsx)("div", { className: g().people, role: "group", "aria-labelledby": s2, children: b.map((e3) => (0, r.jsx)(P, { person: e3, invited: H.includes(e3.id), onToggle: () => {
            var t3;
            return t3 = e3.id, void U((e4) => e4.includes(t3) ? e4.filter((e5) => e5 !== t3) : b.map((e5) => e5.id).filter((a3) => a3 === t3 || e4.includes(a3)));
          }, reduced: t2 }, e3.id)) }), (0, r.jsxs)("p", { className: g().hint, children: [(0, r.jsxs)("span", { className: g().hintCount, "aria-hidden": "true", children: [(0, r.jsx)($, { value: ee.length, reduced: t2 }), "\xA0of ", b.length, " selected"] }), (0, r.jsxs)("span", { className: g().srOnly, "aria-live": "polite", children: [ee.length, " of ", b.length, " selected."] })] })] });
        case "review":
          return (0, r.jsxs)("dl", { className: g().summary, children: [(0, r.jsxs)("div", { children: [(0, r.jsx)("dt", { children: "Owner" }), (0, r.jsx)("dd", { children: Q })] }), (0, r.jsxs)("div", { children: [(0, r.jsx)("dt", { children: "Workspace" }), (0, r.jsx)("dd", { children: K })] }), (0, r.jsxs)("div", { children: [(0, r.jsx)("dt", { children: "Address" }), (0, r.jsxs)("dd", { children: [(0, r.jsx)("span", { className: g().urlBase, children: w }), G] })] }), (0, r.jsxs)("div", { children: [(0, r.jsx)("dt", { children: "Invites" }), (0, r.jsx)("dd", { children: ee.length ? (0, r.jsxs)("span", { className: g().guests, children: [(0, r.jsx)(h.Z, { members: ee.map((e3) => ({ name: e3.name, src: e3.src })), size: "sm", label: "Invited teammates" }), (0, r.jsx)("span", { className: g().guestNames, children: et })] }) : "No one yet" })] })] });
      }
    })() }, q ? "done" : y[Y].id) }) }), (0, r.jsxs)("div", { className: g().actions, children: [(0, r.jsx)(u.$, { type: "button", variant: "secondary", onClick: function() {
      Y <= 1 && S2.current?.focus(), er(Math.max(0, Y - 1));
    }, disabled: 0 === Y, children: "Back" }), (0, r.jsx)(u.$, { ref: Z, type: "submit", children: q ? "Start over" : Y === y.length - 1 ? "Finish setup" : "Continue" })] })] })] }, z2) }) })] });
  }
  let I = z;
}

__m(__module,__exports,__require);
}