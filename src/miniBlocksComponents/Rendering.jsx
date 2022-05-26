import React from "react";
import "./Rendering.scss";

class Rendering extends React.Component {
  //  constructor(props) {
  // super(props);
  //  state = {  }
  //  }
  render() {
    return (
      <div
        className="rendering"
        style={{
          color: "#8d0000",
          textAlign: "center",
          whiteSpace: "nowrap",
          width: "100%",
          // overflow: "hidden",
          fontWeight: "bold",
        }}
      >
        Rendering
        <span
          className="rendering-span"
          style={{
            display: "inline-block",
            // width: 100%;
            // отступ
            textIndent: "0",
            // animation: "rendering 0.5s linear infinite",
          }}
        >
          .....
        </span>
      </div>
    );
  }
}

export default Rendering;

//   @keyframes rendering {
//     0% {
//       transform: translate(200%, 0);
//     }
//     100% {
//       transform: translate(5%, 0);
//     }
//   }
//   @media only screen and (max-width: 440px) {
//     .rendering span {
//       animation: none;
//       padding-left: 0;
//     }
//   }
// }
