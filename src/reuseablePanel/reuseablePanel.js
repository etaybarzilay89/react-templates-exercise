define(['react', 'lodash', './reuseablePanel.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'reuseablePanel',
    getInitialState: function() {
      return {};
    },
    render: template
  });
});
