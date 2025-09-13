interface Props {
  setPagina: (pagina: string) => void;
}

export default function Cadastro_mob({ setPagina }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="relative w-[727px] h-[883px] bg-transparent overflow-hidden">

        <div className="relative w-[375px] h-[812px] bg-[#f5f5f5] border-[5px] items-center border-white rounded-[40px] shadow-[15px_15px_15px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
          <img
              src="/CSS/imagens-mob/sup.png"
              className="relative object-cover bottom-0 block z-1 pointer-events-none"
          />
          <img
              src="/CSS/imagens-mob/inf.png"
              className="absolute object-cover bottom-0 block z-0 pointer-events-none"
          />

          <div className="absolute whitespace-nowrap bottom-184 left-[27px] flex z-10">
              <button className="px-[10px] py-[5px] text-[12px] font-semibold text-black bg-transparent rounded-full duration-200 hover:scale-105 active:scale-95"
                      onClick={() => setPagina("Home_mob")}>
              <span>
                <img src="/CSS/imagens-mob/icon-seta.png"
                      className="absolute w-5 h-5 left-[-10px] top-[3px]"
                /></span>
              <span className=""> VOLTAR </span>
              </button>
          </div>


          {/* content */}
          <div className="relative h-[565px] flex flex-col gap-25 items-center justify-self-center">

            {/* head */}
            <div className="relative z-10 flex items-center justify-center pointer-events-none">
              <div className="absolute bottom-1">
                <div className="relative z-0 w-22 border-[#046da0] border-3 rounded-full flex items-center justify-center text-white font-bold">
                  <img src="/CSS/imagens-mob/icon-perfil.png"
                  />
                </div>
              </div>
              <h1 className="absolute top-10 text-center text-[28px] font-normal text-black ">
                Cadastro
              </h1>

              <div className="relative flex top-22 pr-10">
                <img src="/CSS/imagens-mob/icon-regis.png"
                    className=" h-[38px] pr-2"
                />
                <h2 className="text-[12px] font-semibold text-left text-black">
                    Olá, Seja Bem-Vindo! <br/> Por favor Preencha Os Dados.
                </h2>
              </div>
            </div>
            
            {/* form */}
            <div className=" w-[105%] mt-4 flex flex-col gap-3 z-20 pointer-events-none">
              {/* Campo: Nome */}
              <input
                  type="text"
                  placeholder="NOME"
                  className=" pointer-events-auto px-[20px] py-[16px] text-[12px] text-left font-inter font-semibold rounded-full border-[2px] opacity-60 border-[#046da0] bg-transparent text-[#787777]  focus:outline-none"
              />
              {/* Campo: CPF */}
              <input
                  type="text"
                  placeholder="CPF"
                  className="pointer-events-auto px-[20px] py-[16px] text-[12px] text-left font-inter font-semibold rounded-full border-[2px] opacity-60 border-[#046da0] bg-transparent text-[#787777]  focus:outline-none"
              />
              {/* Campo: EMAIL */}
              <input
                  type="email"
                  placeholder="EMAIL"
                  className="pointer-events-auto px-[20px] py-[16px] text-[12px] text-left font-inter font-semibold rounded-full border-[2px] opacity-60 border-[#046da0] bg-transparent text-[#787777]  focus:outline-none"
              />
              {/* Campo: SENHA */}
              <input
                  type="text"
                  placeholder="SENHA"
                  className="pointer-events-auto px-[20px] py-[16px] text-[12px] text-left font-inter font-semibold rounded-full border-[2px] opacity-60 border-[#046da0] bg-transparent text-[#787777]  focus:outline-none"
              />
              <input
                  type="text"
                  placeholder="REPETIR SENHA"
                  className="pointer-events-auto px-[20px] py-[16px] text-[12px] text-left font-inter font-semibold rounded-full border-[2px] opacity-60 border-[#046da0] bg-transparent text-[#787777]  focus:outline-none"
              />
            </div>

            {/* Botão Confirmar */}
            <div className="absolute bottom-0 items-center whitespace-nowrap flex z-30">
                <button
                    className="px-[32px] py-[12px] text-[14px] font-semibold text-white bg-[#0a6fa1] border-[4px] border-[#046da0] 
                               rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] disabled:opacity-40
                               duration-200 hover:brightness-105 hover:scale-105 active:scale-95 "
                    onClick={() => setPagina("Perfil_mob")}
                >
                CADASTRAR
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}