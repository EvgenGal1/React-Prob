import React from "react";

// import ListsClComp from "./ListsClComp.js";
import ClockClComp from "./ClockClComp.js";

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
} from "../../../../../../js/examples/ExpPreCode.js";

class StateLifeCycleClComp extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {  }
  //}
  render() {
    return (
      <div className="StateLifeCycleClComp---">
        <div className="ListsAndKeysClComp__descript---">
          {/* StateLifeCycleClComp */}
        </div>
        <div className="ListsAndKeysClComp__content---">
          {/* <ListsClComp /> */}
          <ClockClComp />
        </div>
      </div>
    );
  }
}

export default StateLifeCycleClComp;
