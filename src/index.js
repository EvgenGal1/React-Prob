import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./baseComponents/App.js";
import Plan from "./Plan/js/Plan.js";

const startRoot0 = () => {
  ReactDOM.render(
    <div className="root0__content">
      <React.StrictMode>
        <Plan />
      </React.StrictMode>
    </div>,
    document.getElementById("root0")
  );
};

ReactDOM.render(
  <div className="root0__body">
    <div className="root0__arrow"></div>
    <div className="root0__content">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
    <div className="root0__arrow"></div>
  </div>,
  document.getElementById("root0")
);

// function Welcome(props) {
//   return <h1>Привет, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Алиса" />
//       <Welcome name="Базилио" />
//       <Welcome name="Буратино" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <div className="root0__body">
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </div>,
//   document.getElementById("root0__content")
// );
// const startPlan = () => {
//   ReactDOM.render(
//     <div className="root0__body">
//       <React.StrictMode>
//         <Plan />
//       </React.StrictMode>
//     </div>,
//     document.getElementById("root0")
//   );
// };
// ReactDOM.render(
//   <div className="root0__body">
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </div>,
//   document.getElementById("root0")
// );

ReactDOM.render(
  <div className="root1__body">
    <button className="button__app" onClick={startRoot0}>
      План изучения React
    </button>
  </div>,
  document.getElementById("root1")
);

// Если вы хотите начать измерение производительности в вашем приложении, пропустите функцию
// Для результатов журнала (например: ReportWebVitals (Console.log))
// или отправить на конечную точку аналитики.Узнать больше: https://bit.ly/cra-vitals
// reportWebVitals();
