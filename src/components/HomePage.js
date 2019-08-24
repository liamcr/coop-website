import React from 'react';
import Header from './Header';
import Card from './Card';
import './../App.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className = "HomePage">
                <Header homePage={true}/>
                <Card backgroundImage="#" title="The Co-operators" />
            </div>
        );
    }
}

export default HomePage;
