var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// arc-tree:tree:components/action-swap/action-swap.tsx
var action_swap_exports = {};
__export(action_swap_exports, {
  ActionSwap: () => ActionSwap,
  default: () => action_swap_default2
});

// ../out/vendor/npm/react.mjs
var R = globalThis.__ARC__.dom.R;
var Activity = R.Activity;
var Children = R.Children;
var Component = R.Component;
var Fragment = R.Fragment;
var Profiler = R.Profiler;
var PureComponent = R.PureComponent;
var StrictMode = R.StrictMode;
var Suspense = R.Suspense;
var ViewTransition = R.ViewTransition;
var __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
var __COMPILER_RUNTIME = R.__COMPILER_RUNTIME;
var act = R.act;
var addTransitionType = R.addTransitionType;
var cache = R.cache;
var cacheSignal = R.cacheSignal;
var captureOwnerStack = R.captureOwnerStack;
var cloneElement = R.cloneElement;
var createContext = R.createContext;
var createElement = R.createElement;
var createRef = R.createRef;
var forwardRef = R.forwardRef;
var isValidElement = R.isValidElement;
var lazy = R.lazy;
var memo = R.memo;
var startTransition = R.startTransition;
var unstable_useCacheRefresh = R.unstable_useCacheRefresh;
var use = R.use;
var useActionState = R.useActionState;
var useCallback = R.useCallback;
var useContext = R.useContext;
var useDebugValue = R.useDebugValue;
var useDeferredValue = R.useDeferredValue;
var useEffect = R.useEffect;
var useEffectEvent = R.useEffectEvent;
var useId = R.useId;
var useImperativeHandle = R.useImperativeHandle;
var useInsertionEffect = R.useInsertionEffect;
var useLayoutEffect = R.useLayoutEffect;
var useMemo = R.useMemo;
var useOptimistic = R.useOptimistic;
var useReducer = R.useReducer;
var useRef = R.useRef;
var useState = R.useState;
var useSyncExternalStore = R.useSyncExternalStore;
var useTransition = R.useTransition;
var version = R.version;

// ../out/vendor/npm/react-jsx-runtime.mjs
var J = globalThis.__ARC__.dom.J;
var jsx = J.jsx;
var jsxs = J.jsxs;
var Fragment2 = J.Fragment;

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = /* @__PURE__ */ createContext({});

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
function useConstant(init) {
  const ref = useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof window !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var PresenceContext = /* @__PURE__ */ createContext(null);

// node_modules/motion-utils/dist/es/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1)
    arr.splice(index, 1);
}

// node_modules/motion-utils/dist/es/clamp.mjs
var clamp = (min, max, v) => {
  if (v > max)
    return max;
  if (v < min)
    return min;
  return v;
};

// node_modules/motion-utils/dist/es/global-config.mjs
var MotionGlobalConfig = {};

// node_modules/motion-utils/dist/es/is-numerical-string.mjs
var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

// node_modules/motion-utils/dist/es/is-object.mjs
var isObject = (value) => typeof value === "object" && value !== null;

// node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);

// node_modules/motion-utils/dist/es/memo.mjs
// @__NO_SIDE_EFFECTS__
function memo2(callback) {
  let result;
  return () => {
    if (result === void 0)
      result = callback();
    return result;
  };
}

// node_modules/motion-utils/dist/es/noop.mjs
var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;

// node_modules/motion-utils/dist/es/pipe.mjs
var pipe = (...transformers) => transformers.reduce((a, b) => (v) => b(a(v)));

// node_modules/motion-utils/dist/es/progress.mjs
var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
  const range = to - from;
  return range ? (value - from) / range : 1;
};

// node_modules/motion-utils/dist/es/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => this.remove(handler);
  }
  remove(handler) {
    removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// node_modules/motion-utils/dist/es/time-conversion.mjs
var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;

// node_modules/motion-utils/dist/es/velocity-per-second.mjs
var velocityPerSecond = /* @__NO_SIDE_EFFECTS__ */ (velocity, frameDuration) => frameDuration ? velocity * (1e3 / frameDuration) : 0;

// node_modules/motion-utils/dist/es/wrap.mjs
var wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => t * (3 * (1 - t) * ((1 - t) * a1 + t * a2) + t * t);
// @__NO_SIDE_EFFECTS__
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop;
  return (x) => {
    let lowerBound = 0;
    let upperBound = 1;
    let t = x;
    for (let i = 0; ; i++) {
      if (!(t >= lowerBound && t <= upperBound)) {
        t = (lowerBound + upperBound) / 2;
      }
      const currentX = calcBezier(t, mX1, mX2) - x;
      if (currentX * currentX < 1e-28 || i === 40)
        break;
      currentX > 0 ? upperBound = t : lowerBound = t;
      t -= currentX * 1e-7 / (calcBezier(t + 1e-7, mX1, mX2) - x - currentX);
    }
    return calcBezier(t, mY1, mY2);
  };
}

// node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => 1 - easing(1 - p);

// node_modules/motion-utils/dist/es/easing/back.mjs
var backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = /* @__PURE__ */ reverseEasing(backOut);
var backInOut = /* @__PURE__ */ mirrorEasing(backIn);

// node_modules/motion-utils/dist/es/easing/anticipate.mjs
var anticipate = (p) => p >= 1 ? 1 : (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

// node_modules/motion-utils/dist/es/easing/circ.mjs
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = /* @__PURE__ */ reverseEasing(circIn);
var circInOut = /* @__PURE__ */ mirrorEasing(circIn);

// node_modules/motion-utils/dist/es/easing/ease.mjs
var easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
var easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
var easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);

// node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = /* @__NO_SIDE_EFFECTS__ */ (ease2) => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};

// node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
// @__NO_SIDE_EFFECTS__
function getEasingForSegment(easing, i) {
  return isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}

// node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = /* @__NO_SIDE_EFFECTS__ */ (easing) => Array.isArray(easing) && typeof easing[0] === "number";

// node_modules/motion-utils/dist/es/easing/utils/map.mjs
var easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var isValidEasing = (easing) => {
  return typeof easing === "string";
};
var easingDefinitionToFunction = (definition) => {
  if (isBezierDefinition(definition)) {
    typeof process !== "undefined" && false;
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (isValidEasing(definition)) {
    typeof process !== "undefined" && false;
    return easingLookup[definition];
  }
  return definition;
};

// node_modules/motion-dom/dist/es/frameloop/frame-data.mjs
var frameData = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
};

// node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
  now = void 0;
}
var time = {
  now: () => {
    if (now === void 0) {
      time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
    }
    return now;
  },
  set: (newTime) => {
    now = newTime;
    queueMicrotask(clearTime);
  }
};

// node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;

// node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
var startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
var isCSSVariableToken = (value) => {
  const startsWithToken = startsAsVariableToken(value);
  if (!startsWithToken)
    return false;
  return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function containsCSSVariable(value) {
  if (typeof value !== "string")
    return false;
  return value.split("/*")[0].includes("var(--");
}

// node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = {
  ...number,
  transform: (v) => clamp(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

// node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
  return v == null;
}

// node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

// node_modules/motion-dom/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (typeof v !== "string")
    return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp(0, 255, v);
var rgbUnit = {
  ...number,
  transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: /* @__PURE__ */ isColorString("rgb", "red"),
  parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/motion-dom/dist/es/value/types/color/hex.mjs
var channel = (v, i, size) => {
  const c = v.substring(1 + i * size, 1 + (i + 1) * size);
  return size > 1 ? c : c + c;
};
function parseHex(v) {
  const size = v.length > 5 ? 2 : 1;
  const alpha2 = channel(v, 3, size);
  return {
    red: parseInt(channel(v, 0, size), 16),
    green: parseInt(channel(v, 1, size), 16),
    blue: parseInt(channel(v, 2, size), 16),
    alpha: alpha2 ? parseInt(alpha2, 16) / 255 : 1
  };
}
var hex = {
  test: /* @__PURE__ */ isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
var createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
  test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = /* @__PURE__ */ createUnitType("deg");
var percent = /* @__PURE__ */ createUnitType("%");
var px = /* @__PURE__ */ createUnitType("px");
var vh = /* @__PURE__ */ createUnitType("vh");
var vw = /* @__PURE__ */ createUnitType("vw");
var progressPercentage = /* @__PURE__ */ (() => ({
  ...percent,
  parse: (v) => percent.parse(v) / 100,
  transform: (v) => percent.transform(v * 100)
}))();

// node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: /* @__PURE__ */ isColorString("hsl", "hue"),
  parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  },
  getAnimatableNone: (v) => {
    const parsed = color.parse(v);
    parsed.alpha = 0;
    return color.transform(parsed);
  }
};

// node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

// node_modules/motion-dom/dist/es/value/types/complex/index.mjs
var hasFloat = /* @__PURE__ */ new RegExp(floatRegex.source);
var hasColor = /* @__PURE__ */ new RegExp(colorRegex.source, "i");
function test(v) {
  return isNaN(v) && typeof v === "string" && (hasFloat.test(v) || hasColor.test(v));
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
function hasComplexValues(value) {
  const asString = value.toString();
  return hasFloat.test(asString) || hasColor.test(asString);
}
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const values = [];
  const indexes = {
    color: [],
    number: [],
    var: []
  };
  const types = [];
  let i = 0;
  const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
    if (color.test(parsedValue)) {
      indexes.color.push(i);
      types.push(COLOR_TOKEN);
      values.push(color.parse(parsedValue));
    } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
      indexes.var.push(i);
      types.push(VAR_TOKEN);
      values.push(parsedValue);
    } else {
      indexes.number.push(i);
      types.push(NUMBER_TOKEN);
      values.push(parseFloat(parsedValue));
    }
    ++i;
    return SPLIT_TOKEN;
  });
  const split = tokenised.split(SPLIT_TOKEN);
  return { values, split, indexes, types };
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function buildTransformer({ split, types }) {
  const numSections = split.length;
  return (v) => {
    let output = "";
    for (let i = 0; i < numSections; i++) {
      output += split[i];
      if (v[i] !== void 0) {
        const type = types[i];
        if (type === NUMBER_TOKEN) {
          output += sanitize(v[i]);
        } else if (type === COLOR_TOKEN) {
          output += color.transform(v[i]);
        } else {
          output += v[i];
        }
      }
    }
    return output;
  };
}
function createTransformer(source) {
  return buildTransformer(analyseComplexValue(source));
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
var convertToZero = (value, splitBefore) => {
  if (typeof value === "number") {
    return splitBefore?.trim().endsWith("/") ? value : 0;
  }
  return convertNumbersToZero(value);
};
function getAnimatableNone(v) {
  const info = analyseComplexValue(v);
  const transformer = buildTransformer(info);
  return transformer(info.values.map((value, i) => convertToZero(value, info.split[i])));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};

// node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
  return (p) => p > 0 ? b : a;
}

// node_modules/motion-dom/dist/es/utils/mix/number.mjs
var mixNumber = (from, to, progress2) => {
  return from + (to - from) * progress2;
};

// node_modules/motion-dom/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const expo = v * (to * to - fromExpo) + fromExpo;
  return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  if (!type) {
    return false;
  }
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  if (!fromRGBA || !toRGBA) {
    return mixImmediate(from, to);
  }
  const blended = { ...fromRGBA };
  return (v) => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
function mixVisibility(origin, target) {
  if (invisibleValues.has(origin)) {
    return (p) => p <= 0 ? origin : target;
  } else {
    return (p) => p >= 1 ? target : origin;
  }
}

// node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function mixNumber2(a, b) {
  return (p) => mixNumber(a, b, p);
}
function getMixer(a) {
  if (typeof a === "number") {
    return mixNumber2;
  } else if (typeof a === "string") {
    return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
  } else if (Array.isArray(a)) {
    return mixArray;
  } else if (typeof a === "object") {
    return color.test(a) ? mixColor : mixObject;
  }
  return mixImmediate;
}
function mixArray(a, b) {
  const output = [...a];
  const numValues = output.length;
  const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
  return (p) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](p);
    }
    return output;
  };
}
function mixObject(a, b) {
  const output = { ...a, ...b };
  const blendValue = {};
  for (const key in output) {
    if (a[key] !== void 0 && b[key] !== void 0) {
      blendValue[key] = getMixer(a[key])(a[key], b[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
}
function matchOrder(origin, target) {
  const orderedOrigin = [];
  const pointers = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < target.values.length; i++) {
    const type = target.types[i];
    const originIndex = origin.indexes[type][pointers[type]];
    const originValue = origin.values[originIndex] ?? 0;
    orderedOrigin[i] = originValue;
    pointers[type]++;
  }
  return orderedOrigin;
}
var mixComplex = (origin, target) => {
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
  if (canInterpolate) {
    if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
      return mixVisibility(origin, target);
    }
    return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), buildTransformer(targetStats));
  } else {
    return mixImmediate(origin, target);
  }
};

// node_modules/motion-dom/dist/es/utils/mix/index.mjs
var unitValue = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function mixUnit(from, to) {
  const a = unitValue.exec(from);
  if (!a)
    return;
  const b = unitValue.exec(to);
  if (!b || a[2] !== b[2])
    return;
  const unit = a[2];
  const origin = parseFloat(a[1]);
  const target = parseFloat(b[1]);
  return (p) => sanitize(mixNumber(origin, target, p)) + unit;
}
function mix(from, to, p) {
  if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
    return mixNumber(from, to, p);
  }
  if (typeof from === "string" && typeof to === "string") {
    const mixer2 = mixUnit(from, to);
    if (mixer2)
      return mixer2;
  }
  const mixer = getMixer(from);
  return mixer(from, to);
}

// node_modules/motion-dom/dist/es/frameloop/order.mjs
var stepsOrder = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];

// node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
  let thisFrame = /* @__PURE__ */ new Set();
  let nextFrame = /* @__PURE__ */ new Set();
  let isProcessing = false;
  let flushNextFrame = false;
  let running;
  const toKeepAlive = /* @__PURE__ */ new Set();
  let latestFrameData = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  function triggerCallback(callback) {
    if (toKeepAlive.has(callback)) {
      nextFrame.add(callback);
      runNextFrame();
    }
    (running = callback)(latestFrameData);
  }
  const step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      addToCurrentFrame && callback !== running && queue.delete(callback);
      queue.add(callback);
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (callback) => {
      nextFrame.delete(callback);
      toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (frameData2) => {
      latestFrameData = frameData2;
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      const prevFrame = thisFrame;
      thisFrame = nextFrame;
      nextFrame = prevFrame;
      thisFrame.forEach(triggerCallback);
      thisFrame.clear();
      running = void 0;
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive, state = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
}) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const flagRunNextFrame = () => runNextFrame = true;
  const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(flagRunNextFrame);
    return acc;
  }, {});
  const { setup, read: read2, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
  const processBatch = () => {
    const useManualTiming = MotionGlobalConfig.useManualTiming;
    const timestamp = useManualTiming ? state.timestamp : performance.now();
    runNextFrame = false;
    if (!useManualTiming) {
      state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    }
    state.timestamp = timestamp;
    state.isProcessing = true;
    setup.process(state);
    read2.process(state);
    resolveKeyframes.process(state);
    preUpdate.process(state);
    update.process(state);
    preRender.process(state);
    render.process(state);
    postRender.process(state);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame)
        wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = (process2) => {
    for (let i = 0; i < stepsOrder.length; i++) {
      steps[stepsOrder[i]].cancel(process2);
    }
  };
  return { schedule, cancel, state, steps };
}

// node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true, frameData);

// node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var frameloopDriver = (update) => {
  const passTimestamp = ({ timestamp }) => update(timestamp);
  return {
    start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
    stop: () => cancelFrame(passTimestamp),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => frameData.isProcessing ? frameData.timestamp : time.now()
  };
};

// node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
var generateLinearEasing = (easing, duration, resolution = 10) => {
  let points = "";
  const numPoints = Math.max(Math.round(duration / resolution), 2);
  for (let i = 0; i < numPoints; i++) {
    points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
  }
  return `linear(${points.substring(0, points.length - 2)})`;
};

// node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator, timeStep = 50, maxDuration2 = maxGeneratorDuration, keyframes2) {
  let duration = 0;
  let state = generator.next(duration);
  keyframes2?.push(state.value);
  while (!state.done && duration < maxDuration2) {
    duration += timeStep;
    state = generator.next(duration);
    keyframes2?.push(state.value);
  }
  return duration >= maxDuration2 ? Infinity : duration;
}

// node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function createGeneratorEasing(options, scale2 = 100, createGenerator) {
  const { keyframes: k, velocity: v } = options;
  const delta = k && k[k.length - 1] - k[0];
  const generator = createGenerator({
    ...options,
    velocity: v && delta ? v * scale2 / delta : v,
    keyframes: [0, scale2]
  });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: (progress2) => {
      return generator.next(duration * progress2).value / scale2;
    },
    duration: millisecondsToSeconds(duration)
  };
}

// node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var defaultStiffness = 100;
var defaultDamping = 10;
var defaultMass = 1;
var defaultDuration = 800;
var defaultBounce = 0.3;
var defaultVisualDuration = 0.3;
var restSpeedGranular = 0.01;
var restSpeedDefault = 2;
var restDeltaGranular = 5e-3;
var restDeltaDefault = 0.5;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var bounceToDampingRatio = (bounce) => bounce < 0 ? 1 / Math.max(1 + bounce, minDamping) : Math.max(1 - bounce, minDamping);
function overdampedFreqScale(dampingRatio, criticalFreqTime) {
  if (!(dampingRatio > 1))
    return 1;
  const root = Math.sqrt(dampingRatio * dampingRatio - 1);
  const slow = dampingRatio - root;
  const fast = dampingRatio + root;
  const target = 2 * root * Math.exp(-criticalFreqTime) * (1 + criticalFreqTime);
  return approximateRoot((freqTime) => fast * Math.exp(-slow * freqTime) - slow * Math.exp(-fast * freqTime) - target, (freqTime) => Math.exp(-fast * freqTime) - Math.exp(-slow * freqTime), criticalFreqTime) / criticalFreqTime;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
var safeMin = 1e-3;
function findSpring({ duration = defaultDuration, bounce = defaultBounce }) {
  let envelope;
  let derivative;
  const dampingRatio = bounceToDampingRatio(bounce);
  duration = clamp(minDuration, maxDuration, millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - exponentialDecay / b * c;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const e = dampingRatio * dampingRatio * undampedFreq2 * undampedFreq2 * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(undampedFreq2 * undampedFreq2, dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * -e * f / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = undampedFreq2 * duration + 1;
      return -safeMin + a * b;
    };
    derivative = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = -undampedFreq2 * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const criticalFreq = approximateRoot(envelope, derivative, initialGuess);
  const undampedFreq = criticalFreq * overdampedFreqScale(dampingRatio, criticalFreq * duration);
  const stiffness = undampedFreq * undampedFreq;
  return {
    stiffness,
    damping: dampingRatio * 2 * Math.sqrt(stiffness),
    duration: secondsToMilliseconds(duration)
  };
}
var isValidPhysics = (value, canBeZero) => (canBeZero ? value >= 0 : value > 0) && value < Infinity;
function resolvePhysics(value, canBeZero) {
  if (isValidPhysics(value, canBeZero))
    return value;
  if (false) {
    warning(value === void 0, "Spring stiffness and mass must be positive, damping 0 or greater", "spring-invalid-physics");
  }
  return void 0;
}
function getSpringOptions(options) {
  const validStiffness = resolvePhysics(options.stiffness);
  const validDamping = resolvePhysics(options.damping, true);
  const validMass = resolvePhysics(options.mass);
  const springOptions = {
    ...options,
    stiffness: validStiffness ?? defaultStiffness,
    damping: validDamping ?? defaultDamping,
    mass: validMass ?? defaultMass,
    isResolvedFromDuration: false,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (validStiffness ?? validDamping ?? validMass) === void 0 && (options.duration !== void 0 || options.bounce !== void 0)
  };
  if (springOptions.isTimeDefined) {
    if (options.visualDuration) {
      const dampingRatio = bounceToDampingRatio(options.bounce || 0);
      const root = 2 * Math.PI / (options.visualDuration * 1.2) * overdampedFreqScale(dampingRatio, 2 * Math.PI / 1.2);
      springOptions.stiffness = root * root;
      springOptions.damping = 2 * dampingRatio * Math.sqrt(springOptions.stiffness);
    } else {
      Object.assign(springOptions, findSpring(springOptions));
      springOptions.isResolvedFromDuration = true;
    }
    if (!isValidPhysics(springOptions.stiffness) || !isValidPhysics(springOptions.damping, true)) {
      springOptions.stiffness = defaultStiffness;
      springOptions.damping = defaultDamping;
    }
  }
  return springOptions;
}
function springGenerator(optionsOrVisualDuration = defaultVisualDuration, bounce = defaultBounce) {
  const options = typeof optionsOrVisualDuration !== "object" ? {
    visualDuration: optionsOrVisualDuration,
    keyframes: [0, 1],
    bounce
  } : optionsOrVisualDuration;
  const origin = options.keyframes[0];
  const target = options.keyframes[options.keyframes.length - 1];
  const state = { done: false, value: origin };
  const { stiffness, damping, mass, duration, isResolvedFromDuration, isTimeDefined } = getSpringOptions({ ...options });
  const inheritVelocity = (velocity) => isResolvedFromDuration ? 0 : -millisecondsToSeconds(velocity);
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const decay = dampingRatio * undampedAngularFreq;
  const s = {
    target,
    delta: target - origin,
    velocity: inheritVelocity(options.velocity) || 0,
    restSpeed: 0,
    restDelta: 0
  };
  const setRestThresholds = () => {
    const isGranularScale = Math.abs(s.delta) < 5;
    s.restSpeed = options.restSpeed || (isGranularScale ? restSpeedGranular : restSpeedDefault);
    s.restDelta = options.restDelta || (isGranularScale ? restDeltaGranular : restDeltaDefault);
  };
  setRestThresholds();
  let resolveSpring;
  let resolveVelocity;
  let update;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    const c = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    update = () => {
      c.A = (s.velocity + decay * s.delta) / angularFreq;
      c.sinC = decay * c.A + s.delta * angularFreq;
      c.cosC = decay * s.delta - c.A * angularFreq;
    };
    const sample = (t) => {
      if (t !== c.t) {
        c.t = t;
        c.env = Math.exp(-decay * t);
        c.sin = Math.sin(angularFreq * t);
        c.cos = Math.cos(angularFreq * t);
      }
    };
    resolveSpring = (t) => {
      sample(t);
      return s.target - c.env * (c.A * c.sin + s.delta * c.cos);
    };
    resolveVelocity = (t) => {
      sample(t);
      return c.env * (c.sinC * c.sin + c.cosC * c.cos);
    };
  } else if (dampingRatio === 1) {
    resolveSpring = (t) => s.target - Math.exp(-undampedAngularFreq * t) * (s.delta + (s.velocity + undampedAngularFreq * s.delta) * t);
    const c = { C: 0 };
    update = () => {
      c.C = s.velocity + undampedAngularFreq * s.delta;
    };
    resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * c.C * t - s.velocity);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    const slow = decay - dampedAngularFreq;
    const fast = decay + dampedAngularFreq;
    const limit = dampedAngularFreq < 1 || isTimeDefined ? Infinity : 300 / dampedAngularFreq;
    const decayAt = (rate, t) => Math.exp(t > limit ? (decay - rate) * limit - decay * t : -rate * t);
    const c = { S: 0, F: 0 };
    update = () => {
      const P = (s.velocity + decay * s.delta) / dampedAngularFreq;
      c.S = (s.delta + P) / 2;
      c.F = (s.delta - P) / 2;
    };
    resolveSpring = (t) => s.target - c.S * decayAt(slow, t) - c.F * decayAt(fast, t);
    resolveVelocity = (t) => slow * c.S * decayAt(slow, t) + fast * c.F * decayAt(fast, t);
  }
  update();
  const calculatedDuration = isResolvedFromDuration ? duration || null : null;
  const generator = {
    calculatedDuration,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (keyframes2, newVelocity) => {
      s.target = keyframes2[keyframes2.length - 1];
      s.delta = s.target - keyframes2[0];
      s.velocity = inheritVelocity(newVelocity);
      if (!(options.restSpeed && options.restDelta))
        setRestThresholds();
      generator.calculatedDuration = calculatedDuration;
      state.done = false;
      update();
    },
    velocity: (t) => secondsToMilliseconds(resolveVelocity(t)),
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        const currentVelocity = secondsToMilliseconds(resolveVelocity(t));
        state.done = Math.abs(currentVelocity) <= s.restSpeed && Math.abs(s.target - current) <= s.restDelta;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? s.target : current;
      return state;
    },
    toString: () => {
      const easingDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
      const easing = generateLinearEasing((progress2) => generator.next(easingDuration * progress2).value, easingDuration, 30);
      return easingDuration + "ms " + easing;
    }
  };
  return generator;
}
var spring = /* @__PURE__ */ Object.assign(springGenerator, {
  applyToOptions: (options) => {
    const generatorOptions = createGeneratorEasing(options, 100, springGenerator);
    options.ease = generatorOptions.ease;
    options.duration = secondsToMilliseconds(generatorOptions.duration);
    options.type = "keyframes";
    return options;
  }
});

// node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
  const origin = keyframes2[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = (v) => v < min || v > max;
  const nearestBoundary = (v) => {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget ? modifyTarget(ideal) : ideal;
  if (target !== ideal)
    amplitude = target - origin;
  const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
  const applyFriction = (t) => {
    const delta = calcDelta(t);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : t ? target + delta : origin;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t) => {
    if (!isOutOfBounds(state.value))
      return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -calcDelta(t) / timeConstant * 1e3,
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: (t) => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state;
      }
    }
  };
}

// node_modules/motion-dom/dist/es/utils/interpolate.mjs
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = MotionGlobalConfig.mix || mix;
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = customMixer?.(output[i], output[i + 1]) || mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
  const inputLength = input.length;
  if (inputLength === 1)
    return () => output[0];
  if (inputLength === 2 && output[0] === output[1])
    return () => output[1];
  const isZeroDeltaRange = input[0] === input[1];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = (v) => {
    if (isZeroDeltaRange && v < input[0])
      return output[0];
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1])
          break;
      }
    }
    const progressInRange = progress(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = progress(0, remaining, i);
    offset.push(mixNumber(min, 1, offsetProgress));
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}

// node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}

// node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut", mixer: transitionMixer }) {
  const customMixer = typeof keyframeValues[0] === "number" ? void 0 : transitionMixer;
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2) || easeInOut;
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  let span = -1;
  if (!customMixer) {
    for (let i = 1; i < keyframeValues.length; i++) {
      if (keyframeValues[i] !== keyframeValues[i - 1]) {
        if (span >= 0) {
          span = -2;
          break;
        }
        span = i - 1;
      }
    }
  }
  if (span >= 0) {
    const offsets = times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues);
    const from = offsets[span] * duration;
    const to = offsets[span + 1] * duration;
    const origin = keyframeValues[span];
    const target = keyframeValues[span + 1];
    const ease3 = Array.isArray(easingFunctions) ? easingFunctions[span] : easingFunctions;
    const mixer = (MotionGlobalConfig.mix || mix)(origin, target);
    const last = keyframeValues.length - 2;
    return {
      calculatedDuration: duration,
      next: (t) => {
        state.value = span && t < from ? mixer(0) : span < last && (t >= to || !duration) ? typeof target === "number" ? target : mixer(1) : mixer(ease3(t >= to || !duration ? 1 : t <= from ? 0 : (t - from) / (to - from)));
        state.done = t >= duration;
        return state;
      }
    };
  }
  const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
    duration
  );
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions),
    mixer: customMixer
  });
  return {
    calculatedDuration: duration,
    next: (t) => {
      state.value = mapTimeToKeyframe(t);
      state.done = t >= duration;
      return state;
    }
  };
}

// node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function getGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
function calcGeneratorVelocity(generator, t, initialVelocity = 0) {
  if (t <= 0)
    return initialVelocity;
  return generator.velocity ? generator.velocity(t) : getGeneratorVelocity((s) => generator.next(s).value, t, generator.next(t).value);
}

// node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
  let first;
  let last;
  let numResolved = 0;
  for (let i = 0; i < keyframes2.length; i++) {
    const keyframe = keyframes2[i];
    if (keyframe !== null) {
      if (!numResolved++)
        first = keyframe;
      last = keyframe;
    }
  }
  const useFirstKeyframe = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1;
  const index = useFirstKeyframe ? 0 : numResolved - 1;
  return !index || finalKeyframe === void 0 ? index ? last : first : finalKeyframe;
}

// node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var transitionTypeMap = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
function replaceTransitionType(transition) {
  if (typeof transition.type === "string") {
    transition.type = transitionTypeMap[transition.type];
  }
}

// node_modules/motion-dom/dist/es/animation/utils/resolve-start-time.mjs
var MAX_START_DELAY = 40;
var resolveStartTime = (startTime, now2) => now2 - startTime > MAX_START_DELAY && !MotionGlobalConfig.useManualTiming ? now2 : startTime;

// node_modules/motion-dom/dist/es/animation/utils/notify-inspector.mjs
function baseRecord(kind, animation) {
  return {
    kind,
    animation,
    timestamp: time.now(),
    frameTimestamp: frameData.timestamp,
    frameIsProcessing: frameData.isProcessing
  };
}
function notifyAnimationStart(animation, options, transition) {
  const notify = globalThis.__MOTION_INSPECT__;
  if (!notify)
    return;
  try {
    notify({
      ...baseRecord("animation-start", animation),
      options: transition ? { ...options, ...transition } : options
    });
  } catch {
  }
}
function notifyLayoutAnimationStart(animation, node) {
  const notify = globalThis.__MOTION_INSPECT__;
  if (!notify)
    return;
  try {
    notify({
      ...baseRecord("layout-animation-start", animation),
      node
    });
  } catch {
  }
}

// node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var WithPromise = class {
  constructor() {
    this.isResolved = false;
  }
  get finished() {
    if (!this._finished) {
      this._finished = this.isResolved ? Promise.resolve() : new Promise((resolve) => {
        this._resolve = resolve;
      });
    }
    return this._finished;
  }
  updateFinished() {
    this._finished = this._resolve = void 0;
    this.isResolved = false;
  }
  notifyFinished() {
    this.isResolved = true;
    this._resolve?.();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(onResolve, onReject) {
    return this.finished.then(onResolve, onReject);
  }
};

