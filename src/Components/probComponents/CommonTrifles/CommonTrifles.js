import React from "react";
// import { useDebugValue, useState, useEffect } from "react";
import "./CommonTrifles.scss";

// hooks для KeyDown/KeyUp
// одн клвш.
import { useKeyPress } from "../../../hooks/useKeyPress";
// мн. клвш.
import {
  useMultiKeyPress,
  areKeysPressed,
  MultiKeyPress,
  Label,
} from "../../../hooks/useMultiKeyPress.jsx";
// послед. клвш.
import { useAllKeysPress } from "../../../hooks/useAllKeysPress";
import { Key, Plus, /* Emoji, */ Letter } from "./utilities";

// подкл. UI блоков
import ArrowAccordion from "../../../js/includes/ArrowAccordion.js";
// ^ мнг. клвш. может быть ограничение на кол-во нажатых клавиш - https://gaming.stackexchange.com/questions/6669/how-do-i-remove-the-limit-on-pc-keyboard-button-presses

// хук useKeyPress + отладка (нажатие на клвш., отслж., вывод)=======================================================================================
// при нажатии опред. одиночных клвш. - вывод + шрифт к обозначению. е\и надо чтобы вывод отражался/мигал, то комит/разкомит useKeyPress.useEffect.keyup отрисовка мигает.
// !!! по YT видео RED Group или https://usehooks.com/useKeyPress/
// * перенесён в hooks/useKeyPress
function OneKeysPress() {
  const isJapanPressed = useKeyPress("j");
  const isChinaPressed = useKeyPress("c");
  const isSouthKoreaPressed = useKeyPress("k");
  // const isAustraliaPressed = useKeyPress("a");

  const keysPressed = useMultiKeyPress();

  return (
    <div className="OneKeysPress---">
      <div
        className="OneKeysPress__descript--"
        // ref={this.RefActivCl}
        // onClick={() => {
        //   this.handleClickRef();
        //   this.toggleArrowAccord(this.openArrowAccord);
        // }}
      >
        <h1>хук keysPressed для обработки зажатия одной клавиш</h1>
        <div
        // className="temporary"
        // style={{ display: "none" }}
        // ref={this.RefOpenDop}
        //  style={{ fontWeight: "bold", color: "red" }}
        ></div>
        <div>
          Прослушивает НАжатии опред. одиночных клвш. - вывод + шрифт к
          обозначению.
        </div>
        <div>
          Е\и надо чтобы вывод отражался/мигал, то комит/разкомит
          useKeyPress.useEffect.keyup отрисовка мигает.
        </div>
        <p>Нажмите клавиши 'J', 'C', 'K'</p>
        {/* <ArrowAccordion
          // toggleArrowAccord={this.toggleArrowAccord}
          openArrowAccord={this.state.openArrowAccord}
        /> */}
      </div>
      <div
        // ref={this.RefOpenCont}
        className="OneKeysPress__content--"
      >
        {/* простановка условия. при нажатой клвш выйдет И div */}
        {isJapanPressed && <div>🇯🇵</div>}
        {isChinaPressed && <div>🇨🇳</div>}
        {isSouthKoreaPressed && <div>🇰🇷</div>}
        {/* {isAustraliaPressed && <div>🇦🇺</div>} */}
        <MultiKeyPress
          keys={["q", "w", "e"]}
          keysPressed={keysPressed}
          emoji="WIN"
        />
      </div>
    </div>
  );
}

// попытка перейти на fnComp
// class OneKeysPressS extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       openArrowAccord: true,
//     };
//     this.RefActivCl = React.createRef();
//     this.RefOpenDop = React.createRef();
//     this.RefOpenCont = React.createRef();
//   }
//   handleClickRef() {
//     this.RefActivCl.current.classList.toggle("_active");
//     this.RefOpenDop.current.classList.toggle("openDop");
//     this.RefOpenCont.current.classList.toggle("openCont");
//     // this.setState((prevState) => ({
//     //   openArrowAccord: !prevState.openArrowAccord,
//     // }));
//   }
//   toggleArrowAccord = () => {
//     this.setState((prevState) => ({
//       openArrowAccord: !prevState.openArrowAccord,
//     }));
//   };

