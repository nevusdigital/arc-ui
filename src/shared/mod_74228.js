function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SiteFooter: () => N, SiteFooterBlock: () => w, default: () => S, siteFooterExampleColumns: () => f });
  var i = a(95155), s = a(12115), n = a(18310), l = a(80642), r = a(25354), o = a(9751), d = a(64577), c = a(51288), u = a(66558), m = a(7770), _ = a(78596), p = a.n(_);
  let b = [...m.T.ease.enter], f = [{ title: "Product", links: [{ label: "Components" }, { label: "Blocks" }, { label: "Templates" }, { label: "Pricing" }] }, { title: "Resources", links: [{ label: "Documentation" }, { label: "Changelog" }, { label: "Guides" }, { label: "Figma kit", external: true }] }, { title: "Company", links: [{ label: "About" }, { label: "Customers" }, { label: "Careers" }, { label: "Contact" }] }], h = [{ label: "Privacy" }, { label: "Terms" }, { label: "Licenses" }], x = [{ label: "X", external: true }, { label: "GitHub", external: true }, { label: "LinkedIn", external: true }], y = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function j({ link: e2, onNavigate: t2, className: a2 }) {
    let s2 = (0, i.jsxs)(i.Fragment, { children: [e2.label, e2.external && (0, i.jsx)(o.A, { className: p().external, size: 13, strokeWidth: 2, "aria-hidden": "true" })] }), n2 = () => t2?.(e2);
    return e2.href ? (0, i.jsx)("a", { className: a2 ?? p().link, href: e2.href, onClick: n2, ...e2.external ? { target: "_blank", rel: "noopener noreferrer" } : {}, children: s2 }) : (0, i.jsx)("button", { type: "button", className: a2 ?? p().link, onClick: n2, children: s2 });
  }
  function g({ className: e2 }) {
    return (0, i.jsxs)("svg", { className: e2, viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: "5.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [(0, i.jsx)("path", { d: "M9 48V29C9 15 19 7 32 7s23 8 23 22v19" }), (0, i.jsx)("path", { d: "M20 48V31c0-8 5-13 12-13s12 5 12 13v17" }), (0, i.jsx)("path", { d: "M32 38v10" })] });
  }
  function v({ title: e2, description: t2, placeholder: a2 = "you@example.com", onSubscribe: o2 }) {
    let u2 = (0, s.useId)(), _2 = !!(0, n.I)(), [f2, h2] = (0, s.useState)(""), [x2, j2] = (0, s.useState)("idle"), [g2, N2] = (0, s.useState)(null), [k2, w2] = (0, s.useState)(false), S2 = (e3) => e3.trim() ? y.test(e3.trim()) ? null : "That email doesn't look right" : "Enter your email address";
    async function C(e3) {
      if (e3.preventDefault(), "idle" !== x2) return;
      w2(true);
      let t3 = S2(f2);
      if (N2(t3), !t3) {
        j2("loading");
        try {
          await (o2 ? o2(f2.trim()) : new Promise((e4) => setTimeout(e4, 900))), j2("done");
        } catch {
          j2("idle"), N2("We couldn't subscribe you. Try again in a moment");
        }
      }
    }
    let T = "done" === x2 ? `Check ${f2.trim()} to confirm` : g2 ?? t2, R = "done" === x2 ? "success" : g2 ? "error" : "hint";
    return (0, i.jsxs)("form", { className: p().newsletter, onSubmit: C, noValidate: true, "aria-labelledby": e2 ? `${u2}-title` : void 0, children: [e2 && (0, i.jsx)("h2", { id: `${u2}-title`, className: p().newsletterTitle, children: e2 }), (0, i.jsxs)("div", { className: p().newsletterRow, "data-invalid": g2 ? "" : void 0, "data-done": "done" === x2 ? "" : void 0, children: [(0, i.jsx)("label", { className: p().srOnly, htmlFor: `${u2}-email`, children: "Email address" }), (0, i.jsx)("input", { id: `${u2}-email`, className: p().newsletterInput, type: "email", inputMode: "email", autoComplete: "email", placeholder: a2, value: f2, readOnly: "idle" !== x2, "aria-invalid": !!g2 || void 0, "aria-describedby": `${u2}-message`, onChange: (e3) => {
      h2(e3.target.value), k2 && N2(S2(e3.target.value));
    }, onBlur: () => {
      f2 && (w2(true), N2(S2(f2)));
    } }), (0, i.jsx)(c.$, { type: "submit", size: "sm", variant: "primary", loading: "loading" === x2, className: p().newsletterButton, "aria-disabled": "done" === x2 || void 0, children: "done" === x2 ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(d.A, { size: 15, strokeWidth: 2.25, "aria-hidden": "true" }), "Subscribed"] }) : "Subscribe" })] }), (0, i.jsx)("div", { className: p().messageSlot, id: `${u2}-message`, "aria-live": "polite", children: (0, i.jsx)(l.N, { initial: false, mode: "popLayout", children: T && (0, i.jsx)(r.PY1.p, { className: p().message, "data-tone": R, role: "error" === R ? "alert" : void 0, initial: _2 ? { opacity: 0 } : { opacity: 0, y: 4, filter: `blur(${m.T.blur.subtle}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: _2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -4, filter: `blur(${m.T.blur.subtle}px)`, transition: { duration: m.T.duration.instant } }, transition: { duration: _2 ? 0 : m.T.duration.standard, ease: b }, children: T }, T) }) })] });
  }
  let N = (0, s.forwardRef)(function({ variant: e2 = "columns", brand: t2 = { name: "Arc" }, tagline: a2 = "Interface components that move with intent.", columns: l2 = f, links: o2, legal: d2 = h, socials: c2 = x, newsletter: u2 = { title: "Get the monthly release notes", description: "One email a month. Unsubscribe anytime." }, status: m2 = { label: "All systems normal", tone: "success" }, year: _2 = (/* @__PURE__ */ new Date()).getFullYear(), onNavigate: y2, className: N2 }, k2) {
    let w2 = !!(0, n.I)(), S2 = (0, s.useId)().replace(/:/g, ""), C = (0, i.jsx)(j, { link: { label: t2.name, href: t2.href }, onNavigate: y2, className: p().brand }), T = (0, i.jsxs)("span", { className: p().brandRow, children: [t2.mark ?? (0, i.jsx)(g, { className: p().brandMark }), C] }), R = m2 && (m2.href ? (0, i.jsxs)("a", { className: p().status, href: m2.href, "data-tone": m2.tone ?? "success", onClick: () => y2?.({ label: m2.label, href: m2.href }), children: [(0, i.jsx)("span", { className: p().statusDot, "aria-hidden": "true" }), m2.label] }) : (0, i.jsxs)("button", { type: "button", className: p().status, "data-tone": m2.tone ?? "success", onClick: () => y2?.({ label: m2.label }), children: [(0, i.jsx)("span", { className: p().statusDot, "aria-hidden": "true" }), m2.label] })), M = c2.length > 0 && (0, i.jsx)("ul", { className: p().inline, "aria-label": "Social", children: c2.map((e3) => (0, i.jsx)("li", { children: (0, i.jsx)(j, { link: e3, onNavigate: y2 }) }, e3.label)) }), B = (0, i.jsxs)("div", { className: p().bottom, children: [(0, i.jsxs)("div", { className: p().bottomStart, children: [(0, i.jsxs)("span", { className: p().copyright, children: ["\xA9 ", _2, " ", t2.name] }), d2.length > 0 && (0, i.jsx)("ul", { className: p().inline, "aria-label": "Legal", children: d2.map((e3) => (0, i.jsx)("li", { children: (0, i.jsx)(j, { link: e3, onNavigate: y2 }) }, e3.label)) })] }), (0, i.jsxs)("div", { className: p().bottomEnd, children: [R, M] })] }), E = (0, i.jsx)("nav", { className: p().columns, "aria-label": "Footer", children: l2.map((e3) => (0, i.jsxs)("div", { className: p().column, children: [(0, i.jsx)("h2", { children: e3.title }), (0, i.jsx)("ul", { children: e3.links.map((e4) => (0, i.jsx)("li", { children: (0, i.jsx)(j, { link: e4, onNavigate: y2 }) }, e4.label)) })] }, e3.title)) });
    if ("minimal" === e2) {
      let e3 = o2 ?? l2.map((e4) => e4.links[0]).filter((e4) => !!e4).concat(d2.slice(0, 2));
      return (0, i.jsxs)("footer", { ref: k2, className: [p().footer, p().minimal, N2].filter(Boolean).join(" "), children: [(0, i.jsxs)("div", { className: p().minimalRow, children: [T, (0, i.jsx)("nav", { "aria-label": "Footer", children: (0, i.jsx)("ul", { className: p().inline, children: e3.map((e4) => (0, i.jsx)("li", { children: (0, i.jsx)(j, { link: e4, onNavigate: y2 }) }, e4.label)) }) })] }), (0, i.jsxs)("div", { className: p().minimalRow, children: [(0, i.jsxs)("span", { className: p().copyright, children: ["\xA9 ", _2, " ", t2.name, ". ", a2] }), (0, i.jsxs)("div", { className: p().bottomEnd, children: [R, M] })] })] });
    }
    return (0, i.jsxs)("footer", { ref: k2, className: [p().footer, "logo" === e2 ? p().logo : "", N2].filter(Boolean).join(" "), children: [(0, i.jsxs)("div", { className: p().top, children: [(0, i.jsxs)("div", { className: p().intro, children: [T, a2 && (0, i.jsx)("p", { className: p().tagline, children: a2 }), u2 && "columns" === e2 && (0, i.jsx)(v, { ...u2 })] }), E] }), B, "logo" === e2 && (0, i.jsx)(r.PY1.div, { className: p().markStage, "aria-hidden": "true", initial: !w2 && { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.9 * !w2, ease: b }, children: (0, i.jsxs)("svg", { className: p().bigMark, viewBox: "0 3.5 64 30", fill: "none", strokeWidth: "3.4", strokeLinecap: "round", strokeLinejoin: "round", preserveAspectRatio: "xMidYMin meet", children: [(0, i.jsx)("defs", { children: (0, i.jsxs)("linearGradient", { id: S2, x1: "0", y1: "0", x2: "1", y2: "0", children: [(0, i.jsx)("stop", { offset: "0", style: { stopColor: "var(--arc-gradient-from)" } }), (0, i.jsx)("stop", { offset: "1", style: { stopColor: "var(--arc-gradient-to)" } })] }) }), (0, i.jsxs)("g", { stroke: `url(#${S2})`, children: [(0, i.jsx)("path", { d: "M9 48V29C9 15 19 7 32 7s23 8 23 22v19" }), (0, i.jsx)("path", { d: "M20 48V31c0-8 5-13 12-13s12 5 12 13v17" }), (0, i.jsx)("path", { d: "M32 38v10" })] })] }) })] });
  });
  N.displayName = "SiteFooter";
  let k = [{ value: "columns", label: "Columns" }, { value: "minimal", label: "Minimal" }, { value: "logo", label: "Logo" }];
  function w({ variant: e2 = "columns" }) {
    let [t2, a2] = (0, s.useState)(e2), [l2, o2] = (0, s.useState)(null), d2 = !!(0, n.I)(), c2 = (0, s.useRef)(null), [_2, f2] = (0, s.useState)(null);
    return (0, s.useLayoutEffect)(() => {
      let e3 = c2.current;
      if (!e3 || (f2(e3.offsetHeight), "u" < typeof ResizeObserver)) return;
      let t3 = new ResizeObserver(() => f2(e3.offsetHeight));
      return t3.observe(e3), () => t3.disconnect();
    }, [t2]), (0, i.jsxs)("div", { className: p().preview, children: [(0, i.jsx)(u.A, { label: "Footer layout", options: k, value: t2, onValueChange: (e3) => a2(e3) }), (0, i.jsx)("div", { className: p().frame, children: (0, i.jsx)(r.PY1.div, { className: p().frameBody, initial: false, animate: { height: _2 ?? "auto" }, transition: d2 ? { duration: 0 } : m.T.spring.smooth, children: (0, i.jsx)(r.PY1.div, { ref: c2, initial: !d2 && { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: m.T.duration.standard, ease: b }, children: (0, i.jsx)(N, { variant: t2, onNavigate: (e3) => o2(e3.label) }) }, t2) }) }), (0, i.jsx)("p", { className: p().srOnly, "aria-live": "polite", children: l2 ? `Opened ${l2}` : "" })] });
  }
  let S = w;
}

__m(__module,__exports,__require);
}