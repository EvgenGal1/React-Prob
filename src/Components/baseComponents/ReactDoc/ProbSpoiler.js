import React from "react";

// import ListsClComp from "./ListsClComp.js";
// import ClockClComp from "./ClockClComp.js";

// доп хуки
import ReactSpoiler from "react-spoiler";
// !!! не раб - npm ERR! Не удалось разрешить зависимость: Peer React@"^16.8.6" от use spoiler@1.0.0
// import { useSpoiler } from "use-spoiler";

import {
  BrSp,
  AttrValMetd,
  FormLabInpLet,
  NameMetdPearam,
  ConstNamePlus,
  ReturnTagExp,
  TagAttrValJSX,
  ComponLet,
  CondRender,
  FuncNameProps,
  ClCompLet,
  ConstRoot,
} from "../../../js/examples/ExpPreCode.js";

//  ----------------------------------------------------------------------------------
// function SpolerUseSpoler(props) {
//   // toggle(e) {
//   //   if (e && typeof e.preventDefault === "function") {
//   //     e.preventDefault();
//   //   }
//   //   this.setState({ show: !this.state.show });
//   // }
//   // render() {
//   const Tag = this.props.tag || <div />;
//   //   // const Tag = <>1212</>;
//   return (
//     <>
//       <Tag
//       //       className={`${this.props.className} react-spoiler ${
//       //         this.state.show ? "react-spoiler-shown" : "react-spoiler-hidden"
//       //       }`}
//       //       {...this.props}
//       >
//         {/* //         {this.state.show ? (
//     //           this.props.children
//     //         ) : (
//     //           <button
//     //             className={`${this.props.buttonClassName} react-spoiler-button ${
//     //               this.state.show ? "react-spoiler-shown" : "react-spoiler-hidden"
//     //             }`}
//     //             onClick={this.toggle}
//     //           >
//     //             {this.props.hiddenText || "Click to show"}
//     //           </button>
//     //         )} */}
//       </Tag>
//       {/* //       <br />
//     //    !!! не раб - npm ERR! Не удалось разрешить зависимость: Peer React@"^16.8.6" от use spoiler@1.0.0
//     // <div className="useSpoiler">
//     //   useSpoiler
//     //   <p>
//     //     Suspect Verbal Kint was {useSpoiler("Keyser Söze")} since in the
//     //     beginning. React Hook "Usspoiler
//     //     <p>
//     //       React Hook "Usspoiler " не может быть вызван в компоненте
//     //       класса.Реакционные крючки должны быть вызваны в функциональном
//     //       компоненте React или на пользовательской функции React Hook. React
//     //       Hook "Usspoiler
//     //     </p>
//     //   </p>
//     //   <h2>
//     //     {" "}
//     //     {useSpoiler(
//     //       "Narrator and Tyler Durden are actually playing two sides of the same character",
//     //       5
//     //     )}
//     //   </h2>
//     //   <p>
//     //     {(useSpoiler("Bruce Willis"), 10)} was a ghost that only one kid could
//     //     see.
//     //   </p>
//     // </div> */}
//       <br />
//     </>
//   );
//   // }
// }
class Spoiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: props.show || false,
    };
    // this.toggle = this.toggle.bind(this);
  }

  // toggle(e) {
  //   if (e && typeof e.preventDefault === "function") {
  //     e.preventDefault();
  //   }
  //   this.setState({ show: !this.state.show });
  // }

  render() {
    //   const Tag = this.props.tag || <div />;
    //   // const Tag = <>1212</>;
    return (
      //     <>
      //       <Tag
      //       className={`${this.props.className} react-spoiler ${
      //         this.state.show ? "react-spoiler-shown" : "react-spoiler-hidden"
      //       }`}
      //       {...this.props}
      //       >
      //         {this.state.show ? (
      //           this.props.children
      //         ) : (
      //           <button
      //             className={`${this.props.buttonClassName} react-spoiler-button ${
      //               this.state.show ? "react-spoiler-shown" : "react-spoiler-hidden"
      //             }`}
      //             onClick={this.toggle}
      //           >
      //             {this.props.hiddenText || "Click to show"}
      //           </button>
      //         )}
      //       </Tag>
      //       <br />
      //       <div>
      //         useSpoiler
      //         <p>
      //           Suspect Verbal Kint was {useSpoiler("Keyser Söze")} since in the
      //           beginning.
      //           React Hook "Usspoiler" не может быть вызван в компоненте класса.Реакционные крючки должны быть вызваны в функциональном компоненте React или на пользовательской функции React Hook.
      //         </p>
      //         <h2>
      //           {" "}
      //           {useSpoiler(
      //           "Narrator and Tyler Durden are actually playing two sides of the same character",
      //             5
      //           )}
      //         </h2>
      //         <p>
      //           {(useSpoiler("Bruce Willis"), 10)} was a ghost that only one kid
      //           could see.
      //         </p>
      //       </div>
      <br />
      //     </>
    );
  }
}
//  ----------------------------------------------------------------------------------

