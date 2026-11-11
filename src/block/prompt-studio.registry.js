/* prompt-studio (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(12053, ".kbd{--kbd-h:22px;--kbd-pad:6px;--kbd-radius:6px;--kbd-gap:3px;--kbd-ledge:1px;display:inline-flex;align-items:center;gap:var(--kbd-gap);margin:0;padding:0 0 var(--kbd-ledge);font:inherit;font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:0;line-height:1;vertical-align:middle;white-space:nowrap}\n.sm{--kbd-h:18px;--kbd-pad:4px;--kbd-radius:5px;--kbd-gap:2px;font-size:11px}\n.md{--kbd-h:22px}\n.lg{--kbd-h:28px;--kbd-pad:8px;--kbd-radius:8px;--kbd-gap:4px;--kbd-ledge:2px;font-size:13px}\n.key,.slot{display:inline-flex}\n.key{--kbd-face:var(--surface);--kbd-edge:color-mix(in oklab,var(--foreground) 13%,var(--surface));--kbd-under:color-mix(in oklab,var(--foreground) 17%,var(--surface));box-sizing:border-box;min-width:var(--kbd-h);height:var(--kbd-h);align-items:center;justify-content:center;padding:0 var(--kbd-pad);border:1px solid var(--kbd-edge);border-radius:var(--kbd-radius);background:var(--kbd-face);box-shadow:0 var(--kbd-ledge) 0 var(--kbd-under);color:var(--text-secondary);font:inherit;font-variant-numeric:tabular-nums;transition:transform var(--duration-spring) var(--ease-spring),box-shadow var(--duration-standard) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.key[data-pressed]{transform:translateY(var(--kbd-ledge));box-shadow:0 0 0 var(--kbd-under);background:color-mix(in oklab,var(--foreground) 4%,var(--kbd-face));color:var(--foreground);transition-duration:50ms;transition-timing-function:var(--ease-standard)}\n:root[data-theme=dark] .key{--kbd-face:var(--surface-raised);--kbd-edge:color-mix(in oklab,var(--foreground) 14%,var(--surface-raised));--kbd-under:oklch(0% 0 0/.5)}\n@media (prefers-reduced-motion:reduce){.key,.key[data-pressed]{transform:none;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard),box-shadow var(--duration-instant) var(--ease-standard)}\n.glyph{display:inline-flex;align-items:center}\n.hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(23116, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var r = t(51811);
  let i = {
    name: "git-compare-arrows",
    size: 24,
    node: [
      ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
      ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
      ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
      ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }],
      ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }]
    ]
  };
  i.node;
  let n = (0, r.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(25898, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={anchor:"popover_anchor__Mcc5T",content:"popover_content__FmDK_","popover-exit":"popover_popover-exit__j6_xO"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(40093, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, {
    Mz: () => Z,
    UC: () => H,
    ZL: () => q,
    bL: () => K,
    bm: () => Q,
    i3: () => U,
    l9: () => $
  });
  var r = n(12115), o = n(70379), a = n(47527), i = n(68599), s = n(19416), l = n(32007), u = n(69885), c = n(89971), d = n(80878), p = n(19040), f = n(83935), h = n(55897), b = n(42442), y = n(59322), v = n(22954), m = n(5174), _ = n(95155), g = Object.defineProperty, x = (e2, t2) => g(e2, "name", { value: t2, configurable: true }), j = "Popover", [C, P] = (0, i.A)(j, [d.Bk]), A = (0, d.Bk)(), [O, w] = C(j), k = x((e2) => {
    let {
      __scopePopover: t2,
      children: n2,
      open: o2,
      defaultOpen: a2,
      onOpenChange: i2,
      modal: s2 = false
    } = e2, l2 = A(t2), u2 = r.useRef(null), [p2, f2] = r.useState(false), [h2, b2] = (0, y.i)({
      prop: o2,
      defaultProp: a2 ?? false,
      onChange: i2,
      caller: j
    });
    return (0, _.jsx)(d.bL, {
      ...l2,
      children: (0, _.jsx)(O, {
        scope: t2,
        contentId: (0, c.B)(),
        triggerRef: u2,
        open: h2,
        onOpenChange: b2,
        onOpenToggle: r.useCallback(() => b2((e3) => !e3), [b2]),
        hasCustomAnchor: p2,
        onCustomAnchorAdd: r.useCallback(() => f2(true), []),
        onCustomAnchorRemove: r.useCallback(() => f2(false), []),
        modal: s2,
        children: n2
      })
    });
  }, "Popover"), R = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...o2 } = e2, a2 = w("PopoverAnchor", n2), i2 = A(n2), { onCustomAnchorAdd: s2, onCustomAnchorRemove: l2 } = a2;
      return r.useEffect(() => (s2(), () => l2()), [s2, l2]), (0, _.jsx)(d.Mz, { ...i2, ...o2, ref: t2 });
    }, "PopoverAnchor")
  ), N = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, i2 = w("PopoverTrigger", n2), s2 = A(n2), l2 = (0, a.s)(t2, i2.triggerRef), u2 = (0, _.jsx)(h.sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i2.open,
        "aria-controls": i2.open ? i2.contentId : void 0,
        "data-state": Y(i2.open),
        ...r2,
        ref: l2,
        onClick: (0, o.mK)(e2.onClick, i2.onOpenToggle)
      });
      return i2.hasCustomAnchor ? u2 : (0, _.jsx)(d.Mz, { asChild: true, ...s2, children: u2 });
    }, "PopoverTrigger")
  ), E = "PopoverPortal", [T, F] = C(E, { forceMount: void 0 }), M = x((e2) => {
    let { __scopePopover: t2, forceMount: n2, children: r2, container: o2 } = e2, a2 = w(E, t2);
    return (0, _.jsx)(T, {
      scope: t2,
      forceMount: n2,
      children: (0, _.jsx)(f.C, {
        present: n2 || a2.open,
        children: (0, _.jsx)(p.Z, { asChild: true, container: o2, children: r2 })
      })
    });
  }, "PopoverPortal"), L = "PopoverContent", D = r.forwardRef(
    x(function(e2, t2) {
      let n2 = F(L, e2.__scopePopover), { forceMount: r2 = n2.forceMount, ...o2 } = e2, a2 = w(L, e2.__scopePopover);
      return (0, _.jsx)(f.C, {
        present: r2 || a2.open,
        children: a2.modal ? (0, _.jsx)(I, { ...o2, ref: t2 }) : (0, _.jsx)(z, { ...o2, ref: t2 })
      });
    }, "PopoverContent")
  ), S = (0, b.TL)("PopoverContent.RemoveScroll"), I = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), i2 = r.useRef(null), s2 = (0, a.s)(t2, i2), l2 = r.useRef(false);
      return r.useEffect(() => {
        let e3 = i2.current;
        if (e3) return (0, v.Eq)(e3);
      }, []), (0, _.jsx)(m.A, {
        as: S,
        allowPinchZoom: true,
        children: (0, _.jsx)(B, {
          ...e2,
          ref: s2,
          trapFocus: n2.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, o.mK)(e2.onCloseAutoFocus, (e3) => {
            e3.preventDefault(), l2.current || n2.triggerRef.current?.focus();
          }),
          onPointerDownOutside: (0, o.mK)(
            e2.onPointerDownOutside,
            (e3) => {
              let t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
              l2.current = 2 === t3.button || n3;
            },
            { checkForDefaultPrevented: false }
          ),
          onFocusOutside: (0, o.mK)(
            e2.onFocusOutside,
            (e3) => e3.preventDefault(),
            { checkForDefaultPrevented: false }
          )
        })
      });
    }, "PopoverContentModal")
  ), z = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), o2 = r.useRef(false), a2 = r.useRef(false);
      return (0, _.jsx)(B, {
        ...e2,
        ref: t2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (t3) => {
          e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (o2.current || n2.triggerRef.current?.focus(), t3.preventDefault()), o2.current = false, a2.current = false;
        },
        onInteractOutside: (t3) => {
          e2.onInteractOutside?.(t3), t3.defaultPrevented || (o2.current = true, "pointerdown" === t3.detail.originalEvent.type && (a2.current = true));
          let r2 = t3.target;
          n2.triggerRef.current?.contains(r2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && a2.current && t3.preventDefault();
        }
      });
    }, "PopoverContentNonModal")
  ), B = r.forwardRef(
    x(function(e2, t2) {
      let {
        __scopePopover: n2,
        trapFocus: r2,
        onOpenAutoFocus: o2,
        onCloseAutoFocus: a2,
        disableOutsidePointerEvents: i2,
        onEscapeKeyDown: c2,
        onPointerDownOutside: p2,
        onFocusOutside: f2,
        onInteractOutside: h2,
        ...b2
      } = e2, y2 = w(L, n2), v2 = A(n2);
      return (0, l.Oh)(), (0, _.jsx)(u.n, {
        asChild: true,
        loop: true,
        trapped: r2,
        onMountAutoFocus: o2,
        onUnmountAutoFocus: a2,
        children: (0, _.jsx)(s.qW, {
          asChild: true,
          disableOutsidePointerEvents: i2,
          onInteractOutside: h2,
          onEscapeKeyDown: c2,
          onPointerDownOutside: p2,
          onFocusOutside: f2,
          onDismiss: () => y2.onOpenChange(false),
          deferPointerDownOutside: true,
          children: (0, _.jsx)(d.UC, {
            "data-state": Y(y2.open),
            role: "dialog",
            id: y2.contentId,
            ...v2,
            ...b2,
            ref: t2,
            style: {
              ...b2.style,
              "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
            }
          })
        })
      });
    }, "PopoverContentImpl")
  ), W = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, a2 = w("PopoverClose", n2);
      return (0, _.jsx)(h.sG.button, {
        type: "button",
        ...r2,
        ref: t2,
        onClick: (0, o.mK)(e2.onClick, () => a2.onOpenChange(false))
      });
    }, "PopoverClose")
  ), G = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, o2 = A(n2);
      return (0, _.jsx)(d.i3, { ...o2, ...r2, ref: t2 });
    }, "PopoverArrow")
  );
  function Y(e2) {
    return e2 ? "open" : "closed";
  }
  x(Y, "getState");
  var K = k, Z = R, $ = N, q = M, H = D, Q = W, U = G;
}

__m(__module,__exports,__require);
});
A.reg(52436, function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.r(t), a.d(t, { PromptStudio: () => e$, default: () => eR });
  var r = a(95155), n = a(12115), s = a(18310), i = a(80642), o = a(25354), l = a(36619), d = a(40852), u = a(7770), c = a(51288), p = a(76266), m = a(67752);
  let h = [
    {
      id: "claude-sonnet-5-5",
      name: "Claude Sonnet 5.5",
      short: "Sonnet 5.5",
      mark: "claude",
      input: 2,
      output: 10,
      defaultEffort: "high"
    },
    {
      id: "claude-opus-5-5",
      name: "Claude Opus 5.5",
      short: "Opus 5.5",
      mark: "claude",
      input: 4,
      output: 20,
      defaultEffort: "medium"
    },
    {
      id: "claude-haiku-5-5",
      name: "Claude Haiku 5.5",
      short: "Haiku 5.5",
      mark: "claude",
      input: 0.1,
      output: 0.5,
      defaultEffort: "medium"
    },
    {
      id: "gpt-6-1-sol",
      name: "GPT-6.1 Sol",
      short: "GPT-6.1 Sol",
      mark: "openai",
      input: 5,
      output: 30,
      sample: true,
      defaultEffort: "medium"
    },
    {
      id: "gemini-4-argon",
      name: "Gemini 4 Argon",
      short: "Gemini 4 Argon",
      mark: "gemini",
      input: 3.5,
      output: 21,
      sample: true,
      defaultEffort: "medium"
    }
  ], f = ["low", "medium", "high", "xhigh", "max"], g = {
    low: "Low",
    medium: "Medium",
    high: "High",
    xhigh: "Extra high",
    max: "Max"
  }, _ = { low: "Low", medium: "Med", high: "High", xhigh: "XHigh", max: "Max" }, v = { low: 480, medium: 620, high: 780, xhigh: 960, max: 1150 }, y = (e2) => {
    let t2 = m.c0.find((t3) => t3.id === e2);
    return { name: t2?.name ?? e2, avatar: t2?.src };
  }, x = "You are a support agent for Fernwood, an online home goods store.", b = "- Greet {{customer_name}} by first name, once.", w = "- Quote order {{order_id}} so they can find it.", j = "- Never promise a date the carrier has not confirmed.", k = "Reply to the latest message from {{customer_name}} about order {{order_id}}.", N = [
    {
      id: "v4",
      label: "v4",
      createdAt: "2026-10-16T15:20:00Z",
      author: y("hannah-walsh"),
      message: "Escalate when the policy falls short",
      system: `${x} Write a warm, specific reply in under 120 words.

Follow this policy exactly: {{policy}}

${b}
${w}
${j}
- If the policy does not cover the request, offer to escalate to a team lead.`,
      user: `${k} Sign off as Fernwood Support.`
    },
    {
      id: "v3",
      label: "v3",
      createdAt: "2026-10-09T10:05:00Z",
      author: y("jordan-reyes"),
      message: "Shorter replies that quote the order",
      system: `${x} Write a warm, specific reply in under 150 words.

Follow this policy exactly: {{policy}}

${b}
${w}
${j}`,
      user: k
    },
    {
      id: "v2",
      label: "v2",
      createdAt: "2026-10-02T16:40:00Z",
      author: y("daniel-kim"),
      message: "Greet by name, no promised dates",
      system: `${x} Reply politely and help with the order.

Follow this policy exactly: {{policy}}

${b}
${j}`,
      user: k
    },
    {
      id: "v1",
      label: "v1",
      createdAt: "2026-09-24T09:15:00Z",
      author: y("hannah-walsh"),
      message: "First draft from the support macros",
      system: `${x} Answer the customer politely.

Refund policy: {{policy}}`,
      user: "Reply to {{customer_name}}."
    }
  ], C = ["customer_name", "order_id", "policy"], A = [
    {
      id: "late",
      label: "Late order",
      values: {
        customer_name: "Priya Raman",
        order_id: "FW-48213",
        policy: "Orders more than 5 business days late get their shipping fee refunded."
      }
    },
    {
      id: "damaged",
      label: "Damaged",
      values: {
        customer_name: "Lukas Brandt",
        order_id: "FW-48377",
        policy: "Damaged items are replaced or refunded, whichever the customer prefers."
      }
    },
    {
      id: "window",
      label: "Past window",
      values: {
        customer_name: "Ana Souza",
        order_id: "FW-46902",
        policy: "Returns are accepted within 30 days of delivery."
      }
    }
  ], S = /\{\{\s*([A-Za-z_]\w*)\s*\}\}/g;
  function E(e2) {
    let t2 = [], a2 = 0;
    for (let r2 of e2.matchAll(S)) {
      let n2 = r2.index ?? 0;
      n2 > a2 && t2.push({ type: "text", text: e2.slice(a2, n2), start: a2 }), t2.push({ type: "var", name: r2[1], start: n2, end: n2 + r2[0].length }), a2 = n2 + r2[0].length;
    }
    return a2 < e2.length && t2.push({ type: "text", text: e2.slice(a2), start: a2 }), t2;
  }
  function $(...e2) {
    let t2 = [];
    for (let a2 of e2)
      for (let e3 of a2.matchAll(S)) t2.includes(e3[1]) || t2.push(e3[1]);
    return t2;
  }
  let R = (e2, t2) => e2.replace(S, (e3, a2) => t2[a2]?.trim() ? t2[a2] : e3);
  function T(e2) {
    if (!e2.trim()) return 0;
    let t2 = e2.trim().split(/\s+/).length;
    return Math.max(1, Math.round(e2.length / 4.2 + 0.12 * t2));
  }
  function L(e2) {
    return `$${e2 < 1 ? e2.toFixed(2) : Number.isInteger(e2) ? e2 : e2.toFixed(2)}`;
  }
  let P = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" }), D = (e2) => e2.match(/\{\{\s*[A-Za-z_]\w*\s*\}\}|\s+|[^\s{]+|\{/g) ?? [];
  function M(e2, t2) {
    var a2;
    let r2, n2, s2, i2, o2 = D(e2), l2 = D(t2), d2 = 0;
    for (; d2 < o2.length && d2 < l2.length && o2[d2] === l2[d2]; ) d2++;
    let u2 = 0;
    for (; u2 < o2.length - d2 && u2 < l2.length - d2 && o2[o2.length - 1 - u2] === l2[l2.length - 1 - u2]; )
      u2++;
    let c2 = o2.slice(d2, o2.length - u2), p2 = l2.slice(d2, l2.length - u2), m2 = c2.length, h2 = p2.length, f2 = Array.from({ length: m2 + 1 }, () => new Uint16Array(h2 + 1));
    for (let e3 = m2 - 1; e3 >= 0; e3--)
      for (let t3 = h2 - 1; t3 >= 0; t3--)
        f2[e3][t3] = c2[e3] === p2[t3] ? f2[e3 + 1][t3 + 1] + 1 : Math.max(f2[e3 + 1][t3], f2[e3][t3 + 1]);
    let g2 = [], _2 = (e3, t3) => {
      let a3 = g2[g2.length - 1];
      a3 && a3.type === e3 ? a3.text += t3 : g2.push({ type: e3, text: t3 });
    };
    d2 && _2("same", o2.slice(0, d2).join(""));
    let v2 = 0, y2 = 0;
    for (; v2 < m2 && y2 < h2; )
      c2[v2] === p2[y2] ? (_2("same", c2[v2]), v2++, y2++) : f2[v2 + 1][y2] >= f2[v2][y2 + 1] ? (_2("remove", c2[v2]), v2++) : (_2("add", p2[y2]), y2++);
    for (; v2 < m2; ) _2("remove", c2[v2++]);
    for (; y2 < h2; ) _2("add", p2[y2++]);
    return u2 && _2("same", o2.slice(o2.length - u2).join("")), a2 = g2, r2 = [], n2 = "", s2 = "", i2 = () => {
      n2 && (n2.trim() || !s2) && r2.push({ type: "remove", text: n2 }), s2 && (s2.trim() || !n2) && r2.push({ type: "add", text: s2 }), n2 = s2 = "";
    }, a2.forEach((e3, t3) => {
      if ("remove" === e3.type) n2 += e3.text;
      else if ("add" === e3.type) s2 += e3.text;
      else if ((n2 || s2) && /^[ \t]+$/.test(e3.text) && a2[t3 + 1] && "same" !== a2[t3 + 1].type)
        n2 += e3.text, s2 += e3.text;
      else {
        i2();
        let t4 = r2[r2.length - 1];
        t4?.type === "same" ? t4.text += e3.text : r2.push({ ...e3 });
      }
    }), i2(), r2;
  }
  var F = a(47650), I = a(2125), O = a(80400), B = a.n(O);
  function z(e2, t2, a2) {
    let r2 = E(t2), n2 = [];
    if (r2.forEach((e3, t3) => {
      var s2, i2;
      let o2;
      if ("text" === e3.type)
        return void n2.push(document.createTextNode(e3.text));
      let l2 = r2[t3 - 1], d2 = r2[t3 + 1];
      (!l2 || "text" === l2.type && l2.text.endsWith("\n")) && n2.push(document.createTextNode("\u200B")), n2.push(
        (s2 = e3.name, i2 = a2(e3.name), (o2 = document.createElement("span")).contentEditable = "false", o2.dataset.var = s2, o2.dataset.tone = String(i2), o2.className = B().varChip, o2.textContent = s2, o2)
      ), (!d2 || "var" === d2.type || d2.text.startsWith("\n")) && n2.push(document.createTextNode("\u200B"));
    }), t2.endsWith("\n")) {
      let e3 = document.createElement("br");
      e3.dataset.end = "", n2.push(e3);
    }
    e2.replaceChildren(...n2);
  }
  function U(e2) {
    let t2 = "";
    return e2.childNodes.forEach((e3) => {
      e3.nodeType === Node.TEXT_NODE ? t2 += (e3.textContent ?? "").replaceAll("\u200B", "") : e3 instanceof HTMLElement && (void 0 !== e3.dataset.var ? t2 += `{{${e3.dataset.var}}}` : "BR" === e3.tagName ? t2 += void 0 !== e3.dataset.end ? "" : "\n" : (("DIV" === e3.tagName || "P" === e3.tagName) && t2 && !t2.endsWith("\n") && (t2 += "\n"), t2 += U(e3)));
    }), t2;
  }
  function K(e2, t2, a2) {
    let r2 = document.createRange();
    r2.setStart(e2, 0), r2.setEnd(t2, a2);
    let n2 = document.createElement("div");
    return n2.appendChild(r2.cloneContents()), U(n2).length;
  }
  function H(e2) {
    let t2 = window.getSelection();
    if (!t2?.rangeCount) return null;
    let a2 = t2.getRangeAt(0);
    if (!e2.contains(a2.startContainer) || !e2.contains(a2.endContainer))
      return null;
    let r2 = K(e2, a2.startContainer, a2.startOffset);
    return [r2, a2.collapsed ? r2 : K(e2, a2.endContainer, a2.endOffset)];
  }
  function W(e2, t2) {
    let a2 = window.getSelection();
    if (!a2) return;
    let r2 = document.createRange(), n2 = t2, s2 = false;
    for (let t3 of Array.from(e2.childNodes))
      if (t3.nodeType === Node.TEXT_NODE) {
        let e3 = t3.textContent ?? "", a3 = e3.replaceAll("\u200B", "").length;
        if (n2 <= a3) {
          let i2 = 0, o2 = 0;
          for (; o2 < n2 && i2 < e3.length; ) "\u200B" !== e3[i2] && o2++, i2++;
          0 === a3 && (i2 = e3.length), r2.setStart(t3, i2), s2 = true;
          break;
        }
        n2 -= a3;
      } else if (t3 instanceof HTMLElement) {
        let e3 = void 0 !== t3.dataset.var ? t3.dataset.var.length + 4 : +("BR" === t3.tagName && void 0 === t3.dataset.end);
        if (n2 < e3) {
          r2.setStartAfter(t3), s2 = true;
          break;
        }
        n2 -= e3;
      }
    if (!s2) {
      let t3 = e2.lastChild;
      t3 instanceof HTMLElement && void 0 !== t3.dataset.end ? r2.setStartBefore(t3) : r2.setStart(e2, e2.childNodes.length);
    }
    r2.collapse(true), a2.removeAllRanges(), a2.addRange(r2);
  }
  let Y = (e2, t2) => E(e2).find((e3) => "var" === e3.type && e3.end === t2), G = (e2, t2) => E(e2).find((e3) => "var" === e3.type && e3.start === t2), V = () => () => {
  };
  function Z(e2, t2) {
    let a2 = e2.toLowerCase(), r2 = t2.filter((e3) => e3.toLowerCase().includes(a2)).slice(0, 6).map((e3) => ({ name: e3, create: false }));
    return e2 && /^[A-Za-z_]\w*$/.test(e2) && !t2.includes(e2) && r2.push({ name: e2, create: true }), r2;
  }
  function q({
    id: e2,
    value: t2,
    onChange: a2,
    variables: s2,
    toneOf: i2,
    missing: o2,
    activeVariable: l2,
    flash: d2,
    onChipClick: u2,
    onSubmit: c2,
    placeholder: p2,
    label: m2,
    describedBy: h2,
    inert: f2
  }) {
    let g2 = (0, n.useId)(), _2 = (0, n.useRef)(null), v2 = (0, n.useRef)(null), y2 = (0, n.useRef)(false), x2 = (0, n.useRef)({ past: [], future: [], lastAt: 0, lastKind: "" }), b2 = (0, n.useRef)(null), [w2, j2] = (0, n.useState)(null), k2 = (0, n.useSyncExternalStore)(
      V,
      () => true,
      () => false
    ), N2 = (0, n.useRef)(w2), C2 = (0, n.useRef)(s2), A2 = (0, n.useRef)(a2), E2 = (0, n.useRef)(i2);
    (0, n.useLayoutEffect)(() => {
      N2.current = w2, C2.current = s2, A2.current = a2, E2.current = i2;
    });
    let $2 = (0, n.useCallback)((e3) => E2.current(e3), []);
    (0, n.useLayoutEffect)(() => {
      let e3 = _2.current;
      if (!e3 || v2.current === t2) return;
      let a3 = document.activeElement === e3, r2 = a3 ? H(e3)?.[0] ?? t2.length : 0;
      v2.current = t2, z(e3, t2, $2), x2.current = { past: [], future: [], lastAt: 0, lastKind: "" }, a3 && W(e3, Math.min(r2, t2.length));
    }, [t2, $2]), (0, n.useLayoutEffect)(() => {
      _2.current?.querySelectorAll("[data-var]").forEach((e3) => {
        let t3 = e3.dataset.var ?? "";
        e3.dataset.tone = String(i2(t3)), e3.toggleAttribute("data-missing", !!o2?.includes(t3)), e3.toggleAttribute("data-active", l2 === t3);
      });
    }), (0, n.useEffect)(() => {
      if (!d2) return;
      let e3 = _2.current?.querySelectorAll(
        `[data-var="${CSS.escape(d2.name)}"]`
      );
      e3?.forEach((e4) => {
        e4.removeAttribute("data-flash"), e4.offsetWidth, e4.setAttribute("data-flash", "");
      });
    }, [d2]);
    let R2 = (0, n.useCallback)((e3) => Z(e3, C2.current), []), T2 = (0, n.useCallback)(
      (e3, t3) => {
        let a3 = _2.current, r2 = /\{\{\s*([A-Za-z_]\w*)?$/.exec(e3.slice(0, t3));
        if (!a3 || !r2 || b2.current === r2.index) return void j2(null);
        let n2 = window.getSelection(), s3 = n2?.rangeCount ? n2.getRangeAt(0) : null, i3 = s3?.getClientRects(), o3 = i3?.length ? i3[i3.length - 1] : (s3?.startContainer instanceof Element ? s3.startContainer : s3?.startContainer.parentElement)?.getBoundingClientRect();
        if (!o3) return void j2(null);
        let l3 = r2[1] ?? "", d3 = Math.max(1, R2(l3).length), u3 = 34 * d3 + 10, c3 = o3.bottom + 6 + u3 > window.innerHeight - 8 && o3.top - 6 - u3 > 8, p3 = Math.min(240, window.innerWidth - 16);
        j2((e4) => ({
          start: r2.index,
          query: l3,
          active: e4 && e4.start === r2.index ? Math.min(e4.active, d3 - 1) : 0,
          top: c3 ? o3.top - 6 - u3 : o3.bottom + 6,
          left: Math.max(8, Math.min(o3.left - 10, window.innerWidth - p3 - 8))
        }));
      },
      [R2]
    ), L2 = (0, n.useCallback)(
      (e3, t3, a3) => {
        let r2 = _2.current;
        if (!r2) return;
        let n2 = v2.current ?? "", s3 = e3.replace(S, "{{$1}}"), i3 = e3.slice(0, t3).replace(S, "{{$1}}").length, o3 = x2.current, l3 = performance.now();
        "type" === a3 && "type" === o3.lastKind && l3 - o3.lastAt < 900 || o3.past.push({ value: n2, caret: H(r2)?.[0] ?? i3 }), o3.past.length > 200 && o3.past.shift(), o3.future = [], o3.lastAt = l3, o3.lastKind = a3, v2.current = s3, z(r2, s3, $2), W(r2, i3), A2.current(s3), T2(s3, i3);
      },
      [T2, $2]
    ), P2 = (0, n.useCallback)(
      (e3) => {
        let t3 = _2.current, a3 = x2.current, r2 = "undo" === e3 ? a3.past : a3.future, n2 = "undo" === e3 ? a3.future : a3.past, s3 = r2.pop();
        t3 && s3 && (n2.push({ value: v2.current ?? "", caret: H(t3)?.[0] ?? 0 }), a3.lastKind = "", v2.current = s3.value, z(t3, s3.value, $2), W(t3, s3.caret), A2.current(s3.value), j2(null));
      },
      [$2]
    ), D2 = (0, n.useCallback)(
      (e3, t3) => {
        let a3 = _2.current, r2 = a3 && H(a3);
        if (!a3 || !r2) return;
        let n2 = v2.current ?? "";
        L2(n2.slice(0, r2[0]) + e3 + n2.slice(r2[1]), r2[0] + e3.length, t3);
      },
      [L2]
    );
    (0, n.useEffect)(() => {
      let e3 = _2.current;
      if (!e3) return;
      let t3 = (t4) => {
        if (t4.isComposing || "insertCompositionText" === t4.inputType) return;
        let a4 = H(e3);
        if (!a4) return;
        let r3 = v2.current ?? "", [n3, s3] = a4, i3 = "", o3 = "edit";
        switch (t4.inputType) {
          case "insertText":
          case "insertReplacementText":
            i3 = t4.data ?? t4.dataTransfer?.getData("text/plain") ?? "", o3 = /\s/.test(i3) ? "space" : "type", b2.current = null;
            break;
          case "insertLineBreak":
          case "insertParagraph":
            i3 = "\n";
            break;
          case "insertFromPaste":
          case "insertFromDrop":
          case "insertFromYank":
            i3 = t4.dataTransfer?.getData("text/plain") ?? "";
            break;
          case "deleteContentBackward":
            n3 === s3 && (n3 = (function(e4, t5) {
              let a5 = Y(e4, t5);
              if (a5) return a5.start;
              let r4 = e4.charCodeAt(t5 - 1);
              return Math.max(0, t5 - (r4 >= 56320 && r4 <= 57343 ? 2 : 1));
            })(r3, n3)), o3 = "delete";
            break;
          case "deleteContentForward":
            n3 === s3 && (s3 = (function(e4, t5) {
              let a5 = G(e4, t5);
              if (a5 && "var" === a5.type) return a5.end;
              let r4 = e4.charCodeAt(t5);
              return Math.min(
                e4.length,
                t5 + (r4 >= 55296 && r4 <= 56319 ? 2 : 1)
              );
            })(r3, s3)), o3 = "delete";
            break;
          case "deleteWordBackward":
            n3 === s3 && (n3 = (function(e4, t5) {
              let a5 = Y(e4, t5);
              if (a5) return a5.start;
              let r4 = t5;
              for (; r4 > 0 && /\s/.test(e4[r4 - 1]) && "\n" !== e4[r4 - 1]; )
                r4--;
              if (r4 === t5 && "\n" === e4[r4 - 1]) return r4 - 1;
              for (; r4 > 0 && !/\s/.test(e4[r4 - 1]) && !Y(e4, r4); ) r4--;
              return r4;
            })(r3, n3));
            break;
          case "deleteWordForward":
            n3 === s3 && (s3 = (function(e4, t5) {
              let a5 = G(e4, t5);
              if (a5 && "var" === a5.type) return a5.end;
              let r4 = t5;
              for (; r4 < e4.length && /\s/.test(e4[r4]) && "\n" !== e4[r4]; ) r4++;
              if (r4 === t5 && "\n" === e4[r4]) return r4 + 1;
              for (; r4 < e4.length && !/\s/.test(e4[r4]) && !G(e4, r4); ) r4++;
              return r4;
            })(r3, s3));
            break;
          case "deleteSoftLineBackward":
          case "deleteHardLineBackward":
            n3 === s3 && (n3 = n3 > 0 && "\n" === r3[n3 - 1] ? n3 - 1 : r3.lastIndexOf("\n", n3 - 1) + 1);
            break;
          case "deleteSoftLineForward":
          case "deleteHardLineForward": {
            if (n3 !== s3) break;
            let e4 = r3.indexOf("\n", s3);
            s3 = -1 === e4 ? r3.length : e4 === s3 ? s3 + 1 : e4;
            break;
          }
          case "deleteByCut":
          case "deleteByDrag":
          case "deleteContent":
            break;
          case "historyUndo":
            t4.preventDefault(), P2("undo");
            return;
          case "historyRedo":
            t4.preventDefault(), P2("redo");
            return;
          default:
            t4.preventDefault();
            return;
        }
        t4.preventDefault(), (n3 !== s3 || i3) && L2(r3.slice(0, n3) + i3 + r3.slice(s3), n3 + i3.length, o3);
      }, a3 = () => {
        if (y2.current) return;
        let t4 = U(e3);
        if (t4 === v2.current) return;
        let a4 = H(e3)?.[0] ?? t4.length;
        L2(t4, a4, "edit");
      }, r2 = () => {
        y2.current = true;
      }, n2 = () => {
        y2.current = false, a3();
      };
      return e3.addEventListener("beforeinput", t3), e3.addEventListener("input", a3), e3.addEventListener("compositionstart", r2), e3.addEventListener("compositionend", n2), () => {
        e3.removeEventListener("beforeinput", t3), e3.removeEventListener("input", a3), e3.removeEventListener("compositionstart", r2), e3.removeEventListener("compositionend", n2);
      };
    }, [L2, P2]), (0, n.useEffect)(() => {
      if (!w2) return;
      let e3 = _2.current, t3 = () => {
        if (!e3 || document.activeElement !== e3) return void j2(null);
        let t4 = H(e3)?.[0];
        void 0 === t4 ? j2(null) : T2(v2.current ?? "", t4);
      };
      return document.addEventListener("selectionchange", t3), window.addEventListener("scroll", t3, true), window.addEventListener("resize", t3), () => {
        document.removeEventListener("selectionchange", t3), window.removeEventListener("scroll", t3, true), window.removeEventListener("resize", t3);
      };
    }, [w2, T2]);
    let M2 = (0, n.useCallback)(
      (e3) => {
        let t3 = _2.current, a3 = N2.current, r2 = t3 && H(t3)?.[0];
        if (!t3 || !a3 || null == r2) return;
        let n2 = v2.current ?? "", s3 = /^\s*\}\}/.exec(n2.slice(r2))?.[0].length ?? 0, i3 = `{{${e3}}}`;
        L2(
          n2.slice(0, a3.start) + i3 + n2.slice(r2 + s3),
          a3.start + i3.length,
          "edit"
        ), j2(null);
      },
      [L2]
    );
    function O2(e3, t3 = false) {
      let a3 = _2.current, r2 = a3 && H(a3);
      a3 && r2 && r2[0] !== r2[1] && (e3.preventDefault(), e3.clipboardData.setData(
        "text/plain",
        (v2.current ?? "").slice(r2[0], r2[1])
      ), t3 && D2("", "edit"));
    }
    let K2 = w2 ? Z(w2.query, s2) : [], Q2 = w2 && K2.length ? `${g2}-${w2.active}` : void 0;
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("div", {
          ref: _2,
          id: e2,
          className: B().editable,
          contentEditable: !f2,
          suppressContentEditableWarning: true,
          role: "textbox",
          "aria-multiline": "true",
          "aria-label": m2,
          "aria-describedby": h2,
          "aria-autocomplete": "list",
          "aria-controls": w2 ? g2 : void 0,
          "aria-activedescendant": Q2,
          tabIndex: f2 ? -1 : 0,
          spellCheck: false,
          "data-empty": "" === t2 || void 0,
          "data-placeholder": p2,
          onKeyDown: function(e3) {
            let t3 = e3.metaKey || e3.ctrlKey;
            if (t3 && "Enter" === e3.key) {
              e3.preventDefault(), j2(null), c2?.();
              return;
            }
            if (t3 && !e3.altKey && "z" === e3.key.toLowerCase()) {
              e3.preventDefault(), P2(e3.shiftKey ? "redo" : "undo");
              return;
            }
            if (t3 && !e3.altKey && "y" === e3.key.toLowerCase()) {
              e3.preventDefault(), P2("redo");
              return;
            }
            if (t3 && ["b", "i", "u"].includes(e3.key.toLowerCase()))
              return void e3.preventDefault();
            let a3 = N2.current;
            if (!a3) return;
            let r2 = R2(a3.query);
            if ("ArrowDown" === e3.key || "ArrowUp" === e3.key) {
              if (e3.preventDefault(), !r2.length) return;
              let t4 = "ArrowDown" === e3.key ? 1 : -1;
              j2({ ...a3, active: (a3.active + t4 + r2.length) % r2.length });
            } else
              ("Enter" === e3.key || "Tab" === e3.key) && r2.length ? (e3.preventDefault(), M2(r2[a3.active]?.name ?? r2[0].name)) : "Escape" === e3.key && (e3.preventDefault(), e3.stopPropagation(), b2.current = a3.start, j2(null));
          },
          onCopy: (e3) => O2(e3),
          onCut: (e3) => O2(e3, true),
          onPaste: function(e3) {
            e3.preventDefault(), D2(
              e3.clipboardData.getData("text/plain").replace(/\r\n?/g, "\n"),
              "edit"
            );
          },
          onDrop: function(e3) {
            e3.preventDefault();
            let t3 = e3.dataTransfer.getData("text/plain");
            t3 && D2(t3, "edit");
          },
          onClick: function(e3) {
            let t3 = e3.target.closest("[data-var]");
            t3?.dataset.var && u2?.(t3.dataset.var);
          },
          onBlur: () => j2(null)
        }),
        k2 && w2 && (0, F.createPortal)(
          (0, r.jsx)("div", {
            className: B().suggest,
            style: { top: w2.top, left: w2.left },
            children: (0, r.jsx)("ul", {
              id: g2,
              role: "listbox",
              "aria-label": "Variables",
              className: B().suggestList,
              children: K2.length ? K2.map(
                (e3, t3) => (0, r.jsxs)(
                  "li",
                  {
                    id: `${g2}-${t3}`,
                    role: "option",
                    "aria-selected": t3 === w2.active,
                    className: B().suggestOption,
                    "data-tone": e3.create ? void 0 : i2(e3.name),
                    onPointerDown: (t4) => {
                      t4.preventDefault(), M2(e3.name);
                    },
                    onPointerMove: () => {
                      t3 !== w2.active && j2({ ...w2, active: t3 });
                    },
                    children: [
                      e3.create ? (0, r.jsx)(I.A, {
                        className: B().suggestIcon,
                        "aria-hidden": "true"
                      }) : (0, r.jsx)("span", {
                        className: B().suggestDot,
                        "aria-hidden": "true"
                      }),
                      (0, r.jsx)("span", {
                        className: B().suggestName,
                        children: e3.create ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            "Add ",
                            (0, r.jsx)("span", {
                              className: B().suggestNew,
                              children: e3.name
                            })
                          ]
                        }) : e3.name
                      })
                    ]
                  },
                  `${e3.name}-${e3.create}`
                )
              ) : (0, r.jsxs)("li", {
                className: B().suggestEmpty,
                role: "presentation",
                children: ["Type a name, then close with ", "}}"]
              })
            })
          }),
          document.body
        )
      ]
    });
  }
  var Q = a(57700), X = a(12363), J = a(23116), ee = a(53646), et = a(64577), ea = a(35484), er = a(92218), en = a(73474), es = a(83978);
  function ei({ title: e2 = "Claude", ...t2 }) {
    return (0, r.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, r.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  function eo({ title: e2 = "OpenAI", ...t2 }) {
    return (0, r.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, r.jsx)("path", {
        d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      })
    });
  }
  function el({ title: e2 = "Gemini", ...t2 }) {
    let a2 = (0, n.useId)().replace(/:/g, "");
    return (0, r.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, r.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: "#3186FF"
        }),
        (0, r.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#g0-${a2})`
        }),
        (0, r.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#g1-${a2})`
        }),
        (0, r.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#g2-${a2})`
        }),
        (0, r.jsxs)("defs", {
          children: [
            (0, r.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `g0-${a2}`,
              x1: "7",
              x2: "11",
              y1: "15.5",
              y2: "12",
              children: [
                (0, r.jsx)("stop", { stopColor: "#08B962" }),
                (0, r.jsx)("stop", {
                  offset: "1",
                  stopColor: "#08B962",
                  stopOpacity: "0"
                })
              ]
            }),
            (0, r.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `g1-${a2}`,
              x1: "8",
              x2: "11.5",
              y1: "5.5",
              y2: "11",
              children: [
                (0, r.jsx)("stop", { stopColor: "#F94543" }),
                (0, r.jsx)("stop", {
                  offset: "1",
                  stopColor: "#F94543",
                  stopOpacity: "0"
                })
              ]
            }),
            (0, r.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `g2-${a2}`,
              x1: "3.5",
              x2: "17.5",
              y1: "13.5",
              y2: "12",
              children: [
                (0, r.jsx)("stop", { stopColor: "#FABC12" }),
                (0, r.jsx)("stop", {
                  offset: ".46",
                  stopColor: "#FABC12",
                  stopOpacity: "0"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let ed = { type: "spring", visualDuration: 0.22, bounce: 0 }, eu = [...u.T.ease.enter], ec = [...u.T.ease.standard], ep = { duration: u.T.duration.fast, ease: eu }, em = { duration: 0.1, ease: ec }, eh = { duration: 0 };
  function ef({ id: e2, children: t2, className: a2 }) {
    let l2 = (0, s.I)(), d2 = (0, n.useRef)(null), [u2, c2] = (0, n.useState)("auto"), [p2, m2] = (0, n.useState)(e2), [h2, f2] = (0, n.useState)(false);
    return e2 !== p2 && (m2(e2), f2(true)), (0, n.useLayoutEffect)(() => {
      let e3 = d2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && c2(Math.ceil(t4.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsxs)(o.PY1.span, {
      className: [B().swap, a2].filter(Boolean).join(" "),
      initial: false,
      animate: { width: u2 },
      transition: h2 && !l2 ? ed : eh,
      children: [
        (0, r.jsx)("span", {
          ref: d2,
          className: B().swapMeasure,
          "aria-hidden": "true",
          children: t2
        }),
        (0, r.jsx)(i.N, {
          initial: false,
          children: (0, r.jsx)(
            o.PY1.span,
            {
              className: B().swapItem,
              initial: l2 ? { opacity: 0 } : { opacity: 0, y: 2 },
              animate: { opacity: 1, y: 0, transition: l2 ? eh : ep },
              exit: { opacity: 0, transition: l2 ? eh : em },
              children: t2
            },
            e2
          )
        })
      ]
    });
  }
  function eg({
    options: e2,
    value: t2,
    onChange: a2,
    label: i2,
    kind: l2,
    className: d2
  }) {
    let u2 = (0, n.useId)(), c2 = (0, s.I)(), p2 = (0, n.useRef)([]), m2 = Math.max(
      0,
      e2.findIndex((e3) => e3.value === t2)
    ), h2 = "tabs" === l2;
    function f2(t3) {
      let r2 = e2.length - 1, n2 = "ArrowRight" === t3.key || "ArrowDown" === t3.key ? m2 === r2 ? 0 : m2 + 1 : "ArrowLeft" === t3.key || "ArrowUp" === t3.key ? 0 === m2 ? r2 : m2 - 1 : "Home" === t3.key ? 0 : "End" === t3.key ? r2 : -1;
      n2 < 0 || (t3.preventDefault(), a2(e2[n2].value), p2.current[n2]?.focus());
    }
    return (0, r.jsx)(Q.o, {
      id: u2,
      children: (0, r.jsx)("div", {
        className: [h2 ? B().tabs : B().seg, d2].filter(Boolean).join(" "),
        role: h2 ? "tablist" : "radiogroup",
        "aria-label": i2,
        children: e2.map((e3, t3) => {
          let n2 = t3 === m2;
          return (0, r.jsxs)(
            "button",
            {
              ref: (e4) => {
                p2.current[t3] = e4;
              },
              id: e3.id,
              type: "button",
              className: h2 ? B().tab : B().segOption,
              role: h2 ? "tab" : "radio",
              "aria-selected": h2 ? n2 : void 0,
              "aria-checked": h2 ? void 0 : n2,
              "aria-controls": e3.panel,
              tabIndex: n2 ? 0 : -1,
              "data-on": n2 || void 0,
              onClick: () => a2(e3.value),
              onKeyDown: f2,
              children: [
                n2 && (0, r.jsx)(o.PY1.span, {
                  layoutId: "highlight",
                  className: h2 ? B().tabHighlight : B().segHighlight,
                  style: { borderRadius: 999 },
                  transition: c2 ? eh : ed,
                  "aria-hidden": "true"
                }),
                (0, r.jsx)("span", {
                  className: B().segLabel,
                  children: e3.label
                })
              ]
            },
            e3.value
          );
        })
      })
    });
  }
  let e_ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function ev({ value: e2 }) {
    let t2 = e2.toLocaleString("en-US"), a2 = [...t2];
    return (0, r.jsxs)("span", {
      className: B().roll,
      children: [
        (0, r.jsx)("span", { className: B().srOnly, children: t2 }),
        (0, r.jsx)("span", {
          className: B().rollDigits,
          "aria-hidden": "true",
          children: a2.map((e3, t3) => {
            let n2 = a2.length - 1 - t3;
            return /\d/.test(e3) ? (0, r.jsx)(
              "span",
              {
                className: B().rollCol,
                children: (0, r.jsx)("span", {
                  className: B().rollStrip,
                  style: { "--d": e3 },
                  children: e_.map(
                    (e4) => (0, r.jsx)("span", { children: e4 }, e4)
                  )
                })
              },
              `d${n2}`
            ) : (0, r.jsx)(
              "span",
              { className: B().rollSep, children: e3 },
              `s${n2}`
            );
          })
        })
      ]
    });
  }
  function ey({ children: e2, armKey: t2, sticky: a2 = true, className: i2 }) {
    let l2 = (0, s.I)(), d2 = (0, n.useRef)(null), [c2, p2] = (0, n.useState)("auto"), [m2, h2] = (0, n.useState)(t2), [f2, g2] = (0, n.useState)(false);
    return t2 !== m2 && (h2(t2), g2(true)), (0, n.useLayoutEffect)(() => {
      let e3 = d2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && p2(Math.ceil(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.useEffect)(() => {
      if (!f2 || a2) return;
      let e3 = window.setTimeout(() => g2(false), 700);
      return () => window.clearTimeout(e3);
    }, [f2, a2, m2]), (0, r.jsx)(o.PY1.div, {
      className: [B().autoHeight, i2].filter(Boolean).join(" "),
      initial: false,
      animate: { height: c2 },
      transition: f2 && !l2 ? u.T.spring.smooth : eh,
      children: (0, r.jsx)("div", { ref: d2, children: e2 })
    });
  }
  function ex({ mark: e2, className: t2 }) {
    let a2 = {
      className: [B().mark, t2].filter(Boolean).join(" "),
      "aria-hidden": true,
      title: ""
    };
    return "openai" === e2 ? (0, r.jsx)(eo, { ...a2 }) : "gemini" === e2 ? (0, r.jsx)(el, { ...a2 }) : (0, r.jsx)(ei, { ...a2, "data-brand": "claude" });
  }
  function eb({
    versions: e2,
    openId: t2,
    productionId: a2,
    now: l2,
    promotion: d2,
    onCompare: p2,
    onPromote: m2,
    onUndo: h2
  }) {
    let f2 = (0, s.I)(), g2 = (0, n.useId)(), [_2, v2] = (0, n.useState)(false), y2 = Math.max(
      0,
      e2.findIndex((e3) => e3.id === t2)
    ), [x2, b2] = (0, n.useState)(() => e2[y2 + 1]?.id ?? e2[0]?.id ?? ""), w2 = (0, n.useRef)([]), j2 = e2[y2], k2 = e2.find((e3) => e3.id === x2) ?? j2, N2 = a2 === j2?.id, C2 = e2.find((e3) => e3.id === a2);
    return (0, r.jsxs)(es.AM, {
      open: _2,
      onOpenChange: v2,
      children: [
        (0, r.jsxs)(es.Wv, {
          className: B().chip,
          "aria-label": `Version ${j2?.label}${N2 ? ", in production" : ""}. Open versions`,
          children: [
            (0, r.jsx)("span", {
              className: B().chipVersion,
              children: j2?.label
            }),
            (0, r.jsx)(ef, {
              id: N2 ? "live" : "latest",
              className: B().chipState,
              children: N2 ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("span", {
                    className: B().liveDot,
                    "aria-hidden": "true"
                  }),
                  "Production"
                ]
              }) : (0, r.jsx)(r.Fragment, { children: "Latest" })
            }),
            (0, r.jsx)(X.A, { className: B().chevron, "aria-hidden": "true" })
          ]
        }),
        (0, r.jsxs)(es.hl, {
          className: `${B().menu} ${B().versionMenu}`,
          align: "start",
          "aria-label": "Versions",
          children: [
            (0, r.jsx)(Q.o, {
              id: g2,
              children: (0, r.jsx)("div", {
                className: B().versionList,
                role: "radiogroup",
                "aria-label": "Pick a version to compare or promote",
                children: e2.map((t3, n2) => {
                  let s2, i2 = t3.id === k2?.id;
                  return (0, r.jsxs)(
                    "button",
                    {
                      ref: (e3) => {
                        w2.current[n2] = e3;
                      },
                      type: "button",
                      role: "radio",
                      "aria-checked": i2,
                      tabIndex: i2 ? 0 : -1,
                      className: B().versionRow,
                      "data-on": i2 || void 0,
                      onClick: () => b2(t3.id),
                      onKeyDown: (t4) => {
                        let a3, r2;
                        return a3 = e2.length - 1, void (!((r2 = "ArrowDown" === t4.key ? n2 === a3 ? 0 : n2 + 1 : "ArrowUp" === t4.key ? 0 === n2 ? a3 : n2 - 1 : "Home" === t4.key ? 0 : "End" === t4.key ? a3 : -1) < 0) && (t4.preventDefault(), b2(e2[r2].id), w2.current[r2]?.focus()));
                      },
                      children: [
                        (0, r.jsx)(er.e, {
                          name: t3.author.name,
                          src: t3.author.avatar,
                          size: "sm",
                          className: B().versionAvatar
                        }),
                        (0, r.jsxs)("span", {
                          className: B().versionText,
                          children: [
                            (0, r.jsx)("span", {
                              className: B().versionMessage,
                              children: t3.message
                            }),
                            (0, r.jsxs)("span", {
                              className: B().versionMeta,
                              children: [
                                (0, r.jsxs)("span", {
                                  className: B().versionMetaText,
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: B().versionLabel,
                                      children: t3.label
                                    }),
                                    " \xB7 ",
                                    t3.author.name,
                                    " \xB7 ",
                                    (s2 = Math.floor(
                                      (l2 - Date.parse(t3.createdAt)) / 864e5
                                    )) < 1 ? "today" : s2 < 7 ? P.format(-s2, "day") : s2 < 30 ? P.format(-Math.floor(s2 / 7), "week") : s2 < 365 ? P.format(
                                      -Math.floor(s2 / 30),
                                      "month"
                                    ) : P.format(
                                      -Math.floor(s2 / 365),
                                      "year"
                                    )
                                  ]
                                }),
                                (0, r.jsx)("span", {
                                  className: B().versionSlot,
                                  children: t3.id === a2 && (0, r.jsxs)(o.PY1.span, {
                                    layoutId: "production",
                                    className: B().prodMarker,
                                    transition: f2 ? eh : u.T.spring.smooth,
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: B().liveDot,
                                        "aria-hidden": "true"
                                      }),
                                      "Production"
                                    ]
                                  })
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    },
                    t3.id
                  );
                })
              })
            }),
            (0, r.jsxs)("div", {
              className: B().menuActions,
              children: [
                (0, r.jsxs)("button", {
                  type: "button",
                  className: B().menuAction,
                  disabled: !k2 || k2.id === t2,
                  onClick: () => {
                    v2(false), p2(k2.id);
                  },
                  children: [
                    (0, r.jsx)(J.A, { "aria-hidden": "true" }),
                    "Compare with ",
                    k2?.label
                  ]
                }),
                (0, r.jsxs)("button", {
                  type: "button",
                  className: B().menuAction,
                  disabled: !k2 || k2.id === a2,
                  onClick: () => m2(k2.id),
                  children: [
                    (0, r.jsx)(ee.A, { "aria-hidden": "true" }),
                    "Promote to production"
                  ]
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: B().menuStatus,
              role: "status",
              children: [
                (0, r.jsx)(ef, {
                  id: d2 ? `p-${d2.to}` : `s-${a2}`,
                  className: B().menuStatusText,
                  children: d2 ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      e2.find((e3) => e3.id === d2.to)?.label,
                      " is in production"
                    ]
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [
                      "Production serves ",
                      C2?.label ?? "no version"
                    ]
                  })
                }),
                (0, r.jsx)(i.N, {
                  initial: false,
                  children: d2 && (0, r.jsx)(
                    o.PY1.span,
                    {
                      className: B().menuUndo,
                      initial: { opacity: 0 },
                      animate: { opacity: 1, transition: f2 ? eh : ep },
                      exit: { opacity: 0, transition: f2 ? eh : em },
                      children: (0, r.jsx)(c.$, {
                        variant: "ghost",
                        size: "sm",
                        onClick: h2,
                        children: "Undo"
                      })
                    },
                    "undo"
                  )
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function ew({ models: e2, modelId: t2, effort: a2, onModel: s2, onEffort: i2 }) {
    let o2 = (0, n.useRef)([]), l2 = (0, n.useId)(), d2 = e2.find((e3) => e3.id === t2) ?? e2[0], u2 = Math.max(
      0,
      e2.findIndex((e3) => e3.id === d2.id)
    ), c2 = e2.some((e3) => e3.sample);
    return (0, r.jsxs)(es.AM, {
      children: [
        (0, r.jsxs)(es.Wv, {
          className: `${B().chip} ${B().modelChip}`,
          "aria-label": `Model ${d2.name}, ${g[a2]} effort. Change model`,
          children: [
            (0, r.jsxs)(ef, {
              id: d2.id,
              className: B().modelSwap,
              children: [
                (0, r.jsx)(ex, { mark: d2.mark }),
                (0, r.jsx)("span", {
                  className: B().modelName,
                  children: d2.short
                })
              ]
            }),
            (0, r.jsx)(ef, { id: a2, className: B().chipState, children: _[a2] }),
            (0, r.jsx)(X.A, { className: B().chevron, "aria-hidden": "true" })
          ]
        }),
        (0, r.jsxs)(es.hl, {
          className: `${B().menu} ${B().modelMenu}`,
          align: "end",
          "aria-label": "Model and effort",
          children: [
            (0, r.jsx)("div", {
              className: B().modelList,
              role: "radiogroup",
              "aria-label": "Model",
              children: e2.map((t3, a3) => {
                let n2 = a3 === u2;
                return (0, r.jsxs)(
                  "button",
                  {
                    ref: (e3) => {
                      o2.current[a3] = e3;
                    },
                    type: "button",
                    role: "radio",
                    "aria-checked": n2,
                    tabIndex: n2 ? 0 : -1,
                    className: B().modelRow,
                    "data-on": n2 || void 0,
                    onClick: () => s2(t3.id),
                    onKeyDown: (t4) => {
                      let r2, n3;
                      return r2 = e2.length - 1, void (!((n3 = "ArrowDown" === t4.key ? a3 === r2 ? 0 : a3 + 1 : "ArrowUp" === t4.key ? 0 === a3 ? r2 : a3 - 1 : "Home" === t4.key ? 0 : "End" === t4.key ? r2 : -1) < 0) && (t4.preventDefault(), s2(e2[n3].id), o2.current[n3]?.focus()));
                    },
                    children: [
                      (0, r.jsx)(ex, { mark: t3.mark }),
                      (0, r.jsx)("span", {
                        className: B().modelRowName,
                        children: t3.name
                      }),
                      (0, r.jsxs)("span", {
                        className: B().modelPrice,
                        "aria-label": `${L(t3.input)} input, ${L(t3.output)} output per million tokens${t3.sample ? ", sample price" : ""}`,
                        children: [L(t3.input), " \xB7 ", L(t3.output)]
                      }),
                      (0, r.jsx)(et.A, {
                        className: B().modelCheck,
                        "data-on": n2 || void 0,
                        "aria-hidden": "true"
                      })
                    ]
                  },
                  t3.id
                );
              })
            }),
            (0, r.jsxs)("div", {
              className: B().effortRow,
              children: [
                (0, r.jsx)("span", {
                  id: l2,
                  className: B().effortLabel,
                  children: "Effort"
                }),
                (0, r.jsx)(eg, {
                  kind: "segmented",
                  label: "Effort",
                  value: a2,
                  onChange: (e3) => i2(e3),
                  className: B().effortSeg,
                  options: f.map((e3) => ({ value: e3, label: _[e3] }))
                })
              ]
            }),
            (0, r.jsxs)("p", {
              className: B().menuNote,
              children: [
                "Input \xB7 output per 1M tokens.",
                c2 ? " GPT and Gemini prices are samples." : ""
              ]
            })
          ]
        })
      ]
    });
  }
  function ej(e2, t2, a2) {
    return E(e2).map(
      (e3, s2) => "text" === e3.type ? (0, r.jsx)(n.Fragment, { children: e3.text }, `${a2}-${s2}`) : (0, r.jsx)(
        "span",
        {
          className: B().varChip,
          "data-tone": t2(e3.name),
          "data-static": "",
          children: e3.name
        },
        `${a2}-${s2}`
      )
    );
  }
  function ek({ ops: e2, toneOf: t2 }) {
    return (0, r.jsx)("div", {
      className: B().diffText,
      children: e2.map((e3, a2) => {
        if ("same" === e3.type)
          return (0, r.jsx)(
            n.Fragment,
            { children: ej(e3.text, t2, `s${a2}`) },
            a2
          );
        let [, s2, i2, o2] = /^(\s*)([\s\S]*?)(\s*)$/.exec(e3.text) ?? [
          "",
          "",
          e3.text,
          ""
        ];
        if (!i2)
          return "add" === e3.type ? (0, r.jsx)(n.Fragment, { children: e3.text }, a2) : null;
        let l2 = "add" === e3.type ? "ins" : "del", [, d2, u2] = /^(\S+)([\s\S]*)$/.exec(i2) ?? ["", i2, ""];
        return (0, r.jsxs)(
          n.Fragment,
          {
            children: [
              s2,
              (0, r.jsxs)(l2, {
                className: "add" === e3.type ? B().added : B().removed,
                children: [
                  (0, r.jsx)("span", {
                    className: B().srOnly,
                    children: "add" === e3.type ? "Added: " : "Removed: "
                  }),
                  (0, r.jsxs)("span", {
                    className: B().diffLead,
                    children: [
                      (0, r.jsx)("span", {
                        className: B().diffSign,
                        "aria-hidden": "true",
                        children: "add" === e3.type ? "+" : "\u2212"
                      }),
                      ej(d2, t2, `f${a2}`)
                    ]
                  }),
                  ej(u2, t2, `r${a2}`)
                ]
              }),
              "add" === e3.type ? o2 : null
            ]
          },
          a2
        );
      })
    });
  }
  function eN({ run: e2 }) {
    let t2 = "thinking" === e2.status ? "Thinking" : "streaming" === e2.status ? "Writing" : "done" === e2.status ? "Reply" : "stopped" === e2.status ? "Stopped" : "Run failed", a2 = "done" === e2.status ? (0, r.jsx)(et.A, { "aria-hidden": "true" }) : "stopped" === e2.status ? (0, r.jsx)(d.A, { "aria-hidden": "true" }) : "error" === e2.status ? (0, r.jsx)(ea.A, { "aria-hidden": "true" }) : null, n2 = "thinking" === e2.status || "streaming" === e2.status;
    return (0, r.jsx)(ef, {
      id: e2.status,
      className: B().outputStatus,
      children: (0, r.jsxs)("span", {
        className: B().outputStatusInner,
        "data-status": e2.status,
        children: [
          a2,
          (0, r.jsx)("span", {
            className: n2 ? B().shimmer : void 0,
            children: t2
          }),
          (0, r.jsx)("span", {
            className: B().outputCase,
            children: e2.caseLabel
          })
        ]
      })
    });
  }
  function eC({ run: e2, idleHint: t2, onRetry: a2, lockHeight: n2, bodyRef: l2 }) {
    var d2;
    let u2, p2 = (0, s.I)(), m2 = e2 ? e2.chunks.join("") : "", h2 = e2 ? "error" === e2.status ? `${e2.simulated ? "Simulated error" : "Error"} \xB7 ${e2.model.name}` : e2.stats ? [
      e2.simulated ? "Simulated" : null,
      e2.stats.seconds,
      `${e2.stats.input + e2.stats.output} tokens`,
      e2.stats.cost
    ].filter(Boolean).join(" \xB7 ") : `${e2.simulated ? "Simulated \xB7 " : ""}${e2.model.name} \xB7 ${g[e2.effort]} effort` : null;
    return (0, r.jsx)(ey, {
      armKey: e2 ? "run" : "idle",
      className: B().outputFrame,
      children: (0, r.jsx)("div", {
        className: B().output,
        "data-state": e2?.status ?? "idle",
        children: e2 ? (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: B().outputHead,
              children: [
                (0, r.jsx)(eN, { run: e2 }),
                (0, r.jsx)("span", {
                  className: B().outputCopy,
                  "data-on": ("done" === e2.status || "stopped" === e2.status) && m2 ? "" : void 0,
                  children: (0, r.jsx)(en.CopyButton, {
                    value: m2.trim(),
                    label: "Copy reply",
                    iconOnly: true,
                    variant: "plain",
                    disabled: "done" !== e2.status && "stopped" !== e2.status || !m2
                  })
                })
              ]
            }),
            (0, r.jsx)("div", {
              ref: l2,
              className: B().outputBody,
              style: n2 ? { minHeight: n2 } : void 0,
              children: (0, r.jsx)(i.N, {
                initial: false,
                children: (0, r.jsx)(
                  o.PY1.div,
                  {
                    className: B().outputRun,
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: p2 ? eh : ep },
                    exit: { opacity: 0, transition: p2 ? eh : em },
                    children: "error" === e2.status ? (0, r.jsxs)("div", {
                      className: B().errorBox,
                      role: "alert",
                      children: [
                        (0, r.jsx)("p", {
                          className: B().errorText,
                          children: e2.error
                        }),
                        (0, r.jsx)(c.$, {
                          variant: "secondary",
                          size: "sm",
                          onClick: a2,
                          children: "Retry"
                        })
                      ]
                    }) : (0, r.jsx)("div", {
                      className: B().reply,
                      "aria-busy": "thinking" === e2.status || "streaming" === e2.status || void 0,
                      children: (d2 = e2.chunks, u2 = [[]], d2.forEach((e3, t3) => {
                        e3.split(/\n{2,}/).forEach((e4, a3) => {
                          a3 > 0 && u2.push([]), e4 && u2[u2.length - 1].push({
                            key: `${t3}-${a3}`,
                            text: e4
                          });
                        });
                      }), u2.map((e3, t3) => ({ key: t3, items: e3 })).filter((e3) => e3.items.length)).map(
                        (e3) => (0, r.jsx)(
                          "p",
                          {
                            className: B().replyParagraph,
                            children: e3.items.map(
                              (e4) => (0, r.jsx)(
                                "span",
                                {
                                  className: p2 ? void 0 : B().chunk,
                                  children: e4.text
                                },
                                e4.key
                              )
                            )
                          },
                          e3.key
                        )
                      )
                    })
                  },
                  e2.id
                )
              })
            }),
            (0, r.jsx)("div", {
              className: B().outputFoot,
              children: (0, r.jsx)(ef, {
                id: h2 ?? "",
                className: B().outputFootText,
                children: h2
              })
            })
          ]
        }) : (0, r.jsx)("div", { className: B().outputIdle, children: t2 })
      })
    });
  }
  let eA = [4, 5, 3, 6, 4, 3, 5], eS = { duration: u.T.duration.fast, ease: [...u.T.ease.enter] }, eE = { duration: 0.1 };
  function e$({
    name: e2 = "Support reply",
    versions: t2,
    versionId: a2,
    productionId: u2,
    template: m2,
    variables: f2,
    testCases: g2 = A,
    models: _2 = h,
    defaultModel: y2 = "claude-sonnet-5-5",
    defaultEffort: x2,
    now: b2,
    onRun: w2,
    onPromote: j2,
    onTemplateChange: k2,
    className: S2
  }) {
    var E2;
    let L2, P2 = (0, n.useId)(), D2 = (0, s.I)(), F2 = (0, p.YV)(), I2 = t2 ?? N, O2 = a2 ?? I2[0]?.id ?? "", z2 = I2.find((e3) => e3.id === O2) ?? I2[0], [U2] = (0, n.useState)(() => Date.now()), K2 = void 0 !== b2 ? new Date(b2).getTime() : t2 ? U2 : Date.parse("2026-10-20T12:00:00Z"), [H2, W2] = (0, n.useState)(
      () => m2 ?? { system: z2?.system ?? "", user: z2?.user ?? "" }
    ), [Y2, G2] = (0, n.useState)("system"), V2 = (0, n.useMemo)(() => $(H2.system, H2.user), [H2]), Z2 = (0, n.useMemo)(
      () => f2 ?? (t2 ? $(z2?.system ?? "", z2?.user ?? "") : C),
      [f2, t2, z2]
    ), Q2 = (0, n.useMemo)(() => [.../* @__PURE__ */ new Set([...Z2, ...V2])], [Z2, V2]), X2 = (0, n.useCallback)(
      (e3) => {
        let t3 = Q2.indexOf(e3);
        return (t3 < 0 ? Q2.length : t3) % 4 + 1;
      },
      [Q2]
    ), [J2, ee2] = (0, n.useState)(g2[0]?.id ?? ""), et2 = g2.find((e3) => e3.id === J2) ?? g2[0], [ea2, er2] = (0, n.useState)(() => ({ ...g2[0]?.values })), [en2, es2] = (0, n.useState)(null), [ei2, eo2] = (0, n.useState)(null), [el2, ed2] = (0, n.useState)(""), eu2 = (0, n.useRef)(0), ec2 = Q2.filter((e3) => !ea2[e3]?.trim()), ep2 = (0, n.useMemo)(
      () => new Set(
        Q2.filter((e3) => g2.some((t3) => (t3.values[e3] ?? "").length > 30))
      ),
      [Q2, g2]
    ), [em2, eh2] = (0, n.useState)(
      () => _2.find((e3) => e3.id === y2)?.id ?? _2[0]?.id ?? ""
    ), e_2 = _2.find((e3) => e3.id === em2) ?? _2[0], [ex2, ej2] = (0, n.useState)(() => x2 ?? e_2?.defaultEffort ?? "medium"), [eN2, eR2] = (0, n.useState)(() => void 0 !== u2 ? u2 : O2), [eT, eL] = (0, n.useState)(null), [eP, eD] = (0, n.useState)(null), eM = I2.find((e3) => e3.id === eP) ?? null;
    function eF() {
      eD(null), ed2("Back to editing");
    }
    let eI = (0, n.useMemo)(
      () => eM ? { system: M(eM.system, H2.system), user: M(eM.user, H2.user) } : null,
      [eM, H2]
    ), eO = eI ? (E2 = eI[Y2], {
      added: (L2 = (e3) => E2.filter((t3) => t3.type === e3).reduce(
        (e4, t3) => e4 + (t3.text.trim() ? t3.text.trim().split(/\s+/).length : 0),
        0
      ))("add"),
      removed: L2("remove")
    }) : null, eB = eI ? {
      system: eI.system.some((e3) => "same" !== e3.type),
      user: eI.user.some((e3) => "same" !== e3.type)
    } : null, {
      run: ez,
      start: eU,
      stop: eK,
      running: eH
    } = (function(e3) {
      let [t3, a3] = (0, n.useState)(null), r2 = (0, n.useRef)(null), s2 = (0, n.useRef)(0), i2 = (0, n.useRef)(e3);
      (0, n.useLayoutEffect)(() => {
        i2.current = e3;
      });
      let o2 = (0, n.useCallback)(() => {
        let e4 = r2.current;
        e4 && (e4.abort.abort(), cancelAnimationFrame(e4.frame), window.clearTimeout(e4.timer), r2.current = null);
      }, []);
      (0, n.useEffect)(() => o2, [o2]);
      let l2 = (0, n.useCallback)(
        (e4, t4) => {
          o2();
          let n2 = ++s2.current, l3 = { abort: new AbortController(), frame: 0, timer: 0 };
          r2.current = l3;
          let d3 = performance.now(), u4 = i2.current, c2 = { text: "", done: false, error: null }, p2 = (e5) => a3((t5) => t5 && t5.id === n2 ? e5(t5) : t5);
          a3({
            id: n2,
            status: "thinking",
            chunks: [],
            caseLabel: t4.caseLabel,
            model: e4.model,
            effort: e4.effort,
            simulated: !u4
          }), u4 ? (async () => {
            try {
              let t5 = await u4(e4, l3.abort.signal);
              if ("string" == typeof t5) c2.text = t5;
              else
                for await (let e5 of t5) {
                  if (l3.abort.signal.aborted) return;
                  c2.text += e5;
                }
              c2.done = true;
            } catch (e5) {
              l3.abort.signal.aborted || (c2.error = e5 instanceof Error && e5.message ? e5.message : "The run failed.");
            }
          })() : l3.timer = window.setTimeout(() => {
            t4.fail ? c2.error = t4.fail : c2.text = t4.reply, c2.done = true;
          }, t4.think);
          let m3 = 0, h2 = 0, f3 = 0, g3 = (t5) => {
            if (c2.error) {
              r2.current = null, p2((e5) => ({
                ...e5,
                status: "error",
                error: c2.error ?? void 0
              }));
              return;
            }
            if (t5 - f3 >= 40) {
              let e5 = c2.text.slice(m3).match(c2.done ? /\s*\S+(?:\s+|$)/g : /\s*\S+\s+/g);
              if (e5?.length) {
                let a5 = Math.min(
                  8,
                  eA[h2 % eA.length] + Math.floor(e5.length / 30)
                ), r3 = e5.slice(0, a5).join("");
                m3 += r3.length, h2++, f3 = t5, p2((e6) => ({
                  ...e6,
                  status: "streaming",
                  chunks: [...e6.chunks, r3]
                }));
              }
            }
            if (c2.done && m3 >= c2.text.trimEnd().length) {
              var a4;
              r2.current = null;
              let n3 = t5 - d3, s3 = T(`${e4.rendered.system}
${e4.rendered.user}`), i3 = T(c2.text), o3 = (a4 = (s3 * e4.model.input + i3 * e4.model.output) / 1e6) <= 0 ? "$0.00" : a4 < 1e-4 ? "<$0.0001" : `$${a4 < 0.1 ? a4.toFixed(4) : a4.toFixed(3)}`;
              p2((e5) => ({
                ...e5,
                status: "done",
                stats: {
                  ms: n3,
                  input: s3,
                  output: i3,
                  cost: o3,
                  seconds: `${(n3 / 1e3).toFixed(2)} s`
                }
              }));
              return;
            }
            l3.frame = requestAnimationFrame(g3);
          };
          l3.frame = requestAnimationFrame(g3);
        },
        [o2]
      ), d2 = (0, n.useCallback)(() => {
        r2.current && (o2(), a3(
          (e4) => e4 && ("thinking" === e4.status || "streaming" === e4.status) ? { ...e4, status: "stopped" } : e4
        ));
      }, [o2]), u3 = t3?.status === "thinking" || t3?.status === "streaming";
      return { run: t3, start: l2, stop: d2, running: u3 };
    })(w2), eW = (0, n.useRef)(null), [eY, eG] = (0, n.useState)(null), eV = (0, n.useRef)(false), eZ = (0, n.useCallback)(() => {
      if (eH || !e_2 || !et2) return;
      let e3 = { system: R(H2.system, ea2), user: R(H2.user, ea2) };
      eG(eW.current?.offsetHeight ?? null);
      let t3 = w2 || "window" !== et2.id || eV.current ? void 0 : `${e_2.name} is overloaded right now (529). Nothing was billed, so it is safe to retry.`;
      t3 && (eV.current = true), eU(
        {
          template: H2,
          rendered: e3,
          values: ea2,
          model: e_2,
          effort: ex2,
          testCaseId: et2.id,
          versionId: O2
        },
        {
          reply: (function(e4, t4) {
            let a3 = (t4.customer_name ?? "").trim().split(/\s+/)[0] || "there", r2 = t4.order_id?.trim() || "your order";
            switch (e4) {
              case "damaged":
                return `Hi ${a3},

I'm sorry your order arrived damaged. That's not how anything from Fernwood should reach you. I've set up a free replacement for order ${r2}, and it ships as soon as the carrier collects it.

There's no need to send the damaged item back. If you'd rather have a refund instead, reply to this email and I'll switch it over today.

Fernwood Support`;
              case "window":
                return `Hi ${a3},

Thanks for getting in touch about order ${r2}. Our policy accepts returns within 30 days of delivery, and this order arrived in August, so it falls outside the standard window.

I don't want to leave you without options, so I've asked a team lead to review your request. You'll hear back from them within one business day.

Fernwood Support`;
              default:
                return `Hi ${a3},

Thanks for flagging this, and I'm sorry the wait has dragged on. I checked order ${r2}: it left our warehouse on time, but the carrier hasn't posted a scan since Tuesday. I've opened a trace and will email you as soon as they confirm where it is.

Because the order is now more than 5 business days late, I've refunded your shipping fee. It should reach your card within 3 to 5 days.

Fernwood Support`;
            }
          })(et2.id, ea2),
          fail: t3,
          think: v[ex2],
          caseLabel: et2.label
        }
      ), ed2(`Running ${et2.label} on ${e_2.name}${w2 ? "" : ", simulated"}`);
    }, [eH, e_2, et2, H2, ea2, w2, eU, ex2, O2]), [eq, eQ] = (0, n.useState)(ez?.status);
    ez?.status !== eq && (eQ(ez?.status), ez && "thinking" !== ez.status && "streaming" !== ez.status && (eG(null), ed2(
      "done" === ez.status ? `Reply ready${ez.simulated ? ", simulated" : ""}, ${ez.stats?.seconds}, ${ez.stats ? ez.stats.input + ez.stats.output : 0} tokens, ${ez.stats?.cost}` : "error" === ez.status ? `Run failed. ${ez.error}` : "Run stopped"
    )));
    let eX = T(R(H2[Y2], ea2)), eJ = (e3) => `${P2}-${e3}`;
    return (0, r.jsxs)("div", {
      className: [B().root, S2].filter(Boolean).join(" "),
      children: [
        (0, r.jsxs)("section", {
          className: B().card,
          "aria-label": `${e2} prompt`,
          onKeyDown: function(e3) {
            !e3.defaultPrevented && ((e3.metaKey || e3.ctrlKey) && "Enter" === e3.key ? (e3.preventDefault(), eZ()) : "Escape" === e3.key && eP && e3.currentTarget.contains(e3.target) && (e3.preventDefault(), eF()));
          },
          children: [
            (0, r.jsxs)("header", {
              className: B().header,
              children: [
                (0, r.jsxs)("div", {
                  className: B().titleGroup,
                  children: [
                    (0, r.jsx)("h2", { className: B().title, children: e2 }),
                    (0, r.jsx)(eb, {
                      versions: I2,
                      openId: O2,
                      productionId: eN2,
                      now: K2,
                      promotion: eT,
                      onCompare: function(e3) {
                        eD(e3), ed2(
                          `Comparing ${I2.find((t3) => t3.id === e3)?.label} with ${z2?.label}`
                        );
                      },
                      onPromote: function(e3) {
                        eR2(e3), eL({ from: eN2, to: e3 }), j2?.(e3, eN2), ed2(
                          `${I2.find((t3) => t3.id === e3)?.label} promoted to production. Undo is available.`
                        );
                      },
                      onUndo: function() {
                        eT && (eR2(eT.from), j2?.(eT.from ?? "", eT.to), ed2(
                          `Promotion undone. Production serves ${I2.find((e3) => e3.id === eT.from)?.label ?? "no version"}.`
                        ), eL(null));
                      }
                    })
                  ]
                }),
                (0, r.jsx)(ew, {
                  models: _2,
                  modelId: em2,
                  effort: ex2,
                  onModel: function(e3) {
                    let t3 = _2.find((t4) => t4.id === e3);
                    t3 && e3 !== em2 && (eh2(e3), ej2(t3.defaultEffort), ed2(`${t3.name} selected, ${t3.defaultEffort} effort`));
                  },
                  onEffort: (e3) => {
                    ej2(e3), ed2(`${e3} effort`);
                  }
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: B().editor,
              children: [
                (0, r.jsxs)("div", {
                  className: B().editorBar,
                  children: [
                    (0, r.jsx)(eg, {
                      kind: "tabs",
                      label: "Prompt part",
                      value: Y2,
                      onChange: (e3) => G2(e3),
                      options: [
                        {
                          value: "system",
                          id: eJ("tab-system"),
                          panel: eJ("system"),
                          label: (0, r.jsxs)(r.Fragment, {
                            children: [
                              "System",
                              eB?.system ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)("span", {
                                    className: B().tabDot,
                                    "aria-hidden": "true"
                                  }),
                                  (0, r.jsx)("span", {
                                    className: B().srOnly,
                                    children: ", changed"
                                  })
                                ]
                              }) : null
                            ]
                          })
                        },
                        {
                          value: "user",
                          id: eJ("tab-user"),
                          panel: eJ("user"),
                          label: (0, r.jsxs)(r.Fragment, {
                            children: [
                              "User",
                              eB?.user ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)("span", {
                                    className: B().tabDot,
                                    "aria-hidden": "true"
                                  }),
                                  (0, r.jsx)("span", {
                                    className: B().srOnly,
                                    children: ", changed"
                                  })
                                ]
                              }) : null
                            ]
                          })
                        }
                      ]
                    }),
                    (0, r.jsx)("div", {
                      className: B().corner,
                      children: (0, r.jsx)(i.N, {
                        initial: false,
                        children: eM && eO ? (0, r.jsxs)(
                          o.PY1.div,
                          {
                            className: B().cornerItem,
                            initial: { opacity: 0 },
                            animate: {
                              opacity: 1,
                              transition: D2 ? { duration: 0 } : eS
                            },
                            exit: {
                              opacity: 0,
                              transition: D2 ? { duration: 0 } : eE
                            },
                            children: [
                              (0, r.jsxs)("span", {
                                className: B().diffStats,
                                children: [
                                  (0, r.jsxs)("span", {
                                    className: B().statAdd,
                                    children: [
                                      (0, r.jsx)("span", {
                                        "aria-hidden": "true",
                                        children: "+"
                                      }),
                                      eO.added,
                                      (0, r.jsx)("span", {
                                        className: B().srOnly,
                                        children: " words added"
                                      })
                                    ]
                                  }),
                                  (0, r.jsxs)("span", {
                                    className: B().statRemove,
                                    children: [
                                      (0, r.jsx)("span", {
                                        "aria-hidden": "true",
                                        children: "\u2212"
                                      }),
                                      eO.removed,
                                      (0, r.jsx)("span", {
                                        className: B().srOnly,
                                        children: " words removed"
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, r.jsx)(c.$, {
                                variant: "ghost",
                                size: "sm",
                                className: B().backButton,
                                onClick: eF,
                                children: "Back to editing"
                              })
                            ]
                          },
                          "compare"
                        ) : (0, r.jsx)(
                          o.PY1.div,
                          {
                            className: B().cornerItem,
                            initial: { opacity: 0 },
                            animate: {
                              opacity: 1,
                              transition: D2 ? { duration: 0 } : eS
                            },
                            exit: {
                              opacity: 0,
                              transition: D2 ? { duration: 0 } : eE
                            },
                            children: (0, r.jsxs)("span", {
                              className: B().tokens,
                              children: [
                                (0, r.jsx)(ev, { value: eX }),
                                (0, r.jsx)("span", {
                                  children: "tokens"
                                })
                              ]
                            })
                          },
                          "tokens"
                        )
                      })
                    })
                  ]
                }),
                (0, r.jsx)(ey, {
                  armKey: eP ?? "edit",
                  sticky: false,
                  children: (0, r.jsxs)("div", {
                    className: B().editorStack,
                    children: [
                      ["system", "user"].map((e3) => {
                        let t3 = Y2 !== e3 || !!eM;
                        return (0, r.jsx)(
                          "div",
                          {
                            id: eJ(e3),
                            role: "tabpanel",
                            "aria-labelledby": eJ(`tab-${e3}`),
                            className: B().pane,
                            "data-hidden": t3 || void 0,
                            inert: t3,
                            children: (0, r.jsx)(q, {
                              value: H2[e3],
                              onChange: (t4) => {
                                let a3;
                                W2(a3 = { ...H2, [e3]: t4 }), k2?.(a3);
                              },
                              variables: Q2,
                              toneOf: X2,
                              missing: ec2,
                              activeVariable: en2,
                              flash: ei2,
                              inert: t3,
                              onChipClick: (e4) => document.getElementById(eJ(`field-${e4}`))?.focus(),
                              onSubmit: eZ,
                              label: `${"system" === e3 ? "System" : "User"} prompt`,
                              describedBy: eJ("hint"),
                              placeholder: "system" === e3 ? "Describe how the model should behave" : "Write the message, with {{variables}}"
                            })
                          },
                          e3
                        );
                      }),
                      (0, r.jsx)(i.N, {
                        initial: false,
                        children: eM && eI && (0, r.jsx)(
                          o.PY1.div,
                          {
                            className: B().diffPane,
                            initial: { opacity: 0 },
                            animate: {
                              opacity: 1,
                              transition: D2 ? { duration: 0 } : eS
                            },
                            exit: {
                              opacity: 0,
                              transition: D2 ? { duration: 0 } : eE
                            },
                            role: "region",
                            "aria-label": `Changes from ${eM.label} to ${z2?.label}, ${Y2} prompt`,
                            children: (0, r.jsx)(ek, {
                              ops: eI[Y2],
                              toneOf: X2
                            })
                          },
                          `diff-${eM.id}`
                        )
                      })
                    ]
                  })
                }),
                (0, r.jsx)("div", {
                  className: B().hint,
                  id: eJ("hint"),
                  children: (0, r.jsx)(ef, {
                    id: eM ? `c-${eM.id}` : "edit",
                    className: B().hintSwap,
                    children: eM ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsxs)("span", {
                          className: B().hintVersions,
                          children: [eM.label, " to ", z2?.label]
                        }),
                        (0, r.jsx)("span", {
                          className: B().legendAdd,
                          children: "+ added"
                        }),
                        (0, r.jsxs)("span", {
                          className: B().legendRemove,
                          children: ["\u2212", " removed"]
                        })
                      ]
                    }) : (0, r.jsxs)(r.Fragment, {
                      children: [
                        "Type ",
                        (0, r.jsx)("span", {
                          className: B().hintKey,
                          children: "{{"
                        }),
                        " to add a variable"
                      ]
                    })
                  })
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: B().vars,
              children: [
                (0, r.jsx)(ey, {
                  armKey: Q2.join(","),
                  sticky: false,
                  children: (0, r.jsx)("div", {
                    className: B().fields,
                    children: Q2.map((e3) => {
                      let t3 = V2.includes(e3);
                      return (0, r.jsxs)(
                        "label",
                        {
                          className: B().field,
                          "data-tone": X2(e3),
                          "data-wide": ep2.has(e3) || void 0,
                          "data-unused": !t3 || void 0,
                          children: [
                            (0, r.jsxs)("span", {
                              className: B().fieldLabel,
                              children: [
                                (0, r.jsx)("span", {
                                  className: B().fieldDot,
                                  "aria-hidden": "true"
                                }),
                                e3
                              ]
                            }),
                            (0, r.jsx)("input", {
                              id: eJ(`field-${e3}`),
                              className: B().input,
                              value: ea2[e3] ?? "",
                              spellCheck: false,
                              autoComplete: "off",
                              placeholder: t3 ? "Empty" : "Not in the prompt",
                              "aria-describedby": t3 ? void 0 : eJ("hint"),
                              onChange: (t4) => {
                                var a3;
                                return a3 = t4.target.value, void (er2((t5) => ({ ...t5, [e3]: a3 })), eo2({ name: e3, at: ++eu2.current }));
                              },
                              onFocus: () => es2(e3),
                              onBlur: () => es2((t4) => t4 === e3 ? null : t4)
                            })
                          ]
                        },
                        e3
                      );
                    })
                  })
                }),
                (0, r.jsxs)("div", {
                  className: B().runRow,
                  children: [
                    (0, r.jsx)(eg, {
                      kind: "segmented",
                      label: "Test case",
                      value: J2,
                      onChange: function(e3) {
                        let t3 = g2.find((t4) => t4.id === e3);
                        t3 && (ee2(e3), er2({ ...t3.values }), ed2(`${t3.label} test case loaded`));
                      },
                      className: B().cases,
                      options: g2.map((e3) => ({ value: e3.id, label: e3.label }))
                    }),
                    (0, r.jsxs)("button", {
                      type: "button",
                      className: B().run,
                      onClick: eH ? eK : eZ,
                      "aria-label": eH ? "Stop run" : "Run prompt",
                      "aria-keyshortcuts": "Meta+Enter Control+Enter",
                      children: [
                        (0, r.jsxs)("span", {
                          className: B().runIcon,
                          "aria-hidden": "true",
                          children: [
                            (0, r.jsx)(l.A, { "data-on": !eH || void 0 }),
                            (0, r.jsx)(d.A, { "data-on": eH || void 0 })
                          ]
                        }),
                        (0, r.jsxs)("span", {
                          className: B().runLabel,
                          "aria-hidden": "true",
                          children: [
                            (0, r.jsx)("span", {
                              "data-on": !eH || void 0,
                              children: "Run"
                            }),
                            (0, r.jsx)("span", {
                              "data-on": eH || void 0,
                              children: "Stop"
                            })
                          ]
                        }),
                        (0, r.jsx)("span", {
                          className: B().runKeys,
                          "aria-hidden": "true",
                          children: "pc" === F2 ? "Ctrl \u21B5" : "\u2318\u21B5"
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, r.jsx)(eC, {
              run: ez,
              bodyRef: eW,
              lockHeight: eY,
              onRetry: eZ,
              idleHint: (0, r.jsxs)("span", {
                children: [
                  "Run ",
                  (0, r.jsx)("span", {
                    className: B().idleCase,
                    children: et2?.label
                  }),
                  " to see the reply here",
                  w2 ? "" : ". Runs are simulated",
                  "."
                ]
              })
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: B().srOnly,
          role: "status",
          "aria-live": "polite",
          children: el2
        })
      ]
    });
  }
  let eR = e$;
};

__m(__module,__exports,__require);
});
A.reg(53646, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var i = a(51811);
  let s = {
    name: "arrow-up-from-line",
    size: 24,
    node: [
      ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
      ["path", { d: "M12 3v14", key: "7cf3v8" }],
      ["path", { d: "M5 21h14", key: "11awu3" }]
    ]
  };
  s.node;
  let n = (0, i.A)(s);
}

__m(__module,__exports,__require);
});
A.reg(76266, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { YV: () => u, ue: () => h });
  var r = a(95155), n = a(12115), s = a(12053), i = a.n(s);
  let o = (...e2) => (t2) => e2.includes(t2.key), l = (e2, ...t2) => (a2) => a2.code === e2 || t2.includes(a2.key), d = () => () => {
  }, c = () => {
    let e2 = navigator;
    return /mac|iphone|ipad|ipod/i.test(
      e2.userAgentData?.platform || e2.platform || e2.userAgent
    ) ? "mac" : "pc";
  };
  function u(e2 = "auto") {
    let t2 = (0, n.useSyncExternalStore)(d, c, () => "mac");
    return "auto" === e2 ? t2 : e2;
  }
  function h({
    keys: e2,
    children: t2,
    size: a2 = "md",
    platform: s2 = "auto",
    listen: d2 = false,
    pressed: c2 = false,
    onTrigger: p,
    className: m,
    ..._
  }) {
    let b = u(s2), y = (void 0 !== e2 ? "string" != typeof e2 ? [...e2] : e2.replace(/\+\+$/, "+plus").split("+").filter(Boolean) : "string" == typeof t2 ? [t2] : []).map(
      (e3) => (function e4(t3, { platform: a3 }) {
        let r2 = t3.trim(), n2 = r2.toLowerCase(), s3 = "mac" === a3;
        switch (n2) {
          case "mod":
            return s3 ? e4("meta", { platform: a3 }) : e4("ctrl", { platform: a3 });
          case "meta":
          case "cmd":
          case "command":
          case "win":
          case "super":
            return {
              id: "meta",
              glyph: s3 ? "\u2318" : "Win",
              name: s3 ? "Command" : "Windows",
              modifier: "meta",
              match: o("Meta", "OS")
            };
          case "ctrl":
          case "control":
            return {
              id: "ctrl",
              glyph: s3 ? "\u2303" : "Ctrl",
              name: "Control",
              modifier: "ctrl",
              match: o("Control")
            };
          case "alt":
          case "option":
          case "opt":
            return {
              id: "alt",
              glyph: s3 ? "\u2325" : "Alt",
              name: s3 ? "Option" : "Alt",
              modifier: "alt",
              match: o("Alt")
            };
          case "shift":
            return {
              id: "shift",
              glyph: s3 ? "\u21E7" : "Shift",
              name: "Shift",
              modifier: "shift",
              match: o("Shift")
            };
          case "enter":
          case "return":
            return {
              id: n2,
              glyph: s3 ? "\u21B5" : "Enter",
              name: s3 ? "Return" : "Enter",
              match: o("Enter")
            };
          case "esc":
          case "escape":
            return {
              id: "esc",
              glyph: "Esc",
              name: "Escape",
              match: o("Escape", "Esc")
            };
          case "tab":
            return {
              id: n2,
              glyph: s3 ? "\u21E5" : "Tab",
              name: "Tab",
              match: o("Tab")
            };
          case "backspace":
            return {
              id: n2,
              glyph: s3 ? "\u232B" : "Backspace",
              name: s3 ? "Delete" : "Backspace",
              match: o("Backspace")
            };
          case "delete":
          case "del":
            return {
              id: "delete",
              glyph: s3 ? "\u2326" : "Del",
              name: s3 ? "Forward delete" : "Delete",
              match: o("Delete")
            };
          case "space":
            return {
              id: n2,
              glyph: "Space",
              name: "Space",
              match: l("Space", " ")
            };
          case "up":
          case "arrowup":
            return {
              id: "up",
              glyph: "\u2191",
              name: "Up arrow",
              match: o("ArrowUp")
            };
          case "down":
          case "arrowdown":
            return {
              id: "down",
              glyph: "\u2193",
              name: "Down arrow",
              match: o("ArrowDown")
            };
          case "left":
          case "arrowleft":
            return {
              id: "left",
              glyph: "\u2190",
              name: "Left arrow",
              match: o("ArrowLeft")
            };
          case "right":
          case "arrowright":
            return {
              id: "right",
              glyph: "\u2192",
              name: "Right arrow",
              match: o("ArrowRight")
            };
          case "pageup":
            return {
              id: n2,
              glyph: "PgUp",
              name: "Page up",
              match: o("PageUp")
            };
          case "pagedown":
            return {
              id: n2,
              glyph: "PgDn",
              name: "Page down",
              match: o("PageDown")
            };
          case "home":
            return { id: n2, glyph: "Home", name: "Home", match: o("Home") };
          case "end":
            return { id: n2, glyph: "End", name: "End", match: o("End") };
          case "plus":
            return { id: n2, glyph: "+", name: "Plus", match: o("+", "=") };
          case "capslock":
            return {
              id: n2,
              glyph: s3 ? "\u21EA" : "Caps",
              name: "Caps lock",
              match: o("CapsLock")
            };
        }
        return /^[a-z]$/.test(n2) ? {
          id: n2,
          glyph: n2.toUpperCase(),
          name: n2.toUpperCase(),
          match: l(`Key${n2.toUpperCase()}`, n2, n2.toUpperCase())
        } : /^[0-9]$/.test(n2) ? { id: n2, glyph: n2, name: n2, match: l(`Digit${n2}`, n2) } : /^f([1-9]|1[0-9]|2[0-4])$/.test(n2) ? {
          id: n2,
          glyph: n2.toUpperCase(),
          name: n2.toUpperCase(),
          match: o(n2.toUpperCase())
        } : {
          id: n2,
          glyph: 1 === r2.length ? r2 : r2.charAt(0).toUpperCase() + r2.slice(1),
          name: r2,
          match: (e5) => e5.key.toLowerCase() === n2
        };
      })(e3, { platform: b })
    ), f = y.map((e3) => e3.id).join("+") + b, [w, x] = (0, n.useState)(() => /* @__PURE__ */ new Set()), k = (0, n.useRef)({ parsed: y, onTrigger: p, mac: "mac" === b });
    (0, n.useEffect)(() => {
      k.current = { parsed: y, onTrigger: p, mac: "mac" === b };
    }), (0, n.useEffect)(() => {
      if (!d2) return;
      let e3 = /* @__PURE__ */ new Set(), t3 = /* @__PURE__ */ new Map(), a3 = () => x(new Set(e3)), r2 = (r3) => {
        window.clearTimeout(t3.get(r3)), t3.delete(r3), e3.delete(r3) && a3();
      }, n2 = () => {
        t3.forEach((e4) => window.clearTimeout(e4)), t3.clear(), e3.size && (e3.clear(), a3());
      }, s3 = (n3) => {
        var s4;
        let { parsed: i3, onTrigger: o2, mac: l2 } = k.current;
        if (!i3.some(
          (e4) => "meta" === e4.modifier || "ctrl" === e4.modifier || "alt" === e4.modifier
        ) && (s4 = n3.target) && s4.tagName && (s4.isContentEditable || "TEXTAREA" === s4.tagName || "SELECT" === s4.tagName || "INPUT" === s4.tagName && ![
          "checkbox",
          "radio",
          "button",
          "submit",
          "range",
          "color"
        ].includes(s4.type)))
          return;
        let d3 = false;
        if (i3.forEach((a4, s5) => {
          a4.match(n3) && (e3.has(s5) || (e3.add(s5), d3 = true), l2 && n3.metaKey && !a4.modifier && (window.clearTimeout(t3.get(s5)), t3.set(
            s5,
            window.setTimeout(() => r2(s5), 170)
          )));
        }), d3 && a3(), !o2 || n3.repeat || !i3.length)
          return;
        let c3 = { meta: false, ctrl: false, alt: false, shift: false };
        i3.forEach((e4) => {
          e4.modifier && (c3[e4.modifier] = true);
        });
        let u2 = i3.filter((e4) => !e4.modifier), h2 = c3.meta === n3.metaKey && c3.ctrl === n3.ctrlKey && c3.alt === n3.altKey && (c3.shift === n3.shiftKey || !c3.shift && 1 === u2.length && 1 === u2[0].glyph.length && !/[a-z0-9]/i.test(u2[0].glyph)), p2 = u2.length ? u2.every((e4) => e4.match(n3)) : i3.some((e4) => e4.match(n3));
        h2 && p2 && (n3.preventDefault(), o2(n3));
      }, i2 = (e4) => {
        let { parsed: t4 } = k.current;
        "Meta" === e4.key || "OS" === e4.key ? n2() : t4.forEach((t5, a4) => {
          t5.match(e4) && r2(a4);
        });
      };
      return window.addEventListener("keydown", s3), window.addEventListener("keyup", i2), window.addEventListener("blur", n2), document.addEventListener("visibilitychange", n2), () => {
        window.removeEventListener("keydown", s3), window.removeEventListener("keyup", i2), window.removeEventListener("blur", n2), document.removeEventListener("visibilitychange", n2), t3.forEach((e4) => window.clearTimeout(e4)), x(/* @__PURE__ */ new Set());
      };
    }, [d2, f]);
    let g = (e3, t3, a3) => (0, r.jsx)(
      "kbd",
      {
        className: i().key,
        "data-pressed": c2 || w.has(a3) ? "" : void 0,
        children: null === t3 ? e3 : (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("span", {
              className: i().glyph,
              "aria-hidden": "true",
              children: e3
            }),
            (0, r.jsx)("span", {
              className: i().hidden,
              children: t3
            })
          ]
        })
      },
      a3
    ), v = [i().kbd, i()[a2], m].filter(Boolean).join(" ");
    if (void 0 === e2) {
      let e3 = y[0], a3 = e3 && e3.glyph !== e3.name;
      return (0, r.jsx)("kbd", {
        ..._,
        className: v,
        children: g(a3 ? e3.glyph : t2, a3 ? e3.name : null, 0)
      });
    }
    return (0, r.jsx)("kbd", {
      ..._,
      className: v,
      children: y.map(
        (e3, t3) => (0, r.jsxs)(
          "span",
          {
            className: i().slot,
            children: [
              t3 > 0 && (0, r.jsx)("span", { className: i().hidden, children: " " }),
              g(e3.glyph, e3.glyph === e3.name ? null : e3.name, t3)
            ]
          },
          `${e3.id}-${t3}`
        )
      )
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(80400, ".prompt-studio_root__X6_BD{--inset:16px;--pad:12px;container-type:inline-size;display:grid;width:100%;box-sizing:border-box;justify-items:center;align-content:start;padding:clamp(16px,5vw,56px) 16px;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.prompt-studio_root__X6_BD *,.prompt-studio_root__X6_BD :after,.prompt-studio_root__X6_BD :before{box-sizing:border-box}.prompt-studio_card__ymmte{width:100%;max-width:760px;min-width:0;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface)}.prompt-studio_srOnly__hI86i{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.prompt-studio_field__HPZvw,.prompt-studio_suggestOption__5hu2Z,.prompt-studio_varChip__AnDlD{--tone:var(--series-1);--tone-ink:color-mix(in oklab,var(--tone) 68%,var(--foreground))}.prompt-studio_field__HPZvw[data-tone=\"2\"],.prompt-studio_suggestOption__5hu2Z[data-tone=\"2\"],.prompt-studio_varChip__AnDlD[data-tone=\"2\"]{--tone:var(--series-2)}.prompt-studio_field__HPZvw[data-tone=\"3\"],.prompt-studio_suggestOption__5hu2Z[data-tone=\"3\"],.prompt-studio_varChip__AnDlD[data-tone=\"3\"]{--tone:var(--series-3)}.prompt-studio_field__HPZvw[data-tone=\"4\"],.prompt-studio_suggestOption__5hu2Z[data-tone=\"4\"],.prompt-studio_varChip__AnDlD[data-tone=\"4\"]{--tone:var(--series-4)}.prompt-studio_swap__T1bNA{position:relative;display:inline-grid;align-items:center;justify-items:start;white-space:nowrap;vertical-align:middle}.prompt-studio_swapItem__0q796,.prompt-studio_swapMeasure__RcUxc{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}.prompt-studio_swapItem__0q796{grid-area:1/1}.prompt-studio_swapMeasure__RcUxc{position:absolute;top:0;left:0;visibility:hidden;pointer-events:none}.prompt-studio_autoHeight__mogim{overflow:clip;overflow-clip-margin:4px}.prompt-studio_header__CzVY7{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 12px;padding:14px var(--inset) 14px calc(var(--inset) + var(--pad));border-bottom:1px solid var(--border)}.prompt-studio_titleGroup__bE96d{display:flex;min-width:0;align-items:center;gap:10px}.prompt-studio_title__PyMcK{min-width:0;margin:0;overflow:hidden;font-size:var(--text-base);font-weight:500;line-height:1.3;text-overflow:ellipsis;white-space:nowrap}.prompt-studio_chip__FNePv{display:inline-flex;height:32px;flex:none;align-items:center;gap:6px;padding:0 9px 0 11px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:1;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-instant) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.prompt-studio_chip__FNePv:hover{border-color:var(--border-strong);background:var(--surface-muted)}}.prompt-studio_chip__FNePv[data-state=open]{border-color:var(--border-strong);background:var(--surface-muted)}.prompt-studio_chipVersion__iYmzB{margin-right:2px;font-weight:500}.prompt-studio_chipState__a_8GF{color:var(--text-secondary)}.prompt-studio_liveDot__bEYT8{display:inline-block;width:6px;height:6px;flex:none;border-radius:50%;background:var(--success)}.prompt-studio_chevron__yUfGy{width:14px;height:14px;flex:none;color:var(--text-muted);stroke-width:1.75}.prompt-studio_modelChip__e29EY{padding-left:9px}.prompt-studio_modelSwap__BMBdh{gap:6px}.prompt-studio_modelName__RAFGt{color:var(--foreground)}.prompt-studio_mark__u_XZ4{width:14px;height:14px;flex:none}.prompt-studio_mark__u_XZ4[data-brand=claude]{color:#d97757}.prompt-studio_menu__65_1m.prompt-studio_menu__65_1m{padding:6px}.prompt-studio_menu__65_1m.prompt-studio_menu__65_1m:not([data-state=closed]){transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-standard) var(--ease-enter)}.prompt-studio_versionMenu__FawK8{width:min(22rem,calc(100vw - 20px))}.prompt-studio_modelMenu___02RF{width:min(20rem,calc(100vw - 20px))}.prompt-studio_modelList__YIVAE,.prompt-studio_versionList__Qli1_{display:grid;gap:2px}.prompt-studio_versionRow__rBsOM{display:grid;grid-template-columns:28px minmax(0,1fr);align-items:start;gap:10px;width:100%;padding:8px 10px;border:0;border-radius:calc(var(--radius-panel) - 8px);background:transparent;color:var(--foreground);font:inherit;text-align:left;cursor:pointer;--focus-outline-offset:-2px;transition:background-color var(--duration-instant) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.prompt-studio_versionRow__rBsOM:hover{background:color-mix(in oklab,var(--surface-muted) 60%,transparent)}}.prompt-studio_versionRow__rBsOM[data-on]{background:var(--surface-muted)}.prompt-studio_versionAvatar___5Avu{margin-top:2px}.prompt-studio_versionText__rUF8Y{display:grid;min-width:0;gap:2px}.prompt-studio_versionMessage__pKowu{min-width:0;color:var(--foreground);line-height:1.4}.prompt-studio_versionMeta__jmrcq{display:flex;min-height:22px;align-items:center;justify-content:space-between;gap:8px;color:var(--text-muted);font-size:var(--text-xs)}.prompt-studio_versionMetaText__Kl8zG{min-width:0}.prompt-studio_versionLabel__oLtyR{color:var(--text-secondary);font-weight:500}.prompt-studio_versionSlot__YZj2Q{display:grid;flex:none;justify-items:end}.prompt-studio_prodMarker__aoIpz{display:inline-flex;height:22px;align-items:center;gap:5px;padding:0 8px;border:1px solid color-mix(in oklab,var(--success) 26%,var(--border));border-radius:var(--radius-pill);background:var(--surface);color:var(--text-secondary);font-size:var(--text-xs);white-space:nowrap}.prompt-studio_menuActions__IKoBU{display:grid;gap:2px;margin-top:6px;padding-top:6px;border-top:1px solid var(--border-subtle)}.prompt-studio_menuAction__4Mhmm{display:flex;height:36px;align-items:center;gap:10px;padding:0 10px;border:0;border-radius:calc(var(--radius-panel) - 10px);background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;--focus-outline-offset:-2px;transition:background-color var(--duration-instant) var(--ease-standard)}.prompt-studio_menuAction__4Mhmm svg{width:16px;height:16px;flex:none;color:var(--text-secondary);stroke-width:1.75}@media (hover:hover) and (pointer:fine){.prompt-studio_menuAction__4Mhmm:hover:not(:disabled){background:var(--surface-muted)}}.prompt-studio_menuAction__4Mhmm:disabled{color:var(--text-muted);cursor:default}.prompt-studio_menuAction__4Mhmm:disabled svg{color:var(--text-muted)}.prompt-studio_menuStatus__WzgQH{display:flex;min-height:40px;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;padding:2px 2px 0 10px;border-top:1px solid var(--border-subtle);color:var(--text-muted);font-size:var(--text-xs)}.prompt-studio_menuStatusText__nKC5P{min-width:0}.prompt-studio_menuUndo__pZY_9{display:inline-flex}.prompt-studio_modelRow__ySEc_{display:grid;grid-template-columns:16px minmax(0,1fr) auto 14px;align-items:center;gap:10px;width:100%;height:38px;padding:0 10px;border:0;border-radius:calc(var(--radius-panel) - 10px);background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;--focus-outline-offset:-2px;transition:background-color var(--duration-instant) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.prompt-studio_modelRow__ySEc_:hover{background:color-mix(in oklab,var(--surface-muted) 60%,transparent)}}.prompt-studio_modelRow__ySEc_[data-on]{background:var(--surface-muted)}.prompt-studio_modelRow__ySEc_ .prompt-studio_mark__u_XZ4{width:16px;height:16px}.prompt-studio_modelRowName__8mu_w{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prompt-studio_modelPrice__1nxrX{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}.prompt-studio_modelCheck__alKa5{width:14px;height:14px;color:var(--foreground);opacity:0;stroke-width:2;transition:opacity var(--duration-fast) var(--ease-standard)}.prompt-studio_modelCheck__alKa5[data-on]{opacity:1}.prompt-studio_effortRow__8TXmb{display:grid;gap:8px;margin-top:6px;padding:10px 6px 4px;border-top:1px solid var(--border-subtle)}.prompt-studio_effortLabel__IG_DS{padding-left:4px;color:var(--text-secondary);font-size:var(--text-xs)}.prompt-studio_effortSeg__DE1og{display:flex;width:100%}.prompt-studio_effortSeg__DE1og>button{flex:1;padding:0 4px}.prompt-studio_menuNote__NyisU{margin:6px 0 2px;padding:0 10px;color:var(--text-muted);font-size:var(--text-xs)}.prompt-studio_tabs__b0U3V{display:flex;gap:2px}.prompt-studio_segOption__vOztO,.prompt-studio_tab__tLMYi{position:relative;display:inline-flex;height:30px;align-items:center;justify-content:center;padding:0 12px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-muted);font:inherit;font-size:var(--text-sm);white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}.prompt-studio_segOption__vOztO[data-on],.prompt-studio_tab__tLMYi[data-on]{color:var(--foreground)}@media (hover:hover) and (pointer:fine){.prompt-studio_segOption__vOztO:hover,.prompt-studio_tab__tLMYi:hover{color:var(--foreground)}}.prompt-studio_segHighlight__AxDIJ,.prompt-studio_tabHighlight__GU8JH{position:absolute;inset:0;background:var(--surface-muted)}.prompt-studio_segLabel__n1_Mw{position:relative;display:inline-flex;align-items:center;gap:6px}.prompt-studio_tabDot__IKomJ{width:5px;height:5px;border-radius:50%;background:currentColor;opacity:.55}.prompt-studio_seg__5Z_ce{display:inline-flex;max-width:100%;gap:2px;padding:2px;overflow-x:auto;border:1px solid var(--border);border-radius:var(--radius-pill);scrollbar-width:none}.prompt-studio_seg__5Z_ce::-webkit-scrollbar{display:none}.prompt-studio_segOption__vOztO{height:30px;padding:0 12px;--focus-outline-offset:-2px}.prompt-studio_editor__ESUEj{padding:10px var(--inset) 12px;border-bottom:1px solid var(--border)}.prompt-studio_editorBar__Y1AT4{display:flex;min-height:36px;align-items:center;justify-content:space-between;gap:8px}.prompt-studio_corner__NckkE{display:grid;min-width:0;align-items:center;justify-items:end}.prompt-studio_cornerItem__eS3LS{display:flex;grid-area:1/1;align-items:center;gap:8px;white-space:nowrap}.prompt-studio_tokens__W_qq6{display:inline-flex;align-items:center;gap:4px;padding-right:var(--pad);color:var(--text-muted);font-size:var(--text-xs);line-height:1.4em}.prompt-studio_backButton__K0JLt{min-height:32px}.prompt-studio_diffStats__DR2nw{display:inline-flex;gap:8px;font-size:var(--text-xs);font-variant-numeric:tabular-nums}.prompt-studio_statAdd__Wvczz{color:color-mix(in oklab,var(--success) 72%,var(--foreground))}.prompt-studio_statRemove__MsRy4{color:color-mix(in oklab,var(--danger) 72%,var(--foreground))}.prompt-studio_editorStack__i28QB{display:grid;min-height:8rem;padding-top:6px}.prompt-studio_diffPane__ty3Da,.prompt-studio_pane__81Q6O{grid-area:1/1;min-width:0}.prompt-studio_pane__81Q6O{transition:opacity var(--duration-fast) var(--ease-enter),visibility 0s}.prompt-studio_pane__81Q6O[data-hidden]{visibility:hidden;opacity:0;pointer-events:none;transition:opacity .1s var(--ease-standard),visibility 0s linear .1s}.prompt-studio_diffText__Ekv9Y,.prompt-studio_editable__emzIY{min-height:100%;padding:2px var(--pad) 6px;color:var(--foreground);font-size:var(--text-sm);line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere}.prompt-studio_editable__emzIY{outline:none;caret-color:var(--foreground);cursor:text}.prompt-studio_editable__emzIY[data-empty]:before{content:attr(data-placeholder);color:var(--text-muted);pointer-events:none}.prompt-studio_varChip__AnDlD{padding:1px 5px;margin:0 1px;border-radius:6px;background:color-mix(in oklab,var(--tone) 12%,transparent);box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--tone) 22%,transparent);color:var(--tone-ink);font-size:.93em;line-height:inherit;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard);-webkit-box-decoration-break:clone;box-decoration-break:clone}.prompt-studio_varChip__AnDlD[data-static]{cursor:default}.prompt-studio_varChip__AnDlD[data-active]{background:color-mix(in oklab,var(--tone) 24%,transparent);box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--tone) 45%,transparent)}.prompt-studio_varChip__AnDlD[data-missing]{background:transparent;box-shadow:none;outline:1px dashed color-mix(in oklab,var(--tone) 60%,transparent);outline-offset:-1px}.prompt-studio_varChip__AnDlD[data-flash]{animation:prompt-studio_chip-flash__CF4L_ .7s var(--ease-standard)}@keyframes prompt-studio_chip-flash__CF4L_{0%{background-color:color-mix(in oklab,var(--tone) 40%,transparent)}}.prompt-studio_hint__DjGtr{min-height:22px;padding:6px var(--pad) 0;color:var(--text-muted);font-size:var(--text-xs)}.prompt-studio_hintSwap__13knG{gap:6px}.prompt-studio_hintKey__1kWH1{padding:0 4px;border:1px solid var(--border);border-radius:5px;color:var(--text-secondary);font-family:ui-monospace,SF Mono,Menlo,monospace;font-size:11px}.prompt-studio_hintVersions__JOUa_{margin-right:4px;color:var(--text-secondary)}.prompt-studio_legendAdd__mh4aM,.prompt-studio_legendRemove__A6rkh{padding:0 5px;border-radius:4px}.prompt-studio_legendAdd__mh4aM{background:color-mix(in oklab,var(--success) 14%,transparent);color:color-mix(in oklab,var(--success) 72%,var(--foreground))}.prompt-studio_legendRemove__A6rkh{background:color-mix(in oklab,var(--danger) 12%,transparent);color:color-mix(in oklab,var(--danger) 72%,var(--foreground))}.prompt-studio_added__y1PxC,.prompt-studio_removed__96b2x{padding:1px 3px;border-radius:4px;-webkit-box-decoration-break:clone;box-decoration-break:clone}.prompt-studio_added__y1PxC{background:color-mix(in oklab,var(--success) 14%,transparent);color:var(--foreground);text-decoration:none}.prompt-studio_removed__96b2x{background:color-mix(in oklab,var(--danger) 11%,transparent);color:var(--text-secondary);text-decoration:line-through;text-decoration-color:color-mix(in oklab,var(--danger) 55%,transparent)}.prompt-studio_diffLead__td766{white-space:nowrap}.prompt-studio_diffSign__rpRgT{display:inline-block;margin-right:3px;font-weight:500;text-decoration:none}.prompt-studio_added__y1PxC .prompt-studio_diffSign__rpRgT{color:color-mix(in oklab,var(--success) 72%,var(--foreground))}.prompt-studio_removed__96b2x .prompt-studio_diffSign__rpRgT{color:color-mix(in oklab,var(--danger) 72%,var(--foreground))}.prompt-studio_suggest__clrhQ{position:fixed;z-index:90;width:min(240px,calc(100vw - 16px));padding:4px;border:1px solid var(--border);border-radius:16px;background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);animation:prompt-studio_suggest-in__I6ggV var(--duration-fast) var(--ease-enter)}@keyframes prompt-studio_suggest-in__I6ggV{0%{opacity:0;transform:translateY(-3px)}}.prompt-studio_suggestList__5yeYZ{display:grid;margin:0;padding:0;list-style:none}.prompt-studio_suggestOption__5hu2Z{display:flex;height:34px;align-items:center;gap:8px;padding:0 10px;border-radius:12px;cursor:pointer}.prompt-studio_suggestOption__5hu2Z[aria-selected=true]{background:var(--surface-muted)}.prompt-studio_suggestDot__88z_L{width:7px;height:7px;flex:none;border-radius:50%;background:var(--tone)}.prompt-studio_suggestIcon__qclG2{width:14px;height:14px;flex:none;color:var(--text-secondary)}.prompt-studio_suggestName__pAmgW{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prompt-studio_suggestOption__5hu2Z[data-tone] .prompt-studio_suggestName__pAmgW{color:var(--tone-ink)}.prompt-studio_suggestNew__WQCq3{color:var(--foreground);font-weight:500}.prompt-studio_suggestEmpty__4tiyx{padding:8px 10px;color:var(--text-muted);font-size:var(--text-xs)}.prompt-studio_vars__hhASF{padding:14px var(--inset) var(--inset)}.prompt-studio_fields__TqWz_{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px 10px}.prompt-studio_field__HPZvw{display:grid;min-width:0;gap:5px;transition:opacity var(--duration-fast) var(--ease-standard)}.prompt-studio_field__HPZvw[data-wide]{grid-column:span 2}.prompt-studio_field__HPZvw[data-unused]{opacity:.6}.prompt-studio_fieldLabel__hPswm{display:inline-flex;min-width:0;align-items:center;gap:6px;padding-left:var(--pad);color:var(--tone-ink);font-size:var(--text-xs)}.prompt-studio_fieldDot__xdPfa{width:6px;height:6px;flex:none;border-radius:50%;background:var(--tone)}.prompt-studio_input__qugXj{width:100%;height:36px;min-width:0;padding:0 var(--pad);border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);text-overflow:ellipsis;outline:none;transition:border-color var(--duration-fast) var(--ease-standard)}.prompt-studio_input__qugXj::placeholder{color:var(--text-muted)}@media (hover:hover) and (pointer:fine){.prompt-studio_input__qugXj:hover{border-color:var(--border-strong)}}.prompt-studio_input__qugXj:focus{border-color:color-mix(in oklab,var(--tone) 65%,var(--border));text-overflow:clip}.prompt-studio_runRow__uETOW{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;margin-top:14px}.prompt-studio_cases__7Ewwn{min-width:0}.prompt-studio_run__eTyu7{position:relative;display:inline-flex;height:36px;flex:none;align-items:center;justify-content:center;gap:8px;padding:0 14px 0 13px;border:0;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground);font:inherit;font-size:var(--text-sm);font-weight:500;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.prompt-studio_run__eTyu7:hover{background:var(--accent-strong)}}.prompt-studio_run__eTyu7:active{transform:scale(.97)}.prompt-studio_runIcon__Z2IJS,.prompt-studio_runLabel__CstEO{display:inline-grid;align-items:center;justify-items:start}.prompt-studio_runIcon__Z2IJS>*,.prompt-studio_runLabel__CstEO>*{grid-area:1/1;opacity:0;transition:opacity .1s var(--ease-standard)}.prompt-studio_runIcon__Z2IJS>[data-on],.prompt-studio_runLabel__CstEO>[data-on]{opacity:1;transition:opacity var(--duration-fast) var(--ease-enter)}.prompt-studio_runIcon__Z2IJS svg{width:13px;height:13px;fill:currentColor;stroke-width:1.5}.prompt-studio_runKeys__S3v3v{opacity:.62;font-size:var(--text-xs);font-weight:400;letter-spacing:.02em}.prompt-studio_outputFrame__mUAl_{border-top:1px solid var(--border);border-radius:0 0 calc(var(--radius-surface) - 1px) calc(var(--radius-surface) - 1px);background:var(--surface-muted)}.prompt-studio_output__eVVk6{padding:10px var(--inset) 12px}.prompt-studio_output__eVVk6[data-state=idle]{padding-block:12px}.prompt-studio_outputIdle__1qTBp{display:flex;min-height:28px;align-items:center;padding:0 var(--pad);color:var(--text-muted);font-size:var(--text-sm)}.prompt-studio_idleCase__89x6L{color:var(--text-secondary)}.prompt-studio_outputHead__P5Gvy{display:flex;min-height:32px;align-items:center;justify-content:space-between;gap:8px;padding-left:var(--pad)}.prompt-studio_outputStatus__9UwCQ{min-width:0;color:var(--text-secondary)}.prompt-studio_outputStatusInner__ulQNv{display:inline-flex;align-items:center;gap:6px}.prompt-studio_outputStatusInner__ulQNv svg{width:14px;height:14px;flex:none;stroke-width:2}.prompt-studio_outputStatusInner__ulQNv[data-status=done] svg{color:var(--success)}.prompt-studio_outputStatusInner__ulQNv[data-status=error] svg{color:var(--danger)}.prompt-studio_outputStatusInner__ulQNv[data-status=stopped] svg{width:11px;height:11px;fill:currentColor;color:var(--text-muted)}.prompt-studio_outputCase__vvrHl{color:var(--text-muted)}.prompt-studio_outputCase__vvrHl:before{content:\"·\";margin-right:6px}.prompt-studio_outputCopy__AYzSx{display:inline-flex;visibility:hidden;opacity:0;transition:opacity .1s var(--ease-standard),visibility 0s linear .1s}.prompt-studio_outputCopy__AYzSx[data-on]{visibility:visible;opacity:1;transition:opacity var(--duration-fast) var(--ease-enter),visibility 0s}.prompt-studio_outputBody__dpsav{display:grid;padding:4px var(--pad) 0}.prompt-studio_outputRun__cAXPl{grid-area:1/1;min-width:0}.prompt-studio_reply__itswD{display:grid;gap:.75em;color:var(--foreground);font-size:var(--text-sm);line-height:1.65}.prompt-studio_replyParagraph__8ZEei{margin:0;white-space:pre-line;overflow-wrap:break-word}.prompt-studio_chunk__rw_55{animation:prompt-studio_chunk-in__0xQEY .15s cubic-bezier(.2,.7,.3,1) backwards}@keyframes prompt-studio_chunk-in__0xQEY{0%{opacity:0}}.prompt-studio_shimmer__Z5AO2{background:linear-gradient(90deg,var(--text-muted) 0,var(--text-muted) 38%,var(--foreground) 50%,var(--text-muted) 62%,var(--text-muted) 100%) 0 0 /250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:prompt-studio_shimmer__Z5AO2 1.8s linear infinite}@keyframes prompt-studio_shimmer__Z5AO2{0%{background-position:100% 0}to{background-position:0 0}}.prompt-studio_errorBox___hav8{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 16px;padding:2px 0 4px}.prompt-studio_errorText__h02Zf{min-width:0;flex:1 1 16rem;margin:0;color:var(--text-secondary)}.prompt-studio_outputFoot__YMtuU{min-height:26px;padding:8px var(--pad) 0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}.prompt-studio_outputFootText__fBqAC{max-width:100%}.prompt-studio_roll__dAzyj{display:inline-flex;font-variant-numeric:tabular-nums}.prompt-studio_rollDigits__rrKhi{display:inline-flex;height:1.4em;overflow:hidden}.prompt-studio_rollCol__2jQm0{display:inline-block;height:1.4em;overflow:hidden}.prompt-studio_rollStrip__iAn0c{display:flex;flex-direction:column;transform:translateY(calc(var(--d) * -1.4em));transition:transform .28s var(--ease-standard)}.prompt-studio_rollStrip__iAn0c>span{height:1.4em;line-height:1.4em;text-align:center}.prompt-studio_rollSep___qiE5{line-height:1.4em}@media (prefers-reduced-motion:reduce){.prompt-studio_outputCopy__AYzSx,.prompt-studio_outputCopy__AYzSx[data-on],.prompt-studio_pane__81Q6O,.prompt-studio_pane__81Q6O[data-hidden],.prompt-studio_rollStrip__iAn0c,.prompt-studio_runIcon__Z2IJS>*,.prompt-studio_runLabel__CstEO>*,.prompt-studio_run__eTyu7{transition:none}}@media (prefers-reduced-motion:reduce){.prompt-studio_run__eTyu7:active{transform:none}}@media (prefers-reduced-motion:reduce){.prompt-studio_chunk__rw_55,.prompt-studio_suggest__clrhQ,.prompt-studio_varChip__AnDlD[data-flash]{animation:none}}@media (prefers-reduced-motion:reduce){.prompt-studio_shimmer__Z5AO2{animation:none;background:none;color:var(--text-muted)}}", {"root":"prompt-studio_root__X6_BD","card":"prompt-studio_card__ymmte","srOnly":"prompt-studio_srOnly__hI86i","varChip":"prompt-studio_varChip__AnDlD","field":"prompt-studio_field__HPZvw","suggestOption":"prompt-studio_suggestOption__5hu2Z","swap":"prompt-studio_swap__T1bNA","swapItem":"prompt-studio_swapItem__0q796","swapMeasure":"prompt-studio_swapMeasure__RcUxc","autoHeight":"prompt-studio_autoHeight__mogim","header":"prompt-studio_header__CzVY7","titleGroup":"prompt-studio_titleGroup__bE96d","title":"prompt-studio_title__PyMcK","chip":"prompt-studio_chip__FNePv","chipVersion":"prompt-studio_chipVersion__iYmzB","chipState":"prompt-studio_chipState__a_8GF","liveDot":"prompt-studio_liveDot__bEYT8","chevron":"prompt-studio_chevron__yUfGy","modelChip":"prompt-studio_modelChip__e29EY","modelSwap":"prompt-studio_modelSwap__BMBdh","modelName":"prompt-studio_modelName__RAFGt","mark":"prompt-studio_mark__u_XZ4","menu":"prompt-studio_menu__65_1m","versionMenu":"prompt-studio_versionMenu__FawK8","modelMenu":"prompt-studio_modelMenu___02RF","versionList":"prompt-studio_versionList__Qli1_","modelList":"prompt-studio_modelList__YIVAE","versionRow":"prompt-studio_versionRow__rBsOM","versionAvatar":"prompt-studio_versionAvatar___5Avu","versionText":"prompt-studio_versionText__rUF8Y","versionMessage":"prompt-studio_versionMessage__pKowu","versionMeta":"prompt-studio_versionMeta__jmrcq","versionMetaText":"prompt-studio_versionMetaText__Kl8zG","versionLabel":"prompt-studio_versionLabel__oLtyR","versionSlot":"prompt-studio_versionSlot__YZj2Q","prodMarker":"prompt-studio_prodMarker__aoIpz","menuActions":"prompt-studio_menuActions__IKoBU","menuAction":"prompt-studio_menuAction__4Mhmm","menuStatus":"prompt-studio_menuStatus__WzgQH","menuStatusText":"prompt-studio_menuStatusText__nKC5P","menuUndo":"prompt-studio_menuUndo__pZY_9","modelRow":"prompt-studio_modelRow__ySEc_","modelRowName":"prompt-studio_modelRowName__8mu_w","modelPrice":"prompt-studio_modelPrice__1nxrX","modelCheck":"prompt-studio_modelCheck__alKa5","effortRow":"prompt-studio_effortRow__8TXmb","effortLabel":"prompt-studio_effortLabel__IG_DS","effortSeg":"prompt-studio_effortSeg__DE1og","menuNote":"prompt-studio_menuNote__NyisU","tabs":"prompt-studio_tabs__b0U3V","tab":"prompt-studio_tab__tLMYi","segOption":"prompt-studio_segOption__vOztO","tabHighlight":"prompt-studio_tabHighlight__GU8JH","segHighlight":"prompt-studio_segHighlight__AxDIJ","segLabel":"prompt-studio_segLabel__n1_Mw","tabDot":"prompt-studio_tabDot__IKomJ","seg":"prompt-studio_seg__5Z_ce","editor":"prompt-studio_editor__ESUEj","editorBar":"prompt-studio_editorBar__Y1AT4","corner":"prompt-studio_corner__NckkE","cornerItem":"prompt-studio_cornerItem__eS3LS","tokens":"prompt-studio_tokens__W_qq6","backButton":"prompt-studio_backButton__K0JLt","diffStats":"prompt-studio_diffStats__DR2nw","statAdd":"prompt-studio_statAdd__Wvczz","statRemove":"prompt-studio_statRemove__MsRy4","editorStack":"prompt-studio_editorStack__i28QB","pane":"prompt-studio_pane__81Q6O","diffPane":"prompt-studio_diffPane__ty3Da","editable":"prompt-studio_editable__emzIY","diffText":"prompt-studio_diffText__Ekv9Y","chip-flash":"prompt-studio_chip-flash__CF4L_","hint":"prompt-studio_hint__DjGtr","hintSwap":"prompt-studio_hintSwap__13knG","hintKey":"prompt-studio_hintKey__1kWH1","hintVersions":"prompt-studio_hintVersions__JOUa_","legendAdd":"prompt-studio_legendAdd__mh4aM","legendRemove":"prompt-studio_legendRemove__A6rkh","added":"prompt-studio_added__y1PxC","removed":"prompt-studio_removed__96b2x","diffLead":"prompt-studio_diffLead__td766","diffSign":"prompt-studio_diffSign__rpRgT","suggest":"prompt-studio_suggest__clrhQ","suggest-in":"prompt-studio_suggest-in__I6ggV","suggestList":"prompt-studio_suggestList__5yeYZ","suggestDot":"prompt-studio_suggestDot__88z_L","suggestIcon":"prompt-studio_suggestIcon__qclG2","suggestName":"prompt-studio_suggestName__pAmgW","suggestNew":"prompt-studio_suggestNew__WQCq3","suggestEmpty":"prompt-studio_suggestEmpty__4tiyx","vars":"prompt-studio_vars__hhASF","fields":"prompt-studio_fields__TqWz_","fieldLabel":"prompt-studio_fieldLabel__hPswm","fieldDot":"prompt-studio_fieldDot__xdPfa","input":"prompt-studio_input__qugXj","runRow":"prompt-studio_runRow__uETOW","cases":"prompt-studio_cases__7Ewwn","run":"prompt-studio_run__eTyu7","runIcon":"prompt-studio_runIcon__Z2IJS","runLabel":"prompt-studio_runLabel__CstEO","runKeys":"prompt-studio_runKeys__S3v3v","outputFrame":"prompt-studio_outputFrame__mUAl_","output":"prompt-studio_output__eVVk6","outputIdle":"prompt-studio_outputIdle__1qTBp","idleCase":"prompt-studio_idleCase__89x6L","outputHead":"prompt-studio_outputHead__P5Gvy","outputStatus":"prompt-studio_outputStatus__9UwCQ","outputStatusInner":"prompt-studio_outputStatusInner__ulQNv","outputCase":"prompt-studio_outputCase__vvrHl","outputCopy":"prompt-studio_outputCopy__AYzSx","outputBody":"prompt-studio_outputBody__dpsav","outputRun":"prompt-studio_outputRun__cAXPl","reply":"prompt-studio_reply__itswD","replyParagraph":"prompt-studio_replyParagraph__8ZEei","chunk":"prompt-studio_chunk__rw_55","chunk-in":"prompt-studio_chunk-in__0xQEY","shimmer":"prompt-studio_shimmer__Z5AO2","errorBox":"prompt-studio_errorBox___hav8","errorText":"prompt-studio_errorText__h02Zf","outputFoot":"prompt-studio_outputFoot__YMtuU","outputFootText":"prompt-studio_outputFootText__fBqAC","roll":"prompt-studio_roll__dAzyj","rollDigits":"prompt-studio_rollDigits__rrKhi","rollCol":"prompt-studio_rollCol__2jQm0","rollStrip":"prompt-studio_rollStrip__iAn0c","rollSep":"prompt-studio_rollSep___qiE5"});
A.reg(83978, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { AM: () => l, Wv: () => u, hl: () => c, iN: () => d });
  var a = r(95155), n = r(40093), i = r(12115), s = r(25898), o = r.n(s);
  let l = n.bL, d = n.bm, u = (0, i.forwardRef)(function({ className: e2, ...t2 }, r2) {
    return (0, a.jsx)(n.l9, {
      ...t2,
      ref: r2,
      className: [o().anchor, e2].filter(Boolean).join(" ")
    });
  });
  u.displayName = "PopoverTrigger";
  let c = (0, i.forwardRef)(function({
    className: e2,
    align: t2 = "start",
    sideOffset: r2 = 6,
    collisionPadding: i2 = 10,
    ...s2
  }, l2) {
    return (0, a.jsx)(n.ZL, {
      children: (0, a.jsx)(n.UC, {
        ...s2,
        ref: l2,
        align: t2,
        sideOffset: r2,
        collisionPadding: i2,
        className: [o().content, e2].filter(Boolean).join(" ")
      })
    });
  });
  c.displayName = "PopoverContent";
}

__m(__module,__exports,__require);
});
A.cssFor("prompt-studio", [12053,80400]);
A.item("prompt-studio", {entry:52436, export:"PromptStudio", kind:"block", tier:"pro", unresolved:[]});
})();