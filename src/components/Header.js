import React from 'react';
import { render } from 'react-dom';
import HomePage from './HomePage';
import backArrow from './../back-arrow.svg';
import './../App.css';

class Header extends React.Component {
    back() {
        render(
            <HomePage />,
            document.getElementById('root')
        );
    }

    render() {
        if (!this.props.homePage) {
            var backButton = <img src={backArrow} onClick={this.back} height="40px" alt="Back" />
        }
        return (
            <header>
                {backButton}
                <div>
                    <h1>Work Term Reports</h1>
                </div>
            </header>
        );
    }
}

export default Header;