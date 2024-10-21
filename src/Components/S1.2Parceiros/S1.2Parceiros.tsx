import Image from "next/image";

export default function S12Parceiros() {
  return (
    <main className="flex gap-10 items-center justify-center p-10 h-96 flex-col">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-600">Nossos Clientes</h1>
        <p className="text-gray-500">
          Conheça um pouco quem são alguns dos nossos clientes.
        </p>
      </div>

      <div className="flex justify-around w-full">
        <Image
          src="/Assets/Imgs/S1.2Parceiros/MaryConfeccoes.png"
          alt="Logo Mary Confecções"
          width={150}
          height={100}
        />
        <Image
          src="/Assets/Imgs/S1.2Parceiros/RayssaFisio.png"
          alt="Logo Rayssa Fisio"
          width={150}
          height={100}
        />
        <Image
          src="/Assets/Imgs/S1.2Parceiros/Sammu.png"
          alt="Logo Sammu"
          width={150}
          height={100}
        />
        <Image
          src="/Assets/Imgs/S1.2Parceiros/RayssaJoias.png"
          alt="Logo Rayssa Joias"
          width={150}
          height={100}
        />
      </div>
    </main>
  );
}
