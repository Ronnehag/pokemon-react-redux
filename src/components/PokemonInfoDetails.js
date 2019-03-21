import React, { Component } from 'react'

class PokemonInfoDetails extends Component {




    getStats = () => {

        return this.props.stats.length ? this.props.stats.map(stat => {
            const { base_stat } = stat;
            const { name } = stat.stat;
            return (
                <li>{name}: {base_stat}</li>
            )
        }) : null;
    }

    render() {
        const { id, name, height, weight, pokemon } = this.props;
        const { back_default, front_default } = this.props.sprites;
        const { types } = this.props.types;
        console.log(pokemon);
        return (
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <span className="title">#{id} {name}</span>
                    </div>
                    <div className="card-body">
                        <section className="box">
                            <p className="text-center box-header">Base stats</p>
                            <ul>
                                {this.getStats()}
                            </ul>
                        </section>

                        <section className="box">
                            <p className="text-center box-header">Info</p>
                            <br />
                            <p>
                                height: {height.toString().split('').join('.') + " m"} <br />
                                weight: {pokemon.getWeight()}
                            </p>
                        </section>

                        <section className="box">
                            <p className="text-center box-header">Availability</p>
                            <p>

                            </p>
                        </section>
                    </div>

                    <div className="card-bottom text-center">
                        <div className="card-images box">
                            <p>Back</p>
                            <img src={back_default} alt={name + " back"} />

                        </div>
                        <div className="box">
                            <p>Front</p>
                            <img src={front_default} alt={name + " front"} />
                        </div>
                        <div className="evolves-into box">
                            <p>Evolves into </p>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PokemonInfoDetails;

