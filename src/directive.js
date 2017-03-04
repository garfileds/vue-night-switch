/**
 * Created by adoug on 2017/3/1.
 */

import config from 'config';

let attachFastClick = require('fastclick');

const ctx = '@@Night';

let hasClass = function (el, className) {
    let regexpClassName;
    regexpClassName = new RegExp(`\\s${className}|${className}\\s|^${className}$`);

    return el.className.search(regexpClassName) > -1;
};

let isAttached = function (element) {
    let currentNode = element.parentNode;
    while (currentNode) {
        if (currentNode.tagName === 'HTML') {
            return true;
        }
        if (currentNode.nodeType === 11) {
            return false;
        }
        currentNode = currentNode.parentNode;
    }
    return false;
};

/**
 * add className for el
 * @param el [HTML Element]
 * @param className [String]
 */
let addClassName = function (el, ...className) {
    let oldClassName = el.className;
    oldClassName = oldClassName.split(' ');

    for (let addClassName of className) {
        if (oldClassName.indexOf(addClassName) > -1) continue;
        oldClassName.push(addClassName);
    }

    el.className = oldClassName.join(' ');
};

/**
 * remove className of el
 * @param el
 * @param className
 */
let removeClassName = function (el, ...className) {
    let oldClassName = el.className;

    className.forEach(function (theClassName) {
        let regexpClassName = new RegExp(`\\s${theClassName}|${theClassName}\\s|^${theClassName}$`);
        oldClassName = oldClassName.replace(regexpClassName, '');
    });

    el.className = oldClassName;
};

/**
 * remove/add className
 * switch between two className
 * @param el
 * @param className [String | Array(2 className)]
 */
let toggleClass = function (el, className) {
    if (typeof className === 'string') {
        hasClass(el, className) ? removeClassName(el, className)
            : addClassName(el, className);
    } else if (className instanceof Array) {
        let hasClass1 = hasClass(el, className[0]),
            hasClass2 = hasClass(el, className[1]);
        if (!hasClass1 && !hasClass2) {
            addClassName(el, className[0]);
        } else if ((hasClass1 && !hasClass2) || (!hasClass1 && hasClass2)) {
            toggleClass(el, className[0]);
            toggleClass(el, className[1]);
        } else {
            console.error('toggleClass: wrong condition.');
        }
    } else {
        console.error('toggleClass: wrong argument2.');
    }
};

/**
 * append to document.head by formatting of <style>
 * @param cssText [String]
 */
let insertStyle = function (cssText) {
    let styleEl = document.createElement('style');

    styleEl.setAttribute('type', 'text/css');

    styleEl.appendChild(document.createTextNode(cssText));
    document.head.appendChild(styleEl);
};

let doBind = function () {
    if (this.binded) return;
    this.binded = true;

    let directive = this,
        nightTarget = directive.el;

    let nightEl = document.createElement('div'),
        daytimeEl = document.createElement('div');

    addClassName(nightEl, 'vn-night', 'vn-linear', 'vn-none');
    addClassName(daytimeEl, 'vn-daytime');

    nightEl.innerHTML = config.vnNightHtml;
    daytimeEl.innerHTML = config.vnDaytimeHtml;

    document.body.appendChild(nightEl);
    document.body.appendChild(daytimeEl);

    directive.nightTarget = nightTarget;

    let nightSwitchListener = function () {
        let dayTimeEl = document.querySelector('.vn-daytime'),
            nightEl = document.querySelector('.vn-night');

        directive.isNight = !directive.isNight;

        toggleClass(dayTimeEl, 'vn-none');
        toggleClass(nightEl, 'vn-none');
        toggleClass(document.body, ['vn-night-show', 'vn-daytime-show']);
        toggleClass(document.body, 'vn-night-body');
    };

    directive.nightSwitchListener = nightSwitchListener;

    // default daytime
    directive.isNight = false;

    // fix click 300ms delay on touch device
    attachFastClick(nightTarget);

    insertStyle(config.cssText);

    nightTarget.addEventListener('click', nightSwitchListener);
    // 致命性的一句，直接覆盖了DOM，导致vue和之前的事件都失效了
    // document.body.innerHTML += [config.vnDaytimeHtml, config.vnNightHtml].join('');
};

export default {
    bind: function (el, binding, vnode) {
        el[ctx] = {
            el: el,
            vm: vnode.context
        };

        const args = arguments;
        el[ctx].vm.$on('hook:mounted', function() {
            el[ctx].vm.$nextTick(function() {
                if (isAttached(el[ctx].el)) {
                    doBind.call(el[ctx], args);
                }
            });
        });

        el[ctx].bindTryCount = 0;

        let tryBind = function () {
            el[ctx].bindTryCount++;
            if (el[ctx].bindTryCount > 10) return;

            if (isAttached(el[ctx].el)) {
                doBind.call(el[ctx], args);
            } else {
                setTimeout(tryBind, 50);
            }
        };

        tryBind();
    },

    unbind: function (el) {
        el[ctx].nightTarget.removeEventListener('click', el[ctx].nightSwtichListener);
    }
};