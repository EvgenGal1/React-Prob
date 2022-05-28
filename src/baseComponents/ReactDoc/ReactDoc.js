/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
// теперь все Общие SCSS файлы собранны в один по пути в "./baseComponents/App.scss". В компонент подкл стили относящиеся только к нему
import "./ReactDoc.scss";

// !!! https://ru.reactjs.org/docs/components-and-props.
// Компоненты и пропсы `Components and Props`=============================================================================
{
  //   Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.
  // Их можно складывать вместе и использовать несколько раз.
  // Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране.
}

// !!! https://ru.reactjs.org/docs/state-and-lifecycle.html
// Состояние и жизненный цикл `State and Lifecycle`=============================================================================
// понятия «состояние» (state) и «жизненный цикл» (lifecycle) React-компонентов
class Clock extends React.Component {
  // Классовые компоненты всегда должны вызывать базовый конструктор с аргументом props.
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // Метод componentDidMount() запускается после того, как компонент отрендерился в DOM — здесь мы и установим таймер
  // сохраняем ID таймера в this (this.timerID)
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // сбросить таймер в методе жизненного цикла componentWillUnmount()
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // метод tick() - Он запускается таймером каждую секунду и вызывает this.setState()
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="clock---">
        <div className="clock__descript---">
          <h3>Понятия «состояние» и «жизненного цикла» на примере таймера </h3>
          <div>
            1. Когда мы передаём Сlосk / в RеасtDОМ.rеndеr ( ), React вызывает
            компонента. Clock должен отображать текущее время, поэтому задаём
            начальное состояние this.state объектом с текущим временем.
          </div>
          <div>
            2. React вызывает метод render() компонента Clock. Таким образом
            React узнаёт, что отобразить на экране. Далее React обновляет DOM
            так, чтобы он соответствовал выводу рендера Clock.
          </div>
          <div>
            3. Как только вывод рендера Clock вставлен в DOM, React вызывает
            метод жизненного цикла componentDidMount(). Внутри него компонент
            Clock указывает браузеру установить таймер, который будет вызывать
            tick() раз в секунду.
          </div>
          <div>
            4. Таймер вызывает tick() ежесекундно. Внутри tick() мы просим React
            обновить состояние компонента, вызывая setState() с текущим
            временем. React реагирует на изменение состояния и снова запускает
            render(). На этот раз this.state.date в методе render() содержит
            новое значение, поэтому React заменит DOM. Таким образом компонент
            Clock каждую секунду обновляет UI.
          </div>
          <div>
            5. Если компонент Clock когда-либо удалится из DOM, React вызовет
            метод жизненного цикла componentWillUnmount() и сбросит таймер.
          </div>
        </div>
        <div className="clock__content---">
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      </div>
    );
  }
}
// подкл всех Компонентов Состояния и жизненный цикла
class StateLifecycle extends React.Component {
  render() {
    return (
      <div className="state-lifecycle--">
        <div className="state-lifecycle__descriptin--">
          <h3>Состояние (state) и жизненный цикл (lifecycle)</h3>
        </div>
        <div className="state-lifecycle__content--">
          <Clock />
        </div>
        <div className="state-lifecycle__frame--">StateLifecycle</div>
      </div>
    );
  }
}

// !!! https://ru.reactjs.org/docs/handling-events.html
// Обработка событий `Handling Events`=============================================================================
{
  // События в React именуются в стиле camelCase вместо нижнего регистра.
  // С JSX вы передаёте функцию как обработчик события вместо строки.
  // в HTML
  {
    /* <button onclick="activateLasers()">
  Активировать лазеры
</button> */
  }
  // В React
  {
    /* <button onClick={activateLasers}>
  Активировать лазеры
</button> */
  }
  // в React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault.
  // В HTML для отмены отправки формы (действие по умолчанию) пишем так:
  {
    /* <form onsubmit="console.log('Отправлена форма.'); return false">
  <button type="submit">Отправить</button>
</form> */
  }
  // В React
  {
    /*function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Отправлена форма.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Отправить</button>
    </form>
  );
} */
  }
  // В коде "e" — это синтетическое событие. React определяет синтетические события

  // При использовании React обычно не нужно вызывать addEventListener, чтобы добавить обработчики в DOM-элемент после его создания. Вместо этого добавьте обработчик сразу после того, как элемент отрендерился.
  // В компоненте, определённом с помощью ES6-класса, в качестве обработчика события обычно выступает один из методов класса. Например, этот компонент Toggle рендерит кнопку, которая позволяет пользователю переключать состояния между «Включено» и «Выключено»:
  // !!! посмотреть здесь - https://codepen.io/gaearon/pen/xEmzGg?editors=0010
  // При обращении к this в JSX-колбэках необходимо учитывать, что методы класса в JavaScript по умолчанию не привязаны к контексту. Если вы забудете привязать метод this.handleClick и передать его в onClick, значение this будет undefined в момент вызова функции.
  // Дело не в работе React, это часть того, как работают функции в JavaScript. Обычно, если ссылаться на метод без () после него, например, onClick={this.handleClick}, этот метод нужно привязать.
  // Если вам не по душе bind, существует два других способа. Если вы пользуетесь экспериментальным синтаксисом общедоступных полей классов

  // Передача аргументов в обработчики событий
  // Внутри цикла часто нужно передать дополнительный аргумент в обработчик события. Например, если id — это идентификатор строки, можно использовать следующие варианты:
  {
    /* <button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button>
<button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button> */
  }
  // Две строки выше — эквивалентны, и используют стрелочные функции и Function.prototype.bind соответственно.
  // В обоих случаях аргумент "e", представляющий событие React, будет передан как второй аргумент после идентификатора. Используя стрелочную функцию, необходимо передавать аргумент явно, но с "bind" любые последующие аргументы передаются автоматически.
}

