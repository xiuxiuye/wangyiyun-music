import Home from '../pages/Home/index'
import MusicSheet from '../pages/MusicSheet/index'

interface Routes {
  path: string,
  component?: any,
  redirect?: string | Object
  children?: Array<object>
}

const routes: Array<Routes> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/musicsheet',
        component: MusicSheet
      }
    ]
  }
]

export default routes
