export default [
  {
    path: '/level/5/intro',
    name: 'Level5Intro',
    component: () => import('@/views/levels/level5/Level5Intro.vue'),
  },
  {
    path: '/level/5/learning-strategy-assessment/intro',
    name: 'Level5LearningStrategyAssessmentIntro',
    component: () => import('@/views/levels/level5/Level5LearningStrategyAssessmentIntro.vue'),
  },
  {
    path: '/level/5/learning-strategy-assessment',
    name: 'Level5LearningStrategyAssessment',
    component: () => import('@/views/levels/level5/Level5LearningStrategyAssessment.vue'),
  },
  {
    path: '/level/5/learning-strategy-assessment/end',
    name: 'Level5LearningStrategyAssessmentIntroEnd',
    component: () => import('@/views/levels/level5/Level5LearningStrategyAssessmentIntroEnd.vue'),
  },
  {
    path: '/level/5/loci-method/intro',
    name: 'Level5LociMethodIntro',
    component: () => import('@/views/levels/level5/Level5LociMethodIntro.vue'),
  },
  {
    path: '/level/5/loci-method',
    name: 'Level5LociMethod',
    component: () => import('@/views/levels/level5/Level5LociMethod.vue'),
  },
  {
    path: '/level/5/loci-method/end',
    name: 'Level5LociMethodIntroEnd',
    component: () => import('@/views/levels/level5/Level5LociMethodIntroEnd.vue'),
  },
  {
    path: '/level/5/mindmaps/intro',
    name: 'Level5MindmapsIntro',
    component: () => import('@/views/levels/level5/Level5MindmapsIntro.vue'),
  },
  {
    path: '/level/5/mindmaps',
    name: 'Level5Mindmaps',
    component: () => import('@/views/levels/level5/Level5Mindmaps.vue'),
  },
  {
    path: '/level/5/mindmaps/end',
    name: 'Level5MindmapsIntroEnd',
    component: () => import('@/views/levels/level5/Level5MindmapsIntroEnd.vue'),
  },
  {
    path: '/level/5/learning-groups-quiz/intro',
    name: 'Level5LearningGroupsQuizIntro',
    component: () => import('@/views/levels/level5/Level5LearningGroupsQuizIntro.vue'),
  },
  {
    path: '/level/5/learning-groups-quiz',
    name: 'Level5LearningGroupsQuiz',
    component: () => import('@/views/levels/level5/Level5LearningGroupsQuiz.vue'),
  },
  {
    path: '/level/5/learning-groups-quiz/end',
    name: 'Level5LearningGroupsQuizIntroEnd',
    component: () => import('@/views/levels/level5/Level5LearningGroupsQuizIntroEnd.vue'),
  },
  {
    path: '/level/5/end',
    name: 'Level5IntroEnd',
    component: () => import('@/views/levels/level5/Level5IntroEnd.vue'),
  },
]
