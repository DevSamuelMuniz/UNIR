//components
import HeaderComponent from "@/Components/HeaderComponent/HeaderComponent";
import S1Carrossel from "@/Components/S1Carrossel/S1Carrossel";
import S2Sobre from "@/Components/S2Sobre/S2Sobre";

export default function home() {
  return (
    <main className="flex flex-col gap-4">
      <div>
        <HeaderComponent />
        <S1Carrossel />
        <S2Sobre />
      </div>
    </main>
  );
};