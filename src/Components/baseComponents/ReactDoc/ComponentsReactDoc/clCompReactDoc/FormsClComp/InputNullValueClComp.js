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

const InputNullValueClComp = () => {
  return (
    <div className="InputNullValueClComp---">
      <div className="InputNullValueClComp__description---">
        <h3>Контролируемое входное нулевое значение</h3>
        <div>
          Указание <code>value</code> реквизита на контролируемом компоненте не
          позволяет пользователю изменять ввод, если вы этого не хотите. Если вы
          указали a, <code>value</code> но ввод по-прежнему доступен для
          редактирования, возможно, вы случайно установили <code>value</code>{" "}
          значение <code>undefined</code> или <code>null</code>.
        </div>
        <div>3</div>
      </div>
      <div className="InputNullValueClComp__content---">
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

export default InputNullValueClComp;
