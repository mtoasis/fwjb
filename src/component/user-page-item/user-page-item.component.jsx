import React, { Fragment } from 'react'
import { UserPageItemContainer } from './user-page-item.styles'

const UserPageItem = ({ name, label, initialValue, updatedValue, onChange, handleField, fieldStatus, id }) => {

    return (
        <UserPageItemContainer>
            {fieldStatus ?
                <Fragment>
                    <span>{`${label}: `}</span>
                    <input
                        placeholder={updatedValue}
                        value={updatedValue ? updatedValue : initialValue}
                        name={name}
                        id={id}
                        onChange={(event) => onChange(event)}
                    />
                </Fragment>
                :
                <span onDoubleClick={() => handleField()}>
                    {`${label}: ${updatedValue ? updatedValue : initialValue}`}
                </span>
            }
        </UserPageItemContainer>
    )

}

export default UserPageItem