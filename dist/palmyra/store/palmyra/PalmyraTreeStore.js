var a = Object.defineProperty;
var h = (r, e, t) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var l = (r, e, t) => (h(r, typeof e != "symbol" ? e + "" : e, t), t);
import { PalmyraAbstractStore as d } from "./AbstractStore.js";
class g extends d {
  constructor(t, o, n, s) {
    super(t, o, n);
    l(this, "idProperty");
    this.idProperty = s;
  }
  getChildren(t) {
    const o = { filter: { parent: t.parent } };
    return this.query(o);
  }
  getRoot() {
    const t = {};
    return this.query(t);
  }
  queryUrl() {
    const t = this.getEndPoint();
    if (typeof t == "string")
      return t;
    t.query;
  }
  query(t) {
    var o = this.target + this.queryUrl(), n = this.formatUrl(o, t);
    const i = { params: u(t), headers: { action: "nativeQuery" } };
    return this.getClient().get(n, i).then((c) => c.data).catch((c) => {
      this.handleError(t, c);
    });
  }
}
function u(r) {
  const e = Object.keys((r == null ? void 0 : r.sortOrder) || {}).map((i) => (r.sortOrder[i] === "asc" ? "+" : "-") + i), t = !!r.total, o = r.filter || {}, n = r.offset || 0, s = r.limit || 15;
  return { ...o, _total: t, _orderBy: e.length ? e.join(",") : [], _offset: n, _limit: s };
}
export {
  g as PalmyraTreeStore
};
