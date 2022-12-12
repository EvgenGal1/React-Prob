import React, { useState } from "react";
import { ArrowAccordionFnComp } from "../../../miniBlocksComponents/includes/ArrowAccordion.jsx";

// !!! https://www.mousedc.ru/learning/523-forma-dobavlenie-udalenie-izmenenie-element-steyt-react/
// ChangeEl. Добавить, удалить, изменить эл.
function ChangeEl() {
  const [arr, setArr] = useState(["Тише", "мыши", "кот", "на", "крыше"]);
  const [value, setValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  console.log("value 0 ", value);
  console.log("editIndex 0 ", editIndex);

  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);

  // const result2 = notes.map((note, index) => {
  //   return <p key={index} onClick={() => setEditNum(index)}>
  //     {note}
  //   </p>;
  // });

  const result = arr.map((element, index) => {
    return (
      <span
        key={index}
        onClick={() => {
          // edit(index);
          setEditIndex(index);
          // setEditIndex(editIndex.push(index));
          console.log("index ", index);
        }}
        onDoubleClick={() => remove(index)}
        style={{ marginLeft: "5px" }}
      >
        {element}
      </span>
    );
  });

  // редактирование элемента
  function edit(index) {
    console.log("index e ", index);
    console.log("editIndex e ", editIndex);
    console.log("value e ", value);
    setArr([
      ...arr.slice(0, editIndex),
      // ...arr.slice(0, index),
      index.target.value,
      // value,
      ...arr.slice(editIndex + 1),
      // ...arr.slice(index + 1)
    ]);
  }
  // function changeItem(event) {
  //   setNotes(
  //     [
  //       ...notes.slice(0, editNum),
  //       event.target.value,
  //       ...notes.slice(editNum + 1)
  //     ]);
  // }

  // завершение редактирования
  function stopEdit() {
    setEditIndex(null);
  }

  // удаление эл.
  function remove(index) {
    console.log("del ", 1);
    setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
  }

  // добавление элемента
  function add() {
    setArr([...arr, value]);
  }

  // изменение содержания поля input
  function changeValue(event) {
    setValue(event.target.value);
  }

  // поле и кнопка
  let fields;
  // <input value={editNum ? notes[editNum]
  //   : ''} onChange={changeItem} />
  // для редактирования элемента
  if (editIndex) {
    console.log("if ");
    fields = (
      <div>
        <input value={arr[editIndex]} onChange={edit} />
        {/* <input value={arr[editIndex]} onChange={() => { edit(editIndex) }} /> */}
        {/* <input value={editIndex ? arr[editIndex] : ""} onChange={edit} /> */}
        <button onClick={stopEdit}>Изменить элемент</button>
      </div>
    );
  } else {
    console.log("els");
    // для добавления нового элемента
    fields = (
      <div>
        <input value={value} onChange={changeValue} />
        <button onClick={add}>Добавить элемент</button>
      </div>
    );
  }

  return (
    <div className="ChangeEl">
      {result}
      {fields}
    </div>
  );
}

// !!! https://www.mousedc.ru/learning/534-forma-izmenenit-obekt-massiv-steyt-react/
// Inpt3. Измен сразу 3 эл.
const mouseText = [
  {
    id: "tl2zI5J3IbLwukybTEsIxXXb6",
    prop1: "Тише",
    prop2: "мыши",
    prop3: "кот на крыше",
  },
  {
    id: "ViWgVtvU2qRo6huLg18DdYuio",
    prop1: "А котята",
    prop2: "ещё",
    prop3: "выше",
  },
];
function Inpt3() {
  const [objArr, setValue] = useState(mouseText);
  const [idToEdit, setIdToEdit] = useState(null); // id объекта, который сейчас редактируется

  function getValue(prop, event) {
    // получение значения свойства
    return objArr.reduce((res, obj) => {
      if (obj.id === idToEdit) {
        return obj[prop];
      } else {
        return res;
      }
    }, "");
  }

  function change(prop, event) {
    // изменение input поля
    setValue(
      objArr.map((obj) => {
        if (obj.id === idToEdit) {
          return { ...obj, [prop]: event.target.value };
        } else {
          return obj;
        }
      })
    );
  }

  const result = objArr.map((obj) => {
    return (
      <p key={obj.id}>
        {obj.prop1}
        {obj.prop2}
        {obj.prop3}

        <button onClick={() => setIdToEdit(obj.id)}>Изменить</button>
      </p>
    );
  });

  return (
    <div className="Inpt3">
      {result}

      <br />
      <input
        value={getValue("prop1")}
        onChange={(event) => change("prop1", event)}
      />
      <input
        value={getValue("prop2")}
        onChange={(event) => change("prop2", event)}
      />
      <input
        value={getValue("prop3")}
        onChange={(event) => change("prop3", event)}
      />

      <br />
      <button onClick={() => setIdToEdit(null)}>Сохранить изменения</button>
    </div>
  );
}

