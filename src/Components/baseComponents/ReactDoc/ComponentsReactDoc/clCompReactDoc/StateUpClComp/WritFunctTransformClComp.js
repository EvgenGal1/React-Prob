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

// import ExpPreCode from "../../../../../../js/examples/ExpPreCode";
import CalculatorClComp from "./CalculatorClComp.js";

class WritFunctTransformClComp extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {  }
  }
  render() {
    return (
      <div className="WritFunctTransformClComp">
        <div className="WritFunctTransformClComp__description">
          <h3>Написание функций преобразования</h3>
          <p>
            Во-первых, мы напишем две функции для преобразования градусов
            Цельсия в градусы Фаренгейта и обратно:
          </p>
        </div>
        <div className="WritFunctTransformClComp__content">
          <pre>
            <code>
              {/* 
                function toCelsius(fahrenheit) {
                  return (fahrenheit - 32) * 5 / 9;
                }

                function toFahrenheit(celsius) {
                  return (celsius * 9 / 5) + 32;
                } 
                */}
              <FuncNameProps
                nameFn={"toCelsius"}
                param1={"fahrenheit"}
                param2={""}
                sp1={"  "}
                bodyMini={"true"}
                // constBody={"123"}
                sp2={"23"}
                returnBody={
                  <>
                    <span className="token punctuation">(</span>
                    <span className="token punctuation"></span>
                    <span className="token parameter">fahrenheit</span>{" "}
                    <span className="token operator">-</span>{" "}
                    <span className="token number">32</span>
                    <span className="token punctuation">)</span>{" "}
                    <span className="token operator">*</span>{" "}
                    <span className="token number">5</span>{" "}
                    <span className="token operator">/</span>{" "}
                    <span className="token number">9</span>
                    <span className="token punctuation">;</span>
                  </>
                }
              />
              <BrSp sp={""} />
              <FuncNameProps
                nameFn={"toFahrenheit"}
                param1={"celsius"}
                param2={""}
                sp1={"  "}
                bodyMini={"true"}
                // constBody={"123"}
                sp2={"23"}
                returnBody={
                  <>
                    {/* celsius * 9 / 5) + 32; */}
                    <span className="token punctuation">(</span>
                    <span className="token punctuation"></span>
                    <span className="token parameter">celsius</span>{" "}
                    <span className="token operator">*</span>{" "}
                    <span className="token number">9</span>{" "}
                    <span className="token operator">/</span>{" "}
                    <span className="token number">5</span>{" "}
                    <span className="token punctuation">)</span>{" "}
                    <span className="token operator">+</span>{" "}
                    <span className="token number">32</span>
                    <span className="token punctuation">;</span>
                  </>
                }
              />
            </code>
          </pre>
        </div>
      </div>
    );
  }
}
export default WritFunctTransformClComp;
