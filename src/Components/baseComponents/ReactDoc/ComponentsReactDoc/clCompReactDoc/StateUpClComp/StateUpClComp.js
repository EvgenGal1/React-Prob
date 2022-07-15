import React from "react";

import CalcTemperClComp from "./CalcTemperClComp.js";

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
} from "../../../../../../js/examples/ExpPreCode.js";

class StateUpClComp extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {  }
  }
  render() {
    return (
      <div className="StateUpClComp---">
        {/* <div className="LiftingStateUp__descript"></div> */}
        <div className="StateUpClComp__content---">
          <CalcTemperClComp />
        </div>
      </div>
    );
  }
}
export default StateUpClComp;
