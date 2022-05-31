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
  ConstRoot,
} from "../../../../../../examples/ExpPreCode.js";

const InputsMultipleClComp = () => {
  return (
    <div className="MInputsMultipleClComp---">
      <div className="MInputsMultipleClComp__description---">
        <h3>Обработка нескольких входов</h3>
        <div>
          Когда вам нужно обработать несколько контролируемых <code>input</code>{" "}
          элементов, вы можете добавить <code>name</code> атрибут к каждому
          элементу и позволить функции обработчика выбирать, что делать на
          основе значения <code>event.target.name</code>.
        </div>
        <div>3</div>
      </div>
      <div className="MInputsMultipleClComp__content---">
        <pre>
          <code>
            44
            <BrSp sp={"  "} />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default InputsMultipleClComp;
