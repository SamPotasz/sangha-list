import { createSelector } from 'reselect';

const selectTimezone = state => state.timezone;

export const selectCurrTimezone = createSelector(
    [selectTimezone],
    timezone => timezone.currZone
)