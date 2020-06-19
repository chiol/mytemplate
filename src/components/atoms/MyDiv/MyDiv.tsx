import React from 'react'
import { Div } from './styles'

interface IProps {
    name: string,
    children: any
}
function MyDiv(props: IProps) {
    const { name, children } = props;
    return (
        <Div>
            {name}
            {children}
        </Div>
    )
}

export default MyDiv
