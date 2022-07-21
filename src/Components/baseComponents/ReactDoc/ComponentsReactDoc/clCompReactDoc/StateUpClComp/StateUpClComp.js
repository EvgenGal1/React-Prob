import React from "react";

import AddSecondEntryClComp from "./AddSecondEntryClComp.js";
import CreateTempetCalcClComp from "./CreateTempetCalcClComp.js";
import WritFunctTransformClComp from "./WritFunctTransformClComp.js";
import LiftingStateUpClComp from "./LiftingStateUpClComp.js";
import LessonslearnedClComp from "./LessonslearnedClComp.js";

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

const scaleNames = {
  c: "Цельсиях",
  f: "Фаренгейтах",
};

// fn преобразов Цельсия в Фаренгейта и обратно:
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// fn конвертер. вход строка и fn.обраб
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// приём t, проверка на 100 С*
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Вода кипит.</p>;
  }
  return <p>Вода не кипит.</p>;
}

class StateUpClComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
    // this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <div className="StateUpClComp---">
        {/* <div className="LiftingStateUp__descript"></div> */}
        <div className="StateUpClComp__content---">
          {/* <CalculatorClComp bodyCalc={"fieldset"} />
          <CalculatorClComp bodyCalc={"temperInput"} /> */}
          <CreateTempetCalcClComp
          // BoilingVerdict={BoilingVerdict}
          />
          <AddSecondEntryClComp
          // scaleNames={scaleNames}
          />
          <WritFunctTransformClComp />
          <LiftingStateUpClComp />
          <LessonslearnedClComp />
        </div>
      </div>
    );
  }
}
// export default StateUpClComp;
export {
  StateUpClComp,
  scaleNames,
  toCelsius,
  toFahrenheit,
  tryConvert,
  BoilingVerdict,
};
