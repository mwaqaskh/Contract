import { createSelector } from 'reselect';

const selectRegion = state => state.configReducer


export const selectRegionList = createSelector(
    [selectRegion],
    regionList => regionList.regionList
)