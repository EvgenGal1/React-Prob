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
  SelectLet,
} from "../../../../../../js/examples/ExpPreCode.js";

const TagInpFileClComp = () => {
  return (
    <div className="TagInpFileClComp----">
      <div className="TagInpFileClComp__descript----">
        <h3>Тег input file</h3>
        <div>
          В HTML <code>&lt;input type="file"&g t;</code>элемент позволяет
          пользователю выбрать один или несколько файлов из хранилища своего
          устройства для загрузки на сервер или обработки с помощью JavaScript
          через <code>File API</code>.
        </div>
        <div>
          <code>&lt;input type="file" /&gt;</code>
        </div>
        <div>
          Поскольку его значение доступно только для чтения, это
          неконтролируемый компонент в React. Он обсуждается вместе с другими
          неуправляемыми компонентами далее в документации.
        </div>
      </div>
      {/* <div className="TagInpFileClComp__content----">
        <pre>
          <code>
            44
            <BrSp sp={"  "} />
          </code>
        </pre>
      </div> */}
    </div>
  );
};

export default TagInpFileClComp;
