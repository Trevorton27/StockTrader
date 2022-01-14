(this["webpackJsonpstock-trader"] = this["webpackJsonpstock-trader"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/home.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/style/home.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/stock-hero.jpg */ "./src/images/stock-hero.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Potta+One&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "#home {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center/cover;\r\n  height: 95vh;\r\n  position: relative;\r\n  padding: 40px;\r\n}\r\n\r\n#home::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n#home * {\r\n  z-index: 10;\r\n}\r\n\r\n.home-card {\r\n  height: 100%;\r\n}\r\n\r\n.home-content {\r\n  width: 90%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 0 20px;\r\n  font-size: 1.3rem;\r\n  color: #fff;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.home-content p {\r\n  font-size: 1.5rem;\r\n  text-align: start;\r\n}\r\n\r\n#home h1 {\r\n  text-align: start;\r\n\r\n  color: #fff;\r\n}\r\n\r\n.home-buttons-wrapper .btn {\r\n  margin-right: 20px;\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n}\r\n\r\n.home-header {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\n#home .col-logo {\r\n  margin: auto;\r\n}\r\n\r\n.home-container {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr;\r\n}\r\n\r\n.home-card .card-body a {\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/index.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/style/index.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap);"]);
// Module
exports.push([module.i, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n  line-height: 1.6;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\n.text-primary {\r\n  color: #28a745;\r\n}\r\n\r\n.text-secondary {\r\n  color: #0284d0;\r\n}\r\n\r\n.red {\r\n  color: red;\r\n}\r\n\r\n.green {\r\n  color: green;\r\n}\r\n\r\n.btn:hover {\r\n  opacity: 0.9;\r\n}\r\n\r\n.flex-items {\r\n  display: flex;\r\n  text-align: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  height: 100%;\r\n}\r\n\r\n.flex-items > div {\r\n  padding: 20px;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nh1,\r\nh2 {\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n}\r\n\r\np {\r\n  margin: 10px 0;\r\n}\r\n\r\n.show {\r\n  display: block;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* flex properties */\r\n.flexbox-center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.spinner {\r\n    position: fixed;\r\n    right: 50%;\r\n    width: 50px !important;\r\n    height: 50px !important;\r\n}\r\n\r\n/* Navbar */\r\n.navbar-nav a:hover {\r\n  color: red;\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar {\r\n  font-size: 1.1em;\r\n}\r\n\r\n.current {\r\n  border-bottom: black solid 2px;\r\n}\r\n\r\na:hover {\r\n  color: red;\r\n}\r\n\r\n/* PORTFOLIO */\r\n.user-holdings-list::before {\r\n  clear: both;\r\n  content: '';\r\n  display: block;\r\n  width: 50px;\r\n  height: 3px;\r\n  margin: 40px auto;\r\n  background: #007bff;\r\n}\r\n\r\n.portfolio-container {\r\n  font-size: 1.2em;\r\n}\r\n\r\n.portfolio-container canvas {\r\n    width: 675px !important;\r\n    height: 310px !important;\r\n}\r\n\r\n.trade-container canvas {\r\n  height: 460px !important;\r\n  width: 1000px !important;\r\n  margin: 10px auto 0 auto;\r\n}\r\n\r\n.card {\r\n  border: 2px solid rgba(0,0,0,.125) !important;\r\n}\r\n\r\n/* Register */\r\n/* The Modal (background) */\r\n.modal {\r\n  display: block; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n}\r\n\r\n/* Form signup */\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\n#register-modal input[type=\"text\"],\r\n#register-modal input[type=\"password\"] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n.cancelbtn,\r\n.signupbtn {\r\n  background-color: #4caf50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n.cancelbtn {\r\n  padding: 14px 20px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n.cancelbtn,\r\n.signupbtn {\r\n  float: left;\r\n  width: 50%;\r\n}\r\n\r\n/* Add padding to container elements */\r\n.container {\r\n  padding: 16px;\r\n}\r\n\r\n/* Clear floats */\r\n.clearfix::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  .cancelbtn,\r\n  .signupbtn {\r\n    width: 100%;\r\n  }\r\n}\r\n/* The Close Button */\r\n.close {\r\n  color: #aaaaaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Login */\r\n.loginbtn {\r\n  width: 100%;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/mobile.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/style/mobile.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media only screen and (max-width: 600px) {\r\n  /* HOME */\r\n  #home {\r\n    padding: 0;\r\n  }\r\n\r\n  .home-content {\r\n    padding: 5px;\r\n    align-items: center;\r\n  }\r\n\r\n  .home-content > div {\r\n    width: 100% !important;\r\n  }\r\n\r\n  div.user-info {\r\n    width: 100% !important;\r\n  }\r\n\r\n  /* INSTRUCTIONS */\r\n  .guide-container::after {\r\n    display: none !important;\r\n  }\r\n\r\n  /* PORTFOLIO */\r\n  .portfolio-container {\r\n    font-size: 1em;\r\n  }\r\n\r\n  .portfolio-container canvas {\r\n    width: 320px !important;\r\n    height: 200px !important;\r\n  }\r\n\r\n  .card .card-body > div {\r\n    padding: 5px;\r\n    font-size: 0.9em;\r\n  }\r\n\r\n  /* TRADE */\r\n  .trade-container {\r\n    font-size: 1em !important;\r\n  }\r\n\r\n  .trade-container canvas {\r\n    display: none !important;\r\n  }\r\n\r\n  .card .card-body {\r\n    font-size: 0.9em;\r\n    padding: 0.5rem;\r\n  }\r\n\r\n  .card-head h2 {\r\n    font-size: 1.6em;\r\n  }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .guide-container {\r\n    height: auto !important;\r\n  }\r\n\r\n  #home {\r\n    height: 100%;\r\n  }\r\n\r\n  .portfolio-container .portfolio-top-wrapper {\r\n    display: block !important;\r\n  }\r\n\r\n  .portfolio-top-wrapper .user-info {\r\n    margin: 10px auto 0 auto !important;\r\n  }\r\n\r\n  .trade-container canvas {\r\n    height: 400px !important;\r\n    width: 670px !important;\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/trade.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/style/trade.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".trade-container {\r\n  font-size: 1.2em;\r\n}\r\n\r\n/* Form */\r\n#search-form-container form input[type='text'] {\r\n  width: 50%;\r\n  padding: 15px;\r\n  margin: 20px 0;\r\n  padding: 10px 30px;\r\n  border: none;\r\n  background: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n.selected-holding input {\r\n  text-transform: uppercase;\r\n}\r\n::placeholder {\r\n  /* Recent browsers */\r\n  text-transform: none;\r\n}\r\n\r\n/* User Information */\r\n.user-information {\r\n  border: blue 1px solid;\r\n}\r\n\r\n/* User Holdings */\r\n.holdings-container {\r\n  border: 2px red solid;\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.holding-list {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.holding-box {\r\n  border: 3px blue solid;\r\n}\r\n\r\n/* Selected Holding */\r\n.card-head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.card-body {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.card-body > div {\r\n  padding: 10px;\r\n  width: 100%;\r\n}\r\n.card-body > div:nth-child(-n + 3) {\r\n  border-right: 2px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nhr {\r\n  margin: 0 !important;\r\n}\r\n\r\n.recommendation-header::before {\r\n  clear: both;\r\n  content: '';\r\n  display: block;\r\n  width: 50px;\r\n  height: 3px;\r\n  margin: 20px auto;\r\n  background: #007bff;\r\n}\r\n\r\n/* Showcase Stocks */\r\n.stocks-list {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: stretch;\r\n  flex-wrap: wrap;\r\n}\r\n.stock-box {\r\n  border: 3px solid red;\r\n  background-color: #333;\r\n  color: #fff;\r\n  width: 200px;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 200px;\r\n}\r\n\r\n.stocks-showcase {\r\n  height: 85vh;\r\n}\r\n\r\n.showcase-header {\r\n  text-align: center;\r\n}\r\n\r\n.stock-buttons {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.details-stock-btn {\r\n  background: rgb(182, 125, 125);\r\n}\r\n\r\n/* Modal Buy */\r\n.modal-buy {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 50%;\r\n}\r\n\r\n.buy-content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n.buy-buttons {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  grid-gap: 2rem;\r\n  gap: 2rem;\r\n}\r\n\r\n.buy-btn,\r\n.close-btn {\r\n  background-color: #4caf50;\r\n  padding: 14px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.buy-btn {\r\n  background: #007bff;\r\n}\r\n\r\n.close-btn {\r\n  background: #6c757d;\r\n}\r\n\r\n.buy-form input {\r\n  text-align: center;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  border: 2px solid #000;\r\n  width: 25%;\r\n  font-size: 25px;\r\n}\r\n\r\n.alert {\r\n  animation: fadein 1s;\r\n  -moz-animation: fadein 1s; /* Firefox */\r\n  -webkit-animation: fadein 1s; /* Safari and Chrome */\r\n  -o-animation: fadein 1s; /* Opera */\r\n}\r\n\r\n@keyframes fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Confirm */\r\n\r\n.confirm-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  grid-gap: 2rem;\r\n  gap: 2rem;\r\n  margin-top: 30px;\r\n  height: 100vh;\r\n}\r\n\r\n.confirm-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  grid-gap: 1.3rem;\r\n  gap: 1.3rem;\r\n  align-items: center;\r\n}\r\n\r\n.confirm-content > div {\r\n  text-align: center;\r\n}\r\n\r\n.confirm-content hr {\r\n  box-sizing: content-box;\r\n  height: 0;\r\n  overflow: visible;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  width: 500px;\r\n}\r\n\r\n.confirm-buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  grid-gap: 50px;\r\n  gap: 50px;\r\n}\r\n\r\n.confirm-buttons button {\r\n  color: #fff;\r\n  padding: 8px 80px;\r\n}\r\n\r\n.btn-confirm {\r\n  background: green;\r\n}\r\n\r\n.btn-cancel {\r\n  background: red;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/index.css */ "./src/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/home.css */ "./src/style/home.css");
/* harmony import */ var _style_home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_home_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_mobile_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/mobile.css */ "./src/style/mobile.css");
/* harmony import */ var _style_mobile_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_mobile_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_trade_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/trade.css */ "./src/style/trade.css");
/* harmony import */ var _style_trade_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_trade_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Navigation */ "./src/components/Navigation.js");
/* harmony import */ var _screens_HomeScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/HomeScreen */ "./src/screens/HomeScreen.js");
/* harmony import */ var _screens_TradeScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/TradeScreen */ "./src/screens/TradeScreen.js");
/* harmony import */ var _screens_PortfolioScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/PortfolioScreen */ "./src/screens/PortfolioScreen.js");
/* harmony import */ var _protected_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./protected-routes/ProtectedRoute */ "./src/protected-routes/ProtectedRoute.js");
/* harmony import */ var _context_UserNameContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./context/UserNameContext */ "./src/context/UserNameContext.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\App.js";














