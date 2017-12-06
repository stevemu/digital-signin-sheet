import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Clear from 'react-icons/lib/md/clear';
import { Link } from 'react-router-dom';

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
  padding: 0 30px;
`;

export default class RegSuccess extends Component {

    static propTypes = {
    };

    static defaultProps = {
        loginPressed: ()=>{}
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Title>You have successfully registered an account. Please <a onClick={this.props.loginPressed}>login</a>.</Title>
            </Container>
        );
    }
}
