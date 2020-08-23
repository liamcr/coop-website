import React from "react";
import Header from "./Header";
import Reports from "./Reports";
import Section from "./Section";
import SmoothScroll from "./SmoothScroll";
import "./styles/Report.css";

class Report extends React.Component {
  componentDidMount() {
    this.scroller = new SmoothScroll();
  }

  render() {
    return (
      <div className="ReportPage">
        <Header homePage={false} />
        <nav
          style={{
            backgroundColor: Reports[this.props.company]["color"],
          }}
        >
          <h4>Nav</h4>
          <div
            className="navLink"
            onClick={() => this.scroller.scrollTo("abstract", 500)}
          >
            Abstract
          </div>
          <div
            className="navLink"
            onClick={() => this.scroller.scrollTo("aboutTheCompany", 500)}
          >
            About the Company
          </div>
          <div
            className="navLink"
            onClick={() =>
              this.scroller.scrollTo("goalsLearningObjectives", 500)
            }
          >
            Goals
          </div>
          <div
            className="navLink"
            onClick={() => this.scroller.scrollTo("jobDescription", 500)}
          >
            Job Description
          </div>
          <div
            className="navLink"
            onClick={() => this.scroller.scrollTo("conclusion", 500)}
          >
            Conclusion
          </div>
          <div
            className="navLink"
            onClick={() => this.scroller.scrollTo("acknowledgments", 500)}
          >
            Acknowledgments
          </div>
        </nav>

        <div className="Report">
          <h3
            style={{
              color: Reports[this.props.company]["color"],
            }}
          >
            {Reports[this.props.company]["company"]}
          </h3>
          <em>{Reports[this.props.company]["term"]}</em>

          <ul>
            {Reports[this.props.company]["sections"].map((section, index) => (
              <li key={index}>
                <Section
                  id={section["id"]}
                  title={section["title"]}
                  paragraphs={section["paragraphs"]}
                  color={Reports[this.props.company]["color"]}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Report;