const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_UserNameContext__WEBPACK_IMPORTED_MODULE_12__["UserNameProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app",
    id: "app-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    id: "main-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: _screens_HomeScreen__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_protected_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_11__["default"], {
    path: "/main",
    component: _screens_TradeScreen__WEBPACK_IMPORTED_MODULE_9__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_protected_routes_ProtectedRoute__WEBPACK_IMPORTED_MODULE_11__["default"], {
    path: "/portfolio",
    component: _screens_PortfolioScreen__WEBPACK_IMPORTED_MODULE_10__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/AddHolding.js":
/*!**************************************!*\
  !*** ./src/components/AddHolding.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Alert */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var _http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-helpers/tradeUtilities */ "./src/http-helpers/tradeUtilities.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\AddHolding.js";




const AddHolding = props => {
  const [symbol, setSymbol] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [companyName, setCompanyName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [isCanSearch, setCanSearch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const timeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [isShowAlert, setShowAlert] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (symbol === '') {
      setShowAlert(false);
      setCompanyName(null);
    }
  }, [symbol]);

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSearchForHolding(symbol);
    setSymbol('');
  };

  const onSearchSymbol = e => {
    setCanSearch(false);
    setSymbol(e.target.value);
  };

  const performApiCall = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    try {
      const response = await Object(_http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_2__["searchForHolding"])(symbol);

      if (response === 'error') {
        setShowAlert(true);
      } else if (response) {
        setShowAlert(false);
        setCompanyName(response.companyName);
      }
    } catch (err) {
      console.error(err.message);
    }
  }, [symbol]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    if (isCanSearch && symbol) performApiCall();
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null;
      setCanSearch(true);
    }, 2000);
  }, [isCanSearch, performApiCall, symbol]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-inline justify-content-center mt-3 selected-holding",
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "symbol",
    value: symbol,
    autoFocus: true,
    onChange: e => onSearchSymbol(e),
    className: "form-control col-sm-5",
    placeholder: "Enter stock symbol",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary col-sm-2",
    style: {
      backgroundColor: '#343a40',
      border: 'none'
    },
    disabled: !companyName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "w-100 text-center text-success",
    style: {
      display: symbol === '' ? 'none' : 'block'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, companyName)), isShowAlert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-50 text-center m-auto",
    variant: "danger",
    onClose: () => setShowAlert(false),
    dismissible: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, symbol), " is not a valid symbol. Please try modifying your search."));
};

