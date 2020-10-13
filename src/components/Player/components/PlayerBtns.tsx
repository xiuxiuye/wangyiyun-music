import React, { useState, useContext } from 'react'
import { StoreContext } from '../../../store/provider'

interface PlayerBtnsProps {
  audioDOM: any
}

export default function PlayerBtns ({ audioDOM }: PlayerBtnsProps) {
  const store = useContext(StoreContext) as any
  const styles = { color: store.state.app.skin.colors.subColor }
  const [isPlaying, setIsPlaying] = useState(false)

  function togglePlayerStatus () {
    if (isPlaying) {
      audioDOM.current.pause()
    } else {
      audioDOM.current.play()
    }
    setIsPlaying(pre => !pre)
  }



  return (
    <div className="wyy-player-btns" style={styles}>
      <span className="iconfont icon-step-backward"></span>
      <span className={isPlaying ? 'iconfont icon-poweroff-circle-fill' : 'iconfont icon-play-circle-fill'} onClick={() => togglePlayerStatus()}></span>
      <span className="iconfont icon-step-forward"></span>
    </div>
  )
}
