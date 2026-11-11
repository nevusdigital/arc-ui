/* integrations (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(17970, ".drawer_overlay__yBV0P{position:fixed;inset:0;z-index:50;background:oklch(10% 0 0/.38);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.drawer_content__4hPD3{--drawer-size:min(30rem,calc(100vw - var(--space-4)));--ease-drawer:cubic-bezier(.32,.72,0,1);--drawer-from:translateX(100%);position:fixed;z-index:51;display:flex;flex-direction:column;width:var(--drawer-size);max-width:100vw;max-height:100dvh;overflow:hidden;border:1px solid var(--border);background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating)}.drawer_content__4hPD3[data-state=closed],.drawer_overlay__yBV0P[data-state=closed]{pointer-events:none!important}.drawer_content__4hPD3[data-side=right]{inset:0 0 0 auto;border-width:1px 0 1px 1px;border-radius:22px 0 0 22px}.drawer_content__4hPD3[data-side=left]{inset:0 auto 0 0;border-width:1px 1px 1px 0;border-radius:0 22px 22px 0}.drawer_content__4hPD3[data-side=top]{inset:0 0 auto;width:100%;max-width:none;max-height:min(32rem,100dvh);border-width:0 0 1px;border-radius:0 0 22px 22px}.drawer_content__4hPD3[data-side=bottom]{inset:auto 0 0;width:100%;max-width:none;max-height:min(32rem,100dvh);border-width:1px 0 0;border-radius:22px 22px 0 0}.drawer_content__4hPD3[data-side=bottom]:before{position:absolute;top:9px;left:50%;width:2.25rem;height:4px;border-radius:var(--radius-pill);background:var(--border-strong);content:\"\";opacity:.75;transform:translateX(-50%)}.drawer_content__4hPD3[data-side=left]{--drawer-from:translateX(-100%)}.drawer_content__4hPD3[data-side=top]{--drawer-from:translateY(-100%)}.drawer_content__4hPD3[data-side=bottom]{--drawer-from:translateY(100%)}.drawer_keyframes__MlZnM.drawer_overlay__yBV0P[data-state=open]{animation:drawer_overlay-in__inXn7 var(--duration-standard) var(--ease-enter) both}.drawer_keyframes__MlZnM.drawer_overlay__yBV0P[data-state=closed]{animation:drawer_overlay-out__O_7_a var(--duration-fast) var(--ease-standard) both}.drawer_keyframes__MlZnM.drawer_content__4hPD3[data-state=open]{animation:drawer_drawer-in__zhyCU var(--duration-considered) var(--ease-drawer) both}.drawer_keyframes__MlZnM.drawer_content__4hPD3[data-state=closed]{animation:drawer_drawer-out__XdMt1 var(--duration-standard) var(--ease-standard) both}.drawer_content__4hPD3:focus{outline:none}.drawer_content__4hPD3[data-contained],.drawer_overlay__yBV0P[data-contained]{position:absolute}.drawer_overlay__yBV0P[data-contained]{z-index:1;background:oklch(10% 0 0/.16);backdrop-filter:none}.drawer_content__4hPD3[data-contained]{--drawer-size:min(22rem,calc(100% - var(--space-8)));z-index:2;max-height:100%;box-shadow:none}.drawer_content__4hPD3[data-contained][data-side=bottom],.drawer_content__4hPD3[data-contained][data-side=top]{max-height:min(32rem,calc(100% - var(--space-8)))}.drawer_content__4hPD3[data-contained][data-side]{border-width:0}.drawer_content__4hPD3[data-contained][data-side=right]{border-left-width:1px}.drawer_content__4hPD3[data-contained][data-side=left]{border-right-width:1px}.drawer_content__4hPD3[data-contained][data-side=top]{border-bottom-width:1px}.drawer_content__4hPD3[data-contained][data-side=bottom]{border-top-width:1px}.drawer_header__Al5zH{display:flex;flex:0 0 auto;align-items:flex-start;justify-content:space-between;gap:var(--space-5);padding:var(--space-6);border-bottom:1px solid var(--border)}.drawer_handle__CJ5MI{touch-action:none;user-select:none}.drawer_content__4hPD3[data-side=bottom] .drawer_handle__CJ5MI,.drawer_content__4hPD3[data-side=top] .drawer_handle__CJ5MI{cursor:grab}.drawer_description__tFTCe,.drawer_title__rL3MA{position:relative}.drawer_swap__fgWDA{display:block;line-height:var(--leading-body)}.drawer_title__rL3MA{margin:0;font-family:var(--font-body);font-size:var(--text-lg);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.drawer_description__tFTCe{max-width:32rem;margin:var(--space-2) 0 0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}.drawer_close__YD2bD{display:grid;flex:0 0 auto;width:var(--space-8);height:var(--space-8);margin-top:calc((var(--text-lg) * var(--leading-body) - var(--space-8)) / 2);place-items:center;border:1px solid var(--border);border-radius:var(--radius-control);background:color-mix(in oklab,var(--surface-muted) 65%,transparent);color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}@media (hover:hover) and (pointer:fine){.drawer_close__YD2bD:hover{background:var(--surface-muted);color:var(--foreground)}}.drawer_close__YD2bD:active{transform:scale(.96);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}.drawer_body__z_QzU{min-height:0;overflow:auto;padding:var(--space-6);font-size:var(--text-sm);line-height:var(--leading-body);overscroll-behavior:contain;scrollbar-width:thin}@media (max-width:40rem){.drawer_content__4hPD3{--drawer-size:calc(100vw - var(--space-3))}}@media (max-width:40rem){.drawer_content__4hPD3[data-side=right]{border-radius:18px 0 0 18px}}@media (max-width:40rem){.drawer_content__4hPD3[data-side=left]{border-radius:0 18px 18px 0}}@media (max-width:40rem){.drawer_content__4hPD3[data-side=top]{border-radius:0 0 18px 18px}}@media (max-width:40rem){.drawer_content__4hPD3[data-side=bottom]{border-radius:18px 18px 0 0}}@media (max-width:40rem){.drawer_body__z_QzU,.drawer_header__Al5zH{padding:var(--space-5)}}@keyframes drawer_overlay-in__inXn7{0%{opacity:0}}@keyframes drawer_overlay-out__O_7_a{to{opacity:0}}@keyframes drawer_drawer-in__zhyCU{0%{transform:var(--drawer-from)}}@keyframes drawer_drawer-out__XdMt1{65%{opacity:1}to{opacity:0;transform:var(--drawer-from)}}@keyframes drawer_drawer-fade-in__1GqIi{0%{opacity:0}}@keyframes drawer_drawer-fade-out__0XnW7{to{opacity:0}}@media (prefers-reduced-motion:reduce){.drawer_keyframes__MlZnM.drawer_overlay__yBV0P[data-state=open]{animation:drawer_overlay-in__inXn7 var(--duration-instant) linear both}}@media (prefers-reduced-motion:reduce){.drawer_keyframes__MlZnM.drawer_overlay__yBV0P[data-state=closed]{animation:drawer_overlay-out__O_7_a .1s linear both}}@media (prefers-reduced-motion:reduce){.drawer_keyframes__MlZnM.drawer_content__4hPD3[data-state=open]{animation:drawer_drawer-fade-in__1GqIi var(--duration-instant) linear both}}@media (prefers-reduced-motion:reduce){.drawer_keyframes__MlZnM.drawer_content__4hPD3[data-state=closed]{animation:drawer_drawer-fade-out__0XnW7 .1s linear both}}@media (prefers-reduced-motion:reduce){.drawer_close__YD2bD,.drawer_close__YD2bD:active{transition:none}}@media (prefers-reduced-motion:reduce){.drawer_close__YD2bD:active{transform:none}}", {"overlay":"drawer_overlay__yBV0P","content":"drawer_content__4hPD3","keyframes":"drawer_keyframes__MlZnM","overlay-in":"drawer_overlay-in__inXn7","overlay-out":"drawer_overlay-out__O_7_a","drawer-in":"drawer_drawer-in__zhyCU","drawer-out":"drawer_drawer-out__XdMt1","header":"drawer_header__Al5zH","handle":"drawer_handle__CJ5MI","title":"drawer_title__rL3MA","description":"drawer_description__tFTCe","swap":"drawer_swap__fgWDA","close":"drawer_close__YD2bD","body":"drawer_body__z_QzU","drawer-fade-in":"drawer_drawer-fade-in__1GqIi","drawer-fade-out":"drawer_drawer-fade-out__0XnW7"});
A.reg(25182, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "eye",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
          key: "1nclc0"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(31116, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { Integrations: () => ea, default: () => ei });
  var a = n(95155), i = n(12115), r = n(79196), s = n(25354), o = n(80642), l = n(28245), c = n(92171), d = n(18310), u = n(57700), p = n(25182), h = n(58081), f = n(82749), m = n(2125), _ = n(89424), y = n(92218), x = n(51288), g = n(98898), b = n(70614), v = n(43298), j = n(96220), w = n(7770), k = n(84508), N = n.n(k);
  let T = {
    slack: {
      color: "#4A154B",
      darkInk: false,
      d: "",
      viewBox: "0 0 24 24",
      layers: [
        {
          fill: "#E01E5A",
          d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
        },
        {
          fill: "#36C5F0",
          d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
        },
        {
          fill: "#2EB67D",
          d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
        },
        {
          fill: "#ECB22E",
          d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
        }
      ]
    },
    "google-drive": {
      color: "#4285F4",
      darkInk: false,
      d: "",
      viewBox: "0 0 87.3 78",
      layers: [
        {
          fill: "#0066DA",
          d: "m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        },
        {
          fill: "#00AC47",
          d: "m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        },
        {
          fill: "#EA4335",
          d: "m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        },
        {
          fill: "#00832D",
          d: "m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        },
        {
          fill: "#2684FC",
          d: "m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        },
        {
          fill: "#FFBA00",
          d: "m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        }
      ]
    },
    mixpanel: {
      color: "#7856FF",
      darkInk: false,
      d: "M6.967 9.996h3.053c-.763-.477-1.048-1.145-1.431-2.384L7.443 3.366C6.919 1.458 6.49.551 4.39.551H.004v1.145h.621c1.286 0 1.431.477 1.814 1.908L3.44 7.326c.524 1.814 1.337 2.67 3.53 2.67h-.003Zm7.06 0h3.053c2.194 0 2.956-.86 3.484-2.67l1.001-3.722c.382-1.431.57-1.908 1.814-1.908H24V.551h-4.34c-2.146 0-2.576.86-3.053 2.815l-1.145 4.246c-.384 1.286-.673 1.907-1.435 2.384Zm-4.007 4.008h4.007V9.996H10.02v4.008ZM0 23.449h4.39c2.1 0 2.529-.907 3.053-2.815l1.146-4.246c.383-1.239.668-1.907 1.431-2.384H6.967c-2.194 0-3.007.86-3.531 2.67l-1.001 3.722c-.383 1.431-.524 1.907-1.814 1.907H0v1.146Zm19.65 0h4.343v-1.146h-.622c-1.239 0-1.431-.476-1.814-1.907l-1.001-3.722c-.524-1.814-1.286-2.67-3.483-2.67h-3.046c.762.477 1.041 1.098 1.424 2.384l1.145 4.246c.477 1.955.907 2.815 3.054 2.815Z"
    },
    gmail: {
      color: "#EA4335",
      darkInk: false,
      d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
    },
    dropbox: {
      color: "#0061FF",
      darkInk: false,
      d: "M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z"
    },
    "google-analytics": {
      color: "#E37400",
      darkInk: false,
      d: "M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"
    },
    zoom: {
      color: "#0B5CFF",
      darkInk: false,
      d: "M5.033 14.649H.743a.74.74 0 0 1-.686-.458.74.74 0 0 1 .16-.808L3.19 10.41H1.06A1.06 1.06 0 0 1 0 9.35h3.957c.301 0 .57.18.686.458a.74.74 0 0 1-.161.808L1.51 13.59h2.464c.585 0 1.06.475 1.06 1.06zM24 11.338c0-1.14-.927-2.066-2.066-2.066-.61 0-1.158.265-1.537.686a2.061 2.061 0 0 0-1.536-.686c-1.14 0-2.066.926-2.066 2.066v3.311a1.06 1.06 0 0 0 1.06-1.06v-2.251a1.004 1.004 0 0 1 2.013 0v2.251c0 .586.474 1.06 1.06 1.06v-3.311a1.004 1.004 0 0 1 2.012 0v2.251c0 .586.475 1.06 1.06 1.06zM16.265 12a2.728 2.728 0 1 1-5.457 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0zm-4.82 0a2.728 2.728 0 1 1-5.458 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0z"
    },
    "amazon-s3": {
      color: "#569A31",
      darkInk: false,
      d: "M20.913 13.147l.12-.895c.947.576 1.258.922 1.354 1.071-.16.031-.562.046-1.474-.176zm-2.174 7.988a.547.547 0 0 0-.005.073c0 .084-.207.405-1.124.768a10.28 10.28 0 0 1-1.438.432c-1.405.325-3.128.504-4.853.504-4.612 0-7.412-1.184-7.412-1.704a.547.547 0 0 0-.005-.073L1.81 5.602c.135.078.28.154.432.227.042.02.086.038.128.057.134.062.272.122.417.18l.179.069c.154.058.314.114.478.168.043.013.084.029.13.043.207.065.423.127.646.187l.176.044c.175.044.353.087.534.127a23.414 23.414 0 0 0 .843.17l.121.023c.252.045.508.085.768.122.071.011.144.02.216.03.2.027.4.053.604.077l.24.027c.245.026.49.05.74.07l.081.009c.275.022.552.04.83.056l.233.012c.21.01.422.018.633.025a33.088 33.088 0 0 0 2.795-.026l.232-.011c.278-.016.555-.034.83-.056l.08-.008c.25-.02.497-.045.742-.072l.238-.026c.205-.024.408-.05.609-.077.07-.01.141-.019.211-.03.261-.037.519-.078.772-.122l.111-.02c.215-.04.427-.082.634-.125l.212-.047c.186-.041.368-.085.546-.13l.166-.042c.225-.06.444-.122.654-.189.04-.012.077-.026.115-.038a10.6 10.6 0 0 0 .493-.173c.058-.021.114-.044.17-.066.15-.06.293-.12.43-.185.038-.017.079-.034.116-.052.153-.073.3-.15.436-.228l-.976 7.245c-2.488-.78-5.805-2.292-7.311-3a1.09 1.09 0 0 0-1.088-1.085c-.6 0-1.088.489-1.088 1.088 0 .6.488 1.089 1.088 1.089.196 0 .378-.056.537-.148 1.72.812 5.144 2.367 7.715 3.15zm-7.42-20.047c5.677 0 9.676 1.759 9.75 2.736l-.014.113c-.01.033-.031.067-.048.101-.015.028-.026.057-.047.087-.024.033-.058.068-.09.102-.028.03-.051.06-.084.09-.038.035-.087.07-.133.105-.04.03-.074.06-.119.091-.053.036-.116.071-.177.107-.05.03-.095.06-.15.09-.068.036-.147.073-.222.11-.059.028-.114.057-.177.085-.084.038-.177.074-.268.111-.068.027-.13.054-.203.082-.097.036-.205.072-.31.107-.075.026-.148.053-.228.079-.111.035-.233.069-.35.103-.085.024-.165.05-.253.073-.124.034-.258.065-.389.098-.093.022-.181.046-.278.068-.139.032-.287.061-.433.091-.098.02-.191.041-.293.06-.155.03-.32.057-.482.084-.1.018-.198.036-.302.052-.166.026-.342.048-.515.072-.11.014-.213.03-.325.044-.181.023-.372.041-.56.06-.11.012-.218.025-.332.036-.188.016-.386.029-.58.043-.122.009-.24.02-.364.028-.207.012-.422.02-.635.028-.12.005-.234.012-.354.016a35.605 35.605 0 0 1-2.069 0c-.12-.004-.234-.011-.352-.016-.214-.008-.43-.016-.637-.028-.122-.008-.238-.02-.36-.027-.195-.015-.394-.028-.584-.044-.11-.01-.215-.024-.324-.035-.19-.02-.384-.038-.568-.06l-.315-.044c-.176-.024-.355-.046-.525-.073-.1-.015-.192-.033-.29-.05-.167-.028-.335-.055-.494-.086-.096-.018-.183-.038-.276-.056-.151-.032-.305-.062-.45-.095-.09-.02-.173-.043-.26-.064-.138-.034-.277-.067-.407-.102-.082-.022-.157-.046-.235-.069a11.75 11.75 0 0 1-.368-.108c-.075-.024-.141-.049-.213-.073-.11-.037-.223-.075-.325-.113-.067-.025-.125-.051-.188-.077-.096-.038-.195-.076-.282-.115-.06-.027-.11-.054-.166-.08-.08-.039-.162-.077-.233-.116-.052-.028-.094-.055-.142-.084-.063-.038-.13-.075-.185-.113-.043-.029-.075-.058-.113-.086-.048-.037-.098-.073-.139-.11-.032-.029-.054-.057-.08-.087-.033-.035-.069-.07-.093-.104-.02-.03-.031-.058-.046-.086-.018-.035-.039-.068-.049-.102l-.015-.113c.076-.977 4.074-2.736 9.748-2.736zm12.182 12.124c-.118-.628-.84-1.291-2.31-2.128l.963-7.16a.531.531 0 0 0 .005-.073C22.16 1.581 16.447 0 11.32 0 6.194 0 .482 1.581.482 3.851a.58.58 0 0 0 .005.072L2.819 21.25c.071 2.002 5.236 2.75 8.5 2.75 1.805 0 3.615-.188 5.098-.531.598-.138 1.133-.3 1.592-.48 1.18-.467 1.789-1.053 1.813-1.739l.945-7.018c.557.131 1.016.197 1.389.197.54 0 .902-.137 1.134-.413a.956.956 0 0 0 .21-.804Z"
    },
    snowflake: {
      color: "#29B5E8",
      darkInk: false,
      d: "M24 3.459c0 .646-.418 1.18-1.141 1.18-.723 0-1.142-.534-1.142-1.18 0-.647.419-1.18 1.142-1.18.723 0 1.141.533 1.141 1.18zm-.228 0c0-.533-.38-.951-.913-.951s-.913.38-.913.95c0 .533.38.952.913.952.57 0 .913-.419.913-.951zm-1.37-.533h.495c.266 0 .456.152.456.38 0 .153-.076.229-.19.305l.19.266v.038h-.266l-.19-.266h-.229v.266h-.266zm.495.228h-.229v.267h.229c.114 0 .152-.038.152-.114.038-.077-.038-.153-.152-.153zM7.602 12.4c.038-.151.076-.304.076-.456 0-.114-.038-.228-.038-.342-.114-.343-.304-.647-.646-.838l-4.87-2.777c-.685-.38-1.56-.152-1.94.533-.381.685-.153 1.56.532 1.94l2.701 1.56-2.701 1.56c-.685.38-.913 1.256-.533 1.94.38.685 1.256.914 1.94.533l4.832-2.777c.343-.267.571-.533.647-.876zm1.332 2.626c-.266-.038-.57.038-.837.19l-4.832 2.777c-.685.38-.913 1.256-.532 1.94.38.686 1.255.914 1.94.533l2.701-1.56v3.12c0 .8.647 1.408 1.446 1.408.799 0 1.407-.647 1.407-1.408v-5.592c0-.761-.57-1.37-1.293-1.408zm4.946-6.088c.266.038.57-.038.837-.19l4.832-2.777c.685-.38.913-1.256.532-1.94-.38-.686-1.255-.914-1.94-.533l-2.701 1.56V1.975c0-.799-.647-1.408-1.446-1.408-.799 0-1.446.609-1.446 1.408V7.53c0 .76.609 1.37 1.332 1.407zM3.265 5.97l4.832 2.777c.266.152.533.19.837.19.723-.038 1.331-.684 1.331-1.407V1.975c0-.799-.646-1.408-1.407-1.408-.799 0-1.446.647-1.446 1.408v3.12l-2.701-1.56c-.685-.38-1.56-.152-1.94.533-.419.646-.19 1.521.494 1.902zm9.093 6.011a.412.412 0 00-.114-.266l-.57-.571a.346.346 0 00-.267-.114.412.412 0 00-.266.114l-.571.57a.411.411 0 00-.114.267c0 .076.038.19.114.267l.57.57a.345.345 0 00.267.114c.076 0 .19-.038.266-.114l.571-.57a.412.412 0 00.114-.267zm1.598.533L11.94 14.53c-.039.038-.153.114-.229.114h-.608a.411.411 0 01-.267-.114L8.82 12.514a.408.408 0 01-.076-.229v-.608c0-.076.038-.19.114-.267l2.016-2.016a.41.41 0 01.267-.114h.608a.41.41 0 01.267.114l2.016 2.016a.347.347 0 01.114.267v.608c-.076.077-.114.19-.19.229zm5.593 5.44l-4.832-2.777c-.266-.152-.57-.19-.837-.152-.723.038-1.332.684-1.332 1.408v5.554c0 .8.647 1.408 1.408 1.408.799 0 1.446-.647 1.446-1.408v-3.12l2.7 1.56c.686.38 1.561.152 1.941-.533.419-.646.19-1.521-.494-1.94zm2.549-7.533l-2.701 1.56 2.7 1.56c.686.38.914 1.256.533 1.94-.38.685-1.255.913-1.94.533l-4.832-2.778a1.644 1.644 0 01-.647-.798c-.037-.153-.076-.305-.076-.457 0-.114.039-.228.039-.342.114-.343.342-.647.646-.837l4.832-2.778c.685-.38 1.56-.152 1.94.533.457.609.19 1.484-.494 1.864"
    }
  };
  function C({ id: e2, className: t2 }) {
    let n2 = T[e2];
    return n2 ? n2.layers ? (0, a.jsx)("svg", {
      className: t2,
      width: "22",
      height: "22",
      viewBox: n2.viewBox ?? "0 0 24 24",
      "aria-hidden": "true",
      children: n2.layers.map(
        (e3) => (0, a.jsx)("path", { fill: e3.fill, d: e3.d }, e3.fill)
      )
    }) : (0, a.jsx)("svg", {
      className: t2,
      "data-dark-ink": n2.darkInk || void 0,
      style: { color: n2.color },
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      children: (0, a.jsx)("path", { d: n2.d })
    }) : null;
  }
  let z = [
    {
      id: "slack",
      name: "Slack",
      category: "communication",
      description: "Post release notes and approval requests to the channels you pick.",
      frequency: "realtime",
      owner: {
        name: "Emma Collins",
        photo: "media/people/emma-collins.svg",
        when: "Sep 3"
      },
      access: [
        { kind: "read", text: "Read channel names and member lists" },
        {
          kind: "write",
          text: "Post and update messages in channels you choose"
        },
        {
          kind: "sync",
          text: "Unfurl project links shared in conversations"
        }
      ]
    },
    {
      id: "google-drive",
      name: "Google Drive",
      category: "storage",
      description: "Attach docs and keep shared folders in step with their projects.",
      frequency: "15m",
      owner: {
        name: "Marcus Johnson",
        photo: "media/people/marcus-johnson.svg",
        when: "Aug 28"
      },
      access: [
        {
          kind: "read",
          text: "View files in folders shared with the workspace"
        },
        { kind: "write", text: "Create a folder for each new project" },
        { kind: "sync", text: "Mirror folder changes into project files" }
      ]
    },
    {
      id: "mixpanel",
      name: "Mixpanel",
      category: "analytics",
      description: "Send product events and funnels to Mixpanel as they happen.",
      frequency: "realtime",
      access: [
        { kind: "read", text: "Read the tracking plan and event schema" },
        {
          kind: "write",
          text: "Send workspace events to one Segment source"
        },
        {
          kind: "sync",
          text: "Replay the last 7 days of events after reconnecting"
        }
      ]
    },
    {
      id: "gmail",
      name: "Gmail",
      category: "communication",
      description: "Turn customer emails into tracked requests with the thread attached.",
      frequency: "15m",
      access: [
        {
          kind: "read",
          text: "Read messages sent to shared inboxes you pick"
        },
        { kind: "write", text: "Apply a label when a request is resolved" },
        { kind: "sync", text: "Import attachments up to 25 MB" }
      ]
    },
    {
      id: "dropbox",
      name: "Dropbox",
      category: "storage",
      description: "Link team folders to projects without uploading files twice.",
      frequency: "hourly",
      access: [
        { kind: "read", text: "View the files and folders you select" },
        { kind: "write", text: "Add a comment when a file is approved" },
        { kind: "sync", text: "Keep file versions and previews up to date" }
      ]
    },
    {
      id: "google-analytics",
      name: "Google Analytics",
      category: "analytics",
      description: "Track sign-ups and traffic on your public project pages.",
      frequency: "hourly",
      access: [
        { kind: "read", text: "Read saved cohorts to target announcements" },
        { kind: "write", text: "Create an annotation when a release ships" },
        { kind: "sync", text: "Send account and user properties" }
      ]
    },
    {
      id: "zoom",
      name: "Zoom",
      category: "communication",
      description: "Attach recordings and transcripts to the meetings on each project.",
      frequency: "hourly",
      access: [
        { kind: "read", text: "Read scheduled meetings and participants" },
        { kind: "write", text: "Create meeting links from project events" },
        { kind: "sync", text: "Import cloud recordings and transcripts" }
      ]
    },
    {
      id: "amazon-s3",
      name: "Amazon S3",
      category: "storage",
      description: "Archive nightly exports and audit logs to a bucket you own.",
      frequency: "daily",
      access: [
        { kind: "read", text: "List objects under the northwind/ prefix" },
        {
          kind: "write",
          text: "Write nightly exports to the bucket you choose"
        },
        { kind: "sync", text: "Keep 13 months of daily exports" }
      ]
    },
    {
      id: "snowflake",
      name: "Snowflake",
      category: "analytics",
      description: "Sync projects, tasks, and time entries to your warehouse every night.",
      frequency: "daily",
      access: [
        { kind: "read", text: "Read table sizes to estimate sync time" },
        { kind: "write", text: "Create tables in the schema you choose" },
        { kind: "sync", text: "Write incremental updates to those tables" }
      ]
    }
  ], S = {
    communication: "Communication",
    storage: "Storage",
    analytics: "Analytics"
  }, L = [
    { value: "all", label: "All" },
    { value: "connected", label: "Connected" },
    { value: "communication", label: "Communication" },
    { value: "storage", label: "Storage" },
    { value: "analytics", label: "Analytics" }
  ], $ = [
    { value: "realtime", label: "Real time" },
    { value: "15m", label: "Every 15 minutes" },
    { value: "hourly", label: "Every hour" },
    { value: "daily", label: "Once a day" }
  ], M = {
    realtime: "Changes arrive within a few seconds.",
    "15m": "Changes arrive in batches every 15 minutes.",
    hourly: "Runs at the start of every hour.",
    daily: "Runs once a day at 02:00 UTC."
  }, P = {
    realtime: "in real time",
    "15m": "every 15 minutes",
    hourly: "every hour",
    daily: "once a day"
  }, A = { read: p.A, write: h.A, sync: f.A }, R = { idle: "Connect", connecting: "Connecting", connected: "Connected" }, I = [...w.T.ease.enter], E = [...w.T.ease.standard], B = { duration: w.T.duration.instant }, O = { opacity: 0, transition: B }, Y = { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }, D = { opacity: 0, y: "0.35em", filter: `blur(${w.T.blur.soft}px)` }, F = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${w.T.blur.subtle}px)`,
    transition: { duration: w.T.duration.fast, ease: E }
  }, W = { duration: w.T.duration.standard, ease: I }, q = (e2, t2 = 0) => ({
    ...e2,
    delay: t2,
    opacity: { duration: w.T.duration.standard, ease: I, delay: t2 },
    filter: { duration: w.T.duration.standard, ease: I, delay: t2 }
  }), V = { opacity: 0, filter: `blur(${w.T.blur.soft}px)` }, U = {
    opacity: 0,
    filter: `blur(${w.T.blur.soft}px)`,
    transition: { duration: w.T.duration.fast, ease: E }
  }, H = { ...q(w.T.spring.smooth), layout: w.T.spring.smooth }, Z = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.75 * e2}em`,
      filter: `blur(${w.T.blur.subtle}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: q(w.T.spring.snappy)
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.75 * e2}em`,
      filter: `blur(${w.T.blur.subtle}px)`,
      transition: { duration: w.T.duration.fast, ease: E }
    })
  }, K = {
    enter: { opacity: 0 },
    center: { opacity: 1, y: 0, filter: "blur(0px)", transition: B },
    exit: O
  };
  function J(e2) {
    let t2 = (0, r.tF)();
    return (0, a.jsx)(s.PY1.span, {
      ...e2,
      "aria-hidden": !t2 || e2["aria-hidden"]
    });
  }
  function G({ swapKey: e2, reduce: t2, className: n2, children: i2 }) {
    return (0, a.jsx)(o.N, {
      mode: "popLayout",
      initial: false,
      children: (0, a.jsx)(
        J,
        {
          className: n2,
          initial: t2 ? { opacity: 0 } : D,
          animate: Y,
          exit: t2 ? O : F,
          transition: t2 ? B : W,
          children: i2
        },
        e2
      )
    });
  }
  function X({ value: e2, reduce: t2 }) {
    let [n2, r2] = (0, i.useState)(e2), [l2, c2] = (0, i.useState)(1);
    return n2 !== e2 && (r2(e2), c2(e2 > n2 ? 1 : -1)), (0, a.jsx)("span", {
      className: N().count,
      "aria-hidden": "true",
      children: (0, a.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        custom: l2,
        children: (0, a.jsx)(
          s.PY1.span,
          {
            custom: l2,
            variants: t2 ? K : Z,
            initial: "enter",
            animate: "center",
            exit: "exit",
            children: e2
          },
          e2
        )
      })
    });
  }
  function Q({ reduce: e2 }) {
    return (0, a.jsx)("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.25,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, a.jsx)(s.PY1.path, {
        d: "M5 12.5l4.5 4.5L19 7.5",
        initial: !e2 && { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: {
          pathLength: { duration: 0.34, ease: I, delay: 0.1 },
          opacity: { duration: 0.05, delay: 0.1 }
        }
      })
    });
  }
  function ee({ name: e2, status: t2, reduce: n2, onConnect: r2, buttonRef: d2 }) {
    let [u2, p2] = (function(e3) {
      let t3 = (0, l.d)("auto"), [n3, a2] = (0, i.useState)(null);
      return (0, i.useEffect)(() => {
        let a3;
        if (!n3 || "u" < typeof ResizeObserver) return;
        let i2 = null, r3 = new ResizeObserver(([r4]) => {
          let s2 = r4?.borderBoxSize?.[0]?.inlineSize ?? n3.offsetWidth, o2 = null !== i2 && i2 !== n3.dataset.phase && !e3 && "number" == typeof t3.get();
          i2 = n3.dataset.phase ?? null, a3?.stop(), o2 ? a3 = (0, c.i)(t3, s2, w.T.spring.morph) : t3.jump(s2);
        });
        return r3.observe(n3), () => {
          r3.disconnect(), a3?.stop();
        };
      }, [n3, e3, t3]), [t3, a2];
    })(n2), h2 = "idle" === t2 ? (0, a.jsx)(m.A, {
      size: 15,
      strokeWidth: 1.75,
      "aria-hidden": "true"
    }) : "connecting" === t2 ? (0, a.jsx)("span", {
      className: N().spinner,
      "aria-hidden": "true"
    }) : (0, a.jsx)(Q, { reduce: n2 });
    return (0, a.jsxs)(s.PY1.div, {
      className: N().connect,
      "data-status": t2,
      whileTap: "idle" !== t2 || n2 ? void 0 : { scale: 0.97 },
      transition: w.T.spring.snappy,
      children: [
        (0, a.jsx)(s.PY1.span, {
          className: N().connectSlot,
          style: { width: u2 },
          children: (0, a.jsx)("span", {
            ref: p2,
            className: N().connectContent,
            "data-phase": t2,
            "aria-hidden": "connected" !== t2 || void 0,
            children: (0, a.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: (0, a.jsxs)(
                J,
                {
                  className: N().connectPhase,
                  initial: n2 ? { opacity: 0 } : D,
                  animate: Y,
                  exit: n2 ? O : F,
                  transition: n2 ? B : W,
                  children: [
                    (0, a.jsx)("span", {
                      className: N().phaseIcon,
                      children: h2
                    }),
                    R[t2]
                  ]
                },
                t2
              )
            })
          })
        }),
        "connected" !== t2 ? (0, a.jsx)("button", {
          ref: d2,
          type: "button",
          className: N().connectHit,
          "aria-label": "connecting" === t2 ? `Connecting ${e2}` : `Connect ${e2}`,
          "aria-busy": "connecting" === t2 || void 0,
          onClick: () => {
            "idle" === t2 && r2();
          }
        }) : null
      ]
    });
  }
  function et({
    item: e2,
    connection: t2,
    reduce: n2,
    layoutKey: r2,
    descriptionId: l2,
    onConnect: c2,
    onOpen: d2,
    registerTrigger: u2,
    ref: p2
  }) {
    let h2 = (0, i.useRef)(null), f2 = (0, i.useRef)(null), m2 = (0, i.useRef)(false), _2 = "connected" === t2.status;
    return (0, i.useEffect)(() => {
      _2 && m2.current && (m2.current = false, document.activeElement && document.activeElement !== document.body || (h2.current?.focus({ preventScroll: true }), document.activeElement !== h2.current && f2.current?.focus({ preventScroll: true })));
    }, [_2]), (0, a.jsxs)(s.PY1.li, {
      ref: p2,
      className: N().card,
      "data-status": t2.status,
      layout: !n2 && "position",
      layoutDependency: r2,
      initial: n2 ? { opacity: 0 } : V,
      animate: Y,
      exit: n2 ? O : U,
      transition: n2 ? B : H,
      children: [
        (0, a.jsx)(C, { id: e2.id, className: N().cardIcon }),
        (0, a.jsxs)("div", {
          className: N().cardBody,
          children: [
            (0, a.jsxs)("div", {
              className: N().cardTitle,
              children: [
                (0, a.jsx)("h3", {
                  className: N().cardName,
                  children: (0, a.jsx)("button", {
                    ref: (t3) => {
                      f2.current = t3, u2(e2.id, t3);
                    },
                    type: "button",
                    className: N().cardOpen,
                    "aria-haspopup": "dialog",
                    "aria-describedby": l2,
                    onClick: (t3) => d2(e2, t3.currentTarget),
                    children: e2.name
                  })
                }),
                (0, a.jsx)("span", {
                  className: N().cardCategory,
                  children: S[e2.category]
                })
              ]
            }),
            (0, a.jsx)("p", {
              id: l2,
              className: N().cardText,
              children: e2.description
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: N().cardActions,
          children: [
            (0, a.jsx)(o.N, {
              initial: false,
              children: _2 ? (0, a.jsx)(
                s.PY1.span,
                {
                  className: N().configure,
                  initial: n2 ? { opacity: 0 } : {
                    opacity: 0,
                    x: 8,
                    filter: `blur(${w.T.blur.soft}px)`
                  },
                  animate: Y,
                  exit: n2 ? O : {
                    opacity: 0,
                    filter: `blur(${w.T.blur.subtle}px)`,
                    transition: {
                      duration: w.T.duration.fast,
                      ease: E
                    }
                  },
                  transition: n2 ? B : q(w.T.spring.snappy, 0.14),
                  children: (0, a.jsx)(x.$, {
                    ref: h2,
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    "aria-haspopup": "dialog",
                    "aria-label": `Configure ${e2.name}`,
                    onClick: (t3) => d2(e2, t3.currentTarget),
                    children: "Configure"
                  })
                },
                "configure"
              ) : null
            }),
            (0, a.jsx)(ee, {
              name: e2.name,
              status: t2.status,
              reduce: n2,
              onConnect: () => {
                m2.current = true, c2(e2);
              }
            })
          ]
        })
      ]
    });
  }
  function en({
    item: e2,
    connection: t2,
    reduce: n2,
    onConnect: r2,
    onDisconnect: l2,
    onFrequency: c2
  }) {
    let d2 = (0, i.useId)(), u2 = (0, i.useRef)(null), p2 = (0, i.useRef)(null), h2 = (0, i.useRef)(false), { status: f2, owner: m2, frequency: x2 } = t2;
    (0, i.useEffect)(() => {
      h2.current && "connecting" !== f2 && (h2.current = false, ("connected" === f2 ? p2 : u2).current?.focus({ preventScroll: true }));
    }, [f2]);
    let g2 = "connected" === f2 && m2 ? (0, a.jsxs)("span", {
      className: N().metaLine,
      children: [
        m2.photo ? (0, a.jsx)("span", {
          "aria-hidden": "true",
          children: (0, a.jsx)(y.e, {
            name: m2.name,
            src: m2.photo,
            size: "sm"
          })
        }) : null,
        "Connected by ",
        m2.name,
        " ",
        "just now" === m2.when ? m2.when : `on ${m2.when}`
      ]
    }) : "connecting" === f2 ? `Waiting for ${e2.name} to approve access` : "Not connected yet";
    return (0, a.jsxs)("div", {
      className: N().sheet,
      children: [
        (0, a.jsxs)("div", {
          className: N().sheetStatus,
          children: [
            (0, a.jsx)(ee, {
              name: e2.name,
              status: f2,
              reduce: n2,
              buttonRef: u2,
              onConnect: () => {
                h2.current = true, r2(e2);
              }
            }),
            (0, a.jsx)("p", {
              className: N().sheetMeta,
              children: (0, a.jsx)(G, {
                swapKey: `${f2}-${m2?.name ?? ""}`,
                reduce: n2,
                children: g2
              })
            })
          ]
        }),
        (0, a.jsxs)("section", {
          className: N().sheetSection,
          "aria-labelledby": `${d2}-access`,
          children: [
            (0, a.jsx)("h3", { id: `${d2}-access`, children: "Access" }),
            (0, a.jsx)("p", {
              className: N().sheetLead,
              children: (0, a.jsx)(G, {
                swapKey: "connected" === f2 ? "granted" : "requested",
                reduce: n2,
                children: "connected" === f2 ? `${e2.name} can` : `${e2.name} will be able to`
              })
            }),
            (0, a.jsx)("ul", {
              className: N().accessList,
              role: "list",
              children: e2.access.map((e3) => {
                let t3 = A[e3.kind];
                return (0, a.jsxs)(
                  "li",
                  {
                    children: [
                      (0, a.jsx)(t3, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, a.jsx)("span", { children: e3.text })
                    ]
                  },
                  e3.text
                );
              })
            })
          ]
        }),
        (0, a.jsx)(o.N, {
          initial: false,
          children: "connected" === f2 ? (0, a.jsx)(
            s.PY1.div,
            {
              className: N().settingsFrame,
              initial: n2 ? { opacity: 0 } : { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: n2 ? O : {
                height: 0,
                opacity: 0,
                transition: {
                  height: w.T.spring.smooth,
                  opacity: { duration: w.T.duration.fast, ease: E }
                }
              },
              transition: n2 ? B : {
                height: w.T.spring.smooth,
                opacity: {
                  duration: w.T.duration.standard,
                  ease: I,
                  delay: 0.06
                }
              },
              children: (0, a.jsxs)("div", {
                className: N().settings,
                children: [
                  (0, a.jsxs)("div", {
                    className: N().frequency,
                    children: [
                      (0, a.jsx)(j.l, {
                        ref: p2,
                        label: "Sync frequency",
                        value: x2,
                        options: $,
                        onValueChange: (t3) => c2(e2, t3)
                      }),
                      (0, a.jsx)("p", {
                        className: N().hint,
                        children: (0, a.jsx)(G, {
                          swapKey: x2,
                          reduce: n2,
                          children: M[x2]
                        })
                      })
                    ]
                  }),
                  (0, a.jsxs)("div", {
                    className: N().dangerZone,
                    children: [
                      (0, a.jsx)(b.j, {
                        label: "Hold to disconnect",
                        confirmedLabel: "Disconnected",
                        icon: (0, a.jsx)(_.A, {
                          size: 16,
                          strokeWidth: 1.75
                        }),
                        onConfirm: () => {
                          h2.current = true, l2(e2);
                        }
                      }),
                      (0, a.jsxs)("p", {
                        children: [
                          "Stops syncing and revokes ",
                          e2.name,
                          "\u2019s access."
                        ]
                      })
                    ]
                  })
                ]
              })
            },
            "settings"
          ) : null
        })
      ]
    });
  }
  function ea() {
    let e2, t2, n2, r2, p2 = (0, i.useId)(), h2 = !!(0, d.I)(), [f2, m2] = (0, i.useState)(
      () => Object.fromEntries(
        z.map((e3) => [
          e3.id,
          {
            status: e3.owner ? "connected" : "idle",
            frequency: e3.frequency,
            owner: e3.owner ?? null
          }
        ])
      )
    ), [_2, y2] = (0, i.useState)("all"), [b2, j2] = (0, i.useState)(""), [k2, T2] = (0, i.useState)(false), [C2, $2] = (0, i.useState)(z[0].id), [M2, A2] = (0, i.useState)("Choose a tool to see what it can access"), R2 = (0, i.useRef)(/* @__PURE__ */ new Map()), I2 = (0, i.useRef)(/* @__PURE__ */ new Map()), E2 = (0, i.useRef)(/* @__PURE__ */ new Map()), F2 = (0, i.useRef)(null), q2 = (0, i.useRef)(null), V2 = (0, i.useRef)(null);
    (0, i.useEffect)(() => {
      let e3 = R2.current;
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, []);
    let U2 = b2.trim().toLowerCase(), H2 = (e3, t3) => "all" === t3 || ("connected" === t3 ? "connected" === f2[e3.id].status : e3.category === t3), Z2 = z.filter(
      (e3) => H2(e3, _2) && (!U2 || `${e3.name} ${S[e3.category]} ${e3.description}`.toLowerCase().includes(U2))
    ), K2 = Object.fromEntries(
      L.map((e3) => [e3.value, z.filter((t3) => H2(t3, e3.value)).length])
    ), J2 = Z2.map((e3) => e3.id).join(), Q2 = z.find((e3) => e3.id === C2) ?? z[0], {
      frame: ee2,
      content: ea2,
      height: ei2
    } = (e2 = (0, i.useRef)(null), t2 = (0, i.useRef)(null), n2 = (0, l.d)("auto"), r2 = (0, i.useRef)(0), (0, i.useLayoutEffect)(() => {
      r2.current = performance.now();
    }, [J2]), (0, i.useEffect)(() => {
      let a2, i2, s2 = t2.current;
      if (!s2 || "u" < typeof ResizeObserver) return;
      let o2 = () => {
        n2.jump("auto"), e2.current && (e2.current.style.overflow = "");
      }, l2 = new ResizeObserver(([t3]) => {
        let l3 = t3?.borderBoxSize?.[0]?.blockSize ?? s2.offsetHeight, d2 = n2.get(), u2 = "number" == typeof d2 ? d2 : a2;
        if (a2 = l3, i2?.stop(), h2 || void 0 === u2 || 0.5 > Math.abs(u2 - l3) || performance.now() - r2.current > 200)
          return o2();
        e2.current && Object.assign(e2.current.style, {
          overflow: "clip",
          height: `${u2}px`
        }), i2 = (0, c.i)(n2, [u2, l3], {
          ...w.T.spring.smooth,
          onComplete: o2
        });
      });
      return l2.observe(s2), () => {
        l2.disconnect(), i2?.stop();
      };
    }, [n2, h2]), { frame: e2, content: t2, height: n2 });
    function er(e3, t3) {
      m2((n3) => ({ ...n3, [e3]: { ...n3[e3], ...t3 } }));
    }
    function es(e3, t3, n3) {
      window.clearTimeout(R2.current.get(e3)), R2.current.set(
        e3,
        window.setTimeout(() => {
          R2.current.delete(e3), n3();
        }, t3)
      );
    }
    function eo(e3) {
      "idle" === f2[e3.id].status && (er(e3.id, { status: "connecting" }), A2(`Connecting ${e3.name}`), es(e3.id, 1400, () => {
        er(e3.id, {
          status: "connected",
          owner: { name: "you", when: "just now" }
        }), A2(`${e3.name} connected`);
      }));
    }
    function el(e3, t3) {
      let n3 = z.filter(
        (n4) => H2(n4, e3) && (!t3 || `${n4.name} ${S[n4.category]} ${n4.description}`.toLowerCase().includes(t3))
      ).length, a2 = 1 === n3 ? "integration" : "integrations";
      return t3 ? `${n3} ${1 === n3 ? "result" : "results"} for \u201C${t3}\u201D` : "all" === e3 ? `Showing ${n3} ${a2}` : `Showing ${n3} ${"connected" === e3 ? "connected" : S[e3].toLowerCase()} ${a2}`;
    }
    function ec(e3) {
      y2(e3), A2(el(e3, U2));
    }
    function ed(e3, t3) {
      F2.current = t3, $2(e3.id), T2(true);
    }
    function eu(e3, t3) {
      t3 ? I2.current.set(e3, t3) : I2.current.delete(e3);
    }
    return (0, a.jsxs)("section", {
      className: N().root,
      "aria-labelledby": `${p2}-title`,
      children: [
        (0, a.jsxs)("header", {
          className: N().header,
          children: [
            (0, a.jsxs)("div", {
              className: N().intro,
              children: [
                (0, a.jsx)("h2", {
                  id: `${p2}-title`,
                  ref: q2,
                  tabIndex: -1,
                  children: "Integrations"
                }),
                (0, a.jsx)("p", {
                  children: "Connect the tools your team already works in."
                })
              ]
            }),
            (0, a.jsx)("div", {
              className: N().search,
              children: (0, a.jsx)(v.L, {
                ref: V2,
                label: "Search integrations",
                placeholder: "Search by name or category",
                autoComplete: "off",
                value: b2,
                onValueChange: function(e3) {
                  j2(e3), A2(el(_2, e3.trim().toLowerCase()));
                }
              })
            })
          ]
        }),
        (0, a.jsx)(u.o, {
          id: p2,
          children: (0, a.jsx)(s.PY1.div, {
            className: N().filters,
            role: "radiogroup",
            "aria-label": "Filter integrations",
            onKeyDown: function(e3) {
              let t3 = L.findIndex((e4) => e4.value === _2), n3 = {
                ArrowRight: t3 + 1,
                ArrowDown: t3 + 1,
                ArrowLeft: t3 - 1,
                ArrowUp: t3 - 1,
                Home: 0,
                End: L.length - 1
              };
              if (!(e3.key in n3)) return;
              e3.preventDefault();
              let a2 = L[(n3[e3.key] + L.length) % L.length].value;
              ec(a2), E2.current.get(a2)?.focus();
            },
            layoutScroll: true,
            children: L.map((e3) => {
              let t3 = e3.value === _2;
              return (0, a.jsxs)(
                "button",
                {
                  ref: (t4) => {
                    t4 ? E2.current.set(e3.value, t4) : E2.current.delete(e3.value);
                  },
                  type: "button",
                  role: "radio",
                  "aria-checked": t3,
                  "aria-label": `${e3.label}, ${K2[e3.value]}`,
                  tabIndex: t3 ? 0 : -1,
                  className: N().filter,
                  onClick: (t4) => {
                    ec(e3.value), t4.currentTarget.scrollIntoView({
                      block: "nearest",
                      inline: "nearest",
                      behavior: h2 ? "auto" : "smooth"
                    });
                  },
                  children: [
                    t3 ? (0, a.jsx)(s.PY1.span, {
                      layoutId: "filter-highlight",
                      className: N().highlight,
                      style: { borderRadius: 14 },
                      transition: h2 ? { duration: 0 } : w.T.spring.morph
                    }) : null,
                    (0, a.jsx)("span", {
                      className: N().filterLabel,
                      children: e3.label
                    }),
                    (0, a.jsx)(X, { value: K2[e3.value], reduce: h2 })
                  ]
                },
                e3.value
              );
            })
          })
        }),
        (0, a.jsx)(s.PY1.div, {
          ref: ee2,
          className: N().frame,
          style: { height: ei2 },
          children: (0, a.jsxs)("div", {
            ref: ea2,
            className: N().content,
            children: [
              (0, a.jsx)("ul", {
                className: N().list,
                role: "list",
                "aria-label": "Integrations",
                children: (0, a.jsx)(o.N, {
                  mode: "popLayout",
                  initial: false,
                  children: Z2.map(
                    (e3) => (0, a.jsx)(
                      et,
                      {
                        item: e3,
                        connection: f2[e3.id],
                        reduce: h2,
                        layoutKey: J2,
                        descriptionId: `${p2}-${e3.id}-description`,
                        onConnect: eo,
                        onOpen: ed,
                        registerTrigger: eu
                      },
                      e3.id
                    )
                  )
                })
              }),
              (0, a.jsx)(o.N, {
                mode: "popLayout",
                initial: false,
                children: 0 === Z2.length ? (0, a.jsxs)(
                  s.PY1.div,
                  {
                    className: N().empty,
                    initial: h2 ? { opacity: 0 } : D,
                    animate: Y,
                    exit: O,
                    transition: h2 ? B : W,
                    children: [
                      (0, a.jsx)("p", {
                        children: U2 ? `No integrations match \u201C${b2.trim()}\u201D` : "Nothing connected yet"
                      }),
                      (0, a.jsx)("span", {
                        children: U2 ? "Try a product name or a category such as storage." : "Connect a tool and it will show up here."
                      }),
                      (0, a.jsx)(x.$, {
                        type: "button",
                        variant: "secondary",
                        size: "sm",
                        onClick: function() {
                          if (U2) {
                            j2(""), A2(el(_2, "")), V2.current?.focus();
                            return;
                          }
                          ec("all"), E2.current.get("all")?.focus();
                        },
                        children: U2 ? "Clear search" : "Browse all"
                      })
                    ]
                  },
                  U2 ? "no-results" : "none-connected"
                ) : null
              })
            ]
          })
        }),
        (0, a.jsx)("footer", {
          className: N().srOnly,
          children: (0, a.jsx)("p", {
            role: "status",
            "aria-live": "polite",
            children: (0, a.jsx)(G, { swapKey: M2, reduce: h2, children: M2 })
          })
        }),
        (0, a.jsx)(g._s, {
          open: k2,
          onOpenChange: T2,
          children: (0, a.jsx)(g.zj, {
            side: "right",
            title: Q2.name,
            description: Q2.description,
            onCloseAutoFocus: function(e3) {
              e3.preventDefault();
              let t3 = F2.current?.isConnected ? F2.current : I2.current.get(C2) ?? q2.current;
              t3?.focus({ preventScroll: true });
            },
            children: (0, a.jsx)(
              en,
              {
                item: Q2,
                connection: f2[Q2.id],
                reduce: h2,
                onConnect: eo,
                onDisconnect: function(e3) {
                  es(e3.id, 650, () => {
                    er(e3.id, { status: "idle", owner: null }), A2(`${e3.name} disconnected`);
                  });
                },
                onFrequency: function(e3, t3) {
                  er(e3.id, { frequency: t3 }), A2(`${e3.name} now syncs ${P[t3]}`);
                }
              },
              Q2.id
            )
          })
        })
      ]
    });
  }
  let ei = ea;
}

