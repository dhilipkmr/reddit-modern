/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/config/config.js":
/*!*********************************!*\
  !*** ./server/config/config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var env = "development" || false;

if (env === 'development') {
  process.env.PORT = 4000;
  "development" === 'production';
}

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(/*! babel-polyfill */ "babel-polyfill");

var _config = __webpack_require__(/*! ./config/config */ "./server/config/config.js");

var _config2 = _interopRequireDefault(_config);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _app = __webpack_require__(/*! ../src/app */ "./src/app.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! ./config/config */ "./server/config/config.js");


var app = (0, _express2.default)();
var port = process.env.PORT;

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use(_express2.default.static('build/public'));
app.use('/styles', _express2.default.static('src/pages/styles'));
app.use(_express2.default.static('src/pages/static'));

var loadHtml = function loadHtml(content) {
    return '\n        <html>\n            <head>\n                <meta name="viewport" content="width=device-width, initial-scale=1.0">\n                <link rel="manifest" href="/manifest.json">\n                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">\n                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n                <link rel="icon" href="https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png">\n                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">\n                <style>\n                    @keyframes rippleLoader {\n                        100% {\n                           width: 325px;\n                           height: 325;\n                            opacity: 0;\n                          }\n                    }\n                </style>\n            </head>\n            <body>\n                <div id="root"></div>\n                <script>\n                    window.loader = true;\n                    document.getElementById(\'root\').innerHTML =\n                        \'<div>                            </div>                                <div style="position: relative">                                    <div style="color: #fff; background-color: #ff4501; border-radius: 100%; width: 80px; height: 80px; text-align: center; margin: 45vh auto;z-index: 7;position: relative;">                                        <div style=""/>                                            <svg style="width:80px" viewBox="0 0 20 20"><g><circle fill="#FF4500" cx="10" cy="10" r="10"></circle><path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path></g></svg>                                        </div>                                    </div>                                <span style="transform: translate(-50%, -50%);position: absolute; top: 50%; left: 50%; width: 0; height: 0; background-color: #ff4501; border-radius: 50%; animation: rippleLoader 1.5s ease infinite;"></span>                            </div>                        </div>\';\n                </script>\n                <script src = "/swRegisterer.js"></script>\n                <script src="client_bundle.js"></script>\n                <link rel="stylesheet" type="text/css" href="/styles/common.css">\n                <link rel="stylesheet" type="text/css" href="/styles/home.css">\n                <link rel="stylesheet" type="text/css" href="/styles/popup.css">\n                <link rel="stylesheet" type="text/css" href="/styles/notfound.css">\n            </body>\n        </html>';
};

app.get('*', function (req, res) {
    var template = loadHtml();
    res.send(template);
});

app.listen(port, function () {
    console.log('Server Started on Port: ', port);
});

exports.default = app;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _routes = __webpack_require__(/*! ./pages/routes/routes */ "./src/pages/routes/routes.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_routes2.default, null);
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ "./src/pages/apiCalls/ApiCalls.js":
/*!****************************************!*\
  !*** ./src/pages/apiCalls/ApiCalls.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubRedditInfo = undefined;

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

var _Constants = __webpack_require__(/*! ../constants/Constants */ "./src/pages/constants/Constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSubRedditInfo = exports.getSubRedditInfo = function getSubRedditInfo(subRedditTerm) {
  var url = _Constants.SUB_REDDIT_URL + subRedditTerm + '.json';
  console.log(url);
  return _axios2.default.get(url);
};

/***/ }),

/***/ "./src/pages/components/ContentCard.js":
/*!*********************************************!*\
  !*** ./src/pages/components/ContentCard.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ImageLoader = __webpack_require__(/*! ./ImageLoader */ "./src/pages/components/ImageLoader.js");

