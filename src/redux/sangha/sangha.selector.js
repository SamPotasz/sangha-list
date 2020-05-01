import { createSelector } from 'reselect';

import { selectSearchString } from '../search/search.selector';

const DAY_NAMES = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const selectSangha = state => state.sangha;
export const selectSanghaItems = createSelector(
    [selectSangha],
    sangha => sangha.data
)

//get the list of all days/categories of sanghas (i.e. 'daily', 'monday', etc.)
export const selectDays = createSelector(
    [selectSangha],
    sangha => sangha.days
);

//faster way when we have separate object mapping days to sanghas
//modeled after https://dev.to/pigozzifr/how-to-store-relational-data-inside-redux-el6
export const selectDaySanghas = day => createSelector(
    [selectSanghaItems, selectDays],
    (sanghaItems, days) => {
        const sanghaIDs = days[day] || [];
        return sanghaIDs.map(sanghaId => sanghaItems[sanghaId.toString()]);
    }
)

//get list of sanghas for a day filtered by search key
export const selectFilteredSanghasForDay = day => createSelector(
  [selectDaySanghas(day), selectSearchString],
  (sanghaItems, searchString) => {
      const searchLC = searchString.toLowerCase();
      return searchLC ? 
          sanghaItems.filter(sanghaItem => 
              sanghaItem.name.toLowerCase().includes(searchLC) ||
              sanghaItem.teacher.toLowerCase().includes(searchLC) ||
              (sanghaItem.organization && sanghaItem.organization.toLowerCase().includes(searchLC)))
          : sanghaItems.filter(sanghaItem => 
              sanghaItem.hasOwnProperty(day));
      }
)

/**
 * Return all the sanghas that are going on right now or about to start
 * (within one hour of current time)
 * The time zones on this are all messed up, but the idea is there :-/
 */
export const selectNowSanghas = createSelector(
  [selectDaySanghas( DAY_NAMES[ new Date().getDay() ] )],
  sanghaItems => 
    sanghaItems.filter( sanghaItem => {
      const startHours = new Date(sanghaItem.startTime).getHours()
      const nowHours = new Date().getUTCHours();
      const hourDiff = Math.abs( startHours - nowHours );
      console.log({startHours, nowHours, hourDiff});
      return hourDiff <= 1 }
    )
)