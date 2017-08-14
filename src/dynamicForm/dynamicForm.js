define(['react', 'lodash', './dynamicForm.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'dynamicForm',
    getFields: function () {
      return [{type: 'text', val: 'etay'}, {type: 'number', val: 'age'}];
    },
    render: template
  });
});
