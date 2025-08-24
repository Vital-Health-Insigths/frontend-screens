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
import CardNavegacao from './components/CardNavegacao';



export default function App() {
  const [pagina, setPagina] = useState("Home");

  return (
    <div className="relative bg-fundo min-h-screen">
      <img
        src="/CSS/imagens/imagens/img-left.jpg"
        className="absolute w-[675px] h-[669px] blur-[3px] right-[100%] top-1/2 -translate-y-1/2 -z-10 pointer-events-none"
      />
      <img
        src="/CSS/imagens/imagens/img-rigth.jpg"
        className="absolute w-[675px] h-[669px] blur-[3px] top-1/2 -translate-y-1/2 left-[100%] -z-10 pointer-events-none"
      />
    {/*     
      <img
        src="/CSS/imagens/elementos/Logo_Azul.png"
        className="absolute scale-15 right-200 top-144 object-fill opacity-90 blur-[3px] z-50"
      />
      */}

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

    </div>
  );
}
