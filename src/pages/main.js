import React, { Component } from "react";
import Card from "../components/card";
import Hero from "../components/hero";
import navHeader from "../components/navHeader";

class Main extends Component {
    
    state = {
        image: "",
        chosen: false,
        characters: [""]
    }




    render() {
        return (
            <div className="main">
                <navHeader />
                <Hero />
                {this.state.characters.map((res) => (
                    <Card image={res} />
                ))}
            </div>
        );
    }

}