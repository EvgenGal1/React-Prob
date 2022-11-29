import React, { useState } from 'react'
import { useLocalStorageUH } from "../../../../hooks/useLocalStorageUH";
import { ArrowAccordionFnComp } from "../../../miniBlocksComponents/includes/ArrowAccordion.jsx";

// !!! https://www.mousedc.ru/learning/523-forma-dobavlenie-udalenie-izmenenie-element-steyt-react/ 
// ChangeEl. Добавить, удалить, изменить эл.
function ChangeEl() {
  const [arr, setArr] = useState(['Тише', 'мыши', 'кот', 'на', 'крыше']);
  const [value, setValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  console.log('value 0 ', value);
  console.log('editIndex 0 ', editIndex);

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
          console.log('index ', index);
        }}
        onDoubleClick={() => remove(index)}
        style={{ marginLeft: "5px" }}
      >
        {element}
      </span>
    )
  });

  // редактирование элемента
  function edit(index) {
    console.log('index e ', index);
    console.log('editIndex e ', editIndex);
    console.log('value e ', value);
    setArr(
      [
        ...arr.slice(0, editIndex),
        // ...arr.slice(0, index),
        index.target.value,
        // value,
        ...arr.slice(editIndex + 1)
        // ...arr.slice(index + 1)
      ]
    );
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
    console.log('del ', 1);
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
    console.log('if ');
    fields = <div>
      <input value={arr[editIndex]} onChange={edit} />
      {/* <input value={arr[editIndex]} onChange={() => { edit(editIndex) }} /> */}
      {/* <input value={editIndex ? arr[editIndex] : ""} onChange={edit} /> */}
      <button onClick={stopEdit}>Изменить элемент</button>
    </div>;
  }
  else {
    console.log("els");
    // для добавления нового элемента
    fields = <div>
      <input value={value} onChange={changeValue} />
      <button onClick={add}>Добавить элемент</button>
    </div>;
  }

  return <div className="ChangeEl">
    {result}
    {fields}
  </div>;
}

// !!! https://www.mousedc.ru/learning/534-forma-izmenenit-obekt-massiv-steyt-react/
// Inpt3. Измен сразу 3 эл.
const mouseText = [
  {
    id: 'tl2zI5J3IbLwukybTEsIxXXb6',
    prop1: 'Тише',
    prop2: 'мыши',
    prop3: 'кот на крыше',
  },
  {
    id: 'ViWgVtvU2qRo6huLg18DdYuio',
    prop1: 'А котята',
    prop2: 'ещё',
    prop3: 'выше',
  },
];
function Inpt3() {
  const [objArr, setValue] = useState(mouseText);
  const [idToEdit, setIdToEdit] = useState(null); // id объекта, который сейчас редактируется

  function getValue(prop, event) { // получение значения свойства
    return objArr.reduce((res, obj) => {
      if (obj.id === idToEdit) {
        return obj[prop];
      } else {
        return res;
      }
    }, '');
  }

  function change(prop, event) { // изменение input поля
    setValue(objArr.map(obj => {
      if (obj.id === idToEdit) {
        return { ...obj, [prop]: event.target.value };
      } else {
        return obj;
      }
    }));
  }

  const result = objArr.map((obj) => {
    return <p key={obj.id}>
      {obj.prop1}
      {obj.prop2}
      {obj.prop3}

      <button onClick={() => setIdToEdit(obj.id)}>Изменить</button>
    </p>;
  });

  return <div className="Inpt3">
    {result}

    <br />
    <input value={getValue('prop1')} onChange={event => change('prop1', event)} />
    <input value={getValue('prop2')} onChange={event => change('prop2', event)} />
    <input value={getValue('prop3')} onChange={event => change('prop3', event)} />

    <br />
    <button onClick={() => setIdToEdit(null)}>Сохранить изменения</button>
  </div>;
}

