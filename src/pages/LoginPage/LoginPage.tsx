import React from 'react'
import { Redirect } from 'react-router-dom'
import MyDiv from 'components/atoms/MyDiv';
import { LoginTemplate } from 'components/templates';
import { useLocalUserQuery } from 'generated/graphql';

function LoginPage() {
    const { loading, data } = useLocalUserQuery();
    if (loading) {return (<> loading... </>)}
    if ( data?.localUser.isLoggedIn ) {
        return (<Redirect to="/main" /> )
    }
    else {
        return (
            <MyDiv name="LoginPage">
                <LoginTemplate/>
            </MyDiv>
        )
    }
}

export default LoginPage
