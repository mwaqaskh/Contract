import { createSelector } from 'reselect';

const selectUser = state => state.userList


export const selectUserList = createSelector(
    [selectUser],
    userList => userList.userList
)