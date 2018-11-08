"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "md5", {
  enumerable: true,
  get: function get() {
    return _md.default;
  }
});
Object.defineProperty(exports, "getCookie", {
  enumerable: true,
  get: function get() {
    return _getCookie.default;
  }
});
Object.defineProperty(exports, "uuid", {
  enumerable: true,
  get: function get() {
    return _uuid.default;
  }
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function get() {
    return _debounce.default;
  }
});
Object.defineProperty(exports, "throttle", {
  enumerable: true,
  get: function get() {
    return _throttle.default;
  }
});
Object.defineProperty(exports, "deepClone", {
  enumerable: true,
  get: function get() {
    return _deepClone.default;
  }
});
Object.defineProperty(exports, "hash", {
  enumerable: true,
  get: function get() {
    return _hash.default;
  }
});
Object.defineProperty(exports, "type", {
  enumerable: true,
  get: function get() {
    return _type.default;
  }
});
exports.default = void 0;

var _md = _interopRequireDefault(require("./md5"));

var _getCookie = _interopRequireDefault(require("./getCookie"));

var _uuid = _interopRequireDefault(require("./uuid"));

var _debounce = _interopRequireDefault(require("./debounce"));

var _throttle = _interopRequireDefault(require("./throttle"));

var _deepClone = _interopRequireDefault(require("./deepClone"));

var _hash = _interopRequireDefault(require("./hash"));

var _type = _interopRequireDefault(require("./type"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simi = {
  md5: _md.default,
  getCookie: _getCookie.default,
  uuid: _uuid.default,
  debounce: _debounce.default,
  throttle: _throttle.default,
  deepClone: _deepClone.default,
  hash: _hash.default,
  type: _type.default
};
var _default = simi;
exports.default = _default;
window.simi = simi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJzaW1pIiwibWQ1IiwiZ2V0Q29va2llIiwidXVpZCIsImRlYm91bmNlIiwidGhyb3R0bGUiLCJkZWVwQ2xvbmUiLCJoYXNoIiwidHlwZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBUUEsSUFBTUEsSUFBSSxHQUFHO0FBQ1hDLEVBQUFBLEdBQUcsRUFBSEEsV0FEVztBQUVYQyxFQUFBQSxTQUFTLEVBQVRBLGtCQUZXO0FBR1hDLEVBQUFBLElBQUksRUFBSkEsYUFIVztBQUlYQyxFQUFBQSxRQUFRLEVBQVJBLGlCQUpXO0FBS1hDLEVBQUFBLFFBQVEsRUFBUkEsaUJBTFc7QUFNWEMsRUFBQUEsU0FBUyxFQUFUQSxrQkFOVztBQU9YQyxFQUFBQSxJQUFJLEVBQUpBLGFBUFc7QUFRWEMsRUFBQUEsSUFBSSxFQUFKQTtBQVJXLENBQWI7ZUFXZVIsSTs7QUFhZlMsTUFBTSxDQUFDVCxJQUFQLEdBQWNBLElBQWQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWQ1IGZyb20gXCIuL21kNVwiO1xuaW1wb3J0IGdldENvb2tpZSBmcm9tIFwiLi9nZXRDb29raWVcIjtcbmltcG9ydCB1dWlkIGZyb20gXCIuL3V1aWRcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi9kZWJvdW5jZVwiO1xuaW1wb3J0IHRocm90dGxlIGZyb20gXCIuL3Rocm90dGxlXCI7XG5pbXBvcnQgZGVlcENsb25lIGZyb20gXCIuL2RlZXBDbG9uZVwiO1xuaW1wb3J0IGhhc2ggZnJvbSBcIi4vaGFzaFwiO1xuaW1wb3J0IHR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHNpbWk6IG9iamVjdFxuICB9XG59XG5cbmNvbnN0IHNpbWkgPSB7XG4gIG1kNSxcbiAgZ2V0Q29va2llLFxuICB1dWlkLFxuICBkZWJvdW5jZSxcbiAgdGhyb3R0bGUsXG4gIGRlZXBDbG9uZSxcbiAgaGFzaCxcbiAgdHlwZVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaW1pO1xuXG5leHBvcnQge1xuICBtZDUsXG4gIGdldENvb2tpZSxcbiAgdXVpZCxcbiAgZGVib3VuY2UsXG4gIHRocm90dGxlLFxuICBkZWVwQ2xvbmUsXG4gIGhhc2gsXG4gIHR5cGVcbn1cblxud2luZG93LnNpbWkgPSBzaW1pIl19