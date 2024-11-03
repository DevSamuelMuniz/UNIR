

export default function S6Contatos() {
  return (
    <main className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-center justify-center bg-[#15407D] p-6 lg:p-10">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/Assets/Imgs/bannerContatos.png"
          alt="Imagem ilustrativa de contato para a seção 'Trabalhe Conosco'"
          className="w-full h-auto max-w-xl"
          width={600}  // Ajuste conforme o tamanho real da imagem
          height={400} // Ajuste conforme o tamanho real da imagem
        />
      </div>

      <div className="flex flex-col w-full lg:w-1/3 gap-6 lg:gap-10 h-full text-center lg:text-left">
        <h1 className="text-2xl lg:text-3xl font-bold text-white">
          TRABALHE CONOSCO
        </h1>
        <p className="text-white text-base lg:text-lg font-normal">
          Se sua empresa busca soluções de software sob medida, estamos prontos
          para ajudar! Trabalhe conosco e eleve seus ganhos com projetos
          inovadores e eficientes, desenvolvidos por uma equipe de
          desenvolvedores especializados. Não perca a chance de transformar suas
          ideias em resultados reais. Junte-se a nós e veja a diferença que
          podemos fazer para o seu negócio!
        </p>
        <a
          className="border-2 border-[#4C81CD] bg-white text-[#0C2548] text-base lg:text-lg font-semibold p-2 hover:text-white hover:bg-[#4C81CD] transition-colors text-center"
          href="https://wa.me/5581984639299?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20sua%20empresa!"
          target="_blank"
          rel="noopener noreferrer"
        >
          TRABALHE CONOSCO
        </a>
      </div>
    </main>
  );
}
