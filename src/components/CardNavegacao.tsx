interface CardNavegacaoProps {
  setPagina: (pagina: string) => void;
}

export default function CardNavegacao({ setPagina }: CardNavegacaoProps) {
  return (
    <div className="fixed bottom-10 right-10 z-50 group">
      <div
        className="bg-white rounded-2xl shadow-lg p-4 border-2 border-[#0a6fa1] 
                   w-[180px] overflow-hidden transition-all duration-600 
                   max-h-15 opacity-30 group-hover:w-[550px] group-hover:max-h-[1200px] 
                   group-hover:opacity-100"
      >
        <h3 className="text-[18px] font-bold text-[#0a6fa1] text-center mb-3">
          Navegação
        </h3>

        <div
          className="grid grid-cols-3 gap-6 opacity-0 group-hover:opacity-100 
                     transition-opacity duration-200"
        >
          {/* COLUNA 1 - Navegação */}
          <div className="flex flex-col gap-3 whitespace-nowrap">
            <h3 className="text-[18px] font-bold text-[#044260] text-center mb-2">
              Totem
            </h3>
            <button
              onClick={() => setPagina("Home")}
              className="px-4 py-2 bg-[#e0f7fa] hover:bg-[#b2ebf2] rounded-lg text-black font-medium text-sm"
            >
              Página Inicial
            </button>
            <button
              onClick={() => setPagina("Cadastro")}
              className="px-4 py-2 bg-[#e0f7fa] hover:bg-[#b2ebf2] rounded-lg text-black font-medium text-sm"
            >
              Cadastro
            </button>
            <button
              onClick={() => setPagina("Biometria")}
              className="px-4 py-2 bg-[#e0f7fa] hover:bg-[#b2ebf2] rounded-lg text-black font-medium text-sm"
            >
              Biometria
            </button>
            <button
              onClick={() => setPagina("Case")}
              className="px-4 py-2 bg-[#e0f7fa] hover:bg-[#b2ebf2] rounded-lg text-black font-medium text-sm"
            >
              Case
            </button>
            <button
              onClick={() => setPagina("Quartos")}
              className="px-4 py-2 bg-[#e0f7fa] hover:bg-[#b2ebf2] rounded-lg text-black font-medium text-sm"
            >
              Quartos V1
            </button>
            <button
              onClick={() => setPagina("Quartos_v2")}
              className="px-4 py-2 bg-[#e0f7fa] hover:bg-[#b2ebf2] rounded-lg text-black font-medium text-sm"
            >
              Quartos V2
            </button>
            <button
              onClick={() => setPagina("Ajuda")}
              className="px-4 py-2 bg-[#e0f7fa] hover:bg-[#b2ebf2] rounded-lg text-black font-medium text-sm"
            >
              Ajuda
            </button>
            <button
              onClick={() => setPagina("Check_Out")}
              className="px-4 py-2 bg-[#e0f7fa] hover:bg-[#b2ebf2] rounded-lg text-black font-medium text-sm"
            >
              Check-Out
            </button>
          </div>

          {/* COLUNA 2 - Admin */}
          <div className="flex flex-col gap-3 whitespace-nowrap">
            <h3 className="text-[18px] font-bold text-[#363636] text-center mb-2">
              Admin
            </h3>
            <button
              onClick={() => setPagina("Base_admin")}
              className="px-4 py-2 bg-[#e0e0e0] hover:bg-[#c4c6c6] rounded-lg text-black font-medium text-sm"
            >
              Base
            </button>
            <button
              onClick={() => setPagina("Home_admin")}
              className="px-4 py-2 bg-[#e0e0e0] hover:bg-[#c4c6c6] rounded-lg text-black font-medium text-sm"
            >
              Home
            </button>
            <button
              onClick={() => setPagina("Quarto_admin")}
              className="px-4 py-2 bg-[#e0e0e0] hover:bg-[#c4c6c6] rounded-lg text-black font-medium text-sm"
            >
              Quarto
            </button>
            <button
              onClick={() => setPagina("Usuario_admin")}
              className="px-4 py-2 bg-[#e0e0e0] hover:bg-[#c4c6c6] rounded-lg text-black font-medium text-sm"
            >
              Visitante
            </button>
            <button
              onClick={() => setPagina("Busca_usuario_admin")}
              className="px-4 py-2 bg-[#e0e0e0] hover:bg-[#c4c6c6] rounded-lg text-black font-medium text-sm"
            >
              Busca Visitantes
            </button>
            <button
              onClick={() => setPagina("Busca_quarto_admin")}
              className="px-4 py-2 bg-[#e0e0e0] hover:bg-[#c4c6c6] rounded-lg text-black font-medium text-sm"
            >
              Busca Quartos
            </button>
          </div>

          {/* COLUNA 3 - Mobile */}
          <div className="flex flex-col gap-3 whitespace-nowrap">
            <h3 className="text-[18px] font-bold text-[#880bae] text-center mb-2">
              Mobile
            </h3>
            <button
              onClick={() => setPagina("Home_mob")}
              className="px-4 py-2 bg-[#eee0fa] hover:bg-[#deb2f2] rounded-lg text-black font-medium text-sm"
            >
              Home
            </button>
            <button
              onClick={() => setPagina("Cadastro_mob")}
              className="px-4 py-2 bg-[#eee0fa] hover:bg-[#deb2f2] rounded-lg text-black font-medium text-sm"
            >
              Cadastro
            </button>
            <button
              onClick={() => setPagina("Login_mob")}
              className="px-4 py-2 bg-[#eee0fa] hover:bg-[#deb2f2] rounded-lg text-black font-medium text-sm"
            >
              Login
            </button>
            <button
              onClick={() => setPagina("Perfil_mob")}
              className="px-4 py-2 bg-[#eee0fa] hover:bg-[#deb2f2] rounded-lg text-black font-medium text-sm"
            >
              Perfil
            </button>
            <button
              onClick={() => setPagina("Ajuda_mob")}
              className="px-4 py-2 bg-[#eee0fa] hover:bg-[#deb2f2] rounded-lg text-black font-medium text-sm"
            >
              Ajuda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
