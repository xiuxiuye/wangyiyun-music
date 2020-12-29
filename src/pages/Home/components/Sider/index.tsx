import React, { useContext, useState } from 'react'
import SiderBlock from './SiderBlock'
import { StoreContext } from '../../../../store/provider'
import './index.scss'

const blocks = [
  {
    title: '推荐',
    list: [
      {
        title: '发现音乐',
        icon: 'icon-yinle'
      }
    ]
  },
  {
    title: '创建的歌单',
    foldable: true,
    newable: true,
    list: [
      {
        id: -1,
        title: '我喜欢的音乐',
        icon: 'icon-heart'
      },
      {
        id: 1,
        title: '吉尔伽美什的2019歌单',
        icon: 'icon-MUSIC'
      }
    ]
  }
]

export default function Sider () {
  const store = useContext(StoreContext) as any
  const [currentBlock, setCurrentBlock] = useState('推荐')

  return (
    <div className={`wyy-sider ${store.state.skin.current ? '' : 'wyy-sider-dark'}`} style={{ backgroundColor: store.state.skin.colors.siderBGColor }}>
      {blocks.map((block, index) => <SiderBlock key={`siderBlock${index}`} title={block.title} data={block.list} block={block} currentBlock={currentBlock} setCurrentBlock={setCurrentBlock} />)}
    </div>
  )
}
