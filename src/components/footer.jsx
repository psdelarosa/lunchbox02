import React, { Component } from 'react';
const fb = require('../images/fb.svg');
const ig = require('../images/ig.svg');
const twitter = require('../images/twitter.svg');

class Footer extends Component {
    render() { 
        return ( 
            <footer>
                <div className="footer-column">
                    <ul className="footer-list">
                        <li>Help</li>
                        <li>Contact</li>
                        <li>Terms &amp; Conditions</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul className="footer-list">
                        <li>Delivery areas</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul className="footer-list">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>

                <div className="social-media">
                    <ul className="social-media-list">
                        <li>
                            <button className="icon-box"><img src={fb} alt="Facebook"/></button>
                        </li>
                        <li>
                            <button className="icon-box"><img src={ig} alt="Instagram"/></button>
                        </li>
                        <li>
                            <button className="icon-box"><img src={twitter} alt="Twitter"/></button>
                        </li>
                    </ul>
                </div>
            </footer>
         );
    }
}
 
export default Footer;