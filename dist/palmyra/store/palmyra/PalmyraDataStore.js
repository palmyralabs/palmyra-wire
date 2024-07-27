import { PalmyraGridStore as i } from "./PalmyraGridStore.js";
class o extends i {
  constructor(s, a, l, r) {
    super(s, a, l, r);
  }
  save(s, a) {
    var l = this.target + this.postUrl(), r = this.formatUrl(l, a);
    return this.isUrlValid(r) || this.getClient().post(r, s, { headers: { action: "save" } }).then((t) => {
      var e;
      return (e = t.data) == null ? void 0 : e.result;
    }).catch((t) => this.handleError(t, a));
  }
  post(s, a) {
    var l = this.target + this.postUrl(), r = this.formatUrl(l, a);
    return this.isUrlValid(r) || this.getClient().post(r, s).then((t) => {
      var e;
      return (e = t.data) == null ? void 0 : e.result;
    }).catch((t) => this.handleError(t, a));
  }
  put(s, a) {
    var l = this.target + this.putUrl(), r = this.formatUrl(l, a);
    return this.isUrlValid(r) || this.getClient().put(r, s).then((t) => {
      var e;
      return (e = t.data) == null ? void 0 : e.result;
    }).catch((t) => this.handleError(t, a));
  }
  remove(s, a) {
    var l = this.target + this.deleteUrl(), r = this.formatUrl(l, s);
    return this.isUrlValid(r) || this.getClient().delete(r, { data: {} }).then((t) => {
      var e;
      return (e = t.data) == null ? void 0 : e.result;
    }).catch((t) => this.handleError(t, a));
  }
}
export {
  o as PalmyraDataStore
};
