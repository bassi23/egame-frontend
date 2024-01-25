export default [
  {
    path: '/level/6/intro',
    name: 'Level6Intro',
    component: () => import('@/views/levels/level6/Level6Intro.vue'),
  },
  {
    path: '/level/6/evaluate-scenarios/intro',
    name: 'Level6EvaluateScenariosIntro',
    component: () => import('@/views/levels/level6/Level6EvaluateScenariosIntro.vue'),
  },
  {
    path: '/level/6/evaluate-scenarios',
    name: 'Level6EvaluateScenarios',
    component: () => import('@/views/levels/level6/Level6EvaluateScenarios.vue'),
  },
  {
    path: '/level/6/evaluate-scenarios/end',
    name: 'Level6EvaluateScenariosIntroEnd',
    component: () => import('@/views/levels/level6/Level6EvaluateScenariosIntroEnd.vue'),
  },
  {
    path: '/level/6/attribution-quiz/intro',
    name: 'Level6AttributionQuizIntro',
    component: () => import('@/views/levels/level6/Level6AttributionQuizIntro.vue'),
  },
  {
    path: '/level/6/attribution-quiz',
    name: 'Level6AttributionQuiz',
    component: () => import('@/views/levels/level6/Level6AttributionQuiz.vue'),
  },
  {
    path: '/level/6/attribution-quiz/end',
    name: 'Level6AttributionQuizIntroEnd',
    component: () => import('@/views/levels/level6/Level6AttributionQuizIntroEnd.vue'),
  },
  {
    path: '/level/6/benchmark-orientation/intro',
    name: 'Level6BenchmarkOrientationIntro',
    component: () => import('@/views/levels/level6/Level6BenchmarkOrientationIntro.vue'),
  },
  {
    path: '/level/6/benchmark-orientation',
    name: 'Level6BenchmarkOrientation',
    component: () => import('@/views/levels/level6/Level6BenchmarkOrientation.vue'),
  },
  {
    path: '/level/6/benchmark-orientation/end',
    name: 'Level6BenchmarkOrientationIntroEnd',
    component: () => import('@/views/levels/level6/Level6BenchmarkOrientationIntroEnd.vue'),
  },
  {
    path: '/level/6/practical-application/intro',
    name: 'Level6PracticalApplicationIntro',
    component: () => import('@/views/levels/level6/Level6PracticalApplicationIntro.vue'),
  },
  {
    path: '/level/6/practical-application',
    name: 'Level6PracticalApplication',
    component: () => import('@/views/levels/level6/Level6PracticalApplication.vue'),
  },
  {
    path: '/level/6/practical-application/end',
    name: 'Level6PracticalApplicationIntroEnd',
    component: () => import('@/views/levels/level6/Level6PracticalApplicationIntroEnd.vue'),
  },
]
