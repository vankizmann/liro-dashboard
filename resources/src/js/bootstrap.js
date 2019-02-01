
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

// import lodash from 'lodash';
// window._ = window.lodash = lodash;

import Axios from 'axios';
window.Axios = Axios;

import Liro from './liro/index';
window.Liro = Liro;

// Liro.Ajax.set('foobar', 'https://jsonplaceholder.typicode.com/posts');
//
// Liro.Modules.bind('app-test', {
//     scripts: ['resources/dist/js/app-test.js'], modules: ['app-test', 'app-foobar']
// });

Axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

Axios.interceptors.request.use(
    function (request) {
        Liro.Events.emit('axios:load', request);
        return request;
    },
    function (error) {
        Liro.Events.emit('axios:error', error.response);
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    function (response) {
        Liro.Events.emit('axios:done', response);
        return response;
    },
    function (error) {
        Liro.Events.emit('axios:error', error.response);
        return Promise.reject(error);
    }
);

require('./app/app');
