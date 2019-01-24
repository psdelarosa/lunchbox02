import React, { Component } from 'react';

class Reset extends Component {

    render() { 
        return ( 
            <button onClick={this.props.reset}>reset</button>
         );
    }
}
 
export default Reset;