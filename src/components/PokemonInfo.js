import React, { Component } from 'react'
import { connect } from 'react-redux';
import PokemonInfoDetails from './PokemonInfoDetails';
import PropType from 'prop-types';

class PokemonInfo extends Component {

    state = {
        pokedata: {}
    }

    handleClick = (e) => {
        this.props.history.push("/");
    }

    async componentDidMount() {
        try {
            const res = await fetch(this.props.pokemon.url);
            const data = await res.json();
            this.setState({
                pokedata: data
            });
        } catch (err) {
            console.log(err);
        }
    }



    render() {
        if (this.state.pokedata.id) {
            const { id, name, stats, types, weight, height, base_experience, sprites } = this.state.pokedata;
            console.log(this.state.pokedata);
            return (
                <div>
                    <h3 onClick={this.handleClick}>Return</h3>
                    <PokemonInfoDetails
                        id={id}
                        name={name}
                        stats={stats}
                        types={types}
                        weight={weight}
                        height={height}
                        base_experience={base_experience}
                        sprites={sprites}
                    />
                </div>
            )
        }
        return (
            <div>
                <p>Loading</p>
            </div>
        )
    }
}

PokemonInfo.propTypes = {
    pokemon: PropType.object.isRequired
}


const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps;
    return {
        pokemon: state.pokemons.pokemonList.find(p => p.name === match.params.name)
    }
}



// pokemon: state.pokemons.pokemonList.find(p => p.name )


export default connect(mapStateToProps)(PokemonInfo);
