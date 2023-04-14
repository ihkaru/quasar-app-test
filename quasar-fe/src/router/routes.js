
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '/route', 
        component: () => import('pages/RoutePage.vue'),
        children: [
          { path: '', component: () => import('pages/route/RouteSelect.vue') },
        ] 
      },
      { path: '/map', component: () => import('pages/route/AddRoute.vue') },
      { path: '/auth', component: () => import('pages/AuthPage.vue') },
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
