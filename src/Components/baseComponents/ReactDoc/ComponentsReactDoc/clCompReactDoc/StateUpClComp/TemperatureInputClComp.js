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

// let letConstFn;
// if(this.props === "scaleNames"){
//   letConstFn = (this.setState({ temperature: e.target.value }))
// }
class TemperatureInputClComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }
  handleChange(e) {
    // let letConstFn;
    // if (this.props.scaleNames === undefined) {
    if (this.props.dop === "11") {
      // letConstFn = (this.setState({ temperature: e.target.value }))
      this.setState({ temperature: e.target.value });
    } //else
    // if (this.props.temperature === true) {
    if (this.props.dop === "22") {
      // letConstFn = (this.setState({ temperature: e.target.value }))
      // this.setState({ temperature: e.target.value });
      this.props.onTemperatureChange(e.target.value);
    }
    // this.setState({ temperature: e.target.value });
    // this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // const temperature = this.state.temperature;
    // const temperature = this.props.temperature;
    const temperature =
      // this.props.temperature === undefined
      this.props.dop === "11" ? this.state.temperatur : this.props.temperature;
    const scale = this.props.scale;
    const scaleNames = this.props.scaleNames;
    return (
      <fieldset>
        <legend>Введите температуру в {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
        {this.state.temperature && (
          <p
            style={{
              fontSize: "14px",
              display: "block",
              width: "100%",
              height: "25px",
            }}
          >
            {this.state.temperature}
          </p>
        )}
        {this.props.temperature && (
          <p
            style={{
              fontSize: "14px",
              display: "block",
              width: "100%",
              height: "25px",
            }}
          >
            {this.props.temperature}
          </p>
        )}
      </fieldset>
    );
  }
}

export default TemperatureInputClComp;
