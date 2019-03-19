import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTypes, addTypeFilter, removeTypeFilter } from '../actions/PokemonActions';

export class FilterButtons extends Component {

  componentDidMount() {
    this.props.fetchTypes();
  }

  handleClick = (e) => {
    const type = e.target.name;
    if (e.target.checked) {
      this.props.addTypeFilter(type);
    } else {
      this.props.removeTypeFilter(type);
    }
  }

  renderBtns = () => {
    return this.props.types.map(({ name }) => {
      return (
        <div key={name}>
          <label>{name}</label>
          <input type="checkbox" name={name} onClick={this.handleClick} />
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

FilterButtons.propTypes = {
  types: PropTypes.array.isRequired,
  fetchTypes: PropTypes.func.isRequired,
  addTypeFilter: PropTypes.func.isRequired,
  removeTypeFilter: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  types: state.pokemons.types
});

export default connect(mapStateToProps, { fetchTypes, addTypeFilter, removeTypeFilter })(FilterButtons);