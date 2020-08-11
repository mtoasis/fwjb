import React from 'react'
import { ResultItemContainer, ResultItemText } from './result-item.styles'

const ResultItem = ({ info: { userName, skills, interests} }) => {

    return (
        <ResultItemContainer>
            <ResultItemText>Name: {userName}</ResultItemText>

            <ResultItemText>Skills: {skills}</ResultItemText>

            <ResultItemText>Interests:  
                {
            
            interests.map((element,i) => i === interests.length-1? 
            <span key={i}>{element}</span> :
            <span key={i}> {element}, </span> 
            )
            
            }
            </ResultItemText>


        </ResultItemContainer>
    )

}

export default ResultItem