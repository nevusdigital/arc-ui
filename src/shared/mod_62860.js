function(__module,__exports,__require){
"use strict";
function __m(e, i, a) {
  "use strict";
  a.r(i), a.d(i, { NewsletterSignup: () => E, NewsletterSignupBlock: () => H, default: () => D });
  var t = a(95155), s = a(12115), n = a(5772), r = a(80642), l = a(25354), o = a(18310), d = a(30464), c = a(90467), u = a(65024), h = a(66558), m = a(50680), p = a(7770), g = a(67752);
  let w = (e2, i2, a2) => ({ title: e2, image: (0, g.jW)(i2).src, minutes: a2 }), _ = { inline: { title: "Five minutes on interface craft, every Friday", description: "Three links worth your time and one short essay on the details that make software feel right." }, card: { title: "Get the next issue on Friday", description: "Three links and one short essay on interface craft. Five minutes, once a week." }, privacy: "No tracking pixels. Unsubscribe with one click.", privacyLink: { label: "Privacy policy", href: "#privacy" } }, b = { name: "Margins", upcoming: { number: 149, date: "Friday, October 2", subject: "Designing for the second visit, not the first", stories: [w("Empty states that invite a first step", "reading-chair", 5), w("Texture without noise, from a ceramics studio", "stacked-bowls", 4), w("How a concert hall seats two thousand people", "concert-hall", 7)] }, recent: [{ number: 148, date: "Friday, September 25", subject: "Why the best settings pages feel quiet", stories: [w("What a sunroom teaches about contrast", "sunroom", 4), w("The case for a single accent color", "ceramic-lamp", 3), w("Lisbon tram signs and wayfinding at scale", "lisbon-tram", 6)] }, { number: 147, date: "Friday, September 18", subject: "Springs that settle instead of bounce", stories: [w("Reading the ridge line of an animation curve", "mountain-ridges", 5), w("A table lamp and the warmth of dark mode", "table-lamp", 3), w("Curves in architecture and in corners", "curved-facade", 4)] }, { number: 146, date: "Friday, September 11", subject: "Copy that sounds like a person", stories: [w("Error messages that take the blame", "glass-carafe", 4), w("Writing buttons as verbs", "home-office", 3), w("Tone of voice at the dinner table", "salmon-dinner", 5)] }] }, y = { count: 12480, faces: ["jasmine-brooks", "daniel-kim", "ava-mitchell"].map((e2) => (0, g.my)(e2)) };
  var f = a(14884), j = a.n(f);
  let x = [...p.T.ease.enter], v = [...p.T.ease.standard], k = "Enter your email address", N = "Enter an email like name@company.com", T = "That didn't go through. Your email is kept, so try again.", S = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function F(e2) {
    let i2 = e2.trim();
    return i2 ? S.test(i2) ? null : { kind: "invalid", text: N } : { kind: "invalid", text: k };
  }
  let A = { opacity: 0, y: 6, filter: `blur(${p.T.blur.subtle}px)` }, $ = { opacity: 1, y: 0, filter: "blur(0px)" }, C = { opacity: 0, y: -6, filter: `blur(${p.T.blur.subtle}px)`, transition: { duration: p.T.duration.fast, ease: v } }, z = { opacity: 0 }, L = { opacity: 0, transition: { duration: p.T.duration.instant } };
  function P({ id: e2, children: i2, reduced: a2, className: s2, live: n2 }) {
    return (0, t.jsx)("div", { className: s2, "aria-live": n2, children: (0, t.jsx)(r.N, { initial: false, mode: "popLayout", children: (0, t.jsx)(l.PY1.div, { initial: a2 ? z : A, animate: $, exit: a2 ? L : C, transition: { duration: a2 ? p.T.duration.instant : p.T.duration.standard, ease: x }, children: i2 }, e2) }) });
  }
  function M({ issue: e2, name: i2, to: a2 }) {
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)("header", { className: j().issueHead, children: [(0, t.jsx)("span", { className: j().masthead, children: i2 }), (0, t.jsxs)("span", { className: j().issueNumber, children: ["Issue ", e2.number] })] }), (0, t.jsxs)("p", { className: j().issueMeta, children: [(0, t.jsx)("span", { className: j().issueDate, children: e2.date }), a2 && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("span", { "aria-hidden": "true", children: "\xB7" }), (0, t.jsxs)("span", { className: j().recipient, children: ["To ", (0, t.jsx)("span", { className: j().recipientEmail, children: a2 })] })] })] }), (0, t.jsx)("h3", { className: j().subject, children: e2.subject }), (0, t.jsx)("ul", { className: j().stories, children: e2.stories.slice(0, 3).map((e3) => (0, t.jsxs)("li", { className: j().story, children: [(0, t.jsx)(n.default, { className: j().thumb, src: e3.image, alt: "", width: 88, height: 88, sizes: "44px" }), (0, t.jsx)("span", { className: j().storyTitle, children: e3.title }), (0, t.jsxs)("span", { className: j().minutes, children: [e3.minutes, " min"] })] }, e3.title)) })] });
  }
  let I = { placed: ({ depth: e2 }) => ({ opacity: 1, y: -(12 * e2), scale: 1 - 0.045 * e2 }), away: ({ upcoming: e2 }) => e2 ? { opacity: 0, y: 56, scale: 1 } : { opacity: 0, y: -36, scale: 0.865 } }, O = { ...p.T.spring.smooth, opacity: { duration: p.T.duration.instant, ease: v } }, R = { duration: 0, opacity: { duration: p.T.duration.fast } };
  function W({ publication: e2, delivered: i2, to: a2, reduced: s2, compact: n2 }) {
    let o2 = (i2 ? [e2.upcoming, ...e2.recent] : e2.recent).slice(0, 3);
    return (0, t.jsxs)("div", { className: j().stack, "data-compact": n2 ? "" : void 0, children: [(0, t.jsx)("div", { className: `${j().issue} ${j().issueSizer}`, "aria-hidden": "true", children: (0, t.jsx)(M, { issue: e2.upcoming, name: e2.name, to: a2 || " " }) }), (0, t.jsx)(r.N, { initial: false, children: o2.map((i3, n3) => {
      let r2 = i3 === e2.upcoming;
      return (0, t.jsx)(l.PY1.article, { className: j().issue, "data-depth": n3, "aria-hidden": n3 > 0 || void 0, "aria-label": 0 === n3 ? `${e2.name}, issue ${i3.number}` : void 0, custom: { depth: n3, upcoming: r2 }, variants: I, initial: "away", animate: "placed", exit: "away", transition: s2 ? R : O, style: { zIndex: 3 - n3 }, children: (0, t.jsx)(M, { issue: i3, name: e2.name, to: r2 ? a2 : void 0 }) }, i3.number);
    }) })] });
  }
  function B({ readers: e2, done: i2, reduced: a2 }) {
    return (0, t.jsxs)("div", { className: j().readers, children: [(0, t.jsx)("span", { className: j().faces, "aria-hidden": "true", children: e2.faces.slice(0, 3).map((e3) => (0, t.jsx)(n.default, { src: e3, alt: "", width: 56, height: 56, sizes: "28px" }, e3)) }), (0, t.jsxs)("span", { className: j().readerLine, children: [(0, t.jsx)("span", { className: j().count, children: (0, t.jsx)(u.A, { value: e2.count + +!!i2 }) }), " ", "readers", (0, t.jsx)(r.N, { initial: false, children: i2 && (0, t.jsx)(l.PY1.span, { className: j().you, initial: a2 ? { opacity: 0 } : { opacity: 0, width: 0 }, animate: a2 ? { opacity: 1 } : { opacity: 1, width: "auto" }, exit: a2 ? { opacity: 0 } : { opacity: 0, width: 0 }, transition: a2 ? { duration: p.T.duration.instant } : { width: p.T.spring.smooth, opacity: { duration: p.T.duration.standard, ease: x, delay: 0.12 } }, children: ", including you" }, "you") })] })] });
  }
  let E = (0, s.forwardRef)(function({ variant: e2 = "inline", title: i2, description: a2, placeholder: n2 = "you@company.com", buttonLabel: u2 = "Subscribe", privacyNote: h2 = _.privacy, privacyLink: m2 = _.privacyLink, readers: g2 = y, publication: w2 = b, onSubscribe: f2, className: v2 }, S2) {
    let M2 = (0, s.useId)(), I2 = !!(0, o.I)(), [O2, R2] = (0, s.useState)(""), [E2, Y2] = (0, s.useState)(null), [H2, D2] = (0, s.useState)(false), [V, G] = (0, s.useState)("idle"), [U, J] = (0, s.useState)(""), Z = (0, s.useRef)(null), K = (0, s.useRef)(null), q = (0, s.useRef)(false), X = (0, s.useRef)(false), [Q, ee] = (0, d.l)(), ei = _[e2];
    function ea() {
      !I2 && Q.current && ee(Q.current, { x: [0, -6, 5, -3, 1, 0] }, { duration: 0.36, ease: "easeOut" });
    }
    async function et(e3) {
      if (e3.preventDefault(), q.current || "idle" !== V) return;
      D2(true);
      let i3 = F(O2);
      if (Y2(i3), i3) {
        ea(), Z.current?.focus();
        return;
      }
      let a3 = O2.trim();
      q.current = true, G("sending");
      try {
        await (f2 ? f2(a3) : new Promise((e4) => setTimeout(e4, 1100))), J(a3), G("done");
      } catch {
        G("idle"), Y2({ kind: "failed", text: T }), ea();
      } finally {
        q.current = false;
      }
    }
    (0, s.useEffect)(() => {
      "idle" === V && X.current && (X.current = false, Z.current?.focus()), "done" === V && K.current?.focus();
    }, [V]);
    let es = "done" === V, en = "sending" === V, er = `${M2}-message`, el = es ? "done" : en ? "sending" : E2?.kind === "failed" ? "retry" : "idle", eo = { idle: (0, t.jsxs)(t.Fragment, { children: [u2, (0, t.jsx)(c.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" })] }), retry: (0, t.jsxs)(t.Fragment, { children: ["Try again", (0, t.jsx)(c.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" })] }), sending: (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("span", { className: j().spinner, "aria-hidden": "true" }), "Subscribing"] }), done: (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("span", { className: j().check, "aria-hidden": "true", children: (0, t.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: (0, t.jsx)(l.PY1.path, { d: "M5 12.5l4.5 4.5L19 7.5", initial: !I2 && { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.34 * !I2, ease: x, delay: 0.12 } }) }) }), "Subscribed"] }) }, ed = "Check your inbox to confirm.", ec = (0, t.jsxs)(t.Fragment, { children: [h2, m2 && (0, t.jsxs)(t.Fragment, { children: [" ", (0, t.jsx)("a", { className: j().link, href: m2.href, children: m2.label })] })] }), eu = [(0, t.jsxs)(t.Fragment, { children: [h2, m2 && ` ${m2.label}`] }), `${ed} Use a different email`, k, N, T], eh = (0, t.jsxs)("form", { className: j().form, onSubmit: et, noValidate: true, "aria-label": i2 ?? ei.title, children: [(0, t.jsxs)(l.PY1.div, { ref: Q, className: j().pill, "data-invalid": E2 ? "" : void 0, "data-done": es ? "" : void 0, children: [(0, t.jsx)("label", { htmlFor: `${M2}-email`, className: j().srOnly, children: "Email address" }), (0, t.jsx)("input", { ref: Z, id: `${M2}-email`, className: j().input, type: "email", name: "email", inputMode: "email", autoComplete: "email", enterKeyHint: "send", autoCapitalize: "off", spellCheck: false, placeholder: n2, value: O2, readOnly: "idle" !== V, "aria-invalid": E2?.kind === "invalid" || void 0, "aria-describedby": er, onBlur: () => {
      O2.trim() && !H2 && "idle" === V && (D2(true), Y2(F(O2)));
    }, onChange: (e3) => {
      R2(e3.target.value), H2 ? Y2(F(e3.target.value)) : E2 && Y2(null);
    } }), (0, t.jsx)(l.PY1.button, { type: es ? "button" : "submit", className: j().submit, "data-state": el, "aria-busy": en || void 0, "aria-disabled": en || es || void 0, tabIndex: es ? -1 : void 0, whileTap: { scale: I2 || en || es ? 1 : 0.97 }, transition: p.T.spring.snappy, children: (0, t.jsxs)("span", { className: j().labels, children: [Object.keys(eo).map((e3) => (0, t.jsx)("span", { className: j().sizer, "aria-hidden": "true", children: "done" === e3 ? (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("span", { className: j().check }), "Subscribed"] }) : eo[e3] }, e3)), (0, t.jsx)(r.N, { initial: false, mode: "popLayout", children: (0, t.jsx)(l.PY1.span, { className: j().label, initial: I2 ? z : A, animate: $, exit: I2 ? L : C, transition: { duration: I2 ? p.T.duration.instant : p.T.duration.standard, ease: x }, children: eo[el] }, el) })] }) })] }), (0, t.jsxs)("div", { className: j().message, children: [eu.map((e3, i3) => (0, t.jsx)("p", { className: `${j().note} ${j().sizer}`, "aria-hidden": "true", children: e3 }, i3)), (0, t.jsx)(P, { id: E2 ? `problem-${E2.text}` : es ? "done" : "note", reduced: I2, className: j().messageLive, live: "polite", children: (0, t.jsx)("p", { id: er, className: j().note, "data-tone": E2 ? "error" : es ? "success" : void 0, role: E2 ? "alert" : void 0, children: E2?.text ?? (es ? (0, t.jsxs)(t.Fragment, { children: [ed, (0, t.jsxs)("span", { className: j().srOnly, children: [" The link went to ", U, "."] }), " ", (0, t.jsx)("button", { ref: K, type: "button", className: j().textButton, onClick: function() {
      R2(""), Y2(null), D2(false), X.current = true, G("idle");
    }, children: "Use a different email" })] }) : ec) }) })] })] }), em = [j().newsletter, v2].filter(Boolean).join(" ");
    return "card" === e2 ? (0, t.jsx)("section", { ref: S2, className: em, "data-variant": "card", "aria-labelledby": `${M2}-title`, children: (0, t.jsx)("div", { className: j().cardShell, children: (0, t.jsxs)("div", { className: j().card, children: [w2 && (0, t.jsx)("div", { className: j().tray, children: (0, t.jsx)(W, { publication: w2, delivered: es, to: U, reduced: I2, compact: true }) }), (0, t.jsxs)("div", { className: j().cardBody, children: [(0, t.jsx)("h2", { id: `${M2}-title`, className: j().cardTitle, children: i2 ?? ei.title }), (0, t.jsx)("p", { className: j().description, children: a2 ?? ei.description }), eh, g2 && (0, t.jsx)(B, { readers: g2, done: es, reduced: I2 })] })] }) }) }) : (0, t.jsx)("section", { ref: S2, className: em, "data-variant": "inline", "data-aside": w2 || g2 ? "" : void 0, "aria-labelledby": `${M2}-title`, children: (0, t.jsxs)("div", { className: j().inline, children: [(0, t.jsxs)("div", { className: j().intro, children: [(0, t.jsx)("h2", { id: `${M2}-title`, className: j().title, children: i2 ?? ei.title }), (0, t.jsx)("p", { className: j().description, children: a2 ?? ei.description }), eh] }), (w2 || g2) && (0, t.jsxs)("div", { className: j().aside, children: [w2 && (0, t.jsx)(W, { publication: w2, delivered: es, to: U, reduced: I2 }), g2 && (0, t.jsx)(B, { readers: g2, done: es, reduced: I2 })] })] }) });
  });
  E.displayName = "NewsletterSignup";
  let Y = [{ value: "inline", label: "Inline" }, { value: "card", label: "Card" }];
  function H() {
    let [e2, i2] = (0, s.useState)("inline"), [a2, n2] = (0, s.useState)(false), r2 = (0, s.useId)();
    return (0, t.jsxs)("div", { className: j().preview, children: [(0, t.jsxs)("div", { className: j().controls, children: [(0, t.jsx)(h.A, { label: "Newsletter layout", options: Y, value: e2, onValueChange: (e3) => i2(e3) }), (0, t.jsxs)("div", { className: j().simulate, children: [(0, t.jsx)(m.d, { id: r2, checked: a2, onCheckedChange: n2 }), (0, t.jsx)("label", { htmlFor: r2, children: "Fail the next send" })] })] }), (0, t.jsx)("div", { className: j().frame, children: (0, t.jsx)(E, { variant: e2, onSubscribe: () => new Promise((e3, i3) => setTimeout(() => a2 ? i3(Error("Simulated failure")) : e3(), 1100)) }, e2) }), (0, t.jsx)("p", { className: j().caption, children: "Subscribing is simulated in this preview. Nothing is sent." })] });
  }
  let D = H;
}

__m(__module,__exports,__require);
}