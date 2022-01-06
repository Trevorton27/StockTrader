(this["webpackJsonpstock-trading-app"] = this["webpackJsonpstock-trading-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/home.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Styles/home.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Potta+One&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap);"]);
// Module
exports.push([module.i, "/* #home {\r\n  background: url('../images/stock-hero.jpg') no-repeat center center/cover;\r\n  height: 95vh;\r\n  position: relative;\r\n  padding: 40px;\r\n} */\r\n\r\n#home::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n#home * {\r\n  z-index: 10;\r\n}\r\n\r\n.home-card {\r\n  height: 100%;\r\n}\r\n\r\n.home-content {\r\n  width: 80%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 0 20px;\r\n  font-size: 1.3rem;\r\n  color: #fff;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.home-content p {\r\n  font-size: 1.5rem;\r\n  text-align: start;\r\n}\r\n\r\n#home h1 {\r\n  text-align: start;\r\n  font-family: 'Source Code Pro', monospace;\r\n}\r\n\r\n.home-buttons-wrapper .btn {\r\n  margin-right: 20px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.home-header {\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\n#home .col-logo {\r\n  margin: auto;\r\n}\r\n\r\n.home-container {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr;\r\n}\r\n\r\n.home-card .card-body a {\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\r\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  background-color: whitesmoke !important;\r\n}\r\n\r\ncode {\r\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\r\n    monospace;\r\n}\r\n", ""]);
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
/* harmony import */ var _Pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/Home */ "./src/Pages/Home.js");
/* harmony import */ var _Components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/NavBar */ "./src/Components/NavBar.js");
/* harmony import */ var _Pages_Trade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/Trade */ "./src/Pages/Trade.js");
/* harmony import */ var _Pages_Portfolio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/Portfolio */ "./src/Pages/Portfolio.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/UserContext */ "./src/context/UserContext.js");
/* harmony import */ var _AuthorizedRoute_AuthorizedRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthorizedRoute/AuthorizedRoute */ "./src/AuthorizedRoute/AuthorizedRoute.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\App.js";









function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_UserContext__WEBPACK_IMPORTED_MODULE_6__["UserContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app",
    id: "app-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    id: "main-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
    path: "/",
    exact: true,
    component: _Pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthorizedRoute_AuthorizedRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
    path: "/trade",
    component: _Pages_Trade__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthorizedRoute_AuthorizedRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
    path: "/portfolio",
    component: _Pages_Portfolio__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/AuthorizedRoute/AuthorizedRoute.js":
/*!************************************************!*\
  !*** ./src/AuthorizedRoute/AuthorizedRoute.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\AuthorizedRoute\\AuthorizedRoute.js";



const AuthorizedRoute = _ref => {
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

/* harmony default export */ __webpack_exports__["default"] = (AuthorizedRoute);

/***/ }),

/***/ "./src/Components/AddHolding.js":
/*!**************************************!*\
  !*** ./src/Components/AddHolding.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Alert */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var _utilities_tradingUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/tradingUtilities */ "./src/utilities/tradingUtilities.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Components\\AddHolding.js";




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
      const response = await Object(_utilities_tradingUtilities__WEBPACK_IMPORTED_MODULE_2__["searchForHolding"])(symbol);

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
      lineNumber: 78,
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
      lineNumber: 88,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, symbol), " is not a valid symbol. Please try modifying your search."));
};

/* harmony default export */ __webpack_exports__["default"] = (AddHolding);

/***/ }),

/***/ "./src/Components/Charts/HoldingsChart.js":
/*!************************************************!*\
  !*** ./src/Components/Charts/HoldingsChart.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_tradingUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/tradingUtilities */ "./src/utilities/tradingUtilities.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Components\\Charts\\HoldingsChart.js";




const HoldingsChart = () => {
  const [chartData, setChartData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [holdings, setHoldings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [holdingNames, setHoldingNames] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [holdingShares, setHoldingShares] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getHoldingsData();
  }, []);

  const getHoldingsData = () => {
    Object(_utilities_tradingUtilities__WEBPACK_IMPORTED_MODULE_2__["getHoldings"])().then(holdingsData => setHoldings(holdingsData)).catch(err => console.error('error get holdings', err));
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
  }, [holdingNames, holdingShares]);
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

/* harmony default export */ __webpack_exports__["default"] = (HoldingsChart);

/***/ }),

