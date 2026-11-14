import { Link, Outlet, useLocation } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';
import { ArrowLeft } from 'lucide-react';
import Brand from '../common/Brand';
import './Layout.css';

export default function AuthLayout() {
  const naTelaDeLogin = useLocation().pathname === '/login';

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar className="site-header">
        <Container>
          <Brand tagline="Cuidado que transforma" />
          {naTelaDeLogin ? (
            <Button as={Link} to="/cadastro" variant="outline-primary" size="sm">
              Criar cadastro
            </Button>
          ) : (
            <Button
              as={Link}
              to="/login"
              variant="outline-primary"
              size="sm"
              className="d-inline-flex align-items-center gap-1"
            >
              <ArrowLeft size={16} aria-hidden="true" /> Voltar para login
            </Button>
          )}
        </Container>
      </Navbar>

      <main className="auth-page">
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className="auth-footer">
        Lavanderia Solidária · Cuidado, respeito e comunidade.
      </footer>
    </div>
  );
}
