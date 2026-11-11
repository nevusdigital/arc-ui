/* document-extract (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(1260, ".root{position:relative}\n.listShell{position:relative;display:inline-flex;max-width:100%;min-width:0;align-items:center;isolation:isolate;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface-muted)}\n.listShell[data-left=true] .viewport{mask-image:linear-gradient(90deg,transparent,black 35px,black)}\n.listShell[data-right=true] .viewport{mask-image:linear-gradient(90deg,black,black calc(100% - 35px),transparent)}\n.listShell[data-left=true][data-right=true] .viewport{mask-image:linear-gradient(90deg,transparent,black 35px,black calc(100% - 35px),transparent)}\n.viewport{min-width:0;overflow-x:auto;border-radius:inherit;scrollbar-width:none}\n.viewport::-webkit-scrollbar{display:none}\n.list{isolation:isolate;display:inline-flex;width:max-content;align-items:center;gap:var(--space-1);padding:var(--space-1)}\n.scrollButton{position:absolute;z-index:2;top:0;bottom:0;display:grid;width:33px;place-items:center;border:0;background:var(--surface-muted);color:var(--foreground)}\n.scrollButton:disabled{opacity:0;pointer-events:none}\n.scrollButton:focus-visible{--focus-outline-offset:-3px}\n.scrollLeft{left:0;border-radius:var(--radius-control) 0 0 var(--radius-control)}\n.scrollRight{right:0;border-radius:0 var(--radius-control) var(--radius-control) 0}\n.trigger{position:relative;-webkit-tap-highlight-color:transparent;display:inline-grid;min-width:5.5rem;place-items:center;flex:0 0 auto;min-height:var(--control-height-sm);border:0;border-radius:calc(var(--radius-control) - 3px);padding:0 var(--space-3);background:transparent;color:var(--text-muted);font:inherit;font-size:var(--text-sm);font-weight:500;white-space:nowrap;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.trigger:hover{color:var(--foreground)}\n.trigger:active{color:var(--foreground)}\n.trigger[data-state=active]{color:var(--accent-strong)}\n.trigger:disabled{cursor:not-allowed;opacity:.5}\n@media (prefers-reduced-motion:reduce){.trigger{transition:none}\n.selection{position:absolute;z-index:-1;inset:0;border:1px solid var(--border);border-radius:inherit;background:var(--surface);box-shadow:var(--shadow-resting);will-change:transform}\n.triggerLabel{position:relative;z-index:1}\n.content{margin-top:var(--space-4);color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.content[data-motion-pop-id]{margin-top:0}\n.content[data-state=inactive]{pointer-events:none}\n.content:focus-visible{--focus-outline-offset:3px;border-radius:var(--radius-control)}", {"root":"root","listShell":"listShell","viewport":"viewport","list":"list","scrollButton":"scrollButton","scrollLeft":"scrollLeft","scrollRight":"scrollRight","trigger":"trigger","selection":"selection","triggerLabel":"triggerLabel","content":"content"});
A.reg(47898, function(__module,__exports,__require){
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
});
A.reg(57518, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { B8: () => T, UC: () => I, bL: () => C, l9: () => q });
  var n = a(12115), r = a(70379), d = a(68599), i = a(69245), o = a(83935), l = a(55897), h = a(1933), c = a(59322), s = a(89971), y = a(95155), p = Object.defineProperty, u = (e2, t2) => p(e2, "name", { value: t2, configurable: true }), k = "Tabs", [f, v] = (0, d.A)(k, [i.RG]), m = (0, i.RG)(), [M, b] = f(k), A = n.forwardRef(
    u(function(e2, t2) {
      let {
        __scopeTabs: a2,
        value: n2,
        onValueChange: r2,
        defaultValue: d2,
        orientation: i2 = "horizontal",
        dir: o2,
        activationMode: p2 = "automatic",
        ...u2
      } = e2, f2 = (0, h.jH)(o2), [v2, m2] = (0, c.i)({
        prop: n2,
        onChange: r2,
        defaultProp: d2 ?? "",
        caller: k
      });
      return (0, y.jsx)(M, {
        scope: a2,
        baseId: (0, s.B)(),
        value: v2,
        onValueChange: m2,
        orientation: i2,
        dir: f2,
        activationMode: p2,
        children: (0, y.jsx)(l.sG.div, {
          dir: f2,
          "data-orientation": i2,
          ...u2,
          ref: t2
        })
      });
    }, "Tabs")
  ), g = n.forwardRef(
    u(function(e2, t2) {
      let { __scopeTabs: a2, loop: n2 = true, ...r2 } = e2, d2 = b("TabsList", a2), o2 = m(a2);
      return (0, y.jsx)(i.bL, {
        asChild: true,
        ...o2,
        orientation: d2.orientation,
        dir: d2.dir,
        loop: n2,
        children: (0, y.jsx)(l.sG.div, {
          role: "tablist",
          "aria-orientation": d2.orientation,
          ...r2,
          ref: t2
        })
      });
    }, "TabsList")
  ), w = n.forwardRef(
    u(function(e2, t2) {
      let { __scopeTabs: a2, value: n2, disabled: d2 = false, ...o2 } = e2, h2 = b("TabsTrigger", a2), c2 = m(a2), s2 = z(h2.baseId, n2), p2 = j(h2.baseId, n2), u2 = n2 === h2.value;
      return (0, y.jsx)(i.q7, {
        asChild: true,
        ...c2,
        focusable: !d2,
        active: u2,
        children: (0, y.jsx)(l.sG.button, {
          type: "button",
          role: "tab",
          "aria-selected": u2,
          "aria-controls": p2,
          "data-state": u2 ? "active" : "inactive",
          "data-disabled": d2 ? "" : void 0,
          disabled: d2,
          id: s2,
          ...o2,
          ref: t2,
          onMouseDown: (0, r.mK)(e2.onMouseDown, (e3) => {
            d2 || 0 !== e3.button || false !== e3.ctrlKey ? e3.preventDefault() : h2.onValueChange(n2);
          }),
          onKeyDown: (0, r.mK)(e2.onKeyDown, (e3) => {
            !d2 && e3.target === e3.currentTarget && [" ", "Enter"].includes(e3.key) && h2.onValueChange(n2);
          }),
          onFocus: (0, r.mK)(e2.onFocus, () => {
            let e3 = "manual" !== h2.activationMode;
            u2 || d2 || !e3 || h2.onValueChange(n2);
          })
        })
      });
    }, "TabsTrigger")
  ), x = n.forwardRef(
    u(function(e2, t2) {
      let { __scopeTabs: a2, value: r2, forceMount: d2, children: i2, ...h2 } = e2, c2 = b("TabsContent", a2), s2 = z(c2.baseId, r2), p2 = j(c2.baseId, r2), u2 = r2 === c2.value, k2 = n.useRef(u2);
      return n.useEffect(() => {
        let e3 = requestAnimationFrame(() => k2.current = false);
        return () => cancelAnimationFrame(e3);
      }, []), (0, y.jsx)(o.C, {
        present: d2 || u2,
        children: ({ present: a3 }) => (0, y.jsx)(l.sG.div, {
          "data-state": u2 ? "active" : "inactive",
          "data-orientation": c2.orientation,
          role: "tabpanel",
          "aria-labelledby": s2,
          hidden: !a3,
          id: p2,
          tabIndex: 0,
          ...h2,
          ref: t2,
          style: {
            ...e2.style,
            animationDuration: k2.current ? "0s" : void 0
          },
          children: a3 && i2
        })
      });
    }, "TabsContent")
  );
  function z(e2, t2) {
    return `${e2}-trigger-${t2}`;
  }
  function j(e2, t2) {
    return `${e2}-content-${t2}`;
  }
  u(z, "makeTriggerId"), u(j, "makeContentId");
  var C = A, T = g, q = w, I = x;
}

__m(__module,__exports,__require);
});
A.reg(70008, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { Xi: () => g, av: () => j, j7: () => _, tU: () => y });
  var n = a(95155), r = a(12115), s = a(57518), i = a(78780), o = a(76721), l = a(57700), c = a(18310), d = a(25354), u = a(92171), m = a(80642), p = a(7770), h = a(1260), x = a.n(h);
  let f = (0, r.createContext)({
    active: "",
    layoutId: "tabs",
    direction: 1,
    panelHeightRef: { current: null },
    leavingRectRef: { current: null }
  });
  function y({
    value: e2,
    defaultValue: t2,
    onValueChange: a2,
    className: i2,
    ...o2
  }) {
    let [c2, d2] = (0, r.useState)(t2 ?? ""), [u2, m2] = (0, r.useState)(1), p2 = e2 ?? c2, h2 = (0, r.useId)(), _2 = (0, r.useRef)(null), g2 = (0, r.useRef)(null), b2 = (0, r.useRef)(null);
    return (0, n.jsx)(f.Provider, {
      value: {
        active: p2,
        layoutId: h2,
        direction: u2,
        panelHeightRef: g2,
        leavingRectRef: b2
      },
      children: (0, n.jsx)(l.o, {
        id: h2,
        children: (0, n.jsx)(s.bL, {
          ...o2,
          ref: _2,
          className: [x().root, i2].filter(Boolean).join(" "),
          value: p2,
          onValueChange: function(t3) {
            let n2 = _2.current;
            b2.current = n2?.querySelector(
              ':scope > [role="tabpanel"][data-state="active"]'
            )?.getBoundingClientRect() ?? null;
            let r2 = n2 ? Array.from(n2.querySelectorAll('[role="tab"][data-value]')).filter((e3) => e3.closest(`.${x().root}`) === n2).map((e3) => e3.dataset.value) : [], s2 = r2.indexOf(p2), i3 = r2.indexOf(t3);
            s2 >= 0 && i3 >= 0 && s2 !== i3 && m2(i3 > s2 ? 1 : -1), void 0 === e2 && d2(t3), a2?.(t3);
          }
        })
      })
    });
  }
  function _({ className: e2, ...t2 }) {
    let { active: a2 } = (0, r.useContext)(f), l2 = (0, c.I)(), u2 = (0, r.useRef)(null), m2 = (0, r.useRef)(null), p2 = (0, r.useRef)(null), [h2, y2] = (0, r.useState)({ overflow: false, left: false, right: false }), g2 = (0, r.useCallback)(() => {
      let e3 = u2.current, t3 = m2.current;
      if (!e3 || !t3) return;
      let a3 = Math.max(0, t3.scrollWidth - t3.clientWidth), n2 = {
        overflow: t3.scrollWidth > e3.clientWidth + 1,
        left: t3.scrollLeft > 1,
        right: t3.scrollLeft < a3 - 1
      };
      y2(
        (e4) => e4.overflow === n2.overflow && e4.left === n2.left && e4.right === n2.right ? e4 : n2
      );
    }, []), b2 = (0, r.useCallback)(
      (e3) => {
        let t3 = m2.current;
        if (!t3 || !e3) return;
        let a3 = t3.getBoundingClientRect(), n2 = e3.getBoundingClientRect(), r2 = Math.max(0, t3.scrollWidth - t3.clientWidth), s2 = a3.left + 34 * (t3.scrollLeft > 1), i2 = a3.right - 34 * (t3.scrollLeft < r2 - 1), o2 = n2.left < s2 ? n2.left - s2 : n2.right > i2 ? n2.right - i2 : 0;
        o2 && t3.scrollBy({ left: o2, behavior: l2 ? "instant" : "smooth" });
      },
      [l2]
    );
    (0, r.useLayoutEffect)(() => {
      let e3 = u2.current, t3 = m2.current, a3 = p2.current;
      if (!e3 || !t3 || !a3) return;
      let n2 = new ResizeObserver(g2);
      return n2.observe(e3), n2.observe(t3), n2.observe(a3), t3.addEventListener("scroll", g2, { passive: true }), g2(), () => {
        n2.disconnect(), t3.removeEventListener("scroll", g2);
      };
    }, [g2]), (0, r.useLayoutEffect)(() => {
      b2(
        p2.current?.querySelector('[role="tab"][data-state="active"]') ?? null
      );
    }, [a2, b2]);
    let v2 = (e3) => m2.current?.scrollBy({
      left: e3 * (m2.current?.clientWidth ?? 0) * 0.75,
      behavior: l2 ? "instant" : "smooth"
    });
    return (0, n.jsxs)("div", {
      ref: u2,
      className: x().listShell,
      "data-overflow": h2.overflow,
      "data-left": h2.left,
      "data-right": h2.right,
      children: [
        h2.overflow && (0, n.jsx)("button", {
          type: "button",
          className: `${x().scrollButton} ${x().scrollLeft}`,
          "aria-label": "Scroll tabs left",
          disabled: !h2.left,
          onClick: () => v2(-1),
          children: (0, n.jsx)(i.A, {
            width: 17,
            height: 17,
            "aria-hidden": "true"
          })
        }),
        (0, n.jsx)(d.PY1.div, {
          ref: m2,
          layoutScroll: true,
          className: x().viewport,
          onFocusCapture: (e3) => {
            e3.target instanceof HTMLElement && "tab" === e3.target.getAttribute("role") && b2(e3.target);
          },
          children: (0, n.jsx)(s.B8, {
            ...t2,
            ref: p2,
            className: [x().list, e2].filter(Boolean).join(" ")
          })
        }),
        h2.overflow && (0, n.jsx)("button", {
          type: "button",
          className: `${x().scrollButton} ${x().scrollRight}`,
          "aria-label": "Scroll tabs right",
          disabled: !h2.right,
          onClick: () => v2(1),
          children: (0, n.jsx)(o.A, {
            width: 17,
            height: 17,
            "aria-hidden": "true"
          })
        })
      ]
    });
  }
  function g({ className: e2, children: t2, value: a2, ...i2 }) {
    let { active: o2 } = (0, r.useContext)(f), l2 = (0, c.I)();
    return (0, n.jsxs)(s.l9, {
      ...i2,
      value: a2,
      "data-value": a2,
      className: [x().trigger, e2].filter(Boolean).join(" "),
      children: [
        o2 === a2 && (0, n.jsx)(d.PY1.span, {
          className: x().selection,
          layoutId: "selection",
          layoutDependency: o2,
          transition: l2 ? { duration: 0 } : p.T.spring.morph,
          "aria-hidden": "true"
        }),
        (0, n.jsx)("span", { className: x().triggerLabel, children: t2 })
      ]
    });
  }
  let b = {
    enter: (e2) => ({ opacity: 0, x: 8 * e2 }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: {
          duration: p.T.duration.standard,
          ease: [...p.T.ease.enter]
        },
        x: p.T.spring.smooth
      }
    },
    exit: (e2) => ({
      opacity: 0,
      x: -6 * e2,
      transition: {
        duration: p.T.duration.instant,
        ease: [...p.T.ease.standard]
      }
    })
  }, v = {
    enter: { opacity: 0, x: 0 },
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: p.T.duration.instant }
    },
    exit: { opacity: 0, x: 0, transition: { duration: 0.1 } }
  };
  function j({ className: e2, value: t2, forceMount: a2, children: i2, ...o2 }) {
    let {
      active: l2,
      direction: h2,
      panelHeightRef: y2,
      leavingRectRef: _2
    } = (0, r.useContext)(f), g2 = (0, c.I)(), k = (0, r.useRef)(null), N = l2 === t2, w = [x().content, e2].filter(Boolean).join(" ");
    return ((0, r.useLayoutEffect)(() => {
      let e3, t3 = k.current;
      if (!t3 || a2) return;
      if (!N) {
        let e4 = _2.current, a3 = t3.getBoundingClientRect();
        e4 && (t3.style.translate = `${e4.left - a3.left}px ${e4.top - a3.top}px`), t3.inert = true;
        return;
      }
      t3.style.translate = "", t3.inert = false;
      let n2 = y2.current, r2 = t3.offsetHeight, s2 = () => {
        t3.style.height = "", t3.style.overflow = "";
      };
      null !== n2 && Math.abs(n2 - r2) > 1 && !g2 && (r2 > n2 && (t3.style.overflow = "clip"), e3 = (0, u.i)(
        t3,
        { height: [n2, r2] },
        { ...p.T.spring.smooth, onComplete: s2 }
      )), y2.current = e3 && null !== n2 ? n2 : r2;
      let i3 = new ResizeObserver(() => {
        y2.current = t3.offsetHeight;
      });
      return i3.observe(t3), () => {
        i3.disconnect(), e3?.stop(), s2();
      };
    }, [N, g2, a2, y2, _2]), a2) ? (0, n.jsx)(s.UC, {
      ...o2,
      value: t2,
      forceMount: true,
      className: w,
      children: i2
    }) : (0, n.jsx)(m.N, {
      initial: false,
      mode: "popLayout",
      custom: h2,
      children: N && (0, r.createElement)(
        s.UC,
        { ...o2, key: t2, value: t2, forceMount: true, asChild: true },
        (0, n.jsx)(d.PY1.div, {
          ref: k,
          className: w,
          custom: h2,
          variants: g2 ? v : b,
          initial: "enter",
          animate: "center",
          exit: "exit",
          children: i2
        })
      )
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(75796, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "mail",
    size: 24,
    node: [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(86104, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => i });
  var n = r(51811);
  let a = {
    name: "scan-text",
    size: 24,
    node: [
      ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
      ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
      ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
      ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
      ["path", { d: "M7 8h8", key: "1jbsf9" }],
      ["path", { d: "M7 12h10", key: "b7w52i" }],
      ["path", { d: "M7 16h6", key: "1vyc9m" }]
    ]
  };
  a.node;
  let i = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(87979, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "pencil-line",
    size: 24,
    node: [
      ["path", { d: "M13 21h8", key: "1jsn5i" }],
      ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(97824, ".document-extract_root__ik80k{--mono:ui-monospace,\"SF Mono\",Menlo,monospace;--hover:color-mix(in oklab,var(--foreground) 5%,transparent);--canvas:color-mix(in oklab,var(--foreground) 5%,var(--surface));--paper:#fff;--ink:oklch(21% 0 0);--ink-2:oklch(40% 0 0);--ink-3:oklch(55% 0 0);--rule:oklch(90% 0 0);--rule-strong:oklch(28% 0 0);position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:1080px;min-width:0;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body);container:extract/inline-size}:root[data-theme=dark] .document-extract_root__ik80k{--canvas:var(--background)}.document-extract_root__ik80k *,.document-extract_root__ik80k :after,.document-extract_root__ik80k :before{box-sizing:border-box}.document-extract_root__ik80k svg{flex:none;stroke-width:1.75}.document-extract_srOnly__vNvjq{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.document-extract_tabular__Uh5Qq{font-variant-numeric:tabular-nums}.document-extract_root__ik80k .document-extract_accentButton__opMa_{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}.document-extract_stopIcon__GUkEA{width:11px!important;height:11px!important;fill:currentColor}.document-extract_body___GDuh{position:relative;display:grid;grid-template-columns:minmax(0,1fr) min(436px,45%);height:600px;min-height:0}.document-extract_viewer__vhq1f{display:flex;flex-direction:column;min-width:0;min-height:0;border-right:1px solid var(--border-subtle);background:var(--canvas)}.document-extract_toolbar__2IWjD{display:flex;flex:none;align-items:center;justify-content:space-between;gap:8px;height:48px;padding:0 8px;border-bottom:1px solid var(--border-subtle);background:var(--surface)}.document-extract_fileTitle___5e84{display:inline-flex;min-width:0;align-items:center;gap:8px;padding:0 6px;color:var(--foreground);font-size:var(--text-sm);font-weight:500}.document-extract_fileButton__HFNoG{height:32px;padding:0 8px 0 6px;border:0;border-radius:10px;background:transparent;font:inherit;font-size:var(--text-sm);font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}@media (hover:hover) and (pointer:fine){.document-extract_fileButton__HFNoG:hover{background:var(--hover)}}.document-extract_fileButton__HFNoG[data-state=open]{background:var(--hover)}.document-extract_fileName__s5hox{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.document-extract_fileMark__kOjLI{width:15px;height:19px;color:var(--foreground)}.document-extract_fileIcon__BQst3{width:16px;height:16px;color:var(--text-secondary)}.document-extract_fileChevron__6IxHo{width:14px;height:14px;color:var(--text-muted)}.document-extract_tools__xqsU8{display:flex;flex:none;align-items:center;gap:6px}.document-extract_pageCount__QSlsj{padding:0 6px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}.document-extract_toolGroup__hX18N{display:inline-flex;align-items:center;height:30px;padding:0 1px;border:1px solid var(--border);border-radius:10px}.document-extract_tool__1G327{display:inline-grid;flex:none;place-items:center;width:28px;height:26px;padding:0;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-xs);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}.document-extract_tool__1G327 svg{width:14px;height:14px}.document-extract_tool__1G327:disabled{color:var(--text-muted);opacity:.45;cursor:default}@media (hover:hover) and (pointer:fine){.document-extract_tool__1G327:not(:disabled):hover{background:var(--hover);color:var(--foreground)}}.document-extract_tool__1G327:not(:disabled):active{background:var(--hover)}.document-extract_zoomValue__u33N4{width:46px;color:var(--foreground);font-variant-numeric:tabular-nums}.document-extract_fitButton__UiveV{width:auto;height:30px;padding:0 11px;border:1px solid var(--border);border-radius:10px}.document-extract_fitButton__UiveV[aria-pressed=true]{border-color:transparent;background:var(--surface-muted);color:var(--foreground)}.document-extract_canvas__D4kg2{position:relative;flex:1;min-height:0;padding:22px;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;--focus-outline-offset:-2px}.document-extract_sizer__bLBsP{position:relative;margin:0 auto}.document-extract_menu__2HoKm{z-index:60;min-width:260px;padding:5px;border:1px solid var(--border);border-radius:16px;background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);transform-origin:var(--radix-dropdown-menu-content-transform-origin)}.document-extract_menu__2HoKm[data-state=open]{animation:document-extract_menuIn__4VgRT var(--duration-fast) var(--ease-standard)}@keyframes document-extract_menuIn__4VgRT{0%{opacity:0;transform:scale(.97) translateY(-2px)}}.document-extract_menuItem__SAGBE{display:flex;align-items:center;gap:10px;min-height:44px;padding:6px 10px;border-radius:11px;outline:none;cursor:pointer}.document-extract_menuItem__SAGBE[data-highlighted]{background:var(--hover)}.document-extract_menuText__arDj7{display:grid;flex:1;min-width:0}.document-extract_menuName__aX_Bu{overflow:hidden;font-size:var(--text-sm);text-overflow:ellipsis;white-space:nowrap}.document-extract_menuMeta__XWLjZ{color:var(--text-muted);font-size:var(--text-xs)}.document-extract_menuCheck__kv0KP{display:inline-grid;color:var(--foreground)}.document-extract_menuCheck__kv0KP svg{width:15px;height:15px}.document-extract_page__1OF85{position:absolute;top:0;left:0;transform-origin:0 0;overflow:hidden;padding:46px 48px 40px;border-radius:2px;background:var(--paper);color:var(--ink);box-shadow:0 0 0 .5px oklch(0 0 0/.12),var(--shadow-raised);font-family:var(--font-body);font-size:10px;line-height:1.5;letter-spacing:0;-webkit-font-smoothing:antialiased;font-variant-numeric:tabular-nums;cursor:default}.document-extract_page__1OF85[data-kind=pdf]{height:764px}.document-extract_page__1OF85[data-kind=email]{padding:0}.document-extract_page__1OF85 p{margin:0}.document-extract_inkMuted__tnaS_{color:var(--ink-3)}.document-extract_masthead__xxrJA{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:34px}.document-extract_logo__BAbmx{display:inline-flex;align-items:center;gap:6px;color:var(--ink)}.document-extract_logoSymbol__QLzSi{width:19px;height:19px}.document-extract_logoName__R6Ea1{font-size:17px;font-weight:500;line-height:1;letter-spacing:-.045em}.document-extract_logoDetail__S1uaI{margin-left:-1px;color:var(--ink-3);font-size:17px;font-weight:400;line-height:1;letter-spacing:-.035em}.document-extract_docTitle__RiA31{color:var(--ink);font-size:24px;font-weight:400;line-height:1;letter-spacing:-.035em}.document-extract_docColumns__HXvMc{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px;margin-bottom:24px}.document-extract_docLines__g9kYC p{line-height:1.55}.document-extract_docLines__g9kYC+.document-extract_docLines__g9kYC,.document-extract_mailBody__MlvGv .document-extract_docLines__g9kYC{margin-top:4px}.document-extract_docLabel__ww4Kw{margin-bottom:3px!important;color:var(--ink-3);font-size:8.5px;font-weight:500}.document-extract_docMeta__LDFdV{display:grid;grid-template-columns:repeat(var(--count),minmax(0,1fr));gap:12px;margin:0 0 26px;padding:8px 0 9px;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule)}.document-extract_docMeta__LDFdV dt{color:var(--ink-3);font-size:8.5px}.document-extract_docMeta__LDFdV dd{margin:1px 0 0}.document-extract_docTable__a8SXB{width:100%;border-collapse:collapse}.document-extract_docTable__a8SXB th{padding:0 0 6px;border-bottom:1px solid var(--rule-strong);color:var(--ink-3);font-size:8.5px;font-weight:500;text-align:left}.document-extract_docTable__a8SXB td{padding:7px 0 8px;border-bottom:1px solid var(--rule);vertical-align:top}.document-extract_docTable__a8SXB :is(th,td)+:is(th,td){padding-left:12px}.document-extract_docTable__a8SXB [data-align=end]{text-align:right;white-space:nowrap}.document-extract_docDetail__N_kQI{display:block;margin-top:1px;color:var(--ink-3);font-size:8.5px}.document-extract_docTotals__iVs7f{display:grid;justify-content:end;margin:10px 0 0}.document-extract_docTotals__iVs7f>div{display:grid;grid-template-columns:118px 92px;padding:2px 0}.document-extract_docTotals__iVs7f dt{color:var(--ink-2)}.document-extract_docTotals__iVs7f dd{margin:0;text-align:right}.document-extract_docTotals__iVs7f>div[data-strong]{margin-top:6px;padding:6px 0 5px;border-top:1px solid var(--rule-strong);border-bottom:3px double var(--rule-strong);font-size:11px;font-weight:500}.document-extract_docTotals__iVs7f>div[data-strong] dt{color:var(--ink)}.document-extract_docHeading__ofZQS{margin:30px 0 6px!important;font-weight:500}.document-extract_docPairs__ZzgXw{display:grid;gap:2px;margin:0}.document-extract_docPairs__ZzgXw>div{display:grid;grid-template-columns:92px minmax(0,1fr);gap:8px}.document-extract_docPairs__ZzgXw dt{color:var(--ink-3)}.document-extract_docPairs__ZzgXw dd{min-width:0;margin:0}.document-extract_docText__jeTpq{margin-top:12px!important;white-space:pre-line;text-wrap:pretty}.document-extract_docRule__D81Ka{margin:22px 0 0;border:0;border-top:1px solid var(--rule)}.document-extract_docFooter__dD_sO{position:absolute;right:48px;bottom:30px;left:48px;display:flex;align-items:flex-end;justify-content:space-between;gap:16px;padding-top:8px;border-top:1px solid var(--rule);color:var(--ink-3);font-size:7.5px;line-height:1.5}.document-extract_mailHead__K3Xdo{padding:26px 32px 18px;border-bottom:1px solid var(--rule)}.document-extract_mailSubject__hoypZ{margin-bottom:16px!important;font-size:15px;font-weight:500;line-height:1.3;letter-spacing:-.02em}.document-extract_mailFrom__14DgY{display:grid;grid-template-columns:30px minmax(0,1fr) auto;align-items:center;gap:10px}.document-extract_mailAvatar__0TKgh{display:grid;width:30px;height:30px;place-items:center;border-radius:50%;background:var(--ink-2);color:#fff;font-size:10.5px;font-weight:500;letter-spacing:0}.document-extract_mailWho__pZIqt{min-width:0}.document-extract_mailName__mZkLo{font-weight:500}.document-extract_mailDate__aJSCa{align-self:start;font-size:9px;white-space:nowrap}.document-extract_mailBody__MlvGv{padding:26px 40px 28px}.document-extract_mailBody__MlvGv .document-extract_masthead__xxrJA{margin-bottom:24px}.document-extract_mailBody__MlvGv .document-extract_logoDetail__S1uaI,.document-extract_mailBody__MlvGv .document-extract_logoName__R6Ea1{font-size:15px}.document-extract_mailBody__MlvGv .document-extract_docMeta__LDFdV{margin:16px 0 4px}.document-extract_mailBody__MlvGv .document-extract_docHeading__ofZQS{margin-top:24px!important}.document-extract_mailBody__MlvGv .document-extract_docFooter__dD_sO{position:static;margin-top:30px}.document-extract_span__hTwE5{border-radius:3px;-webkit-box-decoration-break:clone;box-decoration-break:clone;transition:background-color var(--duration-fast) var(--ease-standard)}.document-extract_span__hTwE5[data-linked]{margin:0 -2px;padding:1px 2px;background:color-mix(in oklab,var(--tone) 10%,transparent);cursor:pointer}.document-extract_span__hTwE5[data-tone=check]{text-decoration:underline dotted color-mix(in oklab,var(--warning) 85%,var(--ink));text-decoration-thickness:1px;text-underline-offset:2.5px}.document-extract_span__hTwE5[data-lit]{background:color-mix(in oklab,var(--tone) 24%,transparent)}.document-extract_span__hTwE5[data-fresh]{background:color-mix(in oklab,var(--tone) 32%,transparent);transition-duration:0s}.document-extract_span__hTwE5[data-linked]:not([data-fresh]){transition-duration:var(--duration-fast)}@media (hover:hover) and (pointer:fine){.document-extract_span__hTwE5[data-linked]:not([data-lit]):hover{background:color-mix(in oklab,var(--tone) 17%,transparent)}}.document-extract_scan__68zjD{position:absolute;inset:0;z-index:2;overflow:hidden;pointer-events:none}.document-extract_scanBeam__55mak{position:absolute;top:0;right:0;left:0;height:100%;background:linear-gradient(to bottom,transparent calc(100% - 96px),color-mix(in oklab,var(--series-1) 9%,transparent));opacity:0;transform:translateY(-100%);animation:document-extract_scan__68zjD 1.5s var(--ease-in-out) forwards}.document-extract_scanBeam__55mak:after{content:\"\";position:absolute;right:0;bottom:0;left:0;height:1.5px;background:linear-gradient(90deg,transparent,color-mix(in oklab,var(--series-1) 65%,transparent) 20%,color-mix(in oklab,var(--series-1) 65%,transparent) 80%,transparent)}@keyframes document-extract_scan__68zjD{0%{opacity:0;transform:translateY(-100%)}12%{opacity:1}78%{opacity:1}to{opacity:0;transform:translateY(0)}}.document-extract_links__r5Cje{position:absolute;inset:0;z-index:5;width:100%;height:100%;overflow:visible;pointer-events:none}.document-extract_linkBody__5M6X7{transition:opacity var(--duration-instant) var(--ease-standard)}.document-extract_linkBody__5M6X7[data-hidden]{opacity:0}.document-extract_linkPath__aZODm{fill:none;stroke:var(--tone);stroke-width:1.5;stroke-linecap:round}.document-extract_linkPath__aZODm[data-draw]{stroke-dasharray:1 1;animation:document-extract_draw__qmypv .22s var(--ease-standard) both}@keyframes document-extract_draw__qmypv{0%{stroke-dashoffset:1}to{stroke-dashoffset:0}}.document-extract_linkSheen__opVyC{fill:none;stroke-width:1.75;stroke-linecap:round}.document-extract_sheenStop__2FMWt{stop-color:color-mix(in oklab,var(--tone) 22%,var(--paper));stop-opacity:0}.document-extract_sheenStop__2FMWt[data-peak]{stop-opacity:1}.document-extract_linkEnd__AS7_i,.document-extract_linkStart__F_VFE{fill:var(--tone);stroke-width:1.5;transform-box:fill-box;transform-origin:center}.document-extract_linkStart__F_VFE{stroke:var(--paper)}.document-extract_linkEnd__AS7_i{stroke:var(--surface)}.document-extract_linkEnd__AS7_i[data-draw]{animation:document-extract_anchorIn__7PeNw .14s var(--ease-standard) .17s both}@keyframes document-extract_anchorIn__7PeNw{0%{opacity:0;transform:scale(.3)}}.document-extract_formPane__1gCSS{display:flex;flex-direction:column;min-width:0;min-height:0;background:var(--surface)}.document-extract_formHead__3F0IB{display:flex;flex:none;align-items:center;justify-content:space-between;gap:8px;height:48px;padding:0 8px 0 10px;border-bottom:1px solid var(--border-subtle)}.document-extract_formHead__3F0IB [role=tablist]{gap:2px;padding:3px}.document-extract_formHead__3F0IB [role=tab]{min-width:0;min-height:30px;padding:0 12px;font-size:var(--text-xs)}.document-extract_action__cDbGV{min-width:92px}.document-extract_accept__CEGds svg,.document-extract_action__cDbGV svg{width:15px;height:15px}.document-extract_formScroll__J68J3{position:relative;flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-gutter:stable;scrollbar-width:thin}.document-extract_tabPanel__LB5mV{margin:0;padding:0 12px 20px 14px}.document-extract_status__9eDIb{position:sticky;top:0;z-index:3;margin:0 -12px 2px -14px;padding:10px 12px 8px 14px;border-bottom:1px solid transparent;background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}.document-extract_formScroll__J68J3[data-scrolled] .document-extract_status__9eDIb{border-bottom-color:var(--border-subtle)}.document-extract_statusLine__8v1Xv{display:flex;align-items:center;gap:8px;min-height:30px;margin:0;color:var(--text-secondary);font-size:var(--text-sm)}.document-extract_statusLine__8v1Xv svg{width:16px;height:16px}.document-extract_statusLine__8v1Xv[data-tone=warning]{color:var(--foreground)}.document-extract_statusLine__8v1Xv[data-tone=warning] .document-extract_statusIcon__BJV51{color:var(--warning)}.document-extract_statusBlock__E7ddk{padding-bottom:4px}.document-extract_statusBlock__E7ddk[data-tone=danger] .document-extract_statusLine__8v1Xv{color:var(--foreground)}.document-extract_statusBlock__E7ddk[data-tone=danger] .document-extract_statusIcon__BJV51{color:var(--danger)}.document-extract_statusBlock__E7ddk .document-extract_stopIcon__GUkEA{margin:0 2px;color:var(--text-muted)}.document-extract_statusBody__uSle5{margin:0 0 0 24px;color:var(--text-muted);font-size:var(--text-xs);text-wrap:pretty}.document-extract_statusShimmer__xUax3{color:var(--foreground)}.document-extract_statusMeta__gXOqB{color:var(--text-muted);font-variant-numeric:tabular-nums}.document-extract_statusQuiet__xN7t2{color:var(--text-muted)}.document-extract_statusOk__a4lhz{width:16px;height:16px;color:var(--success)}.document-extract_textButton__DS9wC{display:inline-flex;flex:none;align-items:center;height:28px;margin-left:auto;padding:0 11px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-xs);font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}@media (hover:hover) and (pointer:fine){.document-extract_textButton__DS9wC:hover{border-color:var(--border-strong);background:var(--surface-muted)}}.document-extract_form__ayMu5{display:grid;grid-template-columns:minmax(0,1fr);gap:4px}.document-extract_group__HIXFh{display:grid;grid-template-columns:minmax(0,1fr);min-width:0}.document-extract_groupHead__S_Cao{display:flex;align-items:center;gap:8px;margin:0;padding:10px 8px 4px;color:var(--text-secondary);font-size:var(--text-xs);font-weight:500}.document-extract_groupDot__IuvV_{width:7px;height:7px;border-radius:50%;background:var(--tone)}.document-extract_row__zM8gF{position:relative;display:grid;grid-template-columns:88px minmax(0,1fr) 60px;align-items:center;column-gap:8px;min-width:0;padding:2px 4px 2px 8px;border-radius:12px;transition:background-color var(--duration-fast) var(--ease-standard)}.document-extract_row__zM8gF[data-active]{background:color-mix(in oklab,var(--tone) 8%,transparent)}.document-extract_rowLabel__FD0Jj{min-width:0;overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}.document-extract_rowExtra__wcmaK{grid-column:2/-1}.document-extract_input__C_j1_{display:block;width:100%;min-width:0;height:32px;padding:0 8px;border:1px solid transparent;border-radius:9px;outline:none;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);text-overflow:ellipsis;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.document-extract_input__C_j1_:not([data-landed]):not(:focus){background:color-mix(in oklab,var(--foreground) 4%,transparent)}@media (hover:hover) and (pointer:fine){.document-extract_input__C_j1_:hover{border-color:var(--border);background:var(--surface)}}.document-extract_input__C_j1_:focus{border-color:var(--border-strong);background:var(--surface)}.document-extract_input__C_j1_[readonly]{cursor:default}.document-extract_input__C_j1_[aria-invalid=true]{border-color:color-mix(in oklab,var(--danger) 60%,var(--border))}.document-extract_cellInput__An3QG[data-numeric],.document-extract_input__C_j1_[data-numeric]{font-variant-numeric:tabular-nums}.document-extract_row__zM8gF[data-tone=check] .document-extract_input__C_j1_{border-color:color-mix(in oklab,var(--warning) 50%,var(--border));background:color-mix(in oklab,var(--warning) 6%,var(--surface))}.document-extract_cellInput__An3QG[data-landed],.document-extract_input__C_j1_[data-landed]{animation:document-extract_land__iDTBP var(--duration-fast) var(--ease-standard)}@keyframes document-extract_land__iDTBP{0%{color:transparent}}.document-extract_conf__7tpMq{position:relative;display:inline-flex;justify-content:flex-end;min-width:0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}.document-extract_conf__7tpMq[data-tone=warning]{color:var(--foreground)}.document-extract_confInner__sxonr{display:inline-flex;align-items:center;gap:4px}.document-extract_confIcon__Wbqer{display:inline-grid;place-items:center}.document-extract_confIcon__Wbqer svg{width:13px;height:13px}.document-extract_conf__7tpMq[data-tone=success] .document-extract_confIcon__Wbqer{color:var(--success)}.document-extract_conf__7tpMq[data-tone=warning] .document-extract_confIcon__Wbqer{color:var(--warning)}.document-extract_reveal__zkwZi{overflow:hidden}.document-extract_note__43_r8{display:flex;align-items:flex-start;gap:10px;padding:6px 0 6px 8px}.document-extract_noteText___XHTe{flex:1;min-width:0;margin:0;color:var(--text-secondary);font-size:var(--text-xs);text-wrap:pretty}.document-extract_noteButton__nCHu7{display:inline-flex;flex:none;align-items:center;gap:5px;height:26px;margin-top:-3px;padding:0 10px 0 8px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-xs);font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}.document-extract_noteButton__nCHu7 svg{width:13px;height:13px}@media (hover:hover) and (pointer:fine){.document-extract_noteButton__nCHu7:hover{border-color:var(--border-strong);background:var(--surface-muted)}}.document-extract_noteButton__nCHu7:active{background:var(--surface-muted)}.document-extract_fieldError__pOuqL{margin:0;padding:4px 0 6px 8px;color:var(--danger);font-size:var(--text-xs)}.document-extract_tableField__yDy9l{min-width:0;padding:4px 4px 6px 8px;border-radius:12px;transition:background-color var(--duration-fast) var(--ease-standard)}.document-extract_tableField__yDy9l[data-active]{background:color-mix(in oklab,var(--tone) 6%,transparent)}.document-extract_tableTitle__7siWw{display:flex;align-items:center;gap:8px;min-height:30px;margin-bottom:4px}.document-extract_tableLabel___sByO{color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;white-space:nowrap}.document-extract_group__HIXFh[data-solo]{padding-top:6px}.document-extract_tableTitle__7siWw .document-extract_conf__7tpMq{min-width:60px;margin-left:auto}.document-extract_rowCount__O1hDg{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}.document-extract_grid__53nf9{overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;border:1px solid var(--border);border-radius:10px;background:var(--surface);scrollbar-width:thin;--focus-outline-offset:-2px}.document-extract_gridHead__bSjYY,.document-extract_trInner__pXGWd{display:grid;grid-template-columns:minmax(0,1fr) 40px 78px 80px}.document-extract_grid__53nf9[data-columns=\"3\"] .document-extract_gridHead__bSjYY,.document-extract_grid__53nf9[data-columns=\"3\"] .document-extract_trInner__pXGWd{grid-template-columns:minmax(0,1fr) 40px 84px}.document-extract_gridHead__bSjYY{height:28px;align-items:center;border-bottom:1px solid var(--border-subtle)}.document-extract_th__PiVL2{padding:0 9px;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}.document-extract_th__PiVL2[data-numeric]{text-align:right}.document-extract_gridEmpty__ecwQm{margin:0;padding:10px 9px;color:var(--text-muted);font-size:var(--text-xs)}.document-extract_tr__CfHHr{overflow:hidden}.document-extract_tr__CfHHr+.document-extract_tr__CfHHr .document-extract_trInner__pXGWd{border-top:1px solid var(--border-subtle)}.document-extract_td__OYNgw{min-width:0;padding:2px}.document-extract_cellInput__An3QG{display:block;width:100%;height:28px;padding:0 7px;border:1px solid transparent;border-radius:7px;outline:none;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-xs);text-overflow:ellipsis;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.document-extract_td__OYNgw[data-numeric] .document-extract_cellInput__An3QG{text-align:right}@media (hover:hover) and (pointer:fine){.document-extract_cellInput__An3QG:hover{border-color:var(--border)}}.document-extract_cellInput__An3QG:focus{border-color:var(--border-strong);background:var(--surface)}.document-extract_cellInput__An3QG[data-active]:not(:focus){background:color-mix(in oklab,var(--tone) 12%,transparent)}.document-extract_cellInput__An3QG[data-tone=check]{border-color:color-mix(in oklab,var(--warning) 50%,var(--border));background:color-mix(in oklab,var(--warning) 6%,transparent)}.document-extract_cellInput__An3QG[aria-invalid=true]{border-color:color-mix(in oklab,var(--danger) 60%,var(--border))}.document-extract_codeBar__RSY0x{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:50px}.document-extract_codeNote__zX0HT{display:inline-flex;min-width:0;align-items:center;gap:8px;color:var(--text-secondary);font-size:var(--text-xs);text-wrap:pretty}.document-extract_codeWarn__Rk4L3{width:16px;height:16px;color:var(--warning)}.document-extract_code__67XMc{margin:0;padding:10px 0;overflow-x:auto;border:1px solid var(--border);border-radius:14px;background:var(--surface-muted);color:var(--text-secondary);font-family:var(--mono);font-size:var(--text-xs);line-height:1.7;letter-spacing:0;tab-size:2;--focus-outline-offset:-2px}.document-extract_code__67XMc code{display:block;min-width:max-content}.document-extract_jsonLine__oTkOH{display:block;padding:0 14px;white-space:pre;transition:background-color var(--duration-fast) var(--ease-standard)}.document-extract_code__67XMc[data-linked] .document-extract_jsonLine__oTkOH[data-link]{cursor:pointer}.document-extract_jsonLine__oTkOH[data-active]{background:color-mix(in oklab,var(--tone) 13%,transparent)}.document-extract_jsonLine__oTkOH[data-changed]{animation:document-extract_changed__HWwKD 1.4s var(--ease-standard)}@keyframes document-extract_changed__HWwKD{0%{background-color:color-mix(in oklab,var(--success) 20%,transparent)}}.document-extract_json_key__jFOse{color:var(--foreground)}.document-extract_json_string__G5WEa{color:color-mix(in oklab,var(--success) 78%,var(--foreground))}.document-extract_json_number__QfKFZ{color:color-mix(in oklab,var(--series-1) 80%,var(--foreground))}.document-extract_json_literal__eYXYe{color:var(--text-muted)}.document-extract_footer__RohZR{display:flex;flex:none;align-items:center;gap:16px;min-height:60px;padding:10px 10px 10px 16px;border-top:1px solid var(--border-subtle)}.document-extract_summary__MW2mY{display:flex;min-width:0;align-items:center;gap:12px}.document-extract_bars__qurlN{display:flex;flex:none;align-items:flex-end;gap:3px;height:18px}.document-extract_bar__Rgft0{width:4px;height:var(--h);border-radius:2px;background:var(--border-strong);transition:height var(--duration-spring) var(--ease-spring),background-color var(--duration-fast) var(--ease-standard)}.document-extract_bar__Rgft0[data-tone=pending]{background:var(--border)}.document-extract_bar__Rgft0[data-tone=ok]{background:color-mix(in oklab,var(--success) 55%,var(--surface))}.document-extract_bar__Rgft0[data-tone=check]{background:var(--warning)}.document-extract_bar__Rgft0[data-tone=accepted]{background:var(--success);transition-delay:0s,calc(var(--i) * 35ms)}.document-extract_summaryText__KYu18{display:flex;min-width:0;align-items:center;gap:12px;margin:0;color:var(--text-secondary);font-size:var(--text-sm);white-space:nowrap}.document-extract_summaryStrong__A5msc{color:var(--foreground);font-weight:500;font-variant-numeric:tabular-nums}.document-extract_summaryQuiet__le9Hr{color:var(--text-muted)}.document-extract_summaryOk__25AyK,.document-extract_summaryWarn__WxJAz{display:inline-flex;align-items:center;gap:5px;color:var(--foreground)}.document-extract_summaryOk__25AyK svg,.document-extract_summaryWarn__WxJAz svg{width:14px;height:14px}.document-extract_summaryWarn__WxJAz svg{color:var(--warning)}.document-extract_summaryOk__25AyK svg{color:var(--success)}.document-extract_meta__wkaje{display:flex;min-width:0;align-items:center;gap:7px;margin:0 0 0 auto;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}.document-extract_modelMark__l6XL0{display:inline-grid;width:14px;height:14px;color:#d97757}.document-extract_modelMark__l6XL0 svg{width:14px;height:14px}.document-extract_modelName__jysYZ{color:var(--text-secondary)}.document-extract_metaDot__JwmNa{width:3px;height:3px;border-radius:50%;background:currentColor;opacity:.55}.document-extract_accept__CEGds{flex:none;min-width:112px}@media (prefers-reduced-motion:reduce){.document-extract_bar__Rgft0,.document-extract_cellInput__An3QG,.document-extract_input__C_j1_,.document-extract_jsonLine__oTkOH,.document-extract_linkBody__5M6X7,.document-extract_menu__2HoKm,.document-extract_noteButton__nCHu7,.document-extract_row__zM8gF,.document-extract_span__hTwE5,.document-extract_tableField__yDy9l,.document-extract_tool__1G327{transition:none}}@media (prefers-reduced-motion:reduce){.document-extract_cellInput__An3QG[data-landed],.document-extract_input__C_j1_[data-landed],.document-extract_jsonLine__oTkOH[data-changed],.document-extract_menu__2HoKm[data-state=open]{animation:none}}@media (prefers-reduced-motion:reduce){.document-extract_scan__68zjD{display:none}}", {"root":"document-extract_root__ik80k","srOnly":"document-extract_srOnly__vNvjq","tabular":"document-extract_tabular__Uh5Qq","accentButton":"document-extract_accentButton__opMa_","stopIcon":"document-extract_stopIcon__GUkEA","body":"document-extract_body___GDuh","viewer":"document-extract_viewer__vhq1f","toolbar":"document-extract_toolbar__2IWjD","fileTitle":"document-extract_fileTitle___5e84","fileButton":"document-extract_fileButton__HFNoG","fileName":"document-extract_fileName__s5hox","fileMark":"document-extract_fileMark__kOjLI","fileIcon":"document-extract_fileIcon__BQst3","fileChevron":"document-extract_fileChevron__6IxHo","tools":"document-extract_tools__xqsU8","pageCount":"document-extract_pageCount__QSlsj","toolGroup":"document-extract_toolGroup__hX18N","tool":"document-extract_tool__1G327","zoomValue":"document-extract_zoomValue__u33N4","fitButton":"document-extract_fitButton__UiveV","canvas":"document-extract_canvas__D4kg2","sizer":"document-extract_sizer__bLBsP","menu":"document-extract_menu__2HoKm","menuIn":"document-extract_menuIn__4VgRT","menuItem":"document-extract_menuItem__SAGBE","menuText":"document-extract_menuText__arDj7","menuName":"document-extract_menuName__aX_Bu","menuMeta":"document-extract_menuMeta__XWLjZ","menuCheck":"document-extract_menuCheck__kv0KP","page":"document-extract_page__1OF85","inkMuted":"document-extract_inkMuted__tnaS_","masthead":"document-extract_masthead__xxrJA","logo":"document-extract_logo__BAbmx","logoSymbol":"document-extract_logoSymbol__QLzSi","logoName":"document-extract_logoName__R6Ea1","logoDetail":"document-extract_logoDetail__S1uaI","docTitle":"document-extract_docTitle__RiA31","docColumns":"document-extract_docColumns__HXvMc","docLines":"document-extract_docLines__g9kYC","mailBody":"document-extract_mailBody__MlvGv","docLabel":"document-extract_docLabel__ww4Kw","docMeta":"document-extract_docMeta__LDFdV","docTable":"document-extract_docTable__a8SXB","docDetail":"document-extract_docDetail__N_kQI","docTotals":"document-extract_docTotals__iVs7f","docHeading":"document-extract_docHeading__ofZQS","docPairs":"document-extract_docPairs__ZzgXw","docText":"document-extract_docText__jeTpq","docRule":"document-extract_docRule__D81Ka","docFooter":"document-extract_docFooter__dD_sO","mailHead":"document-extract_mailHead__K3Xdo","mailSubject":"document-extract_mailSubject__hoypZ","mailFrom":"document-extract_mailFrom__14DgY","mailAvatar":"document-extract_mailAvatar__0TKgh","mailWho":"document-extract_mailWho__pZIqt","mailName":"document-extract_mailName__mZkLo","mailDate":"document-extract_mailDate__aJSCa","span":"document-extract_span__hTwE5","scan":"document-extract_scan__68zjD","scanBeam":"document-extract_scanBeam__55mak","links":"document-extract_links__r5Cje","linkBody":"document-extract_linkBody__5M6X7","linkPath":"document-extract_linkPath__aZODm","draw":"document-extract_draw__qmypv","linkSheen":"document-extract_linkSheen__opVyC","sheenStop":"document-extract_sheenStop__2FMWt","linkStart":"document-extract_linkStart__F_VFE","linkEnd":"document-extract_linkEnd__AS7_i","anchorIn":"document-extract_anchorIn__7PeNw","formPane":"document-extract_formPane__1gCSS","formHead":"document-extract_formHead__3F0IB","action":"document-extract_action__cDbGV","accept":"document-extract_accept__CEGds","formScroll":"document-extract_formScroll__J68J3","tabPanel":"document-extract_tabPanel__LB5mV","status":"document-extract_status__9eDIb","statusLine":"document-extract_statusLine__8v1Xv","statusIcon":"document-extract_statusIcon__BJV51","statusBlock":"document-extract_statusBlock__E7ddk","statusBody":"document-extract_statusBody__uSle5","statusShimmer":"document-extract_statusShimmer__xUax3","statusMeta":"document-extract_statusMeta__gXOqB","statusQuiet":"document-extract_statusQuiet__xN7t2","statusOk":"document-extract_statusOk__a4lhz","textButton":"document-extract_textButton__DS9wC","form":"document-extract_form__ayMu5","group":"document-extract_group__HIXFh","groupHead":"document-extract_groupHead__S_Cao","groupDot":"document-extract_groupDot__IuvV_","row":"document-extract_row__zM8gF","rowLabel":"document-extract_rowLabel__FD0Jj","rowExtra":"document-extract_rowExtra__wcmaK","input":"document-extract_input__C_j1_","cellInput":"document-extract_cellInput__An3QG","land":"document-extract_land__iDTBP","conf":"document-extract_conf__7tpMq","confInner":"document-extract_confInner__sxonr","confIcon":"document-extract_confIcon__Wbqer","reveal":"document-extract_reveal__zkwZi","note":"document-extract_note__43_r8","noteText":"document-extract_noteText___XHTe","noteButton":"document-extract_noteButton__nCHu7","fieldError":"document-extract_fieldError__pOuqL","tableField":"document-extract_tableField__yDy9l","tableTitle":"document-extract_tableTitle__7siWw","tableLabel":"document-extract_tableLabel___sByO","rowCount":"document-extract_rowCount__O1hDg","grid":"document-extract_grid__53nf9","gridHead":"document-extract_gridHead__bSjYY","trInner":"document-extract_trInner__pXGWd","th":"document-extract_th__PiVL2","gridEmpty":"document-extract_gridEmpty__ecwQm","tr":"document-extract_tr__CfHHr","td":"document-extract_td__OYNgw","codeBar":"document-extract_codeBar__RSY0x","codeNote":"document-extract_codeNote__zX0HT","codeWarn":"document-extract_codeWarn__Rk4L3","code":"document-extract_code__67XMc","jsonLine":"document-extract_jsonLine__oTkOH","changed":"document-extract_changed__HWwKD","json_key":"document-extract_json_key__jFOse","json_string":"document-extract_json_string__G5WEa","json_number":"document-extract_json_number__QfKFZ","json_literal":"document-extract_json_literal__eYXYe","footer":"document-extract_footer__RohZR","summary":"document-extract_summary__MW2mY","bars":"document-extract_bars__qurlN","bar":"document-extract_bar__Rgft0","summaryText":"document-extract_summaryText__KYu18","summaryStrong":"document-extract_summaryStrong__A5msc","summaryQuiet":"document-extract_summaryQuiet__le9Hr","summaryWarn":"document-extract_summaryWarn__WxJAz","summaryOk":"document-extract_summaryOk__25AyK","meta":"document-extract_meta__wkaje","modelMark":"document-extract_modelMark__l6XL0","modelName":"document-extract_modelName__jysYZ","metaDot":"document-extract_metaDot__JwmNa","againWord":"document-extract_againWord__w7M4x"});
A.cssFor("document-extract", [1260,97824]);
A.item("document-extract", {entry:47898, export:"DocumentExtract", kind:"block", tier:"pro", unresolved:[]});
})();