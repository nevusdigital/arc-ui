function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { a: () => s, q: () => r });
  var i = t(12115);
  async function s(e2) {
    try {
      if (navigator.clipboard?.writeText)
        return void await navigator.clipboard.writeText(e2);
    } catch {
    }
    let a2 = document.activeElement, t2 = document.getSelection(), i2 = t2 ? Array.from({ length: t2.rangeCount }, (e3, a3) => t2.getRangeAt(a3)) : [], s2 = document.createElement("textarea");
    s2.value = e2, s2.setAttribute("readonly", ""), s2.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;", document.body.appendChild(s2), s2.select(), s2.setSelectionRange(0, e2.length);
    let r2 = false;
    try {
      r2 = document.execCommand("copy");
    } catch {
      r2 = false;
    }
    if (s2.remove(), t2 && (t2.removeAllRanges(), i2.forEach((e3) => t2.addRange(e3))), a2?.focus?.({ preventScroll: true }), !r2)
      throw Error("Copy failed");
  }
  function r(e2 = 1900) {
    let [a2, t2] = (0, i.useState)("idle"), [n, o] = (0, i.useState)(null), l = (0, i.useRef)(null), c = (0, i.useCallback)(() => {
      l.current && clearTimeout(l.current), l.current = null, t2("idle"), o(null);
    }, []);
    return (0, i.useEffect)(
      () => () => {
        l.current && clearTimeout(l.current);
      },
      []
    ), {
      state: a2,
      activeKey: n,
      copy: (0, i.useCallback)(
        async (a3, i2 = "default") => {
          l.current && clearTimeout(l.current), o(i2);
          try {
            return await s(a3), t2("copied"), l.current = setTimeout(c, e2), true;
          } catch {
            return t2("error"), l.current = setTimeout(c, e2), false;
          }
        },
        [e2, c]
      ),
      reset: c
    };
  }
}

__m(__module,__exports,__require);
}