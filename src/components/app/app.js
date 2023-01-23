import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";

import SearchPanel from "../search-panel/search-panel";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rise: false, id: 1 },
        { name: "Alex M.", salary: 1500, increase: false, rise: false, id: 2 },
        { name: "Carl W.", salary: 3000, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };
  }
  // DELETE ITEM
  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };
  // CREATE ITEM
  createItem = ({ name, salary }) => {
    this.setState(({ data }) => ({
      data: [
        ...data,
        {
          id: Date.now(),
          name,
          salary,
          rise: false,
          increase: false,
        },
      ],
    }));
  };
  // FILTER FOR RISE AND INCREASE
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };
  // SEARCH USER
  searchUser = (item, term) => {
    if (term.length === 0) {
      return item;
    } else {
      return item.filter((item) => item.name.indexOf(term) > -1);
    }
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  // FILTER FOR All

  onFilters = (item, filter) => {
    switch (filter) {
      case "rise":
        return item.filter((item) => item.rise);
      case "1000":
        return item.filter((item) => item.salary > 1000);
      default:
        return item;
    }
  };
  onFiltersUpdate = (item) => {
    this.setState({ filter: item });
  };
  render() {
    const { data, term, filter } = this.state;
    const filterData = this.onFilters(this.searchUser(data, term), filter);

    return (
      <div className="app">
        <AppInfo data={data} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFiltersUpdate={this.onFiltersUpdate} />
        </div>

        <EmployeesList
          data={filterData}
          deleteItem={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm createItem={this.createItem} />
      </div>
    );
  }
}

export default App;
