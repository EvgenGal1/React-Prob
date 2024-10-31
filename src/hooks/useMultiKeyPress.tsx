// fn()useMultiKeyPress (нажатие неск клавиш)----------------------------------------------------------------------------------
// при зажатии неск-их опред. клвш. одновременно И нажатии одиночных опред. клвш. - вывод + шрифт к обозначению. Е\и надо чтобы вывод отражался/мигал, то комит/разкомит useMultiKeyPress.useEffect.keyup отрисовка мигает.
// !!! написано на основе - https://codesandbox.io/s/y3qzyr3lrz?file=/src/use-multi-key-press.js
// общ. разработка - https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5

import React, { useState, useEffect } from "react";

// Пропсы для компонента Label
interface LabelProps {
  value: string;
  isBold?: boolean; // Необязательный пропс
}

// отрисовывает клвш. с опред. шрифтом. приним. клвш. и сост.клвш.
const Label: React.FC<LabelProps> = ({ value, isBold }) => (
  <div
    style={{
      display: "inline-block",
      margin: "0 5px",
      fontWeight: isBold ? "bold" : "normal",
    }}
  >
    <p>{value}</p>
  </div>
);
export { Label };

// проверяет `нажаты клавиши` которые переданы
function areKeysPressed(
  keys: string[] = [], // массив переданных клавиш
  keysPressed: Set<string> = new Set() // массив нажатых клавиш
): boolean {
  // Коллекция клвш по умолч. Set - множество для хран. уник. значен. Элем. после итерации(перебора) добавл в нов. Set без возврата или пустой.
  const requireds = new Set(keys);
  for (let required of requireds) {
    if (!keysPressed.has(required)) {
      return false; // если хотя бы одна клавиша не нажата
    }
  }

  requireds.clear();
  // если все клавиши нажаты
  return true;
}
export { areKeysPressed };

// Компонент для обработки многократного нажатия клавиш
interface MultiKeyPressProps {
  keys: string[];
  keysPressed: Set<string>;
  emoji: string;
  props?: React.ReactNode; // Необязательный контент для отображения
}

// `Многократное нажатие клавиш`
// ~ не понятно - выводит "emoji" е/и зажаты все keys + в keysPressed(ч/з useMultiKeyPress) получ. (хз что?true?) + передали emoji
const MultiKeyPress: React.FC<MultiKeyPressProps> = ({
  keys,
  keysPressed,
  emoji,
  props,
}) => {
  const arePressed = areKeysPressed(keys, keysPressed);
  // возвращает emoji или props, если все клавиши нажаты
  if (arePressed) return props || emoji;
  // ничего не возвращает, если клавиши не нажаты
  return null;
};
export { MultiKeyPress };

// ХУК `использовать многоклавишное нажатие`.
// ??? не знаю правильно ли раб. - при зажатых неск опред клвщ. е/и нажать одинарные опред. клвш. то выйдет контент
const useMultiKeyPress = (): Set<string> => {
  // состояние для отслеж нажат клвш
  const [isKeyPressedMult, setIsKeyPressed] = useState<Set<string>>(new Set());

  const downHandler = ({ key }: KeyboardEvent): void => {
    // // `установить нажатую клавишу``клавиши нажаты``добавить``ключ`
    // setIsKeyPressed(isKeyPressedMult.add(key));
    setIsKeyPressed((prevKeys) => {
      const newKeys = new Set(prevKeys); // Копируем предыдущий Set
      newKeys.add(key); // Добавляем новую нажатую клавишу
      return newKeys; // Возвращаем обновленный Set
    });
  };

  const upHandler = ({ key }: KeyboardEvent): void => {
    // isKeyPressedMult.delete(key);
    // setIsKeyPressed(isKeyPressedMult);
    setIsKeyPressed((prevKeys) => {
      const newKeys = new Set(prevKeys); // Копируем предыдущий Set
      newKeys.delete(key); // Удаляем отжатую клавишу
      return newKeys; // Возвращаем обновленный Set
    });
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
    // Пустой массив гарантирует, что эффект работает только при монтаже и демонтаже
  }, []);
  // Возвращаем текущее состояние нажатых клавиш
  return isKeyPressedMult;
};

export { useMultiKeyPress };
