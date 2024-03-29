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
} from "../../../../../miniBlocksComponents/examples/ExpPreCode.js";

const InputNullValueClComp = () => {
  return (
    <div className="InputNullValueClComp----">
      <div className="InputNullValueClComp__descript----">
        <h3>Контролируемое входное нулевое значение</h3>
        <div>
          Указание <code>value</code> реквизита на контролируемом компоненте не
          позволяет пользователю изменять ввод, если вы этого не хотите. Если вы
          указали a, <code>value</code> но ввод по-прежнему доступен для
          редактирования, возможно, вы случайно установили <code>value</code>{" "}
          значение <code>undefined</code> или <code>null</code>.
        </div>
        <p>
          Следующий код демонстрирует это. (Ввод сначала заблокирован, но
          становится доступным для редактирования после небольшой задержки.)
        </p>
        <div>
          <pre>
            <code>
              ReactDOM.createRoot(mountNode).render(&lt;input value="hi" /&gt;);
              setTimeout(function() &#123;
              ReactDOM.createRoot(mountNode).render(&lt;input value={null}{" "}
              /&gt;); &#125;, 1000);
            </code>
          </pre>
        </div>
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
          посещенных полей и обработку отправки форм,{" "}
          <code>
            <a href="https://formik.org/">Formik</a>
          </code>{" "}
          — один из популярных вариантов. Однако он построен на тех же принципах
          управляемых компонентов и управления состоянием — так что не
          пренебрегайте их изучением.
        </div>
      </div>
      <div className="InputNullValueClComp__content----">
        {/* <pre>
          <code>
            44
            <BrSp sp={"  "} />
          </code>
        </pre> */}
      </div>
    </div>
  );
};

export default InputNullValueClComp;
