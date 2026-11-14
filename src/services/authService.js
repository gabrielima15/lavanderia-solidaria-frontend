import api from './api';

//backend

export const login = ({ email, senha }) => api.post('/auth/login', { email, senha });
