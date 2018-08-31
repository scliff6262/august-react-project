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
        },
        {
          name: "Super Tuscan",
          price: 20,
          category: "Red Wine"
        },
        {
          name: "Wolffer",
          price: 15,
          category: "Rose Wine"
        }
      ]
    }
  }

  listOfProducts = () => {
    debugger;
    const list = this.state.products.map( (product) => {
      return <li><Product product={product}/></li>
    })
    return list
  }

  render(){
    return(
      <div>
        <h5>Product List</h5>
        <ul>
          {this.listOfProducts()}
        </ul>
      </div>
    )
  }
}

export default Products
