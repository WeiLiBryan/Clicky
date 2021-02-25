import React, { Component } from "react";
import NavHeader from "./components/navHeader/NavHeader";
import Hero from "./components/hero/Hero";
import Card from "./components/card/Card";
import characters from "./characters.json";
import "./appStyle.css"


class App extends Component {
	// Declaring the state
	state = {
		characters: characters,
		selected: [],
		message: "Click a card to begin",
		score: 0,
		topScore: 0
	};

	// Upon mounting shuffle cards
	componentDidMount() {
		this.shuffle();
	}

	// Sorts all the elements in the array then sets the new state equal to the new sorted array
	shuffle = () => {
		const characters = this.state.characters.sort(() => Math.random() - 0.5);
		this.setState({ characters: characters });
	}

	// Picks up the key/id of the selected card then checks the selected array to see if that card has already been picked
	selected = (key) => {
		this.shuffle();

		if (this.state.selected.indexOf(key) !== -1) {
			this.setState({
				score: 0,
				selected: [],
				message: "You're gonna carry that weight..."
			});
		} else {
			this.state.selected.push(key);

			this.setState({
				score: this.state.score + 1,
				message: "Bang! Keep going"
			})
		}

		// If the current score is greater than the top score the top score will auto increment
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