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

// приём t, проверка на 100 С*
// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>Вода кипит.</p>;
//   }
//   return <p>Вода не кипит.</p>;
// }

// const scaleNames = {
//   c: "Цельсияx",
//   f: "Фаренгейтах",
// };

// fn преобразов Цельсия в Фаренгейта и обратно:
// function toCelsius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }
// function toFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }
// // fn конвертер. вход строка и fn.обраб
// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return "";
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

class CreateTempetCalcClComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
    // console.log("this.props : " + this.props);
  }
  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <div className="CreateTempetCalcClComp">
        <div className="CreateTempetCalcClComp__descript">
          <h3>Cоздадим калькулятор температуры</h3>
          <p>
            Мы начнем с компонента под названием <code>BoilingVerdict</code>. Он
            принимает <code>celsius</code> температуру в качестве опоры и
            выводит, достаточно ли ее для кипячения воды:
          </p>
        </div>
        <div className="CreateTempetCalcClComp__content">
          <pre>
            <code>
              <FuncNameProps
                nameFn={"BoilingVerdict"}
                // param1={"props"}
                // param2={""}
                sp1={"  "}
                sp2={"      "}
                bodyMini={"true"}
                constBody={
                  <>
                    <IfElse
                      sp1={"  "}
                      ifBod={
                        <>
                          <span className="token tag">return</span>{" "}
                          <TagAttrValJSX
                            tag={"p"}
                            name1={""}
                            val2={""}
                            val3={""}
                            exp1={"Вода кипит."}
                            exp2={""}
                            br={""}
                            dop1={<>{/* <BrSp sp={"    "} /> */}</>}
                            dop2={""}
                            dop3={"3"}
                            dop4={""}
                          />
                          <span className="token punctuation">;</span>
                        </>
                      }
                      sp2={"    "}
                      ifParam1={
                        <>
                          <span className="token parameter">props</span>
                          <span className="token operator">.</span>
                          <span className="token">celsius</span>
                          <span className="token operator"> &gt;= </span>
                          <span className="token number">100</span>
                        </>
                      }
                      ifParam2={""}
                      ifeParam1={""}
                      ifeParam2={""}
                      ife={""}
                    />
                  </>
                }
                returnBody={
                  <>
                    <TagAttrValJSX
                      tag={"p"}
                      name1={""}
                      val2={""}
                      val3={""}
                      exp1={"Вода не кипит."}
                      exp2={""}
                      br={""}
                      dop1={<>{/* <BrSp sp={"    "} /> */}</>}
                      dop2={""}
                      dop3={"3"}
                      dop4={""}
                    />
                    <span className="token punctuation">;</span>
                  </>
                }
              />
            </code>
          </pre>
        </div>
        <div className="CreateTempetCalcClComp__descript">
          <p>
            Далее мы создадим компонент с именем <code>Calculator</code>. Он
            отображает, <code>&lt;input&ut;</code>который позволяет вам ввести
            температуру и сохраняет ее значение в формате{" "}
            <code>this.state.temperature</code>.
          </p>
          <p>
            Кроме того, он отображает <code>BoilingVerdictдля</code> текущего
            входного значения.
          </p>
        </div>
        <div className="CreateTempetCalcClComp__content">
          <pre>
            <code>
              <ClCompLet
                clName={"Calculator"}
                sp1={"  "}
                sp2={"    "}
                state1={"temperature"}
                stVal1={"''"}
                fn1={"handleChange"}
                fnProp1={"e"}
                fn1Body={""}
                sp3={"      "}
                fnVal1={
                  <>
                    temperature: <span className="token parameter">e</span>
                    <span className="token operator">.</span>target
                    <span className="token operator">.</span>value
                  </>
                }
                state2={""}
                stVal2={""}
                fn2={""}
                fn2Body={""}
                fnProp2={""}
                fnVal2={""}
                constRet={
                  <>
                    <ConstNamePlus
                      name1={"temperature"}
                      name2={""}
                      param1={"this"}
                      param2={"state"}
                      param3={"temperature"}
                      metd={""}
                      mtdParam2={""}
                      exp={""}
                      num={""}
                      hide={""}
                      empty={""}
                    />
                  </>
                }
                exp1={
                  <>
                    <FormLabInpLet
                      form1={"fieldset"}
                      attrF1={""}
                      sp1={
                        <>
                          <BrSp sp={"        "} />
                        </>
                      }
                      label1={"legend"}
                      sp2={<>{/* <BrSp sp={"  "} /> */}</>}
                      name1={"Введите температуру в Цельсия:"}
                      elemF1={" "}
                      inputLab1={"1212"}
                      attrInLab1={"3434"}
                      input1={
                        <>
                          input
                          <BrSp sp={"        "} />
                        </>
                      }
                      attrIn1={
                        <>
                          <AttrValMetd
                            attr1={"value"}
                            dop3={""}
                            val1={
                              <>
                                <span className="token punctuationhtml">
                                  temperature
                                </span>
                              </>
                            }
                            val2={""}
                            val3={""}
                          />
                          <BrSp sp={"        "} />
                          <AttrValMetd
                            attr1={"onChange"}
                            dop3={""}
                            val1={
                              <>
                                <span className="token parameter">this</span>
                              </>
                            }
                            val2={"handleChange"}
                            val3={""}
                          />
                          <BrSp sp={"        "} />
                        </>
                      }
                      label2={""}
                      name2={""}
                      inputLab2={""}
                      attrInLab2={""}
                      sp3={<BrSp sp={"      "} />}
                      sp4={<BrSp sp={"        "} />}
                      sp5={<BrSp sp={"    "} />}
                      dop={
                        <>
                          <BrSp sp={"        "} />
                          <TagAttrValJSX
                            Name={"BoilingVerdict"}
                            attr1={"celsius"}
                            val1={
                              <>
                                <span className="token keyword">
                                  parseFloat
                                </span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuationhtml">
                                  temperature
                                </span>
                                <span className="token punctuation">)</span>
                              </>
                            }
                            // val2={
                            //   <>
                            //     1212

                            //   </>
                            // }
                            // val3={"123"}
                            // exp1={"123"}
                            // exp2={"123"}
                            // hide={" "}
                            // br={"123"}
                            dop3={null}
                          />
                        </>
                      }
                    />
                    {/* <BrSp sp={" "} /> */}
                  </>
                }
              />
            </code>
          </pre>
          <CalculatorClComp
            bodyCalc={"fieldset"}
            // BoilingVerdict={this.props.BoilingVerdict}
          />
        </div>
      </div>
    );
  }
}

export default CreateTempetCalcClComp;
