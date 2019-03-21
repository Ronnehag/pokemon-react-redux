import React, { Component } from 'react'
const card = {
    background: "#EEEEEE",
    color: "black",
    border: "1px solid #CCCCCC",
    minHeight: "300px",
    minWidth: "500px"
}


class PokemonInfoDetails extends Component {

    printStats = () => {
        // Loop stats
    }

    generateSprites = () => {
        console.log(this.props.sprites);
        if (this.props.sprites) {
            const { front_default, back_default } = this.props.sprites;
            return (
                <div>
                    <img src={back_default} /> <br />
                    <img src={front_default} />
                </div>
            )
        } else {
            return (
                <p>loading images...</p>
            )
        }
    }
    render() {
        return (
            <div className="container">
                <div style={card}>
                    {this.generateSprites()}
                </div>
            </div>
        )
    }
}
export default PokemonInfoDetails;

