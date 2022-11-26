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
} from "../../../../../miniBlocksComponents/examples/ExpPreCode.js";

import CalculatorClComp from "./CalculatorClComp.js";

class AddSecondEntryClComp extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {  }
  }
  render() {
    return (
      <div className="AddSecondEntryClComp">
        <div className="AddSecondEntryClComp__descript">
          <h3>Добавление второго входа</h3>
          <p>
            Наше новое требование состоит в том, что в дополнение к вводу в
            градусах Цельсия мы предоставляем ввод в градусах Фаренгейта, и они
            синхронизируются.
          </p>
          <p>
            Мы можем начать с извлечения <code>TemperatureInput</code>{" "}
            компонента из <code>Calculator</code>. Мы добавим к{" "}
            <code>scale</code> новую опору, которая может быть <code>"c"</code>{" "}
            или <code>"f"</code>:
          </p>
        </div>
        <div className="AddSecondEntryClComp__content">
          <pre>
            <code>
              <ConstNamePlus
                name1={"scaleNames"}
                exp={
                  <>
                    <span className="token punctuation">&#123;</span>
                    <BrSp sp={"  "} />
                    <span className="token punctuationhtml">c</span>
                    <span className="token operator">:</span>{" "}
                    <span className="token atrule">"Celsius"</span>
                    <span className="token punctuation">,</span>
                    <BrSp sp={"  "} />
                    <span className="token punctuationhtml">f</span>
                    <span className="token operator">:</span>{" "}
                    <span className="token atrule">"Fahrenheit"</span>{" "}
                    <BrSp sp={""} />
                    <span className="token punctuation">&#125;;</span>
                  </>
                }
              />
              <BrSp sp={""} />
              <BrSp sp={""} />
              <ClCompLet
                clName={"TemperatureInput"}
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
                    <BrSp sp={"    "} />
                    <ConstNamePlus
                      name1={"scale"}
                      name2={""}
                      param1={"this"}
                      param2={"props"}
                      param3={"scale"}
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
                    {/* 
          render() {
            return (
              <fieldset>
                <legend>Введите температуру в {scaleNames[scale]}:</legend>
                <input value={temperature}
                      onChange={this.handleChange} />
              </fieldset>
            );
          }
        } 
        */}
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
                      name1={
                        <>
                          Введите температуру в Цельсиях{" "}
                          <span className="token punctuation">&#123;</span>
                          scaleNames<span className="token punctuation">[</span>
                          scale<span className="token punctuation">]</span>
                          <span className="token punctuation">&#125;</span>:
                        </>
                      }
                      elemF1={" "}
                      inputLab1={"1212"}
                      attrInLab1={"3434"}
                      input1={
                        <>
                          input
                          <BrSp sp={"         "} />
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
                          <BrSp sp={"         "} />
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
                          {/* <BoilingVerdict   celsius={parseFloat(temperature)} /> */}
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
        </div>
        <div className="AddSecondEntryClComp__descript">
          <p>
            Теперь мы можем изменить <code>Calculator</code> рендеринг двух
            отдельных температурных входов:
          </p>
        </div>
        <div className="AddSecondEntryClComp__content">
          <pre>
            <code>
              <ClCompLet
                clName={"Calculator"}
                sp1={"  "}
                sp2={"    "}
                sp3={"      "}
                exp1={
                  <>
                    <TagAttrValJSX
                      tag={"div"}
                      // Name={"78"}
                      // name1={"78"}
                      // attr1={"78"}
                      // val1={"78"}
                      // val2={"78"}
                      // val3={"78"}
                      exp1={
                        <>
                          <TagAttrValJSX
                            Name={"TemperatureInput"}
                            attr1={"scale"}
                            val1={"c"}
                            dop3={" "}
                          />
                          <BrSp sp={"        "} />
                          <TagAttrValJSX
                            Name={"TemperatureInput"}
                            attr1={"scale"}
                            val1={"f"}
                            dop3={" "}
                          />
                        </>
                      }
                      // exp2={"78"}
                      // hide={true}
                      // br={"78"}
                      sp1={
                        <>
                          <BrSp sp={"        "} />
                        </>
                      }
                      sp2={
                        <>
                          <BrSp sp={"      "} />
                        </>
                      }
                      // dop1={"78"}
                      // dop2={"78"}
                      dop3={"78"}
                      // dop4={""}
                    />
                    <BrSp sp={"    "} />
                  </>
                }
              />
            </code>
          </pre>
        </div>
        <div className="AddSecondEntryClComp__descript">
          <p>
            Теперь у нас есть два входа, но когда вы вводите температуру в один
            из них, другой не обновляется. Это противоречит нашему требованию:
            мы хотим, чтобы они были синхронизированы.
          </p>
          <p>
            Мы также не можем отобразить файл <code>BoilingVerdict</code> из{" "}
            <code>Calculator</code>. <code>Calculator</code> не знает текущую
            температуру, потому что она скрыта внутри файла{" "}
            <code>TemperatureInput</code>.
          </p>
        </div>
        <div className="AddSecondEntryClComp__content">
          <CalculatorClComp
            bodyCalc={"temperInput"}
            // scaleNames={this.props.scaleNames}
          />
        </div>
      </div>
    );
  }
}
export default AddSecondEntryClComp;
