export default [
  {
    path: '/level/1/intro',
    name: 'Level1Intro',
    component: () => import('@/views/levels/level1/Level1Intro.vue'),
  },
  {
    path: '/level/1/1',
    name: 'Level1Part1',
    component: () => import('@/views/levels/level1/Level1Part1.vue'),
  },
  {
    path: '/level/1/2',
    name: 'Level1Part2',
    component: () => import('@/views/levels/level1/Level1Part2.vue'),
  },
  {
    path: '/level/1/3/intro',
    name: 'Level1Part3Intro',
    component: () => import('@/views/levels/level1/Level1Part3Intro.vue'),
  },
  {
    path: '/level/1/3',
    name: 'Level1Part3',
    component: () => import('@/views/levels/level1/Level1Part3.vue'),
  },
  {
    path: '/level/1/4/intro',
    name: 'Level1Part4Intro',
    component: () => import('@/views/levels/level1/Level1Part4Intro.vue'),
  },
  {
    path: '/level/1/4',
    name: 'Level1Part4',
    component: () => import('@/views/levels/level1/Level1Part4.vue'),
  },
  {
    path: '/level/1/4/end',
    name: 'Level1IntroEnd',
    component: () => import('@/views/levels/level1/Level1IntroEnd.vue'),
  },
]
