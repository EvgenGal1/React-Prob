import React from "react";

// !!! старая статья - https://keslo.gitbooks.io/reactjs-help/content/mezhkomponentnaya_svyaz_v_react.html
// ??? не раб. - попытка переписать старый код. пока забросил

// var Filter = React.createClass({
//   handleFilterChange: function (e) {
//     this.props.updateFilter(e.target.value);
//   },
//   render: function () {
//     return (
//       <input
//         type="text"
//         ref="filterInput"
//         onChange={this.handleFilterChange}
//         placeholder="фильтр"
//         className="form-control"
//       />
//     );
//   },
// });

// // class List extends React.Component {
// var List = React.createClass({
// updateData = (value, prevState) => {
//   // будем измен состоянием setState по его значению
//   this.setState({
//     name: value,
//     isToggleOn: prevState,
//   });
// };

// render: function () {
//   var content;
//   console.log(this.props.items.length);
//   if (this.props.items.length > 0) {
//     var items = this.props.items.map(function (item) {
//       return <li>{item}</li>;
//     });
//     content = <ul>{items}</ul>;
//   } else {
//     content = <p>Нет совпадений</p>;
//   }

//   return (
//     <div className="results">
//       <h4>Результат</h4>
//       {content}
//     </div>
//   );
// },
// });

class List extends React.Component {
  render() {
    var content;
    // console.log(this.props.items.length);
    // if (this.props.items.length > 0) {
    //   var items = this.props.items.map(function (item) {
    //     return <li>{item}</li>;
    //   });
    //   content = <ul>{items}</ul>;
    // } else {
    //   content = <p>Нет совпадений</p>;
    // }

    return (
      <div className="results">
        <h4>Результат</h4>
        {/* {content} */}
      </div>
    );
  }
}

class ListComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Button not pressed",
      // listItems: [],
      nameFilter: "",
      listItems: [
        "Chicago",
        "New York",
        "Tokyo",
        "London",
        "San Francisco",
        "Amsterdam",
        "Hong Kong",
      ],
    };
    console.log("listItems : " + this.state.listItems);

    // this.updateData = this.updateData.bind(this);
    // toggle
    // this.handleClick = this.handleClick.bind(this);
  }
  // render() {
  //   return <div className="qw">12</div>;
  // }

  getInitialState = () => {
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
  };
  // console.log(getInitialState)
  // console.log("getInitialState : " + getInitialState());

  handleFilterUpdate = (filterValue) => {
    this.setState({
      nameFilter: filterValue,
    });
  };

  displayedItems() {
    this.state.listItems.filter(
      function (item) {
        var match = item
          .toLowerCase()
          .indexOf(this.state.nameFilter.toLowerCase());
        return match !== -1;
      }.bind(this)
    );
    return <div className="qwe">3</div>;
  }
  // console.log({displayedItems})

  //   updateData = (value, prevState) => {
  //     // будем измен состоянием setState по его значению
  //     this.setState({
  //       name: value,
  //       isToggleOn: prevState,
  //     });
  //   };

  //  handleClick() {
  //   this.setState((prevState) => ({
  //     isToggleOn: !prevState.isToggleOn,
  //   }));
  // }

  //  handleClick() {
  //     this.setState((prevState) => ({
  //       isToggleOn: !prevState.isToggleOn,
  //     }));
  //   }

  // <button onClick={this.handleClick}>
  //     {this.state.isToggleOn ? "ON" : "OFF"}
  //   </button>

  render() {
    return (
      <div>
        111
        {/* <Filter updateFilter={this.handleFilterUpdate} /> */}
        {/* <List items={displayedItems} /> */}
        {this.displayedItems()}
        111
      </div>
    );
  }
}

export default ListComponent2;