__m(__module,__exports,__require);
});
A.reg(43146, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => G,
    VY: () => W,
    ZL: () => P,
    bL: () => D,
    bm: () => K,
    hE: () => F,
    hJ: () => _,
    l9: () => z
  });
  var r = n(12115), o = n(70379), l = n(47527), a = n(68599), i = n(89971), d = n(59322), u = n(19416), c = n(69885), s = n(19040), f = n(83935), p = n(55897), y = n(32007), h = n(66294), m = n(5174), g = n(22954), x = n(42442), v = n(95155), k = Object.defineProperty, M = (e2, t2) => k(e2, "name", { value: t2, configurable: true }), A = "Dialog", [w, b] = (0, a.A)(A), [j, C] = w(A), D = M((e2) => {
    let {
      __scopeDialog: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: a2,
      modal: u2 = true
    } = e2, c2 = r.useRef(null), s2 = r.useRef(null), [f2, p2] = (0, d.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: a2,
      caller: A
    }), [y2, h2] = r.useState(0), [m2, g2] = r.useState(0);
    return (0, v.jsx)(j, {
      scope: t2,
      triggerRef: c2,
      contentRef: s2,
      contentId: (0, i.B)(),
      titleId: (0, i.B)(),
      descriptionId: (0, i.B)(),
      titlePresent: y2 > 0,
      descriptionPresent: m2 > 0,
      setTitleCount: h2,
      setDescriptionCount: g2,
      open: f2,
      onOpenChange: p2,
      onOpenToggle: r.useCallback(() => p2((e3) => !e3), [p2]),
      modal: u2,
      children: n2
    });
  }, "Dialog"), z = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, a2 = C("DialogTrigger", n2), i2 = (0, l.s)(t2, a2.triggerRef);
      return (0, v.jsx)(p.sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a2.open,
        "aria-controls": a2.open ? a2.contentId : void 0,
        "data-state": B(a2.open),
        ...r2,
        ref: i2,
        onClick: (0, o.mK)(e2.onClick, a2.onOpenToggle)
      });
    }, "DialogTrigger")
  ), R = "DialogPortal", [E, O] = w(R, { forceMount: void 0 }), P = M((e2) => {
    let { __scopeDialog: t2, forceMount: n2, children: o2, container: l2 } = e2, a2 = C(R, t2);
    return (0, v.jsx)(E, {
      scope: t2,
      forceMount: n2,
      children: r.Children.map(
        o2,
        (e3) => (0, v.jsx)(f.C, {
          present: n2 || a2.open,
          children: (0, v.jsx)(s.Z, {
            asChild: true,
            container: l2,
            children: e3
          })
        })
      )
    });
  }, "DialogPortal"), I = "DialogOverlay", _ = r.forwardRef(
    M(function(e2, t2) {
      let n2 = O(I, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...o2 } = e2, l2 = C(I, e2.__scopeDialog);
      return l2.modal ? (0, v.jsx)(f.C, {
        present: r2 || l2.open,
        children: (0, v.jsx)(T, { ...o2, ref: t2 })
      }) : null;
    }, "DialogOverlay")
  ), S = (0, x.TL)("DialogOverlay.RemoveScroll"), T = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C(I, n2), a2 = (0, u.e0)(), i2 = (0, l.s)(t2, a2);
      return (0, v.jsx)(m.A, {
        as: S,
        allowPinchZoom: true,
        shards: [o2.contentRef],
        children: (0, v.jsx)(p.sG.div, {
          "data-state": B(o2.open),
          ...r2,
          ref: i2,
          style: { pointerEvents: "auto", ...r2.style }
        })
      });
    }, "DialogOverlayImpl")
  ), q = "DialogContent", G = r.forwardRef(
    M(function(e2, t2) {
      let n2 = O(q, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...o2 } = e2, l2 = C(q, e2.__scopeDialog);
      return (0, v.jsx)(f.C, {
        present: r2 || l2.open,
        children: l2.modal ? (0, v.jsx)(L, { ...o2, ref: t2 }) : (0, v.jsx)(H, { ...o2, ref: t2 })
      });
    }, "DialogContent")
  ), L = r.forwardRef(
    M(function(e2, t2) {
      let n2 = C(q, e2.__scopeDialog), a2 = r.useRef(null), i2 = (0, l.s)(t2, n2.contentRef, a2);
      return r.useEffect(() => {
        let e3 = a2.current;
        if (e3) return (0, g.Eq)(e3);
      }, []), (0, v.jsx)(V, {
        ...e2,
        ref: i2,
        trapFocus: n2.open,
        disableOutsidePointerEvents: n2.open,
        onCloseAutoFocus: (0, o.mK)(e2.onCloseAutoFocus, (e3) => {
          e3.preventDefault(), n2.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0, o.mK)(e2.onPointerDownOutside, (e3) => {
          let t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
          (2 === t3.button || n3) && e3.preventDefault();
        }),
        onFocusOutside: (0, o.mK)(
          e2.onFocusOutside,
          (e3) => e3.preventDefault()
        )
      });
    }, "DialogContentModal")
  ), H = r.forwardRef(
    M(function(e2, t2) {
      let n2 = C(q, e2.__scopeDialog), o2 = r.useRef(false), l2 = r.useRef(false);
      return (0, v.jsx)(V, {
        ...e2,
        ref: t2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (t3) => {
          e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (o2.current || n2.triggerRef.current?.focus(), t3.preventDefault()), o2.current = false, l2.current = false;
        },
        onInteractOutside: (t3) => {
          e2.onInteractOutside?.(t3), t3.defaultPrevented || (o2.current = true, "pointerdown" === t3.detail.originalEvent.type && (l2.current = true));
          let r2 = t3.target;
          n2.triggerRef.current?.contains(r2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && l2.current && t3.preventDefault();
        }
      });
    }, "DialogContentNonModal")
  ), V = r.forwardRef(
    M(function(e2, t2) {
      let {
        __scopeDialog: n2,
        trapFocus: r2,
        onOpenAutoFocus: o2,
        onCloseAutoFocus: l2,
        ...a2
      } = e2, i2 = C(q, n2);
      return (0, y.Oh)(), (0, v.jsx)(v.Fragment, {
        children: (0, v.jsx)(c.n, {
          asChild: true,
          loop: true,
          trapped: r2,
          onMountAutoFocus: o2,
          onUnmountAutoFocus: l2,
          children: (0, v.jsx)(u.qW, {
            role: "dialog",
            id: i2.contentId,
            "aria-describedby": i2.descriptionPresent ? i2.descriptionId : void 0,
            "aria-labelledby": i2.titlePresent ? i2.titleId : void 0,
            "data-state": B(i2.open),
            ...a2,
            ref: t2,
            deferPointerDownOutside: true,
            onDismiss: () => i2.onOpenChange(false)
          })
        })
      });
    }, "DialogContentImpl")
  ), F = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C("DialogTitle", n2), { setTitleCount: l2 } = o2;
      return (0, h.N)(() => (l2((e3) => e3 + 1), () => l2((e3) => e3 - 1)), [l2]), (0, v.jsx)(p.sG.h2, { id: o2.titleId, ...r2, ref: t2 });
    }, "DialogTitle")
  ), W = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C("DialogDescription", n2), { setDescriptionCount: l2 } = o2;
      return (0, h.N)(() => (l2((e3) => e3 + 1), () => l2((e3) => e3 - 1)), [l2]), (0, v.jsx)(p.sG.p, { id: o2.descriptionId, ...r2, ref: t2 });
    }, "DialogDescription")
  ), K = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, l2 = C("DialogClose", n2);
      return (0, v.jsx)(p.sG.button, {
        type: "button",
        ...r2,
        ref: t2,
        onClick: (0, o.mK)(e2.onClick, () => l2.onOpenChange(false))
      });
    }, "DialogClose")
  );
  function B(e2) {
    return e2 ? "open" : "closed";
  }
  M(B, "getState");
}

