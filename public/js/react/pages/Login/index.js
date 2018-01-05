import React from 'react';
import Component from './../../common/Component';
import { Form, Icon, Input, Button } from 'antd';
import styles from './Login.less';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

@Form.create()
export default class Login extends Component {
    constructor() {
        super();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                
            }
        });
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (
            <Form layout="inline" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
                </FormItem>

                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} >
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}