import React from 'react'
import { useLocalUpdateUserMutation } from 'generated/graphql';
import { Button } from 'antd';
import { MyDiv } from 'components/atoms';
import { Container } from './styles';

function LoginTemplate(props: any) {
    // call logout mutation
    const [ LogIn ] = useLocalUpdateUserMutation({
        variables: { isLoggedIn: true },
    });
    const click = () => LogIn();
    return (
        <MyDiv name="LoginTemplate">
            <Container>
                
                <Button onClick={click} >login</Button>
            </Container>
        </MyDiv>
    )
}

export default LoginTemplate
