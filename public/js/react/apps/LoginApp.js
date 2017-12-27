import BaseApp from './BaseApp';
import LoginComponent from './../pages/Login';
export default class LoginApp extends BaseApp{
    constructor() {
        super();
        this.initComponent(LoginComponent, 'loginPage');
    }
}

if (!window.LoginApp) {
    window.LoginApp = new LoginApp();
}