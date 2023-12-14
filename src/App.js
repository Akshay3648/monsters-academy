import "./App.css";
import { Component } from "react";
import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/serach-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  onChangeHandler = (event) => {
    let searchField = event.target.value.toLowerCase();
    console.log(this);
    this.setState(() => {
      return { searchField };
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onChangeHandler } = this;
    let filterMonsters = monsters.filter((ele) => {
      return ele.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Academy</h1>
        <SearchBox placeholder='search monster' className='monster-search' onChangeHandler={onChangeHandler}/>
        <CardList filterMonsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
