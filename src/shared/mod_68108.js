function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { EmptyStates: () => er, default: () => ei });
  var n = a(95155), r = a(12115), i = a(92171), l = a(18310), s = a(28245), o = a(25354), d = a(80642), c = a(7770), u = a(51288);
  let h = ["tile", "tile", "body", "tile", "tile", "tile", "tile", "stroke", "stroke", "mark"], p = 2 * Math.PI, f = Math.PI / 180, m = (e2, t2) => {
    let a2 = t2[0] - e2[0], n2 = t2[1] - e2[1];
    return { len: Math.hypot(a2, n2), at: (t3) => [e2[0] + a2 * t3, e2[1] + n2 * t3] };
  };
  function g(e2, t2, a2, n2) {
    let r2 = n2;
    for (; r2 < a2 - 1e-9; ) r2 += p;
    let i2 = r2 - a2;
    return { len: i2 * t2, at: (n3) => [e2[0] + t2 * Math.cos(a2 + i2 * n3), e2[1] + t2 * Math.sin(a2 + i2 * n3)] };
  }
  let b = (e2, t2, a2, n2) => g(e2, t2, a2 * f, n2 * f), y = (e2, t2, a2) => [e2[0] + t2 * Math.cos(a2 * f), e2[1] + t2 * Math.sin(a2 * f)], _ = (e2, t2 = false) => {
    let a2 = [];
    for (let n2 = 0; n2 < (t2 ? e2.length : e2.length - 1); n2++) a2.push(m(e2[n2], e2[(n2 + 1) % e2.length]));
    return a2;
  };
  function x(e2) {
    let t2 = [];
    for (let a3 = 0; a3 < e2.length - 1; a3++) {
      let n3 = e2[Math.max(0, a3 - 1)], r2 = e2[a3], i2 = e2[a3 + 1], l2 = e2[Math.min(e2.length - 1, a3 + 2)];
      for (let e3 = 0; e3 < 16; e3++) {
        let a4 = e3 / 16, s2 = a4 * a4, o2 = s2 * a4, d2 = (e4) => 0.5 * (2 * r2[e4] + (i2[e4] - n3[e4]) * a4 + (2 * n3[e4] - 5 * r2[e4] + 4 * i2[e4] - l2[e4]) * s2 + (3 * r2[e4] - n3[e4] - 3 * i2[e4] + l2[e4]) * o2);
        t2.push([d2(0), d2(1)]);
      }
    }
    t2.push(e2[e2.length - 1]);
    let a2 = [0];
    for (let e3 = 1; e3 < t2.length; e3++) a2.push(a2[e3 - 1] + Math.hypot(t2[e3][0] - t2[e3 - 1][0], t2[e3][1] - t2[e3 - 1][1]));
    let n2 = a2[a2.length - 1];
    return { len: n2, at: (e3) => {
      let r2 = e3 * n2, i2 = 1;
      for (; i2 < a2.length - 1 && a2[i2] < r2; ) i2++;
      let l2 = t2[i2 - 1], s2 = t2[i2], o2 = (r2 - a2[i2 - 1]) / (a2[i2] - a2[i2 - 1] || 1);
      return [l2[0] + (s2[0] - l2[0]) * o2, l2[1] + (s2[1] - l2[1]) * o2];
    } };
  }
  function k(e2, t2, a2) {
    let n2 = (function(e3, t3) {
      let a3 = e3.reduce((e4, t4) => e4 + t4, 0);
      if (a3 < 1e-6) return e3.map((e4, a4) => 0 === a4 ? t3 : 0);
      let n3 = e3.map((e4) => e4 / a3 * t3), r3 = n3.map((t4, a4) => e3[a4] > 1e-6 ? Math.max(1, Math.floor(t4)) : 0), i2 = r3.reduce((e4, t4) => e4 + t4, 0);
      for (; i2 < t3; ) {
        let t4 = -1;
        for (let a4 = 0; a4 < r3.length; a4++) e3[a4] > 1e-6 && (t4 < 0 || n3[a4] - r3[a4] > n3[t4] - r3[t4]) && (t4 = a4);
        r3[t4]++, i2++;
      }
      for (; i2 > t3; ) {
        let e4 = -1;
        for (let t4 = 0; t4 < r3.length; t4++) r3[t4] > 1 && (e4 < 0 || r3[t4] - n3[t4] > r3[e4] - n3[e4]) && (e4 = t4);
        r3[e4]--, i2--;
      }
      return r3;
    })(e2.map((e3) => e3.len), a2 ? t2 - 1 : t2), r2 = [];
    if (e2.forEach((e3, t3) => {
      for (let a3 = 0; a3 < n2[t3]; a3++) {
        let [i2, l2] = e3.at(a3 / n2[t3]);
        r2.push(i2, l2);
      }
    }), a2) {
      let [t3, a3] = e2[e2.length - 1].at(1);
      r2.push(t3, a3);
    }
    return r2;
  }
  function w(e2, t2, a2, n2, r2) {
    let [i2, l2, s2, o2] = "number" == typeof r2 ? [r2, r2, r2, r2] : r2;
    return [m([e2 + i2, t2], [e2 + a2 - l2, t2]), b([e2 + a2 - l2, t2 + l2], l2, -90, 0), m([e2 + a2, t2 + l2], [e2 + a2, t2 + n2 - s2]), b([e2 + a2 - s2, t2 + n2 - s2], s2, 0, 90), m([e2 + a2 - s2, t2 + n2], [e2 + o2, t2 + n2]), b([e2 + o2, t2 + n2 - o2], o2, 90, 180), m([e2, t2 + n2 - o2], [e2, t2 + i2]), b([e2 + i2, t2 + i2], i2, 180, 270)];
  }
  let M = (e2, t2, a2, n2, r2, i2, { rot: l2 = 0, skew: s2 = 0, z: o2 = 1, o: d2 = 1 } = {}) => ({ kind: "tile", geo: [e2, t2, a2, n2, r2, l2, s2, o2], fx: [d2, 1], tone: i2, redraw: false }), v = (e2, t2, a2, n2, r2, i2, l2) => M(e2 + a2 / 2, t2 + n2 / 2, a2, n2, r2, i2, l2), z = (e2, t2, a2, n2) => M(e2[0], e2[1], 2 * t2, 2 * t2, t2, a2, n2), j = (e2, t2) => M(e2[0], e2[1], 4, 4, 2, "tuck", { z: t2, o: 0 }), N = (e2, t2) => ({ kind: "body", geo: [...k(e2, 176, false), t2], fx: [1, 1], tone: "outline", redraw: false }), T = (e2, t2, { dash: a2 = 0, z: n2 = 1, z1: r2 = n2, o: i2 = 1, draw: l2 = 1, redraw: s2 = false } = {}) => ({ kind: "stroke", geo: [...k(e2, 40, true), a2, n2, r2], fx: [i2, l2], tone: t2, redraw: s2 }), $ = (e2, t2) => T([m(e2, e2)], "ink", { z: t2, o: 0, draw: 0 }), A = ([e2, t2], a2, { z: n2 = 1, o: r2 = 1, draw: i2 = 1, redraw: l2 = true } = {}) => ({ kind: "mark", geo: [...k(e2, 12, true), ...k(t2, 12, true), 0, n2, n2], fx: [r2, i2], tone: a2, redraw: l2 }), E = (e2, t2) => {
    let a2 = [e2[0] - 0.42 * t2, e2[1] + 0.02 * t2], n2 = [e2[0] - 0.12 * t2, e2[1] + 0.32 * t2], r2 = [e2[0] + 0.44 * t2, e2[1] - 0.3 * t2];
    return [[m(a2, n2)], [m(n2, r2)]];
  }, R = (e2, t2) => [[b(e2, t2, 196, 236)], [b(e2, t2, 248, 256)]], P = 320, S = 216, C = { search: function(e2) {
    let t2 = N(w(58, 36, 172, 132, 18), 0.6), a2 = [M(144, 102, 96, 58, 14, "tuck", { z: 0.3 }), M(144, 102, 120, 76, 16, "tuck", { z: 0.3 })];
    if ("done" !== e2) {
      let e3 = [196, 118];
      return { label: "A magnifying glass over three empty result rows", prims: [...a2, t2, v(78, 64, 132, 20, 8, "slot", { z: 0.6 }), v(78, 92, 132, 20, 8, "slot", { z: 0.6 }), v(78, 120, 132, 20, 8, "slot", { z: 0.6 }), z(e3, 30, "outline", { z: 1.6 }), T([m(y(e3, 30, 45), [244, 166])], "ink", { z: 1.6 }), $([244, 166], 1.6), A(R(e3, 20), "muted", { z: 1.6 })] };
    }
    let n2 = [204, 61];
    return { label: "A results list with a search field and two results", prims: [...a2, t2, v(78, 56, 64, 10, 5, "query", { z: 0.6 }), v(78, 100, 128, 10, 5, "bar", { z: 0.6 }), v(78, 124, 96, 10, 5, "bar", { z: 0.6 }), z(n2, 9, "outline", { z: 1 }), T([m(y(n2, 9, 45), y(n2, 17, 45))], "ink", { z: 1 }), T([m([58, 84], [230, 84])], "subtle", { z: 0.6 }), A(R(n2, 5), "muted", { z: 1, o: 0, draw: 0 })] };
  }, offline: function(e2) {
    let t2, a2 = [160, 92], [n2, r2] = "done" === e2 ? [146, 146] : "loading" === e2 ? [141, 151] : [134, 158], i2 = "loading" === e2 ? "accent" : "ink";
    return { label: "done" === e2 ? "A cloud joined to a device by an unbroken line, with a check on the device" : "loading" === e2 ? "The broken line reaching back toward the cloud" : "A cloud joined to a device by a broken line", prims: [M(160, 92, 80, 30, 15, "tuck", { z: 0.3 }), M(160, 92, 104, 36, 18, "tuck", { z: 0.3 }), N((function(e3) {
      let t3 = (e4, t4) => Math.atan2(t4[1] - e4[1], t4[0] - e4[0]), a3 = e3.slice(1).map((t4, a4) => {
        var n4;
        let r4, i4, l2, s2, o2, d2, c2, u2, h2;
        return n4 = e3[a4], r4 = t4.c[0] - n4.c[0], l2 = Math.hypot(r4, i4 = t4.c[1] - n4.c[1]), s2 = (n4.r * n4.r - t4.r * t4.r + l2 * l2) / (2 * l2), o2 = Math.sqrt(Math.max(0, n4.r * n4.r - s2 * s2)), d2 = n4.c[0] + s2 * r4 / l2, c2 = n4.c[1] + s2 * i4 / l2, u2 = [d2 + o2 * i4 / l2, c2 - o2 * r4 / l2], h2 = [d2 - o2 * i4 / l2, c2 + o2 * r4 / l2], u2[1] < h2[1] ? u2 : h2;
      }), n3 = e3[0], r3 = e3[e3.length - 1], i3 = [g(n3.c, n3.r, -Math.PI / 2, t3(n3.c, a3[0]))];
      for (let n4 = 1; n4 < e3.length - 1; n4++) {
        let r4 = e3[n4];
        i3.push(g(r4.c, r4.r, t3(r4.c, a3[n4 - 1]), t3(r4.c, a3[n4])));
      }
      return i3.push(g(r3.c, r3.r, t3(r3.c, a3[a3.length - 1]), Math.PI / 2)), i3.push(m([r3.c[0], 118], [n3.c[0], 118])), i3.push(g(n3.c, n3.r, Math.PI / 2, 1.5 * Math.PI)), i3;
    })([{ c: [100, 96], r: 22 }, { c: [140, 72], r: 34 }, { c: [188, 76], r: 28 }, { c: [220, 98], r: 20 }]), 1.3), j(a2, 1.3), j(a2, 1.3), j(a2, 1.3), v(134, 168, 52, 34, 9, "done" === e2 ? "success" : "loading" === e2 ? "accent" : "outline", { z: 0.7 }), T([m([160, 118], [160, n2])], i2, { z: 1.3, z1: 1 }), T([m([160, r2], [160, 168])], i2, { z: 1, z1: 0.7 }), "done" === e2 ? A(E([160, 185], 18), "success", { z: 0.7 }) : A([[m([(t2 = [160, 146])[0] - 10, 151], [158, 141])], [m([162, 151], [170, 141])]], "warning", { z: 1, draw: +("loading" !== e2) })] };
  }, inbox: function(e2) {
    let t2 = +("loading" === e2), a2 = [226, 84], n2 = [160, 140];
    return { label: "loading" === e2 ? "A stacked inbox while new mail is checked" : "A stacked inbox with a check mark", prims: [v(112, 72 - 8 * t2, 96, 40, 12, "back", { z: 0.25 }), v(100, 88 - 4 * t2, 120, 40, 12, "back", { z: 0.45 }), N(w(88, 104, 144, 72, [8, 8, 16, 16]), 0.7), j(n2, 0.7), j(n2, 0.7), j(n2, 0.7), z(a2, 17, "loading" === e2 ? "muted" : "success", { z: 1.5 }), T(_([[88, 126], [124, 126], [133, 140], [187, 140], [196, 126], [232, 126]]), "ink", { z: 0.7 }), $(n2, 0.7), A(E(a2, 16), "success", { z: 1.5, draw: +("loading" !== e2) })] };
  }, map: function(e2) {
    let t2, a2 = [90, 142], n2 = [206, 110], r2 = "done" === e2, i2 = r2 ? x([a2, [114, 152], [140, 140], [160, 122], [182, 128], y(n2, 10, 135)]) : x([a2, [108, 124], [132, 130], [152, 108], [178, 100], [200, 84]]);
    return { label: r2 ? "A folded map with a dashed route that ends at a checked destination" : "loading" === e2 ? "A folded map while the route is searched again" : "A folded map with a dashed route that ends in an x", prims: [M(151, 107, 90, 56, 12, "tuck", { z: 0.3 }), M(151, 107, 110, 70, 14, "tuck", { z: 0.3 }), N(_([[70, 62], [124, 48], [178, 62], [232, 48], [232, 152], [178, 166], [124, 152], [70, 166]], true), 0.8), j(a2, 0.8), M(151, 107, 54, 104, 0, "shade", { skew: Math.atan2(14, 54) / f, z: 0.8 }), r2 ? z(n2, 10, "success", { z: 0.8 }) : j(a2, 0.8), z(a2, 4, "dot", { z: 0.8 }), T([i2], "accent", { dash: 5, z: 0.8, draw: +("loading" !== e2), redraw: true }), $(a2, 0.8), r2 ? A(E(n2, 10), "success", { z: 0.8 }) : A([[m([(t2 = [208, 76])[0] - 5, 71], [213, 81])], [m([213, 71], [203, 81])]], "ink", { z: 0.8, draw: +("loading" !== e2) })] };
  } }, I = ["idle", "loading", "done"], L = Object.fromEntries(Object.keys(C).map((e2) => {
    let [t2, a2] = (function(e3) {
      let t3 = 1 / 0, a3 = 1 / 0, n2 = -1 / 0, r2 = -1 / 0, i2 = (e4, i3) => {
        t3 = Math.min(t3, e4), a3 = Math.min(a3, i3), n2 = Math.max(n2, e4), r2 = Math.max(r2, i3);
      };
      for (let t4 of e3.prims) if (!(t4.fx[0] < 0.01)) {
        if ("tile" === t4.kind) {
          let [e4, a4, n3, r3] = t4.geo;
          i2(e4 - n3 / 2, a4 - r3 / 2), i2(e4 + n3 / 2, a4 + r3 / 2);
          continue;
        }
        if ("body" === t4.kind || !(t4.fx[1] < 0.01)) for (let e4 = 0; e4 < t4.geo.length - ("body" === t4.kind ? 1 : 3); e4 += 2) i2(t4.geo[e4], t4.geo[e4 + 1]);
      }
      return [P / 2 - (t3 + n2) / 2, S / 2 - (a3 + r2) / 2];
    })(C[e2]("idle"));
    return [e2, Object.fromEntries(I.map((n2) => {
      var r2;
      return [n2, (r2 = C[e2](n2), { ...r2, prims: r2.prims.map((e3) => {
        let n3 = [...e3.geo];
        if ("tile" === e3.kind) n3[0] += t2, n3[1] += a2;
        else for (let r3 = 0; r3 < n3.length - ("body" === e3.kind ? 1 : 3); r3 += 2) n3[r3] += t2, n3[r3 + 1] += a2;
        return { ...e3, geo: n3 };
      }) })];
    }))];
  })), q = (e2) => String(Math.round(100 * e2) / 100);
  function F(e2, t2, a2) {
    let n2 = 0;
    for (let r2 = t2 + 1; r2 < t2 + a2; r2++) n2 += Math.hypot(e2[2 * r2] - e2[2 * r2 - 2], e2[2 * r2 + 1] - e2[2 * r2 - 1]);
    return n2;
  }
  function O(e2, t2, a2, n2, r2, i2, l2, s2, o2) {
    if (n2 <= 0.05) return "";
    let d2 = (a3) => {
      let n3 = l2 + (s2 - l2) * (o2 > 1 ? (t2 + a3) / (o2 - 1) : 0);
      return [e2[2 * (t2 + a3)] + r2 * n3, e2[2 * (t2 + a3) + 1] + i2 * n3];
    }, [c2, u2] = d2(0), h2 = n2, p2 = `M${q(c2)} ${q(u2)}`;
    for (let e3 = 1; e3 < a2; e3++) {
      let [t3, a3] = d2(e3), n3 = Math.hypot(t3 - c2, a3 - u2);
      if (n3 >= h2) {
        let e4 = n3 ? h2 / n3 : 0;
        return `${p2}L${q(c2 + (t3 - c2) * e4)} ${q(u2 + (a3 - u2) * e4)}`;
      }
      h2 -= n3, p2 += `L${q(t3)} ${q(a3)}`, c2 = t3, u2 = a3;
    }
    return p2;
  }
  function B(e2, t2, a2, n2, r2) {
    if ("tile" === e2) return { d: (function(e3, t3, a3) {
      let n3 = Math.max(0, e3[2]), r3 = Math.max(0, e3[3]);
      if (n3 < 0.05 || r3 < 0.05) return "";
      let i3 = Math.min(Math.max(0, e3[4]), n3 / 2, r3 / 2), l3 = Math.tan(e3[6] * f), s3 = Math.cos(e3[5] * f), o3 = Math.sin(e3[5] * f), d3 = e3[0] + t3 * e3[7], c3 = e3[1] + a3 * e3[7], u3 = n3 / 2, h3 = r3 / 2, p2 = "";
      for (let [e4, t4, a4] of [[u3 - i3, -h3 + i3, -90], [u3 - i3, h3 - i3, 0], [-u3 + i3, h3 - i3, 90], [-u3 + i3, -h3 + i3, 180]]) for (let n4 = 0; n4 <= 6; n4++) {
        let r4 = (a4 + 15 * n4) * f, u4 = e4 + i3 * Math.cos(r4), h4 = t4 + i3 * Math.sin(r4) + (e4 + i3 * Math.cos(r4)) * l3;
        p2 += `${p2 ? "L" : "M"}${q(u4 * s3 - h4 * o3 + d3)} ${q(u4 * o3 + h4 * s3 + c3)}`;
      }
      return `${p2}Z`;
    })(t2, n2, r2), dash: "none" };
    if ("body" === e2) {
      let e3 = t2[352], a3 = n2 * e3, i3 = r2 * e3, l3 = "";
      for (let e4 = 0; e4 < 176; e4++) l3 += `${e4 ? "L" : "M"}${q(t2[2 * e4] + a3)} ${q(t2[2 * e4 + 1] + i3)}`;
      return { d: `${l3}Z`, dash: "none" };
    }
    let i2 = Math.min(1, Math.max(0, a2)), l2 = (t2.length - 3) / 2, s2 = t2[t2.length - 3], o2 = t2[t2.length - 2], d2 = t2[t2.length - 1], c2 = s2 > 0.2 ? `3 ${q(s2)}` : "none";
    if ("stroke" === e2) return { d: O(t2, 0, l2, i2 * F(t2, 0, l2), n2, r2, o2, d2, l2), dash: c2 };
    let u2 = F(t2, 0, 12), h2 = i2 * (u2 + F(t2, 12, 12));
    return { d: O(t2, 0, 12, Math.min(h2, u2), n2, r2, o2, d2, 1) + O(t2, 12, 12, h2 - u2, n2, r2, o2, d2, 1), dash: c2 };
  }
  var Y = a(41642), D = a.n(Y);
  let Q = [{ id: "search", tab: "No results" }, { id: "offline", tab: "Offline" }, { id: "inbox", tab: "Caught up" }, { id: "map", tab: "Not found" }], G = { search: { idle: { title: "No results for \u201CQ3 roadmap\u201D", line: "Two filters are on: owner is Emma Collins and status is archived.", action: "Clear filters" }, done: { title: "12 results for \u201CQ3 roadmap\u201D", line: "Filters cleared. Showing matches from every owner and status.", action: "Restore filters" }, loading: "", wait: 0 }, offline: { idle: { title: "You are offline", line: "Edits are saved on this device and sync when the connection returns.", action: "Try again" }, done: { title: "Back online", line: "Three edits synced to the Northwind workspace just now.", action: "Go offline" }, loading: "Reaching sync.northwind.example\u2026", wait: 1400 }, inbox: { idle: { title: "All caught up", line: "You have read every message in Inbox. New mail lands here first.", action: "Check for mail" }, done: { title: "Still all caught up", line: "Checked just now. Nothing new since 8:30 this morning.", action: "Check again" }, loading: "Checking for new mail\u2026", wait: 1100 }, map: { idle: { title: "Page not found", line: "The link to /projects/atlas-2023 is broken, or the page has moved.", action: "Find the page" }, done: { title: "Found it in Archive", line: "Atlas 2023 roadmap moved to /archive/atlas-2023 in March.", action: "Show broken link" }, loading: "Searching the workspace for Atlas\u2026", wait: 1200 } }, V = [0.05, 0.03, 0, 0.04, 0.07, 0.1, 0.06, 0.09, 0.11, 0.14], X = [0.03, 0.015, 0, 0.02, 0.035, 0.05, 0.02, 0.04, 0.05, 0.07], H = L.search.idle, U = H.prims.map((e2, t2) => ({ ...B(h[t2], e2.geo, e2.fx[1], 0, 0), o: String(e2.fx[0]) })), Z = [...c.T.ease.enter], J = [...c.T.ease.standard];
  function K({ visualDuration: e2, bounce: t2 }) {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return { k: a2 * a2, c: 2 * Math.min(1, Math.max(0.05, 1 - t2)) * a2 };
  }
  let W = K(c.T.spring.morph), ee = K(c.T.spring.smooth), et = { k: 90, c: 19 }, ea = (e2, t2) => ({ pos: Float64Array.from(e2), vel: new Float64Array(e2.length), target: Float64Array.from(e2), queue: [], ...t2, still: true });
  function en(e2, t2, a2) {
    for (; e2.queue.length && e2.queue[0].at <= t2; ) {
      let t3 = e2.queue.shift();
      t3 && (e2.target.set(t3.values), e2.still = false);
    }
    if (!e2.still) {
      let t3 = Math.max(1, Math.ceil(240 * a2)), n2 = a2 / t3, { pos: r2, vel: i2, target: l2, k: s2, c: o2 } = e2;
      for (let e3 = 0; e3 < t3; e3++) for (let e4 = 0; e4 < r2.length; e4++) i2[e4] += (-s2 * (r2[e4] - l2[e4]) - o2 * i2[e4]) * n2, r2[e4] += i2[e4] * n2;
      let d2 = true;
      for (let e3 = 0; e3 < r2.length; e3++) if (Math.abs(r2[e3] - l2[e3]) > 4e-3 || Math.abs(i2[e3]) > 0.02) {
        d2 = false;
        break;
      }
      d2 && (r2.set(l2), i2.fill(0), e2.still = true);
    }
    return !e2.still || e2.queue.length > 0;
  }
  function er() {
    let e2 = (0, r.useId)(), t2 = (0, l.I)() ?? false, [a2, p2] = (0, r.useState)({ scene: "search", phase: "idle", from: "idle" }), [f2, m2] = (0, r.useState)(""), g2 = (0, r.useRef)([]), b2 = (0, r.useRef)([]), y2 = (0, r.useRef)([]), _2 = (0, r.useRef)(null), x2 = (0, r.useRef)(null), k2 = (0, r.useRef)(null), w2 = (0, r.useRef)({ scene: a2.scene, phase: a2.phase }), M2 = (0, r.useRef)({ timer: 0 }), v2 = (0, r.useRef)(null), z2 = (0, s.d)("auto"), j2 = (0, r.useRef)(0), N2 = L[a2.scene][a2.phase], T2 = G[a2.scene], $2 = "loading" === a2.phase ? { ...T2["done" === a2.from ? "done" : "idle"], line: T2.loading } : T2["done" === a2.phase ? "done" : "idle"], A2 = `${$2.title}|${$2.line}`;
    function E2(e3) {
      e3 !== a2.scene && (window.clearTimeout(M2.current.timer), p2({ scene: e3, phase: "idle", from: "idle" }), m2(""));
    }
    (0, r.useEffect)(() => {
      var e3;
      let t3, a3, n2, r2, l2, s2, o2, d2, u2, p3, f3, m3, g3 = _2.current, w3 = x2.current, v3 = b2.current.filter(Boolean), z3 = y2.current.filter(Boolean);
      if (!g3 || !w3 || v3.length !== h.length || z3.length !== h.length) return;
      let j3 = (e3 = { paths: v3, ghosts: z3, main: g3, ghost: w3 }, t3 = H.prims.map((e4) => ea(e4.geo, W)), a3 = H.prims.map((e4) => ea(e4.fx, ee)), n2 = ea([0, 0], et), r2 = U.map((e4) => ({ d: e4.d, o: e4.o, dash: e4.dash })), l2 = H, s2 = 0, o2 = 0, d2 = false, u2 = () => {
        let i2 = 2.5 * n2.pos[0], l3 = 2.5 * n2.pos[1];
        e3.paths.forEach((e4, n3) => {
          let s3 = t3[n3].pos, o3 = a3[n3].pos, d3 = r2[n3], { d: c2, dash: u3 } = B(h[n3], s3, o3[1], i2, l3), p4 = String(Math.round(1e3 * Math.min(1, Math.max(0, o3[0]))) / 1e3);
          c2 !== d3.d && (e4.setAttribute("d", c2), d3.d = c2), p4 !== d3.o && (e4.setAttribute("opacity", p4), d3.o = p4), u3 !== d3.dash && (e4.setAttribute("stroke-dasharray", u3), d3.dash = u3);
        });
      }, p3 = (e4) => {
        s2 = 0;
        let r3 = e4 / 1e3, i2 = o2 ? Math.min(0.034, Math.max(0, r3 - o2)) : 1 / 60;
        o2 = r3;
        let l3 = en(n2, r3, i2);
        for (let e5 = 0; e5 < t3.length; e5++) l3 = en(t3[e5], r3, i2) || l3;
        for (let e5 = 0; e5 < a3.length; e5++) l3 = en(a3[e5], r3, i2) || l3;
        u2(), l3 ? s2 = requestAnimationFrame(p3) : o2 = 0;
      }, f3 = () => {
        s2 || (s2 = requestAnimationFrame(p3));
      }, { pointer: m3 = (e4, t4) => {
        n2.queue = [], n2.target.set(d2 ? [e4, t4] : [0, 0]), n2.still = false, f3();
      }, go(n3, r3, s3) {
        if (s3) {
          e3.paths.forEach((t4, a4) => {
            let n4 = e3.ghosts[a4];
            n4.setAttribute("d", t4.getAttribute("d") ?? ""), n4.setAttribute("opacity", t4.getAttribute("opacity") ?? "1"), n4.setAttribute("stroke-dasharray", t4.getAttribute("stroke-dasharray") ?? "none"), n4.dataset.tone = l2.prims[a4].tone;
          }), n3.prims.forEach((e4, n4) => {
            for (let [r4, i2] of [[t3[n4], e4.geo], [a3[n4], e4.fx]]) r4.queue = [], r4.target.set(i2), r4.pos.set(i2), r4.vel.fill(0), r4.still = true;
          }), l2 = n3, u2(), (0, i.i)(e3.ghost, { opacity: [1, 0] }, { duration: c.T.duration.standard, ease: J }), (0, i.i)(e3.main, { opacity: [0, 1] }, { duration: c.T.duration.standard, ease: J });
          return;
        }
        let o3 = performance.now() / 1e3, d3 = r3 ? V : X;
        n3.prims.forEach((e4, n4) => {
          let i2 = d3[n4], l3 = a3[n4];
          t3[n4].queue = [{ at: o3 + i2, values: e4.geo }], r3 && e4.redraw ? l3.queue = [{ at: o3, values: [e4.fx[0], 0] }, { at: o3 + i2 + 0.18, values: e4.fx }] : l3.queue = [{ at: o3 + i2 + 0.12 * (e4.fx[1] > l3.target[1] + 0.01), values: e4.fx }];
        }), l2 = n3, f3();
      }, setParallax(e4) {
        d2 = e4, e4 || m3(0, 0);
      }, destroy() {
        s2 && cancelAnimationFrame(s2), s2 = 0;
      } });
      k2.current = j3;
      let N3 = M2.current;
      return () => {
        j3.destroy(), k2.current = null, window.clearTimeout(N3.timer);
      };
    }, []), (0, r.useEffect)(() => {
      let e3 = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      k2.current?.setParallax(e3 && !t2);
    }, [t2]), (0, r.useEffect)(() => {
      let e3 = w2.current;
      (e3.scene !== a2.scene || e3.phase !== a2.phase) && (w2.current = { scene: a2.scene, phase: a2.phase }, k2.current?.go(L[a2.scene][a2.phase], e3.scene !== a2.scene, t2));
    }, [a2.scene, a2.phase, t2]), (0, r.useLayoutEffect)(() => {
      j2.current = performance.now() + 700;
    }, [A2]), (0, r.useEffect)(() => {
      let e3 = v2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = false, n2 = new ResizeObserver(([e4]) => {
        if (!e4) return;
        let n3 = e4.borderBoxSize?.[0]?.blockSize ?? e4.contentRect.height;
        if (!a3 || t2 || performance.now() > j2.current) {
          a3 = true, z2.jump(n3);
          return;
        }
        (0, i.i)(z2, n3, c.T.spring.smooth);
      });
      return n2.observe(e3), () => n2.disconnect();
    }, [t2, z2]);
    let R2 = t2 ? { initial: { opacity: 0 }, exit: { opacity: 0, transition: { duration: c.T.duration.exit } } } : { initial: { opacity: 0, y: 8, filter: `blur(${c.T.blur.soft}px)` }, exit: { opacity: 0, y: -6, filter: `blur(${c.T.blur.soft}px)`, transition: { duration: c.T.duration.exit, ease: J } } }, C2 = { opacity: 1, y: 0, filter: "blur(0px)" }, I2 = (e3) => ({ duration: t2 ? c.T.duration.standard : c.T.duration.considered, ease: Z, delay: t2 ? 0 : e3 });
    return (0, n.jsx)("section", { className: D().root, "aria-label": "Empty states", children: (0, n.jsxs)("div", { className: D().card, children: [(0, n.jsx)("div", { className: D().tabs, role: "tablist", "aria-label": "Empty state", onKeyDown: function(e3) {
      let t3 = Q.findIndex((e4) => e4.id === a2.scene), n2 = "ArrowRight" === e3.key ? (t3 + 1) % Q.length : "ArrowLeft" === e3.key ? (t3 + Q.length - 1) % Q.length : "Home" === e3.key ? 0 : "End" === e3.key ? Q.length - 1 : -1;
      n2 < 0 || (e3.preventDefault(), E2(Q[n2].id), g2.current[n2]?.focus());
    }, children: Q.map((r2, i2) => {
      let l2 = r2.id === a2.scene;
      return (0, n.jsxs)("button", { ref: (e3) => {
        g2.current[i2] = e3;
      }, id: `${e2}-tab-${r2.id}`, type: "button", role: "tab", "aria-selected": l2, "aria-controls": `${e2}-panel`, tabIndex: l2 ? 0 : -1, className: D().tab, onClick: () => E2(r2.id), children: [l2 ? (0, n.jsx)(o.PY1.span, { layoutId: `${e2}-highlight`, className: D().highlight, transition: t2 ? { duration: 0 } : c.T.spring.morph }) : null, (0, n.jsx)("span", { className: D().tabLabel, children: r2.tab })] }, r2.id);
    }) }), (0, n.jsxs)("div", { className: D().panel, role: "tabpanel", id: `${e2}-panel`, "aria-labelledby": `${e2}-tab-${a2.scene}`, children: [(0, n.jsx)("div", { className: D().stage, onPointerMove: function(e3) {
      if ("mouse" !== e3.pointerType) return;
      let t3 = e3.currentTarget.getBoundingClientRect();
      k2.current?.pointer(((e3.clientX - t3.left) / t3.width - 0.5) * 2, ((e3.clientY - t3.top) / t3.height - 0.5) * 2);
    }, onPointerLeave: () => k2.current?.pointer(0, 0), children: (0, n.jsxs)("svg", { className: D().art, viewBox: `0 0 ${P} ${S}`, role: "img", "aria-label": N2.label, children: [(0, n.jsx)("g", { ref: x2, opacity: 0, "aria-hidden": "true", children: h.map((e3, t3) => (0, n.jsx)("path", { ref: (e4) => {
      y2.current[t3] = e4;
    }, className: D().shape, "data-kind": e3, d: "" }, t3)) }), (0, n.jsx)("g", { ref: _2, children: U.map((e3, t3) => (0, n.jsx)("path", { ref: (e4) => {
      b2.current[t3] = e4;
    }, className: D().shape, "data-kind": h[t3], "data-tone": N2.prims[t3].tone, d: e3.d, opacity: e3.o, strokeDasharray: e3.dash, style: { transitionDelay: `${V[t3]}s` } }, t3)) })] }) }), (0, n.jsxs)("div", { className: D().copy, children: [(0, n.jsx)(o.PY1.div, { className: D().copyFrame, style: { height: z2 }, children: (0, n.jsxs)("div", { ref: v2, className: D().copyInner, children: [(0, n.jsx)("h2", { className: D().title, children: (0, n.jsx)(d.N, { mode: "popLayout", initial: false, children: (0, n.jsx)(o.PY1.span, { className: D().swap, initial: R2.initial, animate: C2, exit: R2.exit, transition: I2(0.06), children: $2.title }, $2.title) }) }), (0, n.jsx)("p", { className: D().line, children: (0, n.jsx)(d.N, { mode: "popLayout", initial: false, children: (0, n.jsx)(o.PY1.span, { className: D().swap, initial: R2.initial, animate: C2, exit: R2.exit, transition: I2(0.06 + c.T.stagger.word), children: $2.line }, $2.line) }) })] }) }), (0, n.jsx)(u.$, { size: "sm", onClick: function() {
      let { scene: e3, phase: t3 } = a2;
      if ("loading" === t3) return;
      let n2 = G[e3];
      if ("search" === e3 || "done" === t3 && "inbox" !== e3) {
        let a3 = "idle" === t3 ? "done" : "idle";
        p2({ scene: e3, phase: a3, from: t3 }), m2(`${n2["done" === a3 ? "done" : "idle"].title}. ${n2["done" === a3 ? "done" : "idle"].line}`);
        return;
      }
      p2({ scene: e3, phase: "loading", from: t3 }), m2(n2.loading), window.clearTimeout(M2.current.timer), M2.current.timer = window.setTimeout(() => {
        p2((t4) => t4.scene === e3 && "loading" === t4.phase ? { scene: e3, phase: "done", from: "loading" } : t4), m2(`${n2.done.title}. ${n2.done.line}`);
      }, n2.wait);
    }, loading: "loading" === a2.phase, children: $2.action })] }), (0, n.jsx)("p", { className: D().srOnly, "aria-live": "polite", children: f2 })] })] }) });
  }
  let ei = er;
}

__m(__module,__exports,__require);
}