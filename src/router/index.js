import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 解决重复点击导航, 控制台报错的问题
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

// 路由规则
const constantRoutes = [
  {
    path: '/',
    component: ()=>import('@/components/Nav'),
    children: [
      {
        path: '',
        name: 'Home',
        component: ()=>import('@/views/Home'),
      }, {
        path: 'article',
        name: 'Article',
        component: ()=>import('@/views/Article'),
        children: [{
          path: '',
          component: ()=>import('@/views/Article/List')
        }, {
          path: 'list',
          component: ()=>import('@/views/Article/List')
        }, {
          name: 'Details',
          path: 'details/:id?',
          component: ()=>import('@/views/Article/Details')
        }]
      }, {
        path: 'comments',
        name: 'Comments',
        component: ()=>import('@/views/Comments'),
        children: [{
          path: 'page/:page',
          component: ()=>import('@/views/Comments')
        }]
      }, {
        path: 'message',
        name: 'Message',
        component: ()=>import('@/views/Message'),
        children: [{
          path: '',
          component: ()=>import('@/views/Message/MyMsg')
        }]
      }, {
        path: 'classify',
        name: 'Classify',
        component: ()=>import('@/views/Classify')
      }
    ]
  }
]

const router = new Router({
  routes: constantRoutes,
  scrollBehavior: () => ({ y: 0 })
})

export default router;
