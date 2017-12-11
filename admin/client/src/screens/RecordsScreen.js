import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {getRecords} from '../actions/recordActions'
import {logoutUser} from "../actions/loginUserActions";
import RecordsView from '../components/RecordsView';

@connect((store) => {
    return {
        records: store.records
    }
})
export default class extends Component {

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
            <RecordsView
                username={this.props.match.params.username}
                records={filtered}
                onLogout={() => {
                    this.props.dispatch(logoutUser());
                }}/>
        );
    }
}
