import React, { Component } from 'react';
const closeIcon = require('../images/close.svg');


class Modal extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className={this.props.modalState === true ? "modal" : "modal-hidden"}>
                    <div className="modal-image-box"></div>
                    <div className="modal-text-box-container">
                        <div className="modal-text-box">
                            <h3>{this.props.modalTitle}</h3>
                            <p>${this.props.modalPrice}</p>
                            <hr />
                            <ul>
                                <li>Calories</li>
                                <li>Total Fat</li> 
                                <li>Cholesterol</li>
                                <li>Sodium</li>
                                <li>Total Carbohydrates</li> 
                                <li>Protein</li>
                            </ul>
                            <div className="modal-select-button-place">
                                <button onClick={(event, day, title) => this.props.clicker(event, this.props.day, this.props.modalTitle)} className="modal-select-button">+</button>
                            </div>
                            <div className="modal-close-button" onClick={this.props.close}><img src={closeIcon}  alt="close-button" className="modal-close-button" /></div>
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