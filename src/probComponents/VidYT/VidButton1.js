import React from "react";

class VidButton1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // по нажатию на кнопку будет менятся состояние
      name: "ONN",
      wnames: "OFF",
    };
  }

  render() {
    return (
      // <div>
      // <div className="vid-button-1">
      <div className="vid-button__oneexp_content---">
        {/* Вывод состояние */}
        {/* State(name): {this.state.name} */}
        {/* State(name): {this.props.name} */}
        {/* <br />
              State(names): {this.state.names} */}
        {/* </div> */}
        {/* <div className="vid-button-12"> */}
        <button
          className="vid-button__oneexp_content---"
          // по клику вызывается fn()updateData переданая по props и передаётся новый парам для текста. Нов парм передаём в родителя
          onClick={() => {
            this.props.updateData(this.state.name);
          }}
        >
          <span className="spmdnon">1кнп name </span> {this.state.name}
        </button>
        <span></span>
        <button
          className="vid-button__oneexp_content---"
          onClick={() => {
            // this.props.handleClick(this.state.isToggleOn);
            this.props.updateData(this.state.wnames);
          }}
        >
          <span className="spmdnon">2кнп name </span> {this.state.wnames}
        </button>
        {/* </div> */}
      </div>
    );
  }
}

export default VidButton1;
