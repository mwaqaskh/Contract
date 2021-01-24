import { createSelector } from 'reselect';

const selectBU = state => state.configBUReducer


export const selectBUList = createSelector(
    [selectBU],
    buList => buList.buList
)