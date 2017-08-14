define(['react', 'lodash', './form.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName:'Form',
    getInitialState: function () {
      return {name: ''};
    },
    componentWillMount: function () {
      var url = new URL(document.location.href);
      var name = url.searchParams.get('name')
      this.setState({name: name});
    },
    onNameChange: function (name) {
      this.setState({name: name})
    },
    render: template
  });
});
