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
  // runOnKeys3(() => alert("Привет!"), "KeyQ", "Period", "Comma"); // (сочетание - Q><)
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
// СРАВНЕНИЕ 2Х МАССИВОВ
// 1
// var array1 = [4,8,9,10];
// var array2 = [4,8,9,10];
// var is_same = (array1.length == array2.length) && array1.every(function(element, index) {
//     return element === array2[index];
// });
// 2
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// function arrayEquals(a, b) {
//   return Array.isArray(a) &&
//     Array.isArray(b) &&
//     a.length === b.length &&
//     a.every((val, index) => val === b[index]);
// }
// 3
// var first = [ 1, 2, [3, 4, 5] ];
// var second = [ 1, 2, [3, 4, 5] ];
// var isEqual = JSON.stringify(first) === JSON.stringify(second);
// console.log(isEqual);
// 4
// var isEqual = first.toString() === second.toString();
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
// 1   if (codes.some(value => !pressed.has(value))) return; // хоть один
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
// const [keySet, setKeySet] = useState(false);
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
      // setKeySet(true);
    }
  });

  document.addEventListener("keyup", function (event) {
    pressed.delete(event.code);
  });
};
// constRunOnKeysSet(() => alert("Q и W по Set"), "KeyQ", "KeyR");
// runOnKeysSet();
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
const MyMultiKeyPress = ({
  keys, // массив клвш
  mykeysPressed, // выхов хука useMultiKeyPress()
  emoji, // эл. Здесь string - WIN
  // stras,
  setStMyKeyPress,
}) => {
  const arePressed = myAreKeysPressed(keys, mykeysPressed);

  if (arePressed) {
    // ??? не раб - при передачи 2 пропсов с изменениями выходит ошб - Невозможно обновить компонент (`ProbKeyFnComp`) во время рендеринга другого компонента (`MyMultiKeyPress`). Чтобы найти неправильный вызов setState() внутри `MyMultiKeyPress`, следуйте трассировке стека, как описано в https://reactjs.org/link/setstate-in-render.
    setStMyKeyPress(true);
    return emoji;
    // return stras;
    // return setMyKeyPress(true);
  }
  return null;
};
export { MyMultiKeyPress };
//
//
//
//
// `нажаты клавиши`. true е/и переданные и нажатые клвш. совпадают
// const AreKeysPressed = (keys = [], keysPressed = []) => {
function myAreKeysPressed(
  keys = [], // массив переданых клвш.
  mykeysPressed = [] // массив нажатых клвш.
) {
  // console.log("keysPressed : " + keysPressed);
  // console.log("keysPressed.length : " + keysPressed.length);

  // Коллекция клвш по умолч. Set - множество для хран. уник. значен. Элем. после итерации(перебора) добавл в нов. Set без возврата или пустой.
  const required = new Set(keys);
  // перебор нажатых клавиш. keysPressed ч/з хук useMultiKeyPress
  for (var elem of mykeysPressed) {
    // из коллекции переданых удаляем нажатые клвш.
    required.delete(elem);
    // setStMyKeyPress(true);
  }
  // возвращ. true если размер 0 (нажатые нашлись в коллекции переданных)
  return required.size === 0;
}
export { myAreKeysPressed };
//
//
//
//
// ХУК `использовать многоклавишное нажатие`.
// ??? не знаю правильно ли раб. - при зажатых неск опред клвщ. е/и нажать одинарные опред. клвш. то вйдет контент
// function useMultiKeyPress() {
const useMyKeyPress1 = (mathFor, key1, key2, key3) => {
  // const useMyKeyPress = (func, key1, key2, key3) => {
  // состояние для отслеж нажат клвш
  // const [isKeyPressedSet, setIsKeyPressedSet] = useState(new Set([]));
  const [isKeyPressedSet, setIsKeyPressedSet] = useState(false);
  // const [isKeyPressedArr, setIsKeyPressedArr] = useState(new Array.massArr([]));
  const [isKeyPressedArr, setIsKeyPressedArr] = useState(false);
  // console.log("isKeyPressed 1: " + isKeyPressed);

  let eKey1,
    eKey2,
    eKey3 = null;

  let massSet = new Set();
  let massArr = [];

  let args = [key1, key2, key3];

  function downHandler(event) {
    // ??? не раб - massArr.push(event.key) - сильно быстро добывляет?
    // massArr.push(event.key);
    // massSet.add(event.key);
    // console.log("massArr.length 0: " + massArr.length);
    // console.log("massSet.size 0: " + massSet.size);
    // console.log("event : " + event);
    // console.log("event.key : " + event.key);
    // console.log("2 : " + 2);
    // console.log("event : " + event);
    // console.log("event.key : " + event.key);
    // console.log("key1 : " + key1);
    // console.log("key Mult Down 0: " + key);
    if (event.key === key1) {
      console.log("key1 : " + key1);
      eKey1 = event.key;
      massArr.push(event.key === key1);
      // massSet.add(event.key);

      // console.log("massArr.length 1: " + massArr.length);
      // console.log("massSet.size 1: " + massSet.size);
      // console.log("massArr 1: " + massArr);
    }
    if (event.key === key2 && eKey1) {
      console.log("key2 : " + key2);
      eKey2 = event.key;
      massArr.push(event.key === key2);
      // massSet.add(event.key);

      // console.log("massArr.length 2: " + massArr.length);
      // console.log("massSet.size 2: " + massSet.size);
    }
    if (event.key === key3 && eKey1 && eKey2) {
      // console.log("key3 : " + key3);
      eKey3 = event.key;
      massArr.push(event.key === key3);
      // massSet.add(event.key);

      // console.log("massArr.length 3: " + massArr.length);
      // console.log("massSet.size 3: " + massSet.size);
    }
    if (
      eKey1 &&
      eKey2 &&
      eKey3 &&
      args.length === massArr.length // &&
      // args.some((value) => !massArr.includes(value))
      // massArr.every((val, index) => val === args[index])
      // JSON.stringify(args) === JSON.stringify(massArr)
      // args.length === (massArr.length || massSet.size)
    ) {
      // console.log("key 3 =  : ");

      // console.log("massArr.length =: " + massArr.length);
      // console.log("massSet.size =: " + massSet.size);
      // func();
      // console.log("setStMyKeyPress 0: " + setStMyKeyPress);
      // setStMyKeyPress(true);
      // console.log("setStMyKeyPress 1: " + setStMyKeyPress);
      setIsKeyPressedArr(true);
      // setIsKeyPressedSet(true);
      // setIsKeyPressedArr || setIsKeyPressedSet(true);
      eKey1 = null;
      eKey2 = null;
      eKey3 = null;
      massArr = [];
      massSet = [];
    }
    // `установить нажатую клавишу``клавиши нажаты``добавить``ключ`
    // setIsKeyPressed(isKeyPressed.add(event));
  }

  const upHandler = (event) => {
    // console.log("1 : " + 1);
    // isKeyPressed.delete(event);
    // setIsKeyPressed(isKeyPressed);
    if (event.key !== key1 && event.key !== key2 && event.key !== key3) return;
    eKey1 = null;
    eKey2 = null;
    eKey3 = null;
    massArr = [];
    massSet = [];
  };

  useEffect(() => {
    // window.addEventListener("keydown", downHandler);
    document.addEventListener("keydown", downHandler);
    // отрисовка мигает т.к. есть слушатель отжатия. е/и убрать то будет нажата. t|b оставить то
    // window.addEventListener("keyup", upHandler);
    document.addEventListener("keyup", upHandler);
    // возвращ return для откл от слушателей
    return () => {
      // window.removeEventListener("keydown", downHandler);
      document.removeEventListener("keydown", downHandler);
      // window.removeEventListener("keyup", upHandler);
      document.removeEventListener("keyup", upHandler);
    };
  }, []); // Пустой массив гарантирует, что эффект работает только при монтаже и демонтаже

  // console.log("isKeyPressed 2: " + isKeyPressed);
  return isKeyPressedArr;
  // return isKeyPressedSet;
  // return isKeyPressedArr || isKeyPressedSet;
};

