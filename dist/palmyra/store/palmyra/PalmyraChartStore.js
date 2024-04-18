var h = Object.defineProperty;
var a = (t, o, r) => o in t ? h(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r;
var d = (t, o, r) => (a(t, typeof o != "symbol" ? o + "" : o, r), r);
import { PalmyraAbstractStore as f } from "./AbstractStore.js";
class P extends f {
  constructor(r, e, n, i) {
    super(r, e, n);
    d(this, "idProperty");
    this.idProperty = i;
  }
  getEndPoint() {
    return this.endPoint;
  }
  queryUrl() {
    if (typeof this.endPoint == "string")
      return this.endPoint;
    this.endPoint.query;
  }
  getUrl() {
    if (typeof this.endPoint == "string")
      return this.endPoint;
    this.endPoint.get;
  }
  query(r) {
    var e = this.target + this.queryUrl(), n = this.formatUrl(e, r);
    const s = { params: p(r) };
    return this.getClient().get(n, s).then((l) => {
      var c;
      return (c = l.data) == null ? void 0 : c.result;
    }).catch((l) => {
      this.handleError(r, l);
    });
  }
}
function p(t) {
  const o = Object.keys((t == null ? void 0 : t.sortOrder) || {}).map((s) => (t.sortOrder[s] === "asc" ? "+" : "-") + s), r = !!t.total, e = t.filter || {}, n = t.offset || 0, i = t.limit || 15;
  return { ...e, _total: r, _offset: n, _limit: i, _orderBy: o.length ? o.join(",") : [] };
}
export {
  P as PalmyraChartStore
};
