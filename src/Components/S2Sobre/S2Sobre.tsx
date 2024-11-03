

export default function S2Sobre() {
  return (
    <main className="flex flex-col lg:flex-row gap-4 items-center justify-center bg-[#15407D] p-6 lg:p-10">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/Assets/Imgs/bannerSobre.png"
          alt="Banner sobre nós"
          width={800} // Ajuste de acordo com o tamanho real da imagem
          height={600} // Ajuste de acordo com o tamanho real da imagem
          className="w-full h-auto max-w-xl"
        />
      </div>

      <div className="flex flex-col w-full lg:w-1/3 gap-6 lg:gap-10 h-full text-center lg:text-left">
        <h1 className="text-2xl lg:text-3xl font-bold text-white">SOBRE NÓS</h1>
        <p className="text-white text-base lg:text-lg font-normal">
          Na Unir, somos três sócios: Samuel Muniz, Eudes Jordão e John Alencar,
          unidos por um desejo em comum: transformar a vida das pessoas e suas
          realidades por meio de soluções tecnológicas inovadoras. Com base na
          Bíblia Cristã, nossa ética e valores colocam Jesus no centro de todos
          os nossos sonhos e projetos.
        </p>
        <a
          className="border-2 border-[#4C81CD] bg-white text-[#0C2548] text-base lg:text-lg font-semibold p-2 hover:text-white hover:bg-[#4C81CD] transition-colors text-center"
          href="https://www.instagram.com/unityinnovation/"
          target="_blank"
        >
          SAIBA MAIS
        </a>
      </div>
    </main>
  );
}
