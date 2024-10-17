"use client"

export default function HeaderComponent() {

  const scrollToSection = (id: any) => {
    const section = document.querySelector(id);
    const offset = 200; 
    const sectionPosition = section.offsetTop - offset;
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <main className="fixed top-0 left-0 w-full z-50 flex justify-between align-middle items-center p-4 px-8 shadow-md bg-white">
      <img
        className="w-24"
        src="/Assets/Imgs/Header/logoSemNome.png"
        alt="Logo"
      />

      <ul className="justify-center items-center gap-10 customSmall:gap-20 md:gap-8 lg:gap-20 customPhone:flex hidden text-[#0C2548] font-semibold">
        <li className="group relative">
          <button className="hover:no-underline" onClick={() => scrollToSection("#inicio")}>
            Início
          </button>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0C2548] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </li>
        <li className="group relative">
          <button className="hover:no-underline" onClick={() => scrollToSection("#sobre")}>
            Sobre nós
          </button>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0C2548] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </li>
        <li className="group relative">
          <button className="hover:no-underline" onClick={() => scrollToSection("#servicos")}>
            Serviços
          </button>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0C2548] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </li>
        <li className="group relative">
          <button className="hover:no-underline" onClick={() => scrollToSection("#contatos")}>
            Contatos
          </button>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0C2548] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </li>
      </ul>

      <a
        className="lg:p-3 text-sm p-2 md:flex hidden border-2 rounded-sm border-[#15407D] text-[#0C2548] font-semibold hover:bg-[#15407D] hover:text-white transition-colors"
        href="#contatos"
      >
        TRABALHE CONOSCO
      </a>
    </main>
  );
}
