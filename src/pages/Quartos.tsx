import { useState } from "react";
import BotaoQuarto from "../components/BotaoQuarto";

export default function Quartos({ setPagina }: { setPagina: (pagina: string) => void }) {
    const [quartoSelecionado, setQuartoSelecionado] = useState<string | null>(null);

    const toggleSelecao = (numero: string) => {
    setQuartoSelecionado(prev => (prev === numero ? null : numero));
    };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
        <div className="relative w-[727px] h-[883px] bg-[#f5f5f5] border-[10px] border-white rounded-[40px] shadow-[15px_15px_15px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">

            {/* Imagens de fundo */}
            <img
                src="/CSS/imagens/elementos/sup.png"
                className="relative w-full h-1/2 object-none z-[1] bottom-[189px]"
            />
            <img
                src="/CSS/imagens/elementos/inf.png"
                className="relative top-[99px] h-150 object-none block z-0"
            />

            {/* Botão Voltar */}
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

            

            {/* Título centralizado */}
            <div className="absolute flex flex-col items-center justify-center inset-0 gap-6 bottom-[636px] z-10 pointer-events-none">
                <h2 className="text-3xl font-semibold text-center text-black">
                    Selecione o Quarto:
                </h2>
            </div>

            {/* Botões de Quartos */}
            <div className="items-center justify-center absolute bottom-15 gap-15 z-20 w-[710px] h-[800px] flex flex-col">
                <div className="flex items-center justify-center gap-15">
                    <BotaoQuarto
                        titulo="QUARTO"
                        numero="01"
                        selected={quartoSelecionado === "01"}
                        onClick={() => toggleSelecao("01")}
                    />
                    <BotaoQuarto
                        titulo="QUARTO"
                        numero="02"
                        selected={quartoSelecionado === "02"}
                        onClick={() => toggleSelecao("02")}
                    />
                </div>

                <div className="flex items-center justify-center gap-15">
                    <BotaoQuarto
                        titulo="QUARTO"
                        numero="03"
                        selected={quartoSelecionado === "03"}
                        onClick={() => toggleSelecao("03")}
                    />
                    <BotaoQuarto
                        titulo="QUARTO"
                        numero="04"
                        selected={quartoSelecionado === "04"}
                        onClick={() => toggleSelecao("04")}
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
                        onClick={() => setPagina("Case")}
                        disabled={!quartoSelecionado}
                    >
                    CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
