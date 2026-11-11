function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { VoiceOrbDemo: () => D, default: () => I });
  var a = i(95155), n = i(12115), r = i(18310), o = i(28245), l = i(92171), s = i(80642), c = i(25354), u = i(48272), d = i(15688), m = i(4705), h = i(7770), f = i(39370), p = i.n(f);
  let g = {
    idle: {
      breath: 0.028,
      wobble: 0.014,
      flow: 0.32,
      swirl: 0.1,
      gain: 0,
      ring: 0,
      shimmer: 0,
      halo: 0.55,
      grow: 0,
      mute: 0
    },
    listening: {
      breath: 0.01,
      wobble: 0.022,
      flow: 0.7,
      swirl: 0.22,
      gain: 0.15,
      ring: 1,
      shimmer: 0,
      halo: 0.75,
      grow: 0.03,
      mute: 0
    },
    thinking: {
      breath: 0.012,
      wobble: 0.03,
      flow: 0.55,
      swirl: 1.25,
      gain: 0,
      ring: 0,
      shimmer: 1,
      halo: 0.6,
      grow: -0.08,
      mute: 0
    },
    speaking: {
      breath: 6e-3,
      wobble: 0.026,
      flow: 0.95,
      swirl: 0.3,
      gain: 0.19,
      ring: 0,
      shimmer: 0,
      halo: 0.9,
      grow: 0.02,
      mute: 0
    }
  }, v = {
    ...g.listening,
    gain: 0,
    ring: 0,
    flow: 0.25,
    wobble: 0.01,
    halo: 0.3,
    grow: -0.02,
    mute: 1
  }, y = Object.keys(g.idle), x = {
    idle: "Voice assistant is idle",
    listening: "Listening",
    thinking: "Thinking",
    speaking: "Speaking"
  }, b = (e2, t2 = 0, i2 = 1) => Math.min(i2, Math.max(t2, e2)), w = (e2, t2, i2) => [
    e2[0] + (t2[0] - e2[0]) * i2,
    e2[1] + (t2[1] - e2[1]) * i2,
    e2[2] + (t2[2] - e2[2]) * i2
  ], k = (e2, t2) => `rgba(${0 | e2[0]},${0 | e2[1]},${0 | e2[2]},${b(t2).toFixed(3)})`;
  function _(e2) {
    let t2 = getComputedStyle(e2), i2 = document.createElement("canvas");
    i2.width = i2.height = 1;
    let a2 = i2.getContext("2d", { willReadFrequently: true }), n2 = (e3, i3) => {
      let n3 = e3.map((e4) => t2.getPropertyValue(e4).trim()).find(Boolean);
      if (!a2 || !n3) return i3;
      a2.clearRect(0, 0, 1, 1), a2.fillStyle = "#000", a2.fillStyle = n3, a2.fillRect(0, 0, 1, 1);
      let r3 = a2.getImageData(0, 0, 1, 1).data;
      return [r3[0], r3[1], r3[2]];
    }, r2 = n2(["--background"], [255, 255, 255]), o2 = 0.299 * r2[0] + 0.587 * r2[1] + 0.114 * r2[2] < 128, l2 = n2(["--voice-orb-tint", "--accent"], [90, 90, 90]), s2 = t2.getPropertyValue("--voice-orb-tint-2").trim() ? n2(["--voice-orb-tint-2"], l2) : (function([e3, t3, i3], a3) {
      let n3 = e3 / 255, r3 = t3 / 255, o3 = i3 / 255, l3 = Math.max(n3, r3, o3), s3 = Math.min(n3, r3, o3), c2 = (l3 + s3) / 2, u2 = l3 - s3;
      if (u2 < 1e-4) return w([e3, t3, i3], [255, 255, 255], a3);
      let d2 = u2 / (1 - Math.abs(2 * c2 - 1)), m2 = l3 === n3 ? (r3 - o3) / u2 % 6 : l3 === r3 ? (o3 - n3) / u2 + 2 : (n3 - r3) / u2 + 4;
      m2 = ((60 * m2 + 26) % 360 + 360) % 360;
      let h2 = b(c2 + a3 * (1 - c2)), f2 = (1 - Math.abs(2 * h2 - 1)) * d2, p2 = f2 * (1 - Math.abs(m2 / 60 % 2 - 1)), g2 = h2 - f2 / 2, [v2, y2, x2] = m2 < 60 ? [f2, p2, 0] : m2 < 120 ? [p2, f2, 0] : m2 < 180 ? [0, f2, p2] : m2 < 240 ? [0, p2, f2] : m2 < 300 ? [p2, 0, f2] : [f2, 0, p2];
      return [(v2 + g2) * 255, (y2 + g2) * 255, (x2 + g2) * 255];
    })(l2, o2 ? 0.08 : 0.14);
    return {
      c1: l2,
      c2: s2,
      c3: w(l2, [255, 255, 255], o2 ? 0.78 : 0.72),
      dark: o2
    };
  }
  function S(e2, t2 = 0) {
    let i2 = e2 + 7.3 * t2, a2 = Math.pow(
      Math.max(0, 0.5 * Math.sin(7.2 * i2) + 0.5 * Math.sin(11.3 * i2 + 1.2)),
      1.4
    ), n2 = b(0.7 * Math.sin(1.15 * i2) + 0.55);
    return b(a2 * n2 * 1.1);
  }
  let A = () => () => {
  };
  function M() {
    let e2 = (0, n.useSyncExternalStore)(
      A,
      () => true,
      () => false
    );
    return !!(0, r.I)() && e2;
  }
  let C = `precision highp float;
uniform vec2 uRes;
uniform float uTime, uSwirl, uScale, uWobble, uVoice, uRing, uRingPhase, uShimmer, uShimmerAngle, uHalo, uMute, uBright, uDark;
uniform vec3 uC1, uC2, uC3;
vec3 permute(vec3 x){return mod(((x*34.)+1.)*x,289.);}
float snoise(vec2 v){
  const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
  vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod(i,289.);
  vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));
  vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);m=m*m;m=m*m;
  vec3 x=2.*fract(p*C.www)-1.;vec3 h=abs(x)-.5;vec3 ox=floor(x+.5);vec3 a0=x-ox;
  m*=1.79284291400159-.85373472095314*(a0*a0+h*h);
  vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.*dot(m,g);
}
void main(){
  vec2 p=(gl_FragCoord.xy/uRes-.5)*2./0.60;
  float r=length(p), ang=atan(p.y,p.x), t=uTime;
  float edge=uScale*(1.+uWobble*(.55*sin(2.*ang+t*.9)+.3*sin(3.*ang-t*1.3)+.15*sin(5.*ang+t*2.1))
    +uVoice*(.05*sin(4.*ang+t*3.1)+.035*sin(7.*ang-t*2.4)));
  float px=2./(0.60*uRes.x);
  float inside=1.-smoothstep(edge-px,edge+px,r);
  vec2 q=p/edge; float rr=min(length(q),1.); float z=sqrt(1.-rr*rr);
  float sw=uSwirl*(1.-rr*.55); vec2 f=mat2(cos(sw),-sin(sw),sin(sw),cos(sw))*q;
  f/=(.55+.45*z);
  vec2 w=vec2(snoise(f*.55+vec2(0.,t*.3)),snoise(f*.55+vec2(5.2,-t*.27)));
  float n1=snoise(f*.62+w*.5+vec2(t*.16,1.7));
  float n2=snoise(f*.9-w*.4+vec2(-t*.2,3.1));
  vec3 col=mix(uC1,uC2,smoothstep(-.9,.9,n1));
  col=mix(col,uC3,smoothstep(0.,1.,n2)*.42);
  float light=dot(normalize(vec3(q*.9,z)),normalize(vec3(-.45,.55,.75)));
  col*=.8+.28*light;
  col=mix(col,uC3,pow(1.-z,2.6)*.5);
  col=mix(col,uC3,clamp(uBright,0.,1.)*(.35+.65*z));
  float da=atan(sin(ang-uShimmerAngle),cos(ang-uShimmerAngle));
  float db=atan(sin(ang-uShimmerAngle+3.14159),cos(ang-uShimmerAngle+3.14159));
  float band=(exp(-da*da*1.8)+.5*exp(-db*db*3.))*smoothstep(.1,.95,rr);
  col=mix(col,mix(uC3,vec3(1.),.7),band*uShimmer*.85);
  vec2 h=q-vec2(-.36,.42); col+=vec3(1.)*exp(-dot(h,h)*8.)*.2;
  col=mix(col,vec3(dot(col,vec3(.299,.587,.114))),uMute*.7);
  col=clamp(col,0.,1.);
  float d=max(r-edge,0.);
  float fade=1.-smoothstep(1.2,1.62,r);
  float halo=exp(-d*(uDark>.5?3.2:4.2))*uHalo*fade;
  float ring=0.;
  for(int i=0;i<3;i++){
    float ph=fract(uRingPhase+float(i)/3.);float rad=edge+.06+ph*.5;float wd=.018+ph*.03;
    float k=(r-rad)/wd; ring+=exp(-k*k)*(1.-ph)*(1.-ph)*smoothstep(0.,.12,ph);
  }
  ring*=uRing*fade;
  float oa=clamp(halo+ring*.5,0.,1.)*(1.-inside);
  vec3 glow=uDark>.5?mix(uC1,uC3,.35):uC1;
  vec3 outc=col*inside+glow*oa;
  gl_FragColor=vec4(outc,inside+oa);
}`;
  function R({
    state: e2,
    inputLevel: t2,
    outputLevel: i2,
    muted: r2 = false,
    size: o2 = 208,
    label: l2,
    className: s2
  }) {
    let c2 = M(), u2 = (0, n.useRef)(null), d2 = (0, n.useRef)({ state: e2, muted: r2, inputLevel: t2, outputLevel: i2 });
    (0, n.useLayoutEffect)(() => {
      d2.current = { state: e2, muted: r2, inputLevel: t2, outputLevel: i2 };
    });
    let m2 = (0, n.useRef)(() => {
    });
    return (0, n.useEffect)(() => {
      let e3 = u2.current;
      if (!e3) return;
      e3.width = e3.height = Math.round(
        o2 * Math.min(2, window.devicePixelRatio || 1)
      );
      let t3 = _(e3), i3 = (function(e4, t4) {
        let i4 = e4.getContext("webgl", {
          alpha: true,
          premultipliedAlpha: true,
          antialias: false,
          depth: false,
          stencil: false,
          powerPreference: "low-power"
        });
        if (!i4) return null;
        let a3 = (e5, t5) => {
          let a4 = i4.createShader(e5);
          return i4.shaderSource(a4, t5), i4.compileShader(a4), i4.getShaderParameter(a4, i4.COMPILE_STATUS) ? a4 : null;
        }, n3 = a3(
          i4.VERTEX_SHADER,
          "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}"
        ), r4 = a3(i4.FRAGMENT_SHADER, C), o3 = i4.createProgram();
        if (!n3 || !r4 || !o3 || (i4.attachShader(o3, n3), i4.attachShader(o3, r4), i4.linkProgram(o3), !i4.getProgramParameter(o3, i4.LINK_STATUS)))
          return null;
        i4.useProgram(o3);
        let l4 = i4.createBuffer();
        i4.bindBuffer(i4.ARRAY_BUFFER, l4), i4.bufferData(
          i4.ARRAY_BUFFER,
          new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
          i4.STATIC_DRAW
        );
        let s4 = i4.getAttribLocation(o3, "a");
        i4.enableVertexAttribArray(s4), i4.vertexAttribPointer(s4, 2, i4.FLOAT, false, 0, 0);
        let c3 = Object.fromEntries(
          [
            "uRes",
            "uTime",
            "uSwirl",
            "uScale",
            "uWobble",
            "uVoice",
            "uRing",
            "uRingPhase",
            "uShimmer",
            "uShimmerAngle",
            "uHalo",
            "uMute",
            "uBright",
            "uDark",
            "uC1",
            "uC2",
            "uC3"
          ].map((e5) => [e5, i4.getUniformLocation(o3, e5)])
        ), u3 = (e5) => {
          i4.uniform3f(
            c3.uC1,
            e5.c1[0] / 255,
            e5.c1[1] / 255,
            e5.c1[2] / 255
          ), i4.uniform3f(
            c3.uC2,
            e5.c2[0] / 255,
            e5.c2[1] / 255,
            e5.c2[2] / 255
          ), i4.uniform3f(
            c3.uC3,
            e5.c3[0] / 255,
            e5.c3[1] / 255,
            e5.c3[2] / 255
          ), i4.uniform1f(c3.uDark, +!!e5.dark);
        };
        return u3(t4), {
          setPalette: u3,
          draw({
            p: t5,
            time: a4,
            swirl: n4,
            ringPhase: r5,
            shimmerAngle: o4,
            level: l5,
            clock: s5
          }) {
            i4.viewport(0, 0, e4.width, e4.height), i4.uniform2f(c3.uRes, e4.width, e4.height);
            let u4 = l5 * t5.gain;
            i4.uniform1f(c3.uTime, a4), i4.uniform1f(c3.uSwirl, n4), i4.uniform1f(
              c3.uScale,
              1 + t5.grow + t5.breath * Math.sin(1.25 * s5) + 0.9 * u4
            ), i4.uniform1f(c3.uWobble, t5.wobble), i4.uniform1f(c3.uVoice, 2.6 * u4), i4.uniform1f(c3.uRing, t5.ring * (0.35 + 0.9 * l5)), i4.uniform1f(c3.uRingPhase, r5), i4.uniform1f(c3.uShimmer, t5.shimmer), i4.uniform1f(c3.uShimmerAngle, o4), i4.uniform1f(
              c3.uHalo,
              t5.halo * (0.2 + 1.6 * u4) + 0.08 * t5.shimmer
            ), i4.uniform1f(c3.uMute, t5.mute), i4.uniform1f(c3.uBright, 2.2 * u4), i4.clearColor(0, 0, 0, 0), i4.clear(i4.COLOR_BUFFER_BIT), i4.drawArrays(i4.TRIANGLE_STRIP, 0, 4);
          },
          dispose() {
            i4.deleteBuffer(l4), i4.deleteProgram(o3), i4.deleteShader(n3), i4.deleteShader(r4);
          }
        };
      })(e3, t3) ?? (function(e4, t4) {
        let i4 = e4.getContext("2d");
        if (!i4) return null;
        let a3 = t4;
        return {
          setPalette(e5) {
            a3 = e5;
          },
          draw({ p: t5, time: n3, ringPhase: r4, level: o3, clock: l4 }) {
            let s4 = e4.width, c3 = s4 / 2, u3 = o3 * t5.gain, d3 = 0.6 * c3 * (1 + t5.grow + t5.breath * Math.sin(1.25 * l4) + 0.9 * u3);
            i4.clearRect(0, 0, s4, s4);
            let m3 = i4.createRadialGradient(c3, c3, d3, c3, c3, c3);
            m3.addColorStop(0, k(a3.c1, t5.halo * (0.2 + 2.2 * u3) * 0.6)), m3.addColorStop(1, k(a3.c1, 0)), i4.fillStyle = m3, i4.fillRect(0, 0, s4, s4);
            for (let e5 = 0; e5 < 3 && t5.ring > 0.01; e5++) {
              let n4 = (r4 + e5 / 3) % 1;
              i4.beginPath(), i4.arc(c3, c3, d3 * (1.06 + 0.5 * n4), 0, 2 * Math.PI), i4.strokeStyle = k(
                a3.c1,
                t5.ring * (0.35 + 0.9 * o3) * (1 - n4) * (1 - n4) * 0.4
              ), i4.lineWidth = 8e-3 * s4, i4.stroke();
            }
            let h3 = i4.createRadialGradient(
              c3 - 0.36 * d3,
              c3 - 0.42 * d3,
              0.05 * d3,
              c3,
              c3,
              d3
            );
            h3.addColorStop(0, k(a3.c3, 1)), h3.addColorStop(0.45, k(w(a3.c2, a3.c3, 2 * u3), 1)), h3.addColorStop(1, k(a3.c1, 1)), i4.beginPath(), i4.arc(c3 + Math.sin(n3) * d3 * t5.wobble, c3, d3, 0, 2 * Math.PI), i4.fillStyle = h3, i4.fill();
          },
          dispose() {
          }
        };
      })(e3, t3);
      if (!i3) return;
      let a2 = () => "listening" === d2.current.state && d2.current.muted ? v : g[d2.current.state], n2 = { ...a2() }, r3 = Object.fromEntries(y.map((e4) => [e4, 0])), l3 = {
        p: n2,
        time: 0,
        swirl: 0,
        ringPhase: 0,
        shimmerAngle: 0,
        level: 0,
        clock: 0
      }, s3 = performance.now(), h2 = 0, f2 = true, p2 = () => {
        let e4 = a2();
        i3.draw({
          p: e4,
          time: 1.2,
          swirl: 0.6,
          ringPhase: 0.35,
          shimmerAngle: 2.2,
          level: "speaking" === d2.current.state ? 0.4 : 0.3 * ("listening" === d2.current.state && !d2.current.muted),
          clock: 0
        });
      }, x2 = (e4) => {
        let t4 = Math.min(0.05, (e4 - s3) / 1e3);
        s3 = e4, l3.clock += t4;
        let o3 = a2();
        for (let e5 of y)
          r3[e5] += (40 * (o3[e5] - n2[e5]) - 12.6 * r3[e5]) * t4, n2[e5] += r3[e5] * t4;
        let {
          state: c3,
          muted: u3,
          inputLevel: m3,
          outputLevel: f3
        } = d2.current, p3 = "listening" !== c3 || u3 ? "speaking" === c3 ? f3?.get() ?? S(l3.clock) : 0 : m3?.get() ?? 0.7 * S(l3.clock, 3);
        l3.level += (b(p3) - l3.level) * (1 - Math.exp(-t4 * (p3 > l3.level ? 18 : 5))), l3.time += t4 * (n2.flow + l3.level * n2.gain * 3), l3.swirl += t4 * n2.swirl, l3.ringPhase = (l3.ringPhase + t4 * (0.42 + 0.5 * l3.level)) % 1, l3.shimmerAngle -= 2.3 * t4, i3.draw(l3), h2 = requestAnimationFrame(x2);
      }, A2 = () => {
        c2 || h2 || !f2 || document.hidden || (s3 = performance.now(), h2 = requestAnimationFrame(x2));
      }, M2 = () => {
        cancelAnimationFrame(h2), h2 = 0;
      };
      m2.current = () => {
        c2 && p2();
      };
      let R2 = () => {
        t3 = _(e3), i3.setPalette(t3), c2 && p2();
      }, j2 = new MutationObserver(R2);
      j2.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class", "style", "data-theme", "data-accent"]
      });
      let P2 = window.matchMedia("(prefers-color-scheme: dark)");
      P2.addEventListener("change", R2);
      let T2 = new IntersectionObserver(([e4]) => {
        (f2 = e4.isIntersecting) ? A2() : M2();
      });
      T2.observe(e3);
      let E2 = () => {
        document.hidden ? M2() : A2();
      };
      return document.addEventListener("visibilitychange", E2), c2 ? p2() : A2(), () => {
        M2(), j2.disconnect(), T2.disconnect(), P2.removeEventListener("change", R2), document.removeEventListener("visibilitychange", E2), i3.dispose();
      };
    }, [o2, c2]), (0, n.useEffect)(() => {
      m2.current();
    }, [e2, r2]), (0, a.jsx)(
      "canvas",
      {
        ref: u2,
        className: [p().orb, s2].filter(Boolean).join(" "),
        style: { width: o2, height: o2 },
        "data-state": e2,
        "data-reduced": c2 ? "" : void 0,
        role: "img",
        "aria-label": l2 ?? ("listening" === e2 && r2 ? "Muted" : x[e2])
      },
      c2 ? "still" : "live"
    );
  }
  function j({
    text: e2,
    turn: t2 = 0,
    speaker: i2 = "assistant",
    complete: r2 = false,
    className: o2
  }) {
    let l2 = M(), u2 = e2 ? e2.split(/\s+/) : [], { spring: d2, duration: m2, ease: f2, blur: g2 } = h.T;
    return (0, a.jsxs)("div", {
      className: [p().transcript, o2].filter(Boolean).join(" "),
      children: [
        (0, a.jsx)(s.N, {
          mode: "popLayout",
          initial: false,
          children: (0, a.jsx)(
            c.PY1.p,
            {
              className: p().line,
              "data-speaker": i2,
              "aria-hidden": "true",
              layout: !l2 && "position",
              initial: l2 ? { opacity: 0 } : { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: l2 ? { opacity: 0 } : {
                opacity: 0,
                y: -10,
                filter: `blur(${g2.soft}px)`,
                transition: { duration: m2.exit, ease: [...f2.standard] }
              },
              transition: l2 ? { duration: m2.instant } : d2.smooth,
              children: u2.map(
                (e3, t3) => (0, a.jsxs)(
                  n.Fragment,
                  {
                    children: [
                      (0, a.jsx)(c.PY1.span, {
                        className: p().word,
                        initial: l2 ? { opacity: 0 } : { opacity: 0, filter: `blur(${g2.soft}px)`, y: 3 },
                        animate: { opacity: 1, filter: "blur(0px)", y: 0 },
                        transition: {
                          duration: l2 ? m2.instant : 0.34,
                          ease: [...f2.enter]
                        },
                        children: e3
                      }),
                      t3 < u2.length - 1 ? " " : null
                    ]
                  },
                  t3
                )
              )
            },
            t2
          )
        }),
        (0, a.jsx)("p", {
          className: p().srOnly,
          "aria-live": "polite",
          children: r2 ? e2 : ""
        })
      ]
    });
  }
  function P({
    active: e2,
    muted: t2 = false,
    elapsed: i2 = 0,
    onStart: r2,
    onMuteChange: o2,
    onEnd: l2,
    startLabel: f2 = "Start voice chat",
    className: g2
  }) {
    let v2 = M(), { spring: y2, duration: x2, blur: b2 } = h.T, w2 = (0, n.useRef)(null), k2 = (0, n.useRef)(null), _2 = (0, n.useRef)(null), S2 = (0, n.useRef)(false), [A2, C2] = (0, n.useState)("auto");
    (0, n.useLayoutEffect)(() => {
      let e3 = w2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = () => C2(parseFloat(getComputedStyle(e3).width) || e3.offsetWidth);
      t3();
      let i3 = new ResizeObserver(t3);
      return i3.observe(e3), () => i3.disconnect();
    }, [e2]), (0, n.useEffect)(() => {
      S2.current && (S2.current = false, (e2 ? k2.current : _2.current)?.focus());
    }, [e2]);
    let R2 = v2 ? { duration: 0 } : y2.morph, j2 = v2 ? { opacity: 0 } : { opacity: 0, scale: 0.92, filter: `blur(${b2.soft}px)` }, T2 = { ...j2, transition: { duration: x2.instant } }, E2 = v2 ? { duration: x2.instant } : {
      ...y2.snappy,
      opacity: { duration: x2.fast },
      filter: { duration: x2.fast }
    };
    return (0, a.jsx)(c.PY1.div, {
      className: [p().controls, g2].filter(Boolean).join(" "),
      "data-active": e2 ? "" : void 0,
      initial: false,
      animate: { width: A2 },
      transition: R2,
      children: (0, a.jsx)(s.N, {
        mode: "popLayout",
        initial: false,
        children: e2 ? (0, a.jsxs)(
          c.PY1.div,
          {
            ref: w2,
            className: p().live,
            initial: j2,
            animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
            exit: T2,
            transition: E2,
            children: [
              (0, a.jsx)("button", {
                ref: k2,
                type: "button",
                className: p().round,
                "aria-pressed": t2,
                "aria-label": t2 ? "Unmute microphone" : "Mute microphone",
                onClick: () => o2?.(!t2),
                children: (0, a.jsx)(s.N, {
                  mode: "popLayout",
                  initial: false,
                  children: (0, a.jsx)(
                    c.PY1.span,
                    {
                      className: p().glyph,
                      initial: { opacity: 0, scale: 0.6 },
                      animate: { opacity: 1, scale: 1 },
                      exit: {
                        opacity: 0,
                        scale: 0.6,
                        transition: { duration: x2.instant }
                      },
                      transition: v2 ? { duration: x2.instant } : y2.snappy,
                      children: t2 ? (0, a.jsx)(u.A, {
                        size: 18,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }) : (0, a.jsx)(d.A, {
                        size: 18,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    },
                    t2 ? "off" : "on"
                  )
                })
              }),
              (0, a.jsx)("span", {
                className: p().clock,
                role: "timer",
                "aria-label": `${Math.floor(i2 / 60)} minutes ${Math.floor(i2 % 60)} seconds`,
                children: `${Math.floor(i2 / 60)}:${String(Math.floor(i2 % 60)).padStart(2, "0")}`
              }),
              (0, a.jsx)("button", {
                type: "button",
                className: p().end,
                "aria-label": "End voice chat",
                onClick: () => {
                  S2.current = true, l2?.();
                },
                children: (0, a.jsx)(m.A, {
                  size: 18,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              })
            ]
          },
          "live"
        ) : (0, a.jsx)(
          c.PY1.div,
          {
            ref: w2,
            className: p().idle,
            initial: j2,
            animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
            exit: T2,
            transition: E2,
            children: (0, a.jsxs)("button", {
              ref: _2,
              type: "button",
              className: p().start,
              onClick: () => {
                S2.current = true, r2?.();
              },
              children: [
                (0, a.jsx)(d.A, {
                  size: 18,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                f2
              ]
            })
          },
          "start"
        )
      })
    });
  }
  var T = i(23086), E = i.n(T);
  let z = [
    {
      you: "Can you move my three o'clock with Marcus to tomorrow morning?",
      reply: "Done. You're meeting Marcus at 9:30 tomorrow, and I let him know."
    },
    {
      you: "What does the rest of my afternoon look like?",
      reply: "Just the design review with Jasmine at 4. After that you're clear."
    },
    {
      you: "Remind me to send the Q3 notes after the review.",
      reply: "Okay. I'll remind you at 5 to send the Q3 notes."
    }
  ], N = (e2) => 150 + 22 * e2.length, F = {
    idle: "Ready",
    listening: "Listening",
    thinking: "Thinking",
    speaking: "Speaking"
  }, L = {
    idle: "Start voice chat",
    listening: "Send now",
    thinking: "Cancel and keep talking",
    speaking: "Interrupt"
  };
  function D() {
    let e2 = !!(0, r.I)(), [t2, i2] = (0, n.useState)("idle"), [u2, d2] = (0, n.useState)(0), [m2, f2] = (0, n.useState)(0), [p2, g2] = (0, n.useState)(false), [v2, y2] = (0, n.useState)(0), [x2, w2] = (0, n.useState)(null), k2 = (0, n.useRef)(null), _2 = "idle" !== t2, A2 = (function(e3) {
      let t3 = (0, o.d)(0), [i3, a2] = (0, n.useState)("off");
      return (0, n.useEffect)(() => {
        if (!e3) return;
        let i4 = false, n2 = 0, r2 = null, o2 = null, l2 = () => {
          a2("simulated");
          let e4 = performance.now(), i5 = (a3) => {
            t3.set(0.8 * S((a3 - e4) / 1e3, 3)), n2 = requestAnimationFrame(i5);
          };
          n2 = requestAnimationFrame(i5);
        };
        return (async () => {
          if (await Promise.resolve(), !i4) {
            if (!navigator.mediaDevices?.getUserMedia || "u" < typeof AudioContext)
              return l2();
            a2("requesting");
            try {
              if (r2 = await navigator.mediaDevices.getUserMedia({
                audio: { echoCancellation: true, noiseSuppression: true }
              }), i4)
                return void r2.getTracks().forEach((e5) => e5.stop());
              let e4 = (o2 = new AudioContext()).createAnalyser();
              e4.fftSize = 1024, o2.createMediaStreamSource(r2).connect(e4);
              let l3 = new Float32Array(e4.fftSize);
              a2("microphone");
              let s2 = () => {
                e4.getFloatTimeDomainData(l3);
                let i5 = 0;
                for (let e5 = 0; e5 < l3.length; e5++) i5 += l3[e5] * l3[e5];
                let a3 = 20 * Math.log10(Math.sqrt(i5 / l3.length) + 1e-6);
                t3.set(b((a3 + 58) / 38)), n2 = requestAnimationFrame(s2);
              };
              s2();
            } catch {
              i4 || l2();
            }
          }
        })(), () => {
          i4 = true, cancelAnimationFrame(n2), r2?.getTracks().forEach((e4) => e4.stop()), o2?.close(), t3.set(0);
        };
      }, [e3, t3]), { level: t3, source: e3 ? i3 : "off" };
    })(_2), M2 = (0, o.d)(0), C2 = z[u2 % z.length];
    function T2() {
      w2(null), y2(0), d2(0), f2(0), g2(false), i2("listening");
    }
    function D2() {
      w2(v2), i2("idle"), f2(0), g2(false);
    }
    (0, n.useEffect)(() => {
      if ("idle" === t2) return;
      let e3 = 0;
      if ("listening" === t2) {
        if (p2) return;
        let t3 = C2.you.split(" ");
        e3 = window.setTimeout(
          () => m2 < t3.length ? f2(m2 + 1) : i2("thinking"),
          0 === m2 ? 900 : m2 < t3.length ? N(t3[m2 - 1]) : 700
        );
      } else if ("thinking" === t2)
        e3 = window.setTimeout(() => {
          f2(0), i2("speaking");
        }, 1500);
      else {
        let t3 = C2.reply.split(" ");
        e3 = window.setTimeout(
          () => {
            m2 < t3.length ? f2(m2 + 1) : (d2((e4) => e4 + 1), f2(0), i2("listening"));
          },
          0 === m2 ? 260 : m2 < t3.length ? N(t3[m2 - 1]) : 1300
        );
      }
      return () => window.clearTimeout(e3);
    }, [t2, m2, p2, C2]), (0, n.useEffect)(() => {
      if ("speaking" !== t2 || 0 === m2) return;
      let e3 = (0, l.i)(M2, [0.95, 0.12], {
        duration: 0.32,
        ease: [...h.T.ease.enter]
      });
      return () => e3.stop();
    }, [t2, m2, M2]), (0, n.useEffect)(() => {
      if (!_2) return;
      let e3 = window.setInterval(() => y2((e4) => e4 + 1), 1e3);
      return () => window.clearInterval(e3);
    }, [_2]);
    let I2 = "idle" === t2 ? {
      key: `idle-${x2 ?? "new"}`,
      text: null === x2 ? "Tap the orb and ask about your calendar." : `Call ended after ${Math.floor(x2 / 60)}:${String(x2 % 60).padStart(2, "0")}.`,
      speaker: "system",
      complete: true
    } : "speaking" === t2 ? {
      key: `reply-${u2}`,
      text: C2.reply.split(" ").slice(0, m2).join(" "),
      speaker: "assistant",
      complete: m2 >= C2.reply.split(" ").length
    } : {
      key: `you-${u2}`,
      text: C2.you.split(" ").slice(0, m2).join(" "),
      speaker: "user",
      complete: "thinking" === t2
    }, q = "listening" === t2 && p2 ? "Muted" : F[t2], B = "requesting" === A2.source ? "Waiting for microphone permission" : "off" === A2.source ? "Uses your microphone level only, if you allow it." : "", O = e2 ? { opacity: 0 } : { opacity: 0, y: 4, filter: `blur(${h.T.blur.soft}px)` };
    return (0, a.jsxs)("div", {
      className: E().demo,
      onKeyDown: (e3) => {
        "Escape" === e3.key && _2 && (e3.preventDefault(), D2(), k2.current?.focus());
      },
      children: [
        (0, a.jsx)("p", {
          className: E().status,
          "aria-live": "polite",
          children: (0, a.jsx)(s.N, {
            mode: "popLayout",
            initial: false,
            children: (0, a.jsx)(
              c.PY1.span,
              {
                className: E().statusText,
                initial: O,
                animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                exit: { ...O, transition: { duration: h.T.duration.instant } },
                transition: e2 ? { duration: h.T.duration.instant } : {
                  duration: h.T.duration.standard,
                  ease: [...h.T.ease.enter]
                },
                children: q
              },
              q
            )
          })
        }),
        (0, a.jsx)("button", {
          ref: k2,
          type: "button",
          className: E().orb,
          onClick: function() {
            "idle" === t2 ? T2() : "listening" === t2 ? m2 > 0 && (f2(C2.you.split(" ").length), i2("thinking")) : ("thinking" === t2 ? f2(C2.you.split(" ").length) : (d2((e3) => e3 + 1), f2(0)), i2("listening"));
          },
          "aria-label": L[t2],
          disabled: "listening" === t2 && 0 === m2,
          children: (0, a.jsx)(R, {
            state: t2,
            inputLevel: "microphone" === A2.source || "simulated" === A2.source ? A2.level : void 0,
            outputLevel: M2,
            muted: p2,
            size: 200
          })
        }),
        (0, a.jsx)(j, {
          text: I2.text,
          turn: I2.key,
          speaker: I2.speaker,
          complete: I2.complete
        }),
        (0, a.jsx)(P, {
          active: _2,
          muted: p2,
          elapsed: v2,
          onStart: T2,
          onMuteChange: g2,
          onEnd: D2
        }),
        (0, a.jsx)("p", {
          className: E().note,
          "aria-live": "polite",
          children: B
        })
      ]
    });
  }
  let I = D;
}

__m(__module,__exports,__require);
}