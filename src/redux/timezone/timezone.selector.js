import { createSelector } from 'reselect';
import moment from 'moment';

const selectTimezone = state => state.timezone;

export const selectCurrTimezone = createSelector(
    [selectTimezone],
    timezone => timezone.currZone
)

export const selectStartTimezone = () => {
  moment.tz.zone('GMT')
}