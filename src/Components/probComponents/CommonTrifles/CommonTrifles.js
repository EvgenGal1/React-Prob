/* eslint-disable default-case */
import React from "react";
import { useDebugValue, useState, useEffect } from "react";
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
import { Key, Plus, Emoji, Letter } from "./utilities";
// мой хук
import {
  useMyKeyPress,
  myAreKeysPressed,
  MyMultiKeyPress,
} from "../../../hooks/useMyKeyPress";

// подкл. UI блоков
import ArrowAccordion from "../../../js/includes/ArrowAccordion.js";
import { ArrowAccordionFnComp } from "../../../js/includes/ArrowAccordion.jsx";
// ^ мнг. клвш. может быть ограничение на кол-во нажатых клавиш - https://gaming.stackexchange.com/questions/6669/how-do-i-remove-the-limit-on-pc-keyboard-button-presses
// общ. разработка - https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5

// хук useKeyPress + отладка (нажатие на клвш., отслж., вывод) --------------------------------
// при нажатии опред. одиночных клвш. - вывод + шрифт к обозначению. е\и надо чтобы вывод отражался/мигал, то комит/разкомит useKeyPress.useEffect.keyup отрисовка мигает.
// !!! по YT видео RED Group или https://usehooks.com/useKeyPress/
// * перенесён в hooks/useKeyPress
function OneKeysPress() {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  // для управ с h1
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  const isJapanPressed = useKeyPress("j");
  const isChinaPressed = useKeyPress("c");
  const isSouthKoreaPressed = useKeyPress("k");
  // const isAustraliaPressed = useKeyPress("a");

  const keysPressed = useMultiKeyPress();

  return (
    <div className="OneKeysPress--- accordion">
      <div className="OneKeysPress__descript--">
        <h1
          className={openArrowAccord ? "_active" : ""}
          // для управ с h1
          onClick={() => {
            handleClickRef();
          }}
        >
          useKeyPress - Одиночное нажатие клавиши
        </h1>
        <div className={openArrowAccord ? "openDop" : ""}>
          <h2>хук keysPressed для обработки зажатия одной клавиш</h2>
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
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      <div
        className={`OneKeysPress__content--${
          openArrowAccord ? " openCont" : ""
        }`}
      >
        {/* простановка условия. при нажатой клвш выйдет И div */}
        {isJapanPressed && <div>🇯🇵</div>}
        {isChinaPressed && <div>🇨🇳</div>}
        {isSouthKoreaPressed && <div>🇰🇷</div>}
        {/* {isAustraliaPressed && <div>🇦🇺</div>} */}
      </div>
      {/* <div className="OneKeysPress__frame--">OneKeysPress</div> */}
    </div>
  );
}

