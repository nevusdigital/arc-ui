/* billing-overview (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(9264, ".billing{--control-height-sm:2rem;container-type:inline-size;display:grid;width:min(100%,1040px);min-width:0;gap:0;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.header{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:var(--space-1) var(--space-4);padding:16px 20px}\n.header h2{margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.header p{margin:0;color:var(--text-muted);font-size:var(--text-xs)}\n.top{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}\n.top>.panel+.panel{border-left:1px solid var(--border)}\n.srOnly+.top>.panel{border-top:0}\n@container (max-width: 780px){.top{grid-template-columns:minmax(0,1fr)}\n.top>.panel+.panel{border-left:0}\n.srOnly+.top>.panel+.panel{border-top:1px solid var(--border)}\n.panel{display:flex;min-width:0;flex-direction:column;border-top:1px solid var(--border);padding:16px 20px 20px}\n@container (max-width: 480px){.panel{padding:var(--space-4)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.panelHead{display:flex;min-height:32px;align-items:center;justify-content:space-between;gap:var(--space-3)}\n.panelHead h3,.pickerHead h4{margin:0;font-size:var(--text-sm);font-weight:500}\n.pickerHead{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-3);border-top:1px solid var(--border-subtle);padding-top:var(--space-3)}\n.pickerHead p{margin:2px 0 0;color:var(--text-muted);font-size:var(--text-xs)}\n.panelNote{min-width:0;color:var(--text-muted);font-size:var(--text-xs);text-align:right}\n.swap{position:relative;display:block;min-width:0}\n.swapText{display:block}\n.num{display:inline-flex;font-variant-numeric:tabular-nums}\n.num>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}\n.per{color:var(--text-muted);font-family:var(--font-body);font-size:var(--text-sm);font-weight:400;letter-spacing:var(--tracking-body)}\n.optionAmount .per{font-size:var(--text-xs)}\n.region{box-sizing:content-box;overflow:hidden;margin:calc(var(--space-2) * -1);padding:var(--space-2)}\n.regionInner{position:relative}\n.planLine{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:var(--space-2) var(--space-4);margin-top:var(--space-2)}\n.planName,.planPrice{font-family:var(--font-body);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.2;font-variant-numeric:tabular-nums}\n.planName,.planPrice{font-size:var(--text-xl)}\n.planPrice{display:inline-flex;align-items:baseline;gap:6px}\n.planSummary{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:var(--space-3) var(--space-4);padding-top:var(--space-3)}\n.planFacts{display:grid;min-width:0;gap:2px}\n.planFacts p{margin:0;color:var(--text-secondary);font-size:var(--text-sm)}\n.planFacts span{color:var(--text-muted);font-size:var(--text-xs)}\n.notice{display:flex;flex-basis:100%;align-items:flex-start;gap:var(--space-2);margin:0;border-top:1px solid var(--border-subtle);padding-top:var(--space-3);color:var(--text-secondary);font-size:var(--text-xs)}\n.notice svg{flex:none;margin-top:1px;color:var(--success)}\n.picker{display:grid;gap:var(--space-3);padding-top:var(--space-4)}\n.options{display:grid;gap:2px;border:1px solid var(--border);border-radius:12px;padding:2px;background:var(--surface-muted)}\n.option{position:relative;isolation:isolate;display:grid;width:100%;min-height:52px;grid-template-columns:16px minmax(0,1fr) auto;grid-template-areas:\"radio name amount\" \". meta billed\";align-items:center;gap:0 var(--space-3);border:0;border-radius:10px;padding:var(--space-2) var(--space-3);background:transparent;color:var(--foreground);font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.option:disabled{cursor:not-allowed}\n.option:disabled :is(.radio,.optionName,.optionAmount,.optionBilled){opacity:.45}\n.option[aria-checked=true] .radio{border-color:var(--accent)}\n.option[aria-checked=true] .radio:after{opacity:1;transform:scale(1)}\n@media (hover:hover) and (pointer:fine){.option:not(:disabled,[aria-checked=true]):hover{background:color-mix(in oklab,var(--surface) 55%,transparent)}\n.option{padding:var(--space-2) var(--space-3)}\n@media (prefers-reduced-motion:reduce){.fill,.option,.radio,.radio:after{transition:none}\n.radio{position:relative;grid-area:radio;width:16px;height:16px;border:1.5px solid var(--border-strong);border-radius:50%;transition:border-color var(--duration-fast) var(--ease-standard)}\n.radio:after{position:absolute;inset:3px;border-radius:50%;background:var(--accent);content:\"\";opacity:0;transform:scale(.4);transition:transform var(--duration-spring) var(--ease-spring),opacity var(--duration-fast) var(--ease-standard)}\n.radio:after{transform:none}\n.optionName{display:flex;min-width:0;grid-area:name;align-items:baseline;gap:var(--space-2);font-weight:500}\n.optionAmount{display:inline-flex;grid-area:amount;align-items:baseline;justify-self:end;gap:2px;font-weight:500}\n.optionBilled{grid-area:billed;justify-self:end;color:var(--text-muted);font-size:var(--text-xs);text-align:right;white-space:nowrap}\n.optionHighlight{position:absolute;z-index:-1;inset:0;border:1px solid var(--border);border-radius:inherit;background:var(--surface);box-shadow:var(--shadow-resting)}\n.optionCurrent{color:var(--text-muted);font-size:var(--text-xs);font-weight:400}\n.optionMeta{min-width:0;grid-area:meta;color:var(--text-muted);font-size:var(--text-xs)}\n.quote{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:var(--space-4)}\n.quoteText{display:grid;min-width:0;gap:2px}\n.quoteLabel{color:var(--text-secondary);font-size:var(--text-xs)}\n.quoteAmount{font-size:var(--text-lg);font-weight:500;line-height:1.3;font-variant-numeric:tabular-nums}\n.quoteDetail{color:var(--text-muted);font-size:var(--text-xs)}\n.quoteActions{display:flex;gap:var(--space-2);margin-left:auto}\n.quoteActions{width:100%}\n.quoteActions>button{flex:1}\n.cardRow{display:flex;align-items:center;gap:var(--space-4);margin-top:var(--space-3)}\n.cardRow{gap:var(--space-4)}\n@container (max-width: 340px){.cardRow{flex-direction:column;align-items:flex-start}\n.cardFace{display:flex;width:172px;flex:none;aspect-ratio:1.586;flex-direction:column;justify-content:space-between;overflow:hidden;border-radius:12px;padding:12px 14px;background:var(--foreground);color:var(--background);font-variant-numeric:tabular-nums;user-select:none}\n.cardFace{width:140px;padding:10px 12px}\n.cardTop{display:flex;align-items:center;justify-content:space-between;color:color-mix(in oklab,var(--background) 72%,transparent);font-size:10px;letter-spacing:0}\n.chip{position:relative;width:26px;height:19px;border:1px solid color-mix(in oklab,var(--background) 42%,transparent);border-radius:5px}\n.chip:after,.chip:before{position:absolute;content:\"\"}\n.chip:before{inset:5px -1px;border-block:1px solid color-mix(in oklab,var(--background) 30%,transparent)}\n.chip:after{inset:-1px 8px;border-inline:1px solid color-mix(in oklab,var(--background) 30%,transparent)}\n.cardBottom{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:end;gap:2px var(--space-2)}\n.cardHolder{grid-column:1/-1;color:color-mix(in oklab,var(--background) 72%,transparent);font-size:10px;letter-spacing:0}\n.cardNumber{display:inline-flex;gap:6px;font-size:13px;font-weight:500;letter-spacing:.04em}\n.cardNumber{font-size:12px}\n.cardExpiry{color:color-mix(in oklab,var(--background) 80%,transparent);font-size:11px}\n.digits{display:inline-flex}\n.digit{position:relative;display:inline-block;overflow:hidden}\n.digit>span{display:inline-block}\n.cardDetails{display:grid;min-width:0;flex:1;justify-items:start;gap:2px}\n.cardDetails>button{margin-top:var(--space-2)}\n.cardTitle{font-weight:500}\n.cardMeta{color:var(--text-muted);font-size:var(--text-xs)}\n.cardForm{display:grid;gap:var(--space-3);padding-top:var(--space-4)}\n.formRow{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:start;gap:var(--space-3)}\n.formRow{grid-template-columns:minmax(0,1fr)}\n.formFoot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-3);padding-top:var(--space-1)}\n.formFoot p{margin:0;color:var(--text-muted);font-size:var(--text-xs)}\n.formActions{display:flex;gap:var(--space-2);margin-left:auto}\n.cardNotice{margin-top:var(--space-3)}\n.meters{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--space-4) var(--space-8);margin-top:var(--space-3)}\n@container (max-width: 700px){.meters{grid-template-columns:minmax(0,1fr);gap:var(--space-5)}\n.meter{display:grid;min-width:0;gap:var(--space-2)}\n.meter[data-near] .track{background:color-mix(in oklab,var(--warning) 14%,transparent)}\n.meter[data-near] .fill{background:linear-gradient(90deg,color-mix(in oklab,var(--warning) 45%,var(--surface)),var(--warning))}\n.meterHead{display:flex;min-height:22px;align-items:center;justify-content:space-between;gap:var(--space-2);color:var(--text-secondary);font-size:var(--text-sm)}\n.nearBadge{display:inline-flex}\n.meterValue{display:flex;flex-wrap:wrap;align-items:baseline;gap:0 6px;margin:0;font-size:var(--text-lg);font-weight:500;line-height:1.3;font-variant-numeric:tabular-nums}\n.meterUnit{font-size:var(--text-sm)}\n.meterOf{display:inline-flex;align-items:baseline;gap:4px;color:var(--text-muted);font-size:var(--text-sm);font-weight:400}\n.track{position:relative;height:4px;overflow:hidden;margin-top:var(--space-1);border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 8%,transparent)}\n.fill{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--accent);transition:background-color var(--duration-standard) var(--ease-standard)}\n.meterCaption,.recipient{color:var(--text-muted);font-size:var(--text-xs)}\n.recipient{display:inline-flex;align-items:center;gap:var(--space-2)}\n.invoices{margin:var(--space-2) calc(var(--space-3) * -1) calc(var(--space-2) * -1);padding:0;list-style:none}\n.invoices{margin-inline:calc(var(--space-2) * -1)}\n.invoice{overflow:hidden}\n.invoiceRow{display:grid;min-height:52px;grid-template-columns:96px minmax(0,1fr) 88px 84px 128px;grid-template-areas:\"date text amount status actions\";align-items:center;gap:var(--space-4);border-top:1px solid var(--border-subtle);padding:var(--space-2) var(--space-3);font-size:var(--text-sm)}\n.invoiceRow{grid-template-columns:minmax(0,1fr) auto;grid-template-areas:\"text amount\" \"meta actions\";gap:var(--space-2) var(--space-3)}\n.invoiceRow{padding-inline:var(--space-2)}\n.invoiceText{display:grid;min-width:0;grid-area:text}\n.invoiceTitle{font-weight:500}\n.invoiceDetail{color:var(--text-muted);font-size:var(--text-xs)}\n.invoiceAmount{grid-area:amount;font-variant-numeric:tabular-nums;font-weight:500;text-align:right}\n.invoiceMeta{display:contents}\n.invoiceMeta{display:flex;min-width:0;flex-wrap:wrap;grid-area:meta;align-items:center;gap:var(--space-1) var(--space-2)}\n.invoiceDate{grid-area:date;color:var(--text-secondary);font-variant-numeric:tabular-nums;white-space:nowrap}\n.invoiceDate{color:var(--text-muted);font-size:var(--text-xs)}\n.invoiceStatus{display:inline-flex;grid-area:status}\n.invoiceActions{position:relative;display:flex;grid-area:actions;align-items:center;justify-content:flex-end;gap:var(--space-2)}\n.invoiceActions .iconButton{width:var(--control-height-sm);padding:0}\n.payNow{display:inline-flex}\n.done{color:var(--success)}", {"billing":"billing","header":"header","top":"top","panel":"panel","srOnly":"srOnly","panelHead":"panelHead","pickerHead":"pickerHead","panelNote":"panelNote","swap":"swap","swapText":"swapText","num":"num","per":"per","optionAmount":"optionAmount","region":"region","regionInner":"regionInner","planLine":"planLine","planName":"planName","planPrice":"planPrice","planSummary":"planSummary","planFacts":"planFacts","notice":"notice","picker":"picker","options":"options","option":"option","radio":"radio","optionName":"optionName","optionBilled":"optionBilled","fill":"fill","optionHighlight":"optionHighlight","optionCurrent":"optionCurrent","optionMeta":"optionMeta","quote":"quote","quoteText":"quoteText","quoteLabel":"quoteLabel","quoteAmount":"quoteAmount","quoteDetail":"quoteDetail","quoteActions":"quoteActions","cardRow":"cardRow","cardFace":"cardFace","cardTop":"cardTop","chip":"chip","cardBottom":"cardBottom","cardHolder":"cardHolder","cardNumber":"cardNumber","cardExpiry":"cardExpiry","digits":"digits","digit":"digit","cardDetails":"cardDetails","cardTitle":"cardTitle","cardMeta":"cardMeta","cardForm":"cardForm","formRow":"formRow","formFoot":"formFoot","formActions":"formActions","cardNotice":"cardNotice","meters":"meters","meter":"meter","track":"track","meterHead":"meterHead","nearBadge":"nearBadge","meterValue":"meterValue","meterUnit":"meterUnit","meterOf":"meterOf","meterCaption":"meterCaption","recipient":"recipient","invoices":"invoices","invoice":"invoice","invoiceRow":"invoiceRow","invoiceText":"invoiceText","invoiceTitle":"invoiceTitle","invoiceDetail":"invoiceDetail","invoiceAmount":"invoiceAmount","invoiceMeta":"invoiceMeta","invoiceDate":"invoiceDate","invoiceStatus":"invoiceStatus","invoiceActions":"invoiceActions","iconButton":"iconButton","payNow":"payNow","done":"done"});
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {});
A.regCss(22346, ".badge{--badge-tone:var(--text-secondary);--badge-tint:10%;--badge-ink:84%;--badge-background:color-mix(in oklab,var(--badge-tone) var(--badge-tint),var(--surface));--badge-foreground:color-mix(in oklab,var(--badge-tone) var(--badge-ink),var(--foreground));--badge-color:color-mix(in oklab,var(--badge-tone) 88%,var(--foreground));--badge-border:transparent;--badge-radius:6px;--badge-height:24px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px;box-sizing:border-box;display:inline-flex;min-height:var(--badge-height);flex:none;align-items:center;justify-content:center;vertical-align:middle;border:1px solid var(--badge-border);border-radius:var(--badge-radius);padding:0 var(--badge-pad);color:var(--badge-foreground);background:var(--badge-background);font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:-.005em;line-height:1;white-space:nowrap;overflow:clip;transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n:root[data-theme=dark] .badge{--badge-tint:12%;--badge-ink:94%}\n@media (prefers-reduced-motion:reduce){.badge{transition-duration:var(--duration-instant)}\n.outline{--badge-border:color-mix(in oklab,var(--badge-tone) 14%,var(--border))}\n:root[data-theme=dark] .outline{--badge-border:color-mix(in oklab,var(--badge-tone) 22%,var(--border))}\n.sm{--badge-height:20px;--badge-radius:5px;--badge-pad:8px;--badge-gap:4px;--badge-icon:12px;--badge-dot:5px;font-size:11px}\n.md{--badge-height:24px;--badge-radius:6px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px}\n.lg{--badge-height:28px;--badge-radius:7px;--badge-pad:12px;--badge-gap:6px;--badge-icon:16px;--badge-dot:7px;font-size:var(--text-sm)}\n.pill{--badge-radius:var(--radius-pill)}\n.withIcon{padding-inline-start:calc(var(--badge-pad) - 2px)}\n.withDot{padding-inline-start:calc(var(--badge-pad) - 1px)}\n.body,.content{display:flex;align-items:center}\n.content{position:relative;width:max-content;gap:var(--badge-gap)}\n.glyph,.label{position:relative;display:inline-flex;align-items:center}\n.glyph>svg{display:block;width:var(--badge-icon);height:var(--badge-icon)}\n.text{display:block;text-box:trim-both cap alphabetic}\n.icon{position:relative;display:inline-flex;flex:none;align-items:center;justify-content:center;color:var(--badge-color);line-height:0}\n.dot{display:block;width:var(--badge-dot);height:var(--badge-dot);flex:none;border-radius:50%;background:var(--badge-color)}\n.neutral{--badge-tone:var(--text-secondary)}\n.info{--badge-tone:var(--info,var(--tone-sky))}\n.success{--badge-tone:var(--success)}\n.warning{--badge-tone:var(--warning)}\n.amber,.warning{--badge-ink:76%}\n.danger{--badge-tone:var(--danger)}\n.teal{--badge-tone:var(--tone-teal)}\n.sky{--badge-tone:var(--tone-sky)}\n.orchid{--badge-tone:var(--tone-orchid)}\n.violet{--badge-tone:var(--tone-violet)}\n.rose{--badge-tone:var(--tone-rose)}\n.amber{--badge-tone:var(--tone-amber)}", {});
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
A.reg(48240, function(__module,__exports,__require){
"use strict";
function __m(e, i, a) {
  "use strict";
  a.r(i), a.d(i, { BillingOverview: () => G, default: () => X });
  var n = a(95155), l = a(12115), t = a(79196), r = a(25354), s = a(18310), o = a(80642), c = a(61792), d = a(57700), u = a(64577), m = a(59103), p = a(35484), v = a(11012), h = a(50825), _ = a(65024), g = a(92218), x = a(90034), y = a(51288), b = a(35978), w = a(66558), j = a(98344), f = a(7770), N = a(9264), $ = a.n(N);
  let { spring: k, duration: S, ease: A } = f.T, C = [...A.enter], D = [...A.standard], T = {
    starter: {
      name: "Starter",
      rank: 0,
      monthly: 49,
      yearly: 39,
      seats: 5,
      calls: 25e4,
      storage: 25
    },
    growth: {
      name: "Growth",
      rank: 1,
      monthly: 199,
      yearly: 159,
      seats: 15,
      calls: 1e6,
      storage: 100
    },
    scale: {
      name: "Scale",
      rank: 2,
      monthly: 499,
      yearly: 399,
      seats: 50,
      calls: 5e6,
      storage: 500
    }
  }, P = ["starter", "growth", "scale"], M = {
    plan: "growth",
    billing: "monthly",
    renews: "Oct 14, 2026",
    periodEnd: "Oct 13",
    daysLeft: 22,
    periodDays: 30
  }, R = {
    monthly: { renews: "Oct 22, 2026", periodEnd: "Oct 21", days: 30 },
    yearly: { renews: "Sep 22, 2027", periodEnd: "Sep 21, 2027", days: 365 }
  }, z = [
    {
      id: "sep-renewal",
      date: "Sep 14, 2026",
      title: "Growth plan",
      detail: "Sep 14 \u2013 Oct 13",
      amount: 199,
      status: "paid"
    },
    {
      id: "sep-retention",
      date: "Sep 3, 2026",
      title: "Log retention add-on",
      detail: "Card declined by the bank",
      amount: 36,
      status: "failed"
    },
    {
      id: "aug-workshop",
      date: "Aug 28, 2026",
      title: "Onboarding workshop",
      detail: "Bank transfer, due Sep 27",
      amount: 600,
      status: "due"
    },
    {
      id: "aug-renewal",
      date: "Aug 14, 2026",
      title: "Growth plan",
      detail: "Aug 14 \u2013 Sep 13",
      amount: 199,
      status: "paid"
    }
  ], B = {
    paid: {
      label: "Paid",
      tone: "success",
      icon: (0, n.jsx)(u.A, {
        size: 12,
        strokeWidth: 2,
        "aria-hidden": "true"
      })
    },
    due: {
      label: "Due",
      tone: "warning",
      icon: (0, n.jsx)(m.A, {
        size: 12,
        strokeWidth: 2,
        "aria-hidden": "true"
      })
    },
    failed: {
      label: "Failed",
      tone: "danger",
      icon: (0, n.jsx)(p.A, {
        size: 12,
        strokeWidth: 2,
        "aria-hidden": "true"
      })
    }
  }, E = { number: "", expiry: "", cvc: "" }, Y = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }), H = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }), L = new Intl.NumberFormat("en-US"), F = (e2, i2) => "monthly" === i2 ? T[e2].monthly : 12 * T[e2].yearly, I = (e2) => {
    let i2;
    return `${T[e2].seats} seats \xB7 ${(i2 = T[e2].calls) >= 1e6 ? `${i2 / 1e6}M` : `${i2 / 1e3}k`} API calls \xB7 ${T[e2].storage} GB`;
  }, q = (e2) => Math.round(100 * e2) / 100;
  function O({ children: e2, className: i2, reduce: a2, ref: l2 }) {
    let s2 = (0, t.tF)();
    return (0, n.jsx)(r.PY1.span, {
      ref: l2,
      className: i2,
      "aria-hidden": !s2 || void 0,
      initial: a2 ? { opacity: 0 } : { opacity: 0, y: "0.35em" },
      animate: { opacity: 1, y: "0em" },
      exit: a2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: "-0.3em",
        transition: { duration: S.fast, ease: D }
      },
      transition: a2 ? { duration: 0 } : { duration: S.standard, ease: C },
      children: e2
    });
  }
  function U({ children: e2, className: i2, anchor: a2 = "left" }) {
    let l2 = !!(0, s.I)();
    return (0, n.jsx)("span", {
      className: [$().swap, i2].filter(Boolean).join(" "),
      children: (0, n.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        anchorX: a2,
        children: (0, n.jsx)(
          O,
          { className: $().swapText, reduce: l2, children: e2 },
          e2
        )
      })
    });
  }
  function K({ value: e2 }) {
    let i2 = !!(0, s.I)();
    return (0, n.jsx)("span", {
      className: $().digits,
      children: e2.split("").map(
        (e3, a2) => (0, n.jsx)(
          "span",
          {
            className: $().digit,
            children: (0, n.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: (0, n.jsx)(
                r.PY1.span,
                {
                  initial: i2 ? { opacity: 0 } : { opacity: 0, y: "0.7em" },
                  animate: { opacity: 1, y: "0em" },
                  exit: i2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.7em",
                    transition: {
                      duration: S.fast,
                      ease: D,
                      delay: 0.04 * a2
                    }
                  },
                  transition: i2 ? { duration: 0 } : {
                    default: {
                      duration: S.standard,
                      ease: C,
                      delay: 0.04 * a2
                    },
                    y: { ...k.snappy, delay: 0.04 * a2 }
                  },
                  children: e3
                },
                e3
              )
            })
          },
          a2
        )
      )
    });
  }
  function V({ children: e2 }) {
    let i2 = (0, s.I)(), a2 = (0, l.useRef)(null), [t2, o2] = (0, l.useState)("auto");
    return (0, l.useLayoutEffect)(() => {
      let e3 = a2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let i3 = new ResizeObserver(() => o2(e3.offsetHeight));
      return i3.observe(e3), () => i3.disconnect();
    }, []), (0, n.jsx)(r.PY1.div, {
      className: $().region,
      initial: false,
      animate: { height: t2 },
      transition: i2 ? { duration: 0 } : k.smooth,
      children: (0, n.jsx)("div", {
        ref: a2,
        className: $().regionInner,
        children: e2
      })
    });
  }
  function W({
    label: e2,
    used: i2,
    limit: a2,
    decimals: t2 = 0,
    unit: c2,
    limitValue: d2,
    limitSuffix: u2,
    left: m2,
    valueText: p2,
    index: h2,
    revealed: g2
  }) {
    let y2 = (0, l.useId)(), b2 = (0, s.I)(), w2 = i2 / a2, j2 = w2 >= 0.85;
    return (0, n.jsxs)("div", {
      className: $().meter,
      "data-near": j2 || void 0,
      children: [
        (0, n.jsxs)("div", {
          className: $().meterHead,
          children: [
            (0, n.jsx)("span", { id: `${y2}-label`, children: e2 }),
            (0, n.jsx)(o.N, {
              initial: false,
              children: j2 && (0, n.jsx)(
                r.PY1.span,
                {
                  className: $().nearBadge,
                  initial: b2 ? { opacity: 0 } : { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  exit: b2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: S.exit, ease: D }
                  },
                  transition: b2 ? { duration: 0 } : { duration: S.standard, ease: C },
                  children: (0, n.jsx)(x.E, {
                    tone: "warning",
                    size: "sm",
                    icon: (0, n.jsx)(v.A, {
                      size: 12,
                      strokeWidth: 2,
                      "aria-hidden": "true"
                    }),
                    children: "Near limit"
                  })
                },
                "near"
              )
            })
          ]
        }),
        (0, n.jsxs)("p", {
          className: $().meterValue,
          children: [
            (0, n.jsx)("span", {
              className: $().num,
              children: (0, n.jsx)(_.q, {
                value: i2,
                decimals: t2,
                animateOnView: true
              })
            }),
            c2 && (0, n.jsx)("span", { className: $().meterUnit, children: c2 }),
            (0, n.jsxs)("span", {
              className: $().meterOf,
              children: [
                "of ",
                (0, n.jsx)("span", {
                  className: $().num,
                  children: (0, n.jsx)(_.q, { value: d2, suffix: u2 })
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: $().track,
          role: "meter",
          "aria-labelledby": `${y2}-label`,
          "aria-valuemin": 0,
          "aria-valuemax": a2,
          "aria-valuenow": i2,
          "aria-valuetext": p2,
          children: (0, n.jsx)(r.PY1.span, {
            className: $().fill,
            initial: { width: "0%" },
            animate: { width: g2 ? `${Math.min(100, 100 * w2)}%` : "0%" },
            transition: b2 ? { duration: 0 } : { ...k.smooth, delay: 0.06 * h2 }
          })
        }),
        (0, n.jsx)(U, {
          className: $().meterCaption,
          children: `${Math.round(100 * w2)}% used \xB7 ${m2} left`
        })
      ]
    });
  }
  function G({ embedded: e2 = false } = {}) {
    var i2, a2;
    let t2, m2, p2, v2 = (0, l.useId)(), f2 = (0, l.useId)(), N2 = !!(0, s.I)(), [A2, O2] = (0, l.useState)(M), [X2, Q] = (0, l.useState)("summary"), [J, Z] = (0, l.useState)({ plan: "scale", billing: "monthly" }), [ee, ei] = (0, l.useState)(false), [ea, en] = (0, l.useState)(""), [el, et] = (0, l.useState)({ last4: "7719", expiry: "04/28" }), [er, es] = (0, l.useState)("summary"), [eo, ec] = (0, l.useState)(E), [ed, eu] = (0, l.useState)({}), [em, ep] = (0, l.useState)(false), [ev, eh] = (0, l.useState)(""), [e_, eg] = (0, l.useState)(z), [ex, ey] = (0, l.useState)({}), [eb, ew] = (0, l.useState)(null), [ej, ef] = (0, l.useState)(""), eN = (0, l.useRef)(null), e$ = (0, c.W)(eN, { once: true, amount: 0.3 }), ek = (0, l.useRef)(null), eS = (0, l.useRef)(null), eA = (0, l.useRef)(null), eC = (0, l.useRef)(null), eD = (0, l.useRef)(null), eT = (0, l.useRef)(/* @__PURE__ */ new Map()), eP = (0, l.useRef)(/* @__PURE__ */ new Map()), eM = (0, l.useRef)(null), eR = (0, l.useRef)(/* @__PURE__ */ new Set()), ez = (0, l.useRef)(0);
    (0, l.useEffect)(() => {
      let e3 = eM.current;
      e3 && (eM.current = null, e3()?.focus());
    }), (0, l.useEffect)(() => {
      let e3 = eR.current;
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, []);
    let eB = (e3, i3) => {
      let a3 = window.setTimeout(() => {
        eR.current.delete(a3), e3();
      }, i3);
      eR.current.add(a3);
    }, eE = T[A2.plan], eY = T[J.plan], eH = eE.rank === P.length - 1, eL = (i2 = J.plan, a2 = J.billing, t2 = F(A2.plan, A2.billing) * A2.daysLeft / A2.periodDays, {
      amount: q(
        ((m2 = a2 === A2.billing) ? F(i2, a2) * A2.daysLeft / A2.periodDays : F(i2, a2)) - t2
      ),
      credit: q(t2),
      sameTerm: m2,
      renews: m2 ? A2.renews : R[a2].renews,
      unchanged: i2 === A2.plan && m2
    }), eF = J.plan === A2.plan ? "billing" : eY.rank > eE.rank ? "up" : "down", eI = eL.unchanged ? "Current plan" : "up" === eF ? `Upgrade to ${eY.name}` : "down" === eF ? `Move to ${eY.name}` : `Switch to ${J.billing}`, eq = eL.unchanged ? "This is your current plan" : eL.sameTerm ? `Prorated for ${A2.daysLeft} days` : `Renews ${eL.renews} \xB7 ${p2 = eL.credit, Y.format(p2)} credited`;
    function eO() {
      ee || (Q("summary"), eM.current = () => ek.current);
    }
    function eU(e3) {
      !ee && T[e3].seats >= 12 && Z((i3) => ({ ...i3, plan: e3 }));
    }
    function eK() {
      em || (es("summary"), eM.current = () => eS.current);
    }
    function eV(e3, i3) {
      let a3, n2 = "number" === e3 ? i3.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ") : "expiry" === e3 ? (a3 = i3.replace(/\D/g, "").slice(0, 4)).length > 2 ? `${a3.slice(0, 2)}/${a3.slice(2)}` : a3 : i3.replace(/\D/g, "").slice(0, 4);
      ec((i4) => ({ ...i4, [e3]: n2 })), ed[e3] && eu((i4) => ({ ...i4, [e3]: void 0 }));
    }
    let eW = {
      initial: N2 ? { opacity: 0 } : { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      exit: N2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -4, transition: { duration: S.instant, ease: D } },
      transition: N2 ? { duration: 0 } : { duration: S.standard, ease: C, delay: 0.05 }
    }, eG = [
      {
        key: "seats",
        label: "Seats",
        used: 12,
        limit: eE.seats,
        limitValue: eE.seats,
        limitSuffix: "",
        left: `${eE.seats - 12} seats`,
        valueText: `12 of ${eE.seats} seats used`
      },
      {
        key: "calls",
        label: "API calls",
        used: 912480,
        limit: eE.calls,
        limitValue: eE.calls >= 1e6 ? eE.calls / 1e6 : eE.calls / 1e3,
        limitSuffix: eE.calls >= 1e6 ? "M" : "k",
        left: `${L.format(eE.calls - 912480)} calls`,
        valueText: `${L.format(912480)} of ${L.format(eE.calls)} API calls used`
      },
      {
        key: "storage",
        label: "Storage",
        used: 38.4,
        limit: eE.storage,
        decimals: 1,
        unit: "GB",
        limitValue: eE.storage,
        limitSuffix: " GB",
        left: `${(eE.storage - 38.4).toFixed(1)} GB`,
        valueText: `38.4 of ${eE.storage} GB used`
      }
    ];
    return (0, n.jsxs)("section", {
      className: $().billing,
      "aria-labelledby": `${v2}-title`,
      children: [
        e2 ? (0, n.jsx)("h2", {
          id: `${v2}-title`,
          className: $().srOnly,
          children: "Billing"
        }) : (0, n.jsxs)("header", {
          className: $().header,
          children: [
            (0, n.jsx)("h2", { id: `${v2}-title`, children: "Billing" }),
            (0, n.jsx)("p", { children: "Fieldnote Labs workspace" })
          ]
        }),
        (0, n.jsxs)("div", {
          className: $().top,
          children: [
            (0, n.jsxs)("section", {
              className: $().panel,
              "aria-labelledby": `${v2}-plan`,
              children: [
                (0, n.jsxs)("div", {
                  className: $().panelHead,
                  children: [
                    (0, n.jsx)("h3", {
                      id: `${v2}-plan`,
                      children: "Current plan"
                    }),
                    (0, n.jsx)(U, {
                      className: $().panelNote,
                      anchor: "right",
                      children: "monthly" === A2.billing ? "Billed monthly" : `${H.format(12 * eE.yearly)} billed yearly`
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  className: $().planLine,
                  children: [
                    (0, n.jsx)(j.g, {
                      className: $().planName,
                      children: eE.name
                    }),
                    (0, n.jsxs)("span", {
                      className: $().planPrice,
                      children: [
                        (0, n.jsx)("span", {
                          className: $().num,
                          children: (0, n.jsx)(_.q, {
                            value: "monthly" === A2.billing ? eE.monthly : eE.yearly,
                            prefix: "$"
                          })
                        }),
                        (0, n.jsx)("span", {
                          className: $().per,
                          children: "/ month"
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)(V, {
                  children: (0, n.jsx)(o.N, {
                    mode: "popLayout",
                    initial: false,
                    children: "summary" === X2 ? (0, n.jsxs)(
                      r.PY1.div,
                      {
                        className: $().planSummary,
                        ...eW,
                        children: [
                          (0, n.jsxs)("div", {
                            className: $().planFacts,
                            children: [
                              (0, n.jsxs)("p", {
                                children: ["Renews ", A2.renews]
                              }),
                              (0, n.jsx)("span", { children: I(A2.plan) })
                            ]
                          }),
                          (0, n.jsx)(y.$, {
                            ref: ek,
                            type: "button",
                            variant: eH ? "secondary" : "primary",
                            size: "sm",
                            onClick: function() {
                              let e3 = P.find((e4) => T[e4].rank > eE.rank) ?? A2.plan;
                              Z({ plan: e3, billing: A2.billing }), en(""), Q("picker"), eM.current = () => eT.current.get(e3);
                            },
                            children: eH ? "Change plan" : "Upgrade"
                          }),
                          ea && (0, n.jsxs)("p", {
                            className: $().notice,
                            children: [
                              (0, n.jsx)(u.A, {
                                size: 14,
                                strokeWidth: 2,
                                "aria-hidden": "true"
                              }),
                              ea
                            ]
                          })
                        ]
                      },
                      "summary"
                    ) : (0, n.jsxs)(
                      r.PY1.div,
                      {
                        className: $().picker,
                        ...eW,
                        onKeyDown: (e3) => {
                          "Escape" === e3.key && (e3.stopPropagation(), eO());
                        },
                        children: [
                          (0, n.jsxs)("div", {
                            className: $().pickerHead,
                            children: [
                              (0, n.jsxs)("div", {
                                children: [
                                  (0, n.jsx)("h4", {
                                    id: `${v2}-picker`,
                                    children: "Change plan"
                                  }),
                                  (0, n.jsx)("p", {
                                    children: "Yearly billing saves 20%"
                                  })
                                ]
                              }),
                              (0, n.jsx)(w.A, {
                                label: "Billing period",
                                value: J.billing,
                                onValueChange: (e3) => {
                                  ee || Z((i3) => ({ ...i3, billing: e3 }));
                                },
                                options: [
                                  { value: "monthly", label: "Monthly" },
                                  { value: "yearly", label: "Yearly" }
                                ]
                              })
                            ]
                          }),
                          (0, n.jsx)(d.o, {
                            id: f2,
                            children: (0, n.jsx)("div", {
                              className: $().options,
                              role: "radiogroup",
                              "aria-labelledby": `${v2}-picker`,
                              onKeyDown: function(e3) {
                                let i3 = P.filter((e4) => T[e4].seats >= 12), a3 = {
                                  ArrowDown: 1,
                                  ArrowRight: 1,
                                  ArrowUp: -1,
                                  ArrowLeft: -1
                                }[e3.key], n2 = "Home" === e3.key ? i3[0] : "End" === e3.key ? i3[i3.length - 1] : a3 ? i3[(i3.indexOf(J.plan) + a3 + i3.length) % i3.length] : void 0;
                                n2 && (e3.preventDefault(), eU(n2), eT.current.get(n2)?.focus());
                              },
                              children: P.map((e3) => {
                                let i3 = T[e3], a3 = J.plan === e3, l2 = i3.seats < 12;
                                return (0, n.jsxs)(
                                  "button",
                                  {
                                    ref: (i4) => {
                                      i4 ? eT.current.set(e3, i4) : eT.current.delete(e3);
                                    },
                                    type: "button",
                                    role: "radio",
                                    "aria-checked": a3,
                                    disabled: l2,
                                    tabIndex: a3 ? 0 : -1,
                                    className: $().option,
                                    onClick: () => eU(e3),
                                    children: [
                                      a3 && (0, n.jsx)(r.PY1.span, {
                                        layoutId: "plan-highlight",
                                        className: $().optionHighlight,
                                        transition: N2 ? { duration: 0 } : k.morph,
                                        "aria-hidden": "true"
                                      }),
                                      (0, n.jsx)("span", {
                                        className: $().radio,
                                        "aria-hidden": "true"
                                      }),
                                      (0, n.jsxs)("span", {
                                        className: $().optionName,
                                        children: [
                                          i3.name,
                                          e3 === A2.plan && (0, n.jsx)("span", {
                                            className: $().optionCurrent,
                                            children: "Current"
                                          })
                                        ]
                                      }),
                                      (0, n.jsx)("span", {
                                        className: $().optionMeta,
                                        children: l2 ? `12 seats in use, ${i3.name} allows ${i3.seats}` : I(e3)
                                      }),
                                      (0, n.jsxs)("span", {
                                        className: $().optionAmount,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: $().num,
                                            children: (0, n.jsx)(_.q, {
                                              value: "monthly" === J.billing ? i3.monthly : i3.yearly,
                                              prefix: "$"
                                            })
                                          }),
                                          (0, n.jsx)("span", {
                                            className: $().per,
                                            children: "/mo"
                                          })
                                        ]
                                      }),
                                      (0, n.jsx)(U, {
                                        className: $().optionBilled,
                                        anchor: "right",
                                        children: "yearly" === J.billing ? `${H.format(12 * i3.yearly)} a year` : "Billed monthly"
                                      })
                                    ]
                                  },
                                  e3
                                );
                              })
                            })
                          }),
                          (0, n.jsxs)("div", {
                            className: $().quote,
                            children: [
                              (0, n.jsxs)("div", {
                                className: $().quoteText,
                                "aria-live": "polite",
                                children: [
                                  (0, n.jsx)(U, {
                                    className: $().quoteLabel,
                                    children: eL.amount < 0 ? "Credit to next invoice" : "Due today"
                                  }),
                                  (0, n.jsx)("span", {
                                    className: $().quoteAmount,
                                    children: (0, n.jsx)("span", {
                                      className: $().num,
                                      children: (0, n.jsx)(_.q, {
                                        value: Math.abs(eL.amount),
                                        prefix: "$",
                                        decimals: 2
                                      })
                                    })
                                  }),
                                  (0, n.jsx)(U, {
                                    className: $().quoteDetail,
                                    children: eq
                                  })
                                ]
                              }),
                              (0, n.jsxs)("div", {
                                className: $().quoteActions,
                                children: [
                                  (0, n.jsx)(y.$, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: eO,
                                    disabled: ee,
                                    children: "Cancel"
                                  }),
                                  (0, n.jsx)(y.$, {
                                    type: "button",
                                    size: "sm",
                                    onClick: function() {
                                      let e3, i3;
                                      if (eL.unchanged || ee) return;
                                      let a3 = T[J.plan], n2 = R[J.billing], l2 = eL.sameTerm ? { ...A2, plan: J.plan } : {
                                        plan: J.plan,
                                        billing: J.billing,
                                        renews: n2.renews,
                                        periodEnd: n2.periodEnd,
                                        daysLeft: n2.days,
                                        periodDays: n2.days
                                      }, t3 = "billing" === eF ? `Switched to ${J.billing} billing` : "up" === eF ? `Upgraded to ${a3.name}` : `Moved to ${a3.name}`, r2 = eL.amount > 0 ? `${t3}. ${e3 = eL.amount, Y.format(e3)} charged to card ending ${el.last4}.` : eL.amount < 0 ? `${t3}. ${i3 = -eL.amount, Y.format(i3)} credited to your next invoice.` : `${t3}.`, s2 = eL.amount > 0 ? {
                                        id: `change-${++ez.current}`,
                                        date: "Sep 22, 2026",
                                        title: `${a3.name} plan`,
                                        detail: eL.sameTerm ? `Prorated, Sep 22 \u2013 ${A2.periodEnd}` : `${"yearly" === J.billing ? "Yearly" : "Monthly"}, Sep 22 \u2013 ${n2.periodEnd}`,
                                        amount: eL.amount,
                                        status: "paid"
                                      } : null;
                                      ei(true), eB(() => {
                                        ei(false), O2(l2), Q("summary"), en(r2), ef(r2), s2 && eg((e4) => [s2, ...e4]), eM.current = () => ek.current;
                                      }, 900);
                                    },
                                    disabled: eL.unchanged,
                                    loading: ee,
                                    children: eI
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      },
                      "picker"
                    )
                  })
                })
              ]
            }),
            (0, n.jsxs)("section", {
              className: $().panel,
              "aria-labelledby": `${v2}-payment`,
              children: [
                (0, n.jsx)("div", {
                  className: $().panelHead,
                  children: (0, n.jsx)("h3", {
                    id: `${v2}-payment`,
                    children: "Payment method"
                  })
                }),
                (0, n.jsxs)("div", {
                  className: $().cardRow,
                  children: [
                    (0, n.jsxs)("div", {
                      className: $().cardFace,
                      "aria-hidden": "true",
                      children: [
                        (0, n.jsxs)("span", {
                          className: $().cardTop,
                          children: [
                            (0, n.jsx)("span", { className: $().chip }),
                            (0, n.jsx)("span", { children: "Business" })
                          ]
                        }),
                        (0, n.jsxs)("span", {
                          className: $().cardBottom,
                          children: [
                            (0, n.jsx)("span", {
                              className: $().cardHolder,
                              children: "Fieldnote Labs"
                            }),
                            (0, n.jsxs)("span", {
                              className: $().cardNumber,
                              children: [
                                (0, n.jsx)("span", { children: "\u2022\u2022\u2022\u2022" }),
                                (0, n.jsx)(K, { value: el.last4 })
                              ]
                            }),
                            (0, n.jsx)("span", {
                              className: $().cardExpiry,
                              children: (0, n.jsx)(K, { value: el.expiry })
                            })
                          ]
                        })
                      ]
                    }),
                    (0, n.jsxs)("div", {
                      className: $().cardDetails,
                      children: [
                        (0, n.jsx)(U, {
                          className: $().cardTitle,
                          children: `Card ending ${el.last4}`
                        }),
                        (0, n.jsx)(U, {
                          className: $().cardMeta,
                          children: `Expires ${el.expiry}`
                        }),
                        (0, n.jsx)(y.$, {
                          ref: eS,
                          type: "button",
                          variant: "secondary",
                          size: "sm",
                          onClick: function() {
                            ec(E), eu({}), eh(""), es("edit"), eM.current = () => eA.current;
                          },
                          disabled: "edit" === er,
                          children: "Update"
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)(V, {
                  children: (0, n.jsx)(o.N, {
                    mode: "popLayout",
                    initial: false,
                    children: "edit" === er ? (0, n.jsxs)(
                      r.PY1.form,
                      {
                        className: $().cardForm,
                        noValidate: true,
                        onSubmit: function(e3) {
                          if (e3.preventDefault(), em) return;
                          let i3 = (function(e4) {
                            let i4 = {};
                            16 !== e4.number.replace(/\D/g, "").length && (i4.number = "Enter all 16 digits");
                            let [a4, n3] = e4.expiry.split("/").map(Number);
                            return !/^\d{2}\/\d{2}$/.test(e4.expiry) || a4 < 1 || a4 > 12 ? i4.expiry = "Use MM/YY, like 08/29" : (n3 < 26 || 26 === n3 && a4 < 9) && (i4.expiry = "This card has expired"), /^\d{3,4}$/.test(e4.cvc) || (i4.cvc = "Enter 3 or 4 digits"), i4;
                          })(eo);
                          eu(i3);
                          let a3 = i3.number ? eA : i3.expiry ? eC : i3.cvc ? eD : null;
                          if (a3) return void a3.current?.focus();
                          let n2 = {
                            last4: eo.number.replace(/\D/g, "").slice(-4),
                            expiry: eo.expiry
                          };
                          ep(true), eB(() => {
                            let e4 = `Card ending ${n2.last4} saved. Renewals and retries now use it.`;
                            ep(false), et(n2), es("summary"), eh(e4), ef(e4), eM.current = () => eS.current;
                          }, 900);
                        },
                        onKeyDown: (e3) => {
                          "Escape" === e3.key && (e3.stopPropagation(), eK());
                        },
                        "aria-label": "New card",
                        ...eW,
                        children: [
                          (0, n.jsx)(b.p, {
                            ref: eA,
                            label: "Card number",
                            inputMode: "numeric",
                            autoComplete: "cc-number",
                            placeholder: "1234 1234 1234 1234",
                            value: eo.number,
                            error: ed.number,
                            onChange: (e3) => eV("number", e3.target.value)
                          }),
                          (0, n.jsxs)("div", {
                            className: $().formRow,
                            children: [
                              (0, n.jsx)(b.p, {
                                ref: eC,
                                label: "Expiry",
                                inputMode: "numeric",
                                autoComplete: "cc-exp",
                                placeholder: "MM/YY",
                                value: eo.expiry,
                                error: ed.expiry,
                                onChange: (e3) => eV("expiry", e3.target.value)
                              }),
                              (0, n.jsx)(b.p, {
                                ref: eD,
                                label: "Security code",
                                inputMode: "numeric",
                                autoComplete: "cc-csc",
                                placeholder: "123",
                                value: eo.cvc,
                                error: ed.cvc,
                                onChange: (e3) => eV("cvc", e3.target.value)
                              })
                            ]
                          }),
                          (0, n.jsxs)("div", {
                            className: $().formFoot,
                            children: [
                              (0, n.jsx)("span", {}),
                              (0, n.jsxs)("div", {
                                className: $().formActions,
                                children: [
                                  (0, n.jsx)(y.$, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: eK,
                                    disabled: em,
                                    children: "Cancel"
                                  }),
                                  (0, n.jsx)(y.$, {
                                    type: "submit",
                                    size: "sm",
                                    loading: em,
                                    children: "Save card"
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      },
                      "edit"
                    ) : ev ? (0, n.jsxs)(
                      r.PY1.p,
                      {
                        className: `${$().notice} ${$().cardNotice}`,
                        ...eW,
                        children: [
                          (0, n.jsx)(u.A, {
                            size: 14,
                            strokeWidth: 2,
                            "aria-hidden": "true"
                          }),
                          ev
                        ]
                      },
                      ev
                    ) : null
                  })
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("section", {
          ref: eN,
          className: $().panel,
          "aria-labelledby": `${v2}-usage`,
          children: [
            (0, n.jsxs)("div", {
              className: $().panelHead,
              children: [
                (0, n.jsx)("h3", {
                  id: `${v2}-usage`,
                  children: "Usage this period"
                }),
                (0, n.jsx)("span", {
                  className: $().panelNote,
                  children: "Sep 14 \u2013 Oct 13"
                })
              ]
            }),
            (0, n.jsx)("div", {
              className: $().meters,
              children: eG.map(
                ({ key: e3, ...i3 }, a3) => (0, n.jsx)(W, { ...i3, index: a3, revealed: e$ }, e3)
              )
            })
          ]
        }),
        (0, n.jsxs)("section", {
          className: $().panel,
          "aria-labelledby": `${v2}-invoices`,
          children: [
            (0, n.jsxs)("div", {
              className: $().panelHead,
              children: [
                (0, n.jsx)("h3", { id: `${v2}-invoices`, children: "Invoices" }),
                (0, n.jsxs)("span", {
                  className: $().recipient,
                  children: [
                    (0, n.jsx)(g.e, {
                      name: "Emma Collins",
                      src: "media/people/emma-collins.svg",
                      size: "sm"
                    }),
                    "Sent to Emma Collins"
                  ]
                })
              ]
            }),
            (0, n.jsx)("ul", {
              className: $().invoices,
              children: (0, n.jsx)(o.N, {
                initial: false,
                children: e_.map((e3) => {
                  let i3, a3, l2 = B[e3.status], t3 = ex[e3.id];
                  return (0, n.jsx)(
                    r.PY1.li,
                    {
                      className: $().invoice,
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: N2 ? { duration: 0 } : {
                        height: k.smooth,
                        opacity: { duration: S.standard, ease: C }
                      },
                      children: (0, n.jsxs)("div", {
                        className: $().invoiceRow,
                        children: [
                          (0, n.jsxs)("span", {
                            className: $().invoiceText,
                            children: [
                              (0, n.jsx)("span", {
                                className: $().invoiceTitle,
                                children: e3.title
                              }),
                              (0, n.jsx)(U, {
                                className: $().invoiceDetail,
                                children: e3.detail
                              })
                            ]
                          }),
                          (0, n.jsx)("span", {
                            className: $().invoiceAmount,
                            children: (i3 = e3.amount, Y.format(i3))
                          }),
                          (0, n.jsxs)("span", {
                            className: $().invoiceMeta,
                            children: [
                              (0, n.jsx)("span", {
                                className: $().invoiceDate,
                                children: e3.date
                              }),
                              (0, n.jsx)("span", {
                                className: $().invoiceStatus,
                                children: (0, n.jsx)(x.E, {
                                  tone: l2.tone,
                                  size: "sm",
                                  icon: l2.icon,
                                  children: l2.label
                                })
                              })
                            ]
                          }),
                          (0, n.jsxs)("span", {
                            className: $().invoiceActions,
                            children: [
                              (0, n.jsx)(o.N, {
                                mode: "popLayout",
                                initial: false,
                                children: "failed" === e3.status && (0, n.jsx)(
                                  r.PY1.span,
                                  {
                                    className: $().payNow,
                                    exit: N2 ? {
                                      opacity: 0,
                                      transition: { duration: 0 }
                                    } : {
                                      opacity: 0,
                                      scale: 0.9,
                                      transition: {
                                        duration: S.exit,
                                        ease: D
                                      }
                                    },
                                    children: (0, n.jsx)(y.$, {
                                      type: "button",
                                      variant: "secondary",
                                      size: "sm",
                                      loading: eb === e3.id,
                                      "aria-label": `Pay ${a3 = e3.amount, Y.format(a3)} for ${e3.title}`,
                                      onClick: () => (function(e4) {
                                        if (eb) return;
                                        let i4 = el.last4;
                                        ew(e4.id), eB(() => {
                                          let a4;
                                          ew(null), eg(
                                            (a5) => a5.map(
                                              (a6) => a6.id === e4.id ? {
                                                ...a6,
                                                status: "paid",
                                                detail: `Paid Sep 22 with card ending ${i4}`
                                              } : a6
                                            )
                                          ), ef(
                                            `${a4 = e4.amount, Y.format(a4)} invoice from ${e4.date} paid with card ending ${i4}.`
                                          ), eM.current = () => eP.current.get(e4.id);
                                        }, 1e3);
                                      })(e3),
                                      children: "Pay now"
                                    })
                                  },
                                  "pay"
                                )
                              }),
                              (0, n.jsx)(y.$, {
                                ref: (i4) => {
                                  i4 ? eP.current.set(e3.id, i4) : eP.current.delete(e3.id);
                                },
                                type: "button",
                                variant: "ghost",
                                size: "sm",
                                className: $().iconButton,
                                loading: "preparing" === t3,
                                "aria-label": "done" === t3 ? `Invoice from ${e3.date} downloaded` : `Download invoice from ${e3.date}`,
                                onClick: () => {
                                  ex[e3.id] || (ey((i4) => ({ ...i4, [e3.id]: "preparing" })), eB(() => {
                                    ey((i4) => ({ ...i4, [e3.id]: "done" })), ef(
                                      `Invoice from ${e3.date} downloaded.`
                                    ), eB(
                                      () => ey((i4) => {
                                        let a4 = { ...i4 };
                                        return delete a4[e3.id], a4;
                                      }),
                                      2200
                                    );
                                  }, 700));
                                },
                                children: "done" === t3 ? (0, n.jsx)(u.A, {
                                  className: $().done,
                                  size: 16,
                                  strokeWidth: 2,
                                  "aria-hidden": "true"
                                }) : (0, n.jsx)(h.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              })
                            ]
                          })
                        ]
                      })
                    },
                    e3.id
                  );
                })
              })
            })
          ]
        }),
        (0, n.jsx)("p", {
          className: $().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ej
        })
      ]
    });
  }
  let X = G;
}

__m(__module,__exports,__require);
});
A.reg(59103, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "clock-3",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6h4", key: "135r8i" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {});
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
A.reg(98344, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { g: () => w });
  var s = a(95155), r = a(12115), i = a(18310), n = a(92171), o = a(80642), l = a(25354), d = a(7770), c = a(64444), u = a.n(c);
  let p = [...d.T.ease.enter], h = [...d.T.ease.standard], m = `blur(${d.T.blur.soft}px)`;
  function y(e2) {
    let t2 = /* @__PURE__ */ new Map();
    return Array.from(e2).map((e3) => {
      let a2 = t2.get(e3) ?? 0;
      return t2.set(e3, a2 + 1), { char: e3, key: `${e3}-${a2}` };
    });
  }
  let g = (e2) => parseFloat(getComputedStyle(e2).width);
  function w({ children: e2, as: t2 = "span", className: a2, id: c2 }) {
    let x = (0, i.I)(), f = (0, r.useRef)(null), _ = (0, r.useRef)(null), k = (0, r.useRef)(0), v = (0, r.useRef)(null), j = (0, r.useMemo)(() => y(e2), [e2]), [b, S] = (0, r.useState)({ current: e2, previous: e2 });
    b.current !== e2 && S({ current: e2, previous: b.current });
    let N = (0, r.useMemo)(
      () => new Set(y(b.previous).map((e3) => e3.key)),
      [b.previous]
    ), A = 0;
    return (0, r.useLayoutEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3) return;
      let a3 = g(t3);
      Number.isFinite(a3) && (k.current && Math.abs(a3 - k.current) > 0.5 && !x ? v.current = (0, n.i)(e3, { width: a3 }, d.T.spring.morph) : (v.current?.stop(), e3.style.width = `${a3}px`), k.current = a3);
    }, [e2, x]), (0, r.useEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = g(t3);
        !Number.isFinite(a4) || 0.5 > Math.abs(a4 - k.current) || (v.current?.stop(), e3.style.width = `${a4}px`, k.current = a4);
      });
      return a3.observe(t3), () => a3.disconnect();
    }, []), (0, s.jsxs)(t2, {
      id: c2,
      className: a2,
      children: [
        (0, s.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          ref: f,
          className: u().frame,
          "aria-hidden": "true",
          children: (0, s.jsx)("span", {
            ref: _,
            className: u().track,
            children: (0, s.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: j.map(({ char: e3, key: t3 }) => {
                let a3 = N.has(t3) ? 0 : A++;
                return (0, s.jsx)(
                  l.PY1.span,
                  {
                    layout: "position",
                    className: u().glyph,
                    initial: !x && {
                      opacity: 0,
                      scale: 0.8,
                      y: "0.14em",
                      filter: m
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: "0em",
                      filter: "blur(0px)"
                    },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.86,
                      y: "-0.1em",
                      filter: m,
                      transition: {
                        duration: d.T.duration.exit,
                        ease: h
                      }
                    },
                    transition: x ? { duration: 0 } : {
                      layout: d.T.spring.morph,
                      default: {
                        duration: d.T.duration.standard + 0.04,
                        ease: p,
                        delay: 0.05 + Math.min(a3, 8) * d.T.stagger.char * 2
                      }
                    },
                    children: " " === e3 ? "\xA0" : e3
                  },
                  t3
                );
              })
            })
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("billing-overview", [9264,14290,22346,64444]);
A.item("billing-overview", {entry:48240, export:"BillingOverview", kind:"block", tier:"pro", unresolved:[]});
})();