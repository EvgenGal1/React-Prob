import React from "react";
import { useDebugValue, useState, useEffect } from "react";
import "./CommonTrifles.scss";

// хук useKeyPress + отладка (нажатие на клвш., отслж., вывод)=======================================================================================
// при нажатии опред. одиночных клвш. - вывод + шрифт к обозначению. е\и надо чтобы вывод отражался/мигал, то комит/разкомит useKeyPress.useEffect.keyup отрисовка мигает.
// !!! по YT видео RED Group

// подкл. UI блоков
import ArrowAccordion from "../../../js/includes/ArrowAccordion.js";

// созд хук. в аргум. принимаем клвш.
const useKeyPress = (keyTarget) => {
  // состояние для отслеж нажат клвш
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  // debug `отладка` кастомных хуков. см. в devTools-Components-hooks - отражено состояние
  // е/и
  useDebugValue(isKeyPressed ? "Нажато" : "Отжато");

  // 1ая fn() клвш нажата.
  // const downHandler = ({ key }) => {
  function downHandler({ key }) {
    // проверка. е/и ключ = нашему ключю, то созд состояние true (нажата)
    // if (key === keyTarget) setIsKeyPressed(true);
    if (key === keyTarget) {
      setIsKeyPressed(true);
      // console.log("key Down: " + key);
      // console.log("keyTarget Down: " + keyTarget);
    }
  }
  // 2ая fn() клвш отжата.
  const upHandel = ({ key }) => {
    // проверка обратная fn(). е/и ключ = нашему ключю то созд состояние false (отжата)
    if (key === keyTarget) {
      setIsKeyPressed(false);
    }
    // console.log("key Up: " + key);
    // console.log("keyTarget Up: " + keyTarget);
  };

  // в useEffect подкл слушатели
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // console.log("keyTarget UsEf: " + keyTarget);
    // отрисовка мигает т.к. есть слушатель отжатия. е/и убрать то будет нажата
    // window.addEventListener("keyup", upHandel);

    // в конце возвращ return для откл от слушателей
    return () => {
      // console.log("keyTarget UsEf ret: " + keyTarget);
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandel);
    };
    // Пустой массив гарантирует, что эффект запускается только при монтировании и размонтировании.
  }, []);
  // в конце возвращ состояние
  return isKeyPressed;
};

// отрисовывает клвш. с опред. шрифтом. приним. клвш. и сост.клвш.
const Label = ({ value, isBold }) => (
  <div
    style={{
      display: "inline-block",
      margin: "0 5px",
      // fontSize: "42px",
      // е/и есть сост. то шрифт bold
      fontWeight: isBold ? "bold" : "normal",
    }}
  >
    {/* значение клавиши */}
    <p>{value}</p>
  </div>
);

// fn()useMultiKeyPress (нажатие неск клавиш)----------------------------------------------------------------------------------
// при зажатии неск-их опред. клвш. одновременно И нажатии одиночных опред. клвш. - вывод + шрифт к обозначению. Е\и надо чтобы вывод отражался/мигал, то комит/разкомит useMultiKeyPress.useEffect.keyup отрисовка мигает.
// !!! написано на основе - https://codesandbox.io/s/y3qzyr3lrz?file=/src/use-multi-key-press.js
// общ. разработка - https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5
// https://github.com/Numel2020/useAllKeysPress объед неск клвш в один хук.

// `нажаты клавиши`.
function areKeysPressed(keys = [], keysPressed = []) {
  const required = new Set(keys);
  for (var elem of keysPressed) {
    required.delete(elem);
  }
  return required.size === 0;
}

// `Нажатие нескольких клавиш`
const MultiKeysPressed = ({ keys, keysPressed, emoji }) => {
  const arePressed = areKeysPressed(keys, keysPressed);

  if (arePressed) {
    return emoji;
  }
  return null;
};

// `использовать многоклавишное нажатие`.
// ??? не знаю правильно ли раб. - при зажатых неск опред клвщ. е/и нажать одинарные опред. клвш. то вйдет контент
function useMultiKeyPress() {
  // состояние для отслеж нажат клвш
  const [isKeyPressed, setIsKeyPressed] = useState(new Set([]));

  function downHandler({ key }) {
    // console.log("key Mult Down 0: " + key);
    // `установить нажатую клавишу``клавиши нажаты``добавить``ключ`
    setIsKeyPressed(isKeyPressed.add(key));
    // console.log("key Mult Down 1: " + key);
  }

  const upHandler = ({ key }) => {
    // console.log("key Mult Up 0: " + key);
    isKeyPressed.delete(key);
    setIsKeyPressed(isKeyPressed);
    // console.log("key Mult Up 1: " + key);
  };

  // console.log("Mult isKeyPressed 0: " + isKeyPressed);
  // console.log("Mult setIsKeyPressed 0: " + setIsKeyPressed);
  useEffect(() => {
    // console.log("Mult isKeyPressed 1: " + isKeyPressed);
    // console.log("Mult setIsKeyPressed 1: " + setIsKeyPressed);
    window.addEventListener("keydown", downHandler);
    // отрисовка мигает т.к. есть слушатель отжатия. е/и убрать то будет нажата. t|b оставить то
    window.addEventListener("keyup", upHandler);
    // возвращ return для откл от слушателей
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Пустой массив гарантирует, что эффект работает только при монтаже и демонтаже

  return isKeyPressed;
}

// отрисовка CountryFlags ----------------------------------------------------------------------------------
function CountryFlags() {
  // первый код из YT RED Group
  const isJapanPressed = useKeyPress("j");
  const isChinaPressed = useKeyPress("c");
  const isSouthKoreaPressed = useKeyPress("k");
  // const isAustraliaPressed = useKeyPress("a");

  // код из useMultiKeyPress
  // одн. клвш.
  const happyPress = useKeyPress("h");
  // const sadPress = useKeyPress("v");
  const robotPress = useKeyPress("r");
  const foxPress = useKeyPress("f");
  // мнг. клвш. может быть ограничение на кол-во нажатых клавиш - https://gaming.stackexchange.com/questions/6669/how-do-i-remove-the-limit-on-pc-keyboard-button-presses
  const keysPressed = useMultiKeyPress();
  const hsrfPressed = areKeysPressed(["q", "w", "e"], keysPressed);

  return (
    <div className="countryflags--">
      <div className="countryflags__descript--">
        <h3>хук useKeyPress (+ fn()useMultiKeyPress) + отладка</h3>
      </div>
      <div className="countryflags__content--">
        <div className="countryflags__oneexp---">
          <div className="countryflags__oneexp_description---">
            <div>
              Прослушивает НАжатии опред. одиночных клвш. - вывод + шрифт к
              обозначению.
            </div>
            <div>
              Е\и надо чтобы вывод отражался/мигал, то комит/разкомит
              useKeyPress.useEffect.keyup отрисовка мигает.
            </div>
            <p>Нажмите клавиши 'J', 'C', 'K'</p>
          </div>
          <div className="countryflags__oneexp_content---">
            {/* простановка условия. при нажатой клвш выйдет И div */}
            {isJapanPressed && <div>🇯🇵</div>}
            {isChinaPressed && <div>🇨🇳</div>}
            {isSouthKoreaPressed && <div>🇰🇷</div>}
            {/* {isAustraliaPressed && <div>🇦🇺</div>} */}
          </div>
        </div>
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
          <div className="countryflags__twoexp_content---">
            {happyPress && "😊"}
            {/* {sadPress && "😢"} */}
            {robotPress && "🤖"}
            {foxPress && "🦊"}
            <br />
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
