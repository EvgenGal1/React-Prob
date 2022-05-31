import React from "react";
// React 17
// import ReactDOM from "react-dom";
// React 18
import { createRoot } from "react-dom/client";
// все JS/JSX файлы подкл в App.js
import App from "./Components/App.js";
// все SCSS файлы стилей подкл в App.scss
import "./index.css";

// class GeneralComponents extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   // state = {  }
//   render() {
//     return (
//       <div className="root-body">
//         {/* <div> */}
//         {/* <div className="container"> */}
//         {/* 00000 */}
//         {/* <App /> */}
//         {/* <Plan /> */}
//         <Vid />
//         {/* <ConditionalRendering /> */}
//         {/* <ListComponent /> */}
//         <hr />
//         <ReactDoc />
//         {/* 11111 */}
//       </div>
//     );
//   }
// }

// для проб не рабочего кода (подкл напрямую) ----------------------------------------------------------------------------------

// для проб не рабочего кода (подкл напрямую) ----------------------------------------------------------------------------------

// React 17
// ReactDOM.render(<GeneralGovponents />, document.getElementById("root"));
// React 18
const root = createRoot(document.getElementById("root"));
root.render(<App />);
