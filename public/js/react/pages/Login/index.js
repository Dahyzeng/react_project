import React from 'react';
import Component from './../../common/Component';
import Input from './../../components/Input';


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
        console.log(this.state.username + ' ' + this.state.password);
    }

    

    render() {
        return (
            <div>
                <form onSubmit={this._onFormSubmit.bind(this)}>
                    <label htmlFor="username">username</label>
                    <Input type="text" name="username"/>
                    <label htmlFor="password">password</label>
                    <Input type="password" name="password"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}