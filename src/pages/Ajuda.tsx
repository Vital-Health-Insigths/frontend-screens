interface Props {
  setPagina: (pagina: string) => void;
}

export default function Ajuda({ setPagina }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
        <div className="relative w-[727px] h-[883px] bg-[#f5f5f5] border-[10px] border-white rounded-[40px] shadow-[15px_15px_15px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
            <img
                src="/CSS/imagens/elementos/sup.png"
                className="relative w-full h-1/2 object-none z-1 bottom-[189px]"
            />
            <img
                src="/CSS/imagens/elementos/inf.png"
                className="relative top-[99px] h-150 object-none block z-0"
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
        </div>
    </div>
  )}