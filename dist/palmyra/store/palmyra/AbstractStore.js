var g = Object.defineProperty;
var u = (o, t, e) => t in o ? g(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var s = (o, t, e) => u(o, typeof t != "symbol" ? t + "" : t, e);
import d from "axios";
import { StringFormat as p, hasUnfilledParameter as h } from "../../utils/StringUtil.js";
class j {
  constructor(t, e, i) {
    s(this, "options");
    s(this, "target");
    s(this, "endPoint");
    s(this, "axiosInstance");
    this.axiosInstance = d.create({
      timeout: 5e3
    });
    const r = i || (() => (n) => {
      const l = n.request.responseURL || n.config.url;
      console.log(n.response.status + ":" + n.code + "-requestUrl:" + l), console.log(n.message + " -- response data:'" + n.response.data + "'");
    });
    d.interceptors.response.use(void 0, function(n) {
      return n.handleGlobally = r(n), Promise.reject(n);
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
    return e ? p(p(t, e.options), e.endPointVars) : t;
  }
  isUrlValid(t) {
    return h(t) ? Promise.reject("endPoint options yet to be populated " + t) : !1;
  }
  handleError(t, e) {
    return e != null && e.errorHandler && e.errorHandler(t) || t.handleGlobally(t), Promise.reject(t);
  }
  convertQueryParams(t, e = 15) {
    const i = (t == null ? void 0 : t.sortOrder) || {}, r = Object.keys(i).map((c) => (i[c] === "asc" ? "+" : "-") + c), n = !!t.total, l = t.filter || {}, a = t.offset || 0, f = t.limit || e;
    return { ...l, _total: n, _orderBy: r.length ? r.join(",") : [], _offset: a, _limit: f };
  }
}
export {
  j as PalmyraAbstractStore
};