// node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
var percentToProgress = (percent2) => percent2 / 100;
var round = (value) => Math.round(value * 1e4) / 1e4;
var JSAnimation = class extends WithPromise {
  constructor(options) {
    super();
    this.state = "idle";
    this.startTime = null;
    this.isStopped = false;
    this.currentTime = 0;
    this.holdTime = null;
    this.playbackSpeed = 1;
    this.delayState = {
      done: false,
      value: void 0
    };
    this.stop = () => {
      const { motionValue: motionValue2 } = this.options;
      const now2 = time.now();
      if (motionValue2 && motionValue2.updatedAt !== now2) {
        this.tick(motionValue2.updatedAt = now2);
      }
      this.isStopped = true;
      if (this.state === "idle")
        return;
      this.teardown();
      this.options.onStop?.();
    };
    this.options = options;
    this.initAnimation();
    this.play();
    if (options.autoplay === false)
      this.pause();
    notifyAnimationStart(this, this.options);
  }
  initAnimation() {
    const { options } = this;
    replaceTransitionType(options);
    const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
    let { keyframes: keyframes$1 } = options;
    const generatorFactory = type || keyframes;
    if (false) {
      invariant(keyframes$1.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`, "spring-two-frames");
    }
    this.mixKeyframes = void 0;
    if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
      this.mixKeyframes = pipe(percentToProgress, options.mixer?.(keyframes$1[0], keyframes$1[1]) || mix(keyframes$1[0], keyframes$1[1]));
      keyframes$1 = [0, 100];
    }
    const generator = generatorFactory(keyframes$1 === options.keyframes ? options : { ...options, keyframes: keyframes$1 });
    if (repeatType === "mirror") {
      this.mirroredGenerator = generatorFactory({
        ...options,
        keyframes: [...keyframes$1].reverse(),
        velocity: -velocity
      });
    }
    if (generator.calculatedDuration === null) {
      generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    this.calculatedDuration = calculatedDuration;
    this.resolvedDuration = calculatedDuration + repeatDelay;
    this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
    this.generator = generator;
  }
  updateTime(timestamp) {
    this.currentTime = this.holdTime ?? Math.round(timestamp - this.startTime) * this.playbackSpeed;
  }
  tick(timestamp, sample = false) {
    const { generator, totalDuration, calculatedDuration } = this;
    if (this.startTime === null)
      return generator.next(0);
    const { delay: delay2 = 0, keyframes: keyframes2, type, onUpdate, finalKeyframe } = this.options;
    if (this.startTime === this.pendingStartTime) {
      this.startTime = resolveStartTime(this.startTime, timestamp);
    }
    this.pendingStartTime = void 0;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, timestamp);
    } else if (this.speed < 0) {
      this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
    }
    if (sample) {
      this.currentTime = timestamp;
    } else {
      this.updateTime(timestamp);
    }
    const timeWithoutDelay = this.currentTime - delay2 * (this.playbackSpeed >= 0 ? 1 : -1);
    const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    this.currentTime = Math.max(timeWithoutDelay, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = totalDuration;
    }
    const state = this.generate(this.currentTime, isInDelayPhase);
    let { done } = state;
    if (!isInDelayPhase) {
      done = this.playbackSpeed >= 0 ? calculatedDuration < Infinity ? this.currentTime >= totalDuration : done : this.currentTime <= 0;
    }
    const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
    if (isAnimationFinished && type !== inertia) {
      state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
    }
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      this.finish();
    }
    return state;
  }
  /**
   * This animation's time, including delay, at a timestamp.
   */
  at(timestamp) {
    return this.holdTime ?? round((timestamp - this.startTime) * this.playbackSpeed);
  }
  /**
   * The value at a timestamp, without changing this animation's state.
   * If resolved, it ends at the last resolved keyframe, which is in the
   * same unit as the others, rather than at finalKeyframe.
   */
  sampleAt(timestamp, resolved) {
    const { options, totalDuration } = this;
    const t = this.at(timestamp) - (options.delay || 0);
    return t >= totalDuration && options.type !== inertia ? getFinalKeyframe(options.keyframes, options, resolved ? void 0 : options.finalKeyframe) : this.generate(Math.max(t, 0), t < 0).value;
  }
  /**
   * The generator's state `currentTime` ms after the delay, without
   * changing the animation's own state.
   */
  generate(currentTime, isInDelayPhase) {
    const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration } = this;
    const { keyframes: keyframes2, repeat, repeatType, repeatDelay } = this.options;
    let elapsed = currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    let state;
    if (isInDelayPhase) {
      this.delayState.value = keyframes2[0];
      state = this.delayState;
    } else {
      state = frameGenerator.next(elapsed);
    }
    if (mixKeyframes && !isInDelayPhase) {
      state.value = mixKeyframes(state.value);
    }
    return state;
  }
  get duration() {
    return millisecondsToSeconds(this.calculatedDuration);
  }
  get iterationDuration() {
    return this.duration + millisecondsToSeconds(this.options.delay ?? 0);
  }
  get time() {
    return millisecondsToSeconds(this.currentTime);
  }
  set time(newTime) {
    if (this.state === "finished")
      this.updateFinished();
    newTime = secondsToMilliseconds(newTime);
    this.currentTime = newTime;
    if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
      this.holdTime = newTime;
    } else if (this.driver) {
      this.startTime = this.driver.now() - newTime / this.playbackSpeed;
    }
    if (this.driver) {
      this.driver.start(false);
    } else {
      this.startTime = 0;
      this.state = "paused";
      this.holdTime = newTime;
      this.tick(newTime);
    }
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    return calcGeneratorVelocity(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(newSpeed) {
    const hasChanged = this.playbackSpeed !== newSpeed;
    if (hasChanged && this.driver) {
      this.updateTime(time.now());
    }
    this.playbackSpeed = newSpeed;
    if (hasChanged && this.driver) {
      this.time = millisecondsToSeconds(this.currentTime);
    }
  }
  play() {
    if (this.isStopped)
      return;
    const { driver = frameloopDriver, startTime } = this.options;
    if (!this.driver) {
      this.driver = driver((timestamp) => this.tick(timestamp));
    }
    this.options.onPlay?.();
    const now2 = this.driver.now();
    if (this.state === "finished") {
      this.updateFinished();
      this.startTime = now2;
    } else if (this.holdTime !== null) {
      this.startTime = now2 - this.holdTime / (this.playbackSpeed || 1);
    } else if (!this.startTime) {
      this.startTime = startTime ?? (this.pendingStartTime = now2);
    }
    if (this.state === "finished" && this.speed < 0) {
      this.startTime += this.calculatedDuration;
    }
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    this.state = "paused";
    this.updateTime(time.now());
    this.holdTime = this.currentTime;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.notifyFinished();
    this.teardown();
    this.state = "finished";
    this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null;
    this.startTime = 0;
    this.tick(0);
    this.teardown();
    this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle";
    this.driver?.stop();
    this.driver = void 0;
    this.startTime = this.holdTime = null;
  }
  sample(sampleTime) {
    this.startTime = 0;
    return this.tick(sampleTime, true);
  }
  attachTimeline(timeline) {
    if (this.options.allowFlatten) {
      this.options.type = "keyframes";
      this.options.ease = "linear";
      this.initAnimation();
    }
    this.driver?.stop();
    return timeline.observe(this);
  }
};

// node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
  ...complex,
  getAnimatableNone: (v) => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/motion-dom/dist/es/value/types/complex/mask.mjs
var mask = {
  ...complex,
  getAnimatableNone: (v) => {
    const parsed = complex.parse(v);
    const transformer = complex.createTransformer(v);
    return transformer(parsed.map((v2) => typeof v2 === "number" ? 0 : typeof v2 === "object" ? { ...v2, alpha: 1 } : v2));
  }
};

// node_modules/motion-dom/dist/es/value/types/int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/motion-dom/dist/es/value/types/maps/transform.mjs
var transformValueTypes = {
  rotate: degrees,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px
};

// node_modules/motion-dom/dist/es/value/types/maps/number.mjs
var numberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  inset: px,
  insetBlock: px,
  insetBlockStart: px,
  insetBlockEnd: px,
  insetInline: px,
  insetInlineStart: px,
  insetInlineEnd: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  paddingBlock: px,
  paddingBlockStart: px,
  paddingBlockEnd: px,
  paddingInline: px,
  paddingInlineStart: px,
  paddingInlineEnd: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  marginBlock: px,
  marginBlockStart: px,
  marginBlockEnd: px,
  marginInline: px,
  marginInlineStart: px,
  marginInlineEnd: px,
  // Typography
  fontSize: px,
  // Misc
  backgroundPositionX: px,
  backgroundPositionY: px,
  ...transformValueTypes,
  zIndex: int,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter,
  mask,
  WebkitMask: mask
};
var getDefaultValueType = (key) => defaultValueTypes[key];

// node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
var customTypes = /* @__PURE__ */ new Set([filter, mask]);
var lastKey;
var lastValue;
var lastNone;
function getAnimatableNone2(key, value) {
  if (key === lastKey && value === lastValue)
    return lastNone;
  let defaultValueType = getDefaultValueType(key);
  if (!customTypes.has(defaultValueType))
    defaultValueType = complex;
  lastNone = defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
  lastKey = key;
  lastValue = value;
  return lastNone;
}

// node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes2) {
  for (let i = 1; i < keyframes2.length; i++) {
    keyframes2[i] ?? (keyframes2[i] = keyframes2[i - 1]);
  }
}

// node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var radToDeg = (rad) => rad * 180 / Math.PI;
var rotate = (v) => {
  const angle = radToDeg(Math.atan2(v[1], v[0]));
  return rebaseAngle(angle);
};
var matrix2dParsers = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scaleZ: () => 1,
  scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
  rotate,
  rotateZ: rotate,
  skewX: (v) => radToDeg(Math.atan(v[1])),
  skewY: (v) => radToDeg(Math.atan(v[2])),
  skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
};
var rebaseAngle = (angle) => {
  angle = angle % 360;
  if (angle < 0)
    angle += 360;
  return angle;
};
var rotateZ = rotate;
var scaleX = (v) => Math.hypot(v[0], v[1]);
var scaleY = (v) => Math.hypot(v[4], v[5]);
var matrix3dParsers = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX,
  scaleY,
  scaleZ: (v) => Math.hypot(v[8], v[9], v[10]),
  scale: (v) => (scaleX(v) + scaleY(v)) / 2,
  rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
  rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
  rotateZ,
  rotate: rotateZ,
  skewX: (v) => radToDeg(Math.atan(v[4])),
  skewY: (v) => radToDeg(Math.atan(v[1])),
  skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
  return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform2, name) {
  if (!transform2 || transform2 === "none") {
    return defaultTransformValue(name);
  }
  const match = transform2.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);
  if (!match) {
    return defaultTransformValue(name);
  }
  const valueParser = (match[1] ? matrix3dParsers : matrix2dParsers)[name];
  const values = match[2].split(",").map((v) => parseFloat(v));
  return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
var readTransformValue = (instance, name) => {
  const { transform: transform2 = "none" } = getComputedStyle(instance);
  return parseValueFromTransform(transform2, name);
};

// node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "scaleZ",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var transformProps = /* @__PURE__ */ (() => /* @__PURE__ */ new Set([...transformPropOrder, "pathRotation"]))();

// node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var isNumOrPxType = (v) => v === number || v === px;
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = /* @__PURE__ */ transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      const current = value.get();
      const reset = key.startsWith("scale") ? 1 : 0;
      if (current === reset)
        return;
      removedTransforms.push([key, current]);
      value.set(reset);
    }
  });
  return removedTransforms;
}
var boxDependentValues = /* @__PURE__ */ new Set(["bottom", "right"]);
function measureDimension(computed, measureBox, axis, paddingStart, paddingEnd, boxSizing) {
  const px2 = parseFloat(computed);
  if (!isNaN(px2))
    return px2;
  const { min, max } = measureBox()[axis];
  const size = max - min;
  return boxSizing === "border-box" ? size : size - parseFloat(paddingStart) - parseFloat(paddingEnd);
}
var transformX = ({ transform: transform2 }) => parseValueFromTransform(transform2, "x");
var transformY = ({ transform: transform2 }) => parseValueFromTransform(transform2, "y");
var positionalValues = {
  // Dimensions
  width: ({ width, paddingLeft = "0", paddingRight = "0", boxSizing }, measureBox) => measureDimension(width, measureBox, "x", paddingLeft, paddingRight, boxSizing),
  height: ({ height, paddingTop = "0", paddingBottom = "0", boxSizing }, measureBox) => measureDimension(height, measureBox, "y", paddingTop, paddingBottom, boxSizing),
  top: ({ top }) => parseFloat(top),
  left: ({ left }) => parseFloat(left),
  bottom: ({ top }, measureBox) => {
    const { y } = measureBox();
    return parseFloat(top) + (y.max - y.min);
  },
  right: ({ left }, measureBox) => {
    const { x } = measureBox();
    return parseFloat(left) + (x.max - x.min);
  },
  // Transform, including translate longform names
  x: transformX,
  y: transformY,
  translateX: transformX,
  translateY: transformY
};

// node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */ new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
var isForced = false;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    const resolversToMeasure = [];
    const elementsToMeasure = /* @__PURE__ */ new Set();
    const elementsToUntransform = /* @__PURE__ */ new Set();
    toResolve.forEach((resolver) => {
      if (!resolver.needsMeasurement)
        return;
      resolversToMeasure.push(resolver);
      elementsToMeasure.add(resolver.element);
      if (boxDependentValues.has(resolver.name)) {
        elementsToUntransform.add(resolver.element);
      }
    });
    const transformsToRestore = /* @__PURE__ */ new Map();
    elementsToUntransform.forEach((element) => {
      const removedTransforms = removeNonTranslationalTransform(element);
      if (!removedTransforms.length)
        return;
      transformsToRestore.set(element, removedTransforms);
      element.render();
    });
    resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
    elementsToMeasure.forEach((element) => {
      element.render();
      const restore = transformsToRestore.get(element);
      if (restore) {
        restore.forEach(([key, value]) => {
          element.getValue(key)?.set(value);
        });
      }
    });
    resolversToMeasure.forEach((resolver) => resolver.measureEndState());
    resolversToMeasure.forEach((resolver) => {
      if (resolver.suspendedScrollY !== void 0) {
        window.scrollTo(0, resolver.suspendedScrollY);
      }
    });
  }
  anyNeedsMeasurement = false;
  isScheduled = false;
  toResolve.forEach((resolver) => resolver.complete(isForced));
  toResolve.clear();
}
function readAllKeyframes() {
  toResolve.forEach((resolver) => {
    resolver.readKeyframes();
    if (resolver.needsMeasurement) {
      anyNeedsMeasurement = true;
    }
  });
}
function flushKeyframeResolvers() {
  isForced = true;
  readAllKeyframes();
  measureAllKeyframes();
  isForced = false;
}
function readOrigin(value, name, target) {
  if (typeof value === "string") {
    if (isNumericalString(value) || isZeroValueString(value)) {
      return parseFloat(value);
    } else if (!complex.test(value) && complex.test(target)) {
      return getAnimatableNone2(name, target);
    }
  }
  return value ?? void 0;
}
var KeyframeResolver = class {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
    this.state = "pending";
    this.isAsync = false;
    this.needsMeasurement = false;
    this.unresolvedKeyframes = [...unresolvedKeyframes];
    this.onComplete = onComplete;
    this.name = name;
    this.motionValue = motionValue2;
    this.element = element;
    this.isAsync = isAsync;
  }
  scheduleResolve() {
    this.state = "scheduled";
    if (this.isAsync) {
      toResolve.add(this);
      if (!isScheduled) {
        isScheduled = true;
        frame.read(readAllKeyframes);
        frame.resolveKeyframes(measureAllKeyframes);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
    if (unresolvedKeyframes[0] === null) {
      const currentValue = motionValue2?.get();
      const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
      if (currentValue !== void 0) {
        unresolvedKeyframes[0] = currentValue;
      } else if (element && name) {
        const valueAsRead = readOrigin(element.readValue(name, finalKeyframe), name, finalKeyframe);
        if (valueAsRead !== void 0) {
          unresolvedKeyframes[0] = valueAsRead;
        }
      }
      if (unresolvedKeyframes[0] === void 0) {
        unresolvedKeyframes[0] = finalKeyframe;
      }
      if (motionValue2 && currentValue === void 0) {
        motionValue2.set(unresolvedKeyframes[0]);
      }
    }
    fillWildcards(unresolvedKeyframes);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(isForcedComplete = false) {
    this.state = "complete";
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
    toResolve.delete(this);
  }
  cancel() {
    if (this.state === "scheduled") {
      toResolve.delete(this);
      this.state = "pending";
    }
  }
  resume() {
    if (this.state === "pending")
      this.scheduleResolve();
  }
};

// node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
var isCSSVar = (name) => name.startsWith("--");

// node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function setStyle(element, name, value) {
  isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}

// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var supportsFlags = {};

// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
  const memoized = memo2(callback);
  return () => supportsFlags[supportsFlag] ?? memoized();
}

// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");

// node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (e) {
    return false;
  }
  return true;
}, "linearEasing");

// node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

// node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};

// node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mapEasingToNativeEasing(easing, duration) {
  if (!easing) {
    return void 0;
  } else if (typeof easing === "function") {
    return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
  } else if (isBezierDefinition(easing)) {
    return cubicBezierAsString(easing);
  } else if (Array.isArray(easing)) {
    return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
  } else {
    return supportedWaapiEasing[easing];
  }
}

// node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function startWaapiAnimation(element, valueName, keyframes2, { delay: delay2 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeOut", times } = {}, pseudoElement = void 0) {
  const keyframeOptions = {
    [valueName]: keyframes2
  };
  if (times)
    keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2, duration);
  if (Array.isArray(easing))
    keyframeOptions.easing = easing;
  const options = {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  };
  if (pseudoElement)
    options.pseudoElement = pseudoElement;
  return element.animate(keyframeOptions, options);
}

// node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
  return typeof type === "function" && "applyToOptions" in type;
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function applyGeneratorOptions({ type, ...options }) {
  if (isGenerator(type) && supportsLinearEasing()) {
    return type.applyToOptions(options);
  } else {
    options.duration ?? (options.duration = 300);
    options.ease ?? (options.ease = "easeOut");
  }
  return options;
}

// node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var NativeAnimation = class extends WithPromise {
  constructor(options) {
    super();
    this.finishedTime = null;
    this.isStopped = false;
    this.manualStartTime = null;
    if (!options)
      return;
    const { element, name, keyframes: keyframes2, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
    this.isPseudoElement = Boolean(pseudoElement);
    this.allowFlatten = allowFlatten;
    this.options = options;
    typeof process !== "undefined" && false;
    const transition = applyGeneratorOptions(options);
    this.animation = startWaapiAnimation(element, name, keyframes2, transition, pseudoElement);
    if (transition.autoplay === false) {
      this.animation.pause();
    }
    this.animation.onfinish = this.onFinish = () => {
      this.animation.onfinish = null;
      this.finishedTime = this.time;
      if (!pseudoElement) {
        const keyframe = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
        this.updateMotionValue?.(keyframe);
        setStyle(element, name, keyframe);
        this.animation.cancel();
      }
      onComplete?.();
      this.notifyFinished();
    };
    notifyAnimationStart(this, options, transition);
  }
  play() {
    if (this.isStopped)
      return;
    this.manualStartTime = null;
    this.animation.onfinish = this.onFinish;
    this.animation.play();
    if (this.state === "finished") {
      this.updateFinished();
    }
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    if (!this.isStopped)
      this.animation.onfinish = this.onFinish;
    this.animation.finish?.();
  }
  cancel() {
    this.animation.onfinish = null;
    try {
      this.animation.cancel();
    } catch (e) {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = true;
    if (this.state === "idle" || this.finishedTime !== null)
      return;
    if (this.updateMotionValue) {
      this.updateMotionValue();
    } else {
      this.commitStyles();
    }
    if (!this.isPseudoElement)
      this.cancel();
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const element = this.options?.element;
    if (!this.isPseudoElement && element?.isConnected) {
      this.animation.commitStyles?.();
    }
  }
  get duration() {
    const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
    return millisecondsToSeconds(Number(duration));
  }
  get iterationDuration() {
    const { delay: delay2 = 0 } = this.options || {};
    return this.duration + millisecondsToSeconds(delay2);
  }
  get time() {
    return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
  }
  set time(newTime) {
    const wasFinished = this.finishedTime !== null;
    this.manualStartTime = null;
    this.finishedTime = null;
    this.animation.currentTime = secondsToMilliseconds(newTime);
    if (wasFinished) {
      this.animation.pause();
      this.updateFinished();
    }
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(newSpeed) {
    if (newSpeed < 0)
      this.finishedTime = null;
    this.animation.playbackRate = newSpeed;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(newStartTime) {
    this.manualStartTime = this.animation.startTime = newStartTime;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline, onAttach, observe }) {
    if (this.allowFlatten) {
      this.animation.effect?.updateTiming({ easing: "linear" });
    }
    this.animation.onfinish = this.onFinish = null;
    if (timeline && supportsScrollTimeline()) {
      this.animation.timeline = timeline;
      onAttach?.(this.animation);
      return noop;
    } else {
      return observe(this);
    }
  }
};

// node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
var unsupportedEasingFunctions = {
  anticipate,
  backInOut,
  circInOut
};
function isUnsupportedEase(key) {
  return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
  if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) {
    transition.ease = unsupportedEasingFunctions[transition.ease];
  }
}

// node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var sampleDelta = 10;
var NativeAnimationExtended = class extends NativeAnimation {
  constructor(options) {
    replaceStringEasing(options);
    replaceTransitionType(options);
    super(options);
    if (options.startTime !== void 0 && options.autoplay !== false) {
      this.startTime = options.startTime;
    }
    this.options = options;
  }
  /**
   * The animation's time now, in ms. Wall-clock rather than WAAPI's
   * currentTime while running, as under CPU load currentTime may not
   * reflect the actual elapsed time, causing incorrect sampling and
   * visual jumps.
   */
  elapsed() {
    return this.state === "running" ? (time.now() - this.startTime) * this.speed : this.time * 1e3;
  }
  /**
   * The value at a time, from a renderless JS animation.
   */
  sample(sampleTime) {
    if (!this.sampler) {
      const { motionValue: motionValue2, onUpdate, onComplete, onPlay, onStop, element, ...options } = this.options;
      this.sampler = new JSAnimation({ ...options, autoplay: false });
      this.sampler.stop();
    }
    return this.sampler.sample(Math.max(0, sampleTime)).value;
  }
  /**
   * The value now, as WAAPI doesn't set the motion value while it runs.
   */
  liveValue() {
    const { state } = this;
    if (state === "running" || state === "paused") {
      return this.sample(this.elapsed());
    }
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * sample a renderless JS animation twice to calculate its current
   * value, "previous" value, and therefore allow Motion to calculate
   * velocity for any subsequent animation.
   */
  updateMotionValue(value) {
    const { motionValue: motionValue2, element, name } = this.options;
    if (!motionValue2)
      return;
    if (value !== void 0) {
      motionValue2.set(value);
      return;
    }
    const { speed } = this;
    const sampleTime = this.elapsed();
    const delta = this.state === "running" && speed ? clamp(0, sampleDelta, sampleTime) : 0;
    const current = this.sample(sampleTime);
    if (element && name)
      setStyle(element, name, current);
    motionValue2.setWithVelocity(this.sample(sampleTime - delta * Math.sign(speed)), current, delta / Math.abs(speed || 1));
  }
};

// node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (value, name) => {
  if (name === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && // It's animatable if we have a string
  (complex.test(value) || value === "0") && // And it contains numbers and/or colors
  !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function hasKeyframesChanged(keyframes2) {
  const current = keyframes2[0];
  if (keyframes2.length === 1)
    return true;
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] !== current)
      return true;
  }
}
function canAnimate(keyframes2, name, type, velocity) {
  const originKeyframe = keyframes2[0];
  if (originKeyframe === null) {
    return false;
  }
  if (name === "display" || name === "visibility")
    return true;
  const targetKeyframe = keyframes2[keyframes2.length - 1];
  const isOriginAnimatable = isAnimatable(originKeyframe, name);
  const isTargetAnimatable = isAnimatable(targetKeyframe, name);
  if (!isOriginAnimatable || !isTargetAnimatable) {
    isOriginAnimatable !== isTargetAnimatable && false;
    return false;
  }
  return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
}

// node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function makeAnimationInstant(options) {
  options.duration = 0;
  options.type = "keyframes";
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var acceleratedValues = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
]);

// node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
var browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes2) {
  for (let i = 0; i < keyframes2.length; i++) {
    if (typeof keyframes2[i] === "string" && browserColorFunctions.test(keyframes2[i])) {
      return true;
    }
  }
  return false;
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/needs-mixer.mjs
var needsMixer = ({ mixer, keyframes: keyframes2 }) => mixer && typeof keyframes2[0] !== "number" && keyframes2.some((keyframe, i) => i && mixer(keyframes2[i - 1], keyframe));

// node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var colorProperties = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]);
var supportsWaapi = () => !MotionGlobalConfig.useManualTiming && Object.hasOwnProperty.call(Element.prototype, "animate");
function supportsBrowserAnimation(options) {
  const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type, keyframes: keyframes2 } = options;
  if (!name || !(acceleratedValues.has(name) || colorProperties.has(name))) {
    return false;
  }
  const subject = motionValue2?.owner?.current;
  if (!(subject instanceof HTMLElement) && !(subject instanceof SVGElement)) {
    return false;
  }
  const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
  return supportsWaapi() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes2)) && (name !== "transform" || !transformTemplate) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia" && !needsMixer(options);
}

// node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
var openers = {};
var transformFunction = (key, value, valueAsType = getValueAsType(value, transformValueTypes[key])) => (openers[key] || (openers[key] = (translateAlias[key] || key) + "(")) + valueAsType + ")";
var isDefaultTransform = (key, value) => (typeof value === "number" ? value : parseFloat(value)) === (key.startsWith("scale") ? 1 : 0);
function buildTransform(latestValues, transform2, transformTemplate) {
  let transformString = "";
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    const value = latestValues[key];
    if (value === void 0)
      continue;
    const valueAsType = transformTemplate && (transform2[key] = getValueAsType(value, numberValueTypes[key]));
    if (!isDefaultTransform(key, value)) {
      transformString += transformFunction(key, value, valueAsType || void 0) + " ";
    }
  }
  const pathRotation = latestValues.pathRotation;
  if (pathRotation) {
    transformString += transformFunction("rotate", pathRotation);
  }
  transformString = transformString.trim();
  return transformTemplate ? transformTemplate(transform2, transformString) : transformString || "none";
}

// node_modules/motion-dom/dist/es/animation/waapi/transforms/groups.mjs
var transformGroups = /* @__PURE__ */ new WeakMap();

// node_modules/motion-dom/dist/es/animation/waapi/transforms/TransformAnimation.mjs
var maxSamples = 200;
var easingTolerance = 1e-3;
var sampleTolerance = 0.1;
var scaleTolerance = 1e-3;
var churnWindow = 100;
var buildAhead = 100;
var nativeEasings = /* @__PURE__ */ new Set(["linear", "easeIn", "easeOut", "easeInOut"]);
var isNativeEasing = (ease2) => nativeEasings.has(ease2);
var traced = /* @__PURE__ */ new WeakMap();
var trace = (ease2, samples) => {
  let last = traced.get(ease2);
  if (last?.[0] !== samples) {
    last = [
      samples,
      "linear(" + defaultOffset(Array(samples + 1)).map((p) => round(ease2(p)) + " " + round(p * 100) + "%") + ")"
    ];
    traced.set(ease2, last);
  }
  return last[1];
};
var countSamples = (from, to) => Math.min(maxSamples, Math.max(2, Math.ceil((to - from) / sampleDelta)));
var isNear = (a, b) => Math.abs(a - b) <= easingTolerance;
var byTime = (a, b) => a - b;
var spread = (from, to, n) => defaultOffset(Array(n + 1)).map((p) => mixNumber(from, to, p));
var getOwner = (options) => options.motionValue.owner;
var getGroup = (element) => transformGroups.get(element);
var hasEnded = ({ state }) => state === "idle" || state === "finished";
var read = (owner, key) => owner.latestValues ? owner.latestValues[key] : owner.getValue(key)?.get();
var canGroupTransform = ({ name, motionValue: motionValue2 }) => name && transformPropOrder.includes(name) && motionValue2?.owner?.current instanceof HTMLElement && supportsWaapi() && supportsLinearEasing();
function canAccelerateTransform(options) {
  const owner = getOwner(options);
  const { onUpdate, transformTemplate } = owner.getProps();
  return (
    /**
     * A handoff from an optimised appear animation is already running
     * on its own WAAPI animation. onUpdate needs every value, every
     * frame.
     */
    !options.isHandoff && !onUpdate && !options.hasOnUpdate && /**
     * transformTemplate could output anything.
     */
    !transformTemplate && options.type !== "inertia" && /**
     * A literal transform, or pathRotation, replaces or adds to the
     * transform we'd build. styleEffect builds its own as "none".
     */
    (read(owner, "transform") || "none") === "none" && !read(owner, "pathRotation") && /**
     * Layout animations write transform every frame.
     */
    !owner.projection?.isProjecting() && /**
     * A mixer that blends these values makes them every frame. It's
     * asked last, as it's user code.
     */
    !needsMixer(options)
  );
}
var TransformDriver = class {
  constructor(element, update, makeDriver, animation) {
    this.element = element;
    this.update = update;
    this.makeDriver = makeDriver;
    this.animation = animation;
  }
  get js() {
    return this.driver || (this.driver = this.makeDriver(this.update));
  }
  now() {
    return this.driver || this.makeDriver !== frameloopDriver ? this.js.now() : frameData.isProcessing ? frameData.timestamp : time.now();
  }
  /**
   * keepAlive is false when seeking. Seeking the WAAPI animation is
   * free, but if a seek needs a rebuild and keeps happening, the group
   * moves to the main thread.
   */
  start(keepAlive = true) {
    const group = getGroup(this.element);
    !group || group.isJS ? this.js.start(keepAlive) : group.schedule(false, !keepAlive);
  }
  stopJS() {
    this.driver?.stop();
  }
  stop() {
    this.stopJS();
    const group = getGroup(this.element);
    group && !group.isFinishing && group.release(this.animation);
  }
};
var setTime;
var TransformAnimation = class extends JSAnimation {
  constructor(options) {
    const element = getOwner(options).current;
    const { driver = frameloopDriver } = options;
    let animation;
    const canAccelerate = canAccelerateTransform(options);
    options.driver = (update) => new TransformDriver(element, update, driver, animation);
    super(options);
    animation = this;
    const firstDriver = this.driver;
    firstDriver && (firstDriver.animation = this);
    this.canAccelerate = canAccelerate;
    const { stop } = this;
    this.stop = () => {
      this.isAccelerated() && this.sync();
      stop();
    };
  }
  /**
   * Each keyframe's offset, made once for the keyframes rather than on
   * every build.
   */
  offsets() {
    const { keyframes: keyframes2, times } = this.options;
    if (times)
      return times;
    if (this.offsetsOf !== keyframes2) {
      this.offsetsOf = keyframes2;
      this.cachedOffsets = defaultOffset(keyframes2);
    }
    return this.cachedOffsets;
  }
  get group() {
    return getGroup(getOwner(this.options).current);
  }
  get js() {
    return this.driver?.js;
  }
  stopJS() {
    this.driver?.stopJS();
  }
  get name() {
    return this.options.name;
  }
  /**
   * When this stops moving, or, if it repeats forever, when it starts
   * repeating, and how long each repeat takes. Held (paused, or at
   * speed 0) animations never stop moving.
   */
  timing() {
    const { startTime, speed, totalDuration } = this;
    const { delay: delay2 = 0, repeatType } = this.options;
    return this.holdTime !== null ? [Infinity, 0] : totalDuration === Infinity ? [
      startTime + delay2 / speed,
      this.resolvedDuration * (repeatType === "loop" ? 1 : 2) / speed || 1
    ] : [startTime + (delay2 + totalDuration) / speed, 0];
  }
  /**
   * Whether this is running, or paused, on the compositor.
   */
  isAccelerated() {
    const { group, state } = this;
    return group?.tracks.has(this) && !group.isJS && this.canAccelerate && (state === "running" || state === "paused");
  }
  /**
   * The value now, while this runs on the compositor and so doesn't
   * set its motion value every frame.
   */
  liveValue() {
    return this.isAccelerated() ? this.sampleAt(time.now()) : void 0;
  }
  /**
   * If this moves between two keyframes only, holding still either side
   * of them, as each value of a sequence segment does, when it starts
   * and stops moving, and its easing: as a string if WAAPI runs it
   * exactly, otherwise its function, to trace.
   */
  tween() {
    const { keyframes: keyframes$1, type, repeat, delay: delay2 = 0 } = this.options;
    let span = -1;
    if (repeat || type !== keyframes || this.holdTime !== null) {
      return;
    }
    for (let i = 1; i < keyframes$1.length; i++) {
      if (keyframes$1[i] !== keyframes$1[i - 1]) {
        if (span >= 0)
          return;
        span = i - 1;
      }
    }
    let { ease: ease2 } = this.options;
    if (isEasingArray(ease2))
      ease2 = ease2[span];
    const offsets = this.offsets();
    const at = (i) => this.startTime + (delay2 + offsets[i] * this.totalDuration) / this.speed;
    if (span >= 0) {
      const easing = isBezierDefinition(ease2) ? cubicBezierAsString(ease2) : isNativeEasing(ease2) ? supportedWaapiEasing[ease2] : easingDefinitionToFunction(ease2);
      return [
        at(span),
        at(span + 1),
        typeof easing === "string" || isNear(easing(0), 0) && isNear(easing(1), 1) ? easing : void 0
      ];
    }
  }
  /**
   * The timestamps between two timestamps where this reaches a
   * keyframe or starts a repeat, where it can turn or jump.
   */
  boundaries(from, to) {
    const { startTime, speed, resolvedDuration, options } = this;
    const { delay: delay2 = 0, repeat = 0, repeatDelay = 0, repeatType, type } = options;
    const offsets = (type || keyframes) === keyframes ? this.offsets() : [0, 1];
    const start = startTime + delay2 / speed;
    const result = [];
    if (this.holdTime !== null || !(resolvedDuration > 0))
      return result;
    for (let i = Math.max(0, Math.floor((from - start) * speed / resolvedDuration)); i <= repeat; i++) {
      const iterationStart = start + i * resolvedDuration / speed;
      if (iterationStart > to)
        break;
      for (const offset of offsets) {
        const t = iterationStart + (i % 2 && repeatType && repeatType !== "loop" ? 1 - offset : offset) * (resolvedDuration - repeatDelay) / speed;
        t > from && t < to && result.push(t);
      }
    }
    return result;
  }
  /**
   * The value at a timestamp, as a number.
   */
  numberAt(timestamp) {
    return parseFloat(this.sampleAt(timestamp, true));
  }
  /**
   * Write the current value, and velocity, to the motion value.
   */
  sync() {
    const now2 = time.now();
    const value = this.sampleAt(now2, true);
    this.options.motionValue.setWithVelocity(this.holdTime === null ? this.sampleAt(now2 - sampleDelta, true) : value, value, sampleDelta);
  }
  play() {
    if (this.isStopped)
      return;
    (this.group || createGroup(getOwner(this.options))).tracks.add(this);
    super.play();
  }
  pause() {
    super.pause();
    this.isAccelerated() && this.group.schedule(false);
  }
  /**
   * JSAnimation finishes on its next tick, which only happens once the
   * group is on the main thread, so finish now. That includes an
   * animation that can't be accelerated but reached its end before the
   * group could move there.
   */
  complete() {
    super.complete();
    const { group } = this;
    group && !group.isJS && this.tick(time.now());
  }
  /**
   * Without a tick to rebase it, a held time still includes the delay,
   * so take it off here, as a JS animation does on its next tick.
   */
  get time() {
    if (this.isAccelerated()) {
      return millisecondsToSeconds(clamp(0, this.totalDuration, this.at(time.now()) - (this.options.delay || 0)));
    }
    return super.time;
  }
  /**
   * Calls JSAnimation's setter directly, as `super.time =` is a slow
   * path in V8 and this runs for every animation of a seeked sequence.
   */
  set time(newTime) {
    (setTime ?? (setTime = Object.getOwnPropertyDescriptor(JSAnimation.prototype, "time").set)).call(this, newTime);
  }
  /**
   * Scroll timelines set time every frame, so run these on the main
   * thread.
   */
  attachTimeline(timeline) {
    this.canAccelerate = false;
    this.group?.demote(true);
    return super.attachTimeline(timeline);
  }
};
var builds;
var buildSoon = (build) => {
  builds || queueMicrotask(() => {
    const queue = builds;
    builds = void 0;
    queue.forEach((build2) => build2());
  });
  (builds || (builds = [])).push(build);
};
function createGroup(owner) {
  const element = owner.current;
  const tracks = /* @__PURE__ */ new Set();
  const byKey = /* @__PURE__ */ new Map();
  let statics = {};
  let keys = [];
  let built = /* @__PURE__ */ new Map();
  let segments = [];
  let needsBuild = false;
  let isScheduled2 = false;
  let isEnded = false;
  let hasChurned = false;
  let lastChurn = -Infinity;
  let wake;
  let wakeAt = Infinity;
  let buildAt;
  const has = (key) => {
    for (const track of tracks)
      if (track.name === key)
        return true;
  };
  const valuesAt = (timestamp, settled) => {
    const values = {};
    for (const key of timestamp === void 0 ? transformPropOrder : keys) {
      const track = byKey.get(key);
      const value = timestamp === void 0 ? read(owner, key) : track ? track.sampleAt(settled > timestamp && !track.timing()[1] ? settled : timestamp) : statics[key];
      if (value !== void 0)
        values[key] = value;
    }
    return values;
  };
  const toTransform = (values, isStyle) => {
    let transform2 = "";
    for (const key in values) {
      const value = values[key];
      if (!isStyle || !isDefaultTransform(key, value)) {
        transform2 += transformFunction(key, value) + " ";
      }
    }
    return (isStyle ? transform2.trim() : transform2) || "none";
  };
  const compose = (timestamp, settled) => toTransform(valuesAt(timestamp, settled));
  const commit = (values = valuesAt()) => {
    element.style.transform = toTransform(values, true);
  };
  const cancel = (animation) => {
    animation.onfinish = animation.oncancel = null;
    animation.cancel();
  };
  const stop = (shouldCommit = true) => {
    clearTimeout(wake);
    wakeAt = Infinity;
    buildAt = void 0;
    shouldCommit && commit();
    segments.forEach(({ animation }) => cancel(animation));
    segments = [];
  };
  const create = (keyframes2, options) => new Animation(new KeyframeEffect(element, keyframes2, options));
  const add = (animation, offset, end2 = Infinity) => {
    const segment = { animation, offset, end: end2 };
    animation.startTime = time.now() + offset;
    if (end2 < Infinity) {
      animation.onfinish = () => {
        segment.isDone = true;
        if (segments.some((s) => s.end === Infinity)) {
          cancel(animation);
          segments = segments.filter((s) => s !== segment);
        }
        group.schedule(false);
      };
    }
    animation.oncancel = () => segments.includes(segment) && group.demote();
    segments.push(segment);
  };
  const jumpAt = (value, a, b) => {
    const change = (x, y) => Math.abs(value(y) - value(x));
    const size = change(a, b);
    while (b - a > 0.01) {
      const mid = (a + b) / 2;
      change(a, mid) > change(mid, b) ? b = mid : a = mid;
    }
    return change(a, b) > size / 2 ? [a, b] : [];
  };
  const getEasing = (moving, from, to, bounds) => {
    const samples = countSamples(from, to);
    if (bounds.length * 4 > samples)
      return;
    let quick;
    for (const track of moving) {
      const first = track.numberAt(from);
      const p = (track.numberAt((from + to) / 2) - first) / (track.numberAt(to) - first);
      if (p !== p)
        continue;
      if (quick === void 0)
        quick = p;
      else if (!isNear(p, quick))
        return;
    }
    const at = spread(from, to, samples).concat(bounds).sort(byTime);
    const position = (t) => progress(from, to, t);
    let shared;
    let progressAt;
    for (const track of moving) {
      const first = track.numberAt(from);
      const changes = at.map((t) => track.numberAt(t) - first);
      const end2 = changes[changes.length - 1];
      const range = changes.some((change) => Math.abs(change) * easingTolerance > Math.abs(end2)) ? 0 : end2;
      const progress2 = changes.map((change) => range ? change / range : change);
      if (range && !shared) {
        shared = progress2;
        progressAt = (t) => (track.numberAt(t) - first) / range;
      } else if (progress2.some((p, i) => !isNear(p, range && shared[i]))) {
        return;
      }
    }
    if (!shared || shared.every((p, i) => isNear(p, position(at[i])))) {
      return "linear";
    }
    const points = [];
    const point = (t, p = progressAt(t)) => points.push(round(p) + " " + round(position(t) * 100) + "%");
    shared.forEach((p, i) => {
      i && Math.abs(p - shared[i - 1]) > 0.2 && jumpAt(progressAt, at[i - 1], at[i]).forEach((t) => point(t));
      point(at[i], p);
    });
    return "linear(" + points + ")";
  };
  const sample = (moving, from, to, bounds) => {
    const times = [from];
    const curved = [];
    let curveFrom = to;
    let curveTo = from;
    for (const track of moving) {
      const tween2 = track.tween();
      if (tween2?.[2] !== "linear") {
        const [trackEnd, cycle] = track.timing();
        const [a, b] = tween2 || [from, cycle ? to : trackEnd];
        curveFrom = Math.min(curveFrom, a);
        curveTo = Math.max(curveTo, b);
        curved.push(track);
      }
    }
    curveFrom = Math.max(from, curveFrom);
    curveTo = Math.min(to, curveTo);
    const isStraight = (a, b) => curved.every((track) => !(Math.abs(track.numberAt((a + b) / 2) - (track.numberAt(a) + track.numberAt(b)) / 2) > (track.name.startsWith("scale") ? scaleTolerance : sampleTolerance)));
    const split = (a, b, depth) => {
      if (b - a < 1 || isStraight(a, b)) {
        times.push(b);
      } else if (depth < 4) {
        split(a, (a + b) / 2, depth + 1);
        split((a + b) / 2, b, depth + 1);
      } else {
        for (const track of moving) {
          times.push(...jumpAt((t) => track.numberAt(t), a, b));
        }
        times.push(b);
      }
    };
    const ends = curveTo > curveFrom ? spread(curveFrom, curveTo, Math.ceil((curveTo - curveFrom) / 100)) : [];
    ends.push(to);
    for (const t of bounds)
      ends.push(t, Math.min(t + 0.01, to));
    let start = from;
    for (const end2 of ends.sort(byTime)) {
      end2 > start && split(start, end2, 0);
      start = end2;
    }
    return times.sort(byTime);
  };
  const getTween = (moving) => {
    let shared;
    for (const track of moving) {
      const tween2 = track.tween();
      if (!tween2 || shared && (Math.abs(tween2[0] - shared[0]) > 1 || Math.abs(tween2[1] - shared[1]) > 1)) {
        return;
      }
      shared = [
        tween2[0],
        tween2[1],
        !shared || tween2[2] === shared[2] ? tween2[2] : void 0
      ];
    }
    return shared;
  };
  const run = (moving, from, to, nativeEasing, options = { fill: "both" }, settled) => {
    const bounds = nativeEasing ? [] : moving.flatMap((track) => track.boundaries(from, to));
    const easing = nativeEasing || getEasing(moving, from, to, bounds);
    const times = easing ? [from, to] : sample(moving, from, to, bounds);
    const transform2 = times.map((t) => compose(t, settled));
    let keyframes2 = { transform: transform2 };
    if (!easing) {
      keyframes2.offset = times.map((t) => progress(from, to, t));
    }
    if (transform2.every((t) => t === transform2[0])) {
      commit(valuesAt(from, settled));
      keyframes2 = null;
    }
    return create(keyframes2, {
      ...options,
      duration: to - from,
      easing: easing || "linear"
    });
  };
  const wakeIn = (delay2) => {
    const at = time.now() + delay2;
    if (at < wakeAt) {
      clearTimeout(wake);
      wakeAt = at;
      wake = setTimeout(() => {
        wakeAt = Infinity;
        group.schedule(false);
      }, delay2);
    }
  };
  const animate2 = (now2) => {
    let end2 = now2;
    let cycle = 0;
    let cycleStart = 0;
    const moving = [];
    const looping = [];
    const ends = /* @__PURE__ */ new Set();
    byKey.clear();
    built = /* @__PURE__ */ new Map();
    for (const track of tracks) {
      byKey.set(track.name, track);
      const [trackEnd, trackCycle] = track.timing();
      const isHeld = trackEnd === Infinity;
      built.set(track, [track.at(now2), track.speed, isHeld]);
      if (isHeld)
        continue;
      if (track.speed < 0)
        return;
      if (trackCycle) {
        if (cycle) {
          const phase = (trackEnd - cycleStart) / trackCycle;
          if (Math.abs(trackCycle - cycle) > 1 || Math.abs(phase - Math.round(phase)) * cycle > 1) {
            return;
          }
        } else {
          cycle = trackCycle;
          cycleStart = trackEnd;
        }
        looping.push(track);
      } else {
        ends.add(trackEnd);
      }
      moving.push(track);
      end2 = Math.max(end2, trackEnd);
    }
    statics = {};
    keys = transformPropOrder.filter((key) => {
      if (byKey.has(key))
        return true;
      const value = statics[key] = read(owner, key);
      return value !== void 0 && !isDefaultTransform(key, value);
    });
    stop(false);
    const tween2 = !cycle && getTween(moving);
    try {
      if (end2 > now2) {
        let easing;
        if (tween2 && tween2[1] > now2) {
          const [from, to, ease2] = tween2;
          if (from - now2 > buildAhead) {
            moving.forEach((track) => track.sync());
            wakeIn(buildAt = from - now2 - buildAhead);
            return true;
          }
          easing = typeof ease2 === "string" ? ease2 : ease2 ? trace(ease2, countSamples(from, to)) : getEasing(moving, from, to, []);
          easing && add(run(moving, from, to, easing, {
            fill: "both",
            endDelay: end2 - to
          }), from - now2, end2 - from);
        }
        easing || add(run(moving, now2, end2), 0, end2 - now2);
        ends.forEach((trackEnd) => trackEnd < end2 - 1 && add(create(null, { duration: trackEnd - now2 }), 0, trackEnd - now2));
      }
      if (cycle) {
        const from = cycleStart + Math.floor((end2 - cycleStart) / cycle) * cycle;
        add(run(looping, from, from + cycle, void 0, {
          iterations: Infinity,
          iterationStart: (end2 - from) / cycle,
          /**
           * It must not fill backwards over the finite part
           * that runs before it.
           */
          fill: "forwards"
        }, end2), end2 - now2);
      }
    } catch {
      return;
    }
    segments.length || stop();
    return true;
  };
  const retime = (now2, isSeek) => {
    let elapsed;
    let rate = 0;
    for (const track of tracks) {
      const state = built.get(track);
      if (!state)
        return false;
      const [builtTime, builtSpeed, wasHeld] = state;
      const trackTime = track.at(now2);
      const isHeld = track.timing()[0] === Infinity;
      if (wasHeld) {
        if (isHeld && (trackTime === builtTime || !segments.length)) {
          continue;
        }
        return false;
      }
      const trackElapsed = (trackTime - builtTime) / builtSpeed;
      const trackRate = isHeld ? 0 : track.speed / builtSpeed;
      if (elapsed === void 0) {
        elapsed = trackElapsed;
        rate = trackRate;
      } else if (Math.abs(trackElapsed - elapsed) > 1 || trackRate !== rate) {
        return false;
      }
    }
    if (elapsed === void 0)
      return true;
    if (!segments.length) {
      if (buildAt === void 0 || isSeek && rate)
        return false;
      if (rate) {
        const delay2 = (buildAt - elapsed) / rate;
        if (delay2 < 1)
          return false;
        wakeIn(delay2);
      }
      return true;
    }
    for (const { offset, end: end2, isDone } of segments) {
      const local = elapsed - offset;
      if (end2 < Infinity && (isDone ? local < end2 - 1 : local < 0 && (isSeek || offset <= 0) || local >= end2)) {
        return false;
      }
    }
    for (const { animation, offset, isDone } of segments) {
      if (isDone)
        continue;
      const local = elapsed - offset;
      if (rate && animation.updatePlaybackRate && animation.playState === "running" && Math.abs(Number(animation.currentTime) - local) < 20) {
        animation.playbackRate !== rate && animation.updatePlaybackRate(rate);
      } else if (rate) {
        animation.playbackRate !== rate && (animation.playbackRate = rate);
        animation.startTime = now2 - local / rate;
      } else {
        animation.startTime = null;
        animation.currentTime = local;
      }
    }
    return true;
  };
  const end = () => {
    if (tracks.size)
      return false;
    isEnded = true;
    getGroup(element) === group && transformGroups.delete(element);
    group.isJS || stop();
    return true;
  };
  const build = () => {
    const now2 = time.now();
    if (!group.isJS) {
      group.isFinishing = true;
      tracks.forEach((track) => {
        const [trackEnd, trackCycle] = track.timing();
        if (track.state === "running" && track.speed > 0 && !trackCycle && trackEnd <= now2 + 1) {
          track.complete();
          statics[track.name] = read(owner, track.name);
          built.has(track) || (needsBuild = true);
        }
      });
      group.isFinishing = false;
    }
    isScheduled2 = false;
    if (isEnded)
      return;
    tracks.forEach((track) => hasEnded(track) && tracks.delete(track));
    if (end())
      return;
    for (const track of tracks) {
      if (!track.canAccelerate)
        return group.demote(true);
    }
    if (group.isJS) {
      group.isJS = false;
      needsBuild = true;
      tracks.forEach((track) => track.stopJS());
    }
    const shouldBuild = needsBuild;
    const churned = hasChurned;
    needsBuild = hasChurned = false;
    if (shouldBuild || !retime(now2, churned)) {
      if (churned) {
        if (now2 - lastChurn < churnWindow)
          return group.demote();
        lastChurn = now2;
      }
      if (!animate2(now2))
        return group.demote();
    } else if (buildAt !== void 0 && !churned) {
      return;
    }
    tracks.forEach((track) => track.timing()[0] === Infinity && track.sync());
  };
  const group = {
    tracks,
    isJS: false,
    isFinishing: false,
    schedule(build_, isChurn) {
      if (isEnded)
        return;
      needsBuild || (needsBuild = build_);
      hasChurned || (hasChurned = !!isChurn);
      if (!isScheduled2) {
        isScheduled2 = true;
        frameData.isProcessing ? frame.render(build, false, true) : buildSoon(build);
      }
    },
    /**
     * End the group now, rather than when it next builds, so the
     * element's transform is the caller's again as soon as its last
     * animation is stopped.
     */
    release(track) {
      hasEnded(track) && tracks.delete(track);
      end() || group.schedule(true);
    },
    /**
     * An outside write. Rebuild once, but if it keeps happening, move
     * to the main thread.
     */
    check() {
      if (group.isJS)
        return;
      for (const key in statics) {
        if (read(owner, key) !== statics[key] && !has(key)) {
          return group.schedule(true, true);
        }
      }
    },
    demote(canReturn) {
      if (group.isJS || isEnded)
        return;
      tracks.forEach((track) => {
        track.isAccelerated() && track.sync();
        canReturn || (track.canAccelerate = false);
      });
      group.isJS = true;
      built = /* @__PURE__ */ new Map();
      stop();
      tracks.forEach((track) => track.state === "running" && track.js?.start());
      return true;
    }
  };
  transformGroups.set(element, group);
  return group;
}

// node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var AsyncMotionValueAnimation = class extends WithPromise {
  constructor(options) {
    super();
    this.stop = () => {
      if (this._animation) {
        this._animation.stop();
        this.stopTimeline?.();
      }
      this.keyframeResolver?.cancel();
    };
    this.createdAt = time.now();
    const { keyframes: keyframes2, name, motionValue: motionValue2, element } = options;
    const optionsWithDefaults = options;
    optionsWithDefaults.autoplay ?? (optionsWithDefaults.autoplay = true);
    optionsWithDefaults.delay ?? (optionsWithDefaults.delay = 0);
    optionsWithDefaults.type ?? (optionsWithDefaults.type = "keyframes");
    optionsWithDefaults.repeat ?? (optionsWithDefaults.repeat = 0);
    optionsWithDefaults.repeatDelay ?? (optionsWithDefaults.repeatDelay = 0);
    optionsWithDefaults.repeatType ?? (optionsWithDefaults.repeatType = "loop");
    const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
    this.keyframeResolver = new KeyframeResolver$1(keyframes2, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue2, element);
    this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(keyframes2, finalKeyframe, options, sync) {
    this.keyframeResolver = void 0;
    const { name, type, velocity, delay: delay2, isHandoff, onUpdate } = options;
    this.resolvedAt = time.now();
    const canAnimateValue = canAnimate(keyframes2, name, type, velocity);
    if (!canAnimateValue) {
      if (MotionGlobalConfig.instantAnimations || !delay2) {
        onUpdate?.(getFinalKeyframe(keyframes2, options, finalKeyframe));
      }
      keyframes2[0] = keyframes2[keyframes2.length - 1];
      makeAnimationInstant(options);
      options.repeat = 0;
    }
    const { onComplete } = options;
    options.finalKeyframe = finalKeyframe;
    options.keyframes = keyframes2;
    options.onComplete = () => {
      onComplete?.();
      this.notifyFinished();
    };
    const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(options);
    const isGroupedTransform = !useWaapi && canGroupTransform(options);
    if (sync && (useWaapi || isGroupedTransform || this.resolvedAt !== this.createdAt)) {
      options.startTime ?? (options.startTime = resolveStartTime(this.createdAt, this.resolvedAt));
    }
    let animation;
    if (useWaapi) {
      options.element = options.motionValue?.owner?.current;
      try {
        animation = new NativeAnimationExtended(options);
      } catch {
        animation = new JSAnimation(options);
      }
    } else if (isGroupedTransform) {
      animation = new TransformAnimation(options);
    } else {
      animation = new JSAnimation(options);
    }
    if (this.pendingTimeline) {
      this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
      this.pendingTimeline = void 0;
    }
    this._animation = animation;
  }
  get finished() {
    return this._animation ? this._animation.finished : super.finished;
  }
  then(onResolve, _onReject) {
    return this.finished.finally(onResolve).then(() => {
    });
  }
  /**
   * The value now, if the animation runs on the compositor.
   */
  liveValue() {
    return this._animation?.liveValue?.();
  }
  get animation() {
    if (!this._animation) {
      this.keyframeResolver?.resume();
      flushKeyframeResolvers();
    }
    return this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(newTime) {
    this.animation.time = newTime;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(newSpeed) {
    this.animation.speed = newSpeed;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(timeline) {
    if (this._animation) {
      this.stopTimeline = this.animation.attachTimeline(timeline);
    } else {
      this.pendingTimeline = timeline;
    }
    return () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation?.cancel();
    this.keyframeResolver?.cancel();
  }
};

// node_modules/motion-dom/dist/es/animation/GroupAnimation.mjs
var GroupAnimation = class {
  constructor(animations2) {
    this.stop = () => {
      for (const animation of this.animations)
        animation.stop();
    };
    this.animations = animations2.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((animation) => animation.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(propName) {
    return this.animations[0][propName];
  }
  attachTimeline(timeline) {
    const subscriptions = this.animations.map((animation) => animation.attachTimeline(timeline));
    return () => {
      subscriptions.forEach((cancel, i) => {
        cancel && cancel();
        this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  /**
   * Setters and methods name the property directly, rather than through
   * a shared helper, so each call site stays monomorphic. Sequences
   * call these on every animation, many times a second.
   */
  set time(time2) {
    for (const animation of this.animations)
      animation.time = time2;
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(speed) {
    for (const animation of this.animations)
      animation.speed = speed;
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return getMax(this.animations, "duration");
  }
  get iterationDuration() {
    return getMax(this.animations, "iterationDuration");
  }
  play() {
    for (const animation of this.animations)
      animation.play();
  }
  pause() {
    for (const animation of this.animations)
      animation.pause();
  }
  cancel() {
    for (const animation of this.animations)
      animation.cancel();
  }
  complete() {
    for (const animation of this.animations)
      animation.complete();
  }
};
function getMax(animations2, propName) {
  let max = 0;
  for (let i = 0; i < animations2.length; i++) {
    const value = animations2[i][propName];
    if (value !== null && value > max) {
      max = value;
    }
  }
  return max;
}

// node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var GroupAnimationWithThen = class extends GroupAnimation {
  then(onResolve, _onReject) {
    return this.finished.finally(onResolve).then(() => {
    });
  }
};

// node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
  const index = Array.from(children).sort((a, b) => a.sortNodePosition(b)).indexOf(child);
  const numChildren = children.size;
  const maxStaggerDuration = (numChildren - 1) * staggerChildren;
  const delayIsFunction = typeof delayChildren === "function";
  return delayIsFunction ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}

// node_modules/motion-dom/dist/es/value/index.mjs
var MAX_VELOCITY_DELTA = 30;
var isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
var collectMotionValues = {
  current: void 0
};
var MotionValue = class {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(init, options = {}) {
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = (v) => {
      const currentTime = time.now();
      if (this.updatedAt !== currentTime) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(v);
      if (this.current !== this.prev) {
        this.dirty();
        if (this.dependents) {
          for (const dependent of this.dependents) {
            dependent.dirty();
          }
        }
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init);
    this.owner = options.owner;
  }
  setCurrent(current) {
    this.current = current;
    this.updatedAt = time.now();
    if (this.canTrackVelocity === null && current !== void 0) {
      this.canTrackVelocity = isFloat(this.current);
    }
  }
  setPrevFrameValue(prevFrameValue = this.current) {
    this.prevFrameValue = prevFrameValue;
    this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    if (false) {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    var _a;
    if (eventName === "change")
      return this.onChangeSubscribe(callback);
    return ((_a = this.events)[eventName] || (_a[eventName] = new SubscriptionManager())).add(callback);
  }
  onChangeSubscribe(callback) {
    const { events } = this;
    if (!events.change && !this.changeSubscriber) {
      this.changeSubscriber = callback;
    } else {
      if (!events.change) {
        events.change = new SubscriptionManager();
        events.change.add(this.changeSubscriber);
        this.changeSubscriber = void 0;
      }
      events.change.add(callback);
    }
    return () => {
      if (this.changeSubscriber === callback) {
        this.changeSubscriber = void 0;
      } else {
        events.change?.remove(callback);
      }
      this.stopIfUnobserved();
    };
  }
  /**
   * If we have no more change listeners by the start
   * of the next frame, stop active animations.
   */
  stopIfUnobserved() {
    frame.read(() => {
      if (!this.changeSubscriber && !this.events.change?.getSize()) {
        this.stop();
      }
    });
  }
  clearListeners() {
    this.changeSubscriber = void 0;
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(v) {
    this.passiveEffect ? this.passiveEffect(v, this.updateAndNotify) : this.updateAndNotify(v);
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = void 0;
    this.prevFrameValue = prev;
    this.prevUpdatedAt = this.updatedAt - delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v, endAnimation = true) {
    if (endAnimation) {
      this.updatedAt = time.now();
      this.stop();
    }
    this.updateAndNotify(v);
    this.prev = v;
    this.prevUpdatedAt = this.prevFrameValue = void 0;
    this.stopPassiveEffect?.();
  }
  dirty() {
    const { current, changeSubscriber } = this;
    if (changeSubscriber) {
      changeSubscriber(current);
    } else {
      this.events.change?.notify(current);
    }
  }
  addDependent(dependent) {
    (this.dependents || (this.dependents = /* @__PURE__ */ new Set())).add(dependent);
  }
  removeDependent(dependent) {
    this.dependents?.delete(dependent);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    collectMotionValues.current?.push(this);
    const sampled = this.animation?.liveValue?.();
    return sampled === void 0 ? this.current : sampled;
  }
  /**
   * The value as last set. Unlike get(), this doesn't read an animation
   * running on the compositor, which renders the value itself.
   */
  getCurrent() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const currentTime = time.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
      return 0;
    }
    const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(startAnimation) {
    return new Promise((resolve) => this.run(startAnimation, resolve));
  }
  /**
   * As start(), without making a promise, for animations started
   * internally, which complete through their own controls.
   */
  run(startAnimation, onComplete) {
    this.stop();
    this.hasAnimated = true;
    let isComplete = false;
    let animation;
    animation = startAnimation(() => {
      isComplete = true;
      this.events.animationComplete?.notify();
      if (this.animation === animation)
        this.animation = void 0;
      onComplete?.();
    });
    if (!isComplete)
      this.animation = animation;
    this.events.animationStart?.notify();
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      this.events.animationCancel?.notify();
    }
    this.animation = void 0;
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear();
    this.events.destroy?.notify();
    this.clearListeners();
    this.stop();
    this.stopPassiveEffect?.();
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function resolveTransition(transition, parentTransition) {
  if (transition?.inherit && parentTransition) {
    const { inherit: _, ...rest2 } = transition;
    return { ...parentTransition, ...rest2 };
  }
  return transition;
}

// node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
  const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
  if (valueTransition !== transition) {
    return resolveTransition(valueTransition, transition);
  }
  return valueTransition;
}

// node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};

// node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var orchestrationKeys = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
  "out",
  "mixer"
]);
function isTransitionDefined(transition) {
  for (const key in transition) {
    if (!orchestrationKeys.has(key))
      return true;
  }
  return false;
}

// node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
  const valueTransition = getValueTransition(transition, name) || {};
  const delay2 = valueTransition.delay || transition.delay || 0;
  let { elapsed = 0 } = transition;
  elapsed = elapsed - secondsToMilliseconds(delay2);
  const options = {
    keyframes: Array.isArray(target) ? target : [null, target],
    ease: "easeOut",
    velocity: value.getVelocity(),
    ...valueTransition,
    delay: -elapsed,
    onUpdate: (v) => {
      value.set(v);
      valueTransition.onUpdate && valueTransition.onUpdate(v);
    },
    onComplete: () => {
      onComplete();
      valueTransition.onComplete && valueTransition.onComplete();
    },
    name,
    motionValue: value,
    element: isHandoff ? void 0 : element,
    hasOnUpdate: !!valueTransition.onUpdate
  };
  if (!isTransitionDefined(valueTransition)) {
    Object.assign(options, getDefaultTransition(name, options));
  }
  options.duration && (options.duration = secondsToMilliseconds(options.duration));
  options.repeatDelay && (options.repeatDelay = secondsToMilliseconds(options.repeatDelay));
  if (options.from !== void 0) {
    options.keyframes[0] = options.from;
  }
  let shouldSkip = false;
  if (options.type === false || options.duration === 0 && !options.repeatDelay) {
    makeAnimationInstant(options);
    if (options.delay === 0) {
      shouldSkip = true;
    }
  }
  if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations || valueTransition.skipAnimations) {
    shouldSkip = true;
    makeAnimationInstant(options);
    options.delay = 0;
  }
  options.allowFlatten = !valueTransition.type && !valueTransition.ease;
  if (shouldSkip && !isHandoff && value.get() !== void 0) {
    const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
    if (finalKeyframe !== void 0) {
      frame.update(() => {
        options.onUpdate(finalKeyframe);
        options.onComplete();
      });
      return;
    }
  }
  return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
};

// node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
var splitCSSVariableRegex = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token1, token2, fallback] = match;
  return [`--${token1 ?? token2}`, fallback];
}
function getVariableValue(current, element, depth = 1) {
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  }
  return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

// node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
  const state = [{}, {}];
  visualElement?.values.forEach((value, key) => {
    state[0][key] = value.get();
    state[1][key] = value.getVelocity();
  });
  return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
  const resolveFunction = (def) => typeof def === "function" ? def(custom !== void 0 ? custom : props.custom, ...getValueState(visualElement)) : def;
  definition = resolveFunction(definition);
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  return resolveFunction(definition);
}

// node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
  return resolveVariantFromProps(visualElement.getProps(), definition, custom, visualElement);
}
var getTypeCustom = (visualElement, type) => type === "exit" ? visualElement.presenceContext?.custom : void 0;

// node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...transformPropOrder
]);

// node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
  return Array.isArray(v);
};

// node_modules/motion-dom/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function resolveFinalValueInKeyframes(v) {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
  target = { ...target, ...transitionEnd };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}

// node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);

// node_modules/motion-dom/dist/es/value/will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
  const willChange = visualElement.getValue("willChange");
  if (isWillChangeMotionValue(willChange)) {
    return willChange.add(key);
  } else if (!willChange && MotionGlobalConfig.WillChange) {
    const newWillChange = new MotionGlobalConfig.WillChange("auto");
    visualElement.addValue("willChange", newWillChange);
    newWillChange.add(key);
  }
}

// node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataAttribute = "data-framer-appear-id";

// node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
  return visualElement.props[optimizedAppearDataAttribute];
}

// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
var isBrowser2 = typeof window !== "undefined";
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = key in protectedKeys && !needsAnimating[key];
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  let { transition, transitionEnd, ...target } = targetAndTransition;
  const defaultTransition = visualElement.getDefaultTransition();
  transition = transition ? resolveTransition(transition, defaultTransition) : defaultTransition;
  const reduceMotion = transition?.reduceMotion;
  const skipAnimations = transition?.skipAnimations;
  if (transitionOverride)
    transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState?.getState()[type];
  const path = transition?.path;
  if (path) {
    path.animateValues ? path.animateValues((key) => visualElement.getValue(key, visualElement.latestValues[key] ?? 0), target, transition, delay2, animations2) : path.animateVisualElement?.(visualElement, target, transition, delay2, animations2);
  }
  for (const key in target) {
    const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
    const valueTarget = target[key];
    if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay: delay2,
      ...getValueTransition(animationTypeState?.out[key] || transition || {}, key)
    };
    if (skipAnimations)
      valueTransition.skipAnimations = true;
    const currentValue = value.get();
    if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
      frame.update(() => value.set(valueTarget));
      continue;
    }
    let isHandoff = false;
    if (isBrowser2 && window.MotionHandoffAnimation) {
      const appearId = getOptimisedAppearId(visualElement);
      if (appearId) {
        const startTime = window.MotionHandoffAnimation(appearId, key, frame);
        if (startTime !== null) {
          valueTransition.startTime = startTime;
          isHandoff = true;
        }
      }
    }
    addValueToWillChange(visualElement, key);
    const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
    value.run(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
    const animation = value.animation;
    if (animation) {
      animations2.push(animation);
    }
  }
  if (transitionEnd) {
    const applyTransitionEnd = () => frame.update(() => {
      transitionEnd && setTarget(visualElement, transitionEnd);
    });
    if (animations2.length) {
      Promise.all(animations2).then(applyTransitionEnd);
    } else {
      applyTransitionEnd();
    }
  }
  return animations2;
}

// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  const resolved = resolveVariant(visualElement, variant, getTypeCustom(visualElement, options.type));
  const transition = options.transitionOverride || (resolved?.transition ?? (visualElement.getDefaultTransition() || {}));
  const getAnimation = () => Promise.all(resolved ? animateTarget(visualElement, resolved, options) : []);
  const getChildAnimations = (delay2 = 0) => {
    const { variantChildren } = visualElement;
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    const animations2 = [];
    variantChildren?.forEach((child) => {
      child.notify("AnimationStart", variant);
      animations2.push(animateVariant(child, variant, {
        ...options,
        delay: delay2 + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(variantChildren, child, delayChildren, staggerChildren, staggerDirection)
      }).then(() => child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations2);
  };
  const { when } = transition;
  return when ? when === "beforeChildren" ? getAnimation().then(() => getChildAnimations()) : getChildAnimations().then(getAnimation) : Promise.all([getAnimation(), getChildAnimations(options.delay)]);
}

// node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  const animation = Array.isArray(definition) ? Promise.all(definition.map((variant) => animateVariant(visualElement, variant, options))) : typeof definition === "string" ? animateVariant(visualElement, definition, options) : Promise.all(animateTarget(visualElement, resolveVariant(visualElement, definition, options.custom), options));
  return animation.then(() => {
    visualElement.notify("AnimationComplete", definition);
  });
}

// node_modules/motion-dom/dist/es/value/types/auto.mjs
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};

// node_modules/motion-dom/dist/es/value/types/test.mjs
var testValueType = (v) => (type) => type.test(v);

// node_modules/motion-dom/dist/es/value/types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

// node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  } else {
    return true;
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var invalidTemplates = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
  let i = 0;
  let animatableTemplate = void 0;
  while (i < unresolvedKeyframes.length && !animatableTemplate) {
    const keyframe = unresolvedKeyframes[i];
    if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && hasComplexValues(keyframe)) {
      animatableTemplate = unresolvedKeyframes[i];
    }
    i++;
  }
  if (animatableTemplate && name) {
    for (const noneIndex of noneKeyframeIndexes) {
      if (unresolvedKeyframes[noneIndex] === animatableTemplate)
        continue;
      unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
    }
  }
}

// node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
  /**
   * Passes isAsync to the base constructor rather than setting it as a
   * class field, which would compile to a constructor that spreads
   * `arguments` into super(). That spread is slow in the interpreter,
   * and animate() constructs one resolver per value.
   */
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
    super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
  }
  /**
   * Keyframes that don't need reading from the DOM, or measuring,
   * resolve straight away rather than in the frame loop's batched read.
   */
  scheduleResolve() {
    if (this.canReadNow()) {
      this.readKeyframes();
      if (!this.needsMeasurement)
        return this.complete();
    }
    super.scheduleResolve();
  }
  canReadNow() {
    const { unresolvedKeyframes, element, motionValue: motionValue2 } = this;
    const origin = unresolvedKeyframes[0] ?? motionValue2?.get();
    if (!element?.current || origin === void 0)
      return false;
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (containsCSSVariable(i ? unresolvedKeyframes[i] : origin)) {
        return false;
      }
    }
    return true;
  }
  readKeyframes() {
    const { unresolvedKeyframes, element, name } = this;
    if (!element?.current)
      return;
    super.readKeyframes();
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      let keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string") {
        keyframe = keyframe.trim();
        if (isCSSVariableToken(keyframe)) {
          const resolved = getVariableValue(keyframe, element.current);
          if (resolved !== void 0) {
            unresolvedKeyframes[i] = resolved;
          }
          if (i === unresolvedKeyframes.length - 1) {
            this.finalKeyframe = keyframe;
          }
        }
      }
    }
    this.resolveNoneKeyframes();
    if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
      return;
    }
    const [origin, target] = unresolvedKeyframes;
    if (typeof origin === "number" && typeof target === "number")
      return;
    const originType = findDimensionValueType(origin);
    const targetType = findDimensionValueType(target);
    const originHasVar = containsCSSVariable(origin);
    const targetHasVar = containsCSSVariable(target);
    if (originHasVar !== targetHasVar && positionalValues[name]) {
      this.needsMeasurement = true;
      return;
    }
    if (originType === targetType)
      return;
    if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        const value = unresolvedKeyframes[i];
        if (typeof value === "string") {
          unresolvedKeyframes[i] = parseFloat(value);
        }
      }
    } else if (positionalValues[name]) {
      this.needsMeasurement = true;
    }
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes, name } = this;
    const noneKeyframeIndexes = [];
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) {
        noneKeyframeIndexes.push(i);
      }
    }
    if (noneKeyframeIndexes.length) {
      makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
  }
  measure() {
    const { element, name } = this;
    return positionalValues[name](window.getComputedStyle(element.current), () => element.measureViewportBox());
  }
  measureInitialState() {
    const { element, unresolvedKeyframes, name } = this;
    if (!element?.current)
      return;
    if (name === "height")
      this.suspendedScrollY = window.pageYOffset;
    this.measuredOrigin = this.measure();
    unresolvedKeyframes[0] = this.measuredOrigin;
    const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
    if (measureKeyframe !== void 0) {
      this.motionValue?.jump(measureKeyframe, false);
    }
  }
  measureEndState() {
    const { element, unresolvedKeyframes } = this;
    if (!element?.current)
      return;
    this.motionValue?.jump(this.measuredOrigin, false);
    const finalKeyframeIndex = unresolvedKeyframes.length - 1;
    const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
    unresolvedKeyframes[finalKeyframeIndex] = this.measure();
    if (finalKeyframe !== null && this.finalKeyframe === void 0) {
      this.finalKeyframe = finalKeyframe;
    }
    this.resolveNoneKeyframes();
  }
};

// node_modules/motion-dom/dist/es/utils/border-radius.mjs
var cornerRadiusProps = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];

// node_modules/motion-dom/dist/es/animation/animate/effects.mjs
var effects = [];
function addEffect(effect) {
  removeEffect(effect);
  effects.unshift(effect);
}
function removeEffect(effect) {
  removeItem(effects, effect);
}
function findEffect(subject) {
  return effects.find((effect) => effect.test(subject));
}
function animateValues(getValue, keyframes2, transition = {}, element) {
  const animations2 = [];
  const { velocity, path } = transition;
  const reduceMotion = transition.reduceMotion ?? element?.shouldReduceMotion;
  if (path?.animateValues && element) {
    keyframes2 = { ...keyframes2 };
    path.animateValues(getValue, keyframes2, transition, 0, animations2);
  }
  for (const key in keyframes2) {
    if (key === "transition" || key === "transitionEnd")
      continue;
    const target = keyframes2[key];
    if (target === void 0)
      continue;
    const value = getValue(key);
    const current = value.get();
    if (current !== void 0 && !value.isAnimating() && !Array.isArray(target) && target === current && !velocity) {
      frame.update(() => value.set(target));
      continue;
    }
    value.run(animateMotionValue(key, value, target, reduceMotion && positionalKeys.has(key) ? { type: false } : transition, element));
    value.animation && animations2.push(value.animation);
  }
  const { transitionEnd } = keyframes2;
  if (transitionEnd) {
    const applyTransitionEnd = () => frame.update(() => {
      for (const key in transitionEnd) {
        getValue(key).set(transitionEnd[key]);
      }
    });
    animations2.length ? Promise.all(animations2).then(applyTransitionEnd) : applyTransitionEnd();
  }
  return animations2;
}
function animateEffectSubject(effect, subject, keyframes2, transition, element) {
  let created;
  let isBound = false;
  const animations2 = animateValues((key) => {
    let value = created?.[key] ?? effect.get(subject, key);
    if (!value) {
      let initial;
      if (!element) {
        const target = keyframes2[key];
        initial = firstKeyframe(target) ?? effect.read(subject, key, target);
      }
      value = motionValue(initial, { owner: element });
      isBound ? effect(subject, { [key]: value }) : (created || (created = {}))[key] = value;
    }
    return value;
  }, keyframes2, transition, element);
  isBound = true;
  created && effect(subject, created);
  return animations2;
}
function firstKeyframe(target) {
  const first = Array.isArray(target) ? target[0] : void 0;
  return first === null ? void 0 : first;
}

// node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function isHTMLElement(element) {
  return isObject(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
}

// node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function isSVGElement(element) {
  return isObject(element) && "ownerSVGElement" in element;
}

// node_modules/motion-dom/dist/es/scope/active.mjs
var activeScope = {};
function addToScope(cleanup) {
  activeScope.current?.add(cleanup);
  return cleanup;
}
var bindToScope = (callback) => activeScope.current ? activeScope.current.bind(callback) : callback;

// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
  if (elementOrSelector == null) {
    return [];
  }
  if (elementOrSelector instanceof EventTarget) {
    return [elementOrSelector];
  } else if (typeof elementOrSelector === "string") {
    const root = scope ? scope.current : activeScope.current?.root || document;
    const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
    return elements ? Array.from(elements) : [];
  }
  return Array.from(elementOrSelector).filter((element) => element != null);
}

// node_modules/motion-dom/dist/es/effects/MotionValueState.mjs
var MotionValueState = class {
  /**
   * @param step - The frameloop step renders are scheduled in. Defaults
   * to `frame.render`. Effects that feed a render loop running in
   * `frame.render` (GPU scenes) should write in `frame.preRender`.
   */
  constructor(step = frame.render) {
    this.step = step;
    this.values = /* @__PURE__ */ new Map();
    this.pending = [];
    this.numPending = 0;
    this.flush = () => {
      const { pending, numPending } = this;
      this.numPending = 0;
      for (let i = 0; i < numPending; i++)
        pending[i]();
    };
  }
  /**
   * @param render - Writes the value to the subject. Renders read the
   * motion value directly rather than a cached copy, so there is one
   * place a value lives.
   * @param computed - A value already in this state (e.g. `transform`)
   * whose render should run whenever `value` changes.
   */
  set(name, value, render, computed) {
    this.values.get(name)?.onRemove();
    if (computed) {
      for (const entry of this.values.values()) {
        if (entry.value === computed)
          render = entry.render;
      }
    }
    const onChange = () => render && this.schedule(render);
    value.get() !== void 0 && onChange();
    const cancelOnChange = value.on("change", onChange);
    const onRemove = () => {
      cancelOnChange();
      render && !computed && this.cancel(render);
      this.values.get(name)?.onRemove === onRemove && this.values.delete(name);
    };
    this.values.set(name, {
      value,
      render: computed ? void 0 : render,
      onRemove
    });
    return onRemove;
  }
  get(name) {
    return this.values.get(name)?.value;
  }
  /**
   * Detach every value from this state and return them, so another
   * renderer can take them over. The state stays cached by its effect,
   * so the bound transforms are reset too rather than leaking into
   * values bound later.
   */
  release() {
    const values = /* @__PURE__ */ new Map();
    this.values.forEach((entry, name) => {
      values.set(name, entry.value);
      entry.onRemove();
    });
    this.transformKeys = this.transformValues = void 0;
    return values;
  }
  schedule(render) {
    const { pending, numPending } = this;
    for (let i = 0; i < numPending; i++) {
      if (pending[i] === render)
        return;
    }
    numPending || this.step(this.flush);
    pending[this.numPending++] = render;
  }
  cancel(render) {
    const { pending } = this;
    for (let i = 0; i < this.numPending; i++) {
      if (pending[i] === render) {
        pending[i] = pending[--this.numPending];
        return;
      }
    }
  }
};

// node_modules/motion-dom/dist/es/effects/utils/create-effect.mjs
function createEffect(addValue, { step, ...options } = {}) {
  const stateCache = /* @__PURE__ */ new WeakMap();
  const effect = (subject, values) => {
    const state = stateCache.get(subject) ?? new MotionValueState(step);
    stateCache.set(subject, state);
    const subscriptions = [];
    for (const key in values) {
      const value = values[key];
      const remove = addValue(subject, state, key, value);
      subscriptions.push(remove);
    }
    return () => {
      for (const cancel of subscriptions)
        cancel();
    };
  };
  return Object.assign(effect, options, {
    get: (subject, key) => stateCache.get(subject)?.get(key),
    flush: (subject) => stateCache.get(subject)?.flush(),
    state: (subject) => stateCache.get(subject)
  });
}

// node_modules/motion-dom/dist/es/effects/style/transform.mjs
function buildTransform2(state) {
  let transform2 = "";
  const { transformKeys: keys = [], transformValues: values = {} } = state;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[key].getCurrent();
    if (value === void 0)
      continue;
    if (!isDefaultTransform(key, value)) {
      transform2 += (transform2 && " ") + transformFunction(key, value);
    }
  }
  const pathRotation = state.get("pathRotation")?.get();
  if (pathRotation) {
    transform2 += (transform2 && " ") + transformFunction("rotate", pathRotation);
  }
  return transform2 || "none";
}

// node_modules/motion-dom/dist/es/effects/style/index.mjs
var originProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
var styleValue = (state, key) => getValueAsType(state.get(key)?.get(), numberValueTypes[key]);
var addStyleValue = (element, state, key, value) => {
  let render = void 0;
  let computed = void 0;
  if (transformProps.has(key)) {
    if (key !== "pathRotation") {
      const keys = state.transformKeys ?? (state.transformKeys = []);
      (state.transformValues ?? (state.transformValues = {}))[key] = value;
      if (!keys.includes(key)) {
        keys.push(key);
        keys.sort((a, b) => transformPropOrder.indexOf(a) - transformPropOrder.indexOf(b));
      }
    }
    if (!state.get("transform")) {
      if (!isHTMLElement(element) && !state.get("transformBox")) {
        addStyleValue(element, state, "transformBox", new MotionValue("fill-box"));
      }
      state.set("transform", new MotionValue("none"), () => {
        transformGroups.get(element)?.check();
        element.style.transform = buildTransform2(state);
      });
    }
    computed = state.get("transform");
  } else if (originProps.has(key)) {
    if (!state.get("transformOrigin")) {
      state.set("transformOrigin", new MotionValue(""), () => {
        const originX = styleValue(state, "originX") ?? "50%";
        const originY = styleValue(state, "originY") ?? "50%";
        const originZ = styleValue(state, "originZ") ?? 0;
        element.style.transformOrigin = `${originX} ${originY} ${originZ}`;
      });
    }
    computed = state.get("transformOrigin");
  } else if (isCSSVar(key)) {
    render = () => {
      element.style.setProperty(key, value.getCurrent());
    };
  } else {
    render = () => {
      element.style[key] = getValueAsType(value.getCurrent(), numberValueTypes[key]);
    };
  }
  return state.set(key, value, render, computed);
};
var isStyleSubject = (subject) => isHTMLElement(subject) || isSVGElement(subject);
var readStyleValue = (element, key) => {
  if (transformProps.has(key)) {
    return readTransformValue(element, key);
  }
  const computedStyle = getComputedStyle(element);
  const value = isCSSVar(key) ? computedStyle.getPropertyValue(key) : computedStyle[key];
  return typeof value === "string" && value.trim() || 0;
};
var styleSubjectEffect = /* @__PURE__ */ createEffect(addStyleValue, {
  test: isStyleSubject,
  read: readStyleValue
});

// node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function camelToDash(str) {
  return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}

// node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
  const { style, vars, transformOrigin } = state;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (transformProps.has(key)) {
      hasTransform2 = true;
      continue;
    } else if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    } else {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (key.startsWith("origin")) {
        hasTransformOrigin = true;
        transformOrigin[key] = valueAsType;
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(latestValues, state.transform, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = `${-offset}`;
  attrs[keys.array] = `${length} ${spacing}`;
}

// node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var cssStyleProperties = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  // This is object creation, which we try to avoid per-frame.
  ...latest
}, isSVGTag2, transformTemplate, styleProp) {
  buildHTMLStyles(state, latest, transformTemplate);
  if (isSVGTag2) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const { attrs, style } = state;
  for (const key of cssStyleProperties) {
    if (attrs[key] !== void 0) {
      style[key] = attrs[key];
      delete attrs[key];
    }
  }
  if (style.transform || attrs.transformOrigin) {
    style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
    delete attrs.transformOrigin;
  }
  if (style.transform) {
    style.transformBox = styleProp?.transformBox ?? "fill-box";
    delete attrs.transformBox;
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (attrScale !== void 0)
    attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/motion-dom/dist/es/effects/attr/index.mjs
function canSetAsProperty(element, name) {
  if (!(name in element))
    return false;
  const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), name) || Object.getOwnPropertyDescriptor(element, name);
  return descriptor && typeof descriptor.set === "function";
}
var addAttrValue = (element, state, key, value, name = key) => {
  const isProp = canSetAsProperty(element, name);
  if (!isProp && (name.startsWith("data") || name.startsWith("aria"))) {
    name = camelToDash(name);
  }
  const type = numberValueTypes[key] || numberValueTypes[name];
  const render = isProp ? () => {
    element[name] = getValueAsType(value.get(), numberValueTypes[key]);
  } : () => {
    const v = getValueAsType(value.get(), type);
    if (v === null || v === void 0) {
      element.removeAttribute(name);
    } else {
      element.setAttribute(name, String(v));
    }
  };
  return state.set(key, value, render);
};

// node_modules/motion-dom/dist/es/effects/svg/index.mjs
function addSVGPathValue(element, state, key, value) {
  frame.render(() => element.setAttribute("pathLength", "1"));
  if (key === "pathOffset") {
    return state.set(key, value, () => {
      const offset = value.get();
      element.setAttribute("stroke-dashoffset", `${-offset}`);
    });
  } else {
    if (!state.get("stroke-dasharray")) {
      state.set("stroke-dasharray", new MotionValue("1 1"), () => {
        const pathLength = state.get("pathLength")?.get() ?? 1;
        const pathSpacing = state.get("pathSpacing")?.get();
        element.setAttribute("stroke-dasharray", `${pathLength} ${pathSpacing ?? 1 - Number(pathLength)}`);
      });
    }
    return state.set(key, value, void 0, state.get("stroke-dasharray"));
  }
}
var addSVGValue = (element, state, key, value) => {
  if (key.startsWith("path") && !transformProps.has(key)) {
    return addSVGPathValue(element, state, key, value);
  } else if (key.startsWith("attr")) {
    return addAttrValue(element, state, key, value, convertAttrKey(key));
  } else if (key === "d") {
    return state.set(key, value, () => {
      const d = value.get()?.replace(/path\(|["')]/g, "");
      d === void 0 ? element.removeAttribute(key) : element.setAttribute(key, d);
    });
  }
  const handler = transformProps.has(key) || originProps.has(key) || isCSSVar(key) || key in element.style ? addStyleValue : addAttrValue;
  return handler(element, state, key, value);
};
var readSVGValue = (element, key) => {
  if (transformProps.has(key)) {
    return numberValueTypes[key]?.default || 0;
  }
  if (isCSSVar(key) || cssStyleProperties.includes(key)) {
    return readStyleValue(element, key) || element.getAttribute(camelToDash(key)) || 0;
  }
  key = convertAttrKey(key);
  return element.getAttribute(camelToDash(key)) ?? element.getAttribute(key) ?? void 0;
};
var svgSubjectEffect = /* @__PURE__ */ createEffect(addSVGValue, {
  test: isSVGElement,
  read: readSVGValue
});
function convertAttrKey(key) {
  return key.replace(/^attr([A-Z])/, (_, firstChar) => firstChar.toLowerCase());
}

// node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  const topLeft = transformPoint2({ x: point.left, y: point.top });
  const bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX: scaleX2, scaleY: scaleY2 }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX2) || !isIdentityScale(scaleY2);
}
var angleTransforms = [
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skewX",
  "skewY"
];
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || hasDistortingTransform(values);
}
function hasDistortingTransform(values) {
  return values.z || values.rotate || values.rotateX || values.rotateY || values.rotateZ || values.skewX || values.skewY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale2, originPoint) {
  const distanceFromOrigin = point - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = 0.999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    if (node.options.visualElement?.props.style?.display === "contents") {
      continue;
    }
    if (isSharedTransition === true && node.options.layoutScroll && node.scroll && node !== node.root) {
      translateAxis(box.x, -node.scroll.offset.x);
      translateAxis(box.y, -node.scroll.offset.y);
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && (isSharedTransition.path?.[i] || isSharedTransition) !== node && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues, node.layout?.layoutBox);
    }
  }
  if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
    treeScale.x = 1;
  }
  if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
    treeScale.y = 1;
  }
}
function translateAxis(axis, distance2) {
  axis.min += distance2;
  axis.max += distance2;
}
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
  const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function resolveAxisTranslate(value, axis) {
  if (typeof value === "string") {
    return parseFloat(value) / 100 * (axis.max - axis.min);
  }
  return value;
}
function transformBox(box, transform2, sourceBox) {
  const resolveBox = sourceBox ?? box;
  transformAxis(box.x, resolveAxisTranslate(transform2.x, resolveBox.x), transform2.scaleX, transform2.scale, transform2.originX);
  transformAxis(box.y, resolveAxisTranslate(transform2.y, resolveBox.y), transform2.scaleY, transform2.scale, transform2.originY);
}

// node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll } = rootProjectionNode2;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.offset.x);
    translateAxis(viewportBox.y, scroll.offset.y);
  }
  return viewportBox;
}
var measureDocumentScroll = () => ({
  x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
  y: document.documentElement.scrollTop || document.body?.scrollTop || 0
});

// node_modules/motion-dom/dist/es/animation/animate/element.mjs
var noProps = {};
var getElementEffect = (element) => isSVGElement(element) ? svgSubjectEffect : styleSubjectEffect;
var EffectSubject = class {
  constructor(effect, current) {
    this.effect = effect;
    this.current = current;
    this.KeyframeResolver = DOMKeyframesResolver;
  }
  getValue(key) {
    return this.effect.get(this.current, key);
  }
  readValue(key, target) {
    return this.effect.read(this.current, key, target);
  }
  render() {
    this.effect.flush(this.current);
  }
  measureViewportBox() {
    return measureViewportBox(this.current);
  }
  getProps() {
    return noProps;
  }
};
function animateElement(element, keyframes2, transition, visualElement) {
  activeScope.current?.track(element);
  if (visualElement) {
    return animateValues((key) => visualElement.getValue(key, null), keyframes2, transition, visualElement);
  }
  const effect = getElementEffect(element);
  return animateEffectSubject(effect, element, keyframes2, transition, new EffectSubject(effect, element));
}

// node_modules/motion-dom/dist/es/effects/prop/index.mjs
var propEffect = /* @__PURE__ */ createEffect((subject, state, key, value) => {
  return state.set(key, value, () => {
    subject[key] = value.get();
  });
}, {
  test: (subject) => isObject(subject),
  read: (subject, key) => {
    const value = subject[key];
    return typeof value === "string" || typeof value === "number" ? value : void 0;
  }
});

// node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);

// node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.run(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}

// node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};

// node_modules/motion-dom/dist/es/stats/buffer.mjs
var statsBuffer = {
  value: null,
  addProjectionMetrics: null,
  countProjection: void 0
};

// node_modules/motion-dom/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = time.now();
  callback = bindToScope(callback);
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.setup(checkElapsed, true);
  return addToScope(() => cancelFrame(checkElapsed));
}

// node_modules/motion-dom/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function isSVGSVGElement(element) {
  return isSVGElement(element) && element.tagName === "svg";
}

// node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  return isMotionValue(value) ? value.get() : value;
}

// node_modules/motion-dom/dist/es/value/utils/as-number.mjs
var asNumber = (v) => typeof v === "number" ? v : parseFloat(v);

// node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var numBorders = cornerRadiusProps.length;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber(0, lead.opacity ?? 1, easeCrossfadeIn(progress2));
    target.opacityExit = mixNumber(follow.opacity ?? 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mixNumber(follow.opacity ?? 1, lead.opacity ?? 1, progress2);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = cornerRadiusProps[i];
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  for (let i = 0; i < angleTransforms.length; i++) {
    const key = angleTransforms[i];
    if (follow[key] || lead[key]) {
      target[key] = mixNumber(follow[key] || 0, lead[key] || 0, progress2);
    }
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
var easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return (p) => {
    if (p < min)
      return 0;
    if (p > max)
      return 1;
    return easing(progress(min, max, p));
  };
}

// node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function copyAxisDeltaInto(delta, originDelta) {
  delta.translate = originDelta.translate;
  delta.scale = originDelta.scale;
  delta.originPoint = originDelta.originPoint;
  delta.origin = originDelta.origin;
}

// node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var SCALE_PRECISION = 1e-4;
var SCALE_MIN = 1 - SCALE_PRECISION;
var SCALE_MAX = 1 + SCALE_PRECISION;
var TRANSLATE_PRECISION = 0.01;
var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear2(value, target, maxDistance) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mixNumber(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
  if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
    delta.scale = 1;
  }
  if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
    delta.translate = 0;
  }
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin?.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin?.originY);
}
function calcRelativeAxis(target, relative, parent, anchor = 0) {
  const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
  target.min = anchorPoint + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent, anchor) {
  calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
  calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
}
function calcRelativeAxisPosition(target, layout2, parent, anchor = 0) {
  const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
  target.min = layout2.min - anchorPoint;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent, anchor) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x, anchor?.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y, anchor?.y);
}

// node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox?.x, sourceBox?.x);
  removeAxisTransforms(box.y, transforms, yKeys, originBox?.y, sourceBox?.y);
}

// node_modules/motion-dom/dist/es/projection/geometry/round.mjs
var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}

// node_modules/motion-dom/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({ min: 0, max: 0 });
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
  return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
  return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
  return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
  return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
  return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}

// node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    for (let i = this.members.length - 1; i >= 0; i--) {
      const member = this.members[i];
      if (member === node || member === this.lead || member === this.prevLead)
        continue;
      const inst = member.instance;
      if ((!inst || inst.isConnected === false) && !member.snapshot) {
        removeItem(this.members, member);
        member.unmount();
      }
    }
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead)
      this.prevLead = void 0;
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead)
        this.promote(prevLead);
    }
  }
  relegate(node) {
    for (let i = this.members.indexOf(node) - 1; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false && member.instance?.isConnected !== false) {
        this.promote(member);
        return true;
      }
    }
    return false;
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.updateSnapshot();
      node.scheduleRender();
      const { layoutDependency: prevDep } = prevLead.options;
      const { layoutDependency: nextDep } = node.options;
      if (prevDep === void 0 || prevDep !== nextDep) {
        node.resumeFrom = prevLead;
        if (preserveFollowOpacity)
          prevLead.preserveOpacity = true;
        if (prevLead.snapshot) {
          node.snapshot = prevLead.snapshot;
          node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        }
        if (node.root?.isUpdating)
          node.isLayoutDirty = true;
      }
      if (node.options.crossfade === false)
        prevLead.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((member) => {
      member.options.onExitComplete?.();
      member.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((member) => member.instance && member.scheduleRender(false));
  }
  removeLeadSnapshot() {
    if (this.lead?.snapshot)
      this.lead.snapshot = void 0;
  }
};

// node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mixNumber(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};

// node_modules/motion-dom/dist/es/projection/styles/default-scale-correctors.mjs
var defaultScaleCorrectors = {
  borderRadius: /* @__PURE__ */ Object.assign({}, correctBorderRadius, {
    applyTo: /* @__PURE__ */ cornerRadiusProps.slice()
  }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform2 = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  const zTranslate = latestTransform?.z || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform2 = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
  }
  let angles = "";
  if (latestTransform) {
    const { transformPerspective } = latestTransform;
    if (transformPerspective)
      transform2 = `perspective(${transformPerspective}px) ${transform2}`;
    for (let i = 0; i < angleTransforms.length; i++) {
      const key = angleTransforms[i];
      const value = latestTransform[key];
      if (value)
        angles += `${key}(${value}deg) `;
      if (!i && latestTransform.pathRotation)
        angles += `rotate(${latestTransform.pathRotation}deg) `;
    }
  }
  if (angles) {
    if (treeScale.x !== 1 || treeScale.y !== 1) {
      transform2 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    transform2 += angles;
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
      transform2 += `scale(${elementScaleX}, ${elementScaleY})`;
    }
  } else if (delta.x.scale !== 1 || delta.y.scale !== 1) {
    transform2 += `scale(${delta.x.scale}, ${delta.y.scale})`;
  } else if (!transform2 && (treeScale.x !== 1 || treeScale.y !== 1)) {
    transform2 = "scale(1, 1)";
  }
  return transform2 || "none";
}

// node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// node_modules/motion-dom/dist/es/projection/node/state.mjs
var globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};

// node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs
var distortingTransforms = ["z", "skew", "skewZ"];
var animationTarget = 1e3;
var id = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  const { latestValues } = visualElement;
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
var demoteTransforms = (node) => node.instance && transformGroups.get(node.instance)?.demote() && node.resetSkewAndRotation();
function cancelTreeOptimisedTransformAnimations(projectionNode) {
  projectionNode.hasCheckedOptimisedAppear = true;
  if (projectionNode.root === projectionNode)
    return;
  const { visualElement } = projectionNode.options;
  if (!visualElement)
    return;
  const appearId = getOptimisedAppearId(visualElement);
  if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
    const { layout: layout2, layoutId } = projectionNode.options;
    window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
  }
  const { parent } = projectionNode;
  if (parent && !parent.hasCheckedOptimisedAppear) {
    cancelTreeOptimisedTransformAnimations(parent);
  }
}
function getClosestProjectingNode(visualElement) {
  if (!visualElement)
    return void 0;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll: measureScroll2, checkIsScrollRoot, resetTransform }) {
  Object.assign(scaleCorrectors, {
    ...defaultScaleCorrectors,
    ...scaleCorrectors
  });
  return class ProjectionNode {
    /**
     * Create the projection node of a `motion` component's VisualElement,
     * from its props. This runs while the component renders, before its
     * children. It's here rather than in the component so React
     * bundles only include it with the features that supply a
     * ProjectionNode. Vanilla bundles that use the projection node
     * (drag(), animateLayout()) include it too, as a class static
     * can't be tree-shaken.
     */
    static create(visualElement, props, initialPromotionConfig) {
      const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
      const projection = visualElement.projection = new this(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
      projection.setOptions({
        layoutId,
        layout: layout2,
        alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
        visualElement,
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof layout2 === "string" ? layout2 : "both",
        initialPromotionConfig,
        crossfade: layoutCrossfade,
        layoutScroll,
        layoutRoot,
        layoutAnchor
      });
      const lead = projection.getStack()?.lead;
      if (lead && !projection.root.isUpdateBlocked()) {
        lead.willUpdate();
        lead.scheduleCheckAfterUnmount();
      }
    }
    constructor(latestValues = {}, parent = defaultParent?.()) {
      this.id = id++;
      this.animationId = 0;
      this.animationCommitId = 0;
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        statsBuffer.countProjection?.();
      };
      this.resolvedRelativeTargetAt = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      this.eventHandlers.get(name)?.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    /**
     * Lifecycles
     */
    mount(instance) {
      if (this.instance)
        return;
      this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
      this.instance = instance;
      const { layoutId, layout: layout2, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent?.children.add(this);
      if (this.root.hasTreeAnimated && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        let innerWidth = 0;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        frame.read(() => {
          innerWidth = window.innerWidth;
        });
        attachResizeListener(instance, () => {
          const newInnerWidth = window.innerWidth;
          if (newInnerWidth === innerWidth)
            return;
          innerWidth = newInnerWidth;
          this.root.updateBlockedByResize = true;
          cancelDelay?.();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      this.addLayoutListener();
    }
    /**
     * Only register the layout animation handler if this node requires
     * layout animation. This is called on mount, and again whenever options
     * change, as `layout` or `layoutId` may be enabled after mount.
     */
    addLayoutListener() {
      const { layoutId, layout: layout2, visualElement, animate: animate2 } = this.options;
      if (!this.instance || this.hasLayoutListener || animate2 === false || !visualElement || !(layoutId || layout2))
        return;
      this.hasLayoutListener = true;
      this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0;
          this.relativeTarget = void 0;
          return;
        }
        const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
        const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
        const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
        const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
        if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
          if (this.resumeFrom) {
            this.resumingFrom = this.resumeFrom;
            this.resumingFrom.resumingFrom = void 0;
          }
          const animationOptions = {
            ...getValueTransition(layoutTransition, "layout"),
            onPlay: onLayoutAnimationStart,
            onComplete: onLayoutAnimationComplete
          };
          if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
            animationOptions.delay = 0;
            animationOptions.type = false;
          }
          this.startAnimation(animationOptions);
          this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged, animationOptions.path);
        } else {
          if (!hasLayoutChanged) {
            finishAnimation(this);
          }
          this.isLead() && this.options.onExitComplete?.();
        }
        this.targetLayout = newLayout;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      this.getStack()?.remove(this);
      this.parent?.children.delete(this);
      this.instance = void 0;
      this.eventHandlers.clear();
      this.hasLayoutListener = false;
      cancelFrame(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    // Note: currently only running on root node
    startUpdate() {
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      this.nodes?.forEach(resetSkewAndRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const { visualElement } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete?.();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(this);
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      demoteTransforms(this);
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        demoteTransforms(node);
        if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") {
          node.isLayoutDirty = true;
        }
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
        if (node.isAnimationBlocked) {
          node.dragSnapshot || (node.dragSnapshot = node.measure());
          this.dragAncestor = node;
        }
      }
      const { layoutId, layout: layout2 } = this.options;
      if (layoutId === void 0 && !layout2)
        return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        const wasBlockedByResize = this.updateBlockedByResize;
        this.unblockUpdate();
        this.updateBlockedByResize = false;
        this.clearAllSnapshots();
        if (wasBlockedByResize) {
          this.nodes.forEach(forceLayoutMeasure);
        }
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(clearIsLayoutDirty);
        return;
      }
      this.animationCommitId = this.animationId;
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      } else {
        this.isUpdating = false;
        this.nodes.forEach(ensureDraggedNodesSnapshotted);
        this.nodes.forEach(syncRelativeLayout);
        this.nodes.forEach(resetTransformStyle);
        this.nodes.forEach(updateLayout);
        this.nodes.forEach(notifyLayoutUpdate);
      }
      this.clearAllSnapshots();
      const now2 = time.now();
      frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
      frameData.timestamp = now2;
      frameData.isProcessing = true;
      frameSteps.update.process(frameData);
      frameSteps.preRender.process(frameData);
      frameSteps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        microtask.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach((stack, layoutId) => stack.members.length ? stack.removeLeadSnapshot() : this.sharedNodes.delete(layoutId));
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
      if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) {
        this.snapshot = void 0;
      }
    }
    updateLayout() {
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      if (!this.layoutCorrected)
        this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement } = this.options;
      visualElement?.notify("LayoutMeasure", this.layout.layoutBox, prevLayout?.layoutBox);
    }
    updateScroll(phase = "measure") {
      const { scroll, instance } = this;
      const { animationId } = this.root;
      if (this.options.layoutScroll && instance && !(scroll && scroll.animationId === animationId && scroll.phase === phase)) {
        const isRoot = checkIsScrollRoot(instance);
        this.scroll = {
          animationId,
          phase,
          isRoot,
          offset: measureScroll2(instance),
          wasRoot: scroll ? scroll.isRoot : isRoot
        };
      }
    }
    resetTransform() {
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      isResetRequested && demoteTransforms(this);
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
      if (!wasInScrollRoot) {
        const { scroll } = this.root;
        if (scroll) {
          translateAxis(box.x, scroll.offset.x);
          translateAxis(box.y, scroll.offset.y);
        }
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      if (this.scroll?.wasRoot) {
        return boxWithoutScroll;
      }
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const { scroll, options } = node;
        if (node !== this.root && scroll && options.layoutScroll) {
          if (scroll.wasRoot) {
            copyBoxInto(boxWithoutScroll, box);
          }
          translateAxis(boxWithoutScroll.x, scroll.offset.x);
          translateAxis(boxWithoutScroll.y, scroll.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false, output, skipOwnTransform, start = 0) {
      const withTransforms = output || createBox();
      copyBoxInto(withTransforms, box);
      for (let i = start; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          translateAxis(withTransforms.x, -node.scroll.offset.x);
          translateAxis(withTransforms.y, -node.scroll.offset.y);
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
      }
      if (!skipOwnTransform && hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!hasTransform(node.latestValues))
          continue;
        let sourceBox;
        if (node.instance) {
          hasScale(node.latestValues) && node.updateSnapshot();
          sourceBox = createBox();
          copyBoxInto(sourceBox, node.measurePageBox());
        }
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
      this.addLayoutListener();
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent)
        return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      if (!this.layout || !(layout2 || layoutId))
        return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      const relativeParent = this.getClosestProjectingParent();
      if (!this.targetDelta && !this.relativeTarget) {
        if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) {
          this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
        } else {
          this.removeRelativeTarget();
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.applyTransform(this.layout.layoutBox, false, this.target, true);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        if (this.options.layoutAnchor !== false && relativeParent && (!relativeParent.resumingFrom === !this.resumingFrom || /**
         * Shared layout animations within a layoutRoot
         * animate relative to it.
         */
        relativeParent.options.layoutRoot && !relativeParent.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      statsBuffer.countProjection?.(1);
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(relativeParent, layout2, parentLayout) {
      this.relativeParent = relativeParent;
      this.forceRelativeParentToResolveTarget();
      this.relativeTarget = createBox();
      this.relativeTargetOrigin = createBox();
      calcRelativePosition(this.relativeTargetOrigin, layout2, parentLayout, this.options.layoutAnchor || void 0);
      copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      this.isTreeAnimating = Boolean(this.parent?.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared && (lead.relativeTarget && !lead.relativeParent.resumingFrom ? lead.relativeParent : true));
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
        lead.targetWithTransforms = createBox();
      }
      const { target } = lead;
      if (!target) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
        copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      statsBuffer.countProjection?.(2);
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      this.options.visualElement?.scheduleRender();
      if (notifyAll2) {
        this.getStack()?.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = createDelta();
      this.projectionDelta = createDelta();
      this.projectionDeltaWithTransform = createDelta();
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false, pathFn) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = { ...this.latestValues };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const isSharedLayoutAnimation = snapshot?.source !== this.layout?.source;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      const interpolate2 = pathFn?.interpolateProjection(delta);
      this.mixTargetDelta = (latest) => {
        const progress2 = latest / 1e3;
        const point = interpolate2?.(progress2);
        mixAxisDeltaLinear(targetDelta.x, delta.x, progress2);
        mixAxisDeltaLinear(targetDelta.y, delta.y, progress2);
        if (point) {
          targetDelta.x.translate = point.x;
          targetDelta.y.translate = point.y;
        }
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget)
            prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        if (point?.rotate !== void 0) {
          if (!this.animationValues)
            this.animationValues = mixedValues;
          this.animationValues.pathRotation = point.rotate;
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation?.stop();
      this.resumingFrom?.currentAnimation?.stop();
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.motionValue || (this.motionValue = motionValue(0));
        this.motionValue.jump(0, false);
        this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
          ...options,
          velocity: 0,
          isSync: true,
          onUpdate: (latest) => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        notifyLayoutAnimationStart(this.currentAnimation, this);
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta?.(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      const { targetWithTransforms, layout: layout2, latestValues } = lead;
      let { target } = lead;
      if (!targetWithTransforms || !target || !layout2)
        return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        const { layoutBox } = this.layout;
        const leadTarget = target;
        target = this.target || createBox();
        alignAxis(target.x, leadTarget.x, layoutBox.x);
        alignAxis(target.y, leadTarget.y, layoutBox.y);
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config?.transition,
        preserveFollowOpacity: config?.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      this.getStack()?.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      return this.getStack()?.relegate(this) || false;
    }
    resetSkewAndRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      const { latestValues } = visualElement;
      if (!hasDistortingTransform(latestValues))
        return;
      const resetValues = {};
      for (let i = 0; i < distortingTransforms.length; i++) {
        resetDistortingTransform(distortingTransforms[i], visualElement, resetValues, this.animationValues);
      }
      for (let i = 0; i < angleTransforms.length; i++) {
        resetDistortingTransform(angleTransforms[i], visualElement, resetValues, this.animationValues);
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
        if (this.animationValues) {
          this.animationValues[key] = resetValues[key];
        }
      }
      visualElement.scheduleRender();
    }
    applyProjectionStyles(targetStyle, styleProp) {
      if (!this.instance || this.isSVG)
        return;
      const lead = this.getLead();
      if (!this.isVisible && lead !== this) {
        targetStyle.visibility = "hidden";
        return;
      }
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        targetStyle.visibility = "";
        targetStyle.opacity = "";
        targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return;
      }
      if (!this.projectionDelta || !this.layout || !lead.target) {
        if (this.options.layoutId || this.needsShow) {
          this.needsShow = false;
          targetStyle.visibility = "";
          targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return;
      }
      targetStyle.visibility = "";
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      let transform2 = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        transform2 = transformTemplate(valuesToRender, transform2);
      }
      targetStyle.transform = transform2;
      const { x, y } = this.projectionDelta;
      targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
        const corrected = transform2 === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            targetStyle[applyTo[i]] = corrected;
          }
        } else {
          if (isCSSVariable) {
            this.options.visualElement.renderState.vars[key] = corrected;
          } else {
            targetStyle[key] = corrected;
          }
        }
      }
      if (this.options.layoutId) {
        targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
      }
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((node) => node.currentAnimation?.stop());
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
  followDraggedAncestor(node);
}
function notifyLayoutUpdate(node) {
  const snapshot = node.resumeFrom?.snapshot || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
    const { animationType } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    const resizeSnapshot = (box, to) => {
      if (animationType === "size") {
        eachAxis((axis) => {
          const length = calcLength(box[axis]);
          box[axis].min = to[axis].min;
          box[axis].max = box[axis].min + length;
        });
      } else if (animationType === "x" || animationType === "y") {
        const snapAxis = animationType === "x" ? "y" : "x";
        copyAxisInto(box[snapAxis], to[snapAxis]);
      } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
        eachAxis((axis) => {
          const length = calcLength(to[axis]);
          box[axis].max = box[axis].min + length;
          if (node.relativeTarget && !node.currentAnimation) {
            node.isProjectionDirty = true;
            node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
          }
        });
      }
    };
    const snapshotBox = isShared ? snapshot.measuredBox : snapshot.layoutBox;
    resizeSnapshot(snapshotBox, layout2);
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    calcBoxDelta(visualDelta, isShared ? node.applyTransform(measuredLayout, true) : layout2, snapshotBox);
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeLayoutChanged = false;
    const relativeParent = node.getClosestProjectingParent();
    if (!isShared || relativeParent?.options.layoutRoot && node.resumeFrom?.path.includes(relativeParent)) {
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const anchor = node.options.layoutAnchor || void 0;
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, isShared ? node.resumeFrom.applyTransform(snapshot.layoutBox, true, void 0, true, relativeParent.depth + 1) : snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox, anchor);
          isShared && resizeSnapshot(relativeSnapshot, relativeLayout);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeLayoutChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeLayoutChanged
    });
  } else if (node.isLead()) {
    node.options.onExitComplete?.();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  statsBuffer.countProjection?.(0);
  if (!node.parent)
    return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function forceLayoutMeasure(node) {
  node.isLayoutDirty = true;
  node.updateLayout();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function followDraggedAncestor(node) {
  const { snapshot, dragAncestor } = node;
  const to = dragAncestor?.isAnimationBlocked && dragAncestor.layout;
  if (!snapshot || !to || node.resumeFrom || node.isAnimationBlocked)
    return;
  const from = dragAncestor.dragSnapshot;
  eachAxis((axis) => translateAxis(snapshot.layoutBox[axis], to.layoutBox[axis].min - from.layoutBox[axis].min));
}
function ensureDraggedNodesSnapshotted(node) {
  if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
    node.snapshot = node.dragSnapshot || node.layout;
    node.isLayoutDirty = true;
  }
}
function syncRelativeLayout(node) {
  if (node.relativeTarget && node.relativeParent?.isLayoutDirty) {
    if (node.currentAnimation) {
      node.isLayoutDirty = true;
    } else {
      node.targetDelta = void 0;
      node.removeRelativeTarget();
    }
  }
}
function resetTransformStyle(node) {
  const { visualElement } = node.options;
  if (visualElement?.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function mixAxisDeltaLinear(output, delta, p) {
  output.translate = mixNumber(delta.translate, 0, p);
  output.scale = mixNumber(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mixNumber(from.min, to.min, p);
  output.max = mixNumber(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues?.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function alignAxis(output, from, layout2) {
  output.max = calcLength(layout2) + (output.min = from.min);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear2(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}
function checkNodeWasScrollRoot(node) {
  return node !== node.root && node.scroll?.wasRoot;
}

// node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler, options);
}

// node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = /* @__PURE__ */ createProjectionNode({
  attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
  measureScroll: measureDocumentScroll,
  checkIsScrollRoot: () => true
});

// node_modules/motion-dom/dist/es/projection/node/root.mjs
var rootProjectionNode = {
  current: void 0
};

// node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs
var HTMLProjectionNode = /* @__PURE__ */ createProjectionNode({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => window.getComputedStyle(instance).position === "fixed"
});

// node_modules/motion-dom/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();

// node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return v !== null && typeof v === "object" && typeof v.start === "function";
}

// node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "whilePinch",
  "exit"
];
var variantProps = /* @__PURE__ */ ["initial"].concat(variantPriorityOrder);

// node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  if (isAnimationControls(props.animate))
    return true;
  for (let i = 0; i < variantProps.length; i++) {
    if (isVariantLabel(props[variantProps[i]])) {
      return true;
    }
  }
  return false;
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, { owner: element }));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        if (existingValue.liveStyle === true) {
          existingValue.jump(nextValue);
        } else if (!existingValue.hasAnimated) {
          existingValue.set(nextValue);
        }
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };

// node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs
var isBrowser3 = typeof window !== "undefined";
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser3)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// node_modules/motion-dom/dist/es/render/VisualElement.mjs
var propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
var featureDefinitions = {};
function setFeatureDefinitions(definitions) {
  featureDefinitions = definitions;
}
function getFeatureDefinitions() {
  return featureDefinitions;
}
var VisualElement = class {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
    return {};
  }
  constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */ new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.shouldSkipAnimations = false;
    this.values = /* @__PURE__ */ new Map();
    this.KeyframeResolver = KeyframeResolver;
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */ new Map();
    this.prevMotionValues = {};
    this.hasBeenMounted = false;
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      const now2 = time.now();
      if (this.renderScheduledAt < now2) {
        this.renderScheduledAt = now2;
        frame.render(this.render, false, true);
      }
    };
    const { latestValues, renderState } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = { ...latestValues };
    this.initialValues = props.initial ? { ...latestValues } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.skipAnimationsConfig = skipAnimations;
    this.options = options;
    this.blockInitialAnimation = Boolean(blockInitialAnimation);
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */ new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key]);
      }
    }
  }
  mount(instance) {
    const presence = this.presenceContext;
    if (this.hasBeenMounted && presence?.isPresent !== false && !presence?.keepValuesOnRemount) {
      for (const key in this.initialValues) {
        this.values.get(key)?.jump(this.initialValues[key]);
        this.latestValues[key] = this.initialValues[key];
      }
    }
    this.current = instance;
    visualElementStore.set(instance, this);
    this.projection?.instance || this.projection?.mount(instance);
    if (this.isVariantNode && !this.isControllingVariants) {
      let node = this;
      do
        node = node.props.inherit !== false && node.parent;
      while (node && !node.isVariantNode);
      if (node) {
        const { variantChildren } = node;
        variantChildren.add(this);
        this.removeFromVariantTree = () => variantChildren.delete(this);
      }
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (this.reducedMotionConfig === "never") {
      this.shouldReduceMotion = false;
    } else if (this.reducedMotionConfig === "always") {
      this.shouldReduceMotion = true;
    } else {
      if (!hasReducedMotionListener.current) {
        initPrefersReducedMotion();
      }
      this.shouldReduceMotion = prefersReducedMotion.current;
    }
    if (false) {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
    }
    this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
    this.parent?.addChild(this);
    this.update(this.props, this.presenceContext);
    this.hasBeenMounted = true;
  }
  unmount() {
    this.projection?.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    this.valueSubscriptions.clear();
    this.removeFromVariantTree?.();
    this.parent?.removeChild(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature) {
        feature.unmount();
        feature.isMounted = false;
      }
    }
    this.current = null;
  }
  addChild(child) {
    this.children.add(child);
    (this.enteringChildren || (this.enteringChildren = /* @__PURE__ */ new Set())).add(child);
  }
  removeChild(child) {
    this.children.delete(child);
    this.enteringChildren?.delete(child);
  }
  bindToMotionValue(key, value) {
    this.valueSubscriptions.get(key)?.();
    if (value.accelerate && acceleratedValues.has(key) && this.current instanceof HTMLElement) {
      const { factory, keyframes: keyframes2, times, ease: ease2, duration } = value.accelerate;
      const animation = new NativeAnimation({
        element: this.current,
        name: key,
        keyframes: keyframes2,
        times,
        ease: ease2,
        duration: secondsToMilliseconds(duration)
      });
      const cleanup = factory(animation);
      this.valueSubscriptions.set(key, () => {
        cleanup();
        animation.cancel();
      });
      return;
    }
    const valueIsTransform = transformProps.has(key);
    if (valueIsTransform && this.onBindTransform) {
      this.onBindTransform();
    }
    const removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.preRender(this.notifyUpdate);
      if (valueIsTransform) {
        if (this.projection) {
          this.projection.isTransformDirty = true;
        }
        transformGroups.get(this.current)?.check();
      }
      this.scheduleRender();
    });
    let removeSyncCheck;
    if (typeof window !== "undefined" && window.MotionCheckAppearSync) {
      removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
    }
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeSyncCheck?.();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !other.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  updateFeatures() {
    let key = "animation";
    for (key in featureDefinitions) {
      const featureDefinition = featureDefinitions[key];
      if (!featureDefinition)
        continue;
      const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
      if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
        this.features[key] = new FeatureConstructor(this);
      }
      if (this.features[key]) {
        const feature = this.features[key];
        if (feature.isMounted) {
          feature.update();
        } else {
          feature.mount();
          feature.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(props, presenceContext) {
    const { transformTemplate, onUpdate } = this.props;
    if (props.transformTemplate || transformTemplate) {
      this.scheduleRender();
    }
    if (props.transformTemplate && !transformTemplate || props.onUpdate && !onUpdate) {
      transformGroups.get(this.current)?.demote();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      this.propEventSubscriptions[key]?.();
      delete this.propEventSubscriptions[key];
      const listenerName = "on" + key;
      const listener = props[listenerName];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
    this.handleChildMotionValue?.();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    return this.props.variants?.[name];
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    const existingValue = this.values.get(key);
    if (value !== existingValue) {
      if (existingValue)
        this.removeValue(key);
      this.bindToMotionValue(key, value);
      this.values.set(key, value);
      const latest = value.get();
      if (latest !== void 0)
        this.latestValues[key] = latest;
    }
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(key) {
    this.values.delete(key);
    this.valueSubscriptions.get(key)?.();
    this.valueSubscriptions.delete(key);
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    let value = this.props.values?.[key];
    if (value)
      return value;
    value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue ?? this.getDefaultValue?.(key), {
        owner: this
      });
      this.addValue(key, value);
    }
    return value;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key, target) {
    let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
    if (value !== void 0 && value !== null) {
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (
        /**
         * If the value as read isn't animatable (e.g. "none") but
         * the target is, derive an animatable none from the target.
         * A value is animatable if it's a number or contains a
         * number or color, which is cheaper to check than trying
         * every value type in turn.
         */
        typeof value !== "number" && !complex.test(value) && complex.test(target)
      ) {
        value = getAnimatableNone2(key, target);
      }
      this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
    }
    return isMotionValue(value) ? value.get() : value;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  on(eventName, callback) {
    return (this.events[eventName] || (this.events[eventName] = new SubscriptionManager())).add(callback);
  }
  notify(eventName, ...args) {
    this.events[eventName]?.notify(...args);
  }
  scheduleRenderMicrotask() {
    microtask.render(this.render);
  }
};

// node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = DOMKeyframesResolver;
  }
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    const style = props.style;
    return style ? style[key] : void 0;
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key];
    delete style[key];
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const { children } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", (latest) => {
        if (this.current) {
          this.current.textContent = `${latest}`;
        }
      });
    }
  }
};

// node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
  const elementStyle = element.style;
  let key;
  for (key in style) {
    elementStyle[key] = style[key];
  }
  projection?.applyProjectionStyles(elementStyle, styleProp);
  for (key in vars) {
    elementStyle.setProperty(key, vars[key]);
  }
}

// node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout: layout2, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
  const style = props.style;
  const prevStyle = prevProps?.style;
  const newValues = {};
  if (!style)
    return newValues;
  for (const key in style) {
    if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "html";
    this.renderInstance = renderHTML;
  }
  mount(instance) {
    super.mount(instance);
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, props) {
    buildHTMLStyles(renderState, latestValues, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps(props, prevProps, visualElement);
  }
};

// node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// node_modules/motion-dom/dist/es/events/event-info.mjs
function extractEventInfo(event) {
  return {
    point: {
      x: event.pageX,
      y: event.pageY
    }
  };
}
var addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));

// node_modules/motion-dom/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/motion-dom/dist/es/resize/handle-element.mjs
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var observer;
var getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
  if (borderBoxSize && borderBoxSize[0]) {
    return borderBoxSize[0][borderBoxAxis + "Size"];
  } else if (isSVGElement(target) && "getBBox" in target) {
    return target.getBBox()[svgAxis];
  } else {
    return target[htmlAxis];
  }
};
var getWidth = /* @__PURE__ */ getSize("inline", "width", "offsetWidth");
var getHeight = /* @__PURE__ */ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
  resizeHandlers.get(target)?.forEach((handler) => {
    handler(target, {
      get width() {
        return getWidth(target, borderBoxSize);
      },
      get height() {
        return getHeight(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined")
    return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer)
    createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach((element) => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */ new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer?.observe(element);
  });
  return () => {
    elements.forEach((element) => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers?.delete(handler);
      if (!elementHandlers?.size) {
        observer?.unobserve(element);
      }
    });
  };
}

// node_modules/motion-dom/dist/es/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */ new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const info = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    windowCallbacks.forEach((callback) => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler)
    createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
      window.removeEventListener("resize", windowResizeHandler);
      windowResizeHandler = void 0;
    }
  };
}

// node_modules/motion-dom/dist/es/resize/index.mjs
function resize(a, b) {
  return addToScope(typeof a === "function" ? resizeWindow(a) : resizeElement(a, b));
}

// node_modules/motion-dom/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/motion-dom/dist/es/gestures/pan/PanSession.mjs
var overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]);
var PanSession = class {
  constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element, immediate } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.lastRawMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.scrollPositions = /* @__PURE__ */ new Map();
    this.onElementScroll = (event2) => {
      this.handleScroll(event2.target);
    };
    this.onWindowScroll = () => {
      this.handleScroll(window);
    };
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = false;
      if (this.lastRawMoveEventInfo) {
        this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
      }
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point2 } = info2;
      this.history.push({ ...point2, timestamp: time.now() });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart?.(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove?.(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.handleScroll(window);
      this.lastMoveEvent = event2;
      this.lastRawMoveEventInfo = info2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      this.hasPendingMove = true;
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.hasPendingMove && this.updatePoint();
      this.end();
      const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin || !this.startEvent) {
        resumeAnimation?.();
      }
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      this.startEvent && onEnd?.(event2, panInfo);
      onSessionEnd?.(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.distanceThreshold = immediate ? 0 : distanceThreshold;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point } = initialInfo;
    this.history = [{ ...point, timestamp: time.now() }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    const eventOptions = { passive: true, capture: true };
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove, eventOptions), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp, eventOptions), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp, eventOptions));
    if (element) {
      this.startScrollTracking(element);
    }
    if (immediate) {
      this.handlePointerMove(event, info);
      this.updatePoint();
    }
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(element) {
    let current = element.parentElement;
    while (current) {
      const style = getComputedStyle(current);
      if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) {
        this.scrollPositions.set(current, getScroll(current));
      }
      current = current.parentElement;
    }
    this.scrollPositions.set(window, getScroll(window));
    this.removeScrollListeners = pipe(
      // Capture listener catches element scroll events as they bubble
      addDomEvent(window, "scroll", this.onElementScroll, {
        capture: true
      }),
      // Direct window scroll listener (window scroll doesn't bubble)
      addDomEvent(window, "scroll", this.onWindowScroll, {})
    );
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(target) {
    const initial = this.scrollPositions.get(target);
    if (!initial)
      return;
    const isWindow = target === window;
    const current = getScroll(target);
    const delta = { x: current.x - initial.x, y: current.y - initial.y };
    if (delta.x === 0 && delta.y === 0)
      return;
    if (isWindow) {
      if (this.lastMoveEventInfo) {
        this.lastMoveEventInfo.point.x += delta.x;
        this.lastMoveEventInfo.point.y += delta.y;
      }
    } else {
      if (this.history.length > 0) {
        this.history[0].x -= delta.x;
        this.history[0].y -= delta.y;
      }
    }
    this.scrollPositions.set(target, current);
    frame.update(this.updatePoint, true);
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners?.();
    this.removeScrollListeners?.();
    this.scrollPositions.clear();
    cancelFrame(this.updatePoint);
  }
};
var getScroll = (target) => target === window ? { x: window.scrollX, y: window.scrollY } : {
  x: target.scrollLeft,
  y: target.scrollTop
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta) * 2) {
    timestampedPoint = history[1];
  }
  const seconds = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (seconds === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / seconds,
    y: (lastPoint.y - timestampedPoint.y) / seconds
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
var keyboardAccessibleElements = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function isElementKeyboardAccessible(element) {
  return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
}
var textInputElements = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function isElementTextInput(element) {
  return textInputElements.has(element.tagName) || element.isContentEditable === true;
}

// node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var isDragging = {
  x: false,
  y: false
};
function isDragActive() {
  return isDragging.x || isDragging.y;
}

// node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function setDragLock(axis) {
  if (axis === "x" || axis === "y") {
    if (isDragging[axis]) {
      return null;
    } else {
      isDragging[axis] = true;
      return () => {
        isDragging[axis] = false;
      };
    }
  } else {
    if (isDragging.x || isDragging.y) {
      return null;
    } else {
      isDragging.x = isDragging.y = true;
      return () => {
        isDragging.x = isDragging.y = false;
      };
    }
  }
}

// node_modules/motion-dom/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point, { min, max }, elastic) {
  if (min !== void 0 && point < min) {
    point = elastic ? mixNumber(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mixNumber(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label2) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label2] || 0;
}

// node_modules/motion-dom/dist/es/gestures/drag/VisualElementDragControls.mjs
function measureScroll(projection) {
  let key = "";
  for (const node of projection.path) {
    node.scroll = void 0;
    node.updateScroll();
    const { scroll } = node;
    if (node !== projection.root && scroll) {
      key += scroll.offset.x + "," + scroll.offset.y + ",";
    }
  }
  return key;
}
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement, readProps = () => visualElement.getProps()) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.latestPointerEvent = null;
    this.latestPanInfo = null;
    this.visualElement = visualElement;
    this.readProps = readProps;
  }
  start(originEvent, options = {}) {
    if (this.visualElement.presenceContext?.isPresent === false)
      return;
    const onSessionStart = (event) => {
      if (options.snapToCursor)
        this.snapToCursor(event);
      this.stopAnimation();
    };
    const onStart = (event, info) => {
      const { drag: drag2, dragConstraints, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        this.openDragLock?.();
        this.openDragLock = setDragLock(drag2);
        if (!this.openDragLock)
          return;
      }
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      const { projection } = this.visualElement;
      if (projection) {
        projection.isAnimationBlocked = true;
        projection.target = void 0;
      }
      eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (isCSSVariableToken(current)) {
          current = getVariableValue(current, this.visualElement.current) || 0;
        }
        if (px.test(current)) {
          current = parseFloat(current);
        } else if (percent.test(current)) {
          const measuredAxis = projection?.layout?.layoutBox[axis];
          if (measuredAxis) {
            current = calcLength(measuredAxis) * (parseFloat(current) / 100);
          }
        }
        this.originPoint[axis] = current;
      });
      this.point = typeof dragConstraints === "function" && dragConstraints(this);
      if (onDragStart) {
        frame.update(() => onDragStart(event, info), false, true);
      }
      addValueToWillChange(this.visualElement, "transform");
      this.visualElement.animationState?.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openDragLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection === null)
          return;
        onDirectionLock && onDirectionLock(this.currentDirection);
      }
      this.updateAxis("x", offset);
      this.updateAxis("y", offset);
      this.point && this.point.move();
      this.visualElement.render();
      if (onDrag) {
        frame.update(() => onDrag(event, info), false, true);
      }
    };
    const onSessionEnd = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.stop(event, info);
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
    };
    const resumeAnimation = () => {
      const { dragSnapToOrigin: snap } = this.getProps();
      if (snap || this.constraints || this.point) {
        this.startAnimation({ x: 0, y: 0 });
      }
    };
    const { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      ...options,
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      contextWindow: this.visualElement.current?.ownerDocument.defaultView,
      element: this.visualElement.current
    });
  }
  /**
   * @param dragAxes - The axes to animate on release, if not the `drag`
   * prop's, e.g. when drag was disabled mid-gesture.
   */
  stop(event, panInfo, dragAxes) {
    const finalEvent = event || this.latestPointerEvent;
    const finalPanInfo = panInfo || this.latestPanInfo;
    const isDragging2 = this.isDragging;
    this.cancel();
    if (!isDragging2 || !finalPanInfo || !finalEvent)
      return;
    const { velocity } = finalPanInfo;
    this.startAnimation(velocity, dragAxes);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
    }
  }
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.endPanSession();
    if (!this.getProps().dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    animationState?.setActive("whileDrag", false);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   */
  endPanSession() {
    this.panSession?.end();
    this.panSession = void 0;
  }
  updateAxis(axis, offset) {
    const { drag: drag2 } = this.readProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    const constraints = this.constraints && this.constraints[axis];
    if (constraints) {
      next = applyConstraints(next, constraints, this.elastic[axis]);
    }
    this.point ? this.point[axis] = next : axisValue.set(next);
  }
  resolveConstraints() {
    const { dragConstraints, dragElastic } = this.getProps();
    const { projection } = this.visualElement;
    const layout2 = projection && (projection.layout || projection.measure(false));
    const prevConstraints = this.constraints;
    if (isElementConstraints(dragConstraints)) {
      if (!this.constraints || this.scroll !== measureScroll(projection)) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2 && typeof dragConstraints === "object") {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && !isElementConstraints(dragConstraints) && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!isElementConstraints(constraints))
      return false;
    const constraintsElement = resolveConstraintsElement(constraints);
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    this.scroll = measureScroll(projection);
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, projection.removeElementScroll(constraintsBox));
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity, dragAxes) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const options = {
      bounceStiffness: dragElastic ? 200 : 1e6,
      bounceDamping: dragElastic ? 40 : 1e7,
      timeConstant: 750,
      restDelta: 1,
      restSpeed: 10,
      ...dragTransition
    };
    const axisVelocity = (axis) => dragMomentum && !(this.point && dragSnapToOrigin) && shouldDrag(axis, dragAxes || drag2, this.currentDirection) ? velocity[axis] : 0;
    if (this.point && !dragSnapToOrigin) {
      return this.point.release({ x: axisVelocity("x"), y: axisVelocity("y") }, options).then(onDragTransitionEnd);
    }
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, dragAxes || drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints[axis] || {};
      if (dragSnapToOrigin === true || dragSnapToOrigin === axis)
        transition = { min: 0, max: 0 };
      const inertia2 = {
        type: "inertia",
        velocity: axisVelocity(axis),
        ...options,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.readProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, this.visualElement.latestValues[axis] ?? 0);
  }
  /**
   * Measure the live box - projection.layout may or may not include the
   * drag transform, depending on when it was measured.
   */
  snapToCursor({ clientX, clientY }) {
    const { drag: drag2 } = this.getProps();
    const point = { x: clientX, y: clientY };
    const cursor = this.visualElement.getTransformPagePoint()?.(point) || point;
    const box = this.visualElement.measureViewportBox();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = box[axis];
      axisValue.set((axisValue.get() || 0) + cursor[axis] - mixNumber(min, max, 0.5));
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isElementConstraints(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const constraints = this.constraints;
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const latest = this.getAxisMotionValue(axis).get();
      boxProgress[axis] = calcOrigin({ min: latest, max: latest }, constraints[axis]);
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root?.updateScroll();
    projection.updateLayout();
    this.constraints = false;
    this.resolveConstraints();
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (!shouldDrag(axis, drag2, null) || !axisValue.get())
        return;
      const { min, max } = this.constraints[axis];
      axisValue.set(mixNumber(min, max, boxProgress[axis]));
    });
    this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      const target = event.target;
      const isClickingTextInputChild = target !== element && isElementTextInput(target);
      if (drag2 && dragListener && !isClickingTextInputChild) {
        this.start(event);
      }
    });
    let stopResizeObservers;
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      const constraintsElement = isElementConstraints(dragConstraints) && resolveConstraintsElement(dragConstraints);
      if (constraintsElement) {
        this.constraints = this.resolveRefConstraints();
        if (!stopResizeObservers) {
          stopResizeObservers = startResizeObservers(element, constraintsElement, () => this.scalePositionWithinConstraints());
        }
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (!projection.layout) {
      projection.root?.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          if (!shouldDrag(axis, this.getProps().drag, this.currentDirection))
            return;
          const motionValue2 = this.getAxisMotionValue(axis);
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    }));
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener();
      stopResizeObservers?.();
    };
  }
  getProps() {
    const props = this.readProps();
    const { dragElastic = defaultElastic, dragMomentum = true } = props;
    return { ...props, dragElastic, dragMomentum };
  }
};
function isElementConstraints(constraints) {
  return !!constraints && typeof constraints === "object" && ("current" in constraints || "nodeType" in constraints);
}
var resolveConstraintsElement = (constraints) => "current" in constraints ? constraints.current : constraints;
function skipFirstCall(callback) {
  let isFirst = true;
  return () => {
    if (isFirst) {
      isFirst = false;
      return;
    }
    callback();
  };
}
function startResizeObservers(element, constraintsElement, onResize) {
  const stopElement = resize(element, skipFirstCall(onResize));
  const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
  return () => {
    stopElement();
    stopContainer();
  };
}
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function setupGesture(elementOrSelector, options) {
  const elements = resolveElements(elementOrSelector);
  const gestureAbortController = new AbortController();
  const eventOptions = {
    passive: true,
    ...options,
    signal: gestureAbortController.signal
  };
  const cancel = addToScope(() => gestureAbortController.abort());
  return [elements, eventOptions, cancel];
}

// node_modules/motion-dom/dist/es/gestures/hover.mjs
function isValidHover(event) {
  return !(event.pointerType === "touch" || isDragActive());
}
function hover(elementOrSelector, onHoverStart, options = {}) {
  onHoverStart = bindToScope(onHoverStart);
  const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
  elements.forEach((element) => {
    let isPressed = false;
    let deferredHoverEnd = false;
    let hoverEndCallback;
    const removePointerLeave = () => {
      element.removeEventListener("pointerleave", onPointerLeave);
    };
    const endHover = (event) => {
      if (hoverEndCallback) {
        hoverEndCallback(event);
        hoverEndCallback = void 0;
      }
      removePointerLeave();
    };
    const onPointerUp = (event) => {
      isPressed = false;
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      if (deferredHoverEnd) {
        deferredHoverEnd = false;
        endHover(event);
      }
    };
    const onPointerDown = () => {
      isPressed = true;
      window.addEventListener("pointerup", onPointerUp, eventOptions);
      window.addEventListener("pointercancel", onPointerUp, eventOptions);
    };
    const onPointerLeave = (leaveEvent) => {
      if (leaveEvent.pointerType === "touch")
        return;
      if (isPressed) {
        deferredHoverEnd = true;
        return;
      }
      endHover(leaveEvent);
    };
    const onPointerEnter = (enterEvent) => {
      if (!isValidHover(enterEvent))
        return;
      deferredHoverEnd = false;
      const onHoverEnd = onHoverStart(element, enterEvent);
      if (typeof onHoverEnd !== "function")
        return;
      hoverEndCallback = onHoverEnd;
      element.addEventListener("pointerleave", onPointerLeave, eventOptions);
    };
    element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    element.addEventListener("pointerdown", onPointerDown, eventOptions);
  });
  return cancel;
}

// node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var isPressing = /* @__PURE__ */ new WeakSet();

// node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function filterEvents(callback) {
  return (event) => {
    if (event.key !== "Enter")
      return;
    callback(event);
  };
}
function firePointerEvent(target, type) {
  target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
}
var enableKeyboardPress = (element, eventOptions) => {
  let isKeyPressing = false;
  const handleKeydown = filterEvents(() => {
    if (isKeyPressing || isPressing.has(element))
      return;
    isKeyPressing = true;
    firePointerEvent(element, "down");
  });
  const handleKeyup = filterEvents(() => {
    if (!isKeyPressing)
      return;
    isKeyPressing = false;
    firePointerEvent(element, "up");
  });
  element.addEventListener("keydown", handleKeydown, eventOptions);
  element.addEventListener("keyup", handleKeyup, eventOptions);
  element.addEventListener("blur", () => {
    element.removeEventListener("keydown", handleKeydown);
    element.removeEventListener("keyup", handleKeyup);
    if (isKeyPressing)
      firePointerEvent(element, "cancel");
  }, { ...eventOptions, once: true });
};

// node_modules/motion-dom/dist/es/gestures/press/index.mjs
function isValidPressEvent(event) {
  return isPrimaryPointer(event) && !isDragActive();
}
var claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
var sequenceSlop = 100;
var holdSlop = 8;
var exceeds = (a, b, max) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY) > max;
var preventDefault = (event) => event.preventDefault();
function press(targetOrSelector, onPressStart, options = {}) {
  onPressStart = bindToScope(onPressStart);
  const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
  const sequences = /* @__PURE__ */ new WeakMap();
  const startPress = (startEvent) => {
    const target = startEvent.currentTarget;
    if (!isValidPressEvent(startEvent))
      return;
    if (claimedPointerDownEvents.has(startEvent))
      return;
    if (options.stopPropagation) {
      claimedPointerDownEvents.add(startEvent);
    }
    const { count: presses = 1, countTimeout = 0.3, hold = 0, repeat } = options;
    const downTime = time.now();
    const holdTime = secondsToMilliseconds(hold);
    const timeout = secondsToMilliseconds(countTimeout);
    let previous = sequences.get(target);
    if (previous?.expire(exceeds(previous.event, startEvent, sequenceSlop))) {
      previous = void 0;
    } else if (previous) {
      cancelFrame(previous.expire);
      sequences.delete(target);
    }
    const count = previous ? previous.count + 1 : 1;
    const isFinal = count >= presses;
    const isHeld = isFinal && (hold || repeat);
    let isActive = !hold;
    let repeats = 0;
    let handlers;
    isPressing.add(target);
    if (previous) {
      handlers = previous.handlers;
    } else {
      const result = onPressStart(target, startEvent);
      handlers = typeof result === "function" ? { onComplete: result } : result || {};
    }
    isFinal && isActive && handlers.onActive?.();
    const repeatTime = secondsToMilliseconds(repeat);
    let length = holdTime || repeatTime;
    let cycleEnd = downTime + length;
    let isCycleStart = true;
    const tick = () => {
      if (eventOptions.signal.aborted)
        return cancelFrame(tick);
      let progress2 = Math.min(1 - (cycleEnd - time.now()) / length, 1);
      if (isCycleStart && progress2 < 1)
        progress2 = 0;
      isCycleStart = false;
      handlers.onHold?.(progress2);
      if (progress2 < 1)
        return;
      if (isActive) {
        handlers.onRepeat?.(++repeats);
      } else {
        isActive = true;
        handlers.onActive?.();
      }
      if (repeat) {
        isCycleStart = true;
        cycleEnd += length = repeatTime;
      } else {
        cancelFrame(tick);
      }
    };
    const endEventOptions = { ...eventOptions, capture: true };
    const onPointerEnd = (endEvent, success) => {
      if (!isPrimaryPointer(endEvent))
        return;
      window.removeEventListener("pointerup", onPointerUp, endEventOptions);
      window.removeEventListener("pointercancel", onPointerCancel, endEventOptions);
      window.removeEventListener("pointermove", onPointerMove, endEventOptions);
      target.removeEventListener("contextmenu", preventDefault);
      cancelFrame(tick);
      isPressing.delete(target);
      if (isDragActive())
        success = false;
      if (success && !isFinal) {
        const end = time.now();
        const expire = (force) => {
          const isAborted = eventOptions.signal.aborted;
          if (isAborted || force === true || time.now() - end > timeout) {
            cancelFrame(expire);
            sequences.delete(target);
            isAborted || handlers.onComplete?.(endEvent, { success: false });
            return true;
          }
        };
        sequences.set(target, {
          count,
          event: startEvent,
          handlers,
          expire
        });
        frame.update(expire, true);
      } else {
        handlers.onComplete?.(endEvent, {
          success: success && isActive
        });
      }
    };
    const onPointerUp = (upEvent) => {
      onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || isNodeOrChild(target, upEvent.target));
    };
    const onPointerCancel = (cancelEvent) => {
      onPointerEnd(cancelEvent, false);
    };
    const onPointerMove = (moveEvent) => {
      if (isPrimaryPointer(moveEvent) && ((repeat || !isActive) && exceeds(startEvent, moveEvent, holdSlop) || presses > 1 && isDragActive())) {
        onPointerCancel(moveEvent);
      }
    };
    window.addEventListener("pointerup", onPointerUp, endEventOptions);
    window.addEventListener("pointercancel", onPointerCancel, endEventOptions);
    if (isHeld || presses > 1) {
      window.addEventListener("pointermove", onPointerMove, endEventOptions);
    }
    if (isHeld) {
      frame.update(tick, true);
      target.addEventListener("contextmenu", preventDefault, {
        ...eventOptions,
        passive: false
      });
    }
  };
  targets.forEach((target) => {
    const pointerDownTarget = options.useGlobalTarget ? window : target;
    pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
    if (isHTMLElement(target)) {
      target.addEventListener("focus", () => enableKeyboardPress(target, eventOptions), eventOptions);
      if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) {
        target.tabIndex = 0;
      }
    }
  });
  return cancelEvents;
}

// node_modules/motion-dom/dist/es/utils/transform.mjs
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, options);
  return useImmediate ? interpolator(inputValue) : interpolator;
}

// node_modules/motion-dom/dist/es/render/Feature.mjs
var Feature = class {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {
  }
};

// node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);

// node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

// node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
  for (const key in props) {
    if (key !== "children" && (isMotionValue(props[key]) || isMotionValue(prevProps[key]))) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
    this.measureInstanceViewportBox = createBox;
  }
  getBaseTargetFromProps(props, key) {
    return transformProps.has(key) ? super.getBaseTargetFromProps(props, key) ?? defaultTransformValue(key) : props[key];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(key) {
    return transformProps.has(key) ? this.latestValues[key] ?? defaultTransformValue(key) : void 0;
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    if (cssStyleProperties.includes(key)) {
      const computedStyle = getComputedStyle(instance);
      const value = computedStyle[key];
      if (typeof value === "string" && value)
        return value.trim();
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
  }
  build(renderState, latestValues, props) {
    buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};

// node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var getOutTransition = (transition) => transition?.out === true ? transition : transition?.out;
function createAnimationState(visualElement) {
  let animate2 = (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
  let state = createState();
  let isInitialRender = true;
  let wasReset = false;
  function animateChanges(changedActiveType) {
    const { props, parent, manuallyAnimateOnMount } = visualElement;
    const { initial } = props;
    const isMounting = isInitialRender || wasReset;
    const animations2 = [];
    const resolveInitial = (definition = initial) => typeof definition !== "boolean" && resolveVariant(visualElement, Array.isArray(definition) ? definition[0] : definition, visualElement.presenceContext?.custom) || void 0;
    const removedKeys = /* @__PURE__ */ new Map();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    let source = visualElement;
    do
      source = source.props.inherit !== false && source.parent;
    while (source && !source.isControllingVariants);
    const initialOut = isMounting && getOutTransition(resolveInitial(initial ?? (source && source.props.initial))?.transition);
    reversePriorityOrder.forEach((type, i) => {
      const typeState = state[type];
      const ownProp = props[type];
      const inheritedProp = source && source.props[type];
      const prop = ownProp !== void 0 ? ownProp : isVariantLabel(inheritedProp) || inheritedProp === false ? inheritedProp : void 0;
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      const isInherited = propIsVariant && ownProp === void 0 && !(isMounting && manuallyAnimateOnMount);
      typeState.protectedKeys = { ...encounteredKeys };
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        return;
      }
      if (activeDelta === false)
        removedVariantIndex = i;
      if (type === "exit" && typeState.isActive && activeDelta !== true) {
        encounteredKeys = {
          ...encounteredKeys,
          ...typeState.prevResolvedValues
        };
        return;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || propIsVariant && (activeDelta && !isInherited || i > removedVariantIndex);
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = {};
      let out;
      if (activeDelta !== false) {
        for (const definition of definitionList) {
          const { transition, transitionEnd, ...target } = resolveVariant(visualElement, definition, getTypeCustom(visualElement, type)) || {};
          resolvedValues = {
            ...resolvedValues,
            ...target,
            ...transitionEnd
          };
          out = getOutTransition(transition) || out;
        }
      }
      const { prevResolvedValues } = typeState;
      for (const key in { ...prevResolvedValues, ...resolvedValues }) {
        if (key in encounteredKeys)
          continue;
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        const valueHasChanged = Array.isArray(next) && Array.isArray(prev) ? !shallowCompare(next, prev) || variantDidChange : next !== prev;
        let outTransition;
        if (valueHasChanged && (next === void 0 || next === null)) {
          removedKeys.has(key) || removedKeys.set(key, typeState.prevOut);
        } else if (valueHasChanged || next !== void 0 && removedKeys.has(key)) {
          shouldAnimateType = true;
          outTransition = removedKeys.get(key) || initialOut;
          if (removedKeys.delete(key))
            handledRemovedValues = true;
          typeState.needsAnimating[key] = true;
          const motionValue2 = visualElement.getValue(key);
          if (motionValue2)
            motionValue2.liveStyle = false;
        } else {
          typeState.protectedKeys[key] = true;
        }
        typeState.out[key] = outTransition;
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      typeState.prevOut = out;
      if (typeState.isActive) {
        encounteredKeys = { ...encounteredKeys, ...resolvedValues };
      }
      if (shouldAnimateType && (!(isInherited && variantDidChange) || handledRemovedValues)) {
        for (const animation of definitionList) {
          const options = { type };
          if (typeof animation === "string" && isMounting && manuallyAnimateOnMount && parent?.enteringChildren) {
            const delayChildren = resolveVariant(parent, animation)?.transition?.delayChildren;
            options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
          }
          animations2.push({ animation, options });
        }
      }
    });
    if (removedKeys.size) {
      const fallbackAnimation = {};
      const resolvedInitial = resolveInitial();
      let fallbackTransition = resolvedInitial?.transition;
      removedKeys.forEach((outTransition, key) => {
        if (outTransition) {
          fallbackTransition = {
            ...fallbackTransition || visualElement.getDefaultTransition(),
            [key]: outTransition
          };
        }
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = true;
        const fromInitial = resolvedInitial && !Array.isArray(initial) ? resolvedInitial[key] : void 0;
        const fromProps = visualElement.getBaseTargetFromProps(props, key);
        fallbackAnimation[key] = (fromInitial !== void 0 ? fromInitial : fromProps !== void 0 && !isMotionValue(fromProps) ? fromProps : visualElement.initialValues[key] === void 0 ? visualElement.baseTarget[key] : void 0) ?? null;
        if (false) {
          delete visualElement.initialValues[key];
          motionValue2?.stop();
          visualElement.baseTarget[key] = motionValue2?.get();
        }
      });
      if (fallbackTransition) {
        fallbackAnimation.transition = fallbackTransition;
      }
      animations2.push({ animation: fallbackAnimation });
    }
    const blockAnimation = isMounting && visualElement.blockInitialAnimation || isInitialRender && !manuallyAnimateOnMount && (props.initial === false || props.initial === props.animate);
    isInitialRender = wasReset = false;
    return !blockAnimation && animations2.length ? animate2(animations2) : Promise.resolve();
  }
  function setActive(type, isActive) {
    if (state[type].isActive === isActive)
      return Promise.resolve();
    visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
    state[type].isActive = isActive;
    const animations2 = animateChanges(type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    /**
     * Allows tests to inject a mocked animate function.
     * @internal
     */
    setAnimateFunction: (makeAnimator) => {
      animate2 = makeAnimator(visualElement);
    },
    getState: () => state,
    reset: () => {
      state = createState();
      wasReset = true;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createState() {
  const state = {};
  for (const type of variantPriorityOrder) {
    state[type] = {
      isActive: type === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
      out: {}
    };
  }
  return state;
}

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = /* @__PURE__ */ createContext({
  transformPagePoint: (p) => p,
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return useCallback(composeRefs(...refs), refs);
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var measureScale = (element) => {
  const { width, height } = element?.getBoundingClientRect() || {};
  return [
    width / element?.offsetWidth || 1,
    height / element?.offsetHeight || 1
  ];
};
var measurePoint = (element) => {
  let { left, top } = element.getBoundingClientRect();
  let node = element;
  while (node = node.parentElement || node.parentNode?.host) {
    const { scrollLeft, scrollTop } = node;
    if (scrollLeft || scrollTop) {
      const [x2, y2] = measureScale(node);
      left += scrollLeft * x2;
      top += scrollTop * y2;
    }
    if (getComputedStyle(node).position === "fixed")
      break;
  }
  const [x, y] = measureScale(element.offsetParent);
  return [left / x, top / y];
};
var PopChildMeasure = class extends Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.getElement();
    if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
      const computedStyle = getComputedStyle(element);
      const size = this.props.sizeRef.current;
      size.height = parseFloat(computedStyle.height);
      size.width = parseFloat(computedStyle.width);
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
      size.bottom = parentHeight - size.height - size.top;
      size.direction = computedStyle.direction;
      size.point = measurePoint(element);
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function PopChild({ children, isPresent, anchorX, anchorY, root, pop, popNode }) {
  const id3 = useId();
  const ref = useRef(null);
  const size = useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  });
  const { nonce } = useContext(MotionConfigContext);
  const childRef = pop !== false ? children.props?.ref ?? children?.ref : void 0;
  const composedRef = useComposedRefs(ref, childRef);
  const getElement = () => ref.current || popNode?.current?.current;
  const insertPopRule = (sheet) => {
    const { width, height, top, left, right, bottom, direction } = size.current;
    const isRTL = direction === "rtl";
    const x = anchorX === "left" ? isRTL ? `right:${right}` : `left:${left}` : isRTL ? `left:${left}` : `right:${right}`;
    const y = anchorY === "bottom" ? `bottom:${bottom}` : `top:${top}`;
    sheet?.insertRule(`[data-motion-pop-id="${id3}"]{position:absolute!important;width:${width}px!important;height:${height}px!important;${x}px!important;${y}px!important}`);
  };
  useInsertionEffect(() => {
    const { width, height } = size.current;
    const element = getElement();
    if (isPresent || pop === false || !element || !width || !height)
      return;
    element.dataset.motionPopId = id3;
    const doc = element.ownerDocument;
    const style = doc.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? doc.head;
    parent.appendChild(style);
    insertPopRule(style.sheet);
    let dx = 0;
    let dy = 0;
    microtask.setup(() => {
      const [x, y] = measurePoint(element);
      dx = size.current.point[0] - x;
      dy = size.current.point[1] - y;
    });
    microtask.read(() => {
      const { sheet } = style;
      if (!sheet || !dx && !dy)
        return;
      const s = size.current;
      s.left += dx;
      s.right -= dx;
      s.top += dy;
      s.bottom -= dy;
      sheet.deleteRule(0);
      insertPopRule(sheet);
    });
    return () => {
      element.removeAttribute("data-motion-pop-id");
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsx(PopChildMeasure, { isPresent, getElement, sizeRef: size, pop, children: pop === false ? children : cloneElement(children, { ref: composedRef }) });
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id3 = useId();
  const popNode = useRef();
  const isPresentRef = useRef(isPresent);
  const onExitCompleteRef = useRef(onExitComplete);
  useIsomorphicLayoutEffect(() => {
    isPresentRef.current = isPresent;
    onExitCompleteRef.current = onExitComplete;
  });
  let isReusedContext = true;
  let context = useMemo(() => {
    isReusedContext = false;
    return {
      id: id3,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId, node) => {
        presenceChildren.set(childId, false);
        if (node && node.parent?.presenceContext?.id !== id3) {
          popNode.current = node;
        }
        return () => {
          presenceChildren.delete(childId);
          !isPresentRef.current && !presenceChildren.size && onExitCompleteRef.current?.();
        };
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  children = jsx(PopChild, { pop: mode === "popLayout", isPresent, anchorX, anchorY, root, popNode, children });
  return jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function usePresence(subscribe = true) {
  const context = useContext(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent, onExitComplete, register } = context;
  const id3 = useId();
  useEffect(() => {
    if (subscribe) {
      return register(id3);
    }
  }, [subscribe]);
  const safeToRemove = useCallback(() => subscribe && onExitComplete && onExitComplete(id3), [id3, onExitComplete, subscribe]);
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  Children.forEach(children, (child) => {
    if (isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = useRef(true);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = useRef(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    if (propagate && !isParentPresent && !renderedChildren.length) {
      safeToRemove?.();
    }
  }, [isParentPresent, propagate, renderedChildren.length, safeToRemove]);
  const pendingExitComplete = useRef();
  useEffect(() => () => {
    const callback = pendingExitComplete.current;
    pendingExitComplete.current = void 0;
    callback?.();
  }, [renderedChildren]);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    let insertionIndex = 0;
    for (const child of renderedChildren) {
      const presentIndex = presentKeys.indexOf(getChildKey(child));
      if (presentIndex === -1) {
        nextChildren.splice(insertionIndex++, 0, child);
        exitingChildren.push(child);
      } else {
        insertionIndex = presentIndex + exitingChildren.length + 1;
      }
    }
    if (exitingChildren.every((child) => exitComplete.get(getChildKey(child)))) {
      nextChildren = presentChildren;
    } else if (mode === "wait") {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  if (false) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  const { forceRender } = useContext(LayoutGroupContext);
  return jsx(Fragment2, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      if (exitComplete.has(key)) {
        exitingComponents.current.add(key);
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender?.();
        setDiffedChildren([]);
        propagate && safeToRemove?.();
        pendingExitComplete.current = onExitComplete;
      }
    };
    return jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var LazyContext = /* @__PURE__ */ createContext({
  strict: false
});

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: ["variants", ...variantPriorityOrder],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var isInitialized = false;
function initFeatureDefinitions() {
  if (isInitialized)
    return;
  const initialFeatureDefinitions = {};
  for (const key in featureProps) {
    initialFeatureDefinitions[key] = {
      isEnabled: (props) => featureProps[key].some((name) => !!props[name])
    };
  }
  setFeatureDefinitions(initialFeatureDefinitions);
  isInitialized = true;
}
function getInitializedFeatureDefinitions() {
  initFeatureDefinitions();
  return getFeatureDefinitions();
}

// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  const featureDefinitions2 = getInitializedFeatureDefinitions();
  for (const key in features) {
    featureDefinitions2[key] = {
      ...featureDefinitions2[key],
      ...features[key]
    };
  }
  setFeatureDefinitions(featureDefinitions2);
}

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var MotionContext = /* @__PURE__ */ createContext({});

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate: animate2 } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate2) ? animate2 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  const { initial, animate: animate2 } = getCurrentTreeVariants(props, useContext(MotionContext));
  return useMemo(() => ({ initial, animate: animate2 }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
  return useMemo(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState));
  return style;
}
function useHTMLProps(props, visualState) {
  const htmlProps = {};
  const style = useStyle(props, visualState);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component2) {
  const visualProps = useMemo(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, isSVGTag(Component2), props.transformTemplate, props.style);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    const style = {};
    copyRawValuesOnly(style, props.style, props);
    return { ...visualProps, style: { ...style, ...visualProps.style } };
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "tap",
  "propagate",
  "ignoreStrict",
  "viewport",
  "pinch"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
function shouldForward(key, isValidProp) {
  return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp?.(key) ?? !isValidMotionProp(key);
}
function filterProps(props, isDom, forwardMotionProps, isValidProp) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (isMotionValue(props[key]))
      continue;
    if (shouldForward(key, isValidProp) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component2) {
  if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component2 !== "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    Component2.includes("-")
  ) {
    return false;
  } else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component2) > -1 || /**
     * If it contains a capital letter, it's an SVG component
     */
    /[A-Z]/u.test(Component2)
  ) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function useRender(Component2, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG, isValidProp) {
  const useVisualProps = isSVG ?? isSVGComponent(Component2) ? useSVGProps : useHTMLProps;
  const visualProps = useVisualProps(props, latestValues, isStatic, Component2);
  const filteredProps = filterProps(props, typeof Component2 === "string", forwardMotionProps, isValidProp);
  const elementProps = Component2 !== Fragment ? { ...filteredProps, ...visualProps, ref } : {};
  const { children } = props;
  const renderedChildren = useMemo(() => isMotionValue(children) ? children.get() : children, [children]);
  return createElement(Component2, {
    ...elementProps,
    children: renderedChildren
  });
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  return state;
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate: animate2 } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate2 === void 0)
      animate2 = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate2 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    for (let i = 0; i < list.length; i++) {
      const resolved = resolveVariantFromProps(props, list[i]);
      if (resolved) {
        const { transitionEnd, transition, ...target } = resolved;
        for (const key in target) {
          let valueTarget = target[key];
          if (Array.isArray(valueTarget)) {
            const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index];
          }
          if (valueTarget !== null) {
            values[key] = valueTarget;
          }
        }
        for (const key in transitionEnd) {
          values[key] = transitionEnd[key];
        }
      }
    }
  }
  return values;
}
var makeUseVisualState = (config) => (props, isStatic) => {
  const context = useContext(MotionContext);
  const presenceContext = useContext(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};

// node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
var useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps,
  createRenderState: createHtmlRenderState
});

// node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
var useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
  createRenderState: createSvgRenderState
});

// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = /* @__PURE__ */ Symbol.for("motionComponentSymbol");

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function useMotionRef(visualState, visualElement, externalRef) {
  const externalRefContainer = useRef(externalRef);
  useInsertionEffect(() => {
    externalRefContainer.current = externalRef;
  });
  const refCleanup = useRef(null);
  return useCallback((instance) => {
    if (instance) {
      visualState.onMount?.(instance);
    }
    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }
    const ref = externalRefContainer.current;
    if (typeof ref === "function") {
      if (instance) {
        const cleanup = ref(instance);
        if (typeof cleanup === "function") {
          refCleanup.current = cleanup;
        }
      } else if (refCleanup.current) {
        refCleanup.current();
        refCleanup.current = null;
      } else {
        ref(instance);
      }
    } else if (ref) {
      ref.current = instance;
    }
  }, [visualElement]);
}

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var SwitchLayoutGroupContext = /* @__PURE__ */ createContext({});

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component2, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
  const { visualElement: parent } = useContext(MotionContext);
  const lazyContext = useContext(LazyContext);
  const presenceContext = useContext(PresenceContext);
  const motionConfig = useContext(MotionConfigContext);
  const reducedMotionConfig = motionConfig.reducedMotion;
  const skipAnimations = motionConfig.skipAnimations;
  const visualElementRef = useRef(null);
  const hasMountedOnce = useRef(false);
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component2, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig,
      skipAnimations,
      isSVG
    });
    if (hasMountedOnce.current && visualElementRef.current) {
      visualElementRef.current.manuallyAnimateOnMount = true;
    }
  }
  const visualElement = visualElementRef.current;
  const initialLayoutGroupConfig = useContext(SwitchLayoutGroupContext);
  if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
    ProjectionNodeConstructor.create(visualElement, props, initialLayoutGroupConfig);
  }
  useInsertionEffect(() => {
    if (visualElement && visualElement.props !== props) {
      visualElement.update(props, presenceContext);
    }
  });
  const optimisedAppearId = props[optimizedAppearDataAttribute];
  const wantsHandoff = useRef(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
  useIsomorphicLayoutEffect(() => {
    if (!hasMountedOnce.current || !visualElement)
      return;
    visualElement.animationState?.animateChanges();
    visualElement.enteringChildren = void 0;
  }, []);
  useIsomorphicLayoutEffect(() => {
    hasMountedOnce.current = true;
    if (!visualElement)
      return;
    window.MotionIsMounted = true;
    visualElement.updateFeatures();
    visualElement.scheduleRenderMicrotask();
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  useEffect(() => {
    if (!visualElement)
      return;
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      queueMicrotask(() => {
        window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
      });
      wantsHandoff.current = false;
    }
    visualElement.enteringChildren = void 0;
  });
  return visualElement;
}

// node_modules/framer-motion/dist/es/motion/index.mjs
function createMotionComponent(Component2, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  const isSVG = type ? type === "svg" : isSVGComponent(Component2);
  const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
  function MotionDOMComponent(props, externalRef) {
    let MeasureLayout2;
    const layoutId = useLayoutId(props);
    if (useConstant(() => !!rootProjectionNode.current?.sharedNodes.get(layoutId)?.lead && props.initial)) {
      props = { ...props, initial: false };
    }
    const configAndProps = {
      ...useContext(MotionConfigContext),
      ...props,
      layoutId
    };
    const { isStatic, isValidProp } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && typeof window !== "undefined") {
      useStrictMode(configAndProps, preloadedFeatures);
      const layoutProjection = getProjectionFunctionality(configAndProps);
      context.visualElement = useVisualElement(Component2, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
      if (layoutProjection.isEnabled || context.visualElement?.projection?.options.layoutId)
        MeasureLayout2 = layoutProjection.MeasureLayout;
    }
    return jsxs(MotionContext.Provider, { value: context, children: [MeasureLayout2 && context.visualElement ? jsx(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component2, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG, isValidProp)] });
  }
  MotionDOMComponent.displayName = `motion.${typeof Component2 === "string" ? Component2 : `create(${Component2.displayName ?? Component2.name ?? ""})`}`;
  const ForwardRefMotionComponent = forwardRef(MotionDOMComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component2;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = useContext(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  const isStrict = useContext(LazyContext).strict;
  if (false) {
    const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead";
    configAndProps.ignoreStrict ? warnOnce(false, strictMessage + '. For Reorder, import it from "motion/react-m"', "lazy-strict-mode") : invariant(false, strictMessage, "lazy-strict-mode");
  }
}
function getProjectionFunctionality(props) {
  const featureDefinitions2 = getInitializedFeatureDefinitions();
  const { drag: drag2, layout: layout2 } = featureDefinitions2;
  if (!drag2 && !layout2)
    return {};
  const combined = { ...drag2, ...layout2 };
  return {
    MeasureLayout: combined.MeasureLayout,
    isEnabled: drag2?.isEnabled(props) || layout2?.isEnabled(props),
    ProjectionNode: combined.ProjectionNode
  };
}

// node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createMotionProxy(preloadedFeatures, createVisualElement) {
  if (typeof Proxy === "undefined") {
    return createMotionComponent;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const factory = (Component2, options) => {
    return createMotionComponent(Component2, options, preloadedFeatures, createVisualElement);
  };
  const deprecatedFactoryFunction = (Component2, options) => {
    if (false) {
      warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
    }
    return factory(Component2, options);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return factory;
      if (!componentCache.has(key)) {
        componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component2, options) => {
  const isSVG = options.isSVG ?? isSVGComponent(Component2);
  return isSVG ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
    allowProjection: Component2 !== Fragment
  });
};

// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const { animate: animate2 } = this.node.getProps();
    if (isAnimationControls(animate2)) {
      this.unmountControls = animate2.subscribe(this.node);
    }
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    if (this.node.getProps().animate !== this.node.prevProps?.animate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    this.node.animationState.reset();
    this.unmountControls?.();
  }
};

// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id2 = 0;
var ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.id = id2++;
  }
  update() {
    const { presenceContext, animationState } = this.node;
    if (!presenceContext || !animationState)
      return;
    const { isPresent, onExitComplete } = presenceContext;
    if (isPresent === !this.exit)
      return;
    if (isPresent) {
      if (this.exit === true) {
        const { initial } = this.node.getProps();
        if (initial && !Array.isArray(initial)) {
          const { transition, transitionEnd, ...target } = resolveVariant(this.node, initial) || {};
          for (const key in target) {
            this.node.getValue(key)?.jump(target[key]);
          }
        }
        this.node.blockInitialAnimation = false;
        animationState.reset();
        animationState.animateChanges();
      } else {
        animationState.setActive("exit", false);
      }
      this.exit = void 0;
      return;
    }
    const exit = this.exit = animationState.setActive("exit", true);
    if (onExitComplete) {
      exit.then(() => {
        if (this.exit !== exit)
          return;
        this.exit = true;
        onExitComplete(this.id);
      });
    }
  }
  mount() {
    const { register } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id, this.node);
    }
    this.update();
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  update() {
    const { dragControls, drag: drag2 } = this.node.getProps();
    const { dragControls: prevDragControls, drag: prevDrag } = this.node.prevProps || {};
    if (dragControls !== prevDragControls) {
      this.removeGroupControls();
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
    }
    if (prevDrag && !drag2)
      this.controls.stop(void 0, void 0, prevDrag);
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
    if (!this.controls.isDragging) {
      this.controls.endPanSession();
    }
  }
};

// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
  if (handler) {
    frame.update(() => handler(event, info), false, true);
  }
};
var PanGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      // Fixes https://github.com/motiondivision/motion/issues/2270
      contextWindow: this.node.current?.ownerDocument.defaultView
    });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: asyncHandler(onPan),
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session?.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session?.end();
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var hasTakenAnySnapshot = false;
var layoutOptions = ({ layout: layout2, layoutDependency, layoutAnchor }) => ({
  layout: layout2,
  layoutDependency,
  layoutAnchor,
  animationType: typeof layout2 === "string" ? layout2 : "both"
});
var switchLayoutId = (projection, layoutId) => {
  const { snapshot } = projection;
  const stack = projection.getStack();
  stack?.remove(projection);
  const lead = stack?.lead;
  if (stack?.prevLead === projection && lead.resumeFrom === projection)
    lead.resumeFrom = lead.currentAnimation = projection.resumingFrom = void 0;
  projection.options.layoutId = layoutId;
  if (!layoutId) {
    projection.needsShow = true;
    return;
  }
  projection.root.registerSharedNode(layoutId, projection);
  return () => {
    const { resumeFrom } = projection;
    if (resumeFrom?.isPresent !== false && projection.getStack().members.includes(resumeFrom)) {
      resumeFrom.hide();
      projection.resumeFrom = void 0;
      projection.snapshot = snapshot;
    }
  };
};
var MeasureLayoutWithContext = class extends Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    if (projection) {
      layoutGroup.group?.add(projection);
      layoutId && switchLayoutGroup?.register?.(projection);
      if (hasTakenAnySnapshot) {
        projection.root.didUpdate();
      }
      if (projection.options.layoutId !== layoutId)
        switchLayoutId(projection, layoutId)?.();
      projection.addEventListener("animationComplete", () => this.safeToRemove());
      projection.setOptions({
        ...projection.options,
        ...layoutOptions(this.props),
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, layoutId, visualElement, drag: drag2, isPresent } = this.props;
    const { projection } = visualElement;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    this.takeOver = prevProps.layoutId !== layoutId ? (projection.willUpdate(), switchLayoutId(projection, layoutId)) : void 0;
    projection.setOptions({
      ...projection.options,
      ...layoutOptions(this.props)
    });
    hasTakenAnySnapshot = true;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          projection.getStack()?.members.length || this.safeToRemove();
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      this.takeOver?.();
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    hasTakenAnySnapshot = true;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      layoutGroup.group?.remove(projection);
      promoteContext?.deregister?.(projection);
    }
  }
  safeToRemove() {
    this.props.safeToRemove?.();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = useContext(LayoutGroupContext);
  return jsx(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: useContext(SwitchLayoutGroupContext), isPresent, safeToRemove });
}

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/gestures/hover.mjs
function handleGestureEvent(node, event, gesture, lifecycle, isRepeat) {
  const { props } = node;
  const whileKey = "while" + gesture;
  if (!isRepeat && node.animationState && props[whileKey]) {
    node.animationState.setActive(whileKey, lifecycle === "Start");
  }
  const callback = props["on" + gesture + lifecycle];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
var HoverGesture = class extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = hover(current, (_element, startEvent) => {
      handleGestureEvent(this.node, startEvent, "Hover", "Start");
      return (endEvent) => handleGestureEvent(this.node, endEvent, "Hover", "End");
    });
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/gestures/press.mjs
function handlePressEvent(node, event, lifecycle, isRepeat) {
  if (node.current instanceof HTMLButtonElement && node.current.disabled) {
    return;
  }
  handleGestureEvent(node, event, "Tap", lifecycle, isRepeat);
}
var PressGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.options = {};
  }
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.update();
    this.unmount = press(current, (_element, startEvent) => {
      handlePressEvent(this.node, startEvent, "Start");
      return {
        onComplete: (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "" : "Cancel"),
        onRepeat: () => handlePressEvent(this.node, startEvent, "", true)
      };
    }, this.options);
  }
  update() {
    const { options, node } = this;
    const { globalTapTarget, propagate, tap } = node.props;
    for (const key in options)
      delete options[key];
    Object.assign(options, tap, {
      useGlobalTarget: globalTapTarget,
      stopPropagation: propagate?.tap === false
    });
  }
  unmount() {
  }
};

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {
    this.stopObserver?.();
    this.hasEnteredView = false;
    this.isInView = false;
  }
};
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs
var featureBundle = /* @__PURE__ */ Object.assign({}, animations, gestureAnimations, drag, layout);

// node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = /* @__PURE__ */ createMotionProxy(featureBundle, createDomVisualElement);

// node_modules/framer-motion/dist/es/value/use-motion-value.mjs
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const { isStatic } = useContext(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = useState(initial);
    useEffect(() => value.on("change", setLatest), []);
  }
  return value;
}

// node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.preRender(updateValue, false, true);
    const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
    updateValue();
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}

// node_modules/framer-motion/dist/es/value/use-computed.mjs
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}

// node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const isOutputMap = outputRangeOrMap !== void 0 && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function";
  if (isOutputMap) {
    return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
  }
  const outputRange = outputRangeOrMap;
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
  const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
  if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false && // WAAPI can't call a mixer
  !options?.mixer) {
    const ease2 = options?.ease;
    result.accelerate = {
      ...inputAccelerate,
      times: [0, ...inputRangeOrTransformer, 1],
      keyframes: [
        outputRangeOrMap[0],
        ...outputRangeOrMap,
        outputRangeOrMap[outputRangeOrMap.length - 1]
      ],
      isTransformed: true,
      ...ease2 ? { ease: Array.isArray(ease2) ? [ease2[0], ...ease2] : ease2 } : {}
    };
  }
  return result;
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
  const keys = useConstant(() => Object.keys(outputMap));
  const output = useConstant(() => ({}));
  for (const key of keys) {
    output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
  }
  return output;
}

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = useState(prefersReducedMotion.current);
  if (false) {
    warnOnce(shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
  }
  return shouldReduceMotion;
}

// node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function isDOMKeyframes(keyframes2) {
  return typeof keyframes2 === "object" && !Array.isArray(keyframes2);
}

// node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function resolveSubjects(subject, keyframes2, scope, selectorCache) {
  if (subject == null) {
    return [];
  }
  if (typeof subject === "string" && isDOMKeyframes(keyframes2)) {
    return resolveElements(subject, scope, selectorCache);
  } else if (subject instanceof NodeList) {
    return Array.from(subject);
  } else if (Array.isArray(subject)) {
    return subject.filter((s) => s != null);
  } else {
    return [subject];
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function calculateRepeatDuration(duration, repeat, repeatDelay) {
  return duration * (repeat + 1) + repeatDelay * repeat;
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function calcLabelTime(position, labels) {
  if (labels.has(position))
    return labels.get(position);
  const [, name, offset] = position.match(/^(.+?)([+-][\d.]+)$/) || [];
  return labels.has(name) ? Math.max(0, labels.get(name) + parseFloat(offset)) : void 0;
}
function calcNextTime(current, next, prev, labels) {
  if (typeof next === "number") {
    return next;
  } else if (next.startsWith("-") || next.startsWith("+")) {
    return Math.max(0, current + parseFloat(next));
  } else if (next === "<") {
    return prev;
  } else if (next.startsWith("<")) {
    return Math.max(0, prev + parseFloat(next.slice(1)));
  } else {
    return calcLabelTime(next, labels) ?? current;
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function eraseKeyframes(sequence, startTime, endTime) {
  for (let i = 0; i < sequence.length; i++) {
    const keyframe = sequence[i];
    if (keyframe.at > startTime && keyframe.at < endTime) {
      removeItem(sequence, keyframe);
      i--;
    }
  }
}
function addKeyframes(sequence, keyframes2, easing, offset, startTime, endTime) {
  eraseKeyframes(sequence, startTime, endTime);
  for (let i = 0; i < keyframes2.length; i++) {
    sequence.push({
      value: keyframes2[i],
      at: mixNumber(startTime, endTime, offset[i]),
      easing: getEasingForSegment(easing, i)
    });
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function normalizeTimes(times, repeat, repeatDelayUnits = 0) {
  const totalUnits = repeat + 1 + repeat * repeatDelayUnits;
  for (let i = 0; i < times.length; i++) {
    times[i] = times[i] / totalUnits;
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function compareByTime(a, b) {
  if (a.at === b.at) {
    if (a.value === null)
      return 1;
    if (b.value === null)
      return -1;
    return 0;
  } else {
    return a.at - b.at;
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var defaultSegmentEasing = "easeInOut";
var MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators, info) {
  const defaultDuration2 = defaultTransition.duration || 0.3;
  const animationDefinitions = /* @__PURE__ */ new Map();
  const sequences = /* @__PURE__ */ new Map();
  const elementCache = {};
  const timeLabels = /* @__PURE__ */ new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  const resolveSequence = (sequence2, base) => {
    let sequenceEnd = base;
    const resolveTime = (at) => typeof at === "number" ? base + at : calcNextTime(currentTime, at, prevTime, timeLabels);
    for (let i = 0; i < sequence2.length; i++) {
      const segment = sequence2[i];
      if (typeof segment === "string") {
        timeLabels.set(segment, currentTime);
        continue;
      } else if (!Array.isArray(segment)) {
        const start = segment.at === void 0 ? currentTime : resolveTime(segment.at);
        if ("sequence" in segment) {
          prevTime = currentTime = start;
          currentTime = resolveSequence(segment.sequence, start);
          prevTime = start;
          sequenceEnd = Math.max(sequenceEnd, currentTime);
        } else {
          timeLabels.set(segment.name, start);
        }
        continue;
      }
      let [subject, keyframes2, transition = {}] = segment;
      if (transition.at !== void 0) {
        currentTime = resolveTime(transition.at);
      }
      let maxDuration2 = 0;
      const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0) => {
        const valueKeyframesAsList = keyframesAsList(valueKeyframes);
        const { delay: delay2 = 0, times = defaultOffset(valueKeyframesAsList), type = defaultTransition.type || "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
        let { ease: ease2 = defaultTransition.ease || "easeOut", duration } = valueTransition;
        valueSequence.mixer || (valueSequence.mixer = valueTransition.mixer);
        const calculatedDelay = typeof delay2 === "function" ? delay2(elementIndex, numSubjects) : delay2;
        const numKeyframes = valueKeyframesAsList.length;
        const createGenerator = isGenerator(type) ? type : generators?.[type || "keyframes"];
        if (numKeyframes <= 2 && createGenerator) {
          let absoluteDelta = 100;
          if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
            const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
            absoluteDelta = Math.abs(delta);
          }
          const springTransition = {
            ...defaultTransition,
            ...remainingTransition
          };
          if (duration !== void 0) {
            springTransition.duration = secondsToMilliseconds(duration);
          }
          const springEasing = createGeneratorEasing(springTransition, absoluteDelta, createGenerator);
          ease2 = springEasing.ease;
          duration = springEasing.duration;
        }
        duration ?? (duration = defaultDuration2);
        const startTime = currentTime + calculatedDelay;
        if (times.length === 1 && times[0] === 0) {
          times[1] = 1;
        }
        const remainder = times.length - valueKeyframesAsList.length;
        remainder > 0 && fillOffset(times, remainder);
        valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
        if (repeat) {
          typeof process !== "undefined" && false;
        }
        if (repeat && repeat < MAX_REPEAT) {
          const repeatDelayUnits = duration > 0 ? repeatDelay / duration : 0;
          duration = calculateRepeatDuration(duration, repeat, repeatDelay);
          const originalKeyframes = [...valueKeyframesAsList];
          const originalTimes = [...times];
          ease2 = Array.isArray(ease2) ? [...ease2] : [ease2];
          const originalEase = [...ease2];
          const isFlipping = repeatType === "reverse" || repeatType === "mirror";
          let flippedKeyframes = originalKeyframes;
          let flippedEases = originalEase;
          if (isFlipping) {
            flippedKeyframes = [...originalKeyframes].reverse();
            if (repeatType === "reverse") {
              flippedEases = [...originalEase].reverse().map((e) => typeof e === "function" ? reverseEasing(e) : e);
            }
          }
          for (let repeatIndex = 0; repeatIndex < repeat; repeatIndex++) {
            const isFlipped = isFlipping && repeatIndex % 2 === 0;
            const iterKeyframes = isFlipped ? flippedKeyframes : originalKeyframes;
            const iterEase = isFlipped ? flippedEases : originalEase;
            const iterStartOffset = (repeatIndex + 1) * (1 + repeatDelayUnits);
            if (repeatDelayUnits > 0) {
              valueKeyframesAsList.push(valueKeyframesAsList[valueKeyframesAsList.length - 1]);
              times.push(iterStartOffset);
              ease2.push("linear");
            }
            valueKeyframesAsList.push(...iterKeyframes);
            for (let keyframeIndex = 0; keyframeIndex < iterKeyframes.length; keyframeIndex++) {
              times.push(originalTimes[keyframeIndex] + iterStartOffset);
              ease2.push(keyframeIndex === 0 ? "linear" : getEasingForSegment(iterEase, keyframeIndex - 1));
            }
          }
          normalizeTimes(times, repeat, repeatDelayUnits);
        }
        const targetTime = startTime + duration;
        addKeyframes(valueSequence, valueKeyframesAsList, ease2, times, startTime, targetTime);
        maxDuration2 = Math.max(calculatedDelay + duration, maxDuration2);
        totalDuration = Math.max(targetTime, totalDuration);
      };
      if (isMotionValue(subject)) {
        const subjectSequence = getSubjectSequence(subject, sequences);
        resolveValueSequence(keyframes2, transition, getValueSequence("default", subjectSequence));
      } else {
        const subjects = resolveSubjects(subject, keyframes2, scope, elementCache);
        const numSubjects = subjects.length;
        for (let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++) {
          keyframes2 = keyframes2;
          transition = transition;
          const thisSubject = subjects[subjectIndex];
          const subjectSequence = getSubjectSequence(thisSubject, sequences);
          for (const key in keyframes2) {
            resolveValueSequence(keyframes2[key], getValueTransition2(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
          }
        }
      }
      prevTime = currentTime;
      currentTime += maxDuration2;
      sequenceEnd = Math.max(sequenceEnd, currentTime);
    }
    return sequenceEnd;
  };
  resolveSequence(sequence, 0);
  if (info) {
    info.duration = totalDuration;
    info.labels = timeLabels;
  }
  const { type: _type, ...remainingDefaultTransition } = defaultTransition;
  sequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      valueSequence.sort(compareByTime);
      const keyframes2 = [];
      const valueOffset = [];
      const valueEasing = [];
      for (let i = 0; i < valueSequence.length; i++) {
        const { at, value, easing } = valueSequence[i];
        keyframes2.push(value);
        valueOffset.push(progress(0, totalDuration, at));
        valueEasing.push(easing || "easeOut");
      }
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes2.unshift(keyframes2[0]);
        valueEasing.unshift(defaultSegmentEasing);
      }
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes2.push(null);
      }
      if (!animationDefinitions.has(element)) {
        animationDefinitions.set(element, {
          keyframes: {},
          transition: {}
        });
      }
      const definition = animationDefinitions.get(element);
      definition.keyframes[key] = keyframes2;
      definition.transition[key] = {
        ...remainingDefaultTransition,
        duration: totalDuration,
        ease: valueEasing,
        times: valueOffset,
        mixer: valueSequence.mixer || defaultTransition.mixer,
        ...sequenceTransition
      };
    }
  });
  return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
  !sequences.has(subject) && sequences.set(subject, {});
  return sequences.get(subject);
}
function getValueSequence(name, sequences) {
  if (!sequences[name])
    sequences[name] = [];
  return sequences[name];
}
function keyframesAsList(keyframes2) {
  return Array.isArray(keyframes2) ? keyframes2 : [keyframes2];
}
function getValueTransition2(transition, key) {
  return transition && transition[key] ? {
    ...transition,
    ...transition[key]
  } : { ...transition };
}
var isNumber = (keyframe) => typeof keyframe === "number";
var isNumberKeyframesArray = (keyframes2) => keyframes2.every(isNumber);

// node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function isSingleValue(subject, keyframes2) {
  return isMotionValue(subject) || typeof subject === "number" || typeof subject === "string" && !isDOMKeyframes(keyframes2);
}
function animateSubject(subject, keyframes2, options, scope) {
  const animations2 = [];
  if (isSingleValue(subject, keyframes2)) {
    animations2.push(animateSingleValue(subject, isDOMKeyframes(keyframes2) ? keyframes2.default || keyframes2 : keyframes2, options ? options.default || options : options));
  } else {
    if (subject == null) {
      return animations2;
    }
    const subjects = resolveSubjects(subject, keyframes2, scope);
    const numSubjects = subjects.length;
    for (let i = 0; i < numSubjects; i++) {
      const thisSubject = subjects[i];
      const transition = { ...options };
      if ("delay" in transition && typeof transition.delay === "function") {
        transition.delay = transition.delay(i, numSubjects);
      }
      if (thisSubject instanceof Element) {
        animations2.push(...animateElement(thisSubject, keyframes2, transition, visualElementStore.get(thisSubject)));
      } else {
        animations2.push(...animateEffectSubject(findEffect(thisSubject) ?? propEffect, thisSubject, keyframes2, transition));
      }
    }
  }
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function animateSequence(sequence, options, scope, info) {
  const animations2 = [];
  const processedSequence = sequence.map((segment) => {
    if (Array.isArray(segment) && typeof segment[0] === "function") {
      const callback = segment[0];
      const mv = motionValue(0);
      mv.on("change", callback);
      if (segment.length === 1) {
        return [mv, [0, 1]];
      } else if (segment.length === 2) {
        return [mv, [0, 1], segment[1]];
      } else {
        return [mv, segment[1], segment[2]];
      }
    }
    return segment;
  });
  const animationDefinitions = createAnimationsFromSequence(processedSequence, options, scope, { spring }, info);
  const reduceMotion = options?.reduceMotion ?? options?.defaultTransition?.reduceMotion;
  animationDefinitions.forEach(({ keyframes: keyframes2, transition }, subject) => {
    animations2.push(...animateSubject(subject, keyframes2, {
      ...transition,
      reduceMotion
    }));
  });
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/timeline/index.mjs
var markerId = 0;
function inRepeat({ repeat = 0, repeatDelay = 0, repeatType = "loop", delay: delay2 = 0 }, duration, time2, index) {
  const cycle = duration + repeatDelay;
  const isSplit = index === void 0;
  if (isSplit) {
    const t = Math.max(0, time2 - delay2);
    index = cycle && t > 0 ? Math.min(repeat, Math.ceil(t / cycle - 1e-9) - 1) : 0;
    time2 = Math.min(t - index * cycle, duration);
  }
  if (repeatType !== "loop" && index % 2)
    time2 = duration - time2;
  return [index, isSplit ? time2 : delay2 + index * cycle + time2];
}
function withAt(segment, at) {
  const copy = [...segment];
  const i = typeof copy[0] === "function" ? Math.max(1, copy.length - 1) : 2;
  copy[i] = { ...copy[i], at };
  return copy;
}
var label = (name, at) => at === void 0 ? name : { name, at };
function rewind(animation) {
  animation.pause();
  animation.time = 0;
  animation.stop();
}
var Timeline = class _Timeline {
  /**
   * `animations` are already running animations of `items`, as
   * animate() makes them. The timeline plays these until it's first
   * changed, so it costs nothing over the animations themselves until
   * then.
   */
  constructor(items = [], options = {}, animations2) {
    this.options = options;
    this.entries = [];
    this.repeatIndex = 0;
    this.prevTime = 0;
    this.markers = [];
    this.labels = /* @__PURE__ */ new Map();
    this.totalDuration = 0;
    this.isDirty = false;
    this.isDone = false;
    this.isRebuilding = false;
    this.playbackSpeed = 1;
    this.motionScope = activeScope.current;
    this.isKilled = false;
    this.isWrapped = false;
    this.stop = () => {
      this.flush();
      this.group?.stop();
    };
    this.isPaused = options.autoplay === false;
    this.newFinished();
    items.forEach((item) => this.add(item));
    if (animations2) {
      this.isDirty = false;
      this.isWrapped = true;
      this.group = new GroupAnimationWithThen(animations2);
      this.watch();
    } else {
      this.invalidate();
      this.flush();
    }
  }
  /**
   * Add a segment, label or timeline. `at` overrides any `at` already
   * on the segment. The item itself is the handle for `move()` and
   * `remove()`.
   */
  add(item, at) {
    if (item instanceof _Timeline)
      item.adopt(this);
    return this.push({ item, at });
  }
  /**
   * Fire a callback when the playhead crosses `at`, in either direction.
   * It receives the direction: 1 forwards, -1 backwards.
   */
  call(callback, at) {
    return this.push({
      item: callback,
      at,
      marker: { name: "_m" + markerId++, time: 0, callback }
    });
  }
  /**
   * Pause when the playhead reaches `at`.
   */
  addPause(at, callback) {
    return this.push({
      item: callback || {},
      at,
      marker: { name: "_m" + markerId++, time: 0, callback, pause: true }
    });
  }
  /**
   * Change where an item starts.
   */
  move(item, at) {
    this.entries.forEach((entry) => {
      if (entry.item === item)
        entry.at = at;
    });
    return this.invalidate();
  }
  /**
   * Remove a segment, label, callback or timeline.
   */
  remove(item) {
    if (item instanceof _Timeline)
      item.parent = void 0;
    this.entries = this.entries.filter((entry) => entry.item !== item);
    return this.invalidate();
  }
  clear() {
    this.entries = [];
    return this.invalidate();
  }
  /**
   * The time of a label in seconds, or `undefined` if there's no label
   * with this name.
   */
  getLabelTime(name) {
    this.flush();
    return this.labels.get(name);
  }
  /**
   * Jump to a time in seconds or a label.
   */
  seek(position) {
    this.time = this.resolve(position);
    return this;
  }
  /**
   * Play forwards or backwards to a time or label, then pause there.
   */
  playTo(position) {
    const stopAt = this.resolve(position);
    const duration = this.iterationDuration;
    const time2 = this.time;
    const [index] = inRepeat(this.options, duration, time2);
    const target = inRepeat(this.options, duration, stopAt, index)[1];
    const speed = Math.abs(this.speed);
    this.speed = target < time2 ? -speed : speed;
    this.stopAt = stopAt;
    this.clock || this.invalidate();
    this.play();
    return this;
  }
  reverse() {
    this.speed = -this.speed;
    this.play();
    return this;
  }
  get progress() {
    return this.duration ? this.time / this.duration : 0;
  }
  set progress(progress2) {
    this.time = progress2 * this.duration;
  }
  get time() {
    return this.active()?.time ?? 0;
  }
  set time(time2) {
    this.flush();
    this.prevTime = time2;
    this.group && (this.group.time = time2);
    this.repeatIndex = this.currentRepeat();
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(speed) {
    this.playbackSpeed = speed;
    this.group && (this.group.speed = speed);
  }
  get duration() {
    this.flush();
    return this.isWrapped ? this.group.duration : this.totalDuration;
  }
  get iterationDuration() {
    this.flush();
    return this.isWrapped ? this.group.iterationDuration : this.totalDuration;
  }
  get state() {
    return this.active()?.state ?? "idle";
  }
  get startTime() {
    return this.active()?.startTime ?? null;
  }
  play() {
    this.flush();
    this.isPaused = false;
    this.group?.play();
    if (this.isDone) {
      this.newFinished();
      this.watch();
    }
  }
  pause() {
    this.flush();
    this.isPaused = true;
    this.group?.pause();
  }
  cancel() {
    this.flush();
    this.group?.cancel();
  }
  complete() {
    this.flush();
    this.group?.complete();
  }
  attachTimeline(timeline) {
    this.flush();
    this.scrollTimeline = timeline;
    this.detachScroll = this.group?.attachTimeline(timeline);
    return () => {
      this.scrollTimeline = void 0;
      this.detachScroll?.();
    };
  }
  then(onResolve, onReject) {
    return this.finished.then(onResolve, onReject);
  }
  /**
   * The current animations, if any are running. Skipped animations
   * (skipAnimations, reduced motion) can leave the group empty.
   */
  active() {
    this.flush();
    return this.group?.animations.length ? this.group : void 0;
  }
  push(entry) {
    this.entries.push(entry);
    return this.invalidate();
  }
  /**
   * Schedule a rebuild. A nested timeline passes changes up, as it's
   * built as part of its parent.
   */
  invalidate() {
    if (this.parent) {
      this.parent.invalidate();
    } else if (!this.isDirty) {
      this.isDirty = true;
      queueMicrotask(() => this.flush());
    }
    return this;
  }
  /**
   * Apply pending changes now, so reads straight after a change
   * reflect it.
   */
  flush() {
    this.isDirty && !this.parent && !this.isKilled && this.build();
  }
  adopt(parent) {
    if (this.group) {
      rewind(this.group);
      this.group = void 0;
    }
    this.isDirty = false;
    this.parent = parent;
  }
  build() {
    const prevDuration = this.isWrapped ? this.group.iterationDuration : this.totalDuration;
    this.isDirty = false;
    this.isWrapped = false;
    const prev = this.group;
    let time2 = 0;
    if (prev) {
      this.isRebuilding = true;
      if (this.scrollTimeline) {
        this.detachScroll?.();
        prev.cancel();
      } else {
        time2 = prev.animations.length ? prev.time : 0;
        rewind(prev);
      }
      this.isRebuilding = false;
    }
    const { defaultTransition, onComplete, onUpdate, onRepeat, onReverseComplete, autoplay, scope, ...options } = this.options;
    const playback = {};
    if (scope?.reduceMotion !== void 0) {
      playback.reduceMotion = scope.reduceMotion;
    }
    if (scope?.skipAnimations !== void 0) {
      playback.skipAnimations = scope.skipAnimations;
    }
    Object.assign(playback, options);
    const markers = /* @__PURE__ */ new Map();
    const info = {};
    const prevScope = activeScope.current;
    activeScope.current = this.motionScope;
    let animations2;
    try {
      animations2 = animateSequence(this.toSequence(markers), { defaultTransition, ...playback }, scope, info);
    } finally {
      activeScope.current = prevScope;
    }
    const labels = info.labels;
    let duration = playback.duration ?? info.duration;
    const scale2 = info.duration ? duration / info.duration : 1;
    labels.forEach((time3, name) => labels.set(name, time3 * scale2));
    this.markers = [];
    markers.forEach((marker, name) => {
      marker.time = labels.get(name);
      labels.delete(name);
      duration = Math.max(duration, marker.time);
      this.markers.push(marker);
    });
    this.markers.sort((a, b) => a.time - b.time);
    this.labels = labels;
    this.totalDuration = duration;
    this.clock = this.clockAnimation = void 0;
    if (this.markers.length || this.stopAt !== void 0 || onUpdate || onRepeat) {
      const clock = this.clock = motionValue(0);
      clock.on("change", (t) => clock === this.clock && this.onClock(t));
      animations2.unshift(this.clockAnimation = animateSingleValue(clock, [0, duration], {
        ...playback,
        duration,
        ease: "linear"
      }));
    }
    const group = this.group = new GroupAnimationWithThen(animations2);
    const { delay: delay2 = 0, repeat = 0, repeatDelay = 0 } = this.options;
    const [index, position] = inRepeat(this.options, prevDuration, time2);
    if (time2 > delay2) {
      time2 = inRepeat(this.options, duration, Math.min(position, duration), index)[1];
    }
    if (this.isDone && time2 < delay2 + (repeat + 1) * (duration + repeatDelay) - repeatDelay) {
      this.newFinished();
    }
    if (this.scrollTimeline) {
      this.detachScroll = group.attachTimeline(this.scrollTimeline);
    } else {
      group.speed = this.playbackSpeed;
      if (this.isPaused)
        group.pause();
      if (time2)
        group.time = time2;
    }
    this.repeatIndex = this.currentRepeat();
    this.prevTime = time2 || -1;
    this.watch();
  }
  toSequence(markers) {
    return this.entries.map(({ item, at, marker }) => {
      if (marker) {
        markers.set(marker.name, marker);
        return label(marker.name, at);
      }
      if (item instanceof _Timeline) {
        return { sequence: item.toSequence(markers), at };
      }
      if (typeof item === "string")
        return label(item, at);
      if (at === void 0)
        return item;
      return Array.isArray(item) ? withAt(item, at) : { ...item, at };
    });
  }
  resolve(position) {
    this.flush();
    return typeof position === "number" ? position : calcLabelTime(position, this.labels) ?? this.time;
  }
  /**
   * The repeat the clock is in, from its time across all repeats.
   */
  currentRepeat() {
    return inRepeat(this.options, this.totalDuration, this.clockAnimation?.time ?? 0)[0];
  }
  onClock(time2) {
    let prevTime = this.prevTime;
    this.prevTime = time2;
    if (this.isRebuilding)
      return;
    const { onUpdate, onRepeat, repeatType = "loop" } = this.options;
    onUpdate?.(time2);
    const repeatIndex = this.currentRepeat();
    const step = repeatIndex > this.repeatIndex ? 1 : -1;
    while (repeatIndex !== this.repeatIndex) {
      const isForward = this.speed > 0 === (repeatType === "loop" || !(this.repeatIndex % 2));
      const edge = isForward ? this.totalDuration : 0;
      if (this.cross(prevTime, edge))
        return;
      this.repeatIndex += step;
      onRepeat?.();
      prevTime = repeatType === "loop" ? isForward ? -1 : Infinity : edge;
    }
    this.cross(prevTime, time2);
  }
  /**
   * Fire markers between two playhead times. Returns `true` if it
   * paused.
   */
  cross(from, to) {
    if (from === to)
      return;
    const isForward = to > from;
    const crossed = (t) => isForward ? t > from && t <= to : t < from && t >= to;
    const markers = isForward ? this.markers : [...this.markers].reverse();
    for (const marker of markers) {
      if (!crossed(marker.time))
        continue;
      marker.callback?.(isForward ? 1 : -1);
      if (marker.pause)
        return this.pauseAt(marker.time);
    }
    if (this.stopAt !== void 0 && crossed(this.stopAt)) {
      this.pauseAt(this.stopAt);
      this.stopAt = void 0;
      return true;
    }
  }
  /**
   * Pause at a playhead position in the current repeat.
   */
  pauseAt(position) {
    this.pause();
    this.time = inRepeat(this.options, this.totalDuration, position, this.repeatIndex)[1];
    return true;
  }
  watch() {
    const group = this.group;
    group.finished.then(() => {
      if (group !== this.group || this.isDone)
        return;
      this.isDone = true;
      const { onComplete, onReverseComplete } = this.options;
      const callback = this.speed < 0 && onReverseComplete || onComplete;
      const resolve = this.resolveFinished;
      callback?.();
      resolve();
    });
  }
  newFinished() {
    this.isDone = false;
    this.finished = new Promise((resolve) => {
      this.resolveFinished = resolve;
    });
    const { scope } = this.options;
    const remove = this.motionScope?.add(() => {
      this.isKilled = true;
      this.stop();
    });
    scope?.animations.push(this);
    this.finished.then(() => {
      remove?.();
      scope && removeItem(scope.animations, this);
    });
  }
};

// node_modules/framer-motion/dist/es/animation/animate/index.mjs
function isSequence(value) {
  return Array.isArray(value) && value.some((item) => Array.isArray(item) || item?.sequence);
}
function createScopedAnimate(options = {}) {
  const { scope, reduceMotion, skipAnimations } = options;
  function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options2) {
    const scopeTransition = activeScope.current?.transition;
    const inherited = {};
    if (reduceMotion !== void 0)
      inherited.reduceMotion = reduceMotion;
    if (skipAnimations !== void 0)
      inherited.skipAnimations = skipAnimations;
    let timeline;
    if (isSequence(subjectOrSequence)) {
      const sequenceOptions = {
        ...inherited,
        ...optionsOrKeyframes,
        scope
      };
      if (scopeTransition) {
        sequenceOptions.defaultTransition = {
          ...scopeTransition,
          ...sequenceOptions.defaultTransition
        };
      }
      sequenceOptions.reduceMotion = optionsOrKeyframes?.reduceMotion ?? sequenceOptions.defaultTransition?.reduceMotion ?? reduceMotion;
      timeline = new Timeline(subjectOrSequence, sequenceOptions);
    } else {
      const { onComplete, ...rest2 } = options2 || {};
      const transition = {
        ...inherited,
        ...scopeTransition,
        ...rest2
      };
      const { onUpdate } = rest2;
      const segment = typeof subjectOrSequence === "number" || typeof subjectOrSequence === "string" && (typeof optionsOrKeyframes === "string" || Array.isArray(optionsOrKeyframes)) ? [
        onUpdate || (() => {
        }),
        Array.isArray(optionsOrKeyframes) ? optionsOrKeyframes : [subjectOrSequence, optionsOrKeyframes],
        { ...transition, onUpdate: void 0 }
      ] : [subjectOrSequence, optionsOrKeyframes, transition];
      timeline = new Timeline([segment], { ...inherited, onComplete, scope }, animateSubject(subjectOrSequence, optionsOrKeyframes, transition, scope));
    }
    return timeline;
  }
  return scopedAnimate;
}
var animate = /* @__PURE__ */ Object.assign(
  /* @__PURE__ */ createScopedAnimate(),
  {
    /**
     * Register an effect so `animate()` can animate the subjects it
     * claims, for instance `animate.addEffect(threeEffect)`. The most
     * recently added effect is tested first. DOM elements are always
     * animated directly.
     */
    addEffect,
    removeEffect
  }
);

// node_modules/motion/dist/es/react.mjs
var motion2 = motion;

// node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
var toKebabCase = (string) => string?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function toLucideIconData(iconName, iconNode, aliases = []) {
  if (iconNode == null) {
    throw new Error("[lucide]: iconNode is required when icon name is used");
  }
  return {
    name: toKebabCase(iconName),
    size: 24,
    node: iconNode,
    ...aliases.length > 0 ? { aliases } : {}
  };
}

// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var toCamelCase = (string) => {
  let out = "";
  let upperNext = false;
  for (const ch of string) {
    if (ch === "-" || ch === "_" || ch <= " ") {
      upperNext = out.length > 0;
      continue;
    }
    if (out.length === 0) {
      out += ch.toLowerCase();
    } else {
      out += upperNext ? ch.toUpperCase() : ch;
    }
    upperNext = false;
  }
  return out;
};

// node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// node_modules/lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function isDefined(value) {
  return value !== null && value !== void 0;
}
function buildLucideIconNode(icon, params = {}) {
  const attributeNames = params.attributeNames ?? {};
  const getAttributeName = (attributeName) => attributeNames[attributeName] ?? attributeName;
  const viewBoxWidth = icon.size ?? icon.width ?? defaultAttributes["width"];
  const viewBoxHeight = icon.size ?? icon.height ?? defaultAttributes["height"];
  const aliasClassNames = icon.aliases?.filter((alias) => typeof alias === "string" && alias.trim() !== "").map((alias) => `lucide-${alias}`) ?? [];
  const iconClassNames = [...icon.name ? [`lucide-${icon.name}`] : [], ...aliasClassNames];
  const classNamesFromClassName = params.className?.split(" ").filter(Boolean) ?? [];
  const className = params.includeDefaultClasses === false ? mergeClasses(...classNamesFromClassName) : mergeClasses("lucide", ...iconClassNames, ...classNamesFromClassName);
  const calculatedStrokeWidth = params.absoluteStrokeWidth ? Number(params.strokeWidth ?? defaultAttributes["stroke-width"]) * Number(icon.size ?? icon.width ?? defaultAttributes["width"]) / Number(params.size ?? params.width ?? defaultAttributes["width"]) : params.strokeWidth ?? defaultAttributes["stroke-width"];
  const attributes = {
    ...Object.entries(defaultAttributes).reduce((attrs, [attrName, value]) => {
      attrs[getAttributeName(attrName)] = value;
      return attrs;
    }, {}),
    ..."color" in params && params.color && {
      [getAttributeName("stroke")]: params.color
    },
    ..."size" in params && isDefined(params.size) && {
      [getAttributeName("width")]: params.size,
      [getAttributeName("height")]: params.size
    },
    ..."width" in params && isDefined(params.width) && {
      [getAttributeName("width")]: params.width
    },
    ..."height" in params && isDefined(params.height) && {
      [getAttributeName("height")]: params.height
    },
    [getAttributeName("stroke-width")]: calculatedStrokeWidth,
    ...className && {
      [getAttributeName("class")]: className
    },
    [getAttributeName("viewBox")]: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
    ...params.hasA11yProp === false ? {
      [getAttributeName("aria-hidden")]: "true"
    } : {},
    ..."attributes" in params && params.attributes
  };
  return [
    "svg",
    attributes,
    icon.node.map((child) => {
      const [name, attrs, children] = child;
      const nextAttrs = params.nonScalingStroke ? { [getAttributeName("vector-effect")]: "non-scaling-stroke", ...attrs } : attrs;
      return children ? [name, nextAttrs, children] : [name, nextAttrs];
    })
  ];
}

// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function buildLucideIconForReact(icon, params = {}) {
  return buildLucideIconNode(icon, {
    ...params,
    attributeNames: {
      ...params.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}

// node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

// node_modules/lucide-react/dist/esm/context.mjs
var LucideContext = createContext({});
var useLucideContext = () => useContext(LucideContext);

// node_modules/lucide-react/dist/esm/Icon.mjs
var Icon = forwardRef(
  ({
    color: color2,
    size,
    width,
    height,
    strokeWidth,
    absoluteStrokeWidth,
    nonScalingStroke,
    className = "",
    children,
    iconNode = [],
    icon = {
      node: iconNode,
      aliases: [],
      size: 24
    },
    ...rest2
  }, ref) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      nonScalingStroke: contextNonScalingStroke = false,
      color: contextColor = "currentColor",
      className: contextClass = ""
    } = useLucideContext() ?? {};
    const hasAccessibleProp = Boolean(children) || hasA11yProp(rest2);
    const [name, svgAttributes, builtIconNode = []] = buildLucideIconForReact(icon, {
      color: color2 ?? contextColor,
      width: width ?? size ?? contextSize,
      height: height ?? size ?? contextSize,
      strokeWidth: strokeWidth ?? contextStrokeWidth,
      absoluteStrokeWidth: absoluteStrokeWidth ?? contextAbsoluteStrokeWidth,
      nonScalingStroke: nonScalingStroke ?? contextNonScalingStroke,
      className: mergeClasses(contextClass, className),
      hasA11yProp: hasAccessibleProp,
      attributes: rest2
    });
    return createElement(
      name,
      {
        ref,
        ...svgAttributes
      },
      [
        ...builtIconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function createLucideIcon(iconDataOrName, iconNode = [], aliases = []) {
  const iconData = typeof iconDataOrName === "string" ? toLucideIconData(iconDataOrName, iconNode, aliases) : iconDataOrName;
  const Component2 = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      icon: iconData,
      className,
      ...props
    })
  );
  if (iconData.name) {
    Component2.displayName = toPascalCase(iconData.name);
  }
  return Component2;
}

// node_modules/lucide-react/dist/esm/icons/circle-exclamation-point.mjs
var __iconData = {
  name: "circle-exclamation-point",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
  ],
  aliases: ["alert-circle", "circle-alert"]
};
__iconData.node;
var CircleExclamationPoint = createLucideIcon(__iconData);

// arc-tree:tree:motion-tokens.ts
var motionTokens = {
  duration: { instant: 0.12, fast: 0.16, exit: 0.18, standard: 0.24, considered: 0.48 },
  ease: {
    enter: [0.16, 1, 0.3, 1],
    exit: [0.7, 0, 0.84, 0],
    standard: [0.22, 1, 0.36, 1],
    /** For elements that move while already on screen. */
    inOut: [0.65, 0, 0.35, 1]
  },
  spring: {
    responsive: { type: "spring", stiffness: 520, damping: 44 },
    gentle: { type: "spring", stiffness: 340, damping: 34 },
    /** Presses, toggles, thumbs, and small indicators. Settles fast and never overshoots, so nothing jitters. */
    snappy: { type: "spring", visualDuration: 0.26, bounce: 0 },
    /** Panels, height changes, and layout shifts. Critically damped, never overshoots. */
    smooth: { type: "spring", visualDuration: 0.4, bounce: 0 },
    /** Shape morphs, shared layout highlights, and width changes that follow new content. No bounce: sizes and positions settle without overshoot. */
    morph: { type: "spring", visualDuration: 0.42, bounce: 0 }
  },
  /** Stagger steps in seconds. Keep total stagger under roughly 0.4s. */
  stagger: { char: 0.016, word: 0.04, line: 0.08, item: 0.035 },
  /** Blur radii in px for text and content crossfades. Keep blur small and brief. */
  blur: { subtle: 2, soft: 4, text: 8 }
};

// arc-tree:tree:components/action-swap/action-swap.module.css
var action_swap_default = {};

// arc-tree:tree:components/action-swap/action-swap.tsx
var IDLE = { kind: "idle" };
var FAILURE_HOLD = 1800;
var MIN_WORKING = 450;
var ICON = 16;
var pressVariants = {
  pressed: (button) => ({ scale: (button.current?.offsetWidth ?? 0) > 220 ? 0.985 : 0.97, transition: { duration: motionTokens.duration.instant, ease: [...motionTokens.ease.standard] } })
};
var morph = motionTokens.spring.morph;
var instant = { duration: motionTokens.duration.instant };
var soft = `blur(${motionTokens.blur.soft}px)`;
var tween = { duration: motionTokens.duration.standard, ease: [...motionTokens.ease.enter] };
var leave = { duration: motionTokens.duration.fast, ease: [...motionTokens.ease.standard] };
var rest = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" };
var fadeIn = { ...rest, opacity: 0 };
var fadeOut = { opacity: 0, transition: instant };
var glyphIn = { opacity: 0, y: 4, filter: soft };
var glyphOut = { opacity: 0, y: -3, filter: soft, transition: leave };
var iconIn = { opacity: 0, scale: 0.5, filter: soft };
var iconOut = { ...iconIn, transition: leave };
var iconEnter = { scale: motionTokens.spring.snappy, opacity: tween, filter: tween };
var successIn = { ...iconIn, clipPath: "inset(0% 100% 0% 0%)" };
var successRest = { ...rest, clipPath: "inset(0% 0% 0% 0%)" };
var successEnter = { scale: { type: "spring", visualDuration: 0.45, bounce: 0 }, opacity: tween, filter: tween, clipPath: { duration: 0.36, ease: [...motionTokens.ease.standard], delay: 0.02 } };
function useMorphWidth(content, key, reduced) {
  const width = useMotionValue("auto");
  const lastKey2 = useRef(key), armedUntil = useRef(0);
  useLayoutEffect(() => {
    if (lastKey2.current === key) return;
    lastKey2.current = key;
    armedUntil.current = performance.now() + 700;
  }, [key]);
  useEffect(() => {
    const node = content.current;
    if (!node || typeof ResizeObserver === "undefined") return;
    let measured = false;
    const observer2 = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const next = entry.borderBoxSize?.[0]?.inlineSize ?? node.offsetWidth;
      if (!measured || reduced || performance.now() > armedUntil.current) {
        measured = true;
        width.jump(next);
        return;
      }
      animate(width, next, morph);
    });
    observer2.observe(node, { box: "border-box" });
    return () => observer2.disconnect();
  }, [content, reduced, width]);
  return useTransform(width, (value) => typeof value === "number" ? Math.max(0, value) : value);
}
var toGlyphs = (chars, seq, lead = 0) => chars.map((char, order) => ({ id: `${seq}:${order}`, char, order, lead }));
function useGlyphs(text) {
  const [state, setState] = useState(() => ({ text, seq: 0, glyphs: toGlyphs([...text], 0) }));
  if (state.text === text) return state.glyphs;
  const prev = [...state.text], next = [...text];
  let start = 0, end = 0;
  while (start < prev.length && start < next.length && prev[start] === next[start]) start++;
  while (end < prev.length - start && end < next.length - start && prev[prev.length - 1 - end] === next[next.length - 1 - end]) end++;
  if (start < 2) start = 0;
  if (end < 2) end = 0;
  const seq = state.seq + 1;
  const glyphs = [...state.glyphs.slice(0, start), ...toGlyphs(next.slice(start, next.length - end), seq, prev.length ? 0 : 0.1), ...state.glyphs.slice(state.glyphs.length - end)];
  setState({ text, seq, glyphs });
  return glyphs;
}
function MorphText({ text, gap, reduced }) {
  const glyphs = useGlyphs(text);
  const rowRef = useRef(null);
  const layoutKey = `${gap ? 1 : 0}${text}`;
  const width = useMorphWidth(rowRef, layoutKey, reduced);
  return /* @__PURE__ */ jsx(motion2.span, { className: action_swap_default.morph, style: { width }, "aria-hidden": "true", children: /* @__PURE__ */ jsx("span", { ref: rowRef, className: action_swap_default.glyphs, "data-gap": gap || void 0, children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", initial: false, children: glyphs.map((glyph) => /* @__PURE__ */ jsx(motion2.span, { className: action_swap_default.glyph, layout: reduced ? false : "position", layoutDependency: layoutKey, initial: reduced ? fadeIn : glyphIn, animate: rest, exit: reduced ? fadeOut : glyphOut, transition: reduced ? instant : { ...tween, delay: glyph.lead + Math.min(glyph.order * motionTokens.stagger.char, 0.12), layout: morph }, children: glyph.char }, glyph.id)) }) }) });
}
function ActionSwap({ states, value, defaultValue, onValueChange, onAction, failureLabel = "Try again", size = "md", className, disabled, style, ...props }) {
  const firstId = states[0]?.id ?? "";
  const [internalValue, setInternalValue] = useState(defaultValue ?? firstId);
  const [phase, setPhase] = useState(IDLE);
  const [spoken, setSpoken] = useState("");
  const buttonRef = useRef(null);
  const run = useRef(0);
  const reduced = useReducedMotion() ?? false;
  const activeValue = value ?? internalValue;
  const activeIndex = Math.max(0, states.findIndex((state) => state.id === activeValue));
  const activeState = states[activeIndex] ?? states[0];
  const nextState = states[(activeIndex + 1) % states.length] ?? activeState;
  const inactive = disabled || states.length < 2;
  const working = phase.kind === "working";
  const folded = phase.kind === "working" && !phase.target.pendingLabel;
  function commit(next) {
    setPhase(IDLE);
    if (value === void 0) setInternalValue(next.id);
    setSpoken(next.label);
    onValueChange?.(next.id, next);
  }
  function fail() {
    setPhase({ kind: "failed" });
    setSpoken(failureLabel);
  }
  function advance() {
    if (!activeState || !nextState || inactive || working) return;
    const next = nextState, id3 = ++run.current;
    let result;
    try {
      result = onAction?.(next, activeState);
    } catch {
      fail();
      return;
    }
    if (!result || typeof result.then !== "function") {
      commit(next);
      return;
    }
    setPhase({ kind: "working", target: next });
    setSpoken(next.pendingLabel ?? "Working");
    const started = performance.now();
    const settle = (done) => window.setTimeout(() => {
      if (run.current === id3) done();
    }, Math.max(0, MIN_WORKING - (performance.now() - started)));
    result.then(() => settle(() => commit(next)), () => settle(fail));
  }
  const latest = useRef({ commit, nextState });
  useLayoutEffect(() => {
    latest.current = { commit, nextState };
  });
  useEffect(() => () => {
    run.current += 1;
  }, []);
  const holdFor = phase.kind === "idle" ? activeState?.holdFor : void 0;
  useEffect(() => {
    if (!holdFor) return;
    const timer = window.setTimeout(() => {
      const { commit: settle, nextState: next } = latest.current;
      if (next) settle(next);
    }, holdFor);
    return () => window.clearTimeout(timer);
  }, [holdFor, activeState?.id]);
  useEffect(() => {
    if (phase.kind !== "failed") return;
    const timer = window.setTimeout(() => setPhase(IDLE), FAILURE_HOLD);
    return () => window.clearTimeout(timer);
  }, [phase]);
  const fold = useMotionValue(folded ? 1 : 0);
  useEffect(() => {
    animate(fold, folded ? 1 : 0, reduced ? { duration: 0 } : morph);
  }, [fold, folded, reduced]);
  if (!activeState) return null;
  const view = phase.kind === "working" ? { key: "working", label: phase.target.pendingLabel ?? "", icon: /* @__PURE__ */ jsx("span", { className: action_swap_default.spinner }), tone: activeState.tone ?? "neutral" } : phase.kind === "failed" ? { key: "failed", label: failureLabel, icon: /* @__PURE__ */ jsx(CircleExclamationPoint, { size: ICON, strokeWidth: 1.75 }), tone: "danger" } : { key: `state:${activeState.id}`, label: activeState.label, icon: activeState.icon, tone: activeState.tone ?? "neutral" };
  const draw = view.tone === "success" && !reduced;
  return /* @__PURE__ */ jsxs(Fragment2, { children: [
    /* @__PURE__ */ jsxs(motion2.button, { ...props, ref: buttonRef, type: props.type ?? "button", tabIndex: props.tabIndex ?? 0, className: [action_swap_default.button, action_swap_default[size], action_swap_default[view.tone], className].filter(Boolean).join(" "), style: { ...style, "--fold": fold }, disabled: inactive, "aria-disabled": working || void 0, "aria-busy": working || void 0, "aria-label": view.label || activeState.label, "data-phase": phase.kind, onClick: advance, custom: buttonRef, variants: pressVariants, whileTap: reduced || inactive || working ? void 0 : "pressed", transition: motionTokens.spring.snappy, children: [
      /* @__PURE__ */ jsx(motion2.span, { className: action_swap_default.icon, "aria-hidden": "true", initial: false, animate: { width: view.icon ? ICON : 0 }, transition: reduced ? { duration: 0 } : motionTokens.spring.smooth, children: /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: view.icon ? /* @__PURE__ */ jsx(motion2.span, { className: action_swap_default.iconPhase, "data-tone": view.tone, initial: reduced ? fadeIn : draw ? successIn : iconIn, animate: draw ? successRest : rest, exit: reduced ? fadeOut : iconOut, transition: reduced ? instant : draw ? successEnter : iconEnter, children: view.icon }, view.key) : null }) }),
      /* @__PURE__ */ jsx(MorphText, { text: view.label, gap: Boolean(view.icon) && view.label.length > 0, reduced })
    ] }),
    /* @__PURE__ */ jsx("span", { className: action_swap_default.srOnly, role: "status", "aria-live": "polite", children: spoken })
  ] });
}
var action_swap_default2 = ActionSwap;

// ../out/vendor/npm/react-dom-client.mjs
var D = globalThis.__ARC__.dom;
var createRoot = D.createRoot;
var hydrateRoot = D.hydrateRoot;
var flushSync = D.flushSync;
var react_dom_client_default = { createRoot: D.createRoot, hydrateRoot: D.hydrateRoot };

// arc-entry:entry:action-swap
var D2 = ActionSwap ?? action_swap_default2;
var entry_action_swap_default = D2;
function __fn(v) {
  if (v && typeof v === "object") {
    if (typeof v.__fn === "string") {
      try {
        return new Function("return (" + v.__fn + ")")();
      } catch (e) {
        return v;
      }
    }
    if (typeof v.__el === "string") {
      try {
        return new Function("h", "NS", "return (" + v.__el + ");")(createElement, action_swap_exports);
      } catch (e) {
        return v;
      }
    }
  }
  return v;
}
function __live(o) {
  if (!o || typeof o !== "object") return o;
  if (Array.isArray(o)) return o.map(__live);
  if (typeof o.__fn === "string" || typeof o.__el === "string") return __fn(o);
  const r = {};
  for (const k of Object.keys(o)) r[k] = __live(o[k]);
  return r;
}
var __props = __live({ "states": [{ "id": "draft", "label": "Send email", "tone": "neutral" }, { "id": "sent", "label": "Sent", "tone": "success", "holdFor": 1400 }], "defaultValue": "draft" });
function mount(el, extra) {
  if (typeof D2 !== "function" && !(D2 && typeof D2 === "object" && D2.$$typeof)) throw new Error("no component export: " + String(D2));
  const p = Object.assign({}, __props, extra || {});
  const root = createRoot(el);
  root.render(createElement(D2, p));
  root.unmountArc = () => {
    try {
      root.unmount();
    } catch (e) {
    }
  };
  return root;
}
export {
  ActionSwap,
  entry_action_swap_default as default,
  mount
};
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/circle-exclamation-point.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.71.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