/* harmony default export */ __webpack_exports__["default"] = (AddHolding);

/***/ }),

/***/ "./src/components/CurrentHoldings.js":
/*!*******************************************!*\
  !*** ./src/components/CurrentHoldings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\CurrentHoldings.js";




const CurrentHoldings = _ref => {
  let {
    holding
  } = _ref;
  const [holdingStyleColor, setHoldingStyleColor] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [positiveSign, setPositiveSign] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    name,
    symbol,
    price,
    percent_change,
    shares,
    created_at
  } = holding;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const isHoldingNegativeOrPositive = () => {
      if (String(percent_change).charAt(0) === '-') {
        setHoldingStyleColor('red');
        setPositiveSign(false);
      } else {
        setHoldingStyleColor('green');
        setPositiveSign('+');
      }
    };

    isHoldingNegativeOrPositive();
  }, [percent_change]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "selected-holding card mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, name, ": ", symbol), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: {
      pathname: '/main',
      search: `?symbol=${symbol}`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    size: "md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Trade")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Date purchased: ", created_at), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Holding Value:",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Shares Total Value:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: holdingStyleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "$", Number(price * shares).toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shares",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Number Of Shares:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, shares)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "last-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Current Stock Value:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: holdingStyleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "$", price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "percent-change",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Percent Change:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: holdingStyleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, positiveSign, percent_change, "%"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CurrentHoldings);

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_UserNameContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/UserNameContext */ "./src/context/UserNameContext.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\Login.js";






const Login = props => {
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [userName, setUserName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_UserNameContext__WEBPACK_IMPORTED_MODULE_4__["UserNameContext"]);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const loginUser = async e => {
    e.preventDefault();

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/auth/login', {
        params: {
          email: email,
          password: password
        }
      });
      localStorage.setItem('userData', JSON.stringify(response.data));
      setUserName(response.data.name);
      props.history.push('/');
    } catch (err) {
      console.error('error in login user', err.message);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "lg",
    onClick: handleShow,
    className: "btn ",
    style: {
      backgroundColor: '#343a40',
      border: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    show: show,
    onHide: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
    closeButton: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Login Form")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: loginUser,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "formBasicEmail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "email",
    placeholder: "Enter email",
    value: email,
    onChange: e => setEmail(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "formBasicPassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: e => setPassword(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Login));

/***/ }),

/***/ "./src/components/Navigation.js":
/*!**************************************!*\
  !*** ./src/components/Navigation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_UserNameContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/UserNameContext */ "./src/context/UserNameContext.js");
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/cg */ "../node_modules/react-icons/cg/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "../node_modules/react-icons/ai/index.esm.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\Navigation.js";







const Navigation = props => {
  const [userName, setUserName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_UserNameContext__WEBPACK_IMPORTED_MODULE_3__["UserNameContext"]);

  const logOut = () => {
    localStorage.removeItem('userData');
    props.history.push('/');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    bg: "dark",
    variant: "dark",
    id: "navbar",
    expand: "sm",
    sticky: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Stock Trader ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineStock"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 22
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
    id: "basic-navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto d-flex justify-content-center nav-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    onClick: () => props.history.push('/main'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Trade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    onClick: () => props.history.push('/portfolio'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Portfolio")), JSON.parse(localStorage.getItem('userData')) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    className: "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_4__["CgProfile"], {
    size: "1.5em",
    className: "mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }), " Welcome ", userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    onClick: logOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Logout")) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Navigation));

