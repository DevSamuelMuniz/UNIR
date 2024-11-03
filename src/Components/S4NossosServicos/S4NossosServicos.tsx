

export default function S4NossosServicos() {
  return (
    <main className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center justify-center bg-[#15407D] p-6 lg:p-10">
      <div className="flex flex-col w-full lg:w-1/2 gap-8 lg:gap-16 text-center lg:text-end">
        <h1 className="text-2xl lg:text-3xl font-bold text-white">NOSSOS SERVIÇOS</h1>
        <div className="flex justify-center lg:justify-end text-lg lg:text-xl text-white">
          <ul className="grid grid-cols-2 gap-x-16 gap-y-4 list-disc lg:list-inside lg:text-right ml-6">
            <li>Sistemas</li>
            <li>WebSites</li>
            <li>Softwares</li>
            <li>Automação</li>
            <li>Landing Page</li>
            <li>Aplicativos Mobile</li>
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/Assets/Imgs/bannerNossosServicos.png"
          alt="Banner Nossos Serviços"
          width={800}  // Defina a largura real da imagem ou ajuste conforme necessário
          height={600}  // Defina a altura real da imagem ou ajuste conforme necessário
          className="w-full h-auto max-w-xl"
        />
      </div>
    </main>
  );
}

//mudei