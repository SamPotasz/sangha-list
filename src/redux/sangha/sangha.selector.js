import { createSelector } from 'reselect';

import { selectSearchString } from '../search/search.selector';

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

//get all sanghas for the given day (unused)
// export const selectDaySanghas = day => createSelector(
//     [selectSanghaItems],
//     sanghaItems => sanghaItems.filter(
//         sanghaItem => sanghaItem.hasOwnProperty(day))
// )

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
        console.log(sanghaItems);
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