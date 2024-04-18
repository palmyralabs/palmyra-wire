import { PalmyraGridStore as l } from "./PalmyraGridStore.js";
class o extends l {
  constructor(t, s, i, e) {
    super(t, s, i, e);
  }
  save(t, s) {
    var i = this.target + this.postUrl(), e = this.formatUrl(i, s);
    return this.isUrlValid(e) || this.getClient().post(e, t, { headers: { action: "save" } }).then((r) => {
      var a;
      return (a = r.data) == null ? void 0 : a.result;
    }).catch((r) => {
      this.handleError(s, r);
    });
  }
  post(t, s) {
    var i = this.target + this.postUrl(), e = this.formatUrl(i, s);
    return this.isUrlValid(e) || this.getClient().post(e, t).then((r) => {
      var a;
      return (a = r.data) == null ? void 0 : a.result;
    }).catch((r) => {
      this.handleError(s, r);
    });
  }
  put(t, s) {
    var i = this.target + this.putUrl(), e = this.formatUrl(i, s);
    return this.isUrlValid(e) || this.getClient().put(e, t).then((r) => {
      var a;
      return (a = r.data) == null ? void 0 : a.result;
    }).catch((r) => {
      this.handleError(s, r);
    });
  }
  remove(t, s) {
    var i = this.target + this.deleteUrl(), e = this.formatUrl(i, t);
    return this.isUrlValid(e) || this.getClient().delete(e, { data: {} }).then((r) => {
      var a;
      return (a = r.data) == null ? void 0 : a.result;
    }).catch((r) => {
      this.handleError(s, r);
    });
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
}
export {
  o as PalmyraDataStore
};
