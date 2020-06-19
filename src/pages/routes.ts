import APage, { ABPage, AAPage } from "./MainPage/APage";
import BPage, { BAPage, BBPage } from "./MainPage/BPage";
import routerType from "types/routerType";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";

export const routes: Array<routerType> = [
    {
        path: "/main",
        name: "Main",
        component: MainPage,
        subroutes: [
            {
                path: "/main/a",
                name: "A",
                component: APage,
                subroutes: [
                    {
                        path: "/main/a/a",
                        name: "AA",
                        component: AAPage
                    }, {
                        path: "/main/a/b",
                        name: "AB",
                        component: ABPage
        
                    },
                ]
            },
            {
                path: "/main/b",
                name: "B",
                component: BPage,
                subroutes: [
                    {
                        path: "/main/b/a",
                        name: "BA",
                        component: BAPage
        
                    }, {
                        path: "/main/b/b",
                        name: "BB",
                        component: BBPage
                    },
                ]
            }
        ]
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage
    }
    
]