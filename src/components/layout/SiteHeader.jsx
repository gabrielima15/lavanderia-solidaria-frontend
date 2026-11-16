import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Brand from '../common/Brand';

export default function SiteHeader() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="md"
      sticky="top"
      collapseOnSelect
      expanded={expanded}
      onToggle={setExpanded}
      className="site-header"
    >
      <Container>
        <Brand />
        <Navbar.Toggle aria-controls="menu-principal" aria-label="Abrir menu" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto align-items-md-center gap-md-3">
            <Nav.Link href="#como-funciona">Como funciona</Nav.Link>
            <Nav.Link href="#impacto">Nosso impacto</Nav.Link>
            <Nav.Link href="#ajudar">Faça parte</Nav.Link>
            <Nav.Link as={Link} to="/login" eventKey="login">Entrar</Nav.Link>
            <Button
              variant="primary"
              href="#agendamento"
              className="mt-2 mt-md-0"
              onClick={() => setExpanded(false)}
            >
              Agendar horário <span className="arrow" aria-hidden="true">›</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
