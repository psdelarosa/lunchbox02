import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <div className="header">
                <div className="header-text-box">
                    <h3>Welcome</h3>
                    <p>This is test text</p>
                    <button>Continue</button>
                </div>
            </div>
         );
    }
}
 
export default Header;