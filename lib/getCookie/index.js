"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es6.regexp.constructor");

/**
 * Get cookie value, null if none
 * 获取 cookie 值，没有则返回 null
 * @param name cookie name cookie 名称
 */
var getCookie = function getCookie(name) {
  var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  var arr = document.cookie.match(reg);

  if (arr && arr.length > 0) {
    return decodeURI(arr[2]);
  } else {
    return null;
  }
};

var _default = getCookie;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRDb29raWUvaW5kZXgudHMiXSwibmFtZXMiOlsiZ2V0Q29va2llIiwibmFtZSIsInJlZyIsIlJlZ0V4cCIsImFyciIsImRvY3VtZW50IiwiY29va2llIiwibWF0Y2giLCJsZW5ndGgiLCJkZWNvZGVVUkkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBVUMsSUFBVixFQUF1QztBQUN2RCxNQUFJQyxHQUFHLEdBQUcsSUFBSUMsTUFBSixDQUFXLFVBQVVGLElBQVYsR0FBaUIsZUFBNUIsQ0FBVjtBQUNBLE1BQUlHLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxNQUFULENBQWdCQyxLQUFoQixDQUFzQkwsR0FBdEIsQ0FBVjs7QUFFQSxNQUFJRSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0ksTUFBSixHQUFhLENBQXhCLEVBQTJCO0FBQ3pCLFdBQU9DLFNBQVMsQ0FBQ0wsR0FBRyxDQUFDLENBQUQsQ0FBSixDQUFoQjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FURDs7ZUFXZUosUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2V0IGNvb2tpZSB2YWx1ZSwgbnVsbCBpZiBub25lXG4gKiDojrflj5YgY29va2llIOWAvO+8jOayoeacieWImei/lOWbniBudWxsXG4gKiBAcGFyYW0gbmFtZSBjb29raWUgbmFtZSBjb29raWUg5ZCN56ewXG4gKi9cbmNvbnN0IGdldENvb2tpZSA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwgKVwiICsgbmFtZSArIFwiPShbXjtdKikoO3wkKVwiKTtcbiAgbGV0IGFyciA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChyZWcpO1xuXG4gIGlmIChhcnIgJiYgYXJyLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJKGFyclsyXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29va2llOyJdfQ==