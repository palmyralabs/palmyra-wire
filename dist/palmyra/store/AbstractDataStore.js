var c = Object.defineProperty;
var o = (r, t, e) => t in r ? c(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var n = (r, t, e) => o(r, typeof t != "symbol" ? t + "" : t, e);
import i from "axios";
class b {
  constructor(t) {
    n(this, "baseUrl");
    n(this, "instance");
    n(this, "globalHandleError", (t) => {
      console.error(t);
    });
    var e = t || "";
    this.baseUrl = e, this.instance = i.create({
      baseURL: e
    });
  }
  query(t, e, s) {
    this.instance.get(t, e).then((a) => {
      s(a.data);
    }).catch((a) => (this.globalHandleError(a), Promise.reject(a)));
  }
  save(t, e, s) {
    this.instance.post(t, e).then((a) => {
      s(a.data);
    }).catch((a) => (this.globalHandleError(a), Promise.reject(a)));
  }
  update(t, e, s) {
    this.instance.put(t, e).then((a) => {
      s(a.data);
    }).catch((a) => (this.globalHandleError(a), Promise.reject(a)));
  }
}
export {
  b as default
};
