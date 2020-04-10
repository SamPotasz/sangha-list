import { createSelector } from 'reselect';

import { selectSearchString } from '../search/search.selector';

const selectSangha = state => state.sangha;
export const selectSanghaItems = createSelector(
    [selectSangha],
    sangha => Object.values(sangha.data)
)

export const selectDays = createSelector(
    [selectSangha],
    sangha => sangha.days
);

export const selectDaySanghas = day => createSelector(
    [selectSanghaItems],
    sanghaItems => sanghaItems.filter(
        sanghaItem => sanghaItem.hasOwnProperty(day))
)

export const selectFilteredSanghasForDay = day => createSelector(
    [selectSanghaItems, selectSearchString],
    (sanghaItems, searchString) => {
        const searchLC = searchString.toLowerCase();
        return searchLC ? 
            sanghaItems.filter(sanghaItem => 
                sanghaItem.hasOwnProperty(day) && 
                (sanghaItem.name.toLowerCase().includes(searchLC) ))
            : sanghaItems;
        }
    
)

//faster way when we have separate object mapping days to sanghas
//modeled after https://dev.to/pigozzifr/how-to-store-relational-data-inside-redux-el6
/*
export const selectDaySanghas = day => state => {
    const sanghaIDs = state.sangha.days[day] || [];
    return sanghaIDs.map(sanghaId => selectSangha(sanghaId)(state));
}
*/