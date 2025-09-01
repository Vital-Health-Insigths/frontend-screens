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
              <button
                  className="px-[10px] py-[5px] text-[12px] font-semibold text-black bg-transparent rounded-full
                             duration-200 hover:scale-105 active:scale-95"
                  onClick={() => setPagina("Home_mob")}
              >
              <span>
                <img src="/CSS/imagens-mob/icon-seta.png"
                  className="absolute w-5 h-5 left-[-10px] top-[3px]"
                />
              </span>
              <span className=""> VOLTAR </span>
             
              </button>
          </div>


        </div>
      </div>
    </div>
  )}