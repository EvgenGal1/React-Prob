import React, { useState } from 'react'
import { useLocalStorageUH } from "../../../../hooks/useLocalStorageUH";
import { ArrowAccordionFnComp } from "../../../miniBlocksComponents/includes/ArrowAccordion.jsx";

// !!! https://www.mousedc.ru/learning/523-forma-dobavlenie-udalenie-izmenenie-element-steyt-react/
// Удаление эл.
function DelEl() {
  const [arrDelEl, setArrDelEl] = useState(['Тише', 'мыши', 'кот', 'на', 'крыше']);
  const [value, setValue] = useState('');

  const result = arrDelEl.map((element, index) => {
    return (
      // <div>
      <span
        key={index}
        onDoubleClick={() => remove(index)}
        style={{ marginLeft: "5px" }}
      >
        {element}
      </span>
      // {/* </div> */}
    )
  });

  function remove(index) {
    setArrDelEl([...arrDelEl.slice(0, index), ...arrDelEl.slice(index + 1)]);
  }

  return (
    <div className="DelEl">
      <div>{result}</div>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button onClick={event => setArrDelEl([...arrDelEl, value])}>Добавить элемент</button>
    </div>
  )
}
// Изменить эл.
function ChangeEl() {
  const [arr, setArr] = useState(['Тише', 'мыши', 'кот', 'на', 'крыше']);
  const [value, setValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const result = arr.map((element, index) => {
    return (
      <span
        key={index}
        onClick={() => edit(index)}
        onDoubleClick={() => remove(index)}
        style={{ marginLeft: "5px" }}
      >
        {element}
      </span>
    )
  });

  // редактирование элемента
  function edit(index) {
    console.log('index ', index);
    console.log('editIndex ', editIndex);
    console.log('value ', value);
    setArr(
      [
        // ...arr.slice(0, editIndex),
        ...arr.slice(0, editIndex),
        // event.target.value,
        value,
        // ...arr.slice(editIndex + 1)
        ...arr.slice(editIndex + 1)
      ]
    );
  }

  // завершение редактирования
  function stopEdit() {
    setEditIndex(null);
  }

  // удаление эл.
  function remove(index) {
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

  // для редактирования элемента
  if (editIndex) {
    fields = <div>
      <input value={arr[editIndex]} onChange={edit} />
      <button onClick={stopEdit}>Изменить элемент</button>
    </div>;
  } else {
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
      <DelEl />
      <ChangeEl />
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