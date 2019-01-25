import React, { Component } from 'react';
import NavList from './components/nav'
import Header from './components/header'
import days from './json/menu.json'
import DayMenu from './components/menulabel'
import Modal from './components/modal'
import FoodList from './components/foodbox'
import Reset from './components/reset'
import Subscribe from './components/subscribe'
import Footer from './components/footer'
const check = require('./images/check.svg');


const menuItems = days.days[0];

let DaysNav = props => {

    return (
        <ul className={props.scroll > props.top ? "days-list fixed-nav" : "days-list"} id="days-nav">
            {Object.keys(props.days).map((day) => 
                <li key={day} onClick={(event) => props.set(event, day)} className={props.selected === day ? "selected-button" : props.days[day].foodSelected === true ? "selected-button-success" : "days-button"}>
                <div className={props.days[day].foodSelected === true ? "check" : "check-none"}>
                    <img src={check}/>
                </div>
                <div>{day}<br />
                    <div className="day-food-title">
                        {(props.days[day].title === undefined ? null : props.days[day].title)}
                    </div>
                </div> 
                </li>
            )}
        </ul>
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
        modal: false,
        modalTitle: '',
        modalPrice: ''
        }
     this.setDay = this.setDay.bind(this)
     this.seclectClick = this.selectClick.bind(this)
     this.handleScroll = this.handleScroll.bind(this)
     this.unSelect = this.unSelect.bind(this)
    }


  selectClick = (e, day, title, price) => {
        e.preventDefault();
        let newState = Object.assign({}, this.state.days)
        newState[day].title = title
        newState[day].price = price
        newState[day].foodSelected = true
        this.setState({days: newState})
        // console.log(this.state.days)
  }

  unSelect = (e, day) => {
        let removeItem = Object.assign({}, this.state.days)
        removeItem[day] = {}
        this.setState({days: removeItem})
  }

  setDay = (e, day) => {
    this.setState({
      selectedDay: day,
      foodItemsPerDay: menuItems[day],
    })
  }

  openModal = (e, title, price) => {
    this.setState({
      modal: true,
      modalTitle: title,
      modalPrice: price
    })
  }

  closeModal = () => {
    this.setState({
      modal: false,
      modalTitle: '',
      modalPrice: ''
    })
  }

  resetCart = () => {
    let newDays = {
        MONDAY: {},
        TUESDAY: {},
        WEDNESDAY: {},
        THURSDAY: {},
        FRIDAY: {},
    }
    this.setState({days: newDays})
    }

    handleScroll = () => {
        this.setState({scroll: window.scrollY})
    }

    componentDidMount = () => {
        const el = document.querySelector('#days-nav')
        this.setState({
            top: el.offsetTop ,
            height: el.offsetHeight
        });
        window.addEventListener('scroll', this.handleScroll)
        console.log(`top: ${this.state.top} height: ${this.state.height} offset top ${el.offsetTop}`)
    }
    componentDidUpdate() {
		this.state.scroll > this.state.top ? 
			document.body.style.paddingTop = `${this.state.height}px` :
			document.body.style.paddingTop = 0;
	}


  render() {
    return (
      <React.Fragment>

        <NavList />

        <Header />
        <div id="wrapper">
            <DaysNav days={this.state.days} 
                selected={this.state.selectedDay}
                set={this.setDay} scroll={this.state.scroll} top={this.state.top}
            />
            <DayMenu thisDay={this.state.selectedDay} />
            <FoodList items={this.state.foodItemsPerDay} selectedDay={this.state.selectedDay} open={this.openModal} clicker={this.selectClick} days={this.state.days} unSelect={this.unSelect}
            />
            <Modal close={this.closeModal} modalState={this.state.modal} modalTitle={this.state.modalTitle} day={this.state.selectedDay} modalPrice={this.state.modalPrice} clicker={this.selectClick}/>
        </div>
        <Subscribe />

        <Footer />





      </React.Fragment>
    );
  }
}


export default App;


//Object key notes:
// let days = {
//     MONDAY: {
//       title: 'monday title',
//       price: 'monday price',
//     }, 
//     TUESDAY: {
//       title: 'tuesday title',
//       price: 'tuesday price',
//     }
//   }
  
//   console.log(Object.keys(days).map((x) => days[x].title))
  
//   let testDay = "MONDAY";
  
//   console.log(days[testDay].price)
  
//   days[testDay].price = 'test price'
  
//   console.log(days[testDay].price)


//test-branch refactor

// let newState = Object.assign({}, this.state);
// newState.recipes[1].title = "Tofu Stir Fry and other stuff";
// this.setState(newState);

