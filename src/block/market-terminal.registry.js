/* market-terminal (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(7709, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { MarketTerminal: () => er, default: () => en });
  var s = a(95155), i = a(12115), r = a(18310), n = a(25354), l = a(80642), o = a(57700), h = a(64577), c = a(9005), d = a(9751), m = a(71556), u = a(79267), p = a(36619), x = a(55766), f = a(89959), _ = a(8962), y = a(65024), v = a(51288), g = a(52824), k = a(66558), b = a(7770);
  let M = [
    {
      ticker: "NVDA",
      name: "NVIDIA",
      exchange: "Nasdaq",
      price: 186.42,
      prevClose: 182.97,
      vol: 0.024,
      avgVolume: 182e6
    },
    {
      ticker: "AAPL",
      name: "Apple",
      exchange: "Nasdaq",
      price: 238.15,
      prevClose: 239.02,
      vol: 0.014,
      avgVolume: 52e6
    },
    {
      ticker: "MSFT",
      name: "Microsoft",
      exchange: "Nasdaq",
      price: 514.6,
      prevClose: 509.88,
      vol: 0.012,
      avgVolume: 21e6
    },
    {
      ticker: "AMZN",
      name: "Amazon",
      exchange: "Nasdaq",
      price: 226.34,
      prevClose: 228.1,
      vol: 0.018,
      avgVolume: 41e6
    },
    {
      ticker: "GOOGL",
      name: "Alphabet",
      exchange: "Nasdaq",
      price: 251.73,
      prevClose: 248.66,
      vol: 0.016,
      avgVolume: 31e6
    },
    {
      ticker: "META",
      name: "Meta Platforms",
      exchange: "Nasdaq",
      price: 768.2,
      prevClose: 772.45,
      vol: 0.02,
      avgVolume: 12e6
    },
    {
      ticker: "TSLA",
      name: "Tesla",
      exchange: "Nasdaq",
      price: 412.88,
      prevClose: 401.3,
      vol: 0.035,
      avgVolume: 94e6
    },
    {
      ticker: "JPM",
      name: "JPMorgan Chase",
      exchange: "NYSE",
      price: 301.12,
      prevClose: 299.64,
      vol: 0.013,
      avgVolume: 9e6
    }
  ], w = [
    {
      id: "1D",
      label: "1D",
      interval: "5 minute",
      count: 56,
      warm: 40,
      minutes: 5
    },
    {
      id: "5D",
      label: "5D",
      interval: "30 minute",
      count: 62,
      warm: 39,
      minutes: 30
    },
    {
      id: "1M",
      label: "1M",
      interval: "daily",
      count: 21,
      warm: 50,
      minutes: 0
    },
    {
      id: "6M",
      label: "6M",
      interval: "daily",
      count: 126,
      warm: 50,
      minutes: 0
    },
    {
      id: "1Y",
      label: "1Y",
      interval: "daily",
      count: 252,
      warm: 50,
      minutes: 0
    }
  ], j = [
    { ticker: "NVDA", shares: 120 },
    { ticker: "AAPL", shares: 45 },
    { ticker: "MSFT", shares: 18 },
    { ticker: "TSLA", shares: 12 },
    { ticker: "JPM", shares: 30 }
  ], N = [
    {
      id: "o-2",
      side: "sell",
      type: "limit",
      ticker: "MSFT",
      shares: 4,
      price: 516,
      status: "working",
      time: "11:18"
    },
    {
      id: "o-1",
      side: "buy",
      type: "market",
      ticker: "NVDA",
      shares: 20,
      price: 183.64,
      status: "filled",
      time: "10:42"
    }
  ], T = [
    { id: "ma20", period: 20, label: "MA 20" },
    { id: "ma50", period: 50, label: "MA 50" }
  ], S = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], A = /* @__PURE__ */ new Set([
    "2025-09-01",
    "2025-11-27",
    "2025-12-25",
    "2026-01-01",
    "2026-01-19",
    "2026-02-16",
    "2026-04-03",
    "2026-05-25",
    "2026-06-19",
    "2026-07-03",
    "2026-09-07"
  ]), C = { y: 2026, m: 8, d: 24 }, $ = ({ y: e2, m: t2, d: a2 }) => `${e2}-${String(t2 + 1).padStart(2, "0")}-${String(a2).padStart(2, "0")}`;
  function E(e2) {
    let t2 = new Date(Date.UTC(e2.y, e2.m, e2.d));
    do
      t2.setUTCDate(t2.getUTCDate() - 1);
    while (0 === t2.getUTCDay() || 6 === t2.getUTCDay() || A.has(t2.toISOString().slice(0, 10)));
    return { y: t2.getUTCFullYear(), m: t2.getUTCMonth(), d: t2.getUTCDate() };
  }
  let P = (e2) => `${Math.floor(e2 / 60)}:${String(e2 % 60).padStart(2, "0")}`;
  function D(e2) {
    return Math.sqrt(-2 * Math.log(Math.max(1e-9, e2()))) * Math.cos(2 * Math.PI * e2());
  }
  let I = (e2) => Math.round(100 * e2) / 100, R = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }), z = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }), F = (e2) => R.format(e2), L = (e2) => `${e2 >= 0 ? "+" : "\u2212"}${Math.abs(e2).toFixed(2)}%`;
  function W(e2) {
    return e2 >= 1e9 ? `${(e2 / 1e9).toFixed(2)}B` : e2 >= 1e6 ? `${(e2 / 1e6).toFixed(e2 >= 1e8 ? 0 : 1)}M` : e2 >= 1e3 ? `${(e2 / 1e3).toFixed(0)}K` : String(Math.round(e2));
  }
  var O = a(49144), B = a.n(O);
  let { spring: Y, duration: q } = b.T, V = Y.smooth.visualDuration / 4, G = [
    "--foreground",
    "--text-secondary",
    "--text-muted",
    "--border",
    "--border-subtle",
    "--success",
    "--danger",
    "--accent",
    "--series-1",
    "--series-3",
    "--surface"
  ], H = () => () => {
  }, K = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), U = (e2, t2) => `${e2}:${t2}`, X = (e2) => w.find((t2) => t2.id === e2) ?? w[3];
  class J {
    constructor(e2, t2) {
      this.canvas = e2, this.nodes = t2, this.bars = [], this.averages = { ma20: [], ma50: [] }, this.show = /* @__PURE__ */ new Set(), this.n = 0, this.count = 0, this.s = 0, this.e = 0, this.ts = 0, this.te = 0, this.lo = 0, this.hi = 1, this.vMax = 1, this.snapY = true, this.live = 0, this.shown = 0, this.prevClose = 0, this.alpha = 1, this.vel = 0, this.cross = null, this.limit = null, this.w = 0, this.h = 0, this.dpr = 1, this.colors = null, this.font = "Inter, sans-serif", this.reduced = false, this.raf = 0, this.lastT = 0, this.text = /* @__PURE__ */ new Map(), this.readIndex = -2, this.readPrice = NaN, this.frame = (e3, t3 = false) => {
        t3 || (this.raf = 0);
        let a2 = this.lastT ? Math.min(0.05, (e3 - this.lastT) / 1e3) : 1 / 60;
        t3 || (this.lastT = e3);
        let s2 = (e4) => this.reduced ? 1 : 1 - Math.exp(-a2 / e4);
        if (this.vel) {
          this.ts += this.vel * a2, this.te += this.vel * a2;
          let e4 = this.clampTarget();
          this.s = this.ts, this.e = this.te, this.vel *= Math.exp(-a2 / 0.32), (e4 || Math.abs(this.vel) * (this.plotW / this.span) < 12) && (this.vel = 0);
        }
        this.s += (this.ts - this.s) * s2(0.6 * V), this.e += (this.te - this.e) * s2(0.6 * V), this.shown += (this.live - this.shown) * s2(1.6 * V), this.alpha += (1 - this.alpha) * s2(0.9 * V);
        let i2 = K(Math.floor(this.s), 0, this.n - 1), r2 = K(Math.ceil(this.e), 0, this.n - 1), n2 = 1 / 0, l2 = -1 / 0, o2 = 0;
        for (let e4 = i2; e4 <= r2; e4++) {
          let t4 = this.bars[e4], a3 = e4 === this.n - 1;
          n2 = Math.min(n2, a3 ? Math.min(t4.l, this.shown) : t4.l), l2 = Math.max(l2, a3 ? Math.max(t4.h, this.shown) : t4.h), o2 = Math.max(o2, t4.v);
        }
        Number.isFinite(n2) || (n2 = 0, l2 = 1);
        let h2 = Math.max((l2 - n2) * 0.08, 2e-3 * l2), c2 = n2 - h2, d2 = l2 + h2;
        this.snapY ? (this.lo = c2, this.hi = d2, this.vMax = o2, this.snapY = false) : (this.lo += (c2 - this.lo) * s2(V), this.hi += (d2 - this.hi) * s2(V), this.vMax += (o2 - this.vMax) * s2(V)), this.draw();
        let m2 = this.hi - this.lo, u2 = 0 !== this.vel || Math.abs(this.ts - this.s) > 1e-3 || Math.abs(this.te - this.e) > 1e-3 || Math.abs(this.live - this.shown) > 5e-4 || 1 - this.alpha > 2e-3 || Math.abs(c2 - this.lo) > 1e-4 * m2 || Math.abs(d2 - this.hi) > 1e-4 * m2 || Math.abs(o2 - this.vMax) > 1e-3 * o2;
        t3 || (u2 ? this.raf = requestAnimationFrame(this.frame) : (this.s = this.ts, this.e = this.te, this.shown = this.live, this.alpha = 1, this.lo = c2, this.hi = d2, this.vMax = o2, this.draw()));
      }, this.ctx = e2.getContext("2d");
    }
    get plotW() {
      return Math.max(1, this.w - 68);
    }
    get span() {
      return this.e - this.s;
    }
    get maxEnd() {
      return this.n + 3;
    }
    get viewCount() {
      return this.w ? Math.min(this.count, Math.max(12, Math.floor(this.plotW / 5))) : this.count;
    }
    destroy() {
      cancelAnimationFrame(this.raf), this.raf = 0;
    }
    resize(e2, t2, a2) {
      let s2 = !this.w;
      this.w = e2, this.h = t2, this.dpr = a2, s2 && this.n && (this.ts = Math.max(0, this.n - this.viewCount), this.te = this.maxEnd, this.s = this.ts, this.e = this.te, this.snapY = true), this.canvas.width = Math.round(e2 * a2), this.canvas.height = Math.round(t2 * a2), this.invalidate(true);
    }
    setBars(e2, t2, a2, s2, i2) {
      this.bars = e2, this.n = e2.length, this.count = t2, this.live = a2, this.shown = a2, this.prevClose = s2, this.recompute(), this.ts = Math.max(0, this.n - this.viewCount), this.te = this.maxEnd, this.s = this.ts, this.e = this.te, this.snapY = true, this.cross = null, this.vel = 0, this.alpha = i2 && !this.reduced ? 0 : 1, this.readIndex = -2, this.invalidate();
    }
    setLive(e2) {
      this.live = e2, this.reduced && (this.shown = e2), this.recompute(), this.invalidate();
    }
    recompute() {
      for (let e2 of T)
        this.averages[e2.id] = (function(e3, t2) {
          let a2 = Array(e3.length).fill(null), s2 = 0;
          for (let i2 = 0; i2 < e3.length; i2++)
            s2 += e3[i2].c, i2 >= t2 && (s2 -= e3[i2 - t2].c), i2 >= t2 - 1 && (a2[i2] = s2 / t2);
          return a2;
        })(this.bars, e2.period);
    }
    clampTarget() {
      let e2 = K(this.te - this.ts, Math.min(12, this.maxEnd), this.maxEnd), t2 = this.ts;
      t2 < 0 && (t2 = 0), t2 + e2 > this.maxEnd && (t2 = this.maxEnd - e2);
      let a2 = t2 !== this.ts || t2 + e2 !== this.te;
      return this.ts = t2, this.te = t2 + e2, a2;
    }
    zoom(e2, t2, a2 = false) {
      let s2 = this.te - this.ts, i2 = K(s2 * e2, Math.min(12, this.maxEnd), this.maxEnd);
      if (1e-6 > Math.abs(i2 - s2)) return false;
      let r2 = this.ts + t2 * s2;
      return this.ts = r2 - t2 * i2, this.te = this.ts + i2, this.clampTarget(), this.vel = 0, (a2 || this.reduced) && (this.s = this.ts, this.e = this.te), this.invalidate(), true;
    }
    pan(e2, t2 = false) {
      this.ts += e2, this.te += e2, this.clampTarget(), (t2 || this.reduced) && (this.s = this.ts, this.e = this.te), this.invalidate();
    }
    reset() {
      this.ts = Math.max(0, this.n - this.viewCount), this.te = this.maxEnd, this.vel = 0, this.reduced && (this.s = this.ts, this.e = this.te), this.invalidate();
    }
    indexAt(e2) {
      return K(
        Math.floor(this.s + e2 / this.plotW * this.span),
        0,
        this.n - 1
      );
    }
    anchorFor(e2) {
      return K((e2 + 0.5 - this.ts) / (this.te - this.ts), 0, 1);
    }
    setCross(e2, t2 = null) {
      this.cross = null === e2 ? null : { i: this.indexAt(e2), y: t2 }, this.invalidate();
    }
    step(e2) {
      let t2 = this.cross?.i ?? this.n - 1, a2 = "first" === e2 ? 0 : "last" === e2 ? this.n - 1 : K(t2 + e2, 0, this.n - 1);
      this.cross = { i: a2, y: null };
      let s2 = this.te - this.ts;
      return a2 < this.ts + 1 ? this.pan(a2 - 1 - this.ts) : a2 + 1 > this.te - 3 + 1 ? this.pan(Math.min(this.maxEnd, a2 + 3) - this.te) : s2 <= 0 && this.reset(), this.invalidate(), a2;
    }
    invalidate(e2 = false) {
      e2 ? this.frame(performance.now(), true) : this.raf || (this.lastT = 0, this.raf = requestAnimationFrame(this.frame));
    }
    setText(e2, t2) {
      this.text.get(e2) !== t2 && (this.text.set(e2, t2), e2.textContent = t2);
    }
    draw() {
      let e2, t2, a2, s2 = this.ctx, i2 = this.colors;
      if (!s2 || !i2 || !this.w || !this.n) return;
      let { w: r2, h: n2, dpr: l2, bars: o2, n: h2 } = this, c2 = this.plotW, d2 = n2 - 28, m2 = K((n2 - 28) * 0.15, 36, 88), u2 = d2 - m2 - 14, p2 = r2 < 640 ? 20 : 56, x2 = c2 / this.span, f2 = (e3) => (e3 - this.s + 0.5) * x2, _2 = (e3) => u2 - (e3 - this.lo) / (this.hi - this.lo) * (u2 - p2), y2 = K(Math.floor(this.s) - 1, 0, h2 - 1), v2 = K(Math.ceil(this.e) + 1, 0, h2 - 1), g2 = o2[h2 - 1], k2 = (e3) => e3 === h2 - 1 ? this.shown : o2[e3].c, b2 = (e3) => e3 === h2 - 1 ? Math.max(o2[e3].h, this.shown) : o2[e3].h, M2 = (e3) => e3 === h2 - 1 ? Math.min(o2[e3].l, this.shown) : o2[e3].l;
      s2.setTransform(l2, 0, 0, l2, 0, 0), s2.clearRect(0, 0, r2, n2), s2.font = `400 12px ${this.font}`, s2.textBaseline = "middle";
      let w2 = this.shown >= this.prevClose, j2 = K(_2(this.shown), p2 - 12, u2 + 12), N2 = [j2];
      this.cross && N2.push(
        null === this.cross.y ? _2(k2(K(this.cross.i, 0, h2 - 1))) : this.cross.y
      );
      let S2 = (e2 = (this.hi - this.lo) / Math.max(1, Math.max(3, Math.floor((u2 - p2) / 64))), t2 = 10 ** Math.floor(Math.log10(e2)), ((a2 = e2 / t2) < 1.5 ? 1 : a2 < 3 ? 2 : a2 < 7 ? 5 : 10) * t2);
      s2.fillStyle = i2["--text-muted"], s2.textAlign = "left";
      for (let e3 = Math.ceil(this.lo / S2) * S2; e3 <= this.hi; e3 += S2) {
        let t3 = Math.round(_2(e3)) + 0.5;
        t3 < p2 - 8 || t3 > u2 + 4 || (s2.fillStyle = i2["--border-subtle"], s2.fillRect(0, t3 - 0.5, c2, 1), N2.some((e4) => 16 > Math.abs(e4 - t3)) || (s2.fillStyle = i2["--text-muted"], s2.fillText(F(e3), c2 + 12, t3)));
      }
      let A2 = [1, 2, 3, 4, 6, 12, 24, 48, 96, 192].find((e3) => e3 * x2 >= 76) ?? 384, C2 = [], $2 = (e3, t3) => C2.every((a3) => Math.abs(a3 - e3) >= t3);
      for (let e3 of (s2.textAlign = "center", [2, 1]))
        for (let t3 = y2; t3 <= v2; t3++) {
          let a3 = o2[t3];
          if (!(2 === e3 ? 2 === a3.rank : a3.rank < 2 && t3 % A2 == 0)) continue;
          let r3 = f2(t3);
          !(r3 < 24) && !(r3 > c2 - 24) && $2(r3, 2 === e3 ? 60.800000000000004 : 76) && (C2.push(r3), s2.fillStyle = i2["--border-subtle"], s2.fillRect(Math.round(r3), p2 - 8, 1, d2 - p2 + 8), s2.fillStyle = 2 === e3 ? i2["--text-secondary"] : i2["--text-muted"], s2.fillText(a3.tick, r3, d2 + 14 + 1));
        }
      s2.fillStyle = i2["--border"], s2.fillRect(0, d2, c2, 1), s2.fillRect(c2, p2 - 8, 1, d2 - p2 + 8);
      let E2 = this.cross ? { i: K(this.cross.i, 0, h2 - 1), y: this.cross.y } : null;
      E2 && (s2.globalAlpha = 0.06, s2.fillStyle = i2["--foreground"], s2.fillRect(f2(E2.i) - x2 / 2, p2 - 8, x2, d2 - p2 + 8), s2.globalAlpha = 1), s2.save(), s2.beginPath(), s2.rect(0, 0, c2, n2), s2.clip(), s2.globalAlpha = this.alpha;
      let P2 = Math.max(1, Math.min(0.66 * x2, 16));
      s2.globalAlpha = 0.34 * this.alpha;
      for (let e3 = y2; e3 <= v2; e3++) {
        let t3 = Math.max(1, o2[e3].v / Math.max(1, this.vMax) * (m2 - 4));
        s2.fillStyle = k2(e3) >= o2[e3].o ? i2["--success"] : i2["--danger"], s2.fillRect(
          Math.round(f2(e3) - P2 / 2),
          d2 - t3,
          Math.max(1, Math.round(P2)),
          t3
        );
      }
      for (let e3 of (s2.globalAlpha = this.alpha, T)) {
        if (!this.show.has(e3.id)) continue;
        let t3 = this.averages[e3.id];
        s2.beginPath();
        let a3 = false;
        for (let i3 = y2; i3 <= v2; i3++) {
          let r3 = t3[i3];
          if (null === r3) {
            a3 = false;
            continue;
          }
          i3 === h2 - 1 && (r3 += (this.shown - g2.c) / e3.period), a3 ? s2.lineTo(f2(i3), _2(r3)) : (s2.moveTo(f2(i3), _2(r3)), a3 = true);
        }
        s2.lineWidth = 1.5, s2.lineJoin = "round", s2.strokeStyle = "ma20" === e3.id ? i2["--series-1"] : i2["--series-3"], s2.stroke();
      }
      for (let e3 = y2; e3 <= v2; e3++) {
        let t3 = o2[e3].o, a3 = k2(e3);
        s2.fillStyle = a3 >= t3 ? i2["--success"] : i2["--danger"];
        let r3 = Math.round(f2(e3)), n3 = _2(b2(e3)), l3 = _2(M2(e3));
        if (s2.fillRect(r3 - 0.5 * (P2 > 3), n3, 1, Math.max(1, l3 - n3)), P2 > 1.5) {
          let e4 = Math.min(_2(t3), _2(a3)), i3 = Math.max(1, Math.abs(_2(t3) - _2(a3))), n4 = Math.max(2, Math.round(P2));
          s2.fillRect(r3 - Math.floor(n4 / 2), e4, n4, i3);
        }
      }
      if (s2.restore(), s2.globalAlpha = 1, s2.setLineDash([2, 3]), s2.lineWidth = 1, s2.strokeStyle = w2 ? i2["--success"] : i2["--danger"], s2.globalAlpha = 0.7, s2.beginPath(), s2.moveTo(0, Math.round(j2) + 0.5), s2.lineTo(c2, Math.round(j2) + 0.5), s2.stroke(), s2.globalAlpha = 1, this.nodes.last.style.transform = `translate3d(0, ${j2}px, 0)`, this.nodes.last.dataset.direction = w2 ? "up" : "down", this.setText(this.nodes.last, F(this.shown)), null !== this.limit) {
        let e3 = K(_2(this.limit), p2 - 12, u2 + 12);
        s2.strokeStyle = i2["--accent"], s2.setLineDash([5, 4]), s2.beginPath(), s2.moveTo(0, Math.round(e3) + 0.5), s2.lineTo(c2, Math.round(e3) + 0.5), s2.stroke(), this.nodes.limit.style.transform = `translate3d(0, ${e3}px, 0)`, this.nodes.limit.dataset.visible = "", this.setText(this.nodes.limit, `Limit ${F(this.limit)}`);
      } else delete this.nodes.limit.dataset.visible;
      if (s2.setLineDash([]), E2) {
        let e3 = Math.round(f2(E2.i)) + 0.5, t3 = null === E2.y ? _2(k2(E2.i)) : K(E2.y, p2, d2);
        s2.strokeStyle = i2["--text-muted"], s2.setLineDash([3, 3]), s2.beginPath(), s2.moveTo(e3, p2 - 8), s2.lineTo(e3, d2), s2.stroke(), s2.beginPath(), s2.moveTo(0, Math.round(t3) + 0.5), s2.lineTo(c2, Math.round(t3) + 0.5), s2.stroke(), s2.setLineDash([]);
        let a3 = this.lo + (u2 - t3) / (u2 - p2) * (this.hi - this.lo);
        this.nodes.crossPrice.style.transform = `translate3d(0, ${t3}px, 0)`, this.setText(
          this.nodes.crossPrice,
          t3 <= u2 + 6 ? F(a3) : W((d2 - t3) / m2 * this.vMax)
        ), this.nodes.crossPrice.dataset.visible = "";
        let r3 = K(e3, 60, c2 - 60);
        this.nodes.crossTime.style.transform = `translate3d(${r3}px, 0, 0) translateX(-50%)`, this.setText(this.nodes.crossTime, o2[E2.i].label), this.nodes.crossTime.dataset.visible = "";
      } else
        delete this.nodes.crossPrice.dataset.visible, delete this.nodes.crossTime.dataset.visible;
      this.readout(E2 ? E2.i : h2 - 1);
    }
    readout(e2) {
      let t2 = e2 === this.n - 1;
      if (e2 === this.readIndex && (!t2 || this.readPrice === this.shown)) return;
      this.readIndex = e2, this.readPrice = this.shown;
      let a2 = this.bars[e2], s2 = this.nodes.readout, i2 = t2 ? this.shown : a2.c, r2 = t2 ? Math.max(a2.h, i2) : a2.h, n2 = t2 ? Math.min(a2.l, i2) : a2.l, l2 = e2 > 0 ? this.bars[e2 - 1].c : a2.o, o2 = (i2 - l2) / l2 * 100;
      for (let l3 of (this.setText(s2.date, a2.label), this.setText(s2.o, F(a2.o)), this.setText(s2.h, F(r2)), this.setText(s2.l, F(n2)), this.setText(s2.c, F(i2)), this.setText(s2.change, L(o2)), s2.change.dataset.direction = o2 >= 0 ? "up" : "down", this.setText(s2.volume, W(a2.v)), T)) {
        let i3 = this.averages[l3.id][e2], r3 = null === i3 ? null : t2 ? i3 + (this.shown - a2.c) / l3.period : i3;
        this.setText(s2[l3.id], null === r3 ? "n/a" : F(r3));
      }
    }
    describe(e2) {
      let t2 = this.bars[e2], a2 = e2 === this.n - 1, s2 = a2 ? this.live : t2.c, i2 = e2 > 0 ? this.bars[e2 - 1].c : t2.o, r2 = (s2 - i2) / i2 * 100;
      return `${t2.label}${a2 ? ", live" : ""}. Open ${F(t2.o)}, high ${F(Math.max(t2.h, s2))}, low ${F(Math.min(t2.l, s2))}, close ${F(s2)}, ${r2 >= 0 ? "up" : "down"} ${Math.abs(r2).toFixed(2)} percent. Volume ${W(t2.v)}.`;
    }
  }
  function Q({
    bars: e2,
    seriesId: t2,
    range: a2,
    symbol: r2,
    live: n2,
    averages: l2,
    limit: o2,
    reduced: h2,
    zoomRef: c2
  }) {
    let d2 = (0, i.useRef)(null), m2 = (0, i.useRef)(null), u2 = (0, i.useRef)(null), p2 = (0, i.useRef)(null), x2 = (0, i.useRef)(null), f2 = (0, i.useRef)(null), _2 = (0, i.useRef)(null), y2 = (0, i.useRef)(null), v2 = (0, i.useRef)(null), g2 = (0, i.useRef)(null), k2 = (0, i.useRef)(true), b2 = (0, i.useId)();
    (0, i.useEffect)(() => {
      let e3 = m2.current, t3 = d2.current, a3 = u2.current, s2 = v2.current;
      if (!e3 || !t3 || !a3 || !s2) return;
      let i2 = (e4) => s2.querySelector(`[data-read="${e4}"]`), r3 = new J(e3, {
        last: p2.current,
        crossPrice: x2.current,
        crossTime: f2.current,
        limit: _2.current,
        announce: y2.current,
        readout: {
          date: i2("date"),
          o: i2("o"),
          h: i2("h"),
          l: i2("l"),
          c: i2("c"),
          change: i2("change"),
          volume: i2("volume"),
          ma20: i2("ma20"),
          ma50: i2("ma50")
        }
      });
      g2.current = r3;
      let n3 = () => {
        let e4 = {};
        for (let t4 of G)
          a3.style.color = `var(${t4})`, e4[t4] = getComputedStyle(a3).color;
        r3.colors = e4, r3.font = getComputedStyle(t3).fontFamily || r3.font, r3.invalidate();
      };
      n3();
      let l3 = new MutationObserver(n3);
      l3.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme", "data-accent", "class", "style"]
      });
      let o3 = window.matchMedia("(prefers-color-scheme: dark)");
      o3.addEventListener("change", n3);
      let h3 = new ResizeObserver(([e4]) => {
        let { width: t4, height: a4 } = e4.contentRect;
        r3.resize(t4, a4, Math.min(2, window.devicePixelRatio || 1));
      });
      return h3.observe(t3), () => {
        l3.disconnect(), o3.removeEventListener("change", n3), h3.disconnect(), r3.destroy(), g2.current = null;
      };
    }, []), (0, i.useEffect)(() => {
      g2.current && (g2.current.reduced = h2);
    }, [h2]), (0, i.useEffect)(() => {
      let t3 = g2.current;
      t3 && (t3.setBars(e2, a2.count, n2, r2.prevClose, !k2.current), k2.current = false);
    }, [t2]), (0, i.useEffect)(() => {
      g2.current?.setLive(n2);
    }, [n2]), (0, i.useEffect)(() => {
      let e3 = g2.current;
      e3 && (e3.show = new Set(l2), e3.invalidate());
    }, [l2]), (0, i.useEffect)(() => {
      let e3 = g2.current;
      e3 && (e3.limit = o2, e3.invalidate());
    }, [o2]), (0, i.useEffect)(
      () => (c2.current = {
        zoom: (e3) => {
          let t3 = g2.current;
          t3 && t3.zoom(e3, t3.anchorFor(t3.cross?.i ?? t3.n - 1));
        },
        reset: () => g2.current?.reset()
      }, () => {
        c2.current = null;
      }),
      [c2]
    ), (0, i.useEffect)(() => {
      let e3 = d2.current;
      if (!e3) return;
      let t3 = (t4) => {
        let a3 = g2.current;
        if (!a3) return;
        let s2 = e3.getBoundingClientRect(), i2 = 1 === t4.deltaMode ? 16 : 2 === t4.deltaMode ? s2.height : 1, r3 = t4.deltaX * i2, n3 = t4.deltaY * i2;
        if (!t4.ctrlKey && Math.abs(r3) > Math.abs(n3)) {
          t4.preventDefault(), a3.pan(r3 / (a3.plotW / (a3.te - a3.ts)));
          return;
        }
        let l3 = K((t4.clientX - s2.left) / a3.plotW, 0, 1), o3 = Math.exp(n3 * (t4.ctrlKey ? 0.012 : 22e-4));
        a3.zoom(o3, l3) && t4.preventDefault();
      };
      return e3.addEventListener("wheel", t3, { passive: false }), () => e3.removeEventListener("wheel", t3);
    }, []);
    let M2 = (0, i.useRef)({
      pointers: /* @__PURE__ */ new Map(),
      startX: 0,
      startY: 0,
      moved: false,
      pinch: null,
      samples: []
    }), w2 = (e3) => {
      let t3 = d2.current.getBoundingClientRect();
      return { x: e3.clientX - t3.left, y: e3.clientY - t3.top };
    }, j2 = (e3) => {
      let t3 = g2.current, a3 = M2.current;
      if (!t3 || !a3.pointers.has(e3.pointerId)) return;
      let s2 = w2(e3);
      if (a3.pointers.delete(e3.pointerId), 1 === a3.pointers.size) {
        a3.pinch = null;
        let t4 = [...a3.pointers.values()][0];
        a3.samples = [{ t: e3.timeStamp, x: t4.x }];
        return;
      }
      if (a3.pointers.size > 0 || (a3.pinch = null, "pointercancel" === e3.type))
        return;
      if (!a3.moved) {
        "mouse" !== e3.pointerType && t3.setCross(
          t3.cross && t3.cross.i === t3.indexAt(s2.x) ? null : s2.x < t3.plotW ? s2.x : null,
          s2.y
        );
        return;
      }
      let i2 = a3.samples[0], r3 = a3.samples[a3.samples.length - 1], n3 = (r3.t - i2.t) / 1e3;
      !h2 && n3 > 0 && e3.timeStamp - r3.t < 80 && (t3.vel = -((r3.x - i2.x) / n3) / (t3.plotW / (t3.te - t3.ts)), t3.invalidate());
    }, N2 = e2[e2.length - 1], S2 = n2 - (e2.length > 1 ? e2[e2.length - 2].c : N2.o);
    return (0, s.jsxs)("div", {
      className: B().chart,
      children: [
        (0, s.jsx)("span", {
          ref: u2,
          className: B().probe,
          "aria-hidden": "true"
        }),
        (0, s.jsxs)("div", {
          ref: v2,
          className: B().readout,
          "aria-hidden": "true",
          children: [
            (0, s.jsx)("span", {
              "data-read": "date",
              className: B().readDate,
              children: N2.label
            }),
            (0, s.jsxs)("span", {
              className: B().readGroup,
              children: [
                (0, s.jsxs)("span", {
                  className: B().readItem,
                  children: [
                    (0, s.jsx)("span", {
                      className: B().readKey,
                      children: "O"
                    }),
                    (0, s.jsx)("span", { "data-read": "o", children: F(N2.o) })
                  ]
                }),
                (0, s.jsxs)("span", {
                  className: B().readItem,
                  children: [
                    (0, s.jsx)("span", {
                      className: B().readKey,
                      children: "H"
                    }),
                    (0, s.jsx)("span", {
                      "data-read": "h",
                      children: F(Math.max(N2.h, n2))
                    })
                  ]
                }),
                (0, s.jsxs)("span", {
                  className: B().readItem,
                  children: [
                    (0, s.jsx)("span", {
                      className: B().readKey,
                      children: "L"
                    }),
                    (0, s.jsx)("span", {
                      "data-read": "l",
                      children: F(Math.min(N2.l, n2))
                    })
                  ]
                }),
                (0, s.jsxs)("span", {
                  className: B().readItem,
                  children: [
                    (0, s.jsx)("span", {
                      className: B().readKey,
                      children: "C"
                    }),
                    (0, s.jsx)("span", { "data-read": "c", children: F(n2) })
                  ]
                }),
                (0, s.jsx)("span", {
                  "data-read": "change",
                  className: B().readChange,
                  "data-direction": S2 >= 0 ? "up" : "down",
                  children: L(S2 / (n2 - S2) * 100)
                })
              ]
            }),
            (0, s.jsxs)("span", {
              className: B().readGroup,
              children: [
                (0, s.jsxs)("span", {
                  className: B().readItem,
                  children: [
                    (0, s.jsx)("span", {
                      className: B().readKey,
                      children: "Vol"
                    }),
                    (0, s.jsx)("span", {
                      "data-read": "volume",
                      children: W(N2.v)
                    })
                  ]
                }),
                T.map(
                  (e3) => (0, s.jsxs)(
                    "span",
                    {
                      className: B().readItem,
                      "data-average": e3.id,
                      "data-hidden": l2.includes(e3.id) ? void 0 : "",
                      children: [
                        (0, s.jsx)("span", {
                          className: B().readKey,
                          children: e3.label
                        }),
                        (0, s.jsx)("span", {
                          "data-read": e3.id,
                          children: "n/a"
                        })
                      ]
                    },
                    e3.id
                  )
                )
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          ref: d2,
          className: B().surface,
          tabIndex: 0,
          role: "img",
          "aria-roledescription": "interactive chart",
          "aria-label": `${r2.ticker} ${a2.label} chart, ${a2.interval} candles`,
          "aria-describedby": b2,
          onPointerDown: (e3) => {
            let t3 = g2.current, a3 = M2.current;
            if (!t3 || "mouse" === e3.pointerType && 0 !== e3.button) return;
            let s2 = w2(e3);
            if (a3.pointers.set(e3.pointerId, s2), e3.currentTarget.setPointerCapture(e3.pointerId), t3.vel = 0, 1 === a3.pointers.size && (a3.startX = s2.x, a3.startY = s2.y, a3.moved = false, a3.samples = [{ t: e3.timeStamp, x: s2.x }]), 2 === a3.pointers.size) {
              let [e4, s3] = [...a3.pointers.values()], i2 = (e4.x + s3.x) / 2;
              a3.pinch = {
                distance: Math.max(24, Math.abs(e4.x - s3.x)),
                span: t3.te - t3.ts,
                pivot: t3.ts + i2 / t3.plotW * (t3.te - t3.ts)
              }, a3.moved = true, t3.setCross(null);
            }
          },
          onPointerMove: (e3) => {
            let t3 = g2.current, a3 = M2.current;
            if (!t3) return;
            let s2 = w2(e3);
            if (!a3.pointers.has(e3.pointerId)) {
              "mouse" === e3.pointerType && t3.setCross(s2.x < t3.plotW ? s2.x : null, s2.y);
              return;
            }
            let i2 = a3.pointers.get(e3.pointerId);
            if (a3.pointers.set(e3.pointerId, s2), a3.pinch && a3.pointers.size >= 2) {
              let [e4, s3] = [...a3.pointers.values()], i3 = (e4.x + s3.x) / 2, r3 = Math.max(24, Math.abs(e4.x - s3.x)), n3 = K(
                a3.pinch.span * (a3.pinch.distance / r3),
                Math.min(12, t3.maxEnd),
                t3.maxEnd
              );
              t3.ts = a3.pinch.pivot - i3 / t3.plotW * n3, t3.te = t3.ts + n3, t3.clampTarget(), t3.s = t3.ts, t3.e = t3.te, t3.invalidate();
              return;
            }
            !(!a3.moved && 6 > Math.abs(s2.x - a3.startX) && 6 > Math.abs(s2.y - a3.startY)) && (a3.moved || (a3.moved = true, "mouse" !== e3.pointerType && t3.setCross(null)), t3.pan(-(s2.x - i2.x) / (t3.plotW / (t3.te - t3.ts)), true), "mouse" === e3.pointerType && t3.setCross(s2.x < t3.plotW ? s2.x : null, s2.y), a3.samples.push({ t: e3.timeStamp, x: s2.x }), a3.samples.length > 6 && a3.samples.shift());
          },
          onPointerUp: j2,
          onPointerCancel: j2,
          onPointerLeave: (e3) => {
            "mouse" !== e3.pointerType || M2.current.pointers.size || g2.current?.setCross(null);
          },
          onKeyDown: (e3) => {
            let t3 = g2.current;
            if (!t3) return;
            let a3 = e3.key, s2 = null;
            if ("ArrowLeft" === a3 || "ArrowRight" === a3)
              s2 = t3.step(("ArrowLeft" === a3 ? -1 : 1) * (e3.shiftKey ? 10 : 1));
            else if ("Home" === a3) s2 = t3.step("first");
            else if ("End" === a3) s2 = t3.step("last");
            else if ("+" === a3 || "=" === a3)
              t3.zoom(0.8, t3.anchorFor(t3.cross?.i ?? t3.n - 1));
            else if ("-" === a3 || "_" === a3)
              t3.zoom(1.25, t3.anchorFor(t3.cross?.i ?? t3.n - 1));
            else if ("0" === a3) t3.reset();
            else {
              if ("Escape" !== a3 || !t3.cross) return;
              t3.setCross(null);
            }
            e3.preventDefault(), null !== s2 && y2.current && (y2.current.textContent = t3.describe(s2));
          },
          onFocus: () => {
            let e3 = g2.current;
            !e3 || e3.cross || M2.current.pointers.size || e3.step("last");
          },
          onBlur: () => g2.current?.setCross(null),
          children: [
            (0, s.jsx)("canvas", {
              ref: m2,
              className: B().canvas,
              "aria-hidden": "true"
            }),
            (0, s.jsx)("span", {
              ref: p2,
              className: B().lastTag,
              "aria-hidden": "true",
              children: F(n2)
            }),
            (0, s.jsx)("span", {
              ref: _2,
              className: B().limitTag,
              "aria-hidden": "true"
            }),
            (0, s.jsx)("span", {
              ref: x2,
              className: B().crossPrice,
              "aria-hidden": "true"
            }),
            (0, s.jsx)("span", {
              ref: f2,
              className: B().crossTime,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, s.jsx)("span", {
          id: b2,
          className: B().srOnly,
          children: "Use left and right arrows to inspect candles, shift to move ten, plus and minus to zoom, and 0 to reset the view."
        }),
        (0, s.jsx)("span", {
          ref: y2,
          className: B().srOnly,
          "aria-live": "polite"
        })
      ]
    });
  }
  function Z({ points: e2, base: t2, up: a2 }) {
    let i2 = Math.min(t2, ...e2), r2 = Math.max(t2, ...e2) - i2 || 1, n2 = (e3) => (25 - (e3 - i2) / r2 * 22).toFixed(2), l2 = e2.map(
      (t3, a3) => `${a3 ? "L" : "M"}${(a3 / Math.max(1, e2.length - 1) * 64).toFixed(2)} ${n2(t3)}`
    ).join("");
    return (0, s.jsxs)("svg", {
      className: B().spark,
      "data-direction": a2 ? "up" : "down",
      viewBox: "0 0 64 28",
      preserveAspectRatio: "none",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("line", {
          className: B().sparkBase,
          x1: "0",
          x2: 64,
          y1: n2(t2),
          y2: n2(t2),
          vectorEffect: "non-scaling-stroke"
        }),
        (0, s.jsx)("path", {
          className: B().sparkLine,
          d: l2,
          vectorEffect: "non-scaling-stroke"
        })
      ]
    });
  }
  function ee({
    symbol: e2,
    price: t2,
    points: a2,
    selected: r2,
    reduced: l2,
    onSelect: o2,
    onKeyDown: h2
  }) {
    let c2 = (0, i.useRef)(null), d2 = (0, i.useRef)(t2);
    (0, i.useEffect)(() => {
      let e3 = c2.current, a3 = d2.current;
      d2.current = t2, e3 && t2 !== a3 && (e3.dataset.direction = t2 > a3 ? "up" : "down", e3.getAnimations().forEach((e4) => e4.cancel()), e3.animate(
        l2 ? [{ opacity: 1 }, { opacity: 1, offset: 0.99 }, { opacity: 0 }] : [{ opacity: 1 }, { opacity: 0 }],
        {
          duration: q.considered * (l2 ? 1250 : 1900),
          easing: `cubic-bezier(${b.T.ease.standard.join(",")})`
        }
      ));
    }, [t2, l2]);
    let m2 = t2 - e2.prevClose, u2 = m2 / e2.prevClose * 100, p2 = m2 >= 0;
    return (0, s.jsx)("li", {
      className: B().watchItem,
      children: (0, s.jsxs)("button", {
        type: "button",
        className: B().watchRow,
        "data-ticker": e2.ticker,
        "aria-current": r2 ? "true" : void 0,
        onClick: o2,
        onKeyDown: h2,
        "aria-label": `${e2.ticker}, ${e2.name}, ${F(t2)}, ${p2 ? "up" : "down"} ${Math.abs(u2).toFixed(2)} percent today`,
        children: [
          r2 && (0, s.jsx)(n.PY1.span, {
            className: B().watchSelected,
            layoutId: "watch-selection",
            transition: l2 ? { duration: 0 } : Y.morph,
            "aria-hidden": "true"
          }),
          (0, s.jsxs)("span", {
            className: B().watchName,
            children: [
              (0, s.jsx)("span", {
                className: B().watchTicker,
                children: e2.ticker
              }),
              (0, s.jsx)("span", {
                className: B().watchCompany,
                children: e2.name
              })
            ]
          }),
          (0, s.jsx)(Z, { points: a2, base: e2.prevClose, up: p2 }),
          (0, s.jsxs)("span", {
            className: B().watchQuote,
            children: [
              (0, s.jsxs)("span", {
                className: B().watchPrice,
                children: [
                  (0, s.jsx)("span", {
                    ref: c2,
                    className: B().flash,
                    "aria-hidden": "true"
                  }),
                  F(t2)
                ]
              }),
              (0, s.jsx)("span", {
                className: B().watchChange,
                "data-direction": p2 ? "up" : "down",
                children: L(u2)
              })
            ]
          })
        ]
      })
    });
  }
  function et({
    symbol: e2,
    price: t2,
    held: a2,
    buyingPower: r2,
    orders: o2,
    side: d2,
    setSide: m2,
    type: u2,
    setType: p2,
    limit: x2,
    setLimit: f2,
    reduced: _2,
    onSubmit: y2,
    onCancel: M2
  }) {
    let [w2, j2] = (0, i.useState)(10), [N2, T2] = (0, i.useState)({ kind: "idle" }), S2 = "limit" === u2 ? x2 : t2, A2 = w2 * S2, C2 = w2 < 1 ? "Enter at least one share." : "buy" === d2 && A2 > r2 ? `This needs ${z.format(A2)}. You have ${z.format(r2)} to spend.` : "sell" === d2 && w2 > a2 ? a2 ? `You hold ${a2} ${e2.ticker} shares.` : `You hold no ${e2.ticker} shares.` : null, $2 = (0, i.useId)();
    (0, i.useEffect)(() => {
      if ("done" !== N2.kind && "error" !== N2.kind) return;
      let e3 = window.setTimeout(() => T2({ kind: "idle" }), 2400);
      return () => window.clearTimeout(e3);
    }, [N2]);
    let E2 = async () => {
      if (!C2 && "pending" !== N2.kind) {
        T2({ kind: "pending" });
        try {
          T2({
            kind: "done",
            text: await y2({
              side: d2,
              type: u2,
              ticker: e2.ticker,
              shares: w2,
              price: S2
            })
          });
        } catch {
          T2({ kind: "error", text: "Order not placed. Try again." });
        }
      }
    }, P2 = "done" === N2.kind ? (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(h.A, {
          size: 16,
          strokeWidth: 1.75,
          "aria-hidden": "true"
        }),
        N2.text
      ]
    }) : `${"buy" === d2 ? "Buy" : "Sell"} ${w2} ${e2.ticker}`, D2 = o2.slice(0, 4), I2 = _2 ? { duration: 0 } : Y.smooth;
    return (0, s.jsxs)("section", {
      className: B().ticket,
      "aria-labelledby": $2,
      children: [
        (0, s.jsxs)("div", {
          className: B().panelHead,
          children: [
            (0, s.jsxs)("h2", {
              id: $2,
              className: B().panelTitle,
              children: ["Trade ", e2.ticker]
            }),
            (0, s.jsx)("span", {
              className: B().panelMeta,
              children: a2 ? `${a2} shares held` : "No position"
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: B().ticketBody,
          children: [
            (0, s.jsxs)("div", {
              className: B().ticketSegs,
              children: [
                (0, s.jsx)(k.A, {
                  label: "Side",
                  value: d2,
                  onValueChange: (e3) => m2(e3),
                  options: [
                    { value: "buy", label: "Buy" },
                    { value: "sell", label: "Sell" }
                  ]
                }),
                (0, s.jsx)(k.A, {
                  label: "Order type",
                  value: u2,
                  onValueChange: (e3) => p2(e3),
                  options: [
                    { value: "market", label: "Market" },
                    { value: "limit", label: "Limit" }
                  ]
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: B().fields,
              children: [
                (0, s.jsx)(g.o, {
                  label: "Shares",
                  value: w2,
                  onValueChange: j2,
                  min: 0,
                  max: 1e5,
                  step: 1,
                  largeStep: 10
                }),
                (0, s.jsx)(l.N, {
                  initial: false,
                  children: "limit" === u2 && (0, s.jsx)(
                    n.PY1.div,
                    {
                      className: B().limitField,
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: {
                        height: 0,
                        opacity: 0,
                        transition: _2 ? { duration: 0 } : { duration: q.exit, ease: [...b.T.ease.exit] }
                      },
                      transition: I2,
                      children: (0, s.jsx)("div", {
                        className: B().limitInner,
                        children: (0, s.jsx)(g.o, {
                          label: "Limit price",
                          value: x2,
                          onValueChange: f2,
                          min: 0.01,
                          max: 1e5,
                          step: 0.01,
                          largeStep: 1,
                          prefix: "$",
                          limitHint: false
                        })
                      })
                    },
                    "limit"
                  )
                })
              ]
            }),
            (0, s.jsxs)("dl", {
              className: B().summary,
              children: [
                (0, s.jsxs)("div", {
                  className: B().summaryRow,
                  children: [
                    (0, s.jsx)("dt", { children: "Market price" }),
                    (0, s.jsx)("dd", {
                      className: B().num,
                      children: z.format(t2)
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: B().summaryRow,
                  children: [
                    (0, s.jsx)("dt", {
                      children: "buy" === d2 ? "Estimated cost" : "Estimated credit"
                    }),
                    (0, s.jsx)("dd", {
                      className: B().num,
                      children: z.format(A2)
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: B().summaryRow,
                  children: [
                    (0, s.jsx)("dt", { children: "Buying power" }),
                    (0, s.jsx)("dd", {
                      className: B().num,
                      children: z.format(r2)
                    })
                  ]
                })
              ]
            }),
            (0, s.jsx)("p", {
              className: B().problem,
              role: "status",
              "data-visible": C2 || "error" === N2.kind ? "" : void 0,
              children: "error" === N2.kind ? N2.text : C2 ?? "\xA0"
            }),
            (0, s.jsx)(v.$, {
              className: B().submit,
              size: "lg",
              loading: "pending" === N2.kind,
              disabled: !!C2 && "pending" !== N2.kind,
              onClick: E2,
              children: P2
            }),
            (0, s.jsx)("p", {
              className: B().simulated,
              children: "Paper trading. Prices and orders are simulated."
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: B().orders,
          children: [
            (0, s.jsx)("h3", {
              className: B().ordersTitle,
              children: "Orders"
            }),
            (0, s.jsx)("ul", {
              className: B().orderList,
              children: (0, s.jsx)(l.N, {
                initial: false,
                children: D2.map((e3) => {
                  let t3, a3;
                  return (0, s.jsx)(
                    n.PY1.li,
                    {
                      className: B().orderItem,
                      layout: !_2 && "position",
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: {
                        height: 0,
                        opacity: 0,
                        transition: { duration: _2 ? 0 : q.exit }
                      },
                      transition: I2,
                      children: (0, s.jsxs)("div", {
                        className: B().order,
                        "data-status": e3.status,
                        children: [
                          (0, s.jsxs)("span", {
                            className: B().orderMain,
                            children: [
                              (0, s.jsxs)("span", {
                                className: B().orderTitle,
                                children: [
                                  "buy" === e3.side ? "Buy" : "Sell",
                                  " ",
                                  e3.shares,
                                  " ",
                                  e3.ticker
                                ]
                              }),
                              (0, s.jsxs)("span", {
                                className: B().orderMeta,
                                children: [
                                  "limit" === e3.type ? "Limit" : "Market",
                                  " at ",
                                  (t3 = e3.price, z.format(t3)),
                                  ", ",
                                  e3.time
                                ]
                              })
                            ]
                          }),
                          (0, s.jsx)("span", {
                            className: B().orderStatus,
                            "data-status": e3.status,
                            children: "filled" === e3.status ? "Filled" : "working" === e3.status ? "Working" : "Canceled"
                          }),
                          (0, s.jsx)("span", {
                            className: B().orderAction,
                            children: "working" === e3.status && (0, s.jsx)("button", {
                              type: "button",
                              className: B().iconButton,
                              onClick: () => M2(e3),
                              "aria-label": `Cancel ${e3.side} ${e3.shares} ${e3.ticker} at ${a3 = e3.price, z.format(a3)}`,
                              children: (0, s.jsx)(c.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            })
                          })
                        ]
                      })
                    },
                    e3.id
                  );
                })
              })
            })
          ]
        })
      ]
    });
  }
  class ea {
    peek(e2, t2) {
      return this.map.get(U(e2, t2));
    }
    get(e2, t2) {
      let a2 = this.peek(e2.ticker, t2.id);
      return a2 || (a2 = (function(e3, t3) {
        let a3, s2 = t3.count + t3.warm, i2 = (function(e4, t4) {
          let a4 = [], s3 = C;
          if (!e4.minutes) {
            for (; a4.length < t4; )
              a4.push({ day: s3, minute: 0 }), s3 = E(s3);
            return a4;
          }
          let i3 = 570 + Math.floor(275 / e4.minutes) * e4.minutes;
          for (; a4.length < t4; )
            a4.push({ day: s3, minute: i3 }), (i3 -= e4.minutes) < 570 && (s3 = E(s3), i3 = 960 - e4.minutes);
          return a4;
        })(t3, s2).reverse(), r2 = (a3 = (function(e4) {
          let t4 = 2166136261;
          for (let a4 = 0; a4 < e4.length; a4++)
            t4 = Math.imul(t4 ^ e4.charCodeAt(a4), 16777619);
          return t4 >>> 0;
        })(`${e3.ticker}:${t3.id}`), () => {
          let e4 = Math.imul(
            (a3 = a3 + 1831565813 | 0) ^ a3 >>> 15,
            1 | a3
          );
          return (((e4 = e4 + Math.imul(e4 ^ e4 >>> 7, 61 | e4) ^ e4) ^ e4 >>> 14) >>> 0) / 4294967296;
        }), n2 = t3.minutes ? 390 / t3.minutes : 1, l2 = e3.vol / Math.sqrt(n2), o2 = $(C), h2 = i2.map((e4) => $(e4.day) === o2), c2 = h2.indexOf(true), d2 = Array(s2), m2 = s2 - c2, u2 = [0];
        for (let e4 = 1; e4 <= m2; e4++) u2.push(u2[e4 - 1] + D(r2));
        let p2 = Math.log(e3.price / e3.prevClose);
        for (let t4 = 1; t4 <= m2; t4++) {
          let a4 = u2[t4] - t4 / m2 * u2[m2];
          d2[c2 + t4 - 1] = e3.prevClose * Math.exp(t4 / m2 * p2 + a4 * l2 * 0.9);
        }
        let x2 = 10 * r2(), f2 = e3.prevClose;
        for (let e4 = c2 - 1; e4 >= 0; e4--) {
          d2[e4] = f2;
          let t4 = 0.32 * Math.sin(e4 / 19 + x2) + 0.18 * Math.sin(e4 / 7.3 + 2 * x2);
          f2 /= Math.exp(l2 * (D(r2) + 0.6 * t4));
        }
        return i2.map((a4, s3) => {
          let o3, m3 = d2[s3], u3 = 0 === s3 || $(i2[s3 - 1].day) !== $(a4.day), p3 = 0 === s3 ? m3 / Math.exp(l2 * D(r2)) : d2[s3 - 1], x3 = t3.minutes && !u3 ? 0 : l2 * (t3.minutes ? 1.6 : 0.35) * D(r2), f3 = s3 === c2 ? e3.prevClose * Math.exp(0.5 * x3) : p3 * Math.exp(x3), _2 = 0.55 * l2, y2 = Math.max(f3, m3) * Math.exp(Math.abs(D(r2)) * _2), v2 = Math.min(f3, m3) * Math.exp(-Math.abs(D(r2)) * _2), g2 = Math.abs(Math.log(m3 / f3)) / l2, k2 = Math.round(
            e3.avgVolume / n2 * (t3.minutes ? 0.62 + 1.5 * ((o3 = (a4.minute - 570) / 390) - 0.5) ** 2 * 4 * (o3 < 0.5 ? 1.25 : 0.9) : 1) * Math.exp(0.28 * D(r2)) * (0.75 + 0.25 * g2)
          ), { y: b2, m: M2, d: w2 } = a4.day, j2 = `${S[M2]} ${w2}`, N2 = 0 === s3 || i2[s3 - 1].day.m !== M2;
          return {
            o: I(f3),
            h: I(y2),
            l: I(v2),
            c: I(m3),
            v: k2,
            label: t3.minutes ? `${j2}, ${P(a4.minute)}` : `${j2}, ${b2}`,
            tick: t3.minutes ? u3 ? j2 : P(a4.minute) : N2 ? 0 === M2 ? String(b2) : S[M2] : j2,
            rank: t3.minutes ? u3 ? 2 : +(a4.minute % 60 == 0) : N2 ? 2 : 1,
            today: h2[s3]
          };
        });
      })(e2, t2), "1D" !== t2.id && (function(e3, t3, a3) {
        let s2 = t3.filter((e4) => e4.today);
        if (!s2.length) return;
        let i2 = e3.filter((e4) => e4.today), r2 = a3 ? a3 / 5 : s2.length;
        i2.forEach((e4, t4) => {
          let a4 = s2.slice(t4 * r2, (t4 + 1) * r2);
          a4.length && (e4.o = a4[0].o, e4.c = a4[a4.length - 1].c, e4.h = Math.max(...a4.map((e5) => e5.h)), e4.l = Math.min(...a4.map((e5) => e5.l)), e4.v = a4.reduce((e5, t5) => e5 + t5.v, 0));
        });
      })(a2, this.get(e2, X("1D")), t2.minutes), this.map.set(U(e2.ticker, t2.id), a2)), a2;
    }
    constructor() {
      this.map = /* @__PURE__ */ new Map();
    }
  }
  let es = (e2) => {
    let t2 = Math.min(960, 845 + Math.floor((Date.now() - e2) / 6e4));
    return `${Math.floor(t2 / 60)}:${String(t2 % 60).padStart(2, "0")}`;
  }, ei = () => Math.sqrt(-2 * Math.log(Math.max(1e-9, Math.random()))) * Math.cos(2 * Math.PI * Math.random());
  function er({
    symbols: e2 = M,
    holdings: t2 = j,
    buyingPower: a2 = 24860.35,
    orders: n2 = N,
    defaultTicker: l2,
    defaultRange: h2 = "6M",
    defaultAverages: c2 = ["ma20", "ma50"],
    live: v2 = true,
    tickInterval: g2 = 1200,
    onPlaceOrder: b2,
    onCancelOrder: S2,
    className: A2
  }) {
    let C2, $2 = (C2 = (0, i.useSyncExternalStore)(
      H,
      () => true,
      () => false
    ), !!(0, r.I)() && C2), [E2, P2] = (0, i.useState)(l2 ?? e2[0]?.ticker ?? ""), [D2, I2] = (0, i.useState)(h2), [O2, Y2] = (0, i.useState)(c2), [q2, V2] = (0, i.useState)(false), [G2, J2] = (0, i.useState)(
      () => Object.fromEntries(e2.map((e3) => [e3.ticker, e3.price]))
    ), [Z2, en2] = (0, i.useState)(0), [el, eo] = (0, i.useState)(
      () => Object.fromEntries(t2.map((e3) => [e3.ticker, e3.shares]))
    ), [eh, ec] = (0, i.useState)(a2), [ed, em] = (0, i.useState)(n2), [eu, ep] = (0, i.useState)("buy"), [ex, ef] = (0, i.useState)("market"), [e_, ey] = (0, i.useState)({}), ev = (0, i.useRef)(null), eg = (0, i.useId)(), ek = (0, i.useRef)(0);
    (0, i.useEffect)(() => {
      ek.current = Date.now();
    }, []);
    let eb = e2.find((e3) => e3.ticker === E2) ?? e2[0], eM = X(D2), ew = G2[eb.ticker] ?? eb.price, [ej] = (0, i.useState)(() => new ea()), eN = ej.get(eb, eM), eT = ej.get(eb, X("1D")).filter((e3) => e3.today), eS = eT[0]?.o ?? eb.prevClose, eA = Math.max(...eT.map((e3) => e3.h)), eC = Math.min(...eT.map((e3) => e3.l)), e$ = eT.reduce((e3, t3) => e3 + t3.v, 0), eE = (0, i.useRef)(G2), eP = (0, i.useRef)(E2), eD = (0, i.useRef)(ed);
    (0, i.useEffect)(() => {
      eE.current = G2, eP.current = E2, eD.current = ed;
    });
    let eI = v2 && !q2;
    (0, i.useEffect)(() => {
      if (!eI) return;
      let t3 = window.setInterval(() => {
        if (document.hidden) return;
        let t4 = { ...eE.current };
        for (let a4 of e2) {
          if (a4.ticker !== eP.current && Math.random() > 0.45) continue;
          let e3 = t4[a4.ticker] ?? a4.price, s2 = 0.055 * a4.vol * ei() - 0.06 * Math.log(e3 / a4.price), i2 = Math.max(0.01, Math.round(e3 * Math.exp(s2) * 100) / 100);
          if (i2 === e3) continue;
          t4[a4.ticker] = i2;
          let r2 = Math.round(a4.avgVolume / 78 * 0.04 * (0.5 + Math.random()));
          for (let e4 of w) {
            let t5 = ej.peek(a4.ticker, e4.id), s3 = t5?.[t5.length - 1];
            s3 && (s3.c = i2, s3.h = Math.max(s3.h, i2), s3.l = Math.min(s3.l, i2), s3.v += r2);
          }
        }
        eE.current = t4, J2(t4), en2((e3) => e3 + 1);
        let a3 = eD.current.filter(
          (e3) => "working" === e3.status && void 0 !== t4[e3.ticker] && ("buy" === e3.side ? t4[e3.ticker] <= e3.price : t4[e3.ticker] >= e3.price)
        );
        if (a3.length) {
          let e3 = es(ek.current);
          for (let t5 of (em(
            (t6) => t6.map(
              (t7) => a3.some((e4) => e4.id === t7.id) ? { ...t7, status: "filled", time: e3 } : t7
            )
          ), a3))
            eo((e4) => ({
              ...e4,
              [t5.ticker]: (e4[t5.ticker] ?? 0) + ("buy" === t5.side ? t5.shares : -t5.shares)
            })), ec((e4) => e4 + ("buy" === t5.side ? -1 : 1) * t5.shares * t5.price);
        }
      }, g2);
      return () => window.clearInterval(t3);
    }, [eI, e2, g2, ej]);
    let eR = (e3, t3, a3 = G2) => Math.round((a3[e3] ?? ew) * ("buy" === t3 ? 0.99 : 1.01) * 100) / 100, ez = e_[eb.ticker] ?? eR(eb.ticker, eu), eF = (e3, t3) => ey((a3) => ({ ...a3, [e3]: eR(e3, t3, eE.current) })), eL = async (e3) => {
      let t3;
      await Promise.all([
        b2?.(e3),
        new Promise((e4) => window.setTimeout(e4, 650))
      ]);
      let a3 = eE.current[e3.ticker] ?? e3.price, s2 = "market" === e3.type || ("buy" === e3.side ? a3 <= e3.price : a3 >= e3.price), i2 = "market" === e3.type ? a3 : s2 ? "buy" === e3.side ? Math.min(e3.price, a3) : Math.max(e3.price, a3) : e3.price, r2 = {
        id: `o-${Date.now()}`,
        side: e3.side,
        type: e3.type,
        ticker: e3.ticker,
        shares: e3.shares,
        price: Math.round(100 * i2) / 100,
        status: s2 ? "filled" : "working",
        time: es(ek.current)
      };
      return (em((e4) => [r2, ...e4]), s2) ? (eo((t4) => ({
        ...t4,
        [e3.ticker]: (t4[e3.ticker] ?? 0) + ("buy" === e3.side ? e3.shares : -e3.shares)
      })), ec((t4) => t4 + ("buy" === e3.side ? -1 : 1) * e3.shares * r2.price), `Filled at ${t3 = r2.price, z.format(t3)}`) : "Order placed";
    }, eW = (0, i.useRef)(null), eO = (e3) => {
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e3.key)) return;
      let t3 = [
        ...eW.current?.querySelectorAll("button[data-ticker]") ?? []
      ], a3 = t3.indexOf(e3.currentTarget), s2 = "Home" === e3.key ? 0 : "End" === e3.key ? t3.length - 1 : K(a3 + ("ArrowDown" === e3.key ? 1 : -1), 0, t3.length - 1);
      e3.preventDefault(), t3[s2]?.focus();
    }, eB = ew - eb.prevClose, eY = eB / eb.prevClose * 100, eq = eB >= 0, eV = eq ? d.A : m.A, eG = (0, i.useMemo)(() => {
      let t3 = {};
      for (let a3 of e2)
        t3[a3.ticker] = ej.get(a3, X("1D")).filter((e3) => e3.today).map((e3) => e3.c);
      return t3;
    }, [e2, ej, Z2]);
    return (0, s.jsx)("div", {
      className: `${B().root} ${A2 ?? ""}`,
      children: (0, s.jsxs)("div", {
        className: B().shell,
        children: [
          (0, s.jsxs)("section", {
            className: B().main,
            "aria-labelledby": eg,
            children: [
              (0, s.jsxs)("header", {
                className: B().header,
                children: [
                  (0, s.jsxs)("div", {
                    className: B().identity,
                    children: [
                      (0, s.jsxs)("h1", {
                        id: eg,
                        className: B().title,
                        children: [
                          (0, s.jsx)("span", {
                            className: B().ticker,
                            children: eb.ticker
                          }),
                          (0, s.jsx)("span", {
                            className: B().company,
                            children: eb.name
                          })
                        ]
                      }),
                      (0, s.jsxs)("p", {
                        className: B().exchange,
                        children: [eb.exchange, ", USD"]
                      })
                    ]
                  }),
                  (0, s.jsxs)("div", {
                    className: B().quote,
                    children: [
                      (0, s.jsx)("span", {
                        className: B().price,
                        children: (0, s.jsx)(y.q, {
                          value: ew,
                          prefix: "$",
                          decimals: 2
                        })
                      }),
                      (0, s.jsxs)("span", {
                        className: B().change,
                        "data-direction": eq ? "up" : "down",
                        children: [
                          (0, s.jsx)(eV, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          (0, s.jsxs)("span", {
                            className: B().num,
                            children: [
                              `${eB >= 0 ? "+" : "\u2212"}${R.format(Math.abs(eB))}`,
                              " (",
                              L(eY),
                              ")"
                            ]
                          }),
                          (0, s.jsx)("span", {
                            className: B().changeLabel,
                            children: "today"
                          })
                        ]
                      })
                    ]
                  }),
                  (0, s.jsxs)("dl", {
                    className: B().stats,
                    children: [
                      (0, s.jsxs)("div", {
                        className: B().stat,
                        children: [
                          (0, s.jsx)("dt", { children: "Open" }),
                          (0, s.jsx)("dd", {
                            className: B().num,
                            children: F(eS)
                          })
                        ]
                      }),
                      (0, s.jsxs)("div", {
                        className: B().stat,
                        children: [
                          (0, s.jsx)("dt", { children: "High" }),
                          (0, s.jsx)("dd", {
                            className: B().num,
                            children: F(eA)
                          })
                        ]
                      }),
                      (0, s.jsxs)("div", {
                        className: B().stat,
                        children: [
                          (0, s.jsx)("dt", { children: "Low" }),
                          (0, s.jsx)("dd", {
                            className: B().num,
                            children: F(eC)
                          })
                        ]
                      }),
                      (0, s.jsxs)("div", {
                        className: B().stat,
                        children: [
                          (0, s.jsx)("dt", { children: "Volume" }),
                          (0, s.jsx)("dd", {
                            className: B().num,
                            children: W(e$)
                          })
                        ]
                      })
                    ]
                  }),
                  (0, s.jsxs)("button", {
                    type: "button",
                    className: B().liveButton,
                    "aria-pressed": !eI,
                    onClick: () => V2((e3) => !e3),
                    disabled: !v2,
                    "aria-label": eI ? "Pause live prices" : "Resume live prices",
                    children: [
                      (0, s.jsx)("span", {
                        className: B().liveDot,
                        "data-live": eI ? "" : void 0,
                        "aria-hidden": "true"
                      }),
                      (0, s.jsx)("span", {
                        className: B().liveText,
                        children: eI ? "Live" : "Paused"
                      }),
                      eI ? (0, s.jsx)(u.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }) : (0, s.jsx)(p.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    ]
                  })
                ]
              }),
              (0, s.jsxs)("div", {
                className: B().toolbar,
                children: [
                  (0, s.jsx)("div", {
                    className: B().seg,
                    children: (0, s.jsx)(k.A, {
                      label: "Time range",
                      value: D2,
                      onValueChange: (e3) => I2(e3),
                      options: w.map((e3) => ({ value: e3.id, label: e3.label }))
                    })
                  }),
                  (0, s.jsxs)("div", {
                    className: B().tools,
                    children: [
                      (0, s.jsx)("div", {
                        className: B().toggles,
                        role: "group",
                        "aria-label": "Moving averages",
                        children: T.map(
                          (e3) => (0, s.jsxs)(
                            "button",
                            {
                              type: "button",
                              className: B().toggle,
                              "data-average": e3.id,
                              "aria-pressed": O2.includes(e3.id),
                              onClick: () => {
                                let t3;
                                return t3 = e3.id, Y2(
                                  (e4) => e4.includes(t3) ? e4.filter((e5) => e5 !== t3) : [...e4, t3]
                                );
                              },
                              children: [
                                (0, s.jsx)("span", {
                                  className: B().swatch,
                                  "aria-hidden": "true"
                                }),
                                e3.label
                              ]
                            },
                            e3.id
                          )
                        )
                      }),
                      (0, s.jsxs)("div", {
                        className: B().zoom,
                        role: "group",
                        "aria-label": "Zoom",
                        children: [
                          (0, s.jsx)("button", {
                            type: "button",
                            className: B().iconButton,
                            onClick: () => ev.current?.zoom(0.7),
                            "aria-label": "Zoom in",
                            children: (0, s.jsx)(x.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            })
                          }),
                          (0, s.jsx)("button", {
                            type: "button",
                            className: B().iconButton,
                            onClick: () => ev.current?.zoom(1.45),
                            "aria-label": "Zoom out",
                            children: (0, s.jsx)(f.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            })
                          }),
                          (0, s.jsx)("button", {
                            type: "button",
                            className: B().iconButton,
                            onClick: () => ev.current?.reset(),
                            "aria-label": "Reset view",
                            children: (0, s.jsx)(_.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            })
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, s.jsx)(Q, {
                bars: eN,
                seriesId: U(eb.ticker, eM.id),
                range: eM,
                symbol: eb,
                live: ew,
                averages: O2,
                limit: "limit" === ex ? ez : null,
                reduced: $2,
                zoomRef: ev
              })
            ]
          }),
          (0, s.jsxs)("aside", {
            className: B().side,
            "aria-label": "Watchlist and order ticket",
            children: [
              (0, s.jsxs)("section", {
                className: B().watch,
                "aria-labelledby": `${eg}-watch`,
                children: [
                  (0, s.jsxs)("div", {
                    className: B().panelHead,
                    children: [
                      (0, s.jsx)("h2", {
                        id: `${eg}-watch`,
                        className: B().panelTitle,
                        children: "Watchlist"
                      }),
                      (0, s.jsxs)("span", {
                        className: B().panelMeta,
                        children: [e2.length, " symbols"]
                      })
                    ]
                  }),
                  (0, s.jsx)(o.o, {
                    id: `${eg}-watchlist`,
                    children: (0, s.jsx)("ul", {
                      ref: eW,
                      className: B().watchList,
                      children: e2.map(
                        (e3) => (0, s.jsx)(
                          ee,
                          {
                            symbol: e3,
                            price: G2[e3.ticker] ?? e3.price,
                            points: eG[e3.ticker] ?? [],
                            selected: e3.ticker === eb.ticker,
                            reduced: $2,
                            onSelect: () => {
                              var t3;
                              P2(t3 = e3.ticker), "limit" === ex && void 0 === e_[t3] && eF(t3, eu);
                            },
                            onKeyDown: eO
                          },
                          e3.ticker
                        )
                      )
                    })
                  })
                ]
              }),
              (0, s.jsx)(et, {
                symbol: eb,
                price: ew,
                held: el[eb.ticker] ?? 0,
                buyingPower: eh,
                orders: ed,
                side: eu,
                setSide: (e3) => {
                  ep(e3), eF(eb.ticker, e3);
                },
                type: ex,
                setType: (e3) => {
                  ef(e3), "limit" === e3 && void 0 === e_[eb.ticker] && eF(eb.ticker, eu);
                },
                limit: ez,
                setLimit: (e3) => ey((t3) => ({ ...t3, [eb.ticker]: e3 })),
                reduced: $2,
                onSubmit: eL,
                onCancel: (e3) => {
                  S2?.(e3), em(
                    (t3) => t3.map(
                      (t4) => t4.id === e3.id ? { ...t4, status: "canceled" } : t4
                    )
                  );
                }
              })
            ]
          })
        ]
      })
    });
  }
  let en = er;
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
A.regCss(49144, ".root{box-sizing:border-box;width:100%;max-width:1360px;min-width:0;margin-inline:auto;container-type:inline-size;container-name:terminal;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.num{font-variant-numeric:tabular-nums}\n.shell{display:grid;grid-template-columns:minmax(0,1fr);gap:16px;align-items:stretch}\n.shell>*{min-width:0}\n@container terminal (min-width: 1080px){.shell{grid-template-columns:minmax(0,1fr) 340px}\n.main{display:flex;flex-direction:column;gap:16px;min-width:0;padding:20px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}\n@container terminal (max-width: 639px){.main{padding:16px}\n.side{display:grid;grid-template-columns:minmax(0,1fr);gap:16px;align-content:start;min-width:0}\n.side>*{min-width:0}\n@container terminal (min-width: 720px){.side{grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:stretch}\n.side{grid-template-columns:minmax(0,1fr)}\n.header{display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-areas:\"identity live\" \"quote quote\" \"stats stats\";gap:4px 16px;align-items:start}\n@container terminal (min-width: 760px){.header{grid-template-areas:\"identity live\" \"quote stats\";align-items:end}\n.identity{grid-area:identity;min-width:0}\n.quote{grid-area:quote;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 12px;min-width:0;margin-top:4px}\n.stats{grid-area:stats;margin-top:12px}\n.stats{margin-top:0;justify-self:end}\n.stats{display:grid;grid-template-columns:repeat(4,auto);justify-content:start;gap:4px 24px;margin-bottom:0}\n.stats{grid-template-columns:repeat(4,minmax(0,1fr));gap:4px 12px;width:100%}\n.liveButton{grid-area:live;justify-self:end}\n.liveButton{display:inline-flex;align-items:center;gap:8px;height:var(--control-height-sm);padding-inline:12px 10px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--text-secondary);font:inherit;font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.liveButton:focus-visible,.liveButton:hover{background:var(--surface-muted);color:var(--foreground)}\n.liveButton:disabled{cursor:default;opacity:.6}\n.liveButton,.toggle{height:var(--control-height-md)}\n.change,.iconButton,.limitTag,.liveButton,.orderStatus,.problem,.swatch,.toggle,.watchRow{transition:none}\n.title{display:flex;align-items:baseline;gap:8px;min-width:0;margin:0;font-family:var(--font-body);font-size:var(--text-lg);font-weight:500;line-height:var(--leading-body)}\n.ticker{flex:none}\n.company{min-width:0;overflow:hidden;color:var(--text-secondary);font-size:var(--text-sm);font-weight:400;text-overflow:ellipsis;white-space:nowrap}\n.exchange{margin:0;color:var(--text-muted);font-size:var(--text-xs)}\n.price{font-family:var(--font-display);font-size:var(--text-3xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);font-variant-numeric:tabular-nums;white-space:nowrap}\n.price{font-size:var(--text-2xl)}\n.change{display:inline-flex;align-items:center;gap:4px;font-weight:500;white-space:nowrap;transition:color var(--duration-fast) var(--ease-standard)}\n.change[data-direction=up]{color:var(--success)}\n.change[data-direction=down]{color:var(--danger)}\n.change svg{flex:none}\n.changeLabel{color:var(--text-muted);font-weight:400}\n.stat{display:grid;gap:2px;min-width:0}\n.stat dt{color:var(--text-muted);font-size:var(--text-xs)}\n.stat dd{margin:0;font-size:var(--text-sm);white-space:nowrap}\n.liveText{min-width:46px;font-variant-numeric:tabular-nums}\n.liveDot{position:relative;width:8px;height:8px;border-radius:50%;background:var(--text-muted);transition:background-color var(--duration-fast) var(--ease-standard)}\n.liveDot[data-live]{background:var(--success)}\n.liveDot[data-live]:after{content:\"\";position:absolute;inset:0;border-radius:inherit;background:var(--success);animation:livePulse 1.8s var(--ease-standard) infinite}\n@media (prefers-reduced-motion:reduce){.liveDot[data-live]:after{animation:none;opacity:0}\n.toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 12px}\n.toolbar .seg{width:100%}\n.seg{min-width:0;max-width:100%}\n.tools{display:flex;flex-wrap:wrap;align-items:center;gap:8px}\n.tools{width:100%;flex-wrap:nowrap;justify-content:space-between;gap:4px}\n.toggles,.zoom{display:flex;align-items:center;gap:4px}\n.toggles,.zoom{gap:0}\n.toggle{display:inline-flex;align-items:center;gap:8px;height:var(--control-height-sm);padding-inline:12px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-muted);font:inherit;font-variant-numeric:tabular-nums;white-space:nowrap;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.toggle:focus-visible,.toggle:hover{background:var(--surface-muted);color:var(--text-secondary)}\n.toggle[aria-pressed=true]{color:var(--foreground)}\n.toggle[data-average=ma50] .swatch{background:var(--series-3)}\n.toggle[aria-pressed=true] .swatch{opacity:1}\n.toggle{padding-inline:8px}\n.swatch{width:12px;height:2px;border-radius:1px;background:var(--series-1);opacity:.35;transition:opacity var(--duration-fast) var(--ease-standard)}\n.iconButton{display:inline-grid;place-items:center;flex:none;width:var(--control-height-sm);height:var(--control-height-sm);padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.iconButton:focus-visible,.iconButton:hover{background:var(--surface-muted);color:var(--foreground)}\n.iconButton:active{transform:scale(.94)}\n.orderAction .iconButton{margin-right:-8px}\n.iconButton{width:var(--control-height-md);height:var(--control-height-md)}\n.iconButton:active{transform:none}\n.chart{position:relative;flex:1;display:flex;flex-direction:column;min-width:0;container-type:inline-size;container-name:chart}\n.probe{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}\n.surface{position:relative;flex:1;min-height:420px;height:460px;overflow:hidden;touch-action:pan-y;user-select:none;-webkit-user-select:none;cursor:crosshair;font-variant-numeric:tabular-nums}\n.surface{min-height:320px;height:340px}\n.canvas{position:absolute;inset:0;width:100%;height:100%}\n.readout{position:absolute;top:4px;left:0;right:76px;z-index:2;display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 16px;color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums;pointer-events:none}\n@container chart (max-width: 639px){.readout{position:static;margin-bottom:8px;gap:2px 12px}\n.readDate{color:var(--foreground);font-weight:500;white-space:nowrap}\n.readGroup{display:flex;flex-wrap:wrap;gap:2px 12px}\n.readItem{display:inline-flex;gap:4px;white-space:nowrap}\n.readItem[data-hidden]{display:none}\n.readItem[data-average=ma20] .readKey{color:var(--series-1)}\n.readItem[data-average=ma50] .readKey{color:var(--series-3)}\n.readKey{color:var(--text-muted)}\n.readChange{font-weight:500;white-space:nowrap}\n.readChange[data-direction=up]{color:var(--success)}\n.readChange[data-direction=down]{color:var(--danger)}\n.crossPrice,.crossTime,.lastTag,.limitTag{position:absolute;z-index:1;display:flex;align-items:center;height:22px;padding-inline:8px;border-radius:6px;font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none;will-change:transform}\n.lastTag{top:-11px;right:0;width:64px;background:var(--success);color:var(--background)}\n.lastTag[data-direction=down]{background:var(--danger)}\n.crossPrice{top:-11px;right:0;width:64px;background:var(--foreground);color:var(--background);opacity:0}\n.crossPrice[data-visible],.crossTime[data-visible]{opacity:1}\n.limitTag{top:-11px;left:8px;background:var(--accent-subtle);color:var(--accent-strong);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.limitTag[data-visible]{opacity:1}\n.crossTime{bottom:3px;left:0;background:var(--foreground);color:var(--background);opacity:0}\n.ticket,.watch{min-width:0;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);overflow:hidden}\n.panelHead{display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding:16px 20px 8px}\n.orders,.panelHead,.ticketBody{padding-inline:16px}\n.panelTitle{margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;line-height:1.4}\n.panelMeta{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}\n.watchList{display:grid;gap:2px;margin:0;padding:0 8px 8px;list-style:none}\n.watchItem{min-width:0}\n.watchRow{position:relative;display:grid;grid-template-columns:minmax(0,1fr) 64px 84px;align-items:center;gap:12px;width:100%;min-height:52px;padding:8px 12px;border:0;border-radius:calc(var(--radius-panel) - 8px);background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;isolation:isolate;transition:background-color var(--duration-fast) var(--ease-standard)}\n.watchRow:focus-visible,.watchRow:hover{background:color-mix(in oklab,var(--surface-muted) 60%,transparent)}\n.watchSelected{position:absolute;inset:0;z-index:-1;border-radius:inherit;background:var(--surface-muted)}\n.watchName{display:grid;min-width:0}\n.watchTicker{font-weight:500}\n.watchCompany{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.watchQuote{display:grid;justify-items:end;font-variant-numeric:tabular-nums}\n.watchPrice{position:relative;isolation:isolate;font-weight:500;white-space:nowrap}\n.flash{position:absolute;inset:-1px -6px;z-index:-1;border-radius:6px;background:color-mix(in oklab,var(--success) 20%,transparent);opacity:0}\n.flash[data-direction=down]{background:color-mix(in oklab,var(--danger) 20%,transparent)}\n.watchChange{font-size:var(--text-xs);white-space:nowrap}\n.watchChange[data-direction=up]{color:var(--success)}\n.watchChange[data-direction=down]{color:var(--danger)}\n.spark{display:block;width:64px;height:28px;overflow:visible}\n.spark[data-direction=down] .sparkLine{stroke:var(--danger)}\n.sparkBase{stroke:var(--border);stroke-width:1;stroke-dasharray:2 3}\n.sparkLine{fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke:var(--success)}\n.ticketBody{display:grid;gap:16px;padding:8px 20px 20px}\n.ticketSegs{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px}\n.ticketSegs>*{min-width:0}\n.fields{display:grid;min-width:0}\n.limitField{overflow:hidden}\n.limitInner{padding-top:12px}\n.summary{display:grid;gap:6px;margin:0;padding-top:12px;border-top:1px solid var(--border-subtle)}\n.summaryRow{display:flex;justify-content:space-between;gap:12px}\n.summaryRow dt{color:var(--text-secondary)}\n.summaryRow dd{margin:0;font-weight:500;white-space:nowrap}\n.problem{min-height:1.4em;margin:-4px 0 -8px;color:var(--danger);font-size:var(--text-xs);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.problem[data-visible]{opacity:1}\n.submit{width:100%;font-variant-numeric:tabular-nums}\n.simulated{margin:-8px 0 0;color:var(--text-muted);font-size:var(--text-xs);text-align:center}\n.orders{padding:12px 20px 16px;border-top:1px solid var(--border-subtle)}\n.ordersTitle{margin:0 0 4px;font-size:var(--text-sm);font-weight:500}\n.orderList{margin:0;padding:0;list-style:none}\n.orderItem{overflow:hidden}\n.order{display:flex;align-items:center;gap:12px;min-height:48px;padding-block:4px}\n.order[data-status=canceled] .orderTitle{color:var(--text-muted)}\n.orderMain{display:grid;flex:1;min-width:0}\n.orderTitle{font-weight:500;font-variant-numeric:tabular-nums}\n.orderMeta{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap}\n.orderStatus{flex:none;padding:2px 8px;border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.orderStatus[data-status=filled]{background:color-mix(in oklab,var(--success) 14%,transparent);color:var(--success)}\n.orderStatus[data-status=working]{background:var(--accent-subtle);color:var(--accent-strong)}\n.orderAction{display:flex;flex:none;justify-content:flex-end;width:calc(var(--control-height-sm) - 8px);margin-left:-4px}\n.orderAction{width:calc(var(--control-height-md) - 8px)}\n@media (pointer:coarse){.orderAction{width:calc(var(--control-height-md) - 8px)}", {"root":"root","srOnly":"srOnly","num":"num","shell":"shell","main":"main","side":"side","header":"header","identity":"identity","quote":"quote","stats":"stats","liveButton":"liveButton","toggle":"toggle","change":"change","iconButton":"iconButton","limitTag":"limitTag","orderStatus":"orderStatus","problem":"problem","swatch":"swatch","watchRow":"watchRow","title":"title","ticker":"ticker","company":"company","exchange":"exchange","price":"price","changeLabel":"changeLabel","stat":"stat","liveText":"liveText","liveDot":"liveDot","toolbar":"toolbar","seg":"seg","tools":"tools","toggles":"toggles","zoom":"zoom","orderAction":"orderAction","chart":"chart","probe":"probe","surface":"surface","canvas":"canvas","readout":"readout","readDate":"readDate","readGroup":"readGroup","readItem":"readItem","readKey":"readKey","readChange":"readChange","crossPrice":"crossPrice","crossTime":"crossTime","lastTag":"lastTag","ticket":"ticket","watch":"watch","panelHead":"panelHead","orders":"orders","ticketBody":"ticketBody","panelTitle":"panelTitle","panelMeta":"panelMeta","watchList":"watchList","watchItem":"watchItem","watchSelected":"watchSelected","watchName":"watchName","watchTicker":"watchTicker","watchCompany":"watchCompany","watchQuote":"watchQuote","watchPrice":"watchPrice","flash":"flash","watchChange":"watchChange","spark":"spark","sparkLine":"sparkLine","sparkBase":"sparkBase","ticketSegs":"ticketSegs","fields":"fields","limitField":"limitField","limitInner":"limitInner","summary":"summary","summaryRow":"summaryRow","submit":"submit","simulated":"simulated","ordersTitle":"ordersTitle","orderList":"orderList","orderItem":"orderItem","order":"order","orderTitle":"orderTitle","orderMain":"orderMain","orderMeta":"orderMeta"});
A.reg(52824, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  let i;
  n.d(t, { o: () => L });
  var r = n(95155), a = n(55809), u = n(25354), s = n(18310), l = n(28245), o = n(92171), c = n(80642), d = n(2125), m = n(36565), f = n(12115), p = n(7770), h = n(78684), x = n.n(h);
  let { spring: b, duration: y, blur: _ } = p.T, g = [...p.T.ease.enter], v = [...p.T.ease.standard], w = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], N = {
    type: "spring",
    stiffness: (i = 2 * Math.PI / (1.2 * b.morph.visualDuration)) * i,
    damping: 2 * (1 - b.morph.bounce) * i
  }, j = (e2) => (String(e2).split(".")[1] ?? "").length, R = (e2, t2) => "function" == typeof e2 ? e2(t2) : e2 ?? "", $ = {
    enter: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${_.soft}px)`
    }),
    center: {
      width: "auto",
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transitionEnd: { filter: "none" },
      transition: {
        width: b.morph,
        scale: b.morph,
        opacity: b.morph,
        y: b.snappy,
        filter: { duration: 0.3, ease: v }
      }
    },
    exit: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${_.subtle}px)`,
      transition: {
        width: b.smooth,
        scale: b.smooth,
        y: { duration: y.fast, ease: v },
        opacity: { duration: y.instant },
        filter: { duration: y.instant }
      }
    })
  }, M = (e2) => ({ width: "auto", scale: 1, opacity: e2, y: 0, filter: "none" }), P = {
    enter: M(0),
    center: { ...M(1), transition: { duration: y.instant } },
    exit: { width: 0, opacity: 0, transition: { duration: 0 } }
  }, S = {
    enter: M(1),
    center: { ...M(1), transition: { duration: 0 } },
    exit: { width: 0, opacity: 0, transition: { duration: 0 } }
  };
  function E({ position: e2, digit: t2 }) {
    let n2 = (e3) => ((t2 - e3) % 10 + 15) % 10 - 5, i2 = (0, a.G)(e2, (e3) => `${1.05 * n2(e3)}em`), s2 = (0, a.G)(e2, (e3) => Math.max(0, 1 - Math.abs(n2(e3)) ** 1.5 * 1.1)), l2 = (0, a.G)(e2, (e3) => Math.abs(n2(e3)) >= 1 ? "hidden" : "visible"), o2 = (0, a.G)(e2, (e3) => {
      let t3 = Math.abs(n2(e3));
      return t3 < 0.02 || t3 >= 1 ? "none" : `blur(${(t3 * _.soft * 0.75).toFixed(2)}px)`;
    });
    return (0, r.jsx)(u.PY1.span, {
      className: x().glyph,
      style: { y: i2, opacity: s2, filter: o2, visibility: l2 },
      children: t2
    });
  }
  function T({ digit: e2, direction: t2, instant: n2 }) {
    let i2 = (0, s.I)(), a2 = (0, l.d)(e2), u2 = (0, f.useRef)({ digit: e2, target: e2 });
    return (0, f.useLayoutEffect)(() => {
      let r2 = u2.current;
      if (r2.digit === e2) return;
      let s2 = t2 > 0 ? (e2 - r2.digit + 10) % 10 : -((r2.digit - e2 + 10) % 10);
      Math.abs(s2) > 5 && (s2 -= 10 * Math.sign(s2)), r2.target += s2, r2.digit = e2, n2 || i2 ? a2.jump(r2.target) : (0, o.i)(a2, r2.target, b.snappy);
    }, [e2, t2, n2, a2, i2]), (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("span", { className: x().sizer, children: "0" }),
        w.map((e3) => (0, r.jsx)(E, { position: a2, digit: e3 }, e3))
      ]
    });
  }
  function k({ value: e2, format: t2, direction: n2, instant: i2 }) {
    let a2, l2, o2, d2 = (0, s.I)(), m2 = i2 ? S : d2 ? P : $;
    return (0, r.jsx)(c.N, {
      initial: false,
      custom: n2,
      children: (l2 = (a2 = t2.formatToParts(e2)).reduce(
        (e3, t3) => e3 + ("integer" === t3.type ? t3.value.length : 0),
        0
      ), o2 = 0, a2.flatMap(
        (e3, t3) => "integer" === e3.type ? [...e3.value].map((e4) => ({ key: `i${--l2}`, digit: Number(e4) })) : "fraction" === e3.type ? [...e3.value].map((e4) => ({ key: `f${o2++}`, digit: Number(e4) })) : [
          {
            key: "group" === e3.type ? `g${l2}` : "decimal" === e3.type ? "d" : "minusSign" === e3.type ? "m" : `${e3.type}${t3}`,
            text: e3.value
          }
        ]
      )).map(
        (e3) => (0, r.jsx)(
          u.PY1.span,
          {
            className: "digit" in e3 ? x().column : x().symbol,
            custom: n2,
            variants: m2,
            initial: "enter",
            animate: "center",
            exit: "exit",
            children: "digit" in e3 ? (0, r.jsx)(T, { digit: e3.digit, direction: n2, instant: i2 }) : e3.text
          },
          e3.key
        )
      )
    });
  }
  function D({ text: e2, direction: t2, className: n2 }) {
    let i2 = (0, s.I)();
    return (0, r.jsx)("span", {
      className: n2,
      children: (0, r.jsx)(c.N, {
        initial: false,
        custom: t2,
        children: [...e2].map(
          (e3, n3) => (0, r.jsx)(
            u.PY1.span,
            {
              className: x().char,
              custom: t2,
              variants: i2 ? P : $,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: e3
            },
            `${n3}:${e3}`
          )
        )
      })
    });
  }
  let I = (e2) => {
    let t2 = e2?.replace(/[^\d.-]/g, "");
    return t2 && /\d/.test(t2) && Number.isFinite(Number(t2)) ? Number(t2) : null;
  }, F = (e2, t2) => {
    let n2 = e2.split(" ");
    return t2.split(" ").map((e3, t3) => {
      let i2 = I(n2[t3]), r2 = I(e3);
      return null !== i2 && null !== r2 && r2 < i2 ? -1 : 1;
    });
  }, C = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${_.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transitionEnd: { filter: "none" },
      transition: { duration: 0.22, ease: g, opacity: b.morph }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${_.subtle}px)`,
      transition: { duration: 0.14, ease: v }
    })
  }, z = {
    enter: { opacity: 0, y: 0, filter: "none" },
    center: {
      opacity: 1,
      y: 0,
      filter: "none",
      transition: { duration: y.instant }
    },
    exit: { opacity: 0, transition: { duration: 0 } }
  };
  function A({ word: e2, direction: t2 }) {
    let n2 = (0, s.I)(), i2 = (0, f.useRef)(null), a2 = (0, l.d)("auto"), d2 = (0, f.useRef)(false);
    return (0, f.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        !d2.current || n2 ? a2.jump(e3.offsetWidth) : (0, o.i)(a2, e3.offsetWidth, b.morph), d2.current = true;
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [n2, a2]), (0, r.jsxs)(u.PY1.span, {
      className: x().wordSlot,
      style: { width: a2 },
      children: [
        (0, r.jsx)("span", { ref: i2, className: x().wordSizer, children: e2 }),
        (0, r.jsx)(c.N, {
          initial: false,
          mode: "popLayout",
          custom: t2,
          children: (0, r.jsx)(
            u.PY1.span,
            {
              className: x().word,
              custom: t2,
              variants: n2 ? z : C,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: e2
            },
            e2
          )
        })
      ]
    });
  }
  function G({ text: e2 }) {
    let [t2, n2] = (0, f.useState)({ text: e2, directions: [] });
    t2.text !== e2 && n2({ text: e2, directions: F(t2.text, e2) });
    let i2 = t2.text === e2 ? t2.directions : F(t2.text, e2), a2 = e2.split(" ");
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("span", { className: x().srOnly, children: e2 }),
        (0, r.jsx)("span", {
          className: x().words,
          "aria-hidden": "true",
          children: a2.map(
            (e3, t3) => (0, r.jsxs)(
              f.Fragment,
              {
                children: [
                  t3 > 0 && " ",
                  (0, r.jsx)(A, { word: e3, direction: i2[t3] ?? 1 })
                ]
              },
              t3
            )
          )
        })
      ]
    });
  }
  function U({ id: e2, text: t2, className: n2 }) {
    return (0, r.jsx)(c.N, {
      initial: false,
      children: t2 ? (0, r.jsx)(X, { id: e2, text: t2, className: n2 }, "message") : null
    });
  }
  function X({ id: e2, text: t2, className: n2 }) {
    let i2 = (0, s.I)(), a2 = (0, f.useRef)(null), [l2, o2] = (0, f.useState)("auto");
    return (0, f.useLayoutEffect)(() => {
      let e3 = a2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(
        ([t4]) => o2(t4?.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight)
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsx)(u.PY1.span, {
      className: x().messageSlot,
      initial: { height: 0, opacity: 0 },
      animate: { height: l2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: i2 ? { duration: 0 } : { height: b.smooth, opacity: { duration: y.instant } }
      },
      transition: i2 ? { duration: 0 } : { height: b.smooth, opacity: { duration: y.fast } },
      children: (0, r.jsx)(u.PY1.span, {
        ref: a2,
        id: e2,
        className: n2,
        initial: !i2 && { y: "0.35em", filter: `blur(${_.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: { duration: i2 ? 0 : y.standard, ease: g },
        children: (0, r.jsx)(G, { text: t2 })
      })
    });
  }
  function O({ id: e2, edge: t2, text: n2 }) {
    let i2 = (0, s.I)();
    return (0, r.jsx)(c.N, {
      initial: false,
      children: 0 !== t2 && (0, r.jsx)(
        u.PY1.span,
        {
          id: e2,
          className: x().limit,
          initial: i2 ? { opacity: 0 } : {
            opacity: 0,
            y: `${0.45 * t2}em`,
            filter: `blur(${_.subtle}px)`
          },
          animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transitionEnd: { filter: "none" }
          },
          exit: {
            opacity: 0,
            transition: { duration: i2 ? y.instant : y.standard, ease: v }
          },
          transition: i2 ? { duration: y.instant } : {
            y: b.snappy,
            opacity: { duration: y.fast },
            filter: { duration: y.fast }
          },
          children: n2
        },
        "limit"
      )
    });
  }
  function Y({
    toward: e2,
    label: t2,
    disabled: n2,
    controls: i2,
    limit: a2,
    pressed: u2,
    iconRef: s2,
    onPress: l2,
    onRelease: o2,
    onActivate: c2
  }) {
    let f2 = e2 > 0 ? d.A : m.A;
    return (0, r.jsx)("button", {
      type: "button",
      className: x().step,
      disabled: n2,
      "aria-controls": i2,
      "aria-label": `${e2 > 0 ? "Increase" : "Decrease"} ${t2}`,
      "aria-disabled": a2 || void 0,
      "data-pressed": u2 || void 0,
      onPointerDown: (e3) => {
        0 === e3.button && l2();
      },
      onPointerUp: o2,
      onPointerLeave: o2,
      onPointerCancel: o2,
      onMouseDown: (e3) => e3.preventDefault(),
      onClick: (e3) => {
        0 === e3.detail && c2();
      },
      onContextMenu: (e3) => e3.preventDefault(),
      children: (0, r.jsx)("span", {
        ref: s2,
        className: x().icon,
        children: (0, r.jsx)(f2, {
          size: 16,
          strokeWidth: 1.75,
          "aria-hidden": "true"
        })
      })
    });
  }
  function L({
    label: e2,
    value: t2,
    defaultValue: n2 = 0,
    onValueChange: i2,
    min: c2 = 0,
    max: d2 = Number.MAX_SAFE_INTEGER,
    step: m2 = 1,
    largeStep: p2,
    description: h2,
    disabled: y2,
    id: _2,
    prefix: g2,
    suffix: v2,
    scrub: w2 = false,
    locale: $2 = "en-US",
    formatOptions: M2,
    size: P2 = "md",
    limitHint: S2 = true
  }) {
    let E2 = (0, s.I)(), T2 = (0, f.useId)(), I2 = _2 ?? T2, F2 = h2 ? `${I2}-description` : void 0, C2 = `${I2}-limit`, z2 = m2 > 0 ? m2 : 1, [A2, G2] = (0, f.useState)(n2), X2 = t2 ?? A2, [H, B] = (0, f.useState)(""), [K, W] = (0, f.useState)(false), [q, Z] = (0, f.useState)(0), [J, Q] = (0, f.useState)(false), [V, ee] = (0, f.useState)(""), [et, en] = (0, f.useState)(0), [ei, er] = (0, f.useState)(false), ea = (0, f.useRef)(null), eu = (0, f.useRef)(null), es = (0, f.useRef)(null), el = (0, f.useRef)(void 0), eo = (0, f.useRef)(void 0), ec = (0, f.useRef)(void 0), ed = (0, f.useRef)({ edge: 0, count: 0, at: 0 }), em = (0, f.useRef)(null), ef = (0, f.useRef)(null), ep = (0, f.useRef)(X2), eh = (0, f.useRef)(X2), ex = (0, f.useRef)(void 0), eb = (0, f.useRef)(null), ey = (0, f.useRef)(false), e_ = (0, f.useRef)(null), eg = (0, f.useRef)(false), ev = (0, f.useRef)(() => false), ew = (0, l.d)(0), eN = (0, l.d)(0), ej = (0, l.d)(0), eR = (0, a.G)(() => eN.get() + ej.get()), e$ = Number.isFinite(c2) ? c2 : 0, eM = Math.max(j(z2), j(e$)), eP = M2?.minimumFractionDigits ?? eM, eS = Math.max(eP, M2?.maximumFractionDigits ?? eM), eE = M2?.useGrouping ?? true, eT = (0, f.useMemo)(
      () => new Intl.NumberFormat($2, {
        minimumFractionDigits: eP,
        maximumFractionDigits: eS,
        useGrouping: eE,
        numberingSystem: "latn"
      }),
      [$2, eP, eS, eE]
    ), ek = (0, f.useMemo)(() => {
      let e3 = new Intl.NumberFormat($2).formatToParts(-1234.5);
      return {
        group: e3.find((e4) => "group" === e4.type)?.value ?? ",",
        decimal: e3.find((e4) => "decimal" === e4.type)?.value ?? "."
      };
    }, [$2]), eD = (e3) => Number(e3.toFixed(eM)) || 0, eI = (e3) => eD(e$ + Math.round((e3 - e$) / z2) * z2), eF = (e3, t3) => {
      let n3 = (e3 - e$) / z2;
      return eD(
        e$ + ((t3 > 0 ? Math.floor(n3 + 1e-7) : Math.ceil(n3 - 1e-7)) + t3) * z2
      );
    }, eC = (e3) => `${R(g2, e3)}${eT.format(e3)}${R(v2, e3)}`.trim();
    function ez(e3) {
      let t3 = e3.split(ek.group).join("").replace(ek.decimal, ".").replace(/[^\d.-]/g, "");
      if (!/\d/.test(t3)) return null;
      let n3 = Number(t3);
      return Number.isFinite(n3) ? n3 : null;
    }
    let eA = K ? ez(H) : null, eG = eA ?? X2, [eU, eX] = (0, f.useState)({ value: eG, direction: 1 });
    eU.value !== eG && eX({ value: eG, direction: eG > eU.value ? 1 : -1 });
    let eO = eU.value === eG ? eU.direction : eG > eU.value ? 1 : -1;
    function eY(e3, n3) {
      if (!Number.isFinite(e3)) return false;
      let r2 = Math.min(d2, Math.max(c2, e3)), a2 = Math.sign(e3 - r2);
      return a2 && "scrub" !== n3 ? (!(function(e4, t3) {
        let n4 = performance.now(), i3 = ed.current;
        i3.count = i3.edge === e4 && n4 - i3.at < 700 ? i3.count + 1 : 1, i3.edge = e4, i3.at = n4;
        let r3 = ea.current;
        if (r3 && (r3.dataset.strain = e4 > 0 ? "max" : "min", window.clearTimeout(ec.current), ec.current = window.setTimeout(() => {
          delete r3.dataset.strain;
        }, 420)), !E2) {
          (0, o.i)(ew, 0, {
            ...N,
            velocity: -(130 * e4) * (1 + 0.22 * Math.min(i3.count - 1, 4))
          });
          let n5 = (e4 > 0 ? es : eu).current;
          n5 && ("button" === t3 || "key" === t3) && (0, o.i)(
            n5,
            { x: [0, -2.5, 2.5, -1.5, 1, 0] },
            { duration: 0.32, ease: "easeOut" }
          );
        }
        S2 && (en(e4), window.clearTimeout(el.current), el.current = window.setTimeout(() => en(0), 1500));
      })(a2 > 0 ? 1 : -1, n3), ee(`${eC(r2)}, ${a2 > 0 ? "maximum" : "minimum"}`)) : "button" === n3 && r2 !== ep.current && ee(eC(r2)), r2 !== ep.current && (ep.current = r2, void 0 === t2 && G2(r2), i2?.(r2), true);
    }
    (0, f.useEffect)(
      () => () => {
        window.clearTimeout(ex.current), window.clearTimeout(el.current), window.clearTimeout(eo.current), window.clearTimeout(ec.current);
      },
      []
    );
    let eL = (e3, t3, n3) => eY(eF(ep.current, e3 * t3), n3);
    function eH() {
      let e3 = ef.current;
      e3 && null === e_.current && (e_.current = e3.getBoundingClientRect().left - eN.get() - ej.get());
    }
    function eB() {
      window.clearTimeout(eo.current), er(false);
    }
    function eK() {
      if (!K) return;
      eH(), W(false), eB();
      let e3 = ez(H);
      null !== e3 && eY(eI(e3), "type");
    }
    function eW() {
      window.clearTimeout(ex.current), ex.current = void 0, Z(0);
    }
    function eq(e3, t3, n3) {
      eW(), eK();
      let i3 = Math.max(1, Math.round(t3 / z2));
      "button" === n3 && Z(e3);
      let r2 = 0, a2 = () => {
        let t4 = ev.current(e3, i3, n3);
        ex.current = window.setTimeout(
          a2,
          t4 ? Math.max(40, 150 * 0.86 ** ++r2) : 240
        );
      };
      ex.current = window.setTimeout(a2, eL(e3, i3, n3) ? 400 : 360);
    }
    function eZ(e3) {
      let t3 = eb.current;
      !t3 || t3.pointer !== e3.pointerId || (eb.current = null, t3.active && (ey.current = true, Q(false), (0, o.i)(eN, 0, E2 ? { duration: 0 } : b.snappy), ee(eC(ep.current))));
    }
    (0, f.useLayoutEffect)(() => {
      ep.current = X2, ev.current = eL;
    }), (0, f.useLayoutEffect)(() => {
      let e3 = e_.current, t3 = ef.current;
      if (e_.current = null, eg.current) {
        eg.current = false;
        let e4 = em.current;
        if (e4 && document.activeElement === e4) {
          let t4 = e4.value.length;
          e4.setSelectionRange(t4, t4);
        }
      }
      if (null === e3 || !t3) return;
      let n3 = e3 - (t3.getBoundingClientRect().left - eN.get() - ej.get());
      0.5 > Math.abs(n3) || (ej.set(ej.get() + n3), E2 ? ej.jump(0) : (0, o.i)(ej, 0, b.morph));
    });
    let eJ = (t3) => ({
      toward: t3,
      label: e2,
      disabled: y2,
      controls: I2,
      limit: t3 > 0 ? eG >= d2 : eG <= c2,
      pressed: q === t3
    }), eQ = null === eA ? 0 : eA > d2 ? 1 : eA < c2 && ei ? -1 : 0, eV = S2 ? eQ || et : 0, e0 = eV > 0 ? d2 : c2, e1 = eV ? "function" == typeof S2 ? S2(eV > 0 ? "max" : "min", e0) : `${eV > 0 ? "Max" : "Min"} ${eC(e0)}` : "", e5 = [F2, eQ && S2 ? C2 : void 0].filter(Boolean).join(" ") || void 0;
    return (0, r.jsxs)("div", {
      className: x().field,
      "data-size": P2,
      children: [
        (0, r.jsxs)("div", {
          className: x().head,
          children: [
            (0, r.jsx)("label", {
              htmlFor: I2,
              className: x().label,
              "data-scrub": w2 && !y2 || void 0,
              onPointerDown: function(e3) {
                ey.current = false, w2 && !y2 && 0 === e3.button && (eK(), eb.current = {
                  pointer: e3.pointerId,
                  x: e3.clientX,
                  from: ep.current,
                  active: false
                }, e3.currentTarget.setPointerCapture(e3.pointerId));
              },
              onPointerMove: function(e3) {
                let t3 = eb.current;
                if (!t3 || t3.pointer !== e3.pointerId) return;
                let n3 = e3.clientX - t3.x;
                if (!t3.active) {
                  if (3 > Math.abs(n3)) return;
                  t3.active = true, Q(true);
                }
                let i3 = n3 / 6, r2 = Math.trunc(i3);
                eY(r2 ? eF(t3.from, r2) : t3.from, "scrub");
                let a2 = t3.from + i3 * z2, u2 = a2 > d2 ? (a2 - d2) / z2 * 6 : a2 < c2 ? (a2 - c2) / z2 * 6 : 0;
                eN.set(
                  E2 ? 0 : ((e4, t4 = 10) => Math.sign(e4) * (1 - 1 / (0.55 * Math.abs(e4) / t4 + 1)) * t4)(u2)
                );
              },
              onPointerUp: eZ,
              onPointerCancel: eZ,
              onClick: (e3) => {
                ey.current && (e3.preventDefault(), ey.current = false);
              },
              children: e2
            }),
            (0, r.jsx)(O, { id: C2, edge: eV, text: e1 })
          ]
        }),
        (0, r.jsxs)("div", {
          ref: ea,
          className: x().control,
          "data-scrubbing": J || void 0,
          "data-disabled": y2 || void 0,
          "data-warn": eQ ? eQ > 0 ? "max" : "min" : void 0,
          children: [
            (0, r.jsx)(Y, {
              ...eJ(-1),
              iconRef: eu,
              onPress: () => eq(-1, z2, "button"),
              onRelease: eW,
              onActivate: () => {
                eK(), eL(-1, 1, "button");
              }
            }),
            (0, r.jsx)("div", {
              className: x().valueWrap,
              onMouseDown: (e3) => {
                e3.target !== em.current && e3.preventDefault();
              },
              onClick: (e3) => {
                y2 || e3.target === em.current || (em.current?.focus(), em.current?.select());
              },
              children: (0, r.jsxs)(u.PY1.span, {
                ref: ef,
                className: x().value,
                style: { x: eR, y: ew },
                children: [
                  (0, r.jsx)(D, {
                    text: R(g2, eG),
                    direction: eO,
                    className: x().affix
                  }),
                  (0, r.jsxs)("span", {
                    className: x().number,
                    children: [
                      (0, r.jsx)("span", {
                        className: x().display,
                        "data-hidden": K || void 0,
                        "aria-hidden": "true",
                        children: (0, r.jsx)(k, {
                          value: eG,
                          format: eT,
                          direction: eO,
                          instant: K
                        })
                      }),
                      K && (0, r.jsx)("span", {
                        className: x().mirror,
                        "aria-hidden": "true",
                        children: H
                      }),
                      (0, r.jsx)("input", {
                        ref: em,
                        id: I2,
                        className: x().input,
                        type: "text",
                        role: "spinbutton",
                        inputMode: c2 < 0 ? "text" : eM || eS ? "decimal" : "numeric",
                        autoComplete: "off",
                        spellCheck: false,
                        value: K ? H : eT.format(X2),
                        disabled: y2,
                        "aria-describedby": e5,
                        "aria-invalid": !!eQ || void 0,
                        "aria-valuenow": X2,
                        "aria-valuetext": eC(X2),
                        "aria-valuemin": Number.isFinite(c2) ? c2 : void 0,
                        "aria-valuemax": d2 < Number.MAX_SAFE_INTEGER ? d2 : void 0,
                        onChange: (e3) => {
                          var t3;
                          let n3, i3, r2;
                          return t3 = e3.currentTarget.value, n3 = RegExp(
                            `[^0-9${ek.group.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&")}${eM || eS ? ek.decimal.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&") : ""}${c2 < 0 ? "\\-" : ""}]`,
                            "g"
                          ), i3 = t3.replace(n3, ""), K || (eh.current = X2), eH(), B(i3), W(true), void (null !== (r2 = ez(i3)) && r2 >= c2 && r2 <= d2 && eI(r2) === r2 && eY(r2, "type"), eB(), null !== r2 && r2 < c2 && (eo.current = window.setTimeout(
                            () => er(true),
                            700
                          )));
                        },
                        onKeyDown: function(e3) {
                          let t3 = p2 ?? 10 * z2, n3 = {
                            ArrowUp: [1, e3.shiftKey ? t3 : z2],
                            ArrowDown: [-1, e3.shiftKey ? t3 : z2],
                            PageUp: [1, t3],
                            PageDown: [-1, t3]
                          }[e3.key];
                          if (n3) {
                            e3.preventDefault(), e3.repeat || eq(n3[0], n3[1], "key");
                            return;
                          }
                          if (!K && ("Home" === e3.key && Number.isFinite(c2) || "End" === e3.key && d2 < Number.MAX_SAFE_INTEGER)) {
                            e3.preventDefault(), eY("Home" === e3.key ? c2 : d2, "key");
                            return;
                          }
                          "Enter" === e3.key && (e3.preventDefault(), K ? (eg.current = true, eK()) : e3.currentTarget.select()), "Escape" === e3.key && K && (e3.preventDefault(), eH(), W(false), eB(), eg.current = true, eY(eh.current, "type"));
                        },
                        onKeyUp: (e3) => {
                          /^(Arrow(Up|Down)|Page(Up|Down))$/.test(e3.key) && eW();
                        },
                        onBlur: () => {
                          eW(), eK();
                        }
                      })
                    ]
                  }),
                  (0, r.jsx)(D, {
                    text: R(v2, eG),
                    direction: eO,
                    className: x().affix
                  })
                ]
              })
            }),
            (0, r.jsx)(Y, {
              ...eJ(1),
              iconRef: es,
              onPress: () => eq(1, z2, "button"),
              onRelease: eW,
              onActivate: () => {
                eK(), eL(1, 1, "button");
              }
            })
          ]
        }),
        (0, r.jsx)(U, { id: F2, text: h2, className: x().hint }),
        (0, r.jsx)("span", {
          className: x().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: V
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(55766, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => n });
  var a = r(51811);
  let i = {
    name: "zoom-in",
    size: 24,
    node: [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
      ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
    ]
  };
  i.node;
  let n = (0, a.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(71556, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => n });
  var a = r(51811);
  let i = {
    name: "arrow-down-right",
    size: 24,
    node: [
      ["path", { d: "m7 7 10 10", key: "1fmybs" }],
      ["path", { d: "M17 7v10H7", key: "6fjiku" }]
    ]
  };
  i.node;
  let n = (0, a.A)(i);
}

__m(__module,__exports,__require);
});
A.regCss(78684, ".field{--nf-height:var(--control-height-md);--nf-step:34px;--nf-inset:3px;--nf-text:var(--text-base);--nf-width:var(--number-field-width,196px);--nf-limit:color-mix(in oklab,var(--warning) 72%,var(--foreground));display:grid;min-width:0}\n.field[data-size=sm]{--nf-height:var(--control-height-sm);--nf-step:28px;--nf-inset:3px;--nf-text:var(--text-sm);--nf-width:var(--number-field-width,164px)}\n.field[data-size=lg]{--nf-height:var(--control-height-lg);--nf-step:40px;--nf-inset:4px;--nf-text:var(--text-lg);--nf-width:var(--number-field-width,228px)}\n:root[data-theme=dark] .field{--nf-limit:color-mix(in oklab,var(--warning) 88%,var(--foreground))}\n.field[data-size=sm] .label{font-size:var(--text-xs)}\n@media (hover:hover) and (pointer:fine){.control:hover,.field:has(.label[data-scrub]:hover) .control{border-color:var(--border-strong)}\n.head{display:flex;width:min(100%,var(--nf-width));align-items:baseline;justify-content:space-between;gap:var(--space-3);margin-bottom:var(--space-2)}\n.label{min-width:0;color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.label[data-scrub]{cursor:ew-resize;touch-action:pan-y;user-select:none;-webkit-user-select:none}\n.limit{flex:none;color:var(--nf-limit);font-size:var(--text-xs);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body);font-variant-numeric:tabular-nums;white-space:nowrap}\n.control{display:flex;align-items:center;width:min(100%,var(--nf-width));min-height:var(--nf-height);gap:2px;border:1px solid var(--border);border-radius:var(--radius-control);padding:var(--nf-inset);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.control[data-scrubbing]{border-color:var(--foreground)}\n.control:has(input:focus){border-color:var(--foreground)}\n.control[data-warn],.control[data-warn]:hover{border-color:color-mix(in oklab,var(--warning) 55%,var(--border));background:color-mix(in oklab,var(--warning) 5%,var(--surface))}\n.control[data-warn]:has(input:focus){border-color:color-mix(in oklab,var(--warning) 80%,var(--border))}\n.control[data-disabled]{opacity:.5;background:var(--surface-muted)}\n.control[data-strain=max] .step[aria-disabled=true]:last-child,.control[data-strain=min] .step[aria-disabled=true]:first-child{opacity:.6;color:var(--nf-limit);transition:opacity 60ms linear,color 60ms linear}\n.control[data-disabled] .valueWrap{cursor:not-allowed}\n@media (prefers-reduced-motion:reduce){.control,.step{transition:opacity var(--duration-instant) linear,border-color var(--duration-instant) linear,background-color var(--duration-instant) linear}\n.control[data-strain] .value{color:var(--nf-limit);transition:none}\n.step{display:grid;width:var(--nf-step);height:var(--nf-step);flex:0 0 var(--nf-step);place-items:center;border:0;border-radius:calc(var(--radius-control) - var(--nf-inset) - 1px);padding:0;background:transparent;color:var(--text-secondary);cursor:pointer;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),opacity var(--duration-standard) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.step:hover:not(:disabled,[aria-disabled=true]){background:var(--surface-muted);color:var(--foreground)}\n.step:is(:active,[data-pressed]):not(:disabled,[aria-disabled=true]){background:color-mix(in oklab,var(--foreground) 10%,var(--surface));color:var(--foreground);transition:background-color 60ms linear,color 60ms linear}\n.step:is(:active,[data-pressed]):not(:disabled,[aria-disabled=true]) svg{transform:scale(.82);transition:transform 90ms var(--ease-standard)}\n.step:focus-visible{outline:none;background:var(--surface-muted);color:var(--foreground)}\n.step[aria-disabled=true]{opacity:.32;cursor:not-allowed}\n.step:disabled{opacity:.35;cursor:not-allowed}\n.icon svg,.step:is(:active,[data-pressed]):not(:disabled,[aria-disabled=true]) svg{transform:none;transition:none}\n.icon{display:grid;place-items:center}\n.icon svg{transition:transform var(--duration-spring) var(--ease-spring)}\n.valueWrap{position:relative;display:flex;min-width:0;flex:1;align-self:stretch;align-items:center;justify-content:center;cursor:text}\n.value{display:inline-flex;align-items:center;white-space:nowrap;color:var(--foreground);font-size:var(--nf-text);transition:color var(--duration-standard) var(--ease-standard);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body);font-variant-numeric:tabular-nums}\n.affix{display:inline-flex;color:var(--text-secondary);font-weight:400}\n.char{display:inline-block;overflow-x:clip;white-space:pre}\n.number{position:relative;display:inline-grid;align-items:center}\n.display{display:inline-flex;grid-area:1/1}\n.display[data-hidden]{position:absolute;top:0;left:0;visibility:hidden}\n.mirror{grid-area:1/1;white-space:pre}\n.input{position:absolute;z-index:1;top:0;left:0;width:calc(100% + 1em);height:100%;margin:0;border:0;padding:0;background:transparent;color:transparent;caret-color:var(--foreground);font:inherit;font-variant-numeric:inherit;letter-spacing:inherit;line-height:inherit;text-align:left;outline:none}\n.input:focus-visible{outline:none}\n.input::selection{background:color-mix(in oklab,var(--foreground) 16%,transparent);color:transparent}\n.input:disabled{cursor:not-allowed}\n.column{--feather:.2em;position:relative;display:inline-block;overflow-x:visible;overflow-y:clip;margin-block:calc(var(--feather) * -1);padding-block:var(--feather);mask-image:linear-gradient(to bottom,transparent,#000 calc(var(--feather) * 1.5),#000 calc(100% - var(--feather) * 1.5),transparent);mask-repeat:repeat-x;mask-clip:no-clip}\n.sizer{visibility:hidden}\n.glyph{position:absolute;inset:var(--feather) 0;text-align:center}\n.symbol{display:inline-block;overflow-x:clip;white-space:pre}\n.messageSlot{display:block;overflow:hidden}\n.hint{display:block;padding-top:var(--space-2);color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);letter-spacing:var(--tracking-body);font-variant-numeric:tabular-nums}\n.words{position:relative;display:block}\n.wordSlot{position:relative;display:inline-block;vertical-align:top;white-space:pre}\n.wordSizer{position:absolute;top:0;left:0;visibility:hidden;white-space:pre}\n.word{display:inline-block;white-space:pre}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"field":"field","label":"label","control":"control","head":"head","limit":"limit","step":"step","valueWrap":"valueWrap","value":"value","icon":"icon","affix":"affix","char":"char","number":"number","display":"display","mirror":"mirror","input":"input","column":"column","sizer":"sizer","glyph":"glyph","symbol":"symbol","messageSlot":"messageSlot","hint":"hint","words":"words","wordSlot":"wordSlot","wordSizer":"wordSizer","word":"word","srOnly":"srOnly"});
A.reg(89959, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => n });
  var a = r(51811);
  let i = {
    name: "zoom-out",
    size: 24,
    node: [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
      ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
    ]
  };
  i.node;
  let n = (0, a.A)(i);
}

__m(__module,__exports,__require);
});
A.cssFor("market-terminal", [49144,78684]);
A.item("market-terminal", {entry:7709, export:"MarketTerminal", kind:"block", tier:"pro", unresolved:[]});
})();