import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo';
import * as serviceWorker from './serviceWorker';
function render(){
    ReactDOM.render(<Todo />, document.getElementById('root'));
}
render();

//setInterval(render, 2000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
