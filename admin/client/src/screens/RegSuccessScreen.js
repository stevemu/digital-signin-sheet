import React, {Component} from 'react';
import {connect} from 'react-redux';

import {seeRegSuccessPage} from "../actions/registrationActions";
import RegSuccessView from '../components/RegSuccessView';

@connect((store) => {
    return {
    }
})
export default class RegSuccessScreen extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(seeRegSuccessPage());
    }

    render() {
        return (
            <RegSuccessView
                loginPressed={()=>{
                    this.props.history.push("/login");
                }}
            />
        );
    }
}
