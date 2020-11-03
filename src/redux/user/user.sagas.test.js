import { takeLatest, put, all, call } from 'redux-saga/effects'
import {
    importUserlistSuccess,
    importUserlistFailure,
    changeUserinfoSuccess,
    changeUserinfoFailure

} from './user.action'
import { sample, updatedSample } from '../../sample-json/sample'

import {
    onImportUserlist,
    onChangeUserinfo,
    importUserlist,
    changeUserinfo
} from './user.sagas'
import UserActionTypes from './user.types'

describe('import userlist start saga', () => {
    const generator = onImportUserlist();

    it('should trigger on IMPORT_USERLIST_START', () => {

        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.IMPORT_USERLIST_START, importUserlist)
        )

    })
})

describe('import userlist saga', () => {

    const mockUserList = sample
    let generator;

    it('should return a full userlist when the search term is empty', () => {

        generator = importUserlist({
            payload: ''
        });

        expect(generator.next().value).toEqual(
            put(importUserlistSuccess(mockUserList))
        )
    })

    it('should return a filtered userlist when the search term exists', () => {
        generator = importUserlist({
            payload: 'Cooking'
        });

        const expectedUserlist = [{
            id: 5,
            userName: "Will",
            skills: "Cooking",
            interests: ["Girls", "Weeds"],
            createdAt: null
        }]

        expect(generator.next().value).toEqual(
            put(importUserlistSuccess(expectedUserlist))
        )
    })
})

describe('change userinfo start saga', () => {
    const generator = onChangeUserinfo();

    it('should trigger on CHANGE_USERINFO_START', () => {

        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.CHANGE_USERINFO_START, changeUserinfo)
        )

    })
})

describe('change userinfo saga', () => {
    const mockUserList = sample
    let generator;

    it('should return a same userlist when there is no change', () => {

        const mockUserInfo = {
            id: 1,
            userName: "Julian",
            skills: "JavaScript",
            interests: ["Skiing", "Baseball", "Soccer"],
            createdAt: null
        }

        generator = changeUserinfo({
            payload: {
                userInfo: mockUserInfo,
                userList: mockUserList
            }
        });

        expect(generator.next().value).toEqual(
            put(changeUserinfoSuccess(mockUserList))
        )
    })

    it('should return the updated userlist when there is changes', () => {
        const updatedMockUserInfo = {
            id: 1,
            userName: "Julian",
            skills: "Java",
            interests: ["Fishing", "Basketball", "Soccer"],
            createdAt: null
        }

        const updatedMockUserlist = updatedSample

        generator = changeUserinfo({
            payload: {
                userInfo: updatedMockUserInfo,
                userList: mockUserList
            }
        });
        // console.log(put(changeUserinfoSuccess(updatedMockUserlist)))
        expect(generator.next().value).toStrictEqual(
            put(changeUserinfoSuccess(updatedMockUserlist))
        )
    })
})