// !!! https://ru.reactjs.org/docs/conditional-rendering.html
// Условный рендеринг `Conditional Rendering`=============================================================================
// Бывает нужно объяснить React, как состояние влияет на то, какие компоненты требуется скрыть, а какие — отрендерить, и как именно. В таких ситуациях используйте условный оператор JavaScript или выражения подобные if.

// приветствие. Условный опрератор If + Переменные
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  // передаём в state.isLoggedIn true
  handleClick = () => {
    this.setState({ isLoggedIn: true });
  };
  // передаём в state.isLoggedIn false
  handleNoClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    // сокращ. и цикл для Переменных элемента
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleNoClick} />;
    } else {
      button = <LoginButton onClick={this.handleClick} />;
    }

    function UserGreeting(props) {
      return <div>Welcome back!</div>;
    }

    function GuestGreeting(props) {
      return <div>Please sign up.</div>;
    }

    // в зависимости от принятого prop отразит один из компонентов
    function DefineGreeting(props) {
      const isLoggedIn = props.isLoggedIn;
      // const isLoggedInCnp = this.state.isLoggedInCnp;
      // const isLoggedInCnp = this.handleClick()
      // const isLoggedIn2 = true;
      if (isLoggedIn) {
        // if (isLoggedIn || isLoggedInCnp) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }

    // Переменные элемента
    // использ переменные для хранения элементов. Помощь в визуале, остальное как прежде.
    // Компоненты-кнп выхода из системы и входа в систему
    function LoginButton(props) {
      // console.log("props : " + props);
      return (
        <button style={{ background: "inherit" }} onClick={props.onClick}>
          Я Свой
        </button>
      );
    }

    function LogoutButton(props) {
      return (
        <button style={{ background: "inherit" }} onClick={props.onClick}>
          Я Чужой
        </button>
      );
    }

    return (
      <div className="greeting---">
        <div className="greeting__descript---">
          {/* <h3>Условный рендеринг</h3>
          <div>
            Бывает нужно объяснить React, как состояние влияет на то, какие
            компоненты требуется скрыть, а какие — отрендерить, и как именно. В
            таких ситуациях используйте операторы (if, else) JavaScript и/или
            тернарные операторы (if...else, cond ? true : false).
          </div> */}
          <h3>Условный опрератор If + Переменные</h3>
          <div>
            Создали компонент Greeting, который отражает один из этих
            компонентов в зависимости от того, выполнено ли условие (вход на
            сайт)
          </div>
          <div>
            В первой части передам false напрямую или изначально записываем
            state.isLoggedIn.false
          </div>
          <div>
            Во второй используем переменные для хранения эл-ов. Помошь в
            визуале, логика такая же.
          </div>
          <div className="IfAnd__descript--- temporary">
            <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
            <code style={{ color: "red" }}>!!!</code> НАПИСАТЬ КОД | ПЕРЕБРАТЬ
          </div>
        </div>
        <div className="greeting__content---">
          <div className="greeting__oneexp----">
            <div className="greeting__oneexp_descript----">
              <span className="spmdnon">Напрямую передаём . </span>{" "}
              <span> false </span>
            </div>
            <div className="greeting__oneexp_content----">
              <DefineGreeting
                // первоначально передавалось напрямую
                // isLoggedIn={false}
                // попытка передать 2 значения
                // isLoggedIn2={this.state.isLoggedIn}
                // передаём состояние
                isLoggedIn={this.state.isLoggedIn}
              />
            </div>
          </div>
          <div className="greeting__twoexp----">
            <div className="greeting__twoexp_descript----">
              <span className="spmdnon">Передаём через переменные </span>{" "}
              {"   "}
              <div>кнп</div>
            </div>
            <div className="greeting__twoexp_content----">
              {/* <DefineGreeting
                  isLoggedIn={isLoggedIn}
                  // isLoggedIn={this.state.isLoggedIn}
                /> */}
              {button}
              {/* свой вариант. меняем state.isLoggedIn по кликам ч/з 2
              fn()handleClick/handleNoClick */}
              {/* 
                    <>
                      <button
                        className="greeting__content-22"
                        type="button"
                        onClick={this.handleClick}
                      >
                        Я Свой {this.state.isLoggedIn ? "ON" : "OFF"}
                      </button>{" "}
                      <button
                        className="greeting__content-22"
                        onClick={() => {
                          // this.handleNoClick();
                          this.handleNoClick();
                        }}
                        // onClick={this.handleNoClick} // альтернатива
                      >
                        Я Чужой {this.state.isLoggedIn ? "OFF" : "ON"}
                      </button>
                    </> 
                */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Встроенный оператор If с логическим оператором &&
// const IfAnd = () => {
class IfAnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name2: "Mailbox",
      nameRoot: <span className="token class-name">Mailbox</span>,
      // nameFn1: "Mailbox",
    };
  }
  render() {
    // function Mailbox(props) {
    const Mailbox = (props) => {
      const unreadMessages = props.unreadMessages;
      return (
        <>
          <div>Hello!</div>
          {unreadMessages.length > 0 && (
            <div>You have {unreadMessages.length} unread messages.</div>
          )}
        </>
      );
    };

    const messages = ["React", "Re: React", "Re:Re: React"];

    return (
      <div className="IfAnd---">
        <div className="IfAnd__descript---">
          <h3>Встроенный оператор If с логическим оператором &&</h3>
          <div>
            Можно встраивать выражения в JSX, заключая их в фигурные скобки. Это
            включает в себя логический <code>&&</code> оператор JavaScript. Это
            может быть удобно для условного включения элемента
          </div>
          <div>
            Это работает, потому что в JavaScript{" "}
            <code>true && expression</code> всегда оценивается как{" "}
            <code>expression</code>, и <code>false && expression</code> всегда
            оценивается как <code>false</code>. Следовательно, если условие
            равно <code>true</code>, элемент сразу после <code>&&</code>{" "}
            появится в выводе. Если это <code>false</code>, React проигнорирует
            и пропустит его.
          </div>
        </div>
        <Mailbox unreadMessages={messages} />
        <div className="IfAnd__descript--- temporary">
          <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
          <code style={{ color: "red" }}>!!!</code> КОД | ПЕРЕБРАТЬ{" "}
          <code>pre</code> и <code>code</code>
        </div>
        <div className="IfAnd-content---">
          <pre className="code-jsx">
            <code className="code-jsx">
              {/* <span className="token keyword">function</span>{" "}
              <span className="token function">Mailbox</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">props</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">&#123;</span> */}
              <FuncNameProps nameFn={"Mailbox"} />
              <br />
              {"  "}
              <span className="token keyword">const</span> unreadMessages{" "}
              <span className="token operator">=</span> props
              <span className="token punctuation">.</span>unreadMessages
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
              <span className="token plain-text"></span>
              <span className="token plain-text"></span>
              <br />
              {"      "}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>h1
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token plain-text">Hello!</span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;/</span>h1
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <br />
              {"      "}
              <span className="token plain-text"></span>
              <span className="token plain-text"></span>
              <span className="token punctuation">&#123;</span>unreadMessages
              <span className="token punctuation">.</span>length{" "}
              <span className="token operator">&gt;</span>{" "}
              <span className="token number">0</span>{" "}
              <span className="token operator">&amp;&amp;</span>
              <br />
              {"        "}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>h2
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token plain-text"></span>
              <br />
              {"          "}
              <span className="token plain-text">You have </span>
              <span className="token punctuation">&#123;</span>unreadMessages
              <span className="token punctuation">.</span>length
              <span className="token punctuation">&#125;</span>
              <span className="token plain-text"> unread messages.</span>
              <br />
              {"        "}
              <span className="token plain-text"></span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;/</span>h2
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <br />
              {"      "}
              <span className="token punctuation">&#125;</span>
              <span className="token plain-text"></span>
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
              <br />
              <br />
              <font></font>
              <font></font>
              <span className="token keyword">const</span> messages{" "}
              <span className="token operator">=</span>{" "}
              <span className="token punctuation">[</span>
              <span className="token string">'React'</span>
              <span className="token punctuation">,</span>{" "}
              <span className="token string">'Re: React'</span>
              <span className="token punctuation">,</span>{" "}
              <span className="token string">'Re:Re: React'</span>
              <span className="token punctuation">]</span>
              <span className="token punctuation">;</span>
              <font></font>
              <font></font>
              <br />
              <br />
              {/* <ConstRoot name={this.name} */}
              {/* <ConstRoot name={this.Num()} /> */}
              <ConstRoot nameRoot={this.state.nameRoot} />
            </code>
          </pre>
        </div>
        <div className="IfAnd__descript--- temporary">
          <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
          <code style={{ color: "red" }}>!!!</code> Можно доработать
          визуализацию чтоб по клик на кнп увелич/уменьшать список тем самым
          меняя ввывод
        </div>
      </div>
    );
  }
}
// Встроенный If-Else с условным оператором
const IfCondOper = () => {
  return (
    <div className="IfCondOper---">
      <div className="IfCondOper__descript---">
        <h3>Встроенный If-Else с условным оператором</h3>
        <div>
          Условный оператор JavaScript <code>condition ? true : false</code>{" "}
          используется для условной визуализации небольшого блока текста.
        </div>
      </div>
      <div className="IfAnd__descript--- temporary">
        <code style={{ color: "red" }}>!!!</code> ДОРАБОТАТЬ{" "}
        <code style={{ color: "red" }}>!!!</code> КОД | ПЕРЕБРАТЬ{" "}
        <code>pre</code> и <code>code</code>
      </div>
      <div className="IfCondOper-content---">
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
      <div className="IfCondOper__descript---">
        Можно использовать для больших выражений, но результат того что
        происходит может быть менее очевиден
      </div>
    </div>
  );
};
// предовращение рендера
class PrevRend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showWarning: false,
      show: false,
      nameRoot: <span className="token class-name">Page</span>,
      nameFn1: "WarningBanner",
    };
    // попытка преобразования в общую fn для кнп knpToggleClick
    // this.handleToggleClick = this.handleToggleClick.bind(this);
    // knpToggleClick = knpToggleClick.bind();
    knpToggleClick = knpToggleClick.bind(this);
  }
  // попытка преобразования в общую fn для кнп knpToggleClick
  // handleToggleClick() {
  //   this.setState((state) => ({
  //     showWarning: !state.showWarning,
  //   }));
  // }

  render() {
    const WarningBanner = (props) => {
      if (!props.warn) {
        return null;
      }
      return (
        <code className="code-jsx">
          <div className="warning">Warning!</div>
          <div className="warning2">
            <FuncNameProps nameFn={"WarningBanner"} />
            <br />
            {"  "}
            <span className="token tag">if</span>{" "}
            <span className="token punctuation">(</span>
            <span className="token operator">!</span>
            <span className="token parameter">props</span>
            <span className="token operator">.</span>warn
            <span className="token punctuation">)</span>{" "}
            <span className="token punctuation">&#123;</span>
            <br />
            {"    "}
            <span className="token tag">return</span>{" "}
            <span className="token boolean">null</span>
            <span className="token punctuation">;</span>
            <br />
            {"  "}
            <span className="token punctuation">&#125;</span>
            <br />
            <br />
            {"  "}
            <span className="token tag">return</span>{" "}
            <span className="token punctuation">(</span>
            <br />
            {"    "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuationhtml">&lt;</span>div
              </span>{" "}
              <span className="token attr-name">className</span>
              <span className="token attr-value">
                <span className="token operator">=</span>
                <span className="token attr-value ">"warning"</span>
              </span>
              <span className="token punctuationhtml">&gt;</span>
            </span>
            <br />
            {"      "}
            <span className="token plain-text"></span>
            <span className="token plain-text">Warning!</span>
            <span className="token plain-text"></span>
            <br />
            {"    "}
            <span className="token punctuationhtml">&lt;/</span>
            <span className="token tag">div</span>
            <span className="token punctuationhtml">&gt;</span>
            <br />
            {"  "}
            <span className="token punctuation">)</span>
            <span className="token punctuation">;</span>
            <br />
            <span className="token punctuation">&#125;</span>
          </div>
          <div className="warning3">Warning!</div>
          <br />
        </code>
      );
    };
    // console.log("PrevRend : " + this.state.show);
    return (
      <div className="PrevRend---">
        <div className="PrevRend__descript---">
          <h3>Предотвращение рендеринга компонента</h3>
          <div>
            В редких случаях вы можете захотеть, чтобы компонент скрывал себя,
            даже если он был визуализирован другим компонентом. Чтобы сделать
            это, верните <code>null</code> вместо своего вывода рендеринга.
          </div>
          <div>
            <code>&lt;WarningBanner/&gt;</code> визуализируется в зависимости от
            значения реквизита под названием <code>warn</code>. Если значение
            свойства равно
            <code>false</code>, то компонент не отображается:
          </div>
          <div>
            {/* попытка преобразования в общую fn для кнп knpToggleClick */}
            {/* <button onClick={this.handleToggleClick}> */}
            {/* <button onClick={knpToggleClick}> */}
            <button className="btmShowHide" onClick={knpToggleClick}>
              {/* <div>{this.state.showWarning ? "Show" : "Hide"}</div> */}
              <div>{this.state.show ? "Hide" : "Show"}</div>
            </button>
            {/* <button onClick={(e) => this.deleteRow(id, e)}>Удалить строку</button> */}
            {/* <button onClick={this.deleteRow.bind(this, id)}>Удалить строку</button> */}
          </div>
        </div>
        <div className="PrevRend__content---">
          <pre className="code-jsx">
            <code className="code-jsx">
              {/* <WarningBanner warn={this.state.showWarning} /> */}
              <WarningBanner warn={this.state.show} />
              <span className="token keyword">class</span>{" "}
              <span className="token class-name">Page</span>{" "}
              <span className="token keyword">extends</span>{" "}
              <span className="token class-name">React</span>
              <span className="token tag">.</span>
              <span className="token class-name">Component</span>{" "}
              <span className="token punctuation">&#123;</span>
              <br />
              {"  "}
              <span className="token function">constructor</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">props</span>
              <span className="token punctuation">)</span>{" "}
              <span className="token punctuation">&#123;</span>
              <br />
              {"    "}
              <span className="token function">super</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">props</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">;</span>
              <br />
              {"    "}
              <span className="token parameter">this</span>
              <span className="token operator">.</span>state{" "}
              <span className="token operator">=</span>{" "}
              <span className="token punctuation">&#123;</span>showWarning{" "}
              <span className="token operator">:</span>{" "}
              <span className="token boolean">true</span>
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">;</span>
              <br />
              {"    "}
              <span className="token parameter">this</span>
              <span className="token operator">.</span>handleToggleClick{" "}
              <span className="token operator">=</span>{" "}
              <span className="token parameter">this</span>
              <span className="token operator">.</span>
              <span className="token function">handleToggleClick</span>
              <span className="token operator">.</span>
              <span className="token function">bind</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">this</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">;</span>
              <br />
              {"  "}
              <span className="token punctuation">&#125;</span>
              <br />
              <br />
              <font></font>
              <font></font>
              {"  "}
              <span className="token function">handleToggleClick</span>
              <span className="token punctuation">(</span>
              <span className="token punctuation">)</span>{" "}
              <span className="token punctuation">&#123;</span>
              <br />
              {"    "}
              <span className="token parameter">this</span>
              <span className="token operator">.</span>
              <span className="token function">setState</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">state</span>{" "}
              <span className="token operator">=&gt;</span>{" "}
              <span className="token punctuation">(</span>
              <span className="token punctuation">&#123;</span>
              <br />
              {"      "}
              showWarning
              <span className="token operator">:</span>{" "}
              <span className="token operator">!</span>
              <span className="token parameter">state</span>
              <span className="token operator">.</span>showWarning
              <br />
              {"    "}
              <span className="token punctuation">&#125;</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">)</span>
              <span className="token punctuation">;</span>
              <br />
              {"  "}
              <span className="token punctuation">&#125;</span>
              <br />
              <br />
              <font></font>
              <font></font>
              {"  "}
              <span className="token function">render</span>
              <span className="token punctuation">(</span>
              <span className="token punctuation">)</span>{" "}
              <span className="token punctuation">&#123;</span>
              <br />
              {"    "}
              <span className="token tag">return</span>{" "}
              <span className="token punctuation">(</span>
              <br />
              {"      "}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuationhtml">&lt;</span>div
                </span>
                <span className="token punctuationhtml">&gt;</span>
              </span>
              <br />
              {"        "}
              <span className="token punctuationhtml">&lt;</span>
              <span className="token class-name">WarningBanner</span>{" "}
              <span className="token attr-name">warn</span>
              <span className="token operator">=</span>
              <span className="token punctuation">&#123;</span>
              <span className="token parameter">this</span>
              <span className="token operator">.</span>state
              <span className="token operator">.</span>showWarning
              <span className="token punctuation">&#125;</span>
              <span className="token punctuationhtml">/&gt;</span>
              <span className="token plain-text"></span>
              <br />
              {"        "}
              <span className="token plain-text"></span>
              <span className="token punctuationhtml">&lt;</span>
              <span className="token tag">button</span>{" "}
              <span className="token attr-name">onClick</span>
              <span className="token operator">=</span>
              <span className="token punctuation">&#123;</span>
              <span className="token parameter">this</span>
              <span className="token punctuation">.</span>
              <span className="token function">handleToggleClick</span>
              <span className="token punctuation">&#125;</span>
              <span className="token punctuationhtml">&gt;</span>
              <br />
              {"          "}
              <span className="token punctuation">&#123;</span>
              <span className="token parameter">this</span>
              <span className="token operator">.</span>state
              <span className="token operator">.</span>showWarning{" "}
              <span className="token operator">?</span>{" "}
              <span className="token atrule">'Hide'</span>{" "}
              <span className="token operator">:</span>{" "}
              <span className="token atrule">'show'</span>
              <span className="token punctuation">&#125;</span>
              <span className="token plain-text"></span>
              <span className="token plain-text"></span>
              <br />
              {"        "}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuationhtml">&lt;/</span>button
                </span>
                <span className="token punctuationhtml">&gt;</span>
              </span>
              <br />
              {"      "}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuationhtml">&lt;/</span>div
                </span>
                <span className="token punctuationhtml">&gt;</span>
              </span>
              <br />
              {"    "}
              <span className="token punctuation">);</span>
              <br />
              {"  "}
              <span className="token punctuation">&#125;</span>
              <br />
              <span className="token punctuation">&#125;</span>
              <br />
              <br />
              <ConstRoot nameRoot={this.state.nameRoot} />
            </code>
          </pre>
        </div>
        <div className="PrevRend__descript---">
          Возврат <code>null</code> из <code>render</code> метода компонента не
          влияет на запуск методов жизненного цикла компонента. Например{" "}
          <code>componentDidUpdate</code>, все равно будут называть.
        </div>
      </div>
    );
  }
}

