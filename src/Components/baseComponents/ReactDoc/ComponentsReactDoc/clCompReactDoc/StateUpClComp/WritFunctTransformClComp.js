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
        <div className="WritFunctTransformClComp__descript">
          <h3>Написание функций преобразования</h3>
          <p>
            Во-первых, мы напишем две функции для преобразования градусов
            Цельсия в градусы Фаренгейта и обратно:
          </p>
        </div>
        <div className="WritFunctTransformClComp__content">
          <pre>
            <code>
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
        <div className="WritFunctTransformClComp__descript">
          <p>
            Эти две функции преобразуют числа. Мы напишем еще одну функцию,
            которая принимает строку <code>temperature</code> и
            функцию-преобразователь в качестве аргументов и возвращает строку.
            Мы будем использовать его для вычисления значения одного входа на
            основе другого входа.
          </p>

          <p>
            Он возвращает пустую строку для недопустимого значения{" "}
            <code>temperature</code> и округляет вывод до третьего десятичного
            знака:
          </p>
        </div>
        <div className="WritFunctTransformClComp__content">
          <pre>
            <code>
              <FuncNameProps
                nameFn={"tryConvert"}
                param1={"temperature"}
                param2={
                  <>
                    <span className="token punctuation">,</span> convert
                  </>
                }
                sp1={"  "}
                constBody={
                  <>
                    <BrSp sp={"  "} />
                    <ConstNamePlus
                      name1={"input"}
                      param1={<span className="token keyword">parseFloat</span>}
                      param2={
                        <span className="token parameter">temperature</span>
                      }
                      brackes={"("}
                    />
                    <IfElse
                      sp1={"  "}
                      ifParam1={
                        <>
                          <span className="token keyword">Number</span>
                          <span className="token operator">.</span>
                        </>
                      }
                      ifParam2={
                        <>
                          <span className="token function">isNaN</span>
                          <span className="token punctuation">(</span>input
                          <span className="token punctuation">)</span>
                        </>
                      }
                      sp2={"    "}
                      ifBod={
                        <>
                          <span className="token tag">return</span>{" "}
                          <span className="token punctuation">'';</span>
                        </>
                      }
                    />
                    <BrSp sp={"  "} />
                    <ConstNamePlus
                      name1={"output"}
                      param1={<span className="token function">convert</span>}
                      param2={<span className="token ">input</span>}
                      brackes={"("}
                    />
                    <BrSp sp={"  "} />
                    <ConstNamePlus
                      name1={"rounded"}
                      param1={
                        <>
                          <span className="token ">Math</span>
                        </>
                      }
                      param2={
                        <>
                          <span className="token function">round</span>
                          <span className="token punctuation">(</span>
                          <span className="token ">output</span>{" "}
                          <span className="token operator">*</span>{" "}
                          <span className="token number">1000</span>
                          <span className="token punctuation">)</span>{" "}
                          <span className="token operator">/</span>{" "}
                          <span className="token number">1000</span>
                          <span className="token punctuation">;</span>
                        </>
                      }
                    />
                  </>
                }
                sp2={"23"}
                bodyMini={"true"}
                returnBody={
                  <>
                    <span className="token ">rounded</span>
                    <span className="token operator">.</span>
                    <span className="token function">toString</span>
                    <span className="token operator">()</span>
                    <span className="token punctuation">;</span>
                  </>
                }
              />
            </code>
          </pre>
        </div>
        <div className="WritFunctTransformClComp__descript">
          <p>
            Например, <code>tryConvert('abc', toCelsius)</code> возвращает
            пустую строку а <code>tryConvert('10.22', toFahrenheit)</code>{" "}
            возвращает <code>'50.396'</code>.
          </p>
        </div>
      </div>
    );
  }
}
export default WritFunctTransformClComp;
