// import { Outlet } from 'react-router-dom';
// import SiteHeader from './SiteHeader';
// import SiteFooter from './SiteFooter';
// import './Layout.css';

// export default function MainLayout() {
//   return (
//     <div className="site-shell" id="inicio">
//       <SiteHeader />
//       <main>
//         <Outlet />
//       </main>
//       <SiteFooter />
//     </div>
//   );
// }


import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { AgendamentoModal } from '../ui/AgendamentoModal';

export default function MainLayout() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      {/* Passa a função para abrir o modal direto para o Header */}
      <SiteHeader onOpenAgendamento={() => setModalAberto(true)} />

      <main>
        <Outlet />
      </main>

      <SiteFooter />

      {/* O modal fica aqui, pronto para aparecer por cima de qualquer página */}
      <AgendamentoModal 
        isOpen={modalAberto} 
        onClose={() => setModalAberto(false)} 
      />
    </>
  );
}