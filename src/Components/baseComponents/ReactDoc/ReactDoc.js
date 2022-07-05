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
// StateAndLifeCycle
import StateAndLifeCycleClComp from "./ComponentsReactDoc/clCompReactDoc/StateAndLifeCycleClComp/StateAndLifeCycleClCpmp.js";
// ListsAndKeys
import ListsAndKeysClComp from "./ComponentsReactDoc/clCompReactDoc/ListAndKeysClComp/ListsAndKeysClComp.js";
// Forms
import FormsClComp from "./ComponentsReactDoc/clCompReactDoc/FormsClComp/FormsСlComp.js";
// SteteUp
import StateUpClComp from "./ComponentsReactDoc/clCompReactDoc/StateUpClComp/StateUpClComp.js";

// подкл. UI блоков
import ArrowAccordion from "../../../js/uiBlock/ArrowAccordion.js";

// пробы спойлера/аккардиона
import ProbSpoiler from "./ComponentsReactDoc/ProbSpoiler.js";

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
  SelectLet,
} from "../../../js/examples/ExpPreCode.js";

// !!! https://ru.reactjs.org/docs/components-and-props.
// Компоненты и пропсы `Components and Props`=============================================================================

/* Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.
  Их можно складывать вместе и использовать несколько раз.
  Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране. */

// !!! https://ru.reactjs.org/docs/state-and-lifecycle.html
// Состояние и жизненный цикл `State and Lifecycle`=============================================================================
// понятия «состояние» (state) и «жизненный цикл» (lifecycle) React-компонентов

// const recipe = localStorage.getItem("openArrowAccord");

class StateAndLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // this.state = JSON.parse(window.localStorage.getItem("openArrowAccord")) || {
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
  }
  toggleArrowAccord() {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
    // localStorage.setItem("openArrowAccord",JSON.stringify(this.state.openArrowAccord));
  }

  render() {
    return (
      console.log("openAA StateAndLifeCycle: " + this.state.openArrowAccord),
      (
        <div className="StateAndLifeCycle-- accordion">
          <div
            ref={this.RefActivCl}
            onClick={() => {
              this.handleClickRef();
              this.toggleArrowAccord(this.openArrowAccord);
            }}
            className="StateAndLifeCycle__descriptin--"
          >
            <h3>Состояние (state) и жизненный цикл (lifecycle)</h3>
            <div style={{ display: "none" }} ref={this.RefOpenDop}>
              <div
                // style={{ display: "none" }}
                // ref={this.RefOpenDop}
                className="StateAndLifeCycle--- temporary"
              >
                <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ/СДЕЛАТЬ{" "}
                <code style={{ color: "red" }}>!!!</code> ПРОДУМАТЬ НА COMP{" "}
                <code>ArrowAccordion</code> ЛОГИКУ ЧТОБ МЕНЯЛИСЬ И СТРЕЛКИ
                (ПЛАВНО) И ПУЛЬСАР (ВНИЗ/ВЕРХ).{" "}
                <div>
                  <div>
                    СЕЙЧАС, ПРИ ПЕРЕДАЧЕ В COMP <code>ArrowAccordion</code>:
                  </div>
                  <code>state</code> -{"  "}
                  <code>
                    openArrowAccord=&#123;this.state.openArrowAccord&#1256;
                  </code>
                  , COMP ЕЁ ВИДИТ И ВЫВОДИТ В ПУЛЬСАР ПОПЕРЕМЕННО 1ЫЙ/2ОЙ ВАРИК
                  УСЛОВИЯ (ВНИЗ/ВВЕРХ - ᐁ/ᐃ). <code>!!!</code> НО ПЕРЕХОД
                  СТРЕЛОК БЕЗ АНИМАЦИИ. В <code>StateAndLifeCycle</code>
                </div>
                <div>
                  <code>fn</code> -{" "}
                  <code>
                    toggleArrowAccord=&#123;this.toggleArrowAccord&#1256;
                  </code>
                  , COMP ЕЁ НЕ ВИДИТ И ВЫВОДИТ ОДИН ВАРИК УСЛОВИЯ (ЛИБО ВНИЗ -
                  ᐁ, ЛИБО ВВЕРХ - ᐃ). ЗАВИСИТ ОТ <code>state</code>. АНИМАЦИЯ
                  ПЛАВНО. <code>!!!</code> НО ПУЛЬСАР В ОДНОМ ПОЛОЖЕНИИ. В{" "}
                  <code>ConditionalRendering</code>
                </div>
              </div>
              <p>Общее описание</p>
            </div>
            <ArrowAccordion
              toggleArrowAccord={this.toggleArrowAccord}
              openArrowAccord={this.state.openArrowAccord}
            />
          </div>
          <div
            ref={this.RefOpenCont}
            className="StateAndLifeCycle__content--"
            // style={{ display: "none" }}
          >
            {/* <Clock /> */}
            <StateAndLifeCycleClComp />
          </div>
          <div className="StateAndLifeCycle__frame--">StateAndLifeCycle</div>
        </div>
      )
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
  }
  toggleArrowAccord = () => {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
  };

  render() {
    return (
      console.log("openAA CondRend state: " + this.state.openArrowAccord),
      (
        <div className="ConditionalRendering-- accordion">
          <div
            onClick={() => {
              this.handleClickRef();
              this.toggleArrowAccord(this.openArrowAccord);
            }}
            ref={this.RefActivCl}
            className="ConditionalRendering__descript--"
          >
            <h3>Условный рендеринг</h3>
            <div ref={this.RefOpenDop} style={{ display: "none" }}>
              Бывает нужно объяснить React, как состояние влияет на то, какие
              компоненты требуется скрыть, а какие — отрендерить, и как именно.
              В таких ситуациях используйте операторы (<code>if else</code>,{" "}
              <code>&&</code>) JavaScript и/или тернарные операторы (
              <code>if...else</code>, <code>condition ? true : false</code>).
            </div>{" "}
            <ArrowAccordion
              // toggleArrowAccord={this.toggleArrowAccord}
              openArrowAccord={this.state.openArrowAccord}
            />
          </div>
          <div
            className="ConditionalRendering__content--"
            ref={this.RefOpenCont}
            // style={{ display: "none" }}
          >
            <ConditionalRenderingClComp />
          </div>
          <div
            className="ConditionalRendering__descript--"
            // ref={this.RefOpenDop}
            style={{ display: "none" }}
          >
            Подробнее по ссылке{" "}
            <code>https://reactjs.org/docs/ConditionalRendering.html</code>
          </div>
          <div className="ConditionalRendering__frame--">
            ConditionalRendering
          </div>
        </div>
      )
    );
  }
}

