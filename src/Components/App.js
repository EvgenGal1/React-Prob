import React from "react";
// подкл всех Общих SCSS файлов, собраных в один по пути "./baseComponents/App.scss". В Компонент подкл стили относящиеся только к нему. App выше всех чтоб сработали первоначальные стили/переменные/mixin
import "./App.scss";

// import Plan from "./Plan/js/Plan.js";
import Vid from "./probComponents/VidYT/Vid.js";
import ReactDoc from "./baseComponents/ReactDoc/ReactDoc.js";
import PressKey from "./probComponents/HooksComponents/PressKey/PressKey.jsx";
import HooksComponents from "./probComponents/HooksComponents/HooksComponents.jsx";
import PersistState from "./probComponents/PersistState/PersistState.js";
import ReactAccordionBox from "./probComponents/Accordions/ReactAccordionBox";
import ReactAccordionUIComponent from "./probComponents/Accordions/ReactAccordionUIComponent";

// console.log("App 0");
class GeneralComponents extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {  }
  render() {
    return (
      <div className="root-body">
        {/* {console.log("App 1")} */}
        {/* <div> */}
        {/* <div className="container"> */}
        {/* <Plan /> */}
        <Vid />
        {/* <ConditionalRendering /> */}
        {/* <ListComponent /> */}
        <hr />
        <ReactDoc />
        {/* <hr />
        <PressKey /> */}
        <hr />
        <PersistState />
        <hr />
        <HooksComponents />
        <hr />
        <ReactAccordionBox />
        <hr />
        <ReactAccordionUIComponent />
        <hr />
        {/* 11111 */}
      </div>
    );
  }
}
// для проб не рабочего кода (подкл ч/з App) ----------------------------------------------------------------------------------
// для проб не рабочего кода (подкл ч/з App) ----------------------------------------------------------------------------------

class App extends React.Component {
  render() {
    // console.log("App 2");
    return <GeneralComponents />;
  }
}

export default App;
