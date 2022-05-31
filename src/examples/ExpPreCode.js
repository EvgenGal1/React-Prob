import React from "react";

// тег <br/> + отступ
const BrSp = ({ sp }) => {
  return (
    <>
      <br />
      {sp}
    </>
  );
};
// form
const FormLabInpLet = ({
  form1,
  sp1,
  label1,
  sp2,
  name1,
  input1,
  attr1,
  val1,
  val2,
  attr2,
  val3,
  val4,
  sp3,
  dop4,
  label2,
  name2,
  input2,
  attr3,
  val5,
  val6,
  attr4,
  val7,
  val8,
  sp4,
}) => {
  return (
    <>
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{form1}</span>
      <span className="token punctuationhtml">&gt;</span>
      {sp1}
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{label1}</span>
      <span className="token punctuationhtml">&gt;</span>
      {sp2}
      {name1}
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{input1}</span>
      {
        <>
          <AttrValMetd
            attr1={attr1}
            val1={val1}
            val2={val2}
            attr2={attr2}
            val3={val3}
            val4={val4}
          />
        </>
      }
      <span className="token punctuationhtml">/&gt;</span>
      {sp3}
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{label1}</span>
      <span className="token punctuationhtml">/&gt;</span>
      {dop4}
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{input2}</span>
      {
        <>
          <AttrValMetd
            attr1={attr3}
            val1={val5}
            val2={val6}
            attr2={attr4}
            val3={val7}
            val4={val8}
          />
        </>
      }

      <span className="token punctuationhtml">/&gt;</span>
      {sp4}
      <span className="token punctuationhtml">
        &lt;/<span className="token tag">{form1}</span>&gt;
      </span>

      {/* {prop2} */}
      {/* <AttrValMetd attr1={prop2} val1={val3} val2={val4} /> */}
      {/* {prop3} */}
    </>
  );
};
// name2.metd((param param2) =>
const NameMetdPearam = ({ name2, metd, param1, param2 }) => {
  return (
    <>
      {name2}
      <span className="token operator">.</span>
      <span className="token function">{metd}</span>
      <span className="token punctuation">((</span>
      <span className="token parameter">{param1}</span>
      {param2}
      <span className="token punctuation">)</span>{" "}
      <span className="token operator">=&gt;</span>
    </>
  );
};
// const name1 = {plus} |+| props.name1 || name2.metd((param param2) => || [1, 2, 3, 4, 5] || show - null || exp - свободно
const ConstNamePlus = ({
  name1,
  name2,
  metd,
  param1,
  param2,
  exp,
  num,
  hide,
  empty,
}) => {
  // не отражать если нужно
  if (hide) {
    return null;
  }
  let plus;
  // различные условия
  if (num) {
    // num2 = (
    plus = (
      <>
        <span className="token punctuation">[</span>
        <span className="token number">1</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token number">2</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token number">3</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token number">4</span>
        <span className="token punctuation">,</span>{" "}
        <span className="token number">5</span>
        <span className="token punctuation">]</span>
        <span className="token punctuation">;</span>
      </>
    );
  } else if (name2 && metd) {
    // } else if (name2 || metd || param1) {
    plus = (
      <NameMetdPearam
        name2={name2}
        metd={metd}
        param1={param1}
        param2={param2}
      />
    );
  } else if (empty) {
    plus = (
      <>
        <span className="token punctuation">(</span>
      </>
    );
  } else if (exp) {
    plus = <>{exp}</>;
  } else {
    plus = (
      <>
        <span className="token parameter">props</span>
        <span className="token operator">.</span>
        {name1}
      </>
    );
  }
  return (
    <>
      <span className="token keyword">const</span> {name1}{" "}
      <span className="token operator">=</span> {plus}
      {/* {num2} */}
    </>
  );
};
// attr1={val1,val2}
const AttrValMetd = ({ attr1, val1, val2, dop4, attr2, val3, val4 }) => {
  let letValue2;
  let letValue4;
  if (val2) {
    letValue2 = (
      <>
        <span className="token operator">.</span>
        <span className="token attr-name">{val2}</span>
      </>
    );
    letValue4 = (
      <>
        <span className="token operator">.</span>
        <span className="token attr-name">{val4}</span>
      </>
    );
  } else {
    letValue2 = <>{val2}</>;
    letValue4 = <>{val4}</>;
  }
  let letAttr2;
  if (attr2) {
    letAttr2 = (
      <>
        {" "}
        <span className="token attr-name">{attr2}</span>
        <span className="token  operator">=</span>
        <span className="token punctuation">&#123;</span>
        <span className="token parameter">{val3}</span>
        {letValue4}
        <span className="token punctuation">&#125;</span>
      </>
    );
  }
  return (
    <>
      {" "}
      <span className="token attr-name">{attr1}</span>
      <span className="token  operator">=</span>
      <span className="token punctuation">&#123;</span>
      <span className="token parameter">{val1}</span>
      {letValue2}
      <span className="token punctuation">&#125;</span>
      {letAttr2}
    </>
  );
};
// return (<tag(1)>{exp}</tag>) | 1 -  | br, sp1(пробел), sp2(пробел), comment
const ReturnTagExp = ({
  tag,
  attr1,
  val1,
  val2,
  exp1,
  exp2,
  show,
  br,
  sp1,
  sp2,
  comment,
  dop3,
  dop4,
  dop5,
  dop6,
}) => {
  let letAttr;
  // при передаче show не показать атрибут и значение
  // if ((attr1 || val1) && show) {
  if (show) {
    letAttr = null;
  } else if (attr1 && val1) {
    letAttr = (
      <>
        <AttrValMetd attr1={attr1} val1={val1} val2={val2} />
      </>
    );
  }
  // прятать фигурные ковычки если передали dop3
  let BracesOpen;
  let BracesClose;
  if (dop3) {
    BracesOpen = null;
    BracesClose = null;
  } else {
    BracesOpen = <span className="token punctuation">&#123;</span>;
    BracesClose = <span className="token punctuation">&#125;</span>;
  }
  return (
    <>
      <span className="token tag">return</span>{" "}
      <span className="token punctuation">(</span>
      {comment}
      {br}
      {sp1}
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{tag}</span>
      {letAttr}
      <span className="token punctuationhtml">&gt;</span>
      {dop5}
      {BracesOpen}
      {exp1}
      {dop4}
      {exp2}
      {BracesClose}
      {dop6}
      <span className="token punctuationhtml">&lt;/</span>
      <span className="token tag">{tag}</span>
      <span className="token punctuationhtml">&gt;</span>
      {br}
      {sp2}
      <span className="token punctuation">);</span>
    </>
  );
};
// <tag(1)(2)>(dop3) exp dop4 exp2 (dop3)</tag> | 1,2 - attr1|2={val1|3.val2|4} | show(boolean), br, sp1(пробел), sp2(пробел)
const TagAttrValJSX = ({
  tag,
  Name,
  name1,
  attr1,
  val1,
  val2,
  attr2,
  val3,
  val4,
  exp1,
  exp2,
  hide,
  br,
  sp1,
  sp2,
  dop1,
  dop2,
  dop3,
  dop4,
}) => {
  let letAttr1;
  let letAttr2;
  if (hide) {
    letAttr1 = null;
  } else if (attr1 && val1) {
    letAttr1 = (
      <>
        <AttrValMetd attr1={attr1} val1={val1} val2={val2} />
      </>
    );
    letAttr2 = (
      <>
        <AttrValMetd attr1={attr2} val1={val3} val2={val4} />
      </>
    );
  }
  // перем для тег/Compon/закрытТег
  let letTagName;
  let letOfTag;
  let letTagOf;
  if (tag) {
    letTagName = <span className="token tag">{tag}</span>;
    letOfTag = <span className="token punctuationhtml">&gt;</span>;
    letTagOf = (
      <>
        <span className="token punctuationhtml">&lt;/</span>
        <span className="token tag">{tag}</span>
        <span className="token punctuationhtml">&gt;</span>
      </>
    );
  } else if (Name) {
    letTagName = <span className="token class-name">{Name}</span>;
    letOfTag = null;
    letTagOf = (
      <>
        <span className="token punctuationhtml">/&gt;</span>
      </>
    );
  } else if (name1) {
    letTagName = <span className="token constName">{name1}</span>;
    letOfTag = null;
    letTagOf = (
      <>
        <span className="token punctuationhtml">/&gt;</span>
      </>
    );
  }
  // прятать фигурные ковычки если передали dop3 и стиль exp1
  let BracesOpen;
  let BracesClose;
  let LetExp1;
  if (dop3) {
    BracesOpen = null;
    BracesClose = null;
    LetExp1 = <span className="token constName ">{exp1}</span>;
  } else {
    BracesOpen = <span className="token punctuation">&#123;</span>;
    BracesClose = <span className="token punctuation">&#125;</span>;
    LetExp1 = <span className="token parameter">{exp1}</span>;
  }
  return (
    <>
      {dop1}
      <span className="token punctuationhtml">&lt;</span>
      {letTagName}
      {letAttr1}
      {letAttr2}
      {letOfTag}
      {br}
      {sp1}
      {BracesOpen}
      {LetExp1}
      {dop4}
      {exp2}
      {BracesClose}
      {br}
      {sp2}
      {/* {letName1} */}
      {letTagOf}
      {dop2}
    </>
  );
  // }
};
// <Name|name2 prop1=(3)val1 val2(3) dop4 prop2 prop3 />
const ComponLet = ({
  name,
  name2,
  prop1,
  dop3,
  val1,
  val2,
  dop4,
  prop2,
  prop3,
}) => {
  let letValue2;
  if (val2) {
    letValue2 = (
      <>
        <span className="token operator">.</span>
        <span className="token attr-name">{val2}</span>
      </>
    );
  } else {
    letValue2 = <>{val2}</>;
  }

  let letName2;
  if (name2) {
    letName2 = (
      <>
        <span className="token class-name">{name2}</span>{" "}
      </>
    );
  } else {
    letName2 = (
      <>
        {
          <>
            <span className="token class-name">{name}</span>{" "}
          </>
        }
      </>
    );
  }

  // прятать фигурные ковычки если передали dop3
  let BracesOpen;
  let BracesClose;
  if (dop3) {
    BracesOpen = null;
    BracesClose = null;
  } else {
    BracesOpen = <span className="token punctuation">&#123;</span>;
    BracesClose = <span className="token punctuation">&#125;</span>;
  }

  return (
    <>
      <span className="token punctuationhtml">&lt;</span>
      {letName2}
      <span className="token attr-name">{prop1}</span>
      <span className="token operator">=</span>
      {BracesOpen}
      <span className="token parameter">{val1}</span>
      {letValue2}
      {BracesClose}
      {}
      {dop4}
      {prop2}
      {/* <AttrValMetd attr1={prop2} val1={val3} val2={val4} /> */}
      {prop3}
      <span className="token punctuationhtml">/&gt;</span>
    </>
  );
};
// коментарии - show(state|props), com1, com2 - комментарии 1ый(по умолчанию),2ой(замена)
const CondRender = ({ show, value1, value2 }) => {
  // на условии if else
  // if (show) {
  //   return <>{value1}</>;
  // } else {
  //   return <>{value2}</>;
  // }
  // на условном операторе
  return <>{show ? value1 : value2}</>;
};
// function nameFn(props) {
const FuncNameProps = ({ nameFn, param1, param2 }) => {
  return (
    <>
      <span className="token keyword">function</span>{" "}
      <span className="token class-name">{nameFn}</span>
      <span className="token punctuation">(</span>
      <span className="token parameter">props</span>
      {/* <span className="token parameter">{param1}</span> */}
      <span className="token parameter">{param2}</span>
      <span className="token punctuation">)</span>{" "}
      <span className="token punctuation">&#123;</span>
    </>
  );
};
// покдл и отрисовка id root
class ConstRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    return (
      <>
        <span className="token keyword">const</span> root{" "}
        <span className="token operator">=</span> ReactDOM
        <span className="token operator">.</span>
        <span className="token function">createRoot</span>
        <span className="token punctuation">(</span>document
        <span className="token operator">.</span>
        <span className="token function">getElementById</span>
        <span className="token punctuation">(</span>
        <span className="token parameter">"root"</span>
        {/* <span className="token atrule">root</span> */}
        <span className="token punctuation">)</span>
        <span className="token punctuation">)</span>
        <span className="token punctuation">;</span>
        <br />
        root
        <span className="token operator">.</span>
        <span className="token function">render</span>
        <span className="token punctuation">(</span>
        <span className="token punctuationhtml">&lt;</span>
        {/* <span className="token class-name">{this.props.name}</span> */}
        {this.props.nameRoot}
        <span className="token punctuationhtml">/&gt;</span>
        <span className="token punctuation">)</span>
        <span className="token punctuation">;</span>
      </>
    );
  }
}

// ОБЩИЙ EXPORT FN
export {
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
  ConstRoot,
};
// Экспорт «по умолчанию» (импортирован как «contextexp») не был найден в ./contextexp.js '(модуль не имеет экспорта)
// Ошибка анализа: только выражения, функции или классы разрешены в качестве экспорта `default`
// Ошибка анализа: `brsp1` уже экспортируется.Экспортируемые идентификаторы должны быть уникальными.

// Назначьте объект переменной перед экспортом по умолчанию модуля
