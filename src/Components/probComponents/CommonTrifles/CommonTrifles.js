import React, { useState, useEffect } from "react";
import { useDebugValue } from "react";
import "./CommonTrifles.scss";

// hooks для KeyDown/KeyUp
import { useKeyPress } from "../hooks/useKeyPress";
import {
  useMultiKeyPress,
  areKeysPressed,
  MultiKeysPressed,
  Label,
} from "../hooks/useMultiKeyPress.jsx";

// подкл. UI блоков
import ArrowAccordion from "../../../js/includes/ArrowAccordion.js";

// хук useKeyPress + отладка (нажатие на клвш., отслж., вывод)=======================================================================================
// при нажатии опред. одиночных клвш. - вывод + шрифт к обозначению. е\и надо чтобы вывод отражался/мигал, то комит/разкомит useKeyPress.useEffect.keyup отрисовка мигает.
// !!! по YT видео RED Group или https://usehooks.com/useKeyPress/
// * перенесён в hooks/useKeyPress

// fn()useMultiKeyPress (нажатие неск клавиш)----------------------------------------------------------------------------------
// при зажатии неск-их опред. клвш. одновременно И нажатии одиночных опред. клвш. - вывод + шрифт к обозначению. Е\и надо чтобы вывод отражался/мигал, то комит/разкомит useMultiKeyPress.useEffect.keyup отрисовка мигает.
// !!! написано на основе - https://codesandbox.io/s/y3qzyr3lrz?file=/src/use-multi-key-press.js
// общ. разработка - https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5
// * перенесён в hooks useMultiKeyPress

// отрисовка CountryFlags ----------------------------------------------------------------------------------
function CountryFlags() {
  // код из useMultiKeyPress
  // одн. клвш.
  const happyPress = useKeyPress("h");
  // const sadPress = useKeyPress("v");
  const robotPress = useKeyPress("r");
  const foxPress = useKeyPress("f");
  // мнг. клвш. может быть ограничение на кол-во нажатых клавиш - https://gaming.stackexchange.com/questions/6669/how-do-i-remove-the-limit-on-pc-keyboard-button-presses
  const keysPressed = useMultiKeyPress();
  // const hsrfPressed = AreKeysPressed(["q", "w", "e"], keysPressed);
  const hsrfPressed = areKeysPressed(["q", "w", "e"], keysPressed);

  return (
    <div className="countryflags--">
      <div className="countryflags__descript--">
        <h3>хук useKeyPress (+ fn()useMultiKeyPress) + отладка</h3>
      </div>
      <div className="countryflags__content--">
        <div className="countryflags__twoexp---">
          <div className="countryflags__twoexp_description---">
            <div>
              Прослушивает ЗАжатии неск-их опред. клвш. одновременно И НАжатии
              одиночных опред. клвш. - вывод + шрифт к обозначению
            </div>
            <div>
              Е\и надо чтобы вывод отражался/мигал, то комит/разкомит
              useMultiKeyPress.useEffect.keyup отрисовка мигает.
            </div>
            <Label value="Нажмите одиночные клавиши: " />
            <Label value="h" isBold={happyPress} />
            <Label value="r" isBold={robotPress} />
            <Label value="f" isBold={foxPress} />
            <br></br>
            <Label
              value="Нажмите клавиши вместе, потом одиночные: q + w + e"
              isBold={hsrfPressed}
            />
          </div>
          Вместе q w e, отдельно h r f
          <div className="countryflags__twoexp_content---">
            {happyPress && "😊"}
            {/* {sadPress && "😢"} */}
            {robotPress && "🤖"}
            {foxPress && "🦊"}
            <br />
            {/* // ~~~ не понятно - выводит WIN е/и зажаты все keys + в keysPressed(ч/з useMultiKeyPress) получ. (хз что?true?) + передали emoji */}
            <MultiKeysPressed
              keys={["q", "w", "e"]}
              keysPressed={keysPressed}
              emoji="WIN"
            />
          </div>
        </div>
      </div>
      <div className="countryflags__frame--">CountryFlags</div>
    </div>
  );
}

