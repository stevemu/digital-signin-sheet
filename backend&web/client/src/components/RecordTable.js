import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HouseIcon from 'react-icons/lib/md/account-balance';
import { Button, FormControl, Table } from 'react-bootstrap';
import moment from 'moment';

// import EnterIDView from '../components/EnterID';

const Container = styled.div`
  margin: 0 auto;
  background-color: burlywood;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  min-height: 100vh;
`;
const Submit = styled(Button)`
  margin-top: 20px;
`;


class RecordTableScreen extends Component {

    static propTypes = {
        records: PropTypes.array,
        onGoBack: PropTypes.func,
        org: PropTypes.string
    };

    static defaultProps = {
        records: [],
        onGoBack: () => {},
        org: ""
    };

    constructor(props) {
        super(props);

    }

    getRows() {
        return this.props.records.map((record) => {
            const m = moment(record.time);
            const time = m.format("dddd, MMMM Do YYYY, h:mm:ss a");

            return <tr key={record.id}>
                <td>{time}</td>
                <td>{record.name}</td>
                <td>{record.phone}</td>
                <td>{record.email}</td>
            </tr>
        })
    }

    render() {
        return (
            <Container>
                <h1>Sign-in records for {this.props.username}</h1>
                <Table bordered hover>
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getRows()}
                    </tbody>
                </Table>
                <Submit onClick={this.props.onGoBack}>
                    Go back
                </Submit>
            </Container>
        );
    }
}

export default RecordTableScreen;
