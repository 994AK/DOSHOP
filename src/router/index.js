import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'
import Register from '../views/register/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ name: 'Home' }) : next()
    }
  }]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/*
  判断用户是否登录,数据保存在浏览器中
  这个beforeResolve: 路由切换都会执行这个方法
*/
router.beforeResolve((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to;
  (isLogin || name === 'Login' || name === 'Register') ? next() : next({ name: 'Login' })
})
export default router
