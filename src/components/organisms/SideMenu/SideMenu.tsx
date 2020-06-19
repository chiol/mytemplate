import React from 'react'
import routerType from 'types/routerType'
import { useHistory, Link } from 'react-router-dom';
import { MyDiv } from 'components/atoms';

interface IProps {
    router: Array<routerType> | undefined
}
function SideMenu(props: IProps) {
    const { router } = props;
    const {location} = useHistory();
    
    return (
        <MyDiv name="SideMenu">

            <ul>
                {router?.map((item:routerType, i:number) => {
                    if (location.pathname.includes(item.path)) {
                        return item.subroutes?.map((subItem:routerType,j:number) => 
                        (<li key={i+j}><Link to={`${subItem.path}`}>{subItem.name}</Link></li>))
                    }
                })}
                {
                    // location.pathname.includes("/main/a") ? (
                    //     <>
                    //         <li> <Link to="/main/a/a">AA</Link></li>
                    //         <li> <Link to="/main/a/b">AB</Link></li>
                    //     </>
                    // ) : location.pathname.includes("/main/b") ? (
                    //     <> 
                    //         <li> <Link to="/main/b/a">BA</Link></li>
                    //         <li> <Link to="/main/b/b">BB</Link></li>
                    //     </>
                    // ) : (<> </>)
                    }
            </ul>
        </MyDiv>
    )
}

export default SideMenu
