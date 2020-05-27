import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

import Product from "./components/Product";

const products = [
  {
    id: 1,
    name: "T-Shirts",
    description: "for boys under 6",
    img:
      "https://cdn.fcglcdn.com/brainbees/images/products/438x531/3106732a.jpg",
    price: 100,
  },

  {
    id: 2,
    name: "Shoes",
    description: "crazy girls party shoes",
    img: "https://m.media-amazon.com/images/I/713UWERKYnL._SR500,500_.jpg",
    price: 150,
  },

  {
    id: 3,
    name: "Face creams",
    description: "face magice cremie ",
    img:
      "https://vanitynoapologies.com/wp-content/uploads/2014/10/lakme-face-magic-skin-tints-souffle-price-shades.jpg",
    price: 50,
  },

  {
    id: 4,
    name: "Mobile",
    description: "iphone 6 latest",
    img:
      "https://www.ecbol.cn/ecbol-pic/20170107-03D/Luxury-Aluminum-Alloy-Metal-Bumper-Frame-Covers-PC-Back-Cases-for-iPhone-8-Plus-Blue-l1.jpg",
    price: 500,
  },

  {
    id: 5,
    name: "veg and fruits",
    description: "fresh fruits and veggies",
    img:
      "https://image.freepik.com/free-photo/colorful-food-groceries-white-countertop_8087-2209.jpg",
    price: 40,
  },
  {
    id: 1,
    name: "T-Shirts",
    description: "for boys under 6",
    img:
      "https://cdn.fcglcdn.com/brainbees/images/products/438x531/3106732a.jpg",
    price: 100,
  },

  {
    id: 2,
    name: "Shoes",
    description: "crazy girls party shoes",
    img: "https://m.media-amazon.com/images/I/713UWERKYnL._SR500,500_.jpg",
    price: 150,
  },

  {
    id: 3,
    name: "Face creams",
    description: "face magice cremie ",
    img:
      "https://vanitynoapologies.com/wp-content/uploads/2014/10/lakme-face-magic-skin-tints-souffle-price-shades.jpg",
    price: 50,
  },

  {
    id: 4,
    name: "Mobile",
    description: "iphone 6 latest",
    img:
      "https://www.ecbol.cn/ecbol-pic/20170107-03D/Luxury-Aluminum-Alloy-Metal-Bumper-Frame-Covers-PC-Back-Cases-for-iPhone-8-Plus-Blue-l1.jpg",
    price: 500,
  },

  {
    id: 5,
    name: "veg and fruits",
    description: "fresh fruits and veggies",
    img:
      "https://image.freepik.com/free-photo/colorful-food-groceries-white-countertop_8087-2209.jpg",
    price: 40,
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      cart: [
        // {
        //   id: 4,
        //   name: "Mobile",
        //   description: "iphone 6 latest",
        //   img:
        //     "https://www.ecbol.cn/ecbol-pic/20170107-03D/Luxury-Aluminum-Alloy-Metal-Bumper-Frame-Covers-PC-Back-Cases-for-iPhone-8-Plus-Blue-l1.jpg",
        //   price: 100,
        //   units: 0,
        // },
      ],
    };
  }

  handleAddFunc(product) {
    const existingProduct = this.state.cart.filter((p) => p.id === product.id);

    if (existingProduct.length > 0) {
      const withoutExistingProduct = this.state.cart.filter(
        (p) => p.id !== product.id
      );
      const updatedUnitsProduct = {
        ...existingProduct[0],
        units: existingProduct[0].units + product.units,
      };

      this.setState({
        cart: [...withoutExistingProduct, updatedUnitsProduct],
      });
    } else {
      this.setState({
        cart: [...this.state.cart, product],
      });
    }
  }

  render() {
    return (
      <main className="div" style={{ textAlign: "center" }}>
        <h4>E-COMMERCE</h4>
        <main className="pa3 pa5-ns flex flex-wrap">
          <ul>
            <h4>My cart</h4>
            {this.state.cart.map((c) => (
              <li>
                {c.name} | units {c.units}
              </li>
            ))}
          </ul>

          {products.map((p) => (
            <Product
              key={p.id}
              {...p}
              addFunc={this.handleAddFunc.bind(this)}
            />
          ))}
        </main>
      </main>
    );
  }
}

export default App;
