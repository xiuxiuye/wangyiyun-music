import React, { useState } from 'react'
import MusicSheetList from './MusicSheetList'

export default function MusicSheetContent () {
  const [currentNav, setCurrentNav] = useState(0)
  const navs = ['歌曲列表', '评论（120938）', '收藏者']
  
  return (
    <div className="wyy-music-sheet-content">
      <div className="wyy-music-sheet-content-nav">
        {navs.map((el, index) => <span key={index} className={currentNav === index ? 'wyy-music-sheet-content-nav-active' : ''} onClick={() => setCurrentNav(index)}>{el}</span>)}
      </div>
      <MusicSheetList />
    </div>
  )
}
