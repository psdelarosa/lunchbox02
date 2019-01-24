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
let daysOfWeek = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY']

let DaysNav = props => {
  return (
    <ul className="days-list">
      {daysOfWeek.map(item => 
        <div onClick={(event) => props.set(event, item)} key={item} className={props.selected === item ? "selected-button" : "days-button"}>
            <div className="test">
                {item} <br/>
                <div className="day-food-title">
                {(props[item] === undefined ? null : props[item])}
                </div>
            </div> 
        </div>
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
        MONDAY: '',
        TUESDAY: '',
        WEDNESDAY: '',
        THURSDAY: '',
        FRIDAY: '',
        modal: false,
        modalTitle: '',
        modalPrice: ''
     }
     this.setDay = this.setDay.bind(this)
     this.seclectClick = this.selectClick.bind(this)
  }

  selectClick = (e, day, title) => {
    e.preventDefault();
    switch (day) {
        case "MONDAY":
            this.setState({
                MONDAY: title
            })
            break;
        case "TUESDAY":
            this.setState({
                TUESDAY: title
            })
            break;
        case "WEDNESDAY":
            this.setState({
                WEDNESDAY: title
            })
            break;
        case "THURSDAY":
            this.setState({
                THURSDAY: title
            })
            break;
        case "FRIDAY":
            this.setState({
                FRIDAY: title
            })
            break;
        default: 

    }
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

        <DaysNav set={this.setDay} selected={this.state.selectedDay} 
            MONDAY={this.state.MONDAY}
            TUESDAY={this.state.TUESDAY}
            WEDNESDAY={this.state.WEDNESDAY}
            THURSDAY={this.state.THURSDAY}
            FRIDAY={this.state.FRIDAY}
        />

        <DayMenu thisDay={this.state.selectedDay} />

        <FoodList items={this.state.foodItemsPerDay} day={this.state.selectedDay} open={this.openModal} clicker={this.selectClick}
            MONDAY={this.state.MONDAY}
            TUESDAY={this.state.TUESDAY}
            WEDNESDAY={this.state.WEDNESDAY}
            THURSDAY={this.state.THURSDAY}
            FRIDAY={this.state.FRIDAY}

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