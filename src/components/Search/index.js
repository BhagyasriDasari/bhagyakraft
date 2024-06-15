import React, { Component } from 'react';
import './index.css';

class Search extends Component {
  state = {
    location: ''
  };

  handleSearch = () => {
    const { location } = this.state;
    const { locationSearch } = this.props;

    if (location.trim() !== '') {
      locationSearch(location); // Ensure 'locationSearch' is a function
    }
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  handleChange = (event) => {
    this.setState({ location: event.target.value });
  };

  render() {
    const { location } = this.state;

    return (
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Enter city or zip code"
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