/***/ }),

/***/ "./src/components/NoCurrentHoldings.js":
/*!*********************************************!*\
  !*** ./src/components/NoCurrentHoldings.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\NoCurrentHoldings.js";




const NoCurrentHoldings = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "text-center mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    className: "d-block border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "You don't own any holdings as of yet."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Go to our Trade page to start purchasing new stocks.", ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      backgroundColor: '#343a40',
      border: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Trade Page"))));
};

/* harmony default export */ __webpack_exports__["default"] = (NoCurrentHoldings);

/***/ }),

/***/ "./src/components/Recommendations.js":
/*!*******************************************!*\
  !*** ./src/components/Recommendations.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RenderRecommendations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderRecommendations */ "./src/components/RenderRecommendations.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\Recommendations.js";





const Recommendations = props => {
  const [recommendedHoldings, setRecommendedHoldings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [isSpinner, setSpinner] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getRecommendations();
  }, []);

  const handleTrade = symbol => {
    props.handleSearchForHolding(symbol);
  };

  const getRecommendations = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/stocks/recommendation').then(res => {
      setRecommendedHoldings(res.data);
      setSpinner(false);
    }).catch(err => {
      console.log('error username response client side', err);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center mt-5 h4 font-weight-light recommendation-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Other Recommendations"), isSpinner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    animation: "border",
    className: "spinner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }) : recommendedHoldings.map(recommendedHolding => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RenderRecommendations__WEBPACK_IMPORTED_MODULE_2__["default"], {
    recommendedHolding: recommendedHolding,
    key: recommendedHolding.marketCap,
    handleTrade: handleTrade,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Recommendations);

/***/ }),

/***/ "./src/components/Register.js":
/*!************************************!*\
  !*** ./src/components/Register.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_UserNameContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/UserNameContext */ "./src/context/UserNameContext.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\Register.js";






const Register = props => {
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [userName, setUserName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_UserNameContext__WEBPACK_IMPORTED_MODULE_4__["UserNameContext"]);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const createUser = async e => {
    e.preventDefault();

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/auth/register', {
        user: user,
        email: email,
        password: password
      });
      localStorage.setItem('userData', JSON.stringify(response.data));
      setUserName(response.data.name);
      props.history.push('/');
    } catch (err) {
      console.error('error in createUser', err.message);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "lg",
    onClick: handleShow,
    className: "btn ",
    style: {
      backgroundColor: '#343a40',
      border: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    show: show,
    onHide: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
    closeButton: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Registration Form")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: createUser,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "formBasicUsername",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "username",
    placeholder: "username",
    value: user,
    onChange: e => setUser(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "formBasicEmail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "email",
    placeholder: "Enter email",
    value: email,
    onChange: e => setEmail(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Text, {
    className: "text-muted",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "We'll never share your email with anyone else.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "formBasicPassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: e => setPassword(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    type: "submit",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Register));

/***/ }),

/***/ "./src/components/RenderRecommendations.js":
/*!*************************************************!*\
  !*** ./src/components/RenderRecommendations.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-helpers/tradeUtilities */ "./src/http-helpers/tradeUtilities.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\RenderRecommendations.js";




function RenderRecommendations(props) {
  const [shares, setShares] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [holdings, setHoldings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [holdingStyleColor, setHoldingStyleColor] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [positiveSign, setPositiveSign] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    companyName,
    latestPrice,
    changePercent,
    change,
    symbol
  } = props.recommendedHolding;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_1__["getHoldings"])().then(holdingsData => setHoldings(holdingsData)).catch(err => console.error('error get holdings', err));

    const isHoldingNegativeOrPositive = () => {
      if (String(changePercent).charAt(0) === '-') {
        setHoldingStyleColor('red');
        setPositiveSign(false);
      } else {
        setHoldingStyleColor('green');
        setPositiveSign('+');
      }
    };

    isHoldingNegativeOrPositive();
  }, [changePercent]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const compareSelectedHoldingToExistingList = () => {
      const holdingExist = holdings.find(holding => holding.symbol === props.recommendedHolding.symbol);

      if (holdingExist) {
        setShares(holdingExist.shares);
      }
    };

    compareSelectedHoldingToExistingList();
  }, [holdings, props.recommendedHolding.symbol]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "recommended-holding",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "selected-holding card mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, ' ', companyName, ": Stock Symbol ", symbol), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    href: "#goup",
    variant: "outline-primary",
    onClick: () => props.handleTrade(symbol),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "Trade"), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Current Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: holdingStyleColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "$", latestPrice.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "percent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Percent Change"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: holdingStyleColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, positiveSign, changePercent.toFixed(3), "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "change",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "Daily Gain/Loss"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: holdingStyleColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, positiveSign, "$", change)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shares-held",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Shares Held"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, shares)))));
}

/* harmony default export */ __webpack_exports__["default"] = (RenderRecommendations);

/***/ }),

/***/ "./src/components/SelectedHolding.js":
/*!*******************************************!*\
  !*** ./src/components/SelectedHolding.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modals_BuyModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/BuyModal */ "./src/components/modals/BuyModal.js");
/* harmony import */ var _modals_SellModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/SellModal */ "./src/components/modals/SellModal.js");
/* harmony import */ var _http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-helpers/tradeUtilities */ "./src/http-helpers/tradeUtilities.js");
/* harmony import */ var _charts_ChartTrade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts/ChartTrade */ "./src/components/charts/ChartTrade.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\SelectedHolding.js";






