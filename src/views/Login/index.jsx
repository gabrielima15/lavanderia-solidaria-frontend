import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Mail, LockKeyhole, LogIn, Info } from 'lucide-react';
import AuthIntro from '../../components/auth/AuthIntro';
import AuthCard from '../../components/auth/AuthCard';
import CampoComIcone from '../../components/common/CampoComIcone';
// import { login } from '../../services/authService';

export default function Login() {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [mensagem, setMensagem] = useState(null);

  function atualizarCampo({ target: { name, value } }) {
    setForm((atual) => ({ ...atual, [name]: value }));
    setMensagem(null);
  }

  async function entrar(event) {
    event.preventDefault();

    if (!form.email.trim() || !form.senha.trim()) {
      setMensagem({ tipo: 'warning', texto: 'Preencha o e-mail e a senha para continuar.' });
      return;
    }

    // TODO(backend): trocar o aviso abaixo pela chamada real.
    // try {
    //   const { data } = await login(form);
    //   localStorage.setItem('token', data.token);
    //   navigate('/');   // usar useNavigate() de react-router-dom
    // } catch (erro) {
    //   setMensagem({ tipo: 'danger', texto: erro.response?.data?.message ?? 'Não foi possível entrar.' });
    // }
    setMensagem({
      tipo: 'info',
      texto: 'Dados preenchidos! Ainda falta conectar a autenticação ao servidor.',
    });
  }

  return (
    <Row className="align-items-center g-5 py-5">
      <Col lg={6}>
        <AuthIntro
          etiqueta="ACESSO À PLATAFORMA"
          titulo={<>Bem-vindo(a)<br />de volta.</>}
          texto="Acesse sua conta para acompanhar os atendimentos e fazer parte da nossa rede de cuidado e solidariedade."
          destaque="Cuidar das pessoas também é facilitar o acesso a um atendimento digno."
        />
      </Col>

      <Col lg={6}>
        <AuthCard icone={LogIn} titulo="Entre na sua conta" subtitulo="Informe seus dados de acesso.">
          <Form onSubmit={entrar}>
            <CampoComIcone
              id="email"
              label="E-mail"
              icone={Mail}
              type="email"
              placeholder="seuemail@exemplo.com"
              value={form.email}
              onChange={atualizarCampo}
              autoComplete="username"
              required
            />
            <CampoComIcone
              id="senha"
              label="Senha"
              icone={LockKeyhole}
              type="password"
              placeholder="Digite sua senha"
              value={form.senha}
              onChange={atualizarCampo}
              autoComplete="current-password"
              required
            />

            <div className="auth-note mb-3">
              <Info size={17} className="flex-shrink-0" aria-hidden="true" />
              <p className="mb-0">Seus dados de acesso devem ser mantidos em segurança.</p>
            </div>

            {mensagem && (
              <Alert variant={mensagem.tipo} role="status" className="d-flex align-items-center gap-2 small">
                <Info size={18} className="flex-shrink-0" aria-hidden="true" />
                <span>{mensagem.texto}</span>
              </Alert>
            )}

            <Button type="submit" variant="primary" className="w-100 py-2">Entrar</Button>

            <p className="small text-body-secondary text-center mt-4 mb-2">Ainda não possui cadastro?</p>
            <Button as={Link} to="/cadastro" variant="outline-primary" className="w-100">
              Cadastrar beneficiário
            </Button>
          </Form>
        </AuthCard>
      </Col>
    </Row>
  );
}
