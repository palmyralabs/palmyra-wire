var c = Object.defineProperty;
var h = (t, o, r) => o in t ? c(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r;
var d = (t, o, r) => (h(t, typeof o != "symbol" ? o + "" : o, r), r);
import { PalmyraAbstractStore as a } from "./AbstractStore.js";
class g extends a {
  constructor(r, n, e, i) {
    super(r, n, e);
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
    var n = this.target + this.queryUrl(), e = this.formatUrl(n, r);
    const s = { params: f(r) };
    return this.isUrlValid(e) || this.getClient().get(e, s).then((l) => l.data).catch((l) => {
      this.handleError(r, l);
    });
  }
}
function f(t) {
  const o = Object.keys((t == null ? void 0 : t.sortOrder) || {}).map((s) => (t.sortOrder[s] === "asc" ? "+" : "-") + s), r = !!t.total, n = t.filter || {}, e = t.offset || 0, i = t.limit || 15;
  return { ...n, _total: r, _orderBy: o.length ? o.join(",") : [], _offset: e, _limit: i };
}
export {
  g as PalmyraLookupStore
};