// !!! https://www.code.mu/ru/javascript/framework/react/book/prime/structures/elements-editing-form/
// ChangeElFromTD. изменить элемент
function ChangeElFromTD() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);

  const result = notes.map((note, index) => {
    return (
      <p key={index} onClick={() => setEditNum(index)}>
        {note}
      </p>
    );
  });

  function changeItem(event) {
    setNotes([
      ...notes.slice(0, editNum),
      event.target.value,
      ...notes.slice(editNum + 1),
    ]);
  }

  return (
    <div className="ChangeElFromTD">
      {result}
      <input value={editNum ? notes[editNum] : ""} onChange={changeItem} />
    </div>
  );
}

// !!! https://www.codingdeft.com/posts/react-usestate-array/
// DecInCre. Добавить, удалить, + или - к эл.
function DecInCre() {
  // fn() рандомных чисел до 100 с округлением
  function getRandomNumber(max = 100) {
    return Math.round(Math.random() * max); /* floor */ /* round */ /* trunc */
  }
  // начальный массив длиной 5
  const INITIAL_LIST = Array.from({ length: 5 }, () => getRandomNumber());

  const [list, setList] = useState(INITIAL_LIST);
  const incrementNumber = (oper, index) => {
    setList((existingItems) => {
      return [
        ...existingItems.slice(0, index),
        oper === "+" ? existingItems[index] + 1 : existingItems[index] - 1,
        ...existingItems.slice(index + 1),
      ];
      // return existingItems.map((item, j) => {
      //   return j === index ? item + 1 : item;
      // });
    });
  };

  const addItemToStart = () => {
    setList((existingItems) => {
      return [getRandomNumber(), ...existingItems];
      // return [getRandomNumber()].concat(existingItems);
    });
  };

  const addItemToEnd = () => {
    setList((existingItems) => {
      return [...existingItems, getRandomNumber()];
      // return existingItems.concat([getRandomNumber()]);
    });
  };

  const deleteItemFromStart = () => {
    setList((existingItems) => {
      return existingItems.slice(1);
      // return existingItems.filter((item, i) => i !== 0);
    });
  };

  const deleteItemFromEnd = () => {
    setList((existingItems) => {
      return existingItems.slice(0, existingItems.length - 1);
      // return existingItems.filter((item, i) => i !== existingItems.length - 1);
    });
  };

  const addItemInBetween = () => {
    setList((existingItems) => {
      const randomIndex = getRandomNumber(existingItems.length);
      const randomNumber = getRandomNumber();
      return [
        ...existingItems.slice(0, randomIndex),
        randomNumber,
        ...existingItems.slice(randomIndex),
      ];

      // return existingItems.reduce(
      //   (prev, x, i) => prev.concat(i === randomIndex ? [randomNumber, x] : x),
      //   []
      // );
    });
  };

  const removeItemInBetween = () => {
    setList((existingItems) => {
      const randomIndex = getRandomNumber(existingItems.length);
      return [
        ...existingItems.slice(0, randomIndex),
        ...existingItems.slice(randomIndex + 1),
      ];

      // return existingItems.reduce(
      //   (prev, x, i) => prev.concat(i === randomIndex ? [] : x),
      //   []
      // );
    });
  };
  return (
    <div className="DecInCre">
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <button onClick={addItemToStart}>Добавить эл. в Начало</button>
          <button onClick={addItemInBetween}>Добавить эл. Между</button>
          <button onClick={addItemToEnd}>Добавить эл. в Конец</button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* <button onClick={addItemToEnd}       >Добавить эл. в Конец</button> */}
          <button onClick={deleteItemFromStart}>Удалить эл. в Начало</button>
          <button onClick={removeItemInBetween}>Удалить элм. Между</button>
          <button onClick={deleteItemFromEnd}>Удалить элм. в Конец</button>
        </div>
      </div>
      <ul>
        {list.map((item, i) => {
          return (
            <li key={i}>
              <button
                title="decrement"
                onClick={() => incrementNumber("-", i)}
                style={{ padding: "5px", background: "yellow" }}
              >
                -
              </button>
              <span
                style={{
                  display: "inline-block",
                  width: "25px",
                }}
              >
                {item}
              </span>
              <button
                title="increment"
                onClick={() => incrementNumber("+", i)}
                style={{ padding: "5px", background: "yellow" }}
              >
                +
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const LSdiscord = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  return (
    <div className="LSdiscord accordion" style={{ position: "relative" }}>
      <div className="LSdiscord__descript">
        <h3
          className={openArrowAccord ? "_active" : ""}
          onClick={() => {
            handleClickRef();
          }}
        >
          LSdiscord
        </h3>
        <div className={openArrowAccord ? "openDop" : ""}></div>
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      <div
        className={`LSdiscord__content--${openArrowAccord ? " openCont" : ""}`}
      >
        <ChangeEl />
        <Inpt3 />
        <ChangeElFromTD />
        <DecInCre />
      </div>
    </div>
  );
};
//export {LSdiscord}
