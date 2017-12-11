import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HouseIcon from 'react-icons/lib/md/account-balance';
import {Link} from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #D5D5D5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Title = styled.h1`
  width: 80%;
  text-align: center;
  font-size: 36px;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
   margin-top: 20px;
`;

const CredentialBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
`;

const Input = styled.input`
  font-size: 26px;
  height: 46px;
  text-align: center;
  margin-bottom: 20px;
`;

const Icon = styled(HouseIcon)`
  font-size: 50px;
`;

const Submit = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  text-align: center;
  background-color: #00ACA4;
  color: white;
  
  &:hover, &:link {
    text-decoration: none;
    color: white;
    background-color: #004d49;
    cursor: pointer;
  }
`;

const Error = styled.div`
  padding-top: 10px;
  font-size: 16px;
  color: #FF530D;
`;

const RegistrationLink = styled(Link)`
    margin-top: 10px;
    color: #004d49;
    
    &:link, &:hover {
      text-decoration: none;
      color: #00201d;
    }
`;

export default class extends Component {

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
                <LoginBox>
                    <Title>Java Sign-in Sheet Admin Dashboard</Title>
                    <SubTitle>
                        <Icon/>
                        <span>Log-in to your account to see your guests' records</span>
                    </SubTitle>
                    <CredentialBox>
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
                            {this.props.error}
                        </Error>
                        }

                        <Submit onClick={this.props.submitPress}>
                            Log in and your guests' sign-in records
                        </Submit>

                    </CredentialBox>


                    <RegistrationLink to="/registration">Register</RegistrationLink>


                </LoginBox>

            </Container>
        );
    }
}
