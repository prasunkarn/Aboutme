
const routes = [
  {
    path: '/prasun',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path:'/prasun/aboutme',
        component: () => import('pages/AboutMe.vue')
      },
      {
        path:'/prasun/skills',
        component: () => import('pages/MySkills.vue')
      },
      {
        path:'/prasun/education',
        component: () => import('pages/EducationalBackground.vue')
      },
      {
        path:'/prasun/hobbies',
        component: () => import('pages/MyHobbies.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
  
]

export default routes
