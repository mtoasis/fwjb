import { createSelector } from 'reselect'

const selectUser = state => state.user;

export const selectUserList = createSelector(
    [selectUser],
    (user)=>user.userList
);

export const selectUserlistById = idParams => createSelector(
    [selectUser],
    ({userList})=> userList.filter(element=> element.id.toString() === idParams)
    //this returns userInfo array matches with requested userId
);

