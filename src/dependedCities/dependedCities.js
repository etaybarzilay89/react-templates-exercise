define(['react', 'lodash', './dependedCities.rt'], function (React, _, template) {
  'use strict';

  const IsraelCities = ['Tel Aviv', 'Jerusalem'];
  const USACities = ['New york city', 'just another city'];

  return React.createClass({
    displayName: 'dependedCities',
    getInitialState: function() {
      return {county: '', cities: []};
    },
    chooseCountry: function(country) {
      const cities = country === 'Israel' ? IsraelCities : USACities;
      this.setState({country: country, cities: cities});
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
