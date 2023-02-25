 const createStore = (reducer, initialState) => {
  let state = initialState
  let updater = () => { }
  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
    updater()
  }
  const subscribe = (listener) => {
    updater = listener
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}

export {
  createStore
}

/* este bloque es el motor de mi redux donde creo mi store
donde estan ubicados mis estados iniciales y los procesos
que pasaran por mis redicers mi createstore se la arreglo
a mi const store donde puedo llamar a cada funcion dentro
de mi redux Dispatch, gestate, subscribe*/

