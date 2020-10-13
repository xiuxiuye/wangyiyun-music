import React from 'react'
import SiderBlock from './SiderBlock'
import './index.scss'

export default function Sider () {
  const musicSheet = [
    {
      id: 1,
      title: '我喜欢的音乐'
    },
    {
      id: 2,
      title: '吉尔伽美什的2019歌单1312321312321321321321312321'
    }
  ]

  return (
    <div className="wyy-sider">
      <SiderBlock title="创建的歌单" data={musicSheet} />
    </div>
  )
}
