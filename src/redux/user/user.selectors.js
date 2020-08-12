import { createSelector } from 'reselect'

const selectUser = state => state.user;

export const selectUserList = createSelector(
    [selectUser],
    (user)=>user.userList
);
