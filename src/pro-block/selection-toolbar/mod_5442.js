function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { m: () => B });
  var n = i(95155), a = i(12115), r = i(28245), s = i(92171), o = i(55809), l = i(25354), u = i(80642), d = i(18310), c = i(35484), p = i(7770), f = i(54210), h = i.n(f);
  let m = { kind: "idle" }, _ = {
    pressed: (e2) => ({
      scale: (e2.current?.offsetWidth ?? 0) > 220 ? 0.985 : 0.97,
      transition: {
        duration: p.T.duration.instant,
        ease: [...p.T.ease.standard]
      }
    })
  }, y = p.T.spring.morph, g = { duration: p.T.duration.instant }, x = `blur(${p.T.blur.soft}px)`, b = { duration: p.T.duration.standard, ease: [...p.T.ease.enter] }, w = { duration: p.T.duration.fast, ease: [...p.T.ease.standard] }, T = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, v = { ...T, opacity: 0 }, j = { opacity: 0, transition: g }, N = { opacity: 0, y: 4, filter: x }, k = { opacity: 0, y: -3, filter: x, transition: w }, $ = { opacity: 0, scale: 0.5, filter: x }, E = { ...$, transition: w }, P = { scale: p.T.spring.snappy, opacity: b, filter: b }, S = { ...$, clipPath: "inset(0% 100% 0% 0%)" }, R = { ...T, clipPath: "inset(0% 0% 0% 0%)" }, L = {
    scale: { type: "spring", visualDuration: 0.45, bounce: 0 },
    opacity: b,
    filter: b,
    clipPath: { duration: 0.36, ease: [...p.T.ease.standard], delay: 0.02 }
  }, Y = (e2, t2, i2 = 0) => e2.map((e3, n2) => ({ id: `${t2}:${n2}`, char: e3, order: n2, lead: i2 }));
  function z({ text: e2, gap: t2, reduced: i2 }) {
    let d2, c2, f2, m2 = (function(e3) {
      let [t3, i3] = (0, a.useState)(() => ({
        text: e3,
        seq: 0,
        glyphs: Y([...e3], 0)
      }));
      if (t3.text === e3) return t3.glyphs;
      let n2 = [...t3.text], r2 = [...e3], s2 = 0, o2 = 0;
      for (; s2 < n2.length && s2 < r2.length && n2[s2] === r2[s2]; ) s2++;
      for (; o2 < n2.length - s2 && o2 < r2.length - s2 && n2[n2.length - 1 - o2] === r2[r2.length - 1 - o2]; )
        o2++;
      s2 < 2 && (s2 = 0), o2 < 2 && (o2 = 0);
      let l2 = t3.seq + 1, u2 = [
        ...t3.glyphs.slice(0, s2),
        ...Y(r2.slice(s2, r2.length - o2), l2, 0.1 * !n2.length),
        ...t3.glyphs.slice(t3.glyphs.length - o2)
      ];
      return i3({ text: e3, seq: l2, glyphs: u2 }), u2;
    })(e2), _2 = (0, a.useRef)(null), x2 = `${+!!t2}${e2}`, w2 = (d2 = (0, r.d)("auto"), c2 = (0, a.useRef)(x2), f2 = (0, a.useRef)(0), (0, a.useLayoutEffect)(() => {
      c2.current !== x2 && (c2.current = x2, f2.current = performance.now() + 700);
    }, [x2]), (0, a.useEffect)(() => {
      let e3 = _2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = false, n2 = new ResizeObserver(([n3]) => {
        if (!n3) return;
        let a2 = n3.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth;
        if (!t3 || i2 || performance.now() > f2.current) {
          t3 = true, d2.jump(a2);
          return;
        }
        (0, s.i)(d2, a2, y);
      });
      return n2.observe(e3, { box: "border-box" }), () => n2.disconnect();
    }, [_2, i2, d2]), (0, o.G)(d2, (e3) => "number" == typeof e3 ? Math.max(0, e3) : e3));
    return (0, n.jsx)(l.PY1.span, {
      className: h().morph,
      style: { width: w2 },
      "aria-hidden": "true",
      children: (0, n.jsx)("span", {
        ref: _2,
        className: h().glyphs,
        "data-gap": t2 || void 0,
        children: (0, n.jsx)(u.N, {
          mode: "popLayout",
          initial: false,
          children: m2.map(
            (e3) => (0, n.jsx)(
              l.PY1.span,
              {
                className: h().glyph,
                layout: !i2 && "position",
                layoutDependency: x2,
                initial: i2 ? v : N,
                animate: T,
                exit: i2 ? j : k,
                transition: i2 ? g : {
                  ...b,
                  delay: e3.lead + Math.min(e3.order * p.T.stagger.char, 0.12),
                  layout: y
                },
                children: e3.char
              },
              e3.id
            )
          )
        })
      })
    });
  }
  function B({
    states: e2,
    value: t2,
    defaultValue: i2,
    onValueChange: o2,
    onAction: f2,
    failureLabel: x2 = "Try again",
    size: b2 = "md",
    className: w2,
    disabled: N2,
    style: k2,
    ...Y2
  }) {
    let D = e2[0]?.id ?? "", [M, O] = (0, a.useState)(i2 ?? D), [I, W] = (0, a.useState)(m), [q, C] = (0, a.useState)(""), A = (0, a.useRef)(null), F = (0, a.useRef)(0), V = (0, d.I)() ?? false, G = t2 ?? M, X = Math.max(
      0,
      e2.findIndex((e3) => e3.id === G)
    ), H = e2[X] ?? e2[0], Q = e2[(X + 1) % e2.length] ?? H, Z = N2 || e2.length < 2, K = "working" === I.kind, U = "working" === I.kind && !I.target.pendingLabel;
    function J(e3) {
      W(m), void 0 === t2 && O(e3.id), C(e3.label), o2?.(e3.id, e3);
    }
    function ee() {
      W({ kind: "failed" }), C(x2);
    }
    let et = (0, a.useRef)({ commit: J, nextState: Q });
    (0, a.useLayoutEffect)(() => {
      et.current = { commit: J, nextState: Q };
    }), (0, a.useEffect)(
      () => () => {
        F.current += 1;
      },
      []
    );
    let ei = "idle" === I.kind ? H?.holdFor : void 0;
    (0, a.useEffect)(() => {
      if (!ei) return;
      let e3 = window.setTimeout(() => {
        let { commit: e4, nextState: t3 } = et.current;
        t3 && e4(t3);
      }, ei);
      return () => window.clearTimeout(e3);
    }, [ei, H?.id]), (0, a.useEffect)(() => {
      if ("failed" !== I.kind) return;
      let e3 = window.setTimeout(() => W(m), 1800);
      return () => window.clearTimeout(e3);
    }, [I]);
    let en = (0, r.d)(+!!U);
    if ((0, a.useEffect)(() => {
      (0, s.i)(en, +!!U, V ? { duration: 0 } : y);
    }, [en, U, V]), !H)
      return null;
    let ea = "working" === I.kind ? {
      key: "working",
      label: I.target.pendingLabel ?? "",
      icon: (0, n.jsx)("span", { className: h().spinner }),
      tone: H.tone ?? "neutral"
    } : "failed" === I.kind ? {
      key: "failed",
      label: x2,
      icon: (0, n.jsx)(c.A, { size: 16, strokeWidth: 1.75 }),
      tone: "danger"
    } : {
      key: `state:${H.id}`,
      label: H.label,
      icon: H.icon,
      tone: H.tone ?? "neutral"
    }, er = "success" === ea.tone && !V;
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsxs)(l.PY1.button, {
          ...Y2,
          ref: A,
          type: Y2.type ?? "button",
          tabIndex: Y2.tabIndex ?? 0,
          className: [h().button, h()[b2], h()[ea.tone], w2].filter(Boolean).join(" "),
          style: { ...k2, "--fold": en },
          disabled: Z,
          "aria-disabled": K || void 0,
          "aria-busy": K || void 0,
          "aria-label": ea.label || H.label,
          "data-phase": I.kind,
          onClick: function() {
            let e3;
            if (!H || !Q || Z || K) return;
            let t3 = ++F.current;
            try {
              e3 = f2?.(Q, H);
            } catch {
              ee();
              return;
            }
            if (!e3 || "function" != typeof e3.then) return void J(Q);
            W({ kind: "working", target: Q }), C(Q.pendingLabel ?? "Working");
            let i3 = performance.now(), n2 = (e4) => window.setTimeout(
              () => {
                F.current === t3 && e4();
              },
              Math.max(0, 450 - (performance.now() - i3))
            );
            e3.then(
              () => n2(() => J(Q)),
              () => n2(ee)
            );
          },
          custom: A,
          variants: _,
          whileTap: V || Z || K ? void 0 : "pressed",
          transition: p.T.spring.snappy,
          children: [
            (0, n.jsx)(l.PY1.span, {
              className: h().icon,
              "aria-hidden": "true",
              initial: false,
              animate: { width: 16 * !!ea.icon },
              transition: V ? { duration: 0 } : p.T.spring.smooth,
              children: (0, n.jsx)(u.N, {
                initial: false,
                children: ea.icon ? (0, n.jsx)(
                  l.PY1.span,
                  {
                    className: h().iconPhase,
                    "data-tone": ea.tone,
                    initial: V ? v : er ? S : $,
                    animate: er ? R : T,
                    exit: V ? j : E,
                    transition: V ? g : er ? L : P,
                    children: ea.icon
                  },
                  ea.key
                ) : null
              })
            }),
            (0, n.jsx)(z, {
              text: ea.label,
              gap: !!ea.icon && ea.label.length > 0,
              reduced: V
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: h().srOnly,
          role: "status",
          "aria-live": "polite",
          children: q
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}