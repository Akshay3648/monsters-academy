import { Component } from "react";

import './card-list.styles.css';
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const {filterMonsters} = this.props;
    return(
      <Card filterMonsters={filterMonsters} />
    )
  }
}

export default CardList;