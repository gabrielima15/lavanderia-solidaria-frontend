import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import AuthLayout from '../components/layout/AuthLayout';
import Home from '../views/Home';
import Login from '../views/Login';
import Cadastro from '../views/Cadastro';

export default function AppRoutes() {
  return (
    <Routes>
      {}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