const SelectedHolding = _ref => {
  let {
    selectedHolding,
    buyShares,
    sellShares,
    updateShares
  } = _ref;
  const [shares, setShares] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [holdings, setHoldings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [holdingStyleColor, setHoldingStyleColor] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [positiveSign, setPositiveSign] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    companyName,
    symbol,
    latestPrice,
    previousClose,
    changePercent,
    change
  } = selectedHolding;
  const getHoldingsData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    Object(_http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_3__["getHoldings"])().then(holdingsData => setHoldings(holdingsData)).catch(err => console.error('error get holdings', err));
  }, []);
  const isHoldingNegativeOrPositive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (String(changePercent).charAt(0) === '-') {
      setHoldingStyleColor('red');
      setPositiveSign(false);
    } else {
      setHoldingStyleColor('green');
      setPositiveSign('+');
    }
  }, [changePercent]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isHoldingNegativeOrPositive();
  }, [selectedHolding, isHoldingNegativeOrPositive]);

  const handleBuyShares = shares => {
    updateShares(shares);
    buyShares(selectedHolding, shares);
    setShares(prevState => prevState + parseInt(shares));
  };

  const handleSellShares = shares => {
    sellShares(selectedHolding, shares);
    updateShares(shares);
    setShares(prevState => prevState - parseInt(shares));
  };

  const compareSelectedHoldingToExisting = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (selectedHolding) {
      const holdingExist = holdings.find(holding => holding.symbol === selectedHolding.symbol);

      if (holdingExist) {
        setShares(holdingExist.shares);
      }
    }
  }, [holdings, selectedHolding]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isHoldingNegativeOrPositive();
    getHoldingsData();
  }, [isHoldingNegativeOrPositive, getHoldingsData]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    compareSelectedHoldingToExisting();
  }, [holdings, compareSelectedHoldingToExisting]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "selected-holding card mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, ' ', companyName, ": ", symbol), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modals_BuyModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleBuyShares: handleBuyShares,
    selectedHolding: selectedHolding,
    shares: shares,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modals_SellModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleSellShares: handleSellShares,
    selectedHolding: selectedHolding,
    shares: shares,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, "Current Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: `mb-0 ${holdingStyleColor}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, "$", latestPrice.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: holdingStyleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Previous Closed: $", previousClose.toFixed(2), ' ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "percent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, "Percent Change"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: holdingStyleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, positiveSign, changePercent.toFixed(3), "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "change",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "Daily Gain/Loss"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: holdingStyleColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, positiveSign, "$", change)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shares-held",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "Shares Held"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, shares)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_charts_ChartTrade__WEBPACK_IMPORTED_MODULE_4__["default"], {
    symbol: symbol,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectedHolding);

/***/ }),

/***/ "./src/components/ShowAlert.js":
/*!*************************************!*\
  !*** ./src/components/ShowAlert.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "../node_modules/react-icons/fi/index.esm.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\ShowAlert.js";




const ShowAlert = props => {
  const {
    latestPrice,
    symbol
  } = props.selectedHolding;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
    className: "mx-auto",
    onClose: () => props.toggleAlertState(),
    show: props.isShowAlert,
    delay: 7000,
    autohide: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "holder.js/20x20?text=%20",
    className: "rounded mr-2",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Transaction Completed", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiCheckCircle"], {
    className: "text-success h5 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Toast"].Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, "Successfully ", props.alertMessage, " ", props.sharesPurchased, " shares from", symbol, " for a total of $", props.sharesPurchased * latestPrice));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowAlert);

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_UserNameContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/UserNameContext */ "./src/context/UserNameContext.js");
/* harmony import */ var _http_helpers_portfolioUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-helpers/portfolioUtilities */ "./src/http-helpers/portfolioUtilities.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/esm/ListGroup.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\UserInfo.js";






function UserInformation() {
  const [userName, setUserName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_UserNameContext__WEBPACK_IMPORTED_MODULE_1__["UserNameContext"]);
  const [wallet, setWallet] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [totalHoldingsAmount, setTotalHoldingsAmount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchWalletData = async () => {
      Object(_http_helpers_portfolioUtilities__WEBPACK_IMPORTED_MODULE_2__["getWalletData"])().then(res => {
        setWallet(res.wallet);
        setTotalHoldingsAmount(res.holdingsAmount);
      }).catch(err => console.error('error get wallet', err));
    };

    fetchWalletData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "user-info mt-3 w-50",
    align: "center",
    border: "dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
    className: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "Account Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "User: ", userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Account Balance: $", wallet.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Total Holding Value: $", totalHoldingsAmount.toFixed(2))));
}

/* harmony default export */ __webpack_exports__["default"] = (UserInformation);

/***/ }),

/***/ "./src/components/WelcomePage.js":
/*!***************************************!*\
  !*** ./src/components/WelcomePage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_UserNameContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/UserNameContext */ "./src/context/UserNameContext.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gi */ "../node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "../node_modules/react-icons/ai/index.esm.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\WelcomePage.js";







const WelcomePage = () => {
  const [userName, setUserName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_UserNameContext__WEBPACK_IMPORTED_MODULE_1__["UserNameContext"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-content m-0 text-justify w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Hi ", userName, ", and welcome to Stock Trader."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    bg: "transparent",
    className: "home-card mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_4__["GiReceiveMoney"], {
    size: "7em",
    className: "col-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    className: "d-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
    as: "h1",
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 19
    }
  }, "Trade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, "Buy stocks by searching for a specific symbol, or view our recommended stocks. You are initially given a total of 100,000 dollars."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/main",
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      backgroundColor: '#343a40',
      border: 'none'
    },
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Start Trading"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    bg: "transparent",
    className: "home-card mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineDatabase"], {
    size: "7em",
    className: "col-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    className: "d-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
    as: "h1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "View your personal data, current holdings and statistics. With this information you can make informed decisions on what stocks to buy and sell."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/portfolio",
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "lg",
    style: {
      backgroundColor: '#343a40',
      border: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "View Portfolio")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (WelcomePage);

/***/ }),