/***/ "./src/Components/Headers/TradeHeader.js":
/*!***********************************************!*\
  !*** ./src/Components/Headers/TradeHeader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Components\\Headers\\TradeHeader.js";


const HeaderTrade = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center mt-3",
    id: "goup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Trading Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "Search stock symbols to trade. For example, type TSLA for Tesla."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderTrade);

/***/ }),

/***/ "./src/Components/LogInForm.js":
/*!*************************************!*\
  !*** ./src/Components/LogInForm.js ***!
  \*************************************/
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
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/UserContext */ "./src/context/UserContext.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Components\\LogInForm.js";






const LoginForm = props => {
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [userName, setUserName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);

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
    className: "btn btn-primary",
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
      lineNumber: 39,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
    closeButton: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Login Form")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: loginUser,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "formBasicEmail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "formBasicPassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 55,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(LoginForm));

/***/ }),

/***/ "./src/Components/Modals/BuyStockModal.js":
/*!************************************************!*\
  !*** ./src/Components/Modals/BuyStockModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _utilities_portfolioUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/portfolioUtilities */ "./src/utilities/portfolioUtilities.js");
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Alert */ "./node_modules/react-bootstrap/esm/Alert.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Components\\Modals\\BuyStockModal.js";





const BuyModal = props => {
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [sharesValue, setSharesValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [wallet, setWallet] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [isShowAlert, setShowAlert] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchWalletData = () => {
      Object(_utilities_portfolioUtilities__WEBPACK_IMPORTED_MODULE_2__["getWalletData"])().then(res => setWallet(res.wallet)).catch(err => console.error('error get wallet', err));
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
      lineNumber: 79,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "Cancel Order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, "Buy Shares"))));
};

/* harmony default export */ __webpack_exports__["default"] = (BuyModal);

/***/ }),

/***/ "./src/Components/Modals/SellStockModal.js":
/*!*************************************************!*\
  !*** ./src/Components/Modals/SellStockModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Components\\Modals\\SellStockModal.js";



const SellStockModal = props => {
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
  }, companyName, ": ", symbol)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
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

/* harmony default export */ __webpack_exports__["default"] = (SellStockModal);

/***/ }),

/***/ "./src/Components/NavBar.js":
/*!**********************************!*\
  !*** ./src/Components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/UserContext */ "./src/context/UserContext.js");
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/cg */ "../node_modules/react-icons/cg/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "../node_modules/react-icons/ai/index.esm.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Components\\NavBar.js";







const NavBar = props => {
  const userName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);

  const logOut = () => {
    localStorage.removeItem('userData');
    props.history.push('/');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    bg: "dark",
    variant: "dark",
    id: "navbar",
    expand: "sm",
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
    onClick: () => props.history.push('/trade'),
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
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Portfolio")), JSON.parse(localStorage.getItem('userData')) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    className: "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_4__["CgProfile"], {
    size: "1.5em",
    className: "mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }), " Welcome ", userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    onClick: logOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Logout")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    onClick: () => props.history.push('/instructions'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "danger",
    size: "md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "About")))); //   return (
  //     <Navbar bg='dark' variant='dark' id='navbar' expand='sm'>
  //       <Navbar.Brand href='/'>
  //         Fantazy <AiOutlineStock /> Stocks
  //       </Navbar.Brand>
  //       <Navbar.Toggle aria-controls='basic-navbar-nav' />
  //       <Navbar.Collapse id='basic-navbar-nav'>
  //         <Nav className='mr-auto d-flex justify-content-center nav-links'>
  //           <Link to='/main'>Trade</Link>
  //           <Link to='/portfolio'>Portfolio</Link>
  //         </Nav>
  //         {JSON.parse(sessionStorage.getItem('userData')) ? (
  //           <Nav>
  //             <Link className='d-flex'>
  //               <CgProfile size='1.5em' className='mr-1' /> {userName}
  //             </Link>
  //             <Nav.Link onClick={logOut}>Logout</Nav.Link>
  //           </Nav>
  //         ) : null}
  //         <Link to='/instructions'>
  //           <Button variant='danger' size='md'>
  //             About
  //           </Button>
  //         </Link>
  //       </Navbar.Collapse>
  //     </Navbar>
  //   );
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(NavBar));

/***/ }),

/***/ "./src/Components/RegisterForm.js":
/*!****************************************!*\
  !*** ./src/Components/RegisterForm.js ***!
  \****************************************/
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
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/UserContext */ "./src/context/UserContext.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Components\\RegisterForm.js";






