import React, { Component } from 'react';
import Product from '../../components/Product/Product'

class Products extends Component {
  constructor(){
    super()

    this.state = {
      products: [
        {
          name: "Ground Effect Cabernet",
          price: 99,
          category: "Red Wine"
        },
        {
          name: "Frogs Leap Chard",
          price: 100,
          category: "White Wine"
        }
      ]
    }
  }

  listOfProducts = () => {
    this.state.products.map( (product) => {
      <li><Product /></li>
    })
  }

  render(){
    return(
      <div>
        <h5>Product List</h5>
        <ul>
          {this.listOfProducts}
        </ul>
      </div>
    )
  }
}

export default Products
