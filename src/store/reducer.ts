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
      state.skin = Object.assign({}, state.skin, action.value)
      return Object.assign({}, state)
    default:
      throw new Error('The action parameter tyep property does not exist of store dispatch funcion!')
  }
}

export default reducer
