import Vue from 'vue'
import VueRouter from 'vue-router'
import route from '@/router/route'

// Default Routes
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import GameMap from '../views/GameMap.vue'
import LevelStart from '../views/LevelStart.vue'
import UserRegistration from '../views/UserRegistration.vue'
import UserLogin from '../views/UserLogin.vue'
import OutroView from '../views/OutroView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import CreditsView from '../views/CreditsView.vue'

// Levels
import level1Routes from './levels/level1Routes'
import level2Routes from './levels/level2Routes'
import level3Routes from './levels/level3Routes'
import level4Routes from './levels/level4Routes'
import level5Routes from './levels/level5Routes'
import level6Routes from './levels/level6Routes'

Vue.use(VueRouter)

// const baseRoutes = [
//   {
//     path: '/',
//     name: route.HOME,
//     component: HomeView,
//   },
// ]

// const routes = baseRoutes.concat(
//   level1Routes,
//   level2Routes,
//   level3Routes,
//   level4Routes,
//   level5Routes,
//   level6Routes,
// )

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    }
  },
  routes: [
    {
      path: '/test',
      name: 'test',
      component: () => import('../Test/TestView.vue'),
    },
    {
      path: '/',
      name: route.HOME,
      component: HomeView,
    },
    {
      path: '/main',
      name: route.MAIN,
      component: MainView,
      params: true,
      // meta: {
      //   auth: true,
      //   layout: '',
      //   action: '',
      //   resource: '',
      // },
    },
    {
      path: '/game-map',
      name: route.GAME_MAP,
      component: GameMap,
    },
    {
      path: '/start',
      name: route.START,
      component: LevelStart,
    },
    {
      path: '/register',
      name: route.REGISTER,
      component: UserRegistration,
    },
    {
      path: '/login',
      name: route.LOGIN,
      component: UserLogin,
    },
    {
      path: '/credits',
      name: route.CREDITS,
      component: CreditsView,
    },
    {
      path: '/outro',
      name: route.OUTRO,
      component: OutroView,
    },
    ...level1Routes,
    ...level2Routes,
    ...level3Routes,
    ...level4Routes,
    ...level5Routes,
    ...level6Routes,
    // error 404, Page not found
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
    },
    // {
    //   path: '*',
    //   redirect: route.ERROR_404,
    // },
  ],
})

export default router
