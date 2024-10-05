export default function S4NossosServicos() {
  return (
    <main className="flex gap-4 items-center justify-center bg-[#15407D] p-10 ">
      <div className="flex flex-col w-1/3 gap-10 h-full">
        <h1 className="text-3xl font-bold text-white ">NOSSOS SERVIÇOS</h1>
        <p className="text-white text-lg font-sem">
          Somos uma empresa especializada em desenvolver sistemas que atendem às
          necessidades de empreendedores de todos os tamanhos e segmentos. Nossa
          missão é fornecer ferramentas e soluções eficientes que promovam o
          crescimento sustentável, otimizem processos e fortaleçam a
          competitividade no mercado.
        </p>
        <button className="border-2 border-[#4C81CD] bg-white text-[#0C2548] text-lg font-semibold p-2 hover:text-white hover:bg-[#4C81CD] transition-colors" >
          SAIBA MAIS
        </button>
      </div>

      <div>
        <img
          src="/Assets/Imgs/S4NossosServicos/bannerNossosServicos.png"
          alt=""
        />
      </div>
    </main>
  );
}
