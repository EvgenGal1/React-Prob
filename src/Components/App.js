import React from "react";
// подкл всех Общих SCSS файлов, собраных в один по пути "./baseComponents/App.scss". В Компонент подкл стили относящиеся только к нему. App выше всех чтоб сработали первоначальные стили/переменные/mixin
import "./App.scss";

// import Plan from "./Plan/js/Plan.js";
import Vid from "./probComponents/VidYT/Vid.js";
import ReactDoc from "./baseComponents/ReactDoc/ReactDoc.js";
import CommonTrifles from "./probComponents/CommonTrifles/CommonTrifles.js";
import HooksComponents from "./probComponents/hooks/HooksComponents.jsx";
import PersistState from "./probComponents/PersistState/PersistState.js";

console.log("App 0");
class GeneralComponents extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {  }
  render() {
    return (
      <div className="root-body">
        {console.log("App 1")}
        {/* <div> */}
        {/* <div className="container"> */}
        {/* <Plan /> */}
        <Vid />
        {/* <ConditionalRendering /> */}
        {/* <ListComponent /> */}
        <hr />
        <ReactDoc />
        <hr />
        <CommonTrifles />
        <hr />
        <PersistState />
        <hr />
        <HooksComponents />
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
    console.log("App 2");
    return <GeneralComponents />;
  }
}

export default App;
