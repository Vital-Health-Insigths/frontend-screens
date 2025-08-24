import { useState } from "react";
import BotaoQuartov2 from "../components/BotaoQuartov2";

export default function Quartos_v2({ setPagina }: { setPagina: (pagina: string) => void }) {
    const [quartoSelecionado, setQuartoSelecionado] = useState<string | null>(null);

    const toggleSelecao = (numero: string) => {
    setQuartoSelecionado(prev => (prev === numero ? null : numero));
    };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
        <div className="relative w-[727px] h-[883px] bg-[#f5f5f5] border-[10px] border-white rounded-[40px] shadow-[15px_15px_15px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
            <img
                src="/CSS/imagens/elementos/sup.png"
                className="relative w-full h-1/2 object-none z-[1] bottom-[189px]"
            />
            <img
                src="/CSS/imagens/elementos/inf.png"
                className="relative top-[99px] h-150 object-none block z-0"
            />

            <div className="absolute whitespace-nowrap bottom-195 left-[20px] flex z-100">
                <button
                    className="px-[30px] py-[10px] text-[20px] font-semibold text-black bg-[#f5f5f5] border-[4px] border-[#0a6fa1] 
                               rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)]
                               duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Case")}
                >
                VOLTAR
                </button>
            </div>


            <div className="absolute flex flex-col items-center justify-center inset-0 gap-6 bottom-[636px] z-10 pointer-events-none">
                <h2 className="text-3xl font-semibold text-center text-black">
                    Pesquisar Quarto
                </h2>
            </div>

            <div className="absolute flex flex-col items-center justify-self-center justify-center h-full px-10 bottom-[245px] z-10 pointer-events-none">
                {/* formulario de Pesquisar quarto */}
                <input
                    type="text"
                    placeholder="Nº DO QUARTO"
                    className="pointer-events-auto px-[75px] py-[20px] text-[24px] text-center font-inter font-semibold rounded-full border-[4px] border-[#046da0] bg-[#e1e1e1] text-[#787777] shadow-[5px_5px_5px_rgba(0,0,0,0.2)] focus:outline-none"
                />
                <img
                    src="/CSS/imagens/elementos/lupa.png"
                    alt="lupa"
                    className="absolute left-16 top-1/2 -translate-y-1/2 w-10 h-10 pointer-events-none"
                />
            </div>

            {/* Botões, Necessita receber variaveis do banco */} 
            <div className="items-center justify-center absolute bottom-18 gap-5 z-20 w-[710px] h-[570px] flex flex-col">
                <div className="flex items-center flex-col justify-center gap-5">
                    <BotaoQuartov2
                        numero="01"
                        vagas_disp={3}
                        vagas_total={4}
                        selected={quartoSelecionado === "01"}
                        onClick={() => toggleSelecao("01")}
                        setPagina={setPagina}
                    />
                </div>
                <div className="flex items-center flex-col justify-center gap-5">
                    <BotaoQuartov2
                        numero="02"
                        vagas_disp={1}
                        vagas_total={4}
                        selected={quartoSelecionado === "02"}
                        onClick={() => toggleSelecao("02")}
                        setPagina={setPagina}
                    />
                </div>
                <div className="flex items-center flex-col justify-center gap-5">
                    <BotaoQuartov2
                        numero="03"
                        vagas_disp={2}
                        vagas_total={5}
                        selected={quartoSelecionado === "03"}
                        onClick={() => toggleSelecao("03")}
                        setPagina={setPagina}
                    />
                </div>
            </div>

        </div>
    </div>
  );
}
