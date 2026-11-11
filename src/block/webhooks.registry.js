/* webhooks (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(7337, function(__module,__exports,__require){
"use strict";
const __m = (e, a, s) => {
  "use strict";
  let t, i, n, l, r;
  s.r(a), s.d(a, { ArcDevtools: () => tl, default: () => tr });
  var o = s(95155);
  s(48886);
  var d = s(12115), c = s(43146), h = s(18310), u = s(57700), m = s(25354), p = s(49960), _ = s(2540), x = s(81499), v = s(72974), g = s(94774), j = s(88074), y = s(40557), b = s(2125), k = s(9383), f = s(36619), w = s(79267), N = s(57465), C = s(47603), T = s(78890), S = s(65342), A = s(91669), M = s(65377), $ = s(61618), I = s(98898), E = s(97918);
  let P = /* @__PURE__ */ new Date("2026-10-07T14:32:00Z");
  function D(e10) {
    let a10 = e10 >>> 0;
    return () => {
      let e11 = a10 = a10 + 1831565813 >>> 0;
      return e11 = Math.imul(e11 ^ e11 >>> 15, 1 | e11), (((e11 ^= e11 + Math.imul(e11 ^ e11 >>> 7, 61 | e11)) ^ e11 >>> 14) >>> 0) / 4294967296;
    };
  }
  let R = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function L(e10, a10 = Math.random) {
    let s10 = "";
    for (let t2 = 0; t2 < e10; t2++) s10 += R[Math.floor(a10() * R.length)];
    return s10;
  }
  let q = [
    {
      id: "owner",
      label: "Owner",
      detail: "Everything, including billing and deleting the project"
    },
    {
      id: "admin",
      label: "Admin",
      detail: "Keys, webhooks, domains and members"
    },
    {
      id: "developer",
      label: "Developer",
      detail: "Keys, webhooks and logs"
    },
    {
      id: "billing",
      label: "Billing",
      detail: "Plan, invoices and payment methods"
    },
    {
      id: "viewer",
      label: "Viewer",
      detail: "Read-only access to logs and usage"
    }
  ], W = (e10) => q.find((a10) => a10.id === e10)?.label ?? e10, z = {
    id: "olivia",
    name: "Olivia Bennett",
    first: "Olivia",
    email: "olivia@plume.so",
    photo: "media/people/olivia-bennett.svg",
    role: "owner",
    joined: "2025-11-04",
    lastActive: "2026-10-07T14:31:00Z"
  }, F = [
    z,
    {
      id: "daniel",
      name: "Daniel Kim",
      first: "Daniel",
      email: "daniel@plume.so",
      photo: "media/people/daniel-kim.svg",
      role: "admin",
      joined: "2025-11-04",
      lastActive: "2026-10-07T13:58:00Z"
    },
    {
      id: "nathan",
      name: "Nathan Cole",
      first: "Nathan",
      email: "nathan@plume.so",
      photo: "media/people/nathan-cole.svg",
      role: "admin",
      joined: "2025-12-12",
      lastActive: "2026-10-06T17:20:00Z"
    },
    {
      id: "marcus",
      name: "Marcus Johnson",
      first: "Marcus",
      email: "marcus@plume.so",
      photo: "media/people/marcus-johnson.svg",
      role: "developer",
      joined: "2026-02-03",
      lastActive: "2026-10-07T11:42:00Z"
    },
    {
      id: "mateo",
      name: "Mateo Alvarez",
      first: "Mateo",
      email: "mateo@plume.so",
      photo: "media/people/mateo-alvarez.svg",
      role: "developer",
      joined: "2026-04-21",
      lastActive: "2026-10-05T09:12:00Z"
    },
    {
      id: "chloe",
      name: "Chloe Nguyen",
      first: "Chloe",
      email: "chloe@plume.so",
      photo: "media/people/chloe-nguyen.svg",
      role: "viewer",
      joined: "2026-06-09",
      lastActive: "2026-10-03T15:47:00Z"
    },
    {
      id: "andre",
      name: "Andre Williams",
      first: "Andre",
      email: "andre@plume.so",
      photo: "media/people/andre-williams.svg",
      role: "billing",
      joined: "2026-01-15",
      lastActive: "2026-09-18T08:03:00Z"
    },
    {
      id: "inv-priya",
      name: "priya@plume.so",
      first: "Priya",
      email: "priya@plume.so",
      role: "developer",
      joined: "2026-10-06",
      lastActive: "2026-10-06T10:00:00Z",
      pending: true
    }
  ], O = (e10, a10 = F) => a10.find((a11) => a11.id === e10) ?? z, B = [
    {
      id: "plume-app",
      name: "Plume app",
      env: "Production",
      region: "us-east-1",
      created: "2025-11-04"
    },
    {
      id: "plume-staging",
      name: "Plume staging",
      env: "Staging",
      region: "us-east-1",
      created: "2025-11-06"
    },
    {
      id: "plume-marketing",
      name: "Marketing site",
      env: "Production",
      region: "eu-west-1",
      created: "2026-03-22"
    }
  ], U = [
    { value: "us-east-1", label: "US East, Virginia" },
    { value: "us-west-2", label: "US West, Oregon" },
    { value: "eu-west-1", label: "EU West, Ireland" },
    { value: "ap-southeast-1", label: "Asia Pacific, Singapore" }
  ], H = [
    {
      id: "email",
      label: "Email",
      unit: "emails",
      included: 5e5,
      overage: "$0.80 per 1,000",
      hue: 293
    },
    {
      id: "sms",
      label: "SMS",
      unit: "messages",
      included: 2e4,
      overage: "$0.0079 each",
      hue: 200
    },
    {
      id: "verify",
      label: "Verify",
      unit: "checks",
      included: 5e4,
      overage: "$0.05 each",
      hue: 72
    }
  ], V = [
    {
      id: "pro",
      name: "Pro",
      price: 20,
      detail: "For side projects and early launches",
      limits: ["50,000 emails", "2,000 SMS", "5,000 checks", "3 seats"]
    },
    {
      id: "scale",
      name: "Scale",
      price: 90,
      detail: "For products with real traffic",
      limits: ["500,000 emails", "20,000 SMS", "50,000 checks", "10 seats"]
    },
    {
      id: "business",
      name: "Business",
      price: 400,
      detail: "Dedicated IPs, SSO and a 99.99% SLA",
      limits: [
        "2.5M emails",
        "100,000 SMS",
        "250,000 checks",
        "Unlimited seats"
      ]
    }
  ], Y = "2026-09-18", K = "2026-10-17", Z = (() => {
    let e10 = D(91), a10 = [];
    for (let s10 = 0; s10 < 20; s10++) {
      let t2 = new Date(Date.parse(`${Y}T00:00:00Z`) + 864e5 * s10), i2 = t2.getUTCDay(), n2 = 0 === i2 || 6 === i2, l2 = 1 + 0.012 * s10, r2 = 19 === s10 ? 0.62 : 1;
      a10.push({
        date: t2.toISOString().slice(0, 10),
        email: Math.round((n2 ? 11400 : 17800) * l2 * (0.9 + 0.2 * e10()) * r2),
        sms: Math.round((n2 ? 420 : 690) * l2 * (0.86 + 0.28 * e10()) * r2),
        verify: Math.round((n2 ? 1150 : 1720) * l2 * (0.88 + 0.24 * e10()) * r2)
      });
    }
    return a10;
  })(), G = [
    {
      id: "INV-2026-0918",
      date: "2026-09-18",
      period: "Aug 18 to Sep 17",
      amount: 112.4,
      status: "paid",
      plan: "Scale"
    },
    {
      id: "INV-2026-0818",
      date: "2026-08-18",
      period: "Jul 18 to Aug 17",
      amount: 96.2,
      status: "paid",
      plan: "Scale"
    },
    {
      id: "INV-2026-0718",
      date: "2026-07-18",
      period: "Jun 18 to Jul 17",
      amount: 90,
      status: "paid",
      plan: "Scale"
    },
    {
      id: "INV-2026-0618",
      date: "2026-06-18",
      period: "May 18 to Jun 17",
      amount: 90,
      status: "paid",
      plan: "Scale"
    },
    {
      id: "INV-2026-0518",
      date: "2026-05-18",
      period: "Apr 18 to May 17",
      amount: 38.65,
      status: "paid",
      plan: "Pro"
    },
    {
      id: "INV-2026-0418",
      date: "2026-04-18",
      period: "Mar 18 to Apr 17",
      amount: 20,
      status: "paid",
      plan: "Pro"
    }
  ], Q = [
    {
      id: "emails-send",
      method: "POST",
      path: "/v1/emails",
      product: "email",
      label: "Send email",
      weight: 34,
      ms: 118,
      errors: 0.012
    },
    {
      id: "emails-batch",
      method: "POST",
      path: "/v1/emails/batch",
      product: "email",
      label: "Send batch",
      weight: 6,
      ms: 342,
      errors: 0.02
    },
    {
      id: "emails-get",
      method: "GET",
      path: "/v1/emails/{id}",
      product: "email",
      label: "Retrieve email",
      weight: 14,
      ms: 38,
      errors: 0.018
    },
    {
      id: "sms-send",
      method: "POST",
      path: "/v1/sms",
      product: "sms",
      label: "Send SMS",
      weight: 8,
      ms: 204,
      errors: 0.04
    },
    {
      id: "verify-start",
      method: "POST",
      path: "/v1/verify",
      product: "verify",
      label: "Start verification",
      weight: 10,
      ms: 186,
      errors: 0.025
    },
    {
      id: "verify-check",
      method: "POST",
      path: "/v1/verify/{id}/check",
      product: "verify",
      label: "Check code",
      weight: 9,
      ms: 44,
      errors: 0.09
    },
    {
      id: "contacts-upsert",
      method: "PATCH",
      path: "/v1/contacts/{id}",
      product: "email",
      label: "Update contact",
      weight: 7,
      ms: 61,
      errors: 0.01
    },
    {
      id: "domains-list",
      method: "GET",
      path: "/v1/domains",
      product: "email",
      label: "List domains",
      weight: 3,
      ms: 29,
      errors: 2e-3
    },
    {
      id: "contacts-delete",
      method: "DELETE",
      path: "/v1/contacts/{id}",
      product: "email",
      label: "Delete contact",
      weight: 2,
      ms: 52,
      errors: 0.03
    }
  ], J = [
    "maya.chen@gmail.com",
    "j.okafor@outlook.com",
    "lucas@northwind.io",
    "sara.lindqvist@proton.me",
    "tom.becker@icloud.com",
    "amira.haddad@gmail.com",
    "noah.patel@hey.com",
    "ines.moreau@orange.fr",
    "kenji.sato@gmail.com",
    "ola.nordmann@me.com"
  ], X = [
    "+14155550142",
    "+447700900318",
    "+4915123456789",
    "+33612345678",
    "+14085550199",
    "+61412345678"
  ], ee = [
    { subject: "Your sign-in link", tag: "auth" },
    { subject: "Receipt for your Plume Plus subscription", tag: "billing" },
    { subject: "Maya shared a board with you", tag: "collaboration" },
    { subject: "Reset your password", tag: "auth" },
    { subject: "Your weekly summary", tag: "digest" }
  ], ea = [
    "ferry-node/4.2.1 node/22.9.0",
    "ferry-python/2.8.0 python/3.12.6",
    "ferry-go/1.6.3 go1.23.2",
    "curl/8.7.1"
  ], es = ["iad1", "iad1", "iad1", "sfo1", "fra1", "cdg1", "sin1"], et = [
    "key-prod",
    "key-prod",
    "key-prod",
    "key-mobile",
    "key-mobile",
    "key-preview",
    "key-analytics"
  ];
  function ei(e10, a10) {
    return e10[Math.floor(a10() * e10.length)];
  }
  function en(e10, a10, s10) {
    let t2, i2 = (function(e11) {
      let a11 = Q.reduce((e12, a12) => e12 + a12.weight, 0), s11 = e11() * a11;
      for (let e12 of Q) if ((s11 -= e12.weight) <= 0) return e12;
      return Q[0];
    })(e10), n2 = e10() < i2.errors, l2 = n2 && 0.12 > e10(), r2 = s10 ?? (l2 ? ei([500, 503], e10) : n2 ? ei(
      "verify-check" === i2.id ? [400, 404] : [401, 422, 422, 429, 404],
      e10
    ) : "POST" === i2.method && "verify-check" !== i2.id ? 202 : 200);
    "DELETE" === i2.method && 200 === r2 && (r2 = 204);
    let o2 = 0.05 > e10() ? 2.6 + 2 * e10() : 1, d2 = Math.max(
      4,
      Math.round(
        i2.ms * (0.55 + 0.9 * e10()) * o2 * (r2 >= 500 ? 6 : r2 >= 400 ? 0.35 : 1)
      )
    ), c2 = `req_${L(20, e10)}`, h2 = (a11) => `${a11}_${L(16, e10)}`, u2 = ei(J, e10), m2 = ei(ee, e10), p2 = i2.path, _2 = null;
    switch (i2.id) {
      case "emails-send":
        _2 = {
          from: "Plume <hello@plume.so>",
          to: [u2],
          subject: m2.subject,
          template: {
            id: `tmpl_${m2.tag}`,
            variables: {
              first_name: u2.split(/[.@]/)[0].replace(/^\w/, (e11) => e11.toUpperCase())
            }
          },
          tags: [{ name: "category", value: m2.tag }]
        }, t2 = {
          id: h2("em"),
          object: "email",
          status: "queued",
          created_at: new Date(a10).toISOString()
        };
        break;
      case "emails-batch": {
        let a11 = 20 + Math.floor(80 * e10());
        _2 = {
          emails: [
            {
              from: "Plume <digest@plume.so>",
              to: [u2],
              subject: "Your weekly summary"
            },
            {
              from: "Plume <digest@plume.so>",
              to: [ei(J, e10)],
              subject: "Your weekly summary"
            }
          ],
          count: a11
        }, t2 = {
          object: "list",
          data: [{ id: h2("em") }, { id: h2("em") }],
          accepted: a11
        };
        break;
      }
      case "emails-get": {
        let s11 = h2("em");
        p2 = `/v1/emails/${s11}`, t2 = {
          id: s11,
          object: "email",
          to: [u2],
          subject: m2.subject,
          status: ei(
            ["delivered", "delivered", "delivered", "opened", "bounced"],
            e10
          ),
          last_event_at: new Date(a10 - 24e5).toISOString()
        };
        break;
      }
      case "sms-send":
        _2 = {
          from: "Plume",
          to: ei(X, e10),
          body: `Your Plume code is ${1e5 + Math.floor(899999 * e10())}. It expires in 10 minutes.`
        }, t2 = {
          id: h2("sms"),
          object: "sms",
          status: "queued",
          segments: 1,
          price: { amount: "0.0079", currency: "usd" }
        };
        break;
      case "verify-start":
        _2 = {
          to: ei(0.6 > e10() ? J : X, e10),
          channel: 0.6 > e10() ? "email" : "sms",
          locale: "en"
        }, t2 = {
          id: h2("vrf"),
          object: "verification",
          status: "pending",
          expires_at: new Date(a10 + 6e5).toISOString()
        };
        break;
      case "verify-check": {
        let a11 = h2("vrf");
        p2 = `/v1/verify/${a11}/check`, _2 = { code: String(1e5 + Math.floor(899999 * e10())) }, t2 = { id: a11, object: "verification", status: "approved" };
        break;
      }
      case "contacts-upsert": {
        let s11 = h2("ct");
        p2 = `/v1/contacts/${s11}`, _2 = {
          email: u2,
          unsubscribed: false,
          properties: {
            plan: ei(["free", "plus", "team"], e10),
            signup_source: ei(["ios", "web", "android"], e10)
          }
        }, t2 = {
          id: s11,
          object: "contact",
          email: u2,
          updated_at: new Date(a10).toISOString()
        };
        break;
      }
      case "domains-list":
        t2 = {
          object: "list",
          data: [
            {
              id: "dom_8Qx2LkVp",
              name: "plume.so",
              status: "verified",
              region: "us-east-1"
            },
            {
              id: "dom_3Fh9TmWa",
              name: "mail.plume.so",
              status: "verified",
              region: "us-east-1"
            }
          ]
        };
        break;
      case "contacts-delete": {
        let e11 = h2("ct");
        p2 = `/v1/contacts/${e11}`, t2 = 204 === r2 ? null : void 0;
      }
    }
    r2 >= 400 && (t2 = {
      error: {
        ...{
          400: {
            type: "invalid_code",
            message: "The code does not match this verification. 2 attempts left."
          },
          401: {
            type: "authentication_error",
            message: "The API key is missing or was revoked."
          },
          404: {
            type: "not_found",
            message: "No resource with this id exists in the project."
          },
          422: {
            type: "validation_error",
            message: "The `to` field must contain a valid email address.",
            param: "to"
          },
          429: {
            type: "rate_limit_exceeded",
            message: "Too many requests. The limit is 50 per second for this key."
          },
          500: {
            type: "internal_error",
            message: "Something went wrong on our side. The request is safe to retry."
          },
          503: {
            type: "upstream_unavailable",
            message: "The carrier did not respond in time. Retry with the same idempotency key."
          }
        }[r2],
        request_id: c2
      }
    });
    let x2 = 1 + Math.round(3 * e10()), v2 = 422 === r2 || 400 === r2 ? Math.max(1, d2 - x2 - 1) : 1 + Math.round(2 * e10()), g2 = [{ label: "Authenticate", ms: x2 }];
    if (401 !== r2 && (g2.push({ label: "Validate", ms: Math.min(v2, Math.max(1, d2 - x2)) }), r2 < 400 || r2 >= 500 || 404 === r2)) {
      let e11 = Math.max(1, d2 - x2 - v2), a11 = "POST" === i2.method && r2 < 500 ? Math.round(0.55 * e11) : 0;
      g2.push({
        label: "GET" === i2.method ? "Query" : "Handle",
        ms: Math.max(1, e11 - a11)
      }), a11 && g2.push({
        label: "sms" === i2.product ? "Carrier handoff" : "Queue",
        ms: a11
      });
    }
    return {
      id: c2,
      at: a10,
      endpoint: i2.id,
      method: i2.method,
      path: p2,
      status: r2,
      ms: d2,
      key: 401 === r2 ? "none" : ei(et, e10),
      ip: `${ei(["34.204", "44.211", "18.232", "52.86", "3.120"], e10)}.${Math.floor(255 * e10())}.${Math.floor(255 * e10())}`,
      region: ei(es, e10),
      agent: ei(ea, e10),
      request: _2,
      response: void 0 === t2 ? null : t2,
      timing: g2
    };
  }
  let el = (() => {
    let e10 = D(7), a10 = [], s10 = P.getTime() - 1800;
    for (let t2 = 0; t2 < 240; t2++)
      a10.push(en(e10, s10)), s10 -= Math.round(
        t2 < 120 ? 4e3 + 14e3 * e10() : t2 < 190 ? 6e4 + 18e4 * e10() : 6e5 + 12e5 * e10()
      );
    return a10;
  })(), er = new Intl.DateTimeFormat("en-US", { hour: "numeric", timeZone: "UTC" }), eo = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), ed = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), ec = [
    { id: "24h", label: "24h", long: "Last 24 hours" },
    { id: "7d", label: "7d", long: "Last 7 days" },
    { id: "30d", label: "30d", long: "Last 30 days" }
  ], eh = (() => {
    let e10 = D(23), a10 = [], s10 = 36e5 * Math.floor(P.getTime() / 36e5);
    for (let t3 = 23; t3 >= 0; t3--) {
      let i2 = s10 - 36e5 * t3, n2 = new Date(i2).getUTCHours(), l2 = Math.round(
        4100 * (Math.max(
          0.2,
          0.55 + 0.45 * Math.sin((n2 - 9) / 24 * Math.PI * 2) * 0.9 + 0.25 * Math.sin((n2 - 15) / 12 * Math.PI)
        ) * (0.92 + 0.16 * e10()))
      );
      a10.push({
        key: new Date(i2).toISOString(),
        label: `${ed.format(i2)}, ${er.format(i2)}`,
        axisLabel: t3 % 6 == 0 ? er.format(i2) : void 0,
        requests: l2,
        previous: Math.round(l2 * (0.82 + 0.14 * e10())),
        errors: Math.round(l2 * (0.011 + 0.03 * (3 === n2) + 6e-3 * e10())),
        p95: Math.round(212 + 60 * e10() + 180 * (3 === n2))
      });
    }
    let t2 = (e11, a11) => {
      let s11 = D(a11), t3 = [], i2 = Date.UTC(P.getUTCFullYear(), P.getUTCMonth(), P.getUTCDate());
      for (let a12 = e11 - 1; a12 >= 0; a12--) {
        let n2 = i2 - 864e5 * a12, l2 = new Date(n2).getUTCDay(), r2 = Math.round(
          (0 === l2 || 6 === l2 ? 64e3 : 92e3) * (1 + (e11 - a12) * 6e-3) * (0.93 + 0.14 * s11())
        );
        t3.push({
          key: new Date(n2).toISOString().slice(0, 10),
          label: ed.format(n2),
          axisLabel: e11 <= 7 || a12 % 7 == 0 ? eo.format(n2) : void 0,
          requests: r2,
          previous: Math.round(r2 * (0.84 + 0.12 * s11())),
          errors: Math.round(r2 * (0.012 + 5e-3 * s11())),
          p95: Math.round(224 + 44 * s11())
        });
      }
      return t3;
    };
    return { "24h": a10, "7d": t2(7, 31), "30d": t2(30, 37) };
  })(), eu = (t = D(55), i = eh["24h"].reduce((e10, a10) => e10 + a10.requests, 0), n = Q.reduce((e10, a10) => e10 + a10.weight, 0), Q.map((e10) => {
    let a10 = Array.from({ length: 24 }, (a11, s11) => {
      let i2 = e10.errors * (0.6 + 0.8 * t());
      return "sms-send" === e10.id && (13 === s11 || 14 === s11) ? 0.11 + 0.05 * t() : "verify-check" === e10.id && s11 > 20 ? 0.07 + 0.03 * t() : i2;
    }), s10 = a10.reduce((e11, a11) => e11 + a11, 0) / a10.length;
    return {
      endpoint: e10,
      requests: Math.round(i * e10.weight / n),
      errorRate: s10,
      p95: Math.round(e10.ms * (1.7 + 0.4 * t())),
      hours: a10
    };
  }).sort((e10, a10) => a10.requests - e10.requests)), em = [
    {
      id: "e1",
      kind: "webhook",
      title: "Endpoint failing",
      detail: "kxqzv.supabase.co returned 503 on 9 of the last 20 deliveries",
      at: "2026-10-07T14:06:00Z",
      tone: "danger"
    },
    {
      id: "e2",
      kind: "deploy",
      title: "plume-api deployed",
      detail: "main at 4f2a91c, ferry-node 4.2.1",
      at: "2026-10-07T12:48:00Z",
      actor: "marcus",
      tone: "success"
    },
    {
      id: "e3",
      kind: "key",
      title: "Key rolled",
      detail: "Production server, the old secret works for 24 hours",
      at: "2026-10-07T09:15:00Z",
      actor: "daniel"
    },
    {
      id: "e4",
      kind: "incident",
      title: "SMS delays in Germany",
      detail: "Carrier latency up to 40s for +49 numbers, resolved",
      at: "2026-10-07T01:52:00Z",
      tone: "warning"
    },
    {
      id: "e5",
      kind: "member",
      title: "Priya invited",
      detail: "As developer, invitation expires in 6 days",
      at: "2026-10-06T10:00:00Z",
      actor: "olivia"
    },
    {
      id: "e6",
      kind: "domain",
      title: "mail.plume.so verified",
      detail: "SPF, DKIM and DMARC records found",
      at: "2026-10-05T16:21:00Z",
      actor: "nathan",
      tone: "success"
    }
  ], ep = [
    {
      id: "full",
      label: "Full access",
      detail: "Create, read, update and delete every resource"
    },
    {
      id: "sending",
      label: "Sending access",
      detail: "Send email, SMS and verifications only"
    },
    {
      id: "read",
      label: "Read only",
      detail: "Read emails, logs, contacts and domains"
    }
  ], e_ = (e10) => ep.find((a10) => a10.id === e10)?.label ?? e10, ex = [
    {
      id: "key-prod",
      name: "Production server",
      prefix: "fy_live",
      last4: "a91f",
      permission: "full",
      createdBy: "daniel",
      created: "2026-10-07T09:15:00Z",
      lastUsed: "2026-10-07T14:31:58Z",
      requests: 61204,
      env: "live"
    },
    {
      id: "key-mobile",
      name: "Mobile backend",
      prefix: "fy_live",
      last4: "7c2e",
      permission: "sending",
      createdBy: "marcus",
      created: "2026-04-22T13:40:00Z",
      lastUsed: "2026-10-07T14:31:44Z",
      requests: 18930,
      env: "live"
    },
    {
      id: "key-preview",
      name: "Vercel previews",
      prefix: "fy_test",
      last4: "0d4b",
      permission: "sending",
      createdBy: "marcus",
      created: "2026-06-30T10:02:00Z",
      lastUsed: "2026-10-07T12:51:00Z",
      requests: 2412,
      env: "test"
    },
    {
      id: "key-analytics",
      name: "Analytics export",
      prefix: "fy_live",
      last4: "e83a",
      permission: "read",
      createdBy: "chloe",
      created: "2026-07-14T08:30:00Z",
      lastUsed: "2026-10-07T06:00:00Z",
      requests: 744,
      env: "live"
    },
    {
      id: "key-cron",
      name: "Nightly digest cron",
      prefix: "fy_live",
      last4: "51b9",
      permission: "sending",
      createdBy: "nathan",
      created: "2026-01-09T17:12:00Z",
      lastUsed: "2026-08-27T02:00:00Z",
      requests: 0,
      env: "live"
    },
    {
      id: "key-old",
      name: "Heroku worker",
      prefix: "fy_live",
      last4: "c06d",
      permission: "full",
      createdBy: "olivia",
      created: "2025-11-04T11:00:00Z",
      lastUsed: "2026-05-02T19:33:00Z",
      requests: 0,
      env: "live",
      revoked: "2026-05-03T09:10:00Z"
    }
  ], ev = [
    {
      id: "email",
      label: "Email",
      events: [
        {
          id: "email.sent",
          detail: "Ferry accepted the message for delivery"
        },
        {
          id: "email.delivered",
          detail: "The receiving server accepted the message"
        },
        { id: "email.delivery_delayed", detail: "Delivery is being retried" },
        {
          id: "email.bounced",
          detail: "The message was rejected permanently"
        },
        { id: "email.complained", detail: "The recipient marked it as spam" },
        { id: "email.opened", detail: "The recipient opened the message" },
        {
          id: "email.clicked",
          detail: "The recipient clicked a tracked link"
        }
      ]
    },
    {
      id: "sms",
      label: "SMS",
      events: [
        { id: "sms.sent", detail: "Handed to the carrier" },
        { id: "sms.delivered", detail: "The carrier confirmed delivery" },
        { id: "sms.failed", detail: "The carrier rejected the message" }
      ]
    },
    {
      id: "verify",
      label: "Verify",
      events: [
        { id: "verify.started", detail: "A code was sent" },
        { id: "verify.approved", detail: "The correct code was entered" },
        {
          id: "verify.expired",
          detail: "The code expired before it was used"
        }
      ]
    },
    {
      id: "domain",
      label: "Domains",
      events: [
        { id: "domain.verified", detail: "DNS records were found" },
        { id: "domain.failed", detail: "Verification failed after 72 hours" }
      ]
    }
  ], eg = ev.flatMap((e10) => e10.events.map((e11) => e11.id));
  function ej(e10, a10, s10, t2) {
    let i2 = D(e10), n2 = [], l2 = P.getTime() - 4e4;
    for (let e11 = 0; e11 < t2; e11++) {
      let e12 = ei(a10, i2), t3 = i2() < s10, r2 = t3 ? ei([503, 503, 500, 408], i2) : 200, o2 = e12.split(".")[0], d2 = `${"email" === o2 ? "em" : "sms" === o2 ? "sms" : "verify" === o2 ? "vrf" : "dom"}_${L(16, i2)}`;
      n2.push({
        id: `msg_${L(18, i2)}`,
        event: e12,
        status: r2,
        attempts: t3 ? 1 + Math.floor(4 * i2()) : 0.06 > i2() ? 2 : 1,
        ms: t3 && 408 === r2 ? 15e3 : Math.round((t3 ? 900 : 90) + i2() * (t3 ? 3e3 : 260)),
        at: new Date(l2).toISOString(),
        payload: {
          type: e12,
          created_at: new Date(l2).toISOString(),
          data: "email" === o2 ? { email_id: d2, to: [ei(J, i2)], subject: ei(ee, i2).subject } : "sms" === o2 ? { sms_id: d2, to: ei(X, i2) } : "verify" === o2 ? { verification_id: d2, channel: "sms" } : { domain_id: d2, name: "mail.plume.so" }
        },
        response: t3 ? 408 === r2 ? "Timed out after 15s" : 503 === r2 ? "Service Unavailable: function cold start limit reached" : "Internal Server Error" : '{"received":true}'
      }), l2 -= Math.round(6e4 + 9e5 * i2());
    }
    return n2;
  }
  let ey = [
    {
      id: "wh-api",
      url: "https://api.plume.so/webhooks/ferry",
      description: "Delivery state for the activity feed",
      events: [
        "email.delivered",
        "email.bounced",
        "email.complained",
        "sms.delivered",
        "sms.failed"
      ],
      enabled: true,
      secret: `whsec_${L(32, D(3))}`,
      created: "2025-11-08T10:00:00Z",
      deliveries: ej(
        101,
        [
          "email.delivered",
          "email.delivered",
          "email.delivered",
          "email.bounced",
          "sms.delivered",
          "email.complained"
        ],
        0.01,
        18
      )
    },
    {
      id: "wh-supabase",
      url: "https://kxqzv.supabase.co/functions/v1/ferry-events",
      description: "Sync bounces to the users table",
      events: ["email.bounced", "email.complained", "verify.approved"],
      enabled: true,
      secret: `whsec_${L(32, D(4))}`,
      created: "2026-08-02T15:20:00Z",
      deliveries: ej(
        202,
        [
          "email.bounced",
          "verify.approved",
          "verify.approved",
          "email.complained"
        ],
        0.45,
        16
      ),
      logo: "supabase"
    },
    {
      id: "wh-slack",
      url: "https://hooks.slack.com/services/T04P8LQ2V/B07H1C9KX/mzQ4",
      description: "Alerts in #deliverability",
      events: ["email.complained", "domain.failed", "sms.failed"],
      enabled: false,
      secret: `whsec_${L(32, D(5))}`,
      created: "2026-03-11T09:42:00Z",
      deliveries: ej(303, ["email.complained", "sms.failed"], 0, 6),
      logo: "slack"
    }
  ], eb = "fy_live_\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022a91f";
  var ek = s(76716);
  function ef({ size: e10 = 20, color: a10 = "#F0603E", ...s10 }) {
    return (0, o.jsx)("svg", {
      width: e10,
      height: e10,
      viewBox: "0 0 32 32",
      "aria-hidden": "true",
      ...s10,
      children: (0, o.jsx)("path", {
        d: "M27 5H18C10.8 5 5 10.8 5 18v9h9c7.2 0 13-5.8 13-13V5z",
        fill: a10
      })
    });
  }
  let ew = (0, d.createContext)(null);
  function eN() {
    let e10 = (0, d.useContext)(ew);
    if (!e10) throw Error("Ferry views must render inside ArcDevtools");
    return e10;
  }
  var eC = s(7770), eT = s(57793), eS = s(92171), eA = s(80642), eM = s(64577), e$ = s(35484), eI = s(64962), eE = s(9005), eP = s(96304), eD = s(76721), eR = s(92218), eL = s(24376), eq = s(36690), eW = s(89318), ez = s.n(eW);
  let eF = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), eO = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC"
  });
  let eB = (e10) => new Date(e10.length <= 10 ? `${e10}T00:00:00Z` : e10), eU = (e10) => eF.format(eB(e10)), eH = (e10) => eO.format(eB(e10));
  function eV(e10, a10 = P.getTime()) {
    let s10 = "number" == typeof e10 ? e10 : eB(e10).getTime(), t2 = Math.max(0, Math.round((a10 - s10) / 1e3));
    if (t2 < 45) return "Just now";
    let i2 = Math.round(t2 / 60);
    if (i2 < 60) return `${i2}m ago`;
    let n2 = Math.round(i2 / 60);
    if (n2 < 24) return `${n2}h ago`;
    let l2 = Math.round(n2 / 24);
    return 1 === l2 ? "Yesterday" : l2 < 7 ? `${l2} days ago` : eU(new Date(s10).toISOString());
  }
  function eY(e10) {
    let a10 = new Date(e10), s10 = (e11, a11 = 2) => String(e11).padStart(a11, "0");
    return `${s10(a10.getUTCHours())}:${s10(a10.getUTCMinutes())}:${s10(a10.getUTCSeconds())}.${s10(a10.getUTCMilliseconds(), 3)}`;
  }
  let eK = (e10) => Math.round(e10).toLocaleString("en-US");
  function eZ(e10) {
    return Math.abs(e10) >= 1e6 ? `${(e10 / 1e6).toFixed(e10 >= 1e7 ? 1 : 2).replace(/\.?0+$/, "")}M` : Math.abs(e10) >= 1e4 ? `${Math.round(e10 / 1e3)}k` : Math.abs(e10) >= 1e3 ? `${(e10 / 1e3).toFixed(1).replace(/\.0$/, "")}k` : String(Math.round(e10));
  }
  let eG = (e10) => `$${e10.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, eQ = (e10, a10 = 2) => `${(100 * e10).toFixed(a10)}%`, eJ = (e10) => e10 >= 1e3 ? `${(e10 / 1e3).toFixed(e10 >= 1e4 ? 0 : 2)}s` : `${Math.round(e10)}ms`;
  function eX({ name: e10, photo: a10, size: s10 = 20, className: t2 }) {
    return (0, o.jsx)(eR.e, {
      name: e10,
      src: a10,
      size: "sm",
      className: `${ez().face} ${t2 ?? ""}`,
      style: {
        width: s10,
        height: s10,
        fontSize: Math.max(8, Math.round(0.42 * s10)),
        "--face-hue": (function(e11) {
          let a11 = 0;
          for (let s11 of e11) a11 = (31 * a11 + s11.charCodeAt(0)) % 360;
          return a11;
        })(e10)
      }
    });
  }
  function e0({ logo: e10, size: a10 = 20 }) {
    return (0, o.jsx)("span", {
      className: ez().brandTile,
      style: {
        width: a10,
        height: a10,
        borderRadius: Math.max(4, Math.round(0.26 * a10))
      },
      "aria-hidden": "true",
      children: (0, o.jsx)("img", {
        src: `block-logos/${e10}`,
        alt: "",
        width: Math.round(0.62 * a10),
        height: Math.round(0.62 * a10)
      })
    });
  }
  function e1({ method: e10 }) {
    return (0, o.jsx)("span", {
      className: ez().method,
      "data-method": e10,
      children: e10
    });
  }
  function e2({ status: e10 }) {
    return (0, o.jsx)("span", {
      className: ez().status,
      "data-tone": e10 >= 500 ? "danger" : e10 >= 400 ? "warning" : "success",
      children: e10
    });
  }
  function e5({ tone: e10 = "neutral", dot: a10, children: s10 }) {
    return (0, o.jsxs)("span", {
      className: ez().tag,
      "data-tone": e10,
      children: [a10 ? (0, o.jsx)("i", { "aria-hidden": "true" }) : null, s10]
    });
  }
  function e4({ value: e10, format: a10 = eK, className: s10 }) {
    let t2 = (0, d.useRef)(null), i2 = (0, d.useRef)(e10), n2 = (0, h.I)();
    return (0, d.useEffect)(() => {
      let s11 = t2.current;
      if (!s11) return;
      if (n2 || i2.current === e10) {
        i2.current = e10, s11.textContent = a10(e10);
        return;
      }
      let l2 = (0, eS.i)(i2.current, e10, {
        duration: eC.T.duration.considered,
        ease: [...eC.T.ease.standard],
        onUpdate: (e11) => {
          i2.current = e11, s11.textContent = a10(e11);
        }
      });
      return () => l2.stop();
    }, [e10, a10, n2]), (0, o.jsx)("span", {
      ref: t2,
      className: `${ez().count} ${s10 ?? ""}`,
      children: a10(e10)
    });
  }
  function e6({ value: e10, max: a10, hue: s10, label: t2 }) {
    let i2 = (0, h.I)(), n2 = Math.min(1, e10 / a10);
    return (0, o.jsx)("span", {
      className: ez().meter,
      role: "meter",
      "aria-label": t2,
      "aria-valuenow": Math.round(e10),
      "aria-valuemin": 0,
      "aria-valuemax": a10,
      "data-tone": e10 > a10 ? "danger" : e10 / a10 > 0.8 ? "warning" : void 0,
      style: void 0 === s10 ? void 0 : { "--meter-hue": s10 },
      children: (0, o.jsx)(m.PY1.span, {
        className: ez().meterFill,
        initial: false,
        animate: { scaleX: n2 },
        transition: i2 ? { duration: 0 } : eC.T.spring.smooth
      })
    });
  }
  function e7() {
    let e10 = (0, h.I)(), a10 = (0, d.useId)(), [s10, t2] = (0, d.useState)(false);
    (0, d.useEffect)(() => {
      if (!s10) return;
      let e11 = window.setTimeout(() => t2(false), 700);
      return () => window.clearTimeout(e11);
    }, [s10]);
    let i2 = () => t2(true);
    return {
      group: a10,
      transition: s10 && !e10 ? eC.T.spring.morph : { duration: 0 },
      barProps: { onPointerDown: i2, onKeyDown: i2 }
    };
  }
  function e3({
    items: e10,
    value: a10,
    onChange: s10,
    label: t2,
    size: i2 = "md",
    className: n2
  }) {
    let l2 = e7();
    return (0, o.jsx)(u.o, {
      id: l2.group,
      children: (0, o.jsx)("div", {
        className: `${ez().tabs} ${n2 ?? ""}`,
        "data-size": i2,
        role: "tablist",
        "aria-label": t2,
        ...l2.barProps,
        children: e10.map((e11) => {
          let t3 = e11.id === a10;
          return (0, o.jsxs)(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": t3,
              className: ez().tab,
              onClick: () => s10(e11.id),
              children: [
                t3 ? (0, o.jsx)(m.PY1.span, {
                  layoutId: "tab-line",
                  className: ez().tabLine,
                  transition: l2.transition
                }) : null,
                e11.icon,
                (0, o.jsx)("span", { children: e11.label }),
                void 0 !== e11.count ? (0, o.jsx)("span", {
                  className: ez().tabCount,
                  children: e11.count
                }) : null
              ]
            },
            e11.id
          );
        })
      })
    });
  }
  function e9({ items: e10, value: a10, onChange: s10, label: t2 }) {
    let i2 = e7();
    return (0, o.jsx)(u.o, {
      id: i2.group,
      children: (0, o.jsx)("div", {
        className: ez().segmented,
        role: "radiogroup",
        "aria-label": t2,
        ...i2.barProps,
        children: e10.map((e11) => {
          let t3 = e11.id === a10;
          return (0, o.jsxs)(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": t3,
              className: ez().segment,
              onClick: () => s10(e11.id),
              children: [
                t3 ? (0, o.jsx)(m.PY1.span, {
                  layoutId: "segment",
                  className: ez().segmentPill,
                  transition: i2.transition
                }) : null,
                (0, o.jsx)("span", { children: e11.label })
              ]
            },
            e11.id
          );
        })
      })
    });
  }
  function e8({
    trigger: e10,
    options: a10,
    onSelect: s10,
    label: t2,
    align: i2 = "start",
    width: n2,
    side: l2,
    keepOpen: r2
  }) {
    let { brand: d2 } = eN();
    return (0, o.jsxs)(eT.bL, {
      modal: false,
      children: [
        (0, o.jsx)(eT.l9, {
          asChild: true,
          onPointerDown: (e11) => e11.stopPropagation(),
          onClick: (e11) => e11.stopPropagation(),
          children: e10
        }),
        (0, o.jsx)(eT.ZL, {
          children: (0, o.jsxs)(eT.UC, {
            className: `${d2} ${ez().menu}`,
            align: i2,
            side: l2,
            sideOffset: 6,
            collisionPadding: 12,
            style: n2 ? { minWidth: n2 } : void 0,
            onClick: (e11) => e11.stopPropagation(),
            onPointerDown: (e11) => e11.stopPropagation(),
            children: [
              t2 ? (0, o.jsx)(eT.JU, { className: ez().menuLabel, children: t2 }) : null,
              a10.map(
                (e11, a11) => "separator" === e11 ? (0, o.jsx)(
                  eT.wv,
                  { className: ez().menuSeparator },
                  `sep-${a11}`
                ) : (0, o.jsxs)(
                  eT.q7,
                  {
                    className: ez().menuItem,
                    "data-danger": e11.danger ? "" : void 0,
                    onSelect: (a12) => {
                      r2 && a12.preventDefault(), s10(e11.id);
                    },
                    children: [
                      e11.icon ? (0, o.jsx)("span", {
                        className: ez().menuIcon,
                        children: e11.icon
                      }) : null,
                      (0, o.jsx)("span", {
                        className: ez().menuText,
                        children: e11.label
                      }),
                      void 0 !== e11.hint ? (0, o.jsx)("span", {
                        className: ez().menuHint,
                        children: e11.hint
                      }) : null,
                      e11.keys ? (0, o.jsx)(aa, { keys: e11.keys }) : null,
                      r2 ? (0, o.jsx)("span", {
                        className: ez().menuCheckSlot,
                        children: e11.checked ? (0, o.jsx)(eM.A, {
                          size: 14,
                          strokeWidth: 2,
                          className: ez().menuCheck,
                          "aria-hidden": true
                        }) : null
                      }) : e11.checked ? (0, o.jsx)(eM.A, {
                        size: 14,
                        strokeWidth: 2,
                        className: ez().menuCheck,
                        "aria-hidden": true
                      }) : null
                    ]
                  },
                  e11.id
                )
              )
            ]
          })
        })
      ]
    });
  }
  function ae({ toast: e10, onDismiss: a10 }) {
    let s10 = (0, h.I)(), [t2, i2] = (0, d.useState)(false);
    return (0, d.useEffect)(() => {
      if (!e10 || t2) return;
      let s11 = window.setTimeout(a10, e10.undo ? 6e3 : 3800);
      return () => window.clearTimeout(s11);
    }, [e10, t2, a10]), (0, o.jsx)("div", {
      className: ez().toastRegion,
      role: "status",
      "aria-live": "polite",
      children: (0, o.jsx)(eA.N, {
        initial: false,
        mode: "popLayout",
        children: e10 ? (0, o.jsxs)(
          m.PY1.div,
          {
            className: ez().toast,
            onPointerEnter: () => i2(true),
            onPointerLeave: () => i2(false),
            initial: s10 ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.98 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: s10 ? { opacity: 0, transition: { duration: 0 } } : {
              opacity: 0,
              y: 6,
              scale: 0.98,
              transition: { duration: eC.T.duration.fast }
            },
            transition: s10 ? { duration: 0 } : eC.T.spring.smooth,
            children: [
              "danger" === e10.tone ? (0, o.jsx)(e$.A, {
                size: 14,
                strokeWidth: 1.75,
                className: ez().toastIcon,
                "data-tone": "danger",
                "aria-hidden": true
              }) : "neutral" === e10.tone ? (0, o.jsx)("span", {
                className: ez().toastDot,
                "aria-hidden": "true"
              }) : (0, o.jsx)(eI.A, {
                size: 14,
                strokeWidth: 1.75,
                className: ez().toastIcon,
                "aria-hidden": true
              }),
              (0, o.jsx)("span", {
                className: ez().toastTitle,
                children: e10.title
              }),
              e10.description ? (0, o.jsx)("span", {
                className: ez().toastDetail,
                children: e10.description
              }) : null,
              e10.undo ? (0, o.jsx)("button", {
                type: "button",
                className: ez().toastAction,
                onClick: () => {
                  e10.undo?.(), a10();
                },
                children: "Undo"
              }) : null,
              (0, o.jsx)("button", {
                type: "button",
                className: ez().toastClose,
                "aria-label": "Dismiss",
                onClick: a10,
                children: (0, o.jsx)(eE.A, {
                  size: 12,
                  strokeWidth: 1.75,
                  "aria-hidden": true
                })
              })
            ]
          },
          e10.id
        ) : null
      })
    });
  }
  function aa({ keys: e10 }) {
    return (0, o.jsx)("span", {
      className: ez().keys,
      children: e10.map((e11) => (0, o.jsx)("kbd", { children: e11 }, e11))
    });
  }
  function as({ label: e10, keys: a10, children: s10, side: t2 }) {
    return (0, o.jsx)(eq.m, {
      side: t2,
      content: a10 ? (0, o.jsxs)("span", {
        className: ez().tip,
        children: [e10, (0, o.jsx)(aa, { keys: a10 })]
      }) : e10,
      children: s10
    });
  }
  let at = (0, d.forwardRef)(function({ label: e10, className: a10, children: s10, ...t2 }, i2) {
    return (0, o.jsx)("button", {
      ref: i2,
      type: "button",
      "aria-label": e10,
      className: `${ez().iconButton} ${a10 ?? ""}`,
      ...t2,
      children: s10
    });
  }), ai = (0, d.forwardRef)(function({
    variant: e10 = "secondary",
    icon: a10,
    size: s10 = "md",
    className: t2,
    children: i2,
    ...n2
  }, l2) {
    return (0, o.jsxs)("button", {
      ref: l2,
      type: "button",
      className: `${ez().button} ${t2 ?? ""}`,
      "data-variant": e10,
      "data-size": s10,
      ...n2,
      children: [
        a10,
        i2 ? (0, o.jsx)("span", { className: ez().buttonText, children: i2 }) : null
      ]
    });
  });
  function an({ crumbs: e10, actions: a10 }) {
    let { openNav: s10 } = eN();
    return (0, o.jsxs)("header", {
      className: ez().topBar,
      children: [
        (0, o.jsx)("button", {
          type: "button",
          className: ez().navButton,
          "aria-label": "Open navigation",
          onClick: s10,
          children: (0, o.jsx)(eP.A, {
            size: 16,
            strokeWidth: 1.75,
            "aria-hidden": true
          })
        }),
        (0, o.jsx)("nav", {
          className: ez().crumbs,
          "aria-label": "Breadcrumb",
          children: e10.map((a11, s11) => {
            let t2 = s11 === e10.length - 1, i2 = (0, o.jsxs)(o.Fragment, {
              children: [
                a11.icon,
                (0, o.jsx)("span", {
                  className: ez().crumbText,
                  children: a11.label
                })
              ]
            });
            return (0, o.jsxs)(
              "span",
              {
                className: ez().crumbItem,
                children: [
                  s11 > 0 ? (0, o.jsx)(eD.A, {
                    size: 14,
                    strokeWidth: 1.75,
                    className: ez().crumbSep,
                    "aria-hidden": true
                  }) : null,
                  a11.onClick && !t2 ? (0, o.jsx)("button", {
                    type: "button",
                    className: ez().crumb,
                    onClick: a11.onClick,
                    children: i2
                  }) : (0, o.jsx)("span", {
                    className: ez().crumb,
                    "data-current": t2 ? "" : void 0,
                    "aria-current": t2 ? "page" : void 0,
                    children: i2
                  })
                ]
              },
              s11
            );
          })
        }),
        a10 ? (0, o.jsx)("div", { className: ez().topActions, children: a10 }) : null
      ]
    });
  }
  function al({ icon: e10, title: a10, body: s10, action: t2 }) {
    return (0, o.jsxs)("div", {
      className: ez().empty,
      children: [
        e10 ? (0, o.jsx)("span", { className: ez().emptyIcon, children: e10 }) : null,
        (0, o.jsx)("p", { className: ez().emptyTitle, children: a10 }),
        s10 ? (0, o.jsx)("p", { className: ez().emptyBody, children: s10 }) : null,
        t2
      ]
    });
  }
  function ar({
    open: e10,
    onOpenChange: a10,
    title: s10,
    description: t2,
    children: i2,
    footer: n2,
    width: l2 = 460
  }) {
    let { brand: r2 } = eN();
    return (0, o.jsx)(eL.lG, {
      open: e10,
      onOpenChange: a10,
      children: (0, o.jsxs)(eL.Cf, {
        title: s10,
        description: t2,
        className: `${r2} ${ez().dialog}`,
        style: { width: `min(calc(100vw - 32px), ${l2}px)` },
        children: [
          i2 ? (0, o.jsx)("div", { className: ez().dialogBody, children: i2 }) : null,
          n2 ? (0, o.jsx)("div", {
            className: ez().dialogFooter,
            "data-alone": i2 ? void 0 : "",
            children: n2
          }) : null
        ]
      })
    });
  }
  function ao({
    open: e10,
    onOpenChange: a10,
    title: s10,
    description: t2,
    confirm: i2,
    danger: n2,
    onConfirm: l2
  }) {
    return (0, o.jsx)(ar, {
      open: e10,
      onOpenChange: a10,
      title: s10,
      description: t2,
      width: 420,
      footer: (0, o.jsxs)(o.Fragment, {
        children: [
          (0, o.jsx)(ai, {
            variant: "ghost",
            onClick: () => a10(false),
            children: "Cancel"
          }),
          (0, o.jsx)(ai, {
            variant: n2 ? "danger" : "primary",
            autoFocus: true,
            onClick: () => {
              l2(), a10(false);
            },
            children: i2
          })
        ]
      })
    });
  }
  function ad({ label: e10, hint: a10, error: s10, children: t2, htmlFor: i2 }) {
    return (0, o.jsxs)("div", {
      className: ez().field,
      children: [
        (0, o.jsx)("label", {
          className: ez().fieldLabel,
          htmlFor: i2,
          children: e10
        }),
        t2,
        s10 ? (0, o.jsx)("p", { className: ez().fieldError, children: s10 }) : a10 ? (0, o.jsx)("p", { className: ez().fieldHint, children: a10 }) : null
      ]
    });
  }
  let ac = (0, d.forwardRef)(function({ invalid: e10, mono: a10, className: s10, ...t2 }, i2) {
    return (0, o.jsx)("input", {
      ref: i2,
      className: `${ez().input} ${s10 ?? ""}`,
      "data-invalid": e10 ? "" : void 0,
      "data-mono": a10 ? "" : void 0,
      ...t2
    });
  });
  function ah({ options: e10, value: a10, onChange: s10, label: t2 }) {
    return (0, o.jsx)("div", {
      className: ez().choices,
      role: "radiogroup",
      "aria-label": t2,
      children: e10.map(
        (e11) => (0, o.jsxs)(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": e11.id === a10,
            className: ez().choice,
            onClick: () => s10(e11.id),
            children: [
              (0, o.jsx)("span", {
                className: ez().radio,
                "aria-hidden": "true"
              }),
              (0, o.jsxs)("span", {
                className: ez().choiceText,
                children: [
                  (0, o.jsx)("span", {
                    className: ez().choiceLabel,
                    children: e11.label
                  }),
                  e11.detail ? (0, o.jsx)("span", {
                    className: ez().choiceDetail,
                    children: e11.detail
                  }) : null
                ]
              }),
              e11.aside ? (0, o.jsx)("span", {
                className: ez().choiceAside,
                children: e11.aside
              }) : null
            ]
          },
          e11.id
        )
      )
    });
  }
  var au = s(44825), am = s(50626), ap = s(17143), a_ = s(11012), ax = s(9751), av = s(71556), ag = s(73178), aj = s(34591), ay = s.n(aj);
  let ab = {
    deploy: (0, o.jsx)(au.A, {
      size: 15,
      strokeWidth: 1.75,
      "aria-hidden": true
    }),
    key: (0, o.jsx)(x.A, { size: 15, strokeWidth: 1.75, "aria-hidden": true }),
    webhook: (0, o.jsx)(v.A, {
      size: 15,
      strokeWidth: 1.75,
      "aria-hidden": true
    }),
    domain: (0, o.jsx)(am.A, {
      size: 15,
      strokeWidth: 1.75,
      "aria-hidden": true
    }),
    member: (0, o.jsx)(ap.A, {
      size: 15,
      strokeWidth: 1.75,
      "aria-hidden": true
    }),
    incident: (0, o.jsx)(a_.A, {
      size: 15,
      strokeWidth: 1.75,
      "aria-hidden": true
    })
  };
  function ak({ path: e10 }) {
    let a10 = e10.split(/(\{[^}]+\})/);
    return (0, o.jsx)(o.Fragment, {
      children: a10.map(
        (e11, a11) => e11.startsWith("{") ? (0, o.jsx)("i", { children: e11 }, a11) : e11
      )
    });
  }
  function af({ value: e10, goodWhenDown: a10, label: s10 }) {
    let t2 = e10 >= 0;
    return (0, o.jsxs)("span", {
      className: ay().delta,
      "data-tone": 5e-3 > Math.abs(e10) ? void 0 : (a10 ? !t2 : t2) ? "good" : "bad",
      "aria-label": `${t2 ? "Up" : "Down"} ${Math.abs(100 * e10).toFixed(1)}% ${s10}`,
      children: [
        t2 ? (0, o.jsx)(ax.A, { size: 13, strokeWidth: 2, "aria-hidden": true }) : (0, o.jsx)(av.A, { size: 13, strokeWidth: 2, "aria-hidden": true }),
        Math.abs(100 * e10).toFixed(1),
        "%"
      ]
    });
  }
  function aw({ param: e10 }) {
    let {
      logs: a10,
      paused: s10,
      setPaused: t2,
      go: i2,
      notify: n2,
      sendTest: l2
    } = eN(), r2 = (0, h.I)(), c2 = e7(), [_2, x2] = (0, d.useState)("7d" === e10 || "30d" === e10 ? e10 : "24h"), [v2, g2] = (0, d.useState)("requests"), [j2, y2] = (0, d.useState)(null), b2 = eh[_2], k2 = ec.find((e11) => e11.id === _2), f2 = (0, d.useMemo)(() => {
      let e11 = b2.reduce((e12, a12) => e12 + a12.requests, 0), a11 = b2.reduce((e12, a12) => e12 + a12.previous, 0), s11 = b2.reduce((e12, a12) => e12 + a12.errors, 0), t3 = b2.reduce((e12, a12) => e12 + a12.p95, 0) / b2.length, i3 = s11 / e11;
      return {
        requests: e11,
        requestDelta: e11 / a11 - 1,
        errorRate: i3,
        errorDelta: i3 / 0.0142 - 1,
        p95: t3,
        p95Delta: -(0.04 + ("30d" === _2 ? 0.03 : 0.01 * ("7d" === _2)))
      };
    }, [b2, _2]), w2 = Z.reduce((e11, a11) => e11 + a11.email, 0), N2 = "requests" === v2 ? [
      {
        key: "value",
        label: "Requests",
        color: "var(--accent)",
        area: true
      },
      {
        key: "previous",
        label: "Previous period",
        color: "var(--text-muted)",
        dashed: true,
        area: false
      }
    ] : "errors" === v2 ? [
      {
        key: "value",
        label: "Error rate",
        color: "var(--danger)",
        area: true
      }
    ] : [
      {
        key: "value",
        label: "p95 latency",
        color: "var(--accent)",
        area: true
      }
    ], C2 = (0, d.useMemo)(
      () => b2.map((e11) => ({
        key: e11.key,
        label: e11.label,
        axisLabel: e11.axisLabel,
        values: "requests" === v2 ? { value: e11.requests, previous: e11.previous } : "errors" === v2 ? { value: +(e11.errors / e11.requests * 100).toFixed(2) } : { value: e11.p95 }
      })),
      [b2, v2]
    ), T2 = (0, d.useCallback)(
      (e11) => "requests" === v2 ? eK(e11) : "errors" === v2 ? `${e11.toFixed(2)}%` : `${Math.round(e11)}ms`,
      [v2]
    ), S2 = (0, d.useCallback)(
      (e11) => "requests" === v2 ? eZ(e11) : "errors" === v2 ? `${e11}%` : `${e11}ms`,
      [v2]
    ), A2 = a10.slice(0, 7), M2 = [
      {
        id: "requests",
        label: "Requests",
        value: (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(e4, { value: f2.requests }),
            (0, o.jsx)(af, {
              value: f2.requestDelta,
              label: "from the previous period"
            })
          ]
        }),
        foot: `vs ${eZ(f2.requests / (1 + f2.requestDelta))} in the previous ${"24h" === _2 ? "day" : "period"}`
      },
      {
        id: "errors",
        label: "Error rate",
        value: (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(e4, { value: f2.errorRate, format: (e11) => eQ(e11) }),
            (0, o.jsx)(af, {
              value: f2.errorDelta,
              goodWhenDown: true,
              label: "from the previous period"
            })
          ]
        }),
        foot: `${eK(b2.reduce((e11, a11) => e11 + a11.errors, 0))} failed requests`
      },
      {
        id: "latency",
        label: "p95 latency",
        value: (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("span", {
              children: [
                (0, o.jsx)(e4, { value: f2.p95 }),
                (0, o.jsx)("span", { className: ay().unit, children: "ms" })
              ]
            }),
            (0, o.jsx)(af, {
              value: f2.p95Delta,
              goodWhenDown: true,
              label: "from the previous period"
            })
          ]
        }),
        foot: "Across all endpoints, measured at the edge"
      },
      {
        id: "usage",
        label: "Emails this period",
        value: (0, o.jsxs)("span", {
          children: [
            (0, o.jsx)(e4, { value: w2, format: eZ }),
            (0, o.jsxs)("span", {
              className: ay().unit,
              children: [" of ", eZ(H[0].included)]
            })
          ]
        }),
        foot: (0, o.jsx)("span", {
          className: ay().usageMeter,
          children: (0, o.jsx)(e6, {
            value: w2,
            max: H[0].included,
            label: "Emails used this period"
          })
        })
      }
    ];
    return (0, o.jsxs)("div", {
      className: ay().page,
      children: [
        (0, o.jsx)(an, {
          crumbs: [
            {
              label: "Overview",
              icon: (0, o.jsx)(p.A, {
                size: 15,
                strokeWidth: 1.75,
                "aria-hidden": true
              })
            }
          ],
          actions: (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(e9, {
                label: "Time range",
                value: _2,
                onChange: (e11) => x2(e11),
                items: ec.map((e11) => ({ id: e11.id, label: e11.label }))
              }),
              (0, o.jsx)(as, {
                label: "Sends a real request with the Production server key",
                side: "bottom",
                children: (0, o.jsx)(ai, {
                  variant: "primary",
                  className: ay().testButton,
                  onClick: () => {
                    let e11 = l2();
                    n2(
                      "Test email sent",
                      `${e11.status} in ${e11.ms}ms, it is in the live tail.`
                    );
                  },
                  children: "Send test email"
                })
              })
            ]
          })
        }),
        (0, o.jsx)("div", {
          className: ay().scroll,
          children: (0, o.jsxs)("div", {
            className: ay().body,
            children: [
              (0, o.jsxs)("section", {
                className: ay().panel,
                "aria-label": "Traffic",
                children: [
                  (0, o.jsx)(u.o, {
                    id: c2.group,
                    children: (0, o.jsx)("div", {
                      className: ay().metrics,
                      role: "tablist",
                      "aria-label": "Chart metric",
                      ...c2.barProps,
                      children: M2.map((e11) => {
                        let a11 = e11.id === v2;
                        return (0, o.jsxs)(
                          "button",
                          {
                            type: "button",
                            role: "usage" === e11.id ? void 0 : "tab",
                            "aria-selected": "usage" === e11.id ? void 0 : a11,
                            className: ay().metric,
                            onClick: () => "usage" === e11.id ? i2("usage") : g2(e11.id),
                            children: [
                              a11 ? (0, o.jsx)(m.PY1.span, {
                                layoutId: "metric-line",
                                className: ay().metricLine,
                                transition: c2.transition
                              }) : null,
                              (0, o.jsx)("span", {
                                className: ay().metricLabel,
                                children: e11.label
                              }),
                              (0, o.jsx)("span", {
                                className: ay().metricValue,
                                children: e11.value
                              }),
                              (0, o.jsx)("span", {
                                className: ay().metricFoot,
                                children: e11.foot
                              })
                            ]
                          },
                          e11.id
                        );
                      })
                    })
                  }),
                  (0, o.jsxs)("div", {
                    className: ay().chart,
                    children: [
                      (0, o.jsxs)("div", {
                        className: ay().chartHead,
                        children: [
                          (0, o.jsx)("div", {
                            className: ay().legend,
                            children: N2.map(
                              (e11) => (0, o.jsxs)(
                                "span",
                                {
                                  className: ay().legendItem,
                                  children: [
                                    (0, o.jsx)("span", {
                                      className: ay().swatch,
                                      "data-dashed": e11.dashed ? "" : void 0,
                                      style: e11.dashed ? void 0 : { background: e11.color }
                                    }),
                                    e11.label
                                  ]
                                },
                                e11.key
                              )
                            )
                          }),
                          (0, o.jsx)("span", {
                            className: ay().readout,
                            "aria-live": "polite",
                            children: j2 ? (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsx)("strong", {
                                  children: T2(j2.values.value ?? 0)
                                }),
                                " on ",
                                j2.label
                              ]
                            }) : k2.long
                          })
                        ]
                      }),
                      (0, o.jsx)(
                        ag.b,
                        {
                          data: C2,
                          series: N2,
                          label: "requests" === v2 ? "Requests" : "errors" === v2 ? "Error rate" : "p95 latency",
                          height: 232,
                          legend: false,
                          formatValue: T2,
                          formatTick: S2,
                          onActiveChange: (e11, a11) => y2(a11),
                          categoryLabel: "24h" === _2 ? "Hour" : "Day"
                        },
                        v2
                      )
                    ]
                  })
                ]
              }),
              (0, o.jsxs)("div", {
                className: ay().grid,
                children: [
                  (0, o.jsxs)("section", {
                    className: ay().panel,
                    "aria-label": "Endpoint health",
                    children: [
                      (0, o.jsxs)("header", {
                        className: ay().panelHead,
                        children: [
                          (0, o.jsxs)("h2", {
                            className: ay().panelTitle,
                            children: [
                              "Endpoint health ",
                              (0, o.jsx)("span", {
                                className: ay().panelMeta,
                                children: "Last 24 hours"
                              })
                            ]
                          }),
                          (0, o.jsx)(ai, {
                            variant: "ghost",
                            size: "sm",
                            onClick: () => i2("logs"),
                            children: "Open logs"
                          })
                        ]
                      }),
                      (0, o.jsx)("div", {
                        className: ay().healthScroll,
                        children: (0, o.jsxs)("table", {
                          className: ay().health,
                          children: [
                            (0, o.jsx)("thead", {
                              children: (0, o.jsxs)("tr", {
                                children: [
                                  (0, o.jsx)("th", {
                                    scope: "col",
                                    children: "Endpoint"
                                  }),
                                  (0, o.jsx)("th", {
                                    scope: "col",
                                    "data-align": "end",
                                    children: "Requests"
                                  }),
                                  (0, o.jsx)("th", {
                                    scope: "col",
                                    "data-align": "end",
                                    children: "Errors"
                                  }),
                                  (0, o.jsx)("th", {
                                    scope: "col",
                                    "data-align": "end",
                                    children: "p95"
                                  }),
                                  (0, o.jsx)("th", {
                                    scope: "col",
                                    children: "Error rate by hour"
                                  })
                                ]
                              })
                            }),
                            (0, o.jsx)("tbody", {
                              children: eu.map((e11) => {
                                let a11 = e11.errorRate > 0.05 ? "danger" : e11.errorRate > 0.025 ? "warning" : void 0;
                                return (0, o.jsxs)(
                                  "tr",
                                  {
                                    className: ay().healthRow,
                                    onClick: () => i2("logs", e11.endpoint.id),
                                    children: [
                                      (0, o.jsx)("td", {
                                        children: (0, o.jsxs)("span", {
                                          className: ay().endpoint,
                                          children: [
                                            (0, o.jsx)(e1, {
                                              method: e11.endpoint.method
                                            }),
                                            (0, o.jsx)("span", {
                                              className: ay().path,
                                              title: e11.endpoint.label,
                                              children: (0, o.jsx)(ak, {
                                                path: e11.endpoint.path
                                              })
                                            })
                                          ]
                                        })
                                      }),
                                      (0, o.jsx)("td", {
                                        "data-align": "end",
                                        className: ay().num,
                                        children: eZ(e11.requests)
                                      }),
                                      (0, o.jsx)("td", {
                                        "data-align": "end",
                                        className: `${ay().num} ${ay().rate}`,
                                        "data-tone": a11,
                                        children: eQ(e11.errorRate)
                                      }),
                                      (0, o.jsx)("td", {
                                        "data-align": "end",
                                        className: `${ay().num} ${ay().muted}`,
                                        children: eJ(e11.p95)
                                      }),
                                      (0, o.jsx)("td", {
                                        children: (0, o.jsx)("span", {
                                          className: ay().strip,
                                          "aria-label": `Hourly error rate, worst ${eQ(Math.max(...e11.hours), 1)}`,
                                          children: e11.hours.map(
                                            (e12, a12) => (0, o.jsx)(
                                              "span",
                                              {
                                                "data-tone": e12 > 0.08 ? "danger" : e12 > 0.035 ? "warning" : void 0,
                                                style: {
                                                  height: `${Math.max(35, Math.min(100, 35 + 900 * e12))}%`
                                                }
                                              },
                                              a12
                                            )
                                          )
                                        })
                                      })
                                    ]
                                  },
                                  e11.endpoint.id
                                );
                              })
                            })
                          ]
                        })
                      })
                    ]
                  }),
                  (0, o.jsxs)("div", {
                    className: ay().side,
                    children: [
                      (0, o.jsxs)("section", {
                        className: ay().panel,
                        "aria-label": "Live requests",
                        children: [
                          (0, o.jsxs)("header", {
                            className: ay().panelHead,
                            children: [
                              (0, o.jsxs)("h2", {
                                className: ay().panelTitle,
                                children: [
                                  (0, o.jsx)("span", {
                                    className: ay().liveDot,
                                    "data-paused": s10 ? "" : void 0,
                                    "aria-hidden": "true"
                                  }),
                                  s10 ? "Paused" : "Live requests"
                                ]
                              }),
                              (0, o.jsx)(as, {
                                label: s10 ? "Resume the stream" : "Pause the stream",
                                side: "bottom",
                                children: (0, o.jsx)(ai, {
                                  variant: "ghost",
                                  size: "sm",
                                  onClick: () => t2(!s10),
                                  children: s10 ? "Resume" : "Pause"
                                })
                              })
                            ]
                          }),
                          (0, o.jsx)("ul", {
                            className: ay().tail,
                            children: (0, o.jsx)(eA.N, {
                              initial: false,
                              children: A2.map(
                                (e11) => (0, o.jsx)(
                                  m.PY1.li,
                                  {
                                    className: ay().tailItem,
                                    layout: !r2 && "position",
                                    initial: r2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                                    animate: { opacity: 1, height: 34 },
                                    exit: {
                                      opacity: 0,
                                      height: 0,
                                      transition: {
                                        duration: r2 ? 0 : eC.T.duration.fast
                                      }
                                    },
                                    transition: r2 ? { duration: 0 } : eC.T.spring.smooth,
                                    children: (0, o.jsxs)("button", {
                                      type: "button",
                                      className: ay().tailRow,
                                      onClick: () => i2("logs", e11.id),
                                      children: [
                                        (0, o.jsx)("span", {
                                          className: ay().tailTime,
                                          children: eY(e11.at).slice(0, 8)
                                        }),
                                        (0, o.jsx)(e1, { method: e11.method }),
                                        (0, o.jsx)("span", {
                                          className: ay().path,
                                          children: e11.path
                                        }),
                                        (0, o.jsx)(e2, { status: e11.status }),
                                        (0, o.jsx)("span", {
                                          className: ay().tailMs,
                                          children: eJ(e11.ms)
                                        })
                                      ]
                                    })
                                  },
                                  e11.id
                                )
                              )
                            })
                          })
                        ]
                      }),
                      (0, o.jsxs)("section", {
                        className: ay().panel,
                        "aria-label": "Activity",
                        children: [
                          (0, o.jsx)("header", {
                            className: ay().panelHead,
                            children: (0, o.jsx)("h2", {
                              className: ay().panelTitle,
                              children: "Activity"
                            })
                          }),
                          (0, o.jsx)("ul", {
                            className: ay().events,
                            children: em.map((e11) => {
                              let a11 = e11.actor ? O(e11.actor) : null;
                              return (0, o.jsxs)(
                                "li",
                                {
                                  className: ay().event,
                                  children: [
                                    (0, o.jsx)("span", {
                                      className: ay().eventIcon,
                                      "data-tone": e11.tone,
                                      children: ab[e11.kind]
                                    }),
                                    (0, o.jsxs)("span", {
                                      className: ay().eventText,
                                      children: [
                                        (0, o.jsxs)("span", {
                                          className: ay().eventTitle,
                                          children: [
                                            e11.title,
                                            a11 ? (0, o.jsx)(eX, {
                                              name: a11.name,
                                              photo: a11.photo,
                                              size: 16
                                            }) : null
                                          ]
                                        }),
                                        (0, o.jsx)("span", {
                                          className: ay().eventDetail,
                                          children: e11.detail
                                        })
                                      ]
                                    }),
                                    (0, o.jsx)("span", {
                                      className: ay().eventTime,
                                      children: eV(e11.at)
                                    })
                                  ]
                                },
                                e11.id
                              );
                            })
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  var aN = s(50825), aC = s(73534), aT = s(94088), aS = s(12363), aA = s(41189), aM = s(73474), a$ = s(11010), aI = s(75303), aE = s.n(aI);
  let aP = [
    { id: "15m", label: "15m", ms: 9e5 },
    { id: "1h", label: "1h", ms: 36e5 },
    { id: "24h", label: "24h", ms: 864e5 }
  ], aD = [
    { id: "2xx", label: "2xx success", tone: 200 },
    { id: "4xx", label: "4xx client error", tone: 400 },
    { id: "5xx", label: "5xx server error", tone: 500 }
  ], aR = ["GET", "POST", "PATCH", "DELETE"], aL = (e10) => e10 >= 500 ? "5xx" : e10 >= 400 ? "4xx" : "2xx", aq = /^[a-z]+_[A-Za-z0-9]{8,}$/;
  function aW(e10) {
    let a10 = window.matchMedia("(min-width: 1100px)");
    return a10.addEventListener("change", e10), () => a10.removeEventListener("change", e10);
  }
  let az = () => window.matchMedia("(min-width: 1100px)").matches;
  function aF({ path: e10 }) {
    let a10 = e10.split("/");
    return (0, o.jsx)("span", {
      className: aE().path,
      children: a10.map(
        (e11, a11) => (0, o.jsxs)(
          "span",
          {
            children: [
              a11 > 0 ? "/" : "",
              aq.test(e11) ? (0, o.jsx)("span", { className: aE().pathId, children: e11 }) : e11
            ]
          },
          a11
        )
      )
    });
  }
  function aO({ param: e10 }) {
    let {
      brand: a10,
      logs: s10,
      freshLogs: t2,
      paused: i2,
      setPaused: n2,
      keys: l2,
      notify: r2,
      sendTest: c2
    } = eN(), u2 = (0, h.I)(), p2 = (0, d.useSyncExternalStore)(aW, az, () => true), [x2, v2] = (0, d.useState)(""), [g2, j2] = (0, d.useState)([]), [y2, b2] = (0, d.useState)([]), [k2, N2] = (0, d.useState)(
      () => e10 && Q.some((a11) => a11.id === e10) ? [e10] : []
    ), [C2, T2] = (0, d.useState)("1h"), [S2, A2] = (0, d.useState)(() => e10?.startsWith("req_") ? e10 : null), [$2, E2] = (0, d.useState)(null), [P2, D2] = (0, d.useState)(e10);
    e10 !== P2 && (D2(e10), e10 && Q.some((a11) => a11.id === e10) && N2([e10]), e10?.startsWith("req_") && A2(e10));
    let R2 = (0, d.useMemo)(() => {
      let e11 = new Map(l2.map((e12) => [e12.id, e12.name]));
      return (a11) => "none" === a11 ? "No key" : e11.get(a11) ?? "Deleted key";
    }, [l2]), L2 = s10[0]?.at ?? 0, q2 = aP.find((e11) => e11.id === C2).ms, W2 = (0, d.useMemo)(() => {
      let e11 = x2.trim().toLowerCase();
      return s10.filter(
        (a11) => !(L2 - a11.at > q2) && (!e11 || !!`${a11.path} ${a11.id} ${a11.status} ${a11.ip} ${a11.method}`.toLowerCase().includes(e11))
      );
    }, [s10, L2, q2, x2]), z2 = (0, d.useMemo)(
      () => W2.filter(
        (e11) => (!g2.length || !!g2.includes(aL(e11.status))) && (!y2.length || !!y2.includes(e11.method)) && (!k2.length || !!k2.includes(e11.endpoint))
      ),
      [W2, g2, y2, k2]
    ), F2 = z2.slice(0, 200), O2 = S2 ? s10.find((e11) => e11.id === S2) ?? null : null, B2 = (0, I.iX)(O2), U2 = g2.length > 0 || y2.length > 0 || k2.length > 0 || "" !== x2.trim(), H2 = `${C2}|${x2}|${g2.join()}|${y2.join()}|${k2.join()}`, V2 = () => {
      let e11 = !i2;
      n2(e11), E2(e11 ? L2 : null);
    }, Y2 = () => {
      j2([]), b2([]), N2([]), v2("");
    }, K2 = (e11, a11) => e11.includes(a11) ? e11.filter((e12) => e12 !== a11) : [...e11, a11], Z2 = (e11) => {
      if (!F2.length) return;
      let a11 = F2.findIndex((e12) => e12.id === S2), s11 = F2[Math.min(F2.length - 1, Math.max(0, a11 < 0 ? 0 : a11 + e11))];
      A2(s11.id), document.getElementById(`log-${s11.id}`)?.scrollIntoView({ block: "nearest" });
    };
    (0, d.useEffect)(() => {
      let e11 = (e12) => {
        let a11 = e12.target;
        if (!a11?.closest(
          "input, textarea, select, [contenteditable='true'], [role='menu'], [role='listbox'], [role='tree']"
        ) && !e12.metaKey && !e12.ctrlKey && !e12.altKey) {
          if (" " === e12.key && !a11?.closest("button, a, [role='dialog']")) {
            e12.preventDefault(), V2();
            return;
          }
          S2 && (("ArrowDown" === e12.key || "j" === e12.key) && (e12.preventDefault(), Z2(1)), ("ArrowUp" === e12.key || "k" === e12.key) && (e12.preventDefault(), Z2(-1)), "Escape" === e12.key && p2 && !document.querySelector("[role='menu'], [role='dialog']") && A2(null));
        }
      };
      return window.addEventListener("keydown", e11), () => window.removeEventListener("keydown", e11);
    });
    let G2 = (e11) => {
      let a11 = c2(e11.endpoint);
      r2("Request replayed", `${a11.status} in ${eJ(a11.ms)}, added to the log.`), A2(a11.id);
    }, J2 = Object.fromEntries(
      aD.map((e11) => [e11.id, W2.filter((a11) => aL(a11.status) === e11.id).length])
    );
    return (0, o.jsxs)("div", {
      className: aE().page,
      children: [
        (0, o.jsx)(an, {
          crumbs: [
            {
              label: "Logs",
              icon: (0, o.jsx)(_.A, {
                size: 15,
                strokeWidth: 1.75,
                "aria-hidden": true
              })
            }
          ],
          actions: (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(ai, {
                variant: "ghost",
                icon: (0, o.jsx)(aN.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": true
                }),
                className: aE().export,
                onClick: () => r2(
                  "Export started",
                  `${z2.length.toLocaleString("en-US")} requests as NDJSON, emailed when ready.`
                ),
                children: "Export"
              }),
              (0, o.jsx)(as, {
                label: i2 ? "Resume live tail" : "Pause live tail",
                keys: ["Space"],
                side: "bottom",
                children: (0, o.jsx)(ai, {
                  onClick: V2,
                  icon: i2 ? (0, o.jsx)(f.A, {
                    size: 13,
                    strokeWidth: 2,
                    "aria-hidden": true
                  }) : (0, o.jsx)("span", {
                    className: aE().liveDot,
                    "aria-hidden": "true"
                  }),
                  className: aE().liveButton,
                  "data-paused": i2 ? "" : void 0,
                  children: i2 ? "Paused" : "Live"
                })
              })
            ]
          })
        }),
        (0, o.jsxs)("div", {
          className: aE().toolbar,
          children: [
            (0, o.jsxs)("label", {
              className: aE().search,
              children: [
                (0, o.jsx)(M.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": true
                }),
                (0, o.jsx)("input", {
                  value: x2,
                  onChange: (e11) => v2(e11.target.value),
                  placeholder: "Search path, request id, status or IP",
                  "aria-label": "Search requests"
                }),
                x2 ? (0, o.jsx)("button", {
                  type: "button",
                  "aria-label": "Clear search",
                  onClick: () => v2(""),
                  children: (0, o.jsx)(eE.A, {
                    size: 13,
                    strokeWidth: 1.75,
                    "aria-hidden": true
                  })
                }) : null
              ]
            }),
            (0, o.jsxs)("div", {
              className: aE().filters,
              children: [
                (0, o.jsx)(e8, {
                  label: "Status",
                  keepOpen: true,
                  width: 220,
                  trigger: (0, o.jsx)(ai, {
                    variant: "ghost",
                    icon: (0, o.jsx)(aC.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": true
                    }),
                    "data-active": g2.length ? "" : void 0,
                    children: "Status"
                  }),
                  options: aD.map((e11) => ({
                    id: e11.id,
                    label: (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(e2, { status: e11.tone }),
                        (0, o.jsx)("span", {
                          children: e11.label.split(" ").slice(1).join(" ")
                        })
                      ]
                    }),
                    hint: J2[e11.id],
                    checked: g2.includes(e11.id)
                  })),
                  onSelect: (e11) => j2((a11) => K2(a11, e11))
                }),
                (0, o.jsx)(e8, {
                  label: "Method",
                  keepOpen: true,
                  width: 180,
                  trigger: (0, o.jsx)(ai, {
                    variant: "ghost",
                    icon: (0, o.jsx)(aC.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": true
                    }),
                    "data-active": y2.length ? "" : void 0,
                    children: "Method"
                  }),
                  options: aR.map((e11) => ({
                    id: e11,
                    label: (0, o.jsx)(e1, { method: e11 }),
                    hint: W2.filter((a11) => a11.method === e11).length,
                    checked: y2.includes(e11)
                  })),
                  onSelect: (e11) => b2((a11) => K2(a11, e11))
                }),
                (0, o.jsx)(e8, {
                  label: "Endpoint",
                  keepOpen: true,
                  width: 300,
                  trigger: (0, o.jsx)(ai, {
                    variant: "ghost",
                    icon: (0, o.jsx)(aC.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": true
                    }),
                    "data-active": k2.length ? "" : void 0,
                    children: "Path"
                  }),
                  options: Q.map((e11) => ({
                    id: e11.id,
                    label: (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(e1, { method: e11.method }),
                        (0, o.jsx)("span", {
                          className: aE().menuPath,
                          children: e11.path
                        })
                      ]
                    }),
                    hint: W2.filter((a11) => a11.endpoint === e11.id).length,
                    checked: k2.includes(e11.id)
                  })),
                  onSelect: (e11) => N2((a11) => K2(a11, e11))
                }),
                (0, o.jsx)(e9, {
                  label: "Time range",
                  items: aP.map((e11) => ({ id: e11.id, label: e11.label })),
                  value: C2,
                  onChange: (e11) => T2(e11)
                })
              ]
            })
          ]
        }),
        (0, o.jsx)(eA.N, {
          initial: false,
          children: g2.length || y2.length || k2.length ? (0, o.jsx)(m.PY1.div, {
            className: aE().chips,
            initial: u2 ? { opacity: 0 } : { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: u2 ? { opacity: 0 } : { height: 0, opacity: 0 },
            transition: u2 ? { duration: 0 } : eC.T.spring.smooth,
            children: (0, o.jsxs)("div", {
              className: aE().chipRow,
              children: [
                g2.length ? (0, o.jsx)(aH, {
                  label: "Status",
                  value: g2.join(", "),
                  onClear: () => j2([])
                }) : null,
                y2.length ? (0, o.jsx)(aH, {
                  label: "Method",
                  value: y2.join(", "),
                  onClear: () => b2([])
                }) : null,
                k2.length ? (0, o.jsx)(aH, {
                  label: "Path",
                  value: k2.map((e11) => Q.find((a11) => a11.id === e11)?.path).join(", "),
                  onClear: () => N2([])
                }) : null,
                (0, o.jsx)("button", {
                  type: "button",
                  className: aE().clear,
                  onClick: Y2,
                  children: "Clear all"
                })
              ]
            })
          }) : null
        }),
        (0, o.jsxs)("div", {
          className: aE().body,
          children: [
            (0, o.jsxs)("div", {
              className: aE().listColumn,
              children: [
                (0, o.jsx)(eA.N, {
                  initial: false,
                  children: i2 ? (0, o.jsx)(m.PY1.div, {
                    className: aE().pausedWrap,
                    initial: u2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: u2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                    transition: u2 ? { duration: 0 } : eC.T.spring.smooth,
                    children: (0, o.jsxs)("div", {
                      className: aE().paused,
                      children: [
                        (0, o.jsx)(w.A, {
                          size: 13,
                          strokeWidth: 2,
                          "aria-hidden": true
                        }),
                        (0, o.jsxs)("span", {
                          children: [
                            "Live tail paused",
                            $2 ? ` at ${eY($2).slice(0, 8)}` : "",
                            ". New requests are held until you resume."
                          ]
                        }),
                        (0, o.jsx)("button", {
                          type: "button",
                          onClick: V2,
                          children: "Resume"
                        })
                      ]
                    })
                  }) : null
                }),
                (0, o.jsx)("div", {
                  className: aE().scroller,
                  children: 0 === F2.length ? (0, o.jsx)(al, {
                    icon: (0, o.jsx)(_.A, {
                      size: 20,
                      strokeWidth: 1.75,
                      "aria-hidden": true
                    }),
                    title: U2 ? "No requests match" : "No requests in this window",
                    body: U2 ? "Try another status, method or path, or clear the filters." : "Widen the time range, or send a test request from the quickstart.",
                    action: U2 ? (0, o.jsx)(ai, {
                      onClick: Y2,
                      children: "Clear filters"
                    }) : (0, o.jsx)(ai, {
                      onClick: () => T2("24h"),
                      children: "Show 24 hours"
                    })
                  }) : (0, o.jsxs)("div", {
                    className: aE().table,
                    role: "table",
                    "aria-label": "Requests",
                    "aria-rowcount": z2.length,
                    "data-compact": p2 && B2 ? "" : void 0,
                    children: [
                      (0, o.jsxs)("div", {
                        className: aE().head,
                        role: "row",
                        children: [
                          (0, o.jsx)("span", {
                            role: "columnheader",
                            children: "Time"
                          }),
                          (0, o.jsx)("span", {
                            role: "columnheader",
                            children: "Method"
                          }),
                          (0, o.jsx)("span", {
                            role: "columnheader",
                            children: "Status"
                          }),
                          (0, o.jsx)("span", {
                            role: "columnheader",
                            children: "Path"
                          }),
                          (0, o.jsx)("span", {
                            role: "columnheader",
                            "data-align": "end",
                            children: "Duration"
                          }),
                          (0, o.jsx)("span", {
                            role: "columnheader",
                            className: aE().optional,
                            children: "API key"
                          }),
                          (0, o.jsx)("span", {
                            role: "columnheader",
                            className: `${aE().optional} ${aE().region}`,
                            children: "Region"
                          })
                        ]
                      }),
                      (0, o.jsx)(
                        eA.N,
                        {
                          initial: false,
                          children: F2.map((e11) => {
                            let a11 = e11.id === S2, s11 = t2.has(e11.id);
                            return (0, o.jsxs)(
                              m.PY1.div,
                              {
                                id: `log-${e11.id}`,
                                role: "row",
                                tabIndex: 0,
                                "aria-selected": a11,
                                className: aE().row,
                                "data-selected": a11 ? "" : void 0,
                                "data-tone": e11.status >= 500 ? "danger" : e11.status >= 400 ? "warning" : void 0,
                                onClick: () => A2(a11 && p2 ? null : e11.id),
                                onKeyDown: (a12) => {
                                  "Enter" === a12.key && A2(e11.id);
                                },
                                initial: !!s11 && (u2 ? { opacity: 0 } : { height: 0, opacity: 0 }),
                                animate: { height: 36, opacity: 1 },
                                transition: u2 ? { duration: 0 } : {
                                  height: eC.T.spring.smooth,
                                  opacity: {
                                    duration: eC.T.duration.standard,
                                    ease: [...eC.T.ease.enter]
                                  }
                                },
                                children: [
                                  (0, o.jsx)("span", {
                                    role: "cell",
                                    className: aE().time,
                                    children: eY(e11.at)
                                  }),
                                  (0, o.jsx)("span", {
                                    role: "cell",
                                    children: (0, o.jsx)(e1, {
                                      method: e11.method
                                    })
                                  }),
                                  (0, o.jsx)("span", {
                                    role: "cell",
                                    children: (0, o.jsx)(e2, {
                                      status: e11.status
                                    })
                                  }),
                                  (0, o.jsx)("span", {
                                    role: "cell",
                                    className: aE().pathCell,
                                    children: (0, o.jsx)(aF, {
                                      path: e11.path
                                    })
                                  }),
                                  (0, o.jsx)("span", {
                                    role: "cell",
                                    "data-align": "end",
                                    className: aE().ms,
                                    "data-slow": e11.ms >= 1e3 ? "" : void 0,
                                    children: eJ(e11.ms)
                                  }),
                                  (0, o.jsx)("span", {
                                    role: "cell",
                                    className: `${aE().optional} ${aE().key}`,
                                    "data-none": "none" === e11.key ? "" : void 0,
                                    children: R2(e11.key)
                                  }),
                                  (0, o.jsx)("span", {
                                    role: "cell",
                                    className: `${aE().optional} ${aE().region}`,
                                    children: e11.region
                                  })
                                ]
                              },
                              e11.id
                            );
                          })
                        },
                        H2
                      )
                    ]
                  })
                }),
                (0, o.jsxs)("div", {
                  className: aE().footer,
                  children: [
                    (0, o.jsxs)("span", {
                      children: [
                        (0, o.jsx)(e4, { value: z2.length }),
                        " ",
                        1 === z2.length ? "request" : "requests",
                        " in the last ",
                        "24h" === C2 ? "24 hours" : "1h" === C2 ? "hour" : "15 minutes"
                      ]
                    }),
                    z2.length > 200 ? (0, o.jsxs)("span", {
                      className: aE().footMuted,
                      children: ["Showing the latest ", 200]
                    }) : null
                  ]
                })
              ]
            }),
            p2 ? (0, o.jsx)(eA.N, {
              initial: false,
              children: B2 ? (0, o.jsx)(
                m.PY1.aside,
                {
                  className: aE().panel,
                  "aria-label": "Request details",
                  initial: u2 ? { opacity: 0 } : { width: 0, opacity: 0 },
                  animate: { width: 460, opacity: 1 },
                  exit: u2 ? { opacity: 0, transition: { duration: 0 } } : {
                    width: 0,
                    opacity: 0,
                    transition: {
                      duration: eC.T.duration.exit,
                      ease: [...eC.T.ease.standard]
                    }
                  },
                  transition: u2 ? { duration: 0 } : eC.T.spring.smooth,
                  children: (0, o.jsxs)("div", {
                    className: aE().panelInner,
                    children: [
                      (0, o.jsxs)("header", {
                        className: aE().panelHead,
                        children: [
                          (0, o.jsx)(e1, { method: B2.method }),
                          (0, o.jsx)("span", {
                            className: aE().panelPath,
                            children: (0, o.jsx)(aF, { path: B2.path })
                          }),
                          (0, o.jsxs)("span", {
                            className: aE().panelNav,
                            children: [
                              (0, o.jsx)(as, {
                                label: "Newer request",
                                keys: ["\u2191"],
                                children: (0, o.jsx)(at, {
                                  label: "Newer request",
                                  onClick: () => Z2(-1),
                                  children: (0, o.jsx)(aT.A, {
                                    size: 15,
                                    strokeWidth: 1.75,
                                    "aria-hidden": true
                                  })
                                })
                              }),
                              (0, o.jsx)(as, {
                                label: "Older request",
                                keys: ["\u2193"],
                                children: (0, o.jsx)(at, {
                                  label: "Older request",
                                  onClick: () => Z2(1),
                                  children: (0, o.jsx)(aS.A, {
                                    size: 15,
                                    strokeWidth: 1.75,
                                    "aria-hidden": true
                                  })
                                })
                              }),
                              (0, o.jsx)(as, {
                                label: "Close",
                                keys: ["Esc"],
                                children: (0, o.jsx)(at, {
                                  label: "Close details",
                                  onClick: () => A2(null),
                                  children: (0, o.jsx)(eE.A, {
                                    size: 15,
                                    strokeWidth: 1.75,
                                    "aria-hidden": true
                                  })
                                })
                              })
                            ]
                          })
                        ]
                      }),
                      (0, o.jsx)(
                        aB,
                        {
                          entry: B2,
                          keyName: R2(B2.key),
                          onReplay: () => G2(B2)
                        },
                        B2.id
                      )
                    ]
                  })
                },
                "panel"
              ) : null
            }) : (0, o.jsx)(I._s, {
              open: !!O2,
              onOpenChange: (e11) => {
                e11 || A2(null);
              },
              children: B2 ? (0, o.jsx)(I.zj, {
                side: "right",
                title: `${B2.method} ${B2.path}`,
                description: `${B2.status}, ${eJ(B2.ms)}`,
                className: `${a10} ${aE().drawer}`,
                children: (0, o.jsx)(
                  aB,
                  { entry: B2, keyName: R2(B2.key), onReplay: () => G2(B2) },
                  B2.id
                )
              }) : null
            })
          ]
        })
      ]
    });
  }
  function aB({ entry: e10, keyName: a10, onReplay: s10 }) {
    let t2, [i2, n2] = (0, d.useState)(e10.request ? "request" : "response"), l2 = e10.timing.reduce((e11, a11) => e11 + a11.ms, 0) || e10.ms, r2 = e10.timing.map(
      (a11, s11) => e10.timing.slice(0, s11).reduce((e11, a12) => e11 + a12.ms, 0)
    ), c2 = "request" === i2 ? e10.request : e10.response;
    return (0, o.jsxs)("div", {
      className: aE().details,
      children: [
        (0, o.jsxs)("dl", {
          className: aE().facts,
          children: [
            (0, o.jsxs)(aU, {
              label: "Status",
              children: [
                (0, o.jsx)(e2, { status: e10.status }),
                (0, o.jsx)("span", {
                  className: aE().factMuted,
                  children: {
                    200: "OK",
                    202: "Accepted",
                    204: "No content",
                    400: "Bad request",
                    401: "Unauthorized",
                    404: "Not found",
                    422: "Unprocessable",
                    429: "Too many requests",
                    500: "Server error",
                    503: "Unavailable"
                  }[e10.status] ?? ""
                })
              ]
            }),
            (0, o.jsx)(aU, {
              label: "Duration",
              children: (0, o.jsx)("span", {
                className: aE().mono,
                children: eJ(e10.ms)
              })
            }),
            (0, o.jsxs)(aU, {
              label: "Request id",
              wide: true,
              children: [
                (0, o.jsx)("span", { className: aE().mono, children: e10.id }),
                (0, o.jsx)(aM.CopyButton, {
                  value: e10.id,
                  label: "Copy request id",
                  iconOnly: true,
                  variant: "plain",
                  className: aE().copy
                })
              ]
            }),
            (0, o.jsx)(aU, {
              label: "Time",
              children: (0, o.jsxs)("span", {
                children: [
                  (0, o.jsx)("span", {
                    className: aE().mono,
                    children: eY(e10.at).slice(0, 8)
                  }),
                  " UTC, ",
                  eU(new Date(e10.at).toISOString())
                ]
              })
            }),
            (0, o.jsx)(aU, {
              label: "API key",
              children: (0, o.jsx)("span", {
                "data-none": "none" === e10.key ? "" : void 0,
                className: aE().factValue,
                children: a10
              })
            }),
            (0, o.jsx)(aU, {
              label: "IP address",
              children: (0, o.jsx)("span", {
                className: aE().mono,
                children: e10.ip
              })
            }),
            (0, o.jsx)(aU, {
              label: "Region",
              children: (0, o.jsx)("span", {
                className: aE().mono,
                children: e10.region
              })
            }),
            (0, o.jsx)(aU, {
              label: "User agent",
              children: (0, o.jsx)("span", {
                className: aE().mono,
                title: e10.agent,
                children: e10.agent
              })
            })
          ]
        }),
        (0, o.jsxs)("section", {
          className: aE().section,
          "aria-label": "Timing",
          children: [
            (0, o.jsxs)("div", {
              className: aE().sectionHead,
              children: [
                (0, o.jsx)("h3", { children: "Timing" }),
                (0, o.jsxs)("span", {
                  className: aE().factMuted,
                  children: [eJ(e10.ms), " total"]
                })
              ]
            }),
            (0, o.jsx)("ul", {
              className: aE().waterfall,
              children: e10.timing.map((a11, s11) => {
                let t3 = r2[s11] / l2;
                return (0, o.jsxs)(
                  "li",
                  {
                    children: [
                      (0, o.jsx)("span", {
                        className: aE().stepLabel,
                        children: a11.label
                      }),
                      (0, o.jsx)("span", {
                        className: aE().track,
                        children: (0, o.jsx)("span", {
                          className: aE().bar,
                          "data-tone": e10.status >= 500 && a11 === e10.timing[e10.timing.length - 1] ? "danger" : void 0,
                          style: {
                            left: `${100 * t3}%`,
                            width: `max(2px, ${a11.ms / l2 * 100}%)`
                          }
                        })
                      }),
                      (0, o.jsx)("span", {
                        className: aE().stepMs,
                        children: eJ(a11.ms)
                      })
                    ]
                  },
                  a11.label
                );
              })
            })
          ]
        }),
        (0, o.jsxs)("section", {
          className: aE().section,
          "aria-label": "Body",
          children: [
            (0, o.jsx)(e3, {
              size: "sm",
              label: "Body",
              className: aE().bodyTabs,
              items: [
                { id: "request", label: "Request" },
                { id: "response", label: "Response" }
              ],
              value: i2,
              onChange: (e11) => n2(e11)
            }),
            (0, o.jsx)("div", {
              className: aE().json,
              children: null == c2 ? (0, o.jsx)("p", {
                className: aE().noBody,
                children: "request" === i2 ? `${e10.method} requests carry no body.` : "No content. The server answered 204."
              }) : (0, o.jsx)(
                a$.p,
                {
                  data: c2,
                  rootName: i2,
                  searchable: false,
                  showPath: false,
                  defaultExpandDepth: 2,
                  maxHeight: 320,
                  label: `${"request" === i2 ? "Request" : "Response"} body`
                },
                i2
              )
            })
          ]
        }),
        (0, o.jsxs)("div", {
          className: aE().actions,
          children: [
            (0, o.jsx)(ai, {
              icon: (0, o.jsx)(aA.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": true
              }),
              onClick: s10,
              children: "Replay request"
            }),
            (0, o.jsx)(aM.CopyButton, {
              value: (t2 = [
                `curl -X ${e10.method} https://api.ferry.dev${e10.path}`,
                '  -H "Authorization: Bearer $FERRY_API_KEY"'
              ], e10.request && t2.push(
                '  -H "Content-Type: application/json"',
                `  -d '${JSON.stringify(e10.request)}'`
              ), t2.join(" \\\n")),
              label: "Copy as cURL",
              className: aE().curl
            })
          ]
        })
      ]
    });
  }
  function aU({ label: e10, wide: a10, children: s10 }) {
    return (0, o.jsxs)("div", {
      className: aE().fact,
      "data-wide": a10 ? "" : void 0,
      children: [
        (0, o.jsx)("dt", { children: e10 }),
        (0, o.jsx)("dd", { children: s10 })
      ]
    });
  }
  function aH({ label: e10, value: a10, onClear: s10 }) {
    return (0, o.jsxs)("span", {
      className: aE().chip,
      children: [
        (0, o.jsxs)("span", {
          className: aE().chipLabel,
          children: [e10, " is"]
        }),
        (0, o.jsx)("span", { className: aE().chipValue, children: a10 }),
        (0, o.jsx)("button", {
          type: "button",
          "aria-label": `Remove ${e10.toLowerCase()} filter`,
          onClick: s10,
          children: (0, o.jsx)(eE.A, {
            size: 12,
            strokeWidth: 2,
            "aria-hidden": true
          })
        })
      ]
    });
  }
  var aV = s(69203), aY = s(59680), aK = s(99314), aZ = s(82749), aG = s(25879), aQ = s(87096), aJ = s.n(aQ), aX = s(55665);
  async function a0(e10) {
    try {
      return await (0, aX.a)(e10), true;
    } catch {
      return false;
    }
  }
  function a1({ param: e10 }) {
    let {
      keys: a10,
      go: s10,
      notify: t2,
      createKey: i2,
      rollKey: n2,
      revokeKey: l2,
      renameKey: r2,
      project: c2
    } = eN(), [h2, u2] = (0, d.useState)("active"), [m2, p2] = (0, d.useState)("new" === e10 ? { kind: "create" } : null), [_2, v2] = (0, d.useState)(m2), [g2, j2] = (0, d.useState)(null), [y2, k2] = (0, d.useState)(null), [f2, w2] = (0, d.useState)(null);
    m2 && m2 !== _2 && v2(m2);
    let N2 = m2 ?? _2, [C2, T2] = (0, d.useState)(e10);
    e10 !== C2 && (T2(e10), "new" === e10 && p2({ kind: "create" }));
    let S2 = (0, d.useMemo)(() => a10.filter((e11) => !e11.revoked), [a10]), A2 = (0, d.useMemo)(() => a10.filter((e11) => e11.revoked), [a10]), M2 = "active" === h2 ? S2 : A2, $2 = () => p2({ kind: "create" }), I2 = () => {
      p2(null), e10 && s10("keys");
    }, E2 = !!m2 || !!g2 || !!y2;
    return (0, d.useEffect)(() => {
      let e11 = (e12) => {
        if ("c" !== e12.key.toLowerCase() || e12.metaKey || e12.ctrlKey || e12.altKey || E2)
          return;
        let a11 = e12.target;
        a11?.closest(
          "input, textarea, select, [contenteditable='true'], [role='dialog'], [role='menu'], [role='listbox']"
        ) || (e12.preventDefault(), p2({ kind: "create" }));
      };
      return window.addEventListener("keydown", e11), () => window.removeEventListener("keydown", e11);
    }, [E2]), (0, d.useEffect)(() => {
      if (!f2) return;
      let e11 = window.setTimeout(() => w2(null), 2400);
      return () => window.clearTimeout(e11);
    }, [f2]), (0, o.jsxs)("div", {
      className: aJ().page,
      children: [
        (0, o.jsx)(an, {
          crumbs: [
            {
              label: "API keys",
              icon: (0, o.jsx)(x.A, {
                size: 15,
                strokeWidth: 1.75,
                "aria-hidden": true
              })
            }
          ],
          actions: (0, o.jsx)(as, {
            label: "Create key",
            keys: ["C"],
            side: "bottom",
            children: (0, o.jsx)(ai, {
              variant: "primary",
              icon: (0, o.jsx)(b.A, {
                size: 14,
                strokeWidth: 2,
                "aria-hidden": true
              }),
              onClick: $2,
              className: aJ().primary,
              children: "Create key"
            })
          })
        }),
        (0, o.jsxs)("div", {
          className: aJ().toolbar,
          children: [
            (0, o.jsx)(e3, {
              label: "Key status",
              value: h2,
              onChange: (e11) => u2(e11),
              items: [
                { id: "active", label: "Active", count: S2.length },
                { id: "revoked", label: "Revoked", count: A2.length }
              ]
            }),
            (0, o.jsxs)("p", {
              className: aJ().note,
              children: [
                "Keys work for every endpoint in ",
                c2.name,
                ". Secrets are shown once."
              ]
            })
          ]
        }),
        (0, o.jsx)("div", {
          className: aJ().scroller,
          children: 0 === M2.length ? "revoked" === h2 ? (0, o.jsx)(al, {
            icon: (0, o.jsx)(aV.A, {
              size: 20,
              strokeWidth: 1.75,
              "aria-hidden": true
            }),
            title: "No revoked keys",
            body: "Revoked keys stop working at once and stay listed here for your audit trail."
          }) : (0, o.jsx)(al, {
            icon: (0, o.jsx)(x.A, {
              size: 20,
              strokeWidth: 1.75,
              "aria-hidden": true
            }),
            title: "No active keys",
            body: "Create a key to authenticate requests from your servers.",
            action: (0, o.jsx)(ai, {
              variant: "primary",
              onClick: $2,
              children: "Create key"
            })
          }) : (0, o.jsxs)("table", {
            className: aJ().table,
            children: [
              (0, o.jsxs)("colgroup", {
                children: [
                  (0, o.jsx)("col", { style: { width: 250 } }),
                  (0, o.jsx)("col", { style: { width: 230 } }),
                  (0, o.jsx)("col", { style: { width: 150 } }),
                  (0, o.jsx)("col", { style: { width: 190 } }),
                  (0, o.jsx)("col", { style: { width: 150 } }),
                  (0, o.jsx)("col", { style: { width: 110 } }),
                  (0, o.jsx)("col", { style: { width: 56 } })
                ]
              }),
              (0, o.jsx)("thead", {
                children: (0, o.jsxs)("tr", {
                  children: [
                    (0, o.jsx)("th", {
                      scope: "col",
                      children: "Name"
                    }),
                    (0, o.jsx)("th", {
                      scope: "col",
                      children: "Token"
                    }),
                    (0, o.jsx)("th", {
                      scope: "col",
                      children: "Permission"
                    }),
                    (0, o.jsx)("th", {
                      scope: "col",
                      children: "Created by"
                    }),
                    (0, o.jsx)("th", {
                      scope: "col",
                      children: "active" === h2 ? "Last used" : "Revoked"
                    }),
                    (0, o.jsx)("th", {
                      scope: "col",
                      "data-align": "end",
                      children: "Requests, 30d"
                    }),
                    (0, o.jsx)("th", {
                      scope: "col",
                      children: (0, o.jsx)("span", {
                        className: aJ().srOnly,
                        children: "Actions"
                      })
                    })
                  ]
                })
              }),
              (0, o.jsx)("tbody", {
                children: M2.map((e11) => {
                  let a11 = O(e11.createdBy), s11 = e11.lastUsed && P.getTime() - eB(e11.lastUsed).getTime() > 2592e6;
                  return (0, o.jsxs)(
                    "tr",
                    {
                      className: aJ().row,
                      "data-fresh": f2 === e11.id ? "" : void 0,
                      "data-revoked": e11.revoked ? "" : void 0,
                      children: [
                        (0, o.jsx)("td", {
                          children: e11.revoked ? (0, o.jsx)("span", {
                            className: aJ().nameStatic,
                            children: e11.name
                          }) : (0, o.jsx)(a2, {
                            value: e11.name,
                            onSave: (a12) => {
                              r2(e11.id, a12), t2("Key renamed", a12);
                            }
                          })
                        }),
                        (0, o.jsx)("td", {
                          children: (0, o.jsxs)("span", {
                            className: aJ().token,
                            children: [
                              (0, o.jsx)("code", {
                                children: `${e11.prefix}_\u2022\u2022\u2022\u2022${e11.last4}`
                              }),
                              (0, o.jsx)(e5, {
                                tone: "live" === e11.env ? "accent" : "warning",
                                children: "live" === e11.env ? "Live" : "Test"
                              })
                            ]
                          })
                        }),
                        (0, o.jsx)("td", {
                          children: (0, o.jsx)(e5, {
                            children: e_(e11.permission)
                          })
                        }),
                        (0, o.jsx)("td", {
                          children: (0, o.jsxs)("span", {
                            className: aJ().person,
                            children: [
                              (0, o.jsx)(eX, {
                                name: a11.name,
                                photo: a11.photo,
                                size: 20
                              }),
                              (0, o.jsx)("span", {
                                className: aJ().truncate,
                                children: a11.name
                              })
                            ]
                          })
                        }),
                        (0, o.jsx)("td", {
                          className: aJ().secondary,
                          children: e11.revoked ? (0, o.jsx)("span", {
                            children: eH(e11.revoked)
                          }) : (0, o.jsx)("span", {
                            className: aJ().last,
                            "data-stale": s11 ? "" : void 0,
                            children: e11.lastUsed ? eV(e11.lastUsed) : "Never"
                          })
                        }),
                        (0, o.jsx)("td", {
                          "data-align": "end",
                          className: aJ().num,
                          children: e11.revoked ? (0, o.jsx)("span", {
                            className: aJ().muted,
                            children: "None"
                          }) : (0, o.jsx)(e4, { value: e11.requests })
                        }),
                        (0, o.jsx)("td", {
                          "data-align": "end",
                          children: (0, o.jsx)(e8, {
                            align: "end",
                            width: 200,
                            trigger: (0, o.jsx)(at, {
                              label: `Actions for ${e11.name}`,
                              children: (0, o.jsx)(aY.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": true
                              })
                            }),
                            options: e11.revoked ? [
                              {
                                id: "copy",
                                label: "Copy key id",
                                icon: (0, o.jsx)(aK.A, {
                                  size: 15,
                                  strokeWidth: 1.75,
                                  "aria-hidden": true
                                })
                              }
                            ] : [
                              {
                                id: "copy",
                                label: "Copy key id",
                                icon: (0, o.jsx)(aK.A, {
                                  size: 15,
                                  strokeWidth: 1.75,
                                  "aria-hidden": true
                                })
                              },
                              {
                                id: "roll",
                                label: "Roll key",
                                icon: (0, o.jsx)(aZ.A, {
                                  size: 15,
                                  strokeWidth: 1.75,
                                  "aria-hidden": true
                                })
                              },
                              "separator",
                              {
                                id: "revoke",
                                label: "Revoke key",
                                icon: (0, o.jsx)(aG.A, {
                                  size: 15,
                                  strokeWidth: 1.75,
                                  "aria-hidden": true
                                }),
                                danger: true
                              }
                            ],
                            onSelect: (a12) => "copy" === a12 ? void a0(e11.id).then(
                              (a13) => t2(
                                a13 ? "Key id copied" : "Could not copy",
                                e11.id,
                                {
                                  tone: a13 ? "success" : "danger"
                                }
                              )
                            ) : "roll" === a12 ? j2(e11) : "revoke" === a12 ? k2(e11) : void 0
                          })
                        })
                      ]
                    },
                    e11.id
                  );
                })
              })
            ]
          })
        }),
        (0, o.jsx)(ar, {
          open: !!m2,
          onOpenChange: (e11) => {
            e11 || I2();
          },
          width: 480,
          title: N2?.kind === "reveal" ? N2.rolled ? "Copy the new secret" : "Copy your new key" : "Create API key",
          description: N2?.kind === "reveal" ? `${N2.name}. Store it in your secret manager now.` : "Use separate keys per service, so you can roll one without touching the rest.",
          children: N2?.kind === "reveal" ? (0, o.jsx)(a4, { secret: N2.secret, onDone: I2 }) : (0, o.jsx)(
            a5,
            {
              onCancel: I2,
              onSubmit: (e11, a11, s11) => {
                let { key: n3, secret: l3 } = i2(e11, a11, s11);
                u2("active"), w2(n3.id), p2({ kind: "reveal", name: n3.name, secret: l3 }), t2(
                  "Key created",
                  `${n3.name}, ${e_(a11).toLowerCase()}.`
                );
              }
            },
            String(!!m2)
          )
        }),
        (0, o.jsx)(ao, {
          open: !!g2,
          onOpenChange: (e11) => {
            e11 || j2(null);
          },
          title: `Roll ${g2?.name ?? "key"}?`,
          description: "A new secret is created now. The current secret stops working in 24 hours, so deploy the new one before then.",
          confirm: "Roll key",
          onConfirm: () => {
            if (!g2) return;
            let e11 = n2(g2.id);
            w2(g2.id), p2({ kind: "reveal", name: g2.name, secret: e11, rolled: true }), t2(
              "Key rolled",
              "The old secret works until tomorrow, 14:32 UTC."
            );
          }
        }),
        (0, o.jsx)(ao, {
          open: !!y2,
          onOpenChange: (e11) => {
            e11 || k2(null);
          },
          title: `Revoke ${y2?.name ?? "key"}?`,
          description: "Requests with this key fail with 401 right away. This cannot be undone.",
          confirm: "Revoke key",
          danger: true,
          onConfirm: () => {
            y2 && (l2(y2.id), t2("Key revoked", `${y2.name} no longer authenticates.`, {
              tone: "danger"
            }));
          }
        })
      ]
    });
  }
  function a2({ value: e10, onSave: a10 }) {
    let [s10, t2] = (0, d.useState)(false), [i2, n2] = (0, d.useState)(e10), l2 = (0, d.useRef)(null), r2 = (0, d.useRef)(false);
    return ((0, d.useEffect)(() => {
      s10 && l2.current?.select();
    }, [s10]), s10) ? (0, o.jsx)("input", {
      ref: l2,
      className: aJ().nameInput,
      value: i2,
      "aria-label": "Key name",
      maxLength: 60,
      onChange: (e11) => n2(e11.target.value),
      onBlur: () => {
        if (t2(false), r2.current) {
          r2.current = false;
          return;
        }
        let s11 = i2.trim();
        s11 && s11 !== e10 ? a10(s11) : n2(e10);
      },
      onKeyDown: (a11) => {
        "Enter" === a11.key && (a11.preventDefault(), l2.current?.blur()), "Escape" === a11.key && (a11.preventDefault(), a11.stopPropagation(), r2.current = true, n2(e10), l2.current?.blur());
      }
    }) : (0, o.jsx)("button", {
      type: "button",
      className: aJ().nameButton,
      onClick: () => {
        n2(e10), t2(true);
      },
      title: "Click to rename",
      children: e10
    });
  }
  function a5({ onCancel: e10, onSubmit: a10 }) {
    let [s10, t2] = (0, d.useState)(""), [i2, n2] = (0, d.useState)("live"), [l2, r2] = (0, d.useState)("sending"), [c2, h2] = (0, d.useState)(false), u2 = c2 && !s10.trim() ? "Name the key, like Billing worker" : void 0, m2 = (e11) => {
      e11?.preventDefault(), h2(true), s10.trim() && a10(s10.trim(), l2, i2);
    };
    return (0, o.jsxs)("form", {
      className: aJ().form,
      onSubmit: m2,
      onKeyDown: (e11) => {
        "Enter" === e11.key && (e11.metaKey || e11.ctrlKey) && m2();
      },
      noValidate: true,
      children: [
        (0, o.jsxs)("div", {
          className: aJ().formRow,
          children: [
            (0, o.jsx)(ad, {
              label: "Name",
              error: u2,
              htmlFor: "key-name",
              children: (0, o.jsx)(ac, {
                id: "key-name",
                placeholder: "Billing worker",
                value: s10,
                onChange: (e11) => t2(e11.target.value),
                invalid: !!u2,
                autoFocus: true,
                autoComplete: "off"
              })
            }),
            (0, o.jsx)(ad, {
              label: "Environment",
              children: (0, o.jsx)(e9, {
                label: "Environment",
                value: i2,
                onChange: (e11) => n2(e11),
                items: [
                  { id: "live", label: "Live" },
                  { id: "test", label: "Test" }
                ]
              })
            })
          ]
        }),
        (0, o.jsx)(ad, {
          label: "Permission",
          children: (0, o.jsx)(ah, {
            label: "Permission",
            value: l2,
            onChange: r2,
            options: ep.map((e11) => ({
              id: e11.id,
              label: e11.label,
              detail: e11.detail
            }))
          })
        }),
        (0, o.jsxs)("div", {
          className: aJ().footer,
          children: [
            (0, o.jsx)(ai, {
              variant: "ghost",
              onClick: e10,
              children: "Cancel"
            }),
            (0, o.jsxs)(ai, {
              variant: "primary",
              type: "submit",
              children: ["Create key", (0, o.jsx)(aa, { keys: ["\u2318", "\u21B5"] })]
            })
          ]
        })
      ]
    });
  }
  function a4({ secret: e10, onDone: a10 }) {
    return (0, o.jsxs)("div", {
      className: aJ().form,
      children: [
        (0, o.jsxs)("div", {
          className: aJ().secret,
          children: [
            (0, o.jsx)("code", { children: e10 }),
            (0, o.jsx)(aM.CopyButton, {
              value: e10,
              label: "Copy key",
              iconOnly: true,
              variant: "plain",
              className: aJ().copy
            })
          ]
        }),
        (0, o.jsxs)("p", {
          className: aJ().warning,
          children: [
            (0, o.jsx)(a_.A, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": true
            }),
            (0, o.jsx)("span", {
              children: "You won\u2019t see this key again. If you lose it, roll the key to get a new secret."
            })
          ]
        }),
        (0, o.jsx)("div", {
          className: aJ().footer,
          children: (0, o.jsx)(ai, {
            variant: "primary",
            onClick: a10,
            autoFocus: true,
            children: "Done"
          })
        })
      ]
    });
  }
  var a6 = s(78780), a7 = s(89034), a3 = s(25182), a9 = s(20530), a8 = s(50680), se = s(26898), sa = s.n(se);
  let ss = {
    slack: "slack-color.svg",
    supabase: "supabase-color.svg",
    vercel: "vercel.svg"
  };
  function st(e10) {
    try {
      let a10 = new URL(e10);
      return { host: a10.host, path: "/" === a10.pathname ? "" : a10.pathname };
    } catch {
      return { host: e10.replace(/^https?:\/\//, ""), path: "" };
    }
  }
  let si = (e10, a10) => e10.deliveries.slice(0, a10), sn = (e10) => {
    let a10 = si(e10, 20);
    return a10.length ? a10.filter((e11) => e11.status < 400).length / a10.length : null;
  };
  async function sl(e10) {
    try {
      return await (0, aX.a)(e10), true;
    } catch {
      return false;
    }
  }
  function sr({ param: e10 }) {
    let { webhooks: a10, go: s10, notify: t2, addWebhook: i2 } = eN(), [n2, l2] = (0, d.useState)("new" === e10), [r2, c2] = (0, d.useState)(e10);
    e10 !== r2 && (c2(e10), "new" === e10 && l2(true));
    let h2 = a10.find((a11) => a11.id === e10), u2 = h2 ?? a10[0], m2 = () => {
      l2(false), "new" === e10 && s10("webhooks");
    };
    return (0, o.jsxs)("div", {
      className: sa().page,
      children: [
        (0, o.jsx)(an, {
          crumbs: [
            {
              label: "Webhooks",
              icon: (0, o.jsx)(v.A, {
                size: 15,
                strokeWidth: 1.75,
                "aria-hidden": true
              })
            }
          ],
          actions: (0, o.jsx)(ai, {
            variant: "primary",
            icon: (0, o.jsx)(b.A, {
              size: 14,
              strokeWidth: 2,
              "aria-hidden": true
            }),
            onClick: () => l2(true),
            className: sa().primary,
            children: "Add endpoint"
          })
        }),
        0 === a10.length ? (0, o.jsx)("div", {
          className: sa().emptyPage,
          children: (0, o.jsx)(al, {
            icon: (0, o.jsx)(v.A, {
              size: 20,
              strokeWidth: 1.75,
              "aria-hidden": true
            }),
            title: "No webhook endpoints",
            body: "Ferry posts delivery, bounce and verification events to your endpoints as they happen.",
            action: (0, o.jsx)(ai, {
              variant: "primary",
              onClick: () => l2(true),
              children: "Add endpoint"
            })
          })
        }) : (0, o.jsxs)("div", {
          className: sa().split,
          "data-detail": h2 ? "" : void 0,
          children: [
            (0, o.jsxs)("nav", {
              className: sa().list,
              "aria-label": "Endpoints",
              children: [
                (0, o.jsxs)("p", {
                  className: sa().listLabel,
                  children: [
                    "Endpoints ",
                    (0, o.jsx)("span", { children: a10.length })
                  ]
                }),
                a10.map((e11) => {
                  let { host: a11, path: t3 } = st(e11.url), i3 = sn(e11), n3 = e11.enabled && si(e11, 10).filter((e12) => e12.status >= 400).length >= 3;
                  return (0, o.jsxs)(
                    "a",
                    {
                      href: `#/webhooks/${e11.id}`,
                      className: sa().item,
                      "aria-current": e11.id === u2?.id ? "true" : void 0,
                      onClick: (a12) => {
                        a12.preventDefault(), s10("webhooks", e11.id);
                      },
                      children: [
                        (0, o.jsx)(so, { hook: e11 }),
                        (0, o.jsxs)("span", {
                          className: sa().itemText,
                          children: [
                            (0, o.jsx)("span", {
                              className: sa().itemHost,
                              children: a11
                            }),
                            (0, o.jsx)("span", {
                              className: sa().itemPath,
                              children: t3 || "/"
                            })
                          ]
                        }),
                        (0, o.jsx)("span", {
                          className: sa().itemMeta,
                          children: e11.enabled ? n3 ? (0, o.jsx)(e5, {
                            tone: "danger",
                            dot: true,
                            children: "Failing"
                          }) : null === i3 ? (0, o.jsx)("span", {
                            className: sa().itemRate,
                            children: "New"
                          }) : (0, o.jsxs)("span", {
                            className: sa().itemRate,
                            children: [Math.round(100 * i3), "%"]
                          }) : (0, o.jsx)(e5, { children: "Disabled" })
                        }),
                        (0, o.jsx)(eD.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          className: sa().itemChevron,
                          "aria-hidden": true
                        })
                      ]
                    },
                    e11.id
                  );
                })
              ]
            }),
            u2 ? (0, o.jsx)(sd, { hook: u2 }, u2.id) : null
          ]
        }),
        (0, o.jsx)(ar, {
          open: n2,
          onOpenChange: (e11) => {
            e11 || m2();
          },
          title: "Add endpoint",
          description: "Ferry signs every request, so you can verify it came from us.",
          width: 560,
          children: (0, o.jsx)(
            sm,
            {
              onCancel: m2,
              onSubmit: (e11, a11, n3) => {
                let r3 = i2(e11, a11, n3);
                l2(false), s10("webhooks", r3.id), t2(
                  "Endpoint added",
                  `${st(e11).host}, ${n3.length} ${1 === n3.length ? "event" : "events"}.`
                );
              }
            },
            String(n2)
          )
        })
      ]
    });
  }
  function so({ hook: e10, size: a10 = 24 }) {
    let s10 = st(e10.url).host, t2 = e10.logo ?? (/(^|\.)slack\.com$/.test(s10) ? "slack" : /(^|\.)supabase\.co$/.test(s10) ? "supabase" : /(^|\.)vercel\.app$/.test(s10) ? "vercel" : void 0);
    return t2 ? (0, o.jsx)(e0, { logo: ss[t2], size: a10 }) : /(^|\.)plume\.so$/.test(s10) ? (0, o.jsx)("span", {
      className: sa().tile,
      style: {
        width: a10,
        height: a10,
        borderRadius: Math.max(4, Math.round(0.26 * a10))
      },
      "aria-hidden": "true",
      children: (0, o.jsx)(ef, { size: Math.round(0.62 * a10) })
    }) : (0, o.jsx)("span", {
      className: sa().globe,
      style: { width: a10, height: a10 },
      "aria-hidden": "true",
      children: (0, o.jsx)(am.A, {
        size: Math.round(0.58 * a10),
        strokeWidth: 1.75
      })
    });
  }
  function sd({ hook: e10 }) {
    let a10, {
      go: s10,
      notify: t2,
      updateWebhook: i2,
      removeWebhook: n2,
      retryDelivery: l2
    } = eN(), [r2, c2] = (0, d.useState)(false), [h2, u2] = (0, d.useState)(false), [m2, p2] = (0, d.useState)(false), [_2, x2] = (0, d.useState)(false), [v2, g2] = (0, d.useState)("all"), [j2, y2] = (0, d.useState)(null), [b2, f2] = (0, d.useState)(() => /* @__PURE__ */ new Set()), { host: w2, path: N2 } = st(e10.url), C2 = sn(e10), T2 = si(e10, 20).slice().reverse(), S2 = e10.deliveries.filter((e11) => e11.status >= 400).length, A2 = "failed" === v2 ? e10.deliveries.filter((e11) => e11.status >= 400) : e10.deliveries, M2 = e10.deliveries.length ? e10.deliveries.slice(0, 20).reduce((e11, a11) => e11 + a11.ms, 0) / Math.min(20, e10.deliveries.length) : 0, $2 = () => {
      let a11 = e10.events[0] ?? "email.delivered", s11 = "wh-supabase" === e10.id, n3 = {
        id: `msg_${L(18)}`,
        event: a11,
        status: s11 ? 503 : 200,
        attempts: 1,
        ms: s11 ? 2140 : 96 + Math.round(120 * Math.random()),
        at: P.toISOString(),
        payload: {
          type: a11,
          test: true,
          created_at: P.toISOString(),
          data: {
            email_id: `em_${L(16)}`,
            to: ["delivered@ferry.dev"],
            subject: "Ferry test event"
          }
        },
        response: s11 ? "Service Unavailable: function cold start limit reached" : '{"received":true}'
      };
      i2(e10.id, { deliveries: [n3, ...e10.deliveries] }), g2("all"), y2(n3.id), t2(
        s11 ? "Test event failed" : "Test event delivered",
        s11 ? `${w2} returned 503.` : `${a11} in ${n3.ms}ms.`,
        { tone: s11 ? "danger" : "success" }
      );
    };
    return (0, o.jsxs)("section", {
      className: sa().detail,
      "aria-label": w2,
      children: [
        (0, o.jsxs)("header", {
          className: sa().head,
          children: [
            (0, o.jsxs)("button", {
              type: "button",
              className: sa().back,
              onClick: () => s10("webhooks"),
              children: [
                (0, o.jsx)(a6.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": true
                }),
                "Endpoints"
              ]
            }),
            (0, o.jsxs)("div", {
              className: sa().headMain,
              children: [
                (0, o.jsx)(so, { hook: e10, size: 32 }),
                (0, o.jsxs)("div", {
                  className: sa().headText,
                  children: [
                    (0, o.jsxs)("h1", {
                      className: sa().title,
                      children: [w2, (0, o.jsx)("span", { children: N2 })]
                    }),
                    (0, o.jsx)("p", {
                      className: sa().subtitle,
                      children: e10.description || "No description"
                    })
                  ]
                })
              ]
            }),
            (0, o.jsxs)("div", {
              className: sa().headActions,
              children: [
                (0, o.jsxs)("label", {
                  className: sa().enabled,
                  children: [
                    (0, o.jsx)("span", {
                      children: e10.enabled ? "Enabled" : "Disabled"
                    }),
                    (0, o.jsx)(a8.d, {
                      className: sa().switch,
                      checked: e10.enabled,
                      "aria-label": "Send events to this endpoint",
                      onCheckedChange: (a11) => {
                        i2(e10.id, { enabled: a11 }), t2(
                          a11 ? "Endpoint enabled" : "Endpoint disabled",
                          a11 ? "Queued events are being sent now." : "Events queue for up to 72 hours.",
                          { tone: a11 ? "success" : "neutral" }
                        );
                      }
                    })
                  ]
                }),
                (0, o.jsx)(e8, {
                  align: "end",
                  width: 210,
                  trigger: (0, o.jsx)(at, {
                    label: "Endpoint actions",
                    children: (0, o.jsx)(aY.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": true
                    })
                  }),
                  options: [
                    {
                      id: "test",
                      label: "Send test event",
                      icon: (0, o.jsx)(k.A, {
                        size: 15,
                        strokeWidth: 1.75,
                        "aria-hidden": true
                      })
                    },
                    {
                      id: "copy",
                      label: "Copy URL",
                      icon: (0, o.jsx)(aK.A, {
                        size: 15,
                        strokeWidth: 1.75,
                        "aria-hidden": true
                      })
                    },
                    "separator",
                    {
                      id: "delete",
                      label: "Delete endpoint",
                      icon: (0, o.jsx)(aG.A, {
                        size: 15,
                        strokeWidth: 1.75,
                        "aria-hidden": true
                      }),
                      danger: true
                    }
                  ],
                  onSelect: (a11) => {
                    "test" === a11 && $2(), "copy" === a11 && sl(e10.url).then(
                      (e11) => t2(e11 ? "URL copied" : "Could not copy", w2, {
                        tone: e11 ? "success" : "danger"
                      })
                    ), "delete" === a11 && p2(true);
                  }
                })
              ]
            })
          ]
        }),
        (0, o.jsxs)("div", {
          className: sa().facts,
          children: [
            (0, o.jsxs)("div", {
              className: sa().fact,
              children: [
                (0, o.jsx)("span", {
                  className: sa().factLabel,
                  children: "Success, last 20"
                }),
                (0, o.jsx)("span", {
                  className: sa().factValue,
                  children: null === C2 ? "No deliveries" : `${Math.round(100 * C2)}%`
                }),
                (0, o.jsx)("span", {
                  className: sa().strip,
                  "aria-hidden": "true",
                  children: Array.from({ length: 20 }, (e11, a11) => {
                    let s11 = T2[a11 - (20 - T2.length)];
                    return (0, o.jsx)(
                      "i",
                      {
                        "data-state": s11 ? s11.status >= 400 ? "failed" : "ok" : "empty"
                      },
                      a11
                    );
                  })
                })
              ]
            }),
            (0, o.jsxs)("div", {
              className: sa().fact,
              children: [
                (0, o.jsx)("span", {
                  className: sa().factLabel,
                  children: "Average response"
                }),
                (0, o.jsx)("span", {
                  className: sa().factValue,
                  children: e10.deliveries.length ? eJ(M2) : "None yet"
                })
              ]
            }),
            (0, o.jsxs)("div", {
              className: sa().fact,
              children: [
                (0, o.jsx)("span", {
                  className: sa().factLabel,
                  children: "Signing secret"
                }),
                (0, o.jsxs)("span", {
                  className: sa().secret,
                  children: [
                    (0, o.jsx)("code", {
                      children: r2 ? e10.secret : (a10 = e10.secret, `whsec_${"\u2022".repeat(20)}${a10.slice(-4)}`)
                    }),
                    (0, o.jsx)(as, {
                      label: r2 ? "Hide secret" : "Reveal secret",
                      children: (0, o.jsx)(at, {
                        label: r2 ? "Hide secret" : "Reveal secret",
                        onClick: () => c2((e11) => !e11),
                        children: r2 ? (0, o.jsx)(a7.A, {
                          size: 15,
                          strokeWidth: 1.75,
                          "aria-hidden": true
                        }) : (0, o.jsx)(a3.A, {
                          size: 15,
                          strokeWidth: 1.75,
                          "aria-hidden": true
                        })
                      })
                    }),
                    (0, o.jsx)(aM.CopyButton, {
                      value: e10.secret,
                      label: "Copy secret",
                      iconOnly: true,
                      variant: "plain",
                      className: sa().copy
                    }),
                    (0, o.jsx)(as, {
                      label: "Roll secret",
                      children: (0, o.jsx)(at, {
                        label: "Roll secret",
                        onClick: () => u2(true),
                        children: (0, o.jsx)(aZ.A, {
                          size: 15,
                          strokeWidth: 1.75,
                          "aria-hidden": true
                        })
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, o.jsxs)("div", {
          className: sa().section,
          children: [
            (0, o.jsxs)("div", {
              className: sa().sectionHead,
              children: [
                (0, o.jsxs)("h2", {
                  className: sa().sectionTitle,
                  children: [
                    "Events ",
                    (0, o.jsx)("span", { children: e10.events.length })
                  ]
                }),
                (0, o.jsx)(ai, {
                  size: "sm",
                  onClick: () => x2(true),
                  children: "Edit events"
                })
              ]
            }),
            (0, o.jsx)("div", {
              className: sa().events,
              children: e10.events.map(
                (e11) => (0, o.jsx)("code", { className: sa().event, children: e11 }, e11)
              )
            })
          ]
        }),
        (0, o.jsxs)("div", {
          className: sa().section,
          "data-grow": "",
          children: [
            (0, o.jsxs)("div", {
              className: sa().sectionHead,
              children: [
                (0, o.jsxs)("h2", {
                  className: sa().sectionTitle,
                  children: [
                    "Deliveries ",
                    (0, o.jsx)("span", { children: e10.deliveries.length })
                  ]
                }),
                (0, o.jsx)(e9, {
                  label: "Show deliveries",
                  value: v2,
                  onChange: (e11) => g2(e11),
                  items: [
                    { id: "all", label: "All" },
                    { id: "failed", label: `Failed ${S2}` }
                  ]
                })
              ]
            }),
            0 === A2.length ? (0, o.jsx)("div", {
              className: sa().emptyBox,
              children: (0, o.jsx)(al, {
                icon: (0, o.jsx)(k.A, {
                  size: 20,
                  strokeWidth: 1.75,
                  "aria-hidden": true
                }),
                title: "failed" === v2 ? "No failed deliveries" : "No deliveries yet",
                body: "failed" === v2 ? "Every event in this history reached your endpoint." : "Send a test event to check your endpoint responds with a 2xx.",
                action: "failed" === v2 ? (0, o.jsx)(ai, {
                  onClick: () => g2("all"),
                  children: "Show all"
                }) : (0, o.jsx)(ai, {
                  variant: "primary",
                  onClick: $2,
                  children: "Send test event"
                })
              })
            }) : (0, o.jsx)("div", {
              className: sa().tableWrap,
              children: (0, o.jsxs)("div", {
                className: sa().table,
                role: "table",
                "aria-label": "Deliveries",
                children: [
                  (0, o.jsxs)("div", {
                    className: sa().headRow,
                    role: "row",
                    children: [
                      (0, o.jsx)("span", { role: "columnheader" }),
                      (0, o.jsx)("span", {
                        role: "columnheader",
                        children: "Event"
                      }),
                      (0, o.jsx)("span", {
                        role: "columnheader",
                        children: "Status"
                      }),
                      (0, o.jsx)("span", {
                        role: "columnheader",
                        "data-align": "end",
                        children: "Attempts"
                      }),
                      (0, o.jsx)("span", {
                        role: "columnheader",
                        "data-align": "end",
                        children: "Duration"
                      }),
                      (0, o.jsx)("span", {
                        role: "columnheader",
                        children: "Time"
                      }),
                      (0, o.jsx)("span", {
                        role: "columnheader",
                        children: (0, o.jsx)("span", {
                          className: sa().srOnly,
                          children: "Actions"
                        })
                      })
                    ]
                  }),
                  A2.map(
                    (a11) => (0, o.jsx)(
                      sc,
                      {
                        delivery: a11,
                        open: j2 === a11.id,
                        retrying: b2.has(a11.id),
                        onToggle: () => y2((e11) => e11 === a11.id ? null : a11.id),
                        onRetry: () => {
                          f2((e11) => new Set(e11).add(a11.id)), window.setTimeout(() => {
                            l2(e10.id, a11.id), f2((e11) => {
                              let s11 = new Set(e11);
                              return s11.delete(a11.id), s11;
                            }), t2(
                              "Delivered on retry",
                              `${a11.event}, attempt ${a11.attempts + 1}.`
                            );
                          }, 700);
                        }
                      },
                      a11.id
                    )
                  )
                ]
              })
            })
          ]
        }),
        (0, o.jsx)(ar, {
          open: _2,
          onOpenChange: x2,
          title: "Edit events",
          description: `Choose what Ferry sends to ${w2}.`,
          width: 560,
          children: (0, o.jsx)(
            su,
            {
              initial: e10.events,
              onCancel: () => x2(false),
              onSave: (a11) => {
                i2(e10.id, { events: a11 }), x2(false), t2(
                  "Events updated",
                  `${a11.length} ${1 === a11.length ? "event" : "events"} for ${w2}.`
                );
              }
            },
            String(_2)
          )
        }),
        (0, o.jsx)(ao, {
          open: h2,
          onOpenChange: u2,
          title: "Roll signing secret?",
          description: "Ferry signs with both secrets for the next 24 hours, then only with the new one. Update your verification code before then.",
          confirm: "Roll secret",
          onConfirm: () => {
            i2(e10.id, { secret: `whsec_${L(32)}` }), c2(true), t2("Secret rolled", "The old secret keeps working for 24 hours.");
          }
        }),
        (0, o.jsx)(ao, {
          open: m2,
          onOpenChange: p2,
          title: `Delete ${w2}?`,
          description: "Ferry stops sending events to this endpoint and its delivery history is removed.",
          confirm: "Delete endpoint",
          danger: true,
          onConfirm: () => {
            let a11 = n2(e10.id);
            s10("webhooks"), t2("Endpoint deleted", w2, {
              tone: "danger",
              undo: () => {
                a11(), s10("webhooks", e10.id);
              }
            });
          }
        })
      ]
    });
  }
  function sc({ delivery: e10, open: a10, retrying: s10, onToggle: t2, onRetry: i2 }) {
    let n2 = (0, h.I)(), l2 = e10.status >= 400;
    return (0, o.jsxs)("div", {
      className: sa().rowGroup,
      "data-open": a10 ? "" : void 0,
      children: [
        (0, o.jsxs)("div", {
          className: sa().row,
          role: "row",
          tabIndex: 0,
          "aria-expanded": a10,
          onClick: t2,
          onKeyDown: (e11) => {
            ("Enter" === e11.key || " " === e11.key) && (e11.preventDefault(), t2());
          },
          children: [
            (0, o.jsx)("span", {
              role: "cell",
              className: sa().chevron,
              children: (0, o.jsx)(eD.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": true
              })
            }),
            (0, o.jsx)("span", {
              role: "cell",
              children: (0, o.jsx)("code", {
                className: sa().eventName,
                children: e10.event
              })
            }),
            (0, o.jsx)("span", {
              role: "cell",
              children: (0, o.jsx)(e2, { status: e10.status })
            }),
            (0, o.jsx)("span", {
              role: "cell",
              "data-align": "end",
              className: sa().num,
              children: e10.attempts
            }),
            (0, o.jsx)("span", {
              role: "cell",
              "data-align": "end",
              className: sa().num,
              children: eJ(e10.ms)
            }),
            (0, o.jsx)("span", {
              role: "cell",
              className: sa().time,
              children: eV(e10.at)
            }),
            (0, o.jsx)("span", {
              role: "cell",
              "data-align": "end",
              children: l2 ? (0, o.jsx)(ai, {
                size: "sm",
                variant: "ghost",
                disabled: s10,
                icon: (0, o.jsx)(aA.A, {
                  size: 13,
                  strokeWidth: 1.75,
                  "aria-hidden": true,
                  className: s10 ? sa().spin : void 0
                }),
                onClick: (e11) => {
                  e11.stopPropagation(), i2();
                },
                onPointerDown: (e11) => e11.stopPropagation(),
                children: s10 ? "Retrying" : "Retry"
              }) : null
            })
          ]
        }),
        (0, o.jsx)(eA.N, {
          initial: false,
          children: a10 ? (0, o.jsx)(m.PY1.div, {
            className: sa().expand,
            initial: n2 ? { opacity: 0 } : { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: n2 ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 },
            transition: n2 ? { duration: 0 } : eC.T.spring.smooth,
            children: (0, o.jsxs)("div", {
              className: sa().expandInner,
              children: [
                (0, o.jsxs)("div", {
                  className: sa().pane,
                  children: [
                    (0, o.jsx)("p", {
                      className: sa().paneLabel,
                      children: "Payload"
                    }),
                    (0, o.jsx)(a$.p, {
                      data: e10.payload,
                      rootName: "event",
                      defaultExpandDepth: 2,
                      searchable: false,
                      showPath: false,
                      maxHeight: 220,
                      label: "Event payload",
                      className: sa().json
                    })
                  ]
                }),
                (0, o.jsxs)("div", {
                  className: sa().pane,
                  children: [
                    (0, o.jsx)("p", {
                      className: sa().paneLabel,
                      children: "Response"
                    }),
                    (0, o.jsxs)("div", {
                      className: sa().response,
                      children: [
                        (0, o.jsxs)("div", {
                          className: sa().responseHead,
                          children: [
                            (0, o.jsx)(e2, { status: e10.status }),
                            (0, o.jsx)("span", { children: eJ(e10.ms) }),
                            (0, o.jsxs)("span", {
                              children: ["Attempt ", e10.attempts]
                            })
                          ]
                        }),
                        (0, o.jsx)("pre", { children: e10.response })
                      ]
                    }),
                    (0, o.jsxs)("p", {
                      className: sa().messageId,
                      children: [
                        (0, o.jsx)("span", { children: "Message" }),
                        (0, o.jsx)("code", { children: e10.id })
                      ]
                    })
                  ]
                })
              ]
            })
          }) : null
        })
      ]
    });
  }
  function sh({ value: e10, onChange: a10 }) {
    let [s10, t2] = (0, d.useState)(""), i2 = s10.trim().toLowerCase(), n2 = (0, d.useMemo)(
      () => ev.map((e11) => ({
        ...e11,
        events: e11.events.filter(
          (e12) => !i2 || `${e12.id} ${e12.detail}`.toLowerCase().includes(i2)
        )
      })).filter((e11) => e11.events.length),
      [i2]
    ), l2 = (s11) => a10(e10.includes(s11) ? e10.filter((e11) => e11 !== s11) : [...e10, s11]), r2 = (s11) => {
      a10(
        s11.every((a11) => e10.includes(a11)) ? e10.filter((e11) => !s11.includes(e11)) : [...e10, ...s11.filter((a11) => !e10.includes(a11))]
      );
    };
    return (0, o.jsxs)("div", {
      className: sa().picker,
      children: [
        (0, o.jsxs)("div", {
          className: sa().pickerBar,
          children: [
            (0, o.jsxs)("label", {
              className: sa().pickerSearch,
              children: [
                (0, o.jsx)(M.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": true
                }),
                (0, o.jsx)("input", {
                  value: s10,
                  onChange: (e11) => t2(e11.target.value),
                  placeholder: "Filter events",
                  "aria-label": "Filter events"
                }),
                s10 ? (0, o.jsx)("button", {
                  type: "button",
                  "aria-label": "Clear filter",
                  onClick: () => t2(""),
                  children: (0, o.jsx)(eE.A, {
                    size: 12,
                    strokeWidth: 1.75,
                    "aria-hidden": true
                  })
                }) : null
              ]
            }),
            (0, o.jsxs)("span", {
              className: sa().pickerCount,
              children: [e10.length, " selected"]
            }),
            (0, o.jsx)("button", {
              type: "button",
              className: sa().pickerLink,
              onClick: () => a10(e10.length === eg.length ? [] : eg),
              children: e10.length === eg.length ? "Clear" : "Select all"
            })
          ]
        }),
        (0, o.jsx)("div", {
          className: sa().pickerList,
          children: 0 === n2.length ? (0, o.jsxs)("p", {
            className: sa().pickerEmpty,
            children: ["No events match \u201C", s10, "\u201D."]
          }) : n2.map((a11) => {
            let s11 = a11.events.map((e11) => e11.id), t3 = s11.filter((a12) => e10.includes(a12)).length;
            return (0, o.jsxs)(
              "div",
              {
                className: sa().group,
                children: [
                  (0, o.jsxs)("div", {
                    className: sa().groupHead,
                    children: [
                      (0, o.jsx)(a9.S, {
                        className: sa().checkbox,
                        "aria-label": `All ${a11.label} events`,
                        checked: t3 === s11.length || !!t3 && "indeterminate",
                        onCheckedChange: () => r2(s11)
                      }),
                      (0, o.jsx)("button", {
                        type: "button",
                        className: sa().groupLabel,
                        onClick: () => r2(s11),
                        children: a11.label
                      }),
                      (0, o.jsxs)("span", {
                        className: sa().groupCount,
                        children: [t3, " of ", s11.length]
                      })
                    ]
                  }),
                  a11.events.map(
                    (a12) => (0, o.jsxs)(
                      "div",
                      {
                        className: sa().option,
                        onClick: () => l2(a12.id),
                        children: [
                          (0, o.jsx)("span", {
                            onClick: (e11) => e11.stopPropagation(),
                            className: sa().optionCheck,
                            children: (0, o.jsx)(a9.S, {
                              className: sa().checkbox,
                              "aria-label": a12.id,
                              checked: e10.includes(a12.id),
                              onCheckedChange: () => l2(a12.id)
                            })
                          }),
                          (0, o.jsx)("code", {
                            className: sa().optionId,
                            children: a12.id
                          }),
                          (0, o.jsx)("span", {
                            className: sa().optionDetail,
                            children: a12.detail
                          })
                        ]
                      },
                      a12.id
                    )
                  )
                ]
              },
              a11.id
            );
          })
        })
      ]
    });
  }
  function su({ initial: e10, onCancel: a10, onSave: s10 }) {
    let [t2, i2] = (0, d.useState)(e10);
    return (0, o.jsxs)("div", {
      className: sa().form,
      children: [
        (0, o.jsx)(sh, { value: t2, onChange: i2 }),
        (0, o.jsxs)("div", {
          className: sa().footer,
          children: [
            (0, o.jsx)(ai, {
              variant: "ghost",
              onClick: a10,
              children: "Cancel"
            }),
            (0, o.jsx)(ai, {
              variant: "primary",
              disabled: 0 === t2.length,
              onClick: () => s10(eg.filter((e11) => t2.includes(e11))),
              children: "Save events"
            })
          ]
        })
      ]
    });
  }
  function sm({ onCancel: e10, onSubmit: a10 }) {
    let [s10, t2] = (0, d.useState)(""), [i2, n2] = (0, d.useState)(""), [l2, r2] = (0, d.useState)([
      "email.delivered",
      "email.bounced",
      "email.complained"
    ]), [c2, h2] = (0, d.useState)(false), u2 = /^https:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+(:\d+)?(\/\S*)?$/i.test(
      s10.trim()
    ), m2 = c2 && !u2 ? "Use an https URL, like https://api.example.com/webhooks" : void 0, p2 = c2 && !l2.length ? "Choose at least one event" : void 0;
    return (0, o.jsxs)("form", {
      className: sa().form,
      onSubmit: (e11) => {
        e11?.preventDefault(), h2(true), u2 && l2.length && a10(
          s10.trim(),
          i2.trim(),
          eg.filter((e12) => l2.includes(e12))
        );
      },
      noValidate: true,
      children: [
        (0, o.jsx)(ad, {
          label: "Endpoint URL",
          error: m2,
          htmlFor: "hook-url",
          children: (0, o.jsx)(ac, {
            id: "hook-url",
            mono: true,
            placeholder: "https://api.plume.so/webhooks/ferry",
            value: s10,
            onChange: (e11) => t2(e11.target.value),
            invalid: !!m2,
            autoFocus: true,
            autoComplete: "off",
            spellCheck: false
          })
        }),
        (0, o.jsx)(ad, {
          label: "Description",
          htmlFor: "hook-description",
          children: (0, o.jsx)(ac, {
            id: "hook-description",
            placeholder: "What this endpoint does",
            value: i2,
            onChange: (e11) => n2(e11.target.value),
            autoComplete: "off"
          })
        }),
        (0, o.jsx)(ad, {
          label: "Events",
          error: p2,
          children: (0, o.jsx)(sh, { value: l2, onChange: r2 })
        }),
        (0, o.jsxs)("div", {
          className: sa().footer,
          children: [
            (0, o.jsx)(ai, {
              variant: "ghost",
              onClick: e10,
              children: "Cancel"
            }),
            (0, o.jsx)(ai, {
              variant: "primary",
              type: "submit",
              children: "Add endpoint"
            })
          ]
        })
      ]
    });
  }
  var sp = s(71019), s_ = s(36483), sx = s(39907), sv = s.n(sx);
  let sg = Date.parse(`${Y}T00:00:00Z`), sj = (P.getTime() - sg) / 864e5, sy = Math.round(
    (Date.parse(`${K}T00:00:00Z`) - Date.UTC(P.getUTCFullYear(), P.getUTCMonth(), P.getUTCDate())) / 864e5
  ), sb = { pro: 0.1, scale: 1, business: 5 }, sk = { email: 8e-4, sms: 79e-4, verify: 0.05 }, sf = {
    email: "var(--fy-email)",
    sms: "var(--fy-sms)",
    verify: "var(--fy-verify)"
  }, sw = ["email", "verify", "sms"], sN = (e10) => Z.reduce((a10, s10) => a10 + s10[e10], 0);
  function sC({ param: e10 }) {
    let { plan: a10, setPlan: s10, notify: t2 } = eN(), [i2, n2] = (0, d.useState)(false), l2 = V.find((e11) => e11.id === a10) ?? V[1], r2 = (0, d.useMemo)(() => {
      let e11 = sb[a10] ?? 1;
      return H.map((a11) => {
        let s11 = a11.included * e11, t3 = sN(a11.id), i3 = Math.round(sN(a11.id) / sj * 30), n3 = Math.max(0, i3 - s11);
        return {
          product: a11,
          included: s11,
          total: t3,
          projection: i3,
          over: n3,
          cost: n3 * sk[a11.id]
        };
      });
    }, [a10]), c2 = r2.reduce((e11, a11) => e11 + a11.cost, 0), h2 = (0, d.useRef)(null);
    return (0, d.useEffect)(() => {
      "invoices" === e10 && h2.current?.scrollIntoView({ block: "start" });
    }, [e10]), (0, o.jsxs)("div", {
      className: sv().page,
      children: [
        (0, o.jsx)(an, {
          crumbs: [
            {
              label: "Usage and billing",
              icon: (0, o.jsx)(g.A, {
                size: 15,
                strokeWidth: 1.75,
                "aria-hidden": true
              })
            }
          ],
          actions: (0, o.jsx)(ai, {
            variant: "primary",
            onClick: () => n2(true),
            children: "Change plan"
          })
        }),
        (0, o.jsx)("div", {
          className: sv().scroll,
          children: (0, o.jsxs)("div", {
            className: sv().inner,
            children: [
              (0, o.jsxs)("div", {
                className: sv().period,
                children: [
                  (0, o.jsxs)("span", {
                    className: sv().periodRange,
                    children: [eU(Y), " to ", eH(K)]
                  }),
                  (0, o.jsxs)("span", {
                    className: sv().periodMeta,
                    children: [sy, " days left in this billing period"]
                  })
                ]
              }),
              (0, o.jsx)("section", {
                className: sv().strip,
                "aria-label": "Usage this period",
                children: r2.map(
                  (e11) => (0, o.jsxs)(
                    "div",
                    {
                      className: sv().metric,
                      children: [
                        (0, o.jsxs)("div", {
                          className: sv().metricHead,
                          children: [
                            (0, o.jsx)("span", {
                              className: sv().swatch,
                              style: { background: sf[e11.product.id] },
                              "aria-hidden": "true"
                            }),
                            (0, o.jsx)("span", {
                              className: sv().metricLabel,
                              children: e11.product.label
                            }),
                            (0, o.jsxs)("span", {
                              className: sv().metricShare,
                              children: [
                                Math.round(e11.total / e11.included * 100),
                                "%"
                              ]
                            })
                          ]
                        }),
                        (0, o.jsxs)("div", {
                          className: sv().metricValue,
                          children: [
                            (0, o.jsx)(e4, {
                              value: e11.total,
                              className: sv().figure
                            }),
                            (0, o.jsxs)("span", {
                              className: sv().metricOf,
                              children: [
                                "of ",
                                eZ(e11.included),
                                " ",
                                e11.product.unit
                              ]
                            })
                          ]
                        }),
                        (0, o.jsx)(e6, {
                          value: e11.total,
                          max: e11.included,
                          hue: e11.product.hue,
                          label: `${e11.product.label} used this period`
                        }),
                        (0, o.jsxs)("p", {
                          className: sv().metricNote,
                          children: [
                            "Projected ",
                            eZ(e11.projection),
                            " by ",
                            eU(K),
                            e11.over > 0 ? (0, o.jsxs)("span", {
                              className: sv().over,
                              children: [
                                ", ",
                                eZ(e11.over),
                                " over, about ",
                                eG(e11.cost)
                              ]
                            }) : (0, o.jsx)("span", {
                              children: ", within the plan"
                            })
                          ]
                        })
                      ]
                    },
                    e11.product.id
                  )
                )
              }),
              (0, o.jsx)(sA, {}),
              (0, o.jsxs)("section", {
                className: sv().section,
                "aria-labelledby": "plan-title",
                children: [
                  (0, o.jsx)("h2", {
                    id: "plan-title",
                    className: sv().sectionTitle,
                    children: "Plan and payment"
                  }),
                  (0, o.jsxs)("div", {
                    className: sv().planGrid,
                    children: [
                      (0, o.jsxs)("div", {
                        className: sv().panel,
                        children: [
                          (0, o.jsxs)("div", {
                            className: sv().planHead,
                            children: [
                              (0, o.jsxs)("div", {
                                children: [
                                  (0, o.jsx)("p", {
                                    className: sv().planName,
                                    children: l2.name
                                  }),
                                  (0, o.jsx)("p", {
                                    className: sv().planDetail,
                                    children: l2.detail
                                  })
                                ]
                              }),
                              (0, o.jsxs)("p", {
                                className: sv().price,
                                children: [
                                  (0, o.jsx)(e4, {
                                    value: l2.price,
                                    format: (e11) => `$${Math.round(e11)}`
                                  }),
                                  (0, o.jsx)("span", {
                                    children: "per month"
                                  })
                                ]
                              })
                            ]
                          }),
                          (0, o.jsx)("ul", {
                            className: sv().limits,
                            children: l2.limits.map(
                              (e11) => (0, o.jsx)("li", { children: e11 }, e11)
                            )
                          }),
                          (0, o.jsxs)("div", {
                            className: sv().panelFoot,
                            children: [
                              (0, o.jsx)("span", {
                                className: sv().muted,
                                children: "Overage is billed at the end of the period"
                              }),
                              (0, o.jsx)(ai, {
                                size: "sm",
                                onClick: () => n2(true),
                                children: "Change plan"
                              })
                            ]
                          })
                        ]
                      }),
                      (0, o.jsx)("div", {
                        className: sv().panel,
                        children: (0, o.jsxs)("dl", {
                          className: sv().facts,
                          children: [
                            (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsx)("dt", {
                                  children: "Next invoice"
                                }),
                                (0, o.jsxs)("dd", {
                                  children: [
                                    (0, o.jsx)(e4, {
                                      value: l2.price + c2,
                                      format: eG,
                                      className: sv().strong
                                    }),
                                    (0, o.jsxs)("span", {
                                      className: sv().muted,
                                      children: [
                                        " on ",
                                        eU("2026-10-18"),
                                        ", ",
                                        eG(l2.price),
                                        " plan",
                                        c2 > 0 ? ` and ${eG(c2)} projected overage` : ""
                                      ]
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsx)("dt", {
                                  children: "Payment method"
                                }),
                                (0, o.jsxs)("dd", {
                                  className: sv().card,
                                  children: [
                                    (0, o.jsx)(sp.A, {
                                      size: 15,
                                      strokeWidth: 1.75,
                                      className: sv().cardIcon,
                                      "aria-hidden": true
                                    }),
                                    (0, o.jsx)("span", {
                                      children: "Visa ending 4821"
                                    }),
                                    (0, o.jsx)("span", {
                                      className: sv().muted,
                                      children: "Expires 08/28"
                                    }),
                                    (0, o.jsx)(ai, {
                                      size: "sm",
                                      variant: "ghost",
                                      className: sv().inlineAction,
                                      onClick: () => t2(
                                        "Payment method",
                                        "In your app this opens the Stripe card form.",
                                        { tone: "neutral" }
                                      ),
                                      children: "Update"
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsx)("dt", {
                                  children: "Billing email"
                                }),
                                (0, o.jsx)("dd", {
                                  children: (0, o.jsx)(sM, {})
                                })
                              ]
                            })
                          ]
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, o.jsxs)("section", {
                ref: h2,
                className: sv().section,
                "aria-labelledby": "invoices-title",
                children: [
                  (0, o.jsx)("h2", {
                    id: "invoices-title",
                    className: sv().sectionTitle,
                    children: "Invoices"
                  }),
                  (0, o.jsx)(s$, {})
                ]
              })
            ]
          })
        }),
        (0, o.jsx)(sI, {
          open: i2,
          onOpenChange: n2,
          current: a10,
          onConfirm: (e11) => {
            let i3 = V.find((a11) => a11.id === e11);
            if (!i3 || e11 === a10) return;
            let n3 = i3.price > l2.price;
            s10(e11), t2(
              `Moved to ${i3.name}`,
              n3 ? `Prorated today, $${i3.price} per month from Oct 18.` : `Takes effect on Oct 18, $${i3.price} per month.`
            );
          }
        })
      ]
    });
  }
  let sT = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }), sS = (l = Z.slice(-8, -1), r = (e10) => Math.round(l.reduce((a10, s10) => a10 + s10[e10], 0) / l.length), Array.from({ length: 30 }, (e10, a10) => {
    let s10 = sg + 864e5 * a10, t2 = new Date(s10).toISOString().slice(0, 10), i2 = Z[a10];
    return {
      key: t2,
      date: t2,
      label: sT.format(s10),
      axis: (a10 % 5 == 0 || 29 === a10) && Math.abs(a10 - (Z.length - 1)) > 2 ? eU(t2) : void 0,
      values: i2 ? { email: i2.email, sms: i2.sms, verify: i2.verify } : { email: r("email"), sms: r("sms"), verify: r("verify") },
      future: !i2,
      today: a10 === Z.length - 1
    };
  }));
  function sA() {
    let e10, a10, s10 = (0, h.I)(), t2 = (0, d.useRef)(null), [i2, n2] = (0, d.useState)(0), [l2, r2] = (0, d.useState)([]), [c2, u2] = (0, d.useState)(null);
    (0, d.useLayoutEffect)(() => {
      let e11 = t2.current;
      if (!e11) return;
      let a11 = new ResizeObserver(() => n2(e11.clientWidth));
      return a11.observe(e11), n2(e11.clientWidth), () => a11.disconnect();
    }, []);
    let p2 = sw.filter((e11) => !l2.includes(e11)), _2 = Math.max(1, ...sS.map((e11) => p2.reduce((a11, s11) => a11 + e11.values[s11], 0))), x2 = (e10 = _2 / 4, a10 = 10 ** Math.floor(Math.log10(e10)), [1, 2, 2.5, 5, 10].map((e11) => e11 * a10).find((a11) => a11 >= e10) ?? e10), v2 = Math.ceil(_2 / x2) * x2, g2 = Array.from({ length: Math.round(v2 / x2) + 1 }, (e11, a11) => a11 * x2), j2 = 182, y2 = Math.max(0, i2 - 44 - 4) / sS.length, b2 = Math.max(3, Math.min(18, 0.62 * y2)), k2 = (e11) => 12 + j2 - e11 / v2 * j2, f2 = s10 ? { duration: 0 } : eC.T.spring.smooth, w2 = H.map((e11) => ({
      product: e11,
      value: Z.reduce((a11, s11) => a11 + s11[e11.id], 0)
    })), N2 = null === c2 ? null : sS[c2], C2 = null === c2 ? 0 : 44 + y2 * (c2 + 0.5);
    return (0, o.jsxs)("section", {
      className: sv().chartPanel,
      "aria-labelledby": "usage-chart-title",
      children: [
        (0, o.jsxs)("div", {
          className: sv().chartHead,
          children: [
            (0, o.jsxs)("div", {
              children: [
                (0, o.jsx)("h2", {
                  id: "usage-chart-title",
                  className: sv().sectionTitle,
                  children: "Daily usage by product"
                }),
                (0, o.jsx)("p", {
                  className: sv().muted,
                  children: "Faint bars are the projection for the rest of the period"
                })
              ]
            }),
            (0, o.jsx)("div", {
              className: sv().legend,
              role: "group",
              "aria-label": "Show products",
              children: w2.map(({ product: e11, value: a11 }) => {
                let s11 = !l2.includes(e11.id);
                return (0, o.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: sv().legendItem,
                    "aria-pressed": s11,
                    onClick: () => {
                      let a12;
                      return a12 = e11.id, r2(
                        (e12) => e12.includes(a12) ? e12.filter((e13) => e13 !== a12) : e12.length === sw.length - 1 ? e12 : [...e12, a12]
                      );
                    },
                    children: [
                      (0, o.jsx)("span", {
                        className: sv().legendSwatch,
                        style: { "--swatch": sf[e11.id] },
                        "aria-hidden": "true"
                      }),
                      (0, o.jsx)("span", { children: e11.label }),
                      (0, o.jsx)("span", {
                        className: sv().legendValue,
                        children: eZ(a11)
                      })
                    ]
                  },
                  e11.id
                );
              })
            })
          ]
        }),
        (0, o.jsxs)("div", {
          ref: t2,
          className: sv().chart,
          onPointerLeave: () => u2(null),
          children: [
            i2 > 0 ? (0, o.jsxs)("svg", {
              width: i2,
              height: 220,
              role: "img",
              "aria-label": "Stacked daily usage for email, SMS and verify this billing period",
              children: [
                g2.map(
                  (e11) => (0, o.jsxs)(
                    m.PY1.g,
                    {
                      initial: false,
                      animate: { y: k2(e11) },
                      transition: f2,
                      children: [
                        (0, o.jsx)("line", {
                          x1: 44,
                          x2: i2 - 4,
                          y1: 0,
                          y2: 0,
                          className: 0 === e11 ? sv().baseline : sv().grid
                        }),
                        (0, o.jsx)("text", {
                          x: 36,
                          y: 0,
                          dy: "0.32em",
                          textAnchor: "end",
                          className: sv().tick,
                          children: eZ(e11)
                        })
                      ]
                    },
                    e11
                  )
                ),
                sS.map((e11, a11) => {
                  let s11 = 44 + y2 * (a11 + 0.5), t3 = 0;
                  return (0, o.jsxs)(
                    "g",
                    {
                      opacity: null !== c2 && c2 !== a11 ? 0.55 : 1,
                      className: sv().slotGroup,
                      children: [
                        (0, o.jsx)("rect", {
                          x: 44 + y2 * a11,
                          y: 12,
                          width: y2,
                          height: j2,
                          className: sv().hit,
                          "data-active": c2 === a11 ? "" : void 0,
                          onPointerEnter: () => u2(a11),
                          onPointerDown: () => u2(a11)
                        }),
                        sw.map((a12, i3) => {
                          let n3 = l2.includes(a12) ? 0 : e11.values[a12], r3 = k2(t3), d2 = k2(t3 += n3), c3 = p2[p2.length - 1] === a12;
                          return (0, o.jsx)(
                            m.PY1.rect,
                            {
                              x: s11 - b2 / 2,
                              width: b2,
                              rx: 2 * !!c3,
                              initial: false,
                              animate: {
                                y: d2,
                                height: Math.max(
                                  0,
                                  r3 - d2 - 0.75 * (n3 > 0 && i3 > 0)
                                )
                              },
                              transition: f2,
                              className: sv().bar,
                              "data-future": e11.future ? "" : void 0,
                              style: { fill: sf[a12] },
                              pointerEvents: "none"
                            },
                            a12
                          );
                        }),
                        e11.axis && (i2 > 560 || a11 % 10 == 0) ? (0, o.jsx)("text", {
                          x: s11,
                          y: 212,
                          textAnchor: 0 === a11 ? "start" : a11 === sS.length - 1 ? "end" : "middle",
                          dx: 0 === a11 ? -b2 / 2 : a11 === sS.length - 1 ? b2 / 2 : 0,
                          className: sv().tick,
                          children: e11.axis
                        }) : null,
                        e11.today ? (0, o.jsx)("text", {
                          x: s11,
                          y: 212,
                          textAnchor: "middle",
                          className: sv().todayTick,
                          children: "Today"
                        }) : null
                      ]
                    },
                    e11.key
                  );
                })
              ]
            }) : null,
            (0, o.jsx)(eA.N, {
              children: N2 ? (0, o.jsxs)(
                m.PY1.div,
                {
                  className: sv().tooltip,
                  style: { left: Math.min(Math.max(C2, 96), i2 - 96) },
                  initial: s10 ? { opacity: 0 } : { opacity: 0, y: 4 },
                  animate: { opacity: 1, y: 0 },
                  exit: {
                    opacity: 0,
                    transition: { duration: eC.T.duration.instant }
                  },
                  transition: s10 ? { duration: 0 } : { duration: eC.T.duration.fast },
                  children: [
                    (0, o.jsxs)("p", {
                      className: sv().tipTitle,
                      children: [
                        N2.label,
                        N2.today ? ", so far" : N2.future ? ", projected" : ""
                      ]
                    }),
                    [...sw].reverse().filter((e11) => !l2.includes(e11)).map(
                      (e11) => (0, o.jsxs)(
                        "p",
                        {
                          className: sv().tipRow,
                          children: [
                            (0, o.jsx)("span", {
                              className: sv().swatch,
                              style: { background: sf[e11] },
                              "aria-hidden": "true"
                            }),
                            (0, o.jsx)("span", {
                              children: H.find((a11) => a11.id === e11)?.label
                            }),
                            (0, o.jsx)("span", {
                              className: sv().tipValue,
                              children: eK(N2.values[e11])
                            })
                          ]
                        },
                        e11
                      )
                    )
                  ]
                },
                "tip"
              ) : null
            })
          ]
        })
      ]
    });
  }
  function sM() {
    let { notify: e10 } = eN(), [a10, s10] = (0, d.useState)("billing@plume.so"), [t2, i2] = (0, d.useState)(null), n2 = (0, d.useRef)(null), l2 = null !== t2;
    (0, d.useEffect)(() => {
      l2 && n2.current?.select();
    }, [l2]);
    let r2 = () => {
      if (null === t2) return;
      let n3 = t2.trim();
      if (i2(null), n3 && n3 !== a10) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n3))
          return void e10(
            "Not saved",
            "That does not look like an email address.",
            { tone: "danger" }
          );
        s10(n3), e10("Billing email updated", `Invoices go to ${n3}.`);
      }
    };
    return null !== t2 ? (0, o.jsx)("input", {
      ref: n2,
      className: sv().inlineInput,
      value: t2,
      "aria-label": "Billing email",
      onChange: (e11) => i2(e11.target.value),
      onBlur: r2,
      onKeyDown: (e11) => {
        "Enter" === e11.key && r2(), "Escape" === e11.key && (e11.stopPropagation(), i2(null));
      }
    }) : (0, o.jsx)("button", {
      type: "button",
      className: sv().inlineEdit,
      onClick: () => i2(a10),
      "aria-label": `Billing email: ${a10}. Click to edit`,
      children: a10
    });
  }
  function s$() {
    let { notify: e10 } = eN();
    return G.length ? (0, o.jsx)("div", {
      className: sv().tableWrap,
      children: (0, o.jsxs)("table", {
        className: sv().table,
        children: [
          (0, o.jsx)("thead", {
            children: (0, o.jsxs)("tr", {
              children: [
                (0, o.jsx)("th", { scope: "col", children: "Invoice" }),
                (0, o.jsx)("th", { scope: "col", children: "Date" }),
                (0, o.jsx)("th", { scope: "col", children: "Period" }),
                (0, o.jsx)("th", { scope: "col", children: "Plan" }),
                (0, o.jsx)("th", {
                  scope: "col",
                  "data-align": "end",
                  children: "Amount"
                }),
                (0, o.jsx)("th", { scope: "col", children: "Status" }),
                (0, o.jsx)("th", {
                  scope: "col",
                  children: (0, o.jsx)("span", {
                    className: sv().srOnly,
                    children: "Download"
                  })
                })
              ]
            })
          }),
          (0, o.jsx)("tbody", {
            children: G.map(
              (a10) => (0, o.jsxs)(
                "tr",
                {
                  children: [
                    (0, o.jsx)("td", {
                      className: sv().mono,
                      children: a10.id
                    }),
                    (0, o.jsx)("td", { children: eH(a10.date) }),
                    (0, o.jsx)("td", {
                      className: sv().secondary,
                      children: a10.period
                    }),
                    (0, o.jsx)("td", {
                      className: sv().secondary,
                      children: a10.plan
                    }),
                    (0, o.jsx)("td", {
                      "data-align": "end",
                      className: sv().num,
                      children: eG(a10.amount)
                    }),
                    (0, o.jsx)("td", {
                      children: (0, o.jsx)(e5, {
                        tone: "paid" === a10.status ? "success" : "due" === a10.status ? "warning" : "neutral",
                        dot: true,
                        children: "paid" === a10.status ? "Paid" : "due" === a10.status ? "Due" : "Refunded"
                      })
                    }),
                    (0, o.jsx)("td", {
                      "data-align": "end",
                      children: (0, o.jsx)(ai, {
                        size: "sm",
                        variant: "ghost",
                        icon: (0, o.jsx)(aN.A, {
                          size: 13,
                          strokeWidth: 1.75,
                          "aria-hidden": true
                        }),
                        onClick: () => e10(`${a10.id} downloaded`, `PDF, ${eG(a10.amount)}.`),
                        children: "PDF"
                      })
                    })
                  ]
                },
                a10.id
              )
            )
          })
        ]
      })
    }) : (0, o.jsx)(al, {
      icon: (0, o.jsx)(s_.A, {
        size: 20,
        strokeWidth: 1.75,
        "aria-hidden": true
      }),
      title: "No invoices yet",
      body: "Your first invoice arrives at the end of this billing period."
    });
  }
  function sI({ open: e10, onOpenChange: a10, current: s10, onConfirm: t2 }) {
    let [i2, n2] = (0, d.useState)(s10), [l2, r2] = (0, d.useState)(e10);
    e10 !== l2 && (r2(e10), e10 && n2(s10));
    let c2 = V.find((e11) => e11.id === i2), h2 = i2 === s10;
    return (0, o.jsx)(ar, {
      open: e10,
      onOpenChange: a10,
      title: "Change plan",
      description: "Upgrades apply now and are prorated. Downgrades start with the next period.",
      width: 480,
      footer: (0, o.jsxs)(o.Fragment, {
        children: [
          (0, o.jsx)(ai, {
            variant: "ghost",
            onClick: () => a10(false),
            children: "Cancel"
          }),
          (0, o.jsx)(ai, {
            variant: "primary",
            disabled: h2,
            onClick: () => {
              t2(i2), a10(false);
            },
            children: h2 ? "Current plan" : `Switch to ${c2?.name}`
          })
        ]
      }),
      children: (0, o.jsx)(ah, {
        label: "Plans",
        value: i2,
        onChange: n2,
        options: V.map((e11) => ({
          id: e11.id,
          label: (0, o.jsxs)("span", {
            className: sv().choiceLabel,
            children: [
              e11.name,
              e11.id === s10 ? (0, o.jsx)(e5, { tone: "accent", children: "Current" }) : null
            ]
          }),
          detail: `${e11.detail}. ${e11.limits.slice(0, 2).join(", ")}.`,
          aside: (0, o.jsxs)("span", {
            className: sv().choicePrice,
            children: ["$", e11.price, (0, o.jsx)("span", { children: "/mo" })]
          })
        }))
      })
    });
  }
  var sE = s(75796), sP = s(20508), sD = s(96220), sR = s(99953), sL = s.n(sR);
  let sq = (e10) => /^[A-Z][a-z]{2} \d/.test(e10) ? e10 : e10.charAt(0).toLowerCase() + e10.slice(1);
  function sW({ param: e10 }) {
    let { members: a10, go: s10 } = eN(), t2 = "members" === e10 || "domains" === e10 ? e10 : "general";
    return (0, o.jsxs)("div", {
      className: sL().page,
      children: [
        (0, o.jsx)(an, {
          crumbs: [
            {
              label: "Settings",
              icon: (0, o.jsx)(j.A, {
                size: 15,
                strokeWidth: 1.75,
                "aria-hidden": true
              })
            }
          ]
        }),
        (0, o.jsx)("div", {
          className: sL().tabBar,
          children: (0, o.jsx)(e3, {
            label: "Settings sections",
            value: t2,
            onChange: (e11) => s10("settings", "general" === e11 ? void 0 : e11),
            items: [
              { id: "general", label: "General" },
              { id: "members", label: "Members", count: a10.length },
              { id: "domains", label: "Domains", count: sK.length }
            ]
          })
        }),
        (0, o.jsx)("div", {
          className: sL().scroll,
          children: (0, o.jsxs)("div", {
            className: sL().inner,
            children: [
              "general" === t2 && (0, o.jsx)(sO, {}),
              "members" === t2 && (0, o.jsx)(sV, {}),
              "domains" === t2 && (0, o.jsx)(sZ, {})
            ]
          })
        })
      ]
    });
  }
  function sz({ label: e10, detail: a10, children: s10 }) {
    return (0, o.jsxs)("div", {
      className: sL().row,
      children: [
        (0, o.jsxs)("div", {
          className: sL().rowText,
          children: [
            (0, o.jsx)("span", { className: sL().rowLabel, children: e10 }),
            a10 ? (0, o.jsx)("span", { className: sL().rowDetail, children: a10 }) : null
          ]
        }),
        (0, o.jsx)("div", { className: sL().rowControl, children: s10 })
      ]
    });
  }
  let sF = "prj_8Hq2vLx9Tn";
  function sO() {
    let { project: e10, updateProject: a10, notify: s10 } = eN(), [t2, i2] = (0, d.useState)(true), [n2, l2] = (0, d.useState)(false), [r2, c2] = (0, d.useState)(false);
    return (0, o.jsxs)(o.Fragment, {
      children: [
        (0, o.jsxs)("section", {
          className: sL().section,
          "aria-labelledby": "project-title",
          children: [
            (0, o.jsx)("h2", {
              id: "project-title",
              className: sL().sectionTitle,
              children: "Project"
            }),
            (0, o.jsxs)("div", {
              className: sL().panel,
              children: [
                (0, o.jsxs)(sz, {
                  label: "Name",
                  detail: "Shown in the project switcher and on invoices",
                  children: [
                    (0, o.jsx)(ef, { size: 18 }),
                    (0, o.jsx)(sB, {
                      value: e10.name,
                      label: "Project name",
                      onSave: (e11) => {
                        a10({ name: e11 }), s10("Project renamed", `Now called ${e11}.`);
                      }
                    })
                  ]
                }),
                (0, o.jsxs)(sz, {
                  label: "Project ID",
                  detail: "Used by the CLI and in support requests",
                  children: [
                    (0, o.jsx)("code", {
                      className: sL().idValue,
                      children: sF
                    }),
                    (0, o.jsx)(aM.CopyButton, {
                      value: sF,
                      label: "Copy project ID",
                      iconOnly: true,
                      variant: "plain",
                      className: sL().copy
                    })
                  ]
                }),
                (0, o.jsx)(sz, {
                  label: "Region",
                  detail: "Where Ferry stores messages and logs for this project",
                  children: (0, o.jsx)("div", {
                    className: sL().select,
                    children: (0, o.jsx)(sD.l, {
                      label: "Region",
                      options: U,
                      value: e10.region,
                      className: sL().selectTrigger,
                      onValueChange: (e11) => {
                        a10({ region: e11 }), s10(
                          "Region changed",
                          `New messages are stored in ${U.find((a11) => a11.value === e11)?.label}.`
                        );
                      }
                    })
                  })
                }),
                (0, o.jsx)(sz, {
                  label: "Environment",
                  detail: "Staging and development projects only send to verified addresses",
                  children: (0, o.jsx)(e9, {
                    label: "Environment",
                    value: e10.env,
                    onChange: (e11) => {
                      a10({ env: e11 }), s10(
                        `Marked as ${e11.toLowerCase()}`,
                        "Production" === e11 ? "Messages go to every recipient." : "Only verified addresses receive messages.",
                        { tone: "neutral" }
                      );
                    },
                    items: [
                      { id: "Production", label: "Production" },
                      { id: "Staging", label: "Staging" },
                      { id: "Development", label: "Development" }
                    ]
                  })
                })
              ]
            })
          ]
        }),
        (0, o.jsxs)("section", {
          className: sL().section,
          "aria-labelledby": "tracking-title",
          children: [
            (0, o.jsx)("h2", {
              id: "tracking-title",
              className: sL().sectionTitle,
              children: "Tracking"
            }),
            (0, o.jsxs)("div", {
              className: sL().panel,
              children: [
                (0, o.jsx)(sz, {
                  label: "Open tracking",
                  detail: "Adds a 1px image to HTML email to record opens",
                  children: (0, o.jsx)(a8.d, {
                    "aria-label": "Open tracking",
                    checked: t2,
                    onCheckedChange: (e11) => {
                      i2(e11), s10(
                        e11 ? "Open tracking on" : "Open tracking off",
                        "Applies to emails sent from now on.",
                        { tone: "neutral" }
                      );
                    }
                  })
                }),
                (0, o.jsx)(sz, {
                  label: "Click tracking",
                  detail: "Rewrites links through track.plume.so to record clicks",
                  children: (0, o.jsx)(a8.d, {
                    "aria-label": "Click tracking",
                    checked: n2,
                    onCheckedChange: (e11) => {
                      l2(e11), s10(
                        e11 ? "Click tracking on" : "Click tracking off",
                        "Applies to emails sent from now on.",
                        { tone: "neutral" }
                      );
                    }
                  })
                })
              ]
            })
          ]
        }),
        (0, o.jsxs)("section", {
          className: sL().section,
          "aria-labelledby": "danger-title",
          children: [
            (0, o.jsx)("h2", {
              id: "danger-title",
              className: sL().sectionTitle,
              children: "Danger zone"
            }),
            (0, o.jsx)("div", {
              className: `${sL().panel} ${sL().danger}`,
              children: (0, o.jsx)(sz, {
                label: "Delete project",
                detail: "Revokes every key, stops webhooks and removes logs after 30 days",
                children: (0, o.jsx)(ai, {
                  variant: "danger",
                  icon: (0, o.jsx)(aG.A, {
                    size: 14,
                    strokeWidth: 1.75,
                    "aria-hidden": true
                  }),
                  onClick: () => c2(true),
                  children: "Delete project"
                })
              })
            })
          ]
        }),
        (0, o.jsx)(sU, {
          open: r2,
          onOpenChange: c2,
          name: e10.name,
          onConfirm: () => s10(`${e10.name} deleted`, "This is a sample, nothing was removed.", {
            tone: "danger"
          })
        })
      ]
    });
  }
  function sB({ value: e10, label: a10, onSave: s10 }) {
    let [t2, i2] = (0, d.useState)(null), n2 = (0, d.useRef)(null), l2 = null !== t2;
    (0, d.useEffect)(() => {
      l2 && n2.current?.select();
    }, [l2]);
    let r2 = () => {
      if (null === t2) return;
      let a11 = t2.trim();
      i2(null), a11 && a11 !== e10 && s10(a11);
    };
    return l2 ? (0, o.jsx)("input", {
      ref: n2,
      className: sL().inlineInput,
      value: t2,
      "aria-label": a10,
      onChange: (e11) => i2(e11.target.value),
      onBlur: r2,
      onKeyDown: (e11) => {
        "Enter" === e11.key && r2(), "Escape" === e11.key && (e11.stopPropagation(), i2(null));
      }
    }) : (0, o.jsx)("button", {
      type: "button",
      className: sL().inlineEdit,
      onClick: () => i2(e10),
      "aria-label": `${a10}: ${e10}. Click to edit`,
      children: (0, o.jsx)("span", { children: e10 })
    });
  }
  function sU({ open: e10, onOpenChange: a10, name: s10, onConfirm: t2 }) {
    let [i2, n2] = (0, d.useState)(""), [l2, r2] = (0, d.useState)(e10);
    e10 !== l2 && (r2(e10), e10 && n2(""));
    let c2 = i2.trim() === s10, h2 = (e11) => {
      e11?.preventDefault(), c2 && (t2(), a10(false));
    };
    return (0, o.jsx)(ar, {
      open: e10,
      onOpenChange: a10,
      title: `Delete ${s10}`,
      description: "Every key stops working at once and webhooks stop sending. This cannot be undone.",
      width: 440,
      footer: (0, o.jsxs)(o.Fragment, {
        children: [
          (0, o.jsx)(ai, {
            variant: "ghost",
            onClick: () => a10(false),
            children: "Cancel"
          }),
          (0, o.jsx)(ai, {
            variant: "danger",
            disabled: !c2,
            onClick: () => h2(),
            children: "Delete project"
          })
        ]
      }),
      children: (0, o.jsx)("form", {
        onSubmit: h2,
        children: (0, o.jsx)(ad, {
          label: `Type ${s10} to confirm`,
          htmlFor: "delete-confirm",
          children: (0, o.jsx)(ac, {
            id: "delete-confirm",
            value: i2,
            onChange: (e11) => n2(e11.target.value),
            placeholder: s10,
            autoComplete: "off",
            autoFocus: true
          })
        })
      })
    });
  }
  let sH = q.filter((e10) => "owner" !== e10.id);
  function sV() {
    let {
      members: e10,
      invite: a10,
      setRole: s10,
      removeMember: t2,
      notify: i2
    } = eN(), [n2, l2] = (0, d.useState)(""), [r2, c2] = (0, d.useState)("developer"), [h2, u2] = (0, d.useState)(), m2 = e10.filter((e11) => !e11.pending), p2 = e10.filter((e11) => e11.pending);
    return (0, o.jsxs)("section", {
      className: sL().section,
      "aria-labelledby": "members-title",
      children: [
        (0, o.jsx)("div", {
          className: sL().sectionHead,
          children: (0, o.jsxs)("div", {
            children: [
              (0, o.jsx)("h2", {
                id: "members-title",
                className: sL().sectionTitle,
                children: "Members"
              }),
              (0, o.jsxs)("p", {
                className: sL().sectionBody,
                children: [
                  m2.length,
                  " people",
                  p2.length ? `, ${p2.length} pending ${1 === p2.length ? "invitation" : "invitations"}` : "",
                  ". Members can see every project in Plume."
                ]
              })
            ]
          })
        }),
        (0, o.jsxs)("div", {
          className: sL().panel,
          children: [
            (0, o.jsxs)("form", {
              className: sL().invite,
              onSubmit: (s11) => {
                s11.preventDefault();
                let t3 = n2.trim().toLowerCase();
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t3) ? e10.some((e11) => e11.email === t3) ? u2("Already a member of this project") : void (a10(t3, r2), i2(
                  "Invitation sent",
                  `${t3} joins as ${W(r2).toLowerCase()}.`
                ), l2(""), u2(void 0)) : u2("Enter an email address like name@plume.so");
              },
              noValidate: true,
              children: [
                (0, o.jsxs)("div", {
                  className: sL().inviteField,
                  children: [
                    (0, o.jsx)(ac, {
                      type: "email",
                      value: n2,
                      onChange: (e11) => {
                        l2(e11.target.value), h2 && u2(void 0);
                      },
                      placeholder: "Invite by email",
                      "aria-label": "Email address to invite",
                      invalid: !!h2
                    }),
                    h2 ? (0, o.jsx)("p", {
                      className: sL().inviteError,
                      role: "alert",
                      children: h2
                    }) : null
                  ]
                }),
                (0, o.jsx)(e8, {
                  label: "Role",
                  align: "end",
                  width: 260,
                  trigger: (0, o.jsxs)("button", {
                    type: "button",
                    className: sL().roleButton,
                    children: [
                      (0, o.jsx)("span", { children: W(r2) }),
                      (0, o.jsx)(aS.A, {
                        size: 14,
                        strokeWidth: 1.75,
                        "aria-hidden": true
                      })
                    ]
                  }),
                  options: sH.map((e11) => ({
                    id: e11.id,
                    label: (0, o.jsxs)("span", {
                      className: sL().roleOption,
                      children: [
                        (0, o.jsx)("span", { children: e11.label }),
                        (0, o.jsx)("span", { children: e11.detail })
                      ]
                    }),
                    checked: e11.id === r2
                  })),
                  onSelect: (e11) => c2(e11)
                }),
                (0, o.jsx)(ai, {
                  variant: "primary",
                  type: "submit",
                  icon: (0, o.jsx)(sE.A, {
                    size: 14,
                    strokeWidth: 1.75,
                    "aria-hidden": true
                  }),
                  children: "Invite"
                })
              ]
            }),
            (0, o.jsx)("div", {
              className: sL().members,
              role: "list",
              children: (0, o.jsx)(eA.N, {
                initial: false,
                children: [...m2, ...p2].map(
                  (e11) => (0, o.jsx)(
                    sY,
                    {
                      member: e11,
                      onRole: (a11) => {
                        s10(e11.id, a11), i2(
                          `${e11.pending ? e11.email : e11.name} is now ${W(a11).toLowerCase()}`
                        );
                      },
                      onRemove: () => {
                        let a11;
                        return a11 = t2(e11.id), void i2(
                          e11.pending ? "Invitation revoked" : `${e11.name} removed`,
                          e11.pending ? e11.email : "Their keys keep working until you roll them.",
                          { undo: a11 }
                        );
                      },
                      onResend: () => i2("Invitation resent", e11.email)
                    },
                    e11.id
                  )
                )
              })
            })
          ]
        })
      ]
    });
  }
  function sY({ member: e10, onRole: a10, onRemove: s10, onResend: t2 }) {
    let i2 = (0, h.I)(), n2 = "owner" === e10.role, l2 = e10.id === z.id;
    return (0, o.jsxs)(m.PY1.div, {
      role: "listitem",
      className: sL().member,
      layout: !i2 && "position",
      initial: i2 ? { opacity: 0 } : { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      exit: i2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        height: 0,
        transition: { duration: eC.T.duration.fast }
      },
      transition: i2 ? { duration: 0 } : eC.T.spring.smooth,
      children: [
        (0, o.jsxs)("div", {
          className: sL().who,
          children: [
            e10.pending ? (0, o.jsx)("span", {
              className: sL().pendingFace,
              "aria-hidden": "true",
              children: (0, o.jsx)(sE.A, { size: 13, strokeWidth: 1.75 })
            }) : (0, o.jsx)(eX, { name: e10.name, photo: e10.photo, size: 28 }),
            (0, o.jsxs)("div", {
              className: sL().whoText,
              children: [
                (0, o.jsxs)("span", {
                  className: sL().whoName,
                  children: [
                    (0, o.jsx)("span", {
                      children: e10.pending ? e10.email : e10.name
                    }),
                    l2 ? (0, o.jsx)(e5, { children: "You" }) : null,
                    e10.pending ? (0, o.jsx)(e5, { tone: "warning", children: "Invited" }) : null
                  ]
                }),
                (0, o.jsx)("span", {
                  className: sL().whoEmail,
                  children: e10.pending ? `Invited ${eV(e10.joined)}, expires in 6 days` : e10.email
                })
              ]
            })
          ]
        }),
        n2 ? (0, o.jsx)("button", {
          type: "button",
          className: sL().roleCell,
          disabled: true,
          "aria-label": "Owner, cannot be changed",
          children: "Owner"
        }) : (0, o.jsx)(e8, {
          label: "Role",
          width: 260,
          trigger: (0, o.jsxs)("button", {
            type: "button",
            className: sL().roleCell,
            "aria-label": `Role for ${e10.name}: ${W(e10.role)}`,
            children: [
              (0, o.jsx)("span", { children: W(e10.role) }),
              (0, o.jsx)(aS.A, {
                size: 13,
                strokeWidth: 1.75,
                "aria-hidden": true
              })
            ]
          }),
          options: sH.map((a11) => ({
            id: a11.id,
            label: (0, o.jsxs)("span", {
              className: sL().roleOption,
              children: [
                (0, o.jsx)("span", { children: a11.label }),
                (0, o.jsx)("span", { children: a11.detail })
              ]
            }),
            checked: a11.id === e10.role
          })),
          onSelect: (s11) => {
            s11 !== e10.role && a10(s11);
          }
        }),
        (0, o.jsx)("span", {
          className: sL().active,
          children: e10.pending ? "Pending" : l2 ? "Active now" : `Active ${sq(eV(e10.lastActive))}`
        }),
        l2 ? (0, o.jsx)("span", {}) : (0, o.jsx)(e8, {
          align: "end",
          width: 190,
          trigger: (0, o.jsx)(at, {
            label: `Actions for ${e10.pending ? e10.email : e10.name}`,
            className: sL().rowMenu,
            children: (0, o.jsx)(aY.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": true
            })
          }),
          options: e10.pending ? [
            {
              id: "resend",
              label: "Resend invitation",
              icon: (0, o.jsx)(aA.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": true
              })
            },
            "separator",
            {
              id: "remove",
              label: "Revoke invitation",
              icon: (0, o.jsx)(sP.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": true
              }),
              danger: true
            }
          ] : [
            {
              id: "remove",
              label: "Remove from project",
              icon: (0, o.jsx)(sP.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": true
              }),
              danger: true
            }
          ],
          onSelect: (e11) => "resend" === e11 ? t2() : s10()
        })
      ]
    });
  }
  let sK = [
    {
      id: "dom_8Qx2LkVp",
      name: "plume.so",
      verified: "2025-11-05",
      region: "us-east-1",
      records: [
        {
          type: "MX",
          name: "send",
          value: "feedback-smtp.us-east-1.ferry.dev",
          priority: 10
        },
        {
          type: "TXT",
          name: "send",
          value: "v=spf1 include:spf.ferry.dev ~all"
        },
        {
          type: "TXT",
          name: "ferry._domainkey",
          value: "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7v2Hk8pXq3N9tRw"
        },
        {
          type: "TXT",
          name: "_dmarc",
          value: "v=DMARC1; p=quarantine; rua=mailto:dmarc@plume.so"
        }
      ]
    },
    {
      id: "dom_3Fh9TmWa",
      name: "mail.plume.so",
      verified: "2026-10-05",
      region: "us-east-1",
      records: [
        {
          type: "MX",
          name: "send.mail",
          value: "feedback-smtp.us-east-1.ferry.dev",
          priority: 10
        },
        {
          type: "TXT",
          name: "send.mail",
          value: "v=spf1 include:spf.ferry.dev ~all"
        },
        {
          type: "TXT",
          name: "ferry._domainkey.mail",
          value: "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDk4LmQz2Vn8sPy"
        }
      ]
    }
  ];
  function sZ() {
    let { notify: e10 } = eN(), a10 = (0, h.I)(), [s10, t2] = (0, d.useState)(sK[0].id), [i2, n2] = (0, d.useState)(null);
    return (0, o.jsxs)("section", {
      className: sL().section,
      "aria-labelledby": "domains-title",
      children: [
        (0, o.jsxs)("div", {
          children: [
            (0, o.jsx)("h2", {
              id: "domains-title",
              className: sL().sectionTitle,
              children: "Sending domains"
            }),
            (0, o.jsx)("p", {
              className: sL().sectionBody,
              children: "Ferry signs mail from these domains. Keep the DNS records in place, or delivery falls back to the shared pool."
            })
          ]
        }),
        (0, o.jsx)("div", {
          className: sL().panel,
          children: sK.map((l2) => {
            let r2 = s10 === l2.id;
            return (0, o.jsxs)(
              "div",
              {
                className: sL().domain,
                children: [
                  (0, o.jsxs)("button", {
                    type: "button",
                    className: sL().domainHead,
                    "aria-expanded": r2,
                    onClick: () => t2(r2 ? null : l2.id),
                    children: [
                      (0, o.jsx)(m.PY1.span, {
                        initial: false,
                        animate: { rotate: 90 * !!r2 },
                        transition: a10 ? { duration: 0 } : eC.T.spring.snappy,
                        style: {
                          display: "inline-flex",
                          color: "var(--text-muted)"
                        },
                        children: (0, o.jsx)(eD.A, {
                          size: 15,
                          strokeWidth: 1.75,
                          "aria-hidden": true
                        })
                      }),
                      (0, o.jsx)(am.A, {
                        size: 15,
                        strokeWidth: 1.75,
                        "aria-hidden": true
                      }),
                      (0, o.jsxs)("span", {
                        className: sL().domainName,
                        children: [
                          (0, o.jsx)("span", { children: l2.name }),
                          (0, o.jsxs)("span", {
                            className: sL().domainMeta,
                            children: [
                              "Verified ",
                              eH(l2.verified),
                              ", ",
                              l2.region
                            ]
                          })
                        ]
                      }),
                      (0, o.jsx)(e5, {
                        tone: "success",
                        dot: true,
                        children: "Verified"
                      })
                    ]
                  }),
                  (0, o.jsx)(eA.N, {
                    initial: false,
                    children: r2 ? (0, o.jsx)(
                      m.PY1.div,
                      {
                        className: sL().records,
                        initial: a10 ? { opacity: 0 } : { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: a10 ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 },
                        transition: a10 ? { duration: 0 } : eC.T.spring.smooth,
                        children: (0, o.jsxs)("div", {
                          className: sL().recordsInner,
                          children: [
                            (0, o.jsxs)("table", {
                              className: sL().recordTable,
                              children: [
                                (0, o.jsxs)("colgroup", {
                                  children: [
                                    (0, o.jsx)("col", {
                                      style: { width: 64 }
                                    }),
                                    (0, o.jsx)("col", {
                                      style: { width: "28%" }
                                    }),
                                    (0, o.jsx)("col", {}),
                                    (0, o.jsx)("col", {
                                      style: { width: 72 }
                                    })
                                  ]
                                }),
                                (0, o.jsx)("thead", {
                                  children: (0, o.jsxs)("tr", {
                                    children: [
                                      (0, o.jsx)("th", {
                                        scope: "col",
                                        children: "Type"
                                      }),
                                      (0, o.jsx)("th", {
                                        scope: "col",
                                        children: "Name"
                                      }),
                                      (0, o.jsx)("th", {
                                        scope: "col",
                                        children: "Value"
                                      }),
                                      (0, o.jsx)("th", {
                                        scope: "col",
                                        children: "Priority"
                                      })
                                    ]
                                  })
                                }),
                                (0, o.jsx)("tbody", {
                                  children: l2.records.map(
                                    (e11) => (0, o.jsxs)(
                                      "tr",
                                      {
                                        children: [
                                          (0, o.jsx)("td", {
                                            children: (0, o.jsx)(e5, {
                                              children: e11.type
                                            })
                                          }),
                                          (0, o.jsx)("td", {
                                            children: (0, o.jsxs)("span", {
                                              className: sL().recordValue,
                                              children: [
                                                (0, o.jsx)("code", {
                                                  children: e11.name
                                                }),
                                                (0, o.jsx)(aM.CopyButton, {
                                                  value: e11.name,
                                                  label: `Copy ${e11.type} name`,
                                                  iconOnly: true,
                                                  variant: "plain",
                                                  className: sL().copy
                                                })
                                              ]
                                            })
                                          }),
                                          (0, o.jsx)("td", {
                                            children: (0, o.jsxs)("span", {
                                              className: sL().recordValue,
                                              children: [
                                                (0, o.jsx)("code", {
                                                  children: e11.value
                                                }),
                                                (0, o.jsx)(aM.CopyButton, {
                                                  value: e11.value,
                                                  label: `Copy ${e11.type} value`,
                                                  iconOnly: true,
                                                  variant: "plain",
                                                  className: sL().copy
                                                })
                                              ]
                                            })
                                          }),
                                          (0, o.jsx)("td", {
                                            className: sL().muted,
                                            children: e11.priority ?? "None"
                                          })
                                        ]
                                      },
                                      `${e11.type}-${e11.name}`
                                    )
                                  )
                                })
                              ]
                            }),
                            (0, o.jsxs)("div", {
                              className: sL().recordsFoot,
                              children: [
                                (0, o.jsxs)("span", {
                                  className: sL().rowDetail,
                                  children: [
                                    "Last checked ",
                                    sq(eV("2026-10-07T13:00:00Z"))
                                  ]
                                }),
                                (0, o.jsx)(ai, {
                                  size: "sm",
                                  icon: (0, o.jsx)(aA.A, {
                                    size: 13,
                                    strokeWidth: 1.75,
                                    "aria-hidden": true
                                  }),
                                  disabled: i2 === l2.id,
                                  onClick: () => {
                                    n2(l2.id), window.setTimeout(() => {
                                      n2(null), e10(
                                        `${l2.name} verified`,
                                        "SPF, DKIM and DMARC records found."
                                      );
                                    }, 900);
                                  },
                                  children: i2 === l2.id ? "Checking" : "Check records"
                                })
                              ]
                            })
                          ]
                        })
                      },
                      "records"
                    ) : null
                  })
                ]
              },
              l2.id
            );
          })
        })
      ]
    });
  }
  var sG = s(90467), sQ = s(49237), sJ = s(36058), sX = s(62977), s0 = s.n(sX);
  let s1 = [
    { id: "node", label: "Node.js" },
    { id: "python", label: "Python" },
    { id: "go", label: "Go" },
    { id: "curl", label: "cURL" }
  ], s2 = "ferry-quickstart-lang", s5 = {
    node: {
      filename: "Terminal",
      language: "bash",
      code: "npm install ferry"
    },
    python: {
      filename: "Terminal",
      language: "bash",
      code: "pip install ferry"
    },
    go: {
      filename: "Terminal",
      language: "bash",
      code: "go get github.com/ferry-dev/ferry-go"
    },
    curl: {
      filename: "Terminal",
      language: "bash",
      code: "# curl ships with macOS and most Linux distributions\ncurl --version"
    }
  }, s4 = {
    node: {
      filename: ".env.local",
      language: "env",
      code: `FERRY_API_KEY=${eb}`
    },
    python: {
      filename: ".env",
      language: "env",
      code: `FERRY_API_KEY=${eb}`
    },
    go: { filename: ".env", language: "env", code: `FERRY_API_KEY=${eb}` },
    curl: {
      filename: "Terminal",
      language: "bash",
      code: `export FERRY_API_KEY="${eb}"`
    }
  }, s6 = {
    node: {
      filename: "send.ts",
      language: "ts",
      code: `import { Ferry } from "ferry";

const ferry = new Ferry(process.env.FERRY_API_KEY);

const { data, error } = await ferry.emails.send({
  from: "Plume <hello@plume.so>",
  to: ["maya.chen@gmail.com"],
  subject: "Your sign-in link",
  html: "<p>Click <a href=\\"https://plume.so/login/7Hq2\\">here</a> to sign in.</p>",
});

if (error) throw error;
console.log(data.id); // em_4Qx8LkVp2Tn9Rw1s`
    },
    python: {
      filename: "send.py",
      language: "python",
      code: `import os
from ferry import Ferry

ferry = Ferry(api_key=os.environ["FERRY_API_KEY"])

email = ferry.emails.send(
    from_="Plume <hello@plume.so>",
    to=["maya.chen@gmail.com"],
    subject="Your sign-in link",
    html='<p>Click <a href="https://plume.so/login/7Hq2">here</a> to sign in.</p>',
)

print(email.id)  # em_4Qx8LkVp2Tn9Rw1s`
    },
    go: {
      filename: "main.go",
      language: "go",
      code: `package main

import (
	"context"
	"fmt"
	"os"

	"github.com/ferry-dev/ferry-go"
)

func main() {
	client := ferry.New(os.Getenv("FERRY_API_KEY"))

	email, err := client.Emails.Send(context.Background(), &ferry.SendEmailParams{
		From:    "Plume <hello@plume.so>",
		To:      []string{"maya.chen@gmail.com"},
		Subject: "Your sign-in link",
		HTML:    "<p>Click <a href=\\"https://plume.so/login/7Hq2\\">here</a> to sign in.</p>",
	})
	if err != nil {
		panic(err)
	}
	fmt.Println(email.ID) // em_4Qx8LkVp2Tn9Rw1s
}`
    },
    curl: {
      filename: "Terminal",
      language: "bash",
      code: `curl https://api.ferry.dev/v1/emails \\
  -H "Authorization: Bearer $FERRY_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "Plume <hello@plume.so>",
    "to": ["maya.chen@gmail.com"],
    "subject": "Your sign-in link",
    "html": "<p>Click here to sign in.</p>"
  }'`
    }
  }, s7 = {
    node: {
      filename: "app/api/ferry/route.ts",
      language: "ts",
      code: `import { Ferry } from "ferry";

const ferry = new Ferry(process.env.FERRY_API_KEY);

export async function POST(request: Request) {
  const payload = await request.text();
  const event = ferry.webhooks.verify(payload, request.headers, process.env.FERRY_WEBHOOK_SECRET);

  if (event.type === "email.bounced") {
    await markBounced(event.data.to[0]);
  }
  return Response.json({ received: true });
}`
    },
    python: {
      filename: "webhooks.py",
      language: "python",
      code: `import os
from flask import Flask, request
from ferry import Ferry, WebhookVerificationError

app = Flask(__name__)
ferry = Ferry(api_key=os.environ["FERRY_API_KEY"])

@app.post("/webhooks/ferry")
def ferry_webhook():
    try:
        event = ferry.webhooks.verify(request.get_data(), request.headers, os.environ["FERRY_WEBHOOK_SECRET"])
    except WebhookVerificationError:
        return "", 400

    if event.type == "email.bounced":
        mark_bounced(event.data.to[0])
    return {"received": True}`
    },
    go: {
      filename: "webhooks.go",
      language: "go",
      code: `func handleFerry(w http.ResponseWriter, r *http.Request) {
	body, _ := io.ReadAll(r.Body)
	event, err := ferry.VerifyWebhook(body, r.Header, os.Getenv("FERRY_WEBHOOK_SECRET"))
	if err != nil {
		http.Error(w, "invalid signature", http.StatusBadRequest)
		return
	}

	if event.Type == "email.bounced" {
		markBounced(event.Data.To[0])
	}
	w.WriteHeader(http.StatusOK)
}`
    },
    curl: {
      filename: "Terminal",
      language: "bash",
      code: `# Ferry signs every delivery with HMAC-SHA256 over "{id}.{timestamp}.{body}"
echo -n "$FERRY_ID.$FERRY_TIMESTAMP.$BODY" \\
  | openssl dgst -sha256 -hmac "$FERRY_WEBHOOK_SECRET" -binary \\
  | base64

# Compare the output with the v1 value in the ferry-signature header`
    }
  }, s3 = {
    install: "Install the SDK",
    key: "Add your API key",
    send: "Send your first email",
    verify: "Verify webhook signatures"
  }, s9 = ["install", "key", "send", "verify"];
  function s8({ param: e10 }) {
    let { keys: a10, sendTest: s10, notify: t2, go: i2 } = eN(), n2 = (0, h.I)(), [l2, r2] = (0, d.useState)("node"), [c2, u2] = (0, d.useState)([]), [p2, g2] = (0, d.useState)(false), [j2, b2] = (0, d.useState)(null), f2 = (0, d.useRef)({});
    (0, d.useEffect)(() => {
      try {
        let e11 = localStorage.getItem(s2);
        e11 && s1.some((a11) => a11.id === e11) && queueMicrotask(() => r2(e11));
      } catch {
      }
    }, []), (0, d.useEffect)(() => {
      e10 && s9.includes(e10) && f2.current[e10]?.scrollIntoView({ block: "start" });
    }, [e10]);
    let w2 = a10.some((e11) => !e11.revoked && Date.parse(e11.created) >= P.getTime()), N2 = {
      install: c2.includes("install"),
      key: w2 || c2.includes("key"),
      send: !!j2,
      verify: c2.includes("verify")
    }, C2 = s9.filter((e11) => N2[e11]).length, T2 = (e11) => u2((a11) => a11.includes(e11) ? a11.filter((a12) => a12 !== e11) : [...a11, e11]), S2 = j2 && "object" == typeof j2.response && j2.response && "id" in j2.response ? String(j2.response.id) : null, A2 = (e11, a11, s11, t3) => (0, o.jsxs)(
      "li",
      {
        ref: (a12) => {
          f2.current[e11] = a12;
        },
        className: s0().step,
        id: `step-${e11}`,
        children: [
          (0, o.jsx)("span", {
            className: s0().marker,
            "data-done": N2[e11] ? "" : void 0,
            "aria-hidden": "true",
            children: (0, o.jsx)(eA.N, {
              initial: false,
              mode: "popLayout",
              children: (0, o.jsx)(
                m.PY1.span,
                {
                  className: s0().markerInner,
                  initial: n2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
                  animate: { opacity: 1, scale: 1 },
                  exit: n2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    scale: 0.6,
                    transition: { duration: eC.T.duration.instant }
                  },
                  transition: n2 ? { duration: 0 } : eC.T.spring.snappy,
                  children: N2[e11] ? (0, o.jsx)(eM.A, { size: 13, strokeWidth: 2.25 }) : a11 + 1
                },
                N2[e11] ? "done" : "todo"
              )
            })
          }),
          (0, o.jsxs)("div", {
            className: s0().stepBody,
            children: [
              (0, o.jsxs)("div", {
                className: s0().stepHead,
                children: [
                  (0, o.jsxs)("h2", {
                    className: s0().stepTitle,
                    children: [
                      s3[e11],
                      (0, o.jsx)("span", {
                        className: s0().srOnly,
                        children: N2[e11] ? ", done" : ""
                      })
                    ]
                  }),
                  (0, o.jsx)("p", {
                    className: s0().stepText,
                    children: t3
                  })
                ]
              }),
              s11
            ]
          })
        ]
      },
      e11
    );
    return (0, o.jsxs)("div", {
      className: s0().page,
      children: [
        (0, o.jsx)(an, {
          crumbs: [
            {
              label: "Quickstart",
              icon: (0, o.jsx)(y.A, {
                size: 15,
                strokeWidth: 1.75,
                "aria-hidden": true
              })
            }
          ]
        }),
        (0, o.jsx)("div", {
          className: s0().scroll,
          children: (0, o.jsxs)("div", {
            className: s0().layout,
            children: [
              (0, o.jsxs)("div", {
                className: s0().main,
                children: [
                  (0, o.jsxs)("div", {
                    className: s0().intro,
                    children: [
                      (0, o.jsx)("h1", {
                        className: s0().title,
                        children: "Send your first email with Ferry"
                      }),
                      (0, o.jsx)("p", {
                        className: s0().lead,
                        children: "Four steps, about five minutes. The samples use your Production server key and the verified domain plume.so."
                      })
                    ]
                  }),
                  (0, o.jsxs)("div", {
                    className: s0().langBar,
                    children: [
                      (0, o.jsx)(e3, {
                        label: "Language",
                        value: l2,
                        onChange: (e11) => {
                          r2(e11);
                          try {
                            localStorage.setItem(s2, e11);
                          } catch {
                          }
                        },
                        items: s1
                      }),
                      (0, o.jsx)("span", {
                        className: s0().langNote,
                        children: "Applies to every step"
                      })
                    ]
                  }),
                  (0, o.jsxs)("ol", {
                    className: s0().steps,
                    children: [
                      A2(
                        "install",
                        0,
                        (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)("div", {
                              className: s0().code,
                              children: (0, o.jsx)(sJ.N, { ...s5[l2] })
                            }),
                            (0, o.jsx)("div", {
                              className: s0().actions,
                              children: (0, o.jsx)(ai, {
                                size: "sm",
                                variant: N2.install ? "ghost" : "secondary",
                                icon: N2.install ? (0, o.jsx)(eM.A, {
                                  size: 13,
                                  strokeWidth: 2,
                                  "aria-hidden": true
                                }) : void 0,
                                onClick: () => T2("install"),
                                children: N2.install ? "Done" : "Mark as done"
                              })
                            })
                          ]
                        }),
                        "curl" === l2 ? "No SDK needed. Every endpoint takes JSON over HTTPS." : (0, o.jsx)(o.Fragment, {
                          children: "The official SDK wraps every endpoint with types, retries and idempotency keys."
                        })
                      ),
                      A2(
                        "key",
                        1,
                        (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)("div", {
                              className: s0().code,
                              children: (0, o.jsx)(sJ.N, { ...s4[l2] })
                            }),
                            (0, o.jsxs)("div", {
                              className: s0().actions,
                              children: [
                                (0, o.jsx)(ai, {
                                  size: "sm",
                                  icon: (0, o.jsx)(x.A, {
                                    size: 13,
                                    strokeWidth: 1.75,
                                    "aria-hidden": true
                                  }),
                                  onClick: () => i2("keys", "new"),
                                  children: "Create a key"
                                }),
                                w2 ? null : (0, o.jsx)(ai, {
                                  size: "sm",
                                  variant: "ghost",
                                  icon: N2.key ? (0, o.jsx)(eM.A, {
                                    size: 13,
                                    strokeWidth: 2,
                                    "aria-hidden": true
                                  }) : void 0,
                                  onClick: () => T2("key"),
                                  children: N2.key ? "Using an existing key" : "I already have a key"
                                })
                              ]
                            })
                          ]
                        }),
                        (0, o.jsxs)(o.Fragment, {
                          children: [
                            "Keep the key on the server. A ",
                            (0, o.jsx)("code", { children: "sending" }),
                            " key is enough for this guide."
                          ]
                        })
                      ),
                      A2(
                        "send",
                        2,
                        (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)("div", {
                              className: s0().code,
                              children: (0, o.jsx)(sJ.N, { ...s6[l2] })
                            }),
                            (0, o.jsxs)("div", {
                              className: s0().actions,
                              children: [
                                (0, o.jsx)(ai, {
                                  variant: "primary",
                                  icon: (0, o.jsx)(k.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": true
                                  }),
                                  disabled: p2,
                                  onClick: () => {
                                    g2(true), window.setTimeout(() => {
                                      let e11 = s10("emails-send");
                                      b2(e11), g2(false), t2(
                                        "Test email sent",
                                        `${e11.status} in ${eJ(e11.ms)}, added to the live log.`
                                      );
                                    }, 650 * !n2);
                                  },
                                  children: p2 ? "Sending" : j2 ? "Send another" : "Send test email"
                                }),
                                (0, o.jsx)("span", {
                                  className: s0().resultMeta,
                                  children: "Sends to your own address, olivia@plume.so"
                                })
                              ]
                            }),
                            (0, o.jsx)(eA.N, {
                              initial: false,
                              mode: "popLayout",
                              children: j2 ? (0, o.jsxs)(
                                m.PY1.div,
                                {
                                  className: s0().result,
                                  role: "status",
                                  initial: n2 ? { opacity: 0 } : { opacity: 0, y: -4 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: {
                                    opacity: 0,
                                    transition: {
                                      duration: eC.T.duration.instant
                                    }
                                  },
                                  transition: n2 ? { duration: 0 } : eC.T.spring.smooth,
                                  children: [
                                    (0, o.jsx)(e2, { status: j2.status }),
                                    (0, o.jsx)("span", {
                                      className: s0().resultId,
                                      children: S2 ?? j2.id
                                    }),
                                    (0, o.jsxs)("span", {
                                      className: s0().resultMeta,
                                      children: [
                                        eJ(j2.ms),
                                        ", queued for delivery"
                                      ]
                                    }),
                                    (0, o.jsx)(ai, {
                                      size: "sm",
                                      variant: "ghost",
                                      className: s0().resultLink,
                                      icon: (0, o.jsx)(_.A, {
                                        size: 13,
                                        strokeWidth: 1.75,
                                        "aria-hidden": true
                                      }),
                                      onClick: () => i2("logs"),
                                      children: "View in logs"
                                    })
                                  ]
                                },
                                j2.id
                              ) : null
                            })
                          ]
                        }),
                        (0, o.jsx)(o.Fragment, {
                          children: "Run it, or send a test from here. It goes through the live API and shows up in your logs."
                        })
                      ),
                      A2(
                        "verify",
                        3,
                        (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)("div", {
                              className: s0().code,
                              children: (0, o.jsx)(sJ.N, { ...s7[l2] })
                            }),
                            (0, o.jsxs)("div", {
                              className: s0().actions,
                              children: [
                                (0, o.jsx)(ai, {
                                  size: "sm",
                                  icon: (0, o.jsx)(v.A, {
                                    size: 13,
                                    strokeWidth: 1.75,
                                    "aria-hidden": true
                                  }),
                                  onClick: () => i2("webhooks", "new"),
                                  children: "Add an endpoint"
                                }),
                                (0, o.jsx)(ai, {
                                  size: "sm",
                                  variant: "ghost",
                                  icon: N2.verify ? (0, o.jsx)(eM.A, {
                                    size: 13,
                                    strokeWidth: 2,
                                    "aria-hidden": true
                                  }) : void 0,
                                  onClick: () => T2("verify"),
                                  children: N2.verify ? "Done" : "Mark as done"
                                })
                              ]
                            })
                          ]
                        }),
                        (0, o.jsxs)(o.Fragment, {
                          children: [
                            "Every delivery carries a ",
                            (0, o.jsx)("code", { children: "ferry-signature" }),
                            " header. Reject requests that fail the check, and use the raw body."
                          ]
                        })
                      )
                    ]
                  }),
                  (0, o.jsx)(eA.N, {
                    initial: false,
                    children: C2 === s9.length ? (0, o.jsxs)(m.PY1.div, {
                      className: s0().finish,
                      initial: n2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0 },
                      transition: n2 ? { duration: 0 } : eC.T.spring.smooth,
                      children: [
                        (0, o.jsxs)("span", {
                          className: s0().finishText,
                          children: [
                            (0, o.jsx)("span", {
                              children: "You are set up"
                            }),
                            (0, o.jsx)("span", {
                              children: "Ferry is sending for Plume app. Watch traffic on the overview."
                            })
                          ]
                        }),
                        (0, o.jsxs)(ai, {
                          variant: "primary",
                          onClick: () => i2("overview"),
                          children: [
                            "Go to overview",
                            (0, o.jsx)(sG.A, {
                              size: 14,
                              strokeWidth: 1.75,
                              "aria-hidden": true,
                              style: { marginLeft: 6 }
                            })
                          ]
                        })
                      ]
                    }) : null
                  })
                ]
              }),
              (0, o.jsxs)("aside", {
                className: s0().aside,
                "aria-label": "Progress",
                children: [
                  (0, o.jsx)("div", {
                    className: s0().asideHead,
                    children: (0, o.jsxs)("p", {
                      className: s0().asideTitle,
                      children: [
                        (0, o.jsxs)("span", {
                          className: s0().asideCount,
                          children: [C2, " of ", s9.length]
                        }),
                        " done"
                      ]
                    })
                  }),
                  (0, o.jsx)("ol", {
                    className: s0().progress,
                    children: s9.map(
                      (e11) => (0, o.jsx)(
                        "li",
                        {
                          children: (0, o.jsxs)("button", {
                            type: "button",
                            className: s0().progressItem,
                            "data-done": N2[e11] ? "" : void 0,
                            onClick: () => f2.current[e11]?.scrollIntoView({
                              behavior: n2 ? "auto" : "smooth",
                              block: "start"
                            }),
                            children: [
                              (0, o.jsx)("span", {
                                className: s0().progressDot,
                                "aria-hidden": "true",
                                children: N2[e11] ? (0, o.jsx)(eM.A, {
                                  size: 10,
                                  strokeWidth: 2.5
                                }) : null
                              }),
                              (0, o.jsx)("span", { children: s3[e11] })
                            ]
                          })
                        },
                        e11
                      )
                    )
                  }),
                  (0, o.jsxs)("div", {
                    className: s0().help,
                    children: [
                      (0, o.jsxs)("button", {
                        type: "button",
                        className: s0().helpLink,
                        onClick: () => i2("logs"),
                        children: [
                          (0, o.jsx)(_.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": true
                          }),
                          "Watch the live log"
                        ]
                      }),
                      (0, o.jsxs)("button", {
                        type: "button",
                        className: s0().helpLink,
                        onClick: () => t2(
                          "Support",
                          "In your app this opens a chat with the Ferry team.",
                          { tone: "neutral" }
                        ),
                        children: [
                          (0, o.jsx)(sQ.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": true
                          }),
                          "Talk to support"
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  var te = s(50629), ta = s.n(te);
  let ts = [
    "overview",
    "logs",
    "keys",
    "webhooks",
    "usage",
    "settings",
    "quickstart"
  ];
  function tt() {
    return window.location.hash.replace(/^#\/?/, "");
  }
  function ti(e10) {
    return window.addEventListener("hashchange", e10), () => window.removeEventListener("hashchange", e10);
  }
  let tn = { size: 16, strokeWidth: 1.75, "aria-hidden": true };
  function tl() {
    let e10 = e7(), [a10, s10, t2] = (function() {
      let [e11, a11] = (function(e13) {
        let [a12, s11] = e13.split("/");
        return ts.includes(a12) ? [a12, s11 ? decodeURIComponent(s11) : void 0] : ["overview", void 0];
      })((0, d.useSyncExternalStore)(ti, tt, () => ""));
      return [
        e11,
        a11,
        (0, d.useCallback)((e13, a12) => {
          let s11 = a12 ? `${e13}/${encodeURIComponent(a12)}` : e13;
          tt() !== s11 && (window.location.hash = `/${s11}`);
        }, [])
      ];
    })(), [i2, n2] = (0, d.useState)(B[0].id), [l2, r2] = (0, d.useState)(B), [D2, R2] = (0, d.useState)(el), [q2, O2] = (0, d.useState)(() => /* @__PURE__ */ new Set()), [U2, Y2] = (0, d.useState)(false), [K2, G2] = (0, d.useState)(ex), [J2, X2] = (0, d.useState)(ey), [ee2, ea2] = (0, d.useState)(F), [es2, et2] = (0, d.useState)("scale"), [ei2, er2] = (0, d.useState)(false), [eo2, ed2] = (0, d.useState)(false), [ec2, eh2] = (0, d.useState)(false), eu2 = (0, h.I)(), [em2, ep2] = (0, d.useState)(false), [e_2, ev2] = (0, d.useState)("light"), [eg2, ej2] = (0, d.useState)(null), eb2 = l2.find((e11) => e11.id === i2) ?? l2[0], eN2 = (0, d.useCallback)(
      (e11, a11, s11) => ej2({
        id: Date.now(),
        title: e11,
        description: a11,
        undo: s11?.undo,
        tone: s11?.tone
      }),
      []
    ), eT2 = (0, d.useCallback)(
      (e11, a11) => {
        t2(e11, a11), er2(false);
      },
      [t2]
    );
    (0, d.useEffect)(
      () => (document.body.classList.add(ta().brand), () => document.body.classList.remove(ta().brand)),
      []
    ), (0, d.useEffect)(() => {
      queueMicrotask(
        () => ev2(
          "dark" === document.documentElement.dataset.theme ? "dark" : "light"
        )
      );
    }, []);
    let eS2 = (0, d.useCallback)((e11) => {
      let a11 = "system" === e11 ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e11;
      document.documentElement.dataset.theme = a11;
      try {
        localStorage.setItem("arc-theme", a11);
      } catch {
      }
      ev2(e11);
    }, []);
    (0, d.useEffect)(() => {
      let e11 = false;
      try {
        e11 = "collapsed" === sessionStorage.getItem("ferry-sidebar");
      } catch {
      }
      queueMicrotask(() => {
        e11 && ed2(true), requestAnimationFrame(() => eh2(true));
      });
    }, []);
    let eA2 = (0, d.useCallback)(
      () => ed2((e11) => {
        let a11 = !e11;
        try {
          sessionStorage.setItem(
            "ferry-sidebar",
            a11 ? "collapsed" : "expanded"
          );
        } catch {
        }
        return a11;
      }),
      []
    ), eM2 = (0, d.useRef)(0), e$2 = (0, d.useCallback)(
      () => P.getTime() + (Date.now() - eM2.current),
      []
    ), eI2 = (0, d.useCallback)((e11) => {
      R2((a11) => [e11, ...a11].slice(0, 600)), O2((a11) => new Set(a11).add(e11.id));
    }, []);
    (0, d.useEffect)(() => {
      if (eM2.current || (eM2.current = Date.now()), U2) return;
      let e11 = 0, a11 = () => {
        eI2(en(Math.random, e$2())), e11 = window.setTimeout(a11, 900 + 1700 * Math.random());
      };
      return e11 = window.setTimeout(a11, 1200), () => window.clearTimeout(e11);
    }, [U2, eI2, e$2]);
    let eE2 = (0, d.useCallback)(
      (e11 = "emails-send") => {
        let a11 = en(Math.random, e$2(), 202);
        for (let s11 = 0; s11 < 40 && a11.endpoint !== e11; s11++)
          a11 = en(Math.random, e$2(), "emails-send" === e11 ? 202 : void 0);
        return eI2(
          a11 = {
            ...a11,
            key: "key-prod",
            status: a11.status >= 400 ? 202 : a11.status
          }
        ), a11;
      },
      [e$2, eI2]
    ), eP2 = (0, d.useCallback)(
      (e11, a11, s11) => {
        let t3 = "live" === s11 ? "fy_live" : "fy_test", i3 = `${t3}_${L(32)}`, n3 = {
          id: `key-${L(8).toLowerCase()}`,
          name: e11,
          prefix: t3,
          last4: i3.slice(-4),
          permission: a11,
          createdBy: z.id,
          created: new Date(e$2()).toISOString(),
          requests: 0,
          env: s11
        };
        return G2((e13) => [n3, ...e13]), { key: n3, secret: i3 };
      },
      [e$2]
    ), eD2 = (0, d.useCallback)(
      (e11) => {
        let a11 = K2.find((a12) => a12.id === e11), s11 = `${a11?.prefix ?? "fy_live"}_${L(32)}`;
        return G2(
          (a12) => a12.map(
            (a13) => a13.id === e11 ? {
              ...a13,
              last4: s11.slice(-4),
              created: new Date(e$2()).toISOString(),
              createdBy: z.id
            } : a13
          )
        ), s11;
      },
      [K2, e$2]
    ), eR2 = (0, d.useCallback)(
      (e11) => G2(
        (a11) => a11.map(
          (a12) => a12.id === e11 ? { ...a12, revoked: new Date(e$2()).toISOString() } : a12
        )
      ),
      [e$2]
    ), eL2 = (0, d.useCallback)(
      (e11, a11) => G2((s11) => s11.map((s12) => s12.id === e11 ? { ...s12, name: a11 } : s12)),
      []
    ), eq2 = (0, d.useCallback)(
      (e11, a11) => X2((s11) => s11.map((s12) => s12.id === e11 ? { ...s12, ...a11 } : s12)),
      []
    ), eW2 = (0, d.useCallback)(
      (e11, a11, s11) => {
        let t3 = {
          id: `wh-${L(8).toLowerCase()}`,
          url: e11,
          description: a11,
          events: s11,
          enabled: true,
          secret: `whsec_${L(32)}`,
          created: new Date(e$2()).toISOString(),
          deliveries: []
        };
        return X2((e13) => [...e13, t3]), t3;
      },
      [e$2]
    ), ez2 = (0, d.useCallback)(
      (e11) => (X2((a11) => a11.filter((a12) => a12.id !== e11)), () => X2(J2)),
      [J2]
    ), eF2 = (0, d.useCallback)(
      (e11, a11) => {
        X2(
          (s11) => s11.map(
            (s12) => s12.id !== e11 ? s12 : {
              ...s12,
              deliveries: s12.deliveries.map(
                (e13) => e13.id !== a11 ? e13 : {
                  ...e13,
                  status: 200,
                  attempts: e13.attempts + 1,
                  ms: 120 + Math.round(200 * Math.random()),
                  at: new Date(e$2()).toISOString(),
                  response: '{"received":true}'
                }
              )
            }
          )
        );
      },
      [e$2]
    ), eO2 = (0, d.useCallback)(
      (e11, a11) => ea2((s11) => s11.map((s12) => s12.id === e11 ? { ...s12, role: a11 } : s12)),
      []
    ), eB2 = (0, d.useCallback)(
      (e11, a11) => {
        let s11 = e11.split("@")[0].split(/[._-]/)[0];
        ea2((t3) => [
          ...t3,
          {
            id: `inv-${L(6).toLowerCase()}`,
            name: e11,
            first: s11.charAt(0).toUpperCase() + s11.slice(1),
            email: e11,
            role: a11,
            joined: new Date(e$2()).toISOString(),
            lastActive: new Date(e$2()).toISOString(),
            pending: true
          }
        ]);
      },
      [e$2]
    ), eU2 = (0, d.useCallback)(
      (e11) => (ea2((a11) => a11.filter((a12) => a12.id !== e11)), () => ea2(ee2)),
      [ee2]
    ), eH2 = (0, d.useCallback)(
      (e11) => r2((a11) => a11.map((a12) => a12.id === i2 ? { ...a12, ...e11 } : a12)),
      [i2]
    ), eV2 = (0, d.useMemo)(
      () => ({
        brand: ta().brand,
        project: eb2,
        logs: D2,
        freshLogs: q2,
        paused: U2,
        keys: K2,
        webhooks: J2,
        members: ee2,
        plan: es2,
        go: eT2,
        openNav: () => er2(true),
        openPalette: () => ep2(true),
        notify: eN2,
        setPaused: Y2,
        sendTest: eE2,
        createKey: eP2,
        rollKey: eD2,
        revokeKey: eR2,
        renameKey: eL2,
        updateWebhook: eq2,
        addWebhook: eW2,
        removeWebhook: ez2,
        retryDelivery: eF2,
        setRole: eO2,
        invite: eB2,
        removeMember: eU2,
        updateProject: eH2,
        setPlan: et2
      }),
      [
        eb2,
        D2,
        q2,
        U2,
        K2,
        J2,
        ee2,
        es2,
        eT2,
        eN2,
        eE2,
        eP2,
        eD2,
        eR2,
        eL2,
        eq2,
        eW2,
        ez2,
        eF2,
        eO2,
        eB2,
        eU2,
        eH2
      ]
    );
    (0, d.useEffect)(() => {
      let e11 = 0, a11 = {
        o: "overview",
        l: "logs",
        k: "keys",
        w: "webhooks",
        u: "usage",
        s: "settings",
        q: "quickstart"
      }, s11 = (s12) => {
        if ((s12.metaKey || s12.ctrlKey) && "k" === s12.key.toLowerCase()) {
          s12.preventDefault(), s12.stopPropagation(), ep2((e13) => !e13);
          return;
        }
        if ((s12.metaKey || s12.ctrlKey) && "\\" === s12.key) {
          s12.preventDefault(), eA2();
          return;
        }
        let t3 = s12.target;
        if (t3?.closest(
          "input, textarea, select, [contenteditable='true'], [role='dialog'], [role='menu'], [role='listbox']"
        ) || s12.metaKey || s12.ctrlKey || s12.altKey || em2)
          return;
        let i3 = s12.key.toLowerCase();
        if ("g" === i3) {
          e11 = Date.now();
          return;
        }
        Date.now() - e11 < 900 && a11[i3] && (s12.preventDefault(), e11 = 0, eT2(a11[i3]));
      };
      return window.addEventListener("keydown", s11, { capture: true }), () => window.removeEventListener("keydown", s11, { capture: true });
    }, [em2, eT2, eA2]);
    let eY2 = K2.filter((e11) => !e11.revoked).length, eK2 = J2.filter(
      (e11) => e11.enabled && e11.deliveries.slice(0, 10).filter((e13) => e13.status >= 400).length >= 3
    ).length, eG2 = Z.reduce((e11, a11) => e11 + a11.email, 0), eQ2 = V.find((e11) => e11.id === es2) ?? V[1], eJ2 = H[0].included * ("pro" === es2 ? 0.1 : "business" === es2 ? 5 : 1), eX2 = [
      {
        items: [
          { id: "overview", label: "Overview", icon: p.A },
          {
            id: "logs",
            label: "Logs",
            icon: _.A,
            extra: (0, o.jsx)("span", {
              className: ta().live,
              "data-paused": U2 ? "" : void 0,
              "aria-label": U2 ? "Paused" : "Live"
            })
          },
          {
            id: "keys",
            label: "API keys",
            icon: x.A,
            extra: (0, o.jsx)("span", {
              className: ta().navCount,
              children: eY2
            })
          },
          {
            id: "webhooks",
            label: "Webhooks",
            icon: v.A,
            extra: eK2 ? (0, o.jsx)("span", { className: ta().navAlert, children: eK2 }) : (0, o.jsx)("span", {
              className: ta().navCount,
              children: J2.length
            })
          },
          { id: "usage", label: "Usage and billing", icon: g.A }
        ]
      },
      {
        label: "Project",
        items: [
          { id: "settings", label: "Settings", icon: j.A },
          { id: "quickstart", label: "Quickstart", icon: y.A }
        ]
      }
    ], e02 = [
      {
        id: "new-key",
        label: "Create API key",
        group: "Actions",
        icon: (0, o.jsx)(b.A, { ...tn }),
        keywords: ["token", "secret"]
      },
      {
        id: "new-webhook",
        label: "Add webhook endpoint",
        group: "Actions",
        icon: (0, o.jsx)(b.A, { ...tn }),
        keywords: ["hook", "url", "events"]
      },
      {
        id: "send-test",
        label: "Send a test email",
        group: "Actions",
        icon: (0, o.jsx)(k.A, { ...tn }),
        keywords: ["request", "try"]
      },
      {
        id: "pause",
        label: U2 ? "Resume live logs" : "Pause live logs",
        group: "Actions",
        icon: U2 ? (0, o.jsx)(f.A, { ...tn }) : (0, o.jsx)(w.A, { ...tn }),
        keywords: ["stream", "stop"]
      },
      {
        id: "invite",
        label: "Invite a teammate",
        group: "Actions",
        icon: (0, o.jsx)(N.A, { ...tn }),
        keywords: ["member", "team"]
      },
      {
        id: "go-overview",
        label: "Go to overview",
        group: "Navigate",
        icon: (0, o.jsx)(p.A, { ...tn }),
        shortcut: "G O"
      },
      {
        id: "go-logs",
        label: "Go to logs",
        group: "Navigate",
        icon: (0, o.jsx)(_.A, { ...tn }),
        shortcut: "G L",
        keywords: ["requests"]
      },
      {
        id: "go-keys",
        label: "Go to API keys",
        group: "Navigate",
        icon: (0, o.jsx)(x.A, { ...tn }),
        shortcut: "G K"
      },
      {
        id: "go-webhooks",
        label: "Go to webhooks",
        group: "Navigate",
        icon: (0, o.jsx)(v.A, { ...tn }),
        shortcut: "G W"
      },
      {
        id: "go-usage",
        label: "Go to usage and billing",
        group: "Navigate",
        icon: (0, o.jsx)(g.A, { ...tn }),
        shortcut: "G U",
        keywords: ["invoices", "plan"]
      },
      {
        id: "go-settings",
        label: "Go to settings",
        group: "Navigate",
        icon: (0, o.jsx)(j.A, { ...tn }),
        shortcut: "G S",
        keywords: ["members", "team"]
      },
      {
        id: "go-quickstart",
        label: "Go to quickstart",
        group: "Navigate",
        icon: (0, o.jsx)(y.A, { ...tn }),
        shortcut: "G Q",
        keywords: ["docs", "sdk"]
      },
      ...Q.map((e11) => ({
        id: `endpoint-${e11.id}`,
        label: `${e11.method} ${e11.path}`,
        description: e11.label,
        group: "Endpoints",
        icon: (0, o.jsx)(_.A, { ...tn }),
        keywords: [e11.label.toLowerCase()]
      })),
      ...K2.filter((e11) => !e11.revoked).map((e11) => ({
        id: `key-${e11.id}`,
        label: e11.name,
        description: `${e11.prefix}_\u2026${e11.last4}`,
        group: "API keys",
        icon: (0, o.jsx)(x.A, { ...tn })
      })),
      ...J2.map((e11) => ({
        id: `hook-${e11.id}`,
        label: e11.url.replace(/^https:\/\//, ""),
        description: e11.description,
        group: "Webhooks",
        icon: (0, o.jsx)(v.A, { ...tn })
      })),
      {
        id: "theme",
        label: "dark" === e_2 ? "Use light theme" : "Use dark theme",
        group: "Preferences",
        icon: "dark" === e_2 ? (0, o.jsx)(C.A, { ...tn }) : (0, o.jsx)(T.A, { ...tn }),
        keywords: ["appearance", "dark", "light"]
      }
    ], e12 = (s11) => {
      let t3 = "sidebar" === s11 && eo2, r3 = (e11, a11, s12) => t3 ? (0, o.jsx)(as, {
        label: e11,
        keys: s12,
        side: "bottom",
        children: a11
      }) : a11;
      return (0, o.jsxs)(o.Fragment, {
        children: [
          (0, o.jsxs)("div", {
            className: ta().sideTop,
            children: [
              (0, o.jsx)(e8, {
                label: "Projects",
                width: 240,
                trigger: (0, o.jsxs)("button", {
                  type: "button",
                  className: ta().project,
                  children: [
                    (0, o.jsx)("span", {
                      className: ta().projectMark,
                      "aria-hidden": "true",
                      children: (0, o.jsx)(ek.Iu, { size: 16 })
                    }),
                    (0, o.jsxs)("span", {
                      className: `${ta().projectText} ${ta().fade}`,
                      children: [
                        (0, o.jsx)("span", {
                          className: ta().projectName,
                          children: eb2.name
                        }),
                        (0, o.jsxs)("span", {
                          className: ta().projectEnv,
                          "data-env": eb2.env,
                          children: [
                            (0, o.jsx)("i", { "aria-hidden": "true" }),
                            eb2.env
                          ]
                        })
                      ]
                    }),
                    (0, o.jsx)(S.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": true
                    })
                  ]
                }),
                options: [
                  ...l2.map((e11) => ({
                    id: e11.id,
                    label: e11.name,
                    icon: (0, o.jsx)(ef, { size: 16 }),
                    hint: e11.env,
                    checked: e11.id === i2
                  })),
                  "separator",
                  {
                    id: "settings",
                    label: "Project settings",
                    icon: (0, o.jsx)(j.A, {
                      size: 15,
                      strokeWidth: 1.75,
                      "aria-hidden": true
                    }),
                    keys: ["G", "S"]
                  },
                  {
                    id: "new",
                    label: "New project",
                    icon: (0, o.jsx)(b.A, {
                      size: 15,
                      strokeWidth: 1.75,
                      "aria-hidden": true
                    })
                  }
                ],
                onSelect: (e11) => {
                  if ("settings" === e11) return eT2("settings");
                  if ("new" === e11)
                    return eN2(
                      "New project",
                      "In your app this opens project setup.",
                      { tone: "neutral" }
                    );
                  let a11 = l2.find((a12) => a12.id === e11);
                  a11 && a11.id !== i2 && (n2(a11.id), eN2(
                    `Switched to ${a11.name}`,
                    `${a11.env}, sample data stays the same.`
                  ));
                }
              }),
              "sidebar" === s11 ? (0, o.jsx)(as, {
                label: eo2 ? "Expand sidebar" : "Collapse sidebar",
                keys: ["\u2318", "\\"],
                side: "bottom",
                children: (0, o.jsx)("button", {
                  type: "button",
                  className: ta().railToggle,
                  "aria-label": eo2 ? "Expand sidebar" : "Collapse sidebar",
                  "aria-expanded": !eo2,
                  onClick: eA2,
                  children: (0, o.jsx)(A.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": true
                  })
                })
              }) : null
            ]
          }),
          r3(
            "Search",
            (0, o.jsxs)("button", {
              type: "button",
              className: ta().search,
              "aria-label": "Search",
              onClick: () => {
                er2(false), ep2(true);
              },
              children: [
                (0, o.jsx)(M.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": true
                }),
                (0, o.jsx)("span", {
                  className: ta().fade,
                  children: "Search"
                }),
                (0, o.jsx)("kbd", { className: ta().fade, children: "\u2318K" })
              ]
            }),
            ["\u2318", "K"]
          ),
          (0, o.jsx)("nav", {
            className: ta().nav,
            "aria-label": "Ferry",
            ...e10.barProps,
            children: (0, o.jsx)(u.o, {
              id: `${e10.group}-${s11}`,
              children: eX2.map(
                (s12, i3) => (0, o.jsxs)(
                  "div",
                  {
                    className: ta().navGroup,
                    children: [
                      s12.label ? (0, o.jsx)("p", {
                        className: ta().navLabel,
                        children: (0, o.jsx)("span", {
                          className: ta().fade,
                          children: s12.label
                        })
                      }) : null,
                      (0, o.jsx)("ul", {
                        className: ta().navList,
                        children: s12.items.map((s13) => {
                          let i4 = s13.icon, n3 = s13.id === a10;
                          return (0, o.jsx)(
                            "li",
                            {
                              children: r3(
                                s13.label,
                                (0, o.jsxs)("a", {
                                  href: `#/${s13.id}`,
                                  className: ta().navLink,
                                  "aria-label": t3 ? s13.label : void 0,
                                  "aria-current": n3 ? "page" : void 0,
                                  onClick: (e11) => {
                                    e11.preventDefault(), eT2(s13.id);
                                  },
                                  children: [
                                    n3 ? (0, o.jsx)(m.PY1.span, {
                                      layoutId: "nav",
                                      className: ta().navHighlight,
                                      transition: e10.transition
                                    }) : null,
                                    (0, o.jsx)(i4, { ...tn }),
                                    (0, o.jsx)("span", {
                                      className: `${ta().navText} ${ta().fade}`,
                                      children: s13.label
                                    }),
                                    s13.extra ? (0, o.jsx)("span", {
                                      className: `${ta().navExtra} ${ta().fade}`,
                                      children: s13.extra
                                    }) : null,
                                    "webhooks" === s13.id && eK2 ? (0, o.jsx)("span", {
                                      className: ta().railAlert,
                                      "aria-hidden": "true"
                                    }) : null
                                  ]
                                })
                              )
                            },
                            s13.id
                          );
                        })
                      })
                    ]
                  },
                  s12.label ?? i3
                )
              )
            })
          }),
          (0, o.jsx)("div", {
            className: `${ta().clip} ${ta().fade}`,
            "aria-hidden": t3 || void 0,
            children: (0, o.jsxs)("a", {
              href: "#/usage",
              tabIndex: t3 ? -1 : void 0,
              className: ta().planCard,
              onClick: (e11) => {
                e11.preventDefault(), eT2("usage");
              },
              children: [
                (0, o.jsxs)("span", {
                  className: ta().planTop,
                  children: [
                    (0, o.jsxs)("span", {
                      className: ta().planName,
                      children: [eQ2.name, " plan"]
                    }),
                    (0, o.jsxs)("span", {
                      className: ta().planMeta,
                      children: [
                        (0, o.jsx)(e4, { value: eG2, format: eZ }),
                        " of ",
                        eZ(eJ2)
                      ]
                    })
                  ]
                }),
                (0, o.jsx)(e6, {
                  value: eG2,
                  max: eJ2,
                  label: "Emails used this period"
                }),
                (0, o.jsx)("span", {
                  className: ta().planMeta,
                  children: "Emails this period, resets Oct 18"
                })
              ]
            })
          }),
          (0, o.jsx)("div", {
            className: ta().account,
            children: (0, o.jsx)(E.Bg, {
              user: {
                name: z.name,
                email: z.email,
                plan: `${W(z.role)}, Plume`,
                avatarSrc: z.photo
              },
              theme: e_2,
              onThemeChange: eS2,
              showName: true,
              align: "start",
              items: [
                {
                  label: "Project settings",
                  icon: (0, o.jsx)(j.A, {
                    size: 15,
                    strokeWidth: 1.75,
                    "aria-hidden": true
                  }),
                  keys: ["G", "S"],
                  onSelect: () => eT2("settings")
                },
                {
                  label: "Documentation",
                  icon: (0, o.jsx)(y.A, {
                    size: 15,
                    strokeWidth: 1.75,
                    "aria-hidden": true
                  }),
                  keys: ["G", "Q"],
                  onSelect: () => eT2("quickstart")
                }
              ],
              onSignOut: () => new Promise((e11) => window.setTimeout(e11, 500)).then(
                () => eN2("Signed out", "In your app this returns to sign in.", {
                  tone: "neutral"
                })
              ),
              className: ta().userTrigger
            })
          })
        ]
      });
    };
    return (0, o.jsx)(ew.Provider, {
      value: eV2,
      children: (0, o.jsxs)("div", {
        className: `${ta().brand} ${ta().shell}`,
        children: [
          (0, o.jsx)(m.PY1.aside, {
            className: ta().sidebar,
            "aria-label": "Sidebar",
            "data-collapsed": eo2 ? "" : void 0,
            initial: false,
            animate: { width: eo2 ? 52 : 236 },
            transition: eu2 || !ec2 ? { duration: 0 } : eC.T.spring.smooth,
            children: e12("sidebar")
          }),
          (0, o.jsxs)("main", {
            className: ta().main,
            children: [
              "overview" === a10 && (0, o.jsx)(aw, { param: s10 }),
              "logs" === a10 && (0, o.jsx)(aO, { param: s10 }),
              "keys" === a10 && (0, o.jsx)(a1, { param: s10 }),
              "webhooks" === a10 && (0, o.jsx)(sr, { param: s10 }),
              "usage" === a10 && (0, o.jsx)(sC, { param: s10 }),
              "settings" === a10 && (0, o.jsx)(sW, { param: s10 }),
              "quickstart" === a10 && (0, o.jsx)(s8, { param: s10 })
            ]
          }),
          (0, o.jsx)(I._s, {
            open: ei2,
            onOpenChange: er2,
            children: (0, o.jsx)(I.zj, {
              side: "left",
              title: eb2.name,
              description: "Ferry",
              className: `${ta().brand} ${ta().drawer}`,
              children: (0, o.jsx)("div", {
                className: ta().drawerBody,
                children: e12("drawer")
              })
            })
          }),
          (0, o.jsx)(c.bL, {
            open: em2,
            onOpenChange: ep2,
            children: (0, o.jsxs)(c.ZL, {
              children: [
                (0, o.jsx)(c.hJ, { className: ta().paletteOverlay }),
                (0, o.jsxs)(c.UC, {
                  className: `${ta().brand} ${ta().paletteContent}`,
                  "aria-describedby": void 0,
                  onOpenAutoFocus: (e11) => {
                    e11.preventDefault(), e11.currentTarget?.querySelector("input")?.focus();
                  },
                  children: [
                    (0, o.jsx)(c.hE, {
                      className: ta().srOnly,
                      children: "Search Ferry"
                    }),
                    (0, o.jsx)($.x, {
                      label: "Search Ferry",
                      placeholder: "Search pages, endpoints, keys and actions",
                      items: e02,
                      onClose: () => ep2(false),
                      onSelect: (e11) => {
                        if (ep2(false), e11.id.startsWith("go-"))
                          return eT2(e11.id.slice(3));
                        if (e11.id.startsWith("endpoint-"))
                          return eT2("logs", e11.id.slice(9));
                        if (e11.id.startsWith("key-")) return eT2("keys");
                        if (e11.id.startsWith("hook-"))
                          return eT2("webhooks", e11.id.slice(5));
                        if ("new-key" === e11.id) return eT2("keys", "new");
                        if ("new-webhook" === e11.id)
                          return eT2("webhooks", "new");
                        if ("invite" === e11.id) return eT2("settings", "members");
                        if ("send-test" === e11.id) {
                          let e13 = eE2();
                          eN2(
                            "Test email sent",
                            `${e13.status} in ${e13.ms}ms, added to the log.`
                          );
                          return;
                        }
                        if ("pause" === e11.id) {
                          Y2(!U2), eN2(
                            U2 ? "Live logs resumed" : "Live logs paused",
                            void 0,
                            { tone: "neutral" }
                          );
                          return;
                        }
                        if ("theme" === e11.id)
                          return eS2("dark" === e_2 ? "light" : "dark");
                      }
                    })
                  ]
                })
              ]
            })
          }),
          (0, o.jsx)(ae, { toast: eg2, onDismiss: () => ej2(null) })
        ]
      })
    });
  }
  let tr = tl;
};

__m(__module,__exports,__require);
});
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.reg(20530, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { S: () => c });
  var a = i(95155), r = i(12115), n = i(47279), s = i(18310), o = i(25354), l = i(7770), d = i(42842), u = i.n(d);
  let c = (0, r.forwardRef)(function({
    label: e2,
    description: t2,
    id: i2,
    className: d2,
    checked: c2,
    defaultChecked: p,
    onCheckedChange: m,
    ...h
  }, f) {
    let x = (0, r.useId)(), _ = i2 ?? x, y = (0, s.I)(), [b, g] = (0, r.useState)(p ?? false), j = c2 ?? b, v = false !== j, w = {
      duration: v ? l.T.duration.instant : l.T.duration.fast,
      ease: [...l.T.ease.standard]
    };
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)(n.bL, {
          ...h,
          id: _,
          ref: f,
          checked: j,
          onCheckedChange: (e3) => {
            void 0 === c2 && g(e3), m?.(e3);
          },
          className: [u().box, d2].filter(Boolean).join(" "),
          "aria-describedby": t2 ? `${_}-description` : void 0,
          "aria-label": h["aria-label"] ?? (e2 ? void 0 : "Checkbox"),
          children: (0, a.jsxs)("span", {
            className: u().visual,
            "aria-hidden": "true",
            children: [
              (0, a.jsx)(o.PY1.span, {
                className: u().fill,
                initial: false,
                animate: { opacity: +!!v, scale: v ? 1 : 0.6 },
                transition: y ? { duration: 0 } : { scale: l.T.spring.snappy, opacity: w }
              }),
              (0, a.jsx)("svg", {
                className: u().mark,
                viewBox: "0 0 18 18",
                fill: "none",
                focusable: "false",
                children: (0, a.jsx)(o.PY1.path, {
                  initial: false,
                  animate: {
                    d: "indeterminate" === j ? "M4.75 9 L9 9 L13.25 9" : "M4.25 9.25 L7.25 12.25 L13.75 5.75",
                    pathLength: +!!v,
                    opacity: +!!v
                  },
                  transition: y ? { duration: 0 } : {
                    d: l.T.spring.morph,
                    pathLength: l.T.spring.snappy,
                    opacity: w
                  },
                  stroke: "currentColor",
                  strokeWidth: 1.75,
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              })
            ]
          })
        }),
        e2 || t2 ? (0, a.jsxs)("div", {
          className: u().copy,
          children: [
            e2 ? (0, a.jsx)("label", { htmlFor: _, children: e2 }) : null,
            t2 ? (0, a.jsx)("span", { id: `${_}-description`, children: t2 }) : null
          ]
        }) : null
      ]
    });
  });
  c.displayName = "Checkbox";
}

__m(__module,__exports,__require);
});
A.regCss(22346, ".badge{--badge-tone:var(--text-secondary);--badge-tint:10%;--badge-ink:84%;--badge-background:color-mix(in oklab,var(--badge-tone) var(--badge-tint),var(--surface));--badge-foreground:color-mix(in oklab,var(--badge-tone) var(--badge-ink),var(--foreground));--badge-color:color-mix(in oklab,var(--badge-tone) 88%,var(--foreground));--badge-border:transparent;--badge-radius:6px;--badge-height:24px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px;box-sizing:border-box;display:inline-flex;min-height:var(--badge-height);flex:none;align-items:center;justify-content:center;vertical-align:middle;border:1px solid var(--badge-border);border-radius:var(--badge-radius);padding:0 var(--badge-pad);color:var(--badge-foreground);background:var(--badge-background);font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:-.005em;line-height:1;white-space:nowrap;overflow:clip;transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n:root[data-theme=dark] .badge{--badge-tint:12%;--badge-ink:94%}\n@media (prefers-reduced-motion:reduce){.badge{transition-duration:var(--duration-instant)}\n.outline{--badge-border:color-mix(in oklab,var(--badge-tone) 14%,var(--border))}\n:root[data-theme=dark] .outline{--badge-border:color-mix(in oklab,var(--badge-tone) 22%,var(--border))}\n.sm{--badge-height:20px;--badge-radius:5px;--badge-pad:8px;--badge-gap:4px;--badge-icon:12px;--badge-dot:5px;font-size:11px}\n.md{--badge-height:24px;--badge-radius:6px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px}\n.lg{--badge-height:28px;--badge-radius:7px;--badge-pad:12px;--badge-gap:6px;--badge-icon:16px;--badge-dot:7px;font-size:var(--text-sm)}\n.pill{--badge-radius:var(--radius-pill)}\n.withIcon{padding-inline-start:calc(var(--badge-pad) - 2px)}\n.withDot{padding-inline-start:calc(var(--badge-pad) - 1px)}\n.body,.content{display:flex;align-items:center}\n.content{position:relative;width:max-content;gap:var(--badge-gap)}\n.glyph,.label{position:relative;display:inline-flex;align-items:center}\n.glyph>svg{display:block;width:var(--badge-icon);height:var(--badge-icon)}\n.text{display:block;text-box:trim-both cap alphabetic}\n.icon{position:relative;display:inline-flex;flex:none;align-items:center;justify-content:center;color:var(--badge-color);line-height:0}\n.dot{display:block;width:var(--badge-dot);height:var(--badge-dot);flex:none;border-radius:50%;background:var(--badge-color)}\n.neutral{--badge-tone:var(--text-secondary)}\n.info{--badge-tone:var(--info,var(--tone-sky))}\n.success{--badge-tone:var(--success)}\n.warning{--badge-tone:var(--warning)}\n.amber,.warning{--badge-ink:76%}\n.danger{--badge-tone:var(--danger)}\n.teal{--badge-tone:var(--tone-teal)}\n.sky{--badge-tone:var(--tone-sky)}\n.orchid{--badge-tone:var(--tone-orchid)}\n.violet{--badge-tone:var(--tone-violet)}\n.rose{--badge-tone:var(--tone-rose)}\n.amber{--badge-tone:var(--tone-amber)}", {"badge":"badge","outline":"outline","sm":"sm","md":"md","lg":"lg","pill":"pill","withIcon":"withIcon","withDot":"withDot","body":"body","content":"content","glyph":"glyph","label":"label","text":"text","icon":"icon","dot":"dot","neutral":"neutral","info":"info","success":"success","warning":"warning","amber":"amber","danger":"danger","teal":"teal","sky":"sky","orchid":"orchid","violet":"violet","rose":"rose"});
A.reg(35978, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { p: () => x });
  var a = i(95155), r = i(12115), n = i(18310), s = i(80642), o = i(25354), l = i(7770), d = i(14290), u = i.n(d);
  let c = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    })
  };
  function p({ word: e2 }) {
    let t2 = (0, n.I)(), [i2, d2] = (0, r.useState)({ word: e2, direction: 1 });
    i2.word !== e2 && d2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(i2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), h2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, a.jsx)(s.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, a.jsx)(
          o.PY1.span,
          {
            className: u().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: h2,
            children: (0, a.jsx)(s.N, {
              initial: false,
              mode: "popLayout",
              custom: i2.direction,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  custom: i2.direction,
                  variants: c,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: h2,
                  children: e3
                },
                e3
              )
            })
          },
          m2.length - t3
        )
      )
    });
  }
  function m({ text: e2 }) {
    let t2 = (0, n.I)(), i2 = e2.split(" ");
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, a.jsx)("span", {
          className: u().words,
          "aria-hidden": "true",
          children: (0, a.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, r2) => (0, a.jsxs)(
                o.PY1.span,
                {
                  className: u().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${l.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${l.T.blur.subtle}px)`,
                    transition: {
                      duration: l.T.duration.exit,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, a.jsx)(p, { word: e3 }) : e3,
                    r2 < i2.length - 1 ? " " : null
                  ]
                },
                `${r2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: r2 }) {
    return (0, a.jsx)(s.N, {
      initial: false,
      children: t2 ? (0, a.jsx)(f, { id: e2, text: t2, className: i2, alert: r2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: s2 }) {
    let d2 = (0, n.I)(), c2 = (0, r.useRef)(null), [p2, h2] = (0, r.useState)("auto");
    return (0, r.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && h2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(o.PY1.span, {
      className: u().messageSlot,
      initial: !d2 && { height: 0, opacity: 0 },
      animate: { height: p2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: d2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: d2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, a.jsx)(o.PY1.span, {
        ref: c2,
        id: e2,
        className: i2,
        role: s2 ? "alert" : void 0,
        initial: !d2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: d2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, a.jsx)(m, { text: t2 })
      })
    });
  }
  let x = (0, r.forwardRef)(function({ label: e2, description: t2, error: i2, id: n2, className: s2, ...o2 }, l2) {
    let d2 = (0, r.useId)(), c2 = n2 ?? d2, p2 = t2 ? `${c2}-description` : void 0, m2 = i2 ? `${c2}-error` : void 0, f2 = [o2["aria-describedby"], p2, m2].filter(Boolean).join(" ") || void 0;
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)("label", { className: u().label, htmlFor: c2, children: e2 }),
        (0, a.jsx)("input", {
          ...o2,
          id: c2,
          ref: l2,
          className: [u().input, s2].filter(Boolean).join(" "),
          "aria-invalid": !!i2 || o2["aria-invalid"],
          "aria-describedby": f2
        }),
        (0, a.jsx)(h, { id: p2, text: t2, className: u().description }),
        (0, a.jsx)(h, { id: m2, text: i2, className: u().error, alert: true })
      ]
    });
  });
  x.displayName = "Input";
}

__m(__module,__exports,__require);
});
A.reg(41189, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var r = a(51811);
  let l = {
    name: "rotate-cw",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
          key: "1p45f6"
        }
      ],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
    ]
  };
  l.node;
  let n = (0, r.A)(l);
}

__m(__module,__exports,__require);
});
A.regCss(42842, ".field{display:inline-flex;align-items:flex-start;gap:0;min-width:0}\n.box{position:relative;flex:0 0 auto;display:grid;place-items:center;width:var(--control-height-md);height:var(--control-height-md);border:0;border-radius:var(--radius-control);padding:0;background:transparent;color:var(--control-glyph);cursor:pointer;-webkit-tap-highlight-color:transparent}\n.box[data-state=checked] .visual,.box[data-state=indeterminate] .visual{border-color:var(--control-on)}\n@media (hover:hover) and (pointer:fine){.box[data-state=unchecked]:hover:not(:disabled) .visual{border-color:var(--text-muted)}\n.box:active:not(:disabled) .visual{transform:scale(.95);transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.box:disabled{opacity:.5;cursor:not-allowed}\n@media (prefers-reduced-motion:reduce){.box:active:not(:disabled) .visual,.visual{transition:none;transform:none}\n.visual{position:relative;display:block;width:18px;height:18px;border:1px solid var(--border-strong);border-radius:5px;background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.fill{position:absolute;inset:-1px;border-radius:inherit;background:var(--control-on)}\n.mark{position:absolute;inset:-1px;width:18px;height:18px;overflow:visible}\n.copy{display:grid;gap:2px;min-width:0;margin-left:1px;padding-top:calc((var(--control-height-md) - var(--text-sm) * 1.4) / 2)}\n.copy label{color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);cursor:pointer}\n.copy span{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}", {});
A.reg(47279, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { bL: () => g });
  var a = i(12115), r = i(47527), n = i(68599), s = i(70379), o = i(59322), l = i(63509), d = i(55897), u = i(95155), c = Object.defineProperty, p = (e2, t2) => c(e2, "name", { value: t2, configurable: true }), m = "Checkbox", [h, f] = (0, n.A)(m), [x, _] = h(m);
  function y(e2) {
    let {
      __scopeCheckbox: t2,
      checked: i2,
      children: r2,
      defaultChecked: n2,
      disabled: s2,
      form: l2,
      name: d2,
      onCheckedChange: c2,
      required: p2,
      value: h2 = "on",
      internal_do_not_use_render: f2
    } = e2, [_2, y2] = (0, o.i)({
      prop: i2,
      defaultProp: n2 ?? false,
      onChange: c2,
      caller: m
    }), [b2, g2] = a.useState(null), [j2, T2] = a.useState(null), k = a.useRef(false), [N, C] = a.useReducer((e3) => e3 + 1, 0), S = !b2 || !!l2 || !!b2.closest("form"), P = {
      checked: _2,
      disabled: s2,
      setChecked: y2,
      control: b2,
      setControl: g2,
      name: d2,
      form: l2,
      value: h2,
      hasConsumerStoppedPropagationRef: k,
      userInteractionCount: N,
      onUserInteraction: C,
      required: p2,
      defaultChecked: !w(n2) && n2,
      isFormControl: S,
      bubbleInput: j2,
      setBubbleInput: T2
    };
    return (0, u.jsx)(x, { scope: t2, ...P, children: v(f2) ? f2(P) : r2 });
  }
  p(y, "CheckboxProvider");
  var b = a.forwardRef(
    p(function({ __scopeCheckbox: e2, onKeyDown: t2, onClick: i2, ...n2 }, o2) {
      let {
        control: l2,
        value: c2,
        disabled: m2,
        checked: h2,
        required: f2,
        setControl: x2,
        setChecked: y2,
        hasConsumerStoppedPropagationRef: b2,
        onUserInteraction: g2,
        isFormControl: j2,
        bubbleInput: v2
      } = _("CheckboxTrigger", e2), k = (0, r.s)(o2, x2), N = a.useRef(h2);
      return a.useEffect(() => {
        let e3 = l2?.form;
        if (e3) {
          let t3 = p(() => y2(N.current), "reset");
          return e3.addEventListener("reset", t3), () => e3.removeEventListener("reset", t3);
        }
      }, [l2, y2]), (0, u.jsx)(d.sG.button, {
        type: "button",
        role: "checkbox",
        "aria-checked": w(h2) ? "mixed" : h2,
        "aria-required": f2,
        "data-state": T(h2),
        "data-disabled": m2 ? "" : void 0,
        disabled: m2,
        value: c2,
        ...n2,
        ref: k,
        onKeyDown: (0, s.mK)(t2, (e3) => {
          "Enter" === e3.key && e3.preventDefault();
        }),
        onClick: (0, s.mK)(i2, (e3) => {
          g2(), y2((e4) => !!w(e4) || !e4), v2 && j2 && (b2.current = e3.isPropagationStopped(), b2.current || e3.stopPropagation());
        })
      });
    }, "CheckboxTrigger")
  ), g = a.forwardRef(
    p(function(e2, t2) {
      let {
        __scopeCheckbox: i2,
        name: a2,
        checked: r2,
        defaultChecked: n2,
        required: s2,
        disabled: o2,
        value: l2,
        onCheckedChange: d2,
        form: c2,
        ...p2
      } = e2;
      return (0, u.jsx)(y, {
        __scopeCheckbox: i2,
        checked: r2,
        defaultChecked: n2,
        disabled: o2,
        required: s2,
        onCheckedChange: d2,
        name: a2,
        form: c2,
        value: l2,
        internal_do_not_use_render: ({ isFormControl: e3 }) => (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)(b, { ...p2, ref: t2, __scopeCheckbox: i2 }),
            e3 && (0, u.jsx)(j, { __scopeCheckbox: i2 })
          ]
        })
      });
    }, "Checkbox")
  ), j = a.forwardRef(
    p(function({ __scopeCheckbox: e2, onClick: t2, ...i2 }, n2) {
      let {
        control: o2,
        hasConsumerStoppedPropagationRef: c2,
        userInteractionCount: p2,
        checked: m2,
        defaultChecked: h2,
        required: f2,
        disabled: x2,
        name: y2,
        value: b2,
        form: g2,
        bubbleInput: j2,
        setBubbleInput: v2
      } = _("CheckboxBubbleInput", e2), T2 = (0, r.s)(n2, v2), k = (0, l.X)(o2), N = a.useRef(false), C = a.useRef(m2), S = a.useRef(p2);
      a.useEffect(() => {
        if (!j2) return;
        let e3 = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "checked"
        ).set, t3 = p2 !== S.current;
        S.current = p2;
        let i3 = C.current !== m2;
        C.current = m2;
        let a2 = !(t3 && c2.current);
        if (i3 && e3) {
          N.current = !t3;
          let i4 = new Event("click", { bubbles: a2 });
          j2.indeterminate = w(m2), e3.call(j2, !w(m2) && m2), j2.dispatchEvent(i4), N.current = false;
        }
      }, [j2, m2, c2, p2]);
      let P = a.useRef(!w(m2) && m2);
      return (0, u.jsx)(d.sG.input, {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: h2 ?? P.current,
        required: f2,
        disabled: x2,
        name: y2,
        value: b2,
        form: g2,
        ...i2,
        tabIndex: -1,
        ref: T2,
        onClick: (0, s.mK)(t2, (e3) => {
          N.current && e3.stopPropagation();
        }),
        style: {
          ...i2.style,
          ...k,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          transform: "translateX(-100%)"
        }
      });
    }, "CheckboxBubbleInput")
  );
  function v(e2) {
    return "function" == typeof e2;
  }
  function w(e2) {
    return "indeterminate" === e2;
  }
  function T(e2) {
    return w(e2) ? "indeterminate" : e2 ? "checked" : "unchecked";
  }
  p(v, "isFunction"), p(w, "isIndeterminate"), p(T, "getState");
}

__m(__module,__exports,__require);
});
A.reg(90034, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { E: () => v });
  var n = a(95155), r = a(12115), i = a(79196), s = a(25354), l = a(18310), o = a(28245), d = a(92171), u = a(80642), c = a(7770), p = a(22346), _ = a.n(p);
  let m = { duration: c.T.duration.fast, ease: [...c.T.ease.standard] }, f = { opacity: 0, y: "0.3em", filter: `blur(${c.T.blur.soft}px)` }, y = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${c.T.blur.subtle}px)`,
    transition: m
  }, b = { opacity: 0, scale: 0.6, filter: `blur(${c.T.blur.subtle}px)` }, h = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" }, g = { opacity: 0, transition: { duration: c.T.duration.instant } };
  function x(e2) {
    let t2 = (0, i.tF)();
    return (0, n.jsx)(s.PY1.span, {
      ...e2,
      "aria-hidden": !t2 || e2["aria-hidden"]
    });
  }
  function v({
    tone: e2 = "neutral",
    size: t2 = "md",
    icon: a2,
    dot: i2 = false,
    color: p2,
    outline: j = false,
    pill: k = false,
    className: T,
    children: N,
    ...w
  }) {
    let M = (0, l.I)(), A = "string" == typeof N || "number" == typeof N ? String(N) : null, E = a2 ? (function(e3) {
      if (!(0, r.isValidElement)(e3)) return "icon";
      let t3 = e3.type;
      return "string" == typeof t3 ? t3 : t3.displayName ?? t3.name ?? "icon";
    })(a2) : "", z = (0, r.useRef)(null), S = (0, r.useRef)(null), $ = (0, o.d)("auto"), R = (0, r.useRef)(0);
    (0, r.useLayoutEffect)(() => {
      R.current = performance.now();
    }, [A, E]), (0, r.useEffect)(() => {
      let e3, t3, a3 = S.current;
      if (!a3 || "u" < typeof ResizeObserver) return;
      let n2 = () => {
        $.jump("auto"), z.current && (z.current.style.width = "auto");
      }, r2 = new ResizeObserver(([r3]) => {
        if (!r3) return;
        let i3 = r3.borderBoxSize?.[0]?.inlineSize ?? a3.offsetWidth, s2 = $.get(), l2 = "number" == typeof s2 ? s2 : e3;
        if (e3 = i3, t3?.stop(), M || void 0 === l2 || l2 === i3 || performance.now() - R.current > 120)
          return n2();
        z.current && (z.current.style.width = `${l2}px`), t3 = (0, d.i)($, [l2, i3], {
          ...c.T.spring.morph,
          onComplete: n2
        });
      });
      return r2.observe(a3), () => {
        r2.disconnect(), t3?.stop();
      };
    }, [$, M]);
    let I = M ? { duration: c.T.duration.instant } : { duration: c.T.duration.standard, ease: [...c.T.ease.enter] }, P = a2 ? _().withIcon : i2 ? _().withDot : void 0, C = [
      _().badge,
      _()[e2],
      p2 ? _()[p2] : void 0,
      _()[t2],
      P,
      j ? _().outline : void 0,
      k ? _().pill : void 0,
      T
    ].filter(Boolean).join(" ");
    return (0, n.jsx)("span", {
      ...w,
      className: C,
      children: (0, n.jsx)(s.PY1.span, {
        ref: z,
        className: _().body,
        style: { width: $ },
        children: (0, n.jsxs)("span", {
          ref: S,
          className: _().content,
          children: [
            !a2 && i2 ? (0, n.jsx)("span", {
              className: _().icon,
              "aria-hidden": "true",
              children: (0, n.jsx)("span", { className: _().dot })
            }) : null,
            a2 ? (0, n.jsx)("span", {
              className: _().icon,
              "aria-hidden": "true",
              children: (0, n.jsx)(u.N, {
                mode: "popLayout",
                initial: false,
                children: (0, n.jsx)(
                  x,
                  {
                    className: _().glyph,
                    initial: M ? { opacity: 0 } : b,
                    animate: h,
                    exit: M ? g : { ...b, transition: m },
                    transition: M ? I : c.T.spring.snappy,
                    children: a2
                  },
                  E
                )
              })
            }) : null,
            null === A ? N : (0, n.jsx)("span", {
              className: _().label,
              children: (0, n.jsx)(u.N, {
                mode: "popLayout",
                initial: false,
                children: (0, n.jsx)(
                  x,
                  {
                    className: _().text,
                    initial: M ? { opacity: 0 } : f,
                    animate: h,
                    exit: M ? g : y,
                    transition: I,
                    children: A
                  },
                  A
                )
              })
            })
          ]
        })
      })
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(90062, ".hooks{--mono:ui-monospace,\"SFMono-Regular\",Menlo,Consolas,monospace;--inline:20px;--tint:color-mix(in oklab,var(--surface-muted) 80%,var(--surface));container:hooks/inline-size;width:min(100%,1100px);min-width:0;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body)}\n[data-layout=app] .hooks{padding:clamp(16px,3vw,32px)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.swap{position:relative;display:inline-flex}\n.inspectorTitle .swap{display:flex;max-width:100%}\n.swapText{display:inline-block;white-space:nowrap}\n.inspectorTitle .swapText{min-width:0;max-width:100%;overflow:hidden;text-overflow:ellipsis}\n.swapBlock{position:relative;display:block}\n.swapWrap{display:block}\n.mono{font-family:var(--mono);letter-spacing:0}\n.roll{position:relative;display:inline-flex;font-variant-numeric:tabular-nums}\n.count .roll{color:var(--foreground);font-weight:500}\n.rate .roll{font-size:var(--text-sm);font-weight:500;line-height:1.3}\n.rollSlot{position:relative;display:inline-block}\n.rollSlot>span{display:inline-block}\n.top{padding:16px var(--inline)}\n@container hooks (max-width: 540px){.detail,.endpoints,.footer,.top{--inline:16px}\n.header h2{margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.header p{max-width:540px;margin:2px 0 0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.toolbar{container:toolbar/inline-size;display:grid;margin-top:16px}\n.toolbar>*{grid-area:1/1}\n.count{display:flex;min-width:0;height:36px;align-items:center;align-self:start;justify-self:start;gap:4px;margin:0;padding-right:168px;color:var(--text-secondary);font-size:var(--text-sm);white-space:nowrap;transition:opacity var(--duration-standard) var(--ease-standard) .1s,visibility 0s linear 0s}\n.count[data-hidden=true]{opacity:0;visibility:hidden;transition:opacity var(--duration-instant) var(--ease-standard),visibility 0s linear var(--duration-instant)}\n.count{padding-right:0}\n@media (prefers-reduced-motion:reduce){.bar,.count,.delivery:before,.endpoint:before,.eventName,.flash,.ok,.shell,.tab,.toggle{transition:none}\n.countNote{display:inline-flex;min-width:0;align-items:center;color:var(--text-muted)}\n.countNote:before{content:\"\";width:3px;height:3px;flex:none;margin:0 8px 0 6px;border-radius:50%;background:var(--border-strong)}\n.countNote{display:none}\n.shell{--well:color-mix(in oklab,var(--foreground) 5.5%,var(--surface));position:relative;z-index:1;align-self:start;justify-self:end;max-width:100%;overflow:clip;border-radius:var(--radius-control);background:var(--well);transition:background-color var(--duration-fast) var(--ease-standard)}\n.shell[data-open=false]{cursor:pointer}\n@media (hover:hover) and (pointer:fine){.shell[data-open=false]:hover{background:color-mix(in oklab,var(--foreground) 9%,var(--surface))}\n.shell[data-open=false]:active{background:color-mix(in oklab,var(--foreground) 11%,var(--surface))}\n.shell[data-open=false] .toggle:after{content:\"\";position:absolute;inset:0}\n@media (hover:hover) and (pointer:fine){.shell[data-open=true] .toggle:hover{background:color-mix(in oklab,var(--foreground) 8%,transparent)}\n.shell[data-open=true] .toggle:active{background:color-mix(in oklab,var(--foreground) 11%,transparent)}\n.shellInner{display:flex;flex-direction:column;align-items:flex-start}\n.face{display:flex;width:max-content;height:36px;flex:none;align-items:center;gap:2px;padding:0 14px 0 6px}\n.toggle{display:grid;width:28px;height:28px;flex:none;place-items:center;border:0;border-radius:var(--radius-pill);padding:0;background:transparent;color:var(--foreground);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.toggleIcon{display:grid;place-items:center}\n.title{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);white-space:nowrap}\n.body{position:relative;width:100cqw;flex:none;margin-inline-start:calc(100% - 100cqw);padding:4px 14px 14px}\n.form,.reveal{display:grid;gap:16px}\n.fields{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);align-items:start;gap:16px}\n@container toolbar (max-width: 520px){.eventGrid,.fields{grid-template-columns:minmax(0,1fr)}\n.fieldLabel{color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.eventSet{min-width:0;margin:0;border:0;padding:0}\n.eventSet legend{margin-bottom:2px;padding:0;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.eventSet .eventGrid label{font-family:var(--mono);font-size:var(--text-xs);font-weight:500;letter-spacing:0;overflow-wrap:anywhere}\n.eventGrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));column-gap:16px;margin-inline-start:-13px}\n@container toolbar (max-width: 760px){.eventGrid{grid-template-columns:repeat(2,minmax(0,1fr))}\n.fieldError{overflow:hidden;margin:0;color:var(--danger);font-size:var(--text-xs);line-height:var(--leading-body)}\n.fieldError span{display:block;padding-top:4px}\n.actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:8px}\n.hint{min-width:0;margin-right:auto;padding-right:8px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.hint{flex-basis:100%;padding:0 0 4px}\n.secretBlock{display:grid;gap:8px}\n.secretField{display:flex;min-height:48px;align-items:center;gap:12px;border:1px solid color-mix(in oklab,var(--accent) 45%,var(--border));border-radius:12px;padding:6px 6px 6px 14px;background:var(--surface)}\n.secret{flex:1;min-width:0;color:var(--foreground);font-family:var(--mono);font-size:var(--text-sm);letter-spacing:0;line-height:1.5;overflow-wrap:anywhere;user-select:all;-webkit-user-select:all}\n.once{display:flex;align-items:flex-start;gap:8px;margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.once svg{flex:none;margin-top:1px;color:var(--warning)}\n.row{position:relative}\n.row+.row .endpoint{border-top:1px solid var(--border-subtle)}\n.delivery:before,.endpoint:before,.flash,.highlight{position:absolute;inset:2px 8px;border-radius:10px;pointer-events:none}\n.endpoint .highlight{background:var(--accent-subtle)}\n.delivery .flash,.delivery .highlight,.delivery:before{inset:2px 8px;border-radius:10px}\n.delivery .highlight{background:var(--tint);box-shadow:inset 0 0 0 1px var(--border)}\n@container hooks (max-width: 380px){.delivery .flash,.delivery .highlight,.delivery:before,.endpoint:before,.flash,.highlight{inset-inline:6px}\n.flash{background:var(--accent-subtle);opacity:0;transition:opacity 1.2s var(--ease-standard) .3s}\n[data-fresh=true]>.flash{opacity:1;transition:none}\n.delivery:before,.endpoint:before{content:\"\";background:var(--tint);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.endpoint{position:relative}\n@media (hover:hover) and (pointer:fine){.endpoint:hover:before{opacity:1}\n.delivery{position:relative;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center}\n@media (hover:hover) and (pointer:fine){.delivery:hover:before{opacity:1}\n.delivery[data-resolved=true] .eventName{color:var(--text-secondary)}\n.endpoints{border-top:1px solid var(--border);padding-block:4px}\n.endpointButton{position:relative;z-index:1;display:grid;width:100%;grid-template-columns:minmax(0,1.2fr) minmax(0,1.3fr) 72px 104px;align-items:center;column-gap:20px;border:0;padding:10px var(--inline);background:transparent;color:inherit;font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}\n@container hooks (max-width: 760px){.endpointButton{grid-template-columns:minmax(0,1fr) auto;column-gap:12px;row-gap:4px}\n.identity{display:grid;min-width:0;gap:2px}\n.identity{grid-column:1;grid-row:1/span 2}\n.name{font-size:var(--text-sm);font-weight:500}\n.name,.url{overflow:hidden;line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}\n.url{color:var(--text-muted);font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0}\n.host{color:var(--text-secondary)}\n.events{display:flex;min-width:0;flex-wrap:wrap;gap:4px}\n.events{display:none}\n.chip{display:inline-flex;height:22px;align-items:center;border:1px solid var(--border);border-radius:var(--radius-pill);padding:0 8px;background:var(--surface);color:var(--text-secondary);font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0;white-space:nowrap}\n.rate{display:grid;justify-items:end;gap:1px}\n.rate{grid-column:2;grid-row:1}\n.rateLabel{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.rateLabel{display:none}\n.state{display:flex;min-width:0;justify-content:flex-end}\n.state{grid-column:2;grid-row:2}\n.detail{border-top:1px solid var(--border)}\n.detailHead{padding:16px var(--inline) 0}\n.detailTitle h3{margin:0;font-size:var(--text-sm);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.3}\n.detailMeta{position:relative;margin-top:4px;overflow-x:clip}\n.detailMeta p{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px;margin:0 0 0 -11px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.metaAvatar{width:20px;height:20px;flex:none}\n.metaItem{display:inline-flex;align-items:center;gap:8px}\n.dot{width:3px;height:3px;flex:none;border-radius:50%;background:var(--border-strong)}\n.chartBlock{padding:16px var(--inline) 0}\n.caption{display:flex;min-height:20px;flex-wrap:wrap;align-items:center;gap:4px 12px;margin:0 0 8px;color:var(--text-secondary);font-size:var(--text-xs);line-height:var(--leading-body);font-variant-numeric:tabular-nums}\n.legend{display:inline-flex;align-items:center;gap:6px}\n.swatch{width:8px;height:8px;flex:none;border-radius:2px;background:var(--danger)}\n.legendMuted{color:var(--text-muted)}\n.readoutTime{color:var(--foreground);font-weight:500}\n.chart{display:grid;height:56px;grid-template-columns:repeat(48,minmax(0,1fr));align-items:end;column-gap:clamp(2px,.5cqw,5px);border-bottom:1px solid var(--border);touch-action:pan-y}\n.chart[data-hover=true] .bar:not([data-active=true]){opacity:.45}\n.bar{display:flex;min-width:0;flex-direction:column;overflow:hidden;border-radius:2px 2px 0 0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.bar[data-active=true] .ok{background:color-mix(in oklab,var(--foreground) 55%,transparent)}\n.fail{display:block;flex:none;box-sizing:border-box;padding-bottom:1px;background:var(--danger);background-clip:content-box}\n.ok{display:block;flex:1;background:color-mix(in oklab,var(--foreground) 20%,transparent);transition:background-color var(--duration-fast) var(--ease-standard)}\n.axis{position:relative;height:16px;margin-top:6px;color:var(--text-muted);font-size:var(--text-xs);line-height:16px;font-variant-numeric:tabular-nums}\n.axis span{position:absolute;top:0;white-space:nowrap}\n.axis .now{right:0}\n.follow{margin-top:16px;overflow:clip;border-top:1px solid var(--border)}\n.followInner{position:relative;display:grid}\n.followInner>*{grid-area:1/1;min-width:0}\n.split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr)}\n@container hooks (max-width: 880px){.split{grid-template-columns:minmax(0,1fr)}\n.deliveries{container:deliveries/inline-size;min-width:0;padding:12px 0;border-right:1px solid var(--border)}\n.deliveries{border-right:0;border-bottom:1px solid var(--border)}\n.sectionLabel{margin:0 0 6px;padding:0 var(--inline);color:var(--text-muted);font-size:var(--text-xs);font-weight:500;line-height:var(--leading-body)}\n.deliveryButton{position:relative;z-index:1;display:grid;min-width:0;min-height:40px;grid-template-columns:44px minmax(0,1fr) auto auto;align-items:center;column-gap:12px;border:0;padding:6px 4px 6px var(--inline);background:transparent;color:inherit;font:inherit;letter-spacing:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}\n@container deliveries (max-width: 460px){.deliveryButton{grid-template-columns:44px minmax(0,1fr);row-gap:2px}\n.statusCode{justify-self:start;font-variant-numeric:tabular-nums}\n.eventCell{display:flex;min-width:0;flex-wrap:wrap;align-items:baseline;column-gap:8px}\n.eventName{min-width:0;max-width:100%;overflow:hidden;font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0;line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}\n.attempt{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);white-space:nowrap}\n.meta{display:contents}\n.meta{display:flex;grid-column:2;gap:12px}\n.latency,.time{color:var(--text-secondary);font-size:var(--text-xs);line-height:var(--leading-body);font-variant-numeric:tabular-nums;text-align:right;white-space:nowrap}\n.latency{min-width:52px}\n.latency,.time{min-width:0;font-size:var(--text-xs);text-align:left}\n.time{min-width:52px;color:var(--text-muted)}\n.action{position:relative;z-index:1;display:flex;min-width:100px;justify-content:flex-end;padding-right:16px}\n.action>span{display:inline-flex}\n.action{min-width:0;padding-right:16px}\n.resolved{align-items:center;gap:6px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);white-space:nowrap}\n.resolved svg{color:var(--success)}\n.emptyWrap{position:relative}\n.empty{display:grid;justify-items:start;gap:6px;padding:8px var(--inline) 4px}\n.empty p{margin:0;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.empty span{max-width:360px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.empty button{margin-top:8px}\n.inspector{container:inspector/inline-size;display:flex;min-width:0;flex-direction:column;gap:12px;padding:16px var(--inline) 20px 20px}\n.inspector{padding-left:var(--inline)}\n.placeholder{margin:0;padding:8px 0;color:var(--text-muted);font-size:var(--text-sm);line-height:var(--leading-body)}\n.inspectorHead{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}\n.inspectorHead>:last-child{flex:none}\n.inspectorTitle{min-width:0}\n.inspectorTitle h4{margin:0;font-family:var(--mono);font-size:var(--text-sm);font-weight:500;letter-spacing:0;line-height:1.4}\n.inspectorTitle p{margin:2px 0 0;color:var(--text-muted);font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0;line-height:var(--leading-body)}\n.response{display:grid;gap:6px}\n.responseLine{display:flex;flex-wrap:wrap;align-items:center;gap:8px;color:var(--text-secondary);font-size:var(--text-xs);line-height:var(--leading-body);font-variant-numeric:tabular-nums}\n.responseLabel{color:var(--text-muted)}\n.responseBody{display:block;min-width:0;color:var(--text-secondary);font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0;line-height:1.5;overflow-wrap:anywhere}\n.tabs{display:inline-flex;align-self:flex-start;gap:2px;border-radius:var(--radius-pill);padding:2px;background:var(--surface-muted)}\n.tab{position:relative;height:28px;border:0;border-radius:var(--radius-pill);padding:0 12px;background:transparent;color:var(--text-secondary);font:inherit;font-size:var(--text-sm);font-weight:500;letter-spacing:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.tab[aria-selected=true]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.tab:hover{color:var(--foreground)}\n.tabHighlight{position:absolute;inset:0;border-radius:inherit;background:var(--surface);box-shadow:inset 0 0 0 1px var(--border)}\n.tabLabel{position:relative}\n.panel{position:relative;height:16rem;overflow:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:10px;background:var(--tint)}\n.panelBody{min-width:100%}\n.code{width:max-content;min-width:100%;margin:0;padding:12px 16px 12px 0;color:var(--text-muted);font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0;line-height:20px}\n.code code{font:inherit}\n.line{display:block;white-space:pre}\n.lineNumber{display:inline-block;width:40px;padding-right:16px;color:var(--text-muted);opacity:.6;text-align:right;user-select:none;-webkit-user-select:none}\n.key{color:var(--foreground)}\n.string{color:var(--text-secondary)}\n.literal,.number{color:var(--accent)}\n.headers{display:grid;gap:8px;margin:0;padding:12px 16px}\n.headers div{display:grid;grid-template-columns:144px minmax(0,1fr);gap:12px}\n.headers dt{color:var(--text-muted);font-size:var(--text-xs);line-height:20px}\n.headers dd{min-width:0;margin:0;color:var(--foreground);font-family:var(--mono);font-size:var(--text-xs);letter-spacing:0;line-height:20px;overflow-wrap:anywhere}\n@container inspector (max-width: 420px){.headers div{grid-template-columns:minmax(0,1fr);gap:0}\n.footer{display:flex;min-height:44px;align-items:center;justify-content:space-between;gap:24px;border-top:1px solid var(--border);padding:10px var(--inline);color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.footer>span{flex:none}\n.footer p{min-width:0;overflow:hidden;margin:0;color:var(--text-secondary);text-align:right;text-overflow:ellipsis;white-space:nowrap}\n.footer{flex-direction:column;align-items:flex-start;gap:2px}\n.footer p{text-align:left;white-space:normal}", {"hooks":"hooks","srOnly":"srOnly","swap":"swap","inspectorTitle":"inspectorTitle","swapText":"swapText","swapBlock":"swapBlock","swapWrap":"swapWrap","mono":"mono","roll":"roll","count":"count","rate":"rate","rollSlot":"rollSlot","top":"top","detail":"detail","endpoints":"endpoints","footer":"footer","header":"header","toolbar":"toolbar","bar":"bar","delivery":"delivery","endpoint":"endpoint","eventName":"eventName","flash":"flash","ok":"ok","shell":"shell","tab":"tab","toggle":"toggle","countNote":"countNote","shellInner":"shellInner","face":"face","toggleIcon":"toggleIcon","title":"title","body":"body","form":"form","reveal":"reveal","fields":"fields","eventGrid":"eventGrid","fieldLabel":"fieldLabel","eventSet":"eventSet","fieldError":"fieldError","actions":"actions","hint":"hint","secretBlock":"secretBlock","secretField":"secretField","secret":"secret","once":"once","row":"row","highlight":"highlight","endpointButton":"endpointButton","identity":"identity","name":"name","url":"url","host":"host","events":"events","chip":"chip","rateLabel":"rateLabel","state":"state","detailHead":"detailHead","detailTitle":"detailTitle","detailMeta":"detailMeta","metaAvatar":"metaAvatar","metaItem":"metaItem","dot":"dot","chartBlock":"chartBlock","caption":"caption","legend":"legend","swatch":"swatch","legendMuted":"legendMuted","readoutTime":"readoutTime","chart":"chart","fail":"fail","axis":"axis","now":"now","follow":"follow","followInner":"followInner","split":"split","deliveries":"deliveries","sectionLabel":"sectionLabel","deliveryButton":"deliveryButton","statusCode":"statusCode","eventCell":"eventCell","attempt":"attempt","meta":"meta","latency":"latency","time":"time","action":"action","resolved":"resolved","emptyWrap":"emptyWrap","empty":"empty","inspector":"inspector","placeholder":"placeholder","inspectorHead":"inspectorHead","response":"response","responseLine":"responseLine","responseLabel":"responseLabel","responseBody":"responseBody","tabs":"tabs","tabHighlight":"tabHighlight","tabLabel":"tabLabel","panel":"panel","panelBody":"panelBody","code":"code","line":"line","lineNumber":"lineNumber","key":"key","string":"string","literal":"literal","number":"number","headers":"headers"});
A.reg(91957, function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.r(t), a.d(t, { Webhooks: () => em, default: () => eb });
  var i, n = a(95155), s = a(12115), r = a(80642), o = a(79196), l = a(25354), d = a(28245), c = a(92171), u = a(18310), p = a(57700), h = a(11012), _ = a(64577), m = a(41189), b = a(2125), f = a(92218), y = a(90034), x = a(51288), v = a(20530), j = a(73474), g = a(35978), w = a(7770);
  let k = { name: "Sofia Ramirez", photo: "media/people/sofia-ramirez.svg" }, N = [
    { id: "order.paid", description: "An order is paid in full" },
    {
      id: "order.refunded",
      description: "An order is refunded, fully or in part"
    },
    { id: "invoice.paid", description: "A subscription invoice is paid" },
    {
      id: "invoice.payment_failed",
      description: "A renewal charge is declined"
    },
    { id: "payout.paid", description: "A payout reaches your bank" },
    { id: "dispute.created", description: "A customer disputes a charge" }
  ], T = {
    200: "OK",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    504: "Gateway Timeout"
  };
  function $(e2) {
    let t2 = (function(e3) {
      let t3 = 2166136261;
      for (let a2 of e3) t3 = Math.imul(t3 ^ a2.charCodeAt(0), 16777619);
      return t3 >>> 0 || 1;
    })(e2);
    return () => (t2 ^= t2 << 13, t2 ^= t2 >>> 17, t2 ^= t2 << 5, (t2 >>>= 0) / 4294967296);
  }
  function S(e2, t2, a2 = "0123456789abcdef") {
    let i2 = $(e2), n2 = "";
    for (let e3 = 0; e3 < t2; e3++) n2 += a2[Math.floor(i2() * a2.length)];
    return n2;
  }
  let R = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", C = (e2) => e2.split(":").map(Number), L = (e2) => {
    let [t2, a2, i2] = C(e2);
    return Date.UTC(2026, 8, 22, t2, a2, i2) / 1e3;
  }, P = (e2) => {
    let [t2, a2] = C(e2);
    return Math.min(47, Math.floor(((t2 + 9) * 60 + a2) / 30));
  }, I = (e2) => {
    let t2 = (900 + 30 * e2) % 1440, a2 = (t2 + 30) % 1440, i2 = (e3) => `${String(Math.floor(e3 / 60)).padStart(2, "0")}:${String(e3 % 60).padStart(2, "0")}`;
    return 47 === e2 ? `${i2(t2)} to now` : `${i2(t2)} to ${i2(a2)}`;
  }, E = (e2) => {
    let t2 = 52325 + 9 * e2;
    return [Math.floor(t2 / 3600), Math.floor(t2 / 60) % 60, t2 % 60].map((e3) => String(e3).padStart(2, "0")).join(":");
  };
  function M(e2, t2) {
    let a2 = $(e2);
    return Array.from({ length: 48 }, (e3, i2) => {
      let n2 = Math.round(
        (0.1 + 0.9 * Math.max(0, Math.sin(Math.PI * ((15 + i2 / 2) % 24 - 6) / 16))) * t2 * (0.72 + 0.56 * a2())
      );
      return 47 === i2 ? Math.max(1, Math.round(0.12 * n2)) : n2;
    });
  }
  function B(e2) {
    return e2.map(([e3, t2, a2, i2, n2, s2, r2]) => ({
      id: e3,
      eventId: `evt_${S(e3, 10, R)}`,
      event: t2,
      status: a2,
      latency: i2,
      time: n2,
      eventTime: n2,
      attempt: 1,
      response: r2 ?? '{"received":true}',
      data: s2
    }));
  }
  function A(e2) {
    let t2 = [...e2.volume];
    for (let a2 of e2.deliveries) {
      let i2 = P(a2.eventTime);
      t2[i2] = Math.max(
        t2[i2],
        e2.deliveries.filter((e3) => P(e3.eventTime) === i2).length
      );
    }
    return { ...e2, volume: t2 };
  }
  let O = [
    A({
      id: "ledger",
      name: "Ledger sync",
      url: "https://ledger.fernway.example/v1/halden/events",
      events: [
        "invoice.paid",
        "invoice.payment_failed",
        "payout.paid",
        "refund.created"
      ],
      version: "2026-08-01",
      secretTail: "7f3a",
      addedBy: {
        name: "Emma Collins",
        photo: "media/people/emma-collins.svg"
      },
      added: "Mar 4, 2026",
      volume: M("ledger", 14),
      deliveries: B([
        [
          "dlv_8Kq2Lm4",
          "invoice.paid",
          200,
          142,
          "14:31:08",
          {
            id: "in_1Q8vRt2",
            object: "invoice",
            number: "FW-2026-1182",
            customer: "cus_R4bLw9",
            amount_paid: 48e3,
            currency: "usd",
            status: "paid"
          }
        ],
        [
          "dlv_7Hn1Pc9",
          "invoice.payment_failed",
          500,
          2318,
          "14:12:44",
          {
            id: "in_1Q8uXe7",
            object: "invoice",
            number: "FW-2026-1179",
            customer: "cus_P2mZr6",
            amount_due: 129900,
            currency: "usd",
            attempt_count: 2,
            next_payment_attempt: 1790265600
          },
          '{"error":"ledger_write_failed","message":"connection pool exhausted"}'
        ],
        [
          "dlv_6Gm0Ob8",
          "payout.paid",
          200,
          98,
          "13:47:02",
          {
            id: "po_1Q9aZt4",
            object: "payout",
            amount: 1845210,
            currency: "usd",
            arrival_date: 1790035200,
            destination: "ba_1PzR7c",
            status: "paid"
          }
        ],
        [
          "dlv_5Fl9Na7",
          "invoice.paid",
          504,
          3e4,
          "11:05:19",
          {
            id: "in_1Q8pLk3",
            object: "invoice",
            number: "FW-2026-1164",
            customer: "cus_K9dQe2",
            amount_paid: 21900,
            currency: "usd",
            status: "paid"
          },
          "upstream request timeout"
        ],
        [
          "dlv_4Ek8Mz6",
          "refund.created",
          200,
          121,
          "10:22:51",
          {
            id: "re_1Q8nWb5",
            object: "refund",
            charge: "ch_3Q8mTz1",
            amount: 4800,
            currency: "usd",
            reason: "requested_by_customer",
            status: "succeeded"
          }
        ],
        [
          "dlv_3Dj7Ly5",
          "invoice.paid",
          500,
          1904,
          "09:14:36",
          {
            id: "in_1Q8kFa9",
            object: "invoice",
            number: "FW-2026-1151",
            customer: "cus_H3vNp8",
            amount_paid: 9900,
            currency: "usd",
            status: "paid"
          },
          '{"error":"ledger_write_failed","message":"deadlock detected on ledger_entries"}'
        ],
        [
          "dlv_2Ci6Kx4",
          "invoice.paid",
          200,
          133,
          "08:59:10",
          {
            id: "in_1Q8jRm0",
            object: "invoice",
            number: "FW-2026-1149",
            customer: "cus_B7xLc4",
            amount_paid: 36e3,
            currency: "usd",
            status: "paid"
          }
        ]
      ])
    }),
    A({
      id: "orders",
      name: "Order fulfilment",
      url: "https://api.fernway.example/webhooks/halden",
      events: ["order.paid", "order.refunded", "customer.created"],
      version: "2026-08-01",
      secretTail: "c21e",
      addedBy: {
        name: "Marcus Johnson",
        photo: "media/people/marcus-johnson.svg"
      },
      added: "Jan 18, 2026",
      volume: M("orders", 34),
      deliveries: B([
        [
          "dlv_9Lr3Mn5",
          "order.paid",
          200,
          87,
          "14:30:52",
          {
            id: "ord_7Qm2Ks",
            object: "order",
            customer: "cus_T7wQx1",
            amount_total: 21400,
            currency: "usd",
            items: 3,
            shipping: "standard"
          }
        ],
        [
          "dlv_9Ks2Ln4",
          "customer.created",
          200,
          64,
          "14:30:49",
          {
            id: "cus_T7wQx1",
            object: "customer",
            name: "Priya Raman",
            email: "priya@lumenhaus.co",
            country: "US"
          }
        ],
        [
          "dlv_9Jt1Ko3",
          "order.paid",
          200,
          112,
          "14:26:13",
          {
            id: "ord_7Qk8Hd",
            object: "order",
            customer: "cus_M2pRz5",
            amount_total: 5800,
            currency: "usd",
            items: 1,
            shipping: "express"
          }
        ],
        [
          "dlv_9Iu0Jp2",
          "order.refunded",
          200,
          95,
          "14:02:37",
          {
            id: "ord_7Qh4Wn",
            object: "order",
            customer: "cus_D8nVt3",
            amount_refunded: 5800,
            currency: "usd",
            reason: "damaged_in_transit"
          }
        ],
        [
          "dlv_9Hv9Iq1",
          "order.paid",
          200,
          238,
          "13:58:04",
          {
            id: "ord_7Qg1Bc",
            object: "order",
            customer: "cus_F4kYs9",
            amount_total: 13250,
            currency: "usd",
            items: 2,
            shipping: "standard"
          }
        ]
      ])
    }),
    A({
      id: "alerts",
      name: "Ops alerts",
      url: "https://hooks.fernway.example/ops/halden",
      events: ["dispute.created", "payout.failed"],
      version: "2026-05-12",
      secretTail: "90bd",
      addedBy: {
        name: "Ava Mitchell",
        photo: "media/people/ava-mitchell.svg"
      },
      added: "Jun 9, 2026",
      volume: (i = { 4: 1, 17: 1, 32: 1, 43: 2 }, Array.from({ length: 48 }, (e2, t2) => i[t2] ?? 0)),
      deliveries: B([
        [
          "dlv_1Aw5Cr8",
          "dispute.created",
          200,
          311,
          "12:40:18",
          {
            id: "dp_1Q8tYh6",
            object: "dispute",
            charge: "ch_3Q7wPx2",
            amount: 8900,
            currency: "usd",
            reason: "product_not_received",
            status: "needs_response"
          }
        ],
        [
          "dlv_1Bx4Ds7",
          "payout.failed",
          200,
          276,
          "07:12:55",
          {
            id: "po_1Q8hVc2",
            object: "payout",
            amount: 212e3,
            currency: "usd",
            failure_code: "account_closed",
            destination: "ba_1NcT3q"
          }
        ]
      ])
    })
  ], Y = {
    "order.paid": {
      id: "ord_test_4Tq9",
      object: "order",
      customer: "cus_test_Z1",
      amount_total: 2500,
      currency: "usd",
      items: 1,
      shipping: "standard"
    },
    "order.refunded": {
      id: "ord_test_4Tq9",
      object: "order",
      customer: "cus_test_Z1",
      amount_refunded: 2500,
      currency: "usd",
      reason: "requested_by_customer"
    },
    "customer.created": {
      id: "cus_test_Z1",
      object: "customer",
      name: "Test customer",
      email: "test@example.com",
      country: "US"
    },
    "invoice.paid": {
      id: "in_test_8Kd2",
      object: "invoice",
      number: "TEST-0001",
      customer: "cus_test_Z1",
      amount_paid: 2500,
      currency: "usd",
      status: "paid"
    },
    "invoice.payment_failed": {
      id: "in_test_8Kd2",
      object: "invoice",
      number: "TEST-0001",
      customer: "cus_test_Z1",
      amount_due: 2500,
      currency: "usd",
      attempt_count: 1
    },
    "payout.paid": {
      id: "po_test_3Hs7",
      object: "payout",
      amount: 1e5,
      currency: "usd",
      destination: "ba_test_9",
      status: "paid"
    },
    "payout.failed": {
      id: "po_test_3Hs7",
      object: "payout",
      amount: 1e5,
      currency: "usd",
      failure_code: "account_closed"
    },
    "refund.created": {
      id: "re_test_6Pw1",
      object: "refund",
      charge: "ch_test_2",
      amount: 2500,
      currency: "usd",
      status: "succeeded"
    },
    "dispute.created": {
      id: "dp_test_5Lx3",
      object: "dispute",
      charge: "ch_test_2",
      amount: 2500,
      currency: "usd",
      reason: "fraudulent",
      status: "needs_response"
    }
  }, z = (e2) => e2.status >= 300 && !e2.resolved;
  function F(e2) {
    let t2 = Array.from({ length: 48 }, () => 0);
    for (let a3 of e2.deliveries) z(a3) && (t2[P(a3.eventTime)] += 1);
    let a2 = e2.volume.reduce((e3, t3) => e3 + t3, 0), i2 = t2.reduce((e3, t3) => e3 + t3, 0);
    return { volume: e2.volume, fails: t2, total: a2, failing: i2 };
  }
  var H = a(90062), D = a.n(H);
  let W = [...w.T.ease.enter], K = [...w.T.ease.standard], U = { duration: 0 }, q = { opacity: 1, y: "0em", filter: "blur(0px)" }, Q = { opacity: 0, y: "0.35em", filter: `blur(${w.T.blur.soft}px)` }, V = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${w.T.blur.subtle}px)`,
    transition: { duration: w.T.duration.fast, ease: K }
  }, Z = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${w.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: "0em", filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${w.T.blur.subtle}px)`
    })
  }, G = (e2) => ({
    initial: e2 ? { opacity: 0 } : { opacity: 0, height: 0, overflow: "hidden" },
    animate: {
      opacity: 1,
      height: "auto",
      transitionEnd: { overflow: "visible" }
    },
    exit: e2 ? { opacity: 0, transition: U } : {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transition: {
        height: w.T.spring.smooth,
        opacity: { duration: w.T.duration.fast }
      }
    },
    transition: e2 ? U : {
      height: w.T.spring.smooth,
      opacity: { duration: w.T.duration.standard, ease: W, delay: 0.08 }
    }
  }), J = new Intl.NumberFormat("en-US"), X = (e2) => e2.replace(/^https:\/\//, "").split("/")[0], ee = (e2) => e2 >= 1e4 ? `${(e2 / 1e3).toFixed(1)} s` : `${J.format(e2)} ms`, et = (e2, t2) => e2 ? Math.floor((e2 - t2) / e2 * 1e3) / 10 : 0, ea = (e2, t2) => e2 ? `${et(e2, t2).toFixed(1)}%` : "\u2013", ei = (e2) => (e2.deliveries.find(z) ?? e2.deliveries[0])?.id, en = [
    { slot: 0, label: "15:00" },
    { slot: 12, label: "21:00" },
    { slot: 24, label: "03:00" },
    { slot: 36, label: "09:00" }
  ], es = /^https:\/\/[a-z0-9-]+(\.[a-z0-9-]+)+(:\d+)?(\/\S*)?$/i;
  function er({ text: e2, reduced: t2, wrap: a2 = false }) {
    return (0, n.jsx)("span", {
      className: a2 ? D().swapBlock : D().swap,
      children: (0, n.jsx)(r.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsx)(eo, { text: e2, reduced: t2, wrap: a2 }, e2)
      })
    });
  }
  function eo({ text: e2, reduced: t2, wrap: a2 }) {
    let i2 = (0, o.tF)();
    return (0, n.jsx)(l.PY1.span, {
      className: a2 ? D().swapWrap : D().swapText,
      "aria-hidden": !i2 || void 0,
      initial: t2 ? { opacity: 0 } : Q,
      animate: q,
      exit: t2 ? { opacity: 0, transition: U } : V,
      transition: t2 ? U : { duration: w.T.duration.standard, ease: W },
      children: e2
    });
  }
  function el({ text: e2, value: t2, reduced: a2 }) {
    let [i2, o2] = (0, s.useState)({ value: t2, direction: 1 });
    i2.value !== t2 && o2({ value: t2, direction: t2 > i2.value ? 1 : -1 });
    let d2 = [...e2];
    return (0, n.jsx)("span", {
      className: D().roll,
      "aria-hidden": "true",
      children: d2.map((e3, t3) => {
        let s2 = d2.length - t3, o3 = 0.03 * Math.min(s2 - 1, 4);
        return (0, n.jsx)(
          "span",
          {
            className: D().rollSlot,
            children: (0, n.jsx)(r.N, {
              mode: "popLayout",
              initial: false,
              custom: i2.direction,
              children: (0, n.jsx)(
                l.PY1.span,
                {
                  custom: i2.direction,
                  variants: Z,
                  initial: !a2 && "enter",
                  animate: "center",
                  exit: a2 ? void 0 : "exit",
                  transition: a2 ? U : {
                    y: { ...w.T.spring.snappy, delay: o3 },
                    opacity: { duration: w.T.duration.fast, delay: o3 },
                    filter: { duration: w.T.duration.fast, delay: o3 }
                  },
                  children: e3
                },
                e3
              )
            })
          },
          s2
        );
      })
    });
  }
  function ed(e2, t2, a2) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e2.key)) return;
    let i2 = Array.from(e2.currentTarget.querySelectorAll(`[${t2}]`)), n2 = i2.indexOf(document.activeElement);
    if (n2 < 0) return;
    e2.preventDefault();
    let s2 = "Home" === e2.key ? 0 : "End" === e2.key ? i2.length - 1 : Math.min(
      i2.length - 1,
      Math.max(0, n2 + ("ArrowDown" === e2.key ? 1 : -1))
    );
    i2[s2].focus(), a2(i2[s2].getAttribute(t2) ?? "");
  }
  function ec({
    item: e2,
    selected: t2,
    selectedId: a2,
    fresh: i2,
    reduced: s2,
    detailId: r2,
    onSelect: o2
  }) {
    let { total: d2, failing: c2 } = F(e2), u2 = e2.events.slice(0, 3), p2 = e2.events.length - u2.length;
    return (0, n.jsx)(l.PY1.div, {
      role: "listitem",
      className: D().row,
      ...G(s2),
      children: (0, n.jsxs)("div", {
        className: D().endpoint,
        "data-fresh": i2,
        children: [
          t2 && (0, n.jsx)(l.PY1.span, {
            layoutId: "endpoint-highlight",
            layoutDependency: a2,
            className: D().highlight,
            transition: s2 ? U : w.T.spring.morph,
            "aria-hidden": "true"
          }),
          (0, n.jsx)("span", { className: D().flash, "aria-hidden": "true" }),
          (0, n.jsxs)("button", {
            type: "button",
            className: D().endpointButton,
            "data-endpoint": e2.id,
            "aria-current": t2 ? "true" : void 0,
            "aria-controls": r2,
            onClick: o2,
            children: [
              (0, n.jsxs)("span", {
                className: D().identity,
                children: [
                  (0, n.jsx)("span", { className: D().name, children: e2.name }),
                  (0, n.jsxs)("span", {
                    className: D().url,
                    children: [
                      (0, n.jsx)("span", {
                        className: D().host,
                        children: X(e2.url)
                      }),
                      e2.url.replace(/^https:\/\/[^/]+/, "")
                    ]
                  })
                ]
              }),
              (0, n.jsx)("span", {
                className: D().srOnly,
                children: `Events: ${e2.events.join(", ")}. `
              }),
              (0, n.jsxs)("span", {
                className: D().events,
                "aria-hidden": "true",
                children: [
                  u2.map(
                    (e3) => (0, n.jsx)(
                      "span",
                      {
                        className: D().chip,
                        "aria-hidden": "true",
                        children: e3
                      },
                      e3
                    )
                  ),
                  p2 > 0 && (0, n.jsxs)("span", {
                    className: D().chip,
                    "aria-hidden": "true",
                    children: ["+", p2]
                  })
                ]
              }),
              (0, n.jsxs)("span", {
                className: D().rate,
                children: [
                  (0, n.jsx)(el, {
                    text: ea(d2, c2),
                    value: et(d2, c2),
                    reduced: s2
                  }),
                  (0, n.jsx)("span", {
                    className: D().srOnly,
                    children: d2 ? `${ea(d2, c2)} delivered. ` : "No events yet. "
                  }),
                  (0, n.jsx)("span", {
                    className: D().rateLabel,
                    "aria-hidden": "true",
                    children: "delivered"
                  })
                ]
              }),
              (0, n.jsx)("span", {
                className: D().state,
                children: (0, n.jsx)(y.E, {
                  size: "sm",
                  tone: c2 ? "warning" : d2 ? "success" : "neutral",
                  icon: c2 ? (0, n.jsx)(h.A, { size: 12, strokeWidth: 2 }) : d2 ? (0, n.jsx)(_.A, { size: 12, strokeWidth: 2 }) : void 0,
                  children: c2 ? `${c2} failing` : d2 ? "Healthy" : "No events"
                })
              })
            ]
          })
        ]
      })
    });
  }
  function eu({ endpoint: e2, reduced: t2 }) {
    let { volume: a2, fails: i2, total: r2, failing: o2 } = F(e2), [d2, c2] = (0, s.useState)(null), u2 = Math.max(4, ...a2), p2 = a2.indexOf(Math.max(...a2)), h2 = i2.flatMap((e3, t3) => e3 ? [I(t3)] : []), _2 = r2 ? `Events per half hour over the last 24 hours: ${J.format(r2)} events, ${o2 ? `${o2} still failing, from ${h2.join(", ")}` : "all delivered"}. Busiest from ${I(p2)} with ${a2[p2]} events.` : "No events in the last 24 hours.", m2 = r2 ? `${J.format(r2)} events` : "No events yet";
    return (0, n.jsxs)("div", {
      className: D().chartBlock,
      children: [
        (0, n.jsx)("p", {
          className: D().caption,
          "aria-hidden": "true",
          children: null === d2 ? (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(er, { text: m2, reduced: t2 }),
              o2 ? (0, n.jsxs)("span", {
                className: D().legend,
                children: [
                  (0, n.jsx)("span", { className: D().swatch }),
                  (0, n.jsx)(er, { text: `${o2} failed`, reduced: t2 })
                ]
              }) : r2 ? (0, n.jsx)("span", {
                className: D().legendMuted,
                children: "all delivered"
              }) : null
            ]
          }) : (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("span", {
                className: D().readoutTime,
                children: I(d2)
              }),
              (0, n.jsx)("span", {
                children: `${a2[d2]} ${1 === a2[d2] ? "event" : "events"}`
              }),
              i2[d2] ? (0, n.jsxs)("span", {
                className: D().legend,
                children: [
                  (0, n.jsx)("span", { className: D().swatch }),
                  `${i2[d2]} failed`
                ]
              }) : null
            ]
          })
        }),
        (0, n.jsx)("div", {
          className: D().chart,
          role: "img",
          "aria-label": _2,
          "data-hover": null !== d2,
          onPointerMove: function(e3) {
            let t3 = e3.currentTarget.getBoundingClientRect();
            c2(
              Math.min(
                47,
                Math.max(0, Math.floor((e3.clientX - t3.left) / t3.width * 48))
              )
            );
          },
          onPointerLeave: () => c2(null),
          children: a2.map((e3, a3) => {
            let s2 = i2[a3] ? Math.max(5, Math.round(i2[a3] / u2 * 56) + 1) : 0, r3 = e3 ? Math.max(3, Math.round(e3 / u2 * 56), s2 + (e3 > i2[a3] ? 3 : -1)) : 0, o3 = t2 ? U : { ...w.T.spring.smooth, delay: 4e-3 * a3 };
            return (0, n.jsxs)(
              l.PY1.span,
              {
                className: D().bar,
                "data-active": d2 === a3,
                initial: false,
                animate: { height: r3 },
                transition: o3,
                children: [
                  (0, n.jsx)(l.PY1.span, {
                    className: D().fail,
                    initial: false,
                    animate: { height: s2 },
                    transition: o3
                  }),
                  (0, n.jsx)("span", { className: D().ok })
                ]
              },
              a3
            );
          })
        }),
        (0, n.jsxs)("div", {
          className: D().axis,
          "aria-hidden": "true",
          children: [
            en.map(
              (e3) => (0, n.jsx)(
                "span",
                {
                  style: { left: `${e3.slot / 48 * 100}%` },
                  children: e3.label
                },
                e3.slot
              )
            ),
            (0, n.jsx)("span", { className: D().now, children: "Now" })
          ]
        })
      ]
    });
  }
  function ep({
    item: e2,
    endpointId: t2,
    selected: a2,
    selectedKey: i2,
    fresh: s2,
    sending: o2,
    reduced: d2,
    inspectorId: c2,
    onSelect: u2,
    onRetry: p2,
    buttonRef: h2
  }) {
    let b2 = e2.status < 300, f2 = `${e2.status} ${T[e2.status]}, ${e2.event}${e2.attempt > 1 ? `, attempt ${e2.attempt}` : ""}${e2.test ? ", test event" : ""}, ${ee(e2.latency)}, sent at ${e2.time}${e2.resolved ? ", resolved by a retry" : ""}`, v2 = {
      initial: d2 ? { opacity: 0 } : Q,
      animate: q,
      exit: d2 ? { opacity: 0, transition: U } : V,
      transition: d2 ? U : { duration: w.T.duration.standard, ease: W }
    };
    return (0, n.jsx)(l.PY1.div, {
      role: "listitem",
      className: D().row,
      "data-row": e2.id,
      ...G(d2),
      children: (0, n.jsxs)("div", {
        className: D().delivery,
        "data-fresh": s2,
        "data-resolved": e2.resolved ?? false,
        children: [
          a2 && (0, n.jsx)(l.PY1.span, {
            layoutId: `delivery-${t2}`,
            layoutDependency: i2,
            className: D().highlight,
            transition: d2 ? U : w.T.spring.morph,
            "aria-hidden": "true"
          }),
          (0, n.jsx)("span", { className: D().flash, "aria-hidden": "true" }),
          (0, n.jsxs)("button", {
            ref: h2,
            type: "button",
            className: D().deliveryButton,
            "data-delivery": e2.id,
            "aria-current": a2 ? "true" : void 0,
            "aria-controls": c2,
            "aria-label": f2,
            onClick: u2,
            children: [
              (0, n.jsx)(y.E, {
                size: "sm",
                tone: b2 ? "success" : "danger",
                className: D().statusCode,
                children: String(e2.status)
              }),
              (0, n.jsxs)("span", {
                className: D().eventCell,
                children: [
                  (0, n.jsx)("span", {
                    className: D().eventName,
                    children: e2.event
                  }),
                  e2.attempt > 1 ? (0, n.jsxs)("span", {
                    className: D().attempt,
                    children: ["Attempt ", e2.attempt]
                  }) : e2.test ? (0, n.jsx)("span", {
                    className: D().attempt,
                    children: "Test"
                  }) : null
                ]
              }),
              (0, n.jsxs)("span", {
                className: D().meta,
                children: [
                  (0, n.jsx)("span", {
                    className: D().latency,
                    children: ee(e2.latency)
                  }),
                  (0, n.jsx)("span", { className: D().time, children: e2.time })
                ]
              })
            ]
          }),
          (0, n.jsx)("span", {
            className: D().action,
            children: !b2 && (0, n.jsx)(r.N, {
              mode: "popLayout",
              initial: false,
              children: e2.resolved ? (0, n.jsxs)(
                l.PY1.span,
                {
                  className: D().resolved,
                  ...v2,
                  children: [
                    (0, n.jsx)(_.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Resolved"
                  ]
                },
                "resolved"
              ) : (0, n.jsx)(
                l.PY1.span,
                {
                  ...v2,
                  children: (0, n.jsx)(x.$, {
                    type: "button",
                    size: "sm",
                    variant: "secondary",
                    loading: o2,
                    "aria-label": o2 ? `Sending ${e2.event} again` : `Retry ${e2.event} from ${e2.time}`,
                    onClick: p2,
                    children: o2 ? "Sending" : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(m.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Retry"
                      ]
                    })
                  })
                },
                "retry"
              )
            })
          })
        ]
      })
    });
  }
  function eh({ text: e2 }) {
    let t2 = /("(?:[^"\\]|\\.)*")(\s*:)?|(-?\d+(?:\.\d+)?)|\b(true|false|null)\b/g;
    return (0, n.jsx)("pre", {
      className: D().code,
      children: (0, n.jsx)("code", {
        children: e2.split("\n").map((e3, a2) => {
          let i2 = [], s2 = 0;
          for (let a3 of e3.matchAll(t2)) {
            let t3 = a3.index ?? 0;
            t3 > s2 && i2.push(e3.slice(s2, t3)), a3[1] ? (i2.push(
              (0, n.jsx)(
                "span",
                {
                  className: a3[2] ? D().key : D().string,
                  children: a3[1]
                },
                t3
              )
            ), a3[2] && i2.push(a3[2])) : i2.push(
              (0, n.jsx)(
                "span",
                {
                  className: a3[3] ? D().number : D().literal,
                  children: a3[3] ?? a3[4]
                },
                t3
              )
            ), s2 = t3 + a3[0].length;
          }
          return s2 < e3.length && i2.push(e3.slice(s2)), (0, n.jsxs)(
            "span",
            {
              className: D().line,
              children: [
                (0, n.jsx)("span", {
                  className: D().lineNumber,
                  "aria-hidden": "true",
                  children: a2 + 1
                }),
                (0, n.jsx)("span", { children: i2 })
              ]
            },
            a2
          );
        })
      })
    });
  }
  function e_({
    endpoint: e2,
    delivery: t2,
    tab: a2,
    reduced: i2,
    id: o2,
    onTab: d2,
    onCopied: c2
  }) {
    let u2 = (0, s.useRef)(null), p2 = (0, s.useRef)({ payload: null, headers: null }), h2 = t2 ? JSON.stringify(
      {
        id: t2.eventId,
        type: t2.event,
        created: L(t2.eventTime),
        api_version: e2.version,
        livemode: !t2.test,
        data: { object: t2.data }
      },
      null,
      2
    ) : "", _2 = t2 ? [
      ["Content-Type", "application/json; charset=utf-8"],
      ["User-Agent", "Halden-Webhooks/2026-08"],
      ["Halden-Event-Id", t2.eventId],
      ["Halden-Delivery-Id", t2.id],
      ["Halden-Attempt", String(t2.attempt)],
      [
        "Halden-Signature",
        `t=${L(t2.time)},v1=${S(`${t2.id}:${e2.secretTail}`, 64)}`
      ]
    ] : [];
    if ((0, s.useEffect)(() => {
      u2.current?.scrollTo({ top: 0, left: 0 });
    }, [t2?.id, a2]), !t2)
      return (0, n.jsx)("section", {
        id: o2,
        className: D().inspector,
        "aria-label": "Delivery inspector",
        children: (0, n.jsx)("p", {
          className: D().placeholder,
          children: "The request body and headers of each delivery show up here."
        })
      });
    let m2 = t2.status < 300, b2 = {
      initial: i2 ? { opacity: 0 } : { opacity: 0, y: 4, filter: `blur(${w.T.blur.subtle}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: {
        opacity: 0,
        transition: i2 ? U : { duration: w.T.duration.instant }
      },
      transition: i2 ? U : { duration: w.T.duration.standard, ease: W }
    };
    return (0, n.jsxs)("section", {
      id: o2,
      className: D().inspector,
      "aria-labelledby": `${o2}-title`,
      children: [
        (0, n.jsxs)("div", {
          className: D().inspectorHead,
          children: [
            (0, n.jsxs)("div", {
              className: D().inspectorTitle,
              children: [
                (0, n.jsx)("h4", {
                  id: `${o2}-title`,
                  children: (0, n.jsx)(er, { text: t2.event, reduced: i2 })
                }),
                (0, n.jsx)("p", {
                  children: (0, n.jsx)(er, {
                    text: `${t2.eventId}, attempt ${t2.attempt}`,
                    reduced: i2
                  })
                })
              ]
            }),
            (0, n.jsx)(j.CopyButton, {
              value: "payload" === a2 ? h2 : _2.map(([e3, t3]) => `${e3}: ${t3}`).join("\n"),
              label: "Copy",
              onCopied: () => c2("payload" === a2 ? "Payload" : "Headers")
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: D().response,
          children: [
            (0, n.jsxs)("span", {
              className: D().responseLine,
              children: [
                (0, n.jsx)("span", {
                  className: D().responseLabel,
                  children: "Response"
                }),
                (0, n.jsx)(y.E, {
                  size: "sm",
                  tone: m2 ? "success" : "danger",
                  children: String(t2.status)
                }),
                (0, n.jsx)(er, {
                  text: `${T[t2.status]} in ${ee(t2.latency)}`,
                  reduced: i2
                })
              ]
            }),
            (0, n.jsx)("code", {
              className: D().responseBody,
              children: (0, n.jsx)(er, {
                text: t2.response,
                reduced: i2,
                wrap: true
              })
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: D().tabs,
          role: "tablist",
          "aria-label": "Request",
          onKeyDown: function(e3) {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e3.key))
              return;
            e3.preventDefault();
            let t3 = "Home" === e3.key ? "payload" : "End" === e3.key || "payload" === a2 ? "headers" : "payload";
            d2(t3), p2.current[t3]?.focus();
          },
          children: ["payload", "headers"].map(
            (t3) => (0, n.jsxs)(
              "button",
              {
                ref: (e3) => {
                  p2.current[t3] = e3;
                },
                id: `${o2}-${t3}`,
                type: "button",
                role: "tab",
                className: D().tab,
                "aria-selected": a2 === t3,
                "aria-controls": `${o2}-panel`,
                tabIndex: a2 === t3 ? 0 : -1,
                onClick: () => d2(t3),
                children: [
                  a2 === t3 && (0, n.jsx)(l.PY1.span, {
                    layoutId: `tab-${e2.id}`,
                    layoutDependency: a2,
                    className: D().tabHighlight,
                    transition: i2 ? U : w.T.spring.morph,
                    "aria-hidden": "true"
                  }),
                  (0, n.jsx)("span", {
                    className: D().tabLabel,
                    children: "payload" === t3 ? "Payload" : "Headers"
                  })
                ]
              },
              t3
            )
          )
        }),
        (0, n.jsx)("div", {
          ref: u2,
          id: `${o2}-panel`,
          className: D().panel,
          role: "tabpanel",
          "aria-labelledby": `${o2}-${a2}`,
          tabIndex: 0,
          children: (0, n.jsx)(r.N, {
            mode: "popLayout",
            initial: false,
            children: (0, n.jsx)(
              l.PY1.div,
              {
                className: D().panelBody,
                ...b2,
                children: "payload" === a2 ? (0, n.jsx)(eh, { text: h2 }) : (0, n.jsx)("dl", {
                  className: D().headers,
                  children: _2.map(
                    ([e3, t3]) => (0, n.jsxs)(
                      "div",
                      {
                        children: [
                          (0, n.jsx)("dt", { children: e3 }),
                          (0, n.jsx)("dd", { children: t3 })
                        ]
                      },
                      e3
                    )
                  )
                })
              },
              `${t2.id}-${a2}`
            )
          })
        })
      ]
    });
  }
  function em() {
    let e2, t2, a2, i2 = (0, s.useId)(), o2 = (0, u.I)() ?? false, [_2, m2] = (0, s.useState)(O), [y2, T2] = (0, s.useState)(O[0].id), [$2, C2] = (0, s.useState)(
      () => Object.fromEntries(O.map((e3) => [e3.id, ei(e3)]))
    ), [L2, P2] = (0, s.useState)("payload"), [I2, M2] = (0, s.useState)([]), [B2, A2] = (0, s.useState)([]), [z2, H2] = (0, s.useState)(null), [Z2, J2] = (0, s.useState)(
      "Pick a delivery to inspect its payload and headers"
    ), [ee2, et2] = (0, s.useState)(false), [ea2, en2] = (0, s.useState)("form"), [eo2, eh2] = (0, s.useState)(""), [em2, eb2] = (0, s.useState)(""), [ef, ey] = (0, s.useState)(["order.paid"]), [ex, ev] = (0, s.useState)({}), [ej, eg] = (0, s.useState)(false), [ew, ek] = (0, s.useState)(""), [eN, eT] = (0, s.useState)(null), {
      width: e$,
      height: eS,
      trackRef: eR,
      faceRef: eC,
      innerRef: eL,
      arm: eP
    } = (function(e3, t3) {
      let a3 = (0, d.d)("auto"), i3 = (0, d.d)("auto"), [n2, r2] = (0, s.useState)({ track: 0, face: 0, row: 0, inner: 0 }), o3 = (0, s.useRef)(null), l2 = (0, s.useRef)(null), u2 = (0, s.useRef)(null), p2 = (0, s.useRef)(e3), h2 = (0, s.useRef)(0), _3 = (0, s.useRef)({});
      return (0, s.useLayoutEffect)(() => {
        p2.current = e3;
      }, [e3]), (0, s.useEffect)(() => {
        let e6 = o3.current, t4 = l2.current, a4 = u2.current;
        if (!e6 || !t4 || !a4 || "u" < typeof ResizeObserver) return;
        let i4 = new ResizeObserver(
          () => r2((i5) => {
            let n3 = {
              track: e6.getBoundingClientRect().width,
              face: p2.current && i5.face ? i5.face : t4.getBoundingClientRect().width,
              row: t4.offsetHeight,
              inner: a4.getBoundingClientRect().height
            };
            return n3.track === i5.track && n3.face === i5.face && n3.row === i5.row && n3.inner === i5.inner ? i5 : n3;
          })
        );
        return [e6, t4, a4].forEach((e7) => i4.observe(e7)), () => i4.disconnect();
      }, []), (0, s.useEffect)(() => {
        if (!n2.track || !n2.face || !n2.row) return;
        let s2 = !t3 && performance.now() < h2.current, r3 = (e6, t4, a4) => {
          let i4 = e6.get();
          _3.current[a4]?.stop(), s2 && "number" == typeof i4 ? Math.abs(i4 - t4) > 0.5 && (_3.current[a4] = (0, c.i)(e6, t4, w.T.spring.smooth)) : e6.jump(t4);
        };
        r3(a3, e3 ? n2.track : n2.face, "width"), r3(i3, e3 ? Math.max(n2.inner, n2.row) : n2.row, "height");
      }, [e3, n2, t3, a3, i3]), (0, s.useEffect)(
        () => () => {
          _3.current.width?.stop(), _3.current.height?.stop();
        },
        []
      ), {
        width: a3,
        height: i3,
        trackRef: o3,
        faceRef: l2,
        innerRef: u2,
        arm: () => {
          h2.current = performance.now() + 900;
        }
      };
    })(ee2, o2), {
      outer: eI,
      inner: eE,
      arm: eM
    } = (e2 = (0, s.useRef)(null), t2 = (0, s.useRef)(null), a2 = (0, s.useRef)(0), (0, s.useEffect)(() => {
      let i3, n2 = e2.current, s2 = t2.current;
      if (!n2 || !s2 || "u" < typeof ResizeObserver) return;
      let r2 = s2.offsetHeight, l2 = new ResizeObserver(() => {
        let e3 = s2.offsetHeight;
        if (e3 === r2) return;
        let t3 = i3 ? n2.offsetHeight : r2;
        if (r2 = e3, i3?.stop(), i3 = void 0, o2 || performance.now() > a2.current || 1 > Math.abs(t3 - e3)) {
          n2.style.height = "";
          return;
        }
        n2.style.height = `${t3}px`, i3 = (0, c.i)(
          n2,
          { height: [`${t3}px`, `${e3}px`] },
          {
            ...w.T.spring.smooth,
            onComplete: () => {
              n2.style.height = "", i3 = void 0;
            }
          }
        );
      });
      return l2.observe(s2), () => {
        l2.disconnect(), i3?.stop();
      };
    }, [o2]), {
      outer: e2,
      inner: t2,
      arm: () => {
        a2.current = performance.now() + 500;
      }
    }), eB = (0, s.useRef)(null), eA = (0, s.useRef)(null), eO = (0, s.useRef)(null), eY = (0, s.useRef)(null), ez = (0, s.useRef)(/* @__PURE__ */ new Map()), eF = (0, s.useRef)([]), eH = (0, s.useRef)(0), eD = (0, s.useRef)(0), eW = (0, s.useRef)(0), eK = (0, s.useRef)(""), eU = (0, s.useRef)(y2), eq = _2.find((e3) => e3.id === y2) ?? _2[0], eQ = $2[eq.id] ?? ei(eq), eV = eq.deliveries.find((e3) => e3.id === eQ), eZ = ee2 && "reveal" === ea2 ? "Endpoint added" : ee2 ? "New endpoint" : "Add endpoint", eG = `${i2}-detail`, eJ = `${i2}-inspector`;
    (0, s.useEffect)(() => {
      eU.current = y2;
    }, [y2]), (0, s.useEffect)(() => {
      let e3 = eF.current;
      return () => e3.forEach((e6) => window.clearTimeout(e6));
    }, []);
    let eX = (e3, t3) => {
      eF.current.push(window.setTimeout(e3, t3));
    }, e0 = (e3) => {
      A2((t3) => [...t3, e3]), eX(() => A2((t3) => t3.filter((t4) => t4 !== e3)), 1400);
    }, e1 = (e3) => requestAnimationFrame(
      () => ez.current.get(e3)?.focus({ preventScroll: true })
    );
    function e22(e3) {
      e3 !== eU.current && (eM(), eU.current = e3, T2(e3));
    }
    function e5() {
      ee2 && (eD.current++, eP(), et2(false), eg(false), "reveal" === ea2 ? (eT(null), J2(
        `${eK.current} added. Send a test event to check that it answers.`
      )) : J2("New endpoint discarded"), eB.current?.focus({ preventScroll: true }));
    }
    let e4 = _2.filter((e3) => F(e3).failing > 0).length;
    return (0, n.jsx)(p.o, {
      id: i2,
      children: (0, n.jsxs)("section", {
        className: D().hooks,
        "aria-labelledby": `${i2}-heading`,
        children: [
          (0, n.jsxs)("div", {
            className: D().top,
            children: [
              (0, n.jsxs)("header", {
                className: D().header,
                children: [
                  (0, n.jsx)("h2", {
                    id: `${i2}-heading`,
                    children: "Webhooks"
                  }),
                  (0, n.jsx)("p", {
                    children: "Halden signs every event and posts it to your endpoints. Failed deliveries retry on their own for three days, or you can retry them now."
                  })
                ]
              }),
              (0, n.jsxs)("div", {
                ref: eR,
                className: D().toolbar,
                onKeyDown: (e3) => {
                  "Escape" === e3.key && ee2 && (e3.stopPropagation(), e5());
                },
                children: [
                  (0, n.jsxs)("p", {
                    className: D().count,
                    "data-hidden": ee2,
                    inert: ee2,
                    children: [
                      (0, n.jsx)(el, {
                        text: String(_2.length),
                        value: _2.length,
                        reduced: o2
                      }),
                      (0, n.jsx)("span", {
                        className: D().srOnly,
                        children: _2.length
                      }),
                      (0, n.jsx)("span", {
                        children: 1 === _2.length ? "endpoint" : "endpoints"
                      }),
                      (0, n.jsx)("span", {
                        className: D().countNote,
                        children: (0, n.jsx)(er, {
                          text: e4 ? `${e4} with failed deliveries` : "all delivering",
                          reduced: o2
                        })
                      })
                    ]
                  }),
                  (0, n.jsx)(l.PY1.div, {
                    className: D().shell,
                    "data-open": ee2,
                    style: { width: e$, height: eS },
                    children: (0, n.jsxs)("div", {
                      ref: eL,
                      className: D().shellInner,
                      children: [
                        (0, n.jsxs)("div", {
                          ref: eC,
                          className: D().face,
                          children: [
                            (0, n.jsx)("button", {
                              ref: eB,
                              className: D().toggle,
                              type: "button",
                              "aria-label": ee2 ? "Close" : "Add endpoint",
                              "aria-expanded": ee2,
                              "aria-controls": ee2 ? `${i2}-panel` : void 0,
                              onClick: ee2 ? e5 : function() {
                                eP(), en2("form"), eh2(""), eb2(""), ey(["order.paid"]), ev({}), eg(false), et2(true), J2(
                                  "Enter an HTTPS URL and choose the events it should receive"
                                ), requestAnimationFrame(
                                  () => eA.current?.focus({
                                    preventScroll: true
                                  })
                                );
                              },
                              children: (0, n.jsx)(l.PY1.span, {
                                className: D().toggleIcon,
                                initial: false,
                                animate: { rotate: 45 * !!ee2 },
                                transition: o2 ? U : w.T.spring.snappy,
                                children: (0, n.jsx)(b.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              })
                            }),
                            (0, n.jsx)("span", {
                              id: `${i2}-title`,
                              className: D().title,
                              role: ee2 ? "heading" : void 0,
                              "aria-level": ee2 ? 3 : void 0,
                              "aria-hidden": !ee2 || void 0,
                              children: (0, n.jsx)(er, {
                                text: eZ,
                                reduced: o2
                              })
                            })
                          ]
                        }),
                        (0, n.jsx)(r.N, {
                          initial: false,
                          children: ee2 && (0, n.jsx)(
                            l.PY1.div,
                            {
                              id: `${i2}-panel`,
                              className: D().body,
                              role: "group",
                              "aria-labelledby": `${i2}-title`,
                              initial: { opacity: 0 },
                              animate: {
                                opacity: 1,
                                transition: o2 ? U : {
                                  duration: w.T.duration.standard + 0.04,
                                  ease: W,
                                  delay: 0.14
                                }
                              },
                              exit: {
                                opacity: 0,
                                transition: o2 ? U : { duration: 0.1, ease: K }
                              },
                              children: (0, n.jsx)(r.N, {
                                mode: "popLayout",
                                initial: false,
                                children: "form" === ea2 ? (0, n.jsxs)(
                                  l.PY1.form,
                                  {
                                    className: D().form,
                                    noValidate: true,
                                    onSubmit: function(e3) {
                                      if (e3.preventDefault(), ej)
                                        return;
                                      let t3 = eo2.trim(), a3 = {
                                        url: t3 ? es.test(t3) ? void 0 : "Use a public HTTPS URL, such as https://api.fernway.example/webhooks" : "Enter the URL Halden should post events to",
                                        events: ef.length ? void 0 : "Choose at least one event"
                                      };
                                      if (ev(a3), a3.url || a3.events) {
                                        J2(a3.url ?? a3.events ?? ""), a3.url ? eA.current?.focus() : eO.current?.querySelector(
                                          "button"
                                        )?.focus();
                                        return;
                                      }
                                      let i3 = ++eD.current;
                                      eg(true), J2(`Adding ${t3}.`), eX(() => {
                                        let e6;
                                        if (i3 !== eD.current) return;
                                        eW.current += 1;
                                        let a4 = (e6 = `${t3}:${eW.current}`, `whsec_${S(e6, 32, R)}`), n2 = {
                                          id: `new-${eW.current}`,
                                          name: em2.trim() || X(t3),
                                          url: t3,
                                          events: N.map(
                                            (e7) => e7.id
                                          ).filter(
                                            (e7) => ef.includes(e7)
                                          ),
                                          version: "2026-08-01",
                                          secretTail: a4.slice(-4),
                                          addedBy: k,
                                          added: "Sep 22, 2026",
                                          volume: Array.from(
                                            { length: 48 },
                                            () => 0
                                          ),
                                          deliveries: []
                                        };
                                        eK.current = n2.name, eP(), ek(a4), m2((e7) => [n2, ...e7]), eT(n2.id), eg(false), en2("reveal"), J2(
                                          `${n2.name} added. Copy the signing secret now, it will not be shown again.`
                                        ), requestAnimationFrame(
                                          () => eY.current?.querySelector(
                                            "button"
                                          )?.focus({
                                            preventScroll: true
                                          })
                                        ), eX(
                                          () => e22(n2.id),
                                          460 * !o2
                                        );
                                      }, 760);
                                    },
                                    exit: {
                                      opacity: 0,
                                      transition: o2 ? U : {
                                        duration: w.T.duration.instant
                                      }
                                    },
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className: D().fields,
                                        children: [
                                          (0, n.jsx)(g.p, {
                                            ref: eA,
                                            label: "Endpoint URL",
                                            placeholder: "https://api.fernway.example/webhooks",
                                            type: "url",
                                            inputMode: "url",
                                            autoComplete: "off",
                                            spellCheck: false,
                                            value: eo2,
                                            error: ex.url,
                                            onChange: (e3) => {
                                              eh2(e3.target.value), ex.url && ev((e6) => ({
                                                ...e6,
                                                url: void 0
                                              }));
                                            }
                                          }),
                                          (0, n.jsx)(g.p, {
                                            label: "Description",
                                            description: "Optional",
                                            placeholder: "Warehouse sync",
                                            autoComplete: "off",
                                            maxLength: 40,
                                            value: em2,
                                            onChange: (e3) => eb2(e3.target.value)
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("fieldset", {
                                        ref: eO,
                                        className: D().eventSet,
                                        "aria-describedby": ex.events ? `${i2}-event-error` : void 0,
                                        children: [
                                          (0, n.jsx)("legend", {
                                            children: "Events to send"
                                          }),
                                          (0, n.jsx)("div", {
                                            className: D().eventGrid,
                                            children: N.map(
                                              (e3) => (0, n.jsx)(
                                                v.S,
                                                {
                                                  label: e3.id,
                                                  description: e3.description,
                                                  checked: ef.includes(
                                                    e3.id
                                                  ),
                                                  onCheckedChange: (t3) => {
                                                    var a3, i3;
                                                    return a3 = e3.id, i3 = true === t3, void (ey(
                                                      (e6) => i3 ? [
                                                        ...e6.filter(
                                                          (e7) => e7 !== a3
                                                        ),
                                                        a3
                                                      ] : e6.filter(
                                                        (e7) => e7 !== a3
                                                      )
                                                    ), i3 && ex.events && ev((e6) => ({
                                                      ...e6,
                                                      events: void 0
                                                    })));
                                                  }
                                                },
                                                e3.id
                                              )
                                            )
                                          }),
                                          (0, n.jsx)(r.N, {
                                            initial: false,
                                            children: ex.events && (0, n.jsx)(
                                              l.PY1.p,
                                              {
                                                id: `${i2}-event-error`,
                                                className: D().fieldError,
                                                role: "alert",
                                                initial: o2 ? { opacity: 0 } : {
                                                  height: 0,
                                                  opacity: 0
                                                },
                                                animate: {
                                                  height: "auto",
                                                  opacity: 1
                                                },
                                                exit: o2 ? {
                                                  opacity: 0,
                                                  transition: U
                                                } : {
                                                  height: 0,
                                                  opacity: 0
                                                },
                                                transition: o2 ? U : w.T.spring.smooth,
                                                children: (0, n.jsx)(
                                                  "span",
                                                  {
                                                    children: ex.events
                                                  }
                                                )
                                              },
                                              "error"
                                            )
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("div", {
                                        className: D().actions,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: D().hint,
                                            children: (0, n.jsx)(er, {
                                              text: 1 === ef.length ? "1 event selected" : `${ef.length} events selected`,
                                              reduced: o2
                                            })
                                          }),
                                          (0, n.jsx)(x.$, {
                                            type: "button",
                                            variant: "ghost",
                                            onClick: e5,
                                            children: "Cancel"
                                          }),
                                          (0, n.jsx)(x.$, {
                                            type: "submit",
                                            loading: ej,
                                            children: ej ? "Adding" : "Add endpoint"
                                          })
                                        ]
                                      })
                                    ]
                                  },
                                  "form"
                                ) : (0, n.jsxs)(
                                  l.PY1.div,
                                  {
                                    ref: eY,
                                    className: D().reveal,
                                    initial: o2 ? { opacity: 0 } : { opacity: 0, y: 8 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: o2 ? U : {
                                      duration: w.T.duration.standard + 0.08,
                                      ease: W,
                                      delay: 0.06
                                    },
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className: D().secretBlock,
                                        children: [
                                          (0, n.jsx)("span", {
                                            id: `${i2}-secret-label`,
                                            className: D().fieldLabel,
                                            children: "Signing secret"
                                          }),
                                          (0, n.jsxs)("div", {
                                            className: D().secretField,
                                            role: "group",
                                            "aria-labelledby": `${i2}-secret-label`,
                                            children: [
                                              (0, n.jsx)(l.PY1.code, {
                                                className: D().secret,
                                                initial: !o2 && {
                                                  opacity: 0,
                                                  filter: `blur(${w.T.blur.text}px)`
                                                },
                                                animate: {
                                                  opacity: 1,
                                                  filter: "blur(0px)"
                                                },
                                                transition: {
                                                  duration: w.T.duration.considered,
                                                  ease: W,
                                                  delay: 0.14
                                                },
                                                children: ew
                                              }),
                                              (0, n.jsx)(j.CopyButton, {
                                                value: ew,
                                                label: "Copy",
                                                onCopied: () => J2(
                                                  "Signing secret copied. Store it with your other server secrets."
                                                )
                                              })
                                            ]
                                          })
                                        ]
                                      }),
                                      (0, n.jsxs)("p", {
                                        className: D().once,
                                        children: [
                                          (0, n.jsx)(h.A, {
                                            size: 16,
                                            strokeWidth: 1.75,
                                            "aria-hidden": "true"
                                          }),
                                          (0, n.jsx)("span", {
                                            children: "Shown once. Use it to check the Halden-Signature header on every request. You can roll it later, but you cannot view it again."
                                          })
                                        ]
                                      }),
                                      (0, n.jsx)("div", {
                                        className: D().actions,
                                        children: (0, n.jsx)(x.$, {
                                          type: "button",
                                          onClick: e5,
                                          children: "Done"
                                        })
                                      })
                                    ]
                                  },
                                  "reveal"
                                )
                              })
                            },
                            "body"
                          )
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          }),
          (0, n.jsx)("div", {
            className: D().endpoints,
            role: "list",
            "aria-label": "Endpoints",
            onKeyDown: (e3) => ed(e3, "data-endpoint", e22),
            children: (0, n.jsx)(r.N, {
              initial: false,
              children: _2.map(
                (e3) => (0, n.jsx)(
                  ec,
                  {
                    item: e3,
                    selected: e3.id === eq.id,
                    selectedId: eq.id,
                    fresh: eN === e3.id,
                    reduced: o2,
                    detailId: eG,
                    onSelect: () => e22(e3.id)
                  },
                  e3.id
                )
              )
            })
          }),
          (0, n.jsxs)("div", {
            id: eG,
            className: D().detail,
            role: "region",
            "aria-labelledby": `${i2}-detail-title`,
            children: [
              (0, n.jsx)("div", {
                className: D().detailHead,
                children: (0, n.jsxs)("div", {
                  className: D().detailTitle,
                  children: [
                    (0, n.jsx)("h3", {
                      id: `${i2}-detail-title`,
                      children: (0, n.jsx)(er, { text: eq.name, reduced: o2 })
                    }),
                    (0, n.jsx)("div", {
                      className: D().detailMeta,
                      children: (0, n.jsx)(r.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, n.jsxs)(
                          l.PY1.p,
                          {
                            initial: o2 ? { opacity: 0 } : Q,
                            animate: q,
                            exit: o2 ? { opacity: 0, transition: U } : V,
                            transition: o2 ? U : { duration: w.T.duration.standard, ease: W },
                            children: [
                              (0, n.jsxs)("span", {
                                className: D().metaItem,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: D().dot,
                                    "aria-hidden": "true"
                                  }),
                                  (0, n.jsx)(f.e, {
                                    className: D().metaAvatar,
                                    name: eq.addedBy.name,
                                    src: eq.addedBy.photo,
                                    size: "sm",
                                    "aria-hidden": "true"
                                  }),
                                  (0, n.jsxs)("span", {
                                    children: [
                                      "Added by ",
                                      eq.addedBy.name,
                                      " on ",
                                      eq.added
                                    ]
                                  })
                                ]
                              }),
                              (0, n.jsxs)("span", {
                                className: D().metaItem,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: D().dot,
                                    "aria-hidden": "true"
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: D().mono,
                                    children: ["whsec_\u2022\u2022\u2022\u2022", eq.secretTail]
                                  })
                                ]
                              }),
                              (0, n.jsxs)("span", {
                                className: D().metaItem,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: D().dot,
                                    "aria-hidden": "true"
                                  }),
                                  (0, n.jsxs)("span", {
                                    children: ["API ", eq.version]
                                  })
                                ]
                              })
                            ]
                          },
                          eq.id
                        )
                      })
                    })
                  ]
                })
              }),
              (0, n.jsx)(eu, { endpoint: eq, reduced: o2 }),
              (0, n.jsx)("div", {
                ref: eI,
                className: D().follow,
                children: (0, n.jsx)("div", {
                  ref: eE,
                  className: D().followInner,
                  children: (0, n.jsx)(r.N, {
                    initial: false,
                    children: (0, n.jsxs)(
                      l.PY1.div,
                      {
                        className: D().split,
                        initial: o2 ? { opacity: 0 } : {
                          opacity: 0,
                          y: 6,
                          filter: `blur(${w.T.blur.subtle}px)`
                        },
                        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                        exit: {
                          opacity: 0,
                          pointerEvents: "none",
                          transition: o2 ? U : { duration: w.T.duration.instant }
                        },
                        transition: o2 ? U : {
                          duration: w.T.duration.standard,
                          ease: W,
                          delay: 0.04
                        },
                        children: [
                          (0, n.jsxs)("div", {
                            className: D().deliveries,
                            children: [
                              (0, n.jsx)("h4", {
                                className: D().sectionLabel,
                                children: "Recent deliveries"
                              }),
                              (0, n.jsx)("div", {
                                className: D().deliveryList,
                                role: "list",
                                "aria-label": `Recent deliveries to ${eq.name}`,
                                onKeyDown: (e3) => ed(
                                  e3,
                                  "data-delivery",
                                  (e6) => C2((t3) => ({ ...t3, [eq.id]: e6 }))
                                ),
                                children: (0, n.jsx)(r.N, {
                                  initial: false,
                                  children: eq.deliveries.map(
                                    (e3) => (0, n.jsx)(
                                      ep,
                                      {
                                        item: e3,
                                        endpointId: eq.id,
                                        selected: e3.id === eQ,
                                        selectedKey: eQ ?? "",
                                        fresh: B2.includes(e3.id),
                                        sending: I2.includes(e3.id),
                                        reduced: o2,
                                        inspectorId: eJ,
                                        onSelect: () => C2((t3) => ({ ...t3, [eq.id]: e3.id })),
                                        onRetry: () => (function(e6, t3) {
                                          if (I2.includes(t3.id)) return;
                                          let a3 = X(e6.url);
                                          M2((e7) => [...e7, t3.id]), J2(`Retrying ${t3.event} to ${a3}.`), eX(() => {
                                            let i3 = ++eH.current, n2 = {
                                              ...t3,
                                              id: `dlv_${S(`${t3.id}:${i3}`, 7)}`,
                                              status: 200,
                                              latency: [
                                                184,
                                                146,
                                                211,
                                                163,
                                                129,
                                                197
                                              ][i3 % 6],
                                              time: E(i3),
                                              attempt: t3.attempt + 1,
                                              response: '{"received":true}',
                                              resolved: false
                                            }, s2 = document.activeElement?.closest(
                                              `[data-row="${t3.id}"]`
                                            ) != null;
                                            m2(
                                              (a4) => a4.map(
                                                (a5) => a5.id !== e6.id ? a5 : {
                                                  ...a5,
                                                  deliveries: [
                                                    n2,
                                                    ...a5.deliveries.map(
                                                      (e7) => e7.id === t3.id ? {
                                                        ...e7,
                                                        resolved: true
                                                      } : e7
                                                    )
                                                  ]
                                                }
                                              )
                                            ), M2(
                                              (e7) => e7.filter((e8) => e8 !== t3.id)
                                            ), e0(n2.id), J2(
                                              `${t3.event} delivered on attempt ${n2.attempt}. ${a3} answered 200 in ${n2.latency} ms.`
                                            ), s2 && e1(n2.id), eX(
                                              () => C2((t4) => ({
                                                ...t4,
                                                [e6.id]: n2.id
                                              })),
                                              460 * !o2
                                            );
                                          }, 1100);
                                        })(eq, e3),
                                        buttonRef: (t3) => {
                                          t3 ? ez.current.set(e3.id, t3) : ez.current.delete(e3.id);
                                        }
                                      },
                                      e3.id
                                    )
                                  )
                                })
                              }),
                              (0, n.jsx)(r.N, {
                                initial: false,
                                children: 0 === eq.deliveries.length && (0, n.jsx)(
                                  l.PY1.div,
                                  {
                                    className: D().emptyWrap,
                                    ...G(o2),
                                    children: (0, n.jsxs)("div", {
                                      className: D().empty,
                                      children: [
                                        (0, n.jsx)("p", {
                                          children: "No deliveries yet"
                                        }),
                                        (0, n.jsxs)("span", {
                                          children: [
                                            "Send a test event to check that ",
                                            X(eq.url),
                                            " answers with a 2xx status."
                                          ]
                                        }),
                                        (0, n.jsx)(x.$, {
                                          type: "button",
                                          variant: "secondary",
                                          size: "sm",
                                          loading: z2 === eq.id,
                                          onClick: () => {
                                            !z2 && (H2(eq.id), J2(
                                              `Sending a test ${eq.events[0]} event to ${X(eq.url)}.`
                                            ), eX(() => {
                                              let e3 = ++eH.current, t3 = E(e3), a3 = eq.events[0], i3 = {
                                                id: `dlv_${S(`${eq.id}:test:${e3}`, 7)}`,
                                                eventId: `evt_${S(`${eq.id}:evt:${e3}`, 10)}`,
                                                event: a3,
                                                status: 200,
                                                latency: 172,
                                                time: t3,
                                                eventTime: t3,
                                                attempt: 1,
                                                response: '{"received":true}',
                                                data: Y[a3],
                                                test: true
                                              };
                                              m2(
                                                (e6) => e6.map(
                                                  (e7) => e7.id !== eq.id ? e7 : {
                                                    ...e7,
                                                    volume: e7.volume.map(
                                                      (e8, t4) => 47 === t4 ? e8 + 1 : e8
                                                    ),
                                                    deliveries: [
                                                      i3,
                                                      ...e7.deliveries
                                                    ]
                                                  }
                                                )
                                              ), C2((e6) => ({
                                                ...e6,
                                                [eq.id]: i3.id
                                              })), H2(null), e0(i3.id), J2(
                                                `Test event delivered. ${X(eq.url)} answered 200 in 172 ms.`
                                              ), e1(i3.id);
                                            }, 900));
                                          },
                                          children: z2 === eq.id ? "Sending" : "Send test event"
                                        })
                                      ]
                                    })
                                  },
                                  "empty"
                                )
                              })
                            ]
                          }),
                          (0, n.jsx)(e_, {
                            endpoint: eq,
                            delivery: eV,
                            tab: L2,
                            reduced: o2,
                            id: eJ,
                            onTab: P2,
                            onCopied: (e3) => J2(`${e3} copied`)
                          })
                        ]
                      },
                      eq.id
                    )
                  })
                })
              })
            ]
          }),
          (0, n.jsx)("footer", {
            className: D().srOnly,
            children: (0, n.jsx)("p", {
              role: "status",
              "aria-live": "polite",
              children: Z2
            })
          })
        ]
      })
    });
  }
  let eb = em;
};

__m(__module,__exports,__require);
});
A.cssFor("webhooks", [14290,22346,42842,90062]);
A.item("webhooks", {entry:91957, export:"Webhooks", kind:"block", tier:"pro", unresolved:[]});
})();