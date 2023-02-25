import { createStore } from "./redux/index.js";
import reducer from "./reducers/index.js";

const store = createStore(reducer, 0)

export default store

/* al crear mi store inicializo mi store en 0 que es el
estado inicial el cual lo obtengo mediante la funcion
gestate que la igualo a mi let state y la envio como
variable a mi dispatch*/