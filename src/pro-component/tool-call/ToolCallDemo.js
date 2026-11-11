function(__module,__exports,__require){
"use strict";
const __m = (e, t, a) => {
  "use strict";
  a.r(t), a.d(t, { ToolCallDemo: () => U, default: () => ee });
  var i = a(95155), s = a(12115), l = a(18310), n = a(80642), r = a(25354), o = a(92298), c = a(51288), d = a(92171), u = a(35484), p = a(83251), h = a(79762), m = a(12363), y = a(73474), _ = a(52898), g = a(7770);
  let x = {
    issues: {
      id: "github-issues",
      tool: "github",
      title: "Searched issues in arc-ui/web",
      titles: {
        running: "Searching issues in arc-ui/web",
        error: "Could not search issues in arc-ui/web"
      },
      status: "success",
      input: {
        repo: "arc-ui/web",
        query: "is:open label:release-blocker milestone:2.8",
        sort: "updated"
      },
      output: {
        type: "list",
        items: [
          {
            lead: "#1284",
            title: "Checkout button stays disabled after a coupon is removed",
            tag: "checkout"
          },
          {
            lead: "#1291",
            title: "Webhook retry posts a second charge after a 504",
            tag: "billing"
          },
          {
            lead: "#1302",
            title: "Session is lost after SSO sign in on iPad",
            tag: "auth"
          },
          {
            lead: "#1306",
            title: "Release notes page returns 404 on docs preview",
            tag: "docs"
          }
        ]
      },
      durationMs: 1180
    },
    project: {
      id: "linear-project",
      tool: "linear",
      title: "Read the Web 2.8 release project",
      titles: {
        running: "Reading the Web 2.8 release project",
        error: "Could not read the Web 2.8 release project"
      },
      status: "success",
      input: {
        project: "Web 2.8 release",
        team: "WEB",
        include: ["issues", "milestones"]
      },
      output: {
        type: "json",
        value: {
          project: "Web 2.8 release",
          lead: "Maya Chen",
          target: "2026-10-23",
          progress: 0.86,
          health: "at risk",
          milestones: [
            { name: "Code freeze", date: "2026-10-20", done: true },
            { name: "Release candidate", date: "2026-10-22", done: false }
          ],
          blocked: [
            {
              id: "WEB-412",
              title: "Ship the coupon fix to checkout",
              assignee: "Daniel Okafor",
              blockedBy: "arc-ui/web#1284"
            },
            {
              id: "WEB-418",
              title: "Run migration 0047 on production",
              assignee: "Priya Raman",
              blockedBy: null
            }
          ],
          openIssues: 7,
          doneIssues: 43
        }
      },
      summary: "2 blocked",
      durationMs: 760
    },
    migrations: {
      id: "postgres-migrations",
      tool: "postgres",
      title: "Queried pending migrations",
      titles: {
        running: "Querying pending migrations",
        error: "Could not query pending migrations"
      },
      status: "success",
      input: {
        database: "app_production",
        sql: "select version, name, applied_at from schema_migrations where applied_at is null order by version"
      },
      output: {
        type: "table",
        columns: ["version", "name", "applied_at"],
        rows: [
          ["0047", "add_coupon_redemptions_index", null],
          ["0048", "backfill_invoice_currency", null]
        ]
      },
      message: "Connection to app_production timed out after 5s",
      durationMs: 420
    },
    post: {
      id: "slack-post",
      tool: "slack",
      title: "Posted to #release",
      titles: {
        approval: "Post a summary to #release",
        denied: "Post a summary to #release",
        running: "Posting to #release",
        error: "Could not post to #release"
      },
      status: "success",
      input: {
        channel: "#release",
        text: "2.8 is blocked by #1284 (coupon checkout) and migration 0047, still pending on production. The Oct 23 target holds if both land by Wednesday."
      },
      output: {
        type: "text",
        text: "Sent to #release at 10:42 as Arc agent."
      },
      summary: "1 message",
      message: "Sends as Arc agent to 48 people in #release",
      durationMs: 610
    }
  }, f = [x.issues, x.project, x.migrations, x.post];
  var j = a(50626);
  let v = { "aria-hidden": true, focusable: false }, b = {
    github: {
      name: "GitHub",
      Mark: function(e2) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          ...v,
          ...e2,
          children: (0, i.jsx)("path", {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          })
        });
      }
    },
    linear: {
      name: "Linear",
      Mark: function(e2) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "#5E6AD2",
          ...v,
          ...e2,
          children: (0, i.jsx)("path", {
            d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
          })
        });
      }
    },
    postgres: {
      name: "PostgreSQL",
      Mark: function(e2) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "#4169E1",
          ...v,
          ...e2,
          children: (0, i.jsx)("path", {
            d: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"
          })
        });
      }
    },
    slack: {
      name: "Slack",
      Mark: function(e2) {
        return (0, i.jsxs)("svg", {
          viewBox: "0 0 24 24",
          ...v,
          ...e2,
          children: [
            (0, i.jsx)("path", {
              fill: "#E01E5A",
              d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
            }),
            (0, i.jsx)("path", {
              fill: "#36C5F0",
              d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
            }),
            (0, i.jsx)("path", {
              fill: "#2EB67D",
              d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
            }),
            (0, i.jsx)("path", {
              fill: "#ECB22E",
              d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
            })
          ]
        });
      }
    },
    gmail: {
      name: "Gmail",
      Mark: function(e2) {
        return (0, i.jsxs)("svg", {
          viewBox: "52 42 88 66",
          ...v,
          ...e2,
          children: [
            (0, i.jsx)("path", {
              fill: "#4285F4",
              d: "M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
            }),
            (0, i.jsx)("path", {
              fill: "#34A853",
              d: "M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
            }),
            (0, i.jsx)("path", {
              fill: "#FBBC04",
              d: "M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
            }),
            (0, i.jsx)("path", {
              fill: "#EA4335",
              d: "M72 74V48l24 18 24-18v26L96 92"
            }),
            (0, i.jsx)("path", {
              fill: "#C5221F",
              d: "M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
            })
          ]
        });
      }
    },
    web: {
      name: "Web search",
      Mark: function(e2) {
        return (0, i.jsx)(j.A, { strokeWidth: 1.75, ...v, ...e2 });
      }
    }
  }, k = (e2) => "string" == typeof e2 ? e2 : `custom:${e2.name}`, w = (e2) => "string" == typeof e2 ? b[e2]?.name ?? e2 : e2.name;
  function N({ tool: e2, size: t2 = 16, className: a2 }) {
    if ("string" != typeof e2)
      return (0, i.jsx)("span", {
        className: a2,
        style: { width: t2, height: t2 },
        "aria-hidden": "true",
        children: e2.mark
      });
    let s2 = b[e2];
    if (!s2)
      return (0, i.jsx)("span", {
        className: a2,
        style: { width: t2, height: t2 },
        "aria-hidden": "true"
      });
    let { Mark: l2 } = s2;
    return (0, i.jsx)("span", {
      className: a2,
      style: { width: t2, height: t2 },
      "aria-hidden": "true",
      children: (0, i.jsx)(l2, { width: t2, height: t2 })
    });
  }
  var M = a(9070), T = a.n(M);
  let A = (e2, t2) => `${e2} ${t2}${1 === e2 ? "" : "s"}`;
  function C(e2) {
    if (e2) {
      if ("list" === e2.type) return A(e2.items.length, "result");
      if ("table" === e2.type) return A(e2.rows.length, "row");
      if ("json" === e2.type) {
        let t2 = e2.value;
        if (Array.isArray(t2)) return A(t2.length, "item");
        if (t2 && "object" == typeof t2) return A(Object.keys(t2).length, "field");
      }
    }
  }
  let S = (e2) => null === e2 ? "null" : String(e2);
  function z({ input: e2 }) {
    return (0, i.jsx)("dl", {
      className: T().kv,
      children: Object.entries(e2).map(
        ([e3, t2]) => (0, i.jsxs)(
          "div",
          {
            className: T().kvRow,
            children: [
              (0, i.jsx)("dt", { className: T().kvKey, children: e3 }),
              (0, i.jsx)("dd", {
                className: [T().kvValue, null === t2 ? T().literal : ""].filter(Boolean).join(" "),
                children: "string" == typeof t2 ? t2 : Array.isArray(t2) && t2.every((e4) => "object" != typeof e4 || null === e4) ? t2.map((e4) => String(e4)).join(", ") : JSON.stringify(t2)
              })
            ]
          },
          e3
        )
      )
    });
  }
  let $ = /("(?:[^"\\]|\\.)*")(\s*:)?|(-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)|\b(true|false|null)\b/g;
  function O({
    total: e2,
    visible: t2,
    row: a2,
    head: n2 = 0,
    unit: o2,
    children: c2
  }) {
    let [d2, u2] = (0, s.useState)(false), p2 = (0, l.I)() ?? false, h2 = (0, s.useId)(), y2 = e2 > t2 + 1;
    return y2 ? (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(r.PY1.div, {
          id: h2,
          className: T().foldBody,
          initial: false,
          animate: { height: d2 ? "auto" : t2 * a2 + n2 },
          transition: p2 ? { duration: 0 } : g.T.spring.smooth,
          style: { overflow: "hidden" },
          children: c2((e3) => y2 && !d2 && e3 >= t2)
        }),
        (0, i.jsxs)("button", {
          type: "button",
          className: T().more,
          "aria-expanded": d2,
          "aria-controls": h2,
          onClick: () => u2((e3) => !e3),
          children: [
            (0, i.jsx)(m.A, {
              size: 14,
              strokeWidth: 1.75,
              className: T().moreIcon,
              "data-open": d2 || void 0,
              "aria-hidden": "true"
            }),
            (0, i.jsx)("span", {
              children: d2 ? "Show less" : `Show ${A(e2 - t2, o2)}`
            })
          ]
        })
      ]
    }) : (0, i.jsx)("div", { className: T().foldBody, children: c2(() => false) });
  }
  function E({ output: e2 }) {
    if ("text" === e2.type)
      return (0, i.jsx)("p", { className: T().text, children: e2.text });
    if ("json" === e2.type) {
      let t2 = (JSON.stringify(e2.value, null, 2) ?? "").split("\n");
      return (0, i.jsx)(O, {
        total: t2.length,
        visible: 10,
        row: 20,
        unit: "more line",
        children: (e3) => (0, i.jsx)("pre", {
          className: T().json,
          style: { "--row": "20px" },
          children: t2.map(
            (t3, a2) => (0, i.jsx)(
              "span",
              {
                className: T().jsonLine,
                "aria-hidden": e3(a2) || void 0,
                children: (function(e4) {
                  let t4 = [], a3 = 0;
                  for (let s2 of e4.matchAll($)) {
                    let l2 = s2.index ?? 0;
                    l2 > a3 && t4.push(e4.slice(a3, l2));
                    let [n2, r2, o2, c2, d2] = s2;
                    r2 && o2 ? t4.push(
                      (0, i.jsx)(
                        "span",
                        { className: T().jsonKey, children: r2 },
                        l2
                      ),
                      o2
                    ) : r2 ? t4.push(
                      (0, i.jsx)(
                        "span",
                        { className: T().jsonString, children: r2 },
                        l2
                      )
                    ) : c2 ? t4.push(
                      (0, i.jsx)(
                        "span",
                        { className: T().jsonNumber, children: c2 },
                        l2
                      )
                    ) : d2 ? t4.push(
                      (0, i.jsx)(
                        "span",
                        { className: T().literal, children: d2 },
                        l2
                      )
                    ) : t4.push(n2), a3 = l2 + n2.length;
                  }
                  return a3 < e4.length && t4.push(e4.slice(a3)), t4;
                })(t3)
              },
              a2
            )
          )
        })
      });
    }
    if ("list" === e2.type) {
      let t2 = e2.items;
      return (0, i.jsx)(O, {
        total: t2.length,
        visible: 5,
        row: 32,
        unit: "more result",
        children: (e3) => (0, i.jsx)("ul", {
          className: T().list,
          style: { "--row": "32px" },
          children: t2.map(
            (t3, a2) => (0, i.jsxs)(
              "li",
              {
                className: T().listRow,
                "aria-hidden": e3(a2) || void 0,
                children: [
                  (0, i.jsx)("span", {
                    className: T().listLead,
                    children: t3.lead
                  }),
                  (0, i.jsx)("span", {
                    className: T().listTitle,
                    children: t3.title
                  }),
                  (0, i.jsx)("span", {
                    className: T().listTag,
                    children: t3.tag
                  })
                ]
              },
              `${t3.lead ?? ""}${t3.title}`
            )
          )
        })
      });
    }
    return (0, i.jsx)(O, {
      total: e2.rows.length,
      visible: 5,
      row: 30,
      head: 30,
      unit: "more row",
      children: (t2) => (0, i.jsx)("div", {
        className: T().tableScroll,
        children: (0, i.jsxs)("table", {
          className: T().table,
          style: { "--row": "30px" },
          children: [
            (0, i.jsx)("thead", {
              children: (0, i.jsx)("tr", {
                children: e2.columns.map(
                  (e3) => (0, i.jsx)("th", { scope: "col", children: e3 }, e3)
                )
              })
            }),
            (0, i.jsx)("tbody", {
              children: e2.rows.map(
                (e3, a2) => (0, i.jsx)(
                  "tr",
                  {
                    "aria-hidden": t2(a2) || void 0,
                    children: e3.map(
                      (e4, t3) => (0, i.jsx)(
                        "td",
                        {
                          className: null === e4 ? T().literal : void 0,
                          children: S(e4)
                        },
                        t3
                      )
                    )
                  },
                  a2
                )
              )
            })
          ]
        })
      })
    });
  }
  let R = (...e2) => e2.filter(Boolean).join(" "), L = (e2, t2) => `${e2} ${t2}${1 === e2 ? "" : "s"}`;
  function B(e2) {
    if (void 0 !== e2 && Number.isFinite(e2))
      return e2 < 1e3 ? `${Math.max(1, Math.round(e2))}ms` : `${(e2 / 1e3).toFixed(+(e2 < 1e4))}s`;
  }
  let W = (e2, t2) => e2.titles?.[t2] ?? e2.title, I = {
    running: "Running",
    success: "Done",
    error: "Failed",
    approval: "Needs approval",
    denied: "Denied"
  }, P = (e2) => e2 ? { duration: 0 } : {
    height: g.T.spring.smooth,
    opacity: {
      duration: g.T.duration.fast,
      ease: [...g.T.ease.standard]
    }
  };
  function F() {
    return (0, i.jsxs)("svg", {
      className: T().spinner,
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, i.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".2",
          strokeWidth: "1.75"
        }),
        (0, i.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function D({ reduced: e2 }) {
    return (0, i.jsx)("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, i.jsx)(r.PY1.path, {
        d: "M3.25 8.5 6.5 11.75 12.75 4.75",
        initial: !e2 && { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: {
          duration: 0.32,
          ease: [...g.T.ease.standard],
          delay: 0.04
        }
      })
    });
  }
  function Y({ status: e2, reduced: t2 }) {
    let a2 = "running" === e2 ? (0, i.jsx)(F, {}) : "success" === e2 ? (0, i.jsx)(D, { reduced: t2 }) : "error" === e2 ? (0, i.jsx)(u.A, { size: 16, strokeWidth: 1.75 }) : "approval" === e2 ? (0, i.jsx)(p.A, { size: 16, strokeWidth: 1.75 }) : (0, i.jsx)(h.A, { size: 16, strokeWidth: 1.75 });
    return (0, i.jsx)("span", {
      className: T().status,
      "aria-hidden": "true",
      children: (0, i.jsx)(n.N, {
        initial: false,
        mode: "popLayout",
        children: (0, i.jsx)(
          r.PY1.span,
          {
            className: T().statusIcon,
            "data-status": e2,
            initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
            animate: { opacity: 1, scale: 1 },
            exit: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
            transition: t2 ? { duration: 0 } : {
              ...g.T.spring.snappy,
              opacity: { duration: g.T.duration.instant }
            },
            children: a2
          },
          e2
        )
      })
    });
  }
  function V({ label: e2, copy: t2, children: a2 }) {
    return (0, i.jsxs)("div", {
      className: T().section,
      role: "group",
      "aria-label": e2,
      children: [
        (0, i.jsxs)("div", {
          className: T().sectionHead,
          children: [
            (0, i.jsx)("span", {
              className: T().sectionLabel,
              "aria-hidden": "true",
              children: e2
            }),
            t2 ? (0, i.jsx)(y.CopyButton, {
              value: t2,
              label: `Copy ${e2.toLowerCase()}`,
              iconOnly: true,
              variant: "plain",
              className: T().copy
            }) : null
          ]
        }),
        (0, i.jsx)("div", { className: T().well, children: a2 })
      ]
    });
  }
  let H = (0, s.createContext)(null);
  function K({
    call: e2,
    flush: t2 = false,
    open: a2,
    defaultOpen: u2 = false,
    onOpenChange: p2,
    onApprove: h2,
    onDeny: y2,
    onRetry: x2,
    renderOutput: f2,
    className: j2
  }) {
    var v2;
    let b2, k2, M2 = (0, l.I)() ?? false, A2 = (0, s.useContext)(H), $2 = (0, s.useId)(), [O2, L2] = (0, s.useState)(u2), F2 = a2 ?? O2, [D2, q2] = (0, s.useState)(null), G2 = D2 && D2.base === e2.status ? D2.status : e2.status, Z2 = { ...e2, status: G2 }, [X2, J2] = (0, s.useState)(G2), [Q2, U2] = (0, s.useState)(""), [ee2, et] = (0, s.useState)(""), ea = (0, s.useRef)(void 0), { outer: ei, inner: es } = (b2 = (0, s.useRef)(null), k2 = (0, s.useRef)(null), (0, s.useEffect)(() => {
      let e3, t3 = b2.current, a3 = k2.current;
      if (!t3 || !a3 || "u" < typeof ResizeObserver) return;
      let i2 = a3.offsetHeight, s2 = a3.offsetWidth, l2 = () => {
        t3.style.height = "", t3.style.overflow = "", e3 = void 0;
      }, n2 = new ResizeObserver(() => {
        let n3 = a3.offsetHeight, r2 = a3.offsetWidth, o2 = r2 !== s2;
        if (s2 = r2, n3 === i2) return;
        let c2 = e3 ? t3.getBoundingClientRect().height : i2;
        (i2 = n3, e3?.stop(), M2 || o2) ? l2() : (t3.style.overflow = "hidden", e3 = (0, d.i)(
          t3,
          { height: [c2, n3] },
          { ...g.T.spring.smooth, onComplete: l2 }
        ));
      });
      return n2.observe(a3), () => {
        n2.disconnect(), e3?.stop();
      };
    }, [M2]), { outer: b2, inner: k2 });
    if (X2 !== G2) {
      let e3, t3;
      J2(G2), U2(
        (e3 = w(Z2.tool), t3 = W(Z2, G2), "running" === G2 ? `${e3}: ${t3}` : "success" === G2 ? `${e3}: ${[t3, Z2.summary ?? C(Z2.output)].filter(Boolean).join(", ")}` : "error" === G2 ? `${e3}: ${t3}. ${Z2.message ?? ""}`.trim() : "approval" === G2 ? `${e3}: ${t3} needs your approval` : `${e3}: ${t3}, denied`)
      );
    }
    (0, s.useEffect)(() => () => window.clearTimeout(ea.current), []);
    let el = (t3, a3, i2) => {
      let s2 = e2.status;
      q2({ base: s2, status: t3 }), et(i2), window.clearTimeout(ea.current), a3 && (ea.current = window.setTimeout(
        () => q2({ base: s2, status: a3 }),
        900
      ));
    }, en = W(Z2, G2), er = Z2.summary ?? C(Z2.output), eo = B(Z2.durationMs), ec = ("error" === G2 || "approval" === G2) && Z2.message ? Z2.message : void 0, ed = w(Z2.tool), eu = {
      name: `${$2}-name`,
      title: `${$2}-title`,
      state: `${$2}-state`,
      body: `${$2}-body`
    }, ep = "success" === G2 ? [I.success, er, eo].filter(Boolean).join(", ") : "error" === G2 ? [I.error, Z2.message].filter(Boolean).join(": ") : I[G2], eh = "approval" === G2 ? "approval" : "error" === G2 ? "error" : "denied" === G2 ? "denied" : "success" === G2 && (er || eo) ? "meta" : null, em = "approval" === eh ? (0, i.jsxs)("span", {
      className: T().actions,
      children: [
        (0, i.jsx)(c.$, {
          variant: "secondary",
          size: "sm",
          className: T().action,
          onClick: () => y2 ? y2() : el("denied", void 0, "Denied. The call did not run."),
          "aria-label": `Deny: ${en}`,
          children: "Deny"
        }),
        (0, i.jsx)(c.$, {
          variant: "primary",
          size: "sm",
          className: R(T().action, T().allow),
          onClick: () => h2 ? h2() : el(
            "running",
            "success",
            "Allowed. This preview simulates the call, so nothing was sent."
          ),
          "aria-label": `Allow: ${en}`,
          children: "Allow"
        })
      ]
    }) : "error" === eh ? (0, i.jsx)("span", {
      className: T().actions,
      children: (0, i.jsxs)(c.$, {
        variant: "secondary",
        size: "sm",
        className: T().action,
        onClick: () => x2 ? x2() : el(
          "running",
          Z2.output ? "success" : "error",
          "Retrying. This preview simulates the call."
        ),
        "aria-label": `Retry: ${en}`,
        children: [
          (0, i.jsx)(o.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          "Retry"
        ]
      })
    }) : "meta" === eh ? (0, i.jsxs)("span", {
      className: T().meta,
      "aria-hidden": "true",
      children: [
        er ? (0, i.jsxs)("span", {
          className: T().metaSummary,
          children: [
            er,
            eo ? (0, i.jsx)("span", {
              className: T().metaDot,
              children: "\xB7"
            }) : null
          ]
        }) : null,
        eo ? (0, i.jsx)("span", { children: eo }) : null
      ]
    }) : "denied" === eh ? (0, i.jsx)("span", {
      className: T().meta,
      "aria-hidden": "true",
      children: "Denied"
    }) : null, ey = "success" === G2 ? f2?.(Z2) : void 0, e_ = "running" === G2 ? {
      label: "Output",
      body: (0, i.jsx)(_.n, {
        className: T().pending,
        children: "Waiting for the result"
      })
    } : "approval" === G2 ? {
      label: "Output",
      body: (0, i.jsx)("p", {
        className: T().pending,
        children: "Runs after you allow it."
      })
    } : "denied" === G2 ? {
      label: "Output",
      body: (0, i.jsx)("p", {
        className: T().pending,
        children: "Not run. You denied this call."
      })
    } : "error" === G2 ? {
      label: "Error",
      body: (0, i.jsx)("p", {
        className: T().errorText,
        children: Z2.message ?? "The call failed without a reason."
      }),
      copy: Z2.message
    } : null != ey ? { label: "Output", body: ey } : Z2.output ? {
      label: "Output",
      body: (0, i.jsx)(E, { output: Z2.output }),
      copy: "text" === (v2 = Z2.output).type ? v2.text : "json" === v2.type ? JSON.stringify(v2.value, null, 2) ?? "" : "list" === v2.type ? v2.items.map(
        (e3) => [e3.lead, e3.title, e3.tag && `(${e3.tag})`].filter(Boolean).join(" ")
      ).join("\n") : [v2.columns, ...v2.rows.map((e3) => e3.map(S))].map((e3) => e3.join("	")).join("\n")
    } : {
      label: "Output",
      body: (0, i.jsx)("p", {
        className: T().pending,
        children: "No output."
      })
    };
    return (0, i.jsxs)("div", {
      className: R(T().call, t2 ? T().flush : T().standalone, j2),
      "data-status": G2,
      "data-open": F2 || void 0,
      children: [
        (0, i.jsx)("div", {
          ref: ei,
          className: T().headClip,
          children: (0, i.jsxs)("div", {
            ref: es,
            className: T().head,
            children: [
              (0, i.jsx)("button", {
                type: "button",
                className: T().toggle,
                "aria-expanded": F2,
                "aria-controls": eu.body,
                "aria-labelledby": `${eu.name} ${eu.title} ${eu.state}`,
                onClick: () => {
                  A2?.touch();
                  let e3 = !F2;
                  void 0 === a2 && L2(e3), p2?.(e3);
                }
              }),
              (0, i.jsx)(N, { tool: Z2.tool, className: T().mark }),
              (0, i.jsxs)("span", {
                className: T().title,
                "aria-hidden": "true",
                children: [
                  (0, i.jsxs)("span", {
                    id: eu.name,
                    className: T().srOnly,
                    children: [ed, ":"]
                  }),
                  (0, i.jsx)("span", {
                    id: eu.title,
                    className: T().titleInner,
                    children: (0, i.jsx)(_.n, {
                      active: "running" === G2,
                      className: T().titleText,
                      children: en
                    })
                  })
                ]
              }),
              ec ? (0, i.jsx)("span", {
                className: T().note,
                "aria-hidden": "true",
                children: ec
              }) : null,
              (0, i.jsx)("span", {
                className: T().aside,
                children: (0, i.jsx)(n.N, {
                  initial: false,
                  mode: "popLayout",
                  children: eh ? (0, i.jsx)(
                    r.PY1.span,
                    {
                      className: T().asideInner,
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: {
                        duration: M2 ? 0 : g.T.duration.fast,
                        ease: [...g.T.ease.standard]
                      },
                      children: em
                    },
                    eh
                  ) : null
                })
              }),
              (0, i.jsx)(Y, { status: G2, reduced: M2 }),
              (0, i.jsx)("span", {
                id: eu.state,
                className: T().srOnly,
                children: ep
              }),
              (0, i.jsx)(m.A, {
                size: 16,
                strokeWidth: 1.75,
                className: T().chevron,
                "aria-hidden": "true"
              })
            ]
          })
        }),
        (0, i.jsx)(n.N, {
          initial: false,
          children: F2 ? (0, i.jsx)(
            r.PY1.div,
            {
              id: eu.body,
              className: T().bodyClip,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: P(M2),
              children: (0, i.jsxs)("div", {
                className: T().body,
                children: [
                  Z2.input && Object.keys(Z2.input).length ? (0, i.jsx)(V, {
                    label: "Input",
                    copy: JSON.stringify(Z2.input, null, 2),
                    children: (0, i.jsx)(z, { input: Z2.input })
                  }) : null,
                  (0, i.jsx)(V, {
                    label: e_.label,
                    copy: e_.copy,
                    children: e_.body
                  })
                ]
              })
            },
            "body"
          ) : null
        }),
        (0, i.jsxs)("span", {
          className: T().srOnly,
          role: "status",
          "aria-live": "polite",
          children: [Q2, ee2 ? ` ${ee2}` : ""]
        })
      ]
    });
  }
  function q({
    calls: e2 = f,
    active: t2,
    defaultOpen: a2,
    open: o2,
    onOpenChange: c2,
    autoCollapse: d2 = true,
    onApprove: u2,
    onDeny: p2,
    onRetry: h2,
    renderOutput: y2,
    className: x2
  }) {
    let j2 = (0, l.I)() ?? false, v2 = (0, s.useId)(), [b2, w2] = (0, s.useState)(
      () => a2 ?? e2.some((e3) => {
        let t3;
        return "running" === (t3 = e3.status) || "approval" === t3 || "error" === t3;
      })
    ), M2 = o2 ?? b2, [A2, C2] = (0, s.useState)(false), S2 = (0, s.useRef)(false), z2 = (0, s.useRef)(false), $2 = e2.some((e3) => "running" === e3.status), O2 = e2.some((e3) => "approval" === e3.status), E2 = e2.filter((e3) => "error" === e3.status).length, W2 = t2 ?? $2, I2 = $2 || O2 || E2 > 0 || W2, F2 = e2.reduce(
      (e3, t3) => e3 + ("success" === t3.status || "error" === t3.status ? t3.durationMs ?? 0 : 0),
      0
    ), D2 = O2 && !$2 ? "Waiting for approval" : ($2 || W2) && !E2 ? `Using ${L(e2.length, "tool")}` : `Used ${L(e2.length, "tool")}`, Y2 = E2 && !$2 ? `${E2} failed` : O2 || $2 || W2 ? void 0 : B(F2), V2 = e2.filter((e3) => "approval" === e3.status || "error" === e3.status).map((e3) => `${e3.id}:${e3.status}`).join("|"), [G2, Z2] = (0, s.useState)(V2);
    V2 !== G2 && (Z2(V2), V2 && void 0 === o2 && !b2 && w2(true)), (0, s.useEffect)(() => {
      I2 && (z2.current = true);
    }, [I2]), (0, s.useEffect)(() => {
      if (I2 || !d2 || !M2 || S2.current || !z2.current || !e2.length) return;
      let t3 = window.setTimeout(() => {
        z2.current = false, void 0 === o2 && w2(false), c2?.(false);
      }, 450);
      return () => window.clearTimeout(t3);
    }, [I2, d2, M2, e2.length, o2, c2]);
    let X2 = e2.reduce(
      (e3, t3) => e3.some((e4) => k(e4) === k(t3.tool)) ? e3 : [...e3, t3.tool],
      []
    ), J2 = X2.slice(0, 4);
    return (0, i.jsx)(H.Provider, {
      value: {
        touch: () => {
          S2.current = true;
        }
      },
      children: (0, i.jsxs)("div", {
        className: R(T().root, T().group, x2),
        "data-open": M2 || void 0,
        children: [
          (0, i.jsx)("div", {
            className: T().groupHead,
            children: (0, i.jsxs)("button", {
              type: "button",
              className: T().groupToggle,
              "aria-expanded": M2,
              "aria-controls": `${v2}-list`,
              onClick: () => {
                var e3;
                return e3 = !M2, void (S2.current = true, e3 && C2(true), void 0 === o2 && w2(e3), c2?.(e3));
              },
              children: [
                (0, i.jsxs)("span", {
                  className: T().stack,
                  "aria-hidden": "true",
                  children: [
                    (0, i.jsx)(n.N, {
                      initial: false,
                      children: J2.map(
                        (e3, t3) => (0, i.jsx)(
                          r.PY1.span,
                          {
                            className: T().stackItem,
                            style: { zIndex: t3 + 1 },
                            initial: j2 ? { opacity: 0 } : {
                              opacity: 0,
                              scale: 0.6,
                              width: 0,
                              marginLeft: 0
                            },
                            animate: {
                              opacity: 1,
                              scale: 1,
                              width: 20,
                              marginLeft: t3 ? -4 : 0
                            },
                            exit: {
                              opacity: 0,
                              scale: 0.6,
                              width: 0,
                              marginLeft: 0
                            },
                            transition: j2 ? { duration: 0 } : {
                              ...g.T.spring.morph,
                              opacity: { duration: g.T.duration.fast }
                            },
                            children: (0, i.jsx)(N, {
                              tool: e3,
                              size: 12,
                              className: T().stackMark
                            })
                          },
                          k(e3)
                        )
                      )
                    }),
                    X2.length > J2.length ? (0, i.jsxs)("span", {
                      className: T().stackMore,
                      children: ["+", X2.length - J2.length]
                    }) : null
                  ]
                }),
                (0, i.jsx)(_.n, {
                  active: ($2 || W2) && !O2 && !E2,
                  className: T().groupLabel,
                  children: D2
                }),
                (0, i.jsx)("span", {
                  className: T().groupMeta,
                  children: (0, i.jsx)(n.N, {
                    initial: false,
                    mode: "popLayout",
                    children: Y2 ? (0, i.jsx)(
                      r.PY1.span,
                      {
                        className: E2 ? T().groupMetaFailed : void 0,
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: j2 ? 0 : g.T.duration.fast },
                        children: Y2
                      },
                      Y2
                    ) : null
                  })
                }),
                (0, i.jsx)(m.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  className: T().chevron,
                  "aria-hidden": "true"
                })
              ]
            })
          }),
          (0, i.jsx)(n.N, {
            initial: false,
            children: M2 ? (0, i.jsx)(
              r.PY1.div,
              {
                id: `${v2}-list`,
                className: T().listClip,
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: P(j2),
                onAnimationComplete: () => C2(false),
                children: (0, i.jsx)("div", {
                  className: T().calls,
                  role: "list",
                  children: (0, i.jsx)(n.N, {
                    initial: A2,
                    children: e2.map(
                      (e3, t3) => (0, i.jsx)(
                        r.PY1.div,
                        {
                          role: "listitem",
                          className: T().item,
                          initial: j2 ? { opacity: 0 } : A2 ? { opacity: 0, y: -6 } : { opacity: 0, height: 0 },
                          animate: { opacity: 1, y: 0, height: "auto" },
                          exit: { opacity: 0, height: 0 },
                          transition: j2 ? { duration: 0 } : A2 ? {
                            opacity: {
                              duration: g.T.duration.standard,
                              delay: 0.02 * t3
                            },
                            y: {
                              ...g.T.spring.snappy,
                              delay: 0.02 * t3
                            }
                          } : {
                            height: g.T.spring.smooth,
                            opacity: {
                              duration: g.T.duration.fast,
                              delay: 0.06
                            }
                          },
                          children: (0, i.jsx)(K, {
                            call: e3,
                            flush: true,
                            renderOutput: y2,
                            onApprove: u2 ? () => u2(e3) : void 0,
                            onDeny: p2 ? () => p2(e3) : void 0,
                            onRetry: h2 ? () => h2(e3) : void 0
                          })
                        },
                        e3.id
                      )
                    )
                  })
                })
              },
              "list"
            ) : null
          })
        ]
      })
    });
  }
  var G = a(30757), Z = a.n(G);
  let X = {
    allow: "Two things block 2.8: the coupon checkout bug #1284 and migration 0047, which is still pending on production. I posted a summary in #release.",
    deny: "Two things block 2.8: the coupon checkout bug #1284 and migration 0047, which is still pending on production. I did not post to #release."
  }, J = [4, 6, 3, 7, 5];
  function Q({ text: e2 }) {
    let t2 = (0, s.useMemo)(
      () => (function(e3) {
        let t3 = e3.match(/\S+\s*/g) ?? [], a3 = [];
        for (let e4 = 0, i2 = 0; e4 < t3.length; i2++) {
          let s2 = J[i2 % J.length];
          a3.push(t3.slice(e4, e4 + s2).join("")), e4 += s2;
        }
        return a3;
      })(e2),
      [e2]
    ), [a2, l2] = (0, s.useState)(0);
    return (0, s.useEffect)(() => {
      let e3 = 0, a3 = 0, i2 = (s2) => {
        a3 || (a3 = s2);
        let n2 = Math.min(t2.length, Math.floor((s2 - a3) / 34) + 1);
        l2(n2), n2 < t2.length && (e3 = requestAnimationFrame(i2));
      };
      return e3 = requestAnimationFrame(i2), () => cancelAnimationFrame(e3);
    }, [t2]), (0, i.jsx)(i.Fragment, {
      children: t2.slice(0, a2).map(
        (e3, t3) => (0, i.jsx)("span", { className: Z().chunk, children: e3 }, t3)
      )
    });
  }
  function U() {
    let e2 = (0, l.I)() ?? false, [t2, a2] = (0, s.useState)(0), [d2, u2] = (0, s.useState)(false), [p2, h2] = (0, s.useState)([]), [m2, y2] = (0, s.useState)(true), [_2, f2] = (0, s.useState)(null), [j2, v2] = (0, s.useState)(false), [b2, k2] = (0, s.useState)(""), w2 = (0, s.useRef)({}), N2 = (0, s.useRef)(e2);
    (0, s.useEffect)(() => {
      N2.current = e2;
    }, [e2]), (0, s.useEffect)(() => {
      let e3 = false, t3 = [], a3 = (e4) => new Promise((a4) => {
        t3.push(window.setTimeout(a4, e4));
      }), i2 = (e4) => h2((t4) => [...t4, e4]), s2 = (e4, t4) => h2((a4) => a4.map((a5) => a5.id === e4 ? { ...a5, ...t4 } : a5)), l2 = (e4, t4) => s2(e4, { status: t4 }), { issues: n2, project: r2, migrations: o2, post: c2 } = x;
      return (async () => {
        if (await a3(120), e3 || (u2(true), await a3(480), e3) || (i2({ ...n2, status: "running" }), await a3(1180), e3) || (l2(n2.id, "success"), await a3(220), e3) || (i2({ ...r2, status: "running" }), await a3(760), e3) || (l2(r2.id, "success"), await a3(220), e3) || (i2({ ...o2, status: "running", durationMs: 5e3 }), await a3(1400), e3) || (l2(o2.id, "error"), k2("PostgreSQL timed out. Retry it to continue."), await new Promise((e4) => {
          w2.current.retry = e4;
        }), e3) || (s2(o2.id, { status: "running", durationMs: o2.durationMs }), await a3(700), e3) || (l2(o2.id, "success"), await a3(260), e3))
          return;
        i2({ ...c2, status: "approval" });
        let t4 = await new Promise((e4) => {
          w2.current.decide = e4;
        });
        if (!e3) {
          if ("allow" === t4) {
            if (l2(c2.id, "running"), await a3(620), e3) return;
            l2(c2.id, "success"), k2(
              "Allowed. This preview simulates the post, so nothing was sent to Slack."
            );
          } else l2(c2.id, "denied"), k2("Denied. Nothing was posted.");
          y2(false), await a3(N2.current ? 150 : 950), e3 || (f2(t4), await a3(700), e3 || v2(true));
        }
      })(), () => {
        e3 = true, t3.forEach(window.clearTimeout), w2.current = {};
      };
    }, [t2]);
    let M2 = (e3) => {
      let t3 = w2.current.decide;
      w2.current.decide = void 0, t3?.(e3);
    }, T2 = e2 ? { duration: 0 } : {
      height: g.T.spring.smooth,
      opacity: { duration: g.T.duration.fast }
    };
    return (0, i.jsxs)("div", {
      className: Z().demo,
      children: [
        (0, i.jsx)("p", {
          className: Z().user,
          children: "Is anything blocking the 2.8 release?"
        }),
        (0, i.jsxs)("div", {
          className: Z().turn,
          children: [
            (0, i.jsx)("p", {
              className: Z().prose,
              children: d2 ? (0, i.jsx)(
                Q,
                { text: "Let me check what is blocking the release." },
                `intro-${t2}`
              ) : null
            }),
            (0, i.jsx)(n.N, {
              initial: false,
              children: p2.length ? (0, i.jsx)(
                r.PY1.div,
                {
                  className: Z().slot,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { opacity: 0, transition: { duration: 0 } },
                  transition: T2,
                  children: (0, i.jsx)(q, {
                    calls: p2,
                    active: m2,
                    onRetry: () => {
                      let e3 = w2.current.retry;
                      w2.current.retry = void 0, e3?.();
                    },
                    onApprove: () => M2("allow"),
                    onDeny: () => M2("deny")
                  })
                },
                `group-${t2}`
              ) : null
            }),
            _2 ? (0, i.jsx)("p", {
              className: Z().prose,
              children: (0, i.jsx)(Q, { text: X[_2] }, `answer-${t2}`)
            }) : null,
            (0, i.jsx)(n.N, {
              initial: false,
              children: j2 ? (0, i.jsx)(
                r.PY1.div,
                {
                  className: Z().again,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0, transition: { duration: 0 } },
                  transition: { duration: e2 ? 0 : g.T.duration.standard },
                  children: (0, i.jsxs)(c.$, {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => {
                      a2((e3) => e3 + 1), u2(false), h2([]), y2(true), f2(null), v2(false), k2("");
                    },
                    children: [
                      (0, i.jsx)(o.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Run again"
                    ]
                  })
                },
                "again"
              ) : null
            })
          ]
        }),
        (0, i.jsx)("span", {
          className: Z().srOnly,
          role: "status",
          "aria-live": "polite",
          children: j2 && _2 ? X[_2] : b2
        })
      ]
    });
  }
  let ee = U;
};

__m(__module,__exports,__require);
}