/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
// теперь все Общие SCSS файлы собранны в один по пути в "./baseComponents/App.scss". В компонент подкл стили относящиеся только к нему
import "./ReactDoc.scss";

// доп хуки
import ReactSpoiler from "react-spoiler";
// !!! не раб - npm ERR! Не удалось разрешить зависимость: Peer React@"^16.8.6" от use spoiler@1.0.0
// import { useSpoiler } from "use-spoiler";

// подкл. Блоков из ComponentsReactDoc для Архитектуры
// ConditionalRendering
import ConditionalRenderingClComp from "./ComponentsReactDoc/clCompReactDoc/ConditionalRenderingClComp/ConditionalRenderingClComp.js";
// StateLifeCycle
import StateLifeCycleClComp from "./ComponentsReactDoc/clCompReactDoc/StateLifeCycleClComp/StateLifeCycleClCpmp.js";
// ListsAndKeys
import ListsAndKeysClComp from "./ComponentsReactDoc/clCompReactDoc/ListAndKeysClComp/ListsAndKeysClComp.js";
// Forms
import FormsClComp from "./ComponentsReactDoc/clCompReactDoc/FormsClComp/FormsСlComp.js";
// SteteUp
import StateUpClComp from "./ComponentsReactDoc/clCompReactDoc/StateUpClComp/StateUpClComp.js";

import ProbSpoiler from "./ProbSpoiler.js";

// подкл. переменных ExpPreCode (компоненты/переменные для общих стилей <pre><code>)
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
} from "../../../js/examples/ExpPreCode.js";

// !!! https://ru.reactjs.org/docs/components-and-props.
// Компоненты и пропсы `Components and Props`=============================================================================

/* Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.
  Их можно складывать вместе и использовать несколько раз.
  Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране. */

// !!! https://ru.reactjs.org/docs/state-and-lifecycle.html
// Состояние и жизненный цикл `State and Lifecycle`=============================================================================
// понятия «состояние» (state) и «жизненный цикл» (lifecycle) React-компонентов
class StateLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: "",
    };
    this.RefOpenClCont = React.createRef();
    this.RefActinCl = React.createRef();
    this.RefOpenClDop = React.createRef();
  }
  handleClickRef() {
    const OpenCont = this.RefOpenClCont.current;
    const ActionArrow = this.RefActinCl.current;
    const OpenDopEl = this.RefOpenClDop.current;
    // const OpenCont = this.RefOpenClCont.all;
    OpenCont.classList.toggle("isOpenRef");
    ActionArrow.classList.toggle("_active");
    OpenDopEl.classList.toggle("isOpenRefStyle");
  }
  // onClick = () => {
  //   // this.setState({ opened: !opened })
  //   this.setState((prevState) => ({
  //     opened: !prevState.opened,
  //   }));
  // };

  render() {
    return (
      <div className="state-lifecycle-- accordion">
        <div className="state-lifecycle__descriptin--">
          <h3 ref={this.RefActinCl} onClick={() => this.handleClickRef()}>
            Состояние (state) и жизненный цикл (lifecycle)
          </h3>
          <p style={{ display: "none" }} ref={this.RefOpenClDop}>
            121212
          </p>
        </div>
        <div
          ref={this.RefOpenClCont}
          className="state-lifecycle__content--"
          // style={{ display: "none" }}
        >
          {/* <Clock /> */}
          <StateLifeCycleClComp />
        </div>
        <div className="state-lifecycle__frame--">StateLifeCycle</div>
      </div>
    );
  }
}

