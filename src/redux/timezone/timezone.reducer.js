import moment from 'moment-timezone';

import { TIMEZONE_ACTIONS } from './timezone.types';

const INITIAL_STATE = {
    currZone: null,
}

const timezoneReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TIMEZONE_ACTIONS.SET_INITIAL_GUESS:
            return {
                ...state,
                currZone: state.currZone || moment.tz.guess()
            }
        
        case TIMEZONE_ACTIONS.SET_ZONE_BY_NAME:
            return {
                ...state,
                currZone: moment.tz(action.payload) || state.currZone
            }
        
        default: return state;
    }
}

export default timezoneReducer;