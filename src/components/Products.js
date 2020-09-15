import React, { Component } from 'react'
import {fetchProducts} from "../actions/getProduct";
import { connect } from "react-redux";
import { IoMdCart} from "react-icons/io";
import {addToCart} from "../actions/actionsInCart"
class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
      }
    render() {
        
        return (
            <div style={{width:"80%"}}>
            {!this.props.products ? (
                <div>Loading...</div>
              ) :(
            <section className='products-container' >
                
                {this.props.products.map(product=>{
                     return <div key={product._id}>
                            <img src={`images/${product.img}.jpg`} alt={product.img}></img>
                            <footer>
                                <div>
                                <h6>{product.title}</h6>
                            <h6 style={{color:" #b4b3b3"}}>{product.price}$</h6>
                                </div>
                            
                            <button className="btn"  onClick={()=>{this.props.addToCart(product)}} ><IoMdCart/></button>
                            
                            </footer>
                          
                            
              
                     </div>
               
                })}
             
            </section>
        )} </div>)
        }}

const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems:state.cart.cartItems
});
  export default connect(mapStateToProps, { fetchProducts,addToCart})(Products);
