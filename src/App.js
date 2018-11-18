import React, { Component } from 'react';
import {Provider} from 'react-redux'

import Header from './components/common/header'

import './App.css';

class App extends Component {
  render() {
    //console.log(this.props.store)
    return (
      <Provider store={this.props.store}>
        <div className="App">
              <Header/>
        </div>
      </Provider>
    );
  }
}

export default App;
