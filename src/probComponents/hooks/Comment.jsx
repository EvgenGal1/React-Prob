import React from "react";
// хук useDeferredValue
import { useDeferredValue } from "react";

// данные приходяшие с сервера. используя пустой массив (е/и ничего не пришло) entities  рисуем разметку
// ??? не раб. не знаю как передать состояние menuActive из fnComp Hooks в др fnComp Comment
// const Comments = ({ entities = [] }, menuActive) => {
// console.log("menuActive Comment.jsx: " + menuActive);
const Comments = ({ entities = [] }) => {
  // хук useDeferredValue. оборач в хук значение(entities) для отрисовки. откладывание(не срочн). при тяжелой отрисовки выводит старое значение
  // const value = useDeferredValue(entities);
  return (
    // происходит маппинг.
    <ul
      className="tpansitiondefrred__comments----"
      // ??? не раб. не знаю как передать
      // className={menuActive}
      // className={`${menuActive ? "yellowCl" : ""}`}
    >
      {/* хук useDeferredValue. обертку отрисовываем отложенно */}
      {/* {value.map((comment) => ( */}
      {/* на один коммент рисуем опред разметку. li,h3,p с comment.id,name,body */}
      {entities.map((comment) => (
        <li key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};
export { Comments };
// export default Comments;
