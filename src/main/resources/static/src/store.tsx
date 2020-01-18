import {useStore} from "react-redux"
import rootReducer from "./Reducers/index"

const initialState = {}
const store = useStore(rootReducer,initialState)

export default store






