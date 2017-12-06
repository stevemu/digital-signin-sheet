import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Clear from 'react-icons/lib/md/clear';

const Container = styled.div`
  padding-top: 50px;
  background-color: #E9EBEF;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const Box = styled.div`
  width: 380px;
  background-color: white;
  border-radius: 5px;
  border: 2px solid #C0C0C0;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const FieldTitle = styled.div`
  margin-top: 20px;
  font-size: 14px;
  margin-bottom: 5px;
  color: #474747;
`;

const Input = styled.input`
  padding: 3px;
`;

const ErrorMesssage = styled.div`
  margin-top: 5px;
  color: #EB4C4C;
`;

const RegButton = styled.a`
  margin-top: 20px;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  border: 1px solid #1CC68C;
  color: #1CC68C;
  border-radius: 5px;
  
  &:hover {
    text-decoration: none;
    color: white;
    background-color: #1CC68C;
    cursor: crosshair;
  }
`;

const Icon = ({name}) => {
  return (
      <i className="material-icons">name</i>
  )
};

const CloseIconContainer = styled.i`
  color: red;
`;

const Error = styled.div`
  color: red;
`;

export default class Registration extends Component {

    static propTypes = {
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
    }

    regClicked(e) {
        e.preventDefault();
    }

    render() {
        return (
            <Container>
                <Title>Registration</Title>
                <Box>
                    <FieldTitle>
                        Username
                    </FieldTitle>
                    <Input onChange={this.props.onUsernameChange} />
                    <Error>{this.props.usernameError}</Error>

                    <FieldTitle>
                        Password
                    </FieldTitle>
                    <Input type="password" onChange={this.props.onPasswordChange}/>
                    <Error>{this.props.passwordError}</Error>

                    <FieldTitle>
                        Confirm Password
                    </FieldTitle>
                    <Input type="password"/>
                    <Error>Confirm cannot be empty</Error>

                    <RegButton onClick={this.regClicked}>Create admin account</RegButton>
                </Box>
            </Container>
        );
    }
}
