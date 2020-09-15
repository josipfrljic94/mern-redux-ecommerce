import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart=( product)=>(dispatch,getState)=>{
    const cartItems= getState().cart.cartItems.slice();
    let alereadyInCart= false;
    cartItems.forEach(c=>{
        
        if(c._id===product._id){
           
            c.cart++
            alereadyInCart=true
        }
       

    })
    if(!alereadyInCart){
        cartItems.push({...product,cart:1})
    }
    dispatch({
        type:ADD_TO_CART,
        payload:{cartItems},
    })
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
}

    export const removeFromCart=(product)=>(dispatch,getState)=>{
        let cartItems= getState().cart.cartItems.slice();
        if(product.cart>1)
        {product.cart--} 
        else{
            cartItems=cartItems.filter(c=>c._id!==product._id)
        }
       dispatch({type:REMOVE_FROM_CART,payload:{cartItems}})
       localStorage.setItem("cartItems",JSON.stringify(cartItems))
    }

