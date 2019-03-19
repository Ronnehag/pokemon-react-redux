import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filterPokemons } from '../actions/PokemonActions';


export class PokemonSearch extends Component {

    handleChange = (e) => {
        this.props.filterPokemons(e.target.value.toLowerCase());
    }

    render() {
        return (
            <div className="search-div">
                <label>Name</label><br />
                <input type="text" name="name" onChange={this.handleChange} autoComplete="off" /><br />
            </div>
        )
    }
}


export default connect(null, { filterPokemons })(PokemonSearch);
