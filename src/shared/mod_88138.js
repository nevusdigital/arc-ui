function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { LoginCentered: () => L, default: () => B });
  var n = i(95155), a = i(12115), r = i(80642), s = i(25354), o = i(28245), l = i(92171), d = i(22535), c = i(55809), u = i(18310), p = i(16092), h = i(64577), m = i(75796), f = i(51288), x = i(35978), y = i(78766), _ = i(7770), g = i(56214), b = i.n(g);
  function j({ className: e2 }) {
    return (0, n.jsxs)("svg", { className: e2, width: "16", height: "16", viewBox: "0 0 24 24", "aria-hidden": "true", children: [(0, n.jsx)("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }), (0, n.jsx)("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }), (0, n.jsx)("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }), (0, n.jsx)("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })] });
  }
  let v = ["Google", "Apple", "GitHub"], w = { Google: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z", Apple: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701", GitHub: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }, N = Array.from({ length: 14 }, (e2, t2) => ({ r: 224 + 60 * t2, k: 1 + 0.34 * t2, major: t2 % 3 == 2 })), T = (e2) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e2.trim()), k = { enter: ({ direction: e2, reduce: t2 }) => t2 ? { opacity: 0 } : { opacity: 0, y: 12 * e2, filter: `blur(${_.T.blur.soft}px)` }, center: ({ reduce: e2 }) => ({ opacity: 1, y: 0, filter: "blur(0px)", transition: e2 ? { duration: _.T.duration.instant } : { y: _.T.spring.smooth, opacity: { duration: _.T.duration.standard, ease: _.T.ease.enter, delay: 0.06 }, filter: { duration: _.T.duration.standard, ease: _.T.ease.enter, delay: 0.04 } } }), exit: ({ direction: e2, reduce: t2 }) => t2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -8 * e2, filter: `blur(${_.T.blur.soft}px)`, transition: { duration: _.T.duration.exit, ease: _.T.ease.standard } } }, S = (e2) => ({ initial: e2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${_.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: e2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -4, filter: `blur(${_.T.blur.subtle}px)`, transition: { duration: _.T.duration.fast } }, transition: e2 ? { duration: _.T.duration.instant } : { duration: _.T.duration.standard, ease: [..._.T.ease.enter] } }), C = (e2, t2) => e2 ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: t2 ? 0 : -6, filter: `blur(${t2 ? 0 : _.T.blur.subtle}px)` }, $ = (e2) => e2 ? { duration: _.T.duration.instant } : { duration: _.T.duration.standard, ease: [..._.T.ease.enter] }, P = { enter: (e2) => ({ opacity: 0, y: `${-0.7 * e2}em`, filter: `blur(${_.T.blur.subtle}px)` }), center: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: (e2) => ({ opacity: 0, y: `${0.7 * e2}em`, filter: `blur(${_.T.blur.subtle}px)` }) };
  function R({ seconds: e2, reduce: t2 }) {
    let [i2, o2] = (0, a.useState)({ seconds: e2, direction: 1 });
    i2.seconds !== e2 && o2({ seconds: e2, direction: e2 < i2.seconds ? 1 : -1 });
    let l2 = `${Math.floor(e2 / 60)}:${String(e2 % 60).padStart(2, "0")}`, d2 = t2 ? { duration: 0 } : { y: _.T.spring.snappy, opacity: { duration: _.T.duration.fast }, filter: { duration: _.T.duration.fast } };
    return (0, n.jsx)("span", { className: b().time, children: l2.split("").map((e3, t3) => (0, n.jsx)("span", { className: b().timeColumn, children: (0, n.jsx)(r.N, { initial: false, mode: "popLayout", custom: i2.direction, children: (0, n.jsx)(s.PY1.span, { custom: i2.direction, variants: P, initial: "enter", animate: "center", exit: "exit", transition: d2, children: e3 }, e3) }) }, t3)) });
  }
  function E({ reduce: e2 }) {
    return (0, n.jsxs)("span", { className: b().pulse, children: [!e2 && [0, 1].map((e3) => (0, n.jsx)(s.PY1.span, { className: b().pulseRing, initial: { scale: 0.7, opacity: 0 }, animate: { scale: [0.7, 2.1], opacity: [0.6, 0] }, transition: { duration: 1.2, ease: [..._.T.ease.standard], delay: 0.6 * e3 } }, e3)), (0, n.jsx)(p.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" })] });
  }
  function L({ demoCode: e2 = "482913", fullScreen: t2 = false, demoEmail: i2 = "maya@northwind.studio", termsHref: g2 = "#terms", privacyHref: P2 = "#privacy", onSignIn: B2, className: z }) {
    let Y, A, M, W, F, O, D, I, H, V, q, G, U, X = !!(0, u.I)(), [Z, J] = (0, a.useState)("passkey"), [K, Q] = (0, a.useState)("sign-in"), [ee, et] = (0, a.useState)(1), [ei, en] = (0, a.useState)("idle"), [ea, er] = (0, a.useState)(null), [es, eo] = (0, a.useState)(false), [el, ed] = (0, a.useState)(""), [ec, eu] = (0, a.useState)(false), [ep, eh] = (0, a.useState)(false), [em, ef] = (0, a.useState)(""), [ex, ey] = (0, a.useState)(""), [e_, eg] = (0, a.useState)(30), [eb, ej] = (0, a.useState)(i2), [ev, ew] = (0, a.useState)("Passkey"), [eN, eT] = (0, a.useState)(""), ek = (0, a.useRef)(null), eS = (0, a.useRef)(null), eC = (0, a.useRef)(null), e$ = (0, a.useRef)(null), eP = (0, a.useRef)(null), eR = (0, a.useRef)([]), eE = "email" === Z ? `email-${K}` : Z, { track: eL, height: eB } = (Y = (0, a.useRef)(null), A = (0, o.d)("auto"), M = (0, a.useRef)(0), W = (0, a.useRef)(false), F = (0, a.useRef)(eE), O = (0, a.useCallback)((e3) => {
      W.current = true, (0, l.i)(A, e3, { ..._.T.spring.smooth, onComplete: () => {
        W.current = false, A.jump("auto");
      } });
    }, [A]), (0, a.useEffect)(() => {
      let e3 = Y.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && (M.current = t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight, W.current && O(M.current));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [O]), (0, a.useLayoutEffect)(() => {
      if (F.current === eE) return;
      F.current = eE;
      let e3 = A.get(), t3 = "number" == typeof e3 ? e3 : M.current, i3 = Y.current?.offsetHeight ?? 0;
      if (X || !t3 || !i3) {
        W.current = false, A.jump("auto");
        return;
      }
      "auto" === e3 && A.jump(t3), O(i3);
    }, [eE, X, A, O]), { track: Y, height: A }), ez = (D = (0, o.d)(0), I = (0, o.d)(0), H = (0, d.z)(D, { visualDuration: 0.9, bounce: 0 }), V = (0, d.z)(I, { visualDuration: 0.9, bounce: 0 }), q = (0, c.G)(H, (e3) => `${e3.toFixed(2)}px`), G = (0, c.G)(V, (e3) => `${e3.toFixed(2)}px`), U = (0, a.useRef)(false), (0, a.useEffect)(() => {
      if (!window.matchMedia) return;
      let e3 = window.matchMedia("(hover: hover) and (pointer: fine)"), t3 = () => {
        U.current = e3.matches;
      };
      return t3(), e3.addEventListener("change", t3), () => e3.removeEventListener("change", t3);
    }, []), { style: { "--dx": q, "--dy": G }, onPointerMove: (e3) => {
      if (X || !U.current || "mouse" !== e3.pointerType) return;
      let t3 = e3.currentTarget.getBoundingClientRect();
      D.set(-(((e3.clientX - t3.left) / t3.width - 0.5) * 2)), I.set(-(((e3.clientY - t3.top) / t3.height - 0.5) * 2));
    }, onPointerLeave: () => {
      D.set(0), I.set(0);
    } }), eY = (ec || ep) && !T(el) ? el.trim() ? "Enter a full address, like name@example.com." : "Enter your email address." : "", eA = { direction: ee, reduce: X }, eM = "sign-up" === K;
    function eW(e3, t3) {
      eR.current.push(window.setTimeout(e3, t3));
    }
    function eF() {
      eR.current.forEach(window.clearTimeout), eR.current = [], er(null), eo(false);
    }
    function eO(e3, t3, i3 = "code" === e3 ? null : e3) {
      eP.current = i3, et(t3), "passkey" === e3 && en("idle"), J(e3);
    }
    (0, a.useEffect)(() => () => eR.current.forEach(window.clearTimeout), []), (0, a.useEffect)(() => {
      if ("code" !== Z || e_ <= 0) return;
      let e3 = window.setTimeout(() => eg((e4) => Math.max(0, e4 - 1)), 1e3);
      return () => window.clearTimeout(e3);
    }, [Z, e_]), (0, a.useEffect)(() => {
      let e3 = eP.current;
      eP.current = null, "passkey" === e3 && ek.current?.focus(), "email" === e3 && eS.current?.focus(), "done" === e3 && e$.current?.focus();
    }, [eE]);
    let eD = () => eC.current?.querySelector("input")?.focus();
    function eI(e3, t3) {
      eF(), ej(e3), ew(t3), eO("done", 1), eT(`${eM ? "Account created" : "Signed in"} with ${"Email code" === t3 ? "an email code" : "Passkey" === t3 ? "a passkey" : t3}`), B2?.(e3, t3, K);
    }
    function eH(t3) {
      if (!ea && !es) {
        if (t3.length < 6) {
          ey("Enter all 6 digits."), eD();
          return;
        }
        er("code"), eT("Checking code"), eW(() => {
          if (er(null), t3 !== e2) {
            ef(""), ey("That code didn't match. Check the latest email and try again."), eT("Code didn't match"), eD();
            return;
          }
          eo(true), eT("Code verified"), eW(() => eI(eb, "Email code"), 600);
        }, 700);
      }
    }
    function eV(e3, t3) {
      return (i3) => {
        e3.startsWith("#") && (i3.preventDefault(), eT(`${t3} opens here in your app (demo)`));
      };
    }
    let eq = "waiting" === ei ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(E, { reduce: X }), "Waiting for your device"] }) : "verified" === ei ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(h.A, { size: 16, strokeWidth: 2, "aria-hidden": "true" }), "Passkey verified"] }) : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(p.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Sign in with passkey"] });
    return (0, n.jsxs)("section", { className: [b().screen, t2 ? b().fullScreen : "", z].filter(Boolean).join(" "), "aria-label": eM ? "Create an account" : "Sign in", onPointerMove: ez.onPointerMove, onPointerLeave: ez.onPointerLeave, children: [(0, n.jsx)(s.PY1.div, { className: b().backdrop, style: ez.style, "aria-hidden": "true", children: (0, n.jsx)("svg", { className: b().lines, children: (0, n.jsxs)("svg", { x: "50%", y: "50%", overflow: "visible", children: [(0, n.jsx)("line", { className: b().axis, x1: "-2400", x2: "2400", y1: "0", y2: "0" }), (0, n.jsx)("line", { className: b().axis, x1: "0", x2: "0", y1: "-2400", y2: "2400" }), N.map((e3) => (0, n.jsx)("circle", { className: e3.major ? `${b().ring} ${b().ringMajor}` : b().ring, r: e3.r, cx: "0", cy: "0", style: { "--k": e3.k } }, e3.r))] }) }) }), (0, n.jsxs)("header", { className: b().bar, children: [(0, n.jsxs)("span", { className: b().mark, children: [(0, n.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", children: [(0, n.jsx)("path", { d: "M3 15a7 7 0 0 1 14 0", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }), (0, n.jsx)("circle", { cx: "10", cy: "15", r: "1.75", fill: "currentColor" })] }), "Arc"] }), (0, n.jsxs)("p", { className: b().switch, children: [(0, n.jsx)("span", { className: b().switchPrompt, children: ["sign-in", "sign-up"].map((e3) => (0, n.jsx)(s.PY1.span, { "aria-hidden": e3 !== K || void 0, initial: false, animate: C(e3 === K, X), transition: $(X), children: "sign-up" === e3 ? "Have an account?" : "No account?" }, e3)) }), (0, n.jsx)("button", { type: "button", className: b().switchButton, "aria-label": eM ? "Sign in" : "Sign up", onClick: function() {
      if (eF(), eh(false), ef(""), eM) {
        Q("sign-in"), eO("passkey", -1), eT("Sign in to your account");
        return;
      }
      Q("sign-up"), eO("email", 1), eT("Create an account with your email");
    }, children: ["sign-in", "sign-up"].map((e3) => (0, n.jsx)(s.PY1.span, { "aria-hidden": "true", initial: false, animate: C(e3 === K, X), transition: $(X), children: "sign-up" === e3 ? "Sign in" : "Sign up" }, e3)) })] })] }), (0, n.jsx)("div", { className: b().stage, children: (0, n.jsx)("div", { className: b().card, children: (0, n.jsx)(s.PY1.div, { className: b().viewport, style: { height: eB }, children: (0, n.jsx)("div", { ref: eL, className: b().track, children: (0, n.jsxs)(r.N, { mode: "popLayout", initial: false, custom: eA, children: ["passkey" === Z && (0, n.jsxs)(s.PY1.div, { className: b().step, custom: eA, variants: k, initial: "enter", animate: "center", exit: "exit", children: [(0, n.jsxs)("div", { className: b().heading, children: [(0, n.jsx)("h2", { children: "Sign in to Arc" }), (0, n.jsx)("p", { children: "Use the passkey saved on this device. No password needed." })] }), (0, n.jsxs)("div", { className: b().actions, children: [(0, n.jsx)(f.$, { ref: ek, type: "button", className: b().wide, "aria-busy": "waiting" === ei || void 0, "aria-disabled": "idle" !== ei || !!ea || void 0, onClick: function() {
      "idle" !== ei || ea || (en("waiting"), eT("Waiting for your passkey"), eW(() => {
        en("verified"), eT("Passkey verified"), eW(() => eI(i2, "Passkey"), 640);
      }, 1700));
    }, children: eq }), (0, n.jsx)(f.$, { type: "button", variant: "secondary", className: b().wide, "aria-disabled": "verified" === ei || !!ea || void 0, onClick: "waiting" === ei ? function() {
      eF(), en("idle"), eT("Passkey request canceled"), ek.current?.focus();
    } : function() {
      "verified" === ei || ea || (eF(), en("idle"), eh(false), eO("email", 1), eT("We will email you a sign in code"));
    }, children: "waiting" === ei ? "Cancel" : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(m.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Use email instead"] }) })] }), (0, n.jsx)("div", { className: b().divider, children: "or" }), (0, n.jsx)("div", { className: b().sso, role: "group", "aria-label": "Single sign-on", children: v.map((e3) => (0, n.jsxs)(f.$, { type: "button", variant: "secondary", className: b().ssoButton, "aria-label": `Continue with ${e3}`, "aria-disabled": "idle" !== ei || !!ea && ea !== e3 || void 0, loading: ea === e3, onClick: () => {
      !ea && "idle" === ei && (er(e3), eT(`Opening ${e3}`), eW(() => eI(i2, e3), 900));
    }, children: ["Google" === e3 ? (0, n.jsx)(j, {}) : (0, n.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: (0, n.jsx)("path", { d: w[e3] }) }), e3] }, e3)) })] }, "passkey"), "email" === Z && (0, n.jsxs)(s.PY1.div, { className: b().step, custom: eA, variants: k, initial: "enter", animate: "center", exit: "exit", children: [(0, n.jsx)("div", { className: b().heading, children: eM ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("h2", { children: "Create your account" }), (0, n.jsx)("p", { children: "Enter your work email. We will send a code to confirm it." })] }) : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("h2", { children: "Sign in with email" }), (0, n.jsx)("p", { children: "We will send a 6 digit code to your inbox." })] }) }), (0, n.jsxs)("form", { className: b().form, onSubmit: function(e3) {
      if (e3.preventDefault(), !ea) {
        if (eh(true), !T(el)) return void eS.current?.focus();
        er("email"), eT("Sending a code"), eW(() => {
          let e4 = el.trim().toLowerCase();
          er(null), ej(e4), ef(""), ey(""), eg(30), eO("code", 1), eT(`Code sent to ${e4}`);
        }, 800);
      }
    }, noValidate: true, children: [(0, n.jsx)(x.p, { ref: eS, label: eM ? "Work email" : "Email", type: "email", name: "email", inputMode: "email", autoComplete: "email", autoCapitalize: "none", spellCheck: false, placeholder: "name@example.com", value: el, readOnly: "email" === ea, error: eY, onChange: (e3) => ed(e3.target.value), onBlur: () => {
      el.trim() && eu(true);
    } }), (0, n.jsx)(f.$, { type: "submit", className: b().wide, loading: "email" === ea, children: eM ? "Create account" : "Send code" })] }), !eM && (0, n.jsxs)("button", { type: "button", className: b().textButton, onClick: function() {
      eF(), Q("sign-in"), eO("passkey", -1), eT("Sign in with your passkey");
    }, children: [(0, n.jsx)(p.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), "Use a passkey instead"] })] }, `email-${K}`), "code" === Z && (0, n.jsxs)(s.PY1.div, { className: b().step, custom: eA, variants: k, initial: "enter", animate: "center", exit: "exit", children: [(0, n.jsxs)("div", { className: b().heading, children: [(0, n.jsx)("h2", { children: "Check your email" }), (0, n.jsxs)("p", { children: ["Enter the code sent to ", (0, n.jsx)("span", { className: b().address, children: eb }), ". ", (0, n.jsx)("button", { type: "button", className: b().inlineButton, onClick: function() {
      eF(), eh(false), eO("email", -1), eT("Edit your email");
    }, children: "Change" })] })] }), (0, n.jsxs)("form", { className: b().form, onSubmit: (e3) => {
      e3.preventDefault(), eH(em);
    }, noValidate: true, children: [(0, n.jsx)("div", { ref: eC, children: (0, n.jsx)(y.I, { label: "Verification code", description: `Demo code: ${e2}`, value: em, onChange: function(e3) {
      ea || es || (ef(e3), ex && e3 && ey(""), 6 === e3.length && eH(e3));
    }, error: ex, autoFocus: true }) }), (0, n.jsx)(f.$, { type: "submit", className: b().wide, loading: "code" === ea, "aria-disabled": es || void 0, children: es ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(h.A, { size: 16, strokeWidth: 2, "aria-hidden": "true" }), "Verified"] }) : eM ? "Verify and create account" : "Verify" })] }), (0, n.jsx)("button", { type: "button", className: b().textButton, "aria-disabled": e_ > 0 || es || void 0, "aria-label": e_ > 0 ? `Resend code, available in ${e_} seconds` : "Resend code", onClick: function() {
      ea || es || e_ > 0 || (eg(30), ef(""), ey(""), eT("New code sent"), eD());
    }, children: (0, n.jsx)(r.N, { mode: "popLayout", initial: false, children: (0, n.jsx)(s.PY1.span, { className: b().resendLabel, ...S(X), children: e_ > 0 ? (0, n.jsxs)(n.Fragment, { children: ["Resend code in ", (0, n.jsx)(R, { seconds: e_, reduce: X })] }) : "Resend code" }, e_ > 0 ? "wait" : "ready") }) })] }, "code"), "done" === Z && (0, n.jsxs)(s.PY1.div, { className: b().step, custom: eA, variants: k, initial: "enter", animate: "center", exit: "exit", children: [(0, n.jsxs)("svg", { className: b().success, viewBox: "0 0 48 48", "aria-hidden": "true", children: [(0, n.jsx)("g", { transform: "rotate(-90 24 24)", children: (0, n.jsx)(s.PY1.circle, { cx: "24", cy: "24", r: "22.25", fill: "none", stroke: "currentColor", strokeWidth: "1.5", initial: !X && { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { pathLength: { duration: _.T.duration.considered, ease: [..._.T.ease.inOut], delay: 0.16 }, opacity: { duration: _.T.duration.instant, delay: 0.16 } } }) }), (0, n.jsx)(s.PY1.path, { d: "M15.5 24.5l5.5 5.5 11.5-12", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", initial: !X && { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { pathLength: { duration: _.T.duration.standard + 0.08, ease: [..._.T.ease.enter], delay: 0.52 }, opacity: { duration: _.T.duration.instant, delay: 0.52 } } })] }), (0, n.jsxs)("div", { className: b().heading, children: [(0, n.jsx)("h2", { ref: e$, tabIndex: -1, children: eM ? "Welcome to Arc" : "Welcome back" }), (0, n.jsxs)("p", { children: [eM ? "Your account is ready. " : "You are signed in as ", (0, n.jsx)("span", { className: b().address, children: eb }), eM ? "" : "."] })] }), (0, n.jsxs)("dl", { className: b().details, children: [(0, n.jsxs)("div", { children: [(0, n.jsx)("dt", { children: "Method" }), (0, n.jsx)("dd", { children: ev })] }), (0, n.jsxs)("div", { children: [(0, n.jsx)("dt", { children: "This device" }), (0, n.jsx)("dd", { children: "Remembered for 30 days" })] })] }), (0, n.jsx)(f.$, { type: "button", variant: "secondary", className: b().wide, onClick: function() {
      eF(), ed(""), eu(false), eh(false), ef(""), Q("sign-in"), eO("passkey", -1), eT("Signed out");
    }, children: "Sign out" })] }, "done")] }) }) }) }) }), (0, n.jsxs)("footer", { className: b().foot, children: [(0, n.jsx)("p", { className: b().srOnly, role: "status", "aria-live": "polite", children: eN }), (0, n.jsx)("span", { className: b().status, "aria-hidden": "true", children: (0, n.jsx)(r.N, { mode: "popLayout", initial: false, children: (0, n.jsx)(s.PY1.span, { ...S(X), children: eN }, eN) }) }), (0, n.jsxs)("nav", { className: b().legal, "aria-label": "Legal", children: [(0, n.jsx)("a", { href: g2, onClick: eV(g2, "Terms"), children: "Terms" }), (0, n.jsx)("a", { href: P2, onClick: eV(P2, "Privacy policy"), children: "Privacy" })] })] })] });
  }
  let B = L;
}

__m(__module,__exports,__require);
}