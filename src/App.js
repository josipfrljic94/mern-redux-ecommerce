import React from 'react';
import { Provider } from "react-redux";
import store from "./store"
import Products from './components/Products';
import Filter  from './components/Filter';
import Cart  from './components/Cart';
class App extends React.Component {


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
