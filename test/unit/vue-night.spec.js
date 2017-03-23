/**
 * Created by adoug on 2017/3/18.
 */

import Vue from 'vue'
import Night from './../../src/index'

Vue.use(Night)

var vm
const ctx = '@@Night'

const classNameIsEqual = function (target, ...className) {
  var result,
    old = target.className.trim()

  old = old.split(' ')
  result = old.length == className.length

  return result && className.every(el => {
    return old.indexOf(el) > -1
  })
}

const createVm = function () {
  if (!document.querySelector('#app')) {
    let divEl = document.createElement('div')
    divEl.id = 'app'
    document.body.appendChild(divEl)
  }

  return new Vue({
    el: '#app',

    template: '<div id="app"><night-switch></night-switch></div>'
  })
}

describe('init night-switch', () => {
  it('component registered', () => {
    expect(Vue.component('night-switch')).not.toBeNull()
  })

  it('v-night directive installed', () => {
    expect(Vue.directive('v-night')).not.toBeNull()
  })
})

vm = createVm()

describe('render night-switch', () => {
  it('night-switch mounted', done => {
    vm.$nextTick(() => {
      var targetEl = vm.$el.querySelector('.vnight-label')
      expect(targetEl).not.toBeNull()
      done()
    })
  })

  it('night element mounted', () => {
    var nightEl = document.querySelector('.vn-night.vn-linear.vn-none')
    expect(nightEl).not.toBeNull()
  })

  it('daytime element mounted', () => {
    var daytimeEl = document.querySelector('.vn-daytime')
    expect(daytimeEl).not.toBeNull()
  })
})

describe('click and switch test', () => {
  var targetEl, nightEl, daytimeEl, clickEvent

  beforeAll(() => {
    // create click event
    /*clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    })*/

    targetEl = vm.$el.querySelector('.vnight-label')
    nightEl = document.querySelector('.vn-night.vn-linear.vn-none')
    daytimeEl = document.querySelector('.vn-daytime')

    spyOn(targetEl[ctx], 'nightSwitchListener')
  })

  it('to night: event processed', done => {
    $(targetEl).click()
    setTimeout(() => {
      // expect(targetEl[ctx].nightSwitchListener).toHaveBeenCalledTimes(1)
      expect(targetEl[ctx].isNight).toBe(true)
      done()
    }, 0)
  })

  describe('to night: style', () => {
    it('night-switch el', () => {
      expect(classNameIsEqual(targetEl, 'vnight-label', 'night')).toBe(true)
    })

    it('nightEl', () => {
      expect(classNameIsEqual(nightEl, 'vn-night', 'vn-linear')).toBe(true)
    })

    it('daytiemEl', () => {
      expect(classNameIsEqual(daytimeEl, 'vn-daytime', 'vn-none')).toBe(true)
    })

    it('body el', done => {
      setTimeout(() => {
        expect(classNameIsEqual(document.body, 'vn-night-show', 'vn-night-body'))
        done()
      }, 1000)
    })
  })

  it('to daytime: event processed', done => {
    $(targetEl).click()
    setTimeout(() => {
      // expect(targetEl[ctx].nightSwitchListener).toHaveBeenCalledTimes(2)
      expect(targetEl[ctx].isNight).toBe(false)
      done()
    }, 0)
  })

  describe('to daytime: style', () => {
    it('night-switch el', () => {
      expect(classNameIsEqual(targetEl, 'vnight-label', 'daytime')).toBe(true)
    })

    it('nightEl', () => {
      expect(classNameIsEqual(nightEl, 'vn-night', 'vn-linear', 'vn-none')).toBe(true)
    })

    it('daytiemEl', () => {
      expect(classNameIsEqual(daytimeEl, 'vn-daytime')).toBe(true)
    })

    it('body el', done => {
      setTimeout(() => {
        expect(classNameIsEqual(document.body, ' vn-daytime-show'))
        done()
      }, 1000)
    })
  })

  afterAll(() => {
    vm.$destroy()
  })
})
