import React from "react";
import "./ReactAccordionUIComponent.scss";

// подкл. UI блоков
import ArrowAccordion from "../../miniBlocksComponents/includes/ArrowAccordion.js";

class ReactAccordionUIComponentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      openArrowAccord: true,
    };
    this.toggle = this.toggle.bind(this);
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

  toggle() {
    this.setState({
      active: !this.state.active,
      className: "active",
    });
  }
  render() {
    const activeClass = this.state.active ? "active" : "inactive";
    const question = this.props.details;
    return (
      <div className={activeClass} onClick={this.toggle}>
        <span className="summary">{question.summary}</span>
        <span className="folding-pannel answer">{question.answer}</span>
      </div>
    );
  }
}

class ReactAccordionUIComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: sampleQuestions,
    };
    this.renderQuestion = this.renderQuestion.bind(this);
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

  renderQuestion(key) {
    return (
      <ReactAccordionUIComponentItem
        key={key}
        index={key}
        details={this.state.questions[key]}
      />
    );
  }
  render() {
    return (
      <div className="ReactAccordionUIComponent accordion">
        <div
          className="ReactAccordionUIComponent__descript"
          ref={this.RefActivCl}
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
        >
          <h1>ReactAccordionUIComponent</h1>
          <p style={{ display: "none" }} ref={this.RefOpenDop}>
            по примеру -
            https://reactjsexample.com/react-accordion-ui-component/
          </p>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div
          className="ReactAccordionUIComponent__content"
          ref={this.RefOpenCont}
        >
          {Object.keys(this.state.questions).map(this.renderQuestion)}{" "}
        </div>
      </div>
    );
  }
}
const sampleQuestions = {
  question1: {
    summary: "Столица Канады?",
    answer: "Оттава, детка !!",
  },
  question2: {
    summary: "Жизненная продолжительность бокового кита?",
    answer: "Более 200 лет !!",
  },
  question3: {
    summary: "Самый посещаемый город в мире?",
    answer: "Лондон, бродячий ребенок !!",
  },
  question4: {
    summary: "Самый теплый океан?",
    answer: "Индийский океан, это красотка!",
  },
  question5: {
    summary: "Единственное, что Рон Свансон ненавидит больше, чем лгать?",
    answer:
      "Обезжиренное молоко, это вода, которая лжет о том, чтобы быть молоком",
  },
};
export default ReactAccordionUIComponent;
