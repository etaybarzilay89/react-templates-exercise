define(['react', 'lodash', './sliderPanel.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'sliderPanel',
    getInitialState: function() {
      return {height: '100', padding:'10'};
    },
    chooseHeight: function(height) {
      this.setState({height: height});
    },
    choosePadding: function(padding) {
      this.setState({padding: padding});
    },
    render: template
  });
});
