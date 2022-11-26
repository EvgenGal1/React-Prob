import React from "react";

import ListsClComp from "./ListsClComp.js";
import KeysClComp from "./KeysClComp.js";

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
} from "../../../../../miniBlocksComponents/examples/ExpPreCode.js";

class ListsAndKeysClComp extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {  }
  //}
  render() {
    return (
      <div className="ListsAndKeysClComp---">
        <div className="ListsAndKeysClComp__descript---">
          {/* ListsAndKeysClComp */}
        </div>
        <div className="ListsAndKeysClComp__content---">
          <ListsClComp />
          <KeysClComp />
        </div>
      </div>
    );
  }
}

export default ListsAndKeysClComp;
