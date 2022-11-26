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
  SelectLet,
  IfElse,
} from "../../../../../miniBlocksComponents/examples/ExpPreCode.js";

// подкл. UI блоков
import ArrowAccordion from "../../../../../miniBlocksComponents/includes/ArrowAccordion.js";

// Встроенный If-Else с условным оператором
// const IfCondOperClComp = () => {
class IfCondOperClComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      // this.handleLoginClick = this.handleLoginClick.bind(this);
      // this.handleLogoutClick = this.handleLogoutClick.bind(this);
      // this.handleClick = this.handleClick.bind(this);
      openArrowAccord: true,
    };
    this.RefActivCl = React.createRef();
    this.RefOpenDop = React.createRef();
    this.RefOpenCont = React.createRef();
  }
  handleClickRef() {
    this.RefActivCl.current.classList.toggle("_active");
    this.RefOpenDop.current.classList.toggle("openDop");
    this.RefOpenCont.current.classList.toggle("openCont");
    // this.setState((prevState) => ({
    //   openArrowAccord: !prevState.openArrowAccord,
    // }));
  }
  // toggleArrowAccord() {
  toggleArrowAccord = () => {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
  };
  render() {
    return (
      <div
        style={{ position: "relative" }}
        className="IfCondOperClComp---- accordion"
      >
        <div
          ref={this.RefActivCl}
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
          className="IfCondOperClComp__descript----"
        >
          <h3>Встроенный If-Else с условным оператором</h3>
          <div style={{ display: "none" }} ref={this.RefOpenDop}>
            <p>
              Условный оператор JavaScript <code>condition ? true : false</code>{" "}
              используется для условной визуализации небольшого блока текста.
            </p>
            <p>
              Можно использовать для больших выражений, но результат того что
              происходит может быть менее очевиден
            </p>
            <div className="IfCondOperClComp__descript---- temporary">
              <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
              <code style={{ color: "red" }}>!!!</code> КОД | ПЕРЕБРАТЬ{" "}
              <code>pre</code> и <code>code</code>
            </div>
          </div>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div ref={this.RefOpenCont} className="IfCondOperClComp__content----">
          <pre className="code-jsx">
            <code className="code-jsx">
              <span className="token function">render</span>
              <span className="token punctuation">(</span>
              <span className="token punctuation">)</span>{" "}
              <span className="token punctuation">&#123;</span>
              <br />
              {"  "}
              <span className="token keyword">const</span> isLoggedIn{" "}
              <span className="token operator">=</span>{" "}
              <span className="token keyword">this</span>
              <span className="token punctuation">.</span>state
              <span className="token punctuation">.</span>isLoggedIn
              <span className="token punctuation">;</span>
              <br />
              {"  "}
              <span className="token keyword">return</span>{" "}
              <span className="token punctuation">(</span>
              <br />
              {"    "}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>div
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <br />
              {"      "}
              <span className="token plain-text"></span>
              <span className="token plain-text">The user is </span>
              <br />
              {"      "}
              <span className="token punctuation">&lt;</span>
              <span className="token tag">b</span>
              <span className="token punctuation">&gt;</span>{" "}
              <span className="token punctuation">&#123;</span>isLoggedIn{" "}
              <span className="token operator">?</span>{" "}
              <span className="token string">'currently'</span>{" "}
              <span className="token operator">:</span>{" "}
              <span className="token string">'not'</span>
              <span className="token punctuation">&#125;</span>{" "}
              <span className="token punctuation">&lt;/</span>
              <span className="token tag">b</span>
              <span className="token punctuation">&gt;</span>
              <br />
              {"      "}
              <span className="token plain-text">logged in.</span>
              <br />
              {"    "}
              <span className="token plain-text"></span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;/</span>div
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <br />
              {"  "}
              <span className="token punctuation">)</span>
              <span className="token punctuation">;</span>
              <br />
              <span className="token punctuation">&#125;</span>
            </code>
          </pre>
        </div>
        {/* //!!! не раб - 2 ref RefOpenDop не раб. только последний */}
        {/* <div
          // style={{ display: "none" }}
          // ref={this.RefOpenDop}
          className="IfCondOperClComp__descript----"
        >
          Можно использовать для больших выражений, но результат того что
          происходит может быть менее очевиден
        </div> */}
      </div>
    );
  }
}

export default IfCondOperClComp;
