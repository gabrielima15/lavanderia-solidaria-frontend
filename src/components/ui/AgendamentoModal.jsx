import { useState } from "react";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import "./AgendamentoModal.css";

const CAPACIDADE_POR_HORARIO = 2;
const HORARIOS = ["08:00", "09:30", "11:00", "14:00", "15:30", "17:00"];

const capitalizarPalavras = (texto) => {
  return texto
    .replace(/\./g, "")
    .replace(/(^|\s|-)\S/g, (letra) => letra.toUpperCase());
};

const gerarProximosDias = () => {
  const hoje = new Date();
  return Array.from({ length: 6 }).map((_, index) => {
    const data = addDays(hoje, index);
    return {
      dataOriginal: data,
      diaSemana: capitalizarPalavras(format(data, "EEE", { locale: ptBR })),
      diaNumero: format(data, "dd"),
      mes: capitalizarPalavras(format(data, "MMM", { locale: ptBR })),
      completo: capitalizarPalavras(format(data, "EEEE, dd 'de' MMMM", { locale: ptBR })),
    };
  });
};

export function AgendamentoModal({ isOpen, onClose }) {
  const proximosDias = gerarProximosDias();

  const [passo, setPasso] = useState(1);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [diaSelecionado, setDiaSelecionado] = useState(proximosDias[0]);
  const [horarioSelecionado, setHorarioSelecionado] = useState("15:30");

  const [agendamentos, setAgendamentos] = useState([
    { data: proximosDias[0].diaNumero, hora: "15:30" },
  ]);

  if (!isOpen) return null;

  const calcularVagasRestantes = (hora) => {
    const ocupadas = agendamentos.filter(
      (ag) => ag.data === diaSelecionado.diaNumero && ag.hora === hora
    ).length;
    return Math.max(0, CAPACIDADE_POR_HORARIO - ocupadas);
  };

  const handleFechar = () => {
    setPasso(1);
    onClose();
  };

  const handleAvancarPasso1 = (e) => {
    e.preventDefault();
    if (!nome.trim() || !telefone.trim()) {
      alert("Por favor, preencha seu nome e telefone.");
      return;
    }
    setPasso(2);
  };

  const handleConfirmarHorario = () => {
    const vagas = calcularVagasRestantes(horarioSelecionado);
    if (vagas === 0) {
      alert("Este horário está lotado. Escolha outro ou entre na fila.");
      return;
    }
    setAgendamentos((prev) => [
      ...prev,
      { data: diaSelecionado.diaNumero, hora: horarioSelecionado, nome, telefone },
    ]);
    setPasso(3);
  };

  return (
    <div className="modal-overlay" onClick={handleFechar}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleFechar}
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* PASSO 1: CADASTRO */}
        {passo === 1 && (
          <form onSubmit={handleAvancarPasso1} className="modal-content-box">
            <div className="modal-icon-box">👤</div>
            <span className="modal-step-label">PASSO 1 DE 2</span>
            <h2 className="modal-title">Vamos fazer seu cadastro</h2>
            <p className="modal-subtitle">É rápido e seus dados ficam seguros.</p>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "50%" }} />
            </div>

            <div className="form-group">
              <label>Nome completo</label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  placeholder="Como podemos chamar você?"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Telefone com DDD</label>
              <div className="input-wrapper">
                <span className="input-icon">📞</span>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-modal-primary">
              Continuar &gt;
            </button>

            <p className="modal-footer-note">
              Usaremos seu telefone apenas para avisos sobre a lavagem.
            </p>
          </form>
        )}

        {/* PASSO 2: ESCOLHA DE HORÁRIO */}
        {passo === 2 && (
          <div className="modal-content-box">
            <span className="modal-step-label">PASSO 2 DE 2</span>
            <h2 className="modal-title">Escolha seu horário</h2>
            <p className="modal-subtitle">Selecione um dia e um horário disponível.</p>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "100%" }} />
            </div>

            <div className="dias-grid">
              {proximosDias.map((dia) => {
                const ativo = diaSelecionado.diaNumero === dia.diaNumero;
                return (
                  <button
                    key={dia.diaNumero}
                    type="button"
                    className={`dia-card ${ativo ? "ativo" : ""}`}
                    onClick={() => setDiaSelecionado(dia)}
                  >
                    <span className="dia-semana">{dia.diaSemana}</span>
                    <strong className="dia-numero">{dia.diaNumero}</strong>
                    <span className="dia-mes">{dia.mes}</span>
                  </button>
                );
              })}
            </div>

            <label className="section-label">Horários disponíveis</label>
            <div className="horarios-grid">
              {HORARIOS.map((hora) => {
                const vagas = calcularVagasRestantes(hora);
                const lotado = vagas === 0;
                const ativo = horarioSelecionado === hora && !lotado;

                return (
                  <button
                    key={hora}
                    type="button"
                    disabled={lotado}
                    className={`horario-card ${ativo ? "ativo" : ""} ${lotado ? "lotado" : ""}`}
                    onClick={() => setHorarioSelecionado(hora)}
                  >
                    <strong>{hora}</strong>
                    <span>
                      {lotado ? "Lotado" : `${vagas} ${vagas === 1 ? "vaga" : "vagas"}`}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="fila-box">
              <div className="fila-info">
                <span className="fila-icon">👥</span>
                <div>
                  <strong>Seu horário está lotado?</strong>
                  <p>Entre na fila e avisaremos quando surgir uma vaga.</p>
                </div>
              </div>
              <button
                type="button"
                className="btn-fila"
                onClick={() => alert("Você entrou na fila de espera!")}
              >
                Entrar na fila
              </button>
            </div>

            <button type="button" className="btn-modal-primary" onClick={handleConfirmarHorario}>
              Confirmar horário &gt;
            </button>
            <button type="button" className="btn-modal-secondary" onClick={() => setPasso(1)}>
              Voltar
            </button>
          </div>
        )}

        {/* PASSO 3: CONFIRMAÇÃO */}
        {passo === 3 && (
          <div className="modal-content-box confirmacao-content">
            <div className="check-circle">✓</div>
            <span className="modal-step-label">AGENDAMENTO CONCLUÍDO</span>
            <h2 className="modal-title">Tudo certo, {nome}!</h2>
            <p className="modal-subtitle">
              Seu horário está reservado. Esperamos você por aqui.
            </p>

            <div className="resumo-card">
              <span className="resumo-icon">📅</span>
              <div>
                <strong>{diaSelecionado.completo}</strong>
                <p>às {horarioSelecionado} - Rua da Esperança, 120</p>
              </div>
            </div>

            <button type="button" className="btn-modal-primary" onClick={handleFechar}>
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}