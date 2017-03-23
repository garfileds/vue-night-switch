# vue-night-switch

vue-night-switch has the power to switch night/daytime. You can use it
as vue-directive or vue-component.
 
# Install

```bash
 npm install vue-night-switch --save-dev`
```

# Usage: as an directive

You can add `v-night` to any HTML Element
```html
<button v-night></button>
```

### CommonJs

You can use any build tool supports `CommonJs`

```JavaScript
// register globally
var nightDirective = require('vue-night-switch').NightDirective
Vue.use(nightDirective)

// or for an single instance
var nightDirective = require('vue-night-switch').NightDirective
new Vue({
  directives: {nightDirective}
})
```

### ES6

You can also use ES6 module with build tools support babel
```JavaScript
import {NightDirective} from 'vue-night-switch'
```

# Usage: as an vue component

Just add tag `<night-switch />`. It has default style.
```html
<body>
  <night-switch />
</body>
```

### CommonJs
```javascript
var NightSwitch = require('vue-night-switch')
Vue.use(NightSwitch)
```

### ES6
```javascript
import NightSwitch from 'vue-night-switch'
Vue.use(NightSwitch)
```

# Usage: Directly use

You can use `<script>` directly. The file places in `dist/vue-night-switch.js`
```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-night-switch.js"></script>
```

# Demo

Scan it using your phone
![image](https://github.com/garfileds/vue-night-switch/tree/master/examples/images/demo-qr.png)

Or visit `http://45.78.23.100/vueNightSwitch` in your phone

# Other

`npm run build`: get bundle in `/dist` built by webpack

`npm run test`: get unit test result supported by karma

By the way, if you has interest, the project is developed by `fis3`

you can build and cat `examples/demo1.html` by:

```bash
fis3 release -d ./dev
```

```bash
fis3 server start --www ./dev
```





