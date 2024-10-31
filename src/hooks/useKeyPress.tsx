// хук useKeyPress + отладка (нажатие на клвш., отслж., вывод)=======================================================================================
// при нажатии опред. одиночных клвш. - вывод + шрифт к обозначению. е\и надо чтобы вывод отражался/мигал, то комит/разкомит useKeyPress.useEffect.keyup отрисовка мигает.
// !!! по YT видео RED Group или https://usehooks.com/useKeyPress/

import { useState, useEffect } from "react";

// созд хук. в аргум. принимаем клвш. (https://usehooks.com/useKeyPress/)
const useKeyPress = (keyTarget: string): boolean => {
  // сост. > отслеж.нажат.клвш.
  const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);

  // fn() нажатия клавиши
  const downHandler = ({ key }: KeyboardEvent): void => {
    if (key === keyTarget) setIsKeyPressed(true);
  };

  // fn() отпускания клавиши
  const upHandler = ({ key }: KeyboardEvent): void => {
    if (key === keyTarget) setIsKeyPressed(false);
  };

  // подкл.слушателей событий
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // отрисовка мигает(исчезает) т.к. есть слушатель отжатия. е/и убрать то будет нажата (отрисована)
    window.addEventListener("keyup", upHandler);

    // возврат функции > откл.слушателей
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
    // Пустой массив обеспечивает запуск эффекта только при монтировании и размонтировании компонента.
  }, []);

  // возвращ.сост.нажат.клвш.
  return isKeyPressed;
};

export { useKeyPress };