//  ----------------------------------------------------------------------------------
class SpoilerLiftingStateUp extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {  }
  //}
  render() {
    // const nodeList = Array.from(document.querySelectorAll('[selector]'))
    const spAfter = document.querySelectorAll("[LiftingStateUp__description]");
    const spolerHeaders = Array.from(
      document.querySelectorAll("[data-name='spoiler-title']")
    );
    const spolerHeaders2 = document.querySelectorAll(
      "[data-name='spoiler-title']"
    );
    // const spolerButton1 = document.querySelectorAll(
    //   "button[data-name='spoiler-title']"
    // );
    // const spolerButton = Array.from(
    //   document.querySelectorAll("button[data-name='spoiler-title']")
    // );
    const spolerContent = Array.from(
      document.querySelectorAll("[data-name='spoiler-content']")
    );
    console.log("spolerContent : " + spolerContent);
    console.log("spolerHeaders : " + spolerHeaders);
    console.log("spolerHeaders2 : " + spolerHeaders2);
    // console.log("so13 : " + spolerContent);
    // console.log("so14 : " + spolerButton);
    // spolerHeaders.forEach(function (item) {
    // spolerHeaders.map(function (item) {
    //   console.log("item : " + item);
    //   item.addEventListener("click", headerClick);
    //   console.log("item : " + item);
    // });
    // spolerHeaders.map(item) (=>() {
    //   console.log("item : " + item);
    //   item.addEventListener("click", headerClick);
    //   console.log("item : " + item);
    // });

    const letitemMap = spolerHeaders.map(function (itemMap) {
      console.log("itemMap : " + itemMap);
    });
    spolerHeaders2.forEach(function (item2) {
      console.log("item2 : " + item2);
      item2.addEventListener("click", headerClick);
    });

    function headerClick() {
      console.log("so2 : ");
      this.nextElementSibling.classList.toggle("spoiler-body");
      spolerContent.classList.toggle("spoiler-body2");
      this.spolerContent.classList.toggle("spoiler-body2");
      console.log("so3 : ");
    }

    return (
      <div className="SpoilerLiftingStateUp--">
        <div data-name="spoiler-title" className="LiftingStateUp__descript--">
          {/* <button data-name="spoiler-title" type="submit">
            Отправить
          </button> */}
          <div data-name="spoiler-title">1212</div>
          <p>123123</p>
          <h3>SpoilerStateUpClComp</h3>
          <p className="spoiler-body">Spoiler Spoiler Spoiler Spoiler</p>
          <p data-name="spoiler-content" className="spoiler-body">
            споллер1212
          </p>
          <br />
          <br />
          <div></div>
        </div>
        <div className="SpoilerLiftingStateUp__frame--">StateUp</div>
      </div>
    );
  }
}
//  ----------------------------------------------------------------------------------

//  ----------------------------------------------------------------------------------
<ReactSpoiler
  // show="true"
  show="false"
  tag="span" //решает тип визуализированного элемента
  blur="9" //Значение размытия на щелчке
  hoverBlur="2" // blur/2	Значение размытия на парящих
>
  <h1>ReactSpoiler</h1>
  <p> Click/Hover me to the magic! </p>
  <div>div</div>
  <br />
  <p>p</p>
  <br />
  <span>span</span>
</ReactSpoiler>;
//  ----------------------------------------------------------------------------------

