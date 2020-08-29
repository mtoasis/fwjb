import React, {Fragment, useState} from 'react'

import FormInput from '../form-input/form-input.component'

const SignIn = () =>{

    const [userCredentials, setCrendentials] = useState({email:'', password:''});

    const {email, password} = userCredentials;

    const handleChange = event =>{
        const {value, name} = event.target;
        setCrendentials({...userCredentials, [name]:value});
    }

    const handleSubmit = async event =>{
        event.preventDefault();
        console.log(userCredentials)
    }

    return(
        <Fragment>
            <FormInput 
                name='email'
                type='email'
                value={email}
                handleChange={handleChange}
                label='email'
                required
            />

            <FormInput 
                name='password'
                type='password'
                value={password}
                handleChange={handleChange}
                label='password'
                required
            />

            <button onClick={handleSubmit}>Sign In</button>

        </Fragment>

    )
}

export default SignIn