// подкл всех Компонентов Условного рендеринга
class ConditionalRendering extends React.Component {
  render() {
    return (
      <div className="conditional-rendering--">
        <div className="conditional-rendering__descript--">
          <h3>Условный рендеринг</h3>
          <div>
            Бывает нужно объяснить React, как состояние влияет на то, какие
            компоненты требуется скрыть, а какие — отрендерить, и как именно. В
            таких ситуациях используйте операторы (<code>if else</code>,{" "}
            <code>&&</code>) JavaScript и/или тернарные операторы (
            <code>if...else</code>, <code>condition ? true : false</code>).
          </div>
        </div>
        <div className="conditional-rendering__content--">
          <Greeting />
          <IfAnd />
          <IfCondOper />
          <PrevRend />
        </div>
        <div className="conditional-rendering__descript--">
          Подробнее по ссылке{" "}
          <code>https://reactjs.org/docs/conditional-rendering.html</code>
        </div>
        <div className="conditional-rendering__frame--">
          ConditionalRendering
        </div>
      </div>
    );
  }
}

// !!! https://reactjs.org/docs/lists-and-keys.html
// Списки и ключи `Lists and keys` =======================================================================================
// Списки
class Lists extends React.Component {
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
          <div className="Transformation__descript----">
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
          <div className="Transformation__descript----">
            Этот код записывается [2, 4, 6, 8, 10] в консоль.
          </div>
        </div>
      );
    };
    // Визуализация нескольких компонентов
    const RenderingMultiple = () => {
      return (
        <div>
          <div className="RenderingMultiple__descript----">
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
          <div className="BasicListComponent__descript----">
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
                  attr={"key"}
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
          <div className="BasicListComponent__descript--- temporary">
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
// Ключи
class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTrue: true,
      showJSX: true,
    };
    this.knpToggleClick = this.knpToggleClick.bind(this);
  }
  knpToggleClick() {
    this.setState((state) => ({
      showTrue: !state.showTrue,
      showJSX: !state.showJSX,
      // show: !state.show,
    }));
  }
  //  ----------------------------------------------------------------------------------
  // попытка преобразования в общую fn для кнп knpToggleClick
  knpToggleClick2 = (props) => {
    // this.setState((state) => ({
    //   // showTrue: !state.showTrue,
    //   this.props.showJSX: !state.showJSX,
    //   // this.props: !state.props,
    //   // show: !state.show,
    // }));
    this.setState((prevState) => ({
      showJSX: !prevState.showJSX,
    }));
  };
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
          <div className="KeyByIdAndIndex__description">
            <h3>Ключ по id и index</h3>
            <div>
              Ключи помогают React определить, какие элементы были изменены,
              добавлены или удалены. Ключи должны быть переданы элементам внутри
              массива, чтобы придать элементам стабильную идентичность:
            </div>
            <div></div>
          </div>
          <div className="KeyByIdAndIndex__content">
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
                  attr={"key"}
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
          <div className="KeyByIdAndIndex__description">
            <div>
              Лучший способ выбрать ключ — использовать строку, которая
              однозначно идентифицирует элемент списка среди его братьев и
              сестер. Чаще всего вы будете использовать идентификаторы из ваших
              данных в качестве ключей:
            </div>
          </div>
          <div className="KeyByIdAndIndex__content">
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
                  attr={"key"}
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
          <div className="KeyByIdAndIndex__description">
            <div>
              Если у вас нет стабильных идентификаторов для отображаемых
              элементов, вы можете использовать индекс элемента в качестве ключа
              в крайнем случае:
            </div>
          </div>
          <div className="KeyByIdAndIndex__content">
            <pre>
              <code>
                <ConstNamePlus
                  name1={"todoItems"}
                  name2={"todos"}
                  metd={"map"}
                  param1={"todo"}
                  param2={
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
                  attr={"key"}
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
          <div className="KeyByIdAndIndex__description">
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
          <div className="ExtractComponentKeys__description">
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
              <button className="btmShowHide" onClick={this.knpToggleClick}>
                <div> {this.state.showTrue ? "Hide" : "Show"}</div>
              </button>
            </div>
          </div>
          <div className="ExtractComponentKeys__content">
            <pre>
              <code>
                <FuncNameProps nameFn={"ListItem"} />
                <BrSp sp={"  "} />
                <ConstNamePlus name1={"value"} hide={!this.state.showTrue} />
                <BrSp sp={"  "} />
                <ReturnTagExp
                  show={!this.state.showTrue}
                  tag={"li"}
                  attr={"key"}
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
                <CompLet
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
                            attr={"key"}
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
          <div className="UniqKeyForBrothers__description">
            <h3>Ключи должны быть уникальными только среди братьев и сестер</h3>
            <div>
              Ключи, используемые в массивах, должны быть уникальными среди
              своих братьев и сестер. Однако они не обязательно должны быть
              глобально уникальными. Мы можем использовать одни и те же ключи
              при создании двух разных массивов:
            </div>
            <div></div>
          </div>
          <div className="UniqKeyForBrothers__content">
            <pre>
              <code>
                <FuncNameProps nameFn={"Blog"} />
                <BrSp sp={"  "} />
                <ConstNamePlus name1={"sidebar"} empty={true} />
                <BrSp sp={"    "} />
                <TagAttrValJSX
                  tag={"ul"}
                  attr={""}
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
                      attr={"key"}
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
                  attr={"key"}
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
                  attr={""}
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
          <div className="UniqKeyForBrothers__description">
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
          <div className="UniqKeyForBrothers__content">
            <pre>
              <code>
                <ConstNamePlus
                  name1={"content"}
                  name2={"posts"}
                  metd={"map"}
                  param1={"post"}
                />
                <BrSp sp={"  "} />
                <CompLet
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
                      <AttrValMetd attr={"id"} val1={"post"} val2={"id"} />
                    </>
                  }
                  prop3={
                    <>
                      <BrSp sp={"   "} />
                      <AttrValMetd
                        attr={"title"}
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
          <div className="BuildMapInJSX__description">
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
              <button className="btmShowHide" onClick={this.knpToggleClick}>
                <div>{this.state.showJSX ? "Hide" : "Show"}</div>
              </button>
            </div>
          </div>
          <div className="BuildMapInJSX__content">
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
                  value1={
                    <>
                      <ConstNamePlus
                        name1="listItems"
                        name2={"numbers"}
                        metd={"map"}
                        param1={"number"}
                      />
                      <BrSp sp={"    "} />
                      <CompLet
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
                              attr={"value"}
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
                {/* 

                  return (
                    <ul>
                      {numbers.map((number) =>
                        <ListItem key={number.toString()}
                                  value={number} />
                      )}
                    </ul>
                  );
                }
                */}
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
                          <CompLet
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
                                  attr={"value"}
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
                      value1={""}
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
                      value1={""}
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
          <div className="BuildMapInJSX__description">
            Иногда это приводит к более четкому коду, но этим стилем также можно
            злоупотреблять. Как и в JavaScript, вам решать, стоит ли извлекать
            переменную для удобочитаемости. Имейте в виду, что если{" "}
            <code>map()</code> тело слишком вложенное, самое время извлечь
            компонент
          </div>
          <div className="BasicListComponent__descript--- temporary">
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
          </div>
        </div>
      );
    };

    return (
      <div className="Keys---">
        <div className="Keys__description---">
          <h3>Ключи</h3>
        </div>
        <div className="Keys__content---">
          <KeyByIdAndIndex />
          <ExtractComponentKeys />
          <UniqKeyForBrothers />
          <BuildMapInJSX />
        </div>
      </div>
    );
  }
}
// подкл всех Компонентов в "Списки и Ключи"
class ListsAndKeys extends React.Component {
  //  constructor(props) {
  // super(props);
  //this.state = {  }
  //  }
  render() {
    return (
      <div className="ListsAndKeys">
        {/* <div className="ListsAndKeys__description--"></div> */}
        <div className="ListsAndKeys__content--">
          <Lists />
          <Keys />
        </div>
        <div className="ListsAndKeys__frame--">Lists And Keys</div>
      </div>
    );
  }
}

