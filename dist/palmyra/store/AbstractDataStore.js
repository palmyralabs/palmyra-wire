var c = Object.defineProperty;
var o = (r, t, a) => t in r ? c(r, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[t] = a;
var n = (r, t, a) => (o(r, typeof t != "symbol" ? t + "" : t, a), a);
import i from "axios";
class b {
  constructor(t) {
    n(this, "baseUrl");
    n(this, "instance");
    n(this, "globalHandleError", (t) => {
      console.error(t);
    });
    var a = t || "";
    this.baseUrl = a, this.instance = i.create({
      baseURL: a
    });
  }
  query(t, a, s) {
    this.instance.get(t, a).then((e) => {
      s(e.data);
    }).catch((e) => (this.globalHandleError(e), Promise.reject(e)));
  }
  save(t, a, s) {
    this.instance.post(t, a).then((e) => {
      s(e.data);
    }).catch((e) => (this.globalHandleError(e), Promise.reject(e)));
  }
  update(t, a, s) {
    this.instance.put(t, a).then((e) => {
      s(e.data);
    }).catch((e) => (this.globalHandleError(e), Promise.reject(e)));
  }
}
export {
  b as default
};
