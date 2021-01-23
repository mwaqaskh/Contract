import { createSelector } from 'reselect';

const selectRegion = state => state.configReducer


export const selectRegionList = createSelector(
    [selectRegion],
    buList => buList.buList
)