import React from 'react'
import Cover from '../../../assets/avator.jpg'

export default function MusicSheetHeader () {
  return (
    <div className="wyy-music-sheet-header">
      <img className="wyy-music-sheet-cover" src={Cover} alt=""/>
      <div className="wyy-music-sheet-desc">
        <div className="wyy-music-sheet-desc-1">
          <span>歌单</span>
          <span>吉尔伽美的私人歌单</span>
        </div>
        <div className="wyy-music-sheet-desc-2">
          <img src={Cover} alt=""/>
          <span>吉尔伽美什</span>
          <span>2019-04-01创建</span>
        </div>
        <div className="wyy-music-sheet-desc-3">
          <div className="wyy-music-sheet-btn wyy-music-sheet-playall">
            <span className="iconfont icon-caret-right"></span>
            <span>播放全部</span>
          </div>
          <div className="wyy-music-sheet-btn">
            <span className="iconfont icon-star"></span>
            <span>已收藏（290万）</span>
          </div>
          <div className="wyy-music-sheet-btn">
            <span className="iconfont icon-ArtboardCopy"></span>
            <span>已分享（150万）</span>
          </div>
          <div className="wyy-music-sheet-btn">
            <span className="iconfont icon-download"></span>
            <span>下载全部</span>
          </div>
        </div>
        <div className="wyy-music-sheet-desc-4">
          <span>标签：</span><span>翻唱</span> / <span>放松</span> / <span>工作</span>
        </div>
        <div className="wyy-music-sheet-desc-4">
          <span>歌曲：170</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>播放： 100万</span>
        </div>
        <div className="wyy-music-sheet-desc-4">
          <span>简介：暂无简介</span>
        </div>
      </div>
    </div>
  )
}
