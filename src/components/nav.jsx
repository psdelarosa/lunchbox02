import React, { Component } from 'react';

class NavList extends Component {
    render() { 
        return ( 
            <div className="navbar">
                <div className="logo-space">
                    <h3>logo here</h3>
                </div>
                <div className="item-count">
                    <h3>Total items: </h3>
                </div>
            </div>
         );
    }
}
 
export default NavList;