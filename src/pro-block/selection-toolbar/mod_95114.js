function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { gH: () => J, v7: () => C });
  var r = i(95155), a = i(12115), n = i(85815), s = i(19876), o = i(1910), l = i(36483), d = i(9107), c = i(35484), p = i(41189), u = i(9005), h = i(38158), f = i(79196), m = i(25354), _ = i(80642), g = i(18310), y = i(92171), x = i(28245), b = i(55809), j = i(7890), v = i(22535), z = i(20122), N = i(7770), w = i(34434), $ = i.n(w);
  let T = { duration: N.T.duration.standard, ease: [...N.T.ease.enter] }, L = { duration: N.T.duration.fast, ease: [...N.T.ease.standard] }, S = { duration: 0 }, k = { duration: N.T.duration.instant }, R = { ...N.T.spring.smooth, visualDuration: 0.3 }, A = { opacity: 0, y: "0.3em", filter: `blur(${N.T.blur.soft}px)` }, F = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${N.T.blur.subtle}px)`,
    transition: L
  }, E = { opacity: 1, y: "0em", filter: "blur(0px)" }, D = (e2) => Math.min(Math.max(e2, 0), 100), I = { x: [0, -7, 6, -4, 3, -1.5, 0] }, M = { duration: 0.42, ease: "easeOut" }, O = { type: "spring", visualDuration: 0.42, bounce: 0 };
  function C(e2) {
    if (e2 < 1024) return `${e2} B`;
    if (e2 < 1048576) return `${Math.round(e2 / 1024)} KB`;
    let t2 = e2 / 1048576;
    return `${t2 >= 10 ? Math.round(t2) : Number(t2.toFixed(1))} MB`;
  }
  function P({ name: e2 }) {
    let t2 = { size: 20, strokeWidth: 1.75, "aria-hidden": true }, i2 = e2.toLowerCase().split(".").pop() ?? "";
    return [
      "png",
      "jpg",
      "jpeg",
      "gif",
      "webp",
      "svg",
      "avif",
      "heic"
    ].includes(i2) ? (0, r.jsx)(n.A, { ...t2 }) : ["mov", "mp4", "webm", "m4v", "avi"].includes(i2) ? (0, r.jsx)(s.A, { ...t2 }) : ["zip", "gz", "tar", "rar", "7z"].includes(i2) ? (0, r.jsx)(o.A, { ...t2 }) : ["pdf", "md", "txt", "doc", "docx", "rtf"].includes(i2) ? (0, r.jsx)(l.A, { ...t2 }) : (0, r.jsx)(d.A, { ...t2 });
  }
  function Y(e2) {
    let t2 = (0, f.tF)();
    return (0, r.jsx)(m.PY1.span, {
      ...e2,
      "aria-hidden": !t2 || e2["aria-hidden"]
    });
  }
  function B({ text: e2, className: t2, reduce: i2 }) {
    return (0, r.jsx)(_.N, {
      mode: "popLayout",
      initial: false,
      children: (0, r.jsx)(
        Y,
        {
          className: t2,
          initial: i2 ? { opacity: 0 } : A,
          animate: E,
          exit: i2 ? { opacity: 0, transition: k } : F,
          transition: i2 ? k : T,
          children: e2
        },
        e2
      )
    });
  }
  function W({ text: e2 }) {
    let t2 = (0, g.I)(), i2 = e2.split(" ");
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("span", { className: $().srOnly, children: e2 }),
        (0, r.jsx)("span", {
          className: $().words,
          "aria-hidden": "true",
          children: (0, r.jsx)(_.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, a2) => (0, r.jsx)(
                m.PY1.span,
                {
                  className: $().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${N.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${N.T.blur.subtle}px)`,
                    transition: L
                  },
                  transition: t2 ? { duration: N.T.duration.instant } : {
                    duration: N.T.duration.standard,
                    ease: [...N.T.ease.enter]
                  },
                  children: a2 < i2.length - 1 ? `${e3} ` : e3
                },
                `${a2}:${e3}`
              )
            )
          })
        })
      ]
    });
  }
  function U({ text: e2 }) {
    let t2 = (0, g.I)(), i2 = (0, a.useRef)(null), [n2, s2] = (0, a.useState)("auto");
    return (0, a.useEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && s2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsx)(m.PY1.div, {
      className: $().messageSlot,
      initial: { height: 0, opacity: 0 },
      animate: { height: n2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: t2 ? { duration: 0 } : {
          height: N.T.spring.smooth,
          opacity: { duration: N.T.duration.instant }
        }
      },
      transition: t2 ? { duration: 0 } : {
        height: N.T.spring.smooth,
        opacity: { duration: N.T.duration.fast }
      },
      children: (0, r.jsxs)(m.PY1.div, {
        ref: i2,
        className: $().error,
        role: "alert",
        initial: !t2 && { y: "0.35em", filter: `blur(${N.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: t2 ? 0 : N.T.duration.standard,
          ease: [...N.T.ease.enter]
        },
        children: [
          (0, r.jsx)(c.A, {
            className: $().errorIcon,
            size: 14,
            strokeWidth: 2.25,
            "aria-hidden": "true"
          }),
          (0, r.jsx)("span", {
            className: $().errorCopy,
            children: (0, r.jsx)(W, { text: e2 })
          })
        ]
      })
    });
  }
  function q({ reduce: e2 }) {
    return (0, r.jsxs)("svg", {
      className: $().stateIcon,
      width: 14,
      height: 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.25,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)(m.PY1.path, {
          d: "M12 2.5a9.5 9.5 0 1 1 0 19a9.5 9.5 0 1 1 0-19",
          initial: !e2 && { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: {
            duration: 0.7 * N.T.duration.considered,
            ease: [...N.T.ease.enter]
          }
        }),
        (0, r.jsx)(m.PY1.path, {
          d: "m8.2 12.4 2.6 2.6 5-5.2",
          initial: !e2 && { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: { ...T, delay: 0.16 }
        })
      ]
    });
  }
  function H({ item: e2 }) {
    let [t2, i2] = (0, a.useState)(false);
    return !e2.preview || t2 ? (0, r.jsx)("span", {
      className: $().fileIcon,
      children: (0, r.jsx)(P, { name: e2.name })
    }) : (0, r.jsx)("span", {
      className: $().thumb,
      children: (0, r.jsx)("img", {
        src: e2.preview,
        alt: "",
        width: 40,
        height: 40,
        decoding: "async",
        onError: () => i2(true)
      })
    });
  }
  function G({
    item: e2,
    reduce: t2,
    delay: i2,
    fresh: n2,
    canRetry: s2,
    onRemove: o2,
    onRetry: l2,
    removeRef: d2
  }) {
    let { status: h2 } = e2, f2 = (0, a.useRef)(null), g2 = (0, a.useRef)(n2 ? "new" : h2);
    (0, a.useEffect)(() => {
      let e3 = g2.current;
      if (h2 === e3) return;
      g2.current = h2;
      let r2 = f2.current;
      "failed" === h2 && !t2 && r2 && (0, y.i)(r2, I, { ...M, delay: "new" === e3 ? i2 + 0.3 : 0 });
    }, [h2, t2, i2]);
    let v2 = (0, x.d)("uploaded" === h2 ? 100 : e2.progress ?? 0), z2 = (0, b.G)(v2, (e3) => `${D(e3) - 100}%`), w2 = (0, b.G)(v2, (e3) => `${Math.round(D(e3))}%`), [P2, B2] = (0, a.useState)("uploading" !== h2), [W2, U2] = (0, a.useState)(h2);
    W2 !== h2 && (U2(h2), "uploading" === h2 && B2(false));
    let J2 = "uploaded" !== h2 || P2 || t2 ? h2 : "uploading", V = "uploaded" === h2 ? 100 : e2.progress ?? 0;
    (0, a.useEffect)(() => {
      if ("uploading" !== h2 && "uploaded" !== h2) return;
      if (t2 || "uploading" === h2 && 0 === V) return void v2.jump(V);
      let e3 = (0, y.i)(v2, V, {
        ...N.T.spring.smooth,
        onComplete: "uploaded" === h2 ? () => B2(true) : void 0
      });
      return () => e3.stop();
    }, [h2, V, v2, t2]), (0, j.L)(v2, "change", (e3) => {
      "uploaded" === h2 && e3 >= 99.5 && B2(true);
    });
    let X = "failed" === h2, K = X && s2 && false !== e2.retryable;
    return (0, r.jsx)(m.PY1.li, {
      className: $().item,
      initial: t2 ? { opacity: 0 } : { height: 0 },
      animate: { height: "auto", opacity: 1 },
      exit: t2 ? { opacity: 0, transition: k } : {
        height: 0,
        opacity: 0,
        transition: { height: R, opacity: { ...L, delay: 0.04 } }
      },
      transition: t2 ? k : { height: { ...N.T.spring.smooth, delay: i2 }, opacity: k },
      children: (0, r.jsxs)(m.PY1.div, {
        ref: f2,
        className: `${$().row} ${X ? $().isFailed : ""}`,
        initial: !t2 && {
          opacity: 0,
          y: -22,
          scale: 0.94,
          filter: `blur(${N.T.blur.soft}px)`
        },
        animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        exit: t2 ? void 0 : {
          scale: 0.97,
          filter: `blur(${N.T.blur.subtle}px)`,
          transition: L
        },
        transition: t2 ? S : {
          y: { ...O, delay: i2 },
          scale: { ...O, delay: i2 },
          opacity: { ...T, delay: i2 },
          filter: { ...T, delay: i2 }
        },
        children: [
          (0, r.jsx)(H, { item: e2 }),
          (0, r.jsxs)("span", {
            className: $().copy,
            children: [
              (0, r.jsx)("span", {
                className: $().name,
                title: e2.name,
                children: e2.name
              }),
              (0, r.jsxs)("span", {
                className: $().meta,
                children: [
                  (0, r.jsx)("span", { children: C(e2.size) }),
                  J2 && (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("span", {
                        className: $().dot,
                        "aria-hidden": "true",
                        children: "\xB7"
                      }),
                      (0, r.jsx)("span", {
                        className: $().phase,
                        children: (0, r.jsx)(_.N, {
                          mode: "popLayout",
                          initial: false,
                          children: (0, r.jsx)(
                            Y,
                            {
                              className: `${$().state} ${"uploaded" === J2 ? $().uploaded : "failed" === J2 ? $().failed : ""}`,
                              initial: t2 ? { opacity: 0 } : A,
                              animate: E,
                              exit: t2 ? { opacity: 0, transition: k } : F,
                              transition: t2 ? k : T,
                              children: "uploading" === J2 ? (0, r.jsxs)("span", {
                                children: [
                                  "Uploading ",
                                  (0, r.jsx)(m.PY1.span, {
                                    className: $().percent,
                                    children: w2
                                  })
                                ]
                              }) : "uploaded" === J2 ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(q, { reduce: t2 }),
                                  (0, r.jsx)("span", {
                                    children: "Uploaded"
                                  })
                                ]
                              }) : (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(c.A, {
                                    className: $().stateIcon,
                                    size: 14,
                                    strokeWidth: 2.25,
                                    "aria-hidden": "true"
                                  }),
                                  (0, r.jsxs)("span", {
                                    className: $().reason,
                                    title: e2.error,
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: $().srOnly,
                                        children: "Failed: "
                                      }),
                                      e2.error || "Upload failed"
                                    ]
                                  })
                                ]
                              })
                            },
                            J2
                          )
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, r.jsx)(_.N, {
                initial: false,
                children: "uploading" === J2 && (0, r.jsx)(
                  m.PY1.span,
                  {
                    className: $().barFrame,
                    initial: t2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: t2 ? { opacity: 0, transition: k } : {
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { ...R, delay: 0.22 },
                        opacity: { ...L, delay: 0.16 }
                      }
                    },
                    transition: t2 ? k : { height: N.T.spring.smooth, opacity: T },
                    children: (0, r.jsx)("span", {
                      className: $().bar,
                      role: "progressbar",
                      "aria-label": `Uploading ${e2.name}`,
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      "aria-valuenow": Math.round(D(V)),
                      children: (0, r.jsx)(m.PY1.span, {
                        className: $().barFill,
                        style: { x: z2 }
                      })
                    })
                  },
                  "bar"
                )
              })
            ]
          }),
          (0, r.jsxs)("span", {
            className: $().actions,
            children: [
              (0, r.jsx)(_.N, {
                initial: false,
                children: K && (0, r.jsx)(
                  m.PY1.span,
                  {
                    className: $().retrySlot,
                    initial: t2 ? { opacity: 0 } : { width: 0, opacity: 0 },
                    animate: { width: "auto", opacity: 1 },
                    exit: t2 ? { opacity: 0, transition: k } : {
                      width: 0,
                      opacity: 0,
                      transition: {
                        width: R,
                        opacity: { duration: N.T.duration.instant }
                      }
                    },
                    transition: t2 ? k : { width: N.T.spring.smooth, opacity: T },
                    children: (0, r.jsx)(m.PY1.span, {
                      className: $().retryInner,
                      initial: !t2 && {
                        scale: 0.8,
                        filter: `blur(${N.T.blur.subtle}px)`
                      },
                      animate: { scale: 1, filter: "blur(0px)" },
                      transition: t2 ? S : N.T.spring.snappy,
                      children: (0, r.jsxs)("button", {
                        type: "button",
                        className: $().retry,
                        onClick: l2,
                        "aria-label": `Retry ${e2.name}`,
                        title: "Retry",
                        children: [
                          (0, r.jsx)(p.A, {
                            size: 14,
                            strokeWidth: 2,
                            "aria-hidden": "true"
                          }),
                          (0, r.jsx)("span", {
                            className: $().retryLabel,
                            children: "Retry"
                          })
                        ]
                      })
                    })
                  },
                  "retry"
                )
              }),
              (0, r.jsx)("button", {
                ref: d2,
                type: "button",
                className: $().remove,
                onClick: o2,
                "aria-label": `Remove ${e2.name}`,
                title: "Remove",
                children: (0, r.jsx)(u.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            ]
          })
        ]
      })
    });
  }
  function J({
    accept: e2,
    multiple: t2 = true,
    maxFiles: i2 = 5,
    onFilesChange: n2,
    label: s2 = "Add files",
    description: o2 = "Drop files here or choose from your device",
    defaultItems: l2,
    onUpload: d2,
    maxSize: c2,
    listPlacement: p2 = "below",
    note: u2,
    dropLabel: f2,
    compactAt: b2
  }) {
    let [j2, w2] = (0, a.useState)(() => l2 ?? []), [A2, F2] = (0, a.useState)(false), [E2, O2] = (0, a.useState)(""), [P2, Y2] = (0, a.useState)(""), [W2, q2] = (0, a.useState)(0), H2 = (0, a.useRef)(null), V = (0, a.useRef)(null), X = (0, a.useRef)(null), K = (0, a.useRef)(null), Q = (0, a.useRef)(0), Z = (0, a.useRef)(0), ee = (0, a.useRef)(/* @__PURE__ */ new Map()), et = (0, a.useRef)(/* @__PURE__ */ new Map()), ei = (0, a.useId)(), er = (0, a.useId)(), ea = !!(0, g.I)(), en = "inside" === p2, es = void 0 !== b2 && j2.length >= b2, [eo, el] = (0, a.useState)(() => /* @__PURE__ */ new Set()), ed = (0, a.useRef)(/* @__PURE__ */ new Map()), [ec, ep] = (0, a.useState)(false), [eu, eh] = (0, a.useState)(false);
    (0, a.useEffect)(() => {
      let e3 = ee.current, t3 = ed.current;
      return () => {
        e3.forEach((e4) => e4.abort()), t3.forEach((e4) => URL.revokeObjectURL(e4));
      };
    }, []);
    let ef = (0, x.d)(50), em = (0, x.d)(50), e_ = { stiffness: 260, damping: 32, mass: 0.8 }, eg = (0, v.z)(ef, e_), ey = (0, v.z)(em, e_), ex = (0, z.E)`radial-gradient(180px circle at ${eg}% ${ey}%, var(--accent), transparent 70%)`, eb = (0, z.E)`radial-gradient(260px circle at ${eg}% ${ey}%, color-mix(in oklab, var(--accent) 6%, transparent), transparent 70%)`, ej = (e3) => {
      let t3 = X.current;
      if (!t3) return;
      let i3 = t3.getBoundingClientRect(), r2 = (e3.clientX - i3.left) / Math.max(1, i3.width) * 100, a2 = (e3.clientY - i3.top) / Math.max(1, i3.height) * 100;
      ea || !A2 ? (ef.jump(r2), em.jump(a2), eg.jump(r2), ey.jump(a2)) : (ef.set(r2), em.set(a2));
    };
    (0, a.useLayoutEffect)(() => {
      let e3 = X.current, t3 = K.current;
      if (!e3 || !t3) return;
      let i3 = () => {
        let i4 = e3.offsetWidth - 1, r3 = e3.offsetHeight - 1, a3 = Math.max(
          0,
          Math.min(
            parseFloat(getComputedStyle(e3).borderTopLeftRadius) - 0.5,
            i4 / 2,
            r3 / 2
          )
        ), n4 = 2 * (i4 + r3) - 8 * a3 + 2 * Math.PI * a3;
        t3.setAttribute("rx", String(a3)), t3.setAttribute(
          "pathLength",
          String(7 * Math.max(8, Math.round(n4 / 7)))
        );
      };
      i3();
      let r2 = 0, a2 = () => {
        i3(), r2 = requestAnimationFrame(a2);
      }, n3 = (t4) => {
        t4.target === e3 && t4.propertyName.includes("radius") && (cancelAnimationFrame(r2), a2());
      }, s3 = (t4) => {
        t4.target === e3 && t4.propertyName.includes("radius") && (cancelAnimationFrame(r2), i3());
      };
      e3.addEventListener("transitionrun", n3), e3.addEventListener("transitionend", s3), e3.addEventListener("transitioncancel", s3);
      let o3 = "u" < typeof ResizeObserver ? void 0 : new ResizeObserver(i3);
      return o3?.observe(e3), () => {
        o3?.disconnect(), cancelAnimationFrame(r2), e3.removeEventListener("transitionrun", n3), e3.removeEventListener("transitionend", s3), e3.removeEventListener("transitioncancel", s3);
      };
    }, []);
    let ev = (e3) => e3.flatMap((e4) => e4.file ? [e4.file] : []), ez = (e3, t3) => w2((i3) => i3.map((i4) => i4.id === e3 ? t3(i4) : i4));
    function eN(e3) {
      if (!d2) return;
      ee.current.get(e3.id)?.abort();
      let t3 = new AbortController();
      ee.current.set(e3.id, t3), ez(e3.id, (e4) => ({
        ...e4,
        status: "uploading",
        progress: 0,
        error: void 0
      })), d2(
        { ...e3, status: "uploading", progress: 0, error: void 0 },
        {
          signal: t3.signal,
          onProgress: (i3) => {
            t3.signal.aborted || ez(
              e3.id,
              (e4) => "uploading" === e4.status ? { ...e4, progress: Math.max(e4.progress ?? 0, D(i3)) } : e4
            );
          }
        }
      ).then(
        () => {
          t3.signal.aborted || (ez(e3.id, (e4) => ({ ...e4, status: "uploaded", progress: 100 })), Y2(`${e3.name} uploaded`));
        },
        (i3) => {
          if (t3.signal.aborted) return;
          let r2 = i3 instanceof Error && i3.message ? i3.message : "Upload failed";
          ez(e3.id, (e4) => ({
            ...e4,
            status: "failed",
            error: r2,
            retryable: true
          })), Y2(`${e3.name} failed. ${r2}`);
        }
      ).finally(() => {
        ee.current.get(e3.id) === t3 && ee.current.delete(e3.id);
      });
    }
    function ew(r2) {
      let a2 = Array.from(r2), s3 = e2?.split(",").map((e3) => e3.trim().toLowerCase()).filter(Boolean) ?? [], o3 = a2.filter(
        (e3) => 0 === s3.length || s3.some(
          (t3) => t3.startsWith(".") ? e3.name.toLowerCase().endsWith(t3) : t3.endsWith("/*") ? e3.type.startsWith(t3.slice(0, -1)) : e3.type === t3
        )
      ), l3 = t2 ? j2 : [], p3 = (e3, t3) => e3.name === t3.name && e3.size === t3.size && e3.lastModified === t3.lastModified, u3 = o3.filter(
        (e3, t3) => o3.findIndex((t4) => p3(t4, e3)) === t3 && !l3.some((t4) => t4.file && p3(t4.file, e3))
      ), h2 = t2 ? Math.max(0, i2 - l3.length) : 1, f3 = u3.slice(0, h2).map((e3) => {
        let t3 = void 0 !== c2 && e3.size > c2, i3 = `${e3.name}-${e3.size}-${e3.lastModified}-${Z.current++}`, r3 = e3.type.startsWith("image/") && "function" == typeof URL.createObjectURL ? URL.createObjectURL(e3) : void 0;
        return r3 && ed.current.set(i3, r3), {
          id: i3,
          name: e3.name,
          size: e3.size,
          file: e3,
          preview: r3,
          status: t3 ? "failed" : d2 ? "uploading" : void 0,
          progress: 0,
          error: t3 ? `File is larger than ${C(c2)}` : void 0,
          retryable: !t3
        };
      }), m2 = o3.length !== a2.length, _2 = u3.length > f3.length;
      if (O2(
        m2 ? a2.length - o3.length == 1 && 1 === a2.length ? `${a2[0].name} is not an accepted file type.` : "Some files were not added because their type is not accepted." : _2 ? `You can add up to ${i2} ${1 === i2 ? "file" : "files"}.` : ""
      ), (m2 || _2) && !ea && X.current && (0, y.i)(X.current, I, M), !f3.length)
        return;
      t2 || (ee.current.forEach((e3) => e3.abort()), ee.current.clear());
      let g2 = [...l3, ...f3];
      el((e3) => /* @__PURE__ */ new Set([...e3, ...f3.map((e4) => e4.id)])), q2(l3.length), w2((e3) => t2 ? [...e3, ...f3] : f3), n2?.(ev(g2));
      let x2 = f3.filter((e3) => "failed" === e3.status);
      Y2(
        `${f3.length} ${1 === f3.length ? "file" : "files"} added.${x2.length ? ` ${x2.map((e3) => `${e3.name}: ${e3.error}`).join(". ")}.` : ""}`
      ), f3.filter((e3) => "uploading" === e3.status).forEach(eN);
    }
    let e$ = ec || eu, eT = (0, a.useRef)(ew);
    (0, a.useLayoutEffect)(() => {
      eT.current = ew;
    }), (0, a.useEffect)(() => {
      if (!e$) return;
      let e3 = (e4) => {
        let t3 = e4.clipboardData?.files;
        if (!t3?.length) return;
        let i3 = e4.target;
        i3?.closest(
          "input:not([type=file]), textarea, [contenteditable='true']"
        ) || (e4.preventDefault(), eT.current(t3));
      };
      return document.addEventListener("paste", e3), () => document.removeEventListener("paste", e3);
    }, [e$]);
    let eL = (e3) => Array.from(e3.dataTransfer?.types ?? []).includes("Files"), eS = u2 ?? (e2 ? `Accepted: ${e2}` : `Up to ${i2} ${1 === i2 ? "file" : "files"}`), ek = {
      initial: ea ? { opacity: 0 } : { height: 0, opacity: 0 },
      animate: { height: "auto", opacity: 1 },
      exit: ea ? { opacity: 0, transition: k } : { height: 0, opacity: 0, transition: { height: R, opacity: L } },
      transition: ea ? k : { height: N.T.spring.smooth, opacity: T }
    }, eR = en && j2.length > 0, eA = (0, r.jsx)(m.PY1.ul, {
      className: $().list,
      "aria-label": "Files",
      "aria-hidden": !j2.length || void 0,
      onKeyDown: function(e3) {
        if ("Delete" === e3.key || "Backspace" === e3.key) {
          let t4 = e3.target.closest(`.${$().row}`), i4 = t4?.querySelector(`.${$().remove}`);
          i4 && (e3.preventDefault(), i4.click());
          return;
        }
        if ("ArrowDown" !== e3.key && "ArrowUp" !== e3.key) return;
        let t3 = e3.target.closest("button"), i3 = Array.from(e3.currentTarget.querySelectorAll(`.${$().row}`)), r2 = t3?.closest(`.${$().row}`);
        if (!t3 || !r2) return;
        let a2 = i3[i3.indexOf(r2) + ("ArrowDown" === e3.key ? 1 : -1)];
        a2 && (e3.preventDefault(), (a2.querySelector(
          `.${t3.classList.contains($().retry) ? $().retry : $().remove}`
        ) ?? a2.querySelector(`.${$().remove}`))?.focus());
      },
      initial: false,
      animate: {
        paddingTop: j2.length && !en ? 4 : 0,
        paddingBottom: j2.length && en ? 12 : 0
      },
      transition: ea ? S : N.T.spring.smooth,
      children: (0, r.jsx)(_.N, {
        initial: false,
        children: j2.map(
          (e3, t3) => (0, r.jsx)(
            G,
            {
              item: e3,
              reduce: ea,
              delay: ea ? 0 : Math.min(Math.max(0, t3 - W2), 7) * N.T.stagger.item * 1.6,
              fresh: eo.has(e3.id),
              canRetry: !!d2,
              onRemove: () => {
                let t4, i3, r2, a2;
                return ee.current.get(e3.id)?.abort(), ee.current.delete(e3.id), t4 = j2.findIndex((t5) => t5.id === e3.id), i3 = j2[t4 + 1] ?? j2[t4 - 1], r2 = j2.filter((t5) => t5.id !== e3.id), void ((a2 = ed.current.get(e3.id)) && (ed.current.delete(e3.id), window.setTimeout(() => URL.revokeObjectURL(a2), 600)), w2((t5) => t5.filter((t6) => t6.id !== e3.id)), O2(""), Y2(`${e3.name} removed`), e3.file && n2?.(ev(r2)), requestAnimationFrame(
                  () => (i3 ? et.current.get(i3.id) : V.current)?.focus()
                ));
              },
              onRetry: () => {
                Y2(`Retrying ${e3.name}`), eN(e3), requestAnimationFrame(() => et.current.get(e3.id)?.focus());
              },
              removeRef: (t4) => {
                t4 ? et.current.set(e3.id, t4) : et.current.delete(e3.id);
              }
            },
            e3.id
          )
        )
      })
    });
    return (0, r.jsxs)("div", {
      className: $().wrapper,
      onPointerEnter: () => ep(true),
      onPointerLeave: () => ep(false),
      onFocus: () => eh(true),
      onBlur: (e3) => {
        e3.currentTarget.contains(e3.relatedTarget) || eh(false);
      },
      children: [
        (0, r.jsxs)("div", {
          ref: X,
          className: `${$().dropzone} ${A2 ? $().dragging : ""} ${en ? $().inside : ""} ${es ? $().compact : ""}`,
          onDragEnter: (e3) => {
            eL(e3) && (e3.preventDefault(), Q.current || ej(e3), Q.current += 1, F2(true));
          },
          onDragOver: (e3) => {
            eL(e3) && (e3.preventDefault(), e3.dataTransfer.dropEffect = "copy", ej(e3));
          },
          onDragLeave: (e3) => {
            eL(e3) && (Q.current = Math.max(0, Q.current - 1), Q.current || F2(false));
          },
          onDrop: (e3) => {
            e3.preventDefault(), Q.current = 0, F2(false), e3.dataTransfer.files.length && ew(e3.dataTransfer.files);
          },
          children: [
            (0, r.jsx)(m.PY1.span, {
              className: $().wash,
              style: { backgroundImage: eb },
              "aria-hidden": "true"
            }),
            (0, r.jsx)("svg", {
              className: $().edge,
              "aria-hidden": "true",
              children: (0, r.jsx)("rect", {
                ref: K,
                width: "100%",
                height: "100%",
                rx: 33.5,
                pathLength: 1358
              })
            }),
            (0, r.jsx)(m.PY1.span, {
              className: $().glow,
              style: { backgroundImage: ex },
              "aria-hidden": "true"
            }),
            (0, r.jsxs)(m.PY1.button, {
              ref: V,
              type: "button",
              className: $().trigger,
              onClick: () => H2.current?.click(),
              "aria-describedby": es ? ei : `${ei} ${er}`,
              initial: false,
              animate: {
                paddingTop: es ? 16 : 26,
                paddingBottom: es ? eR ? 8 : 16 : eR ? 26 : 34
              },
              transition: ea ? S : N.T.spring.smooth,
              children: [
                (0, r.jsx)(_.N, {
                  initial: false,
                  children: (!es || A2) && (0, r.jsx)(
                    m.PY1.span,
                    {
                      className: $().iconSlot,
                      ...ek,
                      children: (0, r.jsxs)("span", {
                        className: $().sheets,
                        "aria-hidden": "true",
                        children: [
                          (0, r.jsx)("span", {
                            className: $().sheet,
                            "data-sheet": "back"
                          }),
                          (0, r.jsx)("span", {
                            className: $().sheet,
                            "data-sheet": "side"
                          }),
                          (0, r.jsx)("span", {
                            className: $().sheet,
                            "data-sheet": "front",
                            children: (0, r.jsx)(h.A, {
                              size: 14,
                              strokeWidth: 2
                            })
                          })
                        ]
                      })
                    },
                    "icon"
                  )
                }),
                (0, r.jsx)("strong", {
                  className: $().label,
                  children: (0, r.jsx)(B, {
                    text: A2 ? f2 ?? (d2 ? "Drop to upload" : t2 ? "Drop to add files" : "Drop to add the file") : s2,
                    className: $().labelText,
                    reduce: ea
                  })
                }),
                (0, r.jsx)("span", {
                  id: ei,
                  className: $().hint,
                  children: o2
                }),
                (0, r.jsx)(_.N, {
                  initial: false,
                  children: !es && (0, r.jsx)(
                    m.PY1.span,
                    {
                      className: $().noteSlot,
                      ...ek,
                      children: (0, r.jsx)("small", {
                        id: er,
                        className: $().note,
                        children: eS
                      })
                    },
                    "note"
                  )
                })
              ]
            }),
            en && eA
          ]
        }),
        (0, r.jsx)("input", {
          ref: H2,
          className: $().input,
          type: "file",
          accept: e2,
          multiple: t2,
          tabIndex: -1,
          "aria-hidden": "true",
          onChange: (e3) => {
            e3.target.files && ew(e3.target.files), e3.target.value = "";
          }
        }),
        (0, r.jsx)(_.N, {
          initial: false,
          children: E2 ? (0, r.jsx)(U, { text: E2 }, "error") : null
        }),
        !en && eA,
        (0, r.jsx)("span", {
          className: $().srOnly,
          role: "status",
          "aria-live": "polite",
          children: P2
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}