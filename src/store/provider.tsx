import React, { useReducer } from 'react'
import reducer from './reducer'
import initState from './state'

export const StoreContext = React.createContext({})

interface ProviderProps {
  children: any;
  [propName: string]: any;
}

export default function Provider (props: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initState)

  const store = {
    state,
    dispatch
  }

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
}