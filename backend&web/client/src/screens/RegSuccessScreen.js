import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HouseIcon from 'react-icons/lib/md/account-balance';
import {Button, FormControl} from 'react-bootstrap';
import axios from 'axios';

import RegSuccess from '../components/RegSuccess';

export default class RegSuccessScreen extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <RegSuccess
                loginPressed={()=>{
                    this.props.history.push("/login");
                }}
            />
        );
    }
}
