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

const HTMformsDefaultClComp = () => {
  return (
    <div className="HTMformsDefaultClComp----">
      <div className="HTMformsDefaultClComp__description----">
        <h3>HTML-формы по умолчанию</h3>
        <p>
          Эта форма имеет поведение HTML-формы по умолчанию при переходе на
          новую страницу, когда пользователь отправляет форму. Если вы хотите
          такое поведение в React, оно просто работает. Но в большинстве случаев
          удобно иметь функцию JavaScript, которая обрабатывает отправку формы и
          имеет доступ к данным, которые пользователь ввел в форму. Стандартный
          способ добиться этого — использовать технику, называемую «управляемые
          компоненты».
        </p>
      </div>
      <div className="HTMformsDefaultClComp__content----">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <pre>
          <code>
            <FormLabInpLet
              form1={"form"}
              sp1={<BrSp sp={"  "} />}
              label1={"label"}
              sp2={<BrSp sp={"    "} />}
              name1={
                <>
                  Name:
                  <BrSp sp={"    "} />
                </>
              }
              input1={"input"}
              attr1={"type"}
              val1={"text"}
              val2={""}
              attr2={"name"}
              val3={"name"}
              val4={""}
              sp3={<BrSp sp={"  "} />}
              dop4={<BrSp sp={"  "} />}
              label2={""}
              name2={""}
              input2={"input"}
              attr3={"type"}
              val5={"submit"}
              val6={""}
              attr4={"value"}
              val7={"Submit"}
              val8={""}
              sp4={<BrSp sp={""} />}
            />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default HTMformsDefaultClComp;
