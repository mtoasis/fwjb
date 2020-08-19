import React from 'react'
import { ResultItemContainer, ResultItemText } from './result-item.styles'
import { withRouter } from 'react-router-dom'


const ResultItem = ({ info: { id, userName, skills, interests }, history, match }) => {

    return (
        <ResultItemContainer
            onClick={() => history.push(`/user/${id}`)}
        >
            <ResultItemText>Name: {userName}</ResultItemText>

            <ResultItemText>Skills: {skills}</ResultItemText>

            <ResultItemText>Interests:
                {

                    interests.map((element, i) => i === interests.length - 1 ?
                        <span key={i}>{element}</span> :
                        <span key={i}> {element}, </span>
                    )

                }
            </ResultItemText>


        </ResultItemContainer>
    )

}

export default withRouter(ResultItem) 