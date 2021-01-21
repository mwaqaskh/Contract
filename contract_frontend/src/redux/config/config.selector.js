import { createSelector } from 'reselect';

const selectRegion = state => state.regionList


export const selectUserList = createSelector(
    [selectRegion],
    selectRegion => selectRegion.selectRegion
)