// fn()useMultiKeyPress (нажатие неск клавиш)--------------------------------------------------
// хук при зажатии неск-их опред. клвш. одновременно И нажатии одиночных опред. клвш. - вывод + шрифт к обозначению. Е\и надо чтобы вывод отражался/мигал, то комит/разкомит useMultiKeyPress.useEffect.keyup отрисовка мигает.
// !!! написано на основе - https://codesandbox.io/s/y3qzyr3lrz?file=/src/use-multi-key-press.js
// * перенесён в hooks useMultiKeyPress
function MultiKeysPress() {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  // для управ с h1
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  const happyPress = useKeyPress("h");
  // const sadPress = useKeyPress("v");
  const robotPress = useKeyPress("r");
  const foxPress = useKeyPress("f");
  // не раб
  // const keys = ["h", "s", "r", "f"];
  // const [happyPress, /* sadPress, */ robotPress, foxPress] = useKeyPress(keys);

  const keysPressed = useMultiKeyPress();
  const hsrfPressed = areKeysPressed(["q", "w", "e"], keysPressed);

  // const combinePress = useAllKeysPress({
  //   // userKeys: ["a", "b", "c"],
  //   // userKeys: ["d", "o", "p", "m", "e", "n", "u"],
  //   userKeys: ["d", "o", "p", "m", "n"],
  //   order: true,
  // });
  // console.log("happyPress : " + happyPress);
  // console.log("keysPressed : " + keysPressed);
  return (
    <div className="MultiKeysPress-- accordion">
      <div className="MultiKeysPress__descript--">
        <h1
          className={openArrowAccord ? "_active" : ""}
          // для управ с h1
          onClick={() => {
            handleClickRef();
          }}
        >
          useMultiKeyPress для обработки зажатия многих клавиш
        </h1>
        <div className={openArrowAccord ? "openDop" : ""}>
          <p>
            Прослушивает ЗАжатии неск-их опред. клвш. одновременно И НАжатии
            одиночных опред. клвш. - вывод + шрифт к обозначению
          </p>
          <p>
            Е\и надо чтобы вывод отражался/мигал, то комит/разкомит
            useMultiKeyPress.useEffect.keyup отрисовка мигает.
          </p>
        </div>
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      <div
        className={`MultiKeysPress__content--${
          openArrowAccord ? " openCont" : ""
        }`}
      >
        <div className="countryflags__twoexp---">
          <div className="countryflags__twoexp_description---">
            {/* визуализация выделением */}
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
            {/* {sadPress && "😢"} */}
            {happyPress && "😊"}
            {robotPress && "🤖"}
            {foxPress && "🦊"}
            {/* {happyPress && "h"}
            {robotPress && "r"}
            {foxPress && "f"} */}
            {/* {(foxPress || happyPress || robotPress) && "l"} */}
            {/* <br /> */}
            {/* // ~~~ не понятно - выводит WIN е/и зажаты все keys + в keysPressed(ч/з useMultiKeyPress) получ. (хз что?true?) + передали emoji */}
            <div>
              <MultiKeyPress
                keys={["q", "w", "e"]}
                keysPressed={keysPressed}
                emoji="WIN"
                // emoji="WINasd"
                // props="a"
                // props={<p>a</p>}
              />
            </div>
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
      {/* <div className="MultiKeysPress__frame--">MultiKeysPress</div> */}
    </div>
  );
  // }
}

