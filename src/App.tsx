import { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import Biometria from './pages/Biometria'; 
import Cadastro from './pages/Cadastro'; 
import Ajuda from './pages/Ajuda'; 
import Quartos from './pages/Quartos'; 
import Check_Out from './pages/CheckOut';
import Case from './pages/Case';
import Quartos_v2 from './pages/Quartos_v2';

import Home_mob from './pages/Mobile/Home_mob';
import Cadastro_mob from './pages/Mobile/Cadastro_mob';
import Ajuda_mob from './pages/Mobile/Ajuda_mob';
import Login_mob from './pages/Mobile/Login_mob';
import Perfil_mob from './pages/Mobile/Perfil_mob';

import CardNavegacao from './components/CardNavegacao';

export default function App() {
  const [pagina, setPagina] = useState("Home_mob");
  return (
    <div className="relative bg-fundo">
      <img
        src="/CSS/imagens/imagens/img-left.jpg"
        className="absolute w-[675px] h-[669px] blur-[3px] right-[100%] top-1/2 -translate-y-1/2 -z-10 pointer-events-none"
      />
      <img
        src="/CSS/imagens/imagens/img-mid.jpg"
        className="absolute w-[726px] h-[669px] blur-[3px] top-1/2 -translate-y-1/2  -z-20 pointer-events-none"
      />
      <img
        src="/CSS/imagens/imagens/img-rigth.jpg"
        className="absolute w-[675px] h-[669px] blur-[3px] top-1/2 -translate-y-1/2 left-[100%] -z-10 pointer-events-none"
      />
      <div>
        
      <CardNavegacao setPagina={setPagina} />
      
      </div> 
      {pagina === "Home" && <Home setPagina={setPagina} />}
      {pagina === "Biometria" && <Biometria setPagina={setPagina} />}
      {pagina === "Cadastro" && <Cadastro setPagina={setPagina} />}
      {pagina === "Ajuda" && <Ajuda setPagina={setPagina} />}
      {pagina === "Case" && <Case setPagina={setPagina} />}
      {pagina === "Quartos" && <Quartos setPagina={setPagina} />}
      {pagina === "Quartos_v2" && <Quartos_v2 setPagina={setPagina} />}
      {pagina === "Check_Out" && <Check_Out setPagina={setPagina} />}
      {pagina === "Home_mob" && <Home_mob setPagina={setPagina} />}
      {pagina === "Cadastro_mob" && <Cadastro_mob setPagina={setPagina} />}
      {pagina === "Ajuda_mob" && <Ajuda_mob setPagina={setPagina} />}
      {pagina === "Login_mob" && <Login_mob setPagina={setPagina} />}
      {pagina === "Perfil_mob" && <Perfil_mob setPagina={setPagina} />}
    </div>
    );
  }