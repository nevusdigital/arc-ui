/* login-split (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(1668, ".password-field_field__YmVr4{display:grid;min-width:0}.password-field_field__YmVr4 label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}.password-field_shell__Jn9yt{display:flex;min-height:var(--control-height-md);align-items:center;border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:0 calc((var(--control-height-md) - 2px - 30px) / 2) 0 var(--space-3);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.password-field_shell__Jn9yt:hover:not(:focus-within){border-color:var(--foreground)}}.password-field_shell__Jn9yt:focus-within{border-color:var(--foreground)}.password-field_shell__Jn9yt:has(.password-field_input__oFxHZ[aria-invalid=true]){border-color:var(--danger)}.password-field_input__oFxHZ{width:100%;min-width:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:var(--leading-body);outline:0}.password-field_input__oFxHZ::placeholder{color:var(--text-muted)}.password-field_input__oFxHZ[data-reveal=shown]{animation:password-field_resolve-shown__rImNi var(--duration-standard) var(--ease-enter)}.password-field_input__oFxHZ[data-reveal=hidden]{animation:password-field_resolve-hidden__Gl28Q var(--duration-standard) var(--ease-enter)}@keyframes password-field_resolve-shown__rImNi{0%{opacity:.35;filter:blur(2px)}}@keyframes password-field_resolve-hidden__Gl28Q{0%{opacity:.35;filter:blur(2px)}}.password-field_shell__Jn9yt button{display:grid;width:30px;height:30px;flex:0 0 auto;place-items:center;border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}@media (hover:hover) and (pointer:fine){.password-field_shell__Jn9yt button:hover{background:var(--surface-muted);color:var(--foreground)}}.password-field_shell__Jn9yt button:active{transform:scale(.96);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform .1s var(--ease-standard)}.password-field_shell__Jn9yt button[aria-pressed=true]{color:var(--foreground)}.password-field_messageSlot__xMwqs{display:block;overflow:hidden}.password-field_hint__DMc0w{display:block;padding-top:var(--space-2);color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}.password-field_words__CjuNB{position:relative;display:block}.password-field_word__00TzP{display:inline-block;white-space:pre}.password-field_srOnly__bxC4N{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (prefers-reduced-motion:reduce){.password-field_shell__Jn9yt,.password-field_shell__Jn9yt button{transition:none}}@media (prefers-reduced-motion:reduce){.password-field_shell__Jn9yt button:active{transform:none}}@media (prefers-reduced-motion:reduce){.password-field_input__oFxHZ[data-reveal]{animation:none}}", {"field":"password-field_field__YmVr4","shell":"password-field_shell__Jn9yt","input":"password-field_input__oFxHZ","resolve-shown":"password-field_resolve-shown__rImNi","resolve-hidden":"password-field_resolve-hidden__Gl28Q","messageSlot":"password-field_messageSlot__xMwqs","hint":"password-field_hint__DMc0w","words":"password-field_words__CjuNB","word":"password-field_word__00TzP","srOnly":"password-field_srOnly__bxC4N"});
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.regCss(17988, ".root{container:login-split/inline-size;position:relative;width:100%;min-width:0;min-height:640px;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--background);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.root[data-full-screen]{min-height:100dvh;border:0;border-radius:0}\n.root[data-full-screen] .formSide{min-height:100dvh}\n.formSide,.root[data-full-screen] .formSide{min-height:0}\n.layout{display:grid;min-height:inherit;grid-template-columns:minmax(0,1fr)}\n@container login-split (min-width: 760px){.layout{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}\n@container login-split (min-width: 1100px){.layout{grid-template-columns:minmax(0,5fr) minmax(0,6fr)}\n.formSide{display:grid;min-width:0;min-height:600px;grid-template-rows:auto 1fr auto}\n.topBar{display:flex;align-items:center;justify-content:space-between;gap:var(--space-4);padding:var(--space-5) var(--space-5) 0}\n@container login-split (min-width: 480px){.topBar{padding:var(--space-6) var(--space-8) 0}\n.brand{display:inline-flex;align-items:center;gap:var(--space-2);font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:1}\n.brand svg{flex:none;color:var(--accent)}\n.signUp{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body);white-space:nowrap}\n.signUp .textLink{color:var(--foreground);font-weight:500}\n.notice .textLink{position:relative;color:var(--foreground);font-weight:500}\n.notice .textLink[aria-disabled=true]{color:var(--text-muted);font-weight:400;cursor:default}\n.textLink{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-decoration-color:transparent;text-underline-offset:3px;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),text-decoration-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.textLink:hover:not([aria-disabled=true]){color:var(--foreground);text-decoration-color:currentColor}\n@media (prefers-reduced-motion:reduce){.chip,.forgot,.textLink{transition:none}\n.main{display:grid;min-width:0;align-content:center;justify-items:center;padding:var(--space-10) var(--space-5)}\n.viewport{width:calc(100% + var(--space-6));max-width:calc(22.5rem + var(--space-6));margin-inline:calc(var(--space-3) * -1);overflow:hidden}\n.track{position:relative}\n.step{display:grid;min-width:0;padding:var(--space-2) var(--space-3)}\n.heading{display:grid;justify-items:start;gap:var(--space-2);margin-bottom:var(--space-6)}\n.heading :is(h1,h2){margin:0;font-family:var(--font-display);font-size:var(--text-3xl);font-weight:400;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n.heading p{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body);text-wrap:pretty}\n.swapLine{position:relative;justify-self:stretch}\n.swapText{display:block}\n.form{display:grid;gap:var(--space-4)}\n.wide{width:100%}\n.providerMark{flex:none}\n.divider{display:flex;align-items:center;gap:var(--space-3);margin:var(--space-5) 0;color:var(--text-muted);font-size:var(--text-xs);line-height:1}\n.divider:after,.divider:before{flex:1;height:1px;background:var(--border);content:\"\"}\n.providers{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--space-2)}\n.providers .providerButton{min-width:0;padding-inline:var(--space-2)}\n.chip{display:inline-flex;max-width:100%;min-height:var(--control-height-sm);align-items:center;gap:var(--space-2);border:1px solid var(--border);border-radius:var(--radius-pill);padding:3px var(--space-3) 3px 3px;background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:var(--leading-body);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.chip>svg{flex:none;color:var(--text-muted)}\n.chip:active{background:var(--surface-muted);transform:scale(.97);transition-duration:var(--duration-fast),var(--duration-fast),.1s}\n.chip:hover{border-color:var(--border-strong);background:var(--surface-muted)}\n.chip:active{transform:none}\n.chipEmail{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.fieldGroup{display:grid;min-width:0}\n.passwordField{position:relative;min-width:0}\n.forgot{position:absolute;top:0;right:0;display:inline-flex;margin:-6px -4px 0 0;border:0;border-radius:8px;padding:6px 4px;background:none;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);line-height:var(--leading-body);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.forgot[aria-disabled=true]{color:var(--text-secondary);cursor:default}\n.forgot:hover:not([aria-disabled=true]){color:var(--foreground)}\n.forgotLabel{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}\n.forgotLabel svg{flex:none;color:var(--success)}\n.row{overflow:hidden}\n.error{color:var(--danger)}\n.error,.notice{margin:0;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.notice{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px var(--space-2);color:var(--text-secondary);overflow-wrap:anywhere}\n.resendLabel{display:inline-flex;align-items:baseline;gap:.3em;white-space:nowrap}\n.time{display:inline-flex;font-variant-numeric:tabular-nums}\n.timeColumn{position:relative;display:inline-flex;justify-content:center}\n.timeColumn>span{display:inline-block}\n.strong{color:var(--foreground);font-weight:500}\n.submitRow{display:flex;justify-content:center;margin-top:var(--space-2)}\n.submitSlot{display:flex;min-width:0}\n.submitSlot .submit{width:100%;transition:color var(--duration-fast) var(--ease-standard),background var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),border-radius var(--duration-considered) var(--ease-standard)}\n.submitSlot[data-success] .submit{border-radius:var(--radius-pill);padding-inline:0}\n.account{display:flex;min-width:0;align-items:center;gap:var(--space-3);margin-bottom:var(--space-6)}\n.accountText{display:grid;min-width:0;font-size:var(--text-sm);line-height:var(--leading-body)}\n.accountEmail{overflow:hidden;color:var(--text-secondary);text-overflow:ellipsis;white-space:nowrap}\n.progress{height:2px;overflow:hidden;border-radius:1px;background:var(--border)}\n.progressFill{display:block;height:100%;background:var(--accent);transform-origin:left center}\n.doneActions{padding-top:var(--space-2)}\n.footer{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-2) var(--space-5);padding:0 var(--space-5) var(--space-5);color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.footer{padding:0 var(--space-8) var(--space-6)}\n.status{position:relative;display:block;min-width:0;flex:1 1 14rem}\n.status>span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.footerLinks{display:flex;gap:var(--space-4)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.photoSide{position:relative;display:none;min-width:0;overflow:hidden;border-left:1px solid var(--border);background:var(--surface-muted)}\n.photoSide{display:block}\n.photo{object-fit:cover;object-position:50% 58%}\n:root[data-theme=dark] .photo{filter:brightness(.86)}", {"root":"root","formSide":"formSide","layout":"layout","topBar":"topBar","brand":"brand","signUp":"signUp","textLink":"textLink","notice":"notice","chip":"chip","forgot":"forgot","main":"main","viewport":"viewport","track":"track","step":"step","heading":"heading","swapLine":"swapLine","swapText":"swapText","form":"form","wide":"wide","providerMark":"providerMark","divider":"divider","providers":"providers","providerButton":"providerButton","chipEmail":"chipEmail","fieldGroup":"fieldGroup","passwordField":"passwordField","forgotLabel":"forgotLabel","row":"row","error":"error","resendLabel":"resendLabel","time":"time","timeColumn":"timeColumn","strong":"strong","submitRow":"submitRow","submitSlot":"submitSlot","submit":"submit","account":"account","accountText":"accountText","accountEmail":"accountEmail","progress":"progress","progressFill":"progressFill","doneActions":"doneActions","footer":"footer","status":"status","footerLinks":"footerLinks","srOnly":"srOnly","photoSide":"photoSide","photo":"photo"});
A.reg(35978, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { p: () => x });
  var a = i(95155), r = i(12115), n = i(18310), s = i(80642), o = i(25354), l = i(7770), d = i(14290), u = i.n(d);
  let c = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    })
  };
  function p({ word: e2 }) {
    let t2 = (0, n.I)(), [i2, d2] = (0, r.useState)({ word: e2, direction: 1 });
    i2.word !== e2 && d2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(i2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), h2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, a.jsx)(s.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, a.jsx)(
          o.PY1.span,
          {
            className: u().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: h2,
            children: (0, a.jsx)(s.N, {
              initial: false,
              mode: "popLayout",
              custom: i2.direction,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  custom: i2.direction,
                  variants: c,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: h2,
                  children: e3
                },
                e3
              )
            })
          },
          m2.length - t3
        )
      )
    });
  }
  function m({ text: e2 }) {
    let t2 = (0, n.I)(), i2 = e2.split(" ");
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, a.jsx)("span", {
          className: u().words,
          "aria-hidden": "true",
          children: (0, a.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, r2) => (0, a.jsxs)(
                o.PY1.span,
                {
                  className: u().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${l.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${l.T.blur.subtle}px)`,
                    transition: {
                      duration: l.T.duration.exit,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, a.jsx)(p, { word: e3 }) : e3,
                    r2 < i2.length - 1 ? " " : null
                  ]
                },
                `${r2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: r2 }) {
    return (0, a.jsx)(s.N, {
      initial: false,
      children: t2 ? (0, a.jsx)(f, { id: e2, text: t2, className: i2, alert: r2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: s2 }) {
    let d2 = (0, n.I)(), c2 = (0, r.useRef)(null), [p2, h2] = (0, r.useState)("auto");
    return (0, r.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && h2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(o.PY1.span, {
      className: u().messageSlot,
      initial: !d2 && { height: 0, opacity: 0 },
      animate: { height: p2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: d2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: d2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, a.jsx)(o.PY1.span, {
        ref: c2,
        id: e2,
        className: i2,
        role: s2 ? "alert" : void 0,
        initial: !d2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: d2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, a.jsx)(m, { text: t2 })
      })
    });
  }
  let x = (0, r.forwardRef)(function({ label: e2, description: t2, error: i2, id: n2, className: s2, ...o2 }, l2) {
    let d2 = (0, r.useId)(), c2 = n2 ?? d2, p2 = t2 ? `${c2}-description` : void 0, m2 = i2 ? `${c2}-error` : void 0, f2 = [o2["aria-describedby"], p2, m2].filter(Boolean).join(" ") || void 0;
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)("label", { className: u().label, htmlFor: c2, children: e2 }),
        (0, a.jsx)("input", {
          ...o2,
          id: c2,
          ref: l2,
          className: [u().input, s2].filter(Boolean).join(" "),
          "aria-invalid": !!i2 || o2["aria-invalid"],
          "aria-describedby": f2
        }),
        (0, a.jsx)(h, { id: p2, text: t2, className: u().description }),
        (0, a.jsx)(h, { id: m2, text: i2, className: u().error, alert: true })
      ]
    });
  });
  x.displayName = "Input";
}

__m(__module,__exports,__require);
});
A.reg(90060, function(__module,__exports,__require){
"use strict";
function __m(e, i, t) {
  "use strict";
  t.r(i), t.d(i, { LoginSplit: () => z, default: () => B });
  var a = t(95155), s = t(12115), n = t(5772), r = t(80642), o = t(25354), l = t(28245), d = t(92171), c = t(18310), u = t(12363), p = t(64577), h = t(92218), m = t(51288), g = t(35978), f = t(93744), _ = t(67752), x = t(7770), b = t(17988), w = t.n(b);
  let y = (0, _.jW)("concert-hall");
  function j({ className: e2 }) {
    return (0, a.jsxs)("svg", {
      className: e2,
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      children: [
        (0, a.jsx)("path", {
          fill: "#4285F4",
          d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        }),
        (0, a.jsx)("path", {
          fill: "#34A853",
          d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        }),
        (0, a.jsx)("path", {
          fill: "#FBBC05",
          d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        }),
        (0, a.jsx)("path", {
          fill: "#EA4335",
          d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        })
      ]
    });
  }
  let v = ["Google", "Apple", "GitHub"], N = { signUp: "Sign up", terms: "Terms", privacy: "Privacy" }, k = {
    Google: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
    Apple: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
    GitHub: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  }, T = [
    {
      name: "Emma Collins",
      email: "emma@northwind.studio",
      photo: (0, _.my)("emma-collins")
    },
    {
      name: "Marcus Johnson",
      email: "marcus@northwind.studio",
      photo: (0, _.my)("marcus-johnson")
    },
    {
      name: "Ava Mitchell",
      email: "ava@northwind.studio",
      photo: (0, _.my)("ava-mitchell")
    },
    {
      name: "Jasmine Brooks",
      email: "jasmine@northwind.studio",
      photo: (0, _.my)("jasmine-brooks")
    }
  ], S = (e2) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e2.trim());
  function C(e2) {
    let i2 = e2.trim().toLowerCase(), t2 = i2.split("@")[0].split(/[._+-]+/).filter(Boolean), a2 = T.find((e3) => e3.name.toLowerCase().split(" ")[0] === t2[0]);
    return a2 ? { ...a2, email: i2 } : {
      name: t2.slice(0, 2).map((e3) => e3[0].toUpperCase() + e3.slice(1)).join(" ") || "Arc member",
      email: i2
    };
  }
  let P = {
    enter: ({ direction: e2, reduce: i2 }) => i2 ? { opacity: 0 } : { opacity: 0, y: 14 * e2, filter: `blur(${x.T.blur.soft}px)` },
    center: ({ reduce: e2 }) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: e2 ? { duration: x.T.duration.instant } : {
        y: x.T.spring.smooth,
        opacity: {
          duration: x.T.duration.standard,
          ease: x.T.ease.enter,
          delay: 0.06
        },
        filter: {
          duration: x.T.duration.standard,
          ease: x.T.ease.enter,
          delay: 0.06
        }
      }
    }),
    exit: ({ direction: e2, reduce: i2 }) => i2 ? { opacity: 0, transition: { duration: 0 } } : {
      opacity: 0,
      y: -8 * e2,
      filter: `blur(${x.T.blur.subtle}px)`,
      transition: {
        y: x.T.spring.smooth,
        opacity: {
          duration: x.T.duration.exit,
          ease: x.T.ease.standard
        },
        filter: { duration: x.T.duration.exit }
      }
    }
  }, L = (e2) => ({
    initial: e2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${x.T.blur.soft}px)` },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: e2 ? { opacity: 0, transition: { duration: 0 } } : {
      opacity: 0,
      y: -4,
      filter: `blur(${x.T.blur.subtle}px)`,
      transition: { duration: x.T.duration.fast }
    },
    transition: e2 ? { duration: x.T.duration.instant } : { duration: x.T.duration.standard, ease: x.T.ease.enter }
  }), $ = (e2) => ({
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: e2 ? { duration: 0 } : {
      height: x.T.spring.smooth,
      opacity: { duration: x.T.duration.fast }
    }
  }), A = {
    enter: (e2) => ({
      opacity: 0,
      y: `${-0.7 * e2}em`,
      filter: `blur(${x.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${0.7 * e2}em`,
      filter: `blur(${x.T.blur.subtle}px)`
    })
  };
  function R({ seconds: e2, reduce: i2 }) {
    let [t2, n2] = (0, s.useState)({ seconds: e2, direction: 1 });
    t2.seconds !== e2 && n2({ seconds: e2, direction: e2 < t2.seconds ? 1 : -1 });
    let l2 = `${Math.floor(e2 / 60)}:${String(e2 % 60).padStart(2, "0")}`, d2 = i2 ? { duration: 0 } : {
      y: x.T.spring.snappy,
      opacity: { duration: x.T.duration.fast },
      filter: { duration: x.T.duration.fast }
    };
    return (0, a.jsx)("span", {
      className: w().time,
      children: l2.split("").map(
        (e3, i3) => (0, a.jsx)(
          "span",
          {
            className: w().timeColumn,
            children: (0, a.jsx)(r.N, {
              initial: false,
              mode: "popLayout",
              custom: t2.direction,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  custom: t2.direction,
                  variants: A,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: d2,
                  children: e3
                },
                e3
              )
            })
          },
          i3
        )
      )
    });
  }
  function E({ reduce: e2 }) {
    return (0, a.jsx)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, a.jsx)(o.PY1.path, {
        d: "M5 12.5l4.5 4.5L19 7.5",
        initial: !e2 && { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: {
          duration: 0.7 * x.T.duration.considered,
          ease: x.T.ease.enter,
          delay: 0.14
        }
      })
    });
  }
  function z({
    fullScreen: e2 = false,
    demoPassword: i2 = "arc-demo",
    links: t2,
    onSignIn: _2
  }) {
    let b2, A2, B2, Y, M, F, O = (0, s.useId)(), I = !!(0, c.I)(), [W, H] = (0, s.useState)("email"), [D, J] = (0, s.useState)(1), [G, U] = (0, s.useState)(""), [V, q] = (0, s.useState)(false), [X, Z] = (0, s.useState)(false), [K, Q] = (0, s.useState)(""), [ee, ei] = (0, s.useState)(""), [et, ea] = (0, s.useState)(null), [es, en] = (0, s.useState)("idle"), [er, eo] = (0, s.useState)("idle"), [el, ed] = (0, s.useState)(0), [ec, eu] = (0, s.useState)(T[0]), [ep, eh] = (0, s.useState)("Password"), [em, eg] = (0, s.useState)(false), [ef, e_] = (0, s.useState)(""), ex = (0, s.useRef)(null), eb = (0, s.useRef)(null), ew = (0, s.useRef)(null), ey = (0, s.useRef)(null), ej = (0, s.useRef)(null), ev = (0, s.useRef)([]), { track: eN, height: ek } = (b2 = (0, s.useRef)(null), A2 = (0, l.d)("auto"), B2 = (0, s.useRef)(0), Y = (0, s.useRef)(false), M = (0, s.useRef)(W), F = (0, s.useCallback)(
      (e3) => {
        Y.current = true, (0, d.i)(A2, e3, {
          ...x.T.spring.smooth,
          onComplete: () => {
            Y.current = false, A2.jump("auto");
          }
        });
      },
      [A2]
    ), (0, s.useEffect)(() => {
      let e3 = b2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let i3 = new ResizeObserver(([i4]) => {
        B2.current = i4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight, Y.current && F(B2.current);
      });
      return i3.observe(e3), () => i3.disconnect();
    }, [F]), (0, s.useLayoutEffect)(() => {
      if (M.current === W) return;
      M.current = W;
      let e3 = A2.get(), i3 = "number" == typeof e3 ? e3 : B2.current, t3 = b2.current?.offsetHeight ?? 0;
      if (I || !i3 || !t3) {
        Y.current = false, A2.jump("auto");
        return;
      }
      "auto" === e3 && A2.jump(i3), F(t3);
    }, [W, I, A2, F]), { track: b2, height: A2 }), eT = e2 ? "h1" : "h2", eS = (V || X) && !S(G) ? G.trim() ? "Enter a full address, like name@example.com." : "Enter your email address." : "", eC = { direction: D, reduce: I }, eP = ec.name.split(" ")[0];
    function eL(e3, i3) {
      ev.current.push(window.setTimeout(e3, i3));
    }
    function e$() {
      ev.current.splice(0).forEach(window.clearTimeout);
    }
    function eA(e3, i3, t3 = null) {
      ej.current = t3, J(i3), H(e3);
    }
    function eR() {
      !I && ew.current && (0, d.i)(
        ew.current,
        { x: [0, -7, 6, -4, 2, 0] },
        { duration: 0.42, ease: x.T.ease.standard }
      );
    }
    function eE(e3, i3) {
      ea(null), eu(e3), eh(i3), eg(false), eA("done", 1, "done"), e_(`Signing you in as ${e3.email}`), eL(
        () => {
          eg(true), e_(`Signed in with ${"Password" === i3 ? "a password" : i3}`), _2?.(e3, i3);
        },
        I ? 400 : 1700
      );
    }
    (0, s.useEffect)(() => {
      let e3 = ev.current;
      return () => e3.forEach(window.clearTimeout);
    }, []), (0, s.useEffect)(() => {
      if ("password" !== W || "sent" !== er || el <= 0) return;
      let e3 = window.setTimeout(() => ed((e4) => Math.max(0, e4 - 1)), 1e3);
      return () => window.clearTimeout(e3);
    }, [W, er, el]), (0, s.useEffect)(() => {
      let e3 = ej.current;
      ej.current = null, "email" === e3 && (ex.current?.focus({ preventScroll: true }), ex.current?.select()), "password" === e3 && eb.current?.focus({ preventScroll: true }), "done" === e3 && ey.current?.focus({ preventScroll: true });
    }, [W]);
    let ez = (e3) => t2?.[e3] ? (0, a.jsx)("a", {
      className: w().textLink,
      href: t2[e3],
      children: N[e3]
    }) : (0, a.jsx)("button", {
      type: "button",
      className: w().textLink,
      onClick: () => e_(`${N[e3]} opens in your app`),
      children: N[e3]
    });
    return (0, a.jsx)("section", {
      className: w().root,
      "data-full-screen": e2 || void 0,
      "aria-label": "Sign in to Arc",
      children: (0, a.jsxs)("div", {
        className: w().layout,
        children: [
          (0, a.jsxs)("div", {
            className: w().formSide,
            children: [
              (0, a.jsxs)("header", {
                className: w().topBar,
                children: [
                  (0, a.jsxs)("span", {
                    className: w().brand,
                    children: [
                      (0, a.jsxs)("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                          (0, a.jsx)("path", {
                            d: "M4 17a8 8 0 0 1 16 0",
                            stroke: "currentColor",
                            strokeWidth: "2.25",
                            strokeLinecap: "round"
                          }),
                          (0, a.jsx)("circle", {
                            cx: "12",
                            cy: "17",
                            r: "2.25",
                            fill: "currentColor"
                          })
                        ]
                      }),
                      "Arc"
                    ]
                  }),
                  (0, a.jsxs)("p", {
                    className: w().signUp,
                    children: ["No account? ", ez("signUp")]
                  })
                ]
              }),
              (0, a.jsx)("div", {
                className: w().main,
                children: (0, a.jsx)(o.PY1.div, {
                  className: w().viewport,
                  style: { height: ek },
                  children: (0, a.jsx)("div", {
                    ref: eN,
                    className: w().track,
                    children: (0, a.jsxs)(r.N, {
                      mode: "popLayout",
                      initial: false,
                      custom: eC,
                      children: [
                        "email" === W && (0, a.jsxs)(
                          o.PY1.div,
                          {
                            className: w().step,
                            custom: eC,
                            variants: P,
                            initial: "enter",
                            animate: "center",
                            exit: "exit",
                            children: [
                              (0, a.jsxs)("div", {
                                className: w().heading,
                                children: [
                                  (0, a.jsx)(eT, {
                                    children: "Welcome back"
                                  }),
                                  (0, a.jsx)("p", {
                                    children: "Sign in to Arc with your work email."
                                  })
                                ]
                              }),
                              (0, a.jsxs)("form", {
                                className: w().form,
                                onSubmit: function(e3) {
                                  if (e3.preventDefault(), !et) {
                                    if (Z(true), !S(G))
                                      return void ex.current?.focus();
                                    ea("email"), e_("Looking up your account"), eL(() => {
                                      let e4 = C(G);
                                      ea(null), eu(e4), Q(""), ei(""), en("idle"), eo("idle"), eA("password", 1, "password"), e_(
                                        `Enter the password for ${e4.email}`
                                      );
                                    }, 650);
                                  }
                                },
                                noValidate: true,
                                children: [
                                  (0, a.jsx)(g.p, {
                                    ref: ex,
                                    label: "Email",
                                    type: "email",
                                    name: "email",
                                    inputMode: "email",
                                    autoComplete: "username",
                                    autoCapitalize: "none",
                                    spellCheck: false,
                                    placeholder: "name@example.com",
                                    value: G,
                                    readOnly: "email" === et,
                                    error: eS,
                                    onChange: (e3) => U(e3.target.value),
                                    onBlur: () => {
                                      G.trim() && q(true);
                                    }
                                  }),
                                  (0, a.jsx)(m.$, {
                                    type: "submit",
                                    className: w().wide,
                                    loading: "email" === et,
                                    children: "Continue"
                                  })
                                ]
                              }),
                              (0, a.jsx)("div", {
                                className: w().divider,
                                children: "or"
                              }),
                              (0, a.jsx)("div", {
                                className: w().providers,
                                role: "group",
                                "aria-label": "Single sign-on",
                                children: v.map(
                                  (e3) => (0, a.jsxs)(
                                    m.$,
                                    {
                                      type: "button",
                                      variant: "secondary",
                                      className: w().providerButton,
                                      "aria-label": `Continue with ${e3}`,
                                      loading: et === e3,
                                      "aria-disabled": !!et && et !== e3 || void 0,
                                      onClick: () => {
                                        !et && (ea(e3), e_(`Opening ${e3}`), eL(
                                          () => eE(S(G) ? C(G) : T[0], e3),
                                          1e3
                                        ));
                                      },
                                      children: [
                                        "Google" === e3 ? (0, a.jsx)(j, {
                                          className: w().providerMark
                                        }) : (0, a.jsx)("svg", {
                                          className: w().providerMark,
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 24 24",
                                          fill: "currentColor",
                                          "aria-hidden": "true",
                                          children: (0, a.jsx)("path", {
                                            d: k[e3]
                                          })
                                        }),
                                        e3
                                      ]
                                    },
                                    e3
                                  )
                                )
                              })
                            ]
                          },
                          "email"
                        ),
                        "password" === W && (0, a.jsxs)(
                          o.PY1.div,
                          {
                            className: w().step,
                            custom: eC,
                            variants: P,
                            initial: "enter",
                            animate: "center",
                            exit: "exit",
                            children: [
                              (0, a.jsxs)("div", {
                                className: w().heading,
                                children: [
                                  (0, a.jsx)(eT, {
                                    children: "Enter your password"
                                  }),
                                  (0, a.jsxs)("button", {
                                    type: "button",
                                    className: w().chip,
                                    "aria-label": `${ec.email}, change email`,
                                    onClick: function() {
                                      e$(), en("idle"), eo("idle"), Z(false), U(ec.email), eA("email", -1, "email"), e_("Edit your email");
                                    },
                                    children: [
                                      (0, a.jsx)(h.e, {
                                        name: ec.name,
                                        src: ec.photo,
                                        size: "sm"
                                      }),
                                      (0, a.jsx)("span", {
                                        className: w().chipEmail,
                                        children: ec.email
                                      }),
                                      (0, a.jsx)(u.A, {
                                        size: 16,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, a.jsxs)("form", {
                                className: w().form,
                                onSubmit: function(e3) {
                                  if (e3.preventDefault(), "idle" === es) {
                                    if (!K) {
                                      ei("Enter your password."), eR(), eb.current?.focus();
                                      return;
                                    }
                                    en("checking"), ei(""), e_("Checking your password"), eL(() => {
                                      if (K === i2) {
                                        en("success"), e_("Password accepted"), eL(
                                          () => eE(ec, "Password"),
                                          760
                                        );
                                        return;
                                      }
                                      en("idle"), ei(
                                        "That password is incorrect. Try again or reset it."
                                      ), e_("Incorrect password"), eR(), eb.current?.focus(), eb.current?.select();
                                    }, 800);
                                  }
                                },
                                noValidate: true,
                                children: [
                                  (0, a.jsx)("input", {
                                    hidden: true,
                                    readOnly: true,
                                    type: "email",
                                    name: "username",
                                    autoComplete: "username",
                                    value: ec.email
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: w().fieldGroup,
                                    children: [
                                      (0, a.jsxs)("div", {
                                        ref: ew,
                                        className: w().passwordField,
                                        children: [
                                          (0, a.jsx)(f.s, {
                                            ref: eb,
                                            label: "Password",
                                            name: "password",
                                            autoComplete: "current-password",
                                            description: `For this demo, the password is ${i2}.`,
                                            value: K,
                                            readOnly: "idle" !== es,
                                            "aria-invalid": !!ee || void 0,
                                            "aria-describedby": ee ? O : void 0,
                                            onChange: (e3) => {
                                              Q(e3.target.value), ee && ei("");
                                            }
                                          }),
                                          (0, a.jsx)("button", {
                                            type: "button",
                                            className: w().forgot,
                                            "aria-disabled": "idle" !== er || void 0,
                                            onClick: function() {
                                              "idle" === er && "idle" === es && (eo("sending"), e_("Sending a reset link"), eL(() => {
                                                eo("sent"), ed(30), e_(
                                                  `Reset link sent to ${ec.email}`
                                                );
                                              }, 900));
                                            },
                                            children: (0, a.jsx)(r.N, {
                                              mode: "popLayout",
                                              initial: false,
                                              children: (0, a.jsx)(
                                                o.PY1.span,
                                                {
                                                  className: w().forgotLabel,
                                                  ...L(I),
                                                  children: "idle" === er ? "Forgot password?" : "sending" === er ? "Sending link" : (0, a.jsxs)(
                                                    a.Fragment,
                                                    {
                                                      children: [
                                                        (0, a.jsx)(
                                                          p.A,
                                                          {
                                                            size: 14,
                                                            strokeWidth: 2,
                                                            "aria-hidden": "true"
                                                          }
                                                        ),
                                                        "Link sent"
                                                      ]
                                                    }
                                                  )
                                                },
                                                er
                                              )
                                            })
                                          })
                                        ]
                                      }),
                                      (0, a.jsxs)(r.N, {
                                        initial: false,
                                        children: [
                                          ee && (0, a.jsx)(
                                            o.PY1.div,
                                            {
                                              className: w().row,
                                              ...$(I),
                                              children: (0, a.jsx)("p", {
                                                id: O,
                                                className: w().error,
                                                role: "alert",
                                                children: ee
                                              })
                                            },
                                            "error"
                                          ),
                                          "sent" === er && (0, a.jsx)(
                                            o.PY1.div,
                                            {
                                              className: w().row,
                                              ...$(I),
                                              children: (0, a.jsxs)("p", {
                                                className: w().notice,
                                                children: [
                                                  (0, a.jsxs)("span", {
                                                    children: [
                                                      "Reset link sent to ",
                                                      (0, a.jsx)("span", {
                                                        className: w().strong,
                                                        children: ec.email
                                                      }),
                                                      "."
                                                    ]
                                                  }),
                                                  (0, a.jsx)("button", {
                                                    type: "button",
                                                    className: w().textLink,
                                                    "aria-disabled": el > 0 || void 0,
                                                    "aria-label": el > 0 ? `Resend link, available in ${el} seconds` : "Resend link",
                                                    onClick: function() {
                                                      el > 0 || (ed(30), e_(
                                                        "New reset link sent"
                                                      ));
                                                    },
                                                    children: (0, a.jsx)(
                                                      r.N,
                                                      {
                                                        mode: "popLayout",
                                                        initial: false,
                                                        children: (0, a.jsx)(
                                                          o.PY1.span,
                                                          {
                                                            className: w().resendLabel,
                                                            ...L(I),
                                                            children: el > 0 ? (0, a.jsxs)(
                                                              a.Fragment,
                                                              {
                                                                children: [
                                                                  "Resend in ",
                                                                  (0, a.jsx)(
                                                                    R,
                                                                    {
                                                                      seconds: el,
                                                                      reduce: I
                                                                    }
                                                                  )
                                                                ]
                                                              }
                                                            ) : "Resend link"
                                                          },
                                                          el > 0 ? "wait" : "ready"
                                                        )
                                                      }
                                                    )
                                                  })
                                                ]
                                              })
                                            },
                                            "reset"
                                          )
                                        ]
                                      })
                                    ]
                                  }),
                                  (0, a.jsx)("div", {
                                    className: w().submitRow,
                                    children: (0, a.jsx)(o.PY1.div, {
                                      className: w().submitSlot,
                                      "data-success": "success" === es || void 0,
                                      initial: false,
                                      animate: {
                                        width: "success" === es ? 44 : "100%"
                                      },
                                      transition: I ? { duration: 0 } : x.T.spring.morph,
                                      children: (0, a.jsx)(m.$, {
                                        type: "submit",
                                        className: w().submit,
                                        loading: "checking" === es,
                                        "aria-label": "success" === es ? "Password accepted" : void 0,
                                        children: "success" === es ? (0, a.jsx)(E, { reduce: I }) : "Sign in"
                                      })
                                    })
                                  })
                                ]
                              })
                            ]
                          },
                          "password"
                        ),
                        "done" === W && (0, a.jsxs)(
                          o.PY1.div,
                          {
                            className: w().step,
                            custom: eC,
                            variants: P,
                            initial: "enter",
                            animate: "center",
                            exit: "exit",
                            children: [
                              (0, a.jsxs)("div", {
                                className: w().account,
                                children: [
                                  (0, a.jsx)(h.e, {
                                    name: ec.name,
                                    src: ec.photo
                                  }),
                                  (0, a.jsxs)("span", {
                                    className: w().accountText,
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: w().strong,
                                        children: ec.name
                                      }),
                                      (0, a.jsx)("span", {
                                        className: w().accountEmail,
                                        children: ec.email
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, a.jsxs)("div", {
                                className: w().heading,
                                children: [
                                  (0, a.jsx)(eT, {
                                    ref: ey,
                                    tabIndex: -1,
                                    className: w().swapLine,
                                    children: (0, a.jsx)(r.N, {
                                      mode: "popLayout",
                                      initial: false,
                                      children: (0, a.jsx)(
                                        o.PY1.span,
                                        {
                                          className: w().swapText,
                                          ...L(I),
                                          children: em ? `You're in, ${eP}` : "Signing you in"
                                        },
                                        em ? "in" : "going"
                                      )
                                    })
                                  }),
                                  (0, a.jsx)("p", {
                                    className: w().swapLine,
                                    children: (0, a.jsx)(r.N, {
                                      mode: "popLayout",
                                      initial: false,
                                      children: (0, a.jsx)(
                                        o.PY1.span,
                                        {
                                          className: w().swapText,
                                          ...L(I),
                                          children: em ? `Signed in with ${"Password" === ep ? "your password" : ep}. Your app takes over from here.` : "Opening your workspace and recent files."
                                        },
                                        em ? "in" : "going"
                                      )
                                    })
                                  })
                                ]
                              }),
                              (0, a.jsx)(o.PY1.div, {
                                className: w().row,
                                initial: false,
                                animate: em ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 },
                                transition: I ? { duration: 0 } : {
                                  height: x.T.spring.smooth,
                                  opacity: {
                                    duration: x.T.duration.fast
                                  }
                                },
                                children: (0, a.jsx)("div", {
                                  className: w().progress,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(o.PY1.span, {
                                    className: w().progressFill,
                                    initial: { scaleX: 0 },
                                    animate: { scaleX: 1 },
                                    transition: I ? { duration: 0 } : {
                                      duration: 1.4,
                                      ease: x.T.ease.inOut,
                                      delay: 0.25
                                    }
                                  })
                                })
                              }),
                              (0, a.jsx)(r.N, {
                                initial: false,
                                children: em && (0, a.jsx)(
                                  o.PY1.div,
                                  {
                                    className: w().row,
                                    ...$(I),
                                    children: (0, a.jsx)("div", {
                                      className: w().doneActions,
                                      children: (0, a.jsx)(m.$, {
                                        type: "button",
                                        variant: "secondary",
                                        className: w().wide,
                                        onClick: function() {
                                          e$(), Q(""), en("idle"), eo("idle"), eg(false), q(false), Z(false), U(ec.email), eA("email", -1, "email"), e_("Signed out");
                                        },
                                        children: "Sign out"
                                      })
                                    })
                                  },
                                  "out"
                                )
                              })
                            ]
                          },
                          "done"
                        )
                      ]
                    })
                  })
                })
              }),
              (0, a.jsxs)("footer", {
                className: w().footer,
                children: [
                  (0, a.jsx)("p", {
                    className: w().srOnly,
                    role: "status",
                    "aria-live": "polite",
                    children: ef
                  }),
                  (0, a.jsx)("span", {
                    className: w().status,
                    "aria-hidden": "true",
                    children: (0, a.jsx)(r.N, {
                      mode: "popLayout",
                      initial: false,
                      children: (0, a.jsx)(
                        o.PY1.span,
                        { ...L(I), children: ef },
                        ef
                      )
                    })
                  }),
                  (0, a.jsxs)("nav", {
                    className: w().footerLinks,
                    "aria-label": "Legal",
                    children: [ez("terms"), ez("privacy")]
                  })
                ]
              })
            ]
          }),
          (0, a.jsx)("div", {
            className: w().photoSide,
            "aria-hidden": "true",
            children: (0, a.jsx)(n.default, {
              src: y.src,
              alt: "",
              fill: true,
              sizes: "(max-width: 760px) 100vw, 50vw",
              className: w().photo
            })
          })
        ]
      })
    });
  }
  let B = z;
}

__m(__module,__exports,__require);
});
A.reg(93744, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { s: () => x });
  var a = i(95155), r = i(12115), n = i(18310), s = i(25354), o = i(80642), l = i(7770), d = i(1668), u = i.n(d);
  let c = { showPassword: "Show password", hidePassword: "Hide password" };
  function p({ slashed: e2 }) {
    let t2 = (0, n.I)(), i2 = `eye-${(0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`, o2 = { pathLength: +!!e2, opacity: +!!e2 }, d2 = t2 ? { duration: 0 } : {
      pathLength: {
        duration: l.T.duration.standard,
        ease: [...l.T.ease.standard]
      },
      opacity: { duration: l.T.duration.instant }
    };
    return (0, a.jsxs)("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        (0, a.jsxs)("mask", {
          id: i2,
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          children: [
            (0, a.jsx)("rect", {
              width: "24",
              height: "24",
              fill: "white",
              stroke: "none"
            }),
            (0, a.jsx)(s.PY1.path, {
              d: "M2 2l20 20",
              stroke: "black",
              strokeWidth: 5,
              initial: false,
              animate: o2,
              transition: d2
            })
          ]
        }),
        (0, a.jsxs)("g", {
          mask: `url(#${i2})`,
          children: [
            (0, a.jsx)("path", {
              d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
            }),
            (0, a.jsx)("circle", { cx: "12", cy: "12", r: "3" })
          ]
        }),
        (0, a.jsx)(s.PY1.path, {
          d: "M2 2l20 20",
          initial: false,
          animate: o2,
          transition: d2
        })
      ]
    });
  }
  function m({ text: e2 }) {
    let t2 = (0, n.I)(), i2 = e2.split(" ");
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, a.jsx)("span", {
          className: u().words,
          "aria-hidden": "true",
          children: (0, a.jsx)(o.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, r2) => (0, a.jsx)(
                s.PY1.span,
                {
                  className: u().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${l.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${l.T.blur.subtle}px)`,
                    transition: {
                      duration: l.T.duration.exit,
                      ease: [...l.T.ease.exit]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: r2 < i2.length - 1 ? `${e3} ` : e3
                },
                `${r2}:${e3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: r2 }) {
    return (0, a.jsx)(o.N, {
      initial: false,
      children: t2 ? (0, a.jsx)(f, { id: e2, text: t2, className: i2, alert: r2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: o2 }) {
    let d2 = (0, n.I)(), c2 = (0, r.useRef)(null), [p2, h2] = (0, r.useState)("auto");
    return (0, r.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && h2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(s.PY1.span, {
      className: u().messageSlot,
      initial: { height: 0, opacity: 0 },
      animate: { height: p2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: d2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: d2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, a.jsx)(s.PY1.span, {
        ref: c2,
        id: e2,
        className: i2,
        role: o2 ? "alert" : void 0,
        initial: !d2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: d2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, a.jsx)(m, { text: t2 })
      })
    });
  }
  let x = (0, r.forwardRef)(function({ label: e2, description: t2, messages: i2, id: n2, className: s2, ...o2 }, l2) {
    let d2 = { ...c, ...i2 }, m2 = (0, r.useId)(), f2 = n2 ?? m2, [x2, _] = (0, r.useState)(false), [y, b] = (0, r.useState)(false), g = t2 ? `${f2}-description` : void 0;
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)("label", { htmlFor: f2, children: e2 }),
        (0, a.jsxs)("div", {
          className: u().shell,
          children: [
            (0, a.jsx)("input", {
              ...o2,
              ref: l2,
              id: f2,
              type: x2 ? "text" : "password",
              "data-reveal": y ? x2 ? "shown" : "hidden" : void 0,
              "aria-describedby": [o2["aria-describedby"], g].filter(Boolean).join(" ") || void 0,
              className: [u().input, s2].filter(Boolean).join(" ")
            }),
            (0, a.jsx)("button", {
              type: "button",
              onClick: () => {
                _((e3) => !e3), b(true);
              },
              "aria-label": x2 ? d2.hidePassword : d2.showPassword,
              "aria-pressed": x2,
              children: (0, a.jsx)(p, { slashed: x2 })
            })
          ]
        }),
        (0, a.jsx)(h, { id: g, text: t2, className: u().hint })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.cssFor("login-split", [1668,14290,17988]);
A.item("login-split", {entry:90060, export:"LoginSplit", kind:"block", tier:"pro", unresolved:[]});
})();