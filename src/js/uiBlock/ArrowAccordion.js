import React from "react";
class ArrowAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openArrowAccord: false,
    };
  }
  handleClickRef() {
    this.props.RefActivCl.current.classList.toggle("_active");
    this.props.RefOpenDop.current.classList.toggle("openDop");
    this.props.RefOpenCont.current.classList.toggle("openCont");
  }
  toggleArrowAccord() {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
  }
  render() {
    let openArrowAccordVar;
    if (this.state.openArrowAccord || this.props.openArrowAccord) {
      openArrowAccordVar = true;
    }
    // console.log("openArrowAccordVar : " + openArrowAccordVar);
    // console.log("this.state.openArrowAccord : " + this.state.openArrowAccord);
    // console.log("this.props.openArrowAccord : " + this.props.openArrowAccord);
    // console.log("this.props.RefActivCl.current : " + this.props.RefActivCl.current);
    return (
      // console.log("ArrowAccord this: " + this.state.openArrowAccord),
      // console.log("ArrowAccord prop: " + this.props.openArrowAccord),
      <>
        <div
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
          className="arrowAccord"
        >
          <div className="ArrowAccord-show">
            {/* <span>{this.props.openArrowAccord ? "ᐁ" : "ᐃ"}</span> */}
            <span>
              {/* {this.state.openArrowAccord || this.props.openArrowAccord */}
              {openArrowAccordVar ? "ᐁ" : "ᐃ"}
            </span>
          </div>
        </div>
        {/* ^ ⌆ ⌤ ⌅ ᐁ ▼ ᐳ ᐃ ᐯ ᐉ */}
      </>
    );
  }
}
export default ArrowAccordion;
