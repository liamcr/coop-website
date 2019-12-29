import React from "react";

class Section extends React.Component {
  render() {
    return (
      <div className="section">
        <h4
          id={this.props.id}
          style={{
            color: this.props.color
          }}
        >
          {this.props.title}
        </h4>
        <ul>
          {this.props.paragraphs.map((paragraph, index) => (
            <li key={index}>{paragraph}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Section;
