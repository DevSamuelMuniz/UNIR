export default function S6Contatos() {
  return (
    <main className="flex gap-4 items-center justify-center bg-[#15407D] p-10 ">
      <div>
        <img src="/Assets/Imgs/S6Contatos/bannerContatos.png" alt="" />
      </div>

      <div className="flex flex-col w-1/3 gap-10 h-full">
        <h1 className="text-3xl font-bold text-white ">TRABALHE CONOSCO</h1>
        <p className="text-white text-lg font-sem">
          Se sua empresa busca soluções de software sob medida, estamos prontos para ajudar! 
          Trabalhe conosco e eleve seus ganhos com projetos inovadores e eficientes, 
          desenvolvidos por uma equipe de desenvolvedores especializados. 
          Não perca a chance de transformar suas ideias em resultados reais. 
          Junte-se a nós e veja a diferença que podemos fazer para o seu negócio!
        </p>
        <button className="border-2 border-[#4C81CD] bg-white text-[#0C2548] text-lg font-semibold p-2 hover:text-white hover:bg-[#4C81CD] transition-colors" > 
          TRABALHE CONOSCO
        </button>
      </div>
    </main>
  );
}
