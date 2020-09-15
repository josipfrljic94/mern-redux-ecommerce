import React from 'react';
import { Provider } from "react-redux";
import store from "./store"
import Products from './components/Products';
import Filter  from './components/Filter';
import Cart  from './components/Cart';
class App extends React.Component {




  // CART  FUNCTION
// addtocart=(product)=>{
//   const cartProducts= this.state.cartProducts.slice();
//   let inCart= false;
// cartProducts.forEach(item => {
//   if(item.id===product.id){
//     item.cart++;
//     inCart=true;
   
//   }
// });
//   if(inCart===false){  
//         cartProducts.push({...product,cart:1});
//   }
//   this.setState({cartProducts:cartProducts})
// localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
// }

// removeProduct=(product)=>{
//   const cartProducts= this.state.cartProducts.slice();

// this.setState({cartProducts:cartProducts.filter(item=>item.id!== product.id)});
// localStorage.setItem("cartProducts",JSON.stringify(cartProducts.filter(item=>item.id!== product.id)))
// }

// END CART FUNCTIONS

render(){
 
  return (
    <Provider store={store}>
    <div className="App">
    <header  >
      <a href='/cart'> Shopping cart</a>
     
    </header>
    <div className='container'>
      <section className='filter-section'>
      <Filter />
      <Cart />
      </section>
     

     <Products />
    
       
      </div>
    </div>
    </Provider>
  )

}
  
}

export default App;
