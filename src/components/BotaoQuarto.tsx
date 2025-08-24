interface BotaoQuartoProps {
    titulo: string;
    numero: string;
    selected: boolean;
    onClick?: () => void;
}

export default function BotaoQuarto({ titulo, numero, selected, onClick }: BotaoQuartoProps) {
  return (
    <button
        onClick={onClick}
        className="flex flex-col items-center justify-center w-[286px] h-[200px] 
            bg-gradient-to-b from-[#ceeae8] to-[#b9f1ec] 
            border-6 border-[#046da0] rounded-[60px] shadow-[8px_8px_18px_rgba(0,0,0,0.2)]
            hover:scale-105 active:scale-95 transition-all duration-200 overflow-hidden relative"
    >
        <span className="absolute font-medium text-gray-800 text-[18px] bottom-37">
            {titulo}
        </span>
        <span className={`absolute z-10 bottom-16 font-bold text-black text-shadow-[2px_2px_8px_rgba(0,0,0,0.3)] 
                transition-all duration-300 ${selected ? "text-4xl -translate-y-12" : "text-7xl"}`}>
            {numero}
        </span>

        <span
            className={`
                absolute bottom-22 text-[18px] text-black font-semibold
                transition-all duration-250 ease-in-out
                ${selected ? "opacity-80 " : "opacity-0"}`}
                >
                Vagas Disponíveis:
        </span>

        <span
        // Necessita Variavel 
            className={`
                absolute bottom-13 text-[25px] text-black font-semibold
                transition-all duration-250 ease-in-out
                ${selected ? "opacity-100 " : "opacity-0"}`}
                >
                02
        </span>

        <span
            className={`
                absolute bottom-[12px] text-[18px] text-green-700 font-semibold
                transition-all duration-600 ease-in-out
                ${selected ? "opacity-80 " : "opacity-0"}`}
                >
                Selecionado
        </span>

        <img
            src="/CSS/imagens/elementos/wave-botao.png" 
            className={`absolute bottom-8 w-full object-cover transition-all duration-300 ${selected ? "" : ""}`}
        />
    </button>
  );
}
