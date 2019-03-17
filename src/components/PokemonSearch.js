import React, { Component } from 'react'

export class PokemonSearch extends Component {

    render() {
        return (
            <div className="search-div">
                <label>Name</label><br />
                <input type="text" name="name" onChange={this.props.search} autoComplete="off"/><br />
            </div>
        )
    }
}

export default PokemonSearch
