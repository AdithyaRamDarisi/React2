import { PureComponent } from "react";

class PureComponentDemo extends PureComponent {
  render() {
    console.log("PureComponent Rendered");

    return (
      <div className="demo-box">
        <h3>Pure Component</h3>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>This component skips rendering when props are unchanged.</p>
      </div>
    );
  }
}

export default PureComponentDemo;