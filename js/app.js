import store from './store.js'
import { BURN } from './actions/index.js'

store.subscribe(() => {
  window.result.textContent = `Haz quemado ${store.getState()} calorías`
})


/*---------------------------------*/
/* con dispatch es para enviar acciones al reducer
en este caso la accion se envia cuando le damos
click se envia un nuevo estado a dispatch
y llega en forma de ACTIONS a mi funcion y
se actualiza el estado a traves del update
que es un array vacio */

const burn = () => {
  store.dispatch({
    type: BURN,
    payload: 1.42,
  })
}


window.burn.addEventListener('click', burn)
