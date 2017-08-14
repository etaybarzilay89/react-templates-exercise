define(['react', 'lodash', './twoNumericPanel.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'twoNumericPanel',
    getInitialState: function () {
      return {location: {lat: 0, long: 0}};
    },
    latChanged: function (lat) {
      const newLocation = {long: this.state.location.long, lat:lat};
      this.setState({location: newLocation});
    },
    longChanged: function (long) {
      const newLocation = {long: long, lat: this.state.location.lat};
      this.setState({location: newLocation});
    },
    render: template
  });
});
