import React from 'react'
import { Card } from 'react-bootstrap'

const Box = (props) => {
    return (
        <>
            <Card border='success' >
                <Card.Header className="bg-success text-white text-center" >{props.title}</Card.Header>
                <Card.Body >
                    {props.children}
                </Card.Body>
            </Card>
        </>
    )
}

export default Box
