function(__module,__exports,__require){
"use strict";
function __m(e, t) {
  "use strict";
  let r;
  Object.defineProperty(t, "__esModule", { value: true });
  var n = {
    getAssetToken: function() {
      return o;
    },
    getAssetTokenQuery: function() {
      return i;
    },
    getDeploymentId: function() {
      return u;
    },
    getDeploymentIdQuery: function() {
      return l;
    }
  };
  for (var a in n) Object.defineProperty(t, a, { enumerable: true, get: n[a] });
  function u() {
    return r;
  }
  function l(e2 = false) {
    return r ? `${e2 ? "&" : "?"}dpl=${r}` : "";
  }
  function o() {
    return false;
  }
  function i(e2 = false) {
    return "";
  }
  r = document.documentElement.dataset.dplId, delete document.documentElement.dataset.dplId;
}

__m(__module,__exports,__require);
}