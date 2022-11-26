import React from "react";

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
} from "../../../../../miniBlocksComponents/examples/ExpPreCode.js";

function knpToggleClick44(event) {
  this.setState((state) => ({
    [event.target.name]: !state[event.target.name],
  }));
  // --
  // name="showJSX"
  // type="button"
  //  // value={this.state.showJSX}
  // className="btmShowHide"
  // onClick={knpToggleClick4}
  // value={this.state.showJSX ? "Hide" : "Show"}
  // --
  // isToggleOn={this.state.isToggleOn}
  // {this.props.isToggleOn ? "ONNNN" : "OFFFFF"}
  //  --
  // <button onClick={() => handleClick(setState)}>Click</button>
  // export const handleClick = setState => {
  //   setState({ name: "Нажал" })
  // }
}

class knpToggleClick4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name4: "Button pressed" };
  }
  render() {
    return <span>{this.props.name4 ? "ONNNN" : "OFFFFF"}</span>;
  }
}

// // const knpToggleClick4 = () => {
// const knpToggleClick4() {
//   // function knpToggleClick4() {
//   // setState({ name4: "Нажал" });
//   return(
//   {this.props.name4 ? "ONNNN" : "OFFFFF"}
//   )
//   // Ожидается, что назначение или функциональный вызов и вместо этого увидел выражение.
// };

