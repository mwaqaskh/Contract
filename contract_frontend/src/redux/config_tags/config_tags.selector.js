import { createSelector } from 'reselect';

const selectTag = state => state.configTAGSReducer


export const selectTagList = createSelector(
    [selectTag],
    tagsList => tagsList.tagsList
)