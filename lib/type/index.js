"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.to-string");

/**
 * Variable type check, return value is null, undefined, number, array, string, symbol, object
 * 变量类型检查，返回值为 null、undefined、number、array、string、symbol、object
 * @param variable Type of variable to check 待检查类型的变量
 */
var type = function type(variable) {
  var toString = {}.toString;
  return toString.call(variable).slice(8, -1).toLowerCase();
};

var _default = type;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlL2luZGV4LnRzIl0sIm5hbWVzIjpbInR5cGUiLCJ2YXJpYWJsZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztBQUtBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQVVDLFFBQVYsRUFBaUM7QUFDNUMsTUFBSUMsUUFBUSxHQUFHLEdBQUdBLFFBQWxCO0FBQ0EsU0FBT0EsUUFBUSxDQUFDQyxJQUFULENBQWNGLFFBQWQsRUFBd0JHLEtBQXhCLENBQThCLENBQTlCLEVBQWlDLENBQUMsQ0FBbEMsRUFBcUNDLFdBQXJDLEVBQVA7QUFDRCxDQUhEOztlQUtlTCxJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWYXJpYWJsZSB0eXBlIGNoZWNrLCByZXR1cm4gdmFsdWUgaXMgbnVsbCwgdW5kZWZpbmVkLCBudW1iZXIsIGFycmF5LCBzdHJpbmcsIHN5bWJvbCwgb2JqZWN0XG4gKiDlj5jph4/nsbvlnovmo4Dmn6XvvIzov5Tlm57lgLzkuLogbnVsbOOAgXVuZGVmaW5lZOOAgW51bWJlcuOAgWFycmF544CBc3RyaW5n44CBc3ltYm9s44CBb2JqZWN0XG4gKiBAcGFyYW0gdmFyaWFibGUgVHlwZSBvZiB2YXJpYWJsZSB0byBjaGVjayDlvoXmo4Dmn6XnsbvlnovnmoTlj5jph49cbiAqL1xuY29uc3QgdHlwZSA9IGZ1bmN0aW9uICh2YXJpYWJsZTogYW55KTogc3RyaW5nIHtcbiAgbGV0IHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKVxufVxuXG5leHBvcnQgZGVmYXVsdCB0eXBlXG4iXX0=