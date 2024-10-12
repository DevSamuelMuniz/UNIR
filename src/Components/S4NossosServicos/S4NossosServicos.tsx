/* eslint-disable @next/next/no-img-element */



export default function S4NossosServicos() {
  return (
    <main className="flex gap-16 items-center justify-center bg-[#15407D] p-10 ">
      <div className="flex flex-col w-1/3 gap-16 h-full text-end">
        <h1 className="text-3xl font-bold text-white ">NOSSOS SERVIÇOS</h1>
        <div className="flex justify-end gap-32 text-xl text-white">
          <div>
            <ul className="flex gap-6 flex-col list-disc items-end">
              <li>WebSites</li>
              <li>Softwares</li>
              <li>Landing Page</li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-6 flex-col list-disc items-end">
              <li>Sistemas</li>
              <li>Automação</li>
              <li>Aplicativos Mobile</li>
            </ul>
          </div>
        </div>
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
