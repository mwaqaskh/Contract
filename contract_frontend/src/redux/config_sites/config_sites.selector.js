import { createSelector } from 'reselect';

const selectSites = state => state.configSITESReducer


export const selectSitesList = createSelector(
    [selectSites],
    sitesList => sitesList.sitesList
)