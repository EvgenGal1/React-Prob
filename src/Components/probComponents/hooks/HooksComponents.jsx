// Сбор Компонентов кода с hooks
import React, { useState, useEffect, useTransition } from "react";
import { Comments } from "./Comment.jsx";
import Rendering from "../../miniBlocksComponents/Rendering.jsx";
import "./hooks.scss";

// <Конкурентный режим (задержка частей рендеринга)>˅=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=++=+=+=+=+=+=+=˅
// !!! https://ru.reactjs.org/docs/concurrent-mode-reference.html
// Конкурентный режим - при render, до отрисовки, загрузку можно разделять на мелкие (чанки) части (навроде асинхрона) для приостановки загрузки некоторых чанков. определять что сейчас важно/не важно загрузить.

// подкл. UI блоков
import ArrowAccordion from "../../../js/includes/ArrowAccordion.js";

// Suspense (`приостановка`) =======================================================================================
const Suspense = () => {
  return (
    <div className="suspense--">
      <div className="suspense__descript--">
        <h3>Suspense `приостановка`</h3>
        <div>
          Suspense - позволяет вашим компонентам «ждать», отображая запасной
          интерфейс, прежде чем они будут отрендерены.
        </div>
        <div>
          В примере компонент ProfileDetails получает данные с помощью
          асинхронного вызова. Во время ожидания загрузки ProfileDetails и
          ProfilePhoto, отображается запасной заголовок Загрузка.... Следует
          отметить, что до тех пор, пока все дочерние компоненты {"<Suspense>"}{" "}
          не отрендерены, мы увидим запасной интерфейс.
        </div>
        <div>
          fallback принимает индикатор загрузки. Запасной интерфейс отображается
          до тех пор, пока не завершится рендер всех дочерних компонентов
          Suspense.
        </div>
      </div>
      <div className="suspense__content--">
        <code>
          <br />
          <code>{"<Suspense fallback={<h1>Загрузка...</h1>}>"}</code>
          <br />
          <code> {"<ProfilePhoto />"}</code>
          <br />
          <code> {"<ProfileDetails />"}</code>
          <br />
          <code>{"</Suspense>"}</code>
        </code>
      </div>
      <div className="suspense--">SuspenseList</div>
    </div>
  );
};

// SuspenseList (Список ожидания) =======================================================================================
const SuspenseList = () => {
  return (
    <div className="suspense-list--">
      <div className="suspense-list__descript--">
        <h3>SuspenseList `cписок ожидания`</h3>
        <div>
          SuspenseList - помогает скоординировать загрузку множества компонентов
          с помощью определения порядка, в котором они будут показываться
          пользователю.
        </div>
        <div>
          Бывают ситуации, когда нескольким компонентам требуется получить
          данные, последовательность загрузки которых нельзя предсказать
          заранее. Если обернуть такие компоненты в SuspenseList, то React не
          покажет компонент из списка до тех пор, пока не будет отображён
          предыдущий (этим поведением можно управлять).
        </div>
        <div>SuspenseListпринимает два пропса:</div>
        <div>
          revealOrder (forwards, backwards, together) определяет
          последовательность, в которой отображаются дочерние компоненты
          SuspenseList. together позволяет отобразить все компоненты
          одновременно вместо того, чтобы показывать их последовательно.
        </div>
        <div>
          tail (collapsed, hidden) определяет, как отображаются компоненты из
          SuspenseList, которые ещё не загружены. По умолчанию SuspenseList
          отображает запасной интерфейс для всех компонентов в списке.
          collapsedпоказывает запасной интерфейс только для компонента, который
          будет загружен следующим. hiddenне показывает компоненты, которые ещё
          не загружены.
        </div>
        <div>
          Учтите, что SuspenseList управляет только ближайшими вложенными
          компонентами Suspense и SuspenseList. Поиск осуществляется не более,
          чем на один уровень вниз, но при этом можно делать многоуровневые
          вложения SuspenseList для построения более сложной разметки.
        </div>
      </div>
      <div className="suspense-list__content--">
        <code>
          <br />
          <code>{'<SuspenseList revealOrder="forwards">'}</code>
          <br />
          <code> {"<Suspense fallback={'Загрузка 1...'}>"}</code>
          <br />
          <code> {"<ProfilePicture id={1} />"}</code>
          <br />
          <code>{"</Suspense>"}</code>
          <br />
          <code>{"<Suspense fallback={'Загрузка 2...'}>"}</code>
          <br />
          <code>{"<ProfilePicture id={2} />"}</code>
          <br />
          <code>{"</Suspense>"}</code>
          <br />
          <code>{"</SuspenseList>"}</code>
        </code>
      </div>
      <div className="suspense-list--">SuspenseList</div>
    </div>
  );
};

