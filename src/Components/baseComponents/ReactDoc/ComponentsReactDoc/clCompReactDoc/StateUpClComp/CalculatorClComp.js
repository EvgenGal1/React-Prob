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

import ExpPreCode from "../../../../../../js/examples/ExpPreCode";
// import BoilingVerdict from "./StateUpClComp.js";

// приём t, проверка на 100 С*
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Вода кипит.</p>;
  }
  return <p>Вода не кипит.</p>;
}

class CalculatorClComp extends React.Component {
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
    return (
      <div className="CalculatorClComp">
        {/* <div className="CalculatorClComp__content"> */}
        <p>При вводе значения равное или больше 100, вывод изменится</p>
        <fieldset>
          <legend>Введите температуру в Цельсиях:</legend>
          <input value={temperature} onChange={this.handleChange} />
          <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
        {/* </div> */}
      </div>
    );
  }
}

export default CalculatorClComp;
