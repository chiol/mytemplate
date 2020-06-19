import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import routerType from 'types/routerType'
import { MyDiv } from 'components/atoms'

interface IProps {
    routes: Array<routerType> | undefined
}

function NavBar(props: IProps) {
    const { routes } = props
    
    return (
        <MyDiv name="NavBar">
            <Container>
                {routes?.map(({name,path} : routerType, i: number) => 
                    (<Link key={i} style={{width:"100px",height:"100%"}} to={`${path}`}>{name}</Link>)
                    )}
                {
                    // <Link to="/main/a">a</Link>
                    // <Link to="/main/b">b</Link>
                }
            </Container>
        </MyDiv>
    )
}

export default NavBar
