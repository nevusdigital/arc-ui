function(__module,__exports,__require){
"use strict";
const __m = (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { LinkUnfurlDemo: () => A, default: () => $ });
  var n = r(95155), a = r(12115), i = r(47650), l = r(18310), s = r(94088), o = r(9005), d = r(36619), c = r(38158), u = r(64577), p = r(24626), f = r.n(p);
  let h = [
    {
      url: "https://www.airbnb.com/rooms/48213907",
      site: "Airbnb",
      title: "Rooftop loft in Alfama with river views",
      description: "Entire loft for 8 guests. 4 bedrooms, a shared terrace, and a 6 minute walk to the tram.",
      image: "media/photos/lisbon-rooftops.jpg",
      imageAlt: "Terracotta rooftops of Lisbon stepping down to the river",
      favicon: "block-logos/airbnb-color.svg"
    },
    {
      url: "https://www.figma.com/design/q8Rk2/Offsite-itinerary",
      site: "Figma",
      title: "Offsite itinerary, day by day",
      description: "Design file with 14 frames. Edited by Sofia Ramirez 2 hours ago.",
      image: "media/photos/lisbon-tram.jpg",
      imageAlt: "A yellow tram climbing a narrow Lisbon street",
      favicon: "block-logos/figma-color.svg"
    },
    {
      url: "https://open.spotify.com/playlist/3cEYpjA9oz9GiPac4AsH4n",
      site: "Spotify",
      title: "Lisbon evenings",
      description: "Playlist by Daniel Kim. 42 songs, 2 hr 51 min.",
      image: "media/photos/sea-at-dusk.jpg",
      imageAlt: "The sea at dusk under a soft pink sky",
      favicon: "block-logos/spotify-color.svg",
      duration: "2:51:06"
    }
  ], m = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i, g = "cubic-bezier(.16, 1, .3, 1)", v = "cubic-bezier(.22, 1, .36, 1)", b = "cubic-bezier(.7, 0, .84, 0)", w = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="8" cy="8" r="6.3"/><path d="M1.9 8h12.2M8 1.7c1.8 1.9 2.6 3.9 2.6 6.3S9.8 12.4 8 14.3M8 1.7C6.2 3.6 5.4 5.6 5.4 8s.8 4.4 2.6 6.3"/></svg>', y = (e2) => e2 < 0 ? 0 : e2 > 1 ? 1 : e2, k = (e2) => {
    try {
      return new URL(e2).hostname.replace(/^www\./, "");
    } catch {
      return e2;
    }
  }, x = (e2) => e2.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, ""), _ = (e2, t2) => x(e2).toLowerCase() === x(t2).toLowerCase();
  function C({
    label: e2 = "Message #lisbon-offsite",
    placeholder: t2 = "Message #lisbon-offsite",
    defaultValue: r2 = "Found a place for the offsite, take a look",
    samples: p2 = h,
    resolve: E2,
    autoExpand: N2 = true,
    autoPlay: A2 = true,
    speed: $2 = 1,
    paused: j = false,
    accent: R,
    sendLabel: M = "Send message",
    onSend: T,
    className: L,
    style: S
  }) {
    let F = (0, l.I)() ?? false, I = (0, a.useId)(), P = `${I}-hint`, z = (0, a.useRef)(null), D = (0, a.useRef)(null), O = (0, a.useRef)(null), [q, B] = (0, a.useState)([]), [W, H] = (0, a.useState)(""), [K, U] = (0, a.useState)(!r2), [X, Y] = (0, a.useState)("idle"), [V, G] = (0, a.useState)(""), [Q] = (0, a.useState)(() => ({
      __html: r2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + (r2 ? " " : "")
    })), Z = (0, a.useRef)(q);
    (0, a.useLayoutEffect)(() => {
      Z.current = q;
    }, [q]);
    let J = (0, a.useRef)(/* @__PURE__ */ new Map()), ee = (0, a.useRef)(/* @__PURE__ */ new Map()), et = (0, a.useRef)(0), er = (0, a.useRef)(false), en = (0, a.useRef)(true), ea = (0, a.useRef)(true), ei = (0, a.useRef)(null), el = (0, a.useRef)({
      reduce: F,
      paused: j,
      speed: $2,
      autoExpand: N2,
      resolve: E2,
      samples: p2,
      onSend: T
    });
    (0, a.useLayoutEffect)(() => {
      el.current = {
        reduce: F,
        paused: j,
        speed: $2,
        autoExpand: N2,
        resolve: E2,
        samples: p2,
        onSend: T
      };
    });
    let es = (0, a.useRef)(() => {
    }), eo = (0, a.useRef)(0), ed = (0, a.useRef)(0), ec = () => ea.current && !el.current.reduce && !el.current.paused, eu = (e3) => D.current?.querySelector(`[data-link-id="${e3}"]`) ?? null, ep = (e3) => H((t3) => t3 === e3 ? `${e3}\xA0` : e3), ef = (0, a.useCallback)(() => {
      let e3 = D.current, t3 = [];
      for (let r3 of (J.current.forEach((r4, n2) => {
        if (!r4.wrap || !r4.plate || !r4.card) return;
        let a2 = r4.card.offsetWidth, i2 = r4.card.offsetHeight, l2 = r4.wrap.getBoundingClientRect(), s2 = e3?.querySelector(`[data-link-id="${n2}"]`) ?? null, o2 = s2?.firstElementChild, d2 = r4.card.querySelector("[data-fav]"), c2 = 0, u2 = 0, p3 = Math.min(a2, 132), f2 = 26, h2 = 0, m2 = 0;
        if (o2 && o2.isConnected && d2) {
          let e4 = o2.getBoundingClientRect(), t4 = o2.firstElementChild.getBoundingClientRect();
          c2 = d2.offsetLeft - (t4.left - e4.left), u2 = d2.offsetTop - (t4.top - e4.top), p3 = Math.min(e4.width, a2 - Math.max(0, c2)), f2 = Math.min(e4.height, i2), h2 = e4.left - l2.left - c2, m2 = e4.top - l2.top - u2;
        }
        t3.push({
          m: r4,
          W: a2,
          H: i2,
          sx: c2,
          sy: u2,
          sw: p3,
          sh: f2,
          tx: h2,
          ty: m2,
          chip: s2
        });
      }), t3)) {
        let { m: e4, W: t4, H: n2 } = r3, a2 = y(e4.p), i2 = 1 - Math.pow(1 - a2, 1.6), l2 = Math.pow(a2, 1.35), s2 = r3.sx * (1 - i2), o2 = r3.sw + (t4 - r3.sw) * i2, d2 = r3.sy * (1 - l2), c2 = r3.sh + (n2 - r3.sh) * l2, u2 = r3.tx * (1 - i2), p3 = r3.ty * (1 - l2), f2 = r3.sh / 2 + (18 - r3.sh / 2) * a2, h2 = y(a2 / 0.1), m2 = a2 > 5e-4;
        e4.wrap.style.height = `${((n2 + 10) * l2).toFixed(2)}px`;
        let g2 = e4.plate.style;
        g2.transform = `translate3d(${(s2 + u2).toFixed(2)}px, ${(d2 + p3).toFixed(2)}px, 0)`, g2.width = `${o2.toFixed(2)}px`, g2.height = `${c2.toFixed(2)}px`, g2.borderRadius = `${f2.toFixed(2)}px`, g2.opacity = String(h2), g2.setProperty(
          "--lift",
          (a2 > 0 && a2 < 1 ? Math.sin(Math.PI * a2) : 0).toFixed(3)
        );
        let v2 = e4.card;
        v2.style.transform = `translate3d(${u2.toFixed(2)}px, ${p3.toFixed(2)}px, 0)`, v2.style.clipPath = `inset(${d2.toFixed(2)}px ${(t4 - s2 - o2).toFixed(2)}px ${(n2 - d2 - c2).toFixed(2)}px ${s2.toFixed(2)}px round ${f2.toFixed(2)}px)`, v2.style.opacity = String(h2), v2.style.visibility = m2 ? "visible" : "hidden", v2.inert === m2 && (v2.inert = !m2), e4.body && (e4.body.style.opacity = y((l2 - 0.15) / 0.55).toFixed(3)), e4.media && (e4.media.style.transform = `scale(${(1.08 - 0.08 * l2).toFixed(4)})`), r3.chip && (r3.chip.dataset.expanded = 1 === e4.target ? "true" : "false");
      }
    }, []), eh = (0, a.useCallback)(
      (e3) => {
        eo.current = 0;
        let t3 = ed.current ? Math.min(0.034, Math.max(1e-3, (e3 - ed.current) / 1e3)) : 1 / 60;
        ed.current = e3;
        let r3 = el.current.speed || 1, n2 = false, a2 = [];
        J.current.forEach((e4) => {
          if (!e4.card) return;
          if (e4.dragging) {
            n2 = true;
            return;
          }
          if (e4.p === e4.target && 0 === e4.v) {
            e4.settle && (a2.push(e4.settle), e4.settle = null);
            return;
          }
          let i2 = (1 === e4.target ? 9.5 : 13) * r3, l2 = -i2 * i2 * (e4.p - e4.target) - 2 * i2 * e4.v;
          e4.v += l2 * t3, e4.p += e4.v * t3, 3e-4 > Math.abs(e4.p - e4.target) && 0.01 > Math.abs(e4.v) && (e4.p = e4.target, e4.v = 0), n2 = true;
        }), ef(), a2.forEach((e4) => e4()), n2 && (eo.current = requestAnimationFrame((e4) => es.current(e4)));
      },
      [ef]
    );
    (0, a.useLayoutEffect)(() => {
      es.current = eh;
    }, [eh]);
    let em = (0, a.useCallback)(() => {
      if (!ec()) {
        let e3 = [];
        J.current.forEach((t3) => {
          !t3.dragging && t3.card && (t3.p = t3.target, t3.v = 0, t3.settle && (e3.push(t3.settle), t3.settle = null));
        }), ef(), e3.forEach((e4) => e4());
        return;
      }
      eo.current || (ed.current = 0, eo.current = requestAnimationFrame(eh));
    }, [ef, eh]), eg = (e3) => {
      let t3 = J.current.get(e3);
      return t3 || (t3 = {
        p: 0,
        v: 0,
        target: 0,
        wrap: null,
        plate: null,
        card: null,
        body: null,
        media: null,
        dragging: false,
        settle: null
      }, J.current.set(e3, t3)), t3;
    }, ev = (e3, t3) => (r3) => {
      if (!r3) return;
      let n2 = eg(e3);
      n2[t3] !== r3 && (n2[t3] = r3, n2.wrap && n2.plate && n2.card && em());
    }, eb = (0, a.useCallback)(
      (e3, t3, r3 = true) => {
        let n2 = Z.current.find((t4) => t4.id === e3);
        if (!n2 || "ready" !== n2.status) return;
        B((r4) => r4.map((r5) => r5.id === e3 ? { ...r5, expanded: t3 } : r5));
        let a2 = eg(e3);
        a2.target = +!!t3, a2.settle = null;
        let i2 = eu(e3);
        i2 && (i2.dataset.expanded = t3 ? "true" : "false"), r3 && n2.preview && ep(
          t3 ? `Preview shown. ${n2.preview.site}, ${n2.preview.title}.` : `Preview collapsed into the link. ${n2.preview.title}.`
        ), em();
      },
      [em]
    ), ew = (0, a.useCallback)((e3) => {
      ee.current.get(e3)?.abort(), ee.current.delete(e3), J.current.delete(e3), B((t3) => t3.filter((t4) => t4.id !== e3));
    }, []), ey = (e3) => {
      let t3 = eu(e3);
      t3 && (t3.dataset.status = "failed", t3.firstElementChild.firstElementChild.innerHTML = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><path d="M6.6 4.2 7.8 3a3 3 0 0 1 4.2 4.2l-1.2 1.2M9.4 11.8 8.2 13A3 3 0 0 1 4 8.8l1.2-1.2M2.5 2.5l11 11"/></svg>', t3.setAttribute(
        "aria-label",
        `${x(t3.dataset.url ?? "")}, no preview. Click to try again.`
      ));
    }, ek = (0, a.useCallback)(
      (e3, t3) => {
        ee.current.get(e3)?.abort();
        let r3 = new AbortController();
        ee.current.set(e3, r3);
        let { resolve: n2, samples: a2, speed: i2 } = el.current;
        (n2 ? n2(t3, r3.signal) : (async () => {
          let e4, n3;
          return await (e4 = 1150 / (i2 || 1), n3 = r3.signal, new Promise((t4, r4) => {
            let a3 = window.setTimeout(t4, e4);
            n3.addEventListener(
              "abort",
              () => {
                window.clearTimeout(a3), r4(Error("aborted"));
              },
              { once: true }
            );
          })), a2.find((e5) => _(e5.url, t3)) ?? (function(e5) {
            let t4 = k(e5), r4 = t4;
            try {
              let t5 = new URL(e5).pathname.split("/").filter(Boolean).pop();
              if (t5) {
                let e6 = decodeURIComponent(t5).replace(/\.[a-z]+$/i, "").replace(/[-_+]+/g, " ").trim();
                e6 && /[a-z]/i.test(e6) && (r4 = e6.charAt(0).toUpperCase() + e6.slice(1));
              }
            } catch {
            }
            return { url: e5, site: t4, title: r4, description: x(e5) };
          })(t3);
        })()).then(async (e4) => {
          if (e4?.image) {
            let t4 = new Image();
            t4.src = e4.image, await Promise.race([
              t4.decode().catch(() => void 0),
              new Promise((e5) => window.setTimeout(e5, 1500))
            ]);
          }
          return e4;
        }).then((n3) => {
          if (!en.current || r3.signal.aborted || !Z.current.some((t4) => t4.id === e3))
            return;
          if (ee.current.delete(e3), !n3) {
            ey(e3), B(
              (t4) => t4.map((t5) => t5.id === e3 ? { ...t5, status: "failed" } : t5)
            ), ep(`No preview for ${k(t3)}. The link stays in the message.`);
            return;
          }
          let a3 = { ...n3, url: n3.url || t3 };
          ((e4, t4) => {
            let r4 = eu(e4);
            if (!r4) return;
            r4.dataset.status = "ready";
            let n4 = r4.firstElementChild, a4 = n4.firstElementChild, i4 = n4.lastElementChild, l3 = n4.getBoundingClientRect().width;
            if (a4.textContent = "", t4.favicon) {
              let e5 = document.createElement("img");
              e5.src = t4.favicon, e5.alt = "", e5.width = 16, e5.height = 16, e5.draggable = false, a4.appendChild(e5);
            } else
              a4.textContent = t4.site.charAt(0).toUpperCase(), a4.dataset.mono = "true";
            if (i4.textContent = t4.title, r4.setAttribute("aria-label", `${t4.title}, ${t4.site} link`), ec()) {
              let e5 = n4.getBoundingClientRect().width, t5 = 340 / (el.current.speed || 1);
              n4.animate([{ width: `${l3}px` }, { width: `${e5}px` }], {
                duration: t5,
                easing: g
              }), i4.animate(
                [
                  {
                    opacity: 0,
                    transform: "translateY(5px)",
                    filter: "blur(2px)"
                  },
                  { opacity: 1, transform: "none", filter: "blur(0)" }
                ],
                { duration: t5, easing: g }
              ), a4.animate(
                [
                  { transform: "scale(.6)", opacity: 0 },
                  { transform: "none", opacity: 1 }
                ],
                { duration: 0.8 * t5, easing: g }
              );
            }
          })(e3, a3);
          let i3 = el.current.autoExpand;
          B(
            (t4) => t4.map(
              (t5) => t5.id === e3 ? { ...t5, status: "ready", preview: a3, expanded: i3 } : t5
            )
          ), eg(e3).target = +!!i3;
          let l2 = eu(e3);
          l2 && (l2.dataset.expanded = i3 ? "true" : "false"), ep(
            i3 ? `Preview shown. ${a3.site}, ${a3.title}.` : `Preview ready for ${a3.title}.`
          ), em();
        }).catch(() => {
          en.current && !r3.signal.aborted && Z.current.some((t4) => t4.id === e3) && (ey(e3), B(
            (t4) => t4.map((t5) => t5.id === e3 ? { ...t5, status: "failed" } : t5)
          ), ep(
            `Could not load a preview for ${k(t3)}. Click the link to try again.`
          ));
        });
      },
      [em]
    ), ex = () => {
      let e3 = D.current;
      e3 && U(!e3.textContent?.trim() && !e3.querySelector("[data-link-id]"));
    }, e_ = (0, a.useCallback)(
      (e3, t3 = "caret") => {
        let r3, n2, a2, i2, l2, s2, o2 = D.current;
        if (!o2) return;
        let d2 = (n2 = e3.trim(), /^https?:\/\//i.test(n2) ? n2 : `https://${n2}`), c2 = `lu${++et.current}`, u2 = window.getSelection(), p3 = u2 && u2.rangeCount ? u2.getRangeAt(0) : null;
        "caret" === t3 && p3 && o2.contains(p3.commonAncestorContainer) ? r3 = p3 : "caret" === t3 && ei.current && o2.contains(ei.current.commonAncestorContainer) ? r3 = ei.current.cloneRange() : ((r3 = document.createRange()).selectNodeContents(o2), r3.collapse(false)), r3.deleteContents();
        let h2 = "", m2 = r3.startContainer, g2 = r3.startOffset;
        if (m2.nodeType === Node.TEXT_NODE)
          g2 > 0 && !/\s/.test(m2.data.charAt(g2 - 1)) && (h2 = " ");
        else if (g2 > 0) {
          let e4 = m2.childNodes[g2 - 1];
          e4 && (e4.nodeType !== Node.TEXT_NODE || !/\s$/.test(e4.data)) && (h2 = " ");
        }
        let v2 = document.createTextNode(" "), b2 = ((a2 = document.createElement("span")).className = f().chipWrap, a2.contentEditable = "false", a2.dataset.linkId = c2, a2.dataset.url = d2, a2.dataset.status = "loading", a2.setAttribute("aria-label", `${x(d2)}, loading preview`), (i2 = document.createElement("span")).className = f().chip, (l2 = document.createElement("span")).className = f().chipFav, l2.innerHTML = w, (s2 = document.createElement("span")).className = f().chipLabel, s2.textContent = x(d2), i2.appendChild(l2), i2.appendChild(s2), a2.appendChild(i2), a2);
        r3.insertNode(v2), r3.insertNode(b2), h2 && r3.insertNode(document.createTextNode(h2));
        let y2 = document.createRange();
        y2.setStart(v2, 1), y2.collapse(true), ei.current = y2.cloneRange(), document.activeElement === o2 && u2 && (u2.removeAllRanges(), u2.addRange(y2)), B((e4) => [
          ...e4,
          { id: c2, url: d2, status: "loading", expanded: false }
        ]), U(false), ep(`Link added. Loading a preview for ${k(d2)}.`), ek(c2, d2);
      },
      [ek]
    ), eC = (0, a.useCallback)(
      (e3) => {
        let t3 = Z.current.find((t4) => t4.id === e3), r3 = () => {
          let t4 = eu(e3), r4 = t4?.nextSibling, n3 = () => {
            r4 && r4.nodeType === Node.TEXT_NODE && r4.data.startsWith(" ") && r4.deleteData(0, 1), t4?.remove(), ew(e3), ex();
          };
          t4 && ec() ? t4.animate(
            [
              { opacity: 1, transform: "none", filter: "blur(0)" },
              {
                opacity: 0,
                transform: "scale(.9)",
                filter: "blur(2px)"
              }
            ],
            { duration: 180, easing: b }
          ).onfinish = n3 : n3();
        }, n2 = J.current.get(e3);
        n2 && n2.card && n2.p > 0 ? (n2.target = 0, n2.settle = r3, B((t4) => t4.map((t5) => t5.id === e3 ? { ...t5, expanded: false } : t5)), em()) : r3(), ep(`Link removed${t3?.preview ? `. ${t3.preview.title}` : ""}.`), D.current?.focus({ preventScroll: true });
      },
      [ew, em]
    ), eE = (0, a.useCallback)(
      (e3) => {
        let t3 = Z.current.find((t4) => t4.id === e3);
        if (t3) {
          if ("failed" === t3.status) {
            let r3 = eu(e3);
            r3 && (r3.dataset.status = "loading", r3.firstElementChild.firstElementChild.innerHTML = w), B(
              (t4) => t4.map((t5) => t5.id === e3 ? { ...t5, status: "loading" } : t5)
            ), ep(`Trying again for ${k(t3.url)}.`), ek(e3, t3.url);
            return;
          }
          if ("loading" === t3.status)
            return void ep(`Still loading the preview for ${k(t3.url)}.`);
          eb(e3, !t3.expanded);
        }
      },
      [ek, eb]
    ), eN = () => {
      let e3 = D.current, t3 = window.getSelection();
      e3 && t3 && t3.rangeCount && e3.contains(t3.getRangeAt(0).commonAncestorContainer) && (ei.current = t3.getRangeAt(0).cloneRange());
    }, eA = async () => {
      let e3, t3, r3 = (e3 = "", t3 = (r4) => r4.childNodes.forEach((r5) => {
        r5.nodeType === Node.TEXT_NODE ? e3 += r5.data : r5 instanceof HTMLElement && (r5.dataset.url ? e3 += r5.dataset.url : "BR" === r5.tagName ? e3 += "\n" : ("DIV" === r5.tagName && e3 && !e3.endsWith("\n") && (e3 += "\n"), t3(r5)));
      }), D.current && t3(D.current), e3.replace(/ /g, " ").trim());
      if (!r3 || "pending" === X) {
        r3 || ep("Write a message or paste a link first.");
        return;
      }
      er.current = true, G("");
      let n2 = {
        text: r3,
        links: Z.current.filter((e4) => e4.preview).map((e4) => e4.preview)
      };
      Y("pending");
      try {
        await Promise.resolve(el.current.onSend?.(n2));
      } catch (e4) {
        if (!en.current) return;
        Y("idle"), G(
          e4 instanceof Error && e4.message ? e4.message : "The message could not be sent. Try again."
        );
        return;
      }
      if (!en.current) return;
      let a2 = () => {
        ee.current.forEach((e4) => e4.abort()), ee.current.clear(), J.current.clear(), D.current && (D.current.textContent = ""), ei.current = null, B([]), U(true);
      }, l2 = O.current;
      if (l2 && ec()) {
        let e4 = l2.animate(
          [
            { opacity: 1, transform: "none" },
            { opacity: 0, transform: "translateY(-8px)" }
          ],
          { duration: 180, easing: b, fill: "forwards" }
        );
        e4.onfinish = () => {
          let t4 = l2.offsetHeight;
          (0, i.flushSync)(a2);
          let r4 = l2.offsetHeight;
          e4.cancel(), t4 !== r4 && l2.animate(
            [
              { height: `${t4}px`, overflow: "hidden" },
              { height: `${r4}px`, overflow: "hidden" }
            ],
            { duration: 480, easing: v }
          ), l2.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 240,
            delay: 120,
            easing: v,
            fill: "backwards"
          });
        };
      } else a2();
      Y("sent"), ep("Message sent."), window.setTimeout(() => {
        en.current && Y("idle");
      }, 1600);
    }, e$ = (0, a.useRef)(null), ej = (e3) => {
      let t3 = e$.current;
      if (!t3 || e3.pointerId !== t3.pointer) return;
      let r3 = J.current.get(t3.id);
      if (!r3) return;
      let n2 = e3.clientY - t3.y;
      if (!t3.moved) {
        if (4 > Math.abs(n2)) return;
        t3.moved = true, r3.dragging = true, e3.currentTarget.setPointerCapture(e3.pointerId), z.current?.setAttribute("data-dragging", "true");
      }
      let a2 = e3.timeStamp, i2 = t3.p - n2 / (0.8 * t3.H), l2 = i2 > 1 ? 1 + (i2 - 1) * 0.08 : y(i2), s2 = Math.max(1, a2 - t3.t) / 1e3;
      r3.v = 0.6 * r3.v + (Math.min(1, l2) - r3.p) / s2 * 0.4, r3.p = Math.min(1, l2), t3.t = a2, ec() ? em() : ef();
    }, eR = (e3) => {
      let t3 = e$.current;
      if (!t3 || e3.pointerId !== t3.pointer) return;
      e$.current = null;
      let r3 = J.current.get(t3.id);
      z.current?.removeAttribute("data-dragging"), r3 && t3.moved && (r3.dragging = false, r3.v < -1.4 || r3.p < 0.62 && r3.v < 1.2 ? eb(t3.id, false) : (r3.target = 1, em()));
    };
    (0, a.useEffect)(() => {
      en.current = true;
      let e3 = ee.current;
      return () => {
        en.current = false, e3.forEach((e4) => e4.abort()), eo.current && cancelAnimationFrame(eo.current), eo.current = 0;
      };
    }, []), (0, a.useEffect)(() => {
      let e3 = z.current;
      if (!e3) return;
      let t3 = true, r3 = () => {
        ea.current = t3 && !document.hidden, e3.dataset.running = ea.current ? "true" : "false", ea.current || (eo.current && (cancelAnimationFrame(eo.current), eo.current = 0), em());
      }, n2 = new IntersectionObserver((e4) => {
        t3 = e4[e4.length - 1].isIntersecting, r3();
      });
      n2.observe(e3);
      let a2 = new ResizeObserver(() => {
        eo.current || ef();
      });
      a2.observe(e3), document.addEventListener("visibilitychange", r3);
      let i2 = () => eN();
      return document.addEventListener("selectionchange", i2), () => {
        n2.disconnect(), a2.disconnect(), document.removeEventListener("visibilitychange", r3), document.removeEventListener("selectionchange", i2);
      };
    }, [em, ef]), (0, a.useLayoutEffect)(() => {
      (F || j) && em();
    }, [F, j, em]), (0, a.useEffect)(() => {
      let e3 = z.current;
      if (!A2 || j || !p2.length || !e3) return;
      let t3 = 0, r3 = new IntersectionObserver(
        (e4) => {
          e4[e4.length - 1].isIntersecting && (r3.disconnect(), t3 = window.setTimeout(() => {
            er.current || !en.current || Z.current.some((e5) => _(e5.url, p2[0].url)) || e_(p2[0].url, "end");
          }, 650 * !F));
        },
        { threshold: 0.5 }
      );
      return r3.observe(e3), () => {
        r3.disconnect(), window.clearTimeout(t3);
      };
    }, []);
    let eM = (e3, t3) => {
      let r3 = eu(e3);
      r3 && (t3 ? r3.dataset.hot = "true" : delete r3.dataset.hot);
    }, eT = { ...S, ...R ? { "--lu-accent": R } : null };
    return (0, n.jsxs)("div", {
      ref: z,
      className: [f().root, L].filter(Boolean).join(" "),
      style: eT,
      "data-running": "true",
      "data-reduced": F || j ? "true" : void 0,
      children: [
        (0, n.jsxs)("div", {
          className: f().composer,
          children: [
            (0, n.jsxs)("div", {
              ref: O,
              className: f().content,
              children: [
                (0, n.jsx)("div", {
                  ref: D,
                  className: f().editor,
                  role: "textbox",
                  "aria-multiline": "true",
                  "aria-label": e2,
                  "aria-describedby": P,
                  contentEditable: true,
                  suppressContentEditableWarning: true,
                  spellCheck: true,
                  "data-empty": K ? "true" : "false",
                  "data-placeholder": t2,
                  dangerouslySetInnerHTML: Q,
                  onPaste: (e3) => {
                    e3.preventDefault(), er.current = true;
                    let t3 = e3.clipboardData.getData("text/plain");
                    t3 && (m.test(t3.trim()) ? e_(t3.trim()) : document.execCommand("insertText", false, t3));
                  },
                  onInput: (e3) => {
                    if (er.current = true, !D.current) return;
                    for (let e4 of Z.current)
                      if (!eu(e4.id)) {
                        let t4 = J.current.get(e4.id);
                        t4 && t4.card && t4.p > 0 ? (t4.target = 0, t4.settle = () => ew(e4.id), em()) : ew(e4.id), ep("Link removed.");
                      }
                    let t3 = e3.nativeEvent;
                    if ("insertText" === t3.inputType && " " === t3.data) {
                      let e4 = window.getSelection(), t4 = e4?.anchorNode;
                      if (t4 && t4.nodeType === Node.TEXT_NODE && e4) {
                        let r3 = e4.anchorOffset, n2 = t4.data.slice(0, r3).match(
                          /(?:^|\s)(https?:\/\/[^\s]+|www\.[^\s]+)\s$/i
                        );
                        if (n2 && m.test(n2[1])) {
                          let a2 = r3 - 1 - n2[1].length, i2 = document.createRange();
                          i2.setStart(t4, a2), i2.setEnd(t4, a2 + n2[1].length), i2.collapse(true), t4.deleteData(a2, n2[1].length + 1), e4.removeAllRanges(), e4.addRange(i2), e_(n2[1]);
                        }
                      }
                    }
                    eN(), ex();
                  },
                  onKeyDown: (e3) => {
                    if (er.current = true, "Enter" === e3.key && !e3.nativeEvent.isComposing) {
                      if (e3.altKey) {
                        e3.preventDefault();
                        let t3 = D.current, r3 = window.getSelection(), n2 = Array.from(
                          t3?.querySelectorAll("[data-link-id]") ?? []
                        );
                        if (!n2.length)
                          return void ep("There is no link in the message.");
                        let a2 = n2[n2.length - 1];
                        if (r3 && r3.rangeCount) {
                          let e4 = r3.getRangeAt(0), t4 = n2.filter((t5) => 0 >= e4.comparePoint(t5, 0));
                          a2 = t4.length ? t4[t4.length - 1] : n2[0];
                        }
                        return void eE(a2.dataset.linkId);
                      }
                      if (e3.preventDefault(), e3.shiftKey)
                        return void document.execCommand("insertLineBreak");
                      eA();
                    }
                  },
                  onKeyUp: eN,
                  onMouseUp: eN,
                  onClick: (e3) => {
                    let t3 = e3.target.closest("[data-link-id]");
                    t3 && (er.current = true, eE(t3.dataset.linkId));
                  },
                  onFocus: () => {
                    er.current = true;
                  }
                }),
                (0, n.jsx)("p", {
                  id: P,
                  className: f().srOnly,
                  children: "Paste a link to preview it. Alt and Enter shows or collapses the preview of the link before the caret. Enter sends, Shift and Enter adds a line."
                }),
                (0, n.jsx)("div", {
                  className: f().lane,
                  children: q.filter((e3) => "ready" === e3.status && e3.preview).map((e3) => {
                    let t3, r3 = e3.preview;
                    return (0, n.jsxs)(
                      "div",
                      {
                        ref: ev(e3.id, "wrap"),
                        className: f().wrap,
                        children: [
                          (0, n.jsx)("div", {
                            ref: ev(e3.id, "plate"),
                            className: f().plate,
                            "aria-hidden": "true"
                          }),
                          (0, n.jsxs)("article", {
                            ref: ev(e3.id, "card"),
                            className: f().card,
                            "aria-label": `${r3.site}: ${r3.title}`,
                            onPointerDown: (t3 = e3.id, (e4) => {
                              if (0 !== e4.button) return;
                              let r4 = e4.target;
                              if (r4.closest("button, a") || "touch" === e4.pointerType && !r4.closest("[data-grip]"))
                                return;
                              let n2 = J.current.get(t3);
                              n2 && n2.card && 1 === n2.target && (e$.current = {
                                id: t3,
                                y: e4.clientY,
                                p: n2.p,
                                t: e4.timeStamp,
                                H: n2.card.offsetHeight,
                                moved: false,
                                pointer: e4.pointerId
                              });
                            }),
                            onPointerMove: ej,
                            onPointerUp: eR,
                            onPointerCancel: eR,
                            onPointerEnter: () => eM(e3.id, true),
                            onPointerLeave: () => eM(e3.id, false),
                            children: [
                              (0, n.jsxs)("div", {
                                className: f().head,
                                "data-grip": "",
                                children: [
                                  (0, n.jsx)("span", {
                                    className: f().fav,
                                    "data-fav": "",
                                    "data-mono": r3.favicon ? void 0 : "true",
                                    "aria-hidden": "true",
                                    children: r3.favicon ? (0, n.jsx)("img", {
                                      src: r3.favicon,
                                      alt: "",
                                      width: 16,
                                      height: 16,
                                      draggable: false
                                    }) : r3.site.charAt(0).toUpperCase()
                                  }),
                                  (0, n.jsx)("span", {
                                    className: f().site,
                                    children: r3.site
                                  }),
                                  (0, n.jsx)("button", {
                                    type: "button",
                                    className: f().iconButton,
                                    onClick: () => eb(e3.id, false),
                                    "aria-label": `Collapse preview of ${r3.title}`,
                                    children: (0, n.jsx)(s.A, {
                                      size: 16,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    })
                                  }),
                                  (0, n.jsx)("button", {
                                    type: "button",
                                    className: f().iconButton,
                                    onClick: () => eC(e3.id),
                                    "aria-label": `Remove link to ${r3.title}`,
                                    children: (0, n.jsx)(o.A, {
                                      size: 16,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    })
                                  })
                                ]
                              }),
                              (0, n.jsxs)("div", {
                                ref: ev(e3.id, "body"),
                                className: f().body,
                                children: [
                                  (0, n.jsx)("a", {
                                    className: f().title,
                                    href: r3.url,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: r3.title
                                  }),
                                  r3.description ? (0, n.jsx)("p", {
                                    className: f().description,
                                    children: r3.description
                                  }) : null,
                                  r3.image ? (0, n.jsxs)("div", {
                                    className: f().media,
                                    children: [
                                      (0, n.jsx)("img", {
                                        ref: ev(e3.id, "media"),
                                        src: r3.image,
                                        alt: r3.imageAlt ?? "",
                                        draggable: false,
                                        decoding: "async"
                                      }),
                                      r3.duration ? (0, n.jsxs)("span", {
                                        className: f().play,
                                        "aria-hidden": "true",
                                        children: [
                                          (0, n.jsx)(d.A, {
                                            size: 14,
                                            strokeWidth: 1.75,
                                            fill: "currentColor"
                                          }),
                                          (0, n.jsx)("span", {
                                            children: r3.duration
                                          })
                                        ]
                                      }) : null
                                    ]
                                  }) : null
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
              ]
            }),
            (0, n.jsxs)("div", {
              className: f().toolbar,
              children: [
                p2.length ? (0, n.jsxs)("div", {
                  className: f().samples,
                  role: "group",
                  "aria-label": "Sample links",
                  children: [
                    (0, n.jsx)("span", {
                      className: f().tryLabel,
                      "aria-hidden": "true",
                      children: "Try"
                    }),
                    p2.map((e3) => {
                      let t3 = q.find((t4) => _(t4.url, e3.url)), r3 = t3 ? "ready" === t3.status ? `${t3.expanded ? "Collapse" : "Show"} ${e3.site} preview` : `${e3.site} link is loading` : `Paste ${e3.site} link`;
                      return (0, n.jsxs)(
                        "button",
                        {
                          type: "button",
                          className: f().sample,
                          onClick: () => {
                            let t4;
                            return er.current = true, void ((t4 = Z.current.find(
                              (t5) => _(t5.url, e3.url)
                            )) ? eE(t4.id) : e_(e3.url));
                          },
                          "aria-label": r3,
                          "data-active": t3 ? "true" : void 0,
                          children: [
                            e3.favicon ? (0, n.jsx)("img", {
                              src: e3.favicon,
                              alt: "",
                              width: 14,
                              height: 14,
                              draggable: false
                            }) : null,
                            (0, n.jsx)("span", { children: e3.site })
                          ]
                        },
                        e3.url
                      );
                    })
                  ]
                }) : (0, n.jsx)("span", {}),
                (0, n.jsxs)("button", {
                  type: "button",
                  className: f().send,
                  onClick: () => void eA(),
                  "aria-label": "sent" === X ? "Message sent" : M,
                  "aria-disabled": K || "pending" === X ? "true" : void 0,
                  "data-state": X,
                  children: [
                    (0, n.jsx)("span", {
                      className: f().sendIcon,
                      "data-show": "sent" !== X ? "true" : "false",
                      children: (0, n.jsx)(c.A, {
                        size: 18,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    }),
                    (0, n.jsx)("span", {
                      className: f().sendIcon,
                      "data-show": "sent" === X ? "true" : "false",
                      children: (0, n.jsx)(u.A, {
                        size: 18,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        V ? (0, n.jsx)("p", {
          className: f().error,
          role: "alert",
          children: V
        }) : null,
        (0, n.jsx)("p", {
          className: f().srOnly,
          role: "status",
          "aria-live": "polite",
          children: W
        })
      ]
    });
  }
  var E = r(50471), N = r.n(E);
  function A() {
    return (0, n.jsxs)("div", {
      className: N().demo,
      children: [
        (0, n.jsx)(C, {}),
        (0, n.jsx)("p", {
          className: N().note,
          children: "Demo composer, nothing is sent. Paste any link, click a link to fold its card, or drag a card up."
        })
      ]
    });
  }
  let $ = A;
};

__m(__module,__exports,__require);
}