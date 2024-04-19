var a = Object.defineProperty;
var g = (o, t, e) => t in o ? a(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var s = (o, t, e) => (g(o, typeof t != "symbol" ? t + "" : t, e), e);
import d from "axios";
import { StringFormat as c, hasUnfilledParameter as u } from "../../utils/StringUtil.js";
class m {
  constructor(t, e, r) {
    s(this, "options");
    s(this, "target");
    s(this, "endPoint");
    s(this, "axiosInstance");
    this.axiosInstance = d.create({
      timeout: 5e3
    });
    const i = r || (() => (n) => {
      const l = n.request.responseURL || n.config.url;
      console.log(n.response.status + ":" + n.code + "-requestUrl:" + l), console.log(n.message + " -- response data:'" + n.response.data + "'");
    });
    d.interceptors.response.use(void 0, function(n) {
      return n.handleGlobally = i(n), Promise.reject(n);
    }), this.options = t, this.target = t.target, this.endPoint = e;
  }
  queryUrl() {
    return typeof this.endPoint == "string" ? this.endPoint : this.endPoint.query;
  }
  getUrl() {
    return typeof this.endPoint == "string" ? this.endPoint : this.endPoint.get;
  }
  postUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.post ? t.post : t.get;
  }
  putUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.put;
  }
  deleteUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.delete ? t.delete : t.put;
  }
  getClient() {
    return d;
  }
  getEndPoint() {
    return this.endPoint;
  }
  getOptions() {
    return this.options;
  }
  getTarget() {
    return this.target;
  }
  formatUrl(t, e) {
    return e ? c(c(t, e.options), e.endPointVars) : t;
  }
  isUrlValid(t) {
    return u(t) ? Promise.reject("endPoint options yet to be populated " + t) : !1;
  }
  handleError(t, e) {
    t.errorHandler && t.errorHandler(e) || e.handleGlobally(e);
  }
  convertQueryParams(t, e = 15) {
    const r = Object.keys((t == null ? void 0 : t.sortOrder) || {}).map((p) => (t.sortOrder[p] === "asc" ? "+" : "-") + p), i = !!t.total, n = t.filter || {}, l = t.offset || 0, f = t.limit || e;
    return { ...n, _total: i, _orderBy: r.length ? r.join(",") : [], _offset: l, _limit: f };
  }
}
export {
  m as PalmyraAbstractStore
};
