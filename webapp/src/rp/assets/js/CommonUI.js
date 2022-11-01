let UI;
(function (UI) {
    UI.$ = jQuery;
    UI.Resize = {
        chk(target) {
            if ((target.width() || 0) >= 1025) {
                target.removeClass('pc mobile tablet').addClass('pc');
            }
            else if ((target.width() || 0) >= 768) {
                target.removeClass('pc mobile tablet').addClass('tablet');
            }
            else {
                target.removeClass('pc mobile tablet').addClass('mobile');
            }
        },
        font() {
            const doc = document.documentElement;
            const caculateWidth = String((doc.clientWidth / 320) * 62.5 * 100);
            let fontSizeVal = parseFloat(caculateWidth) / 100;
            fontSizeVal = fontSizeVal >= 85 ? 85 : fontSizeVal;
            doc.style.fontSize = fontSizeVal + '%';
        },
        resize($BODY) {
            UI.$(window).on('resize', () => {
                this.chk($BODY);
                this.font();
            });
        },
    };
    UI.Layer = {
        scrollTop: 0,
        calculate(layer) {
            const $layer = UI.$(layer), layerIn = $layer.find('.modal-inner'), winH = UI.$(window).height() || 0, winW = UI.$(window).width() || 0;
            layerIn.find('.modal-scroll').removeAttr('style');
            const layerH = $layer.height() || 0, layerW = $layer.width() || 0, marginH = parseInt(layerIn.css('marginTop')) + parseInt(layerIn.css('marginBottom'));
            if (winH < layerH) {
                layerIn.find('.modal-scroll').css({
                    height: winH - marginH,
                    overflow: 'auto',
                });
                $layer.css({
                    top: 0,
                    left: (winW - layerW) / 2,
                });
            }
            else {
                layerIn.find('.modal-scroll').removeAttr('style');
                $layer.css({
                    top: (winH - layerH) / 2,
                    left: (winW - layerW) / 2,
                });
            }
        },
        openClick(target, dimmed, parent, callback) {
            const that = this;
            UI.$(document).on('click', target, function (e) {
                const layer = '.' + UI.$(this).data('layer');
                const targetDom = UI.$(this);
                const show = () => {
                    that.open(layer, dimmed, parent);
                };
                if (callback) {
                    callback(show, layer, targetDom);
                }
                else {
                    show();
                }
                e.preventDefault();
            });
        },
        open(layer, dimmed, parent, callback) {
            const that = this;
            that.scrollTop = UI.$(window).scrollTop() || 0;
            UI.$('body, html').addClass('fixed');
            UI.$('body').css({ top: -that.scrollTop });
            if (dimmed)
                UI.$(dimmed).fadeIn();
            if (callback)
                callback(layer);
            UI.$(parent + layer).show();
            that.calculate(layer);
            UI.$(window).on('resize.layer', function () {
                that.calculate(layer);
            });
        },
        closeClick(target, dimmed, parent, callback) {
            const that = this;
            UI.$(document).on('click', target, function (e) {
                let layer;
                const targetDom = UI.$(this);
                const hide = () => {
                    that.close(layer, dimmed, parent);
                };
                if (target == dimmed) {
                    layer = parent;
                }
                else {
                    layer = parent + '.' + UI.$(this).data('layer');
                }
                if (callback) {
                    callback(hide, layer, targetDom);
                }
                else {
                    hide();
                }
                e.preventDefault();
            });
        },
        close(layer, dimmed, parent, callback) {
            const that = this;
            if (layer != dimmed) {
                UI.$(layer).hide();
            }
            else {
                UI.$(parent).hide();
            }
            if (dimmed)
                UI.$(dimmed).fadeOut();
            if (callback)
                callback(layer);
            UI.$('body, html').removeClass('fixed');
            UI.$('body').css({ top: 0 });
            UI.$(window).scrollTop(that.scrollTop);
            UI.$(window).off('resize.layer');
        },
    };
    UI.Event = {
        toggle(target, parent, callback) {
            UI.$(document).on('click', target, function (e) {
                const $this = UI.$(this);
                const $targetDiv = UI.$(target);
                const layer = UI.$('.' + $this.data('target'));
                const sort = $this.data('sort');
                const onClass = $this.data('on') == true ? true : false;
                const siblings = $this.data('siblings') == true ? true : false;
                const $parent = UI.$(parent);
                console.log($parent);
                const logic = () => {
                    if (onClass) {
                        if (parent === null ? $this.hasClass('on') : layer.is(':visible')) {
                            $this.removeClass('on');
                            layer.removeClass('on');
                        }
                        else {
                            if (siblings) {
                                $targetDiv.removeClass('on');
                                $parent.removeClass('on');
                            }
                            $this.addClass('on');
                            layer.addClass('on');
                        }
                    }
                    if (layer.is(':visible')) {
                        if (sort == 'fade') {
                            layer.fadeOut();
                        }
                        else if (sort == 'normal') {
                            layer.hide();
                        }
                        else if (sort == 'none') {
                            return false;
                        }
                        else {
                            layer.slideUp();
                        }
                    }
                    else {
                        if (sort == 'fade') {
                            if (siblings) {
                                $parent.fadeOut();
                            }
                            layer.fadeIn();
                        }
                        else if (sort == 'normal') {
                            if (siblings) {
                                $parent.hide();
                            }
                            layer.show();
                        }
                        else if (sort == 'none') {
                            return false;
                        }
                        else {
                            if (siblings) {
                                $parent.slideUp();
                            }
                            layer.slideDown();
                        }
                    }
                };
                if (callback) {
                    callback(logic, layer);
                }
                else {
                    logic();
                }
            });
        },
        goTop(target) {
            UI.$(document).on('click', target, function (e){
                UI.$('html, body').stop().animate({ scrollTop: 0 }, 1000);
                console.log('top');
                e.preventDefault();
            });
        },
        topScrollCh(target, parent) {
            if (parent.hasClass('pc')) {
                const winScroll = UI.$(window).scrollTop() || 0;
                if (winScroll == 0) {
                    target.fadeOut();
                    UI.$('#header .inner').removeClass('on');
                }
                else {
                    target.fadeIn();
                    UI.$('#header .inner').addClass('on');
                }
            }
            else {
                return;
            }
        },
        taps(tab_nav, callback) {
            const target = tab_nav + '.tab_nav li';
            UI.$(document).on('click', target, function (e) {
                const $this = UI.$(this);
                const $layer = UI.$(tab_nav + '.tab_cont');
                const idx = $this.index();
                const swap = () => {
                    $this.addClass('on').siblings().removeClass('on');
                    $layer.find('> div').eq(idx).show().siblings().hide();
                };
                if (callback) {
                    try{
                        if(typeof callback == "function") callback(swap);
                        else {
                            eval(callback).call(swap,swap)
                        }
                    }catch (e){
                    }
                }
                else {
                    swap();
                }
                e.preventDefault();
            });
        },
    };
    UI.Lottie = {
        init({ elem, loopFlag, autoplayFlag, pathString }) {
            return lottie.loadAnimation({
                container: elem,
                renderer: 'svg',
                loop: loopFlag,
                autoplay: autoplayFlag,
                path: pathString,
            });
        },
    };
    UI.Fullpage = {
        calcList($list) {
            //console.log($list);
            const length = $list.find('li').length;
            const divisionVal = Math.floor(length/2);
            const remainVal = length%2;
            const weightVal = 80;
            let totalHeight = 0;
            $list.find('li').each((idx, elem)=>{
                const $target = $(elem);
                totalHeight += $target.outerHeight(true); 
            });

            console.log(totalHeight, length, divisionVal, remainVal);
            $list.css({
                'max-height': (totalHeight/length)*divisionVal + (totalHeight/length)*remainVal + weightVal + 600,
            });
            $list.find('li').eq(divisionVal + remainVal).css({
                'margin-top': weightVal,
            });
        },
    },
    UI.callCount = {
        init(target_frame, target_number, useComma) {
            class NumberCounter{
                constructor(target_frame, target_number) {
                    this.count = 0; 
                    this.diff = 0;
                    this.target_count = parseInt(target_number);
                    this.target_frame = document.getElementById(target_frame);
                    this.timer = null;
                }
                counter() {
                    //console.log(this);
                    this.diff = this.target_count - this.count;
                    if(this.diff > 0) {
                        this.count += Math.ceil(this.diff / 5);
                    }
                    this.target_frame.innerHTML = useComma ? this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : this.count.toString();
                    if(this.count < this.target_count) {
                        this.timer = setTimeout(this.counter.bind(this), 30);
                    } else {
                        clearTimeout(this.timer);
                    }
                }
            }

            return new NumberCounter(target_frame, target_number);
        },
    },
    UI.Async = {
        generaterRun(iter) {
            return (function iterate({ value, done }) {
                if (done)
                    return value;
                if (value.constructor === Promise) {
                    return value.then((data) => iterate(iter.next(data))).catch((err) => iter.throw(err));
                }
                else {
                    return iterate(iter.next(value));
                }
            })(iter.next());
        },
        wait(ms, value) {
            return new Promise((resolve) => setTimeout(resolve, ms, value));
        },
        promise(callback) {
            return new Promise((resolve, reject) => {
                callback(resolve, reject);
            });
        },
        debounce(f, interval) {
            let timer = null;
            return (...args) => {
                clearTimeout(timer);
                return new Promise((resolve) => {
                    timer = setTimeout(() => resolve(f(...args)), interval);
                });
            };
        },
        throttling(f, interval) {
            let timer = null;
            return (...args) => {
                return new Promise((resolve) => {
                    if (!timer) {
                        timer = setTimeout(() => {
                            resolve(f(...args));
                            timer = null;
                        }, interval);
                    }
                });
            };
        },
    };
    UI.Fn = {
        filter: function* (f, iter) {
            for (const a of iter) {
                if (f(a))
                    yield a;
            }
        },
        map: function* (f, iter) {
            for (const a of iter) {
                yield f(a);
            }
        },
        take: function (length, iter) {
            let res = [];
            for (const a of iter) {
                res.push(a);
                if (res.length === length)
                    return res;
            }
            return res;
        },
        reduce: function (f, acc, iter) {
            for (const a of iter) {
                acc = f(acc, a);
            }
            return acc;
        },
    };
})(UI || (UI = {}));