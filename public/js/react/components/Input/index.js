import React from 'react';
import Component from './../../common/Component';

export default class Input extends Component {
    constructor(props){
        super(props);
    }

    _handleInputChange(event) {
        const stateValue = Object.assign({}, this.state);
        stateValue[event.target.name] = event.target.value;
        this.setState(stateValue);
    }
    
    render() {
        return (
            <input {...this.props} onChange={this._handleInputChange.bind(this)} />
        )
    }
}