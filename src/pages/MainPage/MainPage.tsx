import React from 'react'
import { Redirect, Switch, Route, useRouteMatch } from 'react-router-dom'
import { MainTemplate } from 'components/templates';
import { useLocalUserQuery } from 'generated/graphql';
import { routes } from '../routes';
import routerType from 'types/routerType';
import { MyDiv } from 'components/atoms';

function MainPage() {
    const { path } = useRouteMatch()
    const subRoutes = routes.map((item) => (path === item.path) ? item.subroutes : undefined)[0]
    const redircetRoutes = subRoutes?.[0];

    const { loading, data } = useLocalUserQuery();

    if (loading) {return (<> loading </>)}
    if (!data?.localUser.isLoggedIn) {
        return (<Redirect to="/login"/>)
    }
    else {
        return (
            <MyDiv name="MainPage">
                <MainTemplate routes={subRoutes}>
                    <Switch>
                        {
                            subRoutes?.map((item:routerType, i:number) => (
                                <Route 
                                    key={i}
                                    path={`${item.path}`} 
                                    render={() => <item.component routes={subRoutes} />}/>
                            ))
                        }
                        <Redirect to={`${redircetRoutes?.path}`} />
                        {
                            // <Route
                            //     path="/main/a"
                            //     component={APage} />
                            // <Route
                            //     path="/main/b"
                            //     component={BPage} />
                            // <Redirect to="/main/a"/>
                        }
                    </Switch>
                </MainTemplate>
            </MyDiv>
        )
    }
    
}

export default MainPage
