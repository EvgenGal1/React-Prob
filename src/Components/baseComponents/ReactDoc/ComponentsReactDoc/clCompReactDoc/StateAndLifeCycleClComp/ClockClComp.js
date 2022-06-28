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

class ClockClComp extends React.Component {
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
      <div className="ClockClComp---">
        <div className="ClockClComp__descript---">
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
        <div className="ClockClComp__content---">
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      </div>
    );
  }
}

export default ClockClComp;