__m(__module,__exports,__require);
});
A.reg(43298, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { L: () => h });
  var s = a(95155), r = a(12115), i = a(18310), n = a(80642), o = a(25354), l = a(65377), d = a(9005), c = a(7770), u = a(79698), p = a.n(u);
  let h = (0, r.forwardRef)(function({ label: e2, value: t2, onValueChange: a2, id: u2, className: h2, ...m }, y) {
    let g = (0, r.useId)(), w = u2 ?? g, x = (0, i.I)(), f = (0, r.useRef)(null);
    return (0, s.jsxs)("div", {
      className: p().field,
      children: [
        (0, s.jsx)("label", { htmlFor: w, children: e2 }),
        (0, s.jsxs)("div", {
          className: p().shell,
          "data-filled": t2 ? "true" : void 0,
          children: [
            (0, s.jsx)(l.A, { width: 18, height: 18, "aria-hidden": "true" }),
            (0, s.jsx)("input", {
              ...m,
              ref: (e3) => {
                f.current = e3, "function" == typeof y ? y(e3) : y && (y.current = e3);
              },
              id: w,
              type: "search",
              value: t2,
              onChange: (e3) => a2(e3.target.value),
              className: [p().input, h2].filter(Boolean).join(" ")
            }),
            (0, s.jsx)("span", {
              className: p().clearSlot,
              children: (0, s.jsx)(n.N, {
                initial: false,
                children: t2 ? (0, s.jsx)(
                  o.PY1.button,
                  {
                    type: "button",
                    tabIndex: 0,
                    onClick: function() {
                      a2(""), f.current?.focus();
                    },
                    "aria-label": "Clear search",
                    initial: x ? { opacity: 0 } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    whileTap: x ? void 0 : {
                      scale: 0.96,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    transition: x ? { duration: c.T.duration.instant } : {
                      ...c.T.spring.snappy,
                      opacity: { duration: c.T.duration.fast },
                      filter: { duration: c.T.duration.fast }
                    },
                    children: (0, s.jsx)(d.A, {
                      width: 16,
                      height: 16,
                      "aria-hidden": "true"
                    })
                  },
                  "clear"
                ) : null
              })
            })
          ]
        })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(58081, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "pen-line",
    size: 24,
    node: [
      ["path", { d: "M13 21h8", key: "1jsn5i" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu"
        }
      ]
    ],
    aliases: ["edit-3"]
  };
  n.node;
  let d = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(70614, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { j: () => C });
  var a = i(95155), r = i(12115), n = i(25354), s = i(80642), o = i(28245), l = i(92171), c = i(18310), d = i(55809), u = i(25879), p = i(7770), h = i(88542), A = i.n(h);
  let m = [...p.T.ease.enter], f = [...p.T.ease.standard], y = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, _ = { opacity: 0, y: "0.3em", filter: `blur(${p.T.blur.soft}px)` }, x = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${p.T.blur.subtle}px)`,
    transition: { duration: p.T.duration.fast, ease: f }
  }, g = { opacity: 0, scale: 0.6, filter: `blur(${p.T.blur.subtle}px)` }, b = { ...g, transition: { duration: p.T.duration.fast, ease: f } }, j = { opacity: 0 }, v = { opacity: 0, transition: { duration: p.T.duration.instant } }, k = {
    ...p.T.spring.snappy,
    opacity: { duration: p.T.duration.fast, ease: m },
    filter: { duration: p.T.duration.fast, ease: m }
  };
  function w({ reduced: e2 }) {
    return (0, a.jsx)("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, a.jsx)(n.PY1.path, {
        d: "M4 12.5l5 5L20 6.5",
        initial: !e2 && { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: {
          pathLength: { duration: 0.32, ease: m, delay: 0.08 },
          opacity: { duration: 0.05, delay: 0.08 }
        }
      })
    });
  }
  function N({ icon: e2, text: t2, done: i2, width: r2, reduced: o2, measure: l2 }) {
    return (0, a.jsxs)("span", {
      className: A().face,
      children: [
        (0, a.jsx)("span", {
          className: A().iconSlot,
          children: (0, a.jsx)(s.N, {
            initial: false,
            children: (0, a.jsx)(
              n.PY1.span,
              {
                className: A().iconPhase,
                initial: o2 ? j : g,
                animate: y,
                exit: o2 ? v : b,
                transition: o2 ? { duration: p.T.duration.fast } : k,
                children: i2 ? (0, a.jsx)(w, { reduced: o2 }) : e2
              },
              i2 ? "done" : "idle"
            )
          })
        }),
        (0, a.jsxs)(n.PY1.span, {
          className: A().labelFrame,
          style: { width: r2 },
          children: [
            l2 && (0, a.jsx)("span", {
              ref: l2,
              className: A().measure,
              children: t2
            }),
            (0, a.jsx)(s.N, {
              mode: "popLayout",
              initial: false,
              children: (0, a.jsx)(
                n.PY1.span,
                {
                  className: A().label,
                  initial: o2 ? j : _,
                  animate: y,
                  exit: o2 ? v : x,
                  transition: {
                    duration: o2 ? p.T.duration.fast : p.T.duration.standard,
                    ease: m
                  },
                  children: t2
                },
                t2
              )
            })
          ]
        })
      ]
    });
  }
  function C({
    label: e2,
    confirmedLabel: t2 = "Done",
    onConfirm: i2,
    duration: s2 = 1200,
    icon: h2 = (0, a.jsx)(u.A, { strokeWidth: 1.75 }),
    tone: m2 = "accent",
    confirmed: f2,
    onHoldChange: y2,
    className: _2,
    disabled: x2,
    ...g2
  }) {
    let b2 = (0, c.I)() ?? false, j2 = (0, r.useId)(), [v2, k2] = (0, r.useState)(false), [w2, T] = (0, r.useState)(0), P = f2 ?? v2, [I, E] = (0, r.useState)(false), M = (0, o.d)(0), B = (0, o.d)(1), R = (0, d.G)(
      M,
      (e3) => `inset(0 ${((1 - Math.min(1, Math.max(0, e3))) * 100).toFixed(3)}% 0 0)`
    ), [F, S] = (function(e3) {
      let t3 = (0, o.d)("auto"), [i3, a2] = (0, r.useState)(null);
      return (0, r.useEffect)(() => {
        if (!i3 || "u" < typeof ResizeObserver) return;
        let a3 = null, r2 = null, n2 = new ResizeObserver(([n3]) => {
          let s3 = n3?.borderBoxSize?.[0]?.inlineSize ?? i3.offsetWidth, o2 = i3.textContent, c2 = null !== a3 && a3 !== o2 && !e3 && "number" == typeof t3.get();
          a3 = o2, r2?.stop(), c2 ? r2 = (0, l.i)(t3, s3, p.T.spring.morph) : t3.jump(s3);
        });
        return n2.observe(i3), () => {
          n2.disconnect(), r2?.stop();
        };
      }, [i3, e3, t3]), [t3, a2];
    })(b2), D = (0, r.useRef)(null), Y = (0, r.useRef)("mouse"), Q = (0, r.useRef)(null), L = (0, r.useRef)(null), $ = (0, r.useRef)(null), O = P ? t2 : e2, z = (s2 / 1e3).toLocaleString("en-US", { maximumFractionDigits: 1 });
    function H(e3) {
      if (L.current?.stop(), b2) return void B.jump(1);
      let t3 = ($.current?.offsetWidth ?? 0) > 220 ? 0.985 : 0.97;
      L.current = (0, l.i)(B, e3 ? t3 : 1, p.T.spring.snappy);
    }
    function U() {
      Q.current?.stop(), b2 ? M.jump(0) : Q.current = (0, l.i)(M, 0, {
        ...p.T.spring.smooth,
        velocity: 0
      });
    }
    function W() {
      D.current = null, E(false), y2?.(false), H(false);
    }
    function G() {
      D.current && (W(), "touch" === Y.current && navigator.vibrate?.(12), k2(true), T((e3) => e3 + 1), i2());
    }
    function V(e3) {
      P || x2 || D.current || (D.current = e3, E(true), y2?.(true), H(true), Q.current?.stop(), Q.current = (0, l.i)(M, 1, {
        duration: (1 - M.get()) * s2 / 1e3,
        ease: "linear",
        onComplete: G
      }));
    }
    function q() {
      D.current && (W(), U());
    }
    let X = (0, r.useEffectEvent)(() => {
      P && 1 > M.get() && !D.current && (Q.current?.stop(), b2 ? M.jump(1) : Q.current = (0, l.i)(M, 1, p.T.spring.smooth)), !P && M.get() > 0 && !D.current && U();
    });
    return (0, r.useEffect)(() => {
      X();
    }, [P, w2]), (0, r.useEffect)(
      () => () => {
        Q.current?.stop(), L.current?.stop();
      },
      []
    ), (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsxs)(n.PY1.button, {
          ...g2,
          ref: $,
          type: "button",
          className: [A().button, _2].filter(Boolean).join(" "),
          "data-tone": m2,
          "data-state": P ? "done" : I ? "holding" : "idle",
          disabled: x2,
          "aria-disabled": P || void 0,
          "aria-label": O,
          "aria-describedby": P ? void 0 : j2,
          style: { scale: B },
          onPointerDown: function(e3) {
            e3.isPrimary && 0 === e3.button && (Y.current = e3.pointerType, e3.currentTarget.setPointerCapture(e3.pointerId), V("pointer"));
          },
          onPointerMove: function(e3) {
            if ("pointer" !== D.current) return;
            let t3 = e3.currentTarget.getBoundingClientRect();
            (e3.clientX < t3.left - 24 || e3.clientX > t3.right + 24 || e3.clientY < t3.top - 24 || e3.clientY > t3.bottom + 24) && q();
          },
          onPointerUp: q,
          onPointerCancel: q,
          onLostPointerCapture: q,
          onKeyDown: function(e3) {
            (" " === e3.key || "Enter" === e3.key) && (e3.preventDefault(), e3.repeat || V("key"));
          },
          onKeyUp: function(e3) {
            (" " === e3.key || "Enter" === e3.key) && (e3.preventDefault(), "key" === D.current && q());
          },
          onBlur: q,
          onContextMenu: (e3) => e3.preventDefault(),
          children: [
            (0, a.jsx)(N, {
              icon: h2,
              text: O,
              done: P,
              width: F,
              reduced: b2,
              measure: S
            }),
            (0, a.jsx)(n.PY1.span, {
              className: A().fill,
              style: { clipPath: R },
              "aria-hidden": "true",
              children: (0, a.jsx)(N, {
                icon: h2,
                text: O,
                done: P,
                width: F,
                reduced: b2
              })
            })
          ]
        }),
        (0, a.jsx)("span", {
          id: j2,
          className: A().srOnly,
          children: `Press and hold for ${z} seconds to confirm. With a keyboard, hold Space or Enter.`
        }),
        (0, a.jsx)("span", {
          className: A().srOnly,
          role: "status",
          children: P ? t2 : ""
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(73051, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => J,
    In: () => q,
    q7: () => ev,
    VF: () => ew,
    p4: () => eg,
    ZL: () => Y,
    bL: () => G,
    wn: () => eb,
    PP: () => eS,
    l9: () => W,
    WT: () => z,
    LM: () => eu
  });
  var r = n(12115), o = n(47650);
  function l(e2, [t2, n2]) {
    return Math.min(n2, Math.max(t2, e2));
  }
  (0, Object.defineProperty)(l, "name", { value: "clamp", configurable: true });
  var i = n(70379), a = n(76094), s = n(47527), u = n(68599), c = n(1933), d = n(19416), p = n(32007), f = n(69885), h = n(89971), v = n(80878), m = n(19040), g = n(83935), w = n(55897), x = n(42442), S = n(17347), y = n(59322), b = n(66294);
  function C(e2) {
    let t2 = r.useRef({ value: e2, previous: e2 });
    return r.useMemo(
      () => (t2.current.value !== e2 && (t2.current.previous = t2.current.value, t2.current.value = e2), t2.current.previous),
      [e2]
    );
  }
  (0, Object.defineProperty)(C, "name", {
    value: "usePrevious",
    configurable: true
  });
  var j = n(40562), P = n(22954), T = n(5174), k = n(95155), I = Object.defineProperty, E = (e2, t2) => I(e2, "name", { value: t2, configurable: true }), R = [" ", "Enter", "ArrowUp", "ArrowDown"], M = [" ", "Enter"], D = "Select", [L, K, B] = (0, a.N)(D), [_, H] = (0, u.A)(D, [B, v.Bk]), N = (0, v.Bk)(), [A, O] = _(D), [V, F] = _(D);
  function U(e2) {
    let {
      __scopeSelect: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: i2,
      value: a2,
      defaultValue: s2,
      onValueChange: u2,
      dir: d2,
      name: p2,
      autoComplete: f2,
      disabled: m2,
      required: g2,
      form: w2,
      internal_do_not_use_render: x2
    } = e2, S2 = N(t2), [b2, C2] = r.useState(null), [j2, P2] = r.useState(null), [T2, I2] = r.useState(false), R2 = (0, c.jH)(d2), [M2, K2] = (0, y.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: i2,
      caller: D
    }), [B2, _2] = (0, y.i)({ prop: a2, defaultProp: s2, onChange: u2, caller: D }), H2 = r.useRef(null), O2 = r.useRef(B2);
    r.useEffect(() => {
      let e3 = w2 ? b2?.ownerDocument.getElementById(w2) : b2?.form;
      if (e3 instanceof HTMLFormElement) {
        let t3 = E(() => _2(O2.current), "reset");
        return e3.addEventListener("reset", t3), () => e3.removeEventListener("reset", t3);
      }
    }, [w2, b2, _2]);
    let F2 = !b2 || !!w2 || !!b2.closest("form"), [U2, G2] = r.useState(/* @__PURE__ */ new Set()), W2 = (0, h.B)(), z2 = Array.from(U2).map((e3) => e3.props.value).join(";"), q2 = r.useCallback((e3) => {
      G2((t3) => new Set(t3).add(e3));
    }, []), Z2 = r.useCallback((e3) => {
      G2((t3) => {
        let n3 = new Set(t3);
        return n3.delete(e3), n3;
      });
    }, []), X2 = {
      required: g2,
      trigger: b2,
      onTriggerChange: C2,
      valueNode: j2,
      onValueNodeChange: P2,
      valueNodeHasChildren: T2,
      onValueNodeHasChildrenChange: I2,
      contentId: W2,
      value: B2,
      onValueChange: _2,
      open: M2,
      onOpenChange: K2,
      dir: R2,
      triggerPointerDownPosRef: H2,
      disabled: m2,
      name: p2,
      autoComplete: f2,
      form: w2,
      nativeOptions: U2,
      nativeSelectKey: z2,
      isFormControl: F2
    };
    return (0, k.jsx)(v.bL, {
      ...S2,
      children: (0, k.jsx)(A, {
        scope: t2,
        ...X2,
        children: (0, k.jsx)(L.Provider, {
          scope: t2,
          children: (0, k.jsx)(V, {
            scope: t2,
            onNativeOptionAdd: q2,
            onNativeOptionRemove: Z2,
            children: eP(x2) ? x2(X2) : n2
          })
        })
      })
    });
  }
  E(U, "SelectProvider");
  var G = E((e2) => {
    let { __scopeSelect: t2, children: n2, ...r2 } = e2;
    return (0, k.jsx)(U, {
      __scopeSelect: t2,
      ...r2,
      internal_do_not_use_render: ({ isFormControl: e3 }) => (0, k.jsxs)(k.Fragment, {
        children: [n2, e3 ? (0, k.jsx)(ej, { __scopeSelect: t2 }) : null]
      })
    });
  }, "Select"), W = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, disabled: o2 = false, ...l2 } = e2, a2 = N(n2), u2 = O("SelectTrigger", n2), c2 = u2.disabled || o2, d2 = (0, s.s)(t2, u2.onTriggerChange), p2 = K(n2), f2 = r.useRef("touch"), [h2, m2, g2] = ek((e3) => {
        let t3 = p2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.value === u2.value), r2 = eI(t3, e3, n3);
        void 0 !== r2 && u2.onValueChange(r2.value);
      }), x2 = E((e3) => {
        c2 || (u2.onOpenChange(true), g2()), e3 && (u2.triggerPointerDownPosRef.current = {
          x: Math.round(e3.pageX),
          y: Math.round(e3.pageY)
        });
      }, "handleOpen");
      return (0, k.jsx)(v.Mz, {
        asChild: true,
        ...a2,
        children: (0, k.jsx)(w.sG.button, {
          type: "button",
          role: "combobox",
          "aria-controls": u2.open ? u2.contentId : void 0,
          "aria-expanded": u2.open,
          "aria-required": u2.required,
          "aria-autocomplete": "none",
          dir: u2.dir,
          "data-state": u2.open ? "open" : "closed",
          disabled: c2,
          "data-disabled": c2 ? "" : void 0,
          "data-placeholder": eT(u2.value) ? "" : void 0,
          ...l2,
          ref: d2,
          onClick: (0, i.mK)(l2.onClick, (e3) => {
            e3.currentTarget.focus(), "mouse" !== f2.current && x2(e3);
          }),
          onPointerDown: (0, i.mK)(l2.onPointerDown, (e3) => {
            f2.current = e3.pointerType;
            let t3 = e3.target;
            t3.hasPointerCapture(e3.pointerId) && t3.releasePointerCapture(e3.pointerId), 0 === e3.button && false === e3.ctrlKey && "mouse" === e3.pointerType && (x2(e3), e3.preventDefault());
          }),
          onKeyDown: (0, i.mK)(l2.onKeyDown, (e3) => {
            let t3 = "" !== h2.current;
            e3.ctrlKey || e3.altKey || e3.metaKey || 1 !== e3.key.length || m2(e3.key), (!t3 || " " !== e3.key) && R.includes(e3.key) && (x2(), e3.preventDefault());
          })
        })
      });
    }, "SelectTrigger")
  ), z = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        className: o2,
        style: l2,
        children: i2,
        placeholder: a2 = "",
        ...u2
      } = e2, c2 = O("SelectValue", n2), { onValueNodeHasChildrenChange: d2 } = c2, p2 = void 0 !== i2, f2 = (0, s.s)(t2, c2.onValueNodeChange);
      (0, b.N)(() => {
        d2(p2);
      }, [d2, p2]);
      let h2 = eT(c2.value);
      return (0, k.jsx)(w.sG.span, {
        ...u2,
        asChild: !h2 && u2.asChild,
        ref: f2,
        style: { pointerEvents: "none" },
        children: (0, k.jsx)(
          r.Fragment,
          { children: h2 ? a2 : i2 },
          h2 ? "placeholder" : "value"
        )
      });
    }, "SelectValue")
  ), q = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, ...o2 } = e2;
      return (0, k.jsx)(w.sG.span, {
        "aria-hidden": true,
        ...o2,
        ref: t2,
        children: r2 || "\u25BC"
      });
    }, "SelectIcon")
  ), [Z, X] = _("SelectPortal", { forceMount: void 0 }), Y = E((e2) => {
    let { __scopeSelect: t2, forceMount: n2, ...r2 } = e2;
    return (0, k.jsx)(Z, {
      scope: e2.__scopeSelect,
      forceMount: n2,
      children: (0, k.jsx)(m.Z, { asChild: true, ...r2 })
    });
  }, "SelectPortal"), Q = "SelectContent", J = r.forwardRef(
    E(function(e2, t2) {
      let n2 = X(Q, e2.__scopeSelect), { forceMount: o2 = n2.forceMount, ...l2 } = e2, i2 = O(Q, e2.__scopeSelect), [a2, s2] = r.useState();
      return (0, b.N)(() => {
        s2(new DocumentFragment());
      }, []), (0, k.jsx)(g.C, {
        present: o2 || i2.open,
        children: ({ present: e3 }) => e3 ? (0, k.jsx)(er, { ...l2, ref: t2 }) : (0, k.jsx)($, { ...l2, fragment: a2 })
      });
    }, "SelectContent")
  ), $ = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, fragment: l2 } = e2;
      return l2 ? o.createPortal(
        (0, k.jsx)(ee, {
          scope: n2,
          children: (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)("div", { ref: t2, children: r2 })
          })
        }),
        l2
      ) : null;
    }, "SelectContentFragment")
  ), [ee, et] = _(Q), en = (0, x.TL)("SelectContent.RemoveScroll"), er = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2 } = e2, {
        position: o2 = "item-aligned",
        onCloseAutoFocus: l2,
        onEscapeKeyDown: a2,
        onPointerDownOutside: u2,
        side: c2,
        sideOffset: h2,
        align: v2,
        alignOffset: m2,
        arrowPadding: g2,
        collisionBoundary: w2,
        collisionPadding: x2,
        sticky: S2,
        hideWhenDetached: y2,
        avoidCollisions: b2,
        ...C2
      } = e2, j2 = O(Q, n2), [I2, R2] = r.useState(null), [M2, D2] = r.useState(null), L2 = (0, s.s)(t2, R2), [B2, _2] = r.useState(null), [H2, N2] = r.useState(null), A2 = K(n2), [V2, F2] = r.useState(false), U2 = r.useRef(false);
      r.useEffect(() => {
        if (I2) return (0, P.Eq)(I2);
      }, [I2]), (0, p.Oh)();
      let G2 = r.useCallback(
        (e3) => {
          let [t3, ...n3] = A2().map((e4) => e4.ref.current), [r2] = n3.slice(-1), o3 = document.activeElement;
          for (let n4 of e3)
            if (n4 === o3 || (n4?.scrollIntoView({ block: "nearest" }), n4 === t3 && M2 && (M2.scrollTop = 0), n4 === r2 && M2 && (M2.scrollTop = M2.scrollHeight), n4?.focus(), document.activeElement !== o3))
              return;
        },
        [A2, M2]
      ), W2 = r.useCallback(() => G2([B2, I2]), [G2, B2, I2]);
      r.useEffect(() => {
        V2 && W2();
      }, [V2, W2]);
      let { onOpenChange: z2, triggerPointerDownPosRef: q2 } = j2;
      r.useEffect(() => {
        if (I2) {
          let e3 = { x: 0, y: 0 }, t3 = E((t4) => {
            e3 = {
              x: Math.abs(Math.round(t4.pageX) - (q2.current?.x ?? 0)),
              y: Math.abs(Math.round(t4.pageY) - (q2.current?.y ?? 0))
            };
          }, "handlePointerMove"), n3 = E((n4) => {
            e3.x <= 10 && e3.y <= 10 ? n4.preventDefault() : n4.composedPath().includes(I2) || z2(false), document.removeEventListener("pointermove", t3), q2.current = null;
          }, "handlePointerUp");
          return null !== q2.current && (document.addEventListener("pointermove", t3), document.addEventListener("pointerup", n3, {
            capture: true,
            once: true
          })), () => {
            document.removeEventListener("pointermove", t3), document.removeEventListener("pointerup", n3, {
              capture: true
            });
          };
        }
      }, [I2, z2, q2]), r.useEffect(() => {
        let e3 = E(() => z2(false), "close");
        return window.addEventListener("blur", e3), window.addEventListener("resize", e3), () => {
          window.removeEventListener("blur", e3), window.removeEventListener("resize", e3);
        };
      }, [z2]);
      let [Z2, X2] = ek((e3) => {
        let t3 = A2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.ref.current === document.activeElement), r2 = eI(t3, e3, n3);
        r2 && setTimeout(() => r2.ref.current?.focus());
      }), Y2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && (_2(e3), r2 && (U2.current = true));
        },
        [j2.value]
      ), J2 = r.useCallback(() => I2?.focus(), [I2]), $2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && N2(e3);
        },
        [j2.value]
      ), et2 = "popper" === o2 ? el : eo;
      return (0, k.jsx)(ee, {
        scope: n2,
        content: I2,
        viewport: M2,
        onViewportChange: D2,
        itemRefCallback: Y2,
        selectedItem: B2,
        onItemLeave: J2,
        itemTextRefCallback: $2,
        focusSelectedItem: W2,
        selectedItemText: H2,
        position: o2,
        isPositioned: V2,
        searchRef: Z2,
        children: (0, k.jsx)(T.A, {
          as: en,
          allowPinchZoom: true,
          children: (0, k.jsx)(f.n, {
            asChild: true,
            trapped: j2.open,
            onMountAutoFocus: (e3) => {
              e3.preventDefault();
            },
            onUnmountAutoFocus: (0, i.mK)(l2, (e3) => {
              j2.trigger?.focus({ preventScroll: true }), e3.preventDefault();
            }),
            children: (0, k.jsx)(d.qW, {
              asChild: true,
              disableOutsidePointerEvents: true,
              onEscapeKeyDown: a2,
              onPointerDownOutside: u2,
              onFocusOutside: (e3) => e3.preventDefault(),
              onDismiss: () => j2.onOpenChange(false),
              children: (0, k.jsx)(et2, {
                role: "listbox",
                id: j2.contentId,
                "data-state": j2.open ? "open" : "closed",
                dir: j2.dir,
                onContextMenu: (e3) => e3.preventDefault(),
                ...C2,
                ...et2 === el ? {
                  side: c2,
                  sideOffset: h2,
                  align: v2,
                  alignOffset: m2,
                  arrowPadding: g2,
                  collisionBoundary: w2,
                  collisionPadding: x2,
                  sticky: S2,
                  hideWhenDetached: y2,
                  avoidCollisions: b2
                } : {},
                onPlaced: () => F2(true),
                ref: L2,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...C2.style
                },
                onKeyDown: (0, i.mK)(C2.onKeyDown, (e3) => {
                  let t3 = e3.ctrlKey || e3.altKey || e3.metaKey;
                  if ("Tab" === e3.key && e3.preventDefault(), t3 || 1 !== e3.key.length || X2(e3.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e3.key)) {
                    let t4 = A2().filter((e4) => !e4.disabled).map((e4) => e4.ref.current);
                    if (["ArrowUp", "End"].includes(e3.key) && (t4 = t4.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e3.key)) {
                      let n3 = e3.target, r2 = t4.indexOf(n3);
                      t4 = t4.slice(r2 + 1);
                    }
                    setTimeout(() => G2(t4)), e3.preventDefault();
                  }
                })
              })
            })
          })
        })
      });
    }, "SelectContentImpl")
  ), eo = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onPlaced: o2, ...i2 } = e2, a2 = O(Q, n2), u2 = et(Q, n2), [c2, d2] = r.useState(null), [p2, f2] = r.useState(null), h2 = (0, s.s)(t2, f2), v2 = K(n2), m2 = r.useRef(false), g2 = r.useRef(true), {
        viewport: x2,
        selectedItem: S2,
        selectedItemText: y2,
        focusSelectedItem: C2
      } = u2, j2 = r.useCallback(() => {
        if (a2.trigger && a2.valueNode && c2 && p2 && x2 && S2 && y2) {
          let e3 = a2.trigger.getBoundingClientRect(), t3 = p2.getBoundingClientRect(), n3 = a2.valueNode.getBoundingClientRect(), r2 = y2.getBoundingClientRect();
          if ("rtl" !== a2.dir) {
            let o3 = r2.left - t3.left, i4 = n3.left - o3, a3 = e3.left - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.left = d4 + "px";
          } else {
            let o3 = t3.right - r2.right, i4 = window.innerWidth - n3.right - o3, a3 = window.innerWidth - e3.right - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.right = d4 + "px";
          }
          let i3 = v2(), s2 = window.innerHeight - 20, u3 = x2.scrollHeight, d3 = window.getComputedStyle(p2), f3 = parseInt(d3.borderTopWidth, 10), h3 = parseInt(d3.paddingTop, 10), g3 = parseInt(d3.borderBottomWidth, 10), w2 = f3 + h3 + u3 + parseInt(d3.paddingBottom, 10) + g3, b2 = Math.min(5 * S2.offsetHeight, w2), C3 = window.getComputedStyle(x2), j3 = parseInt(C3.paddingTop, 10), P3 = parseInt(C3.paddingBottom, 10), T3 = e3.top + e3.height / 2 - 10, k2 = S2.offsetHeight / 2, I3 = f3 + h3 + (S2.offsetTop + k2);
          if (I3 <= T3) {
            let e4 = i3.length > 0 && S2 === i3[i3.length - 1].ref.current;
            c2.style.bottom = "0px";
            let t4 = Math.max(
              s2 - T3,
              k2 + (e4 ? P3 : 0) + (p2.clientHeight - x2.offsetTop - x2.offsetHeight) + g3
            );
            c2.style.height = I3 + t4 + "px";
          } else {
            let e4 = i3.length > 0 && S2 === i3[0].ref.current;
            c2.style.top = "0px";
            let t4 = Math.max(T3, f3 + x2.offsetTop + (e4 ? j3 : 0) + k2);
            c2.style.height = t4 + (w2 - I3) + "px", x2.scrollTop = I3 - T3 + x2.offsetTop;
          }
          c2.style.margin = "10px 0", c2.style.minHeight = b2 + "px", c2.style.maxHeight = s2 + "px", o2?.(), requestAnimationFrame(() => m2.current = true);
        }
      }, [v2, a2.trigger, a2.valueNode, c2, p2, x2, S2, y2, a2.dir, o2]);
      (0, b.N)(() => j2(), [j2]);
      let [P2, T2] = r.useState();
      (0, b.N)(() => {
        p2 && T2(window.getComputedStyle(p2).zIndex);
      }, [p2]);
      let I2 = r.useCallback(
        (e3) => {
          e3 && true === g2.current && (j2(), C2?.(), g2.current = false);
        },
        [j2, C2]
      );
      return (0, k.jsx)(ei, {
        scope: n2,
        contentWrapper: c2,
        shouldExpandOnScrollRef: m2,
        onScrollButtonChange: I2,
        children: (0, k.jsx)("div", {
          ref: d2,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P2
          },
          children: (0, k.jsx)(w.sG.div, {
            ...i2,
            ref: h2,
            style: { boxSizing: "border-box", maxHeight: "100%", ...i2.style }
          })
        })
      });
    }, "SelectItemAlignedPosition")
  ), el = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        align: r2 = "start",
        collisionPadding: o2 = 10,
        ...l2
      } = e2, i2 = N(n2);
      return (0, k.jsx)(v.UC, {
        ...i2,
        ...l2,
        ref: t2,
        align: r2,
        collisionPadding: o2,
        style: {
          boxSizing: "border-box",
          ...l2.style,
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      });
    }, "SelectPopperPosition")
  ), [ei, ea] = _(Q, {}), es = "SelectViewport", eu = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, nonce: o2, ...l2 } = e2, a2 = et(es, n2), u2 = ea(es, n2), c2 = (0, s.s)(t2, a2.onViewportChange), d2 = r.useRef(0);
      return (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o2
          }),
          (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)(w.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...l2,
              ref: c2,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...l2.style
              },
              onScroll: (0, i.mK)(l2.onScroll, (e3) => {
                let t3 = e3.currentTarget, { contentWrapper: n3, shouldExpandOnScrollRef: r2 } = u2;
                if (r2?.current && n3) {
                  let e4 = Math.abs(d2.current - t3.scrollTop);
                  if (e4 > 0) {
                    let r3 = window.innerHeight - 20, o3 = Math.max(
                      parseFloat(n3.style.minHeight),
                      parseFloat(n3.style.height)
                    );
                    if (o3 < r3) {
                      let l3 = o3 + e4, i2 = Math.min(r3, l3), a3 = l3 - i2;
                      n3.style.height = i2 + "px", "0px" === n3.style.bottom && (t3.scrollTop = a3 > 0 ? a3 : 0, n3.style.justifyContent = "flex-end");
                    }
                  }
                }
                d2.current = t3.scrollTop;
              })
            })
          })
        ]
      });
    }, "SelectViewport")
  ), [ec, ed] = _("SelectGroup"), ep = "SelectItem", [ef, eh] = _(ep), ev = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        value: o2,
        disabled: l2 = false,
        textValue: a2,
        ...u2
      } = e2, c2 = O(ep, n2), d2 = et(ep, n2), p2 = c2.value === o2, [f2, v2] = r.useState(a2 ?? ""), [m2, g2] = r.useState(false), x2 = (0, S.c)((e3) => d2.itemRefCallback?.(e3, o2, l2)), y2 = (0, s.s)(t2, x2), b2 = (0, h.B)(), C2 = r.useRef("touch"), j2 = E(() => {
        l2 || (c2.onValueChange(o2), c2.onOpenChange(false));
      }, "handleSelect");
      return (0, k.jsx)(ef, {
        scope: n2,
        value: o2,
        disabled: l2,
        textId: b2,
        isSelected: p2,
        onItemTextChange: r.useCallback((e3) => {
          v2((t3) => t3 || (e3?.textContent ?? "").trim());
        }, []),
        children: (0, k.jsx)(L.ItemSlot, {
          scope: n2,
          value: o2,
          disabled: l2,
          textValue: f2,
          children: (0, k.jsx)(w.sG.div, {
            role: "option",
            "aria-labelledby": b2,
            "data-highlighted": m2 ? "" : void 0,
            "aria-selected": p2 && m2,
            "data-state": p2 ? "checked" : "unchecked",
            "aria-disabled": l2 || void 0,
            "data-disabled": l2 ? "" : void 0,
            tabIndex: l2 ? void 0 : -1,
            ...u2,
            ref: y2,
            onFocus: (0, i.mK)(u2.onFocus, () => g2(true)),
            onBlur: (0, i.mK)(u2.onBlur, () => g2(false)),
            onClick: (0, i.mK)(u2.onClick, () => {
              "mouse" !== C2.current && j2();
            }),
            onPointerUp: (0, i.mK)(u2.onPointerUp, () => {
              "mouse" === C2.current && j2();
            }),
            onPointerDown: (0, i.mK)(u2.onPointerDown, (e3) => {
              C2.current = e3.pointerType;
            }),
            onPointerMove: (0, i.mK)(u2.onPointerMove, (e3) => {
              C2.current = e3.pointerType, l2 ? d2.onItemLeave?.() : "mouse" === C2.current && e3.currentTarget.focus({ preventScroll: true });
            }),
            onPointerLeave: (0, i.mK)(u2.onPointerLeave, (e3) => {
              e3.currentTarget === document.activeElement && d2.onItemLeave?.();
            }),
            onKeyDown: (0, i.mK)(u2.onKeyDown, (e3) => {
              l2 || e3.target !== e3.currentTarget || (d2.searchRef?.current === "" || " " !== e3.key) && (M.includes(e3.key) && j2(), " " === e3.key && e3.preventDefault());
            })
          })
        })
      });
    }, "SelectItem")
  ), em = "SelectItemText", eg = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, className: l2, style: i2, ...a2 } = e2, u2 = O(em, n2), c2 = et(em, n2), d2 = eh(em, n2), p2 = F(em, n2), [f2, h2] = r.useState(null), v2 = (0, S.c)((e3) => c2.itemTextRefCallback?.(e3, d2.value, d2.disabled)), m2 = (0, s.s)(t2, h2, d2.onItemTextChange, v2), g2 = f2?.textContent, x2 = r.useMemo(
        () => (0, k.jsx)(
          "option",
          { value: d2.value, disabled: d2.disabled, children: g2 },
          d2.value
        ),
        [d2.disabled, d2.value, g2]
      ), { onNativeOptionAdd: y2, onNativeOptionRemove: C2 } = p2;
      return (0, b.N)(() => (y2(x2), () => C2(x2)), [y2, C2, x2]), (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(w.sG.span, { id: d2.textId, ...a2, ref: m2 }),
          d2.isSelected && u2.valueNode && !u2.valueNodeHasChildren && !eT(u2.value) ? o.createPortal(a2.children, u2.valueNode) : null
        ]
      });
    }, "SelectItemText")
  ), ew = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, ...r2 } = e2;
      return eh("SelectItemIndicator", n2).isSelected ? (0, k.jsx)(w.sG.span, { "aria-hidden": true, ...r2, ref: t2 }) : null;
    }, "SelectItemIndicator")
  ), ex = "SelectScrollUpButton", eS = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ex, e2.__scopeSelect), o2 = ea(ex, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            i2(t3.scrollTop > 0);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop - t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollUpButton")
  ), ey = "SelectScrollDownButton", eb = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ey, e2.__scopeSelect), o2 = ea(ey, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            let e4 = t3.scrollHeight - t3.clientHeight;
            i2(Math.ceil(t3.scrollTop) < e4);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop + t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollDownButton")
  ), eC = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onAutoScroll: o2, ...l2 } = e2, a2 = et("SelectScrollButton", n2), s2 = r.useRef(null), u2 = K(n2), c2 = r.useCallback(() => {
        null !== s2.current && (window.clearInterval(s2.current), s2.current = null);
      }, []);
      return r.useEffect(() => () => c2(), [c2]), (0, b.N)(() => {
        let e3 = u2().find((e4) => e4.ref.current === document.activeElement);
        e3?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [u2]), (0, k.jsx)(w.sG.div, {
        "aria-hidden": true,
        ...l2,
        ref: t2,
        style: { flexShrink: 0, ...l2.style },
        onPointerDown: (0, i.mK)(l2.onPointerDown, () => {
          null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerMove: (0, i.mK)(l2.onPointerMove, () => {
          a2.onItemLeave?.(), null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerLeave: (0, i.mK)(l2.onPointerLeave, () => {
          c2();
        })
      });
    }, "SelectScrollButtonImpl")
  ), ej = r.forwardRef(
    E(function({ __scopeSelect: e2, ...t2 }, n2) {
      let o2 = O("SelectBubbleInput", e2), {
        value: l2,
        onValueChange: i2,
        required: a2,
        disabled: u2,
        name: c2,
        autoComplete: d2,
        form: p2
      } = o2, { nativeOptions: f2, nativeSelectKey: h2 } = o2, v2 = r.useRef(null), m2 = (0, s.s)(n2, v2), g2 = l2 ?? "", x2 = C(g2), S2 = Array.from(f2).some((e3) => (e3.props.value ?? "") === "");
      return r.useEffect(() => {
        let e3 = v2.current;
        if (!e3) return;
        let t3 = Object.getOwnPropertyDescriptor(
          window.HTMLSelectElement.prototype,
          "value"
        ).set;
        if (x2 !== g2 && t3) {
          let n3 = new Event("change", { bubbles: true });
          t3.call(e3, g2), e3.dispatchEvent(n3);
        }
      }, [x2, g2]), (0, k.jsxs)(
        w.sG.select,
        {
          "aria-hidden": true,
          required: a2,
          tabIndex: -1,
          name: c2,
          autoComplete: d2,
          disabled: u2,
          form: p2,
          onChange: (e3) => i2(e3.target.value),
          ...t2,
          style: { ...j.Qg, ...t2.style },
          ref: m2,
          defaultValue: g2,
          children: [
            eT(l2) && !S2 ? (0, k.jsx)("option", { value: "" }) : null,
            Array.from(f2)
          ]
        },
        h2
      );
    }, "SelectBubbleInput")
  );
  function eP(e2) {
    return "function" == typeof e2;
  }
  function eT(e2) {
    return "" === e2 || void 0 === e2;
  }
  function ek(e2) {
    let t2 = (0, S.c)(e2), n2 = r.useRef(""), o2 = r.useRef(0), l2 = r.useCallback(
      (e3) => {
        t2(n2.current + e3);
      },
      [t2]
    ), i2 = r.useCallback(() => {
      n2.current = "", window.clearTimeout(o2.current);
    }, []);
    return r.useEffect(() => () => window.clearTimeout(o2.current), []), [n2, l2, i2];
  }
  function eI(e2, t2, n2) {
    let r2 = t2.length > 1 && Array.from(t2).every((e3) => e3 === t2[0]) ? t2[0] : t2, o2 = n2 ? e2.indexOf(n2) : -1, l2 = eE(e2, Math.max(o2, 0));
    1 === r2.length && (l2 = l2.filter((e3) => e3 !== n2));
    let i2 = l2.find(
      (e3) => e3.textValue.toLowerCase().startsWith(r2.toLowerCase())
    );
    return i2 !== n2 ? i2 : void 0;
  }
  function eE(e2, t2) {
    return e2.map((n2, r2) => e2[(t2 + r2) % e2.length]);
  }
  E(eP, "isFunction"), E(eT, "shouldShowPlaceholder"), E(ek, "useTypeaheadSearch"), E(eI, "findNextItem"), E(eE, "wrapArray");
}

__m(__module,__exports,__require);
});
A.regCss(79698, ".field{display:grid;gap:var(--space-2);min-width:0}\n.field label{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.shell{display:flex;min-height:var(--control-height-md);align-items:center;gap:var(--space-2);border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell:hover:not(:focus-within){border-color:var(--foreground)}\n.shell:focus-within{border-color:var(--foreground)}\n.shell>svg{flex:0 0 auto;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.shell:focus-within>svg,.shell[data-filled=true]>svg{color:var(--foreground)}\n.clearSlot,.shell button{display:grid;width:24px;height:24px;flex:0 0 auto;place-items:center}\n.shell button{border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell button:hover{background:var(--surface-muted);color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.shell,.shell button,.shell>svg{transition:none}\n.input{width:100%;min-width:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:0}\n.input:focus-visible{outline:0}\n.input::placeholder{color:var(--text-muted)}\n.input::-webkit-search-cancel-button{display:none}", {});
A.reg(82016, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={field:"select_field__6HUm4",trigger:"select_trigger__Gw0L9",valueText:"select_valueText__zg_oX",srOnly:"select_srOnly__RlNRP",chevron:"select_chevron__dL2_9",hint:"select_hint__5UCeN",content:"select_content__WtPtB","select-in":"select_select-in__Ra6uS","select-out":"select_select-out__lvI9W",viewport:"select_viewport__b3IkZ",item:"select_item__vx_F9",indicator:"select_indicator__4VhG0","indicator-in":"select_indicator-in__IatY1",scrollButton:"select_scrollButton__pH7Sy","select-fade":"select_select-fade__CoMTe","select-fade-out":"select_select-fade-out__ZTnwf"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(82749, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "refresh-cw",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
          key: "v9h5vc"
        }
      ],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
      [
        "path",
        {
          d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
          key: "3uifl3"
        }
      ],
      ["path", { d: "M8 16H3v5", key: "1cv678" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(84508, ".integrations_root__7OOJd{--pad:20px;--chip-pad:12px;box-sizing:border-box;width:min(100%,1040px);min-width:0;margin-inline:auto;container-type:inline-size;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:13px;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.integrations_root__7OOJd *,.integrations_root__7OOJd :after,.integrations_root__7OOJd :before,.integrations_sheet__sNtUX *,.integrations_sheet__sNtUX :after,.integrations_sheet__sNtUX :before{box-sizing:border-box}.integrations_header__kct4Q{display:flex;align-items:center;justify-content:space-between;gap:var(--space-6);padding:16px var(--pad) 0}.integrations_intro__rkRcg{min-width:0}.integrations_intro__rkRcg h2{margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.integrations_intro__rkRcg h2:focus{outline:none}.integrations_intro__rkRcg p{max-width:26rem;margin:2px 0 0;color:var(--text-secondary);font-size:13px}.integrations_search__n1ZBD{--control-height-md:var(--control-height-sm);flex:0 1 260px;min-width:0}.integrations_search__n1ZBD label{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.integrations_filters__w_JNN{display:flex;flex-wrap:wrap;gap:2px;padding:var(--space-3) calc(var(--pad) - var(--chip-pad)) 0}.integrations_filter__Nm0ia{position:relative;display:inline-flex;height:28px;align-items:center;gap:6px;border:0;border-radius:var(--radius-pill);padding:0 var(--chip-pad);background:transparent;color:var(--text-secondary);font:inherit;font-size:13px;font-weight:500;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}.integrations_filter__Nm0ia[aria-checked=true]{color:var(--foreground)}.integrations_filter__Nm0ia:focus-visible{color:var(--foreground)}.integrations_highlight__BCKNI{position:absolute;inset:0;background:var(--surface-muted);box-shadow:inset 0 0 0 1px var(--border)}.integrations_filterLabel__kMnu1{position:relative}.integrations_count__gbdtt{position:relative;display:inline-grid;height:1.4em;min-width:1ch;overflow:hidden;color:var(--text-muted);font-variant-numeric:tabular-nums;line-height:1.4;transition:color var(--duration-fast) var(--ease-standard)}.integrations_count__gbdtt>span{grid-area:1/1}.integrations_filter__Nm0ia[aria-checked=true] .integrations_count__gbdtt{color:var(--text-secondary)}@media (hover:hover) and (pointer:fine){.integrations_filter__Nm0ia:hover{color:var(--foreground)}}.integrations_frame__N4JnB{position:relative}.integrations_content__za4sH{position:relative;padding-top:var(--space-3)}.integrations_list__syuS_{position:relative;display:grid;margin:0;border-top:1px solid var(--border);padding:0;list-style:none}.integrations_card__guLza{position:relative;display:grid;min-width:0;min-height:60px;grid-template-columns:20px minmax(0,1fr) auto;align-items:center;column-gap:12px;padding:10px var(--pad);background:var(--surface);transition:background-color var(--duration-fast) var(--ease-standard)}.integrations_card__guLza+.integrations_card__guLza{border-top:1px solid var(--border-subtle)}@media (hover:hover) and (pointer:fine){.integrations_card__guLza:hover{background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface))}}.integrations_cardIcon__BOekU{flex:none;width:20px;height:20px;color:var(--foreground)}.integrations_cardBody__MSsty{display:grid;min-width:0;gap:1px}.integrations_cardTitle__7b7Jm{display:flex;min-width:0;align-items:baseline;gap:8px}.integrations_cardName__T6_bV{min-width:0;margin:0;font-size:13px;font-weight:500;line-height:var(--leading-body)}.integrations_cardOpen__Om2hx{display:block;max-width:100%;overflow:hidden;border:0;padding:0;background:none;color:inherit;font:inherit;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent}.integrations_cardOpen__Om2hx:after{position:absolute;inset:0;content:\"\"}.integrations_cardOpen__Om2hx:focus-visible{outline:none}.integrations_card__guLza:has(.integrations_cardOpen__Om2hx:focus-visible){background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface))}.integrations_cardCategory__e8MK0{flex:none;color:var(--text-muted);font-size:var(--text-xs)}.integrations_cardText__uE881{min-width:0;margin:0;overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}.integrations_cardActions__MY4J5{display:flex;min-width:0;align-items:center;justify-content:flex-end;gap:4px}.integrations_configure__WvoUU,.integrations_connect__oNDGy{position:relative;z-index:1;display:inline-flex}.integrations_connect__oNDGy{height:32px;flex:none;align-items:center;border:1px solid var(--border);border-radius:var(--radius-pill);padding:0 12px 0 10px;background:var(--surface);color:var(--foreground);font-size:13px;font-weight:500;line-height:1;white-space:nowrap;transition:background-color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.integrations_connect__oNDGy[data-status=connecting]{color:var(--text-secondary)}.integrations_connect__oNDGy[data-status=connected]{border-color:color-mix(in oklab,var(--success) 30%,var(--border));background:color-mix(in oklab,var(--success) 8%,var(--surface))}@media (hover:hover) and (pointer:fine){.integrations_connect__oNDGy[data-status=idle]:hover{border-color:var(--border-strong);background:var(--surface-muted)}}.integrations_connect__oNDGy[data-status=idle]:active{background:var(--surface-muted)}.integrations_connectSlot__wsdfg{position:relative;display:inline-flex;align-items:center;clip-path:inset(-50% -12px -50% -10px)}.integrations_connectContent__0omdo{display:inline-flex;flex:none;align-items:center}.integrations_connectPhase__r3Sij{display:inline-flex;align-items:center;gap:6px}.integrations_phaseIcon__WGM9A{display:grid;width:16px;height:16px;flex:none;place-items:center}.integrations_connect__oNDGy[data-status=connected] .integrations_phaseIcon__WGM9A{color:var(--success)}.integrations_spinner__cpBiU{width:13px;height:13px;border:1.5px solid;border-right:1.5px solid transparent;border-radius:50%;animation:integrations_integrations-spin__rWsRE .7s linear infinite}.integrations_connectHit__dnkPM{position:absolute;inset:-1px;border:0;border-radius:inherit;padding:0;background:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent}.integrations_connectHit__dnkPM[aria-busy=true]{cursor:progress}.integrations_connect__oNDGy:has(.integrations_connectHit__dnkPM:focus-visible){border-color:var(--border-strong)}.integrations_empty__Npo92{display:grid;justify-items:center;gap:4px;padding:var(--space-8) var(--space-4) var(--space-6);text-align:center}.integrations_empty__Npo92 p{margin:0;font-size:var(--text-sm);font-weight:500}.integrations_empty__Npo92 span{max-width:22rem;color:var(--text-muted);font-size:13px}.integrations_empty__Npo92 button{margin-top:var(--space-2)}.integrations_footer___h8OG{display:flex;min-height:44px;align-items:center;justify-content:space-between;gap:var(--space-6);border-top:1px solid var(--border);padding:10px var(--pad);color:var(--text-muted);font-size:var(--text-xs)}.integrations_footer___h8OG>span{flex:none}.integrations_footer___h8OG p{position:relative;min-width:0;margin:0;overflow:hidden;color:var(--text-secondary);text-align:right;text-overflow:ellipsis;white-space:nowrap}.integrations_footer___h8OG p>span{display:inline-block}.integrations_sheet__sNtUX{display:flex;flex-direction:column}.integrations_sheetStatus__X_4yX{display:grid;justify-items:start;gap:var(--space-3)}.integrations_sheetMeta__KEUbJ{position:relative;display:flex;min-height:28px;align-items:center;margin:0;color:var(--text-secondary);font-size:var(--text-sm)}.integrations_sheetMeta__KEUbJ>span{display:inline-flex}.integrations_metaLine__qTdq4{display:inline-flex;align-items:center;gap:var(--space-2)}.integrations_sheetSection__PzfDG{margin-top:var(--space-6)}.integrations_sheetSection__PzfDG h3{margin:0;font-size:var(--text-sm);font-weight:500}.integrations_sheetLead__Wmqg5{position:relative;margin:var(--space-1) 0 0;color:var(--text-muted);font-size:var(--text-sm)}.integrations_sheetLead__Wmqg5>span{display:inline-block}.integrations_accessList__jC3l0{display:grid;margin:var(--space-3) 0 0;padding:0;list-style:none}.integrations_accessList__jC3l0 li{display:flex;align-items:flex-start;gap:var(--space-3);border-top:1px solid var(--border);padding:var(--space-3) 0}.integrations_accessList__jC3l0 li:last-child{border-bottom:1px solid var(--border)}.integrations_accessList__jC3l0 svg{flex:none;margin-top:2px;color:var(--text-muted)}.integrations_settingsFrame__cYzov{margin:0 -8px;overflow:hidden}.integrations_settings___Nmyt{display:grid;gap:var(--space-6);padding:var(--space-6) 8px 8px}.integrations_frequency__w6ej1{display:grid;gap:var(--space-2)}.integrations_hint__ffMMm{position:relative;margin:0;color:var(--text-muted);font-size:var(--text-xs)}.integrations_hint__ffMMm>span{display:inline-block}.integrations_dangerZone__Ws4y9{display:grid;justify-items:start;gap:var(--space-3);border-top:1px solid var(--border);padding-top:var(--space-5)}.integrations_dangerZone__Ws4y9 p{margin:0;color:var(--text-muted);font-size:var(--text-xs)}@keyframes integrations_integrations-spin__rWsRE{to{transform:rotate(1turn)}}@media (prefers-reduced-motion:reduce){.integrations_spinner__cpBiU{animation:none}}@media (prefers-reduced-motion:reduce){.integrations_card__guLza,.integrations_connect__oNDGy,.integrations_count__gbdtt,.integrations_filter__Nm0ia{transition:none}}[data-theme=dark] .integrations_cardIcon__BOekU[data-dark-ink]{color:var(--foreground)!important}.integrations_srOnly__dKqDR{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}[data-layout=app] .integrations_root__7OOJd{padding:clamp(16px,3vw,32px)}", {"root":"integrations_root__7OOJd","sheet":"integrations_sheet__sNtUX","header":"integrations_header__kct4Q","intro":"integrations_intro__rkRcg","search":"integrations_search__n1ZBD","filters":"integrations_filters__w_JNN","filter":"integrations_filter__Nm0ia","highlight":"integrations_highlight__BCKNI","filterLabel":"integrations_filterLabel__kMnu1","count":"integrations_count__gbdtt","frame":"integrations_frame__N4JnB","content":"integrations_content__za4sH","list":"integrations_list__syuS_","card":"integrations_card__guLza","cardIcon":"integrations_cardIcon__BOekU","cardBody":"integrations_cardBody__MSsty","cardTitle":"integrations_cardTitle__7b7Jm","cardName":"integrations_cardName__T6_bV","cardOpen":"integrations_cardOpen__Om2hx","cardCategory":"integrations_cardCategory__e8MK0","cardText":"integrations_cardText__uE881","cardActions":"integrations_cardActions__MY4J5","configure":"integrations_configure__WvoUU","connect":"integrations_connect__oNDGy","connectSlot":"integrations_connectSlot__wsdfg","connectContent":"integrations_connectContent__0omdo","connectPhase":"integrations_connectPhase__r3Sij","phaseIcon":"integrations_phaseIcon__WGM9A","spinner":"integrations_spinner__cpBiU","integrations-spin":"integrations_integrations-spin__rWsRE","connectHit":"integrations_connectHit__dnkPM","empty":"integrations_empty__Npo92","footer":"integrations_footer___h8OG","sheetStatus":"integrations_sheetStatus__X_4yX","sheetMeta":"integrations_sheetMeta__KEUbJ","metaLine":"integrations_metaLine__qTdq4","sheetSection":"integrations_sheetSection__PzfDG","sheetLead":"integrations_sheetLead__Wmqg5","accessList":"integrations_accessList__jC3l0","settingsFrame":"integrations_settingsFrame__cYzov","settings":"integrations_settings___Nmyt","frequency":"integrations_frequency__w6ej1","hint":"integrations_hint__ffMMm","dangerZone":"integrations_dangerZone__Ws4y9","srOnly":"integrations_srOnly__dKqDR"});
A.regCss(88542, ".button{--hold-ink:var(--foreground);--hold-fill:var(--accent);--hold-on-fill:var(--accent-foreground);--hold-border:var(--border-strong);position:relative;display:inline-flex;min-height:var(--control-height-md);align-items:center;justify-content:center;padding:0 var(--space-5);border:1px solid var(--hold-border);border-radius:var(--radius-control);background:var(--surface);color:var(--hold-ink);font:inherit;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);cursor:pointer;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;touch-action:manipulation;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.button[data-tone=danger]{--hold-ink:var(--danger);--hold-fill:var(--danger);--hold-on-fill:var(--background);--hold-border:color-mix(in oklab,var(--danger) 32%,var(--border))}\n.button[data-tone=neutral]{--hold-ink:var(--foreground);--hold-fill:var(--foreground);--hold-on-fill:var(--background);--hold-border:var(--border-strong)}\n@media (hover:hover) and (pointer:fine){.button:not(:disabled):not([aria-disabled=true]):hover{background:color-mix(in oklab,var(--hold-fill) 6%,var(--surface))}\n.button[aria-disabled=true]{cursor:default}\n.button:disabled{cursor:not-allowed;opacity:.5}\n@media (prefers-reduced-motion:reduce){.button{transition:none}\n.face{display:inline-flex;align-items:center;gap:var(--space-2);white-space:nowrap}\n.fill{position:absolute;inset:-1px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-control);background:var(--hold-fill);color:var(--hold-on-fill);pointer-events:none}\n.iconSlot{display:grid;width:18px;height:18px;flex:none;place-items:center}\n.iconPhase{display:grid;grid-area:1/1;place-items:center}\n.iconPhase svg{width:18px;height:18px}\n.labelFrame{position:relative;display:inline-flex;min-width:0;clip-path:inset(-.6em -3px)}\n.label{display:block;white-space:nowrap}\n.measure{position:absolute;top:0;left:0;visibility:hidden;white-space:nowrap;pointer-events:none}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}", {});
A.reg(89424, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "unplug",
    size: 24,
    node: [
      ["path", { d: "m19 5 3-3", key: "yk6iyv" }],
      ["path", { d: "m2 22 3-3", key: "19mgm9" }],
      [
        "path",
        {
          d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
          key: "goz73y"
        }
      ],
      ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
      ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
      [
        "path",
        {
          d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",
          key: "1snsnr"
        }
      ]
    ]
  };
  n.node;
  let d = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(94088, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => i });
  var s = t(51811);
  let r = {
    name: "chevron-up",
    size: 24,
    node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
  };
  r.node;
  let i = (0, s.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(96220, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { l: () => f });
  var s = t(95155), r = t(12115), i = t(73051), n = t(18310), l = t(80642), o = t(25354), d = t(12363), p = t(94088), c = t(64577), m = t(7770), u = t(82016), h = t.n(u);
  let _ = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.35 * e2}em`,
      filter: `blur(${m.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: m.T.duration.standard,
        ease: [...m.T.ease.enter]
      }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${m.T.blur.subtle}px)`,
      transition: {
        duration: m.T.duration.fast,
        ease: [...m.T.ease.standard]
      }
    })
  }, x = {
    enter: { opacity: 0 },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: m.T.duration.instant }
    },
    exit: { opacity: 0, transition: { duration: m.T.duration.instant } }
  }, f = (0, r.forwardRef)(function({
    label: e2,
    description: a2,
    placeholder: t2 = "Select an option",
    options: m2,
    id: u2,
    className: f2,
    disabled: y,
    onValueChange: j,
    ...b
  }, g) {
    let v = (0, r.useId)(), N = u2 ?? v, w = a2 ? `${N}-description` : void 0, k = (0, n.I)(), [S, T] = (0, r.useState)(b.defaultValue ?? ""), R = b.value ?? S, A = m2.findIndex((e3) => e3.value === R), z = R ? m2[A]?.label ?? "" : t2, [P, I] = (0, r.useState)(A), [M, C] = (0, r.useState)(1);
    return P !== A && (I(A), C(A > P ? 1 : -1)), (0, s.jsxs)("div", {
      className: h().field,
      children: [
        (0, s.jsx)("label", { htmlFor: N, children: e2 }),
        (0, s.jsxs)(i.bL, {
          ...b,
          disabled: y,
          onValueChange: (e3) => {
            T(e3), j?.(e3);
          },
          children: [
            (0, s.jsxs)(i.l9, {
              ref: g,
              id: N,
              "aria-describedby": w,
              className: [h().trigger, f2].filter(Boolean).join(" "),
              children: [
                (0, s.jsx)("span", {
                  className: h().srOnly,
                  children: (0, s.jsx)(i.WT, { placeholder: t2 })
                }),
                (0, s.jsx)("span", {
                  className: h().valueText,
                  "aria-hidden": "true",
                  children: (0, s.jsx)(l.N, {
                    initial: false,
                    custom: M,
                    children: (0, s.jsx)(
                      o.PY1.span,
                      {
                        "data-placeholder": R ? void 0 : "",
                        custom: M,
                        variants: k ? x : _,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: z
                      },
                      R ? `value-${R}` : "placeholder"
                    )
                  })
                }),
                (0, s.jsx)(i.In, {
                  className: h().chevron,
                  children: (0, s.jsx)(d.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, s.jsx)(i.ZL, {
              children: (0, s.jsxs)(i.UC, {
                className: h().content,
                position: "popper",
                sideOffset: 4,
                collisionPadding: 12,
                children: [
                  (0, s.jsx)(i.PP, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(p.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  }),
                  (0, s.jsx)(i.LM, {
                    className: h().viewport,
                    children: m2.map(
                      (e3) => (0, s.jsxs)(
                        i.q7,
                        {
                          value: e3.value,
                          disabled: e3.disabled,
                          className: h().item,
                          children: [
                            (0, s.jsx)(i.p4, { children: e3.label }),
                            (0, s.jsx)(i.VF, {
                              className: h().indicator,
                              children: (0, s.jsx)(c.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            })
                          ]
                        },
                        e3.value
                      )
                    )
                  }),
                  (0, s.jsx)(i.wn, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(d.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                ]
              })
            })
          ]
        }),
        a2 && (0, s.jsx)("span", { id: w, className: h().hint, children: a2 })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(98898, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { Uz: () => j, _s: () => x, cp: () => y, iX: () => _, zj: () => N });
  var i = t(95155), s = t(43146), r = t(12115), n = t(18310), o = t(80642), l = t(25354), c = t(28245), d = t(92171), h = t(9005), m = t(7770), u = t(17970), p = t.n(u);
  function _(e2) {
    let [a2, t2] = (0, r.useState)(e2);
    return null != e2 && e2 !== a2 && t2(e2), e2 ?? a2;
  }
  let g = (0, r.createContext)(null);
  function x({ open: e2, defaultOpen: a2 = false, onOpenChange: t2, ...n2 }) {
    let [o2, l2] = (0, r.useState)(a2), [c2, d2] = (0, r.useState)(false), h2 = (0, r.useRef)(0), m2 = e2 ?? o2, u2 = (0, r.useCallback)(
      (a3) => {
        d2(false), a3 && (h2.current = performance.now()), void 0 === e2 && l2(a3), t2?.(a3);
      },
      [e2, t2]
    ), p2 = (0, r.useCallback)(() => {
      u2(false), d2(true);
    }, [u2]), _2 = (0, r.useMemo)(
      () => ({ open: m2, flung: c2, setOpen: u2, fling: p2, openedAt: h2 }),
      [m2, c2, u2, p2]
    );
    return (0, i.jsx)(g.Provider, {
      value: _2,
      children: (0, i.jsx)(s.bL, { ...n2, open: m2, onOpenChange: u2 })
    });
  }
  let j = s.l9, y = s.bm, f = { duration: m.T.duration.instant }, b = {
    duration: m.T.duration.standard,
    times: [0, 0.65, 1],
    ease: "linear"
  }, v = {
    default: {
      duration: m.T.duration.standard,
      ease: [...m.T.ease.standard]
    },
    opacity: b
  }, w = {
    default: { ...m.T.spring.smooth, visualDuration: m.T.duration.standard },
    opacity: b
  };
  function k({ text: e2 }) {
    let a2 = (0, n.I)();
    return (0, i.jsx)(o.N, {
      mode: "popLayout",
      initial: false,
      children: (0, i.jsx)(
        l.PY1.span,
        {
          className: p().swap,
          initial: !a2 && {
            opacity: 0,
            y: "0.3em",
            filter: `blur(${m.T.blur.soft}px)`
          },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          exit: a2 ? { opacity: 0, transition: { duration: 0 } } : {
            opacity: 0,
            y: "-0.3em",
            filter: `blur(${m.T.blur.subtle}px)`,
            transition: {
              duration: m.T.duration.fast,
              ease: [...m.T.ease.standard]
            }
          },
          transition: {
            duration: m.T.duration.standard,
            ease: [...m.T.ease.enter]
          },
          children: e2
        },
        e2
      )
    });
  }
  function N({
    title: e2,
    description: a2,
    children: t2,
    side: u2 = "right",
    container: _2,
    className: x2,
    onInteractOutside: j2,
    ...y2
  }) {
    let b2 = (0, r.useContext)(g), T = (0, n.I)(), C = (0, r.useRef)(null), S = (0, c.d)(0), L = (0, r.useRef)(null), P = "left" === u2 || "right" === u2 ? "x" : "y", I = "right" === u2 || "bottom" === u2 ? 1 : -1, z = { [P]: `${100 * I}%` }, A = [p().content, x2].filter(Boolean).join(" "), B = null !== b2 && !T, M = () => ("x" === P ? C.current?.offsetWidth : C.current?.offsetHeight) ?? 480, $ = (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsxs)(l.PY1.div, {
          className: [p().header, B ? p().handle : ""].filter(Boolean).join(" "),
          onPanStart: function(e3) {
            let a3 = e3.target instanceof Element ? e3.target : null;
            if (!B || a3?.closest(
              "button, a, input, select, textarea, [role='button']"
            ))
              return;
            let t3 = S.get();
            L.current = "number" == typeof t3 ? t3 : parseFloat(t3) / 100 * M(), S.stop();
          },
          onPan: function(e3, a3) {
            if (null === L.current) return;
            let t3 = (L.current + a3.offset[P]) * I;
            S.set(I * (t3 >= 0 ? t3 : -Math.sqrt(-t3)));
          },
          onPanEnd: function(e3, a3) {
            if (null === L.current) return;
            L.current = null;
            let t3 = Number(S.get()) * I;
            t3 > M() / 3 || t3 > 0 && a3.velocity[P] * I > 500 ? b2?.fling() : (0, d.i)(S, 0, m.T.spring.snappy);
          },
          children: [
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(s.hE, {
                  className: p().title,
                  children: (0, i.jsx)(k, { text: e2 })
                }),
                a2 ? (0, i.jsx)(s.VY, {
                  className: p().description,
                  children: (0, i.jsx)(k, { text: a2 })
                }) : null
              ]
            }),
            (0, i.jsx)(s.bm, {
              className: p().close,
              "aria-label": "Close drawer",
              children: (0, i.jsx)(h.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        (0, i.jsx)("div", { className: p().body, children: t2 })
      ]
    });
    return null === b2 ? (0, i.jsxs)(s.ZL, {
      container: _2,
      children: [
        (0, i.jsx)(s.hJ, {
          className: `${p().overlay} ${p().keyframes}`,
          "data-contained": _2 ? "" : void 0
        }),
        (0, i.jsx)(s.UC, {
          ...y2,
          onInteractOutside: j2,
          "data-side": u2,
          "data-contained": _2 ? "" : void 0,
          className: `${A} ${p().keyframes}`,
          children: $
        })
      ]
    }) : (0, i.jsx)(o.N, {
      custom: b2.flung,
      children: b2.open && (0, i.jsxs)(
        s.ZL,
        {
          forceMount: true,
          container: _2,
          children: [
            (0, i.jsx)(s.hJ, {
              asChild: true,
              forceMount: true,
              children: (0, i.jsx)(l.PY1.div, {
                className: p().overlay,
                "data-contained": _2 ? "" : void 0,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: {
                  opacity: 0,
                  transition: T ? f : {
                    duration: m.T.duration.fast,
                    ease: [...m.T.ease.standard]
                  }
                },
                transition: T ? f : {
                  duration: m.T.duration.standard,
                  ease: [...m.T.ease.enter]
                }
              })
            }),
            (0, i.jsx)(s.UC, {
              ...y2,
              asChild: true,
              forceMount: true,
              onInteractOutside: (e3) => {
                j2?.(e3), e3.detail.originalEvent.timeStamp < b2.openedAt.current && e3.preventDefault();
              },
              children: (0, i.jsx)(l.PY1.div, {
                ref: C,
                className: A,
                "data-side": u2,
                "data-contained": _2 ? "" : void 0,
                style: { [P]: S },
                variants: {
                  exit: (e3) => T ? { opacity: 0, transition: f } : {
                    ...z,
                    opacity: [1, 1, 0],
                    transition: e3 ? w : v
                  }
                },
                initial: T ? { opacity: 0 } : { ...z, opacity: 1 },
                animate: T ? { opacity: 1 } : { [P]: 0, opacity: 1 },
                exit: "exit",
                transition: T ? f : m.T.spring.smooth,
                children: $
              })
            })
          ]
        },
        "drawer"
      )
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("integrations", [17970,79698,84508,88542]);
A.item("integrations", {entry:31116, export:"Integrations", kind:"block", tier:"pro", unresolved:[]});
})();