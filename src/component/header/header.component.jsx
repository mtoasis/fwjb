import React from 'react'
import { OptionLink, OptionContainer, HeaderContainer, SearchBarContainer } from './header.styles'
import SearchBar from '../search-bar/search-bar.component'

const Header = () => {
    return (
        <HeaderContainer>
            <SearchBarContainer>
                <SearchBar />
            </SearchBarContainer>

            <OptionContainer>
                <OptionLink to='/'>
                    Main
                </OptionLink>

                <OptionLink to='/signin'>
                    SignIn
                </OptionLink>

                <OptionLink to='/user/1'>
                    Profile
                </OptionLink>

            </OptionContainer>

        </HeaderContainer>

    )
}

export default Header