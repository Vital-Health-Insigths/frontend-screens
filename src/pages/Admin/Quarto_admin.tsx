interface Props {
  setPagina: (pagina: string) => void;
}

export default function Quarto_admin({ setPagina }: Props) {
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
                    onClick={() => setPagina("Busca_quarto_admin")}
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
            <div className="absolute whitespace-nowrap bottom-176 left-36 flex z-20">
                <button
                    className="relative left-[470px] px-[13px] py-[10px] text-[20px] font-semibold text-black bg-[#f5f5f5] border-[4px] border-[#546d79]
                               rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                               duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                >
                <img 
                    src="/CSS/admin/slider.png"
                    className=" w-[35px] h-[40px]:"/>
                </button>
            </div>

            <div className="absolute w-[650px] h-[690px]  whitespace-nowrap top-22 flex flex-col gap-8 z-10 justify-self-center">
                <div className=" h-[120px] flex items-center justify-center gap-5">
                    <div className="relative flex flex-col items-center gap-0">
                        <h1 className="relative text-[34px] font-medium not-italic leading-none text-black text-center "
                        >
                        Quarto 
                        </h1>

                        <h2 className="relative text-black font-bold text-[66px] leading-none text-shadow-[5px_5px_5px_rgba(0,0,0,0.15)]" //Necessita variavel
                        > 08 
                        </h2> 
                    </div>

                    <div className="relative flex flex-col  items-center gap-2">
                        <div className="h-23 w-[4px] bg-[#546d79]"></div>
                    </div>

                    <div className="relative flex flex-col items-center gap-2">
                        <h1 className="relative text-[20px] font-medium not-italic leading-none text-black text-center pb-1"
                        >
                        Quantidade <br></br>
                        De Vagas:
                        </h1>

                        <h2 className="relative text-black font-semibold text-[26px] leading-none pb-2 text-shadow-[5px_5px_5px_rgba(0,0,0,0.1)]" //Necessita variavel
                        > 06 
                        </h2>
                    </div>
                </div>

                <div className="relative w-full h-[200px] block justify-items-center">
                    <div className="grid  grid-cols-2 grid-rows-3 gap-y-5 w-[90%] h-full p-4">

                        <div className="flex items-center justify-center">
                            <button
                                className="relative block w-[230px] h-[50px] bg-[#e1e1e1] border-[4px] border-[#546d79]
                                           rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                                           duration-200 hover:brightness-105 hover:scale-105 active:scale-95" //necessita criar componente
                            >
                            <span className="absolute w-8 left-2"><img src="/CSS/imagens/elementos/icon-user-on.png"/></span>
                            <span className="text-[20px] font-semibold text-black text-center">Visitante</span> 
                            </button> 
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                className="relative block w-[230px] h-[50px] bg-[#e1e1e1] border-[4px] border-[#546d79]
                                           rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                                           duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                            >
                            <span className="absolute w-8 left-2"><img src="/CSS/imagens/elementos/icon-user-on.png"/></span>
                            <span className="text-[20px] font-semibold text-black text-center">Visitante</span> 
                            </button> 
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="relative block w-[230px] h-[50px] bg-[#e1e1e1] border-[4px] border-[#546d79]
                                           rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                                           duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                            >
                            <span className="absolute w-8 left-2"><img src="/CSS/imagens/elementos/icon-user-on.png"/></span>
                            <span className="text-[20px] font-semibold text-black text-center">Visitante</span> 
                            </button> 
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="relative block w-[230px] h-[50px] bg-[#e1e1e1] border-[4px] border-[#546d79]
                                           rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                                           duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                            >
                            <span className="absolute w-8 left-2"><img src="/CSS/imagens/elementos/icon-user-on.png"/></span>
                            <span className="text-[20px] font-semibold text-black text-center">Visitante</span> 
                            </button> 
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="relative block w-[230px] h-[50px] bg-[#e1e1e1] border-[4px] border-[#546d79]
                                           rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                                           duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                            >
                            <span className="absolute w-8 left-2"><img src="/CSS/imagens/elementos/icon-user-on.png"/></span>
                            <span className="text-[20px] font-semibold text-black text-center">Visitante</span> 
                            </button> 
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="relative block w-[230px] h-[50px] bg-[#e1e1e1] border-[4px] border-[#546d79]
                                           rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                                           duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                            >
                            <span className="absolute w-8 left-2"><img src="/CSS/imagens/elementos/icon-user-on.png"/></span>
                            <span className="text-[20px] font-semibold text-black text-center">Visitante</span> 
                            </button> 
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-[300px] block justify-items-center mt-3">
                  <h2 className="relative text-black font-semibold text-[26px] leading-none pb-2 text-shadow-[5px_5px_5px_rgba(0,0,0,0.1)]">
                    Histórico
                  </h2>

                  <div className="w-[90%] p-4 space-y-1">
                    {/* LINHA 1 */}
                    <div className="grid grid-cols-5 gap-1 text-[#2a6f49] font-semibold">
                      <div className="flex items-center gap-2">
                        <span className="w-6">
                          <img src="/CSS/imagens/elementos/icon-user-on.png" alt="" />
                        </span>
                        Entrada
                      </div>
                      <div>Visitante 01</div>
                      <div>132.456.789-00</div>
                      <div>10:00</div>
                      <div>25/10/2025</div>
                    </div>

                    {/* LINHA 2 */}
                    <div className="grid grid-cols-5 gap-1 text-[#2a6f49] font-semibold">
                      <div className="flex items-center gap-2">
                        <span className="w-6">
                          <img src="/CSS/imagens/elementos/icon-user-on.png" alt="" />
                        </span>
                        Entrada
                      </div>
                      <div>Visitante 04</div>
                      <div>132.456.789-00</div>
                      <div>09:30</div>
                      <div>25/10/2025</div>
                    </div>

                    {/* LINHA 3 */}
                    <div className="grid grid-cols-5 gap-1 text-[#6b6b6b] font-semibold">
                      <div className="flex items-center gap-2">
                        <span className="w-6">
                          <img src="/CSS/imagens/elementos/icon-user-off.png" alt="" />
                        </span>
                        Saída
                      </div>
                      <div>Visitante 08</div>
                      <div>132.456.789-00</div>
                      <div>09:00</div>
                      <div>25/10/2025</div>
                    </div>

                    {/* LINHA 4 */}
                    <div className="grid grid-cols-5 gap-1 text-[#2a6f49] font-semibold">
                      <div className="flex items-center gap-2">
                        <span className="w-6">
                          <img src="/CSS/imagens/elementos/icon-user-on.png" alt="" />
                        </span>
                        Entrada
                      </div>
                      <div>Visitante 02</div>
                      <div>132.456.789-00</div>
                      <div>08:00</div>
                      <div>25/10/2025</div>
                    </div>

                    {/* LINHA 5 */}
                    <div className="grid grid-cols-5 gap-1 text-[#2a6f49] font-semibold">
                      <div className="flex items-center gap-2">
                        <span className="w-6">
                          <img src="/CSS/imagens/elementos/icon-user-on.png" alt="" />
                        </span>
                        Entrada
                      </div>
                      <div>Visitante 06</div>
                      <div>132.456.789-00</div>
                      <div>06:00</div>
                      <div>25/10/2025</div>
                    </div>

                    {/* LINHA 6 */}
                    <div className="grid grid-cols-5 gap-1 text-[#6b6b6b] font-semibold">
                      <div className="flex items-center gap-2">
                        <span className="w-6">
                          <img src="/CSS/imagens/elementos/icon-user-off.png" alt="" />
                        </span>
                        Saída
                      </div>
                      <div>Visitante 06</div>
                      <div>132.456.789-00</div>
                      <div>18:00</div>
                      <div>24/10/2025</div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )}