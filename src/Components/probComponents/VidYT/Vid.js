import React from "react";
// import React, { Component } from "react";
import VidInput1 from "./VidInput1.js";
import VidInput2 from "./VidInput2.js";
import VidButton1 from "./VidButton1.js";
import VidButton2 from "./VidButton2.js";
// ??? не раб - при подкл стилей сюда, не распознаёт переменные из App.scss ($md3NoErr 40стр.), даже если App.scss подкл в index.js
// import "./Vid.scss";

// !!! По видео - https://www.youtube.com/watch?v=-D4UMrcjreU
// + доп из https://reactjs.org/docs/handling-events.html

// подкл. UI блоков
import ArrowAccordion from "../../miniBlocksComponents/includes/ArrowAccordion.js";

class VidInput extends React.Component {
  // export default class Vid extends Component {
  constructor(props) {
    super(props);
    // какие-то значения
    this.state = {
      // vid__input. изнач задаём пусто
      inputValue: "",
    };
    // ссылка на fn()
    this.handleChange = this.handleChange.bind(this);
  }

  // сама fn() `обработка изменений`
  handleChange(event) {
    // будем измен состоянием. `событие.цель.значение`. если понял по fn() принимает то что пишем (здесь пишем в input)
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="vid-input--">
        <div className="vid-input__descript--">
          <h3>Интерактивный INPUT.</h3>
          <h6>
            В одного Родителя, вывод 2ух дочерних Компонентов с состояниями
          </h6>
          <p>
            <span className="kra">Компонент0</span> (Родитель), принимает{" "}
            <span className="ryz">Компонент1</span> (дочь) и{" "}
            <span className="gol">Компонент2</span> (дочь)
          </p>
          <p>
            В <span className="ryz">Комп1</span> выводим{" "}
            <span className="zhe">текст</span> и{" "}
            <span className="zel">input</span>. <br />
            Из Род. передаём значение состояния inputValue и fn()handleChange с
            её обработку.
          </p>
          <p>
            В <span className="gol">Комп2</span> выводим{" "}
            <span className="sin">текст</span> и{" "}
            <span className="fiol">вывод</span>. <br />
            Из Род. передаём значение состояния inputValue
          </p>
          <p>
            В результате, при заполнении <span className="zel">input</span>{" "}
            данные отражаются и в <span className="fiol">вывод</span>
          </p>
        </div>
        <div className="vid-input__content--">
          {/* выводим 2 компонента */}
          {/* 1. вывод input и передаём ему значение состояния inputValue, и передаём fn()handleChange и её обработку  */}
          <VidInput1
            input={this.state.inputValue}
            handleChange={this.handleChange}
          />
          {/* 2. передаём ему значение состояния inputValue */}
          <VidInput2 input={this.state.inputValue} />
        </div>
        <div className="vid-input__frame--">VidInput</div>
      </div>
    );
  }
}

class VidButton extends React.Component {
  // export default class Vid extends Component {
  constructor(props) {
    super(props);
    // какие-то значения
    this.state = {
      // VidButton1
      name: "NOT",
      wnames: "WNOT",
      //  VidButton2 на toggle
      isToggleOn: true,
    };
    // ссылка на fn(). VidButton1,2
    // this.updateData = this.updateData.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // VidButton1. сама fn() `обновление данных`. входной парам value, его присваиваем к state компонента с помощью метода setState
  updateData = (value, wvalues) => {
    // будем измен состоянием setState по его значению
    this.setState({
      name: value,
      wnames: wvalues,
    });
  };

  //  VidButton2 на toggle
  handleChange = () => {
    // handleChange3 ()  {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };
  // PrevState - это ссылка на предыдущее состояние
  // https://stackoverflow.com/questions/54807454/what-is-prevstate-in-reactjs

  render() {
    return (
      <div className="vid-button--">
        <div className="vid-button__descript--">
          <h3>Интерактивный BUTTON.</h3>
          <h6>
            В одного Родителя, вывод 2ух дочерних Компонентов с состояниями
          </h6>
          <p>
            <span className="kra">Компонент0</span> (Родитель), принимает{" "}
            <span className="ryz">Компонент1</span> (дочь) и{" "}
            <span className="gol">Компонент2</span> (дочь)
          </p>
          <p>
            В <span className="ryz">Комп1</span> выводим{" "}
            <span className="zhe">состояние</span> и 2{" "}
            <span className="zel">button</span>. <br />
            Из Род. передаём fn()updateData и её обработку.
          </p>
          <p>
            В <span className="gol">Комп2</span> выводим{" "}
            <span className="sin">состояние</span> и{" "}
            <span className="fiol">button</span>. <br />
            Из Род. передаём значение состояния isToggleOn и fn()handleChange с
            её обработку
          </p>
          <p>
            В результате, при нажатие одного из 2х{" "}
            <span className="zel">button</span> данные отражаются в{" "}
            <span className="zhe">состояние</span>
          </p>
          <p>
            При нажатие <span className="fiol">button</span> данные отражаются в{" "}
            <span className="sin">состояние</span> и дублируются в{" "}
            <span className="fiol">button</span>
          </p>
        </div>
        <div className="vid-button__content--">
          {/* vid__button */}
          <div className="vid-button__oneexp---">
            <div className="vid-button__oneexp_description---">
              {/* Вывод состояние */}
              State(name): {this.state.name}
              {/* <span></span>
              State(names): {this.state.wnames} */}
            </div>
            {/* выводим компонент. здесь props updateData где использ эта же fn(). В дочерн компон ч/з props передаем fn()updateData. далее клик в дочке */}
            {/* <div className="vid-button__content-12"> */}
            <VidButton1 updateData={this.updateData} />
            {/* </div> */}
          </div>
          {/* toggle */}
          <div className="vid-button__twoexp---">
            <div className="vid-button__twoexp_description---">
              State(isToggleOn) - {"   "}
              {this.state.isToggleOn ? "ON" : "OFF"}
              {/* {this.state.isToggleOn ? <div>ON</div> : <div>OFF</div>} // альтернатива */}
            </div>
            {/* <div className="vid-button__content-22"> */}
            <VidButton2
              handleChange={this.handleChange}
              // Компонент передаёт своё состояние в качестве реквизита своим дочерним компонентам
              isToggleOn={this.state.isToggleOn}
            />
            {/* </div> */}
          </div>
        </div>
        <div className="vid-button__frame--">VidButton</div>
      </div>
    );
  }
}

class Vid extends React.Component {
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
  toggleArrowAccord = () => {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
  };
  render() {
    return (
      <div className="Vid accordion">
        <div
          className="Vid__descript"
          ref={this.RefActivCl}
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
        >
          <h3>Интерактивный INPUT и BUTTON</h3>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
          <p style={{ display: "none" }} ref={this.RefOpenDop}>
            Общее описание
          </p>
        </div>
        <div className="Vid__content" ref={this.RefOpenCont}>
          <VidInput />
          <VidButton />
        </div>
        <div className="Vid__frame">Vid.js</div>
      </div>
    );
  }
}

export default Vid;
