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

const TagSelectClComp = () => {
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
              fnVal1={"event.target.value"}
              dop2={
                <>
                  <span className="token keyword">alert</span>{" "}
                  <span className="token punctuation">(</span>
                  <span className="token atrule">
                    "Ваш любимый вкус - это: "
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
                    elemF1={"select"}
                    valS1={
                      <>
                        Grapefruit
                        {/* <AttrValMetd
                          attr1={"value"}
                          dop3={true}
                          val1={"Grapefruit"}
                          val2={""}
                          val3={""}
                        /> */}
                      </>
                    }
                    valS2={<>Lime</>}
                    valS3={"Coconut"}
                    valS4={"Mango"}
                    seldS={true}
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
          В целом это делает так, что все <code>&lt;input type="text"&gt;</code>
          , <code>&lt;textarea&gt;</code> и <code>&lt;select&gt;</code> все
          работают очень похоже — все они принимают <code>value</code> атрибут,
          который вы можете использовать для реализации управляемого компонента.
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
};

export default TagSelectClComp;
