"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.split");

/**
 * Generate uuid method
 * 生成 uuid 方法
 * @param len Generate the length of uuid, the default length 16 生成 uuid 的长度，默认长度 16
 * @param radix Generate the hexadecimal of uuid, the default hexadecimal 生成 uuid 的进制，默认 16 进制
 */
var uuid = function uuid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  var uuid = [],
      i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    // rfc4122, version 4 form
    var r; // rfc4122 requires these characters

    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4"; // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }

  return uuid.join("");
};

var _default = uuid;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dWlkL2luZGV4LnRzIl0sIm5hbWVzIjpbInV1aWQiLCJsZW4iLCJyYWRpeCIsImNoYXJzIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiTWF0aCIsInJhbmRvbSIsInIiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7O0FBTUEsSUFBTUEsSUFBSSxHQUFHLGdCQUF3QztBQUFBLE1BQTlCQyxHQUE4Qix1RUFBeEIsRUFBd0I7QUFBQSxNQUFwQkMsS0FBb0IsdUVBQVosRUFBWTtBQUNuRCxNQUFJQyxLQUFLLEdBQUcsaUVBQWlFQyxLQUFqRSxDQUF1RSxFQUF2RSxDQUFaO0FBQ0EsTUFBSUosSUFBSSxHQUFHLEVBQVg7QUFBQSxNQUFlSyxDQUFmO0FBQ0FILEVBQUFBLEtBQUssR0FBR0EsS0FBSyxJQUFJQyxLQUFLLENBQUNHLE1BQXZCOztBQUVBLE1BQUlMLEdBQUosRUFBUztBQUNQO0FBQ0EsU0FBS0ksQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHSixHQUFoQixFQUFxQkksQ0FBQyxFQUF0QjtBQUEwQkwsTUFBQUEsSUFBSSxDQUFDSyxDQUFELENBQUosR0FBVUYsS0FBSyxDQUFDLElBQUlJLElBQUksQ0FBQ0MsTUFBTCxLQUFnQk4sS0FBckIsQ0FBZjtBQUExQjtBQUNELEdBSEQsTUFHTztBQUNMO0FBQ0EsUUFBSU8sQ0FBSixDQUZLLENBSUw7O0FBQ0FULElBQUFBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUEsSUFBSSxDQUFDLEVBQUQsQ0FBSixHQUFXQSxJQUFJLENBQUMsRUFBRCxDQUFKLEdBQVdBLElBQUksQ0FBQyxFQUFELENBQUosR0FBVyxHQUEzQztBQUNBQSxJQUFBQSxJQUFJLENBQUMsRUFBRCxDQUFKLEdBQVcsR0FBWCxDQU5LLENBUUw7QUFDQTs7QUFDQSxTQUFLSyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcsRUFBaEIsRUFBb0JBLENBQUMsRUFBckIsRUFBeUI7QUFDdkIsVUFBSSxDQUFDTCxJQUFJLENBQUNLLENBQUQsQ0FBVCxFQUFjO0FBQ1pJLFFBQUFBLENBQUMsR0FBRyxJQUFJRixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsRUFBeEI7QUFDQVIsUUFBQUEsSUFBSSxDQUFDSyxDQUFELENBQUosR0FBVUYsS0FBSyxDQUFFRSxDQUFDLElBQUksRUFBTixHQUFhSSxDQUFDLEdBQUcsR0FBTCxHQUFZLEdBQXhCLEdBQThCQSxDQUEvQixDQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU9ULElBQUksQ0FBQ1UsSUFBTCxDQUFVLEVBQVYsQ0FBUDtBQUNELENBM0JEOztlQTZCZVYsSSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2VuZXJhdGUgdXVpZCBtZXRob2RcbiAqIOeUn+aIkCB1dWlkIOaWueazlVxuICogQHBhcmFtIGxlbiBHZW5lcmF0ZSB0aGUgbGVuZ3RoIG9mIHV1aWQsIHRoZSBkZWZhdWx0IGxlbmd0aCAxNiDnlJ/miJAgdXVpZCDnmoTplb/luqbvvIzpu5jorqTplb/luqYgMTZcbiAqIEBwYXJhbSByYWRpeCBHZW5lcmF0ZSB0aGUgaGV4YWRlY2ltYWwgb2YgdXVpZCwgdGhlIGRlZmF1bHQgaGV4YWRlY2ltYWwg55Sf5oiQIHV1aWQg55qE6L+b5Yi277yM6buY6K6kIDE2IOi/m+WItlxuICovXG5jb25zdCB1dWlkID0gZnVuY3Rpb24gKGxlbiA9IDE2LCByYWRpeCA9IDE2KTogc3RyaW5nIHtcbiAgdmFyIGNoYXJzID0gXCIwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLnNwbGl0KFwiXCIpO1xuICB2YXIgdXVpZCA9IFtdLCBpO1xuICByYWRpeCA9IHJhZGl4IHx8IGNoYXJzLmxlbmd0aDtcblxuICBpZiAobGVuKSB7XG4gICAgLy8gQ29tcGFjdCBmb3JtXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB1dWlkW2ldID0gY2hhcnNbMCB8IE1hdGgucmFuZG9tKCkgKiByYWRpeF07XG4gIH0gZWxzZSB7XG4gICAgLy8gcmZjNDEyMiwgdmVyc2lvbiA0IGZvcm1cbiAgICB2YXIgcjtcblxuICAgIC8vIHJmYzQxMjIgcmVxdWlyZXMgdGhlc2UgY2hhcmFjdGVyc1xuICAgIHV1aWRbOF0gPSB1dWlkWzEzXSA9IHV1aWRbMThdID0gdXVpZFsyM10gPSBcIi1cIjtcbiAgICB1dWlkWzE0XSA9IFwiNFwiO1xuXG4gICAgLy8gRmlsbCBpbiByYW5kb20gZGF0YS4gIEF0IGk9PTE5IHNldCB0aGUgaGlnaCBiaXRzIG9mIGNsb2NrIHNlcXVlbmNlIGFzXG4gICAgLy8gcGVyIHJmYzQxMjIsIHNlYy4gNC4xLjVcbiAgICBmb3IgKGkgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgaWYgKCF1dWlkW2ldKSB7XG4gICAgICAgIHIgPSAwIHwgTWF0aC5yYW5kb20oKSAqIDE2O1xuICAgICAgICB1dWlkW2ldID0gY2hhcnNbKGkgPT0gMTkpID8gKHIgJiAweDMpIHwgMHg4IDogcl07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHV1aWQuam9pbihcIlwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXVpZDsiXX0=