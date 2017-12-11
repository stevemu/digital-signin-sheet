import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {getRecords} from '../actions/recordsActions'
import {logoutUser} from "../actions/loginUserActions";
import RecordsView from '../components/RecordsView';

@connect((store) => {
    return {
        records: store.records.records,
        username: store.loginUser.username,
        token: store.loginUser.token
    }
})
export default class extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);

        const {username, token} = this.props;
        this.props.dispatch(getRecords(username, token));
    }

    render() {
        // console.log(this.props.records);
        
        const filtered = this.props.records.filter((record) => {
          return record.username === this.props.username;
        });

        return (
            <RecordsView
                username={this.props.username}
                records={filtered}
                onLogout={() => {
                    this.props.dispatch(logoutUser());
                }}/>
        );


        // return <div>aaa</div>
    }
}
