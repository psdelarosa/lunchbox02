import React, { Component } from 'react';

class Subscribe extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="subscribe">
                    <h3>Subscribe</h3>
                    <div className="subscribe-box">
                        <form>
                            <input type="text" placeholder="Email" className="input-email" />
                        </form>
                        <input type="submit" className="subscribe-submit" value="submit" />
                    </div>
                </div>

            </React.Fragment>
         );
    }
}
 
export default Subscribe;
