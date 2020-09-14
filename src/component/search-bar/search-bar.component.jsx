import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import { SearchBarContainer } from './search-bar.styles'
import { importUserlistStart } from '../../redux/user/user.action'
import { connect } from 'react-redux'

const SearchBar = ({ importUserlistStart }) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = event => {
        const { value } = event.target;
        setSearchTerm(value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        importUserlistStart(searchTerm);
    }

    return (
        <SearchBarContainer>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    label="Search skills"                    
                />
            </form>
        </SearchBarContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    importUserlistStart: (searchTerm) => dispatch(importUserlistStart(searchTerm))
});

export default connect(null, mapDispatchToProps)(SearchBar);