var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentCard = function (_Component) {
  _inherits(ContentCard, _Component);

  function ContentCard(props) {
    _classCallCheck(this, ContentCard);

    var _this = _possibleConstructorReturn(this, (ContentCard.__proto__ || Object.getPrototypeOf(ContentCard)).call(this, props));

    _this.renderCardData = _this.renderCardData.bind(_this);
    _this.showImage = _this.showImage.bind(_this);
    _this.removePopup = _this.removePopup.bind(_this);
    _this.state = { showImage: false };
    return _this;
  }

  _createClass(ContentCard, [{
    key: 'showImage',
    value: function showImage(url) {
      this.setState({ showImage: true, url: url });
    }
  }, {
    key: 'removePopup',
    value: function removePopup() {
      this.setState({ showImage: false, url: '' });
    }
  }, {
    key: 'renderCardData',
    value: function renderCardData() {
      var _this2 = this;

      var cardData = this.props.cardData;

      return cardData.children.map(function (item) {
        var data = item.data;
        var title = data.title,
            ups = data.ups,
            thumbnail = data.thumbnail,
            num_comments = data.num_comments,
            author = data.author,
            created_utc = data.created_utc,
            url = data.url;

        var time = new Date(created_utc * 1000).toDateString();
        if (!thumbnail || thumbnail === 'self') {
          return null;
        }
        return _react2.default.createElement(
          'div',
          { className: 'cardWrapper' },
          _react2.default.createElement(
            'div',
            { className: 'imgWrap' },
            _react2.default.createElement('img', { width: '120px', height: '80px', src: thumbnail, onClick: _this2.showImage.bind(_this2, url) })
          ),
          _react2.default.createElement(
            'div',
            { className: 'detailsCardSection' },
            _react2.default.createElement(
              'div',
              { className: 'title' },
              title
            ),
            _react2.default.createElement(
              'div',
              { className: 'details' },
              _react2.default.createElement('i', { className: 'fas fa-igloo' }),
              _react2.default.createElement(
                'span',
                null,
                'comments: ' + num_comments
              ),
              _react2.default.createElement(
                'span',
                null,
                ' Published ' + time
              ),
              _react2.default.createElement(
                'span',
                null,
                ' by '
              ),
              _react2.default.createElement(
                'span',
                { className: 'author' },
                author
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'voting' },
            _react2.default.createElement(
              'span',
              null,
              'ups : ' + ups
            )
          ),
          _react2.default.createElement('br', null)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var cardData = this.props.cardData;
      var _state = this.state,
          showImage = _state.showImage,
          url = _state.url;

      return _react2.default.createElement(
        'div',
        null,
        cardData ? _react2.default.createElement(
          'div',
          { className: 'contentCardWrapper col-10' },
          this.renderCardData()
        ) : _react2.default.createElement(
          'div',
          { className: 'noCardContent' },
          _react2.default.createElement(
            'svg',
            { style: { width: '80px' }, viewBox: '0 0 20 20' },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('circle', { fill: '#FF4500', cx: '10', cy: '10', r: '10' }),
              _react2.default.createElement('path', { fill: '#FFF', d: 'M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'noCardContentTxt' },
            'Search to load sub-reddits'
          )
        ),
        showImage && _react2.default.createElement(_ImageLoader2.default, { url: url, removePopup: this.removePopup })
      );
    }
  }]);

  return ContentCard;
}(_react.Component);

exports.default = ContentCard;

/***/ }),

/***/ "./src/pages/components/ContentHeader.js":
/*!***********************************************!*\
  !*** ./src/pages/components/ContentHeader.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentHeader = function (_Component) {
  _inherits(ContentHeader, _Component);

  function ContentHeader(props) {
    _classCallCheck(this, ContentHeader);

    var _this = _possibleConstructorReturn(this, (ContentHeader.__proto__ || Object.getPrototypeOf(ContentHeader)).call(this, props));

    _this.updateSearchTerm = _this.updateSearchTerm.bind(_this);
    _this.state = {
      searchTerm: 'cats'
    };
    return _this;
  }

  _createClass(ContentHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.triggerSearch('cats');
    }
  }, {
    key: 'updateSearchTerm',
    value: function updateSearchTerm(e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        var searchTerm = this.state.searchTerm;

        this.props.triggerSearch(searchTerm);
      } else {
        this.setState({
          searchTerm: e.target.value
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state$searchTerm = this.state.searchTerm,
          searchTerm = _state$searchTerm === undefined ? '' : _state$searchTerm;

      return _react2.default.createElement(
        'div',
        { className: 'contentHeaderWrap col-6 col-md-12 col-sm-12' },
        _react2.default.createElement(
          'div',
          { className: 'search' },
          _react2.default.createElement('input', { placeholder: 'search', onKeyUp: this.updateSearchTerm })
        )
      );
    }
  }]);

  return ContentHeader;
}(_react.Component);

exports.default = ContentHeader;

/***/ }),

/***/ "./src/pages/components/Home.js":
/*!**************************************!*\
  !*** ./src/pages/components/Home.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ApiCalls = __webpack_require__(/*! ../apiCalls/ApiCalls */ "./src/pages/apiCalls/ApiCalls.js");

var _SideBar = __webpack_require__(/*! ./SideBar */ "./src/pages/components/SideBar.js");

var _SideBar2 = _interopRequireDefault(_SideBar);

var _ContentHeader = __webpack_require__(/*! ./ContentHeader */ "./src/pages/components/ContentHeader.js");

var _ContentHeader2 = _interopRequireDefault(_ContentHeader);

var _ContentCard = __webpack_require__(/*! ./ContentCard */ "./src/pages/components/ContentCard.js");

var _ContentCard2 = _interopRequireDefault(_ContentCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.triggerSearch = _this.triggerSearch.bind(_this);
    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'triggerSearch',
    value: function triggerSearch(searchTerm) {
      var _this2 = this;

      (0, _ApiCalls.getSubRedditInfo)(searchTerm).then(function (response) {
        if (response.data) {
          _this2.setState({ data: response.data.data, error: false }, function () {
            console.log(_this2.state);
          });
        } else {
          _this2.setState({ error: true });
        }
      }).catch(function (errMsg) {
        _this2.setState({ error: true });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.state.data;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'home' },
          _react2.default.createElement(_SideBar2.default, null),
          _react2.default.createElement(
            'section',
            { className: 'contentSection col-12 col-md-12 col-sm-12' },
            _react2.default.createElement(_ContentHeader2.default, { triggerSearch: this.triggerSearch }),
            _react2.default.createElement(_ContentCard2.default, { cardData: data })
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ "./src/pages/components/ImageLoader.js":
/*!*********************************************!*\
  !*** ./src/pages/components/ImageLoader.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageLoader = function (_Component) {
  _inherits(ImageLoader, _Component);

  function ImageLoader(props) {
    _classCallCheck(this, ImageLoader);

    var _this = _possibleConstructorReturn(this, (ImageLoader.__proto__ || Object.getPrototypeOf(ImageLoader)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ImageLoader, [{
    key: 'handleClick',
    value: function handleClick(e) {
      if (e.target.classList.contains('imagePopup')) {
        this.props.removePopup();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var url = this.props.url;

      return _react2.default.createElement(
        'div',
        { className: 'imagePopup', onClick: this.handleClick },
        _react2.default.createElement('img', { className: 'img', src: url })
      );
    }
  }]);

  return ImageLoader;
}(_react.Component);

exports.default = ImageLoader;

/***/ }),

/***/ "./src/pages/components/NotFound.js":
/*!******************************************!*\
  !*** ./src/pages/components/NotFound.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound(props) {
    _classCallCheck(this, NotFound);

    var _this = _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));

    _this.head = _this.head.bind(_this);
    return _this;
  }

  _createClass(NotFound, [{
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet2.default,
        null,
        _react2.default.createElement(
          'title',
          null,
          'Page Not Found'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.head(),
        _react2.default.createElement(
          'div',
          { className: 'notfoundContainer' },
          _react2.default.createElement(
            'h5',
            { className: 'notFoundText fb textCenter' },
            'Sorry, this page does not exist!'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'ul',
            { className: 'notfoundUL textCenter' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'div',
                { className: 'blueBtn' },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  { to: '/login', className: 'white' },
                  ' Login '
                )
              )
            )
          )
        )
      );
    }
  }]);

  return NotFound;
}(_react.Component);

exports.default = NotFound;

/***/ }),

/***/ "./src/pages/components/SideBar.js":
/*!*****************************************!*\
  !*** ./src/pages/components/SideBar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(/*! ../constants/Constants */ "./src/pages/constants/Constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBar = function (_Component) {
  _inherits(SideBar, _Component);

  function SideBar(props) {
    _classCallCheck(this, SideBar);

    var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));

    _this.sideMenuClick = _this.sideMenuClick.bind(_this);
    _this.renderSideMenu = _this.renderSideMenu.bind(_this);
    _this.state = {
      menu_items: _Constants.SIDEBAR_MENU_ITEMS,
      activeIndex: ''
    };
    return _this;
  }

  _createClass(SideBar, [{
    key: 'sideMenuClick',
    value: function sideMenuClick(e) {
      var itemIndex = e.target.dataset.itemIndex;
      this.setState({ activeIndex: itemIndex });
    }
  }, {
    key: 'renderSideMenu',
    value: function renderSideMenu() {
      var _state = this.state,
          _state$menu_items = _state.menu_items,
          menu_items = _state$menu_items === undefined ? [] : _state$menu_items,
          _state$activeIndex = _state.activeIndex,
          activeIndex = _state$activeIndex === undefined ? '' : _state$activeIndex;

      return menu_items.map(function (item, index) {
        var sideBarItemClass = item.heading ? 'sideHeading' : '';
        sideBarItemClass += !item.heading && index.toString() === activeIndex ? ' activeSideMenu' : '';
        return _react2.default.createElement(
          'div',
          { key: 'item_' + index, 'data-item-index': index, className: 'content ' + sideBarItemClass },
          item.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'sidebar' },
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          _react2.default.createElement(
            'svg',
            { className: 'redditIconSvg', viewBox: '0 0 20 20' },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('circle', { fill: '#FF4500', cx: '10', cy: '10', r: '10' }),
              _react2.default.createElement('path', { fill: '#FFF', d: 'M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z' })
            )
          ),
          _react2.default.createElement(
            'svg',
            { className: 'redditNameSvg', viewBox: '0 0 55 17.44' },
            _react2.default.createElement(
              'g',
              { fill: '#1c1c1c' },
              _react2.default.createElement('circle', { fill: '#FF4500', cx: '45.77', cy: '3.33', r: '2.05' }),
              _react2.default.createElement('path', { fill: 'inherit', d: 'M16.73,12.05a1.44,1.44,0,0,0,1.54-1.48,4.91,4.91,0,0,0-.1-0.83,5.66,5.66,0,0,0-5.34-4.61c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a5.47,5.47,0,0,0,4.26-1.78,1.19,1.19,0,0,0-.19-1.77,1.25,1.25,0,0,0-1.53.16,3.78,3.78,0,0,1-2.54,1.09,3.42,3.42,0,0,1-3.14-3.08h7ZM12.82,7.44a3.3,3.3,0,0,1,3,2.56h-6A3.3,3.3,0,0,1,12.82,7.44Z' }),
              _react2.default.createElement('path', { fill: 'inherit', d: 'M7.44,6.32a1.15,1.15,0,0,0-1-1.14A4.46,4.46,0,0,0,2.31,6.69V6.54A1.15,1.15,0,1,0,0,6.54V16a1.18,1.18,0,0,0,1.08,1.2A1.15,1.15,0,0,0,2.31,16V11.15A3.51,3.51,0,0,1,6.15,7.47H6.38A1.15,1.15,0,0,0,7.44,6.32Z' }),
              _react2.default.createElement('path', { fill: 'inherit', d: 'M46.92,7.56a1.15,1.15,0,0,0-2.31,0V16a1.15,1.15,0,1,0,2.31,0V7.56Z' }),
              _react2.default.createElement('path', { fill: 'inherit', d: 'M29.87,1.15A1.15,1.15,0,0,0,28.72,0h0a1.15,1.15,0,0,0-1.15,1.15V6.31a4,4,0,0,0-2.95-1.18c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a4.08,4.08,0,0,0,3-1.19A1.15,1.15,0,0,0,29.87,16V1.15Zm-5.26,14c-1.77,0-3.21-1.72-3.21-3.85s1.43-3.85,3.21-3.85,3.21,1.72,3.21,3.85S26.39,15.13,24.62,15.13Z' }),
              _react2.default.createElement('path', { fill: 'inherit', d: 'M41.92,1.15A1.15,1.15,0,0,0,40.77,0h0a1.15,1.15,0,0,0-1.15,1.15V6.31a4,4,0,0,0-2.95-1.18c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a4.08,4.08,0,0,0,3-1.19A1.15,1.15,0,0,0,41.92,16V1.15Zm-5.26,14c-1.77,0-3.21-1.72-3.21-3.85s1.43-3.85,3.21-3.85,3.21,1.72,3.21,3.85S38.44,15.13,36.67,15.13Z' }),
              _react2.default.createElement('path', { fill: 'inherit', d: 'M52.91,16V7.44h1a1,1,0,0,0,1.06-1,1,1,0,0,0-1-1.09H52.91V3.76a1.18,1.18,0,0,0-1.08-1.19,1.15,1.15,0,0,0-1.23,1.15V5.38h-1a1,1,0,0,0-1.06,1,1,1,0,0,0,1,1.09h1V16a1.15,1.15,0,0,0,1.15,1.15h0A1.15,1.15,0,0,0,52.91,16Z' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { onClick: this.sideMenuClick },
          this.renderSideMenu()
        )
      );
    }
  }]);

  return SideBar;
}(_react.Component);

exports.default = SideBar;

/***/ }),

