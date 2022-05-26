import React from "react";

class VidInput1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="vid-input__oneexp---">
        {/* просто input */}
        <div className="vid-input__oneexp_descript---">Input</div>
        {/* получ данные из input. value передаётся из props, + обар.событ onChange где с помошью props получ метод handleChange */}
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
