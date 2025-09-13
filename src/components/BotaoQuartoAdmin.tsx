interface BotaoQuartoAdminProps {
    numero: string;
    selected: boolean;
    vagas_disp: number;
    vagas_total: number;
    onClick?: () => void;
    setPagina?: (pagina: string) => void;
}

export default function BotaoQuartoAdmin({ vagas_disp, vagas_total, numero, selected, onClick, setPagina }: BotaoQuartoAdminProps) {
  return (
    <button
        type="button"
        onClick={onClick}
        className={`
            relative w-[430px] rounded-[30px] border-[4px] border-[#546d79] bg-gradient-to-b from-[#e4e4e4] to-[#e1e1e1]
            shadow-[8px_8px_18px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-110 transition-all duration-300 overflow-hidden`}
        >
        <div className="p-4 z-10">
            <div className="font-semibold text-black text-[22px] pl-3 text-left"
                >
                QUARTO {numero}
            </div>
            <div className="text-[18px] text-black font-semibold pl-3 text-left">
                <span className="font-semibold"
                >
                {vagas_disp}
                </span> Vagas Disponíveis
            </div>
        </div>
        <img
            src="/CSS/admin/waves-admin.png"
            className="static pointer-events-none left-0 w-full h-10 object-fill opacity-80 pb-2 z-0"
        />    
        {/* Área expansível*/}
        <div className={`text-right px-6 pb-1 overflow-hidden transition-all duration-350 ease-in-out items-center
            ${selected ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}
            >

            {/* Vagas (ícones) */}
            <div className="relative flex top-5 items-center gap-1 z-10">
                {Array.from({ length: vagas_total }).map((_, index) => (
                    <img
                        key={index}
                        src={
                            index < vagas_disp
                            ? "/CSS/imagens/elementos/icon-user-on.png"   // Disponível
                            : "/CSS/imagens/elementos/icon-user-off.png"  // Ocupada
                }
                    alt={index < vagas_disp ? "Disponível" : "Ocupada"}
                    className="w-8 h-8"
                />
            ))}
            </div>

            <button
                className="relative bottom-7 px-[25px] py-[15px] text-[20px] font-semibold text-white bg-[#26a69a] border-[4px] border-[#008479] 
                    rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] disabled:opacity-40
                    duration-200 hover:brightness-105 hover:scale-105 active:scale-110 z-20"
                onClick={() => setPagina && setPagina("Quarto_admin")}
                >
                VER
            </button>




        </div>
    </button>
  );
}
