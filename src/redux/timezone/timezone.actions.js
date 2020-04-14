import { TIMEZONE_ACTIONS } from './timezone.types';

export const setTimezone = zoneName => ({
    type: TIMEZONE_ACTIONS.SET_ZONE_BY_NAME,
    payload: zoneName
})