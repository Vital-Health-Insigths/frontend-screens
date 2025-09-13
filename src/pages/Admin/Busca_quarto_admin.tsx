import BotaoQuartoAdmin from "../../components/BotaoQuartoAdmin";
import { useState } from "react";

export default function Busca_quarto_admin({ setPagina }: { setPagina: (pagina: string) => void }) {
    const [quartoSelecionado, setQuartoSelecionado] = useState<string | null>(null);

    const toggleSelecao = (numero: string) => {
    setQuartoSelecionado(prev => (prev === numero ? null : numero));
    };    

  return (
    <div className="flex items-center justify-center min-h-screen relative">
        <div className="relative w-[727px] h-[883px] bg-[#f5f5f5] border-[10px] border-white rounded-[40px] shadow-[15px_15px_15px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
            <img
                src="/CSS/admin/superior.png"
                className="relative w-full h-1/2 object-none z-1 bottom-[189px]"
            />
            <img
                src="/CSS/admin/inferior-admin.png"
                className="relative top-[99px] h-150 object-none block z-0"
            />

            <div className="absolute whitespace-nowrap bottom-195  flex z-10">
                <button
                    className="relative left-[20px] px-[30px] py-[10px] text-[20px] font-semibold text-black bg-[#f5f5f5] border-[4px] border-[#546d79]
                               rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                               duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Home_admin")}
                >
                VOLTAR
                </button>
                <button
                    className="relative left-[470px] px-[13px] py-[10px] text-[20px] font-semibold text-black bg-[#f5f5f5] border-[4px] border-[#546d79]
                               rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                               duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Home_admin")}
                >
                <img 
                    src="/CSS/admin/casa.png"
                    className=" w-[35px] h-[40px]:"/>
                </button>
            </div>

            <div>
                <div className="absolute flex flex-col items-center justify-center inset-0 gap-6 bottom-[636px] z-10 pointer-events-none">
                    <h2 className="text-3xl font-semibold text-center text-black">
                        Pesquisar Quarto
                    </h2>
                </div>
                <div className="absolute flex flex-col items-center justify-self-center justify-center h-full px-10 bottom-[245px] z-10 pointer-events-none">
                    {/* formulario de Pesquisar quarto, Necessida backend */}
                    <input
                        type="text"
                        placeholder="NOME OU CPF"
                        className="pointer-events-auto px-[75px] py-[20px] text-[24px] text-center font-inter font-semibold rounded-full border-[4px] 
                                border-[#546d79] bg-[#e1e1e1] text-[#787777] shadow-[5px_5px_5px_rgba(0,0,0,0.2)] focus:outline-none"
                    />
                    <img
                        src="/CSS/imagens/elementos/lupa.png"
                        alt="lupa"
                        className="absolute left-16 top-1/2 -translate-y-1/2 w-10 h-10 pointer-events-none"
                    />
                </div>
            </div>


            {/* Necessita funcao para criar botoes */} 
            <div className="absolute bottom-18 w-[710px] h-[533px] z-30 flex justify-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-5 pointer-events-none bg-gradient-to-b from-[#f5f5f5] to-transparent z-20"></div>
                <div className="absolute bottom-0 left-0 w-full h-5 pointer-events-none bg-gradient-to-t from-[#f5f5f5] to-transparent z-20"></div>
                {/* Lista Scrolável */}
                <div className="relative w-full h-full overflow-y-auto scrollbar-hide z-10">
                    <div className="flex flex-col items-center gap-6 py-8 ">
                        <BotaoQuartoAdmin
                            numero="01"
                            vagas_disp={3}
                            vagas_total={4}
                            selected={quartoSelecionado === "01"}
                            onClick={() => toggleSelecao("01")}
                            setPagina={setPagina}
                        />
                        <BotaoQuartoAdmin
                            numero="02"
                            vagas_disp={1}
                            vagas_total={4}
                            selected={quartoSelecionado === "02"}
                            onClick={() => toggleSelecao("02")}
                            setPagina={setPagina}
                        />
                        <BotaoQuartoAdmin
                            numero="03"
                            vagas_disp={2}
                            vagas_total={5}
                            selected={quartoSelecionado === "03"}
                            onClick={() => toggleSelecao("03")}
                            setPagina={setPagina}
                        />
                        <BotaoQuartoAdmin
                            numero="04"
                            vagas_disp={2}
                            vagas_total={5}
                            selected={quartoSelecionado === "04"}
                            onClick={() => toggleSelecao("04")}
                            setPagina={setPagina}
                        />
                        <BotaoQuartoAdmin
                            numero="05"
                            vagas_disp={4}
                            vagas_total={6}
                            selected={quartoSelecionado === "05"}
                            onClick={() => toggleSelecao("05")}
                            setPagina={setPagina}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )}