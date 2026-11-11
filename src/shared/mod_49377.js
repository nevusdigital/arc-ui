function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { PhoneInputDemo: () => G, default: () => Z });
  var i = n(95155), r = n(12115), a = n(18310), l = n(80642), s = n(25354), o = n(51288), u = n(28245), c = n(92171), d = n(65377), p = n(9005), h = n(12363), m = n(64577), g = n(7770), f = n(3022), y = n.n(f);
  let _ = (e2, t2, n2, i2, r2, a2 = "0", l2) => ({ iso: e2, name: t2, dial: n2, patterns: Array.isArray(i2) ? i2 : [i2], example: r2, trunk: a2, areaCodes: l2 }), v = [_("US", "United States", "1", "(###) ###-####", "2015550123", "1"), _("CA", "Canada", "1", "(###) ###-####", "5065550123", "1", "204 226 236 249 250 263 289 306 343 354 365 367 368 382 387 403 416 418 428 431 437 438 450 468 474 506 514 519 548 579 581 584 587 604 613 639 647 672 683 705 709 742 753 778 780 782 807 819 825 867 873 879 902 905".split(" ")), _("MX", "Mexico", "52", "## #### ####", "2221234567", ""), _("BR", "Brazil", "55", ["(##) ####-####", "(##) #####-####"], "11961234567"), _("AR", "Argentina", "54", "## ####-####", "1123456789"), _("CO", "Colombia", "57", "### ### ####", "3211234567", ""), _("CL", "Chile", "56", "# #### ####", "221234567", ""), _("PE", "Peru", "51", "### ### ###", "912345678"), _("GB", "United Kingdom", "44", "#### ######", "7400123456"), _("IE", "Ireland", "353", "## ### ####", "850123456"), _("FR", "France", "33", "# ## ## ## ##", "612345678"), _("DE", "Germany", "49", ["### #######", "### ########"], "15123456789"), _("ES", "Spain", "34", "### ## ## ##", "612345678", ""), _("IT", "Italy", "39", ["### ### ###", "### ### ####"], "3123456789", ""), _("PT", "Portugal", "351", "### ### ###", "912345678", ""), _("NL", "Netherlands", "31", "# ########", "612345678"), _("BE", "Belgium", "32", "### ## ## ##", "470123456"), _("CH", "Switzerland", "41", "## ### ## ##", "781234567"), _("AT", "Austria", "43", ["### #######", "### ########"], "6641234567"), _("SE", "Sweden", "46", "## ### ## ##", "701234567"), _("NO", "Norway", "47", "### ## ###", "40612345", ""), _("DK", "Denmark", "45", "## ## ## ##", "32123456", ""), _("FI", "Finland", "358", ["## ### ####", "## ### #####"], "412345678"), _("PL", "Poland", "48", "### ### ###", "512345678", ""), _("CZ", "Czechia", "420", "### ### ###", "601123456", ""), _("GR", "Greece", "30", "### ### ####", "6912345678", ""), _("UA", "Ukraine", "380", "## ### ## ##", "501234567"), _("TR", "Turkey", "90", "### ### ## ##", "5012345678"), _("IL", "Israel", "972", "##-###-####", "502345678"), _("AE", "United Arab Emirates", "971", "## ### ####", "501234567"), _("SA", "Saudi Arabia", "966", "## ### ####", "512345678"), _("EG", "Egypt", "20", "### ### ####", "1001234567"), _("NG", "Nigeria", "234", "### ### ####", "8021234567"), _("KE", "Kenya", "254", "### ######", "712123456"), _("ZA", "South Africa", "27", "## ### ####", "711234567"), _("IN", "India", "91", "#####-#####", "8123456789"), _("PK", "Pakistan", "92", "### #######", "3012345678"), _("CN", "China", "86", "### #### ####", "13123456789"), _("JP", "Japan", "81", "##-####-####", "9012345678"), _("KR", "South Korea", "82", ["##-###-####", "##-####-####"], "1020000000"), _("TW", "Taiwan", "886", "### ### ###", "912345678"), _("HK", "Hong Kong", "852", "#### ####", "51234567", ""), _("SG", "Singapore", "65", "#### ####", "81234567", ""), _("PH", "Philippines", "63", "### ### ####", "9051234567"), _("ID", "Indonesia", "62", ["###-###-####", "###-####-####", "###-####-#####"], "81234567890"), _("TH", "Thailand", "66", "## ### ####", "812345678"), _("VN", "Vietnam", "84", "## ### ## ##", "912345678"), _("AU", "Australia", "61", "### ### ###", "412345678"), _("NZ", "New Zealand", "64", ["# ### ####", "## ### ####", "## #### ####"], "211234567")], x = new Map(v.map((e2) => [e2.iso, e2])), b = (e2) => e2.split("#").length - 1, k = (e2) => e2.patterns.map(b), j = (e2, t2) => t2.slice(0, w(e2, t2)[0].length + Math.max(...k(e2))), N = (e2) => String.fromCodePoint(...[...e2.toUpperCase()].map((e3) => 127462 + e3.charCodeAt(0) - 65));
  function w(e2, t2) {
    return e2.trunk && t2.startsWith(e2.trunk) ? [e2.trunk, t2.slice(e2.trunk.length)] : ["", t2];
  }
  function C(e2, t2) {
    var n2;
    let [i2, r2] = w(e2, t2), a2 = (n2 = r2.length, e2.patterns.find((e3) => b(e3) >= n2) ?? e2.patterns[e2.patterns.length - 1]), l2 = (function(e3, t3) {
      let n3 = "", i3 = 0;
      for (let r3 of t3) {
        if (i3 >= e3.length) break;
        n3 += "#" === r3 ? e3[i3++] : r3;
      }
      return n3 + e3.slice(i3);
    })(r2, a2);
    return i2 ? r2 ? i2 + (/^#/.test(a2) ? "" : " ") + l2 : i2 : l2;
  }
  function D(e2, t2) {
    let n2 = w(e2, t2)[1].length, i2 = k(e2);
    return n2 ? i2.includes(n2) ? "valid" : n2 > Math.max(...i2) ? "too-long" : "incomplete" : "empty";
  }
  let S = (e2, t2) => {
    let n2 = w(e2, t2)[1];
    return n2 ? `+${e2.dial}${n2}` : "";
  };
  function $(e2, t2 = v) {
    let n2 = e2.trim(), i2 = n2.replace(/\D/g, "");
    if (!n2.startsWith("+")) {
      if (!n2.startsWith("00")) return null;
      i2 = i2.slice(2);
    }
    for (let e3 of [3, 2, 1]) {
      let n3 = i2.slice(0, e3), r2 = t2.filter((e4) => e4.dial === n3);
      if (!r2.length) continue;
      let a2 = i2.slice(e3), l2 = r2.find((e4) => e4.areaCodes?.some((e5) => a2.startsWith(e5))) ?? r2.find((e4) => !e4.areaCodes) ?? r2[0];
      return l2.trunk && a2.startsWith(l2.trunk) && a2.length - l2.trunk.length >= Math.min(...k(l2)) && (a2 = a2.slice(l2.trunk.length)), { country: l2, national: j(l2, a2) };
    }
    return null;
  }
  let P = [...g.T.ease.enter], A = [...g.T.ease.standard], { blur: T } = g.T, R = (e2, t2) => {
    let n2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: n2 * n2, damping: 2 * (1 - t2) * n2, mass: 1 };
  }, M = R(0.4, 0), E = R(0.32, 0), I = R(0.28, 0), H = R(0.42, 0), K = () => () => {
  };
  function W() {
    let e2 = (0, r.useSyncExternalStore)(K, () => true, () => false);
    return !!(0, a.I)() && e2;
  }
  let L = { enter: (e2) => ({ opacity: 0, y: `${0.6 * e2}em`, filter: `blur(${T.soft}px)` }), rest: { opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }, exit: (e2) => ({ opacity: 0, y: `${-0.5 * e2}em`, filter: `blur(${T.subtle}px)`, transition: { duration: 0.12, ease: A } }) }, U = { enter: { opacity: 0 }, rest: { opacity: 1, y: 0, filter: "none" }, exit: { opacity: 0, transition: { duration: 0.08 } } };
  function O(e2, t2) {
    if (!t2) return true;
    let n2 = t2.replace(/\D/g, "");
    return n2 && /^[+\d\s()-]+$/.test(t2) ? e2.dial.startsWith(n2) || n2.startsWith(e2.dial) : "" === t2.replace("+", "") || e2.name.toLowerCase().includes(t2) || e2.iso.toLowerCase() === t2;
  }
  function z({ id: e2, text: t2, tone: n2 }) {
    let r2 = W();
    return (0, i.jsx)(s.PY1.span, { className: y().messageSlot, initial: !r2 && { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0, transition: r2 ? { duration: 0 } : { height: g.T.spring.smooth, opacity: { duration: g.T.duration.instant } } }, transition: r2 ? { duration: 0 } : { height: g.T.spring.smooth, opacity: { duration: g.T.duration.fast } }, children: (0, i.jsx)(l.N, { initial: false, mode: "popLayout", children: (0, i.jsx)(s.PY1.span, { id: e2, className: "error" === n2 ? y().error : y().hint, role: "error" === n2 ? "alert" : void 0, initial: r2 ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${T.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, transition: { duration: 0.1 } }, transition: { duration: r2 ? 0.12 : g.T.duration.standard, ease: P }, children: t2 }, t2) }) });
  }
  let Y = (0, r.forwardRef)(function({ label: e2, hideLabel: t2 = false, value: n2, defaultValue: a2, onValueChange: o2, country: f2, defaultCountry: _2 = "US", onCountryChange: b2, countries: R2, preferredCountries: K2 = ["US", "CA", "GB"], description: Y2, error: B2, validate: F2 = true, disabled: G2 = false, required: Z2, name: V, id: J, className: q, onBlur: Q }, X) {
    let ee = W(), et = (0, r.useId)(), en = J ?? `${et}-number`, ei = `${et}-list`, er = `${en}-hint`, ea = `${en}-error`, el = (e10) => `${et}-opt-${e10}`, es = (0, r.useMemo)(() => R2?.length ? v.filter((e10) => R2.includes(e10.iso)) : v, [R2]), eo = x.get(_2) ?? v[0], [eu, ec] = (0, r.useState)(() => {
      let e10 = $(n2 ?? a2 ?? "", es);
      return e10 ? { iso: e10.country.iso, digits: e10.national } : { iso: eo.iso, digits: "" };
    }), ed = f2 ?? eu.iso, ep = x.get(ed) ?? eo, eh = eu.digits, em = S(ep, eh), [eg, ef] = (0, r.useState)(n2);
    if (n2 !== eg && (ef(n2), void 0 !== n2 && n2 !== em)) {
      let e10 = $(n2, es);
      ec(e10 ? { iso: e10.country.iso, digits: e10.national } : { iso: ed, digits: "" });
    }
    let ey = C(ep, eh), e_ = D(ep, eh), [ev, ex] = (0, r.useState)(false), eb = k(ep), ek = 1 === eb.length ? `${eb[0]}` : `${eb.slice(0, -1).join(", ")} or ${eb[eb.length - 1]}`, ej = F2 && ev && ("incomplete" === e_ || "too-long" === e_) ? `Numbers in ${ep.name} have ${ek} digits` : void 0, eN = B2 ?? ej, ew = (0, r.useMemo)(() => {
      let [e10, t3] = w(ep, eh);
      if (t3.length >= ep.example.length) return "";
      let n3 = C(ep, e10 + t3 + ep.example.slice(t3.length));
      return n3.startsWith(ey) ? n3.slice(ey.length) : "";
    }, [ep, eh, ey]), eC = (0, r.useRef)(null);
    (0, r.useImperativeHandle)(X, () => eC.current);
    let eD = (0, r.useRef)(null), [, eS] = (0, r.useReducer)((e10) => e10 + 1, 0), e$ = (0, r.useCallback)((e10, t3) => {
      let n3 = D(e10, t3);
      o2?.(S(e10, t3), { country: e10, formatted: C(e10, t3), status: n3, valid: "valid" === n3 });
    }, [o2]), eP = (e10, t3, n3 = ep) => {
      let i2 = j(n3, e10);
      (eD.current = null === t3 ? null : Math.min(t3, i2.length), n3.iso !== ep.iso && b2?.(n3.iso), i2 === eh && n3.iso === ep.iso) ? eS() : (ec({ iso: n3.iso, digits: i2 }), e$(n3, i2));
    };
    (0, r.useLayoutEffect)(function() {
      let e10 = eC.current, t3 = eD.current;
      if (eD.current = null, !e10 || null === t3 || document.activeElement !== e10) return;
      let n3 = (function(e11, t4) {
        if (t4 <= 0) {
          let t5 = e11.search(/\d/);
          return t5 < 0 ? e11.length : Math.min(t5, e11.length);
        }
        let n4 = 0;
        for (let i2 = 0; i2 < e11.length; i2++) if (/\d/.test(e11[i2]) && ++n4 === t4) return i2 + 1;
        return e11.length;
      })(e10.value, t3);
      e10.setSelectionRange(n3, n3);
    });
    let [eA, eT] = (0, r.useState)(""), [eR, eM] = (0, r.useState)(false), [eE, eI] = (0, r.useState)(""), [eH, eK] = (0, r.useState)(null), [eW, eL] = (0, r.useState)(1), eU = eE.trim().toLowerCase(), eO = (0, r.useMemo)(() => {
      let e10 = [...es].sort((e11, t4) => e11.name.localeCompare(t4.name));
      if (eU && "+" !== eU) {
        let t4 = e10.filter((e11) => O(e11, eU)), n4 = eU.replace(/\D/g, "");
        return n4 && t4.sort((e11, t5) => Number(t5.dial === n4) - Number(e11.dial === n4) || e11.dial.length - t5.dial.length), [{ key: "results", rows: t4.map((e11) => ({ key: `r-${e11.iso}`, entry: e11 })) }];
      }
      let t3 = K2.map((e11) => es.find((t4) => t4.iso === e11)).filter((e11) => !!e11), n3 = { key: "all", label: t3.length ? "All countries" : void 0, rows: e10.map((e11) => ({ key: `a-${e11.iso}`, entry: e11 })) };
      return t3.length ? [{ key: "preferred", label: "Suggested", rows: t3.map((e11) => ({ key: `p-${e11.iso}`, entry: e11 })) }, n3] : [n3];
    }, [eU, es, K2]), ez = (0, r.useMemo)(() => eO.flatMap((e10) => e10.rows), [eO]), eY = null !== eH && ez.some((e10) => e10.key === eH) ? eH : ez[0]?.key ?? null, eB = (0, r.useMemo)(() => new Map([...es].sort((e10, t3) => e10.name.localeCompare(t3.name)).map((e10, t3) => [e10.iso, t3])), [es]), eF = (0, r.useRef)(null), eG = (0, r.useRef)(null), eZ = (0, r.useRef)(null), eV = (0, r.useRef)(null), eJ = (0, r.useRef)(null), eq = (0, r.useRef)(null), eQ = (0, r.useRef)(null), eX = (0, r.useRef)(/* @__PURE__ */ new Map()), e0 = (0, u.d)("auto"), e1 = (0, u.d)("100%"), e22 = (0, u.d)("100%"), e5 = (0, u.d)(17), e6 = (0, r.useRef)({ trigger: 0, lid: 0, panel: 0, list: 0 }), e4 = (0, r.useRef)({ open: false, reduced: false, measured: false });
    (0, r.useLayoutEffect)(() => {
      e4.current.reduced = ee;
    }, [ee]);
    let e3 = (0, r.useCallback)((e10) => {
      let { trigger: t3, lid: n3, panel: i2, list: r2 } = e6.current;
      if (!t3 || !n3) return;
      let a3 = e4.current.open, l2 = a3 ? { w: Math.max(t3, i2), h: n3 + 2 + r2, r: 22 } : { w: t3, h: n3, r: 17 };
      if (!e10 || e4.current.reduced || !e4.current.measured) {
        e0.jump(t3), e1.jump(l2.w), e22.jump(l2.h), e5.jump(l2.r), e4.current.measured = true;
        return;
      }
      (0, c.i)(e0, t3, H), (0, c.i)(e1, l2.w, a3 ? M : E), (0, c.i)(e22, l2.h, a3 ? M : E), (0, c.i)(e5, l2.r, a3 ? M : E);
    }, [e0, e5, e22, e1]), e7 = (0, r.useCallback)(() => {
      let e10 = eZ.current, t3 = eG.current, n3 = eV.current, i2 = eF.current;
      if (!e10 || !t3 || !n3 || !i2) return false;
      let r2 = Math.min(340, t3.offsetWidth);
      i2.style.setProperty("--pi-panel-w", `${r2}px`);
      let a3 = e6.current, l2 = { trigger: e10.offsetWidth, lid: t3.clientHeight, panel: r2, list: n3.offsetHeight };
      return e6.current = l2, l2.trigger !== a3.trigger || l2.lid !== a3.lid || l2.panel !== a3.panel || e4.current.open && l2.list !== a3.list;
    }, []);
    (0, r.useLayoutEffect)(() => {
      let e10 = eZ.current, t3 = eG.current, n3 = eV.current;
      if (e7() && e3(e4.current.measured), !e10 || !t3 || !n3 || "u" < typeof ResizeObserver) return;
      let i2 = new ResizeObserver(() => {
        e7() && e3(e4.current.measured);
      });
      return i2.observe(e10), i2.observe(t3), i2.observe(n3), () => i2.disconnect();
    }, [e3, e7]);
    let e8 = (0, r.useRef)(null);
    (0, r.useLayoutEffect)(() => {
      e4.current.open !== eR && (e4.current.open = eR, e7(), e3(true));
      let e10 = e8.current;
      if (e8.current = null, "search" === e10 && eQ.current?.focus({ preventScroll: true }), "trigger" === e10 && eq.current?.focus({ preventScroll: true }), "number" === e10) {
        let e11 = eC.current;
        e11?.focus({ preventScroll: true }), e11?.setSelectionRange(e11.value.length, e11.value.length);
      }
    }, [eR, e3, e7]);
    let e9 = (0, u.d)(0), te = (0, u.d)(0), tt = (0, u.d)(0), tn = (0, r.useRef)(false);
    function ti(e10 = "") {
      if (G2 || eR) return;
      eI(e10);
      let t3 = e10 ? null : eO.flatMap((e11) => e11.rows).find((e11) => e11.entry.iso === ep.iso && !e11.key.startsWith("p-")) ?? null;
      eK(t3?.key ?? null), tn.current = true, e8.current = "search", eT(""), eM(true);
    }
    (0, r.useLayoutEffect)(() => {
      let e10 = eR && eY ? eX.current.get(eY) : void 0;
      if (!e10) return void (0, c.i)(tt, 0, { duration: ee || !eR ? 0 : 0.12, ease: A });
      let t3 = e10.offsetTop, n3 = e10.offsetHeight;
      0.05 > tt.get() || ee ? (e9.jump(t3), te.jump(n3)) : ((0, c.i)(e9, t3, I), (0, c.i)(te, n3, I)), (0, c.i)(tt, 1, { duration: 0.12 * !ee, ease: P });
      let i2 = eJ.current;
      i2 && tn.current && (tn.current = false, t3 < i2.scrollTop + 6 ? i2.scrollTop = t3 - 6 : t3 + n3 > i2.scrollTop + i2.clientHeight - 6 && (i2.scrollTop = t3 + n3 - i2.clientHeight + 6));
    }, [eY, te, tt, e9, eR, ee, eO]);
    let tr = (0, r.useCallback)((e10) => {
      e8.current = e10, eM(false);
    }, [eM]);
    function ta(e10) {
      if (e10) {
        if (e10.iso !== ep.iso) {
          eL(Math.sign((eB.get(e10.iso) ?? 0) - (eB.get(ep.iso) ?? 0)) || 1);
          let t3 = j(e10, eh);
          void 0 === f2 ? ec({ iso: e10.iso, digits: t3 }) : ec((e11) => ({ ...e11, digits: t3 })), b2?.(e10.iso), e$(e10, t3), eT(`${e10.name}, +${e10.dial}`);
        }
        tr("number");
      }
    }
    function tl(e10) {
      e10 && (tn.current = true, eK(e10));
    }
    function ts(e10) {
      eI(e10), eK(null), eJ.current && (eJ.current.scrollTop = 0);
      let t3 = e10.trim().toLowerCase(), n3 = t3 && "+" !== t3 ? es.filter((e11) => O(e11, t3)).length : es.length;
      eT(t3 ? n3 ? `${n3} ${1 === n3 ? "country" : "countries"}` : "No matches" : "");
    }
    (0, r.useEffect)(() => {
      if (!eR) return;
      let e10 = (e11) => {
        eF.current?.contains(e11.target) || tr(null);
      };
      return document.addEventListener("pointerdown", e10), () => document.removeEventListener("pointerdown", e10);
    }, [tr, eR]);
    let to = "valid" === e_, tu = !!eN, tc = [Y2 ? er : null, eN ? ea : null].filter(Boolean).join(" ") || void 0, td = (e10) => (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("span", { className: y().flag, "aria-hidden": "true", children: N(e10.iso) }), (0, i.jsxs)("span", { className: y().dial, children: ["+", e10.dial] })] });
    return (0, i.jsxs)("div", { ref: eF, className: [y().field, q].filter(Boolean).join(" "), style: { "--pi-closed-r": "17px" }, "data-open": eR || void 0, "data-disabled": G2 || void 0, onBlur: (e10) => {
      let t3 = e10.relatedTarget;
      eR && t3 && !e10.currentTarget.contains(t3) && tr(null);
    }, children: [(0, i.jsx)("label", { htmlFor: en, className: t2 ? y().srOnly : y().label, children: e2 }), (0, i.jsxs)("div", { ref: eG, className: y().control, "data-invalid": tu || void 0, children: [(0, i.jsxs)(s.PY1.div, { className: y().anchor, style: { width: e0 }, children: [(0, i.jsx)("span", { ref: eZ, className: `${y().trigger} ${y().measure}`, "aria-hidden": "true", children: td(ep) }), (0, i.jsxs)(s.PY1.div, { className: y().shape, style: { width: e1, height: e22, borderRadius: e5 }, children: [(0, i.jsxs)("div", { className: y().lid, children: [(0, i.jsx)("button", { ref: eq, type: "button", className: y().trigger, disabled: G2, inert: eR || void 0, tabIndex: eR ? -1 : 0, "aria-haspopup": "listbox", "aria-expanded": eR, "aria-controls": ei, "aria-label": `Country, ${ep.name} +${ep.dial}`, onClick: () => eR ? tr("trigger") : ti(), onKeyDown: function(e10) {
      if ("ArrowDown" === e10.key || "ArrowUp" === e10.key) {
        e10.preventDefault(), ti();
        return;
      }
      1 !== e10.key.length || " " === e10.key || e10.metaKey || e10.ctrlKey || e10.altKey || (e10.preventDefault(), ti(e10.key));
    }, children: (0, i.jsx)("span", { className: y().slot, "data-hidden": eR || void 0, children: (0, i.jsx)(l.N, { initial: false, custom: eW, children: (0, i.jsx)(s.PY1.span, { className: y().layer, custom: eW, variants: ee ? U : L, initial: "enter", animate: "rest", exit: "exit", transition: ee ? { duration: 0.12 } : { y: I, opacity: { duration: 0.2, ease: P }, filter: { duration: 0.22, ease: P } }, children: td(ep) }, ep.iso) }) }) }), (0, i.jsxs)(s.PY1.div, { className: y().searchRow, inert: !eR || void 0, initial: false, animate: eR ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: ee ? "blur(0px)" : `blur(${T.subtle}px)` }, transition: eR ? { duration: 0.18, ease: P, delay: 0.05 * !ee } : { duration: 0.1, ease: A }, children: [(0, i.jsx)(d.A, { className: y().searchIcon, size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), (0, i.jsx)("input", { ref: eQ, className: y().search, type: "text", role: "combobox", "aria-label": "Search countries or calling codes", "aria-expanded": eR, "aria-controls": ei, "aria-autocomplete": "list", "aria-activedescendant": eR && eY ? el(eY) : void 0, placeholder: "Country or code", value: eE, autoComplete: "off", spellCheck: false, onChange: (e10) => ts(e10.target.value), onKeyDown: function(e10) {
      let t3 = ez.findIndex((e11) => e11.key === eY);
      switch (e10.key) {
        case "ArrowDown":
          e10.preventDefault(), tl(ez[Math.min(ez.length - 1, t3 + 1)]?.key);
          return;
        case "ArrowUp":
          e10.preventDefault(), tl(ez[Math.max(0, t3 - 1)]?.key);
          return;
        case "PageDown":
          e10.preventDefault(), tl(ez[Math.min(ez.length - 1, t3 + 8)]?.key);
          return;
        case "PageUp":
          e10.preventDefault(), tl(ez[Math.max(0, t3 - 8)]?.key);
          return;
        case "Home":
          if (eE) return;
          e10.preventDefault(), tl(ez[0]?.key);
          return;
        case "End":
          if (eE) return;
          e10.preventDefault(), tl(ez[ez.length - 1]?.key);
          return;
        case "Enter":
          e10.preventDefault(), ta(ez[t3]?.entry);
          return;
        case "Escape":
          e10.preventDefault(), e10.stopPropagation(), tr("trigger");
          return;
        case "Tab":
          tr(null);
          return;
      }
    } }), (0, i.jsx)(l.N, { initial: false, children: eE && (0, i.jsx)(s.PY1.button, { type: "button", className: y().clear, "aria-label": "Clear search", onPointerDown: (e10) => e10.preventDefault(), onClick: () => {
      ts(""), eQ.current?.focus();
    }, initial: { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.6, transition: { duration: 0.1 } }, transition: ee ? { duration: 0 } : I, children: (0, i.jsx)(p.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }) }, "clear") }), (0, i.jsx)("button", { type: "button", className: y().closeHit, "aria-label": "Close country list", onClick: () => tr("trigger") })] }), (0, i.jsx)(s.PY1.span, { className: y().chevron, "aria-hidden": "true", initial: false, animate: { rotate: 180 * !!eR }, transition: ee ? { duration: 0 } : I, children: (0, i.jsx)(h.A, { size: 16, strokeWidth: 1.75 }) })] }), (0, i.jsx)(s.PY1.div, { ref: eV, className: y().listFace, inert: !eR || void 0, "aria-hidden": !eR || void 0, initial: false, animate: eR ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: ee ? 0 : -6, filter: ee ? "blur(0px)" : `blur(${T.subtle}px)` }, transition: eR ? { y: M, opacity: { duration: 0.2, ease: P, delay: 0.04 * !ee }, filter: { duration: 0.22, ease: P, delay: 0.04 } } : { duration: 0.1, ease: A }, children: (0, i.jsx)("div", { ref: eJ, className: y().scroll, children: (0, i.jsxs)("div", { id: ei, className: y().options, role: "listbox", "aria-label": "Countries", children: [(0, i.jsx)(s.PY1.span, { className: y().highlight, style: { y: e9, height: te, opacity: tt }, "aria-hidden": "true" }), eO.map((e10) => {
      let t3 = e10.rows.map((e11) => {
        let t4 = e11.entry.iso === ep.iso;
        return (0, i.jsxs)("div", { id: el(e11.key), role: "option", "aria-selected": t4, className: y().option, "data-active": e11.key === eY || void 0, ref: (t5) => {
          t5 ? eX.current.set(e11.key, t5) : eX.current.delete(e11.key);
        }, onPointerMove: (t5) => {
          "mouse" === t5.pointerType && e11.key !== eY && eK(e11.key);
        }, onPointerDown: (e12) => e12.preventDefault(), onClick: () => ta(e11.entry), children: [(0, i.jsx)("span", { className: y().flag, "aria-hidden": "true", children: N(e11.entry.iso) }), (0, i.jsx)("span", { className: y().name, children: e11.entry.name }), (0, i.jsxs)("span", { className: y().meta, children: ["+", e11.entry.dial] }), (0, i.jsx)("span", { className: y().check, "data-on": t4 || void 0, "aria-hidden": "true", children: (0, i.jsx)(m.A, { size: 16, strokeWidth: 1.75 }) })] }, e11.key);
      });
      return e10.label ? (0, i.jsxs)("div", { role: "group", "aria-labelledby": `${et}-${e10.key}`, className: y().group, children: [(0, i.jsx)("div", { id: `${et}-${e10.key}`, className: y().groupLabel, role: "presentation", children: e10.label }), t3] }, e10.key) : (0, i.jsx)("div", { role: "presentation", className: y().group, children: t3 }, e10.key);
    }), 0 === ez.length && (0, i.jsxs)("p", { className: y().empty, children: ["No countries match \u201C", eE.trim(), "\u201D"] })] }) }) })] })] }), (0, i.jsxs)("div", { className: y().numberWrap, children: [(0, i.jsxs)("span", { className: y().guide, "aria-hidden": "true", children: [(0, i.jsx)("span", { className: y().guideTyped, children: ey }), ew] }), (0, i.jsx)("input", { ref: eC, id: en, className: y().number, type: "tel", inputMode: "tel", autoComplete: "tel", value: ey, disabled: G2, required: Z2, "aria-invalid": tu || void 0, "aria-describedby": tc, "aria-label": t2 ? e2 : void 0, onChange: (e10) => (function(e11) {
      let t3 = e11.value;
      if (t3.includes("+") || /^\s*00/.test(t3) && t3.replace(/\D/g, "").length > 6) {
        let e12 = $(t3.slice(Math.max(0, t3.indexOf("+"))), es);
        if (e12 && e12.national) {
          e12.country.iso !== ep.iso && eT(`Country set to ${e12.country.name}`), eP(e12.national, e12.national.length, e12.country);
          return;
        }
      }
      let n3 = e11.selectionStart ?? t3.length;
      eP(t3.replace(/\D/g, ""), t3.slice(0, n3).replace(/\D/g, "").length);
    })(e10.currentTarget), onKeyDown: function(e10) {
      let t3 = e10.currentTarget;
      if ("+" === e10.key && !e10.metaKey && !e10.ctrlKey) {
        e10.preventDefault(), ti("+");
        return;
      }
      let n3 = t3.selectionStart ?? 0;
      if (n3 === (t3.selectionEnd ?? 0) && !e10.metaKey && !e10.ctrlKey && !e10.altKey) {
        if ("Backspace" === e10.key && n3 > 0 && !/\d/.test(t3.value[n3 - 1])) {
          e10.preventDefault();
          let i2 = t3.value.slice(0, n3).replace(/\D/g, "").length;
          i2 > 0 && eP(eh.slice(0, i2 - 1) + eh.slice(i2), i2 - 1);
        }
        if ("Delete" === e10.key && n3 < t3.value.length && !/\d/.test(t3.value[n3])) {
          e10.preventDefault();
          let i2 = t3.value.slice(0, n3).replace(/\D/g, "").length;
          eP(eh.slice(0, i2) + eh.slice(i2 + 1), i2);
        }
      }
    }, onPaste: function(e10) {
      let t3 = e10.clipboardData.getData("text");
      if (!t3) return;
      e10.preventDefault();
      let n3 = e10.currentTarget, i2 = /^\s*(\+|00)/.test(t3) ? $(t3, es) : null;
      if (i2) {
        i2.country.iso !== ep.iso && eT(`Country set to ${i2.country.name}`), eP(i2.national, i2.national.length, i2.country);
        return;
      }
      let r2 = t3.replace(/\D/g, "");
      if (r2.startsWith(ep.dial) && r2.length > j(ep, r2).length && (r2 = r2.slice(ep.dial.length)), r2.length >= Math.min(...k(ep))) return void eP(r2, r2.length);
      let a3 = n3.value.slice(0, n3.selectionStart ?? 0).replace(/\D/g, "").length, l2 = n3.value.slice(0, n3.selectionEnd ?? 0).replace(/\D/g, "").length;
      eP(eh.slice(0, a3) + r2 + eh.slice(l2), a3 + r2.length);
    }, onBlur: (e10) => {
      ex(eh.length > 0), Q?.(e10);
    } }), (0, i.jsx)(l.N, { initial: false, children: to && (0, i.jsx)(s.PY1.span, { className: y().valid, "aria-hidden": "true", initial: ee ? { opacity: 0 } : { opacity: 0, scale: 0.6, filter: `blur(${T.subtle}px)` }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, exit: { opacity: 0, scale: ee ? 1 : 0.8, transition: { duration: 0.1 } }, transition: ee ? { duration: 0.12 } : g.T.spring.snappy, children: (0, i.jsx)(m.A, { size: 16, strokeWidth: 2 }) }, "ok") })] })] }), (0, i.jsx)(l.N, { initial: false, children: Y2 && !eN && (0, i.jsx)(z, { id: er, text: Y2, tone: "hint" }, "hint") }), (0, i.jsx)(l.N, { initial: false, children: eN && (0, i.jsx)(z, { id: ea, text: eN, tone: "error" }, "error") }), V && (0, i.jsx)("input", { type: "hidden", name: V, value: em }), (0, i.jsx)("span", { className: y().srOnly, role: "status", "aria-live": "polite", children: eA || (to ? `Valid ${ep.name} number` : "") })] });
  });
  Y.displayName = "PhoneInput";
  var B = n(55997), F = n.n(B);
  function G() {
    let e2, t2 = (0, a.I)(), [n2, u2] = (0, r.useState)(""), [c2, d2] = (0, r.useState)(false), [p2, h2] = (0, r.useState)("idle"), [m2, f2] = (0, r.useState)("");
    return (0, i.jsx)("div", { className: F().demo, children: (0, i.jsxs)("form", { className: F().form, onSubmit: (e3) => {
      e3.preventDefault(), c2 && "sending" !== p2 && (h2("sending"), window.setTimeout(() => {
        f2(n2), h2("sent");
      }, 900));
    }, noValidate: true, children: [(0, i.jsx)(Y, { label: "Mobile number", value: n2, onValueChange: (e3, t3) => {
      u2(e3), d2(t3.valid), "sent" === p2 && h2("idle");
    }, description: "Type + to search by calling code", name: "phone" }), (0, i.jsxs)("div", { className: F().foot, children: [(0, i.jsx)(o.$, { type: "submit", className: F().submit, disabled: !c2, loading: "sending" === p2, children: "sent" === p2 ? "Resend code" : "Send code" }), (0, i.jsx)(l.N, { initial: false, children: "sent" === p2 && (0, i.jsx)(s.PY1.p, { className: F().sent, role: "status", initial: t2 ? { opacity: 0 } : { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: t2 ? { duration: 0.12 } : g.T.spring.smooth, children: (0, i.jsxs)("span", { className: F().sentInner, children: ["Code sent to ", (e2 = $(m2)) ? `+${e2.country.dial} ${C(e2.country, e2.national)}` : m2] }) }, "sent") })] })] }) });
  }
  let Z = G;
}

__m(__module,__exports,__require);
}