var o = Object.defineProperty;
var c = (r, a, t) => a in r ? o(r, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[a] = t;
var n = (r, a, t) => (c(r, typeof a != "symbol" ? a + "" : a, t), t);
import l from "axios";
class b {
  constructor(a) {
    n(this, "baseUrl");
    n(this, "instance");
    n(this, "globalHandleError", (a) => {
      console.error(a);
    });
    var t = a || "";
    this.baseUrl = t, this.instance = l.create({
      baseURL: t
    });
  }
  query(a, t, s) {
    this.instance.get(a, t).then((e) => {
      s(e.data);
    }).catch((e) => {
      this.globalHandleError(e);
    });
  }
  save(a, t, s) {
    this.instance.post(a, t).then((e) => {
      s(e.data);
    }).catch((e) => {
      this.globalHandleError(e);
    });
  }
  update(a, t, s) {
    this.instance.put(a, t).then((e) => {
      s(e.data);
    }).catch((e) => {
      this.globalHandleError(e);
    });
  }
}
export {
  b as default
};