/***/ "./src/components/charts/Chart.js":
/*!****************************************!*\
  !*** ./src/components/charts/Chart.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http-helpers/tradeUtilities */ "./src/http-helpers/tradeUtilities.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\charts\\Chart.js";




const Chart = () => {
  const [chartData, setChartData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [holdings, setHoldings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [holdingNames, setHoldingNames] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [holdingShares, setHoldingShares] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getHoldingsData();
  }, []);

  const getHoldingsData = () => {
    Object(_http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_2__["getHoldings"])().then(holdingsData => setHoldings(holdingsData)).catch(err => console.error('error get holdings', err));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    for (let i = 0; holdings.length > i; i++) {
      setHoldingNames(prevState => [...prevState, holdings[i].name]);
      setHoldingShares(prevState => [...prevState, holdings[i].shares]);
    }
  }, [holdings]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setChartData({
      labels: holdingNames,
      datasets: [{
        label: 'Population',
        data: holdingShares,
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)']
      }]
    });
  }, [holdingNames]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart chart-portfolio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, holdingNames.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
    data: holdingNames.length > 0 ? chartData : null,
    options: {
      title: {
        display: true,
        fontSize: 15
      },
      legend: {
        display: true,
        position: 'right'
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/components/charts/ChartTrade.js":
/*!*********************************************!*\
  !*** ./src/components/charts/ChartTrade.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\charts\\ChartTrade.js";




const ChartTrade = _ref => {
  let {
    symbol
  } = _ref;
  const [chartData, setChartData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [holdingDays, setHoldingDays] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [holdingPrices, setHoldingPrices] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getHoldingPricesByDates = async () => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`api/stocks/chart/?symbol=${symbol}`);
        setDatesAndPricesStates(response.data);
      } catch (err) {
        console.error('error in getHoldingPricesByDates', err.message);
      }
    };

    getHoldingPricesByDates();
  }, []);

  const setDatesAndPricesStates = data => {
    for (let i = 0; data.length > i; i++) {
      setHoldingDays(prevState => [...prevState, data[i].label]);
      setHoldingPrices(prevState => [...prevState, data[i].close]);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (holdingDays.length > 0) {
      setChartData({
        labels: holdingDays,
        datasets: [{
          label: symbol,
          data: holdingPrices,
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)']
        }]
      });
    }
  }, [holdingPrices]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, holdingDays.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    data: holdingDays.length > 0 ? chartData : null,
    options: {
      title: {
        display: true,
        text: `Average Prices For ${symbol} last 10 business days`,
        fontSize: 20
      },
      legend: {
        display: true,
        position: 'right'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Price',
            fontSize: 15,
            fontStyle: 'italic'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Date',
            fontSize: 15,
            fontStyle: 'italic'
          }
        }]
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ChartTrade);

/***/ }),

/***/ "./src/components/headers/HeaderPortfolio.js":
/*!***************************************************!*\
  !*** ./src/components/headers/HeaderPortfolio.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\headers\\HeaderPortfolio.js";


function HeaderPortfolio() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "Each account starts with $100,000 fake dollars. Have fun :-)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderPortfolio);

/***/ }),

/***/ "./src/components/headers/HeaderTrade.js":
/*!***********************************************!*\
  !*** ./src/components/headers/HeaderTrade.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\headers\\HeaderTrade.js";


function HeaderTrade() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center mt-3",
    id: "goup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Trading Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "Search by stock symbol to trade. For example, type TSLA for TESLA."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hp", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Click", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.nasdaq.com/market-activity/stocks/screener",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "here"), ' ', "for a comprehensive list of different stock symbols which you can search for by company name."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderTrade);

/***/ }),

/***/ "./src/components/modals/BuyModal.js":
/*!*******************************************!*\
  !*** ./src/components/modals/BuyModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _http_helpers_portfolioUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http-helpers/portfolioUtilities */ "./src/http-helpers/portfolioUtilities.js");
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Alert */ "./node_modules/react-bootstrap/esm/Alert.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\modals\\BuyModal.js";





const BuyModal = props => {
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [sharesValue, setSharesValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [wallet, setWallet] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [isShowAlert, setShowAlert] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchWalletData = () => {
      Object(_http_helpers_portfolioUtilities__WEBPACK_IMPORTED_MODULE_2__["getWalletData"])().then(res => setWallet(res.wallet)).catch(err => console.error('error get wallet', err));
    };

    fetchWalletData();
  }, []);

  const handleClose = () => {
    setShow(false);
    setShowAlert(false);
  };

  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    if (wallet > sharesValue * props.selectedHolding.latestPrice) {
      handleClose();
      props.handleBuyShares(sharesValue);
    } else {
      setShowAlert(true);
    }
  };

  const {
    companyName,
    symbol,
    latestPrice
  } = props.selectedHolding;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "mr-2",
    variant: "outline-primary",
    onClick: handleShow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Buy Stocks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: show,
    onHide: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, companyName, ": ", symbol)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "Share value: $", latestPrice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Current Shares Held: ", props.shares), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicEmail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "Share quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "number",
    placeholder: "Shares",
    value: sharesValue,
    onChange: e => setSharesValue(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    className: "total-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, sharesValue ? '$' + (sharesValue * latestPrice).toFixed(2) : 'Total amount')))), isShowAlert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "danger",
    onClose: () => setShowAlert(false),
    dismissible: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "You currently have only $", wallet.toFixed(2), ". Either sell some shares or buy less in order to complete the transaction."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "Cancel Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "Buy Shares"))));
};

