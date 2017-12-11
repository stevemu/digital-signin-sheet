import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {validateUsername, validatePassword} from "../utils/validation";
import {registrationApi} from "../api";
import {register} from "../actions/registrationActions";
import RegistrationView from '../components/RegistrationView';

@connect((store) => {
    return {
        registration: store.registration
    }
})
export default class RegistrationScreen extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            usernameError: "",
            password: "",
            passwordError: "",
            passwordConfirm: "",
            passwordConfirmError: "",
        }
    }

    _validateUsername(username) {
        if (validateUsername(username)) {
            this.setState({usernameError: "", username})
            return true;
        } else {
            this.setState({usernameError: "Username must be 3 characters long.", username})
            return false;
        }
    }

    _validatePassword(password) {
        if (validatePassword(password)) {
            this.setState({passwordError: "", password});
            return true;

        } else {
            this.setState({passwordError: "Password must be at least 5 characters long.", password});
            return false;

        }
    }

    _validatePasswordConfirm(password, passwordConfirm) {

        if (password == passwordConfirm && passwordConfirm ) {
            this.setState({passwordConfirmError: "", passwordConfirm});
            return true;

        } else {
            this.setState({passwordConfirmError: "Please enter the same password twice.", passwordConfirm});
            return false;

        }
    }

    render() {

        if (this.props.registration.regSuccess) {
            return (
                <Redirect to="reg-success" />
            )
        }

        return (
            <RegistrationView
                error={this.props.registration.error}
                regPressed={async (e)=>{

                    e.preventDefault();

                    let valid = true;

                    if (!this._validateUsername(this.state.username)) valid = false;
                    if (!this._validatePassword(this.state.password)) valid = false;
                    if (!this._validatePasswordConfirm(this.state.password, this.state.passwordConfirm)) valid = false;

                    if (!valid) {
                        return;
                    }

                    this.props.dispatch(register(this.state.username, this.state.password));

                }}
                usernameError={this.state.usernameError}
                onUsernameChange={(e) => {
                    const username = e.target.value;
                    this._validateUsername(username);
                    this.setState({username});
                }}
                passwordError={this.state.passwordError}
                onPasswordChange={(e) => {
                    const password = e.target.value;
                    this._validatePassword(password);
                    this.setState({password});
                }}
                passwordConfirmError={this.state.passwordConfirmError}
                onPasswordConfirmChange={(e) => {
                    const passwordConfirm = e.target.value;
                    this._validatePasswordConfirm(this.state.password, passwordConfirm);
                    this.setState({passwordConfirm});
                }}
            />
        );
    }
}
