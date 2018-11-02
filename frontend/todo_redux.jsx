import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveTodo, receiveTodos } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();
    // const preloadedState = localStorage.state ?
    // JSON.parse(localStorage.state) : {};
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    const root = document.getElementById('content');
    ReactDOM.render(<Root store={store} />, root);
})

// import React from 'react';
// import ReactDOM from 'react-dom';
// import configureStore from './store/store';

// import Root from './components/root';

// document.addEventListener('DOMContentLoaded', () => {
//     const preloadedState = localStorage.state ?
//         JSON.parse(localStorage.state) : {};
//     const store = configureStore(preloadedState);
//     window.store = store;
//     window.receiveTodo = receiveTodo;
//     window.receiveTodos = receiveTodos;
//     const root = document.getElementById('content');
//     ReactDOM.render(<Root store={store} />, root);
// });