import React from "react";

class VidInput2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="vid-input__twoexp---">
        {/* render input */}
        <div className="vid-input__twoexp_description---">Render Input</div>
        {/* вывод в p, всех получившихся значение */}
        <div className="vid-input__twoexp_content---">{this.props.input}</div>
      </div>
    );
  }
}

export default VidInput2;
