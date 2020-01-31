!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],t):"object"==typeof exports?exports["react-awesome-slider"]=t(require("prop-types"),require("react")):e["react-awesome-slider"]=t(e.PropTypes,e.React)}(this,(function(e,t){return function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)__webpack_require__.d(n,o,function(t){return e[t]}.bind(null,o));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return classToModules})),n.d(t,"c",(function(){return getClassName}));var o=function(){function MediaLoader(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MediaLoader),"undefined"!=typeof window&&(this.image=new Image,this.resolve=null,this.video=document.createElement("video"),this.events())}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(MediaLoader,[{key:"events",value:function events(){var e=this;this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!0)})),this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!1)})),this.image.onload=function(){return e.resolve&&e.resolve(!0)},this.image.onerror=function(){return e.resolve&&e.resolve(!1)}}},{key:"load",value:function load(e){var t=this;return new Promise((function(n){e||n(!0),t.resolve=n,t.loading=!0,t.ended=!1,e.match(/\.(mp4|webm)/i)&&t.video.setAttribute("src",e),e.match(/\.(png|jp(e)?g|gif|webp)/i)&&(t.image.src=e,(t.image.width>0||t.image.height>0)&&n(!0))}))}},{key:"loadImage",value:function loadImage(e){var t=this,n=new Image,o=!1;n.onload=function(){o||t.pumpLoaded()},n.onerror=function(){o||t.pumpLoaded()},n.src=e,!1===o&&(n.width>0||n.height>0)&&(o=!0,this.pumpLoaded())}},{key:"loadVideo",value:function loadVideo(e){var t=this,n=document.createElement("video");n.addEventListener("loadeddata",(function(){t.pumpLoaded()})),n.addEventListener("error",(function(){t.pumpLoaded()})),n.setAttribute("src",e)}},{key:"pumpLoaded",value:function pumpLoaded(){this.loaded+=1,this.loaded===this.toLoad&&this.resolver(!0)}},{key:"startLoad",value:function startLoad(e){e.match(/\.(mp4|webm)/i)&&this.loadVideo(e),e.match(/\.(png|jp(e)?g|gif|webp)/i)&&this.loadImage(e)}},{key:"loadMultiple",value:function loadMultiple(e){var t=this;return this.loaded=0,this.toLoad=e.length,new Promise((function(n){t.resolver=n,e.forEach((function(e){t.startLoad(e)}))}))}}]),MediaLoader}();function classToModules(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(!t)return e.join(" ").trim();for(var n=[],o=e.length;o--;)t[e[o]]&&n.push(t[e[o]]);return n}function getClassName(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t&&t[e]||e}},function(e,n){e.exports=t},function(e,t,n){e.exports=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.tolerance,r=void 0===o?0:o,i=n.propertyName;return new Promise((function(n){if(e){var o=null,s=t.charAt(0).toUpperCase()+t.slice(1),a=0;void 0!==e.style["Webkit"+s]&&(o="webkit"+s+"End"),void 0!==e.style.OTransition&&(o="o"+t+"End"),void 0!==e.style[t]&&(o=t+"end"),e.clearCssEndEvent&&e.clearCssEndEvent(),e.clearCssEndEvent=function(){e.removeEventListener(o,c)},e.addEventListener(o,c)}else n(!1);function c(t){if((t.srcElement||t.target)===e){if(a>=r){if(i&&i!==t.propertyName)return;e.removeEventListener(o,c),n(t)}a+=1}}}))}function r(e){window&&window.requestAnimationFrame((function(){window.requestAnimationFrame(e)}))}Object.defineProperty(t,"__esModule",{value:!0}),t.setCssEndEvent=o,t.beforeCssLayout=function(e){window&&window.requestAnimationFrame(e)},t.beforeNextCssLayout=r,t.beforeFutureCssLayout=function(e,t){!function e(t,n){window&&t&&Number.isInteger(t)&&t>0?window.requestAnimationFrame((function(){e(t-1,n)})):n()}(e+1,t)},t.onceNextCssLayout=function(){return new Promise((function(e){r(e)}))},t.onceTransitionEnd=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){o(e,"transition",t).then(n)}))},t.onceAnimationEnd=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){o(e,"animation",t).then(n)}))}}])},function(e,t,n){e.exports=n(8)},,,,function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o),i=n(0),s=n.n(i),a=n(3),c=n(1);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function transformChildren(e){var t=[];return(e.constructor===Array?e:[e]).forEach((function(e){var n=function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props);e.props["data-src"]&&(n.url=e.props["data-src"]),e.props["data-slug"]&&(n.slug=e.props["data-slug"]),t.push(n)})),t}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function bullets_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){function Bullets(e){var t;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Bullets),t=function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}(this,_getPrototypeOf(Bullets).call(this,e)),bullets_defineProperty(_assertThisInitialized(t),"bulletClick",(function(e){var n=e.currentTarget;n.classList.add(Object(c.c)("".concat(t.rootElement,"__bullets--loading"),t.props.cssModule));var o=parseInt(n.getAttribute("data-index"),10),r=!(t.props.selected>o);t.props.onClick({index:o,direction:r})})),t.rootElement=e.rootElement,t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Bullets,e),function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Bullets,[{key:"renderBullets",value:function renderBullets(){var e=this,t=this.props,n=t.cssModule,o=t.selected,i=t.media;return(void 0===i?[]:i).map((function(t,i){var s=i===o?Object(c.c)("".concat(e.rootElement,"__bullets--active"),n):null;return r.a.createElement("button",{key:"bullet-".concat(i),"data-index":i,onClick:e.bulletClick,className:s},i)}))}},{key:"render",value:function render(){var e=this.props,t=e.cssModule,n=e.rootElement;return r.a.createElement("nav",{className:Object(c.c)("".concat(n,"__bullets"),t)},this.renderBullets())}}]),Bullets}(r.a.Component);function buttons_typeof(e){return(buttons_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function buttons_defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function buttons_possibleConstructorReturn(e,t){return!t||"object"!==buttons_typeof(t)&&"function"!=typeof t?function buttons_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function buttons_getPrototypeOf(e){return(buttons_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function buttons_setPrototypeOf(e,t){return(buttons_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function buttons_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}bullets_defineProperty(l,"propTypes",{cssModule:s.a.object,rootElement:s.a.string.isRequired,media:s.a.array,onClick:s.a.func,selected:s.a.number}),bullets_defineProperty(l,"defaultProps",{cssModule:null,selected:0,media:[],onClick:function onClick(){}});var u=function(e){function Buttons(){return function buttons_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Buttons),buttons_possibleConstructorReturn(this,buttons_getPrototypeOf(Buttons).apply(this,arguments))}return function buttons_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&buttons_setPrototypeOf(e,t)}(Buttons,e),function buttons_createClass(e,t,n){return t&&buttons_defineProperties(e.prototype,t),n&&buttons_defineProperties(e,n),e}(Buttons,[{key:"componentDidMount",value:function componentDidMount(){this.props.onMount({element:this.controls,next:this.next,prev:this.prev})}},{key:"render",value:function render(){var e=this,t=this.props,n=t.rootElement,o=t.cssModule,i=t.organicArrows,s=t.buttonContentLeft,a=t.buttonContentRight,l=t.onNext,u=t.onPrev;return r.a.createElement("div",{ref:function ref(t){e.controls=t,e.props.onMount({element:e.controls,next:e.next||null,prev:e.prev||null})},className:[Object(c.c)("".concat(n,"__controls"),o),Object(c.c)("".concat(n,"__controls--hidden"),o)].join(" ")},r.a.createElement("button",{ref:function ref(t){e.next=t},"aria-label":"next",className:Object(c.c)("".concat(n,"__next"),o),onClick:l},i?r.a.createElement("span",{className:Object(c.c)("".concat(n,"__controls__arrow-right"),o)}):a),r.a.createElement("button",{ref:function ref(t){e.prev=t},"aria-label":"previous",className:Object(c.c)("".concat(n,"__prev"),o),onClick:u},i?r.a.createElement("span",{className:Object(c.c)("".concat(n,"__controls__arrow-left"),o)}):s))}}]),Buttons}(r.a.Component);function media_typeof(e){return(media_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n,o,r=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function media_defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function media_getPrototypeOf(e){return(media_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function media_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function media_setPrototypeOf(e,t){return(media_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function media_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}buttons_defineProperty(u,"propTypes",{cssModule:s.a.object,rootElement:s.a.string.isRequired,onMount:s.a.func.isRequired,onNext:s.a.func.isRequired,onPrev:s.a.func.isRequired,buttonContentLeft:s.a.node,buttonContentRight:s.a.node,organicArrows:s.a.bool}),buttons_defineProperty(u,"defaultProps",{cssModule:null,organicArrows:!0,buttonContentLeft:null,buttonContentRight:null});var d=function(e){function Media(){var e,t;!function media_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Media);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=function media_possibleConstructorReturn(e,t){return!t||"object"!==media_typeof(t)&&"function"!=typeof t?media_assertThisInitialized(e):t}(this,(e=media_getPrototypeOf(Media)).call.apply(e,[this].concat(o))),media_defineProperty(media_assertThisInitialized(t),"state",{}),t}return function media_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&media_setPrototypeOf(e,t)}(Media,e),function media_createClass(e,t,n){return t&&media_defineProperties(e.prototype,t),n&&media_defineProperties(e,n),e}(Media,[{key:"render",value:function render(){var e=this.props,t=e.media,n=e.className,o=t.url,i=t.children,s=t.style,a=(t.loader,t["data-src"],t.className),c=(t.onTransitionEnd,t.onTransitionStartOut,t.onTransitionStartIn,t.onTransitionRequestOut,t.onTransitionRequestIn,_objectWithoutProperties(t,["url","children","style","loader","data-src","className","onTransitionEnd","onTransitionStartOut","onTransitionStartIn","onTransitionRequestOut","onTransitionRequestIn"])),l=null;return o&&(l=o.match(/\.(mp4|webm)/)?r.a.createElement("video",{title:t.title,src:o,type:"video/mp4",controls:!0}):r.a.createElement("img",{alt:t.alt||t.title||null,src:o})),r.a.createElement("div",_extends({className:n,style:s||null},c),l,i&&r.a.createElement("div",{className:a},t.children))}}]),Media}(r.a.Component);function core_typeof(e){return(core_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function core_toConsumableArray(e){return function core_arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function core_iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function core_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function core_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function core_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?core_ownKeys(Object(n),!0).forEach((function(t){core_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):core_ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function core_defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function core_getPrototypeOf(e){return(core_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function core_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function core_setPrototypeOf(e,t){return(core_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function core_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}media_defineProperty(d,"propTypes",{media:s.a.object.isRequired,className:s.a.string.isRequired});var f="awssld",p=new c.a,h=function(e){function AwesomeSlider(e){var t;return function core_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AwesomeSlider),t=function core_possibleConstructorReturn(e,t){return!t||"object"!==core_typeof(t)&&"function"!=typeof t?core_assertThisInitialized(e):t}(this,core_getPrototypeOf(AwesomeSlider).call(this,e)),core_defineProperty(core_assertThisInitialized(t),"clickNext",(function(){var e=null===t.index?0:t.index+1;t.onTransitionRequest("next",e),t.goTo({index:e,direction:!0})})),core_defineProperty(core_assertThisInitialized(t),"clickPrev",(function(){var e=t.index-1;t.onTransitionRequest("prev",e),t.goTo({index:e,direction:!1})})),core_defineProperty(core_assertThisInitialized(t),"touchStart",(function(e){if(!t.animating&&null!==t.index){var n=e.nativeEvent;t.touchStartPoint=n.touches[0].clientX}})),core_defineProperty(core_assertThisInitialized(t),"touchMove",(function(e){if(!t.animating&&t.touchStartPoint){var n=e.nativeEvent,o=n.touches[0].clientX-t.touchStartPoint,r=t[t.active],i=t[t.loader],s=!(o>0),a=Math.abs(o);!1!==t.touchEnabled?a>=10&&(!1===t.loading?t.goTo({index:s?t.index+1:t.index-1,direction:s,touch:!0}):!0===t.direction?(o+=10,Math.abs(o)>r.offsetWidth?o=-r.offsetWidth:o>0&&(o=0),r.style.transform="translate3d(".concat(o,"px, 0, 0)"),i.style.transform="translate3d(calc(100% + ".concat(o,"px), 0, 0)")):(o-=10,Math.abs(o)>r.offsetWidth?o=r.offsetWidth:o<0&&(o=0),r.style.transform="translate3d(".concat(o,"px, 0, 0)"),i.style.transform="translate3d(calc(-100% + ".concat(o,"px), 0, 0)"))):a>20&&(t.touchEnabled=!0,t.touchStartPoint=n.touches[0].clientX)}})),core_defineProperty(core_assertThisInitialized(t),"touchEnd",(function(){!t.animating&&t.touchStartPoint&&t.loading&&(t.touchStartPoint=null,t.animating=!0,t.touchEnabled=!1,t.animateMobileEnd((function(){t.index=t.nextIndex,t.setState({index:t.index}),t.onTransitionEnd(),t.animating=!1,t.loading=!1,t.unchargeIndex()})))})),core_defineProperty(core_assertThisInitialized(t),"bulletClick",(function(e){var n=e.currentTarget,o=parseInt(n.getAttribute("data-index"),10);t.goTo({index:o,direction:!(t.index>o)},(function(){Object(a.onceNextCssLayout)().then((function(){n.classList.add(t.classNames.bulletsLoading)}))}))})),t.rootElement=e.rootElement||f,t.boxA=null,t.boxB=null,t.loaded=[],t.active="boxA",t.loader="boxB",t.nextIndex=null,t.loading=!1,t.media=null,t.started=!1,t.touchEnabled=!1,t.setupStartup(e),t}return function core_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&core_setPrototypeOf(e,t)}(AwesomeSlider,e),function core_createClass(e,t,n){return t&&core_defineProperties(e.prototype,t),n&&core_defineProperties(e,n),e}(AwesomeSlider,[{key:"componentDidMount",value:function componentDidMount(){var e=this;this.boxA.classList.add(this.classNames.active),this.props.startupScreen&&(this.buttons&&(this.buttons.element.classList.add(this.classNames.controlsHidden),this.buttons.element.classList.add(this.classNames.controlsActive)),!0===this.props.startup&&this.media.length>0&&this.startup()),this.props.onFirstMount&&this.props.onFirstMount(core_objectSpread({},this.getInfo())),this.buttons&&Object(a.onceNextCssLayout)().then((function(){e.buttons&&e.buttons.element&&e.buttons.element.classList.remove(e.classNames.controlsHidden)}))}},{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(e){if(this.checkChildren(e),this.setupClassNames(e.cssModule),e.name===this.props.name)if(!0!==e.startup||!1!==this.started)if(e.selected===this.props.selected)this.refreshSlider();else{var t=this.getIndex(e.selected),n=!0===e.infinite&&0===t&&this.index===this.media.length-1||!(this.index>t);this.goTo({index:t,direction:n})}else this.startup();else this.resetSlider(e.selected)}},{key:"onTransitionStart",value:function onTransitionStart(){var e=this.media[this.index],t=this.media[this.nextIndex],n=core_objectSpread({},this.getInfo(),{nextSlide:this[this.loader],nextIndex:this.nextIndex,nextMedia:t});this.props.onTransitionStart&&this.props.onTransitionStart(n),e&&e.onTransitionStartOut&&e.onTransitionStartOut(n),t&&t.onTransitionStartIn&&t.onTransitionStartIn(n)}},{key:"onTransitionRequest",value:function onTransitionRequest(e,t){var n=this.media[this.index],o=this.checkIndex(t),r=this.media[o],i=core_objectSpread({eventName:e},this.getInfo(),{nextSlide:null,nextIndex:o,nextMedia:r});this.props.onTransitionRequest&&this.props.onTransitionRequest(i),n&&n.onTransitionRequestOut&&n.onTransitionRequestOut(i),r&&r.onTransitionRequestIn&&r.onTransitionRequestIn(i)}},{key:"onTransitionEnd",value:function onTransitionEnd(){var e=this.media[this.index],t=core_objectSpread({},this.getInfo());this.props.onTransitionEnd&&this.props.onTransitionEnd(t),e&&e.onTransitionEnd&&e.onTransitionEnd(t)}},{key:"getRootClassName",value:function getRootClassName(){var e=this.props,t=e.animation,n=e.className,o=e.cssModule,r=e.disabled,i=e.fillParent,s=e.infinite,a=e.organicArrows;return function helpers_getRootClassName(e){var t,n=e.rootElement,o=e.cssModule,r=e.disabled,i=e.organicArrows,s=e.className,a=e.total,l=e.current,u=e.infinite,d=e.animation,f=e.fillParent,p=[n];return d&&p.push("".concat(n,"--").concat(d)),!0===i&&p.push("".concat(n,"--organic-arrows")),!0===r&&p.push("".concat(n,"--disabled")),f&&p.push("".concat(n,"--fill-parent")),!1===u&&(0===l&&p.push("".concat(n,"--first")),l===a-1&&p.push("".concat(n,"--last"))),o&&o[n]&&(p=Object(c.b)(p,o)),s&&(t=p).push.apply(t,_toConsumableArray(s.split(" "))),p.join(" ").trim().replace(/[\s]+/gi," ")}({animation:t,className:n,cssModule:o,current:this.state.index,disabled:r,fillParent:i,infinite:s,organicArrows:a,rootElement:this.rootElement,total:this.media.length})}},{key:"setupStartup",value:function setupStartup(e){if(this.checkChildren(e),this.setupClassNames(e.cssModule),e.startupScreen){var t=this.getIndex(this.props.selected);this.index=null,this.state={index:this.index,boxA:{className:this.classNames.startUp,children:e.startupScreen},boxB:this.media[t]||null}}else this.started=!0,this.index=this.getIndex(this.props.selected),this.state={index:this.index,boxA:this.media[this.index]||null,boxB:null}}},{key:"getInfo",value:function getInfo(){return{slides:this.media.length,currentIndex:this.index,currentSlide:this[this.active],currentMedia:this.media[this.index],element:this.slider}}},{key:"getBar",value:function getBar(){if(!document)return{};var e=document.createElement("div");return e.className=this.classNames.bar,e}},{key:"setupClassNames",value:function setupClassNames(e){this.classNames=function helpers_setupClassNames(e,t){return{boxA:Object(c.c)("".concat(e,"__boxA"),t),boxB:Object(c.c)("".concat(e,"__boxB"),t),box:Object(c.c)("".concat(e,"__box"),t),container:Object(c.c)("".concat(e,"__container"),t),wrapper:Object(c.c)("".concat(e,"__wrapper"),t),bar:Object(c.c)("".concat(e,"__bar"),t),barActive:Object(c.c)("".concat(e,"__bar--active"),t),barEnd:Object(c.c)("".concat(e,"__bar--end"),t),content:Object(c.c)("".concat(e,"__content"),t),contentStatic:Object(c.c)("".concat(e,"__content--static"),t),contentMoveLeft:Object(c.c)("".concat(e,"__content--moveLeft"),t),contentMoveRight:Object(c.c)("".concat(e,"__content--moveRight"),t),controlsHidden:Object(c.c)("".concat(e,"__controls--hidden"),t),controlsActive:Object(c.c)("".concat(e,"__controls--active"),t),animated:Object(c.c)("".concat(e,"--animated"),t),animatedMobile:Object(c.c)("".concat(e,"--animated-mobile"),t),contentExit:Object(c.c)("".concat(e,"__content--exit"),t),exit:Object(c.c)("".concat(e,"--exit"),t),active:Object(c.c)("".concat(e,"--active"),t),moveLeft:Object(c.c)("".concat(e,"--moveLeft"),t),moveRight:Object(c.c)("".concat(e,"--moveRight"),t),startUp:Object(c.c)("".concat(e,"__startUp"),t),bulletsLoading:Object(c.c)("".concat(e,"__bullets--loading"),t)}}(this.rootElement,e)}},{key:"getIndex",value:function getIndex(e){var t=0;return"number"==typeof e?e:("string"==typeof e&&this.media.forEach((function(n,o){n.slug===e&&(t=o)})),t)}},{key:"refreshSlider",value:function refreshSlider(){var e;if(!0!==this.loading&&!1!==this.props.startup&&null!==this.index){var t=this.index;this.setState((core_defineProperty(e={index:t},this.active,this.media[this.getIndex(t)]),core_defineProperty(e,this.loader,null),e))}}},{key:"startup",value:function startup(){var e=this;this.started=!0,setTimeout((function(){e.goTo({index:e.props.selected,direction:!0,touch:!1})}),this.props.startupDelay||75)}},{key:"resetSlider",value:function resetSlider(){var e,t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.index=n,this.setState((core_defineProperty(e={index:n},this.active,this.media[this.getIndex(n)]),core_defineProperty(e,this.loader,null),e),(function(){t.props.onResetSlider&&t.props.onResetSlider(core_objectSpread({},t.getInfo()))}))}},{key:"checkChildren",value:function checkChildren(e){e.children&&(e.children!==this.props.children||this.props.children&&!this.media)?this.media=transformChildren(e.children):e.media&&e.media.length?this.media=e.media:this.media||(this.media=[])}},{key:"startBarAnimation",value:function startBarAnimation(e){var t=this,n=e.active;return new Promise((function(e){t.bar=t.getBar(),n.appendChild(t.bar),Object(a.onceNextCssLayout)().then((function(){Object(a.onceNextCssLayout)().then((function(){t.bar.classList.add(t.classNames.barActive),e()}))}))}))}},{key:"endBarAnimation",value:function endBarAnimation(e){var t=this;this.bar&&Object(a.onceNextCssLayout)().then((function(){Object(a.onceTransitionEnd)(t.bar).then((function(){e()})),t.bar.classList.add(t.classNames.barEnd)}))}},{key:"loadContent",value:function loadContent(e,t){var n=this;return new Promise((function(o,r){if(n.props.onLoadStart||t&&t.onLoadStart){var i=n.props.onLoadStart||t&&t.onLoadStart;return n.startBarAnimation({active:e}),void i(core_objectSpread({next:function next(){n.endBarAnimation((function(){o(n.bar)}))},error:r},n.getInfo()))}if(t&&(t.url||t.preload)){var s=t.url?[t.url]:t.preload||[];return!0===n.checkLoadedUrls(s)?void o(null):(n.startBarAnimation({active:e}),void p.loadMultiple(s).then((function(){n.pushLoaded(s),n.endBarAnimation((function(){o(n.bar)}))})))}o(null)}))}},{key:"pushLoaded",value:function pushLoaded(e){this.loaded=[].concat(core_toConsumableArray(this.loaded),core_toConsumableArray(e))}},{key:"checkLoadedUrls",value:function checkLoadedUrls(e){var t=this,n=!0;return e.forEach((function(e){t.loaded.includes(e)||(n=!1)})),n}},{key:"startAnimationMobile",value:function startAnimationMobile(){var e=this.direction,t=this[this.active],n=this[this.loader],o=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,r=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight;this.props.onTransitionStart&&this.props.onTransitionStart(core_objectSpread({},this.getInfo(),{nextSlide:this[this.loader],nextIndex:this.nextIndex,nextMedia:this.media[this.nextIndex]}));var i=t.querySelector(".".concat(this.classNames.content));i.classList.add(r),i.classList.add(this.classNames.contentExit);var s=n.querySelector(".".concat(this.classNames.content));s.classList.add(o),s.classList.add(this.classNames.contentStatic)}},{key:"animateMobileEnd",value:function animateMobileEnd(e){var t=this,n=this.direction,o=this[this.active],r=this[this.loader],i=n?this.classNames.moveLeft:this.classNames.moveRight,s=n?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,c=n?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,l=r.querySelector(".".concat(this.classNames.content)),u=o.querySelector(".".concat(this.classNames.content));l.classList.remove(this.classNames.contentStatic),r.classList.add(this.classNames.animatedMobile),o.classList.add(this.classNames.animatedMobile),Object(a.onceNextCssLayout)().then((function(){r.style.transform="translate3d(0, 0, 0)",o.style.transform="translate3d(".concat(t.direction?"-":"","100%, 0, 0)"),Object(a.onceTransitionEnd)(o).then((function(){t.loading&&(r.classList.add(t.classNames.active),o.classList.remove(t.classNames.active),o.classList.remove(i),r.classList.remove(t.classNames.animatedMobile),o.classList.remove(t.classNames.animatedMobile),u.classList.remove(c),u.classList.remove(t.classNames.contentExit),l.classList.remove(s),t.buttons&&setTimeout((function(){t.buttons&&t.buttons.element.classList.remove(t.classNames.controlsActive)}),t.props.controlsReturnDelay),t.activeArrow&&(t.activeArrow=null,t.activeArrowClass=null),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA",e&&e())}))}))}},{key:"runAnimation",value:function runAnimation(e){var t=this,n=e.active,o=e.media,r=e.contentExitMoveClass,i=e.contentEnterMoveClass,s=e.activeContentElement,c=e.loaderContentElement,l=e.loader,u=e.loaderPosition,d=e.exitPosition,f=e.callback,p=e.transitionDelay;this.loadContent(n,o).then((function(e){s.classList.add(r),s.classList.add(t.classNames.contentExit),c.classList.add(i),c.classList.add(t.classNames.contentStatic),setTimeout((function(){Object(a.onceNextCssLayout)().then((function(){n.classList.add(t.classNames.animated),l.classList.add(t.classNames.animated),c.classList.remove(t.classNames.contentStatic),n.classList.add(t.classNames.exit),l.classList.add(u),n.classList.add(d),Object(a.onceAnimationEnd)(n).then((function(){l.classList.add(t.classNames.active),l.classList.remove(u),l.classList.remove(t.classNames.animated),n.classList.remove(t.classNames.animated),n.classList.remove(t.classNames.active),n.classList.remove(d),n.classList.remove(t.classNames.exit),s.classList.remove(r),s.classList.remove(t.classNames.contentExit),c.classList.remove(i),e&&n.removeChild(e),t.buttons&&setTimeout((function(){t.buttons&&t.buttons.element.classList.remove(t.classNames.controlsActive)}),t.props.controlsReturnDelay),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA";var o=!t.activeArrow;t.activeArrow&&(Object(a.onceTransitionEnd)(t.activeArrow,{tolerance:null===t.index?0:2}).then((function(){t.releaseTransition()})),t.activeArrow.classList.remove(t.activeArrowClass),t.activeArrow=null,t.activeArrowClass=null),f({release:o})}))}))}),p)}))}},{key:"releaseTransition",value:function releaseTransition(){this.loading=!1,this.onTransitionEnd()}},{key:"startAnimation",value:function startAnimation(e,t,n){var o=this.props.transitionDelay,r=this[this.active],i=this[this.loader],s=e?this.classNames.moveRight:this.classNames.moveLeft,a=e?this.classNames.moveLeft:this.classNames.moveRight,c=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,l=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,u=r.querySelector(".".concat(this.classNames.content)),d=i.querySelector(".".concat(this.classNames.content));r.style.removeProperty("transform"),i.style.removeProperty("transform"),this.onTransitionStart();var f={active:r,media:t,contentExitMoveClass:l,contentEnterMoveClass:c,activeContentElement:u,loaderContentElement:d,loader:i,loaderPosition:s,exitPosition:a,callback:n,transitionDelay:o};this.runAnimation(f)}},{key:"goTo",value:function goTo(e){var t=this,n=e.index,o=e.direction,r=e.touch,i=void 0!==r&&r,s=this.getIndex(n);!0!==this.loading&&n!==this.index?(this.loading=!0,this.direction=o,!0!==i?this.activateArrows(o,(function(){t.chargeIndex(s,(function(e){t.renderedLoader=!0,t.startAnimation(o,e,(function(e){var n=e.release,o=void 0===n||n;t.index=t.nextIndex,t.setState({index:t.index},(function(){!0===o&&t.releaseTransition()}))}))}))})):this.chargeIndex(s,(function(){t.activateArrows(o),t.startAnimationMobile()}))):this.props.onTransitionReject&&this.props.onTransitionReject(core_objectSpread({},this.getInfo(),{forceTransition:function forceTransition(){t.goTo({index:n,direction:o,touch:i})}}))}},{key:"checkIndex",value:function checkIndex(e){return e>this.media.length-1?0:e<0?this.media.length-1:e}},{key:"chargeIndex",value:function chargeIndex(e,t){this.nextIndex=this.checkIndex(e);var n={},o=this.media[this.nextIndex];n[this.loader]=core_objectSpread({loader:!0},o),this.setState(n,(function(){t(o)}))}},{key:"unchargeIndex",value:function unchargeIndex(){var e={};e[this.loader]=null,this.setState(e,(function(){}))}},{key:"activateArrows",value:function activateArrows(e,t){var n=e?"right":"left",o=Object(c.c)("".concat(this.rootElement,"__controls__arrow-").concat(n),this.props.cssModule);if(this.buttons){var r=e?this.buttons.next:this.buttons.prev;this.activeArrow=r.querySelector(".".concat(o))}this.activeArrow&&!this.buttons.element.classList.contains(this.classNames.controlsActive)?(this.activeArrowClass=Object(c.c)("".concat(this.rootElement,"__controls__arrow-").concat(n,"--active"),this.props.cssModule),Object(a.onceTransitionEnd)(this.activeArrow,{tolerance:null===this.index?0:2}).then((function(){t&&t()})),this.buttons&&this.buttons.element&&(this.buttons.element.classList.add(this.classNames.controlsActive),this.activeArrow.classList.add(this.activeArrowClass))):t&&t()}},{key:"renderBox",value:function renderBox(e){var t=this;return r.a.createElement("div",{ref:function ref(n){t["box".concat(e)]=n},className:this.classNames.box,onTouchStart:this.touchStart,onTouchMove:this.touchMove,onTouchEnd:this.touchEnd},this.state["box".concat(e)]&&r.a.createElement(d,{media:this.state["box".concat(e)],className:this.classNames.content}))}},{key:"render",value:function render(){var e=this,t=this.props,n=t.cssModule,o=t.organicArrows,i=t.bullets,s=t.style,a=t.customContent,c=t.buttons,d=t.buttonContentLeft,f=t.buttonContentRight,p=this.rootElement;return r.a.createElement("div",{ref:function ref(t){e.slider=t},className:this.getRootClassName(),style:s},r.a.createElement("div",{ref:function ref(t){e.wrapper=t},className:this.classNames.wrapper},r.a.createElement("div",{ref:function ref(t){e.container=t},className:this.classNames.container},this.renderBox("A"),this.renderBox("B")),c&&r.a.createElement(u,{rootElement:p,cssModule:n,onMount:function onMount(t){e.buttons=t},onNext:this.clickNext,onPrev:this.clickPrev,organicArrows:o,buttonContentLeft:d,buttonContentRight:f}),a),i&&r.a.createElement(l,{cssModule:n,rootElement:p,media:this.media,selected:this.state.index,onClick:function onClick(t){e.onTransitionRequest("bullet",t.index),e.goTo(t)}}))}}]),AwesomeSlider}(r.a.Component);core_defineProperty(h,"propTypes",{animation:s.a.string,bullets:s.a.bool,buttonContentLeft:s.a.node,buttonContentRight:s.a.node,buttons:s.a.bool,children:s.a.node,className:s.a.string,controlsReturnDelay:s.a.number,cssModule:s.a.object,customContent:s.a.node,onLoadStart:s.a.func,disabled:s.a.bool,fillParent:s.a.bool,infinite:s.a.bool,media:s.a.array,name:s.a.string,onFirstMount:s.a.func,onResetSlider:s.a.func,onStartupRelease:s.a.func,onTransitionEnd:s.a.func,onTransitionRequest:s.a.func,onTransitionStart:s.a.func,organicArrows:s.a.bool,rootElement:s.a.string,selected:s.a.any,startup:s.a.bool,startupDelay:s.a.number,startupScreen:s.a.object,style:s.a.object,transitionDelay:s.a.number}),core_defineProperty(h,"defaultProps",{animation:null,bullets:!0,buttonContentLeft:null,buttonContentRight:null,buttons:!0,children:null,className:null,controlsReturnDelay:0,cssModule:null,customContent:null,onLoadStart:null,disabled:!1,fillParent:!1,infinite:!0,media:[],name:"awesome-slider",onFirstMount:null,onResetSlider:null,onStartupRelease:null,onTransitionEnd:null,onTransitionRequest:null,onTransitionStart:null,organicArrows:!0,rootElement:f,selected:0,startup:!0,startupDelay:0,startupScreen:null,style:{},transitionDelay:0});t.default=h}])}));