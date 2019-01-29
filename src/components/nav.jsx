import React, { Component } from 'react';
const check = require('../images/check.svg');

let MobileNav = props => {
    console.log(window.innerWidth)
    return (    
        <nav className="mobile-nav" onClick={(event) => props.handleMobile(event)}>
            <ul className="mobile-nav-list">
            {props.mobileStatus === false ? <MobileNavDay  days={props.days} selected={props.selected}/> : <MobileShowNav set={props.set} days={props.days} selected={props.selected}/>}
            </ul>
        </nav>
    )
}

let MobileShowNav = props => {
    return (
        <React.Fragment>
            {Object.keys(props.days).map((day) => 
                <li className={day === props.selected ? "mobile-nav-list-day mobile-nav-list-day-selected" : "mobile-nav-list-day"} onClick={(event) => props.set(event, day)}>{day}</li>
                )}
        </React.Fragment>
    )
}

let MobileNavDay = props => {
    return (
        <React.Fragment>
        {Object.keys(props.days).map((day) =>
            <li className={day === props.selected ? "mobile-nav-list-day" : "mobile-nav-list-hidden"}>{day}</li>
            )}
        </React.Fragment>
    )
}

let DaysNav = props => {
 
    return (
        <div id="days-wrapper"  className={props.scroll > props.top ? "fixed-nav" : ""}>
            <ul className="days-list" id="days-nav">
                {Object.keys(props.days).map((day) => 
                    <li key={day} onClick={(event) => props.set(event, day)} className={props.selected === day ? "selected-button" : props.days[day].foodSelected === true ? "selected-button-success" : "days-button"}>
                    <div className={props.days[day].foodSelected === true ? "check" : "check-none"}>
                        <img src={check}/>
                    </div>
                    <div>{day}<br />
                        <div className="day-food-title">
                            {(props.days[day].title === undefined ? null : (props.days[day].title.length > 18 ? props.days[day].title.substring(0,18) + '...' : props.days[day].title))}
                        </div>
                    </div> 
                    </li>
                )}
            </ul>
        </div>
    )
}

class Navigation extends Component {
    render() { 
        let width = window.innerWidth;
        console.log(width)
        return ( 
            width > 900 ? <DaysNav             
                days={this.props.days} 
                selected={this.props.selected}
                set={this.props.set} 
                scroll={this.props.scroll} 
                top={this.props.top}
                handleMobile={this.props.handleMobile}
                mobileStatus={this.props.mobileStatus}/> : <MobileNav             days={this.props.days} 
                selected={this.props.selected}
                set={this.props.set} 
                scroll={this.props.scroll} 
                top={this.props.top}
                handleMobile={this.props.handleMobile}
                mobileStatus={this.props.mobileStatus}/>
         );
    }
}


 
export default Navigation;
 
