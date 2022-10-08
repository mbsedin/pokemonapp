import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    const { isWinner, exp, pokemon } = this.props;
    let title;
    if (isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-looser">Loosing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total experience: {exp}</h4>
        {/* Pokecard */}
        <div className="Pokedex-cards">
          {pokemon.map((p) => (
            <Pokecard
              id={p.id}
              key={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
