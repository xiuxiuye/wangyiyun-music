import React from 'react'

export default function MusicSheetList () {
  return (
    <div className="wyy-music-sheet-list">
      <div className="wyy-music-sheet-list-header">
        <div></div>
        <div>音乐标题</div>
        <div>歌手</div>
        <div>专辑</div>
        <div>时长</div>
      </div>
      <div className="wyy-music-sheet-list-body">
        <div>
          <span>01</span>
          <span className="iconfont icon-heart"></span>
          <span className="iconfont icon-download"></span>
        </div>
        <div>
          <span>无人之岛</span>
          <span>SQ</span>
          <span>MV</span>
        </div>
        <div>任然</div>
        <div>没有发生的爱情没有发生的爱情没有发生的爱情</div>
        <div>04 : 45</div>
      </div>
    </div>
  )
}
