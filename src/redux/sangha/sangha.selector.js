//modeled after https://dev.to/pigozzifr/how-to-store-relational-data-inside-redux-el6

import { createSelector } from 'reselect';

export const selectSanghaValues = state => {
    // console.log(state.sangha);
    return Object.values(state.sangha.data);
}

export const selectDays = state => state.sangha.days;
export const selectDayValues = state => Object.values(state.sangha.days);

export const selectSangha = id => state => (
    state.sangha.data[id]
)

export const selectDaySanghas = day => state => {
    console.log(day);
    return selectSanghaValues(state).filter( sangha => sangha.hasOwnProperty(day) );
}

//faster way when we have separate object mapping days to sanghas
/*
export const selectDaySanghas = day => state => {
    const sanghaIDs = state.sangha.days[day] || [];
    return sanghaIDs.map(sanghaId => selectSangha(sanghaId)(state));
}
*/