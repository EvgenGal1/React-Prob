import PlanImg from "../img/YT.doympyOFlKE.План.JPG";
import "../css/Plan.css";

function Plan() {
  return (
    <div className="Plan">
      <div className="Plan-body">
        <img alt="PlanImg" src={PlanImg} />
      </div>
    </div>
  );
}

export default Plan;

// return React.createElement('div', {className: 'shopping-list'},
//   React.createElement('h1', /* ... h1 children ... */),
//   React.createElement('ul', /* ... ul children ... */)
// );
