import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTypes} from '../actions/PokemonActions';

export class FilterButtons extends Component {

  componentDidMount() {
    this.props.fetchTypes();
  }

  handleClick = (e) => {
    // if target.checked
    // dispatch call addTypeFilter
  }

  renderBtns = () => {
    return this.props.types.map(({name, url}) => {
      return (
        <div key={name}>
          <label>{name}</label>
          <input type="checkbox" name={name} value={url} onClick={this.handleClick}/>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="container">
        {this.renderBtns()}
        <button>Clear</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  types: state.pokemons.types
});

export default connect(mapStateToProps, { fetchTypes })(FilterButtons);