//  ----------------------------------------------------------------------------------
class SpoilerProb extends React.Component {
  render() {
    //Spollers
    /*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/
    console.log("RD SP 1 : " + 1);
    let spollers = Array.from(document.querySelectorAll("._spoller"));
    let spollers2 = document.querySelectorAll("._spoller");
    console.log("spollersProb0 : " + spollers);
    // console.log("spollersProb2 : " + spollers2);
    // spollers.classList.toggle("_active");
    // spollers2.classList.toggle("_active");
    let spollersGo = true;
    console.log("spollersGoProb : " + spollersGo);
    if (spollers.length > 0) {
      console.log("spollersProb2 : " + spollers);
      for (let index = 0; index < spollers.length; index++) {
        const spoller = spollers[index];
        console.log("spollerProb1 : " + spoller);
        spoller.classList.toggle("_active");
        spoller.addEventListener("click", function (e) {
          // if (spollersGo) {
          //   spollersGo = false;
          //   if (
          //     spoller.classList.contains("_spoller-992") &&
          //     window.innerWidth > 992
          //   ) {
          //     return false;
          //   }
          //   if (
          //     spoller.classList.contains("_spoller-768") &&
          //     window.innerWidth > 768
          //   ) {
          //     return false;
          //   }
          // if (spoller.closest("._spollers").classList.contains("_one")) {
          //   let curent_spollers = spoller
          //     .closest("._spollers")
          //     .querySelectorAll("._spoller");
          //   for (let i = 0; i < curent_spollers.length; i++) {
          //     let el = curent_spollers[i];
          //     if (el != spoller) {
          //       el.classList.remove("_active");
          //       _slideUp(el.nextElementSibling);
          //     }
          //   }
          // }
          spoller.classList.toggle("_active");
          // _slideToggle(spoller.nextElementSibling);

          // setTimeout(function () {
          //   spollersGo = true;
          // }, 500);
          // }
        });
      }
    }
    //=================
    //SlideToggle
    let _slideUp = (target, duration = 500) => {
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = target.offsetHeight + "px";
      // target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
        target.style.display = "none";
        target.style.removeProperty("height");
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
        target.classList.remove("_slide");
      }, duration);
    };
    let _slideDown = (target, duration = 500) => {
      target.style.removeProperty("display");
      let display = window.getComputedStyle(target).display;
      if (display === "none") display = "block";

      target.style.display = display;
      let height = target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      // target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = height + "px";
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      window.setTimeout(() => {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
        target.classList.remove("_slide");
      }, duration);
    };
    let _slideToggle = (target, duration = 500) => {
      if (!target.classList.contains("_slide")) {
        target.classList.add("_slide");
        if (window.getComputedStyle(target).display === "none") {
          return _slideDown(target, duration);
        } else {
          return _slideUp(target, duration);
        }
      }
    };
    return (
      <div className="SpoilerProb">
        <div className="SpoilerProb__descript"></div>
        <div className="SpoilerProb__content">
          <div className="spollers-block _scr-item _spollers _one">
            <div className="spollers-block__item">
              <div className="spollers-block__title _spoller">Я вопрос 1</div>
              <div className="spollers-block__body">Я ответ 1</div>
            </div>
            <div className="spollers-block__item">
              <div className="spollers-block__title _spoller">Я вопрос 2</div>
              <div className="spollers-block__body">Я ответ 2</div>
            </div>
            <div className="spollers-block__item">
              <div className="spollers-block__title _spoller">Я вопрос 3</div>
              <div className="spollers-block__body">Я ответ 3</div>
            </div>
            <div className="spollers-block__item">
              <div className="spollers-block__title _spoller">Я вопрос 4</div>
              <div className="spollers-block__body">Я ответ 4</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//  ----------------------------------------------------------------------------------

//  ----------------------------------------------------------------------------------
class SpoilerTitle extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {  }
  //}
  render() {
    return (
      <div className="SpoilerTitle">
        <div className="SpoilerTitle__description">SpoilerTitle</div>
        <div className="SpoilerTitle__content"></div>
      </div>
    );
  }
}
//  ----------------------------------------------------------------------------------

//  ----------------------------------------------------------------------------------
class Foldable extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {  }
    this.state = {
      open: true,
    };
  }
  // getInitialState: function () {
  //   return { open: true };
  // },

  // handleClick() {
  //   this.setState({ buttonToggle: !this.state.buttonToggle });
  // }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div className="Foldable">
        <div className="Foldable__description">Foldable_000</div>
        <div className="Foldable__content">
          <div className="foldable">
            <div className="header" onClick={this.toggleOpen}>
              {this.props.header}
            </div>
            {/* <div className={className}> */}
            <div className="className">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

const AddToCart = ({ available }) => {
  if (!available) return null;

  return (
    <div className="full tr">
      <button className="product--cart-button">Add to Cart</button>
    </div>
  );
};
class SpoilerMy extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {  }
    this.state = {
      buttonToggle002: true,
      buttonToggle: false,
      info: {
        display: "none !important",
      },
      // date: style{{}}
    };
    this.handleClick002 = this.handleClick002.bind(this);
    this.onBtnClickHandler222 = this.onBtnClickHandler222.bind(this);
  }

  // 1
  // const handleClick () =>{
  // }

  // 2
  onBtnClickHandler(e) {
    e.preventDefault();

    var block = document.querySelector(".SpoilerMy_prod--cont");
    console.log("block : " + block);

    // block.setState({
    //   info: { display: "block !important" },
    // });
    // this.setState({
    //   info: { display: "block !important" },
    //   buttonToggle002: true,
    //   // buttonToggle002: "block",
    // });
    this.setState((prevState) => ({
      // isToggleOn002: !prevState.isToggleOn002,
      info: { display: "block !important" },
      buttonToggle002: true,
    }));
  }

  onBtnClickHandler222 = () => {
    var block = Array.from(document.querySelectorAll(".SpoilerMy_prod--cont"));
    // Array.from(document.querySelectorAll("._spoller"));
    console.log("block 01: " + block);
    var block2 = document.querySelectorAll(".SpoilerMy_prod--cont");
    console.log("block 02: " + block);
    // !!! не раб - прописать map перебор
    // block.map(function)
    // block.style.display = "block";
    // block2.style.display = "block";
    // this.block = style{{}}
    // block
    // this.setState({
    //   date: new Date(),
    // });
  };
  // componentWillMount() {
  //   this.setState({ buttonToggle: true });
  // }

  // handleClick() {
  //   this.setState({ buttonToggle: !this.state.buttonToggle });
  // }
  handleClick002 = () => {
    console.log("002 : 0");
    // handleChange3 ()  {
    this.setState((prevState) => ({
      isToggleOn002: !prevState.isToggleOn002,
    }));
    console.log("002 : 1");
  };
  render() {
    // console.log('isToggleOn002 0: ' + buttonToggle002);
    const {
      props: {},
      state: { info },
    } = this;

    const style = {
      info: {
        block: info.block,
      },
    };
    return (
      <div className="SpoilerMy">
        <div className="SpoilerMy__description">
          <h1 onClick={this.onBtnClickHandler}>SpoilerMy</h1>
        </div>
        <div className="SpoilerMy__description">
          <h1 onClick={this.onBtnClickHandler222}>SpoilerMy 222</h1>
        </div>
        <div className="SpoilerMy__content">
          <div className="SpoilerMy_prod--h3">
            <h3>SpoilerMy &gt; h3</h3>
            <p>SpoilerMy &gt; p</p>
          </div>
          <div className="SpoilerMy_prod--cont">
            <div>SpoilerMy + div/ проб 1</div>
            <div>1</div>
            <>
              <a
                // href="javascript://"
                href="#"
                className="button button--white button--center"
                onClick={this.onBtnClickHandler}
              >
                УЗНАТЬ БОЛЬШЕ О ...
              </a>
              {/* </div> */}
              <div
                style={style.block}
                className="selected-company-info__text visible-tablet disable-mobile"
              >
                some text
              </div>
            </>
          </div>
          {/* // !!! https://webformyself.com/kak-otobrazit-i-skryt-elementy-v-react/ */}
          <div className="SpoilerMy_prod--cont">
            <div onClick={this.handleClick002}>SpoilerMy + div/ проб 002</div>
            <div>
              buttonToggle 0002
              <div
                style={{
                  display: this.state.buttonToggle002 ? "none" : "block",
                }}
              >
                buttonToggle 00002
              </div>
            </div>
          </div>
          <div className="SpoilerMy_prod--cont">
            <div>SpoilerMy + div/ проб 01</div>
            <div>
              Foldable
              <Foldable header="Заголовок">
                Lorem ipsum на много строк...
              </Foldable>
            </div>
          </div>
          <div className="SpoilerMy_prod--cont">
            <div>SpoilerMy + div/ проб 2</div>
            <div>
              Возвращение Null
              <AddToCart />
            </div>
          </div>
          <div className="SpoilerMy_prod--cont">
            <div>SpoilerMy + div/ проб 3</div>
            <div>
              Троичный оператор
              {/* <div className="half">
  <p>{description}</p>
 
  {remaining === 0 ? (
    <span className="product-sold-out">Sold Out</span>
  ) : (
    <span className="product-remaining">{remaining} remaining</span>
  )}
</div> */}
            </div>
          </div>
          <div className="SpoilerMy_prod--cont">
            <div>SpoilerMy + div/ проб 4</div>
            <div>
              Ярлык
              {/* <h2>
  <span className="product--title__large">{nameFirst}</span>
  {nameRest.length > 0 && (
    <span className="product--title__small">{nameRest.join(" ")}</span>
  )}
</h2> */}
            </div>
          </div>
          <div className="SpoilerMy_prod--cont">
            <div>SpoilerMy + div/ проб 5</div>
            <div>5</div>
          </div>
          <div className="SpoilerMy_prod--cont">
            <div>SpoilerMy + div/ проб 6</div>
            <div>6</div>
          </div>
          <div className="SpoilerMy_prod--cont">
            <div>SpoilerMy + div/ проб 7</div>
            <div>7</div>
          </div>
        </div>
      </div>
    );
  }
}
//  ----------------------------------------------------------------------------------

class ProbSpoiler extends React.Component {
  //constructor(props) {
  //super(props);
  //this.state = {  }
  //}
  render() {
    return (
      <div className="ProbSpoiler">
        <div className="ProbSpoiler__description"></div>
        <div className="ProbSpoiler__content">
          <Spoiler />
          <SpoilerLiftingStateUp />
          <ReactSpoiler />
          <SpoilerProb />
          <SpoilerTitle />
          <Foldable />
          <SpoilerMy />
        </div>
      </div>
    );
  }
}

export default ProbSpoiler;
