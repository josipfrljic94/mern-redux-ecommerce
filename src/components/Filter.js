import React, { Component } from 'react'
import {filterProductByTypeSize,sortProducts} from "../actions/getProduct"
import { connect } from "react-redux";
 class Filter extends Component {
    render() {
        return (
           
            <div className='select-container'>
                     <h5>Number of products: {this.props.count}</h5>
                    <h5>Type of product</h5>
                <select name="type"  onChange={(e)=>this.props.filterProductByTypeSize(this.props.products,e.target.name,e.target.value)}>
                    <option value="">ALL</option>
                    <option value="dress">DRESS</option>
                    <option value="bluse">BLUSE</option>
                </select>
                <h5>Select size</h5>
                <select  name="sizes" onChange={(e)=>this.props.filterProductByTypeSize(this.props.products,e.target.name,e.target.value)} >
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                   <option value="M">M</option>
                   <option value="L">L</option>
                   <option value="XL">XL</option>
                </select>
                <h5>SORT BY PRICE</h5>
                <select value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.filteredProducts,e.target.value)}>
                    <option value=''>NONE</option>
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
