/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { selectUserId, selectUserList } from '../../redux/user/user.selectors'
import { importUserlistStart, changeUserinfoStart } from '../../redux/user/user.action'

const UserPage = ({ userList, importUserlistStart, userInfo, changeUserinfoStart }) => {

    useEffect(() =>
        initialLoading(), []
    )

    const [fieldStatus, setFieldStatus] = useState(false);
    const [newUserName, setNewUserName] = useState(userInfo.userName)

    const initialLoading = () => {
        if (!userList.length) {
           importUserlistStart("")
        }
        
    }

    const handleField = ()=>{
        setFieldStatus(!fieldStatus);
    }

    const handleChange =()=>{
        let newUserInfo = userInfo;
        newUserInfo.userName = newUserName
        
        changeUserinfoStart(newUserInfo, userList)
        setFieldStatus(!fieldStatus)
    }

    const handleUpdateUserInfo = (event) =>{
        const {value} = event.target;
        setNewUserName(value)
    }


    if (!userList.length) {
        return (
            <div>...loading...</div>
        )
    } else {
        const {userName, skills, interests} = userInfo;

        return (

            <div>
                {/* {console.log(userInfoState)} */}
                {fieldStatus? 
                <div>
                    <input 
                    placeholder={userName}
                    value={newUserName}
                    onChange={handleUpdateUserInfo}/>
                    <button onClick={()=>handleChange()}>Save</button>
                </div>
                :
                <h1 onDoubleClick={()=>handleField()}>{`Name: ${userName}`}</h1>}    
                
                <h3>{`Skills: ${skills}`}</h3>
                <h3>{`Interests: `}</h3>

                {interests.map((interest, i) =>
                    <li key={i}>{interest}</li>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    userList: selectUserList(state),
    userInfo: selectUserId(ownProps.match.params.userId)(state)[0]
})

const mapDispatchToProps = dispatch => ({
    importUserlistStart: (searchTerm) => dispatch(importUserlistStart(searchTerm)),
    changeUserinfoStart: (userInfo, userList) => dispatch(changeUserinfoStart(userInfo, userList))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)