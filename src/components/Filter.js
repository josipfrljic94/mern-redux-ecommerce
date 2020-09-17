import React, { Component } from 'react'
import {filterProductByTypeSize,sortProducts} from "../actions/getProduct"
import { connect } from "react-redux";
 class Filter extends Component {
    render() {
        return (
           
            <div className={ 'select-container'}>
                {!this.props.filteredProducts ? "" : <h5>Number of products: {this.props.filteredProducts.length}</h5>}
                     
                    
                <select name="type"  onChange={(e)=>this.props.filterProductByTypeSize(this.props.products,e.target.name,e.target.value)}>
                    <option value="">Type of product</option>
                    <option value="dress">DRESS</option>
                    <option value="bluse">BLUSE</option>
                </select>
               
                <select  name="sizes" onChange={(e)=>this.props.filterProductByTypeSize(this.props.products,e.target.name,e.target.value)} >
                    <option value="">Select sizes</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                   <option value="M">M</option>
                   <option value="L">L</option>
                   <option value="XL">XL</option>
                </select>
               
                <select value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.filteredProducts,e.target.value)}>
                    <option value=''>Sort by price</option>
                    <option value='highest'>HIGHEST</option> 
                    <option value='lowest'>LOWEST</option>
                </select>
               
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  
    size: state.products.size,
    sort: state.products.sort,
  });
  export default connect(mapStateToProps, { filterProductByTypeSize, sortProducts })(
    Filter
  );
