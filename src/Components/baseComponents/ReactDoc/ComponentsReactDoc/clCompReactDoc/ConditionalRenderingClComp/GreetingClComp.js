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
} from "../../../../../../js/examples/ExpPreCode.js";

// приветствие. Условный опрератор If + Переменные
class GreetingClComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  // передаём в state.isLoggedIn true
  handleClick = () => {
    this.setState({ isLoggedIn: true });
  };
  // передаём в state.isLoggedIn false
  handleNoClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    // сокращ. и цикл для Переменных элемента
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleNoClick} />;
    } else {
      button = <LoginButton onClick={this.handleClick} />;
    }

    function UserGreeting(props) {
      return <div>Welcome back!</div>;
    }

    function GuestGreeting(props) {
      return <div>Please sign up.</div>;
    }

    // в зависимости от принятого prop отразит один из компонентов
    function DefineGreeting(props) {
      const isLoggedIn = props.isLoggedIn;
      // const isLoggedInCnp = this.state.isLoggedInCnp;
      // const isLoggedInCnp = this.handleClick()
      // const isLoggedIn2 = true;
      if (isLoggedIn) {
        // if (isLoggedIn || isLoggedInCnp) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }

    // Переменные элемента
    // использ переменные для хранения элементов. Помощь в визуале, остальное как прежде.
    // Компоненты-кнп выхода из системы и входа в систему
    function LoginButton(props) {
      // console.log("props : " + props);
      return (
        <button style={{ background: "inherit" }} onClick={props.onClick}>
          Я Свой
        </button>
      );
    }

    function LogoutButton(props) {
      return (
        <button style={{ background: "inherit" }} onClick={props.onClick}>
          Я Чужой
        </button>
      );
    }

    return (
      <div className="GreetingClComp----">
        <div className="GreetingClComp__descript---">
          {/* <h3>Условный рендеринг</h3>
          <div>
            Бывает нужно объяснить React, как состояние влияет на то, какие
            компоненты требуется скрыть, а какие — отрендерить, и как именно. В
            таких ситуациях используйте операторы (if, else) JavaScript и/или
            тернарные операторы (if...else, cond ? true : false).
          </div> */}
          <h3>Условный опрератор If + Переменные</h3>
          <div>
            Создали компонент Greeting, который отражает один из этих
            компонентов в зависимости от того, выполнено ли условие (вход на
            сайт)
          </div>
          <div>
            В первой части передам false напрямую или изначально записываем
            state.isLoggedIn.false
          </div>
          <div>
            Во второй используем переменные для хранения эл-ов. Помошь в
            визуале, логика такая же.
          </div>
          <div className="IfAnd__descript--- temporary">
            <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
            <code style={{ color: "red" }}>!!!</code> НАПИСАТЬ КОД | ПЕРЕБРАТЬ
          </div>
        </div>
        <div className="GreetingClComp__content---">
          <div className="GreetingClComp__oneexp----">
            <div className="GreetingClComp__oneexp_description----">
              <span className="spmdnon">Напрямую передаём . </span>{" "}
              <span> false </span>
            </div>
            <div className="GreetingClComp__oneexp_content----">
              <DefineGreeting
                // первоначально передавалось напрямую
                // isLoggedIn={false}
                // попытка передать 2 значения
                // isLoggedIn2={this.state.isLoggedIn}
                // передаём состояние
                isLoggedIn={this.state.isLoggedIn}
              />
            </div>
          </div>
          <div className="GreetingClComp__twoexp----">
            <div className="GreetingClComp__twoexp_description----">
              <span className="spmdnon">Передаём через переменные </span>{" "}
              {"   "}
              <div>кнп</div>
            </div>
            <div className="GreetingClComp__twoexp_content----">
              {/* <DefineGreeting
                  isLoggedIn={isLoggedIn}
                  // isLoggedIn={this.state.isLoggedIn}
                /> */}
              {button}
              {/* свой вариант. меняем state.isLoggedIn по кликам ч/з 2
              fn()handleClick/handleNoClick */}
              {/* 
                    <>
                      <button
                        className="GreetingClComp__content-22"
                        type="button"
                        onClick={this.handleClick}
                      >
                        Я Свой {this.state.isLoggedIn ? "ON" : "OFF"}
                      </button>{" "}
                      <button
                        className="GreetingClComp__content-22"
                        onClick={() => {
                          // this.handleNoClick();
                          this.handleNoClick();
                        }}
                        // onClick={this.handleNoClick} // альтернатива
                      >
                        Я Чужой {this.state.isLoggedIn ? "OFF" : "ON"}
                      </button>
                    </> 
                */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GreetingClComp;
