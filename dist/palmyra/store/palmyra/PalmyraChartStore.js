var n = Object.defineProperty;
var u = (a, t, r) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[t] = r;
var i = (a, t, r) => (u(a, typeof t != "symbol" ? t + "" : t, r), r);
import { PalmyraAbstractStore as c } from "./AbstractStore.js";
class P extends c {
  constructor(r, s, e, l) {
    super(r, s, e);
    i(this, "idProperty");
    this.idProperty = l;
  }
  query(r) {
    var s = this.target + this.queryUrl(), e = this.formatUrl(s, r);
    const m = { params: this.convertQueryParams(r) };
    return this.getClient().get(e, m).then((o) => {
      var h;
      return (h = o.data) == null ? void 0 : h.result;
    }).catch((o) => {
      this.handleError(r, o);
    });
  }
}
export {
  P as PalmyraChartStore
};
