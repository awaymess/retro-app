"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _router = require("next/router");

function Logout() {
  var router = (0, _router.useRouter)();
  (0, _react.useEffect)(function () {
    localStorage.removeItem("token");
    router.push("/login");
  }, []);
  return null;
}

var _default = Logout;
exports["default"] = _default;