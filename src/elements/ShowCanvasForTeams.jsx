import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import { ListGroup, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { BiWorld } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';
import { GiSittingDog, GiSoccerField } from 'react-icons/gi'
import { AiOutlineStar, AiOutlineCalendar } from 'react-icons/ai'
import { MdOutlinePermIdentity } from 'react-icons/md'
import { HiOutlineIdentification } from 'react-icons/hi'

const ShowCanvasForTeams = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const FancyLink = React.forwardRef(({ navigate, ...props }, ref) => {
        return (
            <Button ref={ref} {...props}><FaEdit title="Editar" /> {props.children}</Button>

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
                    <Offcanvas.Title variant="text-center"><HiOutlineIdentification />{' '}{props.nome}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroup.Item action variant='dark'><MdOutlinePermIdentity />{' '}{props.nome}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'>{props.corprim}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'>{props.corsec}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'><GiSittingDog />{' '}{props.mascote}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'><GiSoccerField />{' '}{props.estadio}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'><AiOutlineCalendar />{' '}{props.fundacao}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'><BiWorld />{' '}{props.cidade}{' '}{props.estado}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'><AiOutlineStar />{' '}{props.presidente}</ListGroup.Item>
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