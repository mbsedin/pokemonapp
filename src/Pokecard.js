import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

// expression de fonction fléchée
const padThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const { name, type, exp, id } = this.props;
    let imgSrc = `${POKE_API}${padThree(id)}.png`;

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={`A nice Pokemon: ${name}`} />
        </div>
        <div className="Pokecard-data">Type : {type}</div>
        <div className="Pokecard-data">Exp: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
