/* team-showcase (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(37380, ".showcase{container-type:inline-size;box-sizing:border-box;width:min(100%,1120px);min-width:0;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);padding:clamp(20px,4vw,48px)}\n.showcase button{cursor:pointer;font:inherit;color:inherit;-webkit-tap-highlight-color:transparent}\n.showcase img{object-fit:cover;object-position:center 35%}\n@media (prefers-reduced-motion:reduce){.showcase *,.showcase :after,.showcase :before{transition-duration:0s!important;scroll-behavior:auto!important}\n.header{display:flex;justify-content:space-between;align-items:flex-end;gap:32px;margin-bottom:56px}\n.header h2{max-width:13ch;margin:0;font:400 clamp(var(--text-3xl),4.5cqi,var(--text-5xl))/var(--leading-display) var(--font-display);letter-spacing:var(--tracking-display);text-wrap:balance}\n.header p{max-width:32ch;margin:0 0 4px;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.gallery .header{margin-bottom:40px}\n.gallery .header h2{max-width:20ch}\n.directory .header h2{max-width:16ch}\n.spotlight .header{margin-bottom:40px}\n@container (max-width: 760px){.header{flex-direction:column;align-items:flex-start;gap:24px;margin-bottom:36px}\n.header h2{max-width:17ch}\n@container (max-width: 440px){.header h2{font-size:var(--text-3xl)}\n.gallery .header{margin-bottom:28px}\n.galleryGrid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:16px;align-items:start}\n.galleryGrid{grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}\n.galleryGrid{display:flex;gap:12px;margin-right:-20px;padding-right:20px;overflow-x:auto;scrollbar-width:none;scroll-snap-type:x mandatory;scroll-padding-inline:0 20px}\n.galleryGrid::-webkit-scrollbar{display:none}\n.galleryPerson{display:block;min-width:0;padding:0;border:0;background:none;text-align:left}\n.galleryPerson[aria-pressed=true] .galleryPhoto:after{opacity:1}\n.galleryPerson[aria-pressed=false] .personName{color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.galleryPerson:hover .galleryPhoto:after{opacity:.45}\n.galleryPerson{flex:0 0 56%;scroll-snap-align:start}\n.galleryPhoto{position:relative;display:block;aspect-ratio:3/4;overflow:hidden;border-radius:10px;background:var(--surface-muted)}\n.galleryPhoto:after{content:\"\";position:absolute;inset:0;box-shadow:inset 0 0 0 2px var(--accent);border-radius:inherit;opacity:0;pointer-events:none;transition:opacity var(--duration-standard) var(--ease-standard)}\n.galleryPhoto{aspect-ratio:4/4.5}\n.personName{display:block;margin-top:10px;font-size:var(--text-sm);font-weight:500;transition:color var(--duration-fast) var(--ease-standard)}\n.personRole{display:block;margin-top:2px;color:var(--text-muted);font-size:var(--text-xs);line-height:1.4}\n.galleryDetail{display:flex;align-items:end;justify-content:space-between;gap:32px;min-height:220px;margin-top:40px;padding-top:28px;border-top:1px solid var(--border-subtle)}\n.galleryDetail{display:block;min-height:0}\n.galleryDetail{margin-top:28px;padding-top:24px}\n.crossfade{display:grid;min-width:0}\n.crossfade>*{grid-area:1/1;min-width:0}\n.crossfade>:not([data-active]){pointer-events:none}\n.galleryBioStage{flex:1;min-height:190px;align-items:start}\n.galleryBio{display:grid;grid-area:1/1;grid-template-columns:minmax(0,.8fr) minmax(0,1.6fr);gap:12px 40px;width:min(100%,850px);min-height:190px}\n.galleryBio p{max-width:48ch;margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:1.65}\n.galleryBio{grid-template-columns:1fr;gap:16px;min-height:0}\n.galleryBio p{font-size:var(--text-sm)}\n.galleryBioIdentity h3{margin:0 0 8px;font:400 var(--text-2xl)/1.18 var(--font-display);letter-spacing:var(--tracking-display)}\n.galleryBioIdentity span{color:var(--text-secondary);font-size:var(--text-xs);line-height:1.5}\n.galleryBioIdentity h3{font-size:var(--text-xl)}\n.galleryBioContent{display:grid;align-content:start;gap:20px}\n.contact{display:grid;gap:6px}\n.contactItems{display:flex;flex-wrap:wrap;gap:4px 20px}\n.contactItems{display:grid;gap:4px}\n.contactItem{display:inline-flex;min-width:0;align-items:center;gap:2px;color:var(--text-secondary);font-size:var(--text-sm);font-variant-numeric:tabular-nums;white-space:nowrap}\n.contactItem>span:first-child{overflow:hidden;text-overflow:ellipsis}\n.contactItem>button{flex:none}\n.galleryNavigation{flex:none;align-self:end}\n.galleryNavigation{margin-top:24px}\n.bio{min-width:0}\n.bio h3{margin:0 0 6px;font-size:var(--text-lg);font-weight:500;line-height:1.2}\n.bio span{color:var(--text-secondary);font-size:var(--text-xs)}\n.bio p{margin:20px 0;color:var(--text-secondary);font-size:var(--text-base);line-height:1.65}\n.bio .location{color:var(--text-muted)}\n.filmDetail .bio{min-height:200px}\n.spotlightCopy .bio h3{font:400 clamp(var(--text-3xl),4cqi,var(--text-5xl))/1.1 var(--font-display);letter-spacing:var(--tracking-display)}\n.spotlightCopy .bio p{margin:24px 0;font-size:var(--text-base)}\n.spotlightCopy .bio p{font-size:var(--text-base)}\n.filmDetail .bio{min-height:0}\n.spotlightCopy .bio p{margin:24px 0}\n.bioStack{flex:1;max-width:620px}\n.filmTrack{display:flex;gap:8px;height:380px}\n.filmTrack{height:300px}\n.filmTrack{height:auto;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:12px}\n.filmPerson{position:relative;min-width:0;flex:1;overflow:hidden;padding:0;border:0;border-radius:10px;background:var(--surface-muted);transition:flex-grow var(--duration-considered) var(--ease-standard)}\n.filmPerson[data-selected=true]{flex:2.35}\n.filmPerson[data-selected=true] .filmName{opacity:1;transform:none;transition-delay:var(--duration-instant)}\n.filmPerson,.filmPerson[data-selected=true]{flex:0 0 82%;aspect-ratio:3/4;scroll-snap-align:start}\n.filmPerson:after{content:\"\";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 2px var(--accent);opacity:0;pointer-events:none}\n.filmPerson[data-selected=true]:after{opacity:1}\n.filmName{position:absolute;bottom:10px;left:10px;padding:5px 10px;background:var(--surface);border-radius:var(--radius-pill);box-shadow:var(--shadow-resting);font-size:var(--text-xs);font-weight:500;white-space:nowrap;opacity:0;transform:translateY(4px);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-standard) var(--ease-enter)}\n.filmName{opacity:1;font-size:var(--text-xs)}\n.filmDetail{display:flex;align-items:flex-start;justify-content:space-between;gap:40px;margin-top:32px}\n.filmDetail{display:block}\n.filmDetail .arrows{margin-top:24px}\n.arrows{display:flex;align-items:center;gap:12px;flex:none}\n.arrows button{display:grid;place-items:center;width:36px;height:36px;padding:0;border:1px solid var(--border);border-radius:50%;background:transparent;transition:background var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.arrows button:active{transform:scale(.96)}\n.arrows span{min-width:3ch;color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-align:center;white-space:nowrap}\n.spotlightCopy .arrows{margin-top:32px}\n.arrows button:hover{background:var(--surface-muted)}\n.spotlightCopy .arrows{margin-top:24px}\n.arrows button:active{transform:none}\n.directoryList{border-top:1px solid var(--border)}\n.directoryPerson{border-bottom:1px solid var(--border)}\n.directoryTrigger{display:grid;grid-template-columns:48px 1fr 1fr 18px;gap:20px;align-items:center;width:100%;padding:14px 0;text-align:left;background:none;border:0}\n.directoryTrigger:hover .directoryName{color:var(--text-secondary)}\n.directoryTrigger{grid-template-columns:40px 1fr 18px;gap:14px}\n.directoryTrigger>svg{grid-column:3;grid-row:1}\n.directoryThumb{position:relative;width:48px;height:48px;border-radius:50%;overflow:hidden;background:var(--surface-muted)}\n.directoryThumb{width:40px;height:40px}\n.directoryName{font:400 var(--text-2xl)/1.2 var(--font-display);letter-spacing:var(--tracking-display)}\n.directoryName{font-size:var(--text-lg)}\n.directoryRole{color:var(--text-secondary);font-size:var(--text-sm)}\n.directoryRole{grid-column:2;margin-top:-12px;font-size:var(--text-xs)}\n.directoryIcon{display:block}\n.directoryIcon[data-open] .directoryIconBar{transform:rotate(90deg)}\n.directoryIconBar{transform-box:view-box;transform-origin:12px 12px;transition:transform var(--duration-standard) var(--ease-standard)}\n.directoryPanel{overflow:hidden}\n.directoryExpanded{display:grid;grid-template-columns:200px 1fr;gap:40px;padding:8px 0 32px 68px}\n.directoryExpanded p{margin:0 0 24px;max-width:42ch;font-size:var(--text-base);line-height:1.6;color:var(--text-secondary)}\n.directoryExpanded dl{display:grid;gap:12px;margin:0;font-size:var(--text-sm)}\n.directoryExpanded dt{margin-bottom:2px;color:var(--text-muted);font-size:var(--text-xs)}\n.directoryExpanded dd{margin:0}\n.directoryExpanded{grid-template-columns:160px 1fr;gap:24px;padding-left:0}\n.directoryExpanded p{margin-top:0;font-size:var(--text-base)}\n.directoryExpanded{display:block}\n.directoryExpanded p{margin-bottom:24px}\n.directoryPhoto{position:relative;aspect-ratio:4/5;border-radius:10px;overflow:hidden;background:var(--surface-muted)}\n.directoryPhoto{width:100%;max-height:320px;margin-bottom:24px}\n.spotlightStage{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}\n.spotlightStage{gap:32px}\n.spotlightStage{display:flex;flex-direction:column-reverse;gap:32px}\n.spotlightPhoto{position:relative;aspect-ratio:4/4.6;overflow:hidden;border-radius:12px;background:var(--surface-muted)}\n.spotlightPhoto{width:100%}\n.spotlightLayer{position:absolute;inset:0}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.spotlightNav{display:flex;justify-content:center;gap:24px;padding-top:24px;margin-top:32px;border-top:1px solid var(--border)}\n.spotlightNav button{display:grid;gap:6px;justify-items:center;padding:0;border:0;background:none;color:var(--text-muted);font-size:var(--text-xs);transition:color var(--duration-fast) var(--ease-standard)}\n.spotlightNav button[aria-pressed=true]{color:var(--foreground)}\n.spotlightNav button[aria-pressed=true] .spotlightThumb{box-shadow:0 0 0 2px var(--surface),0 0 0 3px var(--accent)}\n.spotlightNav{gap:8px;justify-content:space-between}\n.spotlightThumb{position:relative;display:block;width:40px;height:40px;overflow:hidden;border-radius:50%;background:var(--surface-muted);transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.spotlightThumb{width:32px;height:32px}\n.review{width:100%;min-width:0}\n.reviewControls{display:flex;justify-content:center;margin-bottom:24px;max-width:100%}", {"showcase":"showcase","header":"header","gallery":"gallery","directory":"directory","spotlight":"spotlight","galleryGrid":"galleryGrid","galleryPerson":"galleryPerson","galleryPhoto":"galleryPhoto","personName":"personName","personRole":"personRole","galleryDetail":"galleryDetail","crossfade":"crossfade","galleryBioStage":"galleryBioStage","galleryBio":"galleryBio","galleryBioIdentity":"galleryBioIdentity","galleryBioContent":"galleryBioContent","contact":"contact","contactItems":"contactItems","contactItem":"contactItem","galleryNavigation":"galleryNavigation","bio":"bio","location":"location","filmDetail":"filmDetail","spotlightCopy":"spotlightCopy","bioStack":"bioStack","filmTrack":"filmTrack","filmPerson":"filmPerson","filmName":"filmName","arrows":"arrows","directoryList":"directoryList","directoryPerson":"directoryPerson","directoryTrigger":"directoryTrigger","directoryName":"directoryName","directoryThumb":"directoryThumb","directoryRole":"directoryRole","directoryIcon":"directoryIcon","directoryIconBar":"directoryIconBar","directoryPanel":"directoryPanel","directoryExpanded":"directoryExpanded","directoryPhoto":"directoryPhoto","spotlightStage":"spotlightStage","spotlightPhoto":"spotlightPhoto","spotlightLayer":"spotlightLayer","srOnly":"srOnly","spotlightNav":"spotlightNav","spotlightThumb":"spotlightThumb","review":"review","reviewControls":"reviewControls"});
A.reg(67436, function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, {
    TeamShowcase: () => v,
    TeamShowcaseReview: () => b,
    default: () => N
  });
  var t = i(95155), s = i(5772), o = i(12115), r = i(25354), n = i(18310), l = i(80642), d = i(31966), c = i(90467), h = i(66558), m = i(73474), p = i(67752), g = i(7770), u = i(37380), y = i.n(u);
  let w = [
    {
      id: "emma",
      name: "Emma Collins",
      role: "Product designer",
      location: "Z\xFCrich, Switzerland",
      image: (0, p.o4)("emma-collins"),
      introduction: "Emma turns complex product decisions into calm, useful experiences. She cares about the first five minutes of a workflow and the details people notice much later.",
      focus: "Design systems and onboarding",
      email: "emma@arc.example",
      phone: "+1 (202) 555-0101"
    },
    {
      id: "marcus",
      name: "Marcus Johnson",
      role: "Frontend engineer",
      location: "London, United Kingdom",
      image: (0, p.o4)("marcus-johnson"),
      introduction: "Marcus builds the foundations that let good ideas become dependable interfaces. He is happiest when a component feels simple to use and has room to grow.",
      focus: "Component architecture",
      email: "marcus@arc.example",
      phone: "+1 (202) 555-0102"
    },
    {
      id: "ava",
      name: "Ava Mitchell",
      role: "Design lead",
      location: "Amsterdam, Netherlands",
      image: (0, p.o4)("ava-mitchell"),
      introduction: "Ava gives teams a shared point of view. She connects research, product direction, and the small decisions that make a service feel coherent.",
      focus: "Product direction",
      email: "ava@arc.example",
      phone: "+1 (202) 555-0103"
    },
    {
      id: "jasmine",
      name: "Jasmine Brooks",
      role: "Platform engineer",
      location: "Berlin, Germany",
      image: (0, p.o4)("jasmine-brooks"),
      introduction: "Jasmine keeps the platform steady as the product finds its next shape. She works across performance, integrations, and the systems that should quietly keep working.",
      focus: "Platform and performance",
      email: "jasmine@arc.example",
      phone: "+1 (202) 555-0104"
    },
    {
      id: "sofia",
      name: "Sofia Ramirez",
      role: "Operations partner",
      location: "New York, United States",
      image: (0, p.o4)("sofia-ramirez"),
      introduction: "Sofia makes space for focused work across a distributed team. She brings the right context together and helps a promising idea find its next practical step.",
      focus: "Team operations",
      email: "sofia@arc.example",
      phone: "+1 (202) 555-0105"
    }
  ], _ = [
    { value: "gallery", label: "Gallery" },
    { value: "filmstrip", label: "Filmstrip" },
    { value: "directory", label: "Directory" },
    { value: "spotlight", label: "Spotlight" }
  ];
  function f({ person: e2, sizes: a2 = "(max-width: 620px) 80vw, 30vw" }) {
    return (0, t.jsx)(s.default, { src: e2.image, alt: "", fill: true, sizes: a2 });
  }
  function j({ person: e2 }) {
    return (0, t.jsx)("div", {
      className: y().contact,
      "aria-label": `Sample contact details for ${e2.name}`,
      children: (0, t.jsxs)("div", {
        className: y().contactItems,
        children: [
          (0, t.jsxs)("span", {
            className: y().contactItem,
            children: [
              (0, t.jsx)("span", { children: e2.email }),
              (0, t.jsx)(m.CopyButton, {
                value: e2.email,
                label: `Copy ${e2.name}'s email`,
                iconOnly: true,
                variant: "plain"
              })
            ]
          }),
          (0, t.jsxs)("span", {
            className: y().contactItem,
            children: [
              (0, t.jsx)("span", { children: e2.phone }),
              (0, t.jsx)(m.CopyButton, {
                value: e2.phone,
                label: `Copy ${e2.name}'s phone number`,
                iconOnly: true,
                variant: "plain"
              })
            ]
          })
        ]
      })
    });
  }
  function x({
    people: e2,
    selectedIndex: a2,
    reduce: i2,
    offset: s2 = 8,
    className: o2,
    itemClassName: n2,
    render: l2
  }) {
    let d2 = { duration: g.T.duration.standard, ease: [...g.T.ease.standard] };
    return (0, t.jsx)("div", {
      className: [y().crossfade, o2].filter(Boolean).join(" "),
      children: e2.map((e3, o3) => {
        let c2 = o3 === a2, h2 = i2 || c2 ? 0 : o3 < a2 ? -s2 : s2;
        return (0, t.jsx)(
          r.PY1.div,
          {
            className: n2,
            "data-active": c2 || void 0,
            "aria-hidden": !c2,
            inert: !c2,
            initial: false,
            animate: { opacity: +!!c2, x: 0, y: h2 },
            transition: i2 ? { duration: 0 } : c2 ? d2 : { ...d2, duration: g.T.duration.fast },
            children: l2(e3)
          },
          e3.id
        );
      })
    });
  }
  function v({
    variant: e2 = "gallery",
    onPersonSelect: a2,
    people: i2 = w,
    title: s2
  }) {
    let h2 = (0, n.I)() ?? false, m2 = (0, o.useId)(), p2 = (0, o.useRef)(null), u2 = (0, o.useRef)(null), [_2, b2] = (0, o.useState)(0), N2 = i2[_2], [k, C] = (0, o.useState)(true), P = {
      duration: h2 ? 0 : g.T.duration.standard,
      ease: [...g.T.ease.enter]
    };
    function T(e3) {
      let t2 = (e3 + i2.length) % i2.length;
      b2(t2);
      let s3 = p2.current, o2 = s3?.children[t2];
      s3 && o2 && s3.scrollWidth > s3.clientWidth && s3.scrollTo({
        left: o2.offsetLeft - s3.firstElementChild.offsetLeft,
        behavior: h2 ? "instant" : "smooth"
      });
      let r2 = u2.current, n2 = r2?.children[t2];
      r2 && n2 && r2.scrollWidth > r2.clientWidth && r2.scrollTo({
        left: n2.offsetLeft - r2.firstElementChild.offsetLeft,
        behavior: h2 ? "instant" : "smooth"
      }), a2?.(i2[t2]);
    }
    let S = (0, t.jsx)(x, {
      people: i2,
      selectedIndex: _2,
      reduce: h2,
      className: y().bioStack,
      itemClassName: y().bio,
      render: (e3) => (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h3", { children: e3.name }),
              (0, t.jsx)("span", { children: e3.role })
            ]
          }),
          (0, t.jsx)("p", { children: e3.introduction }),
          (0, t.jsx)("span", {
            className: y().location,
            children: e3.location
          })
        ]
      })
    }), A = (0, t.jsxs)("p", {
      className: y().srOnly,
      "aria-live": "polite",
      "aria-atomic": "true",
      children: [N2.name, ", ", N2.role]
    }), B = (0, t.jsxs)("div", {
      className: y().arrows,
      children: [
        (0, t.jsx)("button", {
          type: "button",
          onClick: () => T(_2 - 1),
          "aria-label": "Show previous team member",
          children: (0, t.jsx)(d.A, {
            size: 16,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        }),
        (0, t.jsxs)("span", { children: [_2 + 1, " / ", i2.length] }),
        (0, t.jsx)("button", {
          type: "button",
          onClick: () => T(_2 + 1),
          "aria-label": "Show next team member",
          children: (0, t.jsx)(c.A, {
            size: 16,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        })
      ]
    });
    return (0, t.jsxs)("section", {
      className: `${y().showcase} ${y()[e2]}`,
      "aria-labelledby": `${m2}-title`,
      children: [
        (0, t.jsxs)(r.PY1.header, {
          className: y().header,
          initial: !h2 && { opacity: 0, y: 8 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.5 },
          transition: {
            duration: h2 ? 0 : g.T.duration.considered,
            ease: [...g.T.ease.enter]
          },
          children: [
            (0, t.jsx)("h2", {
              id: `${m2}-title`,
              children: s2 ?? ("directory" === e2 ? "The people behind Arc" : "Meet the team")
            }),
            "gallery" !== e2 && (0, t.jsx)("p", {
              children: "Five people across design, engineering, and operations."
            })
          ]
        }),
        "gallery" === e2 && (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: y().galleryGrid,
              ref: u2,
              children: i2.map(
                (e3, a3) => (0, t.jsxs)(
                  r.PY1.button,
                  {
                    type: "button",
                    initial: !h2 && { opacity: 0, y: 12 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.2 },
                    transition: {
                      duration: h2 ? 0 : g.T.duration.considered,
                      delay: h2 ? 0 : 0.05 * a3,
                      ease: [...g.T.ease.enter]
                    },
                    onFocus: (e4) => {
                      e4.currentTarget.style.opacity = "1", e4.currentTarget.style.transform = "none";
                    },
                    className: y().galleryPerson,
                    onClick: () => T(a3),
                    "aria-pressed": _2 === a3,
                    "aria-label": `Read about ${e3.name}`,
                    "aria-controls": `${m2}-detail`,
                    children: [
                      (0, t.jsx)("span", {
                        className: y().galleryPhoto,
                        children: (0, t.jsx)(f, {
                          person: e3,
                          sizes: "(max-width: 620px) 70vw, 20vw"
                        })
                      }),
                      (0, t.jsx)("span", {
                        className: y().personName,
                        children: e3.name
                      }),
                      (0, t.jsx)("span", {
                        className: y().personRole,
                        children: e3.role
                      })
                    ]
                  },
                  e3.id
                )
              )
            }),
            (0, t.jsxs)("div", {
              id: `${m2}-detail`,
              className: y().galleryDetail,
              children: [
                (0, t.jsx)(x, {
                  people: i2,
                  selectedIndex: _2,
                  reduce: h2,
                  className: y().galleryBioStage,
                  itemClassName: y().galleryBio,
                  render: (e3) => (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsxs)("div", {
                        className: y().galleryBioIdentity,
                        children: [
                          (0, t.jsx)("h3", { children: e3.name }),
                          (0, t.jsxs)("span", {
                            children: [e3.role, " \xB7 ", e3.location]
                          })
                        ]
                      }),
                      (0, t.jsxs)("div", {
                        className: y().galleryBioContent,
                        children: [
                          (0, t.jsx)("p", { children: e3.introduction }),
                          (0, t.jsx)(j, { person: e3 })
                        ]
                      })
                    ]
                  })
                }),
                (0, t.jsx)("div", {
                  className: y().galleryNavigation,
                  children: B
                }),
                A
              ]
            })
          ]
        }),
        "filmstrip" === e2 && (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              ref: p2,
              className: y().filmTrack,
              children: i2.map(
                (e3, a3) => (0, t.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: y().filmPerson,
                    "data-selected": _2 === a3,
                    "aria-pressed": _2 === a3,
                    "aria-label": `Read about ${e3.name}`,
                    "aria-controls": `${m2}-detail`,
                    onClick: () => T(a3),
                    children: [
                      (0, t.jsx)(f, { person: e3 }),
                      (0, t.jsx)("span", {
                        className: y().filmName,
                        children: e3.name
                      })
                    ]
                  },
                  e3.id
                )
              )
            }),
            (0, t.jsxs)("div", {
              id: `${m2}-detail`,
              className: y().filmDetail,
              children: [S, B, A]
            })
          ]
        }),
        "directory" === e2 && (0, t.jsx)("div", {
          className: y().directoryList,
          children: i2.map(
            (e3, a3) => (0, t.jsxs)(
              "div",
              {
                className: y().directoryPerson,
                "data-selected": _2 === a3,
                children: [
                  (0, t.jsxs)("button", {
                    type: "button",
                    className: y().directoryTrigger,
                    onClick: () => {
                      C(a3 !== _2 || !k), T(a3);
                    },
                    "aria-expanded": _2 === a3 && k,
                    "aria-controls": `${m2}-${e3.id}`,
                    children: [
                      (0, t.jsx)("span", {
                        className: y().directoryThumb,
                        children: (0, t.jsx)(f, { person: e3, sizes: "96px" })
                      }),
                      (0, t.jsx)("span", {
                        className: y().directoryName,
                        children: e3.name
                      }),
                      (0, t.jsx)("span", {
                        className: y().directoryRole,
                        children: e3.role
                      }),
                      (0, t.jsxs)("svg", {
                        className: y().directoryIcon,
                        "data-open": _2 === a3 && k || void 0,
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 1.75,
                        strokeLinecap: "round",
                        "aria-hidden": "true",
                        children: [
                          (0, t.jsx)("path", { d: "M5 12h14" }),
                          (0, t.jsx)("path", {
                            className: y().directoryIconBar,
                            d: "M12 5v14"
                          })
                        ]
                      })
                    ]
                  }),
                  (0, t.jsx)(l.N, {
                    initial: false,
                    children: _2 === a3 && k && (0, t.jsx)(
                      r.PY1.div,
                      {
                        id: `${m2}-${e3.id}`,
                        className: y().directoryPanel,
                        initial: h2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: h2 ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 },
                        transition: h2 ? { duration: 0 } : {
                          height: g.T.spring.smooth,
                          opacity: { duration: g.T.duration.standard }
                        },
                        children: (0, t.jsxs)("div", {
                          className: y().directoryExpanded,
                          children: [
                            (0, t.jsx)("div", {
                              className: y().directoryPhoto,
                              children: (0, t.jsx)(f, { person: e3 })
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("p", {
                                  children: e3.introduction
                                }),
                                (0, t.jsxs)("dl", {
                                  children: [
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsx)("dt", {
                                          children: "Based in"
                                        }),
                                        (0, t.jsx)("dd", {
                                          children: e3.location
                                        })
                                      ]
                                    }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsx)("dt", {
                                          children: "Working on"
                                        }),
                                        (0, t.jsx)("dd", {
                                          children: e3.focus
                                        })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      },
                      "panel"
                    )
                  })
                ]
              },
              e3.id
            )
          )
        }),
        "spotlight" === e2 && (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: y().spotlightStage,
              children: [
                (0, t.jsxs)("div", {
                  className: y().spotlightCopy,
                  children: [S, B, A]
                }),
                (0, t.jsx)("div", {
                  className: y().spotlightPhoto,
                  children: i2.map((e3, a3) => {
                    let i3 = a3 === _2;
                    return (0, t.jsx)(
                      r.PY1.div,
                      {
                        className: y().spotlightLayer,
                        "aria-hidden": "true",
                        style: { zIndex: +!!i3 },
                        initial: false,
                        animate: {
                          opacity: +!!i3,
                          x: i3 || h2 ? 0 : a3 < _2 ? -12 : 12
                        },
                        transition: h2 ? { duration: 0 } : i3 ? P : { duration: 0, delay: g.T.duration.standard },
                        children: (0, t.jsx)(f, { person: e3 })
                      },
                      e3.id
                    );
                  })
                })
              ]
            }),
            (0, t.jsx)("nav", {
              className: y().spotlightNav,
              "aria-label": "Choose a team member",
              children: i2.map(
                (e3, a3) => (0, t.jsxs)(
                  "button",
                  {
                    type: "button",
                    onClick: () => T(a3),
                    "aria-pressed": _2 === a3,
                    children: [
                      (0, t.jsx)("span", {
                        className: y().spotlightThumb,
                        children: (0, t.jsx)(f, { person: e3, sizes: "64px" })
                      }),
                      (0, t.jsx)("span", { children: e3.name.split(" ")[0] })
                    ]
                  },
                  e3.id
                )
              )
            })
          ]
        })
      ]
    });
  }
  function b() {
    let [e2, a2] = (0, o.useState)("gallery");
    return (0, t.jsxs)("div", {
      className: y().review,
      children: [
        (0, t.jsx)("div", {
          className: y().reviewControls,
          children: (0, t.jsx)(h.A, {
            label: "Team section design",
            options: _,
            value: e2,
            onValueChange: (e3) => a2(e3)
          })
        }),
        (0, t.jsx)(v, { variant: e2 }, e2)
      ]
    });
  }
  let N = v;
}

__m(__module,__exports,__require);
});
A.cssFor("team-showcase", [37380]);
A.item("team-showcase", {entry:67436, export:"TeamShowcase", kind:"block", tier:"pro", unresolved:[]});
})();