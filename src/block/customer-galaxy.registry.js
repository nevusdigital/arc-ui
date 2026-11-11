/* customer-galaxy (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(4263, function(__module,__exports,__require){
"use strict";
function __m(t, e, s) {
  "use strict";
  let a, i, h;
  s.r(e), s.d(e, { CustomerGalaxy: () => tm, default: () => tu });
  var l = s(95155), r = s(12115), n = s(28245), o = s(92171), c = s(18310), d = s(57700), m = s(25354), u = s(80642), x = s(31966), y = s(36565), p = s(2125), f = s(8962), M = s(7770);
  let g = ["Starter", "Growth", "Scale", "Enterprise"], v = ["North America", "Europe", "Asia Pacific", "Latin America"], b = ["Software", "Fintech", "Healthcare", "Retail", "Media", "Logistics"], w = ["Healthy", "Expanding", "Watch", "At risk"], _ = [1, 0, 2, 3], k = ["neutral", "success", "warning", "danger"], j = [
    { key: "all", label: "All", noun: "health" },
    { key: "plan", label: "Plan", noun: "plan" },
    { key: "region", label: "Region", noun: "region" },
    { key: "health", label: "Health", noun: "health" },
    { key: "industry", label: "Industry", noun: "industry" }
  ], z = (a = 20260922, () => {
    let t2 = a = a + 1831565813 >>> 0;
    return t2 = Math.imul(t2 ^ t2 >>> 15, 1 | t2), (((t2 ^= t2 + Math.imul(t2 ^ t2 >>> 7, 61 | t2)) ^ t2 >>> 14) >>> 0) / 4294967296;
  }), A = (t2) => t2[Math.floor(z() * t2.length) % t2.length], N = (t2) => {
    let e2 = t2.reduce((t3, e3) => t3 + e3, 0), s2 = z() * e2;
    for (let e3 = 0; e3 < t2.length; e3++) if ((s2 -= t2[e3]) <= 0) return e3;
    return t2.length - 1;
  }, C = () => Math.sqrt(-2 * Math.log(1 - z())) * Math.cos(2 * Math.PI * z()), $ = [
    "North",
    "Blue",
    "Iron",
    "Clear",
    "Bright",
    "Silver",
    "Harbor",
    "Summit",
    "Pine",
    "Cedar",
    "Atlas",
    "Nova",
    "Lumen",
    "Vector",
    "Kite",
    "Orbit",
    "Quill",
    "Ember",
    "Tidal",
    "Maple",
    "Echo",
    "Juniper",
    "Beacon",
    "Granite",
    "Copper",
    "Aster",
    "Birch",
    "Coral",
    "Delta",
    "Falcon",
    "Glacier",
    "Halo",
    "Indigo",
    "Lark",
    "Meadow",
    "Onyx",
    "Pioneer",
    "Ridge",
    "Sable",
    "Willow"
  ], R = [
    "field",
    "stone",
    "works",
    "wind",
    "point",
    "line",
    "gate",
    "path",
    "bridge",
    "craft",
    "forge",
    "light",
    "well",
    "bay",
    "peak",
    "lane"
  ], F = [
    ["Labs", "Systems", "Cloud", "Software", "Data"],
    ["Pay", "Capital", "Ledger", "Finance", "Bank"],
    ["Health", "Clinics", "Care", "Bio", "Medical"],
    ["Goods", "Market", "Supply", "Outfitters", "Home"],
    ["Media", "Studios", "Press", "Sound", "Games"],
    ["Freight", "Logistics", "Fleet", "Transit", "Cargo"]
  ], S = [
    ["Emma Collins", "Jonas Weber", "Ava Thompson"],
    ["Daniel Kim", "Elin Lund", "Noah Becker"],
    ["Kenji Sato", "Priya Raman"],
    ["Sofia Alvarez", "Mateo Rojas"]
  ], P = [
    [140, 0.55, 49, 480, 1],
    [1300, 0.45, 600, 3200, 10],
    [6200, 0.4, 3500, 14e3, 50],
    [33e3, 0.45, 16e3, 92e3, 100]
  ], T = ["June", "July", "August"], E = [
    [
      () => "Usage steady",
      (t2) => `Renewed in ${T[Math.floor(3 * t2())]}`,
      (t2) => `${62 + Math.floor(30 * t2())}% weekly active`
    ],
    [
      (t2) => `Seats up ${12 + Math.floor(30 * t2())}% this quarter`,
      (t2) => `Added ${2 + Math.floor(6 * t2())} workspaces`,
      () => "Upgrade call booked",
      (t2) => `Usage up ${9 + Math.floor(24 * t2())}% month over month`
    ],
    [
      (t2) => `Champion left in ${T[Math.floor(3 * t2())]}`,
      (t2) => `Usage down ${8 + Math.floor(14 * t2())}%`,
      (t2) => `Support tickets up ${20 + Math.floor(40 * t2())}%`,
      (t2) => `Renewal in ${30 + Math.floor(50 * t2())} days`
    ],
    [
      (t2) => `Usage down ${28 + Math.floor(30 * t2())}%`,
      (t2) => `Renewal in ${9 + Math.floor(30 * t2())} days, no reply`,
      (t2) => `${2 + Math.floor(4 * t2())} open escalations`,
      () => "Evaluating alternatives"
    ]
  ], I = (i = /* @__PURE__ */ new Set(), h = [], [1320, 700, 300, 80].forEach((t2, e2) => {
    let [s2, a2, l2, r2, n2] = P[e2];
    for (let o2 = 0; o2 < t2; o2++) {
      let t3 = N([44, 31, 17, 8]), o3 = N([29, 16, 15, 15, 11, 14]), c2 = [72, 10, 10, 8];
      3 === e2 && (c2[1] += 7, c2[3] -= 4), 0 === e2 && (c2[3] += 3, c2[1] -= 4), 3 === o3 && (c2[3] += 8, c2[2] += 4), 1 === o3 && (c2[1] += 5), 4 === o3 && (c2[2] += 4), 3 === t3 && (c2[2] += 6);
      let d2 = N(c2), m2 = Math.round(
        Math.min(r2, Math.max(l2, Math.exp(Math.log(s2) + a2 * C()))) / n2
      ) * n2, u2 = "";
      for (let t4 = 0; t4 < 12 && (!u2 || i.has(u2)); t4++) {
        let t5 = 0.3 > z() ? A($) : `${A($)}${A(R)}`;
        u2 = `${t5} ${A(F[o3])}`;
      }
      i.has(u2) && (u2 = `${u2} Group`), i.add(u2);
      let x2 = 0 === e2 ? "Digital success" : A(S[t3]);
      h.push({
        id: h.length,
        name: u2,
        plan: e2,
        region: t3,
        industry: o3,
        health: d2,
        mrr: m2,
        owner: x2,
        note: A(E[d2])(z)
      });
    }
  }), h);
  function L(t2) {
    return "plan" === t2 ? g : "region" === t2 ? v : "industry" === t2 ? b : "health" === t2 ? _.map((t3) => w[t3]) : ["All accounts"];
  }
  function H(t2, e2) {
    return "plan" === t2 ? e2.plan : "region" === t2 ? e2.region : "industry" === t2 ? e2.industry : "health" === t2 ? _.indexOf(e2.health) : 0;
  }
  let D = /* @__PURE__ */ new Map();
  function O(t2) {
    let e2 = D.get(t2);
    if (e2) return e2;
    let s2 = L(t2).map((t3, e3) => ({
      index: e3,
      label: t3,
      count: 0,
      mrr: 0,
      healthMrr: [0, 0, 0, 0],
      healthCount: [0, 0, 0, 0]
    }));
    for (let e3 of I) {
      let a2 = s2[H(t2, e3)];
      a2.count++, a2.mrr += e3.mrr, a2.healthMrr[e3.health] += e3.mrr, a2.healthCount[e3.health]++;
    }
    return D.set(t2, s2), s2;
  }
  let V = O("all")[0], W = new Intl.NumberFormat("en-US"), q = (t2) => `$${W.format(t2)}`;
  function B(t2) {
    return t2 >= 1e6 ? `$${(t2 / 1e6).toFixed(2)}M` : t2 >= 1e4 ? `$${Math.round(t2 / 1e3)}K` : t2 >= 1e3 ? `$${(t2 / 1e3).toFixed(1)}K` : `$${Math.round(t2)}`;
  }
  let Y = (t2, e2) => e2 ? Math.round(t2 / e2 * 100) : 0, Z = I.length, G = 1 / 120, K = Math.PI * (3 - Math.sqrt(5)), U = [0.72, 0.95, 0.95, 0.95], X = (t2, e2, s2) => Math.min(s2, Math.max(e2, t2)), J = (t2, e2) => (1 - 1 / (0.55 * t2 / e2 + 1)) * e2, Q = (t2, e2, s2, a2) => t2 < e2 ? e2 - J(e2 - t2, a2) : t2 > s2 ? s2 + J(t2 - s2, a2) : t2, tt = (t2) => {
    let e2 = Math.imul(2654435769 ^ t2, 2246822507);
    return e2 ^= e2 >>> 13, (((e2 = Math.imul(e2, 3266489909)) ^ e2 >>> 16) >>> 0) / 4294967296;
  };
  class te {
    constructor(t2, e2) {
      this.canvas = t2, this.events = e2, this.w = 0, this.h = 0, this.dpr = 1, this.base = new Float32Array(Z), this.rad = new Float32Array(Z), this.invMass = new Float32Array(Z), this.px = new Float32Array(Z), this.py = new Float32Array(Z), this.vx = new Float32Array(Z), this.vy = new Float32Array(Z), this.tx = new Float32Array(Z), this.ty = new Float32Array(Z), this.delay = new Float32Array(Z), this.lift = new Float32Array(Z), this.alpha = new Float32Array(Z).fill(1), this.alphaT = new Float32Array(Z).fill(1), this.cat = new Uint8Array(Z), this.health = new Uint8Array(Z), this.sx = new Float32Array(Z), this.sy = new Float32Array(Z), this.sr = new Float32Array(Z), this.visibleDot = new Uint8Array(Z), this.bucketOf = new Uint8Array(Z), this.drawOrder = new Int32Array(Z), this.stamp = new Int32Array(Z), this.cellCount = new Int32Array(1), this.cellItems = new Int32Array(1), this.cellFill = new Int32Array(1), this.group = "all", this.clusters = [], this.bounds = { x0: -1, y0: -1, x1: 1, y1: 1 }, this.fitZ = 1, this.simT = 99, this.simActive = false, this.swirl = 1, this.settled = true, this.intro = false, this.cam = {
        x: 0,
        y: 0,
        lz: 0,
        vx: 0,
        vy: 0,
        vz: 0,
        tx: 0,
        ty: 0,
        tz: 0,
        omega: 9
      }, this.anchor = null, this.tilt = { x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0 }, this.plane = { a: 0, v: 0, t: 0 }, this.drift = 1, this.lens = 0, this.zoomed = false, this.focusCluster = -1, this.pointers = /* @__PURE__ */ new Map(), this.drag = null, this.pinch = null, this.mouse = { x: 0, y: 0, inside: false, fine: true }, this.lastTap = { t: -1, x: 0, y: 0 }, this.hovered = -1, this.selected = -1, this.keyboard = false, this.cardEl = null, this.card = { x: 0, y: 0, vx: 0, vy: 0, w: 240, h: 150, shown: false }, this.labelEls = [], this.raf = 0, this.last = 0, this.acc = 0, this.busy = true, this.counts = new Int32Array(33), this.fillAt = new Int32Array(33), this.visible = false, this.hidden = false, this.introPending = true, this.reduced = false, this.palette = {
        dots: ["#8a8a8a", "#1f8a4c", "#b7791f", "#c53030"],
        ring: "#111",
        accent: "#333"
      }, this.indices = null, this.frame = (t3) => {
        this.raf = 0;
        let e3 = Math.min(0.05, Math.max(0, (t3 - this.last) / 1e3));
        this.last = t3, this.acc += e3;
        let s3 = 0;
        for (; this.acc >= G && s3 < 8; ) this.step(G), this.acc -= G, s3++;
        8 === s3 && (this.acc = 0), this.reportView(), this.render(), this.active() && this.visible && !this.hidden && (this.raf = requestAnimationFrame(this.frame));
      }, this.labelPoint = { x: 0, y: 0, f: 1 }, this.ctx = t2.getContext("2d");
      let s2 = 0;
      I.forEach((t3, e3) => {
        this.base[e3] = 10 + Math.sqrt(t3.mrr), this.health[e3] = t3.health, s2 = Math.max(s2, this.base[e3]);
      });
      for (let t3 = 0; t3 < Z; t3++)
        this.invMass[t3] = 1 / (1 + 0.9 * this.base[t3] / s2);
    }
    setReduced(t2) {
      this.reduced = t2, t2 && (this.introPending = false, this.snapAll()), this.wake();
    }
    setPalette(t2) {
      this.palette = t2, this.wake();
    }
    setVisible(t2) {
      this.visible = t2, this.maybeIntro(), this.wake();
    }
    setHidden(t2) {
      this.hidden = t2, this.wake();
    }
    destroy() {
      cancelAnimationFrame(this.raf), this.raf = 0, clearTimeout(this.relayoutTimer);
    }
    resize(t2, e2, s2) {
      if (t2 < 10 || e2 < 10 || t2 === this.w && e2 === this.h && s2 === this.dpr)
        return;
      let a2 = 0 === this.w;
      this.w = t2, this.h = e2, this.dpr = s2, this.canvas.width = Math.round(t2 * s2), this.canvas.height = Math.round(e2 * s2), a2 ? (this.layout(true), this.snapAll(), this.cam.x = this.cam.tx, this.cam.y = this.cam.ty, this.cam.lz = this.cam.tz, this.maybeIntro()) : (this.refit(true), clearTimeout(this.relayoutTimer), this.relayoutTimer = setTimeout(() => {
        this.layout(false), this.start("resize"), this.refit(false), this.wake();
      }, 160)), this.render(), this.wake();
    }
    attachCard(t2) {
      this.cardEl = t2, t2 && (this.card.w = t2.offsetWidth, this.card.h = t2.offsetHeight);
    }
    measureCard() {
      this.cardEl && (this.card.w = this.cardEl.offsetWidth, this.card.h = this.cardEl.offsetHeight), this.wake();
    }
    attachLabel(t2, e2) {
      this.labelEls[t2] = e2, e2 && this.placeLabel(t2, e2);
    }
    setGroup(t2, e2 = -1) {
      if (t2 === this.group) {
        e2 >= 0 && this.focus(e2);
        return;
      }
      this.group = t2, this.layout(false), this.start("group"), this.setFocus(e2, false), e2 < 0 && this.fitCamera(5.2 * !this.reduced), this.wake();
    }
    setHighlight(t2) {
      for (let e2 = 0; e2 < Z; e2++)
        this.alphaT[e2] = t2 && H(t2.group, I[e2]) !== t2.cat ? 0.13 : 1;
      this.reduced && this.alpha.set(this.alphaT), this.wake();
    }
    focus(t2) {
      this.setFocus(t2, true), this.wake();
    }
    resetView() {
      this.setFocus(-1, true), this.wake();
    }
    zoomBy(t2) {
      this.zoomAt(this.w / 2, this.h / 2, t2), this.events.interact();
    }
    select(t2, e2) {
      if (this.selected = t2, this.keyboard = e2, t2 >= 0 && e2) {
        let e3 = Math.exp(this.cam.tz), s2 = this.w / 2 / e3, a2 = this.h / 2 / e3, i2 = this.px[t2], h2 = this.py[t2];
        (Math.abs(i2 - this.cam.tx) > 0.8 * s2 || Math.abs(h2 - this.cam.ty) > 0.8 * a2) && (this.anchor = null, this.cam.tx = i2, this.cam.ty = h2, this.cam.omega = 7);
      }
      this.wake();
    }
    radii() {
      let t2 = 0;
      for (let e3 = 0; e3 < Z; e3++) t2 += this.base[e3] * this.base[e3];
      let e2 = Math.sqrt(0.26 * this.w * this.h * 0.8 / (Math.PI * t2));
      for (let t3 = 0; t3 < Z; t3++)
        this.rad[t3] = Math.max(1.15, this.base[t3] * e2);
    }
    layout(t2) {
      this.radii();
      let e2 = L(this.group).length, s2 = Array.from({ length: e2 }, () => []);
      for (let t3 = 0; t3 < Z; t3++) {
        let e3 = H(this.group, I[t3]);
        this.cat[t3] = e3, s2[e3].push(t3);
      }
      let a2 = new Float32Array(Z), i2 = new Float32Array(Z), h2 = [], l2 = 1 === e2;
      this.plane.t = 0.82 * !!l2, (t2 || this.reduced) && (this.plane.a = this.plane.t, this.plane.v = 0), s2.forEach((t3, e3) => {
        if (t3.sort((t4, e4) => this.rad[e4] - this.rad[t4] || t4 - e4), l2)
          this.spiral(t3, a2, i2);
        else {
          let s4 = 0;
          t3.forEach((t4, h3) => {
            let l3 = (this.rad[t4] + 1.1) ** 2, r3 = 0 === h3 ? 0 : Math.sqrt((s4 + 0.5 * l3) / 0.8) * (1 + (tt(t4) - 0.5) * 0.08), n3 = h3 * K + 1.7 * e3 + (tt(3 * t4 + 1) - 0.5) * 0.3;
            a2[t4] = Math.cos(n3) * r3, i2[t4] = Math.sin(n3) * r3, s4 += l3;
          });
        }
        for (let e4 = 0; e4 < 36; e4++) {
          this.collide(t3, a2, i2, 1, null);
          let s4 = 6e-3 * (e4 < 30 && !l2);
          for (let e5 of t3) a2[e5] *= 1 - s4, i2[e5] *= 1 - s4;
        }
        let s3 = t3.map((t4) => Math.hypot(a2[t4], i2[t4]) + this.rad[t4]).sort((t4, e4) => t4 - e4);
        h2[e3] = s3[Math.min(s3.length - 1, Math.floor(s3.length * (l2 ? 0.985 : 1)))];
      });
      let r2 = this.w < 520, n2 = 1, o2 = [];
      for (let t3 = 0; t3 < 2; t3++) {
        let t4 = e2 > 1 ? 48 * n2 : 0;
        if (o2 = this.pack(h2, t4, e2 > 1 ? (r2 ? 34 : 64) * n2 : 0), this.boundsFor(o2, h2, t4, (r2 ? 50 : 34) * n2), this.clusters = o2.map((t5, e3) => ({ x: t5.x, y: t5.y, r: h2[e3] })), this.fitZ = this.fitFor(), this.fitZ >= 0.98)
          break;
        n2 = 1 / this.fitZ;
      }
      for (let t3 = 0; t3 < Z; t3++) {
        let e3 = o2[this.cat[t3]];
        this.tx[t3] = e3.x + a2[t3], this.ty[t3] = e3.y + i2[t3];
      }
      t2 && (this.cam.tx = (this.bounds.x0 + this.bounds.x1) / 2, this.cam.ty = (this.bounds.y0 + this.bounds.y1) / 2, this.cam.tz = Math.log(this.fitZ));
    }
    spiral(t2, e2, s2) {
      let a2 = t2.length, i2 = Math.round(0.12 * a2), h2 = 0;
      for (let e3 = 0; e3 < i2; e3++) h2 += (this.rad[t2[e3]] + 1.1) ** 2;
      let l2 = Math.sqrt(h2 / 0.8), r2 = 2.55 * l2;
      h2 = 0, t2.forEach((t3, n2) => {
        if (n2 < i2) {
          let a3 = (this.rad[t3] + 1.1) ** 2, i3 = 0 === n2 ? 0 : Math.sqrt((h2 + 0.5 * a3) / 0.8);
          e2[t3] = Math.cos(n2 * K) * i3, s2[t3] = Math.sin(n2 * K) * i3, h2 += a3;
          return;
        }
        let o2 = Math.sqrt(-2 * Math.log(Math.max(1e-6, tt(11 * t3 + 3)))), c2 = 2 * Math.PI * tt(13 * t3 + 5), d2 = (0.88 * l2 + (r2 - 0.88 * l2) * Math.pow(
          X((n2 - i2) / (a2 - i2) * 0.5 + 0.5 * tt(17 * t3 + 7), 0, 1),
          1.15
        )) * (1 + o2 * Math.sin(c2) * 0.05), m2 = 0.5 > tt(7 * t3 + 2) ? 0 : Math.PI, u2 = 0.08 > tt(5 * t3 + 9) ? tt(19 * t3) * Math.PI * 2 : m2 - 2.9 * Math.log(d2 / l2) + o2 * Math.cos(c2) * (0.12 * r2 / d2 + 0.05);
        e2[t3] = Math.cos(u2) * d2, s2[t3] = Math.sin(u2) * d2;
      });
    }
    pack(t2, e2, s2) {
      let a2 = X(this.w / this.h, 0.55, 2.4), i2 = t2.map((t3, e3) => e3).sort((e3, s3) => t2[s3] - t2[e3] || e3 - s3), h2 = [], l2 = t2.map(() => ({ x: 0, y: 0 }));
      for (let r2 of i2) {
        let i3 = Math.max(t2[r2], s2), n2 = { x: 0, y: 0 }, o2 = 1 / 0;
        if (h2.length)
          for (let t3 of h2)
            for (let s3 = 0; s3 < 72; s3++) {
              let l3 = s3 / 72 * Math.PI * 2 + 0.13, r3 = t3.x + Math.cos(l3) * (t3.r + i3 + e2), c2 = t3.y + Math.sin(l3) * (t3.r + i3 + e2);
              if (h2.some((t4) => Math.hypot(r3 - t4.x, c2 - t4.y) < t4.r + i3 + e2 - 0.01))
                continue;
              let d2 = (r3 / a2) ** 2 + (1.08 * c2) ** 2;
              d2 < o2 && (o2 = d2, n2 = { x: r3, y: c2 });
            }
        l2[r2] = n2, h2.push({ ...n2, r: i3 });
      }
      return l2;
    }
    boundsFor(t2, e2, s2, a2) {
      let i2 = 1 / 0, h2 = 1 / 0, l2 = -1 / 0, r2 = -1 / 0;
      t2.forEach((t3, a3) => {
        i2 = Math.min(i2, t3.x - e2[a3]), l2 = Math.max(l2, t3.x + e2[a3]), h2 = Math.min(h2, t3.y - e2[a3] - s2), r2 = Math.max(r2, t3.y + e2[a3]);
      }), r2 += a2;
      let n2 = (i2 + l2) / 2, o2 = (h2 + r2) / 2;
      t2.forEach((t3) => {
        t3.x -= n2, t3.y -= o2;
      }), this.bounds = { x0: i2 - n2, y0: h2 - o2, x1: l2 - n2, y1: r2 - o2 };
    }
    fitFor() {
      let t2 = this.w < 520 ? 14 : 28, e2 = this.bounds, s2 = this.plane.t;
      if (s2 < 0.01)
        return Math.min(
          1.35,
          (this.w - 2 * t2) / (e2.x1 - e2.x0),
          (this.h - 2 * t2) / (e2.y1 - e2.y0)
        );
      let a2 = Math.cos(s2), i2 = Math.sin(s2), h2 = this.w / 2 - t2, l2 = this.h / 2 - t2, r2 = (t3) => this.clusters.every((s3) => {
        for (let e3 = 0; e3 < 24; e3++) {
          let r3 = e3 / 24 * Math.PI * 2, n3 = (s3.x + Math.cos(r3) * s3.r) * t3, o3 = (s3.y + Math.sin(r3) * s3.r) * t3, c2 = 1150 / Math.max(60, 1150 - o3 * i2);
          if (Math.abs(n3 * c2) > h2 || Math.abs(o3 * a2 * c2) > l2) return false;
        }
        return e2.y1 * t3 * a2 < l2;
      }), n2 = 0.02, o2 = 1.35;
      if (r2(1.35)) return o2;
      for (let t3 = 0; t3 < 22; t3++) {
        let t4 = (n2 + o2) / 2;
        r2(t4) ? n2 = t4 : o2 = t4;
      }
      return n2;
    }
    refit(t2) {
      this.fitZ = this.fitFor(), (!this.zoomed || t2) && (this.zoomed || (this.cam.tx = 0, this.cam.ty = 0, this.cam.tz = Math.log(this.fitZ)), t2 && !this.zoomed && (this.cam.x = 0, this.cam.y = 0, this.cam.lz = this.cam.tz, this.cam.vx = this.cam.vy = this.cam.vz = 0));
    }
    collide(t2, e2, s2, a2, i2) {
      let h2 = t2.length;
      if (h2 < 2) return;
      let l2 = 1 / 0, r2 = 1 / 0, n2 = -1 / 0, o2 = -1 / 0, c2 = 0;
      for (let a3 = 0; a3 < h2; a3++) {
        let i3 = t2[a3], h3 = this.rad[i3];
        l2 = Math.min(l2, e2[i3] - h3), r2 = Math.min(r2, s2[i3] - h3), n2 = Math.max(n2, e2[i3] + h3), o2 = Math.max(o2, s2[i3] + h3), c2 += h3;
      }
      let d2 = Math.max(3, c2 / h2 * 2.4 + 1.1), m2 = Math.ceil((n2 - l2) / d2) + 1, u2 = Math.ceil((o2 - r2) / d2) + 1;
      for (; m2 * u2 > 6e4; )
        d2 *= 1.5, m2 = Math.ceil((n2 - l2) / d2) + 1, u2 = Math.ceil((o2 - r2) / d2) + 1;
      let x2 = m2 * u2;
      this.cellCount.length < x2 + 1 && (this.cellCount = new Int32Array(x2 + 1));
      let y2 = this.cellCount;
      y2.fill(0, 0, x2 + 1);
      let p2 = 0;
      for (let a3 = 0; a3 < h2; a3++) {
        let i3 = t2[a3], h3 = this.rad[i3] + 0.55, n3 = Math.floor((e2[i3] - h3 - l2) / d2), o3 = Math.floor((e2[i3] + h3 - l2) / d2), c3 = Math.floor((s2[i3] - h3 - r2) / d2), u3 = Math.floor((s2[i3] + h3 - r2) / d2);
        for (let t3 = c3; t3 <= u3; t3++)
          for (let e3 = n3; e3 <= o3; e3++) y2[t3 * m2 + e3 + 1]++, p2++;
      }
      for (let t3 = 1; t3 <= x2; t3++) y2[t3] += y2[t3 - 1];
      this.cellItems.length < p2 && (this.cellItems = new Int32Array(1.5 * p2));
      let f2 = this.cellItems;
      this.cellFill.length < x2 && (this.cellFill = new Int32Array(x2));
      let M2 = this.cellFill;
      M2.fill(0, 0, x2);
      for (let a3 = 0; a3 < h2; a3++) {
        let i3 = t2[a3], h3 = this.rad[i3] + 0.55, n3 = Math.floor((e2[i3] - h3 - l2) / d2), o3 = Math.floor((e2[i3] + h3 - l2) / d2), c3 = Math.floor((s2[i3] - h3 - r2) / d2), u3 = Math.floor((s2[i3] + h3 - r2) / d2);
        for (let t3 = c3; t3 <= u3; t3++)
          for (let e3 = n3; e3 <= o3; e3++) {
            let s3 = t3 * m2 + e3;
            f2[y2[s3] + M2[s3]++] = i3;
          }
      }
      let g2 = this.stamp;
      g2.fill(-1);
      for (let n3 = 0; n3 < h2; n3++) {
        let h3 = t2[n3], o3 = this.rad[h3], c3 = o3 + 0.55, x3 = Math.floor((e2[h3] - c3 - l2) / d2), p3 = Math.floor((e2[h3] + c3 - l2) / d2), M3 = Math.floor((s2[h3] - c3 - r2) / d2), v2 = Math.floor((s2[h3] + c3 - r2) / d2), b2 = i2 ? 1 - i2[h3] : 1;
        for (let t3 = Math.max(0, M3); t3 <= Math.min(u2 - 1, v2); t3++)
          for (let l3 = Math.max(0, x3); l3 <= Math.min(m2 - 1, p3); l3++) {
            let r3 = t3 * m2 + l3;
            for (let t4 = y2[r3], l4 = y2[r3 + 1]; t4 < l4; t4++) {
              let l5 = f2[t4];
              if (l5 <= h3 || g2[l5] === h3) continue;
              g2[l5] = h3;
              let r4 = o3 + this.rad[l5] + 1.1, n4 = e2[l5] - e2[h3], c4 = s2[l5] - s2[h3], d3 = n4 * n4 + c4 * c4;
              if (d3 >= r4 * r4) continue;
              let m3 = Math.sqrt(d3);
              m3 < 1e-4 && (m3 = Math.hypot(
                n4 = tt(h3 + l5) - 0.5,
                c4 = tt(7 * h3 + l5) - 0.5
              ));
              let u3 = (r4 - m3) / m3 * a2 * (b2 * (i2 ? 1 - i2[l5] : 1)), x4 = 1 / this.invMass[h3], y3 = 1 / this.invMass[l5], p4 = y3 / (x4 + y3);
              e2[h3] -= n4 * u3 * p4, s2[h3] -= c4 * u3 * p4, e2[l5] += n4 * u3 * (1 - p4), s2[l5] += c4 * u3 * (1 - p4);
            }
          }
      }
    }
    snapAll() {
      this.px.set(this.tx), this.py.set(this.ty), this.vx.fill(0), this.vy.fill(0), this.lift.fill(0), this.alpha.set(this.alphaT), this.simActive = false, this.intro = false, this.settled || (this.settled = true, this.events.settle(true));
    }
    start(t2) {
      if (this.reduced) return void this.snapAll();
      this.simT = 0, this.simActive = true, this.swirl = "resize" === t2 ? 0 : "intro" === t2 ? 1.15 : 1, this.intro = "intro" === t2;
      for (let e2 = 0; e2 < Z; e2++) {
        let s2 = this.clusters[this.cat[e2]], a2 = Math.hypot(this.tx[e2] - s2.x, this.ty[e2] - s2.y) / Math.max(1, s2.r);
        this.delay[e2] = "resize" === t2 ? 0 : ("intro" === t2 ? 0.5 : 0.26) * a2 + 0.06 * tt(e2);
      }
      "resize" !== t2 && this.settled && (this.settled = false, this.events.settle(false));
    }
    maybeIntro() {
      if (this.introPending && this.visible && 0 !== this.w && !this.reduced) {
        this.introPending = false;
        for (let t2 = 0; t2 < Z; t2++) {
          let e2 = this.clusters[this.cat[t2]], s2 = this.tx[t2] - e2.x, a2 = this.ty[t2] - e2.y, i2 = Math.hypot(s2, a2), h2 = Math.atan2(a2, s2) - 1.35 - 0.5 * tt(t2), l2 = 1.5 * i2 + e2.r * (0.45 + 0.5 * tt(3 * t2));
          this.px[t2] = e2.x + Math.cos(h2) * l2, this.py[t2] = e2.y + Math.sin(h2) * l2, this.vx[t2] = 0, this.vy[t2] = 0, this.alpha[t2] = 0;
        }
        this.start("intro"), this.cam.lz = this.cam.tz - 0.22, this.cam.vz = 0, this.cam.omega = 3.6, this.plane.a = this.plane.t + 0.42, this.plane.v = 0;
      }
    }
    simStep(t2) {
      this.simT += t2;
      let e2 = this.simT, s2 = Math.exp(-(3.8 * e2)) * this.swirl, a2 = 0;
      for (let i2 = 0; i2 < Z; i2++) {
        if (e2 < this.delay[i2]) {
          this.vx[i2] *= 0.96, this.vy[i2] *= 0.96, this.px[i2] += this.vx[i2] * t2, this.py[i2] += this.vy[i2] * t2;
          continue;
        }
        let h2 = 42 * this.invMass[i2], l2 = 2 * Math.sqrt(h2) * 0.74, r2 = this.tx[i2] - this.px[i2], n2 = this.ty[i2] - this.py[i2], o2 = 0.85 * s2 * h2;
        this.vx[i2] += (h2 * r2 - o2 * n2 - l2 * this.vx[i2]) * t2, this.vy[i2] += (h2 * n2 + o2 * r2 - l2 * this.vy[i2]) * t2, this.px[i2] += this.vx[i2] * t2, this.py[i2] += this.vy[i2] * t2;
        let c2 = Math.hypot(this.vx[i2], this.vy[i2]);
        this.lift[i2] += (Math.min(1, c2 / 900) - this.lift[i2]) * 0.1, (c2 > 1.5 || r2 * r2 + n2 * n2 > 0.09) && a2++;
      }
      e2 > 0.12 && e2 < 1.2 + 0.6 && this.swirl > 0 && this.collide(this.allIndices(), this.px, this.py, 0.35, this.lift), !this.settled && e2 > 0.95 && (this.settled = true, this.events.settle(true)), (e2 > 1.2 && 0 === a2 || e2 > 3.2) && (this.simActive = false, this.intro = false, this.px.set(this.tx), this.py.set(this.ty), this.vx.fill(0), this.vy.fill(0), this.lift.fill(0));
    }
    allIndices() {
      if (!this.indices) {
        this.indices = new Int32Array(Z);
        for (let t2 = 0; t2 < Z; t2++) this.indices[t2] = t2;
      }
      return this.indices;
    }
    rotate(t2) {
      let e2 = Math.cos(t2), s2 = Math.sin(t2);
      for (let t3 = 0; t3 < Z; t3++) {
        let a2 = this.clusters[this.cat[t3]], i2 = this.px[t3] - a2.x, h2 = this.py[t3] - a2.y;
        this.px[t3] = a2.x + i2 * e2 - h2 * s2, this.py[t3] = a2.y + i2 * s2 + h2 * e2, i2 = this.tx[t3] - a2.x, h2 = this.ty[t3] - a2.y, this.tx[t3] = a2.x + i2 * e2 - h2 * s2, this.ty[t3] = a2.y + i2 * s2 + h2 * e2;
      }
    }
    range(t2) {
      let e2 = this.w / 2 / t2, s2 = this.h / 2 / t2, a2 = this.bounds, i2 = (a2.x0 + a2.x1) / 2, h2 = (a2.y0 + a2.y1) / 2, l2 = a2.x1 - a2.x0 > 2 * e2, r2 = a2.y1 - a2.y0 > 2 * s2;
      return {
        x0: l2 ? Math.min(i2, a2.x0 + 0.35 * e2) : i2,
        x1: l2 ? Math.max(i2, a2.x1 - 0.35 * e2) : i2,
        y0: r2 ? Math.min(h2, a2.y0 + 0.35 * s2) : h2,
        y1: r2 ? Math.max(h2, a2.y1 - 0.35 * s2) : h2,
        hw: e2,
        hh: s2
      };
    }
    zoomLimits() {
      return {
        lo: Math.log(this.fitZ),
        hi: Math.log(Math.max(9 * this.fitZ, 5))
      };
    }
    clampTargets() {
      let t2 = Math.exp(this.cam.tz), e2 = this.range(t2);
      this.cam.tx = X(this.cam.tx, e2.x0, e2.x1), this.cam.ty = X(this.cam.ty, e2.y0, e2.y1);
    }
    fitCamera(t2) {
      this.anchor = null, this.cam.tx = 0, this.cam.ty = 0, this.cam.tz = Math.log(this.fitZ), this.cam.omega = t2, (this.reduced || 0 === t2) && (this.cam.x = 0, this.cam.y = 0, this.cam.lz = this.cam.tz, this.cam.vx = this.cam.vy = this.cam.vz = 0);
    }
    setFocus(t2, e2) {
      let s2 = t2 >= 0 && t2 < this.clusters.length && this.clusters.length > 1, a2 = s2 ? t2 : -1;
      if (a2 !== this.focusCluster && (this.focusCluster = a2, this.events.focus(a2)), !s2) {
        e2 && this.fitCamera(6.5);
        return;
      }
      let i2 = this.clusters[t2], h2 = this.zoomLimits(), l2 = X(
        Math.min((this.w - 56) / (2 * i2.r), (this.h - 104) / (2 * i2.r + 48)),
        1.2 * this.fitZ,
        Math.exp(h2.hi)
      );
      this.anchor = null, this.cam.tx = i2.x, this.cam.ty = i2.y - 24 / l2, this.cam.tz = Math.log(l2), this.cam.omega = 6.2, this.reduced && (this.cam.x = this.cam.tx, this.cam.y = this.cam.ty, this.cam.lz = this.cam.tz);
    }
    zoomAt(t2, e2, s2) {
      let a2 = this.zoomLimits(), i2 = this.toWorld(t2, e2);
      this.anchor = { wx: i2.x, wy: i2.y, sx: t2, sy: e2 }, this.cam.tz = X(this.cam.tz + Math.log(s2), a2.lo, a2.hi), this.cam.omega = 11, this.reduced && (this.cam.lz = this.cam.tz, this.applyAnchor(), this.anchor = null, this.clampTargets(), this.cam.x = this.cam.tx, this.cam.y = this.cam.ty), this.wake();
    }
    applyAnchor() {
      if (!this.anchor) return;
      let t2 = Math.exp(this.cam.lz), e2 = this.onPlane(this.anchor.sx, this.anchor.sy);
      this.cam.x = this.anchor.wx - e2.x / t2, this.cam.y = this.anchor.wy - e2.y / t2, this.cam.tx = this.cam.x, this.cam.ty = this.cam.y, this.cam.vx = 0, this.cam.vy = 0;
    }
    camStep(t2) {
      let e2 = this.cam;
      if (this.drag?.moved || this.pinch) return;
      if (this.reduced) {
        e2.lz = e2.tz, this.anchor && (this.applyAnchor(), this.anchor = null, this.clampTargets()), e2.x = e2.tx, e2.y = e2.ty;
        return;
      }
      let s2 = e2.omega;
      if (e2.vz += (s2 * s2 * (e2.tz - e2.lz) - 2 * s2 * e2.vz) * t2, e2.lz += e2.vz * t2, this.anchor) {
        this.applyAnchor(), 1e-4 > Math.abs(e2.tz - e2.lz) && 1e-3 > Math.abs(e2.vz) && (e2.lz = e2.tz, e2.vz = 0, this.anchor = null, this.clampTargets(), e2.omega = 7);
        return;
      }
      e2.vx += (s2 * s2 * (e2.tx - e2.x) - 2 * s2 * e2.vx) * t2, e2.x += e2.vx * t2, e2.vy += (s2 * s2 * (e2.ty - e2.y) - 2 * s2 * e2.vy) * t2, e2.y += e2.vy * t2;
    }
    camMoving() {
      let t2 = this.cam;
      return !!this.anchor || Math.abs(t2.tz - t2.lz) > 1e-4 || Math.abs(t2.vz) > 1e-3 || Math.abs(t2.tx - t2.x) > 0.02 || Math.abs(t2.ty - t2.y) > 0.02 || Math.hypot(t2.vx, t2.vy) > 0.05;
    }
    reportView() {
      let t2 = this.cam.tz > Math.log(this.fitZ) + 0.04 || Math.hypot(this.cam.tx, this.cam.ty) > 4;
      t2 !== this.zoomed && (this.zoomed = t2, this.events.view(t2)), t2 || !(this.focusCluster >= 0) || this.pinch || this.drag || (this.focusCluster = -1, this.events.focus(-1));
    }
    local(t2) {
      let e2 = this.canvas.getBoundingClientRect();
      return { x: t2.clientX - e2.left, y: t2.clientY - e2.top };
    }
    onPlane(t2, e2) {
      let s2 = this.planeAngle(), a2 = Math.cos(s2), i2 = Math.sin(s2), h2 = t2 - this.w / 2, l2 = e2 - this.h / 2, r2 = 1150 * l2 / (1150 * a2 + l2 * i2);
      return { x: h2 / (1150 / Math.max(60, 1150 - r2 * i2)), y: r2 };
    }
    toWorld(t2, e2) {
      let s2 = Math.exp(this.cam.lz), a2 = this.onPlane(t2, e2);
      return { x: this.cam.x + a2.x / s2, y: this.cam.y + a2.y / s2 };
    }
    planeAngle() {
      return this.plane.a * X(1 - (Math.exp(this.cam.lz) / this.fitZ - 1) / 1.8, 0, 1) + this.tilt.x;
    }
    pointerDown(t2) {
      if (0 !== t2.button && "mouse" === t2.pointerType) return;
      let e2 = this.local(t2);
      if (this.pointers.set(t2.pointerId, { ...e2, type: t2.pointerType }), 1 === this.pointers.size)
        this.anchor = null, this.drag = {
          id: t2.pointerId,
          sx: e2.x,
          sy: e2.y,
          lx: e2.x,
          ly: e2.y,
          lt: t2.timeStamp,
          moved: false,
          rawX: this.cam.x,
          rawY: this.cam.y,
          vx: 0,
          vy: 0,
          type: t2.pointerType
        };
      else if (2 === this.pointers.size) {
        let [t3, e3] = [...this.pointers.values()], s2 = { x: (t3.x + e3.x) / 2, y: (t3.y + e3.y) / 2 }, a2 = this.toWorld(s2.x, s2.y);
        this.drag = null, this.pinch = {
          d0: Math.max(10, Math.hypot(t3.x - e3.x, t3.y - e3.y)),
          z0: Math.exp(this.cam.lz),
          wx: a2.x,
          wy: a2.y
        }, this.anchor = null, this.setHover(-1), this.events.interact();
      }
      this.wake();
    }
    pointerMove(t2) {
      let e2 = this.local(t2);
      "mouse" === t2.pointerType && (this.mouse.x = e2.x, this.mouse.y = e2.y, this.mouse.inside = true, this.mouse.fine = true);
      let s2 = this.pointers.get(t2.pointerId);
      if (s2 && (s2.x = e2.x, s2.y = e2.y), this.pinch && this.pointers.size >= 2) {
        let [t3, e3] = [...this.pointers.values()], s3 = this.zoomLimits(), a3 = { x: (t3.x + e3.x) / 2, y: (t3.y + e3.y) / 2 }, i2 = Q(
          Math.log(
            this.pinch.z0 * Math.hypot(t3.x - e3.x, t3.y - e3.y) / this.pinch.d0
          ),
          s3.lo,
          s3.hi,
          0.9
        ), h2 = Math.exp(i2);
        this.cam.lz = this.cam.tz = i2, this.cam.vz = 0, this.cam.x = this.cam.tx = this.pinch.wx - (a3.x - this.w / 2) / h2, this.cam.y = this.cam.ty = this.pinch.wy - (a3.y - this.h / 2) / h2, this.wake();
        return;
      }
      let a2 = this.drag;
      if (a2 && a2.id === t2.pointerId) {
        if (!a2.moved && Math.hypot(e2.x - a2.sx, e2.y - a2.sy) > 4 && (a2.moved = true, a2.rawX = this.cam.x, a2.rawY = this.cam.y, this.setHover(-1), this.events.interact()), a2.moved) {
          let s3 = Math.exp(this.cam.lz), i2 = this.range(s3), h2 = e2.x - a2.lx, l2 = e2.y - a2.ly, r2 = Math.max(1, t2.timeStamp - a2.lt);
          a2.rawX -= h2 / s3, a2.rawY -= l2 / s3 / Math.max(0.4, Math.cos(this.planeAngle())), this.cam.x = this.cam.tx = Q(a2.rawX, i2.x0, i2.x1, 2 * i2.hw), this.cam.y = this.cam.ty = Q(a2.rawY, i2.y0, i2.y1, 2 * i2.hh), this.cam.vx = this.cam.vy = 0;
          let n2 = Math.min(1, r2 / 40);
          a2.vx += (-h2 / s3 / r2 * 1e3 - a2.vx) * n2, a2.vy += (-l2 / s3 / r2 * 1e3 - a2.vy) * n2, this.tilt.ty = X(h2 / r2 * 0.035, -0.16, 0.16), this.tilt.tx = X(-l2 / r2 * 0.035, -0.16, 0.16), a2.lx = e2.x, a2.ly = e2.y, a2.lt = t2.timeStamp, this.wake();
        }
        return;
      }
      "mouse" === t2.pointerType && (this.setHover(this.hit(e2.x, e2.y)), this.wake());
    }
    pointerUp(t2) {
      let e2 = this.local(t2);
      if (this.pointers.delete(t2.pointerId), this.pinch) {
        if (this.pointers.size < 2) {
          let t3 = this.zoomLimits();
          this.pinch = null, this.drag = null, this.pointers.clear(), this.cam.tz = X(this.cam.lz, t3.lo, t3.hi), this.cam.omega = 9, Math.abs(this.cam.tz - this.cam.lz) > 1e-4 ? this.anchor = {
            wx: this.cam.x,
            wy: this.cam.y,
            sx: this.w / 2,
            sy: this.h / 2
          } : this.clampTargets();
        }
        this.wake();
        return;
      }
      let s2 = this.drag;
      if (s2 && s2.id === t2.pointerId) {
        if (this.drag = null, this.tilt.tx = 0, this.tilt.ty = 0, s2.moved) {
          let e3 = t2.timeStamp - s2.lt > 90, a2 = e3 ? 0 : X(s2.vx, -4e3, 4e3), i2 = e3 ? 0 : X(s2.vy, -4e3, 4e3);
          this.reduced ? (this.clampTargets(), this.cam.x = this.cam.tx, this.cam.y = this.cam.ty) : (this.cam.tx = this.cam.x + 0.3 * a2, this.cam.ty = this.cam.y + 0.3 * i2, this.clampTargets(), this.cam.vx = a2, this.cam.vy = i2, this.cam.omega = 5.4);
        } else {
          let a2 = t2.timeStamp;
          if ("mouse" !== s2.type && a2 - this.lastTap.t < 320 && 30 > Math.hypot(e2.x - this.lastTap.x, e2.y - this.lastTap.y))
            this.lastTap.t = -1, this.doubleAt(e2.x, e2.y);
          else {
            this.lastTap = { t: a2, x: e2.x, y: e2.y };
            let t3 = this.hit(e2.x, e2.y, "mouse" === s2.type ? 4 : 10);
            this.selected = t3, this.keyboard = "mouse" !== s2.type, this.events.select(t3);
          }
        }
        this.wake();
      }
    }
    pointerCancel(t2) {
      this.pointers.delete(t2.pointerId), this.drag?.id === t2.pointerId && (this.drag = null), this.pointers.size < 2 && (this.pinch = null), this.tilt.tx = 0, this.tilt.ty = 0, this.clampTargets(), this.wake();
    }
    pointerLeave() {
      this.mouse.inside = false, this.drag || this.setHover(-1), this.wake();
    }
    doubleClick(t2) {
      let e2 = this.local(t2);
      this.doubleAt(e2.x, e2.y);
    }
    doubleAt(t2, e2) {
      this.events.interact(), this.selected >= 0 && (this.selected = -1, this.events.select(-1));
      let s2 = this.toWorld(t2, e2), a2 = Math.exp(this.cam.lz);
      if (this.clusters.length < 2)
        return void (this.zoomed ? this.resetView() : this.zoomAt(t2, e2, 2.4));
      let i2 = -1, h2 = 1 / 0;
      this.clusters.forEach((t3, e3) => {
        let l2 = Math.hypot(s2.x - t3.x, s2.y - t3.y) - t3.r;
        l2 < 44 / a2 && l2 < h2 && (h2 = l2, i2 = e3);
      }), i2 < 0 || i2 === this.focusCluster ? this.resetView() : this.focus(i2);
    }
    wheel(t2) {
      let e2 = this.local(t2), s2 = t2.ctrlKey || t2.metaKey, a2 = 1 === t2.deltaMode, i2 = a2 || Math.abs(t2.deltaY) >= 40 && 0 === t2.deltaX;
      if (s2 || i2) {
        t2.preventDefault(), this.zoomAt(
          e2.x,
          e2.y,
          Math.exp(-t2.deltaY * (s2 ? 0.011 : a2 ? 0.05 : 22e-4))
        ), this.events.interact();
        return;
      }
      if (!this.zoomed) return;
      t2.preventDefault();
      let h2 = Math.exp(this.cam.lz);
      this.anchor = null, this.cam.tx += t2.deltaX / h2, this.cam.ty += t2.deltaY / h2, this.clampTargets(), this.cam.omega = 14, this.wake();
    }
    setHover(t2) {
      t2 !== this.hovered && (this.hovered = t2, this.canvas.style.cursor = t2 >= 0 ? "pointer" : "", this.events.hover(t2));
    }
    hit(t2, e2, s2 = 4) {
      let a2 = -1, i2 = 1 / 0;
      for (let h2 = 0; h2 < Z; h2++) {
        if (!this.visibleDot[h2] || this.alpha[h2] < 0.5) continue;
        let l2 = Math.hypot(this.sx[h2] - t2, this.sy[h2] - e2) - this.sr[h2];
        l2 < s2 && l2 < i2 && (i2 = l2, a2 = h2);
      }
      return a2;
    }
    wake() {
      this.busy = true, this.raf || !this.visible || this.hidden || 0 === this.w || (this.last = performance.now(), this.acc = 0, this.raf = requestAnimationFrame(this.frame));
    }
    active() {
      return this.reduced ? this.simActive || this.camMoving() || !!this.drag : this.busy || this.simActive || this.camMoving() || !!this.drag || !!this.pinch;
    }
    step(t2) {
      if (this.simActive && this.simStep(t2), this.reduced)
        this.alpha.set(this.alphaT), this.plane.a = this.plane.t;
      else {
        let e2 = this.mouse.inside || !!this.drag || !!this.pinch || this.selected >= 0;
        this.drift += (!e2 - this.drift) * (1 - Math.exp(-(2.5 * t2))), this.drift > 2e-3 && this.rotate(0.028 * this.drift * t2);
        let s2 = !e2 || this.drift > 2e-3, a2 = this.plane, i2 = this.intro ? 2.6 : 4.4;
        a2.v += (i2 * i2 * (a2.t - a2.a) - 2 * i2 * a2.v) * t2, a2.a += a2.v * t2;
        let h2 = this.tilt;
        h2.vx += (121 * (h2.tx - h2.x) - 12.100000000000001 * h2.vx) * t2, h2.x += h2.vx * t2, h2.vy += (121 * (h2.ty - h2.y) - 12.100000000000001 * h2.vy) * t2, h2.y += h2.vy * t2, this.drag?.moved && (h2.tx *= 0.9, h2.ty *= 0.9);
        let l2 = Math.exp(this.cam.lz) / this.fitZ, r2 = this.mouse.inside && this.mouse.fine && !this.drag && !this.pinch ? X(1 - (l2 - 1.2) / 1.6, 0, 1) : 0;
        this.lens += (r2 - this.lens) * (1 - Math.exp(-(10 * t2)));
        let n2 = 1 - Math.exp(-t2 * (this.intro ? 5 : 11)), o2 = false;
        for (let t3 = 0; t3 < Z; t3++) {
          if (this.intro && this.simT < 0.7 * this.delay[t3]) {
            o2 = true;
            continue;
          }
          let e3 = this.alphaT[t3] - this.alpha[t3];
          e3 > 3e-3 || e3 < -3e-3 ? (this.alpha[t3] += e3 * n2, o2 = true) : this.alpha[t3] = this.alphaT[t3];
        }
        s2 || (s2 = o2 || Math.abs(r2 - this.lens) > 2e-3 || Math.abs(a2.t - a2.a) > 1e-4 || Math.abs(a2.v) > 1e-4 || Math.abs(h2.tx - h2.x) > 1e-4 || Math.abs(h2.ty - h2.y) > 1e-4 || Math.abs(h2.vx) > 1e-4 || Math.abs(h2.vy) > 1e-4), this.busy = s2;
      }
      this.camStep(t2), this.cardStep(t2) && (this.busy = true);
    }
    project(t2, e2, s2, a2) {
      let i2 = Math.exp(this.cam.lz), h2 = this.planeAngle(), l2 = this.tilt.y, r2 = (t2 - this.cam.x) * i2, n2 = (e2 - this.cam.y) * i2, o2 = 1150 / Math.max(60, 1150 + r2 * Math.sin(l2) - n2 * Math.sin(h2) - 80 * s2);
      return a2.x = this.w / 2 + r2 * Math.cos(l2) * o2, a2.y = this.h / 2 + n2 * Math.cos(h2) * o2, a2.f = o2, a2;
    }
    render() {
      let t2 = this.ctx;
      if (!t2 || 0 === this.w) return;
      t2.setTransform(this.dpr, 0, 0, this.dpr, 0, 0), t2.clearRect(0, 0, this.w, this.h);
      let e2 = Math.exp(this.cam.lz), s2 = this.w / 2, a2 = this.h / 2, i2 = this.planeAngle(), h2 = Math.cos(this.tilt.y), l2 = Math.sin(this.tilt.y), r2 = Math.cos(i2), n2 = Math.sin(i2), o2 = 0.85 * this.lens, c2 = this.mouse.x, d2 = this.mouse.y, m2 = this.counts;
      m2.fill(0);
      for (let t3 = 0; t3 < Z; t3++) {
        let i3 = this.lift[t3], u3 = (this.px[t3] - this.cam.x) * e2, x2 = (this.py[t3] - this.cam.y) * e2, y2 = 1150 / Math.max(60, 1150 + u3 * l2 - x2 * n2 - 80 * i3), p2 = s2 + u3 * h2 * y2, f2 = a2 + x2 * r2 * y2, M2 = this.rad[t3] * e2 * y2 * (1 + 0.3 * i3);
        if (o2 > 1e-3) {
          let t4 = p2 - c2, e3 = f2 - d2, s3 = t4 * t4 + e3 * e3;
          if (s3 < 6084) {
            let a3 = o2 * Math.exp(-s3 / 1352);
            p2 = c2 + t4 * (1 + a3), f2 = d2 + e3 * (1 + a3), M2 *= 1 + a3 * Math.max(0.25, 1 - s3 / 2704);
          }
        }
        this.sx[t3] = p2, this.sy[t3] = f2, this.sr[t3] = M2;
        let g2 = this.alpha[t3], v2 = g2 > 0.02 && p2 > -M2 && p2 < this.w + M2 && f2 > -M2 && f2 < this.h + M2;
        if (this.visibleDot[t3] = +!!v2, !v2) continue;
        let b2 = 4 * Math.round(7 * g2) + this.health[t3];
        this.bucketOf[t3] = b2, m2[b2 + 1]++;
      }
      for (let t3 = 1; t3 < m2.length; t3++) m2[t3] += m2[t3 - 1];
      let u2 = this.fillAt;
      u2.set(m2);
      for (let t3 = 0; t3 < Z; t3++)
        this.visibleDot[t3] && (this.drawOrder[u2[this.bucketOf[t3]]++] = t3);
      for (let e3 = 0; e3 < m2.length - 1; e3++) {
        let s3 = m2[e3], a3 = m2[e3 + 1];
        if (s3 === a3) continue;
        let i3 = e3 >> 2, h3 = 3 & e3;
        t2.globalAlpha = i3 / 7 * U[h3], t2.fillStyle = this.palette.dots[h3], t2.beginPath();
        for (let e4 = s3; e4 < a3; e4++) {
          let s4 = this.drawOrder[e4], a4 = Math.max(0.6, this.sr[s4]);
          t2.moveTo(this.sx[s4] + a4, this.sy[s4]), t2.arc(this.sx[s4], this.sy[s4], a4, 0, 2 * Math.PI);
        }
        t2.fill();
      }
      t2.globalAlpha = 1, this.ring(this.selected, this.palette.accent), this.hovered !== this.selected && this.ring(this.hovered, this.palette.ring), this.placeLabels(), this.placeCard();
    }
    ring(t2, e2) {
      let s2 = this.ctx;
      if (!s2 || t2 < 0 || !this.visibleDot[t2]) return;
      let a2 = Math.max(1.5, this.sr[t2]);
      s2.globalAlpha = U[this.health[t2]], s2.fillStyle = this.palette.dots[this.health[t2]], s2.beginPath(), s2.arc(this.sx[t2], this.sy[t2], a2, 0, 2 * Math.PI), s2.fill(), s2.globalAlpha = 1, s2.strokeStyle = e2, s2.lineWidth = 1.5, s2.beginPath(), s2.arc(this.sx[t2], this.sy[t2], a2 + 3, 0, 2 * Math.PI), s2.stroke();
    }
    placeLabel(t2, e2) {
      let s2 = this.clusters[t2];
      if (!s2 || 0 === this.w) return;
      let a2 = this.project(s2.x, s2.y - s2.r, 0, this.labelPoint);
      e2.style.transform = `translate3d(${a2.x.toFixed(1)}px, ${(a2.y - 10).toFixed(1)}px, 0)`;
    }
    placeLabels() {
      this.labelEls.forEach((t2, e2) => {
        t2 && this.placeLabel(e2, t2);
      });
    }
    cardTarget() {
      let t2, e2, s2, a2 = this.hovered >= 0, i2 = a2 ? this.hovered : this.selected;
      if (i2 < 0) return null;
      let { w: h2, h: l2 } = this.card;
      a2 ? (t2 = this.mouse.x, e2 = this.mouse.y, s2 = 18) : (t2 = this.sx[i2], e2 = this.sy[i2], s2 = this.sr[i2] + 12);
      let r2 = t2 + s2, n2 = e2 - l2 / 2;
      return r2 + h2 > this.w - 14 && (r2 = t2 - s2 - h2), {
        x: r2 = X(r2, 14, Math.max(14, this.w - h2 - 14)),
        y: n2 = X(n2, 14, Math.max(14, this.h - l2 - 14))
      };
    }
    cardStep(t2) {
      let e2 = this.cardTarget();
      if (!e2) return this.card.shown = false, false;
      let s2 = this.card;
      return !s2.shown || this.reduced ? (s2.x = e2.x, s2.y = e2.y, s2.vx = s2.vy = 0, s2.shown = true, false) : (s2.vx += (400 * (e2.x - s2.x) - 40 * s2.vx) * t2, s2.x += s2.vx * t2, s2.vy += (400 * (e2.y - s2.y) - 40 * s2.vy) * t2, s2.y += s2.vy * t2, Math.abs(e2.x - s2.x) > 0.1 || Math.abs(e2.y - s2.y) > 0.1 || Math.abs(s2.vx) > 0.5 || Math.abs(s2.vy) > 0.5);
    }
    placeCard() {
      this.cardEl && this.card.shown && (this.cardEl.style.transform = `translate3d(${this.card.x.toFixed(1)}px, ${this.card.y.toFixed(1)}px, 0)`);
    }
  }
  var ts = s(49360), ta = s.n(ts);
  let { spring: ti, stagger: th, duration: tl, ease: tr } = M.T, tn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function to({ text: t2 }) {
    let e2 = [...t2];
    return (0, l.jsxs)("span", {
      className: ta().roll,
      children: [
        (0, l.jsx)("span", { className: ta().srOnly, children: t2 }),
        (0, l.jsx)("span", {
          className: ta().rollVisual,
          "aria-hidden": "true",
          children: e2.map((t3, s2) => {
            let a2 = e2.length - 1 - s2;
            return t3 < "0" || t3 > "9" ? (0, l.jsx)(
              "span",
              { className: ta().sym, children: t3 },
              `s${a2}`
            ) : (0, l.jsx)(
              "span",
              {
                className: ta().wheel,
                children: (0, l.jsx)("span", {
                  className: ta().strip,
                  style: { "--d": t3, "--i": s2 },
                  children: tn.map(
                    (t4) => (0, l.jsx)("span", { children: t4 }, t4)
                  )
                })
              },
              `d${a2}`
            );
          })
        })
      ]
    });
  }
  function tc({ health: t2 }) {
    return (0, l.jsx)("span", {
      className: ta().swatch,
      "data-tone": k[t2],
      "aria-hidden": "true"
    });
  }
  function td({ store: t2, selected: e2, attach: s2, measure: a2 }) {
    let i2 = (0, r.useSyncExternalStore)(t2.subscribe, t2.get, () => -1), h2 = i2 >= 0 ? i2 : e2, [n2, o2] = (0, r.useState)(-1);
    h2 >= 0 && h2 !== n2 && o2(h2);
    let c2 = I[h2 >= 0 ? h2 : n2];
    return (0, r.useLayoutEffect)(() => {
      a2();
    }, [c2, a2]), (0, l.jsx)("div", {
      ref: s2,
      className: ta().card,
      "data-open": h2 >= 0,
      "aria-hidden": "true",
      children: c2 && (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsx)("div", { className: ta().cardName, children: c2.name }),
          (0, l.jsxs)("div", {
            className: ta().cardMeta,
            children: [
              g[c2.plan],
              " \xB7 ",
              v[c2.region],
              " \xB7 ",
              b[c2.industry]
            ]
          }),
          (0, l.jsxs)("dl", {
            className: ta().cardRows,
            children: [
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("dt", { children: "MRR" }),
                  (0, l.jsx)("dd", {
                    className: ta().num,
                    children: q(c2.mrr)
                  })
                ]
              }),
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("dt", { children: "Owner" }),
                  (0, l.jsx)("dd", { children: c2.owner })
                ]
              }),
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("dt", { children: "Health" }),
                  (0, l.jsxs)("dd", {
                    className: ta().health,
                    children: [
                      (0, l.jsx)(tc, { health: c2.health }),
                      w[c2.health]
                    ]
                  })
                ]
              })
            ]
          }),
          (0, l.jsx)("p", { className: ta().cardNote, children: c2.note })
        ]
      })
    });
  }
  function tm() {
    let t2, e2, s2, a2, i2, h2, M2, v2, b2 = !!(0, c.I)(), z2 = (0, r.useId)(), A2 = `${z2}-title`, N2 = `${z2}-hint`, C2 = `${z2}-stage`, $2 = (0, r.useRef)(null), R2 = (0, r.useRef)(null), F2 = (0, r.useRef)(null), S2 = (0, r.useRef)(null), P2 = (0, r.useRef)(null), [T2] = (0, r.useState)(() => {
      let t3, e3;
      return t3 = -1, e3 = /* @__PURE__ */ new Set(), {
        get: () => t3,
        set: (s3) => {
          s3 !== t3 && (t3 = s3, e3.forEach((t4) => t4()));
        },
        subscribe: (t4) => (e3.add(t4), () => {
          e3.delete(t4);
        })
      };
    }), E2 = (0, r.useRef)(null), L2 = (0, r.useRef)(/* @__PURE__ */ new Map()), D2 = (0, r.useCallback)((t3) => {
      E2.current = t3, S2.current?.attachCard(t3);
    }, []), Z2 = (0, r.useCallback)(() => S2.current?.measureCard(), []), G2 = (0, r.useCallback)((t3) => {
      let e3 = Number(t3.dataset.index);
      return L2.current.set(e3, t3), S2.current?.attachLabel(e3, t3), () => {
        L2.current.get(e3) === t3 && (L2.current.delete(e3), S2.current?.attachLabel(e3, null));
      };
    }, []), [K2, U2] = (0, r.useState)("all"), [X2, J2] = (0, r.useState)(true), [Q2, tt2] = (0, r.useState)(-1), [ts2, tn2] = (0, r.useState)(-1), [tm2, tu2] = (0, r.useState)(-1), [tx, ty] = (0, r.useState)("mrr"), [tp, tf] = (0, r.useState)(false), [tM, tg] = (0, r.useState)(false), [tv, tb] = (0, r.useState)(false), tw = O(K2), t_ = O("all" === K2 ? "health" : K2), tk = "all" === K2 ? "health" : K2, tj = j.find((t3) => t3.key === K2) ?? j[0], tz = ts2 >= 0 && tw[ts2] ? tw[ts2] : V, tA = (0, r.useMemo)(
      () => [...t_].sort(
        (t3, e3) => ("mrr" === tx ? e3.mrr - t3.mrr : e3.count - t3.count) || t3.index - e3.index
      ),
      [t_, tx]
    ), tN = Math.max(...t_.map((t3) => "mrr" === tx ? t3.mrr : t3.count)), tC = [...tw].sort((t3, e3) => e3.mrr - t3.mrr).map((t3) => t3.index);
    (0, r.useEffect)(() => {
      let t3 = R2.current, e3 = F2.current, s3 = $2.current;
      if (!t3 || !e3 || !s3) return;
      let a3 = new te(e3, {
        hover: T2.set,
        select: (t4) => {
          tt2(t4), tb(false);
        },
        settle: J2,
        focus: tn2,
        view: tf,
        interact: () => tg(true)
      });
      S2.current = a3, a3.attachCard(E2.current), L2.current.forEach((t4, e4) => a3.attachLabel(e4, t4));
      let i3 = () => {
        let t4 = getComputedStyle(s3), e4 = (e5, s4) => t4.getPropertyValue(e5).trim() || s4;
        a3.setPalette({
          dots: [
            e4("--text-muted", "#8a8a8a"),
            e4("--success", "#1f8a4c"),
            e4("--warning", "#b7791f"),
            e4("--danger", "#c53030")
          ],
          ring: e4("--foreground", "#111"),
          accent: e4("--accent", "#333")
        });
      };
      i3();
      let h3 = new MutationObserver(i3);
      h3.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme", "data-accent", "class", "style"]
      });
      let l2 = matchMedia("(prefers-color-scheme: dark)");
      l2.addEventListener("change", i3);
      let r2 = new ResizeObserver(
        ([t4]) => a3.resize(
          t4.contentRect.width,
          t4.contentRect.height,
          Math.min(2, window.devicePixelRatio || 1)
        )
      );
      r2.observe(t3);
      let n2 = new IntersectionObserver(
        ([t4]) => a3.setVisible(t4.isIntersecting),
        { threshold: 0.2 }
      );
      n2.observe(t3);
      let o2 = () => a3.setHidden(document.hidden);
      o2(), document.addEventListener("visibilitychange", o2);
      let c2 = (t4) => a3.wheel(t4);
      return t3.addEventListener("wheel", c2, { passive: false }), () => {
        a3.destroy(), S2.current = null, h3.disconnect(), l2.removeEventListener("change", i3), r2.disconnect(), n2.disconnect(), document.removeEventListener("visibilitychange", o2), t3.removeEventListener("wheel", c2);
      };
    }, [T2]), (0, r.useEffect)(() => {
      S2.current?.setReduced(b2);
    }, [b2]), (0, r.useEffect)(() => {
      let t3 = tm2 >= 0 ? tm2 : ts2;
      S2.current?.setHighlight(
        t3 >= 0 ? { group: tm2 >= 0 ? tk : K2, cat: t3 } : null
      );
    }, [tm2, ts2, K2, tk]);
    let t$ = (t3, e3 = -1) => {
      let s3 = S2.current;
      if (t3 === K2) {
        e3 >= 0 && s3?.focus(e3);
        return;
      }
      U2(t3), tu2(-1), tt2(-1), tn2(e3), s3?.select(-1, false), s3?.setGroup(t3, e3);
    }, tR = (t3) => {
      let e3 = I.filter((t4) => ts2 < 0 || H(K2, t4) === ts2).sort((t4, e4) => e4.mrr - t4.mrr || t4.id - e4.id).map((t4) => t4.id), s3 = e3.indexOf(Q2), a3 = e3[s3 < 0 ? t3 > 0 ? 0 : e3.length - 1 : Math.min(e3.length - 1, Math.max(0, s3 + t3))];
      tt2(a3), tb(true), S2.current?.select(a3, true);
    }, tF = (t3) => {
      let e3 = S2.current;
      if (e3)
        if ("pointerdown" === t3.type) {
          if (t3.target.closest("button")) return;
          t3.currentTarget.setPointerCapture(t3.pointerId), e3.pointerDown(t3.nativeEvent);
        } else
          "pointermove" === t3.type ? e3.pointerMove(t3.nativeEvent) : "pointerup" === t3.type ? e3.pointerUp(t3.nativeEvent) : e3.pointerCancel(t3.nativeEvent);
    }, tS = ts2 >= 0 && tw[ts2] ? tw[ts2].label : "All accounts", tP = Q2 >= 0 ? I[Q2] : null, tT = tv && tP ? `${tP.name}. ${g[tP.plan]}, ${q(tP.mrr)} MRR, owner ${tP.owner}, ${w[tP.health].toLowerCase()}. ${tP.note}.` : ts2 >= 0 && tw[ts2] ? `${tw[ts2].label}: ${t2 = tw[ts2].count, W.format(t2)} accounts, ${B(tw[ts2].mrr)} MRR, ${B(tw[ts2].healthMrr[3])} at risk.` : "all" === K2 ? "Showing all accounts in one cluster." : `Grouped by ${tj.noun} into ${tw.length} clusters. ${tw[tC[0]].label} leads with ${B(Math.max(...tw.map((t3) => t3.mrr)))} MRR.`, tE = `Customer galaxy: ${e2 = V.count, W.format(e2)} accounts with ${B(V.mrr)} in monthly recurring revenue, ${"all" === K2 ? "shown as one cluster" : `grouped by ${tj.noun}`}. Dot size shows MRR and color shows health.`, tI = b2 ? { duration: 0 } : ti.smooth, { content: tL, height: tH } = (s2 = (0, r.useRef)(null), a2 = (0, n.d)("auto"), i2 = (0, r.useRef)(K2), h2 = (0, r.useRef)(0), (0, r.useLayoutEffect)(() => {
      i2.current !== K2 && (i2.current = K2, h2.current = performance.now() + 700);
    }, [K2]), (0, r.useEffect)(() => {
      let t3 = s2.current;
      if (!t3 || "u" < typeof ResizeObserver) return;
      let e3 = false, i3 = new ResizeObserver(() => {
        let s3 = t3.offsetHeight;
        if (!e3 || b2 || performance.now() > h2.current) {
          e3 = s3 > 0, a2.jump(s3 || "auto");
          return;
        }
        (0, o.i)(a2, s3, ti.smooth);
      });
      return i3.observe(t3), () => i3.disconnect();
    }, [a2, b2]), { content: s2, height: a2 }), tD = [...tr.enter];
    return (0, l.jsxs)("section", {
      ref: $2,
      className: ta().root,
      "aria-labelledby": A2,
      children: [
        (0, l.jsxs)("header", {
          className: ta().header,
          children: [
            (0, l.jsx)("h2", {
              id: A2,
              className: ta().title,
              children: "Where your revenue lives"
            }),
            (0, l.jsxs)("p", {
              className: ta().lede,
              children: [
                (M2 = V.count, W.format(M2)),
                " accounts, sized by MRR and colored by health."
              ]
            })
          ]
        }),
        (0, l.jsxs)("div", {
          className: ta().toolbar,
          children: [
            (0, l.jsx)(d.o, {
              id: `${z2}-tabs`,
              children: (0, l.jsx)("div", {
                ref: P2,
                className: ta().tabs,
                role: "tablist",
                "aria-label": "Group accounts by",
                onKeyDown: (t3) => {
                  let e3 = j.findIndex((t4) => t4.key === K2), s3 = "ArrowRight" === t3.key ? (e3 + 1) % j.length : "ArrowLeft" === t3.key ? (e3 - 1 + j.length) % j.length : "Home" === t3.key ? 0 : "End" === t3.key ? j.length - 1 : -1;
                  s3 < 0 || (t3.preventDefault(), t$(j[s3].key), P2.current?.querySelectorAll('[role="tab"]')[s3]?.focus());
                },
                children: j.map(
                  (t3) => (0, l.jsxs)(
                    "button",
                    {
                      type: "button",
                      role: "tab",
                      id: `${z2}-tab-${t3.key}`,
                      "aria-selected": K2 === t3.key,
                      "aria-controls": C2,
                      tabIndex: K2 === t3.key ? 0 : -1,
                      className: ta().tab,
                      onClick: () => t$(t3.key),
                      children: [
                        K2 === t3.key && (0, l.jsx)(m.PY1.span, {
                          layoutId: "tab",
                          className: ta().tabPill,
                          transition: b2 ? { duration: 0 } : ti.morph
                        }),
                        (0, l.jsx)("span", {
                          className: ta().tabLabel,
                          children: t3.label
                        })
                      ]
                    },
                    t3.key
                  )
                )
              })
            }),
            (0, l.jsxs)("ul", {
              className: ta().legend,
              "aria-label": "Legend",
              children: [
                _.map(
                  (t3) => (0, l.jsxs)(
                    "li",
                    { children: [(0, l.jsx)(tc, { health: t3 }), w[t3]] },
                    t3
                  )
                ),
                (0, l.jsxs)("li", {
                  className: ta().sizeKey,
                  children: [
                    (0, l.jsxs)("span", {
                      className: ta().sizeDots,
                      "aria-hidden": "true",
                      children: [
                        (0, l.jsx)("span", {}),
                        (0, l.jsx)("span", {})
                      ]
                    }),
                    "Size is MRR"
                  ]
                })
              ]
            })
          ]
        }),
        (0, l.jsxs)("div", {
          className: ta().body,
          children: [
            (0, l.jsxs)("div", {
              className: ta().stageWrap,
              role: "tabpanel",
              id: C2,
              "aria-labelledby": `${z2}-tab-${K2}`,
              children: [
                (0, l.jsxs)("div", {
                  ref: R2,
                  className: ta().stage,
                  "data-zoomed": tp,
                  tabIndex: 0,
                  role: "application",
                  "aria-roledescription": "interactive chart",
                  "aria-label": tE,
                  "aria-describedby": N2,
                  onPointerDown: tF,
                  onPointerMove: tF,
                  onPointerUp: tF,
                  onPointerCancel: tF,
                  onPointerLeave: () => S2.current?.pointerLeave(),
                  onDoubleClick: (t3) => S2.current?.doubleClick(t3.nativeEvent),
                  onKeyDown: (t3) => {
                    let e3 = S2.current;
                    if (!e3) return;
                    let s3 = true;
                    if (("ArrowRight" === t3.key || "ArrowLeft" === t3.key) && tw.length > 1) {
                      let s4 = tC.indexOf(ts2), a3 = "ArrowRight" === t3.key ? 1 : -1, i3 = tC[s4 < 0 ? a3 > 0 ? 0 : tC.length - 1 : (s4 + a3 + tC.length) % tC.length];
                      tt2(-1), e3.select(-1, true), e3.focus(i3);
                    } else
                      "ArrowRight" === t3.key || "ArrowDown" === t3.key ? tR(1) : "ArrowLeft" === t3.key || "ArrowUp" === t3.key ? tR(-1) : "+" === t3.key || "=" === t3.key ? e3.zoomBy(1.6) : "-" === t3.key || "_" === t3.key ? e3.zoomBy(0.625) : "Escape" === t3.key && Q2 >= 0 ? (tt2(-1), e3.select(-1, false)) : "Escape" === t3.key || "0" === t3.key || "Home" === t3.key ? e3.resetView() : s3 = false;
                    s3 && (t3.preventDefault(), tg(true));
                  },
                  children: [
                    (0, l.jsx)("canvas", {
                      ref: F2,
                      className: ta().canvas,
                      "aria-hidden": "true"
                    }),
                    (0, l.jsx)("div", {
                      className: ta().labels,
                      "aria-hidden": "true",
                      children: X2 && "all" !== K2 && tw.map((t3) => {
                        let e3;
                        return (0, l.jsx)(
                          "div",
                          {
                            className: ta().label,
                            "data-dim": ts2 >= 0 && ts2 !== t3.index || tm2 >= 0 && tm2 !== t3.index,
                            "data-index": t3.index,
                            ref: G2,
                            children: (0, l.jsxs)("div", {
                              className: ta().labelInner,
                              style: { "--i": tC.indexOf(t3.index) },
                              children: [
                                (0, l.jsx)("span", {
                                  className: ta().labelName,
                                  children: t3.label
                                }),
                                (0, l.jsxs)("span", {
                                  className: ta().labelMeta,
                                  children: [
                                    (0, l.jsx)(to, { text: B(t3.mrr) }),
                                    (0, l.jsxs)("span", {
                                      className: ta().labelCount,
                                      children: [
                                        (0, l.jsx)("span", {
                                          className: ta().dotSep,
                                          children: "\xB7"
                                        }),
                                        (0, l.jsx)(to, {
                                          text: (e3 = t3.count, W.format(e3))
                                        }),
                                        " accounts"
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          },
                          `${K2}-${t3.index}`
                        );
                      })
                    }),
                    (0, l.jsx)(td, {
                      store: T2,
                      selected: Q2,
                      attach: D2,
                      measure: Z2
                    }),
                    (0, l.jsx)(u.N, {
                      initial: false,
                      children: ts2 >= 0 && tw[ts2] && (0, l.jsxs)(
                        m.PY1.button,
                        {
                          type: "button",
                          className: ta().back,
                          onClick: () => S2.current?.resetView(),
                          initial: { opacity: 0, x: -8 },
                          animate: { opacity: 1, x: 0 },
                          exit: { opacity: 0, x: -8 },
                          transition: b2 ? { duration: 0 } : { duration: tl.standard, ease: tD },
                          children: [
                            (0, l.jsx)(x.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            "Show all"
                          ]
                        },
                        "back"
                      )
                    }),
                    (0, l.jsxs)("p", {
                      className: ta().hint,
                      "data-hidden": tM,
                      "aria-hidden": "true",
                      children: [
                        (0, l.jsx)("span", {
                          className: ta().hintFine,
                          children: "Drag to pan, scroll to zoom, double click a cluster to fly in"
                        }),
                        (0, l.jsx)("span", {
                          className: ta().hintCoarse,
                          children: "Pinch to zoom, double tap a cluster to fly in"
                        })
                      ]
                    }),
                    (0, l.jsxs)("div", {
                      className: ta().zoom,
                      children: [
                        (0, l.jsx)("button", {
                          type: "button",
                          "aria-label": "Zoom out",
                          onClick: () => S2.current?.zoomBy(0.625),
                          children: (0, l.jsx)(y.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        }),
                        (0, l.jsx)("button", {
                          type: "button",
                          "aria-label": "Zoom in",
                          onClick: () => S2.current?.zoomBy(1.6),
                          children: (0, l.jsx)(p.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        }),
                        (0, l.jsx)("button", {
                          type: "button",
                          "aria-label": "Fit all accounts",
                          disabled: !tp,
                          onClick: () => S2.current?.resetView(),
                          children: (0, l.jsx)(f.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, l.jsx)("p", {
                  id: N2,
                  className: ta().srOnly,
                  children: "Use left and right arrows to fly between clusters, up and down to step through accounts by MRR, plus and minus to zoom, and Escape to reset."
                })
              ]
            }),
            (0, l.jsxs)("aside", {
              className: ta().panel,
              "aria-label": "Totals",
              children: [
                (0, l.jsx)("div", {
                  className: ta().scope,
                  children: (0, l.jsx)(u.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, l.jsx)(
                      m.PY1.span,
                      {
                        className: ta().scopeText,
                        initial: !b2 && { opacity: 0, y: 4 },
                        animate: { opacity: 1, y: 0 },
                        exit: b2 ? { opacity: 0, transition: { duration: 0 } } : {
                          opacity: 0,
                          transition: { duration: tl.instant }
                        },
                        transition: { duration: tl.standard, ease: tD },
                        children: tS
                      },
                      tS
                    )
                  })
                }),
                (0, l.jsxs)("div", {
                  className: ta().kpiMain,
                  children: [
                    (0, l.jsx)("span", {
                      className: ta().kpiLabel,
                      children: "Monthly recurring revenue"
                    }),
                    (0, l.jsx)("span", {
                      className: ta().kpiValue,
                      children: (0, l.jsx)(to, { text: B(tz.mrr) })
                    })
                  ]
                }),
                (0, l.jsxs)("dl", {
                  className: ta().kpis,
                  children: [
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("dt", { children: "Accounts" }),
                        (0, l.jsx)("dd", {
                          children: (0, l.jsx)(to, {
                            text: (v2 = tz.count, W.format(v2))
                          })
                        })
                      ]
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsxs)("dt", {
                          children: [
                            (0, l.jsx)(tc, { health: 1 }),
                            "Expanding"
                          ]
                        }),
                        (0, l.jsx)("dd", {
                          children: (0, l.jsx)(to, {
                            text: B(tz.healthMrr[1])
                          })
                        })
                      ]
                    }),
                    (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsxs)("dt", {
                          children: [(0, l.jsx)(tc, { health: 3 }), "At risk"]
                        }),
                        (0, l.jsx)("dd", {
                          children: (0, l.jsx)(to, {
                            text: B(tz.healthMrr[3])
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, l.jsxs)("div", {
                  className: ta().breakdown,
                  children: [
                    (0, l.jsxs)("div", {
                      className: ta().breakdownHead,
                      children: [
                        (0, l.jsxs)("h3", {
                          children: [
                            "By ",
                            "health" === tk ? "health" : tj.noun
                          ]
                        }),
                        (0, l.jsx)("div", {
                          className: ta().sort,
                          role: "group",
                          "aria-label": "Sort rows by",
                          children: ["mrr", "count"].map(
                            (t3) => (0, l.jsx)(
                              "button",
                              {
                                type: "button",
                                "aria-pressed": tx === t3,
                                onClick: () => ty(t3),
                                children: "mrr" === t3 ? "MRR" : "Accounts"
                              },
                              t3
                            )
                          )
                        })
                      ]
                    }),
                    (0, l.jsx)(m.PY1.div, {
                      className: ta().rowsWrap,
                      style: { height: tH },
                      children: (0, l.jsx)("div", {
                        ref: tL,
                        children: (0, l.jsx)(
                          "ul",
                          {
                            className: ta().rows,
                            children: tA.map((t3, e3) => {
                              let s3, a3, i3 = "mrr" === tx ? t3.mrr : t3.count, h3 = _.map((e4) => ({
                                h: e4,
                                v: "mrr" === tx ? t3.healthMrr[e4] : t3.healthCount[e4]
                              })).filter((t4) => t4.v > 0);
                              return (0, l.jsx)(
                                m.PY1.li,
                                {
                                  layout: "position",
                                  transition: { layout: tI },
                                  initial: !b2 && { opacity: 0, y: 4 },
                                  animate: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                      duration: tl.standard,
                                      ease: tD,
                                      delay: b2 ? 0 : e3 * th.item
                                    }
                                  },
                                  children: (0, l.jsxs)("button", {
                                    type: "button",
                                    className: ta().row,
                                    "aria-pressed": "all" !== K2 && ts2 === t3.index,
                                    "data-lit": tm2 === t3.index,
                                    "aria-label": `${t3.label}: ${B(t3.mrr)} MRR, ${s3 = t3.count, W.format(s3)} accounts, ${Y(t3.healthMrr[3], t3.mrr)}% of MRR at risk. ${"all" === K2 ? "Group by health and fly to this cluster" : ts2 === t3.index ? "Show all clusters" : "Fly to this cluster"}`,
                                    onPointerEnter: (e4) => {
                                      "mouse" === e4.pointerType && tu2(t3.index);
                                    },
                                    onPointerLeave: () => tu2(-1),
                                    onFocus: () => tu2(t3.index),
                                    onBlur: () => tu2(-1),
                                    onClick: () => {
                                      var e4;
                                      let s4;
                                      return e4 = t3.index, s4 = S2.current, void ((tg(true), "all" === K2) ? t$("health", e4) : ts2 === e4 ? s4?.resetView() : s4?.focus(e4));
                                    },
                                    children: [
                                      (0, l.jsxs)("span", {
                                        className: ta().rowTop,
                                        children: [
                                          (0, l.jsx)("span", {
                                            className: ta().rowName,
                                            children: t3.label
                                          }),
                                          (0, l.jsx)("span", {
                                            className: ta().rowValue,
                                            children: (0, l.jsx)(to, {
                                              text: "mrr" === tx ? B(i3) : W.format(i3)
                                            })
                                          })
                                        ]
                                      }),
                                      (0, l.jsx)("span", {
                                        className: ta().track,
                                        children: (0, l.jsx)("span", {
                                          className: ta().fill,
                                          style: {
                                            width: `${i3 / tN * 100}%`
                                          },
                                          children: h3.map(
                                            (t4) => (0, l.jsx)(
                                              "span",
                                              {
                                                className: ta().seg,
                                                "data-tone": k[t4.h],
                                                style: { flexGrow: t4.v }
                                              },
                                              t4.h
                                            )
                                          )
                                        })
                                      }),
                                      (0, l.jsxs)("span", {
                                        className: ta().rowMeta,
                                        children: [
                                          "mrr" === tx ? `${a3 = t3.count, W.format(a3)} accounts` : B(t3.mrr),
                                          "health" !== tk && (0, l.jsxs)(l.Fragment, {
                                            children: [
                                              " \xB7 ",
                                              Y(t3.healthMrr[3], t3.mrr),
                                              "% at risk"
                                            ]
                                          })
                                        ]
                                      })
                                    ]
                                  })
                                },
                                t3.index
                              );
                            })
                          },
                          K2
                        )
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, l.jsx)("div", {
          className: ta().srOnly,
          children: (0, l.jsxs)("table", {
            children: [
              (0, l.jsxs)("caption", {
                children: [
                  "Accounts and monthly recurring revenue by ",
                  "health" === tk ? "health" : tj.noun
                ]
              }),
              (0, l.jsx)("thead", {
                children: (0, l.jsxs)("tr", {
                  children: [
                    (0, l.jsx)("th", {
                      scope: "col",
                      children: "health" === tk ? "Health" : tj.label
                    }),
                    (0, l.jsx)("th", { scope: "col", children: "Accounts" }),
                    (0, l.jsx)("th", { scope: "col", children: "MRR" }),
                    _.map(
                      (t3) => (0, l.jsxs)(
                        "th",
                        { scope: "col", children: [w[t3], " accounts"] },
                        t3
                      )
                    )
                  ]
                })
              }),
              (0, l.jsx)("tbody", {
                children: t_.map((t3) => {
                  let e3;
                  return (0, l.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, l.jsx)("th", { scope: "row", children: t3.label }),
                        (0, l.jsx)("td", {
                          children: (e3 = t3.count, W.format(e3))
                        }),
                        (0, l.jsx)("td", { children: q(t3.mrr) }),
                        _.map((e4) => {
                          let s3;
                          return (0, l.jsx)(
                            "td",
                            { children: (s3 = t3.healthCount[e4], W.format(s3)) },
                            e4
                          );
                        })
                      ]
                    },
                    t3.index
                  );
                })
              })
            ]
          })
        }),
        (0, l.jsx)("p", {
          className: ta().srOnly,
          "aria-live": "polite",
          children: tT
        })
      ]
    });
  }
  let tu = tm;
}

__m(__module,__exports,__require);
});
A.reg(8962, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => k });
  var h = a(51811);
  let d = {
    name: "maximize-2",
    size: 24,
    node: [
      ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
      ["path", { d: "m21 3-7 7", key: "1l2asr" }],
      ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
      ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
    ]
  };
  d.node;
  let k = (0, h.A)(d);
}

__m(__module,__exports,__require);
});
A.regCss(49360, ".root{box-sizing:border-box;width:min(100%,1200px);min-width:0;margin-inline:auto;overflow:hidden;container-type:inline-size;contain-intrinsic-inline-size:1200px;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.num{font-variant-numeric:tabular-nums}\n.header{display:grid;gap:2px;padding:16px 20px 0}\n@container (max-width: 620px){.header{padding:16px 16px 0}\n.title{margin:0;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.lede{margin:0;color:var(--text-secondary);text-wrap:pretty}\n.toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 20px;padding:12px 20px 16px;border-bottom:1px solid var(--border)}\n.toolbar{padding:12px 16px}\n.tabs{isolation:isolate;display:inline-flex;max-width:100%;gap:2px;padding:2px;overflow-x:auto;border:1px solid var(--border);border-radius:10px;background:var(--surface-muted);scrollbar-width:none}\n.tabs::-webkit-scrollbar{display:none}\n.tab{position:relative;flex:0 0 auto;min-height:28px;padding:0 10px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;font-weight:500;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.tab[aria-selected=true]{color:var(--foreground)}\n@container (max-width: 420px){.tab{padding:0 8px}\n@container (max-width: 340px){.tab{padding:0 8px;font-size:var(--text-xs)}\n@media (prefers-reduced-motion:reduce){.back,.card,.fill,.hint,.label,.row,.seg,.sort button,.strip,.tab{transition:none}\n.tabPill{position:absolute;z-index:-1;inset:0;border-radius:inherit;background:var(--surface);box-shadow:var(--shadow-resting),0 0 0 1px var(--border)}\n.tabLabel{position:relative}\n.legend{display:flex;flex-wrap:wrap;align-items:center;gap:6px 16px;margin:0;padding:0;color:var(--text-secondary);font-size:var(--text-xs);list-style:none}\n.legend li{display:inline-flex;align-items:center;gap:6px}\n.swatch{display:inline-block;flex:none;width:8px;height:8px;border-radius:50%;background:var(--text-muted)}\n.swatch[data-tone=neutral]{opacity:.72}\n.swatch[data-tone=success]{background:var(--success)}\n.swatch[data-tone=warning]{background:var(--warning)}\n.swatch[data-tone=danger]{background:var(--danger)}\n.sizeKey{padding-left:16px;border-left:1px solid var(--border)}\n.sizeKey{padding-left:0;border-left:0}\n.sizeDots{display:inline-flex;align-items:center;gap:3px}\n.sizeDots span{display:block;width:4px;height:4px;border-radius:50%;background:var(--text-muted);opacity:.72}\n.sizeDots span+span{width:10px;height:10px}\n.body{display:grid}\n@container (min-width: 880px){.body{grid-template-columns:minmax(0,1fr) 288px}\n.panel{border-left:1px solid var(--border)}\n@container (max-width: 879px){.panel{border-top:1px solid var(--border)}\n.panel{display:grid;align-content:start;gap:20px;min-width:0;padding:16px 20px 20px}\n@container (max-width: 879px){.panel{grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);grid-template-rows:auto auto auto 1fr;column-gap:32px}\n.panel{grid-template-columns:minmax(0,1fr);grid-template-rows:none;padding:16px}\n.stageWrap{position:relative;min-width:0}\n.stage{position:relative;height:clamp(360px,52cqi,560px);overflow:hidden;background:var(--surface);cursor:grab;touch-action:pan-y;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}\n.stage[data-zoomed=true]{touch-action:none}\n.stage:active{cursor:grabbing}\n.stage{height:380px}\n.canvas{position:absolute;inset:0;display:block;width:100%;height:100%}\n.labels{position:absolute;inset:0;pointer-events:none}\n.label{position:absolute;top:0;left:0;will-change:transform;transition:opacity var(--duration-standard) var(--ease-standard)}\n.label[data-dim=true]{opacity:.3}\n.labelInner{display:grid;justify-items:center;gap:1px;translate:-50% -100%;white-space:nowrap;text-align:center;animation:labelIn var(--duration-standard) var(--ease-enter) both;animation-delay:calc(var(--i) * 40ms)}\n.labelInner{animation:none}\n.labelName{color:var(--foreground);font-weight:500}\n.labelMeta{display:block;color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.dotSep{padding-inline:4px;color:var(--text-muted)}\n.roll{position:relative;display:inline-flex}\n.rollVisual{display:inline-flex;font-variant-numeric:tabular-nums;white-space:nowrap}\n.wheel{display:inline-block;height:1.2em;overflow:hidden;line-height:1.2em}\n.strip{display:flex;flex-direction:column;transform:translateY(calc(var(--d) * -1.2em));transition:transform var(--duration-spring) var(--ease-spring) calc(var(--i) * 26ms)}\n.strip>span{display:block;height:1.2em;text-align:center}\n@starting-style{.strip{transform:translateY(0)}\n.sym{display:inline-block;line-height:1.2em}\n.card{position:absolute;top:0;left:0;z-index:3;width:248px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface-raised);box-shadow:var(--shadow-floating);pointer-events:none;opacity:0;scale:.96;transform-origin:0 50%;transition:opacity var(--duration-fast) var(--ease-standard),scale var(--duration-spring) var(--ease-spring);will-change:transform}\n.card[data-open=true]{opacity:1;scale:1}\n.card{width:224px}\n.cardName{overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.cardMeta{margin-top:1px;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.cardRows{display:grid;gap:4px;margin:10px 0 0;padding-top:10px;border-top:1px solid var(--border-subtle)}\n.cardRows>div{display:flex;align-items:baseline;justify-content:space-between;gap:12px}\n.cardRows dt{color:var(--text-secondary)}\n.cardRows dd{margin:0;font-weight:500;text-align:right}\n.health{display:inline-flex;align-items:center;gap:6px}\n.cardNote{margin:10px 0 0;color:var(--text-secondary);font-size:var(--text-xs)}\n.back{position:absolute;top:12px;left:12px;z-index:2;display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 12px 0 10px;border:1px solid var(--border);border-radius:10px;box-shadow:var(--shadow-resting);background:var(--surface);color:var(--foreground);font:inherit;font-weight:500;letter-spacing:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),scale var(--duration-fast) var(--ease-standard)}\n.back:active{scale:.97;background:var(--surface-muted)}\n@media (hover:hover) and (pointer:fine){.back:hover,.zoom button:not(:disabled):hover{color:var(--foreground);background:var(--surface-muted)}\n.back:active{scale:none}\n.hint{position:absolute;bottom:20px;left:16px;z-index:1;max-width:calc(100% - 160px);margin:0;color:var(--text-muted);font-size:var(--text-xs);pointer-events:none;transition:opacity var(--duration-considered) var(--ease-standard)}\n.hint[data-hidden=true]{opacity:0}\n.hint{max-width:calc(100% - 150px)}\n.hintCoarse{display:none}\n.hintCoarse{display:inline}\n@media (pointer:coarse){.hintFine{display:none}\n.zoom{position:absolute;right:12px;bottom:12px;z-index:2;display:flex;gap:2px;padding:2px;border:1px solid var(--border);border-radius:10px;background:var(--surface);box-shadow:var(--shadow-resting)}\n.zoom button{display:grid;place-items:center;width:28px;height:28px;padding:0;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.zoom button:active{background:var(--surface-muted);color:var(--foreground)}\n.zoom button:disabled{opacity:.35;cursor:default}\n.scope{position:relative;display:flex;min-height:20px;color:var(--text-secondary)}\n.kpiMain,.kpis,.scope{grid-column:1}\n.scopeText{display:inline-block;white-space:nowrap}\n.kpiMain{display:grid;gap:2px;margin-top:-14px}\n.kpiLabel{color:var(--text-muted);font-size:var(--text-xs)}\n.kpiValue{font-size:var(--text-2xl);font-weight:500;line-height:var(--leading-display)}\n.kpis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0;padding-bottom:16px;border-bottom:1px solid var(--border-subtle)}\n.kpis>div{display:grid;gap:2px;min-width:0}\n.kpis dt{display:inline-flex;align-items:center;gap:6px;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}\n.kpis dd{margin:0;font-size:var(--text-base);font-weight:500}\n.kpis{grid-template-columns:repeat(2,minmax(0,1fr))}\n.breakdown{display:grid;gap:10px}\n.breakdown{grid-column:2;grid-row:1/-1}\n.breakdown{grid-column:1;grid-row:auto}\n.breakdownHead{display:flex;align-items:center;justify-content:space-between;gap:12px}\n.breakdownHead h3{margin:0;font-size:inherit;font-weight:500}\n.sort{display:inline-flex;gap:2px;padding:2px;border:1px solid var(--border);border-radius:8px;background:var(--surface-muted)}\n.sort button{height:24px;padding:0 8px;border:0;border-radius:6px;background:transparent;color:var(--text-muted);font:inherit;font-size:var(--text-xs);font-weight:500;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.sort button[aria-pressed=true]{background:var(--surface);color:var(--foreground);box-shadow:var(--shadow-resting),0 0 0 1px var(--border)}\n.sort button:active{color:var(--foreground)}\n.sort button:not([aria-pressed=true]):hover{color:var(--text-secondary)}\n.rowsWrap{margin:0 -8px;overflow:hidden}\n.rows{display:grid;gap:0;margin:0;padding:0;list-style:none}\n.row{display:grid;gap:6px;width:100%;padding:8px;border:0;border-radius:8px;background:transparent;color:inherit;font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.row:active,.row[aria-pressed=true],.row[data-lit=true]{background:var(--surface-muted)}\n@media (hover:hover) and (pointer:fine){.row:hover{background:var(--surface-muted)}\n.rowTop{display:flex;align-items:baseline;justify-content:space-between;gap:12px}\n.rowName{min-width:0;overflow:hidden;color:var(--foreground);text-overflow:ellipsis;white-space:nowrap}\n.rowValue{flex:none;font-weight:500}\n.track{display:block;height:4px;overflow:hidden;border-radius:var(--radius-pill);background:var(--border-subtle)}\n.fill{display:flex;gap:2px;height:100%;min-width:4px;transition:width var(--duration-spring) var(--ease-spring)}\n.seg{flex:1 1 0;min-width:2px;height:100%;background:var(--text-muted);transition:flex-grow var(--duration-spring) var(--ease-spring)}\n.seg:first-child{border-radius:var(--radius-pill) 0 0 var(--radius-pill)}\n.seg:last-child{border-radius:0 var(--radius-pill) var(--radius-pill) 0}\n.seg:only-child{border-radius:var(--radius-pill)}\n.seg[data-tone=neutral]{opacity:.5}\n.seg[data-tone=success]{background:var(--success)}\n.seg[data-tone=warning]{background:var(--warning)}\n.seg[data-tone=danger]{background:var(--danger)}\n.rowMeta{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.labelCount{display:none}", {"root":"root","srOnly":"srOnly","num":"num","header":"header","title":"title","lede":"lede","toolbar":"toolbar","tabs":"tabs","tab":"tab","back":"back","card":"card","fill":"fill","hint":"hint","label":"label","row":"row","seg":"seg","sort":"sort","strip":"strip","tabPill":"tabPill","tabLabel":"tabLabel","legend":"legend","swatch":"swatch","sizeKey":"sizeKey","sizeDots":"sizeDots","body":"body","panel":"panel","stageWrap":"stageWrap","stage":"stage","canvas":"canvas","labels":"labels","labelInner":"labelInner","labelName":"labelName","labelMeta":"labelMeta","dotSep":"dotSep","roll":"roll","rollVisual":"rollVisual","wheel":"wheel","sym":"sym","cardName":"cardName","cardMeta":"cardMeta","cardRows":"cardRows","health":"health","cardNote":"cardNote","zoom":"zoom","hintCoarse":"hintCoarse","hintFine":"hintFine","scope":"scope","kpiMain":"kpiMain","kpis":"kpis","scopeText":"scopeText","kpiLabel":"kpiLabel","kpiValue":"kpiValue","breakdown":"breakdown","breakdownHead":"breakdownHead","rowsWrap":"rowsWrap","rows":"rows","rowTop":"rowTop","rowName":"rowName","rowValue":"rowValue","track":"track","rowMeta":"rowMeta","labelCount":"labelCount"});
A.cssFor("customer-galaxy", [49360]);
A.item("customer-galaxy", {entry:4263, export:"CustomerGalaxy", kind:"block", tier:"pro", unresolved:[]});
})();