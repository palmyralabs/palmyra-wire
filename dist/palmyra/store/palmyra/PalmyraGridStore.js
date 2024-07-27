var l = Object.defineProperty;
var u = (s, e, r) => e in s ? l(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r;
var h = (s, e, r) => (u(s, typeof e != "symbol" ? e + "" : e, r), r);
import { PalmyraAbstractStore as m } from "./AbstractStore.js";
class y extends m {
  constructor(r, i, a, t) {
    super(r, i, a);
    h(this, "idProperty");
    this.idProperty = t || "id";
  }
  getEndPoint() {
    return this.endPoint;
  }
  query(r) {
    var i = this.target + this.queryUrl(), a = this.formatUrl(i, r);
    const o = { params: this.convertQueryParams(r) };
    return this.isUrlValid(a) || this.getClient().get(a, o).then((n) => n.data).catch((n) => this.handleError(n, r));
  }
  export(r) {
    var i = this.target + this.queryUrl(), a = this.formatUrl(i, r);
    const t = this.convertQueryParams(r);
    t._format = r.format;
    const o = new URLSearchParams(t).toString();
    window.open(a + "?" + o, "_blank");
  }
  queryLayout(r) {
    var i = this.target + this.queryUrl(), a = this.formatUrl(i, r);
    return this.isUrlValid(a) || this.getClient().get(a, {
      headers: {
        action: "schema"
      }
    }).then((t) => t.data).catch((t) => this.handleError(t, r));
  }
  get(r, i) {
    var a = this.target + this.queryUrl(), t = this.formatUrl(a, r);
    return this.isUrlValid(t) || this.getClient().get(t).then((o) => {
      var n;
      return (n = o.data) == null ? void 0 : n.result;
    }).catch((o) => this.handleError(o, r));
  }
  getIdentity(r) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
export {
  y as PalmyraGridStore
};
