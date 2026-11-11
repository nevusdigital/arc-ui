function(__module,__exports,__require){
"use strict";
function __m(t, e, a) {
  "use strict";
  a.r(e), a.d(e, { LayoutMorph: () => tv, default: () => tM });
  var s = a(95155), i = a(5772), r = a(12115), n = a(18310), h = a(9937), o = a(25354), l = a(85618), c = a(49960), d = a(58309), A = a(19707), p = a(50858), m = a(51811);
  let u = {
    name: "dna",
    size: 24,
    node: [
      ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }],
      ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }],
      [
        "path",
        { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" }
      ],
      ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
      ["path", { d: "m17 6-2.891-2.891", key: "xu6p2f" }],
      ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }],
      ["path", { d: "m20 9 .891.891", key: "3xwk7g" }],
      ["path", { d: "M3.109 14.109 4 15", key: "q76aoh" }],
      ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
      ["path", { d: "m7 18 2.891 2.891", key: "1sisit" }],
      [
        "path",
        { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" }
      ]
    ]
  };
  u.node;
  let g = (0, m.A)(u);
  var y = a(9005), f = a(64577), b = a(2125), w = a(7770), k = a(16725), x = a(97577), v = a(30804), M = a(24267), _ = a(23847);
  let I = [
    {
      kind: "photo",
      id: "dome-lamp",
      name: "Opal table lamp",
      by: "Daniel Kim",
      meta: "Hand-blown glass",
      image: k.A,
      alt: "A white mushroom table lamp glowing beside books and a small vase",
      price: 248,
      stock: 14,
      rating: 4.8,
      size: "52 cm tall",
      ships: "2 days",
      desc: "A hand-blown opal glass shade on a slim base. A warm pool of light for a desk or a side table.",
      aspect: 1.5
    },
    {
      kind: "photo",
      id: "linen-throw",
      name: "Oat linen throw",
      by: "Sofia Ramirez",
      meta: "Stonewashed linen",
      image: x.A,
      alt: "Folded natural linen throws with fringed edges in soft window light",
      price: 186,
      stock: 22,
      rating: 4.9,
      size: "130 \xD7 170 cm",
      ships: "3 days",
      desc: "Woven on a floor loom in Oaxaca and washed until soft. Frayed edges, no two quite alike.",
      aspect: 1.25
    },
    {
      kind: "photo",
      id: "lounge-chair",
      name: "Oak lounge chair",
      by: "Ryan Sullivan",
      meta: "Woven seat and oak",
      image: v.A,
      alt: "A woven oak lounge chair with a sheepskin and linen cushion",
      price: 1240,
      stock: 3,
      rating: 4.7,
      size: "78 \xD7 82 \xD7 74 cm",
      ships: "6 weeks",
      desc: "A low sling seat woven by hand and built on a solid oak frame. Made to order.",
      aspect: 1.35
    },
    {
      kind: "photo",
      id: "night-carafe",
      name: "Night carafe set",
      by: "Ava Mitchell",
      meta: "Mouth-blown glass",
      image: M.A,
      alt: "Water poured from a ribbed glass carafe into tumblers",
      price: 64,
      stock: 38,
      rating: 4.8,
      size: "1 L with two tumblers",
      ships: "2 days",
      desc: "A bedside carafe with a tumbler that nests in its neck. Blown from recycled glass and annealed overnight.",
      aspect: 0.8
    },
    {
      kind: "photo",
      id: "dusk-print",
      name: "Dusk at Berlenga",
      by: "Chloe Nguyen",
      meta: "Archival pigment print",
      image: _.A,
      alt: "A low island on a calm sea at dusk",
      price: 120,
      stock: 25,
      rating: 5,
      size: "50 \xD7 50 cm",
      ships: "4 days",
      desc: "An open edition from the Portuguese coast, printed on cotton rag and signed on the back.",
      aspect: 1
    },
    {
      kind: "type",
      id: "travertine-tray",
      name: "Travertine tray",
      by: "Jasmine Brooks",
      meta: "Honed travertine",
      price: 96,
      stock: 17,
      rating: 4.6,
      size: "32 \xD7 18 cm",
      ships: "3 days",
      desc: "Cut from architectural offcuts and honed to a soft matte finish. Heavy enough to stay put.",
      aspect: 0.9
    },
    {
      kind: "type",
      id: "mug-pair",
      name: "Stoneware mug pair",
      by: "Emma Collins",
      meta: "Speckled stoneware",
      price: 58,
      stock: 41,
      rating: 4.9,
      size: "350 ml each",
      ships: "2 days",
      desc: "Thrown in small batches and glazed on the inside only, so the clay stays warm to the touch.",
      aspect: 1.1
    },
    {
      kind: "type",
      id: "serving-board",
      name: "Oak serving board",
      by: "Marcus Johnson",
      meta: "White oak, oiled",
      price: 72,
      stock: 26,
      rating: 4.7,
      size: "48 \xD7 22 cm",
      ships: "2 days",
      desc: "Milled from a single fallen white oak and finished with food safe oil and beeswax.",
      aspect: 0.75
    },
    {
      kind: "type",
      id: "floor-cushion",
      name: "Wool floor cushion",
      by: "Olivia Bennett",
      meta: "Felted wool",
      price: 134,
      stock: 12,
      rating: 4.8,
      size: "60 cm round",
      ships: "5 days",
      desc: "Wet-felted merino over a buckwheat core. Firm enough for reading on the floor for an hour.",
      aspect: 1
    },
    {
      kind: "type",
      id: "taper-pair",
      name: "Beeswax taper pair",
      by: "Hannah Walsh",
      meta: "Pure beeswax",
      price: 24,
      stock: 96,
      rating: 4.9,
      size: "30 cm, 9 hour burn",
      ships: "1 day",
      desc: "Hand dipped in batches of forty from local beeswax. They burn clean and smell faintly of honey.",
      aspect: 1.4
    },
    {
      kind: "type",
      id: "napkin-set",
      name: "Linen napkin set",
      by: "Sofia Ramirez",
      meta: "Washed linen, set of 4",
      price: 42,
      stock: 54,
      rating: 4.8,
      size: "45 \xD7 45 cm",
      ships: "3 days",
      desc: "Offcuts from the throw loom, hemmed by hand. They soften with every wash.",
      aspect: 0.85
    },
    {
      kind: "type",
      id: "brass-bookends",
      name: "Brass bookends",
      by: "Daniel Kim",
      meta: "Solid brass, pair",
      price: 110,
      stock: 9,
      rating: 4.7,
      size: "14 cm tall",
      ships: "2 days",
      desc: "Turned on the same lathe as the dome lamp. They darken slowly into a soft brown.",
      aspect: 1.2
    },
    {
      kind: "type",
      id: "walnut-stool",
      name: "Walnut stool",
      by: "Marcus Johnson",
      meta: "Black walnut",
      price: 390,
      stock: 6,
      rating: 4.9,
      size: "45 cm tall",
      ships: "3 weeks",
      desc: "Three legs wedged through a thick seat, so it sits steady on any floor.",
      aspect: 1.3
    },
    {
      kind: "type",
      id: "glaze-vase",
      name: "Ash glaze vase",
      by: "Emma Collins",
      meta: "Wood-fired stoneware",
      price: 84,
      stock: 7,
      rating: 4.9,
      size: "24 cm tall",
      ships: "2 days",
      desc: "Wood ash settles on the shoulder in the kiln and runs into a glaze no one can plan.",
      aspect: 1.15
    }
  ], j = [
    {
      id: "emma-collins",
      name: "Emma Collins",
      craft: "Ceramicist",
      city: "Portland",
      image: {
        src: "_next/static/media/emma-collins.572dfe2a.svg",
        height: 1e3,
        width: 800,
        blurWidth: 0,
        blurHeight: 0
      },
      orders: 2140,
      rating: 4.9,
      since: 2016,
      bio: "Throws small batches of tableware in a converted garage studio and fires twice a month.",
      aspect: 1.3
    },
    {
      id: "sofia-ramirez",
      name: "Sofia Ramirez",
      craft: "Weaver",
      city: "Oaxaca",
      image: {
        src: "_next/static/media/sofia-ramirez.96a8ad16.svg",
        height: 1e3,
        width: 800,
        blurWidth: 0,
        blurHeight: 0
      },
      orders: 1386,
      rating: 4.9,
      since: 2018,
      bio: "Works with a cooperative of four looms and dyes linen with cochineal and indigo.",
      aspect: 1.45
    },
    {
      id: "ava-mitchell",
      name: "Ava Mitchell",
      craft: "Glassblower",
      city: "Leeds",
      image: {
        src: "_next/static/media/ava-mitchell.6a1eefa2.svg",
        height: 1e3,
        width: 800,
        blurWidth: 0,
        blurHeight: 0
      },
      orders: 964,
      rating: 4.8,
      since: 2017,
      bio: "Blows every piece from recycled cullet and anneals it overnight in a small electric kiln.",
      aspect: 1.2
    },
    {
      id: "marcus-johnson",
      name: "Marcus Johnson",
      craft: "Woodworker",
      city: "Asheville",
      image: {
        src: "_next/static/media/marcus-johnson.8fdd17e3.svg",
        height: 1e3,
        width: 800,
        blurWidth: 0,
        blurHeight: 0
      },
      orders: 1057,
      rating: 4.8,
      since: 2015,
      bio: "Mills fallen hardwood from the Blue Ridge and finishes everything with oil and wax.",
      aspect: 1.5
    },
    {
      id: "jasmine-brooks",
      name: "Jasmine Brooks",
      craft: "Stonemason",
      city: "Glasgow",
      image: {
        src: "_next/static/media/jasmine-brooks.83a8d7a6.svg",
        height: 1e3,
        width: 800,
        blurWidth: 0,
        blurHeight: 0
      },
      orders: 402,
      rating: 4.6,
      since: 2021,
      bio: "Turns offcuts from architectural projects into trays, coasters and small tables.",
      aspect: 1.25
    },
    {
      id: "ryan-sullivan",
      name: "Ryan Sullivan",
      craft: "Upholsterer",
      city: "Copenhagen",
      image: {
        src: "_next/static/media/ryan-sullivan.13212520.svg",
        height: 1e3,
        width: 800,
        blurWidth: 0,
        blurHeight: 0
      },
      orders: 312,
      rating: 4.7,
      since: 2019,
      bio: "Builds each frame from Danish oak and upholsters it by hand in a two person workshop.",
      aspect: 1
    },
    {
      id: "daniel-kim",
      name: "Daniel Kim",
      craft: "Metalworker",
      city: "Milan",
      image: {
        src: "_next/static/media/daniel-kim.4b1a9a76.svg",
        height: 1e3,
        width: 800,
        blurWidth: 0,
        blurHeight: 0
      },
      orders: 781,
      rating: 4.8,
      since: 2014,
      bio: "Spins and brushes steel and brass on a lathe his grandfather bought in 1962.",
      aspect: 1.1
    },
    {
      id: "chloe-nguyen",
      name: "Chloe Nguyen",
      craft: "Photographer",
      city: "Lisbon",
      image: {
        src: "_next/static/media/chloe-nguyen.35da4317.svg",
        height: 1e3,
        width: 800,
        blurWidth: 0,
        blurHeight: 0
      },
      orders: 528,
      rating: 5,
      since: 2020,
      bio: "Photographs the Atlantic coast at first and last light and prints in open editions.",
      aspect: 1.2
    },
    {
      id: "hannah-walsh",
      name: "Hannah Walsh",
      craft: "Chandler",
      city: "Lagos",
      image: {
        src: "_next/static/media/hannah-walsh.1b134a0a.svg",
        height: 1e3,
        width: 800,
        blurWidth: 0,
        blurHeight: 0
      },
      orders: 2690,
      rating: 4.9,
      since: 2019,
      bio: "Pours and dips tapers from local beeswax in a shared kitchen studio.",
      aspect: 1
    },
    {
      id: "olivia-bennett",
      name: "Olivia Bennett",
      craft: "Felter",
      city: "Mexico City",
      image: {
        src: "_next/static/media/olivia-bennett.c54c2896.svg",
        height: 1e3,
        width: 800,
        blurWidth: 0,
        blurHeight: 0
      },
      orders: 645,
      rating: 4.8,
      since: 2018,
      bio: "Wet-felts merino and local wool into cushions, rugs and soft objects.",
      aspect: 1.35
    }
  ], C = (t2) => `$${t2.toLocaleString("en-US")}`, E = new Map(
    [
      ...I.map(function(t2) {
        return {
          id: t2.id,
          kind: t2.kind,
          name: t2.name,
          by: t2.by,
          meta: t2.meta,
          image: t2.image,
          alt: t2.alt ?? "",
          desc: t2.desc,
          stats: [t2.price, t2.stock, t2.rating],
          aspect: t2.aspect,
          facts: [
            ["Price", C(t2.price)],
            ["Size", t2.size],
            ["In stock", String(t2.stock)],
            ["Ships in", t2.ships]
          ]
        };
      }),
      ...j.map(function(t2) {
        let e2 = I.filter((e3) => e3.by === t2.name).length;
        return {
          id: t2.id,
          kind: "maker",
          name: t2.name,
          by: t2.craft,
          meta: t2.city,
          image: t2.image,
          alt: `Portrait of ${t2.name}`,
          desc: t2.bio,
          stats: [e2, t2.orders, t2.rating],
          aspect: t2.aspect,
          facts: [
            ["Pieces here", String(e2)],
            ["Orders", t2.orders.toLocaleString("en-US")],
            ["Rating", t2.rating.toFixed(1)],
            ["Since", String(t2.since)]
          ]
        };
      })
    ].map((t2) => [t2.id, t2])
  ), D = [
    "travertine-tray",
    "emma-collins",
    "dome-lamp",
    "sofia-ramirez",
    "mug-pair",
    "ava-mitchell",
    "floor-cushion",
    "linen-throw",
    "marcus-johnson",
    "serving-board",
    "jasmine-brooks",
    "lounge-chair",
    "ryan-sullivan",
    "taper-pair",
    "daniel-kim",
    "napkin-set",
    "night-carafe",
    "chloe-nguyen",
    "brass-bookends",
    "hannah-walsh",
    "walnut-stool",
    "dusk-print",
    "olivia-bennett",
    "glaze-vase"
  ].map((t2) => E.get(t2)), N = {
    photo: ["Price", "In stock", "Rating"],
    type: ["Price", "In stock", "Rating"],
    maker: ["Pieces", "Orders", "Rating"],
    summary: ["Pieces", "Makers", "Avg rating"]
  }, P = I.map((t2) => t2.rating), F = [
    I.length,
    j.length,
    Math.round(P.reduce((t2, e2) => t2 + e2, 0) / P.length * 10) / 10
  ];
  function B(t2, e2) {
    let a2 = 2 * Math.PI / (1.2 * t2), s2 = a2 * a2;
    return { k: s2, c: 2 * Math.min(1, Math.max(0.05, 1 - e2)) * Math.sqrt(s2) };
  }
  let { morph: Q, smooth: T, snappy: S, responsive: $ } = w.T.spring, R = B(1.3 * Q.visualDuration, Q.bounce), z = B(0.22, 0), U = B(S.visualDuration, S.bounce), L = B(1.35 * T.visualDuration, 0.04), V = B(1.25 * Q.visualDuration, 0.1), Y = { k: $.stiffness, c: $.damping }, G = 9 * w.T.stagger.item, W = [
    0.08,
    0.08,
    0.08,
    0.08,
    0.08,
    6e-4,
    6e-4,
    6e-4,
    0.05,
    0.08,
    0.08,
    0.08,
    0.08,
    0.05,
    2e-3,
    2e-3,
    2e-3,
    2e-3,
    2e-3,
    2e-3
  ], O = (t2, e2, a2) => Math.min(a2, Math.max(e2, t2)), K = (t2, e2, a2) => {
    let s2 = O((a2 - t2) / (e2 - t2), 0, 1);
    return s2 * s2 * (3 - 2 * s2);
  }, X = (t2) => t2 - 2 * Math.round(t2 / (2 * Math.PI)) * Math.PI, H = (t2, e2) => (1 - 1 / (0.55 * t2 / e2 + 1)) * e2, Z = (t2, e2, a2, s2) => t2 < e2 ? e2 - H(e2 - t2, s2) : t2 > a2 ? a2 + H(t2 - a2, s2) : t2, q = (t2) => Math.round(100 * t2) / 100, J = (t2) => Math.round(1e4 * t2) / 1e4, tt = (t2) => {
    let e2 = Math.cos(t2), a2 = Math.sin(t2);
    return [1, 0, 0, 0, e2, -a2, 0, a2, e2];
  }, te = (t2) => {
    let e2 = Math.cos(t2), a2 = Math.sin(t2);
    return [e2, 0, a2, 0, 1, 0, -a2, 0, e2];
  }, ta = (t2) => {
    let e2 = Math.cos(t2), a2 = Math.sin(t2);
    return [e2, -a2, 0, a2, e2, 0, 0, 0, 1];
  };
  function ts(t2, e2) {
    let a2 = Array(9);
    for (let s2 = 0; s2 < 3; s2++)
      for (let i2 = 0; i2 < 3; i2++)
        a2[3 * s2 + i2] = t2[3 * s2] * e2[i2] + t2[3 * s2 + 1] * e2[3 + i2] + t2[3 * s2 + 2] * e2[6 + i2];
    return a2;
  }
  let ti = (t2, e2, a2, s2) => [
    t2[0] * e2 + t2[1] * a2 + t2[2] * s2,
    t2[3] * e2 + t2[4] * a2 + t2[5] * s2,
    t2[6] * e2 + t2[7] * a2 + t2[8] * s2
  ], tr = (t2) => 2 === t2 ? 0 : t2 < 2 ? t2 + 1 : t2;
  function tn(t2, e2, a2, s2, i2, r2, n2, h2, o2 = {}) {
    let l2 = 20 * e2;
    t2[l2 + 0] = a2, t2[l2 + 1] = s2, t2[l2 + 2] = o2.z ?? 0, t2[l2 + 3] = i2, t2[l2 + 4] = r2, t2[l2 + 5] = o2.rx ?? 0, t2[l2 + 6] = o2.ry ?? 0, t2[l2 + 7] = o2.rz ?? 0, t2[l2 + 8] = n2, t2[l2 + 9] = h2[0], t2[l2 + 10] = h2[1], t2[l2 + 11] = h2[2], t2[l2 + 12] = h2[3], t2[l2 + 13] = h2[4], t2[l2 + 14] = 1;
  }
  let th = (t2, e2, a2, s2, i2) => [
    a2,
    a2,
    t2 - 2 * a2,
    e2 - 2 * a2 - s2,
    Math.max(i2 - a2, 3)
  ];
  class to {
    constructor(t2) {
      this.cam = new Float64Array(6), this.camV = new Float64Array(6), this.camT = new Float64Array(6), this.pz = 0, this.ring = null, this.panMinY = 0, this.lift = [30, 0], this.tagOn = false, this.fronts = { carousel: 2, helix: 11 }, this.layout = "grid", this.dealt = false, this.sw = 0, this.sh = 0, this.persp = 1200, this.hovered = -1, this.keyed = -1, this.opened = -1, this.time = 0, this.raf = 0, this.last = 0, this.visible = true, this.shown = true, this.reduced = false, this.drag = null, this.suppress = false, this.backdrop = false, this.front = -1, this.tagP = [0, 0], this.tagV = [0, 0], this.tagShown = false, this.tagIdx = -1, this.tagSeen = 0, this.onDown = (t3) => {
        if (0 === t3.button) {
          if (this.opened >= 0) {
            let e3 = this.o.cards[this.opened], a3 = t3.target;
            this.backdrop = !e3.contains(a3) && !(a3 instanceof Element && a3.closest("button"));
            return;
          }
          this.suppress = false, this.drag = {
            id: t3.pointerId,
            x0: t3.clientX,
            y0: t3.clientY,
            active: false,
            phi0: this.cam[0],
            px0: this.cam[3],
            py0: this.cam[4],
            t: t3.timeStamp,
            v: 0,
            vx: 0,
            vy: 0
          };
        }
      }, this.onMove = (t3) => {
        let e3 = this.drag;
        if (!e3 || t3.pointerId !== e3.id) return;
        let a3 = t3.clientX - e3.x0, s2 = t3.clientY - e3.y0;
        if (!e3.active) {
          if (6 > Math.hypot(a3, s2)) return;
          if ("mouse" !== t3.pointerType && Math.abs(s2) > Math.abs(a3) && !(this.panMinY < 0 && !this.ring)) {
            this.drag = null;
            return;
          }
          e3.active = true, e3.phi0 = this.cam[0], e3.px0 = this.cam[3], e3.py0 = this.cam[4], e3.x0 = t3.clientX, e3.y0 = t3.clientY, this.o.stage.setPointerCapture(t3.pointerId), this.o.stage.dataset.dragging = "true";
          return;
        }
        let i2 = Math.max(1, t3.timeStamp - e3.t) / 1e3;
        if (e3.t = t3.timeStamp, this.ring) {
          let t4 = this.ring.R, [s3, r2] = this.phiBounds(), n2 = Z((e3.phi0 + a3 / t4) * t4, s3 * t4, r2 * t4, 0.5 * this.sw) / t4;
          e3.v = 0.75 * ((n2 - this.cam[0]) / i2) + 0.25 * e3.v, this.cam[0] = this.camT[0] = n2, this.camV[0] = 0;
        } else {
          let t4 = Z(e3.px0 + a3, 0, 0, 0.6 * this.sw), r2 = Z(e3.py0 + s2, this.panMinY, 0, 0.6 * this.sh);
          e3.vx = 0.75 * ((t4 - this.cam[3]) / i2) + 0.25 * e3.vx, e3.vy = 0.75 * ((r2 - this.cam[4]) / i2) + 0.25 * e3.vy, this.cam[3] = this.camT[3] = t4, this.cam[4] = this.camT[4] = r2, this.camV[3] = this.camV[4] = 0;
        }
        this.kick();
      }, this.onUp = (t3) => {
        if (this.opened >= 0) {
          this.backdrop && "pointerup" === t3.type && this.o.onBackdrop(), this.backdrop = false;
          return;
        }
        let e3 = this.drag;
        if (!e3 || t3.pointerId !== e3.id || (this.drag = null, !e3.active))
          return;
        this.suppress = true, this.o.stage.hasPointerCapture(t3.pointerId) && this.o.stage.releasePointerCapture(t3.pointerId), this.o.stage.dataset.dragging = "false";
        let a3 = t3.timeStamp - e3.t > 90;
        if (this.ring) {
          let t4 = this.ring, s2 = a3 ? 0 : O(e3.v, -14, 14), i2 = this.cam[0] + 0.3 * s2, r2 = O(Math.round(t4.f0 - i2 / t4.step), 0, this.n - 1);
          this.camT[0] = (t4.f0 - r2) * t4.step, this.camV[0] = this.reduced ? 0 : s2;
        } else
          this.camT[3] = 0, this.camT[4] = O(
            this.cam[4] + (a3 ? 0 : e3.vy) * 0.3,
            this.panMinY,
            0
          ), this.camV[3] = this.reduced || a3 ? 0 : e3.vx, this.camV[4] = this.reduced || a3 ? 0 : e3.vy;
        this.reduced && this.cam.set(this.camT), this.kick();
      }, this.onWheel = (t3) => {
        if (!(this.opened >= 0)) {
          if (this.ring) {
            let e3 = Math.abs(t3.deltaX) > Math.abs(t3.deltaY) ? t3.deltaX : t3.shiftKey ? t3.deltaY : 0;
            if (!e3) return;
            t3.preventDefault();
            let [a3, s2] = this.phiBounds(), i2 = O(this.camT[0] - e3 / this.ring.R, a3, s2);
            this.camT[0] = i2, this.reduced && (this.cam[0] = i2), clearTimeout(this.wheelTimer), this.wheelTimer = setTimeout(() => {
              let t4 = this.ring;
              if (!t4) return;
              let e4 = O(
                Math.round(t4.f0 - this.camT[0] / t4.step),
                0,
                this.n - 1
              );
              this.toFront(e4);
            }, 140), this.kick();
          } else if (this.panMinY < 0 && Math.abs(t3.deltaY) > Math.abs(t3.deltaX)) {
            let e3 = O(this.camT[4] - t3.deltaY, this.panMinY, 0);
            if (e3 === this.camT[4]) return;
            t3.preventDefault(), this.camT[4] = e3, this.reduced && (this.cam[4] = e3), this.kick();
          }
        }
      }, this.onVisibility = () => {
        this.shown = "visible" === document.visibilityState, this.kick();
      }, this.frame = (t3) => {
        this.raf = 0;
        let e3 = Math.min(1 / 30, Math.max(0, (t3 - this.last) / 1e3));
        this.last = t3, this.tick(e3) && this.visible && this.shown && (this.raf = requestAnimationFrame(this.frame));
      }, this.o = t2;
      const e2 = this.n = t2.cards.length;
      this.pos = new Float32Array(20 * e2), this.vel = new Float32Array(20 * e2), this.tgt = new Float32Array(20 * e2), this.pend = new Float32Array(20 * e2), this.home = new Float32Array(20 * e2), this.release = new Float64Array(e2).fill(-1), this.cap = new Int8Array(e2), this.pendCap = new Int8Array(e2), this.homeCap = new Int8Array(e2), this.angles = new Float32Array(e2), this.back = new Int8Array(e2), this.media = t2.cards.map(
        (t3) => t3.querySelector('[data-part="media"]')
      ), this.caps = t2.cards.map(
        (t3) => Array.from(t3.querySelectorAll('[data-part="cap"]'))
      ), this.cache = t2.cards.map(() => []);
      for (let t3 = 0; t3 < e2; t3++) {
        const a3 = tr(t3);
        tn(this.pos, t3, 0, 0, 150, 196, 16, th(150, 196, 5, 40, 16), {
          z: (e2 - a3) * 0.6,
          rz: 0 === a3 ? 0 : (7 * t3 % 9 - 4) * 1.1 * Math.PI / 180
        }), this.pos[20 * t3 + 15] = 1;
      }
      this.tgt.set(this.pos), this.home.set(this.pos);
      const { stage: a2 } = t2;
      a2.addEventListener("pointerdown", this.onDown), a2.addEventListener("pointermove", this.onMove), a2.addEventListener("pointerup", this.onUp), a2.addEventListener("pointercancel", this.onUp), a2.addEventListener("wheel", this.onWheel, { passive: false }), document.addEventListener("visibilitychange", this.onVisibility), this.ro = new ResizeObserver((t3) => {
        let e3 = t3[0].contentRect;
        this.resize(e3.width, e3.height);
      }), this.ro.observe(a2), this.io = new IntersectionObserver(
        (t3) => {
          let e3 = t3[t3.length - 1];
          this.visible = e3.isIntersecting, e3.isIntersecting && !this.dealt && e3.intersectionRatio > 0.3 && this.deal(), this.kick();
        },
        { threshold: [0, 0.35] }
      ), this.io.observe(a2);
    }
    destroy() {
      let { stage: t2 } = this.o;
      cancelAnimationFrame(this.raf), clearTimeout(this.wheelTimer), this.ro.disconnect(), this.io.disconnect(), t2.removeEventListener("pointerdown", this.onDown), t2.removeEventListener("pointermove", this.onMove), t2.removeEventListener("pointerup", this.onUp), t2.removeEventListener("pointercancel", this.onUp), t2.removeEventListener("wheel", this.onWheel), document.removeEventListener("visibilitychange", this.onVisibility);
    }
    setReduced(t2) {
      this.reduced = t2, t2 && !this.dealt && this.sw && this.deal(), this.kick();
    }
    setLayout(t2, e2, a2 = false) {
      let s2 = t2 === this.layout && this.dealt;
      if (this.layout = t2, !this.dealt && (this.dealt = true, !this.sw) || s2 && !a2)
        return;
      let i2 = e2 && "item" in e2 ? e2.item : -1, r2 = i2 >= 0 ? this.screenOf(i2, false) : e2 && "x" in e2 ? [e2.x, e2.y] : [0, 0];
      this.apply(i2, r2, a2 || this.reduced, false);
    }
    deal() {
      this.dealt = true, this.sw && this.apply(-1, [0, 0], this.reduced, true);
    }
    apply(t2, e2, a2, s2) {
      let { n: i2 } = this, r2 = this.opened;
      this.opened = -1, this.bake();
      let n2 = "carousel" === this.layout || "helix" === this.layout ? t2 >= 0 ? t2 : this.fronts[this.layout] ?? 0 : 0, h2 = (function(t3, e3, a3, s3, i3) {
        let r3 = e3.length, n3 = new Float32Array(20 * r3), h3 = new Int8Array(r3).fill(-1), o3 = a3 < 520, l3 = o3 ? 14 : 24, c3 = o3 ? 8 : 14, d2 = a3 - 2 * l3, A2 = s3 - 2 * l3, p2 = {
          poses: n3,
          caps: h3,
          ring: null,
          panMinY: 0,
          lift: [0, 0],
          tag: true
        };
        if ("grid" === t3) {
          let t4 = { score: -1, cols: 4, w: 60, cap: false };
          for (let e5 = 3; e5 <= 10; e5++) {
            let a5 = Math.ceil(r3 / e5);
            for (let s5 of [true, false]) {
              let i5 = Math.floor(
                Math.min(
                  (d2 - (e5 - 1) * c3) / e5,
                  (A2 - (a5 - 1) * c3) / a5 - 40 * !!s5
                )
              );
              if (s5 && i5 < 112) continue;
              let r4 = i5 * (s5 ? 1.15 : 1);
              r4 > t4.score && (t4 = { score: r4, cols: e5, w: i5, cap: s5 });
            }
          }
          let { cols: e4, w: a4, cap: s4 } = t4, i4 = a4 + 40 * !!s4, l4 = Math.ceil(r3 / e4), m2 = s4 ? 16 : o3 ? 10 : 12, u2 = -(e4 * a4 + (e4 - 1) * c3) / 2 + a4 / 2, g2 = -(l4 * i4 + (l4 - 1) * c3) / 2 + i4 / 2;
          for (let t5 = 0; t5 < r3; t5++)
            tn(
              n3,
              t5,
              u2 + t5 % e4 * (a4 + c3),
              g2 + Math.floor(t5 / e4) * (i4 + c3),
              a4,
              i4,
              m2,
              s4 ? th(a4, i4, 5, 40, m2) : [0, 0, a4, i4, m2]
            ), h3[t5] = s4 ? 0 : -1;
          p2.tag = !s4;
        } else if ("masonry" === t3) {
          let t4 = a3 >= 1e3 ? 8 : a3 >= 760 ? 6 : a3 >= 520 ? 5 : 4, s4 = (d2 - (t4 - 1) * c3) / t4, i4 = Array(t4).fill(0), r4 = e3.map((t5) => {
            let e4 = i4.indexOf(Math.min(...i4)), a4 = i4[e4], r5 = s4 * t5;
            return i4[e4] += r5 + c3, { col: e4, top: a4, h: r5 };
          }), h4 = Math.max(...i4) - c3, l4 = Math.min(1, A2 / h4), p3 = o3 ? 10 : 12, m2 = -(t4 * s4 + (t4 - 1) * c3) / 2 + s4 / 2;
          r4.forEach((t5, e4) => {
            let a4 = t5.h * l4;
            tn(
              n3,
              e4,
              m2 + t5.col * (s4 + c3),
              -(h4 * l4) / 2 + t5.top * l4 + a4 / 2,
              s4,
              a4,
              p3,
              [0, 0, s4, a4, p3]
            );
          });
        } else if ("list" === t3) {
          let t4 = O(Math.floor((d2 + c3) / (290 + c3)), 1, 3), e4 = Math.ceil(r3 / t4), a4 = (d2 - (t4 - 1) * c3) / t4, i4 = 56 * e4 + (e4 - 1) * 8, o4 = i4 <= A2, m2 = o4 ? -i4 / 2 : -s3 / 2 + l3;
          for (let t5 = 0; t5 < r3; t5++) {
            let s4 = Math.floor(t5 / e4), i5 = t5 % e4;
            tn(
              n3,
              t5,
              -d2 / 2 + s4 * (a4 + c3) + a4 / 2,
              m2 + 64 * i5 + 28,
              a4,
              56,
              14,
              [6, 6, 44, 44, 9]
            ), h3[t5] = 1;
          }
          p2.panMinY = o4 ? 0 : -(i4 - A2), p2.tag = false, p2.lift = [0, 0];
        } else if ("stack" === t3) {
          let t4 = Math.round(O(0.19 * a3, 96, 200)), e4 = Math.round(1.36 * t4), s4 = 2.3 * e4, i4 = Math.min(
            1.3,
            2 * Math.asin(Math.min(1, (o3 ? d2 - 1.6 * t4 : d2 - t4) / (2 * s4)))
          ), h4 = -(-s4 - e4 / 2 + (-s4 * Math.cos(i4 / 2) + e4 / 2 * Math.cos(i4 / 2) + t4 / 2 * Math.sin(i4 / 2))) / 2;
          for (let a4 = 0; a4 < r3; a4++) {
            let o4 = -i4 / 2 + a4 * i4 / (r3 - 1);
            tn(
              n3,
              a4,
              s4 * Math.sin(o4),
              h4 - s4 * Math.cos(o4),
              t4,
              e4,
              14,
              [0, 0, t4, e4, 14],
              { rz: o4, z: 0.8 * a4 }
            );
          }
          p2.lift = [36, Math.round(0.22 * e4)];
        } else {
          let e4 = "helix" === t3, s4 = e4 ? Math.round(O(0.15 * a3, 66, 160)) : Math.round(O(0.3 * a3, 210, 320)), l4 = e4 ? Math.round(1.3 * s4) : s4 + 76, d3 = e4 ? 2 * Math.PI / 10 : (s4 + 1.6 * c3) / Math.max(1.1 * a3, 720), A3 = e4 ? (s4 + c3) / (2 * Math.sin(d3 / 2)) : Math.max(1.1 * a3, 720), m2 = e4 ? (l4 + c3) * 1.5 / 10 : 0, u2 = e4 ? o3 ? 9 : 12 : 22;
          for (let t4 = 0; t4 < r3; t4++) {
            let a4 = (t4 - i3) * d3;
            tn(
              n3,
              t4,
              A3 * Math.sin(a4),
              (t4 - (r3 - 1) / 2) * m2,
              s4,
              l4,
              u2,
              e4 ? [0, 0, s4, l4, u2] : [8, 8, s4 - 16, s4 - 16, 15],
              { z: A3 * Math.cos(a4) - A3, ry: a4 }
            ), h3[t4] = e4 ? -1 : 2;
          }
          p2.ring = {
            R: A3,
            step: d3,
            f0: i3,
            dy: m2,
            tilt: e4 ? -0.24 : 0,
            cull: !e4
          }, p2.tag = e4, p2.lift = [28 * !!e4, 0];
        }
        return p2;
      })(this.layout, this.o.aspects, this.sw, this.sh, n2);
      this.ring = h2.ring, this.panMinY = h2.panMinY, this.lift = h2.lift, this.tagOn = h2.tag, this.pz = h2.ring ? h2.ring.R : 0;
      let o2 = h2.ring;
      this.cam[2] = o2 ? (n2 - (i2 - 1) / 2) * o2.dy : 0, this.camT[1] = o2 ? o2.tilt : 0, this.camT[4] = o2 ? o2.R * Math.sin(o2.tilt) : 0, this.o.stage.dataset.scroll = String(h2.panMinY < 0), this.o.stage.dataset.layout = this.layout;
      let l2 = new Float32Array(i2), c2 = 1;
      for (let t3 = 0; t3 < i2; t3++) {
        let [a3, s3] = this.screenOf(t3, false);
        l2[t3] = Math.hypot(a3 - e2[0], s3 - e2[1]), c2 = Math.max(c2, l2[t3]);
      }
      for (let t3 = 0; t3 < i2; t3++) {
        let e3 = 20 * t3;
        for (let t4 = 0; t4 <= 14; t4++) this.pend[e3 + t4] = h2.poses[e3 + t4];
        this.pend[e3 + 6] = this.pos[e3 + 6] + X(this.pend[e3 + 6] - this.pos[e3 + 6]), this.pend[e3 + 7] = this.pos[e3 + 7] + X(this.pend[e3 + 7] - this.pos[e3 + 7]), this.pendCap[t3] = h2.caps[t3], this.angles[t3] = h2.poses[e3 + 6];
        for (let t4 = 0; t4 <= 14; t4++) this.home[e3 + t4] = h2.poses[e3 + t4];
        this.homeCap[t3] = h2.caps[t3];
        let r3 = s2 ? tr(t3) / (i2 - 1) * G * 1.6 : l2[t3] / c2 * G;
        this.release[t3] = a2 ? this.time : this.time + r3;
      }
      if (a2) {
        for (let t3 = 0; t3 < i2; t3++) this.releaseItem(t3, false);
        this.snapAll();
      }
      r2 >= 0 && (this.o.stage.dataset.open = "false", this.o.cards.forEach((t3) => {
        t3.dataset.active = "false";
      })), this.updateFront(), this.kick();
    }
    bake() {
      let t2 = this.cam, e2 = this.camV;
      if (!(1e-6 > Math.abs(t2[0]) && 1e-6 > Math.abs(t2[1]) && 1e-3 > Math.abs(this.screw(t2[0]) + t2[2]) && 1e-3 > Math.abs(t2[3]) && 1e-3 > Math.abs(t2[4]) && 1e-3 > Math.abs(t2[5]))) {
        let a2 = ts(tt(t2[1]), te(t2[0])), s2 = 1e-3 * e2[0];
        for (let i2 = 0; i2 < this.n; i2++) {
          let r2 = 20 * i2, n2 = this.release[i2] >= 0 ? [this.pos, this.tgt, this.pend] : [this.pos, this.tgt], h2 = this.world(this.pos[r2 + 0], this.pos[r2 + 1], this.pos[r2 + 2]), o2 = this.world(
            this.pos[r2 + 0],
            this.pos[r2 + 1],
            this.pos[r2 + 2],
            t2[0] + s2
          );
          for (let t3 of n2) {
            let [e3, s3, i3] = this.world(t3[r2 + 0], t3[r2 + 1], t3[r2 + 2]), [n3, h3, o3] = (function(t4) {
              let e4 = Math.asin(O(-t4[5], -1, 1));
              return 0.99999 > Math.abs(t4[5]) ? [Math.atan2(t4[2], t4[8]), e4, Math.atan2(t4[3], t4[4])] : [Math.atan2(-t4[6], t4[0]), e4, 0];
            })(ts(a2, ts(te(t3[r2 + 6]), ts(tt(t3[r2 + 5]), ta(t3[r2 + 7])))));
            t3[r2 + 0] = e3, t3[r2 + 1] = s3, t3[r2 + 2] = i3, t3[r2 + 6] = n3, t3[r2 + 5] = h3, t3[r2 + 7] = o3;
          }
          let [l2, c2, d2] = ti(
            a2,
            this.vel[r2 + 0],
            this.vel[r2 + 1],
            this.vel[r2 + 2]
          ), A2 = 1e3 * !!s2;
          this.vel[r2 + 0] = l2 + (o2[0] - h2[0]) * A2, this.vel[r2 + 1] = c2 + (o2[1] - h2[1]) * A2, this.vel[r2 + 2] = d2 + (o2[2] - h2[2]) * A2, this.vel[r2 + 6] += e2[0];
        }
      }
      this.cam.fill(0), this.camV.fill(0), this.camT.fill(0), this.pz = 0, this.ring = null;
    }
    screw(t2) {
      let e2 = this.ring;
      return e2 && e2.dy ? -(e2.f0 - t2 / e2.step - (this.n - 1) / 2) * e2.dy : 0;
    }
    world(t2, e2, a2, s2 = this.cam[0], i2 = this.cam) {
      let r2 = this.screw(s2) + i2[2], [n2, h2, o2] = ti(ts(tt(i2[1]), te(s2)), t2, e2 + r2, a2 + this.pz);
      return [n2 + i2[3], h2 + i2[4], o2 + i2[5] - this.pz];
    }
    screenOf(t2, e2) {
      let a2 = 20 * t2, s2 = this.pos, i2 = s2[a2 + 19], [r2, n2, h2] = e2 ? ti(
        ts(te(s2[a2 + 6]), ts(tt(s2[a2 + 5]), ta(s2[a2 + 7]))),
        0,
        -s2[a2 + 4] / 2 - this.lift[1] * i2,
        this.lift[0] * i2
      ) : [0, 0, 0], [o2, l2, c2] = this.world(s2[a2 + 0] + r2, s2[a2 + 1] + n2, s2[a2 + 2] + h2), d2 = this.persp / Math.max(1, this.persp - c2);
      return [o2 * d2, l2 * d2];
    }
    releaseItem(t2, e2) {
      let a2 = 20 * t2, s2 = this.pend[a2 + 0] - this.pos[a2 + 0], i2 = this.pend[a2 + 1] - this.pos[a2 + 1];
      for (let t3 = 0; t3 <= 14; t3++) this.tgt[a2 + t3] = this.pend[a2 + t3];
      if (this.opened >= 0 && t2 !== this.opened && (this.tgt[a2 + 14] = 0.12), this.cap[t2] = this.pendCap[t2], this.release[t2] = -1, e2 && !this.reduced) {
        let t3 = Math.hypot(s2, i2);
        this.vel[a2 + 2] += Math.min(3 * t3, 2600), this.vel[a2 + 7] += 1.1 * O(s2 / 600, -1.4, 1.4);
      }
    }
    snapAll() {
      this.pos.set(this.tgt), this.vel.fill(0);
      for (let t2 = 0; t2 < this.n; t2++)
        for (let e2 = 0; e2 < 4; e2++)
          this.pos[20 * t2 + 15 + e2] = +(e2 === this.cap[t2]);
      this.cam.set(this.camT), this.camV.fill(0);
    }
    resize(t2, e2) {
      if (t2 < 1 || e2 < 1 || 0.5 > Math.abs(t2 - this.sw) && 0.5 > Math.abs(e2 - this.sh))
        return;
      let a2 = !this.sw;
      if (this.sw = t2, this.sh = e2, this.persp = O(1.15 * t2, 900, 1500), this.o.stage.style.perspective = `${this.persp}px`, this.o.stage.dataset.narrow = String(t2 < 720), a2) {
        this.dealt && this.apply(-1, [0, 0], this.reduced, !this.reduced);
        return;
      }
      if (!this.dealt) return;
      let s2 = this.opened, i2 = this.ring ? this.front : -1;
      this.apply(i2, [0, 0], true, false), s2 >= 0 && this.open(s2, true);
    }
    hover(t2) {
      this.hovered !== t2 && (this.hovered = t2, this.kick());
    }
    unhover(t2) {
      this.hovered === t2 && (this.hovered = -1, this.kick());
    }
    focusItem(t2, e2, a2 = true) {
      this.keyed = e2 ? t2 : -1, e2 && a2 && t2 >= 0 && this.ring && this.opened < 0 && this.toFront(t2), this.kick();
    }
    blurItem(t2) {
      this.keyed === t2 && (this.keyed = -1, this.kick());
    }
    isRing() {
      return !!this.ring;
    }
    frontIndex() {
      return this.front;
    }
    takeClick() {
      let t2 = this.suppress;
      return this.suppress = false, t2;
    }
    toFront(t2) {
      let e2 = this.ring;
      e2 && (this.camT[0] = (e2.f0 - t2) * e2.step, this.reduced && (this.cam[0] = this.camT[0], this.camV[0] = 0), this.kick());
    }
    open(t2, e2 = false) {
      if (this.drag?.active) return;
      let a2 = this.n;
      this.opened = t2, this.hovered = -1, this.keyed = -1;
      let s2 = (function(t3, e3, a3) {
        if (e3 < 720) {
          let t4 = e3 - 24, s3 = a3 - 24;
          return {
            w: t4,
            h: s3,
            r: 24,
            m: [8, 8, t4 - 16, Math.round(0.46 * s3), 18]
          };
        }
        if ("photo" === t3) {
          let t4 = Math.min(e3 - 48, 940), s3 = Math.min(a3 - 40, 560);
          return { w: t4, h: s3, r: 28, m: [8, 8, t4 - 16 - 340, s3 - 16, 20] };
        }
        return {
          w: Math.min(e3 - 48, 640),
          h: Math.min(a3 - 40, 392),
          r: 28,
          m: [20, 20, 196, 236, 16]
        };
      })(this.o.kinds[t2], this.sw, this.sh);
      this.camT[5] = -360;
      let i2 = this.camT, r2 = i2[0], n2 = i2[1], h2 = this.screw(r2) + i2[2], [o2, l2, c2] = ti(ts(te(-r2), tt(-n2)), -i2[3], -i2[4], -(i2[5] - this.pz)), d2 = 20 * t2;
      this.release[t2] = -1;
      let A2 = this.tgt;
      A2[d2 + 0] = o2, A2[d2 + 1] = l2 - h2, A2[d2 + 2] = c2 - this.pz, A2[d2 + 3] = s2.w, A2[d2 + 4] = s2.h, A2[d2 + 8] = s2.r, A2[d2 + 5] = -n2, A2[d2 + 6] = this.pos[d2 + 6] + X(-r2 - this.pos[d2 + 6]), A2[d2 + 7] = this.pos[d2 + 7] + X(-this.pos[d2 + 7]), A2[d2 + 9] = s2.m[0], A2[d2 + 10] = s2.m[1], A2[d2 + 11] = s2.m[2], A2[d2 + 12] = s2.m[3], A2[d2 + 13] = s2.m[4], A2[d2 + 14] = 1, this.cap[t2] = 3;
      for (let e3 = 0; e3 < a2; e3++)
        e3 !== t2 && (this.tgt[20 * e3 + 14] = 0.12, this.release[e3] >= 0 && (this.pend[20 * e3 + 14] = 1));
      this.reduced || e2 || (this.vel[d2 + 2] += 900), (this.reduced || e2) && (this.cam[5] = i2[5], this.pos.set(this.tgt.subarray(d2, d2 + 14 + 1), d2), this.vel.fill(0, d2, d2 + 20)), this.o.stage.dataset.open = "true", this.o.cards.forEach((e3, a3) => {
        e3.dataset.active = String(a3 === t2);
      }), this.kick();
    }
    close() {
      let t2 = this.opened;
      if (t2 < 0) return;
      this.opened = -1;
      let e2 = 20 * t2;
      for (let t3 = 0; t3 <= 14; t3++) this.tgt[e2 + t3] = this.home[e2 + t3];
      this.tgt[e2 + 6] = this.pos[e2 + 6] + X(this.home[e2 + 6] - this.pos[e2 + 6]), this.tgt[e2 + 7] = this.pos[e2 + 7] + X(this.home[e2 + 7] - this.pos[e2 + 7]), this.cap[t2] = this.homeCap[t2];
      for (let e3 = 0; e3 < this.n; e3++)
        e3 !== t2 && this.release[e3] < 0 && (this.tgt[20 * e3 + 14] = this.home[20 * e3 + 14]);
      this.camT[5] = 0, this.reduced && (this.cam[5] = 0, this.pos.set(this.tgt.subarray(e2, e2 + 14 + 1), e2), this.vel.fill(0, e2, e2 + 20)), this.o.stage.dataset.open = "false", this.o.cards.forEach((t3) => {
        t3.dataset.active = "false";
      }), this.kick();
    }
    phiBounds() {
      let t2 = this.ring;
      return [(t2.f0 - (this.n - 1)) * t2.step, t2.f0 * t2.step];
    }
    kick() {
      !this.raf && this.visible && this.shown && (this.last = performance.now(), this.raf = requestAnimationFrame(this.frame));
    }
    updateFront() {
      let t2 = this.ring, e2 = t2 ? O(Math.round(t2.f0 - this.cam[0] / t2.step), 0, this.n - 1) : -1;
      t2 && (this.fronts[this.layout] = e2), e2 !== this.front && (this.front = e2, this.o.onFront(e2));
    }
    tick(t2) {
      let { n: e2, pos: a2, vel: s2, tgt: i2 } = this;
      this.time += t2;
      let r2 = !!this.drag?.active;
      for (let t3 = 0; t3 < e2; t3++)
        this.release[t3] >= 0 && (r2 = true, this.release[t3] <= this.time && this.releaseItem(t3, true));
      let n2 = this.drag?.active || this.opened >= 0 ? -2 : this.hovered >= 0 ? this.hovered : this.keyed;
      for (let t3 = 0; t3 < e2; t3++) {
        let e3 = 20 * t3, s3 = Math.max(1, i2[e3 + 3]), r3 = Math.max(1, i2[e3 + 4]), h2 = O(
          1 - 3.2 * (Math.abs(a2[e3 + 3] - s3) / s3 + Math.abs(a2[e3 + 4] - r3) / r3 + Math.hypot(a2[e3 + 0] - i2[e3 + 0], a2[e3 + 1] - i2[e3 + 1]) / 500),
          0,
          1
        );
        for (let a3 = 0; a3 < 4; a3++) i2[e3 + 15 + a3] = a3 === this.cap[t3] ? h2 : 0;
        i2[e3 + 19] = +(t3 === n2);
      }
      if (this.reduced)
        a2.set(i2), s2.fill(0), this.cam.set(this.camT), this.camV.fill(0);
      else {
        let r3 = Math.max(1, Math.ceil(120 * t2)), n3 = t2 / r3;
        for (let t3 = 0; t3 < r3; t3++) {
          for (let t4 = 0; t4 < 20 * e2; t4++) {
            let e3 = t4 % 20, r4 = e3 < 14 ? R : e3 < 19 ? z : U, h2 = -r4.k * (a2[t4] - i2[t4]) - r4.c * s2[t4];
            s2[t4] += h2 * n3, a2[t4] += s2[t4] * n3;
          }
          for (let t4 = 0; t4 < 6; t4++) {
            if (this.drag?.active && (0 === t4 || 3 === t4 || 4 === t4)) continue;
            let e3 = 0 === t4 ? V : L, a3 = -e3.k * (this.cam[t4] - this.camT[t4]) - e3.c * this.camV[t4];
            this.camV[t4] += a3 * n3, this.cam[t4] += this.camV[t4] * n3;
          }
        }
      }
      for (let t3 = 0; t3 < 20 * e2; t3++) {
        let e3 = W[t3 % 20];
        Math.abs(a2[t3] - i2[t3]) > e3 || Math.abs(s2[t3]) > 10 * e3 ? r2 = true : (a2[t3] = i2[t3], s2[t3] = 0);
      }
      for (let t3 = 0; t3 < 6; t3++) {
        let e3 = 0 === t3 || 1 === t3 ? 2e-4 : 0.05;
        Math.abs(this.cam[t3] - this.camT[t3]) > e3 || Math.abs(this.camV[t3]) > 10 * e3 ? r2 = true : this.drag?.active && (0 === t3 || 3 === t3 || 4 === t3) || (this.cam[t3] = this.camT[t3], this.camV[t3] = 0);
      }
      return this.updateFront(), this.write(), this.moveTag(t2) && (r2 = true), r2;
    }
    write() {
      let { n: t2, pos: e2, cam: a2 } = this, [s2, i2] = this.lift, r2 = this.screw(a2[0]) + a2[2];
      this.o.world.style.transform = `translate3d(${q(a2[3])}px,${q(a2[4])}px,${q(a2[5] - this.pz)}px) rotateX(${J(a2[1])}rad) rotateY(${J(a2[0])}rad) translate3d(0,${q(r2)}px,${q(this.pz)}px)`;
      let n2 = ts(tt(a2[1]), te(a2[0]));
      for (let r3 = 0; r3 < t2; r3++) {
        let t3 = 20 * r3, h2 = this.o.cards[r3], o2 = this.media[r3], l2 = this.cache[r3], c2 = e2[t3 + 3], d2 = e2[t3 + 4], A2 = e2[t3 + 19], p2 = `translate3d(${q(e2[t3 + 0] - c2 / 2)}px,${q(e2[t3 + 1] - d2 / 2)}px,${q(e2[t3 + 2])}px) rotateY(${J(e2[t3 + 6])}rad) rotateX(${J(e2[t3 + 5])}rad) rotateZ(${J(e2[t3 + 7])}rad)`;
        A2 > 1e-3 && (p2 += ` translate3d(0,${q(-A2 * i2)}px,${q(A2 * s2)}px)`);
        let m2 = 1;
        this.ring?.cull && r3 !== this.opened && (m2 = 1 - K(0.8, 1.15, Math.abs(this.angles[r3] + a2[0])));
        let [u2, g2, y2] = this.world(e2[t3 + 0], e2[t3 + 1], e2[t3 + 2]), f2 = Math.cos(e2[t3 + 5]), [b2, w2, k2] = ti(
          n2,
          f2 * Math.sin(e2[t3 + 6]),
          -Math.sin(e2[t3 + 5]),
          f2 * Math.cos(e2[t3 + 6])
        ), x2 = +(-(b2 * u2) + -(w2 * g2) + k2 * (this.persp - y2) < 0), v2 = O(e2[t3 + 14] * m2 * (x2 ? 0.72 : 1), 0, 1), M2 = [
          p2,
          `${q(c2)}px`,
          `${q(d2)}px`,
          `${q(e2[t3 + 8])}px`,
          `translate(${q(e2[t3 + 9])}px,${q(e2[t3 + 10])}px)`,
          `${q(e2[t3 + 11])}px`,
          `${q(e2[t3 + 12])}px`,
          `${q(e2[t3 + 13])}px`,
          String(J(v2)),
          String(J(A2))
        ], _2 = [
          h2.style,
          h2.style,
          h2.style,
          h2.style,
          o2.style,
          o2.style,
          o2.style,
          o2.style,
          h2.style
        ], I2 = [
          "transform",
          "width",
          "height",
          "borderRadius",
          "transform",
          "width",
          "height",
          "borderRadius",
          "opacity"
        ];
        for (let t4 = 0; t4 < I2.length; t4++)
          l2[t4] !== M2[t4] && (l2[t4] = M2[t4], _2[t4][I2[t4]] = M2[t4]);
        l2[9] !== M2[9] && (l2[9] = M2[9], h2.style.setProperty("--lift", M2[9]));
        let j2 = v2 < 0.02 ? "none" : "";
        l2[10] !== j2 && (l2[10] = j2, h2.style.pointerEvents = j2), this.back[r3] !== x2 && (this.back[r3] = x2, h2.dataset.back = String(!!x2));
        for (let a3 = 0; a3 < 4; a3++) {
          let s3 = String(J(e2[t3 + 15 + a3]));
          l2[11 + a3] !== s3 && (l2[11 + a3] = s3, this.caps[r3][a3].style.opacity = s3);
        }
      }
    }
    moveTag(t2) {
      let e2 = this.o.tag;
      if (!e2) return false;
      let a2 = this.hovered >= 0 ? this.hovered : this.keyed;
      a2 >= 0 ? this.tagSeen = this.time : this.tagIdx >= 0 && this.time - this.tagSeen < 0.16 && (a2 = this.tagIdx);
      let s2 = this.tagOn && a2 >= 0 && this.opened < 0 && !this.drag?.active && !this.back[a2] && this.release[a2] < 0;
      if (s2 !== this.tagShown && (this.tagShown = s2, e2.dataset.show = String(s2)), !s2)
        return this.tagIdx = -1, false;
      let [i2, r2] = this.screenOf(a2, true), n2 = this.sw / 2 + i2, h2 = this.sh / 2 + r2;
      (this.tagIdx < 0 || this.reduced) && (this.tagP = [n2, h2], this.tagV = [0, 0]), a2 !== this.tagIdx && this.o.onTag(a2), this.tagIdx = a2;
      let o2 = Math.max(1, Math.ceil(120 * t2)), l2 = t2 / o2;
      for (let t3 = 0; t3 < o2; t3++)
        for (let t4 = 0; t4 < 2; t4++) {
          let e3 = t4 ? h2 : n2, a3 = -Y.k * (this.tagP[t4] - e3) - Y.c * this.tagV[t4];
          this.tagV[t4] += a3 * l2, this.tagP[t4] += this.tagV[t4] * l2;
        }
      let c2 = O(this.tagP[0], 96, this.sw - 96), d2 = Math.max(56, this.tagP[1]);
      return e2.style.transform = `translate3d(${q(c2)}px,${q(d2)}px,0)`, this.hovered < 0 && this.keyed < 0 || Math.hypot(this.tagP[0] - n2, this.tagP[1] - h2) > 0.3 || Math.hypot(this.tagV[0], this.tagV[1]) > 3;
    }
    itemOrigin(t2) {
      return this.screenOf(t2, false);
    }
  }
  var tl = a(23168), tc = a.n(tl);
  let td = [
    { id: "grid", label: "Grid", Icon: l.A, hint: "Click a card to open it" },
    {
      id: "masonry",
      label: "Masonry",
      Icon: c.A,
      hint: "Every piece keeps its own proportions"
    },
    {
      id: "list",
      label: "List",
      Icon: d.A,
      hint: "Each piece with its maker and price"
    },
    {
      id: "stack",
      label: "Stack",
      Icon: A.A,
      hint: "Hover the fan to pull a card up"
    },
    {
      id: "carousel",
      label: "Carousel",
      Icon: p.A,
      hint: "Drag or swipe, it settles on the nearest card"
    },
    {
      id: "helix",
      label: "Helix",
      Icon: g,
      hint: "Drag to spin, throw it to keep it turning"
    }
  ], tA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], tp = D.length, tm = D.filter((t2) => "maker" !== t2.kind).length, tu = tp - tm;
  function tg() {
    let t2 = { hover: -1, key: -1, front: -1, tag: -1 }, e2 = /* @__PURE__ */ new Set();
    return {
      get: () => t2,
      set(a2) {
        let s2 = { ...t2, ...a2 };
        (s2.hover !== t2.hover || s2.key !== t2.key || s2.front !== t2.front || s2.tag !== t2.tag) && (t2 = s2, e2.forEach((t3) => t3()));
      },
      subscribe: (t3) => (e2.add(t3), () => {
        e2.delete(t3);
      })
    };
  }
  let ty = (t2) => "maker" === t2.kind ? `${t2.by}, ${t2.meta}` : `By ${t2.by}`, tf = (t2) => "maker" === t2.kind ? `${t2.stats[0]} ${1 === t2.stats[0] ? "piece" : "pieces"}` : C(t2.stats[0]);
  function tb({ text: t2 }) {
    let e2 = [...t2];
    return (0, s.jsxs)("span", {
      className: tc().roll,
      children: [
        (0, s.jsx)("span", { className: tc().srOnly, children: t2 }),
        (0, s.jsx)("span", {
          className: tc().rollVisual,
          "aria-hidden": "true",
          children: e2.map((t3, a2) => {
            let i2 = e2.length - 1 - a2;
            return t3 < "0" || t3 > "9" ? (0, s.jsx)(
              "span",
              { className: tc().sym, children: t3 },
              `s${i2}`
            ) : (0, s.jsx)(
              "span",
              {
                className: tc().wheel,
                children: (0, s.jsx)("span", {
                  className: tc().strip,
                  style: { "--d": t3, "--i": a2 },
                  children: tA.map(
                    (t4) => (0, s.jsx)("span", { children: t4 }, t4)
                  )
                })
              },
              `d${i2}`
            );
          })
        })
      ]
    });
  }
  function tw({ store: t2, open: e2 }) {
    let a2 = (0, r.useSyncExternalStore)(t2.subscribe, t2.get, t2.get), i2 = e2 >= 0 ? e2 : a2.hover >= 0 ? a2.hover : a2.key >= 0 ? a2.key : a2.front, n2 = i2 >= 0 ? D[i2] : null, h2 = n2 ? n2.kind : "summary", o2 = n2 ? n2.stats : F;
    return (0, s.jsxs)("div", {
      className: tc().panel,
      children: [
        (0, s.jsx)("div", {
          className: tc().panelWho,
          children: (0, s.jsxs)(
            "span",
            {
              className: tc().swap,
              children: [
                (0, s.jsx)("span", {
                  className: tc().panelName,
                  children: n2 ? n2.name : "Autumn edit"
                }),
                (0, s.jsx)("span", {
                  className: tc().panelMeta,
                  children: n2 ? ty(n2) : "Hover a card for its details"
                })
              ]
            },
            n2?.id ?? "summary"
          )
        }),
        N[h2].map((t3, e3) => {
          var a3;
          return (0, s.jsxs)(
            "div",
            {
              className: tc().stat,
              children: [
                (0, s.jsx)("span", {
                  className: tc().statLabel,
                  children: (0, s.jsx)(
                    "span",
                    { className: tc().swap, children: t3 },
                    t3
                  )
                }),
                (0, s.jsx)("span", {
                  className: tc().statValue,
                  children: (0, s.jsx)(tb, {
                    text: (a3 = o2[e3], 2 === e3 ? a3.toFixed(1) : 0 === e3 && ("photo" === h2 || "type" === h2) ? C(a3) : a3.toLocaleString("en-US"))
                  })
                })
              ]
            },
            e3
          );
        })
      ]
    });
  }
  function tk({ store: t2 }) {
    let { tag: e2 } = (0, r.useSyncExternalStore)(t2.subscribe, t2.get, t2.get), a2 = e2 >= 0 ? D[e2] : null;
    return a2 ? (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)("span", { className: tc().tagName, children: a2.name }),
        (0, s.jsx)("span", {
          className: tc().tagMeta,
          children: "maker" === a2.kind ? `${a2.by}, ${a2.meta}` : `${C(a2.stats[0])} \xB7 ${a2.by}`
        })
      ]
    }) : null;
  }
  function tx({ item: t2 }) {
    let e2 = "maker" === t2.kind;
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)("span", {
          className: tc().media,
          "data-part": "media",
          children: t2.image ? (0, s.jsx)(i.default, {
            src: t2.image,
            alt: "",
            fill: true,
            loading: "eager",
            draggable: false,
            sizes: e2 ? "(max-width: 720px) 90vw, 240px" : "(max-width: 720px) 90vw, 600px",
            className: tc().img,
            "data-maker": e2
          }) : (0, s.jsxs)("span", {
            className: tc().cover,
            children: [
              (0, s.jsx)("span", {
                className: tc().coverName,
                children: t2.name
              }),
              (0, s.jsx)("span", {
                className: tc().coverPrice,
                children: C(t2.stats[0])
              })
            ]
          })
        }),
        (0, s.jsxs)("span", {
          className: `${tc().cap} ${tc().capCompact}`,
          "data-part": "cap",
          children: [
            (0, s.jsx)("span", { className: tc().capTitle, children: t2.name }),
            (0, s.jsx)("span", {
              className: tc().capMeta,
              children: e2 ? t2.by : C(t2.stats[0])
            })
          ]
        }),
        (0, s.jsxs)("span", {
          className: `${tc().cap} ${tc().capRow}`,
          "data-part": "cap",
          children: [
            (0, s.jsxs)("span", {
              className: tc().rowText,
              children: [
                (0, s.jsx)("span", {
                  className: tc().rowTitle,
                  children: t2.name
                }),
                (0, s.jsx)("span", {
                  className: tc().capMeta,
                  children: `${t2.by} \xB7 ${t2.meta}`
                })
              ]
            }),
            (0, s.jsx)("span", { className: tc().rowValue, children: tf(t2) })
          ]
        }),
        (0, s.jsxs)("span", {
          className: `${tc().cap} ${tc().capDetail}`,
          "data-part": "cap",
          children: [
            (0, s.jsxs)("span", {
              className: tc().detailTop,
              children: [
                (0, s.jsx)("span", {
                  className: tc().detailTitle,
                  children: t2.name
                }),
                (0, s.jsx)("span", {
                  className: tc().detailValue,
                  children: tf(t2)
                })
              ]
            }),
            (0, s.jsx)("span", { className: tc().capMeta, children: ty(t2) })
          ]
        }),
        (0, s.jsxs)("span", {
          className: `${tc().cap} ${tc().sheet}`,
          "data-part": "cap",
          "data-variant": "photo" === t2.kind ? "hero" : "profile",
          children: [
            (0, s.jsx)("span", {
              className: tc().sheetTitle,
              children: t2.name
            }),
            (0, s.jsx)("span", {
              className: tc().sheetBy,
              children: e2 ? `${t2.by} in ${t2.meta}` : `${ty(t2)} \xB7 ${t2.meta}`
            }),
            (0, s.jsx)("span", { className: tc().sheetDesc, children: t2.desc }),
            (0, s.jsx)("span", {
              className: tc().facts,
              children: t2.facts.map(
                ([t3, e3]) => (0, s.jsxs)(
                  "span",
                  {
                    className: tc().fact,
                    children: [
                      (0, s.jsx)("span", {
                        className: tc().factKey,
                        children: t3
                      }),
                      (0, s.jsx)("span", {
                        className: tc().factValue,
                        children: e3
                      })
                    ]
                  },
                  t3
                )
              )
            })
          ]
        })
      ]
    });
  }
  function tv() {
    let t2 = (0, r.useId)(), e2 = (0, r.useId)(), a2 = (0, r.useId)(), i2 = (0, n.I)() ?? false, [l2] = (0, r.useState)(tg), [c2, d2] = (0, r.useState)("grid"), [A2, p2] = (0, r.useState)(-1), [m2, u2] = (0, r.useState)(-1), [g2, k2] = (0, r.useState)(2), [x2, v2] = (0, r.useState)(() => /* @__PURE__ */ new Set()), [M2, _2] = (0, r.useState)(""), I2 = (0, r.useRef)(null), j2 = (0, r.useRef)(null), E2 = (0, r.useRef)(null), N2 = (0, r.useRef)(null), P2 = (0, r.useRef)([]), F2 = (0, r.useRef)([]), B2 = (0, r.useRef)(null), Q2 = (0, r.useRef)(() => {
    }), T2 = (0, r.useRef)(false);
    (0, r.useEffect)(() => {
      let t3 = I2.current, e3 = j2.current;
      if (!t3 || !e3) return;
      let a3 = new to({
        stage: t3,
        world: e3,
        tag: E2.current,
        cards: P2.current.filter((t4) => !!t4),
        kinds: D.map((t4) => t4.kind),
        aspects: D.map((t4) => t4.aspect),
        onFront: (t4) => l2.set({ front: t4 }),
        onBackdrop: () => Q2.current(),
        onTag: (t4) => l2.set({ tag: t4 })
      });
      return B2.current = a3, () => {
        a3.destroy(), B2.current = null;
      };
    }, [l2]), (0, r.useEffect)(() => {
      B2.current?.setReduced(i2);
    }, [i2]), (0, r.useEffect)(() => {
      A2 >= 0 && N2.current?.focus({ preventScroll: true });
    }, [A2]);
    let S2 = td.find((t3) => t3.id === c2), $2 = m2 >= 0 ? D[m2] : null, R2 = !!$2 && x2.has($2.id);
    function z2(t3) {
      A2 < 0 || (B2.current?.close(), p2(-1), k2(A2), _2(`${D[A2].name} closed`), t3 && (T2.current = true, P2.current[A2]?.focus({ preventScroll: true }), T2.current = false));
    }
    function U2(t3, e3) {
      if (t3 === c2) return;
      let a3 = l2.get(), s2 = a3.hover >= 0 ? a3.hover : a3.key;
      A2 >= 0 && p2(-1), d2(t3), B2.current?.setLayout(t3, s2 >= 0 ? { item: s2 } : e3), _2(`${td.find((e4) => e4.id === t3).label} view`);
    }
    function L2(t3) {
      let e3 = F2.current[t3]?.getBoundingClientRect(), a3 = I2.current?.getBoundingClientRect();
      return e3 && a3 ? { x: e3.left + e3.width / 2 - (a3.left + a3.width / 2), y: -a3.height / 2 } : null;
    }
    return (0, r.useEffect)(() => {
      Q2.current = () => z2(false);
    }), (0, s.jsxs)("section", {
      className: tc().root,
      "aria-labelledby": t2,
      children: [
        (0, s.jsxs)("header", {
          className: tc().header,
          children: [
            (0, s.jsx)("h2", {
              id: t2,
              className: tc().title,
              children: "One collection, six ways to browse"
            }),
            (0, s.jsxs)("p", {
              className: tc().lede,
              children: [
                "The Kiln & Loom autumn edit: ",
                tm,
                " pieces from ",
                tu,
                " makers. Switch the view and every card travels to its new place."
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: tc().toolbar,
          children: [
            (0, s.jsx)(h.x, {
              reducedMotion: "user",
              children: (0, s.jsx)("div", {
                role: "radiogroup",
                "aria-label": "Gallery view",
                className: tc().tabs,
                onKeyDown: function(t3) {
                  if (![
                    "ArrowRight",
                    "ArrowLeft",
                    "ArrowDown",
                    "ArrowUp",
                    "Home",
                    "End"
                  ].includes(t3.key))
                    return;
                  t3.preventDefault();
                  let e3 = td.findIndex((t4) => t4.id === c2), a3 = "Home" === t3.key ? 0 : "End" === t3.key ? td.length - 1 : (e3 + ("ArrowRight" === t3.key || "ArrowDown" === t3.key ? 1 : td.length - 1)) % td.length;
                  F2.current[a3]?.focus(), U2(td[a3].id, L2(a3));
                },
                children: td.map((t3, e3) => {
                  let i3 = t3.id === c2;
                  return (0, s.jsxs)(
                    "button",
                    {
                      ref: (t4) => {
                        F2.current[e3] = t4;
                      },
                      type: "button",
                      role: "radio",
                      "aria-checked": i3,
                      "aria-label": t3.label,
                      tabIndex: i3 ? 0 : -1,
                      className: tc().tab,
                      onClick: () => U2(t3.id, L2(e3)),
                      children: [
                        i3 && (0, s.jsx)(o.PY1.span, {
                          layoutId: a2,
                          className: tc().tabPill,
                          transition: w.T.spring.snappy
                        }),
                        (0, s.jsx)(t3.Icon, {
                          "aria-hidden": "true",
                          className: tc().tabIcon
                        }),
                        (0, s.jsx)("span", {
                          className: tc().tabLabel,
                          "aria-hidden": "true",
                          children: t3.label
                        })
                      ]
                    },
                    t3.id
                  );
                })
              })
            }),
            (0, s.jsx)("p", {
              className: tc().hint,
              children: (0, s.jsx)(
                "span",
                { className: tc().swap, children: S2.hint },
                c2
              )
            })
          ]
        }),
        (0, s.jsxs)("div", {
          ref: I2,
          className: tc().stage,
          role: "group",
          "aria-roledescription": "gallery",
          "aria-label": `Kiln & Loom autumn edit in ${S2.label.toLowerCase()} view: ${tp} cards, ${tm} pieces and ${tu} makers. Left and right arrows change the view, up and down move between cards, Enter opens one.`,
          "data-layout": "grid",
          onKeyDown: function(t3) {
            if ("Escape" === t3.key && A2 >= 0) {
              t3.preventDefault(), z2(true);
              return;
            }
            let e3 = t3.target;
            if (!e3.dataset.card || A2 >= 0) return;
            let a3 = Number(e3.dataset.index);
            if ("ArrowRight" === t3.key || "ArrowLeft" === t3.key) {
              t3.preventDefault();
              let e4 = td.findIndex((t4) => t4.id === c2);
              U2(
                td[(e4 + ("ArrowRight" === t3.key ? 1 : td.length - 1)) % td.length].id,
                { item: a3 }
              );
            } else if ("ArrowDown" === t3.key || "ArrowUp" === t3.key || "Home" === t3.key || "End" === t3.key) {
              t3.preventDefault();
              let e4 = "Home" === t3.key ? 0 : "End" === t3.key ? tp - 1 : Math.min(
                tp - 1,
                Math.max(0, a3 + ("ArrowDown" === t3.key ? 1 : -1))
              );
              P2.current[e4]?.focus({ preventScroll: true });
            }
          },
          children: [
            (0, s.jsx)("div", {
              ref: j2,
              className: tc().world,
              children: D.map((t3, e3) => {
                let a3;
                return (0, s.jsx)(
                  "button",
                  {
                    ref: (t4) => {
                      P2.current[e3] = t4;
                    },
                    type: "button",
                    className: tc().card,
                    style: (a3 = tr(e3), {
                      "--pz": `${(tp - a3) * 0.6}px`,
                      "--pr": `${0 === a3 ? 0 : (7 * e3 % 9 - 4) * 1.1}deg`
                    }),
                    "data-card": "true",
                    "data-index": e3,
                    "data-kind": t3.kind,
                    tabIndex: A2 < 0 && e3 === g2 ? 0 : -1,
                    "aria-label": "maker" === t3.kind ? `${t3.name}, ${t3.by} in ${t3.meta}` : `${t3.name} by ${t3.by}, ${C(t3.stats[0])}`,
                    "aria-hidden": A2 >= 0 || void 0,
                    onClick: () => (function(t4) {
                      let e4 = B2.current;
                      if (!(!e4 || e4.takeClick()) && !(A2 >= 0)) {
                        if ("carousel" === c2 && e4.frontIndex() !== t4)
                          return void e4.toFront(t4);
                        k2(t4), e4.open(t4), p2(t4), u2(t4), _2(`${D[t4].name} opened`);
                      }
                    })(e3),
                    onPointerEnter: (t4) => {
                      "mouse" === t4.pointerType && (l2.set({ hover: e3 }), B2.current?.hover(e3));
                    },
                    onPointerLeave: () => {
                      l2.get().hover === e3 && l2.set({ hover: -1 }), B2.current?.unhover(e3);
                    },
                    onFocus: (t4) => {
                      let a4;
                      return k2(e3), a4 = t4.currentTarget.matches(":focus-visible"), void (l2.set({ key: a4 ? e3 : -1 }), B2.current?.focusItem(e3, a4, !T2.current));
                    },
                    onBlur: () => {
                      l2.get().key === e3 && l2.set({ key: -1 }), B2.current?.blurItem(e3);
                    },
                    children: (0, s.jsx)(tx, { item: t3 })
                  },
                  t3.id
                );
              })
            }),
            (0, s.jsx)("div", {
              ref: E2,
              className: tc().tag,
              "aria-hidden": "true",
              children: (0, s.jsx)(tk, { store: l2 })
            }),
            (0, s.jsx)("div", {
              className: tc().overlay,
              "data-show": A2 >= 0,
              "data-variant": $2?.kind === "photo" ? "hero" : "profile",
              role: "dialog",
              "aria-labelledby": e2,
              "aria-hidden": A2 < 0,
              inert: A2 < 0,
              children: $2 && (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("h3", {
                    id: e2,
                    className: tc().srOnly,
                    children: $2.name
                  }),
                  (0, s.jsx)("p", {
                    className: tc().srOnly,
                    children: `${ty($2)}. ${$2.desc} ${$2.facts.map(([t3, e3]) => `${t3}: ${e3}`).join(", ")}.`
                  }),
                  (0, s.jsx)("button", {
                    ref: N2,
                    type: "button",
                    className: tc().close,
                    "aria-label": `Close ${$2.name}`,
                    onClick: () => z2(true),
                    children: (0, s.jsx)(y.A, { "aria-hidden": "true" })
                  }),
                  (0, s.jsx)("button", {
                    type: "button",
                    className: tc().action,
                    "data-done": R2,
                    "aria-pressed": R2,
                    onClick: () => {
                      let t3, e3;
                      return t3 = x2.has($2.id), e3 = new Set(x2), void (t3 ? e3.delete($2.id) : e3.add($2.id), v2(e3), _2(
                        "maker" === $2.kind ? t3 ? `Unfollowed ${$2.name}` : `Following ${$2.name}` : t3 ? `${$2.name} removed from your bag` : `${$2.name} added to your bag`
                      ));
                    },
                    children: (0, s.jsxs)(
                      "span",
                      {
                        className: tc().actionInner,
                        children: [
                          R2 ? (0, s.jsx)(f.A, { "aria-hidden": "true" }) : (0, s.jsx)(b.A, { "aria-hidden": "true" }),
                          "maker" === $2.kind ? R2 ? "Following" : "Follow" : R2 ? "Added to bag" : "Add to bag"
                        ]
                      },
                      String(R2)
                    )
                  })
                ]
              })
            })
          ]
        }),
        (0, s.jsx)(tw, { store: l2, open: A2 }),
        (0, s.jsx)("div", {
          className: tc().srOnly,
          children: (0, s.jsxs)("table", {
            children: [
              (0, s.jsx)("caption", { children: "Kiln & Loom autumn edit" }),
              (0, s.jsx)("thead", {
                children: (0, s.jsxs)("tr", {
                  children: [
                    (0, s.jsx)("th", { scope: "col", children: "Name" }),
                    (0, s.jsx)("th", { scope: "col", children: "Type" }),
                    (0, s.jsx)("th", {
                      scope: "col",
                      children: "Maker or craft"
                    }),
                    (0, s.jsx)("th", {
                      scope: "col",
                      children: "Price or pieces"
                    }),
                    (0, s.jsx)("th", { scope: "col", children: "Details" })
                  ]
                })
              }),
              (0, s.jsx)("tbody", {
                children: D.map(
                  (t3) => (0, s.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, s.jsx)("th", { scope: "row", children: t3.name }),
                        (0, s.jsx)("td", {
                          children: "maker" === t3.kind ? "Maker" : "Piece"
                        }),
                        (0, s.jsx)("td", {
                          children: "maker" === t3.kind ? `${t3.by}, ${t3.meta}` : t3.by
                        }),
                        (0, s.jsx)("td", { children: tf(t3) }),
                        (0, s.jsx)("td", {
                          children: t3.facts.map(([t4, e3]) => `${t4}: ${e3}`).join(", ")
                        })
                      ]
                    },
                    t3.id
                  )
                )
              })
            ]
          })
        }),
        (0, s.jsx)("p", {
          className: tc().srOnly,
          "aria-live": "polite",
          children: M2
        })
      ]
    });
  }
  let tM = tv;
}

__m(__module,__exports,__require);
}