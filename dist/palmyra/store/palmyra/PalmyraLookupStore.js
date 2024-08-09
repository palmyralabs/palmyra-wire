var m = Object.defineProperty;
var c = (a, t, r) => t in a ? m(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[t] = r;
var l = (a, t, r) => c(a, typeof t != "symbol" ? t + "" : t, r);
import { PalmyraAbstractStore as n } from "./AbstractStore.js";
class d extends n {
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
