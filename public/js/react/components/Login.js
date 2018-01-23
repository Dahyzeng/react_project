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
            type:'doLogin',
            payload: ''
        });
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
                            <input name="email" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-5 control-label">密码:</label>
                        <div className="col-sm-3">
                            <input name="password" type="password" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-5 col-sm-10">
                            <input className="btn btn-default col-sm-3" type="submit" value="确认"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}