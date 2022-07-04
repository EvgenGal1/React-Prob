import React, { useState, useEffect } from "react";
import "./PersistState.scss";

// Методы сохранения состояния между перезагрузками страницы =======================================================================================
// !!! https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f

// подкл. UI блоков
import ArrowAccordion from "../../../js/uiBlock/ArrowAccordion.js";

// переменные как проба ----------------------------------------------------------------------------------
const styles = {
  fontSize: "100%",
  padding: "0 5px",
  margin: "0 2px",
  backgroundColor: "#fff2dd",
};

// классовый компонент (ClassComp) ----------------------------------------------------------------------------------
class ClassComp extends React.Component {
  constructor(props) {
    super();
    // местное состояние = доступ к localStorage ИЛИ счётчик
    this.state = JSON.parse(window.localStorage.getItem("state clComp")) || {
      count: 0,
    };
    // попытка сделать JSON отдельно
    // this.state = {
    //   JSON: JSON.parse(window.localStorage.getItem("state")) || {},count:0
    // };
    // this.state = { isLoggedIn: false };
  }
  // состояние для отслеж
  setState(state) {
    window.localStorage.setItem("state clComp", JSON.stringify(state));
    super.setState(state);
  }
  // измен сост +/-
  increaseCount = () => {
    return this.setState({ ...this.state, count: this.state.count + 1 });
  };
  decreaseCount = () => {
    return this.setState({ ...this.state, count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="clComp--">
        <div className="clComp__descript--">
          <h3>LocalStorage с clComp (компонент класса)</h3>
          <div>описать</div>
        </div>
        <div className="clComp__content--">
          <div>Счёт {this.state.count}</div>
          <button style={styles} type="button" onClick={this.increaseCount}>
            +
          </button>
          <button style={styles} type="button" onClick={this.decreaseCount}>
            -
          </button>
        </div>
        <div className="clComp__frame--">clComp</div>
      </div>
    );
  }
}

// классовый компонент (FunctComp) ----------------------------------------------------------------------------------
const FunctComp = () => {
  // сохран в перем - состояние + обновл сост для использования
  const [count, setCount] = useState(0);
  // Аналог компон. componentDidMount(монтаж) и componentDidUpdate(обновление)
  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem("count fnComp")));
    // Пустой массив для запуска и очистки эффекта один раз, при монтаже и демонтаже
  }, []);
  useEffect(() => {
    window.localStorage.setItem("count fnComp", count);
    // второй аргумент еффекта. запуск эффекта если значения с предадушим отличаются
  }, [count]);
  // измен сост +/-
  const increaseCount = () => {
    return setCount(count + 1);
  };
  const decreaseCount = () => {
    return setCount(count - 1);
  };
  return (
    <div className="fnComp--">
      <div className="fnComp__descript--">
        <h3>LocalStorage с fnComp (функциональный компонент)</h3>
        <div>Описать</div>
      </div>
      <div className="fn-comp__content--">
        <div>Счёт {count}</div>
        <button style={styles} type="button" onClick={increaseCount}>
          +
        </button>
        <button style={styles} type="button" onClick={decreaseCount}>
          -
        </button>
      </div>
      <div className="fnComp__frame--">fnComp</div>
    </div>
  );
};
export { FunctComp };

// покл. в общий Компонент и импорт ----------------------------------------------------------------------------------
class PersistState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className="PersistState accordion">
        <div
          ref={this.RefActivCl}
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
          className="PersistState__descript"
        >
          <h3>Методы сохранения состояния между перезагрузками страницы</h3>
          <div style={{ display: "none" }} ref={this.RefOpenDop}>
            описать
          </div>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div ref={this.RefOpenCont} className="PersistState__content">
          <ClassComp />
          <FunctComp />
        </div>
        <div className="PersistState__frame">PersistState</div>
      </div>
    );
  }
}

export default PersistState;
