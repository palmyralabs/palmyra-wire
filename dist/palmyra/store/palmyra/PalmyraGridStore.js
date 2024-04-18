var d = Object.defineProperty;
var c = (r, i, t) => i in r ? d(r, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[i] = t;
var l = (r, i, t) => (c(r, typeof i != "symbol" ? i + "" : i, t), t);
import { PalmyraAbstractStore as u } from "./AbstractStore.js";
class f extends u {
  constructor(t, n, o, e) {
    super(t, n, o);
    l(this, "idProperty");
    this.idProperty = e;
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
  query(t) {
    var n = this.target + this.queryUrl(), o = this.formatUrl(n, t);
    const s = { params: h(t) };
    return this.isUrlValid(o) || this.getClient().get(o, s).then((a) => a.data).catch((a) => {
      this.handleError(t, a);
    });
  }
  export(t) {
    var n = this.target + this.queryUrl(), o = this.formatUrl(n, t);
    const e = h(t);
    e._format = t.format;
    const s = new URLSearchParams(e).toString();
    window.open(o + "?" + s, "_blank");
  }
  queryLayout(t) {
    var n = this.target + this.queryUrl(), o = this.formatUrl(n, t);
    return this.isUrlValid(o) || this.getClient().get(o, {
      headers: {
        action: "schema"
      }
    }).then((e) => e.data).catch((e) => {
      this.handleError(t, e);
    });
  }
  get(t, n) {
    var o = this.target + this.queryUrl(), e = this.formatUrl(o, t);
    return this.isUrlValid(e) || this.getClient().get(e).then((s) => {
      var a;
      return (a = s.data) == null ? void 0 : a.result;
    }).catch((s) => {
      this.handleError(t, s);
    });
  }
  getIdentity(t) {
    throw new Error("Method not implemented.");
  }
  getIdProperty() {
    return "id";
  }
}
function h(r) {
  const i = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((s) => (r.sortOrder[s] === "asc" ? "+" : "-") + s), t = !!r.total, n = r.filter || {}, o = r.offset || 0, e = r.limit || 15;
  return { ...n, _total: t, _orderBy: i.length ? i.join(",") : [], _offset: o, _limit: e };
}
export {
  f as PalmyraGridStore
};
