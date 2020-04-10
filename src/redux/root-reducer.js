import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';    //use local storage

import sanghaReducer from './sangha/sangha.reducer';
import searchReducer from './search/search.reducer';

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['sangha']
// }

const rootReducer = combineReducers({
    sangha: sanghaReducer,
    search: searchReducer,
})

export default rootReducer;