// хуки useTransition и useDefrredValue (`использовать переход` и `использовать отложенное значение`) =======================================================================================
// !!! https://www.youtube.com/watch?v=QfIwLDy8j_U
// *** хук useTransition - опред. что не/срочно отричовать (в этом примере) и позволяет не отражать состояние загрузки при обновл перед новым экраном. возвращает массив из двух элементов (isPending(boolin) - опред render из частей, startTransition(fn колбэк) - опред откладываемое сост). хук для fnCompon, метод startTransition для clCompon
// ^^^ настр слабого проца(для теста) - в devTools-Perfomance-settings - CPU (процессор) `замедляем` в 6 раз (6x slowdown).

// *** хук useDeferredValue - отклад (не срочн) часть от основного render (можно со временем). использ когда не можем измен обновл участки(стороние библ с вычеслен) а др часть надо отразить сразу. в этом примере в Comment
// хуки взаимозаменяемы. в основном для оптимизации сложных форм

// `фильтр по поиску`. helper. фильтр значений. приним entities и search.
const filterBySearch = (entities, search) =>
  // проходит по entities(comments) и соедин. у каждого соед name и body. у резулта проверить includes что в seacrh
  entities.filter((item) => item.name.concat(item.body).includes(search));

// `переход отложен`. при вводе в input, значение измен, фильтруются и идёт поиск ввода в общих commentах

function TransitionDefrred() {
  // class TransitionDefrred extends React.Component {
  //  constructor(props) {
  // super(props);
  //  state = {  }
  //  }
  // хук useTransition - возвращ массив с 2мя элем(принято isPanding - boolin, fn startTransition - колбек(не рекоменд пропис в import для clComp)). isPanding - опред идёт ли render из частей. fn()startTransition - обернуть и пометить часть приложения как не выжный
  const [isPending, startTransition] = useTransition();
  // набор коммент. пустой массив. залив ч\з useEffect
  const [comments, setComments] = useState([]);
  // поиск. пустая строка обнов. ч/з handleSearch
  const [search, setSearch] = useState("");

  // 1 вар с доп fn()tiggleIt. перекл класс чтоб скрыть список
  // const [toggle, setToggle] = useState(false);
  // 2 вар напрямую. перекл класс чтоб скрыть список
  const [menuActive, setMenuState] = useState(true);
  // 1 вар с доп fn()tiggleIt. перекл класс чтоб скрыть список
  // const toggleIt = (prevState) => {
  //   // попробовать ещё !prevState
  //   setToggle(!toggle);
  //   // setToggle(!prevState.toggle);
  // };

  // `обраб поиск`. приним., обнов. и сохран event как не/срочные
  const handleSearch = (event) => {
    // setSearch(event.target.value);
    // хук useTransition - startTransition приним аноним fn() с любым кол-ом обновлений state. Позволяет отложить загрузку обёртки на время загрузки важных элем
    startTransition(() => {
      setSearch(event.target.value);
    });
  };

  // ??? не раб - двойной рендеринг
  useEffect(() => {
    //  в useEffect делаем fetch запрос по ссылке jsonplaceholder. по итогу запроса данные разбираются и отпр в setComment. так будет обновл переменная
    // ^^^ jsonplaceholder - Бесплатный поддельный API для тестирования и прототипирования.
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then(setComments);
  }, []);

  // console.log("menuActive 0: " + menuActive);
  return (
    <div className="transitiondefrred--">
      {/* ч\з не управляемый input, вызов ч/з onChange fn()handleSearch для передачи значения. срочный - сразу видем что набираем */}
      <div className="transitiondefrred__descript--">
        <h3>хуки useTransition и useDefrredValue</h3>
        <div>
          хук useTransition - опред. что не/срочно отрисовать (в этом примере) и
          позволяет не отражать состояние загрузки при обновл перед новым
          renderом. возвращает массив из двух элементов (isPending(boolin) -
          опред идёт ли render из частей, startTransition(fn колбэк) - обёртка
          не срочного сост).
        </div>
        <div>
          хук useDeferredValue - откладывает часть от основного render (можно со
          временем). использ когда не можем изменить обновляемые
          участки(стороние библ с вычеслениями), а другую часть надо отразить
          сразу. в этом примере в используется Comment.js
        </div>
        <div>хуки взаимозаменяемы. в основном для оптимизации сложных форм</div>
      </div>
      <div className="transitiondefrred__content--">
        <>
          {/* клик по кнп откр Список jsonplaceholder */}
          {/* 
        https://question-it.com/questions/917591/kak-izmenit-tsvet-fona-kogda-ja-nazhimaju-na-knopku-ispolzuja-reaktsionnye-huki
        https://codesandbox.io/s/vv3qnlx347?fontsize=14&file=/src/SidebarMenuItem.jsx
         */}
          {/* 1 вар. с доп fn()toggleIt падает в ошб.  */}
          {/* <button onClick={toggleIt}>{toggle ? "Hide" : "Show"}</button>
        <div className={toggle ? "toggleCl" : ""}>Body</div> */}
          {/* 2 вар. напрямую */}
          <div className="transitiondefrred__btn---">
            <button
              onClick={() => {
                setMenuState(!menuActive);
              }}
            >
              {menuActive ? "Hide" : "Show"}
            </button>
          </div>
          {/* <div className={`button ${menuActive ? "yellowCl" : ""}`}>Body</div> */}
        </>
        <input
          className="transitiondefrred__input---"
          onChange={handleSearch}
        />
        {/* хук useTransition - по boolin isPending отрисовываем загрузку не важных частей */}
        {isPending && <Rendering />}
        {/* передаем в Comment.entities все комментарии и отфильтр значения search. при обновл парам, вызов fn()filterBySearch. не срочный - отрисовка найденых списков с откладывание через startTransition */}
        {/* // ??? не раб. не знаю как передать состояние menuActive из fnComp Hooks в др fnComp Comment */}
        <div
          className={`transitiondefrred__ul ${menuActive ? "menuActive" : ""}`}
        >
          <Comments
            entities={filterBySearch(comments, search)}
            // menuActive={setMenuState(!menuActive)}  - не раб - Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
            // menuActive={menuActive} - не раб - menuActive в Comment : [object Object]
            // menuActive={setMenuState} - не раб - menuActive в Comment : [object Object]
          />
        </div>
      </div>
      <div className="transitiondefrred__framee--">TransitionDefrred</div>
    </div>
  );
  // }
}

