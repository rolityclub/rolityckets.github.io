





window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);



(window.webpackJsonp = window.webpackJsonp || []).push([
    ["app"], {
        "./src/js/app.js": function(t, e, s) {
            "use strict";
            s.r(e), s("./src/js/utils/vh.js"), s("./src/js/utils/resizeHandler.js");
            const i = "touchevents",
                o = "no-touchevents",
                n = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    const s = t.document.documentElement;
                    return "ontouchstart" in t || t.DocumentTouch && document instanceof DocumentTouch ? (e && (s.classList.remove(o), s.classList.add(i)), !0) : (e && (s.classList.remove(i), s.classList.add(o)), !1)
                };
            n(window, !0);
            const r = document.documentElement,
                a = document.body,
                h = 1366,
                l = ".LocomotiveScroll",
                c = {
                    namespace: l,
                    ready: "ready".concat(l),
                    scrolling: "scrolling".concat(l),
                    update: "update".concat(l),
                    destroy: "destroy".concat(l),
                    stop: "stop".concat(l),
                    play: "play".concat(l),
                    call: "call".concat(l),
                    scrollTo: "scrollTo".concat(l),
                    top: {
                        hidden: "SCROLL.TOP.HIDDEN",
                        visible: "SCROLL.TOP.VISIBLE"
                    }
                },
                d = "Ajax.reset",
                u = "Ajax.initBase",
                m = "AjaxInStart",
                g = "AjaxInEnd",
                p = "AjaxOutStart",
                v = "POPUP.opened",
                y = "CURSOR.move",
                L = "PRELOADER.done",
                E = "LAZYLOAD.update",
                w = "LAZYLOAD.load",
                f = "ACCORDION.change",
                S = "VIDEO.playing",
                C = "VIDEO.paused",
                b = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e ? window.innerWidth < t : window.innerWidth >= t
                },
                A = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    return n(t)
                };
            Document.prototype.ready = t => {
                t && "function" == typeof t && document.addEventListener("DOMContentLoaded", (() => {
                    if ("interactive" === document.readyState || "complete" === document.readyState) return t()
                }))
            };
            const x = function(t, e) {
                    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
                    const i = new CustomEvent(t, {
                        detail: e
                    });
                    s.dispatchEvent(i)
                },
                D = (t, e, s) => (1 - s) * t + s * e;
            s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var P = s("./node_modules/gsap/index.js");
            class M {
                constructor() {
                    this.holder = document.querySelector('[data-component="transitions-overlay"]'), this.settings = {
                        DOM: {
                            title: "[data-transition-title]",
                            page: "[data-scroller]"
                        },
                        classShown: "is-shown",
                        classHidden: "is-hidden",
                        animation: {
                            ease: "power4.inOut",
                            pageMovementValue: window.innerHeight / 4,
                            clip: {
                                start: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                                mid: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                                end: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
                            }
                        }
                    }
                }
                init() {
                    this.title = this.holder.querySelector(this.settings.DOM.title), this.page = document.querySelector(this.settings.DOM.page)
                }
                updateTitle(t) {
                    const {
                        next: e
                    } = t, {
                        namespace: s
                    } = e;
                    this.title.innerHTML = s
                }
                showOverlay(t) {
                    return setTimeout((() => {
                        this.updateTitle(t)
                    }), 400), new Promise((t => {
                        const e = P.a.timeline();
                        return e.fromTo(this.holder, {
                            clipPath: this.settings.animation.clip.start,
                            webkitClipPath: this.settings.animation.clip.start
                        }, {
                            duration: 1,
                            ease: "power3.in",
                            clipPath: this.settings.animation.clip.mid,
                            webkitClipPath: this.settings.animation.clip.mid
                        }), P.a.delayedCall(.5, (() => {
                            this.holder.classList.add(this.settings.classShown)
                        })), e.play().eventCallback("onComplete", (() => {
                            t(e)
                        }))
                    }))
                }
                hideOverlay() {
                    return P.a.set(this.page, {
                        opacity: 0
                    }), new Promise((t => {
                        const e = P.a.timeline();
                        return e.fromTo(this.holder, {
                            clipPath: this.settings.animation.clip.mid,
                            webkitClipPath: this.settings.animation.clip.mid
                        }, {
                            duration: 1,
                            ease: "power3.out",
                            clipPath: this.settings.animation.clip.end,
                            webkitClipPath: this.settings.animation.clip.end
                        }), P.a.delayedCall(.2, (() => {
                            P.a.to(this.page, {
                                opacity: 1,
                                clearProps: "opacity",
                                duration: 1.2,
                                ease: this.settings.animation.ease
                            })
                        })), P.a.delayedCall(.4, (() => {
                            this.holder.classList.remove(this.settings.classShown), this.holder.classList.add(this.settings.classHidden)
                        })), e.play().delay(.5).eventCallback("onComplete", (() => {
                            t(e), this.holder.classList.remove(this.settings.classHidden)
                        }))
                    }))
                }
            }
            var k = s("./node_modules/@barba/core/dist/barba.umd.js"),
                T = s.n(k);
            class O {
                constructor() {
                    this.animationOverlay = new M, this.progressClass = "is-animating", this.linkActiveClass = "is-active", this.ignoreAttr = "data-ajax-ignore"
                }
                updateNavLink(t) {
                    let {
                        next: e
                    } = t;
                    this.links = [...document.querySelectorAll(".main-nav__link"), ...document.querySelectorAll(".footer-nav__link")];
                    const {
                        href: s
                    } = e.url ? e.url : e;
                    this.links.forEach((t => {
                        t.getAttribute("href") === s ? this.setActiveLink(t) : this.unsetActiveLink(t)
                    }))
                }
                setActiveLink(t) {
                    t.classList.add(this.linkActiveClass)
                }
                unsetActiveLink(t) {
                    t.classList.remove(this.linkActiveClass)
                }
                init() {
                    this.animationOverlay.init(), this.updateNavLink({
                        next: window.location
                    }), T.a.hooks.beforeLeave((t => {
                        r.classList.add(this.progressClass), x(m, t)
                    })), T.a.hooks.leave((t => {
                        x(g, t)
                    })), T.a.hooks.enter((t => {
                        x(p, t)
                    })), T.a.hooks.after((t => {
                        const {
                            next: e
                        } = t, {
                            html: s
                        } = e, i = /body\sclass=['|"]([^'|"]*)['|"]/.exec(s);
                        this.updateNavLink(t), x(d, t), i && i[1] ? document.body.setAttribute("class", i[1]) : document.body.removeAttribute("class")
                    })), T.a.init({
                        preventRunning: !0,
                        timeout: 5e3,
                        requestError: (t, e, s, i) => ("click" === e && i.status && 404 === i.status && T.a.go("/404"), !1),
                        transitions: [{
                            leave: async t => {
                                await this.animationOverlay.showOverlay(t), x(c.stop, {
                                    scroller: a
                                }), x(c.scrollTo, {
                                    target: 0,
                                    duration: 0,
                                    disableLerp: !0
                                }), x(u, t)
                            },
                            after: async () => {
                                P.a.delayedCall(1, (() => x(c.update))), await this.animationOverlay.hideOverlay(), x(c.play, {
                                    scroller: a
                                }), r.classList.remove(this.progressClass)
                            }
                        }],
                        prevent: t => {
                            let {
                                el: e
                            } = t;
                            return e.hasAttribute(this.ignoreAttr)
                        }
                    })
                }
            }
            class q {
                constructor(t) {
                    let {
                        holder: e,
                        settings: s
                    } = t;
                    this.holder = e, this.settings = {
                        activeClass: "is-active",
                        hasActiveItemClass: "has-active-item",
                        accordion: !0,
                        setInitialState: !0,
                        DOM: {
                            item: "[data-accordion-item]",
                            trigger: "[data-accordion-trigger]",
                            content: "[data-accordion-content]"
                        },
                        animation: {
                            duration: .6,
                            ease: "circ.inOut",
                            height: 0,
                            opacity: 0,
                            onComplete: () => {
                                x(c.update), x(f)
                            }
                        },
                        ...s
                    }, this.previousTarget = {}, this.activeTarget = {}, this.onClickListener = t => this.onClick(t), this.items = this.settings.accordion ? [...this.holder.querySelectorAll(this.settings.DOM.item)] : [this.holder]
                }
                init() {
                    this.setInitialState(), this.attachEvents()
                }
                setInitialState() {
                    this.items.forEach((t => {
                        const e = t.querySelector(this.settings.DOM.content),
                            s = t.querySelector(this.settings.DOM.trigger);
                        P.a.set(e, {
                            height: 0,
                            opacity: 0
                        }), this.isActive(t) && this.settings.setInitialState && (this.setActiveItem({
                            content: e,
                            trigger: s,
                            item: t
                        }), P.a.set(e, {
                            clearProps: "height",
                            opacity: 1
                        }))
                    }))
                }
                attachEvents() {
                    this.items.forEach((t => t.addEventListener("click", this.onClickListener))), document.addEventListener(m, (() => this.destroy()), {
                        once: !0
                    })
                }
                onClick(t) {
                    const {
                        target: e
                    } = t, s = e.closest(this.settings.DOM.trigger), i = e.closest(this.settings.DOM.item) || this.holder, o = i.querySelector(this.settings.DOM.content);
                    s && (this.setActiveItem({
                        content: o,
                        trigger: s,
                        item: i
                    }), this.animate())
                }
                setActiveItem(t) {
                    this.previousTarget = this.activeTarget, this.activeTarget = t
                }
                animate() {
                    this.isActive() ? this.close() : this.open()
                }
                open() {
                    this.settings.accordion && this.previousTarget.item && this.close();
                    const {
                        content: t,
                        item: e
                    } = this.activeTarget;
                    P.a.to(t, {
                        ...this.settings.animation,
                        height: t.scrollHeight,
                        opacity: 1,
                        y: 0,
                        onComplete: () => {
                            x(c.scrollTo, {
                                target: e,
                                duration: 500,
                                offset: -100
                            }), x(c.update), x(f)
                        }
                    }), e.classList.add(this.settings.activeClass), this.holder.classList.add(this.settings.hasActiveItemClass)
                }
                close() {
                    const {
                        content: t,
                        item: e
                    } = this.previousTarget;
                    P.a.to(t, this.settings.animation), e.classList.remove(this.settings.activeClass), this.holder.classList.remove(this.settings.hasActiveItemClass)
                }
                isActive(t) {
                    const {
                        item: e
                    } = this.activeTarget;
                    return t ? t.classList.contains(this.settings.activeClass) : e.classList.contains(this.settings.activeClass)
                }
                destroy() {
                    this.items.forEach((t => {
                        t.removeEventListener("click", this.onClickListener)
                    }))
                }
            }
            var I = s("./node_modules/gsap/Draggable.js");
            P.a.registerPlugin(I.a);
            class B {
                constructor(t, e) {
                    this.holder = t, this.settings = {
                        DOM: {
                            leftSide: '[data-side="left"]',
                            rightSide: '[data-side="right"]',
                            draggable: "[data-draggable]",
                            trigger: "[data-trigger]",
                            captionBefore: '[data-caption="before"]',
                            captionAfter: '[data-caption="after"]'
                        },
                        ...e
                    }
                }
                init() {
                    this.leftSide = this.holder.querySelector(this.settings.DOM.leftSide), this.rightSide = this.holder.querySelector(this.settings.DOM.rightSide), this.draggable = this.holder.querySelector(this.settings.DOM.draggable), this.trigger = this.holder.querySelector(this.settings.DOM.trigger), this.captionBefore = this.holder.querySelector(this.settings.DOM.captionBefore), this.captionAfter = this.holder.querySelector(this.settings.DOM.captionAfter), this.bounds = this.holder.getBoundingClientRect(), this.attachEvents(), this.initDraggable()
                }
                initDraggable() {
                    const {
                        width: t
                    } = this.bounds;
                    this.onHandleDragListener = () => this.onHandleDrag(), [this.draggableInstance] = I.a.create(this.draggable, {
                        trigger: this.trigger,
                        bounds: this.holder,
                        allowNativeTouchScrolling: !1,
                        type: "x",
                        edgeResistance: 1,
                        dragResistance: 0,
                        onDrag: this.onHandleDragListener
                    }), P.a.set(this.draggableInstance.target, {
                        left: 0,
                        x: t / 100 * 50
                    }), P.a.set(this.rightSide, {
                        clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)"
                    })
                }
                onHandleDrag() {
                    const {
                        endX: t,
                        maxX: e,
                        getDirection: s
                    } = this.draggableInstance, i = 100 * P.a.utils.normalize(0, e, t);
                    P.a.set(this.rightSide, {
                        clipPath: "polygon(".concat(i, "% 0, 100% 0, 100% 100%, ").concat(i, "% 100%)")
                    }, 0), t >= e / 2 && "right" === s() && this.showLeftCaption(), t <= e / 2 && "left" === s() && this.showRightCaption()
                }
                showLeftCaption() {
                    P.a.to(this.captionBefore, {
                        duration: .3,
                        opacity: 1,
                        yPercent: 0
                    }), P.a.to(this.captionAfter, {
                        duration: .3,
                        opacity: 0,
                        yPercent: 100
                    })
                }
                showRightCaption() {
                    P.a.to(this.captionBefore, {
                        duration: .3,
                        opacity: 0,
                        yPercent: 100
                    }), P.a.to(this.captionAfter, {
                        duration: .3,
                        opacity: 1,
                        yPercent: 0
                    })
                }
                attachEvents() {
                    this.onResizeListener = () => this.onResize(), this.destroyListener = () => this.destroy(), window.addEventListener("resize", this.onResizeListener), document.addEventListener(m, this.destroyListener)
                }
                onResize() {
                    this.bounds = this.holder.getBoundingClientRect(), this.recalculateDragPosition()
                }
                recalculateDragPosition() {
                    const {
                        endX: t,
                        maxX: e
                    } = this.draggableInstance, {
                        width: s
                    } = this.bounds, i = t ? s * t / e : s / 100 * 50;
                    P.a.set(this.draggable, {
                        x: i
                    })
                }
                destroy() {
                    window.removeEventListener("resize", this.onResizeListener), document.removeEventListener(m, this.destroyListener)
                }
            }
            class j {
                constructor(t, e) {
                    this.holder = t, this.settings = {
                        target: "[data-zoom-target]",
                        activeClass: "zoom--is-active",
                        ...e
                    }
                }
                init() {
                    this.target = this.holder.querySelector(this.settings.target), this.target && this.attachEvents()
                }
                attachEvents() {
                    this.onButtonEnter = () => this.onEnter(), this.onButtonLeave = () => this.onLeave(), this.onDestroy = () => this.destroy(), this.target.addEventListener("mouseenter", this.onButtonEnter), this.target.addEventListener("mouseleave", this.onButtonLeave), this.target.addEventListener("touchstart", this.onButtonEnter), this.target.addEventListener("touchend", this.onButtonLeave), document.addEventListener(m, this.onDestroy)
                }
                onEnter() {
                    !this.isActive && this.holder.classList.add(this.activeClass)
                }
                onLeave() {
                    this.isActive && this.holder.classList.remove(this.activeClass)
                }
                get isActive() {
                    return this.holder.classList.contains(this.activeClass)
                }
                get activeClass() {
                    const {
                        activeClass: t
                    } = this.settings;
                    return "string" == typeof t ? t : [...t]
                }
                destroy() {
                    this.target.removeEventListener("mouseenter", this.onButtonEnter), this.target.removeEventListener("mouseleave", this.onButtonLeave), this.target.removeEventListener("touchstart", this.onButtonEnter), this.target.removeEventListener("touchend", this.onButtonLeave), document.removeEventListener(m, this.onDestroy)
                }
            }

            function R(t, e) {
                return t.transformEl ? e.find(t.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                }) : e
            }
            var V = s("./node_modules/gsap/InertiaPlugin.js"),
                z = s("./node_modules/swiper/swiper.esm.js");
            P.a.registerPlugin(I.a, V.a);
            class _ {
                constructor(t) {
                    let {
                        holder: e,
                        settings: s
                    } = t;
                    this.holder = e, this.settings = {
                        ...s
                    }, this.clickListener = t => this.onClick(t)
                }
                init() {
                    this.controls = [...this.holder.querySelectorAll("[data-control]")], this.controlsData = this.controls.map((t => ({
                        name: t.getAttribute("data-control"),
                        control: t
                    }))), this.attachEvents()
                }
                
                closeAnimation(t) {
                    return P.a.to(this.holder, {
                        duration: .7,
                        y: "150%",
                        onComplete: t && t
                    })
                }
            
                destroy() {
                    this.holder.remove()
                }
            }
            class H {
                constructor(t) {
                    let {
                        cursor: e,
                        settings: s
                    } = t;
                    this.cursor = e, this.settings = s, this.hoverClass = this.settings.modifier ? "".concat(this.cursor.hoverClass, "--").concat(this.settings.modifier) : this.cursor.hoverClass
                }
                init() {
                    this.cursor.holder && (this.elements = [...document.querySelectorAll(this.settings.selector)], this.attachEvents())
                }
                attachEvents() {
                    this.elements.forEach((t => {
                        const e = {
                                node: t,
                                theme: t.dataset.cursorTheme
                            },
                            s = () => this.enterEvent(e),
                            i = () => this.leaveEvent(e),
                            o = () => this.moveEvent(e);
                        t.addEventListener(this.cursor.enterEvent, s), t.addEventListener(this.cursor.leaveEvent, i), t.addEventListener("mousemove", o), document.addEventListener(m, (() => {
                            t.removeEventListener(this.cursor.enterEvent, s), t.removeEventListener(this.cursor.leaveEvent, i), t.removeEventListener("mousemove", o), this.leaveEvent(e)
                        }), {
                            once: !0
                        })
                    }))
                }
                moveEvent(t) {
                    const {
                        theme: e
                    } = t;
                    this.cursor.addClass(this.hoverClass), e && this.cursor.addTheme({
                        theme: e
                    })
                }
                enterEvent(t) {
                    this.moveEvent(t), this.show(t)
                }
                leaveEvent(t) {
                    const {
                        theme: e
                    } = t;
                    this.cursor.removeClass(this.hoverClass), e && this.cursor.removeTheme(), this.hide(t)
                }
                show() {
                    return this
                }
                hide() {
                    return this
                }
            }
            const F = new class {
                constructor(t) {
                    Object.assign(this, t), this.moveEvent = "mousemove", this.enterEvent = "mouseenter", this.leaveEvent = "mouseleave", this.clientX = -200, this.clientY = -200
                }
                init() {
                    this.holder && !A() && (this.holder.classList.add(this.activeClass), this.attachEvents())
                }
                attachEvents() {
                    this.moveListener = t => this.setPosition(t), this.destroyListener = () => this.destroyCursor(), this.onMouseDown = () => this.setCursorState.down(), this.onMouseUp = () => this.setCursorState.up(), document.addEventListener(this.moveEvent, this.moveListener, {
                        passive: !0
                    }), document.addEventListener("mousedown", this.onMouseDown), document.addEventListener("mouseup", this.onMouseUp), document.addEventListener(m, this.destroyListener)
                }
                get setCursorState() {
                    return {
                        down: () => this.holder.classList.add(this.pressedClass),
                        up: () => this.holder.classList.remove(this.pressedClass)
                    }
                }
                setPosition(t) {
                    const {
                        clientX: e,
                        clientY: s
                    } = t;
                    this.clientX = e, this.clientY = s, x(y, {
                        x: this.clientX,
                        y: this.clientY
                    }), this.revealCursor(), this.render()
                }
                addClass(t) {
                    this.holder.classList.add(t)
                }
                addTheme(t) {
                    let {
                        theme: e
                    } = t;
                    this.holder.setAttribute("data-theme", e)
                }
                removeTheme() {
                    this.holder.removeAttribute("data-theme")
                }
                removeClass(t) {
                    this.holder.classList.remove(t)
                }
                hasClass(t) {
                    return this.holder.classList.contains(t)
                }
                render() {
                    P.a.killTweensOf(this.holder), P.a.to(this.holder, {
                        duration: this.animationSpeed,
                        x: this.clientX,
                        y: this.clientY
                    })
                }
                draw() {
                    this.removeClass(this.stoppedClass), P.a.ticker.add(this.renderListener)
                }
                stopCursor() {
                    this.addClass(this.stoppedClass), P.a.ticker.remove(this.renderListener)
                }
                revealCursor() {
                    r.classList.remove(this.hiddenClass)
                }
                hideCursor() {
                    r.classList.add(this.hiddenClass)
                }
                destroyCursor() {
                    this.removeTheme(), this.hideCursor(), this.removeClass(this.hoverClass), document.removeEventListener(m, this.destroyListener), document.removeEventListener("mousedown", this.onMouseDown), document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener(this.moveEvent, this.moveListener), this.stopCursor()
                }
            }({
                holder: document.querySelector("[data-page-cursor]"),
                activeClass: "custom-cursor--enabled",
                stoppedClass: "cursor--is-stopped",
                hiddenClass: "cursor--is-hidden",
                hoverClass: "cursor--is-hover",
                pressedClass: "cursor--pressed",
                animationSpeed: .1
            });
            class W {
                constructor(t, e, s) {
                    this.holder = t, this.ctx = e, this.settings = {
                        triggerEvent: "click",
                        activeClass: "menu--opened",
                        DOM: {
                            scroller: "[data-menu-scroller]"
                        },
                        ...s
                    }, this.showListener = () => this.setState().active(), this.hideListener = () => this.setState().innactive(), this.onClickListener = t => this.onClick(t), this.destroyListener = () => this.destroy(), this.clickOutsideListener = t => {
                        const {
                            target: e
                        } = t;
                        this.isActive && !this.ctx.contains(e) && this.setState().innactive()
                    }, this.initialized = !1
                }
                init() {
                    if (!this.holder) throw new Error("holder should be a DOM element");
                    this.scroller = this.ctx.querySelector(this.settings.DOM.scroller), this.onInit(), this.initialized = !0, this.attachEvents()
                }
                onInit() {
                    return this
                }
                attachEvents() {
                    this.holder.addEventListener(this.settings.triggerEvent, this.onClickListener), document.addEventListener(m, this.destroyListener)
                }
                onClick(t) {
                    const {
                        active: e,
                        innactive: s
                    } = this.setState();
                    t && t.preventDefault(), this.isActive ? s() : e()
                }
                setState() {
                    var t = this;
                    return {
                        active: function() {
                            let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            e && r.classList.add(t.settings.activeClass), t.onActiveState()
                        },
                        innactive: function() {
                            let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            e && r.classList.remove(t.settings.activeClass), t.onInnactiveState()
                        }
                    }
                }
                onActiveState() {
                    x(c.stop, {
                        scroller: this.scroller
                    }), x("NAV_ACTIVE")
                }
                onInnactiveState() {
                    x(c.play, {
                        scroller: this.scroller
                    }), x("NAV_INNACTIVE")
                }
                destroy() {
                    this.holder.removeEventListener(this.settings.triggerEvent, this.onClickListener), document.removeEventListener(m, this.destroyListener), this.setState().innactive(), this.initialized = !1
                }
                get isActive() {
                    return r.classList.contains(this.settings.activeClass)
                }
            }
            class U {
                constructor(t, e) {
                    this.holder = t, this.core = e, this.init()
                }
                init() {
                    this.category = this.holder.getAttribute("data-filter-category"), this.setInitialState(), this.attachEvents()
                }
                setInitialState() {
                    this.category === this.core.activeCategory && this.setActiveState()
                }
                attachEvents() {
                    this.onCategoryClickListener = () => this.onCategoryClick(), this.holder.addEventListener("click", this.onCategoryClickListener)
                }
                onCategoryClick() {
                    this.core.setCategory(this.category), this.core.reset(), this.setActiveState()
                }
                setActiveState() {
                    this.holder.classList.add(this.core.settings.filterActiveClass)
                }
                setInnactiveState() {
                    this.holder.classList.remove(this.core.settings.filterActiveClass)
                }
            }
            s("./node_modules/core-js/modules/web.url-search-params.js");
            class X {
                constructor() {
                    this.settings = {
                        id: "category"
                    }, this.params = new URLSearchParams(window.location.search)
                }
                setQuery(t) {
                    this.params.set(this.settings.id, t), window.history.replaceState(null, null, "?".concat(this.settings.id, "=").concat(t))
                }
                deleteQuery() {
                    return this.params.delete(this.settings.id)
                }
                getQuery() {
                    return this.params.get(this.settings.id)
                }
            }
            class N {
                constructor(t) {
                    let {
                        holder: e,
                        settings: s
                    } = t;
                    this.holder = e, this.settings = {
                        filterActiveClass: "is-active",
                        emptyBlockClass: "no-results",
                        DOM: {
                            categoryToggle: "[data-filter-category]",
                            content: "[data-filter-content]",
                            resultBlock: "[data-news-categories]"
                        },
                        ...s
                    }
                }
                init() {
                    this.content = this.holder.querySelector(this.settings.DOM.content), this.categoryToggles = [...this.holder.querySelectorAll(this.settings.DOM.categoryToggle)], this.resultBlocks = [...this.holder.querySelectorAll(this.settings.DOM.resultBlock)], this.searchQueryHelper = new X, this.activeCategory = this.searchQueryHelper.getQuery() || "all", this.searchQueryHelper.setQuery(this.activeCategory), this.togglesInstances = this.categoryToggles.map((t => new U(t, this))), this.resultsData = this.resultBlocks.map((t => ({
                        itemCategories: t.getAttribute("data-news-categories").split(",").map((t => t.trim())),
                        block: t
                    }))), this.updateItems()
                }
                setCategory(t) {
                    this.activeCategory = t, this.searchQueryHelper.setQuery(this.activeCategory), this.updateItems()
                }
                updateItems() {
                    const t = this.resultsData.map((t => {
                            const {
                                itemCategories: e,
                                block: s
                            } = t;
                            return !e.includes(this.activeCategory) && s
                        })).filter(Boolean),
                        e = this.isAll ? [] : t;
                    this.resultBlocks.length && P.a.set(this.resultBlocks, {
                        display: "block"
                    }), e.length && P.a.set(e, {
                        display: "none"
                    }), e.length === this.resultBlocks.length ? this.content.classList.add(this.settings.emptyBlockClass) : this.content.classList.remove(this.settings.emptyBlockClass), x(c.update)
                }
                reset() {
                    this.categoryToggles.forEach((t => t.classList.remove(this.settings.filterActiveClass)))
                }
                get isAll() {
                    return "all" === this.activeCategory
                }
            }
            class Y {
                constructor(t, e) {
                    this.holder = t, this.settings = {
                        submitButton: 'button[type="submit"]',
                        successPopup: "[data-success-popup]",
                        privacyCheckbox: 'input[type="checkbox"][name="agreement"]',
                        ...e
                    }
                }
                init() {
                    this.allInputs = [...this.holder.querySelectorAll(".form-control")], this.successPopup = document.querySelector(this.settings.successPopup), this.privacyCheckbox = this.holder.querySelector(this.settings.privacyCheckbox), this.submitButton = this.holder.querySelector(this.settings.submitButton), this.privacyCheckbox && this.onCheckboxChange(), this.attachEvents()
                }
                attachEvents() {
                    this.onFormSubmitListener = t => this.onFormSubmit(t), this.onFormResetListener = t => this.onFormReset(t), this.onCheckboxListener = t => this.onCheckboxChange(t), this.holder.addEventListener("wpcf7mailsent", this.onFormSubmitListener), this.holder.addEventListener("reset", this.onFormResetListener), this.privacyCheckbox && this.privacyCheckbox.addEventListener("change", this.onCheckboxListener), window.wpcf7 && window.wpcf7.init && window.wpcf7.init(this.holder), document.addEventListener(m, (() => this.destroy()), {
                        once: !0
                    })
                }
                onCheckboxChange() {
                    this.privacyCheckbox.checked ? this.submitButton.removeAttribute("disabled") : this.submitButton.setAttribute("disabled", !0)
                }
                onFormSubmit() {
                    this.successPopup && this.successPopup.Popup.open(), this.holder.reset()
                }
                onFormReset(t) {
                    t.preventDefault(), this.allInputs.forEach((t => {
                        t.value = "", t.hasAttribute("data-has-value") && t.removeAttribute("data-has-value")
                    })), this.holder.reset()
                }
                destroy() {
                    this.holder.removeEventListener("wpcf7mailsent", this.onFormSubmitListener), this.holder.removeEventListener("reset", this.onFormResetListener)
                }
            }
            var Q = s("./node_modules/choices.js/public/assets/scripts/choices.js"),
                J = s.n(Q);
            class K {
                constructor(t) {
                    let {
                        holder: e,
                        settings: s
                    } = t;
                    this.holder = e, this.settings = {
                        ...s,
                        selector: ".js-custom-select",
                        AJAX_ATTR: "data-ajax",
                        select: {
                            itemSelectText: null,
                            shouldSort: !1,
                            placeholder: this.holder.getAttribute("data-placeholder") || null
                        }
                    }, this.showListener = () => this.onDropdownShow(), this.hideListener = () => this.onDropdownHide(), this.changeListener = t => this.onChange(t)
                }
                init() {
                    this.setClassNamesOption(), this.choices = new J.a(this.holder, this.settings.select), this.holder.choices = this.choices, this.attachEvents()
                }
                onMouseEnter() {
                    return x(c.stop), this
                }
                onMouseLeave() {
                    return x(c.play), this
                }
                setClassNamesOption() {
                    const t = this.settings.selector.slice(1),
                        e = [...this.holder.classList].filter((e => e !== t));
                    this.settings.select.classNames = {
                        containerOuter: "choices ".concat(e.join(" "))
                    }
                }
                loadAJAX() {
                    this.choices.clearChoices(), this.choices.setChoices((async () => {
                        try {
                            const t = await fetch(this.ajaxDataPath),
                                e = await t.json();
                            return this.holder.removeAttribute(this.settings.AJAX_ATTR), e
                        } catch (t) {
                            return []
                        }
                    }), "value", "label", !0)
                }
                attachEvents() {
                    this.holder.addEventListener("showDropdown", this.showListener), this.holder.addEventListener("hideDropdown", this.hideListener), this.holder.addEventListener("change", this.changeListener), document.addEventListener(m, (() => this.destroy()), {
                        once: !0
                    })
                }
                onChange(t) {
                    let {
                        detail: e
                    } = t;
                    const {
                        value: s
                    } = e, {
                        containerOuter: i
                    } = this.choices;
                    s ? i.element.setAttribute("data-has-value", !0) : i.element.removeAttribute("data-has-value")
                }
                onDropdownShow() {
                    this.choices.dropdown.element.addEventListener("mouseenter", this.onMouseEnter), this.choices.dropdown.element.addEventListener("mouseleave", this.onMouseLeave), this.onMouseEnter()
                }
                onDropdownHide() {
                    this.choices.dropdown.element.removeEventListener("mouseenter", this.onMouseEnter), this.choices.dropdown.element.removeEventListener("mouseleave", this.onMouseLeave), this.onMouseLeave()
                }
                get ajaxDataPath() {
                    return this.holder.getAttribute(this.settings.AJAX_ATTR)
                }
                destroy() {
                    this.holder.removeEventListener("showDropdown", this.showListener), this.holder.removeEventListener("hideDropdown", this.hideListener), this.holder.removeEventListener("change", this.changeListener)
                }
            }

            function Z(t) {
                const e = ".js-custom-select",
                    s = t ? [...t.querySelectorAll(e)] : [...document.querySelectorAll(e)];
                A() || (s.filter((t => !t.choices)).forEach((t => {
                    new K({
                        holder: t
                    }).init()
                })), document.addEventListener("SELECT.update", (t => {
                    let {
                        detail: {
                            context: e
                        }
                    } = t;
                    return Z(e)
                })))
            }
            s("./node_modules/air-datepicker/air-datepicker.css");
            var G = s("./node_modules/air-datepicker/index.es.js"),
                $ = s("./node_modules/air-datepicker/locale/en.js"),
                tt = s.n($);

            function et() {
                Z(), document.querySelectorAll(".contact-form").forEach((t => {
                    new Y(t).init()
                })), document.querySelectorAll('[data-component="datepicker"]').forEach((t => {
                    const e = t.querySelector("input"),
                        s = window.innerWidth < 1024;
                    return new G.a(e, {
                        minDate: Date.now(),
                        isMobile: s,
                        container: s ? document.body : t,
                        autoClose: !0,
                        locale: tt.a
                    })
                }))
            }
            class st extends W {
                constructor(t, e) {
                    super(t, document, {
                        activeClass: "popup--opened",
                        popupActiveClass: "is-active",
                        popupInnactiveClass: "is-hidden",
                        DOM: {
                            scroller: "[data-popup-scroller]",
                            target: "data-toggle-popup",
                            close: "[data-popup-close]",
                            overlay: "[data-popup-overlay]"
                        },
                        ...e
                    }), this.activeData = {}, this.openListener = t => this.open(t), this.closeListener = t => this.close(t), this.onDocumentClick = t => this.setOverlayOpen(t)
                }
                init() {
                    this.targetID = this.holder.getAttribute(this.settings.DOM.target), this.targetDOM = document.getElementById(this.targetID), this.targetDOM && (this.popupClose = [...this.targetDOM.querySelectorAll(this.settings.DOM.close)], this.scroller = this.targetDOM.querySelector(this.settings.DOM.scroller), this.popupOverlay = this.targetDOM.querySelector(this.settings.DOM.overlay), this.targetDOM.classList.add(this.settings.popupInnactiveClass), this.targetDOM.Popup = this, this.attachEvents())
                }
                get transitionDuration() {
                    return parseFloat(getComputedStyle(this.targetDOM).transitionDuration)
                }
                setOverlayOpen(t) {
                    const {
                        clientX: e,
                        clientY: s
                    } = t, {
                        innerWidth: i,
                        innerHeight: o
                    } = window, n = Math.ceil(100 * e / i), r = Math.ceil(100 * s / o);
                    this.clipStart = "circle(0% at ".concat(n, "% ").concat(r, "%)"), this.clipEnd = "circle(150% at ".concat(n, "% ").concat(r, "%)"), P.a.set(this.popupOverlay, {
                        visibility: "visible"
                    }), P.a.fromTo(this.popupOverlay, {
                        clipPath: this.clipStart
                    }, {
                        duration: .7,
                        clipPath: this.clipEnd
                    })
                }
                setOverlayClose() {
                    P.a.fromTo(this.popupOverlay, {
                        clipPath: this.clipEnd
                    }, {
                        clipPath: this.clipStart,
                        duration: .5,
                        onComplete: () => P.a.set(this.popupOverlay, {
                            visibility: "hidden"
                        })
                    })
                }
                attachEvents() {
                    this.onCloseListener = () => this.setState().innactive(), this.onOpenListener = t => this.updateData(t), this.popupClose.length && this.popupClose.forEach((t => t.addEventListener("click", this.closeListener))), this.popupOverlay.addEventListener("click", this.closeListener), document.addEventListener(d, this.onCloseListener), document.addEventListener(v, this.onOpenListener), this.isStatic || this.holder.addEventListener("click", this.openListener)
                }
                updateData(t) {
                    let {
                        detail: e
                    } = t;
                    this.activeData = e
                }
                open(t) {
                    t && t.preventDefault(), this.setState().active()
                }
                close(t) {
                    t && t.preventDefault();
                    const {
                        innactive: e
                    } = this.setState();
                    this.isActive && e()
                }
                get data() {
                    return {
                        target: this.targetDOM,
                        toggle: this.holder,
                        instance: this
                    }
                }
                onActiveState() {
                    const t = [...this.targetDOM.querySelectorAll('[data-component="lazyload"]:not(.loaded)')];
                    this.disableScroll(), this.targetDOM.classList.remove(this.settings.popupInnactiveClass), this.targetDOM.classList.add(this.settings.popupActiveClass), this.activeData = this.data, x(v, this.data), setTimeout((() => {
                        x(w, t)
                    }), 300)
                }
                onInnactiveState() {
                    this.enableScroll(), this.targetDOM.classList.remove(this.settings.popupActiveClass), this.activeData = {}, this.targetDOM.classList.add(this.settings.popupInnactiveClass), x("POPUP.closed", this.data)
                }
                disableScroll() {
                    this.shouldLockScroll && x(c.stop, {
                        scroller: this.scroller
                    })
                }
                enableScroll() {
                    this.shouldLockScroll && x(c.play, {
                        scroller: this.scroller
                    })
                }
                hidePopup() {
                    setTimeout((() => {
                        this.targetDOM.classList.add(this.settings.popupInnactiveClass)
                    }), 1e3 * this.transitionDuration)
                }
                destroy() {
                    this.popupClose.length && this.popupClose.forEach((t => t.removeEventListener("click", this.onCloseListener))), this.popupOverlay.removeEventListener("click", this.closeListener), this.holder.removeEventListener("click", this.openListener), document.removeEventListener(d, this.onCloseListener), document.removeEventListener(v, this.onOpenListener)
                }
                get shouldLockScroll() {
                    return !this.targetDOM.classList.contains("popup--no-scroll-lock")
                }
                get isStatic() {
                    return this.holder.hasAttribute("data-static")
                }
                closePopup() {
                    super.setState().innactive()
                }
                revealPopup() {
                    super.setState().active()
                }
            }

            function it(t) {
                const e = "[data-toggle-popup]";
                (t ? t.querySelectorAll(e) : document.querySelectorAll(e)).forEach((t => {
                    new st(t).init()
                })), document.addEventListener("POPUP.update", (t => {
                    let {
                        detail: {
                            context: e
                        }
                    } = t;
                    return it(e)
                }))
            }

            function ot() {
                document.querySelectorAll('[data-component="header"]').forEach((t => {
                        [...t.querySelectorAll('[data-component="nav-toggle"]')].forEach((e => {
                            new W(e, t).init()
                        }))
                    })), document.querySelectorAll('[data-component="accordion"]').forEach((t => {
                        new q({
                            holder: t
                        }).init()
                    })), document.querySelectorAll('[data-component="open-close"]').forEach((t => {
                        new q({
                            holder: t,
                            settings: {
                                accordion: !1,
                                setInitialState: !1
                            }
                        }).init()
                    })), document.querySelectorAll('[data-component="before-after"]').forEach((t => {
                        new B(t).init()
                    })),
                    function() {
                        const t = {
                            drag: {
                                Instance: H,
                                settings: {
                                    selector: '[data-cursor="drag"]',
                                    modifier: "drag"
                                }
                            },
                            next: {
                                Instance: H,
                                settings: {
                                    selector: '[data-cursor="next"]',
                                    modifier: "next"
                                }
                            }
                        };
                        F.init(), Object.values(t).forEach((t => {
                            let {
                                Instance: e,
                                ...s
                            } = t;
                            const i = new e({
                                cursor: F,
                                ...s
                            });
                            A() || i.init()
                        }))
                    }(), document.querySelectorAll('[data-component="filter"]').forEach((t => {
                        new N({
                            holder: t
                        }).init()
                    })), document.querySelectorAll('[data-component="button-zoom"]').forEach((t => {
                        new j(t).init()
                    })),
                    function() {
                        const t = b(768);
                        document.querySelectorAll('[data-component="drag-carousel"]').forEach((t => {
                            const e = t.querySelector("[data-draggable]"),
                                s = t.querySelector("[data-swiper-scrollbar]"),
                                i = t.querySelector(".swiper-scrollbar-drag"),
                                {
                                    width: o
                                } = e.getBoundingClientRect(),
                                {
                                    width: n
                                } = s.getBoundingClientRect(),
                                {
                                    width: r
                                } = t.getBoundingClientRect(),
                                a = r / o * 100,
                                h = n / (n * a / 100) * 100 - 100;

                            function l() {
                                const t = P.a.utils.normalize(this.maxX, this.minX, this.x),
                                    e = P.a.utils.mapRange(0, 1, 0, h, t);
                                P.a.set(i, {
                                    xPercent: e
                                })
                            }
                            P.a.set(i, {
                                width: "".concat(a, "%")
                            }), I.a.create(e, {
                                type: "x",
                                bounds: t,
                                inertia: !0,
                                edgeResistance: .65,
                                onDrag: l,
                                onThrowUpdate: l,
                                onDragEnd: l
                            })
                        })), document.querySelectorAll('[data-component="stacked-carousel"]').forEach((e => {
                            const s = e.querySelector("[data-next-button]"),
                                i = new z.a(e, {
                                    init: !1,
                                    effect: "cards",
                                    perspective: !0,
                                    allowTouchMove: !1,
                                    watchSlidesProgress: !0,
                                    virtualTranslate: !0,
                                    loopedSlides: 3,
                                    preventInteractionOnTransition: !1,
                                    speed: 700,
                                    loop: !0,
                                    on: {
                                        setTranslate: e => {
                                            const {
                                                slides: s
                                            } = e, i = {
                                                slideShadows: !1,
                                                transformEl: null
                                            };
                                            for (let e = 0; e < s.length; e += 1) {
                                                const o = s.eq(e),
                                                    n = o[0].progress,
                                                    r = Math.min(Math.max(n, -4), 4),
                                                    a = o[0].swiperSlideOffset;
                                                let h = -Math.abs(Math.round(n)) + s.length,
                                                    l = t ? 20 * (0 - r) - a : 1 - r - a,
                                                    c = t ? 0 : "".concat(10 * -(0 - r), "px"),
                                                    d = 1 + .05 * r;
                                                r < 0 ? l = "".concat(l, "px") : r > 0 ? (l = "".concat(l, "px"), c = "200vh", d = .5, h = s.length + 1) : l = "".concat(l, "px");
                                                const u = "".concat(r < 0 ? 1 + (1 - d) * r : 1 - (1 - d) * r),
                                                    m = "translate3d(".concat(l, ", ").concat(c, ", 0px) scale(").concat(u, ")");
                                                o[0].style.zIndex = h, R(i, o).transform(m)
                                            }
                                        },
                                        setTransition: (t, e) => {
                                            t.slides.transition(e),
                                                function(t) {
                                                    const {
                                                        swiper: e,
                                                        duration: s,
                                                        transformEl: i,
                                                        allSlides: o
                                                    } = t, {
                                                        slides: n,
                                                        activeIndex: r,
                                                        $wrapperEl: a
                                                    } = e;
                                                    if (e.params.virtualTranslate && 0 !== s) {
                                                        let t, s = !1;
                                                        t = o ? i ? n.find(i) : n : i ? n.eq(r).find(i) : n.eq(r), t.transitionEnd((() => {
                                                            if (s) return;
                                                            if (!e || e.destroyed) return;
                                                            s = !0, e.animating = !1;
                                                            const t = ["webkitTransitionEnd", "transitionend"];
                                                            for (let e = 0; e < t.length; e += 1) a.trigger(t[e])
                                                        }))
                                                    }
                                                }({
                                                    swiper: t,
                                                    duration: e,
                                                    transformEl: null
                                                })
                                        }
                                    }
                                }),
                                o = () => i.slideNext();
                            s && s.addEventListener("click", o), e.addEventListener("click", o), document.addEventListener(m, (() => {
                                s && s.removeEventListener("click", o), e.removeEventListener("click", o)
                            }), {
                                once: !0
                            }), i.init(), x(E)
                        }))
                    }(), it(), et()
            }
            s("./node_modules/locomotive-scroll/dist/locomotive-scroll.css");
            var nt = s("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js"),
                rt = s("./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js");
            class at {
                constructor() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.settings = t, this.scrollData = {
                        scroll: {
                            x: 0,
                            y: 0
                        }
                    }
                }
                init() {
                    this.attachEvents(), this.initScroll()
                }
                initScroll() {
                    this.scroll = new rt.a(this.settings), this.smoothOnload = r.classList.contains(this.scroll.smoothClass), window.customScroll = this, this.checkPageTop(), this.scroll.on("scroll", (t => {
                        this.scrollData = {
                            ...t,
                            pageTop: this.pageTop
                        }, this.setDirection(), this.checkPageTop(), x(c.scrolling, this.scrollData)
                    })), this.scroll.on("call", ((t, e, s) => {
                        s && x(c.call, {
                            name: t,
                            direction: e,
                            obj: s
                        }, s.el)
                    })), r.classList.remove(this.settings.offTopClass)
                }
                checkPageTop() {
                    this.scrollData && this.scrollData.scroll.y > this.settings.scrollTreshold ? (r.classList.add(this.settings.offTopClass), r.classList.remove(this.settings.onTopClass), this.pageTop = !1) : (r.classList.add(this.settings.onTopClass), r.classList.remove(this.settings.offTopClass), this.pageTop = !0)
                }
                setDirection() {
                    r.dataset.scrollDirection = this.scrollData.direction || "down"
                }
                update() {
                    this.scroll.update()
                }
                attachEvents() {
                    document.addEventListener(c.ready, (() => {
                        r.classList.remove(this.settings.offTopClass), this.initScroll()
                    })), document.addEventListener(d, (() => {
                        this.scrollData.scroll.x = 0, this.scrollData.scroll.y = 0, this.checkPageTop()
                    })), document.addEventListener(c.destroy, (() => {
                        this.scroll.destroy()
                    })), document.addEventListener(c.update, (() => {
                        this.update()
                    })), document.addEventListener(c.stop, (t => {
                        let {
                            detail: e
                        } = t;
                        if (this.scroll.stop(), A() && e) {
                            const {
                                scroller: t
                            } = e;
                            Object(nt.a)(t || r)
                        }
                    })), document.addEventListener(c.scrollTo, (t => {
                        let {
                            detail: e
                        } = t;
                        const {
                            target: s,
                            ...i
                        } = e;
                        this.scroll.scrollTo(s, i)
                    })), document.addEventListener(c.play, (t => {
                        let {
                            detail: e
                        } = t;
                        if (this.scroll.start(), A() && e) {
                            const {
                                scroller: t
                            } = e;
                            Object(nt.b)(t || r)
                        }
                    })), document.addEventListener("fullscreenchange", (() => {
                        setTimeout((() => this.update()), 0)
                    }));
                    let t = window.innerWidth;
                    window.addEventListener("orientationchange", (() => {
                        const {
                            innerWidth: t
                        } = window;
                        t >= 1024 && t <= h && window.location.reload()
                    })), window.addEventListener("resize", (() => {
                        const {
                            innerWidth: e
                        } = window;
                        e !== t && (t = e, e >= h && !this.smoothOnload && window.location.reload(), e < h && e >= 768 && !this.smoothOnload && window.location.reload())
                    }))
                }
            }
            var ht = s("./node_modules/fontfaceobserver/fontfaceobserver.standalone.js"),
                lt = s.n(ht);
            const ct = ["NeueMontreal", "FoundersGrotesk"];
            class dt {
                constructor(t) {
                    let {
                        holder: e,
                        settings: s
                    } = t;
                    this.holder = e, this.settings = s, this.touch = window.innerWidth < 1280, this.from = this.holder.hasAttribute("data-from") ? parseFloat(this.holder.getAttribute("data-from")) : 0, this.to = this.holder.hasAttribute("data-to") ? parseFloat(this.holder.getAttribute("data-to")) : 1, this.inView = !1, this.componentName = "onScroll", this.scrollListenerBound = t => this.scrollListener(t), this.destroyListener = () => this.destroy(), this.triggerAnimation = () => this.callbackShow(this.show())
                }
                init() {
                    this.ignoreTouch || this.ignoreDesktop || (this.isCustomScroll = window.customScroll && window.customScroll.smoothOnload, this.attachEvents())
                }
                attachEvents() {
                    this.holder.addEventListener(c.call, this.scrollListenerBound, {
                        once: !this.shouldRepeat
                    }), document.addEventListener(u, this.destroyListener, {
                        once: !0
                    })
                }
                scrollListener(t) {
                    let {
                        detail: e
                    } = t;
                    const {
                        scrollData: s,
                        obj: i
                    } = e, {
                        inView: o
                    } = i;
                    this.inView = o, this.scrollDetail = {
                        ...s,
                        ...e
                    }, this.inView && (this.holder.hasAttribute("data-show") || (this.holder.setAttribute("data-show", !0), this.triggerAnimation()), this.onShow(this.scrollDetail)), this.inView || this.onLeave(this.scrollDetail)
                }
                show() {
                    return this
                }
                shown() {
                    this.holder.setAttribute("data-shown", !0)
                }
                onShow() {
                    return this
                }
                onLeave() {
                    return this
                }
                callbackShow(t) {
                    return t ? t.eventCallback && t.eventCallback("onComplete", (() => this.shown())) : this
                }
                destroy() {
                    this.holder.removeEventListener(c.call, this.scrollListenerBound), document.removeEventListener(m, this.destroyListener)
                }
                get shouldRepeat() {
                    return this.holder.hasAttribute("data-scroll-repeat")
                }
                get namespace() {
                    return this.holder.dataset.scrollCall
                }
                get selector() {
                    return "[data-scroll-call=".concat(this.namespace, "]")
                }
                get playSimple() {
                    return this.touch && !b(768)
                }
                get ease() {
                    return this.holder.dataset.ease || "expo.out"
                }
                get animationSpeed() {
                    return this.holder.dataset.speed ? parseFloat(this.holder.dataset.speed, 1e3) : 1
                }
                get animationDelay() {
                    return this.holder.dataset.delay ? parseFloat(this.holder.dataset.delay, 1e3) : 0
                }
                get interval() {
                    return A() ? .05 : parseFloat(this.holder.dataset.interval) || .045
                }
                get reverseAnimation() {
                    return this.holder.hasAttribute("data-reverse")
                }
                get ignoreTouch() {
                    return this.holder.hasAttribute("data-ignore-touch") && this.touch
                }
                get ignoreDesktop() {
                    return this.holder.hasAttribute("data-ignore-desktop") && !this.touch
                }
                get componentType() {
                    return this.componentName
                }
                get isShown() {
                    return this.holder.hasAttribute("data-shown")
                }
                get isVisible() {
                    return this.holder.classList.contains("is-inview")
                }
            }
            class ut extends dt {
                init() {
                    this.boxes = [...this.holder.querySelectorAll('[data-element="parallax-box"]')], this.holderBounds = this.holder.getBoundingClientRect(), this.movementValue = parseFloat(this.holder.getAttribute("data-movement")) || 10, this.movement = {
                        x: window.innerWidth / 2,
                        y: window.innerHeight / 2
                    }, this.lastMousePos = this.movement, this.onMouseMoveListener = t => this.onMouseMove(t), this.onMouseLeaveListener = () => this.onMouseLeave(), this.onMouseEnterListener = () => this.onMouseEnter(), this.resizeListener = () => this.onResize(), this.renderListener = () => this.render(), super.init()
                }
                attachEvents() {
                    window.addEventListener("resize", this.resizeListener), this.holder.addEventListener("mousemove", this.onMouseMoveListener), this.holder.addEventListener("mouseleave", this.onMouseLeaveListener), this.holder.addEventListener("mouseenter", this.onMouseEnterListener), super.attachEvents()
                }
                onResize() {
                    this.holderBounds = this.holder.getBoundingClientRect()
                }
                onMouseLeave() {
                    return this
                }
                onMouseEnter() {
                    return this
                }
                onLeave() {
                    A() || this.stop()
                }
                onShow() {
                    A() || this.start()
                }
                moveItems() {
                    this.lastMousePos.x = D(this.lastMousePos.x, this.movement.x, .05).toFixed(3), this.lastMousePos.y = D(this.lastMousePos.y, this.movement.y, .05).toFixed(3);
                    const t = [{
                        y: P.a.utils.mapRange(0, window.innerHeight, this.movementValue, -this.movementValue, this.lastMousePos.y),
                        x: P.a.utils.mapRange(0, window.innerWidth, this.movementValue, -this.movementValue, this.lastMousePos.x)
                    }, {
                        x: P.a.utils.mapRange(0, window.innerWidth, this.movementValue, -this.movementValue, this.lastMousePos.x)
                    }, {
                        x: P.a.utils.mapRange(0, window.innerWidth, -8, 8, this.lastMousePos.x)
                    }];
                    for (let e = 0; e < this.boxes.length; e++) P.a.set(this.boxes[e], {
                        force3D: !0,
                        ...t[e]
                    })
                }
                onMouseMove(t) {
                    let {
                        x: e,
                        y: s
                    } = t;
                    this.movement = {
                        x: e,
                        y: s
                    }
                }
                render() {
                    this.moveItems(), this.start()
                }
                start() {
                    P.a.ticker.add(this.renderListener)
                }
                stop() {
                    P.a.ticker.remove(this.renderListener)
                }
                destroy() {
                    super.destroy(), window.addEventListener("resize", this.resizeListener), this.holder.removeEventListener("mousemove", this.onMouseMoveListener), this.holder.removeEventListener("mouseleave", this.onMouseLeaveListener), this.holder.removeEventListener("mouseenter", this.onMouseEnterListener)
                }
            }
            class mt extends dt {
                attachEvents() {
                    super.attachEvents(), this.transitionEndListener = () => this.onTransitionEnd(), this.holder.addEventListener("transitionend", this.transitionEndListener, !1)
                }
                onTransitionEnd() {
                    this.isVisible && this.holder.setAttribute("data-shown", !0)
                }
                destroy() {
                    super.destroy(), this.holder.removeEventListener("transitionend", this.transitionEndListener)
                }
            }
            class gt {
                constructor(t) {
                    let {
                        holder: e,
                        direction: s,
                        settings: i
                    } = t;
                    this.holder = e, this.direction = s, this.settings = i, this.bounds = this.setBounds(), this.init()
                }
                init() {
                    this.group = this.holder.querySelector(this.settings.DOM.group), this.attachEvents()
                }
                attachEvents() {
                    this.resizeListener = () => this.update(), window.addEventListener("resize", this.resizeListener)
                }
                update() {
                    return this.bounds = this.setBounds(), this.bounds
                }
                setBounds() {
                    const t = this.holder.getBoundingClientRect(),
                        {
                            left: e,
                            top: s,
                            width: i,
                            height: o
                        } = t;
                    return {
                        width: i,
                        height: o,
                        top: s,
                        left: e,
                        x: e + i / 2,
                        y: s + o / 2
                    }
                }
                animate(t) {
                    let {
                        x: e,
                        y: s
                    } = t;
                    const i = this.update(),
                        {
                            left: o,
                            top: n,
                            width: r,
                            height: a
                        } = i,
                        h = Math.atan2(e - i.x, -(s - i.y)) * (180 / Math.PI),
                        l = (e - (o + r / 2)) * this.settings.movementKoeff,
                        c = (s - (n + a / 2)) * this.settings.movementKoeff;
                    P.a.set(this.group, {
                        rotate: h,
                        transformOrigin: "center"
                    }), P.a.to(this.group, {
                        duration: .3,
                        x: l,
                        y: c
                    })
                }
                stop() {
                    P.a.killTweensOf(this.group)
                }
            }
            class pt extends dt {
                init() {
                    this.leftPart = this.holder.querySelector(this.settings.DOM.leftPart), this.rightPart = this.holder.querySelector(this.settings.DOM.rightPart), this.leftPartInstance = new gt({
                        holder: this.leftPart,
                        settings: this.settings
                    }), this.rightPartInstance = new gt({
                        holder: this.rightPart,
                        settings: this.settings
                    }), this.onMouseMoveListener = t => this.onMouseMove(t), super.init()
                }
                attachEvents() {
                    this.isStatic && document.addEventListener(y, this.onMouseMoveListener), super.attachEvents()
                }
                onMouseMove(t) {
                    let {
                        detail: e
                    } = t;
                    this.leftPartInstance.animate(e), this.rightPartInstance.animate(e)
                }
                onShow() {
                    document.addEventListener(y, this.onMouseMoveListener)
                }
                onLeave() {
                    this.leftPartInstance.stop(), this.rightPartInstance.stop(), document.removeEventListener(y, this.onMouseMoveListener)
                }
                destroy() {
                    super.destroy(), document.removeEventListener(y, this.onMouseMoveListener)
                }
                get isStatic() {
                    return this.holder.hasAttribute("data-static")
                }
            }
            class vt extends dt {
                init() {
                    super.init(), this.tl = P.a.timeline({
                        paused: !0
                    }), this.tl.fromTo(this.holder, {
                        opacity: this.from
                    }, {
                        delay: this.animationDelay,
                        duration: this.animationSpeed,
                        opacity: this.to,
                        ease: "power2.out",
                        clearProps: this.to > 0 ? "opacity" : ""
                    }), P.a.set(this.holder, {
                        opacity: this.from
                    })
                }
                onShow() {
                    return this.tl.play(0)
                }
                onLeave() {
                    return this.tl.reverse()
                }
            }
            class yt extends dt {
                onShow() {
                    r.classList.add(this.settings.activeClass)
                }
                onLeave() {
                    r.classList.remove(this.settings.activeClass)
                }
                destroy() {
                    this.onLeave()
                }
            }
            class Lt {
                constructor(t, e) {
                    this.holder = t, this.core = e, this.settings = {
                        target: "data-hover-image",
                        animation: {
                            clip: {
                                start: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                                mid: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                end: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
                            }
                        },
                        ...this.core.settings
                    }, this.cursorPosition = {
                        x: 0,
                        y: 0
                    }, this.targetImage = this.holder.getAttribute(this.settings.target), this.imageWidth = parseFloat(this.holder.getAttribute("data-width")) || 210, this.imageHeight = parseFloat(this.holder.getAttribute("data-height")) || 150, this.behaviorStatic = this.holder.hasAttribute("data-static"), this.mouseenterFn = () => this.onMouseEnter(), this.mouseleaveFn = () => this.onMouseLeave()
                }
                init() {
                    this.targetImage && (this.createTarget(), this.behaviorStatic || this.attachEvents())
                }
                createTarget() {
                    const t = new Image,
                        e = document.createElement("div");
                    t.src = this.targetImage, this.imageWidth && t.setAttribute("width", this.imageWidth), this.imageHeight && t.setAttribute("height", this.imageHeight), t.onload = () => {
                        e.classList.add("hover-image-target"), e.appendChild(t), this.core.imageContainer.appendChild(e), this.target = e, this.behaviorStatic || this.setStartClip()
                    }
                }
                setStartClip() {
                    P.a.set(this.target, {
                        clipPath: this.settings.animation.clip.start,
                        webkitClipPath: this.settings.animation.clip.start
                    })
                }
                attachEvents() {
                    this.holder.addEventListener("mouseenter", this.mouseenterFn), this.holder.addEventListener("mouseleave", this.mouseleaveFn)
                }
                onMouseEnter() {
                    this.showTarget()
                }
                onMouseLeave() {
                    this.hideTarget()
                }
                showTarget() {
                    P.a.killTweensOf(this.target), P.a.fromTo(this.target, {
                        clipPath: this.settings.animation.clip.start,
                        webkitClipPath: this.settings.animation.clip.start
                    }, {
                        ease: "circ.inOut",
                        duration: .4,
                        clipPath: this.settings.animation.clip.mid,
                        webkitClipPath: this.settings.animation.clip.mid
                    })
                }
                hideTarget() {
                    P.a.killTweensOf(this.target), P.a.fromTo(this.target, {
                        clipPath: this.settings.animation.clip.mid,
                        webkitClipPath: this.settings.animation.clip.mid
                    }, {
                        duration: .4,
                        ease: "circ.inOut",
                        clipPath: this.settings.animation.clip.end,
                        webkitClipPath: this.settings.animation.clip.end,
                        onComplete: () => this.setStartClip()
                    })
                }
                destroy() {
                    this.holder.removeEventListener("mouseenter", this.mouseenterFn), this.holder.removeEventListener("mouseleave", this.mouseleaveFn)
                }
            }
            class Et {
                constructor(t, e) {
                    this.holder = t, this.settings = {
                        DOM: {
                            imageContainer: "[data-image-container]",
                            toggle: "[data-hover-image]"
                        },
                        ...e
                    }
                }
                init() {
                    this.imageContainer = this.holder.querySelector(this.settings.DOM.imageContainer), this.togglers = [...this.holder.querySelectorAll(this.settings.DOM.toggle)], this.toggleInstances = this.togglers.map((t => {
                        const e = new Lt(t, this);
                        return e.init(), e
                    })), this.attachEvents()
                }
                attachEvents() {
                    this.destroyListener = () => this.destroy(), document.addEventListener(m, this.destroyListener)
                }
                destroy() {
                    document.removeEventListener(m, this.destroyListener), this.toggleInstances.forEach((t => t.destroy()))
                }
            }
            class wt extends dt {
                init() {
                    super.init(), this.ignoreTouch || (this.variants = {
                        moveLeft: {
                            axis: "x",
                            start: this.movementValue
                        },
                        moveRight: {
                            axis: "x",
                            start: -this.movementValue
                        },
                        moveUp: {
                            axis: "y",
                            start: this.movementValue
                        },
                        moveDown: {
                            axis: "y",
                            start: -this.movementValue
                        }
                    }, this.animationType = this.holder.dataset.scrollCall, this.animationParams = this.variants[this.animationType], this.sequenceAttr = "data-interval", this.target = this.isSequence ? this.holder.children : this.holder, P.a.set(this.target, {
                        [this.animationParams.axis]: this.animationParams.start,
                        opacity: 0
                    }), this.tl = P.a.timeline({
                        paused: !0
                    }), this.tl.fromTo(this.target, {
                        [this.animationParams.axis]: this.playSimple ? 0 : this.animationParams.start,
                        opacity: 0
                    }, {
                        [this.animationParams.axis]: 0,
                        duration: this.animationSpeed,
                        ease: this.ease,
                        opacity: 1,
                        delay: this.animationDelay,
                        stagger: !!this.isSequence && this.interval,
                        clearProps: "".concat(this.animationParams.axis, ", opacity")
                    }))
                }
                onShow() {
                    return this.tl.play(0)
                }
                onLeave() {
                    return this.tl.reverse()
                }
                get isSequence() {
                    return this.holder.hasAttribute(this.sequenceAttr)
                }
                get movementValue() {
                    return this.holder.hasAttribute("data-movement") ? +this.holder.getAttribute("data-movement") : this.settings.movementValue || 30
                }
            }
            class ft extends dt {
                init() {
                    super.init(), this.ID = this.holder.getAttribute("data-scroll-id") || "progress-move"
                }
                attachEvents() {
                    this.ignoreTouch || (this.onUpdateListener = t => this.onUpdate(t), document.addEventListener(c.scrolling, this.onUpdateListener), super.attachEvents())
                }
                onUpdate(t) {
                    let {
                        detail: {
                            currentElements: e
                        }
                    } = t;
                    if ("object" == typeof e[this.ID]) {
                        const {
                            progress: t
                        } = e[this.ID];
                        this.animation.progress(t)
                    }
                }
                destroy() {
                    super.destroy(), document.removeEventListener(c.scrolling, this.onUpdateListener)
                }
                get animation() {
                    const t = P.a.timeline({
                        paused: !0
                    });
                    return t.fromTo(this.holder, {
                        scale: this.from
                    }, {
                        scale: this.to,
                        duration: this.animationSpeed
                    }), t
                }
            }
            class St extends ft {
                init() {
                    super.init(), this.ID = this.holder.getAttribute("data-scroll-id") || "progress-fade"
                }
                get animation() {
                    const t = P.a.timeline({
                        paused: !0
                    });
                    return t.fromTo(this.holder, {
                        opacity: this.from
                    }, {
                        opacity: this.to,
                        duration: this.animationSpeed
                    }), t
                }
            }
            class Ct extends ft {
                get animation() {
                    const t = P.a.timeline({
                        paused: !0
                    });
                    return t.fromTo(this.holder, {
                        rotate: this.from
                    }, {
                        rotate: this.to,
                        duration: this.animationSpeed
                    }), t
                }
            }
            class bt extends ft {
                onUpdate(t) {
                    let {
                        detail: e
                    } = t;
                    if (window.customScroll && window.customScroll.smoothOnload) {
                        const {
                            currentElements: t,
                            scroll: s
                        } = e, {
                            innerHeight: i
                        } = window;
                        if ("object" == typeof t[this.ID]) {
                            const e = t[this.ID],
                                {
                                    bottom: o
                                } = e,
                                n = s.y - (o - i),
                                r = Math.min(n, i),
                                a = Math.max(0, r);
                            P.a.set(this.holder, {
                                y: a
                            })
                        }
                    }
                }
            }
            class At extends dt {
                init() {
                    super.init(), this.variants = {
                        scaleLeft: {
                            axis: "scaleX",
                            transformOrigin: "100% 50%"
                        },
                        scaleRight: {
                            axis: "scaleX",
                            transformOrigin: "0% 50%"
                        },
                        scaleUp: {
                            axis: "scaleY",
                            transformOrigin: "50% 100%"
                        },
                        scaleDown: {
                            axis: "scaleY",
                            transformOrigin: "50% 0%"
                        },
                        scale: {
                            axis: "scale"
                        }
                    }, this.animationType = this.holder.dataset.scrollCall, this.settings = this.variants[this.animationType], this.from = this.holder.hasAttribute("data-to") ? +this.holder.getAttribute("data-from") : 0, this.to = this.holder.hasAttribute("data-to") ? +this.holder.getAttribute("data-to") : 1, this.animation = P.a.timeline({
                        paused: !0
                    }), this.animation.fromTo(this.holder, {
                        [this.settings.axis]: this.from,
                        transformOrigin: this.settings.transformOrigin
                    }, {
                        [this.settings.axis]: this.to,
                        duration: this.animationSpeed,
                        ease: this.ease,
                        delay: this.animationDelay
                    }), P.a.set(this.holder, {
                        [this.settings.axis]: this.from
                    })
                }
                onShow() {
                    return this.animation.play(0)
                }
                onLeave() {
                    return this.animation.timeScale(2).reverse(0)
                }
            }
            var xt = s("./node_modules/gsap/SplitText.js");
            P.a.registerPlugin(xt.a);
            class Dt extends dt {
                init() {
                    super.init(), this.holder && this.holder.innerText && this.holder.innerHTML && !this.holder.splitAnimation && (this.splitterWrapper = new xt.a(this.holder, {
                        ...this.settings,
                        split: "lines",
                        linesClass: this.settings.presetClass || "splitter-wrap overflow-hidden is-row-parent"
                    }), this.staggerType = this.holder.getAttribute("data-stagger-type") || "center", this.splitter = new xt.a(this.holder, this.settings), this.holder.splitAnimation = this, this.shouldIgnoreAnimation ? this.shown() : (this.animation = this.getAnimationByType(), this.attachEvents()))
                }
                get isChars() {
                    return this.settings.split.includes("chars")
                }
                attachEvents() {
                    this.scrollDependant && this.splitter.chars.length && this.addScrollBehaviorEvents(), super.attachEvents()
                }
                addScrollBehaviorEvents() {
                    this.charsTotal = this.splitter.chars.length, this.onScrollData = {
                        cache: 0,
                        current: 0
                    }, this.scrollBehaviorListener = t => this.onScrollBehavior(t), document.addEventListener(c.scrolling, this.scrollBehaviorListener)
                }
                onScrollBehavior(t) {
                    let {
                        detail: e
                    } = t;
                    const {
                        scroll: s
                    } = e;
                    this.onScrollData.current = s.y;
                    const {
                        chars: i
                    } = this.splitter, o = this.onScrollData.current - this.onScrollData.cache, n = P.a.utils.mapRange(200, -200, -50, 50, o);
                    this.onScrollData.cache = this.onScrollData.current, i.forEach(((t, e) => {
                        const s = e < Math.ceil(this.charsTotal / 2) ? e : Math.ceil(this.charsTotal / 2) - Math.abs(Math.floor(this.charsTotal / 2) - e) - 1;
                        P.a.set(t, {
                            y: s * n
                        })
                    }))
                }
                getAnimationSettings() {
                    const t = {
                        fade: {
                            start: {
                                opacity: 0
                            },
                            end: {
                                opacity: 1,
                                ease: this.ease,
                                duration: this.animationSpeed,
                                stagger: {
                                    each: this.interval,
                                    from: this.staggerType
                                }
                            }
                        },
                        default: {
                            start: {
                                yPercent: 150,
                                opacity: 0
                            },
                            end: {
                                opacity: 1,
                                yPercent: 0,
                                ease: this.ease,
                                clearProps: "y",
                                duration: this.animationSpeed,
                                stagger: this.interval
                            }
                        }
                    };
                    return t[this.settings.animationType] || t.default
                }
                show() {
                    return this.shouldIgnoreAnimation ? this : this.animation
                }
                onShow() {
                    return this.shouldIgnoreAnimation ? this : this.animation.play().timeScale(1)
                }
                onLeave() {
                    return this.shouldIgnoreAnimation ? this : this.animation.timeScale(4).delay(0).reverse()
                }
                resetAfterAnimation() {
                    return this
                }
                getAnimationByType() {
                    const {
                        start: t,
                        end: e
                    } = this.getAnimationSettings(), s = {
                        ...e,
                        onComplete: () => this.resetAfterAnimation()
                    }, i = P.a.timeline({
                        paused: !0,
                        delay: this.animationDelay
                    });
                    switch (this.settings.split) {
                        case "chars":
                        case "chars, words":
                            this.splitter.chars.length && P.a.set(this.splitter.chars, t), i.fromTo(this.splitter.chars, t, s);
                            break;
                        case "chars, lines":
                            this.splitter.chars.length && P.a.set(this.splitter.chars, t);
                            for (let e = 0; e < this.splitter.lines.length; e++) {
                                const o = ".splitter-row__".concat(e + 1),
                                    n = this.splitter.chars.filter((t => t.closest(o))),
                                    r = 2 * this.interval * e;
                                i.fromTo(n, t, s, r)
                            }
                            break;
                        case "words, lines":
                            this.splitterWrapper.lines.length && P.a.set(this.splitterWrapper.lines, t), i.fromTo(this.splitterWrapper.lines, t, s);
                            break;
                        default:
                            this.splitter.lines.length && P.a.set(this.splitter.lines, t), i.fromTo(this.splitter.lines, t, s)
                    }
                    return i
                }
                destroy() {
                    super.destroy(), this.scrollDependant && this.splitter.chars.length && document.removeEventListener(c.scrolling, this.scrollBehaviorListener)
                }
                get shouldIgnoreAnimation() {
                    return this.holder.hasAttribute("data-ignore-animation") || this.holder.hasAttribute("data-shown")
                }
                get shouldReset() {
                    return this.holder.hasAttribute("data-reset-text")
                }
                get scrollDependant() {
                    return this.holder.hasAttribute("data-scroll-dependant")
                }
                get elements() {
                    return this.isChars ? this.splitter.chars : this.splitter.lines
                }
            }
            class Pt {
                constructor(t, e) {
                    this.holder = t, this.settings = {
                        plugins: [],
                        scale: .5,
                        triggerPauseOffset: 15,
                        pauseText: "Pause video",
                        DOM: {
                            video: "video",
                            trigger: '[data-component="video-control"]',
                            poster: '[data-component="video-poster"]'
                        },
                        animation: {
                            duration: .5,
                            ease: "back.inOut(1.4)"
                        },
                        ...e
                    }, this.isPlaying = !1, this.pauseListener = () => this.pause(), this.triggerListener = () => this.triggerState(), this.endedListener = () => {
                        x("videoEnded", this, this.holder), this.pause()
                    }
                }
                init() {
                    this.video = this.holder.querySelector(this.settings.DOM.video), this.trigger = this.holder.querySelector(this.settings.DOM.trigger) || document.createElement("span"), this.poster = this.holder.querySelector(this.settings.DOM.poster), this.shouldAutoplay = this.video.hasAttribute("autoplay"), this.shouldLoop = this.video.hasAttribute("loop"), this.posterAnimation = this.setAnimation(), this.initPlugins(), this.attachEvents()
                }
                initPlugins() {
                    this.settings.plugins.length && (this.plugins = this.settings.plugins.map((t => {
                        const e = new t(this);
                        return e.init && e.init(), e
                    })))
                }
                destroyPlugins() {
                    this.plugins.length && this.plugins.forEach((t => {
                        t.destroy()
                    }))
                }
                setAnimation() {
                    const t = P.a.timeline({
                            paused: !0,
                            yoyo: !0
                        }),
                        e = P.a.to(this.poster, {
                            ...this.settings.animation,
                            opacity: 0
                        });
                    return t.add(e), t
                }
                attachEvents() {
                    this.holder.addEventListener("click", this.triggerListener), !this.shouldLoop && this.video.addEventListener("ended", this.endedListener)
                }
                triggerState() {
                    this.paused ? this.play() : this.pause()
                }
                swapText() {
                    this.realTriggerText && (this.isPlaying ? (this.triggerTextElement.setAttribute("data-text", this.settings.pauseText), this.triggerTextElement.innerText = this.settings.pauseText) : (this.triggerTextElement.setAttribute("data-text", this.realTriggerText), this.triggerTextElement.innerText = this.realTriggerText))
                }
                play() {
                    this.isPlaying || (this.isPlaying = !0, this.video.play && this.video.play(), this.hidePoster(), x(S, this, this.holder))
                }
                pause() {
                    this.isPlaying && (this.isPlaying = !1, this.video.pause && this.video.pause(), this.showPoster(), x(C, this, this.holder))
                }
                hidePoster() {
                    this.posterAnimation.play(0)
                }
                showPoster() {
                    this.posterAnimation.reverse(0)
                }
                rect() {
                    return {
                        holder: this.holder.getBoundingClientRect(),
                        trigger: this.trigger.getBoundingClientRect()
                    }
                }
                destroy() {
                    this.holder.removeEventListener("click", this.triggerListener), !this.shouldLoop && this.video.removeEventListener("ended", this.endedListener), this.destroyPlugins()
                }
                get paused() {
                    return this.video.paused
                }
            }
            class Mt {
                constructor(t) {
                    const {
                        holder: e,
                        trigger: s,
                        settings: i
                    } = t;
                    this.core = t, this.holder = e, this.trigger = s, this.settings = {
                        threshold: 25,
                        ...i
                    }, this.cursorPosition = {
                        x: 0,
                        y: 0
                    }, this.canAnimate = !0
                }
                init() {
                    this.trigger && !A() && (this.mouseEnterListener = () => this.onMouseEnter(), this.mouseLeaveListener = () => this.onMouseLeave(), this.checkListener = () => this.follow(), this.endedListener = () => this.resetButtonPosition(), this.cursorPositionListener = t => this.setCursorPosition(t), this.attachEvents())
                }
                attachEvents() {
                    this.holder.addEventListener("mouseenter", this.mouseEnterListener), this.holder.addEventListener("mouseleave", this.mouseLeaveListener), this.holder.addEventListener("leave", this.endedListener), this.holder.addEventListener("videoEnded", this.endedListener), document.addEventListener(y, this.cursorPositionListener), document.addEventListener(m, (() => this.destroy()), {
                        once: !0
                    })
                }
                onMouseEnter() {
                    this.follow()
                }
                onMouseLeave() {
                    this.unfollow()
                }
                follow() {
                    const {
                        holder: t
                    } = this.core.rect(), {
                        left: e,
                        top: s,
                        width: i,
                        height: o
                    } = t, n = this.cursorPosition.x - e - i / 2, r = this.cursorPosition.y - s - o / 2;
                    P.a.to(this.trigger, {
                        duration: .4,
                        ease: "power2.out",
                        left: "50%",
                        top: "50%",
                        x: n,
                        y: r
                    }), P.a.ticker.add(this.checkListener)
                }
                unfollow() {
                    this.core.isPlaying ? P.a.to(this.trigger, {
                        duration: .4,
                        left: "100%",
                        top: "100%",
                        x: -this.core.rect().trigger.width * this.settings.scale - this.settings.triggerPauseOffset,
                        y: -this.core.rect().trigger.height * this.settings.scale - this.settings.triggerPauseOffset
                    }) : this.resetButtonPosition(), P.a.ticker.remove(this.checkListener)
                }
                resetButtonPosition() {
                    P.a.to(this.trigger, {
                        duration: .4,
                        left: "50%",
                        top: "50%",
                        x: 0,
                        y: 0
                    })
                }
                setCursorPosition(t) {
                    let {
                        detail: e
                    } = t;
                    const {
                        x: s,
                        y: i
                    } = e;
                    this.cursorPosition = {
                        x: s,
                        y: i
                    }
                }
                destroy() {
                    this.holder.removeEventListener("mouseenter", this.mouseEnterListener), this.holder.removeEventListener("mouseleave", this.mouseLeaveListener), this.holder.removeEventListener("leave", this.endedListener), this.holder.removeEventListener("videoEnded", this.endedListener), document.addEventListener(y, this.cursorPositionListener)
                }
            }
            class kt extends dt {
                init() {
                    this.instanceProps = {
                        plugins: [Mt]
                    }, this.instance = new Pt(this.holder, this.instanceProps), this.instance.init(), P.a.set(this.instance.trigger, {
                        autoAlpha: 0
                    }), this.onPlayListener = () => this.onVideoPlay(), this.onPauseListener = () => this.onVideoPause(), super.init()
                }
                attachEvents() {
                    this.holder.addEventListener(S, this.onPlayListener), this.holder.addEventListener(C, this.onPauseListener), super.attachEvents()
                }
                onVideoPlay() {
                    P.a.to(this.instance.trigger, {
                        autoAlpha: 1,
                        duration: .3,
                        pointerEvents: "none"
                    }), this.holder.classList.add("video--is-playing")
                }
                onVideoPause() {
                    P.a.to(this.instance.trigger, {
                        autoAlpha: 0,
                        duration: .3,
                        pointerEvents: "auto"
                    }), this.holder.classList.remove("video--is-playing")
                }
                onShow() {
                    this.instance.shouldAutoplay && this.instance.play(), x("enter", {}, this.instance.holder)
                }
                onLeave() {
                    this.instance.paused || this.instance.pause(), x("leave", {}, this.instance.holder)
                }
                destroy() {
                    this.holder.removeEventListener(S, this.onPlayListener), this.holder.removeEventListener(C, this.onPauseListener), super.destroy()
                }
            }
            var Tt = s("./node_modules/vanilla-lazyload/dist/lazyload.min.js"),
                Ot = s.n(Tt);
            const qt = t => {
                let {
                    detail: e
                } = t;
                e.length && e.forEach((t => Ot.a.load(t, {
                    unobserve_entered: !0
                })))
            };
            class It {
                constructor(t) {
                    let {
                        holder: e,
                        settings: s
                    } = t;
                    this.holder = e, this.settings = {
                        homepageClass: "is-homepage",
                        passedClass: "preloader-passed",
                        DOM: {
                            leftSide: "[data-left-side]",
                            rightSide: "[data-right-side]",
                            text: "[data-preloader-text]",
                            content: "[data-content]",
                            progressValue: "[data-progress-value]"
                        },
                        ...s
                    }
                }
                init() {
                    if (this.holder) {
                        if (!this.shouldPlayPreloader) return this.skip(), void setTimeout((() => {
                            x(L)
                        }), 0);
                        this.leftSide = document.querySelector(this.settings.DOM.leftSide), this.rightSide = document.querySelector(this.settings.DOM.rightSide), this.text = this.holder.querySelector(this.settings.DOM.text), this.content = this.holder.querySelector(this.settings.DOM.content), this.progressValue = this.holder.querySelector(this.settings.DOM.progressValue), this.animation = P.a.timeline({
                            paused: !0,
                            onUpdate: () => this.updateProgressValue(),
                            onComplete: () => this.hidePreloader()
                        }), this.animate()
                    }
                }
                skip() {
                    this.destroy()
                }
                hidePreloader() {
                    const t = P.a.timeline({
                        paused: !0
                    });
                    setTimeout((() => {
                        x(L)
                    }), 500);
                    const e = P.a.to(this.content, {
                            scale: 1,
                            duration: .75,
                            ease: "power2.inOut"
                        }),
                        s = P.a.to(this.text, {
                            autoAlpha: 0
                        }),
                        i = P.a.to(this.holder, {
                            autoAlpha: 0,
                            onComplete: () => {
                                this.destroy()
                            }
                        });
                    t.add(e).addLabel("scaleUp").add(s, "<").add(i), t.play()
                }
                updateProgressValue() {
                    const t = this.animation.progress();
                    this.progressValue.innerHTML = "".concat((100 * t).toFixed(0).toString().padStart(2, "0"))
                }
                animate() {
                    const t = P.a.fromTo(this.content, {
                            y: window.innerHeight / 4,
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .5,
                            y: 0
                        }),
                        e = P.a.fromTo(this.leftSide, {
                            opacity: 0
                        }, {
                            x: 25,
                            opacity: 1,
                            duration: 1.25,
                            ease: "power3.out"
                        }),
                        s = P.a.fromTo(this.rightSide, {
                            opacity: 0
                        }, {
                            x: 45,
                            duration: 1.25,
                            opacity: 1,
                            ease: "power3.out"
                        });
                    this.animation.add(t).addLabel("content").add(e).addLabel("leftSide").add(s, "<").addLabel("rightSide"), this.animation.delay(.5).play()
                }
                destroy() {
                    const t = [this.text, this.leftSide, this.rightSide, this.content];
                    this.holder.remove(), r.classList.add(this.settings.passedClass), t.forEach((t => {
                        P.a.killTweensOf(t)
                    }))
                }
                get shouldPlayPreloader() {
                    return document.body.classList.contains(this.settings.homepageClass)
                }
            }
            const Bt = () => {
                ! function() {
                    const t = window.innerWidth >= 1200 ? document.querySelector("[data-scroller]") : document,
                        e = new Ot.a({
                            container: t,
                            elements_selector: '[data-component="lazyload"]',
                            threshold: 4 * window.innerHeight,
                            unobserve_entered: !0,
                            callback_loaded: t => {
                                P.a.fromTo(t, {
                                    opacity: 0
                                }, {
                                    opacity: 1,
                                    duration: .35,
                                    ease: "power2.inOut",
                                    clearProps: "opacity",
                                    onComplete: () => P.a.killTweensOf(t)
                                })
                            }
                        }),
                        s = () => e.update(),
                        i = () => {
                            document.removeEventListener(E, s), document.removeEventListener(v, s), document.removeEventListener(w, qt), document.removeEventListener(m, i), e.destroy()
                        };
                    document.addEventListener(E, s), document.addEventListener(v, s), document.addEventListener(w, qt), document.addEventListener(m, i)
                }(), ot(), document.querySelectorAll('[data-scroll-call="fadeIn"]').forEach((t => {
                    new vt({
                        holder: t
                    }).init()
                })), document.querySelectorAll('[data-scroll-call^="scale"]').forEach((t => {
                    new At({
                        holder: t
                    }).init()
                })), document.querySelectorAll('[data-scroll-call="video-component"]').forEach((t => {
                    new kt({
                        holder: t
                    }).init()
                })), document.querySelectorAll('[data-scroll-call^="move"]').forEach((t => {
                    new wt({
                        holder: t,
                        settings: {
                            movementValue: 60
                        }
                    }).init()
                })), document.querySelectorAll('[data-css-call="maskDown"]').forEach((t => {
                    new mt({
                        holder: t
                    }).init()
                })), document.querySelectorAll('[data-scroll-call="ambient-move"]').forEach((t => {
                    new ut({
                        holder: t
                    }).init()
                })), document.querySelectorAll('[data-scroll-call="split"]').forEach((t => {
                    const e = t.getAttribute("data-line-class");
                    new Dt({
                        holder: t,
                        settings: {
                            presetClass: e,
                            split: t.getAttribute("data-split") || "words, lines",
                            charsClass: "is-char",
                            linesClass: "splitter-row overflow-hidden splitter-row__++",
                            animationType: t.getAttribute("data-animation-type") || "default"
                        }
                    }).init()
                })), document.querySelectorAll('[data-scroll-call="progress-scale"]').forEach((t => {
                    new ft({
                        holder: t
                    }).init()
                })), document.querySelectorAll('[data-component="hover-thumbnail"]').forEach((t => {
                    new Et(t).init()
                })), document.querySelectorAll('[data-scroll-call^="footer-inview"]').forEach((t => {
                    new yt({
                        holder: t,
                        settings: {
                            activeClass: "footer-visible"
                        }
                    }).init()
                })), document.querySelectorAll('[data-scroll-call="progress-rotate"]').forEach((t => {
                    new Ct({
                        holder: t
                    }).init()
                })), document.querySelectorAll('[data-scroll-call="progress-fade"]').forEach((t => {
                    new St({
                        holder: t
                    }).init()
                })), document.querySelectorAll('[data-scroll-call="eyes"]').forEach((t => {
                    new pt({
                        holder: t,
                        settings: {
                            movementKoeff: .03,
                            DOM: {
                                leftPart: '[data-eye="left"]',
                                rightPart: '[data-eye="right"]',
                                group: ".eyes-svg__group"
                            }
                        }
                    }).init()
                })), document.querySelectorAll('[data-scroll-call="progress-sticky"]').forEach((t => {
                    new bt({
                        holder: t
                    }).init()
                }))
            };
            if (document.documentMode)(() => {
                const t = document.querySelector('[data-component="preloader"]'),
                    e = document.querySelector("[data-page-layout]"),
                    s = document.createElement("div"),
                    i = document.createElement("div");
                i.setAttribute("class", "w-full max-w-screen-lg mx-auto"), s.setAttribute("class", "absolute w-full h-full z-50 text-xl lg:text-3xl flex items-center justify-center flex-col text-center p-60"), i.innerHTML = "Your browser is not supported. <br> Please use the latest version of Chrome, Safari, Firefox or Edge for the best experience on this site.", t.remove(), e.innerHTML = "", s.appendChild(i), e.appendChild(s)
            })();
            else try {
                document.addEventListener(L, (() => (function(t) {
                        const e = "[data-scroller]",
                            s = document.querySelector(e),
                            i = Math.max(1, window.innerWidth / 1440);
                        new at({
                            el: s,
                            smooth: !0,
                            repeat: !1,
                            smoothMobile: !1,
                            getDirection: !0,
                            getSpeed: !0,
                            lerp: .15,
                            multiplier: .6 * i,
                            touchMultiplier: 2,
                            firefoxMultiplier: 100 * i,
                            scrollTreshold: 70,
                            offTopClass: "is-not-top",
                            onTopClass: "is-top",
                            reloadOnContextChange: !0,
                            tablet: {
                                smooth: !1,
                                breakpoint: 768
                            },
                            smartphone: {
                                smooth: !1
                            },
                            desktop: {
                                smooth: !0,
                                breakpoint: 1200
                            }
                        }).init()
                    }(), r.classList.add("is-loaded"), void r.classList.remove("is-loading"))), {
                        once: !0
                    }), document.addEventListener(d, (() => {
                        Bt()
                    })),
                    function() {
                        const t = ct.map((t => new lt.a(t).load()));
                        return Promise.all(t)
                    }().then((() => {
                        new It({
                            holder: document.querySelector('[data-component="preloader"]')
                        }).init(), (new O).init(), Bt()
                    }))
            } catch (t) {}
        },
        "./src/js/utils/resizeHandler.js": function(t, e) {
            ! function(t) {
                const e = "resize-active";
                let s = !1,
                    i = null;
                const o = () => {
                        s = !1, document.documentElement.classList.remove(e)
                    },
                    n = () => {
                        s || (s = !0, document.documentElement.classList.add(e)), clearTimeout(i), i = setTimeout(o, 500)
                    };
                t.addEventListener("resize", n), t.addEventListener("orientationchange", n)
            }(window)
        },
        "./src/js/utils/vh.js": function(t, e) {
            (() => {
                function t() {
                    document.documentElement.style.setProperty("--vh-dynamic", "".concat(window.innerHeight, "px"))
                }
                t(), document.documentElement.style.setProperty("--vh-static", "".concat(window.innerHeight, "px")), window.addEventListener("resize", t)
            })()
        },
        0: function(t, e, s) {
            t.exports = s("./src/js/app.js")
        }
    },
    [
        [0, "runtime", "vendors~app"]
    ]
]);
const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$199.99" ? "$19.99" : "$199.99";
  professional.textContent =
    professional.textContent === "$249.99" ? "$24.99 " : "$249.99";
  master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
});
function eraseCookieFromAllPaths(name) {
    // This function will attempt to remove a cookie from all paths.
    var pathBits = location.pathname.split('/');
    var pathCurrent = ' path=';

    // do a simple pathless delete first.
    document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';

    for (var i = 0; i < pathBits.length; i++) {
        pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
        document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
    }
}

$(function(){
    $(".dropdown").hover(function () {
        document.getElementById(".globalnav-curtain").style.opacity = "1 !important";
    });
});