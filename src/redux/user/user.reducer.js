import UserActionTypes from './user.types'

export const INITIAL_STATE = {
    userList: [],
    error: null,  
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.IMPORT_USERLIST_SUCCESS:
            return{
                ...state,
                userList: action.payload,
                error:null
            };
        case UserActionTypes.IMPORT_USERLIST_FAILURE:
            return{
                ...state,
                error:action.payload
            };
        case UserActionTypes.CHANGE_USEREINFO_SUCCESS:
            return{
                ...state,
                userList: action.payload
            };
        case UserActionTypes.CHANGE_USERINFO_FAILURE:
            return{
                ...state,
                error:action.payload
            };
        default:
            return state;
    };
}

export default userReducer