const RegisterForm = props => {
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [confirmPassword, setConfirmPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [userName, setUserName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  const [isMatch, setIsMatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const handleConfirmPassword = event => {
    setConfirmPassword(event.target.value);
    setIsMatch(event.target.value === password);
  };

  const userContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const registerUser = async e => {
    e.preventDefault();

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/auth/register', {
        user: user,
        email: email,
        password: password
      });
      localStorage.setItem('userData', JSON.stringify(response.data));
      setUserName(response.data.name); //  props.history.push('/');
    } catch (err) {
      console.error('error in registerUser', err.message);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "lg",
    onClick: handleShow,
    className: "btn btn-warning",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    show: show,
    onHide: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, " Register ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: registerUser,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "text",
    placeholder: "Username",
    value: user,
    onChange: e => setUser(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "email",
    placeholder: "Email",
    value: email,
    onChange: e => setEmail(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Text, {
    className: "text-muted",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Your email will never be shared with any 3rd parties.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 77,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    controlId: "password2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Label, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
    type: "password",
    placeholder: "Please confirm your password",
    onChange: handleConfirmPassword,
    className: isMatch ? '' : 'is-invalid',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control.Feedback, {
    type: "invalid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "Passwords do not match")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    type: "submit",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Submit"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(RegisterForm));

/***/ }),

/***/ "./src/Components/SelectHolding.js":
/*!*****************************************!*\
  !*** ./src/Components/SelectHolding.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modals_BuyStockModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modals/BuyStockModal */ "./src/Components/Modals/BuyStockModal.js");
/* harmony import */ var _Modals_SellStockModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modals/SellStockModal */ "./src/Components/Modals/SellStockModal.js");
/* harmony import */ var _utilities_tradingUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/tradingUtilities */ "./src/utilities/tradingUtilities.js");
/* harmony import */ var _Charts_HoldingsChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Charts/HoldingsChart */ "./src/Components/Charts/HoldingsChart.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Components\\SelectHolding.js";






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

  const getHoldingsData = () => {
    Object(_utilities_tradingUtilities__WEBPACK_IMPORTED_MODULE_3__["getHoldings"])().then(holdingsData => setHoldings(holdingsData)).catch(err => console.error('error get holdings', err));
  };

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
    getHoldingsData();
  }, [isHoldingNegativeOrPositive]);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modals_BuyStockModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleBuyShares: handleBuyShares,
    selectedHolding: selectedHolding,
    shares: shares,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modals_SellStockModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, shares)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Charts_HoldingsChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

/***/ "./src/Components/ShowAlert.js":
/*!*************************************!*\
  !*** ./src/Components/ShowAlert.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "../node_modules/react-icons/fi/index.esm.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Components\\ShowAlert.js";




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

/***/ "./src/Pages/Home.js":
/*!***************************!*\
  !*** ./src/Pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_RegisterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/RegisterForm */ "./src/Components/RegisterForm.js");
/* harmony import */ var _Components_LogInForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/LogInForm */ "./src/Components/LogInForm.js");
/* harmony import */ var _Welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Welcome */ "./src/Pages/Welcome.js");
/* harmony import */ var _Styles_home_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Styles/home.css */ "./src/Styles/home.css");
/* harmony import */ var _Styles_home_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Styles_home_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Pages\\Home.js";






const Home = () => {
  if (!localStorage.getItem('userData')) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "home",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "text-center display-4 text-light",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, "Welcome to Stock Trader"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-content mt-5 h2 font-weight-light",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, "Experience the thrill of the stock market without the risk."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, "Before you start, please register to create an account."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "home-buttons-wrapper",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_RegisterForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_LogInForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    })))));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Welcome__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 12
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/Pages/Portfolio.js":
/*!********************************!*\
  !*** ./src/Pages/Portfolio.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Pages\\Portfolio.js";


const Portfolio = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Welcome to the Portfolio Page"));
};

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./src/Pages/Trade.js":
/*!****************************!*\
  !*** ./src/Pages/Trade.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_tradingUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/tradingUtilities */ "./src/utilities/tradingUtilities.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_SelectHolding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/SelectHolding */ "./src/Components/SelectHolding.js");
/* harmony import */ var _Components_Headers_TradeHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Headers/TradeHeader */ "./src/Components/Headers/TradeHeader.js");
/* harmony import */ var _Components_ShowAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/ShowAlert */ "./src/Components/ShowAlert.js");
/* harmony import */ var _Components_AddHolding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/AddHolding */ "./src/Components/AddHolding.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Pages\\Trade.js";









