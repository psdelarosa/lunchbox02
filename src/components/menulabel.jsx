import React, { Component } from 'react';

const logo = require('../images/lunchbox.svg');

class DayMenu extends Component {
    render() { 
        return ( 
            <div className="day-menu-box">
                <img src={logo} width="40" className="logo-box" alt="lunchbox logo"/>
                <h3 className="day-title">{this.props.thisDay}'S MENU</h3>
                <hr className="short-line"/>
            </div>
         );
    }
}
 
export default DayMenu;