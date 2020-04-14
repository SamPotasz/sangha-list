import { combineReducers } from 'redux';

import sanghaReducer from './sangha/sangha.reducer';
import searchReducer from './search/search.reducer';
import timezoneReducer from './timezone/timezone.reducer';

const rootReducer = combineReducers({
    sangha: sanghaReducer,
    search: searchReducer,
    timezone: timezoneReducer,
})

export default rootReducer;