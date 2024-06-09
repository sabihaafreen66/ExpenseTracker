import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'IncrementBy5':
            return { counter: state.counter + 5 };
        case 'DecrementBy5':
            return { counter: state.counter - 5 };
        default:
            return state; // Ensure to return the current state if the action type is not recognized
    }
};

const store = createStore(counterReducer); // Create the store using the imported createStore

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

export default store;
