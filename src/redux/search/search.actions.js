import { SEARCH_ACTIONS } from './search.types';

//action to set the search string in the store
export const setString = (searchString) => ({
    type: SEARCH_ACTIONS.SET_SEARCH_STRING,
    payload: searchString
})