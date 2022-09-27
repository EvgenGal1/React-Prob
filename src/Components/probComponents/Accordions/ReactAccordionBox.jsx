/** @jsx React.DOM **/
import React from "react";
import "./ReactAccordionBox.scss";

// подкл. UI блоков
import ArrowAccordion from "../../../js/includes/ArrowAccordion.js";

// !!! по примеры - https://reactjsexample.com/react-accordion-box/

class ReactAccordionBoxItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      class: "section",
    };
    this.RefActivCl = React.createRef();
    this.RefOpenDop = React.createRef();
    this.RefOpenCont = React.createRef();

    this.handleClick = this.handleClick.bind(this);
    this.getInitialState = this.getInitialState.bind(this);
  }

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  handleClick() {
    if (this.state.open) {
      this.setState({
        open: false,
        class: "section",
      });
    } else {
      this.setState({
        open: true,
        class: "section open",
      });
    }
  }

  getInitialState() {
    return {
      open: false,
      class: "section",
    };
  }

  render() {
    return (
      <div className={this.state.class}>
        <button></button>
        <div className="sectionhead" onClick={this.handleClick}>
          {this.props.title}
        </div>
        <div className="articlewrap">
          <div className="article">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

class ReactAccordionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openArrowAccord: true,
    };
    this.RefActivCl = React.createRef();
    this.RefOpenDop = React.createRef();
    this.RefOpenCont = React.createRef();
  }
  handleClickRef() {
    this.RefActivCl.current.classList.toggle("_active");
    this.RefOpenDop.current.classList.toggle("openDop");
    this.RefOpenCont.current.classList.toggle("openCont");
    // this.setState((prevState) => ({
    //   openArrowAccord: !prevState.openArrowAccord,
    // }));
  }
  toggleArrowAccord = () => {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
  };
  render() {
    return (
      <div className="ReactAccordionBox accordion">
        <div
          className="ReactAccordionBox__descript"
          ref={this.RefActivCl}
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
        >
          {/* <h1>00{this.props.title}</h1> */}
          <h1>ReactAccordionBox</h1>
          <p style={{ display: "none" }} ref={this.RefOpenDop}>
            по примеру - https://reactjsexample.com/react-accordion-box/
          </p>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div ref={this.RefOpenCont} className="ReactAccordionBox__content">
          <ReactAccordionBoxItems title="Section Title One">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo
            harum voluptas aliquid rem possimus nostrum excepturi!
          </ReactAccordionBoxItems>
          <ReactAccordionBoxItems title="Section Title Two">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo
            harum voluptas aliquid rem possimus nostrum excepturi!
          </ReactAccordionBoxItems>
          <ReactAccordionBoxItems title="Section Title Three">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo
            harum voluptas aliquid rem possimus nostrum excepturi!
          </ReactAccordionBoxItems>
        </div>
      </div>
    );
  }
}

export default ReactAccordionBox;
