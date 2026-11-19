import { useState } from 'react';
import { Container, Row, Col, Card, Button, Toast, ToastContainer } from 'react-bootstrap';
import MachineIllustration from '../../components/ui/MachineIllustration';
import './Home.css';

const steps = [
  { number: '01', icon: '♙', title: 'Faça seu cadastro', text: 'Cadastre-se e garanta seu acesso a uma lavanderia para você e sua família.' },
  { number: '02', icon: '▦', title: 'Escolha dia e hora', text: 'Veja os horários livres e escolha o melhor para você.' },
  { number: '03', icon: '✦', title: 'Venha lavar', text: 'Chegue no horário. Nossa equipe estará pronta para ajudar.' },
];

const stats = [
  { valor: '486', rotulo: 'roupas lavadas' },
  { valor: '240', rotulo: 'pessoas atendidas' },
  { valor: '38', rotulo: 'voluntários ativos' },
  { valor: '4,9', rotulo: 'avaliação da comunidade' },
];

export default function Home() {
  const [notice, setNotice] = useState('');

  function handleSchedule(event) {
    event.preventDefault();
    setNotice('Em breve você poderá escolher um horário por aqui. Obrigado pelo interesse!');
  }

  return (
    <>
      <section className="hero">
        <Container>
          <Row className="align-items-center g-4 g-lg-5">
            <Col xs={12} sm={6} className="text-center text-sm-start">
              <p className="eyebrow"><span className="sparkle">✣</span> Um cuidado que transforma</p>
              <h1>
                Roupa limpa.<br />
                <span className="text-primary">Dignidade</span><br />
                <span className="text-primary">renovada.</span>
              </h1>
              <p className="hero-description mx-auto mx-sm-0">
                Lave suas roupas gratuitamente com o apoio de voluntários da sua comunidade.
                Simples, acolhedor e perto de você.
              </p>

              <div className="d-grid d-sm-flex align-items-sm-center gap-3" id="agendamento">
                <Button variant="primary" href="#contato" className="py-3 px-4">
                  Agendar meu horário <span className="arrow" aria-hidden="true">›</span>
                </Button>
                <a className="text-link mx-auto mx-sm-0" href="#como-funciona">Entenda como funciona</a>
              </div>

              <div className="community-proof d-flex align-items-center justify-content-center justify-content-sm-start gap-3 mt-4">
                <div className="avatar-stack" aria-hidden="true"><span>☺</span><span>♙</span><span>♡</span></div>
                <p><strong>Mais de 240 pessoas</strong><br />já foram beneficiadas</p>
              </div>
            </Col>

            <Col xs={12} sm={6}>
              <MachineIllustration />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="how" id="como-funciona">
        <Container>
          <header className="section-heading">
            <p className="eyebrow">Fácil e rápido</p>
            <h2>Seu horário em três passos</h2>
            <p>É mais simples do que parece. Você só precisa de seu nome e telefone.</p>
          </header>
          <Row xs={1} md={3} className="g-3">
            {steps.map((step) => (
              <Col key={step.number}>
                <Card as="article" className="step-card h-100">
                  <Card.Body className="d-flex flex-md-column gap-3 gap-md-4">
                    <span className={`step-icon step-icon--${step.number}`} aria-hidden="true">{step.icon}</span>
                    <div>
                      <Card.Title as="h3">{step.title}</Card.Title>
                      <Card.Text>{step.text}</Card.Text>
                    </div>
                    <span className="step-number">{step.number}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="impact" id="impacto">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6}>
              <p className="eyebrow eyebrow--light">Nossa transparência</p>
              <h2>Cada lavagem conta uma história de cuidado.</h2>
              <p className="impact-text">
                Resultados construídos com a força de voluntários, doadores e toda a comunidade.
              </p>
              <a className="impact-link" href="#ajudar">
                Conheça nosso impacto <span className="arrow" aria-hidden="true">›</span>
              </a>
            </Col>
            <Col md={6}>
              <Row xs={2} className="g-4">
                {stats.map((item) => (
                  <Col key={item.rotulo} className="stat">
                    <strong>{item.valor}</strong>
                    <span>{item.rotulo}</span>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="help" id="ajudar">
        <Container>
          <header className="section-heading">
            <p className="eyebrow">Faça parte</p>
            <h2>Tem outras formas de ajudar</h2>
          </header>
          <Row xs={1} md={2} className="g-3">
            <Col>
              <Card as="a" href="#contato" className="help-card help-card--donate h-100 text-decoration-none">
                <Card.Body className="p-4">
                  <span className="help-icon">♡</span>
                  <span className="round-arrow">›</span>
                  <Card.Title as="h3">Quero doar</Card.Title>
                  <Card.Text>Sua contribuição transforma cuidado em dignidade.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card as="a" href="#contato" className="help-card help-card--volunteer h-100 text-decoration-none">
                <Card.Body className="p-4">
                  <span className="help-icon">♧</span>
                  <span className="round-arrow">›</span>
                  <Card.Title as="h3">Quero ser voluntário</Card.Title>
                  <Card.Text>Doe um pouco do seu tempo e faça a diferença na vida de alguém.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <ToastContainer position="bottom-end" className="p-3 position-fixed">
        <Toast show={Boolean(notice)} onClose={() => setNotice('')} delay={6000} autohide>
          <Toast.Header>
            <strong className="me-auto">Lavanderia Solidária</strong>
          </Toast.Header>
          <Toast.Body>{notice}</Toast.Body>
        </Toast>
      </ToastContainer>

      <Button
        variant="primary"
        href="#agendamento"
        onClick={handleSchedule}
        className="floating-schedule rounded-pill d-sm-none"
      >
        Agendar horário <span className="arrow" aria-hidden="true">›</span>
      </Button>
    </>
  );
}
