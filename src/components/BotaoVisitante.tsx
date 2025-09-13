interface BotaoVisitanteProps {
    nome: string;
    cpf: string;
    status: boolean;
    quarto: string | number;
    onClick?: () => void;
    setPagina?: (pagina: string) => void;
}

export default function BotaoVisitante({ nome, cpf, status, quarto, setPagina }: BotaoVisitanteProps) {
  return (
    <button
      type="button"
      className="relative block w-[430px] h-[100px] justify-items-center content-center whitespace-nowrap
                 bg-[#e1e1e1] border-[4px] border-[#546d79] rounded-[30px]
                 hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)]
                 duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
      onClick={() => setPagina && setPagina("Usuario_admin")}
    >
      {/* Barra lateral esquerda */}
      <div
        className={`absolute left-[4px] top-1/2 -translate-y-1/2 w-[24px] h-[85px] rounded-l-[30px] ${
          status ? "bg-[#26a69a]" : "bg-[#70848e]"
        }`}
      ></div>

      <div className="absolute left-1/2 ml-2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-[60px] bg-[#70848e]"></div>

      {/* Conteúdo */}
      <div className="relative grid grid-cols-2 w-[87%] mx-auto">
        <div className="relative flex flex-col items-center justify-center gap-0">
          <h1 className="text-[25px] font-semibold text-black text-center">{nome}</h1>
          <h2 className="text-[15px] font-semibold text-black text-center">{cpf}</h2>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-0">
          <h1 className="text-[20px] font-semibold text-black text-center">
            {status ? "Visitando" : "Ultima Visita"}
          </h1>
          <h2 className="text-[13px] font-medium text-black text-center">{quarto}</h2>
        </div>
      </div>
    </button>
  );
};

