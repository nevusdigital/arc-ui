function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { LiquidTabBarDemo: () => A, default: () => w });
  var r = a(95155), l = a(12115), n = a(18310), o = a(80642), s = a(25354), i = a(45425), u = a(97625), c = a(24551), d = a(71363), f = a(64708), v = a(66558), b = a(7770), y = a(44386), m = a.n(y);
  let p = { strokeWidth: 1.75, "aria-hidden": true }, h = [
    {
      value: "home",
      label: "Home",
      icon: (0, r.jsx)(i.A, { ...p }),
      note: "Your feed"
    },
    {
      value: "saved",
      label: "Saved",
      icon: (0, r.jsx)(u.A, { ...p }),
      note: "3 saved places"
    },
    {
      value: "inbox",
      label: "Inbox",
      icon: (0, r.jsx)(c.A, { ...p }),
      badge: 2,
      badgeLabel: "2 unread",
      note: "2 unread messages"
    },
    {
      value: "profile",
      label: "Profile",
      icon: (0, r.jsx)(d.A, { ...p }),
      note: "Your profile"
    }
  ], _ = [
    { value: "active", label: "Active label" },
    { value: "always", label: "All labels" },
    { value: "none", label: "Icons only" }
  ], x = "(max-width: 480px)", g = (e2) => {
    let t2 = window.matchMedia(x);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  };
  function A() {
    let e2 = (0, l.useId)(), t2 = !!(0, n.I)(), [a2, i2] = (0, l.useState)("home"), [u2, c2] = (0, l.useState)("active"), d2 = (0, l.useSyncExternalStore)(
      g,
      () => window.matchMedia(x).matches,
      () => false
    ), y2 = d2 ? _.filter((e3) => "always" !== e3.value) : _, p2 = d2 && "always" === u2 ? "active" : u2, A2 = h.find((e3) => e3.value === a2)?.note;
    return (0, r.jsxs)("div", {
      className: m().demo,
      children: [
        (0, r.jsxs)("div", {
          className: m().stage,
          children: [
            (0, r.jsx)(f.d4, {
              id: e2,
              label: "Sections",
              tabs: h,
              value: a2,
              onValueChange: i2,
              labels: p2
            }),
            (0, r.jsx)("div", {
              className: m().noteRow,
              children: (0, r.jsx)(o.N, {
                mode: "popLayout",
                initial: false,
                children: (0, r.jsx)(
                  s.PY1.p,
                  {
                    id: (0, f.MR)(e2, a2),
                    role: "tabpanel",
                    "aria-labelledby": (0, f.pQ)(e2, a2),
                    className: m().note,
                    initial: t2 ? { opacity: 0 } : { opacity: 0, y: 4 },
                    animate: { opacity: 1, y: 0 },
                    exit: t2 ? { opacity: 0 } : {
                      opacity: 0,
                      y: -4,
                      transition: { duration: b.T.duration.exit }
                    },
                    transition: t2 ? { duration: b.T.duration.fast } : b.T.spring.smooth,
                    children: A2
                  },
                  a2
                )
              })
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: m().modes,
          children: (0, r.jsx)(v.A, {
            label: "Tab labels",
            options: y2,
            value: p2,
            onValueChange: (e3) => c2(e3)
          })
        })
      ]
    });
  }
  let w = A;
}

__m(__module,__exports,__require);
}