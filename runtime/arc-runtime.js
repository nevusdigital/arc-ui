/* arc-runtime.js — miniature webpack-5-compatible runtime for the uiarc.dev mirror.
   Registers extracted module factories and evaluates them lazily, like webpack did
   on the original site. CSS modules are registered separately (regCss) and flushed
   into <style> tags before each demo mounts. */
(function () {
  "use strict";
  var mods = new Map();    // id -> module object {exports}
  var fac = new Map();     // id -> factory(module, exports, require)
  var css = new Map();     // id -> {text, map}
  var injected = new Set();

  function req(id) {
    var m = mods.get(id);
    if (m) return m.exports;
    var f = fac.get(id);
    if (!f) throw new Error('[arc] unresolved webpack module ' + id);
    m = { exports: {} };
    mods.set(id, m);
    try {
      f(m, m.exports, req);
    } catch (e) {
      mods.delete(id);
      throw e;
    }
    return m.exports;
  }

  // webpack helper shims (semantics per WEBPACK_HELPERS.md)
  req.d = function (exports, defs) {
    for (var k in defs) Object.defineProperty(exports, k, { enumerable: true, get: defs[k] });
  };
  req.r = function (exports) {
    if (typeof Symbol !== "undefined") Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    Object.defineProperty(exports, "__esModule", { value: true });
  };
  req.n = function (mod) {
    var isES = mod && mod.__esModule;
    var g = function () { return isES ? mod["default"] : mod; };
    try { g.default = isES ? mod["default"] : mod; } catch (e) {}
    req.d(g, { a: g });
    return g;
  };
  // webpack t = ESM namespace interop: t(value, mode).
  // mode&1: value is an id -> require it; mode&8: pass through;
  // mode&4: return unchanged if it already looks like an ES module;
  // mode&2: copy own/enumerable props onto a fresh namespace plus "default".
  req.t = function (value, mode) {
    if (mode & 1) value = req(value);
    if (mode & 8) return value;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      if ((mode & 4) && value.__esModule) return value;
      var ns = Object.create(null);
      Object.defineProperty(ns, "default", { enumerable: true, value: value });
      if (mode & 2) {
        for (var key in value) {
          (function (k) {
            Object.defineProperty(ns, k, { enumerable: true, get: function () { return value[k]; } });
          })(key);
        }
      }
      return ns;
    }
    return value;
  };
  req.o = function (obj, k) { return Object.prototype.hasOwnProperty.call(obj, k); };
  req.e = function () { return Promise.resolve(); };
  req.nc = function () { return ""; };
  req.u = function () { return ""; };
  req.miniCssF = function () { return ""; };
  req.json = function (id) { return req(id); };
  req.g = globalThis;
  req.p = "";

  var A = globalThis.__ARC__ = {
    reg: function (id, f) { fac.set(id, f); },
    regCss: function (id, text, map) {
      var m = map || {};
      css.set(id, { text: text || "", map: m });
      // a css-module id must also resolve like a normal module: its exports
      // are the class-name map (webpack semantics, used via t.n(t(id))()).
      fac.set(id, function (mod, ex) { for (var k in m) ex[k] = m[k]; });
    },
    get: function (id) { return req(id); },
    has: function (id) { return fac.has(id); },
    flushCss: function (ids) {
      var host = document.head;
      var keys = ids || Array.from(css.keys());
      for (var i = 0; i < keys.length; i++) {
        var id = keys[i];
        if (injected.has(id)) continue;
        var c = css.get(id);
        if (!c || !c.text) continue;
        var el = document.createElement("style");
        el.setAttribute("data-arc-css", String(id));
        el.textContent = c.text;
        host.appendChild(el);
        injected.add(id);
      }
    },
    cssByItem: {},   // slug -> [css ids] (filled by per-item registries)
    sharedCssIds: [], // css ids owned by shared.registry.js
    cssFor: function (slug, ids) { this.cssByItem[slug] = ids; },
    sharedCss: function (ids) { this.sharedCssIds = ids; },
    item: function (name, meta) { this.items[name] = meta; },
    items: {},       // slug -> meta
    dom: {},         // filled by vendor-dom.js (ReactDOM bindings + J = jsx-runtime namespace)
    R: function () { return req(12115); } // React (shim re-exporting real React 61426; what all pro modules require)
  };
})();
