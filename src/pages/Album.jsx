import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ContainerExample() {
  return (
    <Container className="mx-auto" style={{ margin: '10px'}}>
      <Row className="mx-auto" style={{ marginBottom: '30px' }}>
        <Col>
          {/* -------------------- */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="albumimg/casteluo.jpg" />
            <Card.Body>
              <Card.Title>Shaarksz - Casteluo</Card.Title>
              <Card.Text>São lados opostos, Shakti e Shiva</Card.Text>
              <Button variant="primary">Ouvir</Button>
            </Card.Body>
          </Card>
          {/* -------------------- */}
        </Col>
        <Col>
          {/* -------------------- */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="albumimg/twikipedia.jpg" />
            <Card.Body>
              <Card.Title>Twikipedia - Still-life</Card.Title>
              <Card.Text>I wanna be your favorite boy</Card.Text>
              <Button variant="primary">Ouvir</Button>
            </Card.Body>
          </Card>
          {/* -------------------- */}
        </Col>
        <Col>
          {/* -------------------- */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="albumimg/fmcinco.jpg" />
            <Card.Body>
              <Card.Title>FM 5 - Mãos, cordas e luz</Card.Title>
              <Card.Text>Cheguei irreconhecível</Card.Text>
              <Button variant="primary">Ouvir</Button>
            </Card.Body>
          </Card>
          {/* -------------------- */}
        </Col>
      </Row>
      <Row className="mx-auto" style={{ marginBottom: '30px' }}>
        <Col>
          {/* -------------------- */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="albumimg/hxd.jpg" />
            <Card.Body>
              <Card.Title>Raken - HxD!+</Card.Title>
              <Card.Text>Qual é o meu super-poder?</Card.Text>
              <Button variant="primary">Ouvir</Button>
            </Card.Body>
          </Card>
          {/* -------------------- */}
        </Col>
        <Col>
          {/* -------------------- */}
          <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src="albumimg/elkay.jpg" />
            <Card.Body>
              <Card.Title>Elkay - Scary Machine</Card.Title>
              <Card.Text>Eu levo a vida como Szczęsnyi</Card.Text>
              <Button variant="primary">Ouvir</Button>
            </Card.Body>
          </Card>
          {/* -------------------- */}
        </Col>
        <Col>
          {/* -------------------- */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="albumimg/flameboi.jpg" />
            <Card.Body>
              <Card.Title>Flameboi Matt - VPM</Card.Title>
              <Card.Text>Keyblade, feita de holograma</Card.Text>
              <Button variant="primary">Ouvir</Button>
            </Card.Body>
          </Card>
          {/* -------------------- */}
        </Col>
      </Row>
    </Container>
  );
}
