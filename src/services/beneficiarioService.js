import api from './api';

//bckend

export const cadastrarBeneficiario = ({ nome, telefone, email }) =>
  api.post('/beneficiarios', { nome, telefone, email });