//   render() {
//     // const isJapanPressed = useKeyPress("j");
//     // const isChinaPressed = useKeyPress("c");
//     // const isSouthKoreaPressed = useKeyPress("k");
//     // const isAustraliaPressed = useKeyPress("a");
//     return (
//       //  ----------------------------------------------------------------------------------
//       <div className="OneKeysPress---">
//         <div
//           className="OneKeysPress__descript--"
//           ref={this.RefActivCl}
//           onClick={() => {
//             this.handleClickRef();
//             this.toggleArrowAccord(this.openArrowAccord);
//           }}
//         >
//           <div
//             className="temporary"
//             style={{ display: "none" }}
//             ref={this.RefOpenDop}
//             //  style={{ fontWeight: "bold", color: "red" }}
//           >
//             Так же разобрать:
//             <p>https://realadmin.ru/coding/keyboard-js.html - просто</p>
//             <p>https://habr.com/ru/post/244041/ - просто</p>
//             <p>
//               https://codesandbox.io/s/multiple-keys-in-order-vpovi?file=/src/hooks/useAllKeysPress.js
//               - Несколько ключей по порядку(на основе прописанного)
//             </p>
//             <p>
//               https://codesandbox.io/s/multiple-keys-jhfdn - Несколько ключей
//             </p>
//             <p>
//               https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5
//               - следить в комментах
//             </p>
//           </div>
//           <div>
//             Прослушивает НАжатии опред. одиночных клвш. - вывод + шрифт к
//             обозначению.
//           </div>
//           <div>
//             Е\и надо чтобы вывод отражался/мигал, то комит/разкомит
//             useKeyPress.useEffect.keyup отрисовка мигает.
//           </div>
//           <p>Нажмите клавиши 'J', 'C', 'K'</p>
//           <ArrowAccordion
//             // toggleArrowAccord={this.toggleArrowAccord}
//             openArrowAccord={this.state.openArrowAccord}
//           />
//         </div>
//         <div ref={this.RefOpenCont} className="OneKeysPress__content--">
//           {/* простановка условия. при нажатой клвш выйдет И div */}
//           {/* {isJapanPressed && <div>🇯🇵</div>}
//           {isChinaPressed && <div>🇨🇳</div>}
//           {isSouthKoreaPressed && <div>🇰🇷</div>}
//           {isAustraliaPressed && <div>🇦🇺</div>}
//           <MultiKeysPressed
//               keys={["q", "w", "e"]}
//               keysPressed={keysPressed}
//               emoji="WIN"
//             /> */}
//         </div>
//       </div>
//       //  ----------------------------------------------------------------------------------
//     );
//   }
// }

// fn()useMultiKeyPress (нажатие неск клавиш)----------------------------------------------------------------------------------
// при зажатии неск-их опред. клвш. одновременно И нажатии одиночных опред. клвш. - вывод + шрифт к обозначению. Е\и надо чтобы вывод отражался/мигал, то комит/разкомит useMultiKeyPress.useEffect.keyup отрисовка мигает.
// !!! написано на основе - https://codesandbox.io/s/y3qzyr3lrz?file=/src/use-multi-key-press.js
// общ. разработка - https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5
// * перенесён в hooks useMultiKeyPress
// отрисовка MultiKeysPress ----------------------------------------------------------------------------------
function MultiKeysPress() {
  const happyPress = useKeyPress("h");
  // const sadPress = useKeyPress("v");
  const robotPress = useKeyPress("r");
  const foxPress = useKeyPress("f");

  const keysPressed = useMultiKeyPress();
  // const hsrfPressed = AreKeysPressed(["q", "w", "e"], keysPressed);
  const hsrfPressed = areKeysPressed(["q", "w", "e"], keysPressed);

  // const combinePress = useAllKeysPress({
  //   // userKeys: ["a", "b", "c"],
  //   // userKeys: ["d", "o", "p", "m", "e", "n", "u"],
  //   userKeys: ["d", "o", "p", "m", "n"],
  //   order: true,
  // });

  return (
    <div className="MultiKeysPress--">
      <div className="MultiKeysPress__descript--">
        <h3>хук и fn() MultiKeyPress для обработки зажатия многих клавиш</h3>
        <div>
          Прослушивает ЗАжатии неск-их опред. клвш. одновременно И НАжатии
          одиночных опред. клвш. - вывод + шрифт к обозначению
        </div>
        <div>
          Е\и надо чтобы вывод отражался/мигал, то комит/разкомит
          useMultiKeyPress.useEffect.keyup отрисовка мигает.
        </div>
      </div>
      <div className="MultiKeysPress__content--">
        <div className="countryflags__twoexp---">
          <div className="countryflags__twoexp_description---">
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
            <MultiKeyPress
              keys={["q", "w", "e"]}
              keysPressed={keysPressed}
              emoji="WIN"
            />
            {/* <useAllKeysPress
              // userKeys: ["a", "b", "c"],
              // userKeys: ["d", "o", "p", "m", "e", "n", "u"],
              userKeys={["d", "o", "p", "m", "n"]}
              order={true}
            />             */}
            {/* <div>{combinePress && <p>Норм</p>}</div> */}
          </div>
        </div>
      </div>
      <div className="countryflags__frame--">CountryFlags</div>
    </div>
  );
  // }
}

