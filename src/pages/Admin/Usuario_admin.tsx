interface Props {
  setPagina: (pagina: string) => void;
}

export default function Usuario_admin({ setPagina }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="relative w-[727px] h-[883px] bg-[#f5f5f5] border-[10px] border-white rounded-[40px] shadow-[15px_15px_15px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
        <img
            src="/CSS/admin/superior-profile-admin.png"
            className="absolute w-[800px] object-fill z-10 pointer-events-none"
        />
        <img
            src="/CSS/admin/inferior-admin.png"
            className="absolute top-[531px] h-150 object-none block z-0 pointer-events-none"
        />

        <div className="absolute whitespace-nowrap bottom-195  flex z-10">
            <button
                className="relative left-[20px] px-[30px] py-[10px] text-[20px] font-semibold text-black bg-[#f5f5f5] border-[4px]
                           border-[#546d79] rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                           duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                onClick={() => setPagina("Busca_usuario_admin")}
            >
            VOLTAR
            </button>
            <button
                className="relative left-[470px] px-[13px] py-[10px] text-[20px] font-semibold text-black bg-[#f5f5f5] border-[4px]
                           border-[#546d79] rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                           duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                onClick={() => setPagina("Home_admin")}
            >
            <img 
                src="/CSS/admin/casa.png"
                className=" w-[35px] h-[40px]:"/>
            </button>
        </div>

        <div className="absolute w-[650px] h-[690px] whitespace-nowrap top-22 flex flex-col gap-8 z-10 justify-self-center">
          <div className=" h-[300px] flex flex-col items-center justify-center gap-5 ">
            <div className="relative w-[155px] h-[155px] rounded-full border-6 border-[#15645c] bg-[#f5f5f5]
                flex items-center justify-center shadow-[5px_5px_8px_rgba(0,0,0,0.15)]">
                <img 
                    src="/CSS/imagens/elementos/imagem-perfil.png"
                    className="w-[130px] h-[130px] rounded-full object-cover pointer-events-none z-10"
                />
            </div>
            <div className="relative flex flex-col items-center gap-0">
                <h1 className="relative text-[30px] font-bold not-italic text-black text-center text-shadow-[5px_5px_5px_rgba(0,0,0,0.15)]"
                >
                Nome Do Visitante 
                </h1>
                <h2 className="relative text-black font-semibold text-[22px]" //Necessita variavel
                > 132.456.789-00 
                </h2> 
            </div>
          </div>

          <div className="relative w-full h-[80px] flex justify-center items-center ">
            <button className="relative block w-[230px] h-[50px] bg-[#e1e1e1] border-[4px] border-[#546d79]
                              rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                              duration-200 hover:brightness-105 hover:scale-105 active:scale-95 text-[20px] font-semibold text-black text-center"
                onClick={() => setPagina("Quarto_admin")}
            >
              <span className="absolute w-8 left-2"><img src="/CSS/imagens/elementos/icon-user-on.png"/></span>
              <span>Quarto</span>
              <span> 08 </span>
            </button>
          </div>
          
          <div className="relative w-full h-[300px] block justify-items-center mt-3 ">
            <h2 className="relative text-black font-semibold text-[26px] leading-none pb-2 text-shadow-[5px_5px_5px_rgba(0,0,0,0.1)]">
              Histórico
            </h2>
            <div className="w-[70%] p-4 space-y-1">
              {/* LINHA 1 */}
              <div className="grid grid-cols-4 gap-1 text-[#2a6f49] font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-6">
                    <img src="/CSS/imagens/elementos/icon-user-on.png" alt="" />
                  </span>
                  Entrada
                </div>
                <div>Quarto 08</div>
                <div>10:00</div>
                <div>25/10/2025</div>
              </div>
              {/* LINHA 2 */}
              <div className="grid grid-cols-4 gap-1 text-[#6b6b6b] font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-6">
                    <img src="/CSS/imagens/elementos/icon-user-off.png" alt="" />
                  </span>
                  Saída
                </div>
                <div>Quarto 08</div>
                <div>09:00</div>
                <div>25/10/2025</div>
              </div>
              {/* LINHA 3 */}
              <div className="grid grid-cols-4 gap-1 text-[#2a6f49] font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-6">
                    <img src="/CSS/imagens/elementos/icon-user-on.png" alt="" />
                  </span>
                  Entrada
                </div>
                <div>Quarto 08</div>
                <div>08:00</div>
                <div>25/10/2025</div>
              </div>
              {/* LINHA 4 */}
              <div className="grid grid-cols-4 gap-1 text-[#6b6b6b] font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-6">
                    <img src="/CSS/imagens/elementos/icon-user-off.png" alt="" />
                  </span>
                  Saída
                </div>
                <div>Quarto 08</div>
                <div>09:00</div>
                <div>25/10/2025</div>
              </div>
              {/* LINHA 5 */}
              <div className="grid grid-cols-4 gap-1 text-[#2a6f49] font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-6">
                    <img src="/CSS/imagens/elementos/icon-user-on.png" alt="" />
                  </span>
                  Entrada
                </div>
                <div>Quarto 08</div>
                <div>06:00</div>
                <div>25/10/2025</div>
              </div>
              {/* LINHA 6 */}
              <div className="grid grid-cols-4 gap-1 text-[#6b6b6b] font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-6">
                    <img src="/CSS/imagens/elementos/icon-user-off.png" alt="" />
                  </span>
                  Saída
                </div>
                <div>Quarto 08</div>
                <div>18:00</div>
                <div>24/10/2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )}