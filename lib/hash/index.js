"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Hash the string and return the value as a number
 * 对字符串进行哈希处理，返回值为数字
 * @param str String to be hashed 待哈希的字符串
 */
var hash = function hash(str) {
  var hash = 0,
      i,
      chr;

  if (str.length === 0) {
    return hash;
  }

  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};

var _default = hash;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oYXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbImhhc2giLCJzdHIiLCJpIiwiY2hyIiwibGVuZ3RoIiwiY2hhckNvZGVBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7OztBQUtBLElBQU1BLElBQUksR0FBRyxjQUFVQyxHQUFWLEVBQStCO0FBQzFDLE1BQUlELElBQUksR0FBRyxDQUFYO0FBQUEsTUFBY0UsQ0FBZDtBQUFBLE1BQWlCQyxHQUFqQjs7QUFDQSxNQUFJRixHQUFHLENBQUNHLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNwQixXQUFPSixJQUFQO0FBQ0Q7O0FBQ0QsT0FBS0UsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHRCxHQUFHLENBQUNHLE1BQXBCLEVBQTRCRixDQUFDLEVBQTdCLEVBQWlDO0FBQy9CQyxJQUFBQSxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0ksVUFBSixDQUFlSCxDQUFmLENBQU47QUFDQUYsSUFBQUEsSUFBSSxHQUFJLENBQUNBLElBQUksSUFBSSxDQUFULElBQWNBLElBQWYsR0FBdUJHLEdBQTlCO0FBQ0FILElBQUFBLElBQUksSUFBSSxDQUFSLENBSCtCLENBR3BCO0FBQ1o7O0FBQ0QsU0FBT0EsSUFBUDtBQUNELENBWEQ7O2VBYWVBLEkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhhc2ggdGhlIHN0cmluZyBhbmQgcmV0dXJuIHRoZSB2YWx1ZSBhcyBhIG51bWJlclxuICog5a+55a2X56ym5Liy6L+b6KGM5ZOI5biM5aSE55CG77yM6L+U5Zue5YC85Li65pWw5a2XXG4gKiBAcGFyYW0gc3RyIFN0cmluZyB0byBiZSBoYXNoZWQg5b6F5ZOI5biM55qE5a2X56ym5LiyXG4gKi9cbmNvbnN0IGhhc2ggPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICBsZXQgaGFzaCA9IDAsIGksIGNocjtcbiAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hyO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cbiAgcmV0dXJuIGhhc2g7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2g7Il19