// !!! https://codesandbox.io/s/multiple-keys-in-order-vpovi?file=/src/App.js
import { useState, useEffect, useRef } from "react";

interface UseAllKeysPressOptions {
  userKeys: string | string[]; // Могут быть строки или массивы строк
  order?: boolean;
  ref?: React.RefObject<HTMLElement | Window>; // Допустили ссылку на элемент или окно
}

interface Settings {
  output: boolean;
  downHandler: (event: KeyboardEvent) => any;
  upHandler: (event: KeyboardEvent) => any;
  useEffect: () => void;
  type: "STRING" | "ARRAY" | null;
}

function useAllKeysPress(options: UseAllKeysPressOptions) {
  // убедитесь, что «параметры» это объект
  if (!options || Object.keys(options).length === 0) {
    throw new Error(
      `Параметр объекта не найден использование: {userkeys: ...}`
    );
  }

  // Свойства «Параметры».
  const userKeys = options.userKeys || null;
  const order = options.order || false;
  // const ref = options.ref || window;
  const ref = useRef<HTMLElement>(null);

  // Реагировать крючки.
  const [keyPress, setKeyPress] = useState<boolean>(false);
  const [anyKeyPressed, setAnyKeyPressed] = useState<string[]>([]); // новое с массивами
  // console.log("anyKeyPressed : " + anyKeyPressed); // нажимаемые клвш

  // Ссылка, чтобы определить, была ли уже нажата клавиша.
  const prevKey = useRef<string>("");

  const settings: Settings = {
    type: null,
    // objRef: ref,
    downHandler: () => {},
    upHandler: () => {},
    useEffect: () => {},
    output: false,
  };

  const setData = (settings: Settings) => {
    // console.log("3 : " + 3);
    // Убедитесь, что у нас есть свойство «пользователя»
    if (userKeys) {
      // Проверьте, является ли объект строкой, если это так
      // «Опция» объект.
      if (typeof userKeys === "string") {
        settings.output = keyPress;
        settings.downHandler = downHandler;
        settings.upHandler = upHandler;
        settings.useEffect = Init;
        settings.type = "STRING";
      }
      // Проверьте, является ли объект массивом, если это так, добавьте свойства Multikeys
      // «Опция» объект.
      else if (Array.isArray(userKeys)) {
        settings.output = areKeysPressed(userKeys, anyKeyPressed);
        settings.downHandler = downMultiHandler;
        settings.upHandler = upMultiHandler;
        settings.useEffect = Init;
        settings.type = "ARRAY";
      } else if (Number.isInteger(userKeys)) {
        throw new Error(
          `Invalid 'userKeys' property: must be {userKeys:'KEY'} or {userKeys:[KEY, ...]}`
        );
      }
    } else {
      throw new Error(
        `Invalid 'userKeys' property: must be {userKeys:'KEY'} or {userKeys:[KEY, ...]}`
      );
    }

    return settings;
  };

  const downHandler = ({ key }: KeyboardEvent) => {
    // Избежать этой функции, если эти два значения соответствуют
    // (Доказательство, что клавиша уже нажата).
    if (prevKey.current === userKeys) return;
    if (key === userKeys) {
      setKeyPress(true);
      // Установите Prevkey для будущей ссылки.
      prevKey.current = key;
    }
  };

  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === userKeys) {
      setKeyPress(false);
      // сбросить ценность предварительного
      prevKey.current = "";
    }
  };

  const downMultiHandler = ({
    key,
    repeat,
  }: KeyboardEvent & { repeat?: boolean }) => {
    // Примечание: предотвращает запись двойного ключа в массиве
    if (repeat) return;
    setAnyKeyPressed((prevState) => [...prevState, key]);
  };

  const upMultiHandler = ({ key }: KeyboardEvent) => {
    // Примечание: необходимо снова позвонить в Set State из-за того, как работает состояние.
    // В противном случае потребуется, чтобы функция спешилась и переоценивает, что в порядке.
    setAnyKeyPressed((prevState) => prevState.filter((item) => item !== key));
  };

  // `нажаты клавиши`
  const areKeysPressed = (
    keys: string[], // массив клвш или 0 ?
    pressed: string[] // сост ? anyKeyPressed `любая нажатая клавиша`. в консоле - нажимаемые клвш
  ): boolean => {
    // Создать новый массив
    const required = [...keys];

    // любой порядок'. Вернуть массив, который не имеет соответствующих предметов
    const anyOrder = required.filter((itemA) => {
      !pressed.some((itemB) => itemB === itemA);
    });

    // `порядок`. Проверяем, совпадают ли 'keys' и 'Pressed' и что входные записи для 'Pressed' идентичны по порядку.
    const inOrder =
      required.length === pressed.length &&
      required.every((value, index) => {
        value === pressed[index];
      });

    // Если «Порядок» не был установлен, используйте расчет «А -А -А -ОРУК».
    // В противном случае используйте расчет «inorder».
    return !order ? anyOrder.length === 0 : inOrder;
  };

  function Init() {
    useEffect(() => {
      // Если «ref» после инициализации имеет свойство «текущего», то это относится
      // к указанному элементу, в этом случае «элемент» должен ссылаться на это.
      // В противном случае продолжайте состояние по умолчанию (объект окна).
      let element: any /* = ref.current ? ref.current : ref */;
      if (ref.current instanceof HTMLElement) {
        element = ref.current;
      } else {
        element = window; // или какую-то другую логику
      }

      // Добавить слушателей событий
      element.addEventListener("keydown", settings.downHandler);
      element.addEventListener("keyup", settings.upHandler);
      //console.log('useAllKeyPress - hookAsMount');
      return () => {
        element.removeEventListener("keydown", settings.downHandler);
        element.removeEventListener("keyup", settings.upHandler);
        //console.log('useAllKeyPress - hookAsUnmount');
      };
    }, []); // Пустое массив гарантирует, что эффект работает только на креплении и разоблачении
  }

  /**
   * Настройте объект «Настройки».
   */
  setData(settings);

  /**
   * Инициализировать слушателей событий
   */
  settings.useEffect();

  /**
   * Возвращает «логическое» значение с входов клавиатуры
   */
  return settings.output;
}

export { useAllKeysPress };
