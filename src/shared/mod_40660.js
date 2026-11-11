function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { q: () => n });
  class n {
    constructor() {
      this.isResolved = false;
    }
    get finished() {
      return this._finished || (this._finished = this.isResolved ? Promise.resolve() : new Promise((t2) => {
        this._resolve = t2;
      })), this._finished;
    }
    updateFinished() {
      this._finished = this._resolve = void 0, this.isResolved = false;
    }
    notifyFinished() {
      this.isResolved = true, this._resolve?.();
    }
    then(t2, e2) {
      return this.finished.then(t2, e2);
    }
  }
}

__m(__module,__exports,__require);
}