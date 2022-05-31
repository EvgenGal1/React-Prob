import React from "react";

class VidButton2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // по нажатию на кнопку будет менятся состояние
      name: "Button pressed",
      // isToggleOn: "OFF",
      isToggleOn: "OFFFFF",
      // isToggleOn2: true,
      // isToggleOn3: true,
      // isToggleOn2: false,
    };

    // this.isToggleOn = this.isToggleOn.bind(this);
    // this.props.handleClick2 = this.state.handleClick2.bind(this);
  }

  render() {
    return (
      <button
        className="vid-button__twoexp_content---"
        onClick={() => {
          // по клику вызывается fn()handleChange переданая по props и передаётся новый парам для текста. Нов парм передаём в родителя
          this.props.handleChange(this.state.isToggleOn);
          // this.props.handleChange(); // аналогично/альтернатива
        }}
      >
        <span className="spmdnon">КНП + изменен.: </span>{" "}
        {this.props.isToggleOn ? "ONNNN" : "OFFFFF"}
      </button>
    );
  }
}

// onClick={() => {
//   this.props.updateData(this.state.name);
// }}
// >

export default VidButton2;
