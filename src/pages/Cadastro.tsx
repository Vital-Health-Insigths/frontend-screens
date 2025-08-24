
interface Props {
  setPagina: (pagina: string) => void;
}

export default function Cadastro({ setPagina }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen ">
        <div className="relative w-[727px] h-[883px] bg-[#f5f5f5] border-[10px] border-white rounded-[40px] shadow-[15px_15px_15px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">

            <img
                src="/CSS/imagens/elementos/sup.png"
                className="relative w-full h-1/2 object-none z-[1] bottom-[189px]"
            />
            <img
                src="/CSS/imagens/elementos/inf.png"
                className="relative top-[99px] h-150 object-none block z-0"
            />

            {/* Botao voltar */}
            <div className="absolute whitespace-nowrap bottom-195 left-[20px] flex z-100">
                <button
                    className="px-[30px] py-[10px] text-[20px] font-semibold text-black bg-[#f5f5f5] border-[4px] border-[#0a6fa1] 
                               rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)]
                               duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Home")}
                >
                VOLTAR
                </button>
            </div>
    
            {/* Título centralizado */}
            <div className="absolute flex flex-col items-center justify-center inset-0 gap-6 bottom-150 z-10 pointer-events-none">
                <h2 className="text-3xl font-semibold text-center text-black">
                    Olá, Seja Bem-Vindo! <br/> Por favor Preencha Os Dados.
                </h2>
            </div>

            <div className="items-center justify-center absolute bottom-5 z-20 w-[710px] h-[800px] flex flex-col">
                <div className="absolute flex flex-col items-center justify-center h-full px-10 gap-6 bottom-[40px] z-10 pointer-events-none">
                {/* Campo: Nome */}
                <input
                    type="text"
                    placeholder="NOME"
                    className="pointer-events-auto px-[75px] py-[20px] text-[24px] text-center font-inter font-semibold rounded-full border-[4px] border-[#046da0] bg-[#e1e1e1] text-[#787777] shadow-[5px_5px_5px_rgba(0,0,0,0.2)] focus:outline-none"
                />
                {/* Campo: CPF */}
                <input
                    type="text"
                    placeholder="CPF"
                    className="pointer-events-auto px-[75px] py-[20px] text-[24px] text-center font-inter font-semibold rounded-full border-[4px] border-[#046da0] bg-[#e1e1e1] text-[#787777] shadow-[5px_5px_5px_rgba(0,0,0,0.2)] focus:outline-none"
                />
                {/* Campo: EMAIL */}
                <input
                    type="email"
                    placeholder="EMAIL"
                    className="pointer-events-auto px-[75px] py-[20px] text-[24px] text-center font-inter font-semibold rounded-full border-[4px] border-[#046da0] bg-[#e1e1e1] text-[#787777] shadow-[5px_5px_5px_rgba(0,0,0,0.2)] focus:outline-none"
                />
                {/* Campo: CEP */}
                <input
                    type="text"
                    placeholder="CEP"
                    className="pointer-events-auto px-[75px] py-[20px] text-[24px] text-center font-inter font-semibold rounded-full border-[4px] border-[#046da0] bg-[#e1e1e1] text-[#787777] shadow-[5px_5px_5px_rgba(0,0,0,0.2)] focus:outline-none"
                />
                </div>
            </div>

            {/* Botão Confirmar */}
            <div className="flex items-center justify-center min-h-screen">
                <div className="absolute whitespace-nowrap bottom-[102px] flex z-20">
                    <button
                        className="px-[60px] py-[20px] text-[20px] font-semibold text-white bg-[#0a6fa1] border-[4px] border-[#008479] 
                                   rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] disabled:opacity-40
                                   duration-200 hover:brightness-105 hover:scale-105 active:scale-95 "
                        onClick={() => setPagina("Biometria")}
                    >
                    CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    </div>
  )}