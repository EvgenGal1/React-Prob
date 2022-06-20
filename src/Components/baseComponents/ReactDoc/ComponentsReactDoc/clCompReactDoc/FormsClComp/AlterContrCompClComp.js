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

const AlterContrCompClComp = () => {
  return (
    <div className="AlterContrCompClComp----">
      <div className="AlterContrCompClComp__descript----">
        <h3>Альтернативы управляемым компонентам</h3>
        <div>
          Иногда использование контролируемых компонентов может быть
          утомительным, потому что вам нужно написать обработчик событий для
          каждого способа изменения ваших данных и передать все входное
          состояние через компонент React. Это может стать особенно
          раздражающим, когда вы конвертируете уже существующую кодовую базу в
          React или интегрируете приложение React с библиотекой, отличной от
          React. В таких ситуациях вы можете захотеть проверить неуправляемые
          компоненты , альтернативный метод реализации форм ввода.
        </div>
        <h3>Полноценные решения</h3>
        <div>
          Если вы ищете комплексное решение, включающее проверку, отслеживание
          посещенных полей и обработку отправки форм, Formik — один из
          популярных вариантов. Однако он построен на тех же принципах
          управляемых компонентов и управления состоянием — так что не
          пренебрегайте их изучением.
        </div>
      </div>
      <div className="AlterContrCompClComp__content----">
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

export default AlterContrCompClComp;
