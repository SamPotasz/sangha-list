import SANGHA_DATA from './sangha.data';

const INITIAL_STATE = SANGHA_DATA;

const sanghaReducer = (state = INITIAL_STATE, action) => {
    switch(action) {
        default: return state;
    }
}

export default sanghaReducer;