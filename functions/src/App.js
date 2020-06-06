"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jq = _interopRequireDefault(require("./jq"));

var _cardComp = _interopRequireDefault(require("./cardComp"));

var _reactRouterDom = require("react-router-dom");

var _bookContext = _interopRequireDefault(require("./contexts/bookContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var display = _ref.display;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, "Whatever hey nadhfaoh;foahrojh;a", /*#__PURE__*/_react.default.createElement("div", null, display), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/card"
  }, "card")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: "/jcomp"
  }, "jcomp"))), /*#__PURE__*/_react.default.createElement(_bookContext.default, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/card",
    component: _cardComp.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/jcomp",
    component: _jq.default
  }))));
}

var _default = App;
exports.default = _default;