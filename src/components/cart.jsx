import React, { Component } from 'react';
const logo = require('../images/lunchbox.svg');
const removeItem = require('../images/close.svg');

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
                    {this.props.count === 0 ? "No items yet" : this.props.count === 1 ? ("Checkout: " + this.props.count + ' item') : ("Checkout: " + this.props.count + ' items')}
                </button>
                <ShoppingCartModal cartModal={this.state.cartModal} closeModal={this.closeCartModal} cart={this.props.cart} removeItem={this.props.removeItem}/>
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
        <React.Fragment>
        <div className={props.cartModal === false ? "cart-hide" : "show-cart"}>
            <div className="cart-list-container">
            {Object.keys(newCart).map((item) => 
                <table className="cart-list" key={item + newCart[item].title} cellSpacing="0">
                    <tbody>
                        <tr key={item}>
                            <td className="cart-modal-day" key={item} colSpan="3">{item}</td>
                        </tr>
                        <tr key={newCart[item].price + newCart[item].title}>
                            <td className='table-title' key={newCart[item].title}>{newCart[item].title}</td>
                            <td className='table-price' key={newCart[item].price}>${newCart[item].price}</td>
                            <td className="remove-item-td"><button className="remove-item"><img src={removeItem} width="20" onClick={(event, day) => props.removeItem(event, item)}/></button></td>
                        </tr>
                    </tbody>
                </table> 
            )}
            <div className="total-bill">Total bill: ${totalPrice.toFixed(2)}</div>
            <button className="cart-modal-close" onClick={props.closeModal}>Continue ordering</button>
            <button className="cart-modal-checkout">Checkout</button>
            </div>
        </div>
        <div className={props.cartModal === true ? "dark" : "dark-hidden"} onClick={props.closeModal}></div>
        </React.Fragment>
    )
}
 
export default ShoppingCart;

