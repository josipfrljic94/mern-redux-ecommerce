import React, { Component } from 'react'
import {connect} from "react-redux";
import{removeFromCart} from "../actions/actionsInCart";
import {IoIosCloseCircle} from "react-icons/io";

 class Cart extends Component {
   
    
  
    createOrder=(e)=>{
        e.preventDefault();
        const order={

        }
    }
    render() {

        if(this.props.cartItems.length===0){
            return(
                <div className='cart-container'>
                  <h1>Cart is empty</h1> 
                </div>
            )
        }
        else{
            return (
                <div  className='cart-container'>

                    {/* price of all products */}
                   
                  {this.props.cartItems.map(product=>{
                      return <div><h1>{product.title}</h1>
                        <button onClick={()=>this.props.removeFromCart(product)}><IoIosCloseCircle/></button>
                      </div>})} 
                  
             

                </div>
            )

        }
        
    }
}
export default connect(
    (state) => ({
    
      cartItems: state.cart.cartItems,
    }),
    { removeFromCart}
  )(Cart);