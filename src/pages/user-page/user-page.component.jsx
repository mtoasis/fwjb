/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { selectUserlistById, selectUserList } from '../../redux/user/user.selectors'
import { importUserlistStart, changeUserinfoStart } from '../../redux/user/user.action'
import UserPageItem from '../../component/user-page-item/user-page-item.component'

const UserPage = ({ userList, importUserlistStart, userInfo, changeUserinfoStart }) => {

    useEffect(() => {
        const initialLoading = async () => {
            await importUserlistStart("");
        }
        initialLoading()

    },
        []
    )

    const [fieldStatus, setFieldStatus] = useState(false);
    const [newUserInfo, setNewUserInfo] = useState({})

    const handleField = () => {
        if (!newUserInfo.length) {
            Object.assign(newUserInfo, userInfo);
        }
        setFieldStatus(!fieldStatus);
    }

    const handleSubmit = () => {
        changeUserinfoStart(newUserInfo, userList);
        setFieldStatus(!fieldStatus);
    }

    const handleUpdateUserInfo = (event) => {
        const { name, value, id } = event.target;

        if (id) {
            let newInterests = newUserInfo.interests;
            newInterests[id] = value;
            setNewUserInfo({ ...newUserInfo, [name]: newInterests });
            return;
        }
        setNewUserInfo({ ...newUserInfo, [name]: value });
    }


    if (!userList.length) {
        return (
            <div>...loading...</div>
        )
    } else {
        const { userName, skills, interests } = userInfo;

        return (

            <div>
                <UserPageItem
                    name={'userName'}
                    label={'Name'}
                    initialValue={userName}
                    updatedValue={newUserInfo.userName}
                    onChange={handleUpdateUserInfo}
                    handleField={handleField}
                    fieldStatus={fieldStatus}
                />
                <UserPageItem
                    name={'skills'}
                    label={'Skills'}
                    initialValue={skills}
                    updatedValue={newUserInfo.skills}
                    onChange={handleUpdateUserInfo}
                    handleField={handleField}
                    fieldStatus={fieldStatus}
                />
                <span>{`Interests: `}</span>

                {interests.map((interest, i) =>
                    <div key={i}>
                        <UserPageItem
                            name={'interests'}
                            label={`#${i + 1}`}
                            id={i}
                            initialValue={interest}
                            updatedValue={newUserInfo.length ? newUserInfo.interests[i] : interests[i]}
                            onChange={handleUpdateUserInfo}
                            handleField={handleField}
                            fieldStatus={fieldStatus}
                        />
                    </div>
                )
                }
                <button onClick={() => handleSubmit()}>Save</button>
            </div >
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    userList: selectUserList(state),
    userInfo: selectUserlistById(ownProps.match.params.userId)(state)[0]
})

const mapDispatchToProps = dispatch => ({
    importUserlistStart: (searchTerm) => dispatch(importUserlistStart(searchTerm)),
    changeUserinfoStart: (userInfo, userList) => dispatch(changeUserinfoStart(userInfo, userList))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);