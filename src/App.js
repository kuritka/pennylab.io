import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {connect} from 'react-redux'

import Header from './components/common/header'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
              <Header loading={this.props.loading}/>
        </div>
      </Provider>
    );
  }
}

function mapStateToProps (state , ownProps) {
  return {
    loading : state.ajaxStatusReducerState > 0
  }
}

export default connect(mapStateToProps)(App);
