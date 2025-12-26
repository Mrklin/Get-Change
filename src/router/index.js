import { createRouter, createWebHistory } from 'vue-router'
import AuthLayoutView from '@/pages/AuthLayoutView.vue'
import DashLayout from '@/pages/DashLayout.vue'
import SignIn from '@/components/Auth Component/SignIn.vue'
import SignUp from '@/components/Auth Component/SignUp.vue'
import Reset from '@/components/Auth Component/Reset.vue'
import Menu from '@/components/Dash Comp/Menu.vue'
import Profile from '@/components/Dash Comp/Profile.vue'
import About from '@/components/Dash Comp/About.vue'
import Wallet from '@/components/Dash Comp/Wallet.vue'
import Settings from '@/components/Dash Comp/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      component: AuthLayoutView,
      children: [
        {
          path: '',
          name: 'signUp',
          component: SignUp,
          meta: {isPublic: true}
        },
        {
          path: 'signIn',
          name: 'signIn',
          component: SignIn,
          meta: {isPublic: true}
        },
        {
          path: 'reset',
          name: 'reset',
          component: Reset,
          meta: {isPublic: true}
        } 
      ]
    },
    {
      path: '/',
      component: DashLayout,
      meta: {requiresAuth: true},
      children: [
        {
          path: 'menu',
          name: 'menu',
          component: Menu, 
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile,
        },
        {
          path: 'about',
          name: 'about',
          component: About,
        },
        {
          path: 'wallet',
          name: 'wallet',
          component: Wallet
        },
        {
          path:'settings',
          name:'settings',
          component: Settings
        } 

       
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      redirect: {name:'signIn'}
    }
    
  ],
})



router.beforeEach((to, from, next)=>{

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if(to.meta.requiresAuth && !isAuthenticated){
    next({name: 'signIn'});

  }else if(to.meta.isPublic && isAuthenticated){

    if (to.name === 'signIn' || to.name === 'signUp' || to.name === 'reset') {
        next({ name: 'menu' }); 
    } else {
        next(); 
    }
    
  } else{
    next();
  }
});










// router.beforeEach((to, from, next)=>{

//   const requireAuth = to.matched.some(record => record.meta.requiresAuth);

//   const isAuthenticated = store.getters.isAuthenticated;

//   if (requireAuth && !isAuthenticated) {
//     next({name: 'signIn'});

//   }else if(!requireAuth && isAuthenticated){

//     if (to.name === 'signIn' || to.name === 'signUp' || to.name === 'reset') {
//         next({ name: 'menu' }); 
//     } else {
//         next(); 
//     }
//   } else{
//     next();
//   }
// });

export default router
