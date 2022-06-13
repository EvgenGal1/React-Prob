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
} from "../../../../../../js/examples/ExpPreCode.js";

const TagSelectClComp = () => {
  return (
    <div className=" TagSelectClComp---">
      <div className="TagSelectClComp__description---">
        <h3>Тег select</h3>
        <div>
          В HTML <code>&lt;select&gt;</code> создает раскрывающийся список.
          Например, этот HTML-код создает раскрывающийся список вкусов:
        </div>
        <div>3</div>
      </div>
      <div className="TagSelectClComp__content---">
        <pre>
          <code>
            <BrSp sp={"  "} />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TagSelectClComp;
