function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { N: () => k });
  var r = n(95155), o = n(12115), i = n(39551), s = n(28819), a = n(65239), l = n(15131), u = n(78757), d = n(24866);
  function c(e2, t2) {
    if ("function" == typeof e2) return e2(t2);
    null != e2 && (e2.current = t2);
  }
  class h extends o.Component {
    getSnapshotBeforeUpdate(e2) {
      let t2 = this.props.childRef.current;
      if ((0, u.s)(t2) && e2.isPresent && !this.props.isPresent && false !== this.props.pop) {
        let e3 = t2.offsetParent, n2 = (0, u.s)(e3) && e3.offsetWidth || 0, r2 = (0, u.s)(e3) && e3.offsetHeight || 0, o2 = getComputedStyle(t2), i2 = this.props.sizeRef.current;
        i2.height = parseFloat(o2.height), i2.width = parseFloat(o2.width), i2.top = t2.offsetTop, i2.left = t2.offsetLeft, i2.right = n2 - i2.width - i2.left, i2.bottom = r2 - i2.height - i2.top, i2.direction = o2.direction;
      }
      return null;
    }
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  }
  function f({
    children: e2,
    isPresent: t2,
    anchorX: n2,
    anchorY: i2,
    root: s2,
    pop: a2
  }) {
    let l2 = (0, o.useId)(), u2 = (0, o.useRef)(null), p2 = (0, o.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr"
    }), { nonce: g2 } = (0, o.useContext)(d.Q), m2 = (function(...e3) {
      return o.useCallback(
        /* @__PURE__ */ (function(...e4) {
          return (t3) => {
            let n3 = false, r2 = e4.map((e5) => {
              let r3 = c(e5, t3);
              return n3 || "function" != typeof r3 || (n3 = true), r3;
            });
            if (n3)
              return () => {
                for (let t4 = 0; t4 < r2.length; t4++) {
                  let n4 = r2[t4];
                  "function" == typeof n4 ? n4() : c(e4[t4], null);
                }
              };
          };
        })(...e3),
        e3
      );
    })(u2, false !== a2 ? e2.props?.ref ?? e2?.ref : void 0);
    return (0, o.useInsertionEffect)(() => {
      let {
        width: e3,
        height: r2,
        top: o2,
        left: d2,
        right: c2,
        bottom: h2,
        direction: f2
      } = p2.current;
      if (t2 || false === a2 || !u2.current || !e3 || !r2) return;
      let m3 = "rtl" === f2, y2 = "left" === n2 ? m3 ? `right: ${c2}` : `left: ${d2}` : m3 ? `left: ${d2}` : `right: ${c2}`, v2 = "bottom" === i2 ? `bottom: ${h2}` : `top: ${o2}`;
      u2.current.dataset.motionPopId = l2;
      let k2 = document.createElement("style");
      g2 && (k2.nonce = g2);
      let x = s2 ?? document.head;
      return x.appendChild(k2), k2.sheet && k2.sheet.insertRule(`
          [data-motion-pop-id="${l2}"] {
            position: absolute !important;
            width: ${e3}px !important;
            height: ${r2}px !important;
            ${y2}px !important;
            ${v2}px !important;
          }
        `), () => {
        u2.current?.removeAttribute("data-motion-pop-id"), x.contains(k2) && x.removeChild(k2);
      };
    }, [t2]), (0, r.jsx)(h, {
      isPresent: t2,
      childRef: u2,
      sizeRef: p2,
      pop: a2,
      children: false === a2 ? e2 : o.cloneElement(e2, { ref: m2 })
    });
  }
  let p = ({
    children: e2,
    initial: t2,
    isPresent: n2,
    onExitComplete: i2,
    custom: u2,
    presenceAffectsLayout: d2,
    mode: c2,
    anchorX: h2,
    anchorY: p2,
    root: m2
  }) => {
    let y2 = (0, s.M)(g), v2 = (0, o.useId)(), k2 = (0, o.useRef)(n2), x = (0, o.useRef)(i2);
    (0, a.E)(() => {
      k2.current = n2, x.current = i2;
    });
    let M = true, w = (0, o.useMemo)(
      () => (M = false, {
        id: v2,
        initial: t2,
        isPresent: n2,
        custom: u2,
        onExitComplete: (e3) => {
          for (let t3 of (y2.set(e3, true), y2.values())) if (!t3) return;
          i2 && i2();
        },
        register: (e3) => (y2.set(e3, false), () => {
          y2.delete(e3), k2.current || y2.size || x.current?.();
        })
      }),
      [n2, y2, i2]
    );
    return d2 && M && (w = { ...w }), (0, o.useMemo)(() => {
      y2.forEach((e3, t3) => y2.set(t3, false));
    }, [n2]), o.useEffect(() => {
      n2 || y2.size || !i2 || i2();
    }, [n2]), e2 = (0, r.jsx)(f, {
      pop: "popLayout" === c2,
      isPresent: n2,
      anchorX: h2,
      anchorY: p2,
      root: m2,
      children: e2
    }), (0, r.jsx)(l.t.Provider, { value: w, children: e2 });
  };
  function g() {
    return /* @__PURE__ */ new Map();
  }
  var m = n(79196);
  let y = (e2) => e2.key || "";
  function v(e2) {
    let t2 = [];
    return o.Children.forEach(e2, (e3) => {
      (0, o.isValidElement)(e3) && t2.push(e3);
    }), t2;
  }
  let k = ({
    children: e2,
    custom: t2,
    initial: n2 = true,
    onExitComplete: l2,
    presenceAffectsLayout: u2 = true,
    mode: d2 = "sync",
    propagate: c2 = false,
    anchorX: h2 = "left",
    anchorY: f2 = "top",
    root: g2
  }) => {
    let [k2, x] = (0, m.xQ)(c2), M = (0, o.useMemo)(() => v(e2), [e2]), w = c2 && !k2 ? [] : M.map(y), A = (0, o.useRef)(true), C = (0, o.useRef)(M), b = (0, s.M)(() => /* @__PURE__ */ new Map()), j = (0, o.useRef)(/* @__PURE__ */ new Set()), [D, R] = (0, o.useState)(M), [z, P] = (0, o.useState)(M);
    (0, a.E)(() => {
      !c2 || k2 || z.length || x?.();
    }, [k2, c2, z.length, x]), (0, a.E)(() => {
      A.current = false, C.current = M;
      for (let e3 = 0; e3 < z.length; e3++) {
        let t3 = y(z[e3]);
        w.includes(t3) ? (b.delete(t3), j.current.delete(t3)) : true !== b.get(t3) && b.set(t3, false);
      }
    }, [z, w.length, w.join("-")]);
    let E = [];
    if (M !== D) {
      let e3 = [...M], t3 = 0;
      for (let n3 of z) {
        let r2 = w.indexOf(y(n3));
        -1 === r2 ? (e3.splice(t3++, 0, n3), E.push(n3)) : t3 = r2 + E.length + 1;
      }
      return "wait" === d2 && E.length && (e3 = E), P(v(e3)), R(M), null;
    }
    let { forceRender: O } = (0, o.useContext)(i.L);
    return (0, r.jsx)(r.Fragment, {
      children: z.map((e3) => {
        let o2 = y(e3), i2 = (!c2 || !!k2) && (M === z || w.includes(o2));
        return (0, r.jsx)(
          p,
          {
            isPresent: i2,
            initial: (!A.current || !!n2) && void 0,
            custom: t2,
            presenceAffectsLayout: u2,
            mode: d2,
            root: g2,
            onExitComplete: i2 ? void 0 : () => {
              if (j.current.has(o2) || !b.has(o2)) return;
              j.current.add(o2), b.set(o2, true);
              let e4 = true;
              b.forEach((t3) => {
                t3 || (e4 = false);
              }), e4 && (O?.(), P(C.current), c2 && x?.(), l2 && l2());
            },
            anchorX: h2,
            anchorY: f2,
            children: e3
          },
          o2
        );
      })
    });
  };
}

__m(__module,__exports,__require);
}