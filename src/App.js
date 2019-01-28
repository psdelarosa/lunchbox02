import React, { Component } from 'react';
import NavList from './components/nav'
import Header from './components/header'
import days from './json/menu.json'
import DayMenu from './components/menulabel'
import Modal from './components/modal'
import FoodList from './components/foodbox'
import Subscribe from './components/subscribe'
import Footer from './components/footer'
import ShoppingCart from './components/cart'
const check = require('./images/check.svg');

// TODO:
// shopping cart... style and make modal
// fix opacity issue in firefox
// mobile NAV
// escape key in modal
// Check out button inside shopping cart
// Nutritional values from math.random
// Format nutritional values
// custom fonts
// image loading circle placeholder




const menuItems = days.days[0];

let DaysNav = props => {
    // let mq = window.matchMedia( "(max-width: 1000px)" )

    // let MobileNav = () => { 
    //     return (
    //     <div className="mobile-nav"><h3>test mobile nav</h3></div>
    //     )
    // }

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        selectedDay: 'MONDAY',
        foodItemsPerDay: menuItems['MONDAY'],
        days: {
            MONDAY: {},
            TUESDAY: {},
            WEDNESDAY: {},
            THURSDAY: {},
            FRIDAY: {}
        },
        itemCount: 0,
        modal: false,
        modalTitle: '',
        modalPrice: '',
        modalImage: ''
        }
     this.setDay = this.setDay.bind(this)
     this.seclectClick = this.selectClick.bind(this)
     this.handleScroll = this.handleScroll.bind(this)
     this.unSelect = this.unSelect.bind(this)
     this.totalItems = this.totalItems.bind(this)
    }

    countItems = () => {
        let count = 0;
        for (var x in this.state.days) {
            if (this.state.days[x].title === undefined) {
                count += 0
            } else {
                count += 1
            }
        }
        return count
    }

    selectClick = (e, day, title, price) => {
        e.preventDefault();
        let newState = Object.assign({}, this.state.days)
        newState[day].title = title
        newState[day].price = price
        newState[day].foodSelected = true
        this.setState({
            days: newState,
        })
    }

    unSelect = (e, day) => {
        e.preventDefault();
        let removeItem = Object.assign({}, this.state.days)
        removeItem[day] = {}
        this.setState({
            days: removeItem,
        })
    }

    totalItems = () => {
        let totalCount = 0;

    }

    setDay = (e, day) => {
        this.setState({
            selectedDay: day,
            foodItemsPerDay: menuItems[day],
        })
    }

    openModal = (e, title, price, image) => {
        this.setState({
            modal: true,
            modalTitle: title,
            modalPrice: price,
            modalImage: image
        })
    }

    closeModal = () => {
        this.setState({
            modal: false,
            modalTitle: '',
            modalPrice: ''
        })
    }


    handleScroll = () => {
        this.setState({scroll: window.scrollY})
    }

    componentDidMount = () => {
        const el = document.querySelector('#days-wrapper')
        this.setState({
            top: el.offsetTop ,
            height: el.offsetHeight
        });
        window.addEventListener('scroll', this.handleScroll)
        console.log(`top: ${this.state.top} height: ${this.state.height} offset top ${el.offsetTop}`)
    }
    componentDidUpdate() {
		this.state.scroll > this.state.top ? 
			document.querySelector('#wrapper').style.paddingTop = `${this.state.height}px` :
			document.querySelector('#wrapper').style.paddingTop = 0;
	}


  render() {
    return (
      <React.Fragment>

        <NavList />
        <Header/>
        <DaysNav days={this.state.days} 
                selected={this.state.selectedDay}
                set={this.setDay} scroll={this.state.scroll} top={this.state.top}
            />


        <div id="wrapper">

            <DayMenu thisDay={this.state.selectedDay} />
            <FoodList items={this.state.foodItemsPerDay} selectedDay={this.state.selectedDay} open={this.openModal} clicker={this.selectClick} days={this.state.days} unSelect={this.unSelect}
            />
            <Modal close={this.closeModal} modalState={this.state.modal} modalTitle={this.state.modalTitle} image={this.state.modalImage} day={this.state.selectedDay} modalPrice={this.state.modalPrice} clicker={this.selectClick}/>
        </div>
        <ShoppingCart removeItem={this.unSelect} count={this.countItems()} cart={this.state.days}/>
        <Subscribe />
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;