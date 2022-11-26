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
} from "../../../../../miniBlocksComponents/examples/ExpPreCode.js";

import ExpPreCode from "../../../../../miniBlocksComponents/examples/ExpPreCode";
import {
  scaleNames,
  toCelsius,
  toFahrenheit,
  tryConvert,
  BoilingVerdict,
} from "./StateUpClComp.js";
import TemperatureInputClComp from "./TemperatureInputClComp.js";

class CalculatorClComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }
  // fn для 1ой кнп (let fieldset)
  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }
  // fn для State Up. Цельсий
  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }
  // fn для State Up. Фаренгейт
  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    let fieldset = (
      <>
        <p>При вводе значения равное или больше 100, вывод изменится</p>
        <fieldset>
          <legend>Введите температуру в Цельсиях:</legend>
          <input value={temperature} onChange={this.handleChange} />
          <BoilingVerdict celsius={parseFloat(temperature)} />
          {/* {this.props.BoilingVerdict} */}
        </fieldset>
      </>
    );
    let temperInput = (
      <>
        <TemperatureInputClComp
          scale="c"
          // scaleNames={this.props.scaleNames}
          // ранее при передаче ч/з props, сейчас fn отдельно importom
          scaleNames={scaleNames}
          dop={"11"}
        />
        <TemperatureInputClComp
          scale="f"
          // scaleNames={this.props.scaleNames}
          scaleNames={scaleNames}
          dop={"11"}
        />
        2 вариант
      </>
    );
    let temperInputAll = (
      <>
        <TemperatureInputClComp
          scale="c"
          scaleNames={scaleNames}
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
          dop={"22"}
        />
        <TemperatureInputClComp
          scale="f"
          scaleNames={scaleNames}
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
          dop={"22"}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />3 вариант
      </>
    );

    let bodyCalc;
    // const bodyCalc = "";
    if (this.props.bodyCalc === "fieldset") {
      bodyCalc = fieldset;
    } else if (this.props.bodyCalc === "temperInput") {
      bodyCalc = temperInput;
    } else if (this.props.bodyCalc === "temperInputAll") {
      bodyCalc = temperInputAll;
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
