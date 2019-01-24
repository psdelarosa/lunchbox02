import React, { Component } from 'react';

let FoodBox = props => {
  return (
    <div className={props.title === props[props.day] ? "food-box-selected" : "food-box"}>
      {props.vegan === true ? <div className="vegan">Vegan</div> : null}
      <div className="food-image-box" onClick={(event, title, price) => props.open(event, props.title, props.price)}>
        <img />
      </div>
      <div className="food-lower-box">
        <div className="food-text-box">
          <li key={props.title} className="food-title">{props.title}</li>
          <li key={props.price} className="food-price">{props.price}</li>
        </div>
      <div className="select-button-place">
        <button className="select-button" onClick={(event, day, title, price) => props.clicker(event, props.day, props.title, props.price)}>+</button>
      </div>
      </div>
    </div>
  )
}


class FoodList extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <ul className="food-list">
                {this.props.items.map(item => 
                <FoodBox title={item.title} price={item.price} vegan={item.isVegan} modal={this.props.modal} open={this.props.open} clicker={this.props.clicker} day={this.props.day}
                MONDAY={this.props.MONDAY}
                TUESDAY={this.props.TUESDAY}
                WEDNESDAY={this.props.WEDNESDAY}
                THURSDAY={this.props.THURSDAY}
                FRIDAY={this.props.FRIDAY}
                />
                )}
            </ul>
            </React.Fragment>
         );
    }
}
 
export default FoodList;