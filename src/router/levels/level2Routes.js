export default [
  {
    path: '/level/2/intro',
    name: 'Level2Intro',
    component: () => import('@/views/levels/level2/Level2Intro.vue'),
  },
  {
    path: '/level/2/generate-time-charts/intro',
    name: 'Level2GenerateTimeChartsIntro',
    component: () => import('@/views/levels/level2/Level2GenerateTimeChartsIntro.vue'),
  },
  {
    path: '/level/2/generate-time-charts',
    name: 'Level2GenerateTimeCharts',
    component: () => import('@/views/levels/level2/Level2GenerateTimeCharts.vue'),
  },
  {
    path: '/level/2/generate-time-charts/end',
    name: 'Level2GenerateTimeChartsEndIntro',
    component: () => import('@/views/levels/level2/Level2GenerateTimeChartsEndIntro.vue'),
  },
  {
    path: '/level/2/chrono-test/intro',
    name: 'Level2ChronoTestIntro',
    component: () => import('@/views/levels/level2/Level2ChronoTestIntro.vue'),
  },
  {
    path: '/level/2/chrono-test',
    name: 'Level2ChronoTest',
    component: () => import('@/views/levels/level2/Level2ChronoTest.vue'),
  },
  {
    path: '/level/2/chrono-test/end',
    name: 'Level2ChronoTestIntroEnd',
    component: () => import('@/views/levels/level2/Level2ChronoTestIntroEnd.vue'),
  },
  {
    path: '/level/2/alpen-method-quiz/intro',
    name: 'Level2AlpenMethodQuizIntro',
    component: () => import('@/views/levels/level2/Level2AlpenMethodQuizIntro.vue'),
  },
  {
    path: '/level/2/alpen-method-quiz',
    name: 'Level2AlpenMethodQuiz',
    component: () => import('@/views/levels/level2/Level2AlpenMethodQuiz.vue'),
  },
  {
    path: '/level/2/alpen-method-quiz/end',
    name: 'Level2AlpenMethodQuizIntroEnd',
    component: () => import('@/views/levels/level2/Level2AlpenMethodQuizIntroEnd.vue'),
  },
  {
    path: '/level/2/weekly-schedule/intro',
    name: 'Level2WeeklyScheduleIntro',
    component: () => import('@/views/levels/level2/Level2WeeklyScheduleIntro.vue'),
  },
  {
    path: '/level/2/weekly-schedule',
    name: 'Level2WeeklySchedule',
    component: () => import('@/views/levels/level2/Level2WeeklySchedule.vue'),
  },
  {
    path: '/level/2/weekly-schedule/end',
    name: 'Level2WeeklyScheduleIntroEnd',
    component: () => import('@/views/levels/level2/Level2WeeklyScheduleIntroEnd.vue'),
  },
  {
    path: '/level/2/end',
    name: 'Level2IntroEnd',
    component: () => import('@/views/levels/level2/Level2IntroEnd.vue'),
  },
]
