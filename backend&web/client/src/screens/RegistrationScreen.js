import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HouseIcon from 'react-icons/lib/md/account-balance';
import {Button, FormControl} from 'react-bootstrap';
import axios from 'axios';
import {validateUsername, validatePassword} from "../utils/validation";

import Registration from '../components/Registration';

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
            error: ""
        }
    }

    render() {
        return (
            <Registration
                usernameError={this.state.usernameError}
                onUsernameChange={(e) => {
                    const username = e.target.value;
                    if (validateUsername(username)) {
                        this.setState({usernameError: ""})
                    } else {
                        this.setState({usernameError: "Username must be 3 characters long."})
                    }
                }}
                passwordError={this.state.passwordError}
                onPasswordChange={(e) => {
                  const password = e.target.value;
                  if (validatePassword(password)) {
                      this.setState({passwordError: ""});
                  } else {
                      this.setState({passwordError: "Password must be at least 5 characters long."})
                  }
                }}
            />
        );
    }
}
