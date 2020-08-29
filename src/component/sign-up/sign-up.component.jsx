import React, { Fragment, useState } from 'react'

import FormInput from '../form-input/form-input.component'

const SignUp = () => {

    const [userCredentials, setCrendentials] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { email, password, userName, confirmPassword } = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
        setCrendentials({ ...userCredentials, [name]: value });
    }

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("password don't match")
            return;
        }
        console.log(userCredentials)
    }

    return (
        <Fragment>
            <FormInput
                name='userName'
                type='text'
                value={userName}
                handleChange={handleChange}
                label='userName'
                required
            />

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

            <FormInput
                name='confirmPassword'
                type='password'
                value={confirmPassword}
                handleChange={handleChange}
                label='confirmPassword'
                required
            />

            <button onClick={handleSubmit}>Sign Up</button>

        </Fragment>

    )
}

export default SignUp