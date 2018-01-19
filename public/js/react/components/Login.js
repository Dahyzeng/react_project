import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({
    profile: state.profile
}))
export default class Login extends React.Component{

    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type:'doLogin'
        });
    };

    render() {
        const profile = this.props.profile;
        return (
            <div>
                {
                    console.log(profile.isOk)
                }
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <label htmlFor="email">email:</label>
                    <input name="email" />
                    <label htmlFor="password">password:</label>
                    <input name="password" type="password"/>
                    <input type="submit" value="OK"/>
                </form>
            </div>
        )
    }
}