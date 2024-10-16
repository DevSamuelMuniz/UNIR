const cards = [
  {
    img: "/Assets/Imgs/S5Branco/GB.png",
    name: "Barbearia GB",
    classificacao: "Sistema e WebSite",
  },
  {
    img: "/Assets/Imgs/S5Branco/MaryConfeccoes.png",
    name: "Mary Confecções",
    classificacao: "Sistema",
  },
  {
    img: "/Assets/Imgs/S5Branco/Rayssa.png",
    name: "Rayssa Joias",
    classificacao: "WebSite",
  },
  {
    img: "/Assets/Imgs/S5Branco/Samuel.png",
    name: "Sammu Solutions",
    classificacao: "WebSite",
  },
];

export default function S5Trabalhos() {
  return (
    <main className="flex flex-col items-center justify-center my-24 px-4">
      <div className="w-full lg:w-1/2 flex justify-center">
        <h1 className="text-5xl font-bold pb-[4rem] text-[#15407D]">
          Nossos Trabalhos!
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {cards.map((card, i) => (
          <div
            key={i}
            className="border border-black rounded-sm overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-48 object-cover"
              src={card.img}
              alt={card.name}
            />
            <div className="h-28 flex flex-col items-center justify-center bg-gray-600 text-white p-4">
              <p className="pb-2 font-semibold text-lg">{card.name}</p>
              <p className="text-sm">{card.classificacao}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
