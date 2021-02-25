import React, { Component } from "react";
import NavHeader from "./components/navHeader/NavHeader";
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";

import characters from "./characters.json";


class App extends Component {

	state = {
		characters: characters,
		selected: [],
		score: 0,
		topScore: 0,
	};

	componentDidMount() {
		this.shuffle();
	}

	shuffle = () => {
		const characters = this.state.characters.sort(() => Math.floor(Math.random() * 10));
		this.setState({ characters: characters });
	}

	render() {
		return (
			<div className="main">
				<NavHeader />
				<Hero />
				{this.state.characters.map(chars => (
					<Card
						key={chars.id}
						image={chars.image}
					/>
				))}
			</div>
		);
	}
}

export default App;