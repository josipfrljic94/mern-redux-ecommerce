import {createStore,applyMiddleware,compose,combineReducers} from "redux";
import thunk from "redux-thunk";
import { cartreducer } from "./reducers/cartReducer";
import {getProductsReducer} from "./reducers/getProductReducer";
import {toggleFilterReducer} from "./reducers/filtersToggleRed";


const initialState={};
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(combineReducers({
    products: getProductsReducer,
    cart: cartreducer,
   ui: toggleFilterReducer

}),
initialState,
composeEnhancer(applyMiddleware(thunk))
);
export default store;