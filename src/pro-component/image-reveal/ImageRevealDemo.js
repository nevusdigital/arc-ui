function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ImageRevealDemo: () => P, default: () => F });
  var i = a(95155), s = a(12115), r = a(92298), n = a(67752), l = a(51288), o = a(66558), d = a(18310), h = a(80642), c = a(25354), u = a(64577), m = a(35484);
  let g = (e2) => e2 < 0 ? 0 : e2 > 1 ? 1 : e2, p = (e2) => {
    let t2 = g(e2);
    return t2 * t2 * (3 - 2 * t2);
  }, v = (e2, t2) => `rgba(${0 | e2[0]}, ${0 | e2[1]}, ${0 | e2[2]}, ${t2})`;
  function f(e2, t2) {
    let a2 = document.createElement("canvas");
    return a2.width = Math.max(1, Math.round(e2)), a2.height = Math.max(1, Math.round(t2)), a2;
  }
  function w(e2) {
    let t2 = e2.getContext("2d");
    return t2.imageSmoothingEnabled = true, t2.imageSmoothingQuality = "high", t2;
  }
  function b(e2, t2, a2) {
    let i2 = f(t2, a2);
    return w(i2).drawImage(e2, 0, 0, i2.width, i2.height), i2;
  }
  let y = [6, 12, 24, 48, 96];
  class x {
    constructor(e2, t2) {
      this.cssWidth = 0, this.cssHeight = 0, this.dpr = 1, this.image = null, this.pending = null, this.chain = [], this.sharp = null, this.snapshot = null, this.palette = null, this.noiseStep = -1, this.noiseFrames = { previous: null, current: null }, this.noiseBlend = null, this.snapshotAlpha = 0, this.dirty = true, this.canvas = e2, this.ctx = w(e2), this.seed = t2;
    }
    get hasImage() {
      return null !== this.sharp;
    }
    get hasPending() {
      return null !== this.pending;
    }
    get ready() {
      return this.cssWidth > 0 && this.cssHeight > 0 && null !== this.palette;
    }
    setSeed(e2) {
      e2 !== this.seed && (this.seed = e2, this.resetNoise(), this.dirty = true);
    }
    resize(e2, t2, a2) {
      e2 === this.cssWidth && t2 === this.cssHeight && a2 === this.dpr || (this.cssWidth = e2, this.cssHeight = t2, this.dpr = a2, e2 && t2 && (this.canvas.width = Math.round(e2 * a2), this.canvas.height = Math.round(t2 * a2), this.ctx.imageSmoothingEnabled = true, this.ctx.imageSmoothingQuality = "high", this.snapshot = null, this.snapshotAlpha = 0, this.resetNoise(), this.image && this.buildLevels(), this.dirty = true));
    }
    setPalette(e2) {
      this.palette = e2, this.dirty = true;
    }
    setImage(e2) {
      if (e2 === this.image) {
        this.pending = null;
        return;
      }
      this.pending = e2;
    }
    swap(e2) {
      if (this.pending) {
        if (e2 && this.canvas.width && this.canvas.height) {
          if (!this.snapshot || this.snapshot.canvas.width !== this.canvas.width || this.snapshot.canvas.height !== this.canvas.height) {
            let e3 = f(this.canvas.width, this.canvas.height);
            this.snapshot = { canvas: e3, ctx: w(e3) };
          }
          this.snapshot.ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
          ), this.snapshot.ctx.drawImage(this.canvas, 0, 0), this.snapshotAlpha = 1;
        }
        this.image = this.pending, this.pending = null, this.buildLevels(), this.dirty = true;
      }
    }
    setNoiseStep(e2) {
      e2 !== this.noiseStep && this.cssWidth && this.cssHeight && (this.noiseStep = e2, this.noiseFrames = {
        previous: this.noiseFrames.current,
        current: this.buildNoise(e2)
      }, this.dirty = true);
    }
    resetNoise() {
      let e2 = this.noiseStep;
      this.noiseStep = -1, this.noiseFrames = { previous: null, current: null }, this.noiseBlend = null, e2 >= 0 && this.setNoiseStep(e2);
    }
    buildNoise(e2) {
      let t2, a2 = f(
        Math.max(12, Math.round(this.cssWidth / 6)),
        Math.max(12, Math.round(this.cssHeight / 6))
      ), i2 = a2.getContext("2d"), s2 = i2.createImageData(a2.width, a2.height), r2 = (t2 = 104729 * this.seed + 7919 * e2 + 3 >>> 0, () => {
        let e3 = Math.imul((t2 = t2 + 1831565813 >>> 0) ^ t2 >>> 15, 1 | t2);
        return (((e3 ^= e3 + Math.imul(e3 ^ e3 >>> 7, 61 | e3)) ^ e3 >>> 14) >>> 0) / 4294967296;
      }), n2 = () => r2() + r2() + r2() - 1.5;
      for (let e3 = 0; e3 < a2.width * a2.height; e3 += 1) {
        let t3 = 110 * n2();
        s2.data[4 * e3] = 128 + t3 + 80 * n2(), s2.data[4 * e3 + 1] = 126 + t3 + 70 * n2(), s2.data[4 * e3 + 2] = 130 + t3 + 86 * n2(), s2.data[4 * e3 + 3] = 255;
      }
      if (i2.putImageData(s2, 0, 0), !this.noiseBlend || this.noiseBlend.canvas.width !== a2.width || this.noiseBlend.canvas.height !== a2.height) {
        let e3 = f(a2.width, a2.height);
        this.noiseBlend = { canvas: e3, ctx: e3.getContext("2d") };
      }
      return a2;
    }
    buildLevels() {
      let e2 = this.image, t2 = this.canvas.width, a2 = this.canvas.height;
      if (!e2 || !t2 || !a2) return;
      let i2 = t2 / a2, s2 = e2.naturalWidth / e2.naturalHeight, r2 = e2.naturalWidth, n2 = e2.naturalHeight;
      s2 > i2 ? r2 = n2 * i2 : n2 = r2 / i2;
      let l2 = (e2.naturalWidth - r2) / 2, o2 = (e2.naturalHeight - n2) / 2, d2 = f(t2, a2);
      w(d2).drawImage(e2, l2, o2, r2, n2, 0, 0, t2, a2);
      let h2 = /* @__PURE__ */ new Map(), c2 = b(d2, Math.min(384, t2), Math.min(384, t2) / i2);
      for (h2.set(c2.width, c2); c2.width > y[0]; ) {
        let e3 = Math.max(y[0], Math.round(c2.width / 2));
        c2 = b(c2, e3, Math.max(2, Math.round(e3 / i2))), h2.set(c2.width, c2);
      }
      this.chain = y.map((e3, a3) => {
        let s3 = Math.min(a3 === y.length - 1 ? 384 : 192, t2);
        return (function(e4, t3, a4) {
          let i3 = e4;
          for (; 2 * i3.width < t3; ) i3 = b(i3, 2 * i3.width, 2 * i3.height);
          return b(i3, t3, a4);
        })(
          ((e4) => {
            let t3 = c2;
            for (let [a4, i3] of h2)
              Math.abs(a4 - e4) < Math.abs(t3.width - e4) && (t3 = i3);
            return t3;
          })(e3),
          s3,
          Math.max(2, Math.round(s3 / i2))
        );
      }), this.sharp = d2;
    }
    render(e2) {
      let { ctx: t2, palette: a2 } = this, i2 = this.canvas.width, s2 = this.canvas.height;
      if (!a2 || !i2 || !s2) return;
      this.dirty = false;
      let { time: r2, reduced: n2 } = e2, l2 = this.sharp ? g(e2.bloom) : 0;
      if (t2.globalCompositeOperation = "source-over", t2.globalAlpha = 1, t2.fillStyle = v(a2.base, 1), t2.fillRect(0, 0, i2, s2), e2.shimmer > 2e-3 && l2 < 0.999) {
        let o2 = p(
          (n2 ? 0.42 : ((r2 + 0.14 * this.seed) % 2.6 + 2.6) % 2.6 / 2.6) / 0.82
        ), d2 = i2 + s2, h2 = -0.45 * d2 + 1.9 * o2 * d2, c2 = 0.42 * d2, u2 = t2.createLinearGradient(
          h2 - c2,
          0.35 * h2 - 0.35 * c2,
          h2 + c2,
          0.35 * h2 + 0.35 * c2
        ), m2 = e2.shimmer * (1 - l2) * (n2 ? 0.5 : 1);
        u2.addColorStop(0, v(a2.highlight, 0)), u2.addColorStop(0.5, v(a2.highlight, m2)), u2.addColorStop(1, v(a2.highlight, 0)), t2.fillStyle = u2, t2.fillRect(0, 0, i2, s2);
      }
      if (l2 > 2e-3 && this.sharp && this.chain.length) {
        let a3 = this.chain, r3 = g(e2.detail) * (a3.length - 1), o2 = Math.min(a3.length - 1, Math.floor(r3)), d2 = Math.min(a3.length - 1, o2 + 1), h2 = r3 - o2;
        t2.globalAlpha = l2, t2.drawImage(a3[o2], 0, 0, i2, s2), d2 !== o2 && h2 > 2e-3 && (t2.globalAlpha = l2 * h2, t2.drawImage(a3[d2], 0, 0, i2, s2));
        let c2 = g(e2.noise) * l2, { previous: u2, current: m2 } = this.noiseFrames;
        if (c2 > 3e-3 && m2 && this.noiseBlend) {
          let a4 = this.noiseBlend, r4 = u2 ? g(e2.noiseMix) : 1;
          a4.ctx.globalAlpha = 1, a4.ctx.drawImage(u2 && r4 < 0.999 ? u2 : m2, 0, 0), u2 && r4 < 0.999 && (a4.ctx.globalAlpha = r4, a4.ctx.drawImage(m2, 0, 0)), t2.imageSmoothingEnabled = false, t2.globalAlpha = c2, t2.drawImage(a4.canvas, 0, 0, i2, s2), t2.imageSmoothingEnabled = true;
        }
        let v2 = l2 * (1 - g(e2.hide)), f2 = g(e2.decode);
        if (v2 > 2e-3 && f2 > 2e-3)
          if (n2 || f2 >= 0.999)
            t2.globalAlpha = v2 * (n2 ? p(f2) : 1), t2.drawImage(this.sharp, 0, 0);
          else {
            let e3 = this.cssWidth >= 320 ? 4 : 3, a4 = Math.max(2, Math.round(e3 * this.cssHeight / this.cssWidth)), r4 = e3 * a4, n3 = f2 * (r4 + 2.2);
            for (let l3 = 0; l3 < r4 && l3 < n3; l3 += 1) {
              let r5 = p((n3 - l3) / 2.2);
              if (r5 <= 2e-3) continue;
              let o3 = l3 % e3, d3 = Math.floor(l3 / e3), h3 = Math.round(o3 / e3 * i2), c3 = Math.round(d3 / a4 * s2), u3 = Math.round((o3 + 1) / e3 * i2) - h3, m3 = Math.round((d3 + 1) / a4 * s2) - c3;
              t2.globalAlpha = v2 * r5, t2.drawImage(this.sharp, h3, c3, u3, m3, h3, c3, u3, m3);
            }
          }
        t2.globalAlpha = 1;
      }
      if (e2.sheen >= 0 && e2.sheen < 1 && !n2 && l2 > 0.5) {
        let a3 = p(e2.sheen), r3 = i2 + s2, n3 = -0.3 * r3 + 1.6 * a3 * r3, l3 = 0.2 * r3, o2 = t2.createLinearGradient(
          n3 - l3,
          (n3 - l3) * 0.5,
          n3 + l3,
          (n3 + l3) * 0.5
        ), d2 = 0.42 * Math.sin(Math.PI * e2.sheen);
        o2.addColorStop(0, "rgba(255, 255, 255, 0)"), o2.addColorStop(0.5, `rgba(255, 255, 255, ${d2})`), o2.addColorStop(1, "rgba(255, 255, 255, 0)"), t2.globalCompositeOperation = "soft-light", t2.fillStyle = o2, t2.fillRect(0, 0, i2, s2), t2.globalCompositeOperation = "source-over";
      }
      this.snapshot && this.snapshotAlpha > 2e-3 && (t2.globalAlpha = this.snapshotAlpha, t2.drawImage(this.snapshot.canvas, 0, 0), t2.globalAlpha = 1), e2.error > 2e-3 && (t2.globalCompositeOperation = "saturation", t2.globalAlpha = 0.9 * e2.error, t2.fillStyle = "rgb(128, 128, 128)", t2.fillRect(0, 0, i2, s2), t2.globalCompositeOperation = "source-over", t2.globalAlpha = 0.72 * e2.error, t2.fillStyle = v(a2.veil, 1), t2.fillRect(0, 0, i2, s2)), t2.globalCompositeOperation = "source-over", t2.globalAlpha = 1;
    }
    dispose() {
      this.chain = [], this.sharp = null, this.image = null, this.pending = null, this.snapshot = null, this.noiseFrames = { previous: null, current: null }, this.noiseBlend = null;
    }
  }
  let _ = null;
  function j(e2, t2) {
    e2.style.color = "", e2.style.color = t2;
    var a2 = getComputedStyle(e2).color;
    if (!(_ ?? (_ = f(1, 1).getContext("2d", { willReadFrequently: true }))))
      return [128, 128, 128];
    _.clearRect(0, 0, 1, 1), _.fillStyle = "#808080", _.fillStyle = a2, _.fillRect(0, 0, 1, 1);
    let i2 = _.getImageData(0, 0, 1, 1).data;
    return [i2[0], i2[1], i2[2]];
  }
  var k = a(63594), M = a.n(k);
  let A = [
    "alpine-lake",
    "terracotta-waves",
    "ceramic-lamp",
    "sea-at-dusk",
    "lisbon-rooftops"
  ], S = 2 * Math.PI * 8, N = { type: "spring", visualDuration: 0.24, bounce: 0 }, C = { duration: 0.16, ease: [0.22, 1, 0.36, 1] }, $ = { ...C, delay: 0.06 }, L = { duration: 0.1, ease: [0.4, 0, 1, 1] };
  function R(e2, t2, a2, i2, s2 = 8e-4) {
    let r2 = e2 + (t2 - e2) * (1 - Math.exp(-a2 / i2));
    return Math.abs(t2 - r2) < s2 ? t2 : r2;
  }
  function I(e2) {
    return `${e2.toFixed(1)}s`;
  }
  function W({
    src: e2,
    alt: t2,
    status: a2,
    progress: o2,
    duration: g2 = 4600,
    decodeDuration: p2 = 560,
    steps: v2 = 30,
    aspectRatio: f2 = 1,
    size: w2 = "md",
    color: b2,
    showProgress: y2 = true,
    sheen: _2 = true,
    queueLabel: k2 = "Queued",
    errorMessage: E2 = "Generation failed",
    autoPlay: q2 = true,
    loop: D2 = true,
    startDelay: T2 = 0,
    queueDuration: P2 = 900,
    holdDuration: F2 = 2600,
    runKey: z,
    seed: B = 1,
    onStatusChange: O,
    onComplete: H,
    onRetry: Y,
    className: G,
    style: K
  }) {
    let Q = (0, d.I)() ?? false, U = void 0 === a2, [V, X] = (0, s.useState)("queued"), [J, Z] = (0, s.useState)(0), [ee, et] = (0, s.useState)(0), [ea, ei] = (0, s.useState)(false), [es, er] = (0, s.useState)(0), [en, el] = (0, s.useState)(), eo = U ? V : a2, ed = (0, n.jW)(A[J % A.length]), eh = e2 ?? ed.src, ec = t2 ?? (e2 ? "Generated image" : ed.alt), eu = (0, s.useRef)(null), em = (0, s.useRef)(null), eg = (0, s.useRef)(null), ep = (0, s.useRef)(null), ev = (0, s.useRef)(null), ef = (0, s.useRef)({
      current: eo,
      auto: U,
      progress: o2,
      duration: g2,
      decodeDuration: p2,
      steps: v2,
      autoPlay: q2,
      loop: D2,
      startDelay: T2,
      queueDuration: P2,
      holdDuration: F2,
      runKey: z,
      reduced: Q,
      sheen: _2,
      hasSrc: void 0 !== e2,
      onComplete: H
    });
    (0, s.useLayoutEffect)(() => {
      ef.current = {
        current: eo,
        auto: U,
        progress: o2,
        duration: g2,
        decodeDuration: p2,
        steps: v2,
        autoPlay: q2,
        loop: D2,
        startDelay: T2,
        queueDuration: P2,
        holdDuration: F2,
        runKey: z,
        reduced: Q,
        sheen: _2,
        hasSrc: void 0 !== e2,
        onComplete: H
      };
    }), (0, s.useEffect)(() => {
      let e3 = eu.current, t3 = em.current;
      if (!e3 || !t3) return;
      let a3 = new x(t3, B);
      ev.current = a3;
      let i2 = {
        bloom: 0,
        shown: 0,
        detail: 0,
        noise: 1,
        noiseMix: 1,
        decode: 0,
        hide: 0,
        shimmer: 1,
        error: 0,
        time: 0,
        speed: 1,
        sheen: -1,
        generated: 0,
        elapsed: 0,
        lastStatus: ef.current.current,
        phase: "wait",
        phaseTime: 0,
        runKey: ef.current.runKey,
        wasAuto: ef.current.auto,
        firstRun: true,
        completed: false,
        doneTime: 0,
        settled: false,
        step: 0,
        drawn: ""
      }, s2 = () => {
        i2.phase = "wait", i2.phaseTime = i2.firstRun ? 0 : ef.current.startDelay, X("queued");
      }, r2 = 0, n2 = 0, l2 = true, o3 = (e4) => {
        let t4 = n2 ? Math.min(0.05, (e4 - n2) / 1e3) : 1 / 60;
        n2 = e4, ((e5) => {
          let t5, r3 = ef.current;
          ((t5 = ef.current).runKey !== i2.runKey || t5.auto && !i2.wasAuto) && (i2.runKey = t5.runKey, i2.firstRun = true, s2()), i2.wasAuto = t5.auto, t5.auto && t5.autoPlay && (i2.phaseTime += 1e3 * e5, "wait" === i2.phase && i2.phaseTime >= t5.startDelay + t5.queueDuration && a3.hasImage && !a3.hasPending && i2.bloom < 0.02 ? (i2.phase = "generating", i2.phaseTime = 0, i2.generated = 0, X("generating")) : "generating" === i2.phase && i2.generated >= t5.duration && i2.shown > 0.995 ? (i2.phase = "decoding", i2.phaseTime = 0, X("decoding")) : "decoding" === i2.phase && i2.decode >= 1 ? (i2.phase = "hold", i2.phaseTime = 0, X("done")) : "hold" === i2.phase && t5.loop && i2.completed && i2.phaseTime >= t5.holdDuration && (i2.firstRun = false, s2(), t5.hasSrc || Z((e6) => e6 + 1)));
          let n3 = r3.current;
          n3 !== i2.lastStatus && ("generating" === n3 && "decoding" !== i2.lastStatus && (i2.generated = 0, i2.elapsed = 0), "done" !== n3 && (i2.completed = false), i2.lastStatus = n3);
          let l3 = "decoding" === n3 || "done" === n3, o4 = i2.shown;
          "queued" === n3 ? o4 = 0 : "generating" === n3 ? void 0 !== r3.progress ? o4 = Math.min(1, Math.max(0, r3.progress)) : (i2.generated += 1e3 * e5, o4 = Math.min(1, i2.generated / r3.duration)) : l3 && (o4 = 1), ("generating" === n3 || "decoding" === n3) && (i2.elapsed += e5);
          let d3 = a3.hasPending && a3.hasImage, h3 = o4 < i2.shown - 0.02;
          i2.hide = R(
            i2.hide,
            h3 || d3 || "error" === n3 ? 1 : 0,
            e5,
            r3.reduced ? 0.08 : "error" === n3 ? 0.2 : 0.1,
            4e-3
          ), i2.hide > 0.97 && (a3.hasPending && a3.swap(i2.bloom > 0.02), h3 && (i2.shown = o4)), a3.hasPending && !a3.hasImage && a3.swap(false), h3 || (i2.shown = r3.auto && "generating" === n3 ? o4 : R(i2.shown, o4, e5, r3.reduced ? 0.12 : 0.16));
          let c3 = l3 ? r3.steps : "queued" === n3 ? 0 : Math.min(
            r3.steps,
            Math.max(1, Math.ceil(i2.shown * r3.steps - 1e-3))
          );
          c3 !== i2.step && (i2.step = c3, et(c3), c3 > 0 && !r3.reduced && (a3.setNoiseStep(c3), i2.noiseMix = 0)), r3.reduced && a3.setNoiseStep(1);
          let u3 = r3.steps > 0 ? i2.step / r3.steps : 0, m3 = "generating" === n3 || l3 || "error" === n3, g3 = a3.hasImage && m3 ? 1 : 0;
          (i2.bloom = R(
            i2.bloom,
            g3,
            e5,
            "queued" === n3 ? 0.16 : 0.12,
            2e-3
          ), i2.detail = R(
            i2.detail,
            "queued" === n3 ? 0 : l3 ? 1 : Math.pow(u3, 0.55),
            e5,
            "queued" === n3 ? 0.2 : 0.07,
            1e-3
          ), "queued" === n3) ? i2.noise = i2.bloom < 0.02 ? 1 : i2.noise : i2.noise = R(
            i2.noise,
            l3 ? 0 : Math.pow(1 - u3, 1.6),
            e5,
            0.06,
            1e-3
          ), i2.noiseMix = R(i2.noiseMix, 1, e5, 0.035, 2e-3), l3 && i2.noise < 0.05 && i2.hide < 0.05 ? i2.decode = Math.min(
            1,
            i2.decode + e5 / Math.max(0.05, r3.decodeDuration / 1e3)
          ) : l3 || (i2.decode = R(i2.decode, 0, e5, 0.1, 2e-3)), i2.shimmer = R(
            i2.shimmer,
            +("queued" === n3 || !a3.hasImage),
            e5,
            0.3,
            2e-3
          ), i2.error = R(i2.error, +("error" === n3), e5, 0.14, 2e-3), a3.snapshotAlpha = R(a3.snapshotAlpha, 0, e5, 0.16, 3e-3);
          let p3 = r3.reduced || "error" === n3 ? 0 : 1;
          i2.speed = R(i2.speed, p3, e5, 0.4, 2e-3), i2.time += e5 * i2.speed;
          let v3 = "done" === n3 && i2.decode >= 1 && 0 === i2.hide && a3.hasImage && !a3.hasPending;
          v3 && !i2.completed && (i2.completed = true, i2.sheen = r3.sheen && !r3.reduced ? 0 : -1, er(i2.elapsed), r3.onComplete?.()), i2.sheen >= 0 && (i2.sheen += e5 / 1.1, (i2.sheen >= 1 || !v3) && (i2.sheen = -1));
          let f3 = i2.speed > 0.01 && i2.shimmer > 2e-3 && i2.bloom < 0.999, w3 = `${i2.bloom}|${i2.detail}|${i2.noise}|${i2.noiseMix}|${i2.decode}|${i2.hide}|${i2.shimmer}|${i2.error}|${i2.sheen}|${a3.snapshotAlpha}|${r3.reduced}`;
          a3.ready && (a3.dirty || f3 || w3 !== i2.drawn) && (a3.render({
            bloom: i2.bloom,
            detail: i2.detail,
            noise: i2.noise,
            noiseMix: i2.noiseMix,
            decode: i2.decode,
            hide: i2.hide,
            shimmer: i2.shimmer,
            time: i2.time,
            sheen: i2.sheen,
            error: i2.error,
            reduced: r3.reduced
          }), i2.drawn = w3), ep.current && (ep.current.style.strokeDashoffset = String(
            S * (1 - i2.shown)
          )), i2.doneTime = v3 ? i2.doneTime + e5 : 0;
          let b3 = i2.doneTime > 1.6;
          b3 !== i2.settled && (i2.settled = b3, ei(b3));
        })(t4), r2 = requestAnimationFrame(o3);
      }, d2 = () => {
        r2 || !l2 || document.hidden || (n2 = 0, r2 = requestAnimationFrame(o3));
      }, h2 = () => {
        cancelAnimationFrame(r2), r2 = 0;
      }, c2 = new ResizeObserver((e4) => {
        let t4 = e4[0]?.contentRect;
        t4 && a3.resize(
          Math.round(t4.width),
          Math.round(t4.height),
          Math.min(2, window.devicePixelRatio || 1)
        );
      });
      c2.observe(e3);
      let u2 = new IntersectionObserver((e4) => {
        (l2 = e4[0]?.isIntersecting ?? true) ? d2() : h2();
      });
      u2.observe(e3);
      let m2 = () => document.hidden ? h2() : d2();
      return document.addEventListener("visibilitychange", m2), d2(), () => {
        h2(), c2.disconnect(), u2.disconnect(), document.removeEventListener("visibilitychange", m2), a3.dispose(), ev.current = null;
      };
    }, []), (0, s.useEffect)(() => {
      ev.current?.setSeed(B);
    }, [B]), (0, s.useEffect)(() => {
      let e3 = eg.current;
      if (!e3) return;
      let t3 = () => {
        let t4, a4, i3, s2, r2, n2;
        return ev.current?.setPalette(
          (t4 = j(e3, "var(--surface-muted, #eee)"), a4 = j(e3, "var(--surface, var(--background, #fff))"), i3 = (0.2126 * t4[0] + 0.7152 * t4[1] + 0.0722 * t4[2]) / 255, s2 = [255, 255, 255], r2 = i3 > 0.5 ? 0.6 : 0.06, n2 = [
            t4[0] + (s2[0] - t4[0]) * r2,
            t4[1] + (s2[1] - t4[1]) * r2,
            t4[2] + (s2[2] - t4[2]) * r2
          ], { base: t4, highlight: n2, veil: a4 })
        );
      };
      t3();
      let a3 = new MutationObserver(t3);
      a3.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class", "data-theme", "style"]
      });
      let i2 = window.matchMedia("(prefers-color-scheme: dark)");
      return i2.addEventListener("change", t3), () => {
        a3.disconnect(), i2.removeEventListener("change", t3);
      };
    }, []), (0, s.useEffect)(() => {
      let e3 = false, t3 = new Image();
      return t3.decoding = "async", t3.src = eh, t3.decode().catch(() => void 0).then(() => {
        !e3 && t3.naturalWidth && ev.current?.setImage(t3);
      }), () => {
        e3 = true;
      };
    }, [eh]);
    let ew = (0, s.useRef)(eo);
    (0, s.useEffect)(() => {
      ew.current !== eo && (ew.current = eo, O?.(eo));
    }, [eo, O]);
    let eb = (0, s.useRef)(null), ey = (0, s.useCallback)((e3) => {
      if (eb.current?.disconnect(), eb.current = null, !e3) return;
      let t3 = new ResizeObserver(() => el(e3.offsetWidth + 2));
      t3.observe(e3), eb.current = t3;
    }, []), ex = "sm" === w2, e_ = y2 && "error" !== eo && !("done" === eo && ea), ej = U ? ", simulated" : "", ek = "queued" === eo ? k2 : "generating" === eo ? "Generating image" : "decoding" === eo ? "Decoding image" : "done" === eo ? "Image ready" : E2, eM = es > 0.05 ? ex ? I(es) : `Done in ${I(es)}` : "Done", eA = "done" === eo ? ec : `${ek}${ec ? `: ${ec}` : ""}`, eS = (e3) => Q ? { duration: 0.12 } : e3 ? $ : L, eN = {
      initial: { opacity: 0, y: 2 },
      animate: { opacity: 1, y: 0, transition: eS(true) },
      exit: { opacity: 0, y: -2, transition: eS(false) }
    };
    return (0, i.jsxs)("div", {
      ref: eu,
      className: [M().root, M()[w2], G].filter(Boolean).join(" "),
      style: {
        aspectRatio: "number" == typeof f2 ? String(f2) : f2,
        ...b2 ? { "--ir-accent": b2 } : null,
        ...K
      },
      "data-status": eo,
      children: [
        (0, i.jsx)("canvas", {
          ref: em,
          className: M().canvas,
          role: "img",
          "aria-label": eA
        }),
        (0, i.jsx)("span", {
          ref: eg,
          className: M().probe,
          "aria-hidden": "true"
        }),
        (0, i.jsx)(h.N, {
          initial: false,
          children: e_ ? (0, i.jsx)(
            c.PY1.div,
            {
              className: M().chip,
              initial: { opacity: 0, y: 2 },
              animate: { opacity: 1, y: 0, width: en },
              exit: {
                opacity: 0,
                y: 2,
                transition: Q ? { duration: 0.12 } : { duration: 0.22, ease: [0.4, 0, 1, 1] }
              },
              transition: Q ? { duration: 0 } : { opacity: C, y: C, width: N },
              children: (0, i.jsx)("span", {
                ref: ey,
                className: M().chipContent,
                children: (0, i.jsx)(h.N, {
                  mode: "popLayout",
                  initial: false,
                  children: "queued" === eo ? (0, i.jsxs)(
                    c.PY1.span,
                    {
                      className: M().phase,
                      ...eN,
                      children: [
                        (0, i.jsxs)("svg", {
                          className: `${M().ring} ${M().spin}`,
                          viewBox: "0 0 20 20",
                          "aria-hidden": "true",
                          children: [
                            (0, i.jsx)("circle", {
                              className: M().ringTrack,
                              cx: "10",
                              cy: "10",
                              r: 8,
                              fill: "none",
                              strokeWidth: "2.5"
                            }),
                            (0, i.jsx)("circle", {
                              className: M().ringArc,
                              cx: "10",
                              cy: "10",
                              r: 8,
                              fill: "none",
                              strokeWidth: "2.5",
                              strokeDasharray: `${0.22 * S} ${S}`
                            })
                          ]
                        }),
                        (0, i.jsx)("span", {
                          className: M().text,
                          children: k2
                        })
                      ]
                    },
                    "queued"
                  ) : "generating" === eo ? (0, i.jsxs)(
                    c.PY1.span,
                    {
                      className: M().phase,
                      role: "progressbar",
                      "aria-label": "Generation progress",
                      "aria-valuemin": 0,
                      "aria-valuemax": v2,
                      "aria-valuenow": ee,
                      "aria-valuetext": `Step ${ee} of ${v2}`,
                      ...eN,
                      children: [
                        (0, i.jsxs)("svg", {
                          className: M().ring,
                          viewBox: "0 0 20 20",
                          "aria-hidden": "true",
                          children: [
                            (0, i.jsx)("circle", {
                              className: M().ringTrack,
                              cx: "10",
                              cy: "10",
                              r: 8,
                              fill: "none",
                              strokeWidth: "2.5"
                            }),
                            (0, i.jsx)("circle", {
                              ref: ep,
                              className: M().ringArc,
                              cx: "10",
                              cy: "10",
                              r: 8,
                              fill: "none",
                              strokeWidth: "2.5",
                              strokeDasharray: S,
                              strokeDashoffset: S
                            })
                          ]
                        }),
                        ex ? null : (0, i.jsx)("span", {
                          className: M().text,
                          children: "Denoising"
                        }),
                        (0, i.jsxs)("span", {
                          className: `${M().reserve} ${ex ? "" : M().count}`,
                          children: [
                            (0, i.jsx)("span", {
                              className: M().ghost,
                              "aria-hidden": "true",
                              children: `${v2} / ${v2}`
                            }),
                            (0, i.jsx)("span", {
                              children: `${ee} / ${v2}`
                            })
                          ]
                        })
                      ]
                    },
                    "generating"
                  ) : "decoding" === eo ? (0, i.jsxs)(
                    c.PY1.span,
                    {
                      className: M().phase,
                      ...eN,
                      children: [
                        (0, i.jsxs)("svg", {
                          className: `${M().ring} ${M().spin}`,
                          viewBox: "0 0 20 20",
                          "aria-hidden": "true",
                          children: [
                            (0, i.jsx)("circle", {
                              className: M().ringTrack,
                              cx: "10",
                              cy: "10",
                              r: 8,
                              fill: "none",
                              strokeWidth: "2.5"
                            }),
                            (0, i.jsx)("circle", {
                              className: M().ringArc,
                              cx: "10",
                              cy: "10",
                              r: 8,
                              fill: "none",
                              strokeWidth: "2.5",
                              strokeDasharray: `${0.3 * S} ${S}`
                            })
                          ]
                        }),
                        (0, i.jsx)("span", {
                          className: M().text,
                          children: "Decoding"
                        })
                      ]
                    },
                    "decoding"
                  ) : (0, i.jsxs)(
                    c.PY1.span,
                    {
                      className: M().phase,
                      ...eN,
                      children: [
                        (0, i.jsx)(u.A, {
                          className: M().doneIcon,
                          "aria-hidden": "true",
                          strokeWidth: 2.25
                        }),
                        (0, i.jsx)("span", {
                          className: M().text,
                          children: eM
                        })
                      ]
                    },
                    "done"
                  )
                })
              })
            },
            "chip"
          ) : null
        }),
        (0, i.jsx)(h.N, {
          initial: false,
          children: "error" === eo ? (0, i.jsx)(
            c.PY1.div,
            {
              className: M().errorLayer,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: Q ? { duration: 0.12 } : { duration: 0.2 },
              children: (0, i.jsxs)(c.PY1.div, {
                className: M().errorBody,
                initial: !Q && { y: 3 },
                animate: { y: 0 },
                transition: Q ? { duration: 0 } : N,
                children: [
                  (0, i.jsxs)("span", {
                    className: M().errorTitle,
                    children: [
                      (0, i.jsx)(m.A, {
                        className: M().errorIcon,
                        "aria-hidden": "true",
                        strokeWidth: 2
                      }),
                      (0, i.jsx)("span", { children: ex ? "Failed" : E2 })
                    ]
                  }),
                  Y ? (0, i.jsxs)(l.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: Y,
                    "aria-label": ex ? "Retry generation" : void 0,
                    children: [
                      (0, i.jsx)(r.A, { "aria-hidden": "true" }),
                      "Retry"
                    ]
                  }) : null
                ]
              })
            },
            "error"
          ) : null
        }),
        (0, i.jsx)("span", {
          className: M().srOnly,
          role: "status",
          "aria-live": "polite",
          children: `${ek}${ej}`
        })
      ]
    });
  }
  var E = a(70673), q = a.n(E);
  let D = [
    {
      prompt: "Quiet landscapes at golden hour",
      photos: ["alpine-lake", "mountain-ridges", "sea-at-dusk", "coastline"]
    },
    {
      prompt: "Warm ceramics in soft window light",
      photos: [
        "ceramic-lamp",
        "stoneware-cups",
        "glass-carafe",
        "lounge-chair"
      ]
    },
    {
      prompt: "Sunlit architecture, Lisbon and beyond",
      photos: [
        "terracotta-waves",
        "lisbon-rooftops",
        "curved-facade",
        "living-room"
      ]
    }
  ], T = [
    { value: "live", label: "Live" },
    { value: "queued", label: "Queued" },
    { value: "done", label: "Done" },
    { value: "error", label: "Error" }
  ];
  function P() {
    let [e2, t2] = (0, s.useState)("live"), [a2, d2] = (0, s.useState)(0), [h2, c2] = (0, s.useState)([]), u2 = (0, s.useRef)(/* @__PURE__ */ new Set()), m2 = (0, s.useRef)(void 0), g2 = D[a2 % D.length], p2 = 48213 + 7351 * a2, v2 = (0, s.useCallback)(() => {
      clearTimeout(m2.current), u2.current.clear(), c2([]), t2("live"), d2((e3) => e3 + 1);
    }, []);
    return (0, s.useEffect)(() => () => clearTimeout(m2.current), []), (0, i.jsxs)("div", {
      className: q().demo,
      children: [
        (0, i.jsxs)("div", {
          className: q().header,
          children: [
            (0, i.jsxs)("div", {
              className: q().copy,
              children: [
                (0, i.jsx)("p", {
                  className: q().prompt,
                  children: g2.prompt
                }),
                (0, i.jsx)("p", {
                  className: q().meta,
                  children: `Seed ${p2}, 30 steps, batch of 4. Simulated.`
                })
              ]
            }),
            (0, i.jsxs)(l.$, {
              variant: "secondary",
              size: "sm",
              onClick: v2,
              children: [
                (0, i.jsx)(r.A, { "aria-hidden": "true" }),
                "Generate again"
              ]
            })
          ]
        }),
        (0, i.jsx)("div", {
          className: q().grid,
          children: g2.photos.map((t3, s2) => {
            let r2 = (0, n.jW)(t3);
            return (0, i.jsx)(
              W,
              {
                className: q().tile,
                src: r2.src,
                alt: r2.alt,
                size: "sm",
                seed: p2 + s2,
                status: "queued" === e2 ? "queued" : "done" === e2 ? "done" : "error" === e2 ? s2 % 2 != 1 || h2.includes(s2) ? h2.includes(s2) ? void 0 : "done" : "error" : void 0,
                runKey: a2,
                loop: false,
                queueDuration: 650,
                duration: 4200,
                queueLabel: "queued" === e2 ? "Queued, 2 ahead" : "Queued",
                onComplete: () => {
                  "live" === e2 && (u2.current.add(s2), u2.current.size === g2.photos.length && (clearTimeout(m2.current), m2.current = setTimeout(v2, 3200)));
                },
                onRetry: () => c2((e3) => [...e3, s2])
              },
              s2
            );
          })
        }),
        (0, i.jsx)("div", {
          className: q().footer,
          children: (0, i.jsx)(o.A, {
            label: "Generation state",
            options: T,
            value: e2,
            onValueChange: (e3) => {
              clearTimeout(m2.current), u2.current.clear(), c2([]), t2(e3);
            }
          })
        })
      ]
    });
  }
  let F = P;
}

__m(__module,__exports,__require);
}