// !!! https://ru.reactjs.org/docs/handling-events.html
// Обработка событий `Handling Events`=============================================================================
{
  // События в React именуются в стиле camelCase вместо нижнего регистра.
  // С JSX вы передаёте функцию как обработчик события вместо строки.
  // в HTML
  {
    /* <button onclick="activateLasers()">
  Активировать лазеры
</button> */
  }
  // В React
  {
    /* <button onClick={activateLasers}>
  Активировать лазеры
</button> */
  }
  // в React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault.
  // В HTML для отмены отправки формы (действие по умолчанию) пишем так:
  {
    /* <form onsubmit="console.log('Отправлена форма.'); return false">
  <button type="submit">Отправить</button>
</form> */
  }
  // В React
  {
    /*function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлена форма.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Отправить</button>
    </form>
  );
} */
  }
  // В коде "e" — это синтетическое событие. React определяет синтетические события

  // При использовании React обычно не нужно вызывать addEventListener, чтобы добавить обработчики в DOM-элемент после его создания. Вместо этого добавьте обработчик сразу после того, как элемент отрендерился.
  // В компоненте, определённом с помощью ES6-класса, в качестве обработчика события обычно выступает один из методов класса. Например, этот компонент Toggle рендерит кнопку, которая позволяет пользователю переключать состояния между «Включено» и «Выключено»:
  // !!! посмотреть здесь - https://codepen.io/gaearon/pen/xEmzGg?editors=0010
  // При обращении к this в JSX-колбэках необходимо учитывать, что методы класса в JavaScript по умолчанию не привязаны к контексту. Если вы забудете привязать метод this.handleClick и передать его в onClick, значение this будет undefined в момент вызова функции.
  // Дело не в работе React, это часть того, как работают функции в JavaScript. Обычно, если ссылаться на метод без () после него, например, onClick={this.handleClick}, этот метод нужно привязать.
  // Если вам не по душе bind, существует два других способа. Если вы пользуетесь экспериментальным синтаксисом общедоступных полей классов

  // Передача аргументов в обработчики событий
  // Внутри цикла часто нужно передать дополнительный аргумент в обработчик события. Например, если id — это идентификатор строки, можно использовать следующие варианты:
  {
    /* <button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button>
<button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button> */
  }
  // Две строки выше — эквивалентны, и используют стрелочные функции и Function.prototype.bind соответственно.
  // В обоих случаях аргумент "e", представляющий событие React, будет передан как второй аргумент после идентификатора. Используя стрелочную функцию, необходимо передавать аргумент явно, но с "bind" любые последующие аргументы передаются автоматически.
}

// !!! https://ru.reactjs.org/docs/ConditionalRendering.html
// Условный рендеринг `Conditional Rendering`=============================================================================
// Бывает нужно объяснить React, как состояние влияет на то, какие компоненты требуется скрыть, а какие — отрендерить, и как именно. В таких ситуациях используйте условный оператор JavaScript или выражения подобные if.

// подкл всех Компонентов Условного рендеринга
class ConditionalRendering extends React.Component {
  constructor(props) {
    super(props);
    this.RefOpenClCont = React.createRef();
    this.RefActinCl = React.createRef();
    this.RefOpenClDop = React.createRef();
  }
  handleClickRef() {
    const OpenCont = this.RefOpenClCont.current;
    const ActionArrow = this.RefActinCl.current;
    const OpenDopEl = this.RefOpenClDop.current;
    // const OpenCont = this.RefOpenClCont.all;
    OpenCont.classList.toggle("isOpenRef");
    ActionArrow.classList.toggle("_active");
    OpenDopEl.classList.toggle("isOpenRefStyle");
  }

