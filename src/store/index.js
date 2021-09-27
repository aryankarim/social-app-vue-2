import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/posts';
import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    posts,
    auth,
  },
});
export default store;
