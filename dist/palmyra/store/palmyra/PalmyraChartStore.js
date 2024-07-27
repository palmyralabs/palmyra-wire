var n = Object.defineProperty;
var u = (a, t, r) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[t] = r;
var h = (a, t, r) => (u(a, typeof t != "symbol" ? t + "" : t, r), r);
import { PalmyraAbstractStore as c } from "./AbstractStore.js";
class P extends c {
  constructor(r, s, e, i) {
    super(r, s, e);
    h(this, "idProperty");
    this.idProperty = i || "id";
  }
  query(r) {
    var s = this.target + this.queryUrl(), e = this.formatUrl(s, r);
    const m = { params: this.convertQueryParams(r) };
    return this.getClient().get(e, m).then((o) => {
      var l;
      return (l = o.data) == null ? void 0 : l.result;
    }).catch((o) => this.handleError(o, r));
  }
}
export {
  P as PalmyraChartStore
};