  render() {
    return (
      <div
        onClick={() => this.handleClickRef()}
        ref={this.RefActinCl}
        className="ConditionalRendering-- accordion"
      >
        <div className="ConditionalRendering__descript--">
          <h3>Условный рендеринг</h3>
          <div ref={this.RefOpenClDop} style={{ display: "none" }}>
            Бывает нужно объяснить React, как состояние влияет на то, какие
            компоненты требуется скрыть, а какие — отрендерить, и как именно. В
            таких ситуациях используйте операторы (<code>if else</code>,{" "}
            <code>&&</code>) JavaScript и/или тернарные операторы (
            <code>if...else</code>, <code>condition ? true : false</code>).
          </div>
        </div>
        <div
          className="ConditionalRendering__content--"
          ref={this.RefOpenClCont}
          // style={{ display: "none" }}
        >
          <ConditionalRenderingClComp />
        </div>
        <div
          className="ConditionalRendering__descript--"
          // ref={this.RefOpenClDop}
          style={{ display: "none" }}
        >
          Подробнее по ссылке{" "}
          <code>https://reactjs.org/docs/ConditionalRendering.html</code>
        </div>
        <div className="ConditionalRendering__frame--">
          ConditionalRendering
        </div>
      </div>
    );
  }
}

// !!! https://reactjs.org/docs/lists-and-keys.html
// Списки и ключи `Lists and keys` =======================================================================================
class ListsAndKeys extends React.Component {
  //  constructor(props) {
  // super(props);
  //this.state = {  }
  //  }
  constructor(props) {
    super(props);
    this.RefOpenClCont = React.createRef();
    this.RefActinCl = React.createRef();
    this.RefOpenClDop = React.createRef();
  }
  handleClickRef() {
    const OpenCont = this.RefOpenClCont.current;
    const ActionArrow = this.RefActinCl.current;
    const OpenDopEl = this.RefOpenClDop.current;
    // const OpenCont = this.RefOpenClCont.all;
    OpenCont.classList.toggle("isOpenRef");
    ActionArrow.classList.toggle("_active");
    OpenDopEl.classList.toggle("isOpenRefStyle");
  }
  handleClick33() {
    const spolerCont = document.querySelectorAll("[data-name='spoiler-cont']");
    console.log("spolerCont : " + spolerCont);
    // const OpenCont = this.RefOpenClCont.current;
    spolerCont.classList.toggle("isOpenRef");
  }
  render() {
    return (
      <div
        onClick={() => this.handleClickRef()}
        ref={this.RefActinCl}
        className="ListsAndKeys-- accordion"
      >
        <div className="ListsAndKeys__descript--">
          <h3>Списки и Ключи</h3>
          <div
            className="ListsAneys__coent--"
            ref={this.RefOpenClDop}
            style={{ display: "none" }}
          >
            Общие Описание
            <br />
            <div className="IfCondOperClComp__descript--- temporary">
              <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
              <code style={{ color: "red" }}>!!!</code> СПОЙЛЕР/РАСКРЫВАШКУ ПО
              КЛИК И С ПЕРЕБОРОМ
            </div>
            <div className="IfCondOperClComp__descript--- temporary">
              <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
              <code style={{ color: "red" }}>!!!</code> Здесь на{" "}
              <code>ref</code> и{" "}
              <code>this.RefOpenClCont = React.createRef();</code>. Но раб ток
              один ref. Узнать как на много раб
            </div>
          </div>
        </div>
        <div
          data-name="spoiler-cont"
          ref={this.RefOpenClCont}
          className="ListsAndKeys__content--"
          // style={{ display: "none" }}
        >
          {/* <Lists />
          <Keys /> */}
          <ListsAndKeysClComp />
        </div>
        <div className="ListsAndKeys__frame--">ListsAndKeys</div>
      </div>
    );
  }
}

