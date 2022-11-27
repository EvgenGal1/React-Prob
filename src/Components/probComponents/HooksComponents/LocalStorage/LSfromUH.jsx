import React, { useState } from 'react'
import { useLocalStorageUH } from "../../../../hooks/useLocalStorageUH";
import { ArrowAccordionFnComp } from "../../../miniBlocksComponents/includes/ArrowAccordion.jsx";

export const LSfromUH = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(true); // временно на true 
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  // Аналогично useState, но первый аргумент является ключом к значению в локальном хранилище.
  const [name, setName] = useLocalStorageUH("name", "Bob");
  const [arr, setArr] = useLocalStorageUH("arrr", [0, 1, 2]);
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
  console.log('arrObj 0 ', arrObj);
  return (
    <div className="LSfromUH--- accordion" style={{ position: "relative" }}>
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
              setArr([...arr, arr.length])
            }}>+доп+</button>
          <div style={{
            display: "flex",
            justifyContent: "center"
          }}>
            {arr.map((ar) => (
              <span key={ar} style={{ marginLeft: "5px" }}>{ar}</span>
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
              // eslint-disable-next-line no-self-assign
              arrObj.forEach((aP) => aP.id === 1 ? aP.text = 'Другой text' : aP = aP) // ! ошб. 
              // setArrObj(arrObj.forEach((aP) => aP?.id === 1 ? aP.text = 'Другой text' : aP = aP)) // ! ошб. Cannot read properties of undefined (reading 'map')
              // setArrObj(...arrObj.forEach((aP) => aP?.id === 1 ? aP.text = 'Другой text' : aP = aP)) // ! ошб. arrObj.forEach(...) is not iterable (cannot read property undefined)
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