/***/ "./src/pages/constants/Constants.js":
/*!******************************************!*\
  !*** ./src/pages/constants/Constants.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SUB_REDDIT_URL = exports.SUB_REDDIT_URL = 'https://www.reddit.com/r/';
var SIDEBAR_MENU_ITEMS = exports.SIDEBAR_MENU_ITEMS = [{ name: 'Reddit Feeds', heading: true }, { name: 'Hot' }, { name: 'New' }, { name: 'Top' }, { name: 'Rising' }, { name: 'Controversial' }, { name: 'Others', heading: true }, { name: 'Coins' }, { name: 'Premium' }, { name: 'Help' }, { name: 'Settings' }];

/***/ }),

/***/ "./src/pages/routes/routes.js":
/*!************************************!*\
  !*** ./src/pages/routes/routes.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _NotFound = __webpack_require__(/*! ../components/NotFound */ "./src/pages/components/NotFound.js");

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Home = __webpack_require__(/*! ../components/Home */ "./src/pages/components/Home.js");

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', exact: true, render: function render(props) {
                return _react2.default.createElement(
                    'div',
                    null,
                    'Login'
                );
            } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, render: function render(props) {
                return _react2.default.createElement(_Home2.default, props);
            } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/home', exact: true, render: function render(props) {
                return _react2.default.createElement(_Home2.default, props);
            } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
                return _react2.default.createElement(_NotFound2.default, null);
            } })
    );
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGlDYWxscy9BcGlDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db250ZW50Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db250ZW50SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29uc3RhbnRzL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiXSwibmFtZXMiOlsiZW52IiwicHJvY2VzcyIsIlBPUlQiLCJyZXF1aXJlIiwiYXBwIiwicG9ydCIsInVzZSIsImJvZHlQYXJzZXIiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwiZXhwcmVzcyIsInN0YXRpYyIsImxvYWRIdG1sIiwiY29udGVudCIsImdldCIsInJlcSIsInJlcyIsInRlbXBsYXRlIiwic2VuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJDb21wb25lbnQiLCJnZXRTdWJSZWRkaXRJbmZvIiwic3ViUmVkZGl0VGVybSIsInVybCIsIlNVQl9SRURESVRfVVJMIiwiYXhpb3MiLCJDb250ZW50Q2FyZCIsInByb3BzIiwicmVuZGVyQ2FyZERhdGEiLCJiaW5kIiwic2hvd0ltYWdlIiwicmVtb3ZlUG9wdXAiLCJzdGF0ZSIsInNldFN0YXRlIiwiY2FyZERhdGEiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJkYXRhIiwidGl0bGUiLCJ1cHMiLCJ0aHVtYm5haWwiLCJudW1fY29tbWVudHMiLCJhdXRob3IiLCJjcmVhdGVkX3V0YyIsInRpbWUiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwid2lkdGgiLCJDb250ZW50SGVhZGVyIiwidXBkYXRlU2VhcmNoVGVybSIsInNlYXJjaFRlcm0iLCJ0cmlnZ2VyU2VhcmNoIiwiZSIsImtleSIsIndoaWNoIiwia2V5Q29kZSIsInRhcmdldCIsInZhbHVlIiwiSG9tZSIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIiwiY2F0Y2giLCJlcnJNc2ciLCJJbWFnZUxvYWRlciIsImhhbmRsZUNsaWNrIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJOb3RGb3VuZCIsImhlYWQiLCJTaWRlQmFyIiwic2lkZU1lbnVDbGljayIsInJlbmRlclNpZGVNZW51IiwibWVudV9pdGVtcyIsIlNJREVCQVJfTUVOVV9JVEVNUyIsImFjdGl2ZUluZGV4IiwiaXRlbUluZGV4IiwiZGF0YXNldCIsImluZGV4Iiwic2lkZUJhckl0ZW1DbGFzcyIsImhlYWRpbmciLCJ0b1N0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxNQUFNQyxhQUFBLElBQXdCLEtBQWxDOztBQUVBLElBQUlELFFBQVEsYUFBWixFQUEyQjtBQUN6QkMsVUFBUUQsR0FBUixDQUFZRSxJQUFaLEdBQW1CLElBQW5CO0FBQ0FELGVBQUEsS0FBeUIsWUFBekI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKRDs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBTEFFLG1CQUFPQSxDQUFDLGtEQUFSOzs7QUFPQSxJQUFNQyxNQUFNLHdCQUFaO0FBQ0EsSUFBTUMsT0FBT0osUUFBUUQsR0FBUixDQUFZRSxJQUF6Qjs7QUFFQUUsSUFBSUUsR0FBSixDQUFRQyxxQkFBV0MsVUFBWCxDQUFzQixFQUFFQyxVQUFVLEtBQVosRUFBdEIsQ0FBUjtBQUNBTCxJQUFJRSxHQUFKLENBQVFDLHFCQUFXRyxJQUFYLEVBQVI7QUFDQU4sSUFBSUUsR0FBSixDQUFRSyxrQkFBUUMsTUFBUixDQUFlLGNBQWYsQ0FBUjtBQUNBUixJQUFJRSxHQUFKLENBQVEsU0FBUixFQUFtQkssa0JBQVFDLE1BQVIsQ0FBZSxrQkFBZixDQUFuQjtBQUNBUixJQUFJRSxHQUFKLENBQVFLLGtCQUFRQyxNQUFSLENBQWUsa0JBQWYsQ0FBUjs7QUFFQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsT0FBRCxFQUFhO0FBQzFCO0FBNENILENBN0NEOztBQStDQVYsSUFBSVcsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN2QixRQUFNQyxXQUFXTCxVQUFqQjtBQUNBSSxRQUFJRSxJQUFKLENBQVNELFFBQVQ7QUFDSCxDQUhEOztBQUtBZCxJQUFJZ0IsTUFBSixDQUFXZixJQUFYLEVBQWlCLFlBQU07QUFDbkJnQixZQUFRQyxHQUFSLENBQVksMEJBQVosRUFBd0NqQixJQUF4QztBQUNILENBRkQ7O2tCQUllRCxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFZjs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJtQixHOzs7Ozs7Ozs7OztpQ0FDUjtBQUNMLG1CQUNJLDhCQUFDLGdCQUFELE9BREo7QUFHSDs7OztFQUw0QkMsZ0I7O2tCQUFaRCxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7QUFDTyxJQUFNRSw4Q0FBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxhQUFELEVBQW1CO0FBQ2pELE1BQU1DLE1BQU1DLDRCQUFpQkYsYUFBakIsR0FBaUMsT0FBN0M7QUFDQUwsVUFBUUMsR0FBUixDQUFZSyxHQUFaO0FBQ0EsU0FBT0UsZ0JBQU1kLEdBQU4sQ0FBVVksR0FBVixDQUFQO0FBQ0QsQ0FKTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkcsVzs7O0FBQ25CLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUQsSUFBZixPQUFqQjtBQUNBLFVBQUtFLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkYsSUFBakIsT0FBbkI7QUFDQSxVQUFLRyxLQUFMLEdBQWEsRUFBQ0YsV0FBVyxLQUFaLEVBQWI7QUFMaUI7QUFNbEI7Ozs7OEJBQ1NQLEcsRUFBSztBQUNiLFdBQUtVLFFBQUwsQ0FBYyxFQUFFSCxXQUFXLElBQWIsRUFBbUJQLEtBQUtBLEdBQXhCLEVBQWQ7QUFDRDs7O2tDQUNhO0FBQ1osV0FBS1UsUUFBTCxDQUFjLEVBQUVILFdBQVcsS0FBYixFQUFvQlAsS0FBSSxFQUF4QixFQUFkO0FBQ0Q7OztxQ0FDZ0I7QUFBQTs7QUFBQSxVQUNSVyxRQURRLEdBQ0ksS0FBS1AsS0FEVCxDQUNSTyxRQURROztBQUVmLGFBQU9BLFNBQVNDLFFBQVQsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUNyQyxZQUFNQyxPQUFPRCxLQUFLQyxJQUFsQjtBQURxQyxZQUU3QkMsS0FGNkIsR0FFcUNELElBRnJDLENBRTdCQyxLQUY2QjtBQUFBLFlBRXRCQyxHQUZzQixHQUVxQ0YsSUFGckMsQ0FFdEJFLEdBRnNCO0FBQUEsWUFFakJDLFNBRmlCLEdBRXFDSCxJQUZyQyxDQUVqQkcsU0FGaUI7QUFBQSxZQUVOQyxZQUZNLEdBRXFDSixJQUZyQyxDQUVOSSxZQUZNO0FBQUEsWUFFUUMsTUFGUixHQUVxQ0wsSUFGckMsQ0FFUUssTUFGUjtBQUFBLFlBRWdCQyxXQUZoQixHQUVxQ04sSUFGckMsQ0FFZ0JNLFdBRmhCO0FBQUEsWUFFNkJyQixHQUY3QixHQUVxQ2UsSUFGckMsQ0FFNkJmLEdBRjdCOztBQUdyQyxZQUFNc0IsT0FBTyxJQUFJQyxJQUFKLENBQVNGLGNBQWMsSUFBdkIsRUFBNkJHLFlBQTdCLEVBQWI7QUFDQSxZQUFJLENBQUNOLFNBQUQsSUFBY0EsY0FBYyxNQUFoQyxFQUF3QztBQUN0QyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxlQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsU0FBZjtBQUNFLG1EQUFLLE9BQU0sT0FBWCxFQUFtQixRQUFPLE1BQTFCLEVBQWlDLEtBQUtBLFNBQXRDLEVBQWlELFNBQVMsT0FBS1gsU0FBTCxDQUFlRCxJQUFmLENBQW9CLE1BQXBCLEVBQTBCTixHQUExQixDQUExRDtBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsT0FBZjtBQUF3QmdCO0FBQXhCLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxTQUFmO0FBQ0UsbURBQUcsV0FBVSxjQUFiLEdBREY7QUFFRTtBQUFBO0FBQUE7QUFBTywrQkFBY0c7QUFBckIsZUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFPLGdDQUFnQkc7QUFBdkIsZUFIRjtBQUdzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSHRDO0FBR3VEO0FBQUE7QUFBQSxrQkFBTSxXQUFVLFFBQWhCO0FBQTBCRjtBQUExQjtBQUh2RDtBQUZGLFdBSkY7QUFZRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUE7QUFBTyx5QkFBV0g7QUFBbEI7QUFERixXQVpGO0FBZUU7QUFmRixTQURGO0FBb0JELE9BM0JNLENBQVA7QUE0QkQ7Ozs2QkFFUTtBQUFBLFVBQ0FOLFFBREEsR0FDWSxLQUFLUCxLQURqQixDQUNBTyxRQURBO0FBQUEsbUJBRWtCLEtBQUtGLEtBRnZCO0FBQUEsVUFFQUYsU0FGQSxVQUVBQSxTQUZBO0FBQUEsVUFFV1AsR0FGWCxVQUVXQSxHQUZYOztBQUdQLGFBQ0U7QUFBQTtBQUFBO0FBQ0dXLG1CQUNDO0FBQUE7QUFBQSxZQUFLLFdBQVcsMkJBQWhCO0FBQ0csZUFBS04sY0FBTDtBQURILFNBREQsR0FJQztBQUFBO0FBQUEsWUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxPQUFPLEVBQUNvQixPQUFPLE1BQVIsRUFBWixFQUE2QixTQUFRLFdBQXJDO0FBQWlEO0FBQUE7QUFBQTtBQUFHLHdEQUFRLE1BQUssU0FBYixFQUF1QixJQUFHLElBQTFCLEVBQStCLElBQUcsSUFBbEMsRUFBdUMsR0FBRSxJQUF6QyxHQUFIO0FBQTBELHNEQUFNLE1BQUssTUFBWCxFQUFrQixHQUFFLHlpQkFBcEI7QUFBMUQ7QUFBakQsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFBQTtBQUFBO0FBRkYsU0FMSjtBQVVHbEIscUJBQWEsOEJBQUMscUJBQUQsSUFBYSxLQUFLUCxHQUFsQixFQUF1QixhQUFhLEtBQUtRLFdBQXpDO0FBVmhCLE9BREY7QUFjRDs7OztFQS9Ec0NYLGdCOztrQkFBcEJNLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7Ozs7Ozs7Ozs7SUFFcUJ1QixhOzs7QUFDbkIseUJBQVl0QixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUt1QixnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQnJCLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0csS0FBTCxHQUFhO0FBQ1htQixrQkFBWTtBQURELEtBQWI7QUFIaUI7QUFNbEI7Ozs7d0NBRWtCO0FBQ2pCLFdBQUt4QixLQUFMLENBQVd5QixhQUFYLENBQXlCLE1BQXpCO0FBQ0Q7OztxQ0FDZ0JDLEMsRUFBRztBQUNsQixVQUFNQyxNQUFNRCxFQUFFRSxLQUFGLElBQVdGLEVBQUVHLE9BQXpCO0FBQ0EsVUFBSUYsUUFBUSxFQUFaLEVBQWdCO0FBQUEsWUFDUEgsVUFETyxHQUNPLEtBQUtuQixLQURaLENBQ1BtQixVQURPOztBQUVkLGFBQUt4QixLQUFMLENBQVd5QixhQUFYLENBQXlCRCxVQUF6QjtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtsQixRQUFMLENBQWM7QUFDWmtCLHNCQUFZRSxFQUFFSSxNQUFGLENBQVNDO0FBRFQsU0FBZDtBQUdEO0FBQ0Y7Ozs2QkFFUTtBQUFBLDhCQUNtQixLQUFLMUIsS0FEeEIsQ0FDQW1CLFVBREE7QUFBQSxVQUNBQSxVQURBLHFDQUNhLEVBRGI7O0FBRVIsYUFDQztBQUFBO0FBQUEsVUFBSyxXQUFVLDZDQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0UsbURBQU8sYUFBWSxRQUFuQixFQUE0QixTQUFTLEtBQUtELGdCQUExQztBQURGO0FBREYsT0FERDtBQU9BOzs7O0VBakN3QzlCLGdCOztrQkFBdEI2QixhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RyQjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCVSxJOzs7QUFDbkIsZ0JBQVloQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUt5QixhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJ2QixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLEtBQUwsR0FBYSxFQUFiO0FBSGlCO0FBTWxCOzs7O3dDQUVtQixDQUVuQjs7O2tDQUVhbUIsVSxFQUFZO0FBQUE7O0FBQ3hCLHNDQUFpQkEsVUFBakIsRUFDR1MsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixZQUFJQSxTQUFTdkIsSUFBYixFQUFtQjtBQUNuQixpQkFBS0wsUUFBTCxDQUFjLEVBQUVLLE1BQU11QixTQUFTdkIsSUFBVCxDQUFjQSxJQUF0QixFQUE0QndCLE9BQU8sS0FBbkMsRUFBZCxFQUF5RCxZQUFNO0FBQzdEN0Msb0JBQVFDLEdBQVIsQ0FBWSxPQUFLYyxLQUFqQjtBQUNELFdBRkQ7QUFHQyxTQUpELE1BSU87QUFDTCxpQkFBS0MsUUFBTCxDQUFjLEVBQUU2QixPQUFPLElBQVQsRUFBZDtBQUNEO0FBQ0YsT0FUSCxFQVVHQyxLQVZILENBVVMsVUFBQ0MsTUFBRCxFQUFZO0FBQ2pCLGVBQUsvQixRQUFMLENBQWMsRUFBRTZCLE9BQU8sSUFBVCxFQUFkO0FBQ0QsT0FaSDtBQWFEOzs7NkJBRVE7QUFBQSxVQUNBeEIsSUFEQSxHQUNRLEtBQUtOLEtBRGIsQ0FDQU0sSUFEQTs7QUFFUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsTUFBZjtBQUNFLHdDQUFDLGlCQUFELE9BREY7QUFFRTtBQUFBO0FBQUEsY0FBUyxXQUFVLDJDQUFuQjtBQUNFLDBDQUFDLHVCQUFELElBQWUsZUFBZSxLQUFLYyxhQUFuQyxHQURGO0FBRUUsMENBQUMscUJBQUQsSUFBYSxVQUFVZCxJQUF2QjtBQUZGO0FBRkY7QUFERixPQURGO0FBVUQ7Ozs7RUF6QytCbEIsZ0I7O2tCQUFidUMsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQckI7Ozs7Ozs7Ozs7OztJQUVxQk0sVzs7O0FBQ25CLHVCQUFZdEMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLdUMsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCckMsSUFBakIsT0FBbkI7QUFGaUI7QUFHbEI7Ozs7Z0NBQ1d3QixDLEVBQUc7QUFDYixVQUFJQSxFQUFFSSxNQUFGLENBQVNVLFNBQVQsQ0FBbUJDLFFBQW5CLENBQTRCLFlBQTVCLENBQUosRUFBK0M7QUFDN0MsYUFBS3pDLEtBQUwsQ0FBV0ksV0FBWDtBQUNEO0FBQ0Y7Ozs2QkFDUTtBQUFBLFVBQ0FSLEdBREEsR0FDTyxLQUFLSSxLQURaLENBQ0FKLEdBREE7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWYsRUFBNEIsU0FBUyxLQUFLMkMsV0FBMUM7QUFDRSwrQ0FBSyxXQUFVLEtBQWYsRUFBc0IsS0FBSzNDLEdBQTNCO0FBREYsT0FERjtBQUtEOzs7O0VBakJzQ0gsZ0I7O2tCQUFwQjZDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNSSxROzs7QUFDSixvQkFBWTFDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBSzJDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVV6QyxJQUFWLE9BQVo7QUFGaUI7QUFHbEI7Ozs7MkJBRU07QUFDTCxhQUNFO0FBQUMsNkJBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQURGO0FBS0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0csYUFBS3lDLElBQUwsRUFESDtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsbUJBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFVLDRCQUFkO0FBQUE7QUFBQTtBQURGLFNBRkY7QUFLRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFVLHVCQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsU0FBZjtBQUNBO0FBQUMseUNBQUQ7QUFBQSxvQkFBUyxJQUFHLFFBQVosRUFBcUIsV0FBVSxPQUEvQjtBQUFBO0FBQUE7QUFEQTtBQURGO0FBREY7QUFERjtBQUxGLE9BREY7QUFpQkQ7Ozs7RUFoQ29CbEQsZ0I7O2tCQWtDUmlELFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENmOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJFLE87OztBQUNuQixtQkFBWTVDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFFakIsVUFBSzZDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQjNDLElBQW5CLE9BQXJCO0FBQ0EsVUFBSzRDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQjVDLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0csS0FBTCxHQUFhO0FBQ1gwQyxrQkFBWUMsNkJBREQ7QUFFWEMsbUJBQWE7QUFGRixLQUFiO0FBSmlCO0FBUWxCOzs7O2tDQUVhdkIsQyxFQUFHO0FBQ2YsVUFBTXdCLFlBQVl4QixFQUFFSSxNQUFGLENBQVNxQixPQUFULENBQWlCRCxTQUFuQztBQUNBLFdBQUs1QyxRQUFMLENBQWMsRUFBRTJDLGFBQWFDLFNBQWYsRUFBZDtBQUNEOzs7cUNBRWdCO0FBQUEsbUJBQzRCLEtBQUs3QyxLQURqQztBQUFBLHFDQUNSMEMsVUFEUTtBQUFBLFVBQ1JBLFVBRFEscUNBQ0ssRUFETDtBQUFBLHNDQUNTRSxXQURUO0FBQUEsVUFDU0EsV0FEVCxzQ0FDc0IsRUFEdEI7O0FBRWYsYUFBT0YsV0FBV3RDLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU8wQyxLQUFQLEVBQWlCO0FBQ3JDLFlBQUlDLG1CQUFvQjNDLEtBQUs0QyxPQUFMLEdBQWUsYUFBZixHQUErQixFQUF2RDtBQUNBRCw0QkFBcUIsQ0FBQzNDLEtBQUs0QyxPQUFOLElBQWlCRixNQUFNRyxRQUFOLE9BQXFCTixXQUF2QyxHQUFzRCxpQkFBdEQsR0FBMEUsRUFBOUY7QUFDQSxlQUFPO0FBQUE7QUFBQSxZQUFLLEtBQUssVUFBVUcsS0FBcEIsRUFBMkIsbUJBQWlCQSxLQUE1QyxFQUFtRCxXQUFXLGFBQWFDLGdCQUEzRTtBQUErRjNDLGVBQUs4QztBQUFwRyxTQUFQO0FBQ0QsT0FKTSxDQUFQO0FBS0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmLEVBQStCLFNBQVEsV0FBdkM7QUFBbUQ7QUFBQTtBQUFBO0FBQUcsd0RBQVEsTUFBSyxTQUFiLEVBQXVCLElBQUcsSUFBMUIsRUFBK0IsSUFBRyxJQUFsQyxFQUF1QyxHQUFFLElBQXpDLEdBQUg7QUFBMEQsc0RBQU0sTUFBSyxNQUFYLEVBQWtCLEdBQUUseWlCQUFwQjtBQUExRDtBQUFuRCxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmLEVBQStCLFNBQVEsY0FBdkM7QUFBc0Q7QUFBQTtBQUFBLGdCQUFHLE1BQUssU0FBUjtBQUFrQix3REFBUSxNQUFLLFNBQWIsRUFBdUIsSUFBRyxPQUExQixFQUFrQyxJQUFHLE1BQXJDLEVBQTRDLEdBQUUsTUFBOUMsR0FBbEI7QUFBZ0Ysc0RBQU0sTUFBSyxTQUFYLEVBQXFCLEdBQUUsc1VBQXZCLEdBQWhGO0FBQXFiLHNEQUFNLE1BQUssU0FBWCxFQUFxQixHQUFFLDZNQUF2QixHQUFyYjtBQUFpcUIsc0RBQU0sTUFBSyxTQUFYLEVBQXFCLEdBQUUsb0VBQXZCLEdBQWpxQjtBQUFvd0Isc0RBQU0sTUFBSyxTQUFYLEVBQXFCLEdBQUUsbVNBQXZCLEdBQXB3QjtBQUFza0Msc0RBQU0sTUFBSyxTQUFYLEVBQXFCLEdBQUUsbVNBQXZCLEdBQXRrQztBQUF3NEMsc0RBQU0sTUFBSyxTQUFYLEVBQXFCLEdBQUUsd05BQXZCO0FBQXg0QztBQUF0RDtBQUZGLFNBREY7QUFLRTtBQUFBO0FBQUEsWUFBSyxTQUFTLEtBQUtYLGFBQW5CO0FBQ0csZUFBS0MsY0FBTDtBQURIO0FBTEYsT0FERjtBQVdEOzs7O0VBckNrQ3JELGdCOztrQkFBaEJtRCxPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hkLElBQU0vQywwQ0FBaUIsMkJBQXZCO0FBQ0EsSUFBTW1ELGtEQUFxQixDQUNoQyxFQUFFUSxNQUFNLGNBQVIsRUFBd0JGLFNBQVMsSUFBakMsRUFEZ0MsRUFFaEMsRUFBRUUsTUFBTSxLQUFSLEVBRmdDLEVBRWYsRUFBRUEsTUFBTSxLQUFSLEVBRmUsRUFFRSxFQUFFQSxNQUFNLEtBQVIsRUFGRixFQUVtQixFQUFFQSxNQUFNLFFBQVIsRUFGbkIsRUFFc0MsRUFBRUEsTUFBTSxlQUFSLEVBRnRDLEVBR2hDLEVBQUVBLE1BQU0sUUFBUixFQUFrQkYsU0FBUyxJQUEzQixFQUhnQyxFQUloQyxFQUFFRSxNQUFNLE9BQVIsRUFKZ0MsRUFJYixFQUFFQSxNQUFNLFNBQVIsRUFKYSxFQUlRLEVBQUVBLE1BQU0sTUFBUixFQUpSLEVBSTBCLEVBQUVBLE1BQU0sVUFBUixFQUoxQixDQUEzQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEUDs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSxZQUFNO0FBQ2pCLFdBQ0k7QUFBQyw4QkFBRDtBQUFBO0FBQ0ksc0NBQUMscUJBQUQsSUFBTyxNQUFLLFFBQVosRUFBcUIsV0FBckIsRUFBMkIsUUFBUSxnQkFBQ3hELEtBQUQ7QUFBQSx1QkFBVztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFYO0FBQUEsYUFBbkMsR0FESjtBQUVJLHNDQUFDLHFCQUFELElBQU8sTUFBSyxHQUFaLEVBQWdCLFdBQWhCLEVBQXNCLFFBQVEsZ0JBQUNBLEtBQUQ7QUFBQSx1QkFBVyw4QkFBQyxjQUFELEVBQVVBLEtBQVYsQ0FBWDtBQUFBLGFBQTlCLEdBRko7QUFHSSxzQ0FBQyxxQkFBRCxJQUFPLE1BQUssT0FBWixFQUFvQixXQUFwQixFQUEwQixRQUFRLGdCQUFDQSxLQUFEO0FBQUEsdUJBQVcsOEJBQUMsY0FBRCxFQUFVQSxLQUFWLENBQVg7QUFBQSxhQUFsQyxHQUhKO0FBSUksc0NBQUMscUJBQUQsSUFBTyxNQUFLLEdBQVosRUFBZ0IsUUFBUSxnQkFBQ0EsS0FBRDtBQUFBLHVCQUFXLDhCQUFDLGtCQUFELE9BQVg7QUFBQSxhQUF4QjtBQUpKLEtBREo7QUFRSCxDOzs7Ozs7Ozs7OztBQ2RELGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NlcnZlci9zZXJ2ZXIuanNcIik7XG4iLCJ2YXIgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcblxuaWYgKGVudiA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBwcm9jZXNzLmVudi5QT1JUID0gNDAwMDtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xufSIsInJlcXVpcmUoJy4vY29uZmlnL2NvbmZpZycpO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgZW52IGZyb20gJy4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL2FwcCdcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQ7XG5cbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygnYnVpbGQvcHVibGljJykpO1xuYXBwLnVzZSgnL3N0eWxlcycsIGV4cHJlc3Muc3RhdGljKCdzcmMvcGFnZXMvc3R5bGVzJykpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygnc3JjL3BhZ2VzL3N0YXRpYycpKTtcblxuY29uc3QgbG9hZEh0bWwgPSAoY29udGVudCkgPT4ge1xuICAgIHJldHVybiAoYFxuICAgICAgICA8aHRtbD5cbiAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIj5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiIHJlbD1cInN0eWxlc2hlZXRcIj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vd3d3LnJlZGRpdHN0YXRpYy5jb20vZGVza3RvcDJ4L2ltZy9mYXZpY29uL2FwcGxlLWljb24tNTd4NTcucG5nXCI+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnNcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHJpcHBsZUxvYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzI1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2FkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmVcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NTAxOyBib3JkZXItcmFkaXVzOiAxMDAlOyB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogNDV2aCBhdXRvO3otaW5kZXg6IDc7cG9zaXRpb246IHJlbGF0aXZlO1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIlwiLz5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6ODBweFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48Zz48Y2lyY2xlIGZpbGw9XCIjRkY0NTAwXCIgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIj48L2NpcmNsZT48cGF0aCBmaWxsPVwiI0ZGRlwiIGQ9XCJNMTYuNjcsMTBBMS40NiwxLjQ2LDAsMCwwLDE0LjIsOWE3LjEyLDcuMTIsMCwwLDAtMy44NS0xLjIzTDExLDQuNjUsMTMuMTQsNS4xYTEsMSwwLDEsMCwuMTMtMC42MUwxMC44Miw0YTAuMzEsMC4zMSwwLDAsMC0uMzcuMjRMOS43MSw3LjcxYTcuMTQsNy4xNCwwLDAsMC0zLjksMS4yM0ExLjQ2LDEuNDYsMCwxLDAsNC4yLDExLjMzYTIuODcsMi44NywwLDAsMCwwLC40NGMwLDIuMjQsMi42MSw0LjA2LDUuODMsNC4wNnM1LjgzLTEuODIsNS44My00LjA2YTIuODcsMi44NywwLDAsMCwwLS40NEExLjQ2LDEuNDYsMCwwLDAsMTYuNjcsMTBabS0xMCwxYTEsMSwwLDEsMSwxLDFBMSwxLDAsMCwxLDYuNjcsMTFabTUuODEsMi43NWEzLjg0LDMuODQsMCwwLDEtMi40Ny43NywzLjg0LDMuODQsMCwwLDEtMi40Ny0uNzcsMC4yNywwLjI3LDAsMCwxLC4zOC0wLjM4QTMuMjcsMy4yNywwLDAsMCwxMCwxNGEzLjI4LDMuMjgsMCwwLDAsMi4wOS0uNjFBMC4yNywwLjI3LDAsMSwxLDEyLjQ4LDEzLjc5Wm0tMC4xOC0xLjcxYTEsMSwwLDEsMSwxLTFBMSwxLDAsMCwxLDEyLjI5LDEyLjA4WlwiPjwvcGF0aD48L2c+PC9zdmc+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogNTAlOyBsZWZ0OiA1MCU7IHdpZHRoOiAwOyBoZWlnaHQ6IDA7IGJhY2tncm91bmQtY29sb3I6ICNmZjQ1MDE7IGJvcmRlci1yYWRpdXM6IDUwJTsgYW5pbWF0aW9uOiByaXBwbGVMb2FkZXIgMS41cyBlYXNlIGluZmluaXRlO1wiPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjID0gXCIvc3dSZWdpc3RlcmVyLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJjbGllbnRfYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3R5bGVzL2NvbW1vbi5jc3NcIj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdHlsZXMvaG9tZS5jc3NcIj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdHlsZXMvcG9wdXAuY3NzXCI+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3R5bGVzL25vdGZvdW5kLmNzc1wiPlxuICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+YCk7XG59O1xuXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBsb2FkSHRtbCgpO1xuICAgIHJlcy5zZW5kKHRlbXBsYXRlKTtcbn0pO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnU2VydmVyIFN0YXJ0ZWQgb24gUG9ydDogJywgcG9ydCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcGFnZXMvcm91dGVzL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdXRlcy8+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge1NVQl9SRURESVRfVVJMfSBmcm9tICcuLi9jb25zdGFudHMvQ29uc3RhbnRzJztcbmV4cG9ydCBjb25zdCBnZXRTdWJSZWRkaXRJbmZvID0gKHN1YlJlZGRpdFRlcm0pID0+IHtcbiAgY29uc3QgdXJsID0gU1VCX1JFRERJVF9VUkwgKyBzdWJSZWRkaXRUZXJtICsgJy5qc29uJztcbiAgY29uc29sZS5sb2codXJsKTtcbiAgcmV0dXJuIGF4aW9zLmdldCh1cmwpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSAnLi9JbWFnZUxvYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5yZW5kZXJDYXJkRGF0YSA9IHRoaXMucmVuZGVyQ2FyZERhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3dJbWFnZSA9IHRoaXMuc2hvd0ltYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVQb3B1cCA9IHRoaXMucmVtb3ZlUG9wdXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge3Nob3dJbWFnZTogZmFsc2V9O1xuICB9XG4gIHNob3dJbWFnZSh1cmwpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0ltYWdlOiB0cnVlLCB1cmw6IHVybCB9KTtcbiAgfVxuICByZW1vdmVQb3B1cCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0ltYWdlOiBmYWxzZSwgdXJsOicnIH0pO1xuICB9XG4gIHJlbmRlckNhcmREYXRhKCkge1xuICAgIGNvbnN0IHtjYXJkRGF0YX0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBjYXJkRGF0YS5jaGlsZHJlbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBpdGVtLmRhdGE7XG4gICAgICBjb25zdCB7IHRpdGxlLCB1cHMsIHRodW1ibmFpbCwgbnVtX2NvbW1lbnRzLCBhdXRob3IsIGNyZWF0ZWRfdXRjLCB1cmwgfSA9IGRhdGE7XG4gICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoY3JlYXRlZF91dGMgKiAxMDAwKS50b0RhdGVTdHJpbmcoKTtcbiAgICAgIGlmICghdGh1bWJuYWlsIHx8IHRodW1ibmFpbCA9PT0gJ3NlbGYnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkV3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nV3JhcFwiPlxuICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEyMHB4XCIgaGVpZ2h0PVwiODBweFwiIHNyYz17dGh1bWJuYWlsfSBvbkNsaWNrPXt0aGlzLnNob3dJbWFnZS5iaW5kKHRoaXMsIHVybCl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNDYXJkU2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaWdsb29cIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuPnsnY29tbWVudHM6ICcrIG51bV9jb21tZW50c308L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPnsnIFB1Ymxpc2hlZCAnICsgdGltZSB9PC9zcGFuPjxzcGFuPiBieSA8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+e2F1dGhvcn08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGluZ1wiPlxuICAgICAgICAgICAgPHNwYW4+eyd1cHMgOiAnICsgdXBzfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjYXJkRGF0YX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtzaG93SW1hZ2UsIHVybH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7Y2FyZERhdGEgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImNvbnRlbnRDYXJkV3JhcHBlciBjb2wtMTBcIj5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmREYXRhKCl9XG4gICAgICAgICAgPC9kaXY+OlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9DYXJkQ29udGVudFwiPlxuICAgICAgICAgICAgPHN2ZyBzdHlsZT17e3dpZHRoOiAnODBweCd9fSB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PGc+PGNpcmNsZSBmaWxsPVwiI0ZGNDUwMFwiIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCI+PC9jaXJjbGU+PHBhdGggZmlsbD1cIiNGRkZcIiBkPVwiTTE2LjY3LDEwQTEuNDYsMS40NiwwLDAsMCwxNC4yLDlhNy4xMiw3LjEyLDAsMCwwLTMuODUtMS4yM0wxMSw0LjY1LDEzLjE0LDUuMWExLDEsMCwxLDAsLjEzLTAuNjFMMTAuODIsNGEwLjMxLDAuMzEsMCwwLDAtLjM3LjI0TDkuNzEsNy43MWE3LjE0LDcuMTQsMCwwLDAtMy45LDEuMjNBMS40NiwxLjQ2LDAsMSwwLDQuMiwxMS4zM2EyLjg3LDIuODcsMCwwLDAsMCwuNDRjMCwyLjI0LDIuNjEsNC4wNiw1LjgzLDQuMDZzNS44My0xLjgyLDUuODMtNC4wNmEyLjg3LDIuODcsMCwwLDAsMC0uNDRBMS40NiwxLjQ2LDAsMCwwLDE2LjY3LDEwWm0tMTAsMWExLDEsMCwxLDEsMSwxQTEsMSwwLDAsMSw2LjY3LDExWm01LjgxLDIuNzVhMy44NCwzLjg0LDAsMCwxLTIuNDcuNzcsMy44NCwzLjg0LDAsMCwxLTIuNDctLjc3LDAuMjcsMC4yNywwLDAsMSwuMzgtMC4zOEEzLjI3LDMuMjcsMCwwLDAsMTAsMTRhMy4yOCwzLjI4LDAsMCwwLDIuMDktLjYxQTAuMjcsMC4yNywwLDEsMSwxMi40OCwxMy43OVptLTAuMTgtMS43MWExLDEsMCwxLDEsMS0xQTEsMSwwLDAsMSwxMi4yOSwxMi4wOFpcIj48L3BhdGg+PC9nPjwvc3ZnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub0NhcmRDb250ZW50VHh0XCI+U2VhcmNoIHRvIGxvYWQgc3ViLXJlZGRpdHM8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7c2hvd0ltYWdlICYmIDxJbWFnZUxvYWRlciB1cmw9e3VybH0gcmVtb3ZlUG9wdXA9e3RoaXMucmVtb3ZlUG9wdXB9Lz59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudXBkYXRlU2VhcmNoVGVybSA9IHRoaXMudXBkYXRlU2VhcmNoVGVybS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hUZXJtOiAnY2F0cydcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpeyBcbiAgICB0aGlzLnByb3BzLnRyaWdnZXJTZWFyY2goJ2NhdHMnKTtcbiAgfVxuICB1cGRhdGVTZWFyY2hUZXJtKGUpIHtcbiAgICBjb25zdCBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcbiAgICBpZiAoa2V5ID09PSAxMykge1xuICAgICAgY29uc3Qge3NlYXJjaFRlcm19ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHRoaXMucHJvcHMudHJpZ2dlclNlYXJjaChzZWFyY2hUZXJtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlYXJjaFRlcm06IGUudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3NlYXJjaFRlcm0gPSAnJ30gPSB0aGlzLnN0YXRlO1xuICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRIZWFkZXJXcmFwIGNvbC02IGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInNlYXJjaFwiIG9uS2V5VXA9e3RoaXMudXBkYXRlU2VhcmNoVGVybX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgKTtcbiAgfVxufVxuIiwiXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Z2V0U3ViUmVkZGl0SW5mb30gZnJvbSAnLi4vYXBpQ2FsbHMvQXBpQ2FsbHMnO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9TaWRlQmFyJztcbmltcG9ydCBDb250ZW50SGVhZGVyIGZyb20gJy4vQ29udGVudEhlYWRlcic7XG5pbXBvcnQgQ29udGVudENhcmQgZnJvbSAnLi9Db250ZW50Q2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnRyaWdnZXJTZWFyY2ggPSB0aGlzLnRyaWdnZXJTZWFyY2guYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIHRyaWdnZXJTZWFyY2goc2VhcmNoVGVybSkge1xuICAgIGdldFN1YlJlZGRpdEluZm8oc2VhcmNoVGVybSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogcmVzcG9uc2UuZGF0YS5kYXRhLCBlcnJvcjogZmFsc2V9LCAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyTXNnKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgICAgIDxTaWRlQmFyLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50U2VjdGlvbiBjb2wtMTIgY29sLW1kLTEyIGNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgPENvbnRlbnRIZWFkZXIgdHJpZ2dlclNlYXJjaD17dGhpcy50cmlnZ2VyU2VhcmNofS8+XG4gICAgICAgICAgICA8Q29udGVudENhcmQgY2FyZERhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PilcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaW1hZ2VQb3B1cCcpKSB7XG4gICAgICB0aGlzLnByb3BzLnJlbW92ZVBvcHVwKCk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dXJsfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VQb3B1cFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ1wiICBzcmM9e3VybH0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCB7TmF2TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLmJpbmQodGhpcyk7XG4gIH1cblxuICBoZWFkKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+UGFnZSBOb3QgRm91bmQ8L3RpdGxlPlxuICAgICAgPC9IZWxtZXQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuaGVhZCgpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGZvdW5kQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm5vdEZvdW5kVGV4dCBmYiB0ZXh0Q2VudGVyXCI+U29ycnksIHRoaXMgcGFnZSBkb2VzIG5vdCBleGlzdCE8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibm90Zm91bmRVTCB0ZXh0Q2VudGVyXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZUJ0blwiPlxuICAgICAgICAgICAgICA8TmF2TGluayB0bz0nL2xvZ2luJyBjbGFzc05hbWU9XCJ3aGl0ZVwiPiBMb2dpbiA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTSURFQkFSX01FTlVfSVRFTVN9IGZyb20gJy4uL2NvbnN0YW50cy9Db25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zaWRlTWVudUNsaWNrID0gdGhpcy5zaWRlTWVudUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJTaWRlTWVudSA9IHRoaXMucmVuZGVyU2lkZU1lbnUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVudV9pdGVtczogU0lERUJBUl9NRU5VX0lURU1TLFxuICAgICAgYWN0aXZlSW5kZXg6ICcnXG4gICAgfVxuICB9XG5cbiAgc2lkZU1lbnVDbGljayhlKSB7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pdGVtSW5kZXg7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiBpdGVtSW5kZXggfSk7XG4gIH1cblxuICByZW5kZXJTaWRlTWVudSgpIHtcbiAgICBjb25zdCB7bWVudV9pdGVtcyA9IFtdLCBhY3RpdmVJbmRleD0gJyd9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gbWVudV9pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgc2lkZUJhckl0ZW1DbGFzcyA9IChpdGVtLmhlYWRpbmcgPyAnc2lkZUhlYWRpbmcnIDogJycpO1xuICAgICAgc2lkZUJhckl0ZW1DbGFzcyArPSAoIWl0ZW0uaGVhZGluZyAmJiBpbmRleC50b1N0cmluZygpID09PSBhY3RpdmVJbmRleCkgPyAnIGFjdGl2ZVNpZGVNZW51JyA6ICcnO1xuICAgICAgcmV0dXJuIDxkaXYga2V5PXsnaXRlbV8nICsgaW5kZXh9IGRhdGEtaXRlbS1pbmRleD17aW5kZXh9IGNsYXNzTmFtZT17J2NvbnRlbnQgJyArIHNpZGVCYXJJdGVtQ2xhc3MgfT57aXRlbS5uYW1lfTwvZGl2PlxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJyZWRkaXRJY29uU3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxnPjxjaXJjbGUgZmlsbD1cIiNGRjQ1MDBcIiBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIxMFwiPjwvY2lyY2xlPjxwYXRoIGZpbGw9XCIjRkZGXCIgZD1cIk0xNi42NywxMEExLjQ2LDEuNDYsMCwwLDAsMTQuMiw5YTcuMTIsNy4xMiwwLDAsMC0zLjg1LTEuMjNMMTEsNC42NSwxMy4xNCw1LjFhMSwxLDAsMSwwLC4xMy0wLjYxTDEwLjgyLDRhMC4zMSwwLjMxLDAsMCwwLS4zNy4yNEw5LjcxLDcuNzFhNy4xNCw3LjE0LDAsMCwwLTMuOSwxLjIzQTEuNDYsMS40NiwwLDEsMCw0LjIsMTEuMzNhMi44NywyLjg3LDAsMCwwLDAsLjQ0YzAsMi4yNCwyLjYxLDQuMDYsNS44Myw0LjA2czUuODMtMS44Miw1LjgzLTQuMDZhMi44NywyLjg3LDAsMCwwLDAtLjQ0QTEuNDYsMS40NiwwLDAsMCwxNi42NywxMFptLTEwLDFhMSwxLDAsMSwxLDEsMUExLDEsMCwwLDEsNi42NywxMVptNS44MSwyLjc1YTMuODQsMy44NCwwLDAsMS0yLjQ3Ljc3LDMuODQsMy44NCwwLDAsMS0yLjQ3LS43NywwLjI3LDAuMjcsMCwwLDEsLjM4LTAuMzhBMy4yNywzLjI3LDAsMCwwLDEwLDE0YTMuMjgsMy4yOCwwLDAsMCwyLjA5LS42MUEwLjI3LDAuMjcsMCwxLDEsMTIuNDgsMTMuNzlabS0wLjE4LTEuNzFhMSwxLDAsMSwxLDEtMUExLDEsMCwwLDEsMTIuMjksMTIuMDhaXCI+PC9wYXRoPjwvZz48L3N2Zz5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInJlZGRpdE5hbWVTdmdcIiB2aWV3Qm94PVwiMCAwIDU1IDE3LjQ0XCI+PGcgZmlsbD1cIiMxYzFjMWNcIj48Y2lyY2xlIGZpbGw9XCIjRkY0NTAwXCIgY3g9XCI0NS43N1wiIGN5PVwiMy4zM1wiIHI9XCIyLjA1XCI+PC9jaXJjbGU+PHBhdGggZmlsbD1cImluaGVyaXRcIiBkPVwiTTE2LjczLDEyLjA1YTEuNDQsMS40NCwwLDAsMCwxLjU0LTEuNDgsNC45MSw0LjkxLDAsMCwwLS4xLTAuODMsNS42Niw1LjY2LDAsMCwwLTUuMzQtNC42MWMtMywwLTUuNTEsMi43Ni01LjUxLDYuMTVzMi40Nyw2LjE1LDUuNTEsNi4xNWE1LjQ3LDUuNDcsMCwwLDAsNC4yNi0xLjc4LDEuMTksMS4xOSwwLDAsMC0uMTktMS43NywxLjI1LDEuMjUsMCwwLDAtMS41My4xNiwzLjc4LDMuNzgsMCwwLDEtMi41NCwxLjA5LDMuNDIsMy40MiwwLDAsMS0zLjE0LTMuMDhoN1pNMTIuODIsNy40NGEzLjMsMy4zLDAsMCwxLDMsMi41NmgtNkEzLjMsMy4zLDAsMCwxLDEyLjgyLDcuNDRaXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCJpbmhlcml0XCIgZD1cIk03LjQ0LDYuMzJhMS4xNSwxLjE1LDAsMCwwLTEtMS4xNEE0LjQ2LDQuNDYsMCwwLDAsMi4zMSw2LjY5VjYuNTRBMS4xNSwxLjE1LDAsMSwwLDAsNi41NFYxNmExLjE4LDEuMTgsMCwwLDAsMS4wOCwxLjJBMS4xNSwxLjE1LDAsMCwwLDIuMzEsMTZWMTEuMTVBMy41MSwzLjUxLDAsMCwxLDYuMTUsNy40N0g2LjM4QTEuMTUsMS4xNSwwLDAsMCw3LjQ0LDYuMzJaXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCJpbmhlcml0XCIgZD1cIk00Ni45Miw3LjU2YTEuMTUsMS4xNSwwLDAsMC0yLjMxLDBWMTZhMS4xNSwxLjE1LDAsMSwwLDIuMzEsMFY3LjU2WlwiPjwvcGF0aD48cGF0aCBmaWxsPVwiaW5oZXJpdFwiIGQ9XCJNMjkuODcsMS4xNUExLjE1LDEuMTUsMCwwLDAsMjguNzIsMGgwYTEuMTUsMS4xNSwwLDAsMC0xLjE1LDEuMTVWNi4zMWE0LDQsMCwwLDAtMi45NS0xLjE4Yy0zLDAtNS41MSwyLjc2LTUuNTEsNi4xNXMyLjQ3LDYuMTUsNS41MSw2LjE1YTQuMDgsNC4wOCwwLDAsMCwzLTEuMTlBMS4xNSwxLjE1LDAsMCwwLDI5Ljg3LDE2VjEuMTVabS01LjI2LDE0Yy0xLjc3LDAtMy4yMS0xLjcyLTMuMjEtMy44NXMxLjQzLTMuODUsMy4yMS0zLjg1LDMuMjEsMS43MiwzLjIxLDMuODVTMjYuMzksMTUuMTMsMjQuNjIsMTUuMTNaXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCJpbmhlcml0XCIgZD1cIk00MS45MiwxLjE1QTEuMTUsMS4xNSwwLDAsMCw0MC43NywwaDBhMS4xNSwxLjE1LDAsMCwwLTEuMTUsMS4xNVY2LjMxYTQsNCwwLDAsMC0yLjk1LTEuMThjLTMsMC01LjUxLDIuNzYtNS41MSw2LjE1czIuNDcsNi4xNSw1LjUxLDYuMTVhNC4wOCw0LjA4LDAsMCwwLDMtMS4xOUExLjE1LDEuMTUsMCwwLDAsNDEuOTIsMTZWMS4xNVptLTUuMjYsMTRjLTEuNzcsMC0zLjIxLTEuNzItMy4yMS0zLjg1czEuNDMtMy44NSwzLjIxLTMuODUsMy4yMSwxLjcyLDMuMjEsMy44NVMzOC40NCwxNS4xMywzNi42NywxNS4xM1pcIj48L3BhdGg+PHBhdGggZmlsbD1cImluaGVyaXRcIiBkPVwiTTUyLjkxLDE2VjcuNDRoMWExLDEsMCwwLDAsMS4wNi0xLDEsMSwwLDAsMC0xLTEuMDlINTIuOTFWMy43NmExLjE4LDEuMTgsMCwwLDAtMS4wOC0xLjE5LDEuMTUsMS4xNSwwLDAsMC0xLjIzLDEuMTVWNS4zOGgtMWExLDEsMCwwLDAtMS4wNiwxLDEsMSwwLDAsMCwxLDEuMDloMVYxNmExLjE1LDEuMTUsMCwwLDAsMS4xNSwxLjE1aDBBMS4xNSwxLjE1LDAsMCwwLDUyLjkxLDE2WlwiPjwvcGF0aD48L2c+PC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuc2lkZU1lbnVDbGlja30+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2lkZU1lbnUoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApOyBcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IFNVQl9SRURESVRfVVJMID0gJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vci8nO1xuZXhwb3J0IGNvbnN0IFNJREVCQVJfTUVOVV9JVEVNUyA9IFtcbiAgeyBuYW1lOiAnUmVkZGl0IEZlZWRzJywgaGVhZGluZzogdHJ1ZSB9LFxuICB7IG5hbWU6ICdIb3QnIH0sIHsgbmFtZTogJ05ldycgfSwgeyBuYW1lOiAnVG9wJyB9LCB7IG5hbWU6ICdSaXNpbmcnIH0seyBuYW1lOiAnQ29udHJvdmVyc2lhbCcgfSxcbiAgeyBuYW1lOiAnT3RoZXJzJywgaGVhZGluZzogdHJ1ZSB9LFxuICB7IG5hbWU6ICdDb2lucycgfSwgeyBuYW1lOiAnUHJlbWl1bScgfSwgeyBuYW1lOiAnSGVscCcgfSwgeyBuYW1lOiAnU2V0dGluZ3MnIH1cbl0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL05vdEZvdW5kJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBleGFjdCByZW5kZXI9eyhwcm9wcykgPT4gPGRpdj5Mb2dpbjwvZGl2Pn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGV4YWN0IHJlbmRlcj17KHByb3BzKSA9PiA8SG9tZSB7Li4ucHJvcHN9Lz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2hvbWUnIGV4YWN0IHJlbmRlcj17KHByb3BzKSA9PiA8SG9tZSB7Li4ucHJvcHN9IC8+fS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nKicgcmVuZGVyPXsocHJvcHMpID0+IDxOb3RGb3VuZCAvPn0vPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICApO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=