import React, { Component } from 'react';

const logo = require('../images/lunchbox.svg');

class DayMenu extends React.PureComponent {
    render() { 
        return ( 
            <div className="day-menu-box">
                <img src={logo} width="40" className="logo-box" alt="lunchbox logo"/>
                {/* <h3 className="day-title">{this.props.thisDay}'S Menu</h3> */}
                <h3 className="day-title">{this.props.thisDay[0].toUpperCase() + this.props.thisDay.substring(1).toLowerCase()}'s Menu</h3>
                <hr className="short-line"/>
            </div>
         );
    }
}
 
export default DayMenu;