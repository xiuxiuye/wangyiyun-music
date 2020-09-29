import Home from '../pages/Home'

interface Routes {
  path: string,
  component?: any,
  redirect?: string | Object
}

const routes: Array<Routes> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
]

export default routes
