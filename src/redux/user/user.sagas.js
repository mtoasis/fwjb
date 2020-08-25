import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.types'
import { 
    importUserlistSuccess, 
    importUserlistFailure,
    changeUserinfoSuccess,
    changeUserinfoFailure

} from './user.action'

export function* importUserlist({payload}){
    try{        
        const data = yield fetch('http://localhost:8080/api/users')
        let result = yield data.json();

        if(payload.length){
            //need to work on this later.
    
            // const newRes = result.filter(({skills})=>{

            //     skills.filter(element=>
            //         {
            //             element.toLowerCase().includes(payload.toLowerCase())
            //             console.log(element)
                    
            //         })
                // console.log(skills)
                // skills.includes(payload.toLowerCase())                        

            // }) 
            // console.log(newRes)
            // result = newRes               
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