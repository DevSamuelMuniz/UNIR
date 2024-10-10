//components
import HeaderComponent from "@/Components/HeaderComponent/HeaderComponent";
import S1Carrossel from "@/Components/S1Carrossel/S1Carrossel";
import S12Parceiros from "@/Components/S1.2Parceiros/S1.2Parceiros";
import S2Sobre from "@/Components/S2Sobre/S2Sobre";
import S3Grafico from "@/Components/S3Grafico/S3Grafico";
import S4NossosServicos from "@/Components/S4NossosServicos/S4NossosServicos";
import S5Trabalhos from "@/Components/S5Trabalhos/S5Trabalhos";
import S6Contatos from "@/Components/S6Contatos/S6Contatos";
import S7Socios from "@/Components/S7Socios/S7Socios";
import FooterComponent from "@/Components/FooterComponent/FooterComponent";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <section className="mb-10">
        <HeaderComponent />
      </section>

      <section id="inicio">
        <S1Carrossel />
        <S12Parceiros />
      </section>

      <section id="sobre">
        <S2Sobre />
      </section>

      <section>
        <S3Grafico />
      </section>

      <section id="servicos">
        <S4NossosServicos />
      </section>

      <section>
        <S5Trabalhos />
      </section>

      <section id="contatos">
        <S6Contatos />
      </section>

      <section>
        <S7Socios />
      </section>

      <FooterComponent />
    </main>
  );
}
