import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import { ListGroup, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaEdit, FaTicketAlt } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { GiStarFlag } from 'react-icons/gi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { MdOutlinePermIdentity } from 'react-icons/md'
import { HiOutlineIdentification } from 'react-icons/hi'
import { BsGenderFemale, BsGenderMale, BsPinFill } from 'react-icons/bs'

const ShowCanvasForPlayers = (props) => {
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
                    <Offcanvas.Title variant="text-center"><HiOutlineIdentification /> {' '}{props.alcunha}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroup.Item action variant="dark"><MdOutlinePermIdentity />{' '}{props.nome}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'><BsGenderFemale />{' '}<BsGenderMale />{' '}{props.gender}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'><BiWorld />{' '}{props.naturalidade}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'><AiOutlineCalendar />{' '}{props.data_nasc}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'><FaTicketAlt />{' '}{props.matricula}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'><BsPinFill />{' '}{props.posicao}</ListGroup.Item>
                        <ListGroup.Item action variant='dark'><GiStarFlag />{' '}{props.clube}</ListGroup.Item>
                    </ListGroup>

                    <div className="d-grid gap-2">
                        <Link variant="outline-primary" to={'/players/' + props.idx} component={FancyLink} />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default ShowCanvasForPlayers;