/* harmony default export */ __webpack_exports__["default"] = (BuyModal);

/***/ }),

/***/ "./src/components/modals/SellModal.js":
/*!********************************************!*\
  !*** ./src/components/modals/SellModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\components\\modals\\SellModal.js";



const SellModal = props => {
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isShowAlert, setShowAlert] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [sharesInput, setSharesInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleClose = () => {
    setShow(false);
    setShowAlert(false);
  };

  const handleShow = () => {
    setShow(true);
    setSharesInput('');
  };

  const handleSubmit = () => {
    if (sharesInput > props.shares) {
      setShowAlert(true);
      setShow(true);
    } else {
      setShowAlert(false);
      props.handleSellShares(sharesInput);
    }
  };

  const {
    companyName,
    symbol,
    latestPrice
  } = props.selectedHolding;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: handleShow,
    disabled: !props.shares,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Sell Stocks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: show,
    onHide: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, companyName, ": Stock Symbol ", symbol)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Share value: $", latestPrice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Current Shares Held: ", props.shares), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicEmail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, " Share quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "number",
    placeholder: "Shares",
    value: sharesInput,
    onChange: e => setSharesInput(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    className: "total-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, sharesInput ? '$' + (sharesInput * latestPrice).toFixed(2) : 'Total amount')))), isShowAlert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    variant: "danger",
    onClose: () => setShowAlert(false),
    dismissible: true,
    className: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, " You don't own enough shares to make that transaction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "Cancel Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: () => {
      handleClose();
      handleSubmit();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "Sell Shares"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SellModal);

/***/ }),

/***/ "./src/context/UserNameContext.js":
/*!****************************************!*\
  !*** ./src/context/UserNameContext.js ***!
  \****************************************/
/*! exports provided: UserNameContext, UserNameProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNameContext", function() { return UserNameContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNameProvider", function() { return UserNameProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\context\\UserNameContext.js";

const UserNameContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const UserNameProvider = props => {
  const [userName, setUserName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (JSON.parse(localStorage.getItem('userData'))) {
      setUserName(JSON.parse(localStorage.getItem('userData')).name);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserNameContext.Provider, {
    value: [userName, setUserName],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, props.children);
};

/***/ }),

/***/ "./src/http-helpers/portfolioUtilities.js":
/*!************************************************!*\
  !*** ./src/http-helpers/portfolioUtilities.js ***!
  \************************************************/
/*! exports provided: getWalletData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWalletData", function() { return getWalletData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getWalletData = async () => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/portfolio/wallet/${JSON.parse(localStorage.getItem('userData')).id}`);
    return response.data;
  } catch (err) {
    console.error('Error in get wallet', err.message);
  }
};

/***/ }),

/***/ "./src/http-helpers/tradeUtilities.js":
/*!********************************************!*\
  !*** ./src/http-helpers/tradeUtilities.js ***!
  \********************************************/
/*! exports provided: getHoldings, buyStock, sellStock, searchForHolding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoldings", function() { return getHoldings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buyStock", function() { return buyStock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sellStock", function() { return sellStock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchForHolding", function() { return searchForHolding; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getHoldings = async () => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/holdings/${JSON.parse(localStorage.getItem('userData')).id}`);
    return response.data;
  } catch (err) {
    console.error('Error in get holdings', err.message);
  }
};
const buyStock = async (holding, shares) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/holdings/buy/`, {
      user_id: JSON.parse(localStorage.getItem('userData')).id,
      holding,
      shares
    });
  } catch (err) {
    console.log(err);
  }
};
const sellStock = async (holding, shares) => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/holdings/sell/`, {
      user_id: JSON.parse(localStorage.getItem()).id,
      holding,
      shares
    });
  } catch (err) {
    console.log(err);
  }
};
const searchForHolding = async symbol => {
  // debugger;
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/stocks/search/?symbol=${symbol}`);
    return response.data;
  } catch (err) {
    console.error('error in search for holding', err.message);
  }
};

/***/ }),

/***/ "./src/images/stock-hero.jpg":
/*!***********************************!*\
  !*** ./src/images/stock-hero.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/stock-hero.09a79b81.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
/*#__PURE__*/
// <React.StrictMode>
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}), // </React.StrictMode>,
document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/protected-routes/ProtectedRoute.js":
/*!************************************************!*\
  !*** ./src/protected-routes/ProtectedRoute.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\protected-routes\\ProtectedRoute.js";



const ProtectedRoute = _ref => {
  let {
    component: Component,
    ...rest
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({}, rest, {
    render: props => {
      if (JSON.parse(localStorage.getItem('userData'))) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 18
          }
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: {
            pathname: '/',
            state: {
              from: props.location
            }
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }
        });
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProtectedRoute);

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.es5.min.js")).then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

/***/ }),

/***/ "./src/screens/HomeScreen.js":
/*!***********************************!*\
  !*** ./src/screens/HomeScreen.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Register */ "./src/components/Register.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Login */ "./src/components/Login.js");
/* harmony import */ var _components_WelcomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WelcomePage */ "./src/components/WelcomePage.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\screens\\HomeScreen.js";





const HomeScreen = () => {
  if (!localStorage.getItem('userData')) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "home",
      className: "container-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-content mt-5 h2 font-weight-light",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "display-4 mb-5 home-header",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, "Welcome to Stock Trader"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, "Experience the thrill of the stock market by utilizing fake money to purchase real stocks and buy or sell shares."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, "Before you start, you must first register."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, "Once you have registered, you will be automatically logged in."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-buttons-wrapper",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Register__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 15
      }
    })))));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WelcomePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (HomeScreen);

