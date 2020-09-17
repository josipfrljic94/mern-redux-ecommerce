import {TOGGLE_FILTERS, TOGGLE_CART} from "../types";

export const toggleFilters=()=>(dispatch)=>{

dispatch({type:TOGGLE_FILTERS})
};

export const toggleCart=()=>(dispatch)=>{

    dispatch({type:TOGGLE_CART})
}