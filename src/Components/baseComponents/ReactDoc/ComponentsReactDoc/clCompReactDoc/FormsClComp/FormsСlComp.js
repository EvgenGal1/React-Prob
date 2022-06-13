import React from "react";

import HTMformsDefaultClComp from "./HTMformsDefaultClComp.js";
import ManagedComponentsClComp from "./ManagedComponentsClComp.js";
import TagTextareaClComp from "./TagTextareaClComp.js";
import TagSelectClComp from "./TagSelectClComp.js";
import TagInpFileClComp from "./TagInpFileClComp.js";
import InputsMultipleClComp from "./InputsMultipleClComp.js";
import InputNullValueClComp from "./InputNullValueClComp.js";
import AlterContrCompClComp from "./AlterContrCompClComp.js";

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

class FormsClComp extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {  }
  //}
  render() {
    return (
      <div className="FormsClComp---">
        <div className="FormsClComp__description---">{/* FormsCompon */}</div>
        <div className="FormsClComp__content---">
          <HTMformsDefaultClComp />
          <ManagedComponentsClComp />
          <TagTextareaClComp />
          <TagSelectClComp />
          <TagInpFileClComp />
          <InputsMultipleClComp />
          <InputNullValueClComp />
          <AlterContrCompClComp />
        </div>
      </div>
    );
  }
}
export default FormsClComp;
