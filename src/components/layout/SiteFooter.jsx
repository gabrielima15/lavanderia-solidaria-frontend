import { Container, Row, Col } from 'react-bootstrap';
import Brand from '../common/Brand';

function FooterItem({ simbolo, titulo, children }) {
  return (
    <div className="footer-item">
      <span className="footer-symbol" aria-hidden="true">{simbolo}</span>
      <div>
        <h3>{titulo}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contato">
      <Container>
        <Row className="g-4">
          <Col xs={12} lg={3}>
            <Brand footer />
            <p className="footer-about">O cuidado acolhe e a dignidade passa por todos.</p>
          </Col>
          <Col xs={6} lg={3}>
            <FooterItem simbolo="⌖" titulo="Onde estamos">
              Rua da Esperança, 110<br />Centro • Guarabira - PB
            </FooterItem>
          </Col>
          <Col xs={6} lg={3}>
            <FooterItem simbolo="◷" titulo="Quando abrimos">
              Segunda a sábado<br />Das 8h às 17h
            </FooterItem>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <FooterItem simbolo="♧" titulo="Fale com a gente">
              (83) 4002-8922<br />contato@lavanderiasolidaria.org
            </FooterItem>
          </Col>
        </Row>
        <div className="footer-bottom">
          Feito com carinho pela comunidade <span>♡</span>
        </div>
      </Container>
    </footer>
  );
}
