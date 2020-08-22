import React from "react";
import { render } from "react-dom";
import Report from "./Report";
import cooperatorsImage from "./../cooperatorsReport.png";
import WSIBImage from "./../WSIBReport.png";
import "./styles/Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.title = {
      TheCooperators: "The Co-operators",
      WSIB: "WSIB Innovation Lab",
      ApplyBoard: "ApplyBoard",
    };
    this.backgroundImage = {
      TheCooperators: cooperatorsImage,
      WSIB: WSIBImage,
      ApplyBoard: cooperatorsImage,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    render(
      <Report company={this.props.title} />,
      document.getElementById("App")
    );
  }

  render() {
    return (
      <div
        className="Card"
        onClick={this.onClick}
        style={{
          backgroundImage: `url(${this.backgroundImage[this.props.title]})`,
          backgroundSize: "600px",
        }}
      >
        <h2>{this.title[this.props.title]}</h2>
      </div>
    );
  }
}

export default Card;
