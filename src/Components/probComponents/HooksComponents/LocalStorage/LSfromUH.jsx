import React, { useState } from 'react'
import { useLocalStorageUH } from "../../../../hooks/useLocalStorageUH";
import { ArrowAccordionFnComp } from "../../../miniBlocksComponents/includes/ArrowAccordion.jsx";

export const LSfromUH = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  // Аналогично useState, но первый аргумент является ключом к значению в локальном хранилище.
  const [name, setName] = useLocalStorageUH("name", "Bob");
  const [arr, setArr] = useLocalStorageUH("arrr", [0, 1, 2]);

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
        /></div>
      <div className={`LSfromUH__content---${openArrowAccord ? " openCont" : ""}`}><div>
        Строка из input{" "}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
        <div>
          Массив с +1 эл. {" "}
          <button style={{ /* width: '100px', height: '100px', */ background: 'blue', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => {
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
        </div></div>
    </div>
  )
};
//export {LSfromUH}