import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import InputError from './components/InputError';
import './App.css';

class App extends Component {
  state = {
    weatherData: null,
    error: '',
    isDarkMode: false
  };

  fetchWeatherData = async (location) => {
    try {
      const apiKey = 'ea033369b2a597ccfff278d6b41c09a2';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);
      this.setState({ weatherData: response.data, error: '' });
    } catch (err) {
      console.error('API Error:', err);
      this.setState({ error: 'Unable to fetch weather data. Please try again.', weatherData: null });
    }
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
  };

  render() {
    const { weatherData, error, isDarkMode } = this.state;

    return (
      <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Header toggleDarkMode={this.toggleDarkMode} isDarkMode={isDarkMode} />
        <Search locationSearch={this.fetchWeatherData} />
        {error && <InputError message={error} />}
        <WeatherDisplay weatherData={weatherData} isDarkMode={isDarkMode} />
      </div>
    );
  }
}

export default App;
