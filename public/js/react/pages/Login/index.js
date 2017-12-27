import React from 'react';
import Redux from 'redux';
import Component from './../../common/Component';
import Input from './../../components/Input';
import Store from './../../common/Store';


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }
    }

    _onFormSubmit(event) {
        event.preventDefault();
        Store.subscribe(this.submitCallback.bind(this));
        Store.dispatch({type:'LOGIN'});
        
    }

    submitCallback() {
        let returnData = Store.getState();
        this.setState(returnData.reduce);
        console.log(returnData);
    }

    _handleInputChange(event) {
        const stateValue = Object.assign({}, this.state);
        stateValue[event.target.name] = event.target.value;
        this.setState(stateValue);
    }

    

    render() {
        return (
            <div>
                {this.state.message}
                <form onSubmit={this._onFormSubmit.bind(this)}>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" onChange={this._handleInputChange.bind(this)}/>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" onChange={this._handleInputChange.bind(this)}/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}