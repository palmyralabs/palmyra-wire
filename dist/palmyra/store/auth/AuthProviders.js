var t = Object.defineProperty;
var o = (s, e, r) => e in s ? t(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r;
var a = (s, e, r) => (o(s, typeof e != "symbol" ? e + "" : e, r), r);
class i {
  constructor() {
    a(this, "username");
    a(this, "password");
  }
  BasicAuthProvider(e, r) {
    this.username = e, this.password = r;
  }
  decorate(e) {
  }
}
class u {
  decorate(e) {
  }
}
export {
  i as BasicAuthProvider,
  u as OauthProvider
};
