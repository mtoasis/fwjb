import React from 'react'
import ResultItem from '../result-item/result-item.component'

const ShowResult = ({ result }) => {

    return (
        <div>
            {
                result.map((element) => {
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
}

export default ShowResult