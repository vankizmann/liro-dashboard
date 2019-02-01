
import Vue from 'vue';

import Element from 'element-ui';
Vue.use(Element);

import Portal from 'portal-vue';
Vue.use(Portal);

import Router from 'vue-router';
Vue.use(Router);

import Ready from './plugins/ready';
Vue.use(Ready);

import Layout from './components/theme/Layout';
import Menu from './components/theme/Menu';
import MenuItem from './components/theme/MenuItem';
import MenuLink from './components/theme/MenuLink';
import MenuRoute from './components/theme/MenuRoute';

Vue.ready(function () {

    Vue.prototype.http = Axios;
    Vue.prototype.liro = Liro;

    Vue.component('th-layout', Layout);
    Vue.component('th-menu', Menu);
    Vue.component('th-menu-item', MenuItem);
    Vue.component('th-menu-link', MenuLink);
    Vue.component('th-menu-route', MenuRoute);

    window.App = new Vue({

        router: new Router({
            routes: window._router || []
        }),

        mounted: function () {
            setTimeout(() => {
                document.querySelector('body').classList.add('vue__app--ready');
            }, 500);
        }

    }).$mount('#app');

});