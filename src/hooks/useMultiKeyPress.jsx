// fn()useMultiKeyPress (нажатие неск клавиш)----------------------------------------------------------------------------------
// при зажатии неск-их опред. клвш. одновременно И нажатии одиночных опред. клвш. - вывод + шрифт к обозначению. Е\и надо чтобы вывод отражался/мигал, то комит/разкомит useMultiKeyPress.useEffect.keyup отрисовка мигает.
// !!! написано на основе - https://codesandbox.io/s/y3qzyr3lrz?file=/src/use-multi-key-press.js
// общ. разработка - https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5

import React, { useState, useEffect } from "react";

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
export { Label };

// `нажаты клавиши`. true е/и переданные и нажатые клвш. совпадают
// const AreKeysPressed = (keys = [], keysPressed = []) => {
function areKeysPressed(
  keys = [], // массив переданых клвш.
  keysPressed = [] // массив нажатых клвш.
) {
  // Коллекция клвш по умолч. Set - множество для хран. уник. значен. Элем. после итерации(перебора) добавл в нов. Set без возврата или пустой.
  // const required = new Set(keys);
  // // перебор нажатых клавиш. keysPressed ч/з хук useMultiKeyPress
  // for (var elem of keysPressed) {
  //   // из коллекции переданых удаляем нажатые клвш.
  //   required.delete(elem);
  // }
  // // возвращ. true если размер 0 (нажатые нашлись в коллекции переданных)
  // return required.size === 0;
  // пробы др цикла------------------------------------------------------------
  const requireds = new Set(keys);
  for (let required of requireds) {
    // е/ не все клавиши из набора нажаты?
    if (!keysPressed.has(required)) {
      return;
    }
  }
  requireds.clear();
  return true;
  // пробы др цикла------------------------------------------------------------
}
export { areKeysPressed };

// `Многократное нажатие клавиш`
// ~~~ не понятно - выводит "emoji" е/и зажаты все keys + в keysPressed(ч/з useMultiKeyPress) получ. (хз что?true?) + передали emoji
const MultiKeyPress = ({ keys, keysPressed, emoji, props }) => {
  // console.log("props : " + props);
  const arePressed = areKeysPressed(keys, keysPressed);

  if (arePressed) {
    // return emoji;
    // console.log("props : " + props);
    return props || emoji;
  }
  return null;
};
export { MultiKeyPress };

// ХУК `использовать многоклавишное нажатие`.
// ??? не знаю правильно ли раб. - при зажатых неск опред клвщ. е/и нажать одинарные опред. клвш. то вйдет контент
// function useMultiKeyPress() {
const useMultiKeyPress = () => {
  // состояние для отслеж нажат клвш
  const [isKeyPressedMult, setIsKeyPressed] = useState(new Set([]));
  // console.log("isKeyPressedMult : " + isKeyPressedMult.size);
  // function downHandler({ key }): void {
  function downHandler({ key }) {
    // `установить нажатую клавишу``клавиши нажаты``добавить``ключ`
    setIsKeyPressed(isKeyPressedMult.add(key));
  }

  const upHandler = ({ key }) => {
    isKeyPressedMult.delete(key);
    setIsKeyPressed(isKeyPressedMult);
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // отрисовка мигает т.к. есть слушатель отжатия. е/и убрать то будет нажата. t|b оставить то
    window.addEventListener("keyup", upHandler);
    // возвращ return для откл от слушателей
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Пустой массив гарантирует, что эффект работает только при монтаже и демонтаже

  return isKeyPressedMult;
};

export { useMultiKeyPress };
