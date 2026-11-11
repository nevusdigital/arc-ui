function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { RichTextEditorDemo: () => ez });
  var r = n(95155), l = n(12115), a = n(18310), o = n(25354), i = n(80642), s = n(15330), c = n(60976), d = n(92298), u = n(64577), m = n(9005), h = n(99314), f = n(79196), p = n(28245), g = n(55809), y = n(92171), b = n(2075), x = n(29165), N = n(93670), E = n(10175), C = n(58309), v = n(5497), k = n(71485), w = n(41644), _ = n(36565), R = n(95112), S = n(67357), A = n(38332), T = n(28786), L = n(91161), j = n(31966), $ = n(92e3), O = n(7770), D = n(53076), H = n.n(D);
  let M = /\u200b/g, P = (e2) => e2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), q = (e2) => /^(https?:|mailto:|tel:|\/|#)/i.test(e2.trim());
  function B(e2) {
    let t2 = [], n2 = P(e2).replace(/`([^`]+)`/g, (e3, n3) => `\0${t2.push(n3) - 1}\0`);
    return (n2 = (n2 = (n2 = (n2 = (n2 = n2.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (e3, t3, n3) => q(n3) ? `<a href="${n3}">${t3}</a>` : t3)).replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g, "<strong>$2</strong>")).replace(/~~(?=\S)([\s\S]*?\S)~~/g, "<s>$1</s>")).replace(/(^|[^\w*])\*(?=\S)([^*]*?\S)\*(?!\*)/g, "$1<em>$2</em>")).replace(/(^|[^\w_])_(?=\S)([^_]*?\S)_(?![\w_])/g, "$1<em>$2</em>")).replace(/\u0000(\d+)\u0000/g, (e3, n3) => `<code>${t2[Number(n3)]}</code>`);
  }
  function I(e2) {
    let t2 = e2.replace(/\r\n?/g, "\n").split("\n"), n2 = [], r2 = [], l2 = () => {
      r2.length && (n2.push(`<p>${B(r2.join(" "))}</p>`), r2.length = 0);
    }, a2 = (e3) => /^\s*([-*+]|\d+[.)])\s+/.test(e3);
    for (let e3 = 0; e3 < t2.length; ) {
      let o2 = t2[e3];
      if (/^\s*```/.test(o2)) {
        l2();
        let r3 = [];
        for (e3++; e3 < t2.length && !/^\s*```/.test(t2[e3]); ) r3.push(t2[e3++]);
        e3++, n2.push(`<pre>${P(r3.join("\n")) || "<br>"}</pre>`);
        continue;
      }
      if (!o2.trim()) {
        l2(), e3++;
        continue;
      }
      let i2 = /^(#{1,6})\s+(.*)$/.exec(o2);
      if (i2) {
        l2();
        let t3 = Math.min(3, i2[1].length);
        n2.push(`<h${t3}>${B(i2[2])}</h${t3}>`), e3++;
        continue;
      }
      if (/^ {0,3}([-*_])( *\1){2,} *$/.test(o2)) {
        l2(), n2.push("<hr>"), e3++;
        continue;
      }
      if (/^\s*>/.test(o2)) {
        l2();
        let r3 = [];
        for (; e3 < t2.length && /^\s*>/.test(t2[e3]); ) r3.push(t2[e3++].replace(/^\s*>\s?/, ""));
        n2.push(`<blockquote>${r3.map(B).join("<br>")}</blockquote>`);
        continue;
      }
      if (a2(o2)) {
        l2();
        let r3 = [];
        for (; e3 < t2.length && a2(t2[e3]); ) r3.push(t2[e3++]);
        n2.push((function(e4) {
          let t3 = e4.map((e5) => {
            let t4 = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/.exec(e5);
            return { indent: t4[1].replace(/\t/g, "  ").length, tag: /\d/.test(t4[2]) ? "ol" : "ul", text: t4[3] };
          }), n3 = "", r4 = [];
          for (let e5 of t3) {
            for (; r4.length > 1 && e5.indent < r4[r4.length - 1].indent; ) n3 += `</li></${r4.pop().tag}>`;
            let t4 = r4[r4.length - 1];
            !t4 || e5.indent > t4.indent ? (n3 += `<${e5.tag}><li>`, r4.push({ indent: e5.indent, tag: e5.tag })) : t4.tag !== e5.tag ? (n3 += `</li></${t4.tag}><${e5.tag}><li>`, t4.tag = e5.tag) : n3 += "</li><li>", n3 += B(e5.text);
          }
          for (; r4.length; ) n3 += `</li></${r4.pop().tag}>`;
          return n3;
        })(r3));
        continue;
      }
      r2.push(o2.trim()), e3++;
    }
    return l2(), n2.join("") || "<p><br></p>";
  }
  function F(e2, t2) {
    let n2 = /^(\s*)([\s\S]*?)(\s*)$/.exec(e2);
    return n2[2] ? `${n2[1]}${t2}${n2[2]}${t2}${n2[3]}` : e2;
  }
  function U(e2) {
    let t2 = "";
    return e2.childNodes.forEach((e3) => {
      if (e3.nodeType === Node.TEXT_NODE) {
        t2 += e3.data.replace(M, "");
        return;
      }
      if (e3.nodeType === Node.ELEMENT_NODE) switch (e3.nodeName) {
        case "BR":
          t2 += "\n";
          break;
        case "STRONG":
        case "B":
          t2 += F(U(e3), "**");
          break;
        case "EM":
        case "I":
          t2 += F(U(e3), "_");
          break;
        case "S":
        case "STRIKE":
        case "DEL":
          t2 += F(U(e3), "~~");
          break;
        case "CODE":
          t2 += `\`${(e3.textContent ?? "").replace(M, "")}\``;
          break;
        case "A":
          t2 += `[${U(e3)}](${e3.getAttribute("href") ?? ""})`;
          break;
        case "UL":
        case "OL":
          break;
        default:
          t2 += U(e3);
      }
    }), t2;
  }
  function K(e2) {
    if (e2.nodeType === Node.TEXT_NODE) return e2.data.replace(M, "").trim();
    if (e2.nodeType !== Node.ELEMENT_NODE) return "";
    switch (e2.nodeName) {
      case "H1":
        return `# ${U(e2).trim()}`;
      case "H2":
        return `## ${U(e2).trim()}`;
      case "H3":
        return `### ${U(e2).trim()}`;
      case "HR":
        return "---";
      case "PRE":
        return `\`\`\`
${(e2.textContent ?? "").replace(M, "").replace(/\n$/, "")}
\`\`\``;
      case "UL":
      case "OL":
        return (function e3(t2, n2) {
          let r2 = 1;
          return Array.from(t2.children).filter((e4) => "LI" === e4.nodeName).map((l2) => {
            let a2 = "OL" === t2.nodeName ? `${r2++}. ` : "- ", o2 = Array.from(l2.children).filter((e4) => "UL" === e4.nodeName || "OL" === e4.nodeName).map((t3) => e3(t3, n2 + " ".repeat(a2.length)));
            return [`${n2}${a2}${U(l2).trim()}`, ...o2].join("\n");
          }).join("\n");
        })(e2, "");
      case "BLOCKQUOTE":
        return (Array.from(e2.children).some((e3) => ee.has(e3.nodeName)) ? Array.from(e2.childNodes).map(K).filter(Boolean).join("\n\n") : U(e2).trim()).split("\n").map((e3) => e3 ? `> ${e3}` : ">").join("\n");
      default:
        return U(e2).trim();
    }
  }
  function W(e2) {
    return Array.from(("string" == typeof e2 ? Y(e2) : e2).childNodes).map(K).filter(Boolean).join("\n\n");
  }
  function Y(e2) {
    let t2 = document.createElement("template");
    t2.innerHTML = e2;
    let n2 = document.createElement("div");
    return n2.appendChild(t2.content), n2;
  }
  let z = (e2, ...t2) => {
    let n2 = e2;
    t2.forEach((e3) => {
      n2.parentNode.insertBefore(e3, n2.nextSibling), n2 = e3;
    });
  }, X = (e2, ...t2) => t2.forEach((t3) => e2.parentNode.insertBefore(t3, e2)), V = (e2, ...t2) => {
    X(e2, ...t2), e2.parentNode.removeChild(e2);
  }, G = (e2, ...t2) => t2.forEach((t3) => e2.appendChild(t3)), Q = { B: "strong", STRONG: "strong", I: "em", EM: "em", S: "s", STRIKE: "s", DEL: "s", CODE: "code", A: "a", BR: "br" }, J = { P: "p", H1: "h1", H2: "h2", H3: "h3", H4: "h3", H5: "h3", H6: "h3", UL: "ul", OL: "ol", LI: "li", BLOCKQUOTE: "blockquote", PRE: "pre", HR: "hr" }, Z = /* @__PURE__ */ new Set(["SCRIPT", "STYLE", "META", "LINK", "TITLE", "TEMPLATE", "IFRAME", "OBJECT", "EMBED", "SVG", "CANVAS", "IMG", "VIDEO", "AUDIO", "INPUT", "BUTTON", "SELECT", "TEXTAREA", "HEAD"]), ee = /* @__PURE__ */ new Set(["P", "H1", "H2", "H3", "LI", "PRE", "BLOCKQUOTE", "DIV", "UL", "OL", "HR"]);
  function et(e2) {
    let t2 = new DOMParser().parseFromString(e2, "text/html").body, n2 = document.createElement("div"), r2 = (e3, t3) => {
      e3.childNodes.forEach((e4) => {
        if (e4.nodeType === Node.TEXT_NODE) return void t3.appendChild(document.createTextNode(e4.data));
        if (e4.nodeType !== Node.ELEMENT_NODE || Z.has(e4.nodeName)) return;
        let n3 = e4.getAttribute("style") ?? "", l3 = Q[e4.nodeName] ?? J[e4.nodeName];
        if ("B" === e4.nodeName && /font-weight:\s*(normal|[1-4]00)/.test(n3) && (l3 = ""), "SPAN" === e4.nodeName && (l3 = /font-weight:\s*(bold|[6-9]00)/.test(n3) ? "strong" : /font-style:\s*italic/.test(n3) ? "em" : /line-through/.test(n3) ? "s" : ""), !l3) return void r2(e4, t3);
        let a3 = document.createElement(l3);
        if ("a" === l3) {
          let n4 = e4.getAttribute("href") ?? "";
          if (!q(n4)) return void r2(e4, t3);
          a3.setAttribute("href", n4);
        }
        "pre" === l3 ? a3.textContent = e4.textContent ?? "" : "br" !== l3 && "hr" !== l3 && r2(e4, a3), t3.appendChild(a3);
      });
    };
    r2(t2, n2);
    let l2 = document.createElement("div"), a2 = null;
    return Array.from(n2.childNodes).forEach((e3) => {
      if (e3.nodeType === Node.ELEMENT_NODE && ee.has(e3.nodeName)) {
        a2 = null, l2.appendChild(e3);
        return;
      }
      (e3.nodeType !== Node.TEXT_NODE || e3.data.trim() || a2) && (a2 || (a2 = document.createElement("p"), l2.appendChild(a2)), a2.appendChild(e3));
    }), l2.querySelectorAll("li > p").forEach((e3) => V(e3, ...Array.from(e3.childNodes))), [l2, ...Array.from(l2.querySelectorAll("ul, ol, blockquote, li"))].forEach((e3) => Array.from(e3.childNodes).forEach((t3) => {
      el(t3) && !t3.data.trim() && (e3 === l2 || "UL" === e3.nodeName || "OL" === e3.nodeName || t3.previousSibling && ee.has(t3.previousSibling.nodeName) || t3.nextSibling && ee.has(t3.nextSibling.nodeName)) && t3.remove();
    })), l2.innerHTML;
  }
  let en = /* @__PURE__ */ new Set(["P", "H1", "H2", "H3", "LI", "PRE", "BLOCKQUOTE", "DIV"]), er = (e2) => !!e2 && e2.nodeType === Node.ELEMENT_NODE, el = (e2) => !!e2 && e2.nodeType === Node.TEXT_NODE;
  function ea(e2, t2, n2) {
    let r2 = 0, l2 = -1, a2 = (o2) => {
      if (l2 >= 0) return;
      if (el(o2)) return void (o2 === t2 ? l2 = r2 + n2 : r2 += o2.data.length);
      if (!er(o2)) return;
      o2 !== e2 && en.has(o2.nodeName) && (r2 += 1), ("BR" === o2.nodeName || "HR" === o2.nodeName) && (r2 += 1);
      let i2 = o2.childNodes;
      for (let e3 = 0; e3 < i2.length; e3++) {
        if (o2 === t2 && e3 === n2) {
          l2 = r2;
          return;
        }
        if (a2(i2[e3]), l2 >= 0) return;
      }
      o2 === t2 && (l2 = r2);
    };
    return a2(e2), l2 < 0 ? r2 : l2;
  }
  function eo(e2, t2) {
    let n2 = 0, r2 = null, l2 = (a3) => {
      if (!r2) {
        if (el(a3)) {
          if (t2 <= n2 + a3.data.length) {
            r2 = [a3, Math.max(0, t2 - n2)];
            return;
          }
          n2 += a3.data.length;
          return;
        }
        if (er(a3)) {
          if (a3 !== e2 && en.has(a3.nodeName) && (n2 += 1), "BR" === a3.nodeName || "HR" === a3.nodeName) {
            if (n2 === t2 && a3.parentNode) {
              r2 = [a3.parentNode, Array.prototype.indexOf.call(a3.parentNode.childNodes, a3)];
              return;
            }
            n2 += 1;
            return;
          }
          a3.childNodes.forEach(l2), !r2 && n2 === t2 && a3 !== e2 && en.has(a3.nodeName) && (r2 = [a3, a3.childNodes.length]);
        }
      }
    };
    if (l2(e2), r2) return r2;
    let a2 = e2.lastChild;
    return a2 && er(a2) && "HR" !== a2.nodeName ? [a2, a2.childNodes.length] : [e2, e2.childNodes.length];
  }
  function ei(e2) {
    let t2 = window.getSelection();
    if (!t2?.rangeCount) return null;
    let n2 = t2.getRangeAt(0);
    return e2.contains(n2.startContainer) && e2.contains(n2.endContainer) ? { start: ea(e2, n2.startContainer, n2.startOffset), end: ea(e2, n2.endContainer, n2.endOffset) } : null;
  }
  function es(e2, t2) {
    let n2 = window.getSelection();
    if (!n2) return;
    let r2 = document.createRange();
    if (t2) {
      let [n3, l2] = eo(e2, t2.start), [a2, o2] = t2.end === t2.start ? [n3, l2] : eo(e2, t2.end);
      r2.setStart(n3, l2), r2.setEnd(a2, o2);
    } else r2.selectNodeContents(e2.lastElementChild ?? e2), r2.collapse(false);
    n2.removeAllRanges(), n2.addRange(r2);
  }
  function ec(e2) {
    let t2 = 0, n2 = window.innerHeight;
    for (let r2 = e2.parentElement; r2; r2 = r2.parentElement) {
      let e3 = getComputedStyle(r2);
      if ("visible" !== e3.overflowY || "visible" !== e3.overflowX) {
        let e4 = r2.getBoundingClientRect();
        t2 = Math.max(t2, e4.top), n2 = Math.min(n2, e4.bottom);
      }
    }
    return { top: t2, bottom: n2 };
  }
  function ed(e2, t2) {
    let n2 = window.getSelection();
    if (!n2) return;
    let r2 = document.createRange();
    r2.setStart(e2, t2), r2.collapse(true), n2.removeAllRanges(), n2.addRange(r2);
  }
  function eu(e2) {
    let t2 = document.createTreeWalker(e2, NodeFilter.SHOW_TEXT).nextNode();
    t2 ? ed(t2, 0) : ed(e2, 0);
  }
  function em(e2, t2) {
    let n2 = t2;
    for (; n2 && n2 !== e2; ) {
      if (er(n2) && en.has(n2.nodeName)) return n2;
      n2 = n2.parentNode;
    }
    return null;
  }
  let eh = (e2) => (e2.textContent ?? "").replace(M, "");
  function ef(e2) {
    "HR" !== e2.nodeName && (eh(e2) || e2.querySelector("br, hr, ul, ol") || e2.appendChild(document.createElement("br")));
  }
  function ep(e2, t2) {
    let n2 = document.createRange();
    return n2.setStart(e2, 0), n2.setEnd(t2.startContainer, t2.startOffset), n2.toString().replace(M, "").replace(/\u00a0/g, " ");
  }
  function eg(e2, t2) {
    for (; e2.firstChild; ) t2.appendChild(e2.firstChild);
  }
  function ey(e2) {
    let t2 = [];
    return e2.replace(/\n$/, "").split("\n").forEach((e3, n2) => {
      n2 && t2.push(document.createElement("br")), e3 && t2.push(document.createTextNode(e3));
    }), t2;
  }
  function eb(e2) {
    let t2 = e2.parentElement, n2 = t2.parentElement, r2 = [];
    for (let t3 = e2.nextSibling; t3; t3 = t3.nextSibling) r2.push(t3);
    if (n2?.nodeName === "LI") {
      if (r2.length) {
        let n3 = document.createElement(t2.nodeName.toLowerCase());
        r2.forEach((e3) => n3.appendChild(e3)), e2.appendChild(n3);
      }
      return z(n2, e2), t2.children.length || t2.remove(), e2;
    }
    let l2 = document.createElement("p"), a2 = [];
    Array.from(e2.childNodes).forEach((e3) => {
      "UL" === e3.nodeName || "OL" === e3.nodeName ? a2.push(e3) : l2.appendChild(e3);
    }), ef(l2);
    let o2 = r2.length || a2.length ? document.createElement(t2.nodeName.toLowerCase()) : null;
    return o2 && (a2.forEach((e3) => e3.childNodes.length && Array.from(e3.childNodes).forEach((e4) => o2.appendChild(e4))), r2.forEach((e3) => o2.appendChild(e3))), z(t2, l2), o2 && z(l2, o2), e2.remove(), t2.children.length || t2.remove(), l2;
  }
  function ex(e2, t2) {
    if ("LI" === e2.nodeName) {
      let n3 = e2.parentElement;
      if ("ul" === t2 || "ol" === t2) {
        if (n3.nodeName.toLowerCase() === t2) return eb(e2);
        let r4 = document.createElement(t2);
        return eg(n3, r4), V(n3, r4), e2;
      }
      let r3 = eb(e2);
      return "P" === r3.nodeName && "p" !== t2 ? ex(r3, t2) : r3;
    }
    if ("ul" === t2 || "ol" === t2) {
      let n3, r3, l2 = document.createElement("li");
      "PRE" === e2.nodeName ? G(l2, ...ey(e2.textContent ?? "")) : eg(e2, l2), ef(l2);
      let a2 = document.createElement(t2);
      return a2.appendChild(l2), V(e2, a2), (n3 = a2.nextElementSibling) && n3.nodeName === a2.nodeName && (eg(n3, a2), n3.remove()), (r3 = a2.previousElementSibling) && r3.nodeName === a2.nodeName && (eg(a2, r3), a2.remove()), l2;
    }
    let n2 = e2.nodeName.toLowerCase() === t2 ? "p" : t2, r2 = document.createElement(n2);
    if ("pre" === n2) {
      let t3, n3;
      t3 = "", (n3 = (e3) => e3.childNodes.forEach((e4) => {
        el(e4) ? t3 += e4.data.replace(M, "") : "BR" === e4.nodeName ? t3 += "\n" : n3(e4);
      }))(e2), r2.textContent = t3.replace(/\n$/, "");
    } else "PRE" === e2.nodeName ? G(r2, ...ey(e2.textContent ?? "")) : eg(e2, r2);
    return ef(r2), V(e2, r2), r2;
  }
  function eN(e2) {
    let t2 = e2.nextElementSibling;
    if (t2 && "P" === t2.nodeName) return t2;
    let n2 = document.createElement("p");
    return n2.appendChild(document.createElement("br")), z(e2, n2), n2;
  }
  function eE(e2) {
    if (!(Array.from(e2.childNodes).some((e3) => el(e3) && e3.data.trim() || er(e3) && !ee.has(e3.nodeName)) || !e2.firstChild || e2.querySelector("span, font, [style], div, b, i, strike"))) return;
    let t2 = ei(e2);
    e2.querySelectorAll("[style]").forEach((e3) => {
      let t3 = e3.getAttribute("style") ?? "";
      "SPAN" === e3.nodeName && /font-weight:\s*(bold|[6-9]00)/.test(t3) ? V(e3, Object.assign(document.createElement("strong"), { innerHTML: e3.innerHTML })) : e3.removeAttribute("style");
    });
    let n2 = (t3, n3) => e2.querySelectorAll(t3).forEach((e3) => {
      let t4 = document.createElement(n3);
      eg(e3, t4), V(e3, t4);
    });
    n2("b", "strong"), n2("i", "em"), n2("strike", "s"), n2(":scope > div", "p"), e2.querySelectorAll("span, font, div").forEach((e3) => V(e3, ...Array.from(e3.childNodes)));
    let r2 = null;
    Array.from(e2.childNodes).forEach((e3) => {
      if (er(e3) && ee.has(e3.nodeName)) {
        r2 = null;
        return;
      }
      !el(e3) || e3.data.trim() || r2 ? (r2 || X(e3, r2 = document.createElement("p")), r2.appendChild(e3)) : e3.remove();
    }), e2.firstChild || (e2.innerHTML = "<p><br></p>"), (e2.contains(document.activeElement) || document.activeElement === e2) && es(e2, t2);
  }
  function eC(e2) {
    let t2 = e2.cloneNode(true);
    t2.querySelectorAll("*").forEach((e3) => {
      Array.from(e3.attributes).forEach((t3) => {
        ("A" !== e3.nodeName || "href" !== t3.name) && e3.removeAttribute(t3.name);
      });
    });
    let n2 = document.createTreeWalker(t2, NodeFilter.SHOW_TEXT), r2 = [];
    for (let e3 = n2.nextNode(); e3; e3 = n2.nextNode()) e3.data = e3.data.replace(M, ""), e3.data || r2.push(e3);
    for (r2.forEach((e3) => e3.remove()), t2.querySelectorAll("p, h1, h2, h3, li, blockquote").forEach((e3) => {
      let t3 = e3.lastChild;
      t3?.nodeName === "BR" && eh(e3) && t3.remove();
    }), t2.querySelectorAll("pre").forEach((e3) => {
      e3.textContent = (e3.textContent ?? "").replace(/\n$/, "");
    }); t2.lastElementChild && "HR" !== t2.lastElementChild.nodeName && !eh(t2.lastElementChild) && t2.children.length > 1; ) t2.lastElementChild.remove();
    return t2;
  }
  function ev(e2) {
    return Array.from(e2.querySelectorAll("p, h1, h2, h3, li, blockquote, pre")).filter((e3) => !e3.querySelector("p, li")).map((e3) => (e3.textContent ?? "").trim()).filter(Boolean).join("\n");
  }
  let ek = { size: 16, strokeWidth: 1.75, "aria-hidden": true }, ew = [{ type: "p", label: "Text", hint: "", keywords: "paragraph plain body", icon: (0, r.jsx)(b.A, { ...ek }) }, { type: "h1", label: "Heading 1", hint: "#", keywords: "title h1 large", icon: (0, r.jsx)(x.A, { ...ek }) }, { type: "h2", label: "Heading 2", hint: "##", keywords: "subtitle h2 section", icon: (0, r.jsx)(N.A, { ...ek }) }, { type: "h3", label: "Heading 3", hint: "###", keywords: "h3 small", icon: (0, r.jsx)(E.A, { ...ek }) }, { type: "ul", label: "Bulleted list", hint: "-", keywords: "bullet unordered ul points", icon: (0, r.jsx)(C.A, { ...ek }) }, { type: "ol", label: "Numbered list", hint: "1.", keywords: "ordered ol steps numbers", icon: (0, r.jsx)(v.A, { ...ek }) }, { type: "blockquote", label: "Quote", hint: ">", keywords: "blockquote citation callout", icon: (0, r.jsx)(k.A, { ...ek }) }, { type: "pre", label: "Code block", hint: "```", keywords: "pre snippet monospace", icon: (0, r.jsx)(w.A, { ...ek }) }, { type: "hr", label: "Divider", hint: "---", keywords: "rule hr line separator", icon: (0, r.jsx)(_.A, { ...ek }) }], { spring: e_, duration: eR, ease: eS, blur: eA } = O.T, eT = [...eS.enter], eL = [...eS.standard], ej = (e2, t2) => {
    let n2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: n2 * n2, damping: 2 * (1 - t2) * n2, mass: 1 };
  }, e$ = ej(e_.morph.visualDuration, 0.12), eO = ej(0.3, 0), eD = ej(e_.smooth.visualDuration, 0), eH = { hidden: (e2) => ({ opacity: 0, x: 18 * e2, filter: `blur(${eA.subtle}px)` }), shown: { opacity: 1, x: 0, filter: "blur(0px)", transition: { x: e$, opacity: { duration: 0.2, ease: eT, delay: 0.03 }, filter: { duration: 0.2, ease: eT, delay: 0.03 } } }, gone: (e2) => ({ opacity: 0, x: -(18 * e2), filter: `blur(${eA.subtle}px)`, transition: { x: e$, opacity: { duration: 0.12, ease: eL }, filter: { duration: 0.12, ease: eL } } }) }, eM = { hidden: { opacity: 0 }, shown: { opacity: 1, transition: { duration: 0.14 } }, gone: { opacity: 0, transition: { duration: 0.1 } } };
  function eP({ direction: e2, reduced: t2, onSize: n2, children: a2 }) {
    let i2 = (0, l.useRef)(null), s2 = (0, f.tF)();
    return (0, l.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3 || !s2) return;
      let t3 = () => n2(e3.offsetWidth, e3.offsetHeight);
      if (t3(), "u" < typeof ResizeObserver) return;
      let r2 = new ResizeObserver(t3);
      return r2.observe(e3), () => r2.disconnect();
    }, [n2, s2]), (0, r.jsx)(o.PY1.div, { ref: i2, className: H().face, custom: e2, variants: t2 ? eM : eH, initial: "hidden", animate: "shown", exit: "gone", inert: !s2 || void 0, children: a2 });
  }
  function eq({ label: e2, pressed: t2, shortcut: n2, onPress: l2, children: a2 }) {
    return (0, r.jsx)("button", { type: "button", className: H().tool, "aria-label": e2, "aria-pressed": t2, title: n2 ? `${e2} (${n2})` : e2, onMouseDown: (e3) => e3.preventDefault(), onClick: l2, children: a2 });
  }
  let eB = (0, l.forwardRef)(function({ value: e2, defaultValue: t2, defaultMarkdown: n2, onChange: s2, onHistoryChange: c2, placeholder: d2 = "Start writing", blockHint: m2 = "Type / for blocks", readOnly: h2 = false, autoFocus: f2 = false, "aria-label": b2 = "Editor", className: E2, style: C2 }, v2) {
    let w2 = !!(0, a.I)(), _2 = (0, l.useId)(), O2 = (0, l.useRef)(null), D2 = (0, l.useRef)(null), P2 = (0, l.useRef)(false), q2 = (0, l.useRef)(false), B2 = (0, l.useRef)(""), F2 = (0, l.useRef)(null), U2 = (0, l.useRef)({ stack: [], index: -1 }), K2 = (0, l.useRef)({ onChange: s2, onHistoryChange: c2 });
    (0, l.useEffect)(() => {
      K2.current = { onChange: s2, onHistoryChange: c2 };
    }, [s2, c2]);
    let [X2, G2] = (0, l.useState)(true), [Q2, J2] = (0, l.useState)({ bold: false, italic: false, strike: false, code: false, link: null, block: "p" }), [Z2, ee2] = (0, l.useState)(null), [en2, ea2] = (0, l.useState)("format"), [eo2, eg2] = (0, l.useState)(""), [ey2, eS2] = (0, l.useState)(null), [eA2, ej2] = (0, l.useState)(0), [eH2, eM2] = (0, l.useState)(""), eB2 = (0, l.useRef)(en2), eI2 = (0, l.useRef)(ey2), eF2 = (0, l.useRef)(null), eU2 = (0, l.useRef)(null), eK2 = (0, l.useRef)(null);
    (0, l.useEffect)(() => {
      eB2.current = en2;
    }, [en2]), (0, l.useEffect)(() => {
      eI2.current = ey2;
    }, [ey2]);
    let eW2 = (0, l.useCallback)(() => {
      let e10 = D2.current;
      if (!e10) return;
      let t3 = eC(e10), n3 = t3.innerHTML, r2 = ev(t3), l2 = !r2 && !t3.querySelector("hr");
      F2.current = n3, G2(l2), K2.current.onChange?.({ html: n3, markdown: W(t3), text: r2, empty: l2 });
    }, []), eY2 = (0, l.useCallback)(() => {
      let { stack: e10, index: t3 } = U2.current;
      K2.current.onHistoryChange?.({ canUndo: t3 > 0, canRedo: t3 < e10.length - 1 });
    }, []), ez2 = (0, l.useCallback)((e10, t3 = false) => {
      let n3 = D2.current;
      if (!n3) return;
      let r2 = { html: n3.innerHTML.replace(/ data-hint=""/g, ""), selection: ei(n3), kind: e10, at: Date.now() }, l2 = U2.current, a2 = l2.stack[l2.index];
      if (a2 && a2.html === r2.html) {
        a2.selection = r2.selection;
        return;
      }
      "type" === e10 && a2?.kind === "type" && l2.index > 0 && r2.at - a2.at < 1e3 && !t3 ? l2.stack[l2.index] = { ...r2, at: a2.at } : (l2.stack = l2.stack.slice(0, l2.index + 1), l2.stack.push(r2), l2.stack.length > 300 && l2.stack.shift(), l2.index = l2.stack.length - 1), eY2();
    }, [eY2]), eX = (0, l.useCallback)((e10) => {
      let t3 = D2.current;
      t3 && (t3.innerHTML = e10.html, eK2.current = null, t3.focus({ preventScroll: true }), es(t3, e10.selection), eW2(), eY2());
    }, [eW2, eY2]), eV = (0, l.useCallback)(() => {
      let e10 = U2.current;
      e10.index <= 0 || (e10.index -= 1, eS2(null), eX(e10.stack[e10.index]), eM2("Undone"));
    }, [eX]), eG = (0, l.useCallback)(() => {
      let e10 = U2.current;
      e10.index >= e10.stack.length - 1 || (e10.index += 1, eS2(null), eX(e10.stack[e10.index]), eM2("Redone"));
    }, [eX]), eQ = (0, l.useCallback)(() => {
      let e10 = D2.current, t3 = O2.current;
      if (!e10 || !t3 || P2.current) return;
      let n3 = window.getSelection(), r2 = n3?.rangeCount && e10.contains(n3.anchorNode) ? n3.getRangeAt(0) : null, l2 = r2 ? em(e10, r2.startContainer) : null, a2 = r2?.collapsed && l2 && !eh(l2) && "PRE" !== l2.nodeName ? l2 : null;
      if (eK2.current !== a2 && (eK2.current?.removeAttribute("data-hint"), a2?.setAttribute("data-hint", ""), eK2.current = a2), !r2) {
        "link" !== eB2.current && ee2(null), eS2(null);
        return;
      }
      let o2 = er(r2.startContainer) ? r2.startContainer : r2.startContainer.parentElement, i2 = (t4) => {
        let n4 = o2?.closest(t4);
        return !!n4 && e10.contains(n4);
      }, s3 = o2?.closest("a"), c3 = l2?.nodeName === "LI" ? l2.parentElement?.nodeName.toLowerCase() ?? "ul" : null, d3 = { bold: i2("strong, b"), italic: i2("em, i"), strike: i2("s, strike, del"), code: i2("code") && !i2("pre"), link: s3 && e10.contains(s3) ? s3.getAttribute("href") : null, block: c3 ?? l2?.nodeName.toLowerCase() ?? "p" };
      J2((e11) => Object.keys(d3).every((t4) => e11[t4] === d3[t4]) ? e11 : d3);
      let u2 = eI2.current;
      if (u2) {
        let e11 = r2.collapsed && r2.startContainer === u2.node && r2.startOffset > u2.offset && "/" === u2.node.data[u2.offset], t4 = e11 ? u2.node.data.slice(u2.offset + 1, r2.startOffset) : "";
        !e11 || t4.length > 24 || /^\s/.test(t4) || /\s\s/.test(t4) ? eS2(null) : t4 !== u2.query && eS2({ ...u2, query: t4 });
      }
      let m3 = !!o2?.closest("pre");
      if (r2.collapsed || q2.current || m3 || eI2.current || h2) {
        "link" !== eB2.current && ee2(null);
        return;
      }
      let f3 = r2.getClientRects(), p2 = f3.length ? f3[0] : r2.getBoundingClientRect(), g2 = r2.getBoundingClientRect(), y2 = t3.getBoundingClientRect(), b3 = p2.top - ec(t3).top < 60;
      ee2({ x: g2.left + g2.width / 2 - y2.left, y: b3 ? g2.bottom - y2.top + 8 : p2.top - y2.top - 8, below: b3 });
    }, [h2]), eJ = (0, l.useCallback)((e10) => {
      let t3 = D2.current;
      if (t3) {
        P2.current = true;
        try {
          e10(), eE(t3);
        } finally {
          P2.current = false;
        }
        ez2("command"), eW2(), eQ();
      }
    }, [eW2, ez2, eQ]), eZ = (0, l.useCallback)((e10) => {
      let t3 = D2.current;
      t3 && (t3.innerHTML = et(e10) || "<p><br></p>", t3.querySelectorAll("p, h1, h2, h3, li, blockquote, pre").forEach((e11) => ef(e11)), eK2.current = null);
    }, []), e0 = (0, l.useRef)({ value: e2, defaultValue: t2, defaultMarkdown: n2, autoFocus: f2 });
    (0, l.useLayoutEffect)(() => {
      let e10 = D2.current;
      if (!e10) return;
      let t3 = e0.current;
      eZ(t3.value ?? t3.defaultValue ?? (void 0 !== t3.defaultMarkdown ? I(t3.defaultMarkdown) : "<p><br></p>")), U2.current = { stack: [{ html: e10.innerHTML, selection: null, kind: "command", at: 0 }], index: 0 }, eW2(), eY2(), t3.autoFocus && (e10.focus(), es(e10, null));
    }, [eW2, eZ, eY2]), (0, l.useEffect)(() => {
      void 0 !== e2 && e2 !== F2.current && (eZ(e2), ez2("command"), eW2());
    }, [eW2, eZ, ez2, e2]);
    let e1 = (0, l.useCallback)((e10) => {
      let t3 = D2.current, n3 = window.getSelection();
      if (!t3 || !e10 || !n3?.rangeCount) return false;
      let r2 = n3.getRangeAt(0);
      if (!r2.collapsed) return false;
      let l2 = em(t3, r2.startContainer);
      if (!l2 || "PRE" === l2.nodeName) return false;
      let a2 = ep(l2, r2), o2 = "P" === l2.nodeName || "DIV" === l2.nodeName;
      if (" " === e10 && o2 && l2.parentElement === t3) {
        let e11 = [[/^# $/, "h1"], [/^## $/, "h2"], [/^### $/, "h3"], [/^[-*+] $/, "ul"], [/^\d+[.)] $/, "ol"], [/^> $/, "blockquote"]].find(([e12]) => e12.test(a2));
        if (e11) {
          let t4 = document.createRange();
          return t4.setStart(l2, 0), t4.setEnd(r2.startContainer, r2.startOffset), t4.deleteContents(), eu(ex(l2, e11[1])), true;
        }
      }
      if ("-" === e10 && o2 && l2.parentElement === t3 && "---" === a2 && "---" === eh(l2)) {
        let e11 = document.createElement("hr");
        return V(l2, e11), eu(eN(e11)), true;
      }
      if ("`" === e10 && o2 && l2.parentElement === t3 && "```" === a2 && "```" === eh(l2)) return l2.textContent = "", eu(ex(l2, "pre")), true;
      let i2 = r2.startContainer;
      if (!el(i2) || i2.parentElement?.closest("code")) return false;
      let s3 = i2.data.slice(0, r2.startOffset);
      for (let [e11, t4] of [[/(\*\*|__)([^*_\s](?:[^*_]*[^*_\s])?)\1$/, "strong"], [/~~([^~\s](?:[^~]*[^~\s])?)~~$/, "s"], [/`([^`]+)`$/, "code"], [/(?:^|[^*\w])(\*([^*\s](?:[^*]*[^*\s])?)\*)$/, "em"], [/(?:^|[^_\w])(_([^_\s](?:[^_]*[^_\s])?)_)$/, "em"]]) {
        let n4 = e11.exec(s3);
        if (!n4) continue;
        let l3 = "em" === t4 ? n4[1] : n4[0], a3 = "em" === t4 ? n4[2] : "code" === t4 || "s" === t4 ? n4[1] : n4[2], o3 = r2.startOffset - l3.length;
        i2.splitText(r2.startOffset);
        let c3 = i2.splitText(o3), d3 = document.createElement(t4);
        d3.textContent = a3, V(c3, d3);
        let u2 = document.createTextNode("\u200B");
        return z(d3, u2), ed(u2, 1), true;
      }
      return false;
    }, []), e22 = (0, l.useCallback)((e10) => {
      let t3 = D2.current, n3 = O2.current, r2 = window.getSelection();
      if ("/" !== e10 || !t3 || !n3 || !r2?.rangeCount) return;
      let l2 = r2.getRangeAt(0), a2 = l2.startContainer;
      if (!l2.collapsed || !el(a2) || a2.parentElement?.closest("pre, code")) return;
      let o2 = l2.startOffset - 1;
      if ("/" !== a2.data[o2] || o2 > 0 && !/[\s\u00a0\u200b]/.test(a2.data[o2 - 1])) return;
      let i2 = document.createRange();
      i2.setStart(a2, o2), i2.setEnd(a2, o2 + 1);
      let s3 = i2.getBoundingClientRect(), c3 = n3.getBoundingClientRect(), d3 = ec(n3), u2 = d3.bottom - s3.bottom < 330 && s3.top - d3.top > d3.bottom - s3.bottom, m3 = u2 ? s3.top - d3.top - 12 : d3.bottom - s3.bottom - 12;
      eS2({ node: a2, offset: o2, query: "", x: Math.max(0, Math.min(s3.left - c3.left - 8, c3.width - 244)), y: u2 ? s3.top - c3.top - 6 : s3.bottom - c3.top + 6, above: u2, max: Math.max(150, m3) }), ej2(0), ee2(null);
    }, []), e3 = (0, l.useMemo)(() => {
      let e10 = ey2?.query.trim().toLowerCase() ?? "";
      return e10 ? ew.filter((t3) => `${t3.label} ${t3.keywords}`.toLowerCase().split(/\s+/).some((t4) => t4.startsWith(e10)) || t3.label.toLowerCase().includes(e10)) : ew;
    }, [ey2?.query]), e6 = Math.min(eA2, Math.max(0, e3.length - 1)), e5 = !!ey2 && e3.length > 0, e4 = (0, l.useCallback)((e10, t3) => {
      let n3 = D2.current, r2 = window.getSelection();
      if (!n3 || !r2?.rangeCount) return;
      let l2 = r2.getRangeAt(0), a2 = ei(n3), o2 = t3 ?? em(n3, l2.startContainer);
      if (!o2) return;
      if ("hr" === e10) {
        let e11 = "LI" === o2.nodeName ? o2.closest("ul, ol") : o2, t4 = document.createElement("hr");
        eh(o2) || "LI" === o2.nodeName ? z(e11, t4) : V(o2, t4), eu(eN(t4));
        return;
      }
      let i2 = l2.collapsed ? [o2] : Array.from(n3.querySelectorAll("p, h1, h2, h3, li, blockquote, pre")).filter((e11) => l2.intersectsNode(e11) && !e11.querySelector("p, li")), s3 = (e11) => "LI" === e11.nodeName ? e11.parentElement.nodeName.toLowerCase() : e11.nodeName.toLowerCase(), c3 = i2.every((t4) => s3(t4) === e10);
      if (i2.forEach((t4) => {
        c3 ? ex(t4, e10) : s3(t4) !== e10 && ex(t4, e10);
      }), es(n3, a2), "pre" === e10) {
        let e11 = em(n3, window.getSelection()?.anchorNode ?? null);
        e11 && !e11.nextElementSibling && eN(e11);
      }
    }, []), e9 = (e10) => {
      let t3 = eI2.current, n3 = D2.current;
      if (!e10 || !t3 || !n3) return;
      let r2 = window.getSelection(), l2 = r2?.rangeCount && r2.getRangeAt(0).startContainer === t3.node ? r2.getRangeAt(0).startOffset : t3.offset + 1 + t3.query.length;
      eS2(null), eJ(() => {
        t3.node.deleteData(t3.offset, Math.max(1, l2 - t3.offset));
        let r3 = em(n3, t3.node);
        ed(t3.node, t3.offset), r3 && (ef(r3), e4(e10.type, r3));
      }), eM2(`${e10.label} added`);
    }, e7 = (e10) => eJ(() => {
      let t3 = D2.current, n3 = window.getSelection();
      if (!n3?.rangeCount) return;
      let r2 = n3.getRangeAt(0);
      if ("code" !== e10) {
        document.execCommand("styleWithCSS", false, "false"), document.execCommand("strike" === e10 ? "strikeThrough" : e10);
        return;
      }
      let l2 = er(r2.startContainer) ? r2.startContainer : r2.startContainer.parentElement, a2 = l2?.closest("code");
      if (a2 && t3.contains(a2) && !a2.closest("pre")) {
        let e11 = document.createTextNode(a2.textContent ?? "");
        V(a2, e11);
        let t4 = document.createRange();
        t4.selectNodeContents(e11), n3.removeAllRanges(), n3.addRange(t4);
        return;
      }
      if (r2.collapsed || em(t3, r2.startContainer) !== em(t3, r2.endContainer)) return;
      let o2 = document.createElement("code");
      o2.textContent = r2.toString(), r2.deleteContents(), r2.insertNode(o2);
      let i2 = document.createRange();
      i2.selectNodeContents(o2), n3.removeAllRanges(), n3.addRange(i2);
    }), e8 = () => {
      let e10 = D2.current, t3 = window.getSelection();
      if (!e10 || !t3?.rangeCount) return;
      let n3 = t3.getRangeAt(0), r2 = er(n3.startContainer) ? n3.startContainer : n3.startContainer.parentElement, l2 = r2?.closest("a");
      l2 && e10.contains(l2) && ((n3 = document.createRange()).selectNodeContents(l2), t3.removeAllRanges(), t3.addRange(n3)), n3.collapsed || (eF2.current = n3.cloneRange(), eg2(l2?.getAttribute("href") ?? ""), ea2("link"), eB2.current = "link", eQ(), requestAnimationFrame(() => eU2.current?.focus({ preventScroll: true })));
    }, te = (e10 = true) => {
      ea2("format"), eB2.current = "format";
      let t3 = D2.current, n3 = eF2.current;
      if (eF2.current = null, e10 && t3 && n3) {
        t3.focus({ preventScroll: true });
        let e11 = window.getSelection();
        e11?.removeAllRanges(), e11?.addRange(n3);
      }
      eQ();
    }, tt = (e10 = false) => {
      let t3, n3 = eF2.current, r2 = D2.current, l2 = (t3 = eo2.trim()) ? /^[a-z][a-z\d+.-]*:/i.test(t3) || t3.startsWith("/") || t3.startsWith("#") ? t3 : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t3) ? `mailto:${t3}` : `https://${t3}` : "";
      if (!n3 || !r2) return void te();
      r2.focus({ preventScroll: true });
      let a2 = window.getSelection();
      a2.removeAllRanges(), a2.addRange(n3), eJ(() => {
        let t4 = er(n3.startContainer) ? n3.startContainer : n3.startContainer.parentElement, o2 = t4?.closest("a");
        if (e10 || !l2) return void (o2 && r2.contains(o2) ? V(o2, ...Array.from(o2.childNodes)) : document.execCommand("unlink"));
        if (o2 && r2.contains(o2) && n3.toString() === o2.textContent) return void o2.setAttribute("href", l2);
        if (em(r2, n3.startContainer) !== em(r2, n3.endContainer)) return void document.execCommand("createLink", false, l2);
        let i2 = n3.extractContents();
        i2.querySelectorAll("a").forEach((e11) => V(e11, ...Array.from(e11.childNodes)));
        let s3 = document.createElement("a");
        s3.setAttribute("href", l2), s3.appendChild(i2), n3.insertNode(s3);
        let c3 = document.createRange();
        c3.setStartAfter(s3), c3.collapse(true), a2.removeAllRanges(), a2.addRange(c3);
      }), eF2.current = null, ea2("format"), eB2.current = "format", ee2(null), eM2(e10 || !l2 ? "Link removed" : "Link added");
    }, tn = (0, l.useCallback)((e10) => {
      let t3 = D2.current, n3 = window.getSelection();
      if (!n3?.rangeCount) return;
      let r2 = n3.getRangeAt(0);
      r2.collapsed || (r2.deleteContents(), r2 = n3.getRangeAt(0));
      let l2 = em(t3, r2.startContainer);
      if (!l2) return;
      if ("PRE" === l2.nodeName) {
        let t4 = l2.textContent ?? "", n4 = ep(l2, r2).length, a3 = t4.slice(0, n4), o3 = t4.slice(n4);
        if (!o3.replace(/\n$/, "") && a3.endsWith("\n") && !e10) {
          l2.textContent = a3.slice(0, -1) || "", ef(l2);
          let e11 = document.createElement("p");
          e11.appendChild(document.createElement("br")), z(l2, e11), eu(e11);
          return;
        }
        l2.textContent = a3 + "\n" + (o3 || "\n"), ed(l2.firstChild, n4 + 1);
        return;
      }
      if (e10) {
        let e11 = document.createElement("br");
        r2.insertNode(e11), (!e11.nextSibling || el(e11.nextSibling) && !e11.nextSibling.data && !e11.nextSibling.nextSibling) && z(e11, document.createElement("br"));
        let t4 = document.createRange();
        t4.setStartAfter(e11), t4.collapse(true), n3.removeAllRanges(), n3.addRange(t4);
        return;
      }
      if ("LI" === l2.nodeName && !eh(l2) && !l2.querySelector("ul, ol")) return void eu(eb(l2));
      if ("BLOCKQUOTE" === l2.nodeName && !eh(l2)) return void eu(ex(l2, "p"));
      let a2 = document.createRange();
      a2.setStart(r2.startContainer, r2.startOffset), a2.setEnd(l2, l2.childNodes.length);
      let o2 = !a2.toString().replace(M, "") && !a2.cloneContents().querySelector("ul, ol"), i2 = /^H[1-3]$/.test(l2.nodeName), s3 = a2.extractContents(), c3 = document.createElement(i2 && o2 ? "p" : l2.nodeName.toLowerCase());
      i2 && o2 || c3.appendChild(s3), i2 && o2 && c3.appendChild(document.createElement("br")), z(l2, c3), l2.querySelectorAll(":scope > br:last-child").forEach((e11) => {
        eh(l2) && e11.remove();
      }), ef(l2), ef(c3), eh(c3) || c3.querySelectorAll("strong, em, s, code, a").forEach((e11) => {
        eh(e11) || e11.remove();
      }), ef(c3), eu(c3);
    }, []), tr = (0, l.useCallback)(() => {
      let e10 = D2.current, t3 = window.getSelection();
      if (!t3?.rangeCount) return false;
      let n3 = t3.getRangeAt(0), r2 = em(e10, n3.startContainer);
      if (!r2 || !(function(e11, t4) {
        if (!t4.collapsed) return false;
        let n4 = document.createRange();
        return n4.setStart(e11, 0), n4.setEnd(t4.startContainer, t4.startOffset), !n4.toString().replace(M, "") && !n4.cloneContents().querySelector("br, hr");
      })(r2, n3)) return false;
      if (/^(H[1-3]|BLOCKQUOTE|PRE)$/.test(r2.nodeName)) return eu(ex(r2, "p")), true;
      if ("LI" === r2.nodeName) return eu(eb(r2)), true;
      let l2 = r2.previousElementSibling;
      if (l2?.nodeName === "HR") return l2.remove(), true;
      if (!l2 && !eh(r2) && r2.nextElementSibling) {
        let e11 = r2.nextElementSibling;
        return r2.remove(), eu(e11), true;
      }
      return false;
    }, []);
    (0, l.useEffect)(() => {
      let e10 = D2.current;
      if (!e10) return;
      let t3 = (t4) => {
        if (!h2) switch (t4.inputType) {
          case "historyUndo":
            t4.preventDefault(), eV();
            return;
          case "historyRedo":
            t4.preventDefault(), eG();
            return;
          case "insertParagraph":
          case "insertLineBreak":
            if (t4.preventDefault(), eI2.current) return;
            eJ(() => tn("insertLineBreak" === t4.inputType));
            return;
          case "deleteContentBackward": {
            let n3 = window.getSelection();
            if (!n3?.rangeCount || !n3.getRangeAt(0).collapsed) return;
            P2.current = true;
            let r2 = false;
            try {
              r2 = tr();
            } finally {
              P2.current = false;
            }
            r2 && (t4.preventDefault(), eE(e10), ez2("command"), eW2(), eQ());
            return;
          }
          case "insertText": {
            let n3 = window.getSelection();
            if (!n3?.rangeCount || em(e10, n3.anchorNode) || e10.querySelector("p, h1, h2, h3, li, pre, blockquote")) return;
            t4.preventDefault();
            let r2 = document.createElement("p"), l2 = document.createTextNode(t4.data ?? "");
            r2.appendChild(l2), e10.replaceChildren(r2), ed(l2, l2.length), ez2("type"), eW2(), eQ();
            return;
          }
          case "insertFromDrop":
          case "formatUnderline":
            t4.preventDefault();
            return;
        }
      };
      return e10.addEventListener("beforeinput", t3), () => e10.removeEventListener("beforeinput", t3);
    }, [tr, eW2, tn, h2, ez2, eG, eJ, eQ, eV]), (0, l.useEffect)(() => {
      let e10 = 0, t3 = () => {
        cancelAnimationFrame(e10), e10 = requestAnimationFrame(eQ);
      }, n3 = () => {
        q2.current && (q2.current = false, t3());
      };
      return document.addEventListener("selectionchange", t3), document.addEventListener("pointerup", n3), () => {
        cancelAnimationFrame(e10), document.removeEventListener("selectionchange", t3), document.removeEventListener("pointerup", n3);
      };
    }, [eQ]), (0, l.useEffect)(() => {
      if ("link" !== en2) return;
      let e10 = (e11) => {
        O2.current?.querySelector(`[data-toolbar="${_2}"]`)?.contains(e11.target) || (eF2.current = null, ea2("format"), eB2.current = "format", ee2(null));
      };
      return document.addEventListener("pointerdown", e10), () => document.removeEventListener("pointerdown", e10);
    }, [en2, _2]), (0, l.useImperativeHandle)(v2, () => ({ focus: () => D2.current?.focus(), getHTML: () => D2.current ? eC(D2.current).innerHTML : "", getMarkdown: () => D2.current ? W(eC(D2.current)) : "", getText: () => D2.current ? ev(eC(D2.current)) : "", setHTML: (e10) => {
      eZ(e10), ez2("command"), eW2();
    }, setMarkdown: (e10) => {
      eZ(I(e10)), ez2("command"), eW2();
    }, clear: () => {
      eZ("<p><br></p>"), ez2("command"), eW2();
    }, undo: eV, redo: eG, get element() {
      return D2.current;
    } }), [eW2, eZ, ez2, eG, eV]);
    let tl = (0, p.d)(0), ta = (0, p.d)(0), to = (0, p.d)(0), ti = (0, p.d)(0), ts = (0, l.useRef)(false), tc = (0, g.G)(to, (e10) => e10 > 0 ? "visible" : "hidden"), td = (0, l.useRef)({ width: 0, height: 0 }), tu = (0, l.useCallback)((e10, t3) => {
      if (td.current = { width: e10, height: t3 }, !ts.current || w2 || 0 === to.get()) {
        to.jump(e10), ti.jump(t3);
        return;
      }
      (0, y.i)(to, e10, e$), (0, y.i)(ti, t3, e$);
    }, [w2, ti, to]), tm = !!Z2 && !h2, th = (0, l.useRef)(0), tf = (0, l.useRef)(null), tp = (0, l.useCallback)(() => {
      let e10 = tf.current;
      if (!e10) return;
      let { width: t3, height: n3 } = td.current;
      tl.get() !== e10.x && tl.jump(e10.x), ta.get() !== e10.y && ta.jump(e10.y), t3 && to.get() !== t3 && (to.jump(t3), ti.jump(n3));
    }, [ti, to, tl, ta]);
    (0, l.useLayoutEffect)(() => {
      if (!Z2) {
        ts.current = false, tf.current = null, cancelAnimationFrame(th.current);
        return;
      }
      let e10 = O2.current, t3 = (td.current.width || 280) / 2, n3 = e10 ? Math.max(t3 + 4, Math.min(Z2.x, e10.offsetWidth - t3 - 4)) : Z2.x;
      if (!ts.current || w2) {
        tf.current = { x: n3, y: Z2.y }, tp(), cancelAnimationFrame(th.current), th.current = requestAnimationFrame(() => {
          tp(), ts.current = true, tf.current = null;
        });
        return;
      }
      (0, y.i)(tl, n3, eO), (0, y.i)(ta, Z2.y, eO);
    }, [Z2, tp, w2, tl, ta]), (0, l.useEffect)(() => {
      Z2 && tp();
    }, [Z2, tp]), (0, l.useEffect)(() => () => cancelAnimationFrame(th.current), []);
    let tg = "link" === en2 ? 1 : -1, ty = (0, l.useRef)(null), tb = (0, p.d)(0), tx = (0, p.d)(0), tN = (0, p.d)("auto"), tE = (0, l.useRef)(null), tC = (0, l.useRef)(null), tv = ey2?.max ?? 320, tk = (0, l.useRef)(false), tw = (0, l.useRef)(false);
    (0, l.useLayoutEffect)(() => {
      let e10 = ty.current?.querySelector(`[data-index="${e6}"]`);
      if (!e10) return;
      if (w2 || !tw.current || 0 === tx.get()) {
        tb.jump(e10.offsetTop), tx.jump(e10.offsetHeight), tw.current = true;
        return;
      }
      (0, y.i)(tb, e10.offsetTop, eO), (0, y.i)(tx, e10.offsetHeight, eO);
      let t3 = tC.current;
      if (t3) {
        let n3 = e10.offsetTop + 6, r2 = n3 + e10.offsetHeight;
        n3 - 6 < t3.scrollTop ? t3.scrollTop = n3 - 6 : r2 + 6 > t3.scrollTop + t3.clientHeight && (t3.scrollTop = r2 + 6 - t3.clientHeight);
      }
    }, [tx, tb, w2, e6, e3, e5]), (0, l.useLayoutEffect)(() => {
      if (!e5) {
        tk.current = false, tw.current = false;
        return;
      }
      let e10 = tE.current;
      if (!e10) return;
      let t3 = () => {
        let t4 = Math.min(e10.offsetHeight, tv);
        if (!tk.current || w2) {
          tN.jump(t4), tk.current = true;
          return;
        }
        (0, y.i)(tN, t4, eD);
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let n3 = new ResizeObserver(t3);
      return n3.observe(e10), () => n3.disconnect();
    }, [tx, tN, w2, tv, e5]);
    let t_ = (e10) => `${_2}-slash-${e10}`, tR = { "--placeholder": JSON.stringify(d2), "--hint": JSON.stringify(m2) };
    return (0, r.jsxs)("div", { ref: O2, className: [H().root, E2].filter(Boolean).join(" "), style: C2, children: [(0, r.jsx)("div", { ref: D2, className: H().editor, style: tR, contentEditable: !h2, suppressContentEditableWarning: true, role: "textbox", "aria-multiline": "true", "aria-label": b2, "aria-readonly": h2 || void 0, "aria-controls": e5 ? `${_2}-slash` : void 0, "aria-activedescendant": e5 ? t_(e6) : void 0, "data-empty": X2 || void 0, spellCheck: true, onInput: (e10) => {
      if (P2.current) return;
      let t3 = D2.current, n3 = e10.nativeEvent;
      if (n3.isComposing) return;
      P2.current = true;
      let r2 = false;
      try {
        eE(t3), "insertText" === n3.inputType && (r2 = e1(n3.data));
      } finally {
        P2.current = false;
      }
      r2 ? (eE(t3), ez2("command"), eM2("Formatted")) : ez2("type", " " === n3.data || n3.inputType !== B2.current), B2.current = n3.inputType, eW2(), r2 || "insertText" !== n3.inputType || e22(n3.data), eQ();
    }, onKeyDown: (e10) => {
      if (h2) return;
      let t3 = e10.metaKey || e10.ctrlKey, n3 = e10.key.toLowerCase();
      if (e5) {
        if ("ArrowDown" === e10.key || "ArrowUp" === e10.key) {
          e10.preventDefault(), ej2((e6 + ("ArrowDown" === e10.key ? 1 : -1) + e3.length) % e3.length);
          return;
        }
        if ("Enter" === e10.key || "Tab" === e10.key) {
          e10.preventDefault(), e9(e3[e6]);
          return;
        }
        if ("Escape" === e10.key) {
          e10.preventDefault(), e10.stopPropagation(), eS2(null);
          return;
        }
      }
      if (t3 && "z" === n3) {
        e10.preventDefault(), e10.shiftKey ? eG() : eV();
        return;
      }
      if (t3 && "y" === n3) {
        e10.preventDefault(), eG();
        return;
      }
      if (t3 && !e10.shiftKey && "b" === n3) {
        e10.preventDefault(), e7("bold");
        return;
      }
      if (t3 && !e10.shiftKey && "i" === n3) {
        e10.preventDefault(), e7("italic");
        return;
      }
      if (t3 && e10.shiftKey && "x" === n3) {
        e10.preventDefault(), e7("strike");
        return;
      }
      if (t3 && "e" === n3) {
        e10.preventDefault(), e7("code");
        return;
      }
      if (t3 && "k" === n3) {
        e10.preventDefault(), e8();
        return;
      }
      if (t3 && "u" === n3) return void e10.preventDefault();
      if (e10.altKey && "F10" === e10.key && Z2) {
        e10.preventDefault(), O2.current?.querySelector(`[data-toolbar="${_2}"] button`)?.focus();
        return;
      }
      if ("Tab" === e10.key) {
        let t4 = D2.current, n4 = window.getSelection(), r2 = n4?.rangeCount ? em(t4, n4.anchorNode) : null;
        r2?.nodeName === "LI" ? (e10.preventDefault(), eJ(() => {
          let n5 = ei(t4);
          e10.shiftKey ? eb(r2) : (function(e11) {
            let t5 = e11.previousElementSibling;
            if (!t5 || "LI" !== t5.nodeName) return;
            let n6 = e11.parentElement.nodeName, r3 = t5.lastElementChild;
            r3 && ("UL" === r3.nodeName || "OL" === r3.nodeName) || (r3 = document.createElement(n6.toLowerCase()), t5.appendChild(r3)), r3.appendChild(e11);
          })(r2), es(t4, n5);
        })) : r2?.nodeName !== "PRE" || e10.shiftKey || (e10.preventDefault(), eJ(() => {
          let e11 = n4.getRangeAt(0);
          e11.deleteContents();
          let t5 = document.createTextNode("  ");
          e11.insertNode(t5), ed(t5, 2), r2.normalize();
        }));
      }
    }, onPaste: (e10) => {
      if (h2) return;
      e10.preventDefault();
      let t3 = D2.current, n3 = e10.clipboardData.getData("text/html"), r2 = e10.clipboardData.getData("text/plain");
      eJ(() => {
        let e11 = window.getSelection();
        if (!e11?.rangeCount) return;
        let l2 = e11.getRangeAt(0);
        l2.deleteContents();
        let a2 = em(t3, l2.startContainer), o2 = /(^|\n)\s*(#{1,3}\s|[-*+]\s|\d+[.)]\s|>|```)|\*\*|`[^`]+`|\[[^\]]+\]\(/.test(r2), i2 = n3 ? et(n3) : o2 || r2.includes("\n\n") ? I(r2) : "", s3 = i2 ? Y(i2) : null, c3 = s3 && 1 === s3.children.length && "P" === s3.firstElementChild.nodeName;
        if (!s3 || !a2 || "PRE" === a2.nodeName || "LI" === a2.nodeName && !c3) {
          let e12 = a2?.nodeName === "PRE" ? r2 : r2.replace(/\s*\n\s*/g, " "), t4 = document.createTextNode(e12);
          l2.insertNode(t4), ed(t4, t4.length);
          return;
        }
        if (c3) {
          let t4 = Array.from(s3.firstElementChild.childNodes), n4 = t4[t4.length - 1], r3 = document.createDocumentFragment();
          if (t4.forEach((e12) => r3.appendChild(e12)), l2.insertNode(r3), n4) {
            let t5 = document.createRange();
            t5.setStartAfter(n4), t5.collapse(true), e11.removeAllRanges(), e11.addRange(t5);
          }
          return;
        }
        let d3 = document.createRange();
        d3.setStart(l2.startContainer, l2.startOffset), d3.setEnd(a2, a2.childNodes.length);
        let u2 = document.createElement("LI" === a2.nodeName ? "p" : a2.nodeName.toLowerCase());
        u2.appendChild(d3.extractContents());
        let m3 = "LI" === a2.nodeName ? a2.closest("ul, ol") : a2, h3 = Array.from(s3.childNodes), f3 = m3;
        h3.forEach((e12) => {
          z(f3, e12), er(e12) && (f3 = e12);
        }), (eh(u2) || u2.querySelector("br")) && (z(f3, u2), ef(u2)), eh(a2) || "P" !== a2.nodeName || a2.remove();
        let p2 = document.createRange();
        p2.selectNodeContents(f3), p2.collapse(false), e11.removeAllRanges(), e11.addRange(p2);
      });
    }, onDrop: (e10) => e10.preventDefault(), onPointerDown: () => {
      q2.current = true;
    }, onCompositionEnd: () => {
      ez2("type", true), eW2();
    } }), (0, r.jsx)("span", { className: H().srOnly, "aria-live": "polite", children: eH2 }), (0, r.jsx)(i.N, { children: tm && (0, r.jsx)(o.PY1.div, { "data-toolbar": _2, role: "toolbar", "aria-label": "Formatting", className: H().toolbar, "data-below": Z2.below || void 0, style: { left: tl, top: ta, width: to, height: ti, visibility: tc, transformOrigin: Z2.below ? "50% 0" : "50% 100%" }, initial: w2 ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: Z2.below ? -4 : 4 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: w2 ? { opacity: 0 } : { opacity: 0, scale: 0.96, transition: { duration: 0.8 * eR.exit, ease: eL } }, transition: w2 ? { duration: eR.fast } : { ...e_.snappy, opacity: { duration: eR.fast, ease: eT } }, onKeyDown: (e10) => {
      if ("format" !== en2) return;
      let t3 = Array.from(e10.currentTarget.querySelectorAll("button")), n3 = t3.indexOf(document.activeElement);
      "ArrowRight" === e10.key || "ArrowLeft" === e10.key ? (e10.preventDefault(), t3[(n3 + ("ArrowRight" === e10.key ? 1 : -1) + t3.length) % t3.length]?.focus()) : "Escape" === e10.key && (e10.preventDefault(), D2.current?.focus(), eQ());
    }, children: (0, r.jsx)(i.N, { initial: false, custom: tg, children: "format" === en2 ? (0, r.jsx)(eP, { direction: tg, reduced: w2, onSize: tu, children: (0, r.jsxs)("div", { className: H().row, children: [(0, r.jsx)(eq, { label: "Bold", pressed: Q2.bold, shortcut: "\u2318B", onPress: () => e7("bold"), children: (0, r.jsx)(R.A, { ...ek }) }), (0, r.jsx)(eq, { label: "Italic", pressed: Q2.italic, shortcut: "\u2318I", onPress: () => e7("italic"), children: (0, r.jsx)(S.A, { ...ek }) }), (0, r.jsx)(eq, { label: "Strikethrough", pressed: Q2.strike, shortcut: "\u2318\u21E7X", onPress: () => e7("strike"), children: (0, r.jsx)(A.A, { ...ek }) }), (0, r.jsx)(eq, { label: "Inline code", pressed: Q2.code, shortcut: "\u2318E", onPress: () => e7("code"), children: (0, r.jsx)(T.A, { ...ek }) }), (0, r.jsx)(eq, { label: Q2.link ? "Edit link" : "Link", pressed: !!Q2.link, shortcut: "\u2318K", onPress: e8, children: (0, r.jsx)(L.A, { ...ek }) }), (0, r.jsxs)("span", { className: H().blockTools, children: [(0, r.jsx)("span", { className: H().divider, "aria-hidden": "true" }), (0, r.jsx)(eq, { label: "Heading 1", pressed: "h1" === Q2.block, onPress: () => eJ(() => e4("h1")), children: (0, r.jsx)(x.A, { ...ek }) }), (0, r.jsx)(eq, { label: "Heading 2", pressed: "h2" === Q2.block, onPress: () => eJ(() => e4("h2")), children: (0, r.jsx)(N.A, { ...ek }) }), (0, r.jsx)(eq, { label: "Quote", pressed: "blockquote" === Q2.block, onPress: () => eJ(() => e4("blockquote")), children: (0, r.jsx)(k.A, { ...ek }) })] })] }) }, "format") : (0, r.jsx)(eP, { direction: tg, reduced: w2, onSize: tu, children: (0, r.jsxs)("form", { className: H().linkRow, onSubmit: (e10) => {
      e10.preventDefault(), tt();
    }, children: [(0, r.jsx)("button", { type: "button", className: H().tool, "aria-label": "Back to formatting", onClick: () => te(), children: (0, r.jsx)(j.A, { ...ek }) }), (0, r.jsx)("input", { ref: eU2, className: H().linkInput, value: eo2, onChange: (e10) => eg2(e10.target.value), onKeyDown: (e10) => {
      "Escape" === e10.key && (e10.preventDefault(), e10.stopPropagation(), te());
    }, placeholder: "Paste or type a link", "aria-label": "Link address", inputMode: "url", autoComplete: "off", spellCheck: false }), Q2.link && (0, r.jsx)("button", { type: "button", className: H().tool, "aria-label": "Remove link", onClick: () => tt(true), children: (0, r.jsx)($.A, { ...ek }) }), (0, r.jsx)("button", { type: "submit", className: H().apply, "aria-label": "Apply link", "data-ready": !!eo2.trim() || void 0, children: (0, r.jsx)(u.A, { size: 16, strokeWidth: 2, "aria-hidden": "true" }) })] }) }, "link") }) }, "toolbar") }), (0, r.jsx)(i.N, { children: e5 && ey2 && (0, r.jsx)(o.PY1.div, { ref: tC, className: H().slash, "data-above": ey2.above || void 0, style: { left: ey2.x, top: ey2.y, height: tN, maxHeight: tv, transformOrigin: ey2.above ? "16px 100%" : "16px 0" }, initial: w2 ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: ey2.above ? 4 : -4 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: w2 ? { opacity: 0 } : { opacity: 0, scale: 0.97, transition: { duration: 0.8 * eR.exit, ease: eL } }, transition: w2 ? { duration: eR.fast } : { ...e_.snappy, opacity: { duration: eR.fast, ease: eT } }, onMouseDown: (e10) => e10.preventDefault(), children: (0, r.jsx)("div", { ref: tE, className: H().slashBody, children: (0, r.jsxs)("ul", { ref: ty, id: `${_2}-slash`, role: "listbox", "aria-label": "Blocks", className: H().slashList, children: [(0, r.jsx)(o.PY1.li, { "aria-hidden": "true", className: H().slashHighlight, style: { y: tb, height: tx } }), e3.map((e10, t3) => (0, r.jsxs)("li", { id: t_(t3), role: "option", "aria-selected": t3 === e6, "data-index": t3, className: H().slashOption, onPointerMove: () => {
      t3 !== e6 && ej2(t3);
    }, onClick: () => e9(e10), children: [(0, r.jsx)("span", { className: H().slashIcon, children: e10.icon }), (0, r.jsx)("span", { className: H().slashLabel, children: e10.label }), e10.hint && (0, r.jsx)("kbd", { className: H().slashHint, children: e10.hint })] }, e10.type))] }) }) }, `${ey2.offset}-${ey2.y}`) })] });
  });
  var eI = n(86196), eF = n.n(eI), eU = n(55665);
  let eK = `# Release notes

Version 2.4 ships **Thursday**. Select any text to format it, or type \`/\` on an empty line for blocks.

## What changed

- Exports stream up to _one million_ rows
- Shared views keep their filters
- Comments on [dashboards](https://example.com/changelog)

> Keep the public note under 120 words.`, eW = { size: 16, strokeWidth: 1.75, "aria-hidden": true }, eY = [{ value: "markdown", label: "Markdown" }, { value: "html", label: "HTML" }];
  function ez() {
    let e2 = (0, a.I)(), t2 = (0, l.useRef)(null), [n2, f2] = (0, l.useState)({ html: "", markdown: "", text: "", empty: true }), [p2, g2] = (0, l.useState)({ canUndo: false, canRedo: false }), [y2, b2] = (0, l.useState)("markdown"), [x2, N2] = (0, l.useState)("idle"), E2 = (0, l.useRef)(0);
    (0, l.useEffect)(() => () => window.clearTimeout(E2.current), []);
    let C2 = n2.text.split(/\s+/).filter(Boolean).length, v2 = "markdown" === y2 ? n2.markdown : n2.html.replace(/<\/(p|h1|h2|h3|ul|ol|li|blockquote|pre)>/g, "</$1>\n").replace(/<(ul|ol)>/g, "<$1>\n").replace(/<hr>/g, "<hr>\n").trim(), k2 = async () => {
      window.clearTimeout(E2.current);
      try {
        await (0, eU.a)(v2), N2("done");
      } catch {
        N2("failed");
      }
      E2.current = window.setTimeout(() => N2("idle"), 1600);
    }, w2 = e2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${O.T.blur.subtle}px)` };
    return (0, r.jsx)("div", { className: eF().demo, children: (0, r.jsxs)("div", { className: eF().card, children: [(0, r.jsxs)("header", { className: eF().header, children: [(0, r.jsxs)("div", { className: eF().history, children: [(0, r.jsx)("button", { type: "button", className: eF().icon, "aria-label": "Undo", title: "Undo (\u2318Z)", disabled: !p2.canUndo, onMouseDown: (e3) => e3.preventDefault(), onClick: () => t2.current?.undo(), children: (0, r.jsx)(s.A, { ...eW }) }), (0, r.jsx)("button", { type: "button", className: eF().icon, "aria-label": "Redo", title: "Redo (\u2318\u21E7Z)", disabled: !p2.canRedo, onMouseDown: (e3) => e3.preventDefault(), onClick: () => t2.current?.redo(), children: (0, r.jsx)(c.A, { ...eW }) }), (0, r.jsx)("button", { type: "button", className: eF().icon, "aria-label": "Reset sample", title: "Reset sample", onClick: () => {
      t2.current?.setMarkdown(eK), t2.current?.focus();
    }, children: (0, r.jsx)(d.A, { ...eW }) })] }), (0, r.jsxs)("p", { className: eF().count, "aria-live": "polite", children: [(0, r.jsx)("span", { className: eF().number, children: C2 }), " ", 1 === C2 ? "word" : "words"] })] }), (0, r.jsxs)("div", { className: eF().body, children: [(0, r.jsx)("div", { className: eF().writer, children: (0, r.jsx)(eB, { ref: t2, defaultMarkdown: eK, onChange: f2, onHistoryChange: g2, "aria-label": "Release notes", placeholder: "Write release notes" }) }), (0, r.jsxs)("section", { className: eF().output, "aria-label": "Output", children: [(0, r.jsxs)("div", { className: eF().outputBar, children: [(0, r.jsx)("div", { className: eF().segments, role: "radiogroup", "aria-label": "Output format", children: eY.map((t3) => (0, r.jsxs)("button", { type: "button", role: "radio", "aria-checked": y2 === t3.value, className: eF().segment, onClick: () => b2(t3.value), children: [y2 === t3.value && (0, r.jsx)(o.PY1.span, { layoutId: "rte-output-highlight", className: eF().segmentHighlight, transition: e2 ? { duration: 0 } : O.T.spring.morph }), (0, r.jsx)("span", { className: eF().segmentLabel, children: t3.label })] }, t3.value)) }), (0, r.jsx)("button", { type: "button", className: eF().copy, "data-state": x2, onClick: k2, "aria-label": `Copy ${"markdown" === y2 ? "Markdown" : "HTML"}`, children: (0, r.jsx)(i.N, { initial: false, mode: "popLayout", children: (0, r.jsx)(o.PY1.span, { className: eF().copyFace, initial: w2, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { ...w2, transition: { duration: O.T.duration.fast } }, transition: e2 ? { duration: 0.12 } : O.T.spring.snappy, children: "done" === x2 ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(u.A, { ...eW }), "Copied"] }) : "failed" === x2 ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(m.A, { ...eW }), "Failed"] }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(h.A, { ...eW }), "Copy"] }) }, x2) }) })] }), (0, r.jsx)(i.N, { initial: false, mode: "popLayout", children: (0, r.jsx)(o.PY1.pre, { className: eF().source, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: O.T.duration.fast }, children: (0, r.jsx)("code", { children: v2 }) }, y2) })] })] })] }) });
  }
}

__m(__module,__exports,__require);
}