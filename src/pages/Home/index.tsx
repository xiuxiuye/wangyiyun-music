import React from 'react'
import RouterView from '../../router/index'
import Sider from './components/Sider/index'
import './index.scss'

function Home () {
  return (
    <div className="wyy-home wyy-app-page">
      <Sider />
      <RouterView deep={1} />
    </div>
  )
}

export default Home
