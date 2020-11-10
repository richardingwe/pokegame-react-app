import React, { Component } from 'react';
import './pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

let padToThree = (number) =>

		number <= 999 ? `00${number}`.slice(-3) :
		number;

class Pokecard extends Component {
	render() {
		let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title">{this.props.name}</h1>
				<div className="Pokecard-image">
					<img src={imgSrc} alt={this.props.name} />
				</div>
				<p className="Pokecard-data">type: {this.props.type} </p>
				<p className="Pokecard-data">exp: {this.props.exp} </p>
			</div>
		);
	}
}

export default Pokecard;
