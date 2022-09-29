import { useState, useEffect, useRef } from "react";

// ljg | доп

// ПОСЛЕД

function useMyKeyPress111(props) {
  const [keySt, setKeySt] = useState(false);
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
        // setKeyCombin(true);
        key1 = null;
        key2 = null;
        key3 = null;
        mass = [];
      }
    }

    function keyUp(event) {
      if (event.code !== code1 && event.code !== code2 && event.code !== code3)
        return;
      key1 = null;
      key2 = null;
      key3 = null;
      mass = [];
    }
  }
  runOnKeys3(() => alert("Привет!"), "KeyQ", "Period", "Comma"); // (сочетание - Q><)
  // document.onkeydown = function (event) {
  //   console.log(event);
  // };

  return (
    <div>
      <h3></h3>
      <div></div>
      <div></div>
    </div>
  );
}
//
//
//
//
//
// ДЛИНА
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
      func();
      // setKeyWebDewArgs(true);
      arr = [];
    }
  });
}
//
//
//
//
//
// ПРОВЕРКИ
// let pressedKeys = new Set();
//     document.addEventListener('keydown', function(e){
//     pressedKeys.add(e.code)
//
// 1   if (codes.some(value => !pressed.has(value))) return;
//
// 2   for(let key of keysList){
//        if(!pressedKeys.has(key)) return;
//     }
//
//     pressedKeys.clear();
//     fn();
//
//
//
//
//
//
// SET
// const constRunOnKeysSet = function runOnKeysSet(func, ...codes) {
const runOnKeysSet = function runOnKeysSet() {
  let codes = ["KeyQ", "KeyS"];
  let pressed = new Set();

  document.addEventListener("keydown", function (event) {
    pressed.add(event.code);

    for (let code of codes) {
      // все ли клавиши из набора нажаты?
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    // func();
    // setKeySet(true);
  });

  document.addEventListener("keyup", function (event) {
    pressed.delete(event.code);
  });
};
//
//
//
//
//
//
//
{
  /* 
<MultiKeyPress
    keys={["q", "w", "e"]}
    keysPressed={keysPressed}
    emoji="WIN"
/> 
*/
}

// `Многократное нажатие клавиш`
// ~~~ не понятно - выводит "emoji" е/и зажаты все keys + в keysPressed(ч/з useMultiKeyPress) получ. (хз что?true?) + передали emoji
const MultiKeyPress = ({
  keys, // массив клвш
  keysPressed, // выхов хука useMultiKeyPress()
  // emoji, // эл. Здесь string - WIN
  stras,
}) => {
  const arePressed = areKeysPressed(keys, keysPressed);

  if (arePressed) {
    // return emoji;
    return stras;
  }
  return null;
};
export { MultiKeyPress };
//
//
//
//
// `нажаты клавиши`. true е/и переданные и нажатые клвш. совпадают
// const AreKeysPressed = (keys = [], keysPressed = []) => {
function areKeysPressed(
  keys = [], // массив переданых клвш.
  keysPressed = [] // массив нажатых клвш.
) {
  // console.log("keysPressed : " + keysPressed);
  // console.log("keysPressed.length : " + keysPressed.length);

  // Коллекция клвш по умолч. Set - множество для хран. уник. значен. Элем. после итерации(перебора) добавл в нов. Set без возврата или пустой.
  const required = new Set(keys);
  // перебор нажатых клавиш. keysPressed ч/з хук useMultiKeyPress
  for (var elem of keysPressed) {
    // из коллекции переданых удаляем нажатые клвш.
    required.delete(elem);
  }
  // возвращ. true если размер 0 (нажатые нашлись в коллекции переданных)
  return required.size === 0;
}
export { areKeysPressed };
//
//
//
//
// ХУК `использовать многоклавишное нажатие`.
// ??? не знаю правильно ли раб. - при зажатых неск опред клвщ. е/и нажать одинарные опред. клвш. то вйдет контент
// function useMultiKeyPress() {
const useMyKeyPress = () => {
  // состояние для отслеж нажат клвш
  const [isKeyPressed, setIsKeyPressed] = useState(new Set([]));
  // console.log("Set : " + Set);
  // console.log("Set.length : " + Set.size);
  // function downHandler({ key }): void {
  function downHandler({ key }) {
    // console.log("key Mult Down 0: " + key);

    // `установить нажатую клавишу``клавиши нажаты``добавить``ключ`
    setIsKeyPressed(isKeyPressed.add(key));

    // console.log("Set.length 1: " + Set.size);
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
};
