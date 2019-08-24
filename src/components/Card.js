import React from 'react';
import { render } from 'react-dom';
import TheCooperators from './TheCooperators'
import './../App.css';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.componentToRender = {
            "The Co-operators": <TheCooperators />
        };
        this.backgroundImage = {
            "The Co-Operators": "#"
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        render(
            this.componentToRender[this.props.title],
            document.getElementById('root')
        );
    }

    render() {
        return (
            <div className = "Card" onClick = {this.onClick} style = {
                {
                    backgroundImage: this.backgroundImage[this.props.title]
                }
            }>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

export default Card;