import React, { Component } from 'react';
import '../App.css';
import { createStore } from 'redux';

// This is a reducer, a pure function with (state, action) => state signature.
// It describes how an action transforms the state into the next state.

// In this example, we use a `switch` statement and strings
function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

export default class Counter extends Component {
    render() {
        // Create a Redux store holding the state of your app.
        // Its API is { subscribe, dispatch, getState }.
        let store = createStore(counter)

        // You can use subscribe() to update the UI in response to state changes.
        store.subscribe( () => console.log(store.getState()))

        // The only way to mutate the internal state is to dispatch an action.
        // The actions can be serialized, logged or stored and later replayed.
        store.dispatch({ type: 'INCREMENT' })
        // 1
        store.dispatch({ type: 'INCREMENT' })
        // 2
        store.dispatch({ type: 'DECREMENT' })
        // 1
        return (
            <div className="app">
                <h1>Counter</h1>
                <p>View the console to see the counter</p>
            </div>
        );
    }
}

// In a typical Redux app, there is just a single store with a single root reducing function.
// As your app grows, you split the root reducer into smaller reducers independently operating
// on the different parts of the state tree. This is exactly like how there is just one root
// component in a React app, but it is composed out of many small components.