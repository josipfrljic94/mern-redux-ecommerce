import React from 'react';

import Products from './components/Products';
import Filter  from './components/Filter';
import Cart  from './components/Cart';
import { GoSettings } from "react-icons/go";
import { IoMdCart} from "react-icons/io";
import { toggleCart, toggleFilters } from './actions/uiActions';
import {connect} from "react-redux"




class App extends React.Component {
  
render(){
  
 
  return (
   
    <div className="App">
    <header  >
      <a href="!#"> THE SHOP</a>
      <div className="adjust-buttons">
       <div onClick={this.props.toggleFilters} >
       <GoSettings />
      
       </div>

       <div  onClick={this.props.toggleCart} className="cart-icon-container">
      
      
      
       <h6>{this.props.cartItems.length}</h6>
       < IoMdCart style={{ }}/>
        
  
       </div>
       
      </div>
    </header>
    <div className='container'>
      <section className= {this.props.isFiltersOpen ? 'filter-section active' : 'filter-section'}>
      <Filter />
      </section>
      <Cart />

     <Products />
    
       
      </div>
    </div>
    
  )

}
  
}
const mapStateToProps=(state)=>({
  
    isFiltersOpen: state.ui.isFiltersOpen,
    cartItems: state.cart.cartItems,
  
})

export default connect(mapStateToProps,{toggleFilters,toggleCart})(App);
