function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { n: () => v });
  var r = n(12115), o = n(47527), a = n(55897), c = n(17347), i = n(95155), u = Object.defineProperty, l = (e2, t2) => u(e2, "name", { value: t2, configurable: true }), s = "focusScope.autoFocusOnMount", d = "focusScope.autoFocusOnUnmount", f = { bubbles: false, cancelable: true }, v = r.forwardRef(
    l(function(e2, t2) {
      let {
        loop: n2 = false,
        trapped: u2 = false,
        onMountAutoFocus: v2,
        onUnmountAutoFocus: g2,
        ...y2
      } = e2, [b2, S2] = r.useState(null), C2 = (0, c.c)(v2), N = (0, c.c)(g2), M = r.useRef(null), A = (0, o.s)(t2, S2), R = r.useRef({
        paused: false,
        pause() {
          this.paused = true;
        },
        resume() {
          this.paused = false;
        }
      }).current;
      r.useEffect(() => {
        if (u2) {
          let e3 = function(e4) {
            if (R.paused || !b2) return;
            let t4 = e4.target;
            b2.contains(t4) ? M.current = t4 : E(M.current, { select: true });
          }, t3 = function(e4) {
            if (R.paused || !b2) return;
            let t4 = e4.relatedTarget;
            null !== t4 && (b2.contains(t4) || E(M.current, { select: true }));
          }, n3 = function(e4) {
            if (document.activeElement === document.body)
              for (let t4 of e4) t4.removedNodes.length > 0 && E(b2);
          };
          l(e3, "handleFocusIn"), l(t3, "handleFocusOut"), l(n3, "handleMutations"), document.addEventListener("focusin", e3), document.addEventListener("focusout", t3);
          let r2 = new MutationObserver(n3);
          return b2 && r2.observe(b2, { childList: true, subtree: true }), () => {
            document.removeEventListener("focusin", e3), document.removeEventListener("focusout", t3), r2.disconnect();
          };
        }
      }, [u2, b2, R.paused]), r.useEffect(() => {
        if (b2) {
          w.add(R);
          let e3 = document.activeElement;
          if (!b2.contains(e3)) {
            let t3 = new CustomEvent(s, f);
            b2.addEventListener(s, C2), b2.dispatchEvent(t3), t3.defaultPrevented || (p(k(m(b2)), { select: true }), document.activeElement === e3 && E(b2));
          }
          return () => {
            b2.removeEventListener(s, C2), setTimeout(() => {
              let t3 = new CustomEvent(d, f);
              b2.addEventListener(d, N), b2.dispatchEvent(t3), t3.defaultPrevented || E(e3 ?? document.body, { select: true }), b2.removeEventListener(d, N), w.remove(R);
            }, 0);
          };
        }
      }, [b2, C2, N, R]);
      let T = r.useCallback(
        (e3) => {
          if (!n2 && !u2 || R.paused) return;
          let t3 = "Tab" === e3.key && !e3.altKey && !e3.ctrlKey && !e3.metaKey, r2 = document.activeElement;
          if (t3 && r2) {
            let t4 = e3.currentTarget, [o2, a2] = h(t4);
            o2 && a2 ? e3.shiftKey || r2 !== a2 ? e3.shiftKey && r2 === o2 && (e3.preventDefault(), n2 && E(a2, { select: true })) : (e3.preventDefault(), n2 && E(o2, { select: true })) : r2 === t4 && e3.preventDefault();
          }
        },
        [n2, u2, R.paused]
      );
      return (0, i.jsx)(a.sG.div, {
        tabIndex: -1,
        ...y2,
        ref: A,
        onKeyDown: T
      });
    }, "FocusScope")
  );
  function p(e2, { select: t2 = false } = {}) {
    let n2 = document.activeElement;
    for (let r2 of e2)
      if (E(r2, { select: t2 }), document.activeElement !== n2) return;
  }
  function h(e2) {
    let t2 = m(e2);
    return [g(t2, e2), g(t2.reverse(), e2)];
  }
  function m(e2) {
    let t2 = [], n2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, {
      acceptNode: l((e3) => {
        let t3 = "INPUT" === e3.tagName && "hidden" === e3.type;
        return e3.disabled || e3.hidden || t3 ? NodeFilter.FILTER_SKIP : e3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }, "acceptNode")
    });
    for (; n2.nextNode(); ) t2.push(n2.currentNode);
    return t2;
  }
  function g(e2, t2) {
    let n2 = "function" == typeof t2.checkVisibility && t2.checkVisibility({ checkVisibilityCSS: true });
    for (let r2 of e2)
      if (!(n2 ? !r2.checkVisibility({ checkVisibilityCSS: true }) : y(r2, { upTo: t2 })))
        return r2;
  }
  function y(e2, { upTo: t2 }) {
    if ("hidden" === getComputedStyle(e2).visibility) return true;
    for (; e2 && (void 0 === t2 || e2 !== t2); ) {
      if ("none" === getComputedStyle(e2).display) return true;
      e2 = e2.parentElement;
    }
    return false;
  }
  function b(e2) {
    return e2 instanceof HTMLInputElement && "select" in e2;
  }
  function E(e2, { select: t2 = false } = {}) {
    if (e2 && e2.focus) {
      let n2 = document.activeElement;
      e2.focus({ preventScroll: true }), e2 !== n2 && b(e2) && t2 && e2.select();
    }
  }
  l(p, "focusFirst"), l(h, "getTabbableEdges"), l(m, "getTabbableCandidates"), l(g, "findVisible"), l(y, "isHidden"), l(b, "isSelectableInput"), l(E, "focus");
  var w = S();
  function S() {
    let e2 = [];
    return {
      add(t2) {
        let n2 = e2[0];
        t2 !== n2 && n2?.pause(), (e2 = C(e2, t2)).unshift(t2);
      },
      remove(t2) {
        e2 = C(e2, t2), e2[0]?.resume();
      }
    };
  }
  function C(e2, t2) {
    let n2 = [...e2], r2 = n2.indexOf(t2);
    return -1 !== r2 && n2.splice(r2, 1), n2;
  }
  function k(e2) {
    return e2.filter((e3) => "A" !== e3.tagName);
  }
  l(S, "createFocusScopesStack"), l(C, "arrayRemove"), l(k, "removeLinks");
}

__m(__module,__exports,__require);
}