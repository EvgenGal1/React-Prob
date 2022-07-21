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
  SelectLet,
  IfElse,
} from "../../../../../../js/examples/ExpPreCode.js";

class LiftingStateUpClComp extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {  }
  }
  render() {
    return (
      <div className="LiftingStateUpClComp">
        <div className="LiftingStateUpClComp__description">
          <h3>Подъем состояния вверх</h3>
          <p>
            В настоящее время оба <code>TemperatureInput</code> компонента
            независимо сохраняют свои значения в локальном состоянии:
          </p>
          <p>
            Однако мы хотим, чтобы эти два входа были синхронизированы друг с
            другом. Когда мы обновляем ввод в градусах Цельсия, ввод в градусах
            Фаренгейта должен отражать преобразованную температуру, и наоборот.
          </p>
          <p>
            В React совместное использование состояния достигается путем
            перемещения его к ближайшему общему предку компонентов, которым оно
            нужно. Это называется «подъем состояния вверх». Мы удалим локальное
            состояние из и вместо этого <code>TemperatureInput</code> переместим
            его в <code>Calculator</code>
          </p>
          <p>
            Если <code>Calculator</code> владеет общим состоянием, оно
            становится «источником правды» для текущей температуры на обоих
            входах. Он может дать указание им обоим иметь значения, которые
            согласуются друг с другом. Поскольку реквизиты обоих{" "}
            <code>TemperatureInput</code> компонентов поступают из одного и того
            же родительского <code>Calculator</code> компонента, два входа
            всегда будут синхронизированы.
          </p>
          <p>Давайте посмотрим, как это работает шаг за шагом.</p>
          <p>
            Во- первых, мы заменим <code>this.state.temperature</code> в{" "}
            <code>this.props.temperature</code> компоненте{" "}
            <code>TemperatureInput</code>. А пока давайте притворимся, что{" "}
            <code>this.props.temperature</code> уже существует, хотя нам нужно
            будет передать его из <code>Calculator</code> в будущем:
          </p>
          <p>
            Мы знаем, что <code>props</code> доступны только для чтения . Когда{" "}
            <code>temperature</code>
            был в местном состоянии, <code>TemperatureInput</code> мог просто
            позвонить <code>this.setState()</code>, чтобы изменить его. Однако
            теперь, <code>temperature</code>
            когда объект исходит от родителя в качестве реквизита,{" "}
            <code>TemperatureInput</code> не имеет над ним контроля.
          </p>
          <p>
            В React это обычно решают, делая компонент «управляемым». Точно так
            же, как в <code>DOM</code> <code>&lt;input&gt;</code> принимает{" "}
            <code>value</code> и <code>onChange</code> как <code>prop</code>,
            здесь пользователь <code>TemperatureInput</code> может принимать{" "}
            <code>temperature</code> и <code>onTemperatureChange</code> как{" "}
            <code>props</code> от своего родителя <code>Calculator</code>.
          </p>
          <p>
            Теперь, когда <code>TemperatureInput</code> хочет обновить свою
            температуру, он вызывает <code>this.props.onTemperatureChange</code>
            :
          </p>
          <p>
            В пользовательских компонентах нет особого значения имён свойств, ни
            для <code>temperature</code>, ни для{" "}
            <code>onTemperatureChange</code>. Мы могли бы назвать их как угодно,
            например, назвать их <code>value</code> или <code>onChange</code>,
            это просто является общепринятым соглашением.
          </p>
          <p>
            Проп <code>onTemperatureChange</code> будет предоставлен вместе с
            пропсом temperature, родительским компонентом{" "}
            <code>Calculator</code>. Он обработает изменение, изменив
            собственное локальное состояние, тем самым повторно отобразив оба
            ввода с новыми значениями. Мы рассмотрим новую{" "}
            <code>Calculator</code> реализацию очень скоро.
          </p>
          <p>
            Прежде чем углубляться в изменения в <code>Calculator</code>,
            давайте повторим наши изменения в компоненте{" "}
            <code>TemperatureInput</code>. Мы убрали из него локальное
            состояние, и теперь вместо чтения{" "}
            <code>this.state.temperature</code>, мы читаем{" "}
            <code>this.props.temperature</code>. Вместо того, чтобы вызывать
            <code>this.setState()</code>, когда мы хотим внести изменения, мы
            теперь вызываем <code>this.props.onTemperatureChange()</code>, что
            будет предоставлено <code>Calculator</code>:
          </p>
        </div>
        <div className="LiftingStateUpClComp__content">
          <pre>
            <code>
              <>
                <ClCompLet
                  clName={"TemperatureInput"}
                  sp1={"  "}
                  sp2={"    "}
                  state1={"nan"}
                  // stVal1={"''"}
                  fn1={"handleChange"}
                  fnProp1={"e"}
                  fn1Body={
                    <>
                      <span className="token parameter">this</span>
                      <span className="token operator">.</span>
                      props
                      <span className="token operator">.</span>
                      <span className="token function">
                        onTemperatureChange
                      </span>
                      <span className="token punctuation">(</span>
                      <span className="token parameter">e</span>
                      <span className="token operator">.</span>
                      target
                      <span className="token operator">.</span>
                      value
                      <span className="token punctuation">);</span>
                    </>
                  }
                  sp3={"      "}
                  fnVal1={
                    <>
                      temperature: <span className="token parameter">e</span>
                      <span className="token operator">.</span>target
                      <span className="token operator">.</span>value
                    </>
                  }
                  state2={""}
                  stVal2={""}
                  fn2={""}
                  fn2Body={""}
                  fnProp2={""}
                  fnVal2={""}
                  constRet={
                    <>
                      <ConstNamePlus
                        name1={"temperature"}
                        name2={""}
                        param1={"this"}
                        param2={"props"}
                        param3={"temperature"}
                        metd={""}
                        mtdParam2={""}
                        exp={""}
                        num={""}
                        hide={""}
                        empty={""}
                      />
                      <BrSp sp={"    "} />
                      <ConstNamePlus
                        name1={"scale"}
                        name2={""}
                        param1={"this"}
                        param2={"props"}
                        param3={"scale"}
                        metd={""}
                        mtdParam2={""}
                        exp={""}
                        num={""}
                        hide={""}
                        empty={""}
                      />
                    </>
                  }
                  exp1={
                    <>
                      <FormLabInpLet
                        form1={"fieldset"}
                        attrF1={""}
                        sp1={
                          <>
                            <BrSp sp={"        "} />
                          </>
                        }
                        label1={"legend"}
                        sp2={<>{/* <BrSp sp={"  "} /> */}</>}
                        name1={
                          <>
                            Введите температуру в Цельсиях{" "}
                            <span className="token punctuation">&#123;</span>
                            scaleNames
                            <span className="token punctuation">[</span>
                            scale<span className="token punctuation">]</span>
                            <span className="token punctuation">&#125;</span>:
                          </>
                        }
                        elemF1={" "}
                        inputLab1={"1212"}
                        attrInLab1={"3434"}
                        input1={
                          <>
                            input
                            <BrSp sp={"         "} />
                          </>
                        }
                        attrIn1={
                          <>
                            <AttrValMetd
                              attr1={"value"}
                              dop3={""}
                              val1={
                                <>
                                  <span className="token punctuationhtml">
                                    temperature
                                  </span>
                                </>
                              }
                              val2={""}
                              val3={""}
                            />
                            <BrSp sp={"         "} />
                            <AttrValMetd
                              attr1={"onChange"}
                              dop3={""}
                              val1={
                                <>
                                  <span className="token parameter">this</span>
                                </>
                              }
                              val2={"handleChange"}
                              val3={""}
                            />
                            <BrSp sp={"        "} />
                          </>
                        }
                        label2={""}
                        name2={""}
                        inputLab2={""}
                        attrInLab2={""}
                        sp3={<BrSp sp={"      "} />}
                        sp4={<BrSp sp={"        "} />}
                        sp5={<BrSp sp={"    "} />}
                        dop={
                          <>
                            {/* <BoilingVerdict   celsius={parseFloat(temperature)} /> */}
                            <BrSp sp={"        "} />
                            <TagAttrValJSX
                              Name={"BoilingVerdict"}
                              attr1={"celsius"}
                              val1={
                                <>
                                  <span className="token keyword">
                                    parseFloat
                                  </span>
                                  <span className="token punctuation">(</span>
                                  <span className="token punctuationhtml">
                                    temperature
                                  </span>
                                  <span className="token punctuation">)</span>
                                </>
                              }
                              // val2={
                              //   <>
                              //     1212

                              //   </>
                              // }
                              // val3={"123"}
                              // exp1={"123"}
                              // exp2={"123"}
                              // hide={" "}
                              // br={"123"}
                              dop3={null}
                            />
                          </>
                        }
                      />
                      {/* <BrSp sp={" "} /> */}
                    </>
                  }
                />
              </>
            </code>
          </pre>
        </div>
        <div className="LiftingStateUpClComp__description">
          <p>
            Теперь обратимся к компоненту <code>Calculator</code>.
          </p>
          <p>
            Мы будем хранить текущий ввод <code>temperature</code> и{" "}
            <code>scale</code> в его локальном состоянии. Это то состояние,
            которое мы «подняли» с входов, и оно будет служить «источником
            истины» для них обоих. Это минимальное представление всех данных,
            которые нам нужно знать, чтобы отобразить оба входа.
          </p>
          <p>
            Например, если мы введем 37 во вход по Цельсию, состояние
            <code>Calculator</code> компонента будет: <code>temperature</code>:{" "}
            <code>'37', scale: 'c'</code>
          </p>
          <p>
            Если позже мы отредактируем поле Фаренгейта на 212, состояние
            <code>Calculator</code> будет следующим: <code>temperature</code>:{" "}
            <code>'212', scale: 'f'</code>
          </p>
          <p>
            Мы могли бы сохранить значение обоих входов, но это оказывается
            ненужным. Достаточно сохранить значение последнего измененного ввода
            и масштаб, который он представляет. Затем мы можем вывести значение
            другого входа, основываясь на текущем <code>temperature</code> и{" "}
            <code>scale</code>.
          </p>
          <p>
            Входные данные остаются синхронизированными, поскольку их значения
            вычисляются из одного и того же состояния:
          </p>
        </div>
        <div className="LiftingStateUpClComp__content">
          <pre>
            <code>
              {/* 
            class Calculator extends React.Component {
              constructor(props) {
                super(props);
                this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
                this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
                this.state = {temperature: '', scale: 'c'};
              }

              handleCelsiusChange(temperature) {
                this.setState({scale: 'c', temperature});
              }

              handleFahrenheitChange(temperature) {
                this.setState({scale: 'f', temperature});
              }

              render() {
                const scale = this.state.scale;
                const temperature = this.state.temperature;
                const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
                const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

                return (
                  <div>
                    <TemperatureInput
                      scale="c"
                      temperature={celsius}
                      onTemperatureChange={this.handleCelsiusChange} />
                    <TemperatureInput
                      scale="f"
                      temperature={fahrenheit}
                      onTemperatureChange={this.handleFahrenheitChange} />
                    <BoilingVerdict
                      celsius={parseFloat(celsius)} />
                  </div>
                );
              }
            } 
            */}
              <ClCompLet
                clName={"Calculator"}
                sp1={"  "}
                sp2={"    "}
                state1={"temperature"}
                stVal1={"''"}
                fn1={"handleChange"}
                fnProp1={"e"}
                fn1Body={""}
                sp3={"      "}
                fnVal1={
                  <>
                    temperature: <span className="token parameter">e</span>
                    <span className="token operator">.</span>target
                    <span className="token operator">.</span>value
                  </>
                }
                state2={"scale"}
                stVal2={"'c'"}
                fn2={""}
                fn2Body={""}
                fnProp2={""}
                fnVal2={""}
                constRet={
                  <>
                    <ConstNamePlus
                      name1={"temperature"}
                      name2={""}
                      param1={"this"}
                      param2={"state"}
                      param3={"temperature"}
                      metd={""}
                      mtdParam2={""}
                      exp={""}
                      num={""}
                      hide={""}
                      empty={""}
                    />
                  </>
                }
                exp1={
                  <>
                    <FormLabInpLet
                      form1={"fieldset"}
                      attrF1={""}
                      sp1={
                        <>
                          <BrSp sp={"        "} />
                        </>
                      }
                      label1={"legend"}
                      sp2={<>{/* <BrSp sp={"  "} /> */}</>}
                      name1={"Введите температуру в Цельсия:"}
                      elemF1={" "}
                      inputLab1={"1212"}
                      attrInLab1={"3434"}
                      input1={
                        <>
                          input
                          <BrSp sp={"        "} />
                        </>
                      }
                      attrIn1={
                        <>
                          <AttrValMetd
                            attr1={"value"}
                            dop3={""}
                            val1={
                              <>
                                <span className="token punctuationhtml">
                                  temperature
                                </span>
                              </>
                            }
                            val2={""}
                            val3={""}
                          />
                          <BrSp sp={"        "} />
                          <AttrValMetd
                            attr1={"onChange"}
                            dop3={""}
                            val1={
                              <>
                                <span className="token parameter">this</span>
                              </>
                            }
                            val2={"handleChange"}
                            val3={""}
                          />
                          <BrSp sp={"        "} />
                        </>
                      }
                      label2={""}
                      name2={""}
                      inputLab2={""}
                      attrInLab2={""}
                      sp3={<BrSp sp={"      "} />}
                      sp4={<BrSp sp={"        "} />}
                      sp5={<BrSp sp={"    "} />}
                      dop={
                        <>
                          <BrSp sp={"        "} />
                          <TagAttrValJSX
                            Name={"BoilingVerdict"}
                            attr1={"celsius"}
                            val1={
                              <>
                                <span className="token keyword">
                                  parseFloat
                                </span>
                                <span className="token punctuation">(</span>
                                <span className="token punctuationhtml">
                                  temperature
                                </span>
                                <span className="token punctuation">)</span>
                              </>
                            }
                            // val2={
                            //   <>
                            //     1212

                            //   </>
                            // }
                            // val3={"123"}
                            // exp1={"123"}
                            // exp2={"123"}
                            // hide={" "}
                            // br={"123"}
                            dop3={null}
                          />
                        </>
                      }
                    />
                    {/* <BrSp sp={" "} /> */}
                  </>
                }
              />
            </code>
          </pre>
        </div>
        <div className="LiftingStateUpClComp__description">
          <p>
            Теперь независимо от того, какой ввод вы редактируете,
            <code>this.state.temperature</code> и <code>this.state.scale</code>{" "}
            в <code>Calculator</code> он обновляется. Один из входов получает
            значение как есть, поэтому любой пользовательский ввод сохраняется,
            а другое входное значение всегда пересчитывается на его основе.
          </p>
          <p>Давайте вспомним, что происходит, когда вы редактируете ввод:</p>
          <p>
            React вызывает функцию, указанную как onChangeв DOM{" "}
            <code>&lt;input&gt;</code>. В нашем случае это{" "}
            <code>handleChange</code> метод в <code>TemperatureInput</code>{" "}
            компоненте. Метод <code>handleChange</code> в{" "}
            <code>TemperatureInput</code> компоненте вызывает
            <code>this.props.onTemperatureChange()</code> новое желаемое
            значение. Его реквизиты, в том числе{" "}
            <code>onTemperatureChange</code>, были предоставлены его
            родительским компонентом <code>Calculator</code>. При
            предварительном отображении
            <code>Calculator</code> было указано, что{" "}
            <code>onTemperatureChange</code> для градусов Цельсия{" "}
            <code>TemperatureInput</code> используется метод , а{" "}
            <code>Calculator</code> для градусов Фаренгейта - метод . Таким
            образом, любой из этих двух методов вызывается в зависимости от
            того, какой ввод мы редактировали.{" "}
          </p>
          <p>
            <code>handleCelsiusChange</code>
            <code>onTemperatureChange</code> <code>TemperatureInput</code>{" "}
            <code>Calculator</code> <code>handleFahrenheit</code>{" "}
            <code>ChangeCalculator</code>
          </p>{" "}
          <p>
            Внутри этих методов <code>Calculator</code> компонент просит React
            перерисовать себя, вызывая <code>this.setState()</code> новое
            входное значение и текущий масштаб ввода, который мы только что
            отредактировали. React вызывает метод <code>Calculator</code>{" "}
            компонента, <code>render</code> чтобы узнать, как должен выглядеть
            пользовательский интерфейс. Значения обоих входов пересчитываются на
            основе текущей температуры и активной шкалы. Здесь выполняется
            преобразование температуры. React вызывает render методы отдельных
            <code>TemperatureInput</code> компонентов с их новыми реквизитами,
            указанными в файле <code>Calculator</code>. Он узнает, как должен
            выглядеть их пользовательский интерфейс. React вызывает{" "}
            <code>render</code> метод
            <code>BoilingVerdict</code> компонента, передавая температуру в
            градусах Цельсия в качестве реквизита. React DOM обновляет DOM
            вердиктом кипения и соответствует желаемым входным значениям. Вход,
            который мы только что отредактировали, получает свое текущее
            значение, а другой ввод обновляется до температуры после
            преобразования. Каждое обновление проходит одни и те же шаги,
            поэтому входные данные остаются синхронизированными.
          </p>
        </div>
      </div>
    );
  }
}
export default LiftingStateUpClComp;
