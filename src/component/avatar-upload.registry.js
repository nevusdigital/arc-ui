/* avatar-upload (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(4345, ".demo{display:grid;width:100%;max-width:560px;margin-inline:auto}\n.card{display:grid;gap:var(--space-5);min-width:0;padding:var(--space-6);border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);box-shadow:var(--shadow-resting)}\n@media (max-width:480px){.card{padding:var(--space-5) var(--space-4);border-radius:var(--radius-panel)}\n.header{display:grid;gap:var(--space-1)}\n.title{margin:0;font-family:var(--font-body);font-size:var(--text-lg);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.lede{margin:0;color:var(--text-muted);font-size:var(--text-sm)}\n.tools{display:flex;flex-wrap:wrap;gap:var(--space-4) var(--space-6);padding-top:var(--space-5);border-top:1px solid var(--border-subtle)}\n.group{display:grid;gap:var(--space-2);min-width:0}\n.groupLabel{color:var(--text-muted);font-size:var(--text-xs)}\n.samples{display:flex;gap:var(--space-2)}\n.sample{display:grid;width:36px;height:36px;padding:0;overflow:hidden;border:1px solid var(--border);border-radius:50%;background:var(--surface-muted);cursor:pointer;transition:transform var(--duration-spring) var(--ease-spring),opacity var(--duration-fast) var(--ease-standard)}\n.sample img{width:100%;height:100%;object-fit:cover}\n@media (hover:hover) and (pointer:fine){.sample:hover{transform:scale(1.06)}\n.sample:active{transform:scale(.94);transition-duration:.1s,var(--duration-fast)}\n.sample[data-loading]{opacity:.5}\n@media (prefers-reduced-motion:reduce){.check,.chip,.sample{transition:none}\n.sample:active,.sample:hover{transform:none}\n.chips{display:flex;flex-wrap:wrap;gap:var(--space-2)}\n.chip{display:inline-flex;height:32px;align-items:center;gap:var(--space-2);padding:0 var(--space-3);border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--text-secondary);font:inherit;font-size:var(--text-xs);font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.chip:hover{background:var(--surface-muted);color:var(--foreground)}\n.chip[aria-pressed=true]{border-color:var(--border-strong);color:var(--foreground)}\n.chip[aria-pressed=true] .check{border-color:var(--control-on);background:var(--control-on)}\n.chip[aria-pressed=true] .check:after{position:absolute;top:2px;left:4px;width:3px;height:6px;border:solid var(--control-glyph);border-width:0 1.5px 1.5px 0;content:\"\";transform:rotate(45deg)}\n.check{position:relative;width:14px;height:14px;border:1px solid var(--border-strong);border-radius:4px;background:var(--surface);transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}", {"demo":"demo","card":"card","header":"header","title":"title","lede":"lede","tools":"tools","group":"group","groupLabel":"groupLabel","samples":"samples","sample":"sample","check":"check","chip":"chip","chips":"chips"});
A.reg(14326, function(__module,__exports,__require){
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
});
A.reg(24161, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var r = t(51811);
  let i = {
    name: "image-plus",
    size: 24,
    node: [
      ["path", { d: "M16 5h6", key: "1vod17" }],
      ["path", { d: "M19 2v6", key: "4bpg5p" }],
      [
        "path",
        {
          d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
          key: "1ue2ih"
        }
      ],
      [
        "path",
        { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }
      ],
      ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
    ]
  };
  i.node;
  let n = (0, r.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(29572, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var r = t(51811);
  let i = {
    name: "camera",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
          key: "18u6gg"
        }
      ],
      ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
    ]
  };
  i.node;
  let n = (0, r.A)(i);
}

__m(__module,__exports,__require);
});
A.regCss(62265, ".avatar-upload_root__LLBiK{position:relative;width:100%;min-width:0;container-type:inline-size;color:var(--foreground);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body)}.avatar-upload_file__a5FIK{display:none}.avatar-upload_autoHeight__c7Pqn{margin:-12px;overflow:hidden}.avatar-upload_autoHeight__c7Pqn>div{padding:12px}.avatar-upload_layout__FjhFd{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:var(--space-5)}.avatar-upload_layout__FjhFd[data-mode=crop]{grid-template-columns:248px minmax(0,1fr);gap:var(--space-6)}.avatar-upload_stage__z4pGT{position:relative;display:grid;place-items:center;min-width:0;border-radius:var(--radius-panel)}.avatar-upload_layout__FjhFd[data-mode=crop] .avatar-upload_stage__z4pGT{height:248px;overflow:hidden;cursor:grab;touch-action:none;user-select:none}.avatar-upload_layout__FjhFd[data-mode=crop] .avatar-upload_stage__z4pGT:active{cursor:grabbing}.avatar-upload_stageBackdrop__MQ1QW{position:absolute;inset:0;border-radius:inherit;background:var(--surface-muted);pointer-events:none}.avatar-upload_circle__gbfFW{position:relative;flex:0 0 auto;border-radius:50%}.avatar-upload_clip___AykV{position:absolute;inset:0;overflow:hidden;border-radius:50%;background:var(--surface-muted)}.avatar-upload_clip___AykV:after{position:absolute;z-index:2;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px oklch(0 0 0/.08);content:\"\";pointer-events:none}.avatar-upload_layout__FjhFd[data-mode=crop] .avatar-upload_clip___AykV:after{box-shadow:inset 0 0 0 1.5px oklch(100% 0 0/.7),0 0 0 1px oklch(0 0 0/.08)}.avatar-upload_clip___AykV:before{position:absolute;z-index:1;inset:0;background:oklch(0 0 0/.3);content:\"\";opacity:0;pointer-events:none;transition:opacity var(--duration-standard) var(--ease-standard)}.avatar-upload_circle__gbfFW[data-busy] .avatar-upload_clip___AykV:before{opacity:1}.avatar-upload_cropImage__dXXD7,.avatar-upload_ghost__Mn_BL{position:absolute;top:50%;left:50%;max-width:none;pointer-events:none;user-select:none;-webkit-user-drag:none}.avatar-upload_ghost__Mn_BL{transition:opacity var(--duration-standard) var(--ease-standard)}.avatar-upload_photo__tD9nV{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;user-select:none}.avatar-upload_initials__trjBJ{position:absolute;inset:0;display:grid;place-items:center;color:var(--text-secondary);font-weight:500;letter-spacing:0}.avatar-upload_hit__Pdu__{position:absolute;z-index:3;inset:0;display:grid;place-items:center;padding:0;border:0;border-radius:50%;background:transparent;color:oklch(100% 0 0);cursor:pointer}.avatar-upload_hit__Pdu__:before{position:absolute;inset:0;border-radius:inherit;background:oklch(0 0 0/.38);content:\"\";opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}.avatar-upload_hitIcon__cBQYm{position:relative;display:grid;opacity:0;transform:scale(.85);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}@media (hover:hover) and (pointer:fine){.avatar-upload_hit__Pdu__:hover:not(:disabled) .avatar-upload_hitIcon__cBQYm,.avatar-upload_hit__Pdu__:hover:not(:disabled):before{opacity:1;transform:none}}.avatar-upload_hit__Pdu__:focus-visible .avatar-upload_hitIcon__cBQYm,.avatar-upload_hit__Pdu__:focus-visible:before,.avatar-upload_root__LLBiK[data-dragging] .avatar-upload_hitIcon__cBQYm,.avatar-upload_root__LLBiK[data-dragging] .avatar-upload_hit__Pdu__:before{opacity:1;transform:none}.avatar-upload_hit__Pdu__:disabled{cursor:not-allowed}.avatar-upload_circle__gbfFW:after{position:absolute;inset:-6px;border:1.5px dashed var(--accent);border-radius:50%;content:\"\";opacity:0;pointer-events:none;transform:scale(.94);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}.avatar-upload_root__LLBiK[data-dragging] .avatar-upload_circle__gbfFW:after{opacity:1;transform:none}.avatar-upload_ring__Bmx8J{position:absolute;z-index:4;inset:-6px;width:calc(100% + 12px);height:calc(100% + 12px);overflow:visible;pointer-events:none;rotate:-90deg}.avatar-upload_ring__Bmx8J circle{fill:none;stroke-width:2;vector-effect:non-scaling-stroke}.avatar-upload_ringTrack__s82Ow{stroke:var(--border)}.avatar-upload_ringValue__xHtRK{stroke:var(--accent);stroke-linecap:round;transition:stroke var(--duration-fast) var(--ease-standard)}.avatar-upload_ring__Bmx8J[data-state=waiting]{animation:avatar-upload_avatar-upload-spin__vagCw 1s linear infinite}.avatar-upload_ring__Bmx8J[data-state=failed] .avatar-upload_ringValue__xHtRK{stroke:var(--danger)}.avatar-upload_ring__Bmx8J[data-state=settle] .avatar-upload_ringValue__xHtRK{stroke:var(--accent)}.avatar-upload_side__QUIFC{display:grid;align-content:center;min-width:0}.avatar-upload_sideContent__20Gst{display:grid;min-width:0}.avatar-upload_title__jPCsH{margin:0;color:var(--foreground);font-size:var(--text-sm);font-weight:500}.avatar-upload_hint__4u6eQ{margin:var(--space-1) 0 0;color:var(--text-muted);font-size:var(--text-xs)}.avatar-upload_message__Oin0t{display:grid;min-height:calc(var(--text-xs) * 1.4);margin-top:var(--space-1);font-size:var(--text-xs)}.avatar-upload_messageText__a_mhC{display:flex;grid-area:1/1;align-items:flex-start;gap:var(--space-1);min-width:0;margin:0;color:var(--text-muted)}.avatar-upload_messageText__a_mhC>svg{flex:0 0 auto;margin-top:2px}.avatar-upload_messageText__a_mhC>span{min-width:0;overflow-wrap:anywhere}.avatar-upload_messageText__a_mhC[data-tone=error]{color:var(--danger)}.avatar-upload_messageText__a_mhC[data-tone=success]{color:var(--success)}.avatar-upload_number__xpFh1{font-variant-numeric:tabular-nums}.avatar-upload_actions__v_PpJ{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-2);margin-top:var(--space-3)}.avatar-upload_ghostButton__7yBMM,.avatar-upload_outline__cy2rD,.avatar-upload_solid__vbymq{display:inline-flex;height:var(--control-height-sm);align-items:center;justify-content:center;padding:0 var(--space-4);border:1px solid transparent;border-radius:var(--radius-control);font:inherit;font-size:var(--text-sm);font-weight:500;white-space:nowrap;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}.avatar-upload_outline__cy2rD{border-color:var(--border-strong);background:var(--surface);color:var(--foreground)}.avatar-upload_solid__vbymq{background:var(--accent);color:var(--accent-foreground)}.avatar-upload_ghostButton__7yBMM{padding:0 var(--space-3);background:transparent;color:var(--text-secondary)}@media (hover:hover) and (pointer:fine){.avatar-upload_outline__cy2rD:hover:not(:disabled){background:var(--surface-muted)}}@media (hover:hover) and (pointer:fine){.avatar-upload_solid__vbymq:hover:not(:disabled){background:var(--accent-strong)}}@media (hover:hover) and (pointer:fine){.avatar-upload_ghostButton__7yBMM:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}}.avatar-upload_ghostButton__7yBMM:active:not(:disabled),.avatar-upload_outline__cy2rD:active:not(:disabled),.avatar-upload_solid__vbymq:active:not(:disabled){transform:scale(.97);transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-fast),.1s}:is(.avatar-upload_outline__cy2rD,.avatar-upload_solid__vbymq,.avatar-upload_ghostButton__7yBMM):disabled{cursor:not-allowed;opacity:.5}.avatar-upload_stack__OrW_R{display:grid;justify-items:center}.avatar-upload_stack__OrW_R>span{grid-area:1/1}.avatar-upload_sizer__gjsmp{visibility:hidden}.avatar-upload_zoom__M7JyV{display:flex;max-width:280px;align-items:center;gap:var(--space-2);margin-top:var(--space-4)}.avatar-upload_zoomButton__Ohn6b{display:grid;width:30px;height:30px;flex:0 0 auto;place-items:center;padding:0;border:0;border-radius:10px;background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.avatar-upload_zoomButton__Ohn6b:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}}.avatar-upload_zoomButton__Ohn6b:disabled{cursor:default;opacity:.4}.avatar-upload_range__Fjvdf{--fill:0%;flex:1;min-width:0;height:22px;margin:0;background:transparent;appearance:none;-webkit-appearance:none;cursor:pointer}.avatar-upload_range__Fjvdf::-webkit-slider-runnable-track{height:4px;border-radius:2px;background:linear-gradient(to right,var(--control-fill) var(--fill),var(--control-track) var(--fill))}.avatar-upload_range__Fjvdf::-moz-range-track{height:4px;border-radius:2px;background:linear-gradient(to right,var(--control-fill) var(--fill),var(--control-track) var(--fill))}.avatar-upload_range__Fjvdf::-webkit-slider-thumb{width:18px;height:18px;margin-top:-7px;border:0;border-radius:50%;background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);appearance:none;-webkit-appearance:none;transition:scale var(--duration-fast) var(--ease-standard)}.avatar-upload_range__Fjvdf::-moz-range-thumb{width:18px;height:18px;border:0;border-radius:50%;background:var(--control-thumb);box-shadow:var(--control-thumb-shadow)}.avatar-upload_range__Fjvdf:active::-webkit-slider-thumb{scale:1.12}.avatar-upload_srOnly__kxhOd{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes avatar-upload_avatar-upload-spin__vagCw{to{transform:rotate(1turn)}}@media (prefers-reduced-motion:reduce){.avatar-upload_circle__gbfFW:after,.avatar-upload_clip___AykV:before,.avatar-upload_ghostButton__7yBMM,.avatar-upload_ghost__Mn_BL,.avatar-upload_hitIcon__cBQYm,.avatar-upload_hit__Pdu__:before,.avatar-upload_outline__cy2rD,.avatar-upload_ringValue__xHtRK,.avatar-upload_solid__vbymq,.avatar-upload_zoomButton__Ohn6b{transition:none}}@media (prefers-reduced-motion:reduce){.avatar-upload_ring__Bmx8J[data-state=waiting]{animation-duration:3s}}@media (prefers-reduced-motion:reduce){.avatar-upload_ghostButton__7yBMM:active:not(:disabled),.avatar-upload_outline__cy2rD:active:not(:disabled),.avatar-upload_solid__vbymq:active:not(:disabled){transform:none}}@media (prefers-reduced-motion:reduce){.avatar-upload_range__Fjvdf::-webkit-slider-thumb{transition:none}}", {"root":"avatar-upload_root__LLBiK","file":"avatar-upload_file__a5FIK","autoHeight":"avatar-upload_autoHeight__c7Pqn","layout":"avatar-upload_layout__FjhFd","stage":"avatar-upload_stage__z4pGT","stageBackdrop":"avatar-upload_stageBackdrop__MQ1QW","circle":"avatar-upload_circle__gbfFW","clip":"avatar-upload_clip___AykV","ghost":"avatar-upload_ghost__Mn_BL","cropImage":"avatar-upload_cropImage__dXXD7","photo":"avatar-upload_photo__tD9nV","initials":"avatar-upload_initials__trjBJ","hit":"avatar-upload_hit__Pdu__","hitIcon":"avatar-upload_hitIcon__cBQYm","ring":"avatar-upload_ring__Bmx8J","ringTrack":"avatar-upload_ringTrack__s82Ow","ringValue":"avatar-upload_ringValue__xHtRK","avatar-upload-spin":"avatar-upload_avatar-upload-spin__vagCw","side":"avatar-upload_side__QUIFC","sideContent":"avatar-upload_sideContent__20Gst","title":"avatar-upload_title__jPCsH","hint":"avatar-upload_hint__4u6eQ","message":"avatar-upload_message__Oin0t","messageText":"avatar-upload_messageText__a_mhC","number":"avatar-upload_number__xpFh1","actions":"avatar-upload_actions__v_PpJ","outline":"avatar-upload_outline__cy2rD","solid":"avatar-upload_solid__vbymq","ghostButton":"avatar-upload_ghostButton__7yBMM","stack":"avatar-upload_stack__OrW_R","sizer":"avatar-upload_sizer__gjsmp","zoom":"avatar-upload_zoom__M7JyV","zoomButton":"avatar-upload_zoomButton__Ohn6b","range":"avatar-upload_range__Fjvdf","srOnly":"avatar-upload_srOnly__kxhOd"});
A.cssFor("avatar-upload", [4345,62265]);
A.item("avatar-upload", {entry:14326, export:"AvatarUploadDemo", kind:"component", tier:"pro", unresolved:[]});
})();