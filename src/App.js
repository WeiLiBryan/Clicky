import React, { Component } from "react";
import NavHeader from "./components/navHeader/NavHeader";
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";
import characters from "./characters.json";
import "./appStyle.css"


class App extends Component {

	state = {
		characters: characters,
		selected: [],
		message: "Click a card to begin",
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
				<NavHeader
					top={this.state.topScore}
					current={this.state.score}
					message={this.state.message}
				/>
				<Hero />
				<div className="container">
					{this.state.characters.map(chars => (
						<Card
							key={chars.id}
							charName={chars.name}
							image={chars.image}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;