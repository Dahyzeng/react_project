import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({
    profile: state.profile
}))
export default class Register extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                email: '',
                name: '',
                password: ''
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch({
            type:'register',
            payload: this.state.profile
        });
    };

    onInputChange = (key, e) => {
        const tmp = {profile: this.state.profile};
        tmp.profile[key] = e.target.value;
        this.setState(tmp);
    };

    render() {
        const profile = this.props.profile;
        return (
            <div>
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <div>
                        <label htmlFor="email">email:</label>
                        <input name="email" onChange={this.onInputChange.bind(this, 'email')}/>
                    </div>

                    <div>
                        <label htmlFor="name">name:</label>
                        <input name="name" onChange={this.onInputChange.bind(this, 'name')}/>
                    </div>

                    <div>
                        <label htmlFor="password">password:</label>
                        <input name="password" type="password" onChange={this.onInputChange.bind(this, 'password')}/>
                    </div>

                    <div>
                        <input type="submit" value="OK"/>
                    </div>
                </form>
                <div>
                    注册信息：邮箱：{profile.email}, 姓名：{ profile.name }，密码：{ profile.password }
                </div>
            </div>
        )
    }
}