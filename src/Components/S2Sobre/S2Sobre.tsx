export default function S2Sobre() {
    return (
        <main className="flex gap-4 items-center justify-center bg-[#15407D] p-10 ">
            <div>
                <img src="/Assets/Imgs/S2Sobre/bannerSobre.png" alt="" />
            </div>

            <div className="flex flex-col w-1/3 gap-10 h-full">
                <h1 className="text-3xl font-bold text-white ">SOBRE NÓS</h1>
                <p className="text-white text-lg font-sem">Na Unir, somos três sócios: Eudes Jordão, John Alencar e Samuel Muniz, unidos por um desejo em comum: transformar a vida das pessoas e suas realidades por meio de soluções tecnológicas inovadoras. Com base na Bíblia Cristã, nossa ética e valores colocam Jesus no centro de todos os nossos sonhos e projetos.</p>
                <button className="border-2 border-[#4C81CD] bg-white text-[#0C2548] text-lg font-semibold p-2">SAIBA MAIS</button>
            </div>
        </main>
    );
};