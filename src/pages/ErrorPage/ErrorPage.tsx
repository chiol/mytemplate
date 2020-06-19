import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button } from 'antd'

interface IProps extends RouteComponentProps {
    type: 403 | 404 | 500 | "403" | "404" | "500";
}

function ErrorPage(props: IProps) {
    const { history } = props;
    
    const GoBack = () => {
        history.push("/");
    };

    return (
        <div>
            <Button type="primary" onClick={GoBack}>
                Back Home
            </Button>

        </div>
    )
}

export default ErrorPage
