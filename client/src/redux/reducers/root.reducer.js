//это оболочка для всех редюсеров
import { combineReducers } from "redux";
import { categoriesReducer } from "./categories.reducer";
import { bouquetsReducer } from "./boquets.reducer";
import { cartReducer } from "./cart.reducer"
import { userReducer } from "./user.reducer";
import { eventReducer } from "./event.reducer";
  
const rootReducer = combineReducers({
    categories: categoriesReducer,
    bouquets: bouquetsReducer,
    cart: cartReducer,
    user: userReducer,
    events: eventReducer,
});

export default rootReducer;
