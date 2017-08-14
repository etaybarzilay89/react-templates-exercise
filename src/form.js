define(['react', 'lodash', './form.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName:'Form',
    getInitialState: function () {
      return {name: 'empty'};
    },
    onNameChange: function (name) {
      this.setState({name: name})
    },
    render: template
  });
});
