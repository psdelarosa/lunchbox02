import React, { Component } from 'react';
const logo = require('../images/lunchbox.svg');

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cartModal: false
         }
    }

    openCartModal = (e) => {
        e.preventDefault();
        this.setState({cartModal: true})
    }

    closeCartModal = () => {
        this.setState({cartModal: false})
    }
    
    render() { 
        return ( 
            <div className="cart-container">
                <button className="cart-button" onClick={(event) => this.openCartModal(event)}>
                    Checkout: {this.props.count} items
                </button>
                <ShoppingCartModal cartModal={this.state.cartModal} closeModal={this.closeCartModal} cart={this.props.cart}/>
            </div>
         );
    }
}

let ShoppingCartModal = props => {
    let cartList = [];
    let totalPrice = 0;
    for (var x in props.cart) {
        if (props.cart[x].title === undefined) {
            cartList = cartList
        } else {
            cartList.push(x, props.cart[x].title, props.cart[x].price)
            totalPrice += Number(props.cart[x].price)
        }
    }

    return (
        <div className={props.cartModal === false ? "cart-hide" : "show-cart"}>
            <h1>This is the cart</h1>
            <ul className="cart-list">
                {cartList.map(item => 
                    <li key={item}>{isNaN(item) !== true ? '$'+item : item}</li>
                )}
            </ul>
            <div>Total bill: ${totalPrice}</div>
            <button onClick={props.closeModal}>close</button>
        </div>
    )
}
 
export default ShoppingCart;

