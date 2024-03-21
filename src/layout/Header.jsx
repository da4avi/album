import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg" style={{ margin: '10px'}}>
      <Container>
        <Navbar.Brand as={Link} to="/">Juarema App</Navbar.Brand>
        <Navbar.Toggle aria-controls="minhanav" />
        <Navbar.Collapse id="minhanav" style={{ justifyContent: "space-between", width: "100%", alignSelf: "stretch" }}>
          <Navbar.Text as={Link} to="/">Inicial</Navbar.Text>
          <Navbar.Text as={Link} to="/sobre">Sobre</Navbar.Text>
          <Navbar.Text as={Link} to="/contato">Contato</Navbar.Text>
          <Navbar.Text as={Link} to="/album">Album</Navbar.Text> {/* Verifique se o 'to' está definido como '/album' */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
