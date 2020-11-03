import UserActionTypes from './user.types'

import {
    importUserlistStart,
    importUserlistSuccess,
    importUserlistFailure,
    changeUserinfoStart,
    changeUserinfoSuccess,
    changeUserinfoFailure
} from './user.action'

describe('importUserlistStart action', () => {
    it('should create the importUserlistStart action', () => {

        const searchTerm = 'testing';

        const action = importUserlistStart(searchTerm);

        expect(action.type).toEqual(UserActionTypes.IMPORT_USERLIST_START);

        expect(action.payload).toEqual(searchTerm)
    })
})

describe('importUserlistSuccess action', () => {
    it('should create the importUserlistSuccess action', () => {
        const mockUserlist = [{
            id: 1,
            userName: "Julian",
            skills: "JavaScript",
            interests: ["Skiing", "Baseball", "Soccer"],
            createdAt: null
        }];

        const action = importUserlistSuccess(mockUserlist);

        expect(action.type).toEqual(UserActionTypes.IMPORT_USERLIST_SUCCESS);
        expect(action.payload).toEqual(mockUserlist);
    })
})

describe('importUserlistFailure action', () => {
    it('should create the importUserlistFailure', () => {
        const errorMsg = 'error';

        const action = importUserlistFailure(errorMsg);

        expect(action.type).toEqual(UserActionTypes.IMPORT_USERLIST_FAILURE);
        expect(action.payload).toEqual(errorMsg)
    })
})

describe('changeUserinfoStart action', () => {
    it('should create the changeUserinfoStart action', () => {

        const mockUserInfo = {
            id: 1,
            userName: "testing2",
            skills: "JavaScript",
            interests: ["Skiing", "Baseball", "Soccer"],
            createdAt: null
        };

        const mockUserList = [{
            id: 1,
            userName: "testing2",
            skills: "JavaScript",
            interests: ["Skiing", "Baseball", "Soccer"],
            createdAt: null
        }]

        const action = changeUserinfoStart(mockUserInfo, mockUserList);

        expect(action.type).toEqual(UserActionTypes.CHANGE_USERINFO_START);

        expect(action.payload).toEqual({
            userInfo:mockUserInfo, 
            userList:mockUserList
        })
    })
})

describe('changeUserinfoSuccess action', () => {
    it('should create the changeUserinfoSuccess action', () => {
        const mockUserlist = [{
            id: 1,
            userName: "Julian",
            skills: "JavaScript",
            interests: ["Skiing", "Baseball", "Soccer"],
            createdAt: null
        }];

        const action = changeUserinfoSuccess(mockUserlist);

        expect(action.type).toEqual(UserActionTypes.CHANGE_USEREINFO_SUCCESS);
        expect(action.payload).toEqual(mockUserlist);
    })
})

describe('changeUserinfoFailure action', () => {
    it('should create the changeUserinfoFailure', () => {
        const errorMsg = 'error';

        const action = changeUserinfoFailure(errorMsg);

        expect(action.type).toEqual(UserActionTypes.CHANGE_USERINFO_FAILURE);
        expect(action.payload).toEqual(errorMsg)
    })
})