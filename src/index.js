import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import { loadCourses } from './components/course/courseActions';
import { loadAuthors } from './components/author/authorActions';



const store = configureStore()
//passing servrer initial state right here!
store.dispatch(loadCourses())
store.dispatch(loadAuthors())
ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
