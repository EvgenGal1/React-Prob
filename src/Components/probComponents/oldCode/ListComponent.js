import React from "react";
import ReactDOM from "react-dom";

// !!! старая статья - https://keslo.gitbooks.io/reactjs-help/content/mezhkomponentnaya_svyaz_v_react.html
// ??? не раб - Uncaught TypeError: react__WEBPACK_IMPORTED_MODULE_0__.createClass is not a function
// код из статьи старый. попытка переписать в ListComponent.jsx

var Filter = React.createClass({
  handleFilterChange: function (e) {
    this.props.updateFilter(e.target.value);
  },
  render: function () {
    return (
      <input
        type="text"
        ref="filterInput"
        onChange={this.handleFilterChange}
        placeholder="фильтр"
        className="form-control"
      />
    );
  },
});

// class List extends React.Component {
var List = React.createClass({
  render: function () {
    var content;
    console.log(this.props.items.length);
    if (this.props.items.length > 0) {
      var items = this.props.items.map(function (item) {
        return <li>{item}</li>;
      });
      content = <ul>{items}</ul>;
    } else {
      content = <p>Нет совпадений</p>;
    }

    return (
      <div className="results">
        <h4>Результат</h4>
        {content}
      </div>
    );
  },
});

// class ListComponent extends React.Component {
var ListComponent = React.createClass({
  getInitialState: function () {
    return {
      listItems: [
        "Chicago",
        "New York",
        "Tokyo",
        "London",
        "San Francisco",
        "Amsterdam",
        "Hong Kong",
      ],
      nameFilter: "",
    };
  },
  handleFilterUpdate: function (filterValue) {
    this.setState({
      nameFilter: filterValue,
    });
  },
  render: function () {
    var displayedItems = this.state.listItems.filter(
      function (item) {
        var match = item
          .toLowerCase()
          .indexOf(this.state.nameFilter.toLowerCase());
        return match !== -1;
      }.bind(this)
    );

    return (
      <div>
        <Filter updateFilter={this.handleFilterUpdate} />
        <List items={displayedItems} />
      </div>
    );
  },
});

ReactDOM.render(<ListComponent />, document.getElementById("root"));

// class ListComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {};
//   render() {
//     return <div className="QW">12</div>;
//   }
// }

export default ListComponent;
