import { SEARCH_ACTIONS } from './search.types';

const INITIAL_STATE = {
    searchString: '',
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SEARCH_ACTIONS.SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.payload,
            }
        default: return state;
    }
}

export default searchReducer;