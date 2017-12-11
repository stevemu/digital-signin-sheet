import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {getRecords} from '../actions/recordsActions'
import {logoutUser} from "../actions/loginUserActions";
import RecordsView from '../components/RecordsView';

@connect((store) => {
    return {
        records: store.records,
        username: store.loginUser.username,
        token: store.loginUser.token,
        title: store.app.title

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

    componentDidMount() {
        document.title = this.props.title + " - Records";
    }

    render() {
        // console.log(this.props.records);
        
        const filtered = this.props.records.records.filter((record) => {
          return record.username === this.props.username;
        });

        return (
            <RecordsView
                error={this.props.records.recordFetchError}
                username={this.props.username}
                records={filtered}
                onLogout={() => {
                    this.props.dispatch(logoutUser());
                }}/>
        );


        // return <div>aaa</div>
    }
}
