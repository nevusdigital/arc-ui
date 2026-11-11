function(__module,__exports,__require){
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
}