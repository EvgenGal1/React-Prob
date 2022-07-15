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
  IfElse,
} from "../../../../../../js/examples/ExpPreCode.js";

import ExpPreCode from "../../../../../../js/examples/ExpPreCode";

class CalcTemperClComp extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {  }
  //}

  render() {
    // приём t, проверка на 100 С*
    function BoilingVerdict(props) {
      if (props.celsius >= 100) {
        return <p>Вода кипятит.</p>;
      }
      return <p>The water would not boil.</p>;
    }
    return (
      <div className="CalcTemperClComp">
        <div className="CalcTemperClComp__descript">
          <h3>Cоздадим калькулятор температуры</h3>
          <p>
            Мы начнем с компонента под названием <code>BoilingVerdict</code>. Он
            принимает <code>celsius</code> температуру в качестве опоры и
            выводит, достаточно ли ее для кипячения воды:
          </p>
        </div>
        <div className="CalcTemperClComp__content">
          <BoilingVerdict />
          <pre>
            <code>
              <FuncNameProps
                nameFn={"BoilingVerdict"}
                // param1={"props"}
                // param2={""}
                body={"body"}
                // returnBody={"ife"}
                returnBody={
                  // "if"
                  // <>
                  // {/* "if" */}
                  <>
                    888
                    {/* <BrSp sp={"    "} /> */}
                    <IfElse ifBod={"1001"} /> 11111
                  </>
                  // {/* 777 */}
                  // {/* </> */}
                }
              />
              {/* 
              function BoilingVerdict(props) {
                if (props.celsius >= 100) {
                  return <p>The water would boil.</p>;
                }
                return <p>The water would not boil.</p>;
              } 
              */}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default CalcTemperClComp;
