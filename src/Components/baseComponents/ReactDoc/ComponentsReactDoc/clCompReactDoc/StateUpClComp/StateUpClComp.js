import React from "react";

import AddSecondEntryClComp from "./AddSecondEntryClComp.js";
import CreateTempetCalcClComp from "./CreateTempetCalcClComp.js";
import WritFunctTransformClComp from "./WritFunctTransformClComp.js";

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

// приём t, проверка на 100 С*
// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>Вода кипит.</p>;
//   }
//   return <p>Вода не кипит.</p>;
// }

class StateUpClComp extends React.Component {
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
      <div className="StateUpClComp---">
        {/* <div className="LiftingStateUp__descript"></div> */}
        <div className="StateUpClComp__content---">
          {/* <CalculatorClComp bodyCalc={"fieldset"} />
          <CalculatorClComp bodyCalc={"temperInput"} /> */}
          <CreateTempetCalcClComp />
          <AddSecondEntryClComp />
          <WritFunctTransformClComp />
        </div>
      </div>
    );
  }
}
export default StateUpClComp;
