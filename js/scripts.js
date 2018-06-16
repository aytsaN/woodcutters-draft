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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _states_StateLanding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states/StateLanding */ \"./js/states/StateLanding.js\");\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcz9lM2IxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3RhdGVMYW5kaW5nfSBmcm9tICcuL3N0YXRlcy9TdGF0ZUxhbmRpbmcnO1xyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ }),

/***/ "./js/states/StateBattle.js":
/*!**********************************!*\
  !*** ./js/states/StateBattle.js ***!
  \**********************************/
/*! exports provided: oStateBattle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"oStateBattle\", function() { return oStateBattle; });\nfunction StateBattle() {\r\n    this.oFeild = document.querySelector('#wrapperFields');\r\n\r\n}\r\n\r\nStateBattle.prototype.createFeild = function (sex, name) {\r\n    this.oFeild.classList.add('show');\r\n    alert(name);\r\n}\r\n\r\nlet oStateBattle = new StateBattle();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zdGF0ZXMvU3RhdGVCYXR0bGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zdGF0ZXMvU3RhdGVCYXR0bGUuanM/YThiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTdGF0ZUJhdHRsZSgpIHtcclxuICAgIHRoaXMub0ZlaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dyYXBwZXJGaWVsZHMnKTtcclxuXHJcbn1cclxuXHJcblN0YXRlQmF0dGxlLnByb3RvdHlwZS5jcmVhdGVGZWlsZCA9IGZ1bmN0aW9uIChzZXgsIG5hbWUpIHtcclxuICAgIHRoaXMub0ZlaWxkLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIGFsZXJ0KG5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IG9TdGF0ZUJhdHRsZSA9IG5ldyBTdGF0ZUJhdHRsZSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/states/StateBattle.js\n");

/***/ }),

/***/ "./js/states/StateCharacter.js":
/*!*************************************!*\
  !*** ./js/states/StateCharacter.js ***!
  \*************************************/
/*! exports provided: oStateCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"oStateCharacter\", function() { return oStateCharacter; });\n/* harmony import */ var _StateBattle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateBattle */ \"./js/states/StateBattle.js\");\n\r\n\r\n function StateCharacter() {\r\n     this.oWrapperCharacter = document.querySelector('#wrapperCharacter');\r\n     this.oBGMusic = document.querySelector('#bgmCharacter');\r\n\r\n     this.oPlayGame = document.querySelector('#btnPlay');\r\n     this.oPlayGame.addEventListener('click', this.createFeilds.bind(this));\r\n\r\n     this.oSexPlayer = document.querySelector('#sexes');\r\n     this.oSexPlayer.addEventListener('change', this.chooseSex.bind(this));\r\n     this.sex = 1;\r\n     this.bodyRivals = ['hair', 'head', 'rightArm', 'torso', 'leftArm', 'legs'];\r\n\r\n     this.oNamePlayer = document.querySelector('#settingInput');\r\n}\r\n\r\nStateCharacter.prototype.chooseSex = function (e) {\r\n    this.sex = e.target.value;\r\n\r\n    this.oCharacterPlayer = document.querySelector('#characterPlayer');\r\n    for(let i = 0; i < this.oCharacterPlayer.children.length; i ++ ) {\r\n        this.oCharacterPlayer.children[i].src = 'assets/img/player-' + this.sex + '/' + this.bodyRivals[i] + '.png';\r\n    }\r\n}\r\n\r\nStateCharacter.prototype.createState = function () {\r\n    this.oWrapperCharacter.classList.add('show');\r\n    this.oBGMusic.play();\r\n}\r\n\r\nStateCharacter.prototype.createFeilds = function () {\r\n    if(this.oNamePlayer.value) {\r\n        this.oBGMusic.pause();\r\n        this.oWrapperCharacter.classList.remove('show');\r\n        _StateBattle__WEBPACK_IMPORTED_MODULE_0__[\"oStateBattle\"].createFeild(this.sex, this.oNamePlayer.value);\r\n    } else {\r\n        alert('Как мне к тебе обращаться? Введи свое имя ниже');\r\n    }\r\n}\r\n\r\nlet oStateCharacter = new StateCharacter();\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zdGF0ZXMvU3RhdGVDaGFyYWN0ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zdGF0ZXMvU3RhdGVDaGFyYWN0ZXIuanM/NDQ3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29TdGF0ZUJhdHRsZX0gZnJvbSBcIi4vU3RhdGVCYXR0bGVcIjtcclxuXHJcbiBmdW5jdGlvbiBTdGF0ZUNoYXJhY3RlcigpIHtcclxuICAgICB0aGlzLm9XcmFwcGVyQ2hhcmFjdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dyYXBwZXJDaGFyYWN0ZXInKTtcclxuICAgICB0aGlzLm9CR011c2ljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnbUNoYXJhY3RlcicpO1xyXG5cclxuICAgICB0aGlzLm9QbGF5R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5QbGF5Jyk7XHJcbiAgICAgdGhpcy5vUGxheUdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyZWF0ZUZlaWxkcy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgdGhpcy5vU2V4UGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NleGVzJyk7XHJcbiAgICAgdGhpcy5vU2V4UGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hvb3NlU2V4LmJpbmQodGhpcykpO1xyXG4gICAgIHRoaXMuc2V4ID0gMTtcclxuICAgICB0aGlzLmJvZHlSaXZhbHMgPSBbJ2hhaXInLCAnaGVhZCcsICdyaWdodEFybScsICd0b3JzbycsICdsZWZ0QXJtJywgJ2xlZ3MnXTtcclxuXHJcbiAgICAgdGhpcy5vTmFtZVBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5nSW5wdXQnKTtcclxufVxyXG5cclxuU3RhdGVDaGFyYWN0ZXIucHJvdG90eXBlLmNob29zZVNleCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0aGlzLnNleCA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIHRoaXMub0NoYXJhY3RlclBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFyYWN0ZXJQbGF5ZXInKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm9DaGFyYWN0ZXJQbGF5ZXIuY2hpbGRyZW4ubGVuZ3RoOyBpICsrICkge1xyXG4gICAgICAgIHRoaXMub0NoYXJhY3RlclBsYXllci5jaGlsZHJlbltpXS5zcmMgPSAnYXNzZXRzL2ltZy9wbGF5ZXItJyArIHRoaXMuc2V4ICsgJy8nICsgdGhpcy5ib2R5Uml2YWxzW2ldICsgJy5wbmcnO1xyXG4gICAgfVxyXG59XHJcblxyXG5TdGF0ZUNoYXJhY3Rlci5wcm90b3R5cGUuY3JlYXRlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm9XcmFwcGVyQ2hhcmFjdGVyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIHRoaXMub0JHTXVzaWMucGxheSgpO1xyXG59XHJcblxyXG5TdGF0ZUNoYXJhY3Rlci5wcm90b3R5cGUuY3JlYXRlRmVpbGRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYodGhpcy5vTmFtZVBsYXllci52YWx1ZSkge1xyXG4gICAgICAgIHRoaXMub0JHTXVzaWMucGF1c2UoKTtcclxuICAgICAgICB0aGlzLm9XcmFwcGVyQ2hhcmFjdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICBvU3RhdGVCYXR0bGUuY3JlYXRlRmVpbGQodGhpcy5zZXgsIHRoaXMub05hbWVQbGF5ZXIudmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgn0JrQsNC6INC80L3QtSDQuiDRgtC10LHQtSDQvtCx0YDQsNGJ0LDRgtGM0YHRjz8g0JLQstC10LTQuCDRgdCy0L7QtSDQuNC80Y8g0L3QuNC20LUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBvU3RhdGVDaGFyYWN0ZXIgPSBuZXcgU3RhdGVDaGFyYWN0ZXIoKTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/states/StateCharacter.js\n");

