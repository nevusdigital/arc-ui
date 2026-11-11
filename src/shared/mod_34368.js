function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { SignupForm: () => T, default: () => k });
  var a = i(95155), r = i(12115), n = i(28245), s = i(92171), o = i(18310), l = i(25354), d = i(80642), u = i(51288), c = i(20530), p = i(35978), m = i(93744), h = i(7770), f = i(30448), x = i.n(f);
  let _ = ["Google", "Apple", "GitHub"];
  function y() {
    return (0, a.jsxs)("svg", { className: x().providerMark, width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", children: [(0, a.jsx)("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }), (0, a.jsx)("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }), (0, a.jsx)("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }), (0, a.jsx)("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })] });
  }
  let b = { Apple: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701", GitHub: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" };
  function g(e2, t2, i2) {
    return { name: e2.trim().length < 2 ? "Enter your full name." : "", email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(t2.trim()) ? "" : "Enter a full address, like name@example.com.", password: i2.length < 8 ? "Use at least 8 characters." : "" };
  }
  let j = ["", "Weak", "Fair", "Good", "Strong"], v = { enter: ({ direction: e2, reduce: t2 }) => t2 ? { opacity: 0 } : { opacity: 0, x: 24 * e2, filter: `blur(${h.T.blur.soft}px)` }, center: ({ reduce: e2 }) => ({ opacity: 1, x: 0, filter: "blur(0px)", transition: e2 ? { duration: h.T.duration.instant } : { x: h.T.spring.smooth, opacity: { duration: h.T.duration.standard, ease: h.T.ease.enter, delay: 0.05 }, filter: { duration: h.T.duration.standard, ease: h.T.ease.enter } } }), exit: ({ direction: e2, reduce: t2 }) => t2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, x: -16 * e2, filter: `blur(${h.T.blur.soft}px)`, transition: { x: h.T.spring.smooth, opacity: { duration: h.T.duration.exit, ease: h.T.ease.standard }, filter: { duration: h.T.duration.exit } } } }, w = (e2) => ({ initial: e2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${h.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: e2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -4, filter: `blur(${h.T.blur.subtle}px)`, transition: { duration: h.T.duration.fast } }, transition: e2 ? { duration: h.T.duration.instant } : { duration: h.T.duration.standard, ease: h.T.ease.enter } });
  function T({ onSubmit: e2, serverError: t2, onProvider: i2 }) {
    let f2, k2, N, C, S, P, R = !!(0, o.I)(), $ = (0, r.useId)(), B = (0, r.useRef)(null), E = (0, r.useRef)(null), L = (0, r.useRef)(null), O = (0, r.useRef)(null), Y = (0, r.useRef)([]), [z, I] = (0, r.useState)("form"), [M, F] = (0, r.useState)(1), [H, G] = (0, r.useState)(""), [W, A] = (0, r.useState)(""), [D, U] = (0, r.useState)(""), [K, Z] = (0, r.useState)(false), [q, J] = (0, r.useState)({ name: false, email: false, password: false }), [V, X] = (0, r.useState)(false), [Q, ee] = (0, r.useState)(null), [et, ei] = (0, r.useState)("Email"), [ea, er] = (0, r.useState)(""), [en, es] = (0, r.useState)(""), { track: eo, height: el } = (f2 = (0, r.useRef)(null), k2 = (0, n.d)("auto"), N = (0, r.useRef)(0), C = (0, r.useRef)(false), S = (0, r.useRef)(z), P = (0, r.useCallback)((e3) => {
      C.current = true, (0, s.i)(k2, e3, { ...h.T.spring.smooth, onComplete: () => {
        C.current = false, k2.jump("auto");
      } });
    }, [k2]), (0, r.useEffect)(() => {
      let e3 = f2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && (N.current = t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight, C.current && P(N.current));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [P]), (0, r.useLayoutEffect)(() => {
      if (S.current === z) return;
      S.current = z;
      let e3 = k2.get(), t3 = "number" == typeof e3 ? e3 : N.current, i3 = f2.current?.offsetHeight ?? 0;
      if (R || !t3 || !i3) {
        C.current = false, k2.jump("auto");
        return;
      }
      "auto" === e3 && k2.jump(t3), P(i3);
    }, [z, R, k2, P]), { track: f2, height: k2 }), ed = g(H, W, D), eu = D ? [D.length >= 8, D.length >= 12, /[a-z]/.test(D) && /[A-Z]/.test(D), /\d|[^\w\s]/.test(D)].filter(Boolean).length : 0, ec = (e3) => q[e3] || V ? ed[e3] : "", ep = ec("password"), em = { direction: M, reduce: R }, eh = ea || t2 || "", ef = ep ? { key: "error", text: ep } : D ? { key: `s${eu}`, text: `${j[Math.max(eu, 1)]} password` } : { key: "hint", text: "Use 8 or more characters." };
    function ex(e3) {
      J((t3) => ({ ...t3, [e3]: true }));
    }
    function e_(e3) {
      ee(null), ei(e3), F(1), I("done"), es(`Account created with ${"Email" === e3 ? "your email" : e3}`);
    }
    async function ey(t3) {
      if (t3.preventDefault(), Q) return;
      X(true), er("");
      let i3 = g(H, W, D), a2 = Object.keys(i3).find((e3) => i3[e3]);
      if (a2) return void { name: B, email: E, password: L }[a2].current?.focus();
      ee("form"), es("Creating your account");
      try {
        await Promise.all([e2?.({ name: H.trim(), email: W.trim(), password: D, productUpdates: K }), new Promise((e3) => window.setTimeout(e3, 700))]), e_("Email");
      } catch (e3) {
        ee(null), er(e3 instanceof Error && e3.message ? e3.message : "We couldn't create your account. Try again."), es("Account not created");
      }
    }
    (0, r.useEffect)(() => {
      let e3 = Y.current;
      return () => e3.forEach(window.clearTimeout);
    }, []), (0, r.useEffect)(() => {
      "done" === z && O.current?.focus();
    }, [z]);
    let eb = H.trim().split(/\s+/)[0] || "there";
    return (0, a.jsxs)("section", { className: x().block, "aria-label": "Create an Arc account", children: [(0, a.jsx)(l.PY1.div, { className: x().viewport, style: { height: el }, children: (0, a.jsx)("div", { ref: eo, className: x().track, children: (0, a.jsx)(d.N, { mode: "popLayout", initial: false, custom: em, children: "form" === z ? (0, a.jsxs)(l.PY1.div, { className: x().step, custom: em, variants: v, initial: "enter", animate: "center", exit: "exit", children: [(0, a.jsxs)("div", { className: x().heading, children: [(0, a.jsx)("h2", { children: "Create your account" }), (0, a.jsx)("p", { children: "Start with your work email. You can invite your team after." })] }), (0, a.jsx)("div", { className: x().sso, role: "group", "aria-label": "Sign up with", children: _.map((e3) => (0, a.jsxs)(u.$, { type: "button", variant: "secondary", className: x().ssoButton, "aria-label": `Sign up with ${e3}`, loading: Q === e3, "aria-disabled": !!Q && Q !== e3 || void 0, onClick: () => {
      !Q && (ee(e3), es(`Opening ${e3}`), i2?.(e3), Y.current.push(window.setTimeout(() => {
        H.trim() || G("Jasmine Brooks"), W.trim() || A("jasmine@northwind.studio"), e_(e3);
      }, 900)));
    }, children: ["Google" === e3 ? (0, a.jsx)(y, {}) : (0, a.jsx)("svg", { className: x().providerMark, width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: (0, a.jsx)("path", { d: b[e3] }) }), e3] }, e3)) }), (0, a.jsx)("div", { className: x().divider, children: "or" }), (0, a.jsxs)("form", { onSubmit: (e3) => void ey(e3), noValidate: true, className: x().form, children: [(0, a.jsx)(p.p, { ref: B, label: "Full name", name: "name", autoComplete: "name", placeholder: "Jasmine Brooks", value: H, onChange: (e3) => G(e3.target.value), onBlur: () => {
      H && ex("name");
    }, error: ec("name"), readOnly: !!Q }), (0, a.jsx)(p.p, { ref: E, label: "Work email", name: "email", type: "email", inputMode: "email", autoComplete: "email", autoCapitalize: "none", spellCheck: false, placeholder: "name@example.com", value: W, onChange: (e3) => A(e3.target.value), onBlur: () => {
      W && ex("email");
    }, error: ec("email"), readOnly: !!Q }), (0, a.jsxs)("div", { className: x().passwordGroup, children: [(0, a.jsx)(m.s, { ref: L, label: "Password", name: "password", autoComplete: "new-password", value: D, onChange: (e3) => U(e3.target.value), onBlur: () => {
      D && ex("password");
    }, "aria-invalid": !!ep || void 0, "aria-describedby": $, readOnly: !!Q }), (0, a.jsxs)("div", { className: x().feedback, children: [(0, a.jsx)("span", { id: $, className: x().feedbackText, "data-error": !!ep || void 0, role: ep ? "alert" : void 0, children: (0, a.jsx)(d.N, { mode: "popLayout", initial: false, children: (0, a.jsx)(l.PY1.span, { ...w(R), children: ef.text }, ef.key) }) }), (0, a.jsx)("span", { className: x().meter, "data-level": eu, "aria-hidden": "true", children: [1, 2, 3, 4].map((e3) => (0, a.jsx)("span", { "data-on": e3 <= eu || void 0 }, e3)) })] })] }), (0, a.jsx)("div", { className: x().updates, children: (0, a.jsx)(c.S, { label: "Email me product updates", checked: K, onCheckedChange: (e3) => Z(true === e3), disabled: !!Q }) }), (0, a.jsx)(d.N, { initial: false, children: eh && (0, a.jsx)(l.PY1.div, { className: x().row, initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: R ? { duration: 0 } : { height: h.T.spring.smooth, opacity: { duration: h.T.duration.fast } }, children: (0, a.jsx)("p", { className: x().submitError, role: "alert", children: eh }) }, "error") }), (0, a.jsx)(u.$, { className: x().wide, type: "submit", loading: "form" === Q, children: "Create account" })] }), (0, a.jsxs)("p", { className: x().legal, children: ["By creating an account you agree to the ", (0, a.jsx)("button", { type: "button", className: x().textButton, onClick: () => es("Terms open in your app"), children: "Terms" }), " and ", (0, a.jsx)("button", { type: "button", className: x().textButton, onClick: () => es("Privacy policy opens in your app"), children: "Privacy policy" }), "."] })] }, "form") : (0, a.jsxs)(l.PY1.div, { className: x().step, custom: em, variants: v, initial: "enter", animate: "center", exit: "exit", children: [(0, a.jsxs)("svg", { className: x().success, viewBox: "0 0 48 48", "aria-hidden": "true", children: [(0, a.jsx)("g", { transform: "rotate(-90 24 24)", children: (0, a.jsx)(l.PY1.circle, { cx: "24", cy: "24", r: "22.25", fill: "none", stroke: "currentColor", strokeWidth: "1.5", initial: !R && { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { pathLength: { duration: h.T.duration.considered, ease: h.T.ease.inOut, delay: 0.16 }, opacity: { duration: h.T.duration.instant, delay: 0.16 } } }) }), (0, a.jsx)(l.PY1.path, { d: "M15.5 24.5l5.5 5.5 11.5-12", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", initial: !R && { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { pathLength: { duration: h.T.duration.standard + 0.08, ease: h.T.ease.enter, delay: 0.5 }, opacity: { duration: h.T.duration.instant, delay: 0.5 } } })] }), (0, a.jsxs)("div", { className: x().heading, children: [(0, a.jsxs)("h2", { ref: O, tabIndex: -1, children: ["Welcome, ", eb] }), (0, a.jsxs)("p", { children: ["Your account is ready. We sent a confirmation to ", (0, a.jsx)("span", { className: x().address, children: W.trim() }), "."] })] }), (0, a.jsxs)("dl", { className: x().details, children: [(0, a.jsxs)("div", { children: [(0, a.jsx)("dt", { children: "Signed up with" }), (0, a.jsx)("dd", { children: et })] }), (0, a.jsxs)("div", { children: [(0, a.jsx)("dt", { children: "Product updates" }), (0, a.jsx)("dd", { children: K ? "On" : "Off" })] })] }), (0, a.jsx)(u.$, { type: "button", variant: "secondary", className: x().wide, onClick: function() {
      G(""), A(""), U(""), Z(false), J({ name: false, email: false, password: false }), X(false), er(""), F(-1), I("form"), es("Start again with new details"), Y.current.push(window.setTimeout(() => B.current?.focus(), 60));
    }, children: "Start over" })] }, "done") }) }) }), (0, a.jsxs)("footer", { className: x().footer, children: [(0, a.jsx)("p", { className: x().srOnly, role: "status", "aria-live": "polite", children: en }), (0, a.jsx)("span", { className: x().status, "aria-hidden": "true", children: (0, a.jsx)(d.N, { mode: "popLayout", initial: false, children: (0, a.jsx)(l.PY1.span, { ...w(R), children: en }, en) }) }), (0, a.jsxs)("span", { className: x().switch, children: ["Have an account? ", (0, a.jsx)("button", { type: "button", className: x().textButton, onClick: () => es("Sign in opens in your app"), children: "Sign in" })] })] })] });
  }
  let k = T;
}

__m(__module,__exports,__require);
}