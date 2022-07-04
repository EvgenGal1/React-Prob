import React from "react";
class ArrowAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openArrowAccord: false,
    };
  }
  // handleClickRef() {
  //   this.RefActivCl.current.classList.toggle("_active");
  //   this.RefOpenDop.current.classList.toggle("openDop");
  //   this.RefOpenCont.current.classList.toggle("openCont");
  // }
  toggleArrowAccord() {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
  }
  render() {
    return (
      console.log("ArrowAccord this: " + this.state.openArrowAccord),
      console.log("ArrowAccord prop: " + this.props.openArrowAccord),
      (
        <>
          {/* {this.props.toggleArrowAccord(this.state.openArrowAccord) ? ( */}
          {/* {this.props.toggleArrowAccord(this.state.openArrowAccord) ? ( */}
          {this.props.openArrowAccord ? (
            <div className="arrowAccord">
              <div className="ArrowAccord-show">
                <span>ᐁ</span>
              </div>
            </div>
          ) : (
            <>
              <div className="arrowAccord">
                <div className="ArrowAccord-show">
                  <span>ᐃ</span>
                </div>
              </div>
            </>
          )}
          {/* ^ ⌆ ⌤ ⌅ ᐁ ▼ ᐳ ᐃ ᐯ ᐉ */}
        </>
      )
    );
  }
}
export default ArrowAccordion;