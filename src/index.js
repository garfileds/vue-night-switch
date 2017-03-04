/**
 * Created by adoug on 2017/3/1.
 */

import Night from './directive';

const install = function(Vue) {
    Vue.directive('Night', Night);
};

if (window.Vue) {
    window.night = Night;
    Vue.use(install); // eslint-disable-line
}

Night.install = install;
export default Night;