// !!! https://reactjs.org/docs/lists-and-keys.html
// Списки и ключи `Lists and keys` =======================================================================================
class ListsAndKeys extends React.Component {
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
  toggleArrowAccord() {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
  }
  render() {
    return (
      <div
        // onClick={() => this.handleClickRef()}
        // ref={this.RefActivCl}
        className="ListsAndKeys-- accordion"
      >
        <div
          ref={this.RefActivCl}
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
          className="ListsAndKeys__descript--"
        >
          <h3>Списки и Ключи</h3>
          <div
            className="ListsAneys__content--"
            ref={this.RefOpenDop}
            style={{ display: "none" }}
          >
            Общие Описание
          </div>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div
          // data-name="spoiler-cont"
          ref={this.RefOpenCont}
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
  }
  toggleArrowAccord() {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
  }
  render() {
    return (
      <div
        // onClick={() => this.handleClickRef()}
        // ref={this.RefActivCl}
        className="Forms-- accordion"
      >
        <div
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
          ref={this.RefActivCl}
          data-name="spoiler-title"
          className="Forms__descript-- _spollers"
        >
          <h3>Формы</h3>
          <p
            ref={this.RefOpenDop}
            style={{ display: "none" }}
            className="_spoller"
          >
            Элементы формы HTML работают немного иначе, чем другие элементы DOM
            в React, потому что элементы формы естественным образом сохраняют
            некоторое внутреннее состояние. Например, эта форма в простом HTML
            принимает одно имя:
          </p>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div
          ref={this.RefOpenCont}
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
    // const OpenCont = this.RefOpenCont.current;
    // const ActionArrow = this.RefActivCl.current;
    // const OpenDopEl = this.RefOpenDop.current
    // OpenCont.classList.toggle("openCont");
    // ActionArrow.classList.toggle("_active");
    // OpenDopEl.classList.toggle("openDop");
  }
  toggleArrowAccord() {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
  }
  render() {
    return (
      <div
        // onClick={() => this.handleClickRef()}
        // ref={this.RefActivCl}
        className="LiftingStateUp-- accordion"
      >
        <div
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
          ref={this.RefActivCl}
          className="LiftingStateUp__descript--"
        >
          <h3>StateUpClComp</h3>
          <p
            ref={this.RefOpenDop}
            className="spoiler-body"
            style={{ display: "none" }}
          >
            Часто несколько компонентов должны отражать одни и те же
            изменяющиеся данные. Мы рекомендуем поднимать общее состояние до их
            ближайшего общего предка. Давайте посмотрим, как это работает в
            действии
          </p>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div
          ref={this.RefOpenCont}
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
  constructor(props) {
    super(props);
    this.state = {
      openArrowAccord: true,
    };
    // Пульсар в LocalStorage отрабатывает ----------------------------------------------------------------------------------
    // this.state = JSON.parse(localStorage.getItem("openArrowAccord")) || {
    //   openArrowAccord: true,
    // };
    // попытка передачи RefActivCl ----------------------------------------------------------------------------------
    // const LetRefActivCl = (this.RefActivCl = React.createRef());
    // this.state = JSON.parse(localStorage.getItem("LetRefActivCl")) || {
    //   LetRefActivCl,
    // };
    this.RefActivCl = React.createRef();
    // this.RefOpenDop = React.createRef();
    this.RefOpenCont = React.createRef();
  }
  handleClickRef() {
    this.RefActivCl.current.classList.toggle("_active");
    // this.RefOpenDop.current.classList.toggle("openDop");
    this.RefOpenCont.current.classList.toggle("openCont");
    // попытка передачи RefActivCl ----------------------------------------------------------------------------------
    // localStorage.setItem(
    //   "LetRefActivCl",
    //   JSON.stringify(this.state.LetRefActivCl)
    // );
    // ------
    // const ActionArrow = this.RefActivCl.current;
    // ActionArrow.classList.toggle("_active");
    // ------------------------------------
    // this.setState(this.openArrowAccord);
    // this.setState0();
    // localStorage.setItem("openArrowAccord", JSON.stringify(33));
  }
  toggleArrowAccord() {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
    // Пульсар в LocalStorage отрабатывает ----------------------------------------------------------------------------------
    // console.log("this.state.openArrowAccord 1: " + this.state.openArrowAccord);
    // localStorage.setItem(
    //   "openArrowAccord",
    //   JSON.stringify(this.state.openArrowAccord)
    // );
    // console.log("this.state.openArrowAccord 2: " + this.state.openArrowAccord);
  }
  //  ----------------------------------------------------------------------------------
  // setState() {
  //   // setState(openArrowAccord) {
  //   window.localStorage.setItem(
  //     "openArrowAccord",
  //     JSON.stringify(this.openArrowAccord)
  //   );
  //   // super.setState(state);
  // }
  //  ----------------------------------------------------------------------------------
  // componentDidMount() {
  //   const openArrowAccord = JSON.parse(localStorage.getItem("openArrowAccord"));
  //   this.setState({ openArrowAccord });
  // }
  render() {
    // window.localStorage.setItem("openArrowAccord", 4);
    // if (!this.state.openArrowAccord.length) {
    //   return <p>No recipe</p>;
    //   // or you can use a spinner here
    // }
    //  ----------------------------------------------------------------------------------
    // localStorage.setItem("openArrowAccord", JSON.stringify(this.state.openArrowAccord);
    // const openArrowAccord = localStorage.getItem("openArrowAccord")
    // this.setState({...openArrowAccord})
    //  ----------------------------------------------------------------------------------
    // localStorage.setItem(
    //   "openArrowAccord",
    //   this.openArrowAccord
    //   // JSON.stringify(this.openArrowAccord)
    // );
    //  ----------------------------------------------------------------------------------
    return (
      <div className="ReactDocComponents accordion">
        <div
          className="ReactDocComponents__descript"
          ref={this.RefActivCl}
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
        >
          <h3>Общие понятия/концепции/методы из React документации</h3>
          {/* //* временно коммит, чтоб не мешал  */}
          {/* <div
            className="ReactDocComponents__descript--- temporary"
            style={{ display: "none" }}
            ref={this.RefOpenDop}
          >
            <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ/СДЕЛАТЬ{" "}
            <code style={{ color: "red" }}>!!!</code> СПОЙЛЕР/РАСКРЫВАШКУ. ПО
            КЛИК НА H3 (ЗАГОЛОВОК) И С ПЕРЕБОРОМ ВСЕХ ПОХОЖИХ,
            СКРЫВАТЬ/ПОКАЗЫВАТЬ CONTENT БЛОКОВ
          </div>
          <br />
          <div className="ReactDocComponents__descript--- temporary">
            <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
            <code style={{ color: "red" }}>!!!</code> СПОЙЛЕР/РАСКРЫВАШКУ ПО
            КЛИК И С ПЕРЕБОРОМ
            <div>
              Здесь в обертке <code>.accordion</code> у видимого блока с{" "}
              <code>ref=&#123;this.RefActivCl&#125;</code> при{" "}
              <code>onClick</code> вызывается fn()<code>handleClickRef</code>. В
              fn() по <code>ref</code>ам при клик добавляются классы блокам:
              <br />
              ref <code>RefActivCl</code> + class <code>_active</code> - выдимый
              блок (стили для стрелки на ::before/after)
              <br />
              ref <code>RefOpenCont</code> + class <code>openCont</code> -
              основной скрытый блок
              <br />
              ref <code>RefOpenDop</code> + class <code>openDop</code> - доп
              блок описания crhsnsq
              <br />
              <code>this.RefOpenCont = React.createRef();</code>. Но раб ток
              один ref. Узнать как на много раб
            </div>
          </div> */}
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>

        <div className="ReactDocComponents__content" ref={this.RefOpenCont}>
          {/* <Spoiler />
          <SpoilerProb />
          <SpoilerTitle />
          <ReactSpoiler />
          <SpoilerLiftingStateUp />
          <SpoilerMy /> */}
          {/* <ProbSpoiler /> */}
          <StateAndLifeCycle />
          {/* <Greeting /> */}
          <ConditionalRendering />
          <ListsAndKeys />
          <Forms />
          <LiftingStateUp />
        </div>
        <div className="ReactDocComponents__frame">
          {/* <div>ReactDoc.js</div> */}
          ReactDoc.js
        </div>
      </div>
    );
  }
}

export default ReactDocComponents;
