function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { v: () => s });
  var n = i(78170);
  class s {
    constructor() {
      this.subscriptions = [];
    }
    add(t2) {
      return (0, n.Kq)(this.subscriptions, t2), () => this.remove(t2);
    }
    remove(t2) {
      (0, n.Ai)(this.subscriptions, t2);
    }
    notify(t2, e2, i2) {
      let n2 = this.subscriptions.length;
      if (n2)
        if (1 === n2) this.subscriptions[0](t2, e2, i2);
        else
          for (let s2 = 0; s2 < n2; s2++) {
            let n3 = this.subscriptions[s2];
            n3 && n3(t2, e2, i2);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
}

__m(__module,__exports,__require);
}