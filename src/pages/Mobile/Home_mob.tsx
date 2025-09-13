interface Props {
  setPagina: (pagina: string) => void;
}

export default function Home_mob({ setPagina }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
        <div className="relative w-[727px] h-[883px] bg-transparent overflow-hidden">
            <div className="relative w-[375px] h-[812px] bg-[#b2dfdb] border-[5px] items-center border-white rounded-[40px] shadow-[15px_15px_15px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
                <img src="/CSS/imagens-mob/imagem-menu.png"
                     className="relative object-cover bottom-0 block z-1 pointer-events-none"
                />
                <img src="/CSS/imagens-mob/inf-menu.png"
                     className="relative object-cover bottom-5 block z-0 pointer-events-none"
                />
                <img src="/CSS/imagens-mob/Path.png"
                     className="absolute object-cover bottom-[472px] block z-[2] pointer-events-none"
                />
                <img src="/CSS/imagens-mob/hnsd.png"
                     className="absolute scale-30 object-cover bottom-[330px] block z-[3] pointer-events-none"
                />

                {/* Botões */}
                <div className="absolute whitespace-nowrap items-center bottom-50 flex flex-col z-10 left-1/2 -translate-x-1/2 gap-5">
                    <div className="relative whitespace-nowrap flex flex-col z-10 gap-5">
                        <button
                            className="px-[40px] py-[20px] text-[22px] font-semibold text-white bg-[#046da0] border-[2px] border-[#01537b] 
                            rounded-full  shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                            onClick={() => setPagina("Login_mob")}
                            >
                            Já Tenho Cadastro
                        </button>
                        <button
                            className="px-[40px] py-[20px] text-[22px] font-semibold text-white bg-[#046da0] border-[2px] border-[#01537b] 
                            rounded-full  shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                            onClick={() => setPagina("Cadastro_mob")}
                            >
                            Cadastrar Agora
                        </button>
                    </div>
                    <div className="relative whitespace-nowrap z-10">
                        <button
                            className="px-[60px] py-[15px] text-[22px] font-semibold text-[#26a69a] bg-white border-[2px] border-[#26a69a] 
                            rounded-full  shadow-[5px_5px_8px_rgba(0,0,0,0.1)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                            onClick={() => setPagina("Ajuda_mob")}
                            >
                            Ajuda
                        </button>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )}