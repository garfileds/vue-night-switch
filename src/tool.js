/**
 * Created by adoug on 2017/3/6.
 */

export {hasClass, isAttached, addClassName, removeClassName, toggleClass, insertStyle}

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

export default {
    hasClass,
    addClassName,
    removeClassName,
    toggleClass,
    insertStyle,
    isAttached
}