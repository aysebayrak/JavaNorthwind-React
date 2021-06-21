import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";


//tüm stateleri topladığım yer


const rootReducer=combineReducers({
    cart:cartReducer
})

export default rootReducer;