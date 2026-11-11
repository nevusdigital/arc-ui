function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => k, q: () => j });
  var n = a(95155), r = a(12115), i = a(55809), s = a(25354), l = a(28245), o = a(92171), d = a(61792), u = a(18310), c = a(80642), p = a(7770), _ = a(52700), m = a.n(_);
  let f = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], y = {
    hidden: { opacity: 0, y: "0.3em", filter: `blur(${p.T.blur.soft}px)` },
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: p.T.duration.standard,
        ease: [...p.T.ease.enter]
      }
    },
    gone: {
      opacity: 0,
      y: "-0.3em",
      filter: `blur(${p.T.blur.subtle}px)`,
      transition: {
        duration: p.T.duration.fast,
        ease: [...p.T.ease.standard]
      }
    }
  }, b = {
    hidden: { opacity: 0, y: 0, filter: "blur(0px)" },
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: p.T.duration.instant }
    },
    gone: {
      opacity: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: p.T.duration.instant }
    }
  }, h = { ...p.T.spring.smooth, visualDuration: p.T.duration.considered };
  function g({ position: e2, digit: t2 }) {
    let a2 = (0, i.G)(e2, (e3) => ((t2 - e3) % 10 + 15) % 10 - 5), r2 = (0, i.G)(a2, (e3) => `${e3}em`), l2 = (0, i.G)(a2, (e3) => Math.max(0, 1 - Math.abs(e3))), o2 = (0, i.G)(a2, (e3) => Math.abs(e3) >= 1 ? "hidden" : "visible"), d2 = (0, i.G)(
      a2,
      (e3) => 0.02 > Math.abs(e3) || Math.abs(e3) >= 1 ? "none" : `blur(${(Math.abs(e3) * p.T.blur.subtle).toFixed(2)}px)`
    );
    return (0, n.jsx)(s.PY1.span, {
      className: m().glyph,
      style: { y: r2, opacity: l2, filter: d2, visibility: o2 },
      children: t2
    });
  }
  let x = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 }
  };
  function v({ digit: e2, direction: t2, armed: a2, delay: i2, reduceMotion: d2 }) {
    let u2 = (0, l.d)(a2 ? 0 : e2), c2 = (0, r.useRef)({ digit: a2 ? 0 : e2, target: a2 ? 0 : e2, revealed: !a2 });
    return (0, r.useEffect)(() => {
      let n2 = c2.current;
      if (a2 || n2.digit === e2) {
        a2 || (n2.revealed = true);
        return;
      }
      n2.target += t2 < 0 && n2.revealed ? -((n2.digit - e2 + 10) % 10) : (e2 - n2.digit + 10) % 10, n2.digit = e2, d2 ? u2.jump(n2.target) : (0, o.i)(
        u2,
        n2.target,
        n2.revealed ? p.T.spring.smooth : { ...h, delay: i2 }
      ), n2.revealed = true;
    }, [a2, i2, e2, t2, u2, d2]), (0, n.jsxs)(s.PY1.span, {
      className: m().column,
      ...x,
      transition: d2 ? { duration: 0 } : p.T.spring.morph,
      children: [
        (0, n.jsx)("span", { className: m().sizer, children: "0" }),
        f.map((e3) => (0, n.jsx)(g, { position: u2, digit: e3 }, e3))
      ]
    });
  }
  function j({
    value: e2,
    label: t2,
    prefix: a2 = "",
    suffix: i2 = "",
    decimals: l2 = 0,
    animateOnView: o2 = false,
    locale: _2 = "en-US"
  }) {
    let f2, h2, g2, k2, T = (0, r.useRef)(null), N = (0, d.W)(T, { once: true, amount: 0.6 }), w = !!(0, u.I)(), [M, A] = (0, r.useState)(e2), [E, z] = (0, r.useState)(1);
    e2 !== M && (A(e2), z(e2 > M ? 1 : -1));
    let S = (h2 = (f2 = new Intl.NumberFormat(_2, {
      minimumFractionDigits: l2,
      maximumFractionDigits: l2,
      numberingSystem: "latn"
    }).formatToParts(e2)).reduce(
      (e3, t3) => e3 + ("integer" === t3.type ? t3.value.length : 0),
      0
    ), g2 = 0, k2 = 0, f2.flatMap(
      (e3, t3) => "integer" === e3.type ? [...e3.value].map((e4) => ({
        key: `i${--h2}`,
        digit: Number(e4),
        order: k2++
      })) : "fraction" === e3.type ? [...e3.value].map((e4) => ({
        key: `f${g2++}`,
        digit: Number(e4),
        order: k2++
      })) : [
        {
          key: "group" === e3.type ? `g${h2}` : "decimal" === e3.type ? "d" : `${e3.type}${t3}`,
          text: e3.value
        }
      ]
    )), $ = `${a2}${S.map((e3) => "text" in e3 ? e3.text : e3.digit).join("")}${i2}`, R = o2 && !N;
    return (0, n.jsxs)("span", {
      ref: T,
      className: m().counter,
      children: [
        t2 && (0, n.jsx)("span", {
          className: m().label,
          children: (0, n.jsx)("span", {
            className: m().labelSwap,
            children: (0, n.jsx)(c.N, {
              mode: "popLayout",
              initial: false,
              children: (0, n.jsx)(
                s.PY1.span,
                {
                  className: m().labelText,
                  variants: w ? b : y,
                  initial: "hidden",
                  animate: "shown",
                  exit: "gone",
                  children: t2
                },
                t2
              )
            })
          })
        }),
        (0, n.jsx)("span", { className: m().srOnly, children: $ }),
        (0, n.jsxs)("span", {
          className: m().value,
          "aria-hidden": "true",
          children: [
            a2 && (0, n.jsx)("span", { className: m().symbol, children: a2 }),
            (0, n.jsx)(c.N, {
              initial: false,
              children: S.map(
                (e3) => "digit" in e3 ? (0, n.jsx)(
                  v,
                  {
                    digit: e3.digit,
                    direction: E,
                    armed: R,
                    delay: Math.min(e3.order * p.T.stagger.item, 0.25),
                    reduceMotion: w
                  },
                  e3.key
                ) : (0, n.jsx)(
                  s.PY1.span,
                  {
                    className: m().symbol,
                    ...x,
                    transition: w ? { duration: 0 } : p.T.spring.morph,
                    children: e3.text
                  },
                  e3.key
                )
              )
            }),
            i2 && (0, n.jsx)("span", { className: m().symbol, children: i2 })
          ]
        })
      ]
    });
  }
  let k = j;
}

__m(__module,__exports,__require);
}