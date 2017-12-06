import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import axios from 'axios';

import EnterIDScreen from './screens/LoginScreen';
import RecordTableScreen from './screens/RecordTableScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import RegSuccessScreen from './screens/RegSuccessScreen';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
          <div>
              <Route exact path="/" component={EnterIDScreen}/>
              <Route path="/login" component={EnterIDScreen}/>
              <Route path="/record-table/:username" component={RecordTableScreen}/>
              <Route path="/registration" component={RegistrationScreen}/>
              <Route path="/reg-success" component={RegSuccessScreen}/>
          </div>
      </Router>
    );
  }
}

export default App;
