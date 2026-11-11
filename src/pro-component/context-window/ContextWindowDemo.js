function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ContextWindowDemo: () => O, default: () => B });
  var n = a(95155), s = a(12115), r = a(57793), o = a(18310), i = a(80642), l = a(25354), d = a(12363), c = a(64577), u = a(14577), m = a(11012), h = a(64962), w = a(64350), f = a(9383), x = a(78954), g = a(7770), p = a(51288), _ = a(52898);
  let y = ["system", "tools", "files", "summary", "messages"], v = {
    system: "System prompt",
    tools: "Tools",
    files: "Files and memory",
    summary: "Summary",
    messages: "Messages",
    free: "Free",
    reserve: "Reserved for output"
  }, k = [
    {
      id: "claude-opus-5-5",
      name: "Claude Opus 5.5",
      window: 1e6,
      reserve: 64e3,
      mark: function({ title: e2 = "Claude", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
          })
        });
      },
      color: "#D97757"
    },
    {
      id: "kimi-k3",
      name: "Kimi K3",
      window: 512e3,
      reserve: 32e3,
      mark: function({ title: e2 = "Moonshot AI", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          fillRule: "evenodd",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "M1.052 16.916l9.539 2.552a21.007 21.007 0 00.06 2.033l5.956 1.593a11.997 11.997 0 01-5.586.865l-.18-.016-.044-.004-.084-.009-.094-.01a11.605 11.605 0 01-.157-.02l-.107-.014-.11-.016a11.962 11.962 0 01-.32-.051l-.042-.008-.075-.013-.107-.02-.07-.015-.093-.019-.075-.016-.095-.02-.097-.023-.094-.022-.068-.017-.088-.022-.09-.024-.095-.025-.082-.023-.109-.03-.062-.02-.084-.025-.093-.028-.105-.034-.058-.019-.08-.026-.09-.031-.066-.024a6.293 6.293 0 01-.044-.015l-.068-.025-.101-.037-.057-.022-.08-.03-.087-.035-.088-.035-.079-.032-.095-.04-.063-.028-.063-.027a5.655 5.655 0 01-.041-.018l-.066-.03-.103-.047-.052-.024-.096-.046-.062-.03-.084-.04-.086-.044-.093-.047-.052-.027-.103-.055-.057-.03-.058-.032a6.49 6.49 0 01-.046-.026l-.094-.053-.06-.034-.051-.03-.072-.041-.082-.05-.093-.056-.052-.032-.084-.053-.061-.039-.079-.05-.07-.047-.053-.035a7.785 7.785 0 01-.054-.036l-.044-.03-.044-.03a6.066 6.066 0 01-.04-.028l-.057-.04-.076-.054-.069-.05-.074-.054-.056-.042-.076-.057-.076-.059-.086-.067-.045-.035-.064-.052-.074-.06-.089-.073-.046-.039-.046-.039a7.516 7.516 0 01-.043-.037l-.045-.04-.061-.053-.07-.062-.068-.06-.062-.058-.067-.062-.053-.05-.088-.084a13.28 13.28 0 01-.099-.097l-.029-.028-.041-.042-.069-.07-.05-.051-.05-.053a6.457 6.457 0 01-.168-.179l-.08-.088-.062-.07-.071-.08-.042-.049-.053-.062-.058-.068-.046-.056a7.175 7.175 0 01-.027-.033l-.045-.055-.066-.082-.041-.052-.05-.064-.02-.025a11.99 11.99 0 01-1.44-2.402zm-1.02-5.794l11.353 3.037a20.468 20.468 0 00-.469 2.011l10.817 2.894a12.076 12.076 0 01-1.845 2.005L.657 15.923l-.016-.046-.035-.104a11.965 11.965 0 01-.05-.153l-.007-.023a11.896 11.896 0 01-.207-.741l-.03-.126-.018-.08-.021-.097-.018-.081-.018-.09-.017-.084-.018-.094c-.026-.141-.05-.283-.071-.426l-.017-.118-.011-.083-.013-.102a12.01 12.01 0 01-.019-.161l-.005-.047a12.12 12.12 0 01-.034-2.145zm1.593-5.15l11.948 3.196c-.368.605-.705 1.231-1.01 1.875l11.295 3.022c-.142.82-.368 1.612-.668 2.365l-11.55-3.09L.124 10.26l.015-.1.008-.049.01-.067.015-.087.018-.098c.026-.148.056-.295.088-.442l.028-.124.02-.085.024-.097c.022-.09.045-.18.07-.268l.028-.102.023-.083.03-.1.025-.082.03-.096.026-.082.031-.095a11.896 11.896 0 011.01-2.232zm4.442-4.4L17.352 4.59a20.77 20.77 0 00-1.688 1.721l7.823 2.093c.267.852.442 1.744.513 2.665L2.106 5.213l.045-.065.027-.04.04-.055.046-.065.055-.076.054-.072.064-.086.05-.065.057-.073.055-.07.06-.074.055-.069.065-.077.054-.066.066-.077.053-.06.072-.082.053-.06.067-.074.054-.058.073-.078.058-.06.063-.067.168-.17.1-.098.059-.056.076-.071a12.084 12.084 0 012.272-1.677zM12.017 0h.097l.082.001.069.001.054.002.068.002.046.001.076.003.047.002.06.003.054.002.087.005.105.007.144.011.088.007.044.004.077.008.082.008.047.005.102.012.05.006.108.014.081.01.042.006.065.01.207.032.07.012.065.011.14.026.092.018.11.022.046.01.075.016.041.01L14.7.3l.042.01.065.015.049.012.071.017.096.024.112.03.113.03.113.032.05.015.07.02.078.024.073.023.05.016.05.016.076.025.099.033.102.036.048.017.064.023.093.034.11.041.116.045.1.04.047.02.06.024.041.018.063.026.04.018.057.025.11.048.1.046.074.035.075.036.06.028.092.046.091.045.102.052.053.028.049.026.046.024.06.033.041.022.052.029.088.05.106.06.087.051.057.034.053.032.096.059.088.055.098.062.036.024.064.041.084.056.04.027.062.042.062.043.023.017c.054.037.108.075.161.114l.083.06.065.048.056.043.086.065.082.064.04.03.05.041.086.069.079.065.085.071c.712.6 1.353 1.283 1.909 2.031L7.222.994l.062-.027.065-.028.081-.034.086-.035c.113-.045.227-.09.341-.131l.096-.035.093-.033.084-.03.096-.031c.087-.03.176-.058.264-.085l.091-.027.086-.025.102-.03.085-.023.1-.026L9.04.37l.09-.023.091-.022.095-.022.09-.02.098-.021.091-.02.095-.018.092-.018.1-.018.091-.016.098-.017.092-.014.097-.015.092-.013.102-.013.091-.012.105-.012.09-.01.105-.01c.093-.01.186-.018.28-.024l.106-.008.09-.005.11-.006.093-.004.1-.004.097-.002.099-.002.197-.002z"
          })
        });
      }
    },
    {
      id: "gpt-6-luna",
      name: "GPT-6 Luna",
      window: 4e5,
      reserve: 32e3,
      mark: function({ title: e2 = "OpenAI", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
          })
        });
      }
    }
  ], b = [
    {
      id: "system",
      category: "system",
      label: "System prompt",
      tokens: 4100
    },
    { id: "github", category: "tools", label: "GitHub tools", tokens: 14200 },
    { id: "linear", category: "tools", label: "Linear tools", tokens: 9600 },
    { id: "sentry", category: "tools", label: "Sentry tools", tokens: 8200 },
    { id: "claude-md", category: "files", label: "CLAUDE.md", tokens: 6400 },
    {
      id: "invoice",
      category: "files",
      label: "src/billing/invoice.ts",
      tokens: 38e3
    },
    {
      id: "schema",
      category: "files",
      label: "db/schema.sql",
      tokens: 55600
    },
    ...Array.from({ length: 24 }, (e2, t2) => ({
      id: `turn-${t2 + 1}`,
      category: "messages",
      label: `Turn ${t2 + 1}`,
      tokens: [9800, 14200, 11600, 12900][t2 % 4]
    }))
  ], j = [
    { label: "Retry failed invoices with backoff", tokens: 31400 },
    { label: "Add tests for the retry schedule", tokens: 27800 },
    { label: "Explain the failing Sentry event", tokens: 36200 },
    { label: "Update the migration for retry_count", tokens: 24600 },
    { label: "Summarize the changes for the PR", tokens: 19300 }
  ], M = [
    { label: "api/openapi.yaml", tokens: 64e3 },
    { label: "docs/billing-runbook.md", tokens: 22e3 },
    { label: "src/billing/retry.ts", tokens: 18500 }
  ];
  var N = a(41884), $ = a.n(N);
  let { duration: A, ease: C } = g.T, z = [...C.standard];
  function T(e2) {
    return e2 >= 1e6 ? `${+(e2 / 1e6).toFixed(e2 % 1e6 ? 2 : 0)}M` : e2 >= 1e4 ? `${Math.round(e2 / 1e3)}K` : e2 >= 1e3 ? `${+(e2 / 1e3).toFixed(1)}K` : `${Math.round(e2)}`;
  }
  let L = (e2) => e2 > 0 && e2 < 0.095 ? `${(100 * e2).toFixed(1)}%` : `${Math.round(100 * e2)}%`, S = (e2) => e2.reduce((e3, t2) => e3 + t2.tokens, 0), R = (e2) => Math.min(24e3, Math.max(4e3, 100 * Math.round(0.06 * S(e2) / 100)));
  function E(e2, t2) {
    let [a2, n2] = (0, s.useState)(e2), r2 = (0, s.useRef)(e2);
    return (0, s.useEffect)(() => {
      if (t2) {
        r2.current = e2;
        return;
      }
      let a3 = r2.current;
      if (a3 === e2) return;
      let s2 = performance.now(), o2 = 0, i2 = (t3) => {
        let l2 = Math.min(1, (t3 - s2) / 420), d2 = a3 + (e2 - a3) * (1 - Math.pow(1 - l2, 3));
        r2.current = d2, n2(d2), l2 < 1 && (o2 = requestAnimationFrame(i2));
      };
      return o2 = requestAnimationFrame(i2), () => cancelAnimationFrame(o2);
    }, [e2, t2]), t2 ? e2 : a2;
  }
  function W({ models: e2, model: t2, onChange: a2, disabled: s2 }) {
    let o2 = t2.mark;
    return (0, n.jsxs)(r.bL, {
      children: [
        (0, n.jsxs)(r.l9, {
          className: $().modelTrigger,
          disabled: s2,
          "aria-label": `Model: ${t2.name}, ${T(t2.window)} context. Change model`,
          children: [
            (0, n.jsx)(o2, {
              className: $().modelMark,
              style: t2.color ? { color: t2.color } : void 0,
              "aria-hidden": "true",
              focusable: "false"
            }),
            (0, n.jsx)("span", { className: $().modelName, children: t2.name }),
            (0, n.jsx)("span", {
              className: $().modelWindow,
              children: T(t2.window)
            }),
            (0, n.jsx)(d.A, {
              className: $().modelChevron,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, n.jsx)(r.ZL, {
          children: (0, n.jsx)(r.UC, {
            className: $().menu,
            align: "end",
            sideOffset: 6,
            collisionPadding: 12,
            loop: true,
            children: (0, n.jsx)(r.z6, {
              value: t2.id,
              onValueChange: a2,
              children: e2.map((e3) => {
                let t3 = e3.mark;
                return (0, n.jsxs)(
                  r.hN,
                  {
                    value: e3.id,
                    textValue: e3.name,
                    className: $().menuItem,
                    children: [
                      (0, n.jsx)(t3, {
                        className: $().modelMark,
                        style: e3.color ? { color: e3.color } : void 0,
                        "aria-hidden": "true",
                        focusable: "false"
                      }),
                      (0, n.jsx)("span", {
                        className: $().menuName,
                        children: e3.name
                      }),
                      (0, n.jsx)("span", {
                        className: $().menuWindow,
                        children: T(e3.window)
                      }),
                      (0, n.jsx)("span", {
                        className: $().menuCheck,
                        children: (0, n.jsx)(r.VF, {
                          children: (0, n.jsx)(c.A, { "aria-hidden": "true" })
                        })
                      })
                    ]
                  },
                  e3.id
                );
              })
            })
          })
        })
      ]
    });
  }
  function I({
    kind: e2,
    tokens: t2,
    window: a2,
    reduced: s2,
    empty: r2,
    onHover: o2
  }) {
    let i2 = E(t2, s2);
    return (0, n.jsxs)("li", {
      className: $().legendRow,
      "data-kind": e2,
      "data-empty": !t2 || void 0,
      onPointerEnter: () => o2(e2),
      onPointerLeave: () => o2(null),
      children: [
        (0, n.jsx)("span", {
          className: $().swatch,
          "data-kind": e2,
          "aria-hidden": "true"
        }),
        (0, n.jsx)("span", { className: $().legendName, children: v[e2] }),
        (0, n.jsx)("span", {
          className: $().legendTokens,
          children: t2 ? T(i2) : r2 ?? "0"
        }),
        (0, n.jsx)("span", {
          className: $().legendPercent,
          children: t2 ? L(i2 / a2) : ""
        })
      ]
    });
  }
  let F = { info: u.A, warning: m.A, success: h.A, working: w.A };
  function K({
    models: e2 = k,
    defaultModelId: t2,
    onModelChange: a2,
    items: r2,
    threshold: d2 = 0.8,
    turns: c2 = j,
    files: u2 = M,
    summarize: m2 = R,
    onCompact: h2,
    onItemsChange: g2,
    className: N2
  }) {
    let C2 = !!(0, o.I)(), [V2, P2] = (0, s.useState)(t2 ?? e2[0]?.id ?? ""), O2 = e2.find((e3) => e3.id === V2) ?? e2[0], [B2, H] = (0, s.useState)(() => r2 ?? b), [q, G] = (0, s.useState)("idle"), [J, Z] = (0, s.useState)({ from: 0, step: 4 }), [D, Y] = (0, s.useState)(null), [U, Q] = (0, s.useState)({
      tone: "info",
      text: `Compacts on its own at ${Math.round(100 * d2)}%`
    }), X = (0, s.useRef)(0), ee = (0, s.useRef)(0), et = (0, s.useRef)(0), ea = (0, s.useRef)(0);
    (0, s.useEffect)(() => () => window.clearTimeout(ea.current), []);
    let en = (0, s.useCallback)(
      (e3) => {
        H(e3), g2?.(e3);
      },
      [g2]
    ), es = (0, s.useMemo)(
      () => ((e3) => {
        let t3 = { system: 0, tools: 0, files: 0, summary: 0, messages: 0 };
        for (let a3 of e3) t3[a3.category] += a3.tokens;
        return t3;
      })(B2),
      [B2]
    ), er = S(B2), eo = (0, s.useMemo)(
      () => (function(e3, t3) {
        let a3 = t3.window / 200, n2 = 200 - Math.max(1, Math.round(t3.reserve / a3)), s2 = [], r3 = 0;
        for (let t4 of y) {
          let o2 = e3[t4];
          if (!o2) continue;
          r3 += o2;
          let i2 = Math.min(n2, Math.max(s2.length + 1, Math.round(r3 / a3)));
          for (; s2.length < i2; ) s2.push(t4);
        }
        for (; s2.length < n2; ) s2.push("free");
        for (; s2.length < 200; ) s2.push("reserve");
        return s2;
      })(es, O2),
      [es, O2]
    ), ei = Math.round(200 * d2), el = Math.max(0, O2.window - O2.reserve - er), ed = E(er, C2), ec = O2.window / 200, eu = (e3) => Math.min(199, Math.floor(e3 / ec)), em = "summarizing" === q, eh = B2.filter((e3) => "messages" === e3.category).length, ew = (0, s.useCallback)(
      (e3, t3, a3, n2) => {
        let s2 = e3.filter((e4) => "messages" === e4.category), r3 = s2.slice(0, Math.max(0, s2.length - 2));
        r3.length ? (G("summarizing"), Q({
          tone: "working",
          text: `${n2 ? `${n2}. ` : ""}Summarizing ${r3.length} older messages`
        }), window.clearTimeout(ea.current), ea.current = window.setTimeout(() => {
          let n3 = e3.find((e4) => "summary" === e4.category), s3 = (n3?.tokens ?? 0) + m2(r3), o2 = new Set(r3.map((e4) => e4.id)), i2 = e3.filter((e4) => !o2.has(e4.id) && "summary" !== e4.category), l2 = [
            ...i2.filter((e4) => "messages" !== e4.category),
            {
              id: "summary",
              category: "summary",
              label: "Summary of earlier turns",
              tokens: s3
            },
            ...i2.filter((e4) => "messages" === e4.category)
          ], c3 = S(e3), u3 = S(l2);
          Z({
            from: Math.floor(
              S(
                l2.filter(
                  (e4) => "summary" !== e4.category && "messages" !== e4.category
                )
              ) / (t3.window / 200)
            ),
            step: 3
          }), en(l2), G("idle");
          let w2 = S(r3);
          Q(
            u3 >= d2 * t3.window ? {
              tone: "warning",
              text: `Compacted ${T(w2)}, still above ${Math.round(100 * d2)}%. Remove files to make room`
            } : {
              tone: "success",
              text: `Compacted ${T(w2)} of messages into a ${T(s3 - (n3?.tokens ?? 0))} summary`
            }
          ), h2?.({
            folded: w2,
            summary: s3,
            before: c3,
            after: u3,
            automatic: a3
          });
        }, 720 * !C2)) : Q({ tone: "info", text: "Nothing to compact yet" });
      },
      [h2, C2, en, m2, d2]
    ), ef = (e3, t3, a3) => {
      let n2 = d2 * t3.window, s2 = S(e3);
      s2 < n2 ? Q(
        s2 > 0.85 * n2 ? {
          tone: "warning",
          text: `${a3}. Compaction runs at ${Math.round(100 * d2)}%`
        } : { tone: "info", text: a3 }
      ) : (Q({
        tone: "warning",
        text: `${a3}. Crossed ${Math.round(100 * d2)}%`
      }), window.clearTimeout(ea.current), ea.current = window.setTimeout(
        () => ew(e3, t3, true, `Crossed ${Math.round(100 * d2)}%`),
        520 * !C2
      ));
    }, ex = eo.indexOf("messages"), eg = eo.lastIndexOf("messages"), ep = F[U.tone], e_ = [
      "system",
      "tools",
      "files",
      "summary",
      "messages",
      "free",
      "reserve"
    ], ey = (e3) => "free" === e3 ? el : "reserve" === e3 ? O2.reserve : es[e3], ev = `${O2.name} context window, ${T(er)} of ${T(O2.window)} tokens used. ` + e_.map((e3) => `${v[e3]} ${T(ey(e3))}`).join(", ") + `. Compaction runs at ${Math.round(100 * d2)}%.`;
    return (0, n.jsxs)("section", {
      className: [$().root, N2].filter(Boolean).join(" "),
      "data-phase": q,
      "data-hover": D ?? void 0,
      "aria-label": "Context window",
      children: [
        (0, n.jsxs)("header", {
          className: $().header,
          children: [
            (0, n.jsxs)("div", {
              className: $().readout,
              children: [
                (0, n.jsxs)("p", {
                  className: $().used,
                  children: [
                    (0, n.jsx)("span", {
                      className: $().usedValue,
                      children: T(ed)
                    }),
                    (0, n.jsxs)("span", {
                      className: $().usedOf,
                      children: ["of ", T(O2.window), " tokens"]
                    })
                  ]
                }),
                (0, n.jsxs)("p", {
                  className: $().usedMeta,
                  children: [
                    (0, n.jsx)("span", {
                      className: $().tabular,
                      children: L(ed / O2.window)
                    }),
                    " used",
                    (0, n.jsx)("span", {
                      className: $().dot,
                      "aria-hidden": "true"
                    }),
                    T(el),
                    " free"
                  ]
                })
              ]
            }),
            (0, n.jsx)(W, {
              models: e2,
              model: O2,
              onChange: (t3) => {
                let n2 = e2.find((e3) => e3.id === t3);
                !n2 || n2.id === O2.id || em || ((P2(t3), a2?.(n2), Z({ from: 0, step: 1.4 }), er < d2 * n2.window) ? Q({
                  tone: "info",
                  text: `Switched to ${n2.name} \xB7 ${T(n2.window)} window`
                }) : (Q({
                  tone: "warning",
                  text: `${T(er)} is over ${Math.round(100 * d2)}% of ${n2.name}'s window`
                }), window.clearTimeout(ea.current), ea.current = window.setTimeout(
                  () => ew(B2, n2, true, `Too full for ${n2.name}`),
                  640 * !C2
                )));
              },
              disabled: em
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: $().body,
          children: [
            (0, n.jsxs)("div", {
              className: $().gridWrap,
              children: [
                (0, n.jsx)("div", {
                  className: $().grid,
                  role: "img",
                  "aria-label": ev,
                  style: { "--columns": 20 },
                  children: eo.map((e3, t3) => {
                    let a3 = t3 >= J.from ? Math.min((t3 - J.from) * J.step, 360) : 0, s2 = em && "messages" === e3 ? (t3 - ex) * Math.min(6, 420 / Math.max(1, eg - ex)) : void 0;
                    return [
                      t3 === ei ? (0, n.jsx)(
                        "div",
                        { className: $().threshold, "aria-hidden": "true" },
                        "threshold"
                      ) : null,
                      (0, n.jsx)(
                        "span",
                        {
                          className: $().cell,
                          "data-kind": e3,
                          "data-after": t3 >= ei && "free" === e3 ? "" : void 0,
                          style: {
                            "--delay": `${C2 ? 0 : a3}ms`,
                            "--sweep": void 0 === s2 ? void 0 : `${s2}ms`
                          }
                        },
                        t3
                      )
                    ];
                  })
                }),
                (0, n.jsxs)("p", {
                  className: $().gridNote,
                  children: [
                    (0, n.jsxs)("span", {
                      children: ["Each cell is ", T(O2.window / 200), " tokens"]
                    }),
                    (0, n.jsxs)("span", {
                      className: $().thresholdKey,
                      children: [
                        (0, n.jsx)("span", {
                          className: $().thresholdSwatch,
                          "aria-hidden": "true"
                        }),
                        "Compacts at ",
                        Math.round(100 * d2),
                        "%"
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, n.jsx)("ul", {
              className: $().legend,
              "aria-label": "What fills the window",
              children: e_.map(
                (e3) => (0, n.jsx)(
                  I,
                  {
                    kind: e3,
                    tokens: ey(e3),
                    window: O2.window,
                    reduced: C2,
                    empty: "summary" === e3 ? "None yet" : void 0,
                    onHover: Y
                  },
                  e3
                )
              )
            })
          ]
        }),
        (0, n.jsxs)("footer", {
          className: $().footer,
          children: [
            (0, n.jsxs)("div", {
              className: $().actions,
              children: [
                (0, n.jsxs)(p.$, {
                  variant: "primary",
                  size: "sm",
                  onClick: () => {
                    if (em || !c2.length) return;
                    let e3 = c2[X.current++ % c2.length], t3 = [
                      ...B2,
                      {
                        id: `sent-${++et.current}`,
                        category: "messages",
                        label: e3.label,
                        tokens: e3.tokens
                      }
                    ];
                    Z({ from: eu(er), step: 9 }), en(t3), ef(t3, O2, `Sent "${e3.label}" \xB7 +${T(e3.tokens)}`);
                  },
                  disabled: em,
                  children: [
                    (0, n.jsx)(f.A, { "aria-hidden": "true" }),
                    "Send message"
                  ]
                }),
                (0, n.jsxs)(p.$, {
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                    if (em || !u2.length) return;
                    let e3 = u2[ee.current++ % u2.length], t3 = B2.reduce(
                      (e4, t4, a4) => "files" === t4.category ? a4 : e4,
                      -1
                    ), a3 = es.system + es.tools + es.files, n2 = {
                      id: `file-${ee.current}-${e3.label}`,
                      category: "files",
                      label: e3.label,
                      tokens: e3.tokens
                    }, s2 = [...B2.slice(0, t3 + 1), n2, ...B2.slice(t3 + 1)];
                    Z({ from: eu(a3), step: 3 }), en(s2), ef(s2, O2, `Attached ${e3.label} \xB7 +${T(e3.tokens)}`);
                  },
                  disabled: em,
                  children: [
                    (0, n.jsx)(x.A, { "aria-hidden": "true" }),
                    "Attach file"
                  ]
                }),
                (0, n.jsxs)(p.$, {
                  variant: "ghost",
                  size: "sm",
                  className: $().compact,
                  onClick: () => ew(B2, O2, false),
                  disabled: em || eh <= 2,
                  children: [
                    (0, n.jsx)(w.A, { "aria-hidden": "true" }),
                    "Compact now"
                  ]
                })
              ]
            }),
            (0, n.jsx)("div", {
              className: $().statusSlot,
              role: "status",
              "aria-live": "polite",
              children: (0, n.jsx)(i.N, {
                initial: false,
                mode: "popLayout",
                children: (0, n.jsxs)(
                  l.PY1.p,
                  {
                    className: $().status,
                    "data-tone": U.tone,
                    initial: !C2 && { opacity: 0, y: 3 },
                    animate: { opacity: 1, y: 0 },
                    exit: {
                      opacity: 0,
                      transition: { duration: 0.1 * !C2, ease: z }
                    },
                    transition: { duration: C2 ? 0 : A.fast, ease: z },
                    children: [
                      (0, n.jsx)(ep, {
                        className: $().statusIcon,
                        "aria-hidden": "true"
                      }),
                      "working" === U.tone ? (0, n.jsx)(_.n, { children: U.text }) : (0, n.jsx)("span", { children: U.text })
                    ]
                  },
                  `${U.tone}-${U.text}`
                )
              })
            })
          ]
        })
      ]
    });
  }
  var V = a(67498), P = a.n(V);
  function O() {
    return (0, n.jsx)("div", {
      className: P().demo,
      children: (0, n.jsx)(K, {})
    });
  }
  let B = O;
}

__m(__module,__exports,__require);
}