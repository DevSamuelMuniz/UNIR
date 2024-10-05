export default function HeaderComponent() {
  return (
    <main className="flex justify-between align-middle items-center p-4 px-8 shadow-md">
      <img
        className="w-24"
        src="/Assets/Imgs/Header/logoSemNome.png"
        alt="Logo"
      />

      <ul className="flex justify-center items-center gap-20 text-[#0C2548] font-semibold">
        <li className="group relative">
          <a className="hover:no-underline" href="">
            Início
          </a>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0C2548] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </li>
        <li className="group relative">
          <a className="hover:no-underline" href="">
            Sobre nós
          </a>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0C2548] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </li>
        <li className="group relative">
          <a className="hover:no-underline" href="">
            Serviços
          </a>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0C2548] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </li>
        <li className="group relative">
          <a className="hover:no-underline" href="">
            Contatos
          </a>
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0C2548] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
        </li>
      </ul>

      <a
        className="p-3 border-2 rounded-sm  border-[#15407D] text-[#0C2548] font-semibold hover:bg-[#15407D] hover:text-white transition-colors"
        href=""
      >
        TRABALHE CONOSCO
      </a>
    </main>
  );
}
