import React, { Component } from 'react';
import SocialFooter from './social_footer';
import {Redirect} from 'react-router-dom';

class AdminLogin extends Component {
    constructor(props) {
        super(props);

        this.state = { username: '', password: '', submitForm:false };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value,
            password: this.state.password,
            submitForm:false
        });
    }

    handlePasswordChange(event) {
        this.setState({
            username: this.state.username,
            password: event.target.value,
            submitForm:false
        });
    }

    handleFormSubmit(event) {
        this.setState({
            username: this.state.username,
            password: this.state.password,
            submitForm:true
        });
    }

    render() {

        if(this.state.submitForm)
            return <Redirect to={'/admin/dashboard'}/>;

        return (
            <section id="adminLogin" className="flex-container">
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-md-10">
                            <div>
                                <h4 className="text-white login-title py-1">Admin Login:</h4>
                                <form action="">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="user"
                                            className="form-control form-control-lg"
                                            placeholder="Username"
                                            value={this.state.username}
                                            onChange={this.handleUsernameChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control form-control-lg"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handlePasswordChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="form-control form-control-lg btn btn-primary text-white"
                                            placeholder="Password"
                                            onClick={this.handleFormSubmit}
                                        >
                                            <strong>Login</strong>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <SocialFooter />
            </section>
        );
    }
}

export default AdminLogin;
