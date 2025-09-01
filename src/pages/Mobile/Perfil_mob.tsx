interface Props {
  setPagina: (pagina: string) => void;
}

export default function Perfil_mob({ setPagina }: Props) {
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

                <div className="absolute whitespace-nowrap bottom-184 right-[35px] flex z-10 ">
                    <button className="px-[10px] py-[5px] text-[12px] font-semibold text-black bg-transparent rounded-full duration-200 hover:scale-105 active:scale-95"
                            onClick={() => setPagina("Home_mob")}>
                        <span>
                            <img src="/CSS/imagens-mob/icon-sair.png"
                                 className="absolute h-6 right-[-19px] top-[3px]"
                            />
                        <span className=""> SAIR </span>
                        </span>
                    </button>
                </div>
                <div className="absolute whitespace-nowrap bottom-182 left-[59px] flex z-10 ">
                    <div className="px-[10px] py-[5px] text-[18px] font-semibold text-white bg-transparent rounded-full">
                        <span>
                            <img src="/CSS/imagens-mob/hnsd.png"
                                 className="absolute h-12 right-[50px] top-[-2px]"
                            />
                        <span className=""> Olá! </span>
                        </span>
                    </div>
                </div>

                {/* content */}
                <div className="relative h-[565px] flex flex-col gap-25 items-center justify-self-center">

                    {/* head */}
                    <div className="absolute whitespace-nowrap bottom-105 flex flex-col z-30">
                        <div className="absolute w-[130px] h-[130px] bottom-15 rounded-full border-4 border-[#15645c] bg-[#f5f5f5] flex items-center justify-center left-1/2 transform -translate-x-1/2 shadow-[5px_5px_8px_rgba(0,0,0,0.15)]">
                            <img 
                                src="/CSS/imagens/elementos/imagem-perfil.png"
                                className="w-[110px] h-[110px] rounded-full object-cover pointer-events-none z-10"
                            />
                        </div>
                        <div className="absolute w-[35px] h-[35px] bottom-16 right-11 rounded-full bg-[#26a69a] flex items-center 
                                        justify-center shadow-[5px_5px_8px_rgba(0,0,0,0.15)]">
                            <img src="CSS/imagens-mob/icon-edit.png"
                                 className="h-[20px]" />
                        </div>



                        {/* Necessita variavel para alterar nome do visitante */}
                        <h1 className="text-[26px] font-bold text-black text-center text-shadow-[5px_5px_8px_rgba(0,0,0,0.2)]"
                        >
                        Nome do Usuário
                        </h1>
                    </div>

                {/* Botões */}
                <div className="absolute whitespace-nowrap items-center bottom-40 flex flex-col z-10 left-1/2 -translate-x-1/2 gap-5">
                    <div className="relative whitespace-nowrap flex flex-col z-10 gap-5">
                        <button
                            className="px-[50px] py-[14px] text-[18px] font-semibold text-white bg-[#046da0] border-[2px] border-[#01537b] 
                            rounded-full  shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                            onClick={() => setPagina("Ajuda_mob")}
                            >
                            Horários
                        </button>
                        <button
                            className="px-[50px] py-[14px] text-[18px] font-semibold text-white bg-[#046da0] border-[2px] border-[#01537b] 
                            rounded-full  shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                            onClick={() => setPagina("Ajuda_mob")}
                            >
                            Histórico De Visitas
                        </button>
                        <button
                            className="px-[50px] py-[14px] text-[18px] font-semibold text-white bg-[#046da0] border-[2px] border-[#01537b] 
                            rounded-full  shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                            onClick={() => setPagina("Ajuda_mob")}
                            >
                            Alterar Dados
                        </button>
                    </div>
                </div>  
                    
                </div>
            </div>
        </div>
    </div>
  )}