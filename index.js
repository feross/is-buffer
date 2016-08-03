/**
 * Determine if an object is Buffer
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 * `npm install is-buffer`
 */

module.exports = function (obj) {
  return !!(obj != null &&
    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
      (obj.constructor &&
      typeof obj.constructor.isBuffer === 'function' &&
      obj.constructor.isBuffer(obj)) ||
      // Node v0.10
      checkSlowBuffer(obj)
    ))
}

function checkSlowBuffer (obj) {
  if (!obj.slice) return false;
  var buf = obj.slice(0, 0)
  return buf.constructor && buf.constructor.isBuffer &&
    buf.constructor.isBuffer(obj)
}
