import React, { useState } from "react";

import { ArrowAccordionFnComp } from "../../../miniBlocksComponents/includes/ArrowAccordion.jsx";

import { useToggle } from "../../../../hooks/useToggle";

export function ToogleFC() {
  const [openArrowAccord, setOpenArrowAccord] = useState(true); // временно на true
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  const [isVisible, toggleIsVisible] = useToggle(true);

  return (
    <div className="ToogleFC-- accordion">
      <div className="ToogleFC__descript--">
        <h3
          className={openArrowAccord ? "_active" : ""}
          onClick={() => {
            handleClickRef();
          }}
        >
          ToogleFC
        </h3>
        <div className={openArrowAccord ? "openDop" : ""}>
          Переключение вкл/выкл на основе условного рендеринга и useState
        </div>
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      <div
        className={`ToogleFC__content--${openArrowAccord ? " openCont" : ""}`}
      >
        <button onClick={toggleIsVisible}>Переключатель</button>
        {isVisible && (
          <>
            <div>Form Const</div>
          </>
        )}
      </div>
    </div>
  );
}
// export default ToogleFC;
