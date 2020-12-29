import React, { useContext } from 'react'
import { StoreContext } from '../../../../store/provider'
import Carousel from '../components/Carousel/index'
import images from './images'
import './index.scss'

export default function PersonalRecommend () {
  const store = useContext(StoreContext) as any

  return (
    <div className="wyy-recommend-discover-music-personal">
      <Carousel images={images} />
      <div className="wyy-recommend-discover-music-personal-sheet">
        <div className={`wyy-recommend-discover-music-personal-title ${store.state.skin.current ? '' : 'wyy-recommend-discover-music-personal-title-dark'}`}>
          <span>推荐歌单</span>
          <span>更多&gt;</span>
        </div>
      </div>
    </div>
  )
}