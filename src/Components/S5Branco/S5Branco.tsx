const cards = [
  {
    img: "/Assets/Imgs/S5Branco/GB.png",
    name: "Barbearia GB",
    classificacao: "Sistema e WebSite"
  },
  {
    img: "/Assets/Imgs/S5Branco/MaryConfeccoes.png",
    name: "Mary Confecções",
    classificacao: "Sistema e WebSite"
  },
  {
    img: "/Assets/Imgs/S5Branco/Rayssa.png",
    name: "Rayssa Joias",
    classificacao: "Sistema e WebSite"
  },
  {
    img: "/Assets/Imgs/S5Branco/Samuel.png",
    name: "Sammu Solutions",
    classificacao: "Sistema e WebSite"
  },
  
]

export default function S5Branco() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center pb-10 h-[60vh] ">
        <h1 className="text-5xl font-bold pb-[4rem] text-[#15407D]">
          Nossos Trabalhos!
        </h1>

        <div className="flex w-[100vw] justify-around">
          {cards.map((cards, i) =>(
            <div key={i} className="border border-black">
              <img className="w-[18rem]" src={cards.img}/>
              <div className="h-[7rem] flex flex-col items-center justify-center bg-gray-600 text-white">
                <p className="pb-4">{cards.name}</p>
                <p>{cards.classificacao}</p>
              </div>
            </div>
          ))}
        </div>
    </main>
  );
}
