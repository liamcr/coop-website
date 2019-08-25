import React from 'react';
import Header from './Header';
import Card from './Card';
import './styles/HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className = "HomePage">
                <Header homePage={true}/>
                <div id="cards">
                    <Card backgroundImage="#" title="The Co-operators" />
                </div>
            </div>
        );
    }
}

export default HomePage;
