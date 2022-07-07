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
} from "../../../../../../js/examples/ExpPreCode.js";

// const MultipleInputsClComp = () => {
class MultipleInputsClComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: true,
      numberOfGuests: 2,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="MultipleInputsClComp----">
        <div className="MultipleInputsClComp__descript----">
          <h3>Обработка нескольких входов</h3>
          <div>
            Когда вам нужно обработать несколько контролируемых{" "}
            <code>input</code> элементов, вы можете добавить <code>name</code>{" "}
            атрибут к каждому элементу и позволить функции обработчика выбирать,
            что делать на основе значения <code>event.target.name</code>.
          </div>
        </div>
        <div className="MultipleInputsClComp__content----">
          <form>
            <label>
              Is going:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange}
              />
            </label>
            {/* <br /> */}
            <label>
              Number of guests:
              <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange}
              />
            </label>
          </form>
          <pre>
            <code>
              <ClCompLet
                clName={"Reservation"}
                sp1={"  "}
                sp2={"    "}
                sp3={"      "}
                state1={"isGoing"}
                stVal1={<span className="token parameter">true</span>}
                fn1={"handleInputChange"}
                fnProp1={"event"}
                fn1Body={
                  <>
                    <ConstNamePlus
                      name1={"target"}
                      param1={
                        <>
                          <span className="token parameter">event</span>
                        </>
                      }
                      param2={"target"}
                    />
                    <BrSp sp={"    "} />
                    <ConstNamePlus
                      name1={"value"}
                      param1={"target"}
                      param2={"type"}
                      param3={
                        <>
                          <span className="token operator"> === </span>
                          <span className="token atrule">'checkbox'</span>{" "}
                          <span className="token operator">?</span> target
                          <span className="token operator">.</span>
                          checked <span className="token operator">:</span>{" "}
                          target
                          <span className="token operator">.</span>
                          value
                          <span className="token punctuation">;</span>
                        </>
                      }
                    />
                    <BrSp sp={"    "} />
                    <ConstNamePlus
                      name1={"name"}
                      param1={"target"}
                      param2={"name"}
                    />
                    <BrSp sp={"    "} />
                    <span className="token parameter">this</span>
                    <span className="token operator">.</span>
                    <span className="token function">setState</span>
                    <span className="token punctuation">(</span>
                    <span className="token punctuation">&#123;</span>
                    {/* <br /> */}
                    <BrSp sp={"      "} />
                    <span className="token punctuation">[</span>
                    <span className="token ">name</span>
                    <span className="token punctuation">] </span>
                    <span className="token operator">:</span>{" "}
                    <span className="token ">value</span>
                  </>
                }
                fnVal1={"value"}
                state2={"numberOfGuests"}
                stVal2={<span className="token number">2</span>}
                // fnProp2={"event"}
                // fnVal2={"event.target.value"}
                exp1={
                  <>
                    <FormLabInpLet
                      form1={"form"}
                      // attrF1={"att"}
                      sp1={<BrSp sp={"        "} />}
                      label1={"label"}
                      sp2={<BrSp sp={"          "} />}
                      name1={
                        <>
                          Идет:
                          <BrSp sp={"          "} />
                        </>
                      }
                      // elemF1={"ele"}
                      inputLab1={
                        <>
                          input
                          <BrSp sp={"           "} />
                        </>
                      }
                      attrInLab1={
                        <>
                          <AttrValMetd
                            attr1={"name"}
                            val1={"isGoing"}
                            dop3={" "}
                            // val2={"val"}
                            // val3={"val"}
                          />
                          <BrSp sp={"           "} />
                          <AttrValMetd
                            attr1={"type"}
                            val1={"checkbox"}
                            dop3={" "}
                          />
                          <BrSp sp={"           "} />
                          <AttrValMetd
                            attr1={"checked"}
                            val1={"this"}
                            val2={"state"}
                            val3={"isGoing"}
                          />
                          <BrSp sp={"           "} />
                          <AttrValMetd
                            attr1={"onChange"}
                            val1={"this"}
                            val2={"handleInputChange"}
                          />
                          <BrSp sp={"          "} />
                        </>
                      }
                      // input1={"inp"}
                      // attrIn1={"att"}
                      label2={"label"}
                      name2={
                        <>
                          Количество гостей:
                          <BrSp sp={"          "} />
                        </>
                      }
                      inputLab2={
                        <>
                          input
                          <BrSp sp={"           "} />
                        </>
                      }
                      attrInLab2={
                        <>
                          <AttrValMetd
                            attr1={"name"}
                            val1={"numberOfGuests"}
                            dop3={" "}
                            // val2={"val"}
                            // val3={"val"}
                          />
                          <BrSp sp={"            "} />
                          <AttrValMetd
                            attr1={"type"}
                            val1={"number"}
                            dop3={" "}
                          />
                          <BrSp sp={"            "} />
                          <AttrValMetd
                            attr1={"value"}
                            val1={"this"}
                            val2={"state"}
                            val3={"numberOfGuests"}
                          />
                          <BrSp sp={"            "} />
                          <AttrValMetd
                            attr1={"onChange"}
                            val1={"this"}
                            val2={"handleInputChange"}
                          />
                          <BrSp sp={"          "} />
                        </>
                      }
                      sp3={<BrSp sp={"    "} />}
                    />
                    {/* <form>
                          <br />
                          <label>
                            Number of guests:
                            <input
                              name="numberOfGuests"
                              type="number"
                              value={this.state.numberOfGuests}
                              onChange={this.handleInputChange} />
                          </label>
                        </form> */}
                  </>
                }
              />
            </code>
          </pre>
        </div>
        <div className="MultipleInputsClComp__descript----">
          <div>
            Использован синтаксис имени вычисляемого свойства ES6 для обновления
            ключа состояния, соответствующего заданному входному имени:
          </div>
          <p>
            <code>[name]: value</code>
          </p>
          <p>Это ивалентно этому коду ES5:</p>
          <p>
            <code>
              var partialState = {}; partialState[name] = value;
              this.setState(partialState);
            </code>
          </p>
          <p>
            Кроме того, поскольку частичное состояние <code>setState()</code>{" "}
            автоматически объединяется с текущим состоянием , нам нужно было
            вызвать его только с измененными частями.
          </p>
        </div>
      </div>
    );
  }
}

export default MultipleInputsClComp;
