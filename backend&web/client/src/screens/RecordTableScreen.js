import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HouseIcon from 'react-icons/lib/md/account-balance';
import {Button, FormControl, Table} from 'react-bootstrap';
import {getRecords} from '../actions/recordActions'
import {connect} from 'react-redux';

import RecordTable from '../components/RecordTable';

// @connect((store) => {
//     return {
//         records: store.records
//     }
// })
class RecordTableScreen extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);

        const username = this.props.match.params.username;
        this.props.dispatch(getRecords(username));
    }

    render() {
        const filtered = this.props.records.filter((record) => {
          return record.username == this.props.match.params.username;
        });

        return (
            <RecordTable
                username={this.props.match.params.username}
                records={filtered}
                onGoBack={() => {
                    this.props.history.push("/");
                }}/>
        );
    }
}

function mapStateToProps(store, ownProps) {
    return {
        records: store.records
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(RecordTableScreen);;
