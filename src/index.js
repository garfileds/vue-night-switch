/**
 * Created by adoug on 2017/3/1.
 */

import NightDirective from './directive';
import Night from './night';

const installDirective = function(Vue) {
    Vue.directive('Night', NightDirective);
};

const installComponent = function (Vue) {
    Vue.directive('Night', NightDirective);
    Vue.component('night-switch', Night);
};

if (window.Vue) {
    window.night = Night;
    Vue.use(installComponent); // eslint-disable-line
}

NightDirective.install = installDirective;
Night.install = installComponent;

export {NightDirective};
export default Night;