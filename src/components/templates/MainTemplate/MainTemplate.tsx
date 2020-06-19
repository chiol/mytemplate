import React from 'react'
import { useLocalUpdateUserMutation } from 'generated/graphql';
import { Button } from 'antd';
import { Container, MainDiv, NameDiv,SideMenuDiv, TopMenuDiv } from './styles'
import routerType from 'types/routerType';
import { MyDiv } from 'components/atoms';
import { NavBar, SideMenu } from 'components/organisms';

interface IProps {
    children: any,
    routes: Array<routerType> | undefined;
}
function MainTemplate(props:IProps) {
    const { children, routes } = props
    // call logout mutation
    const [ Logout ] = useLocalUpdateUserMutation({
        variables: { isLoggedIn: false },
    });
    const onClick = () => Logout();
    return (
        <MyDiv name={"MainTemplate"}>

            <Container>
                <NameDiv>
                    <Button onClick={onClick}>logout</Button>
                </NameDiv>
                <TopMenuDiv>
                    <NavBar routes={routes}/>
                </TopMenuDiv>
                <SideMenuDiv>
                    <SideMenu router={routes}/>
                </SideMenuDiv>
                <MainDiv>
                    {children}
                </MainDiv>
            </Container>
        </MyDiv>
    )
}

export default MainTemplate
