import {createRouter, createWebHashHistory} from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/cockpit',
      name: 'Home',
      meta: {
        title: '首页',
        hideBreadcrumb: true,
        hideMenu: false,
      },
    },
    {
      path: '/cockpit',
      component: () => import('@/views/Cockpit/index.vue'),
      name: 'Cockpit',
      meta: {
        title: '综合大屏',
        hideBreadcrumb: true,
        hideMenu: false,
      },
    },
    {
      path: '/bus',
      component: () => import('@/views/Bus/index.vue'),
      name: 'Bus',
      meta: {
        title: '公交',
        hideBreadcrumb: true,
        hideMenu: false,
      },
    },
    {
      path: '/clean',
      component: () => import('@/views/Clean/index.vue'),
      name: 'Clean',
      meta: {
        title: '清洁',
        hideBreadcrumb: true,
        hideMenu: false,
      },
    },
    {
      path: '/environment',
      component: () => import('@/views/Environment/index.vue'),
      name: 'Environment',
      meta: {
        title: '清洁',
        hideBreadcrumb: true,
        hideMenu: false,
      },
    },
    {
      path: '/floodControl',
      component: () => import('@/views/FloodControl/index.vue'),
      name: 'FloodControl',
      meta: {
        title: '清洁',
        hideBreadcrumb: true,
        hideMenu: false,
      },
    },
  ],
  strict: true,
  scrollBehavior: () => ({left: 0, top: 0}),
})

export default router
