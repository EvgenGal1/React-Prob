import React from "react";
import ReactDOM from "react-dom";
import PlanImg from "../img/YT.doympyOFlKE.План.JPG";
import App from "../../baseComponents/App.js";
import "../css/Plan.css";
import "./Plan.scss";

// class Button extends React.Component {}
// class Board extends React.Component {}
// class Plan extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <Button />
//         </div>
//       </div>
//     );
//   }
// }

class TopPanel extends React.Component {
  state = {
    name: "Верх",
    // src: { PlanImg },
    // src: { PlanImg },
    src: "Изо",
  };

  render() {
    return (
      <div className="top__panel">
        {/* <button
          onClick={() => {
            this.props.updateData(this.state.name);
          }}
        >
          Нажать 1
        </button> */}
        {/* <div className="plan__body">
          <img alt="PlanImg" src={PlanImg} />
        </div> */}
        {/* <div className="plan__body">
          <img alt="PlanImg" src={PlanImg} />
          {PlanImg}
        </div> */}
        <div>
          <p>Props: {this.props.name}</p>
        </div>
      </div>
    );
  }
}

class BottomPanel extends React.Component {
  state = {
    name: "Низ",
    src: [PlanImg],
  };

  render() {
    console.log("8 : " + 8);
    return (
      <div className="bttom__panel">
        {/* <button
          onClick={() => {
            console.log("9 : " + 9);
            this.props.updateData(this.state.name);
            console.log("10 : " + 10);
          }}
        >
          Нажать 2
        </button> */}
        {/* <div className="plan__body">
          <img alt="PlanImg" src={PlanImg} />
        </div> */}
        <div>
          <p>Props: {this.props.src}</p>
          <p>Props: {this.props.name}</p>
          <p>State: {this.state.name}</p>
          <p>State: {this.state.src}</p>
          <img alt="PlanImg" src={PlanImg} />
        </div>
      </div>
    );
  }
}

class Plan extends React.Component {
  state = {
    // src: <App />,
    src: "Изо старт",
    name: "Эллементы",
  };

  // updateData = (value) => {
  //   // this.setState({ src: value, name: value }); // - при передачи src App исчезает
  //   this.setState({ src: value, name: value });
  // };
  render() {
    return (
      <div>
        <div>
          <p>State (Top): {this.state.name}</p>
          <TopPanel name={this.state.name} />
        </div>
        <div>
          <p>State (Bottom): {this.state.src}</p>
          <BottomPanel name={this.state.name} src={this.state.src} />
        </div>
        <br />
        {/* <App updateData={this.updateData} /> */}
        {/* <div className="plan">
          <div className="plan__body">
            <img alt="PlanImg" src={PlanImg} />
          </div>
        </div> */}
        {/* <div className="">
          <img alt="PlanImg" src={PlanImg} />
        </div> */}
        {/* <div>State: {this.state.src}</div>
        <br />
        <div className="bottom">
          <div className="qw">State: {this.state.name}</div>
          <TopPanel updateData={this.updateData} />
          <BottomPanel updateData={this.updateData} />
        </div> */}
      </div>
    );
  }
}

export default Plan;

// function Plan() {
//   return (
//     <div className="plan">
//     </div>
//   );
// }
