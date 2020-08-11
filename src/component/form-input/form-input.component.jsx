import React from 'react'
import {GroupContainer, FormInputContainer, FormInputLabelContainer} from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {
            label ?
                (
                <FormInputLabelContainer {...otherProps}>
                    {label}
                </FormInputLabelContainer>)
                : null
        }
    </GroupContainer>
)

export default FormInput