/***/ }),

/***/ "./js/states/StateLanding.js":
/*!***********************************!*\
  !*** ./js/states/StateLanding.js ***!
  \***********************************/
/*! exports provided: StateLanding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StateLanding\", function() { return StateLanding; });\n/* harmony import */ var _StateCharacter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateCharacter */ \"./js/states/StateCharacter.js\");\n\r\n\r\nfunction StateLanding() {\r\n    this.oWpapperLanding = document.querySelector('#wpapperLanding');\r\n    this.btnStart = document.querySelector('#btnStart');\r\n\r\n\r\n}\r\n\r\nStateLanding.prototype.createBtnEvents = function() {\r\n    this.btnStart.addEventListener('click', this.startGame.bind(this));\r\n}\r\n\r\nStateLanding.prototype.startGame = function() {\r\n    this.oWpapperLanding.classList.remove('show');\r\n    _StateCharacter__WEBPACK_IMPORTED_MODULE_0__[\"oStateCharacter\"].createState();\r\n   // this.oBGMusic.pause();\r\n}\r\n\r\n// StateLanding.prototype.playMusic = function () {\r\n//     this.oBGMusic.play();\r\n// }\r\n\r\nwindow.onload = () => {\r\n    let oStateLanding = new StateLanding();\r\n    oStateLanding.createBtnEvents();\r\n    //oStateLanding.playMusic();\r\n}\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zdGF0ZXMvU3RhdGVMYW5kaW5nLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvc3RhdGVzL1N0YXRlTGFuZGluZy5qcz9hYmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7b1N0YXRlQ2hhcmFjdGVyfSBmcm9tICcuL1N0YXRlQ2hhcmFjdGVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdGF0ZUxhbmRpbmcoKSB7XHJcbiAgICB0aGlzLm9XcGFwcGVyTGFuZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cGFwcGVyTGFuZGluZycpO1xyXG4gICAgdGhpcy5idG5TdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5TdGFydCcpO1xyXG5cclxuXHJcbn1cclxuXHJcblN0YXRlTGFuZGluZy5wcm90b3R5cGUuY3JlYXRlQnRuRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKSk7XHJcbn1cclxuXHJcblN0YXRlTGFuZGluZy5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLm9XcGFwcGVyTGFuZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICBvU3RhdGVDaGFyYWN0ZXIuY3JlYXRlU3RhdGUoKTtcclxuICAgLy8gdGhpcy5vQkdNdXNpYy5wYXVzZSgpO1xyXG59XHJcblxyXG4vLyBTdGF0ZUxhbmRpbmcucHJvdG90eXBlLnBsYXlNdXNpYyA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIHRoaXMub0JHTXVzaWMucGxheSgpO1xyXG4vLyB9XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgbGV0IG9TdGF0ZUxhbmRpbmcgPSBuZXcgU3RhdGVMYW5kaW5nKCk7XHJcbiAgICBvU3RhdGVMYW5kaW5nLmNyZWF0ZUJ0bkV2ZW50cygpO1xyXG4gICAgLy9vU3RhdGVMYW5kaW5nLnBsYXlNdXNpYygpO1xyXG59XHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/states/StateLanding.js\n");

/***/ })

/******/ });