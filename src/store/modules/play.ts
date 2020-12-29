export default {
  namespace: 'play',
  state: {
    // 0: 列表循环，1：单曲循环，2：随机播放
    mode: 0,
    playing: false,
    // 音量 0 ~ 1
    volume: 0.5,
    current: 
    {
      id: -1010,
      title: '忽而今夏',
      duration: 258,
      progress: 0,
      url: require('../../assets/musicSheets/我喜欢的音乐/music/徐薇-忽而今夏.mp3'),
      singer: '徐薇'
    },
    playList: [
      {
        id: -1010,
        title: '忽而今夏',
        duration: 258,
        url: require('../../assets/musicSheets/我喜欢的音乐/music/徐薇-忽而今夏.mp3'),
        singer: '徐薇'
      }
    ]
  },
  actions: {
    setMode (state: object, value: number) {
      (state as any).mode = value
    },
    setPlaying (state: object, value: boolean) {
      (state as any).playing = value
    },
    setCurrent (state: object, value: object) {
      (state as any).current = value
    },
    setPlayList (state: object, value: object) {
      (state as any).playList = value
    },
    setVolume (state: object, value: number) {
      (state as any).volume = value
    }
  }
}
