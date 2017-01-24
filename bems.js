!function(root, name, make) {
  typeof module != 'undefined' && module.exports ? module.exports = make() : root[name] = make()
}(this, 'bems', function() {

  function B(c) {
    return c.split('--')[0].split('__')[0]
  }

  function E(c) {
    return c.split('--')[0].split('__')[1] || ''
  }

  function M(c) {
    return c.split('--')[1] || ''
  }

  function b(B) {
    return [
      '.' + B,
      '[class^="' + B + '__"]',
      '[class*=" ' + B + '__"]',
      '[class^="' + B + '--"]',
      '[class*=" ' + B + '--"]'
    ].join()
  }

  function e(E) {
    return [
      '[class*="__' + E + '--"]',
      '[class*="__' + E + ' "]',
      '[class$="__' + E + '"]'
    ].join()
  }

  function m(M) {
    return [
      '[class*="--' + M + ' "]',
      '[class$="--' + M + '"]'
    ].join()
  }

  return {
    B: B,
    E: E,
    M: M,
    b: b,
    e: e,
    m: m
  }
});
