interface Props {
  setPagina: (pagina: string) => void;
}

export default function Case({ setPagina }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
        <div className="relative w-[727px] h-[883px] bg-[#f5f5f5] border-[10px] border-white rounded-[40px] shadow-[15px_15px_15px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
            <img
                src="/CSS/imagens/elementos/sup-perfil.png"
                className="absolute w-[800px] object-fill z-10 pointer-events-none"
            />
            <img
                src="/CSS/imagens/elementos/inf.png"
                className="absolute top-[531px] h-150 object-none block z-0 pointer-events-none"
            />

            <div className="absolute whitespace-nowrap bottom-195 left-[20px] flex z-10">
                <button
                    className="px-[30px] py-[10px] text-[20px] font-semibold text-black bg-[#f5f5f5] border-[4px] border-[#0a6fa1]
                               rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                               duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Home")}
                >
                VOLTAR
                </button>
            </div>

            <div className="absolute whitespace-nowrap bottom-135 left-1/2 transform -translate-x-1/2 flex flex-col z-30 min-w-[200px]">
                <div className="absolute w-[155px] h-[155px] bottom-20 rounded-full border-6 border-[#15645c] bg-[#f5f5f5] flex items-center justify-center left-1/2 transform -translate-x-1/2 shadow-[5px_5px_8px_rgba(0,0,0,0.15)]">
                    <img 
                        src="/CSS/imagens/elementos/imagem-perfil.png"
                        className="w-[130px] h-[130px] rounded-full object-cover pointer-events-none z-10"
                    />
                </div>

                {/* Necessita variavel para alterar nome do visitante */}
                <h1 className="text-[40px] font-bold text-black text-center text-shadow-[5px_5px_8px_rgba(0,0,0,0.15)]"
                >
                Nome do Usuário
                </h1>
            </div>

            <div className="absolute whitespace-nowrap bottom-26 left-1/2 transform -translate-x-1/2 flex flex-col gap-[25px] z-10 min-w-[200px]">
                <button
                    className="px-[70px] py-[30px] text-[35px] font-semibold text-white bg-[#26a69a] border-[4px] border-[#008479] 
                    rounded-full  shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Quartos")}
                >
                Iniciar Visita
                    <span className="text-yellow-400 text-[20px]"> V.1 </span>
                </button>
                <button
                    className="px-[70px] py-[30px] text-[35px] font-semibold text-white bg-[#26a69a] border-[4px] border-[#008479] 
                    rounded-full  shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Quartos_v2")}
                >
                Iniciar Visita
                    <span className="text-yellow-400 text-[20px]"> V.2 </span>
                </button>
                <button
                    className="px-[70px] py-[30px] text-[35px] font-semibold text-white bg-[#26a69a] border-[4px] border-[#008479] 
                    rounded-full shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Check_Out")}
                >
                Finalizar Visita
                </button>
            </div>

        </div>
    </div>
  )}