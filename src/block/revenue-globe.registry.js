/* revenue-globe (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(1883, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { q: () => s });
  let s = (e2, t2, i2) => Math.min(i2, Math.max(t2, e2));
}

__m(__module,__exports,__require);
});
A.reg(40742, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { RevenueGlobe: () => ex, default: () => eM });
  var s = i(95155), a = i(12115), r = i(28245), n = i(55809), l = i(92171), o = i(25354), h = i(22535), c = i(80642), u = i(92298), d = i(36619), m = i(79267), p = i(7770);
  let f = [
    { id: "americas", name: "Americas" },
    { id: "emea", name: "EMEA" },
    { id: "apac", name: "APAC" }
  ], v = (e2, t2, i2, s2, a2, r2, n2) => ({
    name: e2,
    country: t2,
    lat: i2,
    lon: s2,
    tz: a2,
    region: r2,
    weight: n2
  }), y = [
    v("San Francisco", "US", 37.77, -122.42, -7, 0, 6),
    v("New York", "US", 40.71, -74.01, -4, 0, 9),
    v("Toronto", "CA", 43.65, -79.38, -4, 0, 3.5),
    v("Chicago", "US", 41.88, -87.63, -5, 0, 4),
    v("Austin", "US", 30.27, -97.74, -5, 0, 3),
    v("Seattle", "US", 47.61, -122.33, -7, 0, 3.5),
    v("Los Angeles", "US", 34.05, -118.24, -7, 0, 5),
    v("Miami", "US", 25.76, -80.19, -4, 0, 2.2),
    v("Mexico City", "MX", 19.43, -99.13, -6, 0, 2.5),
    v("Bogot\xE1", "CO", 4.71, -74.07, -5, 0, 1.2),
    v("Lima", "PE", -12.05, -77.04, -5, 0, 1),
    v("S\xE3o Paulo", "BR", -23.55, -46.63, -3, 0, 4),
    v("Buenos Aires", "AR", -34.6, -58.38, -3, 0, 1.6),
    v("Santiago", "CL", -33.45, -70.67, -3, 0, 1.2),
    v("London", "GB", 51.51, -0.13, 1, 1, 7),
    v("Dublin", "IE", 53.35, -6.26, 1, 1, 1.8),
    v("Paris", "FR", 48.86, 2.35, 2, 1, 4),
    v("Berlin", "DE", 52.52, 13.4, 2, 1, 4),
    v("Amsterdam", "NL", 52.37, 4.9, 2, 1, 2.8),
    v("Stockholm", "SE", 59.33, 18.07, 2, 1, 2),
    v("Madrid", "ES", 40.42, -3.7, 2, 1, 2.2),
    v("Milan", "IT", 45.46, 9.19, 2, 1, 2),
    v("Istanbul", "TR", 41.01, 28.98, 3, 1, 1.6),
    v("Tel Aviv", "IL", 32.09, 34.78, 3, 1, 2),
    v("Dubai", "AE", 25.2, 55.27, 4, 1, 2),
    v("Lagos", "NG", 6.52, 3.38, 1, 1, 1.2),
    v("Nairobi", "KE", -1.29, 36.82, 3, 1, 0.9),
    v("Cape Town", "ZA", -33.92, 18.42, 2, 1, 1),
    v("Tokyo", "JP", 35.68, 139.69, 9, 2, 5),
    v("Seoul", "KR", 37.57, 126.98, 9, 2, 3),
    v("Shanghai", "CN", 31.23, 121.47, 8, 2, 2.5),
    v("Hong Kong", "HK", 22.32, 114.17, 8, 2, 2.2),
    v("Singapore", "SG", 1.35, 103.82, 8, 2, 3),
    v("Bengaluru", "IN", 12.97, 77.59, 5.5, 2, 3),
    v("Mumbai", "IN", 19.08, 72.88, 5.5, 2, 2.2),
    v("Jakarta", "ID", -6.21, 106.85, 7, 2, 1.6),
    v("Manila", "PH", 14.6, 120.98, 8, 2, 1.2),
    v("Sydney", "AU", -33.87, 151.21, 10, 2, 3.5),
    v("Melbourne", "AU", -37.81, 144.96, 10, 2, 2.2),
    v("Auckland", "NZ", -36.85, 174.76, 12, 2, 1)
  ], g = y.length, b = [
    { name: "Plus monthly", amount: 8, weight: 45 },
    { name: "Pro monthly", amount: 16, weight: 25 },
    { name: "Seat added", amount: 12, weight: 16 },
    { name: "Usage top-up", amount: 20, weight: 8 },
    { name: "Plus annual", amount: 84, weight: 4 },
    { name: "Pro annual", amount: 168, weight: 1.6 },
    { name: "Team annual", amount: 1200, weight: 0.3 },
    { name: "Enterprise contract", amount: 0, weight: 6e-3 }
  ], x = b.reduce((e2, t2) => e2 + t2.weight, 0);
  function M(e2) {
    let t2 = Math.imul((1540483477 ^ e2) >>> 0 ^ e2 >>> 16, 73244475);
    return ((t2 = Math.imul(t2 ^ t2 >>> 16, 73244475)) ^ t2 >>> 16) >>> 0;
  }
  function _(e2) {
    let t2, i2 = (t2 = M(7919 * e2 + 104729) >>> 0, () => {
      let e3 = t2 = t2 + 1831565813 >>> 0;
      return e3 = Math.imul(e3 ^ e3 >>> 15, 1 | e3), (((e3 ^= e3 + Math.imul(e3 ^ e3 >>> 7, 61 | e3)) ^ e3 >>> 14) >>> 0) / 4294967296;
    }), s2 = [], a2 = Math.floor(e2 / 60);
    for (let t3 = 0; t3 < g; t3++) {
      let r2 = y[t3], n2 = 0.78 + 0.44 * (M(131 * t3 + 977 * a2) / 4294967296), l2 = (function(e3, t4) {
        let i3 = Math.exp(-e3), s3 = 0, a3 = 1;
        do
          s3++, a3 *= t4();
        while (a3 > i3 && s3 < 200);
        return s3 - 1;
      })(
        r2.weight * (function(e3) {
          let t4 = (e3 % 24 + 24) % 24, i3 = t4 - 13.5, s3 = t4 - 20.5;
          return 0.07 + 0.93 * Math.exp(-(i3 * i3) / 21.8) + 0.16 * Math.exp(-(s3 * s3) / 3.9);
        })((e2 + 0.5) / 60 + r2.tz) * 3.84 * n2,
        i2
      );
      for (; l2-- > 0; ) {
        let a3 = (function(e3) {
          let t4 = e3() * x;
          for (let e4 = 0; e4 < b.length; e4++)
            if ((t4 -= b[e4].weight) <= 0) return e4;
          return 0;
        })(i2), r3 = b[a3].amount || 12e3 + 1e3 * Math.floor(37 * i2());
        s2.push({ id: 0, t: 60 * e2 + 60 * i2(), city: t3, amount: r3, product: a3 });
      }
    }
    return s2.sort((e3, t3) => e3.t - t3.t), s2.forEach((t3, i3) => {
      t3.id = 4096 * e2 + i3;
    }), s2;
  }
  let w = /* @__PURE__ */ new Map();
  function k(e2) {
    let t2 = w.get(e2);
    return !t2 && (t2 = _(e2), w.set(e2, t2), w.size > 24 && w.delete(w.keys().next().value)), t2;
  }
  let j = null;
  function N() {
    if (j) return j;
    let e2 = new Float64Array(1441 * g), t2 = new Float64Array(1441 * g), i2 = Array(96).fill(0);
    for (let s3 = 0; s3 < 1440; s3++) {
      let a2 = s3 * g, r2 = a2 + g;
      for (let i3 = 0; i3 < g; i3++)
        e2[r2 + i3] = e2[a2 + i3], t2[r2 + i3] = t2[a2 + i3];
      for (let a3 of _(s3))
        e2[r2 + a3.city] += a3.amount, t2[r2 + a3.city] += 1, i2[Math.floor(s3 / 15)] += a3.amount;
    }
    let s2 = f.map(
      (t3, i3) => y.reduce((t4, s3, a2) => t4 + (s3.region === i3 ? e2[1440 * g + a2] : 0), 0)
    );
    return j = { revenue: e2, counts: t2, bins: i2, forecast: s2 };
  }
  function A(e2, t2, i2) {
    let s2 = Math.max(0, Math.floor(e2 / 60)), a2 = Math.min(1439, Math.floor(t2 / 60));
    for (let r2 = s2; r2 <= a2; r2++)
      for (let s3 of k(r2)) {
        if (s3.t > t2) break;
        s3.t > e2 && i2(s3);
      }
  }
  function S(e2, t2, i2) {
    let s2 = N(), a2 = Math.max(0, Math.min(86400, e2)), r2 = Math.min(1440, Math.floor(a2 / 60)), n2 = r2 * g;
    for (let e3 = 0; e3 < g; e3++)
      t2[e3] = s2.revenue[n2 + e3], i2[e3] = s2.counts[n2 + e3];
    if (r2 < 1440)
      for (let e3 of k(r2)) {
        if (e3.t > a2) break;
        t2[e3.city] += e3.amount, i2[e3.city] += 1;
      }
  }
  let P = (e2) => {
    let t2 = 0;
    for (let i2 = 0; i2 < e2.length; i2++) t2 += e2[i2];
    return t2;
  };
  function L(e2, t2 = []) {
    let i2 = new Float64Array(g), s2 = new Float64Array(g);
    for (let a3 of (S(e2, i2, s2), t2)) i2[a3.city] -= a3.amount, s2[a3.city] -= 1;
    let a2 = new Float64Array(g);
    S(e2 - 3600, a2, new Float64Array(g));
    let r2 = P(i2), n2 = f.map(
      (e3, t3) => y.reduce((e4, s3, a3) => e4 + (s3.region === t3 ? i2[a3] : 0), 0)
    ), l2 = y.map((e3, t3) => t3).sort((e3, t3) => i2[t3] - i2[e3]);
    return {
      t: e2,
      total: r2,
      count: P(s2),
      lastHour: Math.max(0, r2 - P(a2)),
      regions: n2,
      cityRevenue: Array.from(i2),
      cityCount: Array.from(s2),
      top: l2.slice(0, 5)
    };
  }
  function R(e2, t2, i2) {
    let s2 = [];
    return A(e2 - t2, e2, (e3) => {
      0 !== e3.city && s2.push(e3);
    }), s2.sort((e3, t3) => t3.amount - e3.amount).slice(0, i2);
  }
  let C = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }), E = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), F = (e2) => C.format(Math.round(e2)), T = (e2) => E.format(Math.round(e2));
  function I(e2) {
    return e2 >= 1e6 ? `$${(e2 / 1e6).toFixed(e2 >= 1e7 ? 1 : 2)}M` : e2 >= 1e3 ? `$${(e2 / 1e3).toFixed(e2 >= 1e5 ? 0 : 1)}k` : F(e2);
  }
  let $ = (e2) => String(e2).padStart(2, "0");
  function z(e2, t2 = true) {
    let i2 = Math.max(0, Math.min(86399, Math.floor(e2))), s2 = `${$(Math.floor(i2 / 3600))}:${$(Math.floor(i2 / 60) % 60)}`;
    return t2 ? `${s2}:${$(i2 % 60)}` : s2;
  }
  let U = [
    [
      -168,
      66,
      -162,
      70,
      -156,
      71.3,
      -141,
      69.6,
      -128,
      70,
      -117,
      69,
      -100,
      68,
      -94,
      72,
      -85,
      69.5,
      -82,
      66,
      -78,
      72,
      -68,
      70,
      -62,
      66,
      -64,
      60,
      -61,
      56,
      -56,
      52,
      -60,
      47.5,
      -66,
      45,
      -70,
      43.5,
      -70,
      41.7,
      -74,
      40.5,
      -76,
      38,
      -76,
      35,
      -81,
      31.5,
      -80,
      27,
      -80.5,
      25.2,
      -82.5,
      27.5,
      -84,
      30,
      -89,
      30.2,
      -94,
      29.5,
      -97.5,
      27,
      -97.5,
      22,
      -96,
      19,
      -94,
      18.5,
      -91,
      18.8,
      -90.5,
      21,
      -87,
      21.5,
      -88,
      16,
      -84,
      15.5,
      -83.5,
      11,
      -81.5,
      9,
      -79,
      9.3,
      -77.3,
      8.5,
      -78,
      7.5,
      -80,
      7.4,
      -83,
      8.3,
      -86,
      11,
      -88,
      13.3,
      -92,
      14.5,
      -95,
      16,
      -99,
      16.7,
      -104.5,
      19,
      -105.7,
      22.5,
      -109,
      26,
      -112.5,
      29.5,
      -114.7,
      31.5,
      -114,
      30,
      -112,
      27,
      -110,
      23.2,
      -112,
      25,
      -114.5,
      28,
      -116.5,
      31.5,
      -117.2,
      32.7,
      -120.6,
      34.5,
      -122.5,
      37.5,
      -124.2,
      40.5,
      -124,
      46,
      -124.7,
      48.4,
      -123,
      49,
      -127.5,
      50.8,
      -130.5,
      54.5,
      -133.5,
      57.5,
      -137.5,
      58.7,
      -141,
      60,
      -146,
      60.8,
      -152,
      59,
      -154,
      57.5,
      -158,
      56.5,
      -162,
      55,
      -164.5,
      54.6,
      -158,
      58.6,
      -162,
      59.8,
      -165,
      61,
      -166,
      63,
      -161,
      64.4,
      -165,
      64.8
    ],
    [
      -94.5,
      59,
      -92.5,
      57,
      -88,
      56,
      -82.5,
      55,
      -79.5,
      54.5,
      -78.5,
      58,
      -77,
      60.5,
      -78,
      62.3,
      -82,
      64.5,
      -86,
      64,
      -90,
      63.5,
      -94,
      61
    ],
    [
      -120,
      72,
      -120,
      76,
      -110,
      78,
      -95,
      80,
      -80,
      83,
      -65,
      82.5,
      -75,
      78,
      -88,
      76,
      -95,
      74,
      -105,
      73,
      -115,
      71
    ],
    [
      -73,
      78,
      -68,
      80.5,
      -60,
      82,
      -40,
      83.5,
      -22,
      82.5,
      -18,
      80,
      -19,
      76,
      -21,
      72,
      -22,
      70,
      -26,
      68.5,
      -32,
      68,
      -36,
      65.5,
      -40,
      64.5,
      -43,
      60,
      -46,
      60.8,
      -49,
      62,
      -51,
      64,
      -53,
      66.5,
      -54,
      69.5,
      -55,
      71,
      -58,
      75.5,
      -66,
      76.5
    ],
    [
      -24,
      65.5,
      -22,
      66.4,
      -18,
      66.2,
      -14.5,
      66,
      -13.5,
      65,
      -15,
      64.3,
      -18,
      63.4,
      -22,
      63.8,
      -24,
      64.8
    ],
    [
      -84.9,
      21.9,
      -82,
      23.2,
      -77.5,
      21.9,
      -74.2,
      20.2,
      -77.7,
      19.9,
      -80.5,
      21.6,
      -83.3,
      21.8
    ],
    [
      -74.4,
      19.8,
      -72.8,
      19.9,
      -70,
      19.7,
      -68.4,
      18.6,
      -71.3,
      17.7,
      -74.4,
      18.4
    ],
    [
      -77.3,
      8.5,
      -75.5,
      10.5,
      -72,
      12,
      -71.5,
      11,
      -68,
      10.5,
      -64,
      10.7,
      -61,
      10.5,
      -58,
      6.8,
      -54,
      5.8,
      -51.5,
      4.2,
      -50,
      1.8,
      -49,
      -0.5,
      -44.5,
      -2.5,
      -40,
      -2.8,
      -37,
      -4.8,
      -35,
      -6.5,
      -35,
      -9,
      -37,
      -12,
      -39,
      -15,
      -39.5,
      -18,
      -41,
      -22,
      -43,
      -23,
      -46,
      -24,
      -48.5,
      -27,
      -49.5,
      -29,
      -51.5,
      -31.5,
      -53.5,
      -34,
      -58,
      -34.5,
      -57,
      -36.5,
      -57.5,
      -38.2,
      -62,
      -39,
      -62.5,
      -41,
      -65,
      -42,
      -64.5,
      -45,
      -67.5,
      -46.5,
      -66,
      -48,
      -68.5,
      -50.5,
      -69,
      -52.3,
      -68.5,
      -54.5,
      -71,
      -54,
      -74,
      -52,
      -75.5,
      -48,
      -74,
      -44,
      -73.5,
      -40,
      -73.5,
      -37,
      -71.5,
      -33,
      -71.5,
      -28,
      -70.5,
      -23,
      -70.2,
      -18.5,
      -72,
      -17,
      -76,
      -14,
      -78,
      -11,
      -79.5,
      -8,
      -81,
      -6,
      -80.5,
      -3,
      -80,
      -1,
      -80.5,
      1,
      -78.8,
      1.8,
      -77.5,
      4,
      -77.4,
      7
    ],
    [
      -9,
      37,
      -9.5,
      39,
      -9,
      43,
      -8,
      43.7,
      -2,
      43.4,
      -1.3,
      44.5,
      -1.2,
      46,
      -2.3,
      47.2,
      -4.5,
      48,
      -4.7,
      48.6,
      -1.5,
      48.7,
      -1.3,
      49.7,
      1,
      50,
      1.6,
      50.9,
      3.5,
      51.4,
      4.5,
      52.5,
      5,
      53.3,
      7,
      53.6,
      8.5,
      53.8,
      8.6,
      55.5,
      8.2,
      56.9,
      10.5,
      57.6,
      10.5,
      56.5,
      10.9,
      55.7,
      9.8,
      54.9,
      11,
      54,
      13,
      54.4,
      14.5,
      53.9,
      18,
      54.8,
      19.8,
      54.4,
      21.2,
      55.2,
      21,
      56.8,
      21.8,
      57.5,
      23.7,
      57.2,
      24.3,
      58.3,
      23.5,
      59.2,
      28,
      59.5,
      30,
      60,
      26,
      60.4,
      22.8,
      59.9,
      21.4,
      60.8,
      21.2,
      62.5,
      22.3,
      63.8,
      25,
      65,
      25.3,
      65.5,
      22.5,
      65.8,
      21.3,
      64.8,
      19,
      63.5,
      17.5,
      62.3,
      17.2,
      61,
      18.8,
      60,
      18.5,
      59.3,
      16.7,
      57.7,
      16.4,
      56.6,
      14.3,
      55.5,
      12.9,
      55.4,
      12.6,
      56.2,
      11.7,
      57.7,
      11.2,
      59,
      10.5,
      59.2,
      8,
      58.1,
      5.6,
      58.9,
      5,
      61,
      5.3,
      62.5,
      8,
      63.5,
      10.5,
      64.6,
      12.5,
      66,
      14.5,
      67.8,
      16,
      68.8,
      18.5,
      69.8,
      22,
      70.3,
      26,
      71,
      29,
      70.8,
      31,
      70,
      33,
      69.3,
      36,
      69,
      41,
      67.5,
      44,
      68.5,
      46,
      68,
      53,
      68.6,
      58,
      68.8,
      60,
      69.6,
      66,
      69.5,
      72,
      72.8,
      76,
      72.2,
      80,
      72.5,
      84,
      73.8,
      87,
      75,
      95,
      76,
      100,
      76.5,
      104,
      77.7,
      107,
      76.9,
      112,
      76,
      114,
      75.5,
      112,
      73.7,
      120,
      73,
      128,
      73.2,
      130,
      71,
      136,
      71.5,
      140,
      72.4,
      146,
      72.3,
      150,
      71.5,
      155,
      71,
      160,
      70.8,
      165,
      69.7,
      170,
      70,
      176,
      69.8,
      180,
      68.9,
      180,
      65,
      178,
      64.5,
      174,
      61.8,
      170,
      60,
      166,
      60.3,
      163,
      59.8,
      162,
      58,
      163,
      56.5,
      162,
      54.5,
      160,
      53,
      158,
      51.5,
      156.7,
      51,
      156,
      55,
      156.5,
      57.5,
      160,
      60.5,
      159,
      61.5,
      155,
      59.3,
      150,
      59.5,
      145,
      59.3,
      142,
      59,
      138,
      56.5,
      137,
      54,
      140.5,
      53.3,
      141.3,
      52,
      140.5,
      48.5,
      138.5,
      47,
      135,
      43.5,
      132,
      43,
      130.7,
      42.3,
      129.5,
      40.8,
      128.5,
      38.5,
      129.4,
      36.5,
      129.2,
      35.2,
      127.5,
      34.6,
      126.3,
      34.6,
      126.5,
      36.5,
      126.7,
      37.7,
      125,
      38,
      124.7,
      39.6,
      122.2,
      40.4,
      121.2,
      40.9,
      119,
      39.2,
      118,
      39,
      117.7,
      38.5,
      118.8,
      37.5,
      120.8,
      37.8,
      122.5,
      37.4,
      120.5,
      36.1,
      119.2,
      34.8,
      120.8,
      32.5,
      121.8,
      31,
      121.7,
      30,
      122,
      29.2,
      120.5,
      27,
      119.5,
      25.4,
      117.8,
      24.3,
      116,
      22.9,
      114,
      22.3,
      112,
      21.6,
      110.3,
      21,
      110.2,
      20.3,
      109.7,
      21.5,
      108,
      21.5,
      106.6,
      20.2,
      105.8,
      19,
      106.5,
      17.5,
      108.8,
      15.4,
      109.3,
      13,
      109.2,
      11.6,
      107.5,
      10.5,
      106.7,
      10.3,
      104.8,
      8.6,
      105,
      9.9,
      104.5,
      10.4,
      103,
      11,
      102.3,
      12.2,
      100.9,
      12.7,
      100.2,
      13.4,
      99.2,
      10.4,
      99.9,
      9.2,
      100.4,
      7.4,
      101.3,
      6.9,
      102.1,
      6.2,
      103.4,
      4.5,
      103.5,
      2.5,
      104.2,
      1.4,
      103.5,
      1.3,
      101.3,
      2.8,
      100.4,
      4.5,
      100.3,
      6,
      98.3,
      8.2,
      98.5,
      10,
      98.6,
      13.6,
      97.7,
      15.8,
      97.4,
      16.8,
      94.6,
      16.2,
      94.3,
      18.5,
      93,
      19.8,
      92.2,
      21.3,
      91.8,
      22.3,
      90.5,
      22.2,
      89,
      21.8,
      87,
      21.5,
      86.9,
      20.7,
      85,
      19.5,
      82.3,
      17,
      80.3,
      15.7,
      80.3,
      13.3,
      79.9,
      10.3,
      78.2,
      8.8,
      77.5,
      8.1,
      76.6,
      8.9,
      75.7,
      11.3,
      74.7,
      13,
      73.5,
      16,
      72.8,
      19.3,
      72.8,
      21,
      70.5,
      20.9,
      69,
      22.4,
      70,
      22.9,
      68.3,
      23.6,
      66.6,
      25.4,
      64,
      25.3,
      61.6,
      25.2,
      57.3,
      25.8,
      56.5,
      27.1,
      54.7,
      26.5,
      52.5,
      27.6,
      51.3,
      28,
      50.2,
      30.2,
      48.9,
      30.3,
      48,
      29.5,
      48.5,
      28,
      50,
      26.5,
      50.8,
      25,
      51.5,
      25.3,
      51.6,
      24.2,
      53.5,
      24.1,
      55.5,
      25.5,
      56.3,
      26.3,
      56.4,
      24.9,
      57.7,
      23.8,
      59.8,
      22.5,
      58.5,
      20.4,
      57.7,
      19,
      55.4,
      17.6,
      52.2,
      15.8,
      49.6,
      14.6,
      45,
      12.8,
      43.5,
      12.7,
      42.8,
      15,
      42.6,
      16.8,
      41,
      19.5,
      39.1,
      21.8,
      38.4,
      23.8,
      37.2,
      25.1,
      35.2,
      28.1,
      34.6,
      28.1,
      34.9,
      29.5,
      34.5,
      31.5,
      35,
      33,
      35.9,
      35,
      36.2,
      36.6,
      34.5,
      36.8,
      32.5,
      36.1,
      30.5,
      36.4,
      29,
      36.7,
      27.3,
      37.5,
      26.3,
      38.3,
      26.2,
      39.5,
      26.6,
      40.3,
      29,
      41.1,
      31,
      41.1,
      33.5,
      42,
      35.2,
      42,
      38.3,
      40.9,
      41.5,
      41.5,
      41.7,
      42.6,
      39.8,
      43.4,
      38,
      44.5,
      36.6,
      45.3,
      35.3,
      44.8,
      33.5,
      44.5,
      32.8,
      45.4,
      33.7,
      46,
      31.7,
      46.6,
      30.7,
      46.5,
      29.7,
      45.4,
      28.7,
      44.3,
      27.9,
      42.7,
      28,
      41.5,
      26.2,
      40.9,
      25.9,
      40.8,
      24,
      40.8,
      23.7,
      40.2,
      22.6,
      40.4,
      22.9,
      39.4,
      23.3,
      38.1,
      24,
      38,
      22.8,
      37.5,
      22.4,
      36.5,
      21.7,
      36.9,
      21.1,
      38.3,
      20.2,
      39.6,
      19.4,
      40.4,
      19.5,
      41.8,
      18.5,
      42.5,
      16.5,
      43.4,
      15.2,
      44.3,
      13.7,
      45.1,
      13.1,
      45.7,
      12.3,
      45.3,
      12.4,
      44.2,
      13.6,
      43.5,
      14.8,
      42.1,
      16.1,
      41.4,
      17.9,
      40.6,
      18.5,
      40.1,
      17,
      39.5,
      16.6,
      38.4,
      15.7,
      38,
      15.6,
      40,
      14.5,
      40.6,
      12.5,
      41.5,
      11,
      42.5,
      10.2,
      43.9,
      8.8,
      44.4,
      7.5,
      43.8,
      6,
      43.1,
      4.3,
      43.5,
      3.2,
      43,
      3.1,
      41.9,
      2,
      41.2,
      0.8,
      41,
      -0.3,
      39.5,
      0.2,
      38.8,
      -0.7,
      37.6,
      -2.1,
      36.7,
      -4.4,
      36.7,
      -5.6,
      36,
      -6.3,
      36.8,
      -7.4,
      37.2,
      -8.9,
      37
    ],
    [
      47,
      45,
      49.2,
      46.4,
      51.2,
      47,
      53,
      46.5,
      53.2,
      45,
      51.3,
      44.5,
      50.6,
      43.8,
      52.7,
      41.8,
      54,
      40.7,
      53.9,
      38,
      53.2,
      37,
      50.2,
      37.3,
      49,
      38.4,
      49.5,
      40.2,
      48,
      42,
      47.5,
      43.2
    ],
    [
      -5.9,
      35.8,
      -2,
      35.1,
      1,
      36.5,
      3,
      36.8,
      7,
      37,
      10.2,
      37.2,
      11,
      36.8,
      10.2,
      35.5,
      11,
      34,
      10.5,
      33.3,
      12.2,
      32.8,
      15.2,
      32.3,
      15.7,
      31.3,
      18.5,
      30.3,
      20,
      30.9,
      20,
      32,
      22,
      32.9,
      25,
      31.8,
      29,
      30.9,
      32.3,
      31.2,
      34.2,
      31.3,
      34.9,
      29.5,
      34.3,
      27.8,
      33.6,
      28.3,
      32.6,
      29.9,
      33.9,
      27.2,
      35.5,
      24,
      37.2,
      21,
      37.4,
      18.8,
      38.6,
      17.9,
      39.7,
      15.3,
      41.3,
      13.8,
      43.3,
      12.5,
      43.1,
      11.6,
      44.5,
      10.4,
      47.5,
      11.2,
      51.2,
      11.8,
      51,
      10.4,
      50.8,
      9,
      49,
      6,
      47.5,
      4.2,
      45.5,
      2,
      43.2,
      -0.5,
      41.6,
      -1.7,
      40.2,
      -2.8,
      39.3,
      -4.7,
      39,
      -6.5,
      39.5,
      -8,
      40.4,
      -10.5,
      40.6,
      -14,
      39,
      -16.8,
      36.8,
      -18.6,
      35,
      -20.5,
      35.4,
      -22.2,
      35.5,
      -24,
      32.9,
      -25.9,
      32.7,
      -28,
      31,
      -29.9,
      28.8,
      -32.2,
      26.5,
      -33.8,
      25.6,
      -34,
      22.5,
      -34,
      20,
      -34.8,
      18.4,
      -34.2,
      18.2,
      -32,
      17.2,
      -29.5,
      16.4,
      -28.6,
      15.2,
      -26.5,
      14.4,
      -22.5,
      13.4,
      -20.8,
      11.8,
      -17.3,
      11.8,
      -15.8,
      12.6,
      -13.3,
      13.7,
      -10.8,
      13.2,
      -8.8,
      12.2,
      -6,
      12.3,
      -4.8,
      11,
      -3.9,
      9.6,
      -1,
      9.3,
      1,
      9.8,
      3,
      8.9,
      4.5,
      7,
      4.4,
      5.7,
      4.3,
      4.5,
      6.3,
      2.5,
      6.3,
      1,
      5.9,
      -1.9,
      4.8,
      -4,
      5.2,
      -7.5,
      4.4,
      -9.3,
      5.5,
      -11.4,
      6.9,
      -13.2,
      8.4,
      -13.7,
      9.5,
      -15,
      10.9,
      -16.7,
      12.4,
      -17.2,
      14.7,
      -16.5,
      16.3,
      -16,
      18.7,
      -16.9,
      21.3,
      -15.2,
      24,
      -14.8,
      25.5,
      -13.1,
      27.6,
      -11.4,
      28.3,
      -9.8,
      29.8,
      -9.6,
      31.5,
      -8.6,
      33.2,
      -6.8,
      34
    ],
    [
      49.3,
      -12,
      50.4,
      -15.2,
      49.8,
      -17,
      48.7,
      -20.5,
      47.6,
      -23.8,
      47.1,
      -24.9,
      45.2,
      -25.6,
      44,
      -24.8,
      43.3,
      -22.5,
      43.7,
      -20.5,
      44.4,
      -19,
      44,
      -17,
      45.2,
      -15.8,
      47.5,
      -14.5,
      48.8,
      -12.5
    ],
    [
      -5.7,
      50,
      -3,
      50.6,
      1.4,
      51.2,
      1.7,
      52.7,
      0.3,
      53.5,
      -0.3,
      54.5,
      -1.6,
      55.6,
      -2,
      56.9,
      -1.8,
      57.6,
      -3.3,
      58.6,
      -5,
      58.6,
      -6.2,
      57.5,
      -5.6,
      56.3,
      -5,
      55,
      -3,
      54.9,
      -3.4,
      54.3,
      -3,
      53.4,
      -4.6,
      53.3,
      -4.2,
      52.3,
      -4.7,
      51.7,
      -3,
      51.5
    ],
    [
      -6,
      52.2,
      -6.2,
      53.9,
      -5.6,
      54.6,
      -6.8,
      55.2,
      -8.3,
      55.2,
      -8.7,
      54.3,
      -10,
      54.2,
      -9.9,
      53.3,
      -9.3,
      52.6,
      -10.3,
      51.9,
      -9.5,
      51.5,
      -8.2,
      51.8,
      -6.4,
      52.2
    ],
    [11, 78.5, 16, 80, 27, 80.2, 22, 77.5, 15, 77],
    [52, 71.5, 56, 73.5, 60, 76.5, 68, 77, 63, 74.5, 57, 70.6],
    [142, 46, 143.5, 49, 144.5, 54, 142.5, 54.3, 142, 51.5, 141.8, 48],
    [
      130,
      31.3,
      131.3,
      31.4,
      132,
      33.2,
      134,
      33.4,
      135.3,
      33.7,
      136.8,
      34.3,
      138.8,
      34.6,
      140,
      35,
      140.8,
      35.7,
      140.6,
      36.8,
      141,
      38.3,
      141.9,
      39.8,
      141.4,
      41.4,
      140,
      40.8,
      139.8,
      39.8,
      139.5,
      38.2,
      137.3,
      36.8,
      136.6,
      37.2,
      135.5,
      35.6,
      133,
      35.5,
      131,
      34.3,
      129.8,
      33.2
    ],
    [
      140,
      42.4,
      141.2,
      41.8,
      143.2,
      42,
      145.5,
      43.2,
      145.3,
      44.3,
      142,
      45.4,
      141.6,
      44.3,
      140.3,
      43.3
    ],
    [120.1, 23, 120.7, 22, 121.5, 23, 121.9, 24.9, 121, 25.2, 120.2, 24],
    [79.8, 8.2, 80.2, 9.8, 81.9, 7.5, 81.2, 6.2, 80, 6],
    [
      120,
      18.4,
      122.3,
      18.5,
      122,
      16,
      124,
      13.2,
      122.9,
      13.6,
      121.4,
      13.9,
      120.5,
      14.6,
      119.8,
      16.4
    ],
    [122, 7, 123.5, 8.5, 125, 9.7, 126.6, 7.2, 125.4, 5.6, 124, 6.3],
    [
      95.3,
      5.6,
      97.5,
      5.2,
      100.4,
      2.2,
      103.8,
      -1,
      106,
      -3.1,
      105.8,
      -5.8,
      104.5,
      -5.9,
      102,
      -4,
      100.3,
      -1,
      98.7,
      1.8,
      96,
      4
    ],
    [
      105.2,
      -6.8,
      106.5,
      -6,
      108.3,
      -6.2,
      111,
      -6.4,
      112.7,
      -6.9,
      114.5,
      -7.7,
      114.4,
      -8.7,
      111,
      -8.2,
      108,
      -7.8,
      106.3,
      -7.4
    ],
    [
      109,
      1.5,
      109.6,
      -0.5,
      110.2,
      -2.9,
      112,
      -3.4,
      114.5,
      -4,
      116.5,
      -3.2,
      116.5,
      -1.5,
      117.5,
      0,
      117.9,
      1.3,
      118.9,
      5,
      117.3,
      6.9,
      116,
      6,
      115.4,
      4.9,
      113.6,
      3.2,
      111.4,
      2.5,
      110.3,
      1.7
    ],
    [
      119.3,
      -5.5,
      121,
      -5,
      121.4,
      -2,
      123.3,
      -1,
      124.8,
      1.4,
      121.5,
      1.2,
      119.8,
      0,
      119.5,
      -3.5
    ],
    [
      131,
      -1.3,
      134,
      -0.8,
      135.3,
      -3.3,
      138,
      -1.6,
      141,
      -2.6,
      144.5,
      -3.8,
      146,
      -5.5,
      147.5,
      -6,
      147.8,
      -8,
      150,
      -10.3,
      146.2,
      -8.8,
      144.2,
      -7.8,
      143,
      -9,
      141,
      -9.2,
      139,
      -8.1,
      138,
      -8.4,
      137.7,
      -5.2,
      135.2,
      -4.3,
      133,
      -4,
      132,
      -2.8
    ],
    [
      113.4,
      -22,
      114,
      -26.3,
      115,
      -29.5,
      115.3,
      -33.5,
      117.8,
      -35.1,
      121,
      -33.9,
      124,
      -33.3,
      126,
      -32.3,
      129,
      -31.7,
      131.2,
      -31.5,
      134.2,
      -32.8,
      135.8,
      -34.8,
      137.8,
      -33.4,
      137.7,
      -35.7,
      138.5,
      -35.5,
      139.7,
      -37,
      141.6,
      -38.4,
      144,
      -38.3,
      145.5,
      -38.6,
      147.8,
      -37.9,
      150,
      -37.5,
      150.8,
      -34.5,
      152.5,
      -32,
      153.6,
      -28.5,
      153.1,
      -25.5,
      151,
      -23.3,
      149.5,
      -22.3,
      147.4,
      -19.4,
      146,
      -17.5,
      145.4,
      -14.8,
      143.8,
      -14,
      142.6,
      -10.7,
      141.6,
      -12.6,
      141.5,
      -15.5,
      140.6,
      -17.5,
      139,
      -17.3,
      137,
      -15.9,
      135.5,
      -14.9,
      136.8,
      -12.2,
      135.8,
      -11.9,
      133.5,
      -11.3,
      130.8,
      -12.4,
      129.5,
      -14.9,
      127.8,
      -14.3,
      126,
      -14.2,
      124.3,
      -16.3,
      122.3,
      -17.5,
      121.4,
      -19.3,
      119,
      -20.2,
      116.7,
      -20.6,
      114.5,
      -21.8
    ],
    [144.6, -40.7, 148.3, -40.9, 148, -43.2, 146.5, -43.6, 145.2, -42.2],
    [
      172.7,
      -34.4,
      174.5,
      -36,
      176,
      -37.6,
      178.5,
      -37.7,
      177.5,
      -39.3,
      176.9,
      -40,
      175.2,
      -41.6,
      174.6,
      -41.3,
      175.2,
      -40,
      173.8,
      -39.2,
      174.6,
      -38,
      174.3,
      -36.7
    ],
    [
      172.8,
      -40.5,
      174.2,
      -41.7,
      172.8,
      -43.6,
      171.2,
      -44.6,
      169.3,
      -46.6,
      166.5,
      -46,
      166.7,
      -45.2,
      168.5,
      -44,
      170.8,
      -42.8,
      172.1,
      -41.1
    ],
    [
      -180,
      -90,
      -180,
      -78,
      -150,
      -77,
      -120,
      -73.5,
      -100,
      -73,
      -75,
      -72.5,
      -62,
      -64,
      -58,
      -63.5,
      -60,
      -68,
      -60,
      -74,
      -40,
      -78,
      -25,
      -76,
      -10,
      -71,
      10,
      -70,
      30,
      -69.5,
      50,
      -66.5,
      70,
      -68,
      90,
      -66,
      110,
      -66,
      130,
      -66.5,
      150,
      -68.5,
      165,
      -71,
      170,
      -77,
      180,
      -78,
      180,
      -90
    ]
  ], q = null;
  var D = i(1883);
  let H = Math.PI / 180, V = (e2, t2, i2) => {
    let s2 = (0, D.q)((i2 - e2) / (t2 - e2), 0, 1);
    return s2 * s2 * (3 - 2 * s2);
  };
  function O(e2, t2) {
    let i2 = e2 * H, s2 = t2 * H;
    return [Math.cos(i2) * Math.sin(s2), Math.sin(i2), Math.cos(i2) * Math.cos(s2)];
  }
  let X = (e2, t2) => e2[0] * t2[0] + e2[1] * t2[1] + e2[2] * t2[2];
  function Z(e2) {
    let t2 = Math.hypot(e2[0], e2[1], e2[2]) || 1;
    return [e2[0] / t2, e2[1] / t2, e2[2] / t2];
  }
  function B(e2, t2, i2, s2) {
    let a2 = 3 * e2, r2 = 3 * (i2 - e2) - a2, n2 = 1 - a2 - r2, l2 = 3 * t2, o2 = 3 * (s2 - t2) - l2, h2 = 1 - l2 - o2, c2 = (e3) => ((n2 * e3 + r2) * e3 + a2) * e3, u2 = (e3) => ((h2 * e3 + o2) * e3 + l2) * e3, d2 = (e3) => (3 * n2 * e3 + 2 * r2) * e3 + a2;
    return (e3) => {
      if (e3 <= 0) return 0;
      if (e3 >= 1) return 1;
      let t3 = e3;
      for (let i4 = 0; i4 < 6; i4++) {
        let i5 = c2(t3) - e3;
        if (1e-5 > Math.abs(i5)) return u2(t3);
        let s4 = d2(t3);
        if (1e-6 > Math.abs(s4)) break;
        t3 -= i5 / s4;
      }
      let i3 = 0, s3 = 1;
      t3 = e3;
      for (let a3 = 0; a3 < 24; a3++) {
        let a4 = c2(t3);
        if (1e-5 > Math.abs(a4 - e3)) break;
        a4 < e3 ? i3 = t3 : s3 = t3, t3 = (i3 + s3) / 2;
      }
      return u2(t3);
    };
  }
  function Y(e2, t2, i2, s2, a2, r2) {
    let n2 = Math.max(1, Math.ceil(r2 / (1 / 240))), l2 = r2 / n2;
    for (let r3 = 0; r3 < n2; r3++)
      t2 += (-s2 * (e2 - i2) - a2 * t2) * l2, e2 += t2 * l2;
    return [e2, t2];
  }
  let J = 22 * H, W = 66 * H, K = -84 * H, G = 46 * H, Q = B(...p.T.ease.inOut), ee = B(...p.T.ease.enter), et = O(y[0].lat, y[0].lon), ei = y.map((e2) => O(e2.lat, e2.lon)), es = ei.map((e2) => {
    let t2 = Z([e2[2], 0, -e2[0]]), i2 = [
      e2[1] * t2[2] - e2[2] * t2[1],
      e2[2] * t2[0] - e2[0] * t2[2],
      e2[0] * t2[1] - e2[1] * t2[0]
    ];
    return { east: t2, north: i2 };
  }), ea = f.map(
    (e2, t2) => Z(
      ei.reduce(
        (e3, i2, s2) => {
          let a2 = y[s2].region === t2 ? y[s2].weight : 0;
          return [e3[0] + i2[0] * a2, e3[1] + i2[1] * a2, e3[2] + i2[2] * a2];
        },
        [0, 0, 0]
      )
    )
  ), er = /* @__PURE__ */ new Map();
  class en {
    constructor(e2, t2, i2, s2) {
      this.canvas = e2, this.host = t2, this.reduced = i2, this.events = s2, this.mode = "live", this.colors = {
        fg: "#111",
        muted: "#888",
        secondary: "#555",
        accent: "#333",
        surface: "#fff",
        border: "#e5e5e5"
      }, this.font = "sans-serif", this.dpr = 1, this.w = 0, this.h = 0, this.baseR = 0, this.dots = null, this.px = new Float32Array(0), this.py = new Float32Array(0), this.bucket = new Int8Array(0), this.order = new Int32Array(0), this.counts = new Int32Array(16), this.offsets = new Int32Array(17), this.cursorAt = new Int32Array(16), this.cityX = new Float32Array(g), this.cityY = new Float32Array(g), this.cityZ = new Float32Array(g), this.lon = -8 * H, this.lat = J, this.zoom = 0.86, this.vLon = -0.42000000000000004, this.vLat = 0, this.vZoom = 0, this.drift = -1, this.move = null, this.drag = null, this.pointer = { x: 0, y: 0, inside: false }, this.hover = null, this.peeked = null, this.focus = null, this.clock = 60120, this.liveNow = 60120, this.speed = 1, this.catchUp = false, this.scrubbing = false, this.resume = "live", this.arcs = [], this.ripples = [], this.budget = 0, this.stills = [], this.started = 0, this.last = 0, this.lastTick = 0, this.raf = 0, this.onScreen = false, this.pageVisible = true, this.introStart = -1, this.cursor = "", this.tickKey = "", this.observers = [], this.cleanups = [], this.ctx = e2.getContext("2d"), this.snapshot = L(60120), this.started = performance.now(), i2 && (this.lon = -45 * H, this.zoom = 1, this.vLon = 0, this.stills = R(60120, 1500, 18)), this.refreshColors();
      const a2 = new ResizeObserver(() => this.resize());
      a2.observe(t2);
      const r2 = new IntersectionObserver((e3) => {
        this.onScreen = e3.some((e4) => e4.isIntersecting), this.onScreen && this.introStart < 0 && !i2 && (this.introStart = performance.now() / 1e3), this.schedule();
      });
      r2.observe(t2);
      const n2 = new MutationObserver(() => this.refreshColors());
      n2.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class", "style", "data-theme", "data-accent"]
      }), this.observers.push(a2, r2, n2);
      const l2 = window.matchMedia("(prefers-color-scheme: dark)"), o2 = () => this.refreshColors();
      l2.addEventListener("change", o2);
      const h2 = () => {
        this.pageVisible = "visible" === document.visibilityState, this.schedule();
      };
      document.addEventListener("visibilitychange", h2);
      const c2 = (e3) => this.pointerDown(e3), u2 = (e3) => this.pointerMove(e3), d2 = (e3) => this.pointerUp(e3, false), m2 = (e3) => this.pointerUp(e3, true), p2 = () => {
        this.pointer.inside = false, this.schedule();
      };
      e2.addEventListener("pointerdown", c2), e2.addEventListener("pointermove", u2), e2.addEventListener("pointerup", d2), e2.addEventListener("pointercancel", m2), e2.addEventListener("pointerleave", p2), this.cleanups.push(
        () => l2.removeEventListener("change", o2),
        () => document.removeEventListener("visibilitychange", h2),
        () => {
          e2.removeEventListener("pointerdown", c2), e2.removeEventListener("pointermove", u2), e2.removeEventListener("pointerup", d2), e2.removeEventListener("pointercancel", m2), e2.removeEventListener("pointerleave", p2);
        }
      ), this.resize();
    }
    destroy() {
      cancelAnimationFrame(this.raf), this.observers.forEach((e2) => e2.disconnect()), this.cleanups.forEach((e2) => e2());
    }
    select(e2) {
      let t2 = e2 && this.focus && e2.kind === this.focus.kind && e2.index === this.focus.index;
      if (this.focus = t2 ? null : e2, this.events.focus(this.focus), !this.focus) {
        this.move = null, this.schedule();
        return;
      }
      let i2 = "city" === this.focus.kind ? ei[this.focus.index] : ea[this.focus.index], s2 = (0, D.q)(Math.asin(i2[1]), -W, W), a2 = Math.atan2(i2[0], i2[2]), r2 = [Math.cos(s2) * Math.sin(a2), Math.sin(s2), Math.cos(s2) * Math.cos(a2)], n2 = "city" === this.focus.kind ? 1.3 : 1.08;
      if (this.reduced) {
        this.lon = a2, this.lat = s2, this.zoom = n2, this.move = null, this.schedule();
        return;
      }
      let l2 = this.center(), o2 = Math.acos((0, D.q)(X(l2, r2), -1, 1)), h2 = this.move ? this.move.v * this.move.omega / Math.max(o2, 0.05) : 0;
      this.move = {
        from: l2,
        to: r2,
        omega: o2,
        p: 0,
        v: (0, D.q)(h2, 0, 3),
        zoomFrom: this.zoom,
        zoomTo: n2
      }, this.vLon = 0, this.vLat = 0, this.schedule();
    }
    clearFocus() {
      this.focus && this.select(this.focus);
    }
    peek(e2) {
      this.peeked = e2, this.schedule();
    }
    nudge(e2, t2) {
      this.move = null, this.reduced ? (this.lon += 0.18 * e2, this.lat = (0, D.q)(this.lat + 0.14 * t2, -W, W)) : (this.vLon += 1.1 * e2, this.vLat += 0.8 * t2), this.schedule();
    }
    replayDay() {
      this.clock = 0, this.catchUp = false, this.speed = 1, this.setMode(this.reduced ? "paused" : "replay"), this.afterJump();
    }
    togglePlay() {
      "paused" === this.mode ? this.setMode(this.clock >= this.liveNow - 1 ? "live" : "replay") : this.setMode("paused"), this.catchUp = false;
    }
    goLive() {
      if (this.reduced || this.liveNow - this.clock < 2) {
        this.clock = this.liveNow, this.setMode("live"), this.afterJump();
        return;
      }
      this.catchUp = true, this.setMode("replay");
    }
    seek(e2) {
      this.clock = (0, D.q)(e2, 0, this.liveNow);
      let t2 = this.clock >= this.liveNow - 1;
      this.reduced ? this.setMode(t2 ? "live" : "paused") : "paused" !== this.mode && this.setMode(t2 ? "live" : "replay"), this.catchUp = false, this.afterJump();
    }
    scrubStart() {
      this.scrubbing || (this.resume = this.mode, this.scrubbing = true, this.setMode("paused"));
    }
    scrubTo(e2) {
      this.clock = (0, D.q)(e2, 0, this.liveNow), this.afterJump();
    }
    scrubEnd() {
      if (!this.scrubbing) return;
      this.scrubbing = false;
      let e2 = this.clock >= this.liveNow - 1;
      this.reduced ? this.setMode(e2 ? "live" : "paused") : "paused" !== this.resume && this.setMode(e2 ? "live" : "replay");
    }
    get live() {
      return this.liveNow;
    }
    get time() {
      return this.clock;
    }
    refreshColors() {
      var e2;
      let t2, i2, s2, a2;
      this.colors = (e2 = this.host, (t2 = document.createElement("span")).style.display = "none", e2.appendChild(t2), i2 = document.createElement("canvas").getContext("2d", { willReadFrequently: true }), a2 = {
        fg: (s2 = (e3, s3) => {
          t2.style.color = s3, t2.style.color = `var(${e3}, ${s3})`;
          let a3 = getComputedStyle(t2).color;
          if (!i2) return a3;
          i2.clearRect(0, 0, 1, 1), i2.fillStyle = s3, i2.fillStyle = a3, i2.fillRect(0, 0, 1, 1);
          let [r2, n2, l2] = i2.getImageData(0, 0, 1, 1).data;
          return `rgb(${r2}, ${n2}, ${l2})`;
        })("--foreground", "#111"),
        muted: s2("--text-muted", "#888"),
        secondary: s2("--text-secondary", "#555"),
        accent: s2("--accent", "#333"),
        surface: s2("--surface", "#fff"),
        border: s2("--border", "#e5e5e5")
      }, t2.remove(), a2), this.font = getComputedStyle(this.host).fontFamily || "sans-serif", this.schedule();
    }
    resize() {
      let e2 = this.host.getBoundingClientRect();
      if (!e2.width || !e2.height) return;
      this.dpr = Math.min(2, window.devicePixelRatio || 1), this.w = e2.width, this.h = e2.height, this.canvas.width = Math.round(e2.width * this.dpr), this.canvas.height = Math.round(e2.height * this.dpr), this.baseR = 0.41 * Math.min(e2.width, e2.height);
      let t2 = Math.round(10 * (0, D.q)(5.4 / (this.baseR * H), 1.2, 2.8)) / 10;
      this.dots && this.dots.step === t2 || (this.dots = (function(e3) {
        let t3 = er.get(e3);
        if (t3) return t3;
        let i2 = [], s2 = [], a2 = [], r2 = [], n2 = (e4, t4) => {
          let n3 = 0;
          for (let l3 = -90 + e4 / 2; l3 < 90; l3 += e4, n3++) {
            let o2 = Math.max(1, Math.round(360 * Math.cos(l3 * H) / e4));
            for (let e5 = 0; e5 < o2; e5++) {
              let h2 = -180 + (e5 + n3 % 2 * 0.5) * 360 / o2;
              if ((function(e6, t5) {
                let i3 = false;
                for (let s3 of q || (q = U.map((e7) => {
                  let t6 = 180, i4 = -180, s4 = 90, a3 = -90;
                  for (let r3 = 0; r3 < e7.length; r3 += 2)
                    t6 = Math.min(t6, e7[r3]), i4 = Math.max(i4, e7[r3]), s4 = Math.min(s4, e7[r3 + 1]), a3 = Math.max(a3, e7[r3 + 1]);
                  return {
                    ring: e7,
                    minX: t6,
                    maxX: i4,
                    minY: s4,
                    maxY: a3
                  };
                }))) {
                  if (e6 < s3.minX || e6 > s3.maxX || t5 < s3.minY || t5 > s3.maxY)
                    continue;
                  let a3 = s3.ring, r3 = a3.length / 2;
                  for (let s4 = 0, n4 = r3 - 1; s4 < r3; n4 = s4++) {
                    let r4 = a3[2 * s4], l4 = a3[2 * s4 + 1], o3 = a3[2 * n4], h3 = a3[2 * n4 + 1];
                    l4 > t5 != h3 > t5 && e6 < (o3 - r4) * (t5 - l4) / (h3 - l4) + r4 && (i3 = !i3);
                  }
                }
                return i3;
              })(h2, l3) !== t4)
                continue;
              let c2 = O(l3, h2);
              i2.push(c2[0]), s2.push(c2[1]), a2.push(c2[2]), r2.push(+!!t4);
            }
          }
        };
        n2(e3, true), n2(2.5 * e3, false);
        let l2 = {
          x: Float32Array.from(i2),
          y: Float32Array.from(s2),
          z: Float32Array.from(a2),
          land: Uint8Array.from(r2),
          count: i2.length,
          step: e3
        };
        return er.set(e3, l2), l2;
      })(t2), this.px = new Float32Array(this.dots.count), this.py = new Float32Array(this.dots.count), this.bucket = new Int8Array(this.dots.count), this.order = new Int32Array(this.dots.count)), this.schedule(true);
    }
    get running() {
      return this.onScreen && this.pageVisible;
    }
    schedule(e2 = false) {
      this.raf || (this.running || e2) && (this.raf = requestAnimationFrame((e3) => {
        this.raf = 0, this.frame(e3);
      }));
    }
    setMode(e2) {
      e2 !== this.mode && (this.mode = e2, "replay" !== e2 && (this.catchUp = false), this.events.mode(e2), this.schedule());
    }
    afterJump() {
      this.arcs = this.arcs.filter((e2) => e2.tx.t <= this.clock), this.reduced && (this.stills = R(this.clock, 1500, 18)), this.lastTick = 0, this.schedule();
    }
    center() {
      return [
        Math.cos(this.lat) * Math.sin(this.lon),
        Math.sin(this.lat),
        Math.cos(this.lat) * Math.cos(this.lon)
      ];
    }
    local(e2) {
      let t2 = this.canvas.getBoundingClientRect();
      return { x: e2.clientX - t2.left, y: e2.clientY - t2.top };
    }
    pointerDown(e2) {
      if (0 !== e2.button) return;
      let { x: t2, y: i2 } = this.local(e2);
      this.canvas.setPointerCapture(e2.pointerId), this.drag = {
        id: e2.pointerId,
        x0: t2,
        y0: i2,
        lon0: this.lon,
        lat0: this.lat,
        moved: false,
        touch: "mouse" !== e2.pointerType,
        samples: [{ x: t2, y: i2, t: e2.timeStamp }]
      };
    }
    pointerMove(e2) {
      let { x: t2, y: i2 } = this.local(e2);
      this.pointer = { x: t2, y: i2, inside: "mouse" === e2.pointerType };
      let s2 = this.drag;
      if (s2 && s2.id === e2.pointerId) {
        let a2 = t2 - s2.x0, r2 = s2.touch ? 0 : i2 - s2.y0;
        if (!s2.moved && Math.hypot(a2, r2) > 4 && (s2.moved = true, s2.x0 = t2, s2.y0 = s2.touch ? s2.y0 : i2, s2.lon0 = this.lon, s2.lat0 = this.lat, this.move = null), s2.moved) {
          let e3 = this.baseR * this.zoom;
          this.lon = s2.lon0 - (t2 - s2.x0) / e3;
          let a3 = s2.lat0 + (s2.touch ? 0 : (i2 - s2.y0) / e3), r3 = Math.abs(a3) - W;
          this.lat = r3 > 0 ? Math.sign(a3) * (W + ((e4, t3 = 0.55) => (1 - 1 / (Math.abs(e4) * t3 / 0.45 + 1)) * 0.45 * Math.sign(e4))(r3)) : a3, this.vLon = 0, this.vLat = 0;
        }
        for (s2.samples.push({ x: t2, y: i2, t: e2.timeStamp }); s2.samples.length > 2 && e2.timeStamp - s2.samples[0].t > 90; )
          s2.samples.shift();
      }
      this.schedule();
    }
    pointerUp(e2, t2) {
      let i2 = this.drag;
      if (!i2 || i2.id !== e2.pointerId || (this.drag = null, this.canvas.hasPointerCapture(e2.pointerId) && this.canvas.releasePointerCapture(e2.pointerId), t2))
        return;
      if (!i2.moved) return void this.click(this.local(e2));
      if (this.reduced) return;
      let s2 = i2.samples[0], a2 = i2.samples[i2.samples.length - 1], r2 = Math.max(16, a2.t - s2.t) / 1e3, n2 = this.baseR * this.zoom;
      this.vLon = (0, D.q)(-(a2.x - s2.x) / r2 / n2, -7, 7), this.vLat = i2.touch ? 0 : (0, D.q)((a2.y - s2.y) / r2 / n2, -5, 5), this.schedule();
    }
    hitCity(e2, t2, i2) {
      let s2 = null, a2 = i2;
      for (let i3 = 0; i3 < g; i3++) {
        if (this.cityZ[i3] <= 0.05) continue;
        let r2 = Math.hypot(this.cityX[i3] - e2, this.cityY[i3] - t2);
        r2 < a2 && (s2 = i3, a2 = r2);
      }
      return s2;
    }
    click({ x: e2, y: t2 }) {
      let i2 = this.hitCity(e2, t2, 18);
      if (null !== i2) return void this.select({ kind: "city", index: i2 });
      let s2 = this.baseR * this.zoom, a2 = (e2 - this.w / 2) / s2, r2 = (this.h / 2 - t2) / s2;
      if (a2 * a2 + r2 * r2 >= 1) return void this.clearFocus();
      let n2 = Math.sqrt(1 - a2 * a2 - r2 * r2), l2 = Math.sin(this.lat), o2 = Math.cos(this.lat), h2 = Math.sin(this.lon), c2 = Math.cos(this.lon), u2 = -r2 * l2 + n2 * o2, d2 = [a2 * c2 + u2 * h2, r2 * o2 + n2 * l2, -a2 * h2 + u2 * c2], m2 = 0, p2 = -2;
      ei.forEach((e3, t3) => {
        let i3 = X(e3, d2);
        i3 > p2 && (p2 = i3, m2 = t3);
      }), this.select({ kind: "region", index: y[m2].region });
    }
    advance(e2, t2) {
      this.reduced || (this.liveNow = Math.min(
        86399,
        60120 + (performance.now() - this.started) / 1e3
      ));
      let i2 = this.clock;
      if ("live" === this.mode) this.clock = this.liveNow;
      else if ("replay" === this.mode) {
        let t3 = this.liveNow - this.clock, i3 = this.catchUp ? 4e4 : 1500, s2 = (0, D.q)(t3 * (this.catchUp ? 2.4 : 1.2), 2, i3);
        this.speed += (s2 - this.speed) * (1 - Math.exp(-e2 / 0.3)), this.clock = Math.min(this.liveNow, this.clock + this.speed * e2), this.liveNow - this.clock < 1 && (this.clock = this.liveNow, this.setMode("live"));
      }
      this.clock < i2 ? this.afterJump() : this.clock > i2 && !this.reduced && this.spawn(i2, this.clock, e2, t2);
    }
    spawn(e2, t2, i2, s2) {
      let a2 = "live" === this.mode && t2 - e2 < 3;
      if (!a2 && t2 - e2 > 10800) return;
      let r2 = [];
      if (A(e2, t2, (e3) => {
        r2.push(e3);
      }), !r2.length) {
        this.budget = Math.min(3, this.budget + 8 * i2);
        return;
      }
      let n2 = r2;
      if (!a2) {
        this.budget = Math.min(3, this.budget + 8 * i2);
        let e3 = Math.floor(this.budget);
        n2 = e3 ? r2.sort((e4, t3) => t3.amount - e4.amount).slice(0, e3) : [], this.budget -= n2.length;
      }
      for (let e3 of n2.slice(0, 6)) this.launch(e3, s2);
      this.arcs.length > 80 && this.arcs.splice(0, this.arcs.length - 80);
    }
    launch(e2, t2) {
      let i2 = (0, D.q)(Math.log10(e2.amount / 5) / 3.8, 0, 1);
      if (0 === e2.city)
        return void this.ripples.push({
          city: 0,
          born: t2,
          dur: 1,
          size: i2,
          strong: true
        });
      let s2 = ei[e2.city], a2 = Math.acos((0, D.q)(X(s2, et), -1, 1)), r2 = a2 / Math.PI;
      this.arcs.push({
        tx: e2,
        born: t2,
        dur: 1.05 + 1.1 * r2,
        from: s2,
        omega: a2,
        lift: 0.04 + 0.24 * r2,
        width: 1 + 1.6 * i2,
        landed: false
      }), this.ripples.push({
        city: e2.city,
        born: t2,
        dur: 0.8,
        size: 0.6 * i2,
        strong: false
      });
    }
    updateCamera(e2, t2) {
      if (this.drag?.moved) return;
      if (this.move) {
        let t3 = this.move;
        [t3.p, t3.v] = Y(t3.p, t3.v, 1, 40, 12.6, e2);
        let i3 = (0, D.q)(t3.p, 0, 1.02), s3 = (function(e3, t4, i4, s4 = Math.acos((0, D.q)(X(e3, t4), -1, 1))) {
          if (s4 < 1e-5) return [e3[0], e3[1], e3[2]];
          let a3 = Math.sin(s4), r3 = Math.sin((1 - i4) * s4) / a3, n3 = Math.sin(i4 * s4) / a3;
          return [
            e3[0] * r3 + t4[0] * n3,
            e3[1] * r3 + t4[1] * n3,
            e3[2] * r3 + t4[2] * n3
          ];
        })(t3.from, t3.to, i3, t3.omega);
        this.lat = Math.asin((0, D.q)(s3[1], -1, 1)), this.lon = Math.atan2(s3[0], s3[2]), this.zoom = t3.zoomFrom + (t3.zoomTo - t3.zoomFrom) * i3 - 0.16 * Math.sin(Math.PI * (0, D.q)(i3, 0, 1)) * (t3.omega / Math.PI), 5e-4 > Math.abs(t3.p - 1) && 5e-3 > Math.abs(t3.v) && (this.move = null);
        return;
      }
      let i2 = this.introStart < 0 ? 0 : 1 - V(0, 1.6, t2 - this.introStart), s2 = Math.atan2(Math.sin(this.lon - K), Math.cos(this.lon - K));
      s2 < -G ? this.drift = 1 : s2 > G && (this.drift = -1);
      let a2 = this.reduced || this.focus ? 0 : 0.07 * this.drift * (1 + 5 * i2);
      this.vLon += (a2 - this.vLon) * (1 - Math.exp(-e2 / (i2 > 0 ? 0.5 : 1.4))), this.lon += this.vLon * e2;
      let r2 = this.focus ? (0, D.q)(this.lat, -W, W) : J;
      [this.lat, this.vLat] = Y(this.lat, this.vLat, r2, 9, 6, e2);
      let n2 = this.focus ? "city" === this.focus.kind ? 1.3 : 1.08 : 1;
      [this.zoom, this.vZoom] = Y(this.zoom, this.vZoom, n2, 60, 15.5, e2), this.reduced && (this.zoom = n2, this.vZoom = 0, this.vLat = 0);
    }
    frame(e2) {
      let t2 = e2 / 1e3, i2 = this.last ? (0, D.q)((e2 - this.last) / 1e3, 0, 0.05) : 1 / 60;
      if (this.last = e2, this.advance(i2, t2), this.updateCamera(i2, t2), this.draw(t2), this.updateHover(), e2 - this.lastTick > ("live" === this.mode ? 380 : 171)) {
        this.lastTick = e2;
        let t3 = this.arcs.filter((e3) => !e3.landed && e3.tx.t <= this.clock).map((e3) => e3.tx), i3 = `${this.clock}|${t3.map((e3) => e3.id).join(",")}`;
        i3 !== this.tickKey && (this.tickKey = i3, this.snapshot = L(this.clock, t3), this.events.tick(this.snapshot));
      }
      if (this.events.frame(this.clock, this.liveNow), this.reduced) {
        this.last = 0;
        return;
      }
      this.running ? this.schedule() : this.last = 0;
    }
    updateHover() {
      let e2 = this.pointer.inside && !this.drag?.moved ? this.hitCity(this.pointer.x, this.pointer.y, 14) : null;
      e2 !== this.hover && (this.hover = e2, this.events.hover(e2));
      let t2 = this.drag?.moved ? "grabbing" : null !== e2 ? "pointer" : "grab";
      t2 !== this.cursor && (this.cursor = t2, this.canvas.style.cursor = t2);
      let i2 = this.hover ?? this.peeked ?? (this.focus?.kind === "city" ? this.focus.index : null);
      null === i2 ? this.events.anchor(null, 0, 0, false) : this.events.anchor(
        i2,
        this.cityX[i2],
        this.cityY[i2],
        this.cityZ[i2] > 0.08
      );
    }
    draw(e2) {
      let t2 = this.ctx, i2 = this.dots;
      if (!t2 || !i2 || !this.w) return;
      let {
        fg: s2,
        accent: a2,
        surface: r2,
        border: n2,
        secondary: l2
      } = this.colors, o2 = this.w, h2 = this.h, c2 = o2 / 2, u2 = h2 / 2, d2 = this.baseR * this.zoom;
      t2.setTransform(this.dpr, 0, 0, this.dpr, 0, 0), t2.clearRect(0, 0, o2, h2), t2.globalAlpha = 1;
      let m2 = Math.sin(this.lat), p2 = Math.cos(this.lat), f2 = Math.sin(this.lon), v2 = Math.cos(this.lon), b2 = (e3, t3, i3, s3) => {
        let a3 = e3 * v2 - i3 * f2, r3 = e3 * f2 + i3 * v2;
        return s3[0] = c2 + d2 * a3, s3[1] = u2 - d2 * (t3 * p2 - r3 * m2), s3[2] = t3 * m2 + r3 * p2, s3[3] = a3 * a3 + (t3 * p2 - r3 * m2) ** 2, s3;
      }, x2 = [0, 0, 0, 0];
      t2.beginPath(), t2.arc(c2, u2, d2, 0, 2 * Math.PI), t2.fillStyle = s2, t2.globalAlpha = 0.028, t2.fill(), t2.globalAlpha = 1, t2.strokeStyle = n2, t2.lineWidth = 1, t2.stroke();
      let M2 = (12 - this.clock / 3600) * 15 * H, _2 = Math.sin(M2), w2 = Math.cos(M2), k2 = this.introStart < 0 ? +!!this.reduced : ee((0, D.q)((e2 - this.introStart) / 1.5, 0, 1)), j2 = k2 * (Math.PI / 2 + 0.5), N2 = this.counts;
      N2.fill(0);
      let { x: A2, y: S2, z: P2, land: L2, count: R2 } = i2;
      for (let e3 = 0; e3 < R2; e3++) {
        let t3 = A2[e3] * v2 - P2[e3] * f2, i3 = A2[e3] * f2 + P2[e3] * v2, s3 = S2[e3] * m2 + i3 * p2;
        if (s3 <= 0) {
          this.bucket[e3] = -1;
          continue;
        }
        let a3 = 0.16 + 0.84 * Math.pow(s3, 0.65);
        if (a3 *= 0.52 + 0.48 * V(-0.12, 0.16, A2[e3] * _2 + P2[e3] * w2), k2 < 1 && (a3 *= V(j2, j2 - 0.45, Math.acos(Math.min(1, s3)))), a3 < 0.02) {
          this.bucket[e3] = -1;
          continue;
        }
        let r3 = Math.min(7, Math.floor(8 * a3)) + 8 * !L2[e3];
        this.bucket[e3] = r3, this.px[e3] = c2 + d2 * t3, this.py[e3] = u2 - d2 * (S2[e3] * p2 - i3 * m2), N2[r3]++;
      }
      let C2 = this.offsets;
      for (let e3 = 0; e3 < 16; e3++) C2[e3 + 1] = C2[e3] + N2[e3];
      let E2 = this.cursorAt;
      E2.set(C2.subarray(0, 16));
      for (let e3 = 0; e3 < R2; e3++) {
        let t3 = this.bucket[e3];
        t3 >= 0 && (this.order[E2[t3]++] = e3);
      }
      let F2 = i2.step * H * d2, T2 = (0, D.q)(0.2 * F2, 0.75, 1.6), I2 = (0, D.q)(0.12 * F2, 0.5, 0.9);
      t2.fillStyle = s2;
      for (let e3 = 0; e3 < 16; e3++) {
        if (C2[e3] === C2[e3 + 1]) continue;
        let i3 = e3 < 8, s3 = (e3 % 8 + 0.5) / 8;
        t2.globalAlpha = s3 * (i3 ? 0.6 : 0.22), t2.beginPath();
        let a3 = i3 ? T2 * (0.7 + 0.3 * s3) : I2;
        for (let s4 = C2[e3]; s4 < C2[e3 + 1]; s4++) {
          let e4 = this.order[s4];
          i3 ? (t2.moveTo(this.px[e4] + a3, this.py[e4]), t2.arc(this.px[e4], this.py[e4], a3, 0, 2 * Math.PI)) : t2.rect(this.px[e4] - a3, this.py[e4] - a3, 2 * a3, 2 * a3);
        }
        t2.fill();
      }
      let $2 = this.focus, z2 = (e3) => !$2 || ("city" === $2.kind ? $2.index === e3 || 0 === e3 : y[e3].region === $2.index || 0 === e3), U2 = 1;
      for (let e3 = 0; e3 < g; e3++) U2 = Math.max(U2, this.snapshot.cityRevenue[e3]);
      for (let e3 = 0; e3 < g; e3++) {
        let i3 = ei[e3];
        if (b2(i3[0], i3[1], i3[2], x2), this.cityX[e3] = x2[0], this.cityY[e3] = x2[1], this.cityZ[e3] = x2[2], x2[2] <= 0 || 0 === e3)
          continue;
        let a3 = 1.3 + 2.1 * Math.sqrt(Math.max(0, this.snapshot.cityRevenue[e3]) / U2);
        t2.globalAlpha = (0.25 + 0.75 * x2[2]) * (z2(e3) ? 0.72 : 0.25) * Math.min(1, 1.4 * k2), t2.fillStyle = s2, t2.beginPath(), t2.arc(x2[0], x2[1], a3, 0, 2 * Math.PI), t2.fill();
      }
      let q2 = [], O2 = [0, 0, 0, 0], Z2 = (e3) => e3[2] >= 0 ? 4 : e3[3] > 1 ? Math.round(4 * V(-0.4, 0, e3[2])) : 0, B2 = (e3, i3, s3, a3, r3) => {
        let n3 = Math.max(2, Math.ceil((s3 - i3) * 56)), l3 = Math.sin(e3.omega), o3 = 0, h3 = 0, c3 = 0, u3 = 0;
        for (let d3 = 0; d3 <= n3; d3++) {
          let m3 = i3 + (s3 - i3) * d3 / n3, p3 = Math.sin((1 - m3) * e3.omega) / l3, f3 = Math.sin(m3 * e3.omega) / l3, v3 = 1 + a3 * Math.sin(Math.PI * m3);
          b2(
            (e3.from[0] * p3 + et[0] * f3) * v3,
            (e3.from[1] * p3 + et[1] * f3) * v3,
            (e3.from[2] * p3 + et[2] * f3) * v3,
            O2
          );
          let y2 = Z2(O2), g2 = d3 ? Math.min(y2, c3) : 0;
          g2 !== u3 && (u3 && t2.stroke(), g2 && (t2.globalAlpha = r3 * g2 / 4, t2.beginPath(), t2.moveTo(o3, h3)), u3 = g2), u3 && t2.lineTo(O2[0], O2[1]), o3 = O2[0], h3 = O2[1], c3 = y2;
        }
        return u3 && t2.stroke(), c3 / 4;
      };
      for (let i3 of (t2.lineCap = "round", t2.lineJoin = "round", this.reduced ? [] : this.arcs)) {
        let r3 = e2 - i3.born, n3 = 0.55 * i3.dur;
        if (r3 > i3.dur + 0.12 + n3) continue;
        q2.push(i3), !i3.landed && r3 >= i3.dur && (i3.landed = true, this.ripples.push({
          city: 0,
          born: i3.born + i3.dur,
          dur: 1.1,
          size: (i3.width - 1) / 1.6,
          strong: true
        }));
        let l3 = r3 < i3.dur ? Q(r3 / i3.dur) : 1, o3 = r3 < i3.dur + 0.12 ? 0 : Q((r3 - i3.dur - 0.12) / n3), h3 = r3 < i3.dur + 0.12 ? 1 : 1 - 0.6 * o3, c3 = z2(i3.tx.city) ? 1 : 0.22;
        if (l3 - o3 < 2e-3) continue;
        t2.strokeStyle = s2, t2.lineWidth = 1, B2(i3, o3, l3, 0, 0.1 * h3 * c3), t2.strokeStyle = a2, t2.lineWidth = i3.width;
        let u3 = B2(i3, o3, l3, i3.lift, 0.92 * h3 * c3);
        r3 < i3.dur && u3 > 0 && (t2.globalAlpha = 0.92 * c3 * u3, t2.fillStyle = a2, t2.beginPath(), t2.arc(O2[0], O2[1], 0.9 * i3.width + 1.1, 0, 2 * Math.PI), t2.fill());
      }
      if (this.reduced || (this.arcs = q2), this.reduced)
        for (let e3 of this.stills) {
          let i3 = ei[e3.city], s3 = Math.acos((0, D.q)(X(i3, et), -1, 1)), r3 = (0, D.q)(Math.log10(e3.amount / 5) / 3.8, 0, 1), n3 = {
            tx: e3,
            born: 0,
            dur: 1,
            from: i3,
            omega: s3,
            lift: 0.04 + s3 / Math.PI * 0.24,
            width: 1 + 1.6 * r3,
            landed: true
          };
          t2.strokeStyle = a2, t2.lineWidth = n3.width, B2(n3, 0, 1, n3.lift, 0.7 * (z2(e3.city) ? 1 : 0.22));
        }
      let Y2 = [0, 0, 0, 0];
      for (let i3 of (this.ripples = this.ripples.filter(
        (t3) => e2 - t3.born < t3.dur
      ), this.ripples)) {
        let r3 = e2 - i3.born;
        if (r3 < 0) continue;
        let n3 = r3 / i3.dur, l3 = ei[i3.city];
        if (this.cityZ[i3.city] <= 0.02) continue;
        let { east: o3, north: h3 } = es[i3.city], c3 = ee(n3) * (i3.strong ? 0.045 + 0.05 * i3.size : 0.02 + 0.03 * i3.size), u3 = Math.cos(c3), d3 = Math.sin(c3);
        t2.strokeStyle = i3.strong ? a2 : s2, t2.globalAlpha = Math.pow(1 - n3, 1.6) * (i3.strong ? 0.85 : 0.45) * (z2(i3.city) ? 1 : 0.3), t2.lineWidth = i3.strong ? 1.4 : 1, t2.beginPath();
        for (let e3 = 0; e3 <= 28; e3++) {
          let i4 = e3 / 28 * Math.PI * 2, s3 = Math.cos(i4) * d3, a3 = Math.sin(i4) * d3;
          b2(
            l3[0] * u3 + o3[0] * s3 + h3[0] * a3,
            l3[1] * u3 + o3[1] * s3 + h3[1] * a3,
            l3[2] * u3 + o3[2] * s3 + h3[2] * a3,
            Y2
          ), e3 ? t2.lineTo(Y2[0], Y2[1]) : t2.moveTo(Y2[0], Y2[1]);
        }
        t2.stroke();
      }
      let J2 = this.cityZ[0];
      if (J2 > 0) {
        let e3 = this.cityX[0], i3 = this.cityY[0], s3 = (0.35 + 0.65 * J2) * Math.min(1, 1.4 * k2);
        t2.globalAlpha = s3, t2.fillStyle = r2, t2.beginPath(), t2.arc(e3, i3, 5.2, 0, 2 * Math.PI), t2.fill(), t2.fillStyle = a2, t2.beginPath(), t2.arc(e3, i3, 3.6, 0, 2 * Math.PI), t2.fill(), this.label("San Francisco", e3 + 10, i3 + 4, s3, l2, r2, 400);
      }
      let W2 = /* @__PURE__ */ new Set(), K2 = [];
      if ($2?.kind === "city" && W2.add($2.index), $2?.kind === "region") {
        let e3 = this.snapshot.cityRevenue;
        y.map((e4, t3) => t3).filter((e4) => y[e4].region === $2.index && 0 !== e4).sort((t3, i3) => e3[i3] - e3[t3]).slice(0, 3).forEach((e4) => W2.add(e4));
      }
      for (let e3 of (null !== this.hover && W2.add(this.hover), null !== this.peeked && W2.add(this.peeked), W2)) {
        let i3 = this.cityZ[e3];
        if (i3 <= 0.08 || 0 === e3) continue;
        let n3 = this.cityX[e3], l3 = this.cityY[e3], o3 = $2?.kind === "city" && $2.index === e3;
        if (t2.globalAlpha = 0.4 + 0.6 * i3, t2.strokeStyle = o3 ? a2 : s2, t2.lineWidth = 1.25, t2.beginPath(), t2.arc(n3, l3, 7.5, 0, 2 * Math.PI), t2.stroke(), this.hover === e3 || this.peeked === e3 || o3)
          continue;
        let h3 = [n3 + 9, l3 - 9, n3 + 15 + 6.6 * y[e3].name.length, l3 + 8];
        K2.some(
          (e4) => h3[0] < e4[2] && h3[2] > e4[0] && h3[1] < e4[3] && h3[3] > e4[1]
        ) || (K2.push(h3), this.label(y[e3].name, n3 + 11, l3 + 4, 0.4 + 0.6 * i3, s2, r2, 500));
      }
      t2.globalAlpha = 1;
    }
    label(e2, t2, i2, s2, a2, r2, n2) {
      let l2 = this.ctx;
      l2 && (l2.font = `${n2} 12px ${this.font}`, l2.globalAlpha = s2, l2.lineJoin = "round", l2.lineWidth = 3.5, l2.strokeStyle = r2, l2.strokeText(e2, t2, i2), l2.fillStyle = a2, l2.fillText(e2, t2, i2));
    }
  }
  var el = i(93116), eo = i.n(el);
  let { spring: eh, duration: ec, ease: eu } = p.T, ed = ["00:00", "06:00", "12:00", "18:00", "24:00"], em = "(prefers-reduced-motion: reduce)", ep = (e2) => {
    let t2 = window.matchMedia(em);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  };
  function ef(e2, t2, i2) {
    e2.setAttribute("aria-valuenow", String(Math.round(t2))), e2.setAttribute("aria-valuetext", `${z(t2, false)} UTC`), e2.setAttribute("aria-valuemax", String(Math.round(i2)));
  }
  let ev = (e2, t2) => t2 > 0 ? Math.round(e2 / t2 * 100) : 0;
  function ey({ value: e2, prefix: t2 = "", reduce: i2 }) {
    let h2 = (0, r.d)(e2), c2 = (0, n.G)(h2, (e3) => t2 + T(Math.round(e3)));
    return (0, a.useEffect)(() => {
      if (i2) return void h2.jump(e2);
      let t3 = (0, l.i)(h2, e2, {
        duration: ec.considered,
        ease: [...eu.standard]
      });
      return () => t3.stop();
    }, [e2, i2, h2]), (0, s.jsx)(o.PY1.span, {
      className: eo().ticker,
      "aria-hidden": "true",
      children: c2
    });
  }
  function eg({ label: e2, value: t2, prefix: i2, reduce: a2 }) {
    return (0, s.jsxs)("div", {
      className: eo().stat,
      children: [
        (0, s.jsx)("span", { className: eo().statLabel, children: e2 }),
        (0, s.jsxs)("span", {
          className: eo().statValue,
          children: [
            (0, s.jsx)(ey, { value: t2, prefix: i2, reduce: a2 }),
            (0, s.jsx)("span", {
              className: eo().srOnly,
              children: (i2 ?? "") + T(Math.round(t2))
            })
          ]
        })
      ]
    });
  }
  function eb({ city: e2, snapshot: t2 }) {
    let i2 = y[e2];
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsxs)("div", {
          className: eo().tipHead,
          children: [
            (0, s.jsx)("span", { className: eo().tipName, children: i2.name }),
            (0, s.jsxs)("span", {
              className: eo().tipMeta,
              children: [
                0 === e2 ? "Headquarters" : f[i2.region].name,
                " \xB7 ",
                z(((t2.t + 3600 * i2.tz) % 86400 + 86400) % 86400, false),
                " local"
              ]
            })
          ]
        }),
        (0, s.jsxs)("dl", {
          className: eo().tipStats,
          children: [
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("dt", { children: "Today" }),
                (0, s.jsx)("dd", { children: F(t2.cityRevenue[e2]) })
              ]
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("dt", { children: "Payments" }),
                (0, s.jsx)("dd", { children: T(t2.cityCount[e2]) })
              ]
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("dt", { children: "Share" }),
                (0, s.jsxs)("dd", {
                  children: [
                    (t2.total > 0 ? t2.cityRevenue[e2] / t2.total * 100 : 0).toFixed(1),
                    "%"
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function ex() {
    let e2 = (0, a.useSyncExternalStore)(
      ep,
      () => window.matchMedia(em).matches,
      () => false
    ), t2 = (0, a.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), [i2, n2] = (0, a.useState)(() => L(60120)), [l2, p2] = (0, a.useState)("live"), [v2, g2] = (0, a.useState)(null), [b2, x2] = (0, a.useState)({ city: null, shown: false }), [M2, _2] = (0, a.useState)(""), [w2] = (0, a.useState)(() => {
      let e3 = N().bins, t3 = Math.max(...e3);
      return e3.map((e4) => e4 / t3);
    }), [k2] = (0, a.useState)(() => N().forecast), j2 = (0, a.useRef)(null), A2 = (0, a.useRef)(null), S2 = (0, a.useRef)(null), P2 = (0, a.useRef)(null), R2 = (0, a.useRef)(null), C2 = (0, a.useRef)(null), E2 = (0, a.useRef)(null), $2 = (0, a.useRef)(null), U2 = (0, r.d)(0), q2 = (0, r.d)(0), D2 = (0, h.z)(U2, eh.responsive), H2 = (0, h.z)(q2, eh.responsive);
    (0, a.useEffect)(() => {
      let t3 = A2.current, i3 = j2.current, s2 = P2.current;
      if (!t3 || !i3 || !s2) return;
      let a2 = { city: null, shown: false }, r2 = "", l3 = 0, o2 = new en(t3, i3, e2, {
        tick: n2,
        mode: (e3) => {
          p2(e3), _2(
            "live" === e3 ? "Back to live" : "replay" === e3 ? "Replaying today" : "Paused"
          );
        },
        focus: (e3) => {
          g2(e3), _2(
            e3 ? "city" === e3.kind ? `Camera on ${y[e3.index].name}` : `Camera on ${f[e3.index].name}` : "Selection cleared"
          );
        },
        hover: () => {
        },
        anchor: (e3, t4, s3, r3) => {
          let n3 = Math.min(Math.max(t4, 120), i3.clientWidth - 108 - 12), l4 = Math.max(s3, 132);
          r3 && (!a2.shown || null === a2.city) ? (U2.jump(n3), q2.jump(l4), D2.jump(n3), H2.jump(l4)) : r3 && (U2.set(n3), q2.set(l4)), (e3 !== a2.city || r3 !== a2.shown) && x2(a2 = { city: e3, shown: r3 });
        },
        frame: (e3, t4) => {
          let i4 = e3 / 86400 * 960;
          R2.current && (R2.current.style.transform = `translateX(${(e3 / 86400 * 100).toFixed(3)}cqw)`), C2.current?.setAttribute("width", i4.toFixed(1)), E2.current?.setAttribute("width", (t4 / 86400 * 960).toFixed(1));
          let a3 = z(e3);
          a3 !== r2 && $2.current && ($2.current.textContent = a3, r2 = a3);
          let n3 = performance.now();
          n3 - l3 > 600 && (l3 = n3, ef(s2, e3, t4));
        }
      });
      return S2.current = o2, () => {
        o2.destroy(), S2.current = null;
      };
    }, [e2, U2, q2, D2, H2]);
    let V2 = (e3) => S2.current?.select(e3), O2 = (e3, t3) => v2?.kind === e3 && v2.index === t3, X2 = (e3) => {
      let t3 = e3.currentTarget.getBoundingClientRect();
      S2.current?.scrubTo((e3.clientX - t3.left) / t3.width * 86400);
    }, Z2 = b2.city, B2 = i2.top[0], Y2 = `${F(i2.total)} revenue today from ${T(i2.count)} payments as of ${z(i2.t, false)} UTC. ${f.map((e3, t3) => `${e3.name} ${I(i2.regions[t3])}`).join(", ")}. ${y[B2].name} leads.`, J2 = { duration: e2 ? 0 : ec.standard, ease: [...eu.enter] };
    return (0, s.jsxs)("section", {
      className: eo().root,
      "aria-labelledby": `${t2}-title`,
      children: [
        (0, s.jsxs)("header", {
          className: eo().header,
          children: [
            (0, s.jsxs)("div", {
              className: eo().heading,
              children: [
                (0, s.jsx)("h2", {
                  id: `${t2}-title`,
                  className: eo().title,
                  children: "Payments today"
                }),
                (0, s.jsx)("p", {
                  className: eo().lede,
                  children: "40 cities settling to San Francisco. Drag to spin, pick a city to fly there."
                })
              ]
            }),
            (0, s.jsx)("p", {
              className: eo().meta,
              children: "Tuesday, 22 September"
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: eo().stage,
          children: [
            (0, s.jsxs)("div", {
              className: eo().viz,
              children: [
                (0, s.jsxs)("div", {
                  ref: j2,
                  className: eo().globe,
                  role: "region",
                  "aria-roledescription": "interactive globe",
                  "aria-label": "Revenue globe. Arrow keys spin it, Escape clears the selection.",
                  "aria-describedby": `${t2}-summary`,
                  tabIndex: 0,
                  onKeyDown: (e3) => {
                    let t3 = {
                      ArrowLeft: [1, 0],
                      ArrowRight: [-1, 0],
                      ArrowUp: [0, -1],
                      ArrowDown: [0, 1]
                    };
                    e3.key in t3 ? (S2.current?.nudge(...t3[e3.key]), e3.preventDefault()) : "Escape" === e3.key && S2.current?.clearFocus();
                  },
                  children: [
                    (0, s.jsx)("canvas", {
                      ref: A2,
                      className: eo().canvas,
                      "aria-hidden": "true"
                    }),
                    (0, s.jsx)(o.PY1.div, {
                      className: eo().tip,
                      style: { x: D2, y: H2, width: 216 },
                      initial: false,
                      animate: b2.shown && null !== Z2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 },
                      transition: e2 ? { duration: 0 } : { opacity: { duration: ec.fast }, scale: eh.snappy },
                      "aria-hidden": "true",
                      children: null !== Z2 && (0, s.jsx)(eb, { city: Z2, snapshot: i2 })
                    }),
                    (0, s.jsx)("p", {
                      id: `${t2}-summary`,
                      className: eo().srOnly,
                      children: Y2
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: eo().timeline,
                  children: [
                    (0, s.jsxs)("div", {
                      className: eo().controls,
                      children: [
                        !e2 && (0, s.jsxs)("button", {
                          type: "button",
                          className: eo().control,
                          onClick: () => S2.current?.replayDay(),
                          children: [
                            (0, s.jsx)(u.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            "Replay today"
                          ]
                        }),
                        !e2 && (0, s.jsx)("button", {
                          type: "button",
                          className: eo().iconControl,
                          "aria-label": "paused" === l2 ? "Play" : "Pause",
                          onClick: () => S2.current?.togglePlay(),
                          children: (0, s.jsx)(c.N, {
                            mode: "popLayout",
                            initial: false,
                            children: (0, s.jsx)(
                              o.PY1.span,
                              {
                                className: eo().iconSwap,
                                initial: { opacity: 0, scale: 0.8 },
                                animate: { opacity: 1, scale: 1 },
                                exit: { opacity: 0, scale: 0.8 },
                                transition: {
                                  duration: ec.fast,
                                  ease: [...eu.standard]
                                },
                                children: "paused" === l2 ? (0, s.jsx)(d.A, {
                                  size: 16,
                                  strokeWidth: 1.75
                                }) : (0, s.jsx)(m.A, {
                                  size: 16,
                                  strokeWidth: 1.75
                                })
                              },
                              "paused" === l2 ? "play" : "pause"
                            )
                          })
                        }),
                        (0, s.jsxs)("span", {
                          className: eo().clock,
                          children: [
                            (0, s.jsx)("span", { ref: $2, children: z(60120) }),
                            " UTC"
                          ]
                        }),
                        (0, s.jsxs)("button", {
                          type: "button",
                          className: eo().live,
                          "data-live": "live" === l2,
                          "aria-pressed": "live" === l2,
                          onClick: () => S2.current?.goLive(),
                          children: [
                            (0, s.jsx)("span", {
                              className: eo().liveDot,
                              "aria-hidden": "true"
                            }),
                            e2 ? "Now" : "live" === l2 ? "Live" : "Go live"
                          ]
                        })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      ref: P2,
                      className: eo().slider,
                      role: "slider",
                      tabIndex: 0,
                      "aria-label": "Time of day, UTC",
                      "aria-valuemin": 0,
                      "aria-valuemax": 60120,
                      "aria-valuenow": 60120,
                      "aria-valuetext": `${z(60120, false)} UTC`,
                      onKeyDown: (e3) => {
                        let t3 = S2.current;
                        if (!t3) return;
                        let i3 = e3.shiftKey ? 3600 : 300, s2 = {
                          ArrowLeft: -i3,
                          ArrowDown: -i3,
                          ArrowRight: i3,
                          ArrowUp: i3,
                          PageDown: -3600,
                          PageUp: 3600
                        };
                        if (e3.key in s2) t3.seek(t3.time + s2[e3.key]);
                        else if ("Home" === e3.key) t3.seek(0);
                        else {
                          if ("End" !== e3.key) return;
                          t3.goLive();
                        }
                        e3.preventDefault(), ef(e3.currentTarget, t3.time, t3.live);
                      },
                      onPointerDown: (e3) => {
                        e3.currentTarget.setPointerCapture(e3.pointerId), S2.current?.scrubStart(), X2(e3);
                      },
                      onPointerMove: (e3) => {
                        e3.currentTarget.hasPointerCapture(e3.pointerId) && X2(e3);
                      },
                      onPointerUp: () => S2.current?.scrubEnd(),
                      onPointerCancel: () => S2.current?.scrubEnd(),
                      children: [
                        (0, s.jsxs)("svg", {
                          className: eo().bins,
                          viewBox: "0 0 960 40",
                          preserveAspectRatio: "none",
                          "aria-hidden": "true",
                          children: [
                            (0, s.jsxs)("defs", {
                              children: [
                                (0, s.jsx)("clipPath", {
                                  id: `${t2}-available`,
                                  children: (0, s.jsx)("rect", {
                                    ref: E2,
                                    x: "0",
                                    y: "0",
                                    width: 668,
                                    height: "40"
                                  })
                                }),
                                (0, s.jsx)("clipPath", {
                                  id: `${t2}-played`,
                                  children: (0, s.jsx)("rect", {
                                    ref: C2,
                                    x: "0",
                                    y: "0",
                                    width: 668,
                                    height: "40"
                                  })
                                })
                              ]
                            }),
                            (0, s.jsx)("g", {
                              className: eo().binsFuture,
                              children: w2.map(
                                (e3, t3) => (0, s.jsx)(
                                  "rect",
                                  {
                                    x: 10 * t3 + 1.5,
                                    y: 38.5,
                                    width: 7,
                                    height: 1.5
                                  },
                                  t3
                                )
                              )
                            }),
                            (0, s.jsx)("g", {
                              className: eo().binsBase,
                              clipPath: `url(#${t2}-available)`,
                              children: w2.map(
                                (e3, t3) => (0, s.jsx)(
                                  "rect",
                                  {
                                    x: 10 * t3 + 1.5,
                                    y: 40 - Math.max(1.5, 36 * e3),
                                    width: 7,
                                    height: Math.max(1.5, 36 * e3)
                                  },
                                  t3
                                )
                              )
                            }),
                            (0, s.jsx)("g", {
                              className: eo().binsPlayed,
                              clipPath: `url(#${t2}-played)`,
                              children: w2.map(
                                (e3, t3) => (0, s.jsx)(
                                  "rect",
                                  {
                                    x: 10 * t3 + 1.5,
                                    y: 40 - Math.max(1.5, 36 * e3),
                                    width: 7,
                                    height: Math.max(1.5, 36 * e3)
                                  },
                                  t3
                                )
                              )
                            })
                          ]
                        }),
                        (0, s.jsx)("span", {
                          ref: R2,
                          className: eo().thumb,
                          style: {
                            transform: `translateX(${(0.6958333333333333 * 100).toFixed(3)}cqw)`
                          },
                          "aria-hidden": "true",
                          children: (0, s.jsx)("span", {
                            className: eo().thumbLine
                          })
                        })
                      ]
                    }),
                    (0, s.jsx)("div", {
                      className: eo().hours,
                      "aria-hidden": "true",
                      children: ed.map(
                        (e3) => (0, s.jsx)("span", { children: e3 }, e3)
                      )
                    })
                  ]
                })
              ]
            }),
            (0, s.jsxs)("aside", {
              className: eo().panel,
              "aria-label": "Key numbers",
              children: [
                (0, s.jsxs)("div", {
                  className: eo().kpi,
                  children: [
                    (0, s.jsx)("span", {
                      className: eo().kpiLabel,
                      children: "Revenue today"
                    }),
                    (0, s.jsxs)("span", {
                      className: eo().kpiValue,
                      children: [
                        (0, s.jsx)(ey, {
                          value: i2.total,
                          prefix: "$",
                          reduce: e2
                        }),
                        (0, s.jsx)("span", {
                          className: eo().srOnly,
                          children: F(i2.total)
                        })
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      className: eo().stats,
                      children: [
                        (0, s.jsx)(eg, {
                          label: "Payments",
                          value: i2.count,
                          reduce: e2
                        }),
                        (0, s.jsx)(eg, {
                          label: "Last hour",
                          value: i2.lastHour,
                          prefix: "$",
                          reduce: e2
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: eo().group,
                  children: [
                    (0, s.jsxs)("div", {
                      className: eo().groupHead,
                      children: [
                        (0, s.jsx)("h3", { children: "Regions" }),
                        (0, s.jsx)("span", { children: "Today vs forecast" })
                      ]
                    }),
                    (0, s.jsx)("ul", {
                      className: eo().list,
                      children: f.map((t3, a2) => {
                        let r2 = i2.regions[a2];
                        return (0, s.jsx)(
                          "li",
                          {
                            children: (0, s.jsxs)("button", {
                              type: "button",
                              className: eo().row,
                              "aria-pressed": O2("region", a2),
                              onClick: () => V2({ kind: "region", index: a2 }),
                              children: [
                                (0, s.jsxs)("span", {
                                  className: eo().rowHead,
                                  children: [
                                    (0, s.jsxs)("span", {
                                      className: eo().rowName,
                                      children: [
                                        t3.name,
                                        (0, s.jsxs)("span", {
                                          className: eo().rowMeta,
                                          children: [
                                            ev(r2, k2[a2]),
                                            "% of forecast"
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, s.jsxs)("span", {
                                      className: eo().rowValue,
                                      children: [
                                        (0, s.jsx)(ey, {
                                          value: r2,
                                          prefix: "$",
                                          reduce: e2
                                        }),
                                        (0, s.jsx)("span", {
                                          className: eo().srOnly,
                                          children: F(r2)
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                (0, s.jsx)("span", {
                                  className: eo().bar,
                                  "aria-hidden": "true",
                                  children: (0, s.jsx)("span", {
                                    className: eo().track,
                                    children: (0, s.jsx)(o.PY1.span, {
                                      className: eo().fill,
                                      initial: false,
                                      animate: {
                                        scaleX: Math.min(1, r2 / k2[a2])
                                      },
                                      transition: e2 ? { duration: 0 } : eh.smooth
                                    })
                                  })
                                }),
                                (0, s.jsxs)("span", {
                                  className: eo().srOnly,
                                  children: [
                                    ", ",
                                    ev(r2, i2.total),
                                    "% of today\u2019s revenue, forecast ",
                                    I(k2[a2])
                                  ]
                                })
                              ]
                            })
                          },
                          t3.id
                        );
                      })
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: eo().group,
                  children: [
                    (0, s.jsxs)("div", {
                      className: eo().groupHead,
                      children: [
                        (0, s.jsx)("h3", { children: "Top cities" }),
                        (0, s.jsx)("span", { children: "Today" })
                      ]
                    }),
                    (0, s.jsx)("ol", {
                      className: eo().list,
                      children: (0, s.jsx)(c.N, {
                        initial: false,
                        mode: "popLayout",
                        children: i2.top.map(
                          (t3) => (0, s.jsx)(
                            o.PY1.li,
                            {
                              layout: !e2,
                              initial: { opacity: 0, y: 6 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0 },
                              transition: e2 ? { duration: 0 } : { layout: eh.smooth, default: J2 },
                              children: (0, s.jsxs)("button", {
                                type: "button",
                                className: `${eo().row} ${eo().cityRow}`,
                                "aria-pressed": O2("city", t3),
                                onClick: () => V2({ kind: "city", index: t3 }),
                                onFocus: () => S2.current?.peek(t3),
                                onBlur: () => S2.current?.peek(null),
                                onPointerMove: () => S2.current?.peek(t3),
                                onPointerLeave: () => S2.current?.peek(null),
                                children: [
                                  (0, s.jsxs)("span", {
                                    className: eo().rowName,
                                    children: [
                                      y[t3].name,
                                      (0, s.jsx)("span", {
                                        className: eo().rowMeta,
                                        children: y[t3].country
                                      })
                                    ]
                                  }),
                                  (0, s.jsxs)("span", {
                                    className: eo().rowValue,
                                    children: [
                                      (0, s.jsx)(ey, {
                                        value: i2.cityRevenue[t3],
                                        prefix: "$",
                                        reduce: e2
                                      }),
                                      (0, s.jsx)("span", {
                                        className: eo().srOnly,
                                        children: F(i2.cityRevenue[t3])
                                      })
                                    ]
                                  })
                                ]
                              })
                            },
                            t3
                          )
                        )
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("p", {
          className: eo().srOnly,
          "aria-live": "polite",
          children: M2
        }),
        (0, s.jsx)("div", {
          className: eo().srOnly,
          children: (0, s.jsxs)("table", {
            children: [
              (0, s.jsxs)("caption", {
                children: ["Revenue by city today, as of ", z(i2.t, false), " UTC"]
              }),
              (0, s.jsx)("thead", {
                children: (0, s.jsxs)("tr", {
                  children: [
                    (0, s.jsx)("th", { scope: "col", children: "City" }),
                    (0, s.jsx)("th", { scope: "col", children: "Region" }),
                    (0, s.jsx)("th", { scope: "col", children: "Revenue" }),
                    (0, s.jsx)("th", { scope: "col", children: "Payments" })
                  ]
                })
              }),
              (0, s.jsx)("tbody", {
                children: y.map(
                  (e3, t3) => (0, s.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, s.jsx)("th", { scope: "row", children: e3.name }),
                        (0, s.jsx)("td", { children: f[e3.region].name }),
                        (0, s.jsx)("td", { children: F(i2.cityRevenue[t3]) }),
                        (0, s.jsx)("td", { children: T(i2.cityCount[t3]) })
                      ]
                    },
                    e3.name
                  )
                )
              })
            ]
          })
        })
      ]
    });
  }
  let eM = ex;
}

__m(__module,__exports,__require);
});
A.regCss(93116, ".root{box-sizing:border-box;width:min(100%,1280px);min-width:0;margin-inline:auto;overflow:hidden;container-type:inline-size;contain-intrinsic-inline-size:1280px;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:4px 24px;padding:16px 20px;border-bottom:1px solid var(--border)}\n@container (max-width: 600px){.header{padding:16px}\n.heading{min-width:0;max-width:640px}\n.title{margin:0;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.lede{margin:2px 0 0;color:var(--text-secondary);text-wrap:pretty}\n.meta{margin:0;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}\n.stage{display:grid;grid-template-columns:minmax(0,1fr) 320px}\n@container (max-width: 880px){.stage{grid-template-columns:minmax(0,1fr)}\n.viz{display:flex;flex-direction:column;min-width:0}\n.globe{position:relative;height:clamp(320px,52cqi,580px);overflow:hidden;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.globe{height:clamp(340px,66cqi,560px)}\n.globe{height:clamp(300px,96cqi,440px)}\n.canvas{position:absolute;inset:0;display:block;width:100%;height:100%;touch-action:pan-y;user-select:none;-webkit-user-select:none;cursor:grab}\n.tip{position:absolute;top:0;left:0;z-index:1;translate:-50% calc(-100% - 16px);padding:10px 12px;border:1px solid var(--border);border-radius:12px;background:var(--surface-raised);box-shadow:var(--shadow-floating);pointer-events:none;transform-origin:50% 100%}\n.tip{padding:10px 12px}\n.tipHead{display:flex;flex-direction:column;gap:1px}\n.tipName{font-weight:500}\n.tipMeta{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.tipStats{display:grid;grid-template-columns:1.3fr 1fr .8fr;gap:8px;margin:10px 0 0}\n.tipStats div{min-width:0}\n.tipStats dt{color:var(--text-muted);font-size:var(--text-xs)}\n.tipStats dd{margin:0;font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap}\n.timeline{padding:4px 20px 16px}\n.timeline{padding:4px 16px 16px}\n.controls{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:12px}\n.control,.iconControl,.live{display:inline-flex;flex:none;align-items:center;justify-content:center;gap:6px;height:32px;padding:0 12px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--foreground);font:inherit;font-weight:500;letter-spacing:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.control svg{color:var(--text-secondary)}\n.control:active,.iconControl:active,.live:active{transform:scale(.97)}\n@media (hover:hover) and (pointer:fine){.control:hover,.iconControl:hover,.live:hover,.row:hover{background:var(--surface-muted)}\n.control{padding:0 12px}\n@media (prefers-reduced-motion:reduce){.control,.iconControl,.liveDot,.live,.row,.thumbLine:after{transition:none}\n.control:active,.iconControl:active,.live:active{transform:none}\n.iconControl{position:relative;width:32px;padding:0;overflow:hidden}\n.live{gap:6px;min-width:88px}\n.live[data-live=true]{border-color:transparent;background:var(--surface-muted)}\n.live[data-live=true] .liveDot{background:var(--success)}\n.iconSwap{display:inline-flex}\n.row:active{background:var(--surface-muted)}\n.row[aria-pressed=true]:active{background:var(--accent-subtle)}\n.row{display:flex;flex-direction:column;gap:6px;width:100%;min-width:0;padding:7px 8px;border:0;border-radius:8px;background:transparent;color:inherit;font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.row[aria-pressed=true]{background:var(--accent-subtle)}\n.row[aria-pressed=true]:hover{background:var(--accent-subtle)}\n.clock{margin-left:auto;color:var(--text-secondary);font-variant-numeric:tabular-nums;white-space:nowrap}\n.clock>span{color:var(--foreground);font-weight:500}\n@container (max-width: 400px){.clock{flex-basis:100%;order:-1;margin-left:0}\n.liveDot{width:7px;height:7px;border-radius:var(--radius-pill);background:var(--text-muted);transition:background-color var(--duration-standard) var(--ease-standard)}\n.slider{position:relative;height:44px;container-type:inline-size;cursor:ew-resize;touch-action:none;-webkit-tap-highlight-color:transparent}\n.slider:active .thumbLine:after{scale:1.3}\n.bins{display:block;width:100%;height:40px}\n.binsFuture rect{fill:var(--border)}\n.binsBase rect{fill:var(--border-strong)}\n.binsPlayed rect{fill:color-mix(in oklab,var(--accent) 72%,var(--surface))}\n.thumb{position:absolute;top:-4px;bottom:0;left:0;width:0;pointer-events:none;will-change:transform}\n.thumbLine{position:absolute;top:0;bottom:0;left:-1px;width:2px;border-radius:var(--radius-pill);background:var(--accent)}\n.thumbLine:after{position:absolute;top:-3px;left:-4px;width:10px;height:10px;border:2px solid var(--surface);border-radius:var(--radius-pill);background:var(--accent);content:\"\";transition:scale var(--duration-fast) var(--ease-standard)}\n.hours{display:flex;justify-content:space-between;margin-top:6px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.panel{display:flex;flex-direction:column;gap:20px;min-width:0;padding:16px 12px;border-left:1px solid var(--border)}\n.panel{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;padding:16px 12px;border-top:1px solid var(--border);border-left:0}\n.panel{grid-template-columns:minmax(0,1fr);padding:16px 8px}\n.kpi{display:flex;flex-direction:column;padding-inline:8px}\n.kpi{grid-column:1/-1}\n.kpiLabel,.statLabel{color:var(--text-secondary)}\n.kpiValue{margin-top:2px;font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.15}\n.kpiValue{font-size:var(--text-xl)}\n.ticker{font-variant-numeric:tabular-nums;white-space:nowrap}\n.stats{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px}\n.stats{max-width:420px}\n.stat{display:flex;flex-direction:column;gap:2px;min-width:0}\n.rowValue,.statValue{display:inline-flex;font-weight:500}\n.statValue{font-size:var(--text-base)}\n.group{display:flex;flex-direction:column;min-width:0}\n.groupHead{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:6px;padding-inline:8px}\n.groupHead h3{margin:0;font-size:inherit;font-weight:500}\n.groupHead span{color:var(--text-muted);font-size:var(--text-xs)}\n.list{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}\n.list>li{display:flex;min-width:0}\n.cityRow{flex-direction:row;align-items:center;justify-content:space-between;gap:12px}\n.rowHead{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%}\n.rowName{display:inline-flex;align-items:baseline;gap:8px;min-width:0;overflow:hidden;font-weight:500;white-space:nowrap;text-overflow:ellipsis}\n.rowMeta{color:var(--text-muted);font-size:var(--text-xs);font-weight:400;font-variant-numeric:tabular-nums}\n.bar{display:block;width:100%;height:4px}\n.track{display:block;height:100%;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted)}\n.fill{display:block;width:100%;height:100%;background:var(--accent);transform-origin:0 50%}", {"root":"root","srOnly":"srOnly","header":"header","heading":"heading","title":"title","lede":"lede","meta":"meta","stage":"stage","viz":"viz","globe":"globe","canvas":"canvas","tip":"tip","tipHead":"tipHead","tipName":"tipName","tipMeta":"tipMeta","tipStats":"tipStats","timeline":"timeline","controls":"controls","control":"control","iconControl":"iconControl","live":"live","row":"row","liveDot":"liveDot","thumbLine":"thumbLine","iconSwap":"iconSwap","clock":"clock","slider":"slider","bins":"bins","binsFuture":"binsFuture","binsBase":"binsBase","binsPlayed":"binsPlayed","thumb":"thumb","hours":"hours","panel":"panel","kpi":"kpi","kpiLabel":"kpiLabel","statLabel":"statLabel","kpiValue":"kpiValue","ticker":"ticker","stats":"stats","stat":"stat","rowValue":"rowValue","statValue":"statValue","group":"group","groupHead":"groupHead","list":"list","cityRow":"cityRow","rowHead":"rowHead","rowName":"rowName","rowMeta":"rowMeta","bar":"bar","track":"track","fill":"fill"});
A.cssFor("revenue-globe", [93116]);
A.item("revenue-globe", {entry:40742, export:"RevenueGlobe", kind:"block", tier:"pro", unresolved:[]});
})();