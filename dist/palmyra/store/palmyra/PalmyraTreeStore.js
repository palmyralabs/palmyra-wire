var h = Object.defineProperty;
var l = (e, t, r) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var i = (e, t, r) => (l(e, typeof t != "symbol" ? t + "" : t, r), r);
import { PalmyraAbstractStore as c } from "./AbstractStore.js";
class p extends c {
  constructor(r, a, s, n) {
    super(r, a, s);
    i(this, "idProperty");
    this.idProperty = n || "id";
  }
  getChildren(r) {
    const a = { filter: { parent: r.parent } };
    return this.query(a);
  }
  getRoot() {
    const r = {};
    return this.query(r);
  }
  query(r) {
    var a = this.target + this.queryUrl(), s = this.formatUrl(a, r);
    const u = { params: this.convertQueryParams(r), headers: { action: "nativeQuery" } };
    return this.getClient().get(s, u).then((o) => o.data).catch((o) => this.handleError(o, r));
  }
}
export {
  p as PalmyraTreeStore
};
