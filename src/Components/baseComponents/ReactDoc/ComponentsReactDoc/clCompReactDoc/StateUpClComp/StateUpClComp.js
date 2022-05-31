import React from "react";

class StateUpClComp extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {  }
  }
  render() {
    class CalcTemper extends React.Component {
      //constructor(props) {
      //super(props);
      //this.state = {  }
      //}
      render() {
        return (
          <div className="CalcTemper">
            <div className="CalcTemper__description">
              <h3>Cоздадим калькулятор температуры</h3>
              <p>
                Мы начнем с компонента под названием BoilingVerdict. Он
                принимает celsiusтемпературу в качестве опоры и выводит,
                достаточно ли ее для кипячения воды:
              </p>
            </div>
            <div className="CalcTemper__content">
              <pre>
                <code>code</code>
              </pre>
            </div>
          </div>
        );
      }
    }
    return (
      <div className="StateUpClComp---">
        {/* <div className="LiftingStateUp__description"></div> */}
        <div className="StateUpClComp__content---">
          <CalcTemper />
          <CalcTemper />
        </div>
      </div>
    );
  }
}
export default StateUpClComp;
