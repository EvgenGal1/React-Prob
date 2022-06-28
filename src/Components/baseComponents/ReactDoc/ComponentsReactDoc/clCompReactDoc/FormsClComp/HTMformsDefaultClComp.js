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

const HTMformsDefaultClComp = () => {
  return (
    <div className="HTMformsDefaultClComp----">
      <div className="HTMformsDefaultClComp__descript----">
        <h3>HTML-формы по умолчанию</h3>
        <p>
          Эта форма имеет поведение HTML-формы по умолчанию при переходе на
          новую страницу, когда пользователь отправляет форму. Если вы хотите
          такое поведение в React, оно просто работает.
        </p>
      </div>
      <div className="HTMformsDefaultClComp__content----">
        <form>
          <label>
            Form Name:
            <input type="text" name="name" />
            {/* <button type="text" name="name" class="btmShowHide">
              <div>/</div>
            </button> */}
          </label>
          {/* <br /> */}
          <input type="submit" value="Submit"></input>
          {/* <button type="submit" value="Submit" class="btmShowHide">
            <div>Submit</div>
          </button> */}
        </form>
        <pre>
          <code>
            <FormLabInpLet
              form1={"form"}
              attrF1={""}
              sp1={<BrSp sp={"  "} />}
              label1={"label"}
              sp2={<BrSp sp={"    "} />}
              name1={
                <>
                  Name:
                  <BrSp sp={"    "} />
                </>
              }
              inputLab1={"input"}
              attrInLab1={
                <>
                  <AttrValMetd
                    attr1={"type"}
                    dop3={true}
                    val1={"text"}
                    val2={""}
                  />
                  {" 2 "}
                  <AttrValMetd
                    attr1={"name"}
                    dop3={true}
                    val1={"name"}
                    val2={""}
                  />
                </>
              }
              input1={"input"}
              attrIn1={
                <>
                  <AttrValMetd
                    attr1={"type"}
                    dop3={true}
                    val1={"submit"}
                    val2={""}
                  />
                  <AttrValMetd
                    attr1={"value"}
                    dop3={true}
                    val1={"Submit"}
                    val2={""}
                  />
                </>
              }
              label2={""}
              name2={""}
              inputLab2={""}
              attrInLab2={""}
              sp3={<br />}
              // input2={"input"}
              // attr3={"type"}
              // val5={"submit"}
              // val6={""}
              // attr4={"value"}
              // val7={"Submit"}
              // val8={""}
              // sp4={<BrSp sp={""} />}
            />
          </code>
        </pre>
      </div>
      <div className="HTMformsDefaultClComp__descript----">
        Но в большинстве случаев удобно иметь функцию JavaScript, которая
        обрабатывает отправку формы и имеет доступ к данным, которые
        пользователь ввел в форму. Стандартный способ добиться этого —
        использовать технику, называемую «управляемые компоненты».
      </div>
    </div>
  );
};

export default HTMformsDefaultClComp;
