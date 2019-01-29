import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <div className="header">
                <div className="header-text-box">
                    <h3>LunchBox!</h3>
                    <p>Please select below...</p>
                </div>
                <div className="dark-header"></div>
            </div>
         );
    }
}
 
export default Header;