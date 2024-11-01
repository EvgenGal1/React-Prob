import React from "react";

// Определяем интерфейсы для пропсов и состояния
interface VidButton1Props {
  updateData: (name: string) => void; // метод обновления данных
}

interface VidButton1State {
  name: string; // состояние для первой кнопки
  wnames: string; // состояние для второй кнопки
  isToggleOn: boolean;
}

class VidButton1 extends React.Component<VidButton1Props, VidButton1State> {
  [x: string]: any;

  constructor(props: {} /* VidButton1Props */) {
    super(props);
    this.state = {
      // по нажатию на кнопку будет менятся состояние
      name: "ONN",
      wnames: "OFF",
      isToggleOn: true,
    };
  }

  render() {
    return (
      <div className="vid-button__oneexp_content---">
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
