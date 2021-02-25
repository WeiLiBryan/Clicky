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
		const characters = this.state.characters.sort(() => Math.random() - 0.5);
		this.setState({ characters: characters });
	}

	selected = (key) => {
		this.shuffle();

		if (this.state.selected.indexOf(key) !== -1) {
			this.setState({
				score: 0,
				selected: [],
				message: "You're gonna carry that weight"
			});
		} else {
			this.state.selected.push(key);

			this.setState({
				score: this.state.score + 1,
				message: "Bang, keep going"
			})
		}

		if (this.state.score >= this.state.topScore) {
			this.setState({
				topScore: this.state.topScore + 1
			})
		}
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
							selected={this.selected}
							id={chars.id}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;