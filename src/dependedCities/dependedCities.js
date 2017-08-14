define(['react', 'lodash', './dependedCities.rt'], function (React, _, template) {
  'use strict';

  const IsraelCities = ['Tel Aviv', 'Jerusalem'];
  const USACities = ['New york city', 'just another city'];

  return React.createClass({
    displayName: 'dependedCities',
    getInitialState: function() {
      return {county: '', city: '', cities: []};
    },
    chooseCountry: function(country) {
      const cities = country === 'Israel' ? IsraelCities : USACities;
      this.setState({country: country, cities: cities});
    },
    chooseCity: function(city) {
      this.setState({city: city});
    },
    getCountries: function () {
      return ['Israel', 'USA'];
    },
    getCities: function () {
      return this.state.cities;
    },
    render: template
  });
});
