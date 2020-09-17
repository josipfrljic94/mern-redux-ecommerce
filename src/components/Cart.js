import React, { Component } from 'react'
import {connect} from "react-redux";
import{removeFromCart} from "../actions/actionsInCart";
import { MdRemoveShoppingCart } from "react-icons/md";
import { IoMdSad} from "react-icons/io";


 class Cart extends Component {
   
    
  
   
    render() {

        if(this.props.cartItems.length===0){
            return(
                
                  <div className={this.props.isCartOpen ? 'empty-cart active': 'empty-cart'}>
                  <h1>Cart is empty</h1> 
                 <div> <IoMdSad size="48"/></div>
                  </div>
                 
              
            )
        }
        else{
            return (
                <div  className={this.props.isCartOpen ? 'cart-container active': 'cart-container'}>

                    {/* price of all products */}
                 
                  {this.props.cartItems.map(product=>{
                      return <div className="cart-product" key={product._id}>
                          <img src={`images/${product.img}.jpg`} alt={product.img}></img>
                            <footer>
                          <h3>{product.title}</h3>
                          <div>
                          <h5>{product.price}$</h5>
                          <div className="btn" onClick={()=>this.props.removeFromCart(product)}><MdRemoveShoppingCart/><p>{product.cart}</p></div>

                          </div>                           
                       
                        </footer>
                      </div>})} 
                  
             

                </div>
            )

        }
        
    }
}

const mapStateToProps=(state)=>({
  
  
  isCartOpen: state.ui.isCartOpen,
  cartItems: state.cart.cartItems,

})
export default connect(
   mapStateToProps,

    { removeFromCart}
  )(Cart);