//</Конкурентный режим (задержка частей рендеринга)>˄=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=++=+=+=+=+=+=+=˄

// подкл.всех Компонентов hooks =======================================================================================
class HooksComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openArrowAccord: true,
    };
    this.RefActivCl = React.createRef();
    this.RefOpenDop = React.createRef();
    this.RefOpenCont = React.createRef();
  }
  handleClickRef() {
    this.RefActivCl.current.classList.toggle("_active");
    this.RefOpenDop.current.classList.toggle("openDop");
    this.RefOpenCont.current.classList.toggle("openCont");
    // this.setState((prevState) => ({
    //   openArrowAccord: !prevState.openArrowAccord,
    // }));
  }
  toggleArrowAccord = () => {
    this.setState((prevState) => ({
      openArrowAccord: !prevState.openArrowAccord,
    }));
  };
  render() {
    return (
      <div className="HooksComponents accordion">
        <div
          className="HooksComponents__descript"
          ref={this.RefActivCl}
          onClick={() => {
            this.handleClickRef();
            this.toggleArrowAccord(this.openArrowAccord);
          }}
        >
          <h3>Конкурентный режим.</h3>
          <p style={{ display: "none" }} ref={this.RefOpenDop}>
            При render, до отрисовки, загрузку можно разделять на мелкие части
            (чанки) для приостановки загрузки некоторых чанков. Определять что
            сейчас важно/не важно загрузить.
          </p>
          <ArrowAccordion
            // toggleArrowAccord={this.toggleArrowAccord}
            openArrowAccord={this.state.openArrowAccord}
          />
        </div>
        <div ref={this.RefOpenCont} className="HooksComponents__content">
          <Suspense />
          <SuspenseList />
          <TransitionDefrred />
        </div>
      </div>
    );
  }
}

export default HooksComponents;
