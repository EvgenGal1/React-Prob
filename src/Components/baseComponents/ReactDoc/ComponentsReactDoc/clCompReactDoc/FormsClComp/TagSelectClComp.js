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

class TagSelectClComp extends React.Component {
  // const TagSelectClComp = () => {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Ваш любимый вкус - это: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className=" TagSelectClComp----">
        <div className="TagSelectClComp__descript----">
          <h3>Тег select</h3>
          <p>
            В HTML <code>&lt;select&gt;</code> создает раскрывающийся список.
            Например, этот HTML-код создает раскрывающийся список вкусов:
          </p>
          <code>
            &lt;select&gt;
            <br />
            &lt;option value="grapefruit"&gt;Grapefruit&lt;/option&gt;
            <br />
            &lt;option selected value="coconut"&gt;Coconut&lt;/option&gt;
            <br />
            &lt;/select&gt;
          </code>
        </div>
        <div className="TagSelectClComp__content----">
          <form onSubmit={this.handleSubmit}>
            <label>
              Выберите свой любимый вкус:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Грейпфрут</option>
                <option value="lime">Лайм</option>
                <option value="coconut">Кокос</option>
                <option value="mango">Манго</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <pre>
            <code>
              <ClCompLet
                clName={"FlavorForm"}
                sp1={"  "}
                sp2={"    "}
                sp3={"      "}
                state1={"value"}
                stVal1={<span className="token atrule">'coconut'</span>}
                fn1={"handleChange"}
                fnProp1={"event"}
                fnVal1={
                  <>
                    <span className="token parameter">event</span>
                    <span className="token operator">.</span>target
                    <span className="token operator">.</span>value
                  </>
                }
                fn2Body={
                  <>
                    <span className="token keyword">alert</span>{" "}
                    <span className="token punctuation">(</span>
                    <span className="token atrule">
                      "Ваш любимый вкус - это: "
                    </span>{" "}
                    <span className="token operator">+</span>{" "}
                    <span className="token parameter">this</span>
                    <span className="token operator">.</span>state
                    <span className="token operator">.</span>value
                    <span className="token punctuation">);</span>
                    <BrSp sp={"    "} />
                    <span className="token parameter">event</span>
                    <span className="token operator">.</span>
                    <span className="token function">preventDefault</span>
                    <span className="token number">()</span>
                    <span className="token punctuation">;</span>
                  </>
                }
                fn2={"handleSubmit"}
                // state2={"value"}
                fnProp2={"event"}
                // fnVal2={"event.target.value"}
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
                          Выберите свой любимый вкус:
                          <BrSp sp={"          "} />
                        </>
                      }
                      // inputLab1={
                      //   <>
                      //     textarea
                      //     <BrSp sp={"           "} />
                      //   </>
                      // }
                      // attrInLab1={
                      //   <>
                      //     <AttrValMetd
                      //       attr1={"value"}
                      //       dop3={""}
                      //       val1={"this"}
                      //       val2={"state"}
                      //       val3={"value"}
                      //     />
                      //     <BrSp sp={"           "} />
                      //     <AttrValMetd
                      //       attr1={"onChange"}
                      //       dop3={""}
                      //       val1={"this"}
                      //       val2={"handleChange"}
                      //     />
                      //     <BrSp sp={"          "} />
                      //   </>
                      // }
                      inputLab1={
                        <>
                          ---
                          <BrSp sp={"           "} />
                        </>
                      }
                      attrInLab1={"..."}
                      elemF1={
                        // "select"
                        <>
                          {/* {elemF1} */}
                          <SelectLet
                            nameS={
                              <>
                                select
                                {/* <AttrValMetd
                                attr1={"value"}
                                dop3={""}
                                val1={"123123123"}
                                val2={"123"}
                                val3={""}
                              /> */}
                              </>
                            }
                            atrN={
                              <>
                                {/* {" "} */}
                                <AttrValMetd
                                  attr1={"value"}
                                  dop3={""}
                                  val1={"this"}
                                  val2={"state"}
                                  val3={"value"}
                                />
                                <AttrValMetd
                                  attr1={"onChange"}
                                  dop3={""}
                                  val1={"this"}
                                  val2={"handleChange"}
                                  val3={""}
                                />
                                {/* value={this.state.value} onChange={this.handleChange} */}
                              </>
                            }
                            sp1={<BrSp sp={"        "} />}
                            sp2={<BrSp sp={"          "} />}
                            val1={"Грейпфрут"}
                            val2={"Лайм"}
                            val3={"Кокос"}
                            val4={"манго"}
                            // seld={true}
                          />
                        </>
                      }
                      // valS1={
                      //   <>
                      //     Grapefruit
                      //     {/* <AttrValMetd
                      //       attr1={"value"}
                      //       dop3={true}
                      //       val1={"Grapefruit"}
                      //       val2={""}
                      //       val3={""}
                      //     /> */}
                      //   </>
                      // }
                      // valS2={<>Lime</>}
                      // valS3={"Coconut"}
                      // valS4={"Mango"}
                      // seldS={true}
                      //  ----------------------------------------------------------------------------------
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
        <div className="TagSelectClComp__descript----">
          <p>
            В целом это делает так, что все{" "}
            <code>&lt;input type="text"&gt;</code>,{" "}
            <code>&lt;textarea&gt;</code> и <code>&lt;select&gt;</code> все
            работают очень похоже — все они принимают <code>value</code>{" "}
            атрибут, который вы можете использовать для реализации управляемого
            компонента.
          </p>
          <p>
            Можно передать массив в <code>value</code> атрибут, что позволит вам
            выбрать несколько опций в <code>select</code> теге:{" "}
            <code>
              &lt;select multiple=&#123;true&#125; value=&#123;['B',
              'C']&#125;&gt;
            </code>
          </p>
        </div>
      </div>
    );
  }
}

export default TagSelectClComp;
