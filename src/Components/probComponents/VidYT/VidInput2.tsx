import React from "react";

// Определяем типы для пропсов
interface VidInput2Props {
  input: string; // предполагается, что input - строка
}

// Определяем состояние, если оно нужно (в данном случае пустое состояние)
interface VidInput2State {
  // Если в будущем добавим состояние, можно будет указать его типы
}

class VidInput2 extends React.Component<VidInput2Props, VidInput2State> {
  state: {};
  props: any;
  // [x: string]: any;

  // Определить props и state в конструкторе
  constructor(props: VidInput2Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="vid-input__twoexp---">
        {/* render input */}
        <div className="vid-input__twoexp_description---">Render Input</div>
        {/* вывод в p всех получившихся значений */}
        <div className="vid-input__twoexp_content---">{this.props.input}</div>
      </div>
    );
  }
}

export default VidInput2;
