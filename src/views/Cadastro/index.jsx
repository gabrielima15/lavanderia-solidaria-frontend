import { useState } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { UserRound, Phone, Mail, Info } from 'lucide-react';
import AuthIntro from '../../components/auth/AuthIntro';
import AuthCard from '../../components/auth/AuthCard';
import CampoComIcone from '../../components/common/CampoComIcone';
// import { cadastrarBeneficiario } from '../../services/beneficiarioService';

export default function Cadastro() {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '' });
  const [mensagem, setMensagem] = useState(null);

  function atualizarCampo({ target: { name, value } }) {
    setForm((atual) => ({ ...atual, [name]: value }));
    setMensagem(null);
  }

  async function cadastrar(event) {
    event.preventDefault();

    if (!form.nome.trim()) {
      setMensagem({ tipo: 'warning', texto: 'Informe o nome completo para continuar.' });
      return;
    }

    
    // try {
    //   await cadastrarBeneficiario(form);
    //   setMensagem({ tipo: 'success', texto: 'Cadastro realizado com sucesso!' });
    //   setForm({ nome: '', telefone: '', email: '' });
    // } catch (erro) {
    //   setMensagem({ tipo: 'danger', texto: erro.response?.data?.message ?? 'Não foi possível cadastrar.' });
    // }
    setMensagem({
      tipo: 'info',
      texto: `Cadastro preenchido para ${form.nome}. Ainda falta conectar ao servidor para salvar os dados.`,
    });
  }

  return (
    <Row className="align-items-center g-5 py-5">
      <Col lg={6}>
        <AuthIntro
          etiqueta="CADASTRO DE BENEFICIÁRIO"
          titulo={<>Vamos começar<br />com seus dados.</>}
          texto="Queremos organizar o atendimento e facilitar o acompanhamento das roupas recebidas pela Lavanderia Solidária."
          destaque="Um atendimento acolhedor começa com uma informação bem registrada."
        />
      </Col>

      <Col lg={6}>
        <AuthCard icone={UserRound} titulo="Seus dados" subtitulo="Preencha as informações abaixo.">
          <Form onSubmit={cadastrar}>
            <CampoComIcone
              id="nome"
              label="Nome completo"
              icone={UserRound}
              obrigatorio
              type="text"
              placeholder="Digite seu nome completo"
              value={form.nome}
              onChange={atualizarCampo}
              autoComplete="name"
              required
            />
            <CampoComIcone
              id="telefone"
              label="Telefone"
              icone={Phone}
              type="tel"
              placeholder="(00) 00000-0000"
              value={form.telefone}
              onChange={atualizarCampo}
              autoComplete="tel"
            />
            <CampoComIcone
              id="email"
              label="E-mail"
              icone={Mail}
              opcional
              type="email"
              placeholder="seuemail@exemplo.com"
              value={form.email}
              onChange={atualizarCampo}
              autoComplete="email"
            />

            <div className="auth-note mb-3">
              <Info size={17} className="flex-shrink-0" aria-hidden="true" />
              <p className="mb-0">
                Solicitamos apenas informações para organizar o atendimento. Seus dados devem ser
                protegidos e utilizados conforme as regras de privacidade.
              </p>
            </div>

            {mensagem && (
              <Alert variant={mensagem.tipo} role="status" className="d-flex align-items-center gap-2 small">
                <Info size={18} className="flex-shrink-0" aria-hidden="true" />
                <span>{mensagem.texto}</span>
              </Alert>
            )}

            <Button type="submit" variant="primary" className="w-100 py-2">
              Cadastrar beneficiário
            </Button>

            <p className="small text-body-secondary mt-3 mb-0">
              <span className="text-danger">*</span> Campo obrigatório
            </p>
          </Form>
        </AuthCard>
      </Col>
    </Row>
  );
}
