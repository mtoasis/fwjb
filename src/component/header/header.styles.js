import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
    width:100%;
    height:50px;
    display: flex;
    margin-bottom:25px;
    justify-content:space-between;
`

export const OptionLink = styled(Link)`
    font-weight:bold;
    padding: 10px 15px;
    cursor:pointer;
`

export const OptionContainer = styled.div`
    width:30%;
    height:100%;
    display:flex;
    justify-content:flex-end;
`

export const SearchBarContainer = styled.div`
    width:60%;
    height:100%;
`