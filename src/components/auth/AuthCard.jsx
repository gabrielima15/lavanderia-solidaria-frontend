import { Card } from 'react-bootstrap';

export default function AuthCard({ icone: Icone, titulo, subtitulo, children }) {
  return (
    <Card className="auth-card">
      <Card.Body className="p-4 p-md-5">
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="auth-card__icon">
            <Icone size={22} aria-hidden="true" />
          </span>
          <div>
            <Card.Title as="h2" className="h5 mb-0">{titulo}</Card.Title>
            <Card.Text className="small text-body-secondary">{subtitulo}</Card.Text>
          </div>
        </div>
        {children}
      </Card.Body>
    </Card>
  );
}
