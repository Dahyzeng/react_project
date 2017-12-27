import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
export default class BaseApp {
    constructor() {}

    initComponent(component, element, props) {
        assert(component && element);
        const reactComponent  = React.createElement(component, props);
        try{
            return ReactDOM.render(reactComponent, document.getElementById(element));
        } catch(e) {
            console.log(e);
        }
    }
}