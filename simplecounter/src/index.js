import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';
import * as serviceWorker from './serviceWorker';

const counterSlice = createSlice({
    name: 'counter', 
    initialState: {value: 0}, 
    reducers: {
        increment(state) {
            state.value ++
        }, 
        decrement(state) {
            state.value -- 
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <h1>Simple Counter</h1>
<div>State: {store.state.value}</div>
    <button onClick={store.dispatch(counterSlice.actions.increment())}>+</button>
    <button onClick={store.dispatch(counterSlice.actions.decrement())}>-</button>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
