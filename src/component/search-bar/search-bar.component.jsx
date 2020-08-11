import React from 'react'
import FormInput from '../form-input/form-input.component'
import { SearchBarContainer } from './search-bar.styles'

const SearchBar = ({handleChange, handleSubmit, searchTerm}) => {

    return (
        <SearchBarContainer>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    label="Search skills"
                    required
                />
            </form>
        </SearchBarContainer>
    )
}

export default SearchBar