// !!! https://reactjs.org/docs/forms.html
// Формы =======================================================================================
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.RefOpenClCont = React.createRef();
    this.RefActinCl = React.createRef();
    this.RefOpenClDop = React.createRef();
  }
  handleClickRef() {
    const OpenCont = this.RefOpenClCont.current;
    const ActionArrow = this.RefActinCl.current;
    const OpenDopEl = this.RefOpenClDop.current;
    // const OpenCont = this.RefOpenClCont.all;
    OpenCont.classList.toggle("isOpenRef");
    ActionArrow.classList.toggle("_active");
    OpenDopEl.classList.toggle("isOpenRefStyle");
  }
  render() {
    return (
      <div
        onClick={() => this.handleClickRef()}
        ref={this.RefActinCl}
        className="Forms-- accordion"
      >
        <div data-name="spoiler-title" className="Forms__descript-- _spollers">
          <h3>Формы</h3>
          <p
            ref={this.RefOpenClDop}
            style={{ display: "none" }}
            className="_spoller"
          >
            Элементы формы HTML работают немного иначе, чем другие элементы DOM
            в React, потому что элементы формы естественным образом сохраняют
            некоторое внутреннее состояние. Например, эта форма в простом HTML
            принимает одно имя:
          </p>
        </div>
        <div
          ref={this.RefOpenClCont}
          className="Forms__content--"
          // style={{ display: "none" }}
        >
          <br />
          <FormsClComp />
        </div>
        <div className="Forms__frame--">Forms</div>
      </div>
    );
  }
}

class LiftingStateUp extends React.Component {
  constructor(props) {
    super(props);
    this.RefOpenClCont = React.createRef();
    this.RefActinCl = React.createRef();
    this.RefOpenClDop = React.createRef();
  }
  handleClickRef() {
    const OpenCont = this.RefOpenClCont.current;
    const ActionArrow = this.RefActinCl.current;
    const OpenDopEl = this.RefOpenClDop.current;
    // const OpenCont = this.RefOpenClCont.all;
    OpenCont.classList.toggle("isOpenRef");
    ActionArrow.classList.toggle("_active");
    OpenDopEl.classList.toggle("isOpenRefStyle");
  }
  render() {
    return (
      <div
        onClick={() => this.handleClickRef()}
        ref={this.RefActinCl}
        className="LiftingStateUp-- accordion"
      >
        <div className="LiftingStateUp__descript--">
          <h3>StateUpClComp</h3>
          <p
            ref={this.RefOpenClDop}
            className="spoiler-body"
            style={{ display: "none" }}
          >
            Часто несколько компонентов должны отражать одни и те же
            изменяющиеся данные. Мы рекомендуем поднимать общее состояние до их
            ближайшего общего предка. Давайте посмотрим, как это работает в
            действии
          </p>
        </div>
        <div
          ref={this.RefOpenClCont}
          className="LiftingStateUp__content--"
          // style={{ display: "none" }}
        >
          <StateUpClComp />
        </div>
        <div className="LiftingStateUp__frame--">StateUp</div>
      </div>
    );
  }
}

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

// !!!
// подкл.всех Компонентов React Doc =!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=
class ReactDocComponents extends React.Component {
  render() {
    return (
      <div className="ReactDocComponents">
        <div className="ReactDocComponents__descript">
          <h3>Общие понятия/концепции/методы из React документации</h3>

          <div className="IfCondOperClComp__descript--- temporary">
            <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ/СДЕЛАТЬ{" "}
            <code style={{ color: "red" }}>!!!</code> СПОЙЛЕР/РАСКРЫВАШКУ. ПО
            КЛИК НА H3 (ЗАГОЛОВОК) И С ПЕРЕБОРОМ ВСЕХ ПОХОЖИХ,
            СКРЫВАТЬ/ПОКАЗЫВАТЬ CONTENT БЛОКОВ
          </div>
        </div>

        <div className="ReactDocComponents__content">
          {/* <Spoiler />
          <SpoilerProb />
          <SpoilerTitle />
          <ReactSpoiler />
          <SpoilerLiftingStateUp />
          <SpoilerMy /> */}
          <ProbSpoiler />
          <StateLifeCycle />
          {/* <Greeting /> */}
          <ConditionalRendering />
          <ListsAndKeys />
          <Forms />
          <LiftingStateUp />
        </div>
        <div className="ReactDocComponents__frame">ReactDoc.js</div>
      </div>
    );
  }
}

export default ReactDocComponents;
