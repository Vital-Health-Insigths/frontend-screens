interface Props {
  setPagina: (pagina: string) => void;
}

export default function Home_admin({ setPagina }: Props) {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
        <div className="relative w-[727px] h-[883px] bg-[#f5f5f5] border-[10px] border-white rounded-[40px] shadow-[15px_15px_15px_rgba(0,0,0,0.4)] overflow-hidden mx-auto">
            <img
                src="/CSS/admin/superior-menu-admin.png"
                className="absolute w-[800px] object-fill z-10 pointer-events-none"
            />
            <img
                src="/CSS/admin/inferior-admin.png"
                className="absolute top-[531px] h-150 object-none block z-0 pointer-events-none"
            />

            <div className="absolute whitespace-nowrap bottom-195  flex z-10">
                <button
                    className="relative left-[20px] px-[30px] py-[10px] text-[20px] font-semibold text-black bg-[#f5f5f5] border-[4px] border-[#546d79]
                               rounded-full hover:backdrop-brightness-200 shadow-[5px_5px_5px_rgba(0,0,0,0.1)] 
                               duration-200 hover:brightness-105 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Home")}
                >
                SAIR
                </button>
            </div>

            <div className="absolute whitespace-nowrap bottom-135 left-1/2 transform -translate-x-1/2 flex flex-col z-30 min-w-[200px]">
                <div className="absolute w-[155px] h-[155px] bottom-16 flex items-center justify-center left-1/2 transform -translate-x-1/2">
                    <img 
                        src="/CSS/admin/perfil_admin.png"
                        className="w-[140px] h-[140px]  object-cover pointer-events-none z-10"
                    />
                </div>

                <h1 className="text-[40px] font-bold text-black text-center text-shadow-[5px_5px_8px_rgba(0,0,0,0.15)]"
                >
                Admin
                </h1>
            </div>

            <div className="absolute whitespace-nowrap bottom-40 left-1/2 transform -translate-x-1/2 flex flex-col gap-[25px] z-10 min-w-[200px]">
                <button
                    className="px-[150px] py-[20px] text-[35px] font-semibold text-black bg-[#bdbdbd] border-[4px] border-[#546d79] 
                    rounded-full  shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Busca_usuario_admin")}
                >
                Visitantes
                </button>
                <button
                    className="px-[150px] py-[20px] text-[35px] font-semibold text-black bg-[#bdbdbd] border-[4px] border-[#546d79] 
                    rounded-full  shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Busca_quarto_admin")}
                >
                Quartos
                </button>
                <button
                    className="px-[150px] py-[20px] text-[35px] font-semibold text-black bg-[#bdbdbd] border-[4px] border-[#546d79] 
                    rounded-full shadow-[5px_5px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
                    onClick={() => setPagina("Base_admin")}
                >
                Config
                </button>
            </div>
        </div>
    </div>
  )}