const useMyKeyPress = (mathFor, key1, key2, key3) => {
  const [isKeyPressedSet, setIsKeyPressedSet] = useState(false);
  const [isKeyPressedArr, setIsKeyPressedArr] = useState(false);

  let eKey1,
    eKey2,
    eKey3 = null;

  let massSet = new Set();
  let massArr = [];

  let args = [key1, key2, key3];

  function downHandler(event) {
    // 2
    let codes = ["KeyQ", "KeyS"];
    // let pressed = new Set();
    // document.addEventListener("keydown", function (event) {
    // pressed.add(event.code);
    // for (let code of codes) {
    //   if (!pressed.has(code)) {
    //     return;
    //   }
    // }
    // if (pressed.size === codes.length) {
    //   pressed.clear();
    // }
    // 3
    //   keys = [], // массив переданых клвш.
    // mykeysPressed = [] // массив нажатых клвш.
    //   const required = new Set(keys);
    // for (var elem of mykeysPressed) {
    //   required.delete(elem);
    // }
    // return required.size === 0;
  }

  const upHandler = (event) => {};

  useEffect(() => {
    document.addEventListener("keydown", downHandler);
    document.addEventListener("keyup", upHandler);
    return () => {
      document.removeEventListener("keydown", downHandler);
      document.removeEventListener("keyup", upHandler);
    };
  }, []); // Пустой массив гарантирует, что эффект работает только при монтаже и демонтаже

  // console.log("isKeyPressed 2: " + isKeyPressed);
  return isKeyPressedArr;
  // return isKeyPressedSet;
  // return isKeyPressedArr || isKeyPressedSet;
};
export { useMyKeyPress };
