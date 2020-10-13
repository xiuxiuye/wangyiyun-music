import React from 'react'
import RouterView from './router/index'
import Header from './components/Header/index'
import Player from './components/Player/index'
import Provider from './store/provider'

function App() {
  return (
    <Provider>
      <div className="wyy-app">
        <Header />
        <RouterView />
        <Player />
      </div>
    </Provider>
  )
}

export default App
