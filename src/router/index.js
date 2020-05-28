import Vue from 'vue';
import VueRouter from 'vue-router';
//以上為官方元件

//import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
import Menu from '@/components/pages/menu';
import login from '@/components/pages/login';
import dashboard from '@/components/dashboard';
import products from '@/components/products';
//自訂分頁元件

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '*',
            redirect: 'login',
        },
        //{
        //    name: '首頁', //元件呈現的名稱
         //   path: '/index', //對應的虛擬路徑
         //   component: Home, //對應的原件
         //   meta: { requiresAuth: true },
        //},
        {
            name: 'dashboard', //元件呈現的名稱
            path: '/admin', //對應的虛擬路徑
            component: dashboard, //對應的原件
            children: [
                {
                    path: 'products',
                    name: 'products',
                    component: products,
                    meta: { requiresAuth: true },
                },
            ],
        },
        {
            //name: '分頁', //元件呈現的名稱
            path: '/page', //對應的虛擬路徑
            //component: Page, //對應的原件
            components: {
                default: Page,
                menu: Menu,
            },
            children: [
                {
                    name: '卡片 1', //元件呈現的名稱
                    path: '', //對應的虛擬路徑
                    component: child, //對應的原件  
                },
                {
                    name: '卡片 2', //元件呈現的名稱
                    path: 'child2', //對應的虛擬路徑
                    component: child2, //對應的原件  
                },
                {
                    name: '卡片 3', //元件呈現的名稱
                    path: 'child3', //對應的虛擬路徑
                    component: child3, //對應的原件  
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login,
        }
    ],
});