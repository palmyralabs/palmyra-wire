var m = Object.defineProperty;
var n = (a, t, r) => t in a ? m(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[t] = r;
var l = (a, t, r) => (n(a, typeof t != "symbol" ? t + "" : t, r), r);
import { PalmyraAbstractStore as u } from "./AbstractStore.js";
class d extends u {
  constructor(r, o, s, i) {
    super(r, o, s);
    l(this, "idProperty");
    this.idProperty = i || "id";
  }
  query(r) {
    var o = this.target + this.queryUrl(), s = this.formatUrl(o, r);
    const h = { params: this.convertQueryParams(r) };
    return this.isUrlValid(s) || this.getClient().get(s, h).then((e) => e.data).catch((e) => this.handleError(e, r));
  }
}
export {
  d as PalmyraLookupStore
};
