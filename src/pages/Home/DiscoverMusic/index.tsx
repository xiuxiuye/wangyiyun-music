import React, { useContext } from 'react'
import RouterView from '../../../router/index'
import { StoreContext } from '../../../store/provider'
import './index.scss'

interface DiscoverMusicProps {
  routes?: Array<any>
}

export default function DiscoverMusic (props: DiscoverMusicProps) {
  const store = useContext(StoreContext) as any
  const path = (props as any).location.pathname
  const navs = [
    { name: '个性推荐', path: '/recommend/discover/personal' },
    { name: '歌单', path: '' },
    { name: '主播电台', path: '' },
    { name: '排行榜', path: '' },
    { name: '歌手', path: '' },
    { name: '最新音乐', path: '' }
  ]
  return (
    <div className="wyy-recommend-discover-music scrollbar">
      <div className={`wyy-recommend-discover-music-navs ${store.state.skin.current ? '' : 'wyy-recommend-discover-music-navs-dark'}`}>
        {navs.map((el, index) => <span key={`nav${index}`}
          className={`${path === el.path ? 'wyy-recommend-discover-nav-active' : ''}`}
          style={{
            fontWeight: path === el.path ? 'bold' : 'normal',
            borderBottomColor: path === el.path ? store.state.skin.colors.balanceColor : '',
            color: path === el.path ? store.state.skin.colors.balanceColor : '',
          }}>{el.name}</span>)}
      </div>
      <RouterView routes={props.routes} />
    </div>
  )
}
