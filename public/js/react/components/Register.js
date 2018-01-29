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
            <div className="row main">
                <div className="text-center" style={{ paddingBottom: '20px' }}>
                    <h3>
                        React Redux 简单实例
                    </h3>
                </div>
                <form className="form-horizontal" onSubmit={ this.handleSubmit.bind(this) }>
                    <div className="form-group">
                        <label htmlFor="email" className="col-sm-5 control-label">邮箱:</label>
                        <div className="col-sm-3">
                            <input name="email" className="form-control" onChange={this.onInputChange.bind(this, 'email')}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name" className="col-sm-5 control-label">姓名:</label>
                        <div className="col-sm-3">
                            <input name="name" className="form-control" onChange={this.onInputChange.bind(this, 'name')}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-5 control-label">密码:</label>
                        <div className="col-sm-3">
                            <input name="password" className="form-control" type="password" onChange={this.onInputChange.bind(this, 'password')}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-5 col-sm-10">
                            <input type="submit" className="btn btn-default" value="OK"/>
                        </div>
                    </div>
                </form>
                {
                    profile.isOk ?
                    <div className="text-center">
                        注册信息：邮箱：{profile.email}, 姓名：{ profile.name }，密码：{ profile.password }
                    </div>
                        : null
                }

            </div>
        )
    }
}