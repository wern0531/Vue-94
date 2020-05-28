// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';

import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});

router.beforeEach((to, from, next) => {
  console.log('to', to,'from', from,'next', from )
  // ...
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`; //'https://vue-course-api.hexschool.io/api/wern/products';
        axios.post(api).then((response) => {
        console.log(response.data);
        if (response.data.success){
          next();
        } else {
          next({
            path: '/login',
          });
        }
      });
  }else {
    next();
  }
})
