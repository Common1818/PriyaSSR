"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrapp = void 0;

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("./src/App"));

var functions = _interopRequireWildcard(require("firebase-functions"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require("path");

var fs = require("fs");

var app = (0, _express.default)(); // var BUILD_DIR = path.join(__dirname, 'build')
// app.use(express.static(BUILD_DIR))

app.get("**", function (req, res) {
  console.log("cloud function requested");
  var context = {};

  var html = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url,
    context: context
  }, /*#__PURE__*/_react.default.createElement(_App.default, {
    display: "this is a prop from server"
  })));

  var filePath = path.resolve(__dirname, "hosting", "index.html");
  var index = fs.readFileSync(filePath, "utf8");
  index = index.toString();
  var finalHtml = index.replace("<!---- ::APP:: ---->", html); // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')

  res.send(finalHtml);
});
var ssrapp = functions.https.onRequest(app);
exports.ssrapp = ssrapp;