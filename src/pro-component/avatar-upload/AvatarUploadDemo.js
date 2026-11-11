function(__module,__exports,__require){
"use strict";
const __m = (e, a, t) => {
  "use strict";
  t.r(a), t.d(a, { AvatarUploadDemo: () => A, default: () => M });
  var r = t(95155), i = t(12115), n = t(18310), o = t(92171), l = t(25354), s = t(80642), u = t(24161), c = t(29572), d = t(36565), p = t(2125), h = t(35484), m = t(64577), g = t(7770), y = t(62265), x = t.n(y);
  let f = {
    "image/png": "PNG",
    "image/jpeg": "JPG",
    "image/webp": "WebP",
    "image/gif": "GIF",
    "image/avif": "AVIF",
    "image/heic": "HEIC"
  }, v = (e2) => e2 >= 1048576 ? `${Number((e2 / 1024 / 1024).toFixed(1))} MB` : `${Math.round(e2 / 1024)} KB`, _ = (e2, a2, t2) => Math.min(t2, Math.max(a2, e2)), b = (0, i.forwardRef)(function({
    name: e2,
    src: a2,
    onUpload: t2,
    onRemove: h2,
    onError: m2,
    accept: y2 = ["image/png", "image/jpeg", "image/webp"],
    maxSize: b2 = 5242880,
    size: z2 = 88,
    outputSize: C2 = 512,
    label: T2 = "Profile photo",
    hint: A2,
    disabled: M2,
    className: R,
    style: P
  }, $) {
    let D, F = !!(0, n.I)(), L = (0, i.useId)(), S = (0, i.useRef)(null), B = (0, i.useRef)(null), U = (0, i.useRef)(null), E = (0, i.useRef)(null), [I, Y] = (0, i.useState)(a2), [O, H] = (0, i.useState)(a2);
    a2 !== O && (H(a2), Y(a2));
    let [V, W] = (0, i.useState)("idle"), [Q, q] = (0, i.useState)(null), [K, X] = (0, i.useState)({ zoom: 1, x: 0, y: 0 }), [G, J] = (0, i.useState)(false), [Z, ee] = (0, i.useState)(null), [ea, et] = (0, i.useState)(null), [er, ei] = (0, i.useState)(0), [en, eo] = (0, i.useState)(false), [el, es] = (0, i.useState)(null), [eu, ec] = (0, i.useState)(), ed = (D = y2.map((e3) => f[e3] ?? e3.replace(/^image\//, "").toUpperCase())).length < 2 ? D.join("") : `${D.slice(0, -1).join(", ")} or ${D[D.length - 1]}`, ep = A2 ?? `${ed}, up to ${v(b2)}`, eh = (0, i.useRef)(/* @__PURE__ */ new Set()), em = (0, i.useCallback)((e3) => {
      e3 && eh.current.has(e3) && (URL.revokeObjectURL(e3), eh.current.delete(e3));
    }, []);
    (0, i.useEffect)(() => {
      let e3 = eh.current;
      return () => e3.forEach((e4) => URL.revokeObjectURL(e4));
    }, []);
    let eg = (0, i.useRef)(null);
    (0, i.useEffect)(() => () => eg.current?.abort(), []);
    let ey = (0, i.useRef)(void 0);
    (0, i.useEffect)(() => () => window.clearTimeout(ey.current), []);
    let ex = (0, i.useRef)(I);
    function ef(e3, a3) {
      window.clearTimeout(ey.current), es(e3), ey.current = window.setTimeout(() => es(null), a3);
    }
    (0, i.useLayoutEffect)(() => {
      ex.current = I;
    });
    let ev = (0, i.useCallback)(
      (e3, a3) => {
        window.clearTimeout(ey.current), es({ tone: "error", text: a3, key: `${e3}:${a3}:${Date.now()}` }), m2?.({ code: e3, message: a3 });
      },
      [m2]
    ), e_ = (0, i.useCallback)(
      (e3) => {
        if (M2 || "uploading" === V) return;
        if (!y2.includes(e3.type)) {
          let a4 = e3.name.includes(".") ? e3.name.split(".").pop().toUpperCase() : "";
          ev(
            "type",
            `${a4 ? `${a4} files aren\u2019t supported` : "That file isn\u2019t an image"}. Choose a ${ed}.`
          );
          return;
        }
        if (e3.size > b2)
          return void ev(
            "size",
            `That photo is ${v(e3.size)}. Choose one up to ${v(b2)}.`
          );
        let a3 = URL.createObjectURL(e3);
        eh.current.add(a3);
        let t3 = new Image();
        t3.onload = () => {
          q(
            (r2) => (em(r2?.url), {
              url: a3,
              file: e3,
              width: t3.naturalWidth,
              height: t3.naturalHeight
            })
          ), X({ zoom: 1, x: 0, y: 0 }), es(null), W("crop");
        }, t3.onerror = () => {
          em(a3), ev(
            "decode",
            "That image couldn\u2019t be opened. Try another file."
          );
        }, t3.src = a3;
      },
      [y2, M2, ev, b2, V, em, ed]
    ), eb = (0, i.useCallback)(() => {
      M2 || "uploading" === V || S.current?.click();
    }, [M2, V]);
    (0, i.useImperativeHandle)($, () => ({ open: eb, selectFile: e_ }), [
      eb,
      e_
    ]);
    let ej = Q ? {
      w: Q.width / Math.min(Q.width, Q.height),
      h: Q.height / Math.min(Q.width, Q.height)
    } : { w: 1, h: 1 }, ew = (0, i.useCallback)(
      (e3) => ({
        x: Math.max(0, (ej.w * e3 - 1) / 2),
        y: Math.max(0, (ej.h * e3 - 1) / 2)
      }),
      [ej.w, ej.h]
    ), ek = (0, i.useCallback)(
      (e3) => {
        let a3 = ew(e3.zoom);
        return { zoom: e3.zoom, x: _(e3.x, -a3.x, a3.x), y: _(e3.y, -a3.y, a3.y) };
      },
      [ew]
    ), eN = (0, i.useCallback)(
      (e3) => {
        let a3 = ew(e3.zoom), t3 = (e4, a4) => {
          let t4 = Math.abs(e4) - a4;
          return t4 <= 0 ? e4 : Math.sign(e4) * (a4 + 0.25 * t4 / (t4 + 0.25));
        };
        return { zoom: e3.zoom, x: t3(e3.x, a3.x), y: t3(e3.y, a3.y) };
      },
      [ew]
    ), ez = (0, i.useCallback)(
      (e3, a3, t3 = { x: 0, y: 0 }) => {
        let r2 = _(a3, 1, 4), i2 = r2 / e3.zoom;
        return ek({
          zoom: r2,
          x: t3.x - (t3.x - e3.x) * i2,
          y: t3.y - (t3.y - e3.y) * i2
        });
      },
      [ek]
    ), eC = (0, i.useRef)(K);
    (0, i.useLayoutEffect)(() => {
      eC.current = K;
    });
    let eT = (0, i.useRef)(null), eA = (0, i.useRef)(/* @__PURE__ */ new Map()), eM = (0, i.useRef)(null), eR = (e3, a3) => {
      let t3 = E.current.getBoundingClientRect();
      return {
        x: (e3 - t3.left - t3.width / 2) / t3.width,
        y: (a3 - t3.top - t3.height / 2) / t3.height
      };
    };
    function eP() {
      let e3 = Array.from(eA.current.values()), a3 = e3.reduce(
        (a4, t4) => ({ x: a4.x + t4.x / e3.length, y: a4.y + t4.y / e3.length }),
        { x: 0, y: 0 }
      ), t3 = e3.length > 1 ? Math.hypot(e3[0].x - e3[1].x, e3[0].y - e3[1].y) : 0;
      eM.current = { view: eC.current, center: a3, distance: t3 };
    }
    function e$(e3) {
      if (eA.current.delete(e3.pointerId)) {
        if (eA.current.size) return void eP();
        eM.current = null, J(false), (function() {
          let e4 = eC.current, a3 = ek(e4);
          if (e4.x !== a3.x || e4.y !== a3.y) {
            if (F) return X(a3);
            eT.current = (0, o.i)(0, 1, {
              ...g.T.spring.smooth,
              onUpdate: (t3) => X({
                zoom: a3.zoom,
                x: e4.x + (a3.x - e4.x) * t3,
                y: e4.y + (a3.y - e4.y) * t3
              })
            });
          }
        })();
      }
    }
    let eD = (0, i.useRef)(void 0);
    function eF() {
      em(Q?.url), q(null), W("idle"), requestAnimationFrame(() => B.current?.focus({ preventScroll: true }));
    }
    async function eL() {
      if (!Q) return null;
      let e3 = new Image();
      e3.src = Q.url, await e3.decode().catch(() => void 0);
      let a3 = Math.min(Q.width, Q.height), { zoom: t3, x: r2, y: i2 } = ek(eC.current), n2 = a3 / t3, o2 = Q.width / 2 - r2 * n2 - n2 / 2, l2 = Q.height / 2 - i2 * n2 - n2 / 2, s2 = document.createElement("canvas");
      s2.width = C2, s2.height = C2;
      let u2 = s2.getContext("2d");
      if (!u2) return null;
      u2.imageSmoothingQuality = "high";
      let c2 = "image/png" === Q.file.type ? "image/png" : "image/jpeg";
      return "image/jpeg" === c2 && (u2.fillStyle = "#fff", u2.fillRect(0, 0, C2, C2)), u2.drawImage(e3, o2, l2, n2, n2, 0, 0, C2, C2), new Promise((e4) => s2.toBlob(e4, c2, 0.92));
    }
    async function eS(e3) {
      eg.current?.abort();
      let a3 = new AbortController();
      eg.current = a3, W("uploading"), et(null), es(null);
      try {
        let r2 = await t2(e3.blob, {
          report: (e4) => {
            a3.signal.aborted || et(_(e4, 0, 1));
          },
          signal: a3.signal,
          original: e3.original
        });
        if (a3.signal.aborted || (et(1), await new Promise((e4) => window.setTimeout(e4, 280 * !F)), a3.signal.aborted))
          return;
        let i2 = "string" == typeof r2 && r2 ? r2 : e3.url;
        i2 !== e3.url && em(e3.url), ex.current !== i2 && em(ex.current), Y(i2), ee(null), W("idle"), ei((e4) => e4 + 1), ef(
          {
            tone: "success",
            text: "Photo updated",
            key: `done:${Date.now()}`
          },
          2600
        );
      } catch (e4) {
        if (a3.signal.aborted) return;
        W("failed"), ev(
          "upload",
          e4 instanceof Error && e4.message ? e4.message : "Upload failed. Your previous photo is unchanged."
        );
      }
    }
    async function eB() {
      if (!Q || "crop" !== V) return;
      let e3 = await eL();
      if (!e3)
        return void ev(
          "decode",
          "That image couldn\u2019t be cropped. Try another file."
        );
      let a3 = URL.createObjectURL(e3);
      eh.current.add(a3);
      let t3 = { url: a3, blob: e3, original: Q.file };
      ee(t3), em(Q.url), q(null), eS(t3);
    }
    function eU() {
      eg.current?.abort(), em(Z?.url), ee(null), W("idle"), ef(
        {
          tone: "hint",
          text: "Upload canceled",
          key: `cancel:${Date.now()}`
        },
        2200
      ), requestAnimationFrame(() => B.current?.focus({ preventScroll: true }));
    }
    (0, i.useEffect)(() => {
      let e3 = U.current;
      if (e3 && "crop" === V)
        return e3.addEventListener("wheel", a3, { passive: false }), () => {
          e3.removeEventListener("wheel", a3), window.clearTimeout(eD.current);
        };
      function a3(e4) {
        e4.preventDefault(), eT.current?.stop();
        let a4 = Math.exp(-e4.deltaY * (e4.ctrlKey ? 0.01 : 22e-4));
        X((t3) => ez(ek(t3), t3.zoom * a4, eR(e4.clientX, e4.clientY))), J(true), window.clearTimeout(eD.current), eD.current = window.setTimeout(() => J(false), 260);
      }
    }, [V, ek, ez]), (0, i.useEffect)(() => {
      "crop" === V && E.current?.focus({ preventScroll: true });
    }, [V]);
    let eE = (0, i.useRef)(0), eI = (e3) => Array.from(e3.dataTransfer?.types ?? []).includes("Files"), eY = M2 || "uploading" === V ? {} : {
      onDragEnter: (e3) => {
        eI(e3) && (e3.preventDefault(), eE.current += 1, eo(true));
      },
      onDragOver: (e3) => {
        eI(e3) && (e3.preventDefault(), e3.dataTransfer.dropEffect = "copy");
      },
      onDragLeave: () => {
        eE.current = Math.max(0, eE.current - 1), eE.current || eo(false);
      },
      onDrop: (e3) => {
        e3.preventDefault(), eE.current = 0, eo(false);
        let a3 = e3.dataTransfer.files[0];
        a3 && e_(a3);
      }
    }, eO = "crop" === V && !!Q, eH = "uploading" === V || "failed" === V, eV = eO ? 184 : z2, eW = (e3) => ({
      width: `${100 * ej.w}%`,
      height: `${100 * ej.h}%`,
      transform: `translate(-50%, -50%) translate(${K.x / ej.w * 100}%, ${K.y / ej.h * 100}%) scale(${K.zoom})`,
      opacity: "ghost" === e3 ? G ? 0.42 : 0.24 : 1
    }), eQ = eH ? Z?.url : I, eq = eQ && eu !== eQ, eK = F ? { duration: 0 } : g.T.spring.smooth, eX = null === ea ? null : Math.round(100 * ea), eG = "uploading" === V ? {
      tone: "hint",
      text: (0, r.jsxs)(r.Fragment, {
        children: [
          "Uploading",
          null === eX ? "" : (0, r.jsxs)(r.Fragment, {
            children: [
              " ",
              (0, r.jsxs)("span", {
                className: x().number,
                children: [eX, "%"]
              })
            ]
          })
        ]
      }),
      key: "uploading"
    } : el ?? { tone: "hint", text: ep, key: "hint" };
    return (0, r.jsxs)("div", {
      className: [x().root, R].filter(Boolean).join(" "),
      style: P,
      role: "group",
      "aria-labelledby": L,
      "data-phase": V,
      "data-dragging": en ? "" : void 0,
      ...eY,
      children: [
        (0, r.jsx)("input", {
          ref: S,
          className: x().file,
          type: "file",
          accept: y2.join(","),
          tabIndex: -1,
          "aria-hidden": "true",
          onChange: (e3) => {
            let a3 = e3.target.files?.[0];
            e3.target.value = "", a3 && e_(a3);
          }
        }),
        (0, r.jsx)(j, {
          reduced: F,
          children: (0, r.jsxs)("div", {
            className: x().layout,
            "data-mode": eO ? "crop" : "idle",
            children: [
              (0, r.jsxs)("div", {
                ref: U,
                className: x().stage,
                onPointerDown: function(e3) {
                  "crop" === V && 0 === e3.button && (eT.current?.stop(), e3.currentTarget.setPointerCapture(e3.pointerId), eA.current.set(e3.pointerId, {
                    x: e3.clientX,
                    y: e3.clientY
                  }), eP(), J(true));
                },
                onPointerMove: function(e3) {
                  if (!eA.current.has(e3.pointerId) || !eM.current || !E.current)
                    return;
                  eA.current.set(e3.pointerId, { x: e3.clientX, y: e3.clientY });
                  let a3 = Array.from(eA.current.values()), t3 = a3.reduce(
                    (e4, t4) => ({
                      x: e4.x + t4.x / a3.length,
                      y: e4.y + t4.y / a3.length
                    }),
                    { x: 0, y: 0 }
                  ), r2 = E.current.getBoundingClientRect().width, i2 = eM.current, n2 = {
                    zoom: i2.view.zoom,
                    x: i2.view.x + (t3.x - i2.center.x) / r2,
                    y: i2.view.y + (t3.y - i2.center.y) / r2
                  };
                  if (a3.length > 1 && i2.distance > 0) {
                    let e4 = Math.hypot(a3[0].x - a3[1].x, a3[0].y - a3[1].y);
                    n2 = ez(n2, i2.view.zoom * e4 / i2.distance, eR(t3.x, t3.y));
                  }
                  X(eN(n2));
                },
                onPointerUp: e$,
                onPointerCancel: e$,
                children: [
                  (0, r.jsx)(l.PY1.div, {
                    className: x().stageBackdrop,
                    layout: true,
                    initial: false,
                    animate: { opacity: +!!eO },
                    style: { borderRadius: 26 },
                    transition: {
                      layout: eK,
                      opacity: {
                        duration: F ? 0 : g.T.duration.standard,
                        ease: [...g.T.ease.standard]
                      }
                    },
                    "aria-hidden": "true"
                  }),
                  (0, r.jsxs)(l.PY1.div, {
                    ref: E,
                    layout: true,
                    transition: { layout: eK },
                    className: x().circle,
                    style: { width: eV, height: eV },
                    "data-busy": eH ? "" : void 0,
                    tabIndex: eO ? 0 : -1,
                    role: eO ? "group" : void 0,
                    "aria-roledescription": eO ? "crop area" : void 0,
                    "aria-label": eO ? `Crop area, zoom ${Math.round(100 * K.zoom)}%. Drag or use the arrow keys to move the photo, plus and minus to zoom, Enter to save, Escape to cancel.` : void 0,
                    onKeyDown: eO ? function(e3) {
                      let a3 = e3.shiftKey ? 0.1 : 0.02, t3 = {
                        ArrowLeft: [-a3, 0],
                        ArrowRight: [a3, 0],
                        ArrowUp: [0, -a3],
                        ArrowDown: [0, a3]
                      };
                      if (t3[e3.key]) {
                        e3.preventDefault();
                        let [a4, r2] = t3[e3.key];
                        X((e4) => ek({ ...e4, x: e4.x + a4, y: e4.y + r2 }));
                      } else
                        "+" === e3.key || "=" === e3.key ? (e3.preventDefault(), X((e4) => ez(e4, e4.zoom + 0.2))) : "-" === e3.key || "_" === e3.key ? (e3.preventDefault(), X((e4) => ez(e4, e4.zoom - 0.2))) : "0" === e3.key ? (e3.preventDefault(), X({ zoom: 1, x: 0, y: 0 })) : "Enter" === e3.key ? (e3.preventDefault(), eB()) : "Escape" === e3.key && (e3.preventDefault(), eF());
                    } : void 0,
                    children: [
                      eO ? (0, r.jsx)("img", {
                        className: x().ghost,
                        src: Q.url,
                        alt: "",
                        draggable: false,
                        style: eW("ghost")
                      }) : null,
                      (0, r.jsx)(l.PY1.div, {
                        className: x().clip,
                        initial: false,
                        animate: { scale: eH ? 0.9 : 1 },
                        transition: F ? { duration: 0 } : eH ? g.T.spring.smooth : g.T.spring.snappy,
                        children: (0, r.jsx)(s.N, {
                          initial: false,
                          children: eO ? (0, r.jsx)(
                            l.PY1.img,
                            {
                              className: x().cropImage,
                              src: Q.url,
                              alt: "",
                              draggable: false,
                              style: eW("sharp"),
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: {
                                duration: F ? 0 : g.T.duration.standard
                              }
                            },
                            `draft:${Q.url}`
                          ) : eq ? (0, r.jsx)(
                            l.PY1.img,
                            {
                              className: x().photo,
                              src: eQ,
                              alt: "",
                              draggable: false,
                              onError: () => ec(eQ),
                              initial: F ? { opacity: 0 } : {
                                opacity: 0,
                                filter: `blur(${g.T.blur.soft}px)`
                              },
                              animate: {
                                opacity: 1,
                                filter: "blur(0px)"
                              },
                              exit: { opacity: 0 },
                              transition: {
                                duration: F ? 0 : g.T.duration.standard,
                                ease: [...g.T.ease.enter]
                              }
                            },
                            `photo:${eQ}`
                          ) : (0, r.jsx)(
                            l.PY1.span,
                            {
                              className: x().initials,
                              style: { fontSize: Math.round(0.3 * z2) },
                              "aria-hidden": "true",
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: {
                                duration: F ? 0 : g.T.duration.standard
                              },
                              children: e2.trim().split(/\s+/).slice(0, 2).map((e3) => e3[0]?.toUpperCase()).join("")
                            },
                            "initials"
                          )
                        })
                      }),
                      eO || eH ? null : (0, r.jsx)("button", {
                        type: "button",
                        className: x().hit,
                        onClick: eb,
                        disabled: M2,
                        "aria-label": I ? `Change ${T2.toLowerCase()}` : `Upload ${T2.toLowerCase()}`,
                        children: (0, r.jsx)("span", {
                          className: x().hitIcon,
                          "aria-hidden": "true",
                          children: en ? (0, r.jsx)(u.A, {
                            size: 20,
                            strokeWidth: 1.75
                          }) : (0, r.jsx)(c.A, {
                            size: 20,
                            strokeWidth: 1.75
                          })
                        })
                      }),
                      eH ? (0, r.jsx)(k, {
                        progress: ea,
                        failed: "failed" === V,
                        reduced: F
                      }) : null,
                      (0, r.jsx)(N, { count: er, reduced: F })
                    ]
                  })
                ]
              }),
              (0, r.jsx)(l.PY1.div, {
                layout: "position",
                transition: { layout: eK },
                className: x().side,
                children: (0, r.jsxs)(
                  l.PY1.div,
                  {
                    className: x().sideContent,
                    initial: !F && { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: {
                      duration: g.T.duration.standard,
                      ease: [...g.T.ease.standard]
                    },
                    children: [
                      (0, r.jsx)("p", {
                        id: L,
                        className: x().title,
                        children: eO ? "Adjust photo" : T2
                      }),
                      eO ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)("p", {
                            className: x().hint,
                            children: "Drag to reposition. Scroll or pinch to zoom."
                          }),
                          (0, r.jsxs)("div", {
                            className: x().zoom,
                            children: [
                              (0, r.jsx)("button", {
                                type: "button",
                                className: x().zoomButton,
                                "aria-label": "Zoom out",
                                disabled: K.zoom <= 1,
                                onClick: () => X((e3) => ez(e3, e3.zoom - 0.25)),
                                children: (0, r.jsx)(d.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              }),
                              (0, r.jsx)("input", {
                                className: x().range,
                                type: "range",
                                min: 1,
                                max: 4,
                                step: 0.01,
                                value: K.zoom,
                                "aria-label": "Zoom",
                                "aria-valuetext": `${Math.round(100 * K.zoom)}%`,
                                style: {
                                  "--fill": `${(K.zoom - 1) / 3 * 100}%`
                                },
                                onPointerDown: () => J(true),
                                onPointerUp: () => J(false),
                                onBlur: () => J(false),
                                onChange: (e3) => {
                                  let a3 = Number(e3.target.value);
                                  X((e4) => ez(e4, a3));
                                }
                              }),
                              (0, r.jsx)("button", {
                                type: "button",
                                className: x().zoomButton,
                                "aria-label": "Zoom in",
                                disabled: K.zoom >= 4,
                                onClick: () => X((e3) => ez(e3, e3.zoom + 0.25)),
                                children: (0, r.jsx)(p.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              })
                            ]
                          }),
                          (0, r.jsxs)("div", {
                            className: x().actions,
                            children: [
                              (0, r.jsx)("button", {
                                type: "button",
                                className: x().solid,
                                onClick: () => void eB(),
                                children: "Save photo"
                              }),
                              (0, r.jsx)("button", {
                                type: "button",
                                className: x().ghostButton,
                                onClick: eF,
                                children: "Cancel"
                              })
                            ]
                          })
                        ]
                      }) : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(w, { message: eG, reduced: F }),
                          (0, r.jsx)("div", {
                            className: x().actions,
                            children: "uploading" === V ? (0, r.jsx)("button", {
                              type: "button",
                              className: x().outline,
                              onClick: eU,
                              children: "Cancel upload"
                            }) : "failed" === V ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("button", {
                                  type: "button",
                                  className: x().solid,
                                  onClick: () => {
                                    Z && eS(Z);
                                  },
                                  children: "Try again"
                                }),
                                (0, r.jsx)("button", {
                                  type: "button",
                                  className: x().ghostButton,
                                  onClick: eU,
                                  children: "Discard"
                                })
                              ]
                            }) : (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)("button", {
                                  ref: B,
                                  type: "button",
                                  className: x().outline,
                                  onClick: eb,
                                  disabled: M2,
                                  children: (0, r.jsxs)("span", {
                                    className: x().stack,
                                    children: [
                                      (0, r.jsx)("span", {
                                        "aria-hidden": "true",
                                        className: x().sizer,
                                        children: "Upload photo"
                                      }),
                                      (0, r.jsx)("span", {
                                        "aria-hidden": "true",
                                        className: x().sizer,
                                        children: "Replace photo"
                                      }),
                                      (0, r.jsx)("span", {
                                        children: I ? "Replace photo" : "Upload photo"
                                      })
                                    ]
                                  })
                                }),
                                (0, r.jsx)(s.N, {
                                  initial: false,
                                  mode: "popLayout",
                                  children: I && h2 ? (0, r.jsx)(
                                    l.PY1.button,
                                    {
                                      type: "button",
                                      className: x().ghostButton,
                                      onClick: function() {
                                        em(I), Y(void 0), h2?.(), ef(
                                          {
                                            tone: "hint",
                                            text: "Photo removed",
                                            key: `removed:${Date.now()}`
                                          },
                                          2200
                                        ), requestAnimationFrame(
                                          () => B.current?.focus(
                                            {
                                              preventScroll: true
                                            }
                                          )
                                        );
                                      },
                                      disabled: M2,
                                      initial: {
                                        opacity: 0,
                                        filter: `blur(${g.T.blur.subtle}px)`
                                      },
                                      animate: {
                                        opacity: 1,
                                        filter: "blur(0px)"
                                      },
                                      exit: {
                                        opacity: 0,
                                        filter: `blur(${g.T.blur.subtle}px)`
                                      },
                                      transition: {
                                        duration: F ? 0 : g.T.duration.fast
                                      },
                                      children: "Remove"
                                    },
                                    "remove"
                                  ) : null
                                })
                              ]
                            })
                          })
                        ]
                      })
                    ]
                  },
                  eO ? "crop" : "idle"
                )
              })
            ]
          })
        }),
        (0, r.jsx)("span", {
          className: x().srOnly,
          "aria-live": "polite",
          children: "uploading" === V && null !== eX && eX >= 25 ? `Uploading ${25 * Math.floor(eX / 25)}%` : ""
        })
      ]
    });
  });
  function j({ children: e2, reduced: a2 }) {
    let t2 = (0, i.useRef)(null), [n2, o2] = (0, i.useState)("auto");
    return (0, i.useEffect)(() => {
      let e3 = t2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(
        ([a4]) => o2(a4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight)
      );
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, r.jsx)(l.PY1.div, {
      className: x().autoHeight,
      initial: false,
      animate: { height: n2 },
      transition: a2 ? { duration: 0 } : g.T.spring.smooth,
      children: (0, r.jsx)("div", { ref: t2, children: e2 })
    });
  }
  function w({ message: e2, reduced: a2 }) {
    return (0, r.jsx)("div", {
      className: x().message,
      "aria-live": "polite",
      children: (0, r.jsx)(s.N, {
        initial: false,
        mode: "popLayout",
        children: (0, r.jsxs)(
          l.PY1.p,
          {
            className: x().messageText,
            "data-tone": e2.tone,
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: -4, filter: `blur(${g.T.blur.subtle}px)` },
            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: a2 ? { opacity: 0 } : {
              opacity: 0,
              y: 3,
              filter: `blur(${g.T.blur.subtle}px)`,
              transition: { duration: g.T.duration.instant }
            },
            transition: {
              duration: a2 ? 0 : g.T.duration.standard,
              ease: [...g.T.ease.enter]
            },
            children: [
              "error" === e2.tone ? (0, r.jsx)(h.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }) : "success" === e2.tone ? (0, r.jsx)(m.A, {
                size: 14,
                strokeWidth: 2,
                "aria-hidden": "true"
              }) : null,
              (0, r.jsx)("span", { children: e2.text })
            ]
          },
          e2.key
        )
      })
    });
  }
  function k({ progress: e2, failed: a2, reduced: t2 }) {
    return (0, r.jsxs)(l.PY1.svg, {
      className: x().ring,
      "data-state": a2 ? "failed" : null === e2 ? "waiting" : "progress",
      viewBox: "0 0 100 100",
      "aria-hidden": "true",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: t2 ? 0 : g.T.duration.fast },
      children: [
        (0, r.jsx)("circle", {
          className: x().ringTrack,
          cx: "50",
          cy: "50",
          r: "48",
          pathLength: 1
        }),
        (0, r.jsx)(l.PY1.circle, {
          className: x().ringValue,
          cx: "50",
          cy: "50",
          r: "48",
          initial: { pathLength: 0 },
          animate: { pathLength: null === e2 ? 0.22 : Math.max(0.02, e2) },
          transition: t2 ? { duration: 0 } : g.T.spring.smooth
        })
      ]
    });
  }
  function N({ count: e2, reduced: a2 }) {
    return !e2 || a2 ? null : (0, r.jsx)(
      l.PY1.svg,
      {
        className: x().ring,
        "data-state": "settle",
        viewBox: "0 0 100 100",
        "aria-hidden": "true",
        initial: { opacity: 1, scale: 1 },
        animate: { opacity: 0, scale: 1.12 },
        transition: {
          duration: g.T.duration.considered,
          ease: [...g.T.ease.enter]
        },
        children: (0, r.jsx)("circle", {
          className: x().ringValue,
          cx: "50",
          cy: "50",
          r: "48"
        })
      },
      e2
    );
  }
  var z = t(4345), C = t.n(z);
  let T = [
    {
      name: "Andre Williams",
      src: "media/people/portrait/andre-williams.svg"
    },
    { name: "Sofia Ramirez", src: "media/people/portrait/sofia-ramirez.svg" },
    { name: "Mateo Alvarez", src: "media/people/portrait/mateo-alvarez.svg" }
  ];
  function A() {
    let e2 = (0, i.useRef)(null), [a2, t2] = (0, i.useState)(false), [n2, o2] = (0, i.useState)(null);
    async function l2(a3, t3) {
      o2(a3);
      try {
        let r2 = await (await fetch(a3)).blob();
        e2.current?.selectFile(
          new File([r2], `${t3.toLowerCase().replace(/\s+/g, "-")}.jpg`, {
            type: "image/jpeg"
          })
        );
      } finally {
        o2(null);
      }
    }
    return (0, r.jsx)("div", {
      className: C().demo,
      children: (0, r.jsxs)("section", {
        className: C().card,
        "aria-labelledby": "avatar-upload-demo-title",
        children: [
          (0, r.jsxs)("div", {
            className: C().header,
            children: [
              (0, r.jsx)("h3", {
                id: "avatar-upload-demo-title",
                className: C().title,
                children: "Profile"
              }),
              (0, r.jsx)("p", {
                className: C().lede,
                children: "Click or drop a photo on the avatar. Uploads are simulated."
              })
            ]
          }),
          (0, r.jsx)(b, {
            ref: e2,
            name: "Chloe Nguyen",
            src: "media/people/portrait/chloe-nguyen.svg",
            onUpload: (e3, { report: r2, signal: i2 }) => (t2(false), new Promise((e4, t3) => {
              let n3 = performance.now(), o3 = 0, l3 = (i3) => {
                let s3 = Math.min(1, (i3 - n3) / 1900), u2 = 1 - Math.pow(1 - s3, 2.2);
                a2 && u2 > 0.62 ? t3(
                  Error(
                    "Upload failed. Your previous photo is unchanged."
                  )
                ) : (r2(u2), s3 < 1 ? o3 = requestAnimationFrame(l3) : e4());
              }, s2 = window.setTimeout(() => {
                o3 = requestAnimationFrame(l3);
              }, 380);
              i2.addEventListener("abort", () => {
                window.clearTimeout(s2), cancelAnimationFrame(o3), t3(new DOMException("Canceled", "AbortError"));
              });
            })),
            onRemove: () => void 0
          }),
          (0, r.jsxs)("div", {
            className: C().tools,
            children: [
              (0, r.jsxs)("div", {
                className: C().group,
                children: [
                  (0, r.jsx)("span", {
                    className: C().groupLabel,
                    id: "avatar-upload-samples",
                    children: "Sample photos"
                  }),
                  (0, r.jsx)("div", {
                    className: C().samples,
                    role: "group",
                    "aria-labelledby": "avatar-upload-samples",
                    children: T.map(
                      (e3) => (0, r.jsx)(
                        "button",
                        {
                          type: "button",
                          className: C().sample,
                          "aria-label": `Use photo of ${e3.name}`,
                          "data-loading": n2 === e3.src ? "" : void 0,
                          onClick: () => void l2(e3.src, e3.name),
                          children: (0, r.jsx)("img", {
                            src: e3.src,
                            alt: "",
                            width: 32,
                            height: 32
                          })
                        },
                        e3.src
                      )
                    )
                  })
                ]
              }),
              (0, r.jsxs)("div", {
                className: C().group,
                children: [
                  (0, r.jsx)("span", {
                    className: C().groupLabel,
                    children: "Try a failure"
                  }),
                  (0, r.jsxs)("div", {
                    className: C().chips,
                    children: [
                      (0, r.jsx)("button", {
                        type: "button",
                        className: C().chip,
                        onClick: () => e2.current?.selectFile(
                          new File(
                            [new Uint8Array(130023424e-1)],
                            "raw-portrait.jpg",
                            { type: "image/jpeg" }
                          )
                        ),
                        children: "12 MB photo"
                      }),
                      (0, r.jsx)("button", {
                        type: "button",
                        className: C().chip,
                        onClick: () => e2.current?.selectFile(
                          new File(["%PDF-1.7"], "headshot.pdf", {
                            type: "application/pdf"
                          })
                        ),
                        children: "PDF file"
                      }),
                      (0, r.jsxs)("button", {
                        type: "button",
                        className: C().chip,
                        "aria-pressed": a2,
                        onClick: () => t2((e3) => !e3),
                        children: [
                          (0, r.jsx)("span", {
                            className: C().check,
                            "aria-hidden": "true"
                          }),
                          "Fail next upload"
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  let M = A;
};

__m(__module,__exports,__require);
}