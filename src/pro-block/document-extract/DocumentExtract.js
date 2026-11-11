function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.r(t), a.d(t, {
    DocumentExtract: () => eq,
    default: () => eW,
    documentToText: () => M,
    invoiceSchema: () => N,
    sampleEmail: () => T,
    sampleInvoice: () => k,
    shipmentSchema: () => $,
    toJsonSchema: () => E
  });
  var n = a(95155), r = a(12115), s = a(25354), i = a(18310), o = a(80642), l = a(40852), c = a(92298), d = a(86104), u = a(35484), m = a(64962), p = a(11012), h = a(64577), x = a(51288), f = a(70008), y = a(73474), _ = a(52898), g = a(7770);
  let b = {
    name: "Claude Haiku 5.5",
    id: "claude-haiku-5-5",
    inputPrice: 0.1,
    outputPrice: 0.5
  }, v = (e2) => e2.kind ?? (/\.(eml|msg)$/i.test(e2.name) ? "email" : "pdf"), j = (e2, t2, a2) => ({ span: `li-${e2}-${t2}`, text: a2 }), k = {
    id: "invoice",
    name: "larkspur-invoice-0418.pdf",
    label: "Invoice",
    kind: "pdf",
    meta: "PDF, 1 page",
    blocks: [
      {
        type: "masthead",
        logo: {
          name: "larkspur",
          detail: "studio",
          color: "#3d4fc4",
          symbol: "petals"
        },
        title: "Invoice"
      },
      {
        type: "columns",
        columns: [
          [
            {
              type: "lines",
              label: "From",
              lines: [
                [{ span: "vendor", text: "Larkspur Studio GmbH" }],
                "Langstrasse 112",
                "8004 Z\xFCrich, Switzerland",
                "VAT CHE-412.773.905 MWST"
              ]
            }
          ],
          [
            {
              type: "lines",
              label: "Bill to",
              lines: [
                "Fjord Analytics AG",
                "Attn. Lena Brunner",
                "Seefeldstrasse 45",
                "8008 Z\xFCrich, Switzerland"
              ]
            }
          ]
        ]
      },
      {
        type: "meta",
        items: [
          ["Invoice no.", [{ span: "number", text: "INV-2026-0418" }]],
          ["Issue date", [{ span: "issue", text: "14 October 2026" }]],
          ["Payment terms", [{ span: "terms", text: "30 days net" }]],
          ["Customer no.", "FJ-20931"]
        ]
      },
      {
        type: "table",
        columns: [
          { label: "Description" },
          { label: "Qty", align: "end" },
          { label: "Unit price", align: "end" },
          { label: "Amount", align: "end" }
        ],
        details: [
          "Discovery, flows and high fidelity screens",
          "Moderated remote sessions, 45 minutes each",
          "Tokens, components and usage notes",
          "Staging environment for the test rounds"
        ],
        rows: [
          [
            [j(0, "d", "Product design sprint, week 41")],
            [j(0, "q", "5"), " days"],
            [j(0, "u", "1,400.00")],
            [j(0, "a", "7,000.00")]
          ],
          [
            [j(1, "d", "Usability testing sessions")],
            [j(1, "q", "6")],
            [j(1, "u", "260.00")],
            [j(1, "a", "1,560.00")]
          ],
          [
            [j(2, "d", "Design system audit")],
            [j(2, "q", "1")],
            [j(2, "u", "2,400.00")],
            [j(2, "a", "2,400.00")]
          ],
          [
            [j(3, "d", "Prototype hosting, October")],
            [j(3, "q", "1")],
            [j(3, "u", "45.00")],
            [j(3, "a", "45.00")]
          ]
        ]
      },
      {
        type: "totals",
        rows: [
          {
            label: "Subtotal",
            value: [{ span: "subtotal", text: "11,005.00" }]
          },
          { label: "VAT 8.1%", value: [{ span: "vat", text: "891.41" }] },
          {
            label: ["Total due ", { span: "currency", text: "CHF" }],
            value: [{ span: "total", text: "11,896.41" }],
            strong: true
          }
        ]
      },
      { type: "heading", text: "Payment details" },
      {
        type: "pairs",
        rows: [
          ["Account holder", "Larkspur Studio GmbH"],
          ["IBAN", [{ span: "iban", text: "CH56 0483 5012 3456 7800 9" }]],
          ["Reference", "INV-2026-0418"]
        ]
      },
      {
        type: "paragraph",
        tone: "muted",
        text: "Our bank details changed on 1 October 2026. Please stop using CH69 0070 0110 0012 3456 7 for new payments."
      },
      {
        type: "footer",
        lines: [
          "Larkspur Studio GmbH \xB7 Langstrasse 112 \xB7 8004 Z\xFCrich",
          "billing@larkspur.example \xB7 larkspur.example"
        ]
      }
    ]
  }, N = {
    name: "invoice",
    title: "Invoice",
    description: "A supplier invoice with its line items, totals and payment details.",
    groups: [
      { key: "details", label: "Invoice" },
      { key: "items", label: "Line items" },
      { key: "totals", label: "Totals" },
      { key: "payment", label: "Payment" }
    ],
    fields: [
      {
        key: "vendor",
        label: "Vendor",
        type: "string",
        group: "details",
        description: "Legal name of the company that issued the invoice."
      },
      {
        key: "invoiceNumber",
        label: "Invoice no.",
        type: "string",
        group: "details"
      },
      {
        key: "issueDate",
        label: "Issue date",
        type: "date",
        group: "details"
      },
      {
        key: "dueDate",
        label: "Due date",
        type: "date",
        group: "details",
        description: "Infer from the payment terms when no date is printed."
      },
      {
        key: "lineItems",
        label: "Line items",
        type: "table",
        group: "items",
        columns: [
          { key: "description", label: "Description", type: "string" },
          { key: "quantity", label: "Qty", type: "number" },
          { key: "unitPrice", label: "Unit price", type: "money" },
          { key: "amount", label: "Amount", type: "money" }
        ]
      },
      {
        key: "currency",
        label: "Currency",
        type: "currency",
        group: "totals",
        description: "ISO 4217 code."
      },
      { key: "subtotal", label: "Subtotal", type: "money", group: "totals" },
      { key: "vat", label: "VAT", type: "money", group: "totals" },
      { key: "total", label: "Total", type: "money", group: "totals" },
      {
        key: "iban",
        label: "IBAN",
        type: "iban",
        group: "payment",
        description: "The account to pay into now."
      }
    ]
  }, w = (e2, t2, a2) => ({ span: `it-${e2}-${t2}`, text: a2 }), T = {
    id: "shipping",
    name: "Your order HD-58213 is on its way.eml",
    label: "Shipping email",
    kind: "email",
    meta: "Email",
    blocks: [
      {
        type: "email",
        subject: "Your order HD-58213 is on its way",
        from: {
          name: [{ span: "merchant", text: "Halden Outdoor" }],
          address: "orders@haldenoutdoor.example"
        },
        to: "Maya Lindqvist",
        date: "Fri, 16 Oct 2026, 09:42"
      },
      {
        type: "masthead",
        logo: {
          name: "halden",
          detail: "outdoor",
          color: "#1f6a50",
          symbol: "peak"
        }
      },
      { type: "paragraph", text: "Hi Maya," },
      {
        type: "paragraph",
        text: [
          "Good news: your order ",
          { span: "order", text: "HD-58213" },
          " ",
          { span: "shipped", text: "shipped today" },
          " from our warehouse in Rotterdam. It is travelling with ",
          { span: "carrier", text: "DHL Express" },
          " and should arrive on ",
          { span: "eta", text: "Tuesday, 20 October" },
          "."
        ]
      },
      {
        type: "meta",
        items: [
          [
            "Tracking number",
            [{ span: "tracking", text: "JVGL 0624 1180 3317" }]
          ],
          ["Shipping to", [{ span: "recipient", text: "Maya Lindqvist" }]]
        ]
      },
      {
        type: "lines",
        lines: [
          [
            {
              span: "address",
              text: "Kungsgatan 18, 111 43 Stockholm, Sweden"
            }
          ]
        ]
      },
      { type: "heading", text: "Items in this shipment" },
      {
        type: "table",
        columns: [
          { label: "Item" },
          { label: "Qty", align: "end" },
          { label: "Price", align: "end" }
        ],
        rows: [
          [
            [w(0, "d", "Trail shell jacket, slate, M")],
            [w(0, "q", "1")],
            ["\u20AC", w(0, "a", "189.00")]
          ],
          [
            [w(1, "d", "Merino base layer, M")],
            [w(1, "q", "2")],
            ["\u20AC", w(1, "a", "118.00")]
          ],
          [
            [w(2, "d", "Insulated bottle, 750 ml")],
            [w(2, "q", "1")],
            ["\u20AC", w(2, "a", "34.00")]
          ]
        ]
      },
      {
        type: "totals",
        rows: [
          { label: "Shipping", value: [{ span: "shipping", text: "Free" }] },
          {
            label: "Total paid",
            value: [
              { span: "currency", text: "\u20AC" },
              { span: "total", text: "341.00" }
            ],
            strong: true
          }
        ]
      },
      {
        type: "paragraph",
        tone: "muted",
        text: "Your wool beanie ships separately once it is back in stock on 27 October."
      },
      {
        type: "paragraph",
        text: "Thanks for shopping with us,\nThe Halden Outdoor team"
      },
      {
        type: "footer",
        lines: [
          "Halden Outdoor \xB7 Westerkade 4 \xB7 3016 CM Rotterdam",
          "You get this email because you ordered from haldenoutdoor.example"
        ]
      }
    ]
  }, $ = {
    name: "shipment",
    title: "Shipment",
    description: "A shipping confirmation with the carrier, dates, address and the items in the parcel.",
    groups: [
      { key: "order", label: "Order" },
      { key: "delivery", label: "Delivery" },
      { key: "items", label: "Items" },
      { key: "totals", label: "Totals" }
    ],
    fields: [
      { key: "merchant", label: "Merchant", type: "string", group: "order" },
      {
        key: "orderNumber",
        label: "Order no.",
        type: "string",
        group: "order"
      },
      { key: "carrier", label: "Carrier", type: "string", group: "delivery" },
      {
        key: "trackingNumber",
        label: "Tracking no.",
        type: "string",
        group: "delivery"
      },
      {
        key: "shipDate",
        label: "Ship date",
        type: "date",
        group: "delivery",
        description: "Resolve relative dates against the email date."
      },
      {
        key: "estimatedDelivery",
        label: "Arrives",
        type: "date",
        group: "delivery"
      },
      {
        key: "recipient",
        label: "Recipient",
        type: "string",
        group: "delivery"
      },
      { key: "shipTo", label: "Ship to", type: "string", group: "delivery" },
      {
        key: "items",
        label: "Items",
        type: "table",
        group: "items",
        columns: [
          { key: "description", label: "Item", type: "string" },
          { key: "quantity", label: "Qty", type: "integer" },
          { key: "amount", label: "Amount", type: "money" }
        ]
      },
      {
        key: "currency",
        label: "Currency",
        type: "currency",
        group: "totals",
        description: "ISO 4217 code."
      },
      {
        key: "shippingCost",
        label: "Shipping",
        type: "money",
        group: "totals"
      },
      { key: "total", label: "Total", type: "money", group: "totals" }
    ]
  }, C = [
    { document: k, schema: N },
    { document: T, schema: $ }
  ], S = (e2, t2, a2, n2, r2, s2) => a2.flatMap(
    (a3, i2) => a3.map((a4, o2) => ({
      path: `${e2}.${i2}.${n2[o2]}`,
      value: a4,
      source: `${t2}-${i2}-${r2[o2]}`,
      confidence: s2[i2]?.[o2] ?? 0.97
    }))
  ), A = {
    invoice: {
      inputTokens: 1920,
      values: [
        {
          path: "vendor",
          value: "Larkspur Studio GmbH",
          source: "vendor",
          confidence: 0.99
        },
        {
          path: "invoiceNumber",
          value: "INV-2026-0418",
          source: "number",
          confidence: 0.99
        },
        {
          path: "issueDate",
          value: "2026-10-14",
          source: "issue",
          confidence: 0.98
        },
        {
          path: "dueDate",
          value: "2026-11-13",
          source: "terms",
          confidence: 0.64,
          note: "Not printed. Worked out as the issue date plus 30 days net."
        },
        ...S(
          "lineItems",
          "li",
          [
            ["Product design sprint, week 41", "5", "1,400.00", "7,000.00"],
            ["Usability testing sessions", "6", "260.00", "1,560.00"],
            ["Design system audit", "1", "2,400.00", "2,400.00"],
            ["Prototype hosting, October", "1", "45.00", "45.00"]
          ],
          ["description", "quantity", "unitPrice", "amount"],
          ["d", "q", "u", "a"],
          [
            [0.98, 0.93, 0.99, 0.99],
            [0.99, 0.98, 0.99, 0.99],
            [0.99, 0.98, 0.99, 0.99],
            [0.97, 0.98, 0.99, 0.99]
          ]
        ),
        {
          path: "currency",
          value: "CHF",
          source: "currency",
          confidence: 0.97
        },
        {
          path: "subtotal",
          value: "11,005.00",
          source: "subtotal",
          confidence: 0.99
        },
        { path: "vat", value: "891.41", source: "vat", confidence: 0.97 },
        {
          path: "total",
          value: "11,896.41",
          source: "total",
          confidence: 0.99
        },
        {
          path: "iban",
          value: "CH56 0483 5012 3456 7800 9",
          source: "iban",
          confidence: 0.72,
          note: "Two account numbers on the page. Took the current one, the other is marked as closed."
        }
      ]
    },
    shipping: {
      inputTokens: 1340,
      failAfter: 4,
      values: [
        {
          path: "merchant",
          value: "Halden Outdoor",
          source: "merchant",
          confidence: 0.98
        },
        {
          path: "orderNumber",
          value: "HD-58213",
          source: "order",
          confidence: 0.99
        },
        {
          path: "carrier",
          value: "DHL Express",
          source: "carrier",
          confidence: 0.99
        },
        {
          path: "trackingNumber",
          value: "JVGL 0624 1180 3317",
          source: "tracking",
          confidence: 0.97
        },
        {
          path: "shipDate",
          value: "2026-10-16",
          source: "shipped",
          confidence: 0.74,
          note: "The email says shipped today. Read today as the date the email was sent."
        },
        {
          path: "estimatedDelivery",
          value: "2026-10-20",
          source: "eta",
          confidence: 0.79,
          note: "No year in the text. Took 2026 from the email date."
        },
        {
          path: "recipient",
          value: "Maya Lindqvist",
          source: "recipient",
          confidence: 0.99
        },
        {
          path: "shipTo",
          value: "Kungsgatan 18, 111 43 Stockholm, Sweden",
          source: "address",
          confidence: 0.97
        },
        ...S(
          "items",
          "it",
          [
            ["Trail shell jacket, slate, M", "1", "189.00"],
            ["Merino base layer, M", "2", "118.00"],
            ["Insulated bottle, 750 ml", "1", "34.00"]
          ],
          ["description", "quantity", "amount"],
          ["d", "q", "a"],
          [
            [0.98, 0.99, 0.99],
            [0.98, 0.97, 0.96],
            [0.99, 0.99, 0.99]
          ]
        ),
        {
          path: "currency",
          value: "EUR",
          source: "currency",
          confidence: 0.95
        },
        {
          path: "shippingCost",
          value: "0.00",
          source: "shipping",
          confidence: 0.93
        },
        { path: "total", value: "341.00", source: "total", confidence: 0.99 }
      ]
    }
  }, L = (e2, t2) => new Promise((a2, n2) => {
    if (t2.aborted) return void n2(new DOMException("Aborted", "AbortError"));
    let r2 = window.setTimeout(a2, e2);
    t2.addEventListener(
      "abort",
      () => {
        window.clearTimeout(r2), n2(new DOMException("Aborted", "AbortError"));
      },
      { once: true }
    );
  }), O = (e2) => 6 + Math.ceil(e2.value.length / 3.2), B = (e2) => "string" == typeof e2 ? e2 : e2.map((e3) => "string" == typeof e3 ? e3 : e3.text).join("");
  function M(e2) {
    let t2 = (e3) => {
      switch (e3.type) {
        case "masthead":
          return [
            e3.logo ? [e3.logo.name, e3.logo.detail].filter(Boolean).join(" ") : "",
            e3.title ?? ""
          ].filter(Boolean).join("\n");
        case "email":
          return `From: ${B(e3.from.name)} <${e3.from.address}>
To: ${e3.to}
Date: ${e3.date}
Subject: ${B(e3.subject)}`;
        case "heading":
        case "paragraph":
          return B(e3.text);
        case "lines":
          return [e3.label, ...e3.lines.map(B)].filter(Boolean).join("\n");
        case "pairs":
        case "meta":
          return ("pairs" === e3.type ? e3.rows : e3.items).map(([e4, t3]) => `${e4}: ${B(t3)}`).join("\n");
        case "columns":
          return e3.columns.map((e4) => e4.map(t2).join("\n\n")).join("\n\n");
        case "table":
          return [
            e3.columns.map((e4) => e4.label).join(" | "),
            ...e3.rows.map(
              (t3, a2) => t3.map(B).join(" | ") + (e3.details?.[a2] ? ` (${e3.details[a2]})` : "")
            )
          ].join("\n");
        case "totals":
          return e3.rows.map((e4) => `${B(e4.label)}: ${B(e4.value)}`).join("\n");
        case "footer":
          return e3.lines.map(B).join("\n");
        case "rule":
          return "";
      }
    };
    return e2.blocks.map(t2).filter(Boolean).join("\n\n");
  }
  let R = {
    string: { type: "string" },
    date: { type: "string", format: "date" },
    money: { type: "number", multipleOf: 0.01 },
    currency: { type: "string", pattern: "^[A-Z]{3}$" },
    iban: { type: "string", pattern: "^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,30}$" },
    integer: { type: "integer" },
    number: { type: "number" }
  };
  function E(e2) {
    let t2 = (e3) => ({
      ...R[e3.type],
      type: [R[e3.type].type, "null"],
      description: e3.description ?? e3.label
    });
    return {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      title: e2.title,
      ...e2.description ? { description: e2.description } : {},
      type: "object",
      additionalProperties: false,
      required: e2.fields.map((e3) => e3.key),
      properties: Object.fromEntries(
        e2.fields.map((e3) => [
          e3.key,
          "table" === e3.type ? {
            type: "array",
            description: e3.description ?? e3.label,
            items: {
              type: "object",
              additionalProperties: false,
              required: e3.columns.map((e4) => e4.key),
              properties: Object.fromEntries(
                e3.columns.map((e4) => [e4.key, t2(e4)])
              )
            }
          } : t2(e3)
        ])
      )
    };
  }
  function F(e2, t2) {
    let a2 = t2.trim();
    if (!a2) return null;
    switch (e2) {
      case "string":
        return a2;
      case "date": {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(a2)) return;
        let e3 = /* @__PURE__ */ new Date(`${a2}T00:00:00Z`);
        return Number.isNaN(e3.getTime()) || e3.toISOString().slice(0, 10) !== a2 ? void 0 : a2;
      }
      case "currency":
        return /^[A-Za-z]{3}$/.test(a2) ? a2.toUpperCase() : void 0;
      case "iban": {
        let e3 = a2.replace(/\s+/g, "").toUpperCase();
        if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(e3)) return;
        let t3 = (e3.slice(4) + e3.slice(0, 4)).replace(
          /[A-Z]/g,
          (e4) => String(e4.charCodeAt(0) - 55)
        ), n2 = 0;
        for (let e4 of t3) n2 = (10 * n2 + Number(e4)) % 97;
        return 1 === n2 ? e3 : void 0;
      }
      case "money":
      case "number":
      case "integer": {
        let t3 = Number(a2.replace(/[\s,'’]/g, ""));
        if (!Number.isFinite(t3)) return;
        if ("integer" === e2) return Number.isInteger(t3) ? t3 : void 0;
        return "money" === e2 ? Math.round(100 * t3) / 100 : t3;
      }
    }
  }
  let I = {
    string: "Text",
    date: "Use YYYY-MM-DD",
    money: "Use a number such as 1,250.00",
    currency: "Use a three letter code such as EUR",
    iban: "This IBAN does not pass its check digits",
    integer: "Use a whole number",
    number: "Use a number"
  };
  var P = a(79196), D = a(87979), H = a(97824), q = a.n(H);
  let { spring: W, duration: z, ease: Y, stagger: Z } = g.T, V = [...Y.standard], U = (e2, t2) => !!e2 && void 0 !== e2.confidence && e2.confidence < t2 && !e2.review && !e2.accepted, G = (e2) => "money" === e2 || "number" === e2 ? "decimal" : "integer" === e2 ? "numeric" : void 0, J = (e2) => "money" === e2 || "number" === e2 || "integer" === e2, Q = {
    string: "Text",
    date: "Date",
    money: "Amount",
    currency: "Code",
    iban: "IBAN",
    integer: "Number",
    number: "Number"
  }, X = (e2, t2) => !!e2 && (e2 === t2 || e2.startsWith(`${t2}.`) || t2.startsWith(`${e2}.`)), K = (e2) => ({ "--tone": `var(--series-${e2 ?? 1})` }), ee = (e2) => (t2) => {
    "mouse" === t2.pointerType && e2();
  };
  function et({ state: e2, threshold: t2, reduced: a2, idle: r2, delay: i2 = 0 }) {
    let l2 = e2?.confidence !== void 0 ? Math.round(100 * e2.confidence) : void 0, c2 = "idle", d2 = null, u2 = r2 ?? null, m2 = "muted", x2;
    e2?.accepted ? (c2 = "accepted", d2 = (0, n.jsx)(h.A, { "aria-hidden": "true" }), u2 = "edited" === e2.review ? "Edited" : void 0 !== l2 ? `${l2}%` : "Done", m2 = "success", x2 = "edited" === e2.review ? "Edited and accepted" : `Accepted, confidence ${l2} percent`) : e2?.review === "edited" ? (c2 = "edited", d2 = (0, n.jsx)(D.A, { "aria-hidden": "true" }), u2 = "Edited") : e2?.review === "checked" ? (c2 = "checked", d2 = (0, n.jsx)(h.A, { "aria-hidden": "true" }), u2 = `${l2}%`, m2 = "success", x2 = `Checked, confidence ${l2} percent`) : void 0 !== l2 && e2?.confidence !== void 0 && (e2.confidence < t2 ? (c2 = "check", d2 = (0, n.jsx)(p.A, { "aria-hidden": "true" }), u2 = `${l2}%`, m2 = "warning", x2 = `Low confidence, ${l2} percent, check this value`) : (c2 = "ok", u2 = `${l2}%`, x2 = `Confidence ${l2} percent`));
    let f2 = "accepted" === c2 || "checked" === c2;
    return (0, n.jsx)("span", {
      className: q().conf,
      "data-tone": m2,
      children: (0, n.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsxs)(
          s.PY1.span,
          {
            className: q().confInner,
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: { duration: 0.1, delay: i2 } },
            transition: { duration: z.fast, ease: V, delay: i2 },
            children: [
              d2 && (f2 && !a2 ? (0, n.jsx)(s.PY1.span, {
                className: q().confIcon,
                initial: { scale: 0.4 },
                animate: { scale: 1 },
                transition: { ...W.snappy, delay: i2 },
                children: d2
              }) : (0, n.jsx)("span", {
                className: q().confIcon,
                children: d2
              })),
              (0, n.jsx)("span", { "aria-hidden": !!x2 || void 0, children: u2 }),
              x2 && (0, n.jsx)("span", { className: q().srOnly, children: x2 })
            ]
          },
          c2
        )
      })
    });
  }
  function ea({ children: e2, className: t2, reduced: a2 }) {
    let r2 = (0, P.tF)();
    return (0, n.jsx)(s.PY1.div, {
      className: ((...e3) => e3.filter(Boolean).join(" "))(q().reveal, t2),
      inert: !r2 || void 0,
      initial: { height: 0, opacity: 0 },
      animate: { height: "auto", opacity: 1 },
      exit: { height: 0, opacity: 0 },
      transition: a2 ? { duration: 0 } : { ...W.smooth, opacity: { duration: z.fast, ease: V } },
      children: e2
    });
  }
  function en({ field: e2, ctx: t2 }) {
    let a2 = (0, r.useId)(), s2 = t2.values[e2.key], i2 = U(s2, t2.threshold), l2 = !!s2?.value.trim() && void 0 === F(e2.type, s2.value), c2 = [i2 && s2?.note ? `${a2}-note` : "", l2 ? `${a2}-error` : ""].filter(Boolean).join(" ") || void 0, d2 = s2?.accepted && !t2.reduced ? (t2.order[e2.key] ?? 0) * Z.item : 0;
    return (0, n.jsxs)("div", {
      className: q().row,
      "data-anchor": "",
      "data-active": X(t2.activePath, e2.key) ? "" : void 0,
      "data-tone": i2 ? "check" : void 0,
      style: K(t2.tones[e2.key]),
      onPointerEnter: ee(() => t2.onHover(e2.key)),
      onPointerLeave: ee(() => t2.onHover(null)),
      children: [
        (0, n.jsx)("label", {
          htmlFor: a2,
          className: q().rowLabel,
          children: e2.label
        }),
        (0, n.jsx)("input", {
          id: a2,
          className: q().input,
          "data-link": e2.key,
          "data-numeric": J(e2.type) ? "" : void 0,
          "data-landed": s2?.confidence !== void 0 ? "" : void 0,
          value: s2?.value ?? "",
          readOnly: t2.busy,
          "aria-invalid": l2 || void 0,
          "aria-describedby": c2,
          spellCheck: false,
          autoComplete: "off",
          inputMode: G(e2.type),
          onChange: (a3) => t2.onEdit(e2.key, a3.target.value),
          onFocus: () => t2.onFocusPath(e2.key)
        }),
        (0, n.jsx)(et, {
          state: s2,
          threshold: t2.threshold,
          reduced: t2.reduced,
          idle: Q[e2.type],
          delay: d2
        }),
        (0, n.jsxs)(o.N, {
          initial: false,
          children: [
            i2 && s2?.note && (0, n.jsx)(
              ea,
              {
                className: q().rowExtra,
                reduced: t2.reduced,
                children: (0, n.jsxs)("div", {
                  className: q().note,
                  children: [
                    (0, n.jsx)("p", {
                      id: `${a2}-note`,
                      className: q().noteText,
                      children: s2.note
                    }),
                    (0, n.jsxs)("button", {
                      type: "button",
                      className: q().noteButton,
                      onClick: () => t2.onCheck(e2.key),
                      children: [
                        (0, n.jsx)(h.A, { "aria-hidden": "true" }),
                        "Looks right"
                      ]
                    })
                  ]
                })
              },
              "note"
            ),
            l2 && (0, n.jsx)(
              ea,
              {
                className: q().rowExtra,
                reduced: t2.reduced,
                children: (0, n.jsx)("p", {
                  id: `${a2}-error`,
                  className: q().fieldError,
                  children: I[e2.type]
                })
              },
              "error"
            )
          ]
        })
      ]
    });
  }
  function er({ field: e2, ctx: t2 }) {
    let a2 = (0, r.useId)(), i2 = `${e2.key}.`, l2 = Object.keys(t2.values).filter((e3) => e3.startsWith(i2)), c2 = l2.reduce((e3, t3) => Math.max(e3, Number(t3.split(".")[1]) + 1), 0), d2 = l2.map((e3) => t2.values[e3]).filter((e3) => !!e3), u2 = l2.filter((e3) => U(t2.values[e3], t2.threshold)), m2 = d2.filter((e3) => void 0 !== e3.confidence), p2 = (e3) => Math.min(...e3.map((e4) => e4.confidence ?? 1)), x2 = d2.length > 0 && d2.every((e3) => e3.accepted), f2 = m2.length ? x2 ? {
      value: "",
      accepted: true,
      confidence: p2(m2),
      review: d2.some((e3) => "edited" === e3.review) ? "edited" : void 0
    } : u2.length ? { value: "", confidence: p2(u2.map((e3) => t2.values[e3])) } : d2.some((e3) => "edited" === e3.review) ? { value: "", review: "edited" } : { value: "", confidence: p2(m2) } : void 0, y2 = x2 && !t2.reduced ? (t2.order[e2.key] ?? 0) * Z.item : 0;
    return (0, n.jsxs)("div", {
      className: q().tableField,
      "data-active": X(t2.activePath, e2.key) ? "" : void 0,
      style: K(t2.tones[e2.key]),
      children: [
        (0, n.jsxs)("div", {
          className: q().tableTitle,
          onPointerEnter: ee(() => t2.onHover(e2.key)),
          onPointerLeave: ee(() => t2.onHover(null)),
          children: [
            (0, n.jsx)("span", {
              className: q().groupDot,
              "aria-hidden": "true"
            }),
            (0, n.jsx)("span", {
              id: `${a2}-label`,
              className: q().tableLabel,
              children: e2.label
            }),
            (0, n.jsx)("span", {
              className: q().rowCount,
              children: c2 ? `${c2} ${1 === c2 ? "row" : "rows"}` : "Table"
            }),
            (0, n.jsx)(et, {
              state: f2,
              threshold: t2.threshold,
              reduced: t2.reduced,
              delay: y2
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: q().grid,
          "data-anchor": "",
          role: "table",
          "aria-labelledby": `${a2}-label`,
          "data-columns": e2.columns.length,
          children: [
            (0, n.jsx)("div", {
              className: q().gridHead,
              role: "row",
              children: e2.columns.map(
                (e3) => (0, n.jsx)(
                  "span",
                  {
                    role: "columnheader",
                    className: q().th,
                    "data-numeric": J(e3.type) ? "" : void 0,
                    children: e3.label
                  },
                  e3.key
                )
              )
            }),
            0 === c2 && (0, n.jsx)("p", {
              className: q().gridEmpty,
              children: t2.busy ? "Rows appear here as they are found" : "No rows yet"
            }),
            (0, n.jsx)(o.N, {
              initial: false,
              children: Array.from(
                { length: c2 },
                (a3, r2) => (0, n.jsx)(
                  s.PY1.div,
                  {
                    role: "row",
                    className: q().tr,
                    initial: !t2.reduced && { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: { height: 0, opacity: 0 },
                    transition: t2.reduced ? { duration: 0 } : { ...W.smooth, opacity: { duration: z.fast, ease: V } },
                    children: (0, n.jsx)("div", {
                      className: q().trInner,
                      children: e2.columns.map((a4) => {
                        let s2 = `${e2.key}.${r2}.${a4.key}`, i3 = t2.values[s2], o2 = U(i3, t2.threshold), l3 = !!i3?.value.trim() && void 0 === F(a4.type, i3.value), c3 = J(a4.type);
                        return (0, n.jsx)(
                          "span",
                          {
                            role: "cell",
                            className: q().td,
                            "data-numeric": c3 ? "" : void 0,
                            onPointerEnter: ee(() => t2.onHover(s2)),
                            onPointerLeave: ee(() => t2.onHover(null)),
                            children: (0, n.jsx)("input", {
                              className: q().cellInput,
                              "data-link": s2,
                              "data-numeric": c3 ? "" : void 0,
                              "data-landed": i3?.confidence !== void 0 ? "" : void 0,
                              "data-active": t2.activePath === s2 ? "" : void 0,
                              "data-tone": o2 ? "check" : void 0,
                              value: i3?.value ?? "",
                              readOnly: t2.busy,
                              "aria-label": `${a4.label}, row ${r2 + 1}${o2 ? ", needs a check" : ""}`,
                              "aria-invalid": l3 || void 0,
                              spellCheck: false,
                              autoComplete: "off",
                              inputMode: G(a4.type),
                              onChange: (e3) => t2.onEdit(s2, e3.target.value),
                              onFocus: () => t2.onFocusPath(s2)
                            })
                          },
                          a4.key
                        );
                      })
                    })
                  },
                  r2
                )
              )
            })
          ]
        }),
        (0, n.jsx)(o.N, {
          initial: false,
          children: u2.length > 0 && (0, n.jsx)(
            ea,
            {
              reduced: t2.reduced,
              children: (0, n.jsxs)("div", {
                className: q().note,
                children: [
                  (0, n.jsx)("p", {
                    className: q().noteText,
                    children: 1 === u2.length ? "One cell is marked with low confidence." : `${u2.length} cells are marked with low confidence.`
                  }),
                  (0, n.jsxs)("button", {
                    type: "button",
                    className: q().noteButton,
                    onClick: () => t2.onCheck(e2.key),
                    children: [
                      (0, n.jsx)(h.A, { "aria-hidden": "true" }),
                      "Looks right"
                    ]
                  })
                ]
              })
            },
            "note"
          )
        })
      ]
    });
  }
  function es({ schema: e2, ctx: t2 }) {
    let a2 = e2.groups?.length ? e2.groups : [], r2 = a2.map((t3) => ({
      key: t3.key,
      label: t3.label,
      fields: e2.fields.filter((e3) => e3.group === t3.key)
    })), s2 = e2.fields.filter((e3) => !e3.group || !a2.some((t3) => t3.key === e3.group));
    return s2.length && r2.push({ key: "__rest", fields: s2 }), (0, n.jsx)("div", {
      className: q().form,
      children: r2.filter((e3) => e3.fields.length).map((e3) => {
        let a3 = e3.fields[0], r3 = 1 === e3.fields.length && a3?.label === e3.label;
        return (0, n.jsxs)(
          "section",
          {
            className: q().group,
            "aria-label": e3.label,
            "data-solo": r3 ? "" : void 0,
            style: K(a3 ? t2.tones[a3.key] : 1),
            children: [
              e3.label && !r3 && (0, n.jsxs)("p", {
                className: q().groupHead,
                "aria-hidden": "true",
                children: [
                  (0, n.jsx)("span", { className: q().groupDot }),
                  e3.label
                ]
              }),
              e3.fields.map(
                (e4) => "table" === e4.type ? (0, n.jsx)(er, { field: e4, ctx: t2 }, e4.key) : (0, n.jsx)(en, { field: e4, ctx: t2 }, e4.key)
              )
            ]
          },
          e3.key
        );
      })
    });
  }
  let ei = String.raw`("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)`;
  function eo({ value: e2, label: t2, linking: a2 }) {
    let r2, s2, i2 = (r2 = [], (s2 = (e3, t3, a3, n2, i3) => {
      let o3 = "  ".repeat(t3), l2 = null !== n2 ? `${JSON.stringify(n2)}: ` : "", c2 = i3 ? "," : "";
      if (Array.isArray(e3) || e3 && "object" == typeof e3) {
        let n3 = Array.isArray(e3) ? e3.map((e4, t4) => [String(t4), e4]) : Object.entries(e3), [i4, d2] = Array.isArray(e3) ? ["[", "]"] : ["{", "}"];
        if (!n3.length)
          return void r2.push({ text: `${o3}${l2}${i4}${d2}${c2}`, path: a3 });
        r2.push({ text: `${o3}${l2}${i4}`, path: a3 }), n3.forEach(
          ([r3, i5], o4) => s2(
            i5,
            t3 + 1,
            a3 ? `${a3}.${r3}` : r3,
            Array.isArray(e3) ? null : r3,
            o4 < n3.length - 1
          )
        ), r2.push({ text: `${o3}${d2}${c2}`, path: a3 });
      } else
        r2.push({
          text: `${o3}${l2}${JSON.stringify(e3)}${c2}`,
          path: a3,
          leaf: true
        });
    })(e2, 0, void 0, null, false), r2), o2 = (e3) => e3.closest("[data-link]")?.dataset.link ?? null;
    return (0, n.jsx)("pre", {
      className: q().code,
      "aria-label": t2,
      tabIndex: 0,
      "data-linked": a2 ? "" : void 0,
      onPointerOver: a2 ? (e3) => {
        "mouse" === e3.pointerType && a2.onHover(o2(e3.target));
      } : void 0,
      onPointerLeave: a2 ? (e3) => {
        "mouse" === e3.pointerType && a2.onHover(null);
      } : void 0,
      onClick: a2 ? (e3) => {
        let t3 = o2(e3.target);
        t3 && a2.onSelect(t3);
      } : void 0,
      children: (0, n.jsx)("code", {
        children: i2.map((e3, t3) => {
          let r3 = e3.path?.split(".")[0], s3 = !!a2 && !!e3.path, i3 = s3 && e3.leaf && e3.path ? a2.edits[e3.path] : void 0;
          return (0, n.jsx)(
            "span",
            {
              className: q().jsonLine,
              "data-link": s3 ? e3.path : void 0,
              "data-active": s3 && e3.path && a2.activePath && (e3.path === a2.activePath || e3.path.startsWith(`${a2.activePath}.`)) ? "" : void 0,
              "data-changed": i3 ? "" : void 0,
              style: s3 && r3 ? K(a2.tones[r3]) : void 0,
              children: (function(e4) {
                let t4 = [], a3 = RegExp(ei, "g"), r4 = 0, s4;
                for (; s4 = a3.exec(e4); ) {
                  s4.index > r4 && t4.push(e4.slice(r4, s4.index));
                  let i4 = s4[1] ? s4[2] ? "key" : "string" : s4[3] ? "literal" : "number";
                  t4.push(
                    (0, n.jsx)(
                      "span",
                      { className: q()[`json_${i4}`], children: s4[1] ?? s4[0] },
                      s4.index
                    )
                  ), s4[2] && t4.push(s4[2]), r4 = a3.lastIndex;
                }
                return t4.push(e4.slice(r4)), t4;
              })(e3.text)
            },
            `${t3}-${i3 ?? 0}`
          );
        })
      })
    });
  }
  var el = a(28245), ec = a(92171), ed = a(57793), eu = a(75796), em = a(12363), ep = a(36565), eh = a(2125), ex = a(36690);
  let { spring: ef } = g.T, ey = (...e2) => e2.filter(Boolean).join(" "), e_ = [0.5, 0.67, 0.75, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2], eg = (e2) => Math.min(2, Math.max(0.4, e2));
  function eb() {
    return (0, n.jsxs)("svg", {
      className: q().fileMark,
      viewBox: "0 0 16 20",
      "aria-hidden": "true",
      children: [
        (0, n.jsx)("path", {
          d: "M2.5 1h7.2L14 5.3v12.2c0 .8-.7 1.5-1.5 1.5h-10C1.7 19 1 18.3 1 17.5v-15C1 1.7 1.7 1 2.5 1Z",
          fill: "var(--surface)",
          stroke: "currentColor",
          strokeOpacity: ".32"
        }),
        (0, n.jsx)("path", {
          d: "M9.7 1v3.1c0 .7.5 1.2 1.2 1.2H14",
          fill: "none",
          stroke: "currentColor",
          strokeOpacity: ".32"
        }),
        (0, n.jsx)("rect", {
          x: "0",
          y: "10",
          width: "11",
          height: "6",
          rx: "1.5",
          fill: "#d93a32"
        }),
        (0, n.jsx)("path", {
          d: "M2 14.6v-3.2h1.2c.6 0 1 .4 1 1s-.4 1-1 1H2M5.2 14.6v-3.2h.9c.9 0 1.5.6 1.5 1.6s-.6 1.6-1.5 1.6h-.9ZM8.5 14.6v-3.2h1.6M8.5 13h1.3",
          fill: "none",
          stroke: "#fff",
          strokeWidth: ".8",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      ]
    });
  }
  function ev({ symbol: e2 }) {
    return "petals" === e2 ? (0, n.jsx)("svg", {
      className: q().logoSymbol,
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      children: [0, 120, 240].map(
        (e3) => (0, n.jsx)(
          "ellipse",
          {
            cx: "10",
            cy: "6.4",
            rx: "3.3",
            ry: "5.4",
            fill: "currentColor",
            fillOpacity: ".78",
            transform: `rotate(${e3} 10 11)`
          },
          e3
        )
      )
    }) : "peak" === e2 ? (0, n.jsx)("svg", {
      className: q().logoSymbol,
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      children: (0, n.jsx)("path", {
        d: "M1.5 16.5 7.6 6.2l3.1 5.1 2-3.2 5.8 8.4Z",
        fill: "currentColor"
      })
    }) : null;
  }
  function ej({ logo: e2 }) {
    return (0, n.jsxs)("span", {
      className: q().logo,
      style: e2.color ? { color: e2.color } : void 0,
      children: [
        (0, n.jsx)(ev, { symbol: e2.symbol }),
        (0, n.jsx)("span", { className: q().logoName, children: e2.name }),
        e2.detail && (0, n.jsx)("span", { className: q().logoDetail, children: e2.detail })
      ]
    });
  }
  function ek({
    document: e2,
    links: t2,
    lit: a2,
    scanKey: s2,
    reduced: i2,
    onSpanHover: o2,
    onSpanPress: l2,
    onBackgroundPress: c2,
    pageRef: d2,
    style: u2
  }) {
    let m2 = v(e2), p2 = e2.blocks.find((e3) => "masthead" === e3.type && !!e3.logo)?.logo?.color, h2 = (e3) => "string" == typeof e3 ? e3 : e3.map((e4, s3) => {
      if ("string" == typeof e4)
        return (0, n.jsx)(r.Fragment, { children: e4 }, s3);
      let i3 = t2.get(e4.span);
      return (0, n.jsx)(
        "span",
        {
          className: q().span,
          "data-span": e4.span,
          "data-linked": i3 ? "" : void 0,
          "data-tone": i3?.tone,
          "data-lit": a2.has(e4.span) ? "" : void 0,
          style: i3 ? { "--tone": `var(--series-${i3.color})` } : void 0,
          children: e4.text
        },
        s3
      );
    }), x2 = (e3, t3) => {
      switch (e3.type) {
        case "masthead":
          return (0, n.jsxs)(
            "div",
            {
              className: q().masthead,
              children: [
                e3.logo ? (0, n.jsx)(ej, { logo: e3.logo }) : (0, n.jsx)("span", {}),
                e3.title && (0, n.jsx)("p", {
                  className: q().docTitle,
                  children: e3.title
                })
              ]
            },
            t3
          );
        case "email": {
          let a3 = B(e3.from.name).split(/\s+/).map((e4) => e4[0]).join("").slice(0, 2);
          return (0, n.jsxs)(
            "div",
            {
              className: q().mailHead,
              children: [
                (0, n.jsx)("p", {
                  className: q().mailSubject,
                  children: h2(e3.subject)
                }),
                (0, n.jsxs)("div", {
                  className: q().mailFrom,
                  children: [
                    (0, n.jsx)("span", {
                      className: q().mailAvatar,
                      style: p2 ? { background: p2 } : void 0,
                      "aria-hidden": "true",
                      children: a3
                    }),
                    (0, n.jsxs)("div", {
                      className: q().mailWho,
                      children: [
                        (0, n.jsxs)("p", {
                          children: [
                            (0, n.jsx)("span", {
                              className: q().mailName,
                              children: h2(e3.from.name)
                            }),
                            " ",
                            (0, n.jsxs)("span", {
                              className: q().inkMuted,
                              children: ["<", e3.from.address, ">"]
                            })
                          ]
                        }),
                        (0, n.jsxs)("p", {
                          className: q().inkMuted,
                          children: ["To ", e3.to]
                        })
                      ]
                    }),
                    (0, n.jsx)("p", {
                      className: ey(q().mailDate, q().inkMuted),
                      children: e3.date
                    })
                  ]
                })
              ]
            },
            t3
          );
        }
        case "heading":
          return (0, n.jsx)(
            "p",
            { className: q().docHeading, children: h2(e3.text) },
            t3
          );
        case "paragraph":
          return (0, n.jsx)(
            "p",
            {
              className: ey(q().docText, "muted" === e3.tone && q().inkMuted),
              children: h2(e3.text)
            },
            t3
          );
        case "lines":
          return (0, n.jsxs)(
            "div",
            {
              className: q().docLines,
              children: [
                e3.label && (0, n.jsx)("p", {
                  className: q().docLabel,
                  children: e3.label
                }),
                e3.lines.map((e4, t4) => (0, n.jsx)("p", { children: h2(e4) }, t4))
              ]
            },
            t3
          );
        case "pairs":
          return (0, n.jsx)(
            "dl",
            {
              className: q().docPairs,
              children: e3.rows.map(
                ([e4, t4]) => (0, n.jsxs)(
                  "div",
                  {
                    children: [
                      (0, n.jsx)("dt", { children: e4 }),
                      (0, n.jsx)("dd", { children: h2(t4) })
                    ]
                  },
                  e4
                )
              )
            },
            t3
          );
        case "meta":
          return (0, n.jsx)(
            "dl",
            {
              className: q().docMeta,
              style: { "--count": e3.items.length },
              children: e3.items.map(
                ([e4, t4]) => (0, n.jsxs)(
                  "div",
                  {
                    children: [
                      (0, n.jsx)("dt", { children: e4 }),
                      (0, n.jsx)("dd", { children: h2(t4) })
                    ]
                  },
                  e4
                )
              )
            },
            t3
          );
        case "columns":
          return (0, n.jsx)(
            "div",
            {
              className: q().docColumns,
              children: e3.columns.map(
                (e4, t4) => (0, n.jsx)("div", { children: e4.map(x2) }, t4)
              )
            },
            t3
          );
        case "table":
          return (0, n.jsxs)(
            "table",
            {
              className: q().docTable,
              children: [
                (0, n.jsx)("thead", {
                  children: (0, n.jsx)("tr", {
                    children: e3.columns.map(
                      (e4) => (0, n.jsx)(
                        "th",
                        {
                          scope: "col",
                          "data-align": e4.align,
                          children: e4.label
                        },
                        e4.label
                      )
                    )
                  })
                }),
                (0, n.jsx)("tbody", {
                  children: e3.rows.map(
                    (t4, a3) => (0, n.jsx)(
                      "tr",
                      {
                        children: t4.map(
                          (t5, r2) => (0, n.jsxs)(
                            "td",
                            {
                              "data-align": e3.columns[r2]?.align,
                              children: [
                                h2(t5),
                                0 === r2 && e3.details?.[a3] && (0, n.jsx)("span", {
                                  className: q().docDetail,
                                  children: e3.details[a3]
                                })
                              ]
                            },
                            r2
                          )
                        )
                      },
                      a3
                    )
                  )
                })
              ]
            },
            t3
          );
        case "totals":
          return (0, n.jsx)(
            "dl",
            {
              className: q().docTotals,
              children: e3.rows.map(
                (e4, t4) => (0, n.jsxs)(
                  "div",
                  {
                    "data-strong": e4.strong ? "" : void 0,
                    children: [
                      (0, n.jsx)("dt", { children: h2(e4.label) }),
                      (0, n.jsx)("dd", { children: h2(e4.value) })
                    ]
                  },
                  t4
                )
              )
            },
            t3
          );
        case "rule":
          return (0, n.jsx)("hr", { className: q().docRule }, t3);
        case "footer":
          return (0, n.jsxs)(
            "div",
            {
              className: q().docFooter,
              children: [
                (0, n.jsx)("div", {
                  children: e3.lines.map(
                    (e4, t4) => (0, n.jsx)("p", { children: h2(e4) }, t4)
                  )
                }),
                "pdf" === m2 && (0, n.jsx)("p", { children: "Page 1 of 1" })
              ]
            },
            t3
          );
      }
    }, f2 = (e3) => {
      let a3 = e3.closest("[data-span][data-linked]");
      return a3 ? t2.get(a3.dataset.span ?? "") ?? null : null;
    };
    return (0, n.jsxs)("article", {
      ref: d2,
      className: q().page,
      "data-kind": m2,
      "aria-label": e2.name,
      style: u2,
      onPointerOver: (e3) => {
        "mouse" === e3.pointerType && o2(f2(e3.target)?.path ?? null);
      },
      onPointerLeave: (e3) => {
        "mouse" === e3.pointerType && o2(null);
      },
      onClick: (e3) => {
        let t3 = f2(e3.target);
        t3 ? l2(t3.path) : c2();
      },
      children: [
        "email" === m2 ? (0, n.jsxs)(n.Fragment, {
          children: [
            e2.blocks.filter((e3) => "email" === e3.type).map(x2),
            (0, n.jsx)("div", {
              className: q().mailBody,
              children: e2.blocks.filter((e3) => "email" !== e3.type).map(x2)
            })
          ]
        }) : e2.blocks.map(x2),
        s2 > 0 && !i2 && (0, n.jsx)(
          "div",
          {
            className: q().scan,
            "aria-hidden": "true",
            children: (0, n.jsx)("span", { className: q().scanBeam })
          },
          s2
        )
      ]
    });
  }
  function eN({ document: e2, files: t2, onFileChange: a2 }) {
    let r2 = "email" === v(e2) ? (0, n.jsx)(eu.A, { "aria-hidden": "true", className: q().fileIcon }) : (0, n.jsx)(eb, {});
    return t2 && !(t2.length < 2) && a2 ? (0, n.jsxs)(ed.bL, {
      modal: false,
      children: [
        (0, n.jsxs)(ed.l9, {
          className: ey(q().fileTitle, q().fileButton),
          "aria-label": `${e2.name}, switch document`,
          children: [
            r2,
            (0, n.jsx)("span", {
              className: q().fileName,
              children: e2.name
            }),
            (0, n.jsx)(em.A, {
              "aria-hidden": "true",
              className: q().fileChevron
            })
          ]
        }),
        (0, n.jsx)(ed.ZL, {
          children: (0, n.jsx)(ed.UC, {
            className: q().menu,
            align: "start",
            sideOffset: 6,
            collisionPadding: 12,
            children: (0, n.jsx)(ed.z6, {
              value: e2.id,
              onValueChange: a2,
              children: t2.map(
                (e3) => (0, n.jsxs)(
                  ed.hN,
                  {
                    value: e3.id,
                    className: q().menuItem,
                    children: [
                      "email" === e3.kind ? (0, n.jsx)(eu.A, {
                        "aria-hidden": "true",
                        className: q().fileIcon
                      }) : (0, n.jsx)(eb, {}),
                      (0, n.jsxs)("span", {
                        className: q().menuText,
                        children: [
                          (0, n.jsx)("span", {
                            className: q().menuName,
                            children: e3.name
                          }),
                          e3.meta && (0, n.jsx)("span", {
                            className: q().menuMeta,
                            children: e3.meta
                          })
                        ]
                      }),
                      (0, n.jsx)(ed.VF, {
                        className: q().menuCheck,
                        children: (0, n.jsx)(h.A, {
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  },
                  e3.id
                )
              )
            })
          })
        })
      ]
    }) : (0, n.jsxs)("span", {
      className: q().fileTitle,
      children: [
        r2,
        (0, n.jsx)("span", {
          className: q().fileName,
          title: e2.name,
          children: e2.name
        })
      ]
    });
  }
  function ew({ files: e2, onFileChange: t2, canvasRef: a2, ...s2 }) {
    let { document: i2, reduced: o2 } = s2, l2 = v(i2), c2 = (0, r.useRef)(null), d2 = (0, r.useRef)(null), u2 = (0, el.d)(1), [m2, p2] = (0, r.useState)(1), [h2, x2] = (0, r.useState)(true), f2 = (0, r.useRef)(true), y2 = (0, r.useCallback)((e3) => {
      let t3 = c2.current, a3 = d2.current;
      t3 && a3 && (t3.style.width = `${540 * e3}px`, t3.style.height = `${a3.offsetHeight * e3}px`, a3.style.transform = `scale(${e3})`);
    }, []), _2 = (0, r.useCallback)(() => {
      let e3 = a2.current;
      if (!e3) return 1;
      let t3 = getComputedStyle(e3);
      return eg(
        Math.floor(
          (e3.clientWidth - parseFloat(t3.paddingLeft) - parseFloat(t3.paddingRight)) / 540 * 100
        ) / 100
      );
    }, [a2]), g2 = (0, r.useCallback)(
      (e3, t3 = {}) => {
        let n2 = a2.current, r2 = eg(e3);
        if (f2.current = !!t3.fit, x2(!!t3.fit), p2(r2), !n2)
          return void u2.jump(r2);
        let s3 = u2.get(), i3 = parseFloat(getComputedStyle(n2).paddingTop), l3 = (n2.scrollTop + n2.clientHeight / 2 - i3) / s3, c3 = (n2.scrollLeft + n2.clientWidth / 2 - i3) / s3, d3 = (e4) => {
          y2(e4), n2.scrollTop = l3 * e4 + i3 - n2.clientHeight / 2, n2.scrollLeft = c3 * e4 + i3 - n2.clientWidth / 2;
        };
        if (o2) {
          u2.jump(r2), d3(r2);
          return;
        }
        (0, ec.i)(u2, r2, { ...ef.smooth, onUpdate: d3 });
      },
      [y2, a2, o2, u2]
    );
    (0, r.useEffect)(() => u2.on("change", y2), [u2, y2]), (0, r.useLayoutEffect)(() => {
      let e3 = a2.current, t3 = d2.current;
      if (!e3 || !t3) return;
      let n2 = () => {
        if (f2.current) {
          let e4 = _2();
          u2.jump(e4), p2(e4);
        }
        y2(u2.get());
      };
      if (n2(), "u" < typeof ResizeObserver) return;
      let r2 = new ResizeObserver(n2);
      return r2.observe(e3), r2.observe(t3), () => r2.disconnect();
    }, [y2, a2, _2, u2, i2.id]);
    let b2 = () => g2(e_.find((e3) => e3 > m2 + 5e-3) ?? 2), j2 = () => g2([...e_].reverse().find((e3) => e3 < m2 - 5e-3) ?? 0.4), k2 = Math.round(100 * m2);
    return (0, n.jsxs)("section", {
      className: q().viewer,
      "aria-label": "Document",
      children: [
        (0, n.jsxs)("div", {
          className: q().toolbar,
          children: [
            (0, n.jsx)(eN, { document: i2, files: e2, onFileChange: t2 }),
            (0, n.jsxs)("div", {
              className: q().tools,
              children: [
                "pdf" === l2 && (0, n.jsx)("span", {
                  className: q().pageCount,
                  "aria-label": "Page 1 of 1",
                  children: "1 / 1"
                }),
                (0, n.jsxs)("span", {
                  className: q().toolGroup,
                  role: "group",
                  "aria-label": "Zoom",
                  children: [
                    (0, n.jsx)(ex.m, {
                      content: "Zoom out",
                      children: (0, n.jsx)("button", {
                        type: "button",
                        className: q().tool,
                        "aria-label": "Zoom out",
                        "aria-keyshortcuts": "Control+-",
                        disabled: m2 <= 0.405,
                        onClick: j2,
                        children: (0, n.jsx)(ep.A, { "aria-hidden": "true" })
                      })
                    }),
                    (0, n.jsx)(ex.m, {
                      content: "Actual size",
                      children: (0, n.jsxs)("button", {
                        type: "button",
                        className: ey(q().tool, q().zoomValue),
                        "aria-label": `Zoom ${k2}%, show at actual size`,
                        onClick: () => g2(1),
                        children: [k2, "%"]
                      })
                    }),
                    (0, n.jsx)(ex.m, {
                      content: "Zoom in",
                      children: (0, n.jsx)("button", {
                        type: "button",
                        className: q().tool,
                        "aria-label": "Zoom in",
                        "aria-keyshortcuts": "Control+=",
                        disabled: m2 >= 1.995,
                        onClick: b2,
                        children: (0, n.jsx)(eh.A, { "aria-hidden": "true" })
                      })
                    })
                  ]
                }),
                (0, n.jsx)("button", {
                  type: "button",
                  className: ey(q().tool, q().fitButton),
                  "aria-pressed": h2,
                  "aria-keyshortcuts": "Control+0",
                  onClick: () => g2(_2(), { fit: true }),
                  children: "Fit"
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("div", {
          ref: a2,
          className: q().canvas,
          tabIndex: 0,
          role: "region",
          "aria-label": `${i2.name}, zoom ${k2}%`,
          onKeyDown: (e3) => {
            (e3.metaKey || e3.ctrlKey) && ("=" === e3.key || "+" === e3.key ? (e3.preventDefault(), b2()) : "-" === e3.key ? (e3.preventDefault(), j2()) : "0" === e3.key && (e3.preventDefault(), g2(_2(), { fit: true })));
          },
          children: (0, n.jsx)("div", {
            ref: c2,
            className: q().sizer,
            children: (0, n.jsx)(ek, {
              ...s2,
              pageRef: d2,
              style: { width: 540 }
            })
          })
        })
      ]
    });
  }
  function eT({ title: e2 = "Claude", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  let { spring: e$, duration: eC, ease: eS } = g.T, eA = [...eS.standard], eL = (...e2) => e2.filter(Boolean).join(" "), eO = {
    phase: "idle",
    run: 0,
    values: {},
    edits: {},
    inputTokens: 0,
    outputTokens: 0,
    accepted: "no"
  };
  function eB(e2, t2) {
    switch (t2.type) {
      case "reset":
        return { ...eO, run: e2.run };
      case "start":
        return { ...eO, phase: "extracting", run: e2.run + 1, started: t2.now };
      case "value": {
        let { path: a2, value: n2, source: r2, confidence: s2, note: i2 } = t2.value;
        return {
          ...e2,
          values: {
            ...e2.values,
            [a2]: { value: n2, source: r2, confidence: s2, note: i2 }
          }
        };
      }
      case "usage":
        return {
          ...e2,
          inputTokens: t2.inputTokens,
          outputTokens: t2.outputTokens
        };
      case "finish":
        return { ...e2, phase: "done", ended: t2.now };
      case "fail":
        return { ...e2, phase: "failed", ended: t2.now, error: t2.message };
      case "stop":
        return "extracting" === e2.phase ? { ...e2, phase: "stopped", ended: t2.now } : e2;
      case "edit": {
        let a2 = e2.values[t2.path];
        if (a2?.value === t2.value) return e2;
        return {
          ...e2,
          accepted: "no",
          edits: { ...e2.edits, [t2.path]: (e2.edits[t2.path] ?? 0) + 1 },
          values: {
            ...e2.values,
            [t2.path]: { ...a2, value: t2.value, review: "edited", accepted: false }
          }
        };
      }
      case "check": {
        let a2 = { ...e2.values };
        for (let [e3, n2] of Object.entries(a2))
          (e3 === t2.path || e3.startsWith(`${t2.path}.`)) && U(n2, t2.threshold) && (a2[e3] = { ...n2, review: "checked" });
        return { ...e2, values: a2 };
      }
      case "acceptAll":
        return {
          ...e2,
          accepted: "pending",
          values: Object.fromEntries(
            Object.entries(e2.values).map(([e3, t3]) => [
              e3,
              { ...t3, accepted: true }
            ])
          )
        };
      case "accepted":
        return { ...e2, accepted: "yes" };
      case "unaccept":
        return {
          ...e2,
          accepted: "no",
          values: Object.fromEntries(
            Object.entries(e2.values).map(([e3, t3]) => [
              e3,
              { ...t3, accepted: false }
            ])
          )
        };
    }
  }
  let eM = (e2, t2) => Object.entries(t2).filter(([t3]) => t3 === e2 || t3.startsWith(`${e2}.`)).map(([, e3]) => e3);
  function eR(e2, t2, a2 = 320) {
    let [n2, s2] = (0, r.useState)(e2), i2 = (0, r.useRef)(e2), o2 = (0, r.useRef)(e2);
    return (0, r.useEffect)(() => {
      if (t2) {
        o2.current = e2;
        return;
      }
      i2.current = o2.current;
      let n3 = performance.now(), r2 = 0, l2 = (t3) => {
        let c2 = Math.min(1, (t3 - n3) / a2), d2 = i2.current + (e2 - i2.current) * (1 - Math.pow(1 - c2, 3));
        o2.current = d2, s2(d2), c2 < 1 && (r2 = requestAnimationFrame(l2));
      };
      return r2 = requestAnimationFrame(l2), () => cancelAnimationFrame(r2);
    }, [e2, t2, a2]), t2 ? e2 : n2;
  }
  function eE(e2, t2, a2, n2 = 32) {
    if (!e2 || !t2) return;
    let r2 = e2.getBoundingClientRect(), s2 = t2.getBoundingClientRect(), i2 = e2.querySelector("[data-sticky]"), o2 = r2.top + (i2 ? i2.offsetHeight : 0) + n2, l2 = r2.bottom - n2;
    if (s2.top >= o2 && s2.bottom <= l2) return;
    let c2 = s2.height > l2 - o2 || s2.top < o2 ? s2.top - o2 : s2.bottom - l2;
    e2.scrollTo({ top: e2.scrollTop + c2, behavior: a2 });
  }
  let eF = (e2) => "u" > typeof CSS && CSS.escape ? CSS.escape(e2) : e2.replace(/"/g, '\\"'), eI = (e2, t2) => e2 ? [...e2.querySelectorAll(`[data-link="${eF(t2)}"]`)].find(
    (e3) => e3.getClientRects().length > 0
  ) ?? null : null;
  function eP({ children: e2, reduced: t2, className: a2 }) {
    let i2 = (0, r.useRef)(null), [o2, l2] = (0, r.useState)("auto");
    return (0, r.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => l2(e3.offsetHeight));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.jsx)(s.PY1.div, {
      className: a2,
      initial: false,
      animate: { height: o2 },
      transition: t2 ? { duration: 0 } : e$.smooth,
      style: { overflow: "hidden" },
      children: (0, n.jsx)("div", { ref: i2, children: e2 })
    });
  }
  function eD({
    source: e2,
    path: t2,
    color: a2,
    reduced: i2,
    bodyRef: o2,
    docRef: l2,
    formRef: c2
  }) {
    let d2 = `de-sheen-${(0, r.useId)().replace(/[^a-zA-Z0-9]/g, "")}`, u2 = (0, r.useRef)(null), m2 = (0, r.useRef)(null), p2 = (0, r.useRef)(null), h2 = (0, r.useRef)(null), x2 = (0, r.useRef)(null), f2 = (0, r.useRef)(null), y2 = (0, r.useRef)([]);
    return (0, r.useLayoutEffect)(() => {
      let a3 = 0, n2 = "", r2 = performance.now(), s2 = (d3) => {
        let _2 = o2.current, g2 = l2.current, b2 = c2.current, v2 = g2?.querySelector(`[data-span="${eF(e2)}"]`), j2 = eI(b2, t2);
        if (_2 && g2 && b2 && v2 && j2) {
          let e3 = _2.getBoundingClientRect(), t3 = g2.getBoundingClientRect(), a4 = b2.getBoundingClientRect(), r3 = v2.getClientRects(), s3 = r3[r3.length - 1] ?? v2.getBoundingClientRect(), i3 = j2.getBoundingClientRect(), o3 = (j2.closest("[data-anchor]") ?? j2).getBoundingClientRect(), l3 = Math.max(
            a4.top,
            b2.querySelector("[data-sticky]")?.getBoundingClientRect().bottom ?? a4.top
          ), c3 = a4.top >= t3.bottom - 1, d4 = s3.right + 2, y3 = s3.top + s3.height / 2, k3 = o3.left - 7, N2 = i3.top + i3.height / 2, w2 = !c3 && y3 > t3.top + 2 && y3 < t3.bottom - 2 && d4 < t3.right + 2 && d4 > t3.left && N2 > l3 + 2 && N2 < a4.bottom - 2, T2 = Math.max(28, (k3 - d4) * 0.5);
          d4 -= e3.left, k3 -= e3.left, y3 -= e3.top, N2 -= e3.top;
          let $2 = `M${d4.toFixed(1)} ${y3.toFixed(1)}C${(d4 + T2).toFixed(1)} ${y3.toFixed(1)} ${(k3 - T2).toFixed(1)} ${N2.toFixed(1)} ${k3.toFixed(1)} ${N2.toFixed(1)}`, C2 = `${$2}|${w2}`;
          C2 !== n2 && (n2 = C2, m2.current?.setAttribute("d", $2), p2.current?.setAttribute("d", $2), h2.current?.setAttribute("cx", d4.toFixed(1)), h2.current?.setAttribute("cy", y3.toFixed(1)), x2.current?.setAttribute("cx", k3.toFixed(1)), x2.current?.setAttribute("cy", N2.toFixed(1)), f2.current?.setAttribute("x1", d4.toFixed(1)), f2.current?.setAttribute("y1", y3.toFixed(1)), f2.current?.setAttribute("x2", k3.toFixed(1)), f2.current?.setAttribute("y2", N2.toFixed(1)), u2.current?.toggleAttribute("data-hidden", !w2));
        } else
          "none" !== n2 && (n2 = "none", u2.current?.toggleAttribute("data-hidden", true));
        let k2 = (d3 - r2 - 120) / 640;
        if (!i2 && k2 <= 1.05) {
          let e3 = -0.2 + (k2 <= 0 ? 0 : k2 >= 1 ? 1 : k2 < 0.5 ? 2 * k2 * k2 : 1 - Math.pow(-2 * k2 + 2, 2) / 2) * 1.4;
          [e3 - 0.2, e3, e3 + 0.2].forEach(
            (e4, t3) => y2.current[t3]?.setAttribute(
              "offset",
              String(Math.min(1, Math.max(0, e4)))
            )
          );
        }
        a3 = requestAnimationFrame(s2);
      };
      return s2(performance.now()), () => cancelAnimationFrame(a3);
    }, [e2, t2, i2, o2, l2, c2]), (0, n.jsxs)(s.PY1.g, {
      style: { "--tone": `var(--series-${a2})` },
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.12 * !i2, ease: eA } },
      children: [
        (0, n.jsx)("defs", {
          children: (0, n.jsx)("linearGradient", {
            ref: f2,
            id: d2,
            gradientUnits: "userSpaceOnUse",
            children: [0, 1, 2].map(
              (e3) => (0, n.jsx)(
                "stop",
                {
                  ref: (t3) => {
                    y2.current[e3] = t3;
                  },
                  offset: "0",
                  className: q().sheenStop,
                  "data-peak": 1 === e3 ? "" : void 0
                },
                e3
              )
            )
          })
        }),
        (0, n.jsxs)("g", {
          ref: u2,
          className: q().linkBody,
          children: [
            (0, n.jsx)("path", {
              ref: m2,
              className: q().linkPath,
              pathLength: 1,
              "data-draw": i2 ? void 0 : ""
            }),
            !i2 && (0, n.jsx)("path", {
              ref: p2,
              className: q().linkSheen,
              stroke: `url(#${d2})`
            }),
            (0, n.jsx)("circle", { ref: h2, r: 3, className: q().linkStart }),
            (0, n.jsx)("circle", {
              ref: x2,
              r: 3,
              className: q().linkEnd,
              "data-draw": i2 ? void 0 : ""
            })
          ]
        })
      ]
    });
  }
  function eH({ fields: e2, values: t2, threshold: a2, order: r2, onHover: s2 }) {
    return (0, n.jsx)("span", {
      className: q().bars,
      "aria-hidden": "true",
      children: e2.map((e3) => {
        let i2 = eM(e3.key, t2).filter((e4) => void 0 !== e4.confidence), o2 = i2.length ? Math.min(...i2.map((e4) => e4.confidence ?? 1)) : 0, l2 = i2.length ? i2.every((e4) => e4.accepted) ? "accepted" : i2.some((e4) => U(e4, a2)) ? "check" : "ok" : "pending", c2 = i2.length ? 5 + 13 * Math.max(0, (o2 - 0.5) / 0.5) : 3;
        return (0, n.jsx)(
          "span",
          {
            className: q().bar,
            "data-tone": l2,
            style: { "--h": `${c2.toFixed(1)}px`, "--i": r2[e3.key] ?? 0 },
            onPointerEnter: (t3) => {
              "mouse" === t3.pointerType && i2.length && s2(e3.key);
            },
            onPointerLeave: (e4) => {
              "mouse" === e4.pointerType && s2(null);
            }
          },
          e3.key
        );
      })
    });
  }
  function eq({
    document: e2,
    schema: t2,
    samples: a2,
    extract: g2,
    onAccept: j2,
    model: k2 = b,
    modelMark: N2,
    reviewThreshold: w2 = 0.8,
    className: T2
  }) {
    let $2, S2, B2 = (0, i.I)() ?? false, M2 = (0, r.useMemo)(
      () => e2 ? [{ document: e2, schema: t2 ?? C[0].schema }] : a2?.length ? a2 : C,
      [e2, t2, a2]
    ), [R2, I2] = (0, r.useState)(M2[0].document.id), P2 = M2.find((e10) => e10.document.id === R2) ?? M2[0], D2 = P2.document, H2 = P2.schema.fields, [W2, z2] = (0, r.useReducer)(eB, eO), [Y2, Z2] = (0, r.useState)("fields"), [V2, G2] = (0, r.useState)(null), J2 = V2?.path ?? null, [Q2, X2] = (0, r.useState)(null), [K2, ee2] = (0, r.useState)(""), et2 = (0, r.useRef)(null), ea2 = (0, r.useRef)(null), en2 = (0, r.useRef)(null), er2 = (0, r.useRef)(null), ei2 = (0, r.useMemo)(() => {
      let e10;
      return e10 = /* @__PURE__ */ new Map(), async function* (t3, a3, { signal: n2 }) {
        let r2 = A[t3.id];
        if (!r2)
          return void (yield {
            type: "error",
            message: "The preview only has scripted runs for its two sample documents."
          });
        let s2 = (e10.get(t3.id) ?? 0) + 1;
        e10.set(t3.id, s2), yield {
          type: "usage",
          inputTokens: r2.inputTokens,
          outputTokens: 0
        }, await L(760, n2);
        let i2 = 4;
        for (let [e11, t4] of r2.values.entries()) {
          if (void 0 !== r2.failAfter && 1 === s2 && e11 === r2.failAfter) {
            await L(900, n2), yield {
              type: "error",
              message: "overloaded_error (529): the model is busy right now."
            };
            return;
          }
          let a4 = t4.path.split(".").length > 1;
          await L(a4 ? 46 + e11 % 3 * 14 : 120 + e11 % 4 * 26, n2), i2 += O(t4), yield { type: "value", ...t4 }, yield {
            type: "usage",
            inputTokens: r2.inputTokens,
            outputTokens: i2
          };
        }
      };
    }, []), el2 = g2 ?? ei2, ec2 = !g2, ed2 = "extracting" === W2.phase, eu2 = J2 ?? Q2, em2 = (0, r.useMemo)(() => {
      var e10;
      let t3;
      return t3 = (e10 = P2.schema).groups ?? [], Object.fromEntries(
        e10.fields.map((e11, a3) => {
          let n2 = e11.group ? t3.findIndex((t4) => t4.key === e11.group) : -1;
          return [e11.key, (n2 >= 0 ? n2 : a3) % 4 + 1];
        })
      );
    }, [P2.schema]), ep2 = (0, r.useMemo)(
      () => Object.fromEntries(H2.map((e10, t3) => [e10.key, t3])),
      [H2]
    ), eh2 = (0, r.useMemo)(
      () => Object.entries(W2.values).filter(([, e10]) => U(e10, w2)).map(([e10]) => e10),
      [W2.values, w2]
    ), ex2 = (0, r.useMemo)(
      () => new Set(eh2.map((e10) => e10.split(".")[0])).size,
      [eh2]
    ), ef2 = H2.filter(
      (e10) => eM(e10.key, W2.values).some((e11) => e11.value.trim())
    ).length, ey2 = Object.values(W2.values).filter((e10) => void 0 !== e10.confidence), e_2 = ey2.length ? ey2.reduce((e10, t3) => e10 + (t3.confidence ?? 0), 0) / ey2.length : 0, eg2 = (W2.inputTokens * k2.inputPrice + W2.outputTokens * k2.outputPrice) / 1e6, eb2 = (function(e10, t3 = 100) {
      let [a3, n2] = (0, r.useState)(() => Date.now());
      return (0, r.useEffect)(() => {
        if (!e10) return;
        let a4 = window.setInterval(() => n2(Date.now()), t3);
        return () => window.clearInterval(a4);
      }, [e10, t3]), a3;
    })(ed2), ev2 = W2.started ? ((W2.ended ?? eb2) - W2.started) / 1e3 : 0, ej2 = (0, r.useMemo)(
      () => (function(e10, t3) {
        let a3 = [], n2 = (e11, n3) => {
          let r3 = t3[n3];
          if (!r3) return null;
          let s2 = F(e11, r3.value);
          return void 0 === s2 ? (a3.push(n3), null) : s2;
        }, r2 = {};
        for (let a4 of e10)
          if ("table" === a4.type) {
            let e11 = `${a4.key}.`, s2 = Object.keys(t3).filter((t4) => t4.startsWith(e11)).reduce(
              (e12, t4) => Math.max(e12, Number(t4.split(".")[1]) + 1),
              0
            );
            r2[a4.key] = Array.from(
              { length: s2 },
              (e12, t4) => Object.fromEntries(
                a4.columns.map((e13) => [
                  e13.key,
                  n2(e13.type, `${a4.key}.${t4}.${e13.key}`)
                ])
              )
            );
          } else r2[a4.key] = n2(a4.type, a4.key);
        return { data: r2, invalid: a3 };
      })(H2, W2.values),
      [H2, W2.values]
    ), ek2 = (0, r.useMemo)(() => E(P2.schema), [P2.schema]), eN2 = eR(Math.round(100 * e_2), B2), e$2 = eR(eg2, B2), eS2 = (0, r.useMemo)(() => {
      let e10 = /* @__PURE__ */ new Map();
      for (let [t3, a3] of Object.entries(W2.values)) {
        if (!a3.source || e10.has(a3.source)) continue;
        let n2 = t3.split(".")[0];
        e10.set(a3.source, {
          path: t3,
          label: H2.find((e11) => e11.key === n2)?.label ?? t3,
          tone: U(a3, w2) ? "check" : "ok",
          color: em2[n2] ?? 1
        });
      }
      return e10;
    }, [W2.values, H2, w2, em2]), eW2 = (0, r.useMemo)(() => {
      let e10 = /* @__PURE__ */ new Set();
      if (!eu2) return e10;
      for (let [t3, a3] of Object.entries(W2.values))
        a3.source && (t3 === eu2 || t3.startsWith(`${eu2}.`)) && e10.add(a3.source);
      return e10;
    }, [eu2, W2.values]), ez = (0, r.useCallback)(
      (e10) => {
        let t3 = ea2.current?.querySelector(`[data-span="${eF(e10)}"]`);
        t3 && (t3.dataset.fresh = "", window.setTimeout(() => {
          delete t3.dataset.fresh;
        }, 520), eE(ea2.current, t3, B2 ? "auto" : "smooth", 56));
      },
      [B2]
    ), eY = (0, r.useCallback)(async () => {
      er2.current?.abort();
      let e10 = new AbortController();
      er2.current = e10, z2({ type: "start", now: Date.now() }), ee2(""), X2(null), G2(null), en2.current?.scrollTo({ top: 0 }), ea2.current?.scrollTo({ top: 0, behavior: B2 ? "auto" : "smooth" });
      try {
        let t3 = el2(D2, P2.schema, { signal: e10.signal });
        for await (let a3 of t3 && "function" == typeof t3[Symbol.asyncIterator] ? t3 : (async function* () {
          for (let e11 of await t3) yield e11;
        })()) {
          if (e10.signal.aborted) return;
          if ("error" === a3.type) throw Error(a3.message);
          if ("usage" === a3.type)
            z2({
              type: "usage",
              inputTokens: a3.inputTokens,
              outputTokens: a3.outputTokens
            });
          else {
            z2({ type: "value", value: a3 });
            let e11 = a3.path, t4 = a3.source;
            window.requestAnimationFrame(
              () => window.requestAnimationFrame(() => {
                t4 && ez(t4), eE(
                  en2.current,
                  eI(en2.current, e11),
                  B2 ? "auto" : "smooth",
                  24
                );
              })
            );
          }
        }
        e10.signal.aborted || z2({ type: "finish", now: Date.now() });
      } catch (t3) {
        if (e10.signal.aborted) return;
        z2({
          type: "fail",
          message: t3 instanceof Error ? t3.message : String(t3),
          now: Date.now()
        });
      } finally {
        er2.current === e10 && (er2.current = null);
      }
    }, [D2, P2.schema, el2, ez, B2]), eZ = (0, r.useCallback)(() => {
      er2.current?.abort(), er2.current = null, z2({ type: "stop", now: Date.now() });
    }, []);
    (0, r.useEffect)(() => () => er2.current?.abort(), []);
    let eV = "extracting" === W2.phase ? `Extracting ${H2.length} fields with ${k2.name}${ec2 ? ", simulated in this preview" : ""}.` : "done" === W2.phase ? eh2.length ? `Extracted ${ef2} of ${H2.length} fields. ${1 === ex2 ? "One field needs" : `${ex2} fields need`} a check.` : `Extracted all ${H2.length} fields.` : "failed" === W2.phase ? `Extraction failed after ${ef2} of ${H2.length} fields. ${W2.error ?? ""}` : "stopped" === W2.phase ? `Stopped after ${ef2} of ${H2.length} fields.` : "", eU = (e10) => {
      Z2(e10), en2.current?.scrollTo({ top: 0 });
    }, eG = (0, r.useCallback)(
      (e10) => {
        let t3 = eI(en2.current, e10);
        if (!t3) return;
        eE(en2.current, t3, B2 ? "auto" : "smooth", 24), t3 instanceof HTMLInputElement && t3.focus({ preventScroll: true });
        let a3 = en2.current?.getBoundingClientRect(), n2 = ea2.current?.getBoundingClientRect();
        a3 && n2 && a3.top >= n2.bottom - 1 && window.requestAnimationFrame(() => {
          let e11 = t3.getBoundingClientRect();
          (e11.top < 0 || e11.bottom > window.innerHeight) && t3.scrollIntoView({
            block: "nearest",
            behavior: B2 ? "auto" : "smooth"
          });
        });
      },
      [B2]
    ), eJ = Q2 ? W2.values[Q2]?.source : void 0;
    (0, r.useEffect)(() => {
      eJ && eE(
        ea2.current,
        ea2.current?.querySelector(`[data-span="${eF(eJ)}"]`) ?? null,
        B2 ? "auto" : "smooth",
        56
      );
    }, [eJ, B2]);
    let eQ = (0, r.useRef)(W2.values);
    (0, r.useLayoutEffect)(() => {
      eQ.current = W2.values;
    }, [W2.values]), (0, r.useEffect)(() => {
      if (!V2 || ed2) return;
      let e10 = window.setTimeout(() => {
        if ("form" === V2.from) {
          let e11 = eQ.current[V2.path]?.source;
          e11 && eE(
            ea2.current,
            ea2.current?.querySelector(`[data-span="${eF(e11)}"]`) ?? null,
            B2 ? "auto" : "smooth",
            56
          );
        } else
          eE(en2.current, eI(en2.current, V2.path), B2 ? "auto" : "smooth", 24);
      }, 180);
      return () => window.clearTimeout(e10);
    }, [V2, ed2, B2]);
    let eX = (0, r.useCallback)(
      (e10, t3) => G2(
        (a3) => t3 ? a3?.path === t3 && a3.from === e10 ? a3 : { path: t3, from: e10 } : null
      ),
      []
    ), eK = (0, r.useCallback)((e10) => eX("form", e10), [eX]), e0 = (0, r.useCallback)((e10) => eX("doc", e10), [eX]), e1 = eu2 && W2.values[eu2]?.source ? eu2 : null, e22 = e1 ? W2.values[e1]?.source : void 0, e5 = !!e1 && !!e22 && "schema" !== Y2, e4 = {
      values: W2.values,
      threshold: w2,
      busy: ed2,
      reduced: B2,
      activePath: eu2,
      tones: em2,
      order: ep2,
      onHover: eK,
      onFocusPath: X2,
      onEdit: (e10, t3) => z2({ type: "edit", path: e10, value: t3 }),
      onCheck: (e10) => {
        z2({ type: "check", path: e10, threshold: w2 }), ee2(
          `${H2.find((t3) => t3.key === e10)?.label ?? "Value"} marked as checked.`
        ), window.requestAnimationFrame(
          () => en2.current?.querySelector(
            `[data-link="${eF(e10)}"], [data-link^="${eF(e10)}."]`
          )?.focus({ preventScroll: true })
        );
      }
    }, e7 = ("done" === W2.phase || "stopped" === W2.phase) && ey2.length > 0, e3 = async () => {
      if (e7 && "no" === W2.accepted) {
        if (ej2.invalid.length) {
          let e10 = ej2.invalid[0];
          "fields" !== Y2 && eU("fields"), window.requestAnimationFrame(() => eG(e10)), ee2(
            1 === ej2.invalid.length ? "One value does not fit its type. Fix it before accepting." : `${ej2.invalid.length} values do not fit their types. Fix them before accepting.`
          );
          return;
        }
        z2({ type: "acceptAll" });
        try {
          j2 ? await j2(ej2.data, {
            document: D2,
            schema: P2.schema,
            values: W2.values
          }) : await new Promise((e10) => window.setTimeout(e10, 560)), z2({ type: "accepted" }), ee2(
            `All ${ef2} fields accepted. ${j2 ? "The data was sent." : "Sending the data is simulated in this preview."}`
          );
        } catch (e10) {
          z2({ type: "unaccept" }), ee2(`Could not accept. ${e10 instanceof Error ? e10.message : ""}`);
        }
      }
    }, e9, e6 = "primary", e8 = () => {
      eY();
    };
    ed2 ? (e9 = (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(l.A, { "aria-hidden": "true", className: q().stopIcon }),
        "Stop"
      ]
    }), e6 = "secondary", e8 = eZ) : "failed" === W2.phase ? e9 = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.A, { "aria-hidden": "true" }), "Retry"]
    }) : "idle" === W2.phase ? e9 = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(d.A, { "aria-hidden": "true" }), "Extract"]
    }) : (e9 = (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(c.A, { "aria-hidden": "true" }),
        (0, n.jsxs)("span", {
          children: [
            "Extract",
            (0, n.jsx)("span", {
              className: q().againWord,
              children: " again"
            })
          ]
        })
      ]
    }), e6 = "secondary");
    let te = `${ef2} of ${H2.length}`;
    $2 = ed2 ? (0, n.jsxs)("p", {
      className: q().statusLine,
      children: [
        (0, n.jsx)(_.n, {
          className: q().statusShimmer,
          children: ef2 ? "Extracting fields" : "Reading the document"
        }),
        (0, n.jsx)("span", { className: q().statusMeta, children: te })
      ]
    }) : "idle" === W2.phase ? (0, n.jsx)("p", {
      className: q().statusLine,
      children: (0, n.jsxs)("span", {
        className: q().statusQuiet,
        children: [
          H2.length,
          " fields to fill from this ",
          "email" === v(D2) ? "email" : "document"
        ]
      })
    }) : "failed" === W2.phase ? (0, n.jsxs)("div", {
      className: q().statusBlock,
      role: "alert",
      "data-tone": "danger",
      children: [
        (0, n.jsxs)("p", {
          className: q().statusLine,
          children: [
            (0, n.jsx)(u.A, {
              "aria-hidden": "true",
              className: q().statusIcon
            }),
            (0, n.jsxs)("span", {
              children: ["Extraction failed after ", te, " fields"]
            })
          ]
        }),
        (0, n.jsxs)("p", {
          className: q().statusBody,
          children: [
            k2.name,
            " returned ",
            W2.error ?? "an error.",
            " Retry reads the whole document again",
            ec2 ? "; in this preview only the first run fails" : "",
            "."
          ]
        })
      ]
    }) : "stopped" === W2.phase ? (0, n.jsxs)("div", {
      className: q().statusBlock,
      children: [
        (0, n.jsxs)("p", {
          className: q().statusLine,
          children: [
            (0, n.jsx)(l.A, {
              "aria-hidden": "true",
              className: q().stopIcon
            }),
            (0, n.jsxs)("span", {
              children: ["Stopped after ", te, " fields"]
            })
          ]
        }),
        (0, n.jsx)("p", {
          className: q().statusBody,
          children: "The values found so far are kept. Extract again reads the whole document."
        })
      ]
    }) : "yes" === W2.accepted ? (0, n.jsxs)("p", {
      className: q().statusLine,
      children: [
        (0, n.jsx)(m.A, {
          "aria-hidden": "true",
          className: q().statusOk
        }),
        (0, n.jsxs)("span", {
          children: [
            "All fields accepted",
            ec2 ? ". Sending is simulated in this preview" : " and sent"
          ]
        })
      ]
    }) : eh2.length ? (0, n.jsxs)("p", {
      className: q().statusLine,
      "data-tone": "warning",
      children: [
        (0, n.jsx)(p.A, {
          "aria-hidden": "true",
          className: q().statusIcon
        }),
        (0, n.jsx)("span", {
          children: 1 === ex2 ? "One field needs a check" : `${ex2} fields need a check`
        }),
        (0, n.jsx)("button", {
          type: "button",
          className: q().textButton,
          onClick: () => {
            let e10 = eh2[0];
            e10 && ("fields" !== Y2 && eU("fields"), window.requestAnimationFrame(() => eG(e10)));
          },
          children: "Review"
        })
      ]
    }) : (0, n.jsxs)("p", {
      className: q().statusLine,
      children: [
        (0, n.jsx)(m.A, {
          "aria-hidden": "true",
          className: q().statusOk
        }),
        (0, n.jsxs)("span", {
          children: [
            "Found ",
            te,
            " fields in ",
            ev2.toFixed(1),
            " s"
          ]
        })
      ]
    });
    let tt = ed2 ? "busy" : "done" === W2.phase ? "yes" === W2.accepted ? "accepted" : eh2.length ? "review" : "done" : W2.phase;
    S2 = ey2.length ? (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsxs)("span", {
          children: [
            (0, n.jsxs)("span", {
              className: q().summaryStrong,
              children: [Math.round(eN2), "%"]
            }),
            " average"
          ]
        }),
        "no" !== W2.accepted && 0 === eh2.length ? (0, n.jsxs)("span", {
          className: q().summaryOk,
          children: [
            (0, n.jsx)(h.A, { "aria-hidden": "true" }),
            "yes" === W2.accepted ? "All accepted" : "Accepting"
          ]
        }) : eh2.length ? (0, n.jsxs)("span", {
          className: q().summaryWarn,
          children: [
            (0, n.jsx)(p.A, { "aria-hidden": "true" }),
            ex2,
            " to check"
          ]
        }) : !ed2 && (0, n.jsxs)("span", {
          className: q().summaryOk,
          children: [
            (0, n.jsx)(m.A, { "aria-hidden": "true" }),
            "Ready"
          ]
        })
      ]
    }) : (0, n.jsx)("span", {
      className: q().summaryQuiet,
      children: ed2 ? "Reading" : "No values yet"
    });
    let ta = "Accept all";
    return "yes" === W2.accepted && (ta = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(h.A, { "aria-hidden": "true" }), "Accepted"]
    })), (0, n.jsxs)("div", {
      className: eL(q().root, T2),
      onKeyDown: (e10) => {
        "Escape" === e10.key && (ed2 ? (e10.preventDefault(), eZ()) : Q2 && X2(null));
      },
      children: [
        (0, n.jsxs)("div", {
          ref: et2,
          className: q().body,
          children: [
            (0, n.jsx)(ew, {
              document: D2,
              canvasRef: ea2,
              links: eS2,
              lit: eW2,
              scanKey: W2.run,
              reduced: B2,
              files: M2.length > 1 ? M2.map((e10) => ({
                id: e10.document.id,
                name: e10.document.name,
                label: e10.document.label,
                kind: v(e10.document),
                meta: e10.document.meta
              })) : void 0,
              onFileChange: (e10) => {
                e10 !== R2 && (er2.current?.abort(), er2.current = null, z2({ type: "reset" }), I2(e10), G2(null), X2(null), ee2(""), ea2.current?.scrollTo({ top: 0 }), en2.current?.scrollTo({ top: 0 }));
              },
              onSpanHover: e0,
              onSpanPress: (e10) => {
                if (X2(e10), "schema" === Y2) {
                  eU("fields"), window.setTimeout(() => eG(e10), 80);
                  return;
                }
                eG(e10);
              },
              onBackgroundPress: () => X2(null)
            }),
            (0, n.jsxs)(f.tU, {
              value: Y2,
              onValueChange: eU,
              className: q().formPane,
              children: [
                (0, n.jsxs)("div", {
                  className: q().formHead,
                  children: [
                    (0, n.jsxs)(f.j7, {
                      "aria-label": "Output",
                      children: [
                        (0, n.jsx)(f.Xi, {
                          value: "fields",
                          children: "Fields"
                        }),
                        (0, n.jsx)(f.Xi, { value: "json", children: "JSON" }),
                        (0, n.jsx)(f.Xi, {
                          value: "schema",
                          children: "Schema"
                        })
                      ]
                    }),
                    (0, n.jsx)(x.$, {
                      size: "sm",
                      variant: e6,
                      className: eL(
                        "primary" === e6 && q().accentButton,
                        q().action
                      ),
                      onClick: e8,
                      "aria-keyshortcuts": ed2 ? "Escape" : void 0,
                      children: e9
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  ref: en2,
                  className: q().formScroll,
                  onScroll: (e10) => e10.currentTarget.toggleAttribute(
                    "data-scrolled",
                    e10.currentTarget.scrollTop > 2
                  ),
                  children: [
                    (0, n.jsxs)(f.av, {
                      value: "fields",
                      className: q().tabPanel,
                      children: [
                        (0, n.jsx)("div", {
                          className: q().status,
                          "data-sticky": "",
                          children: (0, n.jsx)(eP, {
                            reduced: B2,
                            children: (0, n.jsx)(o.N, {
                              mode: "popLayout",
                              initial: false,
                              children: (0, n.jsx)(
                                s.PY1.div,
                                {
                                  initial: B2 ? { opacity: 0 } : { opacity: 0, y: 2 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: {
                                    opacity: 0,
                                    transition: { duration: 0.1 }
                                  },
                                  transition: { duration: eC.fast, ease: eA },
                                  children: $2
                                },
                                tt
                              )
                            })
                          })
                        }),
                        (0, n.jsx)(es, { schema: P2.schema, ctx: e4 })
                      ]
                    }),
                    (0, n.jsxs)(f.av, {
                      value: "json",
                      className: q().tabPanel,
                      children: [
                        (0, n.jsxs)("div", {
                          className: q().codeBar,
                          children: [
                            (0, n.jsx)("span", {
                              className: q().codeNote,
                              children: ej2.invalid.length ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(p.A, {
                                    "aria-hidden": "true",
                                    className: q().codeWarn
                                  }),
                                  1 === ej2.invalid.length ? "One value does not fit its type and is null" : `${ej2.invalid.length} values do not fit their types and are null`
                                ]
                              }) : "idle" === W2.phase ? "Typed output appears here as values arrive" : (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(m.A, {
                                    "aria-hidden": "true",
                                    className: q().statusOk
                                  }),
                                  "Matches the ",
                                  P2.schema.title.toLowerCase(),
                                  " schema, updates as you edit"
                                ]
                              })
                            }),
                            (0, n.jsx)(y.CopyButton, {
                              value: JSON.stringify(ej2.data, null, 2),
                              label: "Copy"
                            })
                          ]
                        }),
                        (0, n.jsx)(eo, {
                          value: ej2.data,
                          label: "Typed output as JSON",
                          linking: {
                            activePath: eu2,
                            tones: em2,
                            edits: W2.edits,
                            onHover: eK,
                            onSelect: X2
                          }
                        })
                      ]
                    }),
                    (0, n.jsxs)(f.av, {
                      value: "schema",
                      className: q().tabPanel,
                      children: [
                        (0, n.jsxs)("div", {
                          className: q().codeBar,
                          children: [
                            (0, n.jsxs)("span", {
                              className: q().codeNote,
                              children: [
                                "Sent to ",
                                k2.id,
                                " as the output format"
                              ]
                            }),
                            (0, n.jsx)(y.CopyButton, {
                              value: JSON.stringify(ek2, null, 2),
                              label: "Copy"
                            })
                          ]
                        }),
                        (0, n.jsx)(eo, { value: ek2, label: "JSON schema" })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, n.jsx)("svg", {
              className: q().links,
              "aria-hidden": "true",
              children: (0, n.jsx)(o.N, {
                children: e5 && e1 && e22 && (0, n.jsx)(
                  eD,
                  {
                    source: e22,
                    path: e1,
                    color: em2[e1.split(".")[0]] ?? 1,
                    reduced: B2,
                    bodyRef: et2,
                    docRef: ea2,
                    formRef: en2
                  },
                  e1
                )
              })
            })
          ]
        }),
        (0, n.jsxs)("footer", {
          className: q().footer,
          children: [
            (0, n.jsxs)("div", {
              className: q().summary,
              children: [
                (0, n.jsx)(eH, {
                  fields: H2,
                  values: W2.values,
                  threshold: w2,
                  order: ep2,
                  onHover: eK
                }),
                (0, n.jsx)("p", { className: q().summaryText, children: S2 })
              ]
            }),
            (0, n.jsxs)("p", {
              className: q().meta,
              children: [
                (0, n.jsx)("span", {
                  className: q().modelMark,
                  "aria-hidden": "true",
                  children: N2 ?? (0, n.jsx)(eT, { title: "" })
                }),
                (0, n.jsx)("span", {
                  className: q().modelName,
                  children: k2.name
                }),
                (0, n.jsx)("span", {
                  className: q().metaDot,
                  "aria-hidden": "true"
                }),
                (0, n.jsx)("span", {
                  className: q().tabular,
                  children: e$2 <= 0 ? "$0.00" : e$2 < 0.01 ? `$${e$2.toFixed(4)}` : `$${e$2.toFixed(3)}`
                }),
                (0, n.jsx)("span", {
                  className: q().metaDot,
                  "aria-hidden": "true"
                }),
                (0, n.jsxs)("span", {
                  className: q().tabular,
                  children: [ev2.toFixed(1), " s"]
                })
              ]
            }),
            (0, n.jsx)(x.$, {
              size: "sm",
              variant: "yes" === W2.accepted ? "secondary" : "primary",
              className: eL(
                "yes" !== W2.accepted && q().accentButton,
                q().accept
              ),
              disabled: !e7 || "yes" === W2.accepted,
              loading: "pending" === W2.accepted,
              onClick: () => {
                e3();
              },
              children: ta
            })
          ]
        }),
        (0, n.jsx)("p", {
          className: q().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eV
        }),
        (0, n.jsx)("p", {
          className: q().srOnly,
          "aria-live": "polite",
          children: K2
        })
      ]
    });
  }
  let eW = eq;
};

__m(__module,__exports,__require);
}