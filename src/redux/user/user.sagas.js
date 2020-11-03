import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import { 
    importUserlistSuccess, 
    importUserlistFailure,
    changeUserinfoSuccess,
    changeUserinfoFailure

} from './user.action'

import {sample} from '../../sample-json/sample'


export function* importUserlist({payload}){

    // try{     
    //     let data, result
        
    //     if(payload.length){
    //          data = yield fetch('http://localhost:8080/api/users/:skillName')
    //          result = yield data.json();
    //     }else{
    //          data = yield fetch('http://localhost:8080/api/users')
    //          result = yield data.json();
    //     }
    try{        
        let result = [];
        if(!payload.length){
            result = sample
        }else{
            result = sample.filter(element=>
                element.skills.toLowerCase().includes(payload.toLowerCase()));                
        }

        yield put(importUserlistSuccess(result));
    }
    catch(error){
        yield put(importUserlistFailure(error));
    };
};

export function* changeUserinfo({payload: {userInfo, userList}}){
    try{
        let result = [];
        result = userList.map(element=>element.id === userInfo.id? Object.assign(element, userInfo):element)
        yield put(changeUserinfoSuccess(result));
    }
    catch(error){
        yield put(changeUserinfoFailure(error));
    }
}

export function* onImportUserlist(){
    yield takeLatest(UserActionTypes.IMPORT_USERLIST_START, importUserlist);
};

export function* onChangeUserinfo(){
    yield takeLatest(UserActionTypes.CHANGE_USERINFO_START, changeUserinfo);
}

export function* userSagas(){
    yield all([
        call(onImportUserlist),
        call(onChangeUserinfo)
    ]);
};