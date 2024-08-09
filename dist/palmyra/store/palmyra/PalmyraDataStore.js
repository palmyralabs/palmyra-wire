import { PalmyraGridStore as i } from "./PalmyraGridStore.js";
class n extends i {
  constructor(l, a, e, r) {
    super(l, a, e, r);
  }
  save(l, a) {
    var e = this.target + this.postUrl(), r = this.formatUrl(e, a);
    return this.isUrlValid(r) || this.getClient().post(r, l, { headers: { action: "save" } }).then((t) => {
      var s;
      return (s = t.data) == null ? void 0 : s.result;
    }).catch((t) => this.handleError(t, a));
  }
  post(l, a) {
    var e = this.target + this.postUrl(), r = this.formatUrl(e, a);
    return this.isUrlValid(r) || this.getClient().post(r, l).then((t) => {
      var s;
      return (s = t.data) == null ? void 0 : s.result;
    }).catch((t) => this.handleError(t, a));
  }
  put(l, a) {
    var e = this.target + this.putUrl(), r = this.formatUrl(e, a);
    return this.isUrlValid(r) || this.getClient().put(r, l).then((t) => {
      var s;
      return (s = t.data) == null ? void 0 : s.result;
    }).catch((t) => this.handleError(t, a));
  }
  remove(l, a) {
    var e = this.target + this.deleteUrl(), r = this.formatUrl(e, l);
    return this.isUrlValid(r) || this.getClient().delete(r, { data: {} }).then((t) => {
      var s;
      return (s = t.data) == null ? void 0 : s.result;
    }).catch((t) => this.handleError(t, a));
  }
}
export {
  n as PalmyraDataStore
};
