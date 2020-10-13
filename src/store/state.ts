let app = {
  skin: {
    current: 1,
    colors: {
      primaryColor: 'rgba(198, 47, 47, 1)',
      subColor: 'rgba(232, 60, 60, 1)',
      contentBGColor: 'rgba(250, 250, 250, 1)',
      siderBGColor: 'rgba(245, 245, 247, 1)'
    }
  },
  play: {
    // 0: 列表循环，1：单曲循环，2：随机播放
    mode: 2,
    current: {
      id: 100,
      title: '无人之岛',
      duration: 285,
      progress: 60,
      url: ''
    },
    playList: [
      {
        id: 100,
        title: '无人之岛',
        duration: 285,
        url: ''
      },
      {
        id: 101,
        title: '疑心病',
        duration: 286,
        url: ''
      }
    ]
  }
}
if (localStorage.appSetting) {
  try {
    app = JSON.parse(localStorage.appSetting)
  } catch (error) {
    console.error(error)
  }
}

export default {
  app
}