// последовательное нажатие нескольких клавиш ----------------------------------------------------------------------------------
// !!! https://codesandbox.io/s/multiple-keys-in-order-vpovi?file=/src/App.js
// class MultiKeysPressedSequen___QWER extends React.Component {
function AllKeysPress() {
  //constructor(props) {
  //super(props);
  //this.state = {  }
  //}

  // перем бук после хука
  // const akeyPress = useAllKeysPress({ userKeys: "a" });
  // const bkeyPress = useAllKeysPress({ userKeys: "b" });
  // const ckeyPress = useAllKeysPress({ userKeys: "c" });
  const dkeyPress = useAllKeysPress({ userKeys: "d" });
  const okeyPress = useAllKeysPress({ userKeys: "o" });
  const pkeyPress = useAllKeysPress({ userKeys: "p" });
  const mkeyPress = useAllKeysPress({ userKeys: "m" });
  // const ekeyPress = useAllKeysPress({ userKeys: "e" });
  const nkeyPress = useAllKeysPress({ userKeys: "n" });
  // const ukeyPress = useAllKeysPress({ userKeys: "u" });

  // массив букв после хука
  const combinePress = useAllKeysPress({
    // userKeys: ["a", "b", "c"],
    // userKeys: ["d", "o", "p", "m", "e", "n", "u"],
    userKeys: ["d", "o", "p", "m", "n"],
    order: true,
  });

  // Входные данные. массив объ.
  const inputs = [
    // { input: akeyPress, key: "a" },
    // { input: bkeyPress, key: "b" },
    // { input: ckeyPress, key: "c" },
    { input: dkeyPress, key: "d" },
    { input: okeyPress, key: "o" },
    { input: pkeyPress, key: "p" },
    { input: mkeyPress, key: "m" },
    // { input: ekeyPress, key: "e" },
    { input: nkeyPress, key: "n" },
    // { input: ukeyPress, key: "u" },
  ];

  // СТАТУС. `любая нажатая клавиша` // ~~~ не понятно - пров. массив объ. и возвращ. true если есть input?
  const anyKeyPressed = inputs.some((item) => item.input === true);
  // some - `немного` опред., возвращает ли fn callback - true, для эл. массива.
  console.log("anyKeyPressed : " + anyKeyPressed); // здесь false

  // render() {
  return (
    <div className="AllKeysPress">
      <div className="AllKeysPress__descript">
        <h1>Последовательное нажатие нескольких клавиш</h1>
      </div>
      <div className="AllKeysPress__content">
        {/* Подсказка. доп. визуал. выделен Буквы и Плюсов */}
        {/* <UseAllKeypad inputs={inputs} type={"multi"} /> */}
        {/* Верный Вывод. доп. визуал. Экран, доб.нажат.буквы, смс */}
        {/* <Screen
          activate={anyKeyPressed}
          input={inputs}
          combine={combinePress}
          type={"jackson"}
          message={"Все, что вам нужно сделать, это повторить за мной !!"}
        ></Screen> */}
        <p>
          проблема с длинным вводом при удержании клавиш. не все клвш. могут
          набратся. макс нашёл 5. по проблеме есть ссылка в коде
        </p>
        <p>попробовать ввод - ljgvty. какие клавш не пересекаются</p>
        <p>
          При добавлен константы вызова хука useAllKeysPress в
          comp.MultiKeysPress, логика MultiKeyPress с клавишими qwe - сломалась.
          Теперь при выводятся при первом нажатии, без доп.кнп.
        </p>
        <p>
          Сливать или модернизировать хуки Key, чтоб был последовательный,
          фиксированный ввод с оставленым результатом. Можно и доп комбинации.
          Назначить комбинации отмены
        </p>
        <p>выведение блоков по условим/операторам</p>
        <p>временно блокировал addEventListener("keyup" в хуке.</p>
        <p>
          ч/з combinePress выводит по правильной последовательности, но сброс
          после любых клавиш
        </p>
        <p>
          ч/з anyKeyPressed (дложно быть true, но после объявления в cg - false.
          true при нажатии) усл.ренд. и/или операт. выводит блок. но по любому
          нажатию клав. из dopmn
        </p>
        <br />

        <span>["d", "o", "p", "m", "n"]</span>
        {combinePress && <p>Норм combinePress</p>}
        {combinePress ? (
          <p>НОРМ 2 combinePress</p>
        ) : (
          <p>НЕ норм combinePress</p>
        )}
        {anyKeyPressed && <p>Норм anyKeyPressed</p>}
        {anyKeyPressed ? (
          <p>НОРМ 2 anyKeyPressed</p>
        ) : (
          <p>НЕ норм anyKeyPressed</p>
        )}
      </div>
    </div>
  );
  // }
}

//  ----------------------------------------------------------------------------------
// `Используйте всю клавиатуру`. // доп. визуал настройка с выводами заполн. Букв и Плюсов. можно без подсказок
function UseAllKeypad({
  inputs, // вход.данн. масс.объ.
  type = "single", // передаётся multi
}) {
  // ~~~ не понятно - singleKeyList не нужен ? Клавиши есть в Fragment
  // Клавиши. `единый список ключей` - перебор, отправка props, возвр comp.svg Клавиши(цвет. по услов.)
  const singleKeyList = inputs.map((item, index) => (
    <Key name={item.key} item={item.input} key={index} />
  ));

  // Псюс в перем. `Мн.функ-ый список` - перебор, выбор след. плюса, возвр. comp.svg Плюс(цвет. по услов.)
  const multiKeyList = inputs.map((item, index) => {
    let plusItem = null;
    // е/и index не равен длине массива -1
    if (index !== inputs.length - 1) {
      plusItem = <Plus item={item.input} />;
    }

    return (
      <React.Fragment key={index}>
        {/* Клавиши. // ~~~ не понятно - singleKeyList не нужен ? */}
        <Key name={item.key} item={item.input} key={index} />
        {/* UseAllKeypad 0 */}
        {plusItem}
        {/* UseAllKeypad 1 */}
      </React.Fragment>
    );
  });

  let selectedList = null;

  // проверка на type. передаётся multi // ~~~ не понятно - singleKeyList не нужен ?
  if (type === "single") {
    selectedList = singleKeyList;
  }

  // проверка на type. передаётся multi
  if (type === "multi") {
    selectedList = multiKeyList;
  }

  return <div className="flex-navigation">{selectedList}</div>;
}

// доп. визуал настройка с выводами доп.букв, анимацией, смс. можно проще по усл.рендер
function Screen({
  activate, // статус (true ?)
  input, // вход.данн. (масс.объ.)
  message = "",
  combine = false,
  type = "single", // передаётся jackson
  // children, // ? хз зачем.2
}) {
  let selectedList = null;
  let className = "";
  let monitorSatus = "";

  // ? хз зачем.1 Вывод эможди?
  // const singleInputItems = input.map(
  //   (item, index) => item.input && <Emoji symbol={item.symbol} key={index} />
  // );

  // Доп.вывод букв ч/з Letter по условию | пример обнаружения множества ключей
  const jacksonInputItems = input.map(
    // true - е/и в перебраном item из props input (inputs[input]) есть значение (пр. akeyPress) то передача props в Letter
    (item, index) => item.input && <Letter key={index} text={item.key} />
  );

  // е/и props type = single, то .monitorOff(ни одна из букв)
  if (type === "single") {
    // selectedList = singleInputItems; // ? хз зачем.1
    className = "monitorOff";
  }

  // Счас jackson настр. по умолч. Е/и props type = jackson(умолч.), то .monitorOff(ни одна из букв) и .jacksonFiveSing(изо 1)
  if (type === "jackson") {
    selectedList = jacksonInputItems;
    className = "monitorOff jacksonFiveSing";
    monitorSatus = "jacksonFiveSing";
  }

  return (
    <div className="flex-container">
      <div className="flex-screen">
        {/* {children} */} {/* // ? хз зачем.2 */}
        {/* е/и есть props active(true в эл. массива), вывод div по классам с Буквами(1-3 букв) или СМС (0 букв) */}
        {activate ? (
          <div
            className={
              // е/и props `комбинировать` есть(ч/з хук Mul...Sequen) то .monitor(все букв) .jacksonFiveABC(смена на изо2)
              combine ? "monitor jacksonFiveABC" : `monitor ${monitorSatus}`
            }
          >
            {/* вывод.доп букв */}
            {selectedList}
          </div>
        ) : (
          <div className={className}>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
//  ----------------------------------------------------------------------------------

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
          <div style={{ background: "red", color: "block" }}>
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
          <OneKeysPress />
          <MultiKeysPress />
          <AllKeysPress />
          {/* <UseAllKeypad inputs={inputs} type={"multi"}/> */}
        </div>
        <div className="CommonTrifles__frame">CommonTrifles.js</div>
      </div>
    );
  }
}

export default CommonTrifles;
