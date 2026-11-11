function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.r(t), a.d(t, { InstallSnippetDemo: () => Y, default: () => B });
  var n = a(95155), i = a(12115), l = a(18310), s = a(80642), r = a(25354), c = a(64577), d = a(35484), o = a(51288), p = a(73474), m = a(7770);
  let u = [
    { id: "npm", label: "npm", command: "npm install" },
    { id: "pnpm", label: "pnpm", command: "pnpm add" },
    { id: "yarn", label: "yarn", command: "yarn add" },
    { id: "bun", label: "bun", command: "bun add" }
  ], _ = [
    {
      id: "next",
      label: "Next.js",
      install: { packages: "@lumen/next" },
      key: { file: ".env.local", code: "NEXT_PUBLIC_LUMEN_KEY={{key}}" },
      code: {
        file: "app/layout.tsx",
        code: `import { Lumen } from "@lumen/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}<Lumen /></body>
    </html>
  );
}`
      }
    },
    {
      id: "react",
      label: "React",
      install: { packages: "@lumen/react" },
      key: { file: ".env", code: "VITE_LUMEN_KEY={{key}}" },
      code: {
        file: "src/main.tsx",
        code: `import { createRoot } from "react-dom/client";
import { LumenProvider } from "@lumen/react";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <LumenProvider apiKey={import.meta.env.VITE_LUMEN_KEY}>
    <App />
  </LumenProvider>
);`
      }
    },
    {
      id: "vue",
      label: "Vue",
      install: { packages: "@lumen/vue" },
      key: { file: ".env", code: "VITE_LUMEN_KEY={{key}}" },
      code: {
        file: "src/main.ts",
        code: `import { createApp } from "vue";
import { lumen } from "@lumen/vue";
import App from "./App.vue";

createApp(App)
  .use(lumen, { apiKey: import.meta.env.VITE_LUMEN_KEY })
  .mount("#app");`
      }
    },
    {
      id: "html",
      label: "HTML",
      install: {
        file: "index.html",
        code: '<script src="https://cdn.lumen.dev/v2/lumen.min.js" defer><\/script>'
      },
      key: {
        file: "index.html",
        code: '<meta name="lumen-key" content="{{key}}" />'
      },
      code: {
        file: "index.html",
        code: `<script>
  window.addEventListener("load", () => {
    lumen.page();
    document.querySelector("#upgrade").onclick = () =>
      lumen.track("upgrade_clicked", { plan: "pro" });
  });
<\/script>`
      }
    }
  ], h = {
    next: "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z",
    react: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",
    vue: "M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z",
    html: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
    npm: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z",
    pnpm: "M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z",
    yarn: "M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z",
    bun: "M12 22.596c6.628 0 12-4.338 12-9.688 0-3.318-2.057-6.248-5.219-7.986-1.286-.715-2.297-1.357-3.139-1.89C14.058 2.025 13.08 1.404 12 1.404c-1.097 0-2.334.785-3.966 1.821a49.92 49.92 0 0 1-2.816 1.697C2.057 6.66 0 9.59 0 12.908c0 5.35 5.372 9.687 12 9.687v.001ZM10.599 4.715c.334-.759.503-1.58.498-2.409 0-.145.202-.187.23-.029.658 2.783-.902 4.162-2.057 4.624-.124.048-.199-.121-.103-.209a5.763 5.763 0 0 0 1.432-1.977Zm2.058-.102a5.82 5.82 0 0 0-.782-2.306v-.016c-.069-.123.086-.263.185-.172 1.962 2.111 1.307 4.067.556 5.051-.082.103-.23-.003-.189-.126a5.85 5.85 0 0 0 .23-2.431Zm1.776-.561a5.727 5.727 0 0 0-1.612-1.806v-.014c-.112-.085-.024-.274.114-.218 2.595 1.087 2.774 3.18 2.459 4.407a.116.116 0 0 1-.049.071.11.11 0 0 1-.153-.026.122.122 0 0 1-.022-.083 5.891 5.891 0 0 0-.737-2.331Zm-5.087.561c-.617.546-1.282.76-2.063 1-.117 0-.195-.078-.156-.181 1.752-.909 2.376-1.649 2.999-2.778 0 0 .155-.118.188.085 0 .304-.349 1.329-.968 1.874Zm4.945 11.237a2.957 2.957 0 0 1-.937 1.553c-.346.346-.8.565-1.286.62a2.178 2.178 0 0 1-1.327-.62 2.955 2.955 0 0 1-.925-1.553.244.244 0 0 1 .064-.198.234.234 0 0 1 .193-.069h3.965a.226.226 0 0 1 .19.07c.05.053.073.125.063.197Zm-5.458-2.176a1.862 1.862 0 0 1-2.384-.245 1.98 1.98 0 0 1-.233-2.447c.207-.319.503-.566.848-.713a1.84 1.84 0 0 1 1.092-.11c.366.075.703.261.967.531a1.98 1.98 0 0 1 .408 2.114 1.931 1.931 0 0 1-.698.869v.001Zm8.495.005a1.86 1.86 0 0 1-2.381-.253 1.964 1.964 0 0 1-.547-1.366c0-.384.11-.76.32-1.079.207-.319.503-.567.849-.713a1.844 1.844 0 0 1 1.093-.108c.367.076.704.262.968.534a1.98 1.98 0 0 1 .4 2.117 1.932 1.932 0 0 1-.702.868Z"
  };
  function y({ id: e2, size: t2 = 16, ...a2 }) {
    return (0, n.jsx)("svg", {
      width: t2,
      height: t2,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      focusable: "false",
      ...a2,
      children: (0, n.jsx)("path", { d: h[e2] })
    });
  }
  Object.keys(h);
  var x = a(80322), f = a.n(x);
  let b = "{{key}}", v = [...m.T.ease.standard], k = { duration: 0.16, ease: v }, j = { duration: 0.1, ease: v }, g = { duration: 0 }, N = { type: "spring", visualDuration: 0.24, bounce: 0 }, w = (...e2) => e2.filter(Boolean).join(" ");
  async function L(e2) {
    await new Promise((t3, a3) => {
      let n2 = window.setTimeout(t3, 780);
      e2.addEventListener(
        "abort",
        () => {
          window.clearTimeout(n2), a3(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    });
    let t2 = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789", a2 = new Uint8Array(24);
    return crypto.getRandomValues(a2), `lm_live_${Array.from(a2, (e3) => t2[e3 % t2.length]).join("")}`;
  }
  let C = /(\/\/.*$|<!--.*?-->)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(=>)|(<\/?[A-Za-z][\w.]*|\/?>)|\b(import|from|export|default|function|return|const|let|var|await|async|new|type|of)\b|([A-Za-z_$][\w$]*)(?=\()|([A-Za-z_][\w-]*)(?==)|(\b\d+\b)|(\{\{key\}\})|([{}()[\];,.:!])/g, z = [
    "cm",
    "str",
    "punct",
    "tag",
    "kw",
    "fn",
    "attr",
    "num",
    "key",
    "punct"
  ];
  function T(e2, t2 = false) {
    return t2 ? "shell" : /(^|\/)\.env/.test(e2) ? "env" : "code";
  }
  function M({ id: e2, children: t2, className: a2, itemClassName: i2 }) {
    let c2 = (0, l.I)() ?? false;
    return (0, n.jsx)("div", {
      className: w(f().swap, a2),
      children: (0, n.jsx)(s.N, {
        initial: false,
        children: (0, n.jsx)(
          r.PY1.div,
          {
            className: w(f().swapItem, i2),
            initial: c2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: c2 ? g : j },
            transition: c2 ? g : k,
            children: t2
          },
          e2
        )
      })
    });
  }
  function A({ value: e2, placeholder: t2, fresh: a2 }) {
    let i2 = (0, l.I)() ?? false, c2 = e2 ?? t2;
    return (0, n.jsx)(r.PY1.span, {
      className: f().keySlot,
      "data-filled": e2 ? "" : void 0,
      "data-fresh": a2 && e2 ? "" : void 0,
      initial: false,
      animate: { width: `${c2.length}ch` },
      transition: i2 ? g : N,
      children: (0, n.jsx)(s.N, {
        initial: false,
        children: e2 ? (0, n.jsx)(
          r.PY1.span,
          {
            className: f().keyText,
            initial: !!a2 && !i2 && { clipPath: "inset(0 100% 0 0)" },
            animate: { clipPath: "inset(0 0% 0 0)" },
            exit: { opacity: 0, transition: i2 ? g : j },
            transition: { duration: 0.34, ease: [...m.T.ease.enter] },
            children: e2
          },
          e2
        ) : (0, n.jsx)(
          r.PY1.span,
          {
            className: f().keyText,
            exit: { opacity: 0, transition: i2 ? g : j },
            children: t2
          },
          "placeholder"
        )
      })
    });
  }
  function E({
    code: e2,
    lang: t2,
    numbered: a2,
    keyValue: l2,
    placeholder: s2,
    fresh: r2
  }) {
    let c2 = (0, i.useMemo)(
      () => e2.split("\n").map(
        (e3) => (function(e4, t3) {
          let a3 = [];
          if ("shell" === t3) {
            let [t4, ...n2] = e4.split(" ");
            a3 = [{ kind: "fn", text: t4 }], n2.forEach(
              (e5) => a3.push(
                { kind: "plain", text: " " },
                {
                  kind: /[@/]/.test(e5) ? "str" : e5.startsWith("-") ? "cm" : "plain",
                  text: e5
                }
              )
            );
          } else if ("env" === t3 && e4.includes("=") && !e4.trimStart().startsWith("#")) {
            let t4 = e4.indexOf("=");
            a3 = [
              { kind: "attr", text: e4.slice(0, t4) },
              { kind: "punct", text: "=" },
              { kind: "str", text: e4.slice(t4 + 1) }
            ];
          } else {
            let t4 = 0;
            for (let n2 of e4.matchAll(C)) {
              let i2 = n2.index ?? 0;
              i2 > t4 && a3.push({ kind: "plain", text: e4.slice(t4, i2) });
              let l3 = n2.slice(1).findIndex(Boolean);
              a3.push({ kind: z[l3] ?? "plain", text: n2[0] }), t4 = i2 + n2[0].length;
            }
            t4 < e4.length && a3.push({ kind: "plain", text: e4.slice(t4) });
          }
          return a3.flatMap(
            (e5) => "key" !== e5.kind && e5.text.includes(b) ? e5.text.split(b).flatMap((t4, a4) => [
              ...a4 ? [{ kind: "key", text: b }] : [],
              ...t4 ? [{ kind: e5.kind, text: t4 }] : []
            ]) : [e5]
          );
        })(e3, t2)
      ),
      [e2, t2]
    );
    return (0, n.jsx)("pre", {
      className: f().pre,
      children: (0, n.jsx)("code", {
        children: c2.map(
          (e3, t3) => (0, n.jsxs)(
            "span",
            {
              className: f().line,
              children: [
                a2 && (0, n.jsx)("span", {
                  className: f().ln,
                  "aria-hidden": "true",
                  children: t3 + 1
                }),
                e3.length ? e3.map(
                  (e4, t4) => "key" === e4.kind ? (0, n.jsx)(
                    A,
                    { value: l2, placeholder: s2, fresh: r2 },
                    t4
                  ) : (0, n.jsx)(
                    "span",
                    {
                      className: "plain" === e4.kind ? void 0 : f()[e4.kind],
                      children: e4.text
                    },
                    t4
                  )
                ) : " "
              ]
            },
            t3
          )
        )
      })
    });
  }
  function S({
    items: e2,
    value: t2,
    onChange: a2,
    label: s2,
    variant: c2,
    panelId: d2,
    idBase: o2
  }) {
    let p2 = (0, l.I)() ?? false, m2 = (0, i.useRef)(null), u2 = (0, i.useRef)(/* @__PURE__ */ new Map()), [_2, h2] = (0, i.useState)(null);
    return (0, i.useLayoutEffect)(() => {
      let e3 = () => {
        let e4 = u2.current.get(t2);
        e4 && h2(
          (t3) => t3 && t3.x === e4.offsetLeft && t3.w === e4.offsetWidth ? t3 : { x: e4.offsetLeft, w: e4.offsetWidth }
        );
      };
      if (e3(), "u" < typeof ResizeObserver || !m2.current) return;
      let a3 = new ResizeObserver(e3);
      return a3.observe(m2.current), () => a3.disconnect();
    }, [t2, e2.length]), (0, n.jsxs)("div", {
      ref: m2,
      role: "tablist",
      "aria-label": s2,
      className: "framework" === c2 ? f().tabs : f().pmTabs,
      style: "framework" === c2 ? { gridTemplateColumns: `repeat(${e2.length}, minmax(0, 1fr))` } : void 0,
      onKeyDown: function(n2) {
        let i2 = e2.findIndex((e3) => e3.id === t2), l2 = "ArrowRight" === n2.key ? (i2 + 1) % e2.length : "ArrowLeft" === n2.key ? (i2 - 1 + e2.length) % e2.length : "Home" === n2.key ? 0 : "End" === n2.key ? e2.length - 1 : -1;
        l2 < 0 || (n2.preventDefault(), a2(e2[l2].id), u2.current.get(e2[l2].id)?.focus());
      },
      children: [
        _2 && (0, n.jsx)(r.PY1.span, {
          className: "framework" === c2 ? f().indicator : f().pmIndicator,
          "aria-hidden": "true",
          initial: false,
          animate: { x: _2.x, width: _2.w },
          transition: p2 ? g : N
        }),
        e2.map((e3) => {
          let i2 = e3.id === t2;
          return (0, n.jsxs)(
            "button",
            {
              ref: (t3) => {
                t3 ? u2.current.set(e3.id, t3) : u2.current.delete(e3.id);
              },
              id: `${o2}-${e3.id}`,
              type: "button",
              role: "tab",
              "aria-selected": i2,
              "aria-controls": d2,
              tabIndex: i2 ? 0 : -1,
              "aria-label": "pm" === c2 ? e3.label : void 0,
              className: "framework" === c2 ? f().tab : f().pmTab,
              "data-selected": i2 ? "" : void 0,
              onClick: () => a2(e3.id),
              children: [
                e3.mark,
                (0, n.jsx)("span", {
                  className: "pm" === c2 ? f().pmLabel : f().tabLabel,
                  children: e3.label
                })
              ]
            },
            e3.id
          );
        })
      ]
    });
  }
  function I({
    head: e2,
    copyValue: t2,
    copyLabel: a2,
    onCopied: i2,
    minLines: l2,
    children: s2
  }) {
    return (0, n.jsxs)("div", {
      className: f().code,
      children: [
        (0, n.jsxs)("div", {
          className: f().codeHead,
          children: [
            (0, n.jsx)("div", { className: f().codeHeadMain, children: e2 }),
            (0, n.jsx)(p.CopyButton, {
              value: t2,
              label: a2,
              iconOnly: true,
              variant: "plain",
              className: f().copy,
              onCopied: i2
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: f().codeBody,
          style: {
            minHeight: `calc(${l2} * var(--is-line) + 2 * var(--is-pad-y))`
          },
          children: s2
        })
      ]
    });
  }
  function H({
    n: e2,
    title: t2,
    description: a2,
    descriptionId: i2,
    done: l2,
    action: s2,
    children: r2
  }) {
    return (0, n.jsxs)("li", {
      className: f().step,
      children: [
        (0, n.jsx)("span", {
          className: f().circle,
          "data-done": l2 ? "" : void 0,
          "aria-hidden": "true",
          children: (0, n.jsx)(M, {
            id: l2 ? "done" : "n",
            className: f().circleSwap,
            children: l2 ? (0, n.jsx)(c.A, { size: 14, strokeWidth: 2 }) : e2
          })
        }),
        (0, n.jsxs)("div", {
          className: f().stepMain,
          children: [
            (0, n.jsxs)("div", {
              className: f().stepHead,
              children: [
                (0, n.jsxs)("div", {
                  className: f().stepText,
                  children: [
                    (0, n.jsxs)("h4", {
                      className: f().stepTitle,
                      children: [
                        t2,
                        (0, n.jsx)("span", {
                          className: f().srOnly,
                          children: l2 ? ", done" : ""
                        })
                      ]
                    }),
                    (0, n.jsx)(M, {
                      id: i2,
                      className: f().stepDesc,
                      itemClassName: f().stepDescItem,
                      children: a2
                    })
                  ]
                }),
                s2
              ]
            }),
            r2
          ]
        })
      ]
    });
  }
  function R({
    title: e2 = "Get started in 30 seconds",
    description: t2 = "Three steps to your first event.",
    version: a2 = "v2.4.0",
    frameworks: l2 = _,
    framework: s2,
    defaultFramework: r2,
    onFrameworkChange: c2,
    packageManager: p2,
    defaultPackageManager: m2 = "npm",
    onPackageManagerChange: x2,
    apiKey: v2,
    keyPlaceholder: k2 = "YOUR_LUMEN_KEY",
    generateKey: j2,
    onKeyGenerated: g2,
    onCopy: N2,
    className: C2
  }) {
    let z2 = (0, i.useId)().replace(/:/g, ""), [A2, O2] = (0, i.useState)(r2 ?? l2[0]?.id ?? ""), [V2, Y2] = (0, i.useState)(m2), [B2, $] = (0, i.useState)(), [D, P] = (0, i.useState)("idle"), [W, Z] = (0, i.useState)(null), [K, F] = (0, i.useState)({ install: false, key: false, code: false }), [U, q] = (0, i.useState)(""), X = (0, i.useRef)(null);
    (0, i.useEffect)(() => () => X.current?.abort(), []);
    let G = s2 ?? A2, Q = l2.find((e3) => e3.id === G) ?? l2[0], J = p2 ?? V2, ee = u.find((e3) => e3.id === J) ?? u[0], et = v2 ?? B2, ea = !!et, en = !j2, ei = (0, i.useMemo)(
      () => Math.max(1, ...l2.map((e3) => e3.code.code.split("\n").length)),
      [l2]
    ), el = (e3) => e3.split(b).join(et ?? k2);
    if (!Q) return null;
    let es = "packages" in Q.install, er = "packages" in Q.install ? `${ee.command} ${Q.install.packages}` : Q.install.code, ec = el(er), ed = el(Q.key.code), eo = el(Q.code.code);
    function ep(e3, t3) {
      F((t4) => "key" === e3 && !ea || t4[e3] ? t4 : { ...t4, [e3]: true }), N2?.(e3, t3);
    }
    async function em() {
      X.current?.abort();
      let e3 = new AbortController();
      X.current = e3, P("loading"), q("Generating a key");
      try {
        let t3 = await (j2 ?? L)(e3.signal);
        if (e3.signal.aborted) return;
        $(t3), Z(t3), P("ready"), F((e4) => ({ ...e4, key: true })), q(
          en ? "Simulated key added to step 2. Nothing was sent." : "Key created and added to step 2."
        ), g2?.(t3), window.setTimeout(() => Z((e4) => e4 === t3 ? null : e4), 1100);
      } catch (t3) {
        if (e3.signal.aborted || t3 instanceof DOMException && "AbortError" === t3.name)
          return;
        P("error"), q("Could not create a key. Try again.");
      }
    }
    let eu = "error" === D ? {
      id: "error",
      node: (0, n.jsxs)("span", {
        className: f().descError,
        children: [
          (0, n.jsx)(d.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          "Could not create a key"
        ]
      })
    } : ea ? {
      id: "ready",
      node: en && !v2 ? "Simulated, not sent" : "Key created"
    } : { id: "idle", node: "Create a project key" }, e_ = l2.map((e3) => ({
      id: e3.id,
      label: e3.label,
      mark: e3.id in h ? (0, n.jsx)(y, { id: e3.id, size: 16 }) : void 0
    })), eh = u.map((e3) => ({
      id: e3.id,
      label: e3.label,
      mark: (0, n.jsx)(y, { id: e3.id, size: 14 })
    })), ey = `${z2}-panel`;
    return (0, n.jsxs)("section", {
      className: w(f().root, C2),
      "aria-labelledby": `${z2}-title`,
      children: [
        (0, n.jsxs)("header", {
          className: f().header,
          children: [
            (0, n.jsxs)("div", {
              className: f().headerText,
              children: [
                (0, n.jsx)("h3", {
                  id: `${z2}-title`,
                  className: f().title,
                  children: e2
                }),
                t2 && (0, n.jsx)("p", { className: f().subtitle, children: t2 })
              ]
            }),
            null != a2 && (0, n.jsx)("span", { className: f().version, children: a2 })
          ]
        }),
        (0, n.jsx)("div", {
          className: f().tabsWrap,
          children: (0, n.jsx)(S, {
            items: e_,
            value: Q.id,
            onChange: function(e3) {
              e3 !== G && (void 0 === s2 && O2(e3), c2?.(e3), q(`Showing ${l2.find((t3) => t3.id === e3)?.label ?? e3} setup`));
            },
            label: "Framework",
            variant: "framework",
            panelId: ey,
            idBase: `${z2}-fw`
          })
        }),
        (0, n.jsxs)("ol", {
          id: ey,
          role: "tabpanel",
          "aria-labelledby": `${z2}-fw-${Q.id}`,
          className: f().steps,
          children: [
            (0, n.jsx)(H, {
              n: 1,
              title: "Install",
              description: es ? "Add the SDK to your project" : "Load the script from our CDN",
              descriptionId: es ? "pm" : "cdn",
              done: K.install,
              children: (0, n.jsx)(I, {
                copyValue: ec,
                copyLabel: "Copy install command",
                onCopied: () => ep("install", ec),
                minLines: 1,
                head: (0, n.jsx)(M, {
                  id: es ? "pm" : "file",
                  className: f().headSwap,
                  children: es ? (0, n.jsx)(S, {
                    items: eh,
                    value: ee.id,
                    onChange: function(e3) {
                      e3 !== J && (void 0 === p2 && Y2(e3), x2?.(e3));
                    },
                    label: "Package manager",
                    variant: "pm",
                    idBase: `${z2}-pm`
                  }) : (0, n.jsx)("span", {
                    className: f().file,
                    children: "file" in Q.install ? Q.install.file : ""
                  })
                }),
                children: (0, n.jsx)(M, {
                  id: `${Q.id}-${es ? ee.id : "cdn"}`,
                  className: f().layers,
                  itemClassName: f().layer,
                  children: (0, n.jsx)(E, {
                    code: er,
                    lang: T("", es),
                    numbered: false,
                    placeholder: k2,
                    keyValue: et,
                    fresh: false
                  })
                })
              })
            }),
            (0, n.jsx)(H, {
              n: 2,
              title: "Add your key",
              description: eu.node,
              descriptionId: eu.id,
              done: K.key,
              action: void 0 === v2 ? (0, n.jsx)(o.$, {
                size: "sm",
                variant: "ready" === D ? "secondary" : "primary",
                loading: "loading" === D,
                onClick: () => void em(),
                className: f().generate,
                children: "ready" === D ? "Regenerate" : "error" === D ? "Try again" : "Generate key"
              }) : void 0,
              children: (0, n.jsx)(I, {
                copyValue: ed,
                copyLabel: "Copy key line",
                onCopied: () => ep("key", ed),
                minLines: 1,
                head: (0, n.jsx)(M, {
                  id: Q.key.file,
                  className: f().headSwap,
                  children: (0, n.jsx)("span", {
                    className: f().file,
                    children: Q.key.file
                  })
                }),
                children: (0, n.jsx)(M, {
                  id: Q.id,
                  className: f().layers,
                  itemClassName: f().layer,
                  children: (0, n.jsx)(E, {
                    code: Q.key.code,
                    lang: T(Q.key.file),
                    numbered: false,
                    placeholder: k2,
                    keyValue: et,
                    fresh: null !== W && W === et
                  })
                })
              })
            }),
            (0, n.jsx)(H, {
              n: 3,
              title: "Ship",
              description: "Deploy and watch events arrive",
              descriptionId: "ship",
              done: K.code,
              children: (0, n.jsx)(I, {
                copyValue: eo,
                copyLabel: "Copy code",
                onCopied: () => ep("code", eo),
                minLines: ei,
                head: (0, n.jsx)(M, {
                  id: Q.code.file,
                  className: f().headSwap,
                  children: (0, n.jsx)("span", {
                    className: f().file,
                    children: Q.code.file
                  })
                }),
                children: (0, n.jsx)(M, {
                  id: Q.id,
                  className: f().layers,
                  itemClassName: f().layer,
                  children: (0, n.jsx)(E, {
                    code: Q.code.code,
                    lang: T(Q.code.file),
                    numbered: true,
                    placeholder: k2,
                    keyValue: et,
                    fresh: false
                  })
                })
              })
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: f().srOnly,
          role: "status",
          "aria-live": "polite",
          children: U
        })
      ]
    });
  }
  var O = a(64279), V = a.n(O);
  function Y() {
    return (0, n.jsx)("div", {
      className: V().demo,
      children: (0, n.jsx)(R, {})
    });
  }
  let B = Y;
};

__m(__module,__exports,__require);
}