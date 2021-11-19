import React, { useState } from "react";
import { ListGroup, Modal } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiTime, BiFootball } from 'react-icons/bi'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { GiSoccerField, GiWhistle } from 'react-icons/gi'

const ShowInfoForGames = (props) => {
  const [show, setShow] = useState(false);

  return (

    <>
      <AiOutlineInfoCircle className="text-success" onClick={() => setShow(true)} title="Informações" />

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Informações da partida
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item action variant='dark'><BiFootball /> {' '}{props.timecasa}</ListGroup.Item>
            <ListGroup.Item action variant='dark'><BiFootball /> {' '}{props.timevisitante}</ListGroup.Item>
            <ListGroup.Item action variant='dark'><BiTime /> {' '}{props.horario}h</ListGroup.Item>
            <ListGroup.Item action variant='dark'><BsFillCalendarDateFill />{' '}{props.date}</ListGroup.Item>
            <ListGroup.Item action variant='dark'><GiSoccerField />{' '}{props.estadio}</ListGroup.Item>
            <ListGroup.Item action variant='dark'><GiWhistle />{' '}{props.arbitragem}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShowInfoForGames;