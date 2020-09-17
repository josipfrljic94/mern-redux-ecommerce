import {TOGGLE_FILTERS, TOGGLE_CART} from "../types";

const initialState={
    ifFiltersOpen: false,
    isCartOpen:false
}

export const toggleFilterReducer=(state=initialState,action)=>{
    switch(action.type){
        case TOGGLE_FILTERS:
            return { ...state,isFiltersOpen:!state.isFiltersOpen};
        case TOGGLE_CART:
            return{...state,isCartOpen:!state.isCartOpen};
            default:
                return state;
    }
}