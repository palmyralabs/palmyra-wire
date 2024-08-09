var s = Object.defineProperty;
var n = (r, e, t) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var o = (r, e, t) => n(r, typeof e != "symbol" ? e + "" : e, t);
class l {
  constructor(e) {
    o(this, "root");
    this.root = e;
  }
  query(e) {
    throw new Error("Method not implemented.");
  }
  queryLayout(e) {
    throw new Error("Method not implemented.");
  }
  get(e) {
    throw new Error("Method not implemented.");
  }
  getRoot() {
    return Promise.resolve(this.root);
  }
  getChildren(e) {
    if (e.children) {
      const t = {
        result: e.children
      };
      return Promise.resolve(t);
    } else
      return Promise.reject({
        message: "Empty Children"
      });
  }
  getIdProperty() {
    return "id";
  }
}
export {
  l as default
};
