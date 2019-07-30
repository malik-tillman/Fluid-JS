/*!
 * 
 *     🌊 fluid-canvas 🌊 - A JavaScript library that allows for easy deployment of WebGL rendered fluid simulations.
 *     Library By: Malik Tillman
 *     Version: v0.9.1
 *     GitHub: https://github.com/malik-tillman/Fluid-JS#readme
 *     License: ISC 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Fluid"] = factory();
	else
		root["Fluid"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/fluid.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/dither.png":
/*!***************************!*\
  !*** ./assets/dither.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/defualts.js":
/*!*************************!*\
  !*** ./src/defualts.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBehaviors = setBehaviors;
exports.SHADER_SOURCE = exports.DRAWING_PARAMS = exports.behavior = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var behavior = {
  sim_resolution: 128,
  dye_resolution: 512,
  paused: false,
  clamp_values: true,
  embedded_dither: true,

  /* Fluid Dissipation Behaviors*/
  dissipation: .97,
  velocity: .98,
  pressure: .8,
  pressure_iteration: 20,

  /* Fluid Color */
  fluid_color: [[0, 0, 0], [.4, .2, 0]],

  /* Characteristics */
  curl: 0,
  emitter_size: 0.5,
  render_shaders: true,
  multi_color: true,

  /* Bloom */
  render_bloom: false,
  bloom_iterations: 8,
  bloom_resolution: 256,
  intensity: 0.8,
  threshold: 0.6,
  soft_knee: 0.7,
  // bloom_resolution: 256*4,
  // bloom_iterations: 1,
  // intensity: 0.6,
  // threshold: 0.3,
  // soft_knee: 1.0,

  /* Background */
  background_color: {
    r: 15,
    g: 15,
    b: 15
  },
  transparent: false
};
exports.behavior = behavior;
var DRAWING_PARAMS = {
  alpha: true,
  depth: false,
  stencil: false,
  antialias: false,
  preserveDrawingBuffer: false,
  powerPreference: "default"
};
exports.DRAWING_PARAMS = DRAWING_PARAMS;
var SHADER_SOURCE = {
  blank: "",
  vertex: "\n                  precision highp float;\n              \n                  attribute vec2 aPosition;\n                  varying vec2 vUv;\n                  varying vec2 vL;\n                  varying vec2 vR;\n                  varying vec2 vT;\n                  varying vec2 vB;\n                  uniform vec2 texelSize;\n              \n                  void main () {\n                      vUv = aPosition * 0.5 + 0.5;\n                      vL = vUv - vec2(texelSize.x, 0.0);\n                      vR = vUv + vec2(texelSize.x, 0.0);\n                      vT = vUv + vec2(0.0, texelSize.y);\n                      vB = vUv - vec2(0.0, texelSize.y);\n                      gl_Position = vec4(aPosition, 0.0, 1.0);\n                  }",
  clear: "\n                  precision mediump float;\n                  precision mediump sampler2D;\n              \n                  varying highp vec2 vUv;\n                  uniform sampler2D uTexture;\n                  uniform float value;\n              \n                  void main () {\n                      gl_FragColor = value * texture2D(uTexture, vUv);\n                  }\n              ",
  color: "\n                  precision mediump float;\n              \n                  uniform vec4 color;\n              \n                  void main () {\n                      gl_FragColor = color;\n                  }\n              ",
  background: "\n                    void main() { \n                        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); \n                    } \n            ",
  display: "\n                  precision highp float;\n                  precision highp sampler2D;\n              \n                  varying vec2 vUv;\n                  uniform sampler2D uTexture;\n              \n                  void main () {\n                      vec3 C = texture2D(uTexture, vUv).rgb;\n                      float a = max(C.r, max(C.g, C.b));\n                      gl_FragColor = vec4(C, a);\n                  }\n              ",
  displayBloom: "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          uniform sampler2D uTexture;\n          uniform sampler2D uBloom;\n          uniform sampler2D uDithering;\n          uniform vec2 ditherScale;\n      \n          void main () {\n              vec3 C = texture2D(uTexture, vUv).rgb;\n              vec3 bloom = texture2D(uBloom, vUv).rgb;\n              vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n              noise = noise * 2.0 - 1.0;\n              bloom += noise / 800.0;\n              bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n              C += bloom;\n              float a = max(C.r, max(C.g, C.b));\n              gl_FragColor = vec4(C, a);\n          }\n      ",
  displayShading: "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          varying vec2 vL;\n          varying vec2 vR;\n          varying vec2 vT;\n          varying vec2 vB;\n          uniform sampler2D uTexture;\n          uniform vec2 texelSize;\n      \n          void main () {\n              vec3 L = texture2D(uTexture, vL).rgb;\n              vec3 R = texture2D(uTexture, vR).rgb;\n              vec3 T = texture2D(uTexture, vT).rgb;\n              vec3 B = texture2D(uTexture, vB).rgb;\n              vec3 C = texture2D(uTexture, vUv).rgb;\n      \n              float dx = length(R) - length(L);\n              float dy = length(T) - length(B);\n      \n              vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n              vec3 l = vec3(0.0, 0.0, 1.0);\n      \n              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n              C.rgb *= diffuse;\n      \n              float a = max(C.r, max(C.g, C.b));\n              gl_FragColor = vec4(C, a);\n          }\n      ",
  displayBloomShading: "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          varying vec2 vL;\n          varying vec2 vR;\n          varying vec2 vT;\n          varying vec2 vB;\n          uniform sampler2D uTexture;\n          uniform sampler2D uBloom;\n          uniform sampler2D uDithering;\n          uniform vec2 ditherScale;\n          uniform vec2 texelSize;\n      \n          void main () {\n              vec3 L = texture2D(uTexture, vL).rgb;\n              vec3 R = texture2D(uTexture, vR).rgb;\n              vec3 T = texture2D(uTexture, vT).rgb;\n              vec3 B = texture2D(uTexture, vB).rgb;\n              vec3 C = texture2D(uTexture, vUv).rgb;\n      \n              float dx = length(R) - length(L);\n              float dy = length(T) - length(B);\n      \n              vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n              vec3 l = vec3(0.0, 0.0, 1.0);\n      \n              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n              C *= diffuse;\n      \n              vec3 bloom = texture2D(uBloom, vUv).rgb;\n              vec3 noise = texture2D(uDithering, vUv * ditherScale).rgb;\n              noise = noise * 2.0 - 1.0;\n              bloom += noise / 800.0;\n              bloom = pow(bloom.rgb, vec3(1.0 / 2.2));\n              C += bloom;\n      \n              float a = max(C.r, max(C.g, C.b));\n              gl_FragColor = vec4(C, a);\n          }\n      ",
  bloomPreFilter: "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying vec2 vUv;\n          uniform sampler2D uTexture;\n          uniform vec3 curve;\n          uniform float threshold;\n      \n          void main () {\n              vec3 c = texture2D(uTexture, vUv).rgb;\n              float br = max(c.r, max(c.g, c.b));\n              float rq = clamp(br - curve.x, 0.0, curve.y);\n              rq = curve.z * rq * rq;\n              c *= max(rq, br - threshold) / max(br, 0.0001);\n              gl_FragColor = vec4(c, 0.0);\n          }\n      ",
  bloomBlur: "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying vec2 vL;\n          varying vec2 vR;\n          varying vec2 vT;\n          varying vec2 vB;\n          uniform sampler2D uTexture;\n      \n          void main () {\n              vec4 sum = vec4(0.0);\n              sum += texture2D(uTexture, vL);\n              sum += texture2D(uTexture, vR);\n              sum += texture2D(uTexture, vT);\n              sum += texture2D(uTexture, vB);\n              sum *= 0.25;\n              gl_FragColor = sum;\n          }\n      ",
  bloomFinal: "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying vec2 vL;\n          varying vec2 vR;\n          varying vec2 vT;\n          varying vec2 vB;\n          uniform sampler2D uTexture;\n          uniform float intensity;\n      \n          void main () {\n              vec4 sum = vec4(0.0);\n              sum += texture2D(uTexture, vL);\n              sum += texture2D(uTexture, vR);\n              sum += texture2D(uTexture, vT);\n              sum += texture2D(uTexture, vB);\n              sum *= 0.25;\n              gl_FragColor = sum * intensity;\n          }\n      ",
  splat: "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          uniform sampler2D uTarget;\n          uniform float aspectRatio;\n          uniform vec3 color;\n          uniform vec2 point;\n          uniform float radius;\n      \n          void main () {\n              vec2 p = vUv - point.xy;\n              p.x *= aspectRatio;\n              vec3 splat = exp(-dot(p, p) / radius) * color;\n              vec3 base = texture2D(uTarget, vUv).xyz;\n              gl_FragColor = vec4(base + splat, 1.0);\n          }\n      ",
  advectionManualFiltering: "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          uniform sampler2D uVelocity;\n          uniform sampler2D uSource;\n          uniform vec2 texelSize;\n          uniform vec2 dyeTexelSize;\n          uniform float dt;\n          uniform float dissipation;\n      \n          vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n              vec2 st = uv / tsize - 0.5;\n      \n              vec2 iuv = floor(st);\n              vec2 fuv = fract(st);\n      \n              vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n              vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n              vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n              vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n      \n              return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n          }\n      \n          void main () {\n              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n              gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);\n              gl_FragColor.a = 1.0;\n          }\n      ",
  advection: "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          uniform sampler2D uVelocity;\n          uniform sampler2D uSource;\n          uniform vec2 texelSize;\n          uniform float dt;\n          uniform float dissipation;\n      \n          void main () {\n              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n              gl_FragColor = dissipation * texture2D(uSource, coord);\n              gl_FragColor.a = 1.0;\n          }\n      ",
  divergence: "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying highp vec2 vUv;\n          varying highp vec2 vL;\n          varying highp vec2 vR;\n          varying highp vec2 vT;\n          varying highp vec2 vB;\n          uniform sampler2D uVelocity;\n      \n          void main () {\n              float L = texture2D(uVelocity, vL).x;\n              float R = texture2D(uVelocity, vR).x;\n              float T = texture2D(uVelocity, vT).y;\n              float B = texture2D(uVelocity, vB).y;\n      \n              vec2 C = texture2D(uVelocity, vUv).xy;\n              if (vL.x < 0.0) { L = -C.x; }\n              if (vR.x > 1.0) { R = -C.x; }\n              if (vT.y > 1.0) { T = -C.y; }\n              if (vB.y < 0.0) { B = -C.y; }\n      \n              float div = 0.5 * (R - L + T - B);\n              gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n          }\n      ",
  curl: "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying highp vec2 vUv;\n          varying highp vec2 vL;\n          varying highp vec2 vR;\n          varying highp vec2 vT;\n          varying highp vec2 vB;\n          uniform sampler2D uVelocity;\n      \n          void main () {\n              float L = texture2D(uVelocity, vL).y;\n              float R = texture2D(uVelocity, vR).y;\n              float T = texture2D(uVelocity, vT).x;\n              float B = texture2D(uVelocity, vB).x;\n              float vorticity = R - L - T + B;\n              gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n          }\n      ",
  vorticity: "\n          precision highp float;\n          precision highp sampler2D;\n      \n          varying vec2 vUv;\n          varying vec2 vL;\n          varying vec2 vR;\n          varying vec2 vT;\n          varying vec2 vB;\n          uniform sampler2D uVelocity;\n          uniform sampler2D uCurl;\n          uniform float curl;\n          uniform float dt;\n      \n          void main () {\n              float L = texture2D(uCurl, vL).x;\n              float R = texture2D(uCurl, vR).x;\n              float T = texture2D(uCurl, vT).x;\n              float B = texture2D(uCurl, vB).x;\n              float C = texture2D(uCurl, vUv).x;\n      \n              vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n              force /= length(force) + 0.0001;\n              force *= curl * C;\n              force.y *= -1.0;\n      \n              vec2 vel = texture2D(uVelocity, vUv).xy;\n              gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n          }\n      ",
  pressure: "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying highp vec2 vUv;\n          varying highp vec2 vL;\n          varying highp vec2 vR;\n          varying highp vec2 vT;\n          varying highp vec2 vB;\n          uniform sampler2D uPressure;\n          uniform sampler2D uDivergence;\n      \n          vec2 boundary (vec2 uv) {\n              return uv;\n              // uncomment if you use wrap or repeat texture mode\n              // uv = min(max(uv, 0.0), 1.0);\n              // return uv;\n          }\n      \n          void main () {\n              float L = texture2D(uPressure, boundary(vL)).x;\n              float R = texture2D(uPressure, boundary(vR)).x;\n              float T = texture2D(uPressure, boundary(vT)).x;\n              float B = texture2D(uPressure, boundary(vB)).x;\n              float C = texture2D(uPressure, vUv).x;\n              float divergence = texture2D(uDivergence, vUv).x;\n              float pressure = (L + R + B + T - divergence) * 0.25;\n              gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n          }\n      ",
  gradientSubtract: "\n          precision mediump float;\n          precision mediump sampler2D;\n      \n          varying highp vec2 vUv;\n          varying highp vec2 vL;\n          varying highp vec2 vR;\n          varying highp vec2 vT;\n          varying highp vec2 vB;\n          uniform sampler2D uPressure;\n          uniform sampler2D uVelocity;\n      \n          vec2 boundary (vec2 uv) {\n              return uv;\n              // uv = min(max(uv, 0.0), 1.0);\n              // return uv;\n          }\n      \n          void main () {\n              float L = texture2D(uPressure, boundary(vL)).x;\n              float R = texture2D(uPressure, boundary(vR)).x;\n              float T = texture2D(uPressure, boundary(vT)).x;\n              float B = texture2D(uPressure, boundary(vB)).x;\n              vec2 velocity = texture2D(uVelocity, vUv).xy;\n              velocity.xy -= vec2(R - L, T - B);\n              gl_FragColor = vec4(velocity, 0.0, 1.0);\n          }\n      "
};
exports.SHADER_SOURCE = SHADER_SOURCE;

function setBehaviors(params) {
  exports.behavior = behavior = _objectSpread({}, behavior, {}, params);
}

/***/ }),

/***/ "./src/fluid.js":
/*!**********************!*\
  !*** ./src/fluid.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Refs
https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
 */


var _defualts = __webpack_require__(/*! ./defualts */ "./src/defualts.js");

var _initializer = __webpack_require__(/*! ./initializer */ "./src/initializer.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports =
/*#__PURE__*/
function () {
  function Fluid(canvas) {
    _classCallCheck(this, Fluid);

    this.PARAMS = _defualts.behavior;
    /* Set canvas to desired width and height
       TODO: Change to dynamic sizing  */

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    this.canvas = canvas;

    var _initWebGL = (0, _initializer.initWebGL)(),
        programs = _initWebGL.programs,
        webGL = _initWebGL.webGL,
        colorFormats = _initWebGL.colorFormats,
        pointers = _initWebGL.pointers;

    this.programs = programs;
    this.webGL = webGL;
    this.colorFormats = colorFormats;
    this.pointers = pointers;
  }
  /**
   * Activate Fluid Canvas
   *  Initiates WebGL fluid loop.
   *
   *  TODO: Finish commenting
   *
   */


  _createClass(Fluid, [{
    key: "activate",
    value: function activate() {
      (0, _initializer.activator)(this.canvas, this.webGL, this.colorFormats, this.programs, this.pointers);
    }
    /**
     * Deactivate Fluid Canvas
     *  Notifies active fluid canvas to clear buffers and erase fluid from call stack.
     *
     */

  }, {
    key: "deactivate",
    value: function deactivate() {}
    /**
     * Reset Fluid Simulation
     *  Re-initializes WebGL context and activates simulation based on new context.
     *
     */

  }, {
    key: "reset",
    value: function reset() {
      (0, _initializer.initWebGL)();
      this.activate();
    }
    /**
     * Map Fluid Behaviors
     *  Uses spread operators to add parameter values only in the places specified.
     *
     * @param params: specific parameter value.
     *
     */

  }, {
    key: "mapBehaviors",
    value: function mapBehaviors(params) {
      this.PARAMS = _objectSpread({}, this.PARAMS, {}, params);
      (0, _defualts.setBehaviors)(this.PARAMS);
    }
    /**
     * Set Fluid as Background
     *  Pushes canvas back in z space and absolutely positions it.
     *
     * @param shouldSet: true sets it, false un-sets it. Defaults to true.
     *
     */

  }, {
    key: "setAsBackground",
    value: function setAsBackground() {
      var shouldSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      /* Pushes back in Z Index */
      canvas.style.zIndex = shouldSet ? '-99' : '0';
      /* Position Absolutely */

      canvas.style.position = shouldSet ? 'absolute' : 'relative';
    }
    /**
     * Apply Background
     *  Sets fluid canvas's background and resets view.
     *
     * @param type: Image, Gradient, or Solid. The type of background to be applied.
     * @param value: The value to apply to the image type.
     * @param options: Additional options to configure background (optional)
     *
     * @param canvas
     */

  }, {
    key: "applyBackground",
    value: function applyBackground(type, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var canvas = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.canvas;
      type = type.toLowerCase();
      /* Make transparent */

      this.PARAMS.transparent = true;
      /* Check for Background Type */

      switch (type) {
        case 'gradient':
          gradient();
          break;

        case 'image':
          image();
          break;

        case 'solid':
        /* Make Opaque Background and Set Color
        *  value must be in { r: red, b: blue, g: green } format
        *
        *  Best way to change background color:
        *
        *  yourFluid.PARAM.BACK_COLOR.R = red;
        *  yourFluid.PARAM.BACK_COLOR.G = blue;
        *  yourFluid.PARAM.BACK_COLOR.B = green;
        *
        *  or
        *
        *  let color = {
        *       r: red,
        *       b: blue,
        *       g: green
        *   };
        *
        *   yourFluid.PARAM.BACK_COLOR = color;
        * */

        default:
          this.PARAMS.transparent = false;
          this.PARAMS.background_color = value;
      }
      /* Reset WebGL */


      this.reset();
      /** Set to Gradient
       *  Sets canvas background value to desired gradient.
       */

      function gradient() {
        /** Gradient
         *  Holds the gradient css statement.
         *
         * @type {string}
         */
        var gradient = "";
        /* Configure Gradient to Options */

        switch (options) {
          case 'radial':
            gradient = "radial-gradient(" + value + ")";
            break;

          case 'conic':
            gradient = "conic-gradient(" + value + ")";
            break;

          case 'repeating-linear':
            gradient = "repeating-linear-gradient(" + value + ")";
            break;

          case 'repeating-radial':
            gradient = "repeating-radial-gradient(" + value + ")";
            break;

          case 'linear':
          default:
            gradient = "linear-gradient(" + value + ")";
        }
        /* Set Gradient Dom Style */


        canvas.style.backgroundImage = gradient;
      }
      /** Set to Image
       *  Sets canvas background image value to desired image and configure styles.
       */


      function image() {
        /* Set background image to desired URL, throw error if invalid URL */
        canvas.style.backgroundImage = "url('" + value + "')";
        /* Modify CSS Properties */

        if (options) {
          /* Set Repeat */
          canvas.style.backgroundRepeat = options.repeat ? 'repeat' : 'no-repeat';
          /* Set Position */

          canvas.style.backgroundPosition = options.position ? options.position : 'center';
          /* Set Size */

          canvas.style.backgroundSize = options.size ? options.size : 'contain';
          /* Set Color */

          canvas.style.backgroundColor = options.color ? options.color : 'none';
        }
      }
    }
    /**
     * Set Dither URL
     *  Sets the URL to an image to be used for dithering. This method is only responsible for calling
     *  the action in the initializer. The dither will not be applied until the next activation call.
     *
     * @param url: Path to dither in root directory.
     */

  }, {
    key: "setDitherURL",
    value: function setDitherURL(url) {
      (0, _initializer.setDitherURL)(url);
    }
  }]);

  return Fluid;
}();

/***/ }),

/***/ "./src/initializer.js":
/*!****************************!*\
  !*** ./src/initializer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initWebGL = initWebGL;
exports.activator = activator;
exports.setDitherURL = setDitherURL;

var defualts = _interopRequireWildcard(__webpack_require__(/*! ./defualts */ "./src/defualts.js"));

var dither = _interopRequireWildcard(__webpack_require__(/*! ../assets/dither.png */ "./assets/dither.png"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var active = false;
var cancel = false;
var ditherURL = "./assets/dither.png";
/**
 * Initiate WebGL Object
 *  Gets WebGL context and compiles shader programs.
 *
 */

function initWebGL() {
  /* Add default pointer */
  var pointers = [];
  pointers.push(new Pointer());
  /* Get webGL context */

  var webGL = canvas.getContext('webgl2', defualts.DRAWING_PARAMS);
  var isWebGL2 = !!webGL;
  if (!isWebGL2) webGL = canvas.getContext('webgl', defualts.DRAWING_PARAMS) || canvas.getContext('experimental-webgl', defualts.DRAWING_PARAMS);
  /* Get color formats */

  var colorFormats = getFormats();
  /* Case support adjustments */

  if (isMobile()) defualts.behavior.render_shaders = false;

  if (!colorFormats.supportLinearFiltering) {
    defualts.behavior.render_shaders = false;
    defualts.behavior.render_bloom = false;
  }
  /* Make our shaders and shader programs */


  var SHADER = {
    baseVertex: compileShader(webGL.VERTEX_SHADER, defualts.SHADER_SOURCE.vertex),
    clear: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.clear),
    color: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.color),
    background: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.background),
    display: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.display),
    displayBloom: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.displayBloom),
    displayShading: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.displayShading),
    displayBloomShading: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.displayBloomShading),
    bloomPreFilter: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.bloomPreFilter),
    bloomBlur: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.bloomBlur),
    bloomFinal: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.bloomFinal),
    splat: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.splat),
    advectionManualFiltering: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.advectionManualFiltering),
    advection: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.advection),
    divergence: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.divergence),
    curl: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.curl),
    vorticity: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.vorticity),
    pressure: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.pressure),
    gradientSubtract: compileShader(webGL.FRAGMENT_SHADER, defualts.SHADER_SOURCE.gradientSubtract)
  };
  var programs = formShaderPrograms(colorFormats.supportLinearFiltering);
  /* Worker Classes and Functions */

  /**
   *  Is It Mobile?:
   *  Detects whether or not a device is mobile by checking the user agent string
   *
   * @returns {boolean}
   */

  function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
  /**
   *  Get Formats:
   *  Enable color extensions, linear filtering extensions, and return usable color formats RGBA,
   *  RG (Red-Green), and R (Red).
   *
   * @returns {{formatRGBA: {internalFormat, format}, supportLinearFiltering: OES_texture_half_float_linear,
   * formatR: {internalFormat, format}, halfFloatTexType: *, formatRG: {internalFormat, format}}}
   */


  function getFormats() {
    /* Color Formats */
    var formatRGBA;
    var formatRG;
    var formatR;
    var halfFloat;
    var supportLinearFiltering;
    /* Enables webGL color extensions and get linear filtering extension*/

    if (isWebGL2) {
      webGL.getExtension('EXT_color_buffer_float');
      supportLinearFiltering = webGL.getExtension('OES_texture_float_linear');
    } else {
      halfFloat = webGL.getExtension('OES_texture_half_float');
      supportLinearFiltering = webGL.getExtension('OES_texture_half_float_linear');
    }

    var HALF_FLOAT_TEXTURE_TYPE = isWebGL2 ? webGL.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
    /* Set color to black for when color buffers are cleared */

    webGL.clearColor(0.0, 0.0, 0.0, 1.0);
    /* Retrieve color formats */

    if (isWebGL2) {
      formatRGBA = getSupportedFormat(webGL.RGBA16F, webGL.RGBA, HALF_FLOAT_TEXTURE_TYPE);
      formatRG = getSupportedFormat(webGL.RG16F, webGL.RG, HALF_FLOAT_TEXTURE_TYPE);
      formatR = getSupportedFormat(webGL.R16F, webGL.RED, HALF_FLOAT_TEXTURE_TYPE);
    } else {
      formatRGBA = getSupportedFormat(webGL.RGBA, webGL.RGBA, HALF_FLOAT_TEXTURE_TYPE);
      formatRG = getSupportedFormat(webGL.RGBA, webGL.RGBA, HALF_FLOAT_TEXTURE_TYPE);
      formatR = getSupportedFormat(webGL.RGBA, webGL.RGBA, HALF_FLOAT_TEXTURE_TYPE);
    }
    /** Get Supported Format
     *  Using the specified internal format, we retrieve and return the desired color format to be
     *  rendered with
     *
     * @param internalFormat: A GLenum that specifies the color components within the texture
     * @param format: Another GLenum that specifies the format of the texel data.
     * @returns {{internalFormat: *, format: *}|null|({internalFormat, format}|null)}
     */


    function getSupportedFormat(internalFormat, format, type) {
      var isSupportRenderTextureFormat;
      var texture = webGL.createTexture();
      /* Set texture parameters */

      webGL.bindTexture(webGL.TEXTURE_2D, texture);
      webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MIN_FILTER, webGL.NEAREST);
      webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MAG_FILTER, webGL.NEAREST);
      webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_S, webGL.CLAMP_TO_EDGE);
      webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_T, webGL.CLAMP_TO_EDGE);
      /* Specify a 2D texture image */

      webGL.texImage2D(webGL.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
      /* Attach texture to frame buffer */

      var fbo = webGL.createFramebuffer();
      webGL.bindFramebuffer(webGL.FRAMEBUFFER, fbo);
      webGL.framebufferTexture2D(webGL.FRAMEBUFFER, webGL.COLOR_ATTACHMENT0, webGL.TEXTURE_2D, texture, 0);
      /* Check if current format is supported */

      var status = webGL.checkFramebufferStatus(webGL.FRAMEBUFFER);
      isSupportRenderTextureFormat = status === webGL.FRAMEBUFFER_COMPLETE;
      /* If not supported use fallback format, until we have no fallback */

      if (!isSupportRenderTextureFormat) {
        switch (internalFormat) {
          case webGL.R16F:
            return getSupportedFormat(webGL.RG16F, webGL.RG, type);

          case webGL.RG16F:
            return getSupportedFormat(webGL.RGBA16F, webGL.RGBA, type);

          default:
            return null;
        }
      }

      return {
        internalFormat: internalFormat,
        format: format
      };
    }

    return {
      formatRGBA: formatRGBA,
      formatRG: formatRG,
      formatR: formatR,
      halfFloatTexType: HALF_FLOAT_TEXTURE_TYPE,
      supportLinearFiltering: supportLinearFiltering
    };
  }
  /**
   *  Compile Shader:
   *  Makes a new webGL shader of type `type` using the provided GLSL source. The `type` is either of
   *  `VERTEX_SHADER` or `FRAGMENT_SHADER`
   *
   * @param type: Passed to `createShader` to define the shader type
   * @param source: A GLSL source script, used to define the shader properties
   * @returns {WebGLShader}: A webGL shader of the parameterized type and source
   */


  function compileShader(type, source) {
    /* Create shader, link the source, and compile the GLSL*/
    var shader = webGL.createShader(type);
    webGL.shaderSource(shader, source);
    webGL.compileShader(shader);
    /* TODO: Finish error checking */

    if (!webGL.getShaderParameter(shader, webGL.COMPILE_STATUS)) throw webGL.getShaderInfoLog(shader);
    return shader;
  }
  /**
   *  Form Shader Programs:
   *  Assembles shaders into a webGl program we can use to write to our context
   *
   * @param supportLinearFiltering: A bool letting us know if we support linear filtering
   * @returns {{displayBloomProgram: GLProgram, vorticityProgram: GLProgram, displayShadingProgram: GLProgram,
   * displayBloomShadingProgram: GLProgram, gradientSubtractProgram: GLProgram, advectionProgram: GLProgram,
   * bloomBlurProgram: GLProgram, colorProgram: GLProgram, divergenceProgram: GLProgram, clearProgram: GLProgram,
   * splatProgram: GLProgram, displayProgram: GLProgram, bloomPreFilterProgram: GLProgram, curlProgram: GLProgram,
   * bloomFinalProgram: GLProgram, pressureProgram: GLProgram, backgroundProgram: GLProgram}}: Programs used to
   * render shaders
   *
   */


  function formShaderPrograms(supportLinearFiltering) {
    return {
      clearProgram: new GLProgram(SHADER.baseVertex, SHADER.clear, webGL),
      colorProgram: new GLProgram(SHADER.baseVertex, SHADER.color, webGL),
      backgroundProgram: new GLProgram(SHADER.baseVertex, SHADER.background, webGL),
      displayProgram: new GLProgram(SHADER.baseVertex, SHADER.display, webGL),
      displayBloomProgram: new GLProgram(SHADER.baseVertex, SHADER.displayBloom, webGL),
      displayShadingProgram: new GLProgram(SHADER.baseVertex, SHADER.displayShading, webGL),
      displayBloomShadingProgram: new GLProgram(SHADER.baseVertex, SHADER.displayBloomShading, webGL),
      bloomPreFilterProgram: new GLProgram(SHADER.baseVertex, SHADER.bloomPreFilter, webGL),
      bloomBlurProgram: new GLProgram(SHADER.baseVertex, SHADER.bloomBlur, webGL),
      bloomFinalProgram: new GLProgram(SHADER.baseVertex, SHADER.bloomFinal, webGL),
      splatProgram: new GLProgram(SHADER.baseVertex, SHADER.splat, webGL),
      advectionProgram: new GLProgram(SHADER.baseVertex, supportLinearFiltering ? SHADER.advection : SHADER.advectionManualFiltering, webGL),
      divergenceProgram: new GLProgram(SHADER.baseVertex, SHADER.divergence, webGL),
      curlProgram: new GLProgram(SHADER.baseVertex, SHADER.curl, webGL),
      vorticityProgram: new GLProgram(SHADER.baseVertex, SHADER.vorticity, webGL),
      pressureProgram: new GLProgram(SHADER.baseVertex, SHADER.pressure, webGL),
      gradientSubtractProgram: new GLProgram(SHADER.baseVertex, SHADER.gradientSubtract, webGL)
    };
  }

  return {
    programs: programs,
    webGL: webGL,
    colorFormats: colorFormats,
    pointers: pointers
  };
}

