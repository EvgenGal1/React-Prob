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
} from "../../../../../../js/examples/ExpPreCode.js";

// Списки
class ListsClComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showKey: true,
      // nameFn1: "NumberList",
    };
    // попытка преобразования в общую fn для кнп knpToggleClick
    // knpToggleClick = knpToggleClick.bind(this);
    this.knpToggleClick = this.knpToggleClick.bind(this);
  }
  // переменные вставки когда
  nameRoot = () => {
    return (
      <>
        {/* <span className="token punctuation">&lt;</span> */}
        <span className="token class-name">NumberList</span>{" "}
        <span className="token attr-name">numbers</span>
        <span className="token operator">=</span>
        <span className="token punctuation">&#123;</span>
        <span className="token punctuationhtml">numbers</span>
        <span className="token punctuation">&#125;</span>
        {/* <span className="token punctuation">/&gt;</span> */}
        {/* "NumberList numbers=&#123;numbers2&#125;" */}
      </>
    );
  };
  // попытка преобразования в общую fn для кнп knpToggleClick
  knpToggleClick() {
    this.setState((state) => ({
      showKey: !state.showKey,
      // show: !state.show,
    }));
  }
  render() {
    // ВЫВОД БЛОКОВ КОДА
    // Преобразование
    const Transformation = () => {
      return (
        <div>
          <div className="Transformation__description----">
            <h3>Преобразование</h3>
            <div>
              Можно использовать <code>map()</code> функцию, чтобы взять массив{" "}
              <code>numbers</code> и удвоить их значения. Мы присваиваем новый
              массив, возвращаемый <code>map()</code> переменной,{" "}
              <code>listItems</code> и регистрируем его
            </div>
          </div>
          <div className="Transformation__content----">
            <pre className="code-jsx">
              <code className="code-jsx">
                <ConstNamePlus num={" "} name1={"numbers"} />
                <br />
                <ConstNamePlus
                  name1={"listItems"}
                  name2={"numbers"}
                  metd={"map"}
                  param1={"number"}
                />{" "}
                <span className="token parameter">number</span>{" "}
                <span className="token operator">*</span>{" "}
                <span className="token number">2</span>
                <span className="token punctuation">)</span>
                <span className="token punctuation">;</span>
                <br />
                console<span className="token operator">.</span>
                <span className="token function">log</span>
                <span className="token punctuation">(</span>listItems
                <span className="token punctuation">)</span>
                <span className="token punctuation">;</span>
              </code>
            </pre>
          </div>
          <div className="Transformation__description----">
            Этот код записывается [2, 4, 6, 8, 10] в консоль.
          </div>
        </div>
      );
    };
    // Визуализация нескольких компонентов
    const RenderingMultiple = () => {
      return (
        <div>
          <div className="RenderingMultiple__description----">
            <h3>Визуализация нескольких компонентов</h3>
            <div>
              Можно создавать коллекции элементов и включать их в JSX с помощью
              фигурных скобок <code>{}</code>.
            </div>
            <div>
              Например перебрать массив <code>numbers</code> с помощью функции
              JavaScript <code>map()</code>. Возвратить <code>&lt;li&gt;</code>{" "}
              элемент для каждого элемента. И присвоить полученный массив
              элементов <code>listItems</code>. Затем включить весь массив{" "}
              <code>listItems</code> внутрь <code>&lt;ul&gt;</code> элемента:
            </div>
          </div>
          <div className="RenderingMultiple__content----">
            <pre className="code-jsx">
              <code className="code-jsx">
                <ConstNamePlus num={" "} name1={"numbers"} />
                <br />
                <ConstNamePlus
                  name1={"listItems"}
                  name2={"numbers"}
                  metd={"map"}
                  param1={"number"}
                />
                <br />
                {"  "}
                <TagAttrValJSX
                  tag={"li"}
                  exp1={"number"}
                  // br={<br />}
                  // sp1={"    "}
                  // sp2={"  "}
                />
                <br />
                <span className="token punctuation">)</span>
                <span className="token punctuation">;</span>
                <br />
                <br />
                <ReturnTagExp
                  tag={"ul"}
                  exp1={"listItems"}
                  br={<br />}
                  sp1={"  "}
                />
              </code>
            </pre>
          </div>
          Этот код отображает маркированный список чисел от 1 до 5.
        </div>
      );
    };
    // Базовый компонент списка
    const BasicListComponent = (props) => {
      props = this.props.showKey;
      return (
        <div>
          <div className="BasicListComponent__description----">
            <h3>Базовый компонент списка</h3>
            <div>Обычно визуализируются списки внутри компонента</div>
            <div>
              Преобразовав предыдущий пример в Компонент, который принимает
              массив <code>numbers</code> и выводит список элементов
            </div>
            <div>
              Запуск такого кода, выведет предупреждение о том, что для
              элементов списка должен быть указан ключ. «Ключ» — это специальный
              строковый атрибут, который необходимо включать при создании
              списков элементов.
            </div>
            <div>
              Исправим проблему с отсутствующим ключом назначив <code>key</code>{" "}
              элементам нашего списка внутри
              <code>numbers.map()</code> по клику на <code>кнп</code>
            </div>
            <div>
              {/* попытка преобразования в общую fn для кнп knpToggleClick */}
              <button className="btmShowHide" onClick={this.knpToggleClick}>
                {/* <button onClick={knpToggleClick}> */}
                {/* <div>{this.state.showKey ? "Show" : "Hide"}</div> */}
                {/* <div>{this.state.show ? "Show" : "Hide"}</div> */}
                <div>{this.state.showKey ? "Hide" : "Show"}</div>
              </button>
            </div>
          </div>
          <div className="BasicListComponent__content----">
            <pre>
              <code>
                <FuncNameProps nameFn={"NumberList"} />
                <br />
                {"  "}
                <ConstNamePlus name1={"numbers"} />
                <br />
                {"  "}
                <ConstNamePlus
                  name1={"listItems"}
                  name2={"numbers"}
                  metd={"map"}
                  param1={"number"}
                />
                <br />
                {"    "}
                <TagAttrValJSX
                  hide={this.state.showKey}
                  // попытка преобразования в общую fn для кнп knpToggleClick
                  // show={this.state.show}
                  tag={"li"}
                  attr1={"key"}
                  val1={
                    <>
                      number<span className="token punctuation">.</span>
                      <span className="token attr-name">toString</span>
                      <span className="token number">()</span>
                    </>
                  }
                  exp1={"number"}
                  // br={<br />}
                  // sp1={"      "}
                  // sp2={"    "}
                />
                <br />
                {"  "}
                <span className="token punctuation">);</span>
                <br />
                {"  "}
                <ReturnTagExp
                  tag={"ul"}
                  exp1={"listItems"}
                  sp1={"    "}
                  sp2={"  "}
                  br={<br />}
                />
                <br />
                <span className="token punctuation">);</span>
                <br />
                <br />
                <ConstNamePlus num={" "} name1={"numbers"} />
                <br />
                <ConstRoot nameRoot={this.nameRoot()} />
              </code>
            </pre>
          </div>
          <div className="BasicListComponent__description--- temporary">
            <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
            <code style={{ color: "red" }}>!!!</code>
            сделать <code>fn()knpToggleClick</code> общей для всех. пока
            отрабатывает только <code>PrevRend</code> (предовращение рендера).
            Если более глубокая вложенность, как в{" "}
            <code>BasicListComponent</code>, то fn() не раб на этом Компоненте.
            Нужно продумать как передавать <code>props/state</code>, при этом
            чтоб др кнп не срабатывали.
          </div>
        </div>
      );
    };
    return (
      <div className="Lists---">
        <div className="Lists__description---">
          <h3>Списки</h3>
        </div>
        <div className="Lists__content---">
          <Transformation />
          <RenderingMultiple />
          <BasicListComponent />
        </div>
      </div>
    );
  }
}

export default ListsClComp;
