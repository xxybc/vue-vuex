import Vue from 'vue';
import Vuex from 'vuex';
import login from './loginModules/login'
import todo from './todoModules/index';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login: login,
        todo: todo
    },
});
