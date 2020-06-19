import React from 'react'
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom'
import routerType from 'types/routerType';
import { MyDiv } from 'components/atoms';

interface IProps {
    routes: Array<routerType>;
}
function BPage(props:IProps) {
    const { routes } = props;
    const { path } = useRouteMatch()
    const subRoutes = routes.map((item) => (path === item.path) ? item.subroutes : undefined)
                            .filter((e) => e !== undefined)[0]
    const redircetRoutes = subRoutes?.[0];
    
    return (
        <MyDiv name="BPage">

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
                //     path="/main/b/a"
                //     component={BAPage} />
                // <Route
                //     path="/main/b/b"
                //     component={BBPage} />
                // <Redirect to ="/main/b/a" />

            }
        </Switch>
        </MyDiv>

    )
}

export default BPage
