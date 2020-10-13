import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../../store/provider'

const playMode = [
  {
    class: 'icon-yinlebofangye-xunhuanbofang',
    title: '循环播放'
  },
  {
    class: 'icon-yinlebofangye-danquxunhuan',
    title: '单曲循环'
  },
  {
    class: 'icon-yinlebofangye-suijibofang',
    title: '随机播放'
  }
]

interface PlayerBtnsProps {
  audioDOM: any
}

export default function PlayerProgress ({ audioDOM }: PlayerBtnsProps) {
  const store = useContext(StoreContext) as any
  const barStyles = { backgroundColor: store.state.app.skin.colors.subColor }
  const playModeClasses = `iconfont ${playMode[store.state.app.play.mode].class}`
  const [time, setTime] = useState('00 : 00')

  useEffect(() => {
    console.log(111, audioDOM.current)
    console.log(777, audioDOM.current.readyState)
    let interval: any = null
    interval = setInterval(() => {
      console.log(333, audioDOM.current.readyState)
      if (audioDOM.current.readyState) {
        const t = parseInt(audioDOM.current.duration)
        const m = (t / 60) > 9 ? Math.floor(t / 60) : `0${Math.floor(t / 60)}`
        const s = (t % 60) > 9 ? (t % 60) : `0${(t % 60)}`
        console.log(t, m, s)
        setTime(`${m} : ${s}`)
        clearInterval(interval)
      }
    }, 0)
  }, [audioDOM])

  return (
    <div className="wyy-player-progress">
      <div className="wyy-player-progress-track">
        <div className="wyy-player-progress-bar" style={barStyles}></div>
        <div className="wyy-player-progress-ball"></div>
      </div>
      <div className="wyy-player-progress-time">{time}</div>
      <span className={playModeClasses} title={playMode[store.state.app.play.mode].title} onClick={() => store.dispatch({
        type: 'play',
        value: {
          mode: ++store.state.app.play.mode % 3
        }
      })}></span>
    </div>
  )
}
