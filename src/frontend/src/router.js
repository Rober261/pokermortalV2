import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    alias: '/inicio',
    name:'Inicio',
    component: ()=> import('./components/Inicio')
  },
  {
    path: '/deck',
    alias: '/deck',
    name:'Mesa',
    component: ()=> import('./components/DeckList')
  },
  {
    path: '/tournaments',
    alias: '/tournaments',
    name:'Torneos',
    component: ()=> import('./components/TournamentsList')
  } ,
  {
    path: '/howtoplay',
    alias: '/howtoplay',
    name:'How to play',
    component: ()=> import('./components/HowToPlay')
  },
  {
    path: '/login',
    alias: '/login',
    name:'Log in',
    component: ()=> import('./components/LogIn')
  },
  {
    path: '/signup',
    alias: '/signup',
    name:'Sign Up',
    component: ()=> import('./components/SignUp')
  } 
];
// hola

const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router;