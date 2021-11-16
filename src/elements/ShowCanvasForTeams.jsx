import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import { ListGroup, Offcanvas } from "react-bootstrap";
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShowCanvasForTeams = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const FancyLink = React.forwardRef(({ navigate, ...props }, ref) => {
        return (
            <Button ref={ref} {...props}><FaEdit title="Editar"/> {props.children}</Button>

        )
      })

    return (
        <>
            <div className="d-grid gap-2">
                <Button variant="outline-info" onClick={handleShow}>
                    Informações
                </Button>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title variant="text-center">{props.nome}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroup.Item>{props.nome}</ListGroup.Item>
                        <ListGroup.Item>{props.corprim}</ListGroup.Item>
                        <ListGroup.Item>{props.corsec}</ListGroup.Item>
                        <ListGroup.Item>{props.mascote}</ListGroup.Item>
                        <ListGroup.Item>{props.estadio}</ListGroup.Item>
                        <ListGroup.Item>{props.fundacao}</ListGroup.Item>
                        <ListGroup horizontal>
                        <ListGroup.Item>{props.cidade}</ListGroup.Item>
                        <ListGroup.Item>{props.estado}</ListGroup.Item>
                        </ListGroup>
                        <ListGroup.Item>{props.presidente}</ListGroup.Item>
                    </ListGroup>

                    <div className="d-grid gap-2">
                        <Link variant="outline-primary" to={'/teams/' + props.idx} component={FancyLink} />                        
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default ShowCanvasForTeams;