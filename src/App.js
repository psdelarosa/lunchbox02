import React, { Component } from 'react';
import Header from './components/header'
import days from './json/menu.json'
import DayMenu from './components/menulabel'
import Modal from './components/modal'
import FoodList from './components/foodbox'
import Footer from './components/footer'
import ShoppingCart from './components/cart'
import Navigation from './components/nav'

const menuItems = days.days[0];

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
        mobileNav: false,
        itemCount: 0,
        modal: false,
        modalTitle: '',
        modalPrice: '',
        modalImage: ''
        }
        // this.countItems = this.countItems.bind(this)
    }

    handleMobileNavClick = (e) => {
        e.preventDefault();
        if (this.state.mobileNav === false) {
            this.setState({mobileNav: true})
        } else {
            this.setState({mobileNav: false})
        }
    }

    countItems = () => {
        let count = 0;
        for (var x in this.state.days) {
            if (this.state.days[x].title) {
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
        const el = document.querySelector('#days-wrapper, .mobile-nav')
        this.setState({
            top: el.offsetTop,
            height: el.offsetHeight
        });
        window.addEventListener('scroll', this.handleScroll)

    }
    componentDidUpdate = () => {
		this.state.scroll > this.state.top ? 
			document.querySelector('#wrapper').style.paddingTop = `${this.state.height}px` :
            document.querySelector('#wrapper').style.paddingTop = 0;
    }


  render() {
    return (
      <React.Fragment>

        <Header/>
        <Navigation 
            days={this.state.days} 
            selected={this.state.selectedDay}
            set={this.setDay} 
            scroll={this.state.scroll} 
            top={this.state.top}
            handleMobile={this.handleMobileNavClick}
            mobileStatus={this.state.mobileNav}
        />

        <div id="wrapper">

            <DayMenu thisDay={this.state.selectedDay} />
            <FoodList items={this.state.foodItemsPerDay} selectedDay={this.state.selectedDay} open={this.openModal} clicker={this.selectClick} days={this.state.days} unSelect={this.unSelect}
            />
            <Modal close={this.closeModal} modalState={this.state.modal} modalTitle={this.state.modalTitle} image={this.state.modalImage} day={this.state.selectedDay} modalPrice={this.state.modalPrice} clicker={this.selectClick}/>
        </div>
        <ShoppingCart removeItem={this.unSelect} count={this.countItems()} cart={this.state.days}/>

        <Footer />
      </React.Fragment>
    );
  }
}


export default App;