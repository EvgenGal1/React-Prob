// хук useKeyPress + отладка (нажатие на клвш., отслж., вывод)=======================================================================================
// при нажатии опред. одиночных клвш. - вывод + шрифт к обозначению. е\и надо чтобы вывод отражался/мигал, то комит/разкомит useKeyPress.useEffect.keyup отрисовка мигает.
// !!! по YT видео RED Group или https://usehooks.com/useKeyPress/

import React, { useState, useEffect } from "react";

// созд хук. в аргум. принимаем клвш. (https://usehooks.com/useKeyPress/)
// const useKeyPress = (keyTarget: string) => {
// function useKeyPress(keyTarget: string): boolean {
const useKeyPress = (keyTarget) => {
  // состояние для отслеж нажат клвш
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  // debug `отладка` кастомных хуков. см. в devTools-Components-hooks - отражено состояние
  // е/и
  // useDebugValue(isKeyPressed ? "Нажато" : "Отжато");

  // 1ая fn() клвш нажата.
  // function downHandler({ key }): void {
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
  // const upHandel = ({ key }): void => {
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
    // отрисовка мигает(исчезает) т.к. есть слушатель отжатия. е/и убрать то будет нажата (отрисована)
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

export { useKeyPress };
