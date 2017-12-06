import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HouseIcon from 'react-icons/lib/md/account-balance';
import {Button, FormControl} from 'react-bootstrap';
import axios from 'axios';

import Login from '../components/Login';

class EnterID extends Component {

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
                error={this.state.error}
                submitPress={() => {
                    axios.post("/api/user/login", {
                        username: this.state.username,
                        password: this.state.password
                    })
                        .then((res) => {
                            this.props.history.push("/record-table/" + this.state.username)
                        })
                        .catch((err) => {
                            this.setState({error: "Error"});

                        });


                }}/>
        );
    }
}

export default EnterID;
