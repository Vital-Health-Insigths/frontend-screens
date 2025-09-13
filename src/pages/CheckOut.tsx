
interface Props {
  setPagina: (pagina: string) => void;
}

export default function Check_Out({ setPagina }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
        <div className="relative w-[727px] h-[883px] bg-[#b2dfdb] border-[10px] border-white rounded-[40px] shadow-[15px_15px_15px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
            <img
                src="/CSS/imagens/elementos/imagem-checkout.png"
                className="relative w-full h-1/2 object-cover z-[1] bottom-[13px] scale-118 pointer-events-none"
            />
            <img
                src="/CSS/imagens/elementos/inferior.png"
                className="relative bottom-[13.2%] h-150 object-none block z-0 pointer-events-none"
            />
            <img
                src="/CSS/imagens/elementos/Path.png"
                alt="path"
                className="absolute w-[120%] object-none bottom-[383px] z-[2] pointer-events-none"
            />
            <img
                src="/CSS/imagens/elementos/shield.png"
                alt="shield"
                className="absolute w-[150px] top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3] pointer-events-none"
            />
        {/* Botões */}
            <div className="absolute whitespace-nowrap bottom-77 left-1/2 transform -translate-x-1/2 flex flex-col gap-[18px] z-10 min-w-[200px]">
                <button
                    className="px-[90px] py-[35px] text-[35px] font-semibold text-white bg-[#046da0] border-[4px] border-[#008479] 
                    rounded-full  shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Biometria")}
                >
                Finalizar Visita
                </button>
            </div>

            <div className="absolute whitespace-nowrap bottom-18 left-1/2 -translate-x-1/2 flex flex-col gap-[24px] z-10 min-w-[200px]">
                <button
                    className="px-[70px] py-[16px] text-[35px] font-semibold text-white bg-[#61a9e0] border-[4px] border-[#008479] 
                    rounded-full shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Biometria")}
                >
                Meu Perfil
                </button>
                <button
                    className="px-[70px] py-[16px] text-[35px] font-semibold text-[#008479] bg-[#f5f5f5] border-[4px] border-[#008479] 
                    rounded-full shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Ajuda")}
                >
                Ajuda
                </button>
            </div>

            
        </div>
    </div>
  );
}
