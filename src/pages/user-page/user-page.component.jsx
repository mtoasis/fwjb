import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectUserId, selectUserList } from '../../redux/user/user.selectors'
import { importUserlistStart } from '../../redux/user/user.action'

const UserPage = ({ userList, importUserlistStart, userInfo }) => {

    useEffect(() =>
        initialLoading(), []
    )

    const initialLoading = () => {
        if (!userList.length) {
            importUserlistStart("")
        }
    }


    if (!userList.length) {
        return (
            <div>...loading...</div>
        )
    } else {
        const {userName, skills, interests} = userInfo;

        return (

            <div>               
                <h1>{`Name: ${userName}`}</h1>
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
    importUserlistStart: (searchTerm) => dispatch(importUserlistStart(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)