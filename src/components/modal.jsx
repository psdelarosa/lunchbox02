import React, { Component } from 'react';
const closeIcon = require('../images/close.svg');


class Modal extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className={this.props.modalState === true ? "modal" : "modal-hidden"}>
                    <div className="modal-image-box">
                        <img src={this.props.image} alt={this.props.modalTitle} />
                    </div>
                    <div className="modal-text-box-container">
                        <div className="modal-text-box">
                            <h3>{this.props.modalTitle}</h3>
                            <p>${this.props.modalPrice}</p>
                            <div className="modal-select-button-place">
                                <button onClick={(event, day, title, price) => this.props.clicker(event, this.props.day, this.props.modalTitle, this.props.modalPrice)} className="modal-select-button">+</button>
                            </div>
                            <div className="modal-close-button" onClick={this.props.close}><img src={closeIcon} alt="close-button" className="modal-close-button" /></div>
                        </div>
                    </div>
                </div>
                <div className={this.props.modalState === true ? "dark" : "dark-hidden"} onClick={this.props.close}></div>
            </React.Fragment>
         );
    }
}

//test

export default Modal;