// Ключи
class KeysClComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTrue: true,
      showJSX: true,
      name4: "Не нажал",
    };
    this.knpToggleClick = this.knpToggleClick.bind(this);
    this.knpToggleClick3 = this.knpToggleClick3.bind(this);
    this.knpToggleClick4 = knpToggleClick4.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }
  knpToggleClick(event) {
    this.setState((state) => ({
      // [event.target.name]: !state[event.target.name],
      showTrue: !state.showTrue,
      showJSX: !state.showJSX,
      // show: !state.show,
    }));
  }
  //  ----------------------------------------------------------------------------------
  knpToggleClick3(event) {
    this.setState((state) => ({
      [event.target.name]: !state[event.target.name],
    }));
  }
  //  ----------------------------------------------------------------------------------
  // попытка преобразования в общую fn для кнп knpToggleClick
  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value,
  //   });
  // }
  // handleChange(evt, field) {
  //   // check it out: we get the evt.target.name (which will be either "email" or "password")
  //   // and use it to target the key on our `state` object with the same name, using bracket syntax
  //   this.setState({ [field]: evt.target.value });
  // }

  //  ----------------------------------------------------------------------------------
  nameRoot = () => {
    return (
      <>
        {/* Blog posts={posts}  */}
        {/* <span className="token punctuation">&lt;</span> */}
        <span className="token class-name">Blog</span>{" "}
        <span className="token attr-name">posts</span>
        <span className="token operator">=</span>
        <span className="token punctuation">&#123;</span>
        <span className="token punctuationhtml">posts</span>
        <span className="token punctuation">&#125;</span>
        {/* <span className="token punctuation">/&gt;</span> */}
        {/* "NumberList numbers=&#123;numbers2&#125;" */}
      </>
    );
  };
  render() {
    // Ключ по id и index
    const KeyByIdAndIndex = () => {
      return (
        <div className="KeyByIdAndIndex">
          <div className="KeyByIdAndIndex__descript----">
            <h3>Ключ по id и index</h3>
            <div>
              Ключи помогают React определить, какие элементы были изменены,
              добавлены или удалены. Ключи должны быть переданы элементам внутри
              массива, чтобы придать элементам стабильную идентичность:
            </div>
            <div></div>
          </div>
          <div className="KeyByIdAndIndex__content----">
            <pre>
              <code>
                <ConstNamePlus num={" "} name1={"numbers"} />
                <br />
                <ConstNamePlus
                  name1={"listItems"}
                  name2={"numbers"}
                  metd={"map"}
                  param1={"number"}
                />
                <BrSp sp={"  "} />
                <TagAttrValJSX
                  // hide={true}
                  // попытка преобразования в общую fn для кнп knpToggleClick
                  // show={this.state.show}
                  tag={"li"}
                  attr1={"key"}
                  val1={
                    <>
                      number<span className="token operator">.</span>
                      <span className="token attr-name">toString</span>
                      <span className="token number">()</span>
                    </>
                  }
                  exp1={"number"}
                  br={<br />}
                  sp1={"    "}
                  sp2={"  "}
                />
                <br />
                <span className="token punctuation">);</span>
              </code>
            </pre>
          </div>
          <div className="KeyByIdAndIndex__descript----">
            <div>
              Лучший способ выбрать ключ — использовать строку, которая
              однозначно идентифицирует элемент списка среди его братьев и
              сестер. Чаще всего вы будете использовать идентификаторы из ваших
              данных в качестве ключей:
            </div>
          </div>
          <div className="KeyByIdAndIndex__content----">
            <pre>
              <code>
                <ConstNamePlus
                  name1={"todoItems"}
                  name2={"todos"}
                  metd={"map"}
                  param1={"todo"}
                />
                <BrSp sp={"  "} />
                <TagAttrValJSX
                  // hide={true}
                  // попытка преобразования в общую fn для кнп knpToggleClick
                  // show={this.state.show}
                  tag={"li"}
                  attr1={"key"}
                  val1={
                    <>
                      todo<span className="token operator">.</span>
                      <span className="token attr-name">id</span>
                    </>
                  }
                  exp1={"todo"}
                  exp2={
                    <>
                      <span className="token operator">.</span>
                      <span className="token attr-name">text</span>
                    </>
                  }
                  br={<br />}
                  sp1={"    "}
                  sp2={"  "}
                />
                <BrSp />
                <span className="token punctuation">);</span>
              </code>
            </pre>
          </div>
          <div className="KeyByIdAndIndex__descript----">
            <div>
              Если у вас нет стабильных идентификаторов для отображаемых
              элементов, вы можете использовать индекс элемента в качестве ключа
              в крайнем случае:
            </div>
          </div>
          <div className="KeyByIdAndIndex__content----">
            <pre>
              <code>
                <ConstNamePlus
                  name1={"todoItems"}
                  name2={"todos"}
                  metd={"map"}
                  param1={"todo"}
                  mtdParam2={
                    <>
                      <span className="token punctuation">,</span>{" "}
                      <span className="token parameter">index</span>
                    </>
                  }
                />
                <br />
                {"  "}
                <span className="token comment">
                  // для редких случаев, когда нет стабильных id
                </span>
                <br />
                {"  "}
                <TagAttrValJSX
                  // show={true}
                  // попытка преобразования в общую fn для кнп knpToggleClick
                  // show={this.state.show}
                  tag={"li"}
                  attr1={"key"}
                  val1={<>todo</>}
                  exp1={"todo"}
                  exp2={
                    <>
                      <span className="token operator">.</span>
                      <span className="token attr-name">text</span>
                    </>
                  }
                  br={<br />}
                  sp1={"    "}
                  sp2={"  "}
                />
                <br />
                <span className="token punctuation">);</span>
              </code>
            </pre>
          </div>
          <div className="KeyByIdAndIndex__descript----">
            <div>
              Не рекомендуется использовать индексы для ключей, если порядок
              элементов может измениться. Это может негативно сказаться на
              производительности и вызвать проблемы с состоянием компонентов.
              Если вы решите не назначать явный ключ элементам списка, React по
              умолчанию будет использовать индексы в качестве ключей.
            </div>
          </div>
        </div>
      );
    };
    // Извлечение компонентов с ключами
    const ExtractComponentKeys = () => {
      return (
        <div className="ExtractComponentKeys">
          <div className="ExtractComponentKeys__descript----">
            <h3>Извлечение компонентов с ключами</h3>
            <div>
              Например, если вы извлекаете компонент <code>ListItem</code>, вы
              должны хранить ключ в <code>&lt;ListItem /&gt;</code> элементах
              массива, а не в самом <code>&lt;li&gt;</code> элементе{" "}
              <code>ListItem</code>.{" "}
              <div>
                Известно по опыту что элементам внутри <code>map()</code> вызова
                нужны ключи. Клик по кнп покажет верный вариант:
              </div>
            </div>
            <div>
              {/* <button className="btmShowHide" onClick={this.knpToggleClick}>
                <div> {this.state.showTrue ? "Hide" : "Show"}</div>
              </button> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  margin: "0 -15px",
                }}
              >
                <div>
                  <div>knpToggleClick</div>
                  <button
                    style={{ flex: "0 0 auto", margin: "0 10px" }}
                    name="showTrue"
                    type="button"
                    value={this.state.showTrue}
                    className="btmShowHide"
                    onClick={this.knpToggleClick}
                    // onChange={(event) => this.knpToggleClick(event, "showTrue")}
                    // onChange={(event) => this.knpToggleClick(event)}
                  >
                    <div> {this.state.showTrue ? "Hide" : "Show"}</div>
                  </button>
                </div>
                <div>
                  <div>inp knpToggleClick3</div>
                  <input
                    style={{ flex: "0 0 auto", margin: "0 10px" }}
                    name="showTrue"
                    type="button"
                    // value={this.state.showJSX}
                    className="btmShowHide"
                    onClick={this.knpToggleClick3}
                    value={this.state.showTrue ? "Hide" : "Show"}
                  />
                </div>
                <div>
                  <div>inp knpToggleClick4</div>
                  <input
                    style={{ flex: "0 0 auto", margin: "0 10px" }}
                    name="showTrue"
                    type="button"
                    // value={this.state.showJSX}
                    className="btmShowHide"
                    onClick={knpToggleClick4}
                    value={this.state.showTrue ? "Hide" : "Show"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ExtractComponentKeys__content----">
            <pre>
              <code>
                <FuncNameProps nameFn={"ListItem"} />
                <BrSp sp={"  "} />
                <ConstNamePlus name1={"value"} hide={!this.state.showTrue} />
                <BrSp sp={"  "} />
                <ReturnTagExp
                  show={!this.state.showTrue}
                  tag={"li"}
                  attr1={"key"}
                  val1={"value"}
                  val2={
                    <>
                      toString
                      <span className="token number">()</span>
                    </>
                  }
                  exp2={"value"}
                  exp1={
                    <CondRender
                      show={this.state.showTrue}
                      value1={<></>}
                      value2={
                        <>
                          <span className="token parameter">props</span>
                          <span className="token operator">.</span>
                        </>
                      }
                    />
                  }
                  br={<br />}
                  sp1={"    "}
                  sp2={"  "}
                  comment={
                    <CondRender
                      show={this.state.showTrue}
                      value1={
                        <>
                          <br />
                          {"    "}
                          <span className="token comment">
                            // Неправильно! Здесь нет необходимости указывать
                            ключ:
                          </span>
                        </>
                      }
                      value2={
                        <>
                          <br />
                          {"    "}
                          <span className="token comment">
                            // Верно! Здесь нет необходимости указывать ключ:
                          </span>
                        </>
                      }
                    />
                  }
                />
                <BrSp />
                <span className="token punctuation">&#125;</span>
                <BrSp />
                <BrSp />
                <FuncNameProps nameFn={"NumberList"} />
                <BrSp sp={"  "} />
                <ConstNamePlus name1={"numbers"} />
                <BrSp sp={"  "} />
                <ConstNamePlus
                  name1={"listItems"}
                  name2={"numbers"}
                  metd={"map"}
                  param1={"number"}
                />
                <BrSp sp={"    "} />
                <CondRender
                  show={this.state.showTrue}
                  value1={
                    <>
                      <span className="token comment">
                        // Неправильно! Ключ должен был быть указан здесь:
                      </span>
                    </>
                  }
                  value2={
                    <>
                      <span className="token comment">
                        // Верно! Ключ должен быть указан внутри массива:
                      </span>
                    </>
                  }
                />
                <BrSp sp={"    "} />
                <ComponLet
                  name={"ListItem"}
                  prop1={"value"}
                  val1={"number"}
                  prop2={
                    <CondRender
                      show={this.state.showTrue}
                      value1={<></>}
                      value2={
                        <>
                          <AttrValMetd
                            attr1={"key"}
                            val1={"number"}
                            val2={
                              <>
                                toString
                                <span className="token number">()</span>
                              </>
                            }
                          />
                        </>
                      }
                    />
                  }
                />
                <BrSp sp={"  "} />
                <span className="token punctuation">);</span>
                <BrSp sp={"  "} />
                <ReturnTagExp
                  tag={"ul"}
                  exp1={"listItems"}
                  br={<br />}
                  sp1={"    "}
                  sp2={"  "}
                />
                <br />
                <span className="token punctuation">&#125;</span>
              </code>
            </pre>
          </div>
        </div>
      );
    };
    // уникальность ключей среди братьев
    const UniqKeyForBrothers = () => {
      return (
        <div className="UniqKeyForBrothers">
          <div className="UniqKeyForBrothers__descript----">
            <h3>Ключи должны быть уникальными только среди братьев и сестер</h3>
            <div>
              Ключи, используемые в массивах, должны быть уникальными среди
              своих братьев и сестер. Однако они не обязательно должны быть
              глобально уникальными. Мы можем использовать одни и те же ключи
              при создании двух разных массивов:
            </div>
            <div></div>
          </div>
          <div className="UniqKeyForBrothers__content----">
            <pre>
              <code>
                <FuncNameProps nameFn={"Blog"} />
                <BrSp sp={"  "} />
                <ConstNamePlus name1={"sidebar"} empty={true} />
                <BrSp sp={"    "} />
                <TagAttrValJSX
                  tag={"ul"}
                  attr1={""}
                  val1={""}
                  exp1={
                    <NameMetdPearam
                      // props.posts.map((post) =>
                      name2={
                        <>
                          <span className="token parametr">props</span>
                          <span className="token operator">.</span>
                          <span className="token constName">posts</span>
                        </>
                      }
                      metd={"map"}
                      param1={"post"}
                    />
                  }
                  exp2={
                    <TagAttrValJSX
                      tag={"li"}
                      attr1={"key"}
                      val1={
                        <>
                          <span className="token parametr">post</span>
                          <span className="token operator">.</span>
                          <span className="token attr-name">id</span>
                        </>
                      }
                      // hide={true}
                      exp1={"post"}
                      exp2={
                        <>
                          <span className="token operator">.</span>
                          <span className="token attr-name">title</span>
                        </>
                      }
                      br={<br />}
                      sp1={"          "}
                      sp2={"        "}
                      dop1={<BrSp sp={"        "} />}
                      dop2={
                        <>
                          <br />
                          {"      "}
                          <span className="token punctuation">)</span>
                        </>
                      }
                    />
                  }
                  br={<br />}
                  sp1={"      "}
                  sp2={"    "}
                />
                <BrSp sp={"  "} />
                <span className="token punctuation">);</span>
                <BrSp sp={"  "} />
                <ConstNamePlus
                  name1={"content"}
                  name2={
                    <>
                      <span className="token parameter">props</span>
                      <span className="token operator">.</span>
                      <span className="token constName">posts</span>
                    </>
                  }
                  metd={"map"}
                  param1={"post"}
                />
                <BrSp sp={"    "} />
                <TagAttrValJSX
                  tag={"div"}
                  attr1={"key"}
                  val1={"post"}
                  val2={"id"}
                  dop3={true}
                  exp1={
                    <TagAttrValJSX
                      tag={"h3"}
                      exp1={
                        <>
                          <span className="token parameter">post</span>
                          <span className="token operator">.</span>
                          <span className="token attr-name">title</span>
                        </>
                      }
                    />
                  }
                  dop4={<BrSp sp={"      "} />}
                  exp2={
                    <TagAttrValJSX
                      tag={"p"}
                      exp1={
                        <>
                          <span className="token parameter">post</span>
                          <span className="token operator">.</span>
                          <span className="token attr-name">content</span>
                        </>
                      }
                    />
                  }
                  show={""}
                  br={<br />}
                  sp1={"      "}
                  sp2={"    "}
                />
                <BrSp sp={"  "} />
                <span className="token punctuation">);</span>
                <BrSp sp={"  "} />
                <ReturnTagExp
                  tag={"div"}
                  attr1={""}
                  val1={""}
                  val2={""}
                  dop3={true}
                  dop5={<BrSp sp={"      "} />}
                  dop6={<BrSp sp={"    "} />}
                  exp1={
                    <>
                      <span className="token punctuation">&#123;</span>
                      <span className="token constName">sidebar</span>
                      <span className="token punctuation">&#125;</span>
                    </>
                  }
                  exp2={
                    <>
                      <BrSp sp={"      "} />
                      <span className="token punctuationhtml">&lt;</span>
                      <span className="token tag">hr</span>
                      <span className="token punctuationhtml">/&gt;</span>
                      <BrSp sp={"      "} />
                      <span className="token punctuation">&#123;</span>
                      <span className="token constName">content</span>
                      <span className="token punctuation">&#125;</span>
                    </>
                  }
                  show={""}
                  br={<br />}
                  sp1={"    "}
                  sp2={"  "}
                  // dop4={<BrSp sp={"  "} />}
                />
                <BrSp sp={""} />
                <span className="token punctuation">)</span>
                <BrSp sp={""} />
                <BrSp sp={""} />
                <ConstNamePlus
                  name1={"posts"}
                  exp={
                    <>
                      <span className="token punctuation">[</span>
                      <BrSp sp={"      "} />
                      <span className="token punctuation">&#123;</span>id:{" "}
                      <span className="token number">1</span>, title:{" "}
                      <span className="token atrule">'Hello'</span>, content:{" "}
                      <span className="token atrule">
                        'Приветствую в React!'
                      </span>
                      <span className="token punctuation">&#125;</span>
                      <span className="token punctuation">,</span>
                      <BrSp sp={"      "} />
                      <span className="token punctuation">&#123;</span>id:{" "}
                      <span className="token number">2</span>, title:{" "}
                      <span className="token atrule">'Instal'</span>, content:{" "}
                      <span className="token atrule">
                        'Установка React ч/з NPM.'
                      </span>
                      <span className="token punctuation">&#125;</span>
                      <BrSp sp={""} />
                      <span className="token punctuation">];</span>
                    </>
                  }
                />
                <BrSp sp={""} />
                <BrSp sp={""} />
                <ConstRoot nameRoot={this.nameRoot()} />
              </code>
            </pre>
          </div>
          <div className="UniqKeyForBrothers__descript----">
            <div>
              Ключи служат подсказкой для React, но они не передаются вашим
              компонентам. Если вам нужно такое же значение в вашем компоненте,
              передайте его явно как свойство с другим именем:
            </div>
            <div>
              В приведенном примере в <code>Post</code> компонент может читать{" "}
              <code>props.id</code>, но не <code>props.key</code>.
            </div>
          </div>
          <div className="UniqKeyForBrothers__content----">
            <pre>
              <code>
                <ConstNamePlus
                  name1={"content"}
                  name2={"posts"}
                  metd={"map"}
                  param1={"post"}
                />
                <BrSp sp={"  "} />
                <ComponLet
                  name={"Post"}
                  prop1={
                    <>
                      <BrSp sp={"    "} />
                      key
                    </>
                  }
                  val1={"post"}
                  val2={"id"}
                  prop2={
                    <>
                      <BrSp sp={"   "} />
                      <AttrValMetd attr1={"id"} val1={"post"} val2={"id"} />
                    </>
                  }
                  prop3={
                    <>
                      <BrSp sp={"   "} />
                      <AttrValMetd
                        attr1={"title"}
                        val1={"post"}
                        val2={"title"}
                      />
                      <BrSp sp={"  "} />
                    </>
                  }
                />
                <BrSp sp={""} />
                <span className="token punctuation">);</span>
              </code>
            </pre>
          </div>
        </div>
      );
    };
    // Встраивание map() в JSX
    const BuildMapInJSX = () => {
      return (
        <div className="BuildMapInJSX">
          <div className="BuildMapInJSX__descript----">
            <h3>Встраивание map() в JSX</h3>
            <div>
              В приведеном примере объявили отдельную переменную{" "}
              <code>listItems</code> и включили ее в JSX
            </div>
            <div>
              JSX позволяет вставлять любое выражение в фигурные скобки, чтобы
              мы могли встроить <code>map()</code> результат:
            </div>
            <div>
              {/* <button className="btmShowHide" onClick={this.knpToggleClick}>
                <div>{this.state.showJSX ? "Hide" : "Show"}</div>
              </button> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  margin: "0 -15px",
                }}
              >
                <div>
                  <div>but knpToggleClick</div>
                  <button
                    style={{ flex: "0 0 auto", margin: "0 10px" }}
                    name="showJSX"
                    type="button"
                    value={this.state.showJSX}
                    className="btmShowHide"
                    onClick={this.knpToggleClick}
                    // onChange={(event) => this.knpToggleClick(event, "showJSX")}
                    // onChange={(event) => this.knpToggleClick(event)}
                  >
                    <div>{this.state.showJSX ? "Hide" : "Show"}</div>
                  </button>
                </div>
                <div>
                  <div>inp knpToggleClick3</div>
                  <input
                    style={{ flex: "0 0 auto", margin: "0 10px" }}
                    name="showJSX"
                    type="button"
                    // value={this.state.showJSX}
                    className="btmShowHide"
                    onClick={this.knpToggleClick3}
                    value={this.state.showJSX ? "Hide" : "Show"}
                  />
                </div>
                <div>
                  <div>inp knpToggleClick4</div>
                  <div>{this.state.name4}</div>
                  <input
                    style={{ flex: "0 0 auto", margin: "0 10px" }}
                    // name="showJSX"
                    type="button"
                    className="btmShowHide"
                    // onClick={knpToggleClick4}
                    // onClick={() => knpToggleClick4(this.setState)}
                    onClick={() => knpToggleClick4(this.state.name4)}
                    value={this.state.showJSX ? "Hide" : "Show"}
                  />
                  {/* 
                  // <button onClick={() => handleClick(setState)}>Click</button>
                  // export const handleClick = setState => {
                  //   setState({ name: "Нажал" })
                  // } 
                  */}
                </div>
              </div>
            </div>
          </div>
          <div className="BuildMapInJSX__content----">
            <pre>
              <code>
                <FuncNameProps nameFn={"NumberList"} />
                <BrSp sp={"  "} />
                <ConstNamePlus name1={"numbers"} name2={"numbers"} />
                <BrSp sp={"  "} />
                {/* <CondRender
                  show={this.state.showJSX}
                  value1={<></>}
                  value2={""}
                /> */}
                <CondRender
                  show={this.state.showJSX}
                  value1={""}
                  value2={<BrSp sp={"  "} />}
                />
                <CondRender
                  show={this.state.showJSX}
                  value1={
                    <>
                      <ConstNamePlus
                        name1="listItems"
                        name2={"numbers"}
                        metd={"map"}
                        param1={"number"}
                      />
                      <BrSp sp={"    "} />
                      <ComponLet
                        name={"ListItem"}
                        prop1={
                          <>
                            <BrSp sp={"      "} />
                            key
                          </>
                        }
                        val1={"number"}
                        val2={
                          <>
                            toString
                            <span className="token number">()</span>
                          </>
                        }
                        prop2={
                          <>
                            <BrSp sp={"     "} />
                            <AttrValMetd
                              attr1={"value"}
                              val1={"number"}
                              val2={""}
                            />
                            <BrSp sp={"    "} />
                          </>
                        }
                      />
                      <BrSp sp={"  "} />
                      <span className="token punctuation">&#125;;</span>
                      <BrSp sp={"  "} />
                    </>
                  }
                  value2={""}
                />
                <ReturnTagExp
                  tag={"ul"}
                  exp1={
                    <CondRender
                      show={this.state.showJSX}
                      value1={"listItems"}
                      value2={
                        <>
                          <NameMetdPearam
                            name2={"numbers"}
                            metd={"map"}
                            param1={"number"}
                          />
                          <BrSp sp={"        "} />
                          <ComponLet
                            name={"ListItem"}
                            prop1={
                              <>
                                <BrSp sp={"          "} />
                                key
                              </>
                            }
                            val1={"number"}
                            val2={
                              <>
                                toString
                                <span className="token number">()</span>
                              </>
                            }
                            prop2={
                              <>
                                <BrSp sp={"         "} />
                                <AttrValMetd
                                  attr1={"value"}
                                  val1={"number"}
                                  val2={""}
                                />
                                <BrSp sp={"        "} />
                              </>
                            }
                          />
                          <BrSp sp={"      "} />
                        </>
                      }
                    />
                  }
                  exp2={
                    <CondRender
                      show={this.state.showJSX}
                      value1={""}
                      value2={
                        <>
                          {/* <BrSp sp={"    "} /> */}
                          <span className="token punctuation">)</span>
                        </>
                      }
                    />
                  }
                  br={<br />}
                  sp1={"    "}
                  sp2={"  "}
                  dop3={""}
                  dop4={""}
                  dop5={
                    <CondRender
                      show={this.state.showJSX}
                      value1={
                        // ""
                        <>
                          <BrSp sp={"      "} />
                        </>
                      }
                      value2={
                        <>
                          <BrSp sp={"      "} />
                        </>
                      }
                    />
                  }
                  dop6={
                    <CondRender
                      show={this.state.showJSX}
                      value1={
                        // ""
                        <>
                          <BrSp sp={"    "} />
                        </>
                      }
                      value2={
                        <>
                          <BrSp sp={"    "} />
                        </>
                      }
                    />
                  }
                />
                <BrSp sp={""} />
                <span className="token punctuation">&#125;</span>
              </code>
            </pre>
          </div>
          <div className="BuildMapInJSX__descript----">
            Иногда это приводит к более четкому коду, но этим стилем также можно
            злоупотреблять. Как и в JavaScript, вам решать, стоит ли извлекать
            переменную для удобочитаемости. Имейте в виду, что если{" "}
            <code>map()</code> тело слишком вложенное, самое время извлечь
            компонент
          </div>
          <div className="BasicListComponent--- temporary">
            <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
            <code style={{ color: "red" }}>!!!</code>
            сделать <code>fn()knpToggleClick</code> общей для всех. пока
            отрабатывает только <code>PrevRend</code> (предовращение рендера).
            Если более глубокая вложенность, как в{" "}
            <code>BasicListComponent</code>, то fn() не раб на этом Компоненте.
            Нужно продумать как передавать <code>props/state</code>, при этом
            чтоб др кнп не срабатывали.
            <div>
              Продумать изменение разных <code>state</code>. Здесь{" "}
              <code>stats</code> showTrue и showJSX изменяются оба, при клике на
              разные клавиши, послольку в <code>fn()knpToggleClick</code>{" "}
              заложены оба <code>state</code>. Надо как то передавая один, чтоб
              он и изменялся не затрагивая второй.
            </div>
            <div>
              На основе Forms.Обработка нескольких входов, получается изменить
              один раз <code>state</code> у одной кнп через условие{" "}
              <code>target.name === "showJSX" ? true : false;</code> и изменения{" "}
              <code>state</code> таким способом <code>[name]: value</code>.{" "}
              <code>НО !!!</code>
              <br />
              Если в <code>button</code> вложен какой нить блок - не раб.
              <br />
              Если изменять <code>state</code> обратным методом{" "}
              <code>[name]: !value</code> - не раб
              <br />
              Продумать как менять у нескольких кнопок независимо через одну fn
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="Keys----">
        <div className="Keys__descript----">
          <h3>Ключи</h3>
        </div>
        <div className="Keys__content----">
          <KeyByIdAndIndex />
          <ExtractComponentKeys />
          <UniqKeyForBrothers />
          <BuildMapInJSX />
        </div>
      </div>
    );
  }
}

export default KeysClComp;
