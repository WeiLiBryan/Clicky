import React, { Component } from "react";
import NavHeader from "./components/NavHeader";
import Hero from "./components/Hero";
import Card from "./components/Card";

import characters from "./characters.json";


class App extends Component {

	state = {
		characters: characters,
		selected: [],
		score: 0,
		topScore: 0,
	};

  // componentDidMount() {
  //   this.shuffle();
  // }


	render() {
		return (
			<div className="main">
        <NavHeader />
        <Hero />
        {this.state.characters.map(chars => (
						<Card
              key =	{chars.id}
							image = {chars.image}
						/>
					))}
      </div>
		);
	}
}

export default App;