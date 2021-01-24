import { createSelector } from 'reselect';

const selectDivision = state => state.configDIVReducer


export const selectDivisionList = createSelector(
    [selectDivision],
    divList => divList.divList
)