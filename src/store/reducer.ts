interface StoreAction {
  type: string;
  value: any;
}

interface StoreState {
  [propName: string]: any;
}

function reducer (state: StoreState, action: StoreAction): object {
  switch (action.type) {
    case 'skin':
      return handleStateApp(state, action.type, action.value)
    case 'play':
      return handleStateApp(state, action.type, action.value)
    default:
      throw new Error('The action parameter tyep property does not exist of store dispatch funcion!')
  }
}

function handleStateApp (state: StoreState, type: string, value: any) {
  switch (type) {
    case 'skin':
      state.app.skin = Object.assign({}, state.app.skin, value)
      break
    case 'play':
      state.app.play = Object.assign({}, state.app.play, value)
      break
    default:
      break
  }
  localStorage.appSetting = JSON.stringify(state.app)
  return Object.assign({}, state)
}

export default reducer
