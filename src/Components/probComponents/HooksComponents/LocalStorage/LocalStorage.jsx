import React, { useState } from "react";

import { ArrowAccordionFnComp } from "../../../miniBlocksComponents/includes/ArrowAccordion.jsx";

import { LSfromUH } from './LSfromUH';

export const LocalStorage = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };
  return (
    <div className="LocalStorage-- accordion">
      <div className="LocalStorage__descript--">
        <h1
          className={openArrowAccord ? "_active" : ""}
          onClick={() => {
            handleClickRef();
          }}
        >Сохранение в LocalStorage</h1>
        <div className={openArrowAccord ? "openDop" : ""}></div>
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      <div
        className={`LocalStorage__content--${openArrowAccord ? " openCont" : ""
          }`}><LSfromUH /></div>
    </div>
  );
};
