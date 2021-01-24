import { createSelector } from 'reselect';

const selectDept = state => state.configDEPTReducer


export const selectDeptList = createSelector(
    [selectDept],
    deptList => deptList.deptList
)