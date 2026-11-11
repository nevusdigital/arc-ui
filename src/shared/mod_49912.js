function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ContactSection: () => H, ContactSectionBlock: () => q, contactExampleChannels: () => B, contactExampleOffices: () => D, default: () => Z });
  var i = a(95155), n = a(12115), s = a(79196), r = a(25354), o = a(30464), l = a(80642), c = a(57700), d = a(18310), u = a(64577), h = a(24551), m = a(75796), p = a(16369), f = a(57465), g = a(6923), y = a(92218), _ = a(51288), x = a(73474), b = a(35978), j = a(66558), v = a(87796), w = a(7770), k = a(67752), N = a(99984), T = a.n(N);
  let C = [...w.T.ease.enter], S = [...w.T.ease.standard], A = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, $ = { hidden: ({ direction: e2, axis: t2 }) => ({ opacity: 0, x: "x" === t2 ? 18 * e2 : 0, y: "y" === t2 ? 18 * e2 : 0, filter: `blur(${w.T.blur.soft}px)` }), shown: { opacity: 1, x: 0, y: 0, filter: "blur(0px)", transition: { x: w.T.spring.smooth, y: w.T.spring.smooth, opacity: { duration: w.T.duration.standard, ease: C, delay: 0.04 }, filter: { duration: w.T.duration.standard, ease: C, delay: 0.04 } } }, gone: ({ direction: e2, axis: t2 }) => ({ opacity: 0, x: "x" === t2 ? -12 * e2 : 0, y: "y" === t2 ? -12 * e2 : 0, filter: `blur(${w.T.blur.soft}px)`, transition: { duration: w.T.duration.fast, ease: S } }) }, R = { hidden: { opacity: 0 }, shown: { opacity: 1, transition: { duration: w.T.duration.fast } }, gone: { opacity: 0, transition: { duration: w.T.duration.instant } } };
  function P({ children: e2, custom: t2, reduced: a2, className: n2 }) {
    let o2 = (0, s.tF)();
    return (0, i.jsx)(r.PY1.div, { className: n2, "data-face": "", "data-leaving": o2 ? void 0 : "", inert: !o2, custom: t2, variants: a2 ? R : $, initial: "hidden", animate: "shown", exit: "gone", children: e2 });
  }
  function E({ faceKey: e2, direction: t2 = 1, axis: a2 = "y", reduced: s2, className: r2, children: c2, ...d2 }) {
    let [u2, h2] = (0, o.l)(), m2 = (0, n.useRef)(e2), p2 = (0, n.useRef)(0);
    return (0, n.useEffect)(() => {
      let e3 = u2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      p2.current = e3.offsetHeight;
      let t3 = new ResizeObserver(() => {
        p2.current = e3.offsetHeight;
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [u2]), (0, n.useLayoutEffect)(() => {
      if (m2.current === e2) return;
      m2.current = e2;
      let t3 = u2.current, a3 = t3?.querySelector(":scope > [data-face]:not([data-leaving])");
      if (!t3 || !a3 || s2) return;
      let i2 = p2.current || t3.offsetHeight, n2 = a3.offsetHeight;
      if (1 > Math.abs(i2 - n2)) return;
      t3.style.setProperty("height", `${i2}px`);
      let r3 = h2(t3, { height: [i2, n2] }, w.T.spring.smooth);
      return r3.then(() => t3.style.removeProperty("height")), () => {
        r3.stop(), t3.style.removeProperty("height");
      };
    }, [e2, h2, u2, s2]), (0, i.jsx)("div", { ref: u2, className: [T().morph, r2].filter(Boolean).join(" "), ...d2, children: (0, i.jsx)(l.N, { initial: false, mode: "popLayout", custom: { direction: t2, axis: a2 }, children: (0, i.jsx)(P, { custom: { direction: t2, axis: a2 }, reduced: s2, className: T().face, children: c2 }, e2) }) });
  }
  function L({ topics: e2, value: t2, onChange: a2, reduced: s2 }) {
    let o2 = (0, n.useId)(), l2 = (0, n.useRef)([]);
    return (0, i.jsxs)("div", { className: T().topicField, children: [(0, i.jsx)("span", { id: `${o2}-label`, className: T().fieldLabel, children: "Topic" }), (0, i.jsx)(c.o, { id: o2, children: (0, i.jsx)("div", { className: T().topics, role: "radiogroup", "aria-labelledby": `${o2}-label`, onKeyDown: function(i2) {
      let n2 = "ArrowRight" === i2.key || "ArrowDown" === i2.key ? 1 : "ArrowLeft" === i2.key || "ArrowUp" === i2.key ? -1 : 0;
      if (!n2) return;
      i2.preventDefault();
      let s3 = (e2.indexOf(t2) + n2 + e2.length) % e2.length;
      a2(e2[s3]), l2.current[s3]?.focus();
    }, children: e2.map((e3, n2) => (0, i.jsxs)("button", { ref: (e4) => {
      l2.current[n2] = e4;
    }, type: "button", role: "radio", "aria-checked": e3 === t2, tabIndex: e3 === t2 ? 0 : -1, className: T().topic, onClick: () => a2(e3), children: [e3 === t2 && (0, i.jsx)(r.PY1.span, { layoutId: "topic", className: T().topicHighlight, transition: s2 ? { duration: 0 } : w.T.spring.morph, "aria-hidden": "true" }), (0, i.jsx)("span", { children: e3 })] }, e3)) }) })] });
  }
  function O(e2) {
    let t2 = {};
    return e2.name.trim() || (t2.name = "Enter your name"), e2.email.trim() ? A.test(e2.email.trim()) || (t2.email = "Enter an email like name@example.com") : t2.email = "Enter your email address", e2.message.trim().length < 20 && (t2.message = e2.message.trim() ? "Add a little more detail, at least 20 characters" : "Tell us how we can help"), t2;
  }
  function z({ topics: e2, onSubmit: t2, reduced: a2 }) {
    let [s2, o2] = (0, n.useState)({ name: "", email: "", message: "" }), [c2, d2] = (0, n.useState)(e2[0] ?? ""), [u2, h2] = (0, n.useState)({}), [m2, p2] = (0, n.useState)(false), [f2, g2] = (0, n.useState)("editing"), [y2, x2] = (0, n.useState)(null), [j2, k2] = (0, n.useState)({ name: "", email: "" }), N2 = (0, n.useRef)(null), A2 = (0, n.useRef)(null), $2 = (0, n.useRef)(null), R2 = (0, n.useRef)(false), P2 = (0, n.useRef)(null);
    (0, n.useEffect)(() => {
      "sent" === f2 && P2.current?.focus(), "editing" === f2 && R2.current && (R2.current = false, N2.current?.focus());
    }, [f2]);
    let F2 = (e3) => (t3) => {
      let a3 = { ...s2, [e3]: t3.target.value };
      o2(a3), m2 && h2(O(a3));
    };
    async function I2(e3) {
      if (e3.preventDefault(), "editing" !== f2) return;
      p2(true), x2(null);
      let a3 = O(s2);
      if (h2(a3), a3.name) return void N2.current?.focus();
      if (a3.email) return void A2.current?.focus();
      if (a3.message) return void $2.current?.focus();
      g2("sending");
      let i2 = { name: s2.name.trim(), email: s2.email.trim(), topic: c2, message: s2.message.trim() };
      try {
        await (t2 ? t2(i2) : new Promise((e4) => setTimeout(e4, 1100))), k2({ name: i2.name.split(/\s+/)[0], email: i2.email }), g2("sent");
      } catch {
        g2("editing"), x2("We couldn't send your message. Check your connection and try again.");
      }
    }
    let W2 = 500 - s2.message.length;
    return (0, i.jsx)(E, { faceKey: "sent" === f2 ? "sent" : "form", direction: "sent" === f2 ? 1 : -1, reduced: a2, className: T().formCard, children: "sent" === f2 ? (0, i.jsxs)("div", { className: T().success, "aria-live": "polite", children: [(0, i.jsx)("span", { className: T().successMark, "aria-hidden": "true", children: (0, i.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: (0, i.jsx)(r.PY1.path, { d: "M5 12.5l4.5 4.5L19 7.5", initial: !a2 && { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.42 * !a2, ease: C, delay: 0.16 } }) }) }), (0, i.jsxs)("h3", { ref: P2, tabIndex: -1, className: T().successTitle, children: ["Thanks, ", j2.name] }), (0, i.jsxs)("p", { className: T().successText, children: ["Your message is with our ", c2.toLowerCase(), " team. We\u2019ll reply to ", j2.email, " within one business day."] }), (0, i.jsx)(_.$, { variant: "secondary", onClick: function() {
      o2({ name: "", email: "", message: "" }), h2({}), p2(false), x2(null), R2.current = true, g2("editing");
    }, children: "Send another message" })] }) : (0, i.jsxs)("form", { className: T().formBody, onSubmit: I2, noValidate: true, "aria-label": "Contact form", children: [(0, i.jsxs)("div", { className: T().row, children: [(0, i.jsx)(b.p, { ref: N2, label: "Name", name: "name", autoComplete: "name", placeholder: "Emma Collins", value: s2.name, onChange: F2("name"), error: u2.name, readOnly: "sending" === f2 }), (0, i.jsx)(b.p, { ref: A2, label: "Work email", name: "email", type: "email", inputMode: "email", autoComplete: "email", placeholder: "emma@northwind.example", value: s2.email, onChange: F2("email"), error: u2.email, readOnly: "sending" === f2 })] }), (0, i.jsx)(L, { topics: e2, value: c2, onChange: d2, reduced: a2 }), (0, i.jsx)(v.T, { ref: $2, label: "Message", name: "message", rows: 4, maxLength: 500, placeholder: "What are you building?", value: s2.message, onChange: F2("message"), error: u2.message, description: `${W2} characters left`, readOnly: "sending" === f2 }), (0, i.jsx)(l.N, { initial: false, children: y2 && (0, i.jsx)(r.PY1.p, { role: "alert", className: T().failure, initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: a2 ? { duration: 0 } : { height: w.T.spring.smooth, opacity: { duration: w.T.duration.fast, ease: S } }, children: y2 }, "failure") }), (0, i.jsxs)("div", { className: T().submitRow, children: [(0, i.jsx)("p", { className: T().fine, children: "We reply within one business day." }), (0, i.jsx)(_.$, { type: "submit", variant: "primary", loading: "sending" === f2, children: "Send message" })] })] }) });
  }
  let F = (0, k.MV)("hannah-walsh"), I = { size: 18, strokeWidth: 1.75, "aria-hidden": true };
  function W({ idle: e2, busy: t2, done: a2, note: s2 }) {
    let o2 = !!(0, d.I)(), [c2, h2] = (0, n.useState)("idle"), m2 = (0, n.useRef)(void 0);
    return (0, n.useEffect)(() => () => window.clearTimeout(m2.current), []), (0, i.jsxs)("div", { className: T().confirm, children: [(0, i.jsx)(_.$, { variant: "done" === c2 ? "secondary" : "primary", loading: "busy" === c2, onClick: () => {
      "idle" !== c2 ? h2("idle") : t2 ? (h2("busy"), m2.current = window.setTimeout(() => h2("done"), 800)) : h2("done");
    }, children: "done" === c2 ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(u.A, { size: 15, strokeWidth: 2.25, "aria-hidden": "true" }), a2] }) : e2 }), (0, i.jsx)("div", { "aria-live": "polite", children: (0, i.jsx)(l.N, { initial: false, children: "done" === c2 && s2 && (0, i.jsx)(r.PY1.div, { className: T().confirmNote, initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: o2 ? { duration: 0 } : { height: w.T.spring.smooth, opacity: { duration: w.T.duration.fast, ease: S } }, children: s2 }, "note") }) })] });
  }
  let B = [{ value: "chat", label: "Chat with support", meta: "Replies in about 4 minutes", icon: (0, i.jsx)(h.A, { ...I }), detail: (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("h3", { children: "Chat with support" }), (0, i.jsx)("p", { children: "Hannah and Jordan are online now. Chat is best for quick questions about installing, theming, or a component that misbehaves." }), (0, i.jsx)(W, { idle: "Start a chat", busy: true, done: "Chat started", note: (0, i.jsxs)("span", { className: T().agent, children: [(0, i.jsx)(y.e, { name: F.name, src: F.src, size: "sm", status: "online" }), (0, i.jsxs)("span", { children: [(0, i.jsx)("strong", { children: F.name }), " joined the chat. Say hello."] })] }) })] }) }, { value: "email", label: "Email support", meta: "Replies within a business day", icon: (0, i.jsx)(m.A, { ...I }), detail: (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("h3", { children: "Email support" }), (0, i.jsx)("p", { children: "Send screenshots, links, or a reproduction. Every message gets a reply from a person within one business day." }), (0, i.jsxs)("div", { className: T().copyRow, children: [(0, i.jsx)("span", { children: "support@example.com" }), (0, i.jsx)(x.CopyButton, { value: "support@example.com", label: "Copy email" })] })] }) }, { value: "sales", label: "Talk to sales", meta: "Weekdays, 9am to 6pm PT", icon: (0, i.jsx)(p.A, { ...I }), detail: (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("h3", { children: "Talk to sales" }), (0, i.jsx)("p", { children: "Licensing for a larger team, invoicing, or a security review. Tyler will walk you through it on a 20 minute call." }), (0, i.jsxs)("div", { className: T().copyRow, children: [(0, i.jsx)("span", { className: T().tabular, children: "+1 (415) 555-0132" }), (0, i.jsx)(x.CopyButton, { value: "+14155550132", label: "Copy number" })] }), (0, i.jsx)(W, { idle: "Request a call", busy: true, done: "Call requested", note: "Tyler will email you a few times that work this week." })] }) }, { value: "community", label: "Ask the community", meta: "4,200 members", icon: (0, i.jsx)(f.A, { ...I }), detail: (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("h3", { children: "Ask the community" }), (0, i.jsx)("p", { children: "Designers and engineers who ship with Arc answer questions about components, theming, and motion, usually within the hour." }), (0, i.jsx)(W, { idle: "Open the forum", done: "Forum opened", note: "The forum opens in a new tab on the live site." })] }) }], D = [{ city: "San Francisco", timeZone: "America/Los_Angeles", address: ["100 Example Street, Floor 4", "San Francisco, CA 94000"], email: "sf@example.com" }, { city: "New York", timeZone: "America/New_York", address: ["200 Sample Avenue, Suite 12", "New York, NY 10000"], email: "nyc@example.com" }, { city: "Lisbon", timeZone: "Europe/Lisbon", address: ["Rua do Exemplo 10, 3\xBA", "1000-000 Lisboa, Portugal"], email: "lisbon@example.com" }];
  function Y({ offices: e2 }) {
    let t2 = (function() {
      let [e3, t3] = (0, n.useState)(null);
      return (0, n.useEffect)(() => {
        let e4 = () => t3(/* @__PURE__ */ new Date());
        e4();
        let a2 = window.setInterval(e4, 15e3);
        return () => window.clearInterval(a2);
      }, [15e3]), e3;
    })();
    return (0, i.jsx)("ul", { className: T().offices, children: e2.map((e3) => {
      let a2, { time: n2, open: s2 } = (function(e4, t3) {
        if (!t3) return { time: "--:--", open: null };
        let a3 = new Intl.DateTimeFormat("en-US", { timeZone: e4.timeZone, hour: "numeric", minute: "2-digit", weekday: "short", hourCycle: "h23" }).formatToParts(t3), i2 = (e5) => a3.find((t4) => t4.type === e5)?.value ?? "", n3 = Number(i2("hour")), s3 = i2("weekday"), [r2, o2] = e4.hours ?? [9, 18];
        return { time: new Intl.DateTimeFormat("en-US", { timeZone: e4.timeZone, hour: "numeric", minute: "2-digit" }).format(t3), open: "Sat" !== s3 && "Sun" !== s3 && n3 >= r2 && n3 < o2 };
      })(e3, t2);
      return (0, i.jsxs)("li", { className: T().office, children: [(0, i.jsxs)("div", { className: T().officeHead, children: [(0, i.jsx)("h3", { children: e3.city }), (0, i.jsxs)("span", { className: T().officeTime, children: [(0, i.jsx)(g.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), (0, i.jsx)("span", { className: T().tabular, children: n2 })] })] }), (0, i.jsxs)("span", { className: T().officeStatus, "data-open": null === s2 ? void 0 : s2 ? "" : void 0, "data-closed": false === s2 ? "" : void 0, children: [(0, i.jsx)("span", { className: T().statusDot, "aria-hidden": "true" }), null === s2 ? "Checking hours" : s2 ? `Open until ${a2 = (e3.hours ?? [9, 18])[1], `${a2 % 12 || 12}${a2 < 12 || 24 === a2 ? "am" : "pm"}`}` : "Closed now"] }), (0, i.jsx)("address", { className: T().address, children: e3.address.map((e4) => (0, i.jsx)("span", { children: e4 }, e4)) }), (0, i.jsxs)("div", { className: T().officeActions, children: [e3.email && (0, i.jsx)("a", { className: T().officeLink, href: `mailto:${e3.email}`, children: e3.email }), (0, i.jsx)(x.CopyButton, { value: e3.address.join(", "), label: "Copy address", variant: "plain" })] })] }, e3.city);
    }) });
  }
  function M({ channels: e2, value: t2, onChange: a2, reduced: s2 }) {
    let o2 = (0, n.useId)(), [l2, d2] = (0, n.useState)(1), u2 = (0, n.useRef)([]), h2 = e2.find((e3) => e3.value === t2) ?? e2[0], m2 = (t3) => {
      t3 !== h2.value && (d2(Math.sign(e2.findIndex((e3) => e3.value === t3) - e2.indexOf(h2)) || 1), a2(t3));
    };
    return (0, i.jsxs)("div", { className: T().channels, children: [(0, i.jsx)(c.o, { id: o2, children: (0, i.jsx)("div", { className: T().channelList, role: "tablist", "aria-orientation": "vertical", "aria-label": "Ways to reach us", onKeyDown: function(t3) {
      let a3 = "ArrowDown" === t3.key || "ArrowRight" === t3.key ? 1 : "ArrowUp" === t3.key || "ArrowLeft" === t3.key ? -1 : 0, i2 = "Home" === t3.key ? 0 : "End" === t3.key ? e2.length - 1 : -1;
      if (!a3 && i2 < 0) return;
      t3.preventDefault();
      let n2 = i2 >= 0 ? i2 : (e2.indexOf(h2) + a3 + e2.length) % e2.length;
      m2(e2[n2].value), u2.current[n2]?.focus();
    }, children: e2.map((e3, t3) => {
      let a3 = e3.value === h2.value;
      return (0, i.jsxs)("button", { ref: (e4) => {
        u2.current[t3] = e4;
      }, type: "button", role: "tab", id: `${o2}-tab-${e3.value}`, "aria-selected": a3, "aria-controls": `${o2}-panel`, tabIndex: a3 ? 0 : -1, className: T().channel, onClick: () => m2(e3.value), children: [a3 && (0, i.jsx)(r.PY1.span, { layoutId: "channel", className: T().channelHighlight, transition: s2 ? { duration: 0 } : w.T.spring.morph, "aria-hidden": "true" }), (0, i.jsx)("span", { className: T().channelIcon, children: e3.icon }), (0, i.jsxs)("span", { className: T().channelText, children: [(0, i.jsx)("span", { children: e3.label }), (0, i.jsx)("span", { children: e3.meta })] })] }, e3.value);
    }) }) }), (0, i.jsx)(E, { faceKey: h2.value, direction: l2, axis: "y", reduced: s2, className: T().channelPanel, id: `${o2}-panel`, role: "tabpanel", "aria-labelledby": `${o2}-tab-${h2.value}`, children: (0, i.jsx)("div", { className: T().channelDetail, children: h2.detail }) })] });
  }
  let H = (0, n.forwardRef)(function({ variant: e2 = "form", title: t2, description: a2, topics: s2 = ["Sales", "Support", "Partnerships", "Press"], onSubmit: r2, channels: o2 = B, channel: l2, defaultChannel: c2, onChannelChange: u2, offices: h2 = D, className: p2 }, f2) {
    let y2 = (0, n.useId)(), _2 = !!(0, d.I)(), [b2, j2] = (0, n.useState)(c2 ?? o2[0]?.value ?? ""), v2 = { form: { title: "Talk to our team", description: "Questions about licensing, a bug you can't pin down, or a component you wish existed. A person reads every message." }, channels: { title: "Get help your way", description: "Pick whatever suits the question. Every channel reaches the same small team." }, offices: { title: "Visit us", description: "We work across three time zones, so someone is usually awake. Drop by for coffee, just let us know first." } }[e2];
    return (0, i.jsx)("section", { ref: f2, className: [T().contact, p2].filter(Boolean).join(" "), "data-variant": e2, "aria-labelledby": `${y2}-title`, children: (0, i.jsxs)("div", { className: T().inner, children: [(0, i.jsxs)("div", { className: T().intro, children: [(0, i.jsx)("h2", { id: `${y2}-title`, className: T().title, children: t2 ?? v2.title }), (0, i.jsx)("p", { className: T().description, children: a2 ?? v2.description }), "form" === e2 && (0, i.jsxs)("ul", { className: T().facts, children: [(0, i.jsxs)("li", { children: [(0, i.jsx)(g.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Replies within one business day"] }), (0, i.jsxs)("li", { children: [(0, i.jsx)(m.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), (0, i.jsx)("span", { children: "hello@example.com" }), (0, i.jsx)(x.CopyButton, { value: "hello@example.com", label: "Copy email", iconOnly: true, variant: "plain" })] })] })] }), "form" === e2 && (0, i.jsx)(z, { topics: s2, onSubmit: r2, reduced: _2 }), "channels" === e2 && (0, i.jsx)(M, { channels: o2, value: l2 ?? b2, onChange: (e3) => {
      void 0 === l2 && j2(e3), u2?.(e3);
    }, reduced: _2 }), "offices" === e2 && (0, i.jsx)(Y, { offices: h2 })] }) });
  });
  H.displayName = "ContactSection";
  let V = [{ value: "form", label: "Form" }, { value: "channels", label: "Channels" }, { value: "offices", label: "Offices" }];
  function q({ variant: e2 = "form" }) {
    let [t2, a2] = (0, n.useState)(e2);
    return (0, i.jsxs)("div", { className: T().preview, children: [(0, i.jsx)(j.A, { label: "Contact layout", options: V, value: t2, onValueChange: (e3) => a2(e3) }), (0, i.jsx)("div", { className: T().frame, children: (0, i.jsx)(H, { variant: t2 }, t2) })] });
  }
  let Z = q;
}

__m(__module,__exports,__require);
}