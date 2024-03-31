import { createRouter, createWebHistory } from "vue-router";
import dashboard from '../pages/master/dashboardPage.vue'
import home from '../pages/homePage.vue'
import profile from '../pages/profilePage.vue'
const routes = [
{
    name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
         {
          name: 'home',
          path: '/home',
          component:home
        },
        {
          name: 'profile',
          path: '/profile',
          component:profile
        }
      ]
},
];
const router = Router();
export default router;
function Router() {
const router = new createRouter({
history: createWebHistory(), 
routes,
});
return router;
}