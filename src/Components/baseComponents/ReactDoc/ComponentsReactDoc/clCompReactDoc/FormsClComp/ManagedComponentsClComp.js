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
} from "../../../../../../examples/ExpPreCode.js";

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
    // class NameForm extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {value: ''};

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }

    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }

    //   handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }

    //   render() {
    //     return (
    //       <form onSubmit={this.handleSubmit}>
    //         <label>
    //           Name:
    //           <input type="text" value={this.state.value} onChange={this.handleChange} />
    //         </label>
    //         <input type="submit" value="Submit" />
    //       </form>
    //     );
    //   }
    // }
    return (
      <div className="ManagedComponents----">
        <div className="ManagedComponents__description----">
          <h3>Управляемые компоненты 2</h3>
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
                exp1={
                  <>
                    123
                    <BrSp sp={"    "} />
                  </>
                }
              />
            </code>
          </pre>
          {/* 
          class NameForm extends React.Component {
            constructor(props) {
              super(props);
              this.state = {value: ''};

              this.handleChange = this.handleChange.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);
            }

            handleChange(event) {
              this.setState({value: event.target.value});
            }

            handleSubmit(event) {
              alert('A name was submitted: ' + this.state.value);
              event.preventDefault();
            }

            render() {
              return (
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              );
            }
          } 
          */}
        </div>
      </div>
    );
  }
}

export default ManagedComponents;
