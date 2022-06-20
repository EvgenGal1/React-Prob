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

class TagTextareaClComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Пожалуйста, напишите эссе о вашем любимом элементе DOM.",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Эссе было представлено: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="TagTextareaClComp----">
        <div className="TagTextareaClComp__descript----">
          <h3>Тег textarea</h3>
          <p>
            В HTML <code>&lt;textarea&gt;</code> элемент определяет свой текст
            своими дочерними элементами:
          </p>
          <p>
            В React вместо этого <code>&lt;textarea&gt;</code> используется{" "}
            <code>value</code> атрибут. Таким образом, форма с использованием a{" "}
            <code>&lt;textarea&gt;</code> может быть написана очень похоже на
            форму с однострочным вводом:
          </p>
        </div>
        <div className="TagTextareaClComp__content----">
          <form onSubmit={this.handleSubmit}>
            <label>
              Essay:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
          <pre>
            <code>
              <ClCompLet
                clName={"EssayForm"}
                sp1={"  "}
                sp2={"    "}
                sp3={"      "}
                state1={"value"}
                stVal1={<span className="token atrule">'Напишите'</span>}
                fn1={"handleChange"}
                fnProp1={"event"}
                fnVal1={"event.target.value"}
                dop2={
                  <>
                    <span className="token keyword">alert</span>{" "}
                    <span className="token punctuation">(</span>
                    <span className="token atrule">
                      "Имя было представлено: "
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
                          Ессе
                          <BrSp sp={"          "} />
                        </>
                      }
                      inputLab1={
                        <>
                          textarea
                          <BrSp sp={"           "} />
                        </>
                      }
                      attrInLab1={
                        <>
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
      </div>
    );
  }
}

export default TagTextareaClComp;
