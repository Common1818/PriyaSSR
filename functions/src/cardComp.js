"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _bookContext = require("./contexts/bookContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CardComp = function CardComp() {
  console.log((0, _react.useContext)(_bookContext.BookContext));
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
    style: {
      width: "18rem"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Img, {
    variant: "top",
    src: "holder.js/100px180"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Body, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Title, null, "Card Title"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Text, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "primary"
  }, "Go somewhere")));
};

var _default = CardComp;
exports.default = _default;