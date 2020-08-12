import React, { useEffect } from 'react'
import ResultItem from '../result-item/result-item.component'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectUserList } from '../../redux/user/user.selectors'
import { importUserlistStart } from '../../redux/user/user.action'


const ShowResult = ({ userList, importUserlistStart }) => {

    useEffect(() =>
        initialLoading(), []
    )

    const initialLoading = () => {
        importUserlistStart("")
    }

    return (
        <div>
            {
                userList.map((element) => {
                    return (
                        <ResultItem
                            key={element.id}
                            info={element}
                        />
                    )
                })
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    userList: selectUserList
});


const mapDispatchToProps = dispatch => ({
    importUserlistStart: (searchTerm) => dispatch(importUserlistStart(searchTerm))
});


export default connect(mapStateToProps, mapDispatchToProps)(ShowResult);