function(__module,__exports,__require){
"use strict";
const __m = (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, {
    AiSearchBar: () => V,
    default: () => q,
    demoAnswer: () => M,
    demoSearch: () => L,
    sampleResults: () => S
  });
  var s = r(95155), a = r(12115), i = r(92171), n = r(18310), o = r(80642), l = r(25354), c = r(86272), d = r(35484), u = r(64577), h = r(99314), p = r(9005), m = r(92298), g = r(65377), f = r(6923), y = r(21759), k = r(76266), x = r(52898), b = r(36483);
  let w = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    focusable: false
  }, v = {
    backlog: "Backlog",
    todo: "Todo",
    progress: "In progress",
    review: "In review",
    done: "Done"
  }, _ = {
    name: "Claude Sonnet 5.5",
    mark: (0, s.jsx)(
      (e2) => (0, s.jsx)("svg", {
        ...w,
        ...e2,
        children: (0, s.jsx)("path", {
          fill: "#D97757",
          d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
        })
      }),
      {}
    )
  }, j = [
    {
      id: "docs",
      label: "Docs",
      icon: (0, s.jsx)(b.A, {
        size: 16,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    },
    { id: "customers", label: "Customers" },
    {
      id: "issues",
      label: "Issues",
      source: {
        name: "Linear",
        mark: (0, s.jsx)(
          (e2) => (0, s.jsx)("svg", {
            ...w,
            ...e2,
            children: (0, s.jsx)("path", {
              fill: "#5E6AD2",
              d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
            })
          }),
          { width: 12, height: 12 }
        )
      }
    }
  ], A = ["webhook retries", "Figma", "AUTH-912"], N = [
    "How do I set up SAML SSO?",
    "How do I rotate an API key safely?",
    "Why do webhook retries stop early?"
  ], S = [
    {
      id: "doc-retries",
      group: "docs",
      title: "Webhook retries and backoff",
      description: "Webhooks",
      meta: "Guide",
      keywords: [
        "webhook",
        "retry",
        "retries",
        "backoff",
        "failed",
        "delivery"
      ]
    },
    {
      id: "doc-replay",
      group: "docs",
      title: "Replaying failed events",
      description: "Webhooks",
      meta: "Guide",
      keywords: ["webhook", "replay", "resend", "retry", "event"]
    },
    {
      id: "doc-signatures",
      group: "docs",
      title: "Verifying webhook signatures",
      description: "Security",
      meta: "Guide",
      keywords: ["webhook", "signature", "hmac", "secret"]
    },
    {
      id: "doc-saml",
      group: "docs",
      title: "SAML single sign-on",
      description: "Security",
      meta: "Guide",
      keywords: ["sso", "saml", "okta", "entra", "login"]
    },
    {
      id: "doc-enforce",
      group: "docs",
      title: "Enforcing SSO for a workspace",
      description: "Admin",
      meta: "Guide",
      keywords: ["sso", "saml", "enforce", "owner", "login"]
    },
    {
      id: "doc-scim",
      group: "docs",
      title: "SCIM provisioning with Okta",
      description: "Security",
      meta: "Guide",
      keywords: ["scim", "okta", "provisioning", "sso"]
    },
    {
      id: "doc-keys",
      group: "docs",
      title: "Rotating API keys",
      description: "Security",
      meta: "Guide",
      keywords: [
        "api",
        "key",
        "keys",
        "rotate",
        "rotation",
        "revoke",
        "secret"
      ]
    },
    {
      id: "doc-rate",
      group: "docs",
      title: "Rate limits",
      description: "API reference",
      meta: "API",
      keywords: ["rate", "limit", "429", "retry"]
    },
    {
      id: "doc-plans",
      group: "docs",
      title: "Plans and seat limits",
      description: "Billing",
      meta: "Guide",
      keywords: ["plan", "enterprise", "seats", "billing", "pricing"]
    },
    {
      id: "cus-vercel",
      group: "customers",
      title: "Vercel",
      description: "Enterprise \xB7 Maya Chen",
      meta: "$412k ARR",
      icon: (0, s.jsx)(
        (e2) => (0, s.jsx)("svg", {
          ...w,
          ...e2,
          children: (0, s.jsx)("path", {
            fill: "currentColor",
            d: "m12 1.608 12 20.784H0Z"
          })
        }),
        {}
      ),
      keywords: ["webhook", "retries", "410", "enterprise"]
    },
    {
      id: "cus-notion",
      group: "customers",
      title: "Notion",
      description: "Enterprise \xB7 Daniel Okafor",
      meta: "$386k ARR",
      icon: (0, s.jsx)(
        (e2) => (0, s.jsx)("svg", {
          ...w,
          ...e2,
          children: (0, s.jsx)("path", {
            fill: "currentColor",
            d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
          })
        }),
        {}
      ),
      keywords: ["sso", "saml", "okta", "enterprise"]
    },
    {
      id: "cus-shopify",
      group: "customers",
      title: "Shopify",
      description: "Enterprise \xB7 Sam Rivera",
      meta: "$520k ARR",
      icon: (0, s.jsx)(
        (e2) => (0, s.jsx)("svg", {
          ...w,
          ...e2,
          children: (0, s.jsx)("path", {
            fill: "#7AB55C",
            d: "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"
          })
        }),
        {}
      ),
      keywords: ["webhooks", "rate", "enterprise"]
    },
    {
      id: "cus-figma",
      group: "customers",
      title: "Figma",
      description: "Enterprise \xB7 Priya Raman",
      meta: "$298k ARR",
      icon: (0, s.jsx)(
        (e2) => (0, s.jsxs)("svg", {
          ...w,
          viewBox: "0 0 38 57",
          ...e2,
          children: [
            (0, s.jsx)("path", {
              fill: "#1ABCFE",
              d: "M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
            }),
            (0, s.jsx)("path", {
              fill: "#0ACF83",
              d: "M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
            }),
            (0, s.jsx)("path", {
              fill: "#FF7262",
              d: "M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"
            }),
            (0, s.jsx)("path", {
              fill: "#F24E1E",
              d: "M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
            }),
            (0, s.jsx)("path", {
              fill: "#A259FF",
              d: "M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
            })
          ]
        }),
        {}
      ),
      keywords: ["scim", "sso", "enterprise"]
    },
    {
      id: "cus-supabase",
      group: "customers",
      title: "Supabase",
      description: "Scale \xB7 Jonas Weber",
      meta: "$96k ARR",
      icon: (0, s.jsx)(
        (e2) => (0, s.jsx)("svg", {
          ...w,
          ...e2,
          children: (0, s.jsx)("path", {
            fill: "#3FCF8E",
            d: "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"
          })
        }),
        {}
      ),
      keywords: ["webhook", "replay", "rate"]
    },
    {
      id: "cus-raycast",
      group: "customers",
      title: "Raycast",
      description: "Scale \xB7 Lea Martin",
      meta: "$54k ARR",
      icon: (0, s.jsx)(
        (e2) => (0, s.jsx)("svg", {
          ...w,
          ...e2,
          children: (0, s.jsx)("path", {
            fill: "#FF6363",
            d: "M6.004 15.492v2.504L0 11.992l1.258-1.249Zm2.504 2.504H6.004L12.008 24l1.253-1.253zm14.24-4.747L24 11.997 12.003 0 10.75 1.251 15.491 6h-2.865L9.317 2.692 8.065 3.944l2.06 2.06H8.691v9.31H18v-1.432l2.06 2.06 1.252-1.252-3.312-3.32V8.506ZM6.63 5.372 5.38 6.625l1.342 1.343 1.251-1.253Zm10.655 10.655-1.247 1.251 1.342 1.343 1.253-1.251zM3.944 8.059 2.692 9.31l3.312 3.314v-2.506zm9.936 9.937h-2.504l3.314 3.312 1.25-1.252z"
          })
        }),
        {}
      ),
      keywords: ["api", "key", "rotate", "rotation"]
    },
    {
      id: "API-2481",
      group: "issues",
      title: "Retries stop after a 410 response",
      description: "API-2481",
      status: "progress",
      keywords: ["webhook", "retries", "retry", "410", "vercel"]
    },
    {
      id: "API-2463",
      group: "issues",
      title: "Backoff ignores the Retry-After header",
      description: "API-2463",
      status: "done",
      keywords: ["webhook", "retries", "backoff"]
    },
    {
      id: "API-2390",
      group: "issues",
      title: "Show next retry time in delivery logs",
      description: "API-2390",
      status: "todo",
      keywords: ["webhook", "retries", "logs", "delivery"]
    },
    {
      id: "AUTH-912",
      group: "issues",
      title: "Okta login loops back to sign-in",
      description: "AUTH-912",
      status: "review",
      keywords: ["sso", "saml", "okta", "login"]
    },
    {
      id: "AUTH-874",
      group: "issues",
      title: "SCIM deprovisioning leaves sessions active",
      description: "AUTH-874",
      status: "progress",
      keywords: ["scim", "okta", "sessions", "sso"]
    },
    {
      id: "API-2502",
      group: "issues",
      title: "Revoked keys keep working for 24 hours",
      description: "API-2502",
      status: "backlog",
      keywords: ["api", "key", "keys", "rotate", "revoke"]
    },
    {
      id: "API-2477",
      group: "issues",
      title: "429s on the replay endpoint during bursts",
      description: "API-2477",
      status: "todo",
      keywords: ["replay", "rate", "429", "webhook"]
    },
    {
      id: "BILL-311",
      group: "issues",
      title: "Seat count off by one after a downgrade",
      description: "BILL-311",
      status: "todo",
      keywords: ["enterprise", "seats", "plan", "billing"]
    }
  ], E = /* @__PURE__ */ new Set([
    "a",
    "an",
    "and",
    "are",
    "can",
    "do",
    "does",
    "for",
    "how",
    "i",
    "in",
    "is",
    "it",
    "my",
    "of",
    "on",
    "or",
    "our",
    "set",
    "the",
    "to",
    "up",
    "we",
    "what",
    "when",
    "where",
    "which",
    "who",
    "why",
    "with",
    "you"
  ]);
  function C(e2) {
    return e2.toLowerCase().split(/[^a-z0-9-]+/).filter((e3) => e3.length > 1 && !E.has(e3));
  }
  let T = (e2, t2) => e2.includes(t2) || e2.includes(
    t2.endsWith("ies") ? `${t2.slice(0, -3)}y` : t2.length > 3 && t2.endsWith("s") ? t2.slice(0, -1) : t2
  );
  function L(e2, t2 = S, r2 = 3) {
    let s2 = C(e2);
    if (!s2.length) return [];
    let a2 = Math.max(1, Math.ceil(s2.length / 2)), i2 = t2.map((e3, t3) => {
      let r3 = [e3.title, e3.description, ...e3.keywords ?? []].join(" ").toLowerCase(), a3 = e3.title.toLowerCase();
      return {
        item: e3,
        order: t3,
        score: s2.filter((e4) => T(r3, e4)).length,
        titleScore: s2.filter((e4) => T(a3, e4)).length
      };
    }).filter((e3) => e3.score >= a2);
    i2.sort(
      (e3, t3) => t3.score - e3.score || t3.titleScore - e3.titleScore || e3.order - t3.order
    );
    let n2 = /* @__PURE__ */ new Map();
    return i2.filter(({ item: e3 }) => {
      let t3 = n2.get(e3.group) ?? 0;
      return n2.set(e3.group, t3 + 1), t3 < r2;
    }).map((e3) => e3.item);
  }
  let $ = [
    {
      match: (e2) => e2.some((e3) => e3.startsWith("retr")) || e2.includes("webhook") && 1 === e2.length,
      ids: ["doc-retries", "API-2481", "cus-vercel", "doc-replay"],
      text: "Failed deliveries are retried 8 times over about 3 days, with exponential backoff starting at 30 seconds [1]. Right now a 410 response stops retries early. The fix is in progress in API-2481 [2], first reported by Vercel on October 24 [3]. To resend sooner, replay the event from the delivery log or call `POST /v1/events/:id/replay` [4]."
    },
    {
      match: (e2) => e2.includes("sso") || e2.includes("saml"),
      ids: ["doc-saml", "doc-enforce", "AUTH-912", "cus-notion"],
      text: "Workspace admins turn on SAML in Settings, Security, then paste the metadata URL from Okta, Entra ID or Google Workspace [1]. Run one test login before you enforce SSO, and keep one owner on email login as a break glass account [2]. If Okta logins loop back to the sign-in page, that is AUTH-912, now in review [3]. Notion finished the same rollout on October 14 [4]."
    },
    {
      match: (e2) => e2.some((e3) => e3.startsWith("key") || e3.startsWith("rotat")),
      ids: ["doc-keys", "API-2502", "cus-raycast"],
      text: "Create a second key in Settings, API keys, deploy it everywhere, then revoke the old one; both keys work in the meantime [1]. Revoked keys currently keep working for up to 24 hours, tracked in API-2502, so revoke early if a key leaked [2]. Raycast rotates every 90 days with `POST /v1/keys/:id/roll` [3]."
    }
  ], I = (e2, t2) => new Promise((r2, s2) => {
    if (t2.aborted) return void s2(t2.reason);
    let a2 = setTimeout(r2, e2);
    t2.addEventListener(
      "abort",
      () => {
        clearTimeout(a2), s2(t2.reason);
      },
      { once: true }
    );
  });
  async function* M({ query: e2, results: t2, signal: r2 }) {
    let s2 = C(e2), a2 = new Set(t2.map((e3) => e3.id)), i2 = $.find((e3) => e3.match(s2) && e3.ids.every((e4) => a2.has(e4)));
    if (await I(260, r2), i2) {
      yield { type: "sources", ids: i2.ids }, await I(520, r2);
      let e3 = i2.text.split(" ");
      for (let t3 = 0; t3 < e3.length; t3 += 14)
        yield {
          type: "text",
          text: e3.slice(t3, t3 + 14).join(" ") + (t3 + 14 < e3.length ? " " : "")
        }, await I(90, r2);
      return;
    }
    await I(520, r2);
    let n2 = t2.slice(0, 3);
    if (!n2.length)
      return void (yield {
        type: "text",
        text: `Nothing in your docs, customers or issues mentions \u201C${e2.trim()}\u201D. Try a broader term, or ask in #support where the team can pick it up.`
      });
    yield { type: "sources", ids: n2.map((e3) => e3.id) };
    let o2 = n2.map((e3, t3) => `${e3.title} [${t3 + 1}]`), l2 = o2.length > 1 ? `${o2.slice(0, -1).join(", ")} and ${o2[o2.length - 1]}` : o2[0];
    yield {
      type: "text",
      text: `There is no single answer to that yet. The closest matches are ${l2}. Open one below, or ask a more specific question.`
    };
  }
  var R = r(57716), z = r.n(R), P = r(55665);
  let W = {
    run: 0,
    status: "idle",
    query: "",
    sources: [],
    text: "",
    streamDone: false,
    startedAt: 0
  }, H = { duration: 0.16, ease: [0.22, 1, 0.36, 1] }, D = { duration: 0.1, ease: [0.4, 0, 1, 1] }, O = { type: "spring", visualDuration: 0.24, bounce: 0 };
  function F(e2, t2) {
    let r2 = e2;
    if (!t2) {
      (r2.match(/`/g)?.length ?? 0) % 2 && (r2 = r2.slice(0, r2.lastIndexOf("`")));
      let e3 = r2.lastIndexOf("[");
      e3 > r2.lastIndexOf("]") && (r2 = r2.slice(0, e3));
    }
    let s2 = [];
    for (let e3 of r2.matchAll(/`([^`]+)`(\s*)|\[(\d+)\]|[^\s[`]+\s*|\s+|[[`]/g))
      void 0 !== e3[1] ? s2.push({ kind: "code", value: e3[1], space: e3[2] ?? "" }) : void 0 !== e3[3] ? s2.push({ kind: "cite", n: Number(e3[3]) }) : s2.push({ kind: "text", value: e3[0] });
    return t2 || !s2.length || /\s$/.test(r2) || s2.pop(), s2;
  }
  function B({ status: e2 }) {
    let t2 = {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      "aria-hidden": true,
      className: z().status,
      "data-status": e2
    };
    if ("backlog" === e2)
      return (0, s.jsx)("svg", {
        ...t2,
        children: (0, s.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeDasharray: "2.2 2.2"
        })
      });
    if ("todo" === e2)
      return (0, s.jsx)("svg", {
        ...t2,
        children: (0, s.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5"
        })
      });
    if ("done" === e2)
      return (0, s.jsxs)("svg", {
        ...t2,
        children: [
          (0, s.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "6.75",
            fill: "currentColor"
          }),
          (0, s.jsx)("path", {
            d: "m5.25 8.15 1.9 1.85 3.6-3.75",
            fill: "none",
            stroke: "var(--surface)",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        ]
      });
    let r2 = "progress" === e2 ? "M8 4.5v7a3.5 3.5 0 0 0 0-7Z" : "M8 4.5A3.5 3.5 0 1 1 4.5 8H8Z";
    return (0, s.jsxs)("svg", {
      ...t2,
      children: [
        (0, s.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5"
        }),
        (0, s.jsx)("path", { d: r2, fill: "currentColor" })
      ]
    });
  }
  let U = (e2, t2) => new Promise((r2, s2) => {
    if (t2.aborted) return void s2(Error("stopped"));
    let a2 = setTimeout(r2, e2);
    t2.addEventListener(
      "abort",
      () => {
        clearTimeout(a2), s2(Error("stopped"));
      },
      { once: true }
    );
  });
  function V({
    placeholder: e2 = "Search docs, customers and issues",
    groups: t2 = j,
    search: r2,
    answer: b2,
    recent: w2 = A,
    suggestions: E2 = N,
    model: T2 = _,
    autoPlay: $2,
    onSelect: I2,
    onAsk: R2,
    className: q2
  }) {
    let G, Y, Z = (0, a.useId)(), K = !!(0, n.I)(), X = (0, a.useRef)(null), Q = (0, a.useRef)(null), J = (0, a.useRef)(null), [ee, et] = (0, a.useState)(""), [er, es] = (0, a.useState)([]), [ea, ei] = (0, a.useState)(false), [en, eo] = (0, a.useState)(0), [el, ec] = (0, a.useState)(w2), [ed, eu] = (0, a.useState)(W), [eh, ep] = (0, a.useState)([]), [em, eg] = (0, a.useState)(null), [ef, ey] = (0, a.useState)(null), [ek, ex] = (0, a.useState)(""), [eb, ew] = (0, a.useState)(false), [ev, e_] = (0, a.useState)(false), ej = (0, a.useRef)(ed), eA = (0, a.useRef)(0), eN = (0, a.useRef)(null), eS = (0, a.useRef)(er), eE = (0, a.useRef)("");
    (0, a.useEffect)(() => {
      ej.current = ed, eS.current = er;
    });
    let eC = (0, a.useMemo)(() => C(ee), [ee]), eT = ee.trim().length > 0, eL = "idle" !== ed.status;
    (0, a.useEffect)(() => {
      if (!eT) {
        eS.current = [], eE.current = "", es([]), ei(false);
        return;
      }
      let e3 = r2 ?? ((e6) => L(e6, S)), t3 = new AbortController(), s2 = e3(ee, t3.signal), a2 = (e6) => {
        eS.current = e6, eE.current = ee, es(e6), ei(false);
      };
      return Array.isArray(s2) ? void a2(s2) : (ei(true), s2.then(
        (e6) => {
          t3.signal.aborted || a2(e6);
        },
        () => {
          t3.signal.aborted || (eE.current = ee, ei(false));
        }
      ), () => t3.abort());
    }, [ee, eT, r2]);
    let e$ = (0, a.useMemo)(() => {
      let e3 = new Set(t2.map((e6) => e6.id)), r3 = t2.map((e6) => ({
        group: e6,
        items: er.filter((t3) => t3.group === e6.id)
      })), s2 = er.filter((t3) => !e3.has(t3.group));
      return s2.length && r3.push({ group: { id: "other", label: "Other" }, items: s2 }), r3.filter((e6) => e6.items.length);
    }, [t2, er]), eI = (0, a.useMemo)(() => {
      if (!eT)
        return [
          ...el.map((e6) => ({ kind: "recent", text: e6 })),
          ...E2.map((e6) => ({ kind: "suggestion", text: e6 }))
        ];
      let e3 = eL ? [] : [{ kind: "ask" }];
      return e$.forEach(
        (t3) => t3.items.forEach((t4) => e3.push({ kind: "result", result: t4 }))
      ), e3;
    }, [eT, el, E2, eL, e$]), eM = eI.findIndex((e3) => "result" === e3.kind), eR = er.map((e3) => e3.id).join();
    (0, a.useEffect)(() => {
      eo(eT ? Math.max(0, eM) : 0);
    }, [ee, eR, eL]);
    let ez = (e3) => `${Z}-option-${e3}`, eP = (0, a.useCallback)(
      (e3) => {
        let t3 = document.getElementById(ez(e3)), r3 = J.current?.querySelector("[data-scroll]");
        if (!t3 || !r3) return;
        let s2 = t3.offsetTop - 8, a2 = t3.offsetTop + t3.offsetHeight + 8;
        s2 < r3.scrollTop ? r3.scrollTo({
          top: Math.max(0, s2 - 28),
          behavior: K ? "auto" : "smooth"
        }) : a2 > r3.scrollTop + r3.clientHeight && r3.scrollTo({
          top: a2 - r3.clientHeight,
          behavior: K ? "auto" : "smooth"
        });
      },
      [Z, K]
    ), eW = (0, a.useCallback)((e3, t3 = e3) => {
      ey({ id: Date.now(), text: e3 }), ex(t3);
    }, []);
    (0, a.useEffect)(() => {
      if (!ef) return;
      let e3 = setTimeout(() => ey(null), 2400);
      return () => clearTimeout(e3);
    }, [ef]);
    let eH = (0, a.useCallback)((e3) => {
      let t3 = e3.trim();
      t3 && ec(
        (e6) => [t3, ...e6.filter((e7) => e7.toLowerCase() !== t3.toLowerCase())].slice(
          0,
          3
        )
      );
    }, []), eD = (0, a.useCallback)(() => {
      eN.current?.abort(), eN.current = null, eA.current = 0, ep([]), eg(null), eu((e3) => "idle" === e3.status ? e3 : { ...W, run: e3.run });
    }, []), eO = (0, a.useCallback)(
      (e3) => {
        let t3 = e3.trim();
        if (!t3) return;
        eN.current?.abort();
        let r3 = new AbortController();
        eN.current = r3, eA.current = 0, ep([]), eg(null), e_(false);
        let s2 = ej.current.run + 1;
        eu({
          run: s2,
          status: "thinking",
          query: t3,
          sources: [],
          text: "",
          streamDone: false,
          startedAt: performance.now()
        }), eH(t3), R2?.(t3), ex(b2 ? "Asking AI." : "Asking AI. Simulated, nothing was sent."), J.current?.querySelector("[data-scroll]")?.scrollTo({ top: 0 });
        let a2 = b2 ?? M;
        (async () => {
          try {
            for (let e6 = 0; e6 < 40 && eE.current !== t3; e6++)
              await U(16, r3.signal);
            for await (let e6 of a2({
              query: t3,
              results: eS.current,
              signal: r3.signal
            })) {
              if (r3.signal.aborted) return;
              "sources" === e6.type ? eu((t4) => t4.run === s2 ? { ...t4, sources: e6.ids } : t4) : eu(
                (t4) => t4.run === s2 ? { ...t4, text: t4.text + e6.text } : t4
              );
            }
            r3.signal.aborted || eu((e6) => e6.run === s2 ? { ...e6, streamDone: true } : e6);
          } catch (e6) {
            if (r3.signal.aborted) return;
            eu(
              (t4) => t4.run === s2 ? {
                ...t4,
                status: "error",
                error: e6 instanceof Error ? e6.message : "The answer could not be written."
              } : t4
            ), ex("The answer could not be written. Try again.");
          }
        })();
      },
      [b2, R2, eH]
    );
    (0, a.useEffect)(() => () => eN.current?.abort(), []);
    let eF = "thinking" === ed.status || "streaming" === ed.status;
    (0, a.useEffect)(() => {
      if (!eF) return;
      let e3 = 0, t3 = 0, r3 = (s2) => {
        if (e3 = requestAnimationFrame(r3), s2 - t3 < 34) return;
        t3 = s2;
        let a2 = ej.current;
        if (s2 - a2.startedAt < 560) return;
        let i2 = F(a2.text, a2.streamDone), n2 = eA.current;
        if (n2 < i2.length) {
          let e6 = i2.length - n2, t4 = Math.min(e6, Math.max(3, Math.min(8, Math.ceil(e6 / 6))));
          eA.current = n2 + t4, ep((e7) => [...e7, n2 + t4]), "thinking" === a2.status && eu(
            (e7) => e7.run === a2.run ? { ...e7, status: "streaming" } : e7
          );
        } else if (a2.streamDone) {
          eu((e7) => e7.run === a2.run ? { ...e7, status: "done" } : e7);
          let e6 = a2.sources.length;
          ex(
            `Answer ready${e6 ? `, ${e6} source${1 === e6 ? "" : "s"}` : ""}.${b2 ? "" : " Simulated answer."}`
          );
        }
      };
      return e3 = requestAnimationFrame(r3), () => cancelAnimationFrame(e3);
    }, [eF, ed.run, b2]);
    let eB = (0, a.useMemo)(
      () => F(ed.text, ed.streamDone),
      [ed.text, ed.streamDone]
    ), eU = (0, a.useMemo)(() => {
      let e3 = /* @__PURE__ */ new Set();
      return eB.slice(0, eh[eh.length - 1] ?? 0).forEach((t3) => {
        "cite" === t3.kind && e3.add(t3.n);
      }), e3;
    }, [eB, eh]), eV = (0, a.useCallback)(() => {
      ew(true), setTimeout(() => ew(false), 160);
    }, []), eq = (e3) => {
      "idle" !== ej.current.status && eD(), et(e3);
    }, eG = (e3) => {
      if (!e3) return;
      if ("ask" === e3.kind) {
        eV(), eO(ee);
        return;
      }
      if ("recent" === e3.kind) {
        eq(e3.text), Q.current?.focus();
        return;
      }
      if ("suggestion" === e3.kind) {
        eq(e3.text), eO(e3.text);
        return;
      }
      let { result: t3 } = e3;
      eH(ee), I2?.(t3), eW(
        `Opened ${t3.title}`,
        I2 ? `Opened ${t3.title}.` : `Opened ${t3.title}. Simulated, nothing was opened.`
      );
    }, eY = async () => {
      let e3 = ed.text.replace(/`/g, "");
      try {
        await (0, P.a)(e3);
      } catch {
      }
      e_(true), eW("Copied the answer"), setTimeout(() => e_(false), 1600);
    }, eZ = (0, a.useRef)(false), eK = (0, a.useRef)(true), eX = $2 ?? (!r2 && !b2);
    (0, a.useEffect)(() => {
      let e3 = X.current;
      if (!eX || !e3) return;
      let t3 = new AbortController(), { signal: r3 } = t3, s2 = "u" < typeof IntersectionObserver ? void 0 : new IntersectionObserver(([e6]) => {
        eK.current = !!e6?.isIntersecting;
      });
      s2?.observe(e3);
      let a2 = () => {
        eZ.current = true, t3.abort();
      };
      e3.addEventListener("pointerdown", a2), e3.addEventListener("keydown", a2), e3.addEventListener("focusin", a2);
      let i2 = async (e6) => {
        for (await U(e6, r3); !eK.current || document.hidden; ) await U(400, r3);
      }, n2 = async (e6) => {
        if (K) return void eq(e6);
        for (let t4 = 1; t4 <= e6.length; t4 += 2)
          eq(e6.slice(0, t4)), await U(42, r3);
        eq(e6);
      }, o2 = async () => {
        for (; "done" !== ej.current.status && "error" !== ej.current.status; )
          await U(120, r3);
      };
      return (async () => {
        try {
          do {
            if (await i2(1100), await n2("webhook retries"), await i2(1e3), eV(), eO("webhook retries"), await o2(), K)
              break;
            await i2(5200), eq(""), await i2(700);
            let e6 = el.length;
            for (let t5 = 1; t5 <= e6; t5++) eo(t5), await U(110, r3);
            await i2(420);
            let t4 = E2[0];
            if (!t4) break;
            eq(t4), eO(t4), await o2(), await i2(5200), eq("");
          } while (!eZ.current);
        } catch {
        }
      })(), () => {
        t3.abort(), s2?.disconnect(), e3.removeEventListener("pointerdown", a2), e3.removeEventListener("keydown", a2), e3.removeEventListener("focusin", a2);
      };
    }, [eX]);
    let eQ = (G = (0, a.useRef)(null), Y = (0, a.useRef)(null), (0, a.useEffect)(() => {
      let e3, t3 = G.current, r3 = Y.current;
      if (!t3 || !r3 || "u" < typeof ResizeObserver) return;
      let s2 = r3.offsetHeight, a2 = r3.offsetWidth, n2 = () => {
        t3.style.height = "", t3.style.overflow = "", e3 = void 0;
      }, o2 = new ResizeObserver(() => {
        let o3 = r3.offsetHeight, l2 = r3.offsetWidth, c2 = l2 !== a2;
        if (a2 = l2, o3 === s2) return;
        let d2 = e3 ? t3.getBoundingClientRect().height : s2;
        (s2 = o3, e3?.stop(), K || c2) ? n2() : (t3.style.overflow = "hidden", e3 = (0, i.i)(
          t3,
          { height: [d2, o3] },
          { ...O, onComplete: n2 }
        ));
      });
      return o2.observe(r3), () => {
        o2.disconnect(), e3?.stop();
      };
    }, [K]), { outer: G, inner: Y }), eJ = eT ? "results" : "empty", e1 = `${Z}-listbox`, e0 = `${Z}-ask`, e22 = "thinking" === ed.status ? "Thinking" : "streaming" === ed.status ? "Writing" : "error" === ed.status ? "" : `${ed.sources.length || "No"} source${1 === ed.sources.length ? "" : "s"}`, e4 = -1, e5 = (e3, t3, r3) => {
      let a2 = ++e4;
      return (0, s.jsx)(
        "div",
        {
          id: ez(a2),
          role: "option",
          "aria-selected": en === a2,
          "aria-label": r3?.label,
          className: z().row,
          "data-active": en === a2 ? "" : void 0,
          "data-hot": r3?.hot ? "" : void 0,
          onMouseMove: () => {
            en !== a2 && eo(a2);
          },
          onMouseDown: (e6) => e6.preventDefault(),
          onClick: () => {
            eo(a2), eG(e3), Q.current?.focus();
          },
          children: t3
        },
        "result" === e3.kind ? e3.result.id : `${e3.kind}-${a2}`
      );
    };
    return (0, s.jsxs)("div", {
      ref: X,
      className: ((...e3) => e3.filter(Boolean).join(" "))(z().root, q2),
      children: [
        (0, s.jsxs)("div", {
          className: z().field,
          children: [
            (0, s.jsx)("span", {
              className: z().fieldIcon,
              "aria-hidden": "true",
              children: (0, s.jsx)(o.N, {
                initial: false,
                mode: "popLayout",
                children: ea ? (0, s.jsx)(
                  l.PY1.span,
                  {
                    className: z().spinner,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: D },
                    transition: H
                  },
                  "spin"
                ) : (0, s.jsx)(
                  l.PY1.span,
                  {
                    className: z().iconSwap,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0, transition: D },
                    transition: H,
                    children: (0, s.jsx)(g.A, {
                      size: 16,
                      strokeWidth: 1.75
                    })
                  },
                  "search"
                )
              })
            }),
            (0, s.jsx)("input", {
              ref: Q,
              className: z().input,
              value: ee,
              onChange: (e3) => eq(e3.target.value),
              onKeyDown: (e3) => {
                if ("ArrowDown" === e3.key || "ArrowUp" === e3.key) {
                  if (!eI.length) return;
                  e3.preventDefault();
                  let t3 = (en + ("ArrowDown" === e3.key ? 1 : -1) + eI.length) % eI.length;
                  eo(t3), eP(t3);
                } else
                  "Enter" === e3.key ? (e3.preventDefault(), eG(eI[en])) : "Tab" !== e3.key || e3.shiftKey || !eT || eL && "error" !== ed.status ? "Escape" === e3.key && (eL ? (e3.preventDefault(), eD(), ex("Answer closed.")) : eT && (e3.preventDefault(), et(""))) : (e3.preventDefault(), eV(), eO(ee));
              },
              placeholder: e2,
              role: "combobox",
              "aria-expanded": "true",
              "aria-controls": "results" !== eJ || eL ? e1 : `${e0} ${e1}`,
              "aria-autocomplete": "list",
              "aria-activedescendant": eI.length ? ez(en) : void 0,
              "aria-label": "Search",
              autoComplete: "off",
              spellCheck: false
            }),
            (0, s.jsx)(o.N, {
              initial: false,
              children: eT && (0, s.jsx)(
                l.PY1.button,
                {
                  type: "button",
                  className: z().iconButton,
                  "aria-label": "Clear search",
                  onClick: () => {
                    eq(""), Q.current?.focus();
                  },
                  initial: !K && { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: K ? void 0 : { opacity: 0, transition: D },
                  transition: H,
                  children: (0, s.jsx)(p.A, {
                    size: 14,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                },
                "clear"
              )
            })
          ]
        }),
        (0, s.jsx)("div", {
          ref: J,
          className: z().body,
          children: (0, s.jsx)(o.N, {
            initial: false,
            children: (0, s.jsx)(
              l.PY1.div,
              {
                className: z().view,
                "data-scroll": "",
                initial: !K && { opacity: 0 },
                animate: { opacity: 1, transition: H },
                exit: K ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, transition: D },
                children: "empty" === eJ ? (0, s.jsxs)("div", {
                  id: e1,
                  role: "listbox",
                  "aria-label": "Recent searches and suggestions",
                  className: z().list,
                  children: [
                    el.length > 0 && (0, s.jsxs)("div", {
                      role: "group",
                      "aria-labelledby": `${Z}-recent`,
                      className: z().group,
                      children: [
                        (0, s.jsx)("div", {
                          id: `${Z}-recent`,
                          className: z().groupHead,
                          children: "Recent"
                        }),
                        el.map(
                          (e3) => e5(
                            { kind: "recent", text: e3 },
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(f.A, {
                                  className: z().muted,
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                (0, s.jsx)("span", {
                                  className: z().text,
                                  children: (0, s.jsx)("span", {
                                    className: z().title,
                                    children: e3
                                  })
                                }),
                                (0, s.jsx)("span", {
                                  className: z().right,
                                  children: (0, s.jsx)(y.A, {
                                    className: z().enter,
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                })
                              ]
                            })
                          )
                        )
                      ]
                    }),
                    E2.length > 0 && (0, s.jsxs)("div", {
                      role: "group",
                      "aria-labelledby": `${Z}-suggested`,
                      className: z().group,
                      children: [
                        (0, s.jsx)("div", {
                          id: `${Z}-suggested`,
                          className: z().groupHead,
                          children: "Ask AI"
                        }),
                        E2.map(
                          (e3) => e5(
                            { kind: "suggestion", text: e3 },
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)(c.A, {
                                  className: z().sparkle,
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                (0, s.jsx)("span", {
                                  className: z().text,
                                  children: (0, s.jsx)("span", {
                                    className: z().title,
                                    children: e3
                                  })
                                }),
                                (0, s.jsx)("span", {
                                  className: z().right,
                                  children: (0, s.jsx)(y.A, {
                                    className: z().enter,
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                })
                              ]
                            })
                          )
                        )
                      ]
                    })
                  ]
                }) : (0, s.jsxs)("div", {
                  className: z().list,
                  children: [
                    (0, s.jsx)("div", {
                      ref: eQ.outer,
                      className: z().answerSlot,
                      children: (0, s.jsx)("div", {
                        ref: eQ.inner,
                        children: (0, s.jsx)(o.N, {
                          initial: false,
                          mode: "popLayout",
                          children: (0, s.jsx)(
                            l.PY1.div,
                            {
                              initial: !K && { opacity: 0 },
                              animate: { opacity: 1, transition: H },
                              exit: K ? void 0 : { opacity: 0, transition: D },
                              children: eL ? (0, s.jsxs)("div", {
                                className: z().answer,
                                role: "region",
                                "aria-label": `AI answer to ${ed.query}`,
                                "aria-busy": eF,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: z().answerHead,
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: z().mark,
                                        children: T2.mark ?? (0, s.jsx)(c.A, {
                                          size: 16,
                                          strokeWidth: 1.75,
                                          "aria-hidden": "true"
                                        })
                                      }),
                                      (0, s.jsx)("span", {
                                        className: z().answerTitle,
                                        children: "AI answer"
                                      }),
                                      (0, s.jsx)("span", {
                                        className: z().answerStatus,
                                        children: "error" === ed.status ? (0, s.jsxs)("span", {
                                          className: z().errorLabel,
                                          children: [
                                            (0, s.jsx)(d.A, {
                                              size: 14,
                                              "aria-hidden": "true"
                                            }),
                                            "Failed"
                                          ]
                                        }) : (0, s.jsx)(x.n, {
                                          active: eF,
                                          children: e22
                                        })
                                      }),
                                      (0, s.jsxs)("span", {
                                        className: z().answerActions,
                                        children: [
                                          (0, s.jsx)("button", {
                                            type: "button",
                                            className: z().iconButton,
                                            onClick: eY,
                                            disabled: "done" !== ed.status,
                                            "aria-label": ev ? "Copied" : "Copy answer",
                                            children: (0, s.jsx)(
                                              o.N,
                                              {
                                                initial: false,
                                                mode: "popLayout",
                                                children: (0, s.jsx)(
                                                  l.PY1.span,
                                                  {
                                                    className: z().iconSwap,
                                                    initial: !K && {
                                                      opacity: 0,
                                                      scale: 0.8
                                                    },
                                                    animate: {
                                                      opacity: 1,
                                                      scale: 1
                                                    },
                                                    exit: K ? void 0 : {
                                                      opacity: 0,
                                                      scale: 0.8,
                                                      transition: D
                                                    },
                                                    transition: H,
                                                    children: ev ? (0, s.jsx)(
                                                      u.A,
                                                      {
                                                        size: 14,
                                                        strokeWidth: 2,
                                                        "aria-hidden": "true"
                                                      }
                                                    ) : (0, s.jsx)(
                                                      h.A,
                                                      {
                                                        size: 14,
                                                        strokeWidth: 1.75,
                                                        "aria-hidden": "true"
                                                      }
                                                    )
                                                  },
                                                  ev ? "check" : "copy"
                                                )
                                              }
                                            )
                                          }),
                                          (0, s.jsx)("button", {
                                            type: "button",
                                            className: z().iconButton,
                                            onClick: () => {
                                              eD(), ex("Answer closed."), Q.current?.focus();
                                            },
                                            "aria-label": "Close answer",
                                            children: (0, s.jsx)(
                                              p.A,
                                              {
                                                size: 14,
                                                strokeWidth: 1.75,
                                                "aria-hidden": "true"
                                              }
                                            )
                                          })
                                        ]
                                      })
                                    ]
                                  }),
                                  "error" === ed.status ? (0, s.jsxs)("div", {
                                    className: z().error,
                                    role: "alert",
                                    children: [
                                      (0, s.jsx)("span", {
                                        children: ed.error
                                      }),
                                      (0, s.jsxs)("button", {
                                        type: "button",
                                        className: z().retry,
                                        onClick: () => eO(ed.query),
                                        children: [
                                          (0, s.jsx)(m.A, {
                                            size: 14,
                                            strokeWidth: 1.75,
                                            "aria-hidden": "true"
                                          }),
                                          "Try again"
                                        ]
                                      })
                                    ]
                                  }) : (0, s.jsxs)("p", {
                                    className: z().answerText,
                                    children: [
                                      0 === eh.length && (0, s.jsxs)("span", {
                                        className: z().placeholder,
                                        "aria-hidden": "true",
                                        children: [
                                          (0, s.jsx)(
                                            "span",
                                            {}
                                          ),
                                          (0, s.jsx)(
                                            "span",
                                            {}
                                          )
                                        ]
                                      }),
                                      eh.map(
                                        (e3, t3) => (0, s.jsx)(
                                          "span",
                                          {
                                            className: z().chunk,
                                            children: eB.slice(
                                              t3 ? eh[t3 - 1] : 0,
                                              e3
                                            ).map((e6, t4) => {
                                              let r3;
                                              return "text" === e6.kind ? (0, s.jsx)(
                                                a.Fragment,
                                                {
                                                  children: e6.value
                                                },
                                                t4
                                              ) : "code" === e6.kind ? (0, s.jsxs)(
                                                a.Fragment,
                                                {
                                                  children: [
                                                    (0, s.jsx)(
                                                      "code",
                                                      {
                                                        className: z().code,
                                                        children: e6.value
                                                      }
                                                    ),
                                                    e6.space
                                                  ]
                                                },
                                                t4
                                              ) : (0, s.jsx)(
                                                "button",
                                                {
                                                  type: "button",
                                                  className: z().cite,
                                                  "data-hot": em === e6.n ? "" : void 0,
                                                  "aria-label": `Source ${e6.n}: ${r3 = e6.n, er.find((e7) => e7.id === ed.sources[r3 - 1])?.title ?? `Source ${r3}`}`,
                                                  onMouseEnter: () => eg(
                                                    e6.n
                                                  ),
                                                  onMouseLeave: () => eg(
                                                    null
                                                  ),
                                                  onFocus: () => eg(
                                                    e6.n
                                                  ),
                                                  onBlur: () => eg(
                                                    null
                                                  ),
                                                  onClick: () => {
                                                    var t5;
                                                    let r4;
                                                    return t5 = e6.n, void (!((r4 = eI.findIndex(
                                                      (e7) => "result" === e7.kind && e7.result.id === ed.sources[t5 - 1]
                                                    )) < 0) && (eo(
                                                      r4
                                                    ), eP(
                                                      r4
                                                    )));
                                                  },
                                                  children: e6.n
                                                },
                                                t4
                                              );
                                            })
                                          },
                                          t3
                                        )
                                      )
                                    ]
                                  })
                                ]
                              }) : (0, s.jsx)("div", {
                                id: e0,
                                role: "listbox",
                                "aria-label": "Ask AI",
                                className: z().group,
                                children: e5(
                                  { kind: "ask" },
                                  (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      (0, s.jsx)(c.A, {
                                        className: z().sparkle,
                                        size: 16,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                      }),
                                      (0, s.jsx)("span", {
                                        className: z().text,
                                        children: (0, s.jsxs)(
                                          "span",
                                          {
                                            className: z().title,
                                            children: [
                                              "Ask AI about ",
                                              (0, s.jsxs)("span", {
                                                className: z().quoted,
                                                children: [
                                                  "\u201C",
                                                  ee.trim(),
                                                  "\u201D"
                                                ]
                                              })
                                            ]
                                          }
                                        )
                                      }),
                                      (0, s.jsx)("span", {
                                        className: z().right,
                                        children: (0, s.jsx)(k.ue, {
                                          keys: "tab",
                                          size: "sm",
                                          pressed: eb
                                        })
                                      })
                                    ]
                                  }),
                                  {
                                    label: `Ask AI about ${ee.trim()}`
                                  }
                                )
                              })
                            },
                            eL ? `answer-${ed.run}` : "ask"
                          )
                        })
                      })
                    }),
                    (0, s.jsx)("div", {
                      id: e1,
                      role: "listbox",
                      "aria-label": "Search results",
                      children: e$.map(
                        ({ group: e3, items: t3 }) => (0, s.jsxs)(
                          "div",
                          {
                            role: "group",
                            "aria-labelledby": `${Z}-group-${e3.id}`,
                            className: z().group,
                            children: [
                              (0, s.jsxs)("div", {
                                id: `${Z}-group-${e3.id}`,
                                className: z().groupHead,
                                children: [
                                  (0, s.jsx)("span", {
                                    children: e3.label
                                  }),
                                  e3.source && (0, s.jsxs)("span", {
                                    className: z().source,
                                    children: [
                                      e3.source.mark,
                                      e3.source.name
                                    ]
                                  })
                                ]
                              }),
                              t3.map((t4) => {
                                var r3;
                                let i2, n2;
                                return r3 = t4.id, n2 = (i2 = ed.sources.indexOf(r3) + 1) > 0 && eU.has(i2) ? i2 : 0, e5(
                                  { kind: "result", result: t4 },
                                  (0, s.jsxs)(s.Fragment, {
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: z().icon,
                                        children: t4.status ? (0, s.jsx)(B, {
                                          status: t4.status
                                        }) : t4.icon ?? e3.icon
                                      }),
                                      (0, s.jsxs)("span", {
                                        className: z().text,
                                        children: [
                                          (0, s.jsx)("span", {
                                            className: z().title,
                                            children: (function(e6, t5) {
                                              let r4 = [
                                                ...new Set(
                                                  t5.flatMap((e7) => [
                                                    e7,
                                                    e7.endsWith("ies") ? `${e7.slice(0, -3)}y` : e7.endsWith(
                                                      "s"
                                                    ) && e7.length > 3 ? e7.slice(0, -1) : e7
                                                  ])
                                                )
                                              ].filter(Boolean).sort(
                                                (e7, t6) => t6.length - e7.length
                                              ).map(
                                                (e7) => e7.replace(
                                                  /[.*+?^${}()|[\]\\]/g,
                                                  "\\$&"
                                                )
                                              );
                                              if (!r4.length) return e6;
                                              let i3 = RegExp(
                                                `(${r4.join("|")})`,
                                                "gi"
                                              );
                                              return e6.split(i3).map(
                                                (e7, t6) => t6 % 2 ? (0, s.jsx)(
                                                  "mark",
                                                  {
                                                    className: z().hl,
                                                    children: e7
                                                  },
                                                  t6
                                                ) : (0, s.jsx)(
                                                  a.Fragment,
                                                  { children: e7 },
                                                  t6
                                                )
                                              );
                                            })(t4.title, eC)
                                          }),
                                          t4.description && (0, s.jsx)("span", {
                                            className: z().description,
                                            children: t4.description
                                          })
                                        ]
                                      }),
                                      (0, s.jsxs)("span", {
                                        className: z().right,
                                        children: [
                                          (0, s.jsx)(o.N, {
                                            initial: false,
                                            children: n2 > 0 && (0, s.jsx)(
                                              l.PY1.span,
                                              {
                                                className: z().badge,
                                                "data-hot": em === n2 ? "" : void 0,
                                                "aria-hidden": "true",
                                                initial: !K && {
                                                  opacity: 0,
                                                  scale: 0.85
                                                },
                                                animate: {
                                                  opacity: 1,
                                                  scale: 1
                                                },
                                                exit: K ? void 0 : {
                                                  opacity: 0,
                                                  transition: D
                                                },
                                                transition: H,
                                                children: n2
                                              },
                                              "badge"
                                            )
                                          }),
                                          (0, s.jsx)("span", {
                                            className: z().meta,
                                            children: t4.status ? v[t4.status] : t4.meta
                                          })
                                        ]
                                      })
                                    ]
                                  }),
                                  {
                                    hot: null !== em && em === n2,
                                    label: [
                                      t4.title,
                                      t4.description,
                                      t4.status ? v[t4.status] : t4.meta,
                                      n2 ? `cited as source ${n2}` : ""
                                    ].filter(Boolean).join(", ")
                                  }
                                );
                              })
                            ]
                          },
                          e3.id
                        )
                      )
                    }),
                    !e$.length && !ea && (0, s.jsxs)("div", {
                      className: z().empty,
                      children: [
                        (0, s.jsxs)("span", {
                          className: z().emptyTitle,
                          children: [
                            "No matches for \u201C",
                            ee.trim(),
                            "\u201D"
                          ]
                        }),
                        (0, s.jsxs)("span", {
                          className: z().emptyHint,
                          children: [
                            "Try another word, or press ",
                            (0, s.jsx)(k.ue, {
                              keys: "tab",
                              size: "sm"
                            }),
                            " to ask AI."
                          ]
                        })
                      ]
                    })
                  ]
                })
              },
              eJ
            )
          })
        }),
        (0, s.jsxs)("div", {
          className: z().footer,
          "data-frame-keep": "",
          children: [
            (0, s.jsx)("div", {
              className: z().footerLeft,
              children: (0, s.jsx)(o.N, {
                initial: false,
                mode: "popLayout",
                children: ef ? (0, s.jsxs)(
                  l.PY1.span,
                  {
                    className: z().notice,
                    initial: !K && { opacity: 0, y: 2 },
                    animate: { opacity: 1, y: 0, transition: H },
                    exit: K ? void 0 : { opacity: 0, transition: D },
                    children: [
                      (0, s.jsx)(u.A, {
                        size: 14,
                        strokeWidth: 2,
                        "aria-hidden": "true"
                      }),
                      ef.text
                    ]
                  },
                  `notice-${ef.id}`
                ) : (0, s.jsxs)(
                  l.PY1.span,
                  {
                    className: z().hints,
                    initial: !K && { opacity: 0 },
                    animate: { opacity: 1, transition: H },
                    exit: K ? void 0 : { opacity: 0, transition: D },
                    children: [
                      (0, s.jsxs)("span", {
                        className: z().hint,
                        "data-optional": "",
                        children: [
                          (0, s.jsx)(k.ue, { keys: "up+down", size: "sm" }),
                          "Navigate"
                        ]
                      }),
                      (0, s.jsxs)("span", {
                        className: z().hint,
                        "data-optional": "",
                        children: [
                          (0, s.jsx)(k.ue, { keys: "enter", size: "sm" }),
                          "Open"
                        ]
                      }),
                      (0, s.jsxs)("span", {
                        className: z().hint,
                        children: [
                          (0, s.jsx)(k.ue, { keys: "tab", size: "sm" }),
                          "Ask AI"
                        ]
                      })
                    ]
                  },
                  "hints"
                )
              })
            }),
            (0, s.jsxs)("span", {
              className: z().model,
              children: [
                T2.mark,
                (0, s.jsx)("span", {
                  className: z().modelName,
                  children: T2.name
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("div", {
          className: z().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ek
        })
      ]
    });
  }
  let q = V;
};

__m(__module,__exports,__require);
}