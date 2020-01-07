import {createStore} from "redux"
import rootReducer from "./Reducers/index"

const initialState = {}
const store = createStore(rootReducer,initialState)

export default store

