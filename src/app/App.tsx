/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import { MainPage, ErrorPage, LoginPage } from "pages";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import MyDiv from "components/atoms/MyDiv";

const App = () => {    
    return (
        <MyDiv name="App component">
            
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/main" component={ MainPage }/>
                    <Route
                        exact
                        path="/NotFound"
                        render={(props: RouteComponentProps<any>) => (
                            <ErrorPage type="404" {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/Unauthorized"
                        render={(props: RouteComponentProps<any>) => (
                            <ErrorPage type="403" {...props} />
                        )}
                    />
                    <Route
                        exact
                        path="/Error"
                        render={(props: RouteComponentProps<any>) => (
                            <ErrorPage type="500" {...props} />
                        )}
                    />

                </Switch>
            </ThemeProvider>
        </MyDiv>

    );
};

export default App;
