import { createSlice } from '@reduxjs/toolkit'
import { createStore } from 'redux'

const initialStates = {counter: 0, showCounter: true}

createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increament(state, action){
            state.counter = state.counter + action.value;
        },
        decreament(state, action){
            state.counter = state.counter + action.value;
        },
        increase(state, action){
            state.counter = state.counter + action.value;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }

    }
})
const counterReducer = (state = initialStates, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - action.value,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter,
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;
