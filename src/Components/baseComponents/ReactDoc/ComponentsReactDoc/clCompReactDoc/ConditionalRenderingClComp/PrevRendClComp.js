import React from "react";

// import ListsClComp from "./ListsClComp.js";
// import ClockClComp from "./ClockClComp.js";

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

// ОБЩИЕ FN для всех Компонентов ----------------------------------------------------------------------------------
// переключение кнп. принимает только boolen ?
// так раб, пока ток showWarn
function knpToggleClick() {
  // let knpToggleClick = () => {
  this.setState((state) => ({
    showKey: !state.showKey,
    show: !state.show,
    showWarning: !state.showWarning,
  }));
  // console.log("this : " + this);
  // console.log("this : " + this.state);
  // this.setState((props) => ({
  //   showKey: !props.showKey,
  //   showWarning: !props.showWarning,
  // }));
}

// предовращение рендера
class PrevRendClComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showWarning: false,
      show: false,
      nameRoot: <span className="token class-name">Page</span>,
      nameFn1: "WarningBanner",
    };
    // попытка преобразования в общую fn для кнп knpToggleClick
    // this.handleToggleClick = this.handleToggleClick.bind(this);
    // knpToggleClick = knpToggleClick.bind();
    this.knpToggleClick = knpToggleClick.bind(this);
  }
  // попытка преобразования в общую fn для кнп knpToggleClick
  // handleToggleClick() {
  //   this.setState((state) => ({
  //     showWarning: !state.showWarning,
  //   }));
  // }

  render() {
    const WarningBanner = (props) => {
      if (!props.warn) {
        return null;
      }
      return (
        <code className="code-jsx">
          <div className="warning">Warning!</div>
          <div className="warning2">
            <FuncNameProps nameFn={"WarningBanner"} />
            <br />
            {"  "}
            <span className="token tag">if</span>{" "}
            <span className="token punctuation">(</span>
            <span className="token operator">!</span>
            <span className="token parameter">props</span>
            <span className="token operator">.</span>warn
            <span className="token punctuation">)</span>{" "}
            <span className="token punctuation">&#123;</span>
            <br />
            {"    "}
            <span className="token tag">return</span>{" "}
            <span className="token boolean">null</span>
            <span className="token punctuation">;</span>
            <br />
            {"  "}
            <span className="token punctuation">&#125;</span>
            <br />
            <br />
            {"  "}
            <span className="token tag">return</span>{" "}
            <span className="token punctuation">(</span>
            <br />
            {"    "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuationhtml">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">className</span>
              <span className="token attr-value">
                <span className="token operator">=</span>
                <span className="token attr-value ">"warning"</span>
              </span>
              <span className="token punctuationhtml">&gt;</span>
            </span>
            <br />
            {"      "}
            <span className="token plain-text"></span>
            <span className="token plain-text">Warning!</span>
            <span className="token plain-text"></span>
            <br />
            {"    "}
            <span className="token punctuationhtml">&lt;/</span>
            <span className="token tag">div</span>
            <span className="token punctuationhtml">&gt;</span>
            <br />
            {"  "}
            <span className="token punctuation">)</span>
            <span className="token punctuation">;</span>
            <br />
            <span className="token punctuation">&#125;</span>
          </div>
          <div className="warning3">Warning!</div>
          <br />
        </code>
      );
    };
    // console.log("PrevRendClComp : " + this.state.show);
    return (
      <div className="PrevRendClComp----">
        <div className="PrevRendClComp__descript----">
          <h3>Предотвращение рендеринга компонента</h3>
          <div>
            В редких случаях вы можете захотеть, чтобы компонент скрывал себя,
            даже если он был визуализирован другим компонентом. Чтобы сделать
            это, верните <code>null</code> вместо своего вывода рендеринга.
          </div>
          <div>
            <code>&lt;WarningBanner/&gt;</code> визуализируется в зависимости от
            значения реквизита под названием <code>warn</code>. Если значение
            свойства равно
            <code>false</code>, то компонент не отображается:
          </div>
          <div>
            {/* попытка преобразования в общую fn для кнп knpToggleClick */}
            {/* <button onClick={this.handleToggleClick}> */}
            {/* <button onClick={knpToggleClick}> */}
            <button className="btmShowHide" onClick={knpToggleClick}>
              {/* <div>{this.state.showWarning ? "Show" : "Hide"}</div> */}
              <div>{this.state.show ? "Hide" : "Show"}</div>
            </button>
            {/* <button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button> */}
            {/* <button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button> */}
          </div>
        </div>
        <div className="PrevRendClComp__content----">
          <pre className="code-jsx">
            <code className="code-jsx">
              {/* <WarningBanner warn={this.state.showWarning} /> */}
              <WarningBanner warn={this.state.show} />
              <span className="token keyword">class</span>{" "}
              <span className="token class-name">Page</span>{" "}
              <span className="token keyword">extends</span>{" "}
              <span className="token class-name">React</span>
              <span className="token tag">.</span>
              <span className="token class-name">Component</span>{" "}
              <span className="token punctuation">&#123;</span>
              <br />
              {"  "}
              <span className="token function">constructor</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">props</span>
              <span className="token punctuation">)</span>{" "}
              <span className="token punctuation">&#123;</span>
              <br />
              {"    "}
              <span className="token function">super</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">props</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">;</span>
              <br />
              {"    "}
              <span className="token parameter">this</span>
              <span className="token operator">.</span>state{" "}
              <span className="token operator">=</span>{" "}
              <span className="token punctuation">&#123;</span>showWarning{" "}
              <span className="token operator">:</span>{" "}
              <span className="token boolean">true</span>
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">;</span>
              <br />
              {"    "}
              <span className="token parameter">this</span>
              <span className="token operator">.</span>handleToggleClick{" "}
              <span className="token operator">=</span>{" "}
              <span className="token parameter">this</span>
              <span className="token operator">.</span>
              <span className="token function">handleToggleClick</span>
              <span className="token operator">.</span>
              <span className="token function">bind</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">this</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">;</span>
              <br />
              {"  "}
              <span className="token punctuation">&#125;</span>
              <br />
              <br />
              <font></font>
              <font></font>
              {"  "}
              <span className="token function">handleToggleClick</span>
              <span className="token punctuation">(</span>
              <span className="token punctuation">)</span>{" "}
              <span className="token punctuation">&#123;</span>
              <br />
              {"    "}
              <span className="token parameter">this</span>
              <span className="token operator">.</span>
              <span className="token function">setState</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">state</span>{" "}
              <span className="token operator">=&gt;</span>{" "}
              <span className="token punctuation">(</span>
              <span className="token punctuation">&#123;</span>
              <br />
              {"      "}
              showWarning
              <span className="token operator">:</span>{" "}
              <span className="token operator">!</span>
              <span className="token parameter">state</span>
              <span className="token operator">.</span>showWarning
              <br />
              {"    "}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">;</span>
              <br />
              {"  "}
              <span className="token punctuation">&#125;</span>
              <br />
              <br />
              <font></font>
              <font></font>
              {"  "}
              <span className="token function">render</span>
              <span className="token punctuation">(</span>
              <span className="token punctuation">)</span>{" "}
              <span className="token punctuation">&#123;</span>
              <br />
              {"    "}
              <span className="token tag">return</span>{" "}
              <span className="token punctuation">(</span>
              <br />
              {"      "}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuationhtml">&lt;</span>div
                </span>
                <span className="token punctuationhtml">&gt;</span>
              </span>
              <br />
              {"        "}
              <span className="token punctuationhtml">&lt;</span>
              <span className="token class-name">WarningBanner</span>{" "}
              <span className="token attr-name">warn</span>
              <span className="token operator">=</span>
              <span className="token punctuation">&#123;</span>
              <span className="token parameter">this</span>
              <span className="token operator">.</span>state
              <span className="token operator">.</span>showWarning
              <span className="token punctuation">&#125;</span>
              <span className="token punctuationhtml">/&gt;</span>
              <span className="token plain-text"></span>
              <br />
              {"        "}
              <span className="token plain-text"></span>
              <span className="token punctuationhtml">&lt;</span>
              <span className="token tag">button</span>{" "}
              <span className="token attr-name">onClick</span>
              <span className="token operator">=</span>
              <span className="token punctuation">&#123;</span>
              <span className="token parameter">this</span>
              <span className="token punctuation">.</span>
              <span className="token function">handleToggleClick</span>
              <span className="token punctuation">&#125;</span>
              <span className="token punctuationhtml">&gt;</span>
              <br />
              {"          "}
              <span className="token punctuation">&#123;</span>
              <span className="token parameter">this</span>
              <span className="token operator">.</span>state
              <span className="token operator">.</span>showWarning{" "}
              <span className="token operator">?</span>{" "}
              <span className="token atrule">'Hide'</span>{" "}
              <span className="token operator">:</span>{" "}
              <span className="token atrule">'show'</span>
              <span className="token punctuation">&#125;</span>
              <span className="token plain-text"></span>
              <span className="token plain-text"></span>
              <br />
              {"        "}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuationhtml">&lt;/</span>button
                </span>
                <span className="token punctuationhtml">&gt;</span>
              </span>
              <br />
              {"      "}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuationhtml">&lt;/</span>div
                </span>
                <span className="token punctuationhtml">&gt;</span>
              </span>
              <br />
              {"    "}
              <span className="token punctuation">);</span>
              <br />
              {"  "}
              <span className="token punctuation">&#125;</span>
              <br />
              <span className="token punctuation">&#125;</span>
              <br />
              <br />
              <ConstRoot nameRoot={this.state.nameRoot} />
            </code>
          </pre>
        </div>
        <div className="PrevRendClComp__descript----">
          Возврат <code>null</code> из <code>render</code> метода компонента не
          влияет на запуск методов жизненного цикла компонента. Например{" "}
          <code>componentDidUpdate</code>, все равно будут называть.
        </div>
      </div>
    );
  }
}

export default PrevRendClComp;
