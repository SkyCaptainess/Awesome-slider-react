!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["react-awesome-button"]=t(require("react"),require("prop-types")):e["react-awesome-button"]=t(e.React,e.PropTypes)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(s){if(n[s])return n[s].exports;var a=n[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&";return Object.entries(e).map(function(e){var t=c(e,2);return t[0]+"="+t[1]}).join(t)}function i(){return new Promise(function(e){window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){e()})})})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];if(!t)return e.join(" ").trim();for(var n=[],s=e.length;s--;)t[e[s]]&&n.push(t[e[s]]);return n}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return t?t[e]||e:e}function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise(function(s){function a(t){(t.srcElement||t.target)===e&&(r>=n&&(e.removeEventListener(i,a),s()),r+=1)}if(!e)return void s(!1);var i=null,o=t.charAt(0).toUpperCase()+t.slice(1),r=0;void 0!==e.style["Webkit"+o]&&(i="webkit"+o+"End"),void 0!==e.style.OTransition&&(i="o"+t+"End"),void 0!==e.style[t]&&(i=t+"end"),e.addEventListener(i,a)})}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){var n=[],s=!0,a=!1,i=void 0;try{for(var o,r=e[Symbol.iterator]();!(s=(o=r.next()).done)&&(n.push(o.value),!t||n.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{!s&&r.return&&r.return()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();t.serialize=a,t.DOMNextPaint=i,t.classToModules=o,t.getClassName=r,t.setCssEndEvent=l;t.MediaLoader=function(){function e(){s(this,e),"undefined"!=typeof window&&(this.image=new Image,this.resolve=null,this.video=document.createElement("video"),this.events())}return u(e,[{key:"events",value:function(){var e=this;this.video.addEventListener("loadeddata",function(){return e.resolve&&e.resolve(!0)}),this.video.addEventListener("loadeddata",function(){return e.resolve&&e.resolve(!1)}),this.image.onload=function(){return e.resolve&&e.resolve(!0)},this.image.onerror=function(){return e.resolve&&e.resolve(!1)}}},{key:"load",value:function(e){var t=this;return new Promise(function(n){e||n(!0),t.resolve=n,t.loading=!0,t.ended=!1,e.match(/\.(mp4|webm)/i)&&t.video.setAttribute("src",e),e.match(/\.(png|jp(e)?g|gif|webp)/i)&&(t.image.src=e,(t.image.width>0||t.image.height>0)&&n(!0))})}}]),e}()},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),a=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=a.default},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),c=n(0),u=s(c),d=n(1),f=(s(d),n(2)),h=n(6),m=n(7),p=s(m),v=n(8),b=s(v),x=n(9),y=s(x),g="aws-sld",N=new f.MediaLoader,_=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.clickNext=function(){n.goTo({index:n.index+1,direction:!0})},n.clickPrev=function(){n.goTo({index:n.index-1,direction:!1})},n.touchStart=function(e){if(!n.animating&&null!==n.index){var t=e.nativeEvent;n.touchStartPoint=t.touches[0].clientX}},n.touchMove=function(e){if(!n.animating&&n.touchStartPoint){var t=e.nativeEvent,s=t.touches[0].clientX-n.touchStartPoint,a=n[n.active],i=n[n.loader],o=!(s>0),r=Math.abs(s);if(!1===n.touchEnabled)return void(r>20&&(n.touchEnabled=!0,n.touchStartPoint=t.touches[0].clientX));r>=10&&(!1===n.loading?n.goTo({index:o?n.index+1:n.index-1,direction:o,touch:!0}):!0===n.direction?(s+=10,Math.abs(s)>a.offsetWidth?s=-a.offsetWidth:s>0&&(s=0),a.style.transform="translate3d("+s+"px, 0, 0)",i.style.transform="translate3d(calc(100% + "+s+"px), 0, 0)"):(s-=10,Math.abs(s)>a.offsetWidth?s=a.offsetWidth:s<0&&(s=0),a.style.transform="translate3d("+s+"px, 0, 0)",i.style.transform="translate3d(calc(-100% + "+s+"px), 0, 0)"))}},n.touchEnd=function(){!n.animating&&n.touchStartPoint&&n.loading&&(n.touchStartPoint=null,n.animating=!0,n.touchEnabled=!1,n.animateMobileEnd(function(){n.index=n.nextIndex,n.setState({index:n.index}),n.props.onTransitionEnd&&n.props.onTransitionEnd({currentIndex:n.index,currentSlide:n[n.active],element:n.slider}),n.animating=!1,n.loading=!1,n.unchargeIndex()}))},n.bulletClick=function(e){var t=e.currentTarget,s=parseInt(t.getAttribute("data-index"),10);n.goTo({index:s,direction:!(n.index>s)},function(){(0,f.DOMNextPaint)().then(function(){t.classList.add(n.classNames.bulletsLoading)})})},n.rootElement=e.rootElement||g,n.boxA=null,n.boxB=null,n.loaded=[],n.active="boxA",n.loader="boxB",n.nextIndex=null,n.loading=!1,n.media=null,n.started=!1,n.touchEnabled=!1,n.checkChildren(e),n.setupClassNames(e.cssModule),e.startupScreen&&!e.selected?(n.index=null,n.state={index:null,boxA:{className:n.classNames.startUp,children:e.startupScreen},boxB:null}):(n.index=n.props.selected,n.state={index:n.index,boxA:n.media[n.index]||null,boxB:null}),n}return o(t,e),l(t,[{key:"componentDidMount",value:function(){this.boxA.classList.add(this.classNames.active),this.props.startupScreen&&!this.props.selected&&(this.buttons.element.classList.add(this.classNames.controlsActive),!0===this.props.startup&&this.startup()),this.props.onFirstMount&&this.props.onFirstMount({currentIndex:this.index,currentSlide:this[this.active],element:this.slider})}},{key:"componentWillReceiveProps",value:function(e){if(this.checkChildren(e),this.setupClassNames(e.cssModule),e.name!==this.props.name)return void this.resetSlider(e.selected);if(!0===e.startup&&!1===this.started)return void this.startup();if(e.selected!==this.props.selected){var t=e.selected;this.goTo({index:t,direction:!(this.index>t)})}}},{key:"getRootClassName",value:function(){var e=this.props,t=e.fillParent,n=e.infinite,s=e.className,a=e.organicArrows,i=e.disabled,o=e.cssModule;return(0,h.getRootClassName)({cssModule:o,disabled:i,organicArrows:a,className:s,infinite:n,fillParent:t,rootElement:this.rootElement,current:this.state.index,total:this.media.length})}},{key:"getBar",value:function(){var e=document.createElement("div");return e.className=this.classNames.bar,e}},{key:"setupClassNames",value:function(e){this.classNames=(0,h.setupClassNames)(this.rootElement,e)}},{key:"startup",value:function(){var e=this;this.started=!0,setTimeout(function(){(0,f.DOMNextPaint)().then(function(){e.goTo({index:0,direction:!0,touch:!1})})},125)}},{key:"resetSlider",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.index=t,this.setState({index:t,boxA:this.media[t],boxB:this.media[t]},function(){e.props.onResetSlider&&e.props.onResetSlider({currentIndex:e.index,currentSlide:e[e.active],element:e.slider})})}},{key:"checkChildren",value:function(e){e.children?e.children===this.props.children&&this.media||(this.media=(0,h.transformChildren)(e.children)):e.media!==this.props.media&&(this.media=e.media)}},{key:"loadContent",value:function(e,t){var n=this;return new Promise(function(s){if(n.loaded.includes(t)||!t)return void s(null);var a=n.getBar();e.appendChild(a),(0,f.DOMNextPaint)().then(function(){(0,f.DOMNextPaint)().then(function(){a.classList.add(n.classNames.barActive)}),N.load(t).then(function(){n.loaded.push(t),(0,f.DOMNextPaint)().then(function(){(0,f.setCssEndEvent)(a,"transition").then(function(){s(a)}),a.classList.add(n.classNames.barEnd)})})})})}},{key:"startAnimationMobile",value:function(){var e=this.direction,t=this[this.active],n=this[this.loader],s=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,a=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight;this.props.onTransitionStart&&this.props.onTransitionStart({currentIndex:this.index,currentSlide:this[this.active],nextSlide:this[this.loader],nextIndex:this.nextIndex,element:this.slider});var i=t.querySelector("."+this.classNames.content);i.classList.add(a),i.classList.add(this.classNames.contentExit);var o=n.querySelector("."+this.classNames.content);o.classList.add(s),o.classList.add(this.classNames.contentStatic)}},{key:"animateMobileEnd",value:function(e){var t=this,n=this.direction,s=this[this.active],a=this[this.loader],i=n?this.classNames.moveLeft:this.classNames.moveRight,o=n?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,r=n?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,l=a.querySelector("."+this.classNames.content),c=s.querySelector("."+this.classNames.content);l.classList.remove(this.classNames.contentStatic),a.classList.add(this.classNames.animatedMobile),s.classList.add(this.classNames.animatedMobile),(0,f.DOMNextPaint)().then(function(){a.style.transform="translate3d(0, 0, 0)",s.style.transform="translate3d("+(t.direction?"-":"")+"100%, 0, 0)",(0,f.setCssEndEvent)(s,"transition").then(function(){t.loading&&(a.classList.add(t.classNames.active),s.classList.remove(t.classNames.active),s.classList.remove(i),a.classList.remove(t.classNames.animatedMobile),s.classList.remove(t.classNames.animatedMobile),c.classList.remove(r),c.classList.remove(t.classNames.contentExit),l.classList.remove(o),setTimeout(function(){(0,f.DOMNextPaint)().then(function(){t.buttons.element.classList.remove(t.classNames.controlsActive)})},t.props.controlsReturnDelay),t.activeArrow&&(t.activeArrow.classList.remove(t.activeArrowClass),t.activeArrow=null,t.activeArrowClass=null),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA",e&&e())})})}},{key:"startAnimation",value:function(e,t,n){var s=this,a=this.props.transitionDelay,i=this[this.active],o=this[this.loader],r=e?this.classNames.moveRight:this.classNames.moveLeft,l=e?this.classNames.moveLeft:this.classNames.moveRight,c=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,u=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,d=i.querySelector("."+this.classNames.content),h=o.querySelector("."+this.classNames.content);i.style.removeProperty("transform"),o.style.removeProperty("transform"),this.props.onTransitionStart&&this.props.onTransitionStart({currentIndex:this.index,currentSlide:this[this.active],nextSlide:this[this.loader],nextIndex:this.nextIndex,element:this.slider}),this.loadContent(i,t.url).then(function(e){d.classList.add(u),d.classList.add(s.classNames.contentExit),h.classList.add(c),h.classList.add(s.classNames.contentStatic),setTimeout(function(){(0,f.DOMNextPaint)().then(function(){o.classList.add(r),(0,f.DOMNextPaint)().then(function(){o.classList.add(s.classNames.animated),i.classList.add(s.classNames.animated),h.classList.remove(s.classNames.contentStatic),(0,f.DOMNextPaint)().then(function(){o.classList.remove(r),i.classList.add(s.classNames.exit),i.classList.add(l),(0,f.setCssEndEvent)(i,"transition").then(function(){o.classList.add(s.classNames.active),i.classList.remove(s.classNames.active),i.classList.remove(l),i.classList.remove(s.classNames.exit),o.classList.remove(s.classNames.animated),i.classList.remove(s.classNames.animated),d.classList.remove(u),d.classList.remove(s.classNames.contentExit),h.classList.remove(c),e&&i.removeChild(e),setTimeout(function(){(0,f.DOMNextPaint)().then(function(){s.buttons.element.classList.remove(s.classNames.controlsActive)})},s.props.controlsReturnDelay),s.activeArrow&&(0,f.DOMNextPaint)().then(function(){s.activeArrow.classList.remove(s.activeArrowClass),s.activeArrow=null,s.activeArrowClass=null}),s.active="boxA"===s.active?"boxB":"boxA",s.loader="boxA"===s.active?"boxB":"boxA",n&&n()})})})})},a)})}},{key:"goTo",value:function(e){var t=this,n=e.index,s=e.direction,a=e.touch,i=void 0!==a&&a;!0!==this.loading&&n!==this.index&&(this.loading=!0,this.direction=s,!1===i?this.activateArrows(s,function(){t.chargeIndex(n,function(e){t.renderedLoader=!0,t.startAnimation(s,e,function(){t.index=t.nextIndex,t.setState({index:t.index}),t.props.onTransitionEnd&&t.props.onTransitionEnd({currentIndex:t.index,currentSlide:t[t.active],element:t.slider}),(0,f.DOMNextPaint)().then(function(){t.loading=!1})})})}):this.chargeIndex(n,function(){t.activateArrows(s),t.startAnimationMobile()}))}},{key:"chargeIndex",value:function(e,t){this.nextIndex=e>this.media.length-1?0:e<0?this.media.length-1:e;var n={},s=this.media[this.nextIndex];n[this.loader]=r({loader:!0},s),this.setState(n,function(){t(s)})}},{key:"unchargeIndex",value:function(){var e={};e[this.loader]=null,this.setState(e,function(){})}},{key:"activateArrows",value:function(e,t){var n=e?this.buttons.next:this.buttons.prev,s=e?"right":"left";if(this.activeArrow=n.querySelector("span"),!this.activeArrow)return void t();this.activeArrowClass=(0,f.getClassName)(this.rootElement+"__controls__arrow-"+s+"--active",this.props.cssModule),(0,f.setCssEndEvent)(this.activeArrow,"transition",null===this.index?0:2).then(function(){t&&t()}),this.buttons.element.classList.add(this.classNames.controlsActive),this.activeArrow.classList.add(this.activeArrowClass)}},{key:"renderBox",value:function(e){var t=this;return u.default.createElement("div",{ref:function(n){t["box"+e]=n},className:this.classNames.box,onTouchStart:this.touchStart,onTouchMove:this.touchMove,onTouchEnd:this.touchEnd},this.state["box"+e]&&u.default.createElement(y.default,{media:this.state["box"+e],className:this.classNames.content}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.cssModule,s=t.organicArrows,a=t.bullets,i=this.rootElement;return u.default.createElement("div",{ref:function(t){e.slider=t},className:this.getRootClassName()},u.default.createElement("div",{ref:function(t){e.wrapper=t},className:this.classNames.wrapper},u.default.createElement("div",{ref:function(t){e.container=t},className:this.classNames.container},this.renderBox("A"),this.renderBox("B")),u.default.createElement(b.default,{rootElement:i,cssModule:n,onMount:function(t){e.buttons=t},onNext:this.clickNext,onPrev:this.clickPrev,organicArrows:s})),a&&u.default.createElement(p.default,{cssModule:n,rootElement:i,media:this.media,selected:this.state.index,onClick:function(t){e.goTo(t)}}))}}]),t}(u.default.Component);_.defaultProps={startup:!0,children:null,className:null,controlsReturnDelay:0,cssModule:null,disabled:!1,infinite:!0,media:[],bullets:!0,fillParent:!1,name:"awesome-slider",onFirstMount:null,onResetSlider:null,onTransitionEnd:null,onTransitionStart:null,organicArrows:!0,rootElement:g,selected:0,startupScreen:null,style:{},transitionDelay:0},t.default=_},function(e,t,n){"use strict";function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e){var t=e.rootElement,n=e.cssModule,a=e.disabled,i=e.organicArrows,o=e.className,r=e.total,c=e.current,u=e.infinite,d=e.fillParent,f=[t];if(!0===i&&f.push(t+"--organic-arrows"),!0===a&&f.push(t+"--disabled"),d&&f.push(t+"--fill-parent"),!1===u&&(0===c&&f.push(t+"--first"),c===r-1&&f.push(t+"--last")),n&&n[t]&&(f=(0,l.classToModules)(f,n)),o){var h;(h=f).push.apply(h,s(o.split(" ")))}return f.join(" ").trim().replace(/[\s]+/gi," ")}function i(e){var t=[];return e.forEach(function(e){var n=r({},e.props);e.props["data-src"]&&(n.url=e.props["data-src"]),t.push(n)}),t}function o(e,t){return{boxA:(0,l.getClassName)(e+"__boxA",t),boxB:(0,l.getClassName)(e+"__boxB",t),box:(0,l.getClassName)(e+"__box",t),container:(0,l.getClassName)(e+"__container",t),wrapper:(0,l.getClassName)(e+"__wrapper",t),bar:(0,l.getClassName)(e+"__bar",t),barActive:(0,l.getClassName)(e+"__bar--active",t),barEnd:(0,l.getClassName)(e+"__bar--end",t),content:(0,l.getClassName)(e+"__content",t),contentStatic:(0,l.getClassName)(e+"__content--static",t),contentMoveLeft:(0,l.getClassName)(e+"__content--moveLeft",t),contentMoveRight:(0,l.getClassName)(e+"__content--moveRight",t),controlsActive:(0,l.getClassName)(e+"__controls--active",t),animated:(0,l.getClassName)(e+"--animated",t),animatedMobile:(0,l.getClassName)(e+"--animated-mobile",t),contentExit:(0,l.getClassName)(e+"__content--exit",t),exit:(0,l.getClassName)(e+"--exit",t),active:(0,l.getClassName)(e+"--active",t),moveLeft:(0,l.getClassName)(e+"--moveLeft",t),moveRight:(0,l.getClassName)(e+"--moveRight",t),startUp:(0,l.getClassName)(e+"__startUp",t),bulletsLoading:(0,l.getClassName)(e+"__bullets--loading",t)}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e};t.getRootClassName=a,t.transformChildren=i,t.setupClassNames=o;var l=n(2)},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),l=n(0),c=s(l),u=n(1),d=(s(u),n(2)),f=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.bulletClick=function(e){var t=e.currentTarget;t.classList.add((0,d.getClassName)(n.rootElement+"__bullets--loading",n.props.cssModule));var s=parseInt(t.getAttribute("data-index"),10),a=!(n.props.selected>s);n.props.onClick({index:s,direction:a})},n.rootElement=e.rootElement,n}return o(t,e),r(t,[{key:"renderBullets",value:function(){var e=this,t=this.props,n=t.cssModule,s=t.selected;return this.props.media.map(function(t,a){var i=a===s?(0,d.getClassName)(e.rootElement+"__bullets--active",n):null;return c.default.createElement("button",{key:"bullet-"+a,"data-index":a,onClick:e.bulletClick,className:i},a)})}},{key:"render",value:function(){var e=this.props,t=e.cssModule,n=e.rootElement;return c.default.createElement("nav",{className:(0,d.getClassName)(n+"__bullets",t)},this.renderBullets())}}]),t}(c.default.Component);f.defaultProps={cssModule:null,selected:0},t.default=f},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),l=n(0),c=s(l),u=n(1),d=(s(u),n(2)),f=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.onMount({element:this.controls,next:this.next,prev:this.prev})}},{key:"render",value:function(){var e=this,t=this.props,n=t.rootElement,s=t.cssModule,a=t.organicArrows,i=t.onNext,o=t.onPrev;return c.default.createElement("div",{ref:function(t){e.controls=t},className:(0,d.getClassName)(n+"__controls",s)},c.default.createElement("button",{ref:function(t){e.next=t},className:(0,d.getClassName)(n+"__next",s),onClick:i},a&&c.default.createElement("span",{className:(0,d.getClassName)(n+"__controls__arrow-right",s)})),c.default.createElement("button",{ref:function(t){e.prev=t},className:(0,d.getClassName)(n+"__prev",s),onClick:o},a&&c.default.createElement("span",{className:(0,d.getClassName)(n+"__controls__arrow-left",s)})))}}]),t}(c.default.Component);f.defaultProps={cssModule:null,organicArrows:!0},t.default=f},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),l=n(0),c=s(l),u=n(1),d=(s(u),function(e){function t(){var e,n,s,o;a(this,t);for(var r=arguments.length,l=Array(r),c=0;c<r;c++)l[c]=arguments[c];return n=s=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),s.state={},o=n,i(s,o)}return o(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.media,n=e.className,s=null;return t.url&&(t.url.match(/gif|jpg|png|webp/)&&(s=c.default.createElement("img",{alt:t.alt||t.title||null,src:t.url})),t.url.match(/mp4/)&&(s=c.default.createElement("video",{title:t.title,src:t.url,type:"video/mp4",controls:!0}))),c.default.createElement("div",{className:n,style:t.style||null},s,t.children&&c.default.createElement("div",{className:t.className||null},t.children))}}]),t}(c.default.Component));t.default=d}])});