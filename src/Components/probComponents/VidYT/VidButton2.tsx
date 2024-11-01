import React from "react";

// Определяем типы Props
interface VidButton2Props {
  isToggleOn: boolean; // Тип, ожидаемый для isToggleOn
  handleChange: (status: string) => void; // Функция для обработки изменения
}

// Определяем типы State
interface VidButton2State {
  name: string; // Имя состояния
  isToggleOn: string; // Состояние переключателя
}

class VidButton2 extends React.Component<VidButton2Props, VidButton2State> {
  state: {
    name: string;
    isToggleOn: string;
  };
  props: any;

  constructor(props: VidButton2Props) {
    super(props);
    this.state = {
      // по нажатию на кнопку будет менятся состояние
      name: "Button pressed", // Состояние при нажатии на кнопку
      isToggleOn: "OFFFFF", // Начальное состояние переключателя
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

export default VidButton2;