/***/ }),

/***/ "./src/screens/PortfolioScreen.js":
/*!****************************************!*\
  !*** ./src/screens/PortfolioScreen.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UserInfo */ "./src/components/UserInfo.js");
/* harmony import */ var _components_CurrentHoldings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CurrentHoldings */ "./src/components/CurrentHoldings.js");
/* harmony import */ var _components_NoCurrentHoldings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NoCurrentHoldings */ "./src/components/NoCurrentHoldings.js");
/* harmony import */ var _components_headers_HeaderPortfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/headers/HeaderPortfolio */ "./src/components/headers/HeaderPortfolio.js");
/* harmony import */ var _components_charts_Chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/charts/Chart */ "./src/components/charts/Chart.js");
/* harmony import */ var _http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http-helpers/tradeUtilities */ "./src/http-helpers/tradeUtilities.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\screens\\PortfolioScreen.js";








const PortfolioScreen = () => {
  const [holdings, setHoldings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchHoldingsData = () => {
      Object(_http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_6__["getHoldings"])().then(holdingsData => {
        setHoldings(holdingsData);
      }).catch(err => console.error('error get holdings', err));
    };

    fetchHoldingsData();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "portfolio-container text-size container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headers_HeaderPortfolio__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "portfolio-top-wrapper d-flex align-items-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserInfo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_charts_Chart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-holdings-list container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, holdings.length > 0 ? holdings.map(holding => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CurrentHoldings__WEBPACK_IMPORTED_MODULE_2__["default"], {
    holding: holding,
    key: holding.holding_id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NoCurrentHoldings__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PortfolioScreen);

/***/ }),

/***/ "./src/screens/TradeScreen.js":
/*!************************************!*\
  !*** ./src/screens/TradeScreen.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-helpers/tradeUtilities */ "./src/http-helpers/tradeUtilities.js");
/* harmony import */ var _components_Recommendations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Recommendations */ "./src/components/Recommendations.js");
/* harmony import */ var _components_SelectedHolding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SelectedHolding */ "./src/components/SelectedHolding.js");
/* harmony import */ var _components_headers_HeaderTrade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/headers/HeaderTrade */ "./src/components/headers/HeaderTrade.js");
/* harmony import */ var _components_AddHolding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AddHolding */ "./src/components/AddHolding.js");
/* harmony import */ var _components_ShowAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ShowAlert */ "./src/components/ShowAlert.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\screens\\TradeScreen.js";










const TradeScreen = props => {
  const [holdings, setHoldings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [selectedHolding, setSelectedHolding] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [isShowAlert, setIsShowAlert] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [sharesPurchased, setSharesPurchased] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [alertMessage, setAlertMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchHoldingsData = () => {
      Object(_http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_2__["getHoldings"])().then(holdingsData => setHoldings(holdingsData)).catch(err => console.error('error get holdings', err));
    };

    const renderSearchedHoldingFromPortfolio = () => {
      const queryStrings = qs__WEBPACK_IMPORTED_MODULE_1___default.a.parse(props.location.search, {
        ignoreQueryPrefix: true
      });

      if (queryStrings.symbol) {
        handleSearchForHolding(queryStrings.symbol);
      }
    };

    renderSearchedHoldingFromPortfolio();
    fetchHoldingsData();
  }, []);

  const updateShares = shares => {
    setSharesPurchased(shares);
  };

  const toggleAlertState = () => {
    setIsShowAlert(prevState => !prevState);
  };

  const handleSearchForHolding = symbol => {
    Object(_http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_2__["searchForHolding"])(symbol).then(selectedHolding => setSelectedHolding(selectedHolding)).catch(err => console.error('error get holdings', err));
  };

  const sellShares = (holding, shares) => {
    Object(_http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_2__["sellStock"])(holding, shares);
    setAlertMessage('sold');
    toggleAlertState();
  };

  const buyShares = async (holding, shares) => {
    // send an http request to buy stocks
    await Object(_http_helpers_tradeUtilities__WEBPACK_IMPORTED_MODULE_2__["buyStock"])(holding, shares); // set alert messsgae to purchased

    setAlertMessage('purchased'); // toggle alert state

    toggleAlertState();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "trade-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headers_HeaderTrade__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, isShowAlert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShowAlert__WEBPACK_IMPORTED_MODULE_7__["default"], {
    toggleAlertState: toggleAlertState,
    isShowAlert: isShowAlert,
    selectedHolding: selectedHolding,
    sharesPurchased: sharesPurchased,
    alertMessage: alertMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddHolding__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleSearchForHolding: handleSearchForHolding,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), selectedHolding ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SelectedHolding__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedHolding: selectedHolding,
    buyShares: buyShares,
    sellShares: sellShares,
    updateShares: updateShares,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Recommendations__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleSearchForHolding: handleSearchForHolding,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(TradeScreen));

/***/ }),

/***/ "./src/style/home.css":
/*!****************************!*\
  !*** ./src/style/home.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/style/index.css":
/*!*****************************!*\
  !*** ./src/style/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/style/mobile.css":
/*!******************************!*\
  !*** ./src/style/mobile.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./mobile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/mobile.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/style/trade.css":
/*!*****************************!*\
  !*** ./src/style/trade.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./trade.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style/trade.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\spira\OneDrive\Documents\PersonalProjects\StockTrader\StockTrader\client\src\index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime-main",2]]]);
//# sourceMappingURL=main.chunk.js.map