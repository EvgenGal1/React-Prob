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

class ManagedComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="ManagedComponents----">
        <div className="ManagedComponents__descript----">
          <h3>Управляемые компоненты</h3>
          <p>
            В HTML элементы формы, такие как <code>&lt;input&gt;</code>,{" "}
            <code>&lt;textarea&gt;</code> и ,<code>&lt;select&gt;</code> обычно
            сохраняют свое собственное состояние и обновляют его на основе
            пользовательского ввода. В React изменяемое состояние обычно
            сохраняется в свойстве состояния компонентов и обновляется только с
            помощью <code>setState()</code>.
          </p>
          <p>
            Мы можем объединить их, сделав состояние React «единым источником
            правды». Затем компонент React, отображающий форму, также
            контролирует, что происходит в этой форме при последующем вводе
            данных пользователем. Элемент формы ввода, значение которого
            контролируется React таким образом, называется «управляемым
            компонентом».
          </p>
          <p>
            Например, если мы хотим, чтобы предыдущий пример регистрировал имя
            при его отправке, мы можем написать форму как контролируемый
            компонент:
          </p>
        </div>
        <div className="ManagedComponents__content----">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
          <pre>
            <code>
              <ClCompLet
                clName={"NameForm"}
                sp1={"  "}
                sp2={"    "}
                sp3={"      "}
                state1={"value"}
                stVal1={"''"}
                fn1={"handleChange"}
                fnProp1={"event"}
                fnVal1={"event.target.value"}
                dop2={
                  <>
                    <span className="token keyword">alert</span>{" "}
                    <span className="token punctuation">(</span>
                    <span className="token atrule">
                      "A name was submitted: "
                    </span>{" "}
                    <span className="token operator">+</span>{" "}
                    <span className="token parameter">this</span>
                    <span className="token operator">.</span> state
                    <span className="token operator">.</span> value
                    <span className="token punctuation">);</span>
                    <BrSp sp={"    "} />
                    <span className="token parameter">event</span>
                    <span className="token operator">.</span>
                    <span className="token function">preventDefault</span>
                    <span className="token number">()</span>
                  </>
                }
                fn2={"handleSubmit"}
                state2={"value"}
                fnProp2={"event"}
                fnVal2={"event.target.value"}
                exp1={
                  <>
                    <FormLabInpLet
                      form1={"form"}
                      attrF1={
                        <>
                          <AttrValMetd
                            attr1={"onSubmit"}
                            dop3={""}
                            val1={"this"}
                            val2={"handleSubmit"}
                            val3={""}
                          />
                        </>
                      }
                      sp1={<BrSp sp={"        "} />}
                      label1={"label"}
                      sp2={<BrSp sp={"          "} />}
                      name1={
                        <>
                          Name
                          <BrSp sp={"          "} />
                        </>
                      }
                      inputLab1={
                        <>
                          input
                          <BrSp sp={"           "} />
                        </>
                      }
                      attrInLab1={
                        <>
                          <AttrValMetd
                            attr1={"type"}
                            dop3={true}
                            val1={"text"}
                            val2={""}
                            val3={""}
                          />
                          <BrSp sp={"           "} />
                          <AttrValMetd
                            attr1={"value"}
                            dop3={""}
                            val1={"this"}
                            val2={"state"}
                            val3={"value"}
                          />
                          <BrSp sp={"           "} />
                          <AttrValMetd
                            attr1={"onChange"}
                            dop3={""}
                            val1={"this"}
                            val2={"handleChange"}
                            val3={""}
                          />
                          <BrSp sp={"          "} />
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
                            val3={""}
                          />
                          <AttrValMetd
                            attr1={"value"}
                            dop3={true}
                            val1={"Submit"}
                            val2={""}
                            val3={""}
                          />
                        </>
                      }
                      label2={""}
                      name2={""}
                      inputLab2={""}
                      attrInLab2={""}
                      sp3={<BrSp sp={"      "} />}
                    />
                    <BrSp sp={"    "} />
                  </>
                }
              />
            </code>
          </pre>
        </div>
        <div className="ManagedComponents__descript----">
          <p>
            Поскольку <code>value</code> атрибут установлен в нашем элементе
            формы, отображаемое значение всегда будет{" "}
            <code>this.state.value</code>, что делает состояние React источником
            истины. Поскольку <code>handleChange</code> запускается при каждом
            нажатии клавиши для обновления состояния React, отображаемое
            значение будет обновляться по мере ввода пользователем.
          </p>

          <p>
            С контролируемым компонентом значение ввода всегда управляется
            состоянием React. Хотя это означает, что вам нужно ввести немного
            больше кода, теперь вы также можете передать значение другим
            элементам пользовательского интерфейса или сбросить его из других
            обработчиков событий.
          </p>
        </div>
      </div>
    );
  }
}

export default ManagedComponents;
