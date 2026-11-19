import { HeartHandshake } from 'lucide-react';

// Texto lateral das telas de Login e Cadastro.
export default function AuthIntro({ etiqueta, titulo, texto, destaque }) {
  return (
    <div>
      <p className="eyebrow">{etiqueta}</p>
      <h1 className="display-5 fw-bolder mb-3">{titulo}</h1>
      <p className="text-body-secondary mb-4">{texto}</p>
      <div className="auth-highlight">
        <HeartHandshake size={21} className="flex-shrink-0" aria-hidden="true" />
        <span>{destaque}</span>
      </div>
    </div>
  );
}
