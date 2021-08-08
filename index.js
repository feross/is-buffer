/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

/** @returns {boolean} true if obj is a Buffer */
export default function isBuffer (obj) {
  return typeof obj?.constructor?.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}