// последовательное нажатие нескольких клавиш ------------------------------------------------
// !!! https://codesandbox.io/s/multiple-keys-in-order-vpovi?file=/src/App.js
function AllKeysPress() {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  // для управ с h1
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

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

  // массив букв после хука (возвращ true е/и переданные и нажатые равны)
  const combinePress = useAllKeysPress({
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
  // some - `немного`. опред., возвращает ли fn callback - true, для хоть одного эл. массива.

  // пробы отслеживать true в combinePress ----------------------------------------------------
  const [provCombinePress, setProvCombinePress] = useState(
    false
    // true
    // true ? true : false
    // true ? false : false
    // false ? false : true
  );
  const [isCountqwe, setIsCountqwe] = useState(false);
  // console.log("isCount 0: " + isCount);
  // const [isCount, setIsCount] = useState(false);
  // const [isCount, setIsCount] = useState([0]);
  // const [isCount, setIsCount] = useState(new Set([]));
  // const [isCount, setIsCount] = useState(new Arrw([]));
  // let copyIsCount = Object.assign([], isCount);
  const fnIsCount = (provCombinePress, copyIsCount) => {
    if (provCombinePress) {
      // setIsCountqwe(true);
      // console.log("isCount 1: " + isCountqwe);
      // console.log("provCombinePress : " + provCombinePress);
      // copyIsCount++;
      // setIsCount(copyIsCount + 1);
      // console.log("copyIsCount 2: " + copyIsCount);
      // console.log("copyIsCount.length 2: " + copyIsCount.length);
    }
  };
  // fnIsCount(provCombinePress /* copyIsCountqwe */);

  const fnComb = (provCombinePress, copyIsCount) => {
    if (combinePress === true) {
      setProvCombinePress(true);
      // console.log("combinePress 1: " + combinePress);
      // console.log("provCombinePress 1: " + provCombinePress);
    }
  };
  // fnComb(combinePress /* copyIsCountqwe */);

  // console.log("copyIsCount 0: " + isCount);
  // console.log("combinePress 0: " + combinePress);
  // console.log("provCombinePress 0: " + provCombinePress);
  useEffect(() => {
    // console.log("setProvCombinePress 01: " + setProvCombinePress);
    // console.log("combinePress 01: " + combinePress);
    if (combinePress === true) {
      setProvCombinePress(true);
      // console.log("combinePress 1: " + combinePress);
      // console.log("provCombinePress 1: " + provCombinePress);
      // console.log("provCombinePress true: " + provCombinePress);
      // fnProvCombinePress(provCombinePress, copyIsCount);
      // copyIsCount.push(1);
      // setIsCount(true);
      // console.log("isCount 1: " + isCount);
      // console.log("copyIsCount 1: " + copyIsCount);
      // console.log("copyIsCount.length 1: " + copyIsCount.length);
      // 0
      // const [arr, setValue] = useState(['Тише', 'мыши']);
      // let copy = Object.assign([], arr);
      // copy.push('кот');
      // copy.push('на');
      // copy.push('крыше');
      // setValue(copy);
      // setCount(count + 1);
      // setIsCount(isCount.push(true));
      // setIsCount(isCount.add(true));
      // setIsCount(isCount.add(true));
      // setIsCount(isCount + 1); // бесконечно добавл
      // console.log("isCount.lenght : " + isCount.length);
      // console.log("isCount.size : " + isCount.size);
      // console.log("count : " + count);
      // console.log("count.lenght : " + count.lenght);
      // 1 все элементы в массиве - четные числа:
      //   var containsEvenNums = function(numArray) {
      //     return numArray.some(function(element) {
      //         return element % 2 === 0;
      //     });
      // };
      // 2 содержит ли массив четное число
      //       let arr = [2, 4, 6, 8];
      // let result = arr.every(elem => elem % 2 == 0);
      // console.log(result);
      // ...
      // n % 2 == 0;
      // var b = a.filter((_, index)=>index%2!=0).concat(a.filter((_, index)=>index%2==0));
      // const even = n => !(n % 2);
      // if (props.number % 2 == 0) {
      //   description = <strong>чётным</strong>;
      // } else {
      //   description = <i>нечётным</i>;
      // }
      // Ожидается, что назначение или функциональный вызов и вместо этого увидел выражение
      // setSetProvCombinePress((prevState) => !prevState);
    }
  }, [combinePress, provCombinePress /* isCount, setIsCount, copyIsCount */]);

  // ProvCombinePress();

  // доп визуал
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

  return (
    <div className="AllKeysPress-- accordion">
      <div className="AllKeysPress__descript--">
        <h1
          className={openArrowAccord ? "_active" : ""}
          // для управ с h1
          onClick={() => {
            handleClickRef();
          }}
        >
          useAllKeysPress - Последовательное нажатие определённых клавиш
        </h1>
        <div className={openArrowAccord ? "openDop" : ""}>
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
          <p>попробовать ввод - ljgvty. какие клвш не пересекаются</p>
          <p>
            При добавлен константы вызова хука useAllKeysPress в
            comp.MultiKeysPress, логика MultiKeyPress с клавишими qwe -
            сломалась. Теперь при выводятся при первом нажатии, без доп.кнп.
          </p>
          <p>
            Сливать или модернизировать хуки Key, чтоб был последовательный,
            фиксированный ввод с оставленым результатом. Можно и доп комбинации.
            Назначить комбинации отмены
          </p>
          <p>выведение блоков по условим/операторам</p>
          <p>временно блокировал addEventListener("keyup" в хуке.</p>
          <p>
            ч/з <span>combinePress</span> выводит по правильной
            последовательности, но сброс после любых клавиш
          </p>
          <p>
            ч/з anyKeyPressed (дложно быть true, но после объявления в cg -
            false. true при нажатии) усл.ренд. и/или операт. выводит блок. но по
            любому нажатию клав. из dopmn
          </p>
          <p>
            перечитать/попробовать -
            https://translated.turbopages.org/proxy_u/en-ru.ru.a2f3a68f-6334556c-afe7adea-74722d776562/https/stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript
          </p>
          <p style={{ fontWeight: "bold" }}>
            попробовать подсчёт количества срабатываний combinePress (при вкл.
            слушателе keyup). Т.е. на 1 доп state true, при 2 false и т.д.
          </p>
          <p>
            подсчёт не проходит. е/и true от fn combinePress в useffect
            дублировать в useState (хаписывается) и там же в отдельном useState
            хранить счётчик, то выдаёт ошибку бесконечного рендера.
          </p>
          <p>
            массив так же не проходит. его стайт и изменение даже через копию,
            уходят в бесконечное добавление.
          </p>
          <p>
            временно на выводимый блок ч/з state provCombinePress (true от
            combinePress) навесил на блок onclick.false. provCombinePress
            изначально срабат. так же и combinePress, но т.к. отдельно поместил
            в useStete, то окл не происходит.
          </p>
        </div>
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      <div
        className={`AllKeysPress__content--${
          openArrowAccord ? " openCont" : ""
        }`}
      >
        <span>["d", "o", "p", "m", "n"]</span>
        <div>
          На combinePress
          {combinePress ? (
            <span> - НОРМ</span>
          ) : (
            <span style={{ color: "#8d0000" }}> - НЕ норм</span>
          )}
        </div>
        <div>
          На anyKeyPressed
          {anyKeyPressed ? (
            <span> - НОРМ</span>
          ) : (
            <span style={{ color: "#8b0000" }}> - НЕ норм</span>
          )}
        </div>
        <div>
          На setProvCombinePress
          {provCombinePress ? (
            <span
              onClick={() => {
                setProvCombinePress(false);
              }}
            >
              {" "}
              - НОРМ
            </span>
          ) : (
            <span style={{ color: "#8b0000" }}> - НЕ норм</span>
          )}
        </div>
      </div>
    </div>
  );
  // }
}

// PROBKEY ------------------------------------------------------------------------
function ProbKeyFnComp() {
  // 1 ------------------------------------------------------------------------
  const [backdropOpen, setBackdropOpen] = useState(false);
  useEffect(() => {
    // Ключи, которые необходимо нажать одновременно, чтобы переменная «фонаропопена», чтобы быть «истинной»
    const keysArr = ["ControlLeft", "ShiftLeft", "AltLeft"];
    const keysMap = {};
    let backdropOpenLocal = false;

    const keydownEvent = "keydown";
    const keyupEvent = "keyup";

    const checkKeys = () => {
      const keysArePressed = keysArr.every(
        (value) => keysMap[value] === keydownEvent
      );
      if (keysArePressed !== backdropOpenLocal) {
        backdropOpenLocal = keysArePressed;
        setBackdropOpen(keysArePressed);
      }
    };

    const handleKeyDown = (event) => {
      const keyCode = event.code;
      if (keysArr.includes(keyCode) && keysMap[keyCode] !== keydownEvent) {
        keysMap[keyCode] = keydownEvent;
      }
      checkKeys();
    };

    const handleKeyUp = (event) => {
      const keyCode = event.code;
      if (keysArr.includes(keyCode) && keysMap[keyCode] !== keyupEvent) {
        keysMap[keyCode] = keyupEvent;
      }
      checkKeys();
    };

    document.addEventListener("keydown", handleKeyDown);
    // document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // 2 Set ------------------------------------------------------------------------
  const [keySet, setKeySet] = useState(false);
  // const constRunOnKeysSet = function runOnKeysSet(func, ...codes) {
  const runOnKeysSet = function runOnKeysSet() {
    let codes = ["KeyQ", "KeyS"];
    let pressed = new Set();

    document.addEventListener("keydown", function (event) {
      pressed.add(event.code);

      for (let code of codes) {
        // е/и не все клавиши из набора нажаты
        if (!pressed.has(code)) {
          return;
        }
      }
      // + проверка на длину
      if (pressed.size === codes.length) {
        pressed.clear();
        // func();
        // console.log("true : " + true);
        setKeySet(true);
      }
    });

    document.addEventListener("keyup", function (event) {
      pressed.delete(event.code);
    });
  };
  // constRunOnKeysSet(() => alert("Q и W по Set"), "KeyQ", "KeyR");
  runOnKeysSet();

  // 2 Arrow -----------------------------------------------------------------------
  const [keyArrow, setKeyArrow] = useState(false);
  // function runOnKeysArray(func, ...codes) {
  // `запустить на массиве клавиш`
  function runOnKeysArray() {
    let codes = ["KeyQ", "KeyA"];
    var keyDownKeys = new Array();
    document.body.addEventListener("keydown", function (event) {
      var e = event.code;
      if (codes.includes(e) && !keyDownKeys.includes(e)) keyDownKeys.push(e);
      if (equalArrays(keyDownKeys, codes)) {
        // func();
        setKeyArrow(true);
        keyDownKeys = new Array();
      }
    });
    document.body.addEventListener("keyup", function (event) {
      var e = event.code;
      var index = keyDownKeys.indexOf(e);
      if (index > -1) keyDownKeys.splice(index, 1);
    });
  }

  // `равные массивы`
  function equalArrays(arr1, arr2) {
    for (const i of arr2) if (!arr1.includes(i)) return false;
    for (const i of arr1) if (!arr2.includes(i)) return false;
    return true;
  }
  // runOnKeysArray(() => alert("Q и W по Arrow"), "KeyQ", "KeyW");
  runOnKeysArray();

  // 3 доработать -----------------------------------------------------------------
  const [keyCombin, setKeyCombin] = useState(false);
  // const pressKeyCombin = runOnKeys3(["KeyQ", "Period"]);
  function runOnKeys3(func, code1, code2, code3) {
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    // window.addEventListener("keyup", upHandel);

    let key1,
      key2,
      key3 = null;

    let args = [code1, code2, code3];
    let mass = [];

    function keyDown(event) {
      // if (event.code !== code1 && event.code !== code2 && event.code !== code3) {
      //   key1 = null; key2 = null; key3 = null; }
      if (event.code === code1) {
        key1 = event.code;
        mass.push(event.code === code1);
      }
      if (event.code === code2 && key1) {
        key2 = event.code;
        mass.push(event.code);
      }
      if (event.code === code3 && key1 && key2) {
        key3 = event.code;
        mass.push(event.code);
      }
      if (key1 && key2 && key3 && args.length === mass.length) {
        // func();
        // console.log("1 : " + 1);
        setKeyCombin(true);
        // document.removeEventListener("keydown", keyDown);
        // document.removeEventListener("keyup", keyUp);
        key1 = null;
        key2 = null;
        key3 = null;
        mass = [];
        // document.removeEventListener("keydown", keyDown);
        // document.removeEventListener("keyup", keyUp);
        // console.log("2 : " + 2);
      }
    }

    function keyUp(event) {
      // console.log("3 : " + 3);
      // document.removeEventListener("keydown", keyDown);
      // document.removeEventListener("keyup", keyUp);
      // console.log('key1 1: ' + key1);
      if (event.code !== code1 && event.code !== code2 && event.code !== code3)
        return;
      // console.log('key1 2: ' + key1);
      key1 = null;
      // console.log('key1 3: ' + key1);
      key2 = null;
      key3 = null;
      mass = [];
      // console.log("4 : " + 4);
      // document.removeEventListener("keydown", keyDown);
      // document.removeEventListener("keyup", keyUp);
    }
  }
  runOnKeys3(() => alert("Привет!"), "KeyQ", "Period", "Comma"); // (сочетание - Q><)

  // 4 ------------------------------------------------------------------------
  const [keyWebDewN, setKeyWebDewN] = useState(false);
  const [keyWebDewM, setKeyWebDewM] = useState(false);
  function keyPressWebDew() {
    let flag = false;
    document.addEventListener("keydown", function clicked(event) {
      if (event.code === "AltLeft") flag = true;
      if (event.code === "KeyN" && flag) {
        flag = false;
        // console.log("work 1");
        setKeyWebDewN(true);
        // document.removeEventListener("keydown", clicked, false);
      }
    });

    // попробовать e.shiftKey
    document.addEventListener("keydown", function clicked2(event) {
      // if (event.code === "AltLeft") {
      if (event.altKey) {
        document.addEventListener("keyup", function clicked2(event) {
          // if (event.code === "KeyN") {
          if (event.code === "KeyM") {
            // ~~~ не понятно - в консоле по 5-10 вызовов повторных. хз отчего
            // console.log("work 2");
            setKeyWebDewM(true);
          } else {
            document.removeEventListener("keydown", clicked2, false);
          }
        });
      }
    });
  }
  keyPressWebDew();
  // 5 -----------------------------------------------------------------------
  const mykeysPressed = useMyKeyPress();
  const [myStKeyPress, setStMyKeyPress] = useState(false);
  // console.log("setStMyKeyPress нач: " + setStMyKeyPress);
  // useMyKeyPress(() => setStMyKeyPress, "KeyQ", "Period", "Comma");
  // useMyKeyPress(() => alert("Привет 5 'z', 'c', 'b'!"), "z", "c", "b");
  // useMyKeyPress(() => setStMyKeyPress, "z", "c", "b");
  // console.log("setStMyKeyPress посл: " + setStMyKeyPress);
  // const foxPress = useKeyPress("f");
  const myKnpKeyPressArr = useMyKeyPress(() => /* "mathArr", */ "z", "c", "b");
  // const myKnpKeyPressSet = useMyKeyPress(() => "mathSet", "z", "c", "b");
  // 6 ------------------------------------------------------------------------
  const [keyWebDewArgs, setKeyWebDewArgs] = useState(false);
  function runOnKeysArgs(func, ...args) {
    let arr = [];
    document.addEventListener("keyup", () => {
      arr = [];
    });
    document.addEventListener("keydown", (event) => {
      arr.push(event.code);
      if (args.length === arr.length) {
        for (let item of args) {
          if (!arr.includes(item)) return;
        }
        // func();
        setKeyWebDewArgs(true);
        arr = [];
      }
    });
  }
  runOnKeysArgs(() => alert("Привет 6 Q D!"), "KeyQ", "KeyD");
  //  ------------------------------------------------------------------------
  //  ------------------------------------------------------------------------
  // document.onkeydown = function (event) {
  //   console.log(event);
  // };

  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  // для управ с h1
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  return (
    <div
      className="ProbKeyFnComp-- accordion"
      style={{ visibility: "visible", opacity: "1" }}
    >
      {/* https://translated.turbopages.org/proxy_u/en-ru.ru.a2f3a68f-6334556c-afe7adea-74722d776562/https/stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript */}
      <div className="ProbKeyClComp__descript--">
        <h1
          className={openArrowAccord ? "_active" : ""}
          // для управ с h1
          onClick={() => {
            handleClickRef();
          }}
        >
          Различные пробы ч/з state, хуки, и пр.
        </h1>
        <div className={openArrowAccord ? "openDop" : ""}></div>
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      <div
        className={`ProbKeyFnComp__content--${
          openArrowAccord ? " openCont" : ""
        }`}
      >
        <div className="1" style={{ backgroundColor: "rgb(175 127 127)" }}>
          <p>Вывод блок по "ControlLeft", "ShiftLeft", "AltLeft"</p>
          <p>
            вкл не задерживает состояние. при откл addEventListener("keyup",
            handleKeyUp) повторно клвш не срабатывают. никакой
            последовательности
          </p>
          Результат - {backdropOpen && <span>Готово</span>}
          <div></div>
        </div>
        <div className="2">
          <p>
            Вывод блок по Q и S или Q и A. Нет послед-ти. Код на Set и Arrow.
            Проверка длины только у Arrow
          </p>
          <div>Результат - {keySet && <span>Set</span>}</div>
          <div>Результат - {keyArrow && <span>Arrow</span>}</div>
        </div>
        <div className="3" style={{ backgroundColor: "rgb(175 127 127)" }}>
          <p>
            Вывод блок по "Q", "Period", "Comma" (q., | йюб).
            Последовательность! Проверка длины не очень точная.
          </p>
          <p style={{ display: "none" }}>
            С форума - https://learn.javascript.ru/keyboard-events
            <br />
            Код - https://plnkr.co/edit/O0Q4J2xsJckoA3el?preview
          </p>
          <div>Результат - {keyCombin && <span>йюб</span>}</div>
        </div>
        <div className="4">
          <p>ALt + N и Alt + M</p>
          <p style={{ display: "none" }}>
            По видео - https://www.youtube.com/watch?v=wMiRpTC513M&t=141s
          </p>
          <div>Результат - {keyWebDewN && <span>ALt + N</span>}</div>
          <div>Результат - {keyWebDewM && <span>ALt + M</span>}</div>
        </div>
        <div className="5" style={{ backgroundColor: "rgb(175 127 127)" }}>
          <p>Мой будущий хук useMyKeyPress</p>
          <p>Вывод по - "z", "c", "b"</p>
          <p>Ещё много дораб. Оч мн. лишнего кода.</p>
          <p>Проверка посед. Не на всех клвш отраб</p>
          <p>Проверка дляны. Не всегда отраб</p>
          <p>Раб на Arrow. На Set падает в ошб</p>
          {/* {foxPress && "🦊"}
          <MyMultiKeyPress
            keys={["q", "w", "e"]}
            mykeysPressed={mykeysPressed}
            // emoji="WIN"
            setStMyKeyPress={setStMyKeyPress}
          /> */}
          {/* <div>Результат - {myStKeyPress && <span>Мой</span>}</div> */}
          <div>Результат - {myKnpKeyPressArr && <span>Мой</span>}</div>
          {/* <div>Результат - {myKnpKeyPressSet && <span>Мой</span>}</div> */}
        </div>
        <div className="6">
          <p>Вывод блок по "Q", "D". Нет Послед. Проверка длины.</p>
          <div>Результат - {keyWebDewArgs && <span>QD</span>}</div>
        </div>
        <div className="7" style={{ backgroundColor: "rgb(175 127 127)" }}>
          <p></p>
        </div>
      </div>
    </div>
  );
}

class ProbKeyClComp extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {  }
  //}
  render() {
    return (
      <div className="ProbKeyClComp">
        <div className="ProbKeyClComp__descript"></div>
        <div className="ProbKeyClComp__content"></div>
      </div>
    );
  }
}
// PROBKEY ----------------------------------------------------------------------------------

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
      <div className="CommonTrifles-- accordion">
        <div className="CommonTrifles__descript--">
          <h1
            ref={this.RefActivCl}
            onClick={() => {
              this.handleClickRef();
              this.toggleArrowAccord(this.openArrowAccord);
            }}
          >
            Нажатие клавиш
          </h1>
          <div style={{ display: "none" }} ref={this.RefOpenDop}>
            <p>хук useKeyPress - нажатие по одной клвш.</p>
            <p>useMultiKeysPress - нажатие неск-их rkdi/ + с удержанием</p>
            <p>useAllKeysPress - последовательное зажатие неск-их клавиш</p>
            <p>ProbKeyFnComp - Различные пробы</p>
            {/* <div className="temporary">
              <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
              <code style={{ color: "red" }}>!!!</code>
              Написать код по считыванию нажатий на клавиши. Разные комбинации
              для разных раскладок, экранов, свет.тем, доступов, активности и
              пр.
              <p>Примеры комбин. наж. на клвш.:</p>
              <p>
                при EN расклд. - ",jkmit", + доб. цв.схема разных раскладок,
                экранов, свет.тем, доступов, активности и пр.{" "}
              </p>
              <p>
                доступ в альбом при наборе имени альбома во вкладке альбомов
              </p>
              <p>
                запись в localStorage при наборе "localStorage+" и своего имени
                в CamelCase(верблюжьем стиле)
              </p>
            </div> */}
          </div>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div
          ref={this.RefOpenCont}
          className="CommonTrifles__content--"
          // временно классы
          // style={{ visibility: "visible", opacity: "1", height: "auto" }}
        >
          {/* <div style={{ background: "red", color: "block" }}>
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
          </div> */}
          <OneKeysPress />
          <MultiKeysPress />
          <AllKeysPress />
          <ProbKeyFnComp />
          <ProbKeyClComp />
          {/* <UseAllKeypad inputs={inputs} type={"multi"}/> */}
        </div>
        <div className="CommonTrifles__frame--">CommonTrifles.js</div>
      </div>
    );
  }
}

export default CommonTrifles;
