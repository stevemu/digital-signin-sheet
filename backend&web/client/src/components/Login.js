import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HouseIcon from 'react-icons/lib/md/account-balance';

import {Button, FormControl} from 'react-bootstrap';

const Container = styled.div`
  margin: 0 auto;
  background-color: burlywood;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  min-height: 100vh;
`;

const Title = styled.h1`
  width: 80%;
  text-align: center;
`;

const Input = styled(FormControl)`
  margin-top: 20px;
  width: 80%;
  font-size: 30px;
  height: 100px;
  text-align: center;
`;

const Icon = styled(HouseIcon)`
  margin-top: 30px;
  font-size: 100px;
`;

const Submit = styled(Button)`
  margin-top: 20px;
`;

const Error = styled.div`
  padding-top: 10px;
  font-size: 16px;
  color: #FF530D;
`;

class EnterID extends Component {

    static propTypes = {
        submitPress: PropTypes.func
    };

    static defaultProps = {
        submitPress: () => {
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Title>Java Sign-in Sheet Admin</Title>
                <span>Enter username and password</span>
                <span>To view sign-in records for you</span>
                <Icon/>
                <Input
                    type="text"
                    placeholder="username"
                    onChange={this.props.onUsernameChange}
                />
                <Input
                    type="password"
                    placeholder="password"
                    onChange={this.props.onPasswordChange}
                />
                {this.props.error &&
                    <Error>
                        Error: not authenticated
                    </Error>
                }

                <Submit onClick={this.props.submitPress}>
                    See sign-in records
                </Submit>
            </Container>
        );
    }
}

export default EnterID;
