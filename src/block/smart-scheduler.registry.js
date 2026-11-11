/* smart-scheduler (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(6923, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "clock",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(32972, ".root{--label:96px;container-type:inline-size;position:relative;width:100%;max-width:600px;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-size:14px;line-height:20px}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.truncate{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n@container (max-width: 400px){.chip:has(.stack) .truncate{display:none}\n.form{padding:12px 12px 0}\n.field{display:flex;align-items:center;gap:8px;height:48px;padding:0 6px 0 14px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--background);transition:border-color .14s ease-out}\n.field:hover{border-color:color-mix(in oklab,var(--foreground) 22%,var(--border))}\n.field:focus-within{border-color:color-mix(in oklab,var(--accent) 55%,var(--border))}\n.fieldIcon{flex:none;color:var(--text-muted)}\n.input{flex:1;min-width:0;height:100%;padding:0;border:0;background:transparent;color:inherit;font:inherit;text-overflow:ellipsis}\n.input::placeholder{color:var(--text-muted)}\n.submit{flex:none;border-radius:12px}\n.submitLabel{margin-left:2px}\n@container (max-width: 460px){.chipDetail,.submitLabel{display:none}\n.chips{display:flex;align-items:center;height:28px;margin:12px 16px 0;overflow-x:auto;scrollbar-width:none}\n.chips::-webkit-scrollbar{display:none}\n.chipList{display:flex;gap:6px;margin:0;padding:0;list-style:none}\n.chip{display:inline-flex;flex:none;align-items:center;gap:6px;height:28px;max-width:220px;padding:0 10px;border:1px solid var(--border-subtle);border-radius:999px;background:var(--surface-muted);font-size:13px;white-space:nowrap}\n.chip>svg{flex:none;color:var(--text-muted)}\n.chip:has(.stack){padding-left:5px}\n.chip:has(.stack){padding-right:6px}\n.best,.chip>svg{display:none}\n.chip{padding:0 10px}\n.stack{display:inline-flex;flex:none}\n.stack>*+*{margin-left:-4px}\n.stack>*{box-shadow:0 0 0 1.5px var(--surface-muted)}\n.detail .stack>*{box-shadow:0 0 0 1.5px var(--surface)}\n.detail>.stack{width:auto}\n.chipDetail{color:var(--text-muted)}\n.chipDetail:before{content:\"\\00b7\";margin-right:6px}\n.chipHint{display:inline-flex;align-items:center;gap:6px;min-width:0;margin:0;color:var(--text-muted);font-size:13px;white-space:nowrap}\n.chipHint>svg{flex:none}\n.detail{display:flex;align-items:center;gap:8px;height:26px;min-width:0;color:var(--text-secondary);font-size:13px}\n.detail>svg{flex:none;color:var(--text-muted)}\n.avatar{display:inline-grid;flex:none;place-items:center;border-radius:50%;background:var(--surface-muted);color:var(--text-secondary);font-size:10px;object-fit:cover}\n.mark{flex:none;width:14px;height:14px}\n.personName+.mark{margin-left:-2px}\n.availability{margin-top:12px;padding:14px 16px 12px;border-top:1px solid var(--border-subtle)}\n.availability{--label:84px}\n.availHead{display:flex;align-items:center;justify-content:space-between;gap:12px;height:20px}\n.availTitle{position:relative;display:block;flex:1;min-width:0;height:20px}\n.availTitleText{position:absolute;inset:0 auto 0 0;max-width:100%;overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.availMeta{flex:none;color:var(--text-muted);font-size:12px;font-variant-numeric:tabular-nums}\n.rows{position:relative;display:flex;flex-direction:column;gap:8px;margin-top:10px;overflow:visible}\n.row{display:grid;flex:none;grid-template-columns:var(--label) minmax(0,1fr);align-items:center;gap:8px;height:24px}\n.person{position:relative;min-width:0;height:24px}\n.personInner{position:absolute;inset:0;display:flex;align-items:center;gap:8px;min-width:0}\n.personName{min-width:0;overflow:hidden;font-size:13px;text-overflow:ellipsis;white-space:nowrap}\n.avatarGhost{flex:none;width:20px;height:20px;border-radius:50%;background:var(--surface-muted)}\n.nameGhost{width:40px;height:8px;border-radius:4px;background:var(--surface-muted)}\n.track{position:relative;height:24px;overflow:hidden;border-radius:8px;background:var(--surface-muted)}\n.busy{position:absolute;top:3px;bottom:3px;border-radius:5px;background:color-mix(in oklab,var(--text-muted) 34%,transparent)}\n.busy[data-tentative]{border:1px dashed color-mix(in oklab,var(--text-muted) 70%,transparent);background:color-mix(in oklab,var(--text-muted) 10%,transparent)}\n.busy[data-conflict]{border-color:color-mix(in oklab,var(--warning) 80%,transparent);background:color-mix(in oklab,var(--warning) 32%,transparent)}\n.busy[data-conflict][data-tentative]{background:color-mix(in oklab,var(--warning) 16%,transparent)}\n.columnLayer{position:absolute;top:-3px;bottom:-3px;left:calc(var(--label) + 8px);right:0;pointer-events:none}\n.column{position:absolute;top:0;bottom:0;border:1.5px solid var(--accent-strong,var(--accent));border-radius:9px;background:color-mix(in oklab,var(--accent) 7%,transparent)}\n.axis{position:relative;height:16px;margin:6px 0 0 calc(var(--label) + 8px);color:var(--text-muted);font-size:12px;line-height:16px;font-variant-numeric:tabular-nums}\n.tick{position:absolute;top:0;transform:translateX(-50%);white-space:nowrap}\n.tick[data-edge=start]{transform:none}\n.tick[data-edge=end]{transform:translateX(-100%)}\n.body{position:relative;height:200px;border-top:1px solid var(--border-subtle)}\n.view{position:absolute;inset:0}\n.hint,.state{display:flex;height:100%;margin:0;padding:0 24px;align-items:center;justify-content:center;color:var(--text-muted);font-size:13px;text-align:center;text-wrap:balance}\n.state{flex-direction:column;gap:4px}\n.state>button{margin-top:12px}\n.stateTitle{display:inline-flex;align-items:center;gap:6px;margin:0;color:var(--foreground);font-size:14px;font-weight:500}\n.stateText{margin:0}\n.warnIcon{flex:none;color:var(--warning)}\n.slotList{position:relative;height:100%;padding:8px}\n.slots{position:relative;display:flex;flex-direction:column;gap:4px;margin:0;padding:0;list-style:none}\n.highlight{position:absolute;top:8px;left:8px;right:8px;height:56px;border-radius:var(--radius-control);background:var(--surface-muted)}\n.slot{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:12px;width:100%;height:56px;padding:0 12px 0 8px;border:0;border-radius:var(--radius-control);background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.slot[data-active] .chevron{opacity:1;transform:none}\n.slotMain{display:flex;flex-direction:column;gap:2px;min-width:0}\n.slotTop{display:flex;align-items:baseline;gap:8px;min-width:0;white-space:nowrap}\n.slotDay{flex:none;font-weight:500}\n.slotTime{min-width:0;overflow:hidden;color:var(--text-secondary);font-variant-numeric:tabular-nums;text-overflow:ellipsis}\n.slotReason{display:flex;align-items:center;gap:6px;min-width:0;color:var(--text-muted);font-size:13px}\n.slotReason>svg{flex:none}\n.slotReason[data-tone=ok]>svg{color:var(--success)}\n.slotReason[data-tone=warn]>svg{color:var(--warning)}\n.slotEnd{display:flex;align-items:center;gap:8px}\n.best{display:inline-flex;align-items:center;height:22px;padding:0 8px;border-radius:999px;background:color-mix(in oklab,var(--accent) 10%,transparent);color:var(--text-secondary);font-size:12px}\n.chevron{flex:none;color:var(--text-muted);opacity:0;transform:translateX(-2px);transition:opacity .14s ease-out,transform .14s ease-out}\n.skeletonRow{display:flex;flex-direction:column;justify-content:center;gap:8px;height:56px;padding:0 8px}\n.skeletonBar{display:block;height:10px;border-radius:5px;background:var(--surface-muted)}\n.skeletonBar[data-short]{height:8px;opacity:.7}\n.invite{display:flex;flex-direction:column;height:100%;padding:12px 16px}\n.invite .sendButton[aria-disabled=true]:not([aria-busy]){cursor:default}\n.invite .sendButton[aria-disabled=true]:not([aria-busy]):hover{opacity:1;box-shadow:none}\n.titleInput{width:calc(100% + 16px);height:32px;margin:0 -8px;padding:0 8px;border:0;border-radius:10px;background:transparent;color:var(--foreground);font:inherit;font-weight:500;text-overflow:ellipsis;transition:background-color .14s ease-out}\n.titleInput:focus,.titleInput:hover:not(:disabled){background:var(--surface-muted)}\n.titleInput:disabled{opacity:1;cursor:default}\n.details{display:flex;flex-direction:column;gap:6px;margin:4px 0 0;padding:0;list-style:none}\n.dot,.muted{color:var(--text-muted)}\n.copy{flex:none;margin-left:auto}\n.actions{display:flex;align-items:center;gap:8px;margin-top:auto}\n.actions>:first-child{margin-left:-10px}\n.sendStatus{position:relative;flex:1;min-width:0;height:20px}\n.sendStatusInner{position:absolute;inset:0;display:flex;align-items:center;justify-content:flex-end;gap:6px;color:var(--text-muted);font-size:13px}\n.sendStatusInner>svg{flex:none}\n.sendStatusInner[data-tone=warn]>svg{color:var(--warning)}\n.sendButton{flex:none;min-width:112px}", {"root":"root","srOnly":"srOnly","truncate":"truncate","chip":"chip","stack":"stack","form":"form","field":"field","fieldIcon":"fieldIcon","input":"input","submit":"submit","submitLabel":"submitLabel","chipDetail":"chipDetail","chips":"chips","chipList":"chipList","best":"best","detail":"detail","chipHint":"chipHint","avatar":"avatar","mark":"mark","personName":"personName","availability":"availability","availHead":"availHead","availTitle":"availTitle","availTitleText":"availTitleText","availMeta":"availMeta","rows":"rows","row":"row","person":"person","personInner":"personInner","avatarGhost":"avatarGhost","nameGhost":"nameGhost","track":"track","busy":"busy","columnLayer":"columnLayer","column":"column","axis":"axis","tick":"tick","body":"body","view":"view","hint":"hint","state":"state","stateTitle":"stateTitle","stateText":"stateText","warnIcon":"warnIcon","slotList":"slotList","slots":"slots","highlight":"highlight","slot":"slot","chevron":"chevron","slotMain":"slotMain","slotTop":"slotTop","slotDay":"slotDay","slotTime":"slotTime","slotReason":"slotReason","slotEnd":"slotEnd","skeletonRow":"skeletonRow","skeletonBar":"skeletonBar","invite":"invite","sendButton":"sendButton","titleInput":"titleInput","details":"details","dot":"dot","muted":"muted","copy":"copy","actions":"actions","sendStatus":"sendStatus","sendStatusInner":"sendStatusInner"});
A.reg(46998, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    SmartScheduler: () => U,
    default: () => en,
    findScheduleSlots: () => D,
    parseScheduleRequest: () => R,
    sampleDirectory: () => k,
    sampleOrganizer: () => N
  });
  var n = a(95155), i = a(12115), s = a(18310), r = a(80642), l = a(25354), o = a(86272), d = a(38158), c = a(11012), u = a(64577), h = a(76721), m = a(6923), p = a(52427), y = a(47603), _ = a(57465), f = a(78780), g = a(51288), v = a(73474), x = a(52898);
  function b({ title: e2 = "Google Calendar", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        fill: "#4285F4",
        d: "M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"
      })
    });
  }
  function j({ title: e2 = "Microsoft Outlook", ...t2 }) {
    return (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, n.jsx)("rect", {
          x: "7.5",
          y: "3",
          width: "16",
          height: "18",
          rx: "2",
          fill: "#0078D4"
        }),
        (0, n.jsx)("path", {
          fill: "#28A8EA",
          d: "M7.5 10.6 15.5 15.4l8-4.8V19a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z"
        }),
        (0, n.jsx)("path", {
          fill: "#50D9FF",
          d: "M15.5 3h6a2 2 0 0 1 2 2v3.4h-8z",
          opacity: ".55"
        }),
        (0, n.jsx)("rect", {
          x: "0.5",
          y: "6",
          width: "12.5",
          height: "12",
          rx: "2",
          fill: "#0A5CB0"
        }),
        (0, n.jsx)("ellipse", {
          cx: "6.75",
          cy: "12",
          rx: "2.75",
          ry: "3.3",
          fill: "none",
          stroke: "#fff",
          strokeWidth: "1.8"
        })
      ]
    });
  }
  function w({ title: e2 = "Google Meet", ...t2 }) {
    return (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, n.jsx)("path", { fill: "#EA4335", d: "M5.53 2.13 0 7.75h5.53z" }),
        (0, n.jsx)("path", {
          fill: "#FFBA00",
          d: "M5.928 2.13v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46-.148-1.09-1.287-1.47-2.236-1.36z"
        }),
        (0, n.jsx)("path", {
          fill: "#00832D",
          d: "M23.1 4.32c-.802.295-1.358.995-2.047 1.49-2.506 2.05-4.982 4.120-7.468 6.190 3.025 2.59 6.04 5.18 9.065 7.76 1.218.671 1.428-.814 1.328-1.64v-13a.828.828 0 0 0-.877-.825z"
        }),
        (0, n.jsx)("path", { fill: "#2684FC", d: "M.038 8.15v7.7h5.53v-7.7z" }),
        (0, n.jsx)("path", {
          fill: "#00AC47",
          d: "M13.615 16.25H6.008v5.62c3.864-.006 7.737.011 11.58-.009 1.020-.07 1.618-1.12 1.468-2.07v-2.51l-5.470-4.680v3.650z"
        }),
        (0, n.jsx)("path", {
          fill: "#0066DA",
          d: "M.038 16.25c.02 1.44-.041 2.88.033 4.31.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z"
        })
      ]
    });
  }
  let N = {
    id: "you",
    name: "Sofia Ramirez",
    avatar: "media/people/sofia-ramirez.svg",
    email: "sofia@northwind.co",
    calendar: "google"
  }, k = [
    {
      id: "maya",
      name: "Maya Chen",
      avatar: "media/people/chloe-nguyen.svg",
      email: "maya@northwind.co",
      calendar: "google"
    },
    {
      id: "leo",
      name: "Leo Martins",
      avatar: "media/people/mateo-alvarez.svg",
      email: "leo.martins@northwind.co",
      calendar: "outlook"
    },
    {
      id: "daniel",
      name: "Daniel Kim",
      avatar: "media/people/daniel-kim.svg",
      email: "daniel.kim@northwind.co",
      calendar: "outlook"
    },
    {
      id: "hannah",
      name: "Hannah Walsh",
      avatar: "media/people/hannah-walsh.svg",
      email: "hannah@northwind.co",
      calendar: "google"
    }
  ], $ = "Find 30 min with Maya and Leo next week, mornings", T = (e2, t2, a2, n2) => ({ start: e2, end: t2, title: a2, tentative: n2 }), M = {
    you: [
      [
        T(((e2 = 0) => 540 + e2)(), ((e2 = 0) => 600 + e2)(30), "Ops weekly"),
        T(((e2 = 0) => 660 + e2)(), ((e2 = 0) => 720 + e2)(), "Vendor review"),
        T(((e2 = 0) => 840 + e2)(), ((e2 = 0) => 900 + e2)(), "Hiring sync"),
        T(
          ((e2 = 0) => 960 + e2)(),
          ((e2 = 0) => 960 + e2)(30),
          "Budget check-in"
        )
      ],
      [
        T(((e2 = 0) => 540 + e2)(), ((e2 = 0) => 540 + e2)(15), "Team standup"),
        T(((e2 = 0) => 660 + e2)(), ((e2 = 0) => 660 + e2)(45), "Hiring sync"),
        T(
          ((e2 = 0) => 780 + e2)(30),
          ((e2 = 0) => 840 + e2)(30),
          "Northwind QBR"
        ),
        T(((e2 = 0) => 960 + e2)(), ((e2 = 0) => 1020 + e2)(), "Focus time", true)
      ],
      [
        T(((e2 = 0) => 540 + e2)(), ((e2 = 0) => 540 + e2)(15), "Team standup"),
        T(((e2 = 0) => 660 + e2)(), ((e2 = 0) => 720 + e2)(), "Q4 planning"),
        T(((e2 = 0) => 780 + e2)(), ((e2 = 0) => 840 + e2)(), "Lunch with Diane"),
        T(((e2 = 0) => 900 + e2)(), ((e2 = 0) => 960 + e2)(), "Vendor review")
      ],
      [
        T(((e2 = 0) => 540 + e2)(), ((e2 = 0) => 540 + e2)(15), "Team standup"),
        T(
          ((e2 = 0) => 600 + e2)(30),
          ((e2 = 0) => 660 + e2)(30),
          "Customer call"
        ),
        T(((e2 = 0) => 840 + e2)(), ((e2 = 0) => 900 + e2)(30), "Ops review")
      ],
      [
        T(((e2 = 0) => 540 + e2)(), ((e2 = 0) => 720 + e2)(), "Offsite prep"),
        T(((e2 = 0) => 840 + e2)(), ((e2 = 0) => 840 + e2)(30), "Weekly wrap")
      ]
    ],
    maya: [
      [
        T(((e2 = 0) => 600 + e2)(), ((e2 = 0) => 720 + e2)(), "Design review"),
        T(((e2 = 0) => 780 + e2)(), ((e2 = 0) => 840 + e2)(), "Research sync"),
        T(
          ((e2 = 0) => 900 + e2)(30),
          ((e2 = 0) => 960 + e2)(30),
          "Portfolio review"
        )
      ],
      [
        T(((e2 = 0) => 540 + e2)(), ((e2 = 0) => 540 + e2)(45), "Design crit"),
        T(
          ((e2 = 0) => 660 + e2)(30),
          ((e2 = 0) => 720 + e2)(),
          "Lunch and learn"
        ),
        T(
          ((e2 = 0) => 840 + e2)(),
          ((e2 = 0) => 900 + e2)(),
          "Figma office hours",
          true
        ),
        T(
          ((e2 = 0) => 960 + e2)(),
          ((e2 = 0) => 960 + e2)(30),
          "1:1 with Jasmine"
        )
      ],
      [
        T(
          ((e2 = 0) => 600 + e2)(30),
          ((e2 = 0) => 720 + e2)(),
          "User interviews"
        ),
        T(((e2 = 0) => 780 + e2)(30), ((e2 = 0) => 900 + e2)(), "Workshop")
      ],
      [
        T(((e2 = 0) => 540 + e2)(), ((e2 = 0) => 600 + e2)(), "Roadmap review"),
        T(((e2 = 0) => 780 + e2)(), ((e2 = 0) => 780 + e2)(30), "Design QA"),
        T(((e2 = 0) => 900 + e2)(), ((e2 = 0) => 960 + e2)(), "User interviews")
      ],
      [
        T(((e2 = 0) => 600 + e2)(), ((e2 = 0) => 660 + e2)(), "Design crit"),
        T(((e2 = 0) => 780 + e2)(), ((e2 = 0) => 1020 + e2)(), "Focus time", true)
      ]
    ],
    leo: [
      [
        T(
          ((e2 = 0) => 540 + e2)(15),
          ((e2 = 0) => 540 + e2)(45),
          "Platform standup"
        ),
        T(
          ((e2 = 0) => 600 + e2)(),
          ((e2 = 0) => 660 + e2)(30),
          "Incident review"
        ),
        T(
          ((e2 = 0) => 780 + e2)(),
          ((e2 = 0) => 840 + e2)(),
          "Architecture review"
        ),
        T(((e2 = 0) => 900 + e2)(), ((e2 = 0) => 960 + e2)(), "On-call handoff")
      ],
      [
        T(
          ((e2 = 0) => 540 + e2)(15),
          ((e2 = 0) => 540 + e2)(45),
          "Platform standup"
        ),
        T(
          ((e2 = 0) => 600 + e2)(45),
          ((e2 = 0) => 660 + e2)(30),
          "1:1 with Nathan"
        ),
        T(((e2 = 0) => 840 + e2)(30), ((e2 = 0) => 900 + e2)(30), "Hiring panel")
      ],
      [
        T(
          ((e2 = 0) => 540 + e2)(15),
          ((e2 = 0) => 540 + e2)(45),
          "Platform standup"
        ),
        T(
          ((e2 = 0) => 600 + e2)(),
          ((e2 = 0) => 600 + e2)(30),
          "Arch office hours",
          true
        ),
        T(((e2 = 0) => 840 + e2)(), ((e2 = 0) => 900 + e2)(), "Sprint planning")
      ],
      [
        T(
          ((e2 = 0) => 540 + e2)(15),
          ((e2 = 0) => 540 + e2)(45),
          "Platform standup"
        ),
        T(((e2 = 0) => 600 + e2)(), ((e2 = 0) => 600 + e2)(30), "Security sync"),
        T(
          ((e2 = 0) => 780 + e2)(30),
          ((e2 = 0) => 840 + e2)(30),
          "Vendor demo",
          true
        ),
        T(((e2 = 0) => 960 + e2)(), ((e2 = 0) => 1020 + e2)(), "Deploy window")
      ],
      [
        T(
          ((e2 = 0) => 540 + e2)(15),
          ((e2 = 0) => 540 + e2)(45),
          "Platform standup"
        ),
        T(((e2 = 0) => 660 + e2)(), ((e2 = 0) => 720 + e2)(), "Demo day"),
        T(((e2 = 0) => 900 + e2)(), ((e2 = 0) => 960 + e2)(), "Retro")
      ]
    ],
    daniel: [
      [
        T(((e2 = 0) => 540 + e2)(30), ((e2 = 0) => 600 + e2)(), "API review"),
        T(((e2 = 0) => 840 + e2)(), ((e2 = 0) => 900 + e2)(), "Billing sync")
      ],
      [
        T(((e2 = 0) => 600 + e2)(), ((e2 = 0) => 660 + e2)(), "Pairing"),
        T(((e2 = 0) => 900 + e2)(), ((e2 = 0) => 960 + e2)(), "Postmortem")
      ],
      [
        T(((e2 = 0) => 540 + e2)(), ((e2 = 0) => 600 + e2)(), "Backlog grooming"),
        T(
          ((e2 = 0) => 660 + e2)(30),
          ((e2 = 0) => 720 + e2)(),
          "1:1 with Nathan"
        )
      ],
      [
        T(((e2 = 0) => 600 + e2)(30), ((e2 = 0) => 660 + e2)(30), "Load test"),
        T(((e2 = 0) => 840 + e2)(), ((e2 = 0) => 840 + e2)(30), "Billing sync")
      ],
      [
        T(((e2 = 0) => 540 + e2)(30), ((e2 = 0) => 600 + e2)(30), "Demo prep"),
        T(((e2 = 0) => 780 + e2)(), ((e2 = 0) => 840 + e2)(), "Retro")
      ]
    ],
    hannah: [
      [
        T(((e2 = 0) => 540 + e2)(), ((e2 = 0) => 540 + e2)(30), "Support triage"),
        T(
          ((e2 = 0) => 780 + e2)(),
          ((e2 = 0) => 840 + e2)(30),
          "Customer onboarding"
        )
      ],
      [
        T(((e2 = 0) => 600 + e2)(), ((e2 = 0) => 600 + e2)(30), "Support triage"),
        T(((e2 = 0) => 840 + e2)(), ((e2 = 0) => 900 + e2)(), "Renewal call")
      ],
      [
        T(((e2 = 0) => 540 + e2)(), ((e2 = 0) => 540 + e2)(30), "Support triage"),
        T(((e2 = 0) => 600 + e2)(30), ((e2 = 0) => 660 + e2)(30), "Health check")
      ],
      [
        T(
          ((e2 = 0) => 660 + e2)(),
          ((e2 = 0) => 720 + e2)(),
          "Customer onboarding"
        ),
        T(((e2 = 0) => 900 + e2)(), ((e2 = 0) => 960 + e2)(), "QBR prep")
      ],
      [
        T(((e2 = 0) => 540 + e2)(), ((e2 = 0) => 540 + e2)(30), "Support triage"),
        T(((e2 = 0) => 660 + e2)(), ((e2 = 0) => 660 + e2)(30), "Team sync")
      ]
    ]
  }, A = (e2, t2, a2) => ({ id: e2, label: t2, weekday: a2 }), z = [
    A("2026-11-02", "Mon, Nov 2", 0),
    A("2026-11-03", "Tue, Nov 3", 1),
    A("2026-11-04", "Wed, Nov 4", 2),
    A("2026-11-05", "Thu, Nov 5", 3),
    A("2026-11-06", "Fri, Nov 6", 4)
  ], S = [
    A("2026-10-28", "Wed, Oct 28", 2),
    A("2026-10-29", "Thu, Oct 29", 3),
    A("2026-10-30", "Fri, Oct 30", 4)
  ], C = new Map([...z, ...S].map((e2) => [e2.id, e2.weekday])), E = {
    morning: {
      id: "morning",
      label: "Mornings",
      start: ((e2 = 0) => 540 + e2)(),
      end: ((e2 = 0) => 720 + e2)()
    },
    afternoon: {
      id: "afternoon",
      label: "Afternoons",
      start: ((e2 = 0) => 780 + e2)(),
      end: ((e2 = 0) => 1020 + e2)()
    },
    any: {
      id: "any",
      label: "Any time",
      start: ((e2 = 0) => 540 + e2)(),
      end: ((e2 = 0) => 1020 + e2)()
    }
  }, L = (e2) => e2.name.split(" ")[0];
  function R(e2, t2) {
    let a2 = e2.toLowerCase(), n2 = 30, i2 = a2.match(
      /(\d+(?:\.\d+)?)\s*(minutes|minute|mins|min|m\b|hours|hour|hrs|hr|h\b)/
    );
    i2 ? n2 = Math.round(Number(i2[1]) * (i2[2].startsWith("h") ? 60 : 1)) : /half an hour/.test(a2) ? n2 = 30 : /\ban hour\b/.test(a2) && (n2 = 60), n2 = Math.min(Math.max(n2, 15), 240);
    let s2 = t2.filter(
      (e3) => RegExp(
        `\\b${L(e3).toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`
      ).test(a2)
    );
    if (!s2.length) throw Error("Add who should join, for example \u201Cwith Maya\u201D.");
    let r2 = /tomorrow/.test(a2) ? { label: "Tomorrow", detail: "Oct 28", days: S.slice(0, 1) } : /this week/.test(a2) ? { label: "This week", detail: "Oct 28\u201330", days: S } : { label: "Next week", detail: "Nov 2\u20136", days: z }, l2 = /morning/.test(a2) ? E.morning : /afternoon/.test(a2) ? E.afternoon : E.any;
    return {
      duration: n2,
      people: s2,
      range: {
        ...r2,
        days: r2.days.map(({ id: e3, label: t3 }) => ({ id: e3, label: t3 }))
      },
      window: l2
    };
  }
  function D(e2, t2) {
    let a2 = [t2, ...e2.people], n2 = (e3) => e3 === t2.id ? "your" : `${L(a2.find((t3) => t3.id === e3) ?? t2)}\u2019s`, i2 = [];
    return e2.range.days.forEach((t3, s2) => {
      let r2, l2 = Object.fromEntries(
        a2.map((e3) => {
          var a3, n3;
          let i3;
          return [
            e3.id,
            (a3 = e3.id, n3 = t3.id, void 0 === (i3 = C.get(n3)) ? [] : M[a3]?.[i3] ?? [])
          ];
        })
      );
      for (let i3 = e2.window.start; i3 + e2.duration <= e2.window.end; i3 += 15) {
        let o2, d2, c2 = i3 + e2.duration, u2 = [];
        for (let e3 of a2)
          for (let t4 of l2[e3.id])
            t4.start < c2 && t4.end > i3 ? u2.push({
              personId: e3.id,
              title: t4.title,
              tentative: t4.tentative
            }) : t4.end <= i3 && t4.end > i3 - 15 ? o2 ?? (o2 = { id: e3.id, block: t4 }) : t4.start >= c2 && t4.start < c2 + 15 && (d2 ?? (d2 = { id: e3.id, block: t4 }));
        let h2 = 100 - s2;
        for (let e3 of u2) h2 -= e3.tentative ? 22 : 40;
        o2 && (h2 -= 6), d2 && (h2 -= 6), i3 % 30 != 0 && (h2 -= 4);
        let m2 = u2[0], p2 = m2 ? m2.tentative ? `${n2(m2.personId)} ${m2.title} is tentative`.replace(
          /^./,
          (e3) => e3.toUpperCase()
        ) : `Conflicts with ${n2(m2.personId)} ${m2.title}` : o2 ? `Everyone free, right after ${n2(o2.id)} ${o2.block.title}` : d2 ? `Everyone free, right before ${n2(d2.id)} ${d2.block.title}` : "Everyone free, 15 min buffer";
        (!r2 || h2 > r2.score) && (r2 = {
          score: h2,
          slot: {
            id: `${t3.id}-${i3}`,
            day: t3,
            start: i3,
            end: c2,
            reason: p2,
            conflicts: u2,
            busy: l2
          }
        });
      }
      r2 && i2.push(r2);
    }), i2.sort((e3, t3) => t3.score - e3.score).slice(0, 3).filter((e3) => e3.score > 20).map((e3) => e3.slot);
  }
  function O(e2) {
    let t2 = e2.map(L);
    return `Sync with ${t2.length > 1 ? `${t2.slice(0, -1).join(", ")} and ${t2[t2.length - 1]}` : t2[0]}`;
  }
  function I(e2, t2 = true) {
    let a2 = Math.floor(e2 / 60);
    return `${(a2 + 11) % 12 + 1}:${String(e2 % 60).padStart(2, "0")}${t2 ? a2 < 12 ? " AM" : " PM" : ""}`;
  }
  function P(e2, t2) {
    return e2 < 720 == t2 < 720 ? `${I(e2, false)}\u2013${I(t2)}` : `${I(e2)}\u2013${I(t2)}`;
  }
  function F(e2) {
    let t2 = Math.floor(e2 / 60);
    return `${(t2 + 11) % 12 + 1} ${t2 < 12 ? "AM" : "PM"}`;
  }
  var B = a(32972), Y = a.n(B);
  let H = [0.22, 1, 0.36, 1], V = { type: "spring", visualDuration: 0.24, bounce: 0 }, W = { duration: 0.16, ease: H }, G = { duration: 0.1, ease: H }, q = (e2) => e2.name.split(" ")[0], K = (e2) => e2.length > 1 ? `${e2.slice(0, -1).join(", ")} and ${e2[e2.length - 1]}` : e2[0] ?? "";
  function Q(e2, t2) {
    return new Promise((a2, n2) => {
      let i2 = window.setTimeout(a2, e2);
      t2.addEventListener(
        "abort",
        () => {
          window.clearTimeout(i2), n2(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    });
  }
  function U({
    defaultQuery: e2 = $,
    placeholder: t2 = "Find 30 min with Maya next week",
    organizer: a2 = N,
    directory: m2 = k,
    parse: p2,
    findSlots: y2,
    onSend: _2,
    onPick: f2,
    meetLink: v2 = "meet.google.com/kfq-rvwp-zte",
    timeZone: x2 = "ET",
    autoPlay: b2,
    className: j2
  }) {
    let w2 = (0, s.I)() ?? false, T2 = !p2 && !y2 && !_2, [M2, A2] = (0, i.useState)(b2 ?? T2), [z2, S2] = (0, i.useState)(e2), [C2, E2] = (0, i.useState)("idle"), [L2, I2] = (0, i.useState)(null), [F2, B2] = (0, i.useState)([]), [H2, J2] = (0, i.useState)(null), [Z2, en2] = (0, i.useState)(null), [ei, es] = (0, i.useState)(""), [er, el] = (0, i.useState)(""), [eo, ed] = (0, i.useState)(""), [ec, eu] = (0, i.useState)(""), [eh, em] = (0, i.useState)(0), [ep, ey] = (0, i.useState)(true), e_ = (0, i.useRef)(null), ef = (0, i.useRef)(null), eg = (0, i.useRef)([]), ev = (0, i.useRef)(null), ex = (0, i.useCallback)(
      async (e3) => {
        ef.current?.abort();
        let t3 = new AbortController();
        ef.current = t3;
        let { signal: n2 } = t3;
        E2("parsing"), I2(null), B2([]), J2(null), en2(null), el(""), ed(""), em(0), eu("Reading your request");
        try {
          let t4 = p2 ? await p2(e3, n2) : (await Q(650, n2), R(e3, m2));
          if (n2.aborted) return;
          I2(t4), E2("checking"), eu(
            `Read ${t4.duration} min with ${K(t4.people.map(q))}, ${t4.range.label.toLowerCase()}, ${t4.window.label.toLowerCase()}. Checking calendars.`
          );
          let i2 = y2 ? await y2(t4, n2) : (await Q(850, n2), D(t4, a2));
          if (n2.aborted) return;
          let s2 = i2.slice(0, 3);
          B2(s2), E2(s2.length ? "slots" : "empty"), eu(
            s2.length ? `${s2.length} times found. Best: ${s2[0].day.label}, ${P(s2[0].start, s2[0].end)}.` : "No time works for everyone in that range."
          );
        } catch (t4) {
          if (n2.aborted) return;
          let e4 = t4 instanceof Error && t4.message ? t4.message : "Couldn\u2019t read that request.";
          el(e4), E2("error"), eu(e4);
        }
      },
      [p2, y2, m2, a2]
    );
    (0, i.useEffect)(() => () => ef.current?.abort(), []);
    let eb = (0, i.useCallback)(
      (e3) => {
        let t3 = F2[e3];
        t3 && L2 && (en2(e3), J2(null), ed(""), es(O(L2.people)), E2("invite"), eu(`Draft invite for ${t3.day.label}, ${P(t3.start, t3.end)}.`), f2?.(t3));
      },
      [F2, L2, f2]
    ), ej = (0, i.useCallback)(() => {
      ef.current?.abort(), E2("slots"), ed(""), eu("Back to suggested times.");
    }, []), ew = (0, i.useCallback)(async () => {
      let e3 = null === Z2 ? void 0 : F2[Z2];
      if (!e3 || !L2) return;
      ef.current?.abort();
      let t3 = new AbortController();
      ef.current = t3;
      let n2 = {
        title: ei.trim() || O(L2.people),
        slot: e3,
        organizer: a2,
        people: L2.people,
        meetLink: v2,
        timeZone: x2
      };
      E2("sending"), ed(""), eu("Sending invite");
      try {
        if (_2 ? await _2(n2, t3.signal) : await Q(800, t3.signal), t3.signal.aborted)
          return;
        E2("sent");
        let e4 = K(L2.people.map((e5) => e5.name));
        eu(
          _2 ? `Invite sent to ${e4}.` : `Invite sent to ${e4}. Simulated, nothing was sent.`
        );
      } catch {
        if (t3.signal.aborted) return;
        E2("invite"), ed("Couldn\u2019t send. Try again."), eu("The invite couldn\u2019t be sent. Try again.");
      }
    }, [Z2, F2, L2, ei, a2, v2, x2, _2]), eN = (0, i.useCallback)(() => {
      ef.current?.abort(), S2(e2), E2("idle"), I2(null), B2([]), J2(null), en2(null), es(""), el(""), ed(""), em(0), eu("");
    }, [e2]);
    (0, i.useEffect)(() => {
      let e3 = e_.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e4]) => ey(e4.isIntersecting), {
        threshold: 0.2
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let ek = (0, i.useRef)(false);
    (0, i.useEffect)(() => {
      w2 && M2 && !ek.current && (ek.current = true, A2(false), ex(e2));
    }, [w2, M2, ex, e2]), (0, i.useEffect)(() => {
      if (!M2 || !ep || w2) return;
      let e3 = 0, t3 = null;
      if ("idle" === C2) e3 = 1100, t3 = () => void ex(z2);
      else if ("slots" === C2) {
        let a4 = [
          [900, () => J2(1)],
          [700, () => J2(2)],
          [700, () => J2(0)],
          [520, () => eb(0)]
        ][eh];
        a4 && (e3 = a4[0], t3 = () => {
          a4[1](), em((e4) => e4 + 1);
        });
      } else
        "invite" === C2 ? (e3 = 1300, t3 = () => void ew()) : ("sent" === C2 || "empty" === C2 || "error" === C2) && (e3 = 2600, t3 = eN);
      if (!t3) return;
      let a3 = window.setTimeout(t3, e3);
      return () => window.clearTimeout(a3);
    }, [M2, ep, w2, C2, eh, z2, ex, eb, ew, eN]);
    let e$ = () => {
      M2 && A2(false);
    }, eT = "parsing" === C2 || "checking" === C2, eM = "invite" === C2 || "sending" === C2 || "sent" === C2, eA = eM ? Z2 ?? 0 : "slots" === C2 ? H2 ?? 0 : null, ez = null === eA ? null : F2[eA] ?? null, eS = L2 ? [a2, ...L2.people] : null, eC = "parsing" === C2 || "checking" === C2 ? "loading" : eM ? "invite" : C2, eE = null === Z2 ? null : F2[Z2] ?? null;
    return (0, n.jsxs)("div", {
      ref: e_,
      className: [Y().root, j2].filter(Boolean).join(" "),
      onPointerDown: e$,
      onKeyDown: (e3) => {
        e$(), "Escape" === e3.key && "invite" === C2 && (e3.preventDefault(), ej());
      },
      children: [
        (0, n.jsx)("form", {
          className: Y().form,
          onSubmit: (e3) => {
            e3.preventDefault(), z2.trim() && ex(z2);
          },
          role: "search",
          "aria-label": "Schedule a meeting",
          children: (0, n.jsxs)("div", {
            className: Y().field,
            onPointerDown: (e3) => {
              e3.target === e3.currentTarget && (e3.preventDefault(), ev.current?.focus());
            },
            children: [
              (0, n.jsx)(o.A, {
                className: Y().fieldIcon,
                size: 16,
                "aria-hidden": "true"
              }),
              (0, n.jsx)("input", {
                ref: ev,
                "aria-label": "Describe the meeting",
                className: Y().input,
                value: z2,
                placeholder: t2,
                onChange: (e3) => {
                  e$(), S2(e3.target.value);
                },
                autoComplete: "off",
                spellCheck: false,
                enterKeyHint: "search"
              }),
              (0, n.jsxs)(g.$, {
                type: "submit",
                size: "sm",
                className: Y().submit,
                loading: eT,
                disabled: !z2.trim(),
                "aria-label": "Find times",
                children: [
                  (0, n.jsx)(d.A, { size: 16, "aria-hidden": "true" }),
                  (0, n.jsx)("span", {
                    className: Y().submitLabel,
                    children: "Find times"
                  })
                ]
              })
            ]
          })
        }),
        (0, n.jsx)(X, { phase: C2, request: L2 }),
        (0, n.jsx)(ee, {
          attendees: eS,
          organizerId: a2.id,
          slot: ez,
          window: L2?.window ?? null,
          checking: "checking" === C2,
          calendars: eS?.length ?? 0,
          timeZone: x2
        }),
        (0, n.jsx)("div", {
          className: Y().body,
          children: (0, n.jsx)(r.N, {
            initial: false,
            children: (0, n.jsxs)(
              l.PY1.div,
              {
                className: Y().view,
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: W },
                exit: { opacity: 0, transition: G },
                children: [
                  "idle" === eC && (0, n.jsxs)("p", {
                    className: Y().hint,
                    children: [
                      "Ranked times across everyone",
                      "\u2019",
                      "s calendars appear here"
                    ]
                  }),
                  "loading" === eC && (0, n.jsx)(et, {}),
                  "slots" === eC && (0, n.jsxs)("div", {
                    className: Y().slotList,
                    onPointerLeave: () => J2(null),
                    children: [
                      (0, n.jsx)(l.PY1.div, {
                        className: Y().highlight,
                        "aria-hidden": "true",
                        initial: false,
                        animate: { y: (eA ?? 0) * 60 },
                        transition: w2 ? { duration: 0 } : V
                      }),
                      (0, n.jsx)("ul", {
                        className: Y().slots,
                        "aria-label": "Suggested times",
                        children: F2.map(
                          (e3, t3) => (0, n.jsx)(
                            "li",
                            {
                              children: (0, n.jsxs)("button", {
                                ref: (e4) => {
                                  eg.current[t3] = e4;
                                },
                                type: "button",
                                className: Y().slot,
                                "data-active": eA === t3 || void 0,
                                onPointerEnter: () => J2(t3),
                                onFocus: () => J2(t3),
                                onClick: () => eb(t3),
                                onKeyDown: (e4) => ((e5, t4) => {
                                  if ("ArrowDown" !== e5.key && "ArrowUp" !== e5.key)
                                    return;
                                  e5.preventDefault();
                                  let a3 = (t4 + ("ArrowDown" === e5.key ? 1 : -1) + F2.length) % F2.length;
                                  eg.current[a3]?.focus();
                                })(e4, t3),
                                children: [
                                  (0, n.jsxs)("span", {
                                    className: Y().slotMain,
                                    children: [
                                      (0, n.jsxs)("span", {
                                        className: Y().slotTop,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: Y().slotDay,
                                            children: e3.day.label
                                          }),
                                          (0, n.jsx)("span", {
                                            className: Y().slotTime,
                                            children: P(e3.start, e3.end)
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("span", {
                                        className: Y().slotReason,
                                        "data-tone": e3.conflicts.length ? "warn" : "ok",
                                        children: [
                                          e3.conflicts.length ? (0, n.jsx)(c.A, {
                                            size: 14,
                                            "aria-hidden": "true"
                                          }) : (0, n.jsx)(u.A, {
                                            size: 14,
                                            "aria-hidden": "true"
                                          }),
                                          (0, n.jsx)("span", {
                                            className: Y().truncate,
                                            children: e3.reason
                                          })
                                        ]
                                      })
                                    ]
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: Y().slotEnd,
                                    children: [
                                      0 === t3 && (0, n.jsx)("span", {
                                        className: Y().best,
                                        children: "Best"
                                      }),
                                      (0, n.jsx)(h.A, {
                                        className: Y().chevron,
                                        size: 16,
                                        "aria-hidden": "true"
                                      })
                                    ]
                                  })
                                ]
                              })
                            },
                            e3.id
                          )
                        )
                      })
                    ]
                  }),
                  "empty" === eC && (0, n.jsxs)("div", {
                    className: Y().state,
                    children: [
                      (0, n.jsx)("p", {
                        className: Y().stateTitle,
                        children: "No time works for everyone"
                      }),
                      (0, n.jsx)("p", {
                        className: Y().stateText,
                        children: L2 ? `${L2.duration} min, ${L2.range.label.toLowerCase()}, ${L2.window.label.toLowerCase()}` : "Try a wider range"
                      }),
                      L2 && "any" !== L2.window.id && (0, n.jsx)(g.$, {
                        size: "sm",
                        variant: "secondary",
                        onClick: () => {
                          let e3 = z2.replace(
                            /,?\s*\b(in the )?(mornings?|afternoons?)\b/gi,
                            ""
                          ).trim();
                          S2(e3), ex(e3);
                        },
                        children: "Try any time of day"
                      })
                    ]
                  }),
                  "error" === eC && (0, n.jsxs)("div", {
                    className: Y().state,
                    children: [
                      (0, n.jsxs)("p", {
                        className: Y().stateTitle,
                        children: [
                          (0, n.jsx)(c.A, {
                            className: Y().warnIcon,
                            size: 14,
                            "aria-hidden": "true"
                          }),
                          er
                        ]
                      }),
                      (0, n.jsxs)("p", {
                        className: Y().stateText,
                        children: ["Try ", "\u201C", $, "\u201D"]
                      })
                    ]
                  }),
                  "invite" === eC && eE && L2 && (0, n.jsx)(ea, {
                    title: ei,
                    onTitle: es,
                    slot: eE,
                    people: L2.people,
                    organizer: a2,
                    meetLink: v2,
                    timeZone: x2,
                    phase: C2,
                    sendError: eo,
                    simulated: !_2,
                    onBack: ej,
                    onSend: () => void ew()
                  })
                ]
              },
              eC
            )
          })
        }),
        (0, n.jsx)("span", {
          className: Y().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ec
        })
      ]
    });
  }
  function J({ person: e2, size: t2 = 20 }) {
    let a2 = e2.name.split(" ").map((e3) => e3[0]).join("").slice(0, 2);
    return e2.avatar ? (0, n.jsx)("img", {
      className: Y().avatar,
      src: e2.avatar,
      alt: "",
      width: t2,
      height: t2,
      style: { width: t2, height: t2 }
    }) : (0, n.jsx)("span", {
      className: Y().avatar,
      style: { width: t2, height: t2 },
      "aria-hidden": "true",
      children: a2
    });
  }
  function Z({ person: e2 }) {
    return "outlook" === e2.calendar ? (0, n.jsx)(j, { className: Y().mark, title: "Outlook calendar" }) : "google" === e2.calendar ? (0, n.jsx)(b, { className: Y().mark, title: "Google Calendar" }) : null;
  }
  function X({ phase: e2, request: t2 }) {
    let a2 = t2 ? [
      {
        key: "duration",
        node: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(m.A, { size: 14, "aria-hidden": "true" }),
            t2.duration,
            " min"
          ]
        })
      },
      {
        key: "people",
        node: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("span", {
              className: Y().stack,
              "aria-hidden": "true",
              children: t2.people.slice(0, 3).map((e3) => (0, n.jsx)(J, { person: e3, size: 16 }, e3.id))
            }),
            (0, n.jsx)("span", {
              className: Y().truncate,
              children: t2.people.map(q).join(", ")
            })
          ]
        })
      },
      {
        key: "range",
        node: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(p.A, { size: 14, "aria-hidden": "true" }),
            t2.range.label,
            (0, n.jsx)("span", {
              className: Y().chipDetail,
              children: t2.range.detail
            })
          ]
        })
      },
      {
        key: "window",
        node: (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(y.A, { size: 14, "aria-hidden": "true" }),
            t2.window.label,
            (0, n.jsxs)("span", {
              className: Y().chipDetail,
              children: [F(t2.window.start), "\u2013", F(t2.window.end)]
            })
          ]
        })
      }
    ] : [];
    return (0, n.jsx)("div", {
      className: Y().chips,
      children: (0, n.jsx)(r.N, {
        initial: false,
        mode: "popLayout",
        children: t2 ? (0, n.jsx)(
          l.PY1.ul,
          {
            className: Y().chipList,
            "aria-label": "What was understood",
            exit: { opacity: 0, transition: G },
            children: a2.map(
              (e3, t3) => (0, n.jsx)(
                l.PY1.li,
                {
                  className: Y().chip,
                  initial: { opacity: 0, y: 2 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { ...W, delay: 0.04 * t3 }
                  },
                  children: e3.node
                },
                e3.key
              )
            )
          },
          "chips"
        ) : (0, n.jsx)(
          l.PY1.p,
          {
            className: Y().chipHint,
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: W },
            exit: { opacity: 0, transition: G },
            children: "parsing" === e2 ? (0, n.jsx)(x.n, {
              duration: 1.2,
              children: "Reading your request"
            }) : (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(_.A, { size: 14, "aria-hidden": "true" }),
                "Duration, people, range and time of day"
              ]
            })
          },
          "parsing" === e2 ? "reading" : "hint"
        )
      })
    });
  }
  function ee({
    attendees: e2,
    organizerId: t2,
    slot: a2,
    window: o2,
    checking: d2,
    calendars: c2,
    timeZone: u2
  }) {
    let h2 = (0, s.I)() ?? false, m2 = e2?.length ?? 3, p2 = o2 ? o2.end - o2.start : 180, y2 = (e3) => o2 ? 100 * Math.min(Math.max((e3 - o2.start) / p2, 0), 1) : 0, _2 = [];
    if (o2) {
      let e3 = p2 > 240 ? 120 : 60;
      for (let t3 = o2.start; t3 <= o2.end; t3 += e3) _2.push(t3);
    }
    let f2 = d2 ? "checking" : a2 ? a2.day.id : "idle", [g2, v2] = (0, i.useState)(false), b2 = !!a2 && !g2;
    return !!a2 !== g2 && v2(!!a2), (0, n.jsxs)("section", {
      className: Y().availability,
      "aria-label": "Availability",
      children: [
        (0, n.jsxs)("div", {
          className: Y().availHead,
          children: [
            (0, n.jsx)("span", {
              className: Y().availTitle,
              children: (0, n.jsx)(r.N, {
                initial: false,
                mode: "popLayout",
                children: (0, n.jsx)(
                  l.PY1.span,
                  {
                    className: Y().availTitleText,
                    initial: { opacity: 0, y: 2 },
                    animate: { opacity: 1, y: 0, transition: W },
                    exit: { opacity: 0, transition: G },
                    children: d2 ? (0, n.jsx)(x.n, {
                      duration: 1.2,
                      children: `Checking ${c2} calendars`
                    }) : a2 ? a2.day.label : "Availability"
                  },
                  f2
                )
              })
            }),
            (0, n.jsx)("span", {
              className: Y().availMeta,
              children: o2 ? `${F(o2.start)}\u2013${F(o2.end)} ${u2}` : u2
            })
          ]
        }),
        (0, n.jsxs)(l.PY1.div, {
          className: Y().rows,
          initial: false,
          animate: { height: 24 * m2 + (m2 - 1) * 8 },
          transition: h2 ? { duration: 0 } : V,
          children: [
            Array.from({ length: m2 }, (i2, s2) => {
              let d3 = e2?.[s2], c3 = d3 && a2 ? a2.busy[d3.id] ?? [] : [];
              return (0, n.jsxs)(
                "div",
                {
                  className: Y().row,
                  children: [
                    (0, n.jsx)("div", {
                      className: Y().person,
                      children: (0, n.jsx)(r.N, {
                        initial: false,
                        mode: "popLayout",
                        children: (0, n.jsx)(
                          l.PY1.span,
                          {
                            className: Y().personInner,
                            initial: { opacity: 0 },
                            animate: { opacity: 1, transition: W },
                            exit: { opacity: 0, transition: G },
                            children: d3 ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)(J, { person: d3 }),
                                (0, n.jsx)("span", {
                                  className: Y().personName,
                                  children: d3.id === t2 ? "You" : q(d3)
                                }),
                                (0, n.jsx)(Z, { person: d3 })
                              ]
                            }) : (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)("span", {
                                  className: Y().avatarGhost
                                }),
                                (0, n.jsx)("span", {
                                  className: Y().nameGhost
                                })
                              ]
                            })
                          },
                          d3?.id ?? "placeholder"
                        )
                      })
                    }),
                    (0, n.jsx)("div", {
                      className: Y().track,
                      role: "img",
                      "aria-label": d3 && a2 ? `${d3.id === t2 ? "You" : d3.name}: ${c3.filter(
                        (e3) => o2 && e3.end > o2.start && e3.start < o2.end
                      ).map(
                        (e3) => `${e3.title}${e3.tentative ? " (tentative)" : ""}`
                      ).join(", ") || "free"}` : "No calendar loaded",
                      children: (0, n.jsx)(r.N, {
                        initial: false,
                        children: o2 && c3.filter((e3) => e3.end > o2.start && e3.start < o2.end).map((e3) => {
                          let t3 = !!a2 && e3.start < a2.end && e3.end > a2.start;
                          return (0, n.jsx)(
                            l.PY1.span,
                            {
                              className: Y().busy,
                              "data-tentative": e3.tentative || void 0,
                              "data-conflict": t3 || void 0,
                              title: `${e3.title}${e3.tentative ? ", tentative" : ""}`,
                              style: {
                                left: `calc(${y2(e3.start)}% + 1px)`,
                                width: `calc(${y2(e3.end) - y2(e3.start)}% - 2px)`
                              },
                              initial: { opacity: 0 },
                              animate: { opacity: 1, transition: W },
                              exit: { opacity: 0, transition: G }
                            },
                            `${a2?.day.id}-${e3.start}-${e3.title}`
                          );
                        })
                      })
                    })
                  ]
                },
                s2
              );
            }),
            (0, n.jsx)("div", {
              className: Y().columnLayer,
              "aria-hidden": "true",
              children: (0, n.jsx)(l.PY1.span, {
                className: Y().column,
                initial: false,
                animate: a2 && o2 ? {
                  left: `${y2(a2.start)}%`,
                  width: `${y2(a2.end) - y2(a2.start)}%`,
                  opacity: 1
                } : { opacity: 0 },
                transition: h2 || b2 ? { duration: 0, opacity: W } : { left: V, width: V, opacity: W }
              })
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: Y().axis,
          "aria-hidden": "true",
          children: _2.map(
            (e3, t3) => (0, n.jsx)(
              "span",
              {
                className: Y().tick,
                "data-edge": 0 === t3 ? "start" : t3 === _2.length - 1 ? "end" : void 0,
                style: { left: `${y2(e3)}%` },
                children: F(e3)
              },
              e3
            )
          )
        })
      ]
    });
  }
  function et() {
    return (0, n.jsx)("div", {
      className: Y().slotList,
      "aria-hidden": "true",
      children: (0, n.jsx)("ul", {
        className: Y().slots,
        children: [0, 1, 2].map(
          (e2) => (0, n.jsxs)(
            "li",
            {
              className: Y().skeletonRow,
              children: [
                (0, n.jsx)("span", {
                  className: Y().skeletonBar,
                  style: { width: `${46 - 6 * e2}%` }
                }),
                (0, n.jsx)("span", {
                  className: Y().skeletonBar,
                  "data-short": true,
                  style: { width: `${62 - 8 * e2}%` }
                })
              ]
            },
            e2
          )
        )
      })
    });
  }
  function ea({
    title: e2,
    onTitle: t2,
    slot: a2,
    people: i2,
    organizer: s2,
    meetLink: o2,
    timeZone: d2,
    phase: h2,
    sendError: m2,
    simulated: y2,
    onBack: _2,
    onSend: x2
  }) {
    let b2 = "sending" === h2, j2 = "sent" === h2;
    return (0, n.jsxs)("div", {
      className: Y().invite,
      children: [
        (0, n.jsx)("input", {
          className: Y().titleInput,
          value: e2,
          onChange: (e3) => t2(e3.target.value),
          "aria-label": "Invite title",
          disabled: j2
        }),
        (0, n.jsxs)("ul", {
          className: Y().details,
          children: [
            (0, n.jsxs)("li", {
              className: Y().detail,
              children: [
                (0, n.jsx)(p.A, { size: 14, "aria-hidden": "true" }),
                (0, n.jsxs)("span", {
                  className: Y().truncate,
                  children: [
                    a2.day.label,
                    " ",
                    (0, n.jsx)("span", {
                      className: Y().dot,
                      children: "\xB7"
                    }),
                    " ",
                    P(a2.start, a2.end),
                    " ",
                    d2
                  ]
                })
              ]
            }),
            (0, n.jsxs)("li", {
              className: Y().detail,
              children: [
                (0, n.jsx)(w, { className: Y().mark }),
                (0, n.jsx)("span", { className: Y().truncate, children: o2 }),
                (0, n.jsx)(v.CopyButton, {
                  value: `https://${o2.replace(/^https?:\/\//, "")}`,
                  iconOnly: true,
                  variant: "plain",
                  label: "Copy Meet link",
                  className: Y().copy
                })
              ]
            }),
            (0, n.jsxs)("li", {
              className: Y().detail,
              children: [
                (0, n.jsx)("span", {
                  className: Y().stack,
                  "aria-hidden": "true",
                  children: [s2, ...i2].slice(0, 4).map((e3) => (0, n.jsx)(J, { person: e3, size: 16 }, e3.id))
                }),
                (0, n.jsxs)("span", {
                  className: Y().truncate,
                  children: [
                    i2.map((e3) => e3.name).join(", "),
                    (0, n.jsx)("span", {
                      className: Y().muted,
                      children: " and you"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: Y().actions,
          children: [
            (0, n.jsxs)(g.$, {
              variant: "ghost",
              size: "sm",
              onClick: _2,
              disabled: b2 || j2,
              children: [
                (0, n.jsx)(f.A, { size: 16, "aria-hidden": "true" }),
                "Back"
              ]
            }),
            (0, n.jsx)("span", {
              className: Y().sendStatus,
              children: (0, n.jsx)(r.N, {
                initial: false,
                mode: "popLayout",
                children: m2 ? (0, n.jsxs)(
                  l.PY1.span,
                  {
                    className: Y().sendStatusInner,
                    "data-tone": "warn",
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: W },
                    exit: { opacity: 0, transition: G },
                    children: [
                      (0, n.jsx)(c.A, { size: 14, "aria-hidden": "true" }),
                      (0, n.jsx)("span", {
                        className: Y().truncate,
                        children: m2
                      })
                    ]
                  },
                  "error"
                ) : j2 ? (0, n.jsx)(
                  l.PY1.span,
                  {
                    className: Y().sendStatusInner,
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: W },
                    exit: { opacity: 0, transition: G },
                    children: (0, n.jsx)("span", {
                      className: Y().truncate,
                      children: y2 ? "Simulated, nothing was sent" : `Sent to ${i2.length} ${1 === i2.length ? "guest" : "guests"}`
                    })
                  },
                  "sent"
                ) : null
              })
            }),
            (0, n.jsx)(g.$, {
              size: "sm",
              className: Y().sendButton,
              loading: b2,
              "aria-disabled": j2 || void 0,
              onClick: j2 ? void 0 : x2,
              children: j2 ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(u.A, { size: 16, "aria-hidden": "true" }),
                  "Sent"
                ]
              }) : "Send invite"
            })
          ]
        })
      ]
    });
  }
  let en = U;
}

__m(__module,__exports,__require);
});
A.reg(47603, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => o });
  var i = a(51811);
  let n = {
    name: "sun",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
      ["path", { d: "M12 2v2", key: "tus03m" }],
      ["path", { d: "M12 20v2", key: "1lh1kg" }],
      ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
      ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
      ["path", { d: "M2 12h2", key: "1t8f8n" }],
      ["path", { d: "M20 12h2", key: "1q8mjw" }],
      ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
      ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
    ]
  };
  n.node;
  let o = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(52427, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "calendar-days",
    size: 24,
    node: [
      ["path", { d: "M8 2v3", key: "1ioesn" }],
      ["path", { d: "M16 2v3", key: "otl347" }],
      [
        "rect",
        { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }
      ],
      ["path", { d: "M3 9h18", key: "1pudct" }],
      ["path", { d: "M8 13h.01", key: "1sbv64" }],
      ["path", { d: "M12 13h.01", key: "y0uutt" }],
      ["path", { d: "M16 13h.01", key: "wip0gl" }],
      ["path", { d: "M8 17h.01", key: "p3bg7i" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }],
      ["path", { d: "M16 17h.01", key: "ql8jdd" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(57465, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "users",
    size: 24,
    node: [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }
      ],
      ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(86272, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => i });
  var a = r(51811);
  let n = {
    name: "sparkles",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
          key: "1s2grr"
        }
      ],
      ["path", { d: "M20 2v4", key: "1rf3ol" }],
      ["path", { d: "M22 4h-4", key: "gwowj6" }],
      ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
    ],
    aliases: ["stars"]
  };
  n.node;
  let i = (0, a.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("smart-scheduler", [32972]);
A.item("smart-scheduler", {entry:46998, export:"SmartScheduler", kind:"block", tier:"pro", unresolved:[]});
})();