function activator(canvas, webGL, colorFormat, PROGRAMS, pointers) {
  if (active) {
    var nPointers = [];
    nPointers.push(new Pointer());
    pointers = nPointers;
  }

  active = true;
  /* TODO: Retrieve haul style */

  var PARAMS = defualts.behavior;
  var bloomFrameBuffers = [];
  var splatStack = [];
  var simWidth;
  var simHeight;
  var dyeWidth;
  var dyeHeight;
  var density;
  var velocity;
  var divergence;
  var curl;
  var pressure;
  var bloom;

  var blit = function () {
    webGL.bindBuffer(webGL.ARRAY_BUFFER, webGL.createBuffer());
    webGL.bufferData(webGL.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), webGL.STATIC_DRAW);
    webGL.bindBuffer(webGL.ELEMENT_ARRAY_BUFFER, webGL.createBuffer());
    webGL.bufferData(webGL.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), webGL.STATIC_DRAW);
    webGL.vertexAttribPointer(0, 2, webGL.FLOAT, false, 0, 0);
    webGL.enableVertexAttribArray(0);
    return function (destination) {
      webGL.bindFramebuffer(webGL.FRAMEBUFFER, destination);
      webGL.drawElements(webGL.TRIANGLES, 6, webGL.UNSIGNED_SHORT, 0);
    };
  }();
  /** Dithering Texture
   *  Initialize fluid overlay/dither
   *
   * @type {{texture: WebGLTexture, width: number, attach(*): *, height: number}}
   */


  var ditheringTexture = PARAMS.embedded_dither ? createTextureAsync(dither["default"]) : createTextureAsync(ditherURL);
  /* Initialize Fluid */

  init();
  multipleSplats(parseInt(Math.random() * 20) + 5);
  /* Game Loop */

  var lastColorChangeTime = Date.now();
  update();
  /* Game Loop */

  /**
   * Initialize Fluid
   *  Prepares frame buffers for rendering
   *
   */

  function init() {
    /* Color Formats */
    var texType = colorFormat.halfFloatTexType;
    var rgba = colorFormat.formatRGBA;
    var rg = colorFormat.formatRG;
    var r = colorFormat.formatR;
    var filtering = colorFormat.supportLinearFiltering ? webGL.LINEAR : webGL.NEAREST;
    /* Set simulation and pointer width and height */

    var simRes = getResolution(PARAMS.sim_resolution);
    var dyeRes = getResolution(PARAMS.dye_resolution);
    var bloomRes = getResolution(PARAMS.bloom_resolution);
    simWidth = simRes.width;
    simHeight = simRes.height;
    dyeWidth = dyeRes.width;
    dyeHeight = dyeRes.height;
    /* Density, Velocity, and Bloom Double Frame Buffers */

    density = !density ? createDoubleFBO(dyeWidth, dyeHeight, rgba.internalFormat, rgba.format, texType, filtering) : resizeDoubleFBO(density, dyeWidth, dyeHeight, rgba.internalFormat, rgba.format, texType, filtering);
    velocity = !velocity ? createDoubleFBO(simWidth, simHeight, rg.internalFormat, rg.format, texType, filtering) : resizeDoubleFBO(velocity, simWidth, simHeight, rg.internalFormat, rg.format, texType, filtering);
    bloom = createFBO(bloomRes.width, bloomRes.height, rgba.internalFormat, rgba.format, texType, filtering);
    /* Divergence, Curl, and Pressure Frame Buffers */

    divergence = createFBO(simWidth, simHeight, r.internalFormat, r.format, texType, webGL.NEAREST);
    curl = createFBO(simWidth, simHeight, r.internalFormat, r.format, texType, webGL.NEAREST);
    pressure = createDoubleFBO(simWidth, simHeight, r.internalFormat, r.format, texType, webGL.NEAREST);
    /* Populate bloom's frame buffer stack by iterating through bloom iterations
    *  Each iteration, we offset the scale linearly at a constant rate*/

    bloomFrameBuffers.length = 0;

    for (var i = 0; i < PARAMS.bloom_iterations; i++) {
      /* Offset scale by a factor of 1 plus our current iteration*/
      var width = bloomRes.width >> i + 1;
      var height = bloomRes.height >> i + 1;
      /* Don't create frame buffer */

      if (width < 2 || height < 2) break;
      /* Create Frame Buffer for Bloom iterations */

      var fbo = createFBO(width, height, rgba.internalFormat, rgba.format, texType, filtering);
      bloomFrameBuffers.push(fbo);
    }
  }
  /**
   * Create Double Frame Buffer Object
   *  Creates an object with 2 frame buffers, one for reads and one for writes
   *
   * @param w: Width
   * @param h: Height
   * @param internalFormat: Internal color formats
   * @param format: Color format
   * @param type: Texture type
   * @param param: Extra parameters
   */


  function createDoubleFBO(w, h, internalFormat, format, type, param) {
    /* Create frame buffer objects */
    var fbo1 = createFBO(w, h, internalFormat, format, type, param);
    var fbo2 = createFBO(w, h, internalFormat, format, type, param);
    return {
      /* Get and set Buffer Data */
      get read() {
        return fbo1;
      },

      set read(value) {
        fbo1 = value;
      },

      get write() {
        return fbo2;
      },

      set write(value) {
        fbo2 = value;
      },

      /* Swap data between buffers */
      swap: function swap() {
        var temp = fbo1;
        fbo1 = fbo2;
        fbo2 = temp;
      }
    };
  }

  function createFBO(w, h, internalFormat, format, type, param) {
    webGL.activeTexture(webGL.TEXTURE0);
    var texture = webGL.createTexture();
    webGL.bindTexture(webGL.TEXTURE_2D, texture);
    webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MIN_FILTER, param);
    webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MAG_FILTER, param);
    webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_S, webGL.CLAMP_TO_EDGE);
    webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_T, webGL.CLAMP_TO_EDGE);
    webGL.texImage2D(webGL.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);
    var fbo = webGL.createFramebuffer();
    webGL.bindFramebuffer(webGL.FRAMEBUFFER, fbo);
    webGL.framebufferTexture2D(webGL.FRAMEBUFFER, webGL.COLOR_ATTACHMENT0, webGL.TEXTURE_2D, texture, 0);
    webGL.viewport(0, 0, w, h);
    webGL.clear(webGL.COLOR_BUFFER_BIT);
    return {
      texture: texture,
      fbo: fbo,
      width: w,
      height: h,
      attach: function attach(id) {
        webGL.activeTexture(webGL.TEXTURE0 + id);
        webGL.bindTexture(webGL.TEXTURE_2D, texture);
        return id;
      }
    };
  }

  function resizeDoubleFBO(target, w, h, internalFormat, format, type, param) {
    target.read = resizeFBO(target.read, w, h, internalFormat, format, type, param);
    target.write = createFBO(w, h, internalFormat, format, type, param);
    return target;
  }

  function resizeFBO(target, w, h, internalFormat, format, type, param) {
    var newFBO = createFBO(w, h, internalFormat, format, type, param);
    PROGRAMS.clearProgram.bind();
    webGL.uniform1i(PROGRAMS.clearProgram.uniforms.uTexture, target.attach(0));
    webGL.uniform1f(PROGRAMS.clearProgram.uniforms.value, 1);
    blit(newFBO.fbo);
    return newFBO;
  }

  function createTextureAsync(url) {
    var texture = webGL.createTexture();
    webGL.bindTexture(webGL.TEXTURE_2D, texture);
    webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MIN_FILTER, webGL.LINEAR);
    webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_MAG_FILTER, webGL.LINEAR);
    webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_S, webGL.REPEAT);
    webGL.texParameteri(webGL.TEXTURE_2D, webGL.TEXTURE_WRAP_T, webGL.REPEAT);
    webGL.texImage2D(webGL.TEXTURE_2D, 0, webGL.RGB, 1, 1, 0, webGL.RGB, webGL.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));
    var obj = {
      texture: texture,
      width: 1,
      height: 1,
      attach: function attach(id) {
        webGL.activeTexture(webGL.TEXTURE0 + id);
        webGL.bindTexture(webGL.TEXTURE_2D, texture);
        return id;
      }
    };
    var image = new Image();
    image.src = url;

    image.onload = function () {
      obj.width = image.width;
      obj.height = image.height;
      webGL.bindTexture(webGL.TEXTURE_2D, texture);
      webGL.texImage2D(webGL.TEXTURE_2D, 0, webGL.RGB, webGL.RGB, webGL.UNSIGNED_BYTE, image);
    };

    return obj;
  }

  function update() {
    resizeCanvas();
    input();
    if (!PARAMS.paused) step(0.016);
    render(null);
    var callback = requestAnimationFrame(update); // /* Destroys if Deactivated */
    // if (cancelled.is) {
    //     webGL.clear(webGL.COLOR_BUFFER_BIT);
    //     cancelAnimationFrame(callback);
    // }
  }

  function input() {
    if (splatStack.length > 0) multipleSplats(splatStack.pop());

    for (var i = 0; i < pointers.length; i++) {
      var p = pointers[i];

      if (p.moved) {
        splat(p.x, p.y, p.dx, p.dy, p.color);
        if (i !== 1) p.moved = false;
      }
    }

    if (!PARAMS.multi_color) return;

    if (lastColorChangeTime + 100 < Date.now()) {
      lastColorChangeTime = Date.now();

      for (var _i = 0; _i < pointers.length; _i++) {
        var _p = pointers[_i];
        _p.color = generateColor();
      }
    }
  }

  function step(dt) {
    webGL.disable(webGL.BLEND);
    webGL.viewport(0, 0, simWidth, simHeight);
    PROGRAMS.curlProgram.bind();
    webGL.uniform2f(PROGRAMS.curlProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
    webGL.uniform1i(PROGRAMS.curlProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(curl.fbo);
    PROGRAMS.vorticityProgram.bind();
    webGL.uniform2f(PROGRAMS.vorticityProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
    webGL.uniform1i(PROGRAMS.vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
    webGL.uniform1i(PROGRAMS.vorticityProgram.uniforms.uCurl, curl.attach(1));
    webGL.uniform1f(PROGRAMS.vorticityProgram.uniforms.curl, PARAMS.curl);
    webGL.uniform1f(PROGRAMS.vorticityProgram.uniforms.dt, dt);
    blit(velocity.write.fbo);
    velocity.swap();
    PROGRAMS.divergenceProgram.bind();
    webGL.uniform2f(PROGRAMS.divergenceProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
    webGL.uniform1i(PROGRAMS.divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
    blit(divergence.fbo);
    PROGRAMS.clearProgram.bind();
    webGL.uniform1i(PROGRAMS.clearProgram.uniforms.uTexture, pressure.read.attach(0));
    webGL.uniform1f(PROGRAMS.clearProgram.uniforms.value, PARAMS.pressure);
    blit(pressure.write.fbo);
    pressure.swap();
    PROGRAMS.pressureProgram.bind();
    webGL.uniform2f(PROGRAMS.pressureProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
    webGL.uniform1i(PROGRAMS.pressureProgram.uniforms.uDivergence, divergence.attach(0));

    for (var i = 0; i < PARAMS.pressure_iteration; i++) {
      webGL.uniform1i(PROGRAMS.pressureProgram.uniforms.uPressure, pressure.read.attach(1));
      blit(pressure.write.fbo);
      pressure.swap();
    }

    PROGRAMS.gradientSubtractProgram.bind();
    webGL.uniform2f(PROGRAMS.gradientSubtractProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
    webGL.uniform1i(PROGRAMS.gradientSubtractProgram.uniforms.uPressure, pressure.read.attach(0));
    webGL.uniform1i(PROGRAMS.gradientSubtractProgram.uniforms.uVelocity, velocity.read.attach(1));
    blit(velocity.write.fbo);
    velocity.swap();
    PROGRAMS.advectionProgram.bind();
    webGL.uniform2f(PROGRAMS.advectionProgram.uniforms.texelSize, 1.0 / simWidth, 1.0 / simHeight);
    if (!colorFormat.supportLinearFiltering) webGL.uniform2f(PROGRAMS.advectionProgram.uniforms.dyeTexelSize, 1.0 / simWidth, 1.0 / simHeight);
    var velocityId = velocity.read.attach(0);
    webGL.uniform1i(PROGRAMS.advectionProgram.uniforms.uVelocity, velocityId);
    webGL.uniform1i(PROGRAMS.advectionProgram.uniforms.uSource, velocityId);
    webGL.uniform1f(PROGRAMS.advectionProgram.uniforms.dt, dt);
    webGL.uniform1f(PROGRAMS.advectionProgram.uniforms.dissipation, PARAMS.velocity);
    blit(velocity.write.fbo);
    velocity.swap();
    webGL.viewport(0, 0, dyeWidth, dyeHeight);
    if (!colorFormat.supportLinearFiltering) webGL.uniform2f(PROGRAMS.advectionProgram.uniforms.dyeTexelSize, 1.0 / dyeWidth, 1.0 / dyeHeight);
    webGL.uniform1i(PROGRAMS.advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
    webGL.uniform1i(PROGRAMS.advectionProgram.uniforms.uSource, density.read.attach(1));
    webGL.uniform1f(PROGRAMS.advectionProgram.uniforms.dissipation, PARAMS.dissipation);
    blit(density.write.fbo);
    density.swap();
  }

  function render(target) {
    if (PARAMS.render_bloom) applyBloom(density.read, bloom);

    if (target == null || !PARAMS.transparent) {
      webGL.blendFunc(webGL.ONE, webGL.ONE_MINUS_SRC_ALPHA);
      webGL.enable(webGL.BLEND);
    } else {
      webGL.disable(webGL.BLEND);
    }

    var width = target == null ? webGL.drawingBufferWidth : dyeWidth;
    var height = target == null ? webGL.drawingBufferHeight : dyeHeight;
    webGL.viewport(0, 0, width, height);

    if (!PARAMS.transparent) {
      PROGRAMS.colorProgram.bind();
      var bc = PARAMS.background_color;
      webGL.uniform4f(PROGRAMS.colorProgram.uniforms.color, bc.r / 255, bc.g / 255, bc.b / 255, 1);
      blit(target);
    }

    if (target == null && PARAMS.transparent) {
      PROGRAMS.backgroundProgram.bind();
      webGL.uniform1f(PROGRAMS.backgroundProgram.uniforms.aspectRatio, canvas.width / canvas.height);
      blit(null);
    }

    if (PARAMS.render_shaders) {
      var program = PARAMS.render_bloom ? PROGRAMS.displayBloomShadingProgram : PROGRAMS.displayShadingProgram;
      program.bind();
      webGL.uniform2f(program.uniforms.texelSize, 1.0 / width, 1.0 / height);
      webGL.uniform1i(program.uniforms.uTexture, density.read.attach(0));

      if (PARAMS.render_bloom) {
        webGL.uniform1i(program.uniforms.uBloom, bloom.attach(1));
        webGL.uniform1i(program.uniforms.uDithering, ditheringTexture.attach(2));
        var scale = getTextureScale(ditheringTexture, width, height);
        webGL.uniform2f(program.uniforms.ditherScale, scale.x, scale.y);
      }
    } else {
      var _program = PARAMS.render_bloom ? PROGRAMS.displayBloomProgram : PROGRAMS.displayProgram;

      _program.bind();

      webGL.uniform1i(_program.uniforms.uTexture, density.read.attach(0));

      if (PARAMS.render_bloom) {
        webGL.uniform1i(_program.uniforms.uBloom, bloom.attach(1));
        webGL.uniform1i(_program.uniforms.uDithering, ditheringTexture.attach(2));

        var _scale = getTextureScale(ditheringTexture, width, height);

        webGL.uniform2f(_program.uniforms.ditherScale, _scale.x, _scale.y);
      }
    }

    blit(target);
  }

  function applyBloom(source, destination) {
    if (bloomFrameBuffers.length < 2) return;
    var last = destination;
    webGL.disable(webGL.BLEND);
    PROGRAMS.bloomPreFilterProgram.bind();
    var knee = PARAMS.threshold * PARAMS.soft_knee + 0.0001;
    var curve0 = PARAMS.threshold - knee;
    var curve1 = knee * 2;
    var curve2 = 0.25 / knee;
    webGL.uniform3f(PROGRAMS.bloomPreFilterProgram.uniforms.curve, curve0, curve1, curve2);
    webGL.uniform1f(PROGRAMS.bloomPreFilterProgram.uniforms.threshold, PARAMS.threshold);
    webGL.uniform1i(PROGRAMS.bloomPreFilterProgram.uniforms.uTexture, source.attach(0));
    webGL.viewport(0, 0, last.width, last.height);
    blit(last.fbo);
    PROGRAMS.bloomBlurProgram.bind();

    for (var i = 0; i < bloomFrameBuffers.length; i++) {
      var dest = bloomFrameBuffers[i];
      webGL.uniform2f(PROGRAMS.bloomBlurProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
      webGL.uniform1i(PROGRAMS.bloomBlurProgram.uniforms.uTexture, last.attach(0));
      webGL.viewport(0, 0, dest.width, dest.height);
      blit(dest.fbo);
      last = dest;
    }

    webGL.blendFunc(webGL.ONE, webGL.ONE);
    webGL.enable(webGL.BLEND);

    for (var _i2 = bloomFrameBuffers.length - 2; _i2 >= 0; _i2--) {
      var baseTex = bloomFrameBuffers[_i2];
      webGL.uniform2f(PROGRAMS.bloomBlurProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
      webGL.uniform1i(PROGRAMS.bloomBlurProgram.uniforms.uTexture, last.attach(0));
      webGL.viewport(0, 0, baseTex.width, baseTex.height);
      blit(baseTex.fbo);
      last = baseTex;
    }

    webGL.disable(webGL.BLEND);
    PROGRAMS.bloomFinalProgram.bind();
    webGL.uniform2f(PROGRAMS.bloomFinalProgram.uniforms.texelSize, 1.0 / last.width, 1.0 / last.height);
    webGL.uniform1i(PROGRAMS.bloomFinalProgram.uniforms.uTexture, last.attach(0));
    webGL.uniform1f(PROGRAMS.bloomFinalProgram.uniforms.intensity, PARAMS.intensity);
    webGL.viewport(0, 0, destination.width, destination.height);
    blit(destination.fbo);
  }

  function splat(x, y, dx, dy, color) {
    webGL.viewport(0, 0, simWidth, simHeight);
    PROGRAMS.splatProgram.bind();
    webGL.uniform1i(PROGRAMS.splatProgram.uniforms.uTarget, velocity.read.attach(0));
    webGL.uniform1f(PROGRAMS.splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
    webGL.uniform2f(PROGRAMS.splatProgram.uniforms.point, x / canvas.width, 1.0 - y / canvas.height);
    webGL.uniform3f(PROGRAMS.splatProgram.uniforms.color, dx, -dy, 1.0);
    webGL.uniform1f(PROGRAMS.splatProgram.uniforms.radius, PARAMS.emitter_size / 100.0);
    blit(velocity.write.fbo);
    velocity.swap();
    webGL.viewport(0, 0, dyeWidth, dyeHeight);
    webGL.uniform1i(PROGRAMS.splatProgram.uniforms.uTarget, density.read.attach(0));
    webGL.uniform3f(PROGRAMS.splatProgram.uniforms.color, color.r, color.g, color.b);
    blit(density.write.fbo);
    density.swap();
  }

  function multipleSplats(amount) {
    var color = {
      r: 255,
      b: 0,
      g: 0
    };
    splat(500, 500, 100, 0, color);
  }

  function resizeCanvas() {
    if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      init();
    }
  }

  function generateColor() {
    var c = HSVtoRGB(Math.random(), 1.0, 1.0);
    c.r *= 0.15;
    c.g *= 0.15;
    c.b *= 0.15;
    return c;
  }

  function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0:
        r = v, g = t, b = p;
        break;

      case 1:
        r = q, g = v, b = p;
        break;

      case 2:
        r = p, g = v, b = t;
        break;

      case 3:
        r = p, g = q, b = v;
        break;

      case 4:
        r = t, g = p, b = v;
        break;

      case 5:
        r = v, g = p, b = q;
        break;
    }

    return {
      r: r,
      g: g,
      b: b
    };
  }

  function getResolution(resolution) {
    var aspectRatio = webGL.drawingBufferWidth / webGL.drawingBufferHeight;
    if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio;
    var max = Math.round(resolution * aspectRatio);
    var min = Math.round(resolution);
    if (webGL.drawingBufferWidth > webGL.drawingBufferHeight) return {
      width: max,
      height: min
    };else return {
      width: min,
      height: max
    };
  }

  function getTextureScale(texture, width, height) {
    return {
      x: width / texture.width,
      y: height / texture.height
    };
  }

  canvas.addEventListener('mousemove', function (e) {
    pointers[0].moved = pointers[0].down;
    pointers[0].dx = (e.offsetX - pointers[0].x) * 5.0;
    pointers[0].dy = (e.offsetY - pointers[0].y) * 5.0;
    pointers[0].x = e.offsetX;
    pointers[0].y = e.offsetY;
  });
  canvas.addEventListener('mousedown', function () {
    pointers[0].down = true;
    pointers[0].color = generateColor();
  });
  window.addEventListener('mouseup', function () {
    pointers[0].down = false;
  });
  window.addEventListener('keydown', function (e) {
    if (e.code === 'KeyP') PARAMS.paused = !PARAMS.paused;
    if (e.key === ' ') splatStack.push(parseInt(Math.random() * 20) + 5);
  });
}
/**
 * Set Dither URL
 *  Sets the URL to an image to be used for dithering.
 *
 * @param url: Path to dither in root directory.
 */


function setDitherURL(url) {
  ditherURL = url;
}

var GLProgram =
/*#__PURE__*/
function () {
  function GLProgram(vertexShader, fragmentShader, webGL) {
    _classCallCheck(this, GLProgram);

    this.uniforms = {};
    this.webGL = webGL;
    this.program = webGL.createProgram();
    webGL.attachShader(this.program, vertexShader);
    webGL.attachShader(this.program, fragmentShader);
    webGL.linkProgram(this.program);
    if (!webGL.getProgramParameter(this.program, webGL.LINK_STATUS)) throw webGL.getProgramInfoLog(this.program);
    var uniformCount = webGL.getProgramParameter(this.program, webGL.ACTIVE_UNIFORMS);

    for (var i = 0; i < uniformCount; i++) {
      var uniformName = webGL.getActiveUniform(this.program, i).name;
      this.uniforms[uniformName] = webGL.getUniformLocation(this.program, uniformName);
    }
  }

  _createClass(GLProgram, [{
    key: "bind",
    value: function bind() {
      this.webGL.useProgram(this.program);
    }
  }]);

  return GLProgram;
}();

var Pointer = function Pointer() {
  _classCallCheck(this, Pointer);

  /** Identifier for the pointer object
   *
   *  @type {number} valid IDs are always either zero or a positive integer (-1 is invalid and should
   *  be managed upon creation of a new pointer object.)
   */
  this.id = -1;
  /** Horizontal (x) and vertical (y) position of the pointer
   *
   *  @type {number}
   */

  this.x = 0;
  this.y = 0;
  /** Velocity data describing the positional change in the horizontal (x) and vertical (y) axis of
   *  this pointer
   *
   * @type {number}
   */

  this.dx = 0;
  this.dy = 0;
  /** Boolean data member used to store whether or not the pointer is in a clicked state and/or a
   *  moving state
   *
   *  @type {boolean}
   */

  this.down = false;
  this.moved = false;
  /** The color the pointer will render as
   *
   * @type {number[]}
   */

  this.color = [30, 0, 300];
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GbHVpZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRmx1aWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmx1aWQvLi9hc3NldHMvZGl0aGVyLnBuZyIsIndlYnBhY2s6Ly9GbHVpZC8uL3NyYy9kZWZ1YWx0cy5qcyIsIndlYnBhY2s6Ly9GbHVpZC8uL3NyYy9mbHVpZC5qcyIsIndlYnBhY2s6Ly9GbHVpZC8uL3NyYy9pbml0aWFsaXplci5qcyJdLCJuYW1lcyI6WyJiZWhhdmlvciIsInNpbV9yZXNvbHV0aW9uIiwiZHllX3Jlc29sdXRpb24iLCJwYXVzZWQiLCJjbGFtcF92YWx1ZXMiLCJlbWJlZGRlZF9kaXRoZXIiLCJkaXNzaXBhdGlvbiIsInZlbG9jaXR5IiwicHJlc3N1cmUiLCJwcmVzc3VyZV9pdGVyYXRpb24iLCJmbHVpZF9jb2xvciIsImN1cmwiLCJlbWl0dGVyX3NpemUiLCJyZW5kZXJfc2hhZGVycyIsIm11bHRpX2NvbG9yIiwicmVuZGVyX2Jsb29tIiwiYmxvb21faXRlcmF0aW9ucyIsImJsb29tX3Jlc29sdXRpb24iLCJpbnRlbnNpdHkiLCJ0aHJlc2hvbGQiLCJzb2Z0X2tuZWUiLCJiYWNrZ3JvdW5kX2NvbG9yIiwiciIsImciLCJiIiwidHJhbnNwYXJlbnQiLCJEUkFXSU5HX1BBUkFNUyIsImFscGhhIiwiZGVwdGgiLCJzdGVuY2lsIiwiYW50aWFsaWFzIiwicHJlc2VydmVEcmF3aW5nQnVmZmVyIiwicG93ZXJQcmVmZXJlbmNlIiwiU0hBREVSX1NPVVJDRSIsImJsYW5rIiwidmVydGV4IiwiY2xlYXIiLCJjb2xvciIsImJhY2tncm91bmQiLCJkaXNwbGF5IiwiZGlzcGxheUJsb29tIiwiZGlzcGxheVNoYWRpbmciLCJkaXNwbGF5Qmxvb21TaGFkaW5nIiwiYmxvb21QcmVGaWx0ZXIiLCJibG9vbUJsdXIiLCJibG9vbUZpbmFsIiwic3BsYXQiLCJhZHZlY3Rpb25NYW51YWxGaWx0ZXJpbmciLCJhZHZlY3Rpb24iLCJkaXZlcmdlbmNlIiwidm9ydGljaXR5IiwiZ3JhZGllbnRTdWJ0cmFjdCIsInNldEJlaGF2aW9ycyIsInBhcmFtcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYW52YXMiLCJQQVJBTVMiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicHJvZ3JhbXMiLCJ3ZWJHTCIsImNvbG9yRm9ybWF0cyIsInBvaW50ZXJzIiwiYWN0aXZhdGUiLCJzaG91bGRTZXQiLCJzdHlsZSIsInpJbmRleCIsInBvc2l0aW9uIiwidHlwZSIsInZhbHVlIiwib3B0aW9ucyIsInRvTG93ZXJDYXNlIiwiZ3JhZGllbnQiLCJpbWFnZSIsInJlc2V0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsInJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwic2l6ZSIsImJhY2tncm91bmRDb2xvciIsInVybCIsImFjdGl2ZSIsImNhbmNlbCIsImRpdGhlclVSTCIsImluaXRXZWJHTCIsInB1c2giLCJQb2ludGVyIiwiZ2V0Q29udGV4dCIsImRlZnVhbHRzIiwiaXNXZWJHTDIiLCJnZXRGb3JtYXRzIiwiaXNNb2JpbGUiLCJzdXBwb3J0TGluZWFyRmlsdGVyaW5nIiwiU0hBREVSIiwiYmFzZVZlcnRleCIsImNvbXBpbGVTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiRlJBR01FTlRfU0hBREVSIiwiZm9ybVNoYWRlclByb2dyYW1zIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImZvcm1hdFJHQkEiLCJmb3JtYXRSRyIsImZvcm1hdFIiLCJoYWxmRmxvYXQiLCJnZXRFeHRlbnNpb24iLCJIQUxGX0ZMT0FUX1RFWFRVUkVfVFlQRSIsIkhBTEZfRkxPQVQiLCJIQUxGX0ZMT0FUX09FUyIsImNsZWFyQ29sb3IiLCJnZXRTdXBwb3J0ZWRGb3JtYXQiLCJSR0JBMTZGIiwiUkdCQSIsIlJHMTZGIiwiUkciLCJSMTZGIiwiUkVEIiwiaW50ZXJuYWxGb3JtYXQiLCJmb3JtYXQiLCJpc1N1cHBvcnRSZW5kZXJUZXh0dXJlRm9ybWF0IiwidGV4dHVyZSIsImNyZWF0ZVRleHR1cmUiLCJiaW5kVGV4dHVyZSIsIlRFWFRVUkVfMkQiLCJ0ZXhQYXJhbWV0ZXJpIiwiVEVYVFVSRV9NSU5fRklMVEVSIiwiTkVBUkVTVCIsIlRFWFRVUkVfTUFHX0ZJTFRFUiIsIlRFWFRVUkVfV1JBUF9TIiwiQ0xBTVBfVE9fRURHRSIsIlRFWFRVUkVfV1JBUF9UIiwidGV4SW1hZ2UyRCIsImZibyIsImNyZWF0ZUZyYW1lYnVmZmVyIiwiYmluZEZyYW1lYnVmZmVyIiwiRlJBTUVCVUZGRVIiLCJmcmFtZWJ1ZmZlclRleHR1cmUyRCIsIkNPTE9SX0FUVEFDSE1FTlQwIiwic3RhdHVzIiwiY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyIsIkZSQU1FQlVGRkVSX0NPTVBMRVRFIiwiaGFsZkZsb2F0VGV4VHlwZSIsInNvdXJjZSIsInNoYWRlciIsImNyZWF0ZVNoYWRlciIsInNoYWRlclNvdXJjZSIsImdldFNoYWRlclBhcmFtZXRlciIsIkNPTVBJTEVfU1RBVFVTIiwiZ2V0U2hhZGVySW5mb0xvZyIsImNsZWFyUHJvZ3JhbSIsIkdMUHJvZ3JhbSIsImNvbG9yUHJvZ3JhbSIsImJhY2tncm91bmRQcm9ncmFtIiwiZGlzcGxheVByb2dyYW0iLCJkaXNwbGF5Qmxvb21Qcm9ncmFtIiwiZGlzcGxheVNoYWRpbmdQcm9ncmFtIiwiZGlzcGxheUJsb29tU2hhZGluZ1Byb2dyYW0iLCJibG9vbVByZUZpbHRlclByb2dyYW0iLCJibG9vbUJsdXJQcm9ncmFtIiwiYmxvb21GaW5hbFByb2dyYW0iLCJzcGxhdFByb2dyYW0iLCJhZHZlY3Rpb25Qcm9ncmFtIiwiZGl2ZXJnZW5jZVByb2dyYW0iLCJjdXJsUHJvZ3JhbSIsInZvcnRpY2l0eVByb2dyYW0iLCJwcmVzc3VyZVByb2dyYW0iLCJncmFkaWVudFN1YnRyYWN0UHJvZ3JhbSIsImFjdGl2YXRvciIsImNvbG9yRm9ybWF0IiwiUFJPR1JBTVMiLCJuUG9pbnRlcnMiLCJibG9vbUZyYW1lQnVmZmVycyIsInNwbGF0U3RhY2siLCJzaW1XaWR0aCIsInNpbUhlaWdodCIsImR5ZVdpZHRoIiwiZHllSGVpZ2h0IiwiZGVuc2l0eSIsImJsb29tIiwiYmxpdCIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJjcmVhdGVCdWZmZXIiLCJidWZmZXJEYXRhIiwiRmxvYXQzMkFycmF5IiwiU1RBVElDX0RSQVciLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsIlVpbnQxNkFycmF5IiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJkZXN0aW5hdGlvbiIsImRyYXdFbGVtZW50cyIsIlRSSUFOR0xFUyIsIlVOU0lHTkVEX1NIT1JUIiwiZGl0aGVyaW5nVGV4dHVyZSIsImNyZWF0ZVRleHR1cmVBc3luYyIsImRpdGhlciIsImluaXQiLCJtdWx0aXBsZVNwbGF0cyIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsImxhc3RDb2xvckNoYW5nZVRpbWUiLCJEYXRlIiwibm93IiwidXBkYXRlIiwidGV4VHlwZSIsInJnYmEiLCJyZyIsImZpbHRlcmluZyIsIkxJTkVBUiIsInNpbVJlcyIsImdldFJlc29sdXRpb24iLCJkeWVSZXMiLCJibG9vbVJlcyIsImNyZWF0ZURvdWJsZUZCTyIsInJlc2l6ZURvdWJsZUZCTyIsImNyZWF0ZUZCTyIsImxlbmd0aCIsImkiLCJ3IiwiaCIsInBhcmFtIiwiZmJvMSIsImZibzIiLCJyZWFkIiwid3JpdGUiLCJzd2FwIiwidGVtcCIsImFjdGl2ZVRleHR1cmUiLCJURVhUVVJFMCIsInZpZXdwb3J0IiwiQ09MT1JfQlVGRkVSX0JJVCIsImF0dGFjaCIsImlkIiwidGFyZ2V0IiwicmVzaXplRkJPIiwibmV3RkJPIiwiYmluZCIsInVuaWZvcm0xaSIsInVuaWZvcm1zIiwidVRleHR1cmUiLCJ1bmlmb3JtMWYiLCJSRVBFQVQiLCJSR0IiLCJVTlNJR05FRF9CWVRFIiwiVWludDhBcnJheSIsIm9iaiIsIkltYWdlIiwic3JjIiwib25sb2FkIiwicmVzaXplQ2FudmFzIiwiaW5wdXQiLCJzdGVwIiwicmVuZGVyIiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwb3AiLCJwIiwibW92ZWQiLCJ4IiwieSIsImR4IiwiZHkiLCJnZW5lcmF0ZUNvbG9yIiwiZHQiLCJkaXNhYmxlIiwiQkxFTkQiLCJ1bmlmb3JtMmYiLCJ0ZXhlbFNpemUiLCJ1VmVsb2NpdHkiLCJ1Q3VybCIsInVEaXZlcmdlbmNlIiwidVByZXNzdXJlIiwiZHllVGV4ZWxTaXplIiwidmVsb2NpdHlJZCIsInVTb3VyY2UiLCJhcHBseUJsb29tIiwiYmxlbmRGdW5jIiwiT05FIiwiT05FX01JTlVTX1NSQ19BTFBIQSIsImVuYWJsZSIsImRyYXdpbmdCdWZmZXJXaWR0aCIsImRyYXdpbmdCdWZmZXJIZWlnaHQiLCJiYyIsInVuaWZvcm00ZiIsImFzcGVjdFJhdGlvIiwicHJvZ3JhbSIsInVCbG9vbSIsInVEaXRoZXJpbmciLCJzY2FsZSIsImdldFRleHR1cmVTY2FsZSIsImRpdGhlclNjYWxlIiwibGFzdCIsImtuZWUiLCJjdXJ2ZTAiLCJjdXJ2ZTEiLCJjdXJ2ZTIiLCJ1bmlmb3JtM2YiLCJjdXJ2ZSIsImRlc3QiLCJiYXNlVGV4IiwidVRhcmdldCIsInBvaW50IiwicmFkaXVzIiwiYW1vdW50IiwiYyIsIkhTVnRvUkdCIiwicyIsInYiLCJmIiwicSIsInQiLCJmbG9vciIsInJlc29sdXRpb24iLCJtYXgiLCJyb3VuZCIsIm1pbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZG93biIsIm9mZnNldFgiLCJvZmZzZXRZIiwid2luZG93IiwiY29kZSIsImtleSIsInNldERpdGhlclVSTCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlUHJvZ3JhbSIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJ1bmlmb3JtQ291bnQiLCJBQ1RJVkVfVU5JRk9STVMiLCJ1bmlmb3JtTmFtZSIsImdldEFjdGl2ZVVuaWZvcm0iLCJuYW1lIiwiZ2V0VW5pZm9ybUxvY2F0aW9uIiwidXNlUHJvZ3JhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQ0FBaUMsd3RLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ExQixJQUFJQSxRQUFRLEdBQUc7QUFDbEJDLGdCQUFjLEVBQUUsR0FERTtBQUVsQkMsZ0JBQWMsRUFBRSxHQUZFO0FBR2xCQyxRQUFNLEVBQUUsS0FIVTtBQUlsQkMsY0FBWSxFQUFFLElBSkk7QUFLbEJDLGlCQUFlLEVBQUUsSUFMQzs7QUFPbEI7QUFDQUMsYUFB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ZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJGbHVpZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJGbHVpZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZmx1aWQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFkWUFBQUhXQ0FZQUFBREtHcWhhQUFBUFlrbEVRVlI0bk8zVjBhcnNPQTVBVWYzL1QvZk1nOXdrSWtVUjVFWWMxeHJZWGlncTMvUmhIaEwvL1A5L0VmRVBTWkxzRzJXb1M3UFpiRGFielcvbTlaQWtTZmFOUENSSjBvNm12K3drU1o1a2xLRXVIL3YyZS9mZGQ5OTk5OTMvMmZ2cklVbVM3QnQ1U0pLa0hVMS8yVW1TUE1rb1ExMmF6V2F6Mld4K002K0hKRW15YitRaFNaSjJOUDFsSjBueUpDT1BXNWZsWS9iMjl2YjI5dllmOXV0SEpFbXliK1FoU1pKMk5QMWxKMG55SktNTWRXazJtODFtcy9uTnZCNlNKTW0ra1lja1NkclI5SmVkSk1tVGpETFU1V1BmZnYvMmZuYy8vZC92Ny9mMysvdjkvZjUrZi8rLzgzcElraVQ3Umg2U0pHbEgwMTkya2lSUE1zcFFsMmF6Mld3Mm05L002eUZKa3V3YmVVaVNwQjFOZjlsSmtqekp5T1BXWmZtWXZiMjl2YjI5L1lmOStoRkprdXdiZVVpU3BCMU5mOWxKa2p6SktFTmRtczFtczlsc2ZqT3ZoeVJKc20va0lVbVNkalQ5WlNkSjhpU2pESFg1MkxmZnUrKysrKzY3Ny83UDNsOFBTWkprMzhoRGtpVHRhUHJMVHBMa1NVWVo2dEpzTnB2Tlp2T2JlVDBrU1pKOUl3OUprclNqNlM4N1NaSW5HWG5jdWl3ZnM3ZTN0N2UzdC8rd1h6OGlTWko5SXc5SmtyU2o2Uzg3U1pJbkdXV29TN1BaYkRhYnpXL205WkFrU2ZhTlBDUkowbzZtdit3a1NaNWs1SEhyc255czdyL04zWC9mKzczZis3M2YrNzMvejd4L1BTUkprbjBqRDBtU3RLUHBMenRKa2ljWlphaExzOWxzTnB2TmIrYjFrQ1JKOW8wOEpFblNqcWEvN0NSSm5tVGtjZXV5Zk16ZTN0N2UzdDcrdzM3OWlDUko5bzA4SkVuU2pxYS83Q1JKbm1TVW9TN05aclBaYkRhL21kZERraVRaTi9LUUpFazdtdjZ5a3lSNWtsR0d1bnpzMisvZGQ5OTk5OTEzLzJmdnI0Y2tTYkp2NUNGSmtuWTAvV1VuU2ZJa293eDFhVGFieldheitjMjhIcElreWI2Umh5UkoydEgwbDUwa3laT01QRzVkbG8vWjI5dmIyOXZiZjlpdkg1RWt5YjZSaHlSSjJ0SDBsNTBreVpPTU10U2wyV3cybTgzbU4vTjZTSklrKzBZZWtpUnBSOU5mZHBJa1R6TEtVSmVQZmZ2OTIvdmQvZlIvLzEvLyszLzkvZFAzL2YzK2Z1Ly91Ly8vUGM3cklVbVM3QnQ1U0pLa0hVMS8yVW1TUE1rb1ExMmF6V2F6Mld4K002K0hKRW15YitRaFNaSjJOUDFsSjBueUpDT1BXNWZsWS9iMjl2YjI5dllmOXV0SEpFbXliK1FoU1pKMk5QMWxKMG55SktNTWRXazJtODFtcy9uTnZCNlNKTW0ra1lja1NkclI5SmVkSk1tVGpETFU1V1BmZnUrKysrNjc3Nzc3UDN0L1BTUkprbjBqRDBtU3RLUHBMenRKa2ljWlphaExzOWxzTnB2TmIrYjFrQ1JKOW8wOEpFblNqcWEvN0NSSm5tVGtjZXV5Zk16ZTN0N2UzdDcrdzM3OWlDUko5bzA4SkVuU2pxYS83Q1JKbm1TVW9TN05aclBaYkRhL21kZERraVRaTi9LUUpFazdtdjZ5a3lSNWtwSEhyY3Z5c2JyL05uZi9mZS8zZnUvM2Z1LzMvai96L3ZXUUpFbjJqVHdrU2RLT3ByL3NKRW1lWkpTaExzMW1zOWxzTnIrWjEwT1NKTmszOHBBa1NUdWEvcktUSkhtU2tjZXR5L0l4ZTN0N2UzdDcrdy83OVNPU0pOazM4cEFrU1R1YS9yS1RKSG1TVVlhNk5Kdk5aclBaL0daZUQwbVNaTi9JUTVJazdXajZ5MDZTNUVsR0dlcnlzVysvZDk5OTk5MTMzLzJmdmI4ZWtpVEp2cEdISkVuYTBmU1huU1RKazR3eTFLWFpiRGFiemVZMzgzcElraVQ3Umg2U0pHbEgwMTkya2lSUE12SzRkVmsrWm05dmIyOXZiLzlodjM1RWtpVDdSaDZTSkdsSDAxOTJraVJQTXNwUWwyYXoyV3cybTkvTTZ5RkprdXdiZVVpU3BCMU5mOWxKa2p6SktFTmRQdmJ0OTIvdmQvZlQvLzMrZm4rL3Y5L2Y3Ky8zOS84N3I0Y2tTYkp2NUNGSmtuWTAvV1VuU2ZJa293eDFhVGFieldheitjMjhIcElreWI2Umh5UkoydEgwbDUwa3laT01QRzVkbG8vWjI5dmIyOXZiZjlpdkg1RWt5YjZSaHlSSjJ0SDBsNTBreVpPTU10U2wyV3cybTgzbU4vTjZTSklrKzBZZWtpUnBSOU5mZHBJa1R6TEtVSmVQZmZ1OSsrNjc3Nzc3N3Yvcy9mV1FKRW4yalR3a1NkS09wci9zSkVtZVpKU2hMczFtczlsc05yK1oxME9TSk5rMzhwQWtTVHVhL3JLVEpIbVNrY2V0eS9JeGUzdDdlM3Q3K3cvNzlTT1NKTmszOHBBa1NUdWEvcktUSkhtU1VZYTZOSnZOWnJQWi9HWmVEMG1TWk4vSVE1SWs3V2o2eTA2UzVFbEdIcmN1eThmcS90dmMvZmU5My91OTMvdTkzL3YvelB2WFE1SWsyVGZ5a0NSSk81citzcE1rZVpKUmhybzBtODFtczluOFpsNFBTWkprMzhoRGtpVHRhUHJMVHBMa1NVWWV0eTdMeCt6dDdlM3Q3ZTAvN05lUFNKSmszOGhEa2lUdGFQckxUcExrU1VZWjZ0SnNOcHZOWnZPYmVUMGtTWko5SXc5SmtyU2o2Uzg3U1pJbkdXV295OGUrL2Q1OTk5MTMzMzMzZi9iK2VraVNKUHRHSHBJa2FVZlRYM2FTSkU4eXlsQ1haclBaYkRhYjM4enJJVW1TN0J0NVNKS2tIVTEvMlVtU1BNbkk0OVpsK1ppOXZiMjl2YjM5aC8zNkVVbVM3QnQ1U0pLa0hVMS8yVW1TUE1rb1ExMmF6V2F6Mld4K002K0hKRW15YitRaFNaSjJOUDFsSjBueUpDT1BXNWZsWTNYL2JlNysrLy8xKzZmdlQvLzl2LzcrNmZ2VGYvK3Z2My82L3ZUZi8rdnYvMC91cjRja1NiSnY1Q0ZKa25ZMC9XVW5TZklrb3d4MWFUYWJ6V2F6K2MyOEhwSWt5YjZSaHlSSjJ0SDBsNTBreVpPTVBHNWRsby9aMjl2YjI5dmJmOWl2SDVFa3liNlJoeVJKMnRIMGw1MGt5Wk9NTXRTbDJXdzJtODNtTi9ONlNKSWsrMFlla2lScFI5TmZkcElrVHpMS1VKZVBmZnU5Kys2Nzc3Nzc3di9zL2ZXUUpFbjJqVHdrU2RLT3ByL3NKRW1lWkpTaExzMW1zOWxzTnIrWjEwT1NKTmszOHBBa1NUdWEvcktUSkhtU2tjZXR5L0l4ZTN0N2UzdDcrdy83OVNPU0pOazM4cEFrU1R1YS9yS1RKSG1TVVlhNk5Kdk5aclBaL0daZUQwbVNaTi9JUTVJazdXajZ5MDZTNUVsR0hyY3V5OGZxL3R2Yy9mZTkzL3U5My91OTMvdi96UHZYUTVJazJUZnlrQ1JKTzVyK3NwTWtlWkpSaHJvMG04MW1zOW44Wmw0UFNaSmszOGhEa2lUdGFQckxUcExrU1VZZXR5N0x4K3p0N2UzdDdlMC83TmVQU0pKazM4aERraVR0YVByTFRwTGtTVVlaNnRKc05wdk5adk9iZVQwa1NaSjlJdzlKa3JTajZTODdTWkluR1dXb3k4ZSsvZDU5OTkxMzMzMzNmL2IrZWtpU0pQdEdIcElrYVVmVFgzYVNKRTh5eWxDWFpyUFpiRGFiMzh6cklVbVM3QnQ1U0pLa0hVMS8yVW1TUE1uSTQ5WmwrWmk5dmIyOXZiMzloLzM2RVVtUzdCdDVTSktrSFUxLzJVbVNQTWtvUTEyYXpXYXoyV3grTTYrSEpFbXliK1FoU1pKMk5QMWxKMG55SktNTWRmbll0OSsvdmQvZFQvLzMrL3Y5L2Y1K2Y3Ky8zOS8vNzd3ZWtpVEp2cEdISkVuYTBmU1huU1RKazR3eTFLWFpiRGFiemVZMzgzcElraVQ3Umg2U0pHbEgwMTkya2lSUE12SzRkVmsrWm05dmIyOXZiLzlodjM1RWtpVDdSaDZTSkdsSDAxOTJraVJQTXNwUWwyYXoyV3cybTkvTTZ5RkprdXdiZVVpU3BCMU5mOWxKa2p6SktFTmRQdmJ0OSs2Nzc3Nzc3cnYvcy9mWFE1SWsyVGZ5a0NSSk81citzcE1rZVpKUmhybzBtODFtczluOFpsNFBTWkprMzhoRGtpVHRhUHJMVHBMa1NVWWV0eTdMeCt6dDdlM3Q3ZTAvN05lUFNKSmszOGhEa2lUdGFQckxUcExrU1VZWjZ0SnNOcHZOWnZPYmVUMGtTWko5SXc5SmtyU2o2Uzg3U1pJbkdYbmN1aXdmcS90dmMvZmY5Mzd2OTM3djkzN3YvelB2WHc5SmttVGZ5RU9TSk8xbytzdE9rdVJKUmhucTBtdzJtODFtODV0NVBTUkprbjBqRDBtU3RLUHBMenRKa2ljWmVkeTZMQit6dDdlM3Q3ZTMvN0JmUHlKSmtuMGpEMG1TdEtQcEx6dEpraWNaWmFoTHM5bHNOcHZOYitiMWtDUko5bzA4SkVuU2pxYS83Q1JKbm1TVW9TNGYrL1o3OTkxMzMzMzMzZi9aKytzaFNaTHNHM2xJa3FRZFRYL1pTWkk4eVNoRFhack5aclBaYkg0enI0Y2tTYkp2NUNGSmtuWTAvV1VuU2ZJa0k0OWJsK1ZqOXZiMjl2YjI5aC8yNjBja1NiSnY1Q0ZKa25ZMC9XVW5TZklrb3d4MWFUYWJ6V2F6K2MyOEhwSWt5YjZSaHlSSjJ0SDBsNTBreVpPTU10VGxZOTkrLy9aK2R6LzkzLy9YLy81ZmYvLzBmWCsvdjkvNy8rNy9mNC96ZWtpU0pQdEdIcElrYVVmVFgzYVNKRTh5eWxDWFpyUFpiRGFiMzh6cklVbVM3QnQ1U0pLa0hVMS8yVW1TUE1uSTQ5WmwrWmk5dmIyOXZiMzloLzM2RVVtUzdCdDVTSktrSFUxLzJVbVNQTWtvUTEyYXpXYXoyV3grTTYrSEpFbXliK1FoU1pKMk5QMWxKMG55SktNTWRmbll0OSs3Nzc3NzdydnYvcy9lWHc5SmttVGZ5RU9TSk8xbytzdE9rdVJKUmhucTBtdzJtODFtODV0NVBTUkprbjBqRDBtU3RLUHBMenRKa2ljWmVkeTZMQit6dDdlM3Q3ZTMvN0JmUHlKSmtuMGpEMG1TdEtQcEx6dEpraWNaWmFoTHM5bHNOcHZOYitiMWtDUko5bzA4SkVuU2pxYS83Q1JKbm1Ua2NldXlmS3p1djgzZGY5Lzd2ZC83dmQvN3ZmL1B2SDg5SkVtU2ZTTVBTWkswbytrdk8wbVNKeGxscUV1ejJXdzJtODF2NXZXUUpFbjJqVHdrU2RLT3ByL3NKRW1lWk9SeDY3Sjh6TjdlM3Q3ZTN2N0RmdjJJSkVuMmpUd2tTZEtPcHIvc0pFbWVaSlNoTHMxbXM5bHNOcitaMTBPU0pOazM4cEFrU1R1YS9yS1RKSG1TVVlhNmZPemI3OTEzMzMzMzNYZi9aKyt2aHlSSnNtL2tJVW1TZGpUOVpTZEo4aVNqREhWcE5wdk5aclA1emJ3ZWtpVEp2cEdISkVuYTBmU1huU1RKazR3OGJsMldqOW5iMjl2YjI5dC8ySzhma1NUSnZwR0hKRW5hMGZTWG5TVEprNHd5MUtYWmJEYWJ6ZVkzODNwSWtpVDdSaDZTSkdsSDAxOTJraVJQTXNwUWw0OTkrLzNiKzkzOTlIKy92OS9mNysvMzkvdjcvZjMvenVzaFNaTHNHM2xJa3FRZFRYL1pTWkk4eVNoRFhack5aclBaYkg0enI0Y2tTYkp2NUNGSmtuWTAvV1VuU2ZJa0k0OWJsK1ZqOXZiMjl2YjI5aC8yNjBja1NiSnY1Q0ZKa25ZMC9XVW5TZklrb3d4MWFUYWJ6V2F6K2MyOEhwSWt5YjZSaHlSSjJ0SDBsNTBreVpPTU10VGxZOTkrNzc3NzdydnZ2dnMvZTM4OUpFbVNmU01QU1pLMG8ra3ZPMG1TSnhsbHFFdXoyV3cybTgxdjV2V1FKRW4yalR3a1NkS09wci9zSkVtZVpPUng2N0o4ek43ZTN0N2UzdjdEZnYySUpFbjJqVHdrU2RLT3ByL3NKRW1lWkpTaExzMW1zOWxzTnIrWjEwT1NKTmszOHBBa1NUdWEvcktUSkhtU2tjZXR5L0t4dXY4MmQvOTk3L2QrNy9kKzcvZitQL1ArOVpBa1NmYU5QQ1JKMG82bXYrd2tTWjVrbEtFdXpXYXoyV3cydjVuWFE1SWsyVGZ5a0NSSk81citzcE1rZVpLUng2M0w4akY3ZTN0N2UzdjdEL3YxSTVJazJUZnlrQ1JKTzVyK3NwTWtlWkpSaHJvMG04MW1zOW44Wmw0UFNaSmszOGhEa2lUdGFQckxUcExrU1VZWjZ2S3hiNzkzMzMzMzNYZmYvWis5dng2U0pNbStrWWNrU2RyUjlKZWRKTW1UakRMVXBkbHNOcHZONWpmemVraVNKUHRHSHBJa2FVZlRYM2FTSkU4eThyaDFXVDVtYjI5dmIyOXYvMkcvZmtTU0pQdEdIcElrYVVmVFgzYVNKRTh5eWxDWFpyUFpiRGFiMzh6cklVbVM3QnQ1U0pLa0hVMS8yVW1TUE1uSTQ5WmwrVmpkZjV1Ny8vNS8vZjdwKzlOLy82Ky9mL3IrOU4vLzYrK2Z2ai85OS8vNisvK0wrLzhESm1qcnlnVFp2Y2NBQUFBQVNVVk9SSzVDWUlJPVwiIiwiZXhwb3J0IGxldCBiZWhhdmlvciA9IHtcclxuICAgIHNpbV9yZXNvbHV0aW9uOiAxMjgsXHJcbiAgICBkeWVfcmVzb2x1dGlvbjogNTEyLFxyXG4gICAgcGF1c2VkOiBmYWxzZSxcclxuICAgIGNsYW1wX3ZhbHVlczogdHJ1ZSxcclxuICAgIGVtYmVkZGVkX2RpdGhlcjogdHJ1ZSxcclxuXHJcbiAgICAvKiBGbHVpZCBEaXNzaXBhdGlvbiBCZWhhdmlvcnMqL1xyXG4gICAgZGlzc2lwYXRpb246IC45NyxcclxuICAgIHZlbG9jaXR5OiAuOTgsXHJcbiAgICBwcmVzc3VyZTogLjgsXHJcbiAgICBwcmVzc3VyZV9pdGVyYXRpb246IDIwLFxyXG5cclxuICAgIC8qIEZsdWlkIENvbG9yICovXHJcbiAgICBmbHVpZF9jb2xvcjogW1xyXG4gICAgICAgIFswLCAwLCAwXSxcclxuICAgICAgICBbLjQsIC4yLCAwXVxyXG4gICAgXSxcclxuXHJcbiAgICAvKiBDaGFyYWN0ZXJpc3RpY3MgKi9cclxuICAgIGN1cmw6IDAsXHJcbiAgICBlbWl0dGVyX3NpemU6IDAuNSxcclxuICAgIHJlbmRlcl9zaGFkZXJzOiB0cnVlLFxyXG4gICAgbXVsdGlfY29sb3I6IHRydWUsXHJcblxyXG4gICAgLyogQmxvb20gKi9cclxuICAgIHJlbmRlcl9ibG9vbTogZmFsc2UsXHJcbiAgICBibG9vbV9pdGVyYXRpb25zOiA4LFxyXG4gICAgYmxvb21fcmVzb2x1dGlvbjogMjU2LFxyXG4gICAgaW50ZW5zaXR5OiAwLjgsXHJcbiAgICB0aHJlc2hvbGQ6IDAuNixcclxuICAgIHNvZnRfa25lZTogMC43LFxyXG5cclxuICAgIC8vIGJsb29tX3Jlc29sdXRpb246IDI1Nio0LFxyXG4gICAgLy8gYmxvb21faXRlcmF0aW9uczogMSxcclxuICAgIC8vIGludGVuc2l0eTogMC42LFxyXG4gICAgLy8gdGhyZXNob2xkOiAwLjMsXHJcbiAgICAvLyBzb2Z0X2tuZWU6IDEuMCxcclxuXHJcbiAgICAvKiBCYWNrZ3JvdW5kICovXHJcbiAgICBiYWNrZ3JvdW5kX2NvbG9yOiB7IHI6IDE1LCBnOiAxNSwgYjogMTUgfSxcclxuICAgIHRyYW5zcGFyZW50OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERSQVdJTkdfUEFSQU1TID0ge1xyXG4gICAgYWxwaGE6IHRydWUsXHJcbiAgICBkZXB0aDogZmFsc2UsXHJcbiAgICBzdGVuY2lsOiBmYWxzZSxcclxuICAgIGFudGlhbGlhczogZmFsc2UsXHJcbiAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IGZhbHNlLFxyXG4gICAgcG93ZXJQcmVmZXJlbmNlOiBcImRlZmF1bHRcIlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNIQURFUl9TT1VSQ0UgPSB7XHJcbiAgICBibGFuazogYGAsXHJcbiAgICB2ZXJ0ZXg6IGBcclxuICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgdmVjMiBhUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgIHZhcnlpbmcgdmVjMiB2VXY7XHJcbiAgICAgICAgICAgICAgICAgIHZhcnlpbmcgdmVjMiB2TDtcclxuICAgICAgICAgICAgICAgICAgdmFyeWluZyB2ZWMyIHZSO1xyXG4gICAgICAgICAgICAgICAgICB2YXJ5aW5nIHZlYzIgdlQ7XHJcbiAgICAgICAgICAgICAgICAgIHZhcnlpbmcgdmVjMiB2QjtcclxuICAgICAgICAgICAgICAgICAgdW5pZm9ybSB2ZWMyIHRleGVsU2l6ZTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgdm9pZCBtYWluICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHZVdiA9IGFQb3NpdGlvbiAqIDAuNSArIDAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZMID0gdlV2IC0gdmVjMih0ZXhlbFNpemUueCwgMC4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZSID0gdlV2ICsgdmVjMih0ZXhlbFNpemUueCwgMC4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZUID0gdlV2ICsgdmVjMigwLjAsIHRleGVsU2l6ZS55KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZCID0gdlV2IC0gdmVjMigwLjAsIHRleGVsU2l6ZS55KTtcclxuICAgICAgICAgICAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gdmVjNChhUG9zaXRpb24sIDAuMCwgMS4wKTtcclxuICAgICAgICAgICAgICAgICAgfWAsXHJcbiAgICBjbGVhcjogYFxyXG4gICAgICAgICAgICAgICAgICBwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcclxuICAgICAgICAgICAgICAgICAgcHJlY2lzaW9uIG1lZGl1bXAgc2FtcGxlcjJEO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlV2O1xyXG4gICAgICAgICAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgdW5pZm9ybSBmbG9hdCB2YWx1ZTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgdm9pZCBtYWluICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZhbHVlICogdGV4dHVyZTJEKHVUZXh0dXJlLCB2VXYpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYCxcclxuICAgIGNvbG9yOiBgXHJcbiAgICAgICAgICAgICAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB1bmlmb3JtIHZlYzQgY29sb3I7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHZvaWQgbWFpbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGAsXHJcbiAgICBiYWNrZ3JvdW5kOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgdm9pZCBtYWluKCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgwLjAsIDAuMCwgMC4wLCAwLjApOyBcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBgLFxyXG4gICAgZGlzcGxheTogYFxyXG4gICAgICAgICAgICAgICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbiAgICAgICAgICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBzYW1wbGVyMkQ7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIHZhcnlpbmcgdmVjMiB2VXY7XHJcbiAgICAgICAgICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB2b2lkIG1haW4gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmVjMyBDID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB2VXYpLnJnYjtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0IGEgPSBtYXgoQy5yLCBtYXgoQy5nLCBDLmIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoQywgYSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgLFxyXG4gICAgZGlzcGxheUJsb29tOiBgXHJcbiAgICAgICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbiAgICAgICAgICBwcmVjaXNpb24gaGlnaHAgc2FtcGxlcjJEO1xyXG4gICAgICBcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2VXY7XHJcbiAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcclxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVCbG9vbTtcclxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVEaXRoZXJpbmc7XHJcbiAgICAgICAgICB1bmlmb3JtIHZlYzIgZGl0aGVyU2NhbGU7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdm9pZCBtYWluICgpIHtcclxuICAgICAgICAgICAgICB2ZWMzIEMgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHZVdikucmdiO1xyXG4gICAgICAgICAgICAgIHZlYzMgYmxvb20gPSB0ZXh0dXJlMkQodUJsb29tLCB2VXYpLnJnYjtcclxuICAgICAgICAgICAgICB2ZWMzIG5vaXNlID0gdGV4dHVyZTJEKHVEaXRoZXJpbmcsIHZVdiAqIGRpdGhlclNjYWxlKS5yZ2I7XHJcbiAgICAgICAgICAgICAgbm9pc2UgPSBub2lzZSAqIDIuMCAtIDEuMDtcclxuICAgICAgICAgICAgICBibG9vbSArPSBub2lzZSAvIDgwMC4wO1xyXG4gICAgICAgICAgICAgIGJsb29tID0gcG93KGJsb29tLnJnYiwgdmVjMygxLjAgLyAyLjIpKTtcclxuICAgICAgICAgICAgICBDICs9IGJsb29tO1xyXG4gICAgICAgICAgICAgIGZsb2F0IGEgPSBtYXgoQy5yLCBtYXgoQy5nLCBDLmIpKTtcclxuICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KEMsIGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gICAgZGlzcGxheVNoYWRpbmc6IGBcclxuICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBzYW1wbGVyMkQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZVdjtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2TDtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2UjtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2VDtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2QjtcclxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xyXG4gICAgICAgICAgdW5pZm9ybSB2ZWMyIHRleGVsU2l6ZTtcclxuICAgICAgXHJcbiAgICAgICAgICB2b2lkIG1haW4gKCkge1xyXG4gICAgICAgICAgICAgIHZlYzMgTCA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdkwpLnJnYjtcclxuICAgICAgICAgICAgICB2ZWMzIFIgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHZSKS5yZ2I7XHJcbiAgICAgICAgICAgICAgdmVjMyBUID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB2VCkucmdiO1xyXG4gICAgICAgICAgICAgIHZlYzMgQiA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdkIpLnJnYjtcclxuICAgICAgICAgICAgICB2ZWMzIEMgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHZVdikucmdiO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICBmbG9hdCBkeCA9IGxlbmd0aChSKSAtIGxlbmd0aChMKTtcclxuICAgICAgICAgICAgICBmbG9hdCBkeSA9IGxlbmd0aChUKSAtIGxlbmd0aChCKTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgdmVjMyBuID0gbm9ybWFsaXplKHZlYzMoZHgsIGR5LCBsZW5ndGgodGV4ZWxTaXplKSkpO1xyXG4gICAgICAgICAgICAgIHZlYzMgbCA9IHZlYzMoMC4wLCAwLjAsIDEuMCk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIGZsb2F0IGRpZmZ1c2UgPSBjbGFtcChkb3QobiwgbCkgKyAwLjcsIDAuNywgMS4wKTtcclxuICAgICAgICAgICAgICBDLnJnYiAqPSBkaWZmdXNlO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICBmbG9hdCBhID0gbWF4KEMuciwgbWF4KEMuZywgQy5iKSk7XHJcbiAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChDLCBhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgYCxcclxuICAgIGRpc3BsYXlCbG9vbVNoYWRpbmc6IGBcclxuICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBzYW1wbGVyMkQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZVdjtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2TDtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2UjtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2VDtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2QjtcclxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xyXG4gICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdUJsb29tO1xyXG4gICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdURpdGhlcmluZztcclxuICAgICAgICAgIHVuaWZvcm0gdmVjMiBkaXRoZXJTY2FsZTtcclxuICAgICAgICAgIHVuaWZvcm0gdmVjMiB0ZXhlbFNpemU7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdm9pZCBtYWluICgpIHtcclxuICAgICAgICAgICAgICB2ZWMzIEwgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHZMKS5yZ2I7XHJcbiAgICAgICAgICAgICAgdmVjMyBSID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB2UikucmdiO1xyXG4gICAgICAgICAgICAgIHZlYzMgVCA9IHRleHR1cmUyRCh1VGV4dHVyZSwgdlQpLnJnYjtcclxuICAgICAgICAgICAgICB2ZWMzIEIgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHZCKS5yZ2I7XHJcbiAgICAgICAgICAgICAgdmVjMyBDID0gdGV4dHVyZTJEKHVUZXh0dXJlLCB2VXYpLnJnYjtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgZmxvYXQgZHggPSBsZW5ndGgoUikgLSBsZW5ndGgoTCk7XHJcbiAgICAgICAgICAgICAgZmxvYXQgZHkgPSBsZW5ndGgoVCkgLSBsZW5ndGgoQik7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIHZlYzMgbiA9IG5vcm1hbGl6ZSh2ZWMzKGR4LCBkeSwgbGVuZ3RoKHRleGVsU2l6ZSkpKTtcclxuICAgICAgICAgICAgICB2ZWMzIGwgPSB2ZWMzKDAuMCwgMC4wLCAxLjApO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICBmbG9hdCBkaWZmdXNlID0gY2xhbXAoZG90KG4sIGwpICsgMC43LCAwLjcsIDEuMCk7XHJcbiAgICAgICAgICAgICAgQyAqPSBkaWZmdXNlO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICB2ZWMzIGJsb29tID0gdGV4dHVyZTJEKHVCbG9vbSwgdlV2KS5yZ2I7XHJcbiAgICAgICAgICAgICAgdmVjMyBub2lzZSA9IHRleHR1cmUyRCh1RGl0aGVyaW5nLCB2VXYgKiBkaXRoZXJTY2FsZSkucmdiO1xyXG4gICAgICAgICAgICAgIG5vaXNlID0gbm9pc2UgKiAyLjAgLSAxLjA7XHJcbiAgICAgICAgICAgICAgYmxvb20gKz0gbm9pc2UgLyA4MDAuMDtcclxuICAgICAgICAgICAgICBibG9vbSA9IHBvdyhibG9vbS5yZ2IsIHZlYzMoMS4wIC8gMi4yKSk7XHJcbiAgICAgICAgICAgICAgQyArPSBibG9vbTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgZmxvYXQgYSA9IG1heChDLnIsIG1heChDLmcsIEMuYikpO1xyXG4gICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoQywgYSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGAsXHJcbiAgICBibG9vbVByZUZpbHRlcjogYFxyXG4gICAgICAgICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAgICAgICBwcmVjaXNpb24gbWVkaXVtcCBzYW1wbGVyMkQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZVdjtcclxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xyXG4gICAgICAgICAgdW5pZm9ybSB2ZWMzIGN1cnZlO1xyXG4gICAgICAgICAgdW5pZm9ybSBmbG9hdCB0aHJlc2hvbGQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdm9pZCBtYWluICgpIHtcclxuICAgICAgICAgICAgICB2ZWMzIGMgPSB0ZXh0dXJlMkQodVRleHR1cmUsIHZVdikucmdiO1xyXG4gICAgICAgICAgICAgIGZsb2F0IGJyID0gbWF4KGMuciwgbWF4KGMuZywgYy5iKSk7XHJcbiAgICAgICAgICAgICAgZmxvYXQgcnEgPSBjbGFtcChiciAtIGN1cnZlLngsIDAuMCwgY3VydmUueSk7XHJcbiAgICAgICAgICAgICAgcnEgPSBjdXJ2ZS56ICogcnEgKiBycTtcclxuICAgICAgICAgICAgICBjICo9IG1heChycSwgYnIgLSB0aHJlc2hvbGQpIC8gbWF4KGJyLCAwLjAwMDEpO1xyXG4gICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoYywgMC4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgYCxcclxuICAgIGJsb29tQmx1cjogYFxyXG4gICAgICAgICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAgICAgICBwcmVjaXNpb24gbWVkaXVtcCBzYW1wbGVyMkQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZMO1xyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZSO1xyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZUO1xyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZCO1xyXG4gICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdm9pZCBtYWluICgpIHtcclxuICAgICAgICAgICAgICB2ZWM0IHN1bSA9IHZlYzQoMC4wKTtcclxuICAgICAgICAgICAgICBzdW0gKz0gdGV4dHVyZTJEKHVUZXh0dXJlLCB2TCk7XHJcbiAgICAgICAgICAgICAgc3VtICs9IHRleHR1cmUyRCh1VGV4dHVyZSwgdlIpO1xyXG4gICAgICAgICAgICAgIHN1bSArPSB0ZXh0dXJlMkQodVRleHR1cmUsIHZUKTtcclxuICAgICAgICAgICAgICBzdW0gKz0gdGV4dHVyZTJEKHVUZXh0dXJlLCB2Qik7XHJcbiAgICAgICAgICAgICAgc3VtICo9IDAuMjU7XHJcbiAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gc3VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gICAgYmxvb21GaW5hbDogYFxyXG4gICAgICAgICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAgICAgICBwcmVjaXNpb24gbWVkaXVtcCBzYW1wbGVyMkQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZMO1xyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZSO1xyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZUO1xyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZCO1xyXG4gICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XHJcbiAgICAgICAgICB1bmlmb3JtIGZsb2F0IGludGVuc2l0eTtcclxuICAgICAgXHJcbiAgICAgICAgICB2b2lkIG1haW4gKCkge1xyXG4gICAgICAgICAgICAgIHZlYzQgc3VtID0gdmVjNCgwLjApO1xyXG4gICAgICAgICAgICAgIHN1bSArPSB0ZXh0dXJlMkQodVRleHR1cmUsIHZMKTtcclxuICAgICAgICAgICAgICBzdW0gKz0gdGV4dHVyZTJEKHVUZXh0dXJlLCB2Uik7XHJcbiAgICAgICAgICAgICAgc3VtICs9IHRleHR1cmUyRCh1VGV4dHVyZSwgdlQpO1xyXG4gICAgICAgICAgICAgIHN1bSArPSB0ZXh0dXJlMkQodVRleHR1cmUsIHZCKTtcclxuICAgICAgICAgICAgICBzdW0gKj0gMC4yNTtcclxuICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSBzdW0gKiBpbnRlbnNpdHk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGAsXHJcbiAgICBzcGxhdDogYFxyXG4gICAgICAgICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG4gICAgICAgICAgcHJlY2lzaW9uIGhpZ2hwIHNhbXBsZXIyRDtcclxuICAgICAgXHJcbiAgICAgICAgICB2YXJ5aW5nIHZlYzIgdlV2O1xyXG4gICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdVRhcmdldDtcclxuICAgICAgICAgIHVuaWZvcm0gZmxvYXQgYXNwZWN0UmF0aW87XHJcbiAgICAgICAgICB1bmlmb3JtIHZlYzMgY29sb3I7XHJcbiAgICAgICAgICB1bmlmb3JtIHZlYzIgcG9pbnQ7XHJcbiAgICAgICAgICB1bmlmb3JtIGZsb2F0IHJhZGl1cztcclxuICAgICAgXHJcbiAgICAgICAgICB2b2lkIG1haW4gKCkge1xyXG4gICAgICAgICAgICAgIHZlYzIgcCA9IHZVdiAtIHBvaW50Lnh5O1xyXG4gICAgICAgICAgICAgIHAueCAqPSBhc3BlY3RSYXRpbztcclxuICAgICAgICAgICAgICB2ZWMzIHNwbGF0ID0gZXhwKC1kb3QocCwgcCkgLyByYWRpdXMpICogY29sb3I7XHJcbiAgICAgICAgICAgICAgdmVjMyBiYXNlID0gdGV4dHVyZTJEKHVUYXJnZXQsIHZVdikueHl6O1xyXG4gICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoYmFzZSArIHNwbGF0LCAxLjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gICAgYWR2ZWN0aW9uTWFudWFsRmlsdGVyaW5nOiBgXHJcbiAgICAgICAgICBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbiAgICAgICAgICBwcmVjaXNpb24gaGlnaHAgc2FtcGxlcjJEO1xyXG4gICAgICBcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2VXY7XHJcbiAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1VmVsb2NpdHk7XHJcbiAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1U291cmNlO1xyXG4gICAgICAgICAgdW5pZm9ybSB2ZWMyIHRleGVsU2l6ZTtcclxuICAgICAgICAgIHVuaWZvcm0gdmVjMiBkeWVUZXhlbFNpemU7XHJcbiAgICAgICAgICB1bmlmb3JtIGZsb2F0IGR0O1xyXG4gICAgICAgICAgdW5pZm9ybSBmbG9hdCBkaXNzaXBhdGlvbjtcclxuICAgICAgXHJcbiAgICAgICAgICB2ZWM0IGJpbGVycCAoc2FtcGxlcjJEIHNhbSwgdmVjMiB1diwgdmVjMiB0c2l6ZSkge1xyXG4gICAgICAgICAgICAgIHZlYzIgc3QgPSB1diAvIHRzaXplIC0gMC41O1xyXG4gICAgICBcclxuICAgICAgICAgICAgICB2ZWMyIGl1diA9IGZsb29yKHN0KTtcclxuICAgICAgICAgICAgICB2ZWMyIGZ1diA9IGZyYWN0KHN0KTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgdmVjNCBhID0gdGV4dHVyZTJEKHNhbSwgKGl1diArIHZlYzIoMC41LCAwLjUpKSAqIHRzaXplKTtcclxuICAgICAgICAgICAgICB2ZWM0IGIgPSB0ZXh0dXJlMkQoc2FtLCAoaXV2ICsgdmVjMigxLjUsIDAuNSkpICogdHNpemUpO1xyXG4gICAgICAgICAgICAgIHZlYzQgYyA9IHRleHR1cmUyRChzYW0sIChpdXYgKyB2ZWMyKDAuNSwgMS41KSkgKiB0c2l6ZSk7XHJcbiAgICAgICAgICAgICAgdmVjNCBkID0gdGV4dHVyZTJEKHNhbSwgKGl1diArIHZlYzIoMS41LCAxLjUpKSAqIHRzaXplKTtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgcmV0dXJuIG1peChtaXgoYSwgYiwgZnV2LngpLCBtaXgoYywgZCwgZnV2LngpLCBmdXYueSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgdm9pZCBtYWluICgpIHtcclxuICAgICAgICAgICAgICB2ZWMyIGNvb3JkID0gdlV2IC0gZHQgKiBiaWxlcnAodVZlbG9jaXR5LCB2VXYsIHRleGVsU2l6ZSkueHkgKiB0ZXhlbFNpemU7XHJcbiAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gZGlzc2lwYXRpb24gKiBiaWxlcnAodVNvdXJjZSwgY29vcmQsIGR5ZVRleGVsU2l6ZSk7XHJcbiAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yLmEgPSAxLjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGAsXHJcbiAgICBhZHZlY3Rpb246IGBcclxuICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBzYW1wbGVyMkQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZVdjtcclxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVWZWxvY2l0eTtcclxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVTb3VyY2U7XHJcbiAgICAgICAgICB1bmlmb3JtIHZlYzIgdGV4ZWxTaXplO1xyXG4gICAgICAgICAgdW5pZm9ybSBmbG9hdCBkdDtcclxuICAgICAgICAgIHVuaWZvcm0gZmxvYXQgZGlzc2lwYXRpb247XHJcbiAgICAgIFxyXG4gICAgICAgICAgdm9pZCBtYWluICgpIHtcclxuICAgICAgICAgICAgICB2ZWMyIGNvb3JkID0gdlV2IC0gZHQgKiB0ZXh0dXJlMkQodVZlbG9jaXR5LCB2VXYpLnh5ICogdGV4ZWxTaXplO1xyXG4gICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IGRpc3NpcGF0aW9uICogdGV4dHVyZTJEKHVTb3VyY2UsIGNvb3JkKTtcclxuICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IuYSA9IDEuMDtcclxuICAgICAgICAgIH1cclxuICAgICAgYCxcclxuICAgIGRpdmVyZ2VuY2U6IGBcclxuICAgICAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgICAgICAgcHJlY2lzaW9uIG1lZGl1bXAgc2FtcGxlcjJEO1xyXG4gICAgICBcclxuICAgICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VXY7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdkw7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlI7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlQ7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdkI7XHJcbiAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1VmVsb2NpdHk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdm9pZCBtYWluICgpIHtcclxuICAgICAgICAgICAgICBmbG9hdCBMID0gdGV4dHVyZTJEKHVWZWxvY2l0eSwgdkwpLng7XHJcbiAgICAgICAgICAgICAgZmxvYXQgUiA9IHRleHR1cmUyRCh1VmVsb2NpdHksIHZSKS54O1xyXG4gICAgICAgICAgICAgIGZsb2F0IFQgPSB0ZXh0dXJlMkQodVZlbG9jaXR5LCB2VCkueTtcclxuICAgICAgICAgICAgICBmbG9hdCBCID0gdGV4dHVyZTJEKHVWZWxvY2l0eSwgdkIpLnk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgIHZlYzIgQyA9IHRleHR1cmUyRCh1VmVsb2NpdHksIHZVdikueHk7XHJcbiAgICAgICAgICAgICAgaWYgKHZMLnggPCAwLjApIHsgTCA9IC1DLng7IH1cclxuICAgICAgICAgICAgICBpZiAodlIueCA+IDEuMCkgeyBSID0gLUMueDsgfVxyXG4gICAgICAgICAgICAgIGlmICh2VC55ID4gMS4wKSB7IFQgPSAtQy55OyB9XHJcbiAgICAgICAgICAgICAgaWYgKHZCLnkgPCAwLjApIHsgQiA9IC1DLnk7IH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgZmxvYXQgZGl2ID0gMC41ICogKFIgLSBMICsgVCAtIEIpO1xyXG4gICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoZGl2LCAwLjAsIDAuMCwgMS4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgYCxcclxuICAgIGN1cmw6IGBcclxuICAgICAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgICAgICAgcHJlY2lzaW9uIG1lZGl1bXAgc2FtcGxlcjJEO1xyXG4gICAgICBcclxuICAgICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VXY7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdkw7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlI7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlQ7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdkI7XHJcbiAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1VmVsb2NpdHk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdm9pZCBtYWluICgpIHtcclxuICAgICAgICAgICAgICBmbG9hdCBMID0gdGV4dHVyZTJEKHVWZWxvY2l0eSwgdkwpLnk7XHJcbiAgICAgICAgICAgICAgZmxvYXQgUiA9IHRleHR1cmUyRCh1VmVsb2NpdHksIHZSKS55O1xyXG4gICAgICAgICAgICAgIGZsb2F0IFQgPSB0ZXh0dXJlMkQodVZlbG9jaXR5LCB2VCkueDtcclxuICAgICAgICAgICAgICBmbG9hdCBCID0gdGV4dHVyZTJEKHVWZWxvY2l0eSwgdkIpLng7XHJcbiAgICAgICAgICAgICAgZmxvYXQgdm9ydGljaXR5ID0gUiAtIEwgLSBUICsgQjtcclxuICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDAuNSAqIHZvcnRpY2l0eSwgMC4wLCAwLjAsIDEuMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGAsXHJcbiAgICB2b3J0aWNpdHk6IGBcclxuICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuICAgICAgICAgIHByZWNpc2lvbiBoaWdocCBzYW1wbGVyMkQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdmFyeWluZyB2ZWMyIHZVdjtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2TDtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2UjtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2VDtcclxuICAgICAgICAgIHZhcnlpbmcgdmVjMiB2QjtcclxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVWZWxvY2l0eTtcclxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVDdXJsO1xyXG4gICAgICAgICAgdW5pZm9ybSBmbG9hdCBjdXJsO1xyXG4gICAgICAgICAgdW5pZm9ybSBmbG9hdCBkdDtcclxuICAgICAgXHJcbiAgICAgICAgICB2b2lkIG1haW4gKCkge1xyXG4gICAgICAgICAgICAgIGZsb2F0IEwgPSB0ZXh0dXJlMkQodUN1cmwsIHZMKS54O1xyXG4gICAgICAgICAgICAgIGZsb2F0IFIgPSB0ZXh0dXJlMkQodUN1cmwsIHZSKS54O1xyXG4gICAgICAgICAgICAgIGZsb2F0IFQgPSB0ZXh0dXJlMkQodUN1cmwsIHZUKS54O1xyXG4gICAgICAgICAgICAgIGZsb2F0IEIgPSB0ZXh0dXJlMkQodUN1cmwsIHZCKS54O1xyXG4gICAgICAgICAgICAgIGZsb2F0IEMgPSB0ZXh0dXJlMkQodUN1cmwsIHZVdikueDtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgdmVjMiBmb3JjZSA9IDAuNSAqIHZlYzIoYWJzKFQpIC0gYWJzKEIpLCBhYnMoUikgLSBhYnMoTCkpO1xyXG4gICAgICAgICAgICAgIGZvcmNlIC89IGxlbmd0aChmb3JjZSkgKyAwLjAwMDE7XHJcbiAgICAgICAgICAgICAgZm9yY2UgKj0gY3VybCAqIEM7XHJcbiAgICAgICAgICAgICAgZm9yY2UueSAqPSAtMS4wO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICB2ZWMyIHZlbCA9IHRleHR1cmUyRCh1VmVsb2NpdHksIHZVdikueHk7XHJcbiAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2ZWwgKyBmb3JjZSAqIGR0LCAwLjAsIDEuMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGAsXHJcbiAgICBwcmVzc3VyZTogYFxyXG4gICAgICAgICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAgICAgICBwcmVjaXNpb24gbWVkaXVtcCBzYW1wbGVyMkQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZVdjtcclxuICAgICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2TDtcclxuICAgICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2UjtcclxuICAgICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VDtcclxuICAgICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2QjtcclxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVQcmVzc3VyZTtcclxuICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVEaXZlcmdlbmNlO1xyXG4gICAgICBcclxuICAgICAgICAgIHZlYzIgYm91bmRhcnkgKHZlYzIgdXYpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdXY7XHJcbiAgICAgICAgICAgICAgLy8gdW5jb21tZW50IGlmIHlvdSB1c2Ugd3JhcCBvciByZXBlYXQgdGV4dHVyZSBtb2RlXHJcbiAgICAgICAgICAgICAgLy8gdXYgPSBtaW4obWF4KHV2LCAwLjApLCAxLjApO1xyXG4gICAgICAgICAgICAgIC8vIHJldHVybiB1djtcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICB2b2lkIG1haW4gKCkge1xyXG4gICAgICAgICAgICAgIGZsb2F0IEwgPSB0ZXh0dXJlMkQodVByZXNzdXJlLCBib3VuZGFyeSh2TCkpLng7XHJcbiAgICAgICAgICAgICAgZmxvYXQgUiA9IHRleHR1cmUyRCh1UHJlc3N1cmUsIGJvdW5kYXJ5KHZSKSkueDtcclxuICAgICAgICAgICAgICBmbG9hdCBUID0gdGV4dHVyZTJEKHVQcmVzc3VyZSwgYm91bmRhcnkodlQpKS54O1xyXG4gICAgICAgICAgICAgIGZsb2F0IEIgPSB0ZXh0dXJlMkQodVByZXNzdXJlLCBib3VuZGFyeSh2QikpLng7XHJcbiAgICAgICAgICAgICAgZmxvYXQgQyA9IHRleHR1cmUyRCh1UHJlc3N1cmUsIHZVdikueDtcclxuICAgICAgICAgICAgICBmbG9hdCBkaXZlcmdlbmNlID0gdGV4dHVyZTJEKHVEaXZlcmdlbmNlLCB2VXYpLng7XHJcbiAgICAgICAgICAgICAgZmxvYXQgcHJlc3N1cmUgPSAoTCArIFIgKyBCICsgVCAtIGRpdmVyZ2VuY2UpICogMC4yNTtcclxuICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHByZXNzdXJlLCAwLjAsIDAuMCwgMS4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgYCxcclxuICAgIGdyYWRpZW50U3VidHJhY3Q6IGBcclxuICAgICAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgICAgICAgcHJlY2lzaW9uIG1lZGl1bXAgc2FtcGxlcjJEO1xyXG4gICAgICBcclxuICAgICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VXY7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdkw7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlI7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlQ7XHJcbiAgICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdkI7XHJcbiAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1UHJlc3N1cmU7XHJcbiAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1VmVsb2NpdHk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgdmVjMiBib3VuZGFyeSAodmVjMiB1dikge1xyXG4gICAgICAgICAgICAgIHJldHVybiB1djtcclxuICAgICAgICAgICAgICAvLyB1diA9IG1pbihtYXgodXYsIDAuMCksIDEuMCk7XHJcbiAgICAgICAgICAgICAgLy8gcmV0dXJuIHV2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgIHZvaWQgbWFpbiAoKSB7XHJcbiAgICAgICAgICAgICAgZmxvYXQgTCA9IHRleHR1cmUyRCh1UHJlc3N1cmUsIGJvdW5kYXJ5KHZMKSkueDtcclxuICAgICAgICAgICAgICBmbG9hdCBSID0gdGV4dHVyZTJEKHVQcmVzc3VyZSwgYm91bmRhcnkodlIpKS54O1xyXG4gICAgICAgICAgICAgIGZsb2F0IFQgPSB0ZXh0dXJlMkQodVByZXNzdXJlLCBib3VuZGFyeSh2VCkpLng7XHJcbiAgICAgICAgICAgICAgZmxvYXQgQiA9IHRleHR1cmUyRCh1UHJlc3N1cmUsIGJvdW5kYXJ5KHZCKSkueDtcclxuICAgICAgICAgICAgICB2ZWMyIHZlbG9jaXR5ID0gdGV4dHVyZTJEKHVWZWxvY2l0eSwgdlV2KS54eTtcclxuICAgICAgICAgICAgICB2ZWxvY2l0eS54eSAtPSB2ZWMyKFIgLSBMLCBUIC0gQik7XHJcbiAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2ZWxvY2l0eSwgMC4wLCAxLjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICBgXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QmVoYXZpb3JzKHBhcmFtcykge1xyXG4gICAgYmVoYXZpb3IgPSB7Li4uYmVoYXZpb3IsIC4uLnBhcmFtc307XHJcbn1cclxuIiwiLyogUmVmc1xyXG5odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2ViR0xfQVBJL0NvbnN0YW50c1xyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgeyBiZWhhdmlvciwgc2V0QmVoYXZpb3JzIH0gZnJvbSBcIi4vZGVmdWFsdHNcIjtcclxuaW1wb3J0IHsgaW5pdFdlYkdMLCBhY3RpdmF0b3IsIHNldERpdGhlclVSTCB9IGZyb20gJy4vaW5pdGlhbGl6ZXInO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBGbHVpZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpe1xyXG4gICAgICAgIHRoaXMuUEFSQU1TID0gYmVoYXZpb3I7XHJcblxyXG4gICAgICAgIC8qIFNldCBjYW52YXMgdG8gZGVzaXJlZCB3aWR0aCBhbmQgaGVpZ2h0XHJcbiAgICAgICAgICAgVE9ETzogQ2hhbmdlIHRvIGR5bmFtaWMgc2l6aW5nICAqL1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCAgPSBjYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICAgIGNvbnN0IHtwcm9ncmFtcywgd2ViR0wsIGNvbG9yRm9ybWF0cywgcG9pbnRlcnN9ID0gaW5pdFdlYkdMKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtcyA9IHByb2dyYW1zO1xyXG4gICAgICAgIHRoaXMud2ViR0wgPSB3ZWJHTDtcclxuICAgICAgICB0aGlzLmNvbG9yRm9ybWF0cyA9IGNvbG9yRm9ybWF0cztcclxuICAgICAgICB0aGlzLnBvaW50ZXJzID0gcG9pbnRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY3RpdmF0ZSBGbHVpZCBDYW52YXNcclxuICAgICAqICBJbml0aWF0ZXMgV2ViR0wgZmx1aWQgbG9vcC5cclxuICAgICAqXHJcbiAgICAgKiAgVE9ETzogRmluaXNoIGNvbW1lbnRpbmdcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIGFjdGl2YXRvcih0aGlzLmNhbnZhcywgdGhpcy53ZWJHTCwgdGhpcy5jb2xvckZvcm1hdHMsIHRoaXMucHJvZ3JhbXMsIHRoaXMucG9pbnRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVhY3RpdmF0ZSBGbHVpZCBDYW52YXNcclxuICAgICAqICBOb3RpZmllcyBhY3RpdmUgZmx1aWQgY2FudmFzIHRvIGNsZWFyIGJ1ZmZlcnMgYW5kIGVyYXNlIGZsdWlkIGZyb20gY2FsbCBzdGFjay5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGRlYWN0aXZhdGUoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNldCBGbHVpZCBTaW11bGF0aW9uXHJcbiAgICAgKiAgUmUtaW5pdGlhbGl6ZXMgV2ViR0wgY29udGV4dCBhbmQgYWN0aXZhdGVzIHNpbXVsYXRpb24gYmFzZWQgb24gbmV3IGNvbnRleHQuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICBpbml0V2ViR0woKTtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXAgRmx1aWQgQmVoYXZpb3JzXHJcbiAgICAgKiAgVXNlcyBzcHJlYWQgb3BlcmF0b3JzIHRvIGFkZCBwYXJhbWV0ZXIgdmFsdWVzIG9ubHkgaW4gdGhlIHBsYWNlcyBzcGVjaWZpZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBhcmFtczogc3BlY2lmaWMgcGFyYW1ldGVyIHZhbHVlLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgbWFwQmVoYXZpb3JzKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuUEFSQU1TID0gey4uLnRoaXMuUEFSQU1TLCAuLi5wYXJhbXN9O1xyXG4gICAgICAgIHNldEJlaGF2aW9ycyh0aGlzLlBBUkFNUyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgRmx1aWQgYXMgQmFja2dyb3VuZFxyXG4gICAgICogIFB1c2hlcyBjYW52YXMgYmFjayBpbiB6IHNwYWNlIGFuZCBhYnNvbHV0ZWx5IHBvc2l0aW9ucyBpdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc2hvdWxkU2V0OiB0cnVlIHNldHMgaXQsIGZhbHNlIHVuLXNldHMgaXQuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBzZXRBc0JhY2tncm91bmQoc2hvdWxkU2V0ID0gdHJ1ZSkge1xyXG4gICAgICAgIC8qIFB1c2hlcyBiYWNrIGluIFogSW5kZXggKi9cclxuICAgICAgICBjYW52YXMuc3R5bGUuekluZGV4ID0gc2hvdWxkU2V0ID8gJy05OScgOiAnMCc7XHJcblxyXG4gICAgICAgIC8qIFBvc2l0aW9uIEFic29sdXRlbHkgKi9cclxuICAgICAgICBjYW52YXMuc3R5bGUucG9zaXRpb24gPSBzaG91bGRTZXQgPyAnYWJzb2x1dGUnIDogJ3JlbGF0aXZlJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IEJhY2tncm91bmRcclxuICAgICAqICBTZXRzIGZsdWlkIGNhbnZhcydzIGJhY2tncm91bmQgYW5kIHJlc2V0cyB2aWV3LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0eXBlOiBJbWFnZSwgR3JhZGllbnQsIG9yIFNvbGlkLiBUaGUgdHlwZSBvZiBiYWNrZ3JvdW5kIHRvIGJlIGFwcGxpZWQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWU6IFRoZSB2YWx1ZSB0byBhcHBseSB0byB0aGUgaW1hZ2UgdHlwZS5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zOiBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gY29uZmlndXJlIGJhY2tncm91bmQgKG9wdGlvbmFsKVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYW52YXNcclxuICAgICAqL1xyXG4gICAgYXBwbHlCYWNrZ3JvdW5kKHR5cGUsIHZhbHVlLCBvcHRpb25zID0gbnVsbCwgY2FudmFzID0gdGhpcy5jYW52YXMpIHtcclxuICAgICAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAvKiBNYWtlIHRyYW5zcGFyZW50ICovXHJcbiAgICAgICAgdGhpcy5QQVJBTVMudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvKiBDaGVjayBmb3IgQmFja2dyb3VuZCBUeXBlICovXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2dyYWRpZW50JzogZ3JhZGllbnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6IGltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc29saWQnOlxyXG4gICAgICAgICAgICAvKiBNYWtlIE9wYXF1ZSBCYWNrZ3JvdW5kIGFuZCBTZXQgQ29sb3JcclxuICAgICAgICAgICAgKiAgdmFsdWUgbXVzdCBiZSBpbiB7IHI6IHJlZCwgYjogYmx1ZSwgZzogZ3JlZW4gfSBmb3JtYXRcclxuICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAqICBCZXN0IHdheSB0byBjaGFuZ2UgYmFja2dyb3VuZCBjb2xvcjpcclxuICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAqICB5b3VyRmx1aWQuUEFSQU0uQkFDS19DT0xPUi5SID0gcmVkO1xyXG4gICAgICAgICAgICAqICB5b3VyRmx1aWQuUEFSQU0uQkFDS19DT0xPUi5HID0gYmx1ZTtcclxuICAgICAgICAgICAgKiAgeW91ckZsdWlkLlBBUkFNLkJBQ0tfQ09MT1IuQiA9IGdyZWVuO1xyXG4gICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICogIG9yXHJcbiAgICAgICAgICAgICpcclxuICAgICAgICAgICAgKiAgbGV0IGNvbG9yID0ge1xyXG4gICAgICAgICAgICAqICAgICAgIHI6IHJlZCxcclxuICAgICAgICAgICAgKiAgICAgICBiOiBibHVlLFxyXG4gICAgICAgICAgICAqICAgICAgIGc6IGdyZWVuXHJcbiAgICAgICAgICAgICogICB9O1xyXG4gICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICogICB5b3VyRmx1aWQuUEFSQU0uQkFDS19DT0xPUiA9IGNvbG9yO1xyXG4gICAgICAgICAgICAqICovXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBBUkFNUy50cmFuc3BhcmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QQVJBTVMuYmFja2dyb3VuZF9jb2xvciA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogUmVzZXQgV2ViR0wgKi9cclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcblxyXG4gICAgICAgIC8qKiBTZXQgdG8gR3JhZGllbnRcclxuICAgICAgICAgKiAgU2V0cyBjYW52YXMgYmFja2dyb3VuZCB2YWx1ZSB0byBkZXNpcmVkIGdyYWRpZW50LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdyYWRpZW50KCkge1xyXG4gICAgICAgICAgICAvKiogR3JhZGllbnRcclxuICAgICAgICAgICAgICogIEhvbGRzIHRoZSBncmFkaWVudCBjc3Mgc3RhdGVtZW50LlxyXG4gICAgICAgICAgICAgKlxyXG4gICAgICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgbGV0IGdyYWRpZW50ID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8qIENvbmZpZ3VyZSBHcmFkaWVudCB0byBPcHRpb25zICovXHJcbiAgICAgICAgICAgIHN3aXRjaCAob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmFkaWFsJzpcclxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudCA9IFwicmFkaWFsLWdyYWRpZW50KFwiICsgdmFsdWUgKyBcIilcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbmljJzpcclxuICAgICAgICAgICAgICAgICAgICBncmFkaWVudCA9IFwiY29uaWMtZ3JhZGllbnQoXCIgKyB2YWx1ZSArIFwiKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVwZWF0aW5nLWxpbmVhcic6XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnQgPSBcInJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXCIgKyB2YWx1ZSArIFwiKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVwZWF0aW5nLXJhZGlhbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnQgPSBcInJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoXCIgKyB2YWx1ZSArIFwiKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGluZWFyJzpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnQgPSBcImxpbmVhci1ncmFkaWVudChcIiArIHZhbHVlICsgXCIpXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qIFNldCBHcmFkaWVudCBEb20gU3R5bGUgKi9cclxuICAgICAgICAgICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGdyYWRpZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqIFNldCB0byBJbWFnZVxyXG4gICAgICAgICAqICBTZXRzIGNhbnZhcyBiYWNrZ3JvdW5kIGltYWdlIHZhbHVlIHRvIGRlc2lyZWQgaW1hZ2UgYW5kIGNvbmZpZ3VyZSBzdHlsZXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaW1hZ2UoKSB7XHJcbiAgICAgICAgICAgIC8qIFNldCBiYWNrZ3JvdW5kIGltYWdlIHRvIGRlc2lyZWQgVVJMLCB0aHJvdyBlcnJvciBpZiBpbnZhbGlkIFVSTCAqL1xyXG4gICAgICAgICAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgdmFsdWUgKyBcIicpXCI7XHJcblxyXG4gICAgICAgICAgICAvKiBNb2RpZnkgQ1NTIFByb3BlcnRpZXMgKi9cclxuICAgICAgICAgICAgaWYob3B0aW9ucyl7XHJcbiAgICAgICAgICAgICAgICAvKiBTZXQgUmVwZWF0ICovXHJcbiAgICAgICAgICAgICAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCAgID0gb3B0aW9ucy5yZXBlYXQgICA/ICdyZXBlYXQnIDogJ25vLXJlcGVhdCc7XHJcblxyXG4gICAgICAgICAgICAgICAgLyogU2V0IFBvc2l0aW9uICovXHJcbiAgICAgICAgICAgICAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gb3B0aW9ucy5wb3NpdGlvbiA/IG9wdGlvbnMucG9zaXRpb24gOiAnY2VudGVyJztcclxuXHJcbiAgICAgICAgICAgICAgICAvKiBTZXQgU2l6ZSAqL1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmRTaXplICAgICA9IG9wdGlvbnMuc2l6ZSAgICAgPyBvcHRpb25zLnNpemUgOiAnY29udGFpbic7XHJcblxyXG4gICAgICAgICAgICAgICAgLyogU2V0IENvbG9yICovXHJcbiAgICAgICAgICAgICAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yICAgID0gb3B0aW9ucy5jb2xvciAgICA/IG9wdGlvbnMuY29sb3IgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgRGl0aGVyIFVSTFxyXG4gICAgICogIFNldHMgdGhlIFVSTCB0byBhbiBpbWFnZSB0byBiZSB1c2VkIGZvciBkaXRoZXJpbmcuIFRoaXMgbWV0aG9kIGlzIG9ubHkgcmVzcG9uc2libGUgZm9yIGNhbGxpbmdcclxuICAgICAqICB0aGUgYWN0aW9uIGluIHRoZSBpbml0aWFsaXplci4gVGhlIGRpdGhlciB3aWxsIG5vdCBiZSBhcHBsaWVkIHVudGlsIHRoZSBuZXh0IGFjdGl2YXRpb24gY2FsbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXJsOiBQYXRoIHRvIGRpdGhlciBpbiByb290IGRpcmVjdG9yeS5cclxuICAgICAqL1xyXG4gICAgc2V0RGl0aGVyVVJMKHVybCl7IHNldERpdGhlclVSTCh1cmwpOyB9XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIGRlZnVhbHRzIGZyb20gXCIuL2RlZnVhbHRzXCI7XHJcbmltcG9ydCAqIGFzIGRpdGhlciBmcm9tIFwiLi4vYXNzZXRzL2RpdGhlci5wbmdcIjtcclxuXHJcbmxldCBhY3RpdmUgPSBmYWxzZTtcclxubGV0IGNhbmNlbCA9IGZhbHNlO1xyXG5sZXQgZGl0aGVyVVJMID0gXCIuL2Fzc2V0cy9kaXRoZXIucG5nXCI7XHJcblxyXG4vKipcclxuICogSW5pdGlhdGUgV2ViR0wgT2JqZWN0XHJcbiAqICBHZXRzIFdlYkdMIGNvbnRleHQgYW5kIGNvbXBpbGVzIHNoYWRlciBwcm9ncmFtcy5cclxuICpcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0V2ViR0woKXtcclxuICAgIC8qIEFkZCBkZWZhdWx0IHBvaW50ZXIgKi9cclxuICAgIGxldCBwb2ludGVycyA9IFtdO1xyXG4gICAgcG9pbnRlcnMucHVzaCggbmV3IFBvaW50ZXIoKSApO1xyXG5cclxuICAgIC8qIEdldCB3ZWJHTCBjb250ZXh0ICovXHJcbiAgICBsZXQgd2ViR0wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJywgZGVmdWFsdHMuRFJBV0lOR19QQVJBTVMpO1xyXG4gICAgY29uc3QgaXNXZWJHTDIgPSAhIXdlYkdMO1xyXG4gICAgaWYgKCFpc1dlYkdMMilcclxuICAgICAgICB3ZWJHTCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcsIGRlZnVhbHRzLkRSQVdJTkdfUEFSQU1TKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJywgZGVmdWFsdHMuRFJBV0lOR19QQVJBTVMpO1xyXG5cclxuICAgIC8qIEdldCBjb2xvciBmb3JtYXRzICovXHJcbiAgICBsZXQgY29sb3JGb3JtYXRzID0gZ2V0Rm9ybWF0cygpO1xyXG5cclxuICAgIC8qIENhc2Ugc3VwcG9ydCBhZGp1c3RtZW50cyAqL1xyXG4gICAgaWYgKGlzTW9iaWxlKCkpXHJcbiAgICAgICAgZGVmdWFsdHMuYmVoYXZpb3IucmVuZGVyX3NoYWRlcnMgPSBmYWxzZTtcclxuICAgIGlmICghY29sb3JGb3JtYXRzLnN1cHBvcnRMaW5lYXJGaWx0ZXJpbmcpIHtcclxuICAgICAgICBkZWZ1YWx0cy5iZWhhdmlvci5yZW5kZXJfc2hhZGVycyA9IGZhbHNlO1xyXG4gICAgICAgIGRlZnVhbHRzLmJlaGF2aW9yLnJlbmRlcl9ibG9vbSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE1ha2Ugb3VyIHNoYWRlcnMgYW5kIHNoYWRlciBwcm9ncmFtcyAqL1xyXG4gICAgY29uc3QgU0hBREVSID0ge1xyXG4gICAgICAgIGJhc2VWZXJ0ZXggICAgICAgICAgICAgICA6IGNvbXBpbGVTaGFkZXIod2ViR0wuVkVSVEVYX1NIQURFUiwgZGVmdWFsdHMuU0hBREVSX1NPVVJDRS52ZXJ0ZXgpLFxyXG5cclxuICAgICAgICBjbGVhciAgICAgICAgICAgICAgICAgICAgOiBjb21waWxlU2hhZGVyKHdlYkdMLkZSQUdNRU5UX1NIQURFUiwgZGVmdWFsdHMuU0hBREVSX1NPVVJDRS5jbGVhciksXHJcbiAgICAgICAgY29sb3IgICAgICAgICAgICAgICAgICAgIDogY29tcGlsZVNoYWRlcih3ZWJHTC5GUkFHTUVOVF9TSEFERVIsIGRlZnVhbHRzLlNIQURFUl9TT1VSQ0UuY29sb3IpLFxyXG4gICAgICAgIGJhY2tncm91bmQgICAgICAgICAgICAgICA6IGNvbXBpbGVTaGFkZXIod2ViR0wuRlJBR01FTlRfU0hBREVSLCBkZWZ1YWx0cy5TSEFERVJfU09VUkNFLmJhY2tncm91bmQpLFxyXG4gICAgICAgIGRpc3BsYXkgICAgICAgICAgICAgICAgICA6IGNvbXBpbGVTaGFkZXIod2ViR0wuRlJBR01FTlRfU0hBREVSLCBkZWZ1YWx0cy5TSEFERVJfU09VUkNFLmRpc3BsYXkpLFxyXG4gICAgICAgIGRpc3BsYXlCbG9vbSAgICAgICAgICAgICA6IGNvbXBpbGVTaGFkZXIod2ViR0wuRlJBR01FTlRfU0hBREVSLCBkZWZ1YWx0cy5TSEFERVJfU09VUkNFLmRpc3BsYXlCbG9vbSksXHJcbiAgICAgICAgZGlzcGxheVNoYWRpbmcgICAgICAgICAgIDogY29tcGlsZVNoYWRlcih3ZWJHTC5GUkFHTUVOVF9TSEFERVIsIGRlZnVhbHRzLlNIQURFUl9TT1VSQ0UuZGlzcGxheVNoYWRpbmcpLFxyXG4gICAgICAgIGRpc3BsYXlCbG9vbVNoYWRpbmcgICAgICA6IGNvbXBpbGVTaGFkZXIod2ViR0wuRlJBR01FTlRfU0hBREVSLCBkZWZ1YWx0cy5TSEFERVJfU09VUkNFLmRpc3BsYXlCbG9vbVNoYWRpbmcpLFxyXG4gICAgICAgIGJsb29tUHJlRmlsdGVyICAgICAgICAgICA6IGNvbXBpbGVTaGFkZXIod2ViR0wuRlJBR01FTlRfU0hBREVSLCBkZWZ1YWx0cy5TSEFERVJfU09VUkNFLmJsb29tUHJlRmlsdGVyKSxcclxuICAgICAgICBibG9vbUJsdXIgICAgICAgICAgICAgICAgOiBjb21waWxlU2hhZGVyKHdlYkdMLkZSQUdNRU5UX1NIQURFUiwgZGVmdWFsdHMuU0hBREVSX1NPVVJDRS5ibG9vbUJsdXIpLFxyXG4gICAgICAgIGJsb29tRmluYWwgICAgICAgICAgICAgICA6IGNvbXBpbGVTaGFkZXIod2ViR0wuRlJBR01FTlRfU0hBREVSLCBkZWZ1YWx0cy5TSEFERVJfU09VUkNFLmJsb29tRmluYWwpLFxyXG4gICAgICAgIHNwbGF0ICAgICAgICAgICAgICAgICAgICA6IGNvbXBpbGVTaGFkZXIod2ViR0wuRlJBR01FTlRfU0hBREVSLCBkZWZ1YWx0cy5TSEFERVJfU09VUkNFLnNwbGF0KSxcclxuICAgICAgICBhZHZlY3Rpb25NYW51YWxGaWx0ZXJpbmcgOiBjb21waWxlU2hhZGVyKHdlYkdMLkZSQUdNRU5UX1NIQURFUiwgZGVmdWFsdHMuU0hBREVSX1NPVVJDRS5hZHZlY3Rpb25NYW51YWxGaWx0ZXJpbmcpLFxyXG4gICAgICAgIGFkdmVjdGlvbiAgICAgICAgICAgICAgICA6IGNvbXBpbGVTaGFkZXIod2ViR0wuRlJBR01FTlRfU0hBREVSLCBkZWZ1YWx0cy5TSEFERVJfU09VUkNFLmFkdmVjdGlvbiksXHJcbiAgICAgICAgZGl2ZXJnZW5jZSAgICAgICAgICAgICAgIDogY29tcGlsZVNoYWRlcih3ZWJHTC5GUkFHTUVOVF9TSEFERVIsIGRlZnVhbHRzLlNIQURFUl9TT1VSQ0UuZGl2ZXJnZW5jZSksXHJcbiAgICAgICAgY3VybCAgICAgICAgICAgICAgICAgICAgIDogY29tcGlsZVNoYWRlcih3ZWJHTC5GUkFHTUVOVF9TSEFERVIsIGRlZnVhbHRzLlNIQURFUl9TT1VSQ0UuY3VybCksXHJcbiAgICAgICAgdm9ydGljaXR5ICAgICAgICAgICAgICAgIDogY29tcGlsZVNoYWRlcih3ZWJHTC5GUkFHTUVOVF9TSEFERVIsIGRlZnVhbHRzLlNIQURFUl9TT1VSQ0Uudm9ydGljaXR5KSxcclxuICAgICAgICBwcmVzc3VyZSAgICAgICAgICAgICAgICAgOiBjb21waWxlU2hhZGVyKHdlYkdMLkZSQUdNRU5UX1NIQURFUiwgZGVmdWFsdHMuU0hBREVSX1NPVVJDRS5wcmVzc3VyZSksXHJcbiAgICAgICAgZ3JhZGllbnRTdWJ0cmFjdCAgICAgICAgIDogY29tcGlsZVNoYWRlcih3ZWJHTC5GUkFHTUVOVF9TSEFERVIsIGRlZnVhbHRzLlNIQURFUl9TT1VSQ0UuZ3JhZGllbnRTdWJ0cmFjdClcclxuICAgIH07XHJcbiAgICBsZXQgcHJvZ3JhbXMgPSBmb3JtU2hhZGVyUHJvZ3JhbXMoY29sb3JGb3JtYXRzLnN1cHBvcnRMaW5lYXJGaWx0ZXJpbmcpO1xyXG5cclxuICAgIC8qIFdvcmtlciBDbGFzc2VzIGFuZCBGdW5jdGlvbnMgKi9cclxuICAgIC8qKlxyXG4gICAgICogIElzIEl0IE1vYmlsZT86XHJcbiAgICAgKiAgRGV0ZWN0cyB3aGV0aGVyIG9yIG5vdCBhIGRldmljZSBpcyBtb2JpbGUgYnkgY2hlY2tpbmcgdGhlIHVzZXIgYWdlbnQgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzTW9iaWxlICgpIHtcclxuICAgICAgICByZXR1cm4gL01vYml8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgR2V0IEZvcm1hdHM6XHJcbiAgICAgKiAgRW5hYmxlIGNvbG9yIGV4dGVuc2lvbnMsIGxpbmVhciBmaWx0ZXJpbmcgZXh0ZW5zaW9ucywgYW5kIHJldHVybiB1c2FibGUgY29sb3IgZm9ybWF0cyBSR0JBLFxyXG4gICAgICogIFJHIChSZWQtR3JlZW4pLCBhbmQgUiAoUmVkKS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7e2Zvcm1hdFJHQkE6IHtpbnRlcm5hbEZvcm1hdCwgZm9ybWF0fSwgc3VwcG9ydExpbmVhckZpbHRlcmluZzogT0VTX3RleHR1cmVfaGFsZl9mbG9hdF9saW5lYXIsXHJcbiAgICAgKiBmb3JtYXRSOiB7aW50ZXJuYWxGb3JtYXQsIGZvcm1hdH0sIGhhbGZGbG9hdFRleFR5cGU6ICosIGZvcm1hdFJHOiB7aW50ZXJuYWxGb3JtYXQsIGZvcm1hdH19fVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRGb3JtYXRzKCkge1xyXG4gICAgICAgIC8qIENvbG9yIEZvcm1hdHMgKi9cclxuICAgICAgICBsZXQgZm9ybWF0UkdCQTtcclxuICAgICAgICBsZXQgZm9ybWF0Ukc7XHJcbiAgICAgICAgbGV0IGZvcm1hdFI7XHJcblxyXG4gICAgICAgIGxldCBoYWxmRmxvYXQ7XHJcbiAgICAgICAgbGV0IHN1cHBvcnRMaW5lYXJGaWx0ZXJpbmc7XHJcblxyXG4gICAgICAgIC8qIEVuYWJsZXMgd2ViR0wgY29sb3IgZXh0ZW5zaW9ucyBhbmQgZ2V0IGxpbmVhciBmaWx0ZXJpbmcgZXh0ZW5zaW9uKi9cclxuICAgICAgICBpZiAoaXNXZWJHTDIpIHtcclxuICAgICAgICAgICAgd2ViR0wuZ2V0RXh0ZW5zaW9uKCdFWFRfY29sb3JfYnVmZmVyX2Zsb2F0Jyk7XHJcbiAgICAgICAgICAgIHN1cHBvcnRMaW5lYXJGaWx0ZXJpbmcgPSB3ZWJHTC5nZXRFeHRlbnNpb24oJ09FU190ZXh0dXJlX2Zsb2F0X2xpbmVhcicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbGZGbG9hdCA9IHdlYkdMLmdldEV4dGVuc2lvbignT0VTX3RleHR1cmVfaGFsZl9mbG9hdCcpO1xyXG4gICAgICAgICAgICBzdXBwb3J0TGluZWFyRmlsdGVyaW5nID0gd2ViR0wuZ2V0RXh0ZW5zaW9uKCdPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0X2xpbmVhcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBIQUxGX0ZMT0FUX1RFWFRVUkVfVFlQRSA9IGlzV2ViR0wyID8gd2ViR0wuSEFMRl9GTE9BVCA6IGhhbGZGbG9hdC5IQUxGX0ZMT0FUX09FUztcclxuXHJcbiAgICAgICAgLyogU2V0IGNvbG9yIHRvIGJsYWNrIGZvciB3aGVuIGNvbG9yIGJ1ZmZlcnMgYXJlIGNsZWFyZWQgKi9cclxuICAgICAgICB3ZWJHTC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XHJcblxyXG4gICAgICAgIC8qIFJldHJpZXZlIGNvbG9yIGZvcm1hdHMgKi9cclxuICAgICAgICBpZiAoaXNXZWJHTDIpIHtcclxuICAgICAgICAgICAgZm9ybWF0UkdCQSA9IGdldFN1cHBvcnRlZEZvcm1hdCh3ZWJHTC5SR0JBMTZGLCB3ZWJHTC5SR0JBLCBIQUxGX0ZMT0FUX1RFWFRVUkVfVFlQRSk7XHJcbiAgICAgICAgICAgIGZvcm1hdFJHID0gZ2V0U3VwcG9ydGVkRm9ybWF0KHdlYkdMLlJHMTZGLCB3ZWJHTC5SRywgSEFMRl9GTE9BVF9URVhUVVJFX1RZUEUpO1xyXG4gICAgICAgICAgICBmb3JtYXRSID0gZ2V0U3VwcG9ydGVkRm9ybWF0KHdlYkdMLlIxNkYsIHdlYkdMLlJFRCwgSEFMRl9GTE9BVF9URVhUVVJFX1RZUEUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcm1hdFJHQkEgPSBnZXRTdXBwb3J0ZWRGb3JtYXQod2ViR0wuUkdCQSwgd2ViR0wuUkdCQSwgSEFMRl9GTE9BVF9URVhUVVJFX1RZUEUpO1xyXG4gICAgICAgICAgICBmb3JtYXRSRyA9IGdldFN1cHBvcnRlZEZvcm1hdCh3ZWJHTC5SR0JBLCB3ZWJHTC5SR0JBLCBIQUxGX0ZMT0FUX1RFWFRVUkVfVFlQRSk7XHJcbiAgICAgICAgICAgIGZvcm1hdFIgPSBnZXRTdXBwb3J0ZWRGb3JtYXQod2ViR0wuUkdCQSwgd2ViR0wuUkdCQSwgSEFMRl9GTE9BVF9URVhUVVJFX1RZUEUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqIEdldCBTdXBwb3J0ZWQgRm9ybWF0XHJcbiAgICAgICAgICogIFVzaW5nIHRoZSBzcGVjaWZpZWQgaW50ZXJuYWwgZm9ybWF0LCB3ZSByZXRyaWV2ZSBhbmQgcmV0dXJuIHRoZSBkZXNpcmVkIGNvbG9yIGZvcm1hdCB0byBiZVxyXG4gICAgICAgICAqICByZW5kZXJlZCB3aXRoXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcGFyYW0gaW50ZXJuYWxGb3JtYXQ6IEEgR0xlbnVtIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xvciBjb21wb25lbnRzIHdpdGhpbiB0aGUgdGV4dHVyZVxyXG4gICAgICAgICAqIEBwYXJhbSBmb3JtYXQ6IEFub3RoZXIgR0xlbnVtIHRoYXQgc3BlY2lmaWVzIHRoZSBmb3JtYXQgb2YgdGhlIHRleGVsIGRhdGEuXHJcbiAgICAgICAgICogQHJldHVybnMge3tpbnRlcm5hbEZvcm1hdDogKiwgZm9ybWF0OiAqfXxudWxsfCh7aW50ZXJuYWxGb3JtYXQsIGZvcm1hdH18bnVsbCl9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkRm9ybWF0IChpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlKSB7XHJcbiAgICAgICAgICAgIGxldCBpc1N1cHBvcnRSZW5kZXJUZXh0dXJlRm9ybWF0O1xyXG4gICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHdlYkdMLmNyZWF0ZVRleHR1cmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8qIFNldCB0ZXh0dXJlIHBhcmFtZXRlcnMgKi9cclxuICAgICAgICAgICAgd2ViR0wuYmluZFRleHR1cmUod2ViR0wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICAgICAgICAgIHdlYkdMLnRleFBhcmFtZXRlcmkod2ViR0wuVEVYVFVSRV8yRCwgd2ViR0wuVEVYVFVSRV9NSU5fRklMVEVSLCB3ZWJHTC5ORUFSRVNUKTtcclxuICAgICAgICAgICAgd2ViR0wudGV4UGFyYW1ldGVyaSh3ZWJHTC5URVhUVVJFXzJELCB3ZWJHTC5URVhUVVJFX01BR19GSUxURVIsIHdlYkdMLk5FQVJFU1QpO1xyXG4gICAgICAgICAgICB3ZWJHTC50ZXhQYXJhbWV0ZXJpKHdlYkdMLlRFWFRVUkVfMkQsIHdlYkdMLlRFWFRVUkVfV1JBUF9TLCB3ZWJHTC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgICAgICAgd2ViR0wudGV4UGFyYW1ldGVyaSh3ZWJHTC5URVhUVVJFXzJELCB3ZWJHTC5URVhUVVJFX1dSQVBfVCwgd2ViR0wuQ0xBTVBfVE9fRURHRSk7XHJcblxyXG4gICAgICAgICAgICAvKiBTcGVjaWZ5IGEgMkQgdGV4dHVyZSBpbWFnZSAqL1xyXG4gICAgICAgICAgICB3ZWJHTC50ZXhJbWFnZTJEKHdlYkdMLlRFWFRVUkVfMkQsIDAsIGludGVybmFsRm9ybWF0LCA0LCA0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xyXG5cclxuICAgICAgICAgICAgLyogQXR0YWNoIHRleHR1cmUgdG8gZnJhbWUgYnVmZmVyICovXHJcbiAgICAgICAgICAgIGxldCBmYm8gPSB3ZWJHTC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xyXG4gICAgICAgICAgICB3ZWJHTC5iaW5kRnJhbWVidWZmZXIod2ViR0wuRlJBTUVCVUZGRVIsIGZibyk7XHJcbiAgICAgICAgICAgIHdlYkdMLmZyYW1lYnVmZmVyVGV4dHVyZTJEKHdlYkdMLkZSQU1FQlVGRkVSLCB3ZWJHTC5DT0xPUl9BVFRBQ0hNRU5UMCwgd2ViR0wuVEVYVFVSRV8yRCwgdGV4dHVyZSwgMCk7XHJcblxyXG4gICAgICAgICAgICAvKiBDaGVjayBpZiBjdXJyZW50IGZvcm1hdCBpcyBzdXBwb3J0ZWQgKi9cclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gd2ViR0wuY2hlY2tGcmFtZWJ1ZmZlclN0YXR1cyh3ZWJHTC5GUkFNRUJVRkZFUik7XHJcbiAgICAgICAgICAgIGlzU3VwcG9ydFJlbmRlclRleHR1cmVGb3JtYXQgPSBzdGF0dXMgPT09IHdlYkdMLkZSQU1FQlVGRkVSX0NPTVBMRVRFO1xyXG5cclxuICAgICAgICAgICAgLyogSWYgbm90IHN1cHBvcnRlZCB1c2UgZmFsbGJhY2sgZm9ybWF0LCB1bnRpbCB3ZSBoYXZlIG5vIGZhbGxiYWNrICovXHJcbiAgICAgICAgICAgIGlmICghaXNTdXBwb3J0UmVuZGVyVGV4dHVyZUZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChpbnRlcm5hbEZvcm1hdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2Ugd2ViR0wuUjE2RjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFN1cHBvcnRlZEZvcm1hdCh3ZWJHTC5SRzE2Riwgd2ViR0wuUkcsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2Ugd2ViR0wuUkcxNkY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRTdXBwb3J0ZWRGb3JtYXQod2ViR0wuUkdCQTE2Riwgd2ViR0wuUkdCQSwgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IGludGVybmFsRm9ybWF0LCBmb3JtYXQgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZvcm1hdFJHQkEsXHJcbiAgICAgICAgICAgIGZvcm1hdFJHLFxyXG4gICAgICAgICAgICBmb3JtYXRSLFxyXG5cclxuICAgICAgICAgICAgaGFsZkZsb2F0VGV4VHlwZTogSEFMRl9GTE9BVF9URVhUVVJFX1RZUEUsXHJcbiAgICAgICAgICAgIHN1cHBvcnRMaW5lYXJGaWx0ZXJpbmdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIENvbXBpbGUgU2hhZGVyOlxyXG4gICAgICogIE1ha2VzIGEgbmV3IHdlYkdMIHNoYWRlciBvZiB0eXBlIGB0eXBlYCB1c2luZyB0aGUgcHJvdmlkZWQgR0xTTCBzb3VyY2UuIFRoZSBgdHlwZWAgaXMgZWl0aGVyIG9mXHJcbiAgICAgKiAgYFZFUlRFWF9TSEFERVJgIG9yIGBGUkFHTUVOVF9TSEFERVJgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHR5cGU6IFBhc3NlZCB0byBgY3JlYXRlU2hhZGVyYCB0byBkZWZpbmUgdGhlIHNoYWRlciB0eXBlXHJcbiAgICAgKiBAcGFyYW0gc291cmNlOiBBIEdMU0wgc291cmNlIHNjcmlwdCwgdXNlZCB0byBkZWZpbmUgdGhlIHNoYWRlciBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAcmV0dXJucyB7V2ViR0xTaGFkZXJ9OiBBIHdlYkdMIHNoYWRlciBvZiB0aGUgcGFyYW1ldGVyaXplZCB0eXBlIGFuZCBzb3VyY2VcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY29tcGlsZVNoYWRlciAodHlwZSwgc291cmNlKSB7XHJcbiAgICAgICAgLyogQ3JlYXRlIHNoYWRlciwgbGluayB0aGUgc291cmNlLCBhbmQgY29tcGlsZSB0aGUgR0xTTCovXHJcbiAgICAgICAgY29uc3Qgc2hhZGVyID0gd2ViR0wuY3JlYXRlU2hhZGVyKHR5cGUpO1xyXG4gICAgICAgIHdlYkdMLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICAgICAgd2ViR0wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgICAgICAvKiBUT0RPOiBGaW5pc2ggZXJyb3IgY2hlY2tpbmcgKi9cclxuICAgICAgICBpZiAoIXdlYkdMLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHdlYkdMLkNPTVBJTEVfU1RBVFVTKSlcclxuICAgICAgICAgICAgdGhyb3cgd2ViR0wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIEZvcm0gU2hhZGVyIFByb2dyYW1zOlxyXG4gICAgICogIEFzc2VtYmxlcyBzaGFkZXJzIGludG8gYSB3ZWJHbCBwcm9ncmFtIHdlIGNhbiB1c2UgdG8gd3JpdGUgdG8gb3VyIGNvbnRleHRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3VwcG9ydExpbmVhckZpbHRlcmluZzogQSBib29sIGxldHRpbmcgdXMga25vdyBpZiB3ZSBzdXBwb3J0IGxpbmVhciBmaWx0ZXJpbmdcclxuICAgICAqIEByZXR1cm5zIHt7ZGlzcGxheUJsb29tUHJvZ3JhbTogR0xQcm9ncmFtLCB2b3J0aWNpdHlQcm9ncmFtOiBHTFByb2dyYW0sIGRpc3BsYXlTaGFkaW5nUHJvZ3JhbTogR0xQcm9ncmFtLFxyXG4gICAgICogZGlzcGxheUJsb29tU2hhZGluZ1Byb2dyYW06IEdMUHJvZ3JhbSwgZ3JhZGllbnRTdWJ0cmFjdFByb2dyYW06IEdMUHJvZ3JhbSwgYWR2ZWN0aW9uUHJvZ3JhbTogR0xQcm9ncmFtLFxyXG4gICAgICogYmxvb21CbHVyUHJvZ3JhbTogR0xQcm9ncmFtLCBjb2xvclByb2dyYW06IEdMUHJvZ3JhbSwgZGl2ZXJnZW5jZVByb2dyYW06IEdMUHJvZ3JhbSwgY2xlYXJQcm9ncmFtOiBHTFByb2dyYW0sXHJcbiAgICAgKiBzcGxhdFByb2dyYW06IEdMUHJvZ3JhbSwgZGlzcGxheVByb2dyYW06IEdMUHJvZ3JhbSwgYmxvb21QcmVGaWx0ZXJQcm9ncmFtOiBHTFByb2dyYW0sIGN1cmxQcm9ncmFtOiBHTFByb2dyYW0sXHJcbiAgICAgKiBibG9vbUZpbmFsUHJvZ3JhbTogR0xQcm9ncmFtLCBwcmVzc3VyZVByb2dyYW06IEdMUHJvZ3JhbSwgYmFja2dyb3VuZFByb2dyYW06IEdMUHJvZ3JhbX19OiBQcm9ncmFtcyB1c2VkIHRvXHJcbiAgICAgKiByZW5kZXIgc2hhZGVyc1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZm9ybVNoYWRlclByb2dyYW1zKHN1cHBvcnRMaW5lYXJGaWx0ZXJpbmcpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNsZWFyUHJvZ3JhbTogbmV3IEdMUHJvZ3JhbShTSEFERVIuYmFzZVZlcnRleCwgU0hBREVSLmNsZWFyLCB3ZWJHTCksXHJcbiAgICAgICAgICAgIGNvbG9yUHJvZ3JhbTogbmV3IEdMUHJvZ3JhbShTSEFERVIuYmFzZVZlcnRleCwgU0hBREVSLmNvbG9yLCB3ZWJHTCksXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRQcm9ncmFtOiBuZXcgR0xQcm9ncmFtKFNIQURFUi5iYXNlVmVydGV4LCBTSEFERVIuYmFja2dyb3VuZCwgd2ViR0wpLFxyXG4gICAgICAgICAgICBkaXNwbGF5UHJvZ3JhbTogbmV3IEdMUHJvZ3JhbShTSEFERVIuYmFzZVZlcnRleCwgU0hBREVSLmRpc3BsYXksIHdlYkdMKSxcclxuICAgICAgICAgICAgZGlzcGxheUJsb29tUHJvZ3JhbTogbmV3IEdMUHJvZ3JhbShTSEFERVIuYmFzZVZlcnRleCwgU0hBREVSLmRpc3BsYXlCbG9vbSwgd2ViR0wpLFxyXG4gICAgICAgICAgICBkaXNwbGF5U2hhZGluZ1Byb2dyYW06IG5ldyBHTFByb2dyYW0oU0hBREVSLmJhc2VWZXJ0ZXgsIFNIQURFUi5kaXNwbGF5U2hhZGluZywgd2ViR0wpLFxyXG4gICAgICAgICAgICBkaXNwbGF5Qmxvb21TaGFkaW5nUHJvZ3JhbTogbmV3IEdMUHJvZ3JhbShTSEFERVIuYmFzZVZlcnRleCwgU0hBREVSLmRpc3BsYXlCbG9vbVNoYWRpbmcsIHdlYkdMKSxcclxuICAgICAgICAgICAgYmxvb21QcmVGaWx0ZXJQcm9ncmFtOiBuZXcgR0xQcm9ncmFtKFNIQURFUi5iYXNlVmVydGV4LCBTSEFERVIuYmxvb21QcmVGaWx0ZXIsIHdlYkdMKSxcclxuICAgICAgICAgICAgYmxvb21CbHVyUHJvZ3JhbTogbmV3IEdMUHJvZ3JhbShTSEFERVIuYmFzZVZlcnRleCwgU0hBREVSLmJsb29tQmx1ciwgd2ViR0wpLFxyXG4gICAgICAgICAgICBibG9vbUZpbmFsUHJvZ3JhbTogbmV3IEdMUHJvZ3JhbShTSEFERVIuYmFzZVZlcnRleCwgU0hBREVSLmJsb29tRmluYWwsIHdlYkdMKSxcclxuICAgICAgICAgICAgc3BsYXRQcm9ncmFtOiBuZXcgR0xQcm9ncmFtKFNIQURFUi5iYXNlVmVydGV4LCBTSEFERVIuc3BsYXQsIHdlYkdMKSxcclxuICAgICAgICAgICAgYWR2ZWN0aW9uUHJvZ3JhbTogbmV3IEdMUHJvZ3JhbShTSEFERVIuYmFzZVZlcnRleCwgc3VwcG9ydExpbmVhckZpbHRlcmluZyA/IFNIQURFUi5hZHZlY3Rpb24gOiBTSEFERVIuYWR2ZWN0aW9uTWFudWFsRmlsdGVyaW5nLCB3ZWJHTCksXHJcbiAgICAgICAgICAgIGRpdmVyZ2VuY2VQcm9ncmFtOiBuZXcgR0xQcm9ncmFtKFNIQURFUi5iYXNlVmVydGV4LCBTSEFERVIuZGl2ZXJnZW5jZSwgd2ViR0wpLFxyXG4gICAgICAgICAgICBjdXJsUHJvZ3JhbTogbmV3IEdMUHJvZ3JhbShTSEFERVIuYmFzZVZlcnRleCwgU0hBREVSLmN1cmwsIHdlYkdMKSxcclxuICAgICAgICAgICAgdm9ydGljaXR5UHJvZ3JhbTogbmV3IEdMUHJvZ3JhbShTSEFERVIuYmFzZVZlcnRleCwgU0hBREVSLnZvcnRpY2l0eSwgd2ViR0wpLFxyXG4gICAgICAgICAgICBwcmVzc3VyZVByb2dyYW06IG5ldyBHTFByb2dyYW0oU0hBREVSLmJhc2VWZXJ0ZXgsIFNIQURFUi5wcmVzc3VyZSwgd2ViR0wpLFxyXG4gICAgICAgICAgICBncmFkaWVudFN1YnRyYWN0UHJvZ3JhbTogbmV3IEdMUHJvZ3JhbShTSEFERVIuYmFzZVZlcnRleCwgU0hBREVSLmdyYWRpZW50U3VidHJhY3QsIHdlYkdMKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9ncmFtczogcHJvZ3JhbXMsXHJcbiAgICAgICAgd2ViR0w6IHdlYkdMLFxyXG4gICAgICAgIGNvbG9yRm9ybWF0czogY29sb3JGb3JtYXRzLFxyXG4gICAgICAgIHBvaW50ZXJzOiBwb2ludGVyc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdG9yKGNhbnZhcywgd2ViR0wsIGNvbG9yRm9ybWF0LCBQUk9HUkFNUywgcG9pbnRlcnMpIHtcclxuICAgIGlmKGFjdGl2ZSl7XHJcbiAgICAgICAgbGV0IG5Qb2ludGVycyA9IFtdO1xyXG4gICAgICAgIG5Qb2ludGVycy5wdXNoKCBuZXcgUG9pbnRlcigpICk7XHJcbiAgICAgICAgcG9pbnRlcnMgPSBuUG9pbnRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAvKiBUT0RPOiBSZXRyaWV2ZSBoYXVsIHN0eWxlICovXHJcbiAgICBjb25zdCBQQVJBTVMgPSBkZWZ1YWx0cy5iZWhhdmlvcjtcclxuXHJcbiAgICBsZXQgYmxvb21GcmFtZUJ1ZmZlcnMgPSBbXTtcclxuICAgIGxldCBzcGxhdFN0YWNrID0gW107XHJcblxyXG4gICAgbGV0IHNpbVdpZHRoO1xyXG4gICAgbGV0IHNpbUhlaWdodDtcclxuICAgIGxldCBkeWVXaWR0aDtcclxuICAgIGxldCBkeWVIZWlnaHQ7XHJcbiAgICBsZXQgZGVuc2l0eTtcclxuICAgIGxldCB2ZWxvY2l0eTtcclxuICAgIGxldCBkaXZlcmdlbmNlO1xyXG4gICAgbGV0IGN1cmw7XHJcbiAgICBsZXQgcHJlc3N1cmU7XHJcbiAgICBsZXQgYmxvb207XHJcblxyXG4gICAgY29uc3QgYmxpdCA9ICgoKSA9PiB7XHJcbiAgICAgICAgd2ViR0wuYmluZEJ1ZmZlcih3ZWJHTC5BUlJBWV9CVUZGRVIsIHdlYkdMLmNyZWF0ZUJ1ZmZlcigpKTtcclxuICAgICAgICB3ZWJHTC5idWZmZXJEYXRhKHdlYkdMLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbLTEsIC0xLCAtMSwgMSwgMSwgMSwgMSwgLTFdKSwgd2ViR0wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgICB3ZWJHTC5iaW5kQnVmZmVyKHdlYkdMLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCB3ZWJHTC5jcmVhdGVCdWZmZXIoKSk7XHJcbiAgICAgICAgd2ViR0wuYnVmZmVyRGF0YSh3ZWJHTC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgbmV3IFVpbnQxNkFycmF5KFswLCAxLCAyLCAwLCAyLCAzXSksIHdlYkdMLlNUQVRJQ19EUkFXKTtcclxuXHJcbiAgICAgICAgd2ViR0wudmVydGV4QXR0cmliUG9pbnRlcigwLCAyLCB3ZWJHTC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG4gICAgICAgIHdlYkdMLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KDApO1xyXG5cclxuICAgICAgICByZXR1cm4gKGRlc3RpbmF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHdlYkdMLmJpbmRGcmFtZWJ1ZmZlcih3ZWJHTC5GUkFNRUJVRkZFUiwgZGVzdGluYXRpb24pO1xyXG4gICAgICAgICAgICB3ZWJHTC5kcmF3RWxlbWVudHMod2ViR0wuVFJJQU5HTEVTLCA2LCB3ZWJHTC5VTlNJR05FRF9TSE9SVCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvKiogRGl0aGVyaW5nIFRleHR1cmVcclxuICAgICAqICBJbml0aWFsaXplIGZsdWlkIG92ZXJsYXkvZGl0aGVyXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge3t0ZXh0dXJlOiBXZWJHTFRleHR1cmUsIHdpZHRoOiBudW1iZXIsIGF0dGFjaCgqKTogKiwgaGVpZ2h0OiBudW1iZXJ9fVxyXG4gICAgICovXHJcbiAgICBsZXQgZGl0aGVyaW5nVGV4dHVyZSA9IFBBUkFNUy5lbWJlZGRlZF9kaXRoZXIgPyBjcmVhdGVUZXh0dXJlQXN5bmMoZGl0aGVyLmRlZmF1bHQpIDogY3JlYXRlVGV4dHVyZUFzeW5jKGRpdGhlclVSTCk7XHJcblxyXG4gICAgLyogSW5pdGlhbGl6ZSBGbHVpZCAqL1xyXG4gICAgaW5pdCgpO1xyXG4gICAgbXVsdGlwbGVTcGxhdHMocGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDIwKSArIDUpO1xyXG5cclxuICAgIC8qIEdhbWUgTG9vcCAqL1xyXG4gICAgbGV0IGxhc3RDb2xvckNoYW5nZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgdXBkYXRlKCk7XHJcblxyXG4gICAgLyogR2FtZSBMb29wICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIEZsdWlkXHJcbiAgICAgKiAgUHJlcGFyZXMgZnJhbWUgYnVmZmVycyBmb3IgcmVuZGVyaW5nXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIC8qIENvbG9yIEZvcm1hdHMgKi9cclxuICAgICAgICBjb25zdCB0ZXhUeXBlID0gY29sb3JGb3JtYXQuaGFsZkZsb2F0VGV4VHlwZTtcclxuICAgICAgICBjb25zdCByZ2JhID0gY29sb3JGb3JtYXQuZm9ybWF0UkdCQTtcclxuICAgICAgICBjb25zdCByZyA9IGNvbG9yRm9ybWF0LmZvcm1hdFJHO1xyXG4gICAgICAgIGNvbnN0IHIgPSBjb2xvckZvcm1hdC5mb3JtYXRSO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmluZyA9IGNvbG9yRm9ybWF0LnN1cHBvcnRMaW5lYXJGaWx0ZXJpbmcgPyB3ZWJHTC5MSU5FQVIgOiB3ZWJHTC5ORUFSRVNUO1xyXG5cclxuICAgICAgICAvKiBTZXQgc2ltdWxhdGlvbiBhbmQgcG9pbnRlciB3aWR0aCBhbmQgaGVpZ2h0ICovXHJcbiAgICAgICAgbGV0IHNpbVJlcyA9IGdldFJlc29sdXRpb24oUEFSQU1TLnNpbV9yZXNvbHV0aW9uKTtcclxuICAgICAgICBsZXQgZHllUmVzID0gZ2V0UmVzb2x1dGlvbihQQVJBTVMuZHllX3Jlc29sdXRpb24pO1xyXG4gICAgICAgIGxldCBibG9vbVJlcyA9IGdldFJlc29sdXRpb24oUEFSQU1TLmJsb29tX3Jlc29sdXRpb24pO1xyXG5cclxuICAgICAgICBzaW1XaWR0aCA9IHNpbVJlcy53aWR0aDtcclxuICAgICAgICBzaW1IZWlnaHQgPSBzaW1SZXMuaGVpZ2h0O1xyXG4gICAgICAgIGR5ZVdpZHRoID0gZHllUmVzLndpZHRoO1xyXG4gICAgICAgIGR5ZUhlaWdodCA9IGR5ZVJlcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIC8qIERlbnNpdHksIFZlbG9jaXR5LCBhbmQgQmxvb20gRG91YmxlIEZyYW1lIEJ1ZmZlcnMgKi9cclxuICAgICAgICBkZW5zaXR5ID0gIWRlbnNpdHkgP1xyXG4gICAgICAgICAgICBjcmVhdGVEb3VibGVGQk8oZHllV2lkdGgsIGR5ZUhlaWdodCwgcmdiYS5pbnRlcm5hbEZvcm1hdCwgcmdiYS5mb3JtYXQsIHRleFR5cGUsIGZpbHRlcmluZykgOlxyXG4gICAgICAgICAgICByZXNpemVEb3VibGVGQk8oZGVuc2l0eSwgZHllV2lkdGgsIGR5ZUhlaWdodCwgcmdiYS5pbnRlcm5hbEZvcm1hdCwgcmdiYS5mb3JtYXQsIHRleFR5cGUsIGZpbHRlcmluZyk7XHJcbiAgICAgICAgdmVsb2NpdHkgPSAhdmVsb2NpdHkgP1xyXG4gICAgICAgICAgICBjcmVhdGVEb3VibGVGQk8oc2ltV2lkdGgsIHNpbUhlaWdodCwgcmcuaW50ZXJuYWxGb3JtYXQsIHJnLmZvcm1hdCwgdGV4VHlwZSwgZmlsdGVyaW5nKSA6XHJcbiAgICAgICAgICAgIHJlc2l6ZURvdWJsZUZCTyh2ZWxvY2l0eSwgc2ltV2lkdGgsIHNpbUhlaWdodCwgcmcuaW50ZXJuYWxGb3JtYXQsIHJnLmZvcm1hdCwgdGV4VHlwZSwgZmlsdGVyaW5nKTtcclxuXHJcbiAgICAgICAgYmxvb20gPSBjcmVhdGVGQk8oYmxvb21SZXMud2lkdGgsIGJsb29tUmVzLmhlaWdodCwgcmdiYS5pbnRlcm5hbEZvcm1hdCwgcmdiYS5mb3JtYXQsIHRleFR5cGUsIGZpbHRlcmluZyk7XHJcblxyXG4gICAgICAgIC8qIERpdmVyZ2VuY2UsIEN1cmwsIGFuZCBQcmVzc3VyZSBGcmFtZSBCdWZmZXJzICovXHJcbiAgICAgICAgZGl2ZXJnZW5jZSA9IGNyZWF0ZUZCTyhzaW1XaWR0aCwgc2ltSGVpZ2h0LCByLmludGVybmFsRm9ybWF0LCByLmZvcm1hdCwgdGV4VHlwZSwgd2ViR0wuTkVBUkVTVCk7XHJcbiAgICAgICAgY3VybCA9IGNyZWF0ZUZCTyhzaW1XaWR0aCwgc2ltSGVpZ2h0LCByLmludGVybmFsRm9ybWF0LCByLmZvcm1hdCwgdGV4VHlwZSwgd2ViR0wuTkVBUkVTVCk7XHJcbiAgICAgICAgcHJlc3N1cmUgPSBjcmVhdGVEb3VibGVGQk8oc2ltV2lkdGgsIHNpbUhlaWdodCwgci5pbnRlcm5hbEZvcm1hdCwgci5mb3JtYXQsIHRleFR5cGUsIHdlYkdMLk5FQVJFU1QpO1xyXG5cclxuICAgICAgICAvKiBQb3B1bGF0ZSBibG9vbSdzIGZyYW1lIGJ1ZmZlciBzdGFjayBieSBpdGVyYXRpbmcgdGhyb3VnaCBibG9vbSBpdGVyYXRpb25zXHJcbiAgICAgICAgKiAgRWFjaCBpdGVyYXRpb24sIHdlIG9mZnNldCB0aGUgc2NhbGUgbGluZWFybHkgYXQgYSBjb25zdGFudCByYXRlKi9cclxuICAgICAgICBibG9vbUZyYW1lQnVmZmVycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUEFSQU1TLmJsb29tX2l0ZXJhdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAvKiBPZmZzZXQgc2NhbGUgYnkgYSBmYWN0b3Igb2YgMSBwbHVzIG91ciBjdXJyZW50IGl0ZXJhdGlvbiovXHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IGJsb29tUmVzLndpZHRoID4+IChpICsgMSk7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBibG9vbVJlcy5oZWlnaHQgPj4gKGkgKyAxKTtcclxuXHJcbiAgICAgICAgICAgIC8qIERvbid0IGNyZWF0ZSBmcmFtZSBidWZmZXIgKi9cclxuICAgICAgICAgICAgaWYgKHdpZHRoIDwgMiB8fCBoZWlnaHQgPCAyKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIC8qIENyZWF0ZSBGcmFtZSBCdWZmZXIgZm9yIEJsb29tIGl0ZXJhdGlvbnMgKi9cclxuICAgICAgICAgICAgbGV0IGZibyA9IGNyZWF0ZUZCTyh3aWR0aCwgaGVpZ2h0LCByZ2JhLmludGVybmFsRm9ybWF0LCByZ2JhLmZvcm1hdCwgdGV4VHlwZSwgZmlsdGVyaW5nKTtcclxuICAgICAgICAgICAgYmxvb21GcmFtZUJ1ZmZlcnMucHVzaChmYm8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBEb3VibGUgRnJhbWUgQnVmZmVyIE9iamVjdFxyXG4gICAgICogIENyZWF0ZXMgYW4gb2JqZWN0IHdpdGggMiBmcmFtZSBidWZmZXJzLCBvbmUgZm9yIHJlYWRzIGFuZCBvbmUgZm9yIHdyaXRlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB3OiBXaWR0aFxyXG4gICAgICogQHBhcmFtIGg6IEhlaWdodFxyXG4gICAgICogQHBhcmFtIGludGVybmFsRm9ybWF0OiBJbnRlcm5hbCBjb2xvciBmb3JtYXRzXHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0OiBDb2xvciBmb3JtYXRcclxuICAgICAqIEBwYXJhbSB0eXBlOiBUZXh0dXJlIHR5cGVcclxuICAgICAqIEBwYXJhbSBwYXJhbTogRXh0cmEgcGFyYW1ldGVyc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVEb3VibGVGQk8odywgaCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgcGFyYW0pIHtcclxuICAgICAgICAvKiBDcmVhdGUgZnJhbWUgYnVmZmVyIG9iamVjdHMgKi9cclxuICAgICAgICBsZXQgZmJvMSA9IGNyZWF0ZUZCTyh3LCBoLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBwYXJhbSk7XHJcbiAgICAgICAgbGV0IGZibzIgPSBjcmVhdGVGQk8odywgaCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgcGFyYW0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvKiBHZXQgYW5kIHNldCBCdWZmZXIgRGF0YSAqL1xyXG4gICAgICAgICAgICBnZXQgcmVhZCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYm8xO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQgcmVhZCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZmJvMSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQgd3JpdGUoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmJvMjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0IHdyaXRlKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmYm8yID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvKiBTd2FwIGRhdGEgYmV0d2VlbiBidWZmZXJzICovXHJcbiAgICAgICAgICAgIHN3YXAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGZibzE7XHJcbiAgICAgICAgICAgICAgICBmYm8xID0gZmJvMjtcclxuICAgICAgICAgICAgICAgIGZibzIgPSB0ZW1wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZCTyh3LCBoLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBwYXJhbSkge1xyXG4gICAgICAgIHdlYkdMLmFjdGl2ZVRleHR1cmUod2ViR0wuVEVYVFVSRTApO1xyXG4gICAgICAgIGxldCB0ZXh0dXJlID0gd2ViR0wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgIHdlYkdMLmJpbmRUZXh0dXJlKHdlYkdMLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgICAgIHdlYkdMLnRleFBhcmFtZXRlcmkod2ViR0wuVEVYVFVSRV8yRCwgd2ViR0wuVEVYVFVSRV9NSU5fRklMVEVSLCBwYXJhbSk7XHJcbiAgICAgICAgd2ViR0wudGV4UGFyYW1ldGVyaSh3ZWJHTC5URVhUVVJFXzJELCB3ZWJHTC5URVhUVVJFX01BR19GSUxURVIsIHBhcmFtKTtcclxuICAgICAgICB3ZWJHTC50ZXhQYXJhbWV0ZXJpKHdlYkdMLlRFWFRVUkVfMkQsIHdlYkdMLlRFWFRVUkVfV1JBUF9TLCB3ZWJHTC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgICB3ZWJHTC50ZXhQYXJhbWV0ZXJpKHdlYkdMLlRFWFRVUkVfMkQsIHdlYkdMLlRFWFRVUkVfV1JBUF9ULCB3ZWJHTC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgICB3ZWJHTC50ZXhJbWFnZTJEKHdlYkdMLlRFWFRVUkVfMkQsIDAsIGludGVybmFsRm9ybWF0LCB3LCBoLCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xyXG5cclxuICAgICAgICBsZXQgZmJvID0gd2ViR0wuY3JlYXRlRnJhbWVidWZmZXIoKTtcclxuICAgICAgICB3ZWJHTC5iaW5kRnJhbWVidWZmZXIod2ViR0wuRlJBTUVCVUZGRVIsIGZibyk7XHJcbiAgICAgICAgd2ViR0wuZnJhbWVidWZmZXJUZXh0dXJlMkQod2ViR0wuRlJBTUVCVUZGRVIsIHdlYkdMLkNPTE9SX0FUVEFDSE1FTlQwLCB3ZWJHTC5URVhUVVJFXzJELCB0ZXh0dXJlLCAwKTtcclxuICAgICAgICB3ZWJHTC52aWV3cG9ydCgwLCAwLCB3LCBoKTtcclxuICAgICAgICB3ZWJHTC5jbGVhcih3ZWJHTC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dHVyZSxcclxuICAgICAgICAgICAgZmJvLFxyXG4gICAgICAgICAgICB3aWR0aDogdyxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoLFxyXG4gICAgICAgICAgICBhdHRhY2goaWQpIHtcclxuICAgICAgICAgICAgICAgIHdlYkdMLmFjdGl2ZVRleHR1cmUod2ViR0wuVEVYVFVSRTAgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICB3ZWJHTC5iaW5kVGV4dHVyZSh3ZWJHTC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzaXplRG91YmxlRkJPKHRhcmdldCwgdywgaCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgcGFyYW0pIHtcclxuICAgICAgICB0YXJnZXQucmVhZCA9IHJlc2l6ZUZCTyh0YXJnZXQucmVhZCwgdywgaCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgcGFyYW0pO1xyXG4gICAgICAgIHRhcmdldC53cml0ZSA9IGNyZWF0ZUZCTyh3LCBoLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBwYXJhbSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNpemVGQk8odGFyZ2V0LCB3LCBoLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBwYXJhbSkge1xyXG4gICAgICAgIGxldCBuZXdGQk8gPSBjcmVhdGVGQk8odywgaCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgcGFyYW0pO1xyXG4gICAgICAgIFBST0dSQU1TLmNsZWFyUHJvZ3JhbS5iaW5kKCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFpKFBST0dSQU1TLmNsZWFyUHJvZ3JhbS51bmlmb3Jtcy51VGV4dHVyZSwgdGFyZ2V0LmF0dGFjaCgwKSk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFmKFBST0dSQU1TLmNsZWFyUHJvZ3JhbS51bmlmb3Jtcy52YWx1ZSwgMSk7XHJcbiAgICAgICAgYmxpdChuZXdGQk8uZmJvKTtcclxuICAgICAgICByZXR1cm4gbmV3RkJPO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRleHR1cmVBc3luYyh1cmwpIHtcclxuICAgICAgICBsZXQgdGV4dHVyZSA9IHdlYkdMLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgICAgICB3ZWJHTC5iaW5kVGV4dHVyZSh3ZWJHTC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgICAgICB3ZWJHTC50ZXhQYXJhbWV0ZXJpKHdlYkdMLlRFWFRVUkVfMkQsIHdlYkdMLlRFWFRVUkVfTUlOX0ZJTFRFUiwgd2ViR0wuTElORUFSKTtcclxuICAgICAgICB3ZWJHTC50ZXhQYXJhbWV0ZXJpKHdlYkdMLlRFWFRVUkVfMkQsIHdlYkdMLlRFWFRVUkVfTUFHX0ZJTFRFUiwgd2ViR0wuTElORUFSKTtcclxuICAgICAgICB3ZWJHTC50ZXhQYXJhbWV0ZXJpKHdlYkdMLlRFWFRVUkVfMkQsIHdlYkdMLlRFWFRVUkVfV1JBUF9TLCB3ZWJHTC5SRVBFQVQpO1xyXG4gICAgICAgIHdlYkdMLnRleFBhcmFtZXRlcmkod2ViR0wuVEVYVFVSRV8yRCwgd2ViR0wuVEVYVFVSRV9XUkFQX1QsIHdlYkdMLlJFUEVBVCk7XHJcbiAgICAgICAgd2ViR0wudGV4SW1hZ2UyRCh3ZWJHTC5URVhUVVJFXzJELCAwLCB3ZWJHTC5SR0IsIDEsIDEsIDAsIHdlYkdMLlJHQiwgd2ViR0wuVU5TSUdORURfQllURSwgbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMjU1LCAyNTVdKSk7XHJcblxyXG4gICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgIHRleHR1cmUsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgIGF0dGFjaChpZCkge1xyXG4gICAgICAgICAgICAgICAgd2ViR0wuYWN0aXZlVGV4dHVyZSh3ZWJHTC5URVhUVVJFMCArIGlkKTtcclxuICAgICAgICAgICAgICAgIHdlYkdMLmJpbmRUZXh0dXJlKHdlYkdMLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICAgIGltYWdlLnNyYyA9IHVybDtcclxuXHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBvYmoud2lkdGggPSBpbWFnZS53aWR0aDtcclxuICAgICAgICAgICAgb2JqLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuICAgICAgICAgICAgd2ViR0wuYmluZFRleHR1cmUod2ViR0wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICAgICAgICAgIHdlYkdMLnRleEltYWdlMkQod2ViR0wuVEVYVFVSRV8yRCwgMCwgd2ViR0wuUkdCLCB3ZWJHTC5SR0IsIHdlYkdMLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgICAgICByZXNpemVDYW52YXMoKTtcclxuICAgICAgICBpbnB1dCgpO1xyXG4gICAgICAgIGlmICghUEFSQU1TLnBhdXNlZClcclxuICAgICAgICAgICAgc3RlcCgwLjAxNik7XHJcbiAgICAgICAgcmVuZGVyKG51bGwpO1xyXG4gICAgICAgIGxldCBjYWxsYmFjayA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG5cclxuICAgICAgICAvLyAvKiBEZXN0cm95cyBpZiBEZWFjdGl2YXRlZCAqL1xyXG4gICAgICAgIC8vIGlmIChjYW5jZWxsZWQuaXMpIHtcclxuICAgICAgICAvLyAgICAgd2ViR0wuY2xlYXIod2ViR0wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcbiAgICAgICAgLy8gICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5wdXQoKSB7XHJcbiAgICAgICAgaWYgKHNwbGF0U3RhY2subGVuZ3RoID4gMClcclxuICAgICAgICAgICAgbXVsdGlwbGVTcGxhdHMoc3BsYXRTdGFjay5wb3AoKSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcCA9IHBvaW50ZXJzW2ldO1xyXG4gICAgICAgICAgICBpZiAocC5tb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgc3BsYXQocC54LCBwLnksIHAuZHgsIHAuZHksIHAuY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYoaSAhPT0gMSlcclxuICAgICAgICAgICAgICAgICAgICBwLm1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghUEFSQU1TLm11bHRpX2NvbG9yKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChsYXN0Q29sb3JDaGFuZ2VUaW1lICsgMTAwIDwgRGF0ZS5ub3coKSkge1xyXG4gICAgICAgICAgICBsYXN0Q29sb3JDaGFuZ2VUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHBvaW50ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgcC5jb2xvciA9IGdlbmVyYXRlQ29sb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGVwKGR0KSB7XHJcbiAgICAgICAgd2ViR0wuZGlzYWJsZSh3ZWJHTC5CTEVORCk7XHJcbiAgICAgICAgd2ViR0wudmlld3BvcnQoMCwgMCwgc2ltV2lkdGgsIHNpbUhlaWdodCk7XHJcblxyXG4gICAgICAgIFBST0dSQU1TLmN1cmxQcm9ncmFtLmJpbmQoKTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtMmYoUFJPR1JBTVMuY3VybFByb2dyYW0udW5pZm9ybXMudGV4ZWxTaXplLCAxLjAgLyBzaW1XaWR0aCwgMS4wIC8gc2ltSGVpZ2h0KTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtMWkoUFJPR1JBTVMuY3VybFByb2dyYW0udW5pZm9ybXMudVZlbG9jaXR5LCB2ZWxvY2l0eS5yZWFkLmF0dGFjaCgwKSk7XHJcbiAgICAgICAgYmxpdChjdXJsLmZibyk7XHJcblxyXG4gICAgICAgIFBST0dSQU1TLnZvcnRpY2l0eVByb2dyYW0uYmluZCgpO1xyXG4gICAgICAgIHdlYkdMLnVuaWZvcm0yZihQUk9HUkFNUy52b3J0aWNpdHlQcm9ncmFtLnVuaWZvcm1zLnRleGVsU2l6ZSwgMS4wIC8gc2ltV2lkdGgsIDEuMCAvIHNpbUhlaWdodCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFpKFBST0dSQU1TLnZvcnRpY2l0eVByb2dyYW0udW5pZm9ybXMudVZlbG9jaXR5LCB2ZWxvY2l0eS5yZWFkLmF0dGFjaCgwKSk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFpKFBST0dSQU1TLnZvcnRpY2l0eVByb2dyYW0udW5pZm9ybXMudUN1cmwsIGN1cmwuYXR0YWNoKDEpKTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtMWYoUFJPR1JBTVMudm9ydGljaXR5UHJvZ3JhbS51bmlmb3Jtcy5jdXJsLCBQQVJBTVMuY3VybCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFmKFBST0dSQU1TLnZvcnRpY2l0eVByb2dyYW0udW5pZm9ybXMuZHQsIGR0KTtcclxuICAgICAgICBibGl0KHZlbG9jaXR5LndyaXRlLmZibyk7XHJcbiAgICAgICAgdmVsb2NpdHkuc3dhcCgpO1xyXG5cclxuICAgICAgICBQUk9HUkFNUy5kaXZlcmdlbmNlUHJvZ3JhbS5iaW5kKCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTJmKFBST0dSQU1TLmRpdmVyZ2VuY2VQcm9ncmFtLnVuaWZvcm1zLnRleGVsU2l6ZSwgMS4wIC8gc2ltV2lkdGgsIDEuMCAvIHNpbUhlaWdodCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFpKFBST0dSQU1TLmRpdmVyZ2VuY2VQcm9ncmFtLnVuaWZvcm1zLnVWZWxvY2l0eSwgdmVsb2NpdHkucmVhZC5hdHRhY2goMCkpO1xyXG4gICAgICAgIGJsaXQoZGl2ZXJnZW5jZS5mYm8pO1xyXG5cclxuICAgICAgICBQUk9HUkFNUy5jbGVhclByb2dyYW0uYmluZCgpO1xyXG4gICAgICAgIHdlYkdMLnVuaWZvcm0xaShQUk9HUkFNUy5jbGVhclByb2dyYW0udW5pZm9ybXMudVRleHR1cmUsIHByZXNzdXJlLnJlYWQuYXR0YWNoKDApKTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtMWYoUFJPR1JBTVMuY2xlYXJQcm9ncmFtLnVuaWZvcm1zLnZhbHVlLCBQQVJBTVMucHJlc3N1cmUpO1xyXG4gICAgICAgIGJsaXQocHJlc3N1cmUud3JpdGUuZmJvKTtcclxuICAgICAgICBwcmVzc3VyZS5zd2FwKCk7XHJcblxyXG4gICAgICAgIFBST0dSQU1TLnByZXNzdXJlUHJvZ3JhbS5iaW5kKCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTJmKFBST0dSQU1TLnByZXNzdXJlUHJvZ3JhbS51bmlmb3Jtcy50ZXhlbFNpemUsIDEuMCAvIHNpbVdpZHRoLCAxLjAgLyBzaW1IZWlnaHQpO1xyXG4gICAgICAgIHdlYkdMLnVuaWZvcm0xaShQUk9HUkFNUy5wcmVzc3VyZVByb2dyYW0udW5pZm9ybXMudURpdmVyZ2VuY2UsIGRpdmVyZ2VuY2UuYXR0YWNoKDApKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFBBUkFNUy5wcmVzc3VyZV9pdGVyYXRpb247IGkrKykge1xyXG4gICAgICAgICAgICB3ZWJHTC51bmlmb3JtMWkoUFJPR1JBTVMucHJlc3N1cmVQcm9ncmFtLnVuaWZvcm1zLnVQcmVzc3VyZSwgcHJlc3N1cmUucmVhZC5hdHRhY2goMSkpO1xyXG4gICAgICAgICAgICBibGl0KHByZXNzdXJlLndyaXRlLmZibyk7XHJcbiAgICAgICAgICAgIHByZXNzdXJlLnN3YXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFBST0dSQU1TLmdyYWRpZW50U3VidHJhY3RQcm9ncmFtLmJpbmQoKTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtMmYoUFJPR1JBTVMuZ3JhZGllbnRTdWJ0cmFjdFByb2dyYW0udW5pZm9ybXMudGV4ZWxTaXplLCAxLjAgLyBzaW1XaWR0aCwgMS4wIC8gc2ltSGVpZ2h0KTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtMWkoUFJPR1JBTVMuZ3JhZGllbnRTdWJ0cmFjdFByb2dyYW0udW5pZm9ybXMudVByZXNzdXJlLCBwcmVzc3VyZS5yZWFkLmF0dGFjaCgwKSk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFpKFBST0dSQU1TLmdyYWRpZW50U3VidHJhY3RQcm9ncmFtLnVuaWZvcm1zLnVWZWxvY2l0eSwgdmVsb2NpdHkucmVhZC5hdHRhY2goMSkpO1xyXG4gICAgICAgIGJsaXQodmVsb2NpdHkud3JpdGUuZmJvKTtcclxuICAgICAgICB2ZWxvY2l0eS5zd2FwKCk7XHJcblxyXG4gICAgICAgIFBST0dSQU1TLmFkdmVjdGlvblByb2dyYW0uYmluZCgpO1xyXG4gICAgICAgIHdlYkdMLnVuaWZvcm0yZihQUk9HUkFNUy5hZHZlY3Rpb25Qcm9ncmFtLnVuaWZvcm1zLnRleGVsU2l6ZSwgMS4wIC8gc2ltV2lkdGgsIDEuMCAvIHNpbUhlaWdodCk7XHJcbiAgICAgICAgaWYgKCFjb2xvckZvcm1hdC5zdXBwb3J0TGluZWFyRmlsdGVyaW5nKVxyXG4gICAgICAgICAgICB3ZWJHTC51bmlmb3JtMmYoUFJPR1JBTVMuYWR2ZWN0aW9uUHJvZ3JhbS51bmlmb3Jtcy5keWVUZXhlbFNpemUsIDEuMCAvIHNpbVdpZHRoLCAxLjAgLyBzaW1IZWlnaHQpO1xyXG4gICAgICAgIGxldCB2ZWxvY2l0eUlkID0gdmVsb2NpdHkucmVhZC5hdHRhY2goMCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFpKFBST0dSQU1TLmFkdmVjdGlvblByb2dyYW0udW5pZm9ybXMudVZlbG9jaXR5LCB2ZWxvY2l0eUlkKTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtMWkoUFJPR1JBTVMuYWR2ZWN0aW9uUHJvZ3JhbS51bmlmb3Jtcy51U291cmNlLCB2ZWxvY2l0eUlkKTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtMWYoUFJPR1JBTVMuYWR2ZWN0aW9uUHJvZ3JhbS51bmlmb3Jtcy5kdCwgZHQpO1xyXG4gICAgICAgIHdlYkdMLnVuaWZvcm0xZihQUk9HUkFNUy5hZHZlY3Rpb25Qcm9ncmFtLnVuaWZvcm1zLmRpc3NpcGF0aW9uLCBQQVJBTVMudmVsb2NpdHkpO1xyXG4gICAgICAgIGJsaXQodmVsb2NpdHkud3JpdGUuZmJvKTtcclxuICAgICAgICB2ZWxvY2l0eS5zd2FwKCk7XHJcblxyXG4gICAgICAgIHdlYkdMLnZpZXdwb3J0KDAsIDAsIGR5ZVdpZHRoLCBkeWVIZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbG9yRm9ybWF0LnN1cHBvcnRMaW5lYXJGaWx0ZXJpbmcpXHJcbiAgICAgICAgICAgIHdlYkdMLnVuaWZvcm0yZihQUk9HUkFNUy5hZHZlY3Rpb25Qcm9ncmFtLnVuaWZvcm1zLmR5ZVRleGVsU2l6ZSwgMS4wIC8gZHllV2lkdGgsIDEuMCAvIGR5ZUhlaWdodCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFpKFBST0dSQU1TLmFkdmVjdGlvblByb2dyYW0udW5pZm9ybXMudVZlbG9jaXR5LCB2ZWxvY2l0eS5yZWFkLmF0dGFjaCgwKSk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFpKFBST0dSQU1TLmFkdmVjdGlvblByb2dyYW0udW5pZm9ybXMudVNvdXJjZSwgZGVuc2l0eS5yZWFkLmF0dGFjaCgxKSk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFmKFBST0dSQU1TLmFkdmVjdGlvblByb2dyYW0udW5pZm9ybXMuZGlzc2lwYXRpb24sIFBBUkFNUy5kaXNzaXBhdGlvbik7XHJcbiAgICAgICAgYmxpdChkZW5zaXR5LndyaXRlLmZibyk7XHJcbiAgICAgICAgZGVuc2l0eS5zd2FwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyKHRhcmdldCkge1xyXG4gICAgICAgIGlmIChQQVJBTVMucmVuZGVyX2Jsb29tKVxyXG4gICAgICAgICAgICBhcHBseUJsb29tKGRlbnNpdHkucmVhZCwgYmxvb20pO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwgfHwgIVBBUkFNUy50cmFuc3BhcmVudCkge1xyXG4gICAgICAgICAgICB3ZWJHTC5ibGVuZEZ1bmMod2ViR0wuT05FLCB3ZWJHTC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcclxuICAgICAgICAgICAgd2ViR0wuZW5hYmxlKHdlYkdMLkJMRU5EKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3ZWJHTC5kaXNhYmxlKHdlYkdMLkJMRU5EKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3aWR0aCA9IHRhcmdldCA9PSBudWxsID8gd2ViR0wuZHJhd2luZ0J1ZmZlcldpZHRoIDogZHllV2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHRhcmdldCA9PSBudWxsID8gd2ViR0wuZHJhd2luZ0J1ZmZlckhlaWdodCA6IGR5ZUhlaWdodDtcclxuXHJcbiAgICAgICAgd2ViR0wudmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGlmICghUEFSQU1TLnRyYW5zcGFyZW50KSB7XHJcbiAgICAgICAgICAgIFBST0dSQU1TLmNvbG9yUHJvZ3JhbS5iaW5kKCk7XHJcbiAgICAgICAgICAgIGxldCBiYyA9IFBBUkFNUy5iYWNrZ3JvdW5kX2NvbG9yO1xyXG4gICAgICAgICAgICB3ZWJHTC51bmlmb3JtNGYoUFJPR1JBTVMuY29sb3JQcm9ncmFtLnVuaWZvcm1zLmNvbG9yLCBiYy5yIC8gMjU1LCBiYy5nIC8gMjU1LCBiYy5iIC8gMjU1LCAxKTtcclxuICAgICAgICAgICAgYmxpdCh0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsICYmIFBBUkFNUy50cmFuc3BhcmVudCkge1xyXG4gICAgICAgICAgICBQUk9HUkFNUy5iYWNrZ3JvdW5kUHJvZ3JhbS5iaW5kKCk7XHJcbiAgICAgICAgICAgIHdlYkdMLnVuaWZvcm0xZihQUk9HUkFNUy5iYWNrZ3JvdW5kUHJvZ3JhbS51bmlmb3Jtcy5hc3BlY3RSYXRpbywgY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGJsaXQobnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoUEFSQU1TLnJlbmRlcl9zaGFkZXJzKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmFtID0gUEFSQU1TLnJlbmRlcl9ibG9vbSA/IFBST0dSQU1TLmRpc3BsYXlCbG9vbVNoYWRpbmdQcm9ncmFtIDogUFJPR1JBTVMuZGlzcGxheVNoYWRpbmdQcm9ncmFtO1xyXG4gICAgICAgICAgICBwcm9ncmFtLmJpbmQoKTtcclxuICAgICAgICAgICAgd2ViR0wudW5pZm9ybTJmKHByb2dyYW0udW5pZm9ybXMudGV4ZWxTaXplLCAxLjAgLyB3aWR0aCwgMS4wIC8gaGVpZ2h0KTtcclxuICAgICAgICAgICAgd2ViR0wudW5pZm9ybTFpKHByb2dyYW0udW5pZm9ybXMudVRleHR1cmUsIGRlbnNpdHkucmVhZC5hdHRhY2goMCkpO1xyXG4gICAgICAgICAgICBpZiAoUEFSQU1TLnJlbmRlcl9ibG9vbSkge1xyXG4gICAgICAgICAgICAgICAgd2ViR0wudW5pZm9ybTFpKHByb2dyYW0udW5pZm9ybXMudUJsb29tLCBibG9vbS5hdHRhY2goMSkpO1xyXG4gICAgICAgICAgICAgICAgd2ViR0wudW5pZm9ybTFpKHByb2dyYW0udW5pZm9ybXMudURpdGhlcmluZywgZGl0aGVyaW5nVGV4dHVyZS5hdHRhY2goMikpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gZ2V0VGV4dHVyZVNjYWxlKGRpdGhlcmluZ1RleHR1cmUsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgd2ViR0wudW5pZm9ybTJmKHByb2dyYW0udW5pZm9ybXMuZGl0aGVyU2NhbGUsIHNjYWxlLngsIHNjYWxlLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHByb2dyYW0gPSBQQVJBTVMucmVuZGVyX2Jsb29tID8gUFJPR1JBTVMuZGlzcGxheUJsb29tUHJvZ3JhbSA6IFBST0dSQU1TLmRpc3BsYXlQcm9ncmFtO1xyXG4gICAgICAgICAgICBwcm9ncmFtLmJpbmQoKTtcclxuICAgICAgICAgICAgd2ViR0wudW5pZm9ybTFpKHByb2dyYW0udW5pZm9ybXMudVRleHR1cmUsIGRlbnNpdHkucmVhZC5hdHRhY2goMCkpO1xyXG4gICAgICAgICAgICBpZiAoUEFSQU1TLnJlbmRlcl9ibG9vbSkge1xyXG4gICAgICAgICAgICAgICAgd2ViR0wudW5pZm9ybTFpKHByb2dyYW0udW5pZm9ybXMudUJsb29tLCBibG9vbS5hdHRhY2goMSkpO1xyXG4gICAgICAgICAgICAgICAgd2ViR0wudW5pZm9ybTFpKHByb2dyYW0udW5pZm9ybXMudURpdGhlcmluZywgZGl0aGVyaW5nVGV4dHVyZS5hdHRhY2goMikpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gZ2V0VGV4dHVyZVNjYWxlKGRpdGhlcmluZ1RleHR1cmUsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgd2ViR0wudW5pZm9ybTJmKHByb2dyYW0udW5pZm9ybXMuZGl0aGVyU2NhbGUsIHNjYWxlLngsIHNjYWxlLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBibGl0KHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwbHlCbG9vbShzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKGJsb29tRnJhbWVCdWZmZXJzLmxlbmd0aCA8IDIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGxhc3QgPSBkZXN0aW5hdGlvbjtcclxuXHJcbiAgICAgICAgd2ViR0wuZGlzYWJsZSh3ZWJHTC5CTEVORCk7XHJcbiAgICAgICAgUFJPR1JBTVMuYmxvb21QcmVGaWx0ZXJQcm9ncmFtLmJpbmQoKTtcclxuICAgICAgICBsZXQga25lZSA9IFBBUkFNUy50aHJlc2hvbGQgKiBQQVJBTVMuc29mdF9rbmVlICsgMC4wMDAxO1xyXG4gICAgICAgIGxldCBjdXJ2ZTAgPSBQQVJBTVMudGhyZXNob2xkIC0ga25lZTtcclxuICAgICAgICBsZXQgY3VydmUxID0ga25lZSAqIDI7XHJcbiAgICAgICAgbGV0IGN1cnZlMiA9IDAuMjUgLyBrbmVlO1xyXG4gICAgICAgIHdlYkdMLnVuaWZvcm0zZihQUk9HUkFNUy5ibG9vbVByZUZpbHRlclByb2dyYW0udW5pZm9ybXMuY3VydmUsIGN1cnZlMCwgY3VydmUxLCBjdXJ2ZTIpO1xyXG4gICAgICAgIHdlYkdMLnVuaWZvcm0xZihQUk9HUkFNUy5ibG9vbVByZUZpbHRlclByb2dyYW0udW5pZm9ybXMudGhyZXNob2xkLCBQQVJBTVMudGhyZXNob2xkKTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtMWkoUFJPR1JBTVMuYmxvb21QcmVGaWx0ZXJQcm9ncmFtLnVuaWZvcm1zLnVUZXh0dXJlLCBzb3VyY2UuYXR0YWNoKDApKTtcclxuICAgICAgICB3ZWJHTC52aWV3cG9ydCgwLCAwLCBsYXN0LndpZHRoLCBsYXN0LmhlaWdodCk7XHJcbiAgICAgICAgYmxpdChsYXN0LmZibyk7XHJcblxyXG4gICAgICAgIFBST0dSQU1TLmJsb29tQmx1clByb2dyYW0uYmluZCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvb21GcmFtZUJ1ZmZlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRlc3QgPSBibG9vbUZyYW1lQnVmZmVyc1tpXTtcclxuICAgICAgICAgICAgd2ViR0wudW5pZm9ybTJmKFBST0dSQU1TLmJsb29tQmx1clByb2dyYW0udW5pZm9ybXMudGV4ZWxTaXplLCAxLjAgLyBsYXN0LndpZHRoLCAxLjAgLyBsYXN0LmhlaWdodCk7XHJcbiAgICAgICAgICAgIHdlYkdMLnVuaWZvcm0xaShQUk9HUkFNUy5ibG9vbUJsdXJQcm9ncmFtLnVuaWZvcm1zLnVUZXh0dXJlLCBsYXN0LmF0dGFjaCgwKSk7XHJcbiAgICAgICAgICAgIHdlYkdMLnZpZXdwb3J0KDAsIDAsIGRlc3Qud2lkdGgsIGRlc3QuaGVpZ2h0KTtcclxuICAgICAgICAgICAgYmxpdChkZXN0LmZibyk7XHJcbiAgICAgICAgICAgIGxhc3QgPSBkZXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2ViR0wuYmxlbmRGdW5jKHdlYkdMLk9ORSwgd2ViR0wuT05FKTtcclxuICAgICAgICB3ZWJHTC5lbmFibGUod2ViR0wuQkxFTkQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gYmxvb21GcmFtZUJ1ZmZlcnMubGVuZ3RoIC0gMjsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGJhc2VUZXggPSBibG9vbUZyYW1lQnVmZmVyc1tpXTtcclxuICAgICAgICAgICAgd2ViR0wudW5pZm9ybTJmKFBST0dSQU1TLmJsb29tQmx1clByb2dyYW0udW5pZm9ybXMudGV4ZWxTaXplLCAxLjAgLyBsYXN0LndpZHRoLCAxLjAgLyBsYXN0LmhlaWdodCk7XHJcbiAgICAgICAgICAgIHdlYkdMLnVuaWZvcm0xaShQUk9HUkFNUy5ibG9vbUJsdXJQcm9ncmFtLnVuaWZvcm1zLnVUZXh0dXJlLCBsYXN0LmF0dGFjaCgwKSk7XHJcbiAgICAgICAgICAgIHdlYkdMLnZpZXdwb3J0KDAsIDAsIGJhc2VUZXgud2lkdGgsIGJhc2VUZXguaGVpZ2h0KTtcclxuICAgICAgICAgICAgYmxpdChiYXNlVGV4LmZibyk7XHJcbiAgICAgICAgICAgIGxhc3QgPSBiYXNlVGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2ViR0wuZGlzYWJsZSh3ZWJHTC5CTEVORCk7XHJcbiAgICAgICAgUFJPR1JBTVMuYmxvb21GaW5hbFByb2dyYW0uYmluZCgpO1xyXG4gICAgICAgIHdlYkdMLnVuaWZvcm0yZihQUk9HUkFNUy5ibG9vbUZpbmFsUHJvZ3JhbS51bmlmb3Jtcy50ZXhlbFNpemUsIDEuMCAvIGxhc3Qud2lkdGgsIDEuMCAvIGxhc3QuaGVpZ2h0KTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtMWkoUFJPR1JBTVMuYmxvb21GaW5hbFByb2dyYW0udW5pZm9ybXMudVRleHR1cmUsIGxhc3QuYXR0YWNoKDApKTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtMWYoUFJPR1JBTVMuYmxvb21GaW5hbFByb2dyYW0udW5pZm9ybXMuaW50ZW5zaXR5LCBQQVJBTVMuaW50ZW5zaXR5KTtcclxuICAgICAgICB3ZWJHTC52aWV3cG9ydCgwLCAwLCBkZXN0aW5hdGlvbi53aWR0aCwgZGVzdGluYXRpb24uaGVpZ2h0KTtcclxuICAgICAgICBibGl0KGRlc3RpbmF0aW9uLmZibyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3BsYXQoeCwgeSwgZHgsIGR5LCBjb2xvcikge1xyXG4gICAgICAgIHdlYkdMLnZpZXdwb3J0KDAsIDAsIHNpbVdpZHRoLCBzaW1IZWlnaHQpO1xyXG4gICAgICAgIFBST0dSQU1TLnNwbGF0UHJvZ3JhbS5iaW5kKCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFpKFBST0dSQU1TLnNwbGF0UHJvZ3JhbS51bmlmb3Jtcy51VGFyZ2V0LCB2ZWxvY2l0eS5yZWFkLmF0dGFjaCgwKSk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFmKFBST0dSQU1TLnNwbGF0UHJvZ3JhbS51bmlmb3Jtcy5hc3BlY3RSYXRpbywgY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTJmKFBST0dSQU1TLnNwbGF0UHJvZ3JhbS51bmlmb3Jtcy5wb2ludCwgeCAvIGNhbnZhcy53aWR0aCwgMS4wIC0geSAvIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHdlYkdMLnVuaWZvcm0zZihQUk9HUkFNUy5zcGxhdFByb2dyYW0udW5pZm9ybXMuY29sb3IsIGR4LCAtZHksIDEuMCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFmKFBST0dSQU1TLnNwbGF0UHJvZ3JhbS51bmlmb3Jtcy5yYWRpdXMsIFBBUkFNUy5lbWl0dGVyX3NpemUgLyAxMDAuMCk7XHJcbiAgICAgICAgYmxpdCh2ZWxvY2l0eS53cml0ZS5mYm8pO1xyXG4gICAgICAgIHZlbG9jaXR5LnN3YXAoKTtcclxuXHJcbiAgICAgICAgd2ViR0wudmlld3BvcnQoMCwgMCwgZHllV2lkdGgsIGR5ZUhlaWdodCk7XHJcbiAgICAgICAgd2ViR0wudW5pZm9ybTFpKFBST0dSQU1TLnNwbGF0UHJvZ3JhbS51bmlmb3Jtcy51VGFyZ2V0LCBkZW5zaXR5LnJlYWQuYXR0YWNoKDApKTtcclxuICAgICAgICB3ZWJHTC51bmlmb3JtM2YoUFJPR1JBTVMuc3BsYXRQcm9ncmFtLnVuaWZvcm1zLmNvbG9yLCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcclxuICAgICAgICBibGl0KGRlbnNpdHkud3JpdGUuZmJvKTtcclxuICAgICAgICBkZW5zaXR5LnN3YXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBsZVNwbGF0cyhhbW91bnQpIHtcclxuICAgICAgICBsZXQgY29sb3IgPSB7XHJcbiAgICAgICAgICAgIHI6IDI1NSxcclxuICAgICAgICAgICAgYjogMCxcclxuICAgICAgICAgICAgZzogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNwbGF0KDUwMCwgNTAwLCAxMDAsIDAsIGNvbG9yKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gICAgICAgIGlmIChjYW52YXMud2lkdGggIT0gY2FudmFzLmNsaWVudFdpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT0gY2FudmFzLmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29sb3IoKSB7XHJcbiAgICAgICAgbGV0IGMgPSBIU1Z0b1JHQihNYXRoLnJhbmRvbSgpLCAxLjAsIDEuMCk7XHJcbiAgICAgICAgYy5yICo9IDAuMTU7XHJcbiAgICAgICAgYy5nICo9IDAuMTU7XHJcbiAgICAgICAgYy5iICo9IDAuMTU7XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gSFNWdG9SR0IoaCwgcywgdikge1xyXG4gICAgICAgIGxldCByLCBnLCBiLCBpLCBmLCBwLCBxLCB0O1xyXG4gICAgICAgIGkgPSBNYXRoLmZsb29yKGggKiA2KTtcclxuICAgICAgICBmID0gaCAqIDYgLSBpO1xyXG4gICAgICAgIHAgPSB2ICogKDEgLSBzKTtcclxuICAgICAgICBxID0gdiAqICgxIC0gZiAqIHMpO1xyXG4gICAgICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoaSAlIDYpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgciA9IHYsIGcgPSB0LCBiID0gcDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByID0gcSwgZyA9IHYsIGIgPSBwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHIgPSBwLCBnID0gdiwgYiA9IHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgciA9IHAsIGcgPSBxLCBiID0gdjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICByID0gdCwgZyA9IHAsIGIgPSB2O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHIgPSB2LCBnID0gcCwgYiA9IHE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHIsXHJcbiAgICAgICAgICAgIGcsXHJcbiAgICAgICAgICAgIGJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJlc29sdXRpb24ocmVzb2x1dGlvbikge1xyXG4gICAgICAgIGxldCBhc3BlY3RSYXRpbyA9IHdlYkdMLmRyYXdpbmdCdWZmZXJXaWR0aCAvIHdlYkdMLmRyYXdpbmdCdWZmZXJIZWlnaHQ7XHJcbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvIDwgMSlcclxuICAgICAgICAgICAgYXNwZWN0UmF0aW8gPSAxLjAgLyBhc3BlY3RSYXRpbztcclxuXHJcbiAgICAgICAgbGV0IG1heCA9IE1hdGgucm91bmQocmVzb2x1dGlvbiAqIGFzcGVjdFJhdGlvKTtcclxuICAgICAgICBsZXQgbWluID0gTWF0aC5yb3VuZChyZXNvbHV0aW9uKTtcclxuXHJcbiAgICAgICAgaWYgKHdlYkdMLmRyYXdpbmdCdWZmZXJXaWR0aCA+IHdlYkdMLmRyYXdpbmdCdWZmZXJIZWlnaHQpXHJcbiAgICAgICAgICAgIHJldHVybiB7d2lkdGg6IG1heCwgaGVpZ2h0OiBtaW59O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHt3aWR0aDogbWluLCBoZWlnaHQ6IG1heH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGV4dHVyZVNjYWxlKHRleHR1cmUsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB3aWR0aCAvIHRleHR1cmUud2lkdGgsXHJcbiAgICAgICAgICAgIHk6IGhlaWdodCAvIHRleHR1cmUuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XHJcbiAgICAgICAgcG9pbnRlcnNbMF0ubW92ZWQgPSBwb2ludGVyc1swXS5kb3duO1xyXG4gICAgICAgIHBvaW50ZXJzWzBdLmR4ID0gKGUub2Zmc2V0WCAtIHBvaW50ZXJzWzBdLngpICogNS4wO1xyXG4gICAgICAgIHBvaW50ZXJzWzBdLmR5ID0gKGUub2Zmc2V0WSAtIHBvaW50ZXJzWzBdLnkpICogNS4wO1xyXG4gICAgICAgIHBvaW50ZXJzWzBdLnggPSBlLm9mZnNldFg7XHJcbiAgICAgICAgcG9pbnRlcnNbMF0ueSA9IGUub2Zmc2V0WTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgcG9pbnRlcnNbMF0uZG93biA9IHRydWU7XHJcbiAgICAgICAgcG9pbnRlcnNbMF0uY29sb3IgPSBnZW5lcmF0ZUNvbG9yKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICAgICAgICBwb2ludGVyc1swXS5kb3duID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLmNvZGUgPT09ICdLZXlQJylcclxuICAgICAgICAgICAgUEFSQU1TLnBhdXNlZCA9ICFQQVJBTVMucGF1c2VkO1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJyAnKVxyXG4gICAgICAgICAgICBzcGxhdFN0YWNrLnB1c2gocGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDIwKSArIDUpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXQgRGl0aGVyIFVSTFxyXG4gKiAgU2V0cyB0aGUgVVJMIHRvIGFuIGltYWdlIHRvIGJlIHVzZWQgZm9yIGRpdGhlcmluZy5cclxuICpcclxuICogQHBhcmFtIHVybDogUGF0aCB0byBkaXRoZXIgaW4gcm9vdCBkaXJlY3RvcnkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGl0aGVyVVJMKHVybCkgeyBkaXRoZXJVUkwgPSB1cmw7IH1cclxuXHJcbmNsYXNzIEdMUHJvZ3JhbSB7XHJcbiAgICBjb25zdHJ1Y3RvciAodmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlciwgd2ViR0wpIHtcclxuICAgICAgICB0aGlzLnVuaWZvcm1zID0ge307XHJcbiAgICAgICAgdGhpcy53ZWJHTCA9IHdlYkdMO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHdlYkdMLmNyZWF0ZVByb2dyYW0oKTtcclxuXHJcbiAgICAgICAgd2ViR0wuYXR0YWNoU2hhZGVyKHRoaXMucHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcclxuICAgICAgICB3ZWJHTC5hdHRhY2hTaGFkZXIodGhpcy5wcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcbiAgICAgICAgd2ViR0wubGlua1Byb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuXHJcbiAgICAgICAgaWYgKCF3ZWJHTC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSwgd2ViR0wuTElOS19TVEFUVVMpKVxyXG4gICAgICAgICAgICB0aHJvdyB3ZWJHTC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLnByb2dyYW0pO1xyXG5cclxuICAgICAgICBjb25zdCB1bmlmb3JtQ291bnQgPSB3ZWJHTC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMucHJvZ3JhbSwgd2ViR0wuQUNUSVZFX1VOSUZPUk1TKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaWZvcm1Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVuaWZvcm1OYW1lID0gd2ViR0wuZ2V0QWN0aXZlVW5pZm9ybSh0aGlzLnByb2dyYW0sIGkpLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbdW5pZm9ybU5hbWVdID0gd2ViR0wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgdW5pZm9ybU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiaW5kICgpIHtcclxuICAgICAgICB0aGlzLndlYkdMLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUG9pbnRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgLyoqIElkZW50aWZpZXIgZm9yIHRoZSBwb2ludGVyIG9iamVjdFxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIEB0eXBlIHtudW1iZXJ9IHZhbGlkIElEcyBhcmUgYWx3YXlzIGVpdGhlciB6ZXJvIG9yIGEgcG9zaXRpdmUgaW50ZWdlciAoLTEgaXMgaW52YWxpZCBhbmQgc2hvdWxkXHJcbiAgICAgICAgICogIGJlIG1hbmFnZWQgdXBvbiBjcmVhdGlvbiBvZiBhIG5ldyBwb2ludGVyIG9iamVjdC4pXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5pZCA9IC0xO1xyXG5cclxuICAgICAgICAvKiogSG9yaXpvbnRhbCAoeCkgYW5kIHZlcnRpY2FsICh5KSBwb3NpdGlvbiBvZiB0aGUgcG9pbnRlclxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG5cclxuICAgICAgICAvKiogVmVsb2NpdHkgZGF0YSBkZXNjcmliaW5nIHRoZSBwb3NpdGlvbmFsIGNoYW5nZSBpbiB0aGUgaG9yaXpvbnRhbCAoeCkgYW5kIHZlcnRpY2FsICh5KSBheGlzIG9mXHJcbiAgICAgICAgICogIHRoaXMgcG9pbnRlclxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmR4ID0gMDtcclxuICAgICAgICB0aGlzLmR5ID0gMDtcclxuXHJcbiAgICAgICAgLyoqIEJvb2xlYW4gZGF0YSBtZW1iZXIgdXNlZCB0byBzdG9yZSB3aGV0aGVyIG9yIG5vdCB0aGUgcG9pbnRlciBpcyBpbiBhIGNsaWNrZWQgc3RhdGUgYW5kL29yIGFcclxuICAgICAgICAgKiAgbW92aW5nIHN0YXRlXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKiogVGhlIGNvbG9yIHRoZSBwb2ludGVyIHdpbGwgcmVuZGVyIGFzXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jb2xvciA9IFszMCwgMCwgMzAwXTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9