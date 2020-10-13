import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import routes from './routes'

interface RouterViewProps {
  deep?: number
}

function RouterView ({ deep = 0 }: RouterViewProps) {
  return (
    <BrowserRouter>
      <Switch>
        {resolve(deep)}
      </Switch>
    </BrowserRouter>
  )
}

function resolve (deep: number) {
  return flattenTargetDeep(routes, deep).map(route => {
    if (route.redirect) {
      return <Route
        key="route.path"
        exact
        path={route.path}
        render={() => <Redirect to={route.redirect || route.path} />} />
    }
    return <Route
      key="route.path"
      path={route.path}
      component={route.component} />
  })
}

/*将目标层级的数据提取成扁平化数组*/
function flattenTargetDeep (array: Array<any>, k: number): Array<any> {
  if (k === 0) return array
  let res: Array<any> = []
  array.forEach(el => {
    if (el.children) res = res.concat(flattenTargetDeep(el.children, --k))
  })
  return res
}

export default RouterView
