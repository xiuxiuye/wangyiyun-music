import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import routes from './routes'

function RouterView () {

  function resolve () {
    return routes.map(route => {
      if (route.redirect) {
        return <Route
          key="route.path"
          exact
          path={route.path}
          render={() => <Redirect to={route.redirect || route.path} />} />
      }
      return <Route
        key="route.path"
        exact
        path={route.path}
        component={route.component} />
    })
  }
  return (
    <BrowserRouter>
      <Switch>
        {resolve()}
      </Switch>
    </BrowserRouter>
  )
}

export default RouterView
