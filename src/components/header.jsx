import React, { Component } from 'react';
const headerImage = require('../images/header-image.jpg');

class Header extends Component {
    render() { 
        return ( 
            <div className="header">
                <div className="header-text-box">
                    <h3>LunchBox!</h3>
                    <p>Please select below...</p>
                </div>
                <img src={headerImage}  className="header-image"/>
            </div>
         );
    }
}
 
export default Header;