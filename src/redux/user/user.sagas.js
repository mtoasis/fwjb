import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import { importUserlistSuccess, importUserlistFailure } from './user.action'

import { sample } from '../../sample-json/sample'

export function* importUserlist({payload}){
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

export function* onImportUserlist(){
    yield takeLatest(UserActionTypes.IMPORT_USERLIST_START, importUserlist);
};

export function* userSagas(){
    yield all([
        call(onImportUserlist)
    ]);
};