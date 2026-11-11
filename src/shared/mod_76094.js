function(__module,__exports,__require){
"use strict";
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
function __m(e, t, r) {
  var _e, _a;
  r.d(t, { N: () => c });
  var i = r(12115), l = r(68599), s = r(47527), n = r(42442), o = r(95155), u = Object.defineProperty, f = (e2, t2) => u(e2, "name", { value: t2, configurable: true });
  function c(e2) {
    let t2 = e2 + "CollectionProvider", [r2, u2] = (0, l.A)(t2), [c2, h2] = r2(t2, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), a2 = f((e3) => {
      let { scope: t3, children: r3 } = e3, l2 = i.useRef(null), s2 = i.useRef(/* @__PURE__ */ new Map()).current;
      return (0, o.jsx)(c2, {
        scope: t3,
        itemMap: s2,
        collectionRef: l2,
        children: r3
      });
    }, "CollectionProvider");
    a2.displayName = t2;
    let d2 = e2 + "CollectionSlot", p2 = (0, n.TL)(d2), y2 = i.forwardRef((e3, t3) => {
      let { scope: r3, children: i2 } = e3, l2 = h2(d2, r3), n2 = (0, s.s)(t3, l2.collectionRef);
      return (0, o.jsx)(p2, { ref: n2, children: i2 });
    });
    y2.displayName = d2;
    let m2 = e2 + "CollectionItemSlot", k2 = "data-radix-collection-item", R2 = (0, n.TL)(m2), v2 = i.forwardRef((e3, t3) => {
      let { scope: r3, children: l2, ...n2 } = e3, u3 = i.useRef(null), f2 = (0, s.s)(t3, u3), c3 = h2(m2, r3);
      return i.useEffect(
        () => (c3.itemMap.set(u3, { ref: u3, ...n2 }), () => void c3.itemMap.delete(u3))
      ), (0, o.jsx)(R2, { ...{ [k2]: "" }, ref: f2, children: l2 });
    });
    function x(t3) {
      let r3 = h2(e2 + "CollectionConsumer", t3);
      return i.useCallback(() => {
        let e3 = r3.collectionRef.current;
        if (!e3) return [];
        let t4 = Array.from(e3.querySelectorAll(`[${k2}]`));
        return Array.from(r3.itemMap.values()).sort(
          (e4, r4) => t4.indexOf(e4.ref.current) - t4.indexOf(r4.ref.current)
        );
      }, [r3.collectionRef, r3.itemMap]);
    }
    return v2.displayName = m2, f(x, "useCollection"), [{ Provider: a2, Slot: y2, ItemSlot: v2 }, x, u2];
  }
  f(c, "createCollection");
  var h = /* @__PURE__ */ new WeakMap(), a = (_a = class extends Map {
    constructor(e2) {
      super(e2);
      __privateAdd(this, _e);
      __privateSet(this, _e, [...super.keys()]), h.set(this, true);
    }
    set(e2, t2) {
      return h.get(this) && (this.has(e2) ? __privateGet(this, _e)[__privateGet(this, _e).indexOf(e2)] = e2 : __privateGet(this, _e).push(e2)), super.set(e2, t2), this;
    }
    insert(e2, t2, r2) {
      let i2, l2 = this.has(t2), s2 = __privateGet(this, _e).length, n2 = y(e2), o2 = n2 >= 0 ? n2 : s2 + n2, u2 = o2 < 0 || o2 >= s2 ? -1 : o2;
      if (u2 === this.size || l2 && u2 === this.size - 1 || -1 === u2)
        return this.set(t2, r2), this;
      let f2 = this.size + +!l2;
      n2 < 0 && o2++;
      let c2 = [...__privateGet(this, _e)], h2 = false;
      for (let e3 = o2; e3 < f2; e3++)
        if (o2 === e3) {
          let s3 = c2[e3];
          c2[e3] === t2 && (s3 = c2[e3 + 1]), l2 && this.delete(t2), i2 = this.get(s3), this.set(t2, r2);
        } else {
          h2 || c2[e3 - 1] !== t2 || (h2 = true);
          let r3 = c2[h2 ? e3 : e3 - 1], l3 = i2;
          i2 = this.get(r3), this.delete(r3), this.set(r3, l3);
        }
      return this;
    }
    with(t2, r2, i2) {
      let l2 = new _a(this);
      return l2.insert(t2, r2, i2), l2;
    }
    before(e2) {
      let t2 = __privateGet(this, _e).indexOf(e2) - 1;
      if (!(t2 < 0)) return this.entryAt(t2);
    }
    setBefore(e2, t2, r2) {
      let i2 = __privateGet(this, _e).indexOf(e2);
      return -1 === i2 ? this : this.insert(i2, t2, r2);
    }
    after(e2) {
      let t2 = __privateGet(this, _e).indexOf(e2);
      if (-1 !== (t2 = -1 === t2 || t2 === this.size - 1 ? -1 : t2 + 1))
        return this.entryAt(t2);
    }
    setAfter(e2, t2, r2) {
      let i2 = __privateGet(this, _e).indexOf(e2);
      return -1 === i2 ? this : this.insert(i2 + 1, t2, r2);
    }
    first() {
      return this.entryAt(0);
    }
    last() {
      return this.entryAt(-1);
    }
    clear() {
      return __privateSet(this, _e, []), super.clear();
    }
    delete(e2) {
      let t2 = super.delete(e2);
      return t2 && __privateGet(this, _e).splice(__privateGet(this, _e).indexOf(e2), 1), t2;
    }
    deleteAt(e2) {
      let t2 = this.keyAt(e2);
      return void 0 !== t2 && this.delete(t2);
    }
    at(e2) {
      let t2 = d(__privateGet(this, _e), e2);
      if (void 0 !== t2) return this.get(t2);
    }
    entryAt(e2) {
      let t2 = d(__privateGet(this, _e), e2);
      if (void 0 !== t2) return [t2, this.get(t2)];
    }
    indexOf(e2) {
      return __privateGet(this, _e).indexOf(e2);
    }
    keyAt(e2) {
      return d(__privateGet(this, _e), e2);
    }
    from(e2, t2) {
      let r2 = this.indexOf(e2);
      if (-1 === r2) return;
      let i2 = r2 + t2;
      return i2 < 0 && (i2 = 0), i2 >= this.size && (i2 = this.size - 1), this.at(i2);
    }
    keyFrom(e2, t2) {
      let r2 = this.indexOf(e2);
      if (-1 === r2) return;
      let i2 = r2 + t2;
      return i2 < 0 && (i2 = 0), i2 >= this.size && (i2 = this.size - 1), this.keyAt(i2);
    }
    find(e2, t2) {
      let r2 = 0;
      for (let i2 of this) {
        if (Reflect.apply(e2, t2, [i2, r2, this])) return i2;
        r2++;
      }
    }
    findIndex(e2, t2) {
      let r2 = 0;
      for (let i2 of this) {
        if (Reflect.apply(e2, t2, [i2, r2, this])) return r2;
        r2++;
      }
      return -1;
    }
    filter(t2, r2) {
      let i2 = [], l2 = 0;
      for (let e2 of this)
        Reflect.apply(t2, r2, [e2, l2, this]) && i2.push(e2), l2++;
      return new _a(i2);
    }
    map(t2, r2) {
      let i2 = [], l2 = 0;
      for (let e2 of this)
        i2.push([e2[0], Reflect.apply(t2, r2, [e2, l2, this])]), l2++;
      return new _a(i2);
    }
    reduce(...e2) {
      let [t2, r2] = e2, i2 = 0, l2 = r2 ?? this.at(0);
      for (let r3 of this)
        l2 = 0 === i2 && 1 === e2.length ? r3 : Reflect.apply(t2, this, [l2, r3, i2, this]), i2++;
      return l2;
    }
    reduceRight(...e2) {
      let [t2, r2] = e2, i2 = r2 ?? this.at(-1);
      for (let r3 = this.size - 1; r3 >= 0; r3--) {
        let l2 = this.at(r3);
        i2 = r3 === this.size - 1 && 1 === e2.length ? l2 : Reflect.apply(t2, this, [i2, l2, r3, this]);
      }
      return i2;
    }
    toSorted(t2) {
      return new _a([...this.entries()].sort(t2));
    }
    toReversed() {
      let t2 = new _a();
      for (let e2 = this.size - 1; e2 >= 0; e2--) {
        let r2 = this.keyAt(e2), i2 = this.get(r2);
        t2.set(r2, i2);
      }
      return t2;
    }
    toSpliced(...t2) {
      let r2 = [...this.entries()];
      return r2.splice(...t2), new _a(r2);
    }
    slice(t2, r2) {
      let i2 = new _a(), l2 = this.size - 1;
      if (void 0 === t2) return i2;
      t2 < 0 && (t2 += this.size), void 0 !== r2 && r2 > 0 && (l2 = r2 - 1);
      for (let e2 = t2; e2 <= l2; e2++) {
        let t3 = this.keyAt(e2), r3 = this.get(t3);
        i2.set(t3, r3);
      }
      return i2;
    }
    every(e2, t2) {
      let r2 = 0;
      for (let i2 of this) {
        if (!Reflect.apply(e2, t2, [i2, r2, this])) return false;
        r2++;
      }
      return true;
    }
    some(e2, t2) {
      let r2 = 0;
      for (let i2 of this) {
        if (Reflect.apply(e2, t2, [i2, r2, this])) return true;
        r2++;
      }
      return false;
    }
  }, _e = new WeakMap(), f(_a, "OrderedDict"), _a);
  function d(e2, t2) {
    if ("at" in Array.prototype) return Array.prototype.at.call(e2, t2);
    let r2 = p(e2, t2);
    return -1 === r2 ? void 0 : e2[r2];
  }
  function p(e2, t2) {
    let r2 = e2.length, i2 = y(t2), l2 = i2 >= 0 ? i2 : r2 + i2;
    return l2 < 0 || l2 >= r2 ? -1 : l2;
  }
  function y(e2) {
    return e2 != e2 || 0 === e2 ? 0 : Math.trunc(e2);
  }
  function m(e2, t2) {
    if (e2 === t2) return true;
    if ("object" != typeof e2 || "object" != typeof t2 || null == e2 || null == t2)
      return false;
    let r2 = Object.keys(e2), i2 = Object.keys(t2);
    if (r2.length !== i2.length) return false;
    for (let i3 of r2)
      if (!Object.prototype.hasOwnProperty.call(t2, i3) || e2[i3] !== t2[i3])
        return false;
    return true;
  }
  function k(e2, t2) {
    return !!(t2.compareDocumentPosition(e2) & Node.DOCUMENT_POSITION_PRECEDING);
  }
  function R(e2, t2) {
    return e2[1].element && t2[1].element ? k(e2[1].element, t2[1].element) ? -1 : 1 : 0;
  }
  function v(e2) {
    return new MutationObserver((t2) => {
      for (let r2 of t2) if ("childList" === r2.type) return void e2();
    });
  }
  f(d, "at"), f(p, "toSafeIndex"), f(y, "toSafeInteger"), f(function(e2) {
    let t2 = e2 + "CollectionProvider", [r2, u2] = (0, l.A)(t2), [c2, h2] = r2(t2, {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new a(),
      setItemMap: f(() => void 0, "setItemMap")
    }), d2 = f(
      ({ state: e3, ...t3 }) => e3 ? (0, o.jsx)(y2, { ...t3, state: e3 }) : (0, o.jsx)(p2, { ...t3 }),
      "CollectionProvider"
    );
    d2.displayName = t2;
    let p2 = f((e3) => {
      let t3 = g();
      return (0, o.jsx)(y2, { ...e3, state: t3 });
    }, "CollectionInit");
    p2.displayName = t2 + "Init";
    let y2 = f((e3) => {
      let { scope: t3, children: r3, state: l2 } = e3, n2 = i.useRef(null), [u3, f2] = i.useState(null), h3 = (0, s.s)(n2, f2), [a2, d3] = l2;
      return i.useEffect(() => {
        if (!u3) return;
        let e4 = v(() => {
        });
        return e4.observe(u3, { childList: true, subtree: true }), () => {
          e4.disconnect();
        };
      }, [u3]), (0, o.jsx)(c2, {
        scope: t3,
        itemMap: a2,
        setItemMap: d3,
        collectionRef: h3,
        collectionRefObject: n2,
        collectionElement: u3,
        children: r3
      });
    }, "CollectionProviderImpl");
    y2.displayName = t2 + "Impl";
    let k2 = e2 + "CollectionSlot", x = (0, n.TL)(k2), C = i.forwardRef((e3, t3) => {
      let { scope: r3, children: i2 } = e3, l2 = h2(k2, r3), n2 = (0, s.s)(t3, l2.collectionRef);
      return (0, o.jsx)(x, { ref: n2, children: i2 });
    });
    C.displayName = k2;
    let O = e2 + "CollectionItemSlot", w = (0, n.TL)(O), b = i.forwardRef((e3, t3) => {
      let { scope: r3, children: l2, ...n2 } = e3, u3 = i.useRef(null), [f2, c3] = i.useState(null), d3 = (0, s.s)(t3, u3, c3), { setItemMap: p3 } = h2(O, r3), y3 = i.useRef(n2);
      m(y3.current, n2) || (y3.current = n2);
      let k3 = y3.current;
      return i.useEffect(
        () => (p3(
          (e4) => f2 ? e4.has(f2) ? e4.set(f2, { ...k3, element: f2 }).toSorted(R) : (e4.set(f2, { ...k3, element: f2 }), e4.toSorted(R)) : e4
        ), () => {
          p3((e4) => f2 && e4.has(f2) ? (e4.delete(f2), new a(e4)) : e4);
        }),
        [f2, k3, p3]
      ), (0, o.jsx)(w, {
        "data-radix-collection-item": "",
        ref: d3,
        children: l2
      });
    });
    function g() {
      return i.useState(new a());
    }
    function j(t3) {
      let { itemMap: r3 } = h2(e2 + "CollectionConsumer", t3);
      return r3;
    }
    return b.displayName = O, f(g, "useInitCollection"), f(j, "useCollection"), [
      { Provider: d2, Slot: C, ItemSlot: b },
      { createCollectionScope: u2, useCollection: j, useInitCollection: g }
    ];
  }, "createCollection"), f(m, "shallowEqual"), f(k, "isElementPreceding"), f(R, "sortByDocumentPosition"), f(v, "getChildListObserver");
}

__m(__module,__exports,__require);
}