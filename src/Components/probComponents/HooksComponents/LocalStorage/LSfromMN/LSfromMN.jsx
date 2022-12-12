import React, { useState } from "react";

import { ArrowAccordionFnComp } from "../../../../miniBlocksComponents/includes/ArrowAccordion.jsx";

import { BooksFC } from "./components/BooksFC";
import { books } from "./data/data";

import "./LSfromMN.scss";

// !!! https://www.youtube.com/watch?v=igmAJCCSILY
export const LSfromMN = () => {
  const [openArrowAccord, setOpenArrowAccord] = useState(false);
  const handleClickRef = () => {
    setOpenArrowAccord(!openArrowAccord);
  };

  return (
    <div className="LSfromMN-- accordion" style={{ position: "relative" }}>
      <div className="LSfromMN__descript">
        <h3
          className={openArrowAccord ? "_active" : ""}
          onClick={() => {
            handleClickRef();
          }}
        >
          LSfromMN
        </h3>
        <div className={openArrowAccord ? "openDop" : ""}>
          Запись в Local Storage от Михаила непомнящего
        </div>
        <ArrowAccordionFnComp
          openArrowAccord={openArrowAccord}
          setOpenArrowAccord={setOpenArrowAccord}
        />
      </div>
      <div
        className={`LSfromMN__content--${openArrowAccord ? " openCont" : ""}`}
      >
        <BooksFC items={books} />
      </div>
    </div>
  );
};
//export {LSfromMN}
