import React from 'react';
import logo from '../../logo.svg';


export default class HomePage extends React.Component {
    render() {
        return (
            <div>
              <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="blue">
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </header>          
            </div>
        );
    }
}