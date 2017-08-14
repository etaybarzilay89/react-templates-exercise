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

requirejs(['react', 'reactDOM', './form', './twoNumericPanel/twoNumericPanel'], function (React, ReactDOM, form, twoNumericPanel) {
    'use strict';
    ReactDOM.render(React.createElement(form), document.getElementById('formContainer'));
    ReactDOM.render(React.createElement(twoNumericPanel), document.getElementById('twoNumericPanel'));

});
