import styled, {css} from 'styled-components'

const subColor = 'grey';
const mainColor= 'black';

const shrinkLabel = css`
    top: -14px;
    font-size: 10px;
    color: ${mainColor};
`
export const GroupContainer = styled.div`
    position: relative;

    input[type='password'] {
        letter-spacing: 0.3em;
      }
`

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 15px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};

    &:focus {
      outline: none;
    }
    
    &:focus ~ label {
        ${shrinkLabel}};
      }
`

export const FormInputLabelContainer = styled.label`
    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${otherProps => otherProps.value.length? shrinkLabel:null}   
    
`



