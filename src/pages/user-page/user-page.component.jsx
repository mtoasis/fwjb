/* eslint-disable */

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectUserId, selectUserList } from '../../redux/user/user.selectors'
import { importUserlistStart } from '../../redux/user/user.action'
import {ProfileTextContainer} from './user-page.styles'

const UserPage = ({ userList, importUserlistStart, userInfo, changeUserinfoStart }) => {
  useEffect(() => {
    const initialLoading = async () => {
      await importUserlistStart("");
    };
    initialLoading();
  }, []);

  const [fieldStatus, setFieldStatus] = useState(false);
  const [newUserInfo, setNewUserInfo] = useState({});

  const handleField = () => {
    if (!newUserInfo.length) {
      Object.assign(newUserInfo, userInfo);
    }
    setFieldStatus(!fieldStatus);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    changeUserinfoStart(newUserInfo, userList);
    setFieldStatus(!fieldStatus);
  };

  const handleUpdateUserInfo = (event) => {
    const { name, value, id } = event.target;

    if (id) {
      let newInterests = newUserInfo.interests;
      newInterests[id] = value;
      setNewUserInfo({ ...newUserInfo, [name]: newInterests });
      return;
    }
    setNewUserInfo({ ...newUserInfo, [name]: value });
  };

  if (!userList.length) {
    return <div>...loading...</div>;
  } else {
    const { userName, skills, interests } = userInfo;

            <ProfileTextContainer>
                <img src="#" alt="image"/>             
                <h1>{`Name: ${userName}`}</h1>
                <h3>{`Skills: ${skills}`}</h3>
                <h3>{`Interests: `}</h3>

                {interests.map((interest, i) =>
                    <li key={i}>{interest}</li>
                )}
            </ProfileTextContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
  userList: selectUserList(state),
  userInfo: selectUserlistById(ownProps.match.params.userId)(state)[0],
});

const mapDispatchToProps = (dispatch) => ({
  importUserlistStart: (searchTerm) => dispatch(importUserlistStart(searchTerm)),
  changeUserinfoStart: (userInfo, userList) => dispatch(changeUserinfoStart(userInfo, userList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
