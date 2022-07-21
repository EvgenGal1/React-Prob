import React from "react";

import {
  BrSp,
  AttrValMetd,
  FormLabInpLet,
  NameMetdPearam,
  ConstNamePlus,
  ReturnTagExp,
  TagAttrValJSX,
  ComponLet,
  CondRender,
  FuncNameProps,
  ClCompLet,
  ConstRoot,
  SelectLet,
  IfElse,
} from "../../../../../../js/examples/ExpPreCode.js";

// import ExpPreCode from "../../../../../../js/examples/ExpPreCode";
// import { TemperatureInput } from "./AddSecondEntry.js";

// приём t, проверка на 100 С*
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Вода кипит.</p>;
  }
  return <p>Вода не кипит.</p>;
}

const scaleNames = {
  c: "Цельсияx",
  f: "Фаренгейтах",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Введите температуру в {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class CalculatorClComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
    console.log("this.props : " + this.props);
  }
  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;

    let fieldset = (
      <>
        <p>При вводе значения равное или больше 100, вывод изменится</p>
        <fieldset>
          <legend>Введите температуру в Цельсиях:</legend>
          <input value={temperature} onChange={this.handleChange} />
          <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
      </>
    );
    let temperInput = (
      <>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </>
    );

    let bodyCalc;
    // const bodyCalc = "";
    if (this.props.bodyCalc === "fieldset") {
      bodyCalc = fieldset;
    } else if (this.props.bodyCalc === "temperInput") {
      bodyCalc = temperInput;
    } else {
      bodyCalc = "";
    }

    return (
      <>
        {/* <div className="CalculatorClComp"> */}
        {bodyCalc}
        {/* <div className="CalculatorClComp__descript"></div> */}
        {/* <div className="CalculatorClComp__content"> */}
        {/* </div> */}
        {/* </div> */}
      </>
    );
  }
}

export default CalculatorClComp;
