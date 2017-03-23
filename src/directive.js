/**
 * Created by adoug on 2017/3/1.
 */

import tool from './tool'

import config from './config'

var attachFastClick = require('fastclick')

const ctx = '@@Night'

let doBind = function () {
  if (this.binded) return
  this.binded = true

  let directive = this,
    nightTarget = directive.el

  let nightEl = document.createElement('div'),
    daytimeEl = document.createElement('div')

  tool.addClassName(nightEl, 'vn-night', 'vn-linear', 'vn-none')
  tool.addClassName(daytimeEl, 'vn-daytime')

  nightEl.innerHTML = config.vnNightHtml
  daytimeEl.innerHTML = config.vnDaytimeHtml

  document.body.appendChild(nightEl)
  document.body.appendChild(daytimeEl)

  directive.nightTarget = nightTarget

  let nightSwitchListener = function () {
    let dayTimeEl = document.querySelector('.vn-daytime'),
      nightEl = document.querySelector('.vn-night')

    directive.isNight = !directive.isNight

    tool.toggleClass(dayTimeEl, 'vn-none')
    tool.toggleClass(nightEl, 'vn-none')
    tool.toggleClass(document.body, ['vn-night-show', 'vn-daytime-show'])

    directive.vm.$nextTick(function () {
      setTimeout(function () {
        tool.toggleClass(document.body, 'vn-night-body')
      }, 500)
    })
  }

  directive.nightSwitchListener = nightSwitchListener

    // default daytime
  directive.isNight = false

    // fix click 300ms delay on touch device
  attachFastClick.attach(nightTarget)

  tool.insertStyle(config.cssText)

  nightTarget.addEventListener('click', nightSwitchListener)
    // 致命性的一句，直接覆盖了DOM，导致vue和之前的事件都失效了
    // document.body.innerHTML += [config.vnDaytimeHtml, config.vnNightHtml].join('')
}

export default {
  bind: function (el, binding, vnode) {
    el[ctx] = {
      el: el,
      vm: vnode.context
    }

    const args = arguments
    el[ctx].vm.$on('hook:mounted', function() {
      el[ctx].vm.$nextTick(function() {
        if (tool.isAttached(el[ctx].el)) {
          doBind.call(el[ctx], args)
        }
      })
    })

    el[ctx].bindTryCount = 0

    let tryBind = function () {
      el[ctx].bindTryCount++
      if (el[ctx].bindTryCount > 10) return

      if (tool.isAttached(el[ctx].el)) {
        doBind.call(el[ctx], args)
      } else {
        setTimeout(tryBind, 50)
      }
    }

    tryBind()
  },

  unbind: function (el) {
    el[ctx].nightTarget.removeEventListener('click', el[ctx].nightSwtichListener)
  }
}
