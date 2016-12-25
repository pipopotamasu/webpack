import React from 'react';
import ReactDom from 'react-dom';

var App = {
    render:  () => {
        ReactDom.render(
            <h1>Hello Webpack</h1>,
            document.getElementById('app')
        );
    }
};

App.render();
