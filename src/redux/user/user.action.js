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