const Trade = props => {
  const [holdings, setHoldings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [selectedHolding, setSelectedHolding] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [isShowAlert, setIsShowAlert] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [sharesPurchased, setSharesPurchased] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [alertMessage, setAlertMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchHoldingsData = () => {
      Object(_utilities_tradingUtilities__WEBPACK_IMPORTED_MODULE_2__["getHoldings"])().then(holdingsData => setHoldings(holdingsData)).catch(err => console.error('error get holdings', err));
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
  }, [props.location.search]);

  const updateShares = shares => {
    setSharesPurchased(shares);
  };

  const toggleAlertState = () => {
    setIsShowAlert(prevState => !prevState);
  };

  const handleSearchForHolding = symbol => {
    Object(_utilities_tradingUtilities__WEBPACK_IMPORTED_MODULE_2__["searchForHolding"])(symbol).then(selectedHolding => setSelectedHolding(selectedHolding)).catch(err => console.error('error get holdings', err));
  };

  const sellShares = (holding, shares) => {
    Object(_utilities_tradingUtilities__WEBPACK_IMPORTED_MODULE_2__["sellStock"])(holding, shares);
    setAlertMessage('Stock successfully sold');
    toggleAlertState();
  };

  const buyShares = async (holding, shares) => {
    // send an http request to buy stocks
    await Object(_utilities_tradingUtilities__WEBPACK_IMPORTED_MODULE_2__["buyStock"])(holding, shares); // set alert messsgae to purchased

    setAlertMessage('Stock successfully purchased'); // toggle alert state

    toggleAlertState();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "trade-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Headers_TradeHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, isShowAlert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_ShowAlert__WEBPACK_IMPORTED_MODULE_6__["default"], {
    toggleAlertState: toggleAlertState,
    isShowAlert: isShowAlert,
    selectedHolding: selectedHolding,
    sharesPurchased: sharesPurchased,
    alertMessage: alertMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_AddHolding__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleSearchForHolding: handleSearchForHolding,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), selectedHolding ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_SelectHolding__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedHolding: selectedHolding,
    buyShares: buyShares,
    sellShares: sellShares,
    updateShares: updateShares,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Trade));

/***/ }),

/***/ "./src/Pages/Welcome.js":
/*!******************************!*\
  !*** ./src/Pages/Welcome.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/UserContext */ "./src/context/UserContext.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/gi */ "../node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "../node_modules/react-icons/ai/index.esm.js");
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\Pages\\Welcome.js";







const Welcome = () => {
  const userName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__["UserContext"]);
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
  }, "Hi ", userName, ", below are some pointers on how to use this app."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
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
  }, "Buy stocks by searching for a specific symbol, or view our recommended stocks. You are initially given a total of 100,000 dollars. (It's not real money, unfortunately.)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/trade",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
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
      lineNumber: 39,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    bg: "transparent",
    className: "home-card mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineDatabase"], {
    size: "7em",
    className: "col-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    className: "d-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
    as: "h1",
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, "Data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "View your personal data, current holdings and statistics. With this information you can make informed decisions on what stocks to buy and sell."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/portfolio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "primary",
    size: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "Personal Information")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ }),

/***/ "./src/Styles/home.css":
/*!*****************************!*\
  !*** ./src/Styles/home.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/home.css");

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

/***/ "./src/context/UserContext.js":
/*!************************************!*\
  !*** ./src/context/UserContext.js ***!
  \************************************/
/*! exports provided: UserContext, UserContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContextProvider", function() { return UserContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\context\\UserContext.js";

const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const UserContextProvider = props => {
  const [userName, setUserName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (JSON.parse(localStorage.getItem('userData'))) {
      setUserName(JSON.parse(localStorage.getItem('userData')).name);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserContext.Provider, {
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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\spira\\OneDrive\\Documents\\PersonalProjects\\StockTrader\\StockTrader\\client\\src\\index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

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

/***/ "./src/utilities/portfolioUtilities.js":
/*!*********************************************!*\
  !*** ./src/utilities/portfolioUtilities.js ***!
  \*********************************************/
/*! exports provided: getWalletData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWalletData", function() { return getWalletData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getWalletData = async () => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/portfolio/wallet/${JSON.parse(localStorage.getItem('data')).id}`);
    return response.data;
  } catch (err) {
    console.error('Error in get wallet', err.message);
  }
};

/***/ }),

/***/ "./src/utilities/tradingUtilities.js":
/*!*******************************************!*\
  !*** ./src/utilities/tradingUtilities.js ***!
  \*******************************************/
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
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/holdings/buy/`, {
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
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/holdings/sell/`, {
      user_id: JSON.parse(localStorage.getItem('userData')).id,
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

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map