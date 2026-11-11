function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { m: () => a });
  var r = n(28819);
  class o {
    constructor() {
      this.componentControls = /* @__PURE__ */ new Set();
    }
    subscribe(e2) {
      return this.componentControls.add(e2), () => this.componentControls.delete(e2);
    }
    start(e2, t2) {
      this.componentControls.forEach((n2) => {
        n2.start(e2.nativeEvent || e2, t2);
      });
    }
    cancel() {
      this.componentControls.forEach((e2) => {
        e2.cancel();
      });
    }
    stop() {
      this.componentControls.forEach((e2) => {
        e2.stop();
      });
    }
  }
  let l = () => new o();
  function a() {
    return (0, r.M)(l);
  }
}

__m(__module,__exports,__require);
}