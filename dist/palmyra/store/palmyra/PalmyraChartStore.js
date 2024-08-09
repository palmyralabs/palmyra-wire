var c = Object.defineProperty;
var n = (a, t, r) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[t] = r;
var h = (a, t, r) => n(a, typeof t != "symbol" ? t + "" : t, r);
import { PalmyraAbstractStore as u } from "./AbstractStore.js";
class P extends u {
  constructor(r, s, o, i) {
    super(r, s, o);
    h(this, "idProperty");
    this.idProperty = i || "id";
  }
  query(r) {
    var s = this.target + this.queryUrl(), o = this.formatUrl(s, r);
    const m = { params: this.convertQueryParams(r) };
    return this.getClient().get(o, m).then((e) => {
      var l;
      return (l = e.data) == null ? void 0 : l.result;
    }).catch((e) => this.handleError(e, r));
  }
}
export {
  P as PalmyraChartStore
};
