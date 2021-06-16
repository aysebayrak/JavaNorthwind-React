import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


const rootReducer=combineReducers({
    cartt:cartReducer
})

export default rootReducer;