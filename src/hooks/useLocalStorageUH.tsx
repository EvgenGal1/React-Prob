import { useState } from "react";

// Типизация для хука useLocalStorageUH с сайта https://usehooks.com/page/3
export function useLocalStorageUH<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Получить из локального хранилища по ключу
      const item = window.localStorage.getItem(key);
      // Разобрать сохраненный json или, если ни один не возвращает initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Если ошибка также возвращает initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Возвратите обернутую версию функции установки useState, которая сохраняет новое значение в localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Разрешить значение быть функцией, чтобы у нас был тот же API, что и у useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Сохранить состояние
      setStoredValue(valueToStore);
      // Сохранить в локальном хранилище
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // Более продвинутая реализация обработает случай ошибки
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
