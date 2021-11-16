import React, { useState, useEffect } from "react";
import { Accordion, Card, Col, ListGroup, Row } from "react-bootstrap";
import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Box from "../../elements/Box";
import Button from "react-bootstrap/Button";
import image from "../../img/conjunto-de-icones-de-colecao-de-gesto-de-arbitro-de-futebol-em-ilustracao-plana-dos-desenhos-animados_201904-144.jpg";
import RefereesService from "../../services/RefereesService";

const Referees = () => {
  const [referees, setReferees] = useState([]);

  const FancyLink = React.forwardRef(({ navigate, ...props }, ref) => {
    return (
      <Button ref={ref} {...props}>
        <FaEdit title="Editar" /> {props.children}
      </Button>
    );
  });

  useEffect(() => {
    const referees = RefereesService.getAll();
    setReferees(referees);
  }, []);

  function trash(idx) {
    if (window.confirm("Deseja realmente excluir o registro?")) {
      RefereesService.delete(idx);
      setReferees(RefereesService.getAll());
    }
  }

  return (
    <>
      <Box title="Equipes de Arbitragem">
        <Row xs={1} md={4} className="g-4">
          {referees.map((referee, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" height={200} src={image} />
                <Card.Body>
                  <Card.Title className="text-center">
                    {`Equipe de Arbitragem ` + (idx + 1)}
                  </Card.Title>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Informações</Accordion.Header>
                      <Accordion.Body>
                        <ListGroup as="ol">
                          <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start text-center"
                          >
                            <div className="ms-auto me-auto">
                              <div className="fw-bold">{referee.arbitro}</div>
                              Árbritro Principal
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start text-center"
                          >
                            <div className="ms-auto me-auto">
                              <div className="fw-bold ">
                                {referee.bandeira01}
                              </div>
                              Bandeirinha 01
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start text-center"
                          >
                            <div className="ms-auto me-auto">
                              <div className="fw-bold">
                                {referee.bandeira02}
                              </div>
                              Bandeirinha 02
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start text-center"
                          >
                            <div className="ms-auto me-auto">
                              <div className="fw-bold">
                                {referee.auxarbitro01}
                              </div>
                              4° Árbitro
                            </div>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start text-center"
                          >
                            <div className="ms-auto me-auto">
                              <div className="fw-bold">
                                {referee.auxarbitro02}
                              </div>
                              5° Árbitro
                            </div>
                          </ListGroup.Item>
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <div className="d-grid gap-2">
                    <Link
                      variant="outline-primary"
                      to={"/referees/" + idx}
                      component={FancyLink}
                    />
                    <Button
                      variant="outline-danger"
                      key={idx}
                      onClick={() => trash(idx)}
                    >
                      <FaRegTrashAlt title="Excluir" />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center" position="relative">
          <Link to="/referees/create" className=" btn btn-secondary mb-4 ">
            <FaPlus /> Adicionar equipe de arbitragem
          </Link>
        </div>
      </Box>
    </>
  );
};

export default Referees;
