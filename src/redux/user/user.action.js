import UserActionTypes from './user.types'

export const importUserlistStart = (searchTerm) => ({
    type: UserActionTypes.IMPORT_USERLIST_START,
    payload: searchTerm
})

export const importUserlistSuccess = (userList) => ({
    type: UserActionTypes.IMPORT_USERLIST_SUCCESS,
    payload: userList
});

export const importUserlistFailure = (error) => ({
    type: UserActionTypes.IMPORT_USERLIST_FAILURE,
    payload: error
})

export const changeUserinfoStart = (userInfo, userList) =>({
    type:UserActionTypes.CHANGE_USERINFO_START,
    payload:{userInfo, userList}
})

export const changeUserinfoSuccess = (userList) =>({
    type:UserActionTypes.CHANGE_USEREINFO_SUCCESS,
    payload:userList
})

export const changeUserinfoFailure = (error)=>({
    type:UserActionTypes.CHANGE_USERINFO_FAILURE,
    payload:error
})