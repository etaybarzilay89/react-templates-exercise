requirejs.config({
//    baseUrl: '/',
    paths: {
        lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
        react: '//cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-with-addons',
        reactDOM: '//cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min'
    },
    shim: {
        lodash: {exports: '_'},
        react: {exports: 'React'}
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});

requirejs(['react',
  'reactDOM',
    './hello',
    './form',
  './twoNumericPanel/twoNumericPanel',
  './dynamicForm/dynamicForm',
  './dependedCities/dependedCities',
  './sliderPanel/sliderPanel'],
  function (React,
            ReactDOM,
            hello,
            form,
            twoNumericPanel,
            dynamicForm,
            dependedCities,
            sliderPanel) {

    'use strict';
    ReactDOM.render(React.createElement(hello), document.getElementById('hello'));
    ReactDOM.render(React.createElement(form), document.getElementById('formContainer'));
    ReactDOM.render(React.createElement(twoNumericPanel), document.getElementById('twoNumericPanel'));
    ReactDOM.render(React.createElement(dynamicForm), document.getElementById('dynamicForm'));
    ReactDOM.render(React.createElement(dependedCities), document.getElementById('dependedCities'));
    ReactDOM.render(React.createElement(sliderPanel), document.getElementById('sliderPanel'));
});
