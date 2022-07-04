import React from "react";

// import ListsClComp from "./ListsClComp.js";
// import ClockClComp from "./ClockClComp.js";

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
} from "../../../../../../js/examples/ExpPreCode.js";

// Встроенный If-Else с условным оператором
const IfCondOperClComp = () => {
  return (
    <div className="IfCondOperClComp----">
      <div className="IfCondOperClComp__descript----">
        <h3>Встроенный If-Else с условным оператором</h3>
        <div>
          Условный оператор JavaScript <code>condition ? true : false</code>{" "}
          используется для условной визуализации небольшого блока текста.
        </div>
      </div>
      <div className="IfCondOperClComp__descript---- temporary">
        <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
        <code style={{ color: "red" }}>!!!</code> КОД | ПЕРЕБРАТЬ{" "}
        <code>pre</code> и <code>code</code>
      </div>
      <div className="IfCondOperClComp__content----">
        <pre className="code-jsx">
          <code className="code-jsx">
            <span className="token function">render</span>
            <span className="token punctuation">(</span>
            <span className="token punctuation">)</span>{" "}
            <span className="token punctuation">&#123;</span>
            <br />
            {"  "}
            <span className="token keyword">const</span> isLoggedIn{" "}
            <span className="token operator">=</span>{" "}
            <span className="token keyword">this</span>
            <span className="token punctuation">.</span>state
            <span className="token punctuation">.</span>isLoggedIn
            <span className="token punctuation">;</span>
            <br />
            {"  "}
            <span className="token keyword">return</span>{" "}
            <span className="token punctuation">(</span>
            <br />
            {"    "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <br />
            {"      "}
            <span className="token plain-text"></span>
            <span className="token plain-text">The user is </span>
            <br />
            {"      "}
            <span className="token punctuation">&lt;</span>
            <span className="token tag">b</span>
            <span className="token punctuation">&gt;</span>{" "}
            <span className="token punctuation">&#123;</span>isLoggedIn{" "}
            <span className="token operator">?</span>{" "}
            <span className="token string">'currently'</span>{" "}
            <span className="token operator">:</span>{" "}
            <span className="token string">'not'</span>
            <span className="token punctuation">&#125;</span>{" "}
            <span className="token punctuation">&lt;/</span>
            <span className="token tag">b</span>
            <span className="token punctuation">&gt;</span>
            <br />
            {"      "}
            <span className="token plain-text">logged in.</span>
            <br />
            {"    "}
            <span className="token plain-text"></span>
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>div
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            <br />
            {"  "}
            <span className="token punctuation">)</span>
            <span className="token punctuation">;</span>
            <br />
            <span className="token punctuation">&#125;</span>
          </code>
        </pre>
      </div>
      <div className="IfCondOperClComp__descript----">
        Можно использовать для больших выражений, но результат того что
        происходит может быть менее очевиден
      </div>
    </div>
  );
};

export default IfCondOperClComp;
