import React from "react";
// ??? не раб - при подкл стилей сюда, не распознаёт переменные из App.scss ($maxWidth,$md3NoErr и пр..), даже если App.scss подкл в index.js
// import "../../scss/tagPreCode.scss";

// тег <br/> + отступ
const BrSp = ({ sp }) => {
  return (
    <>
      <br />
      {sp}
    </>
  );
};
// тег select
const SelectLet = ({
  nameS,
  atrN,
  sp1,
  val1,
  val2,
  val3,
  val4,
  val5,
  val6,
  val7,
  sp2,
  seld,
}) => {
  let LetBefValS = (
    <>
      {sp2}
      {"  "}
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{"option"}</span>
      {/* {val1} */}
      {/* <AttrValMetd
        attr1={"value"}
        dop3={true}
        val1={val1}
        val2={""}
        val3={""}
      />
      <span className="token punctuationhtml">&gt;</span> */}
    </>
  );
  let LetAftValS = (
    <>
      <span className="token punctuationhtml">/&lt;</span>
      <span className="token tag">{"option"}</span>
      <span className="token punctuationhtml">&gt;</span>
    </>
  );
  let LetSeld;
  if (seld) {
    LetSeld = (
      <>
        {" "}
        <span className="token attr-name">selected</span>
      </>
    );
  }

  let LetVal1;
  if (val1) {
    LetVal1 = (
      <>
        {LetBefValS}
        {/* {sp2}
        {"  "}
        <span className="token punctuationhtml">&lt;</span>
        <span className="token tag">{"option"}</span> */}
        {/* {val1} */}
        <AttrValMetd
          attr1={"value"}
          dop3={true}
          val1={val1}
          val2={""}
          val3={""}
        />
        {LetSeld}
        <span className="token punctuationhtml">&gt;</span>
        {val1}
        {/* <span className="token punctuationhtml">/&lt;</span>
        <span className="token tag">{"option"}</span>
        <span className="token punctuationhtml">&gt;</span> */}
        {LetAftValS}
      </>
    );
  }
  let LetVal2;
  if (val2) {
    LetVal2 = (
      <>
        {LetBefValS}
        <AttrValMetd attr1={"value"} dop3={true} val1={val2} />
        <span className="token punctuationhtml">&gt;</span>
        {val2}
        {LetAftValS}
      </>
    );
  }
  let LetVal3;
  if (val3) {
    LetVal3 = (
      <>
        {LetBefValS}
        <AttrValMetd attr1={"value"} dop3={true} val1={val3} />
        <span className="token punctuationhtml">&gt;</span>
        {val3}
        {LetAftValS}
      </>
    );
  }
  let LetVal4;
  if (val4) {
    LetVal4 = (
      <>
        {LetBefValS}
        <AttrValMetd attr1={"value"} dop3={true} val1={val4} />
        <span className="token punctuationhtml">&gt;</span>
        {val4}
        {LetAftValS}
      </>
    );
  }

  return (
    <>
      {/* 123123123 */}
      {/* <select className="token"> */}
      <span className="token punctuationhtml">&lt;</span>
      {/* <span className="token tag">{"select"}</span> */}
      <span className="token tag">{nameS}</span>
      {atrN}
      <span className="token punctuationhtml">&gt;</span>
      {/* {sp1} */}
      {/* {sp1} */}
      {/* {sp2}
      {"  "}
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{"option"}</span> */}
      {/* <span className="token punctuationhtml">&lt;</span> */}
      {/* <span className="token tag">{"value"}</span> */}
      {/* {val1} */}
      {/* <span className="token punctuationhtml">/&gt;</span> */}
      {/* <span className="token punctuationhtml">&gt;</span> */}

      {/* <span className="token punctuationhtml">/&lt;</span>
      <span className="token tag">{"option"}</span>
      <span className="token punctuationhtml">&gt;</span> */}
      {LetVal1}
      {LetVal2}
      {LetVal3}
      {LetVal4}
      {sp2}
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{nameS}</span>
      <span className="token punctuationhtml">&gt;</span>
      {sp1}
      {/* <div className="token"></div>
        <div className="token"></div>
      </select>
      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </select> */}
    </>
  );
};
{
  /* 
<form1 attrF1> 
  sp1 <label1>
    sp2 name1 <inputLab1 attrInLab1 /> 
  sp1 </ label1> 
  sp1 <label2> 
    sp2 name2 <inputLab2 attrInLab2 /> 
  sp1 </ label2> 
  sp1 <input2 attrIn2 /> 
sp3 </ form1> 
*/
}
const FormLabInpLet = ({
  form1,
  attrF1,
  sp1,
  label1,
  sp2,
  name1,
  elemF1,
  inputLab1,
  attrInLab1,
  input1,
  attrIn1,
  label2,
  name2,
  inputLab2,
  attrInLab2,
  sp3,
  sp4,
  dop,
  sp5,
}) => {
  let Letlabel2;
  if (label2) {
    Letlabel2 = (
      <>
        {sp1}
        <span className="token punctuationhtml">&lt;</span>
        <span className="token tag">{label2}</span>
        <span className="token punctuationhtml">&gt;</span>
        {sp2}
        {name2}
        <span className="token punctuationhtml">&lt;</span>
        <span className="token tag">{inputLab2}</span>
        {attrInLab2}
        <span className="token punctuationhtml">/&gt;</span>
        {sp1}
        <span className="token punctuationhtml">&lt;/</span>
        <span className="token tag">{label2}</span>
        <span className="token punctuationhtml">&gt;</span>
      </>
    );
  }

  let LetElem1;
  // if (elemF1) {
  // let LetElem1;
  // LetElem1 = (
  //   <>
  //     <span className="token punctuationhtml">&lt;</span>
  //     <span className="token tag">{inputLab1}</span>
  //     {attrInLab1}
  //     <span className="token punctuationhtml">/&gt;</span>
  //   </>
  // );
  // if () {
  // }
  if (elemF1) {
    LetElem1 = (
      <>
        {elemF1}
        {/* <SelectLet
          nameS={""}
          sp1={sp1}
          sp2={sp2}
          val1={valS1}
          val2={valS2}
          val3={valS3}
          val4={valS4}
          seld={seldS}
        /> */}
      </>
    );
  } else {
    // else if {
    LetElem1 = (
      <>
        <span className="token punctuationhtml">&lt;</span>
        <span className="token tag">{inputLab1}</span>
        {attrInLab1}
        <span className="token punctuationhtml">/&gt;</span>
        {sp1}
      </>
    );
  }

  let letInput;
  if (input1) {
    letInput = (
      <>
        <span className="token punctuationhtml">&lt;</span>
        <span className="token tag">{input1}</span>
        {attrIn1}
        <span className="token punctuationhtml">/&gt;</span>
      </>
    );
  }

  let letDop;
  if (dop) {
    letDop = <>{dop}</>;
  }

  // }

  // }

  return (
    <>
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{form1}</span>
      {attrF1}
      <span className="token punctuationhtml">&gt;</span>
      {/* label 1 */}
      {sp1}
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{label1}</span>
      <span className="token punctuationhtml">&gt;</span>
      {sp2}
      {name1}
      {/* <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{inputLab1}</span>
      {attrInLab1}
      <span className="token punctuationhtml">/&gt;</span> */}
      {LetElem1}
      {/* {sp1} */}
      <span className="token punctuationhtml">&lt;/</span>
      <span className="token tag">{label1}</span>
      <span className="token punctuationhtml">&gt;</span>
      {/* label 2 */}
      {Letlabel2}
      {/* input1 */}
      {/* {sp1} */}
      {sp4}
      {letInput}
      {letDop}
      {sp3}
      <span className="token punctuationhtml">&lt;/</span>
      <span className="token tag">{form1}</span>
      <span>&gt;</span>
      {sp5}
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
  param1,
  param2,
  param3,
  brackes,
  metd,
  mtdParam2,
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
  } else if (metd) {
    // } else if (name2 || metd || param1) {
    plus = (
      <>
        <NameMetdPearam
          name2={name2}
          metd={metd}
          param1={param1}
          param2={mtdParam2}
        />
      </>
    );
  } else if (empty) {
    plus = (
      <>
        <span className="token punctuation">(</span>
      </>
    );
  } else if (exp) {
    plus = <>{exp}</>;
  } else if (param3) {
    plus = (
      <>
        <span className="token parameter">{param1}</span>
        <span className="token operator">.</span>
        {param2}
        <span className="token operator">.</span>
        {param3}
      </>
    );
  } else if (param2) {
    if (brackes) {
      plus = (
        <>
          {param1}
          <BrackesOpen var1={brackes} />
          {param2}
          <BrackesClose var1={brackes} />
          <span className="token punctuation">;</span>
        </>
      );
    } else {
      plus = (
        <>
          {param1}
          <span className="token operator">.</span>
          {param2}
        </>
      );
    }
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

// кавычки/скобки/фигурки
const BrackesOpen = ({ var1 }) => {
  let letVar;
  if (var1 === '"') {
    letVar = '"';
  } else if (var1 === "{") {
    letVar = "{";
  } else if (var1 === "[") {
    letVar = "[";
  } else if (var1 === "(") {
    letVar = "(";
  } else {
    letVar = "";
  }
  return <span className="token punctuation">{letVar}</span>;
};
const BrackesClose = ({ var1 }) => {
  let letVar;
  if (var1 === '"') {
    letVar = '"';
  } else if (var1 === "}" || var1 === "{") {
    letVar = "}";
  } else if (var1 === "]" || var1 === "[") {
    letVar = "]";
  } else if (var1 === ")" || var1 === "(") {
    letVar = ")";
  } else {
    letVar = "";
  }
  return <span className="token punctuation">{letVar}</span>;
};

// attr1=(3)val1 val2 val3(3) | 3 - {}||null
const AttrValMetd = ({ attr1, dop3, val1, val2, val3 }) => {
  // прятать фигурные ковычки если передали dop3
  let BrackesOpen;
  let BrackesClose;
  let letValue1;
  if (dop3) {
    // BrackesOpen = null;
    // BrackesClose = null;
    BrackesOpen = <span className="token punctuation">"</span>;
    BrackesClose = <span className="token punctuation">"</span>;
    letValue1 = (
      <>
        <span className="token atrule">{val1}</span>
      </>
    );
  } else {
    BrackesOpen = <span className="token punctuation">&#123;</span>;
    BrackesClose = <span className="token punctuation">&#125;</span>;
    letValue1 = (
      <>
        <span className="token parameter">{val1}</span>
      </>
    );
  }

  let letValue2;
  let letValue3;
  if (val2) {
    letValue2 = (
      <>
        <span className="token operator">.</span>
        <span className="token function">{val2}</span>
      </>
    );
  }
  if (val3) {
    letValue3 = (
      <>
        <span className="token operator">.</span>
        <span className="token function">{val3}</span>
      </>
    );
  }

  // else {
  //   letValue2 = <>{val2}</>;
  //   letValue4 = <>{val4}</>;
  // }

  // let letAttr2;
  // if (attr2) {
  //   letAttr2 = (
  //     <>
  //       {" "}
  //       <span className="token attr-name">{attr2}</span>
  //       <span className="token  operator">=</span>
  //       <span className="token punctuation">{BrackesOpen}</span>
  //       <span className="token parameter">{val3}</span>
  //       {letValue4}
  //       <span className="token punctuation">{BrackesClose}</span>
  //     </>
  //   );
  // }
  return (
    <>
      {" "}
      <span className="token attr-name">{attr1}</span>
      <span className="token  operator">=</span>
      <span className="token punctuation">{BrackesOpen}</span>
      {/* <span className="token parameter">{val1}</span> */}
      {letValue1}
      {letValue2}
      {letValue3}
      <span className="token punctuation">{BrackesClose}</span>
      {/* {letAttr2} */}
    </>
  );
};
// return (<tag(1)>{exp}</tag>) | 1 -  | br, sp1(пробел), sp2(пробел), comment
const ReturnTagExp = ({
  tag,
  attr1,
  val1,
  val2,
  val3,
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
        <AttrValMetd attr1={attr1} val1={val1} val2={val2} val3={val3} />
      </>
    );
  }

  // прятать фигурные ковычки если передали dop3
  let BrackesOpen;
  let BrackesClose;
  if (dop3) {
    BrackesOpen = null;
    BrackesClose = null;
  } else {
    BrackesOpen = <span className="token punctuation">&#123;</span>;
    BrackesClose = <span className="token punctuation">&#125;</span>;
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
      {BrackesOpen}
      {exp1}
      {dop4}
      {exp2}
      {BrackesClose}
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
// <tag(1)>(dop3) exp dop4 exp2 (dop3)</tag> | 1 - attr1=(3)val1.val2.val3(3) | 3 - {}||null | show(boolean), br, sp1(пробел), sp2(пробел)
const TagAttrValJSX = ({
  tag,
  Name,
  name1,
  attr1,
  val1,
  val2,
  // attr2,
  val3,
  // val4,
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
  // let letAttr2;
  if (hide) {
    letAttr1 = null;
  } else if (attr1 && val1) {
    letAttr1 = (
      <>
        <AttrValMetd
          attr1={attr1}
          val1={val1}
          val2={val2}
          val3={val3}
          dop3={dop3}
        />
      </>
    );
    // letAttr2 = (
    //   <>
    //     <AttrValMetd attr1={attr2} val1={val3} val2={val4} />
    //   </>
    // );
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
  let BrackesOpen;
  let BrackesClose;
  let LetExp1;
  if (dop3 || dop3 === null) {
    BrackesOpen = null;
    BrackesClose = null;
    LetExp1 = <span className="token  ">{exp1}</span>;
  } else {
    BrackesOpen = <span className="token punctuation">&#123;</span>;
    BrackesClose = <span className="token punctuation">&#125;</span>;
    LetExp1 = <span className="token parameter">{exp1}</span>;
  }
  return (
    <>
      {dop1}
      <span className="token punctuationhtml">&lt;</span>
      {letTagName}
      {letAttr1}
      {/* {letAttr2} */}
      {letOfTag}
      {br}
      {sp1}
      {BrackesOpen}
      {LetExp1}
      {dop4}
      {exp2}
      {BrackesClose}
      {br}
      {sp2}
      {/* {letName1} */}
      {letTagOf}
      {dop2}
      {/* <span className="token punctuation">;</span> */}
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
  let BrackesOpen;
  let BrackesClose;
  if (dop3) {
    BrackesOpen = null;
    BrackesClose = null;
  } else {
    BrackesOpen = <span className="token punctuation">&#123;</span>;
    BrackesClose = <span className="token punctuation">&#125;</span>;
  }

  return (
    <>
      <span className="token punctuationhtml">&lt;</span>
      {letName2}
      <span className="token attr-name">{prop1}</span>
      <span className="token operator">=</span>
      {BrackesOpen}
      <span className="token parameter">{val1}</span>
      {letValue2}
      {BrackesClose}
      {}
      {dop4}
      {prop2}
      {/* <AttrValMetd attr1={prop2} val1={val3} val2={val4} /> */}
      {prop3}
      <span className="token punctuationhtml">/&gt;</span>
    </>
  );
};
// условный рендер - show(state|props), com1, com2 - 1ый(по умолчанию),2ой(замена)
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
// if(isParam1/2){sp2 ifBody sp1}
const IfElse = ({
  sp1,
  ifParam1,
  ifParam2,
  sp2,
  ifBod,
  ifeParam1,
  ifeParam2,
  ife,
}) => {
  return (
    <>
      <BrSp sp={sp1} />
      {/* <BrSp sp={"    "} /> */}
      <span className="token tag">if</span>{" "}
      <span className="token punctuation">(</span>
      {ifParam1}
      {ifParam2}
      <span className="token punctuation">)</span>{" "}
      <span className="token punctuation">&#123;</span>
      <BrSp sp={sp2} />
      {/* <BrSp sp={"    "} /> */}
      {ifBod}
      <BrSp sp={sp1} />
      {/* <BrSp sp={"    "} /> */}
      {/* <BrSp sp={"    "} /> */}
      <span className="token punctuation">&#125;</span>
      {/* <BrSp sp={sp1} /> */}
      {/* <BrSp sp={"    "} /> */}
    </>
  );
};
// function nameFn(props) {
const FuncNameProps = ({
  nameFn,
  param1,
  param2,
  sp1,
  bodyMini,
  constBody,
  sp2,
  returnBody,
}) => {
  // первый параметр
  let letParam1;
  if (param1) {
    letParam1 = <>{param1}</>;
  } else {
    letParam1 = <>props</>;
  }
  // доп до return
  let letConstBody;
  if (constBody) {
    letConstBody = <>{constBody}</>;
  } else {
    letConstBody = <></>;
  }
  // return
  let letReturn;
  // если не false
  if (returnBody !== !true) {
    letReturn = <>{returnBody}</>;
  } else {
    letReturn = <>2222</>;
  }
  // сокращённая версия return
  let letShorReturn;
  let letBody;
  let letBrace;

  if (bodyMini === "true") {
    letBody = (
      <>
        {/* <BrSp sp={"  "} /> */}
        {letConstBody}
        <BrSp sp={"  "} />
        <span className="token tag">return</span> {letReturn}
      </>
    );
    letBrace = (
      <>
        <BrSp />
        <span className="token punctuation">&#125;</span>
      </>
    );
  } else if (bodyMini) {
    letBody = (
      <>
        {/* <BrSp sp={"  "} /> */}
        {letConstBody}
        <BrSp sp={"  "} />
        {/* {body} */}
        <span className="token tag">return</span>{" "}
        <span className="token punctuation">(</span>
        {/* <BrSp sp={sp2} /> */}
        {/* {returnBody} */}
        {letReturn}
        <BrSp sp={sp1} />
        {/* <BrSp sp={"  "} /> */}
        <span className="token punctuation">)</span>
      </>
    );
    letBrace = (
      <>
        <BrSp />
        <span className="token punctuation">&#125;</span>
      </>
    );
  } else {
    letBody = <>{}</>;
    letBrace = <>{}</>;
    // letReturn = <>{}</>;
  }

  return (
    <>
      <span className="token keyword">function</span>{" "}
      <span className="token class-name">{nameFn}</span>
      <span className="token punctuation">(</span>
      <span className="token parameter">{letParam1}</span>
      {/* <span className="token parameter">{param1}</span> */}
      <span className="token parameter">{param2}</span>
      <span className="token punctuation">)</span>{" "}
      <span className="token punctuation">&#123;</span>
      {letBody}
      {letBrace}
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
// класс Компонент
const ClCompLet = ({
  clName,
  sp1,
  sp2,
  state1,
  stVal1,
  fn1,
  fnProp1,
  fn1Body,
  sp3,
  fnVal1,
  state2,
  stVal2,
  fn2,
  fn2Body,
  fnProp2,
  fnVal2,
  constRet,
  exp1,
}) => {
  // перем 2ой fn
  let letFn2;
  let letFnProp2;
  let letFn2Body;
  if (fn2) {
    if (!fn2Body) {
      letFn2Body = (
        <>
          <span className="token parameter">this</span>
          <span className="token operator">.</span>
          <span className="token function">setState</span>
          <span className="token punctuation">(</span>
          <span className="token punctuation">&#123;</span>
          <BrSp sp={sp3} />
          {state1}
          <span className="token operator">:</span> {fnVal2}
          <BrSp sp={sp2} />
          <span className="token punctuation">&#125;</span>
          <span className="token punctuation">)</span>
          <span className="token punctuation">;</span>
        </>
      );
    }
    letFn2 = (
      <>
        <BrSp sp={sp2} />
        <span className="token parameter">this</span>
        <span className="token operator">.</span>
        {fn2} <span className="token operator">=</span>{" "}
        <span className="token parameter">this</span>
        <span className="token operator">.</span>
        <span className="token function">{fn2}</span>
        <span className="token operator">.</span>
        <span className="token function">bind</span>
        <span className="token punctuation">(</span>
        <span className="token parameter">this</span>
        <span className="token punctuation">)</span>
        <span className="token punctuation">;</span>
      </>
    );
    letFnProp2 = (
      <>
        <BrSp sp={sp1} />
        <span className="token function">{fn2}</span>
        <span className="token punctuation">(</span>
        <span className="token parameter">{fnProp2}</span>
        <span className="token punctuation">)</span>{" "}
        <span className="token punctuation">&#123;</span>
        <BrSp sp={sp2} />
        {/* {letFn2Body} */}
        {fn2Body}
        <BrSp sp={sp1} />
        <span className="token punctuation">&#125;</span>
        <BrSp sp={sp1} />
      </>
    );
  }
  let LetStates;
  if (state2) {
    LetStates = (
      <>
        <BrSp sp={sp2} />
        <span className="token parameter">this</span>
        <span className="token operator">.</span>state{" "}
        <span className="token operator">=</span>{" "}
        <span className="token punctuation">&#123;</span>
        <BrSp sp={sp3} />
        {state1} <span className="token operator">:</span> {stVal1}
        <span className="token punctuation">;</span>
        <BrSp sp={sp3} />
        {state2} <span className="token operator">:</span> {stVal2}
        <span className="token punctuation">;</span>
        <BrSp sp={sp2} />
        <span className="token punctuation">&#125;</span>
        <span className="token punctuation">;</span>
        <BrSp sp={sp2} />
      </>
    );
  }
  // else if (state3){
  //  LetStates = (<>3</>)
  // }
  else if (state1 === "nan") {
    LetStates = (
      <>
        <BrSp sp={sp2} />
      </>
    );
  } else if (state1) {
    LetStates = (
      <>
        <BrSp sp={sp2} />
        <span className="token parameter">this</span>
        <span className="token operator">.</span>state{" "}
        <span className="token operator">=</span>{" "}
        <span className="token punctuation">&#123;</span>
        {state1} <span className="token operator">:</span> {stVal1}
        {/* {LetStates} */}
        <span className="token punctuation">&#125;</span>
        <span className="token punctuation">;</span>
        <BrSp sp={sp2} />
      </>
    );
  }

  let letFn1Body;
  // let letFnProp1;
  if (fn1Body) {
    letFn1Body = <>{fn1Body}</>;
  } else {
    letFn1Body = (
      <>
        <span className="token parameter">this</span>
        <span className="token operator">.</span>
        <span className="token function">setState</span>
        <span className="token punctuation">(</span>
        {/* <span className="token parameter">state</span>{" "}
      <span className="token operator">=&gt;</span>{" "}
      <span className="token punctuation">(</span> */}
        <span className="token punctuation">&#123;</span>
        {/* <br /> */}
        <BrSp sp={sp3} />
        {/* showWarning */}
        {state1} <span className="token operator">:</span>{" "}
        {/* <span className="token operator">!</span> */}
        {fnVal1}
        <BrSp sp={sp2} />
        <span className="token punctuation">&#125;</span>
        <span className="token punctuation">)</span>
        <span className="token punctuation">;</span>
        {/* {stVal1} */}
        {/* <span className="token parameter">state</span>
      <span className="token operator">.</span>showWarning */}
        {/* <br /> */}
      </>
    );
  }

  // доп в return
  let letConstRet;
  if (constRet) {
    letConstRet = (
      <>
        <BrSp sp={sp2} />
        {constRet}
      </>
    );
  } else {
    letConstRet = <></>;
  }
  // перем constructora
  let letConstr;
  if (state1 !== undefined) {
    // LetStates = <></>;
    letConstr = (
      <>
        <BrSp sp={sp1} />
        <span className="token function">constructor</span>
        <span className="token punctuation">(</span>
        <span className="token parameter">props</span>
        <span className="token punctuation">)</span>{" "}
        <span className="token punctuation">&#123;</span>
        <BrSp sp={sp2} />
        <span className="token function">super</span>
        <span className="token punctuation">(</span>
        <span className="token parameter">props</span>
        <span className="token punctuation">)</span>
        <span className="token punctuation">;</span>
        {LetStates}
        <span className="token parameter">this</span>
        <span className="token operator">.</span>
        {fn1} <span className="token operator">=</span>{" "}
        <span className="token parameter">this</span>
        <span className="token operator">.</span>
        <span className="token function">{fn1}</span>
        <span className="token operator">.</span>
        <span className="token function">bind</span>
        <span className="token punctuation">(</span>
        <span className="token parameter">this</span>
        <span className="token punctuation">)</span>
        <span className="token punctuation">;</span>
        {letFn2}
        <BrSp sp={sp1} />
        <span className="token punctuation">&#125;</span>
      </>
    );
  }
  // перем fn
  let letFn;
  if (fn1) {
    letFn = (
      <>
        <BrSp sp={sp1} />
        <span className="token function">{fn1}</span>
        <span className="token punctuation">(</span>
        <span className="token parameter">{fnProp1}</span>
        <span className="token punctuation">)</span>{" "}
        <span className="token punctuation">&#123;</span>
        <BrSp sp={sp2} />
        {letFn1Body}
        <BrSp sp={sp1} />
        <span className="token punctuation">&#125;</span>
        {/* <span className="token punctuation">)</span> */}
        <br />
        {/* <BrSp sp={sp2} /> */}
        {letFnProp2}
        <BrSp sp={sp1} />
      </>
    );
  } else {
    letFn = <>{"  "}</>;
  }
  return (
    <>
      <span className="token keyword">class</span>{" "}
      <span className="token class-name">{clName}</span>{" "}
      <span className="token keyword">extends</span>{" "}
      <span className="token class-name">React</span>
      <span className="token tag">.</span>
      <span className="token class-name">Component</span>{" "}
      <span className="token punctuation">&#123;</span>
      {letConstr}
      {/* <br /> */}
      {/* <br /> */}
      {/* <br /> */}
      {/* <BrSp sp={sp1} /> */}
      {/* 121212 */}
      {/* <span className="token function">{fn1}</span>
      <span className="token punctuation">(</span>
      <span className="token parameter">{fnProp1}</span>
      <span className="token punctuation">)</span>{" "}
      <span className="token punctuation">&#123;</span>
      <BrSp sp={sp2} />
      {letFn1Body}
      <BrSp sp={sp2} />
      <span className="token punctuation">&#125;</span>
      <span className="token punctuation">)</span>
      <span className="token punctuation">;</span>
      <BrSp sp={sp1} />
      <span className="token punctuation">&#125;</span> */}
      {/* <span className="token punctuation">)</span> */}
      <br />
      {/* <BrSp sp={sp2} /> */}
      {/* {letFnProp2} */}
      {letFn}
      {/* 232323 */}
      {/* <BrSp sp={sp1} /> */}
      {/* {"  "} */}
      <span className="token function">render</span>
      <span className="token punctuation">(</span>
      <span className="token punctuation">)</span>{" "}
      <span className="token punctuation">&#123;</span>
      {/* <br /> */}
      {letConstRet}
      <BrSp sp={sp2} />
      <span className="token tag">return</span>{" "}
      <span className="token punctuation">(</span>
      {/* <br /> */}
      <BrSp sp={sp3} />
      {exp1}
      {/* <BrSp sp={sp2} /> */}
      <span className="token punctuation">);</span>
      {/* <br /> */}
      <BrSp sp={sp1} />
      <span className="token punctuation">&#125;</span>
      <br />
      <span className="token punctuation">&#125;</span>
    </>
  );
};

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
  ClCompLet,
  ConstRoot,
  SelectLet,
  IfElse,
};
// Экспорт «по умолчанию» (импортирован как «contextexp») не был найден в ./contextexp.js '(модуль не имеет экспорта)
// Ошибка анализа: только выражения, функции или классы разрешены в качестве экспорта `default`
// Ошибка анализа: `brsp1` уже экспортируется.Экспортируемые идентификаторы должны быть уникальными.

// Назначьте объект переменной перед экспортом по умолчанию модуля
