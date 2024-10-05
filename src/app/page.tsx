//components
import HeaderComponent from "@/Components/HeaderComponent/HeaderComponent";
import S1Carrossel from "@/Components/S1Carrossel/S1Carrossel";
import S2Sobre from "@/Components/S2Sobre/S2Sobre";
import S3Branco from "@/Components/S3Branco/S3Branco";
import S4NossosServicos from "@/Components/S4NossosServicos/S4NossosServicos";
import S5Branco from "@/Components/S5Branco/S5Branco";
import S6Contatos from "@/Components/S6Contatos/S6Contatos";
import S7Branco from "@/Components/S7Branco/S7Branco";
import FooterComponent from "@/Components/FooterComponent/FooterComponent";

export default function home() {
  return (
    <main className="flex flex-col gap-4">
      <div>
        <HeaderComponent />
        <S1Carrossel />
        <S2Sobre />
        <S3Branco />
        <S4NossosServicos />
        <S5Branco />
        <S6Contatos />
        <S7Branco />
        <FooterComponent />
      </div>
    </main>
  );
}