// !!! https://www.code.mu/ru/javascript/framework/react/book/prime/structures/elements-editing-form/
// ChangeElFromTD. изменить элемент
function ChangeElFromTD() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);

  const result = notes.map((note, index) => {
    return <p key={index} onClick={() => setEditNum(index)}>
      {note}
    </p>;
  });

  function changeItem(event) {
    setNotes(
      [
        ...notes.slice(0, editNum),
        event.target.value,
        ...notes.slice(editNum + 1)
      ]
    );
  }

  return <div className='ChangeElFromTD'>
    {result}
    <input value={editNum ? notes[editNum]
      : ''} onChange={changeItem} />
  </div>;
}

// !!! https://www.codingdeft.com/posts/react-usestate-array/
// DecInCre. Добавить, удалить, + или - к эл.
function DecInCre() {
  // fn() рандомных чисел до 100 с округлением
  function getRandomNumber(max = 100) {
    return Math.round(Math.random() * max)/* floor */ /* round */ /* trunc */
  }
  // начальный массив длиной 5
  const INITIAL_LIST = Array.from({ length: 5 }, () => getRandomNumber())

  const [list, setList] = useState(INITIAL_LIST)
  const incrementNumber = (oper, index) => {
    setList(existingItems => {
      return [
        ...existingItems.slice(0, index),
        oper === "+" ? existingItems[index] + 1 : existingItems[index] - 1,
        ...existingItems.slice(index + 1),
      ]
      // return existingItems.map((item, j) => {
      //   return j === index ? item + 1 : item;
      // });
    })
  }

  const addItemToStart = () => {
    setList(existingItems => {
      return [getRandomNumber(), ...existingItems]
      // return [getRandomNumber()].concat(existingItems);
    })
  }

  const addItemToEnd = () => {
    setList(existingItems => {
      return [...existingItems, getRandomNumber()]
      // return existingItems.concat([getRandomNumber()]);
    })
  }

  const deleteItemFromStart = () => {
    setList(existingItems => {
      return existingItems.slice(1)
      // return existingItems.filter((item, i) => i !== 0);
    })
  }

  const deleteItemFromEnd = () => {
    setList(existingItems => {
      return existingItems.slice(0, existingItems.length - 1)
      // return existingItems.filter((item, i) => i !== existingItems.length - 1);
    })
  }

  const addItemInBetween = () => {
    setList(existingItems => {
      const randomIndex = getRandomNumber(existingItems.length)
      const randomNumber = getRandomNumber()
      return [
        ...existingItems.slice(0, randomIndex),
        randomNumber,
        ...existingItems.slice(randomIndex),
      ]

      // return existingItems.reduce(
      //   (prev, x, i) => prev.concat(i === randomIndex ? [randomNumber, x] : x),
      //   []
      // );
    })
  }

  const removeItemInBetween = () => {
    setList(existingItems => {
      const randomIndex = getRandomNumber(existingItems.length)
      return [
        ...existingItems.slice(0, randomIndex),
        ...existingItems.slice(randomIndex + 1),
      ]

      // return existingItems.reduce(
      //   (prev, x, i) => prev.concat(i === randomIndex ? [] : x),
      //   []
      // );
    })
  }
  return (
    <div className="DecInCre">
      <div>
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}>
          <button onClick={addItemToStart}  >Добавить эл. в Начало</button>
          <button onClick={addItemInBetween}>Добавить эл. Между</button>
          <button onClick={addItemToEnd}    >Добавить эл. в Конец</button>
        </div>
        <div style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}>
          {/* <button onClick={addItemToEnd}       >Добавить эл. в Конец</button> */}
          <button onClick={deleteItemFromStart}>Удалить эл. в Начало</button>
          <button onClick={removeItemInBetween}>Удалить элм. Между</button>
          <button onClick={deleteItemFromEnd}  >Удалить элм. в Конец</button>
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
              <span style={{
                display: "inline-block",
                width: "25px"
              }}>{item}</span>
              <button
                title="increment"
                onClick={() => incrementNumber("+", i)}
                style={{ padding: "5px", background: "yellow" }}
              >
                +
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const LSfromUH = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(true); // временно на true 
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  // Аналогично useState, но первый аргумент является ключом к значению в локальном хранилище.
  const [name, setName] = useLocalStorageUH("name", "Bob");
  const [arr, setArr] = useLocalStorageUH("arrr", [0, 1, 2, 3, 4,]);
  const [arrObj, setArrObj] = useLocalStorageUH("arrObj", [
    5,
    { name: 'Василий', age: 35 },
    [7, 54, 2],
    true,
    function () { console.log('good'); },
    {
      id: 5, name: "Er",
      obj3: {
        idid: 5.1,
        obj4: { as: 12 }
      }
    },
    {
      "id": 1,
      "text": "One",
      "likes": "1"
    },
    {
      "id": 2,
      "text": "Two",
      "likes": "2"
    },
    { id: 3, name: "Qw" },
    {
      id: 4, name: "We",
      ar3: [9, 8, 7,]
    },
  ]);

  // ! пробы методов массива ----------------------------------------------
  // ^ ДОСТУП к эл.масс.
  // получить эл. по индексу
  // console.log('arrObj[0] ', arrObj[0]); // 5
  // измен.эл.масс.
  // console.log('arrObj[3]="false" ', arrObj[3] = "false");
  // console.log('arrObj[3] ', arrObj[3]); // false
  // получим элемент с индексом 1, который является объектом, а затем значение его свойства age
  // console.log(arrObj[1].age); // 35
  // получим элемент с индексом 2, который является массивом, а затем его элемент с индексом 1
  // console.log(arrObj[2][1]); // 55
  // получим элемент с индексом 4, т.е. функцию и выполним её
  // console.log(
  //   "%carrObj[4]() - ", "color: red;", arrObj[4](),
  // ); // вывод в GC "good", вызов в GC fn() в undefined
  // console.log(
  //   "%carrObj[4] - ", "color: yellow;", arrObj[4],
  // ); // показ fn()
  // console.log('arrObj 0 ', arrObj);
  // console.log('arrObj.at(-1) ', arrObj.at(-1)); // ^ получ послед.эл. | 0 - первый эл.
  return (
    <div className="LSfromUH--- accordion" style={{ position: "relative" }}>
      <ChangeEl />
      <Inpt3 />
      <ChangeElFromTD />
      <DecInCre />
      <div className="LSfromUH__descript---">
        <h3
          className={openArrowAccord ? "_active" : ""}
          onClick={() => {
            handleClickRef();
          }}
        >LSfromUH</h3>
        <div className={openArrowAccord ? "openDop" : ""}></div>
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      <div className={`LSfromUH__content---${openArrowAccord ? " openCont" : ""}`}>
        {/* строка */}
        <div>
          <h3>Строка из input</h3>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* массив */}
        <div>
          <h3>Массив с +1 эл.</h3>
          <button
            style={{ background: 'blue', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
            onClick={() => {
              // ДОБАВЛЕНИЕ
              // setArr([...arr, "+>"]) // ^ добавл эл. в КОНЕЦ
              setArr(["<+", ...arr,]) // ^ добавл эл. в НАЧАЛО
              // setArr(["<+", ...arr.slice(0)]) // ^ добавл. эл. в НАЧАЛО
              // setArr([...arr.slice(0, 0), ...arr.slice(0, 0, "+<", "123")]) // СБРОС в пустой масс.
              // setArr([...arr.slice(0, 0), "+<", "123", ...arr.slice(1 + 1)]) // ~ добав. в начало, НО один раз
              // setArr([...arr.slice(0, 9), "+<", "123", ...arr.slice(1 + 1)]) // добавл. весь масс вначало + эл. + 2,3,4
              // setArr([...arr.slice(0, 9), "+<", "123", ...arr.slice(0 + 0)]) // добавл. масс в начало + эл. + масс. в конце
              // setArr([arr.splice(0, 0, "<+")])
              // setArr([...arr.splice(0, 2)]) // вернул 0,1 (до 2 ind), удалил 2,3,4
              // setArr([...arr.splice(0, 0, "+>")]); // полностью обнул. масс.
              // setArr([...arr.splice(1, 0, "123")]); // запись в консоль. Вывод и LS - Сброс в []
              // setArr([...arr.splice(-1, 1)]) // удал ВСЁ кроме ПОСЛЕДН.
              // setArr([...arr.splice(0, 1)]) // удал ВСЁ кроме ПЕРВОГО.
              // arr.push("+>") // запись в консоль. Вывод и LS - НЕТ
              // setArr(arr.push("+>")) // в консоль 4 // ! ошб. arr.map is not a function 
              // setArr([arr.push("+>")]) // в консоль сначала добав. 4. Вывод и LS - сразу 4, затем 2
              // setArr([...arr.push("+>")]) // ничего // ! ошб. arr.push is not a function or its return value is not iterable
              // setArr([...arr, arr.push("777")]) // в консоль сначала добав, потом счёт в предполед. Вывод и LS - добавл. счёт в конце, НЕ эл.
              // setArr([arr, arr.push("777")]) // везде созд. подмассивы с эл. с счётом
              // setArr.push("777") // ! ошб. setArr.push is not a function

              // УДАЛЕНИЕ
              // setArr([...arr, arr.shift()]) // добав. 0 в конце  
              // const removeItem = (index) => {
              // setArr([...arr.slice(0, 1)]); // копия с 0 до 1 по ind, остал. удал.
              // setArr([ ...arr.slice(1 + 2)]); // удал 0,1,2
              // setArr([...arr.slice(0, 0), ...arr.slice(1 + 2)]); // удал 0,1,2
              // setArr([...arr.slice(0, 1), ...arr.slice(1 + 2)]); // удал 1,2
              // }
              console.log('arr onClick ', arr);
            }}
            onDoubleClick={() => {
              // ^ {/* измен.эл.масс.объ. */}
              // добавить в конец
              // arr.push("+>")
              // setArr([...arr.push("Земля")]) // ["Меркурий", "Земля", "Марс"]
              // console.log('arr onDoubleClick ', arr);
              // добавим в начало 
              // arr.unshift('Венера'); // ["Венера", "Меркурий", "Земля", "Марс"]
              // удалим последний элемент
              // arr.pop(); // ["Венера", "Меркурий", "Земля"]
              // удалим первый элемент
              // arr.shift();
              // setArr([...arr, -arr.length])
            }}
          >
            +доп+
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}>
            {arr.map((ar) => (
              <span
                key={Math.random().toString().substring(2, 7)}
                style={{ marginLeft: "5px" }}
              >
                {ar}
              </span>
            ))}
          </div>
        </div>
        {/* мас. объ. */}
        <div>
          <h3>Массив объектов многоуровневый</h3>
          <button
            style={{
              background: 'blue',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => {
              // ^ {/* измен.эл.масс.объ. */}
              // ^ 1)  
              arrObj.forEach((aP) => aP.id === 1 ? aP.text = 'Другой text' : aP = aP)
              setArrObj([...arrObj])
              console.log('arrObj onClick ', arrObj);
            }}
            onDoubleClick={() => {
              // ^ 2) 
              const arP = arrObj.find((aP) => aP.id === 2)
              arP.text = 'Замена на text 2'
              // ^ 3)
              arrObj.splice(
                99, 0,
                {
                  id: Math.random().toString().substring(2, 5),
                  name: new Date().getMilliseconds()
                }
              )
              setArrObj([...arrObj])
              console.log('arrObj onDoubleClick ', arrObj);
            }}
          >+доп+
          </button>
          <div style={{
            display: "flex",
            justifyContent: "center"
          }}>
            {arrObj.map((ob) =>
            (
              <div
                // key={ob.id + 1}
                // key={ob.length + 1}
                key={Math.random().toString().substring(2, 7)}
                style={{
                  backgroundColor: "#555",
                  padding: "2px 5px",
                  marginLeft: "5px",
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center"
                }}>
                {ob.name || ob.text}
                {/* // ! пробы Math пока неудачно */}
                {/* <span>{" "}{Math.max([ob.ar3])}</span> */}
                <span>{" "}{ob.ar3}</span>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    </div >
  )
};
//export {LSfromUH}