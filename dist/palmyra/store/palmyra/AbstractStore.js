var d = Object.defineProperty;
var p = (o, t, e) => t in o ? d(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var s = (o, t, e) => (p(o, typeof t != "symbol" ? t + "" : t, e), e);
import i from "axios";
import { StringFormat as r, hasUnfilledParameter as u } from "../../utils/StringUtil.js";
class m {
  constructor(t, e, a) {
    s(this, "options");
    s(this, "target");
    s(this, "endPoint");
    s(this, "axiosInstance");
    this.axiosInstance = i.create({
      timeout: 5e3
    });
    const l = a || (() => (n) => {
      const c = n.request.responseURL || n.config.url;
      console.log(n.response.status + ":" + n.code + "-requestUrl:" + c), console.log(n.message + " -- response data:'" + n.response.data + "'");
    });
    i.interceptors.response.use(void 0, function(n) {
      return n.handleGlobally = l(n), Promise.reject(n);
    }), this.options = t, this.target = t.target, this.endPoint = e;
  }
  getClient() {
    return i;
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
    return e ? r(r(t, e.options), e.endPointVars) : t;
  }
  isUrlValid(t) {
    return u(t) ? Promise.reject("endPoint options yet to be populated " + t) : !1;
  }
  handleError(t, e) {
    t.errorHandler && t.errorHandler(e) || e.handleGlobally(e);
  }
}
export {
  m as PalmyraAbstractStore
};
