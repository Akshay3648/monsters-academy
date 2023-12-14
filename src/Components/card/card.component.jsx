import { Component } from "react";

import './card.styles.css';

class Card extends Component {
  render() {
    const {filterMonsters} =this.props;
    return(
      <div className="card-list">
        {filterMonsters.map((monster) => {
          return(
            <div className="card-container">
              <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`monster-${monster.name}`} />
              <p>{monster.name}</p>
              <p>{monster.email}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Card;