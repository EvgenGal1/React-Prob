import React from "react";

// Интерфейс для пропсов
interface VidInput1Props {
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Определяем состояние компонента (если оно нужно в будущем)
interface VidInput1State {
  // Вы можете добавить свойства состояния здесь, если они понадобятся
}

class VidInput1 extends React.Component<VidInput1Props, VidInput1State> {
  state: {};
  props: any;
  [x: string]: any;

  constructor(props: VidInput1Props) {
    super(props);
    // Здесь вы можете инициализировать состояние, если нужно
    this.state = {};
  }

  render() {
    return (
      <div className="vid-input__oneexp---">
        <div className="vid-input__oneexp_description---">Input</div>
        <input
          className="vid-input__oneexp_content---"
          value={this.props.input}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default VidInput1;
