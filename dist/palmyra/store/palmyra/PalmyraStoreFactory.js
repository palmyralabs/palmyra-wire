var i = Object.defineProperty;
var l = (o, r, t) => r in o ? i(o, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[r] = t;
var s = (o, r, t) => (l(o, typeof r != "symbol" ? r + "" : r, t), t);
import { PalmyraChartStore as n } from "./PalmyraChartStore.js";
import { PalmyraDataStore as m } from "./PalmyraDataStore.js";
import { PalmyraGridStore as y } from "./PalmyraGridStore.js";
import { PalmyraLookupStore as h } from "./PalmyraLookupStore.js";
import { PalmyraTreeStore as p } from "./PalmyraTreeStore.js";
class u {
  constructor(r) {
    s(this, "baseUrl", "/palmyra");
    s(this, "errorHandlerFactory");
    this.baseUrl = r.baseUrl || "/palmyra", this.errorHandlerFactory = r.errorHandlerFactory;
  }
  getGridStore(r, t, e) {
    var a = { target: this.baseUrl, ...r };
    return new y(a, t, this.errorHandlerFactory, e);
  }
  getFormStore(r, t, e) {
    var a = { target: this.baseUrl, ...r };
    return new m(a, t, this.errorHandlerFactory, e);
  }
  getChartStore(r, t, e) {
    var a = { target: this.baseUrl, ...r };
    return new n(a, t, this.errorHandlerFactory, e);
  }
  getLookupStore(r, t, e) {
    var a = { target: this.baseUrl, ...r };
    return new h(a, t, this.errorHandlerFactory, e);
  }
  getTreeStore(r, t) {
    var e = { target: this.baseUrl, ...r };
    return new p(e, t, this.errorHandlerFactory);
  }
}
export {
  u as PalmyraStoreFactory
};
