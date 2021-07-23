import React, { Component } from 'react';
import storeContext from '../context/storeContext';
import ItemInCart from "./itemInCart";
import "./cart.css";

class Cart extends Component {
    static contextType = storeContext;

    state = {};
    render() {
        return (
            <div className="cart-page">
                <h4> Cart Page</h4>
                
                <div className="product-container">
                    {this.context.cart.map((prod) => (
                        <ItemInCart key={prod._} prod={prod}></ItemInCart>
                    ))}
                </div>
            </div>

        );
    }
}

export default Cart