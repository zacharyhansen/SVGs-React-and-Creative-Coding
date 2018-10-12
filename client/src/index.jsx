import React from "react";
import ReactDOM from "react-dom";
import Triangle from "./components/Triangle.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createVerticesTraingle(length, svgSize) {
    let vertices = [];
    vertices.push([(svgSize / 2) - (length / 2), svgSize]);
    vertices.push([svgSize / 2, svgSize - (length * Math.sqrt(3) / 2)]);
    vertices.push([(svgSize / 2) + (length / 2), svgSize])
    return vertices;
  }

  render() {
    const svgSize = 600;

    // const vertices = [
    //   [0, 120],
    //   [60, 0],
    //   [120, 120],
    // ];

    return (
      <div className="center">
        <h1 className="test">SVG's</h1>
        <svg width={svgSize} height={svgSize}>
          {/* <path d="M 0 120 L 60 0 L 120 120 Z" fill="#FF8EAC" /> */}
          {/* <Triangle vertices={vertices} color="#FF8EAC" /> */}
          <Triangle vertices={this.createVerticesTraingle(500, svgSize)} color="#FF8EAC" delay={0} />
          <Triangle vertices={this.createVerticesTraingle(450, svgSize)} color="#FF5681" delay={60} />
          <Triangle vertices={this.createVerticesTraingle(400, svgSize)} color="#FF386C" delay={110} />
          <Triangle vertices={this.createVerticesTraingle(350, svgSize)} color="#FF1F58" delay={220} />
        </svg>
        {/* <svg className="center" width={svgSize} height={svgSize}>
          <Triangle vertices={this.createVerticesTraingle(500, svgSize)} color="#FF8EAC" delay={0} />
          <Triangle vertices={this.createVerticesTraingle(450, svgSize)} color="#FF5681" delay={60} />
          <Triangle vertices={this.createVerticesTraingle(400, svgSize)} color="#FF386C" delay={110} />
          <Triangle vertices={this.createVerticesTraingle(350, svgSize)} color="#FF1F58" delay={220} />
        </svg> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
