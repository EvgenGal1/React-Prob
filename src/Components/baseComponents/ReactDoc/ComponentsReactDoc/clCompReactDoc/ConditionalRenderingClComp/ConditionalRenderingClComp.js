import React from "react";

import GreetingClComp from "./GreetingClComp.js";
import IfAndClComp from "./IfAndClComp.js";
import IfCondOperClComp from "./IfCondOperClComp.js";
import PrevRendClComp from "./PrevRendClComp.js";

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

class ConditionalRenderingClComp extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {  }
  //}
  render() {
    return (
      <div className="ConditionalRenderingClComp---">
        <div className="ConditionalRenderingClComp__descript---">
          {/* ConditionalRenderingClComp */}
        </div>
        <div className="ConditionalRenderingClComp__content---">
          <GreetingClComp />
          <IfAndClComp />
          <IfCondOperClComp />
          <PrevRendClComp />
        </div>
      </div>
    );
  }
}

export default ConditionalRenderingClComp;
