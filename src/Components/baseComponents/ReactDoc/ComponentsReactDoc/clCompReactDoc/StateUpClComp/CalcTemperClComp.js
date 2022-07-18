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

// приём t, проверка на 100 С*
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Вода кипит.</p>;
  }
  return <p>Вода не кипит.</p>;
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Введите температуру в {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      // <fieldset>
      //   <legend>Введите температуру в Цельсия:</legend>
      //   <input value={temperature} onChange={this.handleChange} />
      //   <BoilingVerdict celsius={parseFloat(temperature)} />
      // </fieldset>
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

class CalcTemperClComp extends React.Component {
  render() {
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
          <pre>
            <code>
              <FuncNameProps
                nameFn={"BoilingVerdict"}
                // param1={"props"}
                // param2={""}
                sp1={"  "}
                sp2={"      "}
                body={"short"}
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
                            exp1={"Вода кипятит."}
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
                      exp1={"Вода не кипятит."}
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
        <div className="CalcTemperClComp__descript">
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
        <div className="CalcTemperClComp__content">
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
                          <BrSp sp={"      "} />
                        </>
                      }
                      label2={""}
                      name2={""}
                      inputLab2={""}
                      attrInLab2={""}
                      sp3={<BrSp sp={"      "} />}
                      sp4={<BrSp sp={"      "} />}
                      sp5={<BrSp sp={"    "} />}
                      dop={
                        <>
                          {/* <BoilingVerdict   celsius={parseFloat(temperature)} /> */}
                          <BrSp sp={"      "} />
                          <TagAttrValJSX
                            Name={"BoilingVerdict"}
                            attr1={"celsius"}
                            val1={
                              <>
                                <span className="token function">
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
                            dop3={" "}
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
          <Calculator />
        </div>
      </div>
    );
  }
}

export default CalcTemperClComp;
