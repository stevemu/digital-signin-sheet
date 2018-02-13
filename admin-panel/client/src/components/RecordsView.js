import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 80px);
  background-color: #00201d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 55px;
  line-height: 1.4em;
  margin-bottom: 30px;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  
  @media(min-width: 680px) {
    align-items: flex-start;
    width: 500px;
  }
`;

const Table = styled.table`
  
  width: 100%;
  & th {
    padding: 5px;  
    text-align: left;  
  }
  
  & th.info {
    text-align: right;
  }
  
  & td {
    padding: 10px 5px;
    border-bottom: 1px solid #424242;
  }
  
  & td.time {
    padding-right: 20px;
  }
  
  & td.info {
    text-align: right;
  }
  
`;

const NavBar = styled.div`
  height: 80px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-around;
  font-size: 26px;
`;

const Logout = styled.a`
  &:hover {
    color: #00201d;
    cursor: pointer;
  }
`;

export default class extends Component {

    static propTypes = {
        records: PropTypes.array,
        onGoBack: PropTypes.func,
        org: PropTypes.string
    };

    static defaultProps = {
        records: [],
        onLogout: () => {
        },
        org: ""
    };

    constructor(props) {
        super(props);

    }

    getRows() {
        return this.props.records.map((record) => {
            const m = moment(record.time);
            const time = m.format("MMM Do YY, h:mm a");

            return <tr key={record.id}>
                <td className="time">{time}</td>
                <td className="info">{record.name}</td>
                <td className="info">{record.phone}</td>
                <td className="info">{record.email}</td>
            </tr>
        })
    }

    render() {

        if (this.props.error) {
            return (
                <div>Error: {this.props.error}</div>
            )
        }

        return (
            <div>
                <NavBar>
                    Hello, {this.props.username}!
                    <Logout onClick={this.props.onLogout}>Logout</Logout>
                </NavBar>
                <Container>
                    <TableContainer>
                        <Title>Your guest records</Title>
                        <Table>
                            <thead>
                            <tr>
                                <th>Time</th>
                                <th className="info">Name</th>
                                <th className="info">Phone</th>
                                <th className="info">Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.getRows()}
                            </tbody>
                        </Table>
                    </TableContainer>
                </Container>
            </div>

        );
    }
}