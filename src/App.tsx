import React from 'react'
import RouterView from './router/index'
import Header from './components/Header/index'
import Provider from './store/provider'

function App() {
  return (
    <Provider>
      <div>
        <Header />
        <RouterView />
      </div>
    </Provider>
  )
}

export default App