// ОБЩИЕ ПЕРЕМЕННЫЕ стиль/код/элементы ----------------------------------------------------------------------------------
// тег <br/> + отступ
const BrSp = ({ sp }) => {
  return (
    <>
      <br />
      {sp}
    </>
  );
};
// const Name prop1={val1 val2} prop2
const CompLet = ({ name, prop1, val1, val2, prop2, prop3, dop4 }) => {
  let value2;
  if (val2) {
    value2 = (
      <>
        <span className="token operator">.</span>
        <span className="token attr-name">{val2}</span>
      </>
    );
  } else {
    value2 = <>{val2}</>;
  }
  return (
    <>
      <span className="token punctuationhtml">&lt;</span>
      <span className="token class-name">{name}</span>{" "}
      <span className="token attr-name">{prop1}</span>
      <span className="token punctuation">=&#123;</span>
      <span className="token parameter">{val1}</span>
      {value2}
      <span className="token punctuation">&#125;</span>
      {dop4}
      {prop2}
      {/* <AttrValMetd attr={prop2} val1={val3} val2={val4} /> */}
      {prop3}
      <span className="token punctuationhtml">/&gt;</span>
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
// attr={val1,val2}
const AttrValMetd = ({ attr, val1, val2 }) => {
  let value2;
  if (val2) {
    value2 = (
      <>
        <span className="token operator">.</span>
        <span className="token attr-name">{val2}</span>
      </>
    );
  } else {
    value2 = <>{val2}</>;
  }
  return (
    <>
      {" "}
      <span className="token attr-name">{attr}</span>
      {/* <span className="token  punctuation">=</span> */}
      <span className="token punctuation">=&#123;</span>
      <span className="token parameter">{val1}</span>
      {/* {
        (val2 = (
          <>
            <span className="token operator">.</span>
            <span className="token attr-name">{val2}</span>
          </>
        ))
      } */}
      {value2}
      <span className="token punctuation">&#125;</span>
    </>
  );
};
// return (<tag(1)>{exp}</tag>) | 1 -  | br, sp1(пробел), sp2(пробел), comment
const ReturnTagExp = ({
  tag,
  attr,
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
  // при передаче show показать атрибут и значение
  // if ((attr || val1) && show) {

  if (show) {
    letAttr = null;
  } else if (attr && val1) {
    letAttr = (
      <>
        <AttrValMetd attr={attr} val1={val1} val2={val2} />
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
// <tag(1)>{exp exp2}</tag> | 1 - attr={val} | show(boolean), br, sp1(пробел), sp2(пробел)
const TagAttrValJSX = ({
  tag,
  attr,
  val1,
  val2,
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
  let letAttr;
  if (hide) {
    letAttr = null;
  } else if (attr && val1) {
    letAttr = (
      <>
        <AttrValMetd attr={attr} val1={val1} val2={val2} />
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
      {dop1}
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{tag}</span>
      {letAttr}
      <span className="token punctuationhtml">&gt;</span>
      {br}
      {sp1}
      {BracesOpen}
      <span className="token parameter">{exp1}</span>
      {dop4}
      {exp2}
      {BracesClose}
      {br}
      {sp2}
      <span className="token punctuationhtml">&lt;/</span>
      <span className="token tag">{tag}</span>
      <span className="token punctuationhtml">&gt;</span>
      {dop2}
    </>
  );
  // }
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
// ОБЩИЕ FN для всех Компонентов ----------------------------------------------------------------------------------
// переключение кнп. принимает только boolen ?
// так раб, пока ток showWarn
function knpToggleClick() {
  // let knpToggleClick = () => {
  this.setState((state) => ({
    showKey: !state.showKey,
    show: !state.show,
    showWarning: !state.showWarning,
  }));
  // console.log("this : " + this);
  // console.log("this : " + this.state);
  // this.setState((props) => ({
  //   showKey: !props.showKey,
  //   showWarning: !props.showWarning,
  // }));
}

// !!!
// подкл.всех Компонентов React Doc =!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=¡=!=
class ReactDocComponents extends React.Component {
  render() {
    return (
      <div className="ReactDocComponents">
        <div className="ReactDocComponents__descript">
          <h3>Общие понятия/концепции/методы из React документации</h3>
        </div>

        <div className="ReactDocComponents__content">
          <StateLifecycle />
          {/* <Greeting /> */}
          <ConditionalRendering />
          <ListsAndKeys />
        </div>
        <div className="ReactDocComponents__frame">ReactDoc.js</div>
      </div>
    );
  }
}

export default ReactDocComponents;
