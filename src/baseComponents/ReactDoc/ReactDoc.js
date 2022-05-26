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
      name2: "Mailbox",
      nameRoot: <span className="token class-name">Mailbox</span>,
      nameFn1: "Mailbox",
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
              <FuncNameProps nameFn1={this.state.nameFn1} />
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
            <FuncNameProps nameFn1={this.state.nameFn1} />
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
      showKey: false,
      nameFn1: "NumberList",
    };
    // попытка преобразования в общую fn для кнп knpToggleClick
    // knpToggleClick = knpToggleClick.bind(this);
    this.knpToggleClick = this.knpToggleClick.bind(this);
  }
  // переменные вставки когда
  Num = () => {
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
                <ConstNum num={" "} />
                <br />
                <ConstNameMetdParam
                  name={"listItems"}
                  name2={"numbers"}
                  metd={"map"}
                  param={"number"}
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
                <ConstNum num={" "} />
                <br />
                <ConstNameMetdParam
                  name={"listItems"}
                  name2={"numbers"}
                  metd={"map"}
                  param={"number"}
                />
                <br />
                {"  "}
                <TagAttrValJSX
                  tag={"li"}
                  exp={"number"}
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
                  exp={"listItems"}
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
                <FuncNameProps nameFn1={this.state.nameFn1} />
                <br />
                {"  "}
                <ConstNum />
                <br />
                {"  "}
                <ConstNameMetdParam
                  name={"listItems"}
                  name2={"numbers"}
                  metd={"map"}
                  param={"number"}
                />
                <br />
                {"    "}
                <TagAttrValJSX
                  show={this.state.showKey}
                  // попытка преобразования в общую fn для кнп knpToggleClick
                  // show={this.state.show}
                  tag={"li"}
                  attr={"key"}
                  val={
                    <>
                      number<span className="token punctuation">.</span>
                      <span className="token attr-name">toString</span>
                      <span className="token punctuation">()</span>
                    </>
                  }
                  exp={"number"}
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
                  exp={"listItems"}
                  sp1={"    "}
                  sp2={"  "}
                  br={<br />}
                />
                <br />
                <span className="token punctuation">);</span>
                <br />
                <br />
                <ConstNum num={" "} />
                <br />
                <ConstRoot nameRoot={this.Num()} />
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
class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const KeyByIdAndIndex = () => {
      return (
        <div className="KeyByIdAndIndex">
          <div className="KeyByIdAndIndex__description">
            <h3>Ключ по id и index</h3>
            <div></div>
            <div></div>
          </div>
          <div className="KeyByIdAndIndex__content">2</div>
        </div>
      );
    };
    const ExtractComponentKeys = () => {
      return (
        <div className="ExtractComponentKeys">
          <div className="ExtractComponentKeys__description">
            <h3>Извлечение компонентов с ключами</h3>
            <div></div>
            <div></div>
          </div>
          <div className="ExtractComponentKeys__content">2</div>
        </div>
      );
    };
    const UniqKeyForBrothers = () => {
      return (
        <div className="UniqKeyForBrothers">
          <div className="UniqKeyForBrothers__description">
            <h3>Ключи должны быть уникальными только среди братьев и сестер</h3>
            <div></div>
            <div></div>
          </div>
          <div className="UniqKeyForBrothers__content">2</div>
        </div>
      );
    };
    const BuildMapInJSX = () => {
      return (
        <div className="BuildMapInJSX">
          <div className="BuildMapInJSX__description">
            <h3>Встраивание map() в JSX</h3>
            <div></div>
            <div></div>
          </div>
          <div className="BuildMapInJSX__content">2</div>
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
// const numbers = [1, 2, 3, 4, 5];
const ConstNum = ({ num }) => {
  // const numbers = num.numbers;
  let num1;
  // let num1 = num;
  // let num2;
  if (num) {
    // num2 = (
    num1 = (
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
  } else {
    num1 = (
      <>
        <span className="token parameter">props</span>
        <span className="token operator">.</span>numbers
      </>
    );
  }
  return (
    <>
      <span className="token keyword">const</span> numbers{" "}
      <span className="token operator">=</span> {num1}
      {/* {num2} */}
    </>
  );
};
// return (<tag(1)>{exp}</tag>) | 1 - attr={val} | br, sp1(пробел), sp2(пробел)
const ReturnTagExp = ({ tag, attr, val, exp, br, sp1, sp2 }) => {
  let letAttr;
  if (attr) {
    letAttr = (
      <>
        {" "}
        <span className="token attr-name">{attr}</span>
        <span className="token script-punctuation punctuation">=</span>
        <span className="token punctuation">&#123;</span>
        {val}
        <span className="token punctuation">&#125;</span>
      </>
    );
  } else if (attr) {
    letAttr = null;
  }
  return (
    <>
      <span className="token tag">return</span>{" "}
      <span className="token punctuation">(</span>
      {br}
      {sp1}
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{tag}</span>
      <span className="token punctuationhtml">&gt;</span>
      <span className="token punctuation">&#123;</span>
      {exp}
      <span className="token punctuation">&#125;</span>
      <span className="token punctuationhtml">&lt;/</span>
      <span className="token tag">{tag}</span>
      <span className="token punctuationhtml">&gt;</span>
      {br}
      {sp2}
      <span className="token punctuation">);</span>
    </>
  );
};
// const name = name2.metd((param) => | const listItems = numbers.map((number) =>
const ConstNameMetdParam = ({ name, name2, metd, param }) => {
  return (
    <>
      <span className="token keyword">const</span> {name}{" "}
      <span className="token operator">=</span> {name2}
      <span className="token operator">.</span>
      <span className="token function">{metd}</span>
      <span className="token punctuation">(</span>
      <span className="token punctuation">(</span>
      <span className="token parameter">{param}</span>
      <span className="token punctuation">)</span>{" "}
      <span className="token operator">=&gt;</span>
    </>
  );
};
// <tag(1)>{exp}</tag> | 1 - attr={val} | show(boolean), br, sp1(пробел), sp2(пробел)
const TagAttrValJSX = ({ show, tag, attr, val, exp, br, sp1, sp2 }) => {
  let letAttr;
  // if (!props.warn) {
  // if (attr) {
  if (show) {
    letAttr = (
      <>
        {" "}
        <span className="token attr-name">{attr}</span>
        <span className="token script-punctuation punctuation">=</span>
        <span className="token punctuation">&#123;</span>
        {val}
        <span className="token punctuation">&#125;</span>
      </>
    );
  } else if (show) {
    letAttr = null;
  }
  return (
    <>
      <span className="token punctuationhtml">&lt;</span>
      <span className="token tag">{tag}</span>
      {letAttr}
      <span className="token punctuationhtml">&gt;</span>
      {br}
      {sp1}
      <span className="token punctuation">&#123;</span>
      <span className="token parameter">{exp}</span>
      <span className="token punctuation">&#125;</span>
      {br}
      {sp2}
      <span className="token punctuationhtml">&lt;/</span>
      <span className="token tag">{tag}</span>
      <span className="token punctuationhtml">&gt;</span>
    </>
  );
  // }
};
// начало fn + имя функции + props
class FuncNameProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    return (
      <>
        <span className="token keyword">function</span>{" "}
        <span className="token class-name">{this.props.nameFn1}</span>
        <span className="token punctuation">(</span>
        <span className="token parameter">props</span>
        <span className="token punctuation">)</span>{" "}
        <span className="token punctuation">&#123;</span>
      </>
    );
  }
}
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
        <span className="token punctuation">&lt;</span>
        {/* <span className="token class-name">{this.props.name}</span> */}
        {this.props.nameRoot}
        <span className="token punctuation">/&gt;</span>
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
