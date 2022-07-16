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
} from "../../../../../../js/examples/ExpPreCode.js";

// подкл. UI блоков
import ArrowAccordion from "../../../../../../js/uiBlock/ArrowAccordion.js";
// 1111111 ----------------------------------------------------------------------------------
const Input = (props) => {
  return (
    <div>
      <input type="text" ref={props.inputRef} />
    </div>
  );
};

class App extends React.Component {
  state = {
    value: "",
  };

  handleSubmit = (event) => {
    this.setState({ value: this.inputElement.value });
  };

  render() {
    return (
      <div>
        <h1>React Ref - Callback Ref</h1>
        <h3>Value: {this.state.value}</h3>
        <Input inputRef={(el) => (this.inputElement = el)} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
// 2222222222222 ----------------------------------------------------------------------------------
const Input2 = React.forwardRef((props, ref) => (
  <input type="text" ref={ref} />
));

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      value: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ value: this.inputRef.current.value });
  };

  render() {
    return (
      <div>
        <h1>React Ref - createRef</h1>
        <h3>Value: {this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          <Input2 ref={this.inputRef} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
// 333333333333 ----------------------------------------------------------------------------------
// Встроенный оператор If с логическим оператором &&
class IfAndClComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name2: "Mailbox",
      nameRoot: <span className="token class-name">Mailbox</span>,
      // nameFn1: "Mailbox",
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
    // this.setState({ openArrowAccord: openArrowAccord });
    // this.setState({ openArrowAccord: openArrowAccord });
  };
  render() {
    // function Mailbox(props) {
    const Mailbox = (props) => {
      const unreadMessages = props.unreadMessages;
      return (
        <>
          <div>Hello!</div>
          {unreadMessages.length > 0 && (
            <div>You have {unreadMessages.length} unread messages.</div>
          )}
        </>
      );
    };

    const messages = ["React", "Re: React", "Re:Re: React"];

    return (
      <div
        className="IfAndClComp---- accordion"
        style={{ position: "relative" }}
      >
        <div
          ref={this.RefActivCl}
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
          className="IfAndClComp__descript----"
        >
          <h3>Встроенный оператор If с логическим оператором &&</h3>
          <div style={{ display: "none" }} ref={this.RefOpenDop}>
            <div>
              Можно встраивать выражения в JSX, заключая их в фигурные скобки.
              Это включает в себя логический <code>&&</code> оператор
              JavaScript. Это может быть удобно для условного включения элемента
            </div>
            <div>
              Это работает, потому что в JavaScript{" "}
              <code>true && expression</code> всегда оценивается как{" "}
              <code>expression</code>, и <code>false && expression</code> всегда
              оценивается как <code>false</code>. Следовательно, если условие
              равно <code>true</code>, элемент сразу после <code>&&</code>{" "}
              появится в выводе. Если это <code>false</code>, React
              проигнорирует и пропустит его.
            </div>
            <Mailbox unreadMessages={messages} />
            <div className="IfAndClComp__descript---- temporary">
              <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
              <code style={{ color: "red" }}>!!!</code> КОД | ПЕРЕБРАТЬ{" "}
              <code>pre</code> и <code>code</code>
              <div>
                <code style={{ color: "red" }}>!!!</code> Можно доработать
                визуализацию чтоб по клик на кнп увелич/уменьшать список тем
                самым меняя ввывод
              </div>
            </div>
          </div>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div ref={this.RefOpenCont} className="IfAndClComp__content----">
          <pre className="code-jsx">
            <code className="code-jsx">
              {/* <span className="token keyword">function</span>{" "}
              <span className="token function">Mailbox</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">props</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">&#123;</span> */}
              <FuncNameProps nameFn={"Mailbox"} />
              <br />
              {"  "}
              <span className="token keyword">const</span> unreadMessages{" "}
              <span className="token operator">=</span> props
              <span className="token punctuation">.</span>unreadMessages
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
              <span className="token plain-text"></span>
              <span className="token plain-text"></span>
              <br />
              {"      "}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>h1
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token plain-text">Hello!</span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;/</span>h1
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <br />
              {"      "}
              <span className="token plain-text"></span>
              <span className="token plain-text"></span>
              <span className="token punctuation">&#123;</span>unreadMessages
              <span className="token punctuation">.</span>length{" "}
              <span className="token operator">&gt;</span>{" "}
              <span className="token number">0</span>{" "}
              <span className="token operator">&amp;&amp;</span>
              <br />
              {"        "}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>h2
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token plain-text"></span>
              <br />
              {"          "}
              <span className="token plain-text">You have </span>
              <span className="token punctuation">&#123;</span>unreadMessages
              <span className="token punctuation">.</span>length
              <span className="token punctuation">&#125;</span>
              <span className="token plain-text"> unread messages.</span>
              <br />
              {"        "}
              <span className="token plain-text"></span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;/</span>h2
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <br />
              {"      "}
              <span className="token punctuation">&#125;</span>
              <span className="token plain-text"></span>
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
              <br />
              <br />
              <font></font>
              <font></font>
              <span className="token keyword">const</span> messages{" "}
              <span className="token operator">=</span>{" "}
              <span className="token punctuation">[</span>
              <span className="token string">'React'</span>
              <span className="token punctuation">,</span>{" "}
              <span className="token string">'Re: React'</span>
              <span className="token punctuation">,</span>{" "}
              <span className="token string">'Re:Re: React'</span>
              <span className="token punctuation">]</span>
              <span className="token punctuation">;</span>
              <font></font>
              <font></font>
              <br />
              <br />
              {/* <ConstRoot name={this.name} */}
              {/* <ConstRoot name={this.Num()} /> */}
              <ConstRoot nameRoot={this.state.nameRoot} />
            </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default IfAndClComp;
