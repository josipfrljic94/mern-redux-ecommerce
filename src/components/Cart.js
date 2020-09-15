import React, { Component } from 'react'
import {connect} from "react-redux";
import{removeFromCart} from "../actions/actionsInCart";
import { MdRemoveShoppingCart } from "react-icons/md";

 class Cart extends Component {
   
    
  
   
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
                      return <div className="cart-product" key={product._id}>
                          <img src={`images/${product.img}.jpg`} alt={product.img}></img>
                            <footer>
                          <h3>{product.title}</h3>
                          <div>
                          <h5>{product.price}</h5>
                          <div className="btn" onClick={()=>this.props.removeFromCart(product)}><MdRemoveShoppingCart/><p>{product.cart}</p></div>

                          </div>                           
                       
                        </footer>
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