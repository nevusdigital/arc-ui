function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    FeatureVoting: () => Y,
    default: () => O,
    featureVotingSamples: () => y,
    findSimilarRequests: () => k,
    sortRequests: () => N
  });
  var i = a(95155), s = a(12115), n = a(80642), r = a(25354), o = a(18310), l = a(2125), d = a(35484), c = a(94088), u = a(25494), m = a(92218), h = a(51288), p = a(66558), g = a(7770), v = a(67752);
  let f = (e2) => {
    let t2 = v.c0.find((t3) => t3.id === e2);
    return { name: t2.name, src: t2.src };
  }, _ = v.c0.map((e2) => ({ name: e2.name, src: e2.src })), b = f("nathan-cole"), y = [
    {
      id: "linear-sync",
      title: "Two-way sync with Linear issues",
      status: "planned",
      votes: 412,
      comments: 38,
      createdAt: "2026-10-03",
      trend: 46,
      tag: { label: "Linear", mark: "linear" },
      voters: [
        f("emma-collins"),
        f("daniel-kim"),
        f("olivia-bennett"),
        f("marcus-johnson")
      ]
    },
    {
      id: "okta-sso",
      title: "SAML single sign-on with Okta",
      status: "progress",
      votes: 351,
      comments: 44,
      createdAt: "2026-08-28",
      trend: 31,
      tag: { label: "Okta", mark: "okta" },
      voters: [
        f("diane-foster"),
        f("andre-williams"),
        f("sofia-ramirez"),
        f("tyler-hayes")
      ]
    },
    {
      id: "slack-ship-alerts",
      title: "Post to Slack when a request ships",
      status: "shipped",
      votes: 286,
      comments: 21,
      createdAt: "2026-09-12",
      trend: 9,
      tag: { label: "Slack", mark: "slack" },
      voters: [
        f("hannah-walsh"),
        f("jordan-reyes"),
        f("ava-mitchell"),
        f("ryan-sullivan")
      ]
    },
    {
      id: "notion-embed",
      title: "Embed the public roadmap in Notion",
      status: "planned",
      votes: 158,
      comments: 17,
      createdAt: "2026-10-15",
      trend: 40,
      tag: { label: "Notion", mark: "notion" },
      voters: [
        f("jasmine-brooks"),
        f("chloe-nguyen"),
        f("emma-collins"),
        f("mateo-alvarez")
      ]
    },
    {
      id: "github-discussions",
      title: "Import ideas from GitHub Discussions",
      status: "review",
      votes: 97,
      comments: 12,
      createdAt: "2026-10-22",
      trend: 58,
      tag: { label: "GitHub", mark: "github" },
      voters: [
        f("marcus-johnson"),
        f("daniel-kim"),
        f("mateo-alvarez"),
        f("olivia-bennett")
      ]
    }
  ], w = /* @__PURE__ */ new Set([
    "a",
    "an",
    "the",
    "to",
    "for",
    "with",
    "in",
    "on",
    "of",
    "and",
    "or",
    "when",
    "is",
    "be",
    "from",
    "into",
    "my",
    "our",
    "your",
    "it",
    "as",
    "at",
    "by",
    "add",
    "support",
    "please",
    "feature",
    "ability",
    "allow",
    "can",
    "i",
    "we",
    "new",
    "option",
    "way"
  ]), x = {
    sso: ["saml", "okta", "single", "sign"],
    login: ["sso", "saml", "sign"],
    saml: ["sso"],
    auth: ["sso", "saml", "okta"],
    alert: ["notif", "notify", "post", "slack"],
    notif: ["alert", "slack"],
    notify: ["alert"],
    message: ["slack"],
    sync: ["import", "integration"],
    import: ["sync"],
    integration: ["sync"],
    jira: ["linear", "issue"],
    ticket: ["issue"],
    embed: ["iframe", "widget"],
    widget: ["embed"],
    idea: ["request"]
  }, j = (e2) => e2.toLowerCase().split(/[^a-z0-9]+/).filter((e3) => e3.length > 1 && !w.has(e3)).map(
    (e3) => e3.length > 4 && e3.replace(/(ications|ication|ings|ing|ed|es|s)$/, "") || e3
  );
  function k(e2, t2, a2 = 3) {
    let i2 = j(e2);
    return !i2.length || e2.trim().length < 3 ? [] : t2.map((e3) => {
      let t3 = j(`${e3.title} ${e3.tag?.label ?? ""}`), a3 = i2.filter(
        (e4) => t3.some(
          (t4) => !!(e4 === t4 || e4.length >= 3 && t4.startsWith(e4) || t4.length >= 3 && e4.startsWith(t4)) || (x[e4] ?? []).some((e5) => t4.startsWith(e5))
        )
      ).length;
      return { request: e3, score: a3 / i2.length, hits: a3 };
    }).filter((e3) => e3.hits > 0 && e3.score >= 0.34).sort(
      (e3, t3) => t3.score - e3.score || t3.request.votes - e3.request.votes
    ).slice(0, a2).map((e3) => e3.request);
  }
  function N(e2, t2) {
    let a2 = [...e2];
    return "top" === t2 ? a2.sort((e3, t3) => t3.votes - e3.votes) : "new" === t2 ? a2.sort((e3, t3) => t3.createdAt.localeCompare(e3.createdAt)) : a2.sort(
      (e3, t3) => (t3.trend ?? 0) - (e3.trend ?? 0) || t3.votes - e3.votes
    ), a2.map((e3) => e3.id);
  }
  let T = {
    linear: {
      title: "Linear",
      paths: [
        {
          fill: "#5E6AD2",
          d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
        }
      ]
    },
    slack: {
      title: "Slack",
      paths: [
        {
          fill: "#E01E5A",
          d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
        },
        {
          fill: "#36C5F0",
          d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
        },
        {
          fill: "#2EB67D",
          d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
        },
        {
          fill: "#ECB22E",
          d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
        }
      ]
    },
    github: {
      title: "GitHub",
      paths: [
        {
          d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        }
      ]
    },
    notion: {
      title: "Notion",
      paths: [
        {
          d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
        }
      ]
    },
    okta: {
      title: "Okta",
      paths: [
        {
          d: "M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.611 0 12 0zm0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6 6 2.675 6 6-2.675 6-6 6z"
        }
      ]
    },
    figma: {
      title: "Figma",
      paths: [
        {
          d: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"
        }
      ]
    }
  };
  function A({ id: e2, ...t2 }) {
    let a2 = T[e2];
    return (0, i.jsx)("svg", {
      viewBox: "0 0 24 24",
      width: 14,
      height: 14,
      fill: "currentColor",
      "aria-hidden": "true",
      focusable: "false",
      ...t2,
      children: a2.paths.map(
        (e3) => (0, i.jsx)("path", { d: e3.d, fill: e3.fill }, e3.d.slice(0, 24))
      )
    });
  }
  var z = a(35226), S = a.n(z);
  let C = (...e2) => e2.filter(Boolean).join(" "), M = (e2, t2) => `${e2.toLocaleString("en-US")} ${t2}${1 === e2 ? "" : "s"}`, L = "Vote on what your team needs most.", V = [
    { value: "top", label: "Top" },
    { value: "new", label: "New" },
    { value: "trending", label: "Trending" }
  ], $ = {
    review: "Under review",
    planned: "Planned",
    progress: "In progress",
    shipped: "Shipped"
  }, E = { type: "spring", visualDuration: 0.24, bounce: 0 }, P = { duration: g.T.duration.fast, ease: [...g.T.ease.standard] }, R = { height: E, opacity: P }, I = { duration: 0 }, B = {
    enter: (e2) => ({ y: `${70 * e2}%`, opacity: 0 }),
    center: { y: "0%", opacity: 1 },
    exit: (e2) => ({ y: `${-70 * e2}%`, opacity: 0 })
  };
  function D({ value: e2, reduced: t2 }) {
    let [a2, o2] = (0, s.useState)({ value: e2, dir: 1 });
    a2.value !== e2 && o2({ value: e2, dir: e2 > a2.value ? 1 : -1 });
    let l2 = a2.value === e2 ? a2.dir : e2 > a2.value ? 1 : -1, d2 = e2.toLocaleString("en-US").split("");
    return (0, i.jsx)("span", {
      className: S().roll,
      "aria-hidden": "true",
      children: d2.map(
        (e3, a3) => (0, i.jsx)(
          "span",
          {
            className: S().rollSlot,
            children: (0, i.jsx)(n.N, {
              initial: false,
              custom: l2,
              children: (0, i.jsx)(
                r.PY1.span,
                {
                  custom: l2,
                  variants: B,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: t2 ? I : { duration: 0.2, ease: [...g.T.ease.standard] },
                  children: e3
                },
                e3
              )
            })
          },
          d2.length - a3
        )
      )
    });
  }
  function q({ status: e2 }) {
    return (0, i.jsxs)("svg", {
      className: S().glyph,
      viewBox: "0 0 14 14",
      width: 14,
      height: 14,
      "aria-hidden": "true",
      focusable: "false",
      children: [
        "review" === e2 && (0, i.jsx)("circle", {
          cx: "7",
          cy: "7",
          r: "5.25",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeDasharray: "2.2 1.9"
        }),
        "planned" === e2 && (0, i.jsx)("circle", {
          cx: "7",
          cy: "7",
          r: "5.25",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5"
        }),
        "progress" === e2 && (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("circle", {
              cx: "7",
              cy: "7",
              r: "5.25",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5"
            }),
            (0, i.jsx)("path", {
              d: "M7 3.5a3.5 3.5 0 0 1 0 7Z",
              fill: "currentColor"
            })
          ]
        }),
        "shipped" === e2 && (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("circle", {
              cx: "7",
              cy: "7",
              r: "6",
              fill: "currentColor"
            }),
            (0, i.jsx)("path", {
              d: "M4.4 7.1 6.2 8.9 9.6 5.4",
              fill: "none",
              stroke: "var(--surface)",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          ]
        })
      ]
    });
  }
  function F({ status: e2 }) {
    return (0, i.jsxs)("span", {
      className: S().chip,
      "data-status": e2,
      children: [(0, i.jsx)(q, { status: e2 }), $[e2]]
    });
  }
  function Y({
    requests: e2,
    title: t2 = "Feature requests",
    description: a2 = "Vote on what we build next. We read every request.",
    defaultSort: v2 = "top",
    onSortChange: f2,
    onVote: w2,
    onSubmit: x2,
    findSimilar: j2 = k,
    onOpenRequest: T2,
    currentUser: z2 = b,
    live: $2,
    loading: B2 = false,
    disabled: O2 = false,
    className: W
  }) {
    let H = !!(0, o.I)(), K = (0, s.useId)(), G = (0, s.useRef)(null), Q = (0, s.useRef)(null), U = (0, s.useRef)(null), [Z, J] = (0, s.useState)(e2), [X, ee] = (0, s.useState)(() => e2 ?? y), [et, ea] = (0, s.useState)(v2), [ei, es] = (0, s.useState)(() => N(e2 ?? y, v2));
    if (e2 !== Z) {
      let t3 = e2 ?? y;
      J(e2), ee(t3), es(N(t3, et));
    }
    let [en, er] = (0, s.useState)(false), [eo, el] = (0, s.useState)({ title: "", details: "" }), [ed, ec] = (0, s.useState)("idle"), [eu, em] = (0, s.useState)(null), [eh, ep] = (0, s.useState)(null), [eg, ev] = (0, s.useState)(L), ef = (0, s.useRef)(/* @__PURE__ */ new Map()), e_ = (0, s.useRef)(null), eb = (0, s.useRef)(void 0), ey = !w2, ew = (0, s.useMemo)(() => new Map(X.map((e3) => [e3.id, e3])), [X]), ex = (0, s.useMemo)(
      () => [
        ...ei.map((e3) => ew.get(e3)).filter((e3) => !!e3),
        ...X.filter((e3) => !ei.includes(e3.id))
      ],
      [ei, ew, X]
    ), ej = (0, s.useMemo)(() => X.reduce((e3, t3) => e3 + t3.votes, 0), [X]), ek = (0, s.useMemo)(
      () => en ? j2(eo.title, X).slice(0, 3) : [],
      [en, eo.title, X, j2]
    ), eN = ($2 ?? void 0 === e2) && !H && !B2;
    (0, s.useEffect)(() => {
      let e3, t3 = G.current;
      if (!eN || !t3) return;
      let a3 = false, i2 = "u" < typeof IntersectionObserver ? null : new IntersectionObserver(([e4]) => {
        a3 = e4.isIntersecting;
      });
      i2?.observe(t3);
      let s2 = () => {
        e3 = setTimeout(
          () => {
            a3 && !document.hidden && ee((e4) => {
              let t4 = e4.filter((e5) => "shipped" !== e5.status);
              if (!t4.length) return e4;
              let a4 = t4.map((e5) => (e5.trend ?? 1) + 4), i3 = Math.random() * a4.reduce((e5, t5) => e5 + t5, 0), s3 = t4.find((e5, t5) => (i3 -= a4[t5]) <= 0) ?? t4[0], n2 = new Set((s3.voters ?? []).map((e5) => e5.name)), r2 = _.filter((e5) => !n2.has(e5.name) && e5.name !== z2.name), o2 = r2[Math.floor(Math.random() * r2.length)];
              return e4.map(
                (e5) => e5.id !== s3.id ? e5 : {
                  ...e5,
                  votes: e5.votes + 1,
                  trend: (e5.trend ?? 0) + 1,
                  voters: o2 ? (e5.voted && e5.voters?.[0]?.name === z2.name ? [e5.voters[0], o2, ...e5.voters.slice(1)] : [o2, ...e5.voters ?? []]).slice(0, 6) : e5.voters
                }
              );
            }), s2();
          },
          2400 + 1800 * Math.random()
        );
      };
      return s2(), () => {
        clearTimeout(e3), i2?.disconnect();
      };
    }, [eN, z2.name]), (0, s.useEffect)(() => {
      let e3 = ef.current;
      return () => {
        e3.forEach((e4) => e4.abort()), e_.current?.abort(), clearTimeout(eb.current);
      };
    }, []);
    let eT = (e3, t3) => ee(
      (a3) => a3.map((a4) => {
        if (a4.id !== e3 || !!a4.voted === t3) return a4;
        let i2 = (a4.voters ?? []).filter((e4) => e4.name !== z2.name);
        return {
          ...a4,
          voted: t3,
          votes: Math.max(0, a4.votes + (t3 ? 1 : -1)),
          trend: Math.max(0, (a4.trend ?? 0) + (t3 ? 1 : -1)),
          voters: t3 ? [z2, ...i2] : i2
        };
      })
    ), eA = (e3, t3) => {
      let a3 = ew.get(e3);
      if (!a3 || O2) return;
      let i2 = t3 ?? !a3.voted;
      if (!!a3.voted === i2) return;
      eT(e3, i2), ev(
        i2 ? `Voted for ${a3.title}.${ey ? " Simulated, nothing was sent." : ""}` : `Removed your vote from ${a3.title}.`
      ), ef.current.get(e3)?.abort();
      let s2 = new AbortController();
      ef.current.set(e3, s2), Promise.resolve().then(() => w2?.(e3, i2, s2.signal)).catch(() => {
        s2.signal.aborted || (eT(e3, !i2), ev("Your vote was not saved. Try again."));
      });
    }, ez = () => {
      O2 || (er(true), requestAnimationFrame(() => Q.current?.focus()));
    }, eS = (e3 = false) => {
      e_.current?.abort(), er(false), ec("idle"), el({ title: "", details: "" }), e3 && U.current?.focus();
    }, eC = (e3) => ep((t3) => ({ id: e3, n: (t3?.n ?? 0) + 1 })), eM = { title: eo.title.trim(), details: eo.details.trim() }, eL = eM.title.length >= 4 && "sending" !== ed, eV = async (e3) => {
      if (e3?.preventDefault(), !eL) return;
      e_.current?.abort();
      let t3 = new AbortController();
      e_.current = t3, ec("sending");
      try {
        var a3;
        let e4 = x2 ? await x2(eM, t3.signal) : await (a3 = t3.signal, new Promise((e5, t4) => {
          let i3 = setTimeout(e5, 700);
          a3.addEventListener(
            "abort",
            () => {
              clearTimeout(i3), t4(new DOMException("Aborted", "AbortError"));
            },
            { once: true }
          );
        }));
        if (t3.signal.aborted) return;
        let i2 = e4 ?? {
          id: `request-${Date.now().toString(36)}`,
          title: eM.title,
          status: "review",
          votes: 1,
          comments: 0,
          createdAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
          trend: 1,
          voters: [z2],
          voted: true
        };
        ee((e5) => [i2, ...e5.filter((e6) => e6.id !== i2.id)]), es((e5) => [i2.id, ...e5.filter((e6) => e6 !== i2.id)]), er(false), ec("idle"), el({ title: "", details: "" }), eC(i2.id), ev(
          `Posted ${i2.title}.${x2 ? "" : " Simulated, nothing was sent."}`
        );
      } catch {
        t3.signal.aborted || ec("error");
      }
    }, e$ = () => {
      clearTimeout(eb.current), eb.current = setTimeout(() => em(null), 90);
    }, eE = `${K}-status`;
    return (0, i.jsx)("div", {
      ref: G,
      className: C(S().root, W),
      children: (0, i.jsxs)("section", {
        className: S().card,
        "aria-labelledby": `${K}-title`,
        "aria-busy": B2 || void 0,
        children: [
          (0, i.jsxs)("header", {
            className: S().head,
            children: [
              (0, i.jsxs)("div", {
                className: S().headText,
                children: [
                  (0, i.jsx)("h2", {
                    id: `${K}-title`,
                    className: S().title,
                    children: t2
                  }),
                  (0, i.jsx)("p", { className: S().description, children: a2 })
                ]
              }),
              !O2 && (0, i.jsxs)(h.$, {
                ref: U,
                size: "sm",
                onClick: ez,
                "aria-expanded": en,
                "aria-controls": `${K}-composer`,
                className: S().suggest,
                children: [
                  (0, i.jsx)(l.A, { size: 16, "aria-hidden": "true" }),
                  (0, i.jsxs)("span", {
                    children: [
                      "Suggest",
                      (0, i.jsx)("span", {
                        className: S().wide,
                        children: " a feature"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, i.jsx)(n.N, {
            initial: false,
            children: en && (0, i.jsx)(
              r.PY1.div,
              {
                id: `${K}-composer`,
                className: S().fold,
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: H ? I : R,
                children: (0, i.jsxs)("form", {
                  className: S().composer,
                  onSubmit: eV,
                  onKeyDown: (e3) => {
                    "Escape" === e3.key && (e3.preventDefault(), eS(true)), "Enter" === e3.key && (e3.metaKey || e3.ctrlKey) && (e3.preventDefault(), eV());
                  },
                  "aria-label": "Suggest a feature",
                  children: [
                    (0, i.jsx)("input", {
                      ref: Q,
                      className: S().titleInput,
                      value: eo.title,
                      onChange: (e3) => {
                        el((t3) => ({ ...t3, title: e3.target.value })), "error" === ed && ec("idle");
                      },
                      onKeyDown: (e3) => {
                        "Enter" === e3.key && (e3.preventDefault(), eV());
                      },
                      placeholder: "Short title, like Export votes to CSV",
                      "aria-label": "Request title",
                      "aria-describedby": ek.length ? `${K}-similar` : void 0,
                      maxLength: 80,
                      autoComplete: "off",
                      disabled: "sending" === ed
                    }),
                    (0, i.jsx)(n.N, {
                      initial: false,
                      children: ek.length > 0 && (0, i.jsx)(
                        r.PY1.div,
                        {
                          className: S().fold,
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: H ? I : R,
                          children: (0, i.jsxs)("div", {
                            className: S().similar,
                            children: [
                              (0, i.jsx)("p", {
                                id: `${K}-similar`,
                                className: S().similarHead,
                                children: "Similar requests already exist. Vote instead?"
                              }),
                              (0, i.jsx)("ul", {
                                className: S().similarList,
                                children: (0, i.jsx)(n.N, {
                                  initial: false,
                                  children: ek.map(
                                    (e3) => (0, i.jsx)(
                                      r.PY1.li,
                                      {
                                        className: S().fold,
                                        initial: { height: 0, opacity: 0 },
                                        animate: {
                                          height: "auto",
                                          opacity: 1
                                        },
                                        exit: { height: 0, opacity: 0 },
                                        transition: H ? I : R,
                                        children: (0, i.jsxs)("div", {
                                          className: S().similarRow,
                                          children: [
                                            (0, i.jsx)("span", {
                                              className: S().similarGlyph,
                                              "data-status": e3.status ?? "review",
                                              children: (0, i.jsx)(q, {
                                                status: e3.status ?? "review"
                                              })
                                            }),
                                            (0, i.jsx)("span", {
                                              className: S().similarTitle,
                                              children: e3.title
                                            }),
                                            (0, i.jsx)("span", {
                                              className: S().similarVotes,
                                              children: M(e3.votes, "vote")
                                            }),
                                            (0, i.jsx)("button", {
                                              type: "button",
                                              className: S().similarVote,
                                              "data-voted": e3.voted || void 0,
                                              onClick: () => {
                                                e3.voted || eA(e3.id, true), eS(), eC(e3.id), ev(
                                                  e3.voted ? `You already voted for ${e3.title}.` : `Voted for ${e3.title} instead of posting a duplicate.${ey ? " Simulated, nothing was sent." : ""}`
                                                );
                                              },
                                              "aria-label": `${e3.voted ? "Go to" : "Vote for"} ${e3.title}`,
                                              children: e3.voted ? "Voted" : "Vote"
                                            })
                                          ]
                                        })
                                      },
                                      e3.id
                                    )
                                  )
                                })
                              })
                            ]
                          })
                        },
                        "similar"
                      )
                    }),
                    (0, i.jsx)("textarea", {
                      className: S().detailsInput,
                      value: eo.details,
                      onChange: (e3) => el((t3) => ({ ...t3, details: e3.target.value })),
                      placeholder: "What would it help your team do? (optional)",
                      "aria-label": "Details, optional",
                      rows: 2,
                      maxLength: 600,
                      disabled: "sending" === ed
                    }),
                    (0, i.jsxs)("div", {
                      className: S().composerFoot,
                      children: [
                        (0, i.jsx)("span", {
                          className: S().hint,
                          "data-error": "error" === ed || void 0,
                          role: "error" === ed ? "alert" : void 0,
                          children: "error" === ed ? (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)(d.A, {
                                size: 14,
                                "aria-hidden": "true"
                              }),
                              "Your request was not posted. Try again."
                            ]
                          }) : "Public, with your name and vote."
                        }),
                        (0, i.jsx)(h.$, {
                          type: "button",
                          size: "sm",
                          variant: "ghost",
                          onClick: () => eS(true),
                          children: "Cancel"
                        }),
                        (0, i.jsx)(h.$, {
                          type: "submit",
                          size: "sm",
                          disabled: !eL,
                          loading: "sending" === ed,
                          children: "Post request"
                        })
                      ]
                    })
                  ]
                })
              },
              "composer"
            )
          }),
          (0, i.jsxs)("div", {
            className: S().toolbar,
            children: [
              (0, i.jsx)(p.A, {
                options: V,
                value: et,
                onValueChange: (e3) => {
                  ea(e3), es(N(X, e3)), em(null), f2?.(e3);
                },
                label: "Sort requests"
              }),
              (0, i.jsxs)("span", {
                className: S().tally,
                children: [
                  (0, i.jsx)(D, { value: ej, reduced: H }),
                  " votes",
                  (0, i.jsxs)("span", {
                    className: S().srOnly,
                    children: [M(ej, "vote"), " on ", M(X.length, "request")]
                  })
                ]
              })
            ]
          }),
          B2 ? (0, i.jsx)("ul", {
            className: S().list,
            "aria-label": "Loading requests",
            children: [0, 1, 2, 3].map(
              (e3) => (0, i.jsx)(
                "li",
                {
                  className: S().row,
                  children: (0, i.jsxs)("div", {
                    className: S().rowInner,
                    children: [
                      (0, i.jsx)("span", { className: S().skeletonVote }),
                      (0, i.jsxs)("span", {
                        className: S().body,
                        children: [
                          (0, i.jsx)("span", {
                            className: S().skeletonLine,
                            style: { width: `${[62, 48, 56, 40][e3]}%` }
                          }),
                          (0, i.jsx)("span", {
                            className: S().skeletonLine,
                            "data-short": true
                          })
                        ]
                      })
                    ]
                  })
                },
                e3
              )
            )
          }) : 0 === ex.length ? (0, i.jsxs)("div", {
            className: S().empty,
            children: [
              (0, i.jsx)("p", {
                className: S().emptyTitle,
                children: "No requests yet"
              }),
              (0, i.jsx)("p", {
                className: S().emptyText,
                children: "Be the first to tell the team what to build."
              }),
              !O2 && !en && (0, i.jsxs)(h.$, {
                size: "sm",
                variant: "secondary",
                onClick: ez,
                children: [
                  (0, i.jsx)(l.A, { size: 16, "aria-hidden": "true" }),
                  "Suggest a feature"
                ]
              })
            ]
          }) : (0, i.jsx)("ul", {
            className: S().list,
            "aria-label": `Requests, sorted by ${V.find((e3) => e3.value === et)?.label.toLowerCase()}`,
            children: (0, i.jsx)(n.N, {
              initial: false,
              children: ex.map((e3) => {
                let t3, a3, s2, o2, l2 = (t3 = (e3.voters ?? []).slice(0, 2).map(
                  (t4) => e3.voted && t4.name === z2.name ? "You" : t4.name
                ), a3 = Math.max(0, e3.votes - t3.length), t3.length ? { names: t3, rest: a3 } : { names: [], rest: e3.votes }), d2 = eu === e3.id && (e3.voters?.length ?? 0) > 0;
                return (0, i.jsxs)(
                  r.PY1.li,
                  {
                    layout: "position",
                    className: S().row,
                    "data-peek": d2 || void 0,
                    initial: {
                      height: 0,
                      opacity: 0,
                      overflow: "hidden"
                    },
                    animate: {
                      height: "auto",
                      opacity: 1,
                      transitionEnd: { overflow: "visible" }
                    },
                    transition: H ? I : { layout: E, height: E, opacity: P },
                    children: [
                      eh?.id === e3.id && (0, i.jsx)(
                        r.PY1.span,
                        {
                          className: S().flash,
                          "aria-hidden": "true",
                          initial: { opacity: 0 },
                          animate: { opacity: [0, 1, 1, 0] },
                          transition: {
                            duration: H ? 0.9 : 1.5,
                            times: [0, 0.12, 0.5, 1],
                            ease: "easeOut"
                          }
                        },
                        eh.n
                      ),
                      (0, i.jsxs)("div", {
                        className: S().rowInner,
                        children: [
                          (0, i.jsxs)("div", {
                            className: S().voteCell,
                            onPointerEnter: (s2 = e3.id, (e4) => {
                              "touch" !== e4.pointerType && (clearTimeout(eb.current), eu ? em(s2) : eb.current = setTimeout(
                                () => em(s2),
                                320
                              ));
                            }),
                            onPointerLeave: e$,
                            children: [
                              (0, i.jsxs)(r.PY1.button, {
                                type: "button",
                                className: S().vote,
                                "aria-pressed": !!e3.voted,
                                "aria-label": `${e3.voted ? "Remove vote from" : "Vote for"} ${e3.title}, ${M(e3.votes, "vote")}`,
                                onClick: () => eA(e3.id),
                                onFocus: (o2 = e3.id, (e4) => {
                                  e4.currentTarget.matches(
                                    ":focus-visible"
                                  ) && (clearTimeout(eb.current), em(o2));
                                }),
                                onBlur: () => em((t4) => t4 === e3.id ? null : t4),
                                disabled: O2,
                                whileTap: H || O2 ? void 0 : { scale: 0.94 },
                                transition: g.T.spring.snappy,
                                children: [
                                  (0, i.jsx)("span", {
                                    className: S().voteIcon,
                                    children: (0, i.jsx)(c.A, {
                                      size: 16,
                                      strokeWidth: 2.25,
                                      "aria-hidden": "true"
                                    })
                                  }),
                                  (0, i.jsx)(D, {
                                    value: e3.votes,
                                    reduced: H
                                  })
                                ]
                              }),
                              (0, i.jsx)(n.N, {
                                children: d2 && (0, i.jsxs)(
                                  r.PY1.div,
                                  {
                                    className: S().peek,
                                    "aria-hidden": "true",
                                    initial: { opacity: 0, y: 4 },
                                    animate: { opacity: 1, y: 0 },
                                    exit: {
                                      opacity: 0,
                                      y: 2,
                                      transition: {
                                        duration: 0.1 * !H
                                      }
                                    },
                                    transition: H ? I : P,
                                    children: [
                                      (0, i.jsx)("span", {
                                        className: S().stack,
                                        children: (e3.voters ?? []).slice(0, 4).map(
                                          (e4) => (0, i.jsx)(
                                            m.e,
                                            {
                                              name: e4.name,
                                              src: e4.src,
                                              size: "sm",
                                              className: S().face
                                            },
                                            e4.name
                                          )
                                        )
                                      }),
                                      (0, i.jsxs)("span", {
                                        className: S().peekText,
                                        children: [
                                          l2.names.map(
                                            (e4, t4) => (0, i.jsxs)(
                                              "span",
                                              {
                                                children: [
                                                  t4 > 0 && (l2.rest > 0 ? ", " : " and "),
                                                  (0, i.jsx)("span", {
                                                    className: S().peekName,
                                                    children: e4
                                                  })
                                                ]
                                              },
                                              e4
                                            )
                                          ),
                                          l2.rest > 0 && (0, i.jsxs)(i.Fragment, {
                                            children: [
                                              " and ",
                                              M(l2.rest, "other")
                                            ]
                                          })
                                        ]
                                      })
                                    ]
                                  },
                                  "peek"
                                )
                              })
                            ]
                          }),
                          (0, i.jsxs)("div", {
                            className: S().body,
                            children: [
                              T2 ? (0, i.jsx)("button", {
                                type: "button",
                                className: C(
                                  S().rowTitle,
                                  S().titleButton
                                ),
                                onClick: () => T2(e3.id),
                                children: e3.title
                              }) : (0, i.jsx)("p", {
                                className: S().rowTitle,
                                children: e3.title
                              }),
                              (0, i.jsxs)("div", {
                                className: S().meta,
                                children: [
                                  e3.status && (0, i.jsx)(F, { status: e3.status }),
                                  e3.tag && (0, i.jsxs)("span", {
                                    className: C(S().metaItem, S().tag),
                                    children: [
                                      e3.tag.mark && (0, i.jsx)(A, {
                                        id: e3.tag.mark,
                                        className: S().mark
                                      }),
                                      e3.tag.label
                                    ]
                                  }),
                                  (0, i.jsxs)("span", {
                                    className: S().metaItem,
                                    "aria-label": M(
                                      e3.comments,
                                      "comment"
                                    ),
                                    children: [
                                      (0, i.jsx)(u.A, {
                                        size: 14,
                                        "aria-hidden": "true"
                                      }),
                                      (0, i.jsx)("span", {
                                        className: S().num,
                                        children: e3.comments
                                      })
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  },
                  e3.id
                );
              })
            })
          }),
          (0, i.jsxs)("footer", {
            className: S().foot,
            children: [
              (0, i.jsx)("span", {
                className: S().message,
                "aria-hidden": "true",
                children: (0, i.jsx)(n.N, {
                  initial: false,
                  children: (0, i.jsx)(
                    r.PY1.span,
                    {
                      className: S().messageText,
                      initial: { opacity: 0, y: 2 },
                      animate: {
                        opacity: 1,
                        y: 0,
                        transition: H ? I : { ...P, delay: 0.06 }
                      },
                      exit: { opacity: 0, transition: { duration: 0.1 * !H } },
                      children: eg
                    },
                    eg
                  )
                })
              }),
              (0, i.jsx)("span", {
                id: eE,
                className: S().srOnly,
                role: "status",
                "aria-live": "polite",
                children: eg === L ? "" : eg
              })
            ]
          })
        ]
      })
    });
  }
  let O = Y;
}

__m(__module,__exports,__require);
}