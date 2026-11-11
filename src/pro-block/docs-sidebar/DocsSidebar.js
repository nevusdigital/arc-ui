function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { DocsSidebar: () => eh, default: () => em });
  var i = a(95155), n = a(12115), r = a(40623), s = a(28245), o = a(55809), d = a(92171), l = a(25354), c = a(18310), u = a(57700), p = a(80642), h = a(44825), m = a(17082), f = a(71019), g = a(72974), y = a(28786), b = a(76721), _ = a(51811);
  let x = {
    name: "table-of-contents",
    size: 24,
    node: [
      ["path", { d: "M16 5H3", key: "m91uny" }],
      ["path", { d: "M16 12H3", key: "1a2rj7" }],
      ["path", { d: "M16 19H3", key: "zzsher" }],
      ["path", { d: "M21 5h.01", key: "wa75ra" }],
      ["path", { d: "M21 12h.01", key: "msek7k" }],
      ["path", { d: "M21 19h.01", key: "qvbq2j" }]
    ]
  };
  x.node;
  let v = (0, _.A)(x);
  var w = a(12363), j = a(11012), k = a(14577), T = a(78780), N = a(64577), A = a(9005), S = a(96304), R = a(92218), C = a(90034), E = a(51288), P = a(36058), $ = a(73474), I = a(60466), H = a(43298), L = a(7770), M = a(26874), D = a.n(M);
  let z = {
    ava: { name: "Ava Mitchell", photo: "media/people/ava-mitchell.svg" },
    emma: { name: "Emma Collins", photo: "media/people/emma-collins.svg" },
    marcus: {
      name: "Marcus Johnson",
      photo: "media/people/marcus-johnson.svg"
    },
    jasmine: {
      name: "Jasmine Brooks",
      photo: "media/people/jasmine-brooks.svg"
    },
    sofia: {
      name: "Sofia Ramirez",
      photo: "media/people/sofia-ramirez.svg"
    }
  }, q = "4.12", W = [
    { id: "4.12", label: "v4.12 (latest)" },
    { id: "4.11", label: "v4.11" },
    { id: "3.9", label: "v3.9 (legacy)" }
  ], B = { "3.9": 1, "4.11": 2, "4.12": 3 }, O = [
    {
      id: "start",
      title: "Getting started",
      icon: h.A,
      pages: [
        {
          id: "introduction",
          title: "Introduction",
          author: "emma",
          updated: "Aug 4, 2026",
          lede: "Halden is a commerce API for catalogs, orders, and payments. Every object is a REST resource with a predictable URL and a JSON response.",
          sections: [
            {
              id: "base-url",
              title: "Base URL",
              text: [
                "All requests go to `https://api.halden.example/v4` over HTTPS. Calls over plain HTTP are refused rather than redirected, so a leaked key never travels unencrypted."
              ]
            },
            {
              id: "modes",
              title: "Test and live mode",
              text: [
                "Every account has a sandbox. Keys that start with `sk_test_` only touch test data, so you can build and demo a full checkout without moving money."
              ]
            }
          ]
        },
        {
          id: "quickstart",
          title: "Quickstart",
          author: "marcus",
          updated: "Sep 9, 2026",
          lede: "Make your first request in about five minutes: create a key, install the SDK, and list your products.",
          sections: [
            {
              id: "create-key",
              title: "Create an API key",
              text: [
                "Open Developers \u2192 API keys and choose Create secret key. Copy it right away, because Halden shows a secret key only once."
              ]
            },
            {
              id: "install",
              title: "Install the SDK",
              text: [
                "The Node SDK supports Node 18 and later. The Python and Go clients use the same method names."
              ],
              code: { code: "npm install @halden/node", language: "bash" }
            },
            {
              id: "first-request",
              title: "Make your first request",
              text: [
                "Lists come back newest first, with a cursor you pass as `starting_after` to fetch the next page."
              ],
              code: {
                file: "list-products.ts",
                language: "ts",
                code: `import { Halden } from "@halden/node";

const halden = new Halden(process.env.HALDEN_SECRET_KEY!);
const products = await halden.products.list({ limit: 3 });

console.log(products.data.map((product) => product.name));`
              }
            },
            {
              id: "go-live",
              title: "Go live",
              text: [
                "Swap your `sk_test_` key for an `sk_live_` key and register a production webhook endpoint. Nothing else in your code changes."
              ]
            }
          ]
        },
        {
          id: "authentication",
          title: "Authentication",
          author: "jasmine",
          updated: "Aug 26, 2026",
          lede: "Authenticate every request with a secret key in the Authorization header.",
          sections: [
            {
              id: "key-types",
              title: "Secret and publishable keys",
              text: [
                "Secret keys can read and write everything in your account and must stay on your server. Publishable keys start with `pk_` and can only create checkout sessions from the browser."
              ]
            },
            {
              id: "send",
              title: "Send the key",
              text: [
                "Pass the key as a bearer token. Requests without a valid key return 401 with the code `invalid_api_key`."
              ],
              code: {
                language: "bash",
                code: `curl https://api.halden.example/v4/orders \\
  -H "Authorization: Bearer sk_test_51Hq2Lx8vYc"`
              }
            },
            {
              id: "restricted",
              title: "Restricted keys",
              text: [
                "Give each service only what it needs. A restricted key for your warehouse can read orders and update inventory, and nothing else."
              ]
            },
            {
              id: "rotate",
              title: "Rotate a key",
              text: [
                "Rolling a key issues a new one and keeps the old key valid for up to 7 days, so you can deploy the change without downtime."
              ]
            }
          ]
        },
        {
          id: "rate-limits",
          title: "Rate limits",
          author: "jasmine",
          updated: "Jul 30, 2026",
          lede: "Each live key can make 100 read and 50 write requests per second.",
          sections: [
            {
              id: "429",
              title: "Handle 429 responses",
              text: [
                "Over the limit, the API answers with 429 and a `Retry-After` header in seconds. Wait that long, then retry with the same idempotency key."
              ]
            },
            {
              id: "headroom",
              title: "Watch your headroom",
              text: [
                "Every response carries `RateLimit-Remaining` and `RateLimit-Reset`, so a busy import can slow down before it reaches the limit."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "resources",
      title: "Resources",
      icon: m.A,
      pages: [
        {
          id: "products",
          title: "Products",
          author: "sofia",
          updated: "Sep 2, 2026",
          lede: "A product is something you sell, with a variant for each size, color, or material.",
          sections: [
            {
              id: "variants",
              title: "Variants and prices",
              text: [
                "Each variant has its own SKU, stock count, and a price in every currency you sell in."
              ]
            },
            {
              id: "archive",
              title: "Archive instead of delete",
              text: [
                "Products that appear on past orders can't be deleted. Archive them to hide them from your storefront and keep order history intact."
              ]
            }
          ]
        },
        {
          id: "orders",
          title: "Orders",
          author: "marcus",
          updated: "Aug 21, 2026",
          lede: "An order records what a customer bought, what they paid, and where it ships.",
          sections: [
            {
              id: "lifecycle",
              title: "Order lifecycle",
              text: [
                "Orders move from `pending` to `paid`, `fulfilled`, and `delivered`. A refund can happen at any point after payment."
              ]
            },
            {
              id: "expand",
              title: "Expand related objects",
              text: [
                "Pass `expand[]=customer` to receive the full customer in the same response instead of an ID."
              ]
            }
          ]
        },
        {
          id: "customers",
          title: "Customers",
          author: "sofia",
          updated: "Jul 14, 2026",
          lede: "Customers keep contact details, saved addresses, and payment methods for returning buyers.",
          sections: [
            {
              id: "find",
              title: "Find a customer",
              text: [
                "Search by email with `GET /v4/customers?email=`. Matching is exact and ignores case."
              ]
            },
            {
              id: "erase",
              title: "Erase personal data",
              text: [
                "Erasing a customer removes their personal data within 30 days. Their past orders keep only the country and totals."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "payments",
      title: "Payments",
      icon: f.A,
      pages: [
        {
          id: "payment-intents",
          title: "Payment intents",
          author: "emma",
          updated: "Sep 11, 2026",
          since: "4.11",
          lede: "A payment intent tracks one attempt to collect money, from authorization to capture.",
          sections: [
            {
              id: "confirm",
              title: "Confirm on the client",
              text: [
                "Create the intent on your server, then confirm it in the browser with its client secret. If the bank asks for authentication, it happens in between."
              ]
            },
            {
              id: "capture",
              title: "Capture later",
              text: [
                "Set `capture_method` to `manual` to hold funds and capture when the order ships. Uncaptured authorizations expire after 7 days."
              ]
            }
          ]
        },
        {
          id: "charges",
          title: "Charges",
          author: "emma",
          updated: "Mar 3, 2026",
          until: "3.9",
          lede: "In v3, a charge moves money in one step and can't pause for bank authentication.",
          sections: [
            {
              id: "move",
              title: "Move to payment intents",
              text: [
                "Charges keep working in v3.9. New integrations should use payment intents, which handle bank authentication without extra code."
              ]
            },
            {
              id: "refund-charge",
              title: "Refund a charge",
              text: [
                "Refunds use the same `/refunds` endpoint. Pass `charge` instead of `payment_intent`."
              ]
            }
          ]
        },
        {
          id: "refunds",
          title: "Refunds",
          author: "ava",
          updated: "Aug 18, 2026",
          lede: "Refund all or part of a payment. Money returns to the original payment method in 5 to 10 business days.",
          sections: [
            {
              id: "partial",
              title: "Partial refunds",
              text: [
                "Pass an `amount` in the smallest currency unit. You can issue several partial refunds until the payment is fully refunded."
              ]
            },
            {
              id: "reasons",
              title: "Refund reasons",
              text: [
                "Set `reason` to `duplicate`, `fraudulent`, or `requested_by_customer`. Fraudulent refunds also block the card for future payments."
              ]
            }
          ]
        },
        {
          id: "disputes",
          title: "Disputes",
          author: "ava",
          updated: "Sep 18, 2026",
          since: "4.12",
          lede: "When a customer disputes a payment with their bank, Halden opens a dispute and holds the amount.",
          sections: [
            {
              id: "evidence",
              title: "Submit evidence",
              text: [
                "Upload receipts, shipping confirmation, and customer messages before the due date. You can submit once, so send everything together."
              ]
            },
            {
              id: "outcomes",
              title: "Dispute outcomes",
              text: [
                "Banks usually decide within 60 to 75 days. A won dispute returns the held amount and the dispute fee."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "webhooks",
      title: "Webhooks",
      icon: g.A,
      pages: [
        {
          id: "webhooks-overview",
          title: "Overview",
          author: "marcus",
          updated: "Sep 2, 2026",
          lede: "Webhooks tell your server when something happens in your account, such as a paid order or a new refund.",
          sections: [
            {
              id: "register",
              title: "Register an endpoint",
              text: [
                "Add an HTTPS URL under Developers \u2192 Webhooks and choose the events it should receive. Each endpoint gets its own signing secret."
              ]
            },
            {
              id: "respond",
              title: "Respond quickly",
              text: [
                "Return a 2xx status within 10 seconds, then do slow work in a background job. Slow responses count as failures and are retried."
              ]
            }
          ]
        },
        {
          id: "verify-signatures",
          title: "Verify signatures",
          author: "ava",
          updated: "Sep 18, 2026",
          lede: "Every webhook request is signed, so you can confirm it came from Halden and wasn't changed on the way.",
          sections: [
            {
              id: "how",
              title: "How signing works",
              text: [
                "Each request carries a `Halden-Signature` header with a timestamp and an HMAC-SHA256 signature. The signature covers the timestamp and the raw request body, computed with your endpoint's signing secret."
              ],
              code: {
                file: "Request header",
                language: "http",
                code: "Halden-Signature: t=1758451200,v1=5257a869e7ecebeda32affa62cdca3fa51cad7e77a0e56ff536d0ce8e108d8bd"
              }
            },
            {
              id: "secret",
              title: "Find your signing secret",
              text: [
                "Each endpoint has its own secret that starts with `whsec_`. You'll find it under Developers \u2192 Webhooks, in the endpoint's details.",
                "Rolling a secret keeps the previous one valid for 24 hours, so events sent during a deploy still verify."
              ]
            },
            {
              id: "sdk",
              title: "Verify with the SDK",
              text: [
                "Pass the raw body, not parsed JSON. Parsing and serializing again changes the whitespace, and the signature no longer matches."
              ],
              code: {
                file: "app/webhooks/route.ts",
                language: "ts",
                code: `import { verifyWebhook } from "@halden/node";

const secret = process.env.HALDEN_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const body = await request.text();
  const event = verifyWebhook(body, request.headers, secret);

  if (event.type === "order.paid") await fulfil(event.data.order);
  return new Response(null, { status: 204 });
}`
              },
              note: "Test locally with `halden listen --forward-to localhost:3000/webhooks`. The CLI signs each event with a temporary secret it prints on start."
            },
            {
              id: "manual",
              title: "Verify without the SDK",
              text: [
                "If there's no SDK for your language, verification takes four steps."
              ],
              steps: [
                "Split the header on commas and read `t` and `v1`.",
                "Join `t`, a period, and the raw body into one string.",
                "Compute an HMAC-SHA256 of that string with your signing secret.",
                "Compare the result with `v1`."
              ]
            },
            {
              id: "constant-time",
              title: "Compare signatures in constant time",
              text: [
                "Use `timingSafeEqual` or your language's equivalent. A plain string comparison stops at the first byte that differs, which can reveal how much of a forged signature was right."
              ],
              code: {
                file: "verify.ts",
                language: "ts",
                code: `import { createHmac, timingSafeEqual } from "node:crypto";

const expected = createHmac("sha256", secret).update(\`\${t}.\${body}\`).digest();
const valid = timingSafeEqual(expected, Buffer.from(v1, "hex"));`
              }
            },
            {
              id: "replay",
              title: "Reject old events",
              text: [
                "Refuse requests whose timestamp is more than 5 minutes old, so a captured request can't be replayed later. The SDKs use a 300 second tolerance; pass `tolerance` to change it."
              ]
            }
          ]
        },
        {
          id: "retries",
          title: "Retries and backoff",
          author: "marcus",
          updated: "Sep 4, 2026",
          lede: "If your endpoint doesn't answer with a 2xx status, Halden retries with growing delays for up to 72 hours.",
          sections: [
            {
              id: "schedule",
              title: "Retry schedule",
              text: [
                "Each attempt carries the same event ID and a fresh signature timestamp."
              ],
              steps: [
                "After 1 minute",
                "After 5 minutes",
                "After 30 minutes",
                "After 2 hours",
                "Then every 8 hours until 72 hours have passed"
              ]
            },
            {
              id: "idempotent",
              title: "Make handlers idempotent",
              text: [
                "Store each event ID once you've handled it and skip duplicates. Retries and network timeouts can deliver the same event twice."
              ],
              code: {
                file: "handle-event.ts",
                language: "ts",
                code: `if (await db.events.has(event.id)) return new Response(null, { status: 200 });

await handle(event);
await db.events.add(event.id);`
              }
            },
            {
              id: "disabled",
              title: "Disabled endpoints",
              text: [
                "An endpoint that fails every attempt for 3 days is turned off, and the account owner gets an email. Fix the endpoint, then turn it back on."
              ]
            },
            {
              id: "replay-missed",
              title: "Replay missed events",
              text: [
                "Open the endpoint in the dashboard, filter by failed, and choose Resend. Replays are signed with the current secret."
              ]
            }
          ]
        },
        {
          id: "event-types",
          title: "Event types",
          author: "sofia",
          updated: "Aug 12, 2026",
          since: "4.11",
          lede: "Every event has a type in the form resource.action, like `order.paid` or `refund.created`.",
          sections: [
            {
              id: "order-events",
              title: "Order events",
              text: [
                "`order.created`, `order.paid`, `order.fulfilled`, and `order.cancelled` cover the full order lifecycle."
              ]
            },
            {
              id: "wildcards",
              title: "Subscribe with wildcards",
              text: [
                "Use `order.*` to receive every order event, including ones added in later versions."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "sdks",
      title: "SDKs",
      icon: y.A,
      pages: [
        {
          id: "node",
          title: "Node.js",
          author: "jasmine",
          updated: "Sep 16, 2026",
          lede: "The official Node client is written in TypeScript, with full types for every resource.",
          sections: [
            {
              id: "node-install",
              title: "Install",
              text: ["Supports Node 18 and later, Bun, and Deno."],
              code: { code: "npm install @halden/node", language: "bash" }
            },
            {
              id: "node-retries",
              title: "Network retries",
              text: [
                "The client retries failed network calls twice with backoff. Set `maxNetworkRetries` to change it."
              ]
            }
          ]
        },
        {
          id: "python",
          title: "Python",
          author: "emma",
          updated: "Aug 29, 2026",
          lede: "A typed client for Python 3.9 and later, with sync and async interfaces.",
          sections: [
            {
              id: "python-install",
              title: "Install",
              text: [
                "Wheels are published for every supported Python version."
              ],
              code: { code: "pip install halden", language: "bash" }
            },
            {
              id: "python-async",
              title: "Async client",
              text: [
                "Import `AsyncHalden` to call the same methods with `await` inside asyncio applications."
              ]
            }
          ]
        },
        {
          id: "go",
          title: "Go",
          author: "marcus",
          updated: "Sep 18, 2026",
          since: "4.12",
          lede: "A Go module with context support on every call and typed errors you can match with `errors.As`.",
          sections: [
            {
              id: "go-install",
              title: "Install",
              text: ["Requires Go 1.22 or later."],
              code: {
                code: "go get github.com/halden/halden-go/v4",
                language: "bash"
              }
            },
            {
              id: "go-errors",
              title: "Handle errors",
              text: [
                "API errors return `*halden.Error` with the HTTP status, a code like `card_declined`, and the request ID for support."
              ]
            }
          ]
        }
      ]
    }
  ], Y = O.flatMap((e2) => e2.pages), F = new Map(Y.map((e2) => [e2.id, e2])), U = new Map(O.flatMap((e2) => e2.pages.map((t2) => [t2.id, e2]))), K = (e2, t2) => (!e2.since || B[t2] >= B[e2.since]) && (!e2.until || B[t2] <= B[e2.until]), V = { duration: 0 }, G = (e2) => `blur(${e2}px)`, J = { duration: L.T.duration.standard, ease: [...L.T.ease.enter] }, Z = { height: 0, opacity: 0, overflow: "hidden" }, X = {
    height: "auto",
    opacity: 1,
    transitionEnd: { overflow: "visible" },
    transition: {
      height: L.T.spring.smooth,
      opacity: { duration: 0.22, delay: 0.04, ease: [...L.T.ease.standard] }
    }
  }, Q = {
    ...Z,
    transition: {
      height: L.T.spring.smooth,
      opacity: { duration: 0.14, ease: [...L.T.ease.standard] }
    }
  }, ee = {
    height: "auto",
    opacity: 1,
    transitionEnd: { overflow: "visible" },
    transition: V
  }, et = { ...Z, transition: V }, ea = (e2) => ({ initial: Z, animate: e2 ? ee : X, exit: e2 ? et : Q }), ei = { opacity: 0, y: "0.35em", filter: G(L.T.blur.soft) }, en = {
    opacity: 0,
    y: "-0.35em",
    filter: G(L.T.blur.subtle),
    transition: { duration: 0.14, ease: [...L.T.ease.standard] }
  }, er = { opacity: 1, y: "0em", filter: G(0) };
  function es({
    enabled: e2 = true,
    label: t2,
    note: a2,
    shortcut: s2,
    side: o2 = "right",
    children: d2
  }) {
    let [l2, c2] = (0, n.useState)(false);
    return !e2 && l2 && c2(false), (0, i.jsxs)(r.bL, {
      open: e2 && l2,
      onOpenChange: (t3) => c2(t3 && e2),
      children: [
        (0, i.jsx)(r.l9, { asChild: true, children: d2 }),
        (0, i.jsx)(r.ZL, {
          children: (0, i.jsxs)(r.UC, {
            className: D().tip,
            side: o2,
            sideOffset: "right" === o2 ? 14 : 8,
            collisionPadding: 8,
            children: [
              t2,
              a2 && (0, i.jsx)("span", { className: D().tipNote, children: a2 }),
              s2 && (0, i.jsx)("kbd", { children: s2 })
            ]
          })
        })
      ]
    });
  }
  function eo({ collapsed: e2, reduce: t2 }) {
    return (0, i.jsxs)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      "aria-hidden": "true",
      children: [
        (0, i.jsx)("rect", {
          x: "2.75",
          y: "3.75",
          width: "14.5",
          height: "12.5",
          rx: "3.5"
        }),
        (0, i.jsx)(l.PY1.path, {
          d: "M8.25 4.25v11.5",
          initial: false,
          animate: { x: e2 ? -2.5 : 0 },
          transition: t2 ? V : L.T.spring.smooth
        })
      ]
    });
  }
  function ed({ text: e2 }) {
    return (0, i.jsx)(i.Fragment, {
      children: e2.split("`").map(
        (e3, t2) => t2 % 2 ? (0, i.jsx)("code", { className: D().inlineCode, children: e3 }, t2) : (0, i.jsx)(n.Fragment, { children: e3 }, t2)
      )
    });
  }
  function el({ text: e2, query: t2 }) {
    if (!t2) return (0, i.jsx)(i.Fragment, { children: e2 });
    let a2 = e2.toLowerCase(), n2 = [], r2 = 0;
    for (let s2 = a2.indexOf(t2); -1 !== s2; s2 = a2.indexOf(t2, r2))
      s2 > r2 && n2.push(e2.slice(r2, s2)), n2.push((0, i.jsx)("mark", { children: e2.slice(s2, s2 + t2.length) }, s2)), r2 = s2 + t2.length;
    return r2 < e2.length && n2.push(e2.slice(r2)), (0, i.jsx)(i.Fragment, { children: n2 });
  }
  function ec({ children: e2, className: t2 }) {
    let a2 = (0, c.I)(), r2 = (0, n.useRef)(null), o2 = (0, n.useRef)(null), u2 = (0, s.d)("auto");
    return (0, n.useLayoutEffect)(() => {
      let e3 = r2.current, t3 = o2.current;
      if (!e3 || !t3) return;
      let i2 = t3.offsetHeight, n2 = t3.offsetWidth, s2 = new ResizeObserver(() => {
        let r3 = t3.offsetHeight, s3 = t3.offsetWidth !== n2;
        if (n2 = t3.offsetWidth, r3 === i2) return;
        let o3 = u2.get(), l2 = "number" == typeof o3 ? o3 : i2;
        (i2 = r3, a2 || s3) ? u2.jump("auto") : (e3.style.height = `${l2}px`, (0, d.i)(u2, [l2, r3], {
          ...L.T.spring.smooth,
          onComplete: () => u2.jump("auto")
        }));
      });
      return s2.observe(t3), () => s2.disconnect();
    }, [u2, a2]), (0, i.jsx)(l.PY1.div, {
      ref: r2,
      className: t2,
      style: { height: u2, overflow: "clip" },
      children: (0, i.jsx)("div", {
        ref: o2,
        className: D().fitInner,
        children: e2
      })
    });
  }
  function eu({
    id: e2,
    version: t2,
    activeId: a2,
    expanded: r2,
    rail: s2,
    toggle: o2,
    onExpand: d2,
    onToggle: h2,
    onOpen: m2
  }) {
    let f2 = (0, c.I)(), g2 = (0, n.useId)(), [y2, _2] = (0, n.useState)(""), [x2, v2] = (0, n.useState)(() => /* @__PURE__ */ new Set()), w2 = (0, n.useRef)(null), j2 = (0, n.useRef)(null), k2 = y2.trim().toLowerCase(), T2 = (0, n.useMemo)(
      () => O.flatMap((e3) => {
        let a3 = e3.pages.filter((e4) => K(e4, t2));
        if (!k2) return [{ group: e3, results: a3.map((e4) => ({ page: e4 })) }];
        let i2 = e3.title.toLowerCase().includes(k2), n2 = a3.flatMap((e4) => {
          if (i2 || e4.title.toLowerCase().includes(k2))
            return [{ page: e4 }];
          let t3 = e4.sections.find(
            (e5) => e5.title.toLowerCase().includes(k2)
          );
          return t3 ? [{ page: e4, heading: t3 }] : [];
        });
        return n2.length ? [{ group: e3, results: n2 }] : [];
      }),
      [t2, k2]
    ), N2 = T2.reduce((e3, t3) => e3 + t3.results.length, 0);
    function A2(e3) {
      _2(e3), v2(/* @__PURE__ */ new Set());
    }
    function S2(e3, t3) {
      if (s2) {
        if (!t3) return;
        d2();
      }
      if (!k2) return h2(e3, t3);
      v2((a3) => {
        let i2 = new Set(a3);
        return t3 ? i2.delete(e3) : i2.add(e3), i2;
      });
    }
    (0, n.useEffect)(() => {
      let e3 = w2.current, t3 = e3?.querySelector(`[data-page="${a2}"]`);
      if (!e3 || !t3) return;
      let i2 = t3.getBoundingClientRect().top - e3.getBoundingClientRect().top;
      (i2 < 8 || i2 + 40 > e3.clientHeight) && e3.scrollTo({
        top: e3.scrollTop + i2 - e3.clientHeight / 3,
        behavior: f2 ? "auto" : "smooth"
      });
    }, [a2, f2]);
    let R2 = () => Array.from(w2.current?.querySelectorAll("[data-nav-item]") ?? []);
    return (0, i.jsxs)("div", {
      className: D().navInner,
      children: [
        (0, i.jsxs)("div", {
          className: D().searchRow,
          children: [
            (0, i.jsx)("div", {
              className: D().searchClip,
              "data-rail-hidden": "",
              inert: s2,
              children: (0, i.jsx)("div", {
                className: D().search,
                children: (0, i.jsx)(H.L, {
                  ref: j2,
                  label: "Search docs",
                  placeholder: "Search docs",
                  value: y2,
                  onValueChange: A2,
                  onKeyDown: function(e3) {
                    if ("Escape" === e3.key && y2) e3.preventDefault(), A2("");
                    else if ("Enter" === e3.key && k2) {
                      let t3 = T2[0]?.results[0];
                      if (!t3) return;
                      e3.preventDefault(), m2(t3.page.id, t3.heading?.id);
                    } else if ("ArrowDown" === e3.key) {
                      let t3 = R2()[0];
                      if (!t3) return;
                      e3.preventDefault(), t3.focus();
                    }
                  },
                  "aria-controls": `${e2}-tree`,
                  autoComplete: "off",
                  spellCheck: false
                })
              })
            }),
            o2
          ]
        }),
        (0, i.jsxs)(l.PY1.nav, {
          ref: w2,
          id: `${e2}-tree`,
          className: D().nav,
          "aria-label": "Documentation",
          layoutScroll: true,
          onKeyDown: function(e3) {
            let t3 = R2(), a3 = t3.indexOf(document.activeElement);
            if (-1 === a3) return;
            let i2 = t3[a3].dataset.group;
            if (i2 && ("ArrowRight" === e3.key || "ArrowLeft" === e3.key)) {
              e3.preventDefault(), S2(i2, "ArrowRight" === e3.key);
              return;
            }
            let n2 = "ArrowDown" === e3.key ? t3[a3 + 1] : "ArrowUp" === e3.key ? t3[a3 - 1] ?? j2.current : "Home" === e3.key ? t3[0] : "End" === e3.key ? t3[t3.length - 1] : void 0;
            n2 && (e3.preventDefault(), n2.focus());
          },
          children: [
            (0, i.jsx)(u.o, {
              id: g2,
              children: (0, i.jsx)(p.N, {
                initial: false,
                children: T2.map(({ group: n2, results: o3 }) => {
                  let d3 = !s2 && (k2 ? !x2.has(n2.id) : r2.has(n2.id)), c2 = o3.find((e3) => e3.page.id === a2)?.page, u2 = !d3 && !!c2, h3 = s2 && !!c2, g3 = n2.icon;
                  return (0, i.jsx)(
                    l.PY1.div,
                    {
                      className: D().group,
                      ...ea(f2),
                      children: (0, i.jsxs)("div", {
                        className: D().groupInner,
                        children: [
                          (0, i.jsx)(es, {
                            enabled: s2,
                            label: n2.title,
                            note: c2?.title,
                            children: (0, i.jsxs)("button", {
                              type: "button",
                              className: D().groupButton,
                              "data-nav-item": true,
                              "data-group": n2.id,
                              "data-lit": h3 || void 0,
                              "data-holds": u2 || void 0,
                              "aria-expanded": d3,
                              "aria-controls": d3 ? `${e2}-${n2.id}` : void 0,
                              onClick: () => S2(n2.id, !d3),
                              children: [
                                h3 && (0, i.jsx)(l.PY1.span, {
                                  layoutId: "docs-active-page",
                                  className: D().groupHighlight,
                                  style: { borderRadius: 8 },
                                  transition: f2 ? V : L.T.spring.morph,
                                  "aria-hidden": "true"
                                }),
                                (0, i.jsx)(g3, {
                                  className: D().groupIcon,
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                (0, i.jsx)("span", {
                                  className: D().groupLabel,
                                  children: (0, i.jsx)(el, {
                                    text: n2.title,
                                    query: k2
                                  })
                                }),
                                u2 && (0, i.jsx)("span", {
                                  className: D().activeDot,
                                  children: (0, i.jsx)("span", {
                                    className: D().srOnly,
                                    children: "Contains the current page"
                                  })
                                }),
                                (0, i.jsx)(b.A, {
                                  className: D().chevron,
                                  size: 14,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              ]
                            })
                          }),
                          (0, i.jsx)(p.N, {
                            initial: false,
                            children: d3 && (0, i.jsx)(
                              l.PY1.div,
                              {
                                ...ea(f2),
                                children: (0, i.jsx)("ul", {
                                  id: `${e2}-${n2.id}`,
                                  className: D().pages,
                                  children: (0, i.jsx)(p.N, {
                                    initial: false,
                                    children: o3.map(
                                      ({ page: e3, heading: n3 }) => {
                                        let r3 = e3.id === a2;
                                        return (0, i.jsx)(
                                          l.PY1.li,
                                          {
                                            ...ea(f2),
                                            children: (0, i.jsxs)("button", {
                                              type: "button",
                                              className: D().page,
                                              "data-nav-item": true,
                                              "data-page": e3.id,
                                              "aria-current": r3 ? "page" : void 0,
                                              onClick: () => m2(e3.id, n3?.id),
                                              children: [
                                                r3 && !s2 && (0, i.jsx)(l.PY1.span, {
                                                  layoutId: "docs-active-page",
                                                  className: D().pageHighlight,
                                                  style: {
                                                    borderRadius: 8
                                                  },
                                                  transition: f2 ? V : L.T.spring.morph,
                                                  "aria-hidden": "true"
                                                }),
                                                (0, i.jsxs)("span", {
                                                  className: D().pageText,
                                                  children: [
                                                    (0, i.jsx)("span", {
                                                      className: D().pageTitle,
                                                      children: (0, i.jsx)(
                                                        el,
                                                        {
                                                          text: e3.title,
                                                          query: k2
                                                        }
                                                      )
                                                    }),
                                                    n3 && (0, i.jsx)("span", {
                                                      className: D().pageHeading,
                                                      children: (0, i.jsx)(
                                                        el,
                                                        {
                                                          text: n3.title,
                                                          query: k2
                                                        }
                                                      )
                                                    })
                                                  ]
                                                }),
                                                e3.since === q && t2 === q && (0, i.jsx)("span", {
                                                  className: D().pageTag,
                                                  children: (0, i.jsx)(
                                                    C.E,
                                                    {
                                                      size: "sm",
                                                      tone: "info",
                                                      children: "New"
                                                    }
                                                  )
                                                })
                                              ]
                                            })
                                          },
                                          e3.id
                                        );
                                      }
                                    )
                                  })
                                })
                              },
                              "pages"
                            )
                          })
                        ]
                      })
                    },
                    n2.id
                  );
                })
              })
            }),
            (0, i.jsx)(p.N, {
              initial: false,
              children: k2 && 0 === N2 && (0, i.jsx)(
                l.PY1.div,
                {
                  className: D().empty,
                  "data-rail-hidden": "",
                  inert: s2,
                  initial: { opacity: 0, y: 6, filter: G(L.T.blur.subtle) },
                  animate: { opacity: 1, y: 0, filter: G(0) },
                  exit: {
                    opacity: 0,
                    transition: { duration: f2 ? 0 : L.T.duration.instant }
                  },
                  transition: f2 ? V : { ...J, delay: 0.08 },
                  children: (0, i.jsxs)("div", {
                    className: D().emptyBody,
                    children: [
                      (0, i.jsxs)("p", {
                        children: ["No pages match \u201C", y2.trim(), "\u201D"]
                      }),
                      (0, i.jsx)("span", {
                        children: "Check the spelling, or try a broader word like orders or refunds."
                      }),
                      (0, i.jsx)(E.$, {
                        type: "button",
                        variant: "secondary",
                        size: "sm",
                        onClick: () => {
                          A2(""), j2.current?.focus();
                        },
                        children: "Clear search"
                      })
                    ]
                  })
                },
                "empty"
              )
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: D().srOnly,
          role: "status",
          "aria-live": "polite",
          children: k2 ? N2 ? `${N2} ${1 === N2 ? "page matches" : "pages match"} ${y2.trim()}` : `No pages match ${y2.trim()}` : ""
        })
      ]
    });
  }
  function ep({
    id: e2,
    page: t2,
    group: a2,
    version: r2,
    fallback: o2,
    prev: u2,
    next: h2,
    jump: m2,
    covered: f2,
    onOpen: g2,
    onVersion: y2
  }) {
    let _2 = (0, c.I)(), [x2, N2] = (0, n.useState)({ page: t2.id, section: t2.sections[0].id }), [A2, S2] = (0, n.useState)(false), C2 = (0, n.useRef)(null), I2 = (0, n.useRef)(null), H2 = (0, n.useRef)(/* @__PURE__ */ new Map()), M2 = (0, n.useRef)(false), W2 = (0, n.useRef)(0), B2 = (0, n.useRef)(0), O2 = (0, n.useRef)(false), Y2 = (0, s.d)(0), F2 = (0, s.d)(0), U2 = x2.page === t2.id ? x2.section : t2.sections[0].id, K2 = t2.sections.find((e3) => e3.id === U2) ?? t2.sections[0], Z2 = z[t2.author], X2 = "3.9" === r2, Q2 = r2 === q ? o2 : [
      o2,
      X2 ? "v3.9 is a legacy version and gets security fixes until March 31, 2027." : "You're reading v4.11. Version 4.12 adds disputes and the Go SDK."
    ].filter(Boolean).join(" ");
    (0, n.useEffect)(
      () => () => {
        window.clearTimeout(W2.current), cancelAnimationFrame(B2.current);
      },
      []
    ), (0, n.useLayoutEffect)(() => {
      C2.current && (C2.current.scrollTop = 0), M2.current = false;
    }, [t2.id]);
    let ee2 = (0, n.useCallback)(() => {
      let e3 = C2.current;
      if (!e3 || M2.current) return;
      let a3 = e3.getBoundingClientRect().top, i2 = Math.min(120, 0.3 * e3.clientHeight), n2 = t2.sections[0].id;
      for (let e4 of t2.sections) {
        let r3 = H2.current.get(`${t2.id}:${e4.id}`);
        r3 && r3.getBoundingClientRect().top - a3 <= i2 && (n2 = e4.id);
      }
      e3.scrollHeight - e3.clientHeight > 8 && e3.scrollTop + e3.clientHeight >= e3.scrollHeight - 8 && (n2 = t2.sections[t2.sections.length - 1].id), N2(
        (e4) => e4.page === t2.id && e4.section === n2 ? e4 : { page: t2.id, section: n2 }
      );
    }, [t2]), et2 = (0, n.useCallback)(
      (e3, a3, i2) => {
        let n2 = C2.current;
        if (!n2) return;
        let r3 = e3 ? H2.current.get(`${t2.id}:${e3}`) : void 0, s2 = r3 ? r3.getBoundingClientRect().top - n2.getBoundingClientRect().top + n2.scrollTop : 0;
        N2({ page: t2.id, section: e3 ?? t2.sections[0].id }), M2.current = true, window.clearTimeout(W2.current), W2.current = window.setTimeout(() => {
          M2.current = false;
        }, 180), n2.scrollTo({
          top: Math.max(0, s2),
          behavior: a3 && !_2 ? "smooth" : "auto"
        }), i2 && r3?.querySelector("h3")?.focus({ preventScroll: true });
      },
      [t2, _2]
    );
    (0, n.useEffect)(() => {
      if (!m2 || m2.page !== t2.id) return;
      let e3 = requestAnimationFrame(() => et2(m2.section, !m2.section, false));
      return () => cancelAnimationFrame(e3);
    }, [m2, t2.id, et2]), (0, n.useLayoutEffect)(() => {
      let e3 = I2.current;
      if (!e3) return;
      let a3 = e3.offsetWidth, i2 = (a4) => {
        let i3 = e3.querySelector(`[data-section="${t2.id}:${U2}"]`);
        if (i3) {
          if (!a4 || !O2.current || _2) {
            Y2.jump(i3.offsetTop), F2.jump(i3.offsetHeight), O2.current = true;
            return;
          }
          (0, d.i)(Y2, i3.offsetTop, L.T.spring.morph), (0, d.i)(F2, i3.offsetHeight, L.T.spring.morph);
        }
      };
      i2(true);
      let n2 = new ResizeObserver(() => {
        e3.offsetWidth !== a3 && (a3 = e3.offsetWidth, i2(false));
      });
      return n2.observe(e3), () => n2.disconnect();
    }, [t2.id, U2, _2, Y2, F2]);
    let es2 = () => {
      M2.current = false;
    };
    return (0, i.jsxs)("div", {
      className: D().main,
      inert: f2,
      children: [
        (0, i.jsxs)("div", {
          className: D().outline,
          children: [
            (0, i.jsxs)("button", {
              type: "button",
              className: D().outlineToggle,
              "aria-expanded": A2,
              "aria-controls": `${e2}-outline`,
              "aria-label": `On this page, ${K2.title}`,
              onClick: () => S2((e3) => !e3),
              children: [
                (0, i.jsx)(v, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, i.jsx)("span", {
                  className: D().togglePrefix,
                  "aria-hidden": "true",
                  children: "On this page"
                }),
                (0, i.jsx)("span", {
                  className: D().currentSection,
                  "aria-hidden": "true",
                  children: (0, i.jsx)(p.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, i.jsx)(
                      l.PY1.span,
                      {
                        initial: ei,
                        animate: er,
                        exit: _2 ? { opacity: 0, transition: V } : en,
                        transition: _2 ? V : J,
                        children: K2.title
                      },
                      `${t2.id}:${K2.id}`
                    )
                  })
                }),
                (0, i.jsx)(w.A, {
                  className: D().toggleChevron,
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              ]
            }),
            (0, i.jsx)("div", {
              id: `${e2}-outline`,
              className: D().outlinePanel,
              "data-open": A2,
              children: (0, i.jsxs)("nav", {
                className: D().outlineNav,
                "aria-label": "On this page",
                children: [
                  (0, i.jsx)("p", {
                    className: D().outlineTitle,
                    "aria-hidden": "true",
                    children: "On this page"
                  }),
                  (0, i.jsxs)("div", {
                    ref: I2,
                    className: D().outlineBody,
                    children: [
                      (0, i.jsx)(l.PY1.span, {
                        className: D().indicator,
                        style: { y: Y2, height: F2 },
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)(p.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, i.jsx)(
                          l.PY1.ol,
                          {
                            className: D().outlineList,
                            initial: { opacity: 0, filter: G(L.T.blur.subtle) },
                            animate: { opacity: 1, filter: G(0) },
                            exit: {
                              opacity: 0,
                              transition: { duration: 0.1 * !_2 }
                            },
                            transition: _2 ? V : J,
                            children: t2.sections.map(
                              (a3) => (0, i.jsx)(
                                "li",
                                {
                                  children: (0, i.jsx)("a", {
                                    href: `#${e2}-${t2.id}-${a3.id}`,
                                    "data-section": `${t2.id}:${a3.id}`,
                                    "aria-current": a3.id === U2 ? "location" : void 0,
                                    onClick: (e3) => {
                                      e3.preventDefault(), S2(false), et2(a3.id, true, true);
                                    },
                                    children: a3.title
                                  })
                                },
                                a3.id
                              )
                            )
                          },
                          t2.id
                        )
                      })
                    ]
                  })
                ]
              })
            })
          ]
        }),
        (0, i.jsx)(p.N, {
          initial: false,
          children: Q2 && (0, i.jsx)(
            l.PY1.div,
            {
              className: D().bannerWrap,
              ...ea(_2),
              children: (0, i.jsxs)("div", {
                className: D().banner,
                "data-tone": X2 ? "warning" : "info",
                children: [
                  (0, i.jsx)("span", {
                    className: D().bannerIcon,
                    "aria-hidden": "true",
                    children: (0, i.jsx)(p.N, {
                      mode: "popLayout",
                      initial: false,
                      children: (0, i.jsx)(
                        l.PY1.span,
                        {
                          initial: {
                            opacity: 0,
                            scale: 0.6,
                            filter: G(L.T.blur.subtle)
                          },
                          animate: { opacity: 1, scale: 1, filter: G(0) },
                          exit: {
                            opacity: 0,
                            scale: 0.6,
                            transition: {
                              duration: _2 ? 0 : L.T.duration.instant
                            }
                          },
                          transition: _2 ? V : L.T.spring.snappy,
                          children: X2 ? (0, i.jsx)(j.A, { size: 16, strokeWidth: 1.75 }) : (0, i.jsx)(k.A, {
                            size: 16,
                            strokeWidth: 1.75
                          })
                        },
                        X2 ? "warning" : "info"
                      )
                    })
                  }),
                  (0, i.jsx)(ec, {
                    className: D().bannerText,
                    children: (0, i.jsx)(p.N, {
                      mode: "popLayout",
                      initial: false,
                      children: (0, i.jsx)(
                        l.PY1.p,
                        {
                          initial: ei,
                          animate: er,
                          exit: _2 ? { opacity: 0, transition: V } : en,
                          transition: _2 ? V : J,
                          children: Q2
                        },
                        Q2
                      )
                    })
                  }),
                  r2 !== q && (0, i.jsxs)(E.$, {
                    type: "button",
                    variant: "secondary",
                    size: "sm",
                    onClick: () => y2(q),
                    children: ["Use v", q]
                  })
                ]
              })
            },
            "banner"
          )
        }),
        (0, i.jsx)("div", {
          ref: C2,
          className: D().scroller,
          onScroll: function() {
            if (M2.current) {
              window.clearTimeout(W2.current), W2.current = window.setTimeout(() => {
                M2.current = false;
              }, 140);
              return;
            }
            cancelAnimationFrame(B2.current), B2.current = requestAnimationFrame(ee2);
          },
          onWheel: es2,
          onTouchStart: es2,
          children: (0, i.jsx)(p.N, {
            mode: "popLayout",
            initial: false,
            children: (0, i.jsxs)(
              l.PY1.article,
              {
                className: D().article,
                "aria-labelledby": `${e2}-${t2.id}-title`,
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, transition: { duration: 0.1 * !_2 } },
                transition: _2 ? V : { duration: 0.36, ease: [...L.T.ease.enter] },
                children: [
                  (0, i.jsx)(l.PY1.h2, {
                    id: `${e2}-${t2.id}-title`,
                    tabIndex: -1,
                    initial: { filter: G(L.T.blur.soft) },
                    animate: { filter: G(0) },
                    transition: _2 ? V : J,
                    children: t2.title
                  }),
                  (0, i.jsx)("p", {
                    className: D().lede,
                    children: (0, i.jsx)(ed, { text: t2.lede })
                  }),
                  (0, i.jsxs)("div", {
                    className: D().byline,
                    children: [
                      (0, i.jsx)(R.e, {
                        name: Z2.name,
                        src: Z2.photo,
                        size: "sm"
                      }),
                      (0, i.jsxs)("span", {
                        className: D().bylineText,
                        children: [
                          (0, i.jsx)("strong", { children: Z2.name }),
                          (0, i.jsxs)("span", {
                            children: ["Updated ", t2.updated]
                          })
                        ]
                      }),
                      (0, i.jsx)($.CopyButton, {
                        value: `https://docs.halden.example/v${r2}/${a2.id}/${t2.id}`,
                        label: "Copy link",
                        variant: "plain"
                      })
                    ]
                  }),
                  t2.sections.map(
                    (a3) => (0, i.jsxs)(
                      "section",
                      {
                        className: D().section,
                        "aria-labelledby": `${e2}-${t2.id}-${a3.id}`,
                        ref: (e3) => {
                          let i2 = `${t2.id}:${a3.id}`;
                          e3 ? H2.current.set(i2, e3) : H2.current.delete(i2);
                        },
                        children: [
                          (0, i.jsx)("h3", {
                            id: `${e2}-${t2.id}-${a3.id}`,
                            tabIndex: -1,
                            children: a3.title
                          }),
                          a3.text.map(
                            (e3) => (0, i.jsx)(
                              "p",
                              { children: (0, i.jsx)(ed, { text: e3 }) },
                              e3
                            )
                          ),
                          a3.steps && (0, i.jsx)("ol", {
                            className: D().steps,
                            children: a3.steps.map(
                              (e3) => (0, i.jsx)(
                                "li",
                                { children: (0, i.jsx)(ed, { text: e3 }) },
                                e3
                              )
                            )
                          }),
                          a3.code && (0, i.jsx)("div", {
                            className: D().code,
                            children: (0, i.jsx)(P.N, {
                              code: a3.code.code,
                              filename: a3.code.file,
                              language: a3.code.language
                            })
                          }),
                          a3.note && (0, i.jsxs)("aside", {
                            className: D().note,
                            children: [
                              (0, i.jsx)(k.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              (0, i.jsx)("p", {
                                children: (0, i.jsx)(ed, { text: a3.note })
                              })
                            ]
                          })
                        ]
                      },
                      a3.id
                    )
                  ),
                  (0, i.jsxs)("nav", {
                    className: D().pager,
                    "aria-label": "Previous and next page",
                    children: [
                      u2 ? (0, i.jsxs)("button", {
                        type: "button",
                        className: D().pagerLink,
                        onClick: () => g2(u2.id),
                        children: [
                          (0, i.jsxs)("span", {
                            children: [
                              (0, i.jsx)(T.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              "Previous"
                            ]
                          }),
                          (0, i.jsx)("strong", { children: u2.title })
                        ]
                      }) : (0, i.jsx)("span", {}),
                      h2 && (0, i.jsxs)("button", {
                        type: "button",
                        className: `${D().pagerLink} ${D().pagerNext}`,
                        onClick: () => g2(h2.id),
                        children: [
                          (0, i.jsxs)("span", {
                            children: [
                              "Next",
                              (0, i.jsx)(b.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            ]
                          }),
                          (0, i.jsx)("strong", { children: h2.title })
                        ]
                      })
                    ]
                  })
                ]
              },
              t2.id
            )
          })
        })
      ]
    });
  }
  function eh({ defaultCollapsed: e2 = false, onCollapsedChange: t2 }) {
    var a2, u2;
    let h2, m2, f2, g2, y2, b2, _2 = (0, n.useId)(), x2 = (0, c.I)(), [v2, w2] = (0, n.useState)(true), j2 = x2 || v2, [k2, T2] = (0, n.useState)(e2), [R2, C2] = (0, n.useState)(false), E2 = k2 && !R2, P2 = (a2 = !!j2, h2 = (0, s.d)(+!E2), m2 = (0, o.G)(h2, (e3) => `calc(64px + (var(--full) - 64px) * ${e3})`), (0, n.useEffect)(() => {
      let e3 = +!E2;
      if (a2) return void h2.jump(e3);
      let t3 = (0, d.i)(h2, e3, L.T.spring.smooth);
      return () => t3.stop();
    }, [E2, a2, h2]), m2), $2 = (0, n.useRef)(null), H2 = (0, n.useRef)(null), M2 = (0, n.useRef)(null), [z2, B2] = (0, n.useState)(q), [J2, Z2] = (0, n.useState)("verify-signatures"), [X2, Q2] = (0, n.useState)(() => /* @__PURE__ */ new Set(["start", "webhooks"])), [ee2, et2] = (0, n.useState)(false), ea2 = R2 && ee2, ei2 = (u2 = !!j2, f2 = (0, s.d)(+!R2), g2 = (0, o.G)(
      f2,
      (e3) => e3 >= 1 ? "0px" : `calc(${(e3 - 1) * 100}% - ${(1 - e3) * 64}px)`
    ), y2 = (0, n.useRef)(R2), (0, n.useEffect)(() => {
      let e3 = R2 && !ea2 ? 0 : 1, t3 = y2.current !== R2;
      if (y2.current = R2, u2 || t3 || !R2) return void f2.jump(e3);
      let a3 = (0, d.i)(f2, e3, L.T.spring.smooth);
      return () => a3.stop();
    }, [R2, ea2, u2, f2]), { progress: f2, x: g2 }), en2 = (0, n.useRef)(null), er2 = (0, n.useRef)(null), [ed2, el2] = (0, n.useState)(null), [ec2, em2] = (0, n.useState)(null), [ef, eg] = (0, n.useState)(""), ey = (0, n.useRef)(0), eb = F.get(J2) ?? Y[0], e_ = U.get(eb.id) ?? O[0], ex = (0, n.useMemo)(() => Y.filter((e3) => K(e3, z2)), [z2]), ev = ex.findIndex((e3) => e3.id === eb.id);
    function ew(e3, t3) {
      var a3;
      let i2 = F.get(e3);
      i2 && (ey.current += 1, Z2(e3), el2({ page: e3, section: t3, key: ey.current }), em2(null), a3 = U.get(e3)?.id ?? "", Q2((e4) => e4.has(a3) ? e4 : new Set(e4).add(a3)), et2(false), eg(
        `${i2.title}${t3 ? `, ${i2.sections.find((e4) => e4.id === t3)?.title ?? ""}` : ""}`
      ), ee2 && requestAnimationFrame(
        () => document.getElementById(`${_2}-${e3}-title`)?.focus({ preventScroll: true })
      ));
    }
    let ej = (0, n.useRef)(null);
    function ek(e3) {
      if (e3 === k2) return;
      let a3 = document.activeElement;
      if (e3 && a3 instanceof HTMLElement && H2.current?.contains(a3)) {
        let e4 = a3.dataset.page ? U.get(a3.dataset.page)?.id : void 0;
        e4 ? H2.current.querySelector(`[data-group="${e4}"]`)?.focus() : a3.closest("[data-rail-hidden]") && M2.current?.focus();
      }
      T2(e3), eg(e3 ? "Sidebar collapsed" : "Sidebar expanded"), t2?.(e3);
    }
    function eT(e3) {
      et2(false), e3 && er2.current?.focus({ preventScroll: true });
    }
    (0, n.useLayoutEffect)(() => {
      let e3 = $2.current;
      if (!e3) return;
      let t3 = () => {
        let t4 = e3.clientWidth;
        C2(t4 <= 479), t4 > 479 && et2(false);
        let a4 = t4 >= 900;
        if (ej.current === a4) return;
        let i3 = null === ej.current;
        ej.current = a4, i3 && a4 || T2(!a4);
      };
      t3();
      let a3 = requestAnimationFrame(() => w2(false)), i2 = new ResizeObserver(t3);
      return i2.observe(e3), () => {
        i2.disconnect(), cancelAnimationFrame(a3);
      };
    }, []), b2 = (0, n.useEffectEvent)((e3) => {
      if ("[" !== e3.key || e3.repeat || e3.metaKey || e3.ctrlKey || e3.altKey || e3.defaultPrevented)
        return;
      let t3 = $2.current, a3 = e3.target instanceof HTMLElement ? e3.target : null;
      if (!t3 || a3 && (a3.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(a3.tagName) || a3.closest('[role="menu"], [role="dialog"]')))
        return;
      let i2 = t3.getBoundingClientRect();
      !i2.width || i2.bottom < 0 || i2.top > window.innerHeight || (e3.preventDefault(), (() => {
        R2 || ek(!k2);
      })());
    }), (0, n.useEffect)(() => {
      let e3 = (e4) => b2(e4);
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, []), (0, n.useEffect)(() => {
      if (!ea2) return;
      let e3 = requestAnimationFrame(() => {
        let e4 = en2.current;
        (e4?.querySelector('[aria-current="page"]') ?? e4?.querySelector("[data-nav-item]"))?.focus({ preventScroll: true });
      });
      return () => cancelAnimationFrame(e3);
    }, [ea2]);
    let eN = (0, n.useEffectEvent)((e3) => {
      if ("Escape" !== e3.key || e3.defaultPrevented) return;
      let t3 = e3.target instanceof HTMLElement ? e3.target : null, a3 = t3?.closest('[role="menu"], [role="dialog"]');
      a3 && a3 !== en2.current || (e3.preventDefault(), eT(true));
    });
    function eA(e3) {
      if (e3 === z2) return;
      if (B2(e3), K(eb, e3)) {
        em2(null), eg(`Showing v${e3}`);
        return;
      }
      let t3 = e_.pages.find((t4) => K(t4, e3)) ?? Y.find((t4) => K(t4, e3)) ?? Y[0], a3 = `${eb.title} isn't part of v${e3}, so you're on ${t3.title}.`;
      Z2(t3.id), el2(null), em2(a3), eg(`Showing v${e3}. ${a3}`);
    }
    (0, n.useEffect)(() => {
      if (!ea2) return;
      let e3 = (e4) => eN(e4);
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, [ea2]);
    let eS = (0, i.jsx)(es, {
      label: k2 ? "Expand sidebar" : "Collapse sidebar",
      shortcut: "[",
      side: E2 ? "right" : "bottom",
      children: (0, i.jsx)("button", {
        ref: M2,
        type: "button",
        className: D().railToggle,
        "aria-label": k2 ? "Expand sidebar" : "Collapse sidebar",
        "aria-expanded": !k2,
        "aria-keyshortcuts": "[",
        onClick: () => ek(!k2),
        children: (0, i.jsx)(eo, { collapsed: E2, reduce: !!j2 })
      })
    });
    return (0, i.jsx)(r.Kq, {
      delayDuration: 250,
      skipDelayDuration: 300,
      children: (0, i.jsxs)("section", {
        ref: $2,
        className: D().docs,
        "aria-label": "Halden API documentation",
        children: [
          (0, i.jsxs)("div", {
            className: D().frame,
            children: [
              (0, i.jsxs)(l.PY1.div, {
                ref: H2,
                className: D().sidebar,
                style: { width: P2 },
                "data-rail": E2 || void 0,
                children: [
                  (0, i.jsxs)(l.PY1.div, {
                    className: D().brand,
                    "data-rail-hidden": "",
                    inert: E2,
                    initial: false,
                    animate: { height: E2 ? 8 : 52 },
                    transition: j2 ? V : L.T.spring.smooth,
                    children: [
                      (0, i.jsxs)("span", {
                        className: D().wordmark,
                        children: [
                          "Halden ",
                          (0, i.jsx)("span", { children: "docs" })
                        ]
                      }),
                      (0, i.jsxs)("div", {
                        className: D().brandActions,
                        children: [
                          (0, i.jsx)("div", {
                            role: "group",
                            "aria-label": "Documentation version",
                            children: (0, i.jsx)(I.r, {
                              label: `v${z2}`,
                              items: W.map((e3) => ({
                                label: e3.label,
                                icon: e3.id === z2 ? (0, i.jsx)(N.A, {
                                  size: 15,
                                  strokeWidth: 1.75
                                }) : (0, i.jsx)("span", {
                                  className: D().menuSpacer
                                }),
                                onSelect: () => eA(e3.id)
                              }))
                            })
                          }),
                          (0, i.jsx)("button", {
                            ref: er2,
                            type: "button",
                            className: D().menuButton,
                            "aria-label": ee2 ? "Close documentation menu" : "Documentation menu",
                            "aria-expanded": ee2,
                            "aria-controls": `${_2}-panel`,
                            onClick: () => et2((e3) => !e3),
                            children: (0, i.jsx)(p.N, {
                              mode: "popLayout",
                              initial: false,
                              children: (0, i.jsx)(
                                l.PY1.span,
                                {
                                  className: D().menuIcon,
                                  initial: {
                                    opacity: 0,
                                    scale: 0.6,
                                    filter: G(L.T.blur.subtle)
                                  },
                                  animate: {
                                    opacity: 1,
                                    scale: 1,
                                    filter: G(0)
                                  },
                                  exit: {
                                    opacity: 0,
                                    scale: 0.6,
                                    filter: G(L.T.blur.subtle),
                                    transition: {
                                      duration: j2 ? 0 : L.T.duration.instant
                                    }
                                  },
                                  transition: j2 ? V : L.T.spring.snappy,
                                  children: ee2 ? (0, i.jsx)(A.A, {
                                    size: 18,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }) : (0, i.jsx)(S.A, {
                                    size: 18,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                },
                                ee2 ? "close" : "open"
                              )
                            })
                          })
                        ]
                      })
                    ]
                  }),
                  (0, i.jsx)(l.PY1.div, {
                    ref: en2,
                    id: `${_2}-panel`,
                    className: D().navPanel,
                    style: { x: ei2.x },
                    "data-open": ea2 || void 0,
                    inert: R2 && !ee2,
                    role: R2 ? "dialog" : void 0,
                    "aria-modal": ea2 || void 0,
                    "aria-label": R2 ? "Documentation menu" : void 0,
                    children: (0, i.jsx)(eu, {
                      id: _2,
                      version: z2,
                      activeId: eb.id,
                      expanded: X2,
                      rail: E2,
                      toggle: eS,
                      onExpand: () => ek(false),
                      onToggle: function(e3, t3) {
                        Q2((a3) => {
                          let i2 = new Set(a3);
                          return t3 ? i2.add(e3) : i2.delete(e3), i2;
                        });
                      },
                      onOpen: ew
                    })
                  })
                ]
              }),
              (0, i.jsx)(l.PY1.div, {
                className: D().scrim,
                style: { opacity: ei2.progress },
                "data-open": ea2 || void 0,
                "aria-hidden": "true",
                onClick: () => eT(true)
              }),
              (0, i.jsx)(ep, {
                id: _2,
                page: eb,
                group: e_,
                version: z2,
                fallback: ec2,
                prev: ex[ev - 1],
                next: -1 === ev ? void 0 : ex[ev + 1],
                jump: ed2,
                covered: ea2,
                onOpen: ew,
                onVersion: eA
              })
            ]
          }),
          (0, i.jsx)("p", {
            className: D().srOnly,
            role: "status",
            "aria-live": "polite",
            children: ef
          })
        ]
      })
    });
  }
  let em = eh;
}

__m(__module,__exports,__require);
}