function KeyPressOne() {
  const isJapanPressed = useKeyPress("j");
  const isChinaPressed = useKeyPress("c");
  const isSouthKoreaPressed = useKeyPress("k");
  // const isAustraliaPressed = useKeyPress("a");
  return <div>KeyPressOne</div>;
}

class KeyPressOneAS extends React.Component {
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
    // первый код из YT RED Group
    return (
      //  ----------------------------------------------------------------------------------
      <div className="KeyPressOne---">
        <div
          className="KeyPressOne__descript--"
          ref={this.RefActivCl}
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
        >
          <div
            className="temporary"
            style={{ display: "none" }}
            ref={this.RefOpenDop}
            //  style={{ fontWeight: "bold", color: "red" }}
          >
            Так же разобрать:
            <p>https://realadmin.ru/coding/keyboard-js.html - просто</p>
            <p>https://habr.com/ru/post/244041/ - просто</p>
            <p>
              https://codesandbox.io/s/multiple-keys-in-order-vpovi?file=/src/hooks/useAllKeysPress.js
              - Несколько ключей по порядку(на основе прописанного)
            </p>
            <p>
              https://codesandbox.io/s/multiple-keys-jhfdn - Несколько ключей
            </p>
            <p>
              https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5
              - следить в комментах
            </p>
          </div>
          <div>
            Прослушивает НАжатии опред. одиночных клвш. - вывод + шрифт к
            обозначению.
          </div>
          <div>
            Е\и надо чтобы вывод отражался/мигал, то комит/разкомит
            useKeyPress.useEffect.keyup отрисовка мигает.
          </div>
          <p>Нажмите клавиши 'J', 'C', 'K'</p>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div ref={this.RefOpenCont} className="KeyPressOne__content--">
          {/* простановка условия. при нажатой клвш выйдет И div */}
          {/* {isJapanPressed && <div>🇯🇵</div>}
          {isChinaPressed && <div>🇨🇳</div>}
          {isSouthKoreaPressed && <div>🇰🇷</div>} */}
          {/* {isAustraliaPressed && <div>🇦🇺</div>} */}
          {/* <MultiKeysPressed
              keys={["q", "w", "e"]}
              keysPressed={keysPressed}
              emoji="WIN"
            /> */}
        </div>
      </div>
      //  ----------------------------------------------------------------------------------
    );
  }
}

// покл. в общий Компонент и импорт  =======================================================================================
class CommonTrifles extends React.Component {
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
      <div className="CommonTrifles accordion">
        <div
          className="CommonTrifles__descript"
          ref={this.RefActivCl}
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
        >
          <h3>хук useKeyPress (+ fn()useMultiKeyPress) + отладка</h3>
          <div
            className="temporary"
            style={{ display: "none" }}
            ref={this.RefOpenDop}
          >
            <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
            <code style={{ color: "red" }}>!!!</code>
            Написать код по считыванию нажатий на клавиши. Разные комбинации для
            разных раскладок, экранов, свет.тем, доступов, активности и пр.
            <p>Примеры комбин. наж. на клвш.:</p>
            <p>
              при EN расклд. - ",jkmit", + доб. цв.схема разных раскладок,
              экранов, свет.тем, доступов, активности и пр.{" "}
            </p>
            <p>доступ в альбом при наборе имени альбома во вкладке альбомов</p>
            <p>
              запись в localStorage при наборе "localStorage+" и своего имени в
              CamelCase(верблюжьем стиле)
            </p>
          </div>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div ref={this.RefOpenCont} className="CommonTrifles__content">
          <CountryFlags />
        </div>
        <div className="CommonTrifles__frame">CommonTrifles.js</div>
      </div>
    );
  }
}

export default CommonTrifles;
