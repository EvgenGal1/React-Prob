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
} from "../../../../../../examples/ExpPreCode.js";

class TagTextareaClComp extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {  }
  //}
  render() {
    return (
      <div className="TagTextareaClComp---">
        <div className="TagTextareaClComp__description---">
          <h3>Тег textarea</h3>
          <div>
            В HTML <code>&lt;textarea&gt;</code> элемент определяет свой текст
            своими дочерними элементами:
          </div>
          <div>3</div>
        </div>
        <div className="TagTextareaClComp__content---">
          <pre>
            <code>
              44
              <BrSp sp={"  "} />
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default TagTextareaClComp;
