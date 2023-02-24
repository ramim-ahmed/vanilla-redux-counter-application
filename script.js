const count = document.getElementById('count');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');



/// initial state
const initialState = {
    value: 0
};

// create counter reducer
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1
        }
    } else {
        return state;
    }
};

/// create redux store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    count.innerText = state.value
};
render();
store.subscribe(render)

/// action dispatch
incrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'increment'
    })
});


decrementEl.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement'
    })
});
