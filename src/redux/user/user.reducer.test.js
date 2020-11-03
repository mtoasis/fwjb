import UserActionTypes from './user.types';
import userReducer, {INITIAL_STATE} from './user.reducer';

describe('IMPORT_USERLIST', ()=>{
    it('should return initial state', ()=>{
        // console.log(userReducer(undefined, {}))
        expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
    })

    it('should set userList to payload if IMPORT_USERLIST_SUCCESS', ()=>{
        const mockUserList = [{
            id:1,
            userName:"test",
            skills:"testSkills",
            interests:["test1", "test2", "test3"],
            createdAt:null
        }]

        expect(userReducer(INITIAL_STATE, {
            type: UserActionTypes.IMPORT_USERLIST_SUCCESS,
            payload: mockUserList
        }))
        .toEqual({
            ...INITIAL_STATE,
            userList: mockUserList
        })
    })

    it('should set error to payload if IMPORT_USERLIST_FAILURE', ()=>{

        const errorMsg = 'error';

        expect(userReducer(INITIAL_STATE, {
            type: UserActionTypes.IMPORT_USERLIST_FAILURE,
            payload: errorMsg
        }))
        .toEqual({
            ...INITIAL_STATE,
            error:errorMsg
        })
    })
})

describe('CHANGE_USERINFO', ()=>{

    const CURRENT_STATE = {
        userList:[{
            id:1,
            userName:"test",
            skills:"testSkills",
            interests:["test1", "test2", "test3"],
            createdAt:null
        }],
        error: null,
    }
    
    it('should set userList to payload if CHANGE_USERINFO_START', ()=>{

        const updatedMockUserList = [{
            id:2,
            userName:"newName",
            skills:"newSkills",
            interests:["test1", "test2", "test3"],
            createdAt:null
        }]

        expect(userReducer(CURRENT_STATE, {
            type: UserActionTypes.CHANGE_USEREINFO_SUCCESS,
            payload: updatedMockUserList
        }))
        .toEqual({
            ...CURRENT_STATE,
            userList: updatedMockUserList
        })
    })

    it('should set error to payload if CHANGE_USERINFO_FAILURE', ()=>{

        const errorMsg = 'error';

        expect(userReducer(CURRENT_STATE, {
            type: UserActionTypes.CHANGE_USERINFO_FAILURE,
            payload: errorMsg
        }))
        .toEqual({
            ...CURRENT_STATE,
            error:errorMsg
        })
    })
})