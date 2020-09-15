import React, { Component } from 'react'
import {fetchProducts} from "../actions/getProduct";
import { connect } from "react-redux";
class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
      }
    render() {
        
        return (
            <div>
            {!this.props.products ? (
                <div>Loading...</div>
              ) :(
            <section className='products-container'>
                {this.props.products.map(product=>{ return product.title})}
             
            </section>
        )} </div>)
        }}

const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
   
});
  export default connect(mapStateToProps, { fetchProducts})(Products);