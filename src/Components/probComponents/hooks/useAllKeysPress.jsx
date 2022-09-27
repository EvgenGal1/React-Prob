import { useState, useEffect, useRef } from "react";

/**
 * A custom hook to detect when the user is pressing a specific key or a collection of keys
 * @author Melvyn Phillips (Numel2020)
 * @link https://github.com/Numel2020
 * @param {object} -  User options
 * @returns {boolean} - TRUE returns a match.
 */

function useAllKeysPress(options) {
  // Check that 'options' is an object.
  if (!options || Object.keys(options).length === 0) {
    throw new Error(`No object parameter found use: {userKeys: ... } `);
  }

  // 'options' properties.
  const userKeys = options.userKeys || null;
  const order = options.order || false;
  const ref = options.ref || window;

  // React hooks.
  const [keyPress, setKeyPress] = useState(false);
  const [anyKeyPressed, setAnyKeyPressed] = useState([]); // new with arrays

  // A reference to determine if a key has been pressed already.
  const prevKey = useRef("");

  const settings = {
    type: null,
    objRef: ref,
    downHandler: undefined,
    upHandler: undefined,
    useEffect: null,
    output: null,
  };

  const setData = (settings) => {
    // Check that we have a 'userKey'  property
    if (userKeys) {
      // Check if the Object is a string, if so add the 'singleKey' properties to
      // 'option' object.
      if (typeof userKeys === "string") {
        settings.output = keyPress;
        settings.downHandler = downHandler;
        settings.upHandler = upHandler;
        settings.useEffect = Init;
        settings.type = "STRING";
      }
      // Check if the Object is an array, if so add the 'multiKeys' properties to
      // 'option' object.
      if (Array.isArray(userKeys)) {
        settings.output = areKeysPressed(userKeys, anyKeyPressed);
        settings.downHandler = downMultiHandler;
        settings.upHandler = upMultiHandler;
        settings.useEffect = Init;
        settings.type = "ARRAY";
      }
      if (Number.isInteger(userKeys)) {
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

  const downHandler = ({ key }) => {
    // Escape this function if these two values match
    // (proof the key has already been pressed).
    if (prevKey.current === userKeys) return;
    if (key === userKeys) {
      setKeyPress(true);
      // set prevKey for future reference.
      prevKey.current = key;
    }
  };

  const upHandler = ({ key }) => {
    if (key === userKeys) {
      setKeyPress(false);
      // reset the value of prevKey
      prevKey.current = "";
    }
  };

  const downMultiHandler = ({ key, repeat }) => {
    // NOTE: prevents double key entry in array
    if (repeat) return;

    setAnyKeyPressed((prevState) => [...prevState, key]);
  };

  const upMultiHandler = ({ key }) => {
    // NOTE: Needed to call on set state again due to how state works.
    // Otherwise would need for the function to dismount and remount which is not wanted.
    setAnyKeyPressed((prevState) => [...prevState]);
    setAnyKeyPressed((prevState) => [
      ...prevState.filter((item) => item !== key),
    ]);
  };

  const areKeysPressed = (keys = [], Pressed = []) => {
    // Create a new Array
    const required = [...keys];

    // Return an array which does not have matching items of
    // 'Pressed'
    const anyOrder = required.filter((itemA) => {
      return !Pressed.some((itemB) => itemB === itemA);
    });

    // Check that 'keys' and 'Pressed' match and that the input
    // entries of 'Pressed' are identically in order.
    const inOrder =
      required.length === Pressed.length &&
      required.every((value, index) => {
        return value === Pressed[index];
      });

    let result;

    // If 'order' has not been set use the 'anyOrder' calculation.
    // otherwise use the 'inOrder' calculation.
    !order ? (result = anyOrder.length === 0) : (result = inOrder);

    return result;
  };

  function Init() {
    useEffect(() => {
      // If 'ref' after initialisation has the property of 'current' then it refers
      // to a referenced element in which case 'element' should refer to THIS.
      // Otherwise proceed with the default state (the window object).
      const element = ref.current ? ref.current : ref;

      // Add event listeners
      element.addEventListener("keydown", settings.downHandler);
      element.addEventListener("keyup", settings.upHandler);
      //console.log('useAllKeyPress - hookAsMount');
      return () => {
        element.removeEventListener("keydown", settings.downHandler);
        element.removeEventListener("keyup", settings.upHandler);
        //console.log('useAllKeyPress - hookAsUnmount');
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  }

  /**
   * Configure 'settings' object.
   */
  setData(settings);

  /**
   * Initialise the event listeners
   */
  settings.useEffect();

  /**
   * Returns a 'boolean' value from keyboard inputs
   */
  return settings.output;
}

export default useAllKeysPress;
