import React from 'react'
import SignIn from '../../component/sign-in/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component'
import { PageContainer, InnerContainer } from './sign-in-sign-up-page.styles'

const SignInAndSignUpPage = () => {

    return (
        <PageContainer>
            <InnerContainer>
                <h3>Sign in</h3>
                <SignIn />
            </InnerContainer>

            <InnerContainer>
                <h3>Sign up</h3>
                <SignUp />
            </InnerContainer>

        </PageContainer>
    )
}

export default SignInAndSignUpPage