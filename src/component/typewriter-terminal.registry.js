/* typewriter-terminal (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(53234, ".typewriter-terminal_root___ae_l{--tt-a:var(--tt-accent,var(--accent));--tt-mono:ui-monospace,\"SFMono-Regular\",\"SF Mono\",Menlo,Consolas,\"Liberation Mono\",monospace;--tt-lh:1.75;--tt-pad:var(--space-5);--tt-string:oklch(46% .13 150);--tt-number:oklch(50% .14 55);--tt-flag:oklch(48% .15 285);--tt-path:oklch(46% .13 230);--tt-env:oklch(44% .12 85);container-type:inline-size;position:relative;display:grid;width:100%;min-width:0;margin:0;gap:var(--space-4)}:root[data-theme=dark] .typewriter-terminal_root___ae_l{--tt-string:oklch(77% .15 150);--tt-number:oklch(80% .14 75);--tt-flag:oklch(78% .16 285);--tt-path:oklch(79% .13 230);--tt-env:oklch(79% .12 85)}.typewriter-terminal_window__EFiwy{overflow:hidden;min-width:0;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);box-shadow:var(--shadow-floating)}.typewriter-terminal_bar__rQuL3{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;min-height:44px;padding:0 var(--space-2) 0 var(--space-4);border-bottom:1px solid var(--border-subtle);background:var(--surface-raised)}.typewriter-terminal_lights__JWN4Q{display:flex;gap:7px}.typewriter-terminal_lights__JWN4Q i{width:11px;height:11px;border-radius:50%;background:var(--surface-muted);box-shadow:inset 0 0 0 1px var(--border)}.typewriter-terminal_title__DPxih{overflow:hidden;min-width:0;color:var(--text-secondary);font-family:var(--font-body);font-size:var(--text-sm);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}.typewriter-terminal_barEnd__j1XOY{display:flex;justify-content:flex-end;min-width:0}.typewriter-terminal_viewport__EfkK_{position:relative;overflow:hidden;height:calc(var(--tt-rows, 11) * var(--tt-lh) * 1em + var(--tt-pad) * 2);color:var(--foreground);font-family:var(--tt-mono);font-size:var(--text-sm);font-variant-ligatures:none;line-height:var(--tt-lh);-webkit-mask-image:linear-gradient(to bottom,transparent 0,oklch(0 0 0) var(--tt-pad),oklch(0 0 0) 100%);mask-image:linear-gradient(to bottom,transparent 0,oklch(0 0 0) var(--tt-pad),oklch(0 0 0) 100%)}.typewriter-terminal_content__ETR2s{padding:var(--tt-pad);will-change:transform}.typewriter-terminal_group__VEBZ_+.typewriter-terminal_group__VEBZ_{margin-top:calc(var(--tt-lh) * .5em)}.typewriter-terminal_content__ETR2s [data-line]:not([data-on]){display:none}.typewriter-terminal_promptLine__uNf3e{white-space:pre-wrap;overflow-wrap:anywhere}.typewriter-terminal_cwd__nFiQF{color:var(--text-secondary)}.typewriter-terminal_symbol__HV0UX{margin:0 .6ch;color:var(--text-muted)}.typewriter-terminal_cmd__pwk6p>span:not([data-on]){display:none}.typewriter-terminal_cmd__pwk6p[data-caret]:after{content:\"\";display:inline-block;width:.6em;height:1.2em;margin-left:1px;border-radius:2px;background:var(--tt-a);vertical-align:-.24em;animation:typewriter-terminal_tt-blink__A1y5Z 1.1s var(--ease-standard) infinite}.typewriter-terminal_root___ae_l[data-scrubbing] .typewriter-terminal_cmd__pwk6p[data-caret]:after,.typewriter-terminal_root___ae_l[data-typing] .typewriter-terminal_cmd__pwk6p[data-caret]:after{animation:none}@keyframes typewriter-terminal_tt-blink__A1y5Z{0%,48%{opacity:1}58%,92%{opacity:.1}to{opacity:1}}.typewriter-terminal_plain__Yvt1P{color:var(--foreground)}.typewriter-terminal_program__eQ0x6{color:var(--foreground);font-weight:500}.typewriter-terminal_flag__UkW0x{color:var(--tt-flag)}.typewriter-terminal_string__BDYAb{color:var(--tt-string)}.typewriter-terminal_path__JgkK0{color:var(--tt-path)}.typewriter-terminal_op__eEDtW{color:var(--text-muted)}.typewriter-terminal_env__l5Qq9{color:var(--tt-env)}.typewriter-terminal_number__KzZW5{color:var(--tt-number)}.typewriter-terminal_out__pZ6C6{display:flex;align-items:baseline;gap:1ch;min-width:0;color:var(--text-secondary);white-space:pre-wrap;overflow-wrap:anywhere}.typewriter-terminal_out__pZ6C6[data-tone=muted]{color:var(--text-muted)}.typewriter-terminal_out__pZ6C6[data-tone=danger],.typewriter-terminal_out__pZ6C6[data-tone=success],.typewriter-terminal_out__pZ6C6[data-tone=warning]{color:var(--foreground)}.typewriter-terminal_out__pZ6C6[data-tone=accent]{color:var(--tt-a)}.typewriter-terminal_out__pZ6C6[data-tone=success] .typewriter-terminal_glyph__kw6Ve{color:var(--success)}.typewriter-terminal_out__pZ6C6[data-tone=warning] .typewriter-terminal_glyph__kw6Ve{color:var(--warning)}.typewriter-terminal_out__pZ6C6[data-tone=danger] .typewriter-terminal_glyph__kw6Ve{color:var(--danger)}.typewriter-terminal_text__sWKwV{min-width:0}.typewriter-terminal_glyph__kw6Ve{display:inline-grid;flex:none;place-items:center;width:1.2em;height:calc(var(--tt-lh) * 1em);align-self:flex-start}.typewriter-terminal_glyph__kw6Ve>*{grid-area:1/1}.typewriter-terminal_link__wWGoa{color:var(--tt-a);text-decoration:underline;text-decoration-color:color-mix(in oklab,var(--tt-a) 40%,transparent);text-decoration-thickness:1px;text-underline-offset:.2em}.typewriter-terminal_progress__o7Ebt{align-items:center}.typewriter-terminal_progressLabel__NH3vp{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.typewriter-terminal_bar2__wZL_w{position:relative;overflow:hidden;flex:1 1 auto;min-width:3em;max-width:16em;height:4px;border-radius:var(--radius-pill);background:var(--border-subtle)}.typewriter-terminal_fill__F9Zc_{position:absolute;inset:0;border-radius:inherit;background:var(--tt-a);transform:translate3d(-100%,0,0)}.typewriter-terminal_pct__ZszXE{flex:none;min-width:4ch;color:var(--text-muted);font-variant-numeric:tabular-nums;text-align:right}.typewriter-terminal_progress__o7Ebt[data-done] .typewriter-terminal_pct__ZszXE{color:var(--text-secondary)}.typewriter-terminal_spin__ISYXM{color:var(--tt-a);line-height:1}.typewriter-terminal_tick__ciqvo{color:var(--success)}.typewriter-terminal_task__a3mcs:not([data-done]) .typewriter-terminal_tick__ciqvo,.typewriter-terminal_task__a3mcs[data-done] .typewriter-terminal_spin__ISYXM{display:none}.typewriter-terminal_task__a3mcs[data-done]{color:var(--foreground)}.typewriter-terminal_took__8Bh6u{flex:none;color:var(--text-muted);font-variant-numeric:tabular-nums;white-space:nowrap}.typewriter-terminal_task__a3mcs:not([data-done]) .typewriter-terminal_took__8Bh6u{visibility:hidden}.typewriter-terminal_controls__2Es_7{display:flex;align-items:center;gap:var(--space-2);min-width:0;padding-inline:var(--space-2)}.typewriter-terminal_button__L9OJi{display:grid;flex:none;place-items:center;width:var(--control-height-md);height:var(--control-height-md);padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}.typewriter-terminal_button__L9OJi:active{transform:scale(.94)}.typewriter-terminal_button__L9OJi>*{grid-area:1/1}.typewriter-terminal_icon__yaIbp{display:grid;place-items:center;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}.typewriter-terminal_icon__yaIbp:not([data-show]){opacity:0;transform:scale(.6)}.typewriter-terminal_scrubber__jztgj{position:relative;display:grid;flex:1 1 auto;align-items:center;min-width:0;height:var(--control-height-md);margin-inline:var(--space-2);cursor:pointer;touch-action:none;-webkit-tap-highlight-color:transparent}.typewriter-terminal_track__Ti7zl{position:relative;container-type:inline-size;height:4px;border-radius:var(--radius-pill);background:var(--border)}.typewriter-terminal_trackFill__TkjJ1{position:absolute;inset:0;border-radius:inherit;background:var(--tt-a);transform:scaleX(0);transform-origin:left center}.typewriter-terminal_mark__b6PjM{position:absolute;top:50%;width:2px;height:10px;border-radius:1px;background:var(--border-strong);transform:translate(-50%,-50%)}.typewriter-terminal_thumbRail__mL_G9{position:absolute;inset-block:0;left:0;width:0;pointer-events:none}.typewriter-terminal_thumb__O3oi4{position:absolute;top:50%;left:0;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;background:var(--control-thumb);box-shadow:var(--control-thumb-shadow),0 0 0 1px var(--border);transition:transform var(--duration-spring) var(--ease-spring)}.typewriter-terminal_root___ae_l[data-scrubbing] .typewriter-terminal_thumb__O3oi4{transform:scale(1.22)}.typewriter-terminal_root___ae_l[data-reduced] .typewriter-terminal_scrubber__jztgj{margin-inline:var(--space-3)}.typewriter-terminal_clock__rENqf{flex:none;min-width:10ch;color:var(--text-muted);font-family:var(--font-body);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-align:right}.typewriter-terminal_caption__EnUjQ{color:var(--text-secondary);font-family:var(--font-body);font-size:var(--text-sm);line-height:var(--leading-body);text-align:center}.typewriter-terminal_srOnly__v_lin{position:absolute;overflow:hidden;width:1px;height:1px;margin:-1px;padding:0;border:0;clip:rect(0 0 0 0);white-space:nowrap}@media (hover:hover) and (pointer:fine){.typewriter-terminal_button__L9OJi:hover{background:var(--surface-muted);color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.typewriter-terminal_scrubber__jztgj:hover .typewriter-terminal_thumb__O3oi4{transform:scale(1.1)}}@media (hover:hover) and (pointer:fine){.typewriter-terminal_root___ae_l[data-scrubbing] .typewriter-terminal_scrubber__jztgj:hover .typewriter-terminal_thumb__O3oi4{transform:scale(1.22)}}@media (prefers-reduced-motion:reduce){.typewriter-terminal_cmd__pwk6p[data-caret]:after{animation:none}}@media (prefers-reduced-motion:reduce){.typewriter-terminal_button__L9OJi,.typewriter-terminal_icon__yaIbp,.typewriter-terminal_thumb__O3oi4{transition:none}}.typewriter-terminal_root___ae_l[data-reduced] .typewriter-terminal_cmd__pwk6p[data-caret]:after{animation:none}", {"root":"typewriter-terminal_root___ae_l","window":"typewriter-terminal_window__EFiwy","bar":"typewriter-terminal_bar__rQuL3","lights":"typewriter-terminal_lights__JWN4Q","title":"typewriter-terminal_title__DPxih","barEnd":"typewriter-terminal_barEnd__j1XOY","viewport":"typewriter-terminal_viewport__EfkK_","content":"typewriter-terminal_content__ETR2s","group":"typewriter-terminal_group__VEBZ_","promptLine":"typewriter-terminal_promptLine__uNf3e","cwd":"typewriter-terminal_cwd__nFiQF","symbol":"typewriter-terminal_symbol__HV0UX","cmd":"typewriter-terminal_cmd__pwk6p","tt-blink":"typewriter-terminal_tt-blink__A1y5Z","plain":"typewriter-terminal_plain__Yvt1P","program":"typewriter-terminal_program__eQ0x6","flag":"typewriter-terminal_flag__UkW0x","string":"typewriter-terminal_string__BDYAb","path":"typewriter-terminal_path__JgkK0","op":"typewriter-terminal_op__eEDtW","env":"typewriter-terminal_env__l5Qq9","number":"typewriter-terminal_number__KzZW5","out":"typewriter-terminal_out__pZ6C6","glyph":"typewriter-terminal_glyph__kw6Ve","text":"typewriter-terminal_text__sWKwV","link":"typewriter-terminal_link__wWGoa","progress":"typewriter-terminal_progress__o7Ebt","progressLabel":"typewriter-terminal_progressLabel__NH3vp","bar2":"typewriter-terminal_bar2__wZL_w","fill":"typewriter-terminal_fill__F9Zc_","pct":"typewriter-terminal_pct__ZszXE","spin":"typewriter-terminal_spin__ISYXM","tick":"typewriter-terminal_tick__ciqvo","task":"typewriter-terminal_task__a3mcs","took":"typewriter-terminal_took__8Bh6u","controls":"typewriter-terminal_controls__2Es_7","button":"typewriter-terminal_button__L9OJi","icon":"typewriter-terminal_icon__yaIbp","scrubber":"typewriter-terminal_scrubber__jztgj","track":"typewriter-terminal_track__Ti7zl","trackFill":"typewriter-terminal_trackFill__TkjJ1","mark":"typewriter-terminal_mark__b6PjM","thumbRail":"typewriter-terminal_thumbRail__mL_G9","thumb":"typewriter-terminal_thumb__O3oi4","clock":"typewriter-terminal_clock__rENqf","caption":"typewriter-terminal_caption__EnUjQ","srOnly":"typewriter-terminal_srOnly__v_lin"});
A.regCss(53266, ".demo{display:grid;width:100%;max-width:760px;margin-inline:auto}", {"demo":"demo"});
A.reg(66757, function(__module,__exports,__require){
"use strict";
const __m = (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { TypewriterTerminalDemo: () => C, default: () => E });
  var n = r(95155), a = r(12115), l = r(18310), i = r(64577), s = r(11012), o = r(9005), c = r(79267), d = r(36619), u = r(92298), p = r(73474), m = r(53234), h = r.n(m);
  let y = [
    {
      command: "npx create-next-app@latest acme --ts --app",
      cwd: "~",
      output: [
        { text: "Creating a new Next.js app in ~/acme", tone: "muted" },
        { kind: "progress", label: "Installing dependencies", duration: 1.7 },
        { text: "Success! Created acme in 6.4s", tone: "success" }
      ]
    },
    {
      command: "cd acme && npx shadcn@latest add @uiarc/button",
      output: [
        {
          kind: "task",
          label: "Resolving @uiarc/button",
          done: "0.4s",
          duration: 0.7
        },
        {
          kind: "task",
          label: "Writing components/button.tsx",
          done: "0.2s",
          duration: 0.5
        },
        { text: "Added 2 files to registry/components", tone: "success" }
      ]
    },
    {
      command: "npm run dev",
      cwd: "~/acme",
      output: [
        { text: "Next.js 16.0 with Turbopack", tone: "muted", delay: 0.4 },
        "Local: http://localhost:3000",
        { text: "Ready in 812ms", tone: "success", delay: 0.5 }
      ]
    }
  ], _ = "\u280B\u2819\u2839\u2838\u283C\u2834\u2826\u2827\u2807\u280F", f = (e2, t2 = 0, r2 = 1) => Math.min(r2, Math.max(t2, e2)), x = (e2) => 1 - (1 - f(e2)) ** 3, b = (e2) => {
    let t2 = f(e2);
    return t2 < 0.5 ? 4 * t2 * t2 * t2 : 1 - (-2 * t2 + 2) ** 3 / 2;
  }, k = (e2) => {
    let t2 = f(e2);
    return t2 * t2 * (3 - 2 * t2);
  }, g = (e2) => `${Math.floor(e2 / 60)}:${String(Math.floor(e2 % 60)).padStart(2, "0")}`, w = () => () => {
  };
  function v({ text: e2 }) {
    let t2 = e2.split(/(https?:\/\/\S+)/g);
    return (0, n.jsx)(n.Fragment, {
      children: t2.map(
        (e3, t3) => t3 % 2 ? (0, n.jsx)("span", { className: h().link, children: e3 }, t3) : e3
      )
    });
  }
  let j = {
    success: (0, n.jsx)(i.A, { size: 14, strokeWidth: 2 }),
    warning: (0, n.jsx)(s.A, { size: 14, strokeWidth: 1.75 }),
    danger: (0, n.jsx)(o.A, { size: 14, strokeWidth: 2 })
  };
  function N({
    steps: e2 = y,
    title: t2,
    cwd: r2 = "~",
    symbol: s2 = "$",
    speed: o2 = 1,
    paused: m2 = false,
    loop: A2 = true,
    rows: M2 = 11,
    copyable: C2 = true,
    accent: E2,
    label: S = "Terminal session",
    caption: R,
    className: $,
    style: z
  }) {
    let F, L = (F = (0, a.useSyncExternalStore)(
      w,
      () => true,
      () => false
    ), !!(0, l.I)() && F), V = (0, a.useMemo)(() => {
      let t3, n2, a2, l2, i2;
      return t3 = 0.3, n2 = r2, i2 = (l2 = (a2 = e2.map((e3, r3) => {
        e3.cwd && (n2 = e3.cwd);
        let a3 = (function(e4) {
          let t4, r4 = [], n3 = /(\s+)|('(?:[^'\\]|\\.)*'?|"(?:[^"\\]|\\.)*"?)|(&&|\|\||[|;>]|<)|([^\s'"|;&<>]+)/g, a4 = true;
          for (; t4 = n3.exec(e4); ) {
            let [e5, n4, l4, i4, s4] = t4, o4 = "plain";
            for (let t5 of (n4 ? o4 = "plain" : l4 ? o4 = "string" : i4 ? (o4 = "op", a4 = true) : s4 && (a4 && /^[A-Za-z_][\w]*=/.test(s4) ? o4 = "env" : a4 ? (o4 = "program", a4 = false) : /^--?[\w-]/.test(s4) ? o4 = "flag" : /^\d+(\.\d+)?$/.test(s4) ? o4 = "number" : /[/@.~:]/.test(s4) && (o4 = "path")), e5))
              r4.push({ ch: t5, kind: o4 });
          }
          return r4;
        })(e3.command), l3 = t3, i3 = 0 === r3 ? 0.7 : 0.45, s3 = (function(e4, t4) {
          let r4 = (function(e5) {
            let t5 = 2166136261;
            for (let r5 = 0; r5 < e5.length; r5++)
              t5 = Math.imul(t5 ^ e5.charCodeAt(r5), 16777619);
            return () => {
              let e6 = t5 += 1831565813;
              return e6 = Math.imul(e6 ^ e6 >>> 15, 1 | e6), (((e6 ^= e6 + Math.imul(e6 ^ e6 >>> 7, 61 | e6)) ^ e6 >>> 14) >>> 0) / 4294967296;
            };
          })(t4), n3 = [], a4 = 0, l4 = 0;
          for (let t5 = 0; t5 < e4.length; t5++) {
            let i4 = e4[t5].ch, s4 = e4[t5 - 1]?.ch ?? " ", o4 = 0.048 * (0.6 + 0.8 * r4());
            l4 > 0 ? (o4 *= 0.55, l4--) : 0.14 > r4() && (l4 = 2 + Math.floor(3 * r4())), " " === s4 && (o4 += 0.045 + 0.05 * r4()), /[@_"'&|>A-Z:~]/.test(i4) && (o4 += 0.035), /[-/.]/.test(i4) && (o4 += 0.018), " " === i4 && 0.18 > r4() && (o4 += 0.12 + 0.12 * r4()), a4 += o4, n3.push(a4);
          }
          return n3;
        })(a3, e3.command + r3).map((e4) => e4 + l3 + i3), o3 = (s3[s3.length - 1] ?? l3 + i3) + 0.34, c2 = o3 + 0.16, d2 = (e3.output ?? []).map((e4, t4) => {
          let r4 = "string" == typeof e4 ? { kind: "text", text: e4 } : e4;
          if ("progress" === r4.kind) {
            let e5 = c2, t5 = e5 + (r4.duration ?? 1.4);
            return c2 = t5 + 0.1, { kind: "progress", label: r4.label, t0: e5, t1: t5 };
          }
          if ("task" === r4.kind) {
            let e5 = c2, t5 = e5 + (r4.duration ?? 0.8);
            return c2 = t5 + 0.08, {
              kind: "task",
              label: r4.label,
              done: r4.done,
              t0: e5,
              t1: t5
            };
          }
          let n3 = c2 + (r4.delay ?? 0.07 * (0 !== t4));
          return c2 = n3 + 0.07, {
            kind: "text",
            text: r4.text,
            tone: r4.tone ?? "default",
            t0: n3
          };
        });
        return t3 = c2 + (e3.pause ?? 0.75), {
          command: e3.command,
          cwd: n2,
          chars: a3,
          times: s3,
          tPrompt: l3,
          tEnter: o3,
          outputs: d2
        };
      })).length ? t3 : 0) + 0.2, {
        steps: a2,
        tFinal: l2,
        finalCwd: n2,
        end: i2,
        clear0: i2 + 2.6,
        loopEnd: i2 + 2.6 + 0.8,
        marks: a2.map((e3) => e3.tPrompt)
      };
    }, [e2, r2]), [O, P] = (0, a.useState)(false), [T, W] = (0, a.useState)(false), [q, I] = (0, a.useState)(""), D = (0, a.useRef)(null), B = (0, a.useRef)(null), G = (0, a.useRef)(null), Z = (0, a.useRef)(null), Y = (0, a.useRef)(null), X = (0, a.useRef)(null), H = (0, a.useRef)(null), K = (0, a.useRef)(null), Q = (0, a.useRef)(/* @__PURE__ */ new WeakMap()), U = (0, a.useRef)({
      t: 0,
      rate: 0,
      rateV: 0,
      last: 0,
      frame: 0,
      running: false,
      visible: true,
      scrubbing: false,
      seek: null,
      scroll: 0,
      scrollV: 0,
      scrollGoal: 0,
      scrollAim: 0,
      sig: "",
      typing: false,
      lastTime: "",
      lastStep: -2,
      ended: false
    }), J = !m2 && !O && !T, ee = (0, a.useRef)({
      playing: J,
      speed: o2,
      loop: A2,
      reduced: L,
      plan: V
    });
    (0, a.useLayoutEffect)(() => {
      ee.current = { playing: J, speed: o2, loop: A2, reduced: L, plan: V };
    });
    let et = (0, a.useCallback)((e3, t3, r3) => {
      if (!e3) return;
      let n2 = Q.current, a2 = n2.get(e3);
      a2 || (a2 = {}, n2.set(e3, a2));
      let l2 = r3 ?? "\0";
      if (a2[t3] !== l2) {
        if (a2[t3] = l2, t3.startsWith("@"))
          return void e3.style.setProperty(t3.slice(1), r3 ?? "");
        if ("#text" === t3) {
          e3.textContent = r3 ?? "";
          return;
        }
        null === r3 ? e3.removeAttribute(t3) : e3.setAttribute(t3, r3);
      }
    }, []), er = (0, a.useCallback)((e3) => {
      let t3 = ee.current.plan.marks, r3 = -1;
      for (let n2 = 0; n2 < t3.length; n2++) e3 >= t3[n2] - 1e-3 && (r3 = n2);
      return r3;
    }, []), en = (0, a.useCallback)(
      (e3, t3, r3) => {
        let { plan: n2 } = ee.current, a2 = U.current, l2 = G.current, i2 = B.current;
        if (!l2 || !i2) return;
        let s3 = l2.querySelectorAll("[data-line]"), o3 = e3 >= n2.clear0 ? n2.end : e3, c2 = 0, d2 = 0, u2 = 0, p2 = false;
        for (let e4 of n2.steps) {
          let t4 = s3[c2++], r4 = o3 >= e4.tPrompt;
          et(t4, "data-on", r4 ? "" : null), r4 && d2++;
          let n3 = x((o3 - e4.tPrompt) / 0.22);
          et(t4, "@opacity", n3 >= 1 ? "" : n3.toFixed(3));
          let a3 = 0;
          for (; a3 < e4.times.length && e4.times[a3] <= o3; ) a3++;
          let l3 = t4?.querySelector("[data-cmd]");
          if (l3) {
            let t5 = l3.children;
            for (let e5 = 0; e5 < t5.length; e5++)
              et(t5[e5], "data-on", e5 < a3 ? "" : null);
            let n4 = r4 && o3 < e4.tEnter;
            et(l3, "data-caret", n4 ? "" : null), n4 && (u2 = a3, p2 = a3 > 0 && o3 - e4.times[a3 - 1] < 0.45 && a3 < e4.times.length);
          }
          for (let t5 of e4.outputs) {
            let e5 = s3[c2++], r5 = o3 >= t5.t0;
            if (et(e5, "data-on", r5 ? "" : null), !r5) continue;
            d2++;
            let n4 = x((o3 - t5.t0) / 0.22);
            if (et(e5, "@opacity", n4 >= 1 ? "" : n4.toFixed(3)), et(
              e5,
              "@transform",
              n4 >= 1 ? "" : `translate3d(0, ${((1 - n4) * 5).toFixed(2)}px, 0)`
            ), "progress" === t5.kind) {
              let r6 = (o3 - t5.t0) / (t5.t1 - t5.t0), n5 = (function(e6) {
                let t6 = [
                  [0, 0],
                  [0.22, 0.34],
                  [0.42, 0.5],
                  [0.6, 0.55],
                  [0.84, 0.9],
                  [1, 1]
                ], r7 = f(e6);
                for (let e7 = 1; e7 < t6.length; e7++) {
                  let [n6, a4] = t6[e7 - 1], [l4, i3] = t6[e7];
                  if (r7 <= l4) return a4 + (i3 - a4) * k((r7 - n6) / (l4 - n6));
                }
                return 1;
              })(r6);
              et(
                e5.querySelector("[data-fill]"),
                "@transform",
                `translate3d(${((n5 - 1) * 100).toFixed(3)}%, 0, 0)`
              ), et(
                e5.querySelector("[data-pct]"),
                "#text",
                `${Math.round(100 * n5)}%`
              ), et(e5, "data-done", r6 >= 1 ? "" : null);
            } else if ("task" === t5.kind) {
              let r6 = o3 >= t5.t1;
              et(e5, "data-done", r6 ? "" : null), r6 || et(
                e5.querySelector("[data-spin]"),
                "#text",
                _[Math.floor((o3 - t5.t0) / 0.08) % _.length]
              );
            }
          }
        }
        let m3 = s3[c2], h2 = o3 >= n2.tFinal && n2.steps.length > 0;
        et(m3, "data-on", h2 ? "" : null), et(
          m3,
          "@opacity",
          h2 && o3 - n2.tFinal < 0.22 ? x((o3 - n2.tFinal) / 0.22).toFixed(3) : ""
        ), h2 && d2++, et(D.current, "data-typing", p2 ? "" : null);
        let y2 = `${d2}|${u2}`;
        if (y2 !== a2.sig && (a2.sig = y2, a2.scrollGoal = Math.max(0, l2.offsetHeight - i2.clientHeight)), r3 || e3 < 0.05)
          a2.scroll = a2.scrollAim = a2.scrollGoal, a2.scrollV = 0;
        else {
          a2.scrollAim += (a2.scrollGoal - a2.scrollAim) * (1 - Math.exp(-(22 * t3)));
          let e4 = 169 * (a2.scrollAim - a2.scroll) - 26 * a2.scrollV;
          a2.scrollV += e4 * t3, a2.scroll += a2.scrollV * t3, 0.05 > Math.abs(a2.scrollGoal - a2.scroll) && 0.05 > Math.abs(a2.scrollV) && (a2.scroll = a2.scrollAim = a2.scrollGoal, a2.scrollV = 0);
        }
        let w2 = e3 >= n2.clear0 ? b((e3 - n2.clear0) / 0.8) : 0;
        et(
          l2,
          "@transform",
          `translate3d(0, ${(-a2.scroll - 18 * w2).toFixed(2)}px, 0)`
        ), et(l2, "@opacity", w2 > 0 ? (1 - w2).toFixed(3) : "");
        let v2 = e3 >= n2.clear0 ? 1 - b((e3 - n2.clear0) / 0.8) : f(e3 / n2.end);
        et(X.current, "@transform", `scaleX(${v2.toFixed(4)})`), et(
          H.current,
          "@transform",
          `translate3d(${(100 * v2).toFixed(3)}cqw, 0, 0)`
        );
        let j2 = v2 * n2.end, N2 = `${g(j2)} / ${g(n2.end)}`;
        N2 !== a2.lastTime && (a2.lastTime = N2, et(K.current, "#text", N2), et(Y.current, "aria-valuenow", String(Math.round(j2))));
        let A3 = er(j2);
        A3 !== a2.lastStep && (a2.lastStep = A3, et(
          Y.current,
          "aria-valuetext",
          A3 < 0 ? "Start" : `Step ${A3 + 1} of ${n2.steps.length}: ${n2.steps[A3].command}`
        ));
      },
      [et, er]
    ), ea = (0, a.useRef)(() => {
    }), el = (0, a.useCallback)(() => {
      let e3 = U.current;
      if (e3.running || !e3.visible || ee.current.reduced) return;
      e3.running = true, e3.last = performance.now();
      let t3 = (r3) => {
        let { playing: n2, speed: a2, loop: l2, plan: i2 } = ee.current, s3 = Math.min(0.05, (r3 - e3.last) / 1e3);
        if (e3.last = r3, e3.seek) {
          let t4 = (r3 - e3.seek.start) / (1e3 * e3.seek.dur);
          e3.t = e3.seek.from + (e3.seek.to - e3.seek.from) * b(t4), t4 >= 1 && (e3.t = e3.seek.to, e3.seek = null);
        } else if (e3.scrubbing) e3.rate = 0, e3.rateV = 0;
        else {
          let t4 = n2 ? Math.max(0, a2) : 0, r4 = 144 * (t4 - e3.rate) - 24 * e3.rateV;
          e3.rateV += r4 * s3, e3.rate += e3.rateV * s3, 1e-3 > Math.abs(t4 - e3.rate) && 1e-3 > Math.abs(e3.rateV) && (e3.rate = t4, e3.rateV = 0), e3.t += s3 * e3.rate, e3.t >= i2.loopEnd ? l2 ? (e3.t -= i2.loopEnd, e3.scroll = 0, e3.scrollAim = 0, e3.scrollV = 0, e3.sig = "") : (e3.t = i2.loopEnd, e3.rate = 0, e3.rateV = 0, e3.ended || (e3.ended = true, W(true))) : !l2 && e3.t >= i2.clear0 && (e3.t = i2.clear0 - 1e-4, e3.rate = 0, e3.rateV = 0, e3.ended || (e3.ended = true, W(true)));
        }
        if (en(e3.t, s3, false), !e3.seek && !e3.scrubbing && 0 === e3.rate && !(n2 && a2 > 0 && !e3.ended) && e3.scroll === e3.scrollGoal || !e3.visible) {
          e3.running = false;
          return;
        }
        e3.frame = requestAnimationFrame(t3);
      };
      e3.frame = requestAnimationFrame(t3);
    }, [en]);
    (0, a.useLayoutEffect)(() => {
      ea.current = el;
    }, [el]), (0, a.useLayoutEffect)(() => {
      let e3 = U.current;
      if (Q.current = /* @__PURE__ */ new WeakMap(), e3.sig = "", e3.lastTime = "", e3.lastStep = -2, L) {
        e3.t = V.end, e3.seek = null, en(e3.t, 0, true);
        return;
      }
      e3.t > V.loopEnd && (e3.t = 0), en(e3.t, 0, true), el();
    }, [V, L, en, el]), (0, a.useEffect)(() => {
      L || el();
    }, [J, o2, L, el]), (0, a.useEffect)(() => {
      let e3 = D.current, t3 = U.current;
      if (!e3) return;
      let r3 = true, n2 = () => {
        t3.visible = r3 && !document.hidden, t3.visible ? ea.current() : (cancelAnimationFrame(t3.frame), t3.running = false);
      }, a2 = new IntersectionObserver(([e4]) => {
        r3 = e4.isIntersecting, n2();
      });
      a2.observe(e3), document.addEventListener("visibilitychange", n2);
      let l2 = new ResizeObserver(() => {
        t3.sig = "", (ee.current.reduced || !t3.running) && en(t3.t, 0, true);
      });
      return B.current && l2.observe(B.current), () => {
        a2.disconnect(), l2.disconnect(), document.removeEventListener("visibilitychange", n2), cancelAnimationFrame(t3.frame), t3.running = false;
      };
    }, [en]);
    let ei = (0, a.useCallback)(
      (e3) => {
        let t3 = er(e3);
        return t3 < 0 ? "Start of the session" : `Step ${t3 + 1} of ${V.steps.length}: ${V.steps[t3].command}`;
      },
      [V, er]
    ), es = (0, a.useCallback)(
      (e3, t3) => {
        let r3 = U.current, n2 = f(e3, 0, V.end);
        if (r3.ended && n2 < V.end && (r3.ended = false, W(false)), ee.current.reduced || t3 <= 0) {
          r3.seek = null, r3.t = n2, en(r3.t, 0, true);
          return;
        }
        r3.seek = {
          from: r3.t >= V.clear0 ? V.end : r3.t,
          to: n2,
          start: performance.now(),
          dur: t3
        }, r3.rate = 0, r3.rateV = 0, el();
      },
      [en, V, el]
    ), eo = () => {
      T ? ec() : (P((e3) => !e3), I(J ? "Paused" : "Playing"));
    };
    function ec() {
      let e3 = U.current, t3 = e3.t >= V.clear0 ? V.end : e3.t;
      e3.ended = false, W(false), P(false), I("Replaying from the start"), es(0, Math.min(1.1, 0.35 + 0.05 * t3));
    }
    let ed = (0, a.useRef)(null), eu = (e3) => {
      let t3 = ed.current, r3 = U.current;
      t3 && (r3.t = f((e3 - t3.left) / t3.width) * V.end, r3.seek = null, r3.ended && r3.t < V.end && (r3.ended = false, W(false)), en(r3.t, 1 / 60, false), el());
    }, ep = (e3) => {
      let t3 = ed.current, r3 = U.current;
      if (!t3 || t3.id !== e3.pointerId) return;
      ed.current = null, r3.scrubbing = false, D.current?.removeAttribute("data-scrubbing");
      let n2 = r3.t / V.end * t3.width, a2 = null;
      for (let e4 of [...V.marks, V.end])
        12 > Math.abs(e4 / V.end * t3.width - n2) && (a2 = e4);
      null !== a2 && Math.abs(a2 - r3.t) > 1e-3 ? es(a2, 0.28) : el(), I(ei(a2 ?? r3.t));
    }, em = e2.map((e3) => e3.command).join("\n"), eh = { ...z, ...E2 ? { "--tt-accent": E2 } : null, "--tt-rows": M2 }, ey = (e3) => (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)("span", { className: h().cwd, children: e3 }),
        (0, n.jsx)("span", { className: h().symbol, children: s2 })
      ]
    });
    return (0, n.jsxs)("figure", {
      ref: D,
      className: [h().root, $].filter(Boolean).join(" "),
      style: eh,
      "aria-label": S,
      "data-reduced": L ? "" : void 0,
      children: [
        (0, n.jsxs)("div", {
          className: h().window,
          children: [
            (0, n.jsxs)("div", {
              className: h().bar,
              children: [
                (0, n.jsxs)("span", {
                  className: h().lights,
                  "aria-hidden": "true",
                  children: [
                    (0, n.jsx)("i", {}),
                    (0, n.jsx)("i", {}),
                    (0, n.jsx)("i", {})
                  ]
                }),
                (0, n.jsx)("span", {
                  className: h().title,
                  children: t2 ?? "zsh"
                }),
                (0, n.jsx)("span", {
                  className: h().barEnd,
                  children: C2 && e2.length > 0 && (0, n.jsx)(p.CopyButton, {
                    value: em,
                    label: "Copy commands",
                    iconOnly: true,
                    variant: "plain"
                  })
                })
              ]
            }),
            (0, n.jsx)("div", {
              ref: B,
              className: h().viewport,
              "aria-hidden": "true",
              children: (0, n.jsxs)("div", {
                ref: G,
                className: h().content,
                children: [
                  V.steps.map(
                    (e3, t3) => (0, n.jsxs)(
                      "div",
                      {
                        className: h().group,
                        children: [
                          (0, n.jsxs)("div", {
                            "data-line": true,
                            className: h().promptLine,
                            children: [
                              ey(e3.cwd),
                              (0, n.jsx)("span", {
                                "data-cmd": true,
                                className: h().cmd,
                                children: e3.chars.map(
                                  (e4, t4) => (0, n.jsx)(
                                    "span",
                                    { className: h()[e4.kind], children: e4.ch },
                                    t4
                                  )
                                )
                              })
                            ]
                          }),
                          e3.outputs.map(
                            (e4, t4) => "progress" === e4.kind ? (0, n.jsxs)(
                              "div",
                              {
                                "data-line": true,
                                className: `${h().out} ${h().progress}`,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: h().progressLabel,
                                    children: e4.label
                                  }),
                                  (0, n.jsx)("span", {
                                    className: h().bar2,
                                    children: (0, n.jsx)("span", {
                                      "data-fill": true,
                                      className: h().fill
                                    })
                                  }),
                                  (0, n.jsx)("span", {
                                    "data-pct": true,
                                    className: h().pct,
                                    children: "0%"
                                  })
                                ]
                              },
                              t4
                            ) : "task" === e4.kind ? (0, n.jsxs)(
                              "div",
                              {
                                "data-line": true,
                                className: `${h().out} ${h().task}`,
                                children: [
                                  (0, n.jsxs)("span", {
                                    className: h().glyph,
                                    children: [
                                      (0, n.jsx)("span", {
                                        "data-spin": true,
                                        className: h().spin,
                                        children: _[0]
                                      }),
                                      (0, n.jsx)(i.A, {
                                        className: h().tick,
                                        size: 14,
                                        strokeWidth: 2
                                      })
                                    ]
                                  }),
                                  (0, n.jsx)("span", {
                                    children: e4.label
                                  }),
                                  e4.done && (0, n.jsx)("span", {
                                    className: h().took,
                                    children: e4.done
                                  })
                                ]
                              },
                              t4
                            ) : (0, n.jsxs)(
                              "div",
                              {
                                "data-line": true,
                                className: h().out,
                                "data-tone": e4.tone,
                                children: [
                                  j[e4.tone] && (0, n.jsx)("span", {
                                    className: h().glyph,
                                    children: j[e4.tone]
                                  }),
                                  (0, n.jsx)("span", {
                                    className: h().text,
                                    children: "" === e4.text ? " " : (0, n.jsx)(v, { text: e4.text })
                                  })
                                ]
                              },
                              t4
                            )
                          )
                        ]
                      },
                      `s${t3}`
                    )
                  ),
                  (0, n.jsx)("div", {
                    className: h().group,
                    children: (0, n.jsxs)("div", {
                      "data-line": true,
                      className: h().promptLine,
                      children: [
                        ey(V.finalCwd),
                        (0, n.jsx)("span", {
                          "data-cmd": true,
                          "data-caret": true,
                          className: h().cmd
                        })
                      ]
                    })
                  })
                ]
              })
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: h().controls,
          children: [
            !L && (0, n.jsxs)("button", {
              type: "button",
              className: h().button,
              onClick: eo,
              "aria-label": T ? "Replay session" : J ? "Pause typing" : "Play typing",
              children: [
                (0, n.jsx)("span", {
                  className: h().icon,
                  "data-show": J ? "" : void 0,
                  children: (0, n.jsx)(c.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }),
                (0, n.jsx)("span", {
                  className: h().icon,
                  "data-show": J ? void 0 : "",
                  children: (0, n.jsx)(d.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, n.jsx)("div", {
              ref: Y,
              className: h().scrubber,
              role: "slider",
              tabIndex: 0,
              "aria-label": "Session position",
              "aria-valuemin": 0,
              "aria-valuemax": Math.round(V.end),
              "aria-valuenow": 0,
              "aria-valuetext": "Start",
              onPointerDown: (e3) => {
                if (0 !== e3.button || !Z.current) return;
                let t3 = Z.current.getBoundingClientRect();
                ed.current = {
                  left: t3.left,
                  width: Math.max(1, t3.width),
                  id: e3.pointerId
                }, e3.currentTarget.setPointerCapture(e3.pointerId), U.current.scrubbing = true, D.current?.setAttribute("data-scrubbing", ""), Y.current?.focus({ preventScroll: true }), eu(e3.clientX);
              },
              onPointerMove: (e3) => {
                ed.current?.id === e3.pointerId && eu(e3.clientX);
              },
              onPointerUp: ep,
              onPointerCancel: ep,
              onKeyDown: (e3) => {
                let t3 = U.current, r3 = t3.t >= V.clear0 ? V.end : t3.seek ? t3.seek.to : t3.t, n2 = [...V.marks, V.end], a2 = null;
                if ("ArrowRight" === e3.key || "ArrowUp" === e3.key || "PageDown" === e3.key)
                  a2 = n2.find((e4) => e4 > r3 + 0.05) ?? V.end;
                else if ("ArrowLeft" === e3.key || "ArrowDown" === e3.key || "PageUp" === e3.key)
                  a2 = [...n2].reverse().find((e4) => e4 < r3 - 0.3) ?? 0;
                else if ("Home" === e3.key) a2 = 0;
                else if ("End" === e3.key) a2 = V.end;
                else if (" " === e3.key || "k" === e3.key) {
                  e3.preventDefault(), eo();
                  return;
                }
                null !== a2 && (e3.preventDefault(), es(a2, 0.42), I(ei(a2)));
              },
              children: (0, n.jsxs)("div", {
                ref: Z,
                className: h().track,
                children: [
                  (0, n.jsx)("span", { ref: X, className: h().trackFill }),
                  V.marks.slice(1).map(
                    (e3, t3) => (0, n.jsx)(
                      "span",
                      {
                        className: h().mark,
                        style: { left: `${e3 / V.end * 100}%` }
                      },
                      t3
                    )
                  ),
                  (0, n.jsx)("span", {
                    ref: H,
                    className: h().thumbRail,
                    children: (0, n.jsx)("span", { className: h().thumb })
                  })
                ]
              })
            }),
            (0, n.jsx)("span", {
              ref: K,
              className: h().clock,
              "aria-hidden": "true",
              children: `0:00 / ${g(V.end)}`
            }),
            !L && (0, n.jsx)("button", {
              type: "button",
              className: h().button,
              onClick: ec,
              "aria-label": "Replay from the start",
              children: (0, n.jsx)(u.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        R && (0, n.jsx)("figcaption", { className: h().caption, children: R }),
        (0, n.jsx)("ol", {
          className: h().srOnly,
          children: V.steps.map(
            (e3, t3) => (0, n.jsxs)(
              "li",
              {
                children: [
                  `Command: ${e3.command}. `,
                  e3.outputs.map(
                    (e4) => "text" === e4.kind ? e4.text : "progress" === e4.kind ? `${e4.label}, complete.` : `${e4.label}, done.`
                  ).filter(Boolean).join(" ")
                ]
              },
              t3
            )
          )
        }),
        (0, n.jsx)("span", {
          className: h().srOnly,
          role: "status",
          "aria-live": "polite",
          children: q
        })
      ]
    });
  }
  var A = r(53266), M = r.n(A);
  function C() {
    return (0, n.jsx)("div", {
      className: M().demo,
      "data-canvas": "wide",
      children: (0, n.jsx)(N, {})
    });
  }
  let E = C;
};

__m(__module,__exports,__require);
});
A.cssFor("typewriter-terminal", [53234,53266]);
A.item("typewriter-terminal", {entry:66757, export:"TypewriterTerminalDemo", kind:"component", tier:"pro", unresolved:[]});
})();