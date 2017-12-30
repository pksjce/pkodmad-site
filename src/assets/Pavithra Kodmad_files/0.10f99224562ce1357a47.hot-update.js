webpackHotUpdate(0,{

/***/ "./src/layouts/index.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.query = undefined;
	var _jsxFileName = "/Users/pkodmad/Workspace/pkodmad-site/src/layouts/index.js";

	var _templateObject = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);

	var _react = __webpack_require__("./node_modules/react/index.js");

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _classnames = __webpack_require__("./node_modules/classnames/index.js");

	var _classnames2 = _interopRequireDefault(_classnames);

	var _styledComponents = __webpack_require__("./node_modules/styled-components/lib/index.js");

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _gatsbyLink = __webpack_require__("./node_modules/gatsby-link/index.js");

	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

	var _reactHelmet = __webpack_require__("./node_modules/react-helmet/lib/Helmet.js");

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _navigation = __webpack_require__("./src/layouts/navigation.js");

	var _navigation2 = _interopRequireDefault(_navigation);

	__webpack_require__("./src/layouts/grid.css");

	var _navHeader = __webpack_require__("./src/components/nav-header.js");

	var _navHeader2 = _interopRequireDefault(_navHeader);

	var _linkWrapper = __webpack_require__("./src/components/link-wrapper.js");

	var _linkWrapper2 = _interopRequireDefault(_linkWrapper);

	var _pageList = __webpack_require__("./src/navigation/page-list.js");

	var _pageList2 = _interopRequireDefault(_pageList);

	var _imageBox = __webpack_require__("./src/components/image-box.js");

	var _imageBox2 = _interopRequireDefault(_imageBox);

	var _home_bookshelf = __webpack_require__("./src/assets/home_bookshelf.jpg");

	var _home_bookshelf2 = _interopRequireDefault(_home_bookshelf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

	var Wrapper = _styledComponents2.default.div(_templateObject);

	var query = exports.query = "** extracted graphql fragment **";

	var isFullPage = function isFullPage(path) {
	  return path === "/" || path === "/talks";
	};

	var TemplateWrapper = function TemplateWrapper(_ref) {
	  var children = _ref.children,
	      data = _ref.data,
	      location = _ref.location;

	  var title = data.site.siteMetadata.title;
	  var pages = (0, _pageList2.default)();
	  return _react2.default.createElement(
	    "div",
	    {
	      __source: {
	        fileName: _jsxFileName,
	        lineNumber: 41
	      }
	    },
	    _react2.default.createElement(_reactHelmet2.default, { title: title, __source: {
	        fileName: _jsxFileName,
	        lineNumber: 42
	      }
	    }),
	    !isFullPage(location.pathname) ? _react2.default.createElement(
	      _navHeader2.default,
	      {
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 45
	        }
	      },
	      pages.map(function (page) {
	        return _react2.default.createElement(
	          _linkWrapper2.default,
	          { key: page.id, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 47
	            }
	          },
	          page.name
	        );
	      })
	    ) : null,
	    _react2.default.createElement(
	      Wrapper,
	      {
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 51
	        }
	      },
	      _react2.default.createElement(_imageBox2.default, { src: _home_bookshelf2.default, __source: {
	          fileName: _jsxFileName,
	          lineNumber: 52
	        }
	      }),
	      isFullPage(location.pathname) ? children() : _react2.default.createElement(
	        "div",
	        { className: "wrapper", __source: {
	            fileName: _jsxFileName,
	            lineNumber: 56
	          }
	        },
	        _react2.default.createElement(
	          "div",
	          {
	            className: location.pathname === "/" ? "full-content" : "content",
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 57
	            }
	          },
	          children()
	        )
	      )
	    )
	  );
	};
	TemplateWrapper.propTypes = {
	  children: _propTypes2.default.func
	};

	var _default = TemplateWrapper;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Wrapper, "Wrapper", "/Users/pkodmad/Workspace/pkodmad-site/src/layouts/index.js");

	  __REACT_HOT_LOADER__.register(query, "query", "/Users/pkodmad/Workspace/pkodmad-site/src/layouts/index.js");

	  __REACT_HOT_LOADER__.register(isFullPage, "isFullPage", "/Users/pkodmad/Workspace/pkodmad-site/src/layouts/index.js");

	  __REACT_HOT_LOADER__.register(TemplateWrapper, "TemplateWrapper", "/Users/pkodmad/Workspace/pkodmad-site/src/layouts/index.js");

	  __REACT_HOT_LOADER__.register(_default, "default", "/Users/pkodmad/Workspace/pkodmad-site/src/layouts/index.js");
	}();

	;

/***/ }),

/***/ "./src/assets/home_bookshelf.jpg":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/home_bookshelf.3aa4d81d.jpg";

/***/ })

})
//# sourceMappingURL=0.10f99224562ce1357a47.hot-update.js.map