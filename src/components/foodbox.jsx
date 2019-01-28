import React, { Component } from 'react';


let FoodBox = props => {

  return (
    <div  className={props.days[props.selectedDay].title === props.title ? "food-box-selected" : "food-box"}> 
      {props.vegan === true ? <div className="vegan">Vegan</div> : null}
      <div className="food-image-box" onClick={(event, title, price, image) => props.open(event, props.title, props.price, props.image)}>
        <img src={props.image} className="food-box-item-image" alt={props.title}/>
      </div>
      <div className="food-lower-box">
        <div className="food-text-box">
          <li key={props.title} className="food-title">{props.title.length > 20 ? props.title.substring(0,20)+'...' : props.title}</li>
          <li key={props.price} className="food-price">${props.price}</li>
        </div>
      <div className="select-button-place">
        {props.days[props.selectedDay].title !== props.title ? <SelectButton selectedDay={props.selectedDay} title={props.title} price={props.price} clicker={props.clicker}/> : <UnSelect unSelect={props.unSelect} selectedDay={props.selectedDay}/>}
      </div>
      </div>
    </div>
  )
}

let SelectButton = props => {
    return (
        <button className="select-button" onClick={(event, day, title, price) => props.clicker(event, props.selectedDay, props.title, props.price)}>+</button>
    )
}

let UnSelect = props => {
    return (
        <button className="unselect-button" onClick={(event, day) => props.unSelect(event, props.selectedDay)}>+</button>
    )
}

class FoodList extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <ul className="food-list">
                {this.props.items.map(item => 
                <FoodBox title={item.title} price={item.price} image={item.image}vegan={item.isVegan} modal={this.props.modal} open={this.props.open} clicker={this.props.clicker} selectedDay={this.props.selectedDay} days={this.props.days} unSelect={this.props.unSelect} key={item.title + item.price}
                />
                )}
            </ul>
            </React.Fragment>
         );
    }
}
 
export default FoodList;