import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {loginUser} from "../actions/loginUserActions";
import Login from '../components/LoginView';

@connect((store) => {
    return {
        loginUser: store.loginUser
    }
})
export default class extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            error: ""
        }
    }

    render() {
        // console.log(this.props.loginUser);

        // const { from } = this.props.location.state || { from: { pathname: "/" } };
        // console.log('authneticated at', this.props.loginUser);

        if (this.props.loginUser.authenticated) {
            // console.log('authneticated at', this.props.loginUser.authenticated);
            // return (
            //     <Redirect to={from} />
            // )
            return (
                <Redirect to={`records/${this.props.loginUser.username}`} />
            )
        }

        return (
            <Login
                onUsernameChange={(e) => {
                    const username = e.target.value;
                    this.setState({username});
                }}
                onPasswordChange={(e) => {
                    const password = e.target.value;
                    this.setState({password});
                }}
                error={this.props.loginUser.error}
                submitPress={() => {
                    this.props.dispatch(loginUser(this.state.username, this.state.password));
                }}/>
        );
    }
}

