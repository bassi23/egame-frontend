export default [
  {
    path: '/level/3/intro',
    name: 'Level3Intro',
    component: () => import('@/views/levels/level3/Level3Intro.vue'),
  },
  {
    path: '/level/3/choose-motivators/intro',
    name: 'Level3ChooseMotivatorsIntro',
    component: () => import('@/views/levels/level3/Level3ChooseMotivatorsIntro.vue'),
  },
  {
    path: '/level/3/choose-motivators',
    name: 'Level3ChooseMotivators',
    component: () => import('@/views/levels/level3/Level3ChooseMotivators.vue'),
  },
  {
    path: '/level/3/choose-motivators/end',
    name: 'Level3ChooseMotivatorsIntroEnd',
    component: () => import('@/views/levels/level3/Level3ChooseMotivatorsIntroEnd.vue'),
  },
  {
    path: '/level/3/motives/intro',
    name: 'Level3MotivesIntro',
    component: () => import('@/views/levels/level3/Level3MotivesIntro.vue'),
  },
  {
    path: '/level/3/motives',
    name: 'Level3Motives',
    component: () => import('@/views/levels/level3/Level3Motives.vue'),
  },
  {
    path: '/level/3/motives/end',
    name: 'Level3MotivesIntroEnd',
    component: () => import('@/views/levels/level3/Level3MotivesIntroEnd.vue'),
  },
  {
    path: '/level/3/motivation-quiz/intro',
    name: 'Level3MotivationQuizIntro',
    component: () => import('@/views/levels/level3/Level3MotivationQuizIntro.vue'),
  },
  {
    path: '/level/3/motivation-quiz',
    name: 'Level3MotivationQuiz',
    component: () => import('@/views/levels/level3/Level3MotivationQuiz.vue'),
  },
  {
    path: '/level/3/motivation-quiz/end',
    name: 'Level3MotivationQuizIntroEnd',
    component: () => import('@/views/levels/level3/Level3MotivationQuizIntroEnd.vue'),
  },
  {
    path: '/level/3/strategy-assessment/intro',
    name: 'Level3StrategyAssessmentIntro',
    component: () => import('@/views/levels/level3/Level3StrategyAssessmentIntro.vue'),
  },
  {
    path: '/level/3/strategy-assessment',
    name: 'Level3StrategyAssessment',
    component: () => import('@/views/levels/level3/Level3StrategyAssessment.vue'),
  },
  {
    path: '/level/3/strategy-assessment/end',
    name: 'Level3StrategyAssessmentIntroEnd',
    component: () => import('@/views/levels/level3/Level3StrategyAssessmentIntroEnd.vue'),
  },
  {
    path: '/level/3/end',
    name: 'Level3IntroEnd',
    component: () => import('@/views/levels/level3/Level3IntroEnd.vue'),
  },
]
