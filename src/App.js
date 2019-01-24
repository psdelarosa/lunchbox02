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

const menuItems = days.days[0];

let DaysNav = props => {
    return (
        <ul className="days-list">
            {Object.keys(props.days).map((day) => 
                <li key={day} onClick={(event) => props.set(event, day)} className={props.selected === day ? "selected-button" : "days-button"}>
                <div>{day}<br /></div> 
                {(props.days[day] === undefined ? null : props.days[day].title)}
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
    }


  selectClick = (e, day, title, price) => {
    e.preventDefault();
    let newState = Object.assign({}, this.state.days)
    newState[day].title = title
    newState[day].price = price
    this.setState({newState})
    console.log(this.state.days)
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
      this.setState({
        MONDAY: '',
        TUESDAY: '',
        WEDNESDAY: '',
        THURSDAY: '',
        FRIDAY: ''
      })
  }

  render() {
    return (
      <React.Fragment>

        <NavList />

        <Header />

        <DaysNav days={this.state.days} 
            selected={this.state.selectedDay}
            set={this.setDay}
        />

        <DayMenu thisDay={this.state.selectedDay} />

        <FoodList items={this.state.foodItemsPerDay} selectedDay={this.state.selectedDay} open={this.openModal} clicker={this.selectClick} days={this.state.days}
        />

        <Modal close={this.closeModal} modalState={this.state.modal} modalTitle={this.state.modalTitle} day={this.state.selectedDay} modalPrice={this.state.modalPrice} clicker={this.selectClick}/>

        <Subscribe />

        <Footer />

        <Reset reset={this.resetCart}/>


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