import React, { useRef, useContext, useState, useEffect } from 'react'
import { StoreContext } from '../../store/provider'
import PlayerBtns from './components/PlayerBtns'
import PlayerProgress from './components/PlayerProgress'
import './index.scss'

export default function Player () {
  const audioRef = useRef(null)
  const sourceRef = useRef(null)
  const store = useContext(StoreContext) as any

  useEffect(() => {
    console.log(999);
    //(sourceRef.current as any).src = '/static/media/任然-无人之岛.7de8d62e.flac';
    //(audioRef.current as any).load()
  }, [])

  return (
    <div className="wyy-player-wrapper">
      <audio ref={audioRef} controls preload="auto" loop={store.state.app.play.mode === 1}>
        <source ref={sourceRef} src={require('../../assets/music/任然-无人之岛.flac')} type="audio/mpeg" />
        您的浏览器不支持 audio 元素。
      </audio>
      <PlayerBtns audioDOM={audioRef} />
      <PlayerProgress audioDOM={audioRef} />
    </div>
  )
}
