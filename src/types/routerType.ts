/*
    subroutes의 depth는 2단계까지만 허용한다.
*/

type routerType = {
    path: string;
    name: string;
    component: any;
    subroutes?: Array<routerType>;
}

export default routerType;