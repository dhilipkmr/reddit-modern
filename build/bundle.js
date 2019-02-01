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

var compression = __webpack_require__(/*! compression */ "compression");

var app = (0, _express2.default)();
var port = process.env.PORT;

app.use(compression());
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

var getSubRedditInfo = exports.getSubRedditInfo = function getSubRedditInfo(subRedditTerm, after) {
  var url = _Constants.SUB_REDDIT_URL + subRedditTerm + '.json' + (after ? '?after=' + after : '');
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ImageLoader = __webpack_require__(/*! ./ImageLoader */ "./src/pages/components/ImageLoader.js");

var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

var _svgs = __webpack_require__(/*! ./svgs */ "./src/pages/components/svgs.js");

var _Ripple = __webpack_require__(/*! ./Ripple */ "./src/pages/components/Ripple.js");

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function findCount(val) {
  if (val < 1000) {
    return val;
  } else {
    return Math.round(val / 1000 * 10) / 10 + 'K';
  }
}

function publishedTime(utc) {
  var postDate = new Date(utc * 1000);
  var now = new Date();
  if (now.getFullYear() === postDate.getFullYear()) {
    if (now.getMonth() === postDate.getMonth()) {
      if (now.getDate() === postDate.getDate()) {
        return now.getHours() - postDate.getHours() + ' hours ago ';
      } else {
        var day = parseInt(now.getDate() - postDate.getDate(), 10);
        if (day === 1) {
          return 24 + now.getHours() - 17 + ' hours ago ';
        }
        return day + 'days ago ';
      }
    } else {
      var month = parseInt(now.getMonth() - postDate.getMonth(), 10);
      return month + (month === 1 ? ' month ' : 'months ') + ' ago ';
    }
  } else {
    var year = parseInt(now.getFullYear() - postDate.getFullYear(), 10);
    return year + (year === 1 ? ' year ' : 'years ') + ' ago ';
  }
}

var ContentCard = function (_Component) {
  _inherits(ContentCard, _Component);

  function ContentCard(props) {
    _classCallCheck(this, ContentCard);

    var _this = _possibleConstructorReturn(this, (ContentCard.__proto__ || Object.getPrototypeOf(ContentCard)).call(this, props));

    _this.renderCardData = _this.renderCardData.bind(_this);
    _this.showImage = _this.showImage.bind(_this);
    _this.removePopup = _this.removePopup.bind(_this);
    _this.state = { showImage: false };
    _this.debounce = undefined;
    return _this;
  }

  _createClass(ContentCard, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.cardData && this.props.cardData || prevProps.cardData && this.props.cardData && prevProps.cardData.length !== this.props.cardData.length) {
        this.setScrollCapture();
      }
    }
  }, {
    key: 'setScrollCapture',
    value: function setScrollCapture() {
      var _this2 = this;

      window.onscroll = function () {
        clearTimeout(_this2.debounc);
        _this2.debounc = setTimeout(function () {
          var bounding = _this2.refs.itemToScrollToView.getBoundingClientRect();
          if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            _this2.props.getNextDataSet();
          }
        }, 100);
      };
    }
  }, {
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
      var _this3 = this;

      var cardData = this.props.cardData;

      return cardData.map(function (item, index, arr) {
        var data = item.data;
        var length = arr.length - 3;
        var title = data.title,
            ups = data.ups,
            thumbnail = data.thumbnail,
            num_comments = data.num_comments,
            author = data.author,
            created_utc = data.created_utc,
            url = data.url;

        var time = publishedTime(created_utc);
        if (!thumbnail || thumbnail === 'self') {
          return null;
        }
        var otherProps = index === length ? { ref: 'itemToScrollToView' } : {};
        return _react2.default.createElement(
          'div',
          _extends({ key: index }, otherProps, { onClick: _this3.showImage.bind(_this3, url) }),
          _react2.default.createElement(
            'div',
            { className: 'cardWrapper col-sm-12' },
            _react2.default.createElement(
              'div',
              { className: 'imgWrap tc' },
              _react2.default.createElement('img', { width: '120px', height: '80px', src: thumbnail })
            ),
            _react2.default.createElement(
              'div',
              { className: 'detailsCardSection' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                _react2.default.createElement(
                  'span',
                  { className: 'txtEllipsis' },
                  title
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement('i', { className: 'fas fa-igloo' }),
                _react2.default.createElement(
                  'span',
                  null,
                  _svgs.commentSvg
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'commentsCount' },
                  num_comments
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'commentsCount' },
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
              { className: 'voting tc f12' },
              _react2.default.createElement(
                'div',
                null,
                _svgs.UPVOTESVG
              ),
              _react2.default.createElement(
                'div',
                { className: 'f12 ups' },
                findCount(ups)
              ),
              _react2.default.createElement(
                'div',
                null,
                _svgs.DOWNVOTESVG
              )
            )
          )
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
          { className: 'contentCardWrapper col-10 col-sm-11' },
          this.renderCardData(),
          _react2.default.createElement(
            'div',
            { className: 'tc loading' },
            'Loading...'
          )
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
    _this.searchFocus = _this.searchFocus.bind(_this);
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
    key: 'searchFocus',
    value: function searchFocus() {
      this.refs.searchElt.classList.toggle('searchFocus');
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
          { ref: 'searchElt', className: 'search d-in-bl' },
          _react2.default.createElement('input', { placeholder: 'search', onKeyUp: this.updateSearchTerm, onFocus: this.searchFocus, onBlur: this.searchFocus })
        ),
        _react2.default.createElement(
          'div',
          { className: 'd-in-bl sideHeading f12' },
          _react2.default.createElement(
            'span',
            null,
            this.props.sideMenuSelected
          )
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.triggerSearch = _this.triggerSearch.bind(_this);
    _this.sideBarUpdated = _this.sideBarUpdated.bind(_this);
    _this.getNextDataSet = _this.getNextDataSet.bind(_this);
    _this.state = {
      sideMenuSelected: ''
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'sideBarUpdated',
    value: function sideBarUpdated(val) {
      this.setState({ sideMenuSelected: val });
    }
  }, {
    key: 'getNextDataSet',
    value: function getNextDataSet() {
      this.triggerSearch(this.state.searchTerm, this.state.after);
    }
  }, {
    key: 'triggerSearch',
    value: function triggerSearch(searchTerm, after) {
      var _this2 = this;

      (0, _ApiCalls.getSubRedditInfo)(searchTerm, after).then(function (response) {
        if (response.data && !after) {
          _this2.setState(_extends({ searchTerm: searchTerm }, response.data.data, { error: false }), function () {
            console.log(_this2.state);
          });
        } else if (response.data && after) {
          var _response$data$data = response.data.data,
              _after = _response$data$data.after,
              children = _response$data$data.children;

          _this2.setState({ after: _after, children: [].concat(_toConsumableArray(_this2.state.children), _toConsumableArray(children)), error: false });
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
      var _state = this.state,
          children = _state.children,
          sideMenuSelected = _state.sideMenuSelected;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'home' },
          _react2.default.createElement(_SideBar2.default, { sideBarUpdated: this.sideBarUpdated }),
          _react2.default.createElement(
            'section',
            { className: 'tr d-in-bl col-12' },
            _react2.default.createElement(
              'div',
              { className: 'contentSection d-in-bl tl col-10 col-md-10 col-sm-12' },
              _react2.default.createElement(_ContentHeader2.default, { triggerSearch: this.triggerSearch, sideMenuSelected: sideMenuSelected }),
              _react2.default.createElement(_ContentCard2.default, { cardData: children, getNextDataSet: this.getNextDataSet })
            )
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
        _react2.default.createElement('img', { className: 'img', src: url, onError: function onError(e) {
            e.target.src = '/img/404.png';
          } })
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

/***/ "./src/pages/components/Ripple.js":
/*!****************************************!*\
  !*** ./src/pages/components/Ripple.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Declaring Styles */
var styleRipple = {
  position: 'relative',
  overflow: 'hidden'
};
var styleRippleContainer = {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0'
};
var styleSpan = {
  transform: 'scale(0)',
  borderRadius: '100%',
  position: 'absolute',
  opacity: '0.75',
  backgroundColor: '#777777',
  animation: 'ripple 850ms'
};

var Ripple = function (_Component) {
  _inherits(Ripple, _Component);

  function Ripple(props) {
    _classCallCheck(this, Ripple);

    var _this = _possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call(this, props));

    _this.initializeState = _this.initializeState.bind(_this);
    _this.callCleanUp = _this.callCleanUp.bind(_this);
    _this.showRipple = _this.showRipple.bind(_this);
    _this.cleanUp = _this.cleanUp.bind(_this);
    _this.renderRippleSpan = _this.renderRippleSpan.bind(_this);
    _this.state = _this.initializeState();
    return _this;
  }

  _createClass(Ripple, [{
    key: 'initializeState',
    value: function initializeState() {
      return {
        showRipple: false,
        combinedSpanStyles: {},
        count: 0
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var style = document.createElement('style');
      style.innerHTML = '@keyframes ripple {\n      to {\n        opacity: 0;\n        transform: scale(2);\n      }\n    }';
      document.head.appendChild(style);
    }

    /* Debounce Code to call the Ripple removing function */

  }, {
    key: 'callCleanUp',
    value: function callCleanUp(cleanup, delay) {
      var that = this;
      return function () {
        clearTimeout(that.bounce);
        that.bounce = setTimeout(function () {
          cleanup();
        }, delay);
      };
    }
  }, {
    key: 'showRipple',
    value: function showRipple(e) {
      var rippleContainer = e.currentTarget;
      var size = rippleContainer.offsetWidth;
      var pos = rippleContainer.getBoundingClientRect();
      var x = e.pageX - pos.x - size / 2;
      var y = e.pageY - pos.y - size / 2;

      var styleSizing = { top: y + 'px', left: x + 'px', height: size + 'px', width: size + 'px' };
      var combinedSpanStyles = _extends({}, styleSizing, styleSpan);
      var count = this.state.count + 1;
      this.setState({
        combinedSpanStyles: _extends({}, this.state.combinedSpanStyles, _defineProperty({}, count, combinedSpanStyles)),
        showRipple: _extends({}, this.state.showRipple, _defineProperty({}, count, true)),
        count: count
      });
    }
  }, {
    key: 'cleanUp',
    value: function cleanUp() {
      var initialState = this.initializeState();
      this.setState(_extends({}, initialState));
    }
  }, {
    key: 'renderRippleSpan',
    value: function renderRippleSpan() {
      var _state = this.state,
          _state$showRipple = _state.showRipple,
          showRipple = _state$showRipple === undefined ? false : _state$showRipple,
          _state$combinedSpanSt = _state.combinedSpanStyles,
          combinedSpanStyles = _state$combinedSpanSt === undefined ? {} : _state$combinedSpanSt;

      var spanArray = Object.keys(combinedSpanStyles);
      if (spanArray && spanArray.length > 0) {
        return spanArray.map(function (key, index) {
          return _react2.default.createElement('span', { key: 'spanCount_' + index, style: _extends({}, combinedSpanStyles[key]) });
        });
      } else {
        return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$children = _props.children,
          children = _props$children === undefined ? null : _props$children,
          _props$classes = _props.classes,
          classes = _props$classes === undefined ? "" : _props$classes,
          _props$onClickHandler = _props.onClickHandler,
          onClickHandler = _props$onClickHandler === undefined ? null : _props$onClickHandler;

      return _react2.default.createElement(
        'div',
        { style: _extends({}, styleRipple), className: classes, onClick: onClickHandler },
        children,
        _react2.default.createElement(
          'div',
          { style: _extends({}, styleRippleContainer), onMouseDown: this.showRipple, onMouseUp: this.callCleanUp(this.cleanUp, 2000) },
          this.renderRippleSpan()
        )
      );
    }
  }]);

  return Ripple;
}(_react.Component);

exports.default = Ripple;

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

var _Ripple = __webpack_require__(/*! ./Ripple */ "./src/pages/components/Ripple.js");

var _Ripple2 = _interopRequireDefault(_Ripple);

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
      activeIndex: '1'
    };
    return _this;
  }

  _createClass(SideBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var val = this.refs["index_" + this.state.activeIndex].innerText;
      this.props.sideBarUpdated(val);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.activeIndex !== this.state.activeIndex && parseInt(this.state.activeIndex, 10) < 6) {
        var val = this.refs["index_" + this.state.activeIndex].innerText;
        this.props.sideBarUpdated(val);
      }
    }
  }, {
    key: 'sideMenuClick',
    value: function sideMenuClick(e) {
      var itemIndex = e.target.parentNode.children[0].dataset.itemIndex;
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
          _Ripple2.default,
          null,
          _react2.default.createElement(
            'div',
            { ref: "index_" + index, key: 'item_' + index, 'data-item-index': index, className: 'content ' + sideBarItemClass },
            item.name
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'sidebar ' },
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

/***/ "./src/pages/components/svgs.js":
/*!**************************************!*\
  !*** ./src/pages/components/svgs.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPVOTESVG = exports.DOWNVOTESVG = exports.commentSvg = undefined;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentSvg = exports.commentSvg = _react2.default.createElement(
  "svg",
  { x: "0px", y: "0px", width: "15px", height: "12px", viewBox: "0 0 511.626 511.627", fill: "#777777" },
  _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M477.364,127.481c-22.839-28.072-53.864-50.248-93.072-66.522c-39.208-16.274-82.036-24.41-128.479-24.41 c-46.442,0-89.269,8.136-128.478,24.41c-39.209,16.274-70.233,38.446-93.074,66.522C11.419,155.555,0,186.15,0,219.269 c0,28.549,8.61,55.299,25.837,80.232c17.227,24.934,40.778,45.874,70.664,62.813c-2.096,7.611-4.57,14.842-7.426,21.7 c-2.855,6.851-5.424,12.467-7.708,16.847c-2.286,4.374-5.376,9.23-9.281,14.555c-3.899,5.332-6.849,9.093-8.848,11.283 c-1.997,2.19-5.28,5.801-9.851,10.848c-4.565,5.041-7.517,8.33-8.848,9.853c-0.193,0.097-0.953,0.948-2.285,2.574 c-1.331,1.615-1.999,2.419-1.999,2.419l-1.713,2.57c-0.953,1.42-1.381,2.327-1.287,2.703c0.096,0.384-0.094,1.335-0.57,2.854 c-0.477,1.526-0.428,2.669,0.142,3.429v0.287c0.762,3.234,2.283,5.853,4.567,7.851c2.284,1.992,4.858,2.991,7.71,2.991h1.429 c12.375-1.526,23.223-3.613,32.548-6.279c49.87-12.751,93.649-35.782,131.334-69.094c14.274,1.523,28.074,2.283,41.396,2.283 c46.442,0,89.271-8.135,128.479-24.414c39.208-16.276,70.233-38.444,93.072-66.517c22.843-28.072,34.263-58.67,34.263-91.789 C511.626,186.154,500.207,155.555,477.364,127.481z M445.244,292.075c-19.896,22.456-46.733,40.303-80.517,53.529 c-33.784,13.223-70.093,19.842-108.921,19.842c-11.609,0-23.98-0.76-37.113-2.286l-16.274-1.708l-12.277,10.852 c-23.408,20.558-49.582,36.829-78.513,48.821c8.754-15.414,15.416-31.785,19.986-49.102l7.708-27.412l-24.838-14.27 c-24.744-14.093-43.918-30.793-57.53-50.114c-13.61-19.315-20.412-39.638-20.412-60.954c0-26.077,9.945-50.343,29.834-72.803 c19.895-22.458,46.729-40.303,80.515-53.531c33.786-13.229,70.089-19.849,108.92-19.849c38.828,0,75.13,6.617,108.914,19.845 c33.783,13.229,60.62,31.073,80.517,53.531c19.89,22.46,29.834,46.727,29.834,72.802S465.133,269.615,445.244,292.075z" })
  )
);

var DOWNVOTESVG = exports.DOWNVOTESVG = _react2.default.createElement(
  "svg",
  { x: "0px", y: "0px", width: "15.819px", height: "12.819px", viewBox: "0 0 444.819 444.819", fill: "#777777" },
  _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561 L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416 C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848 c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693 C444.819,130.287,441.295,121.629,434.252,114.203z" })
  )
);

var UPVOTESVG = exports.UPVOTESVG = _react2.default.createElement(
  "svg",
  { x: "0px", y: "0px", width: "15.819px", height: "12.819px", viewBox: "0 0 444.819 444.819", fill: "#777777" },
  _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement("path", { d: "M433.968,278.657L248.387,92.79c-7.419-7.044-16.08-10.566-25.977-10.566c-10.088,0-18.652,3.521-25.697,10.566 L10.848,278.657C3.615,285.887,0,294.549,0,304.637c0,10.28,3.619,18.843,10.848,25.693l21.411,21.413 c6.854,7.23,15.42,10.852,25.697,10.852c10.278,0,18.842-3.621,25.697-10.852L222.41,213.271L361.168,351.74 c6.848,7.228,15.413,10.852,25.7,10.852c10.082,0,18.747-3.624,25.975-10.852l21.409-21.412 c7.043-7.043,10.567-15.608,10.567-25.693C444.819,294.545,441.205,285.884,433.968,278.657z" })
  )
);

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

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGlDYWxscy9BcGlDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db250ZW50Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tcG9uZW50cy9Db250ZW50SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvUmlwcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jb21wb25lbnRzL1NpZGVCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvc3Zncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29uc3RhbnRzL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiJdLCJuYW1lcyI6WyJlbnYiLCJwcm9jZXNzIiwiUE9SVCIsInJlcXVpcmUiLCJjb21wcmVzc2lvbiIsImFwcCIsInBvcnQiLCJ1c2UiLCJib2R5UGFyc2VyIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImV4cHJlc3MiLCJzdGF0aWMiLCJsb2FkSHRtbCIsImNvbnRlbnQiLCJnZXQiLCJyZXEiLCJyZXMiLCJ0ZW1wbGF0ZSIsInNlbmQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwiQXBwIiwiQ29tcG9uZW50IiwiZ2V0U3ViUmVkZGl0SW5mbyIsInN1YlJlZGRpdFRlcm0iLCJhZnRlciIsInVybCIsIlNVQl9SRURESVRfVVJMIiwiYXhpb3MiLCJmaW5kQ291bnQiLCJ2YWwiLCJNYXRoIiwicm91bmQiLCJwdWJsaXNoZWRUaW1lIiwidXRjIiwicG9zdERhdGUiLCJEYXRlIiwibm93IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImRheSIsInBhcnNlSW50IiwibW9udGgiLCJ5ZWFyIiwiQ29udGVudENhcmQiLCJwcm9wcyIsInJlbmRlckNhcmREYXRhIiwiYmluZCIsInNob3dJbWFnZSIsInJlbW92ZVBvcHVwIiwic3RhdGUiLCJkZWJvdW5jZSIsInVuZGVmaW5lZCIsInByZXZQcm9wcyIsImNhcmREYXRhIiwibGVuZ3RoIiwic2V0U2Nyb2xsQ2FwdHVyZSIsIndpbmRvdyIsIm9uc2Nyb2xsIiwiY2xlYXJUaW1lb3V0IiwiZGVib3VuYyIsInNldFRpbWVvdXQiLCJib3VuZGluZyIsInJlZnMiLCJpdGVtVG9TY3JvbGxUb1ZpZXciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZ2V0TmV4dERhdGFTZXQiLCJzZXRTdGF0ZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImFyciIsImRhdGEiLCJ0aXRsZSIsInVwcyIsInRodW1ibmFpbCIsIm51bV9jb21tZW50cyIsImF1dGhvciIsImNyZWF0ZWRfdXRjIiwidGltZSIsIm90aGVyUHJvcHMiLCJyZWYiLCJjb21tZW50U3ZnIiwiVVBWT1RFU1ZHIiwiRE9XTlZPVEVTVkciLCJ3aWR0aCIsIkNvbnRlbnRIZWFkZXIiLCJ1cGRhdGVTZWFyY2hUZXJtIiwic2VhcmNoRm9jdXMiLCJzZWFyY2hUZXJtIiwidHJpZ2dlclNlYXJjaCIsImUiLCJrZXkiLCJ3aGljaCIsImtleUNvZGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaEVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNpZGVNZW51U2VsZWN0ZWQiLCJIb21lIiwic2lkZUJhclVwZGF0ZWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImNoaWxkcmVuIiwiY2F0Y2giLCJlcnJNc2ciLCJJbWFnZUxvYWRlciIsImhhbmRsZUNsaWNrIiwiY29udGFpbnMiLCJzcmMiLCJOb3RGb3VuZCIsImhlYWQiLCJzdHlsZVJpcHBsZSIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJzdHlsZVJpcHBsZUNvbnRhaW5lciIsInN0eWxlU3BhbiIsInRyYW5zZm9ybSIsImJvcmRlclJhZGl1cyIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhbmltYXRpb24iLCJSaXBwbGUiLCJpbml0aWFsaXplU3RhdGUiLCJjYWxsQ2xlYW5VcCIsInNob3dSaXBwbGUiLCJjbGVhblVwIiwicmVuZGVyUmlwcGxlU3BhbiIsImNvbWJpbmVkU3BhblN0eWxlcyIsImNvdW50Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjbGVhbnVwIiwiZGVsYXkiLCJ0aGF0IiwiYm91bmNlIiwicmlwcGxlQ29udGFpbmVyIiwiY3VycmVudFRhcmdldCIsInNpemUiLCJvZmZzZXRXaWR0aCIsInBvcyIsIngiLCJwYWdlWCIsInkiLCJwYWdlWSIsInN0eWxlU2l6aW5nIiwiaGVpZ2h0IiwiaW5pdGlhbFN0YXRlIiwic3BhbkFycmF5IiwiT2JqZWN0Iiwia2V5cyIsImNsYXNzZXMiLCJvbkNsaWNrSGFuZGxlciIsIlNpZGVCYXIiLCJzaWRlTWVudUNsaWNrIiwicmVuZGVyU2lkZU1lbnUiLCJtZW51X2l0ZW1zIiwiU0lERUJBUl9NRU5VX0lURU1TIiwiYWN0aXZlSW5kZXgiLCJpbm5lclRleHQiLCJwcmV2U3RhdGUiLCJpdGVtSW5kZXgiLCJwYXJlbnROb2RlIiwiZGF0YXNldCIsInNpZGVCYXJJdGVtQ2xhc3MiLCJoZWFkaW5nIiwidG9TdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNs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Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zZXJ2ZXIvc2VydmVyLmpzXCIpO1xuIiwidmFyIGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5cbmlmIChlbnYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgcHJvY2Vzcy5lbnYuUE9SVCA9IDQwMDA7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbn0iLCJyZXF1aXJlKCcuL2NvbmZpZy9jb25maWcnKTtcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuaW1wb3J0IGVudiBmcm9tICcuL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4uL3NyYy9hcHAnXG52YXIgY29tcHJlc3Npb24gPSByZXF1aXJlKCdjb21wcmVzc2lvbicpO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVDtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygnYnVpbGQvcHVibGljJykpO1xuYXBwLnVzZSgnL3N0eWxlcycsIGV4cHJlc3Muc3RhdGljKCdzcmMvcGFnZXMvc3R5bGVzJykpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYygnc3JjL3BhZ2VzL3N0YXRpYycpKTtcblxuY29uc3QgbG9hZEh0bWwgPSAoY29udGVudCkgPT4ge1xuICAgIHJldHVybiAoYFxuICAgICAgICA8aHRtbD5cbiAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIj5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiIHJlbD1cInN0eWxlc2hlZXRcIj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vd3d3LnJlZGRpdHN0YXRpYy5jb20vZGVza3RvcDJ4L2ltZy9mYXZpY29uL2FwcGxlLWljb24tNTd4NTcucG5nXCI+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnNcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHJpcHBsZUxvYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzI1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2FkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmVcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NTAxOyBib3JkZXItcmFkaXVzOiAxMDAlOyB3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogNDV2aCBhdXRvO3otaW5kZXg6IDc7cG9zaXRpb246IHJlbGF0aXZlO1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIlwiLz5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6ODBweFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48Zz48Y2lyY2xlIGZpbGw9XCIjRkY0NTAwXCIgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMTBcIj48L2NpcmNsZT48cGF0aCBmaWxsPVwiI0ZGRlwiIGQ9XCJNMTYuNjcsMTBBMS40NiwxLjQ2LDAsMCwwLDE0LjIsOWE3LjEyLDcuMTIsMCwwLDAtMy44NS0xLjIzTDExLDQuNjUsMTMuMTQsNS4xYTEsMSwwLDEsMCwuMTMtMC42MUwxMC44Miw0YTAuMzEsMC4zMSwwLDAsMC0uMzcuMjRMOS43MSw3LjcxYTcuMTQsNy4xNCwwLDAsMC0zLjksMS4yM0ExLjQ2LDEuNDYsMCwxLDAsNC4yLDExLjMzYTIuODcsMi44NywwLDAsMCwwLC40NGMwLDIuMjQsMi42MSw0LjA2LDUuODMsNC4wNnM1LjgzLTEuODIsNS44My00LjA2YTIuODcsMi44NywwLDAsMCwwLS40NEExLjQ2LDEuNDYsMCwwLDAsMTYuNjcsMTBabS0xMCwxYTEsMSwwLDEsMSwxLDFBMSwxLDAsMCwxLDYuNjcsMTFabTUuODEsMi43NWEzLjg0LDMuODQsMCwwLDEtMi40Ny43NywzLjg0LDMuODQsMCwwLDEtMi40Ny0uNzcsMC4yNywwLjI3LDAsMCwxLC4zOC0wLjM4QTMuMjcsMy4yNywwLDAsMCwxMCwxNGEzLjI4LDMuMjgsMCwwLDAsMi4wOS0uNjFBMC4yNywwLjI3LDAsMSwxLDEyLjQ4LDEzLjc5Wm0tMC4xOC0xLjcxYTEsMSwwLDEsMSwxLTFBMSwxLDAsMCwxLDEyLjI5LDEyLjA4WlwiPjwvcGF0aD48L2c+PC9zdmc+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogNTAlOyBsZWZ0OiA1MCU7IHdpZHRoOiAwOyBoZWlnaHQ6IDA7IGJhY2tncm91bmQtY29sb3I6ICNmZjQ1MDE7IGJvcmRlci1yYWRpdXM6IDUwJTsgYW5pbWF0aW9uOiByaXBwbGVMb2FkZXIgMS41cyBlYXNlIGluZmluaXRlO1wiPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjID0gXCIvc3dSZWdpc3RlcmVyLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJjbGllbnRfYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3R5bGVzL2NvbW1vbi5jc3NcIj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdHlsZXMvaG9tZS5jc3NcIj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdHlsZXMvcG9wdXAuY3NzXCI+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3R5bGVzL25vdGZvdW5kLmNzc1wiPlxuICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+YCk7XG59O1xuXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBsb2FkSHRtbCgpO1xuICAgIHJlcy5zZW5kKHRlbXBsYXRlKTtcbn0pO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnU2VydmVyIFN0YXJ0ZWQgb24gUG9ydDogJywgcG9ydCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vcGFnZXMvcm91dGVzL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdXRlcy8+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge1NVQl9SRURESVRfVVJMfSBmcm9tICcuLi9jb25zdGFudHMvQ29uc3RhbnRzJztcbmV4cG9ydCBjb25zdCBnZXRTdWJSZWRkaXRJbmZvID0gKHN1YlJlZGRpdFRlcm0sIGFmdGVyKSA9PiB7XG4gIGNvbnN0IHVybCA9IFNVQl9SRURESVRfVVJMICsgc3ViUmVkZGl0VGVybSArICcuanNvbicgKyAoYWZ0ZXIgPyAnP2FmdGVyPScgKyBhZnRlciA6ICcnKTtcbiAgcmV0dXJuIGF4aW9zLmdldCh1cmwpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSAnLi9JbWFnZUxvYWRlcic7XG5pbXBvcnQge2NvbW1lbnRTdmcsIFVQVk9URVNWRywgRE9XTlZPVEVTVkd9IGZyb20gJy4vc3Zncyc7XG5pbXBvcnQgUmlwcGxlIGZyb20gJy4vUmlwcGxlJztcblxuZnVuY3Rpb24gZmluZENvdW50KHZhbCl7XG4gIGlmICh2YWwgPCAxMDAwKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKE1hdGgucm91bmQoKHZhbCAvIDEwMDApICogMTApIC8gMTApICsgJ0snO1xuICB9XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hlZFRpbWUodXRjKSB7XG4gIGNvbnN0IHBvc3REYXRlID0gbmV3IERhdGUodXRjICogMTAwMCk7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGlmIChub3cuZ2V0RnVsbFllYXIoKSA9PT0gcG9zdERhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgIGlmIChub3cuZ2V0TW9udGgoKSA9PT0gcG9zdERhdGUuZ2V0TW9udGgoKSkge1xuICAgICAgaWYobm93LmdldERhdGUoKSA9PT0gcG9zdERhdGUuZ2V0RGF0ZSgpKSB7XG4gICAgICAgIHJldHVybiAobm93LmdldEhvdXJzKCkgLSBwb3N0RGF0ZS5nZXRIb3VycygpICsgJyBob3VycyBhZ28gJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXkgPSBwYXJzZUludChub3cuZ2V0RGF0ZSgpIC0gcG9zdERhdGUuZ2V0RGF0ZSgpLCAxMCk7XG4gICAgICAgIGlmIChkYXkgPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gKDI0ICsgbm93LmdldEhvdXJzKCkgLSAxNykgKyAnIGhvdXJzIGFnbyAnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoZGF5ICsgJ2RheXMgYWdvICcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KG5vdy5nZXRNb250aCgpIC0gcG9zdERhdGUuZ2V0TW9udGgoKSwgMTApO1xuICAgICAgcmV0dXJuIChtb250aCArIChtb250aCA9PT0gMSA/ICcgbW9udGggJyA6ICdtb250aHMgJykgKyAnIGFnbyAnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeWVhciA9IHBhcnNlSW50KG5vdy5nZXRGdWxsWWVhcigpIC0gcG9zdERhdGUuZ2V0RnVsbFllYXIoKSwgMTApO1xuICAgIHJldHVybiAoeWVhciArICh5ZWFyID09PSAxID8gJyB5ZWFyICcgOiAneWVhcnMgJykgKyAnIGFnbyAnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50Q2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVuZGVyQ2FyZERhdGEgPSB0aGlzLnJlbmRlckNhcmREYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG93SW1hZ2UgPSB0aGlzLnNob3dJbWFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlUG9wdXAgPSB0aGlzLnJlbW92ZVBvcHVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtzaG93SW1hZ2U6IGZhbHNlfTtcbiAgICB0aGlzLmRlYm91bmNlID0gdW5kZWZpbmVkO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIXByZXZQcm9wcy5jYXJkRGF0YSAmJiB0aGlzLnByb3BzLmNhcmREYXRhIHx8IChwcmV2UHJvcHMuY2FyZERhdGEgJiYgdGhpcy5wcm9wcy5jYXJkRGF0YSAmJiBwcmV2UHJvcHMuY2FyZERhdGEubGVuZ3RoICE9PSB0aGlzLnByb3BzLmNhcmREYXRhLmxlbmd0aCkpIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsQ2FwdHVyZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFNjcm9sbENhcHR1cmUoKSB7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuYyk7XG4gICAgICB0aGlzLmRlYm91bmMgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgYm91bmRpbmcgPSB0aGlzLnJlZnMuaXRlbVRvU2Nyb2xsVG9WaWV3LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYm91bmRpbmcudG9wID49IDAgJiZcbiAgICAgICAgICBib3VuZGluZy5sZWZ0ID49IDAgJiZcbiAgICAgICAgICBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSAmJlxuICAgICAgICAgIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMucHJvcHMuZ2V0TmV4dERhdGFTZXQoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBzaG93SW1hZ2UodXJsKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dJbWFnZTogdHJ1ZSwgdXJsOiB1cmwgfSk7XG4gIH1cbiAgcmVtb3ZlUG9wdXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dJbWFnZTogZmFsc2UsIHVybDonJyB9KTtcbiAgfVxuICByZW5kZXJDYXJkRGF0YSgpIHtcbiAgICBjb25zdCB7Y2FyZERhdGF9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gY2FyZERhdGEubWFwKChpdGVtLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gaXRlbS5kYXRhO1xuICAgICAgY29uc3QgbGVuZ3RoID0gYXJyLmxlbmd0aCAtIDM7XG4gICAgICBjb25zdCB7IHRpdGxlLCB1cHMsIHRodW1ibmFpbCwgbnVtX2NvbW1lbnRzLCBhdXRob3IsIGNyZWF0ZWRfdXRjLCB1cmwgfSA9IGRhdGE7XG4gICAgICBjb25zdCB0aW1lID0gcHVibGlzaGVkVGltZShjcmVhdGVkX3V0Yyk7XG4gICAgICBpZiAoIXRodW1ibmFpbCB8fCB0aHVtYm5haWwgPT09ICdzZWxmJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG90aGVyUHJvcHMgPSAoaW5kZXggPT09IGxlbmd0aCA/IHsgcmVmOiAnaXRlbVRvU2Nyb2xsVG9WaWV3J306IHt9KTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gey4uLm90aGVyUHJvcHN9IG9uQ2xpY2s9e3RoaXMuc2hvd0ltYWdlLmJpbmQodGhpcywgdXJsKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkV3JhcHBlciBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nV3JhcCB0Y1wiPlxuICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTIwcHhcIiBoZWlnaHQ9XCI4MHB4XCIgc3JjPXt0aHVtYm5haWx9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzQ2FyZFNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPjxzcGFuIGNsYXNzTmFtZT1cInR4dEVsbGlwc2lzXCI+e3RpdGxlfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWlnbG9vXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuPntjb21tZW50U3ZnfTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJjb21tZW50c0NvdW50XCI+e251bV9jb21tZW50c308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudHNDb3VudFwiPnsnIFB1Ymxpc2hlZCAnICsgdGltZSB9PC9zcGFuPjxzcGFuPiBieSA8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+e2F1dGhvcn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGluZyB0YyBmMTJcIj5cbiAgICAgICAgICAgICAgPGRpdj57VVBWT1RFU1ZHfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImYxMiB1cHNcIj57ZmluZENvdW50KHVwcyl9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+e0RPV05WT1RFU1ZHfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyQnRtXCI+PC9kaXY+ICovfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjYXJkRGF0YX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtzaG93SW1hZ2UsIHVybH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7Y2FyZERhdGEgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImNvbnRlbnRDYXJkV3JhcHBlciBjb2wtMTAgY29sLXNtLTExXCI+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkRGF0YSgpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YyBsb2FkaW5nXCI+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgIDwvZGl2PjpcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vQ2FyZENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzdmcgc3R5bGU9e3t3aWR0aDogJzgwcHgnfX0gdmlld0JveD1cIjAgMCAyMCAyMFwiPjxnPjxjaXJjbGUgZmlsbD1cIiNGRjQ1MDBcIiBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIxMFwiPjwvY2lyY2xlPjxwYXRoIGZpbGw9XCIjRkZGXCIgZD1cIk0xNi42NywxMEExLjQ2LDEuNDYsMCwwLDAsMTQuMiw5YTcuMTIsNy4xMiwwLDAsMC0zLjg1LTEuMjNMMTEsNC42NSwxMy4xNCw1LjFhMSwxLDAsMSwwLC4xMy0wLjYxTDEwLjgyLDRhMC4zMSwwLjMxLDAsMCwwLS4zNy4yNEw5LjcxLDcuNzFhNy4xNCw3LjE0LDAsMCwwLTMuOSwxLjIzQTEuNDYsMS40NiwwLDEsMCw0LjIsMTEuMzNhMi44NywyLjg3LDAsMCwwLDAsLjQ0YzAsMi4yNCwyLjYxLDQuMDYsNS44Myw0LjA2czUuODMtMS44Miw1LjgzLTQuMDZhMi44NywyLjg3LDAsMCwwLDAtLjQ0QTEuNDYsMS40NiwwLDAsMCwxNi42NywxMFptLTEwLDFhMSwxLDAsMSwxLDEsMUExLDEsMCwwLDEsNi42NywxMVptNS44MSwyLjc1YTMuODQsMy44NCwwLDAsMS0yLjQ3Ljc3LDMuODQsMy44NCwwLDAsMS0yLjQ3LS43NywwLjI3LDAuMjcsMCwwLDEsLjM4LTAuMzhBMy4yNywzLjI3LDAsMCwwLDEwLDE0YTMuMjgsMy4yOCwwLDAsMCwyLjA5LS42MUEwLjI3LDAuMjcsMCwxLDEsMTIuNDgsMTMuNzlabS0wLjE4LTEuNzFhMSwxLDAsMSwxLDEtMUExLDEsMCwwLDEsMTIuMjksMTIuMDhaXCI+PC9wYXRoPjwvZz48L3N2Zz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm9DYXJkQ29udGVudFR4dFwiPlNlYXJjaCB0byBsb2FkIHN1Yi1yZWRkaXRzPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge3Nob3dJbWFnZSAmJiA8SW1hZ2VMb2FkZXIgdXJsPXt1cmx9IHJlbW92ZVBvcHVwPXt0aGlzLnJlbW92ZVBvcHVwfS8+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnVwZGF0ZVNlYXJjaFRlcm0gPSB0aGlzLnVwZGF0ZVNlYXJjaFRlcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlYXJjaEZvY3VzID0gdGhpcy5zZWFyY2hGb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hUZXJtOiAnY2F0cydcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpeyBcbiAgICB0aGlzLnByb3BzLnRyaWdnZXJTZWFyY2goJ2NhdHMnKTtcbiAgfVxuICB1cGRhdGVTZWFyY2hUZXJtKGUpIHtcbiAgICBjb25zdCBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcbiAgICBpZiAoa2V5ID09PSAxMykge1xuICAgICAgY29uc3Qge3NlYXJjaFRlcm19ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHRoaXMucHJvcHMudHJpZ2dlclNlYXJjaChzZWFyY2hUZXJtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlYXJjaFRlcm06IGUudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hGb2N1cygpIHtcbiAgICB0aGlzLnJlZnMuc2VhcmNoRWx0LmNsYXNzTGlzdC50b2dnbGUoJ3NlYXJjaEZvY3VzJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3NlYXJjaFRlcm0gPSAnJ30gPSB0aGlzLnN0YXRlO1xuICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRIZWFkZXJXcmFwIGNvbC02IGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cbiAgICAgIDxkaXYgcmVmPVwic2VhcmNoRWx0XCIgY2xhc3NOYW1lPVwic2VhcmNoIGQtaW4tYmxcIj5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwic2VhcmNoXCIgb25LZXlVcD17dGhpcy51cGRhdGVTZWFyY2hUZXJtfSBvbkZvY3VzPXt0aGlzLnNlYXJjaEZvY3VzfSBvbkJsdXI9e3RoaXMuc2VhcmNoRm9jdXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbi1ibCBzaWRlSGVhZGluZyBmMTJcIj5cbiAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMuc2lkZU1lbnVTZWxlY3RlZH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICk7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2dldFN1YlJlZGRpdEluZm99IGZyb20gJy4uL2FwaUNhbGxzL0FwaUNhbGxzJztcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vU2lkZUJhcic7XG5pbXBvcnQgQ29udGVudEhlYWRlciBmcm9tICcuL0NvbnRlbnRIZWFkZXInO1xuaW1wb3J0IENvbnRlbnRDYXJkIGZyb20gJy4vQ29udGVudENhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy50cmlnZ2VyU2VhcmNoID0gdGhpcy50cmlnZ2VyU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaWRlQmFyVXBkYXRlZCA9IHRoaXMuc2lkZUJhclVwZGF0ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldE5leHREYXRhU2V0ID0gdGhpcy5nZXROZXh0RGF0YVNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaWRlTWVudVNlbGVjdGVkOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHNpZGVCYXJVcGRhdGVkKHZhbCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaWRlTWVudVNlbGVjdGVkOiB2YWx9KVxuICB9XG5cbiAgZ2V0TmV4dERhdGFTZXQoKSB7XG4gICAgdGhpcy50cmlnZ2VyU2VhcmNoKHRoaXMuc3RhdGUuc2VhcmNoVGVybSwgdGhpcy5zdGF0ZS5hZnRlcik7XG4gIH1cblxuICB0cmlnZ2VyU2VhcmNoKHNlYXJjaFRlcm0sIGFmdGVyKSB7XG4gICAgZ2V0U3ViUmVkZGl0SW5mbyhzZWFyY2hUZXJtLCBhZnRlcilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiAhYWZ0ZXIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGVybTpzZWFyY2hUZXJtLCAuLi5yZXNwb25zZS5kYXRhLmRhdGEsIGVycm9yOiBmYWxzZX0sICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEgJiYgYWZ0ZXIpIHtcbiAgICAgICAgICBjb25zdCB7YWZ0ZXIsIGNoaWxkcmVufSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWZ0ZXIsIGNoaWxkcmVuOiBbLi4udGhpcy5zdGF0ZS5jaGlsZHJlbiwgLi4uY2hpbGRyZW5dLCBlcnJvcjogZmFsc2V9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyTXNnKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbiwgc2lkZU1lbnVTZWxlY3RlZH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgICAgICA8U2lkZUJhciBzaWRlQmFyVXBkYXRlZD17dGhpcy5zaWRlQmFyVXBkYXRlZH0vPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRyIGQtaW4tYmwgY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRTZWN0aW9uIGQtaW4tYmwgdGwgY29sLTEwIGNvbC1tZC0xMCBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgPENvbnRlbnRIZWFkZXIgdHJpZ2dlclNlYXJjaD17dGhpcy50cmlnZ2VyU2VhcmNofSBzaWRlTWVudVNlbGVjdGVkPXtzaWRlTWVudVNlbGVjdGVkfS8+XG4gICAgICAgICAgICAgIDxDb250ZW50Q2FyZCBjYXJkRGF0YT17Y2hpbGRyZW59IGdldE5leHREYXRhU2V0PXt0aGlzLmdldE5leHREYXRhU2V0fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbWFnZVBvcHVwJykpIHtcbiAgICAgIHRoaXMucHJvcHMucmVtb3ZlUG9wdXAoKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt1cmx9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVBvcHVwXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nXCIgc3JjPXt1cmx9IG9uRXJyb3I9eyhlKSA9PiB7ZS50YXJnZXQuc3JjID0gJy9pbWcvNDA0LnBuZyc7fX0vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWxtZXQgZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCB7TmF2TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLmJpbmQodGhpcyk7XG4gIH1cblxuICBoZWFkKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+UGFnZSBOb3QgRm91bmQ8L3RpdGxlPlxuICAgICAgPC9IZWxtZXQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuaGVhZCgpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGZvdW5kQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm5vdEZvdW5kVGV4dCBmYiB0ZXh0Q2VudGVyXCI+U29ycnksIHRoaXMgcGFnZSBkb2VzIG5vdCBleGlzdCE8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibm90Zm91bmRVTCB0ZXh0Q2VudGVyXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZUJ0blwiPlxuICAgICAgICAgICAgICA8TmF2TGluayB0bz0nL2xvZ2luJyBjbGFzc05hbWU9XCJ3aGl0ZVwiPiBMb2dpbiA8L05hdkxpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG4vKiBEZWNsYXJpbmcgU3R5bGVzICovXG5jb25zdCBzdHlsZVJpcHBsZSA9IHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJ1xufTtcbmNvbnN0IHN0eWxlUmlwcGxlQ29udGFpbmVyID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdG9wOiAnMCcsXG4gIHJpZ2h0OiAnMCcsXG4gIGJvdHRvbTogJzAnLFxuICBsZWZ0OiAnMCdcbn1cbmNvbnN0IHN0eWxlU3BhbiA9IHtcbiAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICBib3JkZXJSYWRpdXM6ICcxMDAlJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIG9wYWNpdHk6ICcwLjc1JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzc3Nzc3NycsXG4gIGFuaW1hdGlvbjogJ3JpcHBsZSA4NTBtcydcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaXBwbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmluaXRpYWxpemVTdGF0ZSA9IHRoaXMuaW5pdGlhbGl6ZVN0YXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYWxsQ2xlYW5VcCA9IHRoaXMuY2FsbENsZWFuVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3dSaXBwbGUgPSB0aGlzLnNob3dSaXBwbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsZWFuVXAgPSB0aGlzLmNsZWFuVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlclJpcHBsZVNwYW4gPSB0aGlzLnJlbmRlclJpcHBsZVNwYW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsaXplU3RhdGUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd1JpcHBsZTogZmFsc2UsXG4gICAgICBjb21iaW5lZFNwYW5TdHlsZXM6IHt9LFxuICAgICAgY291bnQ6IDBcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gYEBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICAgIH1cbiAgICB9YDtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIC8qIERlYm91bmNlIENvZGUgdG8gY2FsbCB0aGUgUmlwcGxlIHJlbW92aW5nIGZ1bmN0aW9uICovXG4gIGNhbGxDbGVhblVwKGNsZWFudXAsIGRlbGF5KSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuYm91bmNlKTtcbiAgICAgICAgdGhhdC5ib3VuY2UgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgIH1cbiAgfVxuXG4gIHNob3dSaXBwbGUoZSkge1xuICAgIGNvbnN0IHJpcHBsZUNvbnRhaW5lciA9IGUuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBzaXplID0gcmlwcGxlQ29udGFpbmVyLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHBvcyA9IHJpcHBsZUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gZS5wYWdlWCAtIHBvcy54IC0gKHNpemUgLyAyKTtcbiAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHBvcy55IC0gKHNpemUgLyAyKTtcblxuICAgIGNvbnN0IHN0eWxlU2l6aW5nID0geyB0b3A6IHkgKyAncHgnLCBsZWZ0OiB4ICsgJ3B4JywgaGVpZ2h0OiBzaXplICsgJ3B4Jywgd2lkdGg6IHNpemUgKyAncHgnIH07XG4gICAgY29uc3QgY29tYmluZWRTcGFuU3R5bGVzID0geyAuLi5zdHlsZVNpemluZywgLi4uc3R5bGVTcGFufTtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuc3RhdGUuY291bnQgKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29tYmluZWRTcGFuU3R5bGVzOiB7Li4udGhpcy5zdGF0ZS5jb21iaW5lZFNwYW5TdHlsZXMsIFtjb3VudF0gOiBjb21iaW5lZFNwYW5TdHlsZXN9LFxuICAgICAgc2hvd1JpcHBsZTogey4uLnRoaXMuc3RhdGUuc2hvd1JpcHBsZSwgW2NvdW50XTogdHJ1ZX0sXG4gICAgICBjb3VudDogY291bnRcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFuVXAoKSB7XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5pbml0aWFsaXplU3RhdGUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4uaW5pdGlhbFN0YXRlIH0pO1xuICB9XG5cbiAgcmVuZGVyUmlwcGxlU3BhbigpIHtcbiAgICBjb25zdCB7c2hvd1JpcHBsZSA9IGZhbHNlLCBjb21iaW5lZFNwYW5TdHlsZXMgPSB7fX0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNwYW5BcnJheSA9IE9iamVjdC5rZXlzKGNvbWJpbmVkU3BhblN0eWxlcyk7XG4gICAgaWYgKHNwYW5BcnJheSAmJiBzcGFuQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgc3BhbkFycmF5Lm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9eydzcGFuQ291bnRfJyArIGluZGV4fSBzdHlsZT17eyAuLi5jb21iaW5lZFNwYW5TdHlsZXNba2V5XX19Pjwvc3Bhbj5cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbj0gbnVsbCwgY2xhc3NlcyA9IFwiXCIsIG9uQ2xpY2tIYW5kbGVyID0gbnVsbH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7Li4uc3R5bGVSaXBwbGV9fSBjbGFzc05hbWU9e2NsYXNzZXN9IG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8ZGl2IHN0eWxlPXt7Li4uc3R5bGVSaXBwbGVDb250YWluZXJ9fSBvbk1vdXNlRG93bj17dGhpcy5zaG93UmlwcGxlfSBvbk1vdXNlVXA9e3RoaXMuY2FsbENsZWFuVXAodGhpcy5jbGVhblVwLCAyMDAwKX0+XG4gICAgICAgICAge3RoaXMucmVuZGVyUmlwcGxlU3BhbigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTSURFQkFSX01FTlVfSVRFTVN9IGZyb20gJy4uL2NvbnN0YW50cy9Db25zdGFudHMnO1xuaW1wb3J0IFJpcHBsZSBmcm9tICcuL1JpcHBsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNpZGVNZW51Q2xpY2sgPSB0aGlzLnNpZGVNZW51Q2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlclNpZGVNZW51ID0gdGhpcy5yZW5kZXJTaWRlTWVudS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW51X2l0ZW1zOiBTSURFQkFSX01FTlVfSVRFTVMsXG4gICAgICBhY3RpdmVJbmRleDogJzEnXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5yZWZzW1wiaW5kZXhfXCIgKyB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4XS5pbm5lclRleHQ7XG4gICAgdGhpcy5wcm9wcy5zaWRlQmFyVXBkYXRlZCh2YWwpO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChwcmV2U3RhdGUuYWN0aXZlSW5kZXggIT09IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggJiYgcGFyc2VJbnQodGhpcy5zdGF0ZS5hY3RpdmVJbmRleCwgMTApIDwgNikge1xuICAgICAgY29uc3QgdmFsID0gdGhpcy5yZWZzW1wiaW5kZXhfXCIgKyB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4XS5pbm5lclRleHQ7XG4gICAgdGhpcy5wcm9wcy5zaWRlQmFyVXBkYXRlZCh2YWwpO1xuICAgIH1cbiAgfVxuICBzaWRlTWVudUNsaWNrKGUpIHtcbiAgICBjb25zdCBpdGVtSW5kZXggPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLmRhdGFzZXQuaXRlbUluZGV4O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmRleDogaXRlbUluZGV4IH0pO1xuICB9XG5cbiAgcmVuZGVyU2lkZU1lbnUoKSB7XG4gICAgY29uc3Qge21lbnVfaXRlbXMgPSBbXSwgYWN0aXZlSW5kZXg9ICcnfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIG1lbnVfaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHNpZGVCYXJJdGVtQ2xhc3MgPSAoaXRlbS5oZWFkaW5nID8gJ3NpZGVIZWFkaW5nJyA6ICcnKTtcbiAgICAgIHNpZGVCYXJJdGVtQ2xhc3MgKz0gKCFpdGVtLmhlYWRpbmcgJiYgaW5kZXgudG9TdHJpbmcoKSA9PT0gYWN0aXZlSW5kZXgpID8gJyBhY3RpdmVTaWRlTWVudScgOiAnJztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSaXBwbGU+XG4gICAgICAgICAgPGRpdiByZWY9e1wiaW5kZXhfXCIgKyBpbmRleH0ga2V5PXsnaXRlbV8nICsgaW5kZXh9IGRhdGEtaXRlbS1pbmRleD17aW5kZXh9IGNsYXNzTmFtZT17J2NvbnRlbnQgJyArIHNpZGVCYXJJdGVtQ2xhc3MgfT57aXRlbS5uYW1lfTwvZGl2PlxuICAgICAgICA8L1JpcHBsZT5cbiAgICAgICkgXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhciBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJyZWRkaXRJY29uU3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxnPjxjaXJjbGUgZmlsbD1cIiNGRjQ1MDBcIiBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIxMFwiPjwvY2lyY2xlPjxwYXRoIGZpbGw9XCIjRkZGXCIgZD1cIk0xNi42NywxMEExLjQ2LDEuNDYsMCwwLDAsMTQuMiw5YTcuMTIsNy4xMiwwLDAsMC0zLjg1LTEuMjNMMTEsNC42NSwxMy4xNCw1LjFhMSwxLDAsMSwwLC4xMy0wLjYxTDEwLjgyLDRhMC4zMSwwLjMxLDAsMCwwLS4zNy4yNEw5LjcxLDcuNzFhNy4xNCw3LjE0LDAsMCwwLTMuOSwxLjIzQTEuNDYsMS40NiwwLDEsMCw0LjIsMTEuMzNhMi44NywyLjg3LDAsMCwwLDAsLjQ0YzAsMi4yNCwyLjYxLDQuMDYsNS44Myw0LjA2czUuODMtMS44Miw1LjgzLTQuMDZhMi44NywyLjg3LDAsMCwwLDAtLjQ0QTEuNDYsMS40NiwwLDAsMCwxNi42NywxMFptLTEwLDFhMSwxLDAsMSwxLDEsMUExLDEsMCwwLDEsNi42NywxMVptNS44MSwyLjc1YTMuODQsMy44NCwwLDAsMS0yLjQ3Ljc3LDMuODQsMy44NCwwLDAsMS0yLjQ3LS43NywwLjI3LDAuMjcsMCwwLDEsLjM4LTAuMzhBMy4yNywzLjI3LDAsMCwwLDEwLDE0YTMuMjgsMy4yOCwwLDAsMCwyLjA5LS42MUEwLjI3LDAuMjcsMCwxLDEsMTIuNDgsMTMuNzlabS0wLjE4LTEuNzFhMSwxLDAsMSwxLDEtMUExLDEsMCwwLDEsMTIuMjksMTIuMDhaXCI+PC9wYXRoPjwvZz48L3N2Zz5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInJlZGRpdE5hbWVTdmdcIiB2aWV3Qm94PVwiMCAwIDU1IDE3LjQ0XCI+PGcgZmlsbD1cIiMxYzFjMWNcIj48Y2lyY2xlIGZpbGw9XCIjRkY0NTAwXCIgY3g9XCI0NS43N1wiIGN5PVwiMy4zM1wiIHI9XCIyLjA1XCI+PC9jaXJjbGU+PHBhdGggZmlsbD1cImluaGVyaXRcIiBkPVwiTTE2LjczLDEyLjA1YTEuNDQsMS40NCwwLDAsMCwxLjU0LTEuNDgsNC45MSw0LjkxLDAsMCwwLS4xLTAuODMsNS42Niw1LjY2LDAsMCwwLTUuMzQtNC42MWMtMywwLTUuNTEsMi43Ni01LjUxLDYuMTVzMi40Nyw2LjE1LDUuNTEsNi4xNWE1LjQ3LDUuNDcsMCwwLDAsNC4yNi0xLjc4LDEuMTksMS4xOSwwLDAsMC0uMTktMS43NywxLjI1LDEuMjUsMCwwLDAtMS41My4xNiwzLjc4LDMuNzgsMCwwLDEtMi41NCwxLjA5LDMuNDIsMy40MiwwLDAsMS0zLjE0LTMuMDhoN1pNMTIuODIsNy40NGEzLjMsMy4zLDAsMCwxLDMsMi41NmgtNkEzLjMsMy4zLDAsMCwxLDEyLjgyLDcuNDRaXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCJpbmhlcml0XCIgZD1cIk03LjQ0LDYuMzJhMS4xNSwxLjE1LDAsMCwwLTEtMS4xNEE0LjQ2LDQuNDYsMCwwLDAsMi4zMSw2LjY5VjYuNTRBMS4xNSwxLjE1LDAsMSwwLDAsNi41NFYxNmExLjE4LDEuMTgsMCwwLDAsMS4wOCwxLjJBMS4xNSwxLjE1LDAsMCwwLDIuMzEsMTZWMTEuMTVBMy41MSwzLjUxLDAsMCwxLDYuMTUsNy40N0g2LjM4QTEuMTUsMS4xNSwwLDAsMCw3LjQ0LDYuMzJaXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCJpbmhlcml0XCIgZD1cIk00Ni45Miw3LjU2YTEuMTUsMS4xNSwwLDAsMC0yLjMxLDBWMTZhMS4xNSwxLjE1LDAsMSwwLDIuMzEsMFY3LjU2WlwiPjwvcGF0aD48cGF0aCBmaWxsPVwiaW5oZXJpdFwiIGQ9XCJNMjkuODcsMS4xNUExLjE1LDEuMTUsMCwwLDAsMjguNzIsMGgwYTEuMTUsMS4xNSwwLDAsMC0xLjE1LDEuMTVWNi4zMWE0LDQsMCwwLDAtMi45NS0xLjE4Yy0zLDAtNS41MSwyLjc2LTUuNTEsNi4xNXMyLjQ3LDYuMTUsNS41MSw2LjE1YTQuMDgsNC4wOCwwLDAsMCwzLTEuMTlBMS4xNSwxLjE1LDAsMCwwLDI5Ljg3LDE2VjEuMTVabS01LjI2LDE0Yy0xLjc3LDAtMy4yMS0xLjcyLTMuMjEtMy44NXMxLjQzLTMuODUsMy4yMS0zLjg1LDMuMjEsMS43MiwzLjIxLDMuODVTMjYuMzksMTUuMTMsMjQuNjIsMTUuMTNaXCI+PC9wYXRoPjxwYXRoIGZpbGw9XCJpbmhlcml0XCIgZD1cIk00MS45MiwxLjE1QTEuMTUsMS4xNSwwLDAsMCw0MC43NywwaDBhMS4xNSwxLjE1LDAsMCwwLTEuMTUsMS4xNVY2LjMxYTQsNCwwLDAsMC0yLjk1LTEuMThjLTMsMC01LjUxLDIuNzYtNS41MSw2LjE1czIuNDcsNi4xNSw1LjUxLDYuMTVhNC4wOCw0LjA4LDAsMCwwLDMtMS4xOUExLjE1LDEuMTUsMCwwLDAsNDEuOTIsMTZWMS4xNVptLTUuMjYsMTRjLTEuNzcsMC0zLjIxLTEuNzItMy4yMS0zLjg1czEuNDMtMy44NSwzLjIxLTMuODUsMy4yMSwxLjcyLDMuMjEsMy44NVMzOC40NCwxNS4xMywzNi42NywxNS4xM1pcIj48L3BhdGg+PHBhdGggZmlsbD1cImluaGVyaXRcIiBkPVwiTTUyLjkxLDE2VjcuNDRoMWExLDEsMCwwLDAsMS4wNi0xLDEsMSwwLDAsMC0xLTEuMDlINTIuOTFWMy43NmExLjE4LDEuMTgsMCwwLDAtMS4wOC0xLjE5LDEuMTUsMS4xNSwwLDAsMC0xLjIzLDEuMTVWNS4zOGgtMWExLDEsMCwwLDAtMS4wNiwxLDEsMSwwLDAsMCwxLDEuMDloMVYxNmExLjE1LDEuMTUsMCwwLDAsMS4xNSwxLjE1aDBBMS4xNSwxLjE1LDAsMCwwLDUyLjkxLDE2WlwiPjwvcGF0aD48L2c+PC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuc2lkZU1lbnVDbGlja30+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2lkZU1lbnUoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApOyBcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBjb21tZW50U3ZnID1cbjxzdmcgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjE1cHhcIiBoZWlnaHQ9XCIxMnB4XCIgdmlld0JveD1cIjAgMCA1MTEuNjI2IDUxMS42MjdcIiBmaWxsPVwiIzc3Nzc3N1wiPlxuICA8Zz5cbiAgICA8cGF0aCBkPVwiTTQ3Ny4zNjQsMTI3LjQ4MWMtMjIuODM5LTI4LjA3Mi01My44NjQtNTAuMjQ4LTkzLjA3Mi02Ni41MjJjLTM5LjIwOC0xNi4yNzQtODIuMDM2LTI0LjQxLTEyOC40NzktMjQuNDFcbiAgICAgIGMtNDYuNDQyLDAtODkuMjY5LDguMTM2LTEyOC40NzgsMjQuNDFjLTM5LjIwOSwxNi4yNzQtNzAuMjMzLDM4LjQ0Ni05My4wNzQsNjYuNTIyQzExLjQxOSwxNTUuNTU1LDAsMTg2LjE1LDAsMjE5LjI2OVxuICAgICAgYzAsMjguNTQ5LDguNjEsNTUuMjk5LDI1LjgzNyw4MC4yMzJjMTcuMjI3LDI0LjkzNCw0MC43NzgsNDUuODc0LDcwLjY2NCw2Mi44MTNjLTIuMDk2LDcuNjExLTQuNTcsMTQuODQyLTcuNDI2LDIxLjdcbiAgICAgIGMtMi44NTUsNi44NTEtNS40MjQsMTIuNDY3LTcuNzA4LDE2Ljg0N2MtMi4yODYsNC4zNzQtNS4zNzYsOS4yMy05LjI4MSwxNC41NTVjLTMuODk5LDUuMzMyLTYuODQ5LDkuMDkzLTguODQ4LDExLjI4M1xuICAgICAgYy0xLjk5NywyLjE5LTUuMjgsNS44MDEtOS44NTEsMTAuODQ4Yy00LjU2NSw1LjA0MS03LjUxNyw4LjMzLTguODQ4LDkuODUzYy0wLjE5MywwLjA5Ny0wLjk1MywwLjk0OC0yLjI4NSwyLjU3NFxuICAgICAgYy0xLjMzMSwxLjYxNS0xLjk5OSwyLjQxOS0xLjk5OSwyLjQxOWwtMS43MTMsMi41N2MtMC45NTMsMS40Mi0xLjM4MSwyLjMyNy0xLjI4NywyLjcwM2MwLjA5NiwwLjM4NC0wLjA5NCwxLjMzNS0wLjU3LDIuODU0XG4gICAgICBjLTAuNDc3LDEuNTI2LTAuNDI4LDIuNjY5LDAuMTQyLDMuNDI5djAuMjg3YzAuNzYyLDMuMjM0LDIuMjgzLDUuODUzLDQuNTY3LDcuODUxYzIuMjg0LDEuOTkyLDQuODU4LDIuOTkxLDcuNzEsMi45OTFoMS40MjlcbiAgICAgIGMxMi4zNzUtMS41MjYsMjMuMjIzLTMuNjEzLDMyLjU0OC02LjI3OWM0OS44Ny0xMi43NTEsOTMuNjQ5LTM1Ljc4MiwxMzEuMzM0LTY5LjA5NGMxNC4yNzQsMS41MjMsMjguMDc0LDIuMjgzLDQxLjM5NiwyLjI4M1xuICAgICAgYzQ2LjQ0MiwwLDg5LjI3MS04LjEzNSwxMjguNDc5LTI0LjQxNGMzOS4yMDgtMTYuMjc2LDcwLjIzMy0zOC40NDQsOTMuMDcyLTY2LjUxN2MyMi44NDMtMjguMDcyLDM0LjI2My01OC42NywzNC4yNjMtOTEuNzg5XG4gICAgICBDNTExLjYyNiwxODYuMTU0LDUwMC4yMDcsMTU1LjU1NSw0NzcuMzY0LDEyNy40ODF6IE00NDUuMjQ0LDI5Mi4wNzVjLTE5Ljg5NiwyMi40NTYtNDYuNzMzLDQwLjMwMy04MC41MTcsNTMuNTI5XG4gICAgICBjLTMzLjc4NCwxMy4yMjMtNzAuMDkzLDE5Ljg0Mi0xMDguOTIxLDE5Ljg0MmMtMTEuNjA5LDAtMjMuOTgtMC43Ni0zNy4xMTMtMi4yODZsLTE2LjI3NC0xLjcwOGwtMTIuMjc3LDEwLjg1MlxuICAgICAgYy0yMy40MDgsMjAuNTU4LTQ5LjU4MiwzNi44MjktNzguNTEzLDQ4LjgyMWM4Ljc1NC0xNS40MTQsMTUuNDE2LTMxLjc4NSwxOS45ODYtNDkuMTAybDcuNzA4LTI3LjQxMmwtMjQuODM4LTE0LjI3XG4gICAgICBjLTI0Ljc0NC0xNC4wOTMtNDMuOTE4LTMwLjc5My01Ny41My01MC4xMTRjLTEzLjYxLTE5LjMxNS0yMC40MTItMzkuNjM4LTIwLjQxMi02MC45NTRjMC0yNi4wNzcsOS45NDUtNTAuMzQzLDI5LjgzNC03Mi44MDNcbiAgICAgIGMxOS44OTUtMjIuNDU4LDQ2LjcyOS00MC4zMDMsODAuNTE1LTUzLjUzMWMzMy43ODYtMTMuMjI5LDcwLjA4OS0xOS44NDksMTA4LjkyLTE5Ljg0OWMzOC44MjgsMCw3NS4xMyw2LjYxNywxMDguOTE0LDE5Ljg0NVxuICAgICAgYzMzLjc4MywxMy4yMjksNjAuNjIsMzEuMDczLDgwLjUxNyw1My41MzFjMTkuODksMjIuNDYsMjkuODM0LDQ2LjcyNywyOS44MzQsNzIuODAyUzQ2NS4xMzMsMjY5LjYxNSw0NDUuMjQ0LDI5Mi4wNzV6XCIvPlxuICA8L2c+XG48L3N2Zz5cblxuZXhwb3J0IGNvbnN0IERPV05WT1RFU1ZHID0gXG48c3ZnIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxNS44MTlweFwiIGhlaWdodD1cIjEyLjgxOXB4XCIgdmlld0JveD1cIjAgMCA0NDQuODE5IDQ0NC44MTlcIiBmaWxsPVwiIzc3Nzc3N1wiPlxuICA8Zz5cbiAgICA8cGF0aCBkPVwiTTQzNC4yNTIsMTE0LjIwM2wtMjEuNDA5LTIxLjQxNmMtNy40MTktNy4wNC0xNi4wODQtMTAuNTYxLTI1Ljk3NS0xMC41NjFjLTEwLjA5NSwwLTE4LjY1NywzLjUyMS0yNS43LDEwLjU2MVxuICAgICAgTDIyMi40MSwyMzEuNTQ5TDgzLjY1Myw5Mi43OTFjLTcuMDQyLTcuMDQtMTUuNjA2LTEwLjU2MS0yNS42OTctMTAuNTYxYy05Ljg5NiwwLTE4LjU1OSwzLjUyMS0yNS45NzksMTAuNTYxbC0yMS4xMjgsMjEuNDE2XG4gICAgICBDMy42MTUsMTIxLjQzNiwwLDEzMC4wOTksMCwxNDAuMTg4YzAsMTAuMjc3LDMuNjE5LDE4Ljg0MiwxMC44NDgsMjUuNjkzbDE4NS44NjQsMTg1Ljg2NWM2Ljg1NSw3LjIzLDE1LjQxNiwxMC44NDgsMjUuNjk3LDEwLjg0OFxuICAgICAgYzEwLjA4OCwwLDE4Ljc1LTMuNjE3LDI1Ljk3Ny0xMC44NDhsMTg1Ljg2NS0xODUuODY1YzcuMDQzLTcuMDQ0LDEwLjU2Ny0xNS42MDgsMTAuNTY3LTI1LjY5M1xuICAgICAgQzQ0NC44MTksMTMwLjI4Nyw0NDEuMjk1LDEyMS42MjksNDM0LjI1MiwxMTQuMjAzelwiLz5cbiAgPC9nPlxuPC9zdmc+XG5cbmV4cG9ydCBjb25zdCBVUFZPVEVTVkcgPSBcbjxzdmcgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjE1LjgxOXB4XCIgaGVpZ2h0PVwiMTIuODE5cHhcIiB2aWV3Qm94PVwiMCAwIDQ0NC44MTkgNDQ0LjgxOVwiIGZpbGw9XCIjNzc3Nzc3XCI+XG4gIDxnPlxuICAgIDxwYXRoIGQ9XCJNNDMzLjk2OCwyNzguNjU3TDI0OC4zODcsOTIuNzljLTcuNDE5LTcuMDQ0LTE2LjA4LTEwLjU2Ni0yNS45NzctMTAuNTY2Yy0xMC4wODgsMC0xOC42NTIsMy41MjEtMjUuNjk3LDEwLjU2NlxuICAgICAgTDEwLjg0OCwyNzguNjU3QzMuNjE1LDI4NS44ODcsMCwyOTQuNTQ5LDAsMzA0LjYzN2MwLDEwLjI4LDMuNjE5LDE4Ljg0MywxMC44NDgsMjUuNjkzbDIxLjQxMSwyMS40MTNcbiAgICAgIGM2Ljg1NCw3LjIzLDE1LjQyLDEwLjg1MiwyNS42OTcsMTAuODUyYzEwLjI3OCwwLDE4Ljg0Mi0zLjYyMSwyNS42OTctMTAuODUyTDIyMi40MSwyMTMuMjcxTDM2MS4xNjgsMzUxLjc0XG4gICAgICBjNi44NDgsNy4yMjgsMTUuNDEzLDEwLjg1MiwyNS43LDEwLjg1MmMxMC4wODIsMCwxOC43NDctMy42MjQsMjUuOTc1LTEwLjg1MmwyMS40MDktMjEuNDEyXG4gICAgICBjNy4wNDMtNy4wNDMsMTAuNTY3LTE1LjYwOCwxMC41NjctMjUuNjkzQzQ0NC44MTksMjk0LjU0NSw0NDEuMjA1LDI4NS44ODQsNDMzLjk2OCwyNzguNjU3elwiLz5cbiAgPC9nPlxuPC9zdmc+IiwiZXhwb3J0IGNvbnN0IFNVQl9SRURESVRfVVJMID0gJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vci8nO1xuZXhwb3J0IGNvbnN0IFNJREVCQVJfTUVOVV9JVEVNUyA9IFtcbiAgeyBuYW1lOiAnUmVkZGl0IEZlZWRzJywgaGVhZGluZzogdHJ1ZSB9LFxuICB7IG5hbWU6ICdIb3QnIH0sIHsgbmFtZTogJ05ldycgfSwgeyBuYW1lOiAnVG9wJyB9LCB7IG5hbWU6ICdSaXNpbmcnIH0seyBuYW1lOiAnQ29udHJvdmVyc2lhbCcgfSxcbiAgeyBuYW1lOiAnT3RoZXJzJywgaGVhZGluZzogdHJ1ZSB9LFxuICB7IG5hbWU6ICdDb2lucycgfSwgeyBuYW1lOiAnUHJlbWl1bScgfSwgeyBuYW1lOiAnSGVscCcgfSwgeyBuYW1lOiAnU2V0dGluZ3MnIH1cbl0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL05vdEZvdW5kJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2xvZ2luJyBleGFjdCByZW5kZXI9eyhwcm9wcykgPT4gPGRpdj5Mb2dpbjwvZGl2Pn0vPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGV4YWN0IHJlbmRlcj17KHByb3BzKSA9PiA8SG9tZSB7Li4ucHJvcHN9Lz59IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nL2hvbWUnIGV4YWN0IHJlbmRlcj17KHByb3BzKSA9PiA8SG9tZSB7Li4ucHJvcHN9IC8+fS8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD0nKicgcmVuZGVyPXsocHJvcHMpID0+IDxOb3RGb3VuZCAvPn0vPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICApO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=