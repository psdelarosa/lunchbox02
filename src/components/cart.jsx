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
    let newCart = {}
    let totalPrice = 0;

    //clear out empty days
    for (var x in props.cart) {
        if (props.cart[x].title === undefined) {
            totalPrice = totalPrice
        } else {
            totalPrice += Number(props.cart[x].price)
            newCart[x] = {title: props.cart[x].title, price: props.cart[x].price}
        }
    }

    return (
        <div className={props.cartModal === false ? "cart-hide" : "show-cart"}>
            <h1>This is the cart</h1>
            <div className="cart-list-container">
            {Object.keys(newCart).map((item) => 
                <table className="cart-list" key={item + newCart[item].title} cellSpacing="0">
                    <tbody>
                        <tr key={item}>
                            <td key={item} colSpan="2">{item}</td>
                            
                        </tr>
                        <tr key={newCart[item].price + newCart[item].title}>
                            <td className='table-title' key={newCart[item].title}>{newCart[item].title}</td>
                            <td className='table-price' key={newCart[item].price}>${newCart[item].price}</td>
                        </tr>
                    </tbody>
                </table> 
            )}

            <div className="total-bill">Total bill: ${totalPrice.toFixed(2)}</div>
            <button onClick={props.closeModal}>close</button>
            </div>
        </div>
    )
}
 
export default ShoppingCart;

