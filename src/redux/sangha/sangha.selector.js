
import { createSelector } from 'reselect';

// import 

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

// export const selectDaySanghas = day => state => {
//     return selectSanghaItems(state).filter( sangha => sangha.hasOwnProperty(day) );
// }

export const selectFilteredSanghasForDay = searchString => day => state => {
    const daySanghas = selectDaySanghas(day)(state);
    const searchLC = searchString.toLowerCase();
    return daySanghas.filter(sangha => 
        sangha.name.toLowerCase().includes(searchLC) ||
        sangha.teacher.toLowerCase().includes(searchLC) ||
        sangha.organization.toLowerCase().includes(searchLC) )
}

//faster way when we have separate object mapping days to sanghas
//modeled after https://dev.to/pigozzifr/how-to-store-relational-data-inside-redux-el6
/*
export const selectDaySanghas = day => state => {
    const sanghaIDs = state.sangha.days[day] || [];
    return sanghaIDs.map(sanghaId => selectSangha(sanghaId)(state));
}
*/