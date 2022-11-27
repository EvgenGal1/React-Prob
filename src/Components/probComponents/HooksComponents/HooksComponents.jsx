// Сбор Компонентов кода с hooks
import React, { useState } from "react";
import "./hooks.scss";

// подкл. Comp HOOKS
import { CompetitiveMode } from "./CompetitiveMode/CompetitiveMode";
import { PressKey } from "./PressKey/PressKey.jsx";
import { LocalStorage } from "./LocalStorage/LocalStorage.jsx";

// подкл. UI блоков
import { ArrowAccordionFnComp } from "../../miniBlocksComponents/includes/ArrowAccordion.jsx";

// подкл.всех Компонентов hooks =======================================================================================
const HooksComponents = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(true); // временно на true
  // для управ с h1
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };
  return (
    <div className="HooksComponents accordion">
      <div className="HooksComponents__descript">
        <h1
          className={openArrowAccord ? "_active" : ""}
          // для управ с h1
          onClick={() => {
            handleClickRef();
          }}
        >
          Различные HOOKИ
        </h1>
        <div className={openArrowAccord ? "openDop" : ""}>
          Проверка различных hooks. Как встроеных, новых так и кастомных
        </div>
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      <div
        className={`HooksComponents__content${
          openArrowAccord ? " openCont" : ""
        }`}
      >
        <CompetitiveMode />
        <PressKey />
        <LocalStorage />
      </div>
      <div className="HooksComponents__frame">HooksComponents</div>
    </div>
  );
};
export default HooksComponents;
