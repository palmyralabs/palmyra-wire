const c = (e, n) => {
  var r = e.indexOf(n);
  return r >= 0;
}, i = (e) => c(e, "."), o = function(e, n) {
  return n ? typeof e == "string" && n instanceof Array ? e.replace(/({\d})/g, function(r) {
    let t = r.replace(/{/, "").replace(/}/, "");
    return n[t];
  }) : typeof e == "string" && n instanceof Object ? Object.keys(n).length === 0 ? e : e.replace(/({([^}]+)})/g, function(r) {
    let t = r.replace(/{/, "").replace(/}/, "");
    return n[t] ? n[t] : r;
  }) : e : e;
}, f = function(e) {
  return typeof e == "string" && (e.search(/({([^}]+)})/g) > 0 || e.search(/({\d})/g) > 0);
};
function u(e) {
  return Object.values(e).join();
}
export {
  o as StringFormat,
  u as concatValues,
  c as hasChar,
  i as hasDot